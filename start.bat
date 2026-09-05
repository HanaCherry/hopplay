@echo off
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js is not installed. Get it at https://nodejs.org
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing dependencies...
  call npm.cmd install
)
powershell -NoProfile -Command "$client = New-Object Net.Sockets.TcpClient; try { $client.Connect('127.0.0.1', 3000); $client.Close(); exit 0 } catch { exit 1 }" >nul 2>&1
if not errorlevel 1 (
  echo.
  echo HopPlay est deja lance.
  echo Ouverture du Dashboard: http://127.0.0.1:3000
  start "" http://127.0.0.1:3000
  exit /b 0
)
echo.
echo HopPlay  -  GalaxyBunny Studio
echo Dashboard: http://127.0.0.1:3000
echo.
start "" http://127.0.0.1:3000
node server.js
pause
