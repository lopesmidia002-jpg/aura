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


---

### Passo 23: Calibração Fidedigna da Imagem Sobreposta de Ferramentas (16:10 Panorâmica) com Enquadramento Integral e Eliminação Definitiva de Cache
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Regeneração da Imagem em Ultra Alta Definição (1120 x 684 px - Proporção 16:10 / 1.637:1):**
     - Criação de novos arquivos dedicados de alta definição: `imagens/photo-ferramentas-conceito-16-10.avif` e `imagens/photo-ferramentas-conceito-16-10.jpg`, além da atualização de `photo-1527799820374-dcf8d9d4a388_002_Po4W.avif` e `.jpg`.
     - Enquadramento milimétrico 1:1 com a referência do usuário (`media_1794390063520_997af484.jpg`): vaso de cerâmica branca com planta suculenta completo à esquerda, presilhas jacaré, pente de cabo fino, prancha modeladora CROC, escova raquete CROC e secador profissional CROC completo à direita.
  2. **Blindagem Contra Cache no Navegador (Cache-Busting com Nomes Dedicados e Querystrings):**
     - Implementação de novos nomes de arquivo específicos para a seção Conceito, eliminando qualquer compartilhamento com a galeria do Instagram e prevenindo cache estagnado da proporção 1:1.
     - Aplicação de querystring de versão (`?v=3.5.0`) nas fontes do elemento `<picture>` e na folha de estilos `style.css`.
  3. **Estilização e Geometria da Moldura e Proporção:**
     - Aplicação de `aspect-ratio: 16 / 10 !important;` tanto no container `.concept-inset-img-box` quanto nas tags `<picture>` e `<img>`, com `width: 84%; max-width: 400px; bottom: -30px; right: -36px; border: 8px solid #FFFFFF; box-shadow: 0 18px 42px rgba(20, 16, 12, 0.16);`.
     - Preservação da proporção panorâmica retangular 16:10 em qualquer viewport (desktop, tablet e mobile).
  4. **Auditoria Automatizada e Validação no Docker:**
     - Atualização do script `tests/audit_docker.py` para validar a disponibilidade de todas as 19 imagens no Nginx.
     - 100% de sucesso nos testes automatizados conteinerizados no contêiner `aura-maison-web` (porta 3000).


---

### Passo 24: Calibração Quadrada 1:1 e Reposicionamento Fidedigno da Imagem Sobreposta de Ferramentas (60% de Largura e Protrusão Proporcional)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Geometria Quadrada 1:1 Rigorosa (316 x 316 px no PDF original):**
     - Identificação e mensuração direta da composição no PDF original oficial (`pdf_composition_tight.jpg`), confirmando dimensões do card de 316 x 316 px (proporção matemática exata de 1.000:1 / quadrado perfeito).
     - Geração dos novos assets dedicados em alta definição: `imagens/photo-ferramentas-conceito-square.avif` e `imagens/photo-ferramentas-conceito-square.jpg` (676 x 676 px) com erro residual mínimo de 6.6 MSE em relação ao PDF original.
  2. **Correção do Posicionamento e Proporção do Card Sobreposto:**
     - Ajuste de largura de 84% para 60% (`width: 60% !important; max-width: 280px !important;`), correspondendo fielmente à proporção do PDF (316px de card para 531px de foto principal = 59.5%).
     - Ajuste do transbordo inferior: de `bottom: -30px` para `bottom: -18px !important;`, eliminando o deslocamento excessivo para baixo e mantendo o card alinhado ao rodapé da imagem principal.
     - Ajuste da protrusão lateral direita para `right: -42px !important;` (cerca de 20% da largura da imagem principal), recriando a sobreposição de alta costura original.
  3. **Blindagem Contra Cache com Nova Versão v=4.0.0:**
     - Atualização das tags de preload, folha de estilos (`style.css?v=4.0.0`) e fontes da imagem com querystrings v=4.0.0 no `index.html`.
  4. **Auditoria de Integridade no Docker:**
     - Atualização do script `tests/audit_docker.py` para validar todas as 21 imagens e endpoints REST com status HTTP 200.


---

### Passo 25: Remoção do Menu Sanduíche da Barra Superior no Modo Mobile e Alinhamento do Botão de Agendamento
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Remoção do Menu Sanduíche (`.btn-mobile-toggle`) no Modo Mobile:**
     - Remoção da tag `<button class="btn-mobile-toggle" ...>` da barra superior em `index.html`.
     - Aplicação da regra `display: none !important;` na classe `.btn-mobile-toggle` em `css/style.css`, garantindo que o ícone de hambúrguer não seja renderizado em nenhum breakpoint.
  2. **Harmonização do Header Mobile e Botão de Agendamento:**
     - O botão de ação `.btn-header` ("AGENDAR HORÁRIO") agora permanece acessível e harmonioso em todos os tamanhos de tela (`display: inline-flex`), com dimensionamento compacto adaptativo (`padding: 0 12px; font-size: 0.62rem; height: 30px`) em smartphones estreitos (<= 480px).
     - Alinhamento limpo da barra superior no mobile: Marca AURA à esquerda e Botão de Agendamento Dourado à direita, reproduzindo o design minimalista de alta costura.
  3. **Blindagem Contra Cache v=4.1.0:**
     - Atualização do versionamento de cache para `v=4.1.0` em `index.html` e `style.css`.
  4. **Auditoria de Integridade no Docker:**
     - Validação conteinerizada com 100% de sucesso via `tests/audit_docker.py` (HTML, CSS, JS, 21 imagens e rotas da API).


---

### Passo 26: Auditoria Completa de Responsividade e Alinhamento no Modo Mobile em Múltiplos Viewports
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Automatizada Multi-Viewport com Chrome CDP (320px, 360px, 375px, 390px, 414px, 480px e 768px):**
     - Criação da suíte de testes de emulação mobile real (`tests/cdp_mobile_auditor.py` e `tests/mobile_comprehensive_audit.py`).
     - Constatação e resolução de 100% dos transbordos laterais (`scrollWidth == innerWidth`), garantindo zero overflow horizontal em qualquer tela.
  2. **Eliminação de Estilos Inline e Correção do Card de Ferramentas (`.concept-inset-img-box`):**
     - Remoção dos estilos inline rígidos (`right: -42px !important;`) em `index.html` que impediam a aplicação das media queries mobile.
     - Implementação de regras fluidas em `css/style.css`: desktop preserva a proporção 1:1 rigorosa com 60% de largura (`bottom: -18px; right: -42px; width: 60%; max-width: 280px;`); tablet utiliza `right: -12px; width: 55%; max-width: 240px;`; mobile (<= 576px) utiliza `right: -8px; width: 54%; max-width: 200px; border-width: 6px;`; mobile estreito (<= 380px) utiliza `right: -4px; width: 52%; max-width: 175px; border-width: 5px;`.
  3. **Ajuste Fino do Selo Circular de Excelência (`.badge-excellence-circle`):**
     - Ajuste para `top: -12px; right: -6px; width: 76px; height: 76px;` em viewports <= 576px, mantendo o selo contido na margem de respiro lateral da viewport.
  4. **Harmonização do Header e Botão de Agendamento em Smartphones Estreitos:**
     - Ajuste responsivo para telas <= 480px e <= 360px: padding lateral do container reduzido para 12px/16px, tipografia da marca proporcional (`1.15rem` / `1.25rem`) e botão `.btn-header` compacto com padding adaptativo (8px/12px) e altura de 30px, prevenindo qualquer corte ou aproximação da borda da tela.
  5. **Otimização Tipográfica e de Botões no Hero (`#hero`):**
     - Aplicação de `font-size: clamp(1.85rem, 8vw, 2.35rem)` e `line-height: 1.12` no título principal serifado, evitando quebras truncadas em telas estreitas.
     - Tag superior com `letter-spacing: 0.16em` e botões de ação ocupando 100% da largura útil (`max-width: 320px`), centralizados e com áreas de toque acessíveis.
  6. **Calibração do Comparador Antes/Depois (`#transformacoes`) e Manifesto:**
     - Ajuste da escala da imagem clipada (`width: calc(100vw - 40px)` / `calc(100vw - 32px)`) e altura do viewport (`height: 300px` e `250px` em telas <= 380px) para proporção estética impecável.
     - Título do banner do manifesto redimensionado para `clamp(1.65rem, 6.8vw, 2.2rem)`.
  7. **Restauração das Variáveis de Dourado Nobre (`--color-gold`):**
     - Definição explícita de `--color-gold: #C5A059;` e `--color-gold-light: #E5CA8F;` no `:root` de `css/style.css`, restaurando os anéis dourados nítidos na Timeline de 5 passos e elementos da galeria.
  8. **Blindagem Contra Cache v=4.2.0 e Validação no Docker:**
     - Versionamento `v=4.2.0` aplicado em `index.html` e `style.css`.
     - Testes automatizados executados e 100% aprovados no Docker (`aura-maison-web` na porta 3000) via `tests/audit_docker.py`.


