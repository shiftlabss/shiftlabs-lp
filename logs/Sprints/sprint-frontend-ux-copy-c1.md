<!--
protocolo-codex-claude:
  tipo: execucao
  ciclo: 1
  audit_origem: ./logs/Auditorias/audit-ux-copy-site-c1.md
-->

# Sprint Frontend UX Copy - c1

SPRINT PRONTA

## Inventario de Origem

| ID | Tipo | Severidade | Titulo | Origem |
| --- | --- | --- | --- | --- |
| F-001 | finding | P1 | Remover linguagem interna "Bloco 2" da candidatura | `src/app/App.tsx:4797`, `src/app/App.tsx:4362` |
| F-002 | finding | P1 | Reescrever pergunta final e helper da candidatura | `src/app/App.tsx:4974`, `src/app/App.tsx:4990` |
| F-003 | finding | P2 | Corrigir frase do passo 02 da candidatura | `src/app/App.tsx:4648` |
| F-004 | finding | P2 | Tornar CTAs principais da home especificos | `src/app/App.tsx:2584`, `src/app/App.tsx:3286` |
| F-005 | finding | P2 | Normalizar naming ShiftLabs | `src/app/App.tsx:2572`, `src/app/App.tsx:2744`, `src/app/App.tsx:3104`, `src/app/App.tsx:3247` |
| F-006 | finding | P2 | Definir criterio de bilingue nos headings | `src/app/App.tsx:2734`, `src/app/App.tsx:2736`, `src/app/App.tsx:2957`, `src/app/App.tsx:3027`, `src/app/App.tsx:3052` |
| F-007 | finding | P2 | Adicionar microcopy de privacidade antes do envio | `src/app/App.tsx:4707`, `src/app/App.tsx:4728`, `src/app/App.tsx:4749`, `src/app/App.tsx:4995` |
| F-008 | finding | P2 | Humanizar erro tecnico do contato | `src/app/App.tsx:2387` |
| F-009 | finding | P3 | Ajustar termos mistos na listagem de vagas | `src/app/App.tsx:5882`, `src/app/App.tsx:5900` |
| F-010 | finding | P3 | Melhorar placeholders do formulario | `src/app/App.tsx:4734`, `src/app/App.tsx:4770`, `src/app/App.tsx:4774` |
| F-011 | finding | P3 | Dar previsibilidade aos retornos | `src/app/App.tsx:4662`, `src/app/App.tsx:2417`, `src/app/App.tsx:4454` |
| F-012 | finding | P3 | Melhorar CTA dos cards de vaga | `src/app/App.tsx:6011`, `src/app/App.tsx:6071` |

## FASE 1 - P1 Candidatura (criterio de saida: formulario sem linguagem interna e com tom humano)

### Etapa 1.1 - Reescrever: bloco de perguntas da candidatura
- [x] T-001 (F-001, -) - Substituir "Bloco 2" por uma orientacao clara sobre perguntas de alinhamento inicial, incluindo a mensagem de erro correspondente.
      `track=frontend agent=ux-writer rigor=medium domain=ux-copy paths=[src/app/App.tsx] triggers=[formulario-candidatura] acceptance=[nenhum texto visivel ou erro usa "Bloco 2"; candidatos entendem que sao perguntas de alinhamento inicial]`

### Etapa 1.2 - Reescrever: pergunta aberta e helper
- [x] T-002 (F-002, -) - Trocar a pergunta aberta final por copy centrada em impacto, experiencia e motivacao, removendo "pipeline interno" do helper.
      `track=frontend agent=ux-writer rigor=medium domain=ux-copy paths=[src/app/App.tsx] triggers=[formulario-candidatura] acceptance=[pergunta final nao soa pressionadora; helper informa uso da resposta ou proximo passo em linguagem externa]`

## FASE 2 - P2 Clareza e confianca (criterio de saida: fluxos principais sem jargao operacional)

### Etapa 2.1 - Corrigir: passos da candidatura
- [x] T-003 (F-003, -) - Reescrever o passo 02 para remover a barra de area e explicar a revisao do perfil com frase natural.
      `track=frontend agent=ux-writer rigor=light domain=ux-copy paths=[src/app/App.tsx] triggers=[formulario-candidatura] acceptance=[passo 02 renderiza frase gramatical e sem prefixo "/"]`

### Etapa 2.2 - Especificar: CTAs principais
- [x] T-004 (F-004, -) - Substituir "conhecer mais" por CTAs que indiquem a proxima acao real do contato.
      `track=marketing agent=growth-experimenter rigor=medium domain=conversion-copy paths=[src/app/App.tsx] triggers=[home-cta] acceptance=[CTA principal comunica acao e valor; dois pontos da home mantem consistencia]`

