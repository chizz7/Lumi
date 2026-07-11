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
    ordinal: 1, title: 'One at a Time',
    concept: 'Working through one problem at a time', callback: null, ageFloor: 3,
    summary: 'The hero faces several tangled problems at once and feels overwhelmed. Their companion teaches the first and most important step: choose one problem, solve it completely, then move to the next. This is how big troubles become small.',
    teachingNote: 'When a child learns to isolate one problem at a time, overwhelm transforms into capability. Completion builds confidence for the next thing.',
    learningBeat: 'Work through one problem at a time',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} woke up in {setting} and saw a big, messy pile. Blocks lay here. A hole was there. The {object_motif} was dirty. The {hero} looked at it all and felt small.

"I will fix it all!" said the {hero}. So the {hero} ran to the blocks. Pick up one. Pick up two. Then the {hero} saw the hole.

"Oh! The hole first!" The {hero} ran to the hole. Dig, dig, dig. But then the {hero} looked back. The blocks still lay there.

"No! The blocks!" Back to the blocks. But wait — the {object_motif} was still dirty. The {hero} picked it up. Then saw the hole again.

The {hero} felt so cross. Nothing was done. Everything was half-done. The {hero} sat down and wanted to cry.

Then {companion_name} came close. {companion_name} sat down too.

"Three things," said {companion_name}. "But you want to do all three at once. That is too many. Work through one problem at a time."

The {hero} looked up. "One at a time?"

"Yes," said {companion_name}. "Pick one thing. Do it all the way done. Then pick the next. One at a time is how big jobs get small."

The {hero} took a slow breath. The {hero} pointed at the blocks.

"This one first," said the {hero}.

So the {hero} picked up every single block. One. Two. Three. Four. Five. All of them. Done. The blocks were all clean and neat.

The {hero} looked up. The {hero} smiled. One thing was finished!

"Good work," said {companion_name}. "Now the next."

The {hero} went to the hole. Soft dirt. Pat, pat, pat. The hole was filled. Another thing done.

Then the {hero} cleaned the {object_motif}. Rub, rub, rub. Clean and bright.

All done. Everything done. The {hero} felt so good.

The {hero} gave a big, happy yawn. The night was soft and still.

"You worked through one problem at a time," said {companion_name}. "And now it is all done."

The {hero} held the {object_motif} close. The moon rose soft and gold over {setting}.

{refrain}.`,
    scriptTemplate: `{child_name} woke up in {setting} and saw a big, messy pile. Blocks lay here. A hole was there. The {object_motif} was dirty. {child_name} looked at it all and felt small.

"I will fix it all!" said {child_name}. So {child_name} ran to the blocks. Pick up one. Pick up two. Then {child_name} saw the hole.

"Oh! The hole first!" {child_name} ran to the hole. Dig, dig, dig. But then {child_name} looked back. The blocks still lay there.

"No! The blocks!" Back to the blocks. But wait — the {object_motif} was still dirty. {child_name} picked it up. Then saw the hole again.

{child_name} felt so cross. Nothing was done. Everything was half-done. {child_name} sat down and wanted to cry.

Then {companion_name} came close. {companion_name} sat down too.

"Three things," said {companion_name}. "But you want to do all three at once. That is too many. Work through one problem at a time."

{child_name} looked up. "One at a time?"

"Yes," said {companion_name}. "Pick one thing. Do it all the way done. Then pick the next. One at a time is how big jobs get small."

{child_name} took a slow breath. {child_name} pointed at the blocks.

"This one first," said {child_name}.

So {child_name} picked up every single block. One. Two. Three. Four. Five. All of them. Done. The blocks were all clean and neat.

{child_name} looked up. {child_name} smiled. One thing was finished!

"Good work," said {companion_name}. "Now the next."

{child_name} went to the hole. Soft dirt. Pat, pat, pat. The hole was filled. Another thing done.

Then {child_name} cleaned the {object_motif}. Rub, rub, rub. Clean and bright.

All done. Everything done. {child_name} felt so good.

{child_name} gave a big, happy yawn. The night was soft and still.

"You worked through one problem at a time," said {companion_name}. "And now it is all done."

{child_name} held the {object_motif} close. The moon rose soft and gold over {setting}.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} lived in {setting} and had a pile of small troubles, all waiting at once. Three tangled things sat by the door: the {object_motif} needed mending, the path had stones that needed sorting, and the corner room had not been swept in days.

The {hero} looked at all three and felt the weight of them — not heavy exactly, just... much. All at once.

"I will fix them all today," the {hero} decided, and dashed to the corner room. Sweep, sweep, sweep. But then the {hero} looked at the {object_motif} and remembered — that was urgent too. So the {hero} dropped the broom and ran to the mending.

Stitch, stitch, stitch — halfway through a seam, the {hero} glanced out and thought of the stones. Were they still scattered? Yes. The {hero} set down the needle and went to sort the stones. One pile for big. One for small.

Halfway through the sorting, the {hero} realized the room was still unswept. Back to sweep again. Then back to stitch again. Then the mind wandered to the stones. The {hero} felt the knot tightening in their chest.

An hour had passed. Three things had been begun. Zero had been finished. The {hero} sat down in the middle of the mess and felt something between tired and cross.

{companion_name} arrived and took in the scene — a half-swept room, an unfinished seam, and scattered stones everywhere.

"You have three problems," {companion_name} said gently. "But your mind is trying to solve all three at once. No wonder it is confused."

The {hero} looked up. "What should I do?"

"Work through one problem at a time," said {companion_name}. "Pick one. Do it all the way through, start to finish. Then pick the next. Then the last. One at a time, big jobs become small."

The {hero} felt something settle. One at a time. That felt possible.

The {hero} pointed to the room. "This one first."

So the {hero} swept the corner room. Carefully, thoroughly, every corner clean. The broom never left the hand. Sweep until done. The room gleamed.

"Done," said {companion_name}. "Now the next."

The {hero} picked up the {object_motif} and stitched the seam from beginning to end. Every stitch neat, the whole mending finished. The {object_motif} was whole again.

"One more," said {companion_name}.

The {hero} sorted the stones without distraction. Each one placed in the right pile. All sorted, all organized. Finished.

Three things. Three times done.

The {hero} looked around at the clean room, the mended {object_motif}, the ordered stones, and felt something untangle inside.

"Work through one problem at a time," the {hero} said softly. "That is how it all gets done."

Over {setting}, the light was turning slow and low. The {hero} sat with the {object_motif} close, and the tired feeling had changed to peaceful. Ready for sleep now, knowing the work was behind, not piling up ahead.

{refrain}.`,
    scriptTemplate: `{child_name} lived in {setting} and had a pile of small troubles, all waiting at once. Three tangled things sat by the door: the {object_motif} needed mending, the path had stones that needed sorting, and the corner room had not been swept in days.

{child_name} looked at all three and felt the weight of them — not heavy exactly, just... much. All at once.

"I will fix them all today," {child_name} decided, and dashed to the corner room. Sweep, sweep, sweep. But then {child_name} looked at the {object_motif} and remembered — that was urgent too. So {child_name} dropped the broom and ran to the mending.

Stitch, stitch, stitch — halfway through a seam, {child_name} glanced out and thought of the stones. Were they still scattered? Yes. {child_name} set down the needle and went to sort the stones. One pile for big. One for small.

Halfway through the sorting, {child_name} realized the room was still unswept. Back to sweep again. Then back to stitch again. Then the mind wandered to the stones. {child_name} felt the knot tightening in their chest.

An hour had passed. Three things had been begun. Zero had been finished. {child_name} sat down in the middle of the mess and felt something between tired and cross.

{companion_name} arrived and took in the scene — a half-swept room, an unfinished seam, and scattered stones everywhere.

"You have three problems," {companion_name} said gently. "But your mind is trying to solve all three at once. No wonder it is confused."

{child_name} looked up. "What should I do?"

"Work through one problem at a time," said {companion_name}. "Pick one. Do it all the way through, start to finish. Then pick the next. Then the last. One at a time, big jobs become small."

{child_name} felt something settle. One at a time. That felt possible.

{child_name} pointed to the room. "This one first."

So {child_name} swept the corner room. Carefully, thoroughly, every corner clean. The broom never left the hand. Sweep until done. The room gleamed.

"Done," said {companion_name}. "Now the next."

{child_name} picked up the {object_motif} and stitched the seam from beginning to end. Every stitch neat, the whole mending finished. The {object_motif} was whole again.

"One more," said {companion_name}.

{child_name} sorted the stones without distraction. Each one placed in the right pile. All sorted, all organized. Finished.

Three things. Three times done.

{child_name} looked around at the clean room, the mended {object_motif}, the ordered stones, and felt something untangle inside.

"Work through one problem at a time," {child_name} said softly. "That is how it all gets done."

Over {setting}, the light was turning slow and low. {child_name} sat with the {object_motif} close, and the tired feeling had changed to peaceful. Ready for sleep now, knowing the work was behind, not piling up ahead.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} woke to a quiet morning in {setting} with a growing weight in their chest. Three tasks sat waiting, all urgent, all demanding attention at once: the broken fence needed mending, the overgrown garden needed clearing, and the {object_motif} needed careful repair before it could be worn again.

The {hero} looked from one to the other, trying to imagine how to hold all three in mind, and felt the beginning of that familiar rushing panic.

"I'll start with the fence," the {hero} decided, and went to gather tools. For twenty minutes, the {hero} worked hard, patching boards, driving nails. Then a thought arrived: the garden patch would die if not cleared today. Halfway through a nail, the {hero} stopped, set down the hammer, and ran to the garden to pull weeds.

Thirty minutes of pulling, uprooting, shaking soil from roots. Then the thought: the {object_motif}. The work wouldn't keep. The {hero} left the garden half-cleared, dropped the weeds, and retrieved the {object_motif} to begin stitching a torn seam.

By midday, nothing was finished. The fence had nails sticking out of boards with no boards finished. The garden was weeds on one side and wild on the other. The {object_motif} had one seam started and one seam still broken. The {hero} sat in the middle of this chaos, chest tight, unable to focus because every unfinished thing was pulling at their attention.

{companion_name} found the {hero} there and sat down quietly.

