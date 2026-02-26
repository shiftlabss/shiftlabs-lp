-- ShiftLabs Careers schema for Supabase
-- Execute this file in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.careers_roles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  location text not null,
  commitment text not null,
  model text not null,
  area text not null default 'Geral',
  intro text not null,
  role_one_liner text,
  body_markdown text,
  about text[] not null default '{}'::text[],
  responsibilities text[] not null default '{}'::text[],
  requirements text[] not null default '{}'::text[],
  stack text[] not null default '{}'::text[],
  process text[] not null default '{}'::text[],
  why_title text,
  role_title text,
  do_title text,
  bring_title text,
  stack_title text,
  process_title text,
  join_title text,
  join_us text[] not null default '{}'::text[],
  is_published boolean not null default true,
  sort_order integer not null default 100,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_careers_roles_published_sort
  on public.careers_roles (is_published, sort_order, title);

create index if not exists idx_careers_roles_created_at
  on public.careers_roles (created_at desc);

create table if not exists public.careers_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_careers_roles_set_updated_at on public.careers_roles;
create trigger trg_careers_roles_set_updated_at
before update on public.careers_roles
for each row
execute function public.set_updated_at();

alter table public.careers_roles enable row level security;
alter table public.careers_admins enable row level security;

drop policy if exists careers_roles_public_read on public.careers_roles;
create policy careers_roles_public_read
on public.careers_roles
for select
to anon, authenticated
using (is_published = true);

drop policy if exists careers_roles_admin_read_all on public.careers_roles;
create policy careers_roles_admin_read_all
on public.careers_roles
for select
to authenticated
using (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
);

drop policy if exists careers_roles_admin_insert on public.careers_roles;
create policy careers_roles_admin_insert
on public.careers_roles
for insert
to authenticated
with check (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
);

drop policy if exists careers_roles_admin_update on public.careers_roles;
create policy careers_roles_admin_update
on public.careers_roles
for update
to authenticated
using (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
);

drop policy if exists careers_roles_admin_delete on public.careers_roles;
create policy careers_roles_admin_delete
on public.careers_roles
for delete
to authenticated
using (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
);

drop policy if exists careers_admins_admin_read on public.careers_admins;
create policy careers_admins_admin_read
on public.careers_admins
for select
to authenticated
using (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
);

drop policy if exists careers_admins_admin_insert on public.careers_admins;
create policy careers_admins_admin_insert
on public.careers_admins
for insert
to authenticated
with check (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
);

drop policy if exists careers_admins_admin_delete on public.careers_admins;
create policy careers_admins_admin_delete
on public.careers_admins
for delete
to authenticated
using (
  exists (
    select 1
    from public.careers_admins admins
    where admins.user_id = auth.uid()
  )
);

-- Bootstrap: add your first admin user (run once, replacing UUID)
-- insert into public.careers_admins (user_id)
-- values ('REPLACE_WITH_AUTH_USER_UUID')
-- on conflict (user_id) do nothing;

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
) values
  (
    'ai-software-engineer',
    'AI Software Engineer',
    'Belgrade, Serbia & San Francisco, CA',
    'Full-time',
    'On-site',
    'AI research, back-end engineering, and orchestration',
    'We''re looking for an AI Software Engineer to build the intelligence layer of Wonder. You''ll turn research and experimentation into production-ready systems.',
    '## Why Wonder?

Wonder is an AI-native design tool that bridges the gap between idea and experience.

## The Role

We''re looking for an AI Software Engineer to build the intelligence layer of Wonder.

## What you''ll do

- Fine-tune and evaluate models.
- Build and improve context retrieval engines.
- Collaborate with other engineers.

## What we''re looking for

- Strong AI/LLM systems experience.
- Deep understanding of transformers and RAG.
- Backend or infrastructure engineering background.',
    10,
    true
  ),
  (
    'product-strategist',
    'Product Strategist',
    'Remoto, Brasil',
    'Tempo integral',
    'Remoto',
    'Produto',
    'Buscamos alguém para estruturar direção de produto com visão de negócio, pesquisa e entregas orientadas a impacto.',
    '## Sobre a vaga

A função conecta discovery, priorização e execução para transformar produto em sistema de crescimento.

## O que você vai fazer

- Conduzir discovery contínuo.
- Definir estratégia de produto.
- Priorizar roadmap com critérios claros.',
    20,
    true
  ),
  (
    'tech-lead-systems',
    'Tech Lead (Systems)',
    'São Paulo, BR',
    'Tempo integral',
    'Híbrido',
    'Tecnologia',
    'A vaga é para liderança técnica com foco em arquitetura, qualidade de entrega e decisões de engenharia com impacto no negócio.',
    '## Sobre a vaga

Você liderará o desenho técnico das soluções e elevará a barra de engenharia do time.

## O que você vai fazer

- Definir arquitetura escalável.
- Liderar code reviews.
- Mentorar devs e fortalecer cultura técnica.',
    30,
    true
  ),
  (
    'growth-systems-analyst',
    'Growth Systems Analyst',
    'Remoto, Brasil',
    'Tempo integral',
    'Remoto',
    'Growth',
    'Você vai desenhar e operar sistemas de growth com foco em previsibilidade de aquisição, ativação e retenção.',
    '## Sobre a vaga

Posição na interseção entre marketing, produto e vendas para criar mecanismos consistentes de crescimento.

## O que você vai fazer

- Estruturar funis de growth.
- Definir dashboards e métricas.
- Conduzir experimentos de aquisição e conversão.',
    40,
    true
  )
on conflict (slug) do nothing;

