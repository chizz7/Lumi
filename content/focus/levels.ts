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
  '3-4': { audioTemplate: `The {hero} had many things to do in {setting}. So many things! And the {hero} wanted to do them all at once.

The {hero} wanted to build a tall tower. The {hero} wanted to paint a little fish. The {hero} wanted to find the {object_motif}. All of it. Right now.

So the {hero} started the tower. One block. Two blocks. Three blocks up. But then a block slipped down. The {hero} did not stop to fix it. The {hero} ran off to paint instead.

Then the {hero} started the fish. One fin. Two fins. But the fish was tricky to paint. The {hero} did not finish it. The {hero} ran off to look for the {object_motif} instead.

The {hero} looked here. The {hero} looked there. The {hero} looked up high and down low. The {hero} looked behind the big chair. But the {object_motif} was hidden well. Looking was slow. Looking was hard. And so the {hero} stopped again.

Now the {hero} looked around at everything. The tower was not done. The fish was not done. The {object_motif} was still lost. Nothing was done at all. The {hero} felt cross and hot inside. The {hero} wanted to cry.

{companion_name} came and sat down close. {companion_name} spoke in a soft, kind voice. 'One thing, then the next. Do the first thing all the way. The other things can wait for you. They will still be there.'

The {hero} took a big, slow breath. In, and out.

The {hero} went back to the tower. Only the tower. Nothing else. Three blocks. Four blocks. Five blocks up! The tower stood tall and strong. It was done.

Then the fish. Only the fish. Nothing else. One fin. Two fins. A big round eye. A little smile. The fish was done.

Then the {object_motif}. Only that. Nothing else. Slow and calm. The {hero} looked behind the big chair. The {hero} looked under the soft mat. And there it was! Found at last.

The {hero} held the {object_motif} up high. Everything was done now. Every single thing.

{companion_name} smiled a warm, sleepy smile. 'All finished. Look at that.'

The {hero} gave a big, happy yawn. The moon came up soft and round above {setting}. The {hero} felt calm. The {hero} felt sleepy. And the {hero} felt very, very glad.

{refrain}.`, scriptTemplate: `{child_name} had many things to do in {setting}. So many things! And {child_name} wanted to do them all at once.

{child_name} wanted to build a tall tower. {child_name} wanted to paint a little fish. {child_name} wanted to find the {object_motif}. All of it. Right now.

So {child_name} started the tower. One block. Two blocks. Three blocks up. But then a block slipped down. {child_name} did not stop to fix it. {child_name} ran off to paint instead.

Then {child_name} started the fish. One fin. Two fins. But the fish was tricky to paint. {child_name} did not finish it. {child_name} ran off to look for the {object_motif} instead.

{child_name} looked here. {child_name} looked there. {child_name} looked up high and down low. {child_name} looked behind the big chair. But the {object_motif} was hidden well. Looking was slow. Looking was hard. And so {child_name} stopped again.

Now {child_name} looked around at everything. The tower was not done. The fish was not done. The {object_motif} was still lost. Nothing was done at all. {child_name} felt cross and hot inside. {child_name} wanted to cry.

{companion_name} came and sat down close. {companion_name} spoke in a soft, kind voice. 'One thing, then the next. Do the first thing all the way. The other things can wait for you. They will still be there.'

{child_name} took a big, slow breath. In, and out.

{child_name} went back to the tower. Only the tower. Nothing else. Three blocks. Four blocks. Five blocks up! The tower stood tall and strong. It was done.

Then the fish. Only the fish. Nothing else. One fin. Two fins. A big round eye. A little smile. The fish was done.

Then the {object_motif}. Only that. Nothing else. Slow and calm. {child_name} looked behind the big chair. {child_name} looked under the soft mat. And there it was! Found at last.

{child_name} held the {object_motif} up high. Everything was done now. Every single thing.

{companion_name} smiled a warm, sleepy smile. 'All finished. Look at that.'

{child_name} gave a big, happy yawn. The moon came up soft and round above {setting}. {child_name} felt calm. {child_name} felt sleepy. And {child_name} felt very, very glad.

{refrain}.` },
  '5-6': { audioTemplate: `The {hero} woke up in {setting} with a busy, bouncy feeling. There was so much to do today, and the {hero} wanted to do every bit of it at once.

'I will build the tallest tower,' said the {hero}, hopping out of bed. 'And paint a picture. And find the {object_motif}. And tidy the whole nook. All before lunch!'

So the {hero} began the tower. The blocks went up, one on top of another, wobbling higher and higher and higher. But then a block slipped, and the whole top leaned. Instead of fixing it, the {hero} thought, I will paint instead. Painting will be quicker anyway.

The {hero} ran to the paints and dipped the brush. Blue for the sky. Green for the hills. But the green was tricky to mix, and it kept coming out muddy, and before the picture was even half done the {hero} thought, I will look for the {object_motif} instead. That will be much more fun.

So the {hero} hunted here and there, under the rug, behind the door, inside the toy box. But the {object_motif} was hidden well, and hunting was slow, and slow felt boring, so the {hero} thought, I will tidy up instead. Tidying is easy. I can do that.

But the nook was full of half-started things now. A half-built tower, leaning over. A half-painted picture, still wet. Boxes pulled out and left open all across the floor. The {hero} turned in a slow circle and felt hot tears sting. Nothing was finished. Nothing at all. Everything was a muddle, and the muddle was bigger than when the day began.

{companion_name} padded over and sat down close beside the {hero}. 'That looks like a heavy, tangled feeling,' {companion_name} said gently. 'You started four things this morning, and now all four are calling to you at the very same time.'

The {hero} sniffled and rubbed a red nose. 'I wanted to do them all. But I can't.'

'You can,' said {companion_name}. 'Just not in the same moment. One thing, then the next. Give the tower everything until it stands. Then the painting. It all gets easier when your hands are holding only one.'

The {hero} wiped both eyes with the back of a hand and thought about that for a little while. It sounded almost too simple to be true. Then the {hero} went back to the tower, and only the tower, and nothing else at all. The slipped block went back into place. One more on top, then another, careful and slow and steady, until the tower stood taller than the {hero}'s own knee. Done.

Then the painting, and only the painting. The {hero} stirred and stirred, and the green got mixed at last. The hills turned green and the sky turned blue, and a small round sun sat glowing in the corner. Done.

Then the {hero} searched for the {object_motif}, and only that, slow and patient, looking under and behind and inside, one place at a time, until there it was in the very last spot of all. The {hero} held the {object_motif} up high and laughed out loud. Done.

And the tidying was the easiest of all now, because most things were already finished and simply needed to go back where they belonged. Block by block, box by box, brush by brush, the whole nook grew tidy and neat again.

The {hero} stood in the middle and looked all around. A tower standing tall. A picture drying on the wall. The {object_motif} in the middle of the table. Everything exactly where it belonged.

{companion_name} gave a warm little hum. 'Look at all of it. Every single bit finished.'

The {hero} grinned a tired, happy grin. Outside, {setting} was going quiet and blue, and a soft dark was gently tucking everything in for the night. The {hero} curled up small, the busy, bouncy feeling all melted away at last, calm and slow and ready to sleep.

{refrain}.`, scriptTemplate: `{child_name} woke up in {setting} with a busy, bouncy feeling. There was so much to do today, and {child_name} wanted to do every bit of it at once.

'I will build the tallest tower,' said {child_name}, hopping out of bed. 'And paint a picture. And find the {object_motif}. And tidy the whole nook. All before lunch!'

So {child_name} began the tower. The blocks went up, one on top of another, wobbling higher and higher and higher. But then a block slipped, and the whole top leaned. Instead of fixing it, {child_name} thought, I will paint instead. Painting will be quicker anyway.

{child_name} ran to the paints and dipped the brush. Blue for the sky. Green for the hills. But the green was tricky to mix, and it kept coming out muddy, and before the picture was even half done {child_name} thought, I will look for the {object_motif} instead. That will be much more fun.

So {child_name} hunted here and there, under the rug, behind the door, inside the toy box. But the {object_motif} was hidden well, and hunting was slow, and slow felt boring, so {child_name} thought, I will tidy up instead. Tidying is easy. I can do that.

But the nook was full of half-started things now. A half-built tower, leaning over. A half-painted picture, still wet. Boxes pulled out and left open all across the floor. {child_name} turned in a slow circle and felt hot tears sting. Nothing was finished. Nothing at all. Everything was a muddle, and the muddle was bigger than when the day began.

{companion_name} padded over and sat down close beside {child_name}. 'That looks like a heavy, tangled feeling,' {companion_name} said gently. 'You started four things this morning, and now all four are calling to you at the very same time.'

{child_name} sniffled and rubbed a red nose. 'I wanted to do them all. But I can't.'

'You can,' said {companion_name}. 'Just not in the same moment. One thing, then the next. Give the tower everything until it stands. Then the painting. It all gets easier when your hands are holding only one.'

{child_name} wiped both eyes with the back of a hand and thought about that for a little while. It sounded almost too simple to be true. Then {child_name} went back to the tower, and only the tower, and nothing else at all. The slipped block went back into place. One more on top, then another, careful and slow and steady, until the tower stood taller than {child_name}'s own knee. Done.

Then the painting, and only the painting. {child_name} stirred and stirred, and the green got mixed at last. The hills turned green and the sky turned blue, and a small round sun sat glowing in the corner. Done.

Then {child_name} searched for the {object_motif}, and only that, slow and patient, looking under and behind and inside, one place at a time, until there it was in the very last spot of all. {child_name} held the {object_motif} up high and laughed out loud. Done.

And the tidying was the easiest of all now, because most things were already finished and simply needed to go back where they belonged. Block by block, box by box, brush by brush, the whole nook grew tidy and neat again.

{child_name} stood in the middle and looked all around. A tower standing tall. A picture drying on the wall. The {object_motif} in the middle of the table. Everything exactly where it belonged.

{companion_name} gave a warm little hum. 'Look at all of it. Every single bit finished.'

{child_name} grinned a tired, happy grin. Outside, {setting} was going quiet and blue, and a soft dark was gently tucking everything in for the night. {child_name} curled up small, the busy, bouncy feeling all melted away at last, calm and slow and ready to sleep.

{refrain}.` },
  '7-8': { audioTemplate: `The {hero} had a whole afternoon and a whole long list, and the {hero} meant to finish every single thing on it before the sky went dark over {setting}.

There was a fort to build. A map to draw. The {object_motif} to find, the one that had been missing for days now. And a whole shelf of scattered treasures to sort back into their baskets. It was a big list, but the afternoon was long, and the {hero} felt sure there was time.

'Easy,' the {hero} said out loud, rolling up both sleeves. 'I will just do them all at once.'

So the {hero} started the fort, dragging cushions and branches into a tall, leaning wall. It was going well, too, until one corner sagged and slid. Instead of propping it back up, the {hero} spotted the drawing paper across the room and thought, the map will be quicker. I will do that part first and come back.

The map started fine. A river here, a winding path there, a little forest of dots for trees. But the coastline was fiddly, all little bays and points, and the {hero}'s lines kept going crooked and wobbly no matter how carefully they tried to steer the pencil. It was slow, careful work, and the {hero} did not much like slow, careful work. Before the coast was anywhere near done, the {hero} put the pencil down. Finding the {object_motif} would be far more fun, the {hero} decided.

So off the {hero} went, lifting lids and peering under things and shaking out cushions. But the {object_motif} stayed stubbornly hidden, and searching with no luck at all felt slow and dull. The scattered treasures caught the {hero}'s eye instead, bright and easy. Maybe sorting those would feel like getting somewhere.

But halfway through the very first basket, the {hero} stopped and looked up, and the looking made the {hero}'s stomach sink right down.

The fort was a sagging heap. The map trailed off into a crooked, half-drawn coast. The {object_motif} was still lost. And now the treasures sat in three half-sorted piles instead of one tidy mess. Four things begun. Nothing, not one thing, finished. The whole nook looked worse than when the {hero} had started, and the sky outside the window was already turning deep gold.

The {hero} sat down hard on the floor and let out a long, wobbly breath. 'I worked the whole afternoon,' the {hero} said quietly, 'and I have nothing to show for it. Nothing.'

'You did work hard. That part is true,' said {companion_name}, stepping carefully over the sagging fort to sit close by. 'I watched you the whole time. Do you know what I saw? Someone who ran off to a brand new thing every single time the old one got tricky.'

The {hero} frowned down at the floor. 'Because the tricky part was boring.'

'The tricky part is the part that matters,' {companion_name} said. 'When you leave it behind, the trickiness just waits for you in the next thing, and the next. One thing, then the next, all the way through. Pick one. Give it all of you, even the boring middle, until it is truly done. Then pick up the next.'

The {hero} looked at the four unfinished messes spread across the floor. It felt impossible and simple at the very same time.

'Which one first?' the {hero} asked.

'You choose,' said {companion_name}.

So the {hero} chose the fort. Only the fort, nothing else. The sagging corner got a proper prop, then a second one to be sure. A roof of blanket went over the top and was tucked in tight. The {hero} crawled inside, held their breath, and it held too. Done. Really done, this time.

Then the map. Only the map. The crooked coast was still a little crooked, but the {hero} stayed right with it this time, breathing slow, not letting the eyes wander to anything else, going carefully around every wiggly bay and pointed cape until the whole island had a proper edge all the way around. The {hero} added the winding river last, and the little forest of trees, and a small star to mark the way home. Done.

Then the {object_motif}. Only that. The {hero} searched properly now, one shelf at a time instead of darting all over, checking each spot before moving to the next. And behind the very last basket on the very last shelf, the {hero}'s fingers finally closed around it. The {hero} lifted the {object_motif} into the air and laughed out loud.

And the treasures were the easiest of all, because the {hero} was in the good swing of finishing now, and one basket after another filled up and clicked shut. Shells in one, stones in another, feathers in the last. It went quickly, the way things do when you are not trying to do three of them at the very same time.

The {hero} stood in the middle of the nook and turned in a slow circle. A fort that held. A finished map. The {object_motif} back at last. Every basket full and closed. It had all fit into the one afternoon after all.

{companion_name} leaned against the sturdy fort with a quiet, pleased look and did not say a single word, which somehow said plenty.

Outside, the last of the gold was fading, and the lanterns of {setting} were blinking on, one by one by one, like the day itself was finishing up, slow and unhurried. The {hero} yawned wide, crawled into the finished fort, and felt the good, heavy calm of a job done all the way to the end.

{refrain}.`, scriptTemplate: `{child_name} had a whole afternoon and a whole long list, and {child_name} meant to finish every single thing on it before the sky went dark over {setting}.

There was a fort to build. A map to draw. The {object_motif} to find, the one that had been missing for days now. And a whole shelf of scattered treasures to sort back into their baskets. It was a big list, but the afternoon was long, and {child_name} felt sure there was time.

'Easy,' {child_name} said out loud, rolling up both sleeves. 'I will just do them all at once.'

So {child_name} started the fort, dragging cushions and branches into a tall, leaning wall. It was going well, too, until one corner sagged and slid. Instead of propping it back up, {child_name} spotted the drawing paper across the room and thought, the map will be quicker. I will do that part first and come back.

The map started fine. A river here, a winding path there, a little forest of dots for trees. But the coastline was fiddly, all little bays and points, and {child_name}'s lines kept going crooked and wobbly no matter how carefully they tried to steer the pencil. It was slow, careful work, and {child_name} did not much like slow, careful work. Before the coast was anywhere near done, {child_name} put the pencil down. Finding the {object_motif} would be far more fun, {child_name} decided.

So off {child_name} went, lifting lids and peering under things and shaking out cushions. But the {object_motif} stayed stubbornly hidden, and searching with no luck at all felt slow and dull. The scattered treasures caught {child_name}'s eye instead, bright and easy. Maybe sorting those would feel like getting somewhere.

But halfway through the very first basket, {child_name} stopped and looked up, and the looking made {child_name}'s stomach sink right down.

The fort was a sagging heap. The map trailed off into a crooked, half-drawn coast. The {object_motif} was still lost. And now the treasures sat in three half-sorted piles instead of one tidy mess. Four things begun. Nothing, not one thing, finished. The whole nook looked worse than when {child_name} had started, and the sky outside the window was already turning deep gold.

{child_name} sat down hard on the floor and let out a long, wobbly breath. 'I worked the whole afternoon,' {child_name} said quietly, 'and I have nothing to show for it. Nothing.'

'You did work hard. That part is true,' said {companion_name}, stepping carefully over the sagging fort to sit close by. 'I watched you the whole time. Do you know what I saw? Someone who ran off to a brand new thing every single time the old one got tricky.'

{child_name} frowned down at the floor. 'Because the tricky part was boring.'

'The tricky part is the part that matters,' {companion_name} said. 'When you leave it behind, the trickiness just waits for you in the next thing, and the next. One thing, then the next, all the way through. Pick one. Give it all of you, even the boring middle, until it is truly done. Then pick up the next.'

{child_name} looked at the four unfinished messes spread across the floor. It felt impossible and simple at the very same time.

'Which one first?' {child_name} asked.

'You choose,' said {companion_name}.

So {child_name} chose the fort. Only the fort, nothing else. The sagging corner got a proper prop, then a second one to be sure. A roof of blanket went over the top and was tucked in tight. {child_name} crawled inside, held their breath, and it held too. Done. Really done, this time.

Then the map. Only the map. The crooked coast was still a little crooked, but {child_name} stayed right with it this time, breathing slow, not letting the eyes wander to anything else, going carefully around every wiggly bay and pointed cape until the whole island had a proper edge all the way around. {child_name} added the winding river last, and the little forest of trees, and a small star to mark the way home. Done.

Then the {object_motif}. Only that. {child_name} searched properly now, one shelf at a time instead of darting all over, checking each spot before moving to the next. And behind the very last basket on the very last shelf, {child_name}'s fingers finally closed around it. {child_name} lifted the {object_motif} into the air and laughed out loud.

And the treasures were the easiest of all, because {child_name} was in the good swing of finishing now, and one basket after another filled up and clicked shut. Shells in one, stones in another, feathers in the last. It went quickly, the way things do when you are not trying to do three of them at the very same time.

{child_name} stood in the middle of the nook and turned in a slow circle. A fort that held. A finished map. The {object_motif} back at last. Every basket full and closed. It had all fit into the one afternoon after all.

{companion_name} leaned against the sturdy fort with a quiet, pleased look and did not say a single word, which somehow said plenty.

Outside, the last of the gold was fading, and the lanterns of {setting} were blinking on, one by one by one, like the day itself was finishing up, slow and unhurried. {child_name} yawned wide, crawled into the finished fort, and felt the good, heavy calm of a job done all the way to the end.

{refrain}.` },
  '9-11': { audioTemplate: `The {hero} had exactly one afternoon to get everything ready, and everything was a long list.

Friends were coming to {setting} at dusk. It was the first proper gathering the {hero} had ever hosted, the sort of thing the {hero} had watched grown-ups do a hundred times and had always looked so easy, and now the {hero} wanted every part of it to be right. There were lanterns to string along the path. A pot of soup to tend on the low fire. A tray of little honey-cakes to bake. A welcome sign to letter and hang above the door. And somewhere in the muddle, the {object_motif} had to be found and set out on the table, because a gathering in {setting} simply was not a gathering without it. The {hero} had wanted this day for weeks, and there could be no do-over. It had to go well the first time.

'Plenty of time,' the {hero} told themselves, surveying it all, 'as long as I keep everything moving at once.'

So that was the plan, and it seemed a clever one: keep everything moving at once, never let a single job sit still. The {hero} lit the fire under the soup, then hurried straight off to string the first lantern while it heated. Halfway up the path, hands full of tangled cord, the {hero} remembered that the honey-cakes needed mixing early or they would never bake and cool in time. So down came the cord, half-strung and looping in the dirt, and off the {hero} went to the mixing bowl.

The batter was sticky and slow to come together. Before it was anywhere near smooth, another thought arrived, sharp and urgent: the welcome sign would take ages to letter, and the ink took ages to dry, so it was really better to start that now. The {hero} wiped sticky fingers on a cloth, left the bowl sitting, and picked up the lettering brush. Two letters in, the brush was too fat for neat work and needed a finer point, and while hunting through the drawer for a better one the {hero} passed the table and thought, the {object_motif}. I still have not found the {object_motif}, and everyone will notice if it is missing. So the search began instead, drawers pulled open, shelves patted down, cushions lifted and dropped.

That was when the smell reached them.

The soup. The {hero} spun around. The pot had climbed from a gentle simmer to a furious, spitting boil, and the bottom was beginning to catch and blacken. The {hero} hauled it off the heat, chest giving a hard, sick lurch, and stood there breathing the scorched, bitter smell while the afternoon light leaned long and gold across the floor and the shadows stretched toward evening.

The {hero} made themselves stop, and look, and really look, at the whole nook.

The soup was saved, barely, but it had needed watching and had not got any. One lantern hung crooked over the path and the rest lay in a tangle in the dirt. The batter sat half-mixed and slowly going stiff in the bowl. The welcome sign said WELC and nothing more, the ink already drying on an unfinished word. The {object_motif} was still lost. Dusk was maybe an hour off now, and the {hero} had been busy, genuinely and sweatily busy, moving without a single pause for the entire afternoon, and had somehow finished not one single thing on the list.

Something hot pricked behind the {hero}'s eyes. Not quite tears. Just the awful, cornered feeling of having run and run at top speed and arrived precisely nowhere.

'You have had a whirlwind of an afternoon,' said {companion_name}, who had come in quietly through the side door and was taking in the wreckage without a single trace of scolding. 'There is something I want to ask you. Not to be clever. I actually want to know. How many of these jobs did you start?'

The {hero} counted them off on sticky fingers, throat tight. 'All of them. Every single one.'

'And how many did you actually finish before you moved on to the next?'

'None,' the {hero} admitted, and the word came out very small.

'And how many did you leave the very second they got difficult?'

The {hero} did not answer, and the silence was its own kind of answer.

{companion_name} crouched down by the tangled lanterns and lifted one, turning it slowly over. 'Here is the thing nobody quite tells you. Your attention is not like water. You cannot pour it into five cups at once and expect any of them to fill. It only ever fills one at a time. Every time you jumped to a new job, you carried a full cup to a new empty one and spilled what was already in it. One thing, then the next. Fill a single cup all the way up. Then, and only then, move.'

'But there is so little time left,' the {hero} said, gesturing helplessly at the window. 'Doing them one at a time feels far too slow. I will never finish.'

'It feels slow,' {companion_name} agreed, and there was no arguing in the voice, only patience. 'It is not. Slow is what you just did all afternoon. Five things touched, none of them done. Let me show you what finishing actually feels like instead. Then decide.'

The {hero} took a breath that shook a little on the way in, held it, and chose.

The soup first, because it sat closest to the edge of ruin. The {hero} stayed with it, and only it, scraping the scorched skin gently off the bottom, adding a splash of water, stirring low and patient in slow circles until the smell turned from burnt back to something good and green. Then, and only then, the {hero} stepped away. One thing, done, and something in the chest loosened by a notch.

The lanterns next. No darting off to check anything else, no glancing at the sign or the bowl, just cord, hook, cord, hook, steadily up the whole length of the path until the long line of them swung soft and even in the dusk-blue air. It was almost restful, the {hero} found, to have only one task in front of the eyes and one task in the hands, nothing shouting for attention from across the room. Done.

The batter had stiffened while it waited, but a little more milk and a good long stir brought it back, and the {hero} spooned it into the tray and slid it onto the hearth to bake, resting a small stone by their elbow as a plain reminder to check it in a while, a way of keeping half an eye on one nearly finished thing without truly abandoning the next. The sign, then. The {hero} sat down properly with it, and WELC became WELCOME in careful, even letters, and hung straight and level above the door.

And the {object_motif}. The {hero} searched the way you can only search when nothing else is tugging at your sleeve, calm and methodical, shelf by shelf, drawer by drawer, and found it at last tucked quietly behind the very thing it had always been meant to sit beside. The {hero} set the {object_motif} in the centre of the table, exactly where it belonged, and it looked as though it had never been lost at all.

The honey-cakes came out warm and golden-edged just as the first knock sounded at the door.

The {hero} stood still for a moment and looked slowly around at a thing that was, impossibly, finished. Lanterns lit and glowing down the path. Soup steaming and good. Sign hanging straight. The {object_motif} in its rightful place. It had not taken more time than the frantic way had taken. It had taken less, somehow, and it had left the {hero} calm enough to actually cross the room and open the door and smile at the faces waiting there.

{companion_name} caught their eye from across the room and gave the smallest nod, the kind that does not need any words stacked on top of it.

Later, much later, when the friends had gone home and {setting} had settled into its deep evening quiet, the {hero} lay in the dark and went back over the whole afternoon, not the panic of the middle of it, but the strange, steadying pleasure of that first finished thing, and how the next had come easier, and the next after that easier still. The tight, jittery feeling that had chased the {hero} around all day was long gone now. In its place was something roomier and slower and altogether kinder, and the {hero} carried it gently down into sleep.

{refrain}.`, scriptTemplate: `{child_name} had exactly one afternoon to get everything ready, and everything was a long list.

Friends were coming to {setting} at dusk. It was the first proper gathering {child_name} had ever hosted, the sort of thing {child_name} had watched grown-ups do a hundred times and had always looked so easy, and now {child_name} wanted every part of it to be right. There were lanterns to string along the path. A pot of soup to tend on the low fire. A tray of little honey-cakes to bake. A welcome sign to letter and hang above the door. And somewhere in the muddle, the {object_motif} had to be found and set out on the table, because a gathering in {setting} simply was not a gathering without it. {child_name} had wanted this day for weeks, and there could be no do-over. It had to go well the first time.

'Plenty of time,' {child_name} told themselves, surveying it all, 'as long as I keep everything moving at once.'

So that was the plan, and it seemed a clever one: keep everything moving at once, never let a single job sit still. {child_name} lit the fire under the soup, then hurried straight off to string the first lantern while it heated. Halfway up the path, hands full of tangled cord, {child_name} remembered that the honey-cakes needed mixing early or they would never bake and cool in time. So down came the cord, half-strung and looping in the dirt, and off {child_name} went to the mixing bowl.

The batter was sticky and slow to come together. Before it was anywhere near smooth, another thought arrived, sharp and urgent: the welcome sign would take ages to letter, and the ink took ages to dry, so it was really better to start that now. {child_name} wiped sticky fingers on a cloth, left the bowl sitting, and picked up the lettering brush. Two letters in, the brush was too fat for neat work and needed a finer point, and while hunting through the drawer for a better one {child_name} passed the table and thought, the {object_motif}. I still have not found the {object_motif}, and everyone will notice if it is missing. So the search began instead, drawers pulled open, shelves patted down, cushions lifted and dropped.

That was when the smell reached them.

The soup. {child_name} spun around. The pot had climbed from a gentle simmer to a furious, spitting boil, and the bottom was beginning to catch and blacken. {child_name} hauled it off the heat, chest giving a hard, sick lurch, and stood there breathing the scorched, bitter smell while the afternoon light leaned long and gold across the floor and the shadows stretched toward evening.

{child_name} made themselves stop, and look, and really look, at the whole nook.

The soup was saved, barely, but it had needed watching and had not got any. One lantern hung crooked over the path and the rest lay in a tangle in the dirt. The batter sat half-mixed and slowly going stiff in the bowl. The welcome sign said WELC and nothing more, the ink already drying on an unfinished word. The {object_motif} was still lost. Dusk was maybe an hour off now, and {child_name} had been busy, genuinely and sweatily busy, moving without a single pause for the entire afternoon, and had somehow finished not one single thing on the list.

Something hot pricked behind {child_name}'s eyes. Not quite tears. Just the awful, cornered feeling of having run and run at top speed and arrived precisely nowhere.

'You have had a whirlwind of an afternoon,' said {companion_name}, who had come in quietly through the side door and was taking in the wreckage without a single trace of scolding. 'There is something I want to ask you. Not to be clever. I actually want to know. How many of these jobs did you start?'

{child_name} counted them off on sticky fingers, throat tight. 'All of them. Every single one.'

'And how many did you actually finish before you moved on to the next?'

'None,' {child_name} admitted, and the word came out very small.

'And how many did you leave the very second they got difficult?'

{child_name} did not answer, and the silence was its own kind of answer.

{companion_name} crouched down by the tangled lanterns and lifted one, turning it slowly over. 'Here is the thing nobody quite tells you. Your attention is not like water. You cannot pour it into five cups at once and expect any of them to fill. It only ever fills one at a time. Every time you jumped to a new job, you carried a full cup to a new empty one and spilled what was already in it. One thing, then the next. Fill a single cup all the way up. Then, and only then, move.'

'But there is so little time left,' {child_name} said, gesturing helplessly at the window. 'Doing them one at a time feels far too slow. I will never finish.'

'It feels slow,' {companion_name} agreed, and there was no arguing in the voice, only patience. 'It is not. Slow is what you just did all afternoon. Five things touched, none of them done. Let me show you what finishing actually feels like instead. Then decide.'

{child_name} took a breath that shook a little on the way in, held it, and chose.

The soup first, because it sat closest to the edge of ruin. {child_name} stayed with it, and only it, scraping the scorched skin gently off the bottom, adding a splash of water, stirring low and patient in slow circles until the smell turned from burnt back to something good and green. Then, and only then, {child_name} stepped away. One thing, done, and something in the chest loosened by a notch.

The lanterns next. No darting off to check anything else, no glancing at the sign or the bowl, just cord, hook, cord, hook, steadily up the whole length of the path until the long line of them swung soft and even in the dusk-blue air. It was almost restful, {child_name} found, to have only one task in front of the eyes and one task in the hands, nothing shouting for attention from across the room. Done.

The batter had stiffened while it waited, but a little more milk and a good long stir brought it back, and {child_name} spooned it into the tray and slid it onto the hearth to bake, resting a small stone by their elbow as a plain reminder to check it in a while, a way of keeping half an eye on one nearly finished thing without truly abandoning the next. The sign, then. {child_name} sat down properly with it, and WELC became WELCOME in careful, even letters, and hung straight and level above the door.

And the {object_motif}. {child_name} searched the way you can only search when nothing else is tugging at your sleeve, calm and methodical, shelf by shelf, drawer by drawer, and found it at last tucked quietly behind the very thing it had always been meant to sit beside. {child_name} set the {object_motif} in the centre of the table, exactly where it belonged, and it looked as though it had never been lost at all.

The honey-cakes came out warm and golden-edged just as the first knock sounded at the door.

{child_name} stood still for a moment and looked slowly around at a thing that was, impossibly, finished. Lanterns lit and glowing down the path. Soup steaming and good. Sign hanging straight. The {object_motif} in its rightful place. It had not taken more time than the frantic way had taken. It had taken less, somehow, and it had left {child_name} calm enough to actually cross the room and open the door and smile at the faces waiting there.

{companion_name} caught their eye from across the room and gave the smallest nod, the kind that does not need any words stacked on top of it.

Later, much later, when the friends had gone home and {setting} had settled into its deep evening quiet, {child_name} lay in the dark and went back over the whole afternoon, not the panic of the middle of it, but the strange, steadying pleasure of that first finished thing, and how the next had come easier, and the next after that easier still. The tight, jittery feeling that had chased {child_name} around all day was long gone now. In its place was something roomier and slower and altogether kinder, and {child_name} carried it gently down into sleep.

{refrain}.` }
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
    audioTemplate: `The {hero} stood at the edge of {setting}. Far, far away was the place the {hero} wanted to reach. It looked so far away.

'I can't walk all that way,' said the {hero}. 'It is too far. It is too big.'

The {hero} sat down in a little heap. The {hero} did not want to start. The far place felt too big to even begin.

Soft and slow, {companion_name} came and sat down close by. {companion_name} was warm and calm.

'You look stuck,' said {companion_name}.

'It is too far,' said the {hero}. 'Look.'

'A long way is just small steps, one after another,' said {companion_name}. 'You can do the first small step.'

The {hero} held the {object_motif} and looked up.

'See that little rock?' said {companion_name}. 'That is step one. Just walk to the rock. Nothing else.'

The {hero} walked to the little rock. That was easy!

'Now that tree,' said {companion_name}. 'That is step two.'

The {hero} walked to the tree. Easy again.

'Now the log,' said {companion_name}. 'That is step three.'

The {hero} hopped over the log. Easy, easy.

One step. Then one step. Then one step. Slow and calm. Slow and calm.

Remember, one thing at a time. Just like before. One thing. Then the next thing.

The {hero} did not look at the whole long way. That was too big. The {hero} looked at the next small step. Only that. Just the next one.

Step by step, the {hero} went. Past the rock. Past the tree. Past the log. Past the little hill. Over the tiny stream.

The {hero} smiled a big smile. 'Look at me go!'

The far place was closer now. Then closer still. Then very, very close.

'You kept going,' said {companion_name}. 'One step, then the next, all the way.'

The {hero} took the last step. Here at last! The {hero} had done it, all by walking one step at a time.

The {hero} was not scared now. The long way was just small steps. And the {hero} could take each one.

In {setting}, the sky went soft and dim. Little lights blinked far above. The {hero} held the {object_motif} close and gave a happy, sleepy sigh.

The {hero} yawned a big yawn. Time to rest now. Time for a warm, cozy sleep.

Tomorrow there would be more steps. And that was okay. One at a time. Always one at a time.

{refrain}.`,
    scriptTemplate: `{child_name} stood at the edge of {setting}. Far, far away was the place {child_name} wanted to reach. It looked so far away.

'I can't walk all that way,' said {child_name}. 'It is too far. It is too big.'

{child_name} sat down in a little heap. {child_name} did not want to start. The far place felt too big to even begin.

Soft and slow, {companion_name} came and sat down close by. {companion_name} was warm and calm.

'You look stuck,' said {companion_name}.

'It is too far,' said {child_name}. 'Look.'

'A long way is just small steps, one after another,' said {companion_name}. 'You can do the first small step.'

{child_name} held the {object_motif} and looked up.

'See that little rock?' said {companion_name}. 'That is step one. Just walk to the rock. Nothing else.'

{child_name} walked to the little rock. That was easy!

'Now that tree,' said {companion_name}. 'That is step two.'

{child_name} walked to the tree. Easy again.

'Now the log,' said {companion_name}. 'That is step three.'

{child_name} hopped over the log. Easy, easy.

One step. Then one step. Then one step. Slow and calm. Slow and calm.

Remember, one thing at a time. Just like before. One thing. Then the next thing.

{child_name} did not look at the whole long way. That was too big. {child_name} looked at the next small step. Only that. Just the next one.

Step by step, {child_name} went. Past the rock. Past the tree. Past the log. Past the little hill. Over the tiny stream.

{child_name} smiled a big smile. 'Look at me go!'

The far place was closer now. Then closer still. Then very, very close.

'You kept going,' said {companion_name}. 'One step, then the next, all the way.'

{child_name} took the last step. Here at last! {child_name} had done it, all by walking one step at a time.

{child_name} was not scared now. The long way was just small steps. And {child_name} could take each one.

In {setting}, the sky went soft and dim. Little lights blinked far above. {child_name} held the {object_motif} close and gave a happy, sleepy sigh.

{child_name} yawned a big yawn. Time to rest now. Time for a warm, cozy sleep.

Tomorrow there would be more steps. And that was okay. One at a time. Always one at a time.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} stood at the very edge of {setting} and looked out at the place far, far away. It was the place the {hero} had dreamed of reaching all week long. But now that it was really time to go, the far place looked impossibly far, and the {hero}'s feet did not want to move at all.

The {hero}'s tummy went tight. 'I can't walk all the way over there,' the {hero} whispered. 'It is too far. I will never make it. Not ever.'

So the {hero} sat right down and did not start at all. Sometimes a thing feels so big that starting feels like the very hardest part.

That was when {companion_name} wandered over and settled down close by, quiet and warm as a blanket.

'You look stuck,' said {companion_name}.

'It is too big,' said the {hero}. 'Look how far it is. I don't even know how to begin.'

{companion_name} did not pretend the far place was near. It really was far, and pretending would not help. Instead, {companion_name} picked up the {object_motif} and drew a little line in the soft dirt.

'A long way is only small steps, one after another,' said {companion_name}. 'We do not walk the whole way at once. Nobody can. We walk one step, and then the next. You can do the first small step, even when the whole thing feels too big.'

{companion_name} pointed a little way off. 'See that grey rock? Do not think about the far place yet. Just walk to the rock. That is step one, and that is all.'

The {hero} stood up slowly and walked to the grey rock. That was not so hard. That was easy, really.

'Good,' said {companion_name}. 'Now the crooked tree. That is step two.'

The {hero} walked to the crooked tree.

'Now the little hill. That is step three.'

The {hero} climbed up the little hill and down the other side.

'Now the flat log across the ditch,' said {companion_name}. 'That is step four.'

The {hero} walked across the log with both arms out, and did not fall.

One step. Then the next step. Then the next. The {hero} remembered the trick from before now, the good old trick: one thing at a time. Not everything at once. Only the very next thing.

For a moment the {hero} looked up at all the way that was still left to go, and the tight feeling came rushing back. It was still so far. The {hero}'s feet went still.

'Do not look at the whole way,' said {companion_name} gently. 'That is too much for anybody. Look at the next step. Only that one.'

So the {hero} looked at the next step, and only the next step. And that step was easy. And so was the one after it. And the one after that.

Step by step, the {hero} went. Past the rock. Past the tree. Over the hill. Around the bend. Across the little stream on three flat stones. Each step was small, and the {hero} could do each small step.

The far place was not far now. It was close. Then it was very, very close.

'You kept going,' said {companion_name}. 'One step, then the next, all the way here.'

The {hero} took the last step and arrived. The dreamed-of place was real, right there underfoot, close enough to touch. The {hero} had crossed the whole of {setting}, one small step at a time, and here it was.

'I did it,' the {hero} laughed. 'I really, really did it.'

Above {setting}, the first stars blinked awake, one and then another. The {hero} sat down to rest and held the {object_motif} in both hands, tired in the good and cozy way that comes after a job well done.

Tomorrow there would be a new far place, and new steps to take. And that was alright. The {hero} knew the trick now, deep down. One small step, and then the next.

{refrain}.`,
    scriptTemplate: `{child_name} stood at the very edge of {setting} and looked out at the place far, far away. It was the place {child_name} had dreamed of reaching all week long. But now that it was really time to go, the far place looked impossibly far, and {child_name}'s feet did not want to move at all.

{child_name}'s tummy went tight. 'I can't walk all the way over there,' {child_name} whispered. 'It is too far. I will never make it. Not ever.'

So {child_name} sat right down and did not start at all. Sometimes a thing feels so big that starting feels like the very hardest part.

That was when {companion_name} wandered over and settled down close by, quiet and warm as a blanket.

'You look stuck,' said {companion_name}.

'It is too big,' said {child_name}. 'Look how far it is. I don't even know how to begin.'

{companion_name} did not pretend the far place was near. It really was far, and pretending would not help. Instead, {companion_name} picked up the {object_motif} and drew a little line in the soft dirt.

'A long way is only small steps, one after another,' said {companion_name}. 'We do not walk the whole way at once. Nobody can. We walk one step, and then the next. You can do the first small step, even when the whole thing feels too big.'

{companion_name} pointed a little way off. 'See that grey rock? Do not think about the far place yet. Just walk to the rock. That is step one, and that is all.'

{child_name} stood up slowly and walked to the grey rock. That was not so hard. That was easy, really.

'Good,' said {companion_name}. 'Now the crooked tree. That is step two.'

{child_name} walked to the crooked tree.

'Now the little hill. That is step three.'

{child_name} climbed up the little hill and down the other side.

'Now the flat log across the ditch,' said {companion_name}. 'That is step four.'

{child_name} walked across the log with both arms out, and did not fall.

One step. Then the next step. Then the next. {child_name} remembered the trick from before now, the good old trick: one thing at a time. Not everything at once. Only the very next thing.

For a moment {child_name} looked up at all the way that was still left to go, and the tight feeling came rushing back. It was still so far. {child_name}'s feet went still.

'Do not look at the whole way,' said {companion_name} gently. 'That is too much for anybody. Look at the next step. Only that one.'

So {child_name} looked at the next step, and only the next step. And that step was easy. And so was the one after it. And the one after that.

Step by step, {child_name} went. Past the rock. Past the tree. Over the hill. Around the bend. Across the little stream on three flat stones. Each step was small, and {child_name} could do each small step.

The far place was not far now. It was close. Then it was very, very close.

'You kept going,' said {companion_name}. 'One step, then the next, all the way here.'

{child_name} took the last step and arrived. The dreamed-of place was real, right there underfoot, close enough to touch. {child_name} had crossed the whole of {setting}, one small step at a time, and here it was.

'I did it,' {child_name} laughed. 'I really, really did it.'

Above {setting}, the first stars blinked awake, one and then another. {child_name} sat down to rest and held the {object_motif} in both hands, tired in the good and cozy way that comes after a job well done.

Tomorrow there would be a new far place, and new steps to take. And that was alright. {child_name} knew the trick now, deep down. One small step, and then the next.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `From the top of the ridge, the {hero} could see the whole of {setting} spread out below in the low evening light, and far, far across it stood the place the {hero} had been thinking about for days. Up close, in daydreams, it had always felt possible, even easy. Now, standing here at the real edge with the real distance stretching out ahead, it felt like far too much.

