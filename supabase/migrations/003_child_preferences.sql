-- 003_child_preferences.sql
-- Richer (still deterministic, still cosmetic) personalization inputs.
-- interest_slug drives the world via a fixed interest -> world map (a join, not
-- generation — PRD FR-7). age_band already exists and now selects age-tuned
-- story variants in the assembler.

alter table child_profiles
  add column if not exists interest_slug text;
