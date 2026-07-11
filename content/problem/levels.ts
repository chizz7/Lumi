// content/problem/levels.ts
//
// Problem Solving — 5 leveled bedtime stories (isolate, diversify, diagnose, persist, listen).
// Same two-template structure as the other paths:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// All levels follow the calm-adventure 5-beat spine (HOOK → TRY → TURN → WIN → SETTLE)
// and are fully verified to pass assembly checks.
//
// To draft/refine: npm run author:draft -- --subject problem --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'One at a Time',
    concept: 'Working through one problem at a time', callback: null, ageFloor: 3,
    summary: 'The hero faces several tangled problems at once and feels overwhelmed. Their companion teaches the first and most important step: choose one problem, solve it completely, then move to the next. This is how big troubles become small.',
    teachingNote: 'When a child learns to isolate one problem at a time, overwhelm transforms into capability. Completion builds confidence for the next thing.',
    learningBeat: 'work through one problem at a time',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} woke up in {setting} and saw a mess. Three things were wrong all at once.

The {object_motif} was lost under a pile. The door was stuck and would not open. And the floor had spilled toys everywhere.

The {hero} looked at all three and felt small. "I can fix it all!" said the {hero}. So the {hero} ran to the {object_motif}. Pick, pick, pick. But then the {hero} looked at the stuck door. "Oh! The door first!" The {hero} ran to push it. Push, push, push. But it would not budge.

Then the {hero} saw the toys. All scattered. The {hero} wanted to pick those up too.

Three things. All at once. The {hero} sat down and wanted to cry. Everything needed to be fixed but nothing was getting fixed.

Then {companion_name} came close. "You have three problems," said {companion_name}. "But you are trying to do them all at the same time. That makes you tired and confused."

The {hero} looked up. "What can I do?"

"Work through one problem at a time," said {companion_name}. "Pick one. Finish it all the way. Then pick the next. One at a time is how big jobs get small."

The {hero} took a slow breath. One at a time. That felt possible.

"The toys first," said the {hero}.

So the {hero} picked up every toy. One by one. All of them. Done. The floor was clean and clear.

"Good," said {companion_name}. "Now the next."

The {hero} went to the stuck door and pushed gently. It opened! Another thing done.

Then the {hero} found the {object_motif} under the pile. There it was. Three things. All finished.

The {hero} felt so good and so sleepy.

"Work through one problem at a time," said the {hero}. "That is how it all gets done."

The moon rose soft over {setting}. The {hero} held the {object_motif} close.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} woke up in {setting} and saw a mess. Three things were wrong all at once.

The {object_motif} was lost under a pile. The door was stuck and would not open. And the floor had spilled toys everywhere.

{child_name} looked at all three and felt small. "I can fix it all!" said {child_name}. So {child_name} ran to the {object_motif}. Pick, pick, pick. But then {child_name} looked at the stuck door. "Oh! The door first!" {child_name} ran to push it. Push, push, push. But it would not budge.

Then {child_name} saw the toys. All scattered. {child_name} the {hero} wanted to pick those up too.

Three things. All at once. {child_name} sat down and wanted to cry. Everything needed to be fixed but nothing was getting fixed.

Then {companion_name} came close. "You have three problems," said {companion_name}. "But you are trying to do them all at the same time. That makes you tired and confused."

{child_name} looked up. "What can I do?"

"Work through one problem at a time," said {companion_name}. "Pick one. Finish it all the way. Then pick the next. One at a time is how big jobs get small."

{child_name} took a slow breath. One at a time. That felt possible.

"The toys first," said {child_name}.

So {child_name} picked up every toy. One by one. All of them. Done. The floor was clean and clear.

"Good," said {companion_name}. "Now the next."

{child_name} went to the stuck door and pushed gently. It opened! Another thing done.

Then {child_name} found the {object_motif} under the pile. There it was. Three things. All finished.

{child_name} felt so good and so sleepy.

"Work through one problem at a time," said {child_name}. "That is how it all gets done."

The moon rose soft over {setting}. {child_name} held the {object_motif} close.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} woke up on a quiet morning in {setting} with three tangled worries waiting. The {object_motif} had a torn seam that wouldn't hold. The garden's weeds had grown tall and wild. And somewhere in the shed, the broken window needed mending.

The {hero} looked at the list of three and felt the weight of it — all urgent, all calling at once.

"I'll do them all today," the {hero} decided, and dashed to the shed. Gather tools. Fix the window. Halfway through, the {hero} looked out and thought: the weeds will take over if I don't start now.

The {hero} dropped the tools and ran to the garden. Pull weeds. Dig dirt. Halfway through the digging, the {hero} remembered the {object_motif} sitting in the house, unworn and broken.

Back inside. Find the needle and thread. Stitch one seam. Halfway through the stitching, the {hero} looked outside. The shed. The tools still waiting.

By midday, nothing was finished. The window frame sat empty. The garden was half-weeded. The {object_motif} had one seam started and one seam broken. The {hero} sat in the middle of this scattered chaos and felt something knot tight in their chest.

{companion_name} found them there. "You have three problems," {companion_name} said gently, "but a mind can only hold and solve one at a time. When you jump between them, you make them all harder."

"So what do I do?" the {hero} asked.

"Work through one problem at a time," said {companion_name}. "Choose the one that matters most. Do it all the way through, completely, before you touch the next. One at a time is how big jobs become manageable."

The {hero} felt something settle. One at a time. That was possible.

"The window first," the {hero} said. "I'll finish every part."

So the {hero} went back to the shed and did not leave it. Measure. Cut glass. Set the pane. Seal it. Done. The window was whole.

Then the {object_motif}. Both seams stitched from end to end. The whole thing holding.

Then the path. Every weed cleared. Every cleared weed raked away. The path open and passable.

Three things. All three complete.

The {hero} looked around at the mended window, the whole {object_motif}, the cleared path, and felt something untangle inside. The panic that had been pulling at their shoulders had drained away.

"Work through one problem at a time," the {hero} said softly. "That is how it all gets done."

Over {setting}, the light was turning golden and slow. The {hero} sat with the {object_motif} close, knowing that tomorrow's troubles would seem smaller now that this day had proven: one thing at a time works.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} woke up on a quiet morning in {setting} with three tangled worries waiting. The {object_motif} had a torn seam that wouldn't hold. The garden's weeds had grown tall and wild. And somewhere in the shed, the broken window needed mending.

{child_name} looked at the list of three and felt the weight of it — all urgent, all calling at once.

"I'll do them all today," {child_name} decided, and dashed to the shed. Gather tools. Fix the window. Halfway through, {child_name} looked out and thought: the weeds will take over if I don't start now.

{child_name} dropped the tools and ran to the garden. Pull weeds. Dig dirt. Halfway through the digging, {child_name} remembered the {object_motif} sitting in the house, unworn and broken.

Back inside. Find the needle and thread. Stitch one seam. Halfway through the stitching, {child_name} looked outside. The shed. The tools still waiting.

By midday, nothing was finished. The window frame sat empty. The garden was half-weeded. The {object_motif} had one seam started and one seam broken. {child_name} sat in the middle of this scattered chaos and felt something knot tight in their chest.

{companion_name} found them there. "You have three problems," {companion_name} said gently, "but a mind can only hold and solve one at a time. When you jump between them, you make them all harder."

"So what do I do?" {child_name} asked.

