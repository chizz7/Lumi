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
    audioTemplate: `The {hero} woke to a quiet morning in {setting} with a growing weight in their chest. Three tasks sat waiting, all urgent, all demanding attention at once: the broken fence needed mending, the overgrown garden needed clearing, and the {object_motif} needed careful repair before it could be worn again.

The {hero} stood at the old stone {hero} stopped and stared. This was a problem, and the {hero} did not like problems that got in the way of bed. Bed was waiting. Warm blankets were waiting. All that stood in the way was this stupid, stubborn tangle. The quickest thing, surely, was to yank it free and be done.

So the {hero} took hold and pulled. The tangle tightened. The {hero} pulled the other way, and it tightened again, biting down on itself until the loops went small and stubborn. A twig snapped off in the {hero}'s hand. Somewhere in the middle, the {object_motif} gave a strained little creak.

The {hero}'s fingers were clumsy with hurry. Every second the tangle sat there felt like proof that the {hero} was bad at this, and being bad at it made the {hero} pull all the harder.

"Let go, let go, let go," the {hero} muttered, tugging harder, faster, jaw tight. The more the {hero} fought it, the more it seemed to fight back. One loop pinched shut over another. Now it was not one problem but three, and the {hero} could not even tell where the branch ended and the {object_motif} began.

The {hero} sat back on both heels, out of breath, ears burning. It was hopeless. It was ruined. Tomorrow everyone would see the mess and know the {hero} had wrecked it.

The {hero} thought about walking away and leaving it in the dark. But the {object_motif} mattered too much for that. So the {hero} stayed, stuck between wanting to fix it and having no idea how.

"Rough evening?" said a voice.

It was {companion_name}, settling onto the grass a little way off, in no hurry at all. {companion_name} did not reach for the tangle. {companion_name} just looked at the {hero}, kindly.

"I can't fix it," the {hero} said, hearing the wobble in it. The {hero} showed the tangle, holding it up in both hands like something broken. "See? It's worse than when it started."

"I believe you," said {companion_name}. "You have been pulling very hard. Here is the thing you skipped." {companion_name} tapped the ground. "Sit. Breathe once, all the way out. And before you touch it again, look at it. Really look — not the way you look at something you already hate, but the way you look at something you want to understand."

The {hero} wanted to argue that looking was a waste of time. But the {hero} was too tired to argue, so instead the {hero} sat, and breathed out long and slow, and looked.

"Every good answer begins with a pause," {companion_name} said softly. "While your hands are busy, your eyes fall asleep. Wake them up first."

For a moment the {hero} did nothing at all, which felt strange and almost wrong. The hands wanted to grab. The {hero} let them rest. Slowly the loud, rushing feeling in the chest grew quieter, and the tangle stopped looking like an enemy and started looking like a puzzle.

And this time, without pulling, the {hero} began to see. The tangle was not the solid lump it had felt like. It was made of parts. Here, the branch. Here, one loop of the {object_motif} crossed over the branch and back under itself. The {hero} traced one strand slowly with a fingertip, following it from where it started to where it disappeared, then picking it up again on the far side. And here — the {hero} leaned in — here was the trouble: not the tight middle at all, but a single loop hooked over the very tip of the twig. Every pull had only been dragging that loop tighter onto the hook.

It was so clear now that the {hero} almost laughed. All that fighting, and the whole snarl hung on one small hook, the way a whole coat hangs on one small peg.

It was a small, quiet feeling, but a good one — the feeling of a thing that had seemed impossible turning out to be only tricky. Nothing had changed about the tangle. The only thing that had changed was that the {hero} had finally stopped long enough to see it.

The {hero} did not pull. The {hero} lifted — gently, up and off — sliding that one loop back over the tip of the twig. The branch let go. The loops, suddenly loose, fell open into the {hero}'s lap, soft as untied laces.

The {object_motif} was free, and whole, and not ruined at all. The {hero} exhaled.

The {hero} turned it over, hardly believing how simple the ending had been. "It was only caught in one place," the {hero} said. "I couldn't see it because I never stopped." "When I was pulling," the {hero} went on, "it all felt like one big knot. It was really lots of little things, and only one of them was stuck."

"Now you know where to start next time," {companion_name} said, and did not say anything more clever than that, which was exactly right.

They sat together a while, not needing to talk. The grass was cool. The last of the light went from gold to gray.

The {hero} let out a slow breath and felt the last of the crossness drain away into the cool grass. Above {setting}, a night bird asked its soft, round question and got no answer, and did not mind. The {hero} carried the {object_motif} home cradled in both arms, walking slowly, in no hurry now at all.

{refrain}.`,
    scriptTemplate: `The trouble began just before bedtime, which is the worst time for trouble. {child_name} had been carrying the {object_motif} back across {setting} when it slipped, dropped, and landed in a tangle — caught somehow on a low branch, wound around twice, and pulled into a hard little snarl.

{child_name} stopped and stared. This was a problem, and {child_name} did not like problems that got in the way of bed. Bed was waiting. Warm blankets were waiting. All that stood in the way was this stupid, stubborn tangle. The quickest thing, surely, was to yank it free and be done.

So {child_name} took hold and pulled. The tangle tightened. {child_name} pulled the other way, and it tightened again, biting down on itself until the loops went small and stubborn. A twig snapped off in {child_name}'s hand. Somewhere in the middle, the {object_motif} gave a strained little creak.

{child_name}'s fingers were clumsy with hurry. Every second the tangle sat there felt like proof that {child_name} was bad at this, and being bad at it made {child_name} pull all the harder.

"Let go, let go, let go," {child_name} muttered, tugging harder, faster, jaw tight. The more {child_name} fought it, the more it seemed to fight back. One loop pinched shut over another. Now it was not one problem but three, and {child_name} could not even tell where the branch ended and the {object_motif} began.

{child_name} sat back on both heels, out of breath, ears burning. It was hopeless. It was ruined. Tomorrow everyone would see the mess and know {child_name} had wrecked it.

{child_name} thought about walking away and leaving it in the dark. But the {object_motif} mattered too much for that. So {child_name} stayed, stuck between wanting to fix it and having no idea how.

"Rough evening?" said a voice.

It was {companion_name}, settling onto the grass a little way off, in no hurry at all. {companion_name} did not reach for the tangle. {companion_name} just looked at {child_name}, kindly.

"I can't fix it," {child_name} said, hearing the wobble in it. {child_name} showed the tangle, holding it up in both hands like something broken. "See? It's worse than when it started."

"I believe you," said {companion_name}. "You have been pulling very hard. Here is the thing you skipped." {companion_name} tapped the ground. "Sit. Breathe once, all the way out. And before you touch it again, look at it. Really look — not the way you look at something you already hate, but the way you look at something you want to understand."

{child_name} wanted to argue that looking was a waste of time. But {child_name} was too tired to argue, so instead {child_name} sat, and breathed out long and slow, and looked.

"Every good answer begins with a pause," {companion_name} said softly. "While your hands are busy, your eyes fall asleep. Wake them up first."

For a moment {child_name} did nothing at all, which felt strange and almost wrong. The hands wanted to grab. {child_name} let them rest. Slowly the loud, rushing feeling in the chest grew quieter, and the tangle stopped looking like an enemy and started looking like a puzzle.

And this time, without pulling, {child_name} began to see. The tangle was not the solid lump it had felt like. It was made of parts. Here, the branch. Here, one loop of the {object_motif} crossed over the branch and back under itself. {child_name} traced one strand slowly with a fingertip, following it from where it started to where it disappeared, then picking it up again on the far side. And here — {child_name} leaned in — here was the trouble: not the tight middle at all, but a single loop hooked over the very tip of the twig. Every pull had only been dragging that loop tighter onto the hook.

It was so clear now that {child_name} almost laughed. All that fighting, and the whole snarl hung on one small hook, the way a whole coat hangs on one small peg.

It was a small, quiet feeling, but a good one — the feeling of a thing that had seemed impossible turning out to be only tricky. Nothing had changed about the tangle. The only thing that had changed was that {child_name} had finally stopped long enough to see it.

{child_name} did not pull. {child_name} lifted — gently, up and off — sliding that one loop back over the tip of the twig. The branch let go. The loops, suddenly loose, fell open into {child_name}'s lap, soft as untied laces.

The {object_motif} was free, and whole, and not ruined at all. {child_name} exhaled.

{child_name} turned it over, hardly believing how simple the ending had been. "It was only caught in one place," {child_name} said. "I couldn't see it because I never stopped." "When I was pulling," {child_name} went on, "it all felt like one big knot. It was really lots of little things, and only one of them was stuck."

"Now you know where to start next time," {companion_name} said, and did not say anything more clever than that, which was exactly right.

They sat together a while, not needing to talk. The grass was cool. The last of the light went from gold to gray.

{child_name} let out a slow breath and felt the last of the crossness drain away into the cool grass. Above {setting}, a night bird asked its soft, round question and got no answer, and did not mind. {child_name} carried the {object_motif} home cradled in both arms, walking slowly, in no hurry now at all.

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

Everyone has a first move — the thing the body does before the mind catches up. {child_name}'s first move, always, was to act: to grab, to fix, to make the trouble go away by sheer effort. Most days it worked well enough. Tonight it was about to cost something.

Nothing gave. Or rather, the wrong thing gave: the tangle drew tighter, gripping down on itself, and one of the strands made a thin, strained sound that {child_name} did not like at all. It was the sound of something close to breaking.

{child_name} pulled again anyway, harder, because pulling was what you did with a stuck thing, and stopping felt like admitting defeat. The knot answered by knotting further. A loop that had been loose a moment ago pinched shut. What had been one snag became a cluster of them, and the more {child_name} fought, the less {child_name} could even tell where the {object_motif} ended and the fence began.

A hot, prickling feeling climbed up the back of {child_name}'s neck. It was not quite anger and not quite worry but a blend of the two, the particular misery of trying hard at something and watching it get worse in your hands. {child_name} thought, quite clearly: I am going to break it. And then, right behind that: and it will be my own fault, because I could not manage one simple knot.

It is a strange, small kind of pressure, the wish to be the sort of person who can simply handle things. No one was even watching, and still {child_name} felt watched — by some imagined audience that kept score of every fumble.

That last thought was the worst of them, and it made {child_name} want to pull harder still, as if enough force could undo the embarrassment along with the tangle.

Some part of {child_name} knew, dimly, that this was not working. But knowing a thing and stopping are two different skills, and {child_name} had practiced the first far more than the second.

"You're about to snap that," came a voice, unhurried and matter-of-fact.

{companion_name} had come up quietly and was standing a little way back, hands fol
{companion_name} had come up quietly and was standing a little way back, hands folded, making no move to help. {child_name} felt a flash of prickly pride — I can do it myself — and, close underneath it, a small, grateful relief that someone else had arrived.

"It's stuck," {child_name} said, which was obvious, and then, because {companion_name} said nothing, added the truer part: "I've been pulling and pulling and it's just getting worse. I think I'm going to wreck it."

"You might," {companion_name} agreed, which was not the comforting lie {child_name} had half hoped for. "If you keep doing what you're doing, you almost certainly will. So let's not do that." {companion_name} crouched down to {child_name}'s level, but still did not touch the tangle. "Take your hands off it for a second. Sit back. Breathe out — properly, all the way — and then, before you move a single finger, just look."

"Looking won't untie it," {child_name} muttered.

"No," said {companion_name}. "But pulling blind will break it, and you already know that, because you can hear it." A pause. "Every good answer begins with a pause. Your hands have had their turn. Give your eyes a turn now."

It went against everything {child_name} wanted to do, which was to keep moving, keep trying, keep proving. But the strained little sound was still echoing in {child_name}'s ears, and so, reluctantly, {child_name} let go. Sat back on both heels. Breathed out, long and unsteady, until the breath ran all the way to the bottom.

For several breaths nothing happened at all. The evening went on around {child_name} — a faint wind moving through {setting}, the distant, ordinary sounds of the day folding itself away. The urge to grab the {object_motif} again rose up twice, and twice {child_name} let it pass.

And in the quiet that followed — the strange, itchy quiet of doing nothing — something began to happen. The rushing feeling in {child_name}'s chest slowed. The tangle, which a moment ago had been a single furious lump, began to come apart in {child_name}'s mind before a single finger touched it. Not into strands yet. Into questions. Where does this part go? What is holding what? It was the oddest thing — the answer had not required more effort, only less.

{child_name} looked the way you look at a puzzle you actually intend to solve, tracing one strand slowly with the eyes alone, following it from where it began, over the root, under itself, and around — until, quite suddenly, the whole picture turned over and made sense.

It was not stuck in the middle at all. Not really.

The middle, where {child_name} had been hauling with all that force, was only a bystander. The real catch was a single loop, hooked over the splintered top of the old fence post and pulled tighter with every yank {child_name} had given it. All that pulling on the middle had done nothing but drive that one loop harder onto its hook. {child_name} had been fighting the wrong end of the problem the entire time.

It was almost embarrassing how obvious it looked now — but that, {child_name} would think later, was the whole trick of it. Problems did not hide because they were clever. They hid because a person in a hurry never held still long enough to see them plainly.

The relief of it was almost funny. {child_name} let out a breath that was half a laugh. Of course. It had never been a wall; it had been a door, and {child_name} had simply been shoving on the hinges.

This time {child_name} did not pull. {child_name} reached up, lifted the one hooked loop gently off the top of the post — up, and free — and felt the entire snarl release at once, all its false tightness melting the instant the real catch let go. The {object_motif} dropped loose and open into {child_name}'s waiting hands, unharmed, not so much as frayed.

For a moment {child_name} just held it, turning it over, feeling faintly amazed that a thing so impossible thirty seconds ago could now be simply, quietly done.

Nothing about the {object_motif} itself had changed in those last few seconds. The only thing that had changed was {child_name} — the switch from doing to seeing, from force to attention. That, it seemed, had been the entire difference.

"It was only caught in one place," {child_name} said slowly, turning the loop over. "One loop, on one splinter. All that pulling, and it was hanging on by almost nothing." {child_name} shook off the last of the frustration. "I kept fighting the middle. The middle was never even the problem."

{companion_name} nodded slowly, and did not pile a single word of instruction on top of the thing {child_name} had just worked out alone — which was, in its own way, the kindest thing {companion_name} could have done. "There," was all {companion_name} said, as though the whole evening had just been quietly set right.

{child_name} thought about the strained sound the strand had made, how close it had come, and felt a small shiver of luck — not because anything terrible would have happened, but because it would have been such a needless, avoidable shame to break a thing simply for want of a single quiet breath.

{child_name} wound the {object_motif} up carefully, the way you handle something you have nearly lost and gotten back. Over {setting} the sky had deepened from blue to something close to violet, and the first few stars were arriving without any fuss, one at a time. {child_name} was tired in a good way now, the frustration all drained off, leaving something steadier behind — the quiet confidence of a person who has just learned that the biggest, most tangled problems sometimes come undone from one small, patient place, if only you are still enough to find it.

{refrain}.`
  }
},
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
    learningBeat: 'what is really the problem',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} lived in {setting}. The {hero} had a warm little den. The den was cozy and dry.

One morning, a puddle came. Splish. Water on the floor. The {hero} did not like the puddle.

The {hero} looked at the puddle. It was cold and wide. It touched the {hero}'s toes.

The {hero} got a cup. Scoop, scoop, scoop. The puddle went away. "There," said the {hero}.

But soon the puddle came back. Splish. More water on the floor. Oh no.

The {hero} scooped again. Scoop, scoop, scoop. The water went away. Then it came back again.

The {hero} scooped one more time. Scoop, scoop, scoop. The floor got dry. But drip, drip — the puddle came back once more.

The {hero} scooped and scooped. The puddle came and came. The {hero} felt tired. The {hero} sat down and held the {object_motif}.

Then {companion_name} came by. "You look tired," they said softly.

"The puddle keeps coming back," said the {hero}. "I scoop and scoop. But it will not go."

{companion_name} sat down too. "Let's stop and look," they said. "Where does the water come from?"

So the {hero} looked. The {hero} looked slow and calm. Drip, drip, drip. The water came from a little crack by the door.

"Oh!" said the {hero}. "The puddle is not the trouble. The crack is the trouble. The water sneaks in there."

{companion_name} smiled. "You found it," they said. "Do not just fix the first thing you see. Ask what is really the problem underneath."

The {hero} got some soft moss. The {hero} pushed it in the crack. Pat, pat, pat.

The {hero} looked at the crack. Snug and full of moss. No water could sneak in now.

No more drip. No more puddle. The floor stayed dry. The den was cozy again.

Drip, drip? No. Splish, splish? No. Just quiet. Just dry.

The {hero} smiled a sleepy smile.

The {hero} yawned a big, slow yawn. The den was warm and dry and still.

The den was safe now. All was well.

{companion_name} tucked in close. Outside, {setting} was soft and quiet. The stars blinked slow.

The {hero} held the {object_motif} close and felt calm. Warm. Sleepy. Safe.

"Good work today," whispered {companion_name}. "Rest now."

{refrain}.`,
    scriptTemplate: `{child_name} lived in {setting}. {child_name} had a warm little den. The den was cozy and dry.

One morning, a puddle came. Splish. Water on the floor. {child_name} did not like the puddle.

{child_name} looked at the puddle. It was cold and wide. It touched {child_name}'s toes.

{child_name} got a cup. Scoop, scoop, scoop. The puddle went away. "There," said {child_name}.

But soon the puddle came back. Splish. More water on the floor. Oh no.

{child_name} scooped again. Scoop, scoop, scoop. The water went away. Then it came back again.

