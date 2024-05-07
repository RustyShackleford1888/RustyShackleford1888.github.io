@ECHO OFF
::color 0E
ECHO %~dp0
set "mypath=%~dp0%Diablo II.exe"
ECHO %mypath%
ECHO Enabling DEP exception
call bcdedit.exe /set {current} nx OptOut && color 0A && echo DEP policy changed to allow exceptions || color 0C && echo RUN AS ADMIN
call REG ADD "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Layers" /t REG_SZ /d DisableNXShowUI /v "%mypath% 
PAUSE
EXIT