// content/focus/levels.ts
//
// Focus & Goals — 5 leveled bedtime stories. Same two-template structure as Money:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero ({child_name} the {hero}).
//
// ⚠ DRAFT — these stories must pass the safety + expert review gate before being
//   marked deliverable (see docs/01_PRD.md FR-4/FR-5).
//
// To draft/refine: npm run author:draft -- --subject focus --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'One Thing at a Time',
    concept: 'Doing one thing fully before starting the next', callback: null, ageFloor: 3,
    summary: 'A small hero tries to do everything at once and finishes nothing. With a gentle companion, they learn to pick a single thing, give it their whole attention, and only then move on — and discover they actually get more done by doing less at once.',
    teachingNote: 'Attention is a muscle: doing one thing at a time is the first and most important habit of focus.',
    learningBeat: 'One thing, then the next',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, a small {hero} sat by a glowing {object_motif}.

So much to do! So much to do!

The {hero} started one thing. Then jumped to another. Then a third. Nothing got done. Nothing!

"Choose just one," said {companion_name} softly. "Just one. Let the rest wait."

The {hero} took a slow breath. Just one thing. Only that one.

And it got done! Then the next. Then the next.

"I did more by doing less!" said the {hero}.

"One thing, then the next," said {companion_name}. "That is the secret."

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} sat by a glowing {object_motif}.

So much to do! So much to do!

{child_name} started one thing. Then jumped to another. Then a third. Nothing got done. Nothing!

"Choose just one, {child_name}," said {companion_name} softly. "Just one. Let the rest wait."

{child_name} took a slow breath. Just one thing. Only that one.

And it got done! Then the next. Then the next.

"I did more by doing less!" said {child_name}.

"One thing, then the next," said {companion_name}. "That is the secret."

{refrain}.`,
      },
    },
    audioTemplate: `The night was soft and quiet, and a small {hero} sat in {setting} with a {object_motif} glowing gently nearby.

There was so much to do. The {hero} began one thing, then jumped to another, then a third — and somehow finished none of them.

{companion_name} settled close. "You are trying to hold everything at once," they said kindly. "Choose just one. Let the rest wait."

The {hero} took a slow breath and picked a single thing. Only that one. The {object_motif} seemed to glow a little brighter, as if it were watching too.

And something surprising happened. With one thing at a time, the {hero} finished it. Then the next. Then the next.

"I did more by doing less at once," the {hero} whispered.

"That is the secret," said {companion_name}. "One thing, then the next. That is how big things get done."

The {hero} curled up as the {object_motif} dimmed to a slow, steady light.

{refrain}.`,
    scriptTemplate: `The night was soft and quiet, and {child_name} the {hero} sat in {setting} with a {object_motif} glowing gently nearby.

There was so much to do. {child_name} began one thing, then jumped to another, then a third — and somehow finished none of them.

{companion_name} settled close. "You are trying to hold everything at once," they said kindly. "Choose just one, {child_name}. Let the rest wait."

{child_name} took a slow breath and picked a single thing. Only that one. The {object_motif} seemed to glow a little brighter, as if it were watching too.

And something surprising happened. With one thing at a time, {child_name} finished it. Then the next. Then the next.

"I did more by doing less at once," {child_name} whispered.

"That is the secret," said {companion_name}. "One thing, then the next. That is how big things get done."

{child_name} curled up as the {object_motif} dimmed to a slow, steady light.

{refrain}.`,
  },

  {
    ordinal: 2, title: 'A Plan is a Path',
    concept: 'Breaking a big goal into small, ordered steps', callback: 'Doing one thing at a time (Level 1)', ageFloor: 4,
    summary: 'Faced with something that feels too big, the hero freezes — until their companion shows them how to break it into small steps and walk them in order. The story builds directly on Level 1: a plan is just one-thing-at-a-time, written down.',
    teachingNote: 'A plan turns an overwhelming goal into a series of small, doable steps — and small steps are never scary.',
    learningBeat: 'you can do the first small step',
    ageVariants: {
      '3-4': {
        audioTemplate: `The {object_motif} glowed in {setting}. A small {hero} looked at something big. Too big!

