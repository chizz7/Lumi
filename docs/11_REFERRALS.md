# 11 — Referral Program

> Status: **built**. "Give a month, get a month" — every paid referral earns the referrer one free month.

---

## The deal

- Every account gets a unique, shareable code (`accounts.referral_code`) and link: `https://<app>/?ref=CODE`.
- When a **new** parent subscribes (their first paid invoice clears) using that link, the **referrer** receives a **$9.99 Stripe balance credit** — one free month — applied to their next invoice.
- **One-sided** (referrer only), **uncapped** (every paid referral pays out), **one credit per referred account, ever**.

---

## Flow

```
1. Friend opens  /?ref=CODE
   → <RefCapture> (app/_components/RefCapture.tsx) drops a `lumi_ref` cookie (30d).
2. Friend builds a story → POST /api/draft
   → the route reads lumi_ref, normalises it, and bakes `ref` into the signed draft cookie.
3. Friend pays → the draft (incl. ref) rides in Stripe Checkout metadata (unchanged path).
4. checkout.session.completed → app/api/webhooks/stripe/route.ts → handleNewSubscriber:
   a. create account (+ its own referral_code via ensureReferralCode)
   b. deliver first story
   c. processReferral(draft.ref, newUserId, email)   ← credits the referrer
5. Referrer sees their tally on /account (ReferralCard → GET /api/referrals).
```

## Safety / correctness

- **Self-referral blocked** — same account id or same email is rejected.
- **Idempotent + race-safe** — `referrals.referred_account_id` is `UNIQUE`; `credited_at` is claimed atomically (only-if-null) *before* the Stripe credit and rolled back if Stripe fails. A webhook retry can never double-pay.
- **Best-effort, durable** — a referral hiccup never fails/retries a completed paid signup. The `referrals` row persists as `pending` and can be settled later (an admin "Referrals" module is the natural next step — see `docs/10` §3).
- **Privacy** — `GET /api/referrals` reads via the service-role client and returns only status + dates. The referred friend's email is **never** exposed to the referrer. `referrals` has RLS on with no policies (no direct client reads).

## Data model (migration `006_referrals_and_admin.sql`)

```
accounts.referral_code   text unique               -- shareable code
referrals                referrer_account_id, referred_account_id (unique),
                         referred_email, reward_cents, status, credited_at, created_at
```
`status`: `pending` → `credited` (or `rejected`). RLS-on / no policies → service-role only.

## Key files

- `lib/referral.ts` — code generation, `ensureReferralCode`, `normaliseRefCode`, `referralLink`, `REFERRAL_REWARD_CENTS`
- `app/_components/RefCapture.tsx` — captures `?ref=` into a cookie
- `app/api/draft/route.ts` — bakes `ref` into the draft
- `app/api/webhooks/stripe/route.ts` — `processReferral()` (the only place a paid referral is confirmed + credited)
- `app/api/referrals/route.ts` + `app/_components/ReferralCard.tsx` — the parent-facing tally

## Deliberately deferred

- **Refund clawback** — if a referred user refunds/charges back shortly after, the referrer keeps the credit. Handle later via a `charge.refunded` webhook that reverses the balance transaction and flips the `referrals` row to `rejected`.
- **Double-sided reward** (a discount for the referred friend too) — would need a Stripe coupon applied at checkout.
- **Admin referrals module** — list/settle `pending` referrals (data already flows into `/admin/events`).