"Work through one problem at a time," said {companion_name}. "Choose the one that matters most. Do it all the way through, completely, before you touch the next. One at a time is how big jobs become manageable."

{child_name} felt something settle. One at a time. That was possible.

"The window first," {child_name} said. "I'll finish every part."

So {child_name} went back to the shed and did not leave it. Measure. Cut glass. Set the pane. Seal it. Done. The window was whole.

Then the {object_motif}. Both seams stitched from end to end. The whole thing holding.

Then the garden. Every weed cleared. Every cleared weed raked away. The path open and passable.

Three things. All three complete.

{child_name} looked around at the mended window, the whole {object_motif}, the cleared path, and felt something untangle inside. The panic that had been pulling at their shoulders had drained away.

"Work through one problem at a time," {child_name} said softly. "That is how it all gets done."

Over {setting}, the light was turning golden and slow. {child_name} sat with the {object_motif} close, knowing that tomorrow's troubles would seem smaller now that this day had proven: one thing at a time works.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} woke that morning to a weight in their chest — three problems sitting like stones, all demanding attention at once. The {object_motif} had broken. The fence was falling down. The path to the gate had weeds growing through in a thick, choking tangle. Every problem was real. Every problem was urgent. Every problem said: fix me first.

The {hero} felt that familiar rushing panic starting, the sense of too-much, of not-enough time. But they ran to the fence anyway. For an hour, the {hero} worked. Nails. Wood. Measuring. Halfway through mending one section, the {hero} looked at the {object_motif} sitting on the porch. Unworn. Broken. Waiting.

The {hero} left the fence half-done and went to the {object_motif}. Found needle and thread. Stitched one seam. Halfway through, a thought: the weeds are getting worse. If I wait another day, they'll be twice as bad.

Back to the weeds. Pull. Yank. Clear a section. The pile of uprooted weeds grew. But then the fence called — that half-finished section looked abandoned, and the {hero} worried someone would see it and think the work had stalled.

Back to the fence.

By afternoon, nothing was finished. The fence had boards half-nailed. The {object_motif} had one seam done and one seam still hanging. The weed pile sat in the middle of the path — the {hero} had pulled them but not cleared them, so the path was still blocked. Everything was half-done. Nothing was done. The {hero} sat down and felt trapped by the very problems they'd been trying to solve.

That's when {companion_name} came around the corner and took in the scene: the scattered tools, the half-mended fence, the untied seam, the weed pile blocking the path.

"Three problems," {companion_name} said calmly, sitting down beside the {hero}. "But here's what I see: you're trying to solve all three at once, which means you're solving none of them. You keep starting and stopping, starting and stopping. And the more you do that, the more hopeless it feels."

"So what do I do?" the {hero} asked, frustrated. "They're all important."

"Work through one problem at a time," said {companion_name}. "Not because the others don't matter, but because your mind can truly solve only one thing at a time. Choose the one that matters most. Do it all the way through — completely, from start to finish — before you even look at the next one. One at a time is how big overwhelming things become doable things."

The {hero} felt something quiet land in their chest. One at a time. That was possible.

"The fence," the {hero} decided. "I'll finish every board."

And so the {hero} did not leave the fence. Nail by nail, board by board, each one checked and rechecked. The fence came together. Solid. Real. Done.

Then the {object_motif}. Both seams stitched from end to end. The whole thing holding.

Then the path. Every weed cleared. Every cleared weed raked away. The path open and passable.

Three things. All three done.

The {hero} stood back and looked at the finished fence, the whole {object_motif}, the cleared path, and felt a strange calm settle into their shoulders. The panic that had been grinding in their chest all morning had simply... drained away. There was no magic to it. It was just this: do one thing. Finish it. Then the next. That's all.

"Work through one problem at a time," the {hero} said quietly. "That is how it works."

The evening light was turning long over {setting}, and the {hero} knew now that the secret to managing big troubles wasn't to be faster or stronger. It was to be more focused. To pick one thing and do it all the way, then pick the next.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} woke that morning to a weight in their chest — three problems sitting like stones, all demanding attention at once. The {object_motif} had broken. The fence was falling down. The path to the gate had weeds growing through in a thick, choking tangle. Every problem was real. Every problem was urgent. Every problem said: fix me first.

{child_name} felt that familiar rushing panic starting, the sense of too-much, of not-enough time. But they ran to the fence anyway. For an hour, {child_name} worked. Nails. Wood. Measuring. Halfway through mending one section, {child_name} looked at the {object_motif} sitting on the porch. Unworn. Broken. Waiting.

{child_name} left the fence half-done and went to the {object_motif}. Found needle and thread. Stitched one seam. Halfway through, a thought: the weeds are getting worse. If I wait another day, they'll be twice as bad.

Back to the weeds. Pull. Yank. Clear a section. The pile of uprooted weeds grew. But then the fence called — that half-finished section looked abandoned, and {child_name} worried someone would see it and think the work had stalled.

Back to the fence.

By afternoon, nothing was finished. The fence had boards half-nailed. The {object_motif} had one seam done and one seam still hanging. The weed pile sat in the middle of the path — {child_name} had pulled them but not cleared them, so the path was still blocked. Everything was half-done. Nothing was done. {child_name} sat down and felt trapped by the very problems they'd been trying to solve.

That's when {companion_name} came around the corner and took in the scene: the scattered tools, the half-mended fence, the untied seam, the weed pile blocking the path.

"Three problems," {companion_name} said calmly, sitting down beside {child_name}. "But here's what I see: you're trying to solve all three at once, which means you're solving none of them. You keep starting and stopping, starting and stopping. And the more you do that, the more hopeless it feels."

"So what do I do?" {child_name} asked, frustrated. "They're all important."

"Work through one problem at a time," said {companion_name}. "Not because the others don't matter, but because your mind can truly solve only one thing at a time. Choose the one that matters most. Do it all the way through — completely, from start to finish — before you even look at the next one. One at a time is how big overwhelming things become doable things."

{child_name} felt something quiet land in their chest. One at a time. That was possible.

"The fence," {child_name} decided. "I'll finish every board."

And so {child_name} did not leave the fence. Nail by nail, board by board, each one checked and rechecked. The fence came together. Solid. Real. Done.

Then the {object_motif}. Both seams stitched from end to end. The whole thing holding.

Then the path. Every weed cleared. Every cleared weed raked away. The path open and passable.

Three things. All three done.

{child_name} stood back and looked at the finished fence, the whole {object_motif}, the cleared path, and felt a strange calm settle into their shoulders. The panic that had been grinding in their chest all morning had simply... drained away. There was no magic to it. It was just this: do one thing. Finish it. Then the next. That's all.

"Work through one problem at a time," {child_name} said quietly. "That is how it works."

The evening light was turning long over {setting}, and {child_name} knew now that the secret to managing big troubles wasn't to be faster or stronger. It was to be more focused. To pick one thing and do it all the way, then pick the next.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There is a particular kind of dread that settles in the chest when you wake with too many things undone, all of them urgent, all of them yours. This is what the {hero} felt when their eyes opened on that quiet morning in {setting}, before they'd even gotten out of bed.

The {object_motif} had been waiting to be repaired for three days. The {hero} kept meaning to fix it and kept not doing it. Meanwhile, the fence section was crumbling faster than expected — one more storm and it might give way entirely. And the path to the main gate had become so overgrown with weeds that the {hero} had to push through them every time they went out, which happened to be several times a day. Every time they pushed through, they thought: I should clear this. I should do this today.

