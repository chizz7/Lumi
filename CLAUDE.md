# CLAUDE.md — Project Brief for Claude Code

Read this entire file before writing any code. It contains everything you need to understand Lumi and build it correctly.

---

## What is Lumi?

Lumi delivers personalised, levelled audio bedtime stories to parents. Children (ages 3–8) hear original adventures that teach real skills — money, focus, kindness, resilience — one concept per story, building on the last.

**The one rule that shapes every technical decision:**
> Fixed curriculum, cosmetic personalisation. Stories are authored offline and never changed at runtime. Personalisation only swaps the "skin" (world, hero, companion, voice). The learning beat of every story is immutable.

**Revenue:** $9/month "Story Club" subscription (or tiered: Silver $3.99 / Gold $7.99 / Platinum $14.99). First story free as a preview.

**Delivery:** Audio MP3 + readable script sent to the parent's email, saved to their library.

---

## Tech Stack (confirmed, do not deviate)

| Layer | Choice | Notes |
|---|---|---|
| Frontend | Next.js 15 App Router | Hosted on Vercel |
| Database/Auth | Supabase (Postgres + Auth + Storage) | Magic link auth, RLS on all user tables |
| ORM | Supabase JS client directly | `npm run db:types` for TypeScript autocomplete. No Prisma. |
| Payments | Stripe Subscriptions | 3 price IDs: STRIPE_PRICE_SILVER, STRIPE_PRICE_GOLD, STRIPE_PRICE_PLATINUM |
| Email | Resend | Story delivery + magic links |
| TTS | DeepInfra / Kokoro-82M | `hexgrad/Kokoro-82M` model, ~$0.80/M chars |
| Analytics | PostHog | Server-side + client-side, inputs masked (COPPA) |
| Queue | None at v1 | Webhook handler is synchronous (~5s, within Stripe's 30s limit) |

---

## File Structure (all files are in this ZIP)

```
lumi/
├── CLAUDE.md                    ← You are here
├── docs/                        ← All documentation
│   ├── 00_README.md             ← Project overview
│   ├── 01_PRD.md                ← Product Requirements Document
│   ├── 02_TECHNICAL_ARCHITECTURE.md
│   ├── 03_USER_JOURNEYS.md      ← Complete user flows
│   ├── 06_BACKEND_ARCHITECTURE.md ← DB schema + API surface
│   ├── 07_DEVELOPMENT_PLAN.md   ← Build order
│   ├── 09_SETUP_GUIDE.md        ← Supabase + Stripe + Resend + PostHog + Vercel setup
│   ├── Lumi-NestJS-Backend-Plan.docx    ← Full NestJS plan (if switching later)
│   └── Lumi-User-Journey-API-Guide.docx ← Complete user journey + tier guide
├── app/                         ← Next.js App Router pages + API routes
├── content/                     ← Story content (TypeScript files)
├── lib/                         ← Shared utilities
├── scripts/                     ← Pre-render + author tools
├── supabase/migrations/         ← Database schema
├── public/                      ← Static assets
└── [config files]               ← package.json, tsconfig, tailwind, etc.
```

---

## Database Schema (3 tables — see supabase/migrations/001_init.sql)

```
accounts         id uuid PK (= auth.users.id) · email · stripe_customer_id · plan · created_at
child_profiles   id · account_id FK · name · age_band · skin_slug · subject_slug · voice_id · current_level
story_instances  id · profile_id FK · subject_slug · level_ordinal · skin_slug · voice_id · audio_key · script_text · delivered_at
waitlist         id · email · lang · source · created_at
```

**Subscription tiers** (update `accounts.plan` values):
- `'silver'` — 1 story/month, Money path only
- `'gold'`   — 4 stories/month, all paths
- `'platinum'` — unlimited, all paths + voice cloning

For tiers you'll also need to add to `child_profiles`:
```sql
ALTER TABLE child_profiles ADD COLUMN stories_used_this_month INT NOT NULL DEFAULT 0;
ALTER TABLE child_profiles ADD COLUMN month_reset_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
```

---

## Content Architecture (CRITICAL — read before touching content files)

Stories split into TWO templates per level:

1. **`audioTemplate`** — What Kokoro narrates. NO `{child_name}`. Cacheable by `(level × skin × voice)`.
2. **`scriptTemplate`** — What parents read. Has `{child_name}`. Built at delivery time, never sent to TTS.

**Audio cache key format:** `full-money-level1-sea-af_heart-en.mp3`

This means 5 levels × 4 skins × 4 voices = **80 pre-renderable files**. Run `npm run prerender` before launch.

**Assembly functions** (see `content/index.ts`):
```typescript
assembleAudio(subjectSlug, levelOrdinal, skinSlug)  // → audioText for TTS
assembleScript(subjectSlug, levelOrdinal, skinSlug, childName)  // → readable script
assembleStory(subjectSlug, levelOrdinal, skinSlug, childName)   // → both
```

---

## Key Files to Understand First

1. `content/money/levels.ts` — The 5 story templates with `audioTemplate`, `scriptTemplate`, `summary`, `teachingNote`
2. `content/money/skins.ts` — 4 worlds (sea, space, forest, castle) with slot values
3. `lib/tts.ts` — `getOrRenderAudio()` cache-first TTS pipeline
4. `lib/stripe.ts` — Stripe singleton + `createCheckoutSession()`, `issueCredit()`, `cancelSubscription()`
5. `app/api/webhooks/stripe/route.ts` — The most important route: creates account + delivers first story
6. `supabase/migrations/001_init.sql` — Full DB schema with RLS policies

---

## The Purchase Flow (most critical business logic)

```
1. Parent fills builder → POST /api/draft → HMAC-signed cookie (no DB)
2. Parent previews   → GET /api/preview → TTS preview from cache
3. Parent clicks pay → POST /api/checkout → Stripe session URL
4. Stripe payment   → POST /api/webhooks/stripe fires:
   a. Verify signature (CRITICAL: needs raw body, not parsed JSON)
   b. Idempotency check (skip if already processed)
   c. Create Supabase Auth user
   d. INSERT accounts + child_profiles
   e. assembleStory() → getOrRenderAudio() → sendStoryEmail()
   f. INSERT story_instances
   g. PostHog.track('subscription_started')
5. Stripe redirects → /welcome
```

---

## Authentication

Supabase magic link auth:
- Parent enters email → Supabase sends magic link → parent clicks → session cookie set
- `serverClient()` from `lib/supabase.ts` for server components/routes
- `browserClient()` for client components
- `adminClient()` for webhook/server-side operations (bypasses RLS)

---

## Environment Variables (copy from .env.example)

Required before `npm run dev`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY` + `STRIPE_PRICE_ID` (or `STRIPE_PRICE_SILVER/GOLD/PLATINUM`)
- `STRIPE_WEBHOOK_SECRET`
- `DEEPINFRA_API_KEY`
- `RESEND_API_KEY` + `EMAIL_FROM`
- `NEXT_PUBLIC_POSTHOG_KEY`
- `DRAFT_SECRET` (run: `openssl rand -base64 32`)
- `NEXT_PUBLIC_APP_URL`

---

## What Is NOT in the Database (COPPA — do not add these)

- Child's date of birth (use age_band: '3-4' | '5-6' | '7-8' only)
- Child's photos
- Location data
- Behavioural tracking of the child
- Child's email or phone

These fields are absent by design. Any PR adding them should be rejected.

---

## Commands

```bash
npm run dev                  # Start dev server
npm run db:types             # Generate TypeScript types from Supabase schema
npm run prerender:dry        # Preview what audio files would be rendered
npm run prerender            # Render all 96 audio files (~$0.69, ~10 min)
npm run author:draft -- --subject money --level 3 --skin sea  # Draft a new level with AI
stripe listen --forward-to localhost:3000/api/webhooks/stripe  # Local Stripe testing
```

---

## Current Status

### ✅ Complete and production-ready
- All 5 Money path levels (audioTemplate + scriptTemplate + summary + teachingNote)
- 4 skins (sea, space, forest, castle) 
- Full landing page with curriculum detail, voice switcher, story builder
- All API routes (draft, preview, checkout, webhook, library, story/next, account, etc.)
- Stripe full lifecycle webhook handling (new sub, cancel, payment_failed, renewal)
- Supabase Auth + RLS policies
- PostHog provider + server-side analytics
- Privacy/Terms/Contact/COPPA pages
- Pre-render script for all 96 audio files
- LLM authoring script for drafting new levels
- Sitemap + robots + SEO metadata

### ❌ Needs doing before launch
- **Public assets**: `og-image.png` (1200×630), `favicon.ico`, `apple-touch-icon.png` — see `public/ASSETS_NEEDED.md`
- **Legal review**: Privacy policy (COPPA requirement for children's product)
- **Fill .env.example** with real credentials
- **Run `npm run prerender`** to generate the 96 audio files
- **End-to-end test** with Stripe test card `4242 4242 4242 4242`

### 🔜 Post-launch (deferred)
- Paths 2–6 (Focus, Resilience, Kindness, Problem Solving, Confidence) — use `npm run author:draft`
- Voice cloning feature
- Tiered subscriptions (Silver/Gold/Platinum) — schema changes documented above
- Multiple languages (architecture already supports — add `content/money/levels.es.ts`)

---

## If You're Implementing the Tiered Subscription Model

See `docs/Lumi-User-Journey-API-Guide.docx` for the full spec. In brief:

1. Create 3 Stripe products (Silver $3.99/mo, Gold $7.99/mo, Platinum $14.99/mo)
2. Add `STRIPE_PRICE_SILVER`, `STRIPE_PRICE_GOLD`, `STRIPE_PRICE_PLATINUM` to env
3. Run the SQL migrations to add `stories_used_this_month` to `child_profiles`
4. Update `app/api/checkout/route.ts` to resolve price ID from tier choice in draft
5. Update `app/api/webhooks/stripe/route.ts` to set plan from price ID
6. Update `app/api/story/next/route.ts` to check `stories_used_this_month < tier_limit`
7. Add a BullMQ (or pg-cron) job to reset counters on the 1st of each month

---

## If You're Building the NestJS Backend Instead

See `docs/Lumi-NestJS-Backend-Plan.docx` for the complete plan including:
- Full module structure (16 NestJS modules)
- TypeORM entity definitions for all tables
- JWT + magic link auth strategy
- BullMQ queue setup (story delivery, pre-render, storage purge)
- Stripe webhook with raw body middleware + idempotency
- Audio service (cache-first TTS pipeline)
- All API endpoint contracts
- Build order (5 phases)

---

## Prototypes (for UI reference)

- `landing.html` — Full interactive landing page prototype (open in browser)
- `app-screens.html` — All 11 authenticated app screens
- `screen-map.html` — Screen navigation map

These are the design source of truth for the UI. All production UI is in `app/`.

---

## Support

This project was built iteratively across multiple sessions. The docs directory contains the full architecture rationale, ADRs, and decision log. When in doubt: read `01_PRD.md` for product decisions and `06_BACKEND_ARCHITECTURE.md` for technical decisions.
