@echo off
cd /d "%~dp0"
py -m pip show Flask >nul 2>&1
if errorlevel 1 (
  echo Flask belum terpasang. Jalankan melalui Thonny atau instal Flask dahulu.
  pause
  exit /b 1
)
py app.py
pause