So every problem knew, with that nasty clarity of procrastination, that today was the day it had to happen.

The {hero} got out of bed and felt the weight of the three problems like a physical thing.

They started with the fence. This one felt most urgent — structural failure, visible to anyone passing. They gathered tools. Worked for forty minutes, felt a little progress, felt the beginning of momentum. The fence section was starting to look intentional, like a real project moving toward completion.

Then the {hero} stepped back and saw the {object_motif} inside, visible through the window. It was precious. Worn. Waiting. The seam was getting worse every day the {hero} delayed. If they waited much longer, the damage would spread.

The {hero} put down the fence tools and went inside. Found needle and thread. Started stitching. Got halfway through a seam and felt: I'm making progress on this. This is good.

Then, through the open door, the {hero} could see the path. The weeds. The overgrown tangle that had become worse every single day. And the thought came with the force of panic: If I don't clear this today, tomorrow it will be twice as bad. If I wait, it gets ahead of me.

The {hero} put down the needle and went to the path. Pulled weeds with sudden, frustrated energy. Uprooted them. Made a pile. Felt the satisfaction of visible clearing.

For thirty minutes, this felt good. Then a thought: the fence section is sitting there half-done. Someone might see it.

Back to the fence.

This cycle continued. Each problem was real. Each problem demanded completion. Each problem said: I am the most important. But what actually happened was that the {hero} became trapped in an exhausting cycle of starting, stopping, starting again. By early afternoon, all three problems were partially done, nothing was finished, and the {hero} felt more exhausted than if they'd been working continuously on any single one of them.

The {hero} sat on the step to the house, breathing hard, feeling something close to despair.

{companion_name} found them there.

"You look like someone being pulled apart," {companion_name} said, and sat down without asking.

"Three things," the {hero} said. "All urgent. All need doing. And I keep jumping between them because the one I'm not working on feels like it's falling further behind."

{companion_name} was quiet for a moment. Then: "That's the trap. You're believing that each problem will get solved by worrying about it. But your hands can only do one thing at a time, and your mind can only truly focus on one thing at a time. When you jump between them, you solve nothing. You just feel like you're failing at three things instead of doing one thing well."

"So I should just... pick one and ignore the others?" the {hero} asked. "They'll get worse."

"Work through one problem at a time," {companion_name} said. "All the way through. Completely. From start to finish. Yes, the others will wait. But they'll wait while you're actually getting something done, instead of waiting while you spin in circles between all three. And once one is finished, you'll have the mental space and the momentum to tackle the next."

The {hero} felt something settle. It was simple, maybe too simple. But it was also true.

"The fence," the {hero} decided. "I'll finish it completely. Every board. Every nail."

And so the {hero} did not leave the fence. Not for an hour. Not for two hours. Nail after nail, board after board, checking each one, making sure every piece was solid. The fence came together with a quiet sense of inevitability. At some point, there was nothing left to do. It was done.

Then the {object_motif}. The {hero} sat with needle and thread and stitched every seam, every weak place, every thread that was fraying. The whole thing, complete.

Then the path. Every weed pulled. The soil turned. The path opened and clear.

Three problems. All three done.

The {hero} stood back and looked at what had been accomplished, and felt something fundamental shift in their chest. Not because anything had changed about the problems themselves, but because they understood now: the secret wasn't to be faster. It wasn't to be more dedicated. It wasn't to worry harder or try harder. It was to be more disciplined about focus. To pick one thing. Do it all the way. Then move to the next.

"Work through one problem at a time," the {hero} said quietly. "That is how it gets done."

The light was turning gold over {setting}, and the {hero} held the {object_motif} close, knowing that tomorrow would bring more problems. But they also knew now that problems weren't solved by panic, or by juggling, or by trying to do everything at once. They were solved by focus. One thing at a time. All the way.

{refrain}.`,
    scriptTemplate: `There is a particular kind of dread that settles in the chest when you wake with too many things undone, all of them urgent, all of them yours. This is what {child_name} the {hero} felt when their eyes opened on that quiet morning in {setting}, before they'd even gotten out of bed.

The {object_motif} had been waiting to be repaired for three days. {child_name} kept meaning to fix it and kept not doing it. Meanwhile, the fence section was crumbling faster than expected — one more storm and it might give way entirely. And the path to the main gate had become so overgrown with weeds that {child_name} had to push through them every time they went out, which happened to be several times a day. Every time they pushed through, they thought: I should clear this. I should do this today.

So every problem knew, with that nasty clarity of procrastination, that today was the day it had to happen.

{child_name} got out of bed and felt the weight of the three problems like a physical thing.

They started with the fence. This one felt most urgent — structural failure, visible to anyone passing. They gathered tools. Worked for forty minutes, felt a little progress, felt the beginning of momentum. The fence section was starting to look intentional, like a real project moving toward completion.

Then {child_name} stepped back and saw the {object_motif} inside, visible through the window. It was precious. Worn. Waiting. The seam was getting worse every day {child_name} delayed. If they waited much longer, the damage would spread.

{child_name} put down the fence tools and went inside. Found needle and thread. Started stitching. Got halfway through a seam and felt: I'm making progress on this. This is good.

Then, through the open door, {child_name} could see the path. The weeds. The overgrown tangle that had become worse every single day. And the thought came with the force of panic: If I don't clear this today, tomorrow it will be twice as bad. If I wait, it gets ahead of me.

{child_name} put down the needle and went to the path. Pulled weeds with sudden, frustrated energy. Uprooted them. Made a pile. Felt the satisfaction of visible clearing.

For thirty minutes, this felt good. Then a thought: the fence section is sitting there half-done. Someone might see it.

Back to the fence.

This cycle continued. Each problem was real. Each problem demanded completion. Each problem said: I am the most important. But what actually happened was that {child_name} became trapped in an exhausting cycle of starting, stopping, starting again. By early afternoon, all three problems were partially done, nothing was finished, and {child_name} felt more exhausted than if they'd been working continuously on any single one of them.

{child_name} sat on the step to the house, breathing hard, feeling something close to despair.

{companion_name} found them there.

"You look like someone being pulled apart," {companion_name} said, and sat down without asking.

"Three things," {child_name} said. "All urgent. All need doing. And I keep jumping between them because the one I'm not working on feels like it's falling further behind."

{companion_name} was quiet for a moment. Then: "That's the trap. You're believing that each problem will get solved by worrying about it. But your hands can only do one thing at a time, and your mind can only truly focus on one thing at a time. When you jump between them, you solve nothing. You just feel like you're failing at three things instead of doing one thing well."

"So I should just... pick one and ignore the others?" {child_name} asked. "They'll get worse."

"Work through one problem at a time," {companion_name} said. "All the way through. Completely. From start to finish. Yes, the others will wait. But they'll wait while you're actually getting something done, instead of waiting while you spin in circles between all three. And once one is finished, you'll have the mental space and the momentum to tackle the next."

{child_name} felt something settle. It was simple, maybe too simple. But it was also true.

"The fence," {child_name} decided. "I'll finish it completely. Every board. Every nail."

And so {child_name} did not leave the fence. Not for an hour. Not for two hours. Nail after nail, board after board, checking each one, making sure every piece was solid. The fence came together with a quiet sense of inevitability. At some point, there was nothing left to do. It was done.

