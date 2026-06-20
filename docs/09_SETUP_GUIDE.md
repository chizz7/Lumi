# Setup Guide — Supabase · Stripe · Resend · PostHog · Vercel

Run these steps **once** before your first deployment. Takes about 30 minutes.

---

## 1. Supabase

### Create the project
1. Go to [supabase.com](https://supabase.com) → New project
2. Choose a region close to your users (US East or EU West recommended)
3. Save the **database password** somewhere safe — you'll need it once

### Run the migration
1. In the Supabase dashboard → SQL Editor → paste the contents of `supabase/migrations/001_init.sql` → Run
2. Verify three tables exist: `accounts`, `child_profiles`, `story_instances`, `waitlist`

### Configure Auth
1. Authentication → URL Configuration → set **Site URL** to `https://yourdomain.com`
2. Add `https://yourdomain.com/auth/callback` to **Redirect URLs**
3. For local dev: also add `http://localhost:3000/auth/callback`
4. Email Templates → Magic Link → customise with your branding (optional but recommended)

### Create Storage buckets
1. Storage → New bucket → name: **`audio`** → Private (not public)
2. New bucket → name: **`scripts`** → Private
3. New bucket → name: **`voice-samples`** → Private

### Get your keys
1. Settings → API:
   - Copy **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - Copy **anon / public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Copy **service_role / secret** key → `SUPABASE_SERVICE_ROLE_KEY` ⚠️ never expose this
2. Settings → General → Reference ID → `SUPABASE_PROJECT_ID`

### Generate TypeScript types (optional but recommended)
```bash
npm run db:types
# generates lib/database.types.ts from your live schema
# run again whenever you change the schema
```

---

## 2. Stripe

### Create the product
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com) → Products → + Add product
2. **Name:** Story Club
3. **Description:** A new leveled bedtime story every week
4. **Pricing model:** Recurring
5. **Price:** $9.00 USD / month
6. Click Save product
7. Copy the **Price ID** (starts with `price_`) → `STRIPE_PRICE_ID`

### Configure the webhook
1. Developers → Webhooks → + Add endpoint
2. **Endpoint URL:** `https://yourdomain.com/api/webhooks/stripe`
3. **Events to send** — select these exactly:
   - `checkout.session.completed`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
   - `invoice.payment_succeeded`
4. Click Add endpoint
5. Click **Reveal** on the Signing secret → `STRIPE_WEBHOOK_SECRET`

### Local development
```bash
# Install Stripe CLI: https://stripe.com/docs/stripe-cli
stripe login
stripe listen --forward-to localhost:3000/api/webhooks/stripe
# Copy the webhook signing secret it prints → STRIPE_WEBHOOK_SECRET for local dev
```

### Test the flow
Use card `4242 4242 4242 4242`, any future expiry, any CVC.

### Customer portal (for self-service billing)
1. Settings → Billing → Customer portal → Activate
2. Enable: Update payment methods, Cancel subscriptions, View invoices
3. Copy the portal URL for your Account page's "Manage billing" link

---

## 3. Resend

