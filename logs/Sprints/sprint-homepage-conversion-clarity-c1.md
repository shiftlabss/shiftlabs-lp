<!--
protocolo-codex-claude:
  tipo: execucao
  ciclo: 1
  audit_origem: null
-->

# Sprint - Home Page Conversion Clarity

## Inventario de Origem

| ID | Tipo | Severidade | Titulo | Origem |
| --- | --- | --- | --- | --- |
| REQ-001 | requisito | - | Criar secao "Como trabalhamos" para explicar o caminho da primeira conversa ate a execucao | conversa + src/app/App.tsx:2942 |
| REQ-002 | requisito | - | Manter a Home 100% em PT-BR, removendo labels e headlines em ingles | conversa + src/app/App.tsx:3160 |
| REQ-003 | requisito | - | Dar mais substancia aos cases para que funcionem como prova, nao so vitrine de marca | conversa + src/app/App.tsx:2998 |
| REQ-004 | requisito | - | Refinar CTA final para ser mais especifico e menos generico | conversa + src/app/App.tsx:3254 |
| REQ-005 | requisito | - | Adicionar CTA discreto de contato no header, preservando /VAGAS e links sociais | conversa + src/app/App.tsx:2512 |

## FASE 1 - Narrativa e copy base (criterio de saida: copy aprovada para implementacao)

### Etapa 1.1 - Definir: narrativa da nova secao e CTAs
- [x] T-001 (REQ-001, REQ-002, REQ-003, REQ-004, -) - Criar brief de copy da Home com textos finais para "Como trabalhamos", traducao dos trechos em ingles, reforco dos cases e CTA final
      `track=marketing agent=content-strategist rigor=medium specialty=content paths=[logs/Handoffs/homepage-copy-brief-c1.md] triggers=[-] acceptance=[brief inclui copy final para nova secao, labels PT-BR, cases e CTA final, com texto pronto para consumo nas tarefas frontend]`

### Etapa 1.2 - Revisar: voz, claims e consistencia de marca
- [x] T-002 (REQ-001, REQ-002, REQ-003, REQ-004, -) - Revisar o brief de copy para manter voz ShiftLabs, evitar claims nao sustentados e preservar consistencia terminologica
      `track=marketing agent=brand-guardian rigor=medium specialty=brand paths=[logs/Handoffs/homepage-copy-brief-c1.md] triggers=[-] dependencias=[T-001] acceptance=[brief revisado declara claims limpos ou pendencias explicitas, mantem ShiftLabs como grafia unica e deixa copy aprovada para implementacao]`

## FASE 2 - Implementacao da Home (criterio de saida: pagina comunica metodo, prova e proximo passo)

### Etapa 2.1 - Inserir: secao "Como trabalhamos"
- [x] T-003 (REQ-001, -) - Inserir a secao "Como trabalhamos" depois do framework e antes de cases, explicando diagnostico estrutural, arquitetura de execucao e implementacao coordenada
      `track=frontend agent=ui-engineer rigor=full domain=ui-bandeira paths=[src/app/App.tsx] triggers=[text:tela-bandeira] dependencias=[T-002] acceptance=[em /, a nova secao aparece entre Framework de Engenharia de Negocios e /cases em desktop e mobile, com tres etapas legiveis e sem deslocar o CTA principal]`

### Etapa 2.2 - Ajustar: copy PT-BR e CTA final
- [x] T-004 (REQ-002, REQ-004, -) - Substituir trechos em ingles e refinar o CTA final com copy especifica para conversao
      `track=frontend agent=ux-writer rigor=full domain=copy+ui-bandeira paths=[src/app/App.tsx] triggers=[text:tela-bandeira] dependencias=[T-002] acceptance=[a Home renderizada nao exibe "What makes us different", "Ready to structure what you’re building?" nem "/Call to Action", e o CTA final usa texto aprovado no brief]`

### Etapa 2.3 - Reforcar: cases como prova
- [x] T-005 (REQ-003, -) - Atualizar o bloco de cases para incluir resultado, contexto e conexao com a capacidade da ShiftLabs em cada case
      `track=frontend agent=ui-engineer rigor=full domain=ui-bandeira paths=[src/app/App.tsx] triggers=[text:tela-bandeira] dependencias=[T-002] acceptance=[cada case renderiza pelo menos um contexto, um resultado/efeito e uma conexao com produto, tecnologia, growth ou operacao, sem overflow em mobile]`

### Etapa 2.4 - Adicionar: CTA de contato no header
- [x] T-006 (REQ-005, -) - Adicionar CTA discreto de contato no header usando o fluxo existente de abertura do modal, preservando /VAGAS e links sociais
      `track=frontend agent=ui-engineer rigor=full domain=ui-bandeira+a11y paths=[src/app/App.tsx] triggers=[text:tela-bandeira] acceptance=[header exibe CTA de contato acionando o modal existente, preserva o link /VAGAS, mantem links sociais acessiveis e nao quebra responsividade]`

