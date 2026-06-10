# Auditoria Mobile UI UX - Home ShiftLabs - c1

## Escopo

Auditoria profunda da home em viewport mobile renderizado localmente:
- URL local: `http://localhost:5173/`
- Viewports inspecionados: 390x844 e 390x640
- Emulacao mobile real via touch/pointer coarse
- Foco: UI, UX, conversao, hierarquia visual, modal, densidade de scroll e motion

## Evidencia de runtime

- Emulacao mobile ativa: `matchMedia("(hover: none) and (pointer: coarse)").matches === true`
- Largura/altura principal: 390x844
- Altura total da pagina: 9647px
- Conteudo `data-reveal` invisivel em mobile real: 0 ocorrencias
- Header mobile renderizado: logo + `/VAGAS`; botao `Contato` com `display: none`
- Hero media mobile: `display: none`
- Modal em 390x640: dialog `y=-11.54`, `height=663.09`, `bottom=651.54`, `overflow-y: visible`

## Findings

| P | Finding | Qual Agente/Subagente Corrige |
|---|---|---|
| P1 | F-001 - O header mobile remove a principal acao de conversao persistente: o botao `Contato` existe no DOM, mas fica oculto em telas pequenas, deixando apenas `/VAGAS` no topo de uma pagina com 9647px de altura. Evidencia: `src/app/App.tsx:2579`, `src/app/App.tsx:2591`, `src/app/App.tsx:2594`. | `ui-engineer` |
| P1 | F-002 - O modal de contato nao e seguro em alturas mobile menores: o dialog e centralizado sem `max-height`/scroll interno e, em 390x640, fica com topo negativo e base alem do viewport. Evidencia: `src/app/App.tsx:3585`, `src/app/App.tsx:3594`, `src/app/App.tsx:3733`. | `ui-engineer` |
| P2 | F-003 - O hero perde todo o sinal visual/animado no mobile porque o bloco de media fica `hidden md:flex`; a primeira dobra fica essencialmente textual, reduzindo impacto de marca e entendimento do produto. Evidencia: `src/app/App.tsx:2611`, `src/app/App.tsx:2654`. | `motion-designer` |
| P2 | F-004 - A experiencia mobile fica longa e densa demais sem mecanismos de orientacao: cards de problema, servicos, metodologia e cases empilham blocos altos em sequencia, enquanto o header nao oferece atalhos de secao. Evidencia: `src/app/App.tsx:2754`, `src/app/App.tsx:2761`, `src/app/App.tsx:2870`, `src/app/App.tsx:2893`, `src/app/App.tsx:3190`, `src/app/App.tsx:3237`. | `ux-auditor` |
| P3 | F-005 - A politica de motion em touch ainda mantem animacoes continuas por padrao: marquee roda indefinidamente e o framework segue com lift/pulse/glow no mobile, o que aumenta ruido visual em uma pagina longa. Evidencia: `src/styles/theme.css:416`, `src/styles/theme.css:426`, `src/styles/theme.css:453`, `src/styles/theme.css:462`, `src/styles/theme.css:562`, `src/styles/theme.css:563`. | `motion-designer` |

## Resumo

Nenhum P0 encontrado. A versao mobile esta funcional, sem overflow horizontal e com targets de toque adequados nos pontos testados, mas ainda nao esta em nivel premium. Os dois riscos prioritarios sao conversao e acessibilidade operacional: o header mobile esconde contato e o modal pode ficar cortado em alturas reais menores, especialmente com barras do navegador ou teclado aberto.
