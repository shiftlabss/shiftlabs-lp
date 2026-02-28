create or replace function public.normalize_careers_role()
returns trigger
language plpgsql
as $$
declare
  about_first text;
  inferred_area text;
begin
  -- Persist canonical role names for known aliases.
  new.title := public.apply_role_title_alias(new.title);
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

-- Backfill all rows so display fields are recalculated with canonical titles.
update public.careers_roles
set title = case
  when slug = 'executivo-comercial-sdr-closer' then 'Sales Executive'
  when slug = 'rh-operacional' then 'Gestor de RH'
  else title
end;