## FASE 3 - Validacao e defesa contra regressao (criterio de saida: mudancas verificaveis em build e browser)

### Etapa 3.1 - Validar: acessibilidade dos novos controles e secoes
- [x] T-007 (REQ-001, REQ-005, -) - Validar foco, teclado, contraste e semantica das novas secoes e do CTA de contato no header
      `track=frontend agent=a11y-specialist rigor=full domain=a11y+ui-bandeira paths=[src/app/App.tsx] triggers=[text:tela-bandeira] dependencias=[T-003,T-006] acceptance=[Tab alcanca /VAGAS, CTA de contato e CTA final com foco visivel, contraste dos textos e botoes novos atende WCAG AA e headings mantem hierarquia coerente]`

### Etapa 3.2 - Proteger: verificacao automatizada de copy da Home
- [x] T-008 (REQ-002, REQ-004, -) - Atualizar a verificacao de UX Copy para falhar se a Home voltar a exibir os trechos antigos em ingles ou perder a nova secao
      `track=frontend agent=ux-auditor rigor=full domain=tests+ui-bandeira paths=[scripts/verify-ux-copy.mjs,src/app/App.tsx] triggers=[text:tela-bandeira] dependencias=[T-003,T-004] acceptance=[npm run ux-copy:verify passa com a nova Home e falha se retornarem "What makes us different", "Ready to structure what you’re building?" ou se a secao "Como trabalhamos" sumir]`

## Matriz de Rigor

| Tarefa | Track | Rigor | Domain | Paths | Triggers |
| --- | --- | --- | --- | --- | --- |
| T-001 | marketing | medium | content | logs/Handoffs/homepage-copy-brief-c1.md | - |
| T-002 | marketing | medium | brand | logs/Handoffs/homepage-copy-brief-c1.md | - |
| T-003 | frontend | full | ui-bandeira | src/app/App.tsx | text:tela-bandeira |
| T-004 | frontend | full | copy+ui-bandeira | src/app/App.tsx | text:tela-bandeira |
| T-005 | frontend | full | ui-bandeira | src/app/App.tsx | text:tela-bandeira |
| T-006 | frontend | full | ui-bandeira+a11y | src/app/App.tsx | text:tela-bandeira |
| T-007 | frontend | full | a11y+ui-bandeira | src/app/App.tsx | text:tela-bandeira |
| T-008 | frontend | full | tests+ui-bandeira | scripts/verify-ux-copy.mjs, src/app/App.tsx | text:tela-bandeira |

## Matriz de Orquestracao Agentica

| Tarefa | Track | Lider | Sub-agente (`agent=`) | Rigor |
| --- | --- | --- | --- | --- |
| T-001 | marketing | $bragi | content-strategist | medium |
| T-002 | marketing | $bragi | brand-guardian | medium |
| T-003 | frontend | $freya | ui-engineer | full |
| T-004 | frontend | $freya | ux-writer | full |
| T-005 | frontend | $freya | ui-engineer | full |
| T-006 | frontend | $freya | ui-engineer | full |
| T-007 | frontend | $freya | a11y-specialist | full |
| T-008 | frontend | $freya | ux-auditor | full |

## Matriz de Cobertura

| Origem | Tipo | Tarefas | Status |
| --- | --- | --- | --- |
| REQ-001 | requisito | T-001, T-002, T-003, T-007 | coberto |
| REQ-002 | requisito | T-001, T-002, T-004, T-008 | coberto |
| REQ-003 | requisito | T-001, T-002, T-005 | coberto |
| REQ-004 | requisito | T-001, T-002, T-004, T-008 | coberto |
| REQ-005 | requisito | T-006, T-007 | coberto |

## Matriz PR-06

| Tarefa | Origem | RN/Spec | Status |
| --- | --- | --- | --- |
| T-001 | REQ-001, REQ-002, REQ-003, REQ-004 | Pedido do usuario | rastreavel |
| T-002 | REQ-001, REQ-002, REQ-003, REQ-004 | Pedido do usuario | rastreavel |
| T-003 | REQ-001 | Pedido do usuario | rastreavel |
| T-004 | REQ-002, REQ-004 | Pedido do usuario | rastreavel |
| T-005 | REQ-003 | Pedido do usuario | rastreavel |
| T-006 | REQ-005 | Pedido do usuario | rastreavel |
| T-007 | REQ-001, REQ-005 | Pedido do usuario | rastreavel |
| T-008 | REQ-002, REQ-004 | Pedido do usuario | rastreavel |

## Veredito

SPRINT PRONTA
