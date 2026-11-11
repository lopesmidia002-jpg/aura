# DOCUMENTAÇÃO TÉCNICA — AURA MAISON DE BEAUTÉ

## 1. Visão Geral
A Landing Page oficial da **AURA Maison de Beauté** foi desenvolvida sob o conceito de **Haute Coiffure & Visagisme**, transmitindo requinte, sofisticação editorial e acolhimento para o salão feminino de alto padrão localizado no bairro dos Jardins, São Paulo.

O projeto foi alinhado com **100% de fidelidade visual, estrutural e de copy** ao arquivo oficial `AURA Maison de Beauté — Salão Feminino de Alto Padrão Experiências Exclusivas.pdf`, extraído em 12 slices de alta definição (`pdf_slices/`), combinando rigor estético de alta costura com engenharia de software de ponta, 100% conteinerizado no Docker.

---

## 2. Design System de Luxo & Fidelidade Visual

### 2.1. Paleta Cromática
- **Fundo Champagne Nobre:** `#FBF9F5` (base editorial suave e acolhedora presente nas seções Hero, Conceito, Resultados e Instagram)
- **Fundo Champagne Alternativo:** `#F7F3EC` (separador harmônico entre seções presente nos Rituais, Depoimentos e Newsletter)
- **Superfície Escura de Alta Costura (Dark Couture):** `#161413` e `#11100F` (módulos noturnos: Colorimetria, Suíte Nupcial, Galeria Mosaico, Reserva/Horários e Rodapé)
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
- **Micro-interações:** feedback táctil ao toque (`:active { transform: scale(0.98); }`), sombras volumétricas suaves e transições em curva de aceleração bezier suave (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 3. Mapeamento Estrutural 1:1 com o Mockup PDF

A landing page reproduz fidedignamente cada uma das seções identificadas nas páginas e fatias do PDF original:

| # | Seção / Componente | Fundo | Elementos-Chave & Mapeamento | Asset Visual Principal |
|---|--------------------|-------|-------------------------------|------------------------|
| 1 | **Header Fixo Glassmorphism** | `#11100F` semi-transparente | Logo AURA Maison, Menu 8 links, Switch PT/EN/ES, Botão "Agendar Horário", Toggle mobile | Vetores SVG & tipografia |
| 2 | **Hero Section Imersivo** | Dark sobre foto | Kicker `HAIR · BEAUTY · LUXURY EXPERIENCE`, Título 3 linhas "BELEZA QUE REVELA A SUA MELHOR VERSÃO", Subtítulo, Botões "Agendar Experiência" e "Conhecer o Salão" | `photo-1560066984-138dadb4c035_003_Po4W.avif` |
| 3 | **Citação de Impacto** | `#EEE5DC` Linho Quente | Aspas editoriais em 2 linhas: *“Cuidar da beleza também é cuidar de como você<br>se sente.”*, Subtítulo neutro suave `#8C827A` | Tipografia Cormorant Garamond itálica & Montserrat |
| 4 | **O Salão / Conceito** | `#FBF9F5` Champagne | Composição fotográfica com Badge Circular `10+ ANOS DE EXCELÊNCIA`, imagem sobreposta de ferramentas, manifesto e grid de 4 métricas (10+ Anos, 8.000+ Clientes, 22+ Especialistas, 4.9★) | `photo-1522337360788-8b13dee7a37e_Po4W.avif` e `photo-1527799820374-dcf8d9d4a388_002_Po4W.avif` |
| 5 | **Experiências Pensadas Para Você** | `#F7F3EC` Creme | Filtros por pílula (Todos, Cabelo, Coloração, Tratamentos, Make, Unhas, Noivas), 6 cards com tags de categoria, preços e links `AGENDAR —` / `AVALIAR —`, botão de tabela completa | 6 imagens de rituais assinados |
| 6 | **Colorimetria de Alta Costura** | `#161413` Dark | Grid 2x2 de pilares (Balayage, Morena Iluminada, Blonde Couture, Correção de Cor), Caixa de alerta com ícone `!`, botão de avaliação e foto de styling à direita | `photo-1580618672591-eb180b1a973f_003_Po4W.avif` |
| 7 | **Resultados Que Falam Por Si** | `#FBF9F5` Champagne | Componente comparador interativo Antes / Depois com badges `ANTES` e `DEPOIS`, divisor central dourado com manopla `‹ ›` e controle de toque/drag | `photo-1522337360788-8b13dee7a37e_Po4W.avif` vs `photo-1487412720507-e7ab37603c6f_002_Po4W.avif` |
| 8 | **Suíte Nupcial de Prestígio** | `#161413` Dark | 4 pilares nupciais, CTA Concierge de Noivas e Formulário completo de Proposta de Noivas com cálculo de cortejo e observações | Vetores SVG & inputs escuros |
| 9 | **Especialistas em Revelar Sua Beleza** | `#FBF9F5` Champagne | 4 cards em grid (Ana Martins, Camila Ferraz, Beatriz Alencar, Gabriela Prado) com overlay de texto gradiente, cargo, biografia, handle Instagram e ação rápida `AGENDAR —` | 4 retratos de especialistas |
| 10 | **Galeria de Arte Viva** | `#161413` Dark | Mosaico editorial de 6 fotografias com diferentes proporções (quadradas, panorâmicas e verticais) | 6 imagens editoriais |
| 11 | **Sua Experiência Começa no Atendimento** | `#FBF9F5` Champagne | Linha do tempo conectada em 5 passos horizontais com círculos numerados 01 (Consulta), 02 (Avaliação), 03 (Personalização), 04 (Experiência), 05 (Finalização) | Linha dourada e badges |
| 12 | **Quem Vive a Experiência, Recomenda** | `#F7F3EC` Creme | Card centralizado em branco puro com estrelas douradas `★★★★★`, citação da cliente, controles do carrossel (setas e dots) e pílula flutuante Google Reviews 4.9 estrelas | Tipografia e controles de navegação |
| 13 | **Seu Momento Começa Aqui** | `#161413` Dark | Coluna esquerda com formulário completo de reserva (nome, WhatsApp, e-mail, ritual, profissional, data, período e notas). Coluna direita com Quadro de Horários, status `● ABERTO AGORA`, tabela semanal e box do Concierge | Formulários e tabela de horários |
| 14 | **Manifesto AURA** | Dark sobre foto | Full-width banner panorâmico com headline: *"Beleza não é sobre mudar quem você é. É sobre revelar."* e CTA `AGENDAR MINHA EXPERIÊNCIA →` | `photo-1522337360788-8b13dee7a37e_Po4W.avif` |
| 15 | **Inspire-se Conosco (Instagram)** | `#FBF9F5` Champagne | Grid de 6 fotos quadradas estilo feed Instagram e botão com link externo `SEGUIR NO INSTAGRAM 📷` | 6 imagens do feed |
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
