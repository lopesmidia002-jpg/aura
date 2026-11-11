# ✦ AURA MAISON DE BEAUTÉ — SALÃO FEMININO DE ALTO PADRÃO

> **Haute Coiffure, Visagismo Francês sob Medida & Rituais Exclusivos nos Jardins, São Paulo.**

![Badge Status](https://img.shields.io/badge/Status-100%25%20Docker-C5A059?style=for-the-badge)
![Badge Mobile First](https://img.shields.io/badge/Architecture-Mobile--First-141414?style=for-the-badge)
![Badge Avaliação](https://img.shields.io/badge/Avalia%C3%A7%C3%A3o-4.9%20%E2%98%85%20Jardins-C5A059?style=for-the-badge)
![Badge Licença](https://img.shields.io/badge/Copyright-2026%20AURA-141414?style=for-the-badge)

---

## 🏛️ Sobre o Projeto

A Landing Page oficial da **AURA Maison de Beauté** foi concebida sob os mais altos padrões de design editorial e engenharia de software para marcas de luxo internacional. Localizada na Alameda dos Jardins em São Paulo, a Maison oferece consultoria visagista individualizada, coloração artesanal, rituais capilares biotecnológicos Kérastase Fusio-Dose e uma suíte privativa de alta costura para o Dia da Noiva (*Bridal Suite VIP*).

O projeto adota uma estrita arquitetura **Mobile-First**, garantindo ergonomia táctil no *Thumb Zone*, velocidade extrema com imagens em formato moderno **AVIF**, dados estruturados **Schema.org** e execução conteinerizada **100% no Docker**.

---

## ✨ Design System de Luxo

| Elemento | Especificação / Valor | Aplicação |
| :--- | :--- | :--- |
| **Fundo Champagne Nobre** | `#FBF9F5` | Superfície principal suave e acolhedora |
| **Cartões Creme Soft** | `#F5F0EB` | Módulos, cards de rituais e depoimentos |
| **Dourado Acetinado** | `#C5A059` | Destaques nobres, botões primários e bordas finas |
| **Gradiente Dourado** | `linear-gradient(135deg, #C5A059 0%, #E5CA8F 48%, #B38E46 100%)` | Botões principais e divisores de destaque |
| **Tipografia Preto Ébano**| `#141414` | Contraste de alta legibilidade para títulos e corpo |
| **Superfície Dark Couture** | `#11100F` / `#1A1816` | Atelier de Coloração e Seção de Agendamento |
| **Tipografia Serifada** | `Playfair Display` & `Cormorant Garamond` | Títulos e citações visagistas |
| **Tipografia Sem-Serifa** | `Montserrat` & `Inter` | Menus, metadados, botões e formulários |
| **Efeito Glassmorphism** | `backdrop-filter: blur(16px)` | Header fixo e barra mobile inferior |

---

## 📱 Arquitetura Mobile-First & Ergonomia

1. **Barra de Ação no Thumb Zone (`.mobile-bottom-bar`):**
   - Fixa na base para smartphones, permitindo ligação imediata ao salão, conversa direta no WhatsApp VIP, botão em ouro para agendamento e acesso ao menu.
   - Suporte completo às margens seguras de iPhones e dispositivos Android (`env(safe-area-inset-bottom)`).
2. **Touch Targets de Conforto:**
   - Todos os botões e áreas clicáveis possuem altura mínima de **48px**, em total conformidade com o *Apple Human Interface Guidelines* e *Material Design 3*.
3. **Modal VIP como *Bottom Sheet* Nativo:**
   - No celular, o formulário de reserva VIP abre como uma folha inferior com puxador (*grab bar*) e gesto de fechar por swipe; em telas a partir de 768px, se adapta a um diálogo centralizado.
   - Entradas de formulário configuradas com `font-size: 16px` para evitar o auto-zoom do Safari iOS.
4. **Filtros Touch com Momentum:**
   - As categorias dos rituais contam com rolagem horizontal suave (*momentum scrolling*) com centralização ao toque.
5. **Slider Antes / Depois Interativo:**
   - Comparador de transformações capilares com manípulo dourado de 48px e suporte a toque contínuo com `touch-action: pan-y`.

---

## 💎 Estrutura das Seções

1. **Header Fixo / Glassmorphism:** Monograma institucional AURA, menu desktop e drawer mobile.
2. **Hero Section:** Headline *"BELEZA QUE REVELA A SUA MELHOR VERSÃO"*, citação de impacto, CTA duplo e badge de reputação *4.9★ Jardins*.
3. **Seção Conceito & Métricas:** Manifesto editorial e grid oficial (*10+ Anos de História*, *8.000+ Clientes Atendidas*, *22 Especialistas*, *4.9★ Avaliação Jardins*).
4. **Experiências & Rituais Assinados:** Grid com filtros e 6 rituais principais:
   - *Morena Iluminada Signature*
   - *Loiro Couture & Visagismo*
   - *Corte & Escova de Alta Precisão*
   - *Spa Fusio-Dose & Nails Luxury*
   - *Red Carpet Glow & Makeup*
   - *Bridal Suite VIP (Dia da Noiva)*
5. **Atelier Haute Coiffure:** Módulo escuro com os pilares de Balayage Francesa, Mechas Acetinadas, Gloss Couture e Consulta de Coloração.
6. **Transformações Assinadas (Slider Antes / Depois):** Componente interativo comparando antes e depois.
7. **Bridal Suite VIP:** Apresentação da suíte privativa nos Jardins com amenidades exclusivas e atendimento para madrinhas.
8. **O Espaço & Arquitetura Contemporânea:** Galeria com 700m² e a jornada dos 5 passos do atendimento.
9. **Nossos Especialistas:** Corpo de mestres cabeleireiros e visagistas com formação internacional.
10. **Depoimentos & Reputação:** Citações reais de noivas e clientes assíduas dos Jardins.
11. **Agendamento & Concierge Exclusivo:** Formulário com horários de atendimento e serviço de manobrista (*Valet VIP*).
12. **Newsletter AURA Privilège:** Inscrição minimalista com toast de confirmação.
13. **Rodapé Oficial:** Alameda dos Jardins 1420, contatos, horários e copyright 2026.

---

## 📂 Estrutura de Arquivos

```text
aura/asserts/
├── css/
│   └── style.css                 # Design System Mobile-First e animações
├── js/
│   └── main.js                   # Interatividade, touch slider, máscaras e API
├── imagens/                      # 14 imagens AVIF de alta resolução
├── tests/
│   └── audit_docker.py           # Script de auditoria automatizada HTTP e assets
├── .env.example                  # Template de variáveis de produção
├── .gitignore                    # Regras de exclusão Git profissionais
├── .dockerignore                 # Exclusões de contexto Docker
├── Dockerfile                    # Imagem Nginx Alpine otimizada
├── docker-compose.yml            # Orquestração local (Porta 3000)
├── docker-compose.prod.yml       # Orquestração de produção com Certbot SSL (Portas 80/443)
├── nginx.conf                    # Configuração Nginx dev com rotas REST /api
├── nginx.prod.conf               # Configuração Nginx prod com HTTP/2, HSTS e SSL
├── deploy.sh                     # Script de deploy para Linux/VPS
├── deploy.ps1                    # Script de deploy para Windows
├── index.html                    # Estrutura HTML5 com Schema.org e Open Graph
├── DOCUMENTACAO.md               # Documentação técnica e arquitetural viva
├── PASSOS.md                     # Roteiro de fases e status do projeto
├── CONTEXTO.md                   # Contexto de negócio e regras ativas
└── README.md                     # Guia principal do projeto
```

---

## 🚀 Como Executar (100% no Docker)

### Pré-requisitos
- [Docker](https://www.docker.com/) e Docker Compose instalados e em execução.

### 1. Ambiente Local de Desenvolvimento (Porta 3000)
```bash
# Iniciar o contêiner em segundo plano
docker compose up -d --build

# Verificar status do contêiner
docker ps --filter "name=aura-maison-web"

# Acessar no navegador:
# http://localhost:3000
```

### 2. Executar a Auditoria Automatizada
```bash
# Executa a suíte de testes contra o contêiner ativo
python tests/audit_docker.py
```
> O script valida o status `200 OK` de todas as rotas estáticas, das 14 imagens AVIF, do código CSS/JS e dos endpoints REST da API com tempo médio inferior a 40ms.

### 3. Ambiente de Produção com SSL Automático (Portas 80 e 443)
```bash
# 1. Configurar variáveis de produção
cp .env.example .env

# 2. Executar deploy de produção
./deploy.sh
# Ou no Windows:
# powershell -ExecutionPolicy Bypass -File deploy.ps1
```

---

## 🔌 Endpoints REST da API (Docker Nginx)

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| `POST` | `/api/agendamentos` | Registra solicitação de reserva VIP e gera protocolo exclusivo (`AURA-VIP-XXXX`). |
| `POST` | `/api/newsletter` | Inscreve a cliente no seleto Círculo AURA Privilège. |

Ao submeter o agendamento, o sistema monta automaticamente a mensagem estruturada com o protocolo gerado e redireciona a cliente diretamente para o **WhatsApp Oficial do Concierge**: `(11) 3088-9900`.

---

## 📍 Localização & Contato Oficial

- **Endereço:** Alameda dos Jardins, 1420 — Jardins, São Paulo - SP
- **Telefone:** (11) 3088-9900
- **E-mail:** `concierge@aurabeaute.com.br`
- **Cortesia:** Estacionamento privativo com serviço de manobrista (*Valet VIP*).

---
© 2026 **AURA Maison de Beauté**. Todos os direitos reservados.

