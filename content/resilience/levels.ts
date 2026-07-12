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
        audioTemplate: `{companion_name} had gone across {setting} for the day and would not be home until moonrise. Which meant the {hero} had one evening for the plan — and the plan was beautiful. A perfect ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds sleep all day, but the first touch of moonlight wakes them, and they shine green-gold for a hundred nights. A welcome-home ring of light. Perfectly round. Perfectly planned.

The {hero} had traded a week of errands for those seeds — twenty of them, counted twice. The seed-seller had said only one strange thing while pouring them into the pouch: "Plant them where they fall." Which was obviously nonsense, because seeds fall wherever you drop them, and a plan is a plan.

The {hero} carried the pouch toward the door slowly, carefully, importantly. And tripped.

Plip-plip-plip-plip. The glow-seeds leapt from the pouch and bounced away merrily, scattering in a long crooked ribbon, as if they had been waiting all day for the chance.

"No no no no," whispered the {hero}, crawling around in the dusk, patting the ground. Fourteen came back. Six were simply gone — vanished into the crooked dark. "I've ruined it. Before I even started, I ruined it."

There was a hot, prickly feeling behind the {hero}'s eyes. Hard was allowed, of course. The wobble marks had settled that ages ago. But this was not hard. This was spoiled, which felt like a different thing entirely.

Still. Fourteen seeds could make a smaller perfect ring. The {hero} planted them in the neatest circle ever pressed into ground, evenly spaced, and then fetched water — and even the water misbehaved. It ran off the ring's packed earth and trickled away sideways, down some crooked path of its own, exactly the way the seeds had gone.

"Everything runs away from my plan," muttered the {hero}, and sat down to wait for the moon, braced for disappointment.

The moon came up slow and generous. And — look closely now, out into the dark. Something is waking. Little green-gold lights, blinking on one by one. But where? Not the tidy ring. The lights are coming from the crooked line.

The six runaway seeds were shining — every lost one — strung out along their messy ribbon like lanterns on a street. The fourteen perfect seeds sat in their perfect circle, dark as buttons.

The {hero} crept over, nose to the ground, and looked properly. The crooked ribbon ran exactly where rain always trickled: low, soft, deep-watered ground, the best soil in the whole garden. The proud ring sat on earth packed hard as a road. And round seeds roll downhill, into the soft hollows where the water goes. The spill had not been bad luck. The spill had been a map.

"Plant them where they fall," said the {hero} slowly, and the seller's nonsense stopped being nonsense. "They fall where they roll, and they roll where the water goes. My mistake wasn't a ruin — it was information. It knew things the plan didn't." The {hero} was already digging. "Getting it wrong is part of how growing is done. It might be the biggest part."

Fourteen dark seeds came up out of the perfect circle and went down again, one by one, along the crooked shining line. And one by one they woke, green-gold, until a winding river of light ran from the path all the way to {companion_name}'s door. It was not round. It was not planned. It was better.

"{refrain}," whispered the {hero} to the seeds, the way {companion_name} always said it, and sat down to wait.

{companion_name} came home at moonrise and stopped so suddenly they nearly sat down. "A river," they said. "A river of light, to my own door. However did you know where glow-seeds grow? Gardeners twice my age can't tell that soil."

"I didn't know," said the {hero}, glowing a little too. "I dropped them. The drop knew. My mistake did the smartest part."

They sat together in the seed-light while the moon climbed, and the {hero} told the whole story — the trip, the runaway water, the map hiding inside the mess — and {companion_name} laughed in all the right places.

The lights blinked slower. The night leaned in, soft and warm.

Somewhere out in the dark, the twentieth seed had still not been found. It was out there right now, secretly glowing in some soft hollow nobody had checked.

Tomorrow, they would follow the crooked places and find it.

{refrain}.`,
        scriptTemplate: `{companion_name} had gone across {setting} for the day and would not be home until moonrise. Which meant {child_name} the {hero} had one evening for the plan — and the plan was beautiful. A perfect ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds sleep all day, but the first touch of moonlight wakes them, and they shine green-gold for a hundred nights. A welcome-home ring of light. Perfectly round. Perfectly planned.

{child_name} had traded a week of errands for those seeds — twenty of them, counted twice. The seed-seller had said only one strange thing while pouring them into the pouch: "Plant them where they fall." Which was obviously nonsense, because seeds fall wherever you drop them, and a plan is a plan.

{child_name} carried the pouch toward the door slowly, carefully, importantly. And tripped.

Plip-plip-plip-plip. The glow-seeds leapt from the pouch and bounced away merrily, scattering in a long crooked ribbon, as if they had been waiting all day for the chance.

"No no no no," whispered {child_name}, crawling around in the dusk, patting the ground. Fourteen came back. Six were simply gone — vanished into the crooked dark. "I've ruined it. Before I even started, I ruined it."

There was a hot, prickly feeling behind {child_name}'s eyes. Hard was allowed, of course. The wobble marks had settled that ages ago. But this was not hard. This was spoiled, which felt like a different thing entirely.

Still. Fourteen seeds could make a smaller perfect ring. {child_name} planted them in the neatest circle ever pressed into ground, evenly spaced, and then fetched water — and even the water misbehaved. It ran off the ring's packed earth and trickled away sideways, down some crooked path of its own, exactly the way the seeds had gone.

"Everything runs away from my plan," muttered {child_name}, and sat down to wait for the moon, braced for disappointment.

The moon came up slow and generous. And — look closely now, out into the dark. Something is waking. Little green-gold lights, blinking on one by one. But where? Not the tidy ring. The lights are coming from the crooked line.

The six runaway seeds were shining — every lost one — strung out along their messy ribbon like lanterns on a street. The fourteen perfect seeds sat in their perfect circle, dark as buttons.

{child_name} crept over, nose to the ground, and looked properly. The crooked ribbon ran exactly where rain always trickled: low, soft, deep-watered ground, the best soil in the whole garden. The proud ring sat on earth packed hard as a road. And round seeds roll downhill, into the soft hollows where the water goes. The spill had not been bad luck. The spill had been a map.

"Plant them where they fall," said {child_name} slowly, and the seller's nonsense stopped being nonsense. "They fall where they roll, and they roll where the water goes. My mistake wasn't a ruin — it was information. It knew things the plan didn't." {child_name} was already digging. "Getting it wrong is part of how growing is done. It might be the biggest part."

Fourteen dark seeds came up out of the perfect circle and went down again, one by one, along the crooked shining line. And one by one they woke, green-gold, until a winding river of light ran from the path all the way to {companion_name}'s door. It was not round. It was not planned. It was better.

"{refrain}," whispered {child_name} to the seeds, the way {companion_name} always said it, and sat down to wait.

{companion_name} came home at moonrise and stopped so suddenly they nearly sat down. "A river," they said. "A river of light, to my own door. However did you know where glow-seeds grow? Gardeners twice my age can't tell that soil."

"I didn't know," said {child_name}, glowing a little too. "I dropped them. The drop knew. My mistake did the smartest part."

They sat together in the seed-light while the moon climbed, and {child_name} told the whole story — the trip, the runaway water, the map hiding inside the mess — and {companion_name} laughed in all the right places.

The lights blinked slower. The night leaned in, soft and warm.

Somewhere out in the dark, the twentieth seed had still not been found. It was out there right now, secretly glowing in some soft hollow nobody had checked.

Tomorrow, they would follow the crooked places and find it.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `{companion_name} had gone across {setting} for the whole day and would not be back until moonrise, which meant the {hero} had approximately one evening to execute the finest surprise ever planned. And it was planned. It had been planned for a week, in secret, with diagrams.

A ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds spend their days disguised as plain grey pebbles, but the first touch of moonlight wakes them, and after that they shine green-gold for a hundred nights. Twenty seeds, earned with a week of errands, counted twice into a soft pouch — a circle exactly the size of a welcome.

The seed-seller had said precisely one strange thing while pouring them out. "Plant them where they fall." The {hero} had nodded politely, the way you nod at people who speak in riddles, and privately filed it under nonsense. Seeds fall where you drop them. Nobody builds a masterpiece by dropping it.

The {hero} carried the pouch toward the door with the slow, ceremonial care of somebody transporting treasure. Which is exactly when the ground produced a root, or possibly nothing at all, and the {hero} tripped.

