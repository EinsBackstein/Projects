# Linux Cheat Sheet v1.01

## Table of Contents

- **[Shortcuts](#shortcuts)**
- **[Navigation](#navigation)**
- **[Flow Control, Chains, Remote Access and File transportation](#flow-control-chains-remote-access-and-file-transportation)**
- **[File Manipulation](#file-manipulation)**
- **[File Research](#file-research)**
- **[File-Permission](#file-permission)**
- **[User and Group management](#user-and-group-management)**
- **[Archive and compress Data](#archive-and-compress-data)**
- **[Extract, sort and filter Data](#extract-sort-and-filter-data)**
- **[Mounting, Formatting and Partitioning](#mounting-formatting-and-partitioning)**
- **[Process Management](#process-management)**

---

### Shortcuts

```bash
!!                                      | repeat your last command
```

```bash
↑ or ↓                                  | navigate through your previous commands
```

```bash
Ctrl + A                                | cursor to the beginning of the commands
```

```bash
Ctrl + C                                | kills running processes in the terminal
```

```bash
Ctrl + D                                | log out
```

```bash
Ctrl + E                                | cursor to the end of the line
```

```bash
Ctrl + K                                | delete behind your cursor
```

```bash
Ctrl + L                                | clear the therminal
```

```bash
Ctrl + U                                | delete in front your cursor
```

```bash
Ctrl + W                                | delete the word left your cursor
```

```bash
Ctrl + Z                                | stops the running command
```

---

### Navigation

```bash
cd <directory>                          | change directory
```

```bash
cd “<directoryNameWithSpaces>”          | change directory
```

```bash
cd ..                                   | back one directory (multiple times possible)
```

```bash
cd /                                    | Move back to the root
```

```bash
pwd                                     | print working directory
```

```bash
ls                                      | list current directory
```

```bash
ls <directory>                          | list files in a directory
```

```bash
ls -l                                   | list current directory with more information
```

```bash
ls -a                                   | list current directory + hidden files
```

```bash
ls -d <directory>                       | lists the directory itself
```

```bash
ls -R <directory>                       | lists the directory recursively
```

```bash
du -h                                   | disk usage of a directory
```

```bash
du -ah                                  | disk usage of directories and files
```

```bash
man <command>                           | list the manual of a command
```

---

### Flow Control, Chains, Remote Access and File transportation

```bash
<command> > <file>                      | redirect stdout to a file
```

```bash
<command> >> <file>                     | redirect stdout to a file and append it
```

```bash
<command> 2> <file>                     | redirect stderr to a file
```

```bash
<command> 2>> <file>                    | redirect stderr to a file and append it
```

```bash
<command> 2> /dev/null                  | redirect stderr to /dev/null (linux’ bin)
```

```bash
<command> &> <file>                     | redirect stdout and stderr to a file
```

```bash
<command> &>> <file>                    | redirect stdout and stderr to a file and append it
```

```bash
<command1> | <command2>                 | allows to execute two commands at the same
                                          time by sending the stdout of the first
                                          command to stdin of the other one
```

---

### File Manipulation

```bash
cp <file> <new file>                    | copy a file
```

```bash
cp -r <directory> <new directory>       | copy directory
```

```bash
mv <file> <dest.Path>                   | move a file
```

```bash
mv -r <directory> <dest.Path>           | move a directory
```

```bash
rm <file>                               | delete a file
```

```bash
rm -r <directory>                       | delete a directory
```

```bash
rm -f <directory>                       | delete without asking again (forcing)
```

```bash
rm -d <directory>                       | delete empty directory
```

```bash
touch <filePath/Name>                   | create a new file 
```

```bash
mkdir <directory>                       | create a new directory
```

```bash
mkdir -p <directory>                    | creates parent-directories as well 
```

```bash
cat <textfile>                          | prints input of a textfile
```

```bash
cat -n <textfile>                       | number of output-lines
```

```bash
cat -b <textfile>                       | number of non-empty output-lines
```

```bash
cat -s <textfile>                       | squeezes duplicated lines
```

```bash
head <textfile>                         | print the first 10 lines     
```

```bash
head -<number> <textfile>               | print a specific amount from the top
```

```bash
tail <textfile>                         | print the last 10 lines
```

```bash
tail -<number> <textfile>               | print a specific amount from the bottom
```

```bash
ln <file1> <file2>                      | create a hardlink
```

```bash
ln -s <file1> <file2>                   | create a softlink
```

```bash
file <file>                             | display the real file-typ
```

```bash
file -z <file>                          | display the real file-typ in a compressed file
```

---

### File Research

```bash
locate <string>                         | return the file with matching content
```

```bash
locate <file>                           | search local DB for matching file
```

```bash
locate -d <file>                        | search an extern DB
```

```bash
locate -i <file>                        | ignore lower and upper cases
```

```bash
updated                                 | update local DB
```

```bash
find [*]<file>[*]                       | search for files on the FS in real time
```

```bash
find -name “[*]<letter(s)>[*]”          | search for files with x
```

```bash
find <file> -exec <command> \;          | execute a command on found files
```

```bash
find <file> -delete                     | delete the found files
```

```bash
find <file> -ls                         | list the found files
```

```bash
find <source> -size +|-<fileSize>       | files with a size greater/smaller x
```

```bash
find <source> -type d                   | search only for directories
```

```bash
find <source> -type f                   | search only for files
```

```bash
find <source> -atime +|-<amount>        | files with an access-time greater/smaller x
```

```bash
find <source> -amin <minutes>           | files accessed in the last x minutes
```

```bash
find <source> -mtime <days>             | files changed in the last x days
```

```bash
find <source> -mmin <minutes>           | files changed in the last x minutes
```

```bash
find <source> -empty                    | files/directories which are empty
```

```bash
find <source> -gid|-group <x>           | files with the groupID/groupName x
```

```bash
find <source> -uid|-user <x>            | files with the userID/username x
```

```bash
find <source> -writable                 | files which are able to be written
```

```bash
man find                                | for further information
```

---

### File-Permission

```bash
chown <owner>:<group> <file/dir>        | change ownership of a file/directory
```

```bash
chown -R <owner>:<group> <dir>          | change ownership of a directory recursively
```

```bash
chmod <permission> <file/dir>           | change permission on a file or directory
```

```bash
chmod -R <permission> <file/dir>        | change permission on a directory recursively
```

```bash
<permission> => abc                     | separated in three bits
```

```bash
a                                       | specification-bit for owner-permission (0-7)
```

```bash
b                                       | specification-bit for group-permission (0-7)
```

```bash
c                                       | specification-bit for others (0-7)
```

```bash
1                                       | execute-bit
```

```bash
2                                       | write-bit
```

```bash
4                                       | read-bit
```

---

### User and Group Management

```bash
useradd <login>                         | create a new user
```

```bash
usermod -aG <group(s)>                  | append secondary group to the existing ones
```

```bash
usermod -l <newLogin> <login>           | change a user’s login
```

```bash
usermod -m <login>                      | move contents from homedir to other location
```

```bash
useradd/mod -c <name> <login>           | create/modify user + name
```

```bash
useradd/mod -d <directory> <login>      | create/modify user + specify homedir.
```

```bash
useradd/mod -g <group> <login>          | create/modify user + primary group
```

```bash
useradd/mod -G <group(s)> <login>       | create/modify user + secondary group(s)
```

```bash
useradd/mod -p <passwd> <login>         | create/modify user + password
```

```bash
useradd/mod -s <shell> <login>          | create/modify user + login shell
```

```bash
useradd/mod -u <uid> <login>            | create/modify user with specific UID
```

```bash
userdel <login>                         | delete user
```

```bash
userdel -f <login>                      | force userdel even if he’s logged in
```

```bash
userdel -r <login>                      | delete user’s homedir as well
```

```bash
groupadd <name>                         | create a new group
```

```bash
groupmod -n <newName> <name>            | modify a group’s name
```

```bash
groupadd/mod -g <gid> <name>            | create/modify group with its GID
```

```bash
groupdel <name>                         | delete a group
```

```bash
passwd <login/name>                     | change password for a user/group
```

---

### Archive and compress Data

```bash
tar -cvzf <archive> <source>            | create a compressed archive
```

```bash
tar -rvf <archive> <files>              | add files to uncompressed archive
```

```bash
tar -tf <archive>                       | show contents of the archive
```

```bash
tar -xvzf <archive> -C <destination>    | extract and unzip archive to a destination
```

```bash
tar -uf <archive> <files>               | update similar files in an unzip archive
```

```bash
gzip <archive>                          | compress archive to a .tar.gz-file
```

```bash
gzip -r <archive>                       | compress archive recursively
```

```bash
gunzip <archive>                        | unzip a compressed archive
```

```bash
gunzip -r <archive>                     | unzip a compressed archive recursively
```

---

### Extract, sort and filter Data

#### Extract data

```bash
head <textfile>                         | print the first 10 lines     
```

```bash
head -<number> <textfile>               | print a specific amount from the top
```

```bash
tail <textfile>                         | print the last 10 lines
```

```bash
tail -<number> <textfile>               | print a specific amount from the bottom
```

#### Sort Data

```bash
sort <file>                             | sort lines of text files
```

```bash
sort -r <file>                          | reverse the order while sorting
```

```bash
sort -k <column_number> <file>          | sort based on a specific column
```

#### Filter data

```bash
grep '<pattern>' <file>                 | search for a pattern in a file
```

```bash
grep -i '<pattern>' <file>              | case-insensitive pattern search
```

```bash
grep -v '<pattern>' <file>              | display lines not containing the pattern
```

```bash
awk '/<pattern>/' <file>                | pattern scanning and processing language
```

```bash
sed -n '/<pattern>/p' <file>            | stream editor for filtering and transforming text
```

```bash
cut -f <column_number> <file>           | remove sections from each line of a file
```

---

### Mounting, Formatting and Partitioning

#### Mounting

```bash
mount /dev/sdX1 /mnt                    | mount the partition /dev/sdX1 to the /mnt directory
```

```bash
mount -t ext4 /dev/sdX1 /mnt            | mount with a specific file system type (ext4 in this case)
```

```bash
umount /mnt                             | unmount the file system mounted on /mnt
```

#### Formatting

```bash
mkfs.ext4 /dev/sdX1                     | format the partition /dev/sdX1 as ext4
```

```bash
mkfs.ntfs /dev/sdX1                     | format the partition /dev/sdX1 as NTFS
```

```bash
mkswap /dev/sdX1                        | create a swap area on /dev/sdX1
```

#### Partitioning

```bash
fdisk /dev/sdX                          | start the fdisk utility for partitioning /dev/sdX
```

```bash
gparted                                 | open the GParted graphical partition editor
```

```bash
parted /dev/sdX                         | command-line partitioning tool
```

```bash
gdisk /dev/sdX                          | GPT partitioning tool for GUID Partition Table
```

```bash
lsblk                                   | list information about block devices, including partitions
```

---
Give the most important Linux commands of Process Management in stile like that:

### Process Management

#### List Running Processes

```bash
ps                                      | display information about active processes  
```

```bash
ps aux                                  | detailed list of all processes
```

```bash
top                                     | dynamic real-time view of running processes
```

```bash
htop                                    | interactive process viewer
```

#### Kill or Signal Processes

```bash
kill <PID>                              | send a signal to terminate a process with a specific PID  
```

```bash
killall <process_name>                  | send a signal to terminate all processes with a specific name

```

```bash
pkill <process_name>                    | signal processes based on name
```

```bash
kill -9 <PID>                           | forcefully terminate a process
```

#### Background and Foreground

```bash
<command> &                             | run a command in the background
```

```bash
bg                                      | list stopped or background jobs
```

```bash
fg                                      | bring a background job to the foreground
```

#### Job Control

```bash
jobs                                    | display a list of jobs 
```

```bash
bg %<job_number>                        | run a stopped job in the background
```

```bash
fg %<job_number>                        | bring a job to the foreground
```

```bash
Ctrl + Z                                | suspend a foreground process
```

#### System Resource Monitoring

```bash
free                                    | display amount of free and used memory  
```

```bash
uptime                                  | show how long the system has been running
```

```bash
vmstat                                  | virtual memory statistics
```

```bash
iostat                                  | report CPU statistics and input/output statistics for devices and partitions
```
