// content/money/levels.ts
//
// TWO TEMPLATES PER LEVEL — intentional:
//
//   audioTemplate  — sent to Kokoro. No {child_name}.
//                    Cacheable by (level × skin × voice) = 80 fixed files.
//
//   scriptTemplate — shown in email + library. Includes {child_name}.
//                    Assembled at delivery time, never sent to TTS.
//
// To draft new levels: npm run author:draft -- --subject money --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'Coins Look Different',
    concept: 'Coins have different names, sizes and colours', callback: null, ageFloor: 3,
    summary: 'A small animal discovers three different coins lying in the sand and notices for the first time that they look nothing like each other. With the help of a wise companion, they learn each coin has its own name and its own set of clues — size, colour, and the picture on its face — that tell you exactly what it is.',
    teachingNote: 'The skill of noticing small differences is the foundation everything else in this path builds on.',
    learningBeat: 'Each one has its own name',
    ageVariants: {
      '3-4': {
        audioTemplate: `A small {hero} sat in {setting}. Three coins lay in the sand.

One was small. One was big. One was in between.

"They are all coins," said the {hero}. "But they are not the same."

"Each one has its own name," said {companion_name}. "Look. Look closely."

The {hero} looked. The small one. The big one. The in-between one.

"I see!" said the {hero}. "Not the same. Not the same at all."

"You looked. You saw," said {companion_name}. "That is how it starts."

{refrain}.`,
        scriptTemplate: `{child_name} the {hero} sat in {setting}. Three coins lay in the sand.

One was small. One was big. One was in between.

"They are all coins," said {child_name}. "But they are not the same."

"Each one has its own name," said {companion_name}. "Look. Look closely."

{child_name} looked. The small one. The big one. The in-between one.

"I see!" said {child_name}. "Not the same. Not the same at all."

"You looked. You saw," said {companion_name}. "That is how it starts."

{refrain}.`,
      },
    },
    audioTemplate: `The night was warm and the stars were out, and a small {hero} was exploring {setting} when something small caught the light.

Three things lay in the sand. Each one was round, but they were not the same — one was tiny and brown, one was bigger and silver, one was somewhere in between.

The {hero} looked at them carefully. They were all coins, but they did not match.

Just then, {companion_name} appeared, peering over with kind and curious eyes.

"These are all coins," said {companion_name} gently, "but they are not the same coin. Each one has its own name. See how different they look? Their size, their colour, the picture on the face — those are clues to which coin it is."

The {hero} picked each one up in turn and really looked. The tiny brown one. The bigger silver one with the ridged edge. The in-between one with the smooth side.

"I never noticed before," said the {hero} quietly. "They all looked the same to me."

"That is how it starts," said {companion_name}, smiling. "You notice. Then the rest becomes easy."

The {hero} held all three and looked at them once more as the stars turned slowly overhead.

{refrain}.`,
    scriptTemplate: `The night was warm and the stars were out, and {child_name} the {hero} was exploring {setting} when something small caught the light.

Three things lay in the sand. Each one was round, but they were not the same — one was tiny and brown, one was bigger and silver, one was somewhere in between.

{child_name} looked at them carefully. They were all coins, but they did not match.

Just then, {companion_name} appeared, peering over {child_name}'s shoulder with kind and curious eyes.

"These are all coins," said {companion_name} gently, "but they are not the same coin. Each one has its own name. See how different they look? Their size, their colour, the picture on the face — those are clues to which coin it is."

{child_name} picked each one up in turn and really looked. The tiny brown one. The bigger silver one with the ridged edge. The in-between one with the smooth side.

"I never noticed before," said {child_name} quietly. "They all looked the same to me."

"That is how it starts," said {companion_name}, smiling. "You notice. Then the rest becomes easy."

{child_name} held all three and looked at them once more as the stars turned slowly overhead.

{refrain}.`,
  },
  {
    ordinal: 2, title: 'Some Are Worth More',
    concept: "A coin's value and its size are different things",
    summary: "The hero finds two coins — one much bigger than the other — and assumes the bigger one must be worth more. A trip to the market proves them wrong: the smaller coin buys twice as much. Their companion explains that a coin's value comes from what it is, not how large it looks.",
    teachingNote: "Children naturally assume bigger means more valuable — this story builds the habit of asking 'what is it worth?' instead of 'how big is it?'.",
    learningBeat: "A coin's worth comes from what it is, not how large it looks",
    ageVariants: {
      '3-4': {
        audioTemplate: `A small {hero} found two {object_motif}s in {setting}. One big. One small.

"The big one must be worth more," said the {hero}. "Big means more!"

"Let's see. Let's see," said {companion_name}.

They went to the market. The small coin bought two berries. The big coin bought just one.

"But it was bigger!" said the {hero}.

"A coin's worth comes from what it is, not how large it looks," said {companion_name}.

The {hero} thought. Big is not more. Big is not more.

{refrain}.`,
        scriptTemplate: `{child_name} the {hero} found two {object_motif}s in {setting}. One big. One small.

"The big one must be worth more," said {child_name}. "Big means more!"

"Let's see. Let's see," said {companion_name}.

They went to the market. The small coin bought two berries. The big coin bought just one.

"But it was bigger!" said {child_name}.

"A coin's worth comes from what it is, not how large it looks," said {companion_name}.

{child_name} thought. Big is not more. Big is not more.

{refrain}.`,
      },
    },
    callback: 'Coins have different names and appearances (Level 1)', ageFloor: 3,
    audioTemplate: `One calm evening, a small {hero} found two {object_motif}s in {setting} — one large and flat, one small and thin.

"The big one must be worth more," said the {hero} firmly.

{companion_name} tilted their head. "Shall we find out?"

They went to the little market together. The small coin bought two sweet berries. The large coin bought just one.

"But it was bigger!" said the {hero}.

"A coin's worth comes from what it is, not how large it looks," said {companion_name} gently. "Do you remember the names we learned? The small one — can you remember what it's called?"

The {hero} did remember. And now they knew something new: what a coin looks like and what a coin is worth are two very different questions.

They walked home together through {setting}, and the {hero} held both coins and thought about this all the way.

{refrain}.`,
    scriptTemplate: `One calm evening, {child_name} the {hero} found two {object_motif}s in {setting} — one large and flat, one small and thin.

"The big one must be worth more," said {child_name} firmly.

{companion_name} tilted their head. "Shall we find out?"

They went to the little market together. The small coin bought two sweet berries. The large coin bought just one.

"But it was bigger!" said {child_name}.

"A coin's worth comes from what it is, not how large it looks," said {companion_name} gently. "Do you remember the names we learned? The small one — can you remember what it's called?"

{child_name} did remember. And now they knew something new: what a coin looks like and what a coin is worth are two very different questions.

They walked home together through {setting}, and {child_name} held both coins and thought about this all the way.

{refrain}.`,
  },
  {
    ordinal: 3, title: 'Trading and Giving Change',
    concept: 'When you pay more than something costs, you get change back',
    summary: 'After saving five coins, the hero tries to buy a shell that costs only three. The shopkeeper hands back two coins — and the hero is surprised to learn this is called change. Their companion connects the moment to something already learned: one of those returned coins is worth more than it looks.',
    teachingNote: 'Understanding change turns a transaction from a confusing exchange into a logical, predictable conversation — a skill that removes anxiety at shop counters.',
    learningBeat: 'That is called change',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, a small {hero} had five {object_motif}s. They wanted the spotted shell.

"It costs three," said the shopkeeper.

The {hero} gave all five. All five!

The shopkeeper gave two back. "These are yours."

"Mine?" said the {hero}. "Mine?"

"That is called change," said {companion_name}. "You gave too much. So some comes back. Some comes back to you."

The {hero} smiled. "Change comes back to me. Change comes back to me!"

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} had five {object_motif}s. They wanted the spotted shell.

