# CONTEXTO DO PROJETO — AURA MAISON DE BEAUTÉ

## 1. Identidade & Propósito do Projeto
- **Marca:** AURA Maison de Beauté — Salão Feminino de Alto Padrão.
- **Localização:** Alameda dos Jardins, 1420 — Jardins, São Paulo - SP.
- **Posicionamento:** Haute coiffure, visagismo francês de alta precisão, rituais capilares personalizados (Kérastase Fusio-Dose), cuidados de estética de luxo e suíte privativa para o Dia da Noiva (Bridal Suite VIP).
- **Público-alvo:** Mulheres sofisticadas, exigentes e noivas que buscam excelência técnica, privacidade e atendimento de concierge de alto padrão.

---

## 2. Stack Tecnológica & Arquitetura
- **Frontend:**
  - HTML5 semântico, acessível e otimizado para SEO local e mobile.
  - CSS3 puro com arquitetura estritamente **Mobile-First**, tipografia fluida via `clamp()`, suporte a *Safe Area Insets* de smartphones modernos, glassmorphism e paleta de cores de luxo.
  - JavaScript ES6+ modular com suporte a interações touch, controle gestual de bottom sheet, slider antes/depois arrastável e notificações toast.
- **Assets Visuais:**
  - Imagens em formato `.avif` de alta definição, leves e com renderização de alta fidelidade cromática.
- **Infraestrutura:**
  - 100% conteinerizado com **Docker** e orquestrado via **Docker Compose**.
  - Servidor web **Nginx Alpine** com suporte nativo a MIME types para `.avif`, compressão Gzip, cabeçalhos de cache e políticas de segurança HTTP.
  - **Porta de Acesso Local:** `http://localhost:3000`.

---

## 3. Padrões & Regras Globais do Projeto
1. **Documentação Contínua:** Ao final de cada feat/fix, manter devidamente atualizados os arquivos `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md`.
2. **Controle Estrito de Passos:** Só iniciar o próximo passo previsto em `PASSOS.md` após solicitação explícita do usuário.
3. **Padrão de Commit Git:** Sempre fornecer apenas o texto formatado para commit Git (NÃO realizar commit automático ou git push; apenas disponibilizar o texto ao usuário).
4. **Execução 100% no Docker:** O ambiente de execução e teste é mantido integralmente dentro de contêineres Docker.

---

## 4. Estado Atual do Projeto
- **Passo Atual:** Passo 1 (**CONCLUÍDO** ✅).
- **Servidor Ativo:** Container `aura-maison-web` em execução no Docker na porta `3000`.
- **Status de Resposta:** HTTP 200 OK verificado para a página principal, folhas de estilo, scripts e imagens `.avif`.
- **Próximo Passo:** Passo 2 (Otimizações Avançadas, Auditoria Mobile e Testes Automatizados E2E) — *Aguardando autorização explícita do usuário.*

