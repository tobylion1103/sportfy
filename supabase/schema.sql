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

-- No public reads — view signups in the Supabase Table Editor
-- (or add a service-role / dashboard-only select later)