---

### Passo 27: Centralização Responsiva do Botão "Falar com Concierge de Noivas" no Modo Mobile
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Estruturação de Wrapper Semântico (`.bridal-action-wrap`):**
     - Criação do container responsivo `.bridal-action-wrap` envolvendo o botão de ação na coluna editorial da seção Noivas (`#noivas`) em `index.html`.
     - Atribuição da classe dedicada `.bridal-cta-btn` ao elemento `<a>`.
  2. **Centralização Matemática e Estilização Fluida no Mobile:**
     - No desktop (> 991px), o botão preserva o alinhamento clássico à esquerda junto ao texto editorial da seção.
     - No tablet e mobile (<= 991px), quando o grid se transforma em 1 coluna única, o container ativa `display: flex; justify-content: center; width: 100%; text-align: center;` e o botão aplica `margin: 0 auto;`.
     - Em smartphones (<= 480px e <= 360px), o botão assume largura fluida com `max-width: 340px`, paddings laterais adaptativos (12px a 16px) e tipografia refinada, mantendo centralização matemática absoluta (`centerOffset: 0`) com respiro simétrico perfeito em relação às bordas da tela.
  3. **Blindagem Contra Cache v=4.3.0 e Validação no Docker:**
     - Atualização do versionamento de cache para `v=4.3.0` em `index.html` e `style.css`.
     - Verificação visual e métrica automatizada via Chrome CDP (`tests/screenshots/mobile_bridal_button_centered.png`).
     - 100% de sucesso nos testes automatizados no Docker (`aura-maison-web` na porta 3000) via `tests/audit_docker.py`.

---

### Passo 28: Calibração Cromática de Textos e Números dos Cards de Rituais Conforme Original (PDF)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Extração e Amostragem Fiel das Cores do PDF Original:**
     - Amostragem pixel-a-pixel no PDF oficial de alta resolução de ambas as fileiras de cards da seção de Rituais (`#experiencias`).
     - Destaques numéricos e de valor (`.price-val strong`): "R$ 280", "VIP", "VIP", "R$ 360", "R$ 380", "Medida" utilizam tom nobre bronze aveludado / avelã quente `#8D684D` (`rgb(141, 104, 77)`), com `font-weight: 600`, eliminando o preto ébano genérico (`#141414`).
     - Rótulos de prefixo (`.price-val`): "A partir de", "Sob avaliação", "Pacotes sob" utilizam tom taupe refinado `#8C827A` (`rgb(140, 130, 122)`), `font-size: 0.82rem`.
     - Links com traço de ação (`.action-dash`): "AGENDAR —", "AVALIAR —", "CONHECER —" mantidos em dourado acetinado nobre `#C5A059` (`rgb(197, 160, 89)`).
  2. **Refinamento do CSS (`css/style.css`):**
     - Atualização das classes `.price-val` e `.price-val strong` para aplicação estrita de `#8C827A` e `#8D684D`.
  3. **Blindagem Contra Cache v=4.4.0 e Validação no Docker:**
     - Bump de versão de cache para `v=4.4.0` nos preloads e links de folha de estilo em `index.html`.
     - Recarga imediata do serviço Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção do DOM e estilos computados via Chrome CDP confirmando 100% de correspondência cromática (`rgb(141, 104, 77)`, `rgb(140, 130, 122)`, `rgb(197, 160, 89)`).
     - Execução da suíte completa `tests/audit_docker.py` com 100% de aprovação.

---

