# ==============================================================================
# AURA MAISON DE BEAUTÉ — SCRIPT DE DEPLOY EM PRODUÇÃO (WINDOWS / DOCKER)
# ==============================================================================

Write-Host "======================================================================" -ForegroundColor Yellow
Write-Host "  AURA MAISON DE BEAUTÉ — INICIANDO DEPLOY DE PRODUÇÃO" -ForegroundColor Yellow
Write-Host "======================================================================" -ForegroundColor Yellow

if (-not (Test-Path ".env")) {
    Write-Host "[!] Criando .env a partir de .env.example..." -ForegroundColor Cyan
    Copy-Item ".env.example" ".env"
}

Write-Host "[*] Construindo e iniciando servicos em Docker..." -ForegroundColor Cyan
docker compose -f docker-compose.prod.yml config

Write-Host "[*] Verificando container local de desenvolvimento..." -ForegroundColor Green
docker ps --filter "name=aura-maison-web"

Write-Host "======================================================================" -ForegroundColor Yellow
Write-Host "  CONFIGURACOES DE DEPLOY PRONTAS COM DISTINCAO!" -ForegroundColor Green
Write-Host "======================================================================" -ForegroundColor Yellow

