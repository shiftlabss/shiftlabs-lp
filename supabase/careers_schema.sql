-- ShiftLabs Careers schema for Supabase
-- Execute this file in Supabase SQL Editor.

create extension if not exists pgcrypto;
create extension if not exists unaccent;

create table if not exists public.careers_roles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  display_title text not null default '',
  display_seniority text not null default '',
  display_commitment text not null default '',
  location text not null,
  commitment text not null,
  model text not null,
  area text not null default 'Geral',
  display_area text not null default 'Geral',
  intro text not null,
  card_summary text not null default '',
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

create index if not exists idx_careers_roles_published_sort_display
  on public.careers_roles (is_published, sort_order, display_title);

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

create or replace function public.normalize_search_text(value text)
returns text
language sql
immutable
as $$
  select trim(
    regexp_replace(
      regexp_replace(lower(unaccent(coalesce(value, ''))), '[^a-z0-9\s]+', ' ', 'g'),
      '\s+',
      ' ',
      'g'
    )
  );
$$;

create or replace function public.has_seniority_tokens(value text)
returns boolean
language plpgsql
immutable
as $$
declare
  normalized text := public.normalize_search_text(value);
  tokens text[];
  token text;
  has_level boolean := false;
begin
  if normalized = '' then
    return false;
  end if;

  tokens := regexp_split_to_array(normalized, '\s+');
  if array_length(tokens, 1) is null or array_length(tokens, 1) > 8 then
    return false;
  end if;

  foreach token in array tokens loop
    if token not in (
      'junior', 'jr', 'pleno', 'senior', 'especialista', 'lead', 'lider', 'mid', 'middle',
      'nivel', 'i', 'ii', 'iii', 'iv', 'v', 'ou', 'e', 'de'
    ) then
      return false;
    end if;
    if token in ('junior', 'jr', 'pleno', 'senior', 'especialista', 'lead', 'lider', 'mid', 'middle') then
      has_level := true;
    end if;
  end loop;

  return has_level;
end;
$$;

create or replace function public.strip_role_seniority_suffix(raw_title text)
returns text
language plpgsql
immutable
as $$
declare
  trimmed text := btrim(coalesce(raw_title, ''));
  separator_match text[];
  parenthetical_match text[];
begin
  if trimmed = '' then
    return trimmed;
  end if;

  separator_match := regexp_match(trimmed, '^(.*?)(?:\s[-–—]\s|\s\|\s)([^|]+)$');
  if separator_match is not null and array_length(separator_match, 1) = 2 then
    if public.has_seniority_tokens(separator_match[2]) then
      return btrim(separator_match[1]);
    end if;
  end if;

  parenthetical_match := regexp_match(trimmed, '^(.*?)\s*\(([^)]+)\)\s*$');
  if parenthetical_match is not null and array_length(parenthetical_match, 1) = 2 then
    if public.has_seniority_tokens(parenthetical_match[2]) then
      return btrim(parenthetical_match[1]);
    end if;
  end if;

  return trimmed;
end;
$$;

create or replace function public.apply_role_title_alias(raw_title text)
returns text
language plpgsql
immutable
as $$
declare
  trimmed text := btrim(coalesce(raw_title, ''));
  normalized text := public.normalize_search_text(trimmed);
begin
  if normalized = '' then
    return trimmed;
  end if;

  if normalized ~ '^executivo comercial\b' and normalized ~ '(sdr|closer)' then
    return 'Sales Executive';
  end if;

  if normalized ~ '^(rh|recursos humanos)\b' then
    return 'Gestor de RH';
  end if;

  if normalized ~ '^(criador editor de video com i a|videomaker i a first)( |$)' then
    return 'Videomaker I.A First';
  end if;

  return trimmed;
end;
$$;

create or replace function public.get_display_role_title(raw_title text)
returns text
language sql
immutable
as $$
  select public.strip_role_seniority_suffix(public.apply_role_title_alias(raw_title));
$$;