### Passo 29: Restauração da Marca d'Água Tipográfica de Fundo "HAIR" na Seção Colorimetria Conforme Design Original
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Extração e Identificação da Palavra no Mockup/PDF Oficial:**
     - Análise do export nativo de alta resolução do Figma (1920x14400) e da imagem de referência enviada pelo usuário.
     - Identificação da palavra editorial em caixa alta **"HAIR"** projetada em escala monumental no plano de fundo da seção `#coloracao` (Colorimetria de Alta Costura).
     - No design original, o "H" posiciona-se no vão entre as duas colunas de técnicas ("Balayage Francesa" e "Morena Iluminada"), o "A" situa-se sob a coluna de "Morena Iluminada" e os caracteres "I" e "R" estendem-se sob a fotografia panorâmica da hairstylist, emergindo com a perna direita do "R" na extremidade lateral.
  2. **Implementação da Camada Tipográfica (`.color-watermark`):**
     - Inclusão do elemento semântico `<div class="color-watermark" aria-hidden="true">HAIR</div>` dentro de `.color-atelier-grid` em `index.html`.
     - Estilização com `position: absolute; left: 21%; top: 51%; transform: translateY(-50%); font-family: var(--font-serif); font-size: clamp(6.5rem, 13.5vw, 13rem); letter-spacing: 0.22em;` em `css/style.css`.
     - Calibração de cor exata para ouro suave acetinado com 9% de opacidade (`rgba(197, 160, 89, 0.09)`), gerando o tom exato `RGB [50, 41, 33]` sobre o fundo espresso `#211C19`.
     - Camadas de conteúdo (`.color-atelier-content`) e de mídia (`.color-atelier-media`) configuradas com `position: relative; z-index: 2;` e `.color-watermark` com `z-index: 1; pointer-events: none; user-select: none;`, garantindo legibilidade perfeita, sobreposição natural da foto e ausência de bloqueios em cliques.
     - Adaptação fluida para mobile/tablet (`<= 991px`): centralização horizontal perfeita (`left: 50%; top: 36%; transform: translate(-50%, -50%); font-size: clamp(4.5rem, 20vw, 7.5rem); letter-spacing: 0.16em;`) e contenção estrita via `overflow: hidden;` em `#coloracao`.
  3. **Blindagem Contra Cache v=4.5.0 e Validação no Docker:**
     - Versionamento `v=4.5.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção via Chrome CDP e auditoria mobile multi-viewport confirmando alinhamento estético 1:1 e zero overflow.
     - Suíte `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 30: Correção Cromática da Tipografia dos Badges "ANTES" e "DEPOIS" (Branco Puro 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Identificação e Amostragem no PDF Oficial:**
     - Amostragem pixel-a-pixel nos badges de cantos do slider de transformações (`#transformacoes`).
     - Constatação de que os textos "ANTES" e "DEPOIS" são renderizados em branco puro `RGB [248, 245, 240]` (`#FFFFFF`), em contraste com a regra anterior que aplicava dourado `var(--gold-primary)` (`#C5A059`).
  2. **Ajuste no CSS (`css/style.css`):**
     - Atualização da classe `.badge-corner-tag` para `color: var(--text-white);` (`#FFFFFF`).
  3. **Blindagem Contra Cache v=4.6.0 e Validação no Docker:**
     - Versionamento `v=4.6.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção do DOM via Chrome CDP confirmando `color: rgb(255, 255, 255)` para ambos os badges `.badge-left` ("ANTES") e `.badge-right` ("DEPOIS").
     - Suíte `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 31: Restauração da Marca d'Água Tipográfica de Fundo "BRIDE" na Seção Noivas Conforme Design Original
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Identificação e Amostragem da Palavra no Mockup/PDF Oficial:**
     - Análise do export nativo de alta resolução do Figma (1920x14400) e da imagem de referência anexada pelo usuário.
     - Identificação da palavra editorial em caixa alta **"BRIDE"** disposta no plano de fundo dos 4 cards de benefícios nupciais (`#noivas`).
     - No design original de 5 letras simétricas: as letras "B" e "R" situam-se sob os cards da coluna esquerda ("Suíte Presidencial Privada" e "Acompanhamento no Local"), a letra central "I" alinha-se no vão vertical intermediário, e as letras "D" e "E" posicionam-se sob os cards da coluna direita ("Prévia Completa" e "Spa & Bem-estar Prévio").
  2. **Implementação da Camada Tipográfica (`.bridal-watermark`):**
     - Inclusão do elemento decorativo acessível `<div class="bridal-watermark" aria-hidden="true">BRIDE</div>` dentro de `.bridal-cards-grid` em `index.html`.
     - Aplicação de `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-family: var(--font-serif); font-size: clamp(5.2rem, 11vw, 10.5rem); letter-spacing: 0.18em;` em `css/style.css`.
     - Calibração de cor em ouro nobre acetinado translúcido com 8% de opacidade (`rgba(197, 160, 89, 0.08)`), gerando o valor exato `RGB [47, 40, 32]` sobre o fundo dark nupcial `#191512`.
     - Os cards `.pillar-card-dark` configurados com `position: relative; z-index: 1;` com superfície semi-translúcida (`rgba(255, 255, 255, 0.025)`), permitindo que a marca d'água brilhe sutilmente através do vidro fosco dos cards e nos vãos entre eles, com `z-index: 0; pointer-events: none; user-select: none;`.
     - Contenção mobile/tablet via `overflow: hidden;` em `#noivas` e redimensionamento fluido (`clamp(3.2rem, 16vw, 5.5rem)`).
  3. **Blindagem Contra Cache v=4.7.0 e Validação no Docker:**
     - Versionamento `v=4.7.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção via Chrome CDP confirmando centralização matemática horizontal e vertical perfeita (`x: 121px`, `y: 5756px`, `centerOffset: 0.3px`).
     - Suíte `tests/audit_docker.py` executada com 100% de aprovação.

---

### Passo 32: Correção Cromática da Tipografia do Título do Manifesto (Preto Nobre 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise Comparativa e Amostragem no Mockup/PDF Oficial:**
     - Amostragem minuciosa na fatia correspondente à seção `#manifesto` do vetor original do PDF (`tests/pdf_manifesto_exact.png`) e comparação com a imagem fornecida pelo usuário (`media_1794426212070_23ec5864.png`).
     - Constatação de que a headline editorial *"Beleza não é sobre mudar quem você é. É sobre revelar."* possui tipografia escura/preta (`RGB [0, 0, 0]` a `[25, 17, 11]`), contrastando com a implementação anterior que utilizava texto branco (`#FFFFFF`).
  2. **Ajuste no CSS (`css/style.css`):**
     - Atualização da classe `.manifesto-huge-heading` para `color: #000000;`, harmonizando perfeitamente a leitura com o fundo fotográfico e mantendo o kicker dourado (`.gold-kicker`) e o botão de agendamento (`.btn-gold`) nos seus padrões oficiais.
  3. **Blindagem Contra Cache v=4.8.0 e Validação no Docker:**
     - Versionamento `v=4.8.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção via Chrome CDP confirmando cor computada exatamente como `rgb(0, 0, 0)` na classe `.manifesto-huge-heading`.
     - Auditoria completa `tests/audit_docker.py` executada com 100% de aprovação.

---

### Passo 33: Correção Cromática dos Títulos de Colorimetria (Branco Puro) e Calibração Fiel da Marca d'Água "HAIR"
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Correção da Cor dos Títulos dos 4 Cards Técnicos de Colorimetria:**
     - Amostragem minuciosa no PDF oficial e imagem de referência (`media_1794429588725_a805a5ef.png`).
     - Títulos "Balayage Francesa", "Morena Iluminada", "Blonde Couture" e "Correção de Cor" (`#coloracao .pillar-title`) atualizados de dourado (`#C5A059`) para branco puro nobre (`#FFFFFF` / `rgb(255, 255, 255)`), preservando a barra vertical dourada (`border-left: 2px solid var(--gold-primary)`).
  2. **Calibração 1:1 da Marca d'Água "HAIR" no Grid Técnico:**
     - Realocação de `.color-watermark` para dentro do grid das técnicas (`.pillars-2col.color-pillars-grid`), eliminando o desalinhamento anterior que a projetava para fora do grid e escondia letras essenciais sob a fotografia.
     - Calibração de `left: 28%; top: 50%; transform: translateY(-50%);` com `letter-spacing: 0.06em` e `font-size: clamp(5.2rem, 11vw, 9.8rem);`, posicionando com precisão milimétrica a letra "H" no vão intermediário das duas colunas, a letra "A" sob a coluna de Morena Iluminada/Correção de Cor, e a letra "I" visível no vão à direita antes da fotografia, em tom ouro suave translúcido (`rgba(197, 160, 89, 0.08)`).
     - Cards configurados com `position: relative; z-index: 1;` e marca d'água com `z-index: 0; pointer-events: none;`.
  3. **Blindagem Contra Cache v=4.9.0 e Validação no Docker:**
     - Versionamento `v=4.9.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção via Chrome CDP confirmando cor computada `rgb(255, 255, 255)` para todos os 4 títulos e correspondência visual 1:1 da marca d'água.
     - Auditoria multi-viewport via Chrome CDP e suíte `tests/audit_docker.py` executada com 100% de aprovação.

---

### Passo 34: Reordenação das Fotos de Especialistas, Alinhamento à Esquerda e Efeito Hover Nobre do Botão
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Ajuste da Sequência de Imagens da Seção de Especialistas (`#especialistas`):**
     - Alinhamento rigoroso 1:1 com o layout original de referência, trocando exclusivamente os retratos dos Cards 2 e 3 e preservando integralmente textos, nomes, cargos, descrições e links de agendamento:
       - **Card 2 (Camila Ferraz — Visagista & Cut Specialist):** Imagem com iluminação e fundo azul/púrpura (`photo-1534528741775-53994a69daeb_Po4W.avif`).
       - **Card 3 (Beatriz Alencar — Head of Makeup):** Imagem com coque despojado e fundo claro (`photo-1580489944761-15a19d654956_Po4W.avif`).
  2. **Alinhamento do Botão de Ação à Esquerda:**
     - Substituição do wrapper centralizador anterior pela classe `.specialists-action` com `display: flex; justify-content: flex-start;`, garantindo alinhamento rente à margem esquerda do grid de 4 especialistas.
  3. **Estilização Nobre do Efeito Hover no Botão:**
     - Botão "CONHECER TODO O CORPO ARTÍSTICO →" (`#especialistas .btn-outline-dark`) estilizado com transição aveludada:
       - Fundo padrão transparente com borda e texto escuro `#262320`.
       - Estado `:hover` e `:focus-visible` com fundo preto ébano nobre (`#11100F !important`), tipografia e ícone em branco puro (`#FFFFFF !important`), contorno em ouro nobre acetinado (`var(--gold-primary)` / `#C5A059 !important`) e elevação suave (`transform: translateY(-2px)` com sombra difusa).
  4. **Blindagem Contra Cache v=5.0.0 e Validação no Docker:**
     - Versionamento `v=5.0.0` aplicado em `index.html` e `style.css`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Validação completa com 100% de aprovação na suíte `tests/audit_docker.py`.

---

### Passo 35: Calibração Cromática 1:1 do Seletor de Idiomas da Barra Superior (PT Dourado e Barras Neutras)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise Cromática do Mockup Oficial do PDF:**
     - Amostragem pixel-perfect no PDF oficial (`RGB [198, 161, 91]`) e confronto com a referência enviada pelo usuário (`media_1794432274118_ab093f4d.png`).
     - Constatação de que o idioma ativo `PT` é destacado em ouro nobre acetinado (`var(--gold-primary)` / `#C5A059`), enquanto as barras divisórias `/` e os idiomas inativos `EN` e `ES` possuem tonalidade clara neutra/taupe aristocrática (`rgba(255, 255, 255, 0.45)` e `#AAA397`).
  2. **Refatoração Semântica e Acessibilidade (`index.html`):**
     - Estruturação semântica com elementos `.lang-item` individuais e acessibilidade completa (`aria-label="Seletor de idioma"`, `aria-current="true"`, `role="button"`, `tabindex="0"`).
  3. **Estilização em Alta Fidelidade (`css/style.css`):**
     - `.lang-item.active` configurado com `color: var(--gold-primary)` e `font-weight: 600`.
     - `.lang-item` padrão com cor taupe `#AAA397` e transição para branco no hover.
     - `.lang-divider` ajustado para branco translúcido sutil `rgba(255, 255, 255, 0.45)` com espaçamento simétrico (`margin: 0 4px`).
  4. **Interatividade Fluida (`js/main.js`):**
     - Função `initLanguageSwitcher()` implementando chaveamento reativo de idioma com suporte a clique e navegação por teclado (Enter / Espaço).
  5. **Blindagem Contra Cache v=5.1.0 e Validação no Docker:**
     - Versionamento `v=5.1.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 36: Padronização dos Botões Outline (Borda Dourada, Alinhamento à Esquerda e Hover Preto/Branco)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Alinhamento à Esquerda dos Botões Editoriais (`index.html`):**
     - Seção Experiências & Rituais (`#experiencias`): Substituição do wrapper centralizador anterior pela classe `.rituals-action` com `display: flex; justify-content: flex-start; margin-top: 50px;`, alinhando perfeitamente o botão "VER TABELA COMPLETA DE RITUAIS & PREÇOS →" com a coluna inicial dos cards de rituais, exatamente como no PDF oficial.
     - Seção Instagram (`#instagram`): Atualização do container para `.instagram-action` com `display: flex; justify-content: flex-start; margin-top: 36px;`.
     - Seções O Salão (`#conceito`) e Especialistas (`#especialistas`): Mantidos alinhados à esquerda em suas respectivas grades e colunas.
  2. **Borda Dourada em Repouso em Todos os Botões com essa Característica:**
     - A classe global `.btn-outline-dark` e suas instâncias específicas (`.concept-action`, `#experiencias`, `#especialistas`, `#instagram`) foram padronizadas com contorno em ouro nobre acetinado (`border: 1px solid var(--gold-primary);` / `#C5A059`), substituindo as bordas escuras ou cinzas anteriores.
  3. **Comportamento Hover Nobre Padronizado:**
     - Ao passar o mouse (`:hover` e `:focus-visible`), todos os botões `.btn-outline-dark` transitam fluidamente para:
       - **Fundo:** Preto ébano nobre (`background: #11100F !important;`)
       - **Tipografia e seta:** Branco puro (`color: #FFFFFF !important;`)
       - **Borda:** Ouro nobre acetinado (`border-color: var(--gold-primary) !important;`)
       - **Elevação tátil:** `transform: translateY(-2px)` com sombra difusa `box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);`.
  4. **Blindagem Contra Cache v=5.2.0 e Validação no Docker:**
     - Versionamento `v=5.2.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 37: Remoção do Negrito no Título Editorial do Manifesto (Tipografia Regular Fiel ao Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise de Peso Tipográfico no Mockup Original do PDF:**
     - Mensuração analítica de espessura de traço no vetor original do PDF (`tests/pdf_manifesto_exact.png`) e conferência com a imagem enviada pelo usuário (`media_1794433434582_1b7ef284.jpg`).
     - Constatação de que a headline *"Beleza não é sobre mudar quem você é. É sobre revelar."* possui peso regular/delicado (`font-weight: 400`), enquanto o elemento `<h2>` herdava o padrão de browser `font-weight: bold` (700).
  2. **Calibração de Peso em CSS (`css/style.css`):**
     - Aplicação explícita de `font-weight: 400;` na classe `.manifesto-huge-heading` (inclusive na media query responsiva para mobile `< 480px`), removendo o negrito e restaurando a elegância e leveza visual das serifas clássicas da família Cormorant Garamond / Playfair Display.
  3. **Blindagem Contra Cache v=5.3.0 e Validação no Docker:**
     - Versionamento `v=5.3.0` aplicado em `index.html` e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção automatizada confirmando `font-weight: 400` servido pelo Nginx.
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 38: Correção da Sequência e Substituição da Foto no Feed Instagram (Fidelidade 1:1 ao PDF)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Comparativa das Imagens do Grid do Instagram (`#instagram`):**
     - Extração milimétrica das 6 fotografias originais a partir da renderização em alta resolução da página do PDF oficial (`AURA Maison de Beauté — Salão Feminino de Alto Padrão Experiências Exclusivas.pdf`), entre as coordenadas y=13824 e y=14017 (tamanho 194x193 px com gaps de 16px).
     - Confronto pixel a pixel com a imagem do site atual (`media_1794434081770_554d013a.jpg`) e o mockup de referência (`media_1794434095994_934b6a97.jpg`).
  2. **Identificação e Remoção da Fotografia Divergente:**
     - A foto que estava na 5ª célula (`photo-1595476108010-b4d1f102b1b1_002_Po4W.avif`, lavatório com mulher lavando cabelos) não fazia parte do grid do Instagram do design original do PDF.
     - Essa imagem foi substituída pelo asset oficial de escovação e blow dry em salão (`photo-1580618672591-eb180b1a973f_003_Po4W.avif`), que possui enquadramento perfeito (score de similaridade 5.59 / quase nulo em relação ao PDF).
  3. **Reordenação Fiel da Sequência Fotográfica (`index.html`):**
     - Posição 1: Salão AURA em preto e branco (`photo-1560066984-138dadb4c035_003_Po4W.avif`, alt="Ambiente AURA")
     - Posição 2: Cabelo cacheado volumoso em fundo rosa (`photo-1519699047748-de8e457a634e_Po4W.avif`, alt="Morena Iluminada")
     - Posição 3: Acessórios e pentes em mesa branca (`photo-1527799820374-dcf8d9d4a388_002_Po4W.avif`, alt="Pincéis e Acessórios")
     - Posição 4: Escovação & Styling profissional com secador (`photo-1580618672591-eb180b1a973f_003_Po4W.avif`, alt="Escovação & Styling")
     - Posição 5: Mulher loira com gorro e cachecol na neve (`photo-1487412720507-e7ab37603c6f_002_Po4W.avif`, alt="Loiro Couture")
     - Posição 6: Noivos com buquê floral de casamento (`photo-1519741497674-611481863552_002_Po4W.avif`, alt="Noiva AURA")
  4. **Blindagem Contra Cache v=5.4.0 e Validação no Docker:**
     - Versionamento `v=5.4.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 39: Calibração Cromática do Selo Circular de Excelência (Todas as Palavras em Dourado Nobre 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise Cromática do Selo no Mockup Original do PDF:**
     - Extração e análise do selo circular `.badge-excellence-circle` ("10+ ANOS DE EXCELÊNCIA") no vetor do PDF oficial e confronto com a referência enviada pelo usuário (`media_1794434653394_586c2dc5.png`).
     - Constatação de que tanto o numeral "10+" quanto as palavras "ANOS DE EXCELÊNCIA" e a borda circular são todos renderizados em ouro nobre acetinado (`var(--gold-primary)` / `#C5A059`), enquanto o CSS mantinha anteriormente `.badge-txt` em tom marfim/esbranquiçado `#DDD7CE`.
  2. **Calibração Cromática em CSS (`css/style.css`):**
     - `.badge-txt` atualizado para `color: var(--gold-primary);`, assegurando que todas as palavras do selo circular fiquem em dourado nobre acetinado perfeitamente harmonizado com o numeral `.badge-num` e a borda de 1.5px do selo.
  3. **Blindagem Contra Cache v=5.5.0 e Validação no Docker:**
     - Versionamento `v=5.5.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção de rede confirmando `color: var(--gold-primary)` servido em `/css/style.css`.
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 40: Calibração da Caixa de Transparência da Colorimetria (Contorno Pontilhado e Tipografia Branca 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise Detalhada no Mockup Original do PDF:**
     - Extração e análise da caixa de aviso de transparência (`.transparency-alert`) na seção de Colorimetria (`#coloracao`) e confronto com as referências enviadas pelo usuário (`media_1794434781589_e1b22f6e.png`, `media_1794434839030_edcd3cc3.png`, `media_1794434861344_76e9f9a7.png`).
     - Constatações de divergência identificadas e corrigidas:
       - O contorno da caixa no original do PDF é pontilhado (`border: 1px dotted rgba(197, 160, 89, 0.6)`), e não sólido.
       - A palavra "Aviso de transparência:" (`strong`) era renderizada em dourado, quando no original possui cor branca pura (`#FFFFFF`), em conformidade com o restante do texto do aviso.
       - O fundo da caixa é transparente (`background: transparent`), integrando-se suavemente ao bronze espresso da seção.
       - O ícone circular de aviso (`.alert-icon-circle`) possui aro fino dourado com centro transparente e ponto de exclamação dourado, alinhando-se com fidelidade ao mockup.
  2. **Refatoração dos Estilos em CSS (`css/style.css`):**
     - `.transparency-alert`: configurado com `border: 1px dotted rgba(197, 160, 89, 0.6);` e `background: transparent;`.
     - `.transparency-alert strong`: configurado com `color: #FFFFFF; font-weight: 600;`, unificando a cor com todo o parágrafo.
     - `.transparency-alert p`: configurado com `color: #FFFFFF;`.
     - `.alert-icon-circle`: ajustado com `background: transparent; border: 1.5px solid var(--gold-primary); color: var(--gold-primary);`.
  3. **Blindagem Contra Cache v=5.6.0 e Validação no Docker:**
     - Versionamento `v=5.6.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção de rede confirmando os novos estilos servidos em `/css/style.css`.
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 41: Remoção do Negrito dos Badges ANTES / DEPOIS do Comparador de Transformações (Tipografia Regular 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise Tipográfica dos Badges no Mockup do PDF:**
     - Inspeção da espessura de traço dos marcadores de canto `.badge-corner-tag` ("ANTES" e "DEPOIS") na seção de Resultados Visíveis (`#transformacoes`) e confronto com a referência enviada pelo usuário (`media_1794434919687_4fa5f6e3.png`).
     - Constatação de que os rótulos possuem tipografia regular/delicada (`font-weight: 400`), enquanto o CSS mantinha anteriormente `font-weight: 600` (semi-bold).
  2. **Calibração de Peso em CSS (`css/style.css`):**
     - `.badge-corner-tag`: atualizado para `font-weight: 400;`, removendo o negrito e conferindo máxima elegância, leveza visual e precisão 1:1 com o layout original.
  3. **Blindagem Contra Cache v=5.7.0 e Validação no Docker:**
     - Versionamento `v=5.7.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção de rede confirmando `font-weight: 400` servido em `/css/style.css`.
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 42: Calibração Cromática do Card de Proposta de Noivas (Marrom Espresso 1:1 com o PDF Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Colorimétrica e Confronto com o Mockup Original do PDF:**
     - Análise cromática comparativa entre a captura do site atual (`media_1794434984700_5ec58f95.png`), a referência de recorte enviada pelo usuário (`media_1794435001400_b92bef5b.png`) e a renderização em alta resolução da página do PDF oficial (`AURA Maison de Beauté — Salão Feminino de Alto Padrão Experiências Exclusivas.pdf`).
     - Constatou-se que o card `.bridal-form-card` utilizava anteriormente `var(--bg-dark-card)` (`#1F1D1A`), com valores RGB `[31, 29, 26]` (tom grafite/carvão frio quase neutro), gerando discrepância visual em relação ao tom marrom expresso do mockup original.
     - A amostragem no PDF original e na imagem de referência comprovou a presença de marrom quente com assinatura cromática média `RGB [41.5, 35.1, 32.1]` (`#2A2320`, com desvio euclidiano de apenas 0.50).
  2. **Ajuste e Harmonização Cromática em CSS (`css/style.css`):**
     - `.bridal-form-card`: fundo calibrado para `background: #2A2320;` (marrom espresso nobre, quente e luxuoso).
     - `#noivas.dark-section`: fundo ajustado para `background-color: #211C19;` (bronze espresso [33, 28, 25]), unificando o ambiente escuro com o ateliê de coloração.
     - `.bridal-form-card .input-dark`: inputs internos configurados com `background: #191512;` e foco em `#1C1714`, garantindo contraste em baixo-relevo e legibilidade perfeita.
  3. **Blindagem Contra Cache v=5.8.0 e Validação no Docker:**
     - Versionamento `v=5.8.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Inspeção automatizada confirmando `background: #2A2320` e `#noivas` com `background-color: #211C19` servidos pelo Nginx.
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 43: Equalização Dimensional dos Cards da Seção de Agendamento (Largura e Altura 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Geométrica Comparativa dos Cards (`media_1794435126089_829276a5.jpg` vs `media_1794435146817_32246fa3.jpg`):**
     - Na captura do site anterior (`im1`), o card de agendamento esquerdo (`.booking-box-dark`) terminava precocemente logo após o botão, com altura de 446px e largura de 614px (proporção 1.15fr 0.85fr com `align-items: start`), enquanto o card direito de horários (`.schedule-box-dark`) possuía 550px de altura e 454px de largura, gerando um degrau visual de mais de 100px na base e larguras desbalanceadas.
     - No mockup de referência original (`im2`), ambos os cards iniciam rigorosamente no mesmo alinhamento superior (y=17) e encerram no mesmo alinhamento inferior (y=533), apresentando altura idêntica (516px) e larguras balanceadas simétricas (50% / 50%).
  2. **Refatoração do Grid em CSS (`css/style.css`):**
     - `.booking-double-grid`: remoção de `align-items: start;` e substituição por `align-items: stretch;`, garantindo que ambos os cards estiquem para a altura total da linha do grid.
     - `@media (min-width: 992px)`: substituição da proporção assimétrica `1.15fr 0.85fr` por `grid-template-columns: 1fr 1fr;` com `gap: 48px;`, assegurando larguras perfeitamente iguais em desktop e tablets horizontais.
     - `.booking-box-dark, .schedule-box-dark`: adição explícita de `height: 100%;` para preenchimento vertical integral da célula do grid.
  3. **Validação Dimensional Automatizada via CDP (Chrome DevTools Protocol):**
     - Em 1200px: `leftW: 540px, leftH: 647px, rightW: 540px, rightH: 647px, heightDiff: 0px, widthDiff: 0px` (simetria dimensional perfeita).
     - Em 1440px: `leftW: 560px, leftH: 647px, rightW: 560px, rightH: 647px, heightDiff: 0px`.
     - Em 1024px: `leftW: 452px, leftH: 667px, rightW: 452px, rightH: 667px, heightDiff: 0px`.
  4. **Blindagem Contra Cache v=5.9.0 e Validação no Docker:**
     - Versionamento `v=5.9.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Auditoria automatizada `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 44: Alinhamento e Fidelidade Absoluta 1:1 do Rodapé do Projeto com o Mockup Original (PDF)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Comparativa e Identificação de Divergências no Rodapé (`.site-footer`):**
     - Confronto pixel a pixel entre a captura do rodapé em produção (`media_1794435226539_acfc66ac.png`) e o mockup oficial do PDF (`media_1794435244630_3c097959.png`).
     - Identificou-se que as listas das colunas "Navegação" e "Experiências" exibiam marcadores de lista (*bullets* `•`) indesejados devido ao uso da classe `.footer-list` no HTML enquanto o CSS declarava apenas `.footer-links-list`.
     - Os ícones sociais (Instagram, Facebook, Pinterest) apareciam como glifos desprovidos da elegante moldura circular característica do design de alta costura.
     - Os títulos das colunas ("Navegação", "Experiências", "Onde Estamos") herdavam o estilo padrão de títulos em caixa alta sem a serifa editorial.
     - O fundo da seção utilizava `var(--bg-dark-deep)` (`#11100F`), diferindo do tom quente e aveludado espresso Dark Couture do PDF (`RGB [22, 18, 15]` / `#16120F`).
  2. **Refatoração e Estilização em CSS (`css/style.css`):**
     - **Supressão Total dos Bullets:** Aplicação estrita de `list-style: none !important; list-style-type: none !important; padding: 0 !important; margin: 0 !important;` tanto em `.footer-list` quanto em `.footer-links-list` e seus respectivos `li`, eliminando qualquer marcador e restabelecendo o alinhamento rente à margem.
     - **Emblemas Circulares das Redes Sociais (`.social-circle-link`):** Estilização de cada link social como um botão circular de joalheria (`width: 34px; height: 34px; border-radius: 50%`) com fundo sutil translúcido (`rgba(255, 255, 255, 0.04)`), contorno em ouro nobre acetinado (`rgba(197, 160, 89, 0.35)`), ícone centralizado dourado (`var(--gold-primary)` / `#C5A059`) e transição fluida no hover para fundo dourado sólido com ícone em tom espresso `#16120F`.
     - **Tipografia Editorial dos Títulos das Colunas (`.footer-nav-title`):** Padronização com fonte serifada clássica (`var(--font-serif)` — Cormorant Garamond / Playfair Display), em *Title Case* (sem forçar caixa alta), peso `font-weight: 500`, tamanho `1.18rem` e cor branca nobre (`var(--text-white)`).
     - **Calibração Cromática do Fundo:** Ajuste do fundo de `.site-footer` para `#16120F` (Dark Couture Espresso `RGB [22, 18, 15]`, conferindo 100% de precisão colorimétrica com o vetor do PDF original).
     - **Harmonização de Textos e Copyright:** Textos secundários, itens de contato e links legais configurados com tipografia delicada marfim/translúcida (`rgba(255, 255, 255, 0.65)` e `0.45`), com créditos de design destacados em ouro nobre acetinado.
  3. **Validação Automatizada via Chrome CDP:**
     - Inspeção dos estilos computados em runtime:
       - Fundo: `rgb(22, 18, 15)` (100% fiel ao PDF).
       - Marcador de lista: `none` (zero bullets).
       - Emblemas sociais: `34px x 34px`, `border-radius: 50%`, borda `rgba(197, 160, 89, 0.35)`.
       - Títulos: Fonte serifada com `textTransform: none` e `fontWeight: 500`.
  4. **Blindagem Contra Cache v=5.10.0 e Validação no Docker:**
     - Versionamento `v=5.10.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte de auditoria completa `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 45: Centralização do Título e Subtítulo do Card de Noivas (Fidelidade 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Análise de Alinhamento no Mockup Original do PDF:**
     - Amostragem e medição geométrica no PDF oficial em alta resolução (`AURA Maison de Beauté — Salão Feminino de Alto Padrão   Experiências Exclusivas.pdf`, página 0, y ~ 6400 a 7300).
     - Comprovou-se que o título editorial "Planeje seu Dia dos Sonhos" (`.bridal-form-heading`, centro em x: 764px) e o subtítulo "Solicite uma proposta detalhada para você e seu cortejo" (`.bridal-form-sub`, centro em x: 764px) encontram-se perfeitamente centralizados horizontalmente no card (`centerDiff: 0px`), enquanto o CSS mantinha alinhamento à esquerda por padrão.
  2. **Ajuste de Alinhamento em CSS (`css/style.css`):**
     - Aplicação de `text-align: center;` na classe `.bridal-form-heading`.
     - Aplicação de `text-align: center;` na classe `.bridal-form-sub`, conferindo harmonia estética integral ao cabeçalho do formulário.
  3. **Validação Automatizada via Chrome CDP:**
     - Inspeção em runtime confirmando `headingAlign: 'center'`, `subAlign: 'center'`, centro do card em 382px e centro do título em 382px com `centerDiff: 0px` exato.
  4. **Blindagem Contra Cache v=5.11.0 e Validação no Docker:**
     - Versionamento `v=5.11.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte de testes `tests/audit_docker.py` executada com 100% de aprovação.

---

### Passo 46: Calibração Cromática do Fundo da Caixa de Aviso de Transparência (Marrom Espresso Suave #2E251E 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Colorimétrica Rigorosa no Mockup e PDF Original:**
     - Confronto pixel a pixel entre a captura em produção (`media_1794439567907_93df2fbd.png`), o recorte do original enviado pelo usuário (`media_1794439587678_f65b91eb.png`) e a extração vetorial de alta definição do PDF oficial (`AURA Maison de Beauté — Salão Feminino de Alto Padrão   Experiências Exclusivas.pdf`, página 0, y ~ 4500 a 5000).
     - Comprovou-se que o fundo da caixa de aviso de transparência (`.transparency-alert`) na seção de Colorimetria (`#coloracao`) não é transparente, mas sim preenchido por um tom marrom espresso suave mais claro: `RGB [46, 37, 30]` (`#2E251E`), que se destaca com sutil elegância sobre o fundo bronze espresso da seção (`#211C19` / `RGB [33, 28, 25]`).
  2. **Refatoração em CSS (`css/style.css`):**
     - `.transparency-alert`: configurado com `background-color: #2E251E;`, substituindo a declaração `background: transparent;`.
     - Mantidos com total fidelidade o contorno pontilhado em ouro acetinado (`border: 1px dotted rgba(197, 160, 89, 0.6);`), a tipografia branca nobre e o ícone com aro dourado.
  3. **Validação Automatizada via Chrome CDP:**
     - Inspeção em runtime confirmando `alertBg: "rgb(46, 37, 30)"`, `sectionBg: "rgb(33, 28, 25)"`, `borderStyle: "dotted"` e `borderColor: "rgba(197, 160, 89, 0.6)"`.
  4. **Blindagem Contra Cache v=5.12.0 e Validação no Docker:**
     - Versionamento `v=5.12.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte de auditoria completa `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 47: Equalização Dimensional do Card de Noivas com a Coluna da Esquerda (Altura 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Geométrica Comparativa (`media_1794439727082_0d4d4144.jpg` vs `media_1794439740949_a64a260e.jpg`):**
     - Na captura em produção anterior, o card de formulário de noivas (`.bridal-form-card`) encerrava em 532px, enquanto a coluna da esquerda com os 4 cards e o botão "FALAR COM CONCIERGE DE NOIVAS" estendia-se até 588px (degrau de 56px abaixo do card).
     - No mockup original de referência (`im2`), a base inferior do card de noivas e a base inferior do botão da coluna esquerda alinham-se rigorosamente na mesma linha horizontal (`y = 474` vs `y = 471`, `diff: 0px`).
  2. **Refatoração do Grid e Card em CSS (`css/style.css`):**
     - `.bridal-layout-grid` em `@media (min-width: 992px)`: configurado com `align-items: stretch;`, garantindo preenchimento vertical integral das duas colunas.
     - `.bridal-form-card`: configurado com `height: 100%;` e `display: flex; flex-direction: column;`.
     - `#bridal-proposal-form`: configurado com `display: flex; flex-direction: column; flex: 1; justify-content: space-between;`, distribuindo harmoniosamente os campos do formulário e posicionando o botão "SOLICITAR ORÇAMENTO DE NOIVAS" rente à base com o padding interno.
  3. **Validação Automatizada via Chrome CDP:**
     - Testes realizados nos viewports 1600px, 1440px, 1280px e 1024px:
       - 1600px: `leftHeight: 682px, cardHeight: 682px, heightDiff: 0px, bottomDiff: 0px`.
       - 1440px: `leftHeight: 682px, cardHeight: 682px, heightDiff: 0px, bottomDiff: 0px`.
       - 1280px: `leftHeight: 682px, cardHeight: 682px, heightDiff: 0px, bottomDiff: 0px`.
       - 1024px: `leftHeight: 829px, cardHeight: 829px, heightDiff: 0px, bottomDiff: 0px`.
     - Auditoria mobile (768px, 480px, 375px) confirmando `overflow: false` e fluxo vertical natural.
  4. **Blindagem Contra Cache v=5.13.0 e Validação no Docker:**
     - Versionamento `v=5.13.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte de testes `tests/audit_docker.py` executada com 100% de aprovação.

---

### Passo 48: Calibração Cromática do Fundo da Seção de Depoimentos (Linho Quente #EEE5DC 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Colorimétrica Rigorosa no Mockup e PDF Original:**
     - Confronto pixel a pixel entre a captura em produção (`media_1794439874032_dd0286d0.png`), a referência enviada pelo usuário (`media_1794439891626_735e4474.png`) e a extração vetorial de alta definição do PDF oficial (`AURA Maison de Beauté — Salão Feminino de Alto Padrão   Experiências Exclusivas.pdf`, página 0, y ~ 10300 a 11200).
     - Constatou-se que a seção de depoimentos (`.testimonials-editorial-section` / `#depoimentos`) utilizava anteriormente `var(--bg-champagne-alt)` (`#F7F3EC` / `RGB [247, 243, 236]`), apresentando tonalidade excessivamente clara.
     - A amostragem colorimétrica no PDF oficial e na referência comprovou que o fundo autêntico é o tom linho quente aveludado `RGB [238, 229, 220]` (`#EEE5DC`, 61.7% dos pixels da seção), idêntico ao fundo da seção de rituais e manifesto.
  2. **Refatoração em CSS (`css/style.css`):**
     - `.testimonials-editorial-section`: configurado com `background-color: #EEE5DC;`, escurecendo sutilmente o fundo e gerando o contraste visual perfeito, nobre e caloroso com o card central branco puro (`.testimonial-spotlight-card` com `#FFFFFF`) e a pílula Google Reviews (`.google-reviews-pill` com `#FFFFFF`).
  3. **Validação Automatizada via Chrome CDP:**
     - Inspeção em runtime confirmando `secBg: "rgb(238, 229, 220)"` (`#EEE5DC`), `cardBg: "rgb(255, 255, 255)"` e `pillBg: "rgb(255, 255, 255)"`.
  4. **Blindagem Contra Cache v=5.14.0 e Validação no Docker:**
     - Versionamento `v=5.14.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte de auditoria completa `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 49: Alinhamento Fiel da Seção de Newsletter (Fundo Linho Quente #EEE5DC, Borda Superior e Formulário 1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Colorimétrica e Geométrica no PDF Original e Referência:**
     - Confronto pixel a pixel entre a captura em produção (`media_1794439964093_03866963.png`), a referência enviada pelo usuário (`media_1794440113214_c17712d5.png`) e a extração vetorial do PDF oficial (`AURA Maison de Beauté — Salão Feminino de Alto Padrão   Experiências Exclusivas.pdf`, transição das páginas 0 e 1, y ~ 14150 da pág 0 a 200 da pág 1).
     - Identificado que o fundo autêntico da seção de newsletter é linho quente `RGB [238, 229, 220]` (`#EEE5DC`), que a seção possui linha divisória superior em tom suave `RGB [222, 213, 206]` (`#DED5CE`), e que a proporção do formulário é de ~530px com campo branco e botão dourado aristocrático de 48px de altura com gap de 8px.
  2. **Refatoração no CSS (`css/style.css`) e Marcação HTML (`index.html`):**
     - `.newsletter-clean-section`: fundo ajustado para `#EEE5DC;`, borda superior `1px solid #DED5CE;`, paddings calibrados para `85px 20px 90px;`.
     - Tipografia: `.gold-kicker` com `letter-spacing: 0.22em`, `.editorial-heading` com `clamp(1.8rem, 2.5vw, 2.35rem)` e `.section-subtext` em tom taupe `#5A524C` com max-width de 580px e margem harmônica.
     - `.newsletter-clean-form`: largura máxima de 530px, gap de 8px e alinhamento `stretch`.
     - `.newsletter-clean-input`: fundo branco puro `#FFFFFF`, borda `1px solid #DED5CE`, cantos arredondados de 4px, altura mínima de 48px e placeholder taupe `#9E9A95`.
     - `.btn-newsletter`: altura equalizada de 48px, fundo dourado `#C5A059`, cantos de 4px e sombra refinada.
  3. **Validação Automatizada via Chrome CDP:**
     - Verificação em tempo real: `secBg: "rgb(238, 229, 220)"` (`#EEE5DC`), `borderTop: "1px solid rgb(222, 213, 206)"`, `formWidth: 530px`, `inputHeight: 48px`, `buttonHeight: 48px`.
  4. **Blindagem Contra Cache v=5.15.0 e Validação no Docker:**
     - Versionamento `v=5.15.0` aplicado em `index.html` (links e preloads) e `style.css`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte de auditoria completa `tests/audit_docker.py` executada com 100% de aprovação.

---

### Passo 50: Equalização e Calibração Fiel dos Cards de Agendamento e Horários (1:1 com o Original)
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Auditoria Geométrica e Colorimétrica no PDF Original e Referência:**
     - Confronto pixel a pixel entre a captura em produção (`media_1794441274432_97fcaac0.jpg`), a referência do usuário (`media_1794441296300_2f1826b3.jpg`) e a extração vetorial do PDF oficial (`AURA Maison de Beauté — Salão Feminino de Alto Padrão   Experiências Exclusivas.pdf`, página 0, y ~ 11800 a 12600).
     - Identificado que o layout desktop original possui proporção assimétrica nobre com a coluna esquerda mais larga (~1.35fr : 1fr) para acomodar com elegância a linha tripla de inputs ("Profissional Desejado", "Data de Preferência" e "Horário Preferido"), eliminando qualquer truncamento ou quebra de texto nos seletores.
     - Amostragem colorimétrica confirmou o fundo dos cards em marrom espresso quente `#1F1A17` (`RGB [31, 26, 23]`), rótulos em marfim/taupe suave `#C4B5A8` (`RGB [196, 181, 168]`), botão dourado acetinado com glow envolvente `box-shadow: 0 4px 20px rgba(186, 155, 108, 0.35)`, e dia ativo da semana "Terça-feira" em marfim sereno (`var(--text-ivory)`), sem destaque dourado estridente.
  2. **Refatoração no CSS (`css/style.css`):**
     - `.booking-double-grid`: atualizado nos breakpoints desktop para `grid-template-columns: 1.35fr 1fr; gap: 40px; align-items: stretch;`.
     - `.booking-box-dark` e `.schedule-box-dark`: fundo calibrado para `#1F1A17;`, borda `1px solid rgba(197, 160, 89, 0.22);`, altura equalizada de 688px.
     - `#section-booking-form .form-label-txt`: tipografia atualizada para `color: #C4B5A8; font-size: 0.68rem; letter-spacing: 0.16em;`.
     - `.form-grid-3 .input-dark`: preenchimento refinado para `padding: 12px 10px; font-size: 0.82rem;`, acomodando os selects com folga e elegância visual; textarea com `resize: none;`.
     - `#section-booking-form .btn-gold`: estilizado com gradiente `linear-gradient(135deg, #C5A059 0%, #B89248 100%)`, `box-shadow: 0 4px 20px rgba(186, 155, 108, 0.35);`, `letter-spacing: 0.14em;`, `min-height: 48px;`.
     - `.schedule-row.active-day`: tipografia definida como `color: var(--text-ivory); font-weight: 500;`, alinhando perfeitamente com a sobriedade da tabela original.
     - `.concierge-subbox`: background refinado para `rgba(197, 160, 89, 0.06); border: 1px solid rgba(197, 160, 89, 0.22);`.
  3. **Validação Automatizada via Chrome CDP:**
     - Inspeção em runtime no container Docker:
       - `leftCard`: `width: 523.9px, height: 688.1px, bg: rgb(31, 26, 23)`
       - `rightCard`: `width: 388.1px, height: 688.1px, bg: rgb(31, 26, 23)`
       - `labelColor`: `rgb(196, 181, 168)` (`#C4B5A8`)
       - `btnShadow`: `rgba(186, 155, 108, 0.35) 0px 4px 20px 0px`
       - `activeDayColor`: `rgb(221, 215, 206)` (`var(--text-ivory)`)
  4. **Blindagem Contra Cache v=5.16.0 e Validação no Docker:**
     - Versionamento `v=5.16.0` aplicado em `index.html` e `style.css`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte de auditoria completa `tests/audit_docker.py` executada com 100% de sucesso.

---

### Passo 51: Implementação e Calibração Fiel do Menu Hambúrguer Mobile no Lado Direito do Header
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. **Estrutura Semântica no Header (`index.html`):**
     - Inclusão do botão `#menu-toggle-btn.btn-mobile-toggle` dentro de `.header-right`, posicionado à direita do botão de agendamento ("AGENDAR HORÁRIO"), com atributos acessíveis `aria-label="Abrir Menu de Navegação"`, `aria-expanded="false"` e `aria-controls="mobile-drawer"`, e 3 elementos `<span>` para animação fluida das linhas do menu.
  2. **Estilização Visual de Alto Padrão (`css/style.css`):**
     - Ocultação no desktop (`@media (min-width: 960px)` com `display: none !important;`) preservando a integridade da barra de navegação horizontal completa.
     - Exibição em tablets e mobile (`max-width: 959px`) com formato ergonômico de 38x38px (e 34x34px em telas <= 480px, 32x32px em <= 360px).
     - Acabamento nobre com fundo Dark Espresso translúcido (`rgba(22, 18, 15, 0.75)`), desfoque em vidro (`backdrop-filter: blur(8px)`), borda de joalheria em ouro acetinado (`rgba(197, 160, 89, 0.45)`), e linhas douradas (`#C5A059`) que transicionam para estado ativo em "X" com feixe branco puro (`#FFFFFF`).
     - Refinamento do botão de fechar do drawer lateral (`.mobile-drawer-close`) com aro dourado, hover luminoso e alinhamento centrado.
  3. **Comportamento Interativo e Usabilidade (`js/main.js`):**
     - Sincronização bidirecional do estado ativo (`.active`, `aria-expanded`) com a abertura do `.mobile-drawer` e do `.mobile-drawer-overlay`.
     - Fechamento imediato e reativo ao clicar nos links do menu mobile, no botão fechar superior "✕", no overlay exterior, na tecla Escape, no gesto de deslize (swipe touch para a direita) e no botão de CTA do rodapé do drawer.
  4. **Auditoria e Validação via Chrome CDP e Docker:**
     - Inspeção via Chrome CDP em 1280px (desktop: botão oculto), 768px (tablet: botão visível sem overflow) e 375px (mobile: botão visível a 16px da borda direita, abertura e fechamento perfeitos, `hasHScroll: false`).
     - Versionamento `v=5.17.0` aplicado em `index.html`, `style.css` e `main.js`.
     - Recarga sem interrupção do Nginx no container Docker (`docker exec aura-maison-web nginx -s reload`).
     - Suíte `tests/audit_docker.py` executada com 100% de aprovação.






