Then the {object_motif}. {child_name} sat with needle and thread and stitched every seam, every weak place, every thread that was fraying. The whole thing, complete.

Then the path. Every weed pulled. The soil turned. The path opened and clear.

Three problems. All three done.

{child_name} stood back and looked at what had been accomplished, and felt something fundamental shift in their chest. Not because anything had changed about the problems themselves, but because they understood now: the secret wasn't to be faster. It wasn't to be more dedicated. It wasn't to worry harder or try harder. It was to be more disciplined about focus. To pick one thing. Do it all the way. Then move to the next.

"Work through one problem at a time," {child_name} said quietly. "That is how it gets done."

The light was turning gold over {setting}, and {child_name} held the {object_motif} close, knowing that tomorrow would bring more problems. But they also knew now that problems weren't solved by panic, or by juggling, or by trying to do everything at once. They were solved by focus. One thing at a time. All the way.

{refrain}.`
  },
  default: {
    audioTemplate: `The night was still over {setting} when the {hero} had a problem. Then another. Then another.

The {hero} looked at all three and felt lost.

{companion_name} came close. "You have three things. But you are trying to do them all at once. That is why you feel stuck."

The {hero} looked up.

"Work through one problem at a time," said {companion_name}. "Pick one. Finish it. Then the next."

So the {hero} picked one. Finished it. Then the next. Then the last.

All done.

The {hero} felt so much better. The night grew soft. The {object_motif} sat close, and all three problems were solved.

{refrain}.`,
    scriptTemplate: `The night was still over {setting} when {child_name} had a problem. Then another. Then another.

{child_name} looked at all three and felt lost.

{companion_name} came close. "You have three things. But you are trying to do them all at once. That is why you feel stuck."

{child_name} looked up.

"Work through one problem at a time," said {companion_name}. "Pick one. Finish it. Then the next."

So {child_name} picked one. Finished it. Then the next. Then the last.

All done.

{child_name} felt so much better. The night grew soft. The {object_motif} sat close, and all three problems were solved.

