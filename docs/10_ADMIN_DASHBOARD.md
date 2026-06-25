# 10 — Admin Dashboard (Design Doc)

> Status: **proposed**. One admin page exists today (`/admin/review`). This doc specifies the full admin console: what to build, in what order, and against which existing data.

---

## 1. Why

Lumi runs unattended: Stripe webhooks create accounts, a daily cron delivers stories, and parents self-serve their library. That's good for scale but means **when something silently fails, nobody notices** — a half-failed signup, a cron that skipped a profile, a TTS render that errored, a payment that lapsed. The admin dashboard exists to answer three questions at a glance:

1. **Is every user's lifecycle healthy?** (signup → first story → 3-day cadence → renewal, with no one stuck)
2. **Is new/changed content approved before it ships?** (the content-review gate)
3. **Did every system event succeed?** (webhooks, deliveries, cron runs, TTS renders, credits)

…plus the operational tail that those three imply (reports, billing health, audio cache, funnel). The dashboard is **read-mostly with a few safe, audited actions** — not a CMS. The one rule from `CLAUDE.md` still holds: *fixed curriculum, cosmetic personalisation.* Admin can approve, re-deliver, comp, and inspect — it cannot rewrite a story's learning beat.

---

## 2. Access model

Reuse what's already there — do **not** add a separate admin auth system.

- `lib/admin.ts` → `isAdmin(email)` checks `ADMIN_EMAILS` (comma-separated env allowlist).
- `middleware.ts` already guards `/admin/**` behind a Supabase magic-link session.
- Every `/api/admin/**` route re-checks `isAdmin()` server-side (defense in depth — never trust the page gate alone). Returns **401** unauthenticated, **403** not-allowlisted.

**Additions for this build:**
- A shared `requireAdmin()` helper (wrap the repeated `getUser()` + `isAdmin()` check) so every new admin route is one line.
- An **`admin_actions` audit table** (see §7) — every state-changing admin action (comp credit, re-deliver, reset level, approve) writes a row. Non-negotiable for a children's product handling money.
- Keep it binary (admin / not) for v1. A role hierarchy (reviewer vs. billing-admin) is deferred — note it as a future column on the audit table, not a v1 feature.

---

## 3. Modules