"I cannot do all of that," said the {hero}, and sat down.

"Not all at once," said {companion_name}. "But you can do the first small step. Then the next. Then the next."

So they made a path of little steps, like stones across a stream. One step. One step. One step.

The {hero} took the first step. Only that one. Then the next.

And soon — all done! One small step at a time.

"The path was here all along," said {companion_name}.

{refrain}.`,
        scriptTemplate: `The {object_motif} glowed in {setting}. {child_name} the {hero} looked at something big. Too big!

"I cannot do all of that," said {child_name}, and sat down.

"Not all at once," said {companion_name}. "But you can do the first small step. Then the next. Then the next."

So they made a path of little steps, like stones across a stream. One step. One step. One step.

{child_name} took the first step. Only that one. Then the next.

And soon — all done! One small step at a time.

"The path was here all along," said {companion_name}.

{refrain}.`,
      },
    },
    audioTemplate: `The {object_motif} lit the edge of {setting}, and a small {hero} stared at something that felt much too big to do.

"I cannot do all of that," said the {hero}, and sat right down.

{companion_name} did not hurry. "You are right — you cannot do all of it at once," they said. "But you can do the first small step. Then the next."

Together they laid the steps out in order, like stones across a stream. First this. Then this. Then this.

The {hero} remembered last time — one thing at a time — and smiled. A plan was just that, written as a path.

So the {hero} took the first stone-step. Only that one. Then the second. The {object_motif} glowed a little warmer with each.

Before long, the thing that felt too big was simply… done, one calm step after another.

"The path was here the whole time," said {companion_name}. "We only had to lay it down."

{refrain}.`,
    scriptTemplate: `The {object_motif} lit the edge of {setting}, and {child_name} the {hero} stared at something that felt much too big to do.

"I cannot do all of that," said {child_name}, and sat right down.

{companion_name} did not hurry. "You are right — you cannot do all of it at once," they said. "But you can do the first small step, {child_name}. Then the next."

Together they laid the steps out in order, like stones across a stream. First this. Then this. Then this.

{child_name} remembered last time — one thing at a time — and smiled. A plan was just that, written as a path.

So {child_name} took the first stone-step. Only that one. Then the second. The {object_motif} glowed a little warmer with each.

Before long, the thing that felt too big was simply… done, one calm step after another.

"The path was here the whole time," said {companion_name}. "We only had to lay it down."

{refrain}.`,
  },

  {
    ordinal: 3, title: 'When the Mind Wanders',
    concept: 'Noticing a distraction and gently coming back', callback: 'Doing one thing at a time (Level 1)', ageFloor: 4,
    summary: "The hero keeps drifting away from what they meant to do. Their companion teaches them that wandering is normal — the skill is simply noticing, and gently returning, without being hard on yourself. It revisits Level 1's one-thing focus.",
    teachingNote: 'Focus is not never getting distracted — it is noticing kindly when you drift, and choosing to come back.',
    learningBeat: 'noticing, and coming back',
    ageVariants: {
      '3-4': {
        audioTemplate: `A small {hero} sat in {setting} by the glowing {object_motif}. Just one thing to do.

But a sound went by. And the {hero}'s mind went too. Away, away it went.

"My mind keeps running off," said the {hero}.

{companion_name} smiled. "All minds run off. Mine too! The trick is noticing, and coming back. Come back. Come back."

So the {hero} noticed. "Oh — off I went!" And came back. Off again. Noticed. Came back.

Each time was easier. Each time.

"I do not have to be perfect," said the {hero}. "I just come back. I just come back."

"That is the whole of it," said {companion_name}.

{refrain}.`,
        scriptTemplate: `{child_name} the {hero} sat in {setting} by the glowing {object_motif}. Just one thing to do.

But a sound went by. And {child_name}'s mind went too. Away, away it went.

"My mind keeps running off," said {child_name}.

{companion_name} smiled. "All minds run off. Mine too! The trick is noticing, and coming back. Come back. Come back."

So {child_name} noticed. "Oh — off I went!" And came back. Off again. Noticed. Came back.

