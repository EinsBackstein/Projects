#!/usr/bin/env bash
# vm-provision.sh â modular, distro-aware first-boot provisioning
# Supports: Debian/Ubuntu, Fedora, RHEL/Rocky/Alma, Arch
# Run: sudo bash vm-provision.sh

set -euo pipefail
IFS=$'\n\t'

### ===================== CONFIGURATION (edit) ===================== ###
HOSTNAME="vm"

# Networking (requires NetworkManager/nmcli)
NETWORK_IFACE=""                         # leave empty to auto-detect
NETWORK_METHOD="static"                  # "static" or "dhcp"
CON_NAME="ens160"
STATIC_IP="192.168.10.10"
PREFIX="24"
GATEWAY="192.168.10.2"
DNS="192.168.10.2 1.1.1.1 8.8.8.8"

TIMEZONE="Europe/Vienna"
LOCALE="de_AT.UTF-8"                     # prefer UTF-8
KEYBOARD_LAYOUT="de"                     # e.g. "de" or "de_AT"
KEYBOARD_VARIANT="nodeadkeys"            # "" for none
KEYBOARD_MODEL="pc105"

NEW_USER="j"
NEW_USER_PASSWORD="root"                     # avoid if possible; prefer keys
# Option 1: one-line OpenSSH public key (recommended)
NEW_USER_SSH_PUBKEY="ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEmL8xhVcPvOGmdltC+c4fTOkZkBpsuFI44MouZvm4AI 139149286+EinsBackstein@users.noreply.github.com"
# Option 2: path to a public key file on disk (RFC4716 or OpenSSH)
NEW_USER_SSH_PUBKEY_FILE=""

REGENERATE_SSH_HOST_KEYS=true
REGENERATE_MACHINE_ID=true
CLEAN_CLOUD_INIT=true

# SSH hardening
SSH_DISABLE_PASSWORD_AUTH=false
SSH_DISABLE_ROOT_LOGIN=false
SSH_PORT=22

# Packages & services
PKG_INSTALL_LIST_COMMON="curl wget ca-certificates sudo vim less jq"
PKG_INSTALL_LIST_NET_TOOLS="net-tools"   # per-distro availability handled
INSTALL_VM_TOOLS=true                    # open-vm-tools/qemu-guest-agent
INSTALL_VM_TOOLS_DESKTOP=false
ENABLE_TIMESYNC=true                     # chrony/systemd-timesyncd
ENABLE_UNATTENDED_UPGRADES=true          # Debian/Ubuntu & RHEL/Fedora (dnf-automatic)
ENABLE_FAIL2BAN=true

# Firewall & swap
ENABLE_FIREWALL=true                     # UFW (Debian/Ubuntu/Arch) or firewalld (RHEL/Fedora)
UFW_ALLOW="22/tcp,80/tcp,443/tcp"
FIREWALLD_PORTS="22/tcp,80/tcp,443/tcp"
SWAPFILE_SIZE_GB=1                       # 0 to skip

AUTO_REBOOT=true
DRY_RUN=false
### ================================================================ ###


# ---------------- helpers ----------------
log()    { echo -e "[\e[1;32m+\e[0m] $*"; }
info()   { echo -e "[\e[1;34m*\e[0m] $*"; }
warn()   { echo -e "[\e[1;33m!\e[0m] $*" >&2; }
err()    { echo -e "[\e[1;31m-\e[0m] $*" >&2; exit 1; }

[[ $EUID -eq 0 ]] || err "Run as root."

DRY_RUN=$( [[ "$DRY_RUN" =~ ^([Tt]rue|1)$ ]] && echo true || echo false )
$DRY_RUN && warn "DRY_RUN enabled â changes are not applied."

backup_file() {
  local f="$1"
  [[ -e "$f" ]] || return 0
  local ts; ts=$(date +%Y%m%d-%H%M%S)
  cp -a "$f" "${f}.bak.${ts}"
  log "Backed up $f -> ${f}.bak.${ts}"
}

