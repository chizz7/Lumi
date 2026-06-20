# Story-Learning Platform — Developer Documentation

This is the complete documentation set to develop the platform. Read in order.

| # | Doc | What it covers |
|---|---|---|
| 01 | `01_PRD.md` | Formal product requirements: problem, users, user stories, functional + non-functional requirements, success metrics, phasing, risks, open decisions. |
| 02 | `02_TECHNICAL_ARCHITECTURE.md` | System layers & planes, components, data model, request/authoring workflows, safety architecture, v1.1+ seams. |
| 03 | `03_USER_JOURNEYS.md` | Buyer funnel + retention loop, trust-recovery & data-rights flows, internal authoring journey, CRO landing-page spec. |
| 04 | `04_ADR-001-openclaw-vs-direct-llm-apis.md` | The decision: build with Next.js + direct LLM APIs; do not make OpenClaw a system component. |
| 05 | `05_DESIGN_BRIEF.md` | End-to-end parent journey, screen specs, CRO rationale, voice-feature decision (companion: `landing.html`). |
| 06 | `06_BACKEND_ARCHITECTURE.md` | Backend deep-dive: runtime topology, full DB schema, API surface, publish gate, assembly/validator logic, audio content-hash caching, jobs, security, failure modes. |
| 07 | `07_DEVELOPMENT_PLAN.md` | The exact build process: Phases 0–5 with tickets, exit gates, testing strategy, and launch checklist. |

## The one rule everything depends on
**Fixed curriculum, cosmetic personalization.** The lesson is authored once and expert-reviewed; personalization only swaps the paint (name, world, recurring character). If personalization ever rewrites the lesson, the economics and the safety model both break. Enforce in code (learning-beat validator), not convention.

## Start-here pointers for reviewers
- **Architecture §4.2** — the hot path has *no LLM call*; this is the entire economic argument.
- **Architecture §5–6** — the data model and what's deliberately absent from it (no birthdate, photos, location, or behavioral tracking). Understand why before adding fields.
- **PRD §11 / Architecture §8** — the real forks left to the team: templating vs. thin-LLM slot-fill, TTS vendor, CMS build-vs-buy.
- **ADR-001** — why this is Next.js + LLM APIs, not an agent.

## Build order (from PRD §9)
Phase 0 decisions → Phase 1 author content → Phase 2 thin end-to-end slice → Phase 3 funnel + account → Phase 4 protect margin + trust → legal review (COPPA / GDPR-K) before launch.