The {hero} stopped before even taking a single step. 'I can't get all the way over there,' the {hero} said. 'Look how far it is. It would take forever. I should just go home and forget about it.'

The {hero} sat down on a flat stone, arms wrapped around both knees, and stared hard at the ground so as not to see the distance at all.

{companion_name} came up the ridge and sat down nearby, in no hurry whatsoever.

'That is a long way,' {companion_name} agreed, looking out at it. There was no use pretending it was short.

'It is too far,' the {hero} said. 'And I don't even know where to begin. So there's no point in beginning at all.'

{companion_name} reached over, took the {object_motif}, and used its edge to scratch a row of little marks into the dirt between them. A short line. A dot. Another dot. And another.

'Here is the thing almost everybody gets wrong,' said {companion_name}. 'They try to walk the whole way in their head, all at once, and their head fills right up, and they freeze. But nobody crosses {setting} in one giant leap. A big journey is only small steps, written down in order and walked one at a time. You can do the first small step, even when the whole thing feels impossible.'

The {hero} looked at the row of marks in the dirt. 'A plan,' the {hero} said slowly.

'A plan is a path,' said {companion_name}. 'First that grey rock. Then the split tree. Then the low bushes. Then the stream. Do not look at the far place. Just look at the next mark. Can you walk to that grey rock?'

