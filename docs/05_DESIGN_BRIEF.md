# Design Brief — End-to-End Parent Journey & CRO Landing

**Status:** Draft for design + engineering
**Companion:** `prototype.html` (clickable, mobile-first; includes a "Show CRO notes" toggle)
**Related:** `01_PRD.md` · `03_USER_JOURNEYS.md`

---

## 1. What this is

A single, mobile-first flow that takes a parent from cold landing → a personalized, voiced story → payment → delivery, with the landing page doing the conversion work. The prototype is clickable end-to-end and annotated; this brief is the spec behind it.

**Design north star:** make creating a story feel *easy, high-quality, and highly customizable* — so the parent perceives a high-value, lesson-bearing story, not a generic AI toy.

---

## 2. Aesthetic direction

- **Mood:** warm twilight / storybook-premium. Deep indigo night with a glowing moon and amber accents on cream surfaces. Calming (it's bedtime) but clearly premium and trustworthy (a parent is judging whether to trust AI with their kid).
- **Type:** Fraunces (characterful display serif, storybook warmth) + Figtree (clean humanist body). Deliberately *not* generic system/Inter aesthetics.
- **Mobile-first:** bedtime = phone in hand. Everything is designed in a phone frame; one primary CTA repeated down the page.

---

## 3. The flow (6 interfaces)

| # | Screen | Job | Data collected |
|---|---|---|---|
| 1 | **Landing** | Prove quality + ease, start the builder | none |
| 2 | **Builder** (4 steps) | Personalize: name/age → world → subject → voice | interest tags only, no account |
| 3 | **Preview** | Let them hear *their* story; switch voices | none new |
| 4 | **Paywall** | Convert at the value moment (Stripe) | email + billing |
| 5 | **Onboard + voice** | Optional extras + voice recording w/ consent | optional; voice behind consent |
| 6 | **Delivered + library** | Confirm delivery, seed the return loop | — |

### 3.1 Landing (screen 1)
Above the fold: outcome+emotion headline, the mechanism in one subhead line, a low-commitment **"Hear a sample"** beside the intent CTA **"Make one for your child."** Then, in order: how-it-works (3 steps, effort framed as "three taps"), the **curriculum ladder** (the differentiator — levels that call back prior lessons), the **voice showcase** (switchable curated voices, live), the **"your voice" teaser**, a **personalized sample** with the name highlighted, **pricing + risk reversal** (free first, $9/mo, report-and-credit), **trust & safety**, **FAQ**, and a final CTA.

### 3.2 Builder (screen 2) — 4 steps, progress bar
1. **Name + age band** — lowest-friction first ask; name creates instant investment; "no account needed" reassures.
2. **World ("skin")** — sea / space / forest / castle. Same lesson, different paint.
3. **Subject** — Money live; others shown as "Soon" to signal a roadmap.
4. **Voice** — switchable curated voices + an "after sign-up" voice-recording note.

### 3.3 Preview (screen 3) — the conversion moment
Plays the opening of *their* story with the child's name and chosen world already in it. A voice switcher sits right here so every tap keeps them engaged and raises willingness to pay. The rest of the story is locked behind a soft fade → "Unlock the full story."

### 3.4 Paywall (screen 4)
Free first story, then $9/mo. Identity/payment collected **only now** — never earlier. Stripe, adult-account-holder only, risk reversal repeated.

### 3.5 Onboarding + voice (screen 5)
Optional nickname/exclusions, then the **voice recorder** behind an explicit, scoped, revocable **consent** checkbox. Everything is skippable ("just send it").

### 3.6 Delivered + library (screen 6)
Confirmation that audio + script were emailed and saved, plus a library that previews next week's level — seeding the return loop (the PMF metric).

---

## 4. Voices — the design decision

**Two distinct features, deliberately separated:**

1. **Voice switching (curated voices) — live everywhere, including the landing page.**
   Four voices with clear personalities (warm/soft, calm/low, bright/playful, gentle). This is the headline "customizable + high quality" demo. It's cheap and cacheable because audio per `(story × skin × voice)` is pre-rendered. Put it on the landing page, in the builder, and in the preview.

2. **Voice recording / cloning (the parent's own voice) — teaser on landing, real flow after payment + consent.**
   This is the higher-value, more emotional feature ("your child hears the story in *your* voice"). **Recommendation: do not collect voice on the landing page.** Voice is biometric, sensitive data; capturing it from anonymous visitors (who may also capture a child's voice) cuts directly against the data-minimization and consent posture in the PRD/architecture, and is a v1.1 feature there for that reason.
   - **Landing:** a teaser card that sells the idea — "available after you create your account."
   - **Onboarding (post-payment):** the actual recorder, behind a scoped, revocable consent checkbox, deletable anytime.
   - **Net:** full marketing punch, zero pre-account biometric collection.

---

## 5. CRO principles applied (toggle them on in the prototype)

- **One primary action, repeated.** "Make one for your child" recurs; secondary actions never compete visually.
- **Show, don't tell.** The sample audio and the name-in-the-story do the selling; claims are backed by the visible curriculum ladder.
- **Make personalization tangible before asking for anything.** The highlighted name slot is the single most persuasive element.
- **Reduce perceived effort.** "Three taps" framing; "no account needed yet."
- **Defer sensitive data to after the value moment.** Interests pre-payment; identity at payment; voice (with consent) after.
- **Risk reversal at the price point.** Free first story + report-and-credit removes the final hesitation.
- **Investment before payment.** Demonstrate → personalize → preview → pay; willingness to pay peaks at full delivery.

---

## 6. Notes for engineering

- Every personalization input maps to a real slot the authored story exposes (name, world/skin, recurring character, voice). If an input has nowhere to go in the story, it's a vanity field — don't collect it.
- The voice picker is a selection over a **curated, pre-rendered** set; it is not generation. Cache key is `(level × skin × voice)`.
- The voice recorder must write to the `Consent` model and be covered by export/one-click-delete.
- The prototype simulates audio (animated waveform + timer) — wire these players to the real cached MP3s. No real TTS is invoked in the prototype.
- Mobile-first is load-bearing, not cosmetic: design and test at phone width first.

---

## 7. Open questions for the team

1. How many curated voices at launch (prototype shows 4)? Each adds pre-render cost across the skin × level matrix.
2. Does the landing-page voice switcher use a single shared demo line, or the actual sample story per voice? (Prototype uses one demo line.)
3. Should voice recording be a Story Club perk (gated by plan) or available to all paying accounts?
4. Free-first vs. preview-only before the paywall — the prototype assumes free first story; confirm against pricing strategy.