"Three problems," {companion_name} said. "But a mind can only truly hold and solve one at a time. When you try all three together, each one pulls you away from the other two, and nothing gets finished."

"So what do I do?" the {hero} asked, feeling helpless.

"Work through one problem at a time," said {companion_name}. "Choose the one that matters most. Do it all the way through, completely, before you touch the next. One at a time is how big overwhelm becomes small capability."

The {hero} felt something quiet land in their chest. One at a time. That was possible.

"The fence first," the {hero} decided. "I'll finish every single board."

So the {hero} went back to the fence and did not leave it. Nail after nail, board after board, each one checked and rechecked. The fence took two hours, but when the {hero} stood back, it was done. Completely done. The {hero} felt a small spark of calm.

"Now the garden," said {companion_name}.

The {hero} went to the wild space and cleared it with focus. Weeds pulled, soil turned, the patch shaped and ready. Done.

"Now the last," {companion_name} said.

The {hero} threaded a needle and stitched every seam, every weak place, every hole. The {object_motif} went from broken to whole. Three hours of work, but it was finished.

Three things. All three done.

The {hero} sat with the {object_motif} held carefully, looking at the mended fence and the cleared garden, feeling something settle in their shoulders. The panic had drained away, leaving only tiredness and a quiet, steady satisfaction.

"Work through one problem at a time," the {hero} said slowly. "That's how it works."

The evening came soft over {setting}, and the {hero} knew now: overwhelm doesn't get solved by trying to do everything. It gets solved by doing one thing, completely, and then moving on to the next.

{refrain}.`,
    scriptTemplate: `{child_name} woke to a quiet morning in {setting} with a growing weight in their chest. Three tasks sat waiting, all urgent, all demanding attention at once: the broken fence needed mending, the overgrown garden needed clearing, and the {object_motif} needed careful repair before it could be worn again.

{child_name} looked from one to the other, trying to imagine how to hold all three in mind, and felt the beginning of that familiar rushing panic.

"I'll start with the fence," {child_name} decided, and went to gather tools. For twenty minutes, {child_name} worked hard, patching boards, driving nails. Then a thought arrived: the garden patch would die if not cleared today. Halfway through a nail, {child_name} stopped, set down the hammer, and ran to the garden to pull weeds.

Thirty minutes of pulling, uprooting, shaking soil from roots. Then the thought: the {object_motif}. The work wouldn't keep. {child_name} left the garden half-cleared, dropped the weeds, and retrieved the {object_motif} to begin stitching a torn seam.

By midday, nothing was finished. The fence had nails sticking out of boards with no boards finished. The garden was weeds on one side and wild on the other. The {object_motif} had one seam started and one seam still broken. {child_name} sat in the middle of this chaos, chest tight, unable to focus because every unfinished thing was pulling at their attention.

{companion_name} found {child_name} there and sat down quietly.

"Three problems," {companion_name} said. "But a mind can only truly hold and solve one at a time. When you try all three together, each one pulls you away from the other two, and nothing gets finished."

"So what do I do?" {child_name} asked, feeling helpless.

"Work through one problem at a time," said {companion_name}. "Choose the one that matters most. Do it all the way through, completely, before you touch the next. One at a time is how big overwhelm becomes small capability."

{child_name} felt something quiet land in their chest. One at a time. That was possible.

"The fence first," {child_name} decided. "I'll finish every single board."

So {child_name} went back to the fence and did not leave it. Nail after nail, board after board, each one checked and rechecked. The fence took two hours, but when {child_name} stood back, it was done. Completely done. {child_name} felt a small spark of calm.

"Now the garden," said {companion_name}.

{child_name} went to the wild space and cleared it with focus. Weeds pulled, soil turned, the patch shaped and ready. Done.

"Now the last," {companion_name} said.

{child_name} threaded a needle and stitched every seam, every weak place, every hole. The {object_motif} went from broken to whole. Three hours of work, but it was finished.

Three things. All three done.

{child_name} sat with the {object_motif} held carefully, looking at the mended fence and the cleared garden, feeling something settle in their shoulders. The panic had drained away, leaving only tiredness and a quiet, steady satisfaction.

"Work through one problem at a time," {child_name} said slowly. "That's how it works."

The evening came soft over {setting}, and {child_name} knew now: overwhelm doesn't get solved by trying to do everything. It gets solved by doing one thing, completely, and then moving on to the next.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There is a particular kind of frustration that arrives only when you are tired, and the {hero} met it that evening at the edge of {setting}, in the last blue hour before dark. The {object_motif} had gotten itself thoroughly stuck. Somehow, in the course of an ordinary day, it had worked its way into the roots of an old fence post — wound in, hooked around, and drawn down into a snarl so tight it looked less like an accident than like something that had been tied on purpose.

The {hero} crouched, took hold, and pulled. This was not a decision so much as a reflex; the hand simply closed and yanked before any part of the {hero} had thought about it. That, it would turn out, was the whole problem in miniature — but the {hero} did not know that yet.

Everyone has a first move — the thing the body does before the mind catches up. The {hero}'s first move, always, was to act: to grab, to fix, to make the trouble go away by sheer effort. Most days it worked well enough. Tonight it was about to cost something.

Nothing gave. Or rather, the wrong thing gave: the tangle drew tighter, gripping down on itself, and one of the strands made a thin, strained sound that the {hero} did not like at all. It was the sound of something close to breaking.

The {hero} pulled again anyway, harder, because pulling was what you did with a stuck thing, and stopping felt like admitting defeat. The knot answered by knotting further. A loop that had been loose a moment ago pinched shut. What had been one snag became a cluster of them, and the more the {hero} fought, the less the {hero} could even tell where the {object_motif} ended and the fence began.

A hot, prickling feeling climbed up the back of the {hero}'s neck. It was not quite anger and not quite worry but a blend of the two, the particular misery of trying hard at something and watching it get worse in your hands. The {hero} thought, quite clearly: I am going to break it. And then, right behind that: and it will be my own fault, because I could not manage one simple knot.

It is a strange, small kind of pressure, the wish to be the sort of person who can simply handle things. No one was even watching, and still the {hero} felt watched — by some imagined audience that kept score of every fumble.

That last thought was the worst of them, and it made the {hero} want to pull harder still, as if enough force could undo the embarrassment along with the tangle.

Some part of the {hero} knew, dimly, that this was not working. But knowing a thing and stopping are two different skills, and the {hero} had practiced the first far more than the second.

"You're about to snap that," came a voice, unhurried and matter-of-fact.

{companion_name} had come up quietly and was standing a little way back, hands folded, making no move to help. The {hero} felt a flash of prickly pride — I can do it myself — and, close underneath it, a small, grateful relief that someone else had arrived.

"It's stuck," the {hero} said, which was obvious, and then, because {companion_name} said nothing, added the truer part: "I've been pulling and pulling and it's just getting worse. I think I'm going to wreck it."

"You might," {companion_name} agreed, which was not the comforting lie the {hero} had half hoped for. "If you keep doing what you're doing, you almost certainly will. So let's not do that." {companion_name} crouched down to the {hero}'s level, but still did not touch the tangle. "Take your hands off it for a second. Sit back. Breathe out — properly, all the way — and then, before you move a single finger, just look."

"Looking won't untie it," the {hero} muttered.

"No," said {companion_name}. "But pulling blind will break it, and you already know that, because you can hear it." A pause. "Every good answer begins with a pause. Your hands have had their turn. Give your eyes a turn now."

It went against everything the {hero} wanted to do, which was to keep moving, keep trying, keep proving. But the strained little sound was still echoing in the {hero}'s ears, and so, reluctantly, the {hero} let go. Sat back on both heels. Breathed out, long and unsteady, until the breath ran all the way to the bottom.

For several breaths nothing happened at all. The evening went on around the {hero} — a faint wind moving through {setting}, the distant, ordinary sounds of the day folding itself away. The urge to grab the {object_motif} again rose up twice, and twice the {hero} let it pass.

And in the quiet that followed — the strange, itchy quiet of doing nothing — something began to happen. The rushing feeling in the {hero}'s chest slowed. The tangle, which a moment ago had been a single furious lump, began to come apart in the {hero}'s mind before a single finger touched it. Not into strands yet. Into questions. Where does this part go? What is holding what? It was the oddest thing — the answer had not required more effort, only less.

The {hero} looked the way you look at a puzzle you actually intend to solve, tracing one strand slowly with the eyes alone, following it from where it began, over the root, under itself, and around — until, quite suddenly, the whole picture turned over and made sense.

It was not stuck in the middle at all. Not really.

The middle, where the {hero} had been hauling with all that force, was only a bystander. The real catch was a single loop, hooked over the splintered top of the old fence post and pulled tighter with every yank the {hero} had given it. All that pulling on the middle had done nothing but drive that one loop harder onto its hook. The {hero} had been fighting the wrong end of the problem the entire time.

It was almost embarrassing how obvious it looked now — but that, the {hero} would think later, was the whole trick of it. Problems did not hide because they were clever. They hid because a person in a hurry never held still long enough to see them plainly.

The relief of it was almost funny. The {hero} let out a breath that was half a laugh. Of course. It had never been a wall; it had been a door, and the {hero} had simply been shoving on the hinges.

This time the {hero} did not pull. The {hero} reached up, lifted the one hooked loop gently off the top of the post — up, and free — and felt the entire snarl release at once, all its false tightness melting the instant the real catch let go. The {object_motif} dropped loose and open into the {hero}'s waiting hands, unharmed, not so much as frayed.

For a moment the {hero} just held it, turning it over, feeling faintly amazed that a thing so impossible thirty seconds ago could now be simply, quietly done.

Nothing about the {object_motif} itself had changed in those last few seconds. The only thing that had changed was the {hero} — the switch from doing to seeing, from force to attention. That, it seemed, had been the entire difference.

"It was only caught in one place," the {hero} said slowly, turning the loop over. "One loop, on one splinter. All that pulling, and it was hanging on by almost nothing." The {hero} shook off the last of the frustration. "I kept fighting the middle. The middle was never even the problem."