'That's easy,' said the {hero}. 'That's nothing at all.'

'Then go and do the easy thing,' said {companion_name}.

So the {hero} stood up and walked to the grey rock. And then, because the split tree was right there and it was also easy, the {hero} walked to that too. Then to the low bushes. One mark, and then the next mark. The {hero} was not thinking about the far place anymore. The {hero} was only thinking about the next small step, the way you do one thing at a time and let the rest wait its turn.

The grey rock came and went underfoot. The split tree came and went. At each mark the {hero} paused just long enough to spot the next one, then walked to it, and the far place, for now, was allowed to stay far and quiet and forgotten. It was almost restful, this way of going. There was never more than one small thing to do at a time, and one small thing was never too much.

Halfway across {setting}, the {hero} made the old mistake of looking up. All at once the whole rest of the way came rushing in, so very much still to go, and the tight, heavy feeling grabbed hold again. The {hero}'s feet stopped dead. 'It's still so far,' the {hero} said, the wobble creeping back. 'I'm not even close.'

'You looked at the whole way again,' said {companion_name}, catching up and settling on a nearby root. 'That is the exact thing that stops everybody. So shrink it back down. What is the very next step? Just that one, and no more.'

The {hero} breathed out, long and slow, and looked, not at the far place, but at the nearest thing of all, a mossy log only a few paces on. 'The log,' the {hero} said.

