// content/resilience/levels.ts
//
// Resilience — 5 leveled bedtime stories (growth mindset: effort changes ability).
// Same two-template structure as Money/Focus:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// ⚠ DRAFT — must pass the safety + expert review gate before delivery
//   (see docs/01_PRD.md FR-4/FR-5).
//
// To draft/refine: npm run author:draft -- --subject resilience --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'It’s Okay to Find It Hard',
    concept: 'Hard things are meant to feel hard at first', callback: null, ageFloor: 3,
    summary: 'A small hero tries something new, finds it difficult, and decides they must just be bad at it. Their companion shares a gentle secret: hard things are supposed to feel hard at the start — that feeling is a sign of learning, not a sign to stop.',
    teachingNote: 'Before a child can persist, they need permission to struggle — naming "hard is normal" removes the shame that makes them quit.',
    audioTemplate: `The night settled gently over {setting}, where a small {hero} was trying something new — and finding it hard.

A {object_motif} sat nearby, new and just beginning itself.

The {hero} tried, and it did not work. Tried again, and it still did not work. "Maybe I am just not good at this," they said, ready to give up.

{companion_name} came near. "May I tell you a secret?" they said softly. "Hard things are meant to feel hard at first. That feeling is not a sign to stop — it is a sign you are learning something real."

The {hero} looked at the {object_motif}. It was new now, but it was growing, slow and steady.

"It is okay to find it hard," said {companion_name}. "Everyone does, at the start."

The {hero} breathed out, and the giving-up feeling softened. Hard was allowed. Hard was simply part of new.

They tried once more — not to be perfect, only to keep going — and it felt a little less heavy than before.

{refrain}.`,
    scriptTemplate: `The night settled gently over {setting}, where {child_name} the {hero} was trying something new — and finding it hard.

A {object_motif} sat nearby, new and just beginning itself.

{child_name} tried, and it did not work. Tried again, and it still did not work. "Maybe I am just not good at this," {child_name} said, ready to give up.

{companion_name} came near. "May I tell you a secret, {child_name}?" they said softly. "Hard things are meant to feel hard at first. That feeling is not a sign to stop — it is a sign you are learning something real."

{child_name} looked at the {object_motif}. It was new now, but it was growing, slow and steady.

"It is okay to find it hard," said {companion_name}. "Everyone does, at the start."

{child_name} breathed out, and the giving-up feeling softened. Hard was allowed. Hard was simply part of new.

{child_name} tried once more — not to be perfect, only to keep going — and it felt a little less heavy than before.

{refrain}.`,
  },

  {
    ordinal: 2, title: 'The Power of Yet',
    concept: 'Adding "yet" turns "I can\'t" into "not so far"', callback: 'Hard is meant to feel hard (Level 1)', ageFloor: 4,
    summary: 'When the hero says "I can\'t do it," their companion teaches them one small, powerful word to add to the end: "yet." It builds on Level 1 — if hard is allowed, then "can\'t" is only "not so far."',
    teachingNote: 'One word — "yet" — reframes a fixed limit as a place on a journey, and gives a child somewhere to keep going.',
    audioTemplate: `Under a wide and quiet sky in {setting}, the {hero} set down what they were trying and said the heaviest words they knew: "I can't do it."

The {object_motif} stirred in the night air, a little taller than the night before.

{companion_name} tilted their head. "Those words feel so final," they said. "But you are missing one. A small one. Add it to the end and listen."

"I can't do it…" the {hero} began.

"…yet," whispered {companion_name}.

"I can't do it… yet," said the {hero}, and the words felt completely different. Not a wall. A path with more of it still to walk.

"Last time you learned that hard is allowed," said {companion_name}. "Yet is what you say while the hard is still happening. It means: not so far. It means: keep going."

The {hero} looked at the growing {object_motif} and smiled. Not finished. Not stuck. Just — not yet.

{refrain}.`,
    scriptTemplate: `Under a wide and quiet sky in {setting}, {child_name} the {hero} set down what they were trying and said the heaviest words they knew: "I can't do it."

The {object_motif} stirred in the night air, a little taller than the night before.

{companion_name} tilted their head. "Those words feel so final," they said. "But you are missing one, {child_name}. A small one. Add it to the end and listen."

"I can't do it…" {child_name} began.

"…yet," whispered {companion_name}.

"I can't do it… yet," said {child_name}, and the words felt completely different. Not a wall. A path with more of it still to walk.

"Last time you learned that hard is allowed," said {companion_name}. "Yet is what you say while the hard is still happening. It means: not so far. It means: keep going."

{child_name} looked at the growing {object_motif} and smiled. Not finished. Not stuck. Just — not yet.

{refrain}.`,
  },

  {
    ordinal: 3, title: 'Mistakes Help Us Grow',
    concept: 'A mistake is information, not failure', callback: 'Hard is meant to feel hard (Level 1)', ageFloor: 4,
    summary: 'The hero makes a mistake and feels ashamed. Their companion shows them that a mistake quietly tells you what to try next — it is how growing works, not the opposite of it. It revisits Level 1: if hard is normal, mistakes are part of hard.',
    teachingNote: 'When mistakes are framed as useful information, a child stops hiding them and starts learning from them.',
    audioTemplate: `In the soft dark of {setting}, the {hero} made a mistake — a real one — and wished they could disappear.

"I got it wrong," they said, cheeks warm. "I should not make mistakes."

The {object_motif} rustled, its newest leaf unfurling from where an old one had fallen.

{companion_name} settled beside them, calm and warm. "Look at the {object_motif}," they said. "It grows by trying, dropping a leaf, and trying again. A mistake is not the end of growing. It is part of how growing is done."

"But it felt bad," said the {hero}.

"Feelings like that fade," said {companion_name}. "What stays is what the mistake taught you. It whispered exactly what to try next. That is a gift, not a failure."

The {hero} thought about it, and the heavy, hiding feeling loosened. A mistake was only the world telling them which way to go.

They looked once more at the {object_motif}, growing in the dark, and felt a little braver.

{refrain}.`,
    scriptTemplate: `In the soft dark of {setting}, {child_name} the {hero} made a mistake — a real one — and wished they could disappear.

"I got it wrong," {child_name} said, cheeks warm. "I should not make mistakes."

The {object_motif} rustled, its newest leaf unfurling from where an old one had fallen.

{companion_name} settled beside them, calm and warm. "Look at the {object_motif}, {child_name}," they said. "It grows by trying, dropping a leaf, and trying again. A mistake is not the end of growing. It is part of how growing is done."

"But it felt bad," said {child_name}.

"Feelings like that fade," said {companion_name}. "What stays is what the mistake taught you. It whispered exactly what to try next. That is a gift, not a failure."

{child_name} thought about it, and the heavy, hiding feeling loosened. A mistake was only the world telling them which way to go.

{child_name} looked once more at the {object_motif}, growing in the dark, and felt a little braver.

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Try a Different Way',
    concept: 'When one way does not work, try another', callback: 'The power of yet (Level 2)', ageFloor: 5,
    summary: 'The hero keeps trying the same thing the same way and keeps getting stuck. Their companion helps them see that persistence is not doing the same thing harder — it is being willing to try a different way. It builds on Level 2: "not yet" invites a new path.',
    teachingNote: 'Resilience is flexible, not stubborn — the skill is changing your approach, not just repeating the same effort.',
    audioTemplate: `The {object_motif} had grown tall enough to reach the low branches of {setting}, but the {hero} was stuck — trying the same thing, the same way, over and over.

"I am trying so hard," the {hero} said, tired. "Why won't it work?"

{companion_name} watched kindly. "You are saying 'not yet,' which is good," they said. "But 'yet' is an invitation. It asks: what different way could I try?"

The {hero} paused. They had only ever tried it one way. So this time they tried another — and when that did not work either, they tried a third.

And the third way… moved. Just a little. Then more.

"You were not failing," said {companion_name}. "You were finding which way fits. That is what trying really means."

The {hero} looked at how the {object_motif} had grown — not straight up, but bending and reaching until it found the light.

"A different way," the {hero} said softly, and kept going.

{refrain}.`,
    scriptTemplate: `The {object_motif} had grown tall enough to reach the low branches of {setting}, but {child_name} the {hero} was stuck — trying the same thing, the same way, over and over.

"I am trying so hard," {child_name} said, tired. "Why won't it work?"

{companion_name} watched kindly. "You are saying 'not yet,' which is good," they said. "But 'yet' is an invitation, {child_name}. It asks: what different way could I try?"

{child_name} paused. They had only ever tried it one way. So this time {child_name} tried another — and when that did not work either, tried a third.

And the third way… moved. Just a little. Then more.

"You were not failing," said {companion_name}. "You were finding which way fits. That is what trying really means."

{child_name} looked at how the {object_motif} had grown — not straight up, but bending and reaching until it found the light.

"A different way," {child_name} said softly, and kept going.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'Bouncing Back',
    concept: 'Falling down and choosing to get back up', callback: 'Try a different way (Level 4)', ageFloor: 5,
    summary: 'The capstone: the hero has a real setback and feels like quitting for good. Drawing on everything — hard is allowed, the power of yet, mistakes teach, try a different way — they choose to get back up. The story gathers the whole path into one brave, gentle moment.',
    teachingNote: 'Bouncing back is not never falling — it is the quiet decision to rise once more, and every earlier skill makes that decision possible.',
    audioTemplate: `It had been a hard night in {setting}. The {hero} had fallen short of something that mattered, and sat very still beside the {object_motif}, which now stood tall and strong.

"I want to stop for good," the {hero} whispered.

{companion_name} did not rush them. They simply waited, then said, "You are allowed to rest. And when you are ready, remember what you know."

The {hero} took a slow breath and remembered. Hard is meant to feel hard. I can't — yet. Mistakes show me the way. And when one path is blocked, I try a different one.

The {object_motif} had grown through all of it — every fall, every fresh start. And so, it turned out, had the {hero}.

Quietly, without needing to be perfect, the {hero} stood back up.

"That," said {companion_name}, eyes shining, "is the bravest thing there is. Not never falling. Rising once more."

The {hero} looked up at the strong {object_motif}, and at the stars, and felt ready to try again tomorrow.

{refrain}.`,
    scriptTemplate: `It had been a hard night in {setting}. {child_name} the {hero} had fallen short of something that mattered, and sat very still beside the {object_motif}, which now stood tall and strong.

"I want to stop for good," {child_name} whispered.

{companion_name} did not rush them. They simply waited, then said, "You are allowed to rest, {child_name}. And when you are ready, remember what you know."

{child_name} took a slow breath and remembered. Hard is meant to feel hard. I can't — yet. Mistakes show me the way. And when one path is blocked, I try a different one.

The {object_motif} had grown through all of it — every fall, every fresh start. And so, it turned out, had {child_name}.

Quietly, without needing to be perfect, {child_name} stood back up.

"That," said {companion_name}, eyes shining, "is the bravest thing there is. Not never falling. Rising once more."

{child_name} looked up at the strong {object_motif}, and at the stars, and felt ready to try again tomorrow.

{refrain}.`,
  },
]
