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
- **Status das Fases:** Passos 1 a 52 (**TODOS CONCLUÍDOS** ✅).
- **Divisores de Linha em Cada Dia/Horário e Efeito Hover Dourado no Quadro de Atendimento (Passo 52):**
  - Inclusão de divisor de linha inferior em cada uma das 7 linhas de dias e horários (`.schedule-row` com `border-bottom: 1px solid rgba(255, 255, 255, 0.08);`) com espaçamento homogêneo e balanceado de ~45px por linha.
  - Hover reativo em ouro nobre acetinado (`border-bottom-color: var(--gold-primary)` / `#C5A059`) e tipografia iluminada em branco puro (`#FFFFFF`) ao passar o cursor sobre qualquer dia da semana.
  - Destaque padrão do dia ativo (Terça-feira) e suporte a interatividade touch por toque em telas de smartphones e tablets via `initScheduleInteractions()`.
  - Blindagem de cache `?v=5.18.0` no HTML, CSS e JS, com auditoria Docker 100% aprovada.
- **Implementação do Menu Hambúrguer Mobile no Lado Direito do Header (Passo 51):**
  - Inclusão do botão `#menu-toggle-btn.btn-mobile-toggle` posicionado à direita de `.header-right` após o botão de agendamento, garantindo posicionamento no extremo direito no mobile e tablet (`max-width: 959px`), e ocultação rigorosa no desktop (`min-width: 960px`).
  - Acabamento de joalheria em Dark Espresso com vidro fosco (`backdrop-filter: blur(8px)`), contorno em ouro acetinado (`rgba(197, 160, 89, 0.45)`), e três barras em ouro que animam para "X" com feixe branco puro quando ativo.
  - Sincronização completa com o drawer lateral (`#mobile-drawer`), backdrop blur, suporte a fechamento por clique nos links, botão de fechar dedicado, tecla Escape, clique externo, gesto de arraste (swipe touch) e fechamento ao clicar no CTA de agendamento do drawer.
  - Blindagem de cache `?v=5.17.0` no HTML, CSS e JS, com zero overflow horizontal (`hasHScroll: false`) e validação 100% aprovada na suíte Docker.
- **Equalização e Calibração Fiel dos Cards de Agendamento e Horários (Passo 50):**
  - Proporção do grid `.booking-double-grid` calibrada para `1.35fr 1fr; gap: 40px; align-items: stretch;`, proporcionando espaço ideal e confortável para o formulário de reserva (`.booking-box-dark`), eliminando o truncamento na linha tripla de inputs e mantendo a mesma altura rigorosa de 688px em ambos os cards.
  - Fundo dos cards `.booking-box-dark` e `.schedule-box-dark` calibrado para o autêntico marrom espresso escuro `#1F1A17` (`RGB [31, 26, 23]`), com borda suave `1px solid rgba(197, 160, 89, 0.22)`.
  - Rótulos do formulário (`#section-booking-form .form-label-txt`) em marfim/taupe suave `#C4B5A8` (`RGB [196, 181, 168]`), botão dourado acetinado com glow envolvente `box-shadow: 0 4px 20px rgba(186, 155, 108, 0.35)`.
  - Quadro de horários com tipografia do dia ativo em marfim sereno (`var(--text-ivory)`), eliminando o destaque dourado ruidoso em "Terça-feira", e sub-box do concierge harmonizada.
  - Blindagem de cache `?v=5.16.0` no HTML e CSS, validado via Chrome CDP e auditoria Docker 100% aprovada.