'Then walk to the log,' said {companion_name}.

The {hero} walked to the log. And the tight feeling let go its grip, because the log was easy, and after the log there was only ever one more easy thing waiting. Step by step, mark by mark, the {hero} crossed the whole second half of {setting} the same way as the first, one small piece at a time, never once trying to swallow it whole.

And then, almost by surprise, there were no marks left to walk. The {hero} took one last step and stood in the very place that had looked impossibly far away from the ridge. It was real now, solid under two tired feet. The {hero} had walked the whole long way there.

'I made it,' the {hero} said, half laughing, looking around. 'It didn't even feel that big, in the end.'

'There it is,' said {companion_name}, arriving beside the {hero} and holding out the {object_motif}. 'You walked every last bit of that yourself.'

The {hero} took the {object_motif} and turned to look back across {setting} at the whole path, every rock and tree and bend already walked and behind now. From here, the long way did not look frightening at all. It just looked like a line of small steps, each one easy, laid neatly end to end.

For a while the {hero} just sat there getting a breath back, listening to the small sounds of {setting} settling down for the night, feeling lighter than at the start, the way you feel when a thing you had been dreading turns out to be behind you.

Overhead, {setting} was going violet and soft, and somewhere off in the dusk a night bird called once and went quiet. The {hero} leaned back, warm and tired and deeply pleased, and watched the way home settle slowly into shadow.

Tomorrow there would be another far place, and another long way. But the {hero} was not the least bit worried about that now.

{refrain}.`,
    scriptTemplate: `From the top of the ridge, {child_name} could see the whole of {setting} spread out below in the low evening light, and far, far across it stood the place {child_name} had been thinking about for days. Up close, in daydreams, it had always felt possible, even easy. Now, standing here at the real edge with the real distance stretching out ahead, it felt like far too much.

{child_name} stopped before even taking a single step. 'I can't get all the way over there,' {child_name} said. 'Look how far it is. It would take forever. I should just go home and forget about it.'

{child_name} sat down on a flat stone, arms wrapped around both knees, and stared hard at the ground so as not to see the distance at all.

{companion_name} came up the ridge and sat down nearby, in no hurry whatsoever.

'That is a long way,' {companion_name} agreed, looking out at it. There was no use pretending it was short.

'It is too far,' {child_name} said. 'And I don't even know where to begin. So there's no point in beginning at all.'

{companion_name} reached over, took the {object_motif}, and used its edge to scratch a row of little marks into the dirt between them. A short line. A dot. Another dot. And another.

'Here is the thing almost everybody gets wrong,' said {companion_name}. 'They try to walk the whole way in their head, all at once, and their head fills right up, and they freeze. But nobody crosses {setting} in one giant leap. A big journey is only small steps, written down in order and walked one at a time. You can do the first small step, even when the whole thing feels impossible.'

{child_name} looked at the row of marks in the dirt. 'A plan,' {child_name} said slowly.

'A plan is a path,' said {companion_name}. 'First that grey rock. Then the split tree. Then the low bushes. Then the stream. Do not look at the far place. Just look at the next mark. Can you walk to that grey rock?'