{refrain}.`
  }
}
},

  {
    ordinal: 2, title: 'Different Ways',
    concept: 'Different ways to solve the same problem', callback: 'think before you act', ageFloor: 3,
    summary: 'The hero tries one way to solve something, fails, and feels stuck. The companion teaches think before you act, and shows that different approaches exist. The hero tries another way and succeeds.',
    teachingNote: 'Learning to pause and consider alternatives transforms a stuck moment into discovery. One way is not the only way.',
    learningBeat: 'think of different ways',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} lived in {setting} and wanted something high on a shelf. The {object_motif} was waiting there.

"I can reach it," said the {hero}. "I will just reach up high."

The {hero} stood on their toes. Reach. Reach. Reach. But no. Too high. The {object_motif} stayed on the shelf.

The {hero} tried to jump. Jump, jump, jump. Still too high. The {object_motif} did not come down.

The {hero} felt stuck. The shelf was too high. The {hero} was too short. "I can't do this," said the {hero}.

Then {companion_name} came over.

"You tried reaching," said {companion_name}. "That did not work. But think — are there other ways?"

The {hero} stopped. The {hero} thought.

"A stool!" said the {hero}. "I could stand on something!"

"Yes!" said {companion_name}. "Or a chair. Or a box. Many ways work. You just have to think of them."

So the {hero} got a stool. Climbed up. Reached. And took the {object_motif}.

"I did it!" said the {hero}. "I can think of different ways!"

The {hero} held the {object_motif} close. So happy. So sleepy.

{companion_name} smiled. "You thought before you acted. And you found the way that worked."

The {hero} yawned. Over {setting}, the stars came out, soft and slow.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} lived in {setting} and wanted something high on a shelf. The {object_motif} was waiting there.

"I can reach it," said {child_name}. "I will just reach up high."

{child_name} stood on their toes. Reach. Reach. Reach. But no. Too high. The {object_motif} stayed on the shelf.

{child_name} the {hero} tried to jump. Jump, jump, jump. Still too high. The {object_motif} did not come down.

{child_name} felt stuck. The shelf was too high. {child_name} was too short. "I can't do this," said {child_name}.

Then {companion_name} came over.

"You tried reaching," said {companion_name}. "That did not work. But think — are there other ways?"

{child_name} stopped. {child_name} thought.

"A stool!" said {child_name}. "I could stand on something!"

"Yes!" said {companion_name}. "Or a chair. Or a box. Many ways work. You just have to think of them."

So {child_name} got a stool. Climbed up. Reached. And took the {object_motif}.

"I did it!" said {child_name}. "I can think of different ways!"

{child_name} held the {object_motif} close. So happy. So sleepy.

{companion_name} smiled. "You thought before you acted. And you found the way that worked."

{child_name} yawned. Over {setting}, the stars came out, soft and slow.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} wanted to move the {object_motif} from one room to another, but the doorway was too narrow. The {object_motif} was large and wide, and the door was not.

The {hero} tried pushing it straight through. Push. Push. Push. The edges scraped. The corners jammed. The {object_motif} would not fit.

"It's too big," said the {hero}, frustrated. "I can't get it through."

But then the {hero} stopped and thought. {companion_name} had taught this: think before you act. Before you try again, think.

"What if," said the {hero} slowly, "I turned it sideways?"

The {hero} rotated the {object_motif}. Tried it diagonally. Angled it through the doorway. And yes — yes! It slid through. The {object_motif} fit.

"I think of different ways," the {hero} realized. "That is how problems get solved."

The {object_motif} was now in the new room, where it was needed. The {hero} looked at it, pleased.

"Think before you act," said {companion_name}, who had been watching. "And you find the way that works."

The evening came soft over {setting}. The {hero} held the {object_motif} close, knowing tomorrow would bring another stuck moment. But now the {hero} knew: the first way is not the only way.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} wanted to move the {object_motif} from one room to another, but the doorway was too narrow. The {object_motif} was large and wide, and the door was not.

{child_name} tried pushing it straight through. Push. Push. Push. The edges scraped. The corners jammed. The {object_motif} would not fit.

"It's too big," said {child_name}, frustrated. "I can't get it through."

But then {child_name} stopped and thought. {companion_name} had taught this: think before you act. Before you try again, think.

"What if," said {child_name} slowly, "I turned it sideways?"

{child_name} rotated the {object_motif}. Tried it diagonally. Angled it through the doorway. And yes — yes! It slid through. The {object_motif} fit.

"I think of different ways," {child_name} realized. "That is how problems get solved."

The {object_motif} was now in the new room, where it was needed. {child_name} looked at it, pleased.

"Think before you act," said {companion_name}, who had been watching. "And you find the way that works."

The evening came soft over {setting}. {child_name} held the {object_motif} close, knowing tomorrow would bring another stuck moment. But now {child_name} knew: the first way is not the only way.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} stood before a puzzle with no obvious entry point. The {object_motif} needed to be lifted over a wall, but there was no ladder, no ramp, no clear way up.

The {hero}'s first approach: climb the wall yourself, pull the {object_motif} up from above. The {hero} tried. The wall was smooth and too high. Halfway up, the {hero} slipped and fell, unhurt but frustrated. The {object_motif} still sat on the ground, unmoved.

"That didn't work," the {hero} said, breathing hard.

But instead of trying the same thing again harder, the {hero} stopped. Thought. This was what {companion_name} had taught: think before you act. Don't just push harder. Think.

"What if," the {hero} said slowly, "I don't climb the wall at all? What if the {object_motif} goes around?"

The {hero} looked around the corner. There — a gap in the wall, wide enough. A path that ran around the side.

The {hero} carried the {object_motif} through the gap, around the side, and set it down on the other side of the wall, exactly where it needed to be.

Simple. Direct. It had never needed climbing.

"I think of different ways," the {hero} said, understanding now. "The first way is never the only way."

As the light faded over {setting}, the {hero} sat with the {object_motif}, realizing that problems often have multiple solutions. Most people just try one approach and, when it fails, try it harder instead of trying it differently.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} stood before a puzzle with no obvious entry point. The {object_motif} needed to be lifted over a wall, but there was no ladder, no ramp, no clear way up.

{child_name}'s first approach: climb the wall yourself, pull the {object_motif} up from above. {child_name} tried. The wall was smooth and too high. Halfway up, {child_name} slipped and fell, unhurt but frustrated. The {object_motif} still sat on the ground, unmoved.

"That didn't work," {child_name} said, breathing hard.

But instead of trying the same thing again harder, {child_name} stopped. Thought. This was what {companion_name} had taught: think before you act. Don't just push harder. Think.

"What if," {child_name} said slowly, "I don't climb the wall at all? What if the {object_motif} goes around?"

{child_name} looked around the corner. There — a gap in the wall, wide enough. A path that ran around the side.

{child_name} carried the {object_motif} through the gap, around the side, and set it down on the other side of the wall, exactly where it needed to be.

Simple. Direct. It had never needed climbing.

"I think of different ways," {child_name} said, understanding now. "The first way is never the only way."

As the light faded over {setting}, {child_name} sat with the {object_motif}, realizing that problems often have multiple solutions. Most people just try one approach and, when it fails, try it harder instead of trying it differently.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} stood before the {object_motif} with a problem: it had been damaged by salt water and needed cleaning, but they didn't have the right tools. No soft cloth. No gentle soap. Nothing suited for the delicate repair work.

The {hero}'s first instinct was direct: grab a rough towel, use whatever soap was available, and scrub the salt away. It made sense as an approach. Get the damage off quickly.

The {hero} started scrubbing. Within minutes, they realized the rough cloth was making things worse — what had been surface salt damage was becoming scratches in the finish. The {object_motif} was getting damaged by the cleaning, not restored.

The {hero} stopped, frustration rising. They had approached this problem one way, and it had backfired.

{companion_name} came and looked at what had happened.

"You tried one approach," {companion_name} said. "It didn't work. But before you try harder, think. Are there other ways?"

The {hero} sat back and actually considered the problem instead of just reacting to it.

Salt was the issue. Salt dissolved in water. So instead of scrubbing, what if they soaked the {object_motif}? Let the salt dissolve naturally? And instead of harsh soap, what if they used something gentler? What if they let time do the work instead of force?

The {hero} filled a bowl with fresh water and set the {object_motif} in it. Left it for an hour. The salt slowly dissolved. Then they used a soft cloth and gentle soap, and the damage came clean without causing new damage.

"I think of different ways," the {hero} said quietly, holding the cleaned {object_motif}. "The obvious approach isn't always the right one."

As evening settled over {setting}, the {hero} realized something fundamental: problems have multiple solutions, and rushing to the first one often means missing better approaches. The moment of pause — actually thinking before acting — changed everything.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} stood before the {object_motif} with a problem: it had been damaged by salt water and needed cleaning, but they didn't have the right tools. No soft cloth. No gentle soap. Nothing suited for the delicate repair work.

{child_name}'s first instinct was direct: grab a rough towel, use whatever soap was available, and scrub the salt away. It made sense as an approach. Get the damage off quickly.

{child_name} started scrubbing. Within minutes, they realized the rough cloth was making things worse — what had been surface salt damage was becoming scratches in the finish. The {object_motif} was getting damaged by the cleaning, not restored.

{child_name} stopped, frustration rising. They had approached this problem one way, and it had backfired.

{companion_name} came and looked at what had happened.

"You tried one approach," {companion_name} said. "It didn't work. But before you try harder, think. Are there other ways?"

{child_name} sat back and actually considered the problem instead of just reacting to it.

Salt was the issue. Salt dissolved in water. So instead of scrubbing, what if they soaked the {object_motif}? Let the salt dissolve naturally? And instead of harsh soap, what if they used something gentler? What if they let time do the work instead of force?

{child_name} filled a bowl with fresh water and set the {object_motif} in it. Left it for an hour. The salt slowly dissolved. Then they used a soft cloth and gentle soap, and the damage came clean without causing new damage.

"I think of different ways," {child_name} said quietly, holding the cleaned {object_motif}. "The obvious approach isn't always the right one."

As evening settled over {setting}, {child_name} realized something fundamental: problems have multiple solutions, and rushing to the first one often means missing better approaches. The moment of pause — actually thinking before acting — changed everything.

{refrain}.`
  },
  default: {
    audioTemplate: `The {hero} tried one way to do something. It did not work.

But {companion_name} said: "Think. Are there other ways?"

The {hero} thought.

"Yes," said the {hero}. "I could try this way instead."

And that way worked.

"I think of different ways," the {hero} said. "One way is not the only way."

The {object_motif} was solved now. The {hero} held it close as the night grew soft over {setting}.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} tried one way to do something. It did not work.

But {companion_name} said: "Think. Are there other ways?"

{child_name} thought.

"Yes," said {child_name}. "I could try this way instead."

And that way worked.

"I think of different ways," {child_name} said. "One way is not the only way."

The {object_motif} was solved now. {child_name} held it close as the night grew soft over {setting}.

{refrain}.`
  }
}
},

  {
    ordinal: 3, title: 'Inside and Outside',
    concept: 'Problems are puzzles with inside-and-outside pieces', callback: 'ask for help', ageFloor: 3,
    summary: 'A problem shows a visible symptom (outside), but the real cause (inside) stays hidden. The hero learns to ask for help to see both pieces. Builds on Level 2: now with more complex cause-and-effect.',
    teachingNote: 'Problems have two parts: what you see, and what you need to find. Asking for help reveals the inside piece.',
    learningBeat: 'asking makes the puzzle whole',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} woke up and the {object_motif} would not sing. It used to sing when you touched it. Now: silence.

The {hero} shook it. No song.

The {hero} turned it over. Maybe the song was hiding on the bottom?

No song.

The {hero} felt sad. The {object_motif} was broken.

{companion_name} came over. "It won't sing?" they asked.

"No," said the {hero}. "It is broken."

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

"Asking makes the puzzle whole," said the {hero}. "I needed to see both the outside and the inside."

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} woke up and the {object_motif} would not sing. It used to sing when you touched it. Now: silence.

{child_name} shook it. No song.

{child_name} turned it over. Maybe the song was hiding on the bottom?

No song.

{child_name} felt sad. The {object_motif} was broken.

{companion_name} came over. "It won't sing?" they asked.

"No," said {child_name}. "It is broken."

{companion_name} asked to see. They held it, turned it, and listened.

"Can I open it?" asked {companion_name}.

"It might break more," said {child_name}.

"Or," said {companion_name}, "we might find out why."

So {companion_name} carefully opened the {object_motif}. Inside, a tiny thing was stuck. One small piece of dirt. That was all.

"The song is still here," said {companion_name}. "But something inside was in the way."

{companion_name} cleaned out the dirt, very gently.

