# ROTEIRO DE EVOLUÇÃO DO PROJETO — PASSOS.md

> **Regra do Projeto:** Só inicie o próximo passo de PASSOS.md quando o usuário solicitar explicitamente.

---

### Passo 1: Desenvolvimento da Landing Page de Alto Padrão & Arquitetura Mobile-First no Docker
- **Status:** **CONCLUÍDO** ✅
- **Entregas Realizadas:**
  1. Criação do Design System exclusivo de marcas de luxo (fundo Champagne Nobre `#FBF9F5`, cartões Creme Soft `#F5F0EB`, Dourado Acetinado `#C5A059`, tipografia Preto Ébano `#141414`, Cormorant Garamond, Playfair Display e Montserrat).
  2. Implementação integral de todas as 8 seções obrigatórias:
     - Header fixo com Glassmorphism e menu mobile slideout.
     - Hero Section com visual de alto impacto, citação visagista e selo 4.9★ Jardins.
     - Seção Conceito & Métricas com manifesto e composição fotográfica editorial.
     - Experiências & Rituais Assinados com grid de 6 cards e filtros por categoria.
     - Destaque Haute Coiffure Atelier em módulo dark nobre.
     - Transformações Assinadas com componente interativo Slider Antes / Depois (suporte touch e mouse).
     - Noivas VIP Bridal Suite com detalhes da suíte privativa e amenidades.
     - O Espaço & Arquitetura contemporânea com a jornada dos 5 passos do atendimento.
     - Corpo de especialistas e mestres visagistas internacionais.
     - Depoimentos de noivas e clientes assíduas dos Jardins.
     - Seção de Agendamento com formulário VIP, horários e destaque do serviço de manobrista (Valet VIP).
     - Newsletter AURA Privilège com confirmação toast elegante.
     - Rodapé oficial completo com endereço na Alameda dos Jardins, contatos e copyright 2026.
  3. Implementação estrita da arquitetura **Mobile-First**:
     - Barra de Ação Rápida no Thumb Zone para smartphones (`.mobile-bottom-bar`).
     - Modal de Agendamento adaptado como *Bottom Sheet* nativo no mobile com suporte a gesto swipe para fechar.
     - Touch targets com altura mínima de 48px e prevenção de auto-zoom no Safari iOS.
     - Rolagem horizontal táctil suave para filtros de serviços.
  4. Execução 100% no Docker:
     - Criação do `Dockerfile` baseado em `nginx:alpine` com suporte a imagens AVIF.
     - Configuração de `nginx.conf` com compressão Gzip e headers de segurança.
     - Configuração de `docker-compose.yml` mapeando a porta `3000:80`.
     - Container `aura-maison-web` ativo, testado e respondendo com HTTP 200 OK.
  5. Criação da documentação viva: `DOCUMENTACAO.md`, `PASSOS.md` e `CONTEXTO.md`.

---

### Passo 2: Otimizações Avançadas, Auditoria Mobile e Testes Automatizados E2E
- **Status:** **PENDENTE** ⏳ *(Aguardando solicitação explícita do usuário para início)*
- **Escopo Previsto:**
  1. Criação de testes de layout automatizados para múltiplos viewports (iPhone SE, iPhone 14/15 Pro Max, iPad, Desktop).
  2. Auditoria detalhada de acessibilidade WCAG 2.1 nível AA/AAA (contraste de cor dos textos dourados e navegação via leitor de tela/teclado).
  3. Adição de micro-animações personalizadas com Intersection Observer (revelação suave de elementos à medida que entram na tela).
  4. Validação de formulários com máscaras dinâmicas de telefone internacional e brasileiro.

---

### Passo 3: Integração de Webhook com CRM & Concierge WhatsApp Automatizado
- **Status:** **PENDENTE** ⏳ *(Aguardando solicitação explícita do usuário para início)*
- **Escopo Previsto:**
  1. Conexão do formulário de agendamento a um endpoint de webhook para envio direto de mensagens estruturadas ao WhatsApp do Concierge do salão.
  2. Implementação de camada de backend leve em contêiner Docker para gravação de leads e disparo de e-mails de confirmação da newsletter.
  3. Painel administrativo privativo para o Concierge gerenciar horários e solicitações de noivas.

