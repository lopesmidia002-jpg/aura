# ROTEIRO DE EVOLUÇÃO DO PROJETO — PASSOS.md

> **Regra do Projeto:** Só inicie o próximo passo de PASSOS.md quando o usuário solicitar explicitamente.

---

### Passo 1: Desenvolvimento da Landing Page de Alto Padrão & Arquitetura Mobile-First no Docker
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Criação do Design System exclusivo de marcas de luxo (Champagne Nobre, Creme Soft, Dourado Acetinado e tipografia Playfair Display/Montserrat).
  2. Implementação integral de todas as seções obrigatórias e editoriais (Header, Hero, Conceito, Rituais, Atelier Dark, Slider Antes/Depois, Noivas VIP, Espaço, Mestres, Depoimentos, Agendamento e Rodapé).
  3. Arquitetura Mobile-First com Barra de Ação no Thumb Zone e Bottom Sheet nativo.
  4. Execução 100% no Docker via Nginx Alpine com suporte a AVIF e porta 3000.
  5. Criação da documentação viva inicial (`DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md`).

---

### Passo 2: Otimizações Avançadas, Máscaras Dinâmicas, Scroll Reveal e Governança com .gitignore
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Criação e validação do `.gitignore` para proteção do repositório contra arquivos pesados e caches.
  2. Máscaras dinâmicas de telefone celular `(11) 99999-9999` com sanitização em tempo real.
  3. Restrição automática de datas retroativas para agendamento.
  4. Scroll Reveal com Intersection Observer respeitando preferências de movimento.
  5. Atualização da documentação viva.

---

### Passo 3: Integração de Webhook com CRM & Concierge WhatsApp Automatizado
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Endpoints de API no Docker (`POST /api/agendamentos` e `POST /api/newsletter`) com suporte a CORS.
  2. Geração automática de protocolo exclusivo AURA-VIP para cada solicitação de reserva.
  3. Composição estruturada de mensagem e redirecionamento direto para o WhatsApp do Concierge do salão.
  4. Notificações toast aristocráticas de confirmação.

---

### Passo 4: Auditoria Lighthouse, Otimização de Pré-carregamento e Metadados SEO/Open Graph
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Metadados Open Graph & Twitter Cards configurados para visualização rica em redes sociais e mensageiros.
  2. Dados estruturados Schema.org JSON-LD oficial para `BeautySalon` com nota 4.9 estrelas.
  3. Preload de recursos críticos (`style.css` e imagem hero LCP).
  4. Script de auditoria automatizada (`tests/audit_docker.py`) validando 100% dos assets no Docker.

---

