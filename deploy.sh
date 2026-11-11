#!/usr/bin/env bash
# ==============================================================================
# AURA MAISON DE BEAUTÉ — SCRIPT DE DEPLOY EM PRODUÇÃO (100% DOCKER)
# ==============================================================================

set -e

echo "======================================================================"
echo "  AURA MAISON DE BEAUTÉ — INICIANDO DEPLOY DE PRODUÇÃO"
echo "======================================================================"

# 1. Carrega variáveis de ambiente ou cria a partir de .env.example
if [ ! -f .env ]; then
    echo "[!] Arquivo .env não encontrado. Copiando de .env.example..."
    cp .env.example .env
fi

# 2. Executa build e sobe os contêineres de produção
echo "[*] Construindo imagens e iniciando contêineres com Docker Compose..."
docker compose -f docker-compose.prod.yml up -d --build

# 3. Aguarda inicialização do Nginx
echo "[*] Aguardando estabilização dos serviços..."
sleep 5

# 4. Executa healthcheck
echo "[*] Verificando status de saúde do contêiner..."
docker ps --filter "name=aura-maison-prod"

echo "======================================================================"
echo "  DEPLOY CONCLUÍDO COM DISTINÇÃO! SERVIÇO EM OPERAÇÃO."
echo "======================================================================"

