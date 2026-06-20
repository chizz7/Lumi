// content/kindness/levels.ts
//
// Kindness & Empathy — 5 leveled bedtime stories (empathy is a skill, practised).
// Same two-template structure as the other paths:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// ⚠ DRAFT — must pass the safety + expert review gate before delivery
//   (see docs/01_PRD.md FR-4/FR-5).
//
// To draft/refine: npm run author:draft -- --subject kindness --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'Noticing How Others Feel',
    concept: 'Paying attention to the feelings of others', callback: null, ageFloor: 3,
    summary: 'A small hero learns that kindness begins before any action — with noticing. With their companion, they practise reading the quiet signs that tell you how someone else is feeling.',
    teachingNote: 'Empathy starts with attention: a child cannot be kind to a feeling they have not noticed.',
    audioTemplate: `Night drifted softly over {setting}, and a small {hero} sat beside a {object_motif}, watching the others nearby.

One of them sat apart, very quiet, shoulders low.

The {hero} had not noticed before — but tonight they did. "Something feels different about them," they said.

{companion_name} nodded warmly. "That is the first kindness of all," they said. "Noticing. Before you ever do a thing, you see how someone feels. Their face, the way they sit, whether they are quiet or bright."

The {hero} looked again, really looked, and saw it clearly: that friend was sad.

The {object_motif} glowed a little warmer, as if noticing too.

"Most people walk right past a feeling," said {companion_name}. "You stopped and saw it. That is where kindness is born."

The {hero} kept watching the world with these new, gentler eyes, and it looked different now — full of feelings to notice.

{refrain}.`,
    scriptTemplate: `Night drifted softly over {setting}, and {child_name} the {hero} sat beside a {object_motif}, watching the others nearby.

One of them sat apart, very quiet, shoulders low.

{child_name} had not noticed before — but tonight they did. "Something feels different about them," {child_name} said.

{companion_name} nodded warmly. "That is the first kindness of all, {child_name}," they said. "Noticing. Before you ever do a thing, you see how someone feels. Their face, the way they sit, whether they are quiet or bright."

{child_name} looked again, really looked, and saw it clearly: that friend was sad.

The {object_motif} glowed a little warmer, as if noticing too.

"Most people walk right past a feeling," said {companion_name}. "You stopped and saw it. That is where kindness is born."

{child_name} kept watching the world with these new, gentler eyes, and it looked different now — full of feelings to notice.

{refrain}.`,
  },

  {
    ordinal: 2, title: 'A Small Kindness',
    concept: 'Kindness does not have to be big to matter', callback: 'Noticing how others feel (Level 1)', ageFloor: 4,
    summary: 'Having noticed a friend in need, the hero worries they must do something grand. Their companion shows them that the smallest kindness — sitting close, a gentle word — is often the one that matters most. It builds on Level 1: noticing leads to acting.',
    teachingNote: 'Children often think kindness must be big; learning that small acts count makes kindness something they can always offer.',
    audioTemplate: `The {object_motif} glowed steadily in {setting}, and the {hero} remembered the quiet, sad friend from before.

"I want to help," said the {hero}, "but I do not have anything big to give."

{companion_name} smiled. "Who told you kindness must be big? Watch what small can do."

So the {hero} simply went and sat beside the sad friend. Said a soft hello. Stayed a while, quietly, so they would not be alone.

And slowly, the friend's shoulders lifted. A tiny smile returned.

"That was not big," said the {hero}, surprised.

"It was exactly the right size," said {companion_name}. "A small kindness, given when it is noticed, is the warmest thing there is. You do not need more than that."

The {object_motif} brightened, and so did the night.

The {hero} understood now: kindness was never about how big. It was about being there.

{refrain}.`,
    scriptTemplate: `The {object_motif} glowed steadily in {setting}, and {child_name} the {hero} remembered the quiet, sad friend from before.

"I want to help," said {child_name}, "but I do not have anything big to give."

{companion_name} smiled. "Who told you kindness must be big, {child_name}? Watch what small can do."

So {child_name} simply went and sat beside the sad friend. Said a soft hello. Stayed a while, quietly, so they would not be alone.

And slowly, the friend's shoulders lifted. A tiny smile returned.

"That was not big," said {child_name}, surprised.

"It was exactly the right size," said {companion_name}. "A small kindness, given when it is noticed, is the warmest thing there is. You do not need more than that."

The {object_motif} brightened, and so did the night.

{child_name} understood now: kindness was never about how big. It was about being there.

{refrain}.`,
  },

  {
    ordinal: 3, title: "Walking in Someone's Shoes",
    concept: 'Imagining how another person feels', callback: 'Noticing how others feel (Level 1)', ageFloor: 4,
    summary: 'When the hero does not understand why a friend acted unkindly, their companion teaches them to imagine being that friend — to walk in their shoes. It revisits Level 1: noticing the outside, then imagining the inside.',
    teachingNote: 'Perspective-taking — imagining another\'s inner world — is the heart of empathy and the antidote to quick judgement.',
    audioTemplate: `Beneath the glow of the {object_motif} in {setting}, the {hero} felt hurt. A friend had been short with them, almost unkind.

"Why would they do that?" the {hero} said.

{companion_name} settled close. "Let us try something. Close your eyes and imagine you are them. What might their day have been like?"

The {hero} imagined. Perhaps that friend had been tired. Perhaps something had gone wrong for them, long before this moment.

And the hurt softened into something gentler — understanding.

"They might be carrying something I cannot see," said the {hero} slowly.

"That is walking in someone's shoes," said {companion_name}. "You noticed how they seemed. Then you imagined how they felt. Now your kindness has somewhere true to go."

The {object_motif} warmed between them.

The {hero} decided to be gentle with that friend tomorrow — not because they had earned it, but because everyone is carrying something.

{refrain}.`,
    scriptTemplate: `Beneath the glow of the {object_motif} in {setting}, {child_name} the {hero} felt hurt. A friend had been short with them, almost unkind.

"Why would they do that?" {child_name} said.

{companion_name} settled close. "Let us try something, {child_name}. Close your eyes and imagine you are them. What might their day have been like?"

{child_name} imagined. Perhaps that friend had been tired. Perhaps something had gone wrong for them, long before this moment.

And the hurt softened into something gentler — understanding.

"They might be carrying something I cannot see," said {child_name} slowly.

"That is walking in someone's shoes," said {companion_name}. "You noticed how they seemed. Then you imagined how they felt. Now your kindness has somewhere true to go."

The {object_motif} warmed between them.

{child_name} decided to be gentle with that friend tomorrow — not because they had earned it, but because everyone is carrying something.

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Kindness Comes Back',
    concept: 'Kindness spreads from one to the next', callback: 'A small kindness (Level 2)', ageFloor: 5,
    summary: 'The hero sees a small kindness travel — from them, to a friend, to a stranger, and gently back again. Their companion explains that kindness is not used up by giving; it spreads. It builds on Level 2: one small act can light many.',
    teachingNote: 'Seeing kindness ripple outward teaches a child that their small acts matter far beyond the moment they happen.',
    audioTemplate: `The {object_motif} was glowing brightly now in {setting}, and the {hero} noticed something wonderful.

The small kindness they had given days ago had not stopped with their friend. That friend had been kind to someone else. And that someone had been kind to another.

"It kept going," said the {hero}, amazed. "Like a light passed from hand to hand."

{companion_name} nodded. "Kindness is not used up when you give it. It spreads. One warm light becomes many."

And just then, a kindness came back around — a friend doing something gentle for the {hero}, without even knowing how it had all begun.

The {object_motif} shone its warmest yet, lighting the whole of {setting}.

"I only started with something small," said the {hero}.

"Small is how every big warmth begins," said {companion_name}.

The {hero} watched the glow travel on into the night, and felt part of something much larger than one kind act.

{refrain}.`,
    scriptTemplate: `The {object_motif} was glowing brightly now in {setting}, and {child_name} the {hero} noticed something wonderful.

The small kindness {child_name} had given days ago had not stopped with their friend. That friend had been kind to someone else. And that someone had been kind to another.

"It kept going," said {child_name}, amazed. "Like a light passed from hand to hand."

{companion_name} nodded. "Kindness is not used up when you give it. It spreads. One warm light becomes many."

And just then, a kindness came back around — a friend doing something gentle for {child_name}, without even knowing how it had all begun.

The {object_motif} shone its warmest yet, lighting the whole of {setting}.

"I only started with something small," said {child_name}.

"Small is how every big warmth begins," said {companion_name}.

{child_name} watched the glow travel on into the night, and felt part of something much larger than one kind act.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'Kind to Yourself Too',
    concept: 'Kindness includes how you treat yourself', callback: 'Kindness comes back (Level 4)', ageFloor: 5,
    summary: 'The capstone: the hero, so kind to everyone else, is hard on themselves after a mistake. Their companion gently reminds them that they belong on the list of people who deserve kindness. It draws the path together — the warmth you share must also reach you.',
    teachingNote: 'Self-compassion completes empathy: a child who can be kind to themselves can sustain kindness toward everyone else.',
    audioTemplate: `The {object_motif} glowed softly in {setting}, but tonight the {hero} was frowning — at themselves.

"I made a mistake today," they said. "I was not good enough."

{companion_name} looked at them with great tenderness. "You have been so kind to everyone," they said. "You noticed feelings. You gave small kindnesses. You let kindness spread. But you forgot one person."

"Who?" asked the {hero}.

"You," said {companion_name} gently. "You belong on the list of people who deserve kindness. Especially from yourself."

The {hero} grew quiet. They thought of how gently they spoke to a sad friend — and how harshly they had just spoken to themselves.

"I would never say that to someone I love," the {hero} realised.

"Then do not say it to you," said {companion_name}.

The {hero} took a slow, warm breath and let the kindness turn inward at last. The {object_motif} glowed brightest of all — because now the warmth reached everyone, including the one who had been sharing it.

{refrain}.`,
    scriptTemplate: `The {object_motif} glowed softly in {setting}, but tonight {child_name} the {hero} was frowning — at themselves.

"I made a mistake today," {child_name} said. "I was not good enough."

{companion_name} looked at them with great tenderness. "You have been so kind to everyone, {child_name}," they said. "You noticed feelings. You gave small kindnesses. You let kindness spread. But you forgot one person."

"Who?" asked {child_name}.

"You," said {companion_name} gently. "You belong on the list of people who deserve kindness. Especially from yourself."

{child_name} grew quiet, and thought of how gently they spoke to a sad friend — and how harshly they had just spoken to themselves.

"I would never say that to someone I love," {child_name} realised.

"Then do not say it to you," said {companion_name}.

{child_name} took a slow, warm breath and let the kindness turn inward at last. The {object_motif} glowed brightest of all — because now the warmth reached everyone, including the one who had been sharing it.

{refrain}.`,
  },
]
