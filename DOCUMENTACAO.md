# DOCUMENTAÇÃO TÉCNICA — AURA MAISON DE BEAUTÉ

## 1. Visão Geral
A Landing Page oficial da **AURA Maison de Beauté** foi desenvolvida sob o conceito de **Haute Coiffure & Visagisme**, transmitindo requinte, sofisticação editorial e acolhimento para o salão feminino de alto padrão localizado no bairro dos Jardins, São Paulo.

O projeto foi alinhado com **100% de fidelidade visual, estrutural e de copy** ao arquivo oficial `AURA Maison de Beauté — Salão Feminino de Alto Padrão Experiências Exclusivas.pdf`, extraído em 12 slices de alta definição (`pdf_slices/`), combinando rigor estético de alta costura com engenharia de software de ponta, 100% conteinerizado no Docker.

---

## 2. Design System de Luxo & Fidelidade Visual

### 2.1. Paleta Cromática
- **Fundo Linho Quente:** `#EEE5DC` (tom nobre acolhedor presente na Citação Editorial e na seção Rituais & Procedimentos)
- **Fundo Creme Suave:** `#FAF7F2` (base editorial suave presente em O Salão / Conceito e na seção Resultados Visíveis / Antes & Depois)
- **Fundo Champagne Nobre:** `#FBF9F5` (base presente nas seções Hero, Mestres, Experiência, Depoimentos e Instagram)
- **Fundo Champagne Alternativo:** `#F7F3EC` (separador harmônico presente na Newsletter)
- **Superfície Escura Dark Bronze / Espresso:** `#211C19` (seção Colorimetria de Alta Costura)
- **Superfície Escura Suíte Nupcial:** `#191512` (seção Suíte Nupcial de Prestígio)
- **Superfície Escura de Alta Costura (Dark Couture):** `#161413` e `#11100F` (módulos noturnos: Galeria Mosaico, Reserva/Horários e Rodapé)
- **Cartões Dark Card:** `#1F1D1A` (cards de formulários escuros e quadro de horários com contraste suave)
- **Dourado Nobre Acetinado (Primary Gold):** `#C5A059` (destaques, bordas finas de 1px, kickers, divisores e botões)
- **Dourado Claro / Destaque:** `#E5CA8F` / `#D5B069` (estados hover e acentuações)
- **Tipografia Preto Ébano:** `#141414` (títulos diurnos e botões de contraste)
- **Neutro Secundário Quente:** `#4A4640` / `#555048` / `#7A746C` (corpo de texto, descrições e legendas)
- **Texto Marfim / Ivory:** `#DDD7CE` / `#AAA397` (textos sobre fundos escuros)

### 2.2. Tipografia Editorial
- **Títulos e Citações:** `Cormorant Garamond` & `Playfair Display` (serifadas editoriais clássicas francesas com kerning refinado, cauda caligráfica estendida em glifos como 'Q' e 'R', escala fluida e line-height compacto de 1.08 no Hero).
- **Corpo, Botões e Metadados:** `Montserrat` & `Inter` (sem-serifas geométricas limpas, modernas e de alta legibilidade).

