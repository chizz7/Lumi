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
    ordinal: 1, title: "The Light in Three Places",
    concept: "Doing one thing fully before starting the next", callback: null, ageFloor: 3,
    summary: "Every night at moonrise, a tiny light blinks somewhere out in the dark — and tonight it blinks from three places at once. Chasing all three at the same time catches none of them. Only when the hero sits still and watches one place fully does the secret come out: two of the lights are reflections, and the real one only shows itself to someone giving it their whole attention.",
    teachingNote: "Attention is a muscle: giving one thing your whole focus — and only then moving to the next — is the first habit every other focus skill builds on.",
    learningBeat: "One thing, then the next",
    ageVariants: {
  '3-4': {
    audioTemplate: `Just after moonrise, a tiny light blinked in {setting}. Blink. Blink. Pop!

The {hero} wanted to find it and say hello.

But tonight there were three lights! Count them. One. Two. Three!

The {hero} ran to the first light. Blink — the second flashed. The {hero} ran to the second. Blink — the third flashed! The {hero} ran round and round. Bump! Right into the pebbles {companion_name} was sorting.

All three lights went out.

'Hmm,' said {companion_name}. 'I only see it when I watch one thing.'

The {hero} sat still and watched one light. Only one.

Look closely. Two lights blink at the same time. Can you see it too? Twins!

'Oh!' said the {hero}. 'Two are just reflections! There is one little light. One thing, then the next!'

The {hero} watched the real light. Out came a tiny glowing friend!

It floated close. It landed beside the {object_motif}. It blinked slow, and slower.

'{refrain},' whispered {companion_name}.

The little friend went to sleep. The {hero} felt sleepy too. Tomorrow it might show its daytime bed.

Soft light. Slow blinks. Goodnight.

{refrain}.`,
    scriptTemplate: `Just after moonrise, a tiny light blinked in {setting}. Blink. Blink. Pop!

{child_name} the {hero} wanted to find it and say hello.

But tonight there were three lights! Count them. One. Two. Three!

{child_name} ran to the first light. Blink — the second flashed. {child_name} ran to the second. Blink — the third flashed! {child_name} ran round and round. Bump! Right into the pebbles {companion_name} was sorting.

All three lights went out.

'Hmm,' said {companion_name}. 'I only see it when I watch one thing.'

{child_name} sat still and watched one light. Only one.

Look closely. Two lights blink at the same time. Can you see it too? Twins!

'Oh!' said {child_name}. 'Two are just reflections! There is one little light. One thing, then the next!'

{child_name} watched the real light. Out came a tiny glowing friend!

It floated close. It landed beside the {object_motif}. It blinked slow, and slower.

'{refrain},' whispered {companion_name}.

The little friend went to sleep. {child_name} felt sleepy too. Tomorrow it might show its daytime bed.

Soft light. Slow blinks. Goodnight.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Just after moonrise, a tiny light blinked in {setting}. Blink. Blink. Pop! Then it was gone.

The {hero} had watched it from bed for seven nights, and tonight the {hero} wanted one thing with all their heart: to find that little light and say hello before the moon climbed too high. It only ever blinked while the moon was low.

But tonight something odd was waiting. There was not one light. There were three. One blinked by the big smooth stone. One blinked out on the still pool. One blinked in the shadowy nook.

'Three!' said the {hero}. 'I will visit them all at once!'

Off the {hero} dashed toward the stone. Blink — the pool light flashed. The {hero} spun and rushed for the pool. Blink — the nook light flickered. The {hero} turned again, and again, faster and faster, until — bump! — the {hero} skidded right through the tidy pile of pebbles {companion_name} had spent all evening sorting, and stopped right where the chase began.

All three lights went dark at once.

'I ran fast enough for three,' the {hero} puffed, 'and I said hello to none.'

'Hmm,' said {companion_name}, calmly restacking pebbles. 'I only ever see it when I am busy watching one thing.'

So the {hero} tried something new. The {hero} sat very still and watched only the pool. Not the stone. Not the nook. Just the pool.

And the stillness showed a secret. Lean close and watch too. The pool light and the stone light blink at exactly the same moment. Can you see it too? Twins.

'Oh,' whispered the {hero}. 'Those two are only reflections. There was one little light all along! One thing, then the next — watch one thing all the way, and it tells you everything.'

The {hero} turned, gently now, to the shadowy nook. And out floated the real light: a tiny glowing creature, small as a thumbprint, blinking hello.

The {hero} kept perfectly still. The little light drifted closer, circled once, twice, and settled beside the {object_motif}, blinking slower and slower until the two glows matched.

'{refrain},' murmured {companion_name} softly.

The moon climbed high. The little light dimmed to a sleepy shimmer. Tomorrow, perhaps, it would show the {hero} where it sleeps in the daytime. That secret could wait.

Warm dark. Slow blinks.

{refrain}.`,
    scriptTemplate: `Just after moonrise, a tiny light blinked in {setting}. Blink. Blink. Pop! Then it was gone.

{child_name} the {hero} had watched it from bed for seven nights, and tonight {child_name} wanted one thing with all their heart: to find that little light and say hello before the moon climbed too high. It only ever blinked while the moon was low.

But tonight something odd was waiting. There was not one light. There were three. One blinked by the big smooth stone. One blinked out on the still pool. One blinked in the shadowy nook.

'Three!' said {child_name}. 'I will visit them all at once!'

Off {child_name} dashed toward the stone. Blink — the pool light flashed. {child_name} spun and rushed for the pool. Blink — the nook light flickered. {child_name} turned again, and again, faster and faster, until — bump! — {child_name} skidded right through the tidy pile of pebbles {companion_name} had spent all evening sorting, and stopped right where the chase began.

All three lights went dark at once.

'I ran fast enough for three,' {child_name} puffed, 'and I said hello to none.'

'Hmm,' said {companion_name}, calmly restacking pebbles. 'I only ever see it when I am busy watching one thing.'

So {child_name} tried something new. {child_name} sat very still and watched only the pool. Not the stone. Not the nook. Just the pool.

And the stillness showed a secret. Lean close and watch too. The pool light and the stone light blink at exactly the same moment. Can you see it too? Twins.

'Oh,' whispered {child_name}. 'Those two are only reflections. There was one little light all along! One thing, then the next — watch one thing all the way, and it tells you everything.'

{child_name} turned, gently now, to the shadowy nook. And out floated the real light: a tiny glowing creature, small as a thumbprint, blinking hello.

{child_name} kept perfectly still. The little light drifted closer, circled once, twice, and settled beside the {object_motif}, blinking slower and slower until the two glows matched.

'{refrain},' murmured {companion_name} softly.

The moon climbed high. The little light dimmed to a sleepy shimmer. Tomorrow, perhaps, it would show {child_name} where it sleeps in the daytime. That secret could wait.

Warm dark. Slow blinks.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `For seven nights running, a tiny light had blinked in {setting}, always just after moonrise, always for a little while, and always gone before anyone got near. Blink. Blink. Pop! Then nothing.

The {hero} had watched it from bed every one of those nights, guessing at it. A fallen star, maybe. A lantern the size of a berry. Tonight the {hero} had a plan and a firm, warm want: be out there at moonrise, find the little light, and say hello, properly, before the moon climbed too high. It never blinked once the moon was high.

But the night had a surprise ready. When the moon lifted and the first blink came, it did not come from one place. It came from three. One light blinked beside the big smooth stone. One blinked out on the still pool. One blinked deep in the shadowy nook, low and small.

'Three,' breathed the {hero}. 'Three lights! I thought I was lucky to get one. I'll visit them all — all at once, before any of them can leave.'

That was the plan, and it lasted almost no time at all. The {hero} dashed for the smooth stone and got halfway there when the pool light flashed, bright and inviting, so the {hero} swerved for the pool instead. Blink — the nook light flickered, as if it might be leaving, and the {hero} spun toward the nook. Then the stone light again. Then the pool. The {hero} turned and doubled and turned again, going faster and faster after all three at once, until — bump — the {hero} skidded straight through the neat little pile of round pebbles that {companion_name} had spent the entire evening sorting by roundness, and came to a stop exactly, precisely where the chase had begun.

Every one of the three lights went dark at the same moment.

The {hero} sat in the scattered pebbles and puffed. 'I ran fast enough for three lights. I ran fast enough for ten. And I said hello to none of them. Why do they always go out the moment I get going?'

That was the second mystery of the night, and it felt even unfairer than the first.

'Hmm,' said {companion_name}, calmly gathering pebbles back into their pile. 'I have only ever seen it on nights when I was busy watching one thing.'

The {hero} looked at {companion_name}. Then at the three dark places. Then, slowly, the {hero} tried the strangest plan of the evening: sitting completely still, and watching only the pool. Not the stone, though it was tempting. Not the nook, though it itched. One thing. The pool.

The moon rose a little. The blinking came back. And stillness showed the {hero} what all that running never could. Lean in close and watch too. The pool light and the stone light blink at exactly the same instant, every single time. Can you see it too? Twins.

'Oh,' whispered the {hero}, very quietly, so as not to scare the answer away. 'They are the same light. The pool and the smooth stone are like mirrors — those two are only reflections. There was one little light all along, and it hides whenever everything around it is rushing. Two mysteries, one answer. One thing, then the next — watch one thing all the way, and it hands you the rest for free.'

So the {hero} turned, gently, to the shadowy nook, and simply watched, with both eyes and a whole quiet heart. And out of the dark floated the real light at last: a tiny glowing creature no bigger than a thumbprint, blinking its small hello.

The {hero} did not chase. The {hero} stayed. The little light drifted closer all on its own, circled the {hero} once, circled twice, and settled down beside the {object_motif}, where it blinked slower, and slower, until the two glows rose and fell together like breathing.

'{refrain},' murmured {companion_name}, setting the last pebble on the pile.

The moon climbed high, right on schedule. The little creature dimmed to a sleepy shimmer and stayed.

Where did it sleep in the daytime? Somewhere near. Somewhere secret. Tomorrow, perhaps, it would show the {hero} the way. That could wait.

The night went soft. The pool went still.

{refrain}.`,
    scriptTemplate: `For seven nights running, a tiny light had blinked in {setting}, always just after moonrise, always for a little while, and always gone before anyone got near. Blink. Blink. Pop! Then nothing.

{child_name} the {hero} had watched it from bed every one of those nights, guessing at it. A fallen star, maybe. A lantern the size of a berry. Tonight {child_name} had a plan and a firm, warm want: be out there at moonrise, find the little light, and say hello, properly, before the moon climbed too high. It never blinked once the moon was high.

But the night had a surprise ready. When the moon lifted and the first blink came, it did not come from one place. It came from three. One light blinked beside the big smooth stone. One blinked out on the still pool. One blinked deep in the shadowy nook, low and small.

'Three,' breathed {child_name}. 'Three lights! I thought I was lucky to get one. I'll visit them all — all at once, before any of them can leave.'

That was the plan, and it lasted almost no time at all. {child_name} dashed for the smooth stone and got halfway there when the pool light flashed, bright and inviting, so {child_name} swerved for the pool instead. Blink — the nook light flickered, as if it might be leaving, and {child_name} spun toward the nook. Then the stone light again. Then the pool. {child_name} turned and doubled and turned again, going faster and faster after all three at once, until — bump — {child_name} skidded straight through the neat little pile of round pebbles that {companion_name} had spent the entire evening sorting by roundness, and came to a stop exactly, precisely where the chase had begun.

Every one of the three lights went dark at the same moment.

{child_name} sat in the scattered pebbles and puffed. 'I ran fast enough for three lights. I ran fast enough for ten. And I said hello to none of them. Why do they always go out the moment I get going?'

That was the second mystery of the night, and it felt even unfairer than the first.

'Hmm,' said {companion_name}, calmly gathering pebbles back into their pile. 'I have only ever seen it on nights when I was busy watching one thing.'

{child_name} looked at {companion_name}. Then at the three dark places. Then, slowly, {child_name} tried the strangest plan of the evening: sitting completely still, and watching only the pool. Not the stone, though it was tempting. Not the nook, though it itched. One thing. The pool.

The moon rose a little. The blinking came back. And stillness showed {child_name} what all that running never could. Lean in close and watch too. The pool light and the stone light blink at exactly the same instant, every single time. Can you see it too? Twins.

'Oh,' whispered {child_name}, very quietly, so as not to scare the answer away. 'They are the same light. The pool and the smooth stone are like mirrors — those two are only reflections. There was one little light all along, and it hides whenever everything around it is rushing. Two mysteries, one answer. One thing, then the next — watch one thing all the way, and it hands you the rest for free.'

So {child_name} turned, gently, to the shadowy nook, and simply watched, with both eyes and a whole quiet heart. And out of the dark floated the real light at last: a tiny glowing creature no bigger than a thumbprint, blinking its small hello.

{child_name} did not chase. {child_name} stayed. The little light drifted closer all on its own, circled {child_name} once, circled twice, and settled down beside the {object_motif}, where it blinked slower, and slower, until the two glows rose and fell together like breathing.

'{refrain},' murmured {companion_name}, setting the last pebble on the pile.

The moon climbed high, right on schedule. The little creature dimmed to a sleepy shimmer and stayed.

Where did it sleep in the daytime? Somewhere near. Somewhere secret. Tomorrow, perhaps, it would show {child_name} the way. That could wait.

The night went soft. The pool went still.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There were two mysteries in {setting} that night, and the {hero} went to bed planning to solve exactly one of them.

The first was seven nights old. Every evening, just after moonrise, a tiny light blinked somewhere out in the dark — blink, blink, pop — and then, some quiet while later, stopped. Nobody knew what it was. {companion_name} claimed to have seen it up close once, years ago, and refused to say anything more than 'you will want to see it yourself,' which was the most annoying possible answer and also, probably, true.

Tonight the {hero} meant to see it. That was the want, simple and warm: be there at moonrise, find the light, say hello before the moon climbed too high and the blinking stopped for the night.

The second mystery arrived with the first blink. Because the light did not blink from one place. It blinked from three. One beside the big smooth stone. One out on the still pool. One low in the shadowy nook. Three lights, where seven nights of watching had only ever promised one.

'Three,' said the {hero}, already moving. 'Then I will meet them all. At once. Before any of them can leave.'

What followed was not the {hero}'s finest quarter of an hour. The dash to the stone got exactly halfway before the pool light flashed and the {hero} swerved. The pool got three good strides before the nook flickered — leaving, surely leaving! — and the {hero} spun. Stone, pool, nook, stone. Faster and faster, each light forever one dash away, until — bump — the {hero} ploughed through the little pile of pebbles {companion_name} had spent the whole evening sorting by roundness, scattering a night of careful work in every direction, and slid to a halt on the exact spot where the chase had started.

All three lights went out at the same instant. As if somebody had quietly closed a door.

The {hero} sat among the scattered pebbles and let the puffing slow down. 'Every time,' the {hero} said. 'Seven nights, and now tonight. The moment I get close, it goes dark. Why does it always vanish the second anyone moves toward it?'

And there it was: mystery number two, standing right beside mystery number one, both of them looking rather pleased with themselves.

'Hmm,' said {companion_name}, gathering pebbles without any hurry at all. 'For what it is worth — the one time I saw it properly, I was not chasing anything. I was busy watching one thing.'

The {hero} started to argue, and then did not. Instead, the {hero} tried the strangest tactic of the whole evening. Stillness. The {hero} picked the pool — just the pool, not the stone, not the nook, though both of them itched like anything — and watched it the way you watch something you have decided to truly see. Whole eyes. Quiet body. One thing.

The moon rose a little. The blinking came back. And within ten slow breaths, stillness had handed over what an hour of sprinting never touched. Lean in; you can catch it too. The pool light and the stone light blink at precisely the same instant, every time, without fail. Can you see it too? Twins.

'They are the same light,' the {hero} whispered. 'The pool is a mirror. So is the polished face of the stone. Two reflections, one real light — and it hides from hurry. That is why it kept vanishing. It was never vanishing at all. It was waiting for the rushing to stop.' The {hero} laughed, softly, at the tidiness of it. 'Two mysteries, one answer. One thing, then the next — watch one thing all the way through, and it solves the rest for you.'

The real light lived in the shadowy nook. The {hero} turned toward it gently and did not take a single step. Just watched, and let it decide.

It decided. Out of the dark it came: a tiny glowing creature, smaller than a thumbprint, blinking a careful hello. It drifted nearer in slow loops, circled the {hero} once, twice, and then settled — of all places — beside the {object_motif}, where its blink slowed and deepened until the two glows rose and fell together, like two sleepers sharing one breath.

'{refrain},' murmured {companion_name}, placing the last pebble back on a rebuilt pile.

They sat with it a long, unhurried while. The moon climbed high, and the little creature dimmed to a shimmer and stayed, folded and content.

It would need a name — something that small, and that stubborn about stillness, deserved one. But naming was daytime work. So was the question of where it slept when the sun was up, and whether it would let the {hero} come and see. Tomorrow had room for all of that.

The pool smoothed over. The night leaned close.

{refrain}.`,
    scriptTemplate: `There were two mysteries in {setting} that night, and {child_name} the {hero} went to bed planning to solve exactly one of them.

The first was seven nights old. Every evening, just after moonrise, a tiny light blinked somewhere out in the dark — blink, blink, pop — and then, some quiet while later, stopped. Nobody knew what it was. {companion_name} claimed to have seen it up close once, years ago, and refused to say anything more than 'you will want to see it yourself,' which was the most annoying possible answer and also, probably, true.

Tonight {child_name} meant to see it. That was the want, simple and warm: be there at moonrise, find the light, say hello before the moon climbed too high and the blinking stopped for the night.

The second mystery arrived with the first blink. Because the light did not blink from one place. It blinked from three. One beside the big smooth stone. One out on the still pool. One low in the shadowy nook. Three lights, where seven nights of watching had only ever promised one.

'Three,' said {child_name}, already moving. 'Then I will meet them all. At once. Before any of them can leave.'

What followed was not {child_name}'s finest quarter of an hour. The dash to the stone got exactly halfway before the pool light flashed and {child_name} swerved. The pool got three good strides before the nook flickered — leaving, surely leaving! — and {child_name} spun. Stone, pool, nook, stone. Faster and faster, each light forever one dash away, until — bump — {child_name} ploughed through the little pile of pebbles {companion_name} had spent the whole evening sorting by roundness, scattering a night of careful work in every direction, and slid to a halt on the exact spot where the chase had started.

All three lights went out at the same instant. As if somebody had quietly closed a door.

{child_name} sat among the scattered pebbles and let the puffing slow down. 'Every time,' {child_name} said. 'Seven nights, and now tonight. The moment I get close, it goes dark. Why does it always vanish the second anyone moves toward it?'

And there it was: mystery number two, standing right beside mystery number one, both of them looking rather pleased with themselves.

'Hmm,' said {companion_name}, gathering pebbles without any hurry at all. 'For what it is worth — the one time I saw it properly, I was not chasing anything. I was busy watching one thing.'

{child_name} started to argue, and then did not. Instead, {child_name} tried the strangest tactic of the whole evening. Stillness. {child_name} picked the pool — just the pool, not the stone, not the nook, though both of them itched like anything — and watched it the way you watch something you have decided to truly see. Whole eyes. Quiet body. One thing.

The moon rose a little. The blinking came back. And within ten slow breaths, stillness had handed over what an hour of sprinting never touched. Lean in; you can catch it too. The pool light and the stone light blink at precisely the same instant, every time, without fail. Can you see it too? Twins.

'They are the same light,' {child_name} whispered. 'The pool is a mirror. So is the polished face of the stone. Two reflections, one real light — and it hides from hurry. That is why it kept vanishing. It was never vanishing at all. It was waiting for the rushing to stop.' {child_name} laughed, softly, at the tidiness of it. 'Two mysteries, one answer. One thing, then the next — watch one thing all the way through, and it solves the rest for you.'

The real light lived in the shadowy nook. {child_name} turned toward it gently and did not take a single step. Just watched, and let it decide.

It decided. Out of the dark it came: a tiny glowing creature, smaller than a thumbprint, blinking a careful hello. It drifted nearer in slow loops, circled {child_name} once, twice, and then settled — of all places — beside the {object_motif}, where its blink slowed and deepened until the two glows rose and fell together, like two sleepers sharing one breath.

'{refrain},' murmured {companion_name}, placing the last pebble back on a rebuilt pile.

They sat with it a long, unhurried while. The moon climbed high, and the little creature dimmed to a shimmer and stayed, folded and content.

It would need a name — something that small, and that stubborn about stillness, deserved one. But naming was daytime work. So was the question of where it slept when the sun was up, and whether it would let {child_name} come and see. Tomorrow had room for all of that.

The pool smoothed over. The night leaned close.

{refrain}.`
  }
},
    audioTemplate: `Just after moonrise, a tiny light blinked in {setting}. Blink. Blink. Pop! Then it was gone.

The {hero} had watched it from bed for seven nights, and tonight the {hero} wanted one thing with all their heart: to find that little light and say hello before the moon climbed too high. It only ever blinked while the moon was low.

But tonight something odd was waiting. There was not one light. There were three. One blinked by the big smooth stone. One blinked out on the still pool. One blinked in the shadowy nook.

'Three!' said the {hero}. 'I will visit them all at once!'

Off the {hero} dashed toward the stone. Blink — the pool light flashed. The {hero} spun and rushed for the pool. Blink — the nook light flickered. The {hero} turned again, and again, faster and faster, until — bump! — the {hero} skidded right through the tidy pile of pebbles {companion_name} had spent all evening sorting, and stopped right where the chase began.

All three lights went dark at once.

'I ran fast enough for three,' the {hero} puffed, 'and I said hello to none.'

'Hmm,' said {companion_name}, calmly restacking pebbles. 'I only ever see it when I am busy watching one thing.'

So the {hero} tried something new. The {hero} sat very still and watched only the pool. Not the stone. Not the nook. Just the pool.

And the stillness showed a secret. Lean close and watch too. The pool light and the stone light blink at exactly the same moment. Can you see it too? Twins.

'Oh,' whispered the {hero}. 'Those two are only reflections. There was one little light all along! One thing, then the next — watch one thing all the way, and it tells you everything.'

The {hero} turned, gently now, to the shadowy nook. And out floated the real light: a tiny glowing creature, small as a thumbprint, blinking hello.

The {hero} kept perfectly still. The little light drifted closer, circled once, twice, and settled beside the {object_motif}, blinking slower and slower until the two glows matched.

'{refrain},' murmured {companion_name} softly.

The moon climbed high. The little light dimmed to a sleepy shimmer. Tomorrow, perhaps, it would show the {hero} where it sleeps in the daytime. That secret could wait.

Warm dark. Slow blinks.

{refrain}.`,
    scriptTemplate: `Just after moonrise, a tiny light blinked in {setting}. Blink. Blink. Pop! Then it was gone.

{child_name} the {hero} had watched it from bed for seven nights, and tonight {child_name} wanted one thing with all their heart: to find that little light and say hello before the moon climbed too high. It only ever blinked while the moon was low.

But tonight something odd was waiting. There was not one light. There were three. One blinked by the big smooth stone. One blinked out on the still pool. One blinked in the shadowy nook.

'Three!' said {child_name}. 'I will visit them all at once!'

Off {child_name} dashed toward the stone. Blink — the pool light flashed. {child_name} spun and rushed for the pool. Blink — the nook light flickered. {child_name} turned again, and again, faster and faster, until — bump! — {child_name} skidded right through the tidy pile of pebbles {companion_name} had spent all evening sorting, and stopped right where the chase began.

All three lights went dark at once.

'I ran fast enough for three,' {child_name} puffed, 'and I said hello to none.'

'Hmm,' said {companion_name}, calmly restacking pebbles. 'I only ever see it when I am busy watching one thing.'

So {child_name} tried something new. {child_name} sat very still and watched only the pool. Not the stone. Not the nook. Just the pool.

And the stillness showed a secret. Lean close and watch too. The pool light and the stone light blink at exactly the same moment. Can you see it too? Twins.

'Oh,' whispered {child_name}. 'Those two are only reflections. There was one little light all along! One thing, then the next — watch one thing all the way, and it tells you everything.'

{child_name} turned, gently now, to the shadowy nook. And out floated the real light: a tiny glowing creature, small as a thumbprint, blinking hello.

{child_name} kept perfectly still. The little light drifted closer, circled once, twice, and settled beside the {object_motif}, blinking slower and slower until the two glows matched.

'{refrain},' murmured {companion_name} softly.

The moon climbed high. The little light dimmed to a sleepy shimmer. Tomorrow, perhaps, it would show {child_name} where it sleeps in the daytime. That secret could wait.

Warm dark. Slow blinks.

{refrain}.`,
  },

  {
    ordinal: 2, title: "The Stair Under the Moss",
    concept: "Breaking a big goal into small, ordered steps", callback: "Doing one thing at a time (Level 1)", ageFloor: 4,
    summary: "Once a season the sky above the high ridge blooms with slow, drifting stars — and tonight is the night. The hero tries to take the whole ridge in one giant rush and slides straight back down, until the tumble itself scrapes the moss off something flat and pale: the first stone of an old winding stair. A big goal, it turns out, was never one giant leap. It is small steps, laid in order, walked one at a time.",
    teachingNote: "A plan turns an overwhelming goal into a series of small, doable steps — and the first small step is always within reach.",
    learningBeat: "you can do the first small step",
    ageVariants: {
  '3-4': {
    audioTemplate: `Tonight the sky over {setting} would bloom! Silver stars would drift down like petals. The best watching spot was the top of the big hill.

The {hero} wanted to be up there so much.

The {hero} ran at the hill. One big go! Whoosh — slip — thump!

'Again!' Run, slip, thump!

'It is too big,' said the {hero}. 'I can't.'

'Hmm,' said {companion_name}. 'Old paths whisper, one stone at a time.'

Then the {hero} saw it. The slide had scraped away some moss. Look under the moss! Can you see it too? A little stone step!

Behind it, another step. And another! A secret stair, going up and up.

'The hill is too big,' said the {hero}. 'But you can do the first small step!'

Step one. Step two. Step three. The {object_motif} glowed to show the next stone. Step by step, all the way up!

At the top, the sky bloomed. Stars drifted down, slow and soft.

'{refrain},' whispered {companion_name}.

The {hero} watched, warm and sleepy. One star. Two stars. Three.

Time to rest. Step by step, back down. Slow and small.

{refrain}.`,
    scriptTemplate: `Tonight the sky over {setting} would bloom! Silver stars would drift down like petals. The best watching spot was the top of the big hill.

{child_name} the {hero} wanted to be up there so much.

{child_name} ran at the hill. One big go! Whoosh — slip — thump!

'Again!' Run, slip, thump!

'It is too big,' said {child_name}. 'I can't.'

'Hmm,' said {companion_name}. 'Old paths whisper, one stone at a time.'

Then {child_name} saw it. The slide had scraped away some moss. Look under the moss! Can you see it too? A little stone step!

Behind it, another step. And another! A secret stair, going up and up.

'The hill is too big,' said {child_name}. 'But you can do the first small step!'

Step one. Step two. Step three. The {object_motif} glowed to show the next stone. Step by step, all the way up!

At the top, the sky bloomed. Stars drifted down, slow and soft.

'{refrain},' whispered {companion_name}.

{child_name} watched, warm and sleepy. One star. Two stars. Three.

Time to rest. Step by step, back down. Slow and small.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Tonight, just once in the whole season, the sky above {setting} would bloom. Slow silver stars would drift down like petals, and the best place to watch was the top of the high ridge.

The {hero} wanted to be up there more than anything. But the ridge was tall. Very tall. And at the bottom, oddly, a little trail of pale pebbles wandered off sideways — away from the top. Who would lay a trail that went the wrong way?

'No time for wrong-way pebbles,' said the {hero}. 'I will take the whole ridge in one big go!'

The {hero} backed up, ran, and charged straight up the slope. Halfway, the ground turned slippery — and down the {hero} slid, all the way to the bottom. Thump.

'Again!' Faster this time. Thump.

The {hero} lay in the moss and groaned. 'The top is too far. It is just too big.'

'Hmm,' said {companion_name}, tucking one pale pebble away for their collection. 'Old paths never shout. They whisper, one stone at a time.'

The {hero} sat up — and stopped. The big slide had scraped a stripe of moss away. Look at what is peeking out. Something flat and pale, with one straight edge. Can you see it too? A step.

A stone step! And past it, under the moss, another. The steps curved sideways around the ridge — the very way the pebble trail pointed. The wrong way was the way up.

'I kept trying to swallow the ridge in one gulp,' whispered the {hero}. 'But nobody has to. You can do the first small step. Anyone can do one stone.'

So the {hero} stepped onto the first stone. The {object_motif} glowed just far enough to show the next one. One thing, then the next, like watching one light at a time. Stone by stone, around and up, the {hero} climbed the whole ridge without a single slip.

At the top, the sky bloomed. Stars drifted down as slow as petals.

'{refrain},' breathed {companion_name}.

They watched until the last star settled. Far across the valley, another faint line of pale stones climbed another hill. Another stair. For another night.

Down the steps they went, one by one, slower and slower.

Warm moss. Quiet sky.

{refrain}.`,
    scriptTemplate: `Tonight, just once in the whole season, the sky above {setting} would bloom. Slow silver stars would drift down like petals, and the best place to watch was the top of the high ridge.

{child_name} the {hero} wanted to be up there more than anything. But the ridge was tall. Very tall. And at the bottom, oddly, a little trail of pale pebbles wandered off sideways — away from the top. Who would lay a trail that went the wrong way?

'No time for wrong-way pebbles,' said {child_name}. 'I will take the whole ridge in one big go!'

{child_name} backed up, ran, and charged straight up the slope. Halfway, the ground turned slippery — and down {child_name} slid, all the way to the bottom. Thump.

'Again!' Faster this time. Thump.

{child_name} lay in the moss and groaned. 'The top is too far. It is just too big.'

'Hmm,' said {companion_name}, tucking one pale pebble away for their collection. 'Old paths never shout. They whisper, one stone at a time.'

{child_name} sat up — and stopped. The big slide had scraped a stripe of moss away. Look at what is peeking out. Something flat and pale, with one straight edge. Can you see it too? A step.

A stone step! And past it, under the moss, another. The steps curved sideways around the ridge — the very way the pebble trail pointed. The wrong way was the way up.

'I kept trying to swallow the ridge in one gulp,' whispered {child_name}. 'But nobody has to. You can do the first small step. Anyone can do one stone.'

So {child_name} stepped onto the first stone. The {object_motif} glowed just far enough to show the next one. One thing, then the next, like watching one light at a time. Stone by stone, around and up, {child_name} climbed the whole ridge without a single slip.

At the top, the sky bloomed. Stars drifted down as slow as petals.

'{refrain},' breathed {companion_name}.

They watched until the last star settled. Far across the valley, another faint line of pale stones climbed another hill. Another stair. For another night.

Down the steps they went, one by one, slower and slower.

Warm moss. Quiet sky.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Once a season, only once, the sky above {setting} bloomed. Slow silver stars came drifting down like petals for one hour after moonrise, and the finest watching place was the top of the high ridge, where the whole sky fit in one look.

Tonight was the night, and the {hero} wanted the top of that ridge the way you want a thing you have waited a whole season for. Plan: get up there before the first star fell.

Two odd things stood at the bottom of the ridge. The first was the ridge itself, taller than the {hero} had remembered, its slope smooth and mossy and steep. The second was a little trail of pale pebbles that somebody, sometime, had laid in a neat line — pointing sideways, around the hill, away from the top. Who lays a trail that runs the wrong way?

'No time for wrong-way pebbles,' the {hero} decided. 'The top is up, so up I go. The whole ridge, one big go.'

The {hero} backed up a good long way, ran, and charged the slope. It went beautifully for eleven strides. Then the moss got slick, the climb got steep, and the {hero} slid the whole way back down, landing with a soft, mossy thump.

'Again. Faster.' Fourteen strides this time, and a longer slide back. Thump.

The third try was the clever one, a great zigzag charge, which turned somehow into a great zigzag tangle, and ended in the same mossy heap as tries one and two. The ridge had not moved.

The {hero} lay flat in the moss and stared up at it. 'It is too big,' the {hero} said. 'It is simply too big, and there is not enough of me.'

'Hmm,' said {companion_name}, wandering over and pocketing one of the pale pebbles for their collection, the way they always did with pebbles worth keeping. 'Old paths never shout. They whisper, one stone at a time.'

The {hero} sat up to say that there was no path, that a path was exactly the thing this ridge did not have — and stopped. The three big slides had scraped a long stripe of moss clean off the slope. And peeking out of that scraped stripe was something that had been hiding there all along. Look close, right where the moss is thinnest. Something flat and pale, with one perfectly straight edge. Can you see it too? A step.

The {hero} peeled back more moss. Beyond the first stone, a second. Beyond that, a third, curving sideways around the shoulder of the ridge — sideways, exactly the way the pebble trail pointed. The trail had never gone the wrong way. It went the stair's way. Somebody long ago had built a winding staircase to the top and left a line of pale pebbles to say: begin here.

'I kept trying to swallow the whole ridge in one gulp,' the {hero} said slowly. 'That was my whole plan. Go up. But a stair does not ask for a gulp. It asks for one stone. You can do the first small step — anyone can. And then the step after that is small too.'

So the {hero} stood on the first stone. The {object_motif} glowed just far enough to show the edge of the next, and no further, which turned out to be exactly enough. One thing, then the next — the same trick that had once coaxed a shy little light out of the dark, working now on a whole ridge. Stone, stone, stone. Around and up, unhurried, no slipping, while the moon climbed alongside.

The {hero} stepped onto the top just as the first star let go of the sky.

It came down slow as a petal, and a hundred more came after it, silver and unhurried, blooming and drifting and settling. The whole sky fit in one look, just as promised.

'{refrain},' breathed {companion_name}, from the stone alongside.

They watched until the last star had drifted down and the dark went velvet. Far across the valley, faint in the moonlight, another thin line of pale pebbles climbed toward another hilltop. Another stair, sleeping under its own moss. A climb for another night.

They went down the way they came, one stone at a time, slower and slower, the {object_motif} glowing soft ahead.

Warm moss. Quiet sky. Small steps home.

{refrain}.`,
    scriptTemplate: `Once a season, only once, the sky above {setting} bloomed. Slow silver stars came drifting down like petals for one hour after moonrise, and the finest watching place was the top of the high ridge, where the whole sky fit in one look.

Tonight was the night, and {child_name} the {hero} wanted the top of that ridge the way you want a thing you have waited a whole season for. Plan: get up there before the first star fell.

Two odd things stood at the bottom of the ridge. The first was the ridge itself, taller than {child_name} had remembered, its slope smooth and mossy and steep. The second was a little trail of pale pebbles that somebody, sometime, had laid in a neat line — pointing sideways, around the hill, away from the top. Who lays a trail that runs the wrong way?

'No time for wrong-way pebbles,' {child_name} decided. 'The top is up, so up I go. The whole ridge, one big go.'

{child_name} backed up a good long way, ran, and charged the slope. It went beautifully for eleven strides. Then the moss got slick, the climb got steep, and {child_name} slid the whole way back down, landing with a soft, mossy thump.

'Again. Faster.' Fourteen strides this time, and a longer slide back. Thump.

The third try was the clever one, a great zigzag charge, which turned somehow into a great zigzag tangle, and ended in the same mossy heap as tries one and two. The ridge had not moved.

{child_name} lay flat in the moss and stared up at it. 'It is too big,' {child_name} said. 'It is simply too big, and there is not enough of me.'

'Hmm,' said {companion_name}, wandering over and pocketing one of the pale pebbles for their collection, the way they always did with pebbles worth keeping. 'Old paths never shout. They whisper, one stone at a time.'

{child_name} sat up to say that there was no path, that a path was exactly the thing this ridge did not have — and stopped. The three big slides had scraped a long stripe of moss clean off the slope. And peeking out of that scraped stripe was something that had been hiding there all along. Look close, right where the moss is thinnest. Something flat and pale, with one perfectly straight edge. Can you see it too? A step.

{child_name} peeled back more moss. Beyond the first stone, a second. Beyond that, a third, curving sideways around the shoulder of the ridge — sideways, exactly the way the pebble trail pointed. The trail had never gone the wrong way. It went the stair's way. Somebody long ago had built a winding staircase to the top and left a line of pale pebbles to say: begin here.

'I kept trying to swallow the whole ridge in one gulp,' {child_name} said slowly. 'That was my whole plan. Go up. But a stair does not ask for a gulp. It asks for one stone. You can do the first small step — anyone can. And then the step after that is small too.'

So {child_name} stood on the first stone. The {object_motif} glowed just far enough to show the edge of the next, and no further, which turned out to be exactly enough. One thing, then the next — the same trick that had once coaxed a shy little light out of the dark, working now on a whole ridge. Stone, stone, stone. Around and up, unhurried, no slipping, while the moon climbed alongside.

{child_name} stepped onto the top just as the first star let go of the sky.

It came down slow as a petal, and a hundred more came after it, silver and unhurried, blooming and drifting and settling. The whole sky fit in one look, just as promised.

'{refrain},' breathed {companion_name}, from the stone alongside.

They watched until the last star had drifted down and the dark went velvet. Far across the valley, faint in the moonlight, another thin line of pale pebbles climbed toward another hilltop. Another stair, sleeping under its own moss. A climb for another night.

They went down the way they came, one stone at a time, slower and slower, the {object_motif} glowing soft ahead.

Warm moss. Quiet sky. Small steps home.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} had made a plan for tonight, and the plan had one item on it.

Item one: go up.

Tonight, for the only hour in the whole season, the sky above {setting} would bloom — slow silver stars drifting down like petals, a hundred of them, maybe more — and the one perfect place to watch was the top of the high ridge. The {hero} had waited an entire season for this and wanted it with the kind of wanting that hums. Hence the plan. Hence item one.

The ridge, up close, was bigger than any plan with one item on it. Its slope rose smooth and mossy and steep, with no path anywhere — although, oddly, at its base somebody had once laid a tidy line of pale pebbles that struck off sideways, around the hill, in completely the wrong direction. The {hero} noticed the trail, filed it under strange and useless, and got down to item one.

The first charge was magnificent for eleven strides. Then the moss turned slick, the slope turned serious, and the {hero} slid the whole way back down and arrived with a deep, mossy thump.

The second charge was faster and slid further. The third was a clever zigzag, which knotted itself into a tangle and delivered the {hero} to the same mossy landing spot as the first two. The ridge had not moved. The top had not come one stride closer. The {hero} lay flat, puffing at the sky, and felt the whole evening tilt toward impossible.

'It is too big,' the {hero} announced to the moss. 'The bloom will start, and I will be down here, because the top is too far and there is not enough of me to reach it.'

'Hmm,' said {companion_name}, strolling over and pocketing one of the pale pebbles, as they did with any pebble worth keeping. 'Old paths never shout. They whisper, one stone at a time.'

The {hero} sat up, ready to point out that this ridge had no path whatsoever, that a path was precisely what was missing — and the words never arrived. Because the three great slides had done something no amount of charging ever could. They had scraped a long, clean stripe through the moss. And in that stripe, half uncovered, something pale was showing. Lean in close, right where the moss is thinnest. Flat. Pale. One edge perfectly, unmistakably straight. Can you see it too? A step.

The {hero} peeled the moss back, heart going quick. A stone step. Behind it a second, and behind that a third, each one small, each one level, curving sideways around the shoulder of the ridge — sideways, precisely the direction the pebble trail had been pointing all along. The trail was not wrong. The trail was the label on the first step of a staircase somebody had built long ago, and the moss had been keeping it secret ever since. Three failed charges had found what no amount of squinting at the summit ever would.

The {hero} stood very still and felt the plan rewrite itself. 'Go up,' the {hero} said, 'was never a plan. It was just the wish, wearing a plan's hat. A real plan looks like this. Stone. Stone. Stone. Nobody climbs a ridge. But you can do the first small step, and then the next one after it, and the ridge climbs itself.'

So the {hero} stepped onto the first stone. The {object_motif} glowed exactly one stone ahead, never further, and that turned out to be the whole trick of it — the same trick as watching one thing at a time, the trick that had once coaxed a shy little light out of the dark. The top of the ridge stopped mattering. Only the next stone mattered, and the next stone was always easy. Around and up the stair wound, patient as its builder, while the moon rose alongside like company.

The {hero} arrived at the top with the sky still dark and whole — and then it bloomed. The first star came loose and drifted down slow as a petal, and behind it came the rest, silver and easy, in no hurry whatsoever, as if falling were just another way of settling in for the night.

'{refrain},' breathed {companion_name} from the next stone over, and for the length of the whole bloom neither of them said anything else.

Afterward, in the velvet dark, the {hero} looked out across the valley and saw it: another thin line of pale pebbles, faint in the moonlight, climbing toward another hilltop far away. Whoever built one stair had built two. Perhaps more. Perhaps the hills of {setting} were full of quiet staircases, sleeping under moss, each one waiting with its first small step already laid.

That was a thought to save for tomorrow.

They went down the way they had come, stone by stone, the {object_motif} glowing one step ahead, the night settling like a blanket pulled slowly up.

Warm moss. Quiet sky. Small steps home.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had made a plan for tonight, and the plan had one item on it.

Item one: go up.

Tonight, for the only hour in the whole season, the sky above {setting} would bloom — slow silver stars drifting down like petals, a hundred of them, maybe more — and the one perfect place to watch was the top of the high ridge. {child_name} had waited an entire season for this and wanted it with the kind of wanting that hums. Hence the plan. Hence item one.

The ridge, up close, was bigger than any plan with one item on it. Its slope rose smooth and mossy and steep, with no path anywhere — although, oddly, at its base somebody had once laid a tidy line of pale pebbles that struck off sideways, around the hill, in completely the wrong direction. {child_name} noticed the trail, filed it under strange and useless, and got down to item one.

The first charge was magnificent for eleven strides. Then the moss turned slick, the slope turned serious, and {child_name} slid the whole way back down and arrived with a deep, mossy thump.

The second charge was faster and slid further. The third was a clever zigzag, which knotted itself into a tangle and delivered {child_name} to the same mossy landing spot as the first two. The ridge had not moved. The top had not come one stride closer. {child_name} lay flat, puffing at the sky, and felt the whole evening tilt toward impossible.

'It is too big,' {child_name} announced to the moss. 'The bloom will start, and I will be down here, because the top is too far and there is not enough of me to reach it.'

'Hmm,' said {companion_name}, strolling over and pocketing one of the pale pebbles, as they did with any pebble worth keeping. 'Old paths never shout. They whisper, one stone at a time.'

{child_name} sat up, ready to point out that this ridge had no path whatsoever, that a path was precisely what was missing — and the words never arrived. Because the three great slides had done something no amount of charging ever could. They had scraped a long, clean stripe through the moss. And in that stripe, half uncovered, something pale was showing. Lean in close, right where the moss is thinnest. Flat. Pale. One edge perfectly, unmistakably straight. Can you see it too? A step.

{child_name} peeled the moss back, heart going quick. A stone step. Behind it a second, and behind that a third, each one small, each one level, curving sideways around the shoulder of the ridge — sideways, precisely the direction the pebble trail had been pointing all along. The trail was not wrong. The trail was the label on the first step of a staircase somebody had built long ago, and the moss had been keeping it secret ever since. Three failed charges had found what no amount of squinting at the summit ever would.

{child_name} stood very still and felt the plan rewrite itself. 'Go up,' {child_name} said, 'was never a plan. It was just the wish, wearing a plan's hat. A real plan looks like this. Stone. Stone. Stone. Nobody climbs a ridge. But you can do the first small step, and then the next one after it, and the ridge climbs itself.'

So {child_name} stepped onto the first stone. The {object_motif} glowed exactly one stone ahead, never further, and that turned out to be the whole trick of it — the same trick as watching one thing at a time, the trick that had once coaxed a shy little light out of the dark. The top of the ridge stopped mattering. Only the next stone mattered, and the next stone was always easy. Around and up the stair wound, patient as its builder, while the moon rose alongside like company.

{child_name} arrived at the top with the sky still dark and whole — and then it bloomed. The first star came loose and drifted down slow as a petal, and behind it came the rest, silver and easy, in no hurry whatsoever, as if falling were just another way of settling in for the night.

'{refrain},' breathed {companion_name} from the next stone over, and for the length of the whole bloom neither of them said anything else.

Afterward, in the velvet dark, {child_name} looked out across the valley and saw it: another thin line of pale pebbles, faint in the moonlight, climbing toward another hilltop far away. Whoever built one stair had built two. Perhaps more. Perhaps the hills of {setting} were full of quiet staircases, sleeping under moss, each one waiting with its first small step already laid.

That was a thought to save for tomorrow.

They went down the way they had come, stone by stone, the {object_motif} glowing one step ahead, the night settling like a blanket pulled slowly up.

Warm moss. Quiet sky. Small steps home.

{refrain}.`
  }
},
    audioTemplate: `Tonight, just once in the whole season, the sky above {setting} would bloom. Slow silver stars would drift down like petals, and the best place to watch was the top of the high ridge.

The {hero} wanted to be up there more than anything. But the ridge was tall. Very tall. And at the bottom, oddly, a little trail of pale pebbles wandered off sideways — away from the top. Who would lay a trail that went the wrong way?

'No time for wrong-way pebbles,' said the {hero}. 'I will take the whole ridge in one big go!'

The {hero} backed up, ran, and charged straight up the slope. Halfway, the ground turned slippery — and down the {hero} slid, all the way to the bottom. Thump.

'Again!' Faster this time. Thump.

The {hero} lay in the moss and groaned. 'The top is too far. It is just too big.'

'Hmm,' said {companion_name}, tucking one pale pebble away for their collection. 'Old paths never shout. They whisper, one stone at a time.'

The {hero} sat up — and stopped. The big slide had scraped a stripe of moss away. Look at what is peeking out. Something flat and pale, with one straight edge. Can you see it too? A step.

A stone step! And past it, under the moss, another. The steps curved sideways around the ridge — the very way the pebble trail pointed. The wrong way was the way up.

'I kept trying to swallow the ridge in one gulp,' whispered the {hero}. 'But nobody has to. You can do the first small step. Anyone can do one stone.'

So the {hero} stepped onto the first stone. The {object_motif} glowed just far enough to show the next one. One thing, then the next, like watching one light at a time. Stone by stone, around and up, the {hero} climbed the whole ridge without a single slip.

At the top, the sky bloomed. Stars drifted down as slow as petals.

'{refrain},' breathed {companion_name}.

They watched until the last star settled. Far across the valley, another faint line of pale stones climbed another hill. Another stair. For another night.

Down the steps they went, one by one, slower and slower.

Warm moss. Quiet sky.

{refrain}.`,
    scriptTemplate: `Tonight, just once in the whole season, the sky above {setting} would bloom. Slow silver stars would drift down like petals, and the best place to watch was the top of the high ridge.

{child_name} the {hero} wanted to be up there more than anything. But the ridge was tall. Very tall. And at the bottom, oddly, a little trail of pale pebbles wandered off sideways — away from the top. Who would lay a trail that went the wrong way?

'No time for wrong-way pebbles,' said {child_name}. 'I will take the whole ridge in one big go!'

{child_name} backed up, ran, and charged straight up the slope. Halfway, the ground turned slippery — and down {child_name} slid, all the way to the bottom. Thump.

'Again!' Faster this time. Thump.

{child_name} lay in the moss and groaned. 'The top is too far. It is just too big.'

'Hmm,' said {companion_name}, tucking one pale pebble away for their collection. 'Old paths never shout. They whisper, one stone at a time.'

{child_name} sat up — and stopped. The big slide had scraped a stripe of moss away. Look at what is peeking out. Something flat and pale, with one straight edge. Can you see it too? A step.

A stone step! And past it, under the moss, another. The steps curved sideways around the ridge — the very way the pebble trail pointed. The wrong way was the way up.

'I kept trying to swallow the ridge in one gulp,' whispered {child_name}. 'But nobody has to. You can do the first small step. Anyone can do one stone.'

So {child_name} stepped onto the first stone. The {object_motif} glowed just far enough to show the next one. One thing, then the next, like watching one light at a time. Stone by stone, around and up, {child_name} climbed the whole ridge without a single slip.

At the top, the sky bloomed. Stars drifted down as slow as petals.

'{refrain},' breathed {companion_name}.

They watched until the last star settled. Far across the valley, another faint line of pale stones climbed another hill. Another stair. For another night.

Down the steps they went, one by one, slower and slower.

Warm moss. Quiet sky.

{refrain}.`,
  },

  {
    ordinal: 3, title: "The Keeper's Post",
    concept: "Noticing a distraction and gently coming back", callback: "Doing one thing at a time (Level 1)", ageFloor: 4,
    summary: "Tonight, for the very first time, the hero is trusted to tend the light that guides the small night-travellers home — a light that mysteriously dims now and then, no matter how hard anyone stares. The answer has been carved into the keeper's post all along: every keeper's mind wanders. The light never asks you not to drift. It glows for the keeper who notices, and gently comes back.",
    teachingNote: "Focus is not never getting distracted — it is noticing kindly that you have drifted, and choosing to come back.",
    learningBeat: "noticing, and coming back",
    ageVariants: {
  '3-4': {
    audioTemplate: `Every night in {setting}, the {object_motif} sat on an old post, showing the small night-travellers the way home.

Tonight, for the first time, the {hero} got to be the keeper!

'Keep it bright,' said {companion_name}. 'It has a little secret.'

The {hero} stared at the light. Stare, stare, stare. Never look away!

But a silver leaf floated by. Ooooh. The {hero}'s thoughts floated after it. Fizz! The light went low.

'Oh no!' The {hero} hurried back. The light rose again.

Then a funny bug walked by. The thoughts walked after it. Fizz! Low again!

The {hero} looked at the old post. Look close. Tiny carved lines, wiggling away and bending back. Can you see it too? Little paths coming home!

'Oh!' said the {hero}. 'Every keeper wandered! The light just wants noticing, and coming back!'

So the {hero} wandered, noticed, and came back. Each time, the light glowed warmer.

The night-travellers came home. One. Two. Three. Safe.

'{refrain},' whispered {companion_name}.

The {hero} carved one tiny wiggle on the post. A keeper's mark.

The light glowed slow and low. Sleepy keeper. Sleepy light.

{refrain}.`,
    scriptTemplate: `Every night in {setting}, the {object_motif} sat on an old post, showing the small night-travellers the way home.

Tonight, for the first time, {child_name} the {hero} got to be the keeper!

'Keep it bright,' said {companion_name}. 'It has a little secret.'

{child_name} stared at the light. Stare, stare, stare. Never look away!

But a silver leaf floated by. Ooooh. {child_name}'s thoughts floated after it. Fizz! The light went low.

'Oh no!' {child_name} hurried back. The light rose again.

Then a funny bug walked by. The thoughts walked after it. Fizz! Low again!

{child_name} looked at the old post. Look close. Tiny carved lines, wiggling away and bending back. Can you see it too? Little paths coming home!

'Oh!' said {child_name}. 'Every keeper wandered! The light just wants noticing, and coming back!'

So {child_name} wandered, noticed, and came back. Each time, the light glowed warmer.

The night-travellers came home. One. Two. Three. Safe.

'{refrain},' whispered {companion_name}.

{child_name} carved one tiny wiggle on the post. A keeper's mark.

The light glowed slow and low. Sleepy keeper. Sleepy light.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Every night in {setting}, the {object_motif} sat on an old wooden post, showing the small night-travellers the way home. Keeping it bright was the most important job there was.

And tonight, for the very first time, the job belonged to the {hero}.

'It has one secret,' said {companion_name}. 'It dims, now and then. The keeper before me never said why. They only smiled, and tapped the post.'

The {hero} had a plan. 'Simple. I will stare and never look away. Not once.'

So the {hero} stared. Stare, stare, stare.

Then a silver leaf drifted past, turning slow somersaults. What a leaf, thought the {hero}. You could build a little boat from that. A whole fleet of leaf-boats, sailing—

Fizz. The light dropped low. The {hero} snapped back, three whole steps from the post without ever deciding to walk.

'No, no, no!' The {hero} rushed back and stared harder. So hard that they started counting blinks, and counting turned into daydreaming about numbers — fizz — low again!

The {hero} slumped against the post, cross as a knot. 'I am the worst keeper ever.'

And that was when the {hero} finally saw the post itself. It was covered, top to bottom, in tiny carved lines. Look closely. Every little line wiggles away — and bends back. Can you see it too? Hundreds of tiny paths, all coming home.

'Oh,' whispered the {hero}. 'Every keeper wandered. Every single one. The light never wanted staring. It wants noticing, and coming back.'

The {hero} tried it. A thought drifted after the leaf again — and the {hero} noticed, smiled, and came gently back. The light swelled warm. It happened again; again the {hero} returned, and the light glowed warmer still. Each coming-back fed it.

Out of the dark came the night-travellers, small and sleepy, following the steady glow home. Every last one made it.

'{refrain},' whispered {companion_name}, watching them pass.

Before bed, the {hero} carved one tiny new line on the post. It wiggled away. It bent back home. A keeper's mark.

At the very bottom, one carving was older than all the rest — the longest wander, the gentlest curve home. Whose? That could wait for morning.

The light glowed low and steady. So did the {hero}.

{refrain}.`,
    scriptTemplate: `Every night in {setting}, the {object_motif} sat on an old wooden post, showing the small night-travellers the way home. Keeping it bright was the most important job there was.

And tonight, for the very first time, the job belonged to {child_name} the {hero}.

'It has one secret,' said {companion_name}. 'It dims, now and then. The keeper before me never said why. They only smiled, and tapped the post.'

{child_name} had a plan. 'Simple. I will stare and never look away. Not once.'

So {child_name} stared. Stare, stare, stare.

Then a silver leaf drifted past, turning slow somersaults. What a leaf, thought {child_name}. You could build a little boat from that. A whole fleet of leaf-boats, sailing—

Fizz. The light dropped low. {child_name} snapped back, three whole steps from the post without ever deciding to walk.

'No, no, no!' {child_name} rushed back and stared harder. So hard that they started counting blinks, and counting turned into daydreaming about numbers — fizz — low again!

{child_name} slumped against the post, cross as a knot. 'I am the worst keeper ever.'

And that was when {child_name} finally saw the post itself. It was covered, top to bottom, in tiny carved lines. Look closely. Every little line wiggles away — and bends back. Can you see it too? Hundreds of tiny paths, all coming home.

'Oh,' whispered {child_name}. 'Every keeper wandered. Every single one. The light never wanted staring. It wants noticing, and coming back.'

{child_name} tried it. A thought drifted after the leaf again — and {child_name} noticed, smiled, and came gently back. The light swelled warm. It happened again; again {child_name} returned, and the light glowed warmer still. Each coming-back fed it.

Out of the dark came the night-travellers, small and sleepy, following the steady glow home. Every last one made it.

'{refrain},' whispered {companion_name}, watching them pass.

Before bed, {child_name} carved one tiny new line on the post. It wiggled away. It bent back home. A keeper's mark.

At the very bottom, one carving was older than all the rest — the longest wander, the gentlest curve home. Whose? That could wait for morning.

The light glowed low and steady. So did {child_name}.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Every night in {setting}, the {object_motif} sat on top of an old wooden post, its glow reaching across the dark to bring the small night-travellers home — little sleepy creatures trailing in late, steering by one steady light. Keeping it bright was the oldest and most important job there was.

And tonight, for the very first time, the job belonged to the {hero}.

The {hero} had wanted this forever. A real keeper. A whole night. Every traveller home safe under their watch.

'One thing to know,' said {companion_name}, settling nearby with a wink. 'It dims. Now and then, for no reason anyone ever wrote down. The keeper before me never explained. They only smiled, and tapped the post.'

Smiled and tapped the post. That was no kind of instruction. So the {hero} made a better plan: stare at the light and never look away. Not once.

For a while, it went beautifully. The light glowed. The {hero} stared.

Then a silver leaf drifted by, turning slow somersaults. What a leaf, the {hero} thought. Broad as a sail. You could build a boat from a leaf like that. A whole fleet, with tiny flags—

Fizz. The light sank low. The {hero} surfaced three whole steps from the post, with no memory of walking. Hurrying back brought the glow up again, but the plan had a scratch in it now.

'Right,' muttered the {hero}, and stared twice as hard. Staring twice as hard meant noticing every blink, which became counting blinks, which became wondering how high the count would go by morning — fizz — low again! Harder still: the {hero} held so fierce and still that thoughts about holding still crowded out the light entirely. Fizz.

The {hero} slid down and sat with their back against the post, thoroughly cross. 'The harder I grip it, the more I drop it. I am the worst keeper this post has ever had.'

And that is when the {hero}, slumped and scowling, finally looked at the post itself.

It was carved. Not with words — with lines. Hundreds of tiny lines, from the ground all the way up, each no longer than a whisker. Follow just one. It wiggles away, wanders... and bends back where it began. Can you see it too? A tiny path that leaves, and comes home.

Every line on the post did it. Away, and home. Hundreds of keepers, and every one had carved the same small confession: I wandered too.

'Oh,' said the {hero}, very softly. 'It was never about never wandering. Not one keeper managed that. The light does not want staring — it wants noticing, and coming back. That is why they smiled and tapped the post.'

The {hero} stood and tried it. The leaf-boat thought came sailing back, flags and all — and the {hero} noticed it, nodded to it like a passing friend, and came gently home to the light. The glow swelled, warmer than staring ever made it. Another thought wandered off with the {hero} in tow; the noticing came quicker, the coming-back easier, the light warmer still. Every return fed it. One thing, then the next — with a kind new rule stitched on: no scolding. Just notice, and come back.

Out of the dark came the night-travellers, small and sleepy, one after another, steering home by a light that barely trembled again. The {hero} counted them in, lost count twice, noticed, came back, and did not mind at all.

'{refrain},' whispered {companion_name}, as the last little traveller padded past the post and home.

Before bed, the {hero} carved one new line, low on the post where there was room. It wiggled away. It wandered. It bent all the way home. A keeper's mark, earned the only way there was.

And right at the bottom, fainter than all the others, one carving showed the longest wander of all — and the gentlest curve home. Whose it was could wait for morning.

The light glowed low and steady. The night breathed slow.

{refrain}.`,
    scriptTemplate: `Every night in {setting}, the {object_motif} sat on top of an old wooden post, its glow reaching across the dark to bring the small night-travellers home — little sleepy creatures trailing in late, steering by one steady light. Keeping it bright was the oldest and most important job there was.

And tonight, for the very first time, the job belonged to {child_name} the {hero}.

{child_name} had wanted this forever. A real keeper. A whole night. Every traveller home safe under their watch.

'One thing to know,' said {companion_name}, settling nearby with a wink. 'It dims. Now and then, for no reason anyone ever wrote down. The keeper before me never explained. They only smiled, and tapped the post.'

Smiled and tapped the post. That was no kind of instruction. So {child_name} made a better plan: stare at the light and never look away. Not once.

For a while, it went beautifully. The light glowed. {child_name} stared.

Then a silver leaf drifted by, turning slow somersaults. What a leaf, {child_name} thought. Broad as a sail. You could build a boat from a leaf like that. A whole fleet, with tiny flags—

Fizz. The light sank low. {child_name} surfaced three whole steps from the post, with no memory of walking. Hurrying back brought the glow up again, but the plan had a scratch in it now.

'Right,' muttered {child_name}, and stared twice as hard. Staring twice as hard meant noticing every blink, which became counting blinks, which became wondering how high the count would go by morning — fizz — low again! Harder still: {child_name} held so fierce and still that thoughts about holding still crowded out the light entirely. Fizz.

{child_name} slid down and sat with their back against the post, thoroughly cross. 'The harder I grip it, the more I drop it. I am the worst keeper this post has ever had.'

And that is when {child_name}, slumped and scowling, finally looked at the post itself.

It was carved. Not with words — with lines. Hundreds of tiny lines, from the ground all the way up, each no longer than a whisker. Follow just one. It wiggles away, wanders... and bends back where it began. Can you see it too? A tiny path that leaves, and comes home.

Every line on the post did it. Away, and home. Hundreds of keepers, and every one had carved the same small confession: I wandered too.

'Oh,' said {child_name}, very softly. 'It was never about never wandering. Not one keeper managed that. The light does not want staring — it wants noticing, and coming back. That is why they smiled and tapped the post.'

{child_name} stood and tried it. The leaf-boat thought came sailing back, flags and all — and {child_name} noticed it, nodded to it like a passing friend, and came gently home to the light. The glow swelled, warmer than staring ever made it. Another thought wandered off with {child_name} in tow; the noticing came quicker, the coming-back easier, the light warmer still. Every return fed it. One thing, then the next — with a kind new rule stitched on: no scolding. Just notice, and come back.

Out of the dark came the night-travellers, small and sleepy, one after another, steering home by a light that barely trembled again. {child_name} counted them in, lost count twice, noticed, came back, and did not mind at all.

'{refrain},' whispered {companion_name}, as the last little traveller padded past the post and home.

Before bed, {child_name} carved one new line, low on the post where there was room. It wiggled away. It wandered. It bent all the way home. A keeper's mark, earned the only way there was.

And right at the bottom, fainter than all the others, one carving showed the longest wander of all — and the gentlest curve home. Whose it was could wait for morning.

The light glowed low and steady. The night breathed slow.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `Every night in {setting}, the {object_motif} was set on top of an old wooden post, its glow reaching across the dark like a held-out hand to bring the small night-travellers home. They came late and sleepy, in ones and twos, steering by that single steady light. Keeping it bright was the oldest job there was, and the most quietly important.

Tonight, for the first time in the {hero}'s whole life, the job was theirs.

The {hero} had asked all season. Tonight the answer was finally yes, and the want was simple: a perfect watch. Every traveller home. Proof that they were big enough for the biggest small job there was.

'One thing you should know,' said {companion_name}, settling into the shadows with a wink. 'It dims. Now and then, out of nowhere. I asked the keeper before me a hundred times. They only ever smiled, and tapped the post.'

Smiled and tapped the post. Keepers, the {hero} decided, enjoyed being mysterious. No matter. The plan was iron: stare at the light, never look away, guard it with unbroken attention until sunrise.

For a while it went perfectly. Then a silver leaf came somersaulting slowly past, broad as a little sail, and the {hero} thought — without ever agreeing to think it — what a boat that leaf would make. A fleet of them. Tiny flags. A moonlight regatta, and who would judge it—

Fizz. The light sagged. The {hero} surfaced from the daydream three full steps from the post, no memory of walking, and hurried back, cheeks hot. The glow recovered. The plan did not.

Because now the {hero} stared harder, and staring harder went strange at once. Noticing every blink became counting them; counting became a whole imagined ceremony for the highest blink-count ever recorded — fizz. Again. The third drift was about breakfast. The fourth was the ceremony again, which felt deeply unfair, having been dismissed once already.

Each time, the light dimmed. Each time, the {hero} came back crosser, gripping their own attention tighter, and each tighter grip slipped sooner. That was the part that stung: scolding themselves for wandering turned out to be just one more way of wandering.

The {hero} finally slid down and sat against the post, defeated. 'The harder I hold it, the faster I drop it,' they said aloud. 'I am the worst keeper this light has ever had.'

The post, being a post, said nothing. But down there, nose to the wood for the first time all night, the {hero} finally saw it. Carved from top to bottom. Not names, not words — lines. Thousands of tiny lines, each no longer than a whisker. Pick one and follow it. It sets off, wanders, wobbles somewhere unplanned... and bends back, every time, to exactly where it began. Can you see it too? Tiny paths. Every one leaves. Every one comes home.

The {hero} sat still, doing the arithmetic. Thousands of marks. Generations of keepers. And not one straight line on the whole post — not one keeper whose attention had never left the light.

'It was never about never wandering,' the {hero} said slowly. 'Nobody has ever done it, and they all still got the travellers home. The light does not run on staring. It runs on noticing, and coming back. Wandering was never the failure — staying gone is. That is why they smiled and tapped the post. The answer was carved here the whole time.'

The {hero} stood and kept watch the new way. The regatta came sailing grandly back, flags and all — and the {hero} noticed it, let it pass like a boat rounding a buoy, and came home to the light. The glow rose, warmer than staring had ever coaxed from it. The breakfast thought returned; noticed, released — warmer still. Every coming-back fed the light, as if it had always preferred honest keepers to perfect ones. One thing, then the next, and a gentle homecoming each time the mind slipped its rope.

The travellers arrived not long after: small, sleepy, unbothered, trailing in toward a light that barely trembled for the rest of the watch. The {hero} counted them home, lost count twice, noticed, returned, and found they did not mind at all. The count was not the job. The coming back was.

'{refrain},' whispered {companion_name}, as the last traveller passed the post and vanished, safe, into the warm dark.

Before bed, the {hero} added one small line, low on the post where there was room: a line that wanders — honestly, generously — then curves all the way home. A keeper's mark, earned the only way there is.

At the very bottom of the post, fainter than all the rest, one ancient carving showed the longest wander of all, and the gentlest curve home. Whose it was, and where they went — morning questions, both.

The light glowed low and even. The night breathed slow around it.

{refrain}.`,
    scriptTemplate: `Every night in {setting}, the {object_motif} was set on top of an old wooden post, its glow reaching across the dark like a held-out hand to bring the small night-travellers home. They came late and sleepy, in ones and twos, steering by that single steady light. Keeping it bright was the oldest job there was, and the most quietly important.

Tonight, for the first time in {child_name} the {hero}'s whole life, the job was theirs.

{child_name} had asked all season. Tonight the answer was finally yes, and the want was simple: a perfect watch. Every traveller home. Proof that they were big enough for the biggest small job there was.

'One thing you should know,' said {companion_name}, settling into the shadows with a wink. 'It dims. Now and then, out of nowhere. I asked the keeper before me a hundred times. They only ever smiled, and tapped the post.'

Smiled and tapped the post. Keepers, {child_name} decided, enjoyed being mysterious. No matter. The plan was iron: stare at the light, never look away, guard it with unbroken attention until sunrise.

For a while it went perfectly. Then a silver leaf came somersaulting slowly past, broad as a little sail, and {child_name} thought — without ever agreeing to think it — what a boat that leaf would make. A fleet of them. Tiny flags. A moonlight regatta, and who would judge it—

Fizz. The light sagged. {child_name} surfaced from the daydream three full steps from the post, no memory of walking, and hurried back, cheeks hot. The glow recovered. The plan did not.

Because now {child_name} stared harder, and staring harder went strange at once. Noticing every blink became counting them; counting became a whole imagined ceremony for the highest blink-count ever recorded — fizz. Again. The third drift was about breakfast. The fourth was the ceremony again, which felt deeply unfair, having been dismissed once already.

Each time, the light dimmed. Each time, {child_name} came back crosser, gripping their own attention tighter, and each tighter grip slipped sooner. That was the part that stung: scolding themselves for wandering turned out to be just one more way of wandering.

{child_name} finally slid down and sat against the post, defeated. 'The harder I hold it, the faster I drop it,' they said aloud. 'I am the worst keeper this light has ever had.'

The post, being a post, said nothing. But down there, nose to the wood for the first time all night, {child_name} finally saw it. Carved from top to bottom. Not names, not words — lines. Thousands of tiny lines, each no longer than a whisker. Pick one and follow it. It sets off, wanders, wobbles somewhere unplanned... and bends back, every time, to exactly where it began. Can you see it too? Tiny paths. Every one leaves. Every one comes home.

{child_name} sat still, doing the arithmetic. Thousands of marks. Generations of keepers. And not one straight line on the whole post — not one keeper whose attention had never left the light.

'It was never about never wandering,' {child_name} said slowly. 'Nobody has ever done it, and they all still got the travellers home. The light does not run on staring. It runs on noticing, and coming back. Wandering was never the failure — staying gone is. That is why they smiled and tapped the post. The answer was carved here the whole time.'

{child_name} stood and kept watch the new way. The regatta came sailing grandly back, flags and all — and {child_name} noticed it, let it pass like a boat rounding a buoy, and came home to the light. The glow rose, warmer than staring had ever coaxed from it. The breakfast thought returned; noticed, released — warmer still. Every coming-back fed the light, as if it had always preferred honest keepers to perfect ones. One thing, then the next, and a gentle homecoming each time the mind slipped its rope.

The travellers arrived not long after: small, sleepy, unbothered, trailing in toward a light that barely trembled for the rest of the watch. {child_name} counted them home, lost count twice, noticed, returned, and found they did not mind at all. The count was not the job. The coming back was.

'{refrain},' whispered {companion_name}, as the last traveller passed the post and vanished, safe, into the warm dark.

Before bed, {child_name} added one small line, low on the post where there was room: a line that wanders — honestly, generously — then curves all the way home. A keeper's mark, earned the only way there is.

At the very bottom of the post, fainter than all the rest, one ancient carving showed the longest wander of all, and the gentlest curve home. Whose it was, and where they went — morning questions, both.

The light glowed low and even. The night breathed slow around it.

{refrain}.`
  }
},
    audioTemplate: `Every night in {setting}, the {object_motif} sat on an old wooden post, showing the small night-travellers the way home. Keeping it bright was the most important job there was.

And tonight, for the very first time, the job belonged to the {hero}.

'It has one secret,' said {companion_name}. 'It dims, now and then. The keeper before me never said why. They only smiled, and tapped the post.'

The {hero} had a plan. 'Simple. I will stare and never look away. Not once.'

So the {hero} stared. Stare, stare, stare.

Then a silver leaf drifted past, turning slow somersaults. What a leaf, thought the {hero}. You could build a little boat from that. A whole fleet of leaf-boats, sailing—

Fizz. The light dropped low. The {hero} snapped back, three whole steps from the post without ever deciding to walk.

'No, no, no!' The {hero} rushed back and stared harder. So hard that they started counting blinks, and counting turned into daydreaming about numbers — fizz — low again!

The {hero} slumped against the post, cross as a knot. 'I am the worst keeper ever.'

And that was when the {hero} finally saw the post itself. It was covered, top to bottom, in tiny carved lines. Look closely. Every little line wiggles away — and bends back. Can you see it too? Hundreds of tiny paths, all coming home.

'Oh,' whispered the {hero}. 'Every keeper wandered. Every single one. The light never wanted staring. It wants noticing, and coming back.'

The {hero} tried it. A thought drifted after the leaf again — and the {hero} noticed, smiled, and came gently back. The light swelled warm. It happened again; again the {hero} returned, and the light glowed warmer still. Each coming-back fed it.

Out of the dark came the night-travellers, small and sleepy, following the steady glow home. Every last one made it.

'{refrain},' whispered {companion_name}, watching them pass.

Before bed, the {hero} carved one tiny new line on the post. It wiggled away. It bent back home. A keeper's mark.

At the very bottom, one carving was older than all the rest — the longest wander, the gentlest curve home. Whose? That could wait for morning.

The light glowed low and steady. So did the {hero}.

{refrain}.`,
    scriptTemplate: `Every night in {setting}, the {object_motif} sat on an old wooden post, showing the small night-travellers the way home. Keeping it bright was the most important job there was.

And tonight, for the very first time, the job belonged to {child_name} the {hero}.

'It has one secret,' said {companion_name}. 'It dims, now and then. The keeper before me never said why. They only smiled, and tapped the post.'

{child_name} had a plan. 'Simple. I will stare and never look away. Not once.'

So {child_name} stared. Stare, stare, stare.

Then a silver leaf drifted past, turning slow somersaults. What a leaf, thought {child_name}. You could build a little boat from that. A whole fleet of leaf-boats, sailing—

Fizz. The light dropped low. {child_name} snapped back, three whole steps from the post without ever deciding to walk.

'No, no, no!' {child_name} rushed back and stared harder. So hard that they started counting blinks, and counting turned into daydreaming about numbers — fizz — low again!

{child_name} slumped against the post, cross as a knot. 'I am the worst keeper ever.'

And that was when {child_name} finally saw the post itself. It was covered, top to bottom, in tiny carved lines. Look closely. Every little line wiggles away — and bends back. Can you see it too? Hundreds of tiny paths, all coming home.

'Oh,' whispered {child_name}. 'Every keeper wandered. Every single one. The light never wanted staring. It wants noticing, and coming back.'

{child_name} tried it. A thought drifted after the leaf again — and {child_name} noticed, smiled, and came gently back. The light swelled warm. It happened again; again {child_name} returned, and the light glowed warmer still. Each coming-back fed it.

Out of the dark came the night-travellers, small and sleepy, following the steady glow home. Every last one made it.

'{refrain},' whispered {companion_name}, watching them pass.

Before bed, {child_name} carved one tiny new line on the post. It wiggled away. It bent back home. A keeper's mark.

At the very bottom, one carving was older than all the rest — the longest wander, the gentlest curve home. Whose? That could wait for morning.

The light glowed low and steady. So did {child_name}.

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
    audioTemplate: `The {hero} was making a path. A long path of little stones. It went all the way across {setting}. Stone by stone. Day by day. The {hero} worked and worked. It was fun to build. The {hero} loved every stone.

