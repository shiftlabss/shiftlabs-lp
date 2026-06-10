<!--
protocolo-codex-claude:
  tipo: execucao
  ciclo: 1
  audit_origem: ./logs/Auditorias/audit-mobile-uiux-home-c1.md
-->

# Sprint Mobile UI UX Home - c1

SPRINT PRONTA

## Inventario de Origem

| ID | Tipo | Severidade | Titulo | Origem |
| --- | --- | --- | --- | --- |
| F-001 | finding | P1 | Restaurar conversao persistente no header mobile | `src/app/App.tsx:2579`, `src/app/App.tsx:2591`, `src/app/App.tsx:2594` |
| F-002 | finding | P1 | Tornar modal de contato seguro em altura mobile curta | `src/app/App.tsx:3585`, `src/app/App.tsx:3594`, `src/app/App.tsx:3733` |
| F-003 | finding | P2 | Reintroduzir sinal visual do hero no mobile | `src/app/App.tsx:2611`, `src/app/App.tsx:2654` |
| F-004 | finding | P2 | Reduzir fadiga de scroll e melhorar orientacao mobile | `src/app/App.tsx:2754`, `src/app/App.tsx:2761`, `src/app/App.tsx:2870`, `src/app/App.tsx:2893`, `src/app/App.tsx:3190`, `src/app/App.tsx:3237` |
| F-005 | finding | P3 | Ajustar politica de motion para touch/mobile | `src/styles/theme.css:416`, `src/styles/theme.css:426`, `src/styles/theme.css:453`, `src/styles/theme.css:462`, `src/styles/theme.css:562`, `src/styles/theme.css:563` |

## FASE 1 - P1 Conversao e modal (criterio de saida: contato sempre acessivel e formulario sem corte)

### Etapa 1.1 - Corrigir header mobile
- [x] T-001 (F-001, -) - Expor uma acao persistente de contato no header mobile, preservando `/VAGAS` e mantendo layout sem sobreposicao.
      `track=frontend agent=ui-engineer rigor=medium domain=mobile-navigation paths=[src/app/App.tsx] triggers=[header-mobile,conversion-cta] acceptance=[em 390x844 o header mostra logo, vagas e contato ou menu equivalente; todos os targets tem min 44px; nao ha quebra ou overflow]`

### Etapa 1.2 - Corrigir modal mobile
- [x] T-002 (F-002, -) - Aplicar limite de altura, scroll interno e posicionamento seguro no modal de contato para viewports curtos e teclado mobile.
      `track=frontend agent=ui-engineer rigor=medium domain=mobile-dialog paths=[src/app/App.tsx] triggers=[contact-modal,short-viewport] acceptance=[em 390x640 o dialog nao inicia fora da tela; conteudo e botoes permanecem alcancaveis; foco inicial segue visivel]`

## FASE 2 - P2 Hierarquia visual e orientacao (criterio de saida: primeira dobra mais forte e pagina longa mais navegavel)

### Etapa 2.1 - Reintroduzir visual do hero no mobile
- [x] T-003 (F-003, -) - Criar versao mobile leve do visual do hero, preferencialmente com poster/asset estatico ou animacao reduzida, sem prejudicar LCP.
      `track=frontend agent=motion-designer rigor=medium domain=mobile-hero paths=[src/app/App.tsx,src/styles/theme.css] triggers=[hero-media,mobile-first-viewport] acceptance=[em 390x844 a primeira dobra mostra um sinal visual da engenharia ShiftLabs; nao ha borda/quadro indesejado; asset nao causa layout shift perceptivel]`

### Etapa 2.2 - Reduzir fadiga de scroll
- [x] T-004 (F-004, -) - Revisar empilhamento mobile dos blocos longos e adicionar orientacao simples de secao quando necessario.
      `track=frontend agent=ux-auditor rigor=medium domain=mobile-flow paths=[src/app/App.tsx] triggers=[long-scroll,section-orientation] acceptance=[as secoes criticas ficam mais escaneaveis em 390px; pagina longa tem ponto de orientacao/retorno claro; conteudo nao perde densidade estrategica]`

## FASE 3 - P3 Motion mobile (criterio de saida: movimento intencional, calmo e acessivel)

### Etapa 3.1 - Ajustar movimento em touch
- [x] T-005 (F-005, -) - Reduzir ou pausar motion continuo em touch/coarse pointer, preservando `prefers-reduced-motion`.
      `track=frontend agent=motion-designer rigor=light domain=mobile-motion paths=[src/styles/theme.css,src/app/App.tsx] triggers=[marquee,framework-animation,touch-device] acceptance=[em mobile real o movimento nao compete com leitura; em reduced-motion marquee/framework nao animam; desktop preserva intencao visual]`

## Matriz de Cobertura

| Origem | Tarefas |
| --- | --- |
| F-001 | T-001 |
| F-002 | T-002 |
| F-003 | T-003 |
| F-004 | T-004 |
| F-005 | T-005 |

## Validacao

- [x] Browser mobile emulado 390x844 na home
- [x] Browser mobile emulado 390x640 com modal aberto
- [x] Checagem de targets de toque >= 44px
- [x] Checagem de overflow horizontal
- [x] Checagem de reduced motion
- [x] `npm run build`

## Evidencia de Validacao

- Header mobile em 390x844: logo, `/VAGAS` e `Contato` visiveis; todos com 44px de altura.
- Hero mobile em 390x844: bloco visual renderizado com `display: flex`.
- Modal em 390x640: dialog `y=16`, `height=608`, `bottom=624`; formulario com `overflow-y: auto`; acoes `cancelar` e `enviar contato` visiveis.
- Pagina em 390x844: `scrollWidth=390`, `clientWidth=390`, sem overflow horizontal.
- Motion touch: `marqueeAnimation=none`, `frameworkAnimation=none`.
