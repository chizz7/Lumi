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
    learningBeat: 'It is okay to find it hard',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, a small {hero} tried something new. And it was hard. So hard!

A {object_motif} sat nearby — small, just starting too.

The {hero} tried. It did not work. Tried again. Still no.

"Maybe I am just no good," said the {hero}.

"Here is a secret," said {companion_name}. "Hard things feel hard at first. That is not bad. That means you are learning!"

"It is okay to find it hard," said {companion_name}. "Everyone does. Everyone."

The {hero} breathed out. Hard was okay. Hard was okay.

So the {hero} tried again. Just to keep going. And it felt a little lighter.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} tried something new. And it was hard. So hard!

A {object_motif} sat nearby — small, just starting too.

{child_name} tried. It did not work. Tried again. Still no.

"Maybe I am just no good," said {child_name}.

"Here is a secret," said {companion_name}. "Hard things feel hard at first. That is not bad. That means you are learning!"

"It is okay to find it hard," said {companion_name}. "Everyone does. Everyone."

{child_name} breathed out. Hard was okay. Hard was okay.

So {child_name} tried again. Just to keep going. And it felt a little lighter.

{refrain}.`,
      },
    },
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
    learningBeat: 'not so far',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, a small {hero} put it down and said the heaviest words: "I can't do it."

A {object_motif} stood nearby, a little taller than yesterday.

"You forgot one word," said {companion_name}. "A tiny word. Put it at the end. Listen."

"I can't do it…" said the {hero}.

"…yet!" said {companion_name}.

"I can't do it… yet!" said the {hero}. And it felt different. Not a wall. A path.

"Yet means not so far," said {companion_name}. "Not so far. Keep going."

The {hero} looked at the growing {object_motif} and smiled. Not stuck. Just — not yet. Not yet!

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} put it down and said the heaviest words: "I can't do it."

A {object_motif} stood nearby, a little taller than yesterday.

"You forgot one word, {child_name}," said {companion_name}. "A tiny word. Put it at the end. Listen."

"I can't do it…" said {child_name}.

"…yet!" said {companion_name}.

"I can't do it… yet!" said {child_name}. And it felt different. Not a wall. A path.

"Yet means not so far," said {companion_name}. "Not so far. Keep going."

{child_name} looked at the growing {object_motif} and smiled. Not stuck. Just — not yet. Not yet!

{refrain}.`,
      },
    },
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
    learningBeat: 'part of how growing is done',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, a small {hero} made a mistake. A real one. They wanted to hide.

"I got it wrong," said the {hero}. "I should not get things wrong."

The {object_motif} rustled. A new leaf opened where an old one fell.

"Look at the {object_motif}," said {companion_name}. "It grows. It drops a leaf. It tries again. A mistake is part of how growing is done."

"But it felt bad," said the {hero}.

"That feeling goes away," said {companion_name}. "What stays is what it taught you. A mistake shows you what to try next. That is a gift. A gift, not a fail."

The {hero} felt the hiding feeling melt. A mistake just shows the way. Just shows the way.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} made a mistake. A real one. They wanted to hide.

"I got it wrong," said {child_name}. "I should not get things wrong."

The {object_motif} rustled. A new leaf opened where an old one fell.

"Look at the {object_motif}, {child_name}," said {companion_name}. "It grows. It drops a leaf. It tries again. A mistake is part of how growing is done."

"But it felt bad," said {child_name}.

"That feeling goes away," said {companion_name}. "What stays is what it taught you. A mistake shows you what to try next. That is a gift. A gift, not a fail."

{child_name} felt the hiding feeling melt. A mistake just shows the way. Just shows the way.

{refrain}.`,
      },
    },
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
    learningBeat: 'A different way',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {object_motif} had grown tall. But a small {hero} was stuck. They kept trying the same way. The same way. The same way.

"I am trying so hard," said the {hero}. "Why won't it work?"

"Saying 'not yet' is good," said {companion_name}. "Now try a new way. What different way could you try?"

The {hero} stopped. They had only tried one way! So they tried another. Then another.

And the third way… moved! A little. Then a lot.

"You were not failing," said {companion_name}. "You were finding the way that fits."

"A different way," said the {hero}. "A different way!" And kept going.

{refrain}.`,
        scriptTemplate: `In {setting}, the {object_motif} had grown tall. But {child_name} the {hero} was stuck. They kept trying the same way. The same way. The same way.

"I am trying so hard," said {child_name}. "Why won't it work?"

"Saying 'not yet' is good," said {companion_name}. "Now try a new way. What different way could you try?"

{child_name} stopped. They had only tried one way! So {child_name} tried another. Then another.

And the third way… moved! A little. Then a lot.

"You were not failing," said {companion_name}. "You were finding the way that fits."

"A different way," said {child_name}. "A different way!" And kept going.

{refrain}.`,
      },
    },
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
    learningBeat: 'Rising once more',
    ageVariants: {
      '3-4': {
        audioTemplate: `It had been a hard night in {setting}. A small {hero} had fallen short. They sat very still by the {object_motif}, now tall and strong.

"I want to stop for good," said the {hero}.

{companion_name} waited. "You can rest. And when you are ready, remember what you know."

So the {hero} remembered. Hard feels hard. I can't — yet. Mistakes show the way. Try a different way.

The {object_motif} had grown through every fall. And so had the {hero}.

So, slowly, the {hero} stood up. Stood right back up.

"That is the bravest thing," said {companion_name}. "Not never falling. Rising once more."

The {hero} looked at the stars. Ready to try again. Ready for tomorrow.

{refrain}.`,
        scriptTemplate: `It had been a hard night in {setting}. {child_name} the {hero} had fallen short. They sat very still by the {object_motif}, now tall and strong.

"I want to stop for good," said {child_name}.

{companion_name} waited. "You can rest, {child_name}. And when you are ready, remember what you know."

So {child_name} remembered. Hard feels hard. I can't — yet. Mistakes show the way. Try a different way.

The {object_motif} had grown through every fall. And so had {child_name}.

So, slowly, {child_name} stood up. Stood right back up.

"That is the bravest thing," said {companion_name}. "Not never falling. Rising once more."

{child_name} looked at the stars. Ready to try again. Ready for tomorrow.

{refrain}.`,
      },
    },
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
