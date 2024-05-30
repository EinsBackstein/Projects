$path = "D:\SJ23-24\SEW\sj23-24-sew-2ahitn-nottj"
$contentFile = $path + "\README.md"
$content = ""

$directories = Get-ChildItem -Directory $path 

$content = "# Hier werden alle SEW-Aufgaben des Schuljahres 23/24 hochgeladen

push-command:

``````bash

git push github main && git push origin main

``````

---

## Inhaltsverzeichnis`n
"
foreach ($directory in $directories) {
if($directory -eq $directories[-1]){
  $content += ("- " + "[" + $directory + "](" + $directory + ")")
}else{
  $content += ("- " + "[" + $directory + "](" + $directory + ")`n")
}
Write-Host $content
}

Set-Content -Path $contentFile -Value $content


