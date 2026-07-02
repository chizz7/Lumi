-- 007_launch_hardening.sql
-- Fixes from the pre-launch security/bug audit.

-- ── 1. Remove the client UPDATE path on accounts ──────────────────────────────
-- The old policy allowed any authenticated user to UPDATE their own accounts row
-- with no column restriction — including `plan`. Concrete exploit: subscribe,
-- cancel (webhook sets plan='free'), then flip plan back to 'club' via the anon
-- client for unlimited free deliveries.
--
-- No legitimate client-side update path exists: every accounts write in the app
-- goes through adminClient (service role, bypasses RLS). So the policy is pure
-- attack surface — drop it. RLS stays enabled; no UPDATE policy = deny-all for
-- anon/authenticated clients.
drop policy if exists "users can update own account" on accounts;

-- ── 2. Enforce delivery idempotency at the database ───────────────────────────
-- lib/deliver.ts guards against double delivery with a read-then-insert on
-- (profile_id, level_ordinal), but nothing enforced it in the DB, so the cron
-- and a manual /api/story/next racing could both pass the read and both insert
-- (duplicate story email + duplicate rows + double level bump). This index makes
-- the second insert fail; deliver.ts treats that as `already_delivered`.
create unique index if not exists story_instances_profile_level_uniq
  on story_instances (profile_id, level_ordinal);
