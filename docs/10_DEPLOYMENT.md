# Deployment Guide — Vercel

Everything needed to get Lumi live on Vercel. The repo is already build-clean
(`npm run build` passes) and ships a `vercel.json` with the cron + function
limits, so this is mostly importing the repo and pasting environment variables.

---

## 1. Import the repo (connects GitHub + first deploy)

1. **vercel.com/new** → **Import Git Repository**.
2. Install/authorize the **Vercel GitHub App** for **`chizz7/lumi`** when prompted.
3. Select the repo. Vercel auto-detects **Next.js** — leave the defaults:
   - Root directory: `./`
   - Build command: `next build`
   - Output: handled by the framework preset
   - `vercel.json` provides the cron schedule + per-function `maxDuration`.
4. **Production branch:** Settings → Git → set to `claude/new-session-vq19jk`
   (or merge to `main` first and deploy that).
5. Add the environment variables (section 2) → **Deploy**.

Every subsequent `git push` to the production branch then auto-deploys.

### Alternative: deploy via CLI (no dashboard)
Only if the dashboard isn't an option:
```bash
vercel deploy --prod --token=<VERCEL_TOKEN> --yes
```
Caveats: needs a token from vercel.com/account/tokens; the Claude Code web
environment must allowlist `api.vercel.com` in its network egress settings; and
CLI deploys do **not** set up GitHub auto-deploy — use the import for CI/CD.

---

## 2. Environment variables

Set these in **Project → Settings → Environment Variables** (Production +
Preview). Values come from each provider's dashboard; see `.env.example`.

| Variable | Notes |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | safe to expose (RLS enforces access) |
| `SUPABASE_SERVICE_ROLE_KEY` | server-only — never expose |
| `STRIPE_SECRET_KEY` | Stripe → Developers → API keys |
| `STRIPE_PRICE_ID` | the **$9.99/mo** Story Club price (see §3) |
| `STRIPE_WEBHOOK_SECRET` | from the webhook you create in §4 |
| `DEEPINFRA_API_KEY` | TTS (Kokoro-82M) |
| `RESEND_API_KEY` | transactional email |
| `EMAIL_FROM` | verified sender, e.g. `stories@yourdomain.com` |
| `NEXT_PUBLIC_APP_URL` | the deployed domain, e.g. `https://lumi.app` |
| `DRAFT_SECRET` | `openssl rand -base64 32` |
| `NEXT_PUBLIC_POSTHOG_KEY` | analytics (optional in dev) |
| `CRON_SECRET` | protects `/api/cron/deliver`; `openssl rand -base64 32` |

---

## 3. Stripe price = $9.99/mo

The code displays $9.99 and credits $9.99, but the **actual charge** is the
Stripe price behind `STRIPE_PRICE_ID`. In the Stripe dashboard, set the Story
Club product's recurring price to **$9.99/month** (or create a new $9.99 price
and point `STRIPE_PRICE_ID` at it).

## 4. Stripe webhook

After the first deploy, create a webhook in Stripe → Developers → Webhooks:
- Endpoint: `https://<your-domain>/api/webhooks/stripe`
- Events: `checkout.session.completed`, `customer.subscription.deleted`,
  `invoice.payment_failed`, `invoice.payment_succeeded`
- Copy the signing secret into `STRIPE_WEBHOOK_SECRET` and redeploy.

## 5. Automatic delivery cron (Vercel Pro)

`vercel.json` schedules `/api/cron/deliver` daily at 16:00 UTC and gives it
`maxDuration: 300`. **Vercel Cron daily schedules + 300s functions require the
Pro plan.** On Hobby, lower `maxDuration` to 60 and reduce `MAX_PER_RUN` in
`app/api/cron/deliver/route.ts`. Set `CRON_SECRET` in the project env so the
scheduled call is authenticated (Vercel sends it as a Bearer token).

---

## 6. Pre-launch checklist

- [ ] `npm run prerender` once (96 audio files cached) — needs real
      `DEEPINFRA_API_KEY` + Supabase storage. ~$0.14, ~1 min.
- [ ] Public assets generated: `og-image.png`, `favicon.ico`,
      `apple-touch-icon.png` (see `public/ASSETS_NEEDED.md`).
- [ ] Legal review of Privacy/Terms (COPPA) + fill bracketed contact emails.
- [ ] End-to-end test with Stripe test card `4242 4242 4242 4242`.
- [ ] Supabase migration `001_init.sql` applied to the production project.