"It costs three," said the shopkeeper.

{child_name} gave all five. All five!

The shopkeeper gave two back. "These are yours."

"Mine?" said {child_name}. "Mine?"

"That is called change," said {companion_name}. "You gave too much. So some comes back. Some comes back to you."

{child_name} smiled. "Change comes back to me. Change comes back to me!"

{refrain}.`,
      },
    },
    callback: 'Some coins are worth more than they look (Level 2)', ageFloor: 4,
    audioTemplate: `A small {hero} had been collecting {object_motif}s for three whole nights. There were five now, and there was one thing they wanted: the spotted shell at the market stall.

"It costs three," said the shopkeeper.

The {hero} held out all five. "I only have these."

"Then I'll give you something back," said the shopkeeper — and placed two coins in the {hero}'s hand.

"Those are mine?" said the {hero}, surprised.

{companion_name} leaned close. "That is called change. When you give more than something costs, the difference comes back to you. You paid five, the shell cost three — so two return."

The {hero} looked at the shell, and then at the two coins, and understood something new: trading is a kind of conversation, and change is the honest reply.

"And remember," said {companion_name}, "the two you got back — one of them is worth more than it looks. You learned that already."

The {hero} smiled. They were getting good at this.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had been collecting {object_motif}s for three whole nights. There were five now, and there was one thing they wanted: the spotted shell at the market stall.