{child_name} scooped one more time. Scoop, scoop, scoop. The floor got dry. But drip, drip — the puddle came back once more.

{child_name} scooped and scooped. The puddle came and came. {child_name} felt tired. {child_name} sat down and held the {object_motif}.

Then {companion_name} came by. "You look tired," they said softly.

"The puddle keeps coming back," said {child_name}. "I scoop and scoop. But it will not go."

{companion_name} sat down too. "Let's stop and look," they said. "Where does the water come from?"

So {child_name} looked. {child_name} looked slow and calm. Drip, drip, drip. The water came from a little crack by the door.

"Oh!" said {child_name}. "The puddle is not the trouble. The crack is the trouble. The water sneaks in there."

{companion_name} smiled. "You found it," they said. "Do not just fix the first thing you see. Ask what is really the problem underneath."

{child_name} got some soft moss. {child_name} pushed it in the crack. Pat, pat, pat.

{child_name} looked at the crack. Snug and full of moss. No water could sneak in now.

No more drip. No more puddle. The floor stayed dry. The den was cozy again.

Drip, drip? No. Splish, splish? No. Just quiet. Just dry.

{child_name} smiled a sleepy smile.

{child_name} yawned a big, slow yawn. The den was warm and dry and still.

The den was safe now. All was well.

{companion_name} tucked in close. Outside, {setting} was soft and quiet. The stars blinked slow.

{child_name} held the {object_motif} close and felt calm. Warm. Sleepy. Safe.

"Good work today," whispered {companion_name}. "Rest now."

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} lived in {setting} and had a pile of small troubles, all waiting at once. Three tangled things sat by the door: the {object_motif} needed mending, the path had stones that needed sorting, and the corner room had not been swept in days.

The {hero} looked at all three and felt the weight of them — not heavy exactly, just... much. All at once.

"I will fix them all today," the {hero} decided, and dashed to the corner room. Sweep, sweep, sweep. But then the {hero} looked at the {object_motif} and remembered — that was urgent too. So the {hero} dropped the broom and ran to the mending.

Stitch, stitch, stitch — halfway through a seam, the {hero} glanced out and thought of the stones. Were they still scattered? Yes. The {hero} set down the needle and went to sort the stones. One pile for big. One for small.

