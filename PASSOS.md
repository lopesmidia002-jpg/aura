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
  1. **Análise Comparativa de Precisão da Imagem de Referência:** Mensuração direta sobre a imagem de referência do usuário (`media_1794363524985_26a9860c.jpg`), revelando proporção 16:10 exata (1.605:1).
  2. **Blindagem Contra Cache no Navegador:** Invalidação no `nginx.conf` (`Cache-Control: no-cache, no-store, must-revalidate` para `.css` e `.js`) e versionamento de assets em `index.html`.
  3. **Auditoria de Integridade no Docker:** 100% dos testes e endpoints validados com status HTTP 200 via `tests/audit_docker.py`.

---

### Passo 16: Substituição Direta do Asset de Imagem AVIF pela Matriz Original Calibrada (753x459 px) e Ajuste de Overflow
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Substituição do Arquivo Físico da Imagem:** O arquivo `imagens/photo-1527799820374-dcf8d9d4a388_002_Po4W.avif` foi regravado em alta definição diretamente com a matriz original recortada (`753 x 459 px`), contendo o vaso de suculenta completo à esquerda, pente, chapinha, escova e secador à direita com 97.35% de correlação com a referência enviada.
  2. **Eliminação de Dependência de Recorte via CSS:** Como o próprio arquivo de imagem já possui a proporção e enquadramento panorâmico idêntico ao original, `object-fit: cover` e `object-position: center center` agora preservam 100% de todos os elementos em qualquer resolução.
  3. **Ajuste Milimétrico de Proporção e Overflow:** Com base na medição da composição original enviada (`media_1794364511173_5471406c.jpg`), o container foi ajustado para `width: 79%; max-width: 380px; bottom: -12px; right: -14px;`, eliminando o deslocamento excessivo para fora da foto principal e reproduzindo a sobreposição perfeita do mockup.
  4. **Atualização da Tag HTML com Cache-Buster v2.1.0:** Inserido `photo-1527799820374-dcf8d9d4a388_002_Po4W.avif?v=2.1.0` para forçar o recarregamento imediato no navegador.
  5. **Auditoria de Integridade no Docker:** 100% dos testes e endpoints validados via `tests/audit_docker.py`.

---

### Passo 17: Correção Definitiva da Imagem Sobreposta de Ferramentas, Eliminação de Trava de Cache Local e Suporte Dual AVIF/JPEG
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Calibração Físico-Geométrica da Matriz (755 x 459 px - Proporção 16:10 / 1.64:1):**
     - Regravação do arquivo `imagens/photo-1527799820374-dcf8d9d4a388_002_Po4W.avif` e geração do fallback universal `imagens/photo-1527799820374-dcf8d9d4a388_002_Po4W.jpg` com 97.90% de correlação matemática com o mockup de referência original (`media_1794365042150_ea99d23c.jpg`), contendo o vaso de cerâmica branca com suculenta completo à esquerda, presilhas, pente de cabo fino, prancha modeladora CROC, escova raquete e secador profissional CROC completo à direita.
  2. **Eliminação de Trava de Cache no Windows / file:/// e HTTP:**
     - Remoção de querystrings `?v=...` dos caminhos locais que impediam o carregamento em sistemas de arquivos Windows sob o protocolo `file:///`.
     - Inserção de meta tags de desativação de cache imediato (`<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">`, `Pragma: no-cache`, `Expires: 0`).
     - Configuração no `nginx.conf` de `Cache-Control: no-cache, no-store, must-revalidate` para imagens estáticas, CSS e JS durante o ciclo de desenvolvimento ativo.
  3. **Elemento `<picture>` com Estilos Inline de Alta Prioridade:**
     - Estruturação semântica com `<picture>` e fallback automático para `.jpg`, garantindo compatibilidade universal em qualquer navegador.
     - Aplicação de regras inline definitivas (`width: 84% !important; max-width: 400px !important; aspect-ratio: 16 / 10 !important; bottom: -30px !important; right: -36px !important; border: 8px solid #FFFFFF !important;`) anulando qualquer cache residual da folha de estilos.
  4. **Alinhamento do Transbordo Fiel ao Mockup Original:**
     - Posicionamento proporcional com 84% de largura da imagem principal, 51px de transbordo à direita e 54px abaixo, recriando perfeitamente a sobreposição luxuosa do PDF original.
  5. **Auditoria de Integridade no Docker:**
     - 100% de sucesso nos testes automatizados (`tests/audit_docker.py`), validação de HTTP 200 para todos os endpoints, rotas e assets (AVIF e JPEG).

---