'That's easy,' said {child_name}. 'That's nothing at all.'

'Then go and do the easy thing,' said {companion_name}.

So {child_name} stood up and walked to the grey rock. And then, because the split tree was right there and it was also easy, {child_name} walked to that too. Then to the low bushes. One mark, and then the next mark. {child_name} was not thinking about the far place anymore. {child_name} was only thinking about the next small step, the way you do one thing at a time and let the rest wait its turn.

The grey rock came and went underfoot. The split tree came and went. At each mark {child_name} paused just long enough to spot the next one, then walked to it, and the far place, for now, was allowed to stay far and quiet and forgotten. It was almost restful, this way of going. There was never more than one small thing to do at a time, and one small thing was never too much.

Halfway across {setting}, {child_name} made the old mistake of looking up. All at once the whole rest of the way came rushing in, so very much still to go, and the tight, heavy feeling grabbed hold again. {child_name}'s feet stopped dead. 'It's still so far,' {child_name} said, the wobble creeping back. 'I'm not even close.'

'You looked at the whole way again,' said {companion_name}, catching up and settling on a nearby root. 'That is the exact thing that stops everybody. So shrink it back down. What is the very next step? Just that one, and no more.'

{child_name} breathed out, long and slow, and looked, not at the far place, but at the nearest thing of all, a mossy log only a few paces on. 'The log,' {child_name} said.

'Then walk to the log,' said {companion_name}.

{child_name} walked to the log. And the tight feeling let go its grip, because the log was easy, and after the log there was only ever one more easy thing waiting. Step by step, mark by mark, {child_name} crossed the whole second half of {setting} the same way as the first, one small piece at a time, never once trying to swallow it whole.

And then, almost by surprise, there were no marks left to walk. {child_name} took one last step and stood in the very place that had looked impossibly far away from the ridge. It was real now, solid under two tired feet. {child_name} had walked the whole long way there.

'I made it,' {child_name} said, half laughing, looking around. 'It didn't even feel that big, in the end.'

'There it is,' said {companion_name}, arriving beside {child_name} and holding out the {object_motif}. 'You walked every last bit of that yourself.'

{child_name} took the {object_motif} and turned to look back across {setting} at the whole path, every rock and tree and bend already walked and behind now. From here, the long way did not look frightening at all. It just looked like a line of small steps, each one easy, laid neatly end to end.

For a while {child_name} just sat there getting a breath back, listening to the small sounds of {setting} settling down for the night, feeling lighter than at the start, the way you feel when a thing you had been dreading turns out to be behind you.

Overhead, {setting} was going violet and soft, and somewhere off in the dusk a night bird called once and went quiet. {child_name} leaned back, warm and tired and deeply pleased, and watched the way home settle slowly into shadow.

Tomorrow there would be another far place, and another long way. But {child_name} was not the least bit worried about that now.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There was a place on the far side of {setting} that the {hero} had wanted to reach for as long as the {hero} could remember, not a short walk away but a real distance, the kind of trip you had to plan and pack for. All season the {hero} had talked about going. The {hero} had described it to anyone who would listen, had pictured arriving a hundred times over. And yet, all season, somehow, the actual going had never quite happened. There was always a reason, and underneath every reason was the same quiet, unspoken one: it was simply too big to start.

Tonight the {hero} had finally dragged everything out to get ready, and that, it turned out, was the problem. Laid out all at once, the whole thing at a single glance, the long winding route, the food and gear to carry, the streams that would have to be crossed, the places to stop and rest, the weather to guess at, the enormous and complicated shape of it, the journey looked less like an adventure and a great deal more like a wall. A wall with no door in it. The {hero} stood over the scattered pile of it and felt that familiar, sinking heaviness, the one that arrived without fail whenever something mattered far too much and loomed far too large.

'I don't think I can actually do this,' the {hero} admitted at last, mostly to the empty air. 'It's too much. There are a hundred separate things to sort out, and I don't even know which one is supposed to come first. Maybe it was a silly idea all along. Maybe I should just leave it.'

It is a particular and lonely kind of misery, wanting something with your whole heart and feeling, at the very same moment, completely unable to take the first step toward it. The {hero} sank down among the scattered plans and did not so much as touch a single one of them.

{companion_name} had been somewhere nearby in the dusk, and now came quietly over, taking a long, unhurried look at everything spread across the ground before finally sitting down beside it all.

'So,' {companion_name} said, in no rush at all. 'You've been sitting here trying to look at every last piece of it at once.'

'I can't help it,' said the {hero}, miserable. 'It's all right there in front of me. And it's all so big.'

'Of course it looks impossible from there,' said {companion_name}. 'You're trying to carry the entire journey in your head in one single armful. Nobody alive can hold all of that at once. It's too much for anyone. But that heavy, stuck feeling, it isn't proof that you can't do the thing. It's only proof that you're looking at it the wrong way, from the wrong end.'

{companion_name} reached out and picked up the {object_motif}, and then, instead of explaining anything more, used it to smooth a clean, flat patch of ground. Then, with one careful edge, {companion_name} began to draw: a single short line, and at the very end of it, a small mark.

'Watch this. This isn't the whole journey. Don't think about the whole journey. This is only the first stretch, from right here to the old crossing, and nothing more than that. Can you picture just that much, only that much?'

The {hero} leaned in and looked. That much, all on its own, was easy, an afternoon's walk on a good path, nothing frightening about it whatsoever. 'Yes,' the {hero} said. 'That part's simple. I could do that part with my eyes closed.'

'Good. That's exactly the feeling.' {companion_name} drew a second line onward from the end of the first, and set down a second mark. 'And from the crossing to the ridge, then. Just that one piece, on its own, all by itself, is that piece hard?'

'No,' the {hero} admitted, more slowly this time. 'No, that one's not hard either.'

'Then you keep going,' said {companion_name}, and held the {object_motif} out across the space between them. 'You draw the rest of it yourself. One piece at a time. Not the whole way, never the whole way, just the next honest step after the one that comes before it.'

So the {hero} took the {object_motif} and, a little uncertainly at first, began to draw. The ridge to the twin rocks. The twin rocks to the shallow ford. The shallows to the wide meadow. The meadow to the last long rise before the far place itself. Each new line the {hero} added was only a small, plain, entirely doable thing, and not a single one of them, taken by itself, was frightening in the least. And a genuinely strange thing began to happen as the {hero} drew, line by patient line: the wall came apart. What had been one solid, impossible mass just moments before was quietly becoming a row of small, ordinary, manageable steps, laid out one after another in their proper order, each one waiting calmly for its own turn to be walked.

The {hero} sat back on both heels and looked at the finished line of marks stretching all the way across the smoothed ground. 'It's a path,' the {hero} said, honestly surprised. 'When you put it that way, it's just a path.'

'A plan is a path,' said {companion_name}. 'That's all a plan has ever been, the big frightening thing broken down into steps small enough to actually take, written out in the order you mean to walk them. You can do the first small step, even when the whole thing still feels completely impossible. And here's the part people forget: the moment the first step is finished, you look down, and the second one is already lying there, waiting for you, just as small.'

The {hero} traced the whole line slowly with one finger, from this near side of {setting} all the way across to the far place at the end, and felt something in the chest quietly come loose, not because the journey had grown one bit shorter, it hadn't, but because it had stopped being a single terrible thing. It was many small things now, arranged in a tidy row. And the {hero} had done small things before, plenty of them.

'But I still can't do all of it tonight,' the {hero} said. And this time the words did not come out as despair at all, only as a plain and peaceful fact.

'No,' {companion_name} agreed easily. 'And nobody ever asked you to. Tonight you do exactly one thing, the first step and no further. So tell me, what is it?'

The {hero} looked down at the very beginning of the line, at that first short mark. The first step was not the whole journey. It was not even setting out. It was smaller and quieter than that. 'Pack the carry-bag,' the {hero} said. 'Just that. Get it ready and set it by the way out, so it's waiting there at first light.'

'Then go and do that one thing,' said {companion_name}, 'and let tomorrow keep its own steps for tomorrow.'

So the {hero} did. Not the journey, only the packing. The {hero} gathered together everything that first stretch of the path would need, folded it, checked it twice, and set the full bag down by the way out of {setting}, exactly where the morning light would be sure to find it. It took only a little while, in the end. And it was, the {hero} noticed with something close to a smile, the very same old trick from before, the oldest and steadiest one there is: not everything all at once, but one thing at a time, the next thing and only ever the next thing.

When it was done, the {hero} stood a while in the settling dark and looked at the packed bag waiting there, one small step, finished and solid and real. The far place was still exactly as far as it had been. Nothing at all about the distance itself had changed. But the {hero} was no longer frozen in front of it, because the {hero} was no longer standing at the foot of an impossible wall. The {hero} was standing instead at the near end of a path, a real path, and the first stone of it had already been stepped.

'That's the hardest one behind you now,' said {companion_name} quietly, from the shadows. 'The very first one. It is always, always the heaviest to lift.'

Above {setting}, the dark had come on soft and full and complete, and the plan lay finished there on the ground, its long line of little marks holding the very last of the light. The {hero} held the {object_motif} loosely in one hand and felt the particular, settling calm of a thing at last begun, not finished, not solved, nothing so tidy as that, but no longer impossible. Simply begun. And the rest of the steps, every last one of them, could wait in peace for their own mornings.

The {hero} would walk them, one at a time.

{refrain}.`,
    scriptTemplate: `There was a place on the far side of {setting} that {child_name} had wanted to reach for as long as {child_name} could remember, not a short walk away but a real distance, the kind of trip you had to plan and pack for. All season {child_name} had talked about going. {child_name} had described it to anyone who would listen, had pictured arriving a hundred times over. And yet, all season, somehow, the actual going had never quite happened. There was always a reason, and underneath every reason was the same quiet, unspoken one: it was simply too big to start.

Tonight {child_name} had finally dragged everything out to get ready, and that, it turned out, was the problem. Laid out all at once, the whole thing at a single glance, the long winding route, the food and gear to carry, the streams that would have to be crossed, the places to stop and rest, the weather to guess at, the enormous and complicated shape of it, the journey looked less like an adventure and a great deal more like a wall. A wall with no door in it. {child_name} stood over the scattered pile of it and felt that familiar, sinking heaviness, the one that arrived without fail whenever something mattered far too much and loomed far too large.

'I don't think I can actually do this,' {child_name} admitted at last, mostly to the empty air. 'It's too much. There are a hundred separate things to sort out, and I don't even know which one is supposed to come first. Maybe it was a silly idea all along. Maybe I should just leave it.'

It is a particular and lonely kind of misery, wanting something with your whole heart and feeling, at the very same moment, completely unable to take the first step toward it. {child_name} sank down among the scattered plans and did not so much as touch a single one of them.

{companion_name} had been somewhere nearby in the dusk, and now came quietly over, taking a long, unhurried look at everything spread across the ground before finally sitting down beside it all.

'So,' {companion_name} said, in no rush at all. 'You've been sitting here trying to look at every last piece of it at once.'

'I can't help it,' said {child_name}, miserable. 'It's all right there in front of me. And it's all so big.'

'Of course it looks impossible from there,' said {companion_name}. 'You're trying to carry the entire journey in your head in one single armful. Nobody alive can hold all of that at once. It's too much for anyone. But that heavy, stuck feeling, it isn't proof that you can't do the thing. It's only proof that you're looking at it the wrong way, from the wrong end.'

{companion_name} reached out and picked up the {object_motif}, and then, instead of explaining anything more, used it to smooth a clean, flat patch of ground. Then, with one careful edge, {companion_name} began to draw: a single short line, and at the very end of it, a small mark.

'Watch this. This isn't the whole journey. Don't think about the whole journey. This is only the first stretch, from right here to the old crossing, and nothing more than that. Can you picture just that much, only that much?'