The big part was done now. The path went far and long. It looked so nice. Only a few stones were left. Just the last little bit at the end.

But the {hero} was tired. The fun part was over. The last stones felt dull and slow. The {hero} sat down in the grass. Making things is fun. Finishing is not always fun. But the path was not done yet. "I am done," said the {hero}. "This is close enough for me."

{companion_name} sat down close by. {companion_name} looked at the long path. Then at the small gap at the end. "It is almost a path," said {companion_name}. "Almost. But a path is only finished when you walk its final stones."

The {hero} looked at the gap. It was small. It was so small. "Just a few more," said {companion_name}. "I will stay right here with you."

So the {hero} picked up the {object_motif}. The {hero} set one stone. Then one more. Then one more. Each stone clicked in place. The gap got smaller. And smaller. And then it was gone.

The very last stone was the biggest one. The {hero} lifted it up. The {hero} set it down soft. Click. It fit just right.

The path was done. All the way done. The {hero} could walk it end to end. So the {hero} did. Step, step, step. Right to the very last stone. The {hero} did not stop this time.

"You did the whole thing," said {companion_name}. "Finishing has its own kind of joy."

The {hero} felt it too. A soft, glad feeling. Not loud at all. Just warm and quiet and true. It was a good, done feeling. The {hero} held the {object_motif} close.

