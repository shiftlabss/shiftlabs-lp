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

update public.careers_roles
set title = public.apply_role_title_alias(title)
where slug = 'criador-editor-de-video-com-i-a'
   or public.normalize_search_text(title) ~ '^(criador editor de video com i a|videomaker i a first)( |$)';