Halfway through the sorting, the {hero} realized the room was still unsswept. Back to sweep again. Then back to stitch again. Then the mind wandered to the stones. The {hero} felt the knot tightening in their chest.

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
    scriptTemplate: `In {setting}, {child_name} had a snug little home tucked between the rocks. It was warm and dry, and {child_name} loved it more than anywhere.

One morning, {child_name} woke to a strange feeling. Something cold was touching one paw. A puddle had spread across the floor, wide and shiny and wrong.

"Oh no," said {child_name}. "Water. In my home."

{child_name} did not like the puddle at all. So {child_name} fetched a little cup and began to scoop. Scoop, scoop, scoop. Slowly the water went down, until the floor was almost dry.

"There," said {child_name}, feeling clever. "All better." {child_name} set down the cup and looked around, pleased. The home felt right again — dry floor, cozy corner, everything in its place.

But it was not all better. Before long, the puddle crept back. It spread across the floor again, just as wide as before.

{child_name} scooped again, harder this time. Scoop, scoop, scoop. And again the water sank away. And again, a little while later, it returned.

"Why won't you stay away?" {child_name} grumbled at the puddle. But a puddle cannot answer. It only sat there, cold and patient, waiting to come back the moment {child_name} looked away.

This went on all morning. Scoop and wait. Puddle and scoop. {child_name}'s arms grew tired and {child_name}'s ears drooped. No matter how much water went into the cup, more always came back.

{child_name} looked at the cup, then at the wet floor, and felt a small, tired frown. Cleaning the same mess again and again did not feel like solving anything at all.

At last {child_name} sat down in the one dry corner, holding the {object_motif}, and let out a long, tired sigh.

That was when {companion_name} peeked in. "You look worn out," they said. "What is going on?"

"The puddle keeps coming back," said {child_name}. "I scoop and scoop and scoop. But it never stays gone."

{companion_name} stepped inside and looked at the wet floor for a long moment. Then they sat down beside {child_name}.

"You have been fighting the puddle all morning," they said gently. "But let's stop and look first. A puddle has to come from somewhere. So — what is really the problem here?"

{child_name} blinked. "The problem is the water on my floor."

"That is what you can see," said {companion_name}. "But where does the water come in?"

So the two of them grew still and watched. They did not scoop. They just looked, the way you look when you are calm. And soon {child_name} heard it. Drip. Drip. Drip.

"There," breathed {companion_name}. "Hear that? The puddle was only telling us something. Now we know where to look."

{child_name} followed the sound to the far wall, near the door, where a thin little crack ran down between two stones. Water was seeping through it, one slow drop at a time, sliding down to gather on the floor.

"It's the crack," {child_name} whispered. "The puddle isn't the real trouble at all. The crack is. I kept cleaning up the water, but the water just kept coming in."

{companion_name} nodded. "Now you see it. When you fix the first thing you notice, sometimes the trouble hides underneath. Find that, and you fix it once."

{child_name} did not scoop this time. Instead, {child_name} gathered soft moss and pressed it deep into the crack, patting it firm. The dripping stopped. The wall went quiet.

Then {child_name} wiped the floor one last time — and this time, the puddle did not come back. The floor stayed dry. The home stayed snug.

{child_name} let out a breath, a real one, the tired-happy kind.

Outside, {setting} was settling into evening. {companion_name} curled up nearby, and {child_name} held the {object_motif} in both paws, listening to the quiet where the dripping used to be.

Soon {child_name}'s eyes grew heavy, and the warm, dry dark folded in like a blanket.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} had lived in {setting} long enough to know every sound it made at night — the hush of the wind, the far-off calls, the little tick and settle of a home going to sleep. So when a new sound crept in, the {hero} noticed at once.

It was a puddle. Small at first, just a dark shine near the doorway, but by morning it had spread halfway across the floor, cold and wide and completely unwelcome.

"Right," said the {hero}, rolling up for work. "I can fix this." A cup, a steady hand, and a lot of scooping — that was the plan.

And it worked — for a while. Scoop by scoop, the puddle shrank until the floor gleamed damp but empty. The {hero} sat back, satisfied, and reached for the {object_motif} to settle in for a rest.

But the rest did not last. Within the hour, the puddle was back — the same size, the same place, as if the {hero} had never lifted a single cupful.

So the {hero} scooped it again. And within the hour, it returned again. And again the {hero} scooped, and again it came creeping back, patient as the tide.

Each time, the {hero} was sure this scoop would be the last one. Each time, the floor gleamed clean for a few short minutes before the cold shine returned, creeping out from the shadows like it had somewhere it needed to be. It was almost funny, except the {hero} was far too tired to laugh.

By the third round of scooping, the {hero}'s arms ached and the {hero}'s good mood had drained away with the water. "This is ridiculous," the {hero} muttered. "I keep cleaning it up and it keeps coming back. What is wrong with this floor?"

"Maybe it isn't the floor," said a voice from the doorway. It was {companion_name}, watching the whole soggy business with a thoughtful look.

"Of course it's the floor," said the {hero}. "That's where the water is."

"You've been at this for hours," {companion_name} went on. "Doesn't your arm hurt?" "My arm is fine," the {hero} said, though it wasn't, quite. "I just need to scoop faster than it fills." "And how is that going?" The {hero} didn't answer. It was going terribly, and they both knew it.

"That's where the water ends up," {companion_name} agreed, stepping inside. "But you've been fighting the puddle since sunrise, and it hasn't given up once. So maybe it's worth stopping to ask — what is really the problem here?"

The {hero} opened their mouth to say the problem was obviously the puddle — then stopped. Because when they really thought about it, the puddle was the thing they kept fixing, and the thing that kept coming back. Which meant it wasn't really being fixed at all.

It was a strange, uncomfortable thought. The {hero} had been busy all day — arms aching, cup filling and emptying — and somehow had fixed exactly nothing. The puddle had been loud and obvious, and the {hero} had spent every minute answering it instead of wondering where it came from.

"So where does it come from?" the {hero} said slowly. "If I'm not fixing it, then I'm not fixing the right thing."

"Now you're asking the good question," said {companion_name}. "Let's do what we practiced. Stop. Look. Don't touch anything yet — just watch."

The {hero} almost protested — sitting still felt like doing nothing, and doing nothing felt wrong with water on the floor. But they had trusted this before, and it had worked. So they stopped. They looked.

So they watched. They sat side by side in the dim and stayed still, and the {hero} let their eyes go soft and their breathing go slow. For a long moment there was nothing. Then — drip. A pause. Drip. A small, steady sound from the far corner by the door.

The {hero} crept toward it and found a thin crack running down the wall between two stones, low and easy to miss. Water was working its way through, drop by patient drop, then sliding down to pool exactly where the puddle always formed.

"There it is," the {hero} breathed. "The puddle was never the problem. It was just the part I could see. The crack is the real trouble — and I spent all day mopping up water instead of stopping the water getting in."

{companion_name} smiled. "That's the whole thing right there. The first sign of trouble is almost never the trouble itself. Find what's underneath, and you fix it once — instead of forever."

The {hero} didn't reach for the cup this time. Instead they packed soft moss into the crack, pressing it firm until the dripping slowed, stuttered, and finally stopped. The wall went silent.

One last wipe of the floor, and this time the dry stayed dry. The {hero} waited, half expecting the puddle to sneak back the way it always had. It didn't. It was gone for good.

"All day," the {hero} said, shaking their head with a tired laugh. "All day I fought the puddle, and the fix took two minutes once I knew where to look."

"Two minutes," {companion_name} echoed, amused. "And you'll know that sound now — a drip behind a wall, hiding under a puddle." The {hero} nodded, watching the dry floor stay dry, still a little amazed that the crack had been there the whole time, quietly making the mess they'd chased all day.

"That's how it usually goes," said {companion_name}, settling in beside them as the light outside {setting} turned low and gold.

The {hero} held the {object_motif} and listened to the new quiet in the walls — no drip, no trickle, just a home that was dry all the way through. Sleep came easily that night, the kind that finds you when a real worry has finally been put to rest.

{refrain}.`,
    scriptTemplate: `{child_name} had lived in {setting} long enough to know every sound it made at night — the hush of the wind, the far-off calls, the little tick and settle of a home going to sleep. So when a new sound crept in, {child_name} noticed at once.

It was a puddle. Small at first, just a dark shine near the doorway, but by morning it had spread halfway across the floor, cold and wide and completely unwelcome.

"Right," said {child_name}, rolling up for work. "I can fix this." A cup, a steady hand, and a lot of scooping — that was the plan.

And it worked — for a while. Scoop by scoop, the puddle shrank until the floor gleamed damp but empty. {child_name} sat back, satisfied, and reached for the {object_motif} to settle in for a rest.

But the rest did not last. Within the hour, the puddle was back — the same size, the same place, as if {child_name} had never lifted a single cupful.

So {child_name} scooped it again. And within the hour, it returned again. And again {child_name} scooped, and again it came creeping back, patient as the tide.

Each time, {child_name} was sure this scoop would be the last one. Each time, the floor gleamed clean for a few short minutes before the cold shine returned, creeping out from the shadows like it had somewhere it needed to be. It was almost funny, except {child_name} was far too tired to laugh.

By the third round of scooping, {child_name}'s arms ached and {child_name}'s good mood had drained away with the water. "This is ridiculous," {child_name} muttered. "I keep cleaning it up and it keeps coming back. What is wrong with this floor?"

"Maybe it isn't the floor," said a voice from the doorway. It was {companion_name}, watching the whole soggy business with a thoughtful look.

"Of course it's the floor," said {child_name}. "That's where the water is."

"You've been at this for hours," {companion_name} went on. "Doesn't your arm hurt?" "My arm is fine," {child_name} said, though it wasn't, quite. "I just need to scoop faster than it fills." "And how is that going?" {child_name} didn't answer. It was going terribly, and they both knew it.

"That's where the water ends up," {companion_name} agreed, stepping inside. "But you've been fighting the puddle since sunrise, and it hasn't given up once. So maybe it's worth stopping to ask — what is really the problem here?"

{child_name} opened their mouth to say the problem was obviously the puddle — then stopped. Because when they really thought about it, the puddle was the thing they kept fixing, and the thing that kept coming back. Which meant it wasn't really being fixed at all.

It was a strange, uncomfortable thought. {child_name} had been busy all day — arms aching, cup filling and emptying — and somehow had fixed exactly nothing. The puddle had been loud and obvious, and {child_name} had spent every minute answering it instead of wondering where it came from.

"So where does it come from?" {child_name} said slowly. "If I'm not fixing it, then I'm not fixing the right thing."

"Now you're asking the good question," said {companion_name}. "Let's do what we practiced. Stop. Look. Don't touch anything yet — just watch."

{child_name} almost protested — sitting still felt like doing nothing, and doing nothing felt wrong with water on the floor. But they had trusted this before, and it had worked. So they stopped. They looked.

So they watched. They sat side by side in the dim and stayed still, and {child_name} let their eyes go soft and their breathing go slow. For a long moment there was nothing. Then — drip. A pause. Drip. A small, steady sound from the far corner by the door.

{child_name} crept toward it and found a thin crack running down the wall between two stones, low and easy to miss. Water was working its way through, drop by patient drop, then sliding down to pool exactly where the puddle always formed.

"There it is," {child_name} breathed. "The puddle was never the problem. It was just the part I could see. The crack is the real trouble — and I spent all day mopping up water instead of stopping the water getting in."

{companion_name} smiled. "That's the whole thing right there. The first sign of trouble is almost never the trouble itself. Find what's underneath, and you fix it once — instead of forever."

{child_name} didn't reach for the cup this time. Instead they packed soft moss into the crack, pressing it firm until the dripping slowed, stuttered, and finally stopped. The wall went silent.

One last wipe of the floor, and this time the dry stayed dry. {child_name} waited, half expecting the puddle to sneak back the way it always had. It didn't. It was gone for good.

"All day," {child_name} said, shaking their head with a tired laugh. "All day I fought the puddle, and the fix took two minutes once I knew where to look."

"Two minutes," {companion_name} echoed, amused. "And you'll know that sound now — a drip behind a wall, hiding under a puddle." {child_name} nodded, watching the dry floor stay dry, still a little amazed that the crack had been there the whole time, quietly making the mess they'd chased all day.

"That's how it usually goes," said {companion_name}, settling in beside them as the light outside {setting} turned low and gold.

{child_name} held the {object_motif} and listened to the new quiet in the walls — no drip, no trickle, just a home that was dry all the way through. Sleep came easily that night, the kind that finds you when a real worry has finally been put to rest.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} had always taken a quiet pride in knowing {setting} the way you know your own hands. Every season had its rhythm, every corner its habit, and the {hero}'s home — snug, dry, tucked out of the wind — had kept its promises for as long as the {hero} could remember. Which was why the puddle felt less like a mess and more like a small betrayal.

It had appeared overnight: a thin sheet of water spreading from the doorway across the floorboards, catching the grey morning light. Not a flood, nothing frightening — just wrong, in the specific way that a thing out of place is wrong. The {hero} stood over it, frowning, and decided the answer was obvious. Water on the floor meant the floor needed drying. Simple.

So the {hero} set to work with a cup and a rag, and for a little while it was almost satisfying. The water gathered, the water lifted, the floorboards darkened and then paled as they dried. Scoop by scoop the puddle retreated to a damp smudge and then to nothing at all, and the {hero} sat back on their heels feeling like someone who had met a problem and won.

The victory lasted less than an hour. When the {hero} glanced up from tidying the {object_motif} back onto its shelf, the puddle had returned — not a hint of it, not a trace, but the whole thing, the same size and shape as before, spread across the boards as if the last hour had simply not happened.

The {hero} told themselves not to be annoyed. They had dried it once; they could dry it again. So they did — faster this time, more thorough, chasing every last bead of water into the cup. And an hour later, the puddle came back. Again. Exactly the same.

There is a particular kind of tiredness that comes not from hard work but from work that refuses to add up, and the {hero} was sinking into it now. Each drying was flawless. Each result was identical. The floor would gleam, the {hero} would allow themselves the smallest flicker of hope, and then — as reliable as a heartbeat — the water would return, erasing the effort as though mocking it. By the third repetition the {hero} had stopped feeling clever and started feeling foolish, though they could not yet have said why.

By the fourth time, something had curdled in the {hero}'s chest — not fear, exactly, but a hot, prickling frustration, the feeling of doing everything right and getting nowhere. The {hero}'s arms ached. Their patience had worn to a thread. "I have dried this floor four times," they said aloud, to no one. "Four times. What is wrong with it?"

The {hero} set the cup down and pressed the heels of their hands against their eyes. Part of them wanted to simply give up — to declare the floor haunted, the puddle unbeatable, and go find something else to do. But a stubborn, sensible part refused. Puddles did not appear from nowhere. Water did not fall out of a dry ceiling for no reason. Something, somewhere, was feeding it — and the {hero} simply had not found the something yet.

"Maybe nothing is wrong with the floor," came a voice. {companion_name} was leaning in the doorway, arms folded, taking in the scene — the damp boards, the cup, the {hero} kneeling in the middle of it all with the particular exhaustion of someone losing a fight they don't understand.

"It has to be the floor," the {hero} said, hearing how tired their own voice sounded. "That's where the water keeps showing up." "That's where it collects," {companion_name} agreed, stepping inside and crouching to look. "But it's been collecting there all morning, no matter what you do. Doesn't that tell you something?"

The {hero} bristled, because the question had a point buried in it and the point was uncomfortable. "So what am I supposed to do?" they said. "Leave the water? Let it sit?" "I'm not saying leave it," {companion_name} said mildly. "I'm saying you've dried this floor four times and it hasn't learned its lesson. Doesn't that make you the tiniest bit curious about where all this water is actually coming from?"

"It tells me the floor is stubborn," the {hero} muttered, but even as they said it, the words felt thin. Because {companion_name} was right about one thing: a problem you have solved does not come back four times in a row. If it kept returning, then whatever the {hero} had been doing, they had not actually solved anything. They had only been tidying the evidence.

"So don't tell me how to fix it yet," the {hero} said slowly, thinking it through. "Help me ask the right question first." {companion_name} smiled, the way they did when the {hero} had found the door on their own. "All right. You know this one. Stop and look — really look — and ask yourself what is really the problem. Not the part that's shouting. The part underneath."

So the {hero} stopped. It went against every instinct — there was still water on the floor, and sitting beside it doing nothing felt almost unbearable — but they made themselves be still, the way they had practised. They let their breathing slow. They let their eyes go soft and unfocused. And instead of looking at the puddle, they listened.

For a long moment there was only the ordinary quiet of the house. Then, beneath it, a sound the {hero} had been too busy to hear: a soft, deliberate drip. A pause. Another. It was coming from the far corner, low by the door, from a place the {hero} had walked past a hundred times and never once studied.

The {hero} crept closer and found it: a thin crack in the wall, running down between two stones near the floor, so narrow it nearly vanished in the shadow. Water was easing through it drop by patient drop, tracing a dark line down the stone and pooling, finally, into the exact shape of the puddle they had fought all day.

And there it was — the click, the small clean feeling of a thing sliding into place. The puddle had never been the problem. The puddle was a symptom, a report, the visible end of something that started higher up and out of sight. Every cupful the {hero} had lifted was true effort spent on the wrong end of the trouble.

It was almost embarrassing, how obvious it seemed now. The water had been telling the truth the whole time — it had a source, it had a path, it arrived from somewhere — and the {hero} had treated its arrival as the entire story. They had been so certain the puddle was the problem that they had never once turned to ask the plainer, quieter question hiding behind it. And the moment they did, the answer had been waiting, patient as the drip, exactly where a calm pair of eyes would find it.

"I kept answering the puddle," the {hero} said quietly, "because it was the loudest thing in the room. I never thought to ask what was making it." {companion_name} came to stand beside them, looking at the slow, patient drip, and said nothing for a moment — just rested a hand on the {hero}'s shoulder, which said enough.

This time the {hero} did not reach for the cup. They gathered a handful of soft moss, worked it into the crack, and pressed until it held — until the drip slowed, faltered, and stopped. For the first time all day, the wall was silent. Then the {hero} wiped the floor once, and waited, half braced for the water to seep back the way it always had.

It didn't. The floor stayed dry — properly dry, the kind of dry that means finished. The {hero} let out a long breath and felt the frustration of the whole day loosen and drain away, leaving behind something steadier: not the thin triumph of the morning, but the deep, quiet satisfaction of having actually understood.

"You know what's strange?" the {hero} said, sinking down beside {companion_name}. "The fixing took less than a minute. All those hours, and the actual repair was nothing. It was the finding that was hard." "It usually is," {companion_name} said, and left it there.

Outside, the light over {setting} had gone soft and low, and the day's heat was leaking gently out of the air. The {hero} picked up the {object_motif} and turned it over in their hands, not really looking at it, listening instead to the new silence in the walls — no drip, no trickle, no small betrayal waiting in the dark. Just a home that was whole again.

Sleep was already gathering at the edges of the {hero}'s thoughts, slow and warm and welcome. Tomorrow there would be other puddles, other troubles wearing the wrong face — there always were. But tonight the house was dry and quiet and honest, and that was enough to sink into, like settling into still water after a long swim.

{refrain}.`,
    scriptTemplate: `{child_name} had always taken a quiet pride in knowing {setting} the way you know your own hands. Every season had its rhythm, every corner its habit, and {child_name}'s home — snug, dry, tucked out of the wind — had kept its promises for as long as {child_name} could remember. Which was why the puddle felt less like a mess and more like a small betrayal.

It had appeared overnight: a thin sheet of water spreading from the doorway across the floorboards, catching the grey morning light. Not a flood, nothing frightening — just wrong, in the specific way that a thing out of place is wrong. {child_name} stood over it, frowning, and decided the answer was obvious. Water on the floor meant the floor needed drying. Simple.

So {child_name} set to work with a cup and a rag, and for a little while it was almost satisfying. The water gathered, the water lifted, the floorboards darkened and then paled as they dried. Scoop by scoop the puddle retreated to a damp smudge and then to nothing at all, and {child_name} sat back on their heels feeling like someone who had met a problem and won.

The victory lasted less than an hour. When {child_name} glanced up from tidying the {object_motif} back onto its shelf, the puddle had returned — not a hint of it, not a trace, but the whole thing, the same size and shape as before, spread across the boards as if the last hour had simply not happened.

{child_name} told themselves not to be annoyed. They had dried it once; they could dry it again. So they did — faster this time, more thorough, chasing every last bead of water into the cup. And an hour later, the puddle came back. Again. Exactly the same.

There is a particular kind of tiredness that comes not from hard work but from work that refuses to add up, and {child_name} was sinking into it now. Each drying was flawless. Each result was identical. The floor would gleam, {child_name} would allow themselves the smallest flicker of hope, and then — as reliable as a heartbeat — the water would return, erasing the effort as though mocking it. By the third repetition {child_name} had stopped feeling clever and started feeling foolish, though they could not yet have said why.

By the fourth time, something had curdled in {child_name}'s chest — not fear, exactly, but a hot, prickling frustration, the feeling of doing everything right and getting nowhere. {child_name}'s arms ached. Their patience had worn to a thread. "I have dried this floor four times," they said aloud, to no one. "Four times. What is wrong with it?"

{child_name} set the cup down and pressed the heels of their hands against their eyes. Part of them wanted to simply give up — to declare the floor haunted, the puddle unbeatable, and go find something else to do. But a stubborn, sensible part refused. Puddles did not appear from nowhere. Water did not fall out of a dry ceiling for no reason. Something, somewhere, was feeding it — and {child_name} simply had not found the something yet.

"Maybe nothing is wrong with the floor," came a voice. {companion_name} was leaning in the doorway, arms folded, taking in the scene — the damp boards, the cup, {child_name} kneeling in the middle of it all with the particular exhaustion of someone losing a fight they don't understand.

"It has to be the floor," {child_name} said, hearing how tired their own voice sounded. "That's where the water keeps showing up." "That's where it collects," {companion_name} agreed, stepping inside and crouching to look. "But it's been collecting there all morning, no matter what you do. Doesn't that tell you something?"

{child_name} bristled, because the question had a point buried in it and the point was uncomfortable. "So what am I supposed to do?" they said. "Leave the water? Let it sit?" "I'm not saying leave it," {companion_name} said mildly. "I'm saying you've dried this floor four times and it hasn't learned its lesson. Doesn't that make you the tiniest bit curious about where all this water is actually coming from?"

"It tells me the floor is stubborn," {child_name} muttered, but even as they said it, the words felt thin. Because {companion_name} was right about one thing: a problem you have solved does not come back four times in a row. If it kept returning, then whatever {child_name} had been doing, they had not actually solved anything. They had only been tidying the evidence.

"So don't tell me how to fix it yet," {child_name} said slowly, thinking it through. "Help me ask the right question first." {companion_name} smiled, the way they did when {child_name} had found the door on their own. "All right. You know this one. Stop and look — really look — and ask yourself what is really the problem. Not the part that's shouting. The part underneath."

So {child_name} stopped. It went against every instinct — there was still water on the floor, and sitting beside it doing nothing felt almost unbearable — but they made themselves be still, the way they had practised. They let their breathing slow. They let their eyes go soft and unfocused. And instead of looking at the puddle, they listened.

For a long moment there was only the ordinary quiet of the house. Then, beneath it, a sound {child_name} had been too busy to hear: a soft, deliberate drip. A pause. Another. It was coming from the far corner, low by the door, from a place {child_name} had walked past a hundred times and never once studied.

{child_name} crept closer and found it: a thin crack in the wall, running down between two stones near the floor, so narrow it nearly vanished in the shadow. Water was easing through it drop by patient drop, tracing a dark line down the stone and pooling, finally, into the exact shape of the puddle they had fought all day.

And there it was — the click, the small clean feeling of a thing sliding into place. The puddle had never been the problem. The puddle was a symptom, a report, the visible end of something that started higher up and out of sight. Every cupful {child_name} had lifted was true effort spent on the wrong end of the trouble.

It was almost embarrassing, how obvious it seemed now. The water had been telling the truth the whole time — it had a source, it had a path, it arrived from somewhere — and {child_name} had treated its arrival as the entire story. They had been so certain the puddle was the problem that they had never once turned to ask the plainer, quieter question hiding behind it. And the moment they did, the answer had been waiting, patient as the drip, exactly where a calm pair of eyes would find it.

"I kept answering the puddle," {child_name} said quietly, "because it was the loudest thing in the room. I never thought to ask what was making it." {companion_name} came to stand beside them, looking at the slow, patient drip, and said nothing for a moment — just rested a hand on {child_name}'s shoulder, which said enough.

This time {child_name} did not reach for the cup. They gathered a handful of soft moss, worked it into the crack, and pressed until it held — until the drip slowed, faltered, and stopped. For the first time all day, the wall was silent. Then {child_name} wiped the floor once, and waited, half braced for the water to seep back the way it always had.

It didn't. The floor stayed dry — properly dry, the kind of dry that means finished. {child_name} let out a long breath and felt the frustration of the whole day loosen and drain away, leaving behind something steadier: not the thin triumph of the morning, but the deep, quiet satisfaction of having actually understood.

"You know what's strange?" {child_name} said, sinking down beside {companion_name}. "The fixing took less than a minute. All those hours, and the actual repair was nothing. It was the finding that was hard." "It usually is," {companion_name} said, and left it there.

Outside, the light over {setting} had gone soft and low, and the day's heat was leaking gently out of the air. {child_name} picked up the {object_motif} and turned it over in their hands, not really looking at it, listening instead to the new silence in the walls — no drip, no trickle, no small betrayal waiting in the dark. Just a home that was whole again.

Sleep was already gathering at the edges of {child_name}'s thoughts, slow and warm and welcome. Tomorrow there would be other puddles, other troubles wearing the wrong face — there always were. But tonight the house was dry and quiet and honest, and that was enough to sink into, like settling into still water after a long swim.

{refrain}.`
  }
},
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
    learningBeat: 'More ideas, better choices',
    ageVariants: {
  '3-4': { audioTemplate: `The {hero} wanted to build a tower in {setting}. A tall, tall tower. The tallest tower ever.

So the {hero} grabbed the very first idea. "Big blocks on the bottom!" Up went one block. Up went two. Up went three. Up went four. But the tower leaned. It wibbled and it wobbled. And then the tower fell. Down, down, down. All the blocks went bump.

The {hero} tried again. The very same idea. The same big blocks. The same wibble. The same wobble. The same fall. Down, down, down.

The {hero} tried one more time. Big blocks again. And down, down, down again. Three towers, all fallen down.

The {hero} sat down in {setting} and felt small and cross. The blocks lay all around. The {hero}'s lip wobbled, just like the towers had wobbled.

Then {companion_name} came close and quiet. {companion_name} was carrying the {object_motif}, and set it down in the soft grass.

"Slow down, little one," said {companion_name}. "Your first idea is only one idea. Let us find more. Even silly ones. More ideas, better choices."

The {hero} took a slow breath. In. And out. A calm mind has room to look. There is room for more than one answer.

"Idea one," said the {hero}. "Big blocks."
"Idea two," said {companion_name}. "Little blocks on top."
"Idea three," said the {hero}, and giggled. "A tower made of hats!"
"Idea four," said the {hero}. "A tower made of socks!"
"Idea five," said {companion_name}. "Flat blocks at the bottom. Nice and wide."

So many ideas now! Not just one. The {hero} looked at them all, one by one.

"Flat and wide," said the {hero}. "I pick that one."

Down went the flat blocks. Wide and strong. Then more blocks. Then more, more, more. The tower did not wibble. The tower did not wobble. The tower did not fall. The tower stood up tall.

The {hero} clapped small, happy claps. {companion_name} clapped too. The {object_motif} sat close by in the grass.

A soft wind moved through {setting}. The tall tower stayed. It did not fall down. The {object_motif} was there. {companion_name} was there. And the tall, tall tower was there too.

The {hero} gave a big, slow yawn and snuggled down in the soft grass. Time to rest now. Time to close two sleepy eyes.

{refrain}.`, scriptTemplate: `{child_name} wanted to build a tower in {setting}. A tall, tall tower. The tallest tower ever.

So {child_name} grabbed the very first idea. "Big blocks on the bottom!" Up went one block. Up went two. Up went three. Up went four. But the tower leaned. It wibbled and it wobbled. And then the tower fell. Down, down, down. All the blocks went bump.

{child_name} tried again. The very same idea. The same big blocks. The same wibble. The same wobble. The same fall. Down, down, down.

{child_name} tried one more time. Big blocks again. And down, down, down again. Three towers, all fallen down.

{child_name} sat down in {setting} and felt small and cross. The blocks lay all around. {child_name}'s lip wobbled, just like the towers had wobbled.

Then {companion_name} came close and quiet. {companion_name} was carrying the {object_motif}, and set it down in the soft grass.

"Slow down, little one," said {companion_name}. "Your first idea is only one idea. Let us find more. Even silly ones. More ideas, better choices."

{child_name} took a slow breath. In. And out. A calm mind has room to look. There is room for more than one answer.

"Idea one," said {child_name}. "Big blocks."
"Idea two," said {companion_name}. "Little blocks on top."
"Idea three," said {child_name}, and giggled. "A tower made of hats!"
"Idea four," said {child_name}. "A tower made of socks!"
"Idea five," said {companion_name}. "Flat blocks at the bottom. Nice and wide."

So many ideas now! Not just one. {child_name} looked at them all, one by one.

"Flat and wide," said {child_name}. "I pick that one."

Down went the flat blocks. Wide and strong. Then more blocks. Then more, more, more. The tower did not wibble. The tower did not wobble. The tower did not fall. The tower stood up tall.

{child_name} clapped small, happy claps. {companion_name} clapped too. The {object_motif} sat close by in the grass.

A soft wind moved through {setting}. The tall tower stayed. It did not fall down. The {object_motif} was there. {companion_name} was there. And the tall, tall tower was there too.

{child_name} gave a big, slow yawn and snuggled down in the soft grass. Time to rest now. Time to close two sleepy eyes.

{refrain}.` },
  '5-6': { audioTemplate: `The {hero} wanted to build the tallest tower in all of {setting}, a tower so high the birds would have to fly around it.

There was no time to lose, so the {hero} grabbed the very first idea that came along. "Big blocks on the bottom, of course!" Up went one block, up went two, up went three, four, five. The tower climbed higher and higher, and then it leaned. It wobbled one way. It wobbled the other way. And down it came, block after block, clattering all across the ground.

The {hero} frowned and started again, the exact same way. Big blocks, stacked fast, quick as could be. And again the tower leaned, and wobbled, and tumbled down. The {hero} tried a third time, quicker still, and the third tower fell fastest of all. The {hero} sat down in the middle of the fallen blocks and huffed a big huff. It did not feel fair. The {hero} had tried and tried, as hard as anyone possibly could, but trying the very same thing harder had only knocked it down faster.

That was when {companion_name} wandered over, carrying the {object_motif} and humming a little tune. {companion_name} set the {object_motif} gently in the grass and looked at the messy pile of blocks.

"You are working so hard," said {companion_name}. "But you keep using the same one idea, over and over. The first idea that pops up is only ever one idea. Let us gather a whole pile of them first, even the silly ones. More ideas, better choices."

The {hero} let out a slow breath, the way you do when you stop and look. A calm mind, {companion_name} always said, has room for more than one answer, not just the first one that shouts the loudest.

"All right," said the {hero}. "Idea one: big blocks on the bottom."
"Idea two," said {companion_name}. "Little blocks on the bottom."
"Idea three," said the {hero}, starting to grin. "A tower made entirely of hats."
"Idea four," said {companion_name}, grinning back. "A tower you build lying down, then stand up all at once."
"Idea five," said the {hero}, laughing now. "A tower as tall as the moon!"
"Idea six," said {companion_name}. "Flat, wide blocks at the bottom, and skinny ones near the top."

The {hero} could not help laughing. Some of the ideas were clever and some were completely bonkers, but there were so many of them now. The {hero} looked at the whole list, and it felt different. Not one idea, pushing and pushing and falling down. A whole basketful of ideas, waiting to be picked, one by one.

"Idea six," the {hero} decided at last. "Wide at the bottom. That is the strong one." It was funny to think that the winning idea had been sitting quietly in the pile the whole time, waiting for the {hero} to slow down and notice it.

So the {hero} laid the flat blocks down first, spreading them wide and pressing them firm into the ground. Then came the next row, a little smaller, set down slow and careful. Then smaller again. This time the {hero} did not rush at all, checking each row with a gentle push, making sure it was steady before adding the next one on top. Wide and low and patient, the way you build a thing that is meant to last.

The tower rose. It did not lean. It did not wobble. It stood taller than the {hero}, then taller than {companion_name}, then taller than any tower in {setting} had ever been before.

The {hero} stepped back with wide, delighted eyes. {companion_name} gave a soft little cheer and set the {object_motif} down at the foot of the tower, like a flag at the bottom of a castle.

The evening turned quiet and blue over {setting}. One by one the first stars blinked awake above the treetops. The tower stood steady in the hush, tall and sure, and the {hero} leaned against {companion_name} with a happy, tired sigh, watching it hold, and hold, and hold. Somewhere high above {setting} a bird flew past, and this time it really did have to go around.

{refrain}.`, scriptTemplate: `{child_name} wanted to build the tallest tower in all of {setting}, a tower so high the birds would have to fly around it.

There was no time to lose, so {child_name} grabbed the very first idea that came along. "Big blocks on the bottom, of course!" Up went one block, up went two, up went three, four, five. The tower climbed higher and higher, and then it leaned. It wobbled one way. It wobbled the other way. And down it came, block after block, clattering all across the ground.

{child_name} frowned and started again, the exact same way. Big blocks, stacked fast, quick as could be. And again the tower leaned, and wobbled, and tumbled down. {child_name} tried a third time, quicker still, and the third tower fell fastest of all. {child_name} sat down in the middle of the fallen blocks and huffed a big huff. It did not feel fair. {child_name} had tried and tried, as hard as anyone possibly could, but trying the very same thing harder had only knocked it down faster.

That was when {companion_name} wandered over, carrying the {object_motif} and humming a little tune. {companion_name} set the {object_motif} gently in the grass and looked at the messy pile of blocks.

"You are working so hard," said {companion_name}. "But you keep using the same one idea, over and over. The first idea that pops up is only ever one idea. Let us gather a whole pile of them first, even the silly ones. More ideas, better choices."

{child_name} let out a slow breath, the way you do when you stop and look. A calm mind, {companion_name} always said, has room for more than one answer, not just the first one that shouts the loudest.

"All right," said {child_name}. "Idea one: big blocks on the bottom."
"Idea two," said {companion_name}. "Little blocks on the bottom."
"Idea three," said {child_name}, starting to grin. "A tower made entirely of hats."
"Idea four," said {companion_name}, grinning back. "A tower you build lying down, then stand up all at once."
"Idea five," said {child_name}, laughing now. "A tower as tall as the moon!"
"Idea six," said {companion_name}. "Flat, wide blocks at the bottom, and skinny ones near the top."

{child_name} could not help laughing. Some of the ideas were clever and some were completely bonkers, but there were so many of them now. {child_name} looked at the whole list, and it felt different. Not one idea, pushing and pushing and falling down. A whole basketful of ideas, waiting to be picked, one by one.

"Idea six," {child_name} decided at last. "Wide at the bottom. That is the strong one." It was funny to think that the winning idea had been sitting quietly in the pile the whole time, waiting for {child_name} to slow down and notice it.

So {child_name} laid the flat blocks down first, spreading them wide and pressing them firm into the ground. Then came the next row, a little smaller, set down slow and careful. Then smaller again. This time {child_name} did not rush at all, checking each row with a gentle push, making sure it was steady before adding the next one on top. Wide and low and patient, the way you build a thing that is meant to last.

The tower rose. It did not lean. It did not wobble. It stood taller than {child_name}, then taller than {companion_name}, then taller than any tower in {setting} had ever been before.

{child_name} stepped back with wide, delighted eyes. {companion_name} gave a soft little cheer and set the {object_motif} down at the foot of the tower, like a flag at the bottom of a castle.

The evening turned quiet and blue over {setting}. One by one the first stars blinked awake above the treetops. The tower stood steady in the hush, tall and sure, and {child_name} leaned against {companion_name} with a happy, tired sigh, watching it hold, and hold, and hold. Somewhere high above {setting} a bird flew past, and this time it really did have to go around.

{refrain}.` },
  '7-8': { audioTemplate: `The {hero} had one job before the light faded over {setting}: build a tower tall enough to sit the {object_motif} right on top, up where everyone crossing the path would be sure to see it. The {hero} had pictured it a hundred times on the walk over, tall and certain, and could hardly wait to make the picture real.

"Easy," the {hero} said out loud, and grabbed the very first idea that arrived. Big blocks on the bottom, stack them fast, race straight to the top. The {hero} worked in a blur, one block, two, three, a whole leaning column of them climbing higher and higher, until the tower gave a slow, sad tilt and collapsed in a clatter all across the ground.

The {hero} gritted their teeth and did it again. Exactly the same way. Big blocks, stacked fast. And exactly the same, the tower swayed, tipped, and fell. So the {hero} tried a third time, faster still, as if going faster might somehow fix it, and the third tower fell before it was even finished.

The {hero} dropped down onto a flat stone and stared at the mess of scattered blocks, cheeks hot, arms crossed tight. It was supposed to be simple. It had looked simple in their head, a straight tall tower, the {object_motif} resting proudly at the top. Instead there was just a heap, one that everyone crossing {setting} would see just as plainly as any tower.

{companion_name} had been watching from the edge of {setting}, and now came and sat down nearby, the {object_motif} balanced carefully in both hands.

"Three tries, three towers, all the same," said {companion_name}, not unkindly. "What was your plan the third time?"

"Big blocks on the bottom," the {hero} muttered. "Same as always. It is how towers work."

"It is how your last three towers worked," said {companion_name} gently, "right up until they did not." {companion_name} set the {object_motif} down in the grass. "The first idea is not always the best one. It is only the fastest. It runs to the front and shouts before the quieter ideas even arrive. Grab a whole pile of ideas before you pick, wild ones, silly ones, every single one you can think of. More ideas, better choices."

The {hero} almost argued; the words were already halfway up their throat. Then they remembered how to stop and look, the slow breath, the quiet, the room a calm mind keeps open. There is space in there, {companion_name} always said, for more than one answer, if only you do not slam the door on it too fast.

"Fine," said the {hero}, sitting up a little straighter. "Ideas. Big blocks on the bottom. That is one."

"That is one," {companion_name} agreed. "Keep going. Do not stop at the good ones."

"Little blocks on the bottom. A tower made entirely of hats." The {hero} snorted at their own joke, then paused, and found that once the silly ones started, the rest came easier. "Build it lying flat on the ground, then tip the whole thing up. Prop it up with a fence of sticks. Build two short towers instead of one tall one. Or dig a little dip and stand it down inside so it cannot slide. Or, put the wide flat blocks at the bottom and only the skinny ones up near the top."

"Now you have six ideas instead of one," said {companion_name}. "Look at them all together. Which one feels strong?"

The {hero} looked at every idea, lined up in their head like blocks in a row. The hats were silly. Tipping it up would surely knock it over. Digging a dip might take all night and still not work. But the wide, flat bottom, that one felt solid, like a real foundation, like something that would not slide or sway in the wind.

"The wide bottom," the {hero} said slowly. "Big flat blocks first, spread right out. Then smaller ones as it goes up." It was not the most exciting idea in the pile, but it was the one that would hold.

"Then build that one," said {companion_name}, and settled back to watch.

This time the {hero} did not race. They laid the flat blocks down wide, pressing each one until it sat firm and would not rock. Then a smaller row on top. Smaller still. After every single row the {hero} stopped, looked it over, took a slow breath, and only then reached for the next block. It felt strange to go so slowly, almost too slow. It also felt, somehow, far surer than any of the racing had. Slow hands, the {hero} was starting to see, could manage what fast hands never had.

The tower rose, patiently, steadily, and this time it stayed. Straight and strong, higher than the {hero}'s knee, then their waist, then higher than the {hero}'s own head. It was hard to believe it was the very same pile of blocks that had toppled three times over.

At the very top, gently, gently, the {hero} lifted the {object_motif} and set it in place. It did not so much as tremble. It simply sat there, exactly where everyone crossing {setting} would see it, holding still and proud against the sky.

The {hero} let out a long breath and turned to {companion_name} with a grin that would not quit. {companion_name} nudged their shoulder and looked up at the tower with them, saying nothing, just letting it stand there and be seen. For a moment neither of them said anything at all; the tower said plenty, standing straight and certain where three towers had fallen.

The last of the daylight slid low across {setting}, painting the tower warm along one side. The {hero} sat back down on the flat stone, watching it stand tall against the darkening sky, feeling the good, quiet kind of tired settle slowly in.

{refrain}.`, scriptTemplate: `{child_name} had one job before the light faded over {setting}: build a tower tall enough to sit the {object_motif} right on top, up where everyone crossing the path would be sure to see it. {child_name} had pictured it a hundred times on the walk over, tall and certain, and could hardly wait to make the picture real.

"Easy," {child_name} said out loud, and grabbed the very first idea that arrived. Big blocks on the bottom, stack them fast, race straight to the top. {child_name} worked in a blur, one block, two, three, a whole leaning column of them climbing higher and higher, until the tower gave a slow, sad tilt and collapsed in a clatter all across the ground.

{child_name} gritted their teeth and did it again. Exactly the same way. Big blocks, stacked fast. And exactly the same, the tower swayed, tipped, and fell. So {child_name} tried a third time, faster still, as if going faster might somehow fix it, and the third tower fell before it was even finished.

{child_name} dropped down onto a flat stone and stared at the mess of scattered blocks, cheeks hot, arms crossed tight. It was supposed to be simple. It had looked simple in their head, a straight tall tower, the {object_motif} resting proudly at the top. Instead there was just a heap, one that everyone crossing {setting} would see just as plainly as any tower.

{companion_name} had been watching from the edge of {setting}, and now came and sat down nearby, the {object_motif} balanced carefully in both hands.

"Three tries, three towers, all the same," said {companion_name}, not unkindly. "What was your plan the third time?"

"Big blocks on the bottom," {child_name} muttered. "Same as always. It is how towers work."

"It is how your last three towers worked," said {companion_name} gently, "right up until they did not." {companion_name} set the {object_motif} down in the grass. "The first idea is not always the best one. It is only the fastest. It runs to the front and shouts before the quieter ideas even arrive. Grab a whole pile of ideas before you pick, wild ones, silly ones, every single one you can think of. More ideas, better choices."

{child_name} almost argued; the words were already halfway up their throat. Then they remembered how to stop and look, the slow breath, the quiet, the room a calm mind keeps open. There is space in there, {companion_name} always said, for more than one answer, if only you do not slam the door on it too fast.

"Fine," said {child_name}, sitting up a little straighter. "Ideas. Big blocks on the bottom. That is one."

"That is one," {companion_name} agreed. "Keep going. Do not stop at the good ones."

"Little blocks on the bottom. A tower made entirely of hats." {child_name} snorted at their own joke, then paused, and found that once the silly ones started, the rest came easier. "Build it lying flat on the ground, then tip the whole thing up. Prop it up with a fence of sticks. Build two short towers instead of one tall one. Or dig a little dip and stand it down inside so it cannot slide. Or, put the wide flat blocks at the bottom and only the skinny ones up near the top."

"Now you have six ideas instead of one," said {companion_name}. "Look at them all together. Which one feels strong?"

{child_name} looked at every idea, lined up in their head like blocks in a row. The hats were silly. Tipping it up would surely knock it over. Digging a dip might take all night and still not work. But the wide, flat bottom, that one felt solid, like a real foundation, like something that would not slide or sway in the wind.

"The wide bottom," {child_name} said slowly. "Big flat blocks first, spread right out. Then smaller ones as it goes up." It was not the most exciting idea in the pile, but it was the one that would hold.

"Then build that one," said {companion_name}, and settled back to watch.

This time {child_name} did not race. They laid the flat blocks down wide, pressing each one until it sat firm and would not rock. Then a smaller row on top. Smaller still. After every single row {child_name} stopped, looked it over, took a slow breath, and only then reached for the next block. It felt strange to go so slowly, almost too slow. It also felt, somehow, far surer than any of the racing had. Slow hands, {child_name} was starting to see, could manage what fast hands never had.

The tower rose, patiently, steadily, and this time it stayed. Straight and strong, higher than {child_name}'s knee, then their waist, then higher than {child_name}'s own head. It was hard to believe it was the very same pile of blocks that had toppled three times over.

At the very top, gently, gently, {child_name} lifted the {object_motif} and set it in place. It did not so much as tremble. It simply sat there, exactly where everyone crossing {setting} would see it, holding still and proud against the sky.

{child_name} let out a long breath and turned to {companion_name} with a grin that would not quit. {companion_name} nudged their shoulder and looked up at the tower with them, saying nothing, just letting it stand there and be seen. For a moment neither of them said anything at all; the tower said plenty, standing straight and certain where three towers had fallen.

The last of the daylight slid low across {setting}, painting the tower warm along one side. {child_name} sat back down on the flat stone, watching it stand tall against the darkening sky, feeling the good, quiet kind of tired settle slowly in.

{refrain}.` },
  '9-11': { audioTemplate: `By the time the lanterns were lit along the edge of {setting}, the {hero} had already decided exactly how the whole evening was going to go. There was a low wooden stand at the center of the clearing where, each season, one person was chosen to raise the {object_motif} up high, so that everyone gathered could watch it catch the last of the light. This season it was the {hero}'s turn, and the {hero} wanted it to be more than good. The {hero} wanted it to be perfect, raised higher on a tower of blocks than anyone had ever managed before, something people would still be talking about long after the lanterns burned down. It was a small vanity, perhaps, but it had lodged itself firmly behind the {hero}'s ribs and would not be shaken loose.

So the {hero} started the way almost anyone in a hurry starts, with the very first idea that arrived. Big blocks on the bottom, stack them quickly, build straight up toward the sky. It was obvious. It was fast. And for a little while it even seemed to be working, the column climbing steadily past the {hero}'s knee, past the {hero}'s waist, higher and higher, until the whole thing gave a small shiver, leaned, and came down in a long clattering run of blocks across the grass.

The {hero} breathed out sharply through their nose and rebuilt it. The same way, only more so. Bigger blocks on the bottom, packed tighter, stacked faster, as if sheer speed were the one thing that had been missing all along. The tower rose, wavered at exactly the same height as before, and fell in exactly the same tired heap. A third attempt ended even sooner, collapsing before it was so much as waist-high, the blocks spilling out around the {hero}'s knees like something tipped from a cup.

The {hero} sat back on their heels among the wreckage. The lanterns were fully lit now, small and warm all around the clearing, and soon the others would begin drifting in from across {setting} to watch. The {hero} felt the beginning of that hot, tight feeling behind the eyes, not quite tears, just the sharp sting of a plan that simply would not cooperate, and pressed the heels of both hands hard against the cool grass. Trying harder had only made the falling come faster; it was a lesson the wreckage kept trying to teach, and one the {hero} kept refusing to hear.

{companion_name} had been leaning against the old crooked fence post at the edge of the clearing, the {object_motif} tucked in the crook of one arm, watching all of it without a single word. Now they pushed off the post, crossed over, and crouched down beside the ruins of the third tower.

"You have built the same tower three times now," {companion_name} observed mildly. "Which means, really, that you have only had one idea, and you keep asking it, very politely, to behave differently."

"It is the right idea," the {hero} said, hearing how stubborn it sounded even as the words came out. "Big base, build straight up. That is how towers work. That is how they have always worked."

"It is the first idea," said {companion_name}. "That is not the same thing as the right one, though the two are easy to mix up. The first idea is only the quickest to arrive; it shoulders its way to the front and crowds out all the others before you have even had a chance to meet them. So do not choose yet. Gather every idea you can find, the clever ones, the dull ones, the frankly ridiculous ones, and lay them all out where you can see them. More ideas, better choices."

The {hero} wanted, badly, to insist that there simply were no other ideas, that there was only the one way towers were built and that was the end of it. But underneath the wanting was something quieter and older, the thing {companion_name} had taught them a long time ago about stopping and looking, about how a mind that is calm keeps room along its shelves for more than one answer, while a mind in a hurry snatches up the very first thing it finds and slams the door on all the rest. The {hero} let the hurry drain slowly out of their shoulders. Then, a little reluctantly, they began.

"Big blocks on the bottom," the {hero} said. "That is one."

"Go on," said {companion_name}. "Do not stop at the sensible ones."

"Small blocks on the bottom. Blocks stacked in a circle instead of a square. A tower so wide it is really more of a hill." The {hero} was almost enjoying themselves now, the ideas coming faster and stranger the further they got from the sensible ones. "Build the whole thing lying flat on the ground and then somehow tip it upright. Build broad steps instead of a tower and simply carry the {object_motif} up to the top myself. Wedge every block against the next so tightly that not one of them could ever wriggle loose. Balance the whole thing on my own head and simply stand very, very still." A pause, and then, half-laughing at the sheer silliness of it: "Or just lean the entire tower up against that ugly old fence post so that it cannot fall over at all."

{companion_name} did not laugh at the last one. Instead they went very still, and tilted their head to one side. "Say that one again."

"It was a joke," said the {hero}. "You cannot build a proper tower by leaning it against a post. That is practically cheating."

"Is it cheating? Or is it the one idea in the whole pile that actually answers the problem you keep running into?" {companion_name} nodded at the fallen blocks scattered across the grass. "Look carefully at how they failed. Your towers never came down because they were too short. They came down because there was nothing at all to hold the middle of them straight. And a post, driven down through the center, would hold the middle straight."

The {hero} looked at the crooked old post, then back at the blocks, and felt the idea slowly turn over and click into place. The silliest suggestion on the entire list, the one they had tossed out purely as a joke, was quietly, unmistakably becoming the best one there. It was a strange feeling, being outdone by your own worst idea, and the {hero} almost laughed out loud.

They did not race this time. The {hero} worked the post upright into the soft ground, wiggling it deeper and pressing the earth firm around its base until it stood true and would not budge. Then they began to build around it, wide flat blocks first, laid out in a careful ring, each single row pressed down and tested with a fingertip before the next one was allowed to go on. The post ran up through the very heart of the tower like a hidden spine. Every time the growing stack wanted to lean, the way all the others had leaned, the post was simply there, patient and unmoving, holding it honest. It asked nothing of the blocks except that they stack; it did the leaning-back for them.

Row by row the tower climbed, past the {hero}'s waist, past their shoulders, past the top of their head, and it did not shiver, and it did not sway, not even once. The {hero} worked slowly, almost tenderly, and the slowness no longer felt like losing time. It felt like the very thing that was making it stand. At the top the {hero} reached up on their toes and settled the {object_motif} carefully into place, and it sat there steady as anything, perfectly still, exactly where everyone crossing {setting} would be certain to see it.

The first of the others were wandering into the clearing now, pointing up at it, murmuring to one another. The {hero} barely heard them. They turned instead to {companion_name}, who was already looking back with the particular, unsurprised warmth of someone who had somehow known all along that the silly idea was worth a second listen. The {hero} thought of all the towers that had come down, and how not one of them had fallen for want of effort.

The clearing had filled with quiet voices and warm, wavering light. Overhead the sky had gone deep and soft and endless. The lanterns held their small steady flames, the tower held the {object_motif} without the smallest tremble, and the {hero} let out one long, slow breath and stood quietly beside {companion_name}, not tired exactly, but ready, at last, for the long day to fold itself gently closed.

{refrain}.`, scriptTemplate: `By the time the lanterns were lit along the edge of {setting}, {child_name} had already decided exactly how the whole evening was going to go. There was a low wooden stand at the center of the clearing where, each season, one person was chosen to raise the {object_motif} up high, so that everyone gathered could watch it catch the last of the light. This season it was {child_name}'s turn, and {child_name} wanted it to be more than good. {child_name} wanted it to be perfect, raised higher on a tower of blocks than anyone had ever managed before, something people would still be talking about long after the lanterns burned down. It was a small vanity, perhaps, but it had lodged itself firmly behind {child_name}'s ribs and would not be shaken loose.

So {child_name} started the way almost anyone in a hurry starts, with the very first idea that arrived. Big blocks on the bottom, stack them quickly, build straight up toward the sky. It was obvious. It was fast. And for a little while it even seemed to be working, the column climbing steadily past {child_name}'s knee, past {child_name}'s waist, higher and higher, until the whole thing gave a small shiver, leaned, and came down in a long clattering run of blocks across the grass.

{child_name} breathed out sharply through their nose and rebuilt it. The same way, only more so. Bigger blocks on the bottom, packed tighter, stacked faster, as if sheer speed were the one thing that had been missing all along. The tower rose, wavered at exactly the same height as before, and fell in exactly the same tired heap. A third attempt ended even sooner, collapsing before it was so much as waist-high, the blocks spilling out around {child_name}'s knees like something tipped from a cup.

{child_name} sat back on their heels among the wreckage. The lanterns were fully lit now, small and warm all around the clearing, and soon the others would begin drifting in from across {setting} to watch. {child_name} felt the beginning of that hot, tight feeling behind the eyes, not quite tears, just the sharp sting of a plan that simply would not cooperate, and pressed the heels of both hands hard against the cool grass. Trying harder had only made the falling come faster; it was a lesson the wreckage kept trying to teach, and one {child_name} kept refusing to hear.

{companion_name} had been leaning against the old crooked fence post at the edge of the clearing, the {object_motif} tucked in the crook of one arm, watching all of it without a single word. Now they pushed off the post, crossed over, and crouched down beside the ruins of the third tower.

"You have built the same tower three times now," {companion_name} observed mildly. "Which means, really, that you have only had one idea, and you keep asking it, very politely, to behave differently."

"It is the right idea," {child_name} said, hearing how stubborn it sounded even as the words came out. "Big base, build straight up. That is how towers work. That is how they have always worked."

"It is the first idea," said {companion_name}. "That is not the same thing as the right one, though the two are easy to mix up. The first idea is only the quickest to arrive; it shoulders its way to the front and crowds out all the others before you have even had a chance to meet them. So do not choose yet. Gather every idea you can find, the clever ones, the dull ones, the frankly ridiculous ones, and lay them all out where you can see them. More ideas, better choices."

{child_name} wanted, badly, to insist that there simply were no other ideas, that there was only the one way towers were built and that was the end of it. But underneath the wanting was something quieter and older, the thing {companion_name} had taught them a long time ago about stopping and looking, about how a mind that is calm keeps room along its shelves for more than one answer, while a mind in a hurry snatches up the very first thing it finds and slams the door on all the rest. {child_name} let the hurry drain slowly out of their shoulders. Then, a little reluctantly, they began.

"Big blocks on the bottom," {child_name} said. "That is one."

"Go on," said {companion_name}. "Do not stop at the sensible ones."

"Small blocks on the bottom. Blocks stacked in a circle instead of a square. A tower so wide it is really more of a hill." {child_name} was almost enjoying themselves now, the ideas coming faster and stranger the further they got from the sensible ones. "Build the whole thing lying flat on the ground and then somehow tip it upright. Build broad steps instead of a tower and simply carry the {object_motif} up to the top myself. Wedge every block against the next so tightly that not one of them could ever wriggle loose. Balance the whole thing on my own head and simply stand very, very still." A pause, and then, half-laughing at the sheer silliness of it: "Or just lean the entire tower up against that ugly old fence post so that it cannot fall over at all."

{companion_name} did not laugh at the last one. Instead they went very still, and tilted their head to one side. "Say that one again."

"It was a joke," said {child_name}. "You cannot build a proper tower by leaning it against a post. That is practically cheating."

"Is it cheating? Or is it the one idea in the whole pile that actually answers the problem you keep running into?" {companion_name} nodded at the fallen blocks scattered across the grass. "Look carefully at how they failed. Your towers never came down because they were too short. They came down because there was nothing at all to hold the middle of them straight. And a post, driven down through the center, would hold the middle straight."

{child_name} looked at the crooked old post, then back at the blocks, and felt the idea slowly turn over and click into place. The silliest suggestion on the entire list, the one they had tossed out purely as a joke, was quietly, unmistakably becoming the best one there. It was a strange feeling, being outdone by your own worst idea, and {child_name} almost laughed out loud.

They did not race this time. {child_name} worked the post upright into the soft ground, wiggling it deeper and pressing the earth firm around its base until it stood true and would not budge. Then they began to build around it, wide flat blocks first, laid out in a careful ring, each single row pressed down and tested with a fingertip before the next one was allowed to go on. The post ran up through the very heart of the tower like a hidden spine. Every time the growing stack wanted to lean, the way all the others had leaned, the post was simply there, patient and unmoving, holding it honest. It asked nothing of the blocks except that they stack; it did the leaning-back for them.

Row by row the tower climbed, past {child_name}'s waist, past their shoulders, past the top of their head, and it did not shiver, and it did not sway, not even once. {child_name} worked slowly, almost tenderly, and the slowness no longer felt like losing time. It felt like the very thing that was making it stand. At the top {child_name} reached up on their toes and settled the {object_motif} carefully into place, and it sat there steady as anything, perfectly still, exactly where everyone crossing {setting} would be certain to see it.

The first of the others were wandering into the clearing now, pointing up at it, murmuring to one another. {child_name} barely heard them. They turned instead to {companion_name}, who was already looking back with the particular, unsurprised warmth of someone who had somehow known all along that the silly idea was worth a second listen. {child_name} thought of all the towers that had come down, and how not one of them had fallen for want of effort.

The clearing had filled with quiet voices and warm, wavering light. Overhead the sky had gone deep and soft and endless. The lanterns held their small steady flames, the tower held the {object_motif} without the smallest tremble, and {child_name} let out one long, slow breath and stood quietly beside {companion_name}, not tired exactly, but ready, at last, for the long day to fold itself gently closed.

{refrain}.` }
},
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
    learningBeat: 'Try, watch, learn, adjust',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} sat down by {setting}. It was a quiet night. The {hero} loved to fix things. The {hero} had a little problem to solve. And the {hero} had three good ideas. The {hero} wanted to do it well.

