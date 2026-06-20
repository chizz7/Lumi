-- 004_waitlist_rls.sql
-- Close a security hole from 001: the waitlist table was created WITHOUT row
-- level security, so the public anon key (which ships to the browser) could read
-- every captured email — a privacy leak. waitlist is only ever written via
-- adminClient (service role, which bypasses RLS), so enabling RLS with no policy
-- denies anon/authenticated keys while the app keeps working. Same deny-by-default
-- pattern as content_approvals.
--
-- Flagged by the Supabase database linter (lint 0013_rls_disabled_in_public).

alter table waitlist enable row level security;