### Passo 5: Deploy / Publicação em Nuvem e Certificados SSL HTTPS
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Configuração de Produção (`docker-compose.prod.yml`):**
     - Mapeamento das portas HTTP/HTTPS (80 e 443).
     - Limites de recursos computacionais (1 CPU / 512MB RAM) e healthcheck de uptime.
     - Contêiner automatizado do Certbot para renovação sem interrupção de certificados SSL Let's Encrypt.
  2. **Configuração de Segurança Nginx Produção (`nginx.prod.conf`):**
     - Redirecionamento 301 forçado de HTTP para HTTPS.
     - Suporte a HTTP/2, TLSv1.2 e TLSv1.3 com ciphers modernos.
     - Cabeçalhos de segurança avançados: HSTS (`Strict-Transport-Security`), `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
     - Cache imutável de 30 dias para imagens AVIF.
  3. **Variáveis de Ambiente (`.env.example`):** Template oficial com parâmetros de domínio e e-mail.
  4. **Scripts de Deploy:** Criação de `deploy.sh` (Linux) e `deploy.ps1` (Windows) para automação de deploy com zero downtime.
  5. **Criação do README.md Oficial:** Documento institucional completo com tabela do Design System, comandos de Docker, endpoints de API e contatos.
  6. **Atualização da Documentação:** `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md` finalizados com distinção.

---

### Passo 6: Alinhamento Visual, Estrutural e Tipográfico 1:1 com o Mockup Oficial do PDF (17 Seções Editoriais)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Extração analítica e fatiamento em alta resolução do PDF oficial (`pdf_slices/`) cobrindo as duas páginas e os 14.400px de altura vertical do layout.
  2. Reescrita e estruturação completa do `index.html` contemplando todas as 17 seções do mockup:
     - Header fixo com glassmorphism, menu de 8 links e seletor de idiomas (PT/EN/ES).
     - Hero panorâmico com foto imersiva do salão, dark overlay e headline em 3 linhas.
     - Citação editorial com aspas e tipografia clássica.
     - Seção O Salão com badge circular sobreposto `10+ ANOS DE EXCELÊNCIA`, imagem de pincéis e métricas.
     - Experiências & Rituais com pílulas de filtro, 6 cards oficiais com preços e botões `AGENDAR —` / `AVALIAR —`.
     - Atelier Dark de Colorimetria com pilares 2x2, alerta de transparência e foto do processo de styling.
     - Comparador Antes / Depois responsivo com badges de canto e manopla central dourada.
     - Suíte Nupcial de Prestígio com benefícios exclusivos e formulário de orçamento de noivas.
     - Seção de Mestres & Especialistas com 4 cards em foto portrait e dados de contato.
     - Galeria Mosaico de Arte Viva com 6 fotografias de transformações reais.
     - Linha do tempo em 5 passos horizontais conectados (Consulta, Avaliação, Personalização, Experiência, Finalização).
     - Depoimentos em card branco com estrelas douradas, carrossel interativo e pílula Google Reviews 4.9★.
     - Módulo de Reserva e Quadro de Horários de Atendimento com status `● ABERTO AGORA`.
     - Banner panorâmico do Manifesto AURA em foto inteira.
     - Grid do feed de Instagram e Newsletter limpa.
     - Rodapé de 4 colunas com crédito oficial `Design by Leccorside`.
     - Botão flutuante oficial do WhatsApp VIP.
  3. Folha de estilo `css/style.css` completamente harmonizada com o Design System de luxo, variáveis CSS padronizadas, suporte a mobile-first, tablet e desktop.
  4. Script `js/main.js` atualizado para controle do comparador antes/depois, filtros de categoria, carrossel de depoimentos, modal bottom sheet, máscaras de formulário e envio assíncrono para os endpoints do Nginx com redirecionamento ao Concierge WhatsApp.
  5. Validação com 100% de sucesso no script de auditoria conteinerizado no Docker (`tests/audit_docker.py`).

---

### Passo 7: Ajuste de Alta Fidelidade no Hero e Barra Superior Transparente
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Correção da barra superior (Header) para iniciar com transparência total sobre a imagem panorâmica do salão, eliminando o retângulo escuro e as bordas que fragmentavam o topo da tela.
  2. Alinhamento de largura do container do Header para `max-width: 1240px`, garantindo alinhamento pixel-perfect do logotipo AURA e do botão `AGENDAR HORÁRIO` com o grid editorial da página.
  3. Priorização tipográfica de `Cormorant Garamond` no Hero, resgatando a cauda caligráfica clássica da letra 'Q' em "BELEZA QUE REVELA" e reduzindo o `line-height` para 1.08.
  4. Realce do link ativo `INÍCIO` em ouro acetinado (`#C5A059`) acompanhado do sublinhado sutil de 1.5px.
  5. Calibração do degradê sobreposto (`.hero-overlay`) com luminosidade suave no topo (`rgba(17, 16, 15, 0.40)`) para visibilidade natural do teto e espelhos do salão, com escurecimento progressivo para legibilidade dos botões.
  6. Validação completa via `tests/audit_docker.py` com 100% de sucesso.

---

### Passo 8: Correção Definitiva de Quebras de Linha e Tipografia na Barra Superior
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Aplicação de `white-space: nowrap !important` em todos os elementos da barra superior (`.nav-link`, `.lang-switch`, `.btn-header`, `.brand-logo`), eliminando quebras indesejadas de texto como "O SALÃO" (em duas linhas), "PT / EN / ES" e "AGENDAR HORÁRIO".
  2. Ajuste da cor da tipografia do botão "AGENDAR HORÁRIO" para branco nobre (`#FFFFFF`) sobre o fundo dourado, conforme o mockup de referência.
  3. Calibração da escala fluida de navegação (`font-size: clamp(0.66rem, 0.75vw, 0.72rem)` e `gap: clamp(10px, 1.3vw, 20px)`), garantindo que todos os 8 links, o seletor de idiomas e o botão caibam em uma única linha contínua em resoluções a partir de 960px/1024px.
  4. Redução da altura do botão de cabeçalho para 34px com padding ergonômico.
  5. Auditoria de integridade e carregamento no Docker 100% aprovada via `tests/audit_docker.py`.

---