### Etapa 2.3 - Normalizar: nome da marca
- [x] T-005 (F-005, -) - Padronizar mencoes textuais para "ShiftLabs" onde a marca e sujeito, preservando apenas casos de produto/nome proprio se houver criterio explicito.
      `track=marketing agent=brand-guardian rigor=light domain=brand-voice paths=[src/app/App.tsx] triggers=[brand-consistency] acceptance=[home nao alterna "Shift Labs" e "ShiftLabs" sem criterio]`

### Etapa 2.4 - Definir: criterio de bilingue
- [x] T-006 (F-006, -) - Consolidar headings em PT-BR ou explicitar padrao bilingue com consistencia entre labels, claims e cases.
      `track=marketing agent=brand-guardian rigor=medium domain=brand-voice paths=[src/app/App.tsx] triggers=[positioning-copy] acceptance=[headings centrais seguem um criterio unico de idioma e nao alternam PT/EN por acaso]`

### Etapa 2.5 - Adicionar: microcopy de privacidade
- [x] T-007 (F-007, -) - Incluir texto curto antes do submit explicando uso dos dados de contato e expectativa de confidencialidade.
      `track=legal agent=data-privacy-analyst rigor=medium domain=privacy-copy paths=[src/app/App.tsx] triggers=[lead-form,candidate-form] acceptance=[formulario informa uso dos dados antes do envio sem bloquear a conversao]`

### Etapa 2.6 - Humanizar: erro tecnico
- [x] T-008 (F-008, -) - Reescrever erro de backend indisponivel para mensagem de usuario final com alternativa de contato.
      `track=frontend agent=ux-writer rigor=light domain=error-copy paths=[src/app/App.tsx] triggers=[contact-form-error] acceptance=[erro nao menciona backend/configuracao e oferece proximo passo claro]`

## FASE 3 - P3 Polish de microcopy (criterio de saida: copy operacional mais previsivel)

### Etapa 3.1 - Ajustar: termos mistos da listagem
- [x] T-009 (F-009, -) - Reescrever "Produto, Tech, Growth" e "ownership alto" para termos consistentes com a voz PT-BR da pagina.
      `track=frontend agent=ux-writer rigor=light domain=ux-copy paths=[src/app/App.tsx] triggers=[careers-hero] acceptance=[cards de contexto da pagina de vagas usam vocabulario claro para candidatos]`

### Etapa 3.2 - Melhorar: placeholders
- [x] T-010 (F-010, -) - Ajustar exemplos de e-mail e portfolio para ficarem realistas e cobrirem LinkedIn ou portfolio.
      `track=frontend agent=ux-writer rigor=light domain=form-copy paths=[src/app/App.tsx] triggers=[candidate-form] acceptance=[placeholders ajudam preenchimento sem parecer texto placeholder cru]`

### Etapa 3.3 - Precisar: prazo de retorno
- [x] T-011 (F-011, -) - Trocar promessas vagas por expectativa concreta de retorno, ou declarar criterio quando prazo nao puder ser garantido.
      `track=frontend agent=ux-writer rigor=light domain=status-copy paths=[src/app/App.tsx] triggers=[contact-form,candidate-form] acceptance=[mensagens de retorno indicam prazo ou regra objetiva de acompanhamento]`

### Etapa 3.4 - Refinar: CTA dos cards de vaga
- [x] T-012 (F-012, -) - Substituir "ver vaga" por microcopy mais orientada a decisao, mantendo concisao.
      `track=frontend agent=ux-writer rigor=light domain=careers-copy paths=[src/app/App.tsx] triggers=[job-card] acceptance=[CTA do card complementa o clique no card e melhora entendimento da acao]`

## Matriz de Cobertura

| Origem | Tarefas |
| --- | --- |
| F-001 | T-001 |
| F-002 | T-002 |
| F-003 | T-003 |
| F-004 | T-004 |
| F-005 | T-005 |
| F-006 | T-006 |
| F-007 | T-007 |
| F-008 | T-008 |
| F-009 | T-009 |
| F-010 | T-010 |
| F-011 | T-011 |
| F-012 | T-012 |

## Validacao

- [x] `npm run ux-copy:verify`
- [x] `npm run build`
- [x] `npm run seo:verify`
- [x] Browser local: candidatura, home e `/vagas` validadas em `http://localhost:5173`
