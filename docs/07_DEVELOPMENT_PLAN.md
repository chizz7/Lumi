# Development Plan — Exact Build Process

**Status:** Draft for engineering
**Related:** `06_BACKEND_ARCHITECTURE.md` (what to build) · `01_PRD.md` §9 (phasing rationale)

This is the build order as an executable plan: phases → tickets → definition of done. The sequencing principle is the one from the PRD: **prove the spine end-to-end before building the funnel around it.** Estimates assume 1–2 developers; treat them as relative sizing, not promises.

---

## Phase 0 — Decisions & scaffolding (≈1 week)

**Decisions to close (these block later phases):**
- [x] **D1 · TTS vendor** — **CLOSED: Kokoro-82M (hexgrad/Kokoro-82M) served via DeepInfra API for MVP.**
  - Model: Apache 2.0, 82M params, 54 voices, quality competitive with larger models.
  - Price: ~$0.80/M chars (DeepInfra); ~$0.004 per 5K-char story. With content-hash caching, marginal cost per delivery trends to $0 after the first render of each tuple.
  - Integration: plain HTTP POST to DeepInfra from the audio module — no GPU infra, fits serverless Next.js.
  - Self-host trigger: revisit when monthly DeepInfra spend exceeds ~$200/mo.
  - Voice cloning (v1.1): Kokoro alone does not support cloning. Evaluate ElevenLabs voice cloning API layered on top, deferred per PRD.
- [ ] **D2 · Slot-fill mode** — confirm pure templating (default). Only revisit if P2's assembled stories read robotically.
- [x] **D3 · Queue** — **CLOSED: pg-boss on Supabase Postgres** (zero extra vendors; pgmq is the in-house alternative if pg-boss misbehaves).
- [x] **D4 · Auth** — **CLOSED: Supabase Auth**, magic-link email only at v1; admin via role claim.
- [x] **D5 · DB/ORM/Storage** — **CLOSED: Supabase (Postgres + Auth + Storage) with Prisma** for schema + migrations. Pooled URL for the app, direct URL for migrations. Schema file: `prisma/schema.prisma` (generated from doc 06 §2).

**Scaffolding tickets:**
- [ ] `P0-1` Next.js repo (App Router, TS strict), CI (lint + typecheck + test), preview deploys.
- [ ] `P0-2` Supabase project + Prisma: apply `prisma/schema.prisma`, `prisma migrate dev`, generated client wired into the app. Enable RLS on user-layer tables.
- [ ] `P0-3` Supabase Storage buckets (`audio`, `scripts`, `voice-samples`, all private) + signed-URL helper.
- [ ] `P0-4` Env/secret management (DATABASE_URL pooled + DIRECT_URL, service-role key server-only); Stripe + email sandbox accounts.

**Exit gate:** migrations run clean; a hello-world job executes through the chosen queue.

---

## Phase 1 — Content pipeline & authoring plane (≈2 weeks, parallel with P2)

The product is the content; tooling can be ugly, the gates cannot be skipped.

- [ ] `P1-1` Seed script: `subjects`, `concepts` (with `depends_on`), Levels 1–5 of money, slots declared.
- [ ] `P1-2` Minimal admin UI (or even a reviewed-PR-to-seed-file workflow at v1): create/edit levels, templates, skins.
- [ ] `P1-3` **Publish gate** exactly per doc 06 §4.1 (dependency check, slot audit, learning-beat span free of slots, sign-offs required). Unit-test every gate with a failing fixture.
- [ ] `P1-4` LLM drafting script (authoring-time only): prompt with spine + craft rules → draft into `levels.draft`. Logged + versioned per ADR-001.
- [ ] `P1-5` Safety + expert review checklists wired into the admin flow (`safety_signoff`, `expert_signoff` JSON).
- [ ] `P1-6` Skin library: 4–6 skins authored, slot maps complete, each `safety_cleared`.

**Exit gate:** 5 levels of money + 4 skins are `published`/`cleared` in a real DB, and the publish gate demonstrably rejects each class of bad input.

---

## Phase 2 — The thin slice (≈1–2 weeks) ⭐ the most important phase

**Goal:** a hardcoded profile produces a delivered story end-to-end. *Nothing else ships until this works.*

