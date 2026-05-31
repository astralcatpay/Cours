@echo off
echo Demarrage du site (frontend) sur http://localhost:5500
echo Ouvrez http://localhost:5500/index.html ou http://localhost:5500/math.html
cd /d "%~dp0frontend\public"
python -m http.server 5500