The path lay quiet across {setting}. Every stone in its place. The {hero} gave a big, sleepy yawn. The whole path was done. And it felt good.

{refrain}.`,
    scriptTemplate: `{child_name} was making a path. A long path of little stones. It went all the way across {setting}. Stone by stone. Day by day. {child_name} worked and worked. It was fun to build. {child_name} loved every stone.

The big part was done now. The path went far and long. It looked so nice. Only a few stones were left. Just the last little bit at the end.

But {child_name} was tired. The fun part was over. The last stones felt dull and slow. {child_name} sat down in the grass. Making things is fun. Finishing is not always fun. But the path was not done yet. "I am done," said {child_name}. "This is close enough for me."

{companion_name} sat down close by. {companion_name} looked at the long path. Then at the small gap at the end. "It is almost a path," said {companion_name}. "Almost. But a path is only finished when you walk its final stones."

{child_name} looked at the gap. It was small. It was so small. "Just a few more," said {companion_name}. "I will stay right here with you."

So {child_name} picked up the {object_motif}. {child_name} set one stone. Then one more. Then one more. Each stone clicked in place. The gap got smaller. And smaller. And then it was gone.

The very last stone was the biggest one. {child_name} lifted it up. {child_name} set it down soft. Click. It fit just right.

The path was done. All the way done. {child_name} could walk it end to end. So {child_name} did. Step, step, step. Right to the very last stone. {child_name} did not stop this time.