run_or_dry() {
  if $DRY_RUN; then
    echo "[DRY_RUN] $*"
    return 0
  else
    eval "$@"
  fi
}

# ---------------- detect distro ----------------
DISTRO_ID="unknown"; DISTRO_FAMILY="unknown"
if [[ -r /etc/os-release ]]; then
  # shellcheck disable=SC1091
  . /etc/os-release
  DISTRO_ID="${ID:-unknown}"
  case "$DISTRO_ID" in
    ubuntu|debian)        DISTRO_FAMILY="debian" ;;
    fedora)               DISTRO_FAMILY="fedora" ;;
    rhel|centos|rocky|almalinux) DISTRO_FAMILY="rhel" ;;
    arch)                 DISTRO_FAMILY="arch" ;;
    *)                    DISTRO_FAMILY="unknown" ;;
  esac
fi
log "Detected distro: id=${DISTRO_ID} family=${DISTRO_FAMILY}"

# ---------------- package manager helpers ----------------
PM=""; PM_INSTALL=""; PM_UPDATE=""; PM_UPGRADE=""
case "$DISTRO_FAMILY" in
  debian)
    PM="apt"; PM_UPDATE="apt-get update -y"
    PM_INSTALL="DEBIAN_FRONTEND=noninteractive apt-get install -y"
    PM_UPGRADE="DEBIAN_FRONTEND=noninteractive apt-get -y upgrade"
    ;;
  fedora|rhel)
    PM="dnf"; PM_UPDATE="dnf -y makecache || true"
    PM_INSTALL="dnf -y install --skip-unavailable --setopt=install_weak_deps=False"
    PM_UPGRADE="dnf -y upgrade"
    ;;
  arch)
    PM="pacman"; PM_UPDATE="pacman -Sy --noconfirm"
    PM_INSTALL="pacman -S --noconfirm --needed"
    PM_UPGRADE="pacman -Syu --noconfirm"
    ;;
  *) warn "Unknown distro family; package operations will be limited." ;;
esac
[[ -n "$PM" ]] && log "Using package manager: $PM"

# ---------------- 1) Hostname & /etc/hosts ----------------
current_hostname=$(hostnamectl --static 2>/dev/null || hostname)
if [[ "$current_hostname" != "$HOSTNAME" ]]; then
  log "Setting hostname to: $HOSTNAME"
  run_or_dry hostnamectl set-hostname "$HOSTNAME"
else
  log "Hostname already set: $HOSTNAME"
fi

backup_file /etc/hosts
if ! $DRY_RUN; then
  if ! grep -qE "^[0-9\.]+\s+.*\b${HOSTNAME}\b" /etc/hosts; then
    echo "127.0.1.1 ${HOSTNAME}" >> /etc/hosts
    log "Appended 127.0.1.1 ${HOSTNAME} to /etc/hosts"
  fi
fi

# ---------------- 2) Networking via nmcli ----------------
if [[ -z "$NETWORK_IFACE" ]]; then
  if command -v nmcli >/dev/null 2>&1; then
    NETWORK_IFACE=$(nmcli -t -f DEVICE,TYPE,STATE device status | awk -F: '$2=="ethernet" && $3!="unavailable" {print $1; exit}')
    : "${NETWORK_IFACE:=$(nmcli -t -f DEVICE device status | awk -F: '$1!~/^lo/ {print $1; exit}')}"
  else
    NETWORK_IFACE=$(ip -o link show | awk -F': ' '$2!~/^(lo|virbr|docker|veth|br-)/ {print $2; exit}')
  fi
  [[ -n "$NETWORK_IFACE" ]] && log "Auto-detected network interface: $NETWORK_IFACE" || warn "Could not auto-detect network interface."
else
  log "Using configured NETWORK_IFACE: $NETWORK_IFACE"
fi