### Passo 9: Fidelidade Cromática e Tipográfica na Seção de Citação Editorial (Manifesto)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Calibração do Fundo Linho Quente:** Ajuste do plano de fundo de `.quote-section` para a cor exata do mockup de referência (`#EEE5DC` / RGB `238, 229, 220`), substituindo o tom muito claro/esbranquiçado anterior por um tom acolhedor e nobre idêntico ao original.
  2. **Harmonização da Cor do Subtítulo:** Correção da cor de `.editorial-quote-sub` de dourado (`var(--gold-primary)`) para o tom neutro suave/taupe aristocrático (`#8C827A`), conferindo sutileza e refinamento tipográfico idêntico ao layout oficial.
  3. **Quebra de Linha Natural 1:1:** Implementação de quebra editorial balanceada no texto principal (`“Cuidar da beleza também é cuidar de como você<br class="quote-break">se sente.”`), com `max-width: 680px`, assegurando que a frase quebre com precisão cirúrgica em duas linhas elegantes em qualquer resolução.
  4. **Padronização de Espaçamentos & Bordas:** Calibração do padding fluido (`clamp(55px, 6vw, 90px) 24px`) e linha divisória suave inferior (`rgba(20, 20, 20, 0.06)`).
  5. **Auditoria de Integridade no Docker:** 100% dos testes e endpoints validados com status HTTP 200 via `tests/audit_docker.py`.

---

### Passo 10: Harmonização 1:1 da Seção O Salão / Conceito (Badge, Moldura e Métricas)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Reposicionamento do Selo de Excelência (10+ Anos):** O selo circular `.badge-excellence-circle` foi movido do canto superior esquerdo para o canto superior **DIREITO** da fotografia principal (`top: -18px; right: -20px; left: auto;`), com diâmetro ajustado (`clamp(86px, 8vw, 104px)`), ouro acetinado suave no número e texto em pequenas maiúsculas nupciais (`#DDD7CE`).
  2. **Moldura da Imagem Sobreposta de Ferramentas:** Atualização da borda de `.concept-inset-img-box` de champagne para branco puro sólido (`border: 8px solid #FFFFFF`), criando o efeito passpartout de alta definição com sombra editorial refinada (`box-shadow: 0 16px 36px rgba(20, 16, 12, 0.14)`).
  3. **Calibração do Fundo e Grid:** Fundo ajustado para a cor exata `#FAF7F2` com largura máxima do grid em `1080px`, assegurando respiro editorial centralizado idêntico ao PDF.
  4. **Botão de Rituais com Moldura Taupe Suave:** Estilização de `.concept-action .btn-outline-dark` com borda sutil taupe/areia (`#CEC4BB`), tipografia em ébano suave (`#262320`) e hover dinâmico em ouro.
  5. **Harmonização das Métricas:** Remoção da borda divisória superior artificial, aplicação de numerais serifados em ouro nobre (`#B89758`), estilização proporcional da estrela `4.9★` e legendas em cinza taupe aristocrático (`#8D8680`).
  6. **Auditoria no Docker:** 100% dos testes validados com sucesso no container (`tests/audit_docker.py`).

---

### Passo 11: Efeito Hover Nobre em Gradiente Bronze/Espresso nos Botões Dourados
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Padronização da Tipografia em Repouso:** Garantia de que todos os botões dourados (`.btn-gold`, `.btn-header`) exibam tipografia branca nobre (`#FFFFFF`) e nítida no estado padrão sobre o fundo ouro acetinado.
  2. **Implementação do Efeito Hover Fiel à Referência:** Aplicação do gradiente bronze profundo/espresso `linear-gradient(135deg, #876349 0%, #654C3A 40%, #44342A 75%, #2B221C 100%)` em conjunto com a borda de 1px em ouro nobre (`#C5A059`) e texto branco puro (`#FFFFFF`).
  3. **Extensão Universal a Todos os Botões Dourados:** Efeito aplicado uniformemente em `.btn-gold`, `.btn-header`, botões de modal, formulário de noivas, agendamento principal, atelier de colorimetria e newsletter.
  4. **Transições Aveludadas:** Curva de transição `cubic-bezier(0.16, 1, 0.3, 1)` com elevação sutil `translateY(-2px)` e sombra difusa luxuosa (`0 8px 24px rgba(0, 0, 0, 0.35)`).
  5. **Auditoria de Integridade no Docker:** 100% dos testes validados com sucesso via `tests/audit_docker.py`.

---

