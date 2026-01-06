@echo off
echo ========================================
echo    Rankwell - Demarrage serveur dev
echo ========================================
echo.

:: Verifier si node_modules existe
if not exist "node_modules" (
    echo [!] node_modules non trouve. Installation des dependances...
    echo.
    call npm install
    echo.
    echo [OK] Dependances installees.
    echo.
) else (
    echo [OK] node_modules existe deja.
)

echo.
echo [*] Demarrage du serveur Next.js avec Turbopack...
echo [*] Le site sera accessible sur http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur.
echo ========================================
echo.

:: Lancer avec Turbopack (mode par defaut Next.js 15+)
call npx next dev --turbopack