But the {hero} could not pick just one. Which idea was the right one? The {hero} sat very still and thought.

"I want to be sure," said the {hero}. "I want to know before I start."

{companion_name} came and sat down too. {companion_name} was a good friend.

"You do not have to be sure," said {companion_name}. "You can try one idea. Then you watch what happens. Try, watch, learn, adjust."

The {hero} held the {object_motif}. The {object_motif} felt warm in one hand. That felt nice.

"Okay," said the {hero}. "I will try my first idea."

So the {hero} tried the first idea. But it did not work. And that was okay. Nothing was broken.

The {hero} took a slow breath. The {hero} thought about what just happened. The first idea was too big. Now the {hero} could see that.

"Now I know a little more," said the {hero}.

The {hero} tried the second idea. And a little bit of it worked! The {hero} sat up. The {hero} smiled a big smile.

{companion_name} nodded slowly.

"Keep going," said {companion_name}. "You are learning as you go."

The {hero} tried one more time. The {hero} changed one small thing. Just one. And this time, it worked! The {hero} was not scared now. Trying was fun. The {hero} clapped for joy.

The {hero} laughed. {companion_name} laughed too. They were so happy by {setting}.

The {hero} looked at all three ideas. Each try had helped. Each try was worth it. Even the tries that did not work helped the {hero} learn.

