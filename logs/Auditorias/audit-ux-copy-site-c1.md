# Auditoria UX Copy - Site ShiftLabs - c1

## Escopo

Auditoria de UX Copy em todo o site renderizado localmente:
- Home (`/`)
- Listagem de vagas (`/vagas`)
- Pagina de vaga (`/vagas/desenvolvedor-backend-pleno-ou-senior`)
- Formulario de candidatura (`/vagas/desenvolvedor-backend-pleno-ou-senior/candidatar`)

## Findings

| P | Finding | Qual Agente/Subagente Corrige |
|---|---|---|
| P1 | F-001 - O formulario de candidatura expõe linguagem interna de estrutura ("Bloco 2") tanto no subtitulo visivel quanto na mensagem de erro, o que parece artefato operacional e nao orientacao ao candidato. Evidencia: `src/app/App.tsx:4797`, `src/app/App.tsx:4362`. | `ux-writer` |
| P1 | F-002 - A pergunta aberta final usa tom pressionador e centrado na empresa ("o que a ShiftLabs ganha contratando voce") e o helper logo abaixo fala em "pipeline interno", reduzindo clareza e confianca no fechamento da candidatura. Evidencia: `src/app/App.tsx:4974`, `src/app/App.tsx:4990`. | `ux-writer` |
| P2 | F-003 - O passo 02 da candidatura concatena uma tag visual com texto corrido ("perfil alinhado a /{displayArea}"), vazando sintaxe de UI para a frase e criando leitura truncada. Evidencia: `src/app/App.tsx:4648`. | `ux-writer` |
| P2 | F-004 - Os CTAs principais da home repetem "conhecer mais", texto generico que nao informa a acao seguinte nem o valor do clique, apesar de abrirem o contato. Evidencia: `src/app/App.tsx:2584`, `src/app/App.tsx:3286`. | `growth-experimenter` |
| P2 | F-005 - A marca aparece como "Shift Labs" em trechos centrais enquanto o produto e wordmark usam "ShiftLabs", criando inconsistência de brand voice em areas de alto impacto. Evidencia: `src/app/App.tsx:2572`, `src/app/App.tsx:2744`, `src/app/App.tsx:3104`, `src/app/App.tsx:3247`. | `brand-guardian` |
| P2 | F-006 - A pagina alterna entre portugues e ingles sem criterio explicito em headings e claims centrais, misturando "The Shift Approach", "From chaos to coordinated systems.", "The Business Engineering Framework", "The AI at the table" e "Organizational Intelligence Layer" com conteudo PT-BR. Evidencia: `src/app/App.tsx:2734`, `src/app/App.tsx:2736`, `src/app/App.tsx:2957`, `src/app/App.tsx:3027`, `src/app/App.tsx:3052`. | `brand-guardian` |
| P2 | F-007 - A copy de formulario coleta nome, e-mail e WhatsApp, mas o bloco de submit nao oferece microcopy de privacidade/uso dos dados antes do envio. Evidencia: `src/app/App.tsx:4707`, `src/app/App.tsx:4728`, `src/app/App.tsx:4749`, `src/app/App.tsx:4995`. | `data-privacy-analyst` |
| P2 | F-008 - O erro publico do contato usa linguagem tecnica ("Configuracao de backend indisponivel"), expondo infraestrutura para usuario final em vez de orientar proximo passo. Evidencia: `src/app/App.tsx:2387`. | `ux-writer` |
| P3 | F-009 - A listagem de vagas usa termos de recrutamento mistos e pouco inclusivos para leitura rapida ("Produto, Tech, Growth", "ownership alto") sem explicacao ou padrao PT-BR. Evidencia: `src/app/App.tsx:5882`, `src/app/App.tsx:5900`. | `ux-writer` |
| P3 | F-010 - Placeholders do formulario sao pouco calibrados: o e-mail de exemplo usa "seuemail@exemplo.com" e o campo "LinkedIn ou portfolio" mostra apenas um exemplo de LinkedIn. Evidencia: `src/app/App.tsx:4734`, `src/app/App.tsx:4770`, `src/app/App.tsx:4774`. | `ux-writer` |
| P3 | F-011 - As promessas de retorno sao vagas ("em alguns dias uteis", "Retornaremos em breve"), o que reduz previsibilidade para lead/candidato. Evidencia: `src/app/App.tsx:4662`, `src/app/App.tsx:2417`, `src/app/App.tsx:4454`. | `ux-writer` |
| P3 | F-012 - O CTA de cada card de vaga diz apenas "ver vaga" enquanto o card inteiro ja e clicavel, desperdicando uma oportunidade de microcopy mais orientada a decisao. Evidencia: `src/app/App.tsx:6011`, `src/app/App.tsx:6071`. | `ux-writer` |

## Resumo

Nenhum P0 encontrado. Os riscos mais fortes estao no formulario de candidatura: linguagem interna, tom de triagem e ausencia de microcopy de privacidade. Na home, os principais gaps sao consistencia de marca, criterio de bilingue e CTA generico.