{child_name} leaned in and looked. That much, all on its own, was easy, an afternoon's walk on a good path, nothing frightening about it whatsoever. 'Yes,' {child_name} said. 'That part's simple. I could do that part with my eyes closed.'

'Good. That's exactly the feeling.' {companion_name} drew a second line onward from the end of the first, and set down a second mark. 'And from the crossing to the ridge, then. Just that one piece, on its own, all by itself, is that piece hard?'

'No,' {child_name} admitted, more slowly this time. 'No, that one's not hard either.'

'Then you keep going,' said {companion_name}, and held the {object_motif} out across the space between them. 'You draw the rest of it yourself. One piece at a time. Not the whole way, never the whole way, just the next honest step after the one that comes before it.'

So {child_name} took the {object_motif} and, a little uncertainly at first, began to draw. The ridge to the twin rocks. The twin rocks to the shallow ford. The shallows to the wide meadow. The meadow to the last long rise before the far place itself. Each new line {child_name} added was only a small, plain, entirely doable thing, and not a single one of them, taken by itself, was frightening in the least. And a genuinely strange thing began to happen as {child_name} drew, line by patient line: the wall came apart. What had been one solid, impossible mass just moments before was quietly becoming a row of small, ordinary, manageable steps, laid out one after another in their proper order, each one waiting calmly for its own turn to be walked.

{child_name} sat back on both heels and looked at the finished line of marks stretching all the way across the smoothed ground. 'It's a path,' {child_name} said, honestly surprised. 'When you put it that way, it's just a path.'

'A plan is a path,' said {companion_name}. 'That's all a plan has ever been, the big frightening thing broken down into steps small enough to actually take, written out in the order you mean to walk them. You can do the first small step, even when the whole thing still feels completely impossible. And here's the part people forget: the moment the first step is finished, you look down, and the second one is already lying there, waiting for you, just as small.'

{child_name} traced the whole line slowly with one finger, from this near side of {setting} all the way across to the far place at the end, and felt something in the chest quietly come loose, not because the journey had grown one bit shorter, it hadn't, but because it had stopped being a single terrible thing. It was many small things now, arranged in a tidy row. And {child_name} had done small things before, plenty of them.

'But I still can't do all of it tonight,' {child_name} said. And this time the words did not come out as despair at all, only as a plain and peaceful fact.

'No,' {companion_name} agreed easily. 'And nobody ever asked you to. Tonight you do exactly one thing, the first step and no further. So tell me, what is it?'

{child_name} looked down at the very beginning of the line, at that first short mark. The first step was not the whole journey. It was not even setting out. It was smaller and quieter than that. 'Pack the carry-bag,' {child_name} said. 'Just that. Get it ready and set it by the way out, so it's waiting there at first light.'

'Then go and do that one thing,' said {companion_name}, 'and let tomorrow keep its own steps for tomorrow.'

So {child_name} did. Not the journey, only the packing. {child_name} gathered together everything that first stretch of the path would need, folded it, checked it twice, and set the full bag down by the way out of {setting}, exactly where the morning light would be sure to find it. It took only a little while, in the end. And it was, {child_name} noticed with something close to a smile, the very same old trick from before, the oldest and steadiest one there is: not everything all at once, but one thing at a time, the next thing and only ever the next thing.

When it was done, {child_name} stood a while in the settling dark and looked at the packed bag waiting there, one small step, finished and solid and real. The far place was still exactly as far as it had been. Nothing at all about the distance itself had changed. But {child_name} was no longer frozen in front of it, because {child_name} was no longer standing at the foot of an impossible wall. {child_name} was standing instead at the near end of a path, a real path, and the first stone of it had already been stepped.

'That's the hardest one behind you now,' said {companion_name} quietly, from the shadows. 'The very first one. It is always, always the heaviest to lift.'

Above {setting}, the dark had come on soft and full and complete, and the plan lay finished there on the ground, its long line of little marks holding the very last of the light. {child_name} held the {object_motif} loosely in one hand and felt the particular, settling calm of a thing at last begun, not finished, not solved, nothing so tidy as that, but no longer impossible. Simply begun. And the rest of the steps, every last one of them, could wait in peace for their own mornings.

{child_name} would walk them, one at a time.

{refrain}.`
  }
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
  '3-4': { audioTemplate: `the {hero} lived in {setting}. Tonight the {hero} wanted to build one small tower. Just one tower. One block on one block.

One block. Then two. Then three.

But a bird went tweet up high. The {hero} looked up. The tower waited.

Then a leaf blew by. The {hero} watched it go. The tower waited.

Then a cloud went slow. The {hero} watched the cloud. The tower waited.

The {hero} felt a little sad. The blocks were still just three. So many things to look at. So hard to build.

{companion_name} came close and sat down in the soft grass. {companion_name} was calm and warm.

'Your mind went for a little walk,' said {companion_name}. 'That is okay. Every mind does that. The whole trick is noticing, and coming back.'

The {hero} nodded and picked up the first block again. The grass was cool. The night was soft. Time to build, slow and easy.

The {hero} took a slow breath, in and out. The {hero} found the {object_motif} and set it down by the blocks. Just to look at. Just to hold.

One thing at a time. Just the tower now.

One block. A bird went tweet. The {hero} noticed. The {hero} came back. One block on top.

Two blocks. A leaf blew by. The {hero} noticed. The {hero} came back. Two blocks on top.

Three blocks. A cloud went slow. The {hero} noticed. The {hero} came back. Three blocks on top.

No fuss. No sad. Just come back, and build.

The tower grew tall and straight. The {hero} did not get cross. The {hero} just came back, again and again and again.

Soon the tower was as tall as the {hero}'s knee. Then as tall as the {hero}'s tummy. Then as tall as the {hero}'s nose.

'You did it,' said {companion_name} softly. 'You kept coming back. That is the whole thing.'

The {hero} smiled a big soft smile. The moon was up now over {setting}. All was quiet and slow.

The {hero} looked at the tall tower. The {hero} looked at the {object_motif}. One tower. One night. One quiet heart.

The {hero} gave one big yawn. One block at a time. One breath at a time. Come back, come back, come back.

{refrain}.`, scriptTemplate: `{child_name} lived in {setting}. Tonight {child_name} wanted to build one small tower. Just one tower. One block on one block.

One block. Then two. Then three.

But a bird went tweet up high. {child_name} looked up. The tower waited.

Then a leaf blew by. {child_name} watched it go. The tower waited.

Then a cloud went slow. {child_name} watched the cloud. The tower waited.

{child_name} felt a little sad. The blocks were still just three. So many things to look at. So hard to build.

{companion_name} came close and sat down in the soft grass. {companion_name} was calm and warm.

'Your mind went for a little walk,' said {companion_name}. 'That is okay. Every mind does that. The whole trick is noticing, and coming back.'

{child_name} nodded and picked up the first block again. The grass was cool. The night was soft. Time to build, slow and easy.

{child_name} took a slow breath, in and out. {child_name} found the {object_motif} and set it down by the blocks. Just to look at. Just to hold.

One thing at a time. Just the tower now.

One block. A bird went tweet. {child_name} noticed. {child_name} came back. One block on top.

Two blocks. A leaf blew by. {child_name} noticed. {child_name} came back. Two blocks on top.

Three blocks. A cloud went slow. {child_name} noticed. {child_name} came back. Three blocks on top.

No fuss. No sad. Just come back, and build.

The tower grew tall and straight. {child_name} did not get cross. {child_name} just came back, again and again and again.

Soon the tower was as tall as {child_name}'s knee. Then as tall as {child_name}'s tummy. Then as tall as {child_name}'s nose.

'You did it,' said {companion_name} softly. 'You kept coming back. That is the whole thing.'

{child_name} smiled a big soft smile. The moon was up now over {setting}. All was quiet and slow.

{child_name} looked at the tall tower. {child_name} looked at the {object_motif}. One tower. One night. One quiet heart.

{child_name} gave one big yawn. One block at a time. One breath at a time. Come back, come back, come back.

{refrain}.` },
  '5-6': { audioTemplate: `The {hero} had one job for the evening. Count the ten lanterns along the winding path of {setting} and hang each one on its hook so the way home would glow. Just that. One job, from the first lantern to the last.

The {hero} lifted the first lantern from the basket and hung it. Then the second. Then the third. Easy. The light was warm and round.

But somewhere off in the dark, a splash went plip. The {hero} turned to look. Was it a fish? A frog? Something bigger? The {hero} stood very still, waiting for the sound to come again. It did not come. And while the {hero} waited, the fourth lantern stayed cold in the basket.

The {hero} shook it off and started again. The fourth lantern. The fifth. Then a thought floated up, bright and shiny: what if I built a boat tomorrow? A big one, with a striped flag and a proper sail? The {hero} was already deep in the daydream, picturing the flag snapping in the wind, when the basket tipped and two lanterns rolled away down the path.

The {hero} chased them, set them right, and sat down in the grass with a sigh. The job felt too big now. Every little thing, every sound and every idea, kept tugging the {hero} away from it.

{companion_name} padded over and settled beside the basket, calm as still water, not worried in the least.

'You keep leaving without meaning to,' said {companion_name}. 'A sound, a daydream, and off you go. That is not you being bad at this. That is just what a mind does, it wanders. The whole skill is noticing, and coming back.'

The {hero} frowned. 'But I keep losing my place.'

'Then find it again,' said {companion_name}. 'Gently. No telling yourself off. You notice you have drifted, and you turn back to the one thing. That is the trick, over and over, as many times as it takes.'

{companion_name} nudged the {object_motif} across the grass. 'Keep this beside you. When you feel yourself drift, touch it, and let it mean one thing: back to the lanterns.'

The {hero} picked up the {object_motif} and held it a moment, feeling its weight. Then the {hero} reached for the next lantern.

The sixth lantern went up. The seventh. Off in the dark, the splash went plip again, louder this time. The {hero} felt the pull to turn toward it, and this time noticed the pull as it happened. Just a sound. Back to the lanterns. The {hero} came back, and up went the eighth.

The shiny thought about boats came drifting in again, sail and all. The {hero} watched it float past and, this time, did not climb aboard. Back to the lanterns. Up went the ninth.

It was not that the sounds stopped, or the thoughts stopped. They kept right on coming. The {hero} simply stopped following them all the way out into the dark. Notice. Come back. Notice. Come back. One lantern at a time, exactly the way the {hero} had learned to do one thing at a time.

Up went the tenth lantern, snug on its hook.

The whole path was glowing now, a curving ribbon of soft light threading through {setting}. The {hero} walked back along all ten lanterns, counting each one, and let out a long, slow breath.

'You did every single one,' said {companion_name}.

'I kept wandering off,' said the {hero}.

'You did,' said {companion_name}. 'And you kept coming home to it. That is what finishing really looks like.'

The {hero} set the {object_motif} down beneath the last lantern. The splashes and the daydreams could come and go as they pleased now. The {hero} knew the way back.

Above the path, the first stars blinked awake one by one, and the lanterns swayed a little in the warm, moving air.

The {hero} yawned, tired in the good way, the way you feel after one whole thing carried all the way to its end.

{refrain}.`, scriptTemplate: `{child_name} had one job for the evening. Count the ten lanterns along the winding path of {setting} and hang each one on its hook so the way home would glow. Just that. One job, from the first lantern to the last.

{child_name} lifted the first lantern from the basket and hung it. Then the second. Then the third. Easy. The light was warm and round.

But somewhere off in the dark, a splash went plip. {child_name} turned to look. Was it a fish? A frog? Something bigger? {child_name} stood very still, waiting for the sound to come again. It did not come. And while {child_name} waited, the fourth lantern stayed cold in the basket.

{child_name} shook it off and started again. The fourth lantern. The fifth. Then a thought floated up, bright and shiny: what if I built a boat tomorrow? A big one, with a striped flag and a proper sail? {child_name} was already deep in the daydream, picturing the flag snapping in the wind, when the basket tipped and two lanterns rolled away down the path.

