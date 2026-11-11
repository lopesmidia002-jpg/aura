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
- **Status das Fases:** Passos 1 a 33 (**TODOS CONCLUÍDOS** ✅).
- **Títulos Brancos e Calibração Fiel da Marca d'Água "HAIR" na Colorimetria (Passo 33):**
  - Títulos dos cards técnicos (`#coloracao .pillar-title` — "Balayage Francesa", "Morena Iluminada", "Blonde Couture" e "Correção de Cor") atualizados de dourado para branco puro `#FFFFFF` (`rgb(255, 255, 255)`).
  - Marca d'água monumental `.color-watermark` ("HAIR") reposicionada diretamente dentro de `.pillars-2col.color-pillars-grid` com `letter-spacing: 0.06em`, alinhando a letra "H" no vão central das duas colunas, a letra "A" sob a segunda coluna e a letra "I" perfeitamente visível à direita antes da fotografia, em tom ouro suave translúcido (`rgba(197, 160, 89, 0.08)`).
  - Blindagem de cache `?v=4.9.0` no HTML e CSS, validado via Chrome CDP e auditoria Docker 100% aprovada.
- **Cor da Tipografia do Título do Manifesto para Preto Nobre (Passo 32):**
  - O título principal da seção `#manifesto` (`.manifesto-huge-heading`), *"Beleza não é sobre mudar quem você é. É sobre revelar."*, foi alterado de branco (`var(--text-white)`) para preto puro `#000000` (`rgb(0, 0, 0)`), correspondendo com exatidão matemática 1:1 ao design original do PDF oficial.
  - Blindagem de cache `?v=4.8.0` no HTML e CSS, validado via Chrome CDP e auditoria Docker 100% aprovada.
- **Marca d'Água Tipográfica "BRIDE" na Seção Noivas (Passo 31):**
  - Marca d'água monumental `.bridal-watermark` posicionada no plano de fundo dos 4 cards translúcidos de benefícios (`.pillar-card-dark`) em tom ouro sutil (`rgba(197, 160, 89, 0.08)`).
- **Tipografia dos Badges "ANTES" e "DEPOIS" (Passo 30):**
  - Rótulos dos cantos `.badge-corner-tag` do slider calibrados para branco puro `#FFFFFF`.
- **Marca d'Água Tipográfica "HAIR" na Colorimetria (Passo 29):**
  - Marca d'água monumental `.color-watermark` entre colunas editoriais e fotografia panorâmica em tom ouro sutil (`rgba(197, 160, 89, 0.09)`).
- **Cores dos Preços e Textos dos Cards de Rituais (Passo 28):**
  - Calibração estrita dos valores para bronze/avelã `#8D684D` e prefixos para taupe `#8C827A`.
- **Centralização do Botão "Falar com Concierge de Noivas" no Mobile (Passo 27):**
  - Wrapper `.bridal-action-wrap` e classe dedicada `.bridal-cta-btn` implementados em `index.html` e `style.css`.
  - No desktop (> 991px), preserva alinhamento à esquerda junto ao texto editorial; no mobile/tablet (<= 991px), o botão é perfeitamente centralizado com `margin: 0 auto;`, `display: flex; justify-content: center;`, `max-width: 340px` e respiro simétrico perfeito.
  - Blindagem de cache `?v=4.3.0` no HTML e CSS.
- **Auditoria e Alinhamento Mobile Integral (Passo 26):**
  - Validação automatizada multiplataforma via Chrome CDP em viewports 320px, 360px, 375px, 390px, 414px, 480px e 768px: ZERO overflow horizontal (`scrollWidth == innerWidth`).
  - Remoção dos estilos inline rígidos de `.concept-inset-img-box` que travavam o card na lateral direita no mobile, migrando toda a lógica para regras fluidas no CSS (desktop 60% com proporção 1:1, tablet 55%, mobile 54% a 52% contido nas margens da tela).
  - Selo circular de 10+ anos reposicionado e contido com respiro de segurança (`top: -12px; right: -6px; width: 76px; height: 76px`).
  - Barra superior mobile refinada: logotipo proporcional e botão de agendamento dourado `.btn-header` com respiro lateral e padding adaptativo, prevenindo qualquer recorte.
  - Tipografia de headlines no Hero e Manifesto com `clamp()` otimizado para celulares pequenos.
  - Restauração das variáveis `--color-gold: #C5A059` e `--color-gold-light: #E5CA8F` no `:root`, assegurando nitidez dourada nos anéis da timeline de 5 passos e elementos da galeria.
  - Blindagem contra cache `?v=4.2.0` no HTML e CSS.
