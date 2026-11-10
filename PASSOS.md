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
  1. **Endpoints de API no Docker (`nginx.conf`):**
     - Endpoint `POST /api/agendamentos` com suporte a CORS e confirmação de lead em JSON.
     - Endpoint `POST /api/newsletter` para submissão do Círculo AURA Privilège.
  2. **Geração Automática de Protocolo VIP:** Cada solicitação gera um código de reserva exclusivo (ex: `AURA-VIP-XXXX`).
  3. **Composição Estruturada para WhatsApp do Concierge:**
     - Montagem de mensagem elegante com nome da cliente, protocolo, ritual, data formatada e observações.
     - Redirecionamento automático e transparente para `wa.me/551130889900`.
  4. **Feedback Visual de Alto Padrão:** Notificação Toast com número de protocolo e confirmação de envio.
  5. **Atualização da Documentação:** `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md` devidamente atualizados.

---

### Passo 4: Auditoria Lighthouse, Otimização de Pré-carregamento e Pacote de Produção
- **Status:** **PENDENTE** ⏳ *(Aguardando solicitação explícita do usuário para início)*
- **Escopo Previsto:**
  1. Auditoria de pontuação Lighthouse (Performance, Acessibilidade, Melhores Práticas e SEO buscando 95+ em todas as métricas).
  2. Otimização de tags `<link rel="preload">` para fontes e critical-path CSS.
  3. Verificação de suporte a Service Workers offline básicos caso desejado.
