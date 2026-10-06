# Pendentes — Supabase da landing fora do ar (2026-10-06)

## Recorte
- Máquina: Mac local (shiftlabs)
- Fontes lidas: `dig` local para cjoyxelowsfkhgswkipd.supabase.co (sem resposta; github.com e supabase.co respondem), build local, log de build da Vercel do deploy Gam13B9hs (projeto shiftlabs, branch home-hairline-nav-footer, commit 1fddc8b), src/app/App.tsx:28-30 e formulário `contact_leads`
- Não alcança: painel do Supabase (o conector não tem permissão no projeto); não enviei formulário em produção; variáveis de ambiente de produção da Vercel não abertas

## Findings
| P | Finding | Ação | Como Resolve | Quem Resolve |
| --- | --- | --- | --- | --- |
| P0 | O endereço do Supabase do site (cjoyxelowsfkhgswkipd.supabase.co) não existe no DNS, nem local nem no build da Vercel. O formulário de contato grava em `contact_leads` nesse projeto (App.tsx:28-30), e as vagas e candidaturas também dependem dele. Pedidos de contato e candidaturas provavelmente se perdem hoje. Estado: aberta. | Acesso externo | Entrar no painel do Supabase da conta dona do projeto e reativar o projeto, se estiver pausado, ou criar um novo com as tabelas `contact_leads` e `careers_roles`. Depois, apontar `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` nas variáveis da Vercel e testar um envio. 🅾️ **Recomendação:** reativar o projeto existente · **Motivo:** preserva os leads e vagas já gravados | Fernando |