Plip-plip-plip-plip. Twenty glow-seeds soared out of the pouch with what sounded suspiciously like joy, bounced, scattered, and ran — a long crooked ribbon of tiny thumps disappearing into the dusk.

The {hero} spent the next while crawling in the dark, patting the ground like someone apologising to it. Fourteen seeds came back. Six were gone — properly gone, swallowed by the crooked shadows. "I ruined it," the {hero} said to the empty garden. "A week of planning, and I ruined it in four steps."

And here is the thing about that feeling. The {hero} knew hard was allowed — the wobble marks had settled that long ago. But this did not feel like hard, which you can lean into. It felt like spoiled, which just sits there.

Still: fourteen seeds make a smaller circle. The {hero} pressed them into the neatest ring in the history of rings, spaced to perfection, and fetched water — whereupon even the water joined the rebellion, sliding off the ring's packed earth and wandering away sideways in a thin silver thread: the same crooked path, more or less, that the seeds had taken. The {hero} was too tired to wonder about that, and sat down to wait for the moon.

The moon rose slow and generous over {setting}. And — lean out into the dark for a moment. Something is waking up out there. Tiny green-gold lights, blinking on, one, then three, then six. But look where. Not the tidy ring. The lights are strung along the crooked line.

All six runaway seeds were shining. Every lost, unplanned, given-up-for-gone one of them, glowing in a messy ribbon like lanterns down a lane. The fourteen perfect seeds sat in their perfect circle, dark as buttons on a coat.

The {hero} went over on quiet feet and finally looked at the ground instead of the plan. The crooked ribbon lay exactly where rain always trickled — low, soft, deep-drinking soil, the richest in the garden. The ring sat proudly on earth packed hard as a road. And round seeds roll. Of course they roll. They roll downhill into the hollows, and the hollows are where the water goes, which is precisely where a seed most wants to live. The spill had not been clumsiness. It had been twenty small experts sorting themselves.

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

A ring of glow-seeds around the {object_motif}, right beside {companion_name}'s door. Glow-seeds spend their days disguised as plain grey pebbles, but the first touch of moonlight wakes them, and after that they shine green-gold for a hundred nights. Twenty seeds, earned with a week of errands, counted twice into a soft pouch — a circle exactly the size of a welcome.

The seed-seller had said precisely one strange thing while pouring them out. "Plant them where they fall." {child_name} had nodded politely, the way you nod at people who speak in riddles, and privately filed it under nonsense. Seeds fall where you drop them. Nobody builds a masterpiece by dropping it.

{child_name} carried the pouch toward the door with the slow, ceremonial care of somebody transporting treasure. Which is exactly when the ground produced a root, or possibly nothing at all, and {child_name} tripped.

Plip-plip-plip-plip. Twenty glow-seeds soared out of the pouch with what sounded suspiciously like joy, bounced, scattered, and ran — a long crooked ribbon of tiny thumps disappearing into the dusk.

{child_name} spent the next while crawling in the dark, patting the ground like someone apologising to it. Fourteen seeds came back. Six were gone — properly gone, swallowed by the crooked shadows. "I ruined it," {child_name} said to the empty garden. "A week of planning, and I ruined it in four steps."

And here is the thing about that feeling. {child_name} knew hard was allowed — the wobble marks had settled that long ago. But this did not feel like hard, which you can lean into. It felt like spoiled, which just sits there.

Still: fourteen seeds make a smaller circle. {child_name} pressed them into the neatest ring in the history of rings, spaced to perfection, and fetched water — whereupon even the water joined the rebellion, sliding off the ring's packed earth and wandering away sideways in a thin silver thread: the same crooked path, more or less, that the seeds had taken. {child_name} was too tired to wonder about that, and sat down to wait for the moon.

The moon rose slow and generous over {setting}. And — lean out into the dark for a moment. Something is waking up out there. Tiny green-gold lights, blinking on, one, then three, then six. But look where. Not the tidy ring. The lights are strung along the crooked line.

All six runaway seeds were shining. Every lost, unplanned, given-up-for-gone one of them, glowing in a messy ribbon like lanterns down a lane. The fourteen perfect seeds sat in their perfect circle, dark as buttons on a coat.

