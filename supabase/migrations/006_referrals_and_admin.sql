-- 006_referrals_and_admin.sql
-- Referral program ("free month per paid referral") + ops support for the
-- admin dashboard (see docs/10_ADMIN_DASHBOARD.md).

-- ── Referral program ────────────────────────────────────────────────────────
-- Every account gets a shareable code. When a NEW user subscribes with that
-- code, the referrer earns a one-month ($9.99) Stripe credit. One credit per
-- referred account, ever (enforced by the unique constraint below).
alter table accounts add column if not exists referral_code text unique;

create table if not exists referrals (
  id                  uuid primary key default gen_random_uuid(),
  referrer_account_id uuid not null references accounts(id) on delete cascade,
  referred_account_id uuid not null references accounts(id) on delete cascade,
  referred_email      text,
  reward_cents        int  not null default 999,
  status              text not null default 'pending',  -- 'pending' | 'credited' | 'rejected'
  credited_at         timestamptz,
  created_at          timestamptz not null default now(),
  unique (referred_account_id)        -- a referred account can only be rewarded once
);
create index if not exists referrals_referrer_idx on referrals (referrer_account_id);

-- RLS on, NO policies: only the service-role webhook writes, and the
-- /api/referrals route reads via the service-role client with masked columns
-- (the referred user's email is never exposed to the referrer — COPPA/privacy).
alter table referrals enable row level security;

-- ── Ops: persisted cron outcomes ────────────────────────────────────────────
-- So the admin "events" view can show delivery-run health without depending on
-- Vercel log retention.
create table if not exists cron_runs (
  id        uuid primary key default gen_random_uuid(),
  job       text not null default 'deliver',
  scanned   int,
  delivered int,
  skipped   int,
  ran_at    timestamptz not null default now()
);
alter table cron_runs enable row level security;  -- service-role only, no policies