The {hero} did not know at the start. The {hero} was not sure at all. But the {hero} tried. And then the {hero} learned. Step by step. Try by try. The {hero} was proud, deep inside.

Now the little problem was all done. The night was soft and dark. Sleepy stars blinked over {setting}. The {hero} held the {object_motif} close, and yawned a big sleepy yawn.

The {hero} felt calm. The {hero} felt brave. Soon the {hero} would close both eyes. Tomorrow, the {hero} would try again.

{refrain}.`,
    scriptTemplate: `{child_name} sat down by {setting}. It was a quiet night. {child_name} loved to fix things. {child_name} had a little problem to solve. And {child_name} had three good ideas. {child_name} wanted to do it well.

But {child_name} could not pick just one. Which idea was the right one? {child_name} sat very still and thought.

"I want to be sure," said {child_name}. "I want to know before I start."

{companion_name} came and sat down too. {companion_name} was a good friend.

"You do not have to be sure," said {companion_name}. "You can try one idea. Then you watch what happens. Try, watch, learn, adjust."

{child_name} held the {object_motif}. The {object_motif} felt warm in one hand. That felt nice.

"Okay," said {child_name}. "I will try my first idea."

So {child_name} tried the first idea. But it did not work. And that was okay. Nothing was broken.

{child_name} took a slow breath. {child_name} thought about what just happened. The first idea was too big. Now {child_name} could see that.

"Now I know a little more," said {child_name}.

{child_name} tried the second idea. And a little bit of it worked! {child_name} sat up. {child_name} smiled a big smile.

{companion_name} nodded slowly.

"Keep going," said {companion_name}. "You are learning as you go."

{child_name} tried one more time. {child_name} changed one small thing. Just one. And this time, it worked! {child_name} was not scared now. Trying was fun. {child_name} clapped for joy.

{child_name} laughed. {companion_name} laughed too. They were so happy by {setting}.

{child_name} looked at all three ideas. Each try had helped. Each try was worth it. Even the tries that did not work helped {child_name} learn.

{child_name} did not know at the start. {child_name} was not sure at all. But {child_name} tried. And then {child_name} learned. Step by step. Try by try. {child_name} was proud, deep inside.

Now the little problem was all done. The night was soft and dark. Sleepy stars blinked over {setting}. {child_name} held the {object_motif} close, and yawned a big sleepy yawn.

{child_name} felt calm. {child_name} felt brave. Soon {child_name} would close both eyes. Tomorrow, {child_name} would try again.

{refrain}.`,
  },
  '5-6': {
    audioTemplate: `The {hero} stood at the edge of {setting} with a puzzle to solve, and three ideas were buzzing in the {hero}'s head. Any one of them might work. But which one? The {hero} did not want to pick the wrong one and waste it.

The {hero} counted them off on one hand. Plan one was big and bold. Plan two was quiet and careful. Plan three was somewhere in between. Each one looked good on the inside of the {hero}'s head. That was the trouble, because they all looked good, and none of them had been tested.

So the {hero} did nothing at all. The {hero} just stood there, turning the {object_motif} over and over.

{companion_name} wandered over, curious. "You have that look," {companion_name} said. "The look of someone with too many ideas and no way to choose."

"That's exactly it," said the {hero}. "I have three plans. But I can't be sure which one is right. What if I pick and it's the wrong one?"

{companion_name} sat down on a rock. "Here is the part nobody tells you," {companion_name} said gently. "You are not supposed to be sure yet. You find out by doing. Try, watch, learn, adjust."

The {hero} frowned. "But what if it doesn't work?"

"Then it teaches you something you did not know," said {companion_name}. "That is not a waste."

The {hero} looked down at the {object_motif} resting in one palm. It was a small, steadying weight. Slowly, the {hero} took a breath.

"Okay," the {hero} said. "First idea."

The {hero} tried the first idea, the biggest and boldest one. It flopped. It didn't work at all. But the sky did not fall, and {companion_name} did not laugh. The {hero} just watched what happened and thought about it.

The {hero} waited for the sting of getting it wrong. But it did not really sting. It was more like a clue. The first idea had promised so much and given so little, and now the {hero} understood why.

"See?" said {companion_name}. "Now you know one thing that is true. The first plan was too much at once."

The {hero} nodded slowly. That was actually useful. The {hero} tried the second idea, smaller this time. And this one half worked. Part of it went well, and part of it wobbled.

The {hero} felt a spark of excitement. "That bit worked! Did you see? The middle part worked."

"I saw," said {companion_name}. "So keep the part that worked, and fix the part that didn't."

The {hero}'s hands were steadier now. Each try had made the puzzle a little smaller and a little clearer. The {hero} took the good middle part and joined it to a piece of the third idea. Then the {hero} tried one more time.

And it worked. Not perfectly, but really and truly, it worked. For a moment the {hero} just looked at the finished thing, hardly believing it had come together. It was not the plan the {hero} started with. It was better, because it was real.

The {hero} let out a long, happy breath. "I didn't know at the start," the {hero} said, almost surprised. "I found out by going."

The {hero} looked at the three ideas, all used up now, and did not feel silly about the two that failed. They had been worth trying. Without them, the {hero} would never have found the piece that fit.

{companion_name} smiled. "That is how most real things get solved."

The two of them sat together while the wind moved softly across {setting}. The evening was soft and slow. Somewhere far off, a night bird called once and went quiet. The {hero} was not frozen anymore, and that felt good.

The {hero} turned the {object_motif} once more, then tucked it away. Tomorrow there would be new puzzles, and now the {hero} knew a way in. Not by being sure. By beginning.

The moon climbed high over {setting}, calm and round. The {hero} yawned, warm and easy, ready for sleep.

{refrain}.`,
    scriptTemplate: `{child_name} stood at the edge of {setting} with a puzzle to solve, and three ideas were buzzing in {child_name}'s head. Any one of them might work. But which one? {child_name} did not want to pick the wrong one and waste it.

{child_name} counted them off on one hand. Plan one was big and bold. Plan two was quiet and careful. Plan three was somewhere in between. Each one looked good on the inside of {child_name}'s head. That was the trouble, because they all looked good, and none of them had been tested.

So {child_name} did nothing at all. {child_name} just stood there, turning the {object_motif} over and over.

{companion_name} wandered over, curious. "You have that look," {companion_name} said. "The look of someone with too many ideas and no way to choose."

"That's exactly it," said {child_name}. "I have three plans. But I can't be sure which one is right. What if I pick and it's the wrong one?"

{companion_name} sat down on a rock. "Here is the part nobody tells you," {companion_name} said gently. "You are not supposed to be sure yet. You find out by doing. Try, watch, learn, adjust."

{child_name} frowned. "But what if it doesn't work?"

"Then it teaches you something you did not know," said {companion_name}. "That is not a waste."

{child_name} looked down at the {object_motif} resting in one palm. It was a small, steadying weight. Slowly, {child_name} took a breath.

"Okay," {child_name} said. "First idea."

{child_name} tried the first idea, the biggest and boldest one. It flopped. It didn't work at all. But the sky did not fall, and {companion_name} did not laugh. {child_name} just watched what happened and thought about it.

{child_name} waited for the sting of getting it wrong. But it did not really sting. It was more like a clue. The first idea had promised so much and given so little, and now {child_name} understood why.

"See?" said {companion_name}. "Now you know one thing that is true. The first plan was too much at once."

{child_name} nodded slowly. That was actually useful. {child_name} tried the second idea, smaller this time. And this one half worked. Part of it went well, and part of it wobbled.

{child_name} felt a spark of excitement. "That bit worked! Did you see? The middle part worked."

"I saw," said {companion_name}. "So keep the part that worked, and fix the part that didn't."

{child_name}'s hands were steadier now. Each try had made the puzzle a little smaller and a little clearer. {child_name} took the good middle part and joined it to a piece of the third idea. Then {child_name} tried one more time.

And it worked. Not perfectly, but really and truly, it worked. For a moment {child_name} just looked at the finished thing, hardly believing it had come together. It was not the plan {child_name} started with. It was better, because it was real.

{child_name} let out a long, happy breath. "I didn't know at the start," {child_name} said, almost surprised. "I found out by going."

{child_name} looked at the three ideas, all used up now, and did not feel silly about the two that failed. They had been worth trying. Without them, {child_name} would never have found the piece that fit.

{companion_name} smiled. "That is how most real things get solved."

The two of them sat together while the wind moved softly across {setting}. The evening was soft and slow. Somewhere far off, a night bird called once and went quiet. {child_name} was not frozen anymore, and that felt good.

