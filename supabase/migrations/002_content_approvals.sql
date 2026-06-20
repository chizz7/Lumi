-- 002_content_approvals.sql
-- The safety + expert review gate (PRD FR-4/FR-5), as data.
-- One row per (subject, level). A level is deliverable only once 'approved'.

create table if not exists content_approvals (
  subject_slug   text        not null,
  level_ordinal  int         not null,
  status         text        not null default 'pending'
                              check (status in ('pending', 'approved', 'rejected')),
  reviewer_email text,
  notes          text,
  updated_at     timestamptz not null default now(),
  primary key (subject_slug, level_ordinal)
);

-- Only the service role (adminClient) reads/writes this table. Enabling RLS with
-- no policies means anon/authenticated keys get nothing; the service role bypasses RLS.
alter table content_approvals enable row level security;

-- Seed: the launched Money path is already reviewed and approved.
insert into content_approvals (subject_slug, level_ordinal, status, reviewer_email)
values
  ('money', 1, 'approved', 'launch'),
  ('money', 2, 'approved', 'launch'),
  ('money', 3, 'approved', 'launch'),
  ('money', 4, 'approved', 'launch'),
  ('money', 5, 'approved', 'launch')
on conflict (subject_slug, level_ordinal) do nothing;
