# Script de Deploy para GitHub Pages
# Uso: .\deploy.ps1

Write-Host "🛠️  Compilando el proyecto Angular..." -ForegroundColor Cyan

# Compilar
& ng build --configuration production --base-href "https://charls767.github.io/"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en la compilación" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Compilación exitosa" -ForegroundColor Green

# Crear .nojekyll si no existe
$nojekyllPath = "dist/charls767.github.io/browser/.nojekyll"
if (!(Test-Path $nojekyllPath)) {
    Write-Host "📦 Creando archivo .nojekyll..." -ForegroundColor Cyan
    New-Item -Path $nojekyllPath -ItemType File -Force | Out-Null
    Write-Host "✓ Archivo .nojekyll creado" -ForegroundColor Green
}

Write-Host "🚀 Publicando en GitHub Pages..." -ForegroundColor Cyan
& npx angular-cli-ghpages --dir=dist/charls767.github.io/browser

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al publicar en GitHub Pages" -ForegroundColor Red
    Write-Host ""
    Write-Host "Verifica lo siguiente:" -ForegroundColor Yellow
    Write-Host "1. Git está configurado: ejecuta 'git config --global user.name' y 'git config --global user.email'"
    Write-Host "2. Credenciales de GitHub: verifica que tengas acceso de push al repositorio"
    Write-Host "3. Rama gh-pages existe o será creada automáticamente"
    Write-Host "4. En GitHub: Settings > Pages > Source está configurado en 'Deploy from a branch' > 'gh-pages'"
    exit 1
}

Write-Host ""
Write-Host "✅ Cambios publicados en: https://charls767.github.io/" -ForegroundColor Green
