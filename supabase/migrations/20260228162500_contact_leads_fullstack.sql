create table if not exists public.contact_leads (
  id bigint generated always as identity primary key,
  name text not null check (btrim(name) <> ''),
  whatsapp text not null check (btrim(whatsapp) <> ''),
  email text not null check (btrim(email) <> ''),
  company text not null check (btrim(company) <> ''),
  subject text not null check (btrim(subject) <> ''),
  source_page text not null default '/' check (btrim(source_page) <> ''),
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists contact_leads_created_at_idx
  on public.contact_leads (created_at desc);

alter table public.contact_leads enable row level security;

grant insert on table public.contact_leads to anon, authenticated;
grant usage, select on sequence public.contact_leads_id_seq to anon, authenticated;
grant select on table public.contact_leads to authenticated;

drop policy if exists contact_leads_public_insert on public.contact_leads;
create policy contact_leads_public_insert
  on public.contact_leads
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists contact_leads_admin_read on public.contact_leads;
create policy contact_leads_admin_read
  on public.contact_leads
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.careers_admins as admin
      where admin.user_id = auth.uid()
    )
  );