create or replace function public.get_display_role_seniority(raw_title text, raw_slug text default null)
returns text
language plpgsql
immutable
as $$
declare
  normalized_title text := public.normalize_search_text(raw_title);
  normalized_slug text := public.normalize_search_text(replace(coalesce(raw_slug, ''), '-', ' '));
begin
  if normalized_title ~ '(^| )(jr|junior)( |$)' then return 'JUNIOR'; end if;
  if normalized_title ~ '(^| )pleno( |$)' then return 'PLENO'; end if;
  if normalized_title ~ '(^| )senior( |$)' then return 'SENIOR'; end if;
  if normalized_title ~ '(^| )especialista( |$)' then return 'ESPECIALISTA'; end if;
  if normalized_title ~ '(^| )(lead|lider)( |$)' then return 'LEAD'; end if;
  if normalized_title ~ '(^| )(mid|middle)( |$)' then return 'MID'; end if;

  if normalized_slug ~ '(^| )(jr|junior)( |$)' then return 'JUNIOR'; end if;
  if normalized_slug ~ '(^| )pleno( |$)' then return 'PLENO'; end if;
  if normalized_slug ~ '(^| )senior( |$)' then return 'SENIOR'; end if;
  if normalized_slug ~ '(^| )especialista( |$)' then return 'ESPECIALISTA'; end if;
  if normalized_slug ~ '(^| )(lead|lider)( |$)' then return 'LEAD'; end if;
  if normalized_slug ~ '(^| )(mid|middle)( |$)' then return 'MID'; end if;
  return '';
end;
$$;

create or replace function public.get_display_role_commitment(raw_commitment text)
returns text
language plpgsql
immutable
as $$
declare
  normalized text := public.normalize_search_text(raw_commitment);
begin
  if normalized = 'tempo integral' then
    return 'Segunda à Sexta, 09h às 18h';
  end if;
  return btrim(coalesce(raw_commitment, ''));
end;
$$;

create or replace function public.detect_role_area(haystack text)
returns text
language plpgsql
immutable
as $$
declare
  normalized text := public.normalize_search_text(haystack);
begin
  if normalized ~ '(finance|contab|fiscal|tesouraria|controlador|analista financeiro)' then return 'Financeiro'; end if;
  if normalized ~ '(rh|people|recrut|talent|human)' then return 'Pessoas'; end if;
  if normalized ~ '(customer success|suporte|atendimento|cx|operac)' then return 'Operações'; end if;
  if normalized ~ '(video|criador|editor|conteudo|content)' then return 'Conteúdo'; end if;
  if normalized ~ '(design|ui|ux)' then return 'Design'; end if;
  if normalized ~ '(backend|frontend|fullstack|dev|engenhari|software|tech|tecnolog)' then return 'Tecnologia'; end if;
  if normalized ~ '(produto|product|pm|manager)' then return 'Produto'; end if;
  if normalized ~ '(growth|marketing|comercial|sdr|closer|venda|sales)' then return 'Growth & Comercial'; end if;
  return null;
end;
$$;

create or replace function public.is_generic_area(raw_area text)
returns boolean
language sql
immutable
as $$
  select public.normalize_search_text(raw_area) in ('', 'geral', 'general');
$$;

create or replace function public.infer_role_area(
  raw_area text,
  raw_title text,
  raw_intro text,
  raw_role_one_liner text,
  raw_about_first text,
  raw_body_markdown text
)
returns text
language plpgsql
immutable
as $$
declare
  trimmed_area text := btrim(coalesce(raw_area, ''));
  title_match text;
  full_match text;
begin
  if trimmed_area <> '' and not public.is_generic_area(trimmed_area) then
    return trimmed_area;
  end if;

  title_match := public.detect_role_area(coalesce(raw_title, '') || ' ' || coalesce(raw_area, ''));
  if title_match is not null then
    return title_match;
  end if;

  full_match := public.detect_role_area(
    coalesce(raw_title, '') || ' ' ||
    coalesce(raw_intro, '') || ' ' ||
    coalesce(raw_role_one_liner, '') || ' ' ||
    coalesce(raw_about_first, '') || ' ' ||
    coalesce(raw_body_markdown, '')
  );
  if full_match is not null then
    return full_match;
  end if;

  return 'Geral';