- **Alinhamento Fiel da Seção de Newsletter (Passo 49):**
  - Fundo da seção `.newsletter-clean-section` ajustado para o tom autêntico linho quente `#EEE5DC` (`RGB [238, 229, 220]`), substituindo o tom champagne anterior (`#F7F3EC`) em conformidade 1:1 com a referência enviada e a extração vetorial do PDF original (páginas 0 e 1).
  - Borda divisória superior calibrada para `1px solid #DED5CE`.
  - Formulário `.newsletter-clean-form` calibrado para largura máxima de 530px com gap de 8px, campo branco puro com placeholder `#9E9A95`, cantos de 4px e botão dourado aristocrático `.btn-newsletter` (`#C5A059`) com altura equalizada de 48px.
  - Blindagem de cache `?v=5.15.0` no HTML e CSS, validado via Chrome CDP e auditoria Docker 100% aprovada.
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
  - Seletor de idiomas da barra superior (`.lang-switch`) calibrado 1:1 com o PDF original: idioma ativo `PT` em ouro nobre acetinado (`var(--gold-primary)` / `#C5A059`), barras divisórias `/` em tom claro neutro translúcido `rgba(255, 255, 255, 0.45)`, idiomas inativos em taupe `#AAA397` com hover branco e chaveamento reativo via JavaScript, com cache `v=5.1.0`.
  - Padronização nobre de todos os botões outline (`.btn-outline-dark` em `#experiencias`, `#especialistas`, `#conceito` e `#instagram`): alinhamento à esquerda de acordo com o grid, contorno dourado acetinado em repouso (`border: 1px solid var(--gold-primary)`), e efeito hover/focus refinado com fundo preto ébano (`#11100F !important`), tipografia e ícone em branco puro (`#FFFFFF !important`), contorno em ouro nobre (`var(--gold-primary) !important`) e elevação sutil, com cache `v=5.2.0`.
  - Remoção do negrito no título editorial do Manifesto AURA (`.manifesto-huge-heading` em `#manifesto`), calibrando o peso explicitamente para regular (`font-weight: 400`), eliminando o padrão bold do browser e conferindo máxima elegância e fidelidade ao design original do PDF, com cache `v=5.3.0`.
  - Correção da sequência e substituição da foto divergente no grid do Instagram (`#instagram` / `.instagram-6grid`): substituição da foto de lavagem no lavatório pela foto original de escovação e blow dry com secador e escova (`photo-1580618672591-eb180b1a973f_003_Po4W.avif`), e reordenação exata das 6 células (1. Salão B&W, 2. Cachos afro em fundo rosa, 3. Ferramentas e pentes, 4. Escovação blow dry, 5. Loiro com gorro na neve, 6. Noiva e noivo com buquê), com cache `v=5.4.0`.
  - Calibração cromática do selo circular de excelência (`.badge-excellence-circle` em `#conceito`): atualização de `.badge-txt` de marfim `#DDD7CE` para ouro nobre acetinado (`var(--gold-primary)` / `#C5A059`), garantindo que tanto o numeral "10+" quanto as palavras "ANOS DE EXCELÊNCIA" e a borda circular sejam renderizados em dourado nobre, correspondendo com fidelidade 1:1 ao mockup original do PDF, com cache `v=5.5.0`.
  - Calibração da caixa de transparência da Colorimetria (`.transparency-alert` em `#coloracao`): substituição da borda sólida por contorno pontilhado em dourado suave (`border: 1px dotted rgba(197, 160, 89, 0.6)`), atualização de "Aviso de transparência:" para branco puro (`#FFFFFF`) unificando a cor de todo o texto, fundo transparente e ícone com aro dourado e centro translúcido, reproduzindo 1:1 o PDF oficial com cache `v=5.6.0`.
  - Remoção do negrito dos badges ANTES / DEPOIS do comparador de transformações (`.badge-corner-tag` em `#transformacoes`): calibração do peso tipográfico de semi-bold (`font-weight: 600`) para regular (`font-weight: 400`), eliminando o aspecto pesado do negrito com fidelidade 1:1 ao design original do PDF, com cache `v=5.7.0`.
  - Calibração cromática do card de noivas (`.bridal-form-card` em `#noivas`): alteração do fundo de grafite/carvão frio (`#1F1D1A`) para marrom espresso quente e luxuoso (`#2A2320`, medido no PDF original [42, 35, 32]), harmonização da seção `#noivas` para `#211C19` e inputs internos com contraste em baixo-relevo `#191512`, atingindo fidelidade 1:1 com o mockup original do PDF, com cache `v=5.8.0`.
  - Equalização dimensional dos cards de agendamento (`.booking-box-dark` e `.schedule-box-dark` em `#agendamento`): remoção de `align-items: start;` e aplicação de `align-items: stretch;`, balanceamento de colunas em `grid-template-columns: 1fr 1fr;` (gap de 48px) e `height: 100%`, garantindo que ambos os cards apresentem exatamente a mesma altura e largura simétrica em desktop, alinhando a base e o topo perfeitamente 1:1 com o mockup original do PDF, com cache `v=5.9.0`.
  - Alinhamento e fidelidade absoluta 1:1 do rodapé oficial (`.site-footer`): supressão integral de marcadores de lista (*bullets* `•`) em `.footer-list` e `.footer-links-list`, emblemas sociais em botões circulares nobres de joalheria (`.social-circle-link`, 34x34px, 50% radius, aro dourado fino e glifo dourado com hover aveludado), títulos das colunas em tipografia editorial serifada Cormorant/Playfair (`font-weight: 500`, *Title Case* aristocrático), e fundo calibrado em Dark Couture Espresso `#16120F` (`RGB [22, 18, 15]`, equivalência colorimétrica de 100% com o PDF original), com cache `v=5.10.0`.
  - Centralização do cabeçalho do card de noivas (`.bridal-form-heading` e `.bridal-form-sub` em `#noivas`): aplicação de `text-align: center;` no título editorial "Planeje seu Dia dos Sonhos" e no subtítulo "Solicite uma proposta detalhada para você e seu cortejo", alinhando perfeitamente o cabeçalho do card com o design original do PDF (`centerDiff: 0px`), preservando os inputs e rótulos do formulário, com cache `v=5.11.0`.
  - Calibração cromática do fundo da caixa de aviso de transparência (`.transparency-alert` em `#coloracao`): aplicação do tom marrom espresso suave mais claro do PDF oficial (`#2E251E` / `RGB [46, 37, 30]`), criando o contraste e relevo aveludado ideal sobre o fundo da seção (`#211C19` / `RGB [33, 28, 25]`), preservando o contorno pontilhado em ouro e a tipografia branca, com cache `v=5.12.0`.
  - Equalização dimensional do card de noivas com a coluna esquerda (`.bridal-layout-grid` e `.bridal-form-card` em `#noivas`): aplicação de `align-items: stretch;`, `height: 100%` e `#bridal-proposal-form` com `flex: 1; justify-content: space-between;`, garantindo que o card e a coluna esquerda compartilhem exatamente a mesma altura e que as bases inferiores de ambos os blocos fiquem rigorosamente alinhadas na mesma linha (`heightDiff: 0px`, `bottomDiff: 0px`), reproduzindo com fidelidade 1:1 o mockup original do PDF, com cache `v=5.13.0`.
  - Calibração cromática do fundo da seção de depoimentos (`.testimonials-editorial-section` em `#depoimentos`): escurecimento sutil do fundo para linho quente aveludado (`#EEE5DC` / `RGB [238, 229, 220]`), substituindo o tom champagne excessivamente claro anterior (`#F7F3EC`) e atingindo equivalência exata de 100% com o PDF oficial, destacando com nobreza o card branco central e o selo Google Reviews, com cache `v=5.14.0`.
  - Alinhamento e calibração fiel da seção de Newsletter (`.newsletter-clean-section`): fundo em tom linho quente autêntico `#EEE5DC` (`RGB [238, 229, 220]`), divisor superior `1px solid #DED5CE`, formulário de 530px com gap de 8px, campo branco puro e botão dourado aristocrático de 48px, com cache `v=5.15.0`.
  - Equalização e calibração fiel dos cards de Agendamento e Horários (`#agendamento`): proporção nobre de grid `1.35fr 1fr; gap: 40px; align-items: stretch;`, eliminando aperto nos selects triplos, fundo em marrom espresso quente `#1F1A17` (`RGB [31, 26, 23]`), rótulos em marfim suave `#C4B5A8`, botão com gradiente e glow dourado suave, e dia ativo sem excessos cromáticos, com cache `v=5.16.0`.
  - Implementação do menu hambúrguer no lado direito do header no mobile (`.btn-mobile-toggle#menu-toggle-btn`): botão elegante em dark espresso com vidro fosco e aro em ouro acetinado, linhas em ouro nobre animadas em "X", acionando o drawer lateral com navegação completa por todas as 13 seções, gestos touch e fechamento acessível, com cache `v=5.17.0`.
  - Divisores de linha em cada dia/horário e hover dourado interativo (`.schedule-row` em `#agendamento`): linhas divisórias individuais em todas as 7 linhas (`border-bottom: 1px solid rgba(255, 255, 255, 0.08)`), transição instantânea para ouro acetinado (`#C5A059`) e tipografia branca pura ao passar o mouse sobre qualquer dia, com destaque de dia ativo e suporte a toque mobile, com cache `v=5.18.0`.
- **Ambiente Local Ativo:** Container `aura-maison-web` em execução no Docker na porta `3000` (`http://localhost:3000`).
- **Prontidão de Produção:** `docker-compose.prod.yml`, `nginx.prod.conf`, `.env.example` e scripts de deploy prontos para publicação em VPS/Cloud.
- **Auditoria de Integridade:** 100% dos testes de carregamento, API e assets validados via script automatizado (`tests/audit_docker.py`).
