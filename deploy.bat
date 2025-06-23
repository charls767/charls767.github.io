@echo off
cd /d %~dp0
echo 🛠️  Compilando el proyecto Angular...
ng build --configuration production --base-href "https://charls767.github.io/"

echo 🚀 Publicando en GitHub Pages...
npx angular-cli-ghpages --dir=dist/charls767.github.io/browser

echo ✅ Cambios publicados en: https://charls767.github.io/
exit /b

