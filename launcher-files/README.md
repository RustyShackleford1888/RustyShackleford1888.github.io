# Resurgence patcher

This repo contains all of the files required by the resurgence launcher, along with a build tool to generate metadata files.

The launcher relies on the manifest.json in each subfolder to determine when to sync.  There is a flag for ignore_crc that will ignore any client side updates, as long as the file is there.  This flag is set on d2gl.ini and d2fps.ini so they ship with a default config but don't override.

## Contents
1.13c patch files

current folder contains all of the Reusrgence files

one folder for each maphack version/dll

one folder for each hd version

## Updating files
Open powershell and go to the root of the project

Copy/paste the contents of builder/builder.ps1 and paste into powershell

It will automatically generate the index.html and manifest.json files in each folder

Now push files to server and patcher will pick them up

If you get stuck with a patch error or patching loop it usually indicates a mismatch between the server files and manifest.json


```