if command -v nmcli >/dev/null 2>&1 && [[ -n "$NETWORK_IFACE" ]]; then
  log "Configuring network via nmcli (method: $NETWORK_METHOD)"
  nmcli connection show > /root/nmcli-connections-list-before.txt || true
  if [[ "${NETWORK_METHOD,,}" == "dhcp" ]]; then
    run_or_dry "nmcli -g NAME connection show | grep -xq \"$CON_NAME\" && nmcli connection delete \"$CON_NAME\" || true"
    run_or_dry "nmcli connection add type ethernet ifname \"$NETWORK_IFACE\" con-name \"$CON_NAME\" autoconnect yes ipv4.method auto ipv6.method ignore"
    run_or_dry "nmcli connection up \"$CON_NAME\" || nmcli device connect \"$NETWORK_IFACE\" || true"
  else
    if [[ -z "$STATIC_IP" || -z "$GATEWAY" ]]; then
      warn "STATIC_IP or GATEWAY not set â skipping nmcli static config."
    else
      run_or_dry "nmcli -g NAME connection show | grep -xq \"$CON_NAME\" && nmcli connection delete \"$CON_NAME\" || true"
      run_or_dry "nmcli connection add type ethernet ifname \"$NETWORK_IFACE\" con-name \"$CON_NAME\" autoconnect yes ipv4.method manual ipv4.addresses \"${STATIC_IP}/${PREFIX}\" ipv4.gateway \"$GATEWAY\" ipv4.dns \"${DNS}\" ipv6.method ignore"
      run_or_dry "nmcli connection up \"$CON_NAME\" || nmcli device connect \"$NETWORK_IFACE\" || true"
    fi
  fi
  ! $DRY_RUN && { systemctl restart NetworkManager || true; }
else
  warn "nmcli not found or NETWORK_IFACE empty; networking left unchanged."
fi

# ---------------- 3) Machine-id & SSH host keys ----------------
if $REGENERATE_MACHINE_ID; then
  log "Resetting machine-id"
  if ! $DRY_RUN; then
    rm -f /etc/machine-id /var/lib/dbus/machine-id || true
    # Fedora/RHEL/Arch/Debian: plain setup (no --ensure)
    command -v systemd-machine-id-setup >/dev/null 2>&1 && systemd-machine-id-setup || true
  fi
fi

if $REGENERATE_SSH_HOST_KEYS; then
  if [[ -d /etc/ssh ]]; then
    log "Regenerating SSH host keys"
    ! $DRY_RUN && {
      mkdir -p /root/ssh-host-keys-backup
      cp -a /etc/ssh/ssh_host_* /root/ssh-host-keys-backup/ 2>/dev/null || true
      rm -f /etc/ssh/ssh_host_* || true
      command -v ssh-keygen >/dev/null 2>&1 && ssh-keygen -A || true
    }
  fi
fi

