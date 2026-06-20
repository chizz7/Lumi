# Backend Architecture & Logic — Deep Dive

**Status:** Draft for engineering
**Audience:** Backend developers
**Related:** `01_PRD.md` · `02_TECHNICAL_ARCHITECTURE.md` (system overview) · `07_DEVELOPMENT_PLAN.md` (build order)

This document goes one level below the system architecture: concrete services, API surface, database schema, job pipelines, caching keys, and failure handling. The governing constraint from doc 02 holds everywhere: **no LLM on the customer hot path; personalization is deterministic slot-fill over published templates; audio is cached by content hash.**

---

## 1. Runtime topology

Everything ships as **one Next.js application** (App Router) plus a small set of managed services. No microservices at v1 — the "services" below are modules with hard interfaces inside one deployable, so they can be split later without rewrites.

```
┌────────────────────────────  Next.js (Vercel or similar)  ───────────────────────────┐
│  /app (pages, builder UI)        /app/api/* (route handlers = the API)               │
│                                                                                       │
│  modules/                                                                             │
│   ├── content/        published levels, templates, skins (read model)                 │
│   ├── personalize/    profile → skin resolution, slot map                             │
│   ├── assemble/       template + slots → StoryInstance text                           │
│   ├── validate/       learning-beat immutability check                                │
│   ├── audio/          content-hash cache lookup → TTS render → store                  │
│   ├── deliver/        email + library write                                           │
│   ├── progress/       levels completed, next callback concept                         │
│   ├── billing/        Stripe sync, entitlements                                       │
│   └── compliance/     moderation, consent, export, delete                             │
└───────────────────────────────────────────────────────────────────────────────────────┘
        │                 │                  │                    │
   Postgres          Object storage      Job queue           3rd parties
   (Neon/Supabase/   (S3/R2: mp3 +       (Inngest/QStash/    Stripe · TTS vendor ·
   RDS)              scripts)            pg-boss)            email (Resend/Postmark)
```

**Choices and why (locked: Supabase + Prisma):**
- **Supabase Postgres** — relational fits the curriculum graph + progress model; row-level constraints enforce safety statuses. Use the **pooled connection (pgBouncer) for the app** and the **direct connection for Prisma migrations**.
- **Prisma (v7)** — schema + migrations as code (`prisma/schema.prisma` is the source of truth; doc 06 §2 DDL maps 1:1). Prisma 7 moved connection URLs out of the schema: `prisma.config.ts` holds the **direct** URL (migrations only), and the app constructs `PrismaClient` with the **pooled** URL via the `@prisma/adapter-pg` driver adapter.
- **Supabase Auth** — magic-link email auth for parents (adult account holders). Our `accounts` table keys off `auth.users.id`; admin/authoring uses a separate role claim.
- **Supabase Storage** for audio/scripts/voice samples — private buckets, signed URLs (the presign helper in §4.3). Voice samples live in their own bucket so consent revocation can purge one prefix.
- **Queue:** pg-boss running on the same Supabase Postgres (zero extra vendors), or Supabase's pgmq if preferred — the job interface in §4.4 is identical either way.
- **RLS:** enable row-level security on all user-layer tables (`accounts`, `child_profiles`, `progress`, `story_instances`, `consents`) keyed to `auth.uid()`; curriculum tables are service-role read-only from the app. Note: when access goes through Prisma (service role), RLS is the second line of defense, not the only one — keep authorization checks in the API layer too.
- **No Redis at v1** — the audio "cache" is Storage keyed by content hash, not an in-memory cache; Postgres handles the rest.

---

## 2. Database schema (DDL-level)

