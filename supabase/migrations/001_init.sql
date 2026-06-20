-- 001_init.sql
-- Run via: supabase db push  (or paste into the Supabase SQL editor)
--
-- 3 tables. That's all this app needs at launch.

-- ── accounts ─────────────────────────────────────────────────────────────────
-- Mirrors auth.users — one row per paying parent.
create table accounts (
  id                 uuid primary key,          -- = auth.users.id
  email              text not null unique,
  stripe_customer_id text unique,
  plan               text not null default 'free', -- 'free' | 'club'
  created_at         timestamptz not null default now()
);

alter table accounts enable row level security;
create policy "users can read own account"
  on accounts for select using (auth.uid() = id);
create policy "users can update own account"
  on accounts for update using (auth.uid() = id);

-- ── child_profiles ────────────────────────────────────────────────────────────
-- One profile per child (v1: one per account).
-- Deliberately absent: birthdate, photos, location, school.
create table child_profiles (
  id              uuid primary key default gen_random_uuid(),
  account_id      uuid not null references accounts(id) on delete cascade,
  name            text not null default '',   -- first name / nickname
  age_band        text not null,              -- '3-4' | '5-6' | '7-8'
  skin_slug       text not null,              -- 'sea' | 'space' | 'forest' | 'castle'
  subject_slug    text not null default 'money',
  voice_id        text not null default 'af_heart',
  current_level   int  not null default 1,
  created_at      timestamptz not null default now()
);

alter table child_profiles enable row level security;
create policy "users can manage own profiles"
  on child_profiles for all using (
    auth.uid() = (select account_id from child_profiles cp where cp.id = child_profiles.id)
  );

-- ── story_instances ───────────────────────────────────────────────────────────
-- One row per delivered story.
create table story_instances (
  id               uuid primary key default gen_random_uuid(),
  profile_id       uuid not null references child_profiles(id) on delete cascade,
  subject_slug     text not null,
  level_ordinal    int  not null,
  skin_slug        text not null,
  voice_id         text not null,
  audio_key        text,        -- storage object key (e.g. money-1-sea-af_heart.mp3)
  script_text      text,        -- full assembled story text
  delivered_at     timestamptz not null default now()
);

alter table story_instances enable row level security;
create policy "users can read own stories"
  on story_instances for select using (
    auth.uid() = (
      select a.id from accounts a
      join child_profiles cp on cp.account_id = a.id
      where cp.id = story_instances.profile_id
    )
  );


-- ── waitlist ──────────────────────────────────────────────────────────────────
-- Email capture for visitors whose language isn't available yet, and
-- general pre-launch interest capture.
create table waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  lang       text not null default 'en',
  source     text,   -- 'landing-hero' | 'language-banner' | 'pricing'
  created_at timestamptz not null default now()
);
