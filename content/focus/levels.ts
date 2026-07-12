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
    ordinal: 4, title: "The Last Grey Pieces",
    concept: "Staying with something all the way to the end", callback: "A plan is a path (Level 2)", ageFloor: 5,
    summary: "For days the hero has been rebuilding an old scattered stone-picture, piece by piece — and tonight the full moon will finally land on it. Legend says a finished picture shows what it knows. But all that remains are the dull grey pieces, and 'done enough' turns out to fool nobody, least of all the moon. Then one grey piece catches the light: the plainest pieces were the sky all along, saved for last by makers who knew that finishing has its own kind of joy.",
    teachingNote: "The hardest part of a goal is often the last dull stretch — and finishing is exactly where the best part was hiding.",
    learningBeat: "Finishing has its own kind of joy",
    ageVariants: {
  '3-4': {
    audioTemplate: `In {setting}, an old stone picture lay tumbled into pieces. All week the {hero} had been putting it back together.

Boat piece — in! Bird piece — in! Flowers — in, in, in!

Tonight the full moon would shine on it. A finished picture, the old carving said, shows what it knows.

But the last pieces were grey. Plain, dull, boring grey!

'Done enough,' said the {hero}.

The moon came. And... nothing. Just gaps.

The {hero} propped the {object_motif} up to help the moon. Still nothing!

'Hmm,' said {companion_name}. 'The makers cut even the dull ones on purpose.'

The {hero} held one up to the moon. Look deep inside. Can you see it too? Tiny sparks, fast asleep!

'The grey pieces are the sky!' said the {hero}. 'Finishing has its own kind of joy — the makers saved the best for last!'

So the {hero} placed them. One. Two. Three. The last piece went snick!

The whole sky woke up! Silver stars glowed over the boat and bird.

'{refrain},' whispered {companion_name}.

One little star was a brand-new colour. Something for tomorrow.

Warm glow. Heavy eyes.

{refrain}.`,
    scriptTemplate: `In {setting}, an old stone picture lay tumbled into pieces. All week {child_name} the {hero} had been putting it back together.

Boat piece — in! Bird piece — in! Flowers — in, in, in!

Tonight the full moon would shine on it. A finished picture, the old carving said, shows what it knows.

But the last pieces were grey. Plain, dull, boring grey!

'Done enough,' said {child_name}.

The moon came. And... nothing. Just gaps.

{child_name} propped the {object_motif} up to help the moon. Still nothing!

'Hmm,' said {companion_name}. 'The makers cut even the dull ones on purpose.'

{child_name} held one up to the moon. Look deep inside. Can you see it too? Tiny sparks, fast asleep!

'The grey pieces are the sky!' said {child_name}. 'Finishing has its own kind of joy — the makers saved the best for last!'

So {child_name} placed them. One. Two. Three. The last piece went snick!

The whole sky woke up! Silver stars glowed over the boat and bird.

'{refrain},' whispered {companion_name}.

One little star was a brand-new colour. Something for tomorrow.

Warm glow. Heavy eyes.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `In a mossy hollow in {setting} lay an old stone picture, tumbled into a hundred little pieces long ago. Beside it, a worn carving read: finished by moonlight, it shows what it knows.

All week the {hero} had been putting it back together with a plan — corner first, then row by row, like stones on a path. And what a picture! A little boat. A bright bird. A whole hedge of flowers.

Tonight the full moon would land right in the hollow. Only one part was left: the top. Dozens of pieces, every one plain, dull grey. No boats. No birds. Nothing.

'Done enough,' the {hero} declared. 'The moon will see the good parts. Who needs a grey sky?'

The moon slid in. It touched the boat, the bird, the flowers... and nothing happened. No glow. No secret. Just a picture with a hole where its sky should be.

The {hero} tried helping. The bird got nudged to the middle. The {object_motif} got propped up to boost the moon. The boat got polished till it shone. Still nothing.

'Hmm,' said {companion_name}, turning one grey piece over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

The {hero} picked up a grey piece to flick it away — and stopped. Hold it up to the moon and look deep inside. Can you see it too? Tiny sparks, fast asleep.

'Oh!' breathed the {hero}. 'The grey pieces are the sky! They only wake in moonlight. The makers hid the best part in the boring part — you only find it if you finish. Finishing has its own kind of joy, and they saved it for last!'

So the {hero} stayed with it, row by row, dull piece by dull piece, to the very end. The last one went in with a tiny snick.

And the sky woke up. Every grey piece kindled silver — a hundred small stars over the boat and the bird and the flowers. And in the corner of the picture, a little stone hollow held two small figures, sitting just like them.

'{refrain},' whispered {companion_name}.

They sat in the glow a long, quiet time. One star in the stone sky was a colour the real sky did not have. Something to look for tomorrow night.

The glow softened. The moss was warm.

{refrain}.`,
    scriptTemplate: `In a mossy hollow in {setting} lay an old stone picture, tumbled into a hundred little pieces long ago. Beside it, a worn carving read: finished by moonlight, it shows what it knows.

All week {child_name} the {hero} had been putting it back together with a plan — corner first, then row by row, like stones on a path. And what a picture! A little boat. A bright bird. A whole hedge of flowers.

Tonight the full moon would land right in the hollow. Only one part was left: the top. Dozens of pieces, every one plain, dull grey. No boats. No birds. Nothing.

'Done enough,' {child_name} declared. 'The moon will see the good parts. Who needs a grey sky?'

The moon slid in. It touched the boat, the bird, the flowers... and nothing happened. No glow. No secret. Just a picture with a hole where its sky should be.

{child_name} tried helping. The bird got nudged to the middle. The {object_motif} got propped up to boost the moon. The boat got polished till it shone. Still nothing.

'Hmm,' said {companion_name}, turning one grey piece over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

{child_name} picked up a grey piece to flick it away — and stopped. Hold it up to the moon and look deep inside. Can you see it too? Tiny sparks, fast asleep.

'Oh!' breathed {child_name}. 'The grey pieces are the sky! They only wake in moonlight. The makers hid the best part in the boring part — you only find it if you finish. Finishing has its own kind of joy, and they saved it for last!'

So {child_name} stayed with it, row by row, dull piece by dull piece, to the very end. The last one went in with a tiny snick.

And the sky woke up. Every grey piece kindled silver — a hundred small stars over the boat and the bird and the flowers. And in the corner of the picture, a little stone hollow held two small figures, sitting just like them.

'{refrain},' whispered {companion_name}.

They sat in the glow a long, quiet time. One star in the stone sky was a colour the real sky did not have. Something to look for tomorrow night.

The glow softened. The moss was warm.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The old stone picture had been lying in its mossy hollow in {setting} for longer than anyone could say — hundreds of small flat pieces, tumbled from their frame long ago and never put back. Beside the hollow, half swallowed by moss, a worn carving promised: finished by moonlight, it shows what it knows.

Tonight the full moon would land squarely in that hollow, the first time all year. Which is why the {hero} had spent every evening of the week rebuilding the picture properly, with a plan, the way stairs get climbed: corner first, then row by row, one small stretch at a time.

And oh, the picture that had come out of the jumble! A little boat with a patched sail. A bright bird, wings wide. A whole hedge of flowers, and a winding path stitched through the middle of it all. Every evening the picture grew, and the {hero} loved it more.

Until tonight. Only one part remained: the top. And the top was nothing. Dozens of pieces, every last one plain, flat, dull grey. No boat. No bird. Not one interesting corner in the pile.

'Done enough,' the {hero} announced to the hollow. 'All the good parts are in. The moon can skip the sky. Everyone skips the sky.'

The moon arrived right on time, sliding silver into the hollow. It touched the boat. It touched the bird. It lay across the flowers and the winding path.

Nothing happened. No glow, no secret, no shows-what-it-knows. Just a beautiful picture with a big bare hole where its sky belonged, and moonlight pooling in the gap like a question.

The {hero} got to work — the wrong kind of work. The bird was nudged closer to the middle, where the moon could admire it better. The {object_motif} was propped up on a stone to lend the moonlight a hand. The boat was polished with a corner of moss until it fairly gleamed. The moon remained politely unimpressed.

'Hmm,' said {companion_name}, who had picked up one of the grey pieces and was turning it slowly over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

The {hero} snatched up a grey piece, ready to argue — ready to flick the boring thing clear over the hedge — and the moonlight caught it mid-grump. Hold it up to the moon, tilted, just so. Look deep inside the grey. Can you see it too? Tiny sparks. Dozens of them. Fast asleep.

The {hero} went very still.

'They're not dull,' the {hero} whispered. 'They were never dull. They're moon-stone — they only wake in moonlight. The grey pieces are the sky, and the sky is the whole secret. The makers hid the best part inside the boring part, so only a finisher would ever find it. Finishing has its own kind of joy — that is what they saved for last!'

So the {hero} stayed with it. Row by row, the old faithful way, dull piece after dull piece after dull piece, no skipping, no flicking, all the way across the top of the picture while the moon held its place and waited. The second-to-last piece stuck, turned round, and fit. The very last piece went in with a small, satisfied snick.

And the sky woke up.

Every grey piece kindled at once, silver and slow, a hundred small stars catching the moonlight and passing it piece to piece until the whole top of the picture shimmered. Stars over the boat. Stars over the bird. Stars raining gentle light down onto the flowers and the winding path. And in the lowest corner, where the path ended, the picture showed a little mossy hollow with two small figures sitting side by side in it, watching a sky full of stars — just exactly like theirs.

'{refrain},' whispered {companion_name}, settling in closer.

They sat inside the glow for a long, unhurried while, finding favourite stars. The {hero} kept coming back to one: a single star, low in the stone sky, shining a colour the real sky did not have at all. Not silver. Not gold. Something else, something new. Where do you look for a colour like that?

Tomorrow night. That was where.

The glow softened, piece by piece, like banked embers. The moss was warm, and the hollow held them like a hand.

{refrain}.`,
    scriptTemplate: `The old stone picture had been lying in its mossy hollow in {setting} for longer than anyone could say — hundreds of small flat pieces, tumbled from their frame long ago and never put back. Beside the hollow, half swallowed by moss, a worn carving promised: finished by moonlight, it shows what it knows.

Tonight the full moon would land squarely in that hollow, the first time all year. Which is why {child_name} the {hero} had spent every evening of the week rebuilding the picture properly, with a plan, the way stairs get climbed: corner first, then row by row, one small stretch at a time.

And oh, the picture that had come out of the jumble! A little boat with a patched sail. A bright bird, wings wide. A whole hedge of flowers, and a winding path stitched through the middle of it all. Every evening the picture grew, and {child_name} loved it more.

Until tonight. Only one part remained: the top. And the top was nothing. Dozens of pieces, every last one plain, flat, dull grey. No boat. No bird. Not one interesting corner in the pile.

'Done enough,' {child_name} announced to the hollow. 'All the good parts are in. The moon can skip the sky. Everyone skips the sky.'

The moon arrived right on time, sliding silver into the hollow. It touched the boat. It touched the bird. It lay across the flowers and the winding path.

Nothing happened. No glow, no secret, no shows-what-it-knows. Just a beautiful picture with a big bare hole where its sky belonged, and moonlight pooling in the gap like a question.

{child_name} got to work — the wrong kind of work. The bird was nudged closer to the middle, where the moon could admire it better. The {object_motif} was propped up on a stone to lend the moonlight a hand. The boat was polished with a corner of moss until it fairly gleamed. The moon remained politely unimpressed.

'Hmm,' said {companion_name}, who had picked up one of the grey pieces and was turning it slowly over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

{child_name} snatched up a grey piece, ready to argue — ready to flick the boring thing clear over the hedge — and the moonlight caught it mid-grump. Hold it up to the moon, tilted, just so. Look deep inside the grey. Can you see it too? Tiny sparks. Dozens of them. Fast asleep.

{child_name} went very still.

'They're not dull,' {child_name} whispered. 'They were never dull. They're moon-stone — they only wake in moonlight. The grey pieces are the sky, and the sky is the whole secret. The makers hid the best part inside the boring part, so only a finisher would ever find it. Finishing has its own kind of joy — that is what they saved for last!'

So {child_name} stayed with it. Row by row, the old faithful way, dull piece after dull piece after dull piece, no skipping, no flicking, all the way across the top of the picture while the moon held its place and waited. The second-to-last piece stuck, turned round, and fit. The very last piece went in with a small, satisfied snick.

And the sky woke up.

Every grey piece kindled at once, silver and slow, a hundred small stars catching the moonlight and passing it piece to piece until the whole top of the picture shimmered. Stars over the boat. Stars over the bird. Stars raining gentle light down onto the flowers and the winding path. And in the lowest corner, where the path ended, the picture showed a little mossy hollow with two small figures sitting side by side in it, watching a sky full of stars — just exactly like theirs.

'{refrain},' whispered {companion_name}, settling in closer.

They sat inside the glow for a long, unhurried while, finding favourite stars. {child_name} kept coming back to one: a single star, low in the stone sky, shining a colour the real sky did not have at all. Not silver. Not gold. Something else, something new. Where do you look for a colour like that?

Tomorrow night. That was where.

The glow softened, piece by piece, like banked embers. The moss was warm, and the hollow held them like a hand.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `Everyone in {setting} knew the broken picture in the mossy hollow, the way you know things you have walked past your whole life: hundreds of small flat stones, jumbled and face-down, spilled from a frame set into the ground longer ago than anyone living could say. And everyone knew the worn carving beside it: finished by moonlight, it shows what it knows.

What almost nobody knew — because almost nobody had checked — was that tonight's full moon would land directly in that hollow, dead centre, for the first time in years. The {hero} had checked, and had spent seven straight evenings rebuilding the picture the way big things get built: with a plan. Corner first. Then row by row, one small stretch a night — the same trick that once turned an unclimbable ridge into a staircase.

And the picture had bloomed under all that patience. A little boat with a patched sail. A bright bird caught mid-turn. A hedge of flowers, a winding path, a distant hill. Piece by piece the jumble had become somewhere — somewhere the {hero} half wished they could walk into.

One region remained: the top. The sky. And the sky, it turned out, was a heap of nothing. Dozens upon dozens of pieces, each one plain, flat, dull grey. No sail-corners. No wingtips. An entire evening of blank.

'Done enough,' the {hero} declared, standing back. 'Every good piece is placed. The moon gets a boat, a bird, a garden and a road. Nobody ever looked at a picture and complained about the sky.'

The moon came anyway, right on schedule, and poured itself into the hollow. It lay across the boat. It silvered the bird's wing. It followed the winding path to the empty top of the picture — and stopped, pooling in the bare gap like a sentence with no ending.

No glow. No secret. Nothing known, nothing shown.

What followed was a quietly ridiculous half hour. The bird was relocated toward the centre, for prominence. The {object_motif} was propped at a strategic angle, to reinforce the moonlight. The boat was buffed until it shone like a spoon. Three flower pieces were rearranged into a more artistic cluster, in case the picture was being judged on composition. The moon declined to comment.

'Hmm,' said {companion_name}, who all this while had been turning one grey piece over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

'The dull ones are filler,' said the {hero}, snatching one up to flick it into the hedge — and the moonlight caught it mid-flick, at an angle nobody had tried all week. Tilt it, slowly, and look deep into the grey. Can you see it too? Sparks. Dozens of tiny sparks, buried in the stone like embers under ash. Fast asleep.

The {hero} lowered the piece and stood absolutely still, feeling the whole week rearrange itself.

'They're moon-stone,' the {hero} said slowly. 'They drink moonlight — they only wake when the moon is on them. The grey pieces aren't the filler. The grey pieces are the sky, and the sky is what the picture knows. The makers hid the treasure inside the tedious part, where only a finisher would ever find it. Quitters get the boat and the bird. Finishers get the stars. Finishing has its own kind of joy — they built that promise into the very last row.'

So the {hero} finished. Properly, the plan's way: row by row across the top, grey piece after grey piece, each one blank as porridge and each one — the {hero} now knew — holding its own small ember. It was not exciting work. That was the point of it. The excitement was waiting on the far side, the way the top of a ridge waits above the last few stairs. The second-to-last piece refused twice, then turned and settled. The last piece went in with a small, conclusive snick.

The sky woke up.

It did not flash. It kindled — one piece catching the moon, handing the light to its neighbour, silver spreading piece by piece until the hollow was roofed in small slow stars. Stars over the boat. Stars over the bird. Star-light running down the winding path like rain down a window. And at the path's end, in the lowest corner, the picture quietly showed a mossy hollow with two small figures side by side beneath a finished sky. It had known them all along.

'{refrain},' whispered {companion_name}, settling in shoulder-close.

They stayed a long time, finding favourite stars. The {hero}'s favourite was a puzzle: one star, low in the stone sky, burning a colour the real sky has never offered — not silver, not gold, something with no name yet. A colour you could go looking for. Tomorrow night, perhaps. The search would need a plan, and the {hero} was good at those now.

The glow banked itself slowly, piece by piece, like embers settling for the night. The moss was warm. The hollow held them.

{refrain}.`,
    scriptTemplate: `Everyone in {setting} knew the broken picture in the mossy hollow, the way you know things you have walked past your whole life: hundreds of small flat stones, jumbled and face-down, spilled from a frame set into the ground longer ago than anyone living could say. And everyone knew the worn carving beside it: finished by moonlight, it shows what it knows.

What almost nobody knew — because almost nobody had checked — was that tonight's full moon would land directly in that hollow, dead centre, for the first time in years. {child_name} the {hero} had checked, and had spent seven straight evenings rebuilding the picture the way big things get built: with a plan. Corner first. Then row by row, one small stretch a night — the same trick that once turned an unclimbable ridge into a staircase.

And the picture had bloomed under all that patience. A little boat with a patched sail. A bright bird caught mid-turn. A hedge of flowers, a winding path, a distant hill. Piece by piece the jumble had become somewhere — somewhere {child_name} half wished they could walk into.

One region remained: the top. The sky. And the sky, it turned out, was a heap of nothing. Dozens upon dozens of pieces, each one plain, flat, dull grey. No sail-corners. No wingtips. An entire evening of blank.

'Done enough,' {child_name} declared, standing back. 'Every good piece is placed. The moon gets a boat, a bird, a garden and a road. Nobody ever looked at a picture and complained about the sky.'

The moon came anyway, right on schedule, and poured itself into the hollow. It lay across the boat. It silvered the bird's wing. It followed the winding path to the empty top of the picture — and stopped, pooling in the bare gap like a sentence with no ending.

No glow. No secret. Nothing known, nothing shown.

What followed was a quietly ridiculous half hour. The bird was relocated toward the centre, for prominence. The {object_motif} was propped at a strategic angle, to reinforce the moonlight. The boat was buffed until it shone like a spoon. Three flower pieces were rearranged into a more artistic cluster, in case the picture was being judged on composition. The moon declined to comment.

'Hmm,' said {companion_name}, who all this while had been turning one grey piece over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

'The dull ones are filler,' said {child_name}, snatching one up to flick it into the hedge — and the moonlight caught it mid-flick, at an angle nobody had tried all week. Tilt it, slowly, and look deep into the grey. Can you see it too? Sparks. Dozens of tiny sparks, buried in the stone like embers under ash. Fast asleep.

{child_name} lowered the piece and stood absolutely still, feeling the whole week rearrange itself.

'They're moon-stone,' {child_name} said slowly. 'They drink moonlight — they only wake when the moon is on them. The grey pieces aren't the filler. The grey pieces are the sky, and the sky is what the picture knows. The makers hid the treasure inside the tedious part, where only a finisher would ever find it. Quitters get the boat and the bird. Finishers get the stars. Finishing has its own kind of joy — they built that promise into the very last row.'

So {child_name} finished. Properly, the plan's way: row by row across the top, grey piece after grey piece, each one blank as porridge and each one — {child_name} now knew — holding its own small ember. It was not exciting work. That was the point of it. The excitement was waiting on the far side, the way the top of a ridge waits above the last few stairs. The second-to-last piece refused twice, then turned and settled. The last piece went in with a small, conclusive snick.

The sky woke up.

It did not flash. It kindled — one piece catching the moon, handing the light to its neighbour, silver spreading piece by piece until the hollow was roofed in small slow stars. Stars over the boat. Stars over the bird. Star-light running down the winding path like rain down a window. And at the path's end, in the lowest corner, the picture quietly showed a mossy hollow with two small figures side by side beneath a finished sky. It had known them all along.

'{refrain},' whispered {companion_name}, settling in shoulder-close.

They stayed a long time, finding favourite stars. {child_name}'s favourite was a puzzle: one star, low in the stone sky, burning a colour the real sky has never offered — not silver, not gold, something with no name yet. A colour you could go looking for. Tomorrow night, perhaps. The search would need a plan, and {child_name} was good at those now.

The glow banked itself slowly, piece by piece, like embers settling for the night. The moss was warm. The hollow held them.

{refrain}.`
  }
},
    audioTemplate: `In a mossy hollow in {setting} lay an old stone picture, tumbled into a hundred little pieces long ago. Beside it, a worn carving read: finished by moonlight, it shows what it knows.

All week the {hero} had been putting it back together with a plan — corner first, then row by row, like stones on a path. And what a picture! A little boat. A bright bird. A whole hedge of flowers.

Tonight the full moon would land right in the hollow. Only one part was left: the top. Dozens of pieces, every one plain, dull grey. No boats. No birds. Nothing.

'Done enough,' the {hero} declared. 'The moon will see the good parts. Who needs a grey sky?'

The moon slid in. It touched the boat, the bird, the flowers... and nothing happened. No glow. No secret. Just a picture with a hole where its sky should be.

The {hero} tried helping. The bird got nudged to the middle. The {object_motif} got propped up to boost the moon. The boat got polished till it shone. Still nothing.

'Hmm,' said {companion_name}, turning one grey piece over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

The {hero} picked up a grey piece to flick it away — and stopped. Hold it up to the moon and look deep inside. Can you see it too? Tiny sparks, fast asleep.

'Oh!' breathed the {hero}. 'The grey pieces are the sky! They only wake in moonlight. The makers hid the best part in the boring part — you only find it if you finish. Finishing has its own kind of joy, and they saved it for last!'

So the {hero} stayed with it, row by row, dull piece by dull piece, to the very end. The last one went in with a tiny snick.

And the sky woke up. Every grey piece kindled silver — a hundred small stars over the boat and the bird and the flowers. And in the corner of the picture, a little stone hollow held two small figures, sitting just like them.

'{refrain},' whispered {companion_name}.

They sat in the glow a long, quiet time. One star in the stone sky was a colour the real sky did not have. Something to look for tomorrow night.

The glow softened. The moss was warm.

{refrain}.`,
    scriptTemplate: `In a mossy hollow in {setting} lay an old stone picture, tumbled into a hundred little pieces long ago. Beside it, a worn carving read: finished by moonlight, it shows what it knows.

All week {child_name} the {hero} had been putting it back together with a plan — corner first, then row by row, like stones on a path. And what a picture! A little boat. A bright bird. A whole hedge of flowers.

Tonight the full moon would land right in the hollow. Only one part was left: the top. Dozens of pieces, every one plain, dull grey. No boats. No birds. Nothing.

'Done enough,' {child_name} declared. 'The moon will see the good parts. Who needs a grey sky?'

The moon slid in. It touched the boat, the bird, the flowers... and nothing happened. No glow. No secret. Just a picture with a hole where its sky should be.

{child_name} tried helping. The bird got nudged to the middle. The {object_motif} got propped up to boost the moon. The boat got polished till it shone. Still nothing.

'Hmm,' said {companion_name}, turning one grey piece over and over. 'The makers cut every piece on purpose. Even the dull ones. Especially, maybe, the dull ones.'

{child_name} picked up a grey piece to flick it away — and stopped. Hold it up to the moon and look deep inside. Can you see it too? Tiny sparks, fast asleep.

'Oh!' breathed {child_name}. 'The grey pieces are the sky! They only wake in moonlight. The makers hid the best part in the boring part — you only find it if you finish. Finishing has its own kind of joy, and they saved it for last!'

So {child_name} stayed with it, row by row, dull piece by dull piece, to the very end. The last one went in with a tiny snick.

And the sky woke up. Every grey piece kindled silver — a hundred small stars over the boat and the bird and the flowers. And in the corner of the picture, a little stone hollow held two small figures, sitting just like them.

'{refrain},' whispered {companion_name}.

They sat in the glow a long, quiet time. One star in the stone sky was a colour the real sky did not have. Something to look for tomorrow night.

The glow softened. The moss was warm.

{refrain}.`,
  },

  {
    ordinal: 5, title: "The Corner That Waited",
    concept: "Choosing your own goal and steadily working toward it", callback: "Finishing what you start (Level 4)", ageFloor: 5,
    summary: "It is Choosing Night, when every young one picks a task and sees it through by moonhigh — and everyone has loud ideas about what the hero should pick. But the grand choices fit like someone else's boots, and the hero's eyes keep drifting to a tumbledown little corner seat labelled 'for whoever chooses it.' Choosing it, and steadily finishing it with every skill the path has taught, uncovers the old builder's secret: the prize was never hidden in the nook at all.",
    teachingNote: "When a child can choose a goal for themselves and steadily carry it to the end, every focus skill they have learned is finally working together on something they truly want.",
    learningBeat: "mine to choose",
    ageVariants: {
  '3-4': {
    audioTemplate: `It was Choosing Night in {setting}! Everyone picked one job and did it, all the way to done.

'Pick the big shiny tower!' said the big ones. 'Pick the great bell!'

But the {hero}'s eyes kept going to the little broken corner seat, crooked and mossy. Its old sign said: for whoever chooses it.

Nobody ever chose it.

'This one is mine,' said the {hero}. 'Mine to choose!'

The {hero} lifted the crooked stone. Creak! Underneath lay a tiny old note. Can you see it too? It said: finish me your way. The prize is not a thing.

The {hero} got to work. One stone straight. Two stones. Three! Then the mossy bits, even the boring ones. All the way to done.

Last, the {hero} hung the {object_motif} on the seat's little hook. It glowed!

And the moon rose right in front of the seat. The best moon-watching spot of all!

'{refrain},' whispered {companion_name}, snuggling close.

The note was right. The prize was the warm, proud feeling inside.

The {hero} tucked a new note under the stone. For the next chooser. Shhh.

Sleepy moon. Cozy seat.

{refrain}.`,
    scriptTemplate: `It was Choosing Night in {setting}! Everyone picked one job and did it, all the way to done.

'Pick the big shiny tower!' said the big ones. 'Pick the great bell!'

But {child_name} the {hero}'s eyes kept going to the little broken corner seat, crooked and mossy. Its old sign said: for whoever chooses it.

Nobody ever chose it.

'This one is mine,' said {child_name}. 'Mine to choose!'

{child_name} lifted the crooked stone. Creak! Underneath lay a tiny old note. Can you see it too? It said: finish me your way. The prize is not a thing.

{child_name} got to work. One stone straight. Two stones. Three! Then the mossy bits, even the boring ones. All the way to done.

Last, {child_name} hung the {object_motif} on the seat's little hook. It glowed!

And the moon rose right in front of the seat. The best moon-watching spot of all!

'{refrain},' whispered {companion_name}, snuggling close.

The note was right. The prize was the warm, proud feeling inside.

{child_name} tucked a new note under the stone. For the next chooser. Shhh.

Sleepy moon. Cozy seat.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Once a year in {setting} came Choosing Night: pick one task at sunset, carry it to done by moonhigh. Tonight was the {hero}'s first, and the {hero} wanted so much to choose right.

Everyone had ideas. 'Polish the great bell!' called the big ones. 'Stack the tallest tower! That is what we would pick!'

So the {hero} tried. Three polishes into the bell, it felt like singing somebody else's song. Two stones into the tower, the same wrong feeling.

All the while, the {hero}'s eyes kept drifting to the quiet corner, where a little tumbledown seat sat crooked under the moss. Its worn sign said: for whoever chooses it. Nobody ever chose it.

'Hmm,' said {companion_name}. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the little seat was not junk. Somebody long ago had started it with care, and never finished.

The {hero} lifted the crooked corner stone to straighten it. Creak! Underneath — look close. Something pale and folded. Can you see it too? Writing.

The note said: I began this for whoever chooses it. Finish it any way you like. The prize is not under any stone.

'Then this one is mine,' said the {hero}. 'Not the biggest. Not the loudest. Mine to choose.'

And the {hero} worked the way the whole path had taught. One thing at a time. Small steps: stones, then seat, then moss. When cheering tugged at the {hero}'s thoughts, the {hero} noticed, and came gently back. The last dull stretch got finished too, all the way — finishing is where the best part hides.

Last of all, the {hero} hung the {object_motif} on the seat's empty hook. Made to hold a light, all along.

Then the moon rose — right in front of the seat. The little corner faced the moonrise exactly. The finest moon-watching seat in {setting}, waiting to be chosen.

'{refrain},' whispered {companion_name}, climbing up beside the {hero}.

The note was right. The prize was not under any stone. It was the warm, steady feeling of a thing chosen, and carried, and done.

Before bed, the {hero} tucked a new note under the corner stone, for the next chooser. What it said was a secret for someone not yet come.

The moon climbed slow. The seat held them both.

{refrain}.`,
    scriptTemplate: `Once a year in {setting} came Choosing Night: pick one task at sunset, carry it to done by moonhigh. Tonight was {child_name} the {hero}'s first, and {child_name} wanted so much to choose right.

Everyone had ideas. 'Polish the great bell!' called the big ones. 'Stack the tallest tower! That is what we would pick!'

So {child_name} tried. Three polishes into the bell, it felt like singing somebody else's song. Two stones into the tower, the same wrong feeling.

All the while, {child_name}'s eyes kept drifting to the quiet corner, where a little tumbledown seat sat crooked under the moss. Its worn sign said: for whoever chooses it. Nobody ever chose it.

'Hmm,' said {companion_name}. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the little seat was not junk. Somebody long ago had started it with care, and never finished.

{child_name} lifted the crooked corner stone to straighten it. Creak! Underneath — look close. Something pale and folded. Can you see it too? Writing.

The note said: I began this for whoever chooses it. Finish it any way you like. The prize is not under any stone.

'Then this one is mine,' said {child_name}. 'Not the biggest. Not the loudest. Mine to choose.'

And {child_name} worked the way the whole path had taught. One thing at a time. Small steps: stones, then seat, then moss. When cheering tugged at {child_name}'s thoughts, {child_name} noticed, and came gently back. The last dull stretch got finished too, all the way — finishing is where the best part hides.

Last of all, {child_name} hung the {object_motif} on the seat's empty hook. Made to hold a light, all along.

Then the moon rose — right in front of the seat. The little corner faced the moonrise exactly. The finest moon-watching seat in {setting}, waiting to be chosen.

'{refrain},' whispered {companion_name}, climbing up beside {child_name}.

The note was right. The prize was not under any stone. It was the warm, steady feeling of a thing chosen, and carried, and done.

Before bed, {child_name} tucked a new note under the corner stone, for the next chooser. What it said was a secret for someone not yet come.

The moon climbed slow. The seat held them both.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Once a year, when the first frost-smelling wind came through {setting}, came Choosing Night. The rules were old and simple: at sunset, every young one chose a task — any task — and carried it to done by moonhigh. Not the biggest task. Just one, truly chosen, truly finished.

Tonight was the {hero}'s first, and the {hero} had been nervous for days. Because everyone had ideas.

'Polish the great bell!' said the big ones. 'The whole night cheers for the bell-shiner!'

'Stack the tallest stone tower!' said the clever ones. 'That is what we would pick.'

So the {hero}, wanting badly to choose right, tried on the choices everyone else held out. The great bell first: three polishes in, it felt exactly like wearing somebody else's boots. Heavy in the wrong places. The tower next: two stones up, the same wrong-boots feeling, plus a squashed toe.

And here was the odd thing. All evening, the {hero}'s eyes kept wandering off on their own — and always to the same place. The quiet corner. Where a little tumbledown seat slumped under years of moss, crooked as a bad tooth, with a worn sign on its post: for whoever chooses it.

Nobody chose it. Nobody ever had, as far back as anyone could remember.

The {hero} noticed the drift — noticing was an old friend by now — and this time, instead of dragging their attention back to the bell, the {hero} followed it.

'Hmm,' said {companion_name}, falling in alongside. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the little seat was not junk. It was almost something. Somebody, long ago, had begun it with real care — the joints were true under the moss, a small hook set by the headrest just so — and then stopped. It was a started thing, waiting to be finished.

The {hero} lifted the crooked corner stone to set it straight. Creak. And there, underneath — look close, in the stone's shadow. Something pale, and folded, and older than old. Can you see it too? Writing.

The note said: I began this and left it for whoever chooses it. Finish it any way you like. The prize is not under any stone.

The {hero} read it twice, and something in the evening went quiet and certain.

'Then this one is mine,' said the {hero}. 'Not the biggest. Not the loudest. Nobody picked it for me — that is exactly the point. Mine to choose.'

And then the {hero} worked, and the working used everything the long path had taught. One thing at a time: stones first, only stones, until the base sat square. Then small steps in order, like a stair: seat, back, armrest, hook. When a huge cheer went up from the bell crowd and the {hero}'s thoughts ran off to see, the {hero} noticed, smiled, and came gently back. And the last stretch, the dull stretch, moss out of every crack — the {hero} stayed for all of it, because finishing is where the best part always hides.

Last of all, the {hero} hung the {object_motif} on the little hook. It fit as if measured. The seat had been built to hold a light, all along.

Then the moon came up — and the {hero} understood the builder completely. The little corner faced the moonrise. Exactly. The crooked seat that nobody chose was the finest moon-watching seat in all of {setting}, waiting all those years for someone to choose it and find out.

'{refrain},' whispered {companion_name}, climbing up beside the {hero} as the moonlight filled the corner.

One by one, quiet as moths, others drifted over from the bell and the tower, and the corner turned out to have room for everyone to sit near. The {hero} sat in the middle, tired in the best way, and understood the note at last. The prize was not under any stone. It was the steady, warm-all-through feeling of a thing chosen by your own heart, carried through every tug, and finished.

Before bed, the {hero} folded a new note and tucked it under the corner stone, for whichever chooser came next. What it said is a secret between the {hero} and someone not yet arrived.

The moon climbed slow and easy. The seat held them all.

{refrain}.`,
    scriptTemplate: `Once a year, when the first frost-smelling wind came through {setting}, came Choosing Night. The rules were old and simple: at sunset, every young one chose a task — any task — and carried it to done by moonhigh. Not the biggest task. Just one, truly chosen, truly finished.

Tonight was {child_name} the {hero}'s first, and {child_name} had been nervous for days. Because everyone had ideas.

'Polish the great bell!' said the big ones. 'The whole night cheers for the bell-shiner!'

'Stack the tallest stone tower!' said the clever ones. 'That is what we would pick.'

So {child_name}, wanting badly to choose right, tried on the choices everyone else held out. The great bell first: three polishes in, it felt exactly like wearing somebody else's boots. Heavy in the wrong places. The tower next: two stones up, the same wrong-boots feeling, plus a squashed toe.

And here was the odd thing. All evening, {child_name}'s eyes kept wandering off on their own — and always to the same place. The quiet corner. Where a little tumbledown seat slumped under years of moss, crooked as a bad tooth, with a worn sign on its post: for whoever chooses it.

Nobody chose it. Nobody ever had, as far back as anyone could remember.

{child_name} noticed the drift — noticing was an old friend by now — and this time, instead of dragging their attention back to the bell, {child_name} followed it.

'Hmm,' said {companion_name}, falling in alongside. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the little seat was not junk. It was almost something. Somebody, long ago, had begun it with real care — the joints were true under the moss, a small hook set by the headrest just so — and then stopped. It was a started thing, waiting to be finished.

{child_name} lifted the crooked corner stone to set it straight. Creak. And there, underneath — look close, in the stone's shadow. Something pale, and folded, and older than old. Can you see it too? Writing.

The note said: I began this and left it for whoever chooses it. Finish it any way you like. The prize is not under any stone.

{child_name} read it twice, and something in the evening went quiet and certain.

'Then this one is mine,' said {child_name}. 'Not the biggest. Not the loudest. Nobody picked it for me — that is exactly the point. Mine to choose.'

And then {child_name} worked, and the working used everything the long path had taught. One thing at a time: stones first, only stones, until the base sat square. Then small steps in order, like a stair: seat, back, armrest, hook. When a huge cheer went up from the bell crowd and {child_name}'s thoughts ran off to see, {child_name} noticed, smiled, and came gently back. And the last stretch, the dull stretch, moss out of every crack — {child_name} stayed for all of it, because finishing is where the best part always hides.

Last of all, {child_name} hung the {object_motif} on the little hook. It fit as if measured. The seat had been built to hold a light, all along.

Then the moon came up — and {child_name} understood the builder completely. The little corner faced the moonrise. Exactly. The crooked seat that nobody chose was the finest moon-watching seat in all of {setting}, waiting all those years for someone to choose it and find out.

'{refrain},' whispered {companion_name}, climbing up beside {child_name} as the moonlight filled the corner.

One by one, quiet as moths, others drifted over from the bell and the tower, and the corner turned out to have room for everyone to sit near. {child_name} sat in the middle, tired in the best way, and understood the note at last. The prize was not under any stone. It was the steady, warm-all-through feeling of a thing chosen by your own heart, carried through every tug, and finished.

Before bed, {child_name} folded a new note and tucked it under the corner stone, for whichever chooser came next. What it said is a secret between {child_name} and someone not yet arrived.

The moon climbed slow and easy. The seat held them all.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `Choosing Night came to {setting} once a year, on the first night that smelled of frost, and its rules had not changed in memory: at sunset you chose a task — any task — and by moonhigh you carried it to done. Nobody graded it. The night graded itself.

It was the {hero}'s first, and they had been quietly dreading it for a week. Not the working — the choosing. Everyone had an opinion about what the {hero} should pick, and all the opinions were loud.

'The great bell,' said the big ones. 'Polish it till it booms. The whole night cheers for the bell-shiner.'

'The stone tower,' said the clever ones. 'Everyone sees a tower for years. That is what we would pick.'

That is what we would pick. The {hero} heard it a dozen times, and every time it sounded reasonable, and fit like boots borrowed from somebody with different feet.

The {hero} tried anyway. Three polishes into the great bell — surrounded by cheering, doing the unarguably right thing — the {hero} felt only the wish to be elsewhere. Two stones into the tower, same. The tasks belonged to the people who had offered them.

All the while, the {hero}'s attention kept slipping its rope. But this wandering was strange: it did not scatter. It went, every time, to the quiet corner, where a little tumbledown seat slumped under years of moss, crooked and ignored, with a worn sign everyone could quote and nobody had ever answered: for whoever chooses it.

This time, instead of hauling their attention back, the {hero} followed it. Attention, it occurred to the {hero}, might sometimes be a compass rather than a runaway.

'Hmm,' said {companion_name}, falling in alongside, unsurprised. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the seat changed. Under the moss it was careful work: true joints, a seat-slab chosen for smoothness, a small iron hook set at exactly lantern height. Somebody had begun this with love — and, for reasons the moss had long since swallowed, stopped. Not a ruin. A started thing, holding its breath.

The {hero} lifted the crooked corner stone to square it. Creak. Underneath, pressed flat in the dry shadow — look close. Something pale, folded, older than old. Can you see it too? Writing.

I began this and left it for whoever chooses it. Finish it any way you like. The prize is not under any stone.

The {hero} read it twice and felt the whole nervous week settle, the way water settles when you stop stirring.

'Then it is mine,' the {hero} said. 'Not the biggest. Not the loudest. Not what anyone would pick for me — that is the entire point. Mine to choose.'

What followed was the best working hour of the {hero}'s life. Every skill the long path had built showed up on its own, like friends who had heard there was lifting to do. One thing at a time: stones first, only stones, until the base sat square. Then the steps in order, a plan like a small stair: seat, back, armrest, hook. When the bell crowd sent up a cheer that yanked the {hero}'s thoughts clean away, the {hero} noticed, let it pass like weather, and came home to the work. And the tedious final stretch, moss out of every seam — where every earlier version of the {hero} would have called it done enough — the {hero} stayed. All the way. Finishing is where the makers hide the best part.

The last act was the hook. The {hero} hung the {object_motif} on it, and it fit as if the hook had been forged around it. The seat had been built to hold a light. All along.

Then the moon rose, and the builder's whole design came quietly clear. The little corner faced the moonrise — not roughly, but exactly, the way only somebody who had watched a great many moonrises could arrange. The seat nobody chose was the finest moon-watching place in all of {setting}. Its only price had ever been being chosen.

'{refrain},' whispered {companion_name}, climbing up beside the {hero} as the light came flooding in.

The others drifted over in ones and twos, quiet as moths, bell-shiners and tower-stackers together, and the corner had room for all of them to gather near. The {hero} sat in the middle, pleasantly worn out, and finally understood the note. The prize was not under any stone, and it was not the seat either. It was what the evening had built inside the {hero} while they were busy building the seat: the steady, sure feeling of a goal chosen by your own heart and carried — through wrong boots and loud opinions — all the way to done. That, no one can hand you. You can only make it.

Before bed, the {hero} wrote a new note and tucked it under the corner stone for the next chooser, however many Choosing Nights from now. What it says is between the {hero} and them.

The moon climbed slow. The light glowed on its hook. The seat held everyone.

{refrain}.`,
    scriptTemplate: `Choosing Night came to {setting} once a year, on the first night that smelled of frost, and its rules had not changed in memory: at sunset you chose a task — any task — and by moonhigh you carried it to done. Nobody graded it. The night graded itself.

It was {child_name} the {hero}'s first, and they had been quietly dreading it for a week. Not the working — the choosing. Everyone had an opinion about what {child_name} should pick, and all the opinions were loud.

'The great bell,' said the big ones. 'Polish it till it booms. The whole night cheers for the bell-shiner.'

'The stone tower,' said the clever ones. 'Everyone sees a tower for years. That is what we would pick.'

That is what we would pick. {child_name} heard it a dozen times, and every time it sounded reasonable, and fit like boots borrowed from somebody with different feet.

{child_name} tried anyway. Three polishes into the great bell — surrounded by cheering, doing the unarguably right thing — {child_name} felt only the wish to be elsewhere. Two stones into the tower, same. The tasks belonged to the people who had offered them.

All the while, {child_name}'s attention kept slipping its rope. But this wandering was strange: it did not scatter. It went, every time, to the quiet corner, where a little tumbledown seat slumped under years of moss, crooked and ignored, with a worn sign everyone could quote and nobody had ever answered: for whoever chooses it.

This time, instead of hauling their attention back, {child_name} followed it. Attention, it occurred to {child_name}, might sometimes be a compass rather than a runaway.

'Hmm,' said {companion_name}, falling in alongside, unsurprised. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the seat changed. Under the moss it was careful work: true joints, a seat-slab chosen for smoothness, a small iron hook set at exactly lantern height. Somebody had begun this with love — and, for reasons the moss had long since swallowed, stopped. Not a ruin. A started thing, holding its breath.

{child_name} lifted the crooked corner stone to square it. Creak. Underneath, pressed flat in the dry shadow — look close. Something pale, folded, older than old. Can you see it too? Writing.

I began this and left it for whoever chooses it. Finish it any way you like. The prize is not under any stone.

{child_name} read it twice and felt the whole nervous week settle, the way water settles when you stop stirring.

'Then it is mine,' {child_name} said. 'Not the biggest. Not the loudest. Not what anyone would pick for me — that is the entire point. Mine to choose.'

What followed was the best working hour of {child_name}'s life. Every skill the long path had built showed up on its own, like friends who had heard there was lifting to do. One thing at a time: stones first, only stones, until the base sat square. Then the steps in order, a plan like a small stair: seat, back, armrest, hook. When the bell crowd sent up a cheer that yanked {child_name}'s thoughts clean away, {child_name} noticed, let it pass like weather, and came home to the work. And the tedious final stretch, moss out of every seam — where every earlier version of {child_name} would have called it done enough — {child_name} stayed. All the way. Finishing is where the makers hide the best part.

The last act was the hook. {child_name} hung the {object_motif} on it, and it fit as if the hook had been forged around it. The seat had been built to hold a light. All along.

Then the moon rose, and the builder's whole design came quietly clear. The little corner faced the moonrise — not roughly, but exactly, the way only somebody who had watched a great many moonrises could arrange. The seat nobody chose was the finest moon-watching place in all of {setting}. Its only price had ever been being chosen.

'{refrain},' whispered {companion_name}, climbing up beside {child_name} as the light came flooding in.

The others drifted over in ones and twos, quiet as moths, bell-shiners and tower-stackers together, and the corner had room for all of them to gather near. {child_name} sat in the middle, pleasantly worn out, and finally understood the note. The prize was not under any stone, and it was not the seat either. It was what the evening had built inside {child_name} while they were busy building the seat: the steady, sure feeling of a goal chosen by your own heart and carried — through wrong boots and loud opinions — all the way to done. That, no one can hand you. You can only make it.

Before bed, {child_name} wrote a new note and tucked it under the corner stone for the next chooser, however many Choosing Nights from now. What it says is between {child_name} and them.

The moon climbed slow. The light glowed on its hook. The seat held everyone.

{refrain}.`
  }
},
    audioTemplate: `Once a year in {setting} came Choosing Night: pick one task at sunset, carry it to done by moonhigh. Tonight was the {hero}'s first, and the {hero} wanted so much to choose right.

Everyone had ideas. 'Polish the great bell!' called the big ones. 'Stack the tallest tower! That is what we would pick!'

So the {hero} tried. Three polishes into the bell, it felt like singing somebody else's song. Two stones into the tower, the same wrong feeling.

All the while, the {hero}'s eyes kept drifting to the quiet corner, where a little tumbledown seat sat crooked under the moss. Its worn sign said: for whoever chooses it. Nobody ever chose it.

'Hmm,' said {companion_name}. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the little seat was not junk. Somebody long ago had started it with care, and never finished.

The {hero} lifted the crooked corner stone to straighten it. Creak! Underneath — look close. Something pale and folded. Can you see it too? Writing.

The note said: I began this for whoever chooses it. Finish it any way you like. The prize is not under any stone.

'Then this one is mine,' said the {hero}. 'Not the biggest. Not the loudest. Mine to choose.'

And the {hero} worked the way the whole path had taught. One thing at a time. Small steps: stones, then seat, then moss. When cheering tugged at the {hero}'s thoughts, the {hero} noticed, and came gently back. The last dull stretch got finished too, all the way — finishing is where the best part hides.

Last of all, the {hero} hung the {object_motif} on the seat's empty hook. Made to hold a light, all along.

Then the moon rose — right in front of the seat. The little corner faced the moonrise exactly. The finest moon-watching seat in {setting}, waiting to be chosen.

'{refrain},' whispered {companion_name}, climbing up beside the {hero}.

The note was right. The prize was not under any stone. It was the warm, steady feeling of a thing chosen, and carried, and done.

Before bed, the {hero} tucked a new note under the corner stone, for the next chooser. What it said was a secret for someone not yet come.

The moon climbed slow. The seat held them both.

{refrain}.`,
    scriptTemplate: `Once a year in {setting} came Choosing Night: pick one task at sunset, carry it to done by moonhigh. Tonight was {child_name} the {hero}'s first, and {child_name} wanted so much to choose right.

Everyone had ideas. 'Polish the great bell!' called the big ones. 'Stack the tallest tower! That is what we would pick!'

So {child_name} tried. Three polishes into the bell, it felt like singing somebody else's song. Two stones into the tower, the same wrong feeling.

All the while, {child_name}'s eyes kept drifting to the quiet corner, where a little tumbledown seat sat crooked under the moss. Its worn sign said: for whoever chooses it. Nobody ever chose it.

'Hmm,' said {companion_name}. 'Nobody can hand you the right one. That is the only rule there is.'

Up close, the little seat was not junk. Somebody long ago had started it with care, and never finished.

{child_name} lifted the crooked corner stone to straighten it. Creak! Underneath — look close. Something pale and folded. Can you see it too? Writing.

The note said: I began this for whoever chooses it. Finish it any way you like. The prize is not under any stone.

'Then this one is mine,' said {child_name}. 'Not the biggest. Not the loudest. Mine to choose.'

And {child_name} worked the way the whole path had taught. One thing at a time. Small steps: stones, then seat, then moss. When cheering tugged at {child_name}'s thoughts, {child_name} noticed, and came gently back. The last dull stretch got finished too, all the way — finishing is where the best part hides.

Last of all, {child_name} hung the {object_motif} on the seat's empty hook. Made to hold a light, all along.

Then the moon rose — right in front of the seat. The little corner faced the moonrise exactly. The finest moon-watching seat in {setting}, waiting to be chosen.

'{refrain},' whispered {companion_name}, climbing up beside {child_name}.

The note was right. The prize was not under any stone. It was the warm, steady feeling of a thing chosen, and carried, and done.

Before bed, {child_name} tucked a new note under the corner stone, for the next chooser. What it said was a secret for someone not yet come.

The moon climbed slow. The seat held them both.

{refrain}.`,
  },
]