"It costs three," said the shopkeeper.

{child_name} held out all five. "I only have these."

"Then I'll give you something back," said the shopkeeper — and placed two coins in {child_name}'s hand.

"Those are mine?" said {child_name}, surprised.

{companion_name} leaned close. "That is called change. When you give more than something costs, the difference comes back to you. You paid five, the shell cost three — so two return."

{child_name} looked at the shell, and then at the two coins, and understood something new: trading is a kind of conversation, and change is the honest reply.

"And remember," said {companion_name}, "the two you got back — one of them is worth more than it looks. You learned that already."

{child_name} smiled. They were getting good at this.

{refrain}.`,
  },
  {
    ordinal: 4, title: 'Saving for the Big Thing',
    concept: 'Saving small amounts over time leads to something bigger',
    summary: 'The hero wants a silver lantern that costs ten coins but only has one. Night after night they search and save — and their companion counts alongside without helping find the coins. By the eighth night they have ten, and the lantern is finally theirs. The story draws a direct line back to coin values learned in Level 2.',
    teachingNote: 'Delayed gratification is hardest to teach directly — this story makes a child feel the satisfaction of waiting, which is the whole lesson.',
    learningBeat: 'Saving is just choosing tomorrow over today',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, a small {hero} wanted the silver lantern. It cost ten coins. Ten!

The {hero} had just one. "Not enough," said {companion_name}. "Not yet."

So every night, the {hero} saved one more. One more. One more.

"Saving is just choosing tomorrow over today," said {companion_name}.

Six coins. Then nine. Then — ten!

The lantern was theirs. It lit up {setting}, warm and bright.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} wanted the silver lantern. It cost ten coins. Ten!

{child_name} had just one. "Not enough," said {companion_name}. "Not yet."

So every night, {child_name} saved one more. One more. One more.

"Saving is just choosing tomorrow over today," said {companion_name}.

Six coins. Then nine. Then — ten!

The lantern was theirs. It lit up {setting}, warm and bright.

{refrain}.`,
      },
    },
    callback: "A coin's value and its size are different things (Level 2)", ageFloor: 4,
    audioTemplate: `A small {hero} had found one {object_motif} in {setting}, and there was something they wanted very much: the silver lantern at the far end of the market. It would light up the whole corner of the room.

The lantern cost ten.

The {hero} counted. One.

"That is not enough yet," said {companion_name} kindly. "But it is a beginning."

Every evening that week, the {hero} looked carefully and saved one more. And each night, {companion_name} was there — not to help find them, but to count alongside.

By the fifth night there were six. By the seventh, nine.

"Saving is just choosing tomorrow over today," said {companion_name} one evening. "One coin at a time. Do you remember how we learned that some coins are worth more than others? Every one you put aside is working harder than it looks."

On the eighth night, the {hero} counted ten. The lantern was theirs.

That night it lit {setting} with a warm and steady glow — the glow of something waited for.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had found one {object_motif} in {setting}, and there was something they wanted very much: the silver lantern at the far end of the market.

The lantern cost ten.

{child_name} counted. One.

"That is not enough yet," said {companion_name} kindly. "But it is a beginning."

Every evening that week, {child_name} looked carefully and saved one more. And each night, {companion_name} was there — not to help find them, but to count alongside.

By the fifth night there were six. By the seventh, nine.

"Saving is just choosing tomorrow over today," said {companion_name} one evening. "One coin at a time. Do you remember how we learned that some coins are worth more than others? Every one you put aside is working harder than it looks."

On the eighth night, {child_name} counted ten. The lantern was theirs.

That night it lit {setting} with a warm and steady glow — the glow of something waited for.

{refrain}.`,
  },
  {
    ordinal: 5, title: 'Wants and Needs',
    concept: 'Some things we need; some we want. Knowing the difference is a skill.',
    summary: "With exactly enough coins for either a sparkly toy or a warm meal, the hero must choose. Their companion doesn't tell them what to pick — they ask one quiet question: is this a want, or a need? The hero thinks it through and decides. The story calls back directly to the saving journey in Level 4.",
    teachingNote: 'This level is the capstone: a child who can distinguish wants from needs has every concept from the path — identification, value, exchange, saving — working together in a real decision.',
    learningBeat: 'Wanting things is not wrong',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, a small {hero} had ten {object_motif}s. Just enough for one thing.

A shiny toy! Or a warm meal for the cold night.

"I want the toy," said the {hero}. "I want it. I want it!"

"Wanting things is not wrong," said {companion_name}. "But do you need the toy? Or do you just want it?"

The {hero} thought. The night was cold. Home was far.

"I need the meal," said the {hero}. "I want the toy. But I need the meal more."

"That is very wise," said {companion_name}. "Very wise."

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} the {hero} had ten {object_motif}s. Just enough for one thing.