{child_name} chased them, set them right, and sat down in the grass with a sigh. The job felt too big now. Every little thing, every sound and every idea, kept tugging {child_name} away from it.

{companion_name} padded over and settled beside the basket, calm as still water, not worried in the least.

'You keep leaving without meaning to,' said {companion_name}. 'A sound, a daydream, and off you go. That is not you being bad at this. That is just what a mind does, it wanders. The whole skill is noticing, and coming back.'

{child_name} frowned. 'But I keep losing my place.'

'Then find it again,' said {companion_name}. 'Gently. No telling yourself off. You notice you have drifted, and you turn back to the one thing. That is the trick, over and over, as many times as it takes.'

{companion_name} nudged the {object_motif} across the grass. 'Keep this beside you. When you feel yourself drift, touch it, and let it mean one thing: back to the lanterns.'

{child_name} picked up the {object_motif} and held it a moment, feeling its weight. Then {child_name} reached for the next lantern.

The sixth lantern went up. The seventh. Off in the dark, the splash went plip again, louder this time. {child_name} felt the pull to turn toward it, and this time noticed the pull as it happened. Just a sound. Back to the lanterns. {child_name} came back, and up went the eighth.

The shiny thought about boats came drifting in again, sail and all. {child_name} watched it float past and, this time, did not climb aboard. Back to the lanterns. Up went the ninth.

It was not that the sounds stopped, or the thoughts stopped. They kept right on coming. {child_name} simply stopped following them all the way out into the dark. Notice. Come back. Notice. Come back. One lantern at a time, exactly the way {child_name} had learned to do one thing at a time.

Up went the tenth lantern, snug on its hook.

The whole path was glowing now, a curving ribbon of soft light threading through {setting}. {child_name} walked back along all ten lanterns, counting each one, and let out a long, slow breath.

'You did every single one,' said {companion_name}.

'I kept wandering off,' said {child_name}.

'You did,' said {companion_name}. 'And you kept coming home to it. That is what finishing really looks like.'

{child_name} set the {object_motif} down beneath the last lantern. The splashes and the daydreams could come and go as they pleased now. {child_name} knew the way back.

Above the path, the first stars blinked awake one by one, and the lanterns swayed a little in the warm, moving air.

{child_name} yawned, tired in the good way, the way you feel after one whole thing carried all the way to its end.

{refrain}.` },
  '7-8': { audioTemplate: `The {hero} had promised to finish the map before nightfall. It was a real map of {setting}, every path, every turn, every hidden hollow, and the {hero} had been drawing it patiently for three whole days. Now only the last corner was left, a small square of blank in the bottom edge.

The {hero} spread the map flat on the rock and dipped the pen. One corner. That was all that stood between the {hero} and done.

The first few lines went well. A path here. A curve there. But then, from across the clearing, came the sound of the other young ones playing a chasing game, laughing, thumping feet, shrieks of almost-caught. The {hero}'s pen slowed. The {hero}'s eyes lifted from the page. Who was winning? Who was it? The {hero} watched for a long moment, and the ink dried on the nib in the air.

The {hero} caught it and looked back down. Right. The corner. The {hero} drew one more path, and then wondered, out of nowhere, whether there might be a faster way to draw maps altogether. A cleverer way. Maybe with little carved stamps you could press onto the page. The {hero} could invent them. And soon the {hero} was not drawing the map at all but sketching stamp after stamp in the margin, lost in the plan.

When the {hero} looked up again, the sky had gone the deep colour of a plum. The corner was still not finished. The margin was crowded with doodles.

The {hero} set the pen down and pressed both hands over both eyes. 'I am never going to finish,' the {hero} muttered. 'Something always takes me away.'

'Something always will,' said a voice.

{companion_name} was sitting on the flat rock nearby, still and easy, watching without a trace of fuss.

'You have drifted off, what, four times now?' said {companion_name}. 'A game. An idea. A better idea. That is not a flaw in you. Every mind on this shore does exactly the same thing. It wanders off.'

'Mine wanders more than most,' said the {hero} glumly.

'Maybe it does,' said {companion_name}. 'It matters less than you think. Here is the part that actually matters. The moment you notice you have drifted, you are not late, and you are not lost. You are standing in the one spot where you can begin again. The whole skill is noticing, and coming back. There is nothing fancier to it than that.'

The {hero} looked at the map, then at the tangle of doodles. 'I keep being so annoyed at myself.'

'That is the part you are allowed to put down,' said {companion_name}. 'The wandering is going to happen no matter what. Being cruel about it afterward just builds a second problem on top of the first. So notice, and turn back, kindly. Like calling a friend in for supper, not scolding them for being out in the yard.'

{companion_name} reached out and tapped the {object_motif} where it sat at the edge of the map. 'Give yourself one small anchor. Each time your eyes come back and land on this, let it say the same quiet thing: one thing, the corner. Remember how you learned to do one thing at a time? This is that, again. Just the very next line.'

The {hero} took a slow breath and set the {object_motif} at the top of the page, right where a returning eye would find it. One thing. The corner.

The chasing game broke out again behind the {hero}, louder than before. The laughter pulled, and the {hero} felt it pull, and this time noticed the pulling in the very moment it began. Not winning, not losing. Just a sound in the dark. Back to the corner. The {hero} drew the next path.

The shiny idea about stamps rose up again. The {hero} watched it climb, bright and tempting, and let it drift on by without chasing after it. Back to the corner. Another path, another careful turn.

A moth blundered softly against the lantern beside the map, and the {hero}'s gaze lifted and followed it up into the dark before the {hero} had even decided to look. Then came the catch, the small quiet noticing, the same as before. Only a moth. Nothing to solve. Back to the corner, where the work was waiting patiently the whole time. The {hero} inked another path, slow and steady, then found the next.

It was a strange thing to feel. The distractions did not stop arriving. What changed was that the {hero} stopped riding each one all the way out to sea. Notice. Come back. Notice. Come back. Line by patient line, the last corner of {setting} filled itself in, the split path, the round hollow, the little bridge over the stream.

The {hero} inked the final mark and lifted the pen clear.

The map was done. All of it. Every path of {setting}, corner to corner, sat finished on the page.

For a moment the {hero} just sat with the finished map, watching the last lines dry, feeling how different this quiet was from the restless, itchy quiet of before. Nothing was tugging anymore. There was only the map, and the {hero}, and the settling dark all around.

'Finished,' the {hero} breathed, hardly daring to believe it.

'Finished,' agreed {companion_name}. 'And you wandered the whole way through it. You simply kept coming home. That is what finishing really is, not never leaving, but always turning back.'

The {hero} rolled the map with care and tucked the {object_motif} beside it. Overhead, the last light drained from the sky, and the first cool breath of night moved across {setting}.

The {hero} felt that particular good tiredness that comes from beginning a thing and staying with it, wander after wander, all the way to the end.

{refrain}.`, scriptTemplate: `{child_name} had promised to finish the map before nightfall. It was a real map of {setting}, every path, every turn, every hidden hollow, and {child_name} had been drawing it patiently for three whole days. Now only the last corner was left, a small square of blank in the bottom edge.

{child_name} spread the map flat on the rock and dipped the pen. One corner. That was all that stood between {child_name} and done.

The first few lines went well. A path here. A curve there. But then, from across the clearing, came the sound of the other young ones playing a chasing game, laughing, thumping feet, shrieks of almost-caught. {child_name}'s pen slowed. {child_name}'s eyes lifted from the page. Who was winning? Who was it? {child_name} watched for a long moment, and the ink dried on the nib in the air.

{child_name} caught it and looked back down. Right. The corner. {child_name} drew one more path, and then wondered, out of nowhere, whether there might be a faster way to draw maps altogether. A cleverer way. Maybe with little carved stamps you could press onto the page. {child_name} could invent them. And soon {child_name} was not drawing the map at all but sketching stamp after stamp in the margin, lost in the plan.

When {child_name} looked up again, the sky had gone the deep colour of a plum. The corner was still not finished. The margin was crowded with doodles.

{child_name} set the pen down and pressed both hands over both eyes. 'I am never going to finish,' {child_name} muttered. 'Something always takes me away.'

'Something always will,' said a voice.

{companion_name} was sitting on the flat rock nearby, still and easy, watching without a trace of fuss.

'You have drifted off, what, four times now?' said {companion_name}. 'A game. An idea. A better idea. That is not a flaw in you. Every mind on this shore does exactly the same thing. It wanders off.'

'Mine wanders more than most,' said {child_name} glumly.

'Maybe it does,' said {companion_name}. 'It matters less than you think. Here is the part that actually matters. The moment you notice you have drifted, you are not late, and you are not lost. You are standing in the one spot where you can begin again. The whole skill is noticing, and coming back. There is nothing fancier to it than that.'

{child_name} looked at the map, then at the tangle of doodles. 'I keep being so annoyed at myself.'

'That is the part you are allowed to put down,' said {companion_name}. 'The wandering is going to happen no matter what. Being cruel about it afterward just builds a second problem on top of the first. So notice, and turn back, kindly. Like calling a friend in for supper, not scolding them for being out in the yard.'

{companion_name} reached out and tapped the {object_motif} where it sat at the edge of the map. 'Give yourself one small anchor. Each time your eyes come back and land on this, let it say the same quiet thing: one thing, the corner. Remember how you learned to do one thing at a time? This is that, again. Just the very next line.'

{child_name} took a slow breath and set the {object_motif} at the top of the page, right where a returning eye would find it. One thing. The corner.

The chasing game broke out again behind {child_name}, louder than before. The laughter pulled, and {child_name} felt it pull, and this time noticed the pulling in the very moment it began. Not winning, not losing. Just a sound in the dark. Back to the corner. {child_name} drew the next path.

The shiny idea about stamps rose up again. {child_name} watched it climb, bright and tempting, and let it drift on by without chasing after it. Back to the corner. Another path, another careful turn.

A moth blundered softly against the lantern beside the map, and {child_name}'s gaze lifted and followed it up into the dark before {child_name} had even decided to look. Then came the catch, the small quiet noticing, the same as before. Only a moth. Nothing to solve. Back to the corner, where the work was waiting patiently the whole time. {child_name} inked another path, slow and steady, then found the next.

It was a strange thing to feel. The distractions did not stop arriving. What changed was that {child_name} stopped riding each one all the way out to sea. Notice. Come back. Notice. Come back. Line by patient line, the last corner of {setting} filled itself in, the split path, the round hollow, the little bridge over the stream.

{child_name} inked the final mark and lifted the pen clear.

The map was done. All of it. Every path of {setting}, corner to corner, sat finished on the page.

For a moment {child_name} just sat with the finished map, watching the last lines dry, feeling how different this quiet was from the restless, itchy quiet of before. Nothing was tugging anymore. There was only the map, and {child_name}, and the settling dark all around.

'Finished,' {child_name} breathed, hardly daring to believe it.

'Finished,' agreed {companion_name}. 'And you wandered the whole way through it. You simply kept coming home. That is what finishing really is, not never leaving, but always turning back.'

{child_name} rolled the map with care and tucked the {object_motif} beside it. Overhead, the last light drained from the sky, and the first cool breath of night moved across {setting}.

{child_name} felt that particular good tiredness that comes from beginning a thing and staying with it, wander after wander, all the way to the end.

{refrain}.` },
  '9-11': { audioTemplate: `The {hero} had set aside the whole evening for one task, and had been quietly proud of that decision for almost ten minutes.

The task was simple to describe and, it turned out, not remotely simple to do: read the old tide-chart of {setting} from beginning to end and copy the important marks into a book, so that the younger ones could learn the safe crossings. The {hero} had meant to do it for weeks. Tonight there were no chores left, no errands, no good reasons to put it off. There was only the chart, the blank book, a steady candle, and a long quiet stretch of time that belonged to no one else.

