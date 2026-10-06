# Pendentes — privacidade da landing (2026-10-06)

## Recorte
- Máquina: Mac local (shiftlabs)
- Origem: comparação da home com https://www.cartesia.ai/pt, que tem Termos, Privacidade, Uso aceitável e Configurações de cookies no rodapé
- Fontes lidas: src/app/App.tsx (formulário de contato), busca por "privacidade|privacy|lgpd" em src, public, index.html e scripts, home em localhost:5173
- Não alcança: produção shiftlabs.digital não aberta; destino dos dados do formulário não verificado

## Findings
| P | Finding | Ação | Como Resolve | Quem Resolve |
| --- | --- | --- | --- | --- |
| P1 | O formulário de contato coleta nome, WhatsApp, e-mail, empresa e assunto (App.tsx, `heroContactForm`), mas o site não tem política de privacidade nem link para ela. A busca por "privacidade", "privacy" e "lgpd" em src, public, index.html e scripts não achou nada. Estado: aberta. | Documento | Redigir a política (quais dados, para quê, por quanto tempo, quem é o controlador e como pedir exclusão), publicá-la numa rota própria e linkar no rodapé e junto do botão de envio. 🅾️ **Recomendação:** Tyr redige a partir do uso real dos dados · **Motivo:** formulário com dado pessoal sem aviso expõe a empresa à LGPD | Fernando (uso dos dados e aprovação) → Tyr (data-privacy-analyst) → Lucas (rota e link) |