### 2.3. Efeitos, Materiais & Micro-interações
- **Barra Superior Flutuante, Transparente & Single-Line:** O Header inicia com transparência total (`background: transparent; border-bottom: none`), permitindo que a imagem panorâmica do salão se estenda até o topo da tela. Todos os elementos da navegação possuem `white-space: nowrap !important`, prevenindo quebras indesejadas de texto (como "O SALÃO", "PT / EN / ES" e "AGENDAR HORÁRIO") em resoluções intermediárias (1024px a 1440px). O botão "AGENDAR HORÁRIO" exibe tipografia branca nobre (`#FFFFFF`) sobre fundo ouro acetinado. Ao rolar a página (`window.scrollY > 30`), a classe `.scrolled` ativa o glassmorphism com fundo escuro (`rgba(17, 16, 15, 0.94)`), `backdrop-filter: blur(14px)` e borda dourada acetinada de 1px.
- **Efeito Hover Aristocrático nos Botões Dourados:** Todos os botões dourados (`.btn-gold`, `.btn-header`) exibem tipografia branca pura (`#FFFFFF`) sobre fundo ouro acetinado no estado padrão. Ao passar o mouse (`:hover`), assumem o degradê profundo bronze/espresso (`linear-gradient(135deg, #876349 0%, #654C3A 40%, #44342A 75%, #2B221C 100%)`), fina borda de 1px em ouro nobre (`#C5A059`), texto mantido em branco puro (`#FFFFFF`) e sombra de imersão (`0 8px 24px rgba(0, 0, 0, 0.35)`).
- **Efeito Hover Fundo Branco nos Botões Transparentes:** Todos os botões com fundo transparente (`.btn-hero-outline`, `.btn-outline-dark`) assumem plano de fundo branco puro sólido (`background: #FFFFFF !important; border-color: #FFFFFF !important;`), tipografia em preto ébano (`color: #141414 !important;`) e sombra suave ao passar o mouse, reproduzindo 1:1 o comportamento visual do mockup.
- **Efeito Hover com Escurecimento e Revelação de Texto na Galeria de Arte Viva:** Ao passar o mouse sobre cada fotografia da galeria de transformações assinadas (`.mosaic-item`), a imagem escurece suavemente (`filter: brightness(0.6)`), recebe um véu translúcido escuro (`rgba(10, 9, 7, 0.52)`), sofre um sutil zoom de ampliação (`scale(1.06)`) e revela de baixo para cima o kicker dourado, o título editorial da transformação em tipografia serifada branca pura (`#FFFFFF`) e o indicador de ação `VER EM TELA TODA →`.
- **Modal de Galeria Fullscreen (Lightbox Imersivo):** Ao clicar em qualquer fotografia da galeria, a imagem é aberta em tela inteira sobre um fundo preto luxuoso (`#0A0907` / `rgba(10, 9, 7, 0.96)`) com efeito glassmorphism de desfoque (`backdrop-filter: blur(12px)`). Abaixo da fotografia é exibido o título editorial (ex: "Blonde Couture") e o contador de posição em dourado nobre (`1 / 6`). Conta com botões circulares minimalistas de navegação anterior/próximo (`<` e `>`), botão de fechar no canto superior direito (`✕`), navegação completa por teclado (`Escape` para fechar, `ArrowLeft` e `ArrowRight` para avançar/retroceder), clique fora no backdrop e suporte a gestos de swipe táctil em dispositivos móveis.
- **Efeito Hover Dourado Acetinado nos Círculos da Timeline (5 Passos):** Na seção "Sua Experiência Começa no Atendimento", os crachás circulares numéricos de cada etapa (`.step-circle-badge`) exibem por padrão fundo suave `#FAF7F2`, borda em ouro nobre acetinado (`1.5px solid #C5A059`) e números em preto ébano (`#141414`). Ao passar o mouse sobre qualquer número ou sobre o card da etapa (`:hover` / `.is-active`), o círculo adquire fundo dourado acetinado radiante (`linear-gradient(135deg, #D4AF67 0%, #C5A059 50%, #B89248 100%)`), tipografia em branco puro nobre (`#FFFFFF !important`), halo de luz difusa (`box-shadow: 0 8px 24px rgba(197, 160, 89, 0.45)`) e elevação suave (`transform: translateY(-3px) scale(1.06)`), exatamente idêntico ao mockup original.
- **Pílulas de Filtro de Rituais (Fundo Branco e Contorno Dourado 1:1 com o Mockup):** As pílulas de filtro de categorias de rituais (`.pill-btn`) não utilizam mais fundo preto. No estado inativo, possuem fundo transparente e contorno dourado suave (`1px solid rgba(197, 160, 89, 0.35)`). No estado ativo (`.active`) e ao passar o mouse (`:hover`), assumem fundo branco puro (`background: #FFFFFF !important;`), contorno em ouro nobre acetinado (`border-color: #C5A059 !important;`), tipografia em preto ébano (`color: #141414 !important;`) e sombra de elevação suave, reproduzindo 1:1 o mockup do PDF.
- **Efeito Hover com Sombreamento Editorial nos Cards de Rituais:** Ao passar o mouse sobre cada um dos 6 cards de rituais (`.ritual-card:hover`), é projetada uma sombra suave, profunda e luxuosa em tons quentes de bronze/espresso (`box-shadow: 0 18px 40px -4px rgba(35, 28, 22, 0.15), 0 6px 16px -2px rgba(35, 28, 22, 0.08)`), acompanhada de elevação tátil (`transform: translateY(-6px)`) e sutil acentuação dourada na borda (`border-color: rgba(197, 160, 89, 0.55)`), destacando o card sobre o fundo linho quente da seção.
- **Micro-interações:** feedback táctil ao toque (`:active { transform: scale(0.98); }`), sombras volumétricas suaves e transições em curva de aceleração bezier suave (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 3. Mapeamento Estrutural 1:1 com o Mockup PDF

A landing page reproduz fidedignamente cada uma das seções identificadas nas páginas e fatias do PDF original:

| # | Seção / Componente | Fundo | Elementos-Chave & Mapeamento | Asset Visual Principal |
|---|--------------------|-------|-------------------------------|------------------------|
| 1 | **Header Fixo Glassmorphism** | `#11100F` semi-transparente | Logo AURA Maison, Menu 8 links, Switch PT/EN/ES, Botão "Agendar Horário" com adaptação mobile sem menu sanduíche | Vetores SVG & tipografia |
| 2 | **Hero Section Imersivo** | Dark sobre foto | Kicker `HAIR · BEAUTY · LUXURY EXPERIENCE`, Título 3 linhas "BELEZA QUE REVELA A SUA MELHOR VERSÃO", Subtítulo, Botões "Agendar Experiência" e "Conhecer o Salão" | `photo-1560066984-138dadb4c035_003_Po4W.avif` |
| 3 | **Citação de Impacto** | `#EEE5DC` Linho Quente | Aspas editoriais em 2 linhas: *“Cuidar da beleza também é cuidar de como você<br>se sente.”*, Subtítulo neutro suave `#8C827A` | Tipografia Cormorant Garamond itálica & Montserrat |
| 4 | **O Salão / Conceito** | `#FAF7F2` Creme Suave | Composição fotográfica com Badge Circular `10+ ANOS DE EXCELÊNCIA` no canto superior direito, imagem sobreposta de ferramentas em formato quadrado 1:1 rigoroso (676x676 px, largura de 60%, max 280px, bottom: -18px, right: -42px) com enquadramento idêntico ao PDF original de 316x316 px (pente, prancha modeladora CROC, escova raquete CROC e secador CROC completo), servida via elemento `<picture>` com assets dedicados `photo-ferramentas-conceito-square.avif` e `.jpg` e cache-busting v=4.0.0, moldura branca pura 8px com sombra editorial, manifesto, botão com borda taupe `#CEC4BB` e métricas em ouro nobre sem borda superior (10+ Anos, 8.000+ Clientes, 22+ Especialistas, 4.9★) | `photo-1522337360788-8b13dee7a37e_Po4W.avif` e `photo-ferramentas-conceito-square.avif` / `.jpg` |
| 5 | **Experiências Pensadas Para Você** | `#EEE5DC` Linho Quente | Pílulas de filtro estilizadas 1:1 com o mockup (ativo/hover com fundo branco, contorno dourado e texto escuro), 6 cards com tags de categoria, preços e links `AGENDAR —` / `AVALIAR —`, botão de tabela completa. Card 1: Corte com Visagismo, Card 2: Morena Iluminada, Card 3: Loiro Sublime Signature, Card 4: Protocolo Fusio-Dose, Card 5: Haute Makeup, Card 6: Bridal Experience | `photo-corte-visagismo.avif` / `.jpg`, `photo-1534528741775-53994a69daeb_Po4W.avif`, `photo-1580618672591-eb180b1a973f_003_Po4W.avif`, `photo-1522337660859-02fbefca4702_Po4W.avif`, `photo-1487412720507-e7ab37603c6f_002_Po4W.avif`, `photo-1519741497674-611481863552_002_Po4W.avif` |
| 6 | **Colorimetria de Alta Costura** | `#211C19` Dark Bronze | Grid 2x2 de pilares (Balayage, Morena Iluminada, Blonde Couture, Correção de Cor), Caixa de alerta com ícone `!`, botão de avaliação e foto de styling panorâmica (3:2 landscape) à direita | `photo-1562322140-8baeececf3df_Po4W.avif` |
| 7 | **Resultados Que Falam Por Si** | `#FAF7F2` Creme Suave | Componente comparador interativo Antes / Depois com badges `ANTES` (fixado no canto inferior esquerdo) e `DEPOIS` (fixado no canto inferior direito), divisor central dourado com manopla `‹ ›` e controle de toque/drag | Antes: `photo-1522337360788-8b13dee7a37e_Po4W.avif` vs Depois: `photo-1580618672591-eb180b1a973f_003_Po4W.avif` |
| 8 | **Suíte Nupcial de Prestígio** | `#191512` Dark Nupcial | 4 pilares nupciais, CTA Concierge de Noivas e Formulário completo de Proposta de Noivas com cálculo de cortejo e observações | Vetores SVG & inputs escuros |
| 9 | **Especialistas em Revelar Sua Beleza** | `#FBF9F5` Champagne | 4 cards em grid (Ana Martins, Camila Ferraz, Beatriz Alencar, Gabriela Prado) com overlay de texto gradiente, cargo, biografia, handle Instagram e ação rápida `AGENDAR —` | 4 retratos de especialistas |
| 10 | **Galeria de Arte Viva** | `#161413` Dark | Mosaico editorial de 6 fotografias com hover escurecedor e revelação de texto editorial; clique abre Lightbox Fullscreen imersivo com imagem ampliada, título, contador dourado `X / 6`, botões circulares `<` e `>`, botão fechar `✕`, atalhos de teclado e suporte a swipe | 6 imagens editoriais (`photo-1519699047748`, `photo-15197414976`, `photo-15954761080`, `photo-1560066984`, `photo-15806186725`, `photo-1562322140`) |
| 11 | **Sua Experiência Começa no Atendimento** | `#FAF7F2` Creme Suave | Linha do tempo conectada em 5 passos horizontais com círculos numerados 01 (Consulta), 02 (Avaliação), 03 (Personalização), 04 (Experiência), 05 (Finalização) com efeito hover dourado acetinado, texto branco e halo luminoso | Linha dourada, crachás circulares interativos |
| 12 | **Quem Vive a Experiência, Recomenda** | `#F7F3EC` Creme | Card centralizado em branco puro com estrelas douradas `★★★★★`, citação da cliente, controles do carrossel (setas e dots) e pílula flutuante Google Reviews 4.9 estrelas | Tipografia e controles de navegação |
| 13 | **Seu Momento Começa Aqui** | `#161413` Dark | Coluna esquerda com formulário completo de reserva (nome, WhatsApp, e-mail, ritual, profissional, data, período e notas). Coluna direita com Quadro de Horários, status `● ABERTO AGORA`, tabela semanal e box do Concierge | Formulários e tabela de horários |
| 14 | **Manifesto AURA** | Dark sobre foto | Full-width banner panorâmico com headline: *"Beleza não é sobre mudar quem você é. É sobre revelar."* e CTA `AGENDAR MINHA EXPERIÊNCIA →` | `photo-1522337360788-8b13dee7a37e_Po4W.avif` |
| 15 | **Inspire-se Conosco (Instagram)** | `#FBF9F5` Champagne | Grid de 6 fotos quadradas estilo feed Instagram e botão com link externo `SEGUIR NO INSTAGRAM 📷` alinhado à esquerda. Sequência fiel ao PDF original: 1. Salão B&W (`photo-1560066984`), 2. Morena Iluminada afro (`photo-1519699047`), 3. Pincéis e Acessórios (`photo-1527799820`), 4. Escovação & Styling blow dry (`photo-15806186725`), 5. Loiro Couture com gorro de inverno (`photo-1487412720`), 6. Noiva AURA com buquê (`photo-1519741497`) | 6 imagens do feed oficial |
| 16 | **Newsletter Exclusiva** | `#F7F3EC` Creme | Card limpo com campo de e-mail integrado e botão dourado `QUERO RECEBER` (AURA Beauty Notes) | Formulário inline |
| 17 | **Rodapé Oficial** | `#11100F` Dark Deep | 4 colunas (Marca & Redes Sociais, Navegação, Rituais & Serviços, Endereço com Valet VIP), barra de copyright com crédito `Design by Leccorside` e termos legais | Ícones de contato e links |
| 18 | **WhatsApp Floating Button** | `#25D366` | Botão flutuante circular fixo no canto inferior direito com ícone oficial do WhatsApp | Ícone SVG oficial |
| 19 | **Modal Bottom Sheet VIP** | `#1F1D1A` Dark | Diálogo modal com suporte a Bottom Sheet táctil no celular e diálogo centralizado no desktop | Formulário e grab bar |

---

## 4. Arquitetura Mobile-First & Ergonomia Táctil

1. **Touch Targets de Alto Conforto:**
   - Todos os botões, campos de entrada e seletores possuem altura mínima de **48px**, garantindo ergonomia táctil conforme as diretrizes do Apple Human Interface Guidelines e Material Design 3.
2. **Mobile Bottom Sheet:**
   - Em smartphones, o formulário de reserva VIP surge como folha inferior deslizante com barra de puxar (*grab bar*), gesto de fechar por swipe para baixo e campos de formulário dimensionados em `16px` para prevenir o zoom indesejado no Safari iOS. Em telas a partir de 768px, transmuta-se para um diálogo flutuante centralizado.
3. **Slider Antes / Depois Interativo:**
   - O comparador de transformações capilares conta com suporte nativo a toque e drag no mouse com `touch-action: pan-y`, preservando a fluidez da rolagem vertical da página.
4. **Carrossel de Depoimentos Interativo:**
   - Alternância dinâmica de depoimentos com transição suave de opacidade através das setas de navegação `‹ ›` e das pílulas indicadoras.
5. **Máscaras e Validação Dinâmica de Telefone:**
   - Formatação automática em tempo real para celulares `(11) 99999-9999` com sanitização regex.
   - Restrição automática de datas retroativas (`min="YYYY-MM-DD"`).

---

## 5. SEO, Schema.org & Performance

1. **Metadados Open Graph & Twitter Cards:**
   - Configurados com imagens e descrições para visualização de alta qualidade no WhatsApp, iMessage, Facebook e Twitter.
2. **Dados Estruturados Schema.org JSON-LD:**
   - Especificação oficial para `BeautySalon` contendo coordenadas geográficas dos Jardins, faixa de preço `$$$$`, nota de avaliação agregada de 4.9 estrelas (520 avaliações) e horários de funcionamento.
3. **Preload de Recursos Críticos:**
   - Pré-carregamento imediato de `style.css` e da imagem hero panorâmica (`photo-1560066984-138dadb4c035_003_Po4W.avif`).

---

## 6. Integração Concierge WhatsApp & CRM API (100% no Docker)

1. **Geração de Protocolo Exclusivo:** Protocolo exclusivo gerado em tempo real (ex: `AURA-VIP-4821` ou `AURA-NOIVA-9204`).
2. **Registro Assíncrono na API REST do Docker:** O formulário efetua chamada via `POST /api/agendamentos` e `POST /api/newsletter` no Nginx.
3. **Composição da Mensagem Concierge no WhatsApp:**
   A mensagem para a cliente é formatada com elegância para envio ao número oficial `(11) 3088-9900`:
   ```text
   Olá, Concierge AURA Maison de Beauté! ✨

   Gostaria de solicitar uma reserva VIP:
   ✦ Protocolo: AURA-VIP-XXXX
   ✦ Nome: [Nome da Cliente]
   ✦ Ritual Desejado: [Ritual Selecionado]
   ✦ Data Preferencial: [DD/MM/AAAA]
   ✦ Profissional: [Nome do Especialista]
   ✦ Horário: [Período Preferencial]
   ✦ WhatsApp: (11) 9XXXX-XXXX
   ✦ Observações: [Detalhes opcionais]

   Aguardo as opções de horários privativos disponíveis nos Jardins. Muito obrigada!
   ```
4. **Notificação Toast Aristocrática:** Confirmação visual elegante na tela com feedback imediato.

---

## 7. Verificação Automatizada no Docker

- **Script de Testes:** `tests/audit_docker.py`
- **Cobertura de Validação:**
  - Status HTTP 200 para a rota `/` (Landing Page).
  - Status HTTP 200 para `/css/style.css` e `/js/main.js`.
  - Status HTTP 200 e tipo MIME `image/avif` para as **14 imagens AVIF** presentes no salão.
  - Validação dos endpoints `POST /api/agendamentos` e `POST /api/newsletter`.
  - Validação de 100% dos blocos e textos do PDF.


---

## 8. Engenharia de Responsividade & Auditoria Mobile Multi-Viewport

Para garantir excelência absoluta de visualização em qualquer dispositivo, o projeto foi submetido a uma rigorosa auditoria automatizada em múltiplos viewports mobile reais via **Chrome DevTools Protocol (CDP)** (`tests/cdp_mobile_auditor.py`):

### 8.1. Matriz de Viewports Validados
- **320 x 568 px (DPR 2.0):** iPhone SE 1ª Geração / telas ultra-estreitas.
- **360 x 780 px (DPR 2.0):** Padrão dominante Android (Samsung Galaxy A/S).
- **375 x 812 px (DPR 2.0):** iPhone SE 2/3, iPhone X, XS, 11 Pro, 12 Mini, 13 Mini.
- **390 x 844 px (DPR 3.0):** iPhone 12, 13, 14, 15 padrão.
- **414 x 896 px (DPR 3.0):** iPhone XR, 11, Plus e Max.
- **480 x 854 px (DPR 2.0):** Phablets e smartphones em alta densidade.
- **768 x 1024 px (DPR 2.0):** Tablets (iPad portrait).

### 8.2. Critérios de Conformidade Aprovados (100% de Sucesso)
1. **Zero Overflow Horizontal:** Em todos os viewports testados, `scrollWidth == innerWidth` com 0px de desvio lateral, eliminando qualquer rolagem indesejada ou salto de tela.
2. **Segurança no Nível Raiz:** Regra `overflow-x: hidden;` unificada em `html` e `body` com `box-sizing: border-box`.
3. **Barra Superior Minimalista:** Logotipo proporcional e botão de agendamento dourado `.btn-header` com paddings adaptativos (8px a 12px) e respiro lateral de segurança (12px a 16px), sem menu sanduíche.
4. **Composição da Seção Conceito:** Regras responsivas fluidas no CSS governando o card sobreposto de ferramentas (60% no desktop, 55% no tablet, 54% no mobile padrão e 52% em telas <= 380px) e o selo 10+ anos, contidos nas margens da tela.
5. **Tipografia Fluida:** Títulos e subtítulos calibrados via `clamp()` para impedir recortes ou quebras órfãs.
6. **Comparador Antes/Depois Fluido:** Escala da imagem clipada ajustada dinamicamente via `calc(100vw - 40px)` para acompanhamento milimétrico da viewport.
7. **Restauração Cromática `--color-gold`:** Variáveis de paleta oficial unificadas no `:root`, garantindo nitidez e fidelidade cromática em todos os estados da interface.
8. **Centralização do CTA de Noivas no Mobile:** O botão dourado "Falar com Concierge de Noivas" (`.bridal-cta-btn`) conta com container `.bridal-action-wrap`, permanecendo alinhado à esquerda no desktop e assumindo centralização matemática horizontal no mobile/tablet (`<= 991px`) com respiro simétrico perfeito.
9. **Fidelidade Cromática dos Cards de Rituais:** Calibração estrita dos preços e números (`.price-val strong`) para o tom bronze aveludado / avelã quente `#8D684D` (`rgb(141, 104, 77)`), rótulos de prefixo (`.price-val`) para taupe suave `#8C827A` (`rgb(140, 130, 122)`) e traço de ação (`.action-dash`) para ouro nobre `#C5A059` (`rgb(197, 160, 89)`), correspondendo 1:1 à paleta extraída do PDF original.
10. **Marca d'Água Tipográfica de Fundo na Colorimetria:** Elemento decorativo `.color-watermark` renderizando a palavra "HAIR" em escala monumental com fonte serifada (`Cormorant Garamond`), cor ouro nobre suave (`rgba(197, 160, 89, 0.09)`), posicionado no fundo da seção `#coloracao` entre as colunas técnicas e estendendo-se sob a fotografia panorâmica com `z-index: 1`, `pointer-events: none` e contenção absoluta via `overflow: hidden`.
11. **Tipografia dos Badges do Slider Antes/Depois:** Ajuste da cor da fonte dos marcadores de canto `.badge-corner-tag` ("ANTES" e "DEPOIS") para branco puro (`#FFFFFF` / `var(--text-white)`), reproduzindo fielmente a legibilidade e contraste do layout de alta resolução do PDF.
12. **Marca d'Água Tipográfica de Fundo na Suíte Nupcial:** Elemento decorativo `.bridal-watermark` renderizando a palavra "BRIDE" em escala monumental com fonte serifada (`Cormorant Garamond`), cor ouro nobre suave (`rgba(197, 160, 89, 0.08)`), centralizado matematicamente sob o grid dos 4 cards de benefícios (`.pillar-card-dark`), visível através do vidro fosco translúcido dos cards (`rgba(255, 255, 255, 0.025)`) e em seus vãos, com `z-index: 0`, `pointer-events: none` e contenção absoluta via `overflow: hidden`.
13. **Cor da Tipografia do Título do Manifesto (Preto Nobre 1:1 com o Original):** O título principal da seção Manifesto AURA (`#manifesto`), `.manifesto-huge-heading` (*"Beleza não é sobre mudar quem você é. É sobre revelar."*), foi atualizado de branco (`var(--text-white)`) para preto puro `#000000` (`rgb(0, 0, 0)`), reproduzindo com fidelidade absoluta a composição do design original do PDF onde a tipografia em tom ébano/preto nobre repousa diretamente sobre a imagem de fundo com overlay quente.
14. **Tipografia Branca dos Cards de Colorimetria e Alinhamento 1:1 da Marca d'Água "HAIR":** Os títulos das técnicas de colorimetria (`#coloracao .pillar-title` — "Balayage Francesa", "Morena Iluminada", "Blonde Couture" e "Correção de Cor") foram calibrados para branco puro (`#FFFFFF` / `rgb(255, 255, 255)`), contrastando com a barra lateral dourada e reproduzindo com fidelidade a referência original. Simultaneamente, a marca d'água monumental `.color-watermark` ("HAIR") foi realocada diretamente para dentro do grid das técnicas (`.color-pillars-grid`), com espaçamento proporcional entre letras (`letter-spacing: 0.06em`), situando a letra "H" no vão entre as duas colunas, a letra "A" sob a segunda coluna e a letra "I" perfeitamente visível à direita antes da fotografia, em tom ouro suave translúcido (`rgba(197, 160, 89, 0.08)`).
15. **Sequência de Fotos dos Especialistas, Alinhamento à Esquerda e Efeito Hover Nobre:** Na seção de Mestres & Especialistas (`#especialistas`), a sequência fotográfica foi alinhada fielmente à referência original, trocando os retratos dos Cards 2 e 3 (Camila Ferraz com retrato em luz azul/púrpura e Beatriz Alencar com coque despojado e fundo claro), preservando integralmente a integridade dos textos, bios e links. O botão de ação principal "CONHECER TODO O CORPO ARTÍSTICO →" foi realocado com o container `.specialists-action` alinhado à esquerda (`justify-content: flex-start`), rentes à coluna inicial dos cards. Adicionalmente, seu estado de interação `:hover` e `:focus-visible` foi refinado com fundo preto ébano (`#11100F !important`), tipografia e seta em branco nobre (`#FFFFFF !important`), contorno em ouro nobre acetinado (`var(--gold-primary)` / `#C5A059 !important`) e elevação suave com sombra difusa, com versão de cache atualizada para `v=5.0.0`.
16. **Calibração Cromática do Seletor de Idiomas (PT Dourado e Barras Neutras):** O componente de idiomas da barra superior fixa (`.lang-switch`) foi calibrado com correspondência cromática exata ao PDF oficial do projeto. O idioma ativo `PT` (`.lang-item.active`) recebeu destaque cromático em ouro nobre acetinado (`var(--gold-primary)` / `#C5A059` / `RGB [198, 161, 91]`) e peso semi-bold (600), enquanto as barras oblíquas divisórias (`.lang-divider`) foram alinhadas para branco translúcido neutro (`rgba(255, 255, 255, 0.45)`) com espaçamento simétrico (`margin: 0 4px`), eliminando a coloração dourada incorreta anterior. Os demais idiomas (`EN` e `ES`) mantêm tom taupe elegante (`#AAA397`) com transição aveludada para branco no hover e suporte à acessibilidade/interação via clique e teclado, com versão de cache atualizada para `v=5.1.0`.
17. **Padronização dos Botões Outline (Borda Dourada, Alinhamento à Esquerda e Hover Preto/Branco):** Todos os botões editoriais com contorno (`.btn-outline-dark`) foram harmonizados segundo o padrão do PDF e solicitação de design:
   - **Alinhamento à Esquerda:** O botão "VER TABELA COMPLETA DE RITUAIS & PREÇOS →" (`#experiencias`) foi realocado com o container `.rituals-action` com `display: flex; justify-content: flex-start; margin-top: 50px;`, alinhando-se à margem esquerda dos cards de procedimentos. A seção de Instagram também recebeu a classe `.instagram-action` com alinhamento à esquerda, em consonância com as seções `#conceito` e `#especialistas`.
   - **Borda Dourada em Repouso:** Aplicado contorno em ouro nobre acetinado (`border: 1px solid var(--gold-primary);` / `#C5A059`) em todos os botões outline em estado padrão, eliminando as bordas anteriores escuras ou cinzas.
   - **Efeito Hover/Focus Nobre:** No estado interativo (`:hover` e `:focus-visible`), todos os botões transitam fluidamente para fundo preto ébano (`background: #11100F !important;`), tipografia e setas em branco puro (`color: #FFFFFF !important;`), mantendo a borda em ouro nobre (`border-color: var(--gold-primary) !important;`) com sombra difusa e elevação de 2px, com versão de cache atualizada para `v=5.2.0`.
18. **Remoção do Negrito no Título Editorial do Manifesto:** A tipografia principal da seção Manifesto AURA (`#manifesto`), `.manifesto-huge-heading` (*"Beleza não é sobre mudar quem você é. É sobre revelar."*), recebeu a declaração explícita `font-weight: 400;` tanto no breakpoint desktop quanto no mobile. Essa intervenção suprimiu a herança padrão de negrito (700) aplicada por navegadores a elementos `<h2>`, restaurando o peso regular clássico, refinado e etéreo das serifas Cormorant Garamond, reproduzindo 1:1 o mockup do PDF oficial com versão de cache atualizada para `v=5.3.0`.
19. **Correção da Sequência e Substituição da Foto no Feed Instagram (Fidelidade 1:1 ao PDF):** Na seção Inspire-se Conosco (`#instagram`), a grade fotográfica de 6 células (`.instagram-6grid`) foi alinhada matematicamente à referência oficial extraída do PDF:
   - **Substituição da Foto Divergente:** A fotografia da 5ª célula anterior, que exibia uma lavagem de cabelos no lavatório (`photo-1595476108010-b4d1f102b1b1_002_Po4W.avif`), não pertence ao feed do Instagram do PDF. Ela foi removida e substituída pela fotografia autêntica de secagem/escovação profissional com secador e escova redonda em salão (`photo-1580618672591-eb180b1a973f_003_Po4W.avif`), que possui enquadramento centralizado 1:1 perfeito.
   - **Alinhamento Rigoroso da Sequência:** A ordem das 6 fotografias foi reorganizada para espelhar exatamente a linha do mockup do PDF:
     1. Salão AURA em preto e branco com espelhos e bancadas (`photo-1560066984-138dadb4c035_003_Po4W.avif`).
     2. Mulher com cabelos cacheados volumosos em fundo rosa suave (`photo-1519699047748-de8e457a634e_Po4W.avif`).
     3. Instrumentos e acessórios de styling profissional sobre bancada branca (`photo-1527799820374-dcf8d9d4a388_002_Po4W.avif`).
     4. Escovação & Styling profissional com secador e escova (`photo-1580618672591-eb180b1a973f_003_Po4W.avif`).
     5. Mulher loira com gorro e cachecol de inverno na neve (`photo-1487412720507-e7ab37603c6f_002_Po4W.avif`).
     6. Noiva e noivo segurando buquê floral de casamento (`photo-1519741497674-611481863552_002_Po4W.avif`).
   - Versão de cache atualizada para `v=5.4.0` em `index.html` e `style.css`.
20. **Calibração Cromática do Selo Circular de Excelência (Todas as Palavras em Dourado Nobre):** No selo circular `.badge-excellence-circle` ("10+ ANOS DE EXCELÊNCIA") na seção O Salão / Conceito (`#conceito`), a tipografia secundária `.badge-txt` foi alterada de marfim `#DDD7CE` para ouro nobre acetinado (`var(--gold-primary)` / `#C5A059`), garantindo que tanto o numeral "10+" quanto as palavras "ANOS DE EXCELÊNCIA" e a borda externa do selo compartilhem rigorosamente a mesma tonalidade dourada, atingindo fidelidade 1:1 com o mockup do PDF oficial, com versão de cache atualizada para `v=5.5.0`.
21. **Calibração da Caixa de Transparência da Colorimetria (Contorno Pontilhado e Tipografia Branca):** Na caixa de aviso de transparência (`.transparency-alert`) na seção Colorimetria de Alta Costura (`#coloracao`), foram implementados os seguintes refinamentos 1:1 com o mockup do PDF:
   - **Contorno Pontilhado:** O contorno sólido anterior foi substituído por uma borda pontilhada suave em dourado (`border: 1px dotted rgba(197, 160, 89, 0.6);`), reproduzindo exatamente o padrão gráfico do original.
   - **Tipografia Branca Pura:** A frase inicial de destaque "Aviso de transparência:" (`strong`), anteriormente em dourado, foi atualizada para branco puro (`#FFFFFF`), harmonizando-se com o restante do corpo do aviso e eliminando o contraste cromático indesejado.
   - **Fundo Translúcido e Ícone Refinado:** O fundo da caixa foi alinhado para transparente (`background: transparent`), integrando-se organicamente ao fundo escuro da seção, e o ícone de exclamação (`.alert-icon-circle`) foi calibrado com aro dourado e centro transparente, com versão de cache atualizada para `v=5.6.0`.
22. **Remoção do Negrito dos Badges ANTES / DEPOIS do Comparador de Transformações:** Nos marcadores de canto `.badge-corner-tag` ("ANTES" e "DEPOIS") do comparador interativo na seção Resultados Visíveis (`#transformacoes`), a tipografia foi calibrada de semi-bold (`font-weight: 600`) para regular (`font-weight: 400`), eliminando o aspecto pesado do negrito e conferindo máxima sutileza, elegância e correspondência rigorosa 1:1 ao design original do PDF, com versão de cache atualizada para `v=5.7.0`.
23. **Calibração Cromática do Card de Proposta de Noivas (Marrom Espresso Original):** No formulário de proposta da seção Noivas & Suíte Privativa (`.bridal-form-card` em `#noivas`), a paleta cromática foi refinada para atingir equivalência visual absoluta 1:1 com o mockup original do PDF:
   - **Fundo do Card em Marrom Espresso Quente:** O fundo anterior em grafite frio (`#1F1D1A`) foi substituído por marrom espresso nobre e aquecido (`#2A2320`, medido no PDF original [42, 35, 32]), conferindo o acolhimento visual e a textura calorosa de alta costura presentes no design original.
   - **Harmonização do Fundo da Seção:** O fundo da seção `#noivas` foi calibrado para `#211C19` (bronze espresso escuro [33, 28, 25]), unificando a atmosfera noturna de luxo da página.
   - **Contraste dos Campos de Entrada:** Os inputs internos (`.bridal-form-card .input-dark`) foram configurados com fundo escuro de contraste (`#191512`), mantendo o relevo refinado e a legibilidade dos campos sob o card marrom, com versão de cache atualizada para `v=5.8.0`.
24. **Equalização Dimensional dos Cards da Seção de Agendamento (Simetria e Altura 1:1 com o Original):** Na seção Seu Momento Começa Aqui (`#agendamento`), os dois cards principais (`.booking-box-dark` com o formulário de reserva e `.schedule-box-dark` com o quadro de horários e concierge) foram equalizados para reproduzir a simetria perfeita do mockup:
   - **Eliminação do Desnível Vertical (`align-items: stretch`):** A declaração anterior `align-items: start;` no grid `.booking-double-grid` fazia com que o card esquerdo encolhesse prematuramente na altura dos campos, terminando 112px mais alto que o quadro de horários. Com a aplicação de `align-items: stretch;` e `height: 100%`, ambos os cards agora esticam para a mesma altura exata da linha do grid (`heightDiff: 0px`), alinhando perfeitamente a linha superior e a base inferior.
   - **Larguras Balanceadas Simétricas (`1fr 1fr`):** A proporção anterior de `1.15fr 0.85fr` foi substituída por `grid-template-columns: 1fr 1fr;` com gap uniforme de 48px, proporcionando largura idêntica para os dois blocos em telas desktop e tablets em orientação paisagem (`widthDiff: 0px`), com versão de cache atualizada para `v=5.9.0`.
25. **Alinhamento e Fidelidade Absoluta 1:1 do Rodapé do Projeto (Fundo Dark Couture, Supressão de Bullets e Emblemas Sociais Circulares):** O rodapé do projeto (`.site-footer`) foi integralmente alinhado às diretrizes editoriais do PDF de alta resolução:
   - **Supressão Total de Marcadores de Lista (*Bullets*):** As listas das colunas "Navegação" e "Experiências" (`.footer-list` e `.footer-links-list`) foram blindadas com `list-style: none !important;` e `padding: 0 !important;`, eliminando os pontos pretos e alinhando perfeitamente a margem dos links institucionais.
   - **Emblemas Circulares de Joalheria nas Redes Sociais:** Os links sociais (`.social-circle-link`) foram formatados como botões circulares nobres (`width: 34px; height: 34px; border-radius: 50%`) com fundo translúcido suave (`rgba(255, 255, 255, 0.04)`), aro fino em ouro acetinado (`rgba(197, 160, 89, 0.35)`) e glifo em ouro nobre (`var(--gold-primary)` / `#C5A059`), com transição aveludada no hover para fundo dourado radiante e ícone em espresso escuro `#16120F`.
   - **Tipografia Editorial dos Títulos das Colunas:** Os títulos (`.footer-nav-title`) foram padronizados com a fonte serifada clássica (`var(--font-serif)`), peso 500, tamanho `1.18rem` e cor branca nobre (`var(--text-white)`), respeitando o *Title Case* aristocrático do design original.
   - **Calibração Colorimétrica do Fundo:** O fundo do rodapé foi calibrado com a assinatura exata do PDF oficial: `#16120F` (Dark Couture Espresso `RGB [22, 18, 15]`), com versão de cache atualizada para `v=5.10.0`.
26. **Centralização do Cabeçalho do Card de Noivas (Título e Subtítulo 1:1 com o Original):** No formulário de proposta da seção Suíte Nupcial (`.bridal-form-card` em `#noivas`), o título editorial "Planeje seu Dia dos Sonhos" (`.bridal-form-heading`) e o subtítulo "Solicite uma proposta detalhada para você e seu cortejo" (`.bridal-form-sub`) receberam alinhamento centralizado (`text-align: center;`), em perfeita consonância com o layout original do PDF de alta resolução (`centerDiff: 0px`), preservando o alinhamento funcional à esquerda dos rótulos dos campos do formulário, com versão de cache atualizada para `v=5.11.0`.
27. **Calibração Cromática do Fundo da Caixa de Aviso de Transparência (Marrom Espresso Suave #2E251E 1:1 com o Original):** Na caixa de aviso de transparência (`.transparency-alert`) da seção Colorimetria de Alta Costura (`#coloracao`), o fundo foi calibrado para o tom marrom espresso suave mais claro do layout original (`#2E251E` / `RGB [46, 37, 30]`), substituindo o fundo transparente anterior e proporcionando destaque acolhedor, elegante e refinado sobre o fundo bronze da seção (`#211C19` / `RGB [33, 28, 25]`), preservando integralmente o contorno pontilhado em ouro acetinado, a tipografia branca nobre e o ícone com aro dourado, com versão de cache atualizada para `v=5.12.0`.
28. **Equalização Dimensional do Card de Noivas com a Coluna da Esquerda (Simetria e Alinhamento 1:1 com o Original):** Na seção Suíte Nupcial de Prestígio (`#noivas`), o card de proposta de casamento (`.bridal-form-card`) foi equalizado com a coluna esquerda de informações e benefícios (`.bridal-info-col`):
   - **Preenchimento Vertical Total (`align-items: stretch`):** O grid `.bridal-layout-grid` recebeu `align-items: stretch;` nos breakpoints de desktop/tablet (`min-width: 992px`), esticando o card para a mesma altura exata da coluna da esquerda (`heightDiff: 0px`).
   - **Distribuição Interna Harmônica do Formulário:** O card foi configurado com `height: 100%; display: flex; flex-direction: column;` e o formulário `#bridal-proposal-form` com `flex: 1; justify-content: space-between;`, alinhando perfeitamente o botão "SOLICITAR ORÇAMENTO DE NOIVAS" com a base do botão "FALAR COM CONCIERGE DE NOIVAS" da coluna esquerda (`bottomDiff: 0px`), eliminando qualquer degrau visual e reproduzindo com fidelidade 1:1 a arquitetura do mockup original do PDF, com versão de cache atualizada para `v=5.13.0`.
29. **Calibração Cromática do Fundo da Seção de Depoimentos (Linho Quente #EEE5DC 1:1 com o Original):** Na seção Vozes de Quem Viveu o Ritual (`#depoimentos` / `.testimonials-editorial-section`), a tonalidade de fundo foi escurecida e calibrada para linho quente aveludado (`#EEE5DC` / `RGB [238, 229, 220]`), substituindo o tom champagne excessivamente claro anterior (`#F7F3EC`) e atingindo equivalência exata de 100% com o PDF oficial, realçando o card central branco puro (`.testimonial-spotlight-card`), os controles do carrossel e o selo Google Reviews, com versão de cache atualizada para `v=5.14.0`.
30. **Alinhamento e Calibração Fiel da Seção de Newsletter (Fundo Linho Quente #EEE5DC, Divisor Superior e Formulário 1:1 com o Original):** Na seção AURA Beauty Notes (`.newsletter-clean-section`), o fundo foi ajustado para linho quente aveludado (`#EEE5DC` / `RGB [238, 229, 220]`), substituindo o tom champagne anterior (`#F7F3EC`) em consonância rigorosa com a referência enviada pelo usuário e a extração vetorial do PDF original (páginas 0 e 1). A borda divisória superior foi calibrada para `#DED5CE`, a tipografia da headline e subtítulo foi refinada proporcionalmente (`clamp(1.8rem, 2.5vw, 2.35rem)` e max-width de 580px), e o formulário (`.newsletter-clean-form`) teve largura calibrada para 530px com gap de 8px, campo de entrada com fundo branco puro, placeholder taupe `#9E9A95`, cantos refinados em 4px e botão dourado aristocrático `.btn-newsletter` (`#C5A059`) com altura equalizada de 48px, blindagem de cache atualizada para `v=5.15.0` e validação 100% aprovada na suíte Docker.
31. **Equalização e Calibração Fiel dos Cards de Agendamento e Horários (1:1 com o Original):** Na seção Seu Momento Começa Aqui (`#agendamento`), os cards `.booking-box-dark` e `.schedule-box-dark` foram integralmente alinhados ao design original do PDF:
   - **Proporção Hierárquica do Grid (1.35fr : 1fr):** O layout de desktop (`@media (min-width: 992px)`) foi calibrado para `grid-template-columns: 1.35fr 1fr; gap: 40px; align-items: stretch;`, garantindo espaço ideal e confortável para o formulário de reserva, permitindo que a linha com 3 campos seletores/data caiba sem quebra de texto, mantendo altura idêntica e balanceada de 688px em ambos os cards.
   - **Tonalidade Espresso dos Cards (#1F1A17):** O fundo dos cards foi calibrado para o autêntico marrom espresso escuro `#1F1A17` (`RGB [31, 26, 23]`), com borda sutil `1px solid rgba(197, 160, 89, 0.22)`, reproduzindo com fidelidade a amostragem colorimétrica do PDF original.
   - **Rótulos do Formulário em Marfim Suave (#C4B5A8):** Os rótulos `#section-booking-form .form-label-txt` foram atualizados para marfim/taupe suave `#C4B5A8`, conferindo legibilidade discreta e requintada idêntica à referência original.
   - **Botão com Gradiente Dourado e Glow Acetinado:** O botão de agendamento (`#section-booking-form .btn-gold`) recebeu gradiente acetinado `linear-gradient(135deg, #C5A059 0%, #B89248 100%)` e aura luminosa suave `box-shadow: 0 4px 20px rgba(186, 155, 108, 0.35)`.
   - **Quadro de Horários e Sub-box do Concierge:** A tipografia do dia ativo no quadro de horários (`.schedule-row.active-day`) foi alinhada para marfim suave (`var(--text-ivory)`), eliminando o destaque dourado ruidoso em "Terça-feira", e a sub-box `.concierge-subbox` foi harmonizada com `background: rgba(197, 160, 89, 0.06)` e borda ouro translúcida.
   - **Blindagem Contra Cache v=5.16.0:** Atualização de versão de cache para `v=5.16.0` em `index.html` e `style.css`.
32. **Implementação do Menu Hambúrguer Mobile no Lado Direito do Header:**
   - **Posicionamento e Estrutura no Header:** No bloco de ações à direita (`.header-right`), foi integrado o botão de navegação mobile (`.btn-mobile-toggle#menu-toggle-btn`) posicionado à direita do botão CTA ("AGENDAR HORÁRIO"), visível em dispositivos móveis e tablets (`@media (max-width: 959px)`) e ocultado com elegância no desktop (`@media (min-width: 960px)` com `display: none !important;`).
   - **Design System de Luxo:** O botão foi construído com fundo translúcido em Dark Espresso (`rgba(22, 18, 15, 0.75)`), desfoque em vidro (`backdrop-filter: blur(8px)`), borda de alta joalheria em ouro acetinado (`rgba(197, 160, 89, 0.45)`), e três barras refinadas em ouro (`var(--gold-primary)` / `#C5A059`) com transição suave e animação para estado ativo em "X" com feixe branco puro (`#FFFFFF`).
   - **Integração com o Drawer Lateral:** O acionamento abre o `.mobile-drawer` de alta costura com backdrop blur escuro (`.mobile-drawer-overlay`), suporte a fechamento por clique externo, tecla Escape, gesto de arraste (swipe touch para a direita), botão de fechar dedicado no topo do drawer e fechamento automático ao selecionar qualquer uma das 13 seções do salão ou o botão de agendamento do rodapé do drawer.
   - **Responsividade e Contenção de Overflow:** Auditado via Chrome CDP em 375px (mobile), 768px (tablet) e 1280px (desktop), garantindo zero transbordo horizontal (`hasHScroll: false`), target touch ergonômico (38x38px em tablet/mobile amplo e 34x34px em telas estreitas) e versionamento de cache atualizado para `v=5.17.0` em `index.html`, `style.css` e `main.js`.
