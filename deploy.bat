@echo off
setlocal enabledelayedexpansion
cd /d %~dp0

echo 🛠️  Compilando el proyecto Angular...
call ng build --configuration production --base-href "https://charls767.github.io/"

if errorlevel 1 (
    echo ❌ Error en la compilación. Abortando deploy...
    exit /b 1
)

echo 📦 Creando archivo .nojekyll...
if not exist "dist\charls767.github.io\browser\.nojekyll" (
    type nul > dist\charls767.github.io\browser\.nojekyll
    echo ✓ Archivo .nojekyll creado
)

echo 🚀 Publicando en GitHub Pages...
call npx angular-cli-ghpages --dir=dist/charls767.github.io/browser

if errorlevel 1 (
    echo ❌ Error en el deploy a GitHub Pages.
    echo Verifica que:
    echo  - Git está configurado correctamente
    echo  - Tienes permisos en el repositorio
    echo  - La rama gh-pages existe o se creará automáticamente
    exit /b 1
)

echo ✅ Cambios publicados en: https://charls767.github.io/
exit /b 0