Each time was easier. Each time.

"I do not have to be perfect," said {child_name}. "I just come back. I just come back."

"That is the whole of it," said {companion_name}.

{refrain}.`,
      },
    },
    audioTemplate: `The {hero} sat in {setting} with the {object_motif} glowing, meaning to do just one thing.

But a sound floated by, and the {hero}'s mind floated after it. Then a thought drifted past, and off the {hero} went again.

"My mind keeps wandering," the {hero} said, a little frustrated.

{companion_name} chuckled, soft and kind. "Everyone's mind wanders — even mine. That is not the mistake. The skill is noticing, and coming back. Gently. No scolding."

So the next time the {hero} drifted, they simply noticed. "Ah — wandering," they said, and came back to the one thing. Then drifted, noticed, and came back again.

Each time was easier, like a path worn smooth. The {object_motif} held its steady light, patient as ever.

"I do not have to be perfect," said the {hero}. "I just have to come back."

"That is the whole of it," said {companion_name}.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} sat in {setting} with the {object_motif} glowing, meaning to do just one thing.

But a sound floated by, and {child_name}'s mind floated after it. Then a thought drifted past, and off {child_name} went again.

"My mind keeps wandering," {child_name} said, a little frustrated.

{companion_name} chuckled, soft and kind. "Everyone's mind wanders — even mine. That is not the mistake. The skill is noticing, and coming back. Gently. No scolding."

So the next time {child_name} drifted, they simply noticed. "Ah — wandering," {child_name} said, and came back to the one thing. Then drifted, noticed, and came back again.

Each time was easier, like a path worn smooth. The {object_motif} held its steady light, patient as ever.

"I do not have to be perfect," said {child_name}. "I just have to come back."

"That is the whole of it," said {companion_name}.

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Finishing What You Start',
    concept: 'Staying with something all the way to the end', callback: 'A plan is a path (Level 2)', ageFloor: 5,
    summary: "Near the end of something hard, the hero wants to stop — the exciting part is over and only the finishing is left. Their companion helps them take the last few steps of the plan. It calls back to Level 2: a path is only finished when you walk its final stones.",
    teachingNote: 'The hardest part of a goal is often the last stretch — finishing is a skill, and it feels wonderful.',
    learningBeat: 'Finishing has its own kind of joy',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} was almost done. Just a little bit left.

"The fun part is over," said the {hero}. "Can I stop now?"

"Just a few steps left," said {companion_name}. "Let's finish. Let's finish together."

The {hero} was tired. But the {hero} tried.

One more step. One more step. One more.

And then — all done! Done, done, done.

"I did it!" said the {hero}. "I finished it!"

"Finishing has its own kind of joy," said {companion_name}.

The {hero} felt warm and happy inside. All the way happy.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} was almost done. Just a little bit left.

"The fun part is over," said {child_name}. "Can I stop now?"

"Just a few steps left," said {companion_name}. "Let's finish. Let's finish together."

{child_name} was tired. But {child_name} tried.

One more step. One more step. One more.

And then — all done! Done, done, done.

"I did it!" said {child_name}. "I finished it!"

"Finishing has its own kind of joy," said {companion_name}.

{child_name} felt warm and happy inside. All the way happy.

{refrain}.`,
      },
    },
    audioTemplate: `Most of the work was done. In {setting}, under the {object_motif}'s glow, the {hero} looked at the little that was left and sighed.

"The fun part is over," said the {hero}. "Can I stop now?"

{companion_name} looked at the path they had walked — so many stones already behind them. "You laid this whole path," they said. "Only the last few stones remain. Would you like to feel how it feels to finish?"

The {hero} was tired, but curious. One more step. Then one more. The {object_motif} brightened with each, the way a sunrise grows.

And then there were no stones left. It was done — truly, completely done.

A warm, quiet feeling filled the {hero}, better than they expected. "I finished it," they breathed. "All the way."

"Finishing has its own kind of joy," said {companion_name}. "And now you know it."

The {hero} rested, the {object_motif} steady and proud beside them.