The {hero} read the first line and copied it out neatly. Then the second. It was going well, well enough that some restless corner of the {hero}'s mind, finding nothing to complain about, quietly went looking for somewhere more interesting to be.

It found a sound first. Water moving somewhere out in the dark of {setting}, a low, rhythmic wash that was almost certainly just the tide, but might, if a person listened hard enough, be something stranger and better. The {hero} listened hard enough. For a whole minute the {hero} was not reading the chart at all but building an elaborate story about what the sound might be, who might be out there, what it would mean, and only noticed the drift when a drop of ink swelled at the nib and fell and spread across the page.

Back to the chart. The {hero} blotted the small dark star of ink and found the line again.

The next escape was quieter, and far harder to catch, because it did not come from outside at all. It came from within, wearing the friendly disguise of a good idea. What if, the {hero} thought, this book would be so much better with little drawings beside each crossing? Pictures the youngest ones could recognise before they could even read. Yes, and colours, and a key at the front, and a proper stitched cover. Within moments the {hero} was no longer copying anything but designing a whole beautiful book that did not exist, while the real one lay open and unfinished under both hands.

When the {hero} surfaced this time, the candle had burned down a clear, accusing notch. A hot, familiar frustration climbed up the {hero}'s neck. Why was this so hard? Other people, the {hero} felt fairly sure, simply sat down and did the thing in front of them, without their own thoughts mounting a rescue every few minutes. The {hero} pressed the heels of both hands hard into both eyes and sat there feeling like exactly the sort of person who could not be trusted with a single quiet task.

'That sigh sounded a great deal like giving up,' said {companion_name}, who had been curled so long and so still on the windowsill that the {hero} had genuinely forgotten anyone else was in the room.

'I cannot stay with it,' said the {hero}. 'And I mean it, I truly want to. I sit down, I honestly want to do it, and then I look up and I have been gone for ages, somewhere else entirely. Something always comes along and takes me.'

{companion_name} stretched, unhurried, and considered the {hero} without the smallest flicker of alarm. 'Let me ask you something. When you drifted just now, the sound, and then the drawings, how did you find out you had drifted at all?'

The {hero} thought about it, and found the answer harder to explain than expected. 'I do not really know. I just, noticed. One moment I was gone, and the next I was back, and I could see the place I had left.'

'That noticing,' said {companion_name}, 'is the entire thing. That is not the moment you failed at the task. That is the exact moment the skill actually happens. Every mind wanders, yours, mine, every mind that has ever tried to sit still and hold to one thing. The wandering was never the problem to solve. The only move there has ever been is noticing, and coming back. Quietly. That is the whole of it.'

'But I have to do it a hundred times a night,' said the {hero}.

'Then you come back a hundred times,' said {companion_name}, as though this were the most ordinary thing in the world. 'A mind that comes back a hundred times is not a broken mind that keeps failing. It is a person doing the real work of paying attention, which was never one enormous act of holding on. It is a thousand small, ordinary returns, one after another.'

The {hero} sat with that a while. Then, more quietly: 'The worst part is being cross at myself every single time it happens.'

'Ah. That part you can set down entirely,' said {companion_name}, gentler now. 'The wandering will happen whether or not you are kind about it, so the crossness changes nothing except to lay a second weight on top of the first. When you catch yourself gone, you do not need a lecture, and you do not need to prove anything. You only need to turn back, the way you would wave in a friend who had wandered off down the beach. No scolding. Just, there you are. Come on back.'

{companion_name} looked toward the {object_motif} resting at the edge of the desk. 'And pick one small thing to come back to. Not the whole finished book. Not the beautiful thing you can already see in your head. Just the next line of the chart. One thing at a time, the way you already know how to do. Let that single line be the whole of the horizon for now.'

The {hero} breathed out slowly and moved the {object_motif} to the top of the page, to the very spot where an eye returning from a wander would fall on it first. One line. Only ever the next line.

The tide kept washing away in the dark, offering up its story again, patient and endless. The {hero} felt the old invitation to follow it out, and this time caught the pull while it was still only a pull, before it could become a whole journey. Not a mystery. Just water. Back to the chart. The next line went into the book in careful ink.

The idea about drawings came drifting up once more, bright and full of promise, and this time the {hero} watched it come, felt honestly how much a part of them still wanted to chase it, and let it pass by uncaught, the way you can let a wave lift you and set you gently down again without letting it carry you off your feet. Back to the chart. Another line. Another safe crossing copied down.

The interruptions did not stop; that was the quiet revelation of the whole evening. The sounds still came. The shiny ideas still came, as bright as ever. What had changed was only this: the {hero} no longer rode each one all the way out to the horizon before remembering to turn around. The gap between drifting and noticing grew shorter and shorter, and the turning-back grew calmer, easier, until it began to feel almost restful, a small, steady rhythm of leaving and returning, leaving and returning, line after line, all the way down the length of the old chart of {setting}.

The {hero} copied the final crossing and set the pen down.

The book was finished. Every safe path marked, corner to corner, clear enough for the smallest and newest crosser to follow in the dark.

'Done,' said the {hero}, and was surprised to find the feeling was not triumph so much as a deep, level calm.

'Done,' said {companion_name}, 'and you wandered off more times tonight than either of us could hope to count. You simply came back even more times than you wandered. That is the whole of it, in the end. Not a mind that never leaves, there is no such mind anywhere. Only a mind that keeps choosing to return.'

The {hero} closed the book over the {object_motif} to hold the place, and looked out at {setting}, where the very tide the {hero} had spent all evening not-following went on moving quietly through the dark, vast and calm and entirely unbothered.

There was a particular kind of tiredness in staying with one thing all the way to its end, and it sat heavier and far better than the thin, scattered tiredness of an evening spent chasing everything at once.

{refrain}.`, scriptTemplate: `{child_name} had set aside the whole evening for one task, and had been quietly proud of that decision for almost ten minutes.

The task was simple to describe and, it turned out, not remotely simple to do: read the old tide-chart of {setting} from beginning to end and copy the important marks into a book, so that the younger ones could learn the safe crossings. {child_name} had meant to do it for weeks. Tonight there were no chores left, no errands, no good reasons to put it off. There was only the chart, the blank book, a steady candle, and a long quiet stretch of time that belonged to no one else.

{child_name} read the first line and copied it out neatly. Then the second. It was going well, well enough that some restless corner of {child_name}'s mind, finding nothing to complain about, quietly went looking for somewhere more interesting to be.

It found a sound first. Water moving somewhere out in the dark of {setting}, a low, rhythmic wash that was almost certainly just the tide, but might, if a person listened hard enough, be something stranger and better. {child_name} listened hard enough. For a whole minute {child_name} was not reading the chart at all but building an elaborate story about what the sound might be, who might be out there, what it would mean, and only noticed the drift when a drop of ink swelled at the nib and fell and spread across the page.

Back to the chart. {child_name} blotted the small dark star of ink and found the line again.

The next escape was quieter, and far harder to catch, because it did not come from outside at all. It came from within, wearing the friendly disguise of a good idea. What if, {child_name} thought, this book would be so much better with little drawings beside each crossing? Pictures the youngest ones could recognise before they could even read. Yes, and colours, and a key at the front, and a proper stitched cover. Within moments {child_name} was no longer copying anything but designing a whole beautiful book that did not exist, while the real one lay open and unfinished under both hands.

When {child_name} surfaced this time, the candle had burned down a clear, accusing notch. A hot, familiar frustration climbed up {child_name}'s neck. Why was this so hard? Other people, {child_name} felt fairly sure, simply sat down and did the thing in front of them, without their own thoughts mounting a rescue every few minutes. {child_name} pressed the heels of both hands hard into both eyes and sat there feeling like exactly the sort of person who could not be trusted with a single quiet task.

'That sigh sounded a great deal like giving up,' said {companion_name}, who had been curled so long and so still on the windowsill that {child_name} had genuinely forgotten anyone else was in the room.

'I cannot stay with it,' said {child_name}. 'And I mean it, I truly want to. I sit down, I honestly want to do it, and then I look up and I have been gone for ages, somewhere else entirely. Something always comes along and takes me.'

{companion_name} stretched, unhurried, and considered {child_name} without the smallest flicker of alarm. 'Let me ask you something. When you drifted just now, the sound, and then the drawings, how did you find out you had drifted at all?'

{child_name} thought about it, and found the answer harder to explain than expected. 'I do not really know. I just, noticed. One moment I was gone, and the next I was back, and I could see the place I had left.'

'That noticing,' said {companion_name}, 'is the entire thing. That is not the moment you failed at the task. That is the exact moment the skill actually happens. Every mind wanders, yours, mine, every mind that has ever tried to sit still and hold to one thing. The wandering was never the problem to solve. The only move there has ever been is noticing, and coming back. Quietly. That is the whole of it.'

'But I have to do it a hundred times a night,' said {child_name}.

'Then you come back a hundred times,' said {companion_name}, as though this were the most ordinary thing in the world. 'A mind that comes back a hundred times is not a broken mind that keeps failing. It is a person doing the real work of paying attention, which was never one enormous act of holding on. It is a thousand small, ordinary returns, one after another.'

{child_name} sat with that a while. Then, more quietly: 'The worst part is being cross at myself every single time it happens.'

'Ah. That part you can set down entirely,' said {companion_name}, gentler now. 'The wandering will happen whether or not you are kind about it, so the crossness changes nothing except to lay a second weight on top of the first. When you catch yourself gone, you do not need a lecture, and you do not need to prove anything. You only need to turn back, the way you would wave in a friend who had wandered off down the beach. No scolding. Just, there you are. Come on back.'

{companion_name} looked toward the {object_motif} resting at the edge of the desk. 'And pick one small thing to come back to. Not the whole finished book. Not the beautiful thing you can already see in your head. Just the next line of the chart. One thing at a time, the way you already know how to do. Let that single line be the whole of the horizon for now.'

{child_name} breathed out slowly and moved the {object_motif} to the top of the page, to the very spot where an eye returning from a wander would fall on it first. One line. Only ever the next line.

The tide kept washing away in the dark, offering up its story again, patient and endless. {child_name} felt the old invitation to follow it out, and this time caught the pull while it was still only a pull, before it could become a whole journey. Not a mystery. Just water. Back to the chart. The next line went into the book in careful ink.

The idea about drawings came drifting up once more, bright and full of promise, and this time {child_name} watched it come, felt honestly how much a part of them still wanted to chase it, and let it pass by uncaught, the way you can let a wave lift you and set you gently down again without letting it carry you off your feet. Back to the chart. Another line. Another safe crossing copied down.

The interruptions did not stop; that was the quiet revelation of the whole evening. The sounds still came. The shiny ideas still came, as bright as ever. What had changed was only this: {child_name} no longer rode each one all the way out to the horizon before remembering to turn around. The gap between drifting and noticing grew shorter and shorter, and the turning-back grew calmer, easier, until it began to feel almost restful, a small, steady rhythm of leaving and returning, leaving and returning, line after line, all the way down the length of the old chart of {setting}.

{child_name} copied the final crossing and set the pen down.

The book was finished. Every safe path marked, corner to corner, clear enough for the smallest and newest crosser to follow in the dark.

'Done,' said {child_name}, and was surprised to find the feeling was not triumph so much as a deep, level calm.

'Done,' said {companion_name}, 'and you wandered off more times tonight than either of us could hope to count. You simply came back even more times than you wandered. That is the whole of it, in the end. Not a mind that never leaves, there is no such mind anywhere. Only a mind that keeps choosing to return.'

{child_name} closed the book over the {object_motif} to hold the place, and looked out at {setting}, where the very tide {child_name} had spent all evening not-following went on moving quietly through the dark, vast and calm and entirely unbothered.

There was a particular kind of tiredness in staying with one thing all the way to its end, and it sat heavier and far better than the thin, scattered tiredness of an evening spent chasing everything at once.

{refrain}.` },
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