# ---------------- 4) cloud-init cleanup ----------------
if $CLEAN_CLOUD_INIT && command -v cloud-init >/dev/null 2>&1; then
  log "Cleaning cloud-init"
  ! $DRY_RUN && { cloud-init clean --logs || true; rm -rf /var/lib/cloud/instances/* /var/lib/cloud/instances || true; }
fi

# ---------------- 5) Timezone, Locale & Keyboard ----------------
log "Setting timezone: $TIMEZONE"
run_or_dry timedatectl set-timezone "$TIMEZONE"

log "Configuring locale: $LOCALE"
if ! $DRY_RUN; then
  case "$DISTRO_FAMILY" in
    debian)
      # Ensure locale is available and generate
      if [[ -f /etc/locale.gen ]]; then
        if grep -q "^#.*$LOCALE" /etc/locale.gen; then
          sed -i "s/^#.*$LOCALE/$LOCALE/" /etc/locale.gen
        elif ! grep -q "^$LOCALE" /etc/locale.gen; then
          echo "$LOCALE UTF-8" >> /etc/locale.gen
        fi
      fi
      command -v locale-gen >/dev/null 2>&1 && locale-gen "$LOCALE" || true
      command -v update-locale >/dev/null 2>&1 && update-locale LANG="$LOCALE" || true
      ;;
    fedora|rhel|arch)
      command -v localectl >/dev/null 2>&1 && localectl set-locale LANG="$LOCALE" || true
      ;;
  esac
fi

log "Configuring keyboard: layout=$KEYBOARD_LAYOUT variant=$KEYBOARD_VARIANT model=$KEYBOARD_MODEL"
if ! $DRY_RUN; then
  if command -v localectl >/dev/null 2>&1; then
    [[ -n "$KEYBOARD_LAYOUT" ]] && localectl set-keymap "$KEYBOARD_LAYOUT" || true
    if [[ -n "$KEYBOARD_VARIANT" ]]; then
      localectl set-x11-keymap "$KEYBOARD_LAYOUT" "$KEYBOARD_MODEL" "" "$KEYBOARD_VARIANT" || true
    else
      localectl set-x11-keymap "$KEYBOARD_LAYOUT" "$KEYBOARD_MODEL" || true
    fi
  else
    # Debian fallback
    backup_file /etc/default/keyboard
    {
      echo "XKBMODEL=\"$KEYBOARD_MODEL\""
      echo "XKBLAYOUT=\"$KEYBOARD_LAYOUT\""
      echo "XKBVARIANT=\"$KEYBOARD_VARIANT\""
      echo "XKBOPTIONS=\"\""
    } > /etc/default/keyboard
    command -v loadkeys >/dev/null 2>&1 && [[ -n "$KEYBOARD_LAYOUT" ]] && loadkeys "$KEYBOARD_LAYOUT" || true
    command -v dpkg-reconfigure >/dev/null 2>&1 && dpkg-reconfigure -f noninteractive keyboard-configuration || true
  fi
fi

# ---------------- 6) Create user & SSH key ----------------
if [[ -n "$NEW_USER" ]]; then
  if id -u "$NEW_USER" >/dev/null 2>&1; then
    log "User $NEW_USER already exists"
  else
    log "Creating user $NEW_USER"
    run_or_dry useradd -m -s /bin/bash "$NEW_USER"
    if [[ -n "$NEW_USER_PASSWORD" ]]; then
      run_or_dry "echo '${NEW_USER}:${NEW_USER_PASSWORD}' | chpasswd"
    fi
  fi

  # Admin group per distro
  case "$DISTRO_FAMILY" in
    debian)  run_or_dry "usermod -aG sudo '$NEW_USER' || true" ;;
    fedora|rhel|arch) run_or_dry "usermod -aG wheel '$NEW_USER' || true" ;;
  esac

  # SSH keys: support OpenSSH one-line or file
  run_or_dry "mkdir -p /home/'$NEW_USER'/.ssh && chmod 700 /home/'$NEW_USER'/.ssh && chown -R '$NEW_USER':'$NEW_USER' /home/'$NEW_USER'/.ssh"
  if [[ -n "${NEW_USER_SSH_PUBKEY}" ]]; then
    ! $DRY_RUN && { echo "$NEW_USER_SSH_PUBKEY" > /home/"$NEW_USER"/.ssh/authorized_keys; }
  elif [[ -n "${NEW_USER_SSH_PUBKEY_FILE}" && -f "${NEW_USER_SSH_PUBKEY_FILE}" ]]; then
    if command -v ssh-keygen >/dev/null 2>&1 && grep -q "BEGIN SSH2 PUBLIC KEY" "$NEW_USER_SSH_PUBKEY_FILE"; then
      ! $DRY_RUN && ssh-keygen -i -f "$NEW_USER_SSH_PUBKEY_FILE" > /home/"$NEW_USER"/.ssh/authorized_keys
    else
      ! $DRY_RUN && cp "$NEW_USER_SSH_PUBKEY_FILE" /home/"$NEW_USER"/.ssh/authorized_keys
    fi
  fi
  ! $DRY_RUN && { chown "$NEW_USER":"$NEW_USER" /home/"$NEW_USER"/.ssh/authorized_keys 2>/dev/null || true; chmod 600 /home/"$NEW_USER"/.ssh/authorized_keys 2>/dev/null || true; }
fi

# ---------------- 7) Packages, VM tools, time sync ----------------
install_pkg_list() {
  local list="$1"
  [[ -z "$PM" || -z "$list" ]] && return 0
  log "Installing packages: $list"
  $DRY_RUN || eval "$PM_UPDATE" >/dev/null 2>&1 || true
  $DRY_RUN || eval "$PM_INSTALL $list" || true
}

# base packages
case "$DISTRO_FAMILY" in
  debian)
    install_pkg_list "$PKG_INSTALL_LIST_COMMON $PKG_INSTALL_LIST_NET_TOOLS"
    ;;
  fedora|rhel)
    install_pkg_list "$PKG_INSTALL_LIST_COMMON $PKG_INSTALL_LIST_NET_TOOLS"
    ;;
  arch)
    # net-tools exists in Arch; ca-certificates in core
    install_pkg_list "$PKG_INSTALL_LIST_COMMON $PKG_INSTALL_LIST_NET_TOOLS"
    ;;
esac

# VMware / qemu guest tools
if [[ "$INSTALL_VM_TOOLS" == "true" ]]; then
  log "Installing guest tools (open-vm-tools and/or qemu-guest-agent)"
  case "$DISTRO_FAMILY" in
    debian)
      install_pkg_list "open-vm-tools qemu-guest-agent"
      $DRY_RUN || { systemctl enable --now open-vm-tools || true; systemctl enable --now qemu-guest-agent || true; }
      [[ "$INSTALL_VM_TOOLS_DESKTOP" == "true" ]] && install_pkg_list "open-vm-tools-desktop fuse"
      ;;
    fedora|rhel)
      install_pkg_list "open-vm-tools qemu-guest-agent"
      $DRY_RUN || { systemctl enable --now open-vm-tools || systemctl enable --now vmtoolsd || true; systemctl enable --now qemu-guest-agent || true; }
      [[ "$INSTALL_VM_TOOLS_DESKTOP" == "true" ]] && install_pkg_list "open-vm-tools-desktop fuse"
      ;;
    arch)
      install_pkg_list "open-vm-tools qemu-guest-agent"
      $DRY_RUN || { systemctl enable --now vmtoolsd || true; systemctl enable --now qemu-guest-agent || true; }
      [[ "$INSTALL_VM_TOOLS_DESKTOP" == "true" ]] && install_pkg_list "open-vm-tools-desktop fuse"
      ;;
  esac
fi

# time sync (chrony / timesyncd)
if [[ "$ENABLE_TIMESYNC" == "true" ]]; then
  case "$DISTRO_FAMILY" in
    debian)
      install_pkg_list "chrony"
      $DRY_RUN || systemctl enable --now chrony || true
      ;;
    fedora|rhel|arch)
      install_pkg_list "chrony"
      $DRY_RUN || systemctl enable --now chronyd || true
      ;;
  esac
fi

# ---------------- 8) SSH hardening ----------------
backup_file /etc/ssh/sshd_config
log "Applying SSH hardening"
if ! $DRY_RUN; then
  # PasswordAuthentication
  if grep -qE '^\s*PasswordAuthentication' /etc/ssh/sshd_config; then
    sed -ri "s/^\s*PasswordAuthentication\s+.*/PasswordAuthentication $( [[ "$SSH_DISABLE_PASSWORD_AUTH" == "true" ]] && echo no || echo yes )/" /etc/ssh/sshd_config
  else
    echo "PasswordAuthentication $( [[ "$SSH_DISABLE_PASSWORD_AUTH" == "true" ]] && echo no || echo yes )" >> /etc/ssh/sshd_config
  fi
  # PermitRootLogin
  if grep -qE '^\s*PermitRootLogin' /etc/ssh/sshd_config; then
    sed -ri "s/^\s*PermitRootLogin\s+.*/PermitRootLogin $( [[ "$SSH_DISABLE_ROOT_LOGIN" == "true" ]] && echo no || echo yes )/" /etc/ssh/sshd_config
  else
    echo "PermitRootLogin $( [[ "$SSH_DISABLE_ROOT_LOGIN" == "true" ]] && echo no || echo yes )" >> /etc/ssh/sshd_config
  fi
  # Port
  if [[ -n "$SSH_PORT" && "$SSH_PORT" != "22" ]]; then
    if grep -qE '^\s*Port' /etc/ssh/sshd_config; then
      sed -ri "s/^\s*Port\s+.*/Port ${SSH_PORT}/" /etc/ssh/sshd_config
    else
      echo "Port ${SSH_PORT}" >> /etc/ssh/sshd_config
    fi
  fi

  # reload sshd (prefer sshd; fallback to ssh)
  systemctl reload sshd 2>/dev/null || systemctl restart sshd 2>/dev/null || systemctl reload ssh 2>/dev/null || systemctl restart ssh 2>/dev/null || true
fi

# ---------------- 9) Firewall ----------------
if [[ "$ENABLE_FIREWALL" == "true" ]]; then
  case "$DISTRO_FAMILY" in
    debian|arch)
      if command -v ufw >/dev/null 2>&1; then
        log "Configuring UFW"
        if $DRY_RUN; then
          echo "[DRY_RUN] ufw reset; ufw default deny incoming; ufw default allow outgoing; allow: ${UFW_ALLOW}"
        else
          ufw --force reset
          ufw default deny incoming
          ufw default allow outgoing
          IFS=',' read -ra RULES <<< "${UFW_ALLOW}"
          for r in "${RULES[@]}"; do ufw allow "$r" || true; done
          ufw --force enable
        fi
      else
        warn "UFW not installed â installing"
        install_pkg_list "ufw"
        ! $DRY_RUN && systemctl enable --now ufw || true
      fi
      ;;
    fedora|rhel)
      if command -v firewall-cmd >/dev/null 2>&1; then
        log "Configuring firewalld"
        if ! $DRY_RUN; then
          systemctl enable --now firewalld || true
          IFS=',' read -ra PORTS <<< "${FIREWALLD_PORTS}"
          for p in "${PORTS[@]}"; do firewall-cmd --permanent --add-port="$p" || true; done
          firewall-cmd --reload || true
        else
          echo "[DRY_RUN] firewalld allow ports: ${FIREWALLD_PORTS}"
        fi
      else
        warn "firewalld not installed â installing"
        install_pkg_list "firewalld"
        ! $DRY_RUN && systemctl enable --now firewalld || true
      fi
      ;;
  esac