"You did the whole thing," said {companion_name}. "Finishing has its own kind of joy."

{child_name} felt it too. A soft, glad feeling. Not loud at all. Just warm and quiet and true. It was a good, done feeling. {child_name} held the {object_motif} close.

The path lay quiet across {setting}. Every stone in its place. {child_name} gave a big, sleepy yawn. The whole path was done. And it felt good.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `All week, the {hero} had been building a path of stones across {setting}. It was a big idea, the biggest one the {hero} had ever tried. Stone by stone, the path grew longer, curving past the tall grass and around the little hill. Every morning the {hero} could not wait to add more.

The first part was the best part. Choosing the stones. Fitting them together like puzzle pieces. Watching the path stretch farther and farther. The {hero} felt proud each time it grew. Friends walked by and said how good it looked. That felt wonderful. The {hero} imagined the finished path and could almost see it done.

But now the path was almost done. Only a short stretch was left, a small gap near the far end. And somehow, the fun had drained away. The exciting part was over. What was left was just plain, slow work — lifting the last heavy stones and pressing them into the dirt. The {hero} kept finding other things to do instead.

The {hero} sat down and sighed. "It is basically finished," the {hero} said. "You can already tell it is a path. Nobody would even notice the gap. I think I am done."

{companion_name} came and stood beside the path, looking all the way down its long curve to the little empty space at the end. "It is a wonderful path," {companion_name} said. "Almost a whole one." "Almost is fine," said the {hero}. {companion_name} shook their head gently. "Remember what we learned? A plan is a path. And a path is only finished when you walk its final stones. Right now, it stops just short."

The {hero} looked at the gap. It really was small. But the {hero}'s arms felt tired, and the last stones looked heavy. "It is the boring part now," the {hero} said quietly. "Then we will do the boring part together," said {companion_name}. "A few stones at a time. I will hand them to you."

So they began. {companion_name} rolled the {object_motif} over, and the {hero} lifted the first stone and set it down. It fit. Then another. Then another. They found a rhythm. {companion_name} passed a stone, the {hero} pressed it down. Pass, press. Pass, press. It was slow, but it was steady. Each one made a soft, solid click as it settled into place. The gap grew smaller. Smaller. The {hero} stopped noticing how tired the work was, because now the end was close enough to see.

The very last stone was the widest of all. The {hero} carried it with both arms, knelt down, and set it carefully into the final space. It fit perfectly. The path was whole. Not almost whole. Whole.

The {hero} stood up and looked. The path ran all the way across {setting} now, one long unbroken line from the very start to the very end. It looked different, finished. A path that stopped halfway was just a pile of stones. A path that reached the end was a real path — one you could actually follow somewhere. Then the {hero} walked it, slowly, from one end to the other, without a single gap to step over.

"You took the last steps," said {companion_name}. "Most people stop when the fun runs out. You did not. Finishing has its own kind of joy."

And the {hero} could feel it — a calm, settled gladness, different from the excited feeling at the start. Quieter. Deeper. The {hero} held the {object_motif} and looked back down the finished path one more time.

The wind moved softly over {setting}. Somewhere far off, everything was still. The {hero} gave a slow, happy yawn, tired in the good way you feel when a thing is truly done. Tomorrow, the {hero} could walk the whole path again, start to finish.

{refrain}.`,
    scriptTemplate: `All week, {child_name} had been building a path of stones across {setting}. It was a big idea, the biggest one {child_name} had ever tried. Stone by stone, the path grew longer, curving past the tall grass and around the little hill. Every morning {child_name} could not wait to add more.

The first part was the best part. Choosing the stones. Fitting them together like puzzle pieces. Watching the path stretch farther and farther. {child_name} felt proud each time it grew. Friends walked by and said how good it looked. That felt wonderful. {child_name} imagined the finished path and could almost see it done.

But now the path was almost done. Only a short stretch was left, a small gap near the far end. And somehow, the fun had drained away. The exciting part was over. What was left was just plain, slow work — lifting the last heavy stones and pressing them into the dirt. {child_name} kept finding other things to do instead.

{child_name} sat down and sighed. "It is basically finished," {child_name} said. "You can already tell it is a path. Nobody would even notice the gap. I think I am done."

{companion_name} came and stood beside the path, looking all the way down its long curve to the little empty space at the end. "It is a wonderful path," {companion_name} said. "Almost a whole one." "Almost is fine," said {child_name}. {companion_name} shook their head gently. "Remember what we learned? A plan is a path. And a path is only finished when you walk its final stones. Right now, it stops just short."

{child_name} looked at the gap. It really was small. But {child_name}'s arms felt tired, and the last stones looked heavy. "It is the boring part now," {child_name} said quietly. "Then we will do the boring part together," said {companion_name}. "A few stones at a time. I will hand them to you."

So they began. {companion_name} rolled the {object_motif} over, and {child_name} lifted the first stone and set it down. It fit. Then another. Then another. They found a rhythm. {companion_name} passed a stone, {child_name} pressed it down. Pass, press. Pass, press. It was slow, but it was steady. Each one made a soft, solid click as it settled into place. The gap grew smaller. Smaller. {child_name} stopped noticing how tired the work was, because now the end was close enough to see.

The very last stone was the widest of all. {child_name} carried it with both arms, knelt down, and set it carefully into the final space. It fit perfectly. The path was whole. Not almost whole. Whole.

{child_name} stood up and looked. The path ran all the way across {setting} now, one long unbroken line from the very start to the very end. It looked different, finished. A path that stopped halfway was just a pile of stones. A path that reached the end was a real path — one you could actually follow somewhere. Then {child_name} walked it, slowly, from one end to the other, without a single gap to step over.

"You took the last steps," said {companion_name}. "Most people stop when the fun runs out. You did not. Finishing has its own kind of joy."

And {child_name} could feel it — a calm, settled gladness, different from the excited feeling at the start. Quieter. Deeper. {child_name} held the {object_motif} and looked back down the finished path one more time.

The wind moved softly over {setting}. Somewhere far off, everything was still. {child_name} gave a slow, happy yawn, tired in the good way you feel when a thing is truly done. Tomorrow, {child_name} could walk the whole path again, start to finish.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `For eleven days, the {hero} had been building a stone path across {setting}, and it was nearly the best thing the {hero} had ever made. It began at the old wooden gate and wound between the tall grasses, curving exactly where the {hero} had planned it to curve, dipping and rising with the land. Anyone could see it was going to be beautiful.