end;
$$;

create or replace function public.to_intro_preview(raw_value text)
returns text
language plpgsql
immutable
as $$
declare
  value text := coalesce(raw_value, '');
begin
  value := regexp_replace(value, '\[([^\]]+)\]\(([^)]+)\)', '\1', 'g');
  value := regexp_replace(value, '(^|\n)\s*#{1,6}\s+', '\1', 'g');
  value := regexp_replace(value, '(^|\n)\s*[-–—]{2,}\s*', '\1', 'g');
  value := regexp_replace(value, '(^|\n)\s*[-*+]\s+', '\1', 'g');
  value := regexp_replace(value, '(^|\n)\s*\d+\.\s+', '\1', 'g');
  value := regexp_replace(value, '[*_`~]', '', 'g');
  value := regexp_replace(value, '\s+', ' ', 'g');
  return btrim(value);
end;
$$;

create or replace function public.is_generic_summary(raw_value text)
returns boolean
language plpgsql
immutable
as $$
declare
  normalized text := public.normalize_search_text(raw_value);
begin
  if normalized = '' or char_length(normalized) < 20 then
    return true;
  end if;

  return normalized in (
    'missao do cargo',
    'descricao da vaga',
    'detalhes da vaga',
    'the role',
    'role summary',
    'summary',
    'about the role',
    'sobre a vaga'
  );
end;
$$;

create or replace function public.first_meaningful_markdown_line(raw_markdown text)
returns text
language plpgsql
immutable
as $$
declare
  lines text[];
  line text;
  preview text;
begin
  if coalesce(raw_markdown, '') = '' then
    return '';
  end if;

  lines := regexp_split_to_array(raw_markdown, E'\n+');
  foreach line in array lines loop
    preview := public.to_intro_preview(line);
    if preview <> '' and not public.is_generic_summary(preview) then
      return preview;
    end if;
  end loop;

  return '';
end;
$$;

create or replace function public.get_role_card_summary(
  raw_intro text,
  raw_role_one_liner text,
  raw_body_markdown text,
  raw_about_first text
)
returns text
language plpgsql
immutable
as $$
declare
  candidate text;
  candidates text[] := array[
    public.to_intro_preview(raw_intro),
    public.to_intro_preview(raw_role_one_liner),
    public.first_meaningful_markdown_line(raw_body_markdown),
    public.to_intro_preview(raw_about_first)
  ];
begin
  foreach candidate in array candidates loop
    if candidate <> '' and not public.is_generic_summary(candidate) then
      return candidate;
    end if;
  end loop;

  return 'Detalhes da vaga disponíveis na página completa.';
end;
$$;

create or replace function public.normalize_careers_role()
returns trigger
language plpgsql
as $$
declare
  about_first text;
  inferred_area text;
begin
  new.title := public.apply_role_title_alias(new.title);
  about_first := case
    when new.about is not null and array_length(new.about, 1) >= 1 then new.about[1]
    else null
  end;

  inferred_area := public.infer_role_area(
    new.area,
    new.title,
    new.intro,
    new.role_one_liner,
    about_first,
    new.body_markdown
  );

  new.area := inferred_area;
  new.display_area := inferred_area;
  new.display_title := public.get_display_role_title(new.title);
  new.display_seniority := public.get_display_role_seniority(new.title, new.slug);
  new.display_commitment := public.get_display_role_commitment(new.commitment);
  new.card_summary := public.get_role_card_summary(new.intro, new.role_one_liner, new.body_markdown, about_first);

  return new;
end;
$$;

drop trigger if exists trg_careers_roles_normalize on public.careers_roles;
create trigger trg_careers_roles_normalize
before insert or update on public.careers_roles
for each row
execute function public.normalize_careers_role();

drop trigger if exists trg_careers_roles_set_updated_at on public.careers_roles;
create trigger trg_careers_roles_set_updated_at
before update on public.careers_roles
for each row
execute function public.set_updated_at();

-- Backfill normalization for existing rows.
update public.careers_roles
set title = title;

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
