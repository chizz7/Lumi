# Story Craft — the "Calm Adventure" framework

**Status:** Adopted. All new levels and rewrites follow this. Money L1 ("The Keyhole Coin") is the reference implementation.

## The problem this fixes

The v1 stories were meditations, not stories: the hero *notices* something, the
companion *explains* the concept, the hero *repeats* it, everyone sleeps. Nothing
was ever wanted, attempted, risked, or discovered by the child-hero. Kids feel a
lesson coming a mile away — and tune out.

## The core principle

**Bedtime excitement comes from curiosity, never from danger.**
High interest, low arousal. The levers that are safe at 8pm:

| Lever | What it looks like |
|---|---|
| Wanting | The hero has a concrete, warm goal *tonight* |
| Mystery | A question with audible clues the listener can solve first |
| Mischief | Low-stakes comedy; a funny failure; a charming flaw |
| Agency | The hero acts, fails, adapts, and wins — themselves |
| Soft twist | A reveal that reframes things *upward* (kinder/cleverer than they seemed) |
| Participation | Refrains, counting, whisper-asides the child can join |
| Anticipation | A cozy "ember" of tomorrow in the final lines |

Never: peril, chase, menace, panic-clocks, loss that stays lost, twists that
reframe downward. The middle of the story rises; the ending always glides.

## The 5-beat spine (replaces cozy-open → discover → explain → practice → sleep)

1. **HOOK — a want plus an oddity.** Within the first paragraphs the hero wants
   something concrete, and one small thing is strange. Not "the hero noticed
   coins" but "the music box only opens for one coin in all the world."
2. **TRY — the funny fail.** The hero tries the obvious way and it fails,
   gently and a little comically. The failure happens *because the hero doesn't
   yet have the concept.* (This is what makes the lesson feel needed, not taught.)
3. **TURN — the soft twist.** A discovery reframes the problem, and **the
   concept is the key that unlocks it.** The learning beat lands here — spoken
   by the HERO at the moment of insight, not recited by the companion.
4. **WIN — agency.** The hero applies the concept themselves and gets the want,
   or something warmer than the want.
5. **SETTLE — the descent ramp.** Mandatory final ~20%: resolution, slowing
   rhythm, shortening sentences, the refrain, and one forward **ember** — a warm
   unanswered detail for tomorrow ("its name can wait till morning"). Never a
   cliffhanger; always an invitation.

**Placement rule:** the twist lives at 55–70% of the story. Nothing surprising
happens in the last 20%.

## The soft-twist library

1. **The backwards clue** — the smallest/plainest thing is the key.
2. **The helper who needed help** — the wise companion is the one who's stuck;
   the hero's new skill rescues *them*.
3. **It was you all along** — the mysterious cause is revealed benignly.
4. **The treasure isn't the treasure** — the real prize is what the search built.
5. **The plan fails into a better plan** — the mistake becomes the solution.
6. **Two mysteries, one answer** — two odd things share one sweet cause.
7. **The secret keeper** — the world knew all along; the hero just learned to read it.

## Audio-first techniques (this is an audio product — use the medium)

- **Refrain ×2–3:** the skin's {refrain} appears mid-story (spoken by the
  companion at an emotional moment) and again as the closing line — kids learn
  to say it along. In longer bands, an early seeding too.
- **One listener-aside per story:** a direct whisper to the child listener with
  a guessable clue: "Lean close. Can you see it too? A little boat."
- **Sound words:** one small onomatopoeia moment (clink, click, pfft) — comedy
  and texture for the ear.
- **Counting beats** in the 3–4 band (one, two, three) — participation.
- **The descent ramp is acoustic:** final paragraphs use shorter sentences and
  softer verbs so the narration itself slows.

## Character rules

- **The companion is an accomplice, not a professor.** At most ONE nudge
  ("Hmm," said the owl, who knew some doors you have to find yourself). The
  hero does the discovering. The companion may carry the emotional payload
  (the twist often touches *their* past) and one small running charm.
- **The hero acts.** Every story: at least one choice, one failure, one
  self-made discovery.

## Invariants (unchanged — enforced in code)

- `learningBeat` appears **verbatim** in every variant (assembler asserts it).
- All slots used: {hero} {setting} {companion_name} {object_motif} {refrain}
  (+{child_name} in scriptTemplate).
- Slot values embed determiners — write "in {setting}", never "in the {setting}".
- audioTemplate never contains {child_name}.
- Word bands: 3-4 ≈ 150–220 · 5-6 ≈ 340–430 · 7-8 ≈ 650–780 · 9-11 ≈ 800–930.
- Learning beat and concept per level are immutable; excitement is structure,
  not curriculum change.

## Rewrite checklist (per story)

- [ ] Want stated by ~15%? Oddity present?
- [ ] Funny fail caused by not-yet-knowing the concept?
- [ ] Twist at 55–70%, concept = the key, beat spoken by the hero?
- [ ] Hero wins by their own action?
- [ ] Refrain ≥2×, one listener-aside, one sound word?
- [ ] Last 20% pure descent — nothing new, sentences shortening?
- [ ] Ember in the final lines?
- [ ] `npx tsx scripts/verify-content.ts` passes?
