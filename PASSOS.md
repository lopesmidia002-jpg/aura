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
