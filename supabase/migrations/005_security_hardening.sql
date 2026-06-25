-- 005_security_hardening.sql
-- Pre-launch security fixes (see CLAUDE.md "Needs doing before launch"):
--   1. Stripe webhook idempotency ledger — so a retried event completes a
--      half-finished paid signup instead of being silently dropped.
--   2. Story-report credit guard — one account credit per story, ever.
--   3. child_profiles RLS — gate INSERT directly on account_id (WITH CHECK)
--      instead of the old self-referential policy that couldn't check inserts.

-- ── 1. Stripe webhook idempotency ledger ────────────────────────────────────
-- Keyed on Stripe's event.id. Only the service-role webhook handler (which
-- bypasses RLS) ever reads/writes this; RLS-on + no policy = deny-all to clients.
create table if not exists processed_webhook_events (
  event_id     text primary key,
  type         text,
  processed_at timestamptz not null default now()
);
alter table processed_webhook_events enable row level security;

-- ── 2. Story-report credit guard ────────────────────────────────────────────
-- credited_at is claimed atomically before issuing a Stripe credit, so a story
-- can only ever mint one credit no matter how many times it's reported.
alter table story_instances
  add column if not exists reported_at   timestamptz,
  add column if not exists report_reason text,
  add column if not exists credited_at   timestamptz;

-- ── 3. child_profiles RLS hardening ─────────────────────────────────────────
-- The old policy looked the row up by id, so it couldn't gate INSERT (the app
-- compensated with the service-role client). Direct account_id check + WITH
-- CHECK lets the user's own client insert/update/delete only its own rows.
drop policy if exists "users can manage own profiles" on child_profiles;
create policy "users can manage own profiles"
  on child_profiles for all
  using      (auth.uid() = account_id)
  with check (auth.uid() = account_id);