Then {child_name} touched the {object_motif}.

The song came back! Soft and sweet and real.

{child_name} held it close and felt so happy.

"Asking makes the puzzle whole," said {child_name}. "I needed to see both the outside and the inside."

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero}'s garden was wilting. For three days the seedlings had drooped lower, their leaves turning pale, looking for water that wasn't coming. The {object_motif} hung on the fence nearby, a reminder of better days.

The {hero} had watered the garden every morning. Careful. Thorough. But the plants kept drooping.

"The garden won't drink," the {hero} said to {companion_name}, who had come to look. "I give it water and it still dies."

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

"I was solving the wrong problem," the {hero} said. "I thought: drooping plants need water. But the real problem was: water wasn't reaching the roots. Asking makes the puzzle whole."

The {hero} held the {object_motif}, watching the garden slowly green again.

{refrain}.`,
    scriptTemplate: `{child_name}'s garden was wilting. For three days the seedlings had drooped lower, their leaves turning pale, looking for water that wasn't coming. The {object_motif} hung on the fence nearby, a reminder of better days.

{child_name} had watered the garden every morning. Careful. Thorough. But the plants kept drooping.

"The garden won't drink," {child_name} said to {companion_name}, who had come to look. "I give it water and it still dies."

But {companion_name} knelt in the dirt, dug their fingers down, and felt the soil underneath the top layer. It was hard. Baked. Like stone.

"Feel this," {companion_name} said.

{child_name} felt. Hard. Dry. Deep down.

"When was the last rain?" asked {companion_name}.

{child_name} thought. "Two weeks."

"So the water you give reaches the top," {companion_name} said, "but can't reach deep enough. The roots are dying of thirst down there, even while you water up here. That's the inside problem. The outside problem is drooping leaves. But they're not the same thing."

{child_name} looked at the wilting plants again. Now understanding. The outside said one thing. But underneath, another truth.

"What can we do?" asked {child_name}.

"Soak it," said {companion_name}. "Deep. Let the water reach down where the roots are waiting."

So they brought a bucket. They poured, slowly, and let it soak. They poured again. Waiting. Soaking. Letting the hard ground slowly, gradually, open and drink.

The next morning, the plants had lifted their heads. Not healthy yet. But reaching. Alive.

"I was solving the wrong problem," {child_name} said. "I thought: drooping plants need water. But the real problem was: water wasn't reaching the roots. Asking makes the puzzle whole."

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

"Asking makes the puzzle whole," {companion_name} said. "When you ask for help to see the inside problem, you find the real solution. Not the outside one."

The {hero} held the {object_motif} and slept deeply, understanding now that asking for help had mattered more than struggling alone with only the outside view.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} couldn't sleep. For four nights, sleep had eluded them, and each morning brought a heavier tiredness. They felt caught between exhaustion and wakefulness, stuck in the space where rest should be but wasn't.

"I'm broken," {child_name} said to {companion_name}. "I can't sleep anymore."

{companion_name} listened, then asked questions {child_name} hadn't considered. "When did it start? What was happening then? What changed?"

{child_name} thought back. Four nights ago. That's when the puppy had come — the one staying in a box by the window. Every hour it cried. Every movement startled them awake.

"But I'm used to the noise by now," {child_name} said. "I shouldn't still be waking."

"The outside problem is your waking," said {companion_name}. "But the inside problem might be the puppy's box is right by your head. You've habituated to the noise, but not to the disturbance."

"What do I do?" asked {child_name}.

{companion_name} smiled. "What if the puppy box was further away?"

{child_name} had never thought to move it. They had accepted the noise and assumed themselves broken instead.

That night, they moved the box to the far corner. The puppy still cried, but softer, further, less of a jolt to the sleeping mind.

{child_name} slept through until morning.

"The problem wasn't me," {child_name} realized. "It was the situation. I was trying to solve it by fixing myself, but I needed to fix what was around me."

"Asking makes the puzzle whole," {companion_name} said. "When you ask for help to see the inside problem, you find the real solution. Not the outside one."

{child_name} held the {object_motif} and slept deeply, understanding now that asking for help had mattered more than struggling alone with only the outside view.

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

"Asking makes the puzzle whole," said {companion_name}. "When you ask for help, you see the inside piece — the real cause, not just the symptom."

The {hero} held the {object_motif}, feeling genuinely rested now, knowing that the deeper the understanding, the truer the solution.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had been sick for a week — not dangerously, but enough to keep them in bed, weak and frustrated. The fever had broken. The worst symptoms had passed. But still, they couldn't seem to recover their energy. Sitting up for an hour left them exhausted. Walking to the window drained them completely.

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

"Asking makes the puzzle whole," said {companion_name}. "When you ask for help, you see the inside piece — the real cause, not just the symptom."

{child_name} held the {object_motif}, feeling genuinely rested now, knowing that the deeper the understanding, the truer the solution.

{refrain}.`
  },
  default: {
    audioTemplate: `A lock on the door wouldn't open. The {hero} pushed the key. Nothing.

The {hero} pushed harder. Still nothing.

{companion_name} came over. "Let me look."

They looked at the lock. Inside, hidden, the {hero} could not see: the mechanism was slightly out of alignment.

{companion_name} tapped gently beside the lock. Adjusted something invisible. Then the key turned smooth.

"The problem wasn't the key," {companion_name} said. "Or the door. Inside, something was out of place. You needed help to see it."

The door opened.

The {hero} understood: asking made the puzzle whole.

{refrain}.`,
    scriptTemplate: `A lock on the door wouldn't open. {child_name} pushed the key. Nothing.

{child_name} pushed harder. Still nothing.

{companion_name} came over. "Let me look."

They looked at the lock. Inside, hidden, {child_name} could not see: the mechanism was slightly out of alignment.

{companion_name} tapped gently beside the lock. Adjusted something invisible. Then the key turned smooth.

"The problem wasn't the key," {companion_name} said. "Or the door. Inside, something was out of place. You needed help to see it."

The door opened.

{child_name} understood: asking made the puzzle whole.

{refrain}.`
  }
}
},

  {
    ordinal: 4, title: 'Trying Again',
    concept: 'Trying again after a wrong guess', callback: 'think before you act', ageFloor: 3,
    summary: 'The hero makes a guess or attempt that\'s wrong, realizes it teaches something, tries again with new knowledge, and succeeds. Brings prior tools plus introduces resilience.',
    teachingNote: 'Wrong attempts are not failures; they are teaching moments. Mistakes hold information.',
    learningBeat: 'trying again is how we learn',
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

"Trying again is how we learn," said {companion_name}. "That's how you get better."

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} made a shape out of clay. A bowl. It was pretty. Round and smooth.

But when {child_name} put water in it, the water seeped through the bottom.

The bowl was not good. It had a hole.

{child_name} felt sad.

Then {companion_name} said something new: "The wrong bowl taught you something. The bottom was too thin. Now you know."

{child_name} made another bowl. This time, the bottom was thick. Very thick.

{child_name} put water in it.

The water stayed! The bowl held it!

The first bowl was not a waste. It taught. It showed what wouldn't work. And that helped make the second bowl work.

{child_name} held the {object_motif} and smiled.

"Trying again is how we learn," said {companion_name}. "That's how you get better."

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

"Trying again is how we learn," said {companion_name}. "Wrong guesses teach you something new to try."

The {hero} sat with the {object_motif}, watching the bird disappear into the evening sky.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} was trying to catch a bird that had flown into the cabin. It wasn't dangerous, just a small thing that had gotten confused, and the {object_motif} couldn't be left outside with it loose.

{child_name}'s first attempt: chase it directly. Run at it, corner it, grab it gently.

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

"Trying again is how we learn," said {companion_name}. "Wrong guesses teach you something new to try."

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
    scriptTemplate: `{child_name} the {hero} was rebuilding the {object_motif} after it had broken. There were seventeen small pieces, and {child_name} the {hero} tried to fit them together as they remembered them fitting before.

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

