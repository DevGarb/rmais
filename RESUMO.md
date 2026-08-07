# Resumo do Projeto rmais / RasterMais

> Este arquivo é atualizado a cada sessão de trabalho. Não criar novos arquivos de resumo — sempre editar este.

## Status atual (2026-08-06)

- Marca confirmada: **RasterMais** (rastreamento e proteção veicular). Logo lida e derivada — ver `docs/BRAND.md`.
- Repositório GitHub: https://github.com/DevGarb/rmais (público)
- GitHub Pages: https://devgarb.github.io/rmais/ (build via GitHub Actions, deploy automático a cada push em `main`)
- Pasta local: `C:\Users\K0NF14\Desktop\rmais`
- Stack: React 19 + Vite 8 + Tailwind v4 + React Router. Node local upgradado para v24 LTS (necessário — Vite 8/rolldown exige Node ^20.19 || >=22.12, e a máquina estava em v21.7.1 fora dessa faixa).
- Design system: tokens em 3 camadas (`src/styles/tokens.css`, espelhado em `tokens/brand.tokens.json`), fontes Poppins/Inter/JetBrains Mono self-hosted via @fontsource, tema escuro operacional (default) + tema claro institucional (`[data-theme="light"]`, ainda sem toggle exposto na UI).
- Páginas implementadas: Home (13 seções da narrativa do briefing), Planos (comparativo honesto), Garantia (regulamento), FAQ/Central de Ajuda, Políticas (stub), 404.
- Componentes: Navbar (scroll state + menu mobile full-screen), Footer, Button (3 variantes x 7 estados via CSS), EyebrowPill, FAQAccordion, PricingCard, Reveal (scroll-reveal com IntersectionObserver, respeita `prefers-reduced-motion`), WhatsAppFAB, CookieBanner (LGPD, recusa em 1 clique).
- Simulador de proteção por placa: funcional, mock local determinístico (não consulta FIPE real), com disclaimer visível.
- Testado localmente via `npm run build` + `npm run preview` + Chrome (simulador, Planos, Garantia, navbar) — sem erros de console.

## Decisões de segurança/qualidade tomadas

- `react-router-dom` fixado em 7.18.2. Advisory GHSA-qwww-vcr4-c8h2 (RSC Mode CSRF) ainda sem fix publicado no momento, mas não aplicável: este é um SPA estático servido por GitHub Pages, sem modo RSC/servidor.
- Contraste WCAG validado matematicamente (não só visual) — ver tabela em `docs/BRAND.md`. `signal-600` (cor oficial do laranja do logo) é proibida como texto pequeno no tema claro (3.29:1, reprova AA); usa-se `signal-700` (4.87:1) para texto, mantendo `signal-600` só em UI/gráfico/headline grande.
- Nenhum dado fabricado como se fosse real: StatBar mostra pilares qualitativos (não números falsos), Depoimentos e Cobertura são placeholders explícitos aguardando dado real da operação.

## Backlog priorizado (3 ondas)

### Onda 1 — bloqueia lançamento comercial
| Item | RICE (relativo) | Nota |
| --- | --- | --- |
| Preço real aprovado (substituir valores exemplificativos em `src/data/plans.js`) | Alto | Sem isso o simulador e os planos exibem números fictícios |
| Regulamento jurídico real da garantia (substituir texto de `src/pages/Garantia.jsx`) | Alto | Requer revisão jurídica antes de publicar |
| CNPJ, endereços de lojas, schema.org LocalBusiness completo | Alto | Necessário para SEO local e para credibilidade (Cobertura.jsx) |
| Política de Privacidade e Termos reais (`src/pages/Politica.jsx`) | Alto | LGPD — hoje é só placeholder |
| Número real de WhatsApp (hoje `5500000000000` é placeholder em Navbar/Footer/CTAFinal/WhatsAppFAB) | Alto | Trivial de trocar, mas bloqueia qualquer lead real |

### Onda 2 — eleva conversão
| Item | RICE | Nota |
| --- | --- | --- |
| Simulador por placa com FIPE real (hoje é mock local) | Alto | Maior alavanca de conversão do briefing original |
| Depoimentos reais em vídeo | Médio-alto | Prova social — estrutura já pronta em `Depoimentos.jsx` |
| SLA visual de resposta (linha do tempo com dado real de operação) | Médio | `ComoFunciona.jsx` já tem a estrutura, falta dado auditado |
| Toggle de tema claro/escuro exposto na UI (hoje só via `data-theme` programático) | Médio | Tema claro é o institucional/área logada |
| Mapa de cobertura real (lojas geolocalizadas) | Médio | `Cobertura.jsx` é placeholder |

### Onda 3 — diferenciais de inovação (seção 7 do briefing)
| Item | RICE | Nota |
| --- | --- | --- |
| Certificado digital de garantia verificável | Médio | Estrutura anunciada em `Garantia.jsx`, não implementada |
| Índice de risco por região (RiscoMais) | Médio | Gera SEO orgânico, precisa de fonte de dado de criminalidade |
| Console de frota B2B | Médio | Expande TAM, mais complexo (auth + dashboard) |
| Assistente de cotação conversacional | Baixo-médio | Depende de handoff humano real |
| Modo escolta (compartilhar viagem com família) | Baixo | Feature de app nativo, fora do escopo do site |
| Teste de estresse com 2 marcas fictícias (prova o sistema de tokens) | Baixo | Validação do design system, não bloqueia lançamento |

## Pendências técnicas conhecidas

- Fontes @fontsource importam todos os subsets de idioma (cirílico, grego, devanagari etc.) — funciona (browser só baixa o subset usado via `unicode-range`), mas infla o tamanho do `dist/`. Otimização: trocar para imports `-latin` específicos.
- Nomenclatura de produto (`{{NOME_APP}}`, `{{NOME_SELO}}`, `{{NOME_EQUIPE}}`, `{{NOME_INDICE}}`) tem recomendação em `docs/BRAND.md` mas não foi aprovada/aplicada no código ainda.

## Histórico

- 2026-08-06: Ambiente criado (gh CLI, projeto Vite+React, repositório e Pages publicados, primeiro deploy testado com sucesso).
- 2026-08-06: Recebido briefing completo de marca white-label + logo real da RasterMais. Extraídas cores exatas do PNG (`#F58634` laranja, `#201E1E` preto, `#606062` cinza). Construído design system tokenizado, Home completa (13 seções), páginas de Planos/Garantia/FAQ, SEO básico, LGPD banner. Corrigido bug de ambiente (Node 21.7.1 incompatível com Vite 8/rolldown — upgrade para Node 24 LTS). Testado localmente no Chrome sem erros de console.
