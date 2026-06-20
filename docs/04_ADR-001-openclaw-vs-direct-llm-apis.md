# ADR-001 — OpenClaw vs. Next.js + Direct LLM APIs

**Status:** Accepted (recommendation)
**Date:** 2026-06-07
**Decision driver:** "Is OpenClaw the best tool for this, or should we build with only Next.js + LLM APIs?"

---

## Decision

**Build v1 with Next.js + direct LLM API calls. Do NOT make OpenClaw a component of the system.**

OpenClaw may, optionally, be used by an individual author as a personal drafting assistant on their own machine — but it must never sit in the product's critical path or in the reproducible content pipeline.

---

## Context

OpenClaw is a viral open-source **personal AI agent gateway**: a long-running, local-first daemon that connects an LLM to your files, shell, browser, and messaging channels (WhatsApp, Slack, Telegram, etc.), with a heartbeat loop, persistent memory, and 100+ installable "skills." It's model-agnostic and bring-your-own-API-key. Its design center is **always-on autonomy on a personal machine** — triaging email, running life-admin, orchestrating agent swarms.

This product needs AI in exactly **one place**: the **authoring plane**, to draft story text against a fixed 5-beat spine, which a human then edits and which must pass a safety gate and an expert review. The **runtime path needs no LLM at all** (deterministic slot-fill + cached TTS). See `02_TECHNICAL_ARCHITECTURE.md` §4.2.

So the real question is narrow: *for drafting stories at authoring time, is an autonomous personal-agent gateway the right tool, or are plain stateless API calls better?*

---

## Why direct LLM APIs win here

1. **The need is a content pipeline, not an agent.** Authoring wants: same spine + same prompt → a reviewable draft, logged and versioned. That is a **stateless, deterministic-to-reason-about** operation. Direct API calls model it exactly; an autonomous agent adds nondeterminism the use case doesn't want.

2. **Auditability is load-bearing for a kids' product.** Every published story must be traceable to its inputs and its safety/expert sign-off. Plain API calls give you a clean request/response to log and diff. An always-on agent with memory and shell access blurs provenance — bad for a domain where "why did this story say that?" must be answerable.

3. **OpenClaw's strengths are irrelevant here, and its costs are real.** Always-on autonomy, multi-channel messaging, acting on your local machine — none of that is needed to draft text against a spine. What you *do* inherit by adopting it: a self-hosted daemon to run and harden, token/allowlist management, a prompt-injection surface, shell-execution risk, and a fast-moving open-source target. For a children's product, autonomous agency at authoring time is a liability, not a feature.

4. **Stack simplicity.** v1 is already Next.js + a TTS vendor + Stripe + email. You need an LLM provider SDK anyway (for the optional thin slot-fill pass). Adding OpenClaw means standing up and securing a separate VPS-hosted agent system for capability you don't use. One fewer moving part is the right default.

5. **Determinism protects the core rule.** The whole architecture depends on "fixed curriculum, cosmetic personalization." A controllable, reviewable drafting step where humans gate every output reinforces that rule. An autonomous agent that can take initiative cuts against it.

---

## Where OpenClaw *could* legitimately help (optional, out of band)

As a **personal productivity tool for an author**, run locally: "draft three variations of Level 4's spine," "summarize reviewer feedback across these drafts." The author pastes useful output into the CMS, where it still passes the human edit + safety gate + expert review. This is a person's tool, not the system's — it leaves no architectural footprint and creates no runtime or compliance dependency.

---

## What the build actually uses

- **Next.js + Tailwind** — the entire customer-facing application + the internal CMS UI.
- **A direct LLM API** (Anthropic / OpenAI / Google) called from a small, stateless server-side pipeline — used **only** at authoring time to draft against the fixed spine, and (optionally) for a tightly-constrained thin slot-fill pass at delivery if pure templating reads robotically.
- **No agent framework, no OpenClaw, in the product.**

---

## Consequences

- **Positive:** simpler stack, clean auditability, stronger safety/compliance posture, full control over prompts and versioning, lower ops burden.
- **Negative / trade-offs:** you forgo OpenClaw's autonomous orchestration — which this product doesn't need at v1. If a future use case genuinely wants always-on autonomous workflows (e.g., an internal ops agent), revisit then, scoped and isolated, never on the child-facing path.
- **Revisit trigger:** a concrete, recurring authoring workflow that is (a) multi-step, (b) genuinely benefits from autonomy, and (c) can be fully logged and gated. Until then, direct APIs.

---

## One-line summary for the team

*Runtime needs no LLM; authoring needs a controllable, auditable drafting step. That's direct LLM API calls inside a Next.js app — not a self-hosted autonomous agent. Keep OpenClaw, if at all, as a personal tool outside the system.*