Back at the start, the work had felt like magic. Every stone was a decision — this one flat, that one round, this one to fill the awkward corner. There was nothing quite like the moment a difficult stone finally dropped into place and sat there like it had always belonged. The path had grown a little longer each day, and each day the {hero} had run outside first thing to look at how far it had come. There was always something new to figure out, and figuring it out was the fun.

But now, near the end, the magic had quietly slipped away. Only a short stretch remained, maybe fifteen stones' worth, a stubborn little gap between the path and the far fencepost where it was meant to finish. And the {hero} did not want to lay those last fifteen stones. The shapes were all decided now. There were no more clever choices to make. There was only the heavy, dull, aching work of lifting and setting, lifting and setting, until the gap closed. Every time the {hero} thought about it, some other task suddenly seemed more interesting.

The {hero} flopped down in the grass and stared at the sky. "It's done enough," the {hero} announced to no one in particular. "You can tell exactly where it goes. Everyone already knows it's a path. Why does the last bit even matter?"

A shadow fell across the grass. {companion_name} had come to sit nearby, following the line of the path with careful eyes — all the way down to the place where it simply stopped, a few steps short of the fence. "It's the best thing you've built," {companion_name} said. "Then it's fine to leave it," said the {hero} quickly. "Almost is basically the same as done." "Is it, though?" {companion_name} asked, not unkindly. "Walk it for me."