{child_name} turned the {object_motif} once more, then tucked it away. Tomorrow there would be new puzzles, and now {child_name} knew a way in. Not by being sure. By beginning.

The moon climbed high over {setting}, calm and round. {child_name} yawned, warm and easy, ready for sleep.

{refrain}.`,
  },
  '7-8': {
    audioTemplate: `The {hero} had been standing at the edge of {setting} for a long time, and had not moved an inch.

It was not that the {hero} had no ideas. It was the opposite. There were three of them, lined up in the {hero}'s mind like doors, and every single one might open onto the answer. Or onto nothing. That was the problem. The {hero} could not tell which door was the right door, and picking wrong felt worse than not picking at all.

Each plan had grown up quietly in the {hero}'s head over the last few days, and each one felt, from the inside, completely convincing. That was the strange part. On the inside, all three of them worked perfectly. They only turned shaky the moment the {hero} imagined actually trying one and finding out for real.

So the {hero} stood there, thumb rubbing slow circles on the {object_motif}, going nowhere.

{companion_name} came up quietly and followed the {hero}'s stare out across {setting}. "You've been standing here since the light changed," {companion_name} said. "What's the holdup?"

"I have three ways to fix this," the {hero} said. "That's the trouble. I keep running them in my head, and I can't tell which one actually works. What if I choose, and it's the wrong one, and I've wasted the try?"

{companion_name} thought about that, then sat down on the warm ground. "Here's the thing you're missing," {companion_name} said. "You're trying to be certain before you begin. But certainty isn't something you have first. It's something you earn by looking. Try, watch, learn, adjust, that's the whole trick."

The {hero} turned the words over. It sounded almost too simple, and also a little bit frightening.

"So I just guess?" the {hero} asked.

"Not a guess. A test," said {companion_name}. "Pick the idea you believe in most. Run it. Then watch what really happens, not what you hoped would happen. The world will tell you if you're warm or cold."

The {hero} looked at the {object_motif} in one hand, then back at {setting}. Something in the {hero}'s shoulders loosened, just a little.

"First idea, then," the {hero} said. "The big one."

The {hero} tried it. It was the boldest plan, the one that would fix everything in a single stroke, and it simply did not hold. Halfway through, it came apart. The {hero} froze, waiting to feel foolish.

But {companion_name} did not laugh, and the sky did not fall. There was just the quiet, and the fizzled plan, and a small new fact sitting in the middle of it.

"Okay," the {hero} said slowly. "That didn't work. But now I see why. It was too much all at once."

"Now you know something you didn't know a minute ago," {companion_name} said. "That cost you one try. It was worth it."

And oddly, it had been. The {hero} had expected the wrong idea to feel like a door slamming. Instead it felt like a door opening, just a crack, onto a room the {hero} had not been able to see before. One plan was gone, but the {hero} understood more than a moment ago, and understanding more was the point.

The {hero} nodded, and this time reached for the second idea, smaller, quieter, less flashy. The {hero} tried it carefully, watching the whole way through.

And this one half worked.

The first part went beautifully. The middle held. Then, near the end, it wobbled and slipped, and the {hero}'s chest gave a hopeful little kick anyway, because half was so much more than none. A whole failure told you almost nothing. A half told you exactly where the good part ended and the trouble began.

"Did you see that?" the {hero} said, turning around. "The start of it worked. It only fell apart at the end."

"I saw," said {companion_name}. "So you don't throw the whole thing out. You keep the part that stood up, and you fix the part that didn't."

The {hero} chewed a lip, thinking. The good beginning of the second idea, joined to the clever ending of the third idea, would those two fit together? A day ago the {hero} would have argued the point in circles for an hour. Now the question felt smaller, almost friendly. There was only one way to find out, and the {hero} was starting to like that way.

The {hero} tried again.

This time the {hero} took the strong opening that had worked, and instead of the ending that had slipped, borrowed the last piece from the third plan. The {hero} moved slowly, watching each step, ready to change course.

It held.

It was not perfect and it was not pretty, but it worked, truly worked, built out of two failed tries and one good idea stitched together.

The {hero} let out a breath that had been held for far too long. "I didn't know which one was right," the {hero} said, half laughing. "I still didn't know after the first one. I found the answer by building it."

{companion_name} grinned and stood, brushing off. "That's how the real ones get solved. Not by knowing. By starting."

The two of them stayed a while as the last light drained off {setting} and the first cool of evening came in. The {hero} turned the {object_motif} over once, thoughtful, then closed a hand around it.

Tomorrow there would be another puzzle, and probably another after that. But the frozen feeling, the standing-still-forever feeling, had loosened its grip. Now the {hero} had a way in. Not a magic answer. Just a place to begin, and the patience to let each try teach the next.

A single early star pricked the sky above {setting}. The {hero} yawned, loose and easy and ready for the dark.

{refrain}.`,
    scriptTemplate: `{child_name} had been standing at the edge of {setting} for a long time, and had not moved an inch.

It was not that {child_name} had no ideas. It was the opposite. There were three of them, lined up in {child_name}'s mind like doors, and every single one might open onto the answer. Or onto nothing. That was the problem. {child_name} could not tell which door was the right door, and picking wrong felt worse than not picking at all.

Each plan had grown up quietly in {child_name}'s head over the last few days, and each one felt, from the inside, completely convincing. That was the strange part. On the inside, all three of them worked perfectly. They only turned shaky the moment {child_name} imagined actually trying one and finding out for real.

So {child_name} stood there, thumb rubbing slow circles on the {object_motif}, going nowhere.

{companion_name} came up quietly and followed {child_name}'s stare out across {setting}. "You've been standing here since the light changed," {companion_name} said. "What's the holdup?"

"I have three ways to fix this," {child_name} said. "That's the trouble. I keep running them in my head, and I can't tell which one actually works. What if I choose, and it's the wrong one, and I've wasted the try?"

{companion_name} thought about that, then sat down on the warm ground. "Here's the thing you're missing," {companion_name} said. "You're trying to be certain before you begin. But certainty isn't something you have first. It's something you earn by looking. Try, watch, learn, adjust, that's the whole trick."

{child_name} turned the words over. It sounded almost too simple, and also a little bit frightening.

"So I just guess?" {child_name} asked.

"Not a guess. A test," said {companion_name}. "Pick the idea you believe in most. Run it. Then watch what really happens, not what you hoped would happen. The world will tell you if you're warm or cold."

{child_name} looked at the {object_motif} in one hand, then back at {setting}. Something in {child_name}'s shoulders loosened, just a little.

"First idea, then," {child_name} said. "The big one."

{child_name} tried it. It was the boldest plan, the one that would fix everything in a single stroke, and it simply did not hold. Halfway through, it came apart. {child_name} froze, waiting to feel foolish.

But {companion_name} did not laugh, and the sky did not fall. There was just the quiet, and the fizzled plan, and a small new fact sitting in the middle of it.

"Okay," {child_name} said slowly. "That didn't work. But now I see why. It was too much all at once."

"Now you know something you didn't know a minute ago," {companion_name} said. "That cost you one try. It was worth it."

And oddly, it had been. {child_name} had expected the wrong idea to feel like a door slamming. Instead it felt like a door opening, just a crack, onto a room {child_name} had not been able to see before. One plan was gone, but {child_name} understood more than a moment ago, and understanding more was the point.

{child_name} nodded, and this time reached for the second idea, smaller, quieter, less flashy. {child_name} tried it carefully, watching the whole way through.

And this one half worked.

The first part went beautifully. The middle held. Then, near the end, it wobbled and slipped, and {child_name}'s chest gave a hopeful little kick anyway, because half was so much more than none. A whole failure told you almost nothing. A half told you exactly where the good part ended and the trouble began.

"Did you see that?" {child_name} said, turning around. "The start of it worked. It only fell apart at the end."

"I saw," said {companion_name}. "So you don't throw the whole thing out. You keep the part that stood up, and you fix the part that didn't."

{child_name} chewed a lip, thinking. The good beginning of the second idea, joined to the clever ending of the third idea, would those two fit together? A day ago {child_name} would have argued the point in circles for an hour. Now the question felt smaller, almost friendly. There was only one way to find out, and {child_name} was starting to like that way.

{child_name} tried again.

This time {child_name} took the strong opening that had worked, and instead of the ending that had slipped, borrowed the last piece from the third plan. {child_name} moved slowly, watching each step, ready to change course.

It held.

It was not perfect and it was not pretty, but it worked, truly worked, built out of two failed tries and one good idea stitched together.

{child_name} let out a breath that had been held for far too long. "I didn't know which one was right," {child_name} said, half laughing. "I still didn't know after the first one. I found the answer by building it."

{companion_name} grinned and stood, brushing off. "That's how the real ones get solved. Not by knowing. By starting."

The two of them stayed a while as the last light drained off {setting} and the first cool of evening came in. {child_name} turned the {object_motif} over once, thoughtful, then closed a hand around it.

Tomorrow there would be another puzzle, and probably another after that. But the frozen feeling, the standing-still-forever feeling, had loosened its grip. Now {child_name} had a way in. Not a magic answer. Just a place to begin, and the patience to let each try teach the next.

A single early star pricked the sky above {setting}. {child_name} yawned, loose and easy and ready for the dark.

{refrain}.`,
  },
  '9-11': {
    audioTemplate: `The {hero} had come to the edge of {setting} to solve the thing, and instead had spent the better part of an hour not solving it.

The trouble was not a lack of ideas. If anything, the {hero} had too many. Three separate plans had assembled themselves over the past days, each one detailed, each one plausible, each one glinting with the private certainty of a thing that has never actually been tested. In the {hero}'s head, all three worked flawlessly. That was exactly why the {hero} could not move. As long as none of them had been tried, all of them stayed perfect. The moment the {hero} chose one, two of them would become the ideas that were not chosen, and the chosen one would have to survive contact with the real world, where it might, embarrassingly, simply fail.

There was, the {hero} knew, something almost cowardly about it, and something almost greedy too. As long as the {hero} refused to decide, the {hero} got to keep all three victories at once, the three imagined moments where each plan clicked perfectly into place. Deciding meant trading three maybes for one real thing that might not work. Put that way, standing still felt less like caution and more like a very slow way of getting nowhere.

So the {hero} stood there at the edge of {setting}, turning the {object_motif} over and over in one hand, wearing a groove into the evening, choosing nothing because choosing felt like losing.

{companion_name} arrived without fuss, the way {companion_name} always did, and stood alongside the {hero} for a while before saying anything at all. Together they watched the light go long and amber over {setting}.

"You've made three plans," {companion_name} said at last. It was not really a question.

The {hero} glanced sideways, half expecting to be teased, and found none of it. {companion_name} was simply waiting, the way patient people wait, with no particular hurry and no hidden opinion pressing to get out.

"Three," the {hero} admitted. "And I can't tell which one is right. Every time I pick one, I think of a reason the others might be better. So I put it down and pick up the next, and then I doubt that one too. I've been going in circles for an hour."

"Because you're waiting to be sure," said {companion_name}. "You think if you think hard enough, certainty will arrive, and then it will be safe to begin. But it doesn't come in that order. You don't think your way to being sure and then act. You act, and you watch, and the watching is what makes you sure. Try, watch, learn, adjust. That's the whole of it."

The {hero} frowned out across {setting}. "But if I try the wrong one, I've wasted it. Everyone will see it didn't work."

"A try that doesn't work isn't a waste, and it isn't a verdict on you," {companion_name} said. "It's an answer. It's the world responding to a question you asked. The only real waste is standing here so afraid of a wrong answer that you never gather a single true one."

For a long moment the {hero} said nothing. The {object_motif} was warm now from being held so long. Something about the phrase, the world responding to a question, loosened a knot that all the {hero}'s careful thinking had only pulled tighter.

The {hero} weighed the {object_motif} in one palm, as if it might tip the decision by itself. It did not, of course. It only sat there, patient, the way a held thing does when the person holding it is finally about to stop stalling.

"Fine," the {hero} said. "The first plan. The big one. I'll try it."

It was the boldest of the three, the one meant to solve everything in a single decisive stroke, and the {hero} committed to it fully. For a few seconds it looked magnificent. Then, under its own ambition, it buckled and came apart in the {hero}'s hands.

The {hero} stood very still, braced for the hot rush of having failed in front of someone.

It did not come. {companion_name} did not wince or look away. The plan had failed and the world had gone on exactly as before, unbothered and calm, and in the space where the {hero}'s embarrassment should have been there sat instead a small, clear, unexpected fact.

"It fell apart in the middle," the {hero} said slowly, thinking aloud now rather than sinking. "It was too much at once. It tried to do everything, so it couldn't hold any of it."

"Listen to you," said {companion_name}. "A minute ago you knew nothing. Now you know that. One try bought it for you."

The {hero} noticed, with a kind of quiet surprise, that the noticing did not hurt. The dread had all been in the waiting. The actual failure, once it arrived, turned out to be smaller and far more useful than the enormous shapeless fear that had guarded it, and the {hero} filed that away as its own small discovery, separate from the puzzle entirely.

The {hero} turned to the second plan almost without deciding to, the smaller, quieter one, the one that attempted less but attempted it more carefully. This time the {hero} moved deliberately, watching each part as it went, the way you watch a bridge you are not yet certain will take your weight.

And this time it half worked.

That was the strange, thrilling part. The opening was clean. The middle held beautifully, better than the {hero} had let itself hope. And then, near the very end, the whole thing lost its footing and slid, and the {hero} caught it just enough to feel precisely where and how it had gone wrong. Not a failure and not a success. A half, which, the {hero} was beginning to understand, was worth more than either, because a half tells you exactly which part to keep and which part to replace.

"Did you see where it went?" the {hero} said, quick and bright. "The beginning was right. It only broke at the very end."

"I saw," {companion_name} said. "So don't scrap it. Keep the half that stood up, and go find something better for the half that didn't."

The {hero} was already thinking it through. The strong opening of the second plan, and for the ending, the clever finish from the third plan, the piece the {hero} had almost discarded without a look. Would they join? There was, the {hero} realised with something close to a laugh, only one honest way to find out.

The third try was different from the first two, because the {hero} was no longer hoping. The {hero} was building, taking the proven opening, splicing on the borrowed ending, moving slowly and watching every seam, prepared to stop and change the instant anything slipped.

The {hero} worked without hurry, checking each join before trusting the next, and more than once paused to undo a step that had felt wrong and try it a slightly different way. This was not the grand single stroke of the first plan. It was slower and humbler and a great deal more honest, and somewhere in the middle of it the {hero} realised the fear was simply gone, replaced by the plain absorbing interest of a person watching an idea meet the world and negotiate with it.

Nothing slipped.

It was not elegant. It carried the marks of every failure that had gone into it, a solution assembled from the wreckage of two others and one piece rescued from a plan the {hero} had nearly ignored. But it held, and it worked, and it was entirely, unmistakably real in a way that none of the three flawless plans in the {hero}'s head had ever been.

The {hero} breathed out, long and slow, and felt the last of the frozen hour finally let go.

"I never did figure out which one was right," the {hero} said, wonder and amusement mixed together. "I stopped trying to. I just started, and each try told me where to go next."

{companion_name} smiled and settled back on both hands, looking pleased and saying nothing, letting the {hero} keep the moment whole.

The evening had come down properly now over {setting}, the colours gone soft and deep. The {hero} closed one hand around the {object_motif} and thought about tomorrow, which would bring another puzzle, and the day after that, which would bring another still. The frozen, careful, slightly terrified version of the {hero} who had stood at this edge an hour ago already felt like someone the {hero} was quietly leaving behind.

Far out over {setting}, the dark settled kind and unhurried, and the {hero}'s eyes grew heavy at last.

{refrain}.`,
    scriptTemplate: `{child_name} had come to the edge of {setting} to solve the thing, and instead had spent the better part of an hour not solving it.

The trouble was not a lack of ideas. If anything, {child_name} had too many. Three separate plans had assembled themselves over the past days, each one detailed, each one plausible, each one glinting with the private certainty of a thing that has never actually been tested. In {child_name}'s head, all three worked flawlessly. That was exactly why {child_name} could not move. As long as none of them had been tried, all of them stayed perfect. The moment {child_name} chose one, two of them would become the ideas that were not chosen, and the chosen one would have to survive contact with the real world, where it might, embarrassingly, simply fail.

There was, {child_name} knew, something almost cowardly about it, and something almost greedy too. As long as {child_name} refused to decide, {child_name} got to keep all three victories at once, the three imagined moments where each plan clicked perfectly into place. Deciding meant trading three maybes for one real thing that might not work. Put that way, standing still felt less like caution and more like a very slow way of getting nowhere.

So {child_name} stood there at the edge of {setting}, turning the {object_motif} over and over in one hand, wearing a groove into the evening, choosing nothing because choosing felt like losing.

{companion_name} arrived without fuss, the way {companion_name} always did, and stood alongside {child_name} for a while before saying anything at all. Together they watched the light go long and amber over {setting}.

"You've made three plans," {companion_name} said at last. It was not really a question.

{child_name} glanced sideways, half expecting to be teased, and found none of it. {companion_name} was simply waiting, the way patient people wait, with no particular hurry and no hidden opinion pressing to get out.

"Three," {child_name} admitted. "And I can't tell which one is right. Every time I pick one, I think of a reason the others might be better. So I put it down and pick up the next, and then I doubt that one too. I've been going in circles for an hour."

"Because you're waiting to be sure," said {companion_name}. "You think if you think hard enough, certainty will arrive, and then it will be safe to begin. But it doesn't come in that order. You don't think your way to being sure and then act. You act, and you watch, and the watching is what makes you sure. Try, watch, learn, adjust. That's the whole of it."