fi

# ---------------- 10) Unattended security updates ----------------
if [[ "$ENABLE_UNATTENDED_UPGRADES" == "true" ]]; then
  case "$DISTRO_FAMILY" in
    debian)
      install_pkg_list "unattended-upgrades apt-listchanges"
      ! $DRY_RUN && dpkg-reconfigure -f noninteractive unattended-upgrades || true
      ;;
    fedora|rhel)
      install_pkg_list "dnf-automatic"
      if ! $DRY_RUN; then
        # enable automatic security updates timer (applies on Fedora/RHEL derivatives)
        sed -ri 's/^apply_updates\s*=.*/apply_updates = yes/' /etc/dnf/automatic.conf || true
        systemctl enable --now dnf-automatic.timer || systemctl enable --now dnf-automatic-install.timer || true
      fi
      ;;
    arch)
      warn "Arch does not provide official unattended upgrades; skipping."
      ;;
  esac
fi

# ---------------- 11) fail2ban ----------------
if [[ "$ENABLE_FAIL2BAN" == "true" ]]; then
  case "$DISTRO_FAMILY" in
    debian) install_pkg_list "fail2ban"; ! $DRY_RUN && systemctl enable --now fail2ban || true ;;
    fedora|rhel) install_pkg_list "fail2ban"; ! $DRY_RUN && systemctl enable --now fail2ban || true ;;
    arch) install_pkg_list "fail2ban"; ! $DRY_RUN && systemctl enable --now fail2ban || true ;;
  esac