The {hero} groaned but got up and walked it — from the gate, along the whole long curve, right to the end. And there, at the last laid stone, the {hero} had to stop, because the path stopped, and there was nothing to step onto but bare dirt and the fence a few feet off.

"See?" said {companion_name}, coming to stand beside the gap. "You remember what we said before — that a plan is a path. Well, here's the other half of it. A path is only finished when you walk its final stones. Right now, it takes you almost somewhere. Almost somewhere isn't the same as somewhere."

The {hero} looked at the gap. It was true. The path led all that way and then just quit, dropping whoever walked it into the weeds. "But the fun part is over," the {hero} admitted, and it felt like a real confession. "The good bit was the middle. This last part is just boring." "I know," said {companion_name}, sitting down and rolling the {object_motif} closer. "The end of a hard thing is almost always the dull part. That's exactly why so many people stop right here. But we're not going to. Fifteen stones. You and me. I'll pass, you place."

So that's what they did. {companion_name} slid each stone across, and the {hero} knelt and pressed it into the dirt, twisting it until it sat solid and level. Pass, place. Pass, place. It was not exciting. But it had its own quiet rhythm, and after a while the {hero} noticed something surprising: the closer the fence came, the more the {hero} wanted to reach it. The gap shrank from fifteen stones to ten, to five, to two.

The very last stone was a wide, flat one, and the {hero} chose it on purpose — a good stone to finish on. The {hero} fitted it snug against the fencepost. It clicked into place. And that was it. There was no gap left anywhere. The path ran unbroken from the gate to the fence, one clean line across the whole of {setting}.

The {hero} walked it again. This time, at the end, there was no stopping short. The last stone carried the {hero} right up to the fence, exactly where the path had always been meant to arrive. It felt completely different from the almost-finished version. It felt like arriving.

It was such a small thing, those last fifteen stones — and yet without them the whole path would have led nowhere, stopping short in the weeds after all that work. Somehow the dull ending had mattered most of all.

"You did the whole thing," {companion_name} said, and there was real warmth in it. "Most people quit when the fun runs out, and their paths end in the weeds. Yours goes all the way. Finishing has its own kind of joy — you can only feel it once the last stone is down."

And the {hero} could feel it: not the loud excitement of the beginning, but something calmer and steadier, a satisfaction that sat quietly in the chest. The {hero} held the {object_motif} and looked back along the finished path, gate to fence, every stone in its place. The evening settled soft and blue over {setting}, and the {hero} let out a long, contented breath, tired in the very best way.

{refrain}.`,
    scriptTemplate: `For eleven days, {child_name} had been building a stone path across {setting}, and it was nearly the best thing {child_name} had ever made. It began at the old wooden gate and wound between the tall grasses, curving exactly where {child_name} had planned it to curve, dipping and rising with the land. Anyone could see it was going to be beautiful.

Back at the start, the work had felt like magic. Every stone was a decision — this one flat, that one round, this one to fill the awkward corner. There was nothing quite like the moment a difficult stone finally dropped into place and sat there like it had always belonged. The path had grown a little longer each day, and each day {child_name} had run outside first thing to look at how far it had come. There was always something new to figure out, and figuring it out was the fun.

But now, near the end, the magic had quietly slipped away. Only a short stretch remained, maybe fifteen stones' worth, a stubborn little gap between the path and the far fencepost where it was meant to finish. And {child_name} did not want to lay those last fifteen stones. The shapes were all decided now. There were no more clever choices to make. There was only the heavy, dull, aching work of lifting and setting, lifting and setting, until the gap closed. Every time {child_name} thought about it, some other task suddenly seemed more interesting.

{child_name} flopped down in the grass and stared at the sky. "It's done enough," {child_name} announced to no one in particular. "You can tell exactly where it goes. Everyone already knows it's a path. Why does the last bit even matter?"

A shadow fell across the grass. {companion_name} had come to sit nearby, following the line of the path with careful eyes — all the way down to the place where it simply stopped, a few steps short of the fence. "It's the best thing you've built," {companion_name} said. "Then it's fine to leave it," said {child_name} quickly. "Almost is basically the same as done." "Is it, though?" {companion_name} asked, not unkindly. "Walk it for me."

{child_name} groaned but got up and walked it — from the gate, along the whole long curve, right to the end. And there, at the last laid stone, {child_name} had to stop, because the path stopped, and there was nothing to step onto but bare dirt and the fence a few feet off.

"See?" said {companion_name}, coming to stand beside the gap. "You remember what we said before — that a plan is a path. Well, here's the other half of it. A path is only finished when you walk its final stones. Right now, it takes you almost somewhere. Almost somewhere isn't the same as somewhere."

{child_name} looked at the gap. It was true. The path led all that way and then just quit, dropping whoever walked it into the weeds. "But the fun part is over," {child_name} admitted, and it felt like a real confession. "The good bit was the middle. This last part is just boring." "I know," said {companion_name}, sitting down and rolling the {object_motif} closer. "The end of a hard thing is almost always the dull part. That's exactly why so many people stop right here. But we're not going to. Fifteen stones. You and me. I'll pass, you place."

So that's what they did. {companion_name} slid each stone across, and {child_name} knelt and pressed it into the dirt, twisting it until it sat solid and level. Pass, place. Pass, place. It was not exciting. But it had its own quiet rhythm, and after a while {child_name} noticed something surprising: the closer the fence came, the more {child_name} wanted to reach it. The gap shrank from fifteen stones to ten, to five, to two.

The very last stone was a wide, flat one, and {child_name} chose it on purpose — a good stone to finish on. {child_name} fitted it snug against the fencepost. It clicked into place. And that was it. There was no gap left anywhere. The path ran unbroken from the gate to the fence, one clean line across the whole of {setting}.

{child_name} walked it again. This time, at the end, there was no stopping short. The last stone carried {child_name} right up to the fence, exactly where the path had always been meant to arrive. It felt completely different from the almost-finished version. It felt like arriving.

It was such a small thing, those last fifteen stones — and yet without them the whole path would have led nowhere, stopping short in the weeds after all that work. Somehow the dull ending had mattered most of all.

"You did the whole thing," {companion_name} said, and there was real warmth in it. "Most people quit when the fun runs out, and their paths end in the weeds. Yours goes all the way. Finishing has its own kind of joy — you can only feel it once the last stone is down."

And {child_name} could feel it: not the loud excitement of the beginning, but something calmer and steadier, a satisfaction that sat quietly in the chest. {child_name} held the {object_motif} and looked back along the finished path, gate to fence, every stone in its place. The evening settled soft and blue over {setting}, and {child_name} let out a long, contented breath, tired in the very best way.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The path had been the {hero}'s whole world for the better part of two weeks. It ran out from the old gate and threaded its way across {setting}, a winding ribbon of fitted stones that followed the exact route the {hero} had mapped out on the very first morning. Back then it had been nothing but a line scratched in the dirt and a heap of loose rock. Now it was real — long and graceful and almost, almost complete.

For most of those two weeks, the building had been the finest kind of work there is: hard enough to matter, but full of problems worth solving. Every stone posed a small puzzle. Which face should sit up? Where would this odd triangular one finally fit? How do you make a curve out of things that only come in straight and crooked shapes? The {hero} had lost whole afternoons to it without once feeling bored, because there had always been a next decision waiting, a next small victory to chase.

The {hero} still remembered the afternoon the curve had finally come together — the way three stubborn stones had suddenly agreed to sit in a smooth arc, and how the {hero} had sat back on both heels and grinned at it like a puzzle solved. That was the feeling the whole project had promised, over and over: a problem, a struggle, and then the small bright click of getting it right.

But that was the trouble with the end. The decisions had run out. Everything interesting had already been figured. What remained was a short, unglamorous stretch — a couple of arm-lengths of gap between the last laid stone and the fencepost where the path was supposed to arrive. Fifteen stones, maybe. And the {hero} knew, with a sinking sort of certainty, exactly how those fifteen stones would go: lift, turn, seat, press. No mystery. No cleverness. Just the same tired motion over and over until the gap was gone.

It was strange, the {hero} thought, how the last little bit of a thing could feel so much heavier than all the rest of it put together. The middle had flown by. This end just sat there, dull and immovable, daring the {hero} to bother. And the honest truth — the truth the {hero} was slightly ashamed of — was that it would be so easy not to bother. The path already looked finished from a distance. Who would ever notice a gap of two arm-lengths near the fence?

So the {hero} sat down in the cool grass, leaned back on both hands, and made a quiet decision to be done. Not finished — done. There is a difference, and somewhere underneath, the {hero} knew it.

That was how {companion_name} found the scene: the long, beautiful, unfinished path, and its builder sprawled in the grass pretending not to care. {companion_name} did not say anything at first. They simply walked the length of it, slow and considering, eyes tracing every curve, until they reached the raw end where the stones gave out and the bare dirt began.

"It's very nearly the best thing you've ever made," {companion_name} said at last. The {hero} heard the word that mattered. "Nearly," the {hero} repeated, a little defensively. "It's basically done. Anyone can see where it's meant to go." "Anyone can see where it's meant to go," {companion_name} agreed. "That's not the same as it going there. Get up a moment. Walk it with me."

The {hero} sighed the enormous sigh of someone who knows they are about to lose an argument, and got up. Together they walked it, from the gate along the whole sweeping curve, and it was lovely, truly lovely — right up until the moment it wasn't a path anymore, and the {hero} had to step off the last stone into scuffed dirt and weeds, with the fence still standing there, unreached, a few steps beyond.

They stood at the gap in silence. "Do you remember," {companion_name} said, "what we worked out a while ago — that a plan is a path? This is the rest of that idea. A path is only finished when you walk its final stones. Until then it's a promise you've half-kept. It carries you almost to where you were going, and then it tips you into the weeds and leaves you there." The {hero} looked down at the scuffed dirt. It was hard to argue with, standing in it.

"But it's the boring part now," the {hero} said, and this time it came out less like an excuse and more like a genuine complaint. "The whole good bit — the figuring, the fitting — that's all behind me. All that's left is just... doing it." "I know exactly what you mean," said {companion_name}, and the surprising thing was that they clearly did. They sat down at the edge of the gap and rolled the {object_motif} over within reach. "The end of anything worth doing is nearly always the flat, dull part. The excitement burns off and leaves the plain work behind. That's the precise spot where most things get abandoned — not at the hard beginning, but at the boring end. So let's not abandon this one. Fifteen stones. I'll hand, you set."

There did not seem to be a graceful way to refuse, so the {hero} knelt down and set the first stone. {companion_name} passed the next, and the next. Lift, turn, seat, press. It was every bit as dull as the {hero} had feared — for about the first six stones.

And then something quietly shifted, so gradually the {hero} almost missed it. The work had not changed at all; it was still lift, turn, seat, press. But the fence was getting closer. Ten stones became six. Six became three. And with each one that clicked into place, the finish stopped being an abstract idea somewhere off in the distance and became a thing the {hero} could almost touch. The dullness was still there — but running underneath it now was a thin, growing current of something else. The {hero} started to want to reach the end, not out of duty, but because the end was suddenly, thrillingly near.

The last stone the {hero} chose deliberately: a broad, flat one, the kind you could plant a firm foot on. The {hero} worked it into the final space, snug against the base of the fencepost, and pressed until it sat without a wobble. And that was it. There was no gap left anywhere along the whole length of the path. It ran unbroken from the gate to the fence, one continuous line laid stone by stone across the whole of {setting}.

The {hero} stood and walked it one more time — and this walk was nothing like the first. There was no stepping off into the weeds at the end. The final stone carried the {hero} straight to the fence, precisely where the path had been intended to lead since that first line scratched in the dirt two weeks before. The difference between almost and done, which had seemed so small from the grass, turned out to be the whole difference in the world.

It was such a small stretch of stones, in the end — the part that had felt so impossibly heavy from the grass. Fifteen ordinary rocks. And yet leaving them undone would have quietly undone everything else, turned two weeks of real work into a path that led nowhere in particular and gave up at the last moment. The {hero} understood that now in a way that no one could have simply explained.

"There," said {companion_name}, quietly, standing at the finished end. "Feel that?" And the {hero} did feel it. It was not the bright, restless excitement of starting something new. It was slower and heavier and far more satisfying — the particular, settled contentment of a thing carried all the way through to its end. "Most people never get to feel this," {companion_name} went on. "They quit while the quitting is easy, right when the fun wears off, and they never find out what's waiting on the other side of the boring part. Finishing has its own kind of joy. You just earned it."

The {hero} said nothing, because nothing needed saying. They stood together at the fence as the light went long and golden and then soft, looking back down the whole unbroken length of the path. The {hero} turned the {object_motif} over slowly, feeling the ordinary weight of it, and let out a breath that had been two weeks in the making — tired all the way down, and glad in a way that only finishing could have made possible.

{refrain}.`,
    scriptTemplate: `The path had been {child_name}'s whole world for the better part of two weeks. It ran out from the old gate and threaded its way across {setting}, a winding ribbon of fitted stones that followed the exact route {child_name} had mapped out on the very first morning. Back then it had been nothing but a line scratched in the dirt and a heap of loose rock. Now it was real — long and graceful and almost, almost complete.

For most of those two weeks, the building had been the finest kind of work there is: hard enough to matter, but full of problems worth solving. Every stone posed a small puzzle. Which face should sit up? Where would this odd triangular one finally fit? How do you make a curve out of things that only come in straight and crooked shapes? {child_name} had lost whole afternoons to it without once feeling bored, because there had always been a next decision waiting, a next small victory to chase.

{child_name} still remembered the afternoon the curve had finally come together — the way three stubborn stones had suddenly agreed to sit in a smooth arc, and how {child_name} had sat back on both heels and grinned at it like a puzzle solved. That was the feeling the whole project had promised, over and over: a problem, a struggle, and then the small bright click of getting it right.

But that was the trouble with the end. The decisions had run out. Everything interesting had already been figured. What remained was a short, unglamorous stretch — a couple of arm-lengths of gap between the last laid stone and the fencepost where the path was supposed to arrive. Fifteen stones, maybe. And {child_name} knew, with a sinking sort of certainty, exactly how those fifteen stones would go: lift, turn, seat, press. No mystery. No cleverness. Just the same tired motion over and over until the gap was gone.

It was strange, {child_name} thought, how the last little bit of a thing could feel so much heavier than all the rest of it put together. The middle had flown by. This end just sat there, dull and immovable, daring {child_name} to bother. And the honest truth — the truth {child_name} was slightly ashamed of — was that it would be so easy not to bother. The path already looked finished from a distance. Who would ever notice a gap of two arm-lengths near the fence?

So {child_name} sat down in the cool grass, leaned back on both hands, and made a quiet decision to be done. Not finished — done. There is a difference, and somewhere underneath, {child_name} knew it.

That was how {companion_name} found the scene: the long, beautiful, unfinished path, and its builder sprawled in the grass pretending not to care. {companion_name} did not say anything at first. They simply walked the length of it, slow and considering, eyes tracing every curve, until they reached the raw end where the stones gave out and the bare dirt began.

"It's very nearly the best thing you've ever made," {companion_name} said at last. {child_name} heard the word that mattered. "Nearly," {child_name} repeated, a little defensively. "It's basically done. Anyone can see where it's meant to go." "Anyone can see where it's meant to go," {companion_name} agreed. "That's not the same as it going there. Get up a moment. Walk it with me."

{child_name} sighed the enormous sigh of someone who knows they are about to lose an argument, and got up. Together they walked it, from the gate along the whole sweeping curve, and it was lovely, truly lovely — right up until the moment it wasn't a path anymore, and {child_name} had to step off the last stone into scuffed dirt and weeds, with the fence still standing there, unreached, a few steps beyond.

They stood at the gap in silence. "Do you remember," {companion_name} said, "what we worked out a while ago — that a plan is a path? This is the rest of that idea. A path is only finished when you walk its final stones. Until then it's a promise you've half-kept. It carries you almost to where you were going, and then it tips you into the weeds and leaves you there." {child_name} looked down at the scuffed dirt. It was hard to argue with, standing in it.

