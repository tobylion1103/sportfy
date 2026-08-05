-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard)

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint waitlist_email_unique unique (email)
);

create index if not exists waitlist_created_at_idx
  on public.waitlist (created_at desc);

alter table public.waitlist enable row level security;

-- Allow anonymous inserts from the waitlist form (via anon key)
create policy "Allow public waitlist signup"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- Admins (profiles.role = 'admin') can read waitlist emails
create policy "Admins can read waitlist"
  on public.waitlist
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.profiles
      where profiles.id = auth.uid()
        and profiles.role = 'admin'
    )
  );
