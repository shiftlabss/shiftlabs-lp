insert into public.careers_roles (
  slug,
  title,
  location,
  commitment,
  model,
  area,
  intro,
  body_markdown,
  sort_order,
  is_published
) values (
  'social-media',
  'Social Media',
  'João Pessoa, PB',
  'Tempo integral',
  'Presencial',
  'Growth',
  'Buscamos uma pessoa de Social Media para planejar, produzir e operar calendario de conteudo com foco em distribuicao, posicionamento e geracao de demanda.',
  'Missao do cargo

Voce sera responsavel por transformar estrategia de conteudo em operacao consistente de social media, conectando posicionamento de marca, distribuicao e geracao de demanda em cada canal.

Responsabilidades no dia a dia

- Definir calendario editorial e pautas semanais com foco em consistencia.
- Produzir copy e publicar conteudos em multiplos canais.
- Trabalhar junto com design e video para transformar ideias em pecas de conteudo.
- Acompanhar metricas de alcance, engajamento e geracao de oportunidades.
- Refinar continuamente tom de voz, formatos e rituais de publicacao.
- Organizar aprendizados e decisoes em playbooks de conteudo.

Perfil esperado

- Experiencia com operacao de social media em B2B ou servicos digitais.
- Boa escrita, repertorio criativo e senso estetico.
- Capacidade analitica para aprender com metricas e ajustar estrategia.
- Organizacao para manter constancia de publicacao com qualidade.
- Vivencia pratica com Instagram, LinkedIn e fluxos de producao de conteudo.

O que esperamos nos primeiros 60 a 90 dias

- Estruturar e executar um calendario editorial previsivel.
- Consolidar linha editorial e linguagem da marca nos canais.
- Definir rotina de acompanhamento de metricas e ciclo de otimizacao.
- Evoluir a operacao com playbooks e processos replicaveis.',
  70,
  true
)
on conflict (slug) do update
set
  title = excluded.title,
  location = excluded.location,
  commitment = excluded.commitment,
  model = excluded.model,
  area = excluded.area,
  intro = excluded.intro,
  body_markdown = excluded.body_markdown,
  is_published = true,
  sort_order = excluded.sort_order,
  updated_at = now();