A shiny toy! Or a warm meal for the cold night.

"I want the toy," said {child_name}. "I want it. I want it!"

"Wanting things is not wrong," said {companion_name}. "But do you need the toy? Or do you just want it?"

{child_name} thought. The night was cold. Home was far.

"I need the meal," said {child_name}. "I want the toy. But I need the meal more."

"That is very wise," said {companion_name}. "Very wise."

{refrain}.`,
      },
    },
    callback: 'Saving for a goal (Level 4)', ageFloor: 5,
    audioTemplate: `A small {hero} had ten {object_motif}s — exactly enough for either thing.

On one side of the market: a beautiful toy that spun and sparkled in the light. On the other: a warm meal and a dry place to rest for the journey home.

"I want the toy," said the {hero} honestly.

{companion_name} sat beside them without rushing. "Wanting things is not wrong. But before you choose — do you need the toy, or do you want it?"

The {hero} thought carefully. There had been a time, not long ago, when they had saved and saved for something truly wanted. And that had been right. But tonight was cold, and home was far.

"I need the meal," said the {hero} at last. "I want the toy. But I need the meal more tonight."

"That," said {companion_name} quietly, "is one of the wisest things I have ever heard a {hero} say."

The toy could wait. Some nights, knowing the difference was the whole adventure.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had ten {object_motif}s — exactly enough for either thing.

On one side of the market: a beautiful toy that spun and sparkled in the light. On the other: a warm meal and a dry place to rest for the journey home.

"I want the toy," said {child_name} honestly.

{companion_name} sat beside them without rushing. "Wanting things is not wrong. But before you choose — do you need the toy, or do you want it?"

{child_name} thought carefully. There had been a time, not long ago, when they had saved and saved for the lantern because they truly wanted it. And that had been right. But tonight was cold, and home was far.

"I need the meal," said {child_name} at last. "I want the toy. But I need the meal more tonight."

"That," said {companion_name} quietly, "is one of the wisest things I have ever heard a {hero} say."

The toy could wait. Some nights, knowing the difference was the whole adventure.

{refrain}.`,
  },
]
