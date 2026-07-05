-- 008_profile_column_grants.sql
-- Bug audit #12: the child_profiles RLS policy is `for all using/with check
-- (auth.uid() = account_id)`, which lets the browser (authenticated) client
-- UPDATE *any* column of its own row — including current_level and subject_slug,
-- which the PATCH /api/account endpoint deliberately does NOT expose. A user
-- could rewrite their own progress or jump learning paths straight from the
-- client, bypassing the API.
--
-- RLS can't restrict columns, and a table-level UPDATE grant overrides
-- column-level revokes — so revoke the whole-table UPDATE from the client roles
-- and re-grant UPDATE only on the columns the dashboard legitimately edits
-- (name / age_band / skin_slug / voice_id, incl. the voice picker). subject_slug,
-- current_level, account_id, id, created_at and interest_slug are no longer
-- client-updatable. deliver.ts still advances current_level via the service-role
-- client, which these grants don't affect.

revoke update on child_profiles from anon, authenticated;
grant  update (name, age_band, skin_slug, voice_id) on child_profiles to authenticated;