{companion_name} nodded slowly, and did not pile a single word of instruction on top of the thing the {hero} had just worked out alone — which was, in its own way, the kindest thing {companion_name} could have done. "There," was all {companion_name} said, as though the whole evening had just been quietly set right.

The {hero} thought about the strained sound the strand had made, how close it had come, and felt a small shiver of luck — not because anything terrible would have happened, but because it would have been such a needless, avoidable shame to break a thing simply for want of a single quiet breath.

The {hero} wound the {object_motif} up carefully, the way you handle something you have nearly lost and gotten back. Over {setting} the sky had deepened from blue to something close to violet, and the first few stars were arriving without any fuss, one at a time. The {hero} was tired in a good way now, the frustration all drained off, leaving something steadier behind — the quiet confidence of a person who has just learned that the biggest, most tangled problems sometimes come undone from one small, patient place, if only you are still enough to find it.

{refrain}.`,
    scriptTemplate: `There is a particular kind of frustration that arrives only when you are tired, and {child_name} met it that evening at the edge of {setting}, in the last blue hour before dark. The {object_motif} had gotten itself thoroughly stuck. Somehow, in the course of an ordinary day, it had worked its way into the roots of an old fence post — wound in, hooked around, and drawn down into a snarl so tight it looked less like an accident than like something that had been tied on purpose.

{child_name} crouched, took hold, and pulled. This was not a decision so much as a reflex; the hand simply closed and yanked before any part of {child_name} had thought about it. That, it would turn out, was the whole problem in miniature — but {child_name} did not know that yet.

