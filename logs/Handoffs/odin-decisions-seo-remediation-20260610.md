# Decisoes do Odin — SEO Remediation — 2026-06-10

## Contexto
- Projeto: shiftlabs-lp
- Modo: gates=auto
- Pedido: orquestrar agenticamente e implementar localmente a sprint SEO derivada da auditoria Bragi.

## Decisoes
1. Executar a remediacao localmente neste ciclo.
   - Motivo: o usuario pediu implementacao aqui mesmo.
   - Reversibilidade: medium.

2. Separar trabalho entre Freya e Bragi.
   - Freya: semantica H1, metadados runtime, build e regressao visual.
   - Bragi/SEO: canonical, sitemap, robots, paginas HTML estaticas e dados estruturados.
   - Reversibilidade: high.

3. Usar `https://www.shiftlabs.digital` como dominio canonico.
   - Motivo: producao validada no dominio `www`; sitemap/canonical no apex criavam duplicidade.
   - Reversibilidade: low.

4. Nao executar commit, push ou deploy neste ciclo.
   - Motivo: o pedido atual solicitou implementacao da sprint, nao publicacao.
   - Reversibilidade: high.