"Trying again is how we learn," {companion_name} said. "That's the whole thing."

The {hero} held the {object_motif}, understanding now that the wall they'd fixed was strong partly because it had been fixed badly first — that failure had held information that success needed.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had an idea for how to reinforce a cracked wall: if they packed clay deeply into the crack, it might hold and prevent further breaking. It made sense in theory. In execution, the clay didn't bond to the old stone; it just sat there, inert and separate, not integrated.

When {child_name} tested it, the clay pulled away. The crack remained as vulnerable as before.

"That didn't work," {child_name} said, sitting back.

{companion_name} examined the failed attempt. "What did you learn?"

"That clay doesn't stick well to old stone," {child_name} said.

"Yes," {companion_name} agreed. "Now you know. What could you try instead?"

{child_name} thought about what they'd discovered: clay and stone don't bond. But what if they used something that would? Mortar, which was made to bind. Or better still — what if they cleaned out the loose material first, dampened the stone, then applied the mortar in layers, letting each dry before adding the next?

This time, the repair held. Not perfect, but solid. The crack stayed sealed.

"The first try didn't fail," said {companion_name}. "It taught. It showed you that clay and stone don't work together, which meant your next try could build on that knowledge."

"I spent an hour on something that didn't work," said {child_name}.

"You spent an hour gathering knowledge," {companion_name} said. "The second try was faster and more successful because of the first."

{child_name} looked at the sealed crack, thinking about the journey from wrong guess to right answer.

"It's not linear," {child_name} mused. "You don't go straight from problem to solution. You try, learn, adjust, try again."

"Trying again is how we learn," {companion_name} said. "That's the whole thing."

{child_name} held the {object_motif}, understanding now that the wall they'd fixed was strong partly because it had been fixed badly first — that failure had held information that success needed.

{refrain}.`
  },
  default: {
    audioTemplate: `The {hero} tried to build something. The first try didn't work.

But the try taught them something.

They tried again, using what they learned.

This time, it worked.

"Trying again is how we learn," said {companion_name}. "That's how you get better."

The {hero} held the {object_motif}, knowing now that trying again was not failing. It was learning.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} tried to build something. The first try didn't work.

But the try taught them something.

They tried again, using what they learned.

This time, it worked.

"Trying again is how we learn," said {companion_name}. "That's how you get better."

{child_name} held the {object_motif}, knowing now that trying again was not failing. It was learning.