"But it's the boring part now," {child_name} said, and this time it came out less like an excuse and more like a genuine complaint. "The whole good bit — the figuring, the fitting — that's all behind me. All that's left is just... doing it." "I know exactly what you mean," said {companion_name}, and the surprising thing was that they clearly did. They sat down at the edge of the gap and rolled the {object_motif} over within reach. "The end of anything worth doing is nearly always the flat, dull part. The excitement burns off and leaves the plain work behind. That's the precise spot where most things get abandoned — not at the hard beginning, but at the boring end. So let's not abandon this one. Fifteen stones. I'll hand, you set."

There did not seem to be a graceful way to refuse, so {child_name} knelt down and set the first stone. {companion_name} passed the next, and the next. Lift, turn, seat, press. It was every bit as dull as {child_name} had feared — for about the first six stones.

And then something quietly shifted, so gradually {child_name} almost missed it. The work had not changed at all; it was still lift, turn, seat, press. But the fence was getting closer. Ten stones became six. Six became three. And with each one that clicked into place, the finish stopped being an abstract idea somewhere off in the distance and became a thing {child_name} could almost touch. The dullness was still there — but running underneath it now was a thin, growing current of something else. {child_name} started to want to reach the end, not out of duty, but because the end was suddenly, thrillingly near.

The last stone {child_name} chose deliberately: a broad, flat one, the kind you could plant a firm foot on. {child_name} worked it into the final space, snug against the base of the fencepost, and pressed until it sat without a wobble. And that was it. There was no gap left anywhere along the whole length of the path. It ran unbroken from the gate to the fence, one continuous line laid stone by stone across the whole of {setting}.

{child_name} stood and walked it one more time — and this walk was nothing like the first. There was no stepping off into the weeds at the end. The final stone carried {child_name} straight to the fence, precisely where the path had been intended to lead since that first line scratched in the dirt two weeks before. The difference between almost and done, which had seemed so small from the grass, turned out to be the whole difference in the world.

It was such a small stretch of stones, in the end — the part that had felt so impossibly heavy from the grass. Fifteen ordinary rocks. And yet leaving them undone would have quietly undone everything else, turned two weeks of real work into a path that led nowhere in particular and gave up at the last moment. {child_name} understood that now in a way that no one could have simply explained.

"There," said {companion_name}, quietly, standing at the finished end. "Feel that?" And {child_name} did feel it. It was not the bright, restless excitement of starting something new. It was slower and heavier and far more satisfying — the particular, settled contentment of a thing carried all the way through to its end. "Most people never get to feel this," {companion_name} went on. "They quit while the quitting is easy, right when the fun wears off, and they never find out what's waiting on the other side of the boring part. Finishing has its own kind of joy. You just earned it."

{child_name} said nothing, because nothing needed saying. They stood together at the fence as the light went long and golden and then soft, looking back down the whole unbroken length of the path. {child_name} turned the {object_motif} over slowly, feeling the ordinary weight of it, and let out a breath that had been two weeks in the making — tired all the way down, and glad in a way that only finishing could have made possible.

{refrain}.`
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
    audioTemplate: `The {hero} woke up in {setting}. The sun was soft and pink. The birds were singing. The water was calm.

Today felt like a big day. The {hero} wanted to do one thing. One special thing. Not a thing anyone else said. A thing the {hero} truly wanted.

"I want to build a little boat," said the {hero}. "All by myself."

{companion_name} sat close. "You picked that goal. Not me. That is what makes it strong."

The {hero} held the {object_motif} and thought.

"This goal is mine to choose," said the {hero}.

A goal is a thing you want to reach. The {hero} had a plan. A plan of small steps. One step at a time.

First step: find the sticks. The {hero} looked and looked. The {hero} found three good sticks. Not too long. Not too short. Just right.

Second step: tie them tight. The {hero} pulled the string. Slow and careful.

A bigger kid ran by. "Come and play!" they called.

The {hero} wanted to run too. The feet wiggled. But the boat was not done.

The {hero} looked at {companion_name}. {companion_name} did not say much. {companion_name} just waited.

The {hero} rubbed both eyes. Then the {hero} looked back at the little boat.

"I will come soon," said the {hero}. "First I finish my boat."

Third step: make a little sail. The {hero} used a leaf. The leaf stood up tall.

Almost done. Just one more step.

The last step is always the hardest. The {hero} was tired. One thing at a time, thought the {hero}. Just this one last thing.

The {hero} pushed the last stick in place. And then the boat was done!

The {hero} set the boat in the water. It floated! It bobbed and spun and floated. The boat was small. But it was the {hero}'s own.

"You did it," said {companion_name}. "You chose the goal. You did every step. You."

Every step was done by the {hero}. Every single one.

The little boat sat in the calm water. It did not sink. It did not tip. It just floated.

The moon came up over {setting}. Slow and round and kind.

The {hero} held the {object_motif} close and gave a big, sleepy smile.

One goal. Chosen. Finished.

{refrain}.`,
    scriptTemplate: `{child_name} woke up in {setting}. The sun was soft and pink. The birds were singing. The water was calm.

Today felt like a big day. {child_name} wanted to do one thing. One special thing. Not a thing anyone else said. A thing {child_name} truly wanted.

"I want to build a little boat," said {child_name}. "All by myself."

{companion_name} sat close. "You picked that goal. Not me. That is what makes it strong."

{child_name} held the {object_motif} and thought.

"This goal is mine to choose," said {child_name}.

A goal is a thing you want to reach. {child_name} had a plan. A plan of small steps. One step at a time.

First step: find the sticks. {child_name} looked and looked. {child_name} found three good sticks. Not too long. Not too short. Just right.

Second step: tie them tight. {child_name} pulled the string. Slow and careful.

A bigger kid ran by. "Come and play!" they called.

{child_name} wanted to run too. The feet wiggled. But the boat was not done.

{child_name} looked at {companion_name}. {companion_name} did not say much. {companion_name} just waited.

{child_name} rubbed both eyes. Then {child_name} looked back at the little boat.

"I will come soon," said {child_name}. "First I finish my boat."

Third step: make a little sail. {child_name} used a leaf. The leaf stood up tall.

Almost done. Just one more step.

The last step is always the hardest. {child_name} was tired. One thing at a time, thought {child_name}. Just this one last thing.

{child_name} pushed the last stick in place. And then the boat was done!

{child_name} set the boat in the water. It floated! It bobbed and spun and floated. The boat was small. But it was {child_name}'s own.

"You did it," said {companion_name}. "You chose the goal. You did every step. You."

Every step was done by {child_name}. Every single one.

The little boat sat in the calm water. It did not sink. It did not tip. It just floated.

The moon came up over {setting}. Slow and round and kind.

{child_name} held the {object_motif} close and gave a big, sleepy smile.

One goal. Chosen. Finished.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The morning came slow and golden over {setting}, and the {hero} was already awake, because today was the day the {hero} had been waiting for all week.

For seven whole days, the {hero} had wanted to make a map. Not any map. A real map of the whole of {setting}, drawn by the {hero} and nobody else. No one had asked for it. No one had said the {hero} had to make it. That was exactly why it mattered so much.

"That's a big goal," said {companion_name}, walking up quietly and sitting down on the warm ground.

"It's mine to choose," said the {hero}. "So I chose a big one."

{companion_name} nodded slowly. "A goal you pick yourself pulls harder than one someone hands you. Now, remember: one thing at a time."

The {hero} held the {object_motif} and made a plan. Small steps, in order. Step one: walk the shore and mark every rock. Step two: draw the tall hill. Step three: find the hidden path and follow it. Step four: add all the names. Four steps. That was the whole plan.

Step one went well. The {hero} walked the shore slowly and counted seven rocks, drawing each one just where it sat, big and small, near and far.

But halfway through step two, a group of kids came by, laughing and rolling a hoop across the sand. "Come play with us!" one of them called out.

The {hero} looked up. The hill was only half drawn. The pencil suddenly felt heavy in the {hero}'s hand. For a moment, the {hero} almost put the map down in the sand and ran off to play.

{companion_name} did not scold, and did not say hurry up. {companion_name} only asked, in a calm voice, "Where were you before they called?"

The {hero} blinked. "The hill. I was drawing the hill."

"Then that is where you go back to," said {companion_name}. "Noticing that you drifted is part of the work. You just did the hardest bit."

So the {hero} came back to the hill. It was easier than it looked, once the {hero} started the line again. Little by little, the hill grew tall and rounded on the page, exactly like the real one.

Step three was harder. The hidden path kept curving in ways the {hero} could not guess from far away. The {hero} wanted to skip it and just draw a straight line instead. But skipping it would leave a hole in the map, and the {hero} would always know that hole was there.

"I'll follow it all the way," the {hero} decided. And the {hero} did, walking and drawing one bend at a time, until the whole winding path lay on the page.

Now only the last step was left. The names. The {hero}'s hand was tired and a little smudged. This was the part where a person might stop, so close to done, and call it good enough and wander away.

The {hero} did not stop. Rock by rock, then the hill, the path, and the shore, the {hero} carefully wrote out every single name.

And then, at last, the map was finished. The whole of {setting}, on one page, made from start to end by the {hero}.

{companion_name} looked at it for a long, quiet time. "You picked this yourself. You planned it. When you wandered off, you noticed and came back. And you finished the last part when it would have been easy to quit. That was all you, start to finish."

The {hero} looked down at the map and felt something steady and warm, like a small lamp lit somewhere inside.

Far off, the first stars began to prick through the sky over {setting}. The {hero} rolled the map up gently and held the {object_motif} in one hand, far too pleased to feel sleepy, though sleep was quietly coming anyway.

One goal, chosen and reached, step by careful step, by the {hero} alone.

{refrain}.`,
    scriptTemplate: `The morning came slow and golden over {setting}, and {child_name} was already awake, because today was the day {child_name} had been waiting for all week.

For seven whole days, {child_name} had wanted to make a map. Not any map. A real map of the whole of {setting}, drawn by {child_name} and nobody else. No one had asked for it. No one had said {child_name} had to make it. That was exactly why it mattered so much.

"That's a big goal," said {companion_name}, walking up quietly and sitting down on the warm ground.

"It's mine to choose," said {child_name}. "So I chose a big one."

{companion_name} nodded slowly. "A goal you pick yourself pulls harder than one someone hands you. Now, remember: one thing at a time."

{child_name} held the {object_motif} and made a plan. Small steps, in order. Step one: walk the shore and mark every rock. Step two: draw the tall hill. Step three: find the hidden path and follow it. Step four: add all the names. Four steps. That was the whole plan.

Step one went well. {child_name} walked the shore slowly and counted seven rocks, drawing each one just where it sat, big and small, near and far.

But halfway through step two, a group of kids came by, laughing and rolling a hoop across the sand. "Come play with us!" one of them called out.

{child_name} looked up. The hill was only half drawn. The pencil suddenly felt heavy in {child_name}'s hand. For a moment, {child_name} almost put the map down in the sand and ran off to play.

{companion_name} did not scold, and did not say hurry up. {companion_name} only asked, in a calm voice, "Where were you before they called?"

{child_name} blinked. "The hill. I was drawing the hill."

"Then that is where you go back to," said {companion_name}. "Noticing that you drifted is part of the work. You just did the hardest bit."

So {child_name} came back to the hill. It was easier than it looked, once {child_name} started the line again. Little by little, the hill grew tall and rounded on the page, exactly like the real one.

Step three was harder. The hidden path kept curving in ways {child_name} could not guess from far away. {child_name} wanted to skip it and just draw a straight line instead. But skipping it would leave a hole in the map, and {child_name} would always know that hole was there.

"I'll follow it all the way," {child_name} decided. And {child_name} did, walking and drawing one bend at a time, until the whole winding path lay on the page.

Now only the last step was left. The names. {child_name}'s hand was tired and a little smudged. This was the part where a person might stop, so close to done, and call it good enough and wander away.

{child_name} did not stop. Rock by rock, then the hill, the path, and the shore, {child_name} carefully wrote out every single name.

And then, at last, the map was finished. The whole of {setting}, on one page, made from start to end by {child_name}.

{companion_name} looked at it for a long, quiet time. "You picked this yourself. You planned it. When you wandered off, you noticed and came back. And you finished the last part when it would have been easy to quit. That was all you, start to finish."

{child_name} looked down at the map and felt something steady and warm, like a small lamp lit somewhere inside.

Far off, the first stars began to prick through the sky over {setting}. {child_name} rolled the map up gently and held the {object_motif} in one hand, far too pleased to feel sleepy, though sleep was quietly coming anyway.

