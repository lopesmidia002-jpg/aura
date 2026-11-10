# DOCUMENTAÇÃO TÉCNICA — AURA MAISON DE BEAUTÉ

## 1. Visão Geral
A Landing Page oficial da **AURA Maison de Beauté** foi desenvolvida sob o conceito de **Haute Coiffure & Visagisme**, transmitindo requinte, sofisticação editorial e acolhimento para o salão feminino de alto padrão localizado no bairro dos Jardins, São Paulo.

O projeto foi construído seguindo uma estrita filosofia **Mobile-First**, garantindo ergonomia táctil, desempenho fluido em dispositivos móveis e enriquecimento progressivo para desktops e telas ultrawide.

---

## 2. Design System de Luxo

### 2.1. Paleta Cromática
- **Fundo Champagne Nobre:** `#FBF9F5` (base editorial suave e acolhedora)
- **Fundo Champagne Alternativo:** `#F7F3EC` (separador harmônico entre seções)
- **Cartões Creme Soft:** `#F5F0EB` (superfície de destaque para cards e módulos)
- **Dourado Acetinado (Primary Gold):** `#C5A059` (destaques, bordas finas e detalhes nobres)
- **Gradiente Ouro Acetinado:** `linear-gradient(135deg, #C5A059 0%, #E5CA8F 48%, #B38E46 100%)`
- **Tipografia Preto Ébano:** `#141414` (contraste e legibilidade aristocrática)
- **Neutro Secundário Quente:** `#4A4640` / `#7A746C` (legendas e metadados)
- **Superfície Escura Nobre (Haute Couture):** `#11100F` / `#1A1816` (módulo atelier de coloração e formulário concierge)

### 2.2. Tipografia Editorial
- **Títulos e Citações:** `Playfair Display` & `Cormorant Garamond` (serifadas editoriais clássicas com kerning refinado).
- **Corpo, Botões e Metadados:** `Montserrat` & `Inter` (sem-serifas geométricas limpas, modernas e de alta legibilidade).

