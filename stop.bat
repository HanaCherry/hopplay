@echo off
cd /d "%~dp0"
echo Stopping Hopplay...
if exist data\hopplay.pid (
  set /p PID=<data\hopplay.pid
  taskkill /PID %PID% /F >nul 2>&1
  del /q data\hopplay.pid >nul 2>&1
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr LISTENING') do (
  taskkill /PID %%a /F >nul 2>&1
)
echo Hopplay stopped.
pause