One goal, chosen and reached, step by careful step, by {child_name} alone.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `There was a flat grey stone at the edge of {setting} that the {hero} had walked past a hundred times. It was the perfect size for a bridge. On the far side of the little stream, where nobody ever went, there was a patch of the softest moss and a tree that leaned just right for climbing. The {hero} had wanted, for a long time, to build a bridge across to it, and to have the moss side be a place the {hero} could reach any day, dry-footed, on a bridge nobody else had thought to make.

Nobody had suggested the bridge. No grown-up had set it as a task. No one else even seemed to want the moss side the way the {hero} did. That was the whole point. It was the {hero}'s idea, start to finish, wanted for the {hero}'s own reasons.

"You've got that look," said {companion_name}, appearing at the {hero}'s shoulder. "The one you get when you've decided something."

"I'm going to build a bridge," said the {hero}. "To the moss side. Today."

{companion_name} studied the stream, then the {hero}. "That's your goal, then. Truly yours?"

"Nobody gave it to me," said the {hero}. "It's mine to choose, and I choose this."

"Good," said {companion_name}. "A goal you own is one you'll actually finish. So don't try to do it all at once. What's the first small piece?"

The {hero} turned the {object_motif} over in one hand while thinking, the way some people think better with something to hold. "First, flat stones. Enough to step across. Then something to hold onto, so it's steady. Then a rail, maybe. One piece at a time."

"Then start with the stones," said {companion_name}, and settled down on the bank to watch, not to help.

The first part was almost fun. The {hero} hunted along the shore for flat stones and carried them over one by one, fitting them into the stream bed like pieces of a puzzle. Splash, set, test with a foot. Splash, set, test. Some stones tipped and had to be pulled out and set again a little differently, and the {hero} learned to press each one down until it stopped rocking before trusting it. Four stones in, the {hero} could stand in the middle of the stream without wet feet, and it felt like proof that the whole thing might actually work.

Then the middle got deep, and the work got slow, and something happened that always happens. The {hero} started to think about other things. A bird with a bright wing. What might be for supper. Whether the moss side was even as good as it looked from here. The {hero}'s hands slowed, and then stopped, and the {hero} just stood there in the shallows, staring at nothing.

{companion_name} did not shout across a reminder. {companion_name} waited until the {hero} looked over, and then said only, "You went somewhere. Where'd you go?"

The {hero} laughed, a little embarrassed. "I don't even know. I stopped thinking about the bridge."

"That's not a failing," said {companion_name}. "Everybody drifts. The trick isn't never drifting. It's noticing you did, and coming back. You just came back. So — the next stone."

The {hero} nodded and looked at the stones already laid, and at the gap still left, and it helped to see it that way: not one enormous job, but one more stone, and then one more after that.

The next stone. The {hero} found the biggest flat one yet and wrestled it into the deep part, and it held. After that the far bank came closer with every stone, until at last the {hero} stepped up onto dry land on the moss side, having crossed on stones the {hero} had laid.

But it wasn't done. It wobbled. Without something to hold, the little bridge was only half a bridge, and the {hero} knew it.

This was the part the {hero} wanted to skip. The crossing had felt like the finish, and the arms were tired, and it would have been easy to say the bridge was good enough and go play on the moss instead.

The {hero} looked back at the wobbling stones and thought about how it would feel to cross tomorrow and feel them shift. "Not good enough yet," the {hero} said, mostly to nobody.

So the {hero} did the last, least fun part. A long fallen branch, dragged over inch by inch and wedged low along the stones, made a rail to grip. It took three tries to get the branch to sit without rolling, and by the end the {hero}'s arms were shaking a little. But the {hero} tested it, hand sliding along the branch, feet sure on the stones, all the way across and all the way back. Steady. Finished. A whole bridge, not half of one.

{companion_name} crossed it too, slow and careful, and stood on the moss side beside the {hero}. "You chose this yourself. You broke it into pieces. When your mind wandered off, you brought it back without me pulling you. And you did the boring last part instead of quitting on it. Every bit of that was you."

The {hero} sat down on the soft moss, tired in the good way, and looked back across the bridge at the whole distance that had been crossed.

A breeze moved through {setting}, cool and full of evening. The {hero} kept the {object_motif} close and watched the water slide under the bridge that had not existed this morning, and did now, because the {hero} had decided it would. Nothing about the stream had changed, and yet the whole shape of the evening felt different from this side.

{refrain}.`,
    scriptTemplate: `There was a flat grey stone at the edge of {setting} that {child_name} had walked past a hundred times. It was the perfect size for a bridge. On the far side of the little stream, where nobody ever went, there was a patch of the softest moss and a tree that leaned just right for climbing. {child_name} had wanted, for a long time, to build a bridge across to it, and to have the moss side be a place {child_name} could reach any day, dry-footed, on a bridge nobody else had thought to make.

Nobody had suggested the bridge. No grown-up had set it as a task. No one else even seemed to want the moss side the way {child_name} did. That was the whole point. It was {child_name}'s idea, start to finish, wanted for {child_name}'s own reasons.

"You've got that look," said {companion_name}, appearing at {child_name}'s shoulder. "The one you get when you've decided something."

"I'm going to build a bridge," said {child_name}. "To the moss side. Today."

{companion_name} studied the stream, then {child_name}. "That's your goal, then. Truly yours?"

"Nobody gave it to me," said {child_name}. "It's mine to choose, and I choose this."

"Good," said {companion_name}. "A goal you own is one you'll actually finish. So don't try to do it all at once. What's the first small piece?"

{child_name} turned the {object_motif} over in one hand while thinking, the way some people think better with something to hold. "First, flat stones. Enough to step across. Then something to hold onto, so it's steady. Then a rail, maybe. One piece at a time."

"Then start with the stones," said {companion_name}, and settled down on the bank to watch, not to help.

The first part was almost fun. {child_name} hunted along the shore for flat stones and carried them over one by one, fitting them into the stream bed like pieces of a puzzle. Splash, set, test with a foot. Splash, set, test. Some stones tipped and had to be pulled out and set again a little differently, and {child_name} learned to press each one down until it stopped rocking before trusting it. Four stones in, {child_name} could stand in the middle of the stream without wet feet, and it felt like proof that the whole thing might actually work.

Then the middle got deep, and the work got slow, and something happened that always happens. {child_name} started to think about other things. A bird with a bright wing. What might be for supper. Whether the moss side was even as good as it looked from here. {child_name}'s hands slowed, and then stopped, and {child_name} just stood there in the shallows, staring at nothing.

{companion_name} did not shout across a reminder. {companion_name} waited until {child_name} looked over, and then said only, "You went somewhere. Where'd you go?"

{child_name} laughed, a little embarrassed. "I don't even know. I stopped thinking about the bridge."

"That's not a failing," said {companion_name}. "Everybody drifts. The trick isn't never drifting. It's noticing you did, and coming back. You just came back. So — the next stone."

{child_name} nodded and looked at the stones already laid, and at the gap still left, and it helped to see it that way: not one enormous job, but one more stone, and then one more after that.

The next stone. {child_name} found the biggest flat one yet and wrestled it into the deep part, and it held. After that the far bank came closer with every stone, until at last {child_name} stepped up onto dry land on the moss side, having crossed on stones {child_name} had laid.

But it wasn't done. It wobbled. Without something to hold, the little bridge was only half a bridge, and {child_name} knew it.

This was the part {child_name} wanted to skip. The crossing had felt like the finish, and the arms were tired, and it would have been easy to say the bridge was good enough and go play on the moss instead.

{child_name} looked back at the wobbling stones and thought about how it would feel to cross tomorrow and feel them shift. "Not good enough yet," {child_name} said, mostly to nobody.

So {child_name} did the last, least fun part. A long fallen branch, dragged over inch by inch and wedged low along the stones, made a rail to grip. It took three tries to get the branch to sit without rolling, and by the end {child_name}'s arms were shaking a little. But {child_name} tested it, hand sliding along the branch, feet sure on the stones, all the way across and all the way back. Steady. Finished. A whole bridge, not half of one.

{companion_name} crossed it too, slow and careful, and stood on the moss side beside {child_name}. "You chose this yourself. You broke it into pieces. When your mind wandered off, you brought it back without me pulling you. And you did the boring last part instead of quitting on it. Every bit of that was you."

{child_name} sat down on the soft moss, tired in the good way, and looked back across the bridge at the whole distance that had been crossed.

A breeze moved through {setting}, cool and full of evening. {child_name} kept the {object_motif} close and watched the water slide under the bridge that had not existed this morning, and did now, because {child_name} had decided it would. Nothing about the stream had changed, and yet the whole shape of the evening felt different from this side.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There is a difference between a goal someone gives you and a goal you give yourself, and the {hero} had spent most of the year learning to tell the two apart. The chores, the lessons, the things grown-ups called important — those arrived from outside, already decided. This one had not. This one had been growing quietly in the {hero} for weeks, the way a real want does, until it was too big to keep ignoring.

The {hero} wanted to make a lantern that could stand at the edge of {setting} and be seen from the far bank at night. Not a toy. A real one, that held a steady light and did not tip in the wind. There was no reason anyone had asked for it. There was every reason the {hero} wanted it: on the darkest nights, the far bank felt very far away, and the {hero} had decided that a light there would make the whole of {setting} feel less lonely after dark. It was that simple, and that personal.

The {hero} had noticed, over the year, that the goals worth anything were the ones you had to explain to yourself, not to somebody else. This was one of those. If someone had asked the {hero} to prove it was useful, the {hero} would have struggled — and it wouldn't have mattered, because usefulness had never been the point. Wanting it was the point. The {hero} had learned to trust that particular kind of wanting, the quiet steady kind that did not go away when you slept on it.

"You've been carrying something around all week," said {companion_name}, sitting down nearby without any fuss. "You want to say it out loud?"

"I want to build a lantern," the {hero} said. Saying it out loud made it heavier and more real at once. "One that lasts. For the far bank."

{companion_name} did not ask why, which the {hero} was grateful for. Instead: "Whose idea was it?"

"Mine," said the {hero}. "Nobody asked me to. That's kind of the whole thing. It's mine to choose, and this is what I chose."

"Then it'll ask more of you than the easy kind," said {companion_name}. "The goals we pick ourselves are the ones we can't blame anyone else for. That cuts both ways. Where do you start?"

The {hero} had already been turning it over. "Not all at once. That's the mistake I always make — trying to picture the whole thing finished and getting scared of it." The {hero} held the {object_motif}, thumb moving over it while the plan came together. "First, a frame that stands on its own. Then a shield around the light so the wind can't reach it. Then a way to lift the light in and out. Last, make it steady enough to trust outside overnight. Four parts. One at a time."

"Then the frame," said {companion_name}, and leaned back to watch, offering nothing more. That was the deal between them now, unspoken: {companion_name} would keep the {hero} company, but the {hero} would do the doing.

The frame went well, which the {hero} had learned to be a little suspicious of. Easy beginnings had fooled the {hero} before. Four uprights, lashed at the corners, tested and retied where they gave. It stood, and when the {hero} nudged it, it stayed standing, which was not the same as looking like it would. The {hero} had ruined more than one project by trusting the look of a thing instead of the test of it. So the {hero} pushed it harder than seemed necessary, from every side, and only when it held did the {hero} let the frame count as done. The {hero} felt the first pull of pride and, right behind it, the temptation that always came with a good start — to race ahead, skip the careful parts, get to the finish before the excitement wore off.

That was exactly when the excitement wore off.

It happened in the middle of the second part, the wind-shield, which was fiddly and slow and asked for more patience than the frame had. The {hero}'s attention slid sideways, the way it does — to the way the light moved on the water, to a half-remembered song, to the vague and useless question of whether this was a stupid idea after all, whether anyone would even notice a light on the far bank, whether it was worth finishing. The {hero}'s hands had gone still. The shield sat half-made in the grass, and the {hero} sat beside it, gone somewhere else entirely.

{companion_name} let the silence run a while before speaking. "You're not here."

"No," the {hero} admitted. "I started wondering if the whole thing even matters."

"That's the wondering that shows up right when a thing gets hard," said {companion_name}. "It dresses itself up as a good question. Mostly it's just the hard part, talking. You don't have to answer it tonight. You only have to pick the shield back up."

The {hero} sat with that. It was true that the doubt had arrived precisely when the work turned dull, and not one moment before. That was worth noticing. When the frame had been going well, the {hero} had felt sure the lantern was a fine idea; the idea hadn't changed since then, only the difficulty had. So maybe the doubt wasn't really about the lantern at all. Maybe it was just what the hard, slow middle of anything felt like from the inside. The {hero} let the big, swampy question go — not answered, just set down — and reached instead for the one small real thing within arm's length: the half-made shield. One bend, then the next. The doubt did not vanish, but it quieted, the way noise does when you stop feeding it.

The shield came together. Then the third part, the cradle to lift the light in and out, which took three failed tries and a genuinely frustrating hour before it worked. Twice the {hero} nearly settled for a version that mostly worked. Both times the {hero} thought about standing on the bank some future night, watching it fail, knowing it had been left half-right on purpose — and that was enough to keep going until it was actually right.

And then there was only the last part left, which is the part almost nobody talks about and almost everybody underestimates. The lantern stood, finished-looking, in the last of the light. It would have been so easy to call it done. It looked done. The {hero} was tired in the bones, and the difference between looks-done and is-done was exactly the boring, unglamorous work of making it steady: weighting the base, sealing the seams, testing it against a pushed breath and a shove of the hand, fixing what wobbled, testing again.

The {hero} did the boring part. All of it. Weighted the base with flat stones until it sat like it had grown there. Went along every seam. Pushed a breath at the flame and watched it barely lean. Shoved the whole thing sideways, harder than any wind would, and caught the one corner that shifted and fixed it. Tested it again. Not because anyone would check, but because the {hero} would know, and because a goal you chose yourself is one you don't get to fake finishing.

When it was truly done, the {hero} carried it to the edge of {setting} and set it where the far bank could see it, and stepped back.

{companion_name} came to stand alongside, quiet for a moment. "You chose this one yourself, for a reason that mattered to you. You broke it into parts. When your mind wandered — and it did, twice — you noticed and came back on your own. And you did the last, dull, invisible part instead of quitting on it while it still looked good enough. I watched all of it. Not one piece of it was mine."

The {hero} didn't say anything right away. There wasn't a need to. The lantern held its light, steady, not tipping, exactly as intended, and across the water the far bank did not look quite so far. It was a small light, in the end, and it changed nothing about the size of the dark. But it was there, and it was the {hero}'s, and on some future night the {hero} would look across and know exactly how it had come to be standing there.

The evening settled deep over {setting}, and the {hero} sat down beside the {object_motif} with the particular tiredness that only comes after finishing something real — heavier than sleepiness, and a great deal better.

{refrain}.`,
    scriptTemplate: `There is a difference between a goal someone gives you and a goal you give yourself, and {child_name} had spent most of the year learning to tell the two apart. The chores, the lessons, the things grown-ups called important — those arrived from outside, already decided. This one had not. This one had been growing quietly in {child_name} for weeks, the way a real want does, until it was too big to keep ignoring.

{child_name} wanted to make a lantern that could stand at the edge of {setting} and be seen from the far bank at night. Not a toy. A real one, that held a steady light and did not tip in the wind. There was no reason anyone had asked for it. There was every reason {child_name} wanted it: on the darkest nights, the far bank felt very far away, and {child_name} had decided that a light there would make the whole of {setting} feel less lonely after dark. It was that simple, and that personal.

{child_name} had noticed, over the year, that the goals worth anything were the ones you had to explain to yourself, not to somebody else. This was one of those. If someone had asked {child_name} to prove it was useful, {child_name} would have struggled — and it wouldn't have mattered, because usefulness had never been the point. Wanting it was the point. {child_name} had learned to trust that particular kind of wanting, the quiet steady kind that did not go away when you slept on it.

"You've been carrying something around all week," said {companion_name}, sitting down nearby without any fuss. "You want to say it out loud?"

"I want to build a lantern," {child_name} said. Saying it out loud made it heavier and more real at once. "One that lasts. For the far bank."

{companion_name} did not ask why, which {child_name} was grateful for. Instead: "Whose idea was it?"

"Mine," said {child_name}. "Nobody asked me to. That's kind of the whole thing. It's mine to choose, and this is what I chose."

"Then it'll ask more of you than the easy kind," said {companion_name}. "The goals we pick ourselves are the ones we can't blame anyone else for. That cuts both ways. Where do you start?"

{child_name} had already been turning it over. "Not all at once. That's the mistake I always make — trying to picture the whole thing finished and getting scared of it." {child_name} held the {object_motif}, thumb moving over it while the plan came together. "First, a frame that stands on its own. Then a shield around the light so the wind can't reach it. Then a way to lift the light in and out. Last, make it steady enough to trust outside overnight. Four parts. One at a time."

"Then the frame," said {companion_name}, and leaned back to watch, offering nothing more. That was the deal between them now, unspoken: {companion_name} would keep {child_name} company, but {child_name} would do the doing.

The frame went well, which {child_name} had learned to be a little suspicious of. Easy beginnings had fooled {child_name} before. Four uprights, lashed at the corners, tested and retied where they gave. It stood, and when {child_name} nudged it, it stayed standing, which was not the same as looking like it would. {child_name} had ruined more than one project by trusting the look of a thing instead of the test of it. So {child_name} pushed it harder than seemed necessary, from every side, and only when it held did {child_name} let the frame count as done. {child_name} felt the first pull of pride and, right behind it, the temptation that always came with a good start — to race ahead, skip the careful parts, get to the finish before the excitement wore off.

That was exactly when the excitement wore off.

It happened in the middle of the second part, the wind-shield, which was fiddly and slow and asked for more patience than the frame had. {child_name}'s attention slid sideways, the way it does — to the way the light moved on the water, to a half-remembered song, to the vague and useless question of whether this was a stupid idea after all, whether anyone would even notice a light on the far bank, whether it was worth finishing. {child_name}'s hands had gone still. The shield sat half-made in the grass, and {child_name} sat beside it, gone somewhere else entirely.

{companion_name} let the silence run a while before speaking. "You're not here."

"No," {child_name} admitted. "I started wondering if the whole thing even matters."

"That's the wondering that shows up right when a thing gets hard," said {companion_name}. "It dresses itself up as a good question. Mostly it's just the hard part, talking. You don't have to answer it tonight. You only have to pick the shield back up."

{child_name} sat with that. It was true that the doubt had arrived precisely when the work turned dull, and not one moment before. That was worth noticing. When the frame had been going well, {child_name} had felt sure the lantern was a fine idea; the idea hadn't changed since then, only the difficulty had. So maybe the doubt wasn't really about the lantern at all. Maybe it was just what the hard, slow middle of anything felt like from the inside. {child_name} let the big, swampy question go — not answered, just set down — and reached instead for the one small real thing within arm's length: the half-made shield. One bend, then the next. The doubt did not vanish, but it quieted, the way noise does when you stop feeding it.

The shield came together. Then the third part, the cradle to lift the light in and out, which took three failed tries and a genuinely frustrating hour before it worked. Twice {child_name} nearly settled for a version that mostly worked. Both times {child_name} thought about standing on the bank some future night, watching it fail, knowing it had been left half-right on purpose — and that was enough to keep going until it was actually right.

And then there was only the last part left, which is the part almost nobody talks about and almost everybody underestimates. The lantern stood, finished-looking, in the last of the light. It would have been so easy to call it done. It looked done. {child_name} was tired in the bones, and the difference between looks-done and is-done was exactly the boring, unglamorous work of making it steady: weighting the base, sealing the seams, testing it against a pushed breath and a shove of the hand, fixing what wobbled, testing again.

{child_name} did the boring part. All of it. Weighted the base with flat stones until it sat like it had grown there. Went along every seam. Pushed a breath at the flame and watched it barely lean. Shoved the whole thing sideways, harder than any wind would, and caught the one corner that shifted and fixed it. Tested it again. Not because anyone would check, but because {child_name} would know, and because a goal you chose yourself is one you don't get to fake finishing.

When it was truly done, {child_name} carried it to the edge of {setting} and set it where the far bank could see it, and stepped back.

{companion_name} came to stand alongside, quiet for a moment. "You chose this one yourself, for a reason that mattered to you. You broke it into parts. When your mind wandered — and it did, twice — you noticed and came back on your own. And you did the last, dull, invisible part instead of quitting on it while it still looked good enough. I watched all of it. Not one piece of it was mine."

{child_name} didn't say anything right away. There wasn't a need to. The lantern held its light, steady, not tipping, exactly as intended, and across the water the far bank did not look quite so far. It was a small light, in the end, and it changed nothing about the size of the dark. But it was there, and it was {child_name}'s, and on some future night {child_name} would look across and know exactly how it had come to be standing there.

The evening settled deep over {setting}, and {child_name} sat down beside the {object_motif} with the particular tiredness that only comes after finishing something real — heavier than sleepiness, and a great deal better.

{refrain}.`
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