### 2.3. Efeitos & Materiais
- **Glassmorphism Aristocrático:** `backdrop-filter: blur(16px)` com fundo translúcido champagne e borda ouro acetinado de 1px.
- **Micro-interações:** feedback táctil ao toque (`:active { transform: scale(0.97); }`), sombras douradas volumétricas suaves e transições em curva de aceleração bezier suave (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

## 3. Arquitetura Mobile-First & Ergonomia Táctil

### 3.1. Princípios Móveis Adotados
1. **Thumb-Zone Navigation:**
   - Adicionada a **Barra de Ação Rápida Inferior (Mobile Bottom Bar)** fixa na base da tela para smartphones, permitindo ligação imediata ao Concierge, acesso direto ao WhatsApp VIP, agendamento de ritual em botão ouro proeminente e abertura do menu lateral.
   - Suporte completo às margens seguras de iPhone e Android (`env(safe-area-inset-bottom, 12px)`).
2. **Touch Targets de Alto Conforto:**
   - Todos os botões, campos de formulário e gatilhos possuem altura mínima de **48px**, atendendo às diretrizes do Apple Human Interface Guidelines e Material Design 3.
3. **Mobile Bottom Sheet para o Modal de Agendamento:**
   - No celular, o formulário de reserva VIP abre como uma folha inferior (*Bottom Sheet*) com barra deslizadora (*grab bar*), gesto de fechar por swipe e campos de formulário com tamanho de fonte `16px` para evitar o zoom indesejado no Safari iOS. Em telas a partir de 768px, o componente se transforma em um elegante diálogo centralizado.
4. **Filtros com Rolagem Horizontal Touch:**
   - As categorias dos rituais contam com rolagem horizontal contínua (*momentum scrolling*) e centralização automática no toque.
5. **Slider Antes / Depois Responsivo:**
   - O comparador de transformações aceita toque direto com o polegar, drag por mouse e controle deslizante acessível com indicador circular dourado de 48px e `touch-action: pan-y` para não interromper a rolagem natural da página.
6. **Máscaras e Validação Dinâmica de Telefone:**
   - Formatação automática em tempo real para números celulares `(11) 99999-9999` nos campos de contato e agendamento.
   - Restrição de data mínima para hoje (`min="YYYY-MM-DD"`), prevenindo agendamentos em datas passadas.
7. **Scroll Reveal Animations:**
   - Transições de revelação suave com Intersection Observer, respeitando as preferências de redução de movimento do sistema (`prefers-reduced-motion: reduce`).

---

## 4. Estrutura das Seções Implementadas

1. **Header Fixo / Glassmorphism:**
   - Logotipo institucional AURA Maison de Beauté.
   - Menu desktop completo e botão "Agendar Ritual VIP".
   - Gatilho hambúrguer mobile com gaveta lateral editorial completa.
2. **Hero Section:**
   - Headline: *"BELEZA QUE REVELA A SUA MELHOR VERSÃO"*.
   - Citação visagista: *"Cuidar da beleza também é cuidar de como você se sente."*.
   - Imagem de destaque com iluminação suave (`photo-1544005313-94ddf0286df2_Po4W.avif`).
   - Botões de ação para catálogo e atendimento com Concierge via WhatsApp.
   - Selo flutuante de reputação: **4.9 ★ Avaliação Jardins**.
3. **Seção Conceito & Métricas:**
   - Manifesto sobre consultoria visagista francesa e protocolos personalizados.
   - Grid com 4 métricas oficiais: *10+ Anos de História*, *8.000+ Clientes Atendidas*, *22 Especialistas*, *4.9★ Avaliação Jardins*.
   - Composição fotográfica com molduras sobrepostas.
4. **Experiências & Rituais Assinados:**
   - 6 Cards com tempos de atendimento, descrição e gatilho de pré-reserva com auto-preenchimento:
     - *Morena Iluminada Signature*
     - *Loiro Couture & Visagismo*
     - *Corte & Escova de Alta Precisão*
     - *Spa Fusio-Dose & Nails Luxury*
     - *Red Carpet Glow & Makeup*
     - *Bridal Suite VIP (Dia da Noiva)*
5. **Destaque Atelier Haute Coiffure (Módulo Dark Nobre):**
   - Apresentação dos pilares técnicos: Balayage Francesa, Mechas Acetinadas, Gloss Couture e Consulta de Coloração Pessoal.
6. **Transformações Assinadas (Slider Antes / Depois Interativo):**
   - Comparador deslizante entre o estado anterior e a finalização com mechas toffee melt e brilho espelhado.
7. **Bridal Suite VIP (Dia da Noiva):**
   - Apresentação da suíte privativa nos Jardins com amenidades exclusivas e atendimento para madrinhas.
8. **O Espaço & Arquitetura Contemporânea:**
   - Fotografia panorâmica do salão com 700m² e a jornada dos 5 passos do atendimento (Acolhimento, Avaliação, Personalização, Experiência, Finalização).
9. **Nossos Especialistas:**
   - Apresentação do corpo de mestres cabeleireiros, visagistas e maquiadores com formação internacional.
10. **Depoimentos & Reputação:**
    - Citações reais de noivas e clientes assíduas dos Jardins com avaliação 5 estrelas.
11. **Agendamento & Concierge Exclusivo:**
    - Formulário completo para solicitação de reserva, quadro de horários e destaque do serviço de manobrista (Valet VIP).
12. **Newsletter AURA Privilège:**
    - Inscrição minimalista para recebimento de privilégios e convites.
13. **Rodapé Oficial:**
    - Endereço completo: Alameda dos Jardins, 1420 - Jardins, São Paulo - SP.
    - Contatos oficiais, links de navegação, política de privacidade e copyright 2026.

---

## 5. Arquitetura de Contêiner & Docker (100% no Docker)

O projeto está configurado para execução isolada e de alta performance via Docker:
- **Imagem Base:** `nginx:alpine`
- **Configuração Customizada (`nginx.conf`):**
  - Mapeamento explícito de MIME type para imagens AVIF (`image/avif avif;`) e WebP.
  - Compressão Gzip ativada.
  - Cabeçalhos de cache estático (`Cache-Control: public, no-transform; expires 7d`).
  - Cabeçalhos de segurança HTTP (`X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`).
- **Porta Mapeada:** `http://localhost:3000` (evitando qualquer colisão de portas com outros projetos).
- **Docker Compose:** Serviço `aura-landing` configurado com recarregamento em tempo real via montagem de volumes.

---

## 6. Governança do Repositório Git & `.gitignore`

O arquivo `.gitignore` foi configurado para manter o repositório limpo, leve e seguro:
- **Dependências & Gerenciadores:** `node_modules/`, `.npm`, `.yarn/`, `package-lock.json`.
- **Logs & Depuração:** `*.log`, `npm-debug.log*`, `docker-compose.override.yml`.
- **Segredos & Variáveis de Ambiente:** `.env`, `.env.local`, `.env.*.local`.
- **Arquivos do Sistema:** `.DS_Store`, `Thumbs.db`, `desktop.ini`.
- **IDEs & Editores:** `.vscode/`, `.idea/`, `*.swp`.
- **Binários Pesados de Mockup:** `*.pdf` (preservando o repositório sem arquivos pesados de briefing).