{refrain}.`,
    scriptTemplate: `Most of the work was done. In {setting}, under the {object_motif}'s glow, {child_name} the {hero} looked at the little that was left and sighed.

"The fun part is over," said {child_name}. "Can I stop now?"

{companion_name} looked at the path they had walked — so many stones already behind them. "You laid this whole path, {child_name}," they said. "Only the last few stones remain. Would you like to feel how it feels to finish?"

{child_name} was tired, but curious. One more step. Then one more. The {object_motif} brightened with each, the way a sunrise grows.

And then there were no stones left. It was done — truly, completely done.

A warm, quiet feeling filled {child_name}, better than they expected. "I finished it," {child_name} breathed. "All the way."

"Finishing has its own kind of joy," said {companion_name}. "And now you know it."

{child_name} rested, the {object_motif} steady and proud beside them.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'The Goal You Choose',
    concept: 'Choosing your own goal and steadily working toward it', callback: 'Finishing what you start (Level 4)', ageFloor: 5,
    summary: 'The capstone: the hero picks a goal that matters to them and uses everything they have learned — one thing at a time, a plan, coming back when they drift, finishing the last steps — to reach it themselves. It draws the whole path together around a goal the child chooses.',
    teachingNote: 'When a child can choose a goal and steadily pursue it, every focus skill from the path is working together in something they truly want.',
    learningBeat: 'mine to choose',
    ageVariants: {
      '3-4': {
        audioTemplate: `In quiet {setting}, under the {object_motif}, a small {hero} thought of something they really wanted to do. A goal of their own.

"It is mine to choose," said the {hero}. "Mine to choose. Mine to do."

"You already know how," said {companion_name}. "Tell me the way."

"One thing at a time," said the {hero}. "A little path of steps. When I run off, I come back. And I finish. I finish all the way."

So that is what the {hero} did. Night by night. Step by step.

And the goal? The {hero} did it! All by their own steady light.

"You did that," said {companion_name}. "You did."

{refrain}.`,
        scriptTemplate: `In quiet {setting}, under the {object_motif}, {child_name} the {hero} thought of something they really wanted to do. A goal of their own.

"It is mine to choose," said {child_name}. "Mine to choose. Mine to do."

"You already know how," said {companion_name}. "Tell me the way."

"One thing at a time," said {child_name}. "A little path of steps. When I run off, I come back. And I finish. I finish all the way."

So that is what {child_name} did. Night by night. Step by step.

And the goal? {child_name} did it! All by their own steady light.

"You did that," said {companion_name}. "You did."

{refrain}.`,
      },
    },
    audioTemplate: `Under the {object_motif}, in the quiet of {setting}, the {hero} thought about something they truly wanted to do — a goal all their own.

"It is mine to choose," the {hero} said softly, "and mine to reach."

{companion_name} smiled. "You already know how. Tell me the way."

And the {hero} did. "One thing at a time," they began. "A plan, like a path of stones. When my mind wanders, I notice and come back. And I stay with it — all the way to the finish."

So that is what the {hero} did, night by night. One step, then the next. A drift, a gentle return. The last stones, walked with care.

And the goal they had chosen — they reached it. Not by luck, but by their own steady light.

"You did that," said {companion_name}, eyes shining.

"I did," said the {hero}, calm and certain, the {object_motif} glowing warm and full.

{refrain}.`,
    scriptTemplate: `Under the {object_motif}, in the quiet of {setting}, {child_name} the {hero} thought about something they truly wanted to do — a goal all their own.

"It is mine to choose," {child_name} said softly, "and mine to reach."

{companion_name} smiled. "You already know how. Tell me the way."

And {child_name} did. "One thing at a time," they began. "A plan, like a path of stones. When my mind wanders, I notice and come back. And I stay with it — all the way to the finish."

So that is what {child_name} did, night by night. One step, then the next. A drift, a gentle return. The last stones, walked with care.

And the goal they had chosen — {child_name} reached it. Not by luck, but by their own steady light.

"You did that," said {companion_name}, eyes shining.

"I did," said {child_name}, calm and certain, the {object_motif} glowing warm and full.

{refrain}.`,
  },
]
