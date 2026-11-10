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
  1. **Criação do `.gitignore`:** Configurado para ignorar dependências, arquivos temporários de SO (macOS, Windows, Linux), caches de IDEs, logs e arquivos binários pesados de briefing (`*.pdf`), mantendo o repositório enxuto e seguro.
  2. **Máscaras Dinâmicas de Telefone Celular:** Formatação automática em tempo real para o padrão `(11) 99999-9999` com sanitização e restrição de caracteres não numéricos em todos os formulários.
  3. **Restrição de Datas Mínimas:** Configuração de bloqueio automático para datas anteriores ao dia atual em inputs de data de agendamento VIP.
  4. **Scroll Reveal Animations:** Micro-interações de revelação suave com Intersection Observer, respeitando a preferência de redução de movimento (`prefers-reduced-motion: reduce`).
  5. **Auditoria de Conectividade Docker:** Container `aura-maison-web` ativo, com respostas HTTP 200 OK validadas para todos os assets e scripts.
  6. **Atualização da Documentação:** `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md` atualizados.

---

### Passo 3: Integração de Webhook com CRM & Concierge WhatsApp Automatizado
- **Status:** **PENDENTE** ⏳ *(Aguardando solicitação explícita do usuário para início)*
- **Escopo Previsto:**
  1. Conexão do formulário de agendamento a um endpoint de webhook para envio direto de mensagens estruturadas ao WhatsApp do Concierge do salão.
  2. Implementação de camada de backend leve em contêiner Docker para gravação de leads e disparo de e-mails de confirmação da newsletter.
  3. Painel administrativo privativo para o Concierge gerenciar horários e solicitações de noivas.
