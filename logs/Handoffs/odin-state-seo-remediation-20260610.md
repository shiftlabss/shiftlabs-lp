# Estado Odin — SEO Remediation — 2026-06-10

## Escopo
Implementar remediacao SEO para a landing page e paginas de vagas da ShiftLabs.

## Findings cobertos
- F-001: HTML por rota dependia de shell SPA generico.
- F-002: canonical e sitemap usavam apex em vez de `www`.
- F-003: `JobPosting` estava incompleto.
- F-004: rotas de vagas removidas nao tinham `noindex` estatico.
- F-005: home e `/vagas` nao tinham H1 semantico.
- F-006: OG/Twitter image usava favicon.
- F-007: titles/metas de rotas precisavam ser especificos.
- F-008: sitemap precisava preservar `lastmod` real quando disponivel.

## Validacao esperada
- `npm run build`
- `npm run seo:verify`
- Inspecao de HTML gerado em `dist/`