Each module lists its **data source**, **what it shows**, **actions**, and **build status**:
`✅ exists` · `🟡 data-ready` (tables/events exist, UI doesn't) · `🔴 needs schema`.

### 3.1 Content Review Hub — `✅ exists`, extend
The reason "approve newly generated stories" is already partly built.
- **Source:** `content_approvals` (migration 002) · `GET/POST /api/admin/approvals` · `app/admin/review/page.tsx`.
- **Shows:** matrix of 6 subjects × 5 levels, status `pending|approved|rejected`, reviewer email + `updated_at`, inline assembled story preview.
- **Actions:** approve / reject / reset; (new) **leave a note** (`content_approvals.notes` already exists but isn't surfaced).
- **Extend with:**
  - A **"needs review" badge count** in the nav (how many levels are `pending`).
  - Surface whether `ENFORCE_CONTENT_APPROVAL` is on — today approval is **advisory unless that env flag is set** (`lib/deliver.ts`). The dashboard should show a loud banner if approvals are being collected but **not enforced**, because that's a silent-failure trap.
  - When a level's template changes, its approval should arguably reset to `pending`. Flag as an open question (§9) — needs a content-hash column to detect drift.

### 3.2 User Lifecycle Monitor — `🟡 data-ready` *(your #1 ask)*
The single most important screen. One row per account, showing where each user is in the funnel and **flagging anyone stuck**.
- **Source:** `accounts` (plan, created_at) · `child_profiles` (current_level, subject) · `story_instances` (delivered_at) · `lib/cadence.ts` (`STORY_INTERVAL_DAYS = 3`).
- **Lifecycle stages** (derive per account/child):
  1. `signed_up` — account exists, **0 stories** delivered → *if older than ~10 min, the signup half-failed* (webhook didn't finish). **Red flag.**
  2. `active` — ≥1 story, last delivery within cadence, `current_level ≤ max`.
  3. `due` — eligible for next story but cron hasn't run / skipped it → **amber flag** if overdue > 1 day past the 3-day mark.
  4. `completed` — `current_level >` last level of their path (ran out of curriculum) → product signal, not an error.
  5. `lapsed` — `plan = 'free'` after a cancellation/payment failure.
- **Shows:** email, plan, child name + age band + path, current level / total, last delivered, next due, **stage badge**, lifetime stories.
- **Actions** (audited): **re-deliver current level** (calls `deliverNextStory`, which is idempotent — so add a `force` path or surface "already delivered"), **reset to a level** (manual recovery), **resend magic link**.
- **The headline widget:** counts per stage + a list of *"stuck"* accounts (signed_up-but-no-story, overdue-due). This is the "is the lifecycle successful" answer in one view.

### 3.3 System Event / Ops Health — `🟡 data-ready` *(your #3 ask)*
"See all events successful." Lumi's events live in three places — unify them.
- **Sources:**
  - `processed_webhook_events` (migration 005) — every Stripe event we **finished**. Compare against Stripe's event log (via Stripe API) to spot events received-but-not-recorded = **a 5xx that's still retrying or stuck**.
  - Cron: `GET /api/cron/deliver` already logs `{ scanned, delivered, skipped }`. Persist these to a small `cron_runs` table (§7) so the dashboard can show "last run, how many delivered, any errors" instead of digging through Vercel logs.
  - TTS: `lib/tts.ts` render success/failure (currently console-only, non-fatal). Surface render failures so a story that emailed **without audio** is visible.
  - PostHog server events (`lib/analytics.ts`): `subscription_started`, `story_delivered`, `payment_failed`, `subscription_cancelled`, `subscription_renewed`, `story_reported`, etc.
- **Shows:** a timeline / table of recent system events with status; a "health strip" of green/red tiles: *Webhooks OK · Last cron <24h · TTS error rate · Email delivery*.
- **Actions:** **replay a webhook** (delete its ledger row → Stripe resend, or re-invoke handler), drill into a single account's event history.
- **Note:** webhook success/cron-success/merge-conflict transitions are **not** delivered as events anywhere — this module is how an admin notices them.

### 3.4 Story Report Queue — `🟡 data-ready`
Parents report bad stories from the player; we auto-credit. Admin needs to see what's being reported (content-safety signal) and that we're not leaking money.
- **Source:** `story_instances.reported_at`, `report_reason`, `credited_at` (migration 005) · event `story_reported`.
- **Shows:** reported stories with reason, child age band, subject/level, whether a credit was issued, date. Group by `(subject, level)` to spot a **systematically bad story** (which should bounce back to Content Review §3.1 as `rejected`).
- **Actions:** mark resolved (needs a `report_resolved_at` column, §7), jump to that level in the Review Hub.
- **Guard already in place:** one credit per story (atomic `credited_at` claim) — dashboard should show total credits issued so finance has the number.

### 3.5 Billing & Subscription Health — `🟡 data-ready` + Stripe API
- **Source:** `accounts.plan` + webhook events + **Stripe API** (subscription status, upcoming invoice, MRR) via the existing `lib/stripe.ts` client.
- **Shows:** active `club` count, new vs. cancelled this period, **payment_failed accounts** (these get an email today but no one tracks if they recover), churn list.
- **Actions:** open the account's **Stripe dashboard deep-link**, comp a credit (audited), trigger the billing-portal email.
- **Why it matters for lifecycle:** a `payment_failed` → `subscription.deleted` path silently moves a user to `free`; this is where you catch it before they churn.

### 3.6 Audio Cache & Pre-render — `🟡 data-ready`
- **Source:** Supabase Storage `BUCKETS.AUDIO`, cache keys from `lib/tts.ts` (`full-money-level1-sea-af_heart-en.mp3`), `scripts/prerender.ts` (1,584 files target).
- **Shows:** coverage matrix — which (subject × level × skin × voice) combos are cached vs. missing (a missing one = a live render at delivery time, i.e. latency + cost risk). Total files, total size, est. TTS spend.
- **Actions:** trigger a re-render for a combo, **invalidate** a cache key (e.g. after fixing a mispronunciation), view prerender run history.
- **Launch-blocker tie-in:** this is the screen that confirms `npm run prerender` actually covered everything before go-live.

### 3.7 Waitlist & Lead Funnel — `🟡 data-ready`
- **Source:** `waitlist` (email, lang, source), `/api/lead` captures, builder/checkout events.
- **Shows:** signups by source (`landing-hero` / `builder-preview` / `pricing`) and language (drives which `content/<subject>/levels.<lang>.ts` to author next), abandoned-funnel count (previewed but didn't subscribe).
- **Actions:** CSV export.

### 3.8 Analytics deep-links — `✅` (via PostHog)
Don't rebuild PostHog. Provide curated deep-links / embeds for the funnel `sample_played → builder_started → checkout_started → subscription_started`, retention, and device breakdown. Keep COPPA masking in mind (child inputs are masked).

---

## 4. Information architecture

```
/admin
├── /              → Overview: lifecycle stage counts, ops health strip, "needs attention" list
├── /lifecycle     → §3.2 User Lifecycle Monitor (search/filter, per-user drill-down)
├── /review        → §3.1 Content Review Hub (EXISTS — keep route)
├── /events        → §3.3 System Event / Ops Health
├── /reports       → §3.4 Story Report Queue
├── /billing       → §3.5 Billing & Subscription Health
├── /audio         → §3.6 Audio Cache & Pre-render
└── /funnel        → §3.7 Waitlist & Leads
```
The **Overview** page is the daily driver: it pulls the one urgent number from each module (stuck users, unrecorded webhooks, pending approvals, unresolved reports, failed payments) so an admin can triage in 10 seconds.

---

## 5. API surface to build

All under `/api/admin/**`, all behind `requireAdmin()`, all read via `adminClient` (service role) since they cross RLS boundaries by design.

| Route | Method | Purpose |
|---|---|---|
| `/api/admin/approvals` | GET/POST | **exists** — extend with notes |
| `/api/admin/lifecycle` | GET | accounts joined to profiles + last delivery, with derived stage; query params for stage filter / search |
| `/api/admin/users/[id]` | GET | single-account drill-down (profiles, stories, events) |
| `/api/admin/users/[id]/redeliver` | POST | re-run `deliverNextStory` for a profile (audited) |
| `/api/admin/users/[id]/reset-level` | POST | set `current_level` (audited) |
| `/api/admin/events` | GET | merged webhook ledger + cron runs + recent server events |
| `/api/admin/webhooks/[id]/replay` | POST | clear ledger row / re-invoke handler (audited) |
| `/api/admin/reports` | GET/POST | report queue list + mark-resolved |
| `/api/admin/billing` | GET | accounts + Stripe subscription status (cached) |
| `/api/admin/billing/credit` | POST | comp a credit via `issueCredit` (audited) |
| `/api/admin/audio` | GET | cache coverage matrix from Storage |
| `/api/admin/audio/rerender` | POST | enqueue/trigger prerender for a combo (audited) |
| `/api/admin/funnel` | GET | waitlist + lead aggregates, CSV export |

---

## 6. Build order

- **Phase 1 — see everything (read-only, highest value, lowest risk):**
  Overview + Lifecycle Monitor (§3.2) + Event/Ops Health (§3.3). Answers all three of your original asks. No new schema except `cron_runs` (and it's optional — can start from Vercel logs).
- **Phase 2 — close the loops:** Report Queue (§3.4) + Billing Health (§3.5). Adds `report_resolved_at`, `admin_actions` audit table, the audited actions (redeliver, comp, reset).
- **Phase 3 — content & ops polish:** extend Review Hub (§3.1 enforcement banner + notes + drift reset), Audio Cache (§3.6), Funnel (§3.7), Analytics deep-links.

---

## 7. Schema additions (one migration, e.g. `006_admin.sql`)

```sql
-- Audit every state-changing admin action (money + content + recovery).
create table admin_actions (
  id          uuid primary key default gen_random_uuid(),
  admin_email text not null,
  action      text not null,            -- 'credit' | 'redeliver' | 'reset_level' | 'approve' | 'replay_webhook'
  target_type text not null,            -- 'account' | 'story' | 'profile' | 'webhook' | 'content'
  target_id   text not null,
  detail      jsonb,                    -- amount, old/new level, reason, etc.
  created_at  timestamptz not null default now()
);
alter table admin_actions enable row level security;  -- service-role only, no policies

-- Persist cron outcomes so ops health doesn't depend on Vercel log retention.
create table cron_runs (
  id           uuid primary key default gen_random_uuid(),
  job          text not null default 'deliver',
  scanned      int,
  delivered    int,
  skipped      int,
  errors       int default 0,
  detail       jsonb,
  ran_at       timestamptz not null default now()
);
alter table cron_runs enable row level security;

-- Let the report queue track resolution.
alter table story_instances add column if not exists report_resolved_at timestamptz;
```
RLS-on + no policies = these are service-role-only (same pattern as `processed_webhook_events`).

---

## 8. "What else?" — beyond your three asks

You named: lifecycle health, story approval, all-events-successful. The codebase audit surfaces these additional must-haves:

1. **Story report queue** (§3.4) — you're auto-issuing $9.99 credits; you need eyes on volume, reasons, and the total comped. Also your earliest content-safety signal.
2. **Billing/payment-failure tracking** (§3.5) — `payment_failed` emails go out but nobody tracks recovery vs. churn. This is silent revenue leak.
3. **Audio cache coverage** (§3.6) — a missing prerender = a live render at delivery (latency + cost). This is also your launch-readiness check for `npm run prerender`.
4. **An admin audit log** (§7) — mandatory once admins can move money (credits) on a children's product.
5. **The "enforcement gap" alarm** (§3.1) — approvals are collected but only **gate delivery when `ENFORCE_CONTENT_APPROVAL=true`**. The dashboard must make it obvious whether the gate is actually live, or approval is theatre.
6. **Half-failed-signup detector** (§3.2 stage 1) — the exact failure your migration-005 webhook hardening guards against; the dashboard is where a human confirms none slipped through.
7. **COPPA posture** — the dashboard itself must not introduce child PII. It only ever shows `name` + `age_band` (already stored); never add DOB, location, photos, or behavioural child tracking. Mask in any logging.

---

## 9. Open questions

1. **Approval drift:** should editing a level's template auto-reset its approval to `pending`? (Needs a content-hash column.) Recommended yes, but out of scope for Phase 1.
2. **Enforcement default:** flip `ENFORCE_CONTENT_APPROVAL` to on for launch? If yes, every live level must be `approved` first or delivery 403s.
3. **Stripe as source of truth vs. mirror:** read subscription status live from Stripe each load, or trust `accounts.plan` + reconcile periodically? (Live is simpler; cache if rate-limited.)
4. **Role split** (reviewer vs. billing-admin) — defer, but the `admin_actions.admin_email` trail makes it easy to add later.

---

## 10. References

- `lib/admin.ts` — `isAdmin()` allowlist · `middleware.ts` — route gate
- `app/admin/review/page.tsx`, `app/api/admin/approvals/route.ts` — existing admin pattern to copy
- `lib/deliver.ts` — `deliverNextStory` (lifecycle advance) · `lib/cadence.ts` — 3-day interval
- `app/api/webhooks/stripe/route.ts` — lifecycle events + `processed_webhook_events` ledger (migration 005)
- `app/api/cron/deliver/route.ts` — auto-delivery + run logging
- `lib/analytics.ts` — server event names · `lib/tts.ts` + `scripts/prerender.ts` — audio cache
- migrations `002` (approvals), `005` (report guard + webhook ledger)
```