{child_name} frowned out across {setting}. "But if I try the wrong one, I've wasted it. Everyone will see it didn't work."

"A try that doesn't work isn't a waste, and it isn't a verdict on you," {companion_name} said. "It's an answer. It's the world responding to a question you asked. The only real waste is standing here so afraid of a wrong answer that you never gather a single true one."

For a long moment {child_name} said nothing. The {object_motif} was warm now from being held so long. Something about the phrase, the world responding to a question, loosened a knot that all {child_name}'s careful thinking had only pulled tighter.

{child_name} weighed the {object_motif} in one palm, as if it might tip the decision by itself. It did not, of course. It only sat there, patient, the way a held thing does when the person holding it is finally about to stop stalling.

"Fine," {child_name} said. "The first plan. The big one. I'll try it."

It was the boldest of the three, the one meant to solve everything in a single decisive stroke, and {child_name} committed to it fully. For a few seconds it looked magnificent. Then, under its own ambition, it buckled and came apart in {child_name}'s hands.

{child_name} stood very still, braced for the hot rush of having failed in front of someone.

It did not come. {companion_name} did not wince or look away. The plan had failed and the world had gone on exactly as before, unbothered and calm, and in the space where {child_name}'s embarrassment should have been there sat instead a small, clear, unexpected fact.

"It fell apart in the middle," {child_name} said slowly, thinking aloud now rather than sinking. "It was too much at once. It tried to do everything, so it couldn't hold any of it."

"Listen to you," said {companion_name}. "A minute ago you knew nothing. Now you know that. One try bought it for you."

{child_name} noticed, with a kind of quiet surprise, that the noticing did not hurt. The dread had all been in the waiting. The actual failure, once it arrived, turned out to be smaller and far more useful than the enormous shapeless fear that had guarded it, and {child_name} filed that away as its own small discovery, separate from the puzzle entirely.

{child_name} turned to the second plan almost without deciding to, the smaller, quieter one, the one that attempted less but attempted it more carefully. This time {child_name} moved deliberately, watching each part as it went, the way you watch a bridge you are not yet certain will take your weight.

And this time it half worked.

That was the strange, thrilling part. The opening was clean. The middle held beautifully, better than {child_name} had let itself hope. And then, near the very end, the whole thing lost its footing and slid, and {child_name} caught it just enough to feel precisely where and how it had gone wrong. Not a failure and not a success. A half, which, {child_name} was beginning to understand, was worth more than either, because a half tells you exactly which part to keep and which part to replace.

"Did you see where it went?" {child_name} said, quick and bright. "The beginning was right. It only broke at the very end."

"I saw," {companion_name} said. "So don't scrap it. Keep the half that stood up, and go find something better for the half that didn't."

{child_name} was already thinking it through. The strong opening of the second plan, and for the ending, the clever finish from the third plan, the piece {child_name} had almost discarded without a look. Would they join? There was, {child_name} realised with something close to a laugh, only one honest way to find out.

The third try was different from the first two, because {child_name} was no longer hoping. {child_name} was building, taking the proven opening, splicing on the borrowed ending, moving slowly and watching every seam, prepared to stop and change the instant anything slipped.

{child_name} worked without hurry, checking each join before trusting the next, and more than once paused to undo a step that had felt wrong and try it a slightly different way. This was not the grand single stroke of the first plan. It was slower and humbler and a great deal more honest, and somewhere in the middle of it {child_name} realised the fear was simply gone, replaced by the plain absorbing interest of a person watching an idea meet the world and negotiate with it.

Nothing slipped.

It was not elegant. It carried the marks of every failure that had gone into it, a solution assembled from the wreckage of two others and one piece rescued from a plan {child_name} had nearly ignored. But it held, and it worked, and it was entirely, unmistakably real in a way that none of the three flawless plans in {child_name}'s head had ever been.

{child_name} breathed out, long and slow, and felt the last of the frozen hour finally let go.

"I never did figure out which one was right," {child_name} said, wonder and amusement mixed together. "I stopped trying to. I just started, and each try told me where to go next."

{companion_name} smiled and settled back on both hands, looking pleased and saying nothing, letting {child_name} keep the moment whole.

The evening had come down properly now over {setting}, the colours gone soft and deep. {child_name} closed one hand around the {object_motif} and thought about tomorrow, which would bring another puzzle, and the day after that, which would bring another still. The frozen, careful, slightly terrified version of {child_name} who had stood at this edge an hour ago already felt like someone {child_name} was quietly leaving behind.

Far out over {setting}, the dark settled kind and unhurried, and {child_name}'s eyes grew heavy at last.

{refrain}.`,
  },
},
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
    learningBeat: 'I knew the way',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} had a problem. A tall block tower would not stand up. The {hero} wanted the tower to stand so much. It went up. Then it fell. Down, down, down to the floor.

The {hero} looked at the blocks. The {hero} looked at {setting}. {companion_name} sat close by, soft and calm.

"I will stay right here," said {companion_name}. "You can look. You can do this."

So the {hero} stopped. The {hero} looked hard. What was wrong? Why did the tower fall?

The bottom blocks were small. The top blocks were big and heavy. Big on small. That was the real problem. The {hero} saw it.

"Good looking," said {companion_name}. "So, what could help the tower stand?"

Now the {hero} had ideas. One idea. Then two. Then three. Put big blocks on the bottom. Put small blocks on top. Maybe a wide bottom. Maybe slow, soft hands. Go slow. Try and see.

The {hero} tried. The tower went up a little. One, two, three. Then it leaned. Then it fell. Down it came again.

The {hero} did not cry. "It is fine to miss," said {companion_name}. "A miss shows you more."

The {hero} took a slow breath. The {hero} looked again. The floor was bumpy right there. Ah. That was it. Move to a flat, smooth spot.

The {hero} held the {object_motif} in two hands. Then the {hero} began again. Big blocks down low. A flat floor. Slow, soft hands. The {hero} did not rush. The {hero} went slow.

Up went the tower. One block. Two blocks. Three, four, five. It did not lean. It did not fall.

It stood! It really, really stood!

"Look at that," said {companion_name}. "You stopped. You looked. You tried, and you fixed it. That is how a big problem gets small."

The {hero} smiled a big smile. "I knew the way," said the {hero}. "I just had to go step by step."

Outside, the moon came up soft and round over {setting}. The tower stood tall in the quiet. {companion_name} gave the {hero} a soft, proud pat. The {hero} felt warm and happy and sleepy.

Time to rest now. Good night, little builder.

{refrain}.`,
    scriptTemplate: `{child_name} had a problem. A tall block tower would not stand up. {child_name} wanted the tower to stand so much. It went up. Then it fell. Down, down, down to the floor.

{child_name} looked at the blocks. {child_name} looked at {setting}. {companion_name} sat close by, soft and calm.

"I will stay right here," said {companion_name}. "You can look. You can do this."

So {child_name} stopped. {child_name} looked hard. What was wrong? Why did the tower fall?

The bottom blocks were small. The top blocks were big and heavy. Big on small. That was the real problem. {child_name} saw it.

"Good looking," said {companion_name}. "So, what could help the tower stand?"

Now {child_name} had ideas. One idea. Then two. Then three. Put big blocks on the bottom. Put small blocks on top. Maybe a wide bottom. Maybe slow, soft hands. Go slow. Try and see.

{child_name} tried. The tower went up a little. One, two, three. Then it leaned. Then it fell. Down it came again.

{child_name} did not cry. "It is fine to miss," said {companion_name}. "A miss shows you more."

{child_name} took a slow breath. {child_name} looked again. The floor was bumpy right there. Ah. That was it. Move to a flat, smooth spot.

{child_name} held the {object_motif} in two hands. Then {child_name} began again. Big blocks down low. A flat floor. Slow, soft hands. {child_name} did not rush. {child_name} went slow.

Up went the tower. One block. Two blocks. Three, four, five. It did not lean. It did not fall.

It stood! It really, really stood!

"Look at that," said {companion_name}. "You stopped. You looked. You tried, and you fixed it. That is how a big problem gets small."

{child_name} smiled a big smile. "I knew the way," said {child_name}. "I just had to go step by step."

Outside, the moon came up soft and round over {setting}. The tower stood tall in the quiet. {companion_name} gave {child_name} a soft, proud pat. {child_name} felt warm and happy and sleepy.

Time to rest now. Good night, little builder.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `There was a stream in {setting}, and the {hero} wanted to cross it. On the other side was a patch of ripe berries, and the {hero} had wanted them all afternoon. But the water was too wide to jump.

{companion_name} waited on the bank, close but quiet. "I'll stay right beside you," they said. "This one is yours to solve."

The {hero} wanted to rush in and splash across. Instead, the {hero} stopped and looked. Really looked. The water was slow, but it was deep in the middle. Cold, too. Jumping would not work. Wading might sweep the {hero} off their feet.

So what was the real problem? Not the water, exactly. The real problem was the gap — the {hero} needed a way to step across without falling in.

The {hero} thought of ideas, as many as would come. A big log to walk on. A row of stones to hop. A rope to hold. A branch to swing from. Some ideas were silly and some were good, and that was fine. Good ideas often hide behind silly ones.

{companion_name} said nothing, only watched. That helped. When no one hands you the answer, you learn to reach for it yourself.

The {hero} picked the stones. There were plenty on the bank, flat and heavy, some grey, some brown, all shapes. "Try and see," said the {hero}, half to {companion_name} and half to the water.

The {hero} carried a stone and set it in the shallows. It held. A second stone, a little farther. It held too. But the third stone wobbled and tipped, and the {hero} nearly slipped. Splash — one wet shoe. The {hero} laughed instead of crying, which was new.

A day ago, the {hero} might have quit right there. Not this time. The {hero} climbed back and looked again, because looking again is part of the way.

The third stone had tipped because it was round on the bottom. The flat ones held; the round one rolled. That was the fix. The {hero} did not need more stones. The {hero} needed the right stones.

The {hero} felt a little tired, and a little cross. But tired and cross are not the same as beaten. The {hero} shook out both hands and started sorting stones — flat in one pile, round in another.

So the {hero} chose only flat ones after that, pressing each down until it sat still. Step, press, test. Step, press, test. The {hero} held the {object_motif} in one hand for courage and worked with the other.

Halfway across, the water tugged harder. The {hero} paused, breathing slow, and set the next stone a little wider, where the current was gentler. Adjust. Keep going.

Two more stones, and the far bank was close enough to smell the berries. The {hero} did not hurry the last steps. Hurrying, the {hero} had learned, was how stones tipped.

And then, one careful step at a time, the {hero} reached the far bank. Dry, mostly. Grinning, fully. The berries were sweet, but the crossing was sweeter. The {hero} sat on the far grass and let out a long, happy breath.

{companion_name} hopped across the stones behind, testing each one. "You could have called me to carry you," they said. "You didn't. You stopped, you found the real trouble, you tried things, and you fixed the one that failed. That is the whole of it."

The {hero} looked back at the little stone path, shining under the trees. "I knew the way," the {hero} said softly. "I didn't at the start. But I found it, stone by stone." The stones would still be there tomorrow.

Above {setting}, the first stars blinked awake, and the stream sang its quiet song. The {hero} tucked the {object_motif} away and felt tall — not because the gap was small, but because the {hero} had crossed it alone.

{refrain}.`,
    scriptTemplate: `There was a stream in {setting}, and {child_name} wanted to cross it. On the other side was a patch of ripe berries, and {child_name} had wanted them all afternoon. But the water was too wide to jump.

{companion_name} waited on the bank, close but quiet. "I'll stay right beside you," they said. "This one is yours to solve."

{child_name} wanted to rush in and splash across. Instead, {child_name} stopped and looked. Really looked. The water was slow, but it was deep in the middle. Cold, too. Jumping would not work. Wading might sweep {child_name} off their feet.

So what was the real problem? Not the water, exactly. The real problem was the gap — {child_name} needed a way to step across without falling in.

{child_name} thought of ideas, as many as would come. A big log to walk on. A row of stones to hop. A rope to hold. A branch to swing from. Some ideas were silly and some were good, and that was fine. Good ideas often hide behind silly ones.

{companion_name} said nothing, only watched. That helped. When no one hands you the answer, you learn to reach for it yourself.

{child_name} picked the stones. There were plenty on the bank, flat and heavy, some grey, some brown, all shapes. "Try and see," said {child_name}, half to {companion_name} and half to the water.

{child_name} carried a stone and set it in the shallows. It held. A second stone, a little farther. It held too. But the third stone wobbled and tipped, and {child_name} nearly slipped. Splash — one wet shoe. {child_name} laughed instead of crying, which was new.

A day ago, {child_name} might have quit right there. Not this time. {child_name} climbed back and looked again, because looking again is part of the way.

The third stone had tipped because it was round on the bottom. The flat ones held; the round one rolled. That was the fix. {child_name} did not need more stones. {child_name} needed the right stones.

{child_name} felt a little tired, and a little cross. But tired and cross are not the same as beaten. {child_name} shook out both hands and started sorting stones — flat in one pile, round in another.

So {child_name} chose only flat ones after that, pressing each down until it sat still. Step, press, test. Step, press, test. {child_name} held the {object_motif} in one hand for courage and worked with the other.

Halfway across, the water tugged harder. {child_name} paused, breathing slow, and set the next stone a little wider, where the current was gentler. Adjust. Keep going.

Two more stones, and the far bank was close enough to smell the berries. {child_name} did not hurry the last steps. Hurrying, {child_name} had learned, was how stones tipped.

And then, one careful step at a time, {child_name} reached the far bank. Dry, mostly. Grinning, fully. The berries were sweet, but the crossing was sweeter. {child_name} sat on the far grass and let out a long, happy breath.

{companion_name} hopped across the stones behind, testing each one. "You could have called me to carry you," they said. "You didn't. You stopped, you found the real trouble, you tried things, and you fixed the one that failed. That is the whole of it."

{child_name} looked back at the little stone path, shining under the trees. "I knew the way," {child_name} said softly. "I didn't at the start. But I found it, stone by stone." The stones would still be there tomorrow.

Above {setting}, the first stars blinked awake, and the stream sang its quiet song. {child_name} tucked the {object_motif} away and felt tall — not because the gap was small, but because {child_name} had crossed it alone.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The little island sat in the middle of the water, close enough to see and too far to reach. The {hero} had wanted to visit it for days. So the {hero} had built a raft — three logs lashed together with vines — and dragged it down to the edge of {setting}.

{companion_name} settled on a rock nearby, tail curled, watching. "I could push you off," they offered. "Or you could figure it out. Your choice."

"Mine," said the {hero}, surprising even themselves. "I want to do this one."

The {hero} shoved the raft into the shallows, climbed aboard, and leaned forward, expecting to glide. Instead the raft turned a slow circle, drifted sideways, and bumped right back against the bank. The {hero} tried again, harder. Same thing. Circle, drift, bump. The {hero} frowned at the little island, so near and so stubborn.

It would have been easy to be angry. The {hero} felt the anger rise and then set it down, the way you set down something too hot to hold. Getting cross at the raft would not teach the raft anything.

So the {hero} climbed off and did the thing that was hardest and most useful: nothing. Just looking. The {hero} sat on the bank and watched the water and the raft and thought. {companion_name} said nothing, and the nothing was a kind of help.

The water was not still. It moved, slow and steady, curling around the point and pulling everything sideways — including the raft. That was it. The problem was not really the raft at all. The raft floated fine. The problem was that the {hero} had no way to steer it, and no way to push against the water. Pushing with your hands did nothing; the water just slipped away.

"I think I found the real trouble," the {hero} called.

"Say it out loud," said {companion_name}. "Naming it makes it smaller."

"I can float, but I can't steer. And I can't push the water. My hands are too small and the water's too slippy."

{companion_name} nodded once. "Now you know what you're solving."

So the {hero} gathered ideas — all of them, even the odd ones. A big leaf for a sail, if the wind would blow the right way, which it wouldn't. A second person to paddle, except there wasn't one. A long stick to push off the bottom, since the water looked shallow enough. A rope tied to the island — but there was nothing on the island to tie it to, and no way to get the rope there first.

The stick was the best idea. The {hero} found a fallen branch, long and mostly straight, stripped off the twigs, and tucked the {object_motif} into a pocket for luck. "Try and see," the {hero} murmured, and pushed off.

This time the {hero} planted the branch against the sandy bottom and pushed. The raft surged forward — actually forward! — three whole lengths before the branch stuck in the mud and nearly pulled the {hero} overboard. Arms windmilling, the {hero} let go of the branch to keep from falling, and the current spun the raft in a lazy circle back toward the bank.

A day earlier, the {hero} would have given up right there. But the {hero} had a branch that worked and only one small thing going wrong. That wasn't failure. That was almost.

The {hero} fished the branch out of the mud and thought about what had happened. The push worked. The stuck branch didn't. If the {hero} pushed and then pulled the branch straight up quickly — before it sank in — it wouldn't stick. Push, lift, reset. Push, lift, reset.

The {hero} tried it slow at first, finding the rhythm. Push against the bottom. Lift the branch clear. Let the raft glide. Plant it again farther along. It was clumsy for the first few tries, and the raft wandered, so the {hero} learned to plant the branch on whichever side the raft was drifting toward — a small nudge to steer. Adjust. Adjust again.

Twice the raft nosed off course and twice the {hero} corrected it, calm now, almost enjoying the puzzle of it. The island stopped being a faraway idea and started being a place the {hero} was actually going.

And then the {hero} was moving. Really moving, straight and steady, the island growing bigger with every push. Halfway across, the water deepened and the branch barely reached, so the {hero} slowed, leaned, and stretched, taking gentler pushes until the bottom rose again near the island.