fi

# ---------------- 12) Swapfile ----------------
if [[ "${SWAPFILE_SIZE_GB:-0}" -gt 0 ]]; then
  SWAPFILE="/swapfile"

  # Check if swap is already active (any swap, not just our file)
  if swapon --show | grep -q -E "^/|/dev/"; then
    log "Swap is already active, skipping swapfile creation:"
    swapon --show
  elif [[ -f "$SWAPFILE" ]] && swapon --show | grep -q "$SWAPFILE"; then
    log "Swapfile already active: $SWAPFILE"
  else
    log "Creating swapfile ${SWAPFILE_SIZE_GB}G at ${SWAPFILE}"
    if $DRY_RUN; then
      echo "[DRY_RUN] create swapfile ${SWAPFILE} ${SWAPFILE_SIZE_GB}G"
    else
      # Ensure we don't have an existing swapfile
      swapoff "$SWAPFILE" 2>/dev/null || true
      rm -f "$SWAPFILE"

      # Create swapfile with fallocate (faster) or dd (more compatible)
      if command -v fallocate >/dev/null 2>&1; then
        if ! fallocate -l "${SWAPFILE_SIZE_GB}G" "$SWAPFILE" 2>/dev/null; then
          # fallocate may fail on some filesystems, fall back to dd
          dd if=/dev/zero of="$SWAPFILE" bs=1M count=$((SWAPFILE_SIZE_GB * 1024)) \
            status=none
        fi
      else
        # Fall back to dd if fallocate is not available
        dd if=/dev/zero of="$SWAPFILE" bs=1M count=$((SWAPFILE_SIZE_GB * 1024)) \
          status=none
      fi

      # Set proper permissions and format
      chmod 600 "$SWAPFILE"
      mkswap "$SWAPFILE" >/dev/null

      # Enable swap and add to fstab if not already there
      swapon "$SWAPFILE"
      if ! grep -q "^$SWAPFILE" /etc/fstab; then
        echo "$SWAPFILE none swap sw 0 0" >> /etc/fstab
      else
        log "Swapfile already in /etc/fstab"
      fi

      log "Swapfile created and activated successfully"
    fi
  fi
