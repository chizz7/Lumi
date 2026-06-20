// content/problem/levels.ts
//
// Problem Solving — 5 leveled bedtime stories (pause, define, ideate, test, adjust).
// Same two-template structure as the other paths:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// ⚠ DRAFT — must pass the safety + expert review gate before delivery
//   (see docs/01_PRD.md FR-4/FR-5).
//
// To draft/refine: npm run author:draft -- --subject problem --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'Stop and Look',
    concept: 'Pausing to look before reacting', callback: null, ageFloor: 3,
    summary: 'A small hero meets a problem and wants to react at once. Their companion teaches the very first step of solving anything: stop, breathe, and look at it calmly before doing a single thing.',
    teachingNote: 'The first skill of problem solving is the pause — a calm look almost always reveals more than a quick reaction.',
    audioTemplate: `The night was still over {setting} when the {hero} came upon a {object_motif} that would not do what they wanted.

The {hero} pushed at it, quick and frustrated. It did not budge.

"Wait," said {companion_name} gently. "Before you push again — stop. Breathe. Look."

So the {hero} stopped. They took one slow breath. And instead of pushing, they simply looked at the {object_motif}, calmly, the way you look at the stars.

And in looking, they saw things they had rushed right past — a shape here, a little catch there. Details that had been invisible while they hurried.

"I did not even see those before," said the {hero}.

"That is what stopping is for," said {companion_name}. "A calm look shows you what a quick reaction hides. Every good answer begins with a pause."

The {hero} kept looking, unhurried, and the puzzle no longer felt quite so impossible.

{refrain}.`,
    scriptTemplate: `The night was still over {setting} when {child_name} the {hero} came upon a {object_motif} that would not do what they wanted.

{child_name} pushed at it, quick and frustrated. It did not budge.

"Wait," said {companion_name} gently. "Before you push again — stop. Breathe. Look."

So {child_name} stopped. Took one slow breath. And instead of pushing, simply looked at the {object_motif}, calmly, the way you look at the stars.

And in looking, {child_name} saw things they had rushed right past — a shape here, a little catch there. Details that had been invisible while they hurried.

"I did not even see those before," said {child_name}.

"That is what stopping is for," said {companion_name}. "A calm look shows you what a quick reaction hides. Every good answer begins with a pause."

{child_name} kept looking, unhurried, and the puzzle no longer felt quite so impossible.

{refrain}.`,
  },

  {
    ordinal: 2, title: "What's Really the Problem?",
    concept: 'Naming the real problem, not just the first sign of it', callback: 'Stop and look (Level 1)', ageFloor: 4,
    summary: 'The hero starts fixing the first thing they notice — and it does not help. Their companion shows them to ask what is really the problem underneath. It builds on Level 1: once you have looked calmly, you can name what is truly going on.',
    teachingNote: 'Solving the wrong problem wastes effort; learning to ask "what is really the matter?" points the work in the right direction.',
    audioTemplate: `Having learned to stop and look, the {hero} studied the {object_motif} in {setting}. Something was wrong with it — but what?

The {hero} began fixing the very first thing they saw. It did not help.

{companion_name} hummed thoughtfully. "You are mending what you noticed first. But ask a deeper question: what is really the problem here?"

The {hero} grew quiet and looked again, underneath the obvious. And there it was — the true trouble, hiding beneath the one that was easy to see.

"Oh," said the {hero}. "The real problem is not up there. It is down here."

"Now you know where to put your effort," said {companion_name}. "Half of solving is simply naming the right problem."

The {hero} felt something settle. The puzzle was the same size as before — but now they were looking at the right part of it.

{refrain}.`,
    scriptTemplate: `Having learned to stop and look, {child_name} the {hero} studied the {object_motif} in {setting}. Something was wrong with it — but what?

{child_name} began fixing the very first thing they saw. It did not help.

{companion_name} hummed thoughtfully. "You are mending what you noticed first. But ask a deeper question, {child_name}: what is really the problem here?"

{child_name} grew quiet and looked again, underneath the obvious. And there it was — the true trouble, hiding beneath the one that was easy to see.

"Oh," said {child_name}. "The real problem is not up there. It is down here."

"Now you know where to put your effort," said {companion_name}. "Half of solving is simply naming the right problem."

{child_name} felt something settle. The puzzle was the same size as before — but now they were looking at the right part of it.

{refrain}.`,
  },

  {
    ordinal: 3, title: 'Lots of Ideas',
    concept: 'Thinking of many ideas, not just the first', callback: 'Stop and look (Level 1)', ageFloor: 4,
    summary: 'The hero grabs their first idea and rushes ahead. Their companion invites them to slow down and gather many ideas first — even silly ones — before choosing. It revisits Level 1: a calm mind has room for more than one answer.',
    teachingNote: 'Generating several ideas before acting frees a child from their first impulse and almost always surfaces a better option.',
    audioTemplate: `The {object_motif} glowed in {setting}, and the {hero} had an idea — their very first one — and almost dashed off to try it.

"Hold on," said {companion_name} with a twinkle. "Your first idea might be good. But how many ideas do you have?"

"…One?" said the {hero}.

"Then let us gather more. Even silly ones. Especially silly ones."

So they did. The {hero} thought of a second idea, and a third, and a fourth — some wise, some wonderfully strange. They laughed at a few. The {object_motif} seemed to sparkle with each new thought.

And there, among the many, was an idea far better than the first — one they would never have found if they had rushed off.

"More ideas, better choices," said {companion_name}.

The {hero} looked at their little pile of ideas, proud of every one, even the silly ones that had led the way.

{refrain}.`,
    scriptTemplate: `The {object_motif} glowed in {setting}, and {child_name} the {hero} had an idea — their very first one — and almost dashed off to try it.

"Hold on," said {companion_name} with a twinkle. "Your first idea might be good. But how many ideas do you have, {child_name}?"

"…One?" said {child_name}.

"Then let us gather more. Even silly ones. Especially silly ones."

So they did. {child_name} thought of a second idea, and a third, and a fourth — some wise, some wonderfully strange, laughing at a few. The {object_motif} seemed to sparkle with each new thought.

And there, among the many, was an idea far better than the first — one {child_name} would never have found by rushing off.

"More ideas, better choices," said {companion_name}.

{child_name} looked at their little pile of ideas, proud of every one, even the silly ones that had led the way.

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Try and See',
    concept: 'Testing an idea and watching what happens', callback: "What's really the problem? (Level 2)", ageFloor: 5,
    summary: 'With several ideas ready, the hero learns that you do not have to be sure — you can try one and watch what happens, letting the result teach you. It builds on Level 2: test your idea against the real problem you named.',
    teachingNote: 'Treating an idea as an experiment — try it, observe, learn — removes the fear of being wrong and turns every attempt into information.',
    audioTemplate: `The {hero} stood before the {object_motif} in {setting} with a good idea in hand — but a worried face.

"What if my idea is wrong?" they said.

{companion_name} smiled kindly. "Then you will learn something. You do not have to be certain. You only have to try, and watch what happens."

So the {hero} tried their idea on the real problem they had named. They watched closely. It did not fully work — but it moved. And the way it moved told them exactly what to change.

"It almost worked," said the {hero}, "and the rest just showed me what to do next."

"That is the secret," said {companion_name}. "An idea is not a promise. It is an experiment. Try, watch, learn, adjust."

The {hero} tried again with what they had learned, and the {object_motif} shifted further still — closer and closer.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} stood before the {object_motif} in {setting} with a good idea in hand — but a worried face.