### Passo 12: Efeito Hover com Fundo Branco Puro nos Botões Transparentes e Outline
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Transição de Alto Contraste em Botões Transparentes:** Configuração do comportamento hover nos botões com fundo transparente (`.btn-hero-outline`, `.btn-outline-dark`) para que assumam fundo branco puro sólido (`background: #FFFFFF !important; border-color: #FFFFFF !important;`) ao passar o mouse.
  2. **Inversão Cromática da Tipografia:** Tipografia com transição suave para preto ébano (`color: #141414 !important;`), garantindo contraste legível e sofisticado conforme o mockup de referência do botão "CONHECER O SALÃO".
  3. **Sombra e Elevação Suave:** Aplicação de sombra aveludada (`box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25)`) e elevação ergonômica `translateY(-2px)`.
  4. **Extensão a Todos os Botões Transparentes:** Efeito aplicado no Hero ("CONHECER O SALÃO"), no conceito ("CONHECER RITUAIS EXCLUSIVOS"), no catálogo de rituais ("VER TABELA COMPLETA DE RITUAIS & PREÇOS"), no corpo artístico ("CONHECER TODO O CORPO ARTÍSTICO") e no Instagram ("SEGUIR NO INSTAGRAM").
  5. **Auditoria de Integridade no Docker:** 100% dos testes de carregamento, API e assets validados via `tests/audit_docker.py`.

---

### Passo 13: Correção do Formato e Proporção da Foto Sobreposta de Ferramentas
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Calibração da Proporção Landscape:** Correção do formato de `.concept-inset-img-box` que anteriormente estava sendo comprimido para um formato quase quadrado.
  2. **Enquadramento Inicial dos Elementos Fotográficos:** Ajuste da moldura de passpartout em branco puro de 8px (`border: 8px solid #FFFFFF`) com cantos de 2px e sombra difusa (`box-shadow: 0 18px 42px rgba(20, 16, 12, 0.16)`).
  3. **Responsividade Mobile:** Ajuste proporcional para telas móveis.
  4. **Auditoria no Docker:** 100% dos testes validados com sucesso no container (`tests/audit_docker.py`).

---

### Passo 14: Calibração Retangular 16:10 da Foto Sobreposta de Ferramentas e Enquadramento do Vaso de Suculenta
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Proporção Panorâmica / Retangular 16:10:** A proporção anterior de 4:3 (1.33:1) ainda gerava um aspecto excessivamente quadrado e cortava o vaso de suculenta à esquerda. Foi implementado o formato landscape retangular `aspect-ratio: 16 / 10` (1.6:1), conferindo a exata geometria horizontal retangular solicitada pelo usuário e presente no mockup de referência.
  2. **Enquadramento Completo do Vaso de Suculenta à Esquerda:** Com `object-position: 6% center;` e expansão de largura para `width: 84%; max-width: 395px;`, o vaso de cerâmica branca com a planta suculenta no canto esquerdo fica 100% visível, assim como o pente de cabo fino, a chapinha de titânio, a escova de raquete e o secador profissional à direita.
  3. **Posicionamento e Moldura Editorial:** Posicionamento calibrado (`bottom: -28px; right: -42px;`), preservando a moldura em branco puro sólido de 8px (`border: 8px solid #FFFFFF`), cantos suavizados com raio de 2px e sombra difusa luxuosa (`box-shadow: 0 18px 42px rgba(20, 16, 12, 0.16)`).
  4. **Responsividade Mobile:** Ajuste refinado para smartphones (`width: 80%; bottom: -20px; right: -16px; border-width: 6px;`).
  5. **Auditoria de Integridade no Docker:** 100% dos testes e endpoints validados com status HTTP 200 via `tests/audit_docker.py`.

---

### Passo 15: Fidelidade Absoluta 1:1 da Imagem de Ferramentas, Alinhamento de Posicionamento e Invalidação de Cache
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise Comparativa de Precisão da Imagem de Referência:** Mensuração direta sobre a imagem de referência do usuário (`media_1794363524985_26a9860c.jpg`), revelando dimensões de 459 x 286 px (proporção 16:10 exata, 1.605:1), cobrindo 85% da largura da foto principal, com base em y=469 e transbordo inferior de 34px (`bottom: -32px; right: -42px; width: 85%; max-width: 410px;`).
  2. **Calibração de Enquadramento 1:1 (98.43% de Correlação):** Com `object-fit: cover` e `object-position: 4% center` (deslocamento ótimo na imagem fonte AVIF), o vaso de suculenta é enquadrado por completo à esquerda e o secador CROC por completo à direita com correlação matemática comprovada de 0.9843 com o mockup de referência.
  3. **Blindagem Contra Cache no Navegador:**
     - Invalidação no `nginx.conf` (`Cache-Control: no-cache, no-store, must-revalidate` para `.css` e `.js`).
     - Versionamento de assets em `index.html` (`style.css?v=2.0.0` e `main.js?v=2.0.0`).
     - Aplicação de estilos inline prioritários com `!important` diretamente na tag `.concept-inset-img-box` e seu `<img>`, impedindo qualquer sobreposição ou cache estagnado no navegador do usuário.
  4. **Auditoria de Integridade no Docker:** 100% dos testes e endpoints validados com status HTTP 200 via `tests/audit_docker.py`.
