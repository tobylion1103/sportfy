# Sportfy Waitlist

Dark waitlist landing page for **sporty.us** — email capture into Supabase.

## Stack

- Next.js (App Router) + Tailwind CSS
- Supabase (`waitlist` table)

## Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Open **SQL Editor** and run [`supabase/schema.sql`](./supabase/schema.sql)
3. Copy env vars:

```bash
cp .env.example .env.local
```

Fill in from Supabase → **Project Settings → API**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. Install & run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel + Namecheap)

1. Push this repo and import it on [Vercel](https://vercel.com)
2. Add the same env vars in the Vercel project settings
3. In Namecheap DNS for `sporty.us`, point the domain to Vercel (A / CNAME as Vercel instructs)
4. Add `sporty.us` as a custom domain in Vercel

## What it includes

- Dark full-bleed landing with Sportfy branding
- Promo: **$20 toward next ticket** for the first 1,000 whitelist signups
- Email field + **Join the Waitlist**
- Duplicate-email handling
- Placeholder logo text (swap when the real logo is ready)

Emails are stored in the `waitlist` table — view them in the Supabase dashboard.
