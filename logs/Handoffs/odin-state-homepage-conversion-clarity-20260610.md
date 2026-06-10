# Odin State - Homepage Conversion Clarity

Iniciado: 2026-06-10T15:43:23Z
Atualizado: 2026-06-10T15:56:47Z
Pedido: orquestrar agenticamente a execução da sprint da Home Page.
Modo de gates: auto

## Sprint

- `logs/Sprints/sprint-homepage-conversion-clarity-c1.md`
- Estado: concluída localmente
- Tarefas: T-001..T-008

## Plano executado

### Fase 1 - Narrativa e copy base

- [x] T-001 - `content-strategist` criou `logs/Handoffs/homepage-copy-brief-c1.md`.
- [x] T-002 - `brand-guardian` revisou o brief e aprovou a copy para implementação.

### Fase 2 - Implementação da Home

- [x] T-003 - Nova seção `/Como trabalhamos` inserida entre framework e cases.
- [x] T-004 - Trechos em inglês removidos e CTA final refinado.
- [x] T-005 - Cases Menux e Cortex reforçados com contexto, efeito e capacidade.
- [x] T-006 - CTA `Contato` adicionado ao header em viewport `sm+`, acionando o modal existente.

### Fase 3 - Validação e defesa contra regressão

- [x] T-007 - A11y focal ajustada após veredito inicial `AJUSTE-NECESSARIO`: headings `h2`, foco visível e estados dos CTAs.
- [x] T-008 - `scripts/verify-ux-copy.mjs` protege nova seção, CTA e remoção dos trechos antigos em inglês.

## Evidências

- `npm run ux-copy:verify` passou.
- `npm run build` passou.
- Browser desktop: Home contém `/Como trabalhamos`, CTA `Contato`, `/Próximo passo`, `iniciar diagnóstico`, 1 `h1`, múltiplos `h2` e nenhum texto antigo em inglês.
- Browser mobile 390x844: sem overflow horizontal, nova seção e CTA final presentes.
- Teclado desktop: Tab alcança logo, `Contato` e `/VAGAS`; Enter em `Contato` abre o modal `Formulário de contato` e move foco para input.

## Decisões do Odin

- Log completo: `logs/Handoffs/odin-decisions-homepage-conversion-clarity-20260610.md`

## Pendências

- Não houve commit, push ou deploy nesta execução.
- O CTA `Contato` do header fica oculto abaixo de `sm` por decisão responsiva para preservar densidade do header mobile; o CTA principal e o CTA final continuam disponíveis em mobile.