"What if my idea is wrong?" {child_name} said.

{companion_name} smiled kindly. "Then you will learn something, {child_name}. You do not have to be certain. You only have to try, and watch what happens."

So {child_name} tried their idea on the real problem they had named, watching closely. It did not fully work — but it moved. And the way it moved told them exactly what to change.

"It almost worked," said {child_name}, "and the rest just showed me what to do next."

"That is the secret," said {companion_name}. "An idea is not a promise. It is an experiment. Try, watch, learn, adjust."

{child_name} tried again with what they had learned, and the {object_motif} shifted further still — closer and closer.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'If at First…',
    concept: 'Putting every step together to solve a real problem', callback: 'Try and see (Level 4)', ageFloor: 5,
    summary: 'The capstone: the hero faces a real, knotty problem and walks the whole path — stop and look, name the real problem, gather ideas, try and see, adjust — until it gives way. The story gathers every step into one calm, capable moment.',
    teachingNote: 'When a child can move calmly through pause, define, ideate, test and adjust, problem solving has become a disposition they can carry anywhere.',
    audioTemplate: `A real puzzle waited in {setting} that night — the trickiest the {hero} had met. The {object_motif} sat knotted and quiet.

Long ago, the {hero} might have pushed and given up. Not tonight.

First, they stopped and looked, calm and unhurried. Then they asked what was really the problem, and found it underneath. They gathered lots of ideas, silly ones included. Then they tried one, and watched, and when it did not quite work, they adjusted — and tried again.

Step by patient step, the knot loosened. The {object_motif} shifted, clicked, and at last came gently undone.

The {hero} sat back, calm and certain. They had not been the cleverest. They had simply walked each step, in order, without rushing.

"You solved it," said {companion_name}, eyes bright.

"I knew the way," said the {hero}. "Stop. Look. Name it. Lots of ideas. Try and see."

The {object_motif} glowed, solved, and the {hero} smiled, ready for whatever puzzle came next.

{refrain}.`,
    scriptTemplate: `A real puzzle waited in {setting} that night — the trickiest {child_name} the {hero} had met. The {object_motif} sat knotted and quiet.

Long ago, {child_name} might have pushed and given up. Not tonight.

First, {child_name} stopped and looked, calm and unhurried. Then asked what was really the problem, and found it underneath. Gathered lots of ideas, silly ones included. Then tried one, and watched, and when it did not quite work, adjusted — and tried again.

Step by patient step, the knot loosened. The {object_motif} shifted, clicked, and at last came gently undone.

{child_name} sat back, calm and certain — not the cleverest, simply walking each step, in order, without rushing.

"You solved it," said {companion_name}, eyes bright.

"I knew the way," said {child_name}. "Stop. Look. Name it. Lots of ideas. Try and see."

The {object_motif} glowed, solved, and {child_name} smiled, ready for whatever puzzle came next.

{refrain}.`,
  },
]