- [ ] `P2-1` `content` read module (published levels/templates/skins only).
- [ ] `P2-2` `assemble` + **learning-beat validator** (doc 06 §4.2). Property test: for all skins × names, the learning-beat span is byte-identical to the template.
- [ ] `P2-3` `audio` module: content-hash key, get-or-render against the chosen TTS, store, presign (doc 06 §4.3).
- [ ] `P2-4` `deliver_story` job: assemble → audio → email with link + script (doc 06 §4.4), with retry/backoff and the 'failed' path.
- [ ] `P2-5` CLI/admin trigger: `deliver(childName, ageBand, skinSlug, voiceId, levelOrdinal)`.

**Exit gate (demo):** run one command → a real email arrives with a playable personalized MP3 + script, and the instance row shows `delivered` with full `slot_values` audit. Re-running with the same inputs hits the audio cache (verify zero TTS spend on the second run).

---

## Phase 3 — Funnel & account (≈2–3 weeks)

Build the public site + builder against the proven pipeline. The landing prototype (`landing.html`) is the visual spec.

- [ ] `P3-1` Landing page in Next.js (hero, sample player, sections, header/footer) — port from prototype; wire the sample player to a real pre-rendered MP3.
- [ ] `P3-2` Anonymous draft flow: `POST /api/draft` + signed draft cookie + moderation on free text.
- [ ] `P3-3` Builder UI (4 steps) → draft updates; voice switcher playing real per-voice preview clips.
- [ ] `P3-4` Preview endpoint: pre-rendered preview tuples; name shown in script text; play opening clip.
- [ ] `P3-5` Stripe Checkout + webhook → account creation + ChildProfile persistence + first `deliver_story` enqueue (doc 06 §3). Reconciliation cron.
- [ ] `P3-6` Magic-link auth + library page (presigned streaming, "next story" button → `/api/story/next`).
- [ ] `P3-7` Post-payment onboarding (nickname, exclusions) — all optional, all moderated.
- [ ] `P3-8` Event logging on every funnel step (`sample_played` → `delivered`), per PRD §8.

**Exit gate:** a stranger with a clean browser can go landing → personalize → preview → pay (test mode) → receive email → play from library, on mobile.

---

## Phase 4 — Trust, margin & compliance hardening (≈1–2 weeks)

- [ ] `P4-1` "Report this story" → auto Stripe credit + event + content-review queue.
- [ ] `P4-2` Entitlements: free first story, Club gating for weekly delivery + voice tiering.
- [ ] `P4-3` Data export (`GET /api/account/export`) + one-click delete with object-storage purge job. **Test the purge actually deletes blobs.**
- [ ] `P4-4` Rate limiting on anonymous endpoints; draft TTL cleanup cron.
- [ ] `P4-5` Pre-render scheduler: top-K names × skins × voices per published level; cache-hit-rate dashboard.
- [ ] `P4-6` Ops: error alerting (validator failures page someone), TTS spend monitor, webhook health.

**Exit gate:** the failure-mode table in doc 06 §6 is demonstrably true (kill the TTS key in staging and watch the system degrade gracefully).

---

## Phase 5 — Launch gates (not code)

- [ ] Legal review: COPPA / GDPR-K against the actual data model + flows for target markets.
- [ ] Replace placeholder social proof on the landing page (press logos, ratings, testimonials) with real data — ship without the section rather than with invented proof.
- [ ] Content QA: a parent-eared listen of every published level × every voice.
- [ ] Load sanity: preview + checkout paths under modest concurrency; presign latency.
- [ ] Runbook: webhook replay, failed-delivery recovery, takedown procedure for a reported story.

---

## Cross-cutting practices

- **Testing pyramid:** unit tests on publish gate + validator + audio key derivation (the correctness core); one integration test that runs the full deliver job against a TTS mock; one Playwright happy-path through the funnel in CI.
- **Migrations only** — no manual DB edits; seed data lives in versioned files.
- **Feature flags** for voice cloning and any thin-LLM slot pass, so v1.1 features merge dark.
- **Definition of done, everywhere:** code + test + event instrumentation + a line in the relevant doc if behavior diverged from spec.

## v1.1 seams (build dark, ship later)
Voice cloning (consent flow already modeled), scheduled weekly auto-delivery (cron over Club accounts), multi-child profiles (schema already keyed per child), second subject (pure content work — zero code if the pipeline held).
