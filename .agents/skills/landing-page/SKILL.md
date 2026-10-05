---
name: landing-page
description: Cria landing pages rápidas, acessíveis e focadas em conversão com HTML/CSS/JS puro (ou Astro). Use sempre que o usuário pedir uma landing page, página de captura ou site para o escritório de contabilidade.
---

# Landing page de Contabilidade (Padrão Ouro)

## Antes de codar (responda em silêncio, pergunte só o que faltar)
1. Qual é a **única ação** que o visitante deve fazer? (Ex: Chamar no WhatsApp, agendar consultoria, pedir orçamento).
2. Como podemos destacar que é um atendimento próximo, humano e sem intermediários (sendo 1 ou 2 contadores)?
3. Quais os principais serviços ou nicho de atuação? (Ex: Foco em MEI, serviços de IRPF, clínicas médias, etc).

## Estrutura da página (ordem recomendada)
1. **Hero**: Título com a promessa principal (ex: "Sua contabilidade em dia e sem estresse"), subtítulo explicando para quem é, CTA principal (WhatsApp), imagem profissional (do contador ou ambiente de negócios).
2. **Prova social / Diferencial**: "Atendimento direto pelo contador", avaliação de clientes ou números do escritório.
3. **Nossos Serviços**: 3 a 6 serviços descritos de forma simples (Abertura de Empresa, Imposto de Renda, Gestão Mensal). Foco no benefício (ex: "Não pague impostos a mais").
4. **Sobre o Contador**: Breve perfil do(s) contador(es) responsável(is), destacando o registro (CRC), experiência e a proximidade no atendimento.
5. **FAQ**: Dúvidas comuns de quem procura um contador (ex: "Demora para abrir o CNPJ?", "Vocês atendem MEI?").
6. **Rodapé e CTA final**: Repita a ação principal do hero + CTA do WhatsApp flutuante, endereço, e-mail, redes sociais e selo do conselho de classe.

## Implementação
- Um arquivo `index.html`, `style.css` e `main.js`. Sem build, sem framework (ou Astro se necessário).
- CSS crítico simples; layout com Grid/Flexbox; mobile-first.
- Design: Cores que transmitam segurança e seriedade (Azul, Verde, Tons de cinza).
- CTA sempre visível (ex: "Falar com o contador agora").
- JS só para o que for necessário (menu mobile, FAQ, redirecionamento do WhatsApp).
- Evitar jargões contábeis complexos; falar a língua do empreendedor.

## Checklist final
- [ ] Um `h1` e hierarquia correta de títulos
- [ ] Formulário/WhatsApp com CTA claro
- [ ] Design otimizado para celulares (onde a maioria dos clientes pequenos chegam)
- [ ] `title` e tags SEO locais inclusas
