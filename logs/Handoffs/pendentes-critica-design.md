# Pendentes — crítica de design da landing (2026-10-05)

Method: dual-agent (A: revisão de design · B: detector + navegador)

## Recorte
- Máquina: Mac local (hostname 192.168.0.8)
- Sessão: [SEM-ID: transporte]
- Fontes lidas: src/app/App.tsx (seções, modal, vagas, rotas), src/styles/theme.css, vercel.json, dist/vagas, páginas /, /vagas, /vagas/tech-lead-systems em 1440 e 390 (localhost:5173), impeccable detect (CLI + navegador), logs/Sprints/sprint-homepage-conversion-clarity-c1.md, logs/Handoffs/odin-decisions-homepage-conversion-clarity-20260610.md
- Não alcança: produção shiftlabs.digital não aberta; formulário não enviado; tablet 768, zoom 200% e leitor de tela real não testados

## Heurísticas (17/32 — Aceitável; n/a: 7, 10)
1 Visibilidade 2 · 2 Mundo real 2 · 3 Controle 3 · 4 Consistência 2 · 5 Prevenção 2 · 6 Reconhecimento 3 · 7 n/a · 8 Estética 2 · 9 Recuperação 1 · 10 n/a

## Especificidade
Visual autoral (~70%): grade exposta com marcas calculadas por coluna, ilustrações isométricas com destaque lime, wordmark com glifo inclinado. Narrativa e texto intercambiáveis: roteiro padrão de agência, sem número/nome/artefato. Detector: CLI 0 (não lê style inline do JSX); navegador 33 ocorrências, 7 falsos positivos; reais = entrelinha 1,02–1,25 em 16 parágrafos e transição de layout do header.

## Findings
| P | Finding | Ação | Como Resolve | Quem Resolve |
| --- | --- | --- | --- | --- |
| P1 | CTA "Iniciar diagnóstico" abre formulário genérico de 5 campos, sem explicar diagnóstico; prazos contraditórios (App.tsx:2472 vs 3718); erro sem canal alternativo; foco escapa; borda 1,27:1. Estado: aberta. | Código | Renomear CTA, WhatsApp ou e-mail, textarea de contexto, 3 passos antes do envio, prazo único, e-mail no erro, foco preso. /impeccable clarify + harden | Freya (ux-writer + a11y-specialist); duração/custo: Fernando |
| P1 | Sem prova: nenhum número, depoimento ou equipe; relação com Menux/Cortex/Atom/Aura não declarada; "Efeito" descreve função; painel de logo morto no mobile. Estado: aberta. | Documento | Fernando fornece métricas reais e relação com marcas; trocar painel por artefato do case; faixa de fundadores. | Fernando (insumo) → Bragi (content-strategist) |
| P1 | Frase-tese do marquee cortada em toque e movimento reduzido ("Muita gente melhor…") — theme.css:542-571, App.tsx:3401-3431. Estado: decidida. | Código | Frase como título estático em duas linhas; marquee só decorativo. /impeccable layout | Freya (ui-engineer) |
| P1 | Fallback de vagas inclui vaga de terceiro (Wonder, App.tsx:2047-2055) e alimenta JSON-LD; slug inexistente cai na lista; rota inexistente renderiza a home (vercel.json). Produção não verificada. Estado: decidida. | Código | Estado vazio no lugar do fallback, remover Wonder, "vaga encerrada" para slug desconhecido. /impeccable harden | Freya (ui-engineer) |
| P2 | Hierarquia invertida: H1 40px vs H2 64px; H1 contradiz subtítulo; oferta em 4 taxonomias; "Para quem" após cases. Estado: aberta. | Código | H1 no maior degrau, fundir interseções e serviços, subir "Para quem". /impeccable distill + typeset | Fernando aprova narrativa → Freya (ui-engineer) |
| P3 | Menores: entrelinha 1,02–1,25 (16 parágrafos); "/CALL TO ACTION" em /vagas; "1 oportunidades"; "Segunda à Sexta"/"Whatsapp/Email"; títulos de card como <p>; rodapé sem landmark; vídeo decorativo anunciado; header condensado arredondado. Estado: decidida. | Código | Corrigir em lote. /impeccable polish | Freya (ui-engineer + ux-writer) |

