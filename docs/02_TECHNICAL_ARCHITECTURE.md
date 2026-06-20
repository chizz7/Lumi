# Technical Architecture — Story-Learning Platform

**Status:** Draft for developer review
**Audience:** Engineering
**Scope:** v1 launch architecture + the seams designed for v1.1+
**Related:** `01_PRD.md` · `03_USER_JOURNEYS.md` · `04_ADR-001-openclaw-vs-direct-llm-apis.md`

---

## 1. The idea the architecture rests on

**The curriculum is fixed and authored once. Personalization is cosmetic and applied at delivery.**

A story's structure, learning objective, concept callbacks, and safety clearance are produced and reviewed at **authoring time** and never altered per customer. At **runtime**, the system does the cheap thing: select a pre-built skin from parent inputs and fill named slots in an already-approved story.

Consequences every engineer should internalize:
- **Runtime is light.** No per-request "write a story from scratch." Expensive generation lives offline.
- **AI is an authoring-time concern, not a runtime dependency.** Runtime is templating + TTS + delivery. (See ADR-001 for *which* AI tooling and why it's not OpenClaw.)
- **Audio is pre-renderable.** Variation space is bounded: fixed stories × curated skins × a small voice set.
- **If personalization ever rewrites learning beats, the model is broken.** Enforce cosmetic-only slots in code (§4.2, FR-9).

---

## 2. System overview

### 2.1 Two logical layers
1. **Curriculum layer (fixed):** subjects → leveled stories → concepts → callbacks → safety status. Authored, expert-reviewed, versioned.
2. **Skin layer (personalized):** curated worlds, hero archetypes, recurring characters, object motifs, refrains. Parent inputs select a skin; the skin fills slots.

**Personalization is the join between these layers** — a deterministic mapping from parent inputs to a skin, not a generation step.

### 2.2 Four operational planes
- **Authoring plane** (offline, internal) — humans + LLM tooling produce/review curriculum and skins.
- **Application plane** — customer-facing web app: landing, onboarding, account, library.
- **Delivery plane** — assembles a story instance, ensures audio exists, packages, delivers.
- **Data & compliance plane** — storage, minimization, consent, deletion, observability.

### 2.3 v1 stack
- **Web:** Next.js + Tailwind (mobile-first; bedtime = phone in hand).
- **AI (authoring only):** direct LLM API (Anthropic/OpenAI/Google) via a small, stateless pipeline — **not** an autonomous agent (ADR-001).
- **Payments:** Stripe.
- **TTS:** vendor TBD (Phase 0 launch blocker) — selected on commercial license + price-per-character + quality.
- **Email:** transactional email provider.
- **Storage:** primary DB (relational) + object storage (audio/scripts) with presigned URLs.

```
[Landing + sample] → [3-tap personalize] → [Preview] → [Pay] → [Onboard + Email delivery]
                                                                         ↑
                          [Story assembler] ← [Content store] + [selected Skin]
                                  ↓
                          [Audio service: cache hit → MP3 | miss → TTS → cache]
```

---

## 3. Component breakdown

### 3.1 Application plane (customer-facing)
| Component | Responsibility | Notes |
|---|---|---|
| Web app (Next.js + Tailwind) | Landing, onboarding, account, library, path selection | Buyer is always an adult; child is never a user |
| Auth | Account-holder identity, session | Email-based, adult only |
| Billing / plan gating (Stripe) | Subscription tiers, delivery/regeneration limits, gifts | Tier gates voice quality + delivery volume |
| Onboarding service | Collects interest tags + chosen path → `ChildProfile` | Interests, not identity (§6) |
| Recommendation service | Ranks available skins/paths for the parent to choose | Cheap ranking over a fixed library, not generation |

### 3.2 Delivery plane
| Component | Responsibility | Notes |
|---|---|---|
| Personalization engine | Maps `ChildProfile` → skin; resolves slot values | Deterministic; optional thin LLM pass only for natural name/refrain weaving |
| Story assembler | Fixed template + skin → `StoryInstance` text | Pure templating; deterministic given inputs |
| **Learning-beat validator** | Rejects any instance whose learning-beat span diverges from the published template | Non-optional guard on the core rule |
| Audio service | Cached MP3 for `(level × skin × voice)` or synthesize on miss | Pre-render common tuples; on-demand fallback for the tail |
| Delivery service | Package MP3 + script, email buyer, write to library | Async job; private streamable links |
| Memory / callback service | Tracks completed levels + which concept to reactivate next | One callback per level (§5.3) |

### 3.3 Authoring plane (offline, internal)
| Component | Responsibility | Notes |
|---|---|---|
| Curriculum CMS | Author/store/version subjects, levels, concepts, callbacks, slots | Structured data, not free text |
| LLM drafting pipeline | Drafts story text against the fixed spine + craft rules for human review | Stateless, logged, versioned API calls — see ADR-001 |
| Safety gate (authoring) | Mandatory second-pass review vs. child-safety rubric | A story cannot reach `published` without passing |
| Expert review queue | Teacher/subject-expert sign-off on sequencing + age floor | Gates the pedagogical-credibility risk |
| Skin authoring | Build + safety-check the curated skin library | Each skin pre-cleared before it can be selected |

### 3.4 Data & compliance plane
| Component | Responsibility | Notes |
|---|---|---|
| Primary DB | Accounts, child profiles, instances, progress, billing refs | Minimal child data (§6) |
| Object storage | Audio files, scripts | Presigned URLs for delivery |
| Event log / analytics | Per-delivery events (subject/level/skin/refrain/voice/outcome) | The PMF instrument |
| Moderation service | Screens free-text inputs before any prompt/template | Non-optional for a kids product |
| Consent & deletion service | Voice consent, export, one-click delete | COPPA / GDPR-K obligations |

---

## 4. Workflows

### 4.1 Onboarding (one-time, post-payment for identity fields)
```
Parent personalizes (pre-account): age band, interest tags, chosen world
  → Moderation screens any free-text
  → Recommendation ranks skins/paths
  → Parent picks a path (skin + subject track)        ← "skin in the game"
  → After payment: persist ChildProfile (interests, NOT identity/behavior)
  → Optional extras captured: nickname, exclusions, themes, voice
```

### 4.2 Deliver a story (the hot path — note how light it is)
```
Trigger (parent taps "next story"; scheduled job in v1.1)
  → Memory service: which level is next? which prior concept to call back?
  → Personalization engine: ChildProfile → skin; resolve slot values
  → Story assembler: published level template + skin → instance text
  → Learning-beat validator: reject if learning-beat span diverges  ← hard guard
  → Audio service:  cache hit → return MP3
                    cache miss → synthesize via TTS → store → return (async "being made" state)
  → Delivery service: email MP3 + script, write to library
  → Event log: record subject/level/skin/voice/outcome
  → Memory service: mark level complete, set next callback
```
**There is no LLM call on this path** when slot-fill is deterministic and audio is cached. This is the entire economic argument.

### 4.3 Author a level (offline)
```
Author defines level in CMS (concept, callback, spine, slots, age floor)
  → LLM drafting pipeline drafts text against the fixed spine + craft rules
  → Human author edits
  → Safety gate (mandatory): pass/fail vs. child-safety rubric
  → Expert review: pedagogical sequencing + age-appropriateness sign-off
  → Publish (versioned). Only published + cleared levels are deliverable.
  → Pre-render audio for common (level × skin × voice) tuples.
```

---

## 5. Data model (core entities)

### 5.1 Curriculum layer
```
Subject        { id, name, foundation_concept, status }
Level          { id, subject_id, order, new_concept, callback_concepts[],
                 spine, learning_beat, age_floor, slots[], story_template_ref,
                 version, status: draft|safety_cleared|expert_reviewed|published }
Concept        { id, subject_id, label, depends_on[] }     // dependency graph
StoryTemplate  { id, level_id, text_with_slots, refrain_slot, version }
```
`Concept.depends_on` enforces correct sequencing — validate at publish time that prerequisites are already published earlier in the subject.

### 5.2 Skin layer
```
Skin     { id, setting, hero_archetype, recurring_character{name,type,traits},
           object_motif, refrain, age_bands[], status: draft|safety_cleared }
SlotMap  { skin_id, slot_name → value }      // which skin value fills which template slot
```
Skins are a **curated library**, not user-generated. Parents select; they never author.

### 5.3 User / runtime layer
```
Account       { id, email, plan, created_at }              // adult only
ChildProfile  { id, account_id, nickname?, age_band, interest_tags[],
                favorite_thing?, themes[], exclusions[], chosen_skin_id,
                chosen_subject_id }
Progress      { child_profile_id, subject_id, current_level, completed_levels[],
                next_callback_concept_id }
StoryInstance { id, child_profile_id, level_id, skin_id, voice_id,
                script_ref, audio_ref, delivered_at, feedback }
Consent       { account_id, voice_recording: bool, granted_at }   // v1.1 voice cloning
```

### 5.4 The example level object (concrete)
```
Level 4 — "Saving Up for the Big Thing"
  subject: money
  new_concept: "delayed gratification — saving over time"
  callback_concept: (Level 2) "coins have different values"
  spine: [cozy open → small want → try+turn → warm resolution → wind-down]
  learning_beat: child-character chooses to save instead of spend; the recurring
                 character reminds them how to tell coin values apart (← L2 callback)
  personalization_slots: {child_name, interest_skin, recurring_character}
  status: safety_cleared, expert_reviewed
```

---

## 6. What is absent by design (read before adding fields)

The data model deliberately **omits**: birthdate (age *band* only), photos, location, school, and any behavioral/engagement tracking of the child. This is a compliance posture baked into the schema, not bolted on. Do not "helpfully" add these. Every collected field must map to a slot the authored story actually exposes — if a parent input has nowhere to go, it's a vanity field; don't collect it.

**Discipline:** author the slots first, then collect only the inputs that fill them.

---

## 7. Safety architecture (three independent gates)

1. **Authoring safety gate** — every authored story passes a separate child-safety rubric (no violence, fear, peril, unsafe behavior; honors exclusions; bedtime wind-down ending). Never merge generation and safety into one step.
2. **Input moderation** — parent free-text screened before it enters any prompt/template.
3. **Runtime trust recovery** — "report this story" with automatic credit.

---

## 8. Personalization: deterministic vs. thin-LLM (open decision)
- **Option A — pure templating (preferred default).** Slots are string substitutions (`{child_name}`, `{hero}`, `{object_motif}`, `{refrain}`, `{recurring_character}`). Deterministic, zero marginal LLM cost, maximally cacheable.
- **Option B — thin LLM pass (use sparingly).** A single cheap, tightly-constrained call that weaves name/refrain naturally and smooths transitions, rewriting **only marked spans** and never the learning beat. Breaks perfect cacheability; weigh against pre-render strategy. Use only if A reads robotically.

---

## 9. v1.1+ seams (design now, build later)
Voice cloning (with consent flow) · scheduled auto-delivery · multi-child profiles · additional subjects · illustrations · multi-language. Design the seams now — `voice_id` and `Consent` already in the model; `ChildProfile` keyed per child — so fast-follow doesn't require schema surgery.

---

## 10. Why this shape is right
It converts the concept's three weak spots into strengths: **margin** (authoring paid once; runtime is templating + cached audio), **retention** (leveled spiral + callbacks give an in-order reason to return), and **defensibility** (a spiraled, expert-reviewed curriculum + owned story IP). The price of admission is pedagogical correctness — which is why the expert-review gate and the concept dependency graph are not optional.
