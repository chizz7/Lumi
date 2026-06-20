# Product Requirements Document — Story-Learning Platform

**Working name:** Story-Learning Platform (codename TBD)
**Status:** Draft for engineering + stakeholder review
**Owner:** Product
**Last updated:** 2026-06-07
**Related docs:** `02_TECHNICAL_ARCHITECTURE.md` · `03_USER_JOURNEYS.md` · `04_ADR-001-openclaw-vs-direct-llm-apis.md`

---

## 1. Summary

Parents receive **original, leveled audio bedtime stories that teach a real subject** (launch subject: **money / saving**). The curriculum is **authored once, expert-reviewed, and never changes per customer.** Personalization is **cosmetic only** — the child's name, a chosen story world ("skin"), and a recurring character are slotted into an already-approved story. Each finished story is delivered as **audio + a readable script to the parent's email** and saved to their library.

Because stories are pre-built and audio is cached, **the customer-facing path runs with effectively no LLM cost at runtime.** All expensive generation happens **offline at authoring time**.

> **The one rule the whole product depends on:** *Fixed curriculum, cosmetic personalization.* If personalization ever rewrites the lesson, both the unit economics and the child-safety model break. This must be enforced in code, not convention.

---

## 2. Problem & opportunity

Parents want their children to learn real-world skills (money, focus, resilience) but lack good, age-appropriate, low-effort tools. Bedtime is a daily, high-intent, emotionally invested moment already owned by stories. Generic AI story generators are unsafe to trust, expensive per request, and pedagogically random.

The opportunity is a product that is:
- **Trustworthy** — every story is safety- and expert-reviewed before any child hears it.
- **Pedagogically real** — a leveled, spiraled curriculum with spaced-repetition callbacks, not random output.
- **Cheap to run** — authored once, personalized cosmetically, audio cached → high margin.
- **Defensible** — the curriculum and original story IP are owned assets, not rented model output.

---

## 3. Goals & non-goals

### 3.1 Goals (v1)
1. Ship one fully built subject (money), 5–7 leveled stories, each expert- and safety-reviewed.
2. Let a parent personalize and preview a story in under 60 seconds with no account.
3. Convert via a paywall at the moment of value (full delivery), then deliver audio + script to email.
4. Track per-delivery events well enough to measure the **second-story return rate** (the core PMF signal).
5. Be COPPA / GDPR-K defensible by design (data minimization baked into the schema).

### 3.2 Non-goals (explicitly out of scope for v1)
- Real-time, from-scratch story generation per request.
- Voice cloning (deferred to v1.1 with a consent flow).
- Multiple subjects (clone only after one subject proves retention).
- Multi-child profiles, scheduled auto-delivery, illustrations, multi-language (all v1.1+ seams).
- Any behavioral profiling or engagement tracking of the child.

---

## 4. Users & personas

- **The Buyer (primary user): a parent/guardian.** Always an adult. Owns the account, makes every decision (path selection, refresh, payment, consent). The child is **never** a user of the system.
- **The Listener: the child.** Hears the story; never interacts with the software directly.
- **The Author (internal): writer + subject expert/teacher.** Produces and reviews curriculum and skins offline.
- **The Reviewer (internal): safety + pedagogy gatekeeper.** Signs off before publish.

---

## 5. User stories

**Buyer**
- As a parent, I can play a generic sample story without signing up, so I can judge quality risk-free.
- As a parent, I can personalize a story in a few taps (age band, interests, world) without giving identity data.
- As a parent, I can hear the opening of *my child's* personalized story before paying.
- As a parent, I can pay and receive the full story (audio + script) by email and in my library.
- As a parent, I can report a story I'm unhappy with and get an automatic credit.
- As a parent, I can export or one-click delete all my data.

**Author / Reviewer**
- As an author, I can define a level as structured data (concept, callback, spine, slots, age floor) in a CMS.
- As an author, I can draft story text against the fixed spine and edit it before review.
- As a reviewer, I can pass/fail each story against a child-safety rubric, and no story can publish without passing.
- As a subject expert, I can sign off on pedagogical sequencing and age-appropriateness before publish.

---

## 6. Functional requirements

### 6.1 Content (authoring plane — offline)
- **FR-1** Authors define **Subjects → Levels** as structured data. Each Level declares: `new_concept`, `callback_concepts[]`, a fixed 5-beat `spine`, a `learning_beat`, `age_floor`, named `slots[]`, and a `story_template_ref`.
- **FR-2** A **Concept dependency graph** (`Concept.depends_on[]`) is validated at publish time: a level may not teach a concept whose prerequisites aren't already published earlier in the same subject.
- **FR-3** Story drafts are produced against the fixed spine (see ADR-001 for tooling) and human-edited.
- **FR-4** Every story passes a **mandatory authoring safety gate** (separate pass) before it can reach `published`.
- **FR-5** Every story passes **expert review** (pedagogy + age) before publish. Statuses: `draft → safety_cleared → expert_reviewed → published`. Only `published` levels are deliverable.
- **FR-6** A curated **Skin library** (6–8 worlds at launch) is authored and individually safety-cleared. Skins are never user-generated.