1. Go to [resend.com](https://resend.com) → Create account
2. Add your domain (or use the sandbox `onboarding@resend.dev` for testing)
3. API Keys → Create API key → copy → `RESEND_API_KEY`
4. Set `EMAIL_FROM` to a verified address on your domain (e.g. `stories@yourdomain.com`)

**DNS records:** Resend will give you SPF/DKIM/DMARC records to add in your domain's DNS. Add them — emails from unverified domains go to spam.

---

## 4. PostHog

1. Go to [app.posthog.com](https://app.posthog.com) → Create account → New project
2. **Name:** Lumi Production
3. Project Settings → Project API Key → copy → `NEXT_PUBLIC_POSTHOG_KEY`
4. The host is `https://app.posthog.com` (or `https://eu.app.posthog.com` for EU data residency)

### Key funnels to set up in PostHog
Go to **Funnels** → New funnel → add these steps in order:

**Acquisition funnel (measures landing page CRO)**
1. `sample_played`
2. `builder_started`
3. `preview_played`
4. `checkout_started`
5. `subscription_started`

**Retention funnel (measures PMF)**
1. `subscription_started`
2. `story_delivered` (level 1)
3. `next_story_requested`
4. `story_delivered` (level 2)

**The second-story return rate** (next_story_requested / subscription_started) is the core PMF metric. Set up a trend for it in Insights → Trends.

### PostHog privacy settings (important for a children's app)
1. Project Settings → Privacy → enable **Anonymise IPs**
2. Session Recording → enable **Mask all inputs** (already set in the provider)
3. Do NOT enable autocapture — it can capture child names and other sensitive input

---

## 5. DeepInfra (TTS)

1. Go to [deepinfra.com](https://deepinfra.com) → Sign up
2. API Keys → Create → copy → `DEEPINFRA_API_KEY`
3. Model: `hexgrad/Kokoro-82M` (no setup needed — it's available immediately)
4. Pricing: ~$0.80 / million input characters. A 300-word story = ~$0.004.

---

## 6. Vercel

### First deployment
```bash
npm i -g vercel
vercel login
vercel --prod   # from your project root
```

### Environment variables
In the Vercel dashboard → your project → Settings → Environment Variables, add every key from `.env.example`. Mark these as **Production only**:
- `STRIPE_SECRET_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `DEEPINFRA_API_KEY`
- `RESEND_API_KEY`
- `DRAFT_SECRET`

Mark these as **All environments** (Preview + Production):
- `NEXT_PUBLIC_*` keys

### Update Stripe webhook for production
After your first Vercel deploy:
1. Go back to Stripe → Webhooks → update the endpoint URL to your Vercel domain
2. Get the new signing secret → update `STRIPE_WEBHOOK_SECRET` in Vercel → redeploy

### Custom domain
1. Vercel → your project → Settings → Domains → Add domain
2. Follow DNS instructions for your registrar
3. Update `NEXT_PUBLIC_APP_URL` to `https://yourdomain.com`
4. Update Supabase → Auth → Site URL and Redirect URLs

### Vercel function limits
The `vercel.json` already sets 30s timeout for the webhook (TTS can take up to 10s for a full story). The default 10s timeout is fine for all other routes.

---

## 7. Local development quickstart

```bash
git clone <your-repo>
npm install

# Copy and fill env vars
cp .env.example .env.local

# Start the app
npm run dev

# In a separate terminal — forward Stripe webhooks
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# To draft a new story with AI
npm run author:draft -- --subject money --level 3 --skin sea
```

---

## On Prisma

**Short answer: we don't use it, and you don't need it.**

The app uses the Supabase JS client directly for all database queries. For 3 tables this is simpler, better integrated with Supabase Auth (RLS works automatically with the user's JWT), and removes the complexity of running two clients alongside each other.

If you want typed queries, run:
```bash
npm run db:types
```
This generates `lib/database.types.ts` from your live Supabase schema — the Supabase client will then autocomplete your table and column names.

Add Prisma when you have: 5+ tables with complex joins, multiple developers needing strict schema ownership, or you want to migrate away from Supabase. That's not today.

---

## Checklist before going live

- [ ] All env vars set in Vercel
- [ ] Supabase migration applied and tables verified
- [ ] Supabase Auth redirect URL set to production domain
- [ ] Storage buckets created (audio, scripts, voice-samples)
- [ ] Stripe product + price created, Price ID copied
- [ ] Stripe webhook registered with correct production URL + events
- [ ] Resend domain verified (DNS records added)
- [ ] PostHog funnels configured
- [ ] `og-image.png` (1200×630) added to `/public`
- [ ] `favicon.ico` and `apple-touch-icon.png` added to `/public`
- [ ] `site.webmanifest` added to `/public`
- [ ] Test a full purchase with Stripe test card `4242 4242 4242 4242`
- [ ] Confirm email arrives in inbox (not spam)
- [ ] Confirm audio plays in the email and library
- [ ] Legal: privacy policy page linked in footer
- [ ] Legal: COPPA disclosure linked in footer
