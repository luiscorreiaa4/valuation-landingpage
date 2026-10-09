# Valuation Contabilidade - Landing Page

Esta é a landing page oficial da **Valuation Contabilidade**, desenvolvida com foco em alta performance, acessibilidade e conversão, direcionando os usuários para atendimento direto via WhatsApp.

## 🚀 Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível e otimizada para SEO.
- **CSS3 Puro**: Estilização com variáveis (`:root`), design mobile-first e tipografia responsiva (`clamp()`).
- **JavaScript (Vanilla)**: Interatividade leve em módulos (alternância de tema, menu mobile, modal e animações de scroll), sem dependência de jQuery ou outras bibliotecas pesadas.
- **Font Awesome**: Ícones para interface.
- **Google Fonts**: Tipografia com *Inter* e *Plus Jakarta Sans*.

## 🌟 Funcionalidades

- **Tema Claro / Escuro (Light/Dark Mode)**: Suporte à preferência de sistema do usuário, com botão para alternância manual (e salvamento em `localStorage`).
- **Design Responsivo**: Layout totalmente adaptável para dispositivos móveis, tablets e telas grandes.
- **Alta Conversão**: Botões (CTAs) estratégicos redirecionando diretamente para o WhatsApp com mensagens prontas.
- **Animações ao Rolar (Scroll Reveal)**: Elementos da página surgem suavemente usando a API de `IntersectionObserver` para melhor performance.
- **LGPD**: Modal de política de privacidade simples e direto.

## 📁 Estrutura de Arquivos

```text
.
├── assets/                 # Logotipos e imagens vetorizadas
├── index.html              # Estrutura principal da página
├── style.css               # Estilos (variáveis, design system e responsividade)
├── main.js                 # Lógica do front-end (tema, menu, modal, animações)
├── README.md               # Este arquivo de documentação
├── BRIEFING.md             # Respostas do briefing inicial de negócios
└── AGENTS.md               # Diretrizes estritas para o desenvolvimento da LP
```

## 🛠️ Como rodar o projeto

Como é um projeto puramente estático (sem Node.js, React ou build steps), é muito simples rodá-lo:

1. Faça o clone do repositório ou baixe os arquivos para a sua máquina.
2. Você pode simplesmente dar um clique duplo no arquivo `index.html` para abrir no navegador.
3. Para uma experiência de desenvolvimento melhor (com hot-reload), recomenda-se usar a extensão **Live Server** no VS Code ou rodar um servidor local em Python (`python -m http.server`).

## 🌐 Deploy (Hospedagem)

O projeto está pronto para ser publicado de forma gratuita e rápida em serviços de hospedagem estática, como:
- **GitHub Pages** (Recomendado no briefing)
- **Netlify**
- **Vercel**

## 💼 Negócios e Regras

As decisões de design, público-alvo (autônomos, profissionais da saúde e ME) e as regras de restrição técnica (foco em performance, zero dependências pesadas) estão documentadas nos arquivos `BRIEFING.md` e `AGENTS.md`. Em caso de futuras manutenções, consulte esses arquivos.