- **Barra Superior Mobile — Remoção do Menu Sanduíche (Passo 25):**
  - Remoção completa do botão de menu sanduíche (`.btn-mobile-toggle`) da barra superior no modo mobile, eliminando a poluição visual e mantendo o cabeçalho estritamente minimalista e aristocrático com a Marca AURA à esquerda e o botão de agendamento à direita (`display: inline-flex`).
  - Cache-busting imediato `?v=4.1.0` nas chamadas de CSS e preload no HTML.
- **Imagem Sobreposta de Ferramentas — Formato Quadrado 1:1 e Posicionamento (Passo 24):**
  - Ajuste fidedigno ao PDF original (316x316 px): proporção rigorosamente quadrada 1:1 (`aspect-ratio: 1 / 1`), largura proporcional de 60% (`width: 60% !important; max-width: 280px !important;`), bottom: -18px e right: -42px.
  - Assets dedicados em ultra resolução: `photo-ferramentas-conceito-square.avif` e `photo-ferramentas-conceito-square.jpg` (676x676 px) com erro residual de apenas 6.6 MSE em relação ao PDF oficial.
  - Cache-busting imediato `?v=4.0.0` no HTML, CSS e preloads.
- **Cards de Rituais & Sombreamento (Passo 22):**
  - Projeção de sombreamento suave, profundo e luxuoso no fundo dos cards ao passar o mouse (:hover), com elevação tátil e contorno dourado acetinado sobre o fundo linho quente.