## Melhorias
| M | Melhoria | Ação | Ganho | Pilar | Quem Resolve |
| --- | --- | --- | --- | --- | --- |
| M2 | Faixa do Framework™ com ícones pulsando é o trecho mais genérico. Origem: revisão A. | Código | Diagrama próprio ligando 5 camadas aos 3 passos vira prova de método. | uiux | Freya (ui-engineer) |
| M3 | Desktop sem navegação interna (mobile tem). Origem: revisão A. | Código | Atalho para Serviços, Cases, Contato. | uiux | Freya (ui-engineer) |
| M2 | App.tsx de 6,9 mil linhas; node_modules e dist no Git (faltava @supabase/supabase-js). Origem: esta sessão. | Código | Componentes por seção e build confiável. | arquitetura | Thor (infra-engineer) |

## Personas
Jordan: hero não diz se é serviço, software ou participação; logos sem relação; sem preço/formato/duração. Riley: slug antigo cai na lista sem aviso; "1 oportunidades"; cases sem teclado. Casey: home ~12 telas; header+nav 14% fixos sem Contato; teclado abre no modal; erro fora da tela.

## Perguntas
1. Se o visitante lembrar de uma frase, qual deveria ser? 2. Menux/Cortex/Atom/Aura são negócios da casa? 3. O que acontece num diagnóstico?

## Atualização 2026-10-05 — itens 2 (mensagem e hierarquia) e 3 (ajustes menores) executados

Fernando escolheu os itens 2 e 3 e informou que Menux, Cortex, Atom e Aura são negócios próprios.

Resolvidos (conferidos em 360–1920 px, detector 0 achados, `npm run ux-copy:verify` OK, build OK):
- P1 frase-tese: letreiro animado trocado por frase fixa em duas linhas (theme.css sem regras de marquee).
- P2 hierarquia: H1 48 px (maior degrau, 2 linhas em todas as larguras), "Do caos…" para 40 px, subtítulo sem contradição, áreas fundidas no cabeçalho de serviços, "Para quem" logo após o Problema.
- P3 lote: entrelinha 1,4 nos 18 parágrafos apertados, "/Próximo passo" em /vagas, plural de oportunidade, "Segunda a sexta", "WhatsApp"/"E-mail", títulos de card como h2/h3, rodapé como `<footer>` fora do `<main>`, vídeo decorativo `aria-hidden`, cabeçalho compacto sem cantos arredondados.
- P1 prova (parcial): relação declarada ("/Negócios próprios", "Plataformas e operações próprias").

Continuam abertos:
| Tipo | P | Descrição | Ação | Como Resolve | Quem Resolve |
| --- | --- | --- | --- | --- | --- |
| Finding | P1 | Formulário do diagnóstico genérico, sem reasseguramento nem canal alternativo no erro | Código | Renomear CTA, WhatsApp ou e-mail, campo de contexto, 3 passos antes do envio, prazo único, foco preso | Freya (ux-writer + a11y-specialist); duração/custo: Fernando |
| Finding | P1 | Cases sem resultado medido (só função) | Documento | Fernando fornece 1–2 métricas reais por negócio; depois o texto dos cases é reescrito | Fernando (insumo) → Bragi (content-strategist) |
| Finding | P1 | Fallback de vagas mostra vaga de terceiro (Wonder) e alimenta JSON-LD; slug inexistente sem aviso | Código | Estado vazio, remover Wonder, aviso de vaga encerrada | Freya (ui-engineer) |
| Melhoria | M2 | Faixa do Framework™ genérica | Código | Diagrama próprio ligando camadas e passos | Freya (ui-engineer) |
| Melhoria | M3 | Desktop sem navegação interna | Código | Atalhos para Serviços, Cases e Contato | Freya (ui-engineer) |
| Melhoria | M2 | App.tsx de 6,9 mil linhas; node_modules e dist no Git | Código | Componentes por seção; tirar os dois do Git | Thor (infra-engineer) |

## Atualização 2026-10-06 — leitura de fontes, tamanhos e cores (somente diagnóstico)