Everyone has a first move — the thing the body does before the mind catches up. {child_name's first move, always, was to act: to grab, to fix, to make the trouble go away by sheer effort. Most days it worked well enough. Tonight it was about to cost something.

Nothing gave. Or rather, the wrong thing gave: the tangle drew tighter, gripping down on itself, and one of the strands made a thin, strained sound that {child_name} did not like at all. It was the sound of something close to breaking.

{child_name} pulled again anyway, harder, because pulling was what you did with a stuck thing, and stopping felt like admitting defeat. The knot answered by knotting further. A loop that had been loose a moment ago pinched shut. What had been one snag became a cluster of them, and the more {child_name} fought, the less {child_name} could even tell where the {object_motif} ended and the fence began.

A hot, prickling feeling climbed up the back of {child_name's neck. It was not quite anger and not quite worry but a blend of the two, the particular misery of trying hard at something and watching it get worse in your hands. {child_name} thought, quite clearly: I am going to break it. And then, right behind that: and it will be my own fault, because I could not manage one simple knot.

It is a strange, small kind of pressure, the wish to be the sort of person who can simply handle things. No one was even watching, and still {child_name} felt watched — by some imagined audience that kept score of every fumble.

That last thought was the worst of them, and it made {child_name} want to pull harder still, as if enough force could undo the embarrassment along with the tangle.

Some part of {child_name} knew, dimly, that this was not working. But knowing a thing and stopping are two different skills, and {child_name} had practiced the first far more than the second.

"You're about to snap that," came a voice, unhurried and matter-of-fact.

{companion_name} had come up quietly and was standing a little way back, hands folded, making no move to help. {child_name} felt a flash of prickly pride — I can do it myself — and, close underneath it, a small, grateful relief that someone else had arrived.

"It's stuck," {child_name} said, which was obvious, and then, because {companion_name} said nothing, added the truer part: "I've been pulling and pulling and it's just getting worse. I think I'm going to wreck it."

"You might," {companion_name} agreed, which was not the comforting lie {child_name} had half hoped for. "If you keep doing what you're doing, you almost certainly will. So let's not do that." {companion_name} crouched down to {child_name's level, but still did not touch the tangle. "Take your hands off it for a second. Sit back. Breathe out — properly, all the way — and then, before you move a single finger, just look."

"Looking won't untie it," {child_name} muttered.

"No," said {companion_name}. "But pulling blind will break it, and you already know that, because you can hear it." A pause. "Every good answer begins with a pause. Your hands have had their turn. Give your eyes a turn now."

It went against everything {child_name} wanted to do, which was to keep moving, keep trying, keep proving. But the strained little sound was still echoing in {child_name's ears, and so, reluctantly, {child_name} let go. Sat back on both heels. Breathed out, long and unsteady, until the breath ran all the way to the bottom.

For several breaths nothing happened at all. The evening went on around {child_name — a faint wind moving through {setting}, the distant, ordinary sounds of the day folding itself away. The urge to grab the {object_motif} again rose up twice, and twice {child_name} let it pass.

And in the quiet that followed — the strange, itchy quiet of doing nothing — something began to happen. The rushing feeling in {child_name's chest slowed. The tangle, which a moment ago had been a single furious lump, began to come apart in {child_name's mind before a single finger touched it. Not into strands yet. Into questions. Where does this part go? What is holding what? It was the oddest thing — the answer had not required more effort, only less.

{child_name} looked the way you look at a puzzle you actually intend to solve, tracing one strand slowly with the eyes alone, following it from where it began, over the root, under itself, and around — until, quite suddenly, the whole picture turned over and made sense.

It was not stuck in the middle at all. Not really.

The middle, where {child_name} had been hauling with all that force, was only a bystander. The real catch was a single loop, hooked over the splintered top of the old fence post and pulled tighter with every yank {child_name} had given it. All that pulling on the middle had done nothing but drive that one loop harder onto its hook. {child_name} had been fighting the wrong end of the problem the entire time.

It was almost embarrassing how obvious it looked now — but that, {child_name} would think later, was the whole trick of it. Problems did not hide because they were clever. They hid because a person in a hurry never held still long enough to see them plainly.

The relief of it was almost funny. {child_name} let out a breath that was half a laugh. Of course. It had never been a wall; it had been a door, and {child_name} had simply been shoving on the hinges.

This time {child_name} did not pull. {child_name} reached up, lifted the one hooked loop gently off the top of the post — up, and free — and felt the entire snarl release at once, all its false tightness melting the instant the real catch let go. The {object_motif} dropped loose and open into {child_name's waiting hands, unharmed, not so much as frayed.

For a moment {child_name} just held it, turning it over, feeling faintly amazed that a thing so impossible thirty seconds ago could now be simply, quietly done.

Nothing about the {object_motif} itself had changed in those last few seconds. The only thing that had changed was {child_name — the switch from doing to seeing, from force to attention. That, it seemed, had been the entire difference.

"It was only caught in one place," {child_name} said slowly, turning the loop over. "One loop, on one splinter. All that pulling, and it was hanging on by almost nothing." {child_name} shook off the last of the frustration. "I kept fighting the middle. The middle was never even the problem."

{companion_name} nodded slowly, and did not pile a single word of instruction on top of the thing {child_name} had just worked out alone — which was, in its own way, the kindest thing {companion_name} could have done. "There," was all {companion_name} said, as though the whole evening had just been quietly set right.

{child_name} thought about the strained sound the strand had made, how close it had come, and felt a small shiver of luck — not because anything terrible would have happened, but because it would have been such a needless, avoidable shame to break a thing simply for want of a single quiet breath.

{child_name} wound the {object_motif} up carefully, the way you handle something you have nearly lost and gotten back. Over {setting} the sky had deepened from blue to something close to violet, and the first few stars were arriving without any fuss, one at a time. {child_name} was tired in a good way now, the frustration all drained off, leaving something steadier behind — the quiet confidence of a person who has just learned that the biggest, most tangled problems sometimes come undone from one small, patient place, if only you are still enough to find it.

{refrain}.`
  },
  default: {
    audioTemplate: `The night was still over {setting} when the {hero} came upon a {object_motif} that would not do what they wanted.

The {hero} pushed at it, quick and frustrated. It did not budge.

"Wait," said {companion_name} gently. "Before you push again — stop. Breathe. Look."

So the {hero} stopped. They took one slow breath. And instead of pushing, they simply looked at the {object_motif}, calmly, the way you look at the stars.

And in looking, they saw things they had rushed right past — a shape here, a little catch there. Details that had been invisible while they hurried.

"I did not even see those before," said the {hero}.

"That is what stopping is for," said {companion_name}. "A calm look shows you what a quick reaction hides. Every good answer begins with a pause."

The {hero} kept looking, unhurried, and the puzzle no longer felt quite so impossible.

{refrain}.`,
    scriptTemplate: `The night was still over {setting} when {child_name} came upon a {object_motif} that would not do what they wanted.

{child_name} pushed at it, quick and frustrated. It did not budge.

"Wait," said {companion_name} gently. "Before you push again — stop. Breathe. Look."

So {child_name} stopped. Took one slow breath. And instead of pushing, simply looked at the {object_motif}, calmly, the way you look at the stars.

And in looking, {child_name} saw things they had rushed right past — a shape here, a little catch there. Details that had been invisible while they hurried.

"I did not even see those before," said {child_name}.

"That is what stopping is for," said {companion_name}. "A calm look shows you what a quick reaction hides. Every good answer begins with a pause."

{child_name} kept looking, unhurried, and the puzzle no longer felt quite so impossible.

{refrain}.`
  }
}
,

  {
    ordinal: 2, title: 'Different Ways to Solve',
    concept: 'Different ways to solve the same problem', callback: 'think before you act', ageFloor: 4,
    summary: 'The hero tries one way to solve something, fails, and feels stuck. The companion teaches the first tool — think before you act — and shows that different approaches exist. The hero tries another way and succeeds.',
    teachingNote: 'Learning to pause and consider alternatives transforms a stuck moment into discovery. One way is not the only way.',
    learningBeat: 'Different ways work',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} lived in {setting} and wanted to reach the high shelf. There was something special up there. The {object_motif} sat on that shelf, waiting.

"I can reach it," said the {hero}. "I will just pull."

So the {hero} pulled and pulled. But the {object_motif} was too high. The {hero} was too short.

The {hero} tried again. Pull, pull, pull. Nothing. The {object_motif} did not come down.

The {hero} felt stuck. The {object_motif} sat there, high and out of reach. "I can't do this," said the {hero}. "It is too high."

Then {companion_name} came over.

"You tried pulling," said {companion_name}. "That did not work. But many ways exist. Before you try again, stop. Think. What else could you do?"

The {hero} stopped. The {hero} thought.

"A stool!" said the {hero}. "I could stand on a stool and reach it."

"Yes," said {companion_name}. "Or blocks. Or a chair. Many ways work."

So the {hero} got a stool. The {hero} climbed up, up, up. And reached. And gently took the {object_motif}.

The {object_motif} came down. It was in the {hero}'s hands.

"I did it!" said the {hero}. "Not by pulling. But by thinking of a different way!"

The {hero} held the {object_motif} close and felt so good.

The {hero} gave a big yawn. The {hero} was sleepy and happy.

{companion_name} smiled. "You thought before you acted. Different ways work. And you found the one that fit."

The {hero} held the {object_motif} close. Over {setting}, the stars came out, soft and slow.

"Rest now," said {companion_name}. "You solved it your way."

{refrain}.`,
    scriptTemplate: `{child_name} lived in {setting} and wanted to reach the high shelf. There was something special up there. The {object_motif} sat on that shelf, waiting.

"I can reach it," said {child_name}. "I will just pull."

So {child_name} pulled and pulled. But the {object_motif} was too high. {child_name} was too short.

{child_name} tried again. Pull, pull, pull. Nothing. The {object_motif} did not come down.

{child_name} felt stuck. The {object_motif} sat there, high and out of reach. "I can't do this," said {child_name. "It is too high."

Then {companion_name} came over.

"You tried pulling," said {companion_name}. "That did not work. But many ways exist. Before you try again, stop. Think. What else could you do?"

{child_name} stopped. {child_name} thought.

"A stool!" said {child_name. "I could stand on a stool and reach it."

"Yes," said {companion_name}. "Or blocks. Or a chair. Many ways work."

So {child_name} got a stool. {child_name} climbed up, up, up. And reached. And gently took the {object_motif}.

The {object_motif} came down. It was in {child_name's hands.

"I did it!" said {child_name. "Not by pulling. But by thinking of a different way!"

{child_name} held the {object_motif} close and felt so good.

{child_name} gave a big yawn. {child_name} was sleepy and happy.

{companion_name} smiled. "You thought before you acted. Different ways work. And you found the one that fit."

{child_name} held the {object_motif} close. Over {setting}, the stars came out, soft and slow.

"Rest now," said {companion_name}. "You solved it your way."

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} sat at the edge of {setting} with a pile of wood blocks, trying to build a bridge across a small stream. The water ran between two banks, and on the far side sat the {object_motif}, waiting to be brought home before dark.

The {hero} picked up the first block and reached out, leaning over the water. Push the block toward the opposite bank. Stretch. Strain. But the block was too short; it reached only halfway across.

The {hero} tried again with a longer block. Reach. Push. Strain. But still not far enough. The water was too wide, and the {hero}'s arms had a limit.

"It won't work," the {hero} said, looking at the remaining blocks. None of them were long enough. None of them would span the water alone.

But then the {hero} stopped. There was another way to think about this, if they took a moment to imagine it.

{companion_name} appeared on the bank, watching the scattered blocks and the river.

"You tried to cross it with one big jump," {companion_name} said. "What if you thought before you reached?"

The {hero} sat back and looked at the water. At the blocks. At the distance.

"I could lay them one at a time," the {hero} said slowly. "Like stepping stones."

"Different ways work," said {companion_name}. "Sometimes one block is not enough. But many blocks, placed one after another, make a path."

The {hero} placed the first block close to the bank. Then the next, a stride away. Then another. One by one, across the water, each block waiting for the one before it. A path appeared, block by patient block.

The {hero} walked across, steady and slow, stepping from one block to the next. And on the other side, the {object_motif} was waiting.

The {hero} picked it up, turned around, and walked home by the same careful path. The water still ran beneath, but now there was a way across.

As the evening came soft over {setting}, the {hero} sat with the {object_motif} close, thinking about all the ways a river could be crossed.

"You thought before you acted," said {companion_name}. "And different ways work. That's how you learn."

The {hero} yawned. Sleep was coming. "Tomorrow, a different problem," the {hero} murmured. "And tomorrow, I'll think first."

{refrain}.`,
    scriptTemplate: `{child_name} sat at the edge of {setting} with a pile of wood blocks, trying to build a bridge across a small stream. The water ran between two banks, and on the far side sat the {object_motif}, waiting to be brought home before dark.

{child_name} picked up the first block and reached out, leaning over the water. Push the block toward the opposite bank. Stretch. Strain. But the block was too short; it reached only halfway across.

{child_name} tried again with a longer block. Reach. Push. Strain. But still not far enough. The water was too wide, and {child_name's arms had a limit.

"It won't work," {child_name} said, looking at the remaining blocks. None of them were long enough. None of them would span the water alone.

But then {child_name} stopped. There was another way to think about this, if they took a moment to imagine it.

{companion_name} appeared on the bank, watching the scattered blocks and the river.

"You tried to cross it with one big jump," {companion_name} said. "What if you thought before you reached?"

{child_name} sat back and looked at the water. At the blocks. At the distance.

"I could lay them one at a time," {child_name} said slowly. "Like stepping stones."

"Different ways work," said {companion_name}. "Sometimes one block is not enough. But many blocks, placed one after another, make a path."

{child_name} placed the first block close to the bank. Then the next, a stride away. Then another. One by one, across the water, each block waiting for the one before it. A path appeared, block by patient block.

{child_name} walked across, steady and slow, stepping from one block to the next. And on the other side, the {object_motif} was waiting.

{child_name} picked it up, turned around, and walked home by the same careful path. The water still ran beneath, but now there was a way across.

As the evening came soft over {setting}, {child_name} sat with the {object_motif} close, thinking about all the ways a river could be crossed.

"You thought before you acted," said {companion_name}. "And different ways work. That's how you learn."

{child_name} yawned. Sleep was coming. "Tomorrow, a different problem," {child_name} murmured. "And tomorrow, I'll think first."

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} stood before a knotted cord, trying to thread it through a hole in the {object_motif}. The hole was small and precisely shaped, and the knot was stubborn. For ten minutes the {hero} had been trying to force the knot through by pulling and twisting.

It was not working. Every attempt made the knot tighter, the cord more tangled, the hole no closer to accepting it.

The {hero} felt the familiar surge of frustration — the sense that persistence should matter, that trying hard should eventually work. But it was not working.

"I can't do this," the {hero} said finally, slumping back. "The knot's too big, the hole's too small."

{companion_name} came over and looked at the knotted cord without touching it.

"You tried to force the knot through," {companion_name} said. "That didn't work. But before you keep trying, think. What if you considered it differently?"

The {hero} looked at the cord, the hole, the stubborn knot.

"I could untie the knot first," the {hero} said, the thought arriving slowly. "Thread the plain cord through. Then tie the knot on the other side."

{companion_name} smiled. "Different ways work. Sometimes the direct path isn't the only path."

The {hero} untied the knot carefully. Then, with the cord straight and smooth, threaded it easily through the hole. On the other side, the {hero} tied it again, and the {object_motif} hung perfectly, the cord secure.

"It took me longer to realize there was another way," the {hero} said, "than it took to actually do it."

"That's often how it is," said {companion_name}. "But now you know: before you pull harder, stop and think. Different ways work."

As the light faded over {setting}, the {hero} turned the {object_motif} over in their hands, feeling the satisfaction not of force, but of a problem solved with sense.

{refrain}.`,
    scriptTemplate: `{child_name} stood before a knotted cord, trying to thread it through a hole in the {object_motif}. The hole was small and precisely shaped, and the knot was stubborn. For ten minutes {child_name} had been trying to force the knot through by pulling and twisting.

It was not working. Every attempt made the knot tighter, the cord more tangled, the hole no closer to accepting it.

{child_name} felt the familiar surge of frustration — the sense that persistence should matter, that trying hard should eventually work. But it was not working.

"I can't do this," {child_name} said finally, slumping back. "The knot's too big, the hole's too small."

{companion_name} came over and looked at the knotted cord without touching it.

"You tried to force the knot through," {companion_name} said. "That didn't work. But before you keep trying, think. What if you considered it differently?"

{child_name} looked at the cord, the hole, the stubborn knot.

"I could untie the knot first," {child_name} said, the thought arriving slowly. "Thread the plain cord through. Then tie the knot on the other side."

{companion_name} smiled. "Different ways work. Sometimes the direct path isn't the only path."

{child_name} untied the knot carefully. Then, with the cord straight and smooth, threaded it easily through the hole. On the other side, {child_name} tied it again, and the {object_motif} hung perfectly, the cord secure.

"It took me longer to realize there was another way," {child_name} said, "than it took to actually do it."

"That's often how it is," said {companion_name}. "But now you know: before you pull harder, stop and think. Different ways work."

As the light faded over {setting}, {child_name} turned the {object_motif} over in their hands, feeling the satisfaction not of force, but of a problem solved with sense.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} faced a problem that seemed straightforward at first: move the {object_motif} from one side of the stream to the other, without getting it wet. The water ran fast and cold, and there was no bridge visible.

The {hero}'s first instinct was to wade straight across. So they took off their shoes and stepped in. But the current was stronger than it looked, and halfway across, the {hero} realized the {object_motif} was slipping, the water rising toward it.

They scrambled back, soaked below the waist, clutching the {object_motif} and breathing hard.

"No," said the {hero}. "That won't work."

They sat on the bank, thinking. There had to be a way. There had to be more than one way.

{companion_name} found them there, dripping and frustrated.

"You tried to cross straight through," {companion_name} said. "Before you try again, think. What else could you do?"

The {hero} sat with that question, not rushing to answer. What else? They looked upstream and downstream, looked at the banks on both sides, looked at the {object_motif}, looked at what they had available.

"I could find a shallower place," the {hero} said slowly. "Upstream or downstream. Where the current is weaker."

"Different ways work," {companion_name} agreed. "Straight ahead is only one possibility."

The {hero} walked upstream, moving carefully, and found a spot where the water ran thin and gentle over smooth stones. Here, they could cross easily, the {object_motif} held high and safe. They crossed, then turned back to look at the path they'd taken.

It had taken longer to find this way than to try the direct one. But it had worked without struggle, without risk, without soaking. That was a different kind of success — quieter, but solid.

"I spent so long assuming straight was the only way," the {hero} mused, "that I never thought to look sideways."

"That's how it goes," said {companion_name}. "Most problems have more than one answer. Learning to think before you act — to ask what else might work — that's the whole point."

As evening settled over {setting}, the {hero} carried the {object_motif} home along the drier path, knowing now that the first attempt was not always the final one.

{refrain}.`,
    scriptTemplate: `{child_name} faced a problem that seemed straightforward at first: move the {object_motif} from one side of the stream to the other, without getting it wet. The water ran fast and cold, and there was no bridge visible.

{child_name's first instinct was to wade straight across. So they took off their shoes and stepped in. But the current was stronger than it looked, and halfway across, {child_name} realized the {object_motif} was slipping, the water rising toward it.

They scrambled back, soaked below the waist, clutching the {object_motif} and breathing hard.

"No," said {child_name. "That won't work."

They sat on the bank, thinking. There had to be a way. There had to be more than one way.

{companion_name} found them there, dripping and frustrated.

"You tried to cross straight through," {companion_name} said. "Before you try again, think. What else could you do?"

{child_name} sat with that question, not rushing to answer. What else? They looked upstream and downstream, looked at the banks on both sides, looked at the {object_motif}, looked at what they had available.

"I could find a shallower place," {child_name} said slowly. "Upstream or downstream. Where the current is weaker."

"Different ways work," {companion_name} agreed. "Straight ahead is only one possibility."

{child_name} walked upstream, moving carefully, and found a spot where the water ran thin and gentle over smooth stones. Here, they could cross easily, the {object_motif} held high and safe. They crossed, then turned back to look at the path they'd taken.

It had taken longer to find this way than to try the direct one. But it had worked without struggle, without risk, without soaking. That was a different kind of success — quieter, but solid.

"I spent so long assuming straight was the only way," {child_name} mused, "that I never thought to look sideways."

"That's how it goes," said {companion_name}. "Most problems have more than one answer. Learning to think before you act — to ask what else might work — that's the whole point."

As evening settled over {setting}, {child_name} carried the {object_motif} home along the drier path, knowing now that the first attempt was not always the final one.

{refrain}.`
  },
  default: {
    audioTemplate: `The {hero} wanted to climb a tall tree in {setting} to reach something precious. The {object_motif} was waiting at the top.

First, they tried jumping. Jump, jump, jump. The tree was too tall.

Then they tried pushing with a stick. Push, push, push. That didn't work either.

They sat down, tired, and thought: what else could they try?

"Different ways work," they said to themselves. "What if I think?"

They looked at the tree. Found a low branch. Pulled themselves up. Then reached the next branch. Then the next.

Slowly, branch by branch, they climbed. Not jumping. Not pushing. Climbing.

At the top, the {object_motif} was waiting.

{companion_name} watched them climb. "You thought before you acted. And found the way that fit."

The {hero} held the {object_motif}, happy and calm, as the stars came out over {setting}.

{refrain}.`,
    scriptTemplate: `{child_name} wanted to climb a tall tree in {setting} to reach something precious. The {object_motif} was waiting at the top.

First, they tried jumping. Jump, jump, jump. The tree was too tall.

Then they tried pushing with a stick. Push, push, push. That didn't work either.

They sat down, tired, and thought: what else could they try?

"Different ways work," they said to themselves. "What if I think?"

They looked at the tree. Found a low branch. Pulled themselves up. Then reached the next branch. Then the next.

Slowly, branch by branch, they climbed. Not jumping. Not pushing. Climbing.

At the top, the {object_motif} was waiting.

{companion_name} watched them climb. "You thought before you acted. And found the way that fit."

{child_name} held the {object_motif}, happy and calm, as the stars came out over {setting}.

{refrain}.`
  }
}
,

  {
    ordinal: 3, title: 'Inside and Outside',
    concept: 'Problems are puzzles with inside-and-outside pieces', callback: 'think before you act + ask for help', ageFloor: 4,
    summary: 'A problem shows a visible symptom (outside), but the real cause (inside) stays hidden. The hero learns to ask for help to see both pieces. Builds on Level 2: now with more complex cause-and-effect.',
    teachingNote: 'Problems have two parts: what you see, and what you need to find. Asking for help reveals the inside piece.',
    learningBeat: 'Problems have inside and outside pieces',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} woke up and the {object_motif} would not sing. It used to sing when you touched it. Now: silence.

The {hero} shook it. No song.

The {hero} turned it over. Maybe the song was hiding on the bottom?

No song.

The {hero} felt sad. The {object_motif} was broken.

{companion_name} came over. "It won't sing?" they asked.

"No," said the {hero}. "It's broken."

{companion_name} asked to see. They held it, turned it, and listened.

"Can I open it?" asked {companion_name}.

"It might break more," said the {hero}.

"Or," said {companion_name}, "we might find out why."

So {companion_name} carefully opened the {object_motif}. Inside, a tiny thing was stuck. One small piece of dirt. That was all.

"The song is still here," said {companion_name}. "But something inside was in the way."

{companion_name} cleaned out the dirt, very gently.

Then the {hero} touched the {object_motif}.

The song came back! Soft and sweet and real.

The {hero} held it close and felt so happy.

"The outside said: broken," said {companion_name}. "But the inside was just... stuck."

{refrain}.`,
    scriptTemplate: `{child_name} woke up and the {object_motif} would not sing. It used to sing when you touched it. Now: silence.

{child_name} shook it. No song.

{child_name} turned it over. Maybe the song was hiding on the bottom?

No song.

{child_name} felt sad. The {object_motif} was broken.

{companion_name} came over. "It won't sing?" they asked.

"No," said {child_name. "It's broken."

{companion_name} asked to see. They held it, turned it, and listened.

"Can I open it?" asked {companion_name}.

"It might break more," said {child_name.

"Or," said {companion_name}, "we might find out why."

So {companion_name} carefully opened the {object_motif}. Inside, a tiny thing was stuck. One small piece of dirt. That was all.

"The song is still here," said {companion_name}. "But something inside was in the way."

{companion_name} cleaned out the dirt, very gently.

Then {child_name} touched the {object_motif}.

The song came back! Soft and sweet and real.

{child_name} held it close and felt so happy.

"The outside said: broken," said {companion_name}. "But the inside was just... stuck."

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero}'s garden was wilting. For three days the seedlings had drooped lower, their leaves turning pale, looking for water that wasn't coming. The {object_motif} hung on the fence nearby, a reminder of better days.

The {hero} had watered the garden every morning. Careful. Thorough. But the plants kept drooping.

"The garden won't drink," the {hero} said to {companion_name}, who had come to look. "I give it water and it still dies. Maybe the seeds were bad."

But {companion_name} knelt in the dirt, dug their fingers down, and felt the soil underneath the top layer. It was hard. Baked. Like stone.

"Feel this," {companion_name} said.

The {hero} felt. Hard. Dry. Deep down.

"When was the last rain?" asked {companion_name}.

The {hero} thought. "Two weeks."

"So the water you give reaches the top," {companion_name} said, "but can't reach deep enough. The roots are dying of thirst down there, even while you water up here. That's the inside problem. The outside problem is drooping leaves. But they're not the same thing."

The {hero} looked at the wilting plants again. Now understanding. The outside said one thing. But underneath, another truth.

"What can we do?" asked the {hero}.

"Soak it," said {companion_name}. "Deep. Let the water reach down where the roots are waiting."

So they brought a bucket. They poured, slowly, and let it soak. They poured again. Waiting. Soaking. Letting the hard ground slowly, gradually, open and drink.

The next morning, the plants had lifted their heads. Not healthy yet. But reaching. Alive.

"I was solving the wrong problem," the {hero} said. "I thought: drooping plants need water. But the real problem was: water wasn't reaching the roots."

"Problems have two parts," said {companion_name}. "What you see on the outside, and what's actually happening inside. Sometimes they're different."

The {hero} held the {object_motif}, watching the garden slowly green again.

{refrain}.`,
    scriptTemplate: `{child_name's garden was wilting. For three days the seedlings had drooped lower, their leaves turning pale, looking for water that wasn't coming. The {object_motif} hung on the fence nearby, a reminder of better days.

{child_name} had watered the garden every morning. Careful. Thorough. But the plants kept drooping.

"The garden won't drink," {child_name} said to {companion_name}, who had come to look. "I give it water and it still dies. Maybe the seeds were bad."

But {companion_name} knelt in the dirt, dug their fingers down, and felt the soil underneath the top layer. It was hard. Baked. Like stone.

"Feel this," {companion_name} said.

{child_name} felt. Hard. Dry. Deep down.

"When was the last rain?" asked {companion_name}.

{child_name} thought. "Two weeks."

"So the water you give reaches the top," {companion_name} said, "but can't reach deep enough. The roots are dying of thirst down there, even while you water up here. That's the inside problem. The outside problem is drooping leaves. But they're not the same thing."

{child_name} looked at the wilting plants again. Now understanding. The outside said one thing. But underneath, another truth.

"What can we do?" asked {child_name.

"Soak it," said {companion_name}. "Deep. Let the water reach down where the roots are waiting."

So they brought a bucket. They poured, slowly, and let it soak. They poured again. Waiting. Soaking. Letting the hard ground slowly, gradually, open and drink.

The next morning, the plants had lifted their heads. Not healthy yet. But reaching. Alive.

"I was solving the wrong problem," {child_name} said. "I thought: drooping plants need water. But the real problem was: water wasn't reaching the roots."

"Problems have two parts," said {companion_name}. "What you see on the outside, and what's actually happening inside. Sometimes they're different."

{child_name} held the {object_motif}, watching the garden slowly green again.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} couldn't sleep. For four nights, sleep had eluded them, and each morning brought a heavier tiredness. They felt caught between exhaustion and wakefulness, stuck in the space where rest should be but wasn't.

"I'm broken," the {hero} said to {companion_name}. "I can't sleep anymore."

{companion_name} listened, then asked questions the {hero} hadn't considered. "When did it start? What was happening then? What changed?"

The {hero} thought back. Four nights ago. That's when the puppy had come — the one staying in a box by the window. Every hour it cried. Every movement startled them awake.

"But I'm used to the noise by now," the {hero} said. "I shouldn't still be waking."

"The outside problem is your waking," said {companion_name}. "But the inside problem might be the puppy's box is right by your head. You've habituated to the noise, but not to the disturbance."

"What do I do?" asked the {hero}.

{companion_name} smiled. "What if the puppy box was further away?"

The {hero} had never thought to move it. They had accepted the noise and assumed themselves broken instead.

That night, they moved the box to the far corner. The puppy still cried, but softer, further, less of a jolt to the sleeping mind.

The {hero} slept through until morning.

"The problem wasn't me," the {hero} realized. "It was the situation. I was trying to solve it by fixing myself, but I needed to fix what was around me."

"Problems have two parts," {companion_name} said. "What you see — can't sleep — and what's really happening — environment is waking you. Sometimes the answer isn't to change yourself. It's to change what's around you."

The {hero} held the {object_motif} and slept deeply, understanding now that asking for help to see the inside problem had mattered more than struggling alone with only the outside view.

{refrain}.`,
    scriptTemplate: `{child_name} couldn't sleep. For four nights, sleep had eluded them, and each morning brought a heavier tiredness. They felt caught between exhaustion and wakefulness, stuck in the space where rest should be but wasn't.

"I'm broken," {child_name} said to {companion_name}. "I can't sleep anymore."

{companion_name} listened, then asked questions {child_name} hadn't considered. "When did it start? What was happening then? What changed?"

{child_name} thought back. Four nights ago. That's when the puppy had come — the one staying in a box by the window. Every hour it cried. Every movement startled them awake.

"But I'm used to the noise by now," {child_name} said. "I shouldn't still be waking."

"The outside problem is your waking," said {companion_name}. "But the inside problem might be the puppy's box is right by your head. You've habituated to the noise, but not to the disturbance."

"What do I do?" asked {child_name.

{companion_name} smiled. "What if the puppy box was further away?"

{child_name} had never thought to move it. They had accepted the noise and assumed themselves broken instead.

That night, they moved the box to the far corner. The puppy still cried, but softer, further, less of a jolt to the sleeping mind.

{child_name} slept through until morning.

"The problem wasn't me," {child_name} realized. "It was the situation. I was trying to solve it by fixing myself, but I needed to fix what was around me."

"Problems have two parts," said {companion_name}. "What you see — can't sleep — and what's really happening — environment is waking you. Sometimes the answer isn't to change yourself. It's to change what's around you."

{child_name} held the {object_motif} and slept deeply, understanding now that asking for help to see the inside problem had mattered more than struggling alone with only the outside view.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} had been sick for a week — not dangerously, but enough to keep them in bed, weak and frustrated. The fever had broken. The worst symptoms had passed. But still, they couldn't seem to recover their energy. Sitting up for an hour left them exhausted. Walking to the window drained them completely.

"Something's wrong with me," the {hero} said to {companion_name}, who brought soup. "I should be better by now. Why am I still so weak?"

{companion_name} sat on the edge of the bed, listening not just to words but to what lay underneath them — the frustration of visible recovery that wasn't matching internal readiness.

"When did you last eat?" {companion_name} asked. "Really eat. Not just soup."

The {hero} couldn't remember.

"And before you got sick, how much were you sleeping?"

Again, the {hero} couldn't say. Work had been heavy.

"Tell me about the week before you got sick," {companion_name} said.

As the {hero} talked, a picture emerged: exhaustion running deep even before the illness. A body already depleted. The fever was the outside problem — the visible sign. But the inside problem was deeper depletion, the body asking not for recovery but for genuine rest.

"Your body is still sick," {companion_name} said gently. "But not with fever. With tiredness. Real, deep tiredness. The fever was a symptom of that."

"So I need to just... rest more?" the {hero} asked. It seemed too simple.

"You need to truly rest," said {companion_name}. "Not just recover from the fever, but recover what the fever took. Rest, eat enough, sleep long. Your weakness isn't a sign of lingering illness. It's a sign you need to actually listen to your body."

Over the next days, the {hero} stopped pushing. Let sleep take them when it came. Ate properly. Sat in the sun. Did nothing that felt like progress.

And slowly, strength returned — not the hurried recovery the {hero} had wanted, but the real renewal that came from understanding the inside problem, not just treating the outside one.

"I was so focused on getting back to normal," the {hero} mused, "that I missed what my body was actually asking for."

"That's why problems have two parts," said {companion_name}. "The symptom you see, and the cause underneath. Asking for help means someone can point out what you're missing."

The {hero} held the {object_motif}, feeling genuinely rested now, knowing that the deeper the understanding, the truer the solution.

{refrain}.`,
    scriptTemplate: `{child_name} had been sick for a week — not dangerously, but enough to keep them in bed, weak and frustrated. The fever had broken. The worst symptoms had passed. But still, they couldn't seem to recover their energy. Sitting up for an hour left them exhausted. Walking to the window drained them completely.

"Something's wrong with me," {child_name} said to {companion_name}, who brought soup. "I should be better by now. Why am I still so weak?"

{companion_name} sat on the edge of the bed, listening not just to words but to what lay underneath them — the frustration of visible recovery that wasn't matching internal readiness.

"When did you last eat?" {companion_name} asked. "Really eat. Not just soup."

{child_name} couldn't remember.

"And before you got sick, how much were you sleeping?"

Again, {child_name} couldn't say. Work had been heavy.

"Tell me about the week before you got sick," {companion_name} said.

As {child_name} talked, a picture emerged: exhaustion running deep even before the illness. A body already depleted. The fever was the outside problem — the visible sign. But the inside problem was deeper depletion, the body asking not for recovery but for genuine rest.

"Your body is still sick," {companion_name} said gently. "But not with fever. With tiredness. Real, deep tiredness. The fever was a symptom of that."

"So I need to just... rest more?" {child_name} asked. It seemed too simple.

"You need to truly rest," said {companion_name}. "Not just recover from the fever, but recover what the fever took. Rest, eat enough, sleep long. Your weakness isn't a sign of lingering illness. It's a sign you need to actually listen to your body."

Over the next days, {child_name} stopped pushing. Let sleep take them when it came. Ate properly. Sat in the sun. Did nothing that felt like progress.

And slowly, strength returned — not the hurried recovery {child_name} had wanted, but the real renewal that came from understanding the inside problem, not just treating the outside one.

"I was so focused on getting back to normal," {child_name} mused, "that I missed what my body was actually asking for."

"That's why problems have two parts," said {companion_name}. "The symptom you see, and the cause underneath. Asking for help means someone can point out what you're missing."

{child_name} held the {object_motif}, feeling genuinely rested now, knowing that the deeper the understanding, the truer the solution.

{refrain}.`
  },
  default: {
    audioTemplate: `A lock on the door wouldn't open. The {hero} pushed the key. Nothing.

The {hero} pushed harder. Still nothing.

{companion_name} came over. "Let me look."

They looked at the lock. Inside, hidden, the {hero} could not see: the mechanism was slightly out of alignment.

{companion_name} tapped gently beside the lock. Adjusted something invisible. Then the key turned smooth.

"The problem wasn't the key," {companion_name} said. "Or the door. Inside, something was out of place. You needed to know that to fix it."

The door opened.

{refrain}.`,
    scriptTemplate: `A lock on the door wouldn't open. {child_name} pushed the key. Nothing.

{child_name} pushed harder. Still nothing.

{companion_name} came over. "Let me look."

They looked at the lock. Inside, hidden, {child_name} could not see: the mechanism was slightly out of alignment.

{companion_name} tapped gently beside the lock. Adjusted something invisible. Then the key turned smooth.

"The problem wasn't the key," {companion_name} said. "Or the door. Inside, something was out of place. You needed to know that to fix it."

The door opened.

{refrain}.`
  }
}
,

  {
    ordinal: 4, title: 'Wrong Guesses Teach',
    concept: 'Trying again after a wrong guess — failure teaches you', callback: 'think before you act + ask for help + persistence', ageFloor: 5,
    summary: 'The hero makes a guess or attempt that's wrong, realizes it teaches something, tries again with new knowledge, and succeeds. Brings prior tools plus introduces resilience.',
    teachingNote: 'Wrong attempts are not failures; they are teaching moments. Mistakes hold information.',
    learningBeat: 'Wrong guesses teach you',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} made a shape out of clay. A bowl. It was pretty. Round and smooth.

But when the {hero} put water in it, the water seeped through the bottom.

The bowl was not good. It had a hole.

The {hero} felt sad.

Then {companion_name} said something new: "The wrong bowl taught you something. The bottom was too thin. Now you know."

The {hero} made another bowl. This time, the bottom was thick. Very thick.

The {hero} put water in it.

The water stayed! The bowl held it!

The first bowl was not a waste. It taught. It showed what wouldn't work. And that helped make the second bowl work.

The {hero} held the {object_motif} and smiled.

"Wrong tries teach you," said {companion_name}. "That's how you learn."

{refrain}.`,
    scriptTemplate: `{child_name} made a shape out of clay. A bowl. It was pretty. Round and smooth.

But when {child_name} put water in it, the water seeped through the bottom.

The bowl was not good. It had a hole.

{child_name} felt sad.

Then {companion_name} said something new: "The wrong bowl taught you something. The bottom was too thin. Now you know."

{child_name} made another bowl. This time, the bottom was thick. Very thick.

{child_name} put water in it.

The water stayed! The bowl held it!

The first bowl was not a waste. It taught. It showed what wouldn't work. And that helped make the second bowl work.

{child_name} held the {object_motif} and smiled.

"Wrong tries teach you," said {companion_name}. "That's how you learn."

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} was trying to catch a bird that had flown into the cabin. It wasn't dangerous, just a small thing that had gotten confused, and the {object_motif} couldn't be left outside with it loose.

The {hero}'s first attempt: chase it directly. Run at it, corner it, grab it gently.

The bird panicked, flew higher, crashed into the window, and scattered feathers everywhere. The {hero} stood alone, breathless, having learned precisely nothing except that chasing didn't work.

"That didn't work," said {companion_name}, appearing in the doorway.

"No," the {hero} said.

"Did it teach you anything?" asked {companion_name}.

The {hero} thought. "That if I chase it, it panics and goes higher. It tries to escape."

"So," said {companion_name}, "what if you didn't chase it?"

The {hero} sat down. Left the window open. Set out a bowl of water, some seeds. Made a little path toward the opening.

Then the {hero} left the room and waited.

Twenty minutes later, the bird, calm and curious, found the seeds, drank the water, and when it was ready, noticed the open window and flew out, unhurt and unfrightened.

"The wrong try taught me something," the {hero} said. "Chasing doesn't work because the bird can't help but run. But if I let it calm down, it solves itself."

"That's what wrong guesses do," said {companion_name}. "They teach you how not to do it, which is halfway to knowing how to do it right."

The {hero} sat with the {object_motif}, watching the bird disappear into the evening sky.

{refrain}.`,
    scriptTemplate: `{child_name} was trying to catch a bird that had flown into the cabin. It wasn't dangerous, just a small thing that had gotten confused, and the {object_motif} couldn't be left outside with it loose.

{child_name's first attempt: chase it directly. Run at it, corner it, grab it gently.

The bird panicked, flew higher, crashed into the window, and scattered feathers everywhere. {child_name} stood alone, breathless, having learned precisely nothing except that chasing didn't work.

"That didn't work," said {companion_name}, appearing in the doorway.

"No," {child_name} said.

"Did it teach you anything?" asked {companion_name}.

{child_name} thought. "That if I chase it, it panics and goes higher. It tries to escape."

"So," said {companion_name}, "what if you didn't chase it?"

{child_name} sat down. Left the window open. Set out a bowl of water, some seeds. Made a little path toward the opening.

Then {child_name} left the room and waited.

Twenty minutes later, the bird, calm and curious, found the seeds, drank the water, and when it was ready, noticed the open window and flew out, unhurt and unfrightened.

"The wrong try taught me something," {child_name} said. "Chasing doesn't work because the bird can't help but run. But if I let it calm down, it solves itself."

"That's what wrong guesses do," said {companion_name}. "They teach you how not to do it, which is halfway to knowing how to do it right."

{child_name} sat with the {object_motif}, watching the bird disappear into the evening sky.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} was rebuilding the {object_motif} after it had broken. There were seventeen small pieces, and the {hero} tried to fit them together as they remembered them fitting before.

The first assembly worked up to a point, then three pieces refused to fit at the end. The {hero} tried forcing them. Tried different orders. Nothing. The whole construction came apart in frustrated hands.

"It doesn't work," the {hero} said to {companion_name}. "The pieces don't go back together the same way."

{companion_name} looked at the scattered pieces. "That try taught you something though. What did you learn?"

The {hero} thought. "That the last three pieces... they have a different shape than I remember. Or my memory is wrong about the order."

"So," {companion_name} said, "you have new information. Use it."

The {hero} laid out the three problem pieces and examined them carefully. One had a notch. One had a lip. One was shaped differently than the others. The {hero} tried a different order — the notched one first, then... yes, that one fit. Then the third, which locked into place with a small satisfying click.

The entire assembly slid together perfectly.

"The wrong try wasn't a failure," said {companion_name}. "It showed you something you didn't know before — that these pieces had a different arrangement than you thought."

"I wasted time," the {hero} said.

"You gathered information," {companion_name} corrected. "And that information let you solve it on the second try."

The {hero} held the repaired {object_motif}, whole again, and understood: the first attempt had been a necessary step, not a misstep.

{refrain}.`,
    scriptTemplate: `{child_name} was rebuilding the {object_motif} after it had broken. There were seventeen small pieces, and {child_name} tried to fit them together as they remembered them fitting before.

The first assembly worked up to a point, then three pieces refused to fit at the end. {child_name} tried forcing them. Tried different orders. Nothing. The whole construction came apart in frustrated hands.

"It doesn't work," {child_name} said to {companion_name}. "The pieces don't go back together the same way."

{companion_name} looked at the scattered pieces. "That try taught you something though. What did you learn?"

{child_name} thought. "That the last three pieces... they have a different shape than I remember. Or my memory is wrong about the order."

"So," {companion_name} said, "you have new information. Use it."

{child_name} laid out the three problem pieces and examined them carefully. One had a notch. One had a lip. One was shaped differently than the others. {child_name} tried a different order — the notched one first, then... yes, that one fit. Then the third, which locked into place with a small satisfying click.

The entire assembly slid together perfectly.

"The wrong try wasn't a failure," said {companion_name}. "It showed you something you didn't know before — that these pieces had a different arrangement than you thought."

"I wasted time," {child_name} said.

"You gathered information," {companion_name} corrected. "And that information let you solve it on the second try."

{child_name} held the repaired {object_motif}, whole again, and understood: the first attempt had been a necessary step, not a misstep.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} had an idea for how to reinforce a cracked wall: if they packed clay deeply into the crack, it might hold and prevent further breaking. It made sense in theory. In execution, the clay didn't bond to the old stone; it just sat there, inert and separate, not integrated.

When the {hero} tested it, the clay pulled away. The crack remained as vulnerable as before.

"That didn't work," the {hero} said, sitting back.

{companion_name} examined the failed attempt. "What did you learn?"

"That clay doesn't stick well to old stone," the {hero} said.

"Yes," {companion_name} agreed. "Now you know. What could you try instead?"

The {hero} thought about what they'd discovered: clay and stone don't bond. But what if they used something that would? Mortar, which was made to bind. Or better still — what if they cleaned out the loose material first, dampened the stone, then applied the mortar in layers, letting each dry before adding the next?

This time, the repair held. Not perfect, but solid. The crack stayed sealed.

"The first try didn't fail," said {companion_name}. "It taught. It showed you that clay and stone don't work together, which meant your next try could build on that knowledge."

"I spent an hour on something that didn't work," said the {hero}.

"You spent an hour gathering knowledge," {companion_name} said. "The second try was faster and more successful because of the first."

The {hero} looked at the sealed crack, thinking about the journey from wrong guess to right answer.

"It's not linear," the {hero} mused. "You don't go straight from problem to solution. You try, learn, adjust, try again."

"That's the whole thing," {companion_name} said. "Wrong guesses are part of the path, not detours from it."

The {hero} held the {object_motif}, understanding now that the wall they'd fixed was strong partly because it had been fixed badly first — that failure had held information that success needed.

{refrain}.`,
    scriptTemplate: `{child_name} had an idea for how to reinforce a cracked wall: if they packed clay deeply into the crack, it might hold and prevent further breaking. It made sense in theory. In execution, the clay didn't bond to the old stone; it just sat there, inert and separate, not integrated.

When {child_name} tested it, the clay pulled away. The crack remained as vulnerable as before.

"That didn't work," {child_name} said, sitting back.

{companion_name} examined the failed attempt. "What did you learn?"

"That clay doesn't stick well to old stone," {child_name} said.

"Yes," {companion_name} agreed. "Now you know. What could you try instead?"

{child_name} thought about what they'd discovered: clay and stone don't bond. But what if they used something that would? Mortar, which was made to bind. Or better still — what if they cleaned out the loose material first, dampened the stone, then applied the mortar in layers, letting each dry before adding the next?

This time, the repair held. Not perfect, but solid. The crack stayed sealed.

"The first try didn't fail," said {companion_name}. "It taught. It showed you that clay and stone don't work together, which meant your next try could build on that knowledge."

"I spent an hour on something that didn't work," {child_name} said.

"You spent an hour gathering knowledge," {companion_name} said. "The second try was faster and more successful because of the first."

{child_name} looked at the sealed crack, thinking about the journey from wrong guess to right answer.

"It's not linear," {child_name} mused, "You don't go straight from problem to solution. You try, learn, adjust, try again."

"That's the whole thing," {companion_name} said. "Wrong guesses are part of the path, not detours from it."

{child_name} held the {object_motif}, understanding now that the wall they'd fixed was strong partly because it had been fixed badly first — that failure had held information that success needed.

{refrain}.`
  },
  default: {
    audioTemplate: `The {hero} tried to build something. The first try didn't work.

But the try taught them something.

They tried again, using what they learned.

This time, it worked.

"Wrong tries teach," said {companion_name}. "That's how you learn."

The {hero} held the {object_motif}, knowing now that trying again was not failing. It was learning.

{refrain}.`,
    scriptTemplate: `{child_name} tried to build something. The first try didn't work.

But the try taught them something.

They tried again, using what they learned.

This time, it worked.

"Wrong tries teach," said {companion_name}. "That's how you learn."

{child_name} held the {object_motif}, knowing now that trying again was not failing. It was learning.

{refrain}.`
  }
}
,

  {
    ordinal: 5, title: 'Listen to the Problem',
    concept: 'Problems have their own solutions: listen to what the problem is asking for', callback: 'think before you act + ask for help + persistence + try and see', ageFloor: 5,
    summary: 'Capstone: the hero faces a complex problem, tries usual approaches, realizes by paying close attention to what the problem ACTUALLY needs (not what they think it should be), discovers the answer. Brings all prior lessons together.',
    teachingNote: 'The deepest problem-solving comes from listening — to the problem itself, to what it's actually asking for. Understanding the real shape of the trouble leads to elegant solutions.',
    learningBeat: 'Listen to what the problem is asking',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} had a plant that wouldn't grow. It sat in the pot, small and sad, for weeks.

The {hero} gave it water. More water. Even more water.

The plant got sadder.

The {hero} moved it to sun. Bright sun. Very bright sun.

The plant only drooped lower.

The {hero} asked {companion_name}: "Why won't it grow?"

{companion_name} looked at the plant and listened. Not to words. To what the plant was asking.

"It's wet," {companion_name} said. "Too much water. It can't breathe."

The {hero} let the plant dry a little. Not wet. Not dry. In between.

The {hero} moved it to softer light. Not dark. Not burning. Medium.

The {hero} held the {object_motif} and waited.

Slowly, the plant opened. Green came back. A new leaf appeared.

"The plant was asking for something different than I thought it needed," said the {hero}.

"Listen to what's really asking," said {companion_name}. "The answer is there."

{refrain}.`,
    scriptTemplate: `{child_name} had a plant that wouldn't grow. It sat in the pot, small and sad, for weeks.

{child_name} gave it water. More water. Even more water.

The plant got sadder.

{child_name} moved it to sun. Bright sun. Very bright sun.

The plant only drooped lower.

{child_name} asked {companion_name}: "Why won't it grow?"

{companion_name} looked at the plant and listened. Not to words. To what the plant was asking.

"It's wet," {companion_name} said. "Too much water. It can't breathe."

{child_name} let the plant dry a little. Not wet. Not dry. In between.

{child_name} moved it to softer light. Not dark. Not burning. Medium.

{child_name} held the {object_motif} and waited.

Slowly, the plant opened. Green came back. A new leaf appeared.

"The plant was asking for something different than I thought it needed," {child_name} said.

"Listen to what's really asking," said {companion_name}. "The answer is there."

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero}'s little pocket door was stuck. Not locked, just... stuck. Jammed. The {hero} needed to open it, and everything they knew said to force it.

They pulled. The door resisted.

They pulled harder. It budged an inch, then stuck again even tighter.

"Let me think," said the {hero}. "What is the door actually telling me?"

The door wasn't saying "pull harder." The door was stuck because something inside was blocking it.

The {hero} pushed gently instead. Pushed the door inward, releasing the pressure. Then pulled. It came free.

Not because of force. Because of listening to what the door was actually asking.

The {hero} opened the door and found the {object_motif} waiting inside, kept safe until now.

"Sometimes problems speak in their own language," {companion_name} said. "Not all problems ask for force. This one asked for patience and a gentle push."

The {hero} held the {object_motif} and understood: solving wasn't about knowing the answer ahead of time. It was about listening to what the problem wanted.

{refrain}.`,
    scriptTemplate: `{child_name's little pocket door was stuck. Not locked, just... stuck. Jammed. {child_name} needed to open it, and everything they knew said to force it.

They pulled. The door resisted.

They pulled harder. It budged an inch, then stuck again even tighter.

"Let me think," said {child_name. "What is the door actually telling me?"

The door wasn't saying "pull harder." The door was stuck because something inside was blocking it.

{child_name} pushed gently instead. Pushed the door inward, releasing the pressure. Then pulled. It came free.

Not because of force. Because of listening to what the door was actually asking.

{child_name} opened the door and found the {object_motif} waiting inside, kept safe until now.

"Sometimes problems speak in their own language," {companion_name} said. "Not all problems ask for force. This one asked for patience and a gentle push."

{child_name} held the {object_motif} and understood: solving wasn't about knowing the answer ahead of time. It was about listening to what the problem wanted.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} was facing a genuine puzzle: how to carry two fragile things at once — the {object_motif} in one hand, and a carefully balanced bowl of water in the other — across rough ground to the far side of {setting}.

The obvious approach: move fast, don't spill, concentrate hard.

The {hero} tried it. Made it ten steps before the ground shifted, both hands lurched, and water sloshed everywhere.

Start again. Move fast. Concentrate. Same result.

The {hero} sat down, frustrated. "What is this problem actually asking for?" they wondered aloud.

{companion_name} came and sat beside them. "What do you notice about what happens?"

"The ground is uneven," the {hero} said. "So when I move fast, I lose balance."

"And what does the water do when you lose balance?"

"It spills," the {hero} said.

"So," {companion_name} said, "what if you didn't lose balance?"

The {hero} realized: the problem wasn't asking for speed. The ground was telling them to slow down. The water was telling them to move gently. The uneven earth was telling them to watch their footing.

The {hero} walked slowly. Carefully. Feeling each step. Watching the water surface stay calm. The {object_motif} held steady in the other hand.

They arrived at the far side with both intact, not through speed or concentration, but through listening to what the problem was actually asking for.

"I kept trying to override the problem," the {hero} said. "But the problem had its own shape. It wanted me to go slowly."

"That's listening," {companion_name} said. "Understanding what the situation needs, not what you think it should need."

The {hero} set down the {object_motif} and the bowl, both undamaged, both intact because the hero had finally heard what the problem was asking.

{refrain}.`,
    scriptTemplate: `{child_name} was facing a genuine puzzle: how to carry two fragile things at once — the {object_motif} in one hand, and a carefully balanced bowl of water in the other — across rough ground to the far side of {setting}.

The obvious approach: move fast, don't spill, concentrate hard.

{child_name} tried it. Made it ten steps before the ground shifted, both hands lurched, and water sloshed everywhere.

Start again. Move fast. Concentrate. Same result.

{child_name} sat down, frustrated. "What is this problem actually asking for?" they wondered aloud.

{companion_name} came and sat beside them. "What do you notice about what happens?"

"The ground is uneven," {child_name} said. "So when I move fast, I lose balance."

"And what does the water do when you lose balance?"

"It spills," {child_name} said.

"So," {companion_name} said, "what if you didn't lose balance?"

{child_name} realized: the problem wasn't asking for speed. The ground was telling them to slow down. The water was telling them to move gently. The uneven earth was telling them to watch their footing.

{child_name} walked slowly. Carefully. Feeling each step. Watching the water surface stay calm. The {object_motif} held steady in the other hand.

They arrived at the far side with both intact, not through speed or concentration, but through listening to what the problem was actually asking for.

"I kept trying to override the problem," {child_name} said. "But the problem had its own shape. It wanted me to go slowly."

"That's listening," {companion_name} said. "Understanding what the situation needs, not what you think it should need."

{child_name} set down the {object_motif} and the bowl, both undamaged, both intact because {child_name} had finally heard what the problem was asking.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} had been trying for days to get the {object_motif} to fit into a narrow shelf — not squeezed or jammed, but properly, with space around it for air.

Every approach that had worked before didn't work here. Rotating it, angling it, tilting it — all seemed logical, but none of them let it settle naturally.

The {hero} kept trying the same logical approaches. Surely if they tried harder, one would work.

{companion_name} watched from across the room and finally spoke. "You're trying to make it fit your idea of how it should fit. What if you asked it how it actually wants to fit?"

The {hero} stopped and looked at the object with fresh eyes. Really looked. Noticed the way its weight distributed, how its center of gravity wanted to settle, where its edges wanted to turn.

The {hero} had been assuming it needed to go in one way. But the object itself, listened to, wanted to go in another. A quarter turn. A tilt. A specific angle that felt natural to the object's own shape, not to the shelf's geometry or the {hero}'s expectations.

And then it fit. Perfectly. Naturally. As if it had always belonged there exactly that way.

"I was arguing with the problem," the {hero} said. "Instead of listening to it."

"The object was telling you how it wanted to be held," {companion_name} said. "The shelf was telling you what space it had available. The answer wasn't hidden. It was waiting in the details, in the small language of physics and geometry and the reality of how things actually want to fit together."

The {hero} stood back and looked at the {object_motif}, finally settled in its place, seeing how obviously right it was now that they'd stopped trying to make it right and instead listened to how it wanted to be.

"Every problem is like this, isn't it?" the {hero} said. "It's not asking to be solved by force or idea. It's asking to be understood."

"And understanding," {companion_name} said, "comes from listening."

The {hero} sat with the {object_motif} as evening came to {setting}, understanding that the deepest problems weren't puzzles to outwit. They were conversations to engage with, questions the world was asking that needed a patient, attentive answer.

{refrain}.`,
    scriptTemplate: `{child_name} had been trying for days to get the {object_motif} to fit into a narrow shelf — not squeezed or jammed, but properly, with space around it for air.

Every approach that had worked before didn't work here. Rotating it, angling it, tilting it — all seemed logical, but none of them let it settle naturally.

{child_name} kept trying the same logical approaches. Surely if they tried harder, one would work.

{companion_name} watched from across the room and finally spoke. "You're trying to make it fit your idea of how it should fit. What if you asked it how it actually wants to fit?"

{child_name} stopped and looked at the object with fresh eyes. Really looked. Noticed the way its weight distributed, how its center of gravity wanted to settle, where its edges wanted to turn.

{child_name} had been assuming it needed to go in one way. But the object itself, listened to, wanted to go in another. A quarter turn. A tilt. A specific angle that felt natural to the object's own shape, not to the shelf's geometry or {child_name's expectations.

And then it fit. Perfectly. Naturally. As if it had always belonged there exactly that way.

"I was arguing with the problem," {child_name} said. "Instead of listening to it."

"The object was telling you how it wanted to be held," {companion_name} said. "The shelf was telling you what space it had available. The answer wasn't hidden. It was waiting in the details, in the small language of physics and geometry and the reality of how things actually want to fit together."

{child_name} stood back and looked at the {object_motif}, finally settled in its place, seeing how obviously right it was now that they'd stopped trying to make it right and instead listened to how it wanted to be.

"Every problem is like this, isn't it?" {child_name} said. "It's not asking to be solved by force or idea. It's asking to be understood."

"And understanding," {companion_name} said, "comes from listening."

{child_name} sat with the {object_motif} as evening came to {setting}, understanding that the deepest problems weren't puzzles to outwit. They were conversations to engage with, questions the world was asking that needed a patient, attentive answer.

{refrain}.`
  },
  default: {
    audioTemplate: `The {hero} came home to find the {object_motif} in the wrong place. Not lost. Not broken. Just... not where it belonged.

At first the {hero} thought to put it somewhere else, forcing it into a space it didn't fit.

Then the {hero} stopped and listened. Looked at the object. Looked at the spaces available.

And noticed: the object wanted to go in one particular place. A place the {hero} hadn't considered.

It fit there perfectly.

"I was trying to decide where it belonged," the {hero} said. "But it was already telling me."

{companion_name} smiled. "Listen to what's asking. The answer is there."

{refrain}.`,
    scriptTemplate: `{child_name} came home to find the {object_motif} in the wrong place. Not lost. Not broken. Just... not where it belonged.

At first {child_name} thought to put it somewhere else, forcing it into a space it didn't fit.

Then {child_name} stopped and listened. Looked at the object. Looked at the spaces available.

And noticed: the object wanted to go in one particular place. A place {child_name} hadn't considered.

It fit there perfectly.

"I was trying to decide where it belonged," {child_name} said. "But it was already telling me."

{companion_name} smiled. "Listen to what's asking. The answer is there."

{refrain}.`
  }
}
]