The raft slid up onto the island's sandy shore with a soft crunch. The {hero} stepped off onto brand-new ground, legs shaky, grin enormous.

{companion_name} arrived a moment later, having simply swum, and shook off a spray of water. "You could have asked me to tow you the whole time," they said, amused. "You never did. You stopped, you found the true problem, you tried every idea you had, and when one nearly worked you shaped it until it did. Nobody handed you a single step of that."

The {hero} looked back across the water at the wobbling line of the raft's path. "I knew the way," the {hero} said, half amazed. "Not at the start. But once I stopped rushing, it was all there — one piece at a time."

They sat together on the little island while the sky went pink and then purple over {setting}. The {hero} held the {object_motif} loosely in one hand, not needing luck anymore, just liking the weight of it. Tomorrow there would be the trip back. That was tomorrow's puzzle, and the {hero} already half looked forward to it.

{refrain}.`,
    scriptTemplate: `The little island sat in the middle of the water, close enough to see and too far to reach. {child_name} had wanted to visit it for days. So {child_name} had built a raft — three logs lashed together with vines — and dragged it down to the edge of {setting}.

{companion_name} settled on a rock nearby, tail curled, watching. "I could push you off," they offered. "Or you could figure it out. Your choice."

"Mine," said {child_name}, surprising even themselves. "I want to do this one."

{child_name} shoved the raft into the shallows, climbed aboard, and leaned forward, expecting to glide. Instead the raft turned a slow circle, drifted sideways, and bumped right back against the bank. {child_name} tried again, harder. Same thing. Circle, drift, bump. {child_name} frowned at the little island, so near and so stubborn.

It would have been easy to be angry. {child_name} felt the anger rise and then set it down, the way you set down something too hot to hold. Getting cross at the raft would not teach the raft anything.

So {child_name} climbed off and did the thing that was hardest and most useful: nothing. Just looking. {child_name} sat on the bank and watched the water and the raft and thought. {companion_name} said nothing, and the nothing was a kind of help.

The water was not still. It moved, slow and steady, curling around the point and pulling everything sideways — including the raft. That was it. The problem was not really the raft at all. The raft floated fine. The problem was that {child_name} had no way to steer it, and no way to push against the water. Pushing with your hands did nothing; the water just slipped away.

"I think I found the real trouble," {child_name} called.

"Say it out loud," said {companion_name}. "Naming it makes it smaller."

"I can float, but I can't steer. And I can't push the water. My hands are too small and the water's too slippy."

{companion_name} nodded once. "Now you know what you're solving."

So {child_name} gathered ideas — all of them, even the odd ones. A big leaf for a sail, if the wind would blow the right way, which it wouldn't. A second person to paddle, except there wasn't one. A long stick to push off the bottom, since the water looked shallow enough. A rope tied to the island — but there was nothing on the island to tie it to, and no way to get the rope there first.

The stick was the best idea. {child_name} found a fallen branch, long and mostly straight, stripped off the twigs, and tucked the {object_motif} into a pocket for luck. "Try and see," {child_name} murmured, and pushed off.

This time {child_name} planted the branch against the sandy bottom and pushed. The raft surged forward — actually forward! — three whole lengths before the branch stuck in the mud and nearly pulled {child_name} overboard. Arms windmilling, {child_name} let go of the branch to keep from falling, and the current spun the raft in a lazy circle back toward the bank.

A day earlier, {child_name} would have given up right there. But {child_name} had a branch that worked and only one small thing going wrong. That wasn't failure. That was almost.

{child_name} fished the branch out of the mud and thought about what had happened. The push worked. The stuck branch didn't. If {child_name} pushed and then pulled the branch straight up quickly — before it sank in — it wouldn't stick. Push, lift, reset. Push, lift, reset.

{child_name} tried it slow at first, finding the rhythm. Push against the bottom. Lift the branch clear. Let the raft glide. Plant it again farther along. It was clumsy for the first few tries, and the raft wandered, so {child_name} learned to plant the branch on whichever side the raft was drifting toward — a small nudge to steer. Adjust. Adjust again.

Twice the raft nosed off course and twice {child_name} corrected it, calm now, almost enjoying the puzzle of it. The island stopped being a faraway idea and started being a place {child_name} was actually going.

And then {child_name} was moving. Really moving, straight and steady, the island growing bigger with every push. Halfway across, the water deepened and the branch barely reached, so {child_name} slowed, leaned, and stretched, taking gentler pushes until the bottom rose again near the island.

The raft slid up onto the island's sandy shore with a soft crunch. {child_name} stepped off onto brand-new ground, legs shaky, grin enormous.

{companion_name} arrived a moment later, having simply swum, and shook off a spray of water. "You could have asked me to tow you the whole time," they said, amused. "You never did. You stopped, you found the true problem, you tried every idea you had, and when one nearly worked you shaped it until it did. Nobody handed you a single step of that."

{child_name} looked back across the water at the wobbling line of the raft's path. "I knew the way," {child_name} said, half amazed. "Not at the start. But once I stopped rushing, it was all there — one piece at a time."

They sat together on the little island while the sky went pink and then purple over {setting}. {child_name} held the {object_motif} loosely in one hand, not needing luck anymore, just liking the weight of it. Tomorrow there would be the trip back. That was tomorrow's puzzle, and {child_name} already half looked forward to it.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The garden had been the {hero}'s own idea, and now it was dying.

Three weeks ago the {hero} had cleared a patch of ground at the edge of {setting}, pressed seeds into the soil, and imagined the whole thing green by summer. For a while it had worked. Then the rains stopped, the little spring that fed the hollow shifted its course down the slope, and the soil went pale and cracked. Each evening the seedlings drooped a little further, and each evening the {hero} carried water to them one cupped handful at a time, spilling most of it on the walk up the hill. It was not enough. Everyone could see it was not enough. The {hero} could feel the whole idea slipping away.

{companion_name} found the {hero} sitting by the wilting rows one evening, chin on knees. "I could carry water for you," they offered gently. "A dozen trips and it'd be soaked."

"And tomorrow?" the {hero} said. "And the day after? You can't carry it forever. Neither can I." The {hero} surprised themselves with how steady it came out. "There has to be a better way. I just can't see it yet."

{companion_name} settled down beside them without another word. That was the thing about {companion_name} — they knew when a problem belonged to someone, and they let it stay theirs.

So the {hero} did the first hard thing, which was to stop carrying water and simply look. Not at the dying garden — at the whole hill. The spring bubbled up from the rocks higher on the slope, ran a little way, and vanished into a boggy patch where the ground dipped. Below that, nothing. The garden sat lower still, dry as old bread. For a long time the {hero} just watched the water go where it wanted to go, which was everywhere except where it was needed.

The {hero} noticed things that hurrying had hidden: how the water always chose the lowest path, how it gathered speed on the steep parts and went lazy on the flat, how a single stone dropped in the boggy patch sent a ripple that showed which way the ground truly leaned. None of it was new. It had all been there every evening. The {hero} had simply never sat still long enough to read it.

Naming the real problem took longer than the {hero} expected, because the obvious answer was wrong. The problem was not that there was no water — the spring ran all day and night. The problem was not even that the garden was too far. The real problem, once the {hero} finally cornered it, was this: water only travels downhill, and between the spring and the garden the ground rose and fell like a rumpled blanket. Every dip trapped the water; every rise stopped it. To move the water, the {hero} would have to give it a path that always, gently, went down.

That was a bigger, harder truth than "carry more buckets," and naming it honestly made the {hero}'s stomach sink a little. But it also made the next part possible.

Ideas came slowly at first, then in a rush, and the {hero} let all of them come without judging any — even the foolish ones, because foolish ideas often shared a border with clever ones. Dig a straight ditch: too much digging, and the low spots would still trap the water. Line the ditch with clay so it wouldn't soak in: better, but the dips remained. Raise the low spots with packed earth and stones so the whole channel sloped evenly downhill: that was it, or close to it. Or split the difference — a shallow channel of hollowed reeds and bark, propped up on little stacks of stone wherever the ground fell away, so the water ran along a gentle, unbroken tilt from spring to garden.

The {hero} turned the {object_motif} over in one hand while thinking, the way some people twist a bit of string, and did not decide too fast. Then: "Try and see," the {hero} said, and got up.

The first attempt failed in a way that would once have ended the whole project. The {hero} laid a line of curved bark from the spring, cheerful and quick, and let the water in — and it ran a body-length, pooled in the first dip, brimmed over the side, and soaked away into the mud. The {hero} stood there with wet feet and a hot face and, for one long moment, wanted very badly to kick the whole thing apart.

Instead the {hero} sat back down on the damp grass and thought about what the failure had actually shown, because a failure that teaches you something is not the same as a failure that stops you. The bark had worked where the ground sloped down. It had failed exactly at the dip — precisely where the {hero} had already predicted trouble and then, in the rush of finally starting, forgotten to fix it. The idea was sound. The building had skipped a step.

So the {hero} went back to the beginning of the line, and this time worked slowly, one short section at a time. Where the ground fell away, the {hero} built a small pillar of flat stones and rested the channel on top, checking with a trickle of water that every section ran downhill before moving to the next. Pour a little water. Watch it run. If it pooled, lift that section a finger's width and pack stones beneath. If it raced too fast and splashed out, ease it lower. Section by section, dip by dip, the {hero} walked the channel down the hill, adjusting each piece until the water agreed to keep moving.

It was slow. The light turned gold, then amber. {companion_name} brought over stones without being asked and set them within reach, saying nothing, which was its own kind of faith. Twice the {hero} had to tear out a stretch that sagged and rebuild it higher. Once a length of bark split and had to be swapped. None of it felt like failing anymore; it felt like tuning something, coaxing it closer and closer to right.

The {hero} caught themselves humming, low and tuneless, the way you do when your hands know what to do and your mind can finally rest. Somewhere in the last hour the fear of failing had quietly turned into something almost like curiosity — what would this next dip need, and this one, and this?

And then the {hero} set the last section in place, walked back up to the spring, cleared the little dam of leaves, and watched.

The water slid into the channel and kept going. Past the first dip, riding its stone pillar. Down the long gentle slope. Around the shoulder of the hill, where the {hero} held their breath. And then — a thin, bright thread of it spilled out the far end and ran, actually ran, into the cracked soil of the garden, darkening it in a slow spreading stain. The seedlings did not leap up green all at once; that only happens in daydreams. But the water reached them, and would keep reaching them, tonight and tomorrow and the day after, without a single bucket.

The {hero} let out a breath that seemed to have been held for three weeks.

{companion_name} came to stand beside the far end of the channel, watching the water find the roots. "You know what I didn't do?" they said. "I didn't solve this. Not one piece of it. You stopped when everyone would have kept bailing, you found the true shape of the trouble, you gathered every idea including the daft ones, and when your first try failed you read it instead of quitting. That's the whole art of it, start to finish."

The {hero} looked down the length of the channel — the propped bark, the little stone pillars, the water threading its patient way to the garden. Something settled quietly in the {hero}'s chest, not loud, just certain. "I knew the way," the {hero} said. "That's the strange part. Not at the start — at the start I only knew I was stuck. But every step was already in me. I just had to slow down enough to take them in order."

The last of the light went soft and rose-coloured over {setting}, and somewhere below, the soil drank. The {hero} sat down by the channel with the {object_motif} resting in one open hand, tired in the good way, and stayed a while just to listen to the water go where it was finally meant to go.

{refrain}.`,
    scriptTemplate: `The garden had been {child_name}'s own idea, and now it was dying.

Three weeks ago {child_name} had cleared a patch of ground at the edge of {setting}, pressed seeds into the soil, and imagined the whole thing green by summer. For a while it had worked. Then the rains stopped, the little spring that fed the hollow shifted its course down the slope, and the soil went pale and cracked. Each evening the seedlings drooped a little further, and each evening {child_name} carried water to them one cupped handful at a time, spilling most of it on the walk up the hill. It was not enough. Everyone could see it was not enough. {child_name} could feel the whole idea slipping away.

{companion_name} found {child_name} sitting by the wilting rows one evening, chin on knees. "I could carry water for you," they offered gently. "A dozen trips and it'd be soaked."

"And tomorrow?" {child_name} said. "And the day after? You can't carry it forever. Neither can I." {child_name} surprised themselves with how steady it came out. "There has to be a better way. I just can't see it yet."

{companion_name} settled down beside them without another word. That was the thing about {companion_name} — they knew when a problem belonged to someone, and they let it stay theirs.

So {child_name} did the first hard thing, which was to stop carrying water and simply look. Not at the dying garden — at the whole hill. The spring bubbled up from the rocks higher on the slope, ran a little way, and vanished into a boggy patch where the ground dipped. Below that, nothing. The garden sat lower still, dry as old bread. For a long time {child_name} just watched the water go where it wanted to go, which was everywhere except where it was needed.

{child_name} noticed things that hurrying had hidden: how the water always chose the lowest path, how it gathered speed on the steep parts and went lazy on the flat, how a single stone dropped in the boggy patch sent a ripple that showed which way the ground truly leaned. None of it was new. It had all been there every evening. {child_name} had simply never sat still long enough to read it.

Naming the real problem took longer than {child_name} expected, because the obvious answer was wrong. The problem was not that there was no water — the spring ran all day and night. The problem was not even that the garden was too far. The real problem, once {child_name} finally cornered it, was this: water only travels downhill, and between the spring and the garden the ground rose and fell like a rumpled blanket. Every dip trapped the water; every rise stopped it. To move the water, {child_name} would have to give it a path that always, gently, went down.

That was a bigger, harder truth than "carry more buckets," and naming it honestly made {child_name}'s stomach sink a little. But it also made the next part possible.

Ideas came slowly at first, then in a rush, and {child_name} let all of them come without judging any — even the foolish ones, because foolish ideas often shared a border with clever ones. Dig a straight ditch: too much digging, and the low spots would still trap the water. Line the ditch with clay so it wouldn't soak in: better, but the dips remained. Raise the low spots with packed earth and stones so the whole channel sloped evenly downhill: that was it, or close to it. Or split the difference — a shallow channel of hollowed reeds and bark, propped up on little stacks of stone wherever the ground fell away, so the water ran along a gentle, unbroken tilt from spring to garden.

{child_name} turned the {object_motif} over in one hand while thinking, the way some people twist a bit of string, and did not decide too fast. Then: "Try and see," {child_name} said, and got up.

The first attempt failed in a way that would once have ended the whole project. {child_name} laid a line of curved bark from the spring, cheerful and quick, and let the water in — and it ran a body-length, pooled in the first dip, brimmed over the side, and soaked away into the mud. {child_name} stood there with wet feet and a hot face and, for one long moment, wanted very badly to kick the whole thing apart.

Instead {child_name} sat back down on the damp grass and thought about what the failure had actually shown, because a failure that teaches you something is not the same as a failure that stops you. The bark had worked where the ground sloped down. It had failed exactly at the dip — precisely where {child_name} had already predicted trouble and then, in the rush of finally starting, forgotten to fix it. The idea was sound. The building had skipped a step.

So {child_name} went back to the beginning of the line, and this time worked slowly, one short section at a time. Where the ground fell away, {child_name} built a small pillar of flat stones and rested the channel on top, checking with a trickle of water that every section ran downhill before moving to the next. Pour a little water. Watch it run. If it pooled, lift that section a finger's width and pack stones beneath. If it raced too fast and splashed out, ease it lower. Section by section, dip by dip, {child_name} walked the channel down the hill, adjusting each piece until the water agreed to keep moving.

It was slow. The light turned gold, then amber. {companion_name} brought over stones without being asked and set them within reach, saying nothing, which was its own kind of faith. Twice {child_name} had to tear out a stretch that sagged and rebuild it higher. Once a length of bark split and had to be swapped. None of it felt like failing anymore; it felt like tuning something, coaxing it closer and closer to right.

{child_name} caught themselves humming, low and tuneless, the way you do when your hands know what to do and your mind can finally rest. Somewhere in the last hour the fear of failing had quietly turned into something almost like curiosity — what would this next dip need, and this one, and this?

And then {child_name} set the last section in place, walked back up to the spring, cleared the little dam of leaves, and watched.

The water slid into the channel and kept going. Past the first dip, riding its stone pillar. Down the long gentle slope. Around the shoulder of the hill, where {child_name} held their breath. And then — a thin, bright thread of it spilled out the far end and ran, actually ran, into the cracked soil of the garden, darkening it in a slow spreading stain. The seedlings did not leap up green all at once; that only happens in daydreams. But the water reached them, and would keep reaching them, tonight and tomorrow and the day after, without a single bucket.

{child_name} let out a breath that seemed to have been held for three weeks.

{companion_name} came to stand beside the far end of the channel, watching the water find the roots. "You know what I didn't do?" they said. "I didn't solve this. Not one piece of it. You stopped when everyone would have kept bailing, you found the true shape of the trouble, you gathered every idea including the daft ones, and when your first try failed you read it instead of quitting. That's the whole art of it, start to finish."

{child_name} looked down the length of the channel — the propped bark, the little stone pillars, the water threading its patient way to the garden. Something settled quietly in {child_name}'s chest, not loud, just certain. "I knew the way," {child_name} said. "That's the strange part. Not at the start — at the start I only knew I was stuck. But every step was already in me. I just had to slow down enough to take them in order."

The last of the light went soft and rose-coloured over {setting}, and somewhere below, the soil drank. {child_name} sat down by the channel with the {object_motif} resting in one open hand, tired in the good way, and stayed a while just to listen to the water go where it was finally meant to go.

{refrain}.`
  }
},
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
