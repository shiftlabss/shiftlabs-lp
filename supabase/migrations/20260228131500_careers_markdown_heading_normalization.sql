create or replace function public.normalize_role_body_markdown(raw_markdown text)
returns text
language plpgsql
immutable
as $$
declare
  value text := coalesce(raw_markdown, '');
begin
  if value = '' then
    return value;
  end if;

  -- Canonical labels used in careers markdown sections.
  value := regexp_replace(value, '(^|\n)\s*#{1,6}\s*miss[aã]o do cargo\s*[:–—-]?\s*(\n|$)', E'\\1## Missão do cargo\\2', 'gi');
  value := regexp_replace(value, '(^|\n)\s*#{1,6}\s*responsabilidades\s+(no|do|de)\s+dia\s+a\s+dia\s*[:–—-]?\s*(\n|$)', E'\\1## Responsabilidades no dia a dia\\3', 'gi');
  value := regexp_replace(value, '(^|\n)\s*#{1,6}\s*perfil esperado\s*[:–—-]?\s*(\n|$)', E'\\1## Perfil esperado\\2', 'gi');
  value := regexp_replace(value, '(^|\n)\s*#{1,6}\s*o que esperamos nos primeiros 60(?:\s*a)?\s*[–—-]?\s*90 dias\s*[:–—-]?\s*(\n|$)', E'\\1## O que esperamos nos primeiros 60–90 dias\\2', 'gi');

  value := regexp_replace(value, '(^|\n)\s*\*\*\s*miss[aã]o do cargo\s*[:–—-]?\s*\*\*\s*(\n|$)', E'\\1## Missão do cargo\\2', 'gi');
  value := regexp_replace(value, '(^|\n)\s*\*\*\s*responsabilidades\s+(no|do|de)\s+dia\s+a\s+dia\s*[:–—-]?\s*\*\*\s*(\n|$)', E'\\1## Responsabilidades no dia a dia\\3', 'gi');
  value := regexp_replace(value, '(^|\n)\s*\*\*\s*perfil esperado\s*[:–—-]?\s*\*\*\s*(\n|$)', E'\\1## Perfil esperado\\2', 'gi');
  value := regexp_replace(value, '(^|\n)\s*\*\*\s*o que esperamos nos primeiros 60(?:\s*a)?\s*[–—-]?\s*90 dias\s*[:–—-]?\s*\*\*\s*(\n|$)', E'\\1## O que esperamos nos primeiros 60–90 dias\\2', 'gi');

  return value;
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
  new.body_markdown := public.normalize_role_body_markdown(new.body_markdown);

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

update public.careers_roles
set body_markdown = public.normalize_role_body_markdown(body_markdown);