{refrain}.`
  }
}
},

  {
    ordinal: 5, title: 'Listen to What It Needs',
    concept: 'Problems have their own solutions: listen to what the problem is asking for', callback: 'ask for help', ageFloor: 3,
    summary: 'A multi-part problem where the obvious solution won\'t work because the problem itself communicates what it needs. The hero learns to listen to what the problem is asking for, not what they assume it needs.',
    teachingNote: 'Problems communicate what will solve them. Listening — not forcing — reveals the right answer.',
    learningBeat: 'listen to what it needs',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} found a {object_motif} stuck in the soft dirt. It was caught. It needed to come out.

The {hero} pulled hard. Pull, pull, pull!

But the harder the {hero} pulled, the more stuck it became. The {object_motif} went deeper, not free.

The {hero} tried again. Pull harder!

Still stuck. Deeper.

{companion_name} came over. "Wait," they said. "Stop pulling. Feel what the {object_motif} is telling you."

The {hero} stopped and listened.

"The dirt is soft," said {companion_name}. "The {object_motif} doesn't need pulling. It needs gentle wiggling. Small back-and-forth. Let the dirt loosen around it."

So the {hero} held the {object_motif} and wiggled it. Small wiggles. Back and forth. The dirt loosened. The {object_motif} came free, gentle and easy.

"I was pulling, but the {object_motif} needed me to listen," said the {hero}. "It told me what to do."

The {hero} held the {object_motif} close.

"Listen to what it needs," said {companion_name}. "That's how you solve it right."

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} found a {object_motif} stuck in the soft dirt. It was caught. It needed to come out.

{child_name} pulled hard. Pull, pull, pull!

But the harder {child_name} pulled, the more stuck it became. The {object_motif} went deeper, not free.

{child_name} tried again. Pull harder!

Still stuck. Deeper.

{companion_name} came over. "Wait," they said. "Stop pulling. Feel what the {object_motif} is telling you."

{child_name} stopped and listened.

"The dirt is soft," said {companion_name}. "The {object_motif} doesn't need pulling. It needs gentle wiggling. Small back-and-forth. Let the dirt loosen around it."

So {child_name} held the {object_motif} and wiggled it. Small wiggles. Back and forth. The dirt loosened. The {object_motif} came free, gentle and easy.

"I was pulling, but the {object_motif} needed me to listen," said {child_name}. "It told me what to do."

{child_name} held the {object_motif} close.

"Listen to what it needs," said {companion_name}. "That's how you solve it right."

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} faced a door that would not budge. It was locked. The {object_motif} was on the other side, and the {hero} needed to get through.

The {hero} pushed the door hard. Push, push, push. The door didn't move. It was solid and unyielding.

The {hero} tried running at it. Crash! The door didn't open. The {hero} bounced back, frustrated.

"The lock is too strong," said the {hero}. "I can't force it."

{companion_name} came and looked at the door. "Stop trying to force it open. Listen to what the door is telling you."

"The door?" said the {hero}. "It's just a door."

"Look closer," said {companion_name}.

The {hero} looked. Around the frame, near the top, was a tiny hook. A rope hung from it, barely visible.

"The door doesn't want to be forced," said {companion_name}. "It wants to be pulled up. It's sliding, not swinging. Listen to what it's trying to tell you."

The {hero} reached up and pulled the rope gently. The door slid up, smooth and easy. The mechanism was there all along. The {hero} just hadn't listened to what the door was asking.

Behind the door sat the {object_motif}, waiting.

"I was trying so hard to force it," said the {hero}. "But if I had listened — really looked at what the door was showing me — I would have known the answer."

"Listen to what it needs," said {companion_name}. "Problems show you how to solve them, if you pay attention."

The {hero} carried the {object_motif} back, understanding that the answer had been there all along, hidden in what the problem was trying to tell.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} faced a door that would not budge. It was locked. The {object_motif} was on the other side, and {child_name} needed to get through.

{child_name} pushed the door hard. Push, push, push. The door didn't move. It was solid and unyielding.

{child_name} tried running at it. Crash! The door didn't open. {child_name} bounced back, frustrated.

"The lock is too strong," said {child_name}. "I can't force it."

{companion_name} came and looked at the door. "Stop trying to force it open. Listen to what the door is telling you."

"The door?" said {child_name}. "It's just a door."

"Look closer," said {companion_name}.

{child_name} looked. Around the frame, near the top, was a tiny hook. A rope hung from it, barely visible.

"The door doesn't want to be forced," said {companion_name}. "It wants to be pulled up. It's sliding, not swinging. Listen to what it's trying to tell you."

{child_name} reached up and pulled the rope gently. The door slid up, smooth and easy. The mechanism was there all along. {child_name} just hadn't listened to what the door was asking.

Behind the door sat the {object_motif}, waiting.

"I was trying so hard to force it," said {child_name}. "But if I had listened — really looked at what the door was showing me — I would have known the answer."

"Listen to what it needs," said {companion_name}. "Problems show you how to solve them, if you pay attention."

{child_name} carried the {object_motif} back, understanding that the answer had been there all along, hidden in what the problem was trying to tell.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} had a delicate puzzle box, the {object_motif}. It was locked with no visible keyhole. After examining it carefully, the {hero} concluded it must be forced open. Gently at first, but if necessary, forcefully.

The {hero} pushed on the lid. Nothing. Pushed harder. The wood creaked. Still nothing. The {hero} felt the old wood starting to crack under the pressure.

Then {companion_name} arrived.

"Stop," they said. "You're about to break it. Listen to what the box is telling you instead."

"What is it telling me?" the {hero} asked, frustrated.

"Feel it," said {companion_name}. "Don't push. Feel."

The {hero} held the box gently and felt along its surface. There — a small ridge. A groove that ran around the seam. The box wasn't meant to open by force. It was meant to slide.

The {hero} slid the lid sideways, slowly. It moved. Smooth. The whole lid shifted to the side, revealing an opening.

Inside sat something precious — not because it was valuable, but because it had been protected so carefully. The {object_motif} gleamed in the soft light.

"The box was telling me the whole time," said the {hero}. "It just wasn't telling me in the way I expected. If I'd listened — really paid attention to how it was made, not just how I wanted to open it — I would have known."

"Listen to what it needs," said {companion_name}. "Problems show you their solutions. You just have to be patient enough to understand the language they're speaking."

The {hero} closed the box carefully, now understanding that the most elegant solutions often come from listening to what the problem is actually trying to tell you, not from forcing your will onto it.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had a delicate puzzle box, the {object_motif}. It was locked with no visible keyhole. After examining it carefully, {child_name} concluded it must be forced open. Gently at first, but if necessary, forcefully.

{child_name} pushed on the lid. Nothing. Pushed harder. The wood creaked. Still nothing. {child_name} felt the old wood starting to crack under the pressure.

Then {companion_name} arrived.

"Stop," they said. "You're about to break it. Listen to what the box is telling you instead."

"What is it telling me?" {child_name} asked, frustrated.

"Feel it," said {companion_name}. "Don't push. Feel."

{child_name} held the box gently and felt along its surface. There — a small ridge. A groove that ran around the seam. The box wasn't meant to open by force. It was meant to slide.

{child_name} slid the lid sideways, slowly. It moved. Smooth. The whole lid shifted to the side, revealing an opening.

Inside sat something precious — not because it was valuable, but because it had been protected so carefully. The {object_motif} gleamed in the soft light.

"The box was telling me the whole time," said {child_name}. "It just wasn't telling me in the way I expected. If I'd listened — really paid attention to how it was made, not just how I wanted to open it — I would have known."

"Listen to what it needs," said {companion_name}. "Problems show you their solutions. You just have to be patient enough to understand the language they're speaking."

{child_name} closed the box carefully, now understanding that the most elegant solutions often come from listening to what the problem is actually trying to tell you, not from forcing your will onto it.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} came upon the {object_motif}, and it needed repair. But this was delicate work, the kind that demanded a particular kind of listening.

The {hero}'s instinct was direct: identify the damage, attack the problem aggressively, get it fixed. Pull out the broken parts. Replace them. Move on.

But {companion_name} stopped them.

"What is the {object_motif} telling you?" {companion_name} asked.

"That it's broken," the {hero} said. "And needs fixing."

"Listen deeper," said {companion_name}. "Not just to the damage, but to what the {object_motif} is made of. What it's asking for."

So the {hero} held the {object_motif} and really felt it. The material was old, fragile. Any aggressive repair would cause more damage than the original break. It wasn't asking for force. It was asking for gentleness.

The {hero} didn't pull out the broken parts. Instead, they reinforced them carefully from the inside. They didn't replace anything. They supported what was already there. They used material that matched the original, not something harsh and new.

It took longer. It required patience. But when the {hero} was done, the {object_motif} was not just repaired — it was renewed. The repair had become part of its history, not a scar upon it.

"The {object_motif} was telling me what it needed," the {hero} said quietly. "Not to be attacked and fixed, but to be listened to and supported."

"That's what listening means," said {companion_name}. "Understanding what the problem is actually asking for — not the loud, obvious demand — but the quiet truth underneath. Forcing is fast. Listening takes time. But listening gets you the right answer."

The {hero} held the {object_motif} close, understanding that the most skilled problem-solvers aren't the ones who attack hardest. They're the ones who listen most carefully to what the problem is actually, truly asking for.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} came upon the {object_motif}, and it needed repair. But this was delicate work, the kind that demanded a particular kind of listening.

{child_name}'s instinct was direct: identify the damage, attack the problem aggressively, get it fixed. Pull out the broken parts. Replace them. Move on.

But {companion_name} stopped them.

"What is the {object_motif} telling you?" {companion_name} asked.

"That it's broken," {child_name} said. "And needs fixing."

"Listen deeper," said {companion_name}. "Not just to the damage, but to what the {object_motif} is made of. What it's asking for."

So {child_name} held the {object_motif} and really felt it. The material was old, fragile. Any aggressive repair would cause more damage than the original break. It wasn't asking for force. It was asking for gentleness.

{child_name} didn't pull out the broken parts. Instead, they reinforced them carefully from the inside. They didn't replace anything. They supported what was already there. They used material that matched the original, not something harsh and new.

It took longer. It required patience. But when {child_name} was done, the {object_motif} was not just repaired — it was renewed. The repair had become part of its history, not a scar upon it.

"The {object_motif} was telling me what it needed," {child_name} said quietly. "Not to be attacked and fixed, but to be listened to and supported."

"That's what listening means," said {companion_name}. "Understanding what the problem is actually asking for — not the loud, obvious demand — but the quiet truth underneath. Forcing is fast. Listening takes time. But listening gets you the right answer."

{child_name} held the {object_motif} close, understanding that the most skilled problem-solvers aren't the ones who attack hardest. They're the ones who listen most carefully to what the problem is actually, truly asking for.

{refrain}.`
  },
  default: {
    audioTemplate: `The {hero} faced a problem. The {hero} wanted to force it open. Push, push, push.

But {companion_name} said: "Wait. Listen to what it is asking for."

So the {hero} stopped. Listened. Felt. And understood what the problem needed.

Not force. But gentleness.

The {hero} gave it what it needed, and the problem opened.

"Listen to what it needs," said the {hero}. "That is how you solve it."

The {object_motif} was held close. The night grew soft over {setting}.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} faced a problem. {child_name} the {hero} wanted to force it open. Push, push, push.

But {companion_name} said: "Wait. Listen to what it is asking for."

So {child_name} stopped. Listened. Felt. And understood what the problem needed.

Not force. But gentleness.

{child_name} gave it what it needed, and the problem opened.

"Listen to what it needs," said {child_name}. "That is how you solve it."

The {object_motif} was held close. The night grew soft over {setting}.

{refrain}.`
  }
}
}
]
