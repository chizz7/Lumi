// content/resilience/levels.ts
//
// Resilience path — 5 levels, each age-tuned (3-4 / 5-6 / 7-8 / 9-11) for length
// and sophistication. The default templates stay short (used for generic voice
// samples). The learningBeat must appear verbatim in every template.

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1,
    title: "The Wobble Marks",
    concept: "Hard things are meant to feel hard at first",
    callback: null,
    ageFloor: 3,
    summary: "Tonight is the moon parade, and the hero wants to do their very first roll under the old stone arch — the arch every grown-up touches as they pass, though nobody ever says why. After a string of funny flops, the hero finally looks at the arch up close and finds the stone crowded with tiny wobble marks: every smooth roller crashed here first. Hard at the start was never a warning — it is how every beginning feels.",
    teachingNote: "Before a child can persist, they need permission to struggle — discovering that everyone's beginning was wobbly removes the shame that makes them quit.",
    learningBeat: "It is okay to find it hard",
    ageVariants: {
      '3-4': {
        audioTemplate: `Tonight was the moon parade in {setting}. Everyone would roll under the old stone arch, one happy roll each. The {hero} wanted to roll too.

And the arch was odd. Every big one touched it as they passed. One little touch. Nobody said why.

The {hero} practised. One, two, three, roll! Flump. The {hero} landed in a heap.

Try again. Roll! Flump. Upside down this time.

"Rolling is too hard," said the {hero}. "I will hide instead."

{companion_name} came close, carrying the {object_motif}. "Hmm," they said. "Have you ever looked at the arch up close?"

The {hero} looked. Lean close. Can you see them too? Tiny dents. Hundreds of tiny dents.

"Wobble marks!" said the {hero}. "Every big one wobbled here when they were small. So... it is okay to find it hard! Hard is how it starts."

The {hero} rolled again. Wobbly, but round! And again. Rounder!

At the parade, the {hero} rolled right under the arch, and touched it. One new little dent.

"{refrain}," said {companion_name} softly.

The moon came up slow and round. The {hero} yawned.

The new dent would still be there tomorrow. With room beside it.

{refrain}.`,
        scriptTemplate: `Tonight was the moon parade in {setting}. Everyone would roll under the old stone arch, one happy roll each. {child_name} the {hero} wanted to roll too.

And the arch was odd. Every big one touched it as they passed. One little touch. Nobody said why.

{child_name} practised. One, two, three, roll! Flump. {child_name} landed in a heap.

Try again. Roll! Flump. Upside down this time.

"Rolling is too hard," said {child_name}. "I will hide instead."

{companion_name} came close, carrying the {object_motif}. "Hmm," they said. "Have you ever looked at the arch up close?"

{child_name} looked. Lean close. Can you see them too? Tiny dents. Hundreds of tiny dents.

"Wobble marks!" said {child_name}. "Every big one wobbled here when they were small. So... it is okay to find it hard! Hard is how it starts."

{child_name} rolled again. Wobbly, but round! And again. Rounder!

At the parade, {child_name} rolled right under the arch, and touched it. One new little dent.

"{refrain}," said {companion_name} softly.

The moon came up slow and round. {child_name} yawned.

The new dent would still be there tomorrow. With room beside it.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `Tonight was the moon parade, and all through {setting} everyone was practising their moon-roll. One roll each, right under the old stone arch — that was how the parade always began. More than anything, the {hero} wanted to roll under the arch tonight too.

And the arch had one odd secret. Every grown one touched it as they passed underneath. One small touch, quick as a blink. Nobody ever said why.

The {hero} found a quiet spot to practise. Ready — roll! The world spun the wrong way, and the {hero} landed flat, flump, like a dropped pancake.

Again. Flump. This time the {hero} ended up facing backwards, blinking at nothing.

A third try barely got started before it fell over sideways.

The {hero} sat down with hot cheeks. "The big ones roll like water. I flop like laundry. I must be the only one who finds it this hard. Maybe I will just watch."

{companion_name} wandered over, carrying the {object_motif}. They did not say try again. They only said, "Hmm. Before you hide — have you looked at the arch up close?"

Up close, the arch was not smooth at all. Lean close. Can you see them too? Tiny dents. Hundreds of tiny dents, low down, just where a learner might tip against the stone.

"Wobble marks," breathed the {hero}. "Every big one wobbled here. They crashed and flopped, just where I crash and flop. That is why they touch the arch — hello to their old wobbles!" The {hero} stood up slowly. "So it is okay to find it hard. It was hard for every single one of them. Hard at the start is how rolling works."

So the {hero} stopped trying to be smooth. One proud, wobbly, laughing roll — halfway round. Another, a little further. And the third came out whole, bumpy and beautiful, all the way around.

That night the {hero} rolled under the arch with everyone, and touched the stone on the way through. One new little dent among the hundreds.

"{refrain}," said {companion_name}, in a voice like remembering.

The parade wound home under the moon. Lights went out, one by one, across {setting}. The {hero}'s legs were tired in the best way.

And near the top of the arch, higher than anyone could reach, was one very old dent. Whose was that? A question for tomorrow.

{refrain}.`,
        scriptTemplate: `Tonight was the moon parade, and all through {setting} everyone was practising their moon-roll. One roll each, right under the old stone arch — that was how the parade always began. More than anything, {child_name} the {hero} wanted to roll under the arch tonight too.

And the arch had one odd secret. Every grown one touched it as they passed underneath. One small touch, quick as a blink. Nobody ever said why.

{child_name} found a quiet spot to practise. Ready — roll! The world spun the wrong way, and {child_name} landed flat, flump, like a dropped pancake.

Again. Flump. This time {child_name} ended up facing backwards, blinking at nothing.

A third try barely got started before it fell over sideways.

{child_name} sat down with hot cheeks. "The big ones roll like water. I flop like laundry. I must be the only one who finds it this hard. Maybe I will just watch."

{companion_name} wandered over, carrying the {object_motif}. They did not say try again. They only said, "Hmm. Before you hide — have you looked at the arch up close?"

Up close, the arch was not smooth at all. Lean close. Can you see them too? Tiny dents. Hundreds of tiny dents, low down, just where a learner might tip against the stone.

"Wobble marks," breathed {child_name}. "Every big one wobbled here. They crashed and flopped, just where I crash and flop. That is why they touch the arch — hello to their old wobbles!" {child_name} stood up slowly. "So it is okay to find it hard. It was hard for every single one of them. Hard at the start is how rolling works."

So {child_name} stopped trying to be smooth. One proud, wobbly, laughing roll — halfway round. Another, a little further. And the third came out whole, bumpy and beautiful, all the way around.

That night {child_name} rolled under the arch with everyone, and touched the stone on the way through. One new little dent among the hundreds.

"{refrain}," said {companion_name}, in a voice like remembering.

The parade wound home under the moon. Lights went out, one by one, across {setting}. {child_name}'s legs were tired in the best way.

And near the top of the arch, higher than anyone could reach, was one very old dent. Whose was that? A question for tomorrow.

{refrain}.`,
      },
      '7-8': {
        audioTemplate: `The moon parade came once a season to {setting}, and it always began the same way: one by one, everyone rolled under the old stone arch — a single, joyful, head-over-heels roll — and the parade poured through behind them like a river let loose. Tonight was parade night. And tonight, for the first time, the {hero} meant to roll under the arch too.

There was just one strange thing about that arch, a thing the {hero} had noticed long ago and never solved. Every grown one who passed beneath it reached out and touched the stone. One small touch, quick as a blink, always in the same low spot. Nobody announced it. Nobody explained it. They just touched the arch, smiled a private sort of smile, and rolled on.

The {hero} found a quiet hollow to practise in, well away from watching eyes. Ready. Steady. Roll!

The sky and the ground traded places twice, disagreed about it, and dropped the {hero} flat. Flump.

"Fine," said the {hero}, spitting out a leaf. "That was a practice one."

The second roll went sideways almost at once and ended with the {hero} facing the wrong direction entirely, blinking at a puzzled beetle. The third barely began before it sat down. The fourth was going beautifully right up until it was not.

The {hero} lay in the hollow and stared at the early stars. "The big ones roll like water poured from a jug," the {hero} said to nobody. "I roll like a dropped basket. Nobody else finds this hard — you can tell by how easily they do it. It must come to everyone but me. I will watch the parade from somewhere dark and comfortable, and clap politely, and that will be that."

"That does sound comfortable," said {companion_name}, who had arrived without a sound and settled down nearby with the {object_motif}. Then, after a while: "Hmm. Before you choose your dark comfortable spot — have you ever looked at the old arch up close? Really close?"

The {hero} had walked under that arch a thousand times and never once looked at it. So, grumbling gently, the {hero} went and looked.

Up close, the arch was not smooth at all. Lean in, close as a whisper. Can you see them too? Dents. Tiny dents, chips and scuffs and little crescent dings, hundreds upon hundreds of them, crowded low along the stone — exactly the height where a learner, mid-wobble, might tip over against it.

The {hero} touched one. Then another. Then a small crooked one, low down, worn shiny at the edges.

"That one is mine," said {companion_name}, sounding rather pleased about it.

And the whole strange thing came open at once, like a door the {hero} had been leaning on the wrong way. "These are wobble marks," the {hero} said slowly. "Every single one of them learned here. They crashed where I crash. They flopped where I flop. That is what the touch means — every parade, they say hello to the wobbles that taught them." The {hero} laughed out loud at the size of it. "So it is okay to find it hard. It was hard for all of them. Hard at the start is not a warning. It is just the first page."

The {hero} went back to the hollow, and this time did not try to roll like water. The {hero} rolled like a learner, wobbly and loud and laughing — halfway round. Again, three-quarters. Again. And the fifth roll of the night came around whole: bumpy, crooked, absolutely a roll.

When the parade gathered at moonrise, the {hero} was in it. The roll under the arch was not the smoothest one that night, and the {hero} touched the stone on the way through anyway — one small proud touch, adding one new little dent to the crowd of them.

"{refrain}," said {companion_name} from the archway, in a voice like remembering.

The parade wound home the long way, under a moon as round as a perfect roll. Lanterns went out across {setting}, one by one. The {hero}'s legs ached in the best possible way.

One last thought floated past, right on the edge of sleep. Near the top of the arch, far higher than any learner could tip, there had been a single old dent, all alone. Who in the world wobbles at the top of an arch?

A question for tomorrow.

{refrain}.`,
        scriptTemplate: `The moon parade came once a season to {setting}, and it always began the same way: one by one, everyone rolled under the old stone arch — a single, joyful, head-over-heels roll — and the parade poured through behind them like a river let loose. Tonight was parade night. And tonight, for the first time, {child_name} the {hero} meant to roll under the arch too.

There was just one strange thing about that arch, a thing {child_name} had noticed long ago and never solved. Every grown one who passed beneath it reached out and touched the stone. One small touch, quick as a blink, always in the same low spot. Nobody announced it. Nobody explained it. They just touched the arch, smiled a private sort of smile, and rolled on.

{child_name} found a quiet hollow to practise in, well away from watching eyes. Ready. Steady. Roll!

The sky and the ground traded places twice, disagreed about it, and dropped {child_name} flat. Flump.

"Fine," said {child_name}, spitting out a leaf. "That was a practice one."

The second roll went sideways almost at once and ended with {child_name} facing the wrong direction entirely, blinking at a puzzled beetle. The third barely began before it sat down. The fourth was going beautifully right up until it was not.

{child_name} lay in the hollow and stared at the early stars. "The big ones roll like water poured from a jug," {child_name} said to nobody. "I roll like a dropped basket. Nobody else finds this hard — you can tell by how easily they do it. It must come to everyone but me. I will watch the parade from somewhere dark and comfortable, and clap politely, and that will be that."

"That does sound comfortable," said {companion_name}, who had arrived without a sound and settled down nearby with the {object_motif}. Then, after a while: "Hmm. Before you choose your dark comfortable spot — have you ever looked at the old arch up close? Really close?"

{child_name} had walked under that arch a thousand times and never once looked at it. So, grumbling gently, {child_name} went and looked.

Up close, the arch was not smooth at all. Lean in, close as a whisper. Can you see them too? Dents. Tiny dents, chips and scuffs and little crescent dings, hundreds upon hundreds of them, crowded low along the stone — exactly the height where a learner, mid-wobble, might tip over against it.

{child_name} touched one. Then another. Then a small crooked one, low down, worn shiny at the edges.

"That one is mine," said {companion_name}, sounding rather pleased about it.

And the whole strange thing came open at once, like a door {child_name} had been leaning on the wrong way. "These are wobble marks," {child_name} said slowly. "Every single one of them learned here. They crashed where I crash. They flopped where I flop. That is what the touch means — every parade, they say hello to the wobbles that taught them." {child_name} laughed out loud at the size of it. "So it is okay to find it hard. It was hard for all of them. Hard at the start is not a warning. It is just the first page."

{child_name} went back to the hollow, and this time did not try to roll like water. {child_name} rolled like a learner, wobbly and loud and laughing — halfway round. Again, three-quarters. Again. And the fifth roll of the night came around whole: bumpy, crooked, absolutely a roll.

When the parade gathered at moonrise, {child_name} was in it. The roll under the arch was not the smoothest one that night, and {child_name} touched the stone on the way through anyway — one small proud touch, adding one new little dent to the crowd of them.

"{refrain}," said {companion_name} from the archway, in a voice like remembering.

The parade wound home the long way, under a moon as round as a perfect roll. Lanterns went out across {setting}, one by one. {child_name}'s legs ached in the best possible way.

One last thought floated past, right on the edge of sleep. Near the top of the arch, far higher than any learner could tip, there had been a single old dent, all alone. Who in the world wobbles at the top of an arch?

A question for tomorrow.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `The moon parade came once a season to {setting}, and there was exactly one way in. You rolled. One full, head-over-heels, no-half-measures roll, right under the old stone arch, and then the parade swept you up and carried you off into the best night of the season. The {hero} had watched it happen from the sidelines three times now, clapping politely and privately dying a little. Tonight, that ended. Tonight the {hero} would roll under the arch with everyone else, or so the plan went.

There was one detail about the arch that the {hero} had never been able to explain. Everyone who passed beneath it — everyone grown, everyone graceful — reached out and touched the stone. One brief touch, low on the left side, quick as a blink. Nobody announced it. Nobody taught it. If you asked, the grown ones just smiled the particular smile of somebody holding a very old, very comfortable secret, and changed the subject.

The {hero} had a more urgent problem than secrets, though, which was that the {hero} could not actually roll.

This fact was established thoroughly, in a quiet hollow far from witnesses. The first attempt began with confidence and ended flat in the grass — flump — with the sky looking smugly down. The second went sideways at once, and finished with the {hero} facing the wrong way entirely, eye to eye with a beetle who had clearly seen this sort of thing before. The third simply sat down midway, like a wave that changes its mind. The fourth was glorious for exactly half a turn.

The {hero} lay where the fourth attempt had filed it and gave up in an orderly fashion.

"Here is what I know," the {hero} announced to the early stars. "The big ones roll like water poured from a jug. I roll like the jug. Nobody else finds this hard — you can tell, because they do it laughing. Whatever it is they have, I was not given it. So I will watch from somewhere dark, and clap, and that will simply have to be a personality."

"Mm. It could be," said {companion_name}, who had materialised nearby with the {object_motif}, in the way of companions who always know exactly when someone is announcing things to stars. They did not argue. Arguing would have been useless and they knew it. Instead, after a comfortable silence, they said only, "Hmm. Before you retire from rolling forever — have you ever looked at the arch? Not walked under it. Looked at it."

It was a strange enough question that the {hero} went.

The arch stood quiet in the settling dark, moon on its shoulder, older than every story anyone told about it. Up close — really close, close as a whisper, and you can lean in too, look low on the stone, what do you see there? — the arch was not smooth at all. It was covered in dents. Tiny ones. Chips and scuffs and small crescent dings, hundreds upon hundreds of them, all crowded along the stone at exactly the height where a learner, mid-wobble, tips over and meets the arch personally.

The {hero} stood very still, doing the arithmetic of it.

"That crooked one is mine," said {companion_name} from behind, and there was something in their voice the {hero} had never heard before — pride, pointed backwards. "Third from the bottom. I hit that stone so many times we were practically related."

"You," said the {hero}. "You wobbled."

"Magnificently."

And the secret opened up all at once, the way a puzzle does when the last piece stops being a piece and becomes the picture. The touch. The low spot. The private smile. "These are wobble marks," the {hero} said slowly. "All of them learned here. Every water-smooth roller in that parade crashed exactly where I have been crashing all evening. The touch is a thank-you. They greet their own wobbles on the way through." The {hero} put one astonished laugh into the dark. "So it is okay to find it hard. It was hard for every single one of them. Hard at the start is not evidence against me. It is the entry fee. It always was."

The {hero} walked back to the hollow and rolled like somebody with nothing left to hide — loudly, wobbily, laughing at the sky. Halfway. Then three-quarters. Then, on the fifth try of the night, all the way round: crooked, bumpy, undeniable.

At moonrise the parade gathered, and the {hero} was in it. The roll under the arch was nobody's smoothest. It was, however, entirely the {hero}'s own, and on the way through the {hero} reached out and touched the stone, adding one new dent to the congregation.

"{refrain}," said {companion_name} at the archway, quietly, like a password.

The parade took the long way home under a moon as round as a well-finished roll. Lanterns dimmed across {setting}, one by one, and the {hero}'s legs ached in the deeply satisfying way of legs that earned it.

One last thought drifted past on the edge of sleep. Near the very top of the arch, far above any height a learner could tip, sat a single ancient dent, all alone. Who wobbles at the top of an arch?

Somebody must know. Tomorrow, the {hero} decided, somebody would be asked.

{refrain}.`,
        scriptTemplate: `The moon parade came once a season to {setting}, and there was exactly one way in. You rolled. One full, head-over-heels, no-half-measures roll, right under the old stone arch, and then the parade swept you up and carried you off into the best night of the season. {child_name} the {hero} had watched it happen from the sidelines three times now, clapping politely and privately dying a little. Tonight, that ended. Tonight {child_name} would roll under the arch with everyone else, or so the plan went.

There was one detail about the arch that {child_name} had never been able to explain. Everyone who passed beneath it — everyone grown, everyone graceful — reached out and touched the stone. One brief touch, low on the left side, quick as a blink. Nobody announced it. Nobody taught it. If you asked, the grown ones just smiled the particular smile of somebody holding a very old, very comfortable secret, and changed the subject.

{child_name} had a more urgent problem than secrets, though, which was that {child_name} could not actually roll.

This fact was established thoroughly, in a quiet hollow far from witnesses. The first attempt began with confidence and ended flat in the grass — flump — with the sky looking smugly down. The second went sideways at once, and finished with {child_name} facing the wrong way entirely, eye to eye with a beetle who had clearly seen this sort of thing before. The third simply sat down midway, like a wave that changes its mind. The fourth was glorious for exactly half a turn.

{child_name} lay where the fourth attempt had filed it and gave up in an orderly fashion.

"Here is what I know," {child_name} announced to the early stars. "The big ones roll like water poured from a jug. I roll like the jug. Nobody else finds this hard — you can tell, because they do it laughing. Whatever it is they have, I was not given it. So I will watch from somewhere dark, and clap, and that will simply have to be a personality."

"Mm. It could be," said {companion_name}, who had materialised nearby with the {object_motif}, in the way of companions who always know exactly when someone is announcing things to stars. They did not argue. Arguing would have been useless and they knew it. Instead, after a comfortable silence, they said only, "Hmm. Before you retire from rolling forever — have you ever looked at the arch? Not walked under it. Looked at it."

It was a strange enough question that {child_name} went.

The arch stood quiet in the settling dark, moon on its shoulder, older than every story anyone told about it. Up close — really close, close as a whisper, and you can lean in too, look low on the stone, what do you see there? — the arch was not smooth at all. It was covered in dents. Tiny ones. Chips and scuffs and small crescent dings, hundreds upon hundreds of them, all crowded along the stone at exactly the height where a learner, mid-wobble, tips over and meets the arch personally.

{child_name} stood very still, doing the arithmetic of it.

"That crooked one is mine," said {companion_name} from behind, and there was something in their voice {child_name} had never heard before — pride, pointed backwards. "Third from the bottom. I hit that stone so many times we were practically related."

"You," said {child_name}. "You wobbled."

"Magnificently."

And the secret opened up all at once, the way a puzzle does when the last piece stops being a piece and becomes the picture. The touch. The low spot. The private smile. "These are wobble marks," {child_name} said slowly. "All of them learned here. Every water-smooth roller in that parade crashed exactly where I have been crashing all evening. The touch is a thank-you. They greet their own wobbles on the way through." {child_name} put one astonished laugh into the dark. "So it is okay to find it hard. It was hard for every single one of them. Hard at the start is not evidence against me. It is the entry fee. It always was."

{child_name} walked back to the hollow and rolled like somebody with nothing left to hide — loudly, wobbily, laughing at the sky. Halfway. Then three-quarters. Then, on the fifth try of the night, all the way round: crooked, bumpy, undeniable.

At moonrise the parade gathered, and {child_name} was in it. The roll under the arch was nobody's smoothest. It was, however, entirely {child_name}'s own, and on the way through {child_name} reached out and touched the stone, adding one new dent to the congregation.

"{refrain}," said {companion_name} at the archway, quietly, like a password.

The parade took the long way home under a moon as round as a well-finished roll. Lanterns dimmed across {setting}, one by one, and {child_name}'s legs ached in the deeply satisfying way of legs that earned it.

One last thought drifted past on the edge of sleep. Near the very top of the arch, far above any height a learner could tip, sat a single ancient dent, all alone. Who wobbles at the top of an arch?

Somebody must know. Tomorrow, {child_name} decided, somebody would be asked.

{refrain}.`,
      },
    },
    audioTemplate: `Tonight was the moon parade, and all through {setting} everyone was practising their moon-roll. One roll each, right under the old stone arch — that was how the parade always began. More than anything, the {hero} wanted to roll under the arch tonight too.

And the arch had one odd secret. Every grown one touched it as they passed underneath. One small touch, quick as a blink. Nobody ever said why.

The {hero} found a quiet spot to practise. Ready — roll! The world spun the wrong way, and the {hero} landed flat, flump, like a dropped pancake.

Again. Flump. This time the {hero} ended up facing backwards, blinking at nothing.

A third try barely got started before it fell over sideways.

The {hero} sat down with hot cheeks. "The big ones roll like water. I flop like laundry. I must be the only one who finds it this hard. Maybe I will just watch."

{companion_name} wandered over, carrying the {object_motif}. They did not say try again. They only said, "Hmm. Before you hide — have you looked at the arch up close?"

Up close, the arch was not smooth at all. Lean close. Can you see them too? Tiny dents. Hundreds of tiny dents, low down, just where a learner might tip against the stone.

"Wobble marks," breathed the {hero}. "Every big one wobbled here. They crashed and flopped, just where I crash and flop. That is why they touch the arch — hello to their old wobbles!" The {hero} stood up slowly. "So it is okay to find it hard. It was hard for every single one of them. Hard at the start is how rolling works."

So the {hero} stopped trying to be smooth. One proud, wobbly, laughing roll — halfway round. Another, a little further. And the third came out whole, bumpy and beautiful, all the way around.

That night the {hero} rolled under the arch with everyone, and touched the stone on the way through. One new little dent among the hundreds.

"{refrain}," said {companion_name}, in a voice like remembering.

The parade wound home under the moon. Lights went out, one by one, across {setting}. The {hero}'s legs were tired in the best way.

And near the top of the arch, higher than anyone could reach, was one very old dent. Whose was that? A question for tomorrow.

{refrain}.`,
    scriptTemplate: `Tonight was the moon parade, and all through {setting} everyone was practising their moon-roll. One roll each, right under the old stone arch — that was how the parade always began. More than anything, {child_name} the {hero} wanted to roll under the arch tonight too.

And the arch had one odd secret. Every grown one touched it as they passed underneath. One small touch, quick as a blink. Nobody ever said why.

{child_name} found a quiet spot to practise. Ready — roll! The world spun the wrong way, and {child_name} landed flat, flump, like a dropped pancake.

Again. Flump. This time {child_name} ended up facing backwards, blinking at nothing.

A third try barely got started before it fell over sideways.

{child_name} sat down with hot cheeks. "The big ones roll like water. I flop like laundry. I must be the only one who finds it this hard. Maybe I will just watch."

{companion_name} wandered over, carrying the {object_motif}. They did not say try again. They only said, "Hmm. Before you hide — have you looked at the arch up close?"

Up close, the arch was not smooth at all. Lean close. Can you see them too? Tiny dents. Hundreds of tiny dents, low down, just where a learner might tip against the stone.

"Wobble marks," breathed {child_name}. "Every big one wobbled here. They crashed and flopped, just where I crash and flop. That is why they touch the arch — hello to their old wobbles!" {child_name} stood up slowly. "So it is okay to find it hard. It was hard for every single one of them. Hard at the start is how rolling works."

So {child_name} stopped trying to be smooth. One proud, wobbly, laughing roll — halfway round. Another, a little further. And the third came out whole, bumpy and beautiful, all the way around.

That night {child_name} rolled under the arch with everyone, and touched the stone on the way through. One new little dent among the hundreds.

"{refrain}," said {companion_name}, in a voice like remembering.

The parade wound home under the moon. Lights went out, one by one, across {setting}. {child_name}'s legs were tired in the best way.

And near the top of the arch, higher than anyone could reach, was one very old dent. Whose was that? A question for tomorrow.

{refrain}.`,
  },
  {
    ordinal: 2,
    title: "The Echo That Waited",
    concept: "Adding \"yet\" turns \"I can't\" into \"not so far\"",
    callback: "Hard is meant to feel hard (Level 1)",
    ageFloor: 4,
    summary: "At goodnight-call time, the old echo stone rings an answer back to everyone who calls across the water — everyone except the hero's companion, and nobody knows why. When the hero's own first far-call comes out as a honk, one look at a little sprout still reaching for the light turns \"I can't\" into \"not so far\" — a word small enough to carry and strong enough to give away.",
    teachingNote: "One word — \"yet\" — reframes a fixed limit as a place on a journey, and gives a child somewhere to keep going.",
    learningBeat: "not so far",
    ageVariants: {
      '3-4': {
        audioTemplate: `It was goodnight-call time in {setting}. Far away stood the old echo stone. You called to it, and it rang your goodnight back.

The {hero} took a big breath and called. Honk! Like a sleepy duck. The stone stayed quiet.

Honk! Quiet again.

"I can't do the far-call," said the {hero}.

{companion_name} looked at the {object_motif}. "Hmm. Still reaching for the light. Still growing."

"Oh!" said the {hero}. "The sprout can't reach the light yet. And I can't call yet! Can't just means not so far."

Shh. Here is a secret. The stone has never rung for {companion_name}. Not once. Can you guess why?

"I said I can't, long ago," said {companion_name}. "And I stopped trying."

"Then say not so far!" said the {hero}.

The {hero} tried again. One, two, three — the call flew! And the stone rang back.

Then {companion_name} called too, old and wobbly. The stone rang again. Their very first ring.

"{refrain}," whispered {companion_name}.

Two echoes floated home. Soft. Softer.

Tomorrow: the double-call, together.

{refrain}.`,
        scriptTemplate: `It was goodnight-call time in {setting}. Far away stood the old echo stone. You called to it, and it rang your goodnight back.

{child_name} the {hero} took a big breath and called. Honk! Like a sleepy duck. The stone stayed quiet.

Honk! Quiet again.

"I can't do the far-call," said {child_name}.

{companion_name} looked at the {object_motif}. "Hmm. Still reaching for the light. Still growing."

"Oh!" said {child_name}. "The sprout can't reach the light yet. And I can't call yet! Can't just means not so far."

Shh. Here is a secret. The stone has never rung for {companion_name}. Not once. Can you guess why?

"I said I can't, long ago," said {companion_name}. "And I stopped trying."

"Then say not so far!" said {child_name}.

{child_name} tried again. One, two, three — the call flew! And the stone rang back.

Then {companion_name} called too, old and wobbly. The stone rang again. Their very first ring.

"{refrain}," whispered {companion_name}.

Two echoes floated home. Soft. Softer.

Tomorrow: the double-call, together.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `Goodnight-call time came to {setting} just after sundown. Far across the water stood the old echo stone. You filled up with breath, sent your far-call sailing, and the stone rang your goodnight back. Tonight, at last, the {hero} was old enough to try.

There was one odd thing about the echo stone. It answered everybody. Everybody except {companion_name} — and no one knew why.

The {hero} planted both feet, took an enormous breath, and called. Out came — honk. A surprised duck.

The stone said nothing.

Again, bigger. Honk! An even more surprised duck.

The third try was so small it fell in the water just past the {hero}'s nose.

"I can't do the far-call," said the {hero}. "Hard at the start is allowed, I know — I met the wobble marks. But this is not hard. This is can't."

{companion_name} only said, "Hmm," and nodded at the {object_motif}. "Reaching for the light all season, that one. Not there. Doesn't seem to mind."

The {hero} looked at the little sprout: stretched as far as it could stretch, nowhere near the light, growing anyway.

And the idea arrived, small and bright. "It can't reach the light yet," said the {hero} slowly. "It just isn't finished. Maybe I'm not finished either. Can't doesn't mean never. Can't only means not so far!"

Now lean close, for a secret. When the {hero} said that, {companion_name} went very quiet. Can you guess why the stone never answers them?

"I said I can't once, long ago," said {companion_name} at last. "I believed it. I never called again. The stone never got its chance."

The {hero} stood up. "Then we're both not-so-far. Watch me."

"{refrain}," said {companion_name} quietly, like a promise.

Honk. "Not so far!" Honk. "Not so far!" And then the call came out round and true, and the old stone rang it back: one clear goodnight, floating home over the water.

"Your turn," said the {hero}. "Say it."

"Not so far," said {companion_name}, in a rusty little voice. And they called — wobbly, old, brave — and the stone rang back for them, for the first time in their long life.

They listened until the last echo folded into the dark. The water went smooth. The stars leaned closer.

"Tomorrow," said {companion_name} sleepily, "teach me the double-call."

Not so far, thought the {hero}, smiling. And then, one day, all the way.

{refrain}.`,
        scriptTemplate: `Goodnight-call time came to {setting} just after sundown. Far across the water stood the old echo stone. You filled up with breath, sent your far-call sailing, and the stone rang your goodnight back. Tonight, at last, {child_name} the {hero} was old enough to try.

There was one odd thing about the echo stone. It answered everybody. Everybody except {companion_name} — and no one knew why.

{child_name} planted both feet, took an enormous breath, and called. Out came — honk. A surprised duck.

The stone said nothing.

Again, bigger. Honk! An even more surprised duck.

The third try was so small it fell in the water just past {child_name}'s nose.

"I can't do the far-call," said {child_name}. "Hard at the start is allowed, I know — I met the wobble marks. But this is not hard. This is can't."

{companion_name} only said, "Hmm," and nodded at the {object_motif}. "Reaching for the light all season, that one. Not there. Doesn't seem to mind."

{child_name} looked at the little sprout: stretched as far as it could stretch, nowhere near the light, growing anyway.

And the idea arrived, small and bright. "It can't reach the light yet," said {child_name} slowly. "It just isn't finished. Maybe I'm not finished either. Can't doesn't mean never. Can't only means not so far!"

Now lean close, for a secret. When {child_name} said that, {companion_name} went very quiet. Can you guess why the stone never answers them?

"I said I can't once, long ago," said {companion_name} at last. "I believed it. I never called again. The stone never got its chance."

{child_name} stood up. "Then we're both not-so-far. Watch me."

"{refrain}," said {companion_name} quietly, like a promise.

Honk. "Not so far!" Honk. "Not so far!" And then the call came out round and true, and the old stone rang it back: one clear goodnight, floating home over the water.

"Your turn," said {child_name}. "Say it."

"Not so far," said {companion_name}, in a rusty little voice. And they called — wobbly, old, brave — and the stone rang back for them, for the first time in their long life.

They listened until the last echo folded into the dark. The water went smooth. The stars leaned closer.

"Tomorrow," said {companion_name} sleepily, "teach me the double-call."

Not so far, thought {child_name}, smiling. And then, one day, all the way.

{refrain}.`,
      },
      '7-8': {
        audioTemplate: `In {setting} there was a custom as old as the hills: when the first star came out, you sent your goodnight across the water. Not spoken — called. The far-call. It sailed to the old echo stone on the far shore, and the stone rang it back, so your own goodnight came home just as you were falling asleep. Tonight, for the first time, the {hero} was old enough to send one.

There was one strange thing about the echo stone, a thing everyone knew and nobody mentioned. It answered every far-call ever sent — young, old, loud, shy. Everyone except {companion_name}. In all their long life the stone had never once rung for them, and if you asked {companion_name} why, they changed the subject with tremendous skill.

The {hero} stood at the water's edge, planted both feet, filled up with the biggest breath of the evening, and called.

Honk.

The sound of a surprised duck. It travelled roughly the length of the {hero}'s shadow and sat down in the shallows.

The stone, far away, said nothing.

"Warming up," said the {hero}, and tried again, bigger. Honk! More like a duck that had been planning it all day.

The third try was worse — a wisp of a thing that fell in the water just past the {hero}'s nose. The fourth cracked in the middle and became two sounds, neither of them proud.

The {hero} sat down hard on the bank. "I can't do the far-call. And before anyone says it — I know hard is allowed. I met the wobble marks. But that was hard. This is can't. Some voices fly and some sink, and mine sinks."

{companion_name} did not argue. They were looking at the {object_motif}, leaning toward the last of the light. "Hmm," was all they said. "Reaching for that light all season, this one. Hasn't got there. Doesn't seem the least bit embarrassed about it."

The {hero} looked. The little sprout was stretched as tall as it could stretch, nowhere near the light, and growing anyway.

The idea came up quietly, like the first star. "It can't reach the light yet," the {hero} said slowly. "Yet. It isn't a can't-plant. It just isn't finished." The little word was small, and it fit everything. "Maybe my call isn't a can't either. Can't says the door is shut forever. Yet says I'm just not through it. Can't only means not so far."

Now — lean close, here is a secret. While the {hero} was saying this, {companion_name} had gone very still. Can you guess why the stone has never rung for them?

"I said I can't, once," said {companion_name}, in a voice like an old drawer opening. "About the far-call. I was young. It came out wrong twice, and I decided the stone and I were not meant for each other. I have not called across that water in my whole life. The stone never refused me. I never gave it the chance."

The {hero} stared. {companion_name} — who knew everything, who had a saying for every weather — had been carrying a can't around all along.

"Then we're both just not-so-far," said the {hero}, standing up. "Watch me."

"{refrain}," said {companion_name} quietly, like a promise.

Honk. "Not so far." Honk. "Not so far!" Each silly sound stung a little less than the one before, because it was not a verdict anymore — it was practice. And somewhere around the seventh try, the call came out round and full and true, and it flew: over the shallows, over the deep, all the way to the far shore. And the old stone rang. One clear, bright goodnight, floating home across the dark water.

The {hero} whooped, then turned. "Your turn."

"It has been a very long time—"

"Not so far," said the {hero}. "Say it."

"...Not so far," said {companion_name}, in a rusty voice. And they filled up their old chest and called — wobbly, creaky, brave as anything — and across the water, for the first time in their long life, the stone rang for {companion_name}.

They stood extremely still while their own goodnight came home to them at last, and their eyes were shining.

The two echoes faded together, softer and softer, into the dark. The water smoothed itself out. The stars leaned close to listen.

"Tomorrow," said {companion_name}, sounding sleepy and lighter than before, "teach me the double-call."

"Not so far," said the {hero}, grinning. "And then all the way."

{refrain}.`,
        scriptTemplate: `In {setting} there was a custom as old as the hills: when the first star came out, you sent your goodnight across the water. Not spoken — called. The far-call. It sailed to the old echo stone on the far shore, and the stone rang it back, so your own goodnight came home just as you were falling asleep. Tonight, for the first time, {child_name} the {hero} was old enough to send one.

There was one strange thing about the echo stone, a thing everyone knew and nobody mentioned. It answered every far-call ever sent — young, old, loud, shy. Everyone except {companion_name}. In all their long life the stone had never once rung for them, and if you asked {companion_name} why, they changed the subject with tremendous skill.

{child_name} stood at the water's edge, planted both feet, filled up with the biggest breath of the evening, and called.

Honk.

The sound of a surprised duck. It travelled roughly the length of {child_name}'s shadow and sat down in the shallows.

The stone, far away, said nothing.

"Warming up," said {child_name}, and tried again, bigger. Honk! More like a duck that had been planning it all day.

The third try was worse — a wisp of a thing that fell in the water just past {child_name}'s nose. The fourth cracked in the middle and became two sounds, neither of them proud.

{child_name} sat down hard on the bank. "I can't do the far-call. And before anyone says it — I know hard is allowed. I met the wobble marks. But that was hard. This is can't. Some voices fly and some sink, and mine sinks."

{companion_name} did not argue. They were looking at the {object_motif}, leaning toward the last of the light. "Hmm," was all they said. "Reaching for that light all season, this one. Hasn't got there. Doesn't seem the least bit embarrassed about it."

{child_name} looked. The little sprout was stretched as tall as it could stretch, nowhere near the light, and growing anyway.

The idea came up quietly, like the first star. "It can't reach the light yet," {child_name} said slowly. "Yet. It isn't a can't-plant. It just isn't finished." The little word was small, and it fit everything. "Maybe my call isn't a can't either. Can't says the door is shut forever. Yet says I'm just not through it. Can't only means not so far."

Now — lean close, here is a secret. While {child_name} was saying this, {companion_name} had gone very still. Can you guess why the stone has never rung for them?

"I said I can't, once," said {companion_name}, in a voice like an old drawer opening. "About the far-call. I was young. It came out wrong twice, and I decided the stone and I were not meant for each other. I have not called across that water in my whole life. The stone never refused me. I never gave it the chance."

{child_name} stared. {companion_name} — who knew everything, who had a saying for every weather — had been carrying a can't around all along.

"Then we're both just not-so-far," said {child_name}, standing up. "Watch me."

"{refrain}," said {companion_name} quietly, like a promise.

Honk. "Not so far." Honk. "Not so far!" Each silly sound stung a little less than the one before, because it was not a verdict anymore — it was practice. And somewhere around the seventh try, the call came out round and full and true, and it flew: over the shallows, over the deep, all the way to the far shore. And the old stone rang. One clear, bright goodnight, floating home across the dark water.

{child_name} whooped, then turned. "Your turn."

"It has been a very long time—"

"Not so far," said {child_name}. "Say it."

"...Not so far," said {companion_name}, in a rusty voice. And they filled up their old chest and called — wobbly, creaky, brave as anything — and across the water, for the first time in their long life, the stone rang for {companion_name}.

They stood extremely still while their own goodnight came home to them at last, and their eyes were shining.

The two echoes faded together, softer and softer, into the dark. The water smoothed itself out. The stars leaned close to listen.

"Tomorrow," said {companion_name}, sounding sleepy and lighter than before, "teach me the double-call."

"Not so far," said {child_name}, grinning. "And then all the way."

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `Every place has one custom it is quietly famous for, and in {setting} it was this: when the first star came out, you did not say goodnight. You called it. The far-call — one long, full note, sent sailing to the old echo stone on the far shore — and the stone rang it back, so your own goodnight came home across the dark just as you were drifting off. Tonight, for the first time, the {hero} was finally old enough to send a call of their own.

There was one strange fact about the echo stone, known to everyone and mentioned by no one. It had answered every far-call ever sent — loud ones, timid ones, calls that wobbled like a dropped plate. Everyone, in all these years, except {companion_name}. The stone had never rung for them, not once, and whenever anyone asked why, {companion_name} developed a sudden fascinating interest in the weather.

The {hero} stood at the water's edge, planted both feet, drew in the largest breath of the evening, and released what was meant to be a long, noble, sailing note.

Honk.

A surprised duck. It travelled the length of the {hero}'s shadow, lost interest, and sat down in the shallows.

The stone said nothing whatsoever.

"Warming up," the {hero} announced, and tried again with more ambition. Honk! — less a surprised duck now, more a duck that had rehearsed. The third attempt was a wisp that fell in the water just past the {hero}'s nose. The fourth cracked neatly in half mid-flight, becoming two sounds, neither of which would claim the other.

The {hero} sat down on the bank with the particular dignity of the recently humbled. "I can't do the far-call," the {hero} said. "And before anyone quotes the wobble marks at me — I know. Hard is allowed. But hard is when a thing goes badly. This thing does not go at all. Some voices fly and some sink. Mine sinks. There is no lesson here. There is just a duck."

{companion_name} did not argue, which was somehow more annoying than arguing. They were studying the {object_motif}, leaning its whole small body toward the last of the light. "Hmm," they said at last. "This one has been reaching for that light all season. Hasn't arrived. Doesn't appear to consider itself a failure."

The {hero} was fully prepared to ignore this, and then made the mistake of actually looking. The sprout stood stretched to its absolute limit, nowhere near the light, and visibly, stubbornly, unhurriedly growing.

The thought arrived the way the first star does: quietly, and then impossible to unsee. "It can't reach the light yet," the {hero} said slowly. "Yet. Nobody looks at a growing thing and calls it a failed tree." The {hero} turned the small word over like a key. "Can't slams the whole door. But yet — yet just means the door is still ahead of me. I haven't done it so far. Not so far isn't the same as never."

Now — lean in, while the {hero} is busy discovering things. Did you notice what happened to {companion_name} during all that? They went very still. Very quiet. Can you guess — before the {hero} does — why the stone has never rung for them?

"I said I can't, once," {companion_name} said finally, in a voice like an old drawer being opened for the first time in years. "About the far-call. I was young. It came out wrong twice — twice! — and I ruled, then and there, that the stone and I were not meant for each other. It felt very wise at the time." They looked across the water. "I have not called once since. So you see, the stone never refused me. I never gave it anything to answer."

The {hero} stared. {companion_name} — who knew everything, who had a proverb for every weather — had spent a lifetime carrying one small, heavy can't.

"Then we are both simply not-so-far," said the {hero}, standing up and dusting off the humility. "Watch me."

"{refrain}," said {companion_name} quietly, like a promise taken down from a high shelf.

Honk. "Not so far." Honk. "Not so far!" Each ridiculous sound stung less than the one before, because none of them were verdicts anymore. They were practice, and practice is allowed to be ugly. Around the seventh try the note came out round and full and true, and it flew — all the way to the far shore — and the old stone rang, one clear goodnight sailing home across the dark.

The {hero} whooped, then turned. "Your turn."

"It has been an extremely long—"

"Not so far," said the {hero}. "Say it."

"...Not so far," said {companion_name}, rusty and quiet. And they filled their old chest with evening air and called — wobbly, creaky, half a lifetime late — and across the water, for the very first time, the stone rang for {companion_name}.

They said nothing for a while. Their own goodnight came home across the water, and they stood in it like warm rain.

The two echoes faded together, softer, and softer, into the dark. The water smoothed itself flat. The stars leaned close.

"Tomorrow," said {companion_name} at last, sounding sleepy and several years lighter, "teach me the double-call."

"Can't do that one," said the {hero}, grinning into the dark. "Not so far."

{refrain}.`,
        scriptTemplate: `Every place has one custom it is quietly famous for, and in {setting} it was this: when the first star came out, you did not say goodnight. You called it. The far-call — one long, full note, sent sailing to the old echo stone on the far shore — and the stone rang it back, so your own goodnight came home across the dark just as you were drifting off. Tonight, for the first time, {child_name} the {hero} was finally old enough to send a call of their own.

There was one strange fact about the echo stone, known to everyone and mentioned by no one. It had answered every far-call ever sent — loud ones, timid ones, calls that wobbled like a dropped plate. Everyone, in all these years, except {companion_name}. The stone had never rung for them, not once, and whenever anyone asked why, {companion_name} developed a sudden fascinating interest in the weather.

{child_name} stood at the water's edge, planted both feet, drew in the largest breath of the evening, and released what was meant to be a long, noble, sailing note.

Honk.

A surprised duck. It travelled the length of {child_name}'s shadow, lost interest, and sat down in the shallows.

The stone said nothing whatsoever.

"Warming up," {child_name} announced, and tried again with more ambition. Honk! — less a surprised duck now, more a duck that had rehearsed. The third attempt was a wisp that fell in the water just past {child_name}'s nose. The fourth cracked neatly in half mid-flight, becoming two sounds, neither of which would claim the other.

{child_name} sat down on the bank with the particular dignity of the recently humbled. "I can't do the far-call," {child_name} said. "And before anyone quotes the wobble marks at me — I know. Hard is allowed. But hard is when a thing goes badly. This thing does not go at all. Some voices fly and some sink. Mine sinks. There is no lesson here. There is just a duck."

{companion_name} did not argue, which was somehow more annoying than arguing. They were studying the {object_motif}, leaning its whole small body toward the last of the light. "Hmm," they said at last. "This one has been reaching for that light all season. Hasn't arrived. Doesn't appear to consider itself a failure."

{child_name} was fully prepared to ignore this, and then made the mistake of actually looking. The sprout stood stretched to its absolute limit, nowhere near the light, and visibly, stubbornly, unhurriedly growing.

The thought arrived the way the first star does: quietly, and then impossible to unsee. "It can't reach the light yet," {child_name} said slowly. "Yet. Nobody looks at a growing thing and calls it a failed tree." {child_name} turned the small word over like a key. "Can't slams the whole door. But yet — yet just means the door is still ahead of me. I haven't done it so far. Not so far isn't the same as never."

Now — lean in, while {child_name} is busy discovering things. Did you notice what happened to {companion_name} during all that? They went very still. Very quiet. Can you guess — before {child_name} does — why the stone has never rung for them?

"I said I can't, once," {companion_name} said finally, in a voice like an old drawer being opened for the first time in years. "About the far-call. I was young. It came out wrong twice — twice! — and I ruled, then and there, that the stone and I were not meant for each other. It felt very wise at the time." They looked across the water. "I have not called once since. So you see, the stone never refused me. I never gave it anything to answer."

{child_name} stared. {companion_name} — who knew everything, who had a proverb for every weather — had spent a lifetime carrying one small, heavy can't.

"Then we are both simply not-so-far," said {child_name}, standing up and dusting off the humility. "Watch me."

"{refrain}," said {companion_name} quietly, like a promise taken down from a high shelf.

Honk. "Not so far." Honk. "Not so far!" Each ridiculous sound stung less than the one before, because none of them were verdicts anymore. They were practice, and practice is allowed to be ugly. Around the seventh try the note came out round and full and true, and it flew — all the way to the far shore — and the old stone rang, one clear goodnight sailing home across the dark.

{child_name} whooped, then turned. "Your turn."

"It has been an extremely long—"

"Not so far," said {child_name}. "Say it."

"...Not so far," said {companion_name}, rusty and quiet. And they filled their old chest with evening air and called — wobbly, creaky, half a lifetime late — and across the water, for the very first time, the stone rang for {companion_name}.

They said nothing for a while. Their own goodnight came home across the water, and they stood in it like warm rain.

The two echoes faded together, softer, and softer, into the dark. The water smoothed itself flat. The stars leaned close.

"Tomorrow," said {companion_name} at last, sounding sleepy and several years lighter, "teach me the double-call."

"Can't do that one," said {child_name}, grinning into the dark. "Not so far."

{refrain}.`,
      },
    },
    audioTemplate: `Goodnight-call time came to {setting} just after sundown. Far across the water stood the old echo stone. You filled up with breath, sent your far-call sailing, and the stone rang your goodnight back. Tonight, at last, the {hero} was old enough to try.

There was one odd thing about the echo stone. It answered everybody. Everybody except {companion_name} — and no one knew why.

The {hero} planted both feet, took an enormous breath, and called. Out came — honk. A surprised duck.

The stone said nothing.

Again, bigger. Honk! An even more surprised duck.

The third try was so small it fell in the water just past the {hero}'s nose.

"I can't do the far-call," said the {hero}. "Hard at the start is allowed, I know — I met the wobble marks. But this is not hard. This is can't."

{companion_name} only said, "Hmm," and nodded at the {object_motif}. "Reaching for the light all season, that one. Not there. Doesn't seem to mind."

The {hero} looked at the little sprout: stretched as far as it could stretch, nowhere near the light, growing anyway.

And the idea arrived, small and bright. "It can't reach the light yet," said the {hero} slowly. "It just isn't finished. Maybe I'm not finished either. Can't doesn't mean never. Can't only means not so far!"

Now lean close, for a secret. When the {hero} said that, {companion_name} went very quiet. Can you guess why the stone never answers them?

"I said I can't once, long ago," said {companion_name} at last. "I believed it. I never called again. The stone never got its chance."

The {hero} stood up. "Then we're both not-so-far. Watch me."

"{refrain}," said {companion_name} quietly, like a promise.

Honk. "Not so far!" Honk. "Not so far!" And then the call came out round and true, and the old stone rang it back: one clear goodnight, floating home over the water.

"Your turn," said the {hero}. "Say it."

"Not so far," said {companion_name}, in a rusty little voice. And they called — wobbly, old, brave — and the stone rang back for them, for the first time in their long life.

They listened until the last echo folded into the dark. The water went smooth. The stars leaned closer.

"Tomorrow," said {companion_name} sleepily, "teach me the double-call."

Not so far, thought the {hero}, smiling. And then, one day, all the way.

{refrain}.`,
    scriptTemplate: `Goodnight-call time came to {setting} just after sundown. Far across the water stood the old echo stone. You filled up with breath, sent your far-call sailing, and the stone rang your goodnight back. Tonight, at last, {child_name} the {hero} was old enough to try.

There was one odd thing about the echo stone. It answered everybody. Everybody except {companion_name} — and no one knew why.

{child_name} planted both feet, took an enormous breath, and called. Out came — honk. A surprised duck.

The stone said nothing.

Again, bigger. Honk! An even more surprised duck.

The third try was so small it fell in the water just past {child_name}'s nose.

"I can't do the far-call," said {child_name}. "Hard at the start is allowed, I know — I met the wobble marks. But this is not hard. This is can't."

{companion_name} only said, "Hmm," and nodded at the {object_motif}. "Reaching for the light all season, that one. Not there. Doesn't seem to mind."

{child_name} looked at the little sprout: stretched as far as it could stretch, nowhere near the light, growing anyway.

And the idea arrived, small and bright. "It can't reach the light yet," said {child_name} slowly. "It just isn't finished. Maybe I'm not finished either. Can't doesn't mean never. Can't only means not so far!"

Now lean close, for a secret. When {child_name} said that, {companion_name} went very quiet. Can you guess why the stone never answers them?

"I said I can't once, long ago," said {companion_name} at last. "I believed it. I never called again. The stone never got its chance."

{child_name} stood up. "Then we're both not-so-far. Watch me."

"{refrain}," said {companion_name} quietly, like a promise.

Honk. "Not so far!" Honk. "Not so far!" And then the call came out round and true, and the old stone rang it back: one clear goodnight, floating home over the water.

"Your turn," said {child_name}. "Say it."

"Not so far," said {companion_name}, in a rusty little voice. And they called — wobbly, old, brave — and the stone rang back for them, for the first time in their long life.

They listened until the last echo folded into the dark. The water went smooth. The stars leaned closer.

"Tomorrow," said {companion_name} sleepily, "teach me the double-call."

Not so far, thought {child_name}, smiling. And then, one day, all the way.

{refrain}.`,
  },
  {
    ordinal: 3,
    title: "The Runaway Seeds",
    concept: "A mistake is information, not failure",
    callback: "Hard is meant to feel hard (Level 1)",
    ageFloor: 4,
    summary: "The hero has one evening to plant a perfect ring of glow-seeds as a welcome-home surprise — and trips, scattering them in a crooked line. But when the moon rises, it is the runaway seeds that light up, not the tidy ring: the spill found the soft, rain-fed ground the plan never knew about. A mistake, the hero discovers, is not a ruin. It is information wearing a disguise.",
    teachingNote: "When mistakes are framed as useful information, a child stops hiding them and starts learning from them.",
    learningBeat: "part of how growing is done",
    ageVariants: {
      '3-4': {
        audioTemplate: `{companion_name} would be home at moonrise. So the {hero} made a surprise in {setting}: a ring of glow-seeds around the {object_motif}. Glow-seeds shine when the moon comes up.

The {hero} carried the full pouch, so carefully. Then — trip! Plip, plip, plip. Seeds spilled everywhere, in a long crooked line.

"Oh no," said the {hero}. "I ruined it."

The {hero} planted the rest in a neat ring anyway. One seed, two seeds, three. Then the moon peeked up.

Look closely in the dark. Which seeds are glowing? Not the tidy ring. The runaway ones!

The spilled seeds shone all down the crooked line. That ground was soft and rainy. Seeds love soft ground.

"My mistake was not a ruin," said the {hero}. "It was a clue! Getting it wrong is part of how growing is done."

So the {hero} moved every seed to the crooked line. It became a little river of light.

{companion_name} came home and gasped. "A glowing river! For me?"

"{refrain}," said the {hero}, the way {companion_name} always said it.

They sat in the seed-light. One runaway seed was still hiding. Tomorrow, they would find its glow.

{refrain}.`,
        scriptTemplate: `{companion_name} would be home at moonrise. So {child_name} the {hero} made a surprise in {setting}: a ring of glow-seeds around the {object_motif}. Glow-seeds shine when the moon comes up.

{child_name} carried the full pouch, so carefully. Then — trip! Plip, plip, plip. Seeds spilled everywhere, in a long crooked line.

"Oh no," said {child_name}. "I ruined it."

{child_name} planted the rest in a neat ring anyway. One seed, two seeds, three. Then the moon peeked up.

Look closely in the dark. Which seeds are glowing? Not the tidy ring. The runaway ones!

The spilled seeds shone all down the crooked line. That ground was soft and rainy. Seeds love soft ground.

"My mistake was not a ruin," said {child_name}. "It was a clue! Getting it wrong is part of how growing is done."

So {child_name} moved every seed to the crooked line. It became a little river of light.

{companion_name} came home and gasped. "A glowing river! For me?"

"{refrain}," said {child_name}, the way {companion_name} always said it.

They sat in the seed-light. One runaway seed was still hiding. Tomorrow, they would find its glow.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `{companion_name} had gone across {setting} for the day, home at moonrise. That gave the {hero} the whole evening for a secret: a perfect ring of glow-seeds around the {object_motif}, right beside the door. Glow-seeds sleep all day, but when moonlight touches them, they wake and shine.

Twenty seeds, counted and saved. Enough for one perfect circle.

Carrying the pouch to the door, the {hero} was extra careful — which is exactly when the trip happened. Plip-plip-plip. Seeds bounced and scattered in a long, messy, crooked line across the ground.

"No, no, no," whispered the {hero}, scooping up every seed in sight. Only fourteen came back. "I've ruined it before I even started."

Hard at the start was allowed — the wobble marks had said so. But this didn't feel hard. It felt spoiled.

The {hero} planted the fourteen in the neatest ring ever made, patted each one, and stepped back just as the moon slid up.

Now look closely, into the dark. Which seeds are waking? Not the tidy ring. Little green-gold lights are blinking on — all along the crooked spill.

Six runaway seeds were shining. The fourteen perfect ones sat dark.

The {hero} crept closer. The crooked line ran just where rain always trickled — soft, deep, happy ground. The neat ring sat on ground packed hard as a road. The spill had found the good soil.

"Oh," breathed the {hero}. "My mistake wasn't a ruin. It was information. The seeds were showing me where they wanted to go. Getting it wrong is part of how growing is done!"

So the {hero} dug up all fourteen dark seeds and planted them along the crooked line, one by one. And one by one they woke: a winding river of light, from the path right up to the door. Better than any ring.

"{refrain}," whispered the {hero} to the seeds — the way {companion_name} always said it.

{companion_name} came home at moonrise, stopped, and stared. "A river of light! For me? How did you know where they'd grow?"

"I got it wrong first," said the {hero}, very proud. "The wrong showed me the right."

They sat together in the glow while the moon climbed higher. The little lights blinked, slow and sleepy.

Somewhere out there, the twentieth seed was still hiding. Tomorrow they would hunt for one small stray glow.

{refrain}.`,
        scriptTemplate: `{companion_name} had gone across {setting} for the day, home at moonrise. That gave {child_name} the {hero} the whole evening for a secret: a perfect ring of glow-seeds around the {object_motif}, right beside the door. Glow-seeds sleep all day, but when moonlight touches them, they wake and shine.

Twenty seeds, counted and saved. Enough for one perfect circle.

Carrying the pouch to the door, {child_name} was extra careful — which is exactly when the trip happened. Plip-plip-plip. Seeds bounced and scattered in a long, messy, crooked line across the ground.

"No, no, no," whispered {child_name}, scooping up every seed in sight. Only fourteen came back. "I've ruined it before I even started."

Hard at the start was allowed — the wobble marks had said so. But this didn't feel hard. It felt spoiled.

{child_name} planted the fourteen in the neatest ring ever made, patted each one, and stepped back just as the moon slid up.

Now look closely, into the dark. Which seeds are waking? Not the tidy ring. Little green-gold lights are blinking on — all along the crooked spill.

Six runaway seeds were shining. The fourteen perfect ones sat dark.

{child_name} crept closer. The crooked line ran just where rain always trickled — soft, deep, happy ground. The neat ring sat on ground packed hard as a road. The spill had found the good soil.

"Oh," breathed {child_name}. "My mistake wasn't a ruin. It was information. The seeds were showing me where they wanted to go. Getting it wrong is part of how growing is done!"

So {child_name} dug up all fourteen dark seeds and planted them along the crooked line, one by one. And one by one they woke: a winding river of light, from the path right up to the door. Better than any ring.

"{refrain}," whispered {child_name} to the seeds — the way {companion_name} always said it.

{companion_name} came home at moonrise, stopped, and stared. "A river of light! For me? How did you know where they'd grow?"

"I got it wrong first," said {child_name}, very proud. "The wrong showed me the right."

They sat together in the glow while the moon climbed higher. The little lights blinked, slow and sleepy.

Somewhere out there, the twentieth seed was still hiding. Tomorrow they would hunt for one small stray glow.

{refrain}.`,
      },
      '7-8': {
        audioTemplate: `{companion_name} had gone across {setting} for the day and would not be home until moonrise. Which meant the {hero} had one whole evening for the plan — and the plan was beautiful. A perfect ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds sleep all day looking like plain grey pebbles, but the first touch of moonlight wakes them, and they shine green-gold for a hundred nights. A welcome-home ring of light. Perfectly round. Perfectly planned.

The {hero} had traded a week of errands for those seeds — twenty of them, counted twice. The seed-seller had said only one strange thing while pouring them into the pouch: "Plant them where they fall." Which was obviously nonsense, because seeds fall wherever you drop them, and a plan is a plan.

The {hero} carried the pouch toward the door slowly, carefully, importantly. And tripped.

Plip-plip-plip-plip. Twenty glow-seeds leapt from the pouch and bounced away merrily, scattering themselves in a long crooked ribbon across the ground, as if they had been waiting all day for the chance.

"No no no no," whispered the {hero}, crawling around in the dusk, patting the ground. Fourteen came back. Six were simply gone — vanished into the crooked dark. "I've ruined it. Before I even started, I ruined it."

There was a hot, prickly feeling behind the {hero}'s eyes. Hard was allowed, of course. The wobble marks had settled that ages ago. But this was not hard. This was spoiled, which felt like a different thing entirely — a thing you could not practise your way out of.

Still. Fourteen seeds could make a smaller perfect ring. The {hero} planted them in the neatest circle ever pressed into ground, evenly spaced to the width of a claw, and then fetched water for them — and even the water misbehaved. It ran straight off the ring's packed earth and trickled away sideways, following some crooked little path of its own, exactly the way the seeds had gone.

"Everything runs away from my plan," muttered the {hero}, and sat down to wait for the moon, braced for the evening to be a disappointment.

The moon came up slow and generous. And — look closely now, out into the dark. Something is waking. Little green-gold lights, blinking on one by one. But where? Not the tidy ring. The lights are coming from the crooked line.

The six runaway seeds were shining — every single lost one of them — strung out along their messy ribbon like lanterns on a street. The fourteen perfect seeds sat in their perfect circle, dark as buttons.

The {hero} crept over, nose to the ground, and looked properly. The crooked ribbon ran exactly where rain always trickled: low, soft, deep-watered ground, the best soil in the whole garden. The proud ring sat on earth packed hard as a road. And round seeds roll downhill — of course they do — down into the soft hollows where the water goes. The spill had not been bad luck. The spill had been a map.

"Plant them where they fall," said the {hero} slowly, and the seller's nonsense stopped being nonsense. "They fall where they roll, and they roll where the water goes. My mistake wasn't a ruin — it was information. It knew things the plan didn't." The {hero} was already digging. "Getting it wrong is part of how growing is done. It might be the biggest part."

Fourteen dark seeds came up out of the perfect circle and went down again, one by one, along the crooked shining line. And one by one they woke, green-gold, until a winding river of light ran from the path all the way to {companion_name}'s door. It was not round. It was not planned. It was better.

"{refrain}," whispered the {hero} to the seeds, the way {companion_name} always said it, and sat down to wait.

{companion_name} came home at moonrise and stopped so suddenly they nearly sat down. "A river," they said. "A river of light, to my own door. However did you know where glow-seeds grow? Gardeners twice my age can't tell that soil."

"I didn't know," said the {hero}, glowing a little too. "I dropped them. The drop knew. My mistake did the smartest part."

They sat together in the seed-light while the moon climbed, and the {hero} told the whole story — the trip, the runaway water, the map hiding inside the mess — and {companion_name} laughed in all the right places.

The lights blinked slower. The night leaned in, soft and warm.

Somewhere out in the dark, the twentieth seed had still not been found. It was out there right now, secretly glowing in some low soft hollow nobody had thought to look in.

Tomorrow, they would follow the crooked places and find it.

{refrain}.`,
        scriptTemplate: `{companion_name} had gone across {setting} for the day and would not be home until moonrise. Which meant {child_name} the {hero} had one whole evening for the plan — and the plan was beautiful. A perfect ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds sleep all day looking like plain grey pebbles, but the first touch of moonlight wakes them, and they shine green-gold for a hundred nights. A welcome-home ring of light. Perfectly round. Perfectly planned.

{child_name} had traded a week of errands for those seeds — twenty of them, counted twice. The seed-seller had said only one strange thing while pouring them into the pouch: "Plant them where they fall." Which was obviously nonsense, because seeds fall wherever you drop them, and a plan is a plan.

{child_name} carried the pouch toward the door slowly, carefully, importantly. And tripped.

Plip-plip-plip-plip. Twenty glow-seeds leapt from the pouch and bounced away merrily, scattering themselves in a long crooked ribbon across the ground, as if they had been waiting all day for the chance.

"No no no no," whispered {child_name}, crawling around in the dusk, patting the ground. Fourteen came back. Six were simply gone — vanished into the crooked dark. "I've ruined it. Before I even started, I ruined it."

There was a hot, prickly feeling behind {child_name}'s eyes. Hard was allowed, of course. The wobble marks had settled that ages ago. But this was not hard. This was spoiled, which felt like a different thing entirely — a thing you could not practise your way out of.

Still. Fourteen seeds could make a smaller perfect ring. {child_name} planted them in the neatest circle ever pressed into ground, evenly spaced, and then fetched water for them — and even the water misbehaved. It ran straight off the ring's packed earth and trickled away sideways, following some crooked little path of its own, exactly the way the seeds had gone.

"Everything runs away from my plan," muttered {child_name}, and sat down to wait for the moon, braced for the evening to be a disappointment.

The moon came up slow and generous. And — look closely now, out into the dark. Something is waking. Little green-gold lights, blinking on one by one. But where? Not the tidy ring. The lights are coming from the crooked line.

The six runaway seeds were shining — every single lost one of them — strung out along their messy ribbon like lanterns on a street. The fourteen perfect seeds sat in their perfect circle, dark as buttons.

{child_name} crept over, nose to the ground, and looked properly. The crooked ribbon ran exactly where rain always trickled: low, soft, deep-watered ground, the best soil in the whole garden. The proud ring sat on earth packed hard as a road. And round seeds roll downhill — of course they do — down into the soft hollows where the water goes. The spill had not been bad luck. The spill had been a map.

"Plant them where they fall," said {child_name} slowly, and the seller's nonsense stopped being nonsense. "They fall where they roll, and they roll where the water goes. My mistake wasn't a ruin — it was information. It knew things the plan didn't." {child_name} was already digging. "Getting it wrong is part of how growing is done. It might be the biggest part."

Fourteen dark seeds came up out of the perfect circle and went down again, one by one, along the crooked shining line. And one by one they woke, green-gold, until a winding river of light ran from the path all the way to {companion_name}'s door. It was not round. It was not planned. It was better.

"{refrain}," whispered {child_name} to the seeds, the way {companion_name} always said it, and sat down to wait.

{companion_name} came home at moonrise and stopped so suddenly they nearly sat down. "A river," they said. "A river of light, to my own door. However did you know where glow-seeds grow? Gardeners twice my age can't tell that soil."

"I didn't know," said {child_name}, glowing a little too. "I dropped them. The drop knew. My mistake did the smartest part."

They sat together in the seed-light while the moon climbed, and {child_name} told the whole story — the trip, the runaway water, the map hiding inside the mess — and {companion_name} laughed in all the right places.

The lights blinked slower. The night leaned in, soft and warm.

Somewhere out in the dark, the twentieth seed had still not been found. It was out there right now, secretly glowing in some low soft hollow nobody had thought to look in.

Tomorrow, they would follow the crooked places and find it.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `{companion_name} had gone across {setting} for the whole day and would not be back until moonrise, which meant the {hero} had approximately one evening to execute the finest surprise ever planned. And it was planned. It had been planned for a week, in secret, with diagrams.

A ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds spend their days disguised as plain grey pebbles — you would step over one without a glance — but the first touch of moonlight wakes them, and after that they shine green-gold every night for a hundred nights. Twenty seeds, earned with a full week of errands, counted twice into a soft pouch. Twenty seeds made a circle exactly the size of a welcome.

The seed-seller had said precisely one strange thing while pouring them out. "Plant them where they fall." The {hero} had nodded politely, the way you nod at people who speak in riddles, and privately filed it under nonsense. Seeds fall where you drop them. Nobody builds a masterpiece by dropping it.

The {hero} carried the pouch toward the door with the slow, ceremonial care of somebody transporting treasure. Which, of course, is exactly when the ground produced a root, or a ridge, or possibly nothing at all, and the {hero} tripped.

Plip-plip-plip-plip. Twenty glow-seeds soared out of the pouch with what sounded suspiciously like joy, bounced, scattered, and ran — a long crooked ribbon of tiny thumps disappearing into the dusk.

The {hero} spent the next while crawling in the dark, patting the ground like someone apologising to it. Fourteen seeds came back. Six were gone — properly gone, swallowed by the crooked shadows. "I ruined it," the {hero} said to the empty garden. "A week of planning, and I ruined it in four steps."

And here is the thing about that feeling. The {hero} knew hard was allowed — the wobble marks had settled that long ago. But this did not feel like hard, which you can lean into. It felt like spoiled, which just sits there. A mistake seemed like the opposite of a plan, the way a hole is the opposite of a wall.

Still: fourteen seeds make a smaller circle. The {hero} pressed them into the neatest ring in the history of rings, spaced to perfection, and fetched water — whereupon even the water joined the rebellion. It slid straight off the ring's packed earth and wandered away sideways in a thin silver thread, following its own crooked little path. The same path, more or less, that the seeds had taken. The {hero} was too tired to wonder about that, and sat down to wait for the moon, prepared for disappointment.

The moon rose slow and generous over {setting}. And — lean out into the dark for a moment. Something is waking up out there. Tiny green-gold lights, blinking on, one, then three, then six. But look where. Not the tidy ring. The lights are strung along the crooked line.

All six runaway seeds were shining. Every lost, unplanned, given-up-for-gone one of them, glowing in a messy ribbon like lanterns down a lane. The fourteen perfect seeds sat in their perfect circle, dark as buttons on a coat.

The {hero} went over on quiet feet and finally looked at the ground instead of the plan. The crooked ribbon lay exactly where rain always trickled — low, soft, deep-drinking soil, the richest in the garden. The ring sat proudly on earth packed hard as a road. And round seeds roll. Of course they roll. They roll downhill into the hollows, and the hollows are where the water goes, which is precisely where a seed most wants to live. The spill had not been clumsiness punishing a good plan. The spill had been twenty small experts sorting themselves.

"Plant them where they fall," the {hero} said slowly, and the riddle quietly stopped being a riddle. "Because where they fall is where they roll, and where they roll is where the water is. The mistake knew the garden better than my diagram did. It wasn't a ruin. It was information." The {hero} was already digging, laughing a little. "Getting it wrong is part of how growing is done. Maybe the load-bearing part."

Fourteen seeds came up out of the perfect dark circle and went back down along the crooked shining line. One by one they woke, green-gold, until a winding river of light ran from the path all the way to {companion_name}'s door. It was not symmetrical. It was not on the diagram. It was better than both.

"{refrain}," the {hero} whispered to the seeds — {companion_name}'s own saying, borrowed for the occasion — and sat down in the glow to wait.

{companion_name} arrived at moonrise and stopped so abruptly they nearly fell over their own feet. "A river of light. To my door." They looked closer, and their voice went odd. "Glow-seeds only take in perfect soil. Gardeners spend years learning to read it. How did you know?"

"I didn't," said the {hero}. "I dropped them. The drop knew. I just finally listened to it."

So the whole story came out — the diagrams, the trip, the mutinous watering can, the map hiding inside the mess — and {companion_name} laughed until they had to sit down, and then went quiet and happy, watching their doorway shine.

The lights blinked slower. The moon climbed. The garden settled.

Somewhere out in the dark, the twentieth seed still had not been found. It was glowing right now, in some soft crooked hollow nobody had checked, patient as buried treasure.

Tomorrow they would follow the low places and find out where the last mistake grew.

{refrain}.`,
        scriptTemplate: `{companion_name} had gone across {setting} for the whole day and would not be back until moonrise, which meant {child_name} the {hero} had approximately one evening to execute the finest surprise ever planned. And it was planned. It had been planned for a week, in secret, with diagrams.

A ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds spend their days disguised as plain grey pebbles — you would step over one without a glance — but the first touch of moonlight wakes them, and after that they shine green-gold every night for a hundred nights. Twenty seeds, earned with a full week of errands, counted twice into a soft pouch. Twenty seeds made a circle exactly the size of a welcome.

The seed-seller had said precisely one strange thing while pouring them out. "Plant them where they fall." {child_name} had nodded politely, the way you nod at people who speak in riddles, and privately filed it under nonsense. Seeds fall where you drop them. Nobody builds a masterpiece by dropping it.

{child_name} carried the pouch toward the door with the slow, ceremonial care of somebody transporting treasure. Which, of course, is exactly when the ground produced a root, or a ridge, or possibly nothing at all, and {child_name} tripped.

Plip-plip-plip-plip. Twenty glow-seeds soared out of the pouch with what sounded suspiciously like joy, bounced, scattered, and ran — a long crooked ribbon of tiny thumps disappearing into the dusk.

{child_name} spent the next while crawling in the dark, patting the ground like someone apologising to it. Fourteen seeds came back. Six were gone — properly gone, swallowed by the crooked shadows. "I ruined it," {child_name} said to the empty garden. "A week of planning, and I ruined it in four steps."

And here is the thing about that feeling. {child_name} knew hard was allowed — the wobble marks had settled that long ago. But this did not feel like hard, which you can lean into. It felt like spoiled, which just sits there. A mistake seemed like the opposite of a plan, the way a hole is the opposite of a wall.

Still: fourteen seeds make a smaller circle. {child_name} pressed them into the neatest ring in the history of rings, spaced to perfection, and fetched water — whereupon even the water joined the rebellion. It slid straight off the ring's packed earth and wandered away sideways in a thin silver thread, following its own crooked little path. The same path, more or less, that the seeds had taken. {child_name} was too tired to wonder about that, and sat down to wait for the moon, prepared for disappointment.

The moon rose slow and generous over {setting}. And — lean out into the dark for a moment. Something is waking up out there. Tiny green-gold lights, blinking on, one, then three, then six. But look where. Not the tidy ring. The lights are strung along the crooked line.

All six runaway seeds were shining. Every lost, unplanned, given-up-for-gone one of them, glowing in a messy ribbon like lanterns down a lane. The fourteen perfect seeds sat in their perfect circle, dark as buttons on a coat.

{child_name} went over on quiet feet and finally looked at the ground instead of the plan. The crooked ribbon lay exactly where rain always trickled — low, soft, deep-drinking soil, the richest in the garden. The ring sat proudly on earth packed hard as a road. And round seeds roll. Of course they roll. They roll downhill into the hollows, and the hollows are where the water goes, which is precisely where a seed most wants to live. The spill had not been clumsiness punishing a good plan. The spill had been twenty small experts sorting themselves.

"Plant them where they fall," {child_name} said slowly, and the riddle quietly stopped being a riddle. "Because where they fall is where they roll, and where they roll is where the water is. The mistake knew the garden better than my diagram did. It wasn't a ruin. It was information." {child_name} was already digging, laughing a little. "Getting it wrong is part of how growing is done. Maybe the load-bearing part."

Fourteen seeds came up out of the perfect dark circle and went back down along the crooked shining line. One by one they woke, green-gold, until a winding river of light ran from the path all the way to {companion_name}'s door. It was not symmetrical. It was not on the diagram. It was better than both.

"{refrain}," {child_name} whispered to the seeds — {companion_name}'s own saying, borrowed for the occasion — and sat down in the glow to wait.

{companion_name} arrived at moonrise and stopped so abruptly they nearly fell over their own feet. "A river of light. To my door." They looked closer, and their voice went odd. "Glow-seeds only take in perfect soil. Gardeners spend years learning to read it. How did you know?"

"I didn't," said {child_name}. "I dropped them. The drop knew. I just finally listened to it."

So the whole story came out — the diagrams, the trip, the mutinous watering can, the map hiding inside the mess — and {companion_name} laughed until they had to sit down, and then went quiet and happy, watching their doorway shine.

The lights blinked slower. The moon climbed. The garden settled.

Somewhere out in the dark, the twentieth seed still had not been found. It was glowing right now, in some soft crooked hollow nobody had checked, patient as buried treasure.

Tomorrow they would follow the low places and find out where the last mistake grew.

{refrain}.`,
      },
    },
    audioTemplate: `{companion_name} had gone across {setting} for the day, home at moonrise. That gave the {hero} the whole evening for a secret: a perfect ring of glow-seeds around the {object_motif}, right beside the door. Glow-seeds sleep all day, but when moonlight touches them, they wake and shine.

Twenty seeds, counted and saved. Enough for one perfect circle.

Carrying the pouch to the door, the {hero} was extra careful — which is exactly when the trip happened. Plip-plip-plip. Seeds bounced and scattered in a long, messy, crooked line across the ground.

"No, no, no," whispered the {hero}, scooping up every seed in sight. Only fourteen came back. "I've ruined it before I even started."

Hard at the start was allowed — the wobble marks had said so. But this didn't feel hard. It felt spoiled.

The {hero} planted the fourteen in the neatest ring ever made, patted each one, and stepped back just as the moon slid up.

Now look closely, into the dark. Which seeds are waking? Not the tidy ring. Little green-gold lights are blinking on — all along the crooked spill.

Six runaway seeds were shining. The fourteen perfect ones sat dark.

The {hero} crept closer. The crooked line ran just where rain always trickled — soft, deep, happy ground. The neat ring sat on ground packed hard as a road. The spill had found the good soil.

"Oh," breathed the {hero}. "My mistake wasn't a ruin. It was information. The seeds were showing me where they wanted to go. Getting it wrong is part of how growing is done!"

So the {hero} dug up all fourteen dark seeds and planted them along the crooked line, one by one. And one by one they woke: a winding river of light, from the path right up to the door. Better than any ring.

"{refrain}," whispered the {hero} to the seeds — the way {companion_name} always said it.

{companion_name} came home at moonrise, stopped, and stared. "A river of light! For me? How did you know where they'd grow?"

"I got it wrong first," said the {hero}, very proud. "The wrong showed me the right."

They sat together in the glow while the moon climbed higher. The little lights blinked, slow and sleepy.

Somewhere out there, the twentieth seed was still hiding. Tomorrow they would hunt for one small stray glow.

{refrain}.`,
    scriptTemplate: `{companion_name} had gone across {setting} for the day, home at moonrise. That gave {child_name} the {hero} the whole evening for a secret: a perfect ring of glow-seeds around the {object_motif}, right beside the door. Glow-seeds sleep all day, but when moonlight touches them, they wake and shine.

Twenty seeds, counted and saved. Enough for one perfect circle.

Carrying the pouch to the door, {child_name} was extra careful — which is exactly when the trip happened. Plip-plip-plip. Seeds bounced and scattered in a long, messy, crooked line across the ground.

"No, no, no," whispered {child_name}, scooping up every seed in sight. Only fourteen came back. "I've ruined it before I even started."

Hard at the start was allowed — the wobble marks had said so. But this didn't feel hard. It felt spoiled.

{child_name} planted the fourteen in the neatest ring ever made, patted each one, and stepped back just as the moon slid up.

Now look closely, into the dark. Which seeds are waking? Not the tidy ring. Little green-gold lights are blinking on — all along the crooked spill.

Six runaway seeds were shining. The fourteen perfect ones sat dark.

{child_name} crept closer. The crooked line ran just where rain always trickled — soft, deep, happy ground. The neat ring sat on ground packed hard as a road. The spill had found the good soil.

"Oh," breathed {child_name}. "My mistake wasn't a ruin. It was information. The seeds were showing me where they wanted to go. Getting it wrong is part of how growing is done!"

So {child_name} dug up all fourteen dark seeds and planted them along the crooked line, one by one. And one by one they woke: a winding river of light, from the path right up to the door. Better than any ring.

"{refrain}," whispered {child_name} to the seeds — the way {companion_name} always said it.

{companion_name} came home at moonrise, stopped, and stared. "A river of light! For me? How did you know where they'd grow?"

"I got it wrong first," said {child_name}, very proud. "The wrong showed me the right."

They sat together in the glow while the moon climbed higher. The little lights blinked, slow and sleepy.

Somewhere out there, the twentieth seed was still hiding. Tomorrow they would hunt for one small stray glow.

{refrain}.`,
  },
  {
    ordinal: 4,
    title: "Try a Different Way",
    concept: "When one way does not work, try another",
    callback: "The power of yet (Level 2)",
    ageFloor: 5,
    summary: "The hero keeps trying the same thing the same way and keeps getting stuck. Their companion helps them see that persistence is not doing the same thing harder — it is being willing to try a different way. It builds on Level 2: \"not yet\" invites a new path.",
    teachingNote: "Resilience is flexible, not stubborn — the skill is changing your approach, not just repeating the same effort.",
    learningBeat: "A different way",
    ageVariants: {
      '3-4': {
        audioTemplate: `Deep in {setting}, the {hero} found a little round door. Behind it, something wonderful was waiting. But the little door was stuck tight, and it would not open.

So the {hero} pushed. Push, push, push! The door did not open.

The {hero} pushed again, the very same way, in the very same spot. Push, push, push! The door stayed shut.

Again and again the {hero} pushed, harder and harder. The door did not move, not even a little. The {hero} huffed and puffed and felt cross.

Just then, {companion_name} came along. "You are working so hard," said {companion_name}. "But you keep pushing the same way, over and over. Maybe the door does not need a bigger push. Maybe it needs a different way."

"A different way?" said the {hero}.

"Yes," said {companion_name} softly. "When one way does not work, we can try another one."

The {hero} looked at the door again. Right beside it hung a shiny {object_motif}, swinging gently. The {hero} had been pushing so hard that they never even saw it.

"What if I do not push at all?" said the {hero}. "What if I pull?"

The {hero} took a slow, deep breath. Then, instead of pushing, the {hero} pulled. Cre-e-eak! The little round door swung wide open!

Inside was a warm room full of tiny glowing stars. The {hero} gasped and clapped their hands. Pushing harder had never, ever worked. But trying a different way opened the door in one try.

"You did it!" cheered {companion_name}. "You did not give up. You just found a new way to try."

"Will it always work the very first time?" asked the {hero}.

"Not always," said {companion_name}. "But there is always another way to try. That is what makes you brave."

The {hero} held the shiny {object_motif} close and smiled a big sleepy smile. Now the {hero} knew a wonderful little secret. Being stuck is not the end of the story. It only means it is time to try a different way.

{refrain}.`,
        scriptTemplate: `Deep in {setting}, {child_name} found a little round door. Behind it, something wonderful was waiting. But the little door was stuck tight, and it would not open.

So {child_name} pushed. Push, push, push! The door did not open.

{child_name} pushed again, the very same way, in the very same spot. Push, push, push! The door stayed shut.

Again and again {child_name} pushed, harder and harder. The door did not move, not even a little. {child_name} huffed and puffed and felt cross.

Just then, {companion_name} came along. "You are working so hard," said {companion_name}. "But you keep pushing the same way, over and over. Maybe the door does not need a bigger push. Maybe it needs a different way."

"A different way?" said {child_name}.

"Yes," said {companion_name} softly. "When one way does not work, we can try another one."

{child_name} looked at the door again. Right beside it hung a shiny {object_motif}, swinging gently. {child_name} had been pushing so hard that they never even saw it.

"What if I do not push at all?" said {child_name}. "What if I pull?"

{child_name} took a slow, deep breath. Then, instead of pushing, {child_name} pulled. Cre-e-eak! The little round door swung wide open!

Inside was a warm room full of tiny glowing stars. {child_name} gasped and clapped their hands. Pushing harder had never, ever worked. But trying a different way opened the door in one try.

"You did it!" cheered {companion_name}. "You did not give up. You just found a new way to try."

"Will it always work the very first time?" asked {child_name}.

"Not always," said {companion_name}. "But there is always another way to try. That is what makes you brave."

{child_name} held the shiny {object_motif} close and smiled a big sleepy smile. Now {child_name} knew a wonderful little secret. Being stuck is not the end of the story. It only means it is time to try a different way.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `High in {setting}, the {hero} discovered an old round door set into the wall. Something wonderful glowed softly behind it, just out of reach. The {hero} wanted to see it more than anything. But the door was shut tight, and it would not budge.

So the {hero} pushed. Push, push, push! Nothing happened.

The {hero} planted both feet, leaned in, and pushed again, the very same way, in the very same spot. Push, push, push! The door did not move.

"I just need to try harder," the {hero} said. So they did. Again and again and again, the {hero} shoved at the same place with all their might. Their arms grew tired. Their face grew hot. And still the door stayed exactly as shut as before.

The {hero} sat down with a grumpy thump. "I am trying so hard," they said, "but nothing is working."

Just then {companion_name} came near. "I have been watching you," said {companion_name} gently. "You are very brave, and you are working very, very hard. But do you see what you keep doing? You push the same way, then you push the same way again, and then the same way once more."

"That is what trying hard means," said the {hero}.

"It is one kind of trying," said {companion_name} with a kind smile. "But pushing harder on the same spot is not the only way to be strong. Sometimes real persistence is not doing the same thing louder. Sometimes it is being brave enough to try a different way."

The {hero} thought about that. It felt strange. They had been so sure that pushing was right. "A different way," the {hero} whispered.

"Look around," said {companion_name}. "What have you not tried yet?"

The {hero} stood up and really looked, for the first time. Beside the door hung a shiny {object_motif}, turning slowly on a little hook. Below the door was a smooth handle they had never touched. They had been pushing so hard, and staring so hard at one spot, that they had missed everything else.

"Maybe it does not push," said the {hero} slowly. "Maybe it pulls. Or maybe it slides."

The {hero} took a deep breath and, instead of pushing, gave the handle a gentle pull. The door did not open. But it wobbled! Something moved!

"It moved!" cried the {hero}. "That is more than pushing ever did!"

"You are getting warmer," laughed {companion_name}. "Keep trying new ways."

So the {hero} pulled a little to the side, and with a soft whoosh, the round door slid open like a curtain. Warm golden light spilled out. Inside was a room full of floating, glowing stars, gentle as fireflies.

The {hero} laughed out loud. All that pushing had never worked, not even once. But one calm, clever, different way had opened the door at last.

"You did it," said {companion_name} proudly. "And do you know the best part? You did not give up. You just stopped repeating the one way that was stuck, and you tried a different way instead."

The {hero} picked up the shiny {object_motif} and held it close, warm against their heart. They would remember this. When something will not work no matter how hard you push, that is not the moment to quit. It is the moment to stop, look around, and try a different way.

And with the little stars glowing softly around them, the {hero} smiled a sleepy, happy smile.

{refrain}.`,
        scriptTemplate: `High in {setting}, {child_name} discovered an old round door set into the wall. Something wonderful glowed softly behind it, just out of reach. {child_name} wanted to see it more than anything. But the door was shut tight, and it would not budge.

So {child_name} pushed. Push, push, push! Nothing happened.

{child_name} planted both feet, leaned in, and pushed again, the very same way, in the very same spot. Push, push, push! The door did not move.

"I just need to try harder," {child_name} said. So they did. Again and again and again, {child_name} shoved at the same place with all their might. Their arms grew tired. Their face grew hot. And still the door stayed exactly as shut as before.

{child_name} sat down with a grumpy thump. "I am trying so hard," they said, "but nothing is working."

Just then {companion_name} came near. "I have been watching you," said {companion_name} gently. "You are very brave, and you are working very, very hard. But do you see what you keep doing? You push the same way, then you push the same way again, and then the same way once more."

"That is what trying hard means," said {child_name}.

"It is one kind of trying," said {companion_name} with a kind smile. "But pushing harder on the same spot is not the only way to be strong. Sometimes real persistence is not doing the same thing louder. Sometimes it is being brave enough to try a different way."

{child_name} thought about that. It felt strange. They had been so sure that pushing was right. "A different way," {child_name} whispered.

"Look around," said {companion_name}. "What have you not tried yet?"

{child_name} stood up and really looked, for the first time. Beside the door hung a shiny {object_motif}, turning slowly on a little hook. Below the door was a smooth handle they had never touched. They had been pushing so hard, and staring so hard at one spot, that they had missed everything else.

"Maybe it does not push," said {child_name} slowly. "Maybe it pulls. Or maybe it slides."

{child_name} took a deep breath and, instead of pushing, gave the handle a gentle pull. The door did not open. But it wobbled! Something moved!

"It moved!" cried {child_name}. "That is more than pushing ever did!"

"You are getting warmer," laughed {companion_name}. "Keep trying new ways."

So {child_name} pulled a little to the side, and with a soft whoosh, the round door slid open like a curtain. Warm golden light spilled out. Inside was a room full of floating, glowing stars, gentle as fireflies.

{child_name} laughed out loud. All that pushing had never worked, not even once. But one calm, clever, different way had opened the door at last.

"You did it," said {companion_name} proudly. "And do you know the best part? You did not give up. You just stopped repeating the one way that was stuck, and you tried a different way instead."

{child_name} picked up the shiny {object_motif} and held it close, warm against their heart. They would remember this. When something will not work no matter how hard you push, that is not the moment to quit. It is the moment to stop, look around, and try a different way.

And with the little stars glowing softly around them, {child_name} smiled a sleepy, happy smile.

{refrain}.`,
      },
      '7-8': {
        audioTemplate: `At the far edge of {setting}, where the light turned soft and blue, the {hero} found a great round door built into an old stone wall. Behind it, something wonderful was glowing. The {hero} could see the warm light leaking around the edges. Whatever it was, they wanted to reach it more than anything in the world. There was only one problem. The door was shut, and it would not open.

So the {hero} did the obvious thing. They pushed.

Push, push, push. The door did not move.

The {hero} set their feet, squared their shoulders, and pushed again, exactly the same way, in exactly the same spot. Push, push, push. Nothing. Not a creak, not a wobble, not an inch.

"I just have to try harder," the {hero} told themselves. And they believed it. So they tried harder. They threw their whole weight against the same place, over and over, grunting and straining until their arms shook and their cheeks burned. Push, push, push. Push, push, push.

The door stayed exactly, perfectly, stubbornly shut.

At last the {hero} slumped against the cold stone, out of breath. "I do not understand," they said. "I am trying as hard as I possibly can. Why will it not open?"

That was when {companion_name} arrived, quiet as a drifting leaf. "I have been watching you for a while," said {companion_name}. "You have not given up once. That is a wonderful thing."

"But it is not working," the {hero} said, and their voice wobbled. "I am doing everything right. I am pushing so hard."

"You are," agreed {companion_name} gently. "But let me ask you something. How many times have you pushed?"

"Hundreds," said the {hero}.

"And each time," said {companion_name}, "did you push the same way, in the same spot?"

The {hero} opened their mouth to argue, and then stopped. Because it was true. Every single try had been the same try, just louder. "Yes," they admitted, and their face went warm, this time not from pushing but from something like embarrassment. "I suppose it was."

"Here is a secret that took me a long time to learn," said {companion_name}. "Trying hard is good. But doing the exact same thing again and again, only harder, is not really trying hard. It is being stuck in one idea. Real persistence, the strong kind, is being brave enough to try a different way."

The {hero} frowned. Part of them did not want to hear it. Pushing had felt right. Pushing had felt like being determined. Changing now felt almost like admitting the first way had been wrong. "But I was so sure," they said quietly.

"Being sure is not the same as being right," said {companion_name} kindly. "And changing your plan is not giving up. It is getting smarter. Look around you. What have you not tried?"

Slowly, the {hero} did something they had not done the whole time. They stopped pushing, and they looked. Really looked. Beside the door hung a shiny {object_motif}, swaying softly on a hook. Down low, near the ground, sat a smooth iron handle, half in shadow. There were grooves along one edge of the door, like the tracks of a sliding gate. All this time they had been staring at one single spot, and they had missed everything else.

"Maybe," the {hero} said slowly, "it was never a pushing door at all."

They crouched down and gave the handle a careful pull. The door did not open, but it shifted, just a little, with a soft grinding sound. Something that had never happened before.

"It moved!" the {hero} gasped. "Pulling did more in one try than pushing did in a hundred!"

"Keep going," laughed {companion_name}. "You have found the trail. Now follow it."

So the {hero} tried the new idea properly. They braced their feet, gripped the handle, and pulled the great door sideways along its hidden grooves. With a long, deep whoosh, it rolled open like a curtain of stone.

Golden light poured out over them. Inside was a round room filled with slow-floating stars, drifting and glowing like a whole sky brought indoors. It was even more wonderful than the {hero} had imagined.

For a moment they just stood there, breathing it in. Then they laughed, a big, surprised, happy laugh. "All that pushing," they said, shaking their head. "And the answer was a different way the whole time."

"You found it yourself," said {companion_name} proudly. "I only reminded you to look."

The {hero} reached up and lifted the shiny {object_motif} from its hook, holding it close. They wanted to remember this feeling. Not the sore arms, not the frustration, but the moment they stopped repeating themselves and dared to try something new.

"Next time I get stuck," the {hero} said softly, "I will not just push harder. I will stop, and look, and try a different way."

And there, wrapped in warm and floating starlight, the {hero} smiled a slow, sleepy, contented smile.

{refrain}.`,
        scriptTemplate: `At the far edge of {setting}, where the light turned soft and blue, {child_name} found a great round door built into an old stone wall. Behind it, something wonderful was glowing. {child_name} could see the warm light leaking around the edges. Whatever it was, they wanted to reach it more than anything in the world. There was only one problem. The door was shut, and it would not open.

So {child_name} did the obvious thing. They pushed.

Push, push, push. The door did not move.

{child_name} set their feet, squared their shoulders, and pushed again, exactly the same way, in exactly the same spot. Push, push, push. Nothing. Not a creak, not a wobble, not an inch.

"I just have to try harder," {child_name} told themselves. And they believed it. So they tried harder. They threw their whole weight against the same place, over and over, grunting and straining until their arms shook and their cheeks burned. Push, push, push. Push, push, push.

The door stayed exactly, perfectly, stubbornly shut.

At last {child_name} slumped against the cold stone, out of breath. "I do not understand," they said. "I am trying as hard as I possibly can. Why will it not open?"

That was when {companion_name} arrived, quiet as a drifting leaf. "I have been watching you for a while," said {companion_name}. "You have not given up once. That is a wonderful thing."

"But it is not working," {child_name} said, and their voice wobbled. "I am doing everything right. I am pushing so hard."

"You are," agreed {companion_name} gently. "But let me ask you something. How many times have you pushed?"

"Hundreds," said {child_name}.

"And each time," said {companion_name}, "did you push the same way, in the same spot?"

{child_name} opened their mouth to argue, and then stopped. Because it was true. Every single try had been the same try, just louder. "Yes," they admitted, and their face went warm, this time not from pushing but from something like embarrassment. "I suppose it was."

"Here is a secret that took me a long time to learn," said {companion_name}. "Trying hard is good. But doing the exact same thing again and again, only harder, is not really trying hard. It is being stuck in one idea. Real persistence, the strong kind, is being brave enough to try a different way."

{child_name} frowned. Part of them did not want to hear it. Pushing had felt right. Pushing had felt like being determined. Changing now felt almost like admitting the first way had been wrong. "But I was so sure," they said quietly.

"Being sure is not the same as being right," said {companion_name} kindly. "And changing your plan is not giving up. It is getting smarter. Look around you. What have you not tried?"

Slowly, {child_name} did something they had not done the whole time. They stopped pushing, and they looked. Really looked. Beside the door hung a shiny {object_motif}, swaying softly on a hook. Down low, near the ground, sat a smooth iron handle, half in shadow. There were grooves along one edge of the door, like the tracks of a sliding gate. All this time they had been staring at one single spot, and they had missed everything else.

"Maybe," {child_name} said slowly, "it was never a pushing door at all."

They crouched down and gave the handle a careful pull. The door did not open, but it shifted, just a little, with a soft grinding sound. Something that had never happened before.

"It moved!" {child_name} gasped. "Pulling did more in one try than pushing did in a hundred!"

"Keep going," laughed {companion_name}. "You have found the trail. Now follow it."

So {child_name} tried the new idea properly. They braced their feet, gripped the handle, and pulled the great door sideways along its hidden grooves. With a long, deep whoosh, it rolled open like a curtain of stone.

Golden light poured out over them. Inside was a round room filled with slow-floating stars, drifting and glowing like a whole sky brought indoors. It was even more wonderful than {child_name} had imagined.

For a moment they just stood there, breathing it in. Then they laughed, a big, surprised, happy laugh. "All that pushing," they said, shaking their head. "And the answer was a different way the whole time."

"You found it yourself," said {companion_name} proudly. "I only reminded you to look."

{child_name} reached up and lifted the shiny {object_motif} from its hook, holding it close. They wanted to remember this feeling. Not the sore arms, not the frustration, but the moment they stopped repeating themselves and dared to try something new.

"Next time I get stuck," {child_name} said softly, "I will not just push harder. I will stop, and look, and try a different way."

And there, wrapped in warm and floating starlight, {child_name} smiled a slow, sleepy, contented smile.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `On the last evening of a long journey, at the quiet edge of {setting}, the {hero} came to a wall of ancient stone, and set into that wall was a great round door.

Behind it, something glowed. Thin lines of warm light traced the door's outline and pooled on the ground at the {hero}'s feet, and though they could not yet see what made that light, they knew, the way you sometimes simply know a thing, that it was what they had come all this way to find. After the long road, after the cold nights and the wrong turnings, only this door stood between the {hero} and the end of the quest. There was just one difficulty. It was shut, and it did not want to open.

So the {hero} did what seemed only sensible. They pressed both hands flat against the stone and pushed.

Nothing.

They braced a shoulder against the door, dug their heels into the ground, and drove forward with everything they had. The stone was cold and unmoving as a mountain. They pushed until their breath came ragged, then stepped back, shook out their arms, and pushed again, the same shoulder, the same spot, the same way, because surely, surely, the door was about to give. It always felt one push away.

It was not one push away. It was not ten pushes away, or fifty. The {hero} lost count somewhere in the dark, throwing themselves at the identical patch of stone over and over, each attempt an exact copy of the last, only angrier. "Come. On," they gritted between shoves. "I am. Not. Stopping."

And they were proud of that, in a fierce and stubborn way. They had been taught that quitters give up and winners keep going, and so keeping going, pushing and pushing at the same place until their muscles screamed, felt like the very definition of being strong. To stop pushing would be to lose. To try something else would almost be to admit the pushing had been foolish from the start, and the {hero} could not stand that thought. So they pushed harder, and the door mocked them with its stillness.

At last their legs gave out and they sank down against the base of the door, chest heaving, eyes stinging. "I am doing everything right," they whispered, and hated how close the words came to tears. "I am trying harder than I have ever tried at anything. Why is that not enough?"

"Because effort and repetition are not the same thing."

The {hero} turned. {companion_name} had come quietly out of the blue dark and settled nearby, watching with steady, unhurried eyes.

"I have been here a while," said {companion_name}. "Long enough to count. Do you know how many times you have pushed that door?"

"A lot," said the {hero}, bristling. "I have not given up, if that is what you mean."

"No," {companion_name} agreed. "You have not given up. But answer honestly. How many different things have you tried?"

The {hero} started to say a hundred, a thousand, and the number died in their throat. Because it was not a thousand things. It was one thing, done a thousand times. The same shoulder. The same spot. The same push. Heat crawled up the back of their neck, and it was not the heat of effort. It was the sharp, uncomfortable heat of seeing yourself clearly for the first time in a while.

"Once," they admitted at last, very quietly. "I have tried one thing. Just louder each time."

"That is the trap," said {companion_name}, and there was no unkindness in it. "It is the trap almost everyone falls into, because it wears the costume of courage. Pushing harder feels brave. Refusing to change feels loyal, somehow, loyal to the plan, to the version of you that was so certain. But listen carefully, because this is the part that matters. Real persistence is not doing the same thing harder and harder until it works or you break. Real persistence is refusing to quit on the goal while being completely willing to change the way you reach it. The strong move, the genuinely stubborn, unbeatable move, is to be brave enough to try a different way."

The {hero} sat with that, and it was not comfortable. A small, proud voice inside them wanted to argue, wanted to insist that one more push would have done it, that changing course now was a kind of surrender. But underneath the pride was something quieter and more honest, and that quieter part knew {companion_name} was right. Changing your approach was not the same as giving up. It only felt that way because it asked you to set down your certainty, and setting down your certainty was hard.

"I did not want to stop pushing," the {hero} confessed, "because stopping felt like saying I was wrong."

"You were not wrong to try," said {companion_name}. "You were only wrong to try the same thing forever. There is no shame in that. There is only the next idea. So look. Not at the spot you have been staring at all night. At everything else."

And so the {hero} did the hardest, simplest thing of all. They stopped. They stepped back. And, for the first time, they truly looked.

There was so much they had never seen. Beside the door, a shiny {object_motif} hung swaying on an iron hook, catching the light they had been ignoring. Low against the ground ran a smooth handle, worn pale by other hands in other years. Along one side of the door lay a set of deep grooves cut into the floor, tracks, unmistakably, the kind a thing slides along, not the kind a thing swings upon. The whole time, they had been trying to push open a door that had never, not once, been built to be pushed.

The {hero} let out a breath that was half a laugh and half a groan. "It slides," they murmured. "It was always going to slide."

They crouched, curled their fingers around the cold handle, and pulled, sideways, along the grooves, the exact opposite of everything they had done all night. For a moment nothing happened, and their heart clenched. Then, with a low grinding rumble that they felt in their chest more than heard, the great stone door gave up a single, glorious inch.

"It moved," the {hero} breathed. "One try of a different way did more than a thousand tries of the old one."

"Then keep going," said {companion_name}, and there was pride in it now, warm and bright. "You have found the thread. Follow it home."

The {hero} set their feet, gripped the handle, and hauled. The door rolled along its ancient tracks, slow at first, then smooth, then easy, the way things always seem easy once you have finally found their logic. With a long sigh of stone, it rolled fully open.

Light spilled out and washed over them, gold and gentle and endless. Inside was a great round chamber, and drifting through it were stars, hundreds of them, slow and glowing and untethered, a whole night sky brought quietly indoors. It was more beautiful than anything the {hero} had let themselves imagine on the long road here, and they had almost missed it, not for lack of effort, but for too much of the wrong kind.

For a while they simply stood in the doorway and let the starlight move over their face.

"I nearly gave up," the {hero} said at last, "not on the door, on the whole thing. Because I thought trying harder was my only tool."

"Now you have a better one," said {companion_name}, floating in beside them. "When you meet a wall, you will remember. You do not have to be someone who never gets stuck. You only have to be someone who, when they get stuck, is willing to try a different way."

The {hero} reached up and lifted the shiny {object_motif} from its hook, closing their fingers around it, keeping it, not as a prize, but as a promise to their future self. They would forget this lesson, probably, the way people do. And this small, bright thing would be here to remind them.

Then, with the freed stars turning slowly around them and the long journey finally, gently, at its end, the {hero} let out a deep and easy breath, and smiled.

{refrain}.`,
        scriptTemplate: `On the last evening of a long journey, at the quiet edge of {setting}, {child_name} came to a wall of ancient stone, and set into that wall was a great round door.

Behind it, something glowed. Thin lines of warm light traced the door's outline and pooled on the ground at {child_name}'s feet, and though they could not yet see what made that light, they knew, the way you sometimes simply know a thing, that it was what they had come all this way to find. After the long road, after the cold nights and the wrong turnings, only this door stood between {child_name} and the end of the quest. There was just one difficulty. It was shut, and it did not want to open.

So {child_name} did what seemed only sensible. They pressed both hands flat against the stone and pushed.

Nothing.

They braced a shoulder against the door, dug their heels into the ground, and drove forward with everything they had. The stone was cold and unmoving as a mountain. They pushed until their breath came ragged, then stepped back, shook out their arms, and pushed again, the same shoulder, the same spot, the same way, because surely, surely, the door was about to give. It always felt one push away.

It was not one push away. It was not ten pushes away, or fifty. {child_name} lost count somewhere in the dark, throwing themselves at the identical patch of stone over and over, each attempt an exact copy of the last, only angrier. "Come. On," they gritted between shoves. "I am. Not. Stopping."

And they were proud of that, in a fierce and stubborn way. They had been taught that quitters give up and winners keep going, and so keeping going, pushing and pushing at the same place until their muscles screamed, felt like the very definition of being strong. To stop pushing would be to lose. To try something else would almost be to admit the pushing had been foolish from the start, and {child_name} could not stand that thought. So they pushed harder, and the door mocked them with its stillness.

At last their legs gave out and they sank down against the base of the door, chest heaving, eyes stinging. "I am doing everything right," they whispered, and hated how close the words came to tears. "I am trying harder than I have ever tried at anything. Why is that not enough?"

"Because effort and repetition are not the same thing."

{child_name} turned. {companion_name} had come quietly out of the blue dark and settled nearby, watching with steady, unhurried eyes.

"I have been here a while," said {companion_name}. "Long enough to count. Do you know how many times you have pushed that door?"

"A lot," said {child_name}, bristling. "I have not given up, if that is what you mean."

"No," {companion_name} agreed. "You have not given up. But answer honestly. How many different things have you tried?"

{child_name} started to say a hundred, a thousand, and the number died in their throat. Because it was not a thousand things. It was one thing, done a thousand times. The same shoulder. The same spot. The same push. Heat crawled up the back of their neck, and it was not the heat of effort. It was the sharp, uncomfortable heat of seeing yourself clearly for the first time in a while.

"Once," they admitted at last, very quietly. "I have tried one thing. Just louder each time."

"That is the trap," said {companion_name}, and there was no unkindness in it. "It is the trap almost everyone falls into, because it wears the costume of courage. Pushing harder feels brave. Refusing to change feels loyal, somehow, loyal to the plan, to the version of you that was so certain. But listen carefully, because this is the part that matters. Real persistence is not doing the same thing harder and harder until it works or you break. Real persistence is refusing to quit on the goal while being completely willing to change the way you reach it. The strong move, the genuinely stubborn, unbeatable move, is to be brave enough to try a different way."

{child_name} sat with that, and it was not comfortable. A small, proud voice inside them wanted to argue, wanted to insist that one more push would have done it, that changing course now was a kind of surrender. But underneath the pride was something quieter and more honest, and that quieter part knew {companion_name} was right. Changing your approach was not the same as giving up. It only felt that way because it asked you to set down your certainty, and setting down your certainty was hard.

"I did not want to stop pushing," {child_name} confessed, "because stopping felt like saying I was wrong."

"You were not wrong to try," said {companion_name}. "You were only wrong to try the same thing forever. There is no shame in that. There is only the next idea. So look. Not at the spot you have been staring at all night. At everything else."

And so {child_name} did the hardest, simplest thing of all. They stopped. They stepped back. And, for the first time, they truly looked.

There was so much they had never seen. Beside the door, a shiny {object_motif} hung swaying on an iron hook, catching the light they had been ignoring. Low against the ground ran a smooth handle, worn pale by other hands in other years. Along one side of the door lay a set of deep grooves cut into the floor, tracks, unmistakably, the kind a thing slides along, not the kind a thing swings upon. The whole time, they had been trying to push open a door that had never, not once, been built to be pushed.

{child_name} let out a breath that was half a laugh and half a groan. "It slides," they murmured. "It was always going to slide."

They crouched, curled their fingers around the cold handle, and pulled, sideways, along the grooves, the exact opposite of everything they had done all night. For a moment nothing happened, and their heart clenched. Then, with a low grinding rumble that they felt in their chest more than heard, the great stone door gave up a single, glorious inch.

"It moved," {child_name} breathed. "One try of a different way did more than a thousand tries of the old one."

"Then keep going," said {companion_name}, and there was pride in it now, warm and bright. "You have found the thread. Follow it home."

{child_name} set their feet, gripped the handle, and hauled. The door rolled along its ancient tracks, slow at first, then smooth, then easy, the way things always seem easy once you have finally found their logic. With a long sigh of stone, it rolled fully open.

Light spilled out and washed over them, gold and gentle and endless. Inside was a great round chamber, and drifting through it were stars, hundreds of them, slow and glowing and untethered, a whole night sky brought quietly indoors. It was more beautiful than anything {child_name} had let themselves imagine on the long road here, and they had almost missed it, not for lack of effort, but for too much of the wrong kind.

For a while they simply stood in the doorway and let the starlight move over their face.

"I nearly gave up," {child_name} said at last, "not on the door, on the whole thing. Because I thought trying harder was my only tool."

"Now you have a better one," said {companion_name}, floating in beside them. "When you meet a wall, you will remember. You do not have to be someone who never gets stuck. You only have to be someone who, when they get stuck, is willing to try a different way."

{child_name} reached up and lifted the shiny {object_motif} from its hook, closing their fingers around it, keeping it, not as a prize, but as a promise to their future self. They would forget this lesson, probably, the way people do. And this small, bright thing would be here to remind them.

Then, with the freed stars turning slowly around them and the long journey finally, gently, at its end, {child_name} let out a deep and easy breath, and smiled.

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
    ordinal: 5,
    title: "Bouncing Back",
    concept: "Falling down and choosing to get back up",
    callback: "Try a different way (Level 4)",
    ageFloor: 5,
    summary: "The capstone: the hero has a real setback and feels like quitting for good. Drawing on everything — hard is allowed, the power of yet, mistakes teach, try a different way — they choose to get back up. The story gathers the whole path into one brave, gentle moment.",
    teachingNote: "Bouncing back is not never falling — it is the quiet decision to rise once more, and every earlier skill makes that decision possible.",
    learningBeat: "Rising once more",
    ageVariants: {
      '3-4': {
        audioTemplate: `Tonight, the {hero} wanted to do the biggest thing yet.

In {setting}, there was a tall, tall hill. At the very top sat a shiny {object_motif}, waiting. The {hero} wanted to carry it all the way up.

"You can do it," said {companion_name}, hopping close.

So the {hero} began to climb. Step, step, step. The hill was steep. The wind pushed. But the {hero} held the {object_motif} tight and kept going.

Then, near the top — oh no! The {hero} slipped. Down, down, tumble, roll. All the way back to the bottom. The {object_motif} bounced away into the grass.

The {hero} sat very still. This was the biggest fall yet. Both knees hurt. The eyes felt hot and teary.

"I don't want to climb anymore," said the {hero} softly. "I want to stop. For always."

{companion_name} sat down too, right beside. "That was a big fall," said {companion_name}. "It's okay to feel sad."

The {hero} sniffled. And the {hero} remembered all the other days. Remembered that hard is allowed. Remembered the little word "yet." Remembered that falling teaches us things. Remembered you can try a new way.

The {hero} looked up at the tall hill. It still looked very big.

But slowly, slowly, the {hero} picked up the {object_motif}. Stood up on two wobbly feet. And, Rising once more, the {hero} faced the hill again.

"This time," said the {hero}, "I will go slow. I will hold on where the rocks are strong."

Step. Step. Rest. Step. When a wobbly bit came, the {hero} went around it. {companion_name} cheered every little step.

And this time — the {hero} reached the top! The {object_motif} shone in the last soft light of day.

The {hero} did not feel like a big loud winner. The {hero} felt quiet and proud and warm, like a candle inside.

"I fell all the way down," whispered the {hero}, "and I got back up."

{companion_name} snuggled close. The stars came out over {setting}.

And that is the bravest thing of all — not never falling, but always choosing to rise.

{refrain}.`,
        scriptTemplate: `Tonight, {child_name} wanted to do the biggest thing yet.

In {setting}, there was a tall, tall hill. At the very top sat a shiny {object_motif}, waiting. {child_name} wanted to carry it all the way up.

"You can do it," said {companion_name}, hopping close.

So {child_name} began to climb. Step, step, step. The hill was steep. The wind pushed. But {child_name} held the {object_motif} tight and kept going.

Then, near the top — oh no! {child_name} slipped. Down, down, tumble, roll. All the way back to the bottom. The {object_motif} bounced away into the grass.

{child_name} sat very still. This was the biggest fall yet. Both knees hurt. The eyes felt hot and teary.

"I don't want to climb anymore," said {child_name} softly. "I want to stop. For always."

{companion_name} sat down too, right beside. "That was a big fall," said {companion_name}. "It's okay to feel sad."

{child_name} sniffled. And {child_name} remembered all the other days. Remembered that hard is allowed. Remembered the little word "yet." Remembered that falling teaches us things. Remembered you can try a new way.

{child_name} looked up at the tall hill. It still looked very big.

But slowly, slowly, {child_name} picked up the {object_motif}. Stood up on two wobbly feet. And, Rising once more, {child_name} faced the hill again.

"This time," said {child_name}, "I will go slow. I will hold on where the rocks are strong."

Step. Step. Rest. Step. When a wobbly bit came, {child_name} went around it. {companion_name} cheered every little step.

And this time — {child_name} reached the top! The {object_motif} shone in the last soft light of day.

{child_name} did not feel like a big loud winner. {child_name} felt quiet and proud and warm, like a candle inside.

"I fell all the way down," whispered {child_name}, "and I got back up."

{companion_name} snuggled close. The stars came out over {setting}.

And that is the bravest thing of all — not never falling, but always choosing to rise.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `Of everything the {hero} had ever tried, this was the biggest.

All across {setting}, everyone was talking about the Great Climb. At the top of the highest hill stood an old stone arch, and beneath it waited a shining {object_motif} — a prize for anyone brave enough to carry their own lantern all the way up before the sun went down.

The {hero} had practised for days. "You're ready," said {companion_name}, walking close as the climb began.

At first it went well. The {hero} climbed past the mossy rocks, past the twisty trees, holding the {object_motif} carefully so its light would not go out. Higher and higher. The top came closer.

And then, so near the arch that the {hero} could almost touch it, one foot landed on a loose stone. It rolled. The {hero} slipped — and slid, and tumbled, all the way back down the long hill to the very bottom.

The {object_motif} lay in the grass, its light flickered out.

The {hero} did not get up. This was the biggest fall of the whole journey, and it hurt everywhere — knees, hands, and somewhere deep in the chest where hope lives.

"I'm done," said the {hero}, voice small and shaking. "I tried and I fell. I don't want to try again. Not ever."

{companion_name} sat down in the grass beside the {hero} and did not rush. "That was a very big fall," {companion_name} said gently. "You're allowed to feel this sad."

So the {hero} felt sad for a while, and that was okay. The sky turned pink and gold. The hill looked enormous and far away.

But sitting there in the quiet, the {hero} began to remember. Remembered the first day, when learning that hard things are allowed to be hard. Remembered the magic word "yet" — I can't do it yet. Remembered that every mistake had quietly taught something. Remembered that when one way doesn't work, you can try a different way.

The {hero} looked at the {object_motif} lying dark in the grass, and picked it up. Held it close until its little light glowed warm again.

"Maybe," the {hero} whispered, "I don't have to do it perfectly. I just have to begin again."

And, Rising once more, the {hero} stood up on shaky legs and turned to face the hill.

This time was different. The {hero} did not race. Where the stones were loose, the {hero} went slowly and found the solid ground. Where the path was steep, the {hero} rested and breathed. {companion_name} walked alongside the whole way, naming each small win. "That's one step. That's ten. Look how far you've come."

The sun was nearly gone when the {hero} reached the old stone arch at last. The {object_motif} glowed bright beneath it, lighting up the whole hilltop in gold.

The {hero} did not shout or leap about. It wasn't that kind of feeling. It was quieter and deeper — proud, and calm, and warm all through.

"I fell all the way to the bottom," the {hero} said softly, looking out over {setting}, "and I chose to come back up."

{companion_name} leaned close. "That," {companion_name} said, "is the bravest thing anyone can do. Not never falling. Getting up again after you do."

The first stars blinked awake over {setting}. The {hero} held the glowing {object_motif} and felt, at last, that the whole long journey had led exactly here — to this hilltop, this quiet, this brave and gentle choice.

Because the secret was never about never falling down. The secret was always this:

{refrain}.`,
        scriptTemplate: `Of everything {child_name} had ever tried, this was the biggest.

All across {setting}, everyone was talking about the Great Climb. At the top of the highest hill stood an old stone arch, and beneath it waited a shining {object_motif} — a prize for anyone brave enough to carry their own lantern all the way up before the sun went down.

{child_name} had practised for days. "You're ready," said {companion_name}, walking close as the climb began.

At first it went well. {child_name} climbed past the mossy rocks, past the twisty trees, holding the {object_motif} carefully so its light would not go out. Higher and higher. The top came closer.

And then, so near the arch that {child_name} could almost touch it, one foot landed on a loose stone. It rolled. {child_name} slipped — and slid, and tumbled, all the way back down the long hill to the very bottom.

The {object_motif} lay in the grass, its light flickered out.

{child_name} did not get up. This was the biggest fall of the whole journey, and it hurt everywhere — knees, hands, and somewhere deep in the chest where hope lives.

"I'm done," said {child_name}, voice small and shaking. "I tried and I fell. I don't want to try again. Not ever."

{companion_name} sat down in the grass beside {child_name} and did not rush. "That was a very big fall," {companion_name} said gently. "You're allowed to feel this sad."

So {child_name} felt sad for a while, and that was okay. The sky turned pink and gold. The hill looked enormous and far away.

But sitting there in the quiet, {child_name} began to remember. Remembered the first day, when learning that hard things are allowed to be hard. Remembered the magic word "yet" — I can't do it yet. Remembered that every mistake had quietly taught something. Remembered that when one way doesn't work, you can try a different way.

{child_name} looked at the {object_motif} lying dark in the grass, and picked it up. Held it close until its little light glowed warm again.

"Maybe," {child_name} whispered, "I don't have to do it perfectly. I just have to begin again."

And, Rising once more, {child_name} stood up on shaky legs and turned to face the hill.

This time was different. {child_name} did not race. Where the stones were loose, {child_name} went slowly and found the solid ground. Where the path was steep, {child_name} rested and breathed. {companion_name} walked alongside the whole way, naming each small win. "That's one step. That's ten. Look how far you've come."

The sun was nearly gone when {child_name} reached the old stone arch at last. The {object_motif} glowed bright beneath it, lighting up the whole hilltop in gold.

{child_name} did not shout or leap about. It wasn't that kind of feeling. It was quieter and deeper — proud, and calm, and warm all through.

"I fell all the way to the bottom," {child_name} said softly, looking out over {setting}, "and I chose to come back up."

{companion_name} leaned close. "That," {companion_name} said, "is the bravest thing anyone can do. Not never falling. Getting up again after you do."

The first stars blinked awake over {setting}. {child_name} held the glowing {object_motif} and felt, at last, that the whole long journey had led exactly here — to this hilltop, this quiet, this brave and gentle choice.

Because the secret was never about never falling down. The secret was always this:

{refrain}.`,
      },
      '7-8': {
        audioTemplate: `This was the one the {hero} had been building toward all along — the biggest challenge of the entire journey.

Every year in {setting}, when summer tipped toward autumn, there was the Lantern Climb. At the top of the tallest hill stood an ancient stone arch, weathered by a hundred storms, and whoever carried their own lit lantern all the way to it before the sun set could ring the old bell and leave a mark on the Climbers' Stone. The {hero} had wanted this for as long as could be remembered.

For weeks, the {hero} had trained. Steep paths, loose gravel, the long burn in the legs — all of it. "You've worked so hard," said {companion_name} as the two of them stood at the bottom, the {object_motif} glowing steadily in the {hero}'s hands. "Whatever happens, I'm proud of you."

The {hero} set off strong. Up past the mossy boulders, up through the crooked pines, keeping the lantern's flame sheltered from the wind. Each step felt like proof of every hard day that had come before. The arch grew closer. The bell caught the last gold light.

And then, only a few strides from the top, the ground betrayed the {hero}. A slab of loose shale shifted underfoot. There was a sickening lurch, a grab at empty air — and the {hero} fell. Not a small stumble. A real fall, sliding and rolling down the long slope, all the way to the bottom, while the {object_motif} tumbled from open hands and its flame snuffed out in the grass.

For a long moment the {hero} lay still at the foot of the hill. Everything hurt. But the worst hurt was not on the outside. This was the biggest fall of the whole journey, and it had come at the very worst moment, so close to the end.

"I'm finished," the {hero} said, and this time the words did not feel dramatic — they felt true. "I did everything right and I still fell. I don't want to try again. What's the point?"

{companion_name} climbed down and sat in the grass, close but not crowding. "That was a terrible fall," {companion_name} said. "I'm not going to tell you it didn't hurt. It did. You're allowed to feel every bit of that."

So the {hero} sat with it. The sky went from gold to rose to deep and dusky blue. And that was allowed — the sadness was real, and it needed its moment.

But as the {hero} sat there in the gathering dark, the memories came, one by one. The very first lesson, back at the start: that hard things are allowed to feel hard, and that doesn't mean you're failing. The word "yet" — I haven't done it yet. The day the {hero} learned that mistakes are not the end of a story but a kind of teacher, if you let them be. And the day the {hero} discovered that when one path fails, there is almost always another way to try.

The {hero} reached out through the cool grass and found the fallen {object_motif}. Cupped it close, and breathed on the wick, and slowly, slowly, coaxed the little flame back to life until it glowed warm and steady once again.

"I don't have to do it perfectly," the {hero} murmured, half to {companion_name} and half to the hill itself. "I just have to be brave enough to begin again."

And, Rising once more, the {hero} got to both feet, aching and unsteady, and turned to face the enormous dark hill one more time.

This climb was nothing like the first. The {hero} did not rush or try to prove anything. Where the shale was loose, the {hero} tested each stone before trusting it. Where the slope was steepest, the {hero} paused to breathe instead of pushing on in a panic. {companion_name} climbed alongside, naming each small victory in the dark. "That's the boulders behind you. That's the pines. Look — you can see the arch."

The very last light was fading from the sky when the {hero} finally reached the ancient arch at the top. The {object_motif} lifted high, and its glow spread gold across the whole hilltop. The {hero} reached up and rang the old bell, and its clear sound rolled out across all of {setting}.

But strangely, the ringing bell was not the biggest thing. The {hero} did not feel like a loud, triumphant champion. The feeling was quieter than that, and far deeper — a steady, glowing pride, the kind that comes not from never falling but from getting up when falling felt like the end.

"I fell all the way to the bottom," the {hero} said softly, looking out over the darkening land, "and I chose to climb back up anyway."

{companion_name} stood close as the first stars came out over {setting}. "Remember this feeling," {companion_name} said. "Not the bell. This. Because anyone can walk when the path is easy. You learned how to rise."

And the {hero} understood, at last, that the whole long journey had been leading here — not to a hilltop, not to a bell, but to this one quiet truth, held close like a warm and glowing light:

{refrain}.`,
        scriptTemplate: `This was the one {child_name} had been building toward all along — the biggest challenge of the entire journey.

Every year in {setting}, when summer tipped toward autumn, there was the Lantern Climb. At the top of the tallest hill stood an ancient stone arch, weathered by a hundred storms, and whoever carried their own lit lantern all the way to it before the sun set could ring the old bell and leave a mark on the Climbers' Stone. {child_name} had wanted this for as long as could be remembered.

For weeks, {child_name} had trained. Steep paths, loose gravel, the long burn in the legs — all of it. "You've worked so hard," said {companion_name} as the two of them stood at the bottom, the {object_motif} glowing steadily in {child_name}'s hands. "Whatever happens, I'm proud of you."

{child_name} set off strong. Up past the mossy boulders, up through the crooked pines, keeping the lantern's flame sheltered from the wind. Each step felt like proof of every hard day that had come before. The arch grew closer. The bell caught the last gold light.

And then, only a few strides from the top, the ground betrayed {child_name}. A slab of loose shale shifted underfoot. There was a sickening lurch, a grab at empty air — and {child_name} fell. Not a small stumble. A real fall, sliding and rolling down the long slope, all the way to the bottom, while the {object_motif} tumbled from open hands and its flame snuffed out in the grass.

For a long moment {child_name} lay still at the foot of the hill. Everything hurt. But the worst hurt was not on the outside. This was the biggest fall of the whole journey, and it had come at the very worst moment, so close to the end.

"I'm finished," {child_name} said, and this time the words did not feel dramatic — they felt true. "I did everything right and I still fell. I don't want to try again. What's the point?"

{companion_name} climbed down and sat in the grass, close but not crowding. "That was a terrible fall," {companion_name} said. "I'm not going to tell you it didn't hurt. It did. You're allowed to feel every bit of that."

So {child_name} sat with it. The sky went from gold to rose to deep and dusky blue. And that was allowed — the sadness was real, and it needed its moment.

But as {child_name} sat there in the gathering dark, the memories came, one by one. The very first lesson, back at the start: that hard things are allowed to feel hard, and that doesn't mean you're failing. The word "yet" — I haven't done it yet. The day {child_name} learned that mistakes are not the end of a story but a kind of teacher, if you let them be. And the day {child_name} discovered that when one path fails, there is almost always another way to try.

{child_name} reached out through the cool grass and found the fallen {object_motif}. Cupped it close, and breathed on the wick, and slowly, slowly, coaxed the little flame back to life until it glowed warm and steady once again.

"I don't have to do it perfectly," {child_name} murmured, half to {companion_name} and half to the hill itself. "I just have to be brave enough to begin again."

And, Rising once more, {child_name} got to both feet, aching and unsteady, and turned to face the enormous dark hill one more time.

This climb was nothing like the first. {child_name} did not rush or try to prove anything. Where the shale was loose, {child_name} tested each stone before trusting it. Where the slope was steepest, {child_name} paused to breathe instead of pushing on in a panic. {companion_name} climbed alongside, naming each small victory in the dark. "That's the boulders behind you. That's the pines. Look — you can see the arch."

The very last light was fading from the sky when {child_name} finally reached the ancient arch at the top. The {object_motif} lifted high, and its glow spread gold across the whole hilltop. {child_name} reached up and rang the old bell, and its clear sound rolled out across all of {setting}.

But strangely, the ringing bell was not the biggest thing. {child_name} did not feel like a loud, triumphant champion. The feeling was quieter than that, and far deeper — a steady, glowing pride, the kind that comes not from never falling but from getting up when falling felt like the end.

"I fell all the way to the bottom," {child_name} said softly, looking out over the darkening land, "and I chose to climb back up anyway."

{companion_name} stood close as the first stars came out over {setting}. "Remember this feeling," {companion_name} said. "Not the bell. This. Because anyone can walk when the path is easy. You learned how to rise."

And {child_name} understood, at last, that the whole long journey had been leading here — not to a hilltop, not to a bell, but to this one quiet truth, held close like a warm and glowing light:

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `There is a particular kind of silence that comes after you fail at the one thing you wanted most, and the {hero} was learning it now, at the bottom of the hill, in the last gold minutes of the longest day of the year.

Everyone in {setting} knew about the Lantern Climb. Once a year, on midsummer's eve, the young climbers gathered at the foot of the tallest hill. At its summit stood the Old Arch, grey and patient, and above it hung the Climbers' Bell. The rule was simple and merciless: carry your own lit lantern to the top and ring the bell before the sun touched the horizon, and your name would be carved into the Climbers' Stone forever. Miss the sunset — even by a heartbeat — and the year was gone. You could not try again until the earth had gone all the way around the sun.

The {hero} had waited three years for this. Three years of watching older climbers ring the bell while standing too small at the back of the crowd. This year, at last, it was the {hero}'s turn, and the {hero} had trained for it with a seriousness that surprised even {companion_name} — the pre-dawn climbs, the aching legs, the careful study of every loose slope and hidden foothold on the mountain.

"You know this hill better than anyone," {companion_name} said quietly as they stood together at the starting line, the {object_motif} burning bright and steady in the {hero}'s hands. "You've earned this."

The horn sounded. The {hero} climbed.

And for a while, it was perfect. Better than perfect. The {hero} moved up the slope like water finding its way downhill in reverse, past the boulders, through the pines, reading the mountain the way you read a story you have loved for years. The sun sank slowly and golden toward the far hills. The Arch drew nearer. The {hero} could see the bell now, could almost hear how it would sound. Close. So close.

And then the mountain did the one thing the {hero} had not planned for. A slab of shale that had held firm through three years of practice climbs chose that exact evening to give way. It slid without warning. The {hero}'s foot went out into nothing, and there was that awful weightless instant of knowing — really knowing — that this was going to be bad. Then the fall took over. Down the long slope, over and over, the world spinning grass and sky and stone, until the {hero} came to rest, bruised and breathless, near the very bottom of the hill. The {object_motif} lay a little way off in the grass, its flame gone dark, a thread of smoke rising thin into the evening air.

The {hero} got up onto hands and knees — and looked toward the west. The sun was already gone. Only a low band of fading rose remained where it had been. Somewhere above, faint and far away, the Climbers' Bell rang out for someone else. The year's chance had closed while the {hero} was still lying in the grass at the bottom.

That was when the true fall arrived — not the one down the slope, but the one on the inside. It was quiet and enormous. The {hero} did not cry out. The {hero} simply sat down in the cooling grass and felt the whole thing crumble: three years of waiting, weeks of climbing before dawn, the certainty of being ready. Gone, in the space of one loose stone.

"I'm done," the {hero} said at last, and the words came out flat and final, without any drama in them at all. "Not just tonight. I mean I'm done. I did everything right. I trained harder than anyone. And it didn't matter. So what is the point of ever trying at anything again?"

{companion_name} came and sat nearby in the dark. For a long time {companion_name} said nothing, which was somehow exactly the right thing. The first stars came out over {setting}, indifferent and beautiful.

"I'm not going to pretend this is small," {companion_name} said finally. "It isn't. You lost something real tonight, and you're allowed to grieve it. Don't let anyone rush you out of that."

So the {hero} grieved. And it was allowed. There is no version of getting back up that skips the part where you are down.

But grief, if you sit with it honestly, eventually makes room for other things, and slowly — from somewhere far back in the long journey — the old lessons began to surface. The very first one, from what felt like a lifetime ago: that hard things are permitted to be hard, and that struggling does not make you a failure. Then the small, stubborn word — "yet." I have not rung the bell yet. Then the harder lesson, learned through a dozen scraped attempts: that a mistake is not the closing of a door but a teacher who only speaks to those willing to listen. And finally the one that had taken longest to believe — that when a path collapses beneath you, it does not mean there is no path; it means it is time to find another.

The {hero} looked at these lessons the way you might look at old friends arriving quietly at exactly the moment you needed them. Then the {hero} reached across the cool grass and picked up the fallen {object_motif}. The wick was dark, but not ruined. Patiently, the way {companion_name} had once shown, the {hero} sheltered it and coaxed it and breathed life back into the small flame until it caught and steadied and glowed — a single point of warm gold in all that blue dark.

"I can't win it this year," the {hero} said slowly, turning the thought over, testing whether it was true and finding that it was. "That's really gone. I can't change it." A long breath. "But losing the year isn't the same as quitting forever. Those are two different things. I kept mixing them up."

And, Rising once more, the {hero} stood — sore, unsteady, and entirely without an audience now, for the crowd had long since gone home to celebrate the winner. There was no bell left to ring tonight. No name to carve. Nothing to prove to anyone at all.

The {hero} turned and looked up at the black shape of the hill against the stars. "I'm going to climb it anyway," the {hero} said. "Not for the bell. Just to finish what I started. And then I'm going to come back next year, and the year after that if I have to."

{companion_name} rose too. "You know," {companion_name} said softly, "in three years of watching, I've seen a lot of climbers ring that bell. I've never once seen one do what you're about to do. Anyone can climb toward a prize. Climbing in the dark, after you've already lost it, with nobody watching — that's a different thing entirely."

They climbed together, slowly, the {object_motif} lighting just enough of the path to find the next safe stone. Where the shale was loose the {hero} tested it first. Where the slope was cruel the {hero} rested and breathed and went on. It took a long time. And when at last they reached the Old Arch at the top, there was no crowd, no horn, no carving in the stone — only the quiet grey arch, the wide dark country of {setting} spread out below, and the enormous scatter of stars overhead.

The {hero} stood beneath the Arch and did not ring the silent bell. There was no need. The feeling in the {hero}'s chest was not triumph — it was something quieter and far more durable, a steady warmth that no one had handed over and no one could take away.

"I fell all the way to the bottom," the {hero} whispered to the dark and the stars, "and I lost the thing I wanted most. And I got up and climbed anyway."

{companion_name} stood close as the night settled gentle over the hills. "Remember this," {companion_name} said. "Not the years you win. This. The night you had every reason to stay down, and you chose, instead, to rise."

And the {hero} understood then that the whole long journey — every scraped knee, every "yet," every mistake and every second try — had been leading not to a bell or a carved name, but to this one hard-won, unshakeable truth, carried home in the dark like a small and steady flame:

{refrain}.`,
        scriptTemplate: `There is a particular kind of silence that comes after you fail at the one thing you wanted most, and {child_name} was learning it now, at the bottom of the hill, in the last gold minutes of the longest day of the year.

Everyone in {setting} knew about the Lantern Climb. Once a year, on midsummer's eve, the young climbers gathered at the foot of the tallest hill. At its summit stood the Old Arch, grey and patient, and above it hung the Climbers' Bell. The rule was simple and merciless: carry your own lit lantern to the top and ring the bell before the sun touched the horizon, and your name would be carved into the Climbers' Stone forever. Miss the sunset — even by a heartbeat — and the year was gone. You could not try again until the earth had gone all the way around the sun.

{child_name} had waited three years for this. Three years of watching older climbers ring the bell while standing too small at the back of the crowd. This year, at last, it was {child_name}'s turn, and {child_name} had trained for it with a seriousness that surprised even {companion_name} — the pre-dawn climbs, the aching legs, the careful study of every loose slope and hidden foothold on the mountain.

"You know this hill better than anyone," {companion_name} said quietly as they stood together at the starting line, the {object_motif} burning bright and steady in {child_name}'s hands. "You've earned this."

The horn sounded. {child_name} climbed.

And for a while, it was perfect. Better than perfect. {child_name} moved up the slope like water finding its way downhill in reverse, past the boulders, through the pines, reading the mountain the way you read a story you have loved for years. The sun sank slowly and golden toward the far hills. The Arch drew nearer. {child_name} could see the bell now, could almost hear how it would sound. Close. So close.

And then the mountain did the one thing {child_name} had not planned for. A slab of shale that had held firm through three years of practice climbs chose that exact evening to give way. It slid without warning. {child_name}'s foot went out into nothing, and there was that awful weightless instant of knowing — really knowing — that this was going to be bad. Then the fall took over. Down the long slope, over and over, the world spinning grass and sky and stone, until {child_name} came to rest, bruised and breathless, near the very bottom of the hill. The {object_motif} lay a little way off in the grass, its flame gone dark, a thread of smoke rising thin into the evening air.

{child_name} got up onto hands and knees — and looked toward the west. The sun was already gone. Only a low band of fading rose remained where it had been. Somewhere above, faint and far away, the Climbers' Bell rang out for someone else. The year's chance had closed while {child_name} was still lying in the grass at the bottom.

That was when the true fall arrived — not the one down the slope, but the one on the inside. It was quiet and enormous. {child_name} did not cry out. {child_name} simply sat down in the cooling grass and felt the whole thing crumble: three years of waiting, weeks of climbing before dawn, the certainty of being ready. Gone, in the space of one loose stone.

"I'm done," {child_name} said at last, and the words came out flat and final, without any drama in them at all. "Not just tonight. I mean I'm done. I did everything right. I trained harder than anyone. And it didn't matter. So what is the point of ever trying at anything again?"

{companion_name} came and sat nearby in the dark. For a long time {companion_name} said nothing, which was somehow exactly the right thing. The first stars came out over {setting}, indifferent and beautiful.

"I'm not going to pretend this is small," {companion_name} said finally. "It isn't. You lost something real tonight, and you're allowed to grieve it. Don't let anyone rush you out of that."

So {child_name} grieved. And it was allowed. There is no version of getting back up that skips the part where you are down.

But grief, if you sit with it honestly, eventually makes room for other things, and slowly — from somewhere far back in the long journey — the old lessons began to surface. The very first one, from what felt like a lifetime ago: that hard things are permitted to be hard, and that struggling does not make you a failure. Then the small, stubborn word — "yet." I have not rung the bell yet. Then the harder lesson, learned through a dozen scraped attempts: that a mistake is not the closing of a door but a teacher who only speaks to those willing to listen. And finally the one that had taken longest to believe — that when a path collapses beneath you, it does not mean there is no path; it means it is time to find another.

{child_name} looked at these lessons the way you might look at old friends arriving quietly at exactly the moment you needed them. Then {child_name} reached across the cool grass and picked up the fallen {object_motif}. The wick was dark, but not ruined. Patiently, the way {companion_name} had once shown, {child_name} sheltered it and coaxed it and breathed life back into the small flame until it caught and steadied and glowed — a single point of warm gold in all that blue dark.

"I can't win it this year," {child_name} said slowly, turning the thought over, testing whether it was true and finding that it was. "That's really gone. I can't change it." A long breath. "But losing the year isn't the same as quitting forever. Those are two different things. I kept mixing them up."

And, Rising once more, {child_name} stood — sore, unsteady, and entirely without an audience now, for the crowd had long since gone home to celebrate the winner. There was no bell left to ring tonight. No name to carve. Nothing to prove to anyone at all.

{child_name} turned and looked up at the black shape of the hill against the stars. "I'm going to climb it anyway," {child_name} said. "Not for the bell. Just to finish what I started. And then I'm going to come back next year, and the year after that if I have to."

{companion_name} rose too. "You know," {companion_name} said softly, "in three years of watching, I've seen a lot of climbers ring that bell. I've never once seen one do what you're about to do. Anyone can climb toward a prize. Climbing in the dark, after you've already lost it, with nobody watching — that's a different thing entirely."

They climbed together, slowly, the {object_motif} lighting just enough of the path to find the next safe stone. Where the shale was loose {child_name} tested it first. Where the slope was cruel {child_name} rested and breathed and went on. It took a long time. And when at last they reached the Old Arch at the top, there was no crowd, no horn, no carving in the stone — only the quiet grey arch, the wide dark country of {setting} spread out below, and the enormous scatter of stars overhead.

{child_name} stood beneath the Arch and did not ring the silent bell. There was no need. The feeling in {child_name}'s chest was not triumph — it was something quieter and far more durable, a steady warmth that no one had handed over and no one could take away.

"I fell all the way to the bottom," {child_name} whispered to the dark and the stars, "and I lost the thing I wanted most. And I got up and climbed anyway."

{companion_name} stood close as the night settled gentle over the hills. "Remember this," {companion_name} said. "Not the years you win. This. The night you had every reason to stay down, and you chose, instead, to rise."

And {child_name} understood then that the whole long journey — every scraped knee, every "yet," every mistake and every second try — had been leading not to a bell or a carved name, but to this one hard-won, unshakeable truth, carried home in the dark like a small and steady flame:

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
