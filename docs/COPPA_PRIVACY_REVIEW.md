# COPPA / Privacy Review — Lumi

**Reviewer:** engineering review against the live codebase (not legal advice).
**Date:** June 2026 · **Scope:** data collection, storage, analytics, subprocessors, parental control, and `app/privacy/page.tsx` vs. reality.

> ⚠️ **This is an engineering/accuracy review, not a legal sign-off.** A children's product that takes payments needs an actual lawyer to review COPPA, FTC, state kids'-privacy codes, GDPR-K, and CCPA compliance. The items in §3 below **cannot** be closed in code.

---

## 1. What's genuinely strong (verified against the code)

| Claim in policy | Verified in code | Status |
|---|---|---|
| No child DOB / photo / location / email / phone | `child_profiles` stores only `name` (first name/nickname), `age_band`, cosmetic slugs (`skin/subject/voice`), `current_level` (`supabase/migrations/001_init.sql`) | ✅ accurate |
| Inputs masked in analytics | PostHog `autocapture:false`, `maskAllInputs:true`, email/text/password masked, manual pageviews (`PostHogProvider.tsx`) | ✅ accurate |
| No child data in analytics | `track()` sends account UUID + non-PII slugs only — never the child's name (`lib/analytics.ts`) | ✅ accurate |
| Parents can export their data | `GET /api/account/export` | ✅ exists |
| Parents can delete everything | `DELETE /api/account` (cancels subscription, cascades `child_profiles`/`story_instances`) | ✅ exists |
| Children have no accounts / don't interact | Parent provides all data via the builder; no child-facing auth | ✅ accurate |
| TTS provider gets no child name | `audioTemplate` has **no** `{child_name}` — the name only appears in the written script emailed to the parent; only the name-free narration text is sent to DeepInfra | ✅ strong data-minimization |
| No card numbers stored | Stripe-only; `accounts.stripe_customer_id` reference (no PAN) | ✅ accurate |

**Bottom line on engineering posture:** the data-handling is genuinely COPPA-minded, and the policy's substantive claims match what the code actually does.

---

## 2. Issues fixed in this pass (committed)

1. **Stale domain** — policy referenced `lumi.app` (now `mylumi.xyz`) in §1, §9, and the contact email. Corrected throughout.
2. **Placeholder contact email** — was `privacy@lumi.app` → `privacy@mylumi.xyz` (see §3.2 — must be a *real, monitored* mailbox).
3. **Voice-recording section described a non-shipped feature** as if live ("Account → Voice settings"). Voice cloning is post-launch. Reworded §5 to "upcoming feature… not yet available" so we don't assert data practices for a feature that doesn't exist (itself a misrepresentation risk).
4. **Subprocessor accuracy** — §7 states DeepInfra receives the story narration text (which may include the child's first name or nickname, so the audio can be personalised — parents may use a nickname; no other personal data is sent), Resend delivers the personalised story to the parent's email, and PostHog carries no child data. *(Updated when name-in-audio shipped — the narration is no longer name-free.)*

---

## 3. ⚠️ Open items that require YOU / legal counsel (cannot be done in code)

1. **Lawyer review — required, not optional.** The file header already says "have a lawyer review this." For a paid children's product this is table stakes (COPPA enforcement carries per-violation FTC penalties). Counsel should confirm the VPC model (3) and review the Terms too.
2. **The privacy contact mailbox must actually work.** COPPA requires a reachable contact for parental access/deletion requests. `privacy@mylumi.xyz` must be a real, monitored inbox — or change it to one you monitor (e.g. `info@codewyse.io`). A bounced privacy address is a compliance failure.
3. **Verifiable Parental Consent (VPC) at the *free* stage — the key legal question.** The paid flow arguably satisfies VPC via the credit-card transaction (a recognized COPPA method). But the **first story is free and gated only by an email** — and at that point you collect the child's first name + age band. A lawyer must decide whether that constitutes collecting a child's personal information requiring consent *before* the paywall, and if so, what consent mechanism is needed at the free step. **This is the single most important question for launch.**
4. **Verify the 24-hour deletion claim end-to-end.** §6 promises full deletion within 24h. Confirm `DELETE /api/account` purges: auth user, `accounts`, `child_profiles`, `story_instances` (FK cascade ✓), **audio/voice objects in Supabase Storage**, the Resend/email side, and that analytics (PostHog) honors a deletion request. Storage objects are not FK-cascaded — confirm they're removed.
5. **CCPA / GDPR specifics.** You correctly never sell data. Still confirm: subprocessor DPAs (Supabase, Stripe, Resend, DeepInfra, PostHog), international-transfer mechanism (SCCs) if you serve EU users, and a "Do Not Sell/Share" note for CA.
6. **Set a real effective date + change-log** at launch.
7. **Email compliance (CAN-SPAM):** transactional story emails are fine; the **waitlist/marketing** emails must carry an unsubscribe (the waitlist email already links `/unsubscribe` — confirm it works).

---

## 4. Verdict

- **Engineering & data posture:** ✅ launch-quality and COPPA-minded — minimal collection, masked analytics, name-free TTS, working export/delete.
- **Privacy policy accuracy:** ✅ now matches reality after this pass.
- **Legally launch-ready:** ❌ **not yet** — blocked on (a) lawyer sign-off, (b) a real monitored privacy mailbox, and (c) the VPC-at-free-stage decision. Items 4–7 are verification/cleanup.

**Do not treat the privacy policy as final until a lawyer has reviewed it and item 3.3 is resolved.**