- **Pílulas de Filtro de Rituais (Passo 21):**
  - Botões de categoria de rituais calibrados 1:1 com o mockup original do PDF: eliminação do fundo preto; botão ativo e hover com fundo branco puro (#FFFFFF), contorno em ouro nobre acetinado (#C5A059) e tipografia em preto ébano (#141414).
- **Timeline de Atendimento em 5 Passos (Passo 20):**
  - Círculos numéricos das etapas de atendimento calibrados 1:1 com a referência: fundo padrão creme #FAF7F2 com contorno ouro e tipografia escura, transmutando no hover para fundo dourado acetinado radiante (#C5A059), tipografia em branco puro (#FFFFFF) e halo de luz difusa dourada.
- **Galeria de Arte Viva & Lightbox Fullscreen (Passo 19):**
  - Efeito hover aristocrático nos cards da galeria com escurecimento suave (brightness 0.6), zoom (scale 1.06) e revelação fluida de kicker, título editorial em branco puro (#FFFFFF) e ação "VER EM TELA TODA →".
  - Lightbox fullscreen idêntico à referência (fundo preto #0A0907 com blur, imagem em alta resolução, título da foto, contador dourado "X / 6", setas laterais circulares, botão fechar, navegação por teclado e suporte a swipe touch).
- **Fidelidade Cromática e Mapeamento de Imagens (Passo 18):**
  - Seção Rituais & Procedimentos calibrada com fundo Linho Quente (#EEE5DC) com Card 1 contendo o asset de corte/visagismo original extraído do PDF (photo-corte-visagismo.avif/.jpg), Card 3 com hairstylist modelando loiro (photo-1580618672591), e Card 5 com gorro de inverno (photo-1487412720).
  - Seção Colorimetria de Alta Costura ajustada para fundo Dark Bronze/Espresso (#211C19) e imagem panorâmica 3:2 landscape da hairstylist em frente à janela (photo-1562322140).
  - Seção Resultados Visíveis (Antes/Depois) alinhada para fundo Creme Suave (#FAF7F2), painel Antes com modelo em fundo rosa e painel Depois com styling profissional em salão.
- **Fidelidade Visual do PDF & Micro-interações:** 100% alinhado com o arquivo `AURA Maison de Beauté — Salão Feminino de Alto Padrão   Experiências Exclusivas.pdf` em todas as suas seções, incluindo:
  - Barra superior em linha única contínua sem quebras indesejadas, tipografia branca nobre no botão e transparência total sobre a hero section.
  - Seção de Citação Editorial (Manifesto) calibrada com fundo linho quente exato (`#EEE5DC`), quebra natural em duas linhas e subtítulo em tom neutro suave/taupe aristocrático (`#8C827A`).
  - Seção O Salão / Conceito com selo de excelência circular posicionado no canto superior direito da fotografia, imagem sobreposta de ferramentas calibrada geometricamente em matriz 755x459 px (proporção 16:10 exata, 1.64:1, largura de 84%, max 400px, bottom: -30px, right: -36px) servida via `<picture>` com AVIF e JPEG simultâneos, garantindo enquadramento integral do vaso de cerâmica de suculenta à esquerda, presilhas, pente, chapinha, escova e secador CROC à direita sem cortes, moldura branca pura de 8px com sombra difusa, estilos inline blindados com `!important`, eliminação de travas de cache no Windows (`file:///`) e no Docker Nginx, botão com contorno taupe suave `#CEC4BB`, métricas em ouro nobre sem borda divisória e fundo `#FAF7F2` reproduzindo 1:1 o mockup de referência.
  - Efeito hover aristocrático padronizado em todos os botões dourados (`.btn-gold`, `.btn-header`), com transição aveludada para degradê bronze/espresso (`linear-gradient(135deg, #876349 0%, #654C3A 40%, #44342A 75%, #2B221C 100%)`), contorno em ouro nobre (`#C5A059`) e tipografia branca pura (`#FFFFFF`).
  - Efeito hover com fundo branco sólido (`background: #FFFFFF !important; border-color: #FFFFFF !important;`) e texto preto ébano (`#141414`) nos botões com fundo transparente (`.btn-hero-outline`, `.btn-outline-dark`).
  - Calibração cromática 1:1 dos cards de Rituais Exclusivos (`#experiencias`): valores e números (`.price-val strong`) em bronze aveludado / avelã quente `#8D684D` (`rgb(141, 104, 77)`), rótulos de prefixo (`.price-val`) em taupe suave `#8C827A` (`rgb(140, 130, 122)`) e links em dourado nobre `#C5A059` (`rgb(197, 160, 89)`).
  - Marca d'água tipográfica de fundo "HAIR" restaurada na seção Colorimetria de Alta Costura (`#coloracao`), posicionada com precisão entre as colunas editoriais e estendendo-se sob a fotografia panorâmica, em ouro nobre sutil (`rgba(197, 160, 89, 0.09)`).
  - Tipografia dos badges "ANTES" e "DEPOIS" (`.badge-corner-tag`) do comparador de transformações calibrada para branco puro (`#FFFFFF` / `var(--text-white)`), em conformidade 1:1 com o PDF original.
  - Marca d'água tipográfica de fundo "BRIDE" restaurada na seção Suíte Nupcial (`#noivas`), centralizada simetricamente sob os 4 cards translúcidos de benefícios (`.pillar-card-dark`), em ouro nobre sutil (`rgba(197, 160, 89, 0.08)`), com cache atualizado para `v=4.7.0`.
  - Título editorial do Manifesto AURA (`#manifesto`) calibrado para preto puro `#000000` (`rgb(0, 0, 0)`), com cache `v=4.8.0`.
  - Títulos dos cards de Colorimetria (`#coloracao`) em branco nobre `#FFFFFF` e marca d'água monumental "HAIR" posicionada fielmente sob o grid técnico, com cache `v=4.9.0`.
  - Sequência de fotos dos Especialistas (`#especialistas`) corrigida 1:1 com o original (Camila com iluminação azul/púrpura e Beatriz com coque despojado), botão "CONHECER TODO O CORPO ARTÍSTICO" justificado à esquerda e efeito hover com fundo preto `#11100F`, fonte branca `#FFFFFF` e borda em ouro nobre `#C5A059`, com cache `v=5.0.0`.
- **Ambiente Local Ativo:** Container `aura-maison-web` em execução no Docker na porta `3000` (`http://localhost:3000`).
- **Prontidão de Produção:** `docker-compose.prod.yml`, `nginx.prod.conf`, `.env.example` e scripts de deploy prontos para publicação em VPS/Cloud.
- **Auditoria de Integridade:** 100% dos testes de carregamento, API e assets validados via script automatizado (`tests/audit_docker.py`).
