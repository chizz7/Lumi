# User Journeys & Flows — Story-Learning Platform

**Status:** Draft for developer review
**Audience:** Engineering + Design + GTM
**Related:** `01_PRD.md` · `02_TECHNICAL_ARCHITECTURE.md`

---

## 1. Primary journey — first-time buyer (the conversion funnel)

**Decision: demonstrate free → personalize to build investment → pay to unlock delivery.**

```
1. LANDING        Play a generic sample story. No signup. (Proves the product.)
2. PERSONALIZE    "Make one for your child" → 3 taps:
                  age band · interest tags · pick a world.
                  Interests only. No account, no identity yet.
3. PREVIEW        Play the opening 30–45s of THEIR personalized story,
                  with the child's name and chosen world already in it.
                  (Now they're invested — they've heard it made for their kid.)
4. PAY            "Unlock the full story + get it emailed" → account + Stripe.
5. ONBOARD+SEND   Optional extras (nickname, exclusions, themes, voice),
                  then deliver full audio + script to the parent's email + library.
```

### 1.1 Why this order (not payment-first)
- **Investment lifts conversion.** Letting a parent customize and *hear their child's name in a story* before paying creates ownership (endowment / IKEA effect). A cold paywall on a novel, emotional product loses people.
- **It stays compliant and low-friction.** Pre-payment we collect only interest tags — no birthdate, no identity, no account. Sensitive/optional fields (nickname, voice) come **after** payment, when they're a customer. So personalization-first does not create a data-collection problem.
- **Payment gates the moment of value** — full delivery to email — which is exactly where willingness to pay peaks.

Payment-first only wins for known brands or cheap impulse buys with established trust. That's not us at launch.

### 1.2 Stage-by-stage detail

| Stage | User does | System does | Data collected | Exit/CTA |
|---|---|---|---|---|
| Landing | Taps "▶ Hear a sample" | Streams a generic cached sample | none | "Make one for your child →" |
| Personalize | 3 taps: age band, interests, world | Moderates free text; ranks/selects skin | interest tags only | "Hear their story →" |
| Preview | Listens to ~30–45s | Assembles instance, serves cached preview audio | none new | "Unlock full story →" |
| Pay | Enters email + payment | Stripe checkout; create adult account | email, billing ref | "Where should we send it?" |
| Onboard + send | Optional extras | Persist ChildProfile; assemble + deliver full story | nickname/exclusions/themes/voice (optional) | Library + email confirmation |

---

## 2. Returning-buyer journey — the retention loop (the PMF metric)

```
Parent opens library / taps "next story"
  → Memory service determines next level + which prior concept to call back
  → Same flow as 4.2 hot path: assemble → validate → audio (cache) → deliver
  → Child hears a NEW level that references a character/lesson from a prior one
  → Parent perceives progression → reason to return
```
The **second-story return rate** is the core PMF signal; the leveled spiral and recurring-character callbacks exist specifically to drive it. Instrument every step.

---

## 3. Trust-recovery journey

```
Parent dislikes a story → taps "Report this story"
  → Automatic credit issued
  → Event logged with reason (feeds content review)
  → Optional: offer an alternate skin/level immediately
```

---

## 4. Data-rights journey (compliance)

```
Parent → Account settings
  → "Export my data"  → packaged export of all stored profile data
  → "Delete everything" → one-click delete of profile + instances + (if any) voice consent data
```

---

## 5. Internal journey — authoring a level (offline)

```
Author opens Curriculum CMS
  → Defines level: new_concept, callback_concepts, 5-beat spine, learning_beat,
                   age_floor, named slots, template ref
  → Concept dependency graph validates prerequisites are already published
  → LLM drafting pipeline drafts text against the fixed spine
  → Author edits the draft
  → SAFETY GATE (mandatory): pass/fail vs. child-safety rubric  → fail loops back
  → EXPERT REVIEW: pedagogy + age sign-off                       → fail loops back
  → Publish (versioned)
  → Pre-render audio for common (level × skin × voice) tuples
```

The two gates (safety, expert) are the parts most likely to get cut for speed and are exactly the two that protect the product's differentiation and trust. They are not optional.

---

## 6. CRO landing page — component spec

Goal: one job — **get the parent to play a sample and start personalizing.** Mobile-first, fast-loading, one primary CTA repeated down the page.

### 6.1 Above the fold
- **Headline — outcome + emotion, not features.** e.g. *"Bedtime stories that teach your child about money — in a voice they'll love."*
- **Subhead — the unique mechanism in one line.** e.g. *"Original adventures, personalized to your child, that build real skills level by level."*
- **Hero visual** — warm child-and-character illustration (original IP, no franchises).
- **Primary CTA** — *"▶ Hear a sample"* (low-commitment) beside *"Make one for your child →"*.

### 6.2 Sections (in order)
1. **Social proof** — parent quotes / counts (once available).
2. **How it works (3 steps)** — personalize → preview → it arrives in your inbox.
3. **The learning differentiator** — leveled curriculum + spaced-repetition callbacks; the moat, explained simply.
4. **Sample-output walkthrough** — a playable sample with a *"your child's name goes here"* callout. This is the element that makes personalization tangible before the parent types anything.
5. **Pricing + risk reversal** — clear tiers; report-and-credit promise.
6. **Trust & safety** — every story is safety- and expert-reviewed; data minimization stated plainly.
7. **FAQ** — age range, safety, data, cancellation.
8. **Final CTA** — repeat the primary action.

### 6.3 CRO principles applied
- One primary action, repeated; secondary actions never compete visually.
- Show, don't tell: the sample audio does the selling.
- Make personalization tangible *before* asking for anything (the name callout).
- Defer all identity/sensitive data until after the value moment (payment).
