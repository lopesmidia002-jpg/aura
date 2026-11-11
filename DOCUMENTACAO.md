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

## 4. SEO, Compartilhamento VIP & Performance

### 4.1. Metadados Open Graph & Twitter Cards
Configurados para visualização de alto padrão em redes sociais, WhatsApp e mensageiros:
- `og:site_name`: AURA Maison de Beauté
- `og:title`: AURA Maison de Beauté — Salão Feminino de Alto Padrão | Jardins, SP
- `og:description`: Haute coiffure, visagismo francês sob medida, rituais Fusio-Dose e Bridal Suite VIP no coração dos Jardins, São Paulo.
- `og:image`: `./imagens/photo-1544005313-94ddf0286df2_Po4W.avif`
- `twitter:card`: `summary_large_image`

### 4.2. Dados Estruturados Schema.org JSON-LD
Adicionado script semântico para SEO Local com autoridade Google:
- **Tipo:** `BeautySalon`
- **Nome:** AURA Maison de Beauté
- **Endereço Completo:** Alameda dos Jardins, 1420 - Jardins, São Paulo - SP
- **Geolocalização:** Latitude `-23.5673`, Longitude `-46.6669`
- **Avaliação Agregada:** 4.9 estrelas baseada em 384 avaliações verificadas.
- **Faixa de Preço:** `$$$$` (Alto Luxo)

### 4.3. Preloads de Recursos Críticos
- Pré-carregamento de folha de estilos (`css/style.css`) e da imagem LCP do Hero (`photo-1544005313-94ddf0286df2_Po4W.avif`), garantindo First Contentful Paint ultrarrápido.

---

## 5. Integração Concierge WhatsApp & CRM API

### 5.1. Fluxo Automatizado de Conversão VIP
1. **Geração de Protocolo Exclusivo:** Identificador único gerado para cada reserva (ex: `AURA-VIP-8492`).
2. **Registro Assíncrono no CRM (Docker API):** O formulário submete os dados via `POST /api/agendamentos` com resposta 200 OK.
3. **Composição da Mensagem Concierge no WhatsApp:**
   A mensagem enviada à cliente é estruturada com etiqueta nobre:
   ```text
   Olá, Concierge AURA Maison de Beauté! ✨

   Gostaria de solicitar uma reserva VIP:
   ✦ Protocolo: AURA-VIP-XXXX
   ✦ Nome: [Nome da Cliente]
   ✦ Ritual Desejado: [Ritual Selecionado]
   ✦ Data Preferencial: [DD/MM/AAAA]
   ✦ WhatsApp: (11) 9XXXX-XXXX
   ✦ Observações: [Detalhes opcionais]

   Aguardo as opções de horários privativos disponíveis nos Jardins. Muito obrigada!
   ```
4. **Redirecionamento Fluido:** Abre a conversa diretamente com o Concierge oficial do salão (`(11) 3088-9900`).
5. **Círculo AURA Privilège (Newsletter):** Conectado ao endpoint `POST /api/newsletter` com confirmação visual via toast.

---

## 6. Estrutura das Seções da Landing Page

1. **Header Fixo / Glassmorphism:** Monograma AURA, menu desktop e drawer mobile deslizante.
2. **Hero Section:** Headline de impacto, citação visagista, CTA duplo e selo de excelência *4.9★ Jardins*.
3. **Conceito & Métricas:** Manifesto editorial, composição fotográfica sobreposta e métricas oficiais (*10+ Anos, 8.000+ Clientes, 22 Especialistas, 4.9★*).
4. **Experiências & Rituais:** Grid com os 6 rituais assinados (*Morena Iluminada Signature*, *Loiro Couture*, *Corte de Alta Precisão*, *Spa Fusio-Dose*, *Red Carpet Glow*, *Bridal Suite VIP*).
5. **Atelier Haute Coiffure:** Módulo escuro com os pilares de Balayage Francesa, Mechas Acetinadas, Gloss Couture e Análise de Cor.
6. **Transformações Assinadas (Slider Antes / Depois Interativo):** Controle responsivo com arrasto direto por toque no celular ou mouse no desktop.
7. **Bridal Suite VIP:** Detalhes da experiência privativa para noivas e madrinhas nos Jardins.
8. **O Espaço & Arquitetura:** Galeria contemporânea com a jornada dos 5 passos do atendimento.
9. **Especialistas:** Apresentação do time de mestres com formação internacional.
10. **Depoimentos:** Avaliações de clientes VIP e noivas.
11. **Agendamento & Concierge:** Formulário VIP com horários de atendimento e destaque para o serviço de manobrista (*Valet VIP*).
12. **Newsletter AURA Privilège:** Inscrição minimalista com toast de confirmação.
13. **Rodapé Oficial:** Endereço na Alameda dos Jardins 1420, contatos, horários e copyright 2026.

---

## 7. Arquitetura de Contêiner & Produção (100% no Docker)

### 7.1. Ambiente de Desenvolvimento
- **Arquivo:** `docker-compose.yml` (Porta `3000:80`).
- **Servidor:** `nginx:alpine` com hot-reload de volumes estáticos.

### 7.2. Ambiente de Produção & SSL Automático (Passo 5)
- **Arquivo:** `docker-compose.prod.yml` (Portas `80:80` e `443:443`).
- **Configuração Nginx Produção (`nginx.prod.conf`):**
  - Redirecionamento 301 forçado de HTTP para HTTPS.
  - Suporte a HTTP/2 e TLSv1.2 / TLSv1.3 com ciphers modernos.
  - HSTS ativado (`max-age=63072000; includeSubDomains; preload`).
  - Cache imutável de 30 dias para imagens AVIF.
  - Limites de recursos definidos (1 CPU / 512MB RAM).
  - Healthcheck integrado para monitoramento contínuo de uptime.
- **Serviço Certbot:** Renovação automática de certificados Let's Encrypt a cada 12 horas.
- **Scripts de Deploy:** `deploy.sh` (Linux/VPS) e `deploy.ps1` (Windows).

---

## 8. Governança do Repositório Git & `.gitignore`

O arquivo `.gitignore` foi configurado para manter o repositório limpo, leve e seguro:
- **Dependências & Gerenciadores:** `node_modules/`, `.npm`, `.yarn/`, `package-lock.json`.
- **Logs & Depuração:** `*.log`, `npm-debug.log*`, `docker-compose.override.yml`.
- **Segredos & Variáveis de Ambiente:** `.env`, `.env.local`, `.env.*.local`.
- **Arquivos do Sistema:** `.DS_Store`, `Thumbs.db`, `desktop.ini`.
- **IDEs & Editores:** `.vscode/`, `.idea/`, `*.swp`.
- **Binários Pesados de Mockup:** `*.pdf` (preservando o repositório sem arquivos pesados de briefing).