{child_name} went over on quiet feet and finally looked at the ground instead of the plan. The crooked ribbon lay exactly where rain always trickled — low, soft, deep-drinking soil, the richest in the garden. The ring sat proudly on earth packed hard as a road. And round seeds roll. Of course they roll. They roll downhill into the hollows, and the hollows are where the water goes, which is precisely where a seed most wants to live. The spill had not been clumsiness. It had been twenty small experts sorting themselves.

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
    title: "The Sideways Bell",
    concept: "When one way does not work, try another",
    callback: "The power of yet (Level 2)",
    ageFloor: 5,
    summary: "It is story-night, but the great bell that gathers everyone will not ring, no matter how hard the hero pulls — and pulling harder only makes it worse. The clue comes from the smallest thing on the square: the tiny chime beside it that nobody rings, because it rings itself. It never pulls down. It swings sideways. Some stuck things don't need a harder way — they need a different one.",
    teachingNote: "Flexible thinking is resilience in action: a child who can say \"harder isn't working, what else could I try?\" has a way forward that effort alone can't give.",
    learningBeat: "A different way",
    ageVariants: {
      '3-4': {
        audioTemplate: `It was story-night in {setting}. When the big bell rang, everyone came to hear the story. The {hero} loved story-night best of all.

But tonight, the bell would not ring.

The {hero} pulled the rope. One pull. Two pulls. Three big pulls. Nothing.

{companion_name} pulled too. Still nothing.

"I can't ring it," puffed the {hero}. "Well — not so far."

Beside the big bell hung a tiny chime. Nobody ever rang it. It rang itself.

A little breeze came by, and the tiny chime sang. Watch closely. Which way does it swing? Not down. Sideways!

"Oh!" said the {hero}. "The breeze doesn't pull harder. It swings a different way!"

The {hero} peeked inside the big bell. A round seed-pod was stuck in there. Pulling down had squeezed it tight.

So the {hero} gave the bell one soft sideways push. The pod rolled out, free!

Dong! Dong! The bell sang. Story-night!

"{refrain}," said {companion_name}, smiling.

Everyone came, and the story was long and lovely.

After, they planted the seed-pod beside the {object_motif}. Pat, pat.

What grows from a bell-seed? Tomorrow will start to tell.

{refrain}.`,
        scriptTemplate: `It was story-night in {setting}. When the big bell rang, everyone came to hear the story. {child_name} the {hero} loved story-night best of all.

But tonight, the bell would not ring.

{child_name} pulled the rope. One pull. Two pulls. Three big pulls. Nothing.

{companion_name} pulled too. Still nothing.

"I can't ring it," puffed {child_name}. "Well — not so far."

Beside the big bell hung a tiny chime. Nobody ever rang it. It rang itself.

A little breeze came by, and the tiny chime sang. Watch closely. Which way does it swing? Not down. Sideways!

"Oh!" said {child_name}. "The breeze doesn't pull harder. It swings a different way!"

{child_name} peeked inside the big bell. A round seed-pod was stuck in there. Pulling down had squeezed it tight.

So {child_name} gave the bell one soft sideways push. The pod rolled out, free!

Dong! Dong! The bell sang. Story-night!

"{refrain}," said {companion_name}, smiling.

Everyone came, and the story was long and lovely.

After, they planted the seed-pod beside the {object_motif}. Pat, pat.

What grows from a bell-seed? Tomorrow will start to tell.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `It was story-night in {setting}. When the big bronze bell rang at dusk, everyone stopped whatever they were doing and came to the story circle. The {hero} had waited all week — tonight's story was supposed to be the best one yet.

But tonight, the bell would not ring.

The {hero} pulled the rope. The bell tipped, but no ring came. The {hero} pulled harder, feet right off the ground. Silence. The {hero} took a running start and pulled so hard that the rope slipped and the {hero} sat down very suddenly.

"I can't ring it," puffed the {hero}. Then the {hero} remembered the echo stone. "No. I can't ring it so far. Let me think."

{companion_name} was peering up at the bell too. "Hmm," was all they said. "The big bell is stubborn tonight. Its little sister never gets stuck."

The little sister was a tiny plain chime that hung beside the great bell. Nobody ever rang it. It rang itself, whenever the evening breeze came by.

And just then, a breeze did. Watch the little chime closely. Which way does it swing? Not down. Sideways.

The {hero} stared. "The breeze never pulls. It swishes sideways — and the chime sings every single time." The {hero} looked at the rope, the same rope everyone pulled, the same straight-down way. "I've been trying one way, just harder and harder. This bell doesn't want a harder way. It wants a different way!"

So the {hero} went up close and peeked inside the bell. There, wedged between the clapper and the rim, sat a smooth round seed-pod. Every hard downward pull had only jammed it tighter.

The {hero} gave the bell one soft, sideways nudge. The pod wobbled, rolled, and dropped out, free.

Dong! The great bell sang, so deep and warm the ground hummed. Dong! Dong! Lights bobbed out from every corner, everyone gathered, and the {hero} got to ring the bell for the whole story circle.

"{refrain}," said {companion_name}, as the last hum faded into the dark.

The story was just as good as promised, and twice as long.

Afterwards, the two of them planted the troublemaking seed-pod in the soft ground beside the {object_motif}, and patted it in.

"What does a bell-seed grow into?" wondered the {hero}, yawning.

"Morning can start finding out," said {companion_name}.

{refrain}.`,
        scriptTemplate: `It was story-night in {setting}. When the big bronze bell rang at dusk, everyone stopped whatever they were doing and came to the story circle. {child_name} the {hero} had waited all week — tonight's story was supposed to be the best one yet.

But tonight, the bell would not ring.

{child_name} pulled the rope. The bell tipped, but no ring came. {child_name} pulled harder, feet right off the ground. Silence. {child_name} took a running start and pulled so hard that the rope slipped and {child_name} sat down very suddenly.

"I can't ring it," puffed {child_name}. Then {child_name} remembered the echo stone. "No. I can't ring it so far. Let me think."

{companion_name} was peering up at the bell too. "Hmm," was all they said. "The big bell is stubborn tonight. Its little sister never gets stuck."

The little sister was a tiny plain chime that hung beside the great bell. Nobody ever rang it. It rang itself, whenever the evening breeze came by.

And just then, a breeze did. Watch the little chime closely. Which way does it swing? Not down. Sideways.

{child_name} stared. "The breeze never pulls. It swishes sideways — and the chime sings every single time." {child_name} looked at the rope, the same rope everyone pulled, the same straight-down way. "I've been trying one way, just harder and harder. This bell doesn't want a harder way. It wants a different way!"

So {child_name} went up close and peeked inside the bell. There, wedged between the clapper and the rim, sat a smooth round seed-pod. Every hard downward pull had only jammed it tighter.

{child_name} gave the bell one soft, sideways nudge. The pod wobbled, rolled, and dropped out, free.

Dong! The great bell sang, so deep and warm the ground hummed. Dong! Dong! Lights bobbed out from every corner, everyone gathered, and {child_name} got to ring the bell for the whole story circle.

"{refrain}," said {companion_name}, as the last hum faded into the dark.

The story was just as good as promised, and twice as long.

Afterwards, the two of them planted the troublemaking seed-pod in the soft ground beside the {object_motif}, and patted it in.

"What does a bell-seed grow into?" wondered {child_name}, yawning.

"Morning can start finding out," said {companion_name}.

{refrain}.`,
      },
      '7-8': {
        audioTemplate: `In {setting}, story-night worked like this: at dusk, somebody rang the great bronze bell, and the sound rolled out warm and deep into every corner, and everyone — the busy, the sleepy, the halfway-through-dinner — put things down and came to the story circle. The bell had gathered story-night for a hundred years without missing once. And tonight, of all nights, with the best story of the season promised, the {hero} had been given the honour of ringing it.

The {hero} took hold of the rope, grinned, and pulled.

The bell tipped. No ring.

The {hero} pulled harder. The bell swung in a slow, dignified, completely silent arc. The {hero} pulled with everything — both feet off the ground, swinging like laundry in a storm. Nothing. One more mighty go: a running start, a tremendous heave — and the rope slipped, and the {hero} sat down so suddenly that a nearby bird laughed.

"Ring it harder!" someone called helpfully from the gathering dark.

"Harder is all I've been doing!" the {hero} called back, and slumped against the bell post. Everything in the {hero} wanted to announce that the bell was broken and story-night was cancelled. But the old echo stone had taught a smaller, stubborner sentence, and the {hero} said it instead. "I can't ring it — not so far. Not so far means keep thinking."

{companion_name} had wandered over and was peering up at the silent bell with their head on one side. "Hmm," was all they offered. "The big one is stubborn tonight. Funny — its little sister never gets stuck."

The little sister. The {hero} had forgotten it was even there: a tiny plain chime, hardly bigger than a leaf, hanging beside the great bell on its own thin thread. Nobody ever rang it. Nobody needed to. It rang itself, silver and small, whenever an evening breeze came through.

And just then, an evening breeze came through. Quick — watch the little chime, closely now. Which way does it move? Not down. Nobody is pulling it down. It swings sideways.

The {hero} sat up straight. "The breeze never pulls," the {hero} said slowly. "Not once. It just swishes past, sideways — and the chime sings every single time." The {hero} looked at the rope, the same rope everyone had always pulled, in the same straight-down way, and then back at the drifting chime. "I've been trying one way all evening, just harder and harder each time. But harder isn't the only door. This bell doesn't want a harder way. It wants a different way."

So instead of pulling anything, the {hero} went right up under the great bell and peeked inside — which, in a hundred years, apparently nobody had thought to do while yanking on the rope. And there it was. A smooth, round seed-pod, wedged snug between the clapper and the rim, holding the bell's voice like a held breath. Every furious downward pull had rocked the clapper straight into the pod and jammed it tighter. The harder way had been making things worse all along.

The {hero} reached up and gave the bell the gentlest sideways nudge — the breeze's way, the chime's way. The pod wobbled. Rolled. Dropped out into the grass, round and shiny and completely unashamed of itself.

Dong! The great bell found its voice all at once, so deep and warm that the ground hummed and the stars seemed to lean in. Dong! Dong! Lanterns came bobbing from every direction, the story circle filled, and the {hero} — sideways-thinker, bell-freer — rang the gathering in.

"{refrain}," said {companion_name} quietly, as the last long hum faded into the dark.

The story was every bit as good as promised, and the {hero} heard it from the very front, with the rope still warm in one hand.

Afterwards, the two of them took the troublemaking seed-pod and planted it in the soft ground beside the {object_motif}, patting it down like a small apology.

"It stopped a hundred-year bell," said the {hero} sleepily. "That's a strong seed. What do you suppose a bell-seed grows into?"

"Something worth ringing about," said {companion_name}. "Morning can start finding out."

{refrain}.`,
        scriptTemplate: `In {setting}, story-night worked like this: at dusk, somebody rang the great bronze bell, and the sound rolled out warm and deep into every corner, and everyone — the busy, the sleepy, the halfway-through-dinner — put things down and came to the story circle. The bell had gathered story-night for a hundred years without missing once. And tonight, of all nights, with the best story of the season promised, {child_name} the {hero} had been given the honour of ringing it.

{child_name} took hold of the rope, grinned, and pulled.

The bell tipped. No ring.

{child_name} pulled harder. The bell swung in a slow, dignified, completely silent arc. {child_name} pulled with everything — both feet off the ground, swinging like laundry in a storm. Nothing. One more mighty go: a running start, a tremendous heave — and the rope slipped, and {child_name} sat down so suddenly that a nearby bird laughed.

"Ring it harder!" someone called helpfully from the gathering dark.

"Harder is all I've been doing!" {child_name} called back, and slumped against the bell post. Everything in {child_name} wanted to announce that the bell was broken and story-night was cancelled. But the old echo stone had taught a smaller, stubborner sentence, and {child_name} said it instead. "I can't ring it — not so far. Not so far means keep thinking."

{companion_name} had wandered over and was peering up at the silent bell with their head on one side. "Hmm," was all they offered. "The big one is stubborn tonight. Funny — its little sister never gets stuck."

The little sister. {child_name} had forgotten it was even there: a tiny plain chime, hardly bigger than a leaf, hanging beside the great bell on its own thin thread. Nobody ever rang it. Nobody needed to. It rang itself, silver and small, whenever an evening breeze came through.

And just then, an evening breeze came through. Quick — watch the little chime, closely now. Which way does it move? Not down. Nobody is pulling it down. It swings sideways.

{child_name} sat up straight. "The breeze never pulls," {child_name} said slowly. "Not once. It just swishes past, sideways — and the chime sings every single time." {child_name} looked at the rope, the same rope everyone had always pulled, in the same straight-down way, and then back at the drifting chime. "I've been trying one way all evening, just harder and harder each time. But harder isn't the only door. This bell doesn't want a harder way. It wants a different way."

So instead of pulling anything, {child_name} went right up under the great bell and peeked inside — which, in a hundred years, apparently nobody had thought to do while yanking on the rope. And there it was. A smooth, round seed-pod, wedged snug between the clapper and the rim, holding the bell's voice like a held breath. Every furious downward pull had rocked the clapper straight into the pod and jammed it tighter. The harder way had been making things worse all along.

{child_name} reached up and gave the bell the gentlest sideways nudge — the breeze's way, the chime's way. The pod wobbled. Rolled. Dropped out into the grass, round and shiny and completely unashamed of itself.

Dong! The great bell found its voice all at once, so deep and warm that the ground hummed and the stars seemed to lean in. Dong! Dong! Lanterns came bobbing from every direction, the story circle filled, and {child_name} — sideways-thinker, bell-freer — rang the gathering in.

"{refrain}," said {companion_name} quietly, as the last long hum faded into the dark.

The story was every bit as good as promised, and {child_name} heard it from the very front, with the rope still warm in one hand.

Afterwards, the two of them took the troublemaking seed-pod and planted it in the soft ground beside the {object_motif}, patting it down like a small apology.

"It stopped a hundred-year bell," said {child_name} sleepily. "That's a strong seed. What do you suppose a bell-seed grows into?"

"Something worth ringing about," said {companion_name}. "Morning can start finding out."

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `In {setting} there was exactly one sound that outranked everything, and it was the great bronze bell at dusk on story-night. When it rang, the sound rolled out warm and deep into every corner, and everyone — the busy, the important, the halfway-through-dinner — put their evening down and came to the story circle, because the bell had been gathering story-night for a hundred years and had never once been argued with. Tonight was the best story of the season. And tonight, for the first time ever, the {hero} had been given the honour of ringing the bell.

The {hero} took the rope with both hands, savoured the moment appropriately, and pulled.

The bell tipped, swung, and said nothing.

Now, the {hero} belonged, at this point in life, to the ancient and popular theory that when a thing does not work, you are simply not doing it hard enough. So the {hero} pulled harder. The bell swung in a long, dignified, perfectly silent arc, like a grandparent refusing to be hurried. The {hero} pulled with both feet off the ground. Nothing. The {hero} took a running start and hauled with such conviction that the rope slipped, the evening rotated, and the {hero} landed seated in the grass with the particular dignity of somebody who meant to do that.

"Try harder!" called a helpful voice from the gathering dusk.

"Harder," said the {hero} grimly, "is the only thing I have tried." And there it was, the tempting announcement, ready-made: the bell is broken, story-night is off. But the {hero} had stood by an echo stone once and learned a smaller, stubborner sentence, and said that one instead. "I can't ring it — not so far. And not so far means the thinking isn't finished."

{companion_name} had drifted over and was studying the silent bell with their head tipped to one side. They offered no advice whatsoever, which was their way. "Hmm," they said. "The big one is stubborn tonight. Funny — its little sister never gets stuck."

The little sister. The {hero} had honestly forgotten it existed: a tiny plain chime, no bigger than a leaf, hanging on its own thin thread beside the great bell. It was the least impressive object in {setting}. Nobody rang it. Nobody had ever needed to — it rang itself, small and silver, every time an evening breeze wandered through.

And just then, an evening breeze wandered through. Quick — eyes on the little chime. Watch what the breeze does to it. Does it pull it down, the way everyone pulls the rope? No. It barely touches it at all. It slips past sideways — and the chime sings.

The {hero} sat up very slowly, the way you do when an idea is climbing out of the grass in front of you. "The breeze never pulls," the {hero} said. "It has never pulled once in its life. It goes past sideways, and that little chime has sung every evening for a hundred years, while we stand here hauling down on the big one like we're trying to uproot it." The {hero} looked at the rope — the same rope, the same straight-down heave, generation after generation — and then at the drifting, shining chime. "Harder was never the only door. It was just the nearest one. This bell doesn't want a harder way. It wants a different way."

So instead of pulling anything at all, the {hero} walked under the great bell and looked up inside it — which, in a century of story-nights, nobody had apparently thought to do while yanking on the rope. And there was the whole mystery, sitting snug as a secret: a smooth round seed-pod, wedged tight between the clapper and the rim, holding the bell's enormous voice like a held breath. Every mighty downward pull had swung the clapper straight into the pod and jammed it tighter. All evening, the harder way had been personally making things worse.

The {hero} reached up and gave the bell the gentlest push sideways — the breeze's way. The pod wobbled, rolled along the rim, and dropped into the grass, round and glossy and entirely unashamed of the chaos it had caused.

Dong! The great bell found its voice all at once, so deep and warm that the ground hummed and the first stars seemed to lean closer. Dong! Dong! Lanterns came bobbing from every direction, the circle filled with everyone in the world, and the {hero} — sideways-thinker, freer of bells — rang story-night in with both hands.

"{refrain}," said {companion_name} quietly, under the last long hum.

The story was better than promised, and the {hero} heard it from the very front, rope-warm hands folded, privately rewriting the ancient theory: when a thing does not work, do it differently before you do it harder.

Afterwards, the two of them planted the troublemaking seed-pod in the soft ground beside the {object_motif}, patting it down like a small apology.

"It silenced a hundred-year bell," the {hero} said, half asleep. "Imagine what it'll do as a tree."

"Mm," said {companion_name}. "Morning can start finding out."

{refrain}.`,
        scriptTemplate: `In {setting} there was exactly one sound that outranked everything, and it was the great bronze bell at dusk on story-night. When it rang, the sound rolled out warm and deep into every corner, and everyone — the busy, the important, the halfway-through-dinner — put their evening down and came to the story circle, because the bell had been gathering story-night for a hundred years and had never once been argued with. Tonight was the best story of the season. And tonight, for the first time ever, {child_name} the {hero} had been given the honour of ringing the bell.

{child_name} took the rope with both hands, savoured the moment appropriately, and pulled.

The bell tipped, swung, and said nothing.

Now, {child_name} belonged, at this point in life, to the ancient and popular theory that when a thing does not work, you are simply not doing it hard enough. So {child_name} pulled harder. The bell swung in a long, dignified, perfectly silent arc, like a grandparent refusing to be hurried. {child_name} pulled with both feet off the ground. Nothing. {child_name} took a running start and hauled with such conviction that the rope slipped, the evening rotated, and {child_name} landed seated in the grass with the particular dignity of somebody who meant to do that.

"Try harder!" called a helpful voice from the gathering dusk.

"Harder," said {child_name} grimly, "is the only thing I have tried." And there it was, the tempting announcement, ready-made: the bell is broken, story-night is off. But {child_name} had stood by an echo stone once and learned a smaller, stubborner sentence, and said that one instead. "I can't ring it — not so far. And not so far means the thinking isn't finished."

{companion_name} had drifted over and was studying the silent bell with their head tipped to one side. They offered no advice whatsoever, which was their way. "Hmm," they said. "The big one is stubborn tonight. Funny — its little sister never gets stuck."

The little sister. {child_name} had honestly forgotten it existed: a tiny plain chime, no bigger than a leaf, hanging on its own thin thread beside the great bell. It was the least impressive object in {setting}. Nobody rang it. Nobody had ever needed to — it rang itself, small and silver, every time an evening breeze wandered through.

And just then, an evening breeze wandered through. Quick — eyes on the little chime. Watch what the breeze does to it. Does it pull it down, the way everyone pulls the rope? No. It barely touches it at all. It slips past sideways — and the chime sings.

{child_name} sat up very slowly, the way you do when an idea is climbing out of the grass in front of you. "The breeze never pulls," {child_name} said. "It has never pulled once in its life. It goes past sideways, and that little chime has sung every evening for a hundred years, while we stand here hauling down on the big one like we're trying to uproot it." {child_name} looked at the rope — the same rope, the same straight-down heave, generation after generation — and then at the drifting, shining chime. "Harder was never the only door. It was just the nearest one. This bell doesn't want a harder way. It wants a different way."

So instead of pulling anything at all, {child_name} walked under the great bell and looked up inside it — which, in a century of story-nights, nobody had apparently thought to do while yanking on the rope. And there was the whole mystery, sitting snug as a secret: a smooth round seed-pod, wedged tight between the clapper and the rim, holding the bell's enormous voice like a held breath. Every mighty downward pull had swung the clapper straight into the pod and jammed it tighter. All evening, the harder way had been personally making things worse.

{child_name} reached up and gave the bell the gentlest push sideways — the breeze's way. The pod wobbled, rolled along the rim, and dropped into the grass, round and glossy and entirely unashamed of the chaos it had caused.

Dong! The great bell found its voice all at once, so deep and warm that the ground hummed and the first stars seemed to lean closer. Dong! Dong! Lanterns came bobbing from every direction, the circle filled with everyone in the world, and {child_name} — sideways-thinker, freer of bells — rang story-night in with both hands.

"{refrain}," said {companion_name} quietly, under the last long hum.

The story was better than promised, and {child_name} heard it from the very front, rope-warm hands folded, privately rewriting the ancient theory: when a thing does not work, do it differently before you do it harder.

Afterwards, the two of them planted the troublemaking seed-pod in the soft ground beside the {object_motif}, patting it down like a small apology.

"It silenced a hundred-year bell," {child_name} said, half asleep. "Imagine what it'll do as a tree."

"Mm," said {companion_name}. "Morning can start finding out."

{refrain}.`,
      },
    },
    audioTemplate: `It was story-night in {setting}. When the big bronze bell rang at dusk, everyone stopped whatever they were doing and came to the story circle. The {hero} had waited all week — tonight's story was supposed to be the best one yet.

But tonight, the bell would not ring.

The {hero} pulled the rope. The bell tipped, but no ring came. The {hero} pulled harder, feet right off the ground. Silence. The {hero} took a running start and pulled so hard that the rope slipped and the {hero} sat down very suddenly.

"I can't ring it," puffed the {hero}. Then the {hero} remembered the echo stone. "No. I can't ring it so far. Let me think."

{companion_name} was peering up at the bell too. "Hmm," was all they said. "The big bell is stubborn tonight. Its little sister never gets stuck."

The little sister was a tiny plain chime that hung beside the great bell. Nobody ever rang it. It rang itself, whenever the evening breeze came by.

And just then, a breeze did. Watch the little chime closely. Which way does it swing? Not down. Sideways.

The {hero} stared. "The breeze never pulls. It swishes sideways — and the chime sings every single time." The {hero} looked at the rope, the same rope everyone pulled, the same straight-down way. "I've been trying one way, just harder and harder. This bell doesn't want a harder way. It wants a different way!"

So the {hero} went up close and peeked inside the bell. There, wedged between the clapper and the rim, sat a smooth round seed-pod. Every hard downward pull had only jammed it tighter.

The {hero} gave the bell one soft, sideways nudge. The pod wobbled, rolled, and dropped out, free.

Dong! The great bell sang, so deep and warm the ground hummed. Dong! Dong! Lights bobbed out from every corner, everyone gathered, and the {hero} got to ring the bell for the whole story circle.

"{refrain}," said {companion_name}, as the last hum faded into the dark.

The story was just as good as promised, and twice as long.

Afterwards, the two of them planted the troublemaking seed-pod in the soft ground beside the {object_motif}, and patted it in.

"What does a bell-seed grow into?" wondered the {hero}, yawning.

"Morning can start finding out," said {companion_name}.

{refrain}.`,
    scriptTemplate: `It was story-night in {setting}. When the big bronze bell rang at dusk, everyone stopped whatever they were doing and came to the story circle. {child_name} the {hero} had waited all week — tonight's story was supposed to be the best one yet.

But tonight, the bell would not ring.

{child_name} pulled the rope. The bell tipped, but no ring came. {child_name} pulled harder, feet right off the ground. Silence. {child_name} took a running start and pulled so hard that the rope slipped and {child_name} sat down very suddenly.

"I can't ring it," puffed {child_name}. Then {child_name} remembered the echo stone. "No. I can't ring it so far. Let me think."

{companion_name} was peering up at the bell too. "Hmm," was all they said. "The big bell is stubborn tonight. Its little sister never gets stuck."

The little sister was a tiny plain chime that hung beside the great bell. Nobody ever rang it. It rang itself, whenever the evening breeze came by.

And just then, a breeze did. Watch the little chime closely. Which way does it swing? Not down. Sideways.

{child_name} stared. "The breeze never pulls. It swishes sideways — and the chime sings every single time." {child_name} looked at the rope, the same rope everyone pulled, the same straight-down way. "I've been trying one way, just harder and harder. This bell doesn't want a harder way. It wants a different way!"

So {child_name} went up close and peeked inside the bell. There, wedged between the clapper and the rim, sat a smooth round seed-pod. Every hard downward pull had only jammed it tighter.

{child_name} gave the bell one soft, sideways nudge. The pod wobbled, rolled, and dropped out, free.

Dong! The great bell sang, so deep and warm the ground hummed. Dong! Dong! Lights bobbed out from every corner, everyone gathered, and {child_name} got to ring the bell for the whole story circle.

"{refrain}," said {companion_name}, as the last hum faded into the dark.

The story was just as good as promised, and twice as long.

Afterwards, the two of them planted the troublemaking seed-pod in the soft ground beside the {object_motif}, and patted it in.

"What does a bell-seed grow into?" wondered {child_name}, yawning.

"Morning can start finding out," said {companion_name}.

{refrain}.`,
  },
  {
    ordinal: 5,
    title: "The Midnight Riser",
    concept: "Falling down and choosing to get back up",
    callback: "Try a different way (Level 4)",
    ageFloor: 5,
    summary: "After every windy day, the little sprouts along the path lie bent flat — and by morning they are always standing again. Someone must lift them in the night, and nobody has ever seen who. Tonight the hero stays up to catch the Midnight Riser, and discovers the gentlest secret of all: nobody comes. Growing things raise themselves — and so, all this time, has the hero.",
    teachingNote: "This is the capstone: a child who has learned that hard is normal, that \"can't\" means \"not yet\", that mistakes inform and that ways can change, now sees getting back up not as a duty but as something already inside them.",
    learningBeat: "Rising once more",
    ageVariants: {
      '3-4': {
        audioTemplate: `All day, the wind had huffed through {setting}. Now the little sprouts along the path lay bent right over. Even the {object_motif} was bent flat.

But after windy days, the sprouts always stand up by morning. Someone lifts them in the night. Nobody has ever seen who!

"Tonight I will catch the Riser," said the {hero}.

The {hero} hid behind a leaf. Too small! A-choo! The sneeze shook everything.

The {hero} hid somewhere bigger, and watched, and watched... and fell asleep. Whoops.

"Try a different way," whispered the {hero}. So the {hero} lay down right beside the {object_motif}, nose to leaf.

{companion_name} snuggled close. "Hmm," they said. "Some helpers are very shy. Or very close."

Watch the little sprout. Very still. Is it moving? Yes! Slower than slow, it was lifting itself!

"Nobody comes!" whispered the {hero}. "Growing things lift themselves. Falling isn't the end. The secret is rising once more!"

Just then a puff of wind tipped the {hero} over. The {hero} laughed — and rose once more, slow as a sprout.

"{refrain}," said {companion_name}.

One, two, three sprouts stood tall again. One stayed curled, still sleepy.

Tomorrow, the {hero} would visit that one first.

{refrain}.`,
        scriptTemplate: `All day, the wind had huffed through {setting}. Now the little sprouts along the path lay bent right over. Even the {object_motif} was bent flat.

But after windy days, the sprouts always stand up by morning. Someone lifts them in the night. Nobody has ever seen who!

"Tonight I will catch the Riser," said {child_name} the {hero}.

{child_name} hid behind a leaf. Too small! A-choo! The sneeze shook everything.

{child_name} hid somewhere bigger, and watched, and watched... and fell asleep. Whoops.

"Try a different way," whispered {child_name}. So {child_name} lay down right beside the {object_motif}, nose to leaf.

{companion_name} snuggled close. "Hmm," they said. "Some helpers are very shy. Or very close."

Watch the little sprout. Very still. Is it moving? Yes! Slower than slow, it was lifting itself!

"Nobody comes!" whispered {child_name}. "Growing things lift themselves. Falling isn't the end. The secret is rising once more!"

Just then a puff of wind tipped {child_name} over. {child_name} laughed — and rose once more, slow as a sprout.

"{refrain}," said {companion_name}.

One, two, three sprouts stood tall again. One stayed curled, still sleepy.

Tomorrow, {child_name} would visit that one first.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `All day the wind had blustered through {setting}. By evening the little sprouts along the path lay bent right over. Even the {object_motif} was bowed flat, leaf to the ground.

But here was the old mystery. After every windy day, the sprouts stood straight by morning. Someone must lift them in the night — and nobody had ever seen who.

"Tonight I catch the Midnight Riser," said the {hero}. "And the {object_motif} gets helped first."

The first hiding place was behind a leaf, which turned out to be smaller than the {hero}. Then dust tickled — a-choo! — a sneeze so mighty it bent a sprout the wind had missed.

The second hiding place was cozy, with a view of the whole path. Too cozy. The {hero} woke later to find three sprouts already standing, and no Riser anywhere. Asleep on watch!

The {hero} almost gave up. Then remembered the bell. "When one way doesn't work," the {hero} muttered, "you try a different way." Stop watching the whole path, then. Watch one sprout. The {hero} lay down flat beside the {object_motif}, nose to leaf, still as a stone.

{companion_name} padded over and settled close. "Hmm," they whispered. "Some helpers are very shy. Or very close."

The moon climbed. Nobody came. No footsteps, no lantern, no Riser at all. But — keep your eyes on the little sprout. Don't blink. Is it... moving?

It was. Slower than slow, softer than soft, the {object_motif} was lifting its own head. No hands helped it. It rose all by itself, slow as the moon.

"Nobody comes," breathed the {hero}. "Nobody ever came. Growing things lift themselves — that's the whole secret. Falling down isn't the end of anything. The secret is rising once more."

"I kept this same watch when I was young," whispered {companion_name}. "I never thought to lie down next to the answer. {refrain}."

Then one last gust romped down the path and bowled the {hero} right over.

The {hero} lay there a moment, laughing at the stars. Then, slow as a sprout, on purpose, the {hero} rose once more — then went down the path with {companion_name}, gently propping the tiredest sprouts.

By moonset, the whole path stood tall. Except one small sprout, still curled, taking its time. Every riser rises at its own speed.

Tomorrow, the {hero} would visit that one first.

{refrain}.`,
        scriptTemplate: `All day the wind had blustered through {setting}. By evening the little sprouts along the path lay bent right over. Even the {object_motif} was bowed flat, leaf to the ground.

But here was the old mystery. After every windy day, the sprouts stood straight by morning. Someone must lift them in the night — and nobody had ever seen who.

"Tonight I catch the Midnight Riser," said {child_name} the {hero}. "And the {object_motif} gets helped first."

The first hiding place was behind a leaf, which turned out to be smaller than {child_name}. Then dust tickled — a-choo! — a sneeze so mighty it bent a sprout the wind had missed.

The second hiding place was cozy, with a view of the whole path. Too cozy. {child_name} woke later to find three sprouts already standing, and no Riser anywhere. Asleep on watch!

{child_name} almost gave up. Then remembered the bell. "When one way doesn't work," {child_name} muttered, "you try a different way." Stop watching the whole path, then. Watch one sprout. {child_name} lay down flat beside the {object_motif}, nose to leaf, still as a stone.

{companion_name} padded over and settled close. "Hmm," they whispered. "Some helpers are very shy. Or very close."

The moon climbed. Nobody came. No footsteps, no lantern, no Riser at all. But — keep your eyes on the little sprout. Don't blink. Is it... moving?

It was. Slower than slow, softer than soft, the {object_motif} was lifting its own head. No hands helped it. It rose all by itself, slow as the moon.

"Nobody comes," breathed {child_name}. "Nobody ever came. Growing things lift themselves — that's the whole secret. Falling down isn't the end of anything. The secret is rising once more."

"I kept this same watch when I was young," whispered {companion_name}. "I never thought to lie down next to the answer. {refrain}."

Then one last gust romped down the path and bowled {child_name} right over.

{child_name} lay there a moment, laughing at the stars. Then, slow as a sprout, on purpose, {child_name} rose once more — then went down the path with {companion_name}, gently propping the tiredest sprouts.

By moonset, the whole path stood tall. Except one small sprout, still curled, taking its time. Every riser rises at its own speed.

Tomorrow, {child_name} would visit that one first.

{refrain}.`,
      },
      '7-8': {
        audioTemplate: `The wind had spent the entire day rearranging {setting}, and by dusk it had a lot to answer for. All along the path, the little sprouts lay bent flat, leaf to the ground, every single one — and worst of all, the {object_motif} was bowed over too, so low it hurt to look at. The {hero} stood over it with clenched everything.

But there was a mystery about windy days, and everybody knew it. However flat the sprouts were blown, by morning they always stood straight again. Always. Someone came in the night and lifted them — someone quick, quiet, and never seen. The grown-ups called it the Midnight Riser and smiled when they said it, and nobody had ever caught so much as a shadow of them.

"Tonight," announced the {hero}, "I catch the Riser. And the {object_motif} gets helped first, before anyone."

The first plan was a hiding place behind a leaf, which turned out to be considerably smaller than the {hero}. While rethinking this, the {hero} breathed in some path-dust. A-choo! The sneeze was so enormous it bent over a sprout the wind had missed.

The second plan was a proper lookout: cozy, sheltered, with a commanding view of the whole path. It was, if anything, too cozy. The {hero} woke later, cheek in the moss, to find three sprouts already standing again and not a Riser in sight. They had come and gone — right past a sleeping guard!

The {hero} was one breath from marching home in disgrace. But the great silent bell had taught its lesson well, and the {hero} said it out loud to the dark: "When one way doesn't work, you don't just do it again angrier. You try a different way." Watching everywhere had failed twice. So: watch one sprout, the one that mattered most. The {hero} lay down flat on the ground beside the {object_motif} — nose to leaf, close enough to count its veins — and went as still as the path.

{companion_name} arrived on quiet feet and settled down alongside without a single question. "Hmm," they whispered, after a while. "Some helpers are very shy. Or very close."

The moon climbed. The path lay silver and still. Nobody came. No footsteps, no lantern-light, no rustle of somebody kind sneaking from sprout to sprout. Nothing at all — except. Keep your eyes on the little sprout now. Don't blink. Is it... moving?

It was moving. Slower than slow, softer than soft, the {object_motif} was lifting its own bowed head. No hands lifted it. No Riser touched it. It was rising by itself. While the {hero} watched, hardly breathing, the little sprout came up from the ground one invisible inch at a time.

"Nobody comes," the {hero} breathed at last. "Nobody has ever come. There is no Midnight Riser — or, no. There are thousands of them. The Riser is inside every growing thing. They rise themselves." And then, arriving all at once like the answer to a question the {hero} hadn't known they were asking: "That's me too. My flopped rolls. My honking calls. My runaway seeds, my silent bell. I fell all season — and I kept standing up again. Falling down was never the end of anything. The whole secret is rising once more."

"I kept this exact watch when I was young," whispered {companion_name}, eyes shining in the moonlight. "Three windy seasons running. I never solved it — I never thought to lie down next to the answer. {refrain}."

And at that precise moment, a final gust of wind came romping down the path, entirely without manners, and bowled the {hero} clean over.

The {hero} lay flat on the moonlit ground and laughed and laughed. Then — slowly, grandly, on purpose, at exactly the speed of a sprout — the {hero} rose once more.

The rest of the night was gentle work. Down the path they went together, the {hero} and {companion_name}, propping the tiredest sprouts with soft earth, straightening the halfway ones, rising alongside the rest. Not doing the rising for them — no one could — just keeping them company on the way up.

By moonset the whole path stood tall and silver. All except one small sprout at the very end, still curled like a comma, taking its time. Every riser rises at its own speed.

Tomorrow, the {hero} decided, drooping happily against {companion_name}, that little one would get the first visit of the day.

{refrain}.`,
        scriptTemplate: `The wind had spent the entire day rearranging {setting}, and by dusk it had a lot to answer for. All along the path, the little sprouts lay bent flat, leaf to the ground, every single one — and worst of all, the {object_motif} was bowed over too, so low it hurt to look at. {child_name} the {hero} stood over it with clenched everything.

But there was a mystery about windy days, and everybody knew it. However flat the sprouts were blown, by morning they always stood straight again. Always. Someone came in the night and lifted them — someone quick, quiet, and never seen. The grown-ups called it the Midnight Riser and smiled when they said it, and nobody had ever caught so much as a shadow of them.

"Tonight," announced {child_name}, "I catch the Riser. And the {object_motif} gets helped first, before anyone."

The first plan was a hiding place behind a leaf, which turned out to be considerably smaller than {child_name}. While rethinking this, {child_name} breathed in some path-dust. A-choo! The sneeze was so enormous it bent over a sprout the wind had missed.

The second plan was a proper lookout: cozy, sheltered, with a commanding view of the whole path. It was, if anything, too cozy. {child_name} woke later, cheek in the moss, to find three sprouts already standing again and not a Riser in sight. They had come and gone — right past a sleeping guard!

{child_name} was one breath from marching home in disgrace. But the great silent bell had taught its lesson well, and {child_name} said it out loud to the dark: "When one way doesn't work, you don't just do it again angrier. You try a different way." Watching everywhere had failed twice. So: watch one sprout, the one that mattered most. {child_name} lay down flat on the ground beside the {object_motif} — nose to leaf, close enough to count its veins — and went as still as the path.

{companion_name} arrived on quiet feet and settled down alongside without a single question. "Hmm," they whispered, after a while. "Some helpers are very shy. Or very close."

The moon climbed. The path lay silver and still. Nobody came. No footsteps, no lantern-light, no rustle of somebody kind sneaking from sprout to sprout. Nothing at all — except. Keep your eyes on the little sprout now. Don't blink. Is it... moving?

It was moving. Slower than slow, softer than soft, the {object_motif} was lifting its own bowed head. No hands lifted it. No Riser touched it. It was rising by itself. While {child_name} watched, hardly breathing, the little sprout came up from the ground one invisible inch at a time.

"Nobody comes," {child_name} breathed at last. "Nobody has ever come. There is no Midnight Riser — or, no. There are thousands of them. The Riser is inside every growing thing. They rise themselves." And then, arriving all at once like the answer to a question {child_name} hadn't known they were asking: "That's me too. My flopped rolls. My honking calls. My runaway seeds, my silent bell. I fell all season — and I kept standing up again. Falling down was never the end of anything. The whole secret is rising once more."

"I kept this exact watch when I was young," whispered {companion_name}, eyes shining in the moonlight. "Three windy seasons running. I never solved it — I never thought to lie down next to the answer. {refrain}."

And at that precise moment, a final gust of wind came romping down the path, entirely without manners, and bowled {child_name} clean over.

{child_name} lay flat on the moonlit ground and laughed and laughed. Then — slowly, grandly, on purpose, at exactly the speed of a sprout — {child_name} rose once more.

The rest of the night was gentle work. Down the path they went together, {child_name} and {companion_name}, propping the tiredest sprouts with soft earth, straightening the halfway ones, rising alongside the rest. Not doing the rising for them — no one could — just keeping them company on the way up.

By moonset the whole path stood tall and silver. All except one small sprout at the very end, still curled like a comma, taking its time. Every riser rises at its own speed.

Tomorrow, {child_name} decided, drooping happily against {companion_name}, that little one would get the first visit of the day.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `The wind had spent the whole day rearranging {setting} to its own taste, and by dusk it had a great deal to answer for. All along the path, the little sprouts lay bent flat, leaf to ground, every last one. Worst of all, the {object_motif} — the {hero}'s favourite thing in the world that could not talk — was bowed over so low it looked folded. The {hero} stood over it, fists and heart both clenched.

Now, everyone knew the mystery of the windy days. It was one of those mysteries so old it had gone soft at the edges. However flat the wind left the sprouts, by morning they always stood straight again. Always. Somebody, therefore, must come in the night and lift them — somebody quick, quiet, endlessly kind, and never once seen. The grown-ups called them the Midnight Riser, and smiled a particular smile when they said it, which the {hero} had always taken for fondness and never once thought to examine.

"Tonight," the {hero} announced to the flattened path, "I catch the Riser. And the {object_motif} gets helped first."

Every great stakeout needs a plan, and the {hero}'s first plan was a hiding spot behind a leaf that turned out to be roughly forty percent the size of the {hero}. While reconsidering, the {hero} inhaled a quantity of path-dust. A-choo! The sneeze was so enormous it flattened a sprout the wind had missed. The {hero} apologised to it and moved on.

The second plan was a proper lookout — sheltered, comfortable, commanding a view of the entire path. It commanded it beautifully for about an hour, at which point the watch developed a flaw, and the flaw was sleep. The {hero} woke with one cheek printed by moss to find three sprouts already standing serenely upright and no Riser anywhere. They had strolled directly past a snoring guard and got clean away with being kind.

It was the sort of moment where an evening decides what it is going to be. The {hero} very nearly marched home. But a certain silent bell had taught a certain lesson, and the {hero} recited it to the dark instead of quitting: "When one way doesn't work, you don't do the same thing again, angrier. You try a different way." Watching everything had failed twice — once by sneeze, once by sleep. Very well. Watch one thing. The {hero} walked back to the {object_motif}, lay down flat on the cold ground beside it, nose to leaf, and went as still as the path.

{companion_name} materialised alongside in that soundless way of theirs and settled in without one question, as if lying in the dirt at midnight were a perfectly ordinary appointment. After a long while, they whispered, "Hmm. Some helpers are very shy. Or very close."

The moon climbed. The path lay silver. Nobody came. No footsteps, no hooded stranger, no lantern bobbing from sprout to sprout. Nothing — except. Eyes on the little sprout now. Absolutely still. Don't even blink. Is it... moving?

It was moving. Slower than slow, softer than falling dust, the {object_motif} was raising its own bowed head. Nothing touched it. Nothing helped it. It rose the way the moon rises, one invisible inch at a time, while the {hero} lay there not breathing.

"Nobody comes," the {hero} whispered finally. "Nobody has ever come. That's the secret the grown-ups smile about. There is no Midnight Riser — or rather, there are thousands. Every growing thing carries its own. They rise themselves." And then the second half of the thought landed, quietly, like the last piece of a long puzzle: "That's what I've been doing all season. The flopped rolls at the arch. The honks at the echo stone. The spilled seeds. The bell that wouldn't ring. I fell over and over — and every single time, something in me stood back up. I was looking for the Riser out here. Falling was never the end of anything. The whole secret is rising once more."

{companion_name} was quiet for a moment, and when they spoke their voice had gone soft and young. "I kept this same watch, you know. Three windy seasons, when I was small. I never solved it. It never once occurred to me to lie down next to the answer." They touched the rising sprout, gentler than the wind. "{refrain}."

At which point, because the night had a sense of humour, one final gust came romping down the path and bowled the {hero} clean over.

The {hero} lay flat under the stars and laughed until the laughing wore itself out. Then — slowly, ceremonially, at the exact speed of a sprout — the {hero} rose once more, on purpose.

The rest of the night was quiet work, the best kind. Down the moonlit path they went, the {hero} and {companion_name}, banking soft earth around the tiredest sprouts, steadying the halfway ones, rising alongside the rest. Not lifting them — that was never anybody's job — just keeping them company on the way up.

By moonset the path stood tall and silver, end to end. All but one small sprout at the very last bend, still curled like a comma, taking its time. Every riser rises at its own speed. That, the {hero} understood now, was allowed.

Tomorrow, that stubborn little one would get the first visit of the day.

{refrain}.`,
        scriptTemplate: `The wind had spent the whole day rearranging {setting} to its own taste, and by dusk it had a great deal to answer for. All along the path, the little sprouts lay bent flat, leaf to ground, every last one. Worst of all, the {object_motif} — {child_name}'s favourite thing in the world that could not talk — was bowed over so low it looked folded. {child_name} the {hero} stood over it, fists and heart both clenched.

Now, everyone knew the mystery of the windy days. It was one of those mysteries so old it had gone soft at the edges. However flat the wind left the sprouts, by morning they always stood straight again. Always. Somebody, therefore, must come in the night and lift them — somebody quick, quiet, endlessly kind, and never once seen. The grown-ups called them the Midnight Riser, and smiled a particular smile when they said it, which {child_name} had always taken for fondness and never once thought to examine.

"Tonight," {child_name} announced to the flattened path, "I catch the Riser. And the {object_motif} gets helped first."

Every great stakeout needs a plan, and {child_name}'s first plan was a hiding spot behind a leaf that turned out to be roughly forty percent the size of {child_name}. While reconsidering, {child_name} inhaled a quantity of path-dust. A-choo! The sneeze was so enormous it flattened a sprout the wind had missed. {child_name} apologised to it and moved on.

The second plan was a proper lookout — sheltered, comfortable, commanding a view of the entire path. It commanded it beautifully for about an hour, at which point the watch developed a flaw, and the flaw was sleep. {child_name} woke with one cheek printed by moss to find three sprouts already standing serenely upright and no Riser anywhere. They had strolled directly past a snoring guard and got clean away with being kind.

It was the sort of moment where an evening decides what it is going to be. {child_name} very nearly marched home. But a certain silent bell had taught a certain lesson, and {child_name} recited it to the dark instead of quitting: "When one way doesn't work, you don't do the same thing again, angrier. You try a different way." Watching everything had failed twice — once by sneeze, once by sleep. Very well. Watch one thing. {child_name} walked back to the {object_motif}, lay down flat on the cold ground beside it, nose to leaf, and went as still as the path.

{companion_name} materialised alongside in that soundless way of theirs and settled in without one question, as if lying in the dirt at midnight were a perfectly ordinary appointment. After a long while, they whispered, "Hmm. Some helpers are very shy. Or very close."

The moon climbed. The path lay silver. Nobody came. No footsteps, no hooded stranger, no lantern bobbing from sprout to sprout. Nothing — except. Eyes on the little sprout now. Absolutely still. Don't even blink. Is it... moving?

It was moving. Slower than slow, softer than falling dust, the {object_motif} was raising its own bowed head. Nothing touched it. Nothing helped it. It rose the way the moon rises, one invisible inch at a time, while {child_name} lay there not breathing.

"Nobody comes," {child_name} whispered finally. "Nobody has ever come. That's the secret the grown-ups smile about. There is no Midnight Riser — or rather, there are thousands. Every growing thing carries its own. They rise themselves." And then the second half of the thought landed, quietly, like the last piece of a long puzzle: "That's what I've been doing all season. The flopped rolls at the arch. The honks at the echo stone. The spilled seeds. The bell that wouldn't ring. I fell over and over — and every single time, something in me stood back up. I was looking for the Riser out here. Falling was never the end of anything. The whole secret is rising once more."

{companion_name} was quiet for a moment, and when they spoke their voice had gone soft and young. "I kept this same watch, you know. Three windy seasons, when I was small. I never solved it. It never once occurred to me to lie down next to the answer." They touched the rising sprout, gentler than the wind. "{refrain}."

At which point, because the night had a sense of humour, one final gust came romping down the path and bowled {child_name} clean over.

{child_name} lay flat under the stars and laughed until the laughing wore itself out. Then — slowly, ceremonially, at the exact speed of a sprout — {child_name} rose once more, on purpose.

The rest of the night was quiet work, the best kind. Down the moonlit path they went, {child_name} and {companion_name}, banking soft earth around the tiredest sprouts, steadying the halfway ones, rising alongside the rest. Not lifting them — that was never anybody's job — just keeping them company on the way up.

By moonset the path stood tall and silver, end to end. All but one small sprout at the very last bend, still curled like a comma, taking its time. Every riser rises at its own speed. That, {child_name} understood now, was allowed.

Tomorrow, that stubborn little one would get the first visit of the day.

{refrain}.`,
      },
    },
    audioTemplate: `All day the wind had blustered through {setting}. By evening the little sprouts along the path lay bent right over. Even the {object_motif} was bowed flat, leaf to the ground.

But here was the old mystery. After every windy day, the sprouts stood straight by morning. Someone must lift them in the night — and nobody had ever seen who.

"Tonight I catch the Midnight Riser," said the {hero}. "And the {object_motif} gets helped first."

The first hiding place was behind a leaf, which turned out to be smaller than the {hero}. Then dust tickled — a-choo! — a sneeze so mighty it bent a sprout the wind had missed.

The second hiding place was cozy, with a view of the whole path. Too cozy. The {hero} woke later to find three sprouts already standing, and no Riser anywhere. Asleep on watch!

The {hero} almost gave up. Then remembered the bell. "When one way doesn't work," the {hero} muttered, "you try a different way." Stop watching the whole path, then. Watch one sprout. The {hero} lay down flat beside the {object_motif}, nose to leaf, still as a stone.

{companion_name} padded over and settled close. "Hmm," they whispered. "Some helpers are very shy. Or very close."

The moon climbed. Nobody came. No footsteps, no lantern, no Riser at all. But — keep your eyes on the little sprout. Don't blink. Is it... moving?

It was. Slower than slow, softer than soft, the {object_motif} was lifting its own head. No hands helped it. It rose all by itself, slow as the moon.

"Nobody comes," breathed the {hero}. "Nobody ever came. Growing things lift themselves — that's the whole secret. Falling down isn't the end of anything. The secret is rising once more."

"I kept this same watch when I was young," whispered {companion_name}. "I never thought to lie down next to the answer. {refrain}."

Then one last gust romped down the path and bowled the {hero} right over.

The {hero} lay there a moment, laughing at the stars. Then, slow as a sprout, on purpose, the {hero} rose once more — then went down the path with {companion_name}, gently propping the tiredest sprouts.

By moonset, the whole path stood tall. Except one small sprout, still curled, taking its time. Every riser rises at its own speed.

Tomorrow, the {hero} would visit that one first.

{refrain}.`,
    scriptTemplate: `All day the wind had blustered through {setting}. By evening the little sprouts along the path lay bent right over. Even the {object_motif} was bowed flat, leaf to the ground.

But here was the old mystery. After every windy day, the sprouts stood straight by morning. Someone must lift them in the night — and nobody had ever seen who.

"Tonight I catch the Midnight Riser," said {child_name} the {hero}. "And the {object_motif} gets helped first."

The first hiding place was behind a leaf, which turned out to be smaller than {child_name}. Then dust tickled — a-choo! — a sneeze so mighty it bent a sprout the wind had missed.

The second hiding place was cozy, with a view of the whole path. Too cozy. {child_name} woke later to find three sprouts already standing, and no Riser anywhere. Asleep on watch!

{child_name} almost gave up. Then remembered the bell. "When one way doesn't work," {child_name} muttered, "you try a different way." Stop watching the whole path, then. Watch one sprout. {child_name} lay down flat beside the {object_motif}, nose to leaf, still as a stone.

{companion_name} padded over and settled close. "Hmm," they whispered. "Some helpers are very shy. Or very close."

The moon climbed. Nobody came. No footsteps, no lantern, no Riser at all. But — keep your eyes on the little sprout. Don't blink. Is it... moving?

It was. Slower than slow, softer than soft, the {object_motif} was lifting its own head. No hands helped it. It rose all by itself, slow as the moon.

"Nobody comes," breathed {child_name}. "Nobody ever came. Growing things lift themselves — that's the whole secret. Falling down isn't the end of anything. The secret is rising once more."

"I kept this same watch when I was young," whispered {companion_name}. "I never thought to lie down next to the answer. {refrain}."

Then one last gust romped down the path and bowled {child_name} right over.

{child_name} lay there a moment, laughing at the stars. Then, slow as a sprout, on purpose, {child_name} rose once more — then went down the path with {companion_name}, gently propping the tiredest sprouts.

By moonset, the whole path stood tall. Except one small sprout, still curled, taking its time. Every riser rises at its own speed.

Tomorrow, {child_name} would visit that one first.

{refrain}.`,
  },
]
