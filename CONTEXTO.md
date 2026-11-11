# CONTEXTO DO PROJETO — AURA MAISON DE BEAUTÉ

## 1. Identidade & Propósito do Projeto
- **Marca:** AURA Maison de Beauté — Salão Feminino de Alto Padrão.
- **Localização:** Alameda dos Jardins, 1420 — Jardins, São Paulo - SP.
- **Posicionamento:** Haute coiffure, visagismo francês de alta precisão, rituais capilares personalizados (Kérastase Fusio-Dose), cuidados de estética de luxo e suíte privativa para o Dia da Noiva (Bridal Suite VIP).
- **Público-alvo:** Mulheres sofisticadas, exigentes e noivas que buscam excelência técnica, privacidade e atendimento de concierge de alto padrão.

---

## 2. Stack Tecnológica & Arquitetura
- **Frontend:**
  - HTML5 semântico, acessível e otimizado para SEO local e mobile com dados estruturados **Schema.org JSON-LD** e **Open Graph**.
  - CSS3 puro com arquitetura **Mobile-First**, Design System editorial (Champagne `#FBF9F5`, Ouro `#C5A059`, Dark Couture `#161413`, Ébano `#141414`), tipografia editorial Playfair Display/Cormorant Garamond/Montserrat e glassmorphism refinado.
  - JavaScript ES6+ modular com suporte a interações touch, controle gestual de bottom sheet, comparador antes/depois arrastável, carrossel de depoimentos, máscaras dinâmicas de telefone, integração com API REST e notificações toast de joalheria.
- **Assets Visuais:**
  - Imagens em formato `.avif` de alta definição, leves e com renderização de alta fidelidade cromática.
- **Infraestrutura, API & Docker (100% no Docker):**
  - Ambiente de desenvolvimento conteinerizado com **Docker Compose** (`docker-compose.yml`) na porta `3000`.
  - Ambiente de produção configurado com **Docker Compose** (`docker-compose.prod.yml`) para portas `80` e `443` com renovação de SSL via Certbot.
  - Servidor web **Nginx Alpine** com suporte nativo a MIME types para `.avif`, compressão Gzip, cabeçalhos de segurança HSTS, políticas de segurança HTTP e endpoints de API REST para `/api/agendamentos` e `/api/newsletter`.
  - Scripts de deploy automatizado (`deploy.sh` e `deploy.ps1`).
  - Guia institucional e de operação documentado no `README.md`.
  - Arquivo `.gitignore` configurado para proteção contra commits de dependências, logs, variáveis de ambiente e arquivos pesados.
  - Script automatizado de auditoria (`tests/audit_docker.py`) validando 100% dos endpoints e assets.

---

## 3. Padrões & Regras Globais do Projeto
1. **Documentação Contínua:** Ao final de cada feat/fix, manter devidamente atualizados os arquivos `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md`.
2. **Controle Estrito de Passos:** Só iniciar o próximo passo previsto em `PASSOS.md` após solicitação explícita do usuário.
3. **Padrão de Commit Git:** Sempre fornecer apenas o texto formatado para commit Git (NÃO realizar commit automático ou git push; apenas disponibilizar o texto ao usuário).
4. **Execução 100% no Docker:** O ambiente de execução e teste é mantido integralmente dentro de contêineres Docker.

---

## 4. Estado Atual do Projeto
- **Status das Fases:** Passos 1 a 14 (**TODOS CONCLUÍDOS** ✅).
- **Fidelidade Visual do PDF & Micro-interações:** 100% alinhado com o arquivo `AURA Maison de Beauté — Salão Feminino de Alto Padrão   Experiências Exclusivas.pdf` em todas as suas seções, incluindo:
  - Barra superior em linha única contínua sem quebras indesejadas, tipografia branca nobre no botão e transparência total sobre a hero section.
  - Seção de Citação Editorial (Manifesto) calibrada com fundo linho quente exato (`#EEE5DC`), quebra natural em duas linhas e subtítulo em tom neutro suave/taupe aristocrático (`#8C827A`).
  - Seção O Salão / Conceito com selo de excelência circular posicionado no canto superior direito da fotografia, imagem sobreposta de ferramentas em proporção retangular panorâmica 16:10 (largura de 84%, max 395px) com enquadramento completo (vaso de cerâmica com suculenta no canto esquerdo com `object-position: 6% center;`, pente, chapinha, escova e secador visíveis), moldura branca pura sólida de 8px com sombra difusa, botão com contorno taupe suave `#CEC4BB`, métricas em ouro nobre sem borda divisória e fundo `#FAF7F2` reproduzindo 1:1 o mockup de referência.
  - Efeito hover aristocrático padronizado em todos os botões dourados (`.btn-gold`, `.btn-header`), com transição aveludada para degradê bronze/espresso (`linear-gradient(135deg, #876349 0%, #654C3A 40%, #44342A 75%, #2B221C 100%)`), contorno em ouro nobre (`#C5A059`) e tipografia branca pura (`#FFFFFF`).
  - Efeito hover com fundo branco sólido (`background: #FFFFFF !important; border-color: #FFFFFF !important;`) e texto preto ébano (`#141414`) nos botões com fundo transparente (`.btn-hero-outline`, `.btn-outline-dark`).
- **Ambiente Local Ativo:** Container `aura-maison-web` em execução no Docker na porta `3000` (`http://localhost:3000`).
- **Prontidão de Produção:** `docker-compose.prod.yml`, `nginx.prod.conf`, `.env.example` e scripts de deploy prontos para publicação em VPS/Cloud.
- **Auditoria de Integridade:** 100% dos testes de carregamento, API e assets validados via script automatizado (`tests/audit_docker.py`).