### 6.2 Personalization & assembly (delivery plane)
- **FR-7** Parent inputs deterministically map to a **skin** (a join, not a generation step).
- **FR-8** The **Story Assembler** fills named slots in a published template with skin values (pure string substitution by default).
- **FR-9** A **post-assembly validation step** rejects any instance whose learning-beat span diverges from the published template. (Hard guard on the "fixed curriculum" rule.)

### 6.3 Audio & delivery
- **FR-10** An **Audio service** returns a cached MP3 for a `(level × skin × voice)` tuple; on a cache miss it synthesizes via the TTS vendor, stores, and returns.
- **FR-11** Common tuples are **pre-rendered** at authoring time.
- **FR-12** A **Delivery service** emails the parent the MP3 + script and writes both to their library (private, access-controlled links).

### 6.4 Funnel & account
- **FR-13** Landing page plays a generic sample with no signup.
- **FR-14** 3-tap personalization collects **interest tags only** (age band, interests, world) — no identity, no account yet.
- **FR-15** A **preview** plays the opening ~30–45s of the personalized story.
- **FR-16** Paywall (Stripe) → account creation (adult email) → full delivery.
- **FR-17** Optional post-payment onboarding (nickname, exclusions, themes, voice).
- **FR-18** Story **library** with private streamable links.

### 6.5 Trust, safety & compliance
- **FR-19** All free-text parent inputs are **moderated** before they touch any prompt or template.
- **FR-20** "**Report this story**" control with automatic credit.
- **FR-21** **Consent** capture for voice recording (v1.1), scoped and deletable.
- **FR-22** **Data export** and **one-click delete** for all stored profile data.
- **FR-23** Per-delivery **event logging** (subject, level, skin, refrain, voice, outcome).

---

## 7. Non-functional requirements

- **Performance:** customer hot path must have **no LLM call** when slot-fill is deterministic and audio is cached. Cache-miss synthesis should present a "your story is being made" state and complete asynchronously.
- **Reliability:** delivery is treated as a job, not a synchronous request, so a TTS hiccup never blocks the UX.
- **Security:** adult-only accounts; private/presigned media links; least-privilege credentials for any authoring tooling (see ADR-001).
- **Privacy by design:** the data model omits birthdate (age band only), photos, location, and any behavioral tracking of the child. Fields don't exist so they can't leak or be "helpfully" added.
- **Auditability:** every published story is versioned and traceable to its safety + expert sign-off.
- **Cost:** marginal cost per delivered story trends toward TTS-on-miss + email only; authoring cost is paid once per level.

---

## 8. Success metrics

- **Primary (PMF):** **second-story return rate** — % of buyers who request a second story. The leveled spiral + recurring-character callbacks exist to drive this.
- **Funnel:** sample-play rate → personalize-start rate → preview-completion → paid conversion.
- **Quality/trust:** "report this story" rate (target: very low); refund/credit rate.
- **Margin:** audio cache-hit rate; marginal cost per delivered story.

---

## 9. Scope & phasing

**Phase 0 — Decisions (before code)**
- Select TTS/voice vendor on commercial license + price-per-character + quality. *Launch blocker.*
- Confirm slot-fill is pure templating for v1 (default yes).
- Confirm AI tooling choice for authoring (see ADR-001 — recommendation: direct LLM APIs, not OpenClaw).

**Phase 1 — Author content** (parallel; gated by experts): one subject, 5–7 levels, safety + expert review, starter skin library, pre-rendered audio.

**Phase 2 — Thin slice that proves the loop:** assembler (+ learning-beat validation) → audio service (cache-first) → email delivery. *Ship nothing else until a hardcoded profile produces an emailed story end-to-end.*

**Phase 3 — Funnel + account:** landing + sample → 3-tap personalize → preview → Stripe → delivery → library.

**Phase 4 — Protect margin + trust:** metered regenerations, voice tiering, report+credit, input moderation, event logging, export/delete.

**Before launch:** legal review against COPPA / GDPR-K for target markets.

---

## 10. Risks & mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Personalization drifts into rewriting lessons | Breaks economics + safety | Hard post-assembly validation (FR-9); slots are cosmetic by construction |
| Pedagogical sequencing is wrong | Erodes the core differentiator | Concept dependency graph (FR-2) + mandatory expert review (FR-5) |
| Safety failure in a child-facing story | Existential trust/legal risk | Independent authoring safety gate (FR-4) + input moderation (FR-19) + report/credit (FR-20) |
| Compliance gap (COPPA/GDPR-K) | Legal exposure | Data minimization in schema; adult-only accounts; export/delete; pre-launch legal review |
| TTS vendor license/cost surprise | Launch blocker | Vendor decision gated in Phase 0 on commercial terms + price |
| Expert-review/dependency-graph cut for speed | Loses the moat | Flagged as defend-in-review; not a default cut |

---

## 11. Open decisions (left to the team)

1. **Slot-fill:** pure templating (A, preferred) vs. a thin, tightly-constrained LLM pass (B) used only if A reads robotically. B breaks perfect cacheability — measure read quality first.
2. **TTS/voice vendor** — commercial license, future-cloning terms, quality, price-per-character.
3. **Curriculum CMS** — minimal internal tooling vs. adapt a headless CMS (the dependency-graph validation is custom either way).
4. **Where the immutability check lives** — recommended: a hard validation step in the assembler.
