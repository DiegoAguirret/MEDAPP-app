@echo off
rem Vista previa en vivo: sirve la app a Expo Go (LAN) y al navegador (web) desde el mismo servidor.
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0..\apps\mobile"
npx expo start --lan --port 8082