fi

# ---------------- 13) Update/upgrade ----------------
log "System update/upgrade (best-effort)"
$DRY_RUN || eval "$PM_UPDATE" || true
$DRY_RUN || eval "$PM_UPGRADE" || true

# ---------------- 14) Summary & optional reboot ----------------
log "Provisioning finished."
echo "  Hostname: $HOSTNAME"
echo "  Interface: ${NETWORK_IFACE:-unknown}"
echo "  Network: ${NETWORK_METHOD}"
[[ "${NETWORK_METHOD,,}" == "static" ]] && echo "  IP: ${STATIC_IP}/${PREFIX} GW: ${GATEWAY} DNS: ${DNS}"
echo "  Locale: $LOCALE"
echo "  Keyboard: ${KEYBOARD_LAYOUT} ${KEYBOARD_VARIANT} (${KEYBOARD_MODEL})"
echo "  User: ${NEW_USER:-none}"
echo "  SSH hardening: PasswordAuth=$( [[ "$SSH_DISABLE_PASSWORD_AUTH" == "true" ]] && echo disabled || echo enabled ), RootLogin=$( [[ "$SSH_DISABLE_ROOT_LOGIN" == "true" ]] && echo disabled || echo enabled ), Port=${SSH_PORT}"
echo "  Firewall: $( [[ "$ENABLE_FIREWALL" == "true" ]] && echo enabled || echo disabled )"
echo "  Swapfile: ${SWAPFILE_SIZE_GB}G"
echo "  Machine-id reset: $REGENERATE_MACHINE_ID  SSH host keys regen: $REGENERATE_SSH_HOST_KEYS  Cloud-init cleaned: $CLEAN_CLOUD_INIT"

if $AUTO_REBOOT; then
  log "AUTO_REBOOT true â rebooting."
  $DRY_RUN || reboot
else
  log "Reboot recommended."
fi
