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
  1. **Metadados Open Graph & Twitter Cards:** Configurados para pré-visualização enriquecida no WhatsApp, Instagram e redes sociais.
  2. **Dados Estruturados Schema.org JSON-LD:** Marcação semântica oficial para `BeautySalon` com endereço nos Jardins, horários e nota 4.9★.
  3. **Otimização de Pré-carregamento (`<link rel="preload">`):** Critical-path CSS e imagem LCP do Hero pré-carregadas para tempo de resposta ultrarrápido.
  4. **Script de Auditoria Automatizada (`tests/audit_docker.py`):** 100% de sucesso validando todas as rotas estáticas, 14 imagens AVIF e endpoints de API REST no Docker.
  5. **Atualização da Documentação:** `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md` atualizados.

---

### Passo 5: Deploy / Publicação em Nuvem e Certificados SSL HTTPS
- **Status:** **PENDENTE** ⏳ *(Aguardando solicitação explícita do usuário para início)*
- **Escopo Previsto:**
  1. Configuração de certificados SSL/TLS automáticos (Let's Encrypt / Certbot ou Cloudflare).
  2. Configuração de pipeline CI/CD ou Docker Compose para produção em VPS/Cloud (AWS, DigitalOcean, Hetzner ou Railway).
  3. Monitoramento de uptime e métricas de conversão de cliques no WhatsApp.