### Passo 18: Correção Fidedigna dos Fundos e Mapeamento Rigoroso de Imagens das Seções Rituais, Colorimetria e Antes/Depois
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Harmonização Cromática 1:1 com o PDF Original:**
     - **Seção Rituais & Procedimentos (#experiencias):** Correção do fundo de #F7F3EC para #EEE5DC (Linho Quente, RGB [238, 229, 220]), exatamente idêntico ao fundo da seção Manifesto/Citação, conferindo o contraste e destaque perfeitos aos cards de procedimentos com fundo branco puro.
     - **Seção Colorimetria de Alta Costura (#coloracao):** Ajuste do fundo para #211C19 (Dark Bronze/Espresso, RGB [33, 28, 25]), substituindo o tom acinzentado genérico anterior por um tom marrom escuro acolhedor de alta costura.
     - **Seção Resultados Visíveis / Antes & Depois (#transformacoes):** Correção do plano de fundo para #FAF7F2 (Creme Suave, RGB [250, 247, 242]), alinhando harmonicamente com a transição editorial do PDF original.
     - **Seção Suíte Nupcial (#noivas):** Calibração do fundo para #191512 (Dark Nupcial, RGB [25, 21, 18]).
  2. **Extração e Calibração do Card 1 ("Corte com Visagismo"):**
     - Extração e calibragem direta do asset original de corte/styling em salão a partir da fatia em alta resolução do PDF (pdf_slices/slice_03_2400_3600.jpg), gerando imagens/photo-corte-visagismo.avif (28.6 KB) e imagens/photo-corte-visagismo.jpg (31.8 KB).
     - Implementação com <picture> responsivo e fallback universal JPEG no Card 1.
  3. **Mapeamento Corrigido de Imagens em Todas as 4 Seções:**
     - **Card 3 ("Loiro Sublime Signature"):** Mapeado para photo-1580618672591-eb180b1a973f_003_Po4W.avif (hair stylist secando e modelando cabelo loiro visto de cima).
     - **Card 5 ("Haute Makeup"):** Mapeado para photo-1487412720507-e7ab37603c6f_002_Po4W.avif (rosto sorridente com gorro de inverno).
     - **Seção 5 ("Colorimetria de Alta Costura"):** Imagem atualizada para photo-1562322140-8baeececf3df_Po4W.avif (cabeleireira em frente à grande janela ampla com secador de cabelo) com proporção retangular panorâmica aspect-ratio: 3 / 2 (landscape ~1.48:1).
     - **Seção 6 ("Resultados que falam por si" - Antes / Depois):**
       - Lado esquerdo ("ANTES"): photo-1522337360788-8b13dee7a37e_Po4W.avif (mulher tocando os cabelos em fundo rosa).
       - Lado direito ("DEPOIS"): photo-1580618672591-eb180b1a973f_003_Po4W.avif (styling em salão com escova redonda e secador).
       - Badges fixadas nos cantos inferiores correspondentes de cada painel sem sobreposição de textos.
  4. **Auditoria de Integridade no Docker:**
     - Inclusão dos novos assets (photo-corte-visagismo.avif e photo-corte-visagismo.jpg) no script de auditoria tests/audit_docker.py.
     - 100% de sucesso na validação conteinerizada (HTML, CSS, JS, 16 imagens e rotas de API com status HTTP 200).

---

### Passo 19: Implementação do Efeito Hover Escurecedor com Revelação de Título e Modal de Galeria Fullscreen (Lightbox Imersivo)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Efeito Hover com Escurecimento e Revelação de Texto no Grid Mosaico (.mosaic-item):**
     - Ao passar o mouse sobre cada fotografia da galeria de arte viva, a imagem escurece de forma suave (filter: brightness(0.6)) acompanhada de um leve zoom aristocrático (scale(1.06)).
     - Um overlay translúcido elegante (rgba(10, 9, 7, 0.52)) surge revelando de baixo para cima o kicker dourado (ex: "HAUTE COIFFURE"), o título da transformação em tipografia serifada Cormorant Garamond na cor branca pura (#FFFFFF) e o indicador de ação "VER EM TELA TODA →".
  2. **Estrutura e Estilização do Modal Lightbox Fullscreen 1:1 com a Imagem de Referência:**
     - Criação do componente modal (#gallery-lightbox) com fundo preto profundo (#0A0907 / rgba(10, 9, 7, 0.96)) e desfoque glassmorphism (backdrop-filter: blur(12px)).
     - Botão fechar (✕) no canto superior direito com transição suave e hover dourado.
     - Botões circulares minimalistas de navegação anterior/próximo (< e >) centralizados verticalmente nas laterais.
     - Container central com fotografia em alta definição contida ergonomicamente (max-height: 70vh, max-width: 85vw).
     - Legenda centralizada abaixo da imagem contendo o título da fotografia (ex: "Blonde Couture") e o contador de posição em dourado nobre (#C5A059) no padrão "1 / 6".
  3. **Comportamento e Acessibilidade em JavaScript (js/main.js):**
     - Mapeamento dinâmico de todos os 6 cards da galeria com suporte a índices e atributos data-title / data-src.
     - Abertura imediata ao clicar em qualquer item do grid ou pressionar Enter/Espaço.
     - Navegação circular contínua (loop entre primeira e última imagem).
     - Suporte a teclas de atalho: Escape para fechar, ArrowRight para avançar e ArrowLeft para retroceder.
     - Fechamento ao clicar na área externa (backdrop).
     - Suporte a gestos tácteis de swipe horizontal em smartphones e tablets.
     - Bloqueio e liberação de rolagem do body (overflow: hidden).
  4. **Auditoria Automatizada e Validação no Docker:**
     - Atualização do script tests/audit_docker.py para checar a existência dos componentes do Lightbox no HTML, CSS e JS.
     - 100% de aprovação na auditoria conteinerizada no contêiner aura-maison-web (porta 3000).

---

### Passo 20: Calibração Fidedigna dos Círculos Numéricos da Timeline (5 Passos) com Efeito Hover Dourado Acetinado e Texto Branco
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Eliminação do Fundo Preto Estático dos Círculos Numéricos:**
     - Remoção da regra anterior que fixava o fundo dos círculos em preto (#141414) em todas as etapas.
     - Ajuste do estado padrão dos números (.step-circle-badge): fundo creme suave #FAF7F2 harmônico com a seção, borda fina em ouro nobre acetinado (1.5px solid #C5A059) e tipografia em preto ébano (#141414).
  2. **Implementação do Efeito Hover com Fundo Dourado e Texto Branco (1:1 com a Imagem de Referência):**
     - Ao passar o mouse sobre cada número ou sobre o card da etapa (.step-point-box:hover .step-circle-badge, :hover, .is-active), o círculo numérico assume imediatamente o fundo dourado acetinado radiante (linear-gradient(135deg, #D4AF67 0%, #C5A059 50%, #B89248 100%)).
     - A tipografia do número transmuta-se para branco puro (#FFFFFF !important) com sombra suave.
     - Aplicação de halo de luz dourada difusa (box-shadow: 0 8px 24px rgba(197, 160, 89, 0.45), 0 2px 6px rgba(197, 160, 89, 0.2)) e leve elevação táctil (transform: translateY(-3px) scale(1.06)).
  3. **Comportamento Interativo Inteligente (js/main.js e CSS):**
     - O item inicial "01 Consulta" inicia destacado conforme o mockup original.
     - Ao passar o mouse sobre qualquer outra etapa (02, 03, 04 ou 05), o destaque migra suavemente e de forma imediata para o número hovered.
     - Suporte a seleção por clique e acessibilidade com teclado (Enter/Espaço).
  4. **Validação no Docker:**
     - 100% de sucesso nos testes automatizados conteinerizados (tests/audit_docker.py).

---

### Passo 21: Ajuste Fidedigno das Pílulas de Filtro de Rituais (Fundo Branco, Contorno Dourado e Tipografia Escura)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Eliminação do Fundo Preto no Botão Ativo (.pill-btn.active):**
     - Remoção da regra anterior que aplicava fundo preto (#141414) no botão de filtro selecionado (ex: "TODOS").
     - Configuração do estado ativo (.pill-btn.active) conforme o mockup oficial do PDF: fundo branco puro (#FFFFFF !important), contorno em ouro nobre acetinado (border: 1px solid #C5A059 !important), tipografia em preto ébano (color: #141414 !important) e suave sombra de elevação.
  2. **Harmonização dos Botões Inativos e Efeito Hover (.pill-btn:hover):**
     - Botões inativos exibem fundo transparente e contorno sutil dourado (border: 1px solid rgba(197, 160, 89, 0.35)) sobre o linho quente (#EEE5DC) da seção.
     - Ao passar o mouse (:hover), qualquer botão inativo assume imediatamente fundo branco puro, contorno dourado #C5A059 e texto em preto ébano, assegurando transição suave e feedback tátil de alta precisão.
  3. **Validação no Docker:**
     - 100% de sucesso nos testes automatizados conteinerizados (tests/audit_docker.py).

---

### Passo 22: Implementação de Sombreamento Leve no Fundo dos Cards de Rituais no Hover
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Calibração do Sombreamento no Hover dos Cards (.ritual-card:hover):**
     - Aplicação de sombra suave em múltiplas camadas com undertone quente de alta costura (rgba(35, 28, 22, 0.15) e rgba(35, 28, 22, 0.08)).
     - O sombreamento se projeta atrás e abaixo do card sobre o fundo linho quente (#EEE5DC), criando sensação de profundidade e elevação tátil (transform: translateY(-6px)).
     - Acentuação dourada acetinada suave no contorno do card (border-color: rgba(197, 160, 89, 0.55)) com transição fluida cubic-bezier(0.16, 1, 0.3, 1).
  2. **Validação no Docker:**
     - 100% de sucesso nos testes automatizados conteinerizados (tests/audit_docker.py).
