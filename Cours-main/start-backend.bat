@echo off
echo Demarrage du backend IA sur http://localhost:8000
cd /d "%~dp0backend"
python -m uvicorn server:app --reload --host 0.0.0.0 --port 8000
