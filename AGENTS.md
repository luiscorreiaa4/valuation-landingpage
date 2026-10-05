# Regras de desenvolvimento para Landing Page de Contabilidade

## Princípios
- Foco em conversão para contato (WhatsApp ou formulário).
- Simples primeiro: HTML + CSS + JS puro. Sem React/SPA. Se precisar de componentes, use Astro (HTML estático, JS só onde for interativo).
- Design profissional e que transmita confiança (sugestão: tons de azul, verde, cinza e branco).
- O público-alvo são pequenos empresários, MEIs, autônomos ou pessoas físicas precisando de serviços contábeis e fiscais.

## Código
- HTML semântico (`header`, `main`, `section`, `footer`, `button`, `a`). Um único `h1` por página.
- CSS com variáveis (`:root`), mobile-first, `rem`/`clamp()` para tipografia, sem `!important`.
- JS em módulos pequenos (`type="module"`), `defer`, focado no essencial (menu, máscaras de input, envio de form), sem jQuery.
- Nomes em inglês no código, textos visíveis no idioma do projeto (pt-BR).
- Sem comentários óbvios; comente só o "porquê".

## Performance e qualidade
- Meta: Lighthouse mobile 90+ em todas as categorias.
- Imagens: WebP/AVIF, `width`/`height` definidos, `loading="lazy"` (exceto hero), `alt` descritivo.
- Fontes: no máximo 2 famílias/3 pesos, `font-display: swap`, preferir fontes do sistema ou Google Fonts sóbrias (Inter, Roboto).
- Scripts de terceiros (analytics, pixels) com `defer`/`async`, carregados por último.

## SEO e acessibilidade
- SEO focado no local/nicho: "Contabilidade em [Região]", "Contador para MEI", etc.
- `<title>` e `meta description` únicos, Open Graph, `lang="pt-BR"`, favicon.
- Contraste mínimo AA, foco visível, navegação por teclado.

## Forma de trabalhar pelo Antigravity IDE
- Mudanças pequenas e focadas; não refatore o que não foi pedido.
- Antes de instalar algo, pergunte se dá para resolver sem bibliotecas.
- Ao terminar, diga em 2-3 linhas o que mudou.