```sql
-- ───── Curriculum layer (authoring plane writes; runtime reads only) ─────
CREATE TYPE level_status AS ENUM ('draft','safety_cleared','expert_reviewed','published');

CREATE TABLE subjects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,            -- 'money'
  name TEXT NOT NULL,
  foundation_concept TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active'
);

CREATE TABLE concepts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID NOT NULL REFERENCES subjects(id),
  label TEXT NOT NULL,
  depends_on UUID[] NOT NULL DEFAULT '{}'   -- concept dependency graph
);

CREATE TABLE levels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject_id UUID NOT NULL REFERENCES subjects(id),
  ordinal INT NOT NULL,
  new_concept_id UUID NOT NULL REFERENCES concepts(id),
  callback_concept_ids UUID[] NOT NULL DEFAULT '{}',
  spine JSONB NOT NULL,                 -- the fixed 5-beat structure
  learning_beat JSONB NOT NULL,         -- {beat_index, span_start, span_end, description}
  age_floor INT NOT NULL,
  status level_status NOT NULL DEFAULT 'draft',
  version INT NOT NULL DEFAULT 1,
  safety_signoff JSONB,                 -- {reviewer, rubric_version, at}
  expert_signoff JSONB,
  UNIQUE (subject_id, ordinal, version)
);

CREATE TABLE story_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  level_id UUID NOT NULL REFERENCES levels(id),
  body TEXT NOT NULL,                   -- text with {slot_name} markers
  slots TEXT[] NOT NULL,                -- declared slots; assembly rejects undeclared
  learning_beat_span INT4RANGE NOT NULL,-- char range of the immutable lesson text
  version INT NOT NULL DEFAULT 1
);

CREATE TABLE skins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,            -- 'sea','space',...
  setting TEXT NOT NULL,
  hero_archetype TEXT NOT NULL,
  recurring_character JSONB NOT NULL,   -- {name,type,traits[]}
  object_motif TEXT NOT NULL,
  refrain TEXT NOT NULL,
  age_bands TEXT[] NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft'  -- 'draft' | 'safety_cleared'
);

CREATE TABLE slot_maps (
  skin_id UUID NOT NULL REFERENCES skins(id),
  slot_name TEXT NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (skin_id, slot_name)
);

-- ───── User / runtime layer ─────
CREATE TABLE accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT UNIQUE,
  plan TEXT NOT NULL DEFAULT 'free',    -- 'free' | 'club'
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE child_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
  nickname TEXT,                        -- optional; first name or pet name only
  age_band TEXT NOT NULL,               -- '3-4'|'5-6'|'7-8'  (NO birthdate by design)
  interest_tags TEXT[] NOT NULL DEFAULT '{}',
  exclusions TEXT[] NOT NULL DEFAULT '{}',
  chosen_skin_id UUID REFERENCES skins(id),
  chosen_subject_id UUID REFERENCES subjects(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
-- Deliberately absent: birthdate, photos, location, school, device/behavioral data.

CREATE TABLE progress (
  child_profile_id UUID PRIMARY KEY REFERENCES child_profiles(id) ON DELETE CASCADE,
  subject_id UUID NOT NULL REFERENCES subjects(id),
  current_level_ordinal INT NOT NULL DEFAULT 1,
  completed_level_ids UUID[] NOT NULL DEFAULT '{}',
  next_callback_concept_id UUID REFERENCES concepts(id)
);

CREATE TABLE story_instances (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_profile_id UUID NOT NULL REFERENCES child_profiles(id) ON DELETE CASCADE,
  level_id UUID NOT NULL REFERENCES levels(id),
  template_version INT NOT NULL,
  skin_id UUID NOT NULL REFERENCES skins(id),
  voice_id TEXT NOT NULL,
  slot_values JSONB NOT NULL,           -- exact values used (audit trail)
  script_ref TEXT,                      -- object-storage key
  audio_ref TEXT,                       -- object-storage key
  status TEXT NOT NULL DEFAULT 'pending', -- pending|assembled|rendered|delivered|failed
  delivered_at TIMESTAMPTZ,
  feedback TEXT                          -- 'reported' etc.
);

CREATE TABLE consents (
  account_id UUID PRIMARY KEY REFERENCES accounts(id) ON DELETE CASCADE,
  voice_recording BOOLEAN NOT NULL DEFAULT false,
  granted_at TIMESTAMPTZ,
  revoked_at TIMESTAMPTZ
);

CREATE TABLE events (                    -- the PMF instrument (doc 01 §8)
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  account_id UUID,
  child_profile_id UUID,
  name TEXT NOT NULL,                   -- 'sample_played','builder_started',...
  props JSONB NOT NULL DEFAULT '{}',
  at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

**Two invariants enforced in the DB, not just code:**
1. A `story_instances` row may only reference a level with `status='published'` (enforced via trigger or a published-levels view used as the FK target).
2. `child_profiles` simply has no columns for prohibited data — the compliance posture is structural.

---

## 3. API surface (Next.js route handlers)

All routes are thin: validate input (zod) → call module → return. Anonymous funnel routes use a signed `draft_token` cookie instead of an account.

| Route | Auth | Purpose |
|---|---|---|
| `POST /api/draft` | none | Create/update an anonymous builder draft `{age_band, interest_tags, skin_slug, voice_id, child_name}`. Free-text fields pass moderation first. Returns `draft_token`. |
| `GET /api/preview/:draftId` | draft_token | Assemble preview instance (first N chars), return script excerpt + presigned preview-audio URL. Preview tuples are always pre-rendered, so this is a pure cache read. |
| `POST /api/checkout` | draft_token | Create Stripe Checkout session; metadata carries `draft_id`. |
| `POST /api/webhooks/stripe` | Stripe sig | On `checkout.session.completed`: create account, persist ChildProfile from draft, enqueue `deliver_story` job. **This is the only place a draft becomes durable data.** |
| `POST /api/story/next` | session | Returning user requests the next level → enqueue `deliver_story`. |
| `GET /api/library` | session | List instances with presigned streaming URLs (short TTL). |
| `POST /api/story/:id/report` | session | Mark feedback, auto-credit via Stripe, emit event. |
| `POST /api/voice/consent` + `POST /api/voice/sample` | session | v1.1: consent flag, then upload sample to a consent-scoped bucket. Endpoint refuses uploads unless consent row exists. |
| `GET /api/account/export` · `DELETE /api/account` | session | Compliance: export JSON bundle; cascade delete + object-storage purge job. |

Authoring-plane routes live under `/api/admin/*` behind role-gated auth (separate session, least privilege), including `POST /api/admin/levels/:id/publish` which runs the **publish gate** (below).

---

## 4. Core logic, precisely

### 4.1 The publish gate (authoring plane)
`publish(level)` runs, in order — all must pass:
1. **Dependency check:** every concept in `new_concept` ∪ `callbacks` has its `depends_on` satisfied by already-published levels of the same subject.
2. **Slot audit:** every `{slot}` in the template body ∈ `template.slots`; every slot has a value in every `safety_cleared` skin's `slot_map`.
3. **Learning-beat span sanity:** `learning_beat_span` is non-empty and contains **no slot markers** — the lesson text is personalization-free by construction.
4. **Sign-offs present:** `safety_signoff` and `expert_signoff` non-null.
5. Bump `version`, set `status='published'`, snapshot the template, enqueue **pre-render jobs** for (level × cleared skins × default voices).

### 4.2 Assembly + validation (delivery plane)
```
assemble(levelId, skinId, childName, voiceId):
  tpl  = publishedTemplate(levelId)              -- versioned snapshot
  slots = slotMap(skinId) + {child_name: moderate(childName)}
  text = fillSlots(tpl.body, slots)              -- pure substitution; unknown slot → hard fail
  assert text[tpl.learning_beat_span] == tpl.body[tpl.learning_beat_span]
         -- THE learning-beat validator: the lesson span must be byte-identical
  return StoryInstance(text, slot_values=slots, template_version=tpl.version)
```
Because the learning-beat span contains no slots (gate 4.1.3), this assertion can only fail if code is buggy — which is exactly when you want a hard stop, not a quiet delivery.

### 4.3 Audio: lazy render + content-hash cache
```
audioKey = sha256(template_version ‖ canonical(slot_values_affecting_audio) ‖ voice_id)
get(audioKey):
  if object-storage hit → return presigned URL              (no TTS cost)
  else → enqueue render job → status 'being made' → TTS → store at audioKey → deliver
```
- The hash is over **content**, not profile — two children named "Maya" with the same skin+voice share one MP3. This is what makes the name-in-audio feature compatible with caching.
- **Pre-render** at publish: every (level × skin × voice) with the top-K most common names per locale, plus the no-name variant. The tail renders lazily.
- Renders are **idempotent** (key = hash) so duplicate jobs are harmless.

### 4.4 Delivery job (the only writer of `delivered_at`)
```
deliver_story(instanceId):
  1. assemble + validate          (4.2)   → status 'assembled', write script to storage
  2. audio get-or-render          (4.3)   → status 'rendered'
  3. email (audio link + script) + library row → status 'delivered', emit event
  on failure at any step: status 'failed', retry w/ backoff (max 3), then alert + apologize-email
```
Email links are presigned with long-ish TTL; the library always re-signs fresh.

### 4.5 Progress & callbacks
`POST /api/story/next` → `progress.current_level_ordinal + 1`; `next_callback_concept_id` is read from the level definition (authored, not computed at runtime). After delivery, append level to `completed_level_ids` and advance. No engagement tracking of the child — progress is "which lesson is next," nothing more.

---

## 5. Security & compliance mechanics

- **Sessions:** httpOnly cookie sessions for accounts (Auth.js or Lucia); short-lived signed JWT for anonymous drafts. Admin auth is a separate realm.
- **Moderation:** all free text (`child_name`, nickname, exclusions) passes a moderation check **before persistence or templating**; rejected input returns a friendly error and is never stored.
- **PII minimization:** drafts hold no identity; identity (email) enters only via Stripe webhook. Pre-payment data dies with the draft TTL (e.g., 7 days).
- **Deletion:** `DELETE /api/account` cascades Postgres rows and enqueues an object-storage purge of every `script_ref`/`audio_ref`/voice sample under the account. Voice consent revocation deletes samples + any cloned-voice artifacts immediately.
- **Secrets/least privilege:** TTS + email keys server-side only; admin routes role-gated; webhook signature verification mandatory.
- **Audit:** `story_instances.slot_values` + `template_version` makes every delivered story exactly reproducible — the "why did this story say that?" answer.

---

## 6. Failure modes & answers

| Failure | Behavior |
|---|---|
| TTS vendor down / slow | Job retries with backoff; UX shows "your story is being made"; email sends when ready. Never block the request thread. |
| Stripe webhook missed | Reconciliation cron re-pulls sessions hourly; idempotent account creation. |
| Validator assertion fails | Instance → 'failed', alert fires, **nothing is delivered**. Correctness over availability for child-facing content. |
| Moderation false positive on a real name | Friendly retry copy + support path; log for threshold tuning. |
| Object storage miss for a "cached" key | Treat as render-needed; idempotent re-render. |