### Recorte
- Máquina: MacMini Lucas (192.168.0.8)
- Sessão: 47ac17dc-36c6-44f9-afca-927425a4b6d6
- Fontes lidas: src/styles/theme.css, src/styles/index.css, src/styles/tailwind.css, index.html, src/app/App.tsx (contagem por grep + trechos), `git diff` e `git show HEAD` dos mesmos arquivos, página / em localhost:5173 medida em 1440 e 360 px (estilos computados, Tab no teclado)
- Não alcança: iPhone real (zoom ao focar campo não reproduzido em aparelho), Windows e Android (fonte de sistema não vista lá), modal aberto, /vagas, produção. A árvore tem mudança não commitada em curso por outra sessão (servidor em 5173).

### Findings
| P | Finding | Ação | Como Resolve | Quem Resolve |
| --- | --- | --- | --- | --- |
| P2 | Hierarquia achatada: H1 do hero e os 11 H2 têm 32 px fixos em qualquer largura (App.tsx:2642-2644, 2686, 2735, 2892, 2939, 3099, 3170, 3316, 3376, 3396). Em 1440 px o H1 tem o mesmo tamanho dos H2; em 360 px ocupa 4 linhas. No HEAD era 28/36/40. Estado: aberta. 🅾️ **Recomendação:** H1 30→44→52 e H2 26→32→40 por largura · **Motivo:** devolve o degrau do H1 e encurta títulos no celular sem perder a uniformidade dos H2 | Código | Dar ao título principal um tamanho maior que o das seções e reduzir os títulos no celular | Lucas (decide direção) → Freya (ui-engineer) |
| P2 | 19 campos de formulário com fonte de 14 px (App.tsx:3667-3743, 4869-4930, 5134, 5500-5708). O Safari do iPhone amplia a página ao focar campo abaixo de 16 px. Estado: decidida | Código | Subir a fonte dos campos para 16 px; o formulário deixa de dar zoom ao tocar | Freya (ui-engineer) |
| P2 | Anel de foco quase invisível: `outline-ring/50` (theme.css:129) com `--ring` cinza (theme.css:30) dá cor cinza a 50% sobre o creme, cerca de 1,5:1; medido no Tab: `auto 1px oklab(0.708 0 0 / 0.5)`. Só 5 elementos têm foco próprio. Estado: decidida | Código | Trocar o anel por #101700 sem transparência; quem navega por teclado passa a ver onde está | Freya (a11y-specialist) |
| P2 | Borda dos campos #d6dace sobre #f2f3ef = 1,27:1; o campo precisa de 3:1 para ser reconhecido (WCAG 1.4.11). Mesmo item citado no P1 do formulário de 05/10. Estado: decidida | Código | Usar #878c74 (3,12:1) só na borda de campo; linhas da grade continuam #d6dace | Freya (ui-engineer) |

### Melhorias
| M | Melhoria | Ação | Ganho | Pilar | Quem Resolve |
| --- | --- | --- | --- | --- | --- |
| M2 | ~500 cores fixas em hex no App.tsx (161 `border-[#d6dace]`, 127 `text-[#5f644c]`, 113 `text-[#101700]`); tokens do theme.css são padrão shadcn, sem uso, e o texto base herda #252525 em vez de #101700 (theme.css:9) | Código | 8 tokens da marca (tinta, apoio, linha, papel, superfície, acento, lime, erro) mudam a cor num lugar só | uiux | Freya (ui-engineer) |
| M2 | 19 tamanhos de fonte com degraus vizinhos quase iguais (12/13, 14/15, 24/25, 28/30/32) | Código | Escala de 8 degraus (12, 14, 16, 18, 24, 32, 40, 52) dá ritmo e tira decisão por elemento | uiux | Freya (ui-engineer) |
| M3 | 10 valores de entrelinha (normal, 1,03 a 1,45); títulos de várias linhas em `normal` | Código | Três valores: título 1,1, rótulo 1,3, corpo 1,45 | uiux | Freya (ui-engineer) |
| M3 | Fontes do sistema (theme.css:5-6) mudam a cara da página entre Mac, Windows e Android | Código | Se a consistência importar, uma única família variável com subconjunto latino e preload | uiux | Lucas (decide) → Freya (ui-engineer) |
