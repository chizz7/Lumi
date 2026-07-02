// content/confidence/levels.ts
//
// Confidence — 5 leveled bedtime stories (the quiet belief that you can try).
// Same two-template structure as the other paths:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// ⚠ DRAFT — must pass the safety + expert review gate before delivery
//   (see docs/01_PRD.md FR-4/FR-5).
//
// To draft/refine: npm run author:draft -- --subject confidence --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: "You Don't Have to Be Ready",
    concept: 'It is okay to begin before you feel ready', callback: null, ageFloor: 3,
    summary: 'A small hero waits to feel fully ready before trying — and the waiting never ends. Their companion shares that no one feels completely ready, and that beginning is allowed even while you still feel unsure.',
    teachingNote: 'Removing the belief that you must feel ready first frees a child to start — and starting is where confidence is built.',
    learningBeat: 'You do not have to be finished to begin',
    ageVariants: {
  '3-4': { audioTemplate: `The {hero} lived by {setting}.

Every day, the little ones took turns. One by one, they climbed up high. Then they called out, loud and glad. Splash and giggle. Up and down.

The {hero} watched from the side. The {hero} wanted a turn too. Oh, the {hero} wanted it so much.

But the {hero} waited. "Not yet," said the {hero}. "I am not ready. When I am ready, I will go."

The {hero} held the {object_motif} tight. The {hero} waited. And waited.

The sun climbed up. The turns went by, one by one. A little one hopped. Then another. Then another. Still the {hero} waited to feel ready.

The {hero} thought, "Soon. Soon I will feel it. Soon I will be ready." But the ready feeling did not come. It did not come at all.

The sun began to dip. Soft and low over {setting}. Now there was one turn left. Just one turn.

{companion_name} came and sat close. {companion_name} was warm and kind and calm.

"You have waited all day," said {companion_name}. "But ready does not come first, little one. You do not have to be finished to begin."

The {hero} looked at the last turn. The {hero} felt wobbly inside.

"I still feel wobbly," said the {hero}. "My tummy is all flippy."

"That is okay," said {companion_name}. "Wobbly can climb too. Flippy can hop too. You can go while you still feel unsure."

So the {hero} took a big, slow breath. In and out. The {hero} stood up tall. Toes tingling, knees a little shaky, the {hero} climbed up high.

And the {hero} called out, loud and glad!

It was not perfect. It was a little wobbly. But it was a turn. It was the {hero}'s very own turn.

{companion_name} clapped and clapped.

The {hero} came down, cheeks pink and happy. The {hero} had begun before the ready feeling came. And it felt good. It felt so good.

The {hero} hugged the {object_motif} close.

"I did it," whispered the {hero}. "I began."

{companion_name} smiled beside {setting}. The little ones waved goodnight. The evening went soft and quiet. Tomorrow there would be more turns, and more tomorrows after that. But this turn, the very first one, had already happened. And it could not un-happen.

{refrain}.`, scriptTemplate: `{child_name} lived by {setting}.

Every day, the little ones took turns. One by one, they climbed up high. Then they called out, loud and glad. Splash and giggle. Up and down.

{child_name} watched from the side. {child_name} wanted a turn too. Oh, {child_name} wanted it so much.

But {child_name} waited. "Not yet," said {child_name}. "I am not ready. When I am ready, I will go."

{child_name} held the {object_motif} tight. {child_name} waited. And waited.

The sun climbed up. The turns went by, one by one. A little one hopped. Then another. Then another. Still {child_name} waited to feel ready.

{child_name} thought, "Soon. Soon I will feel it. Soon I will be ready." But the ready feeling did not come. It did not come at all.

The sun began to dip. Soft and low over {setting}. Now there was one turn left. Just one turn.

{companion_name} came and sat close. {companion_name} was warm and kind and calm.

"You have waited all day," said {companion_name}. "But ready does not come first, little one. You do not have to be finished to begin."

{child_name} looked at the last turn. {child_name} felt wobbly inside.

"I still feel wobbly," said {child_name}. "My tummy is all flippy."

"That is okay," said {companion_name}. "Wobbly can climb too. Flippy can hop too. You can go while you still feel unsure."

So {child_name} took a big, slow breath. In and out. {child_name} stood up tall. Toes tingling, knees a little shaky, {child_name} climbed up high.

And {child_name} called out, loud and glad!

It was not perfect. It was a little wobbly. But it was a turn. It was {child_name}'s very own turn.

{companion_name} clapped and clapped.

{child_name} came down, cheeks pink and happy. {child_name} had begun before the ready feeling came. And it felt good. It felt so good.

{child_name} hugged the {object_motif} close.

"I did it," whispered {child_name}. "I began."

{companion_name} smiled beside {setting}. The little ones waved goodnight. The evening went soft and quiet. Tomorrow there would be more turns, and more tomorrows after that. But this turn, the very first one, had already happened. And it could not un-happen.

{refrain}.` },
  '5-6': { audioTemplate: `By the edge of {setting}, there was a place where everyone tried the big thing. The older ones went first, then the middle ones, and at last the little ones. One after another, they stepped up, and everyone below cheered their name.

The {hero} came every single day to watch. And every single day, the {hero} thought, "Tomorrow. Tomorrow I will feel ready, and then I will take my turn."

The {hero} carried the {object_motif} everywhere, tucked safe and close. Holding it helped. But holding it did not make the ready feeling arrive.

So the {hero} kept a list of things to learn first. I will try when my legs feel stronger. I will try when I am not so wobbly. I will try when I know for sure it will go well. The list grew longer and longer, and the turn never came.

Days went by. The {hero} watched a smaller one step up, shaking all over, and do the big thing anyway. The {hero} watched someone slip, laugh, and try again. And still the {hero} stayed at the edge, waiting to feel finished before starting.

Each day, fewer turns were left by the time the {hero} felt brave enough to think about it. The good spots filled up. The best light faded. The chance was not gone, but it was getting smaller, like a puddle drying in the sun, and the {hero} could feel it.

One evening, when the light over {setting} turned soft and gold, {companion_name} sat down beside the {hero}.

"You come here every day," said {companion_name}. "And every day you watch. What are you waiting for?"

"I am waiting until I am ready," said the {hero}. "I want to be really, truly ready first. Then it will not be scary."

{companion_name} was quiet for a moment. Then {companion_name} said, "Here is the thing about ready. It does not come before. It comes after. Nobody up there felt finished. They felt wobbly, and they went anyway. You do not have to be finished to begin."

The {hero} looked up. "But what if I am not good at it?"

"Then you will be a beginner," said {companion_name}, gently. "That is exactly what beginning is for."

The {hero} looked at the big thing. There was one turn left before dark. The old flippy feeling rushed up, but this time the {hero} took a slow breath and let it be there.

"I still feel unsure," the {hero} said.

"Good," said {companion_name}. "Bring the unsure feeling with you. It can come along."

So the {hero} stood. Legs a little shaky, the {object_motif} tucked close, the {hero} walked to the front. Everyone below went quiet, then began to cheer.

The {hero} stepped up and did the big thing.

It was not smooth. It was a bit crooked and a bit wild. But it happened, really happened, and the {hero} was in the middle of it instead of watching from the edge.

For one heartbeat the {hero} wished for more time to practise. Then the heartbeat passed, and there was only this: the doing of it, unfinished and real.

When it was over, the {hero} was breathing fast and grinning wide. The waiting had felt so heavy. Beginning felt light.

{companion_name} met the {hero} with a warm nod. "You did not wait for ready," {companion_name} said. "You just began."

The {hero} held the {object_motif} and looked back at the place where everyone tried the big thing. Tomorrow the {hero} would come again, not to watch, but to take a turn.

The last light slipped soft across {setting}, and the {hero} felt the good, tired feeling of someone who finally started. The waiting was over. The beginning had already happened, and it could not be taken back. Watching had cost nothing and given nothing. Beginning had cost a little and given everything. That was the trade, and it had been worth making. No one had handed over permission. No one ever does.

{refrain}.`, scriptTemplate: `By the edge of {setting}, there was a place where everyone tried the big thing. The older ones went first, then the middle ones, and at last the little ones. One after another, they stepped up, and everyone below cheered their name.

{child_name} came every single day to watch. And every single day, {child_name} thought, "Tomorrow. Tomorrow I will feel ready, and then I will take my turn."

{child_name} carried the {object_motif} everywhere, tucked safe and close. Holding it helped. But holding it did not make the ready feeling arrive.

So {child_name} kept a list of things to learn first. I will try when my legs feel stronger. I will try when I am not so wobbly. I will try when I know for sure it will go well. The list grew longer and longer, and the turn never came.

Days went by. {child_name} watched a smaller one step up, shaking all over, and do the big thing anyway. {child_name} watched someone slip, laugh, and try again. And still {child_name} stayed at the edge, waiting to feel finished before starting.

Each day, fewer turns were left by the time {child_name} felt brave enough to think about it. The good spots filled up. The best light faded. The chance was not gone, but it was getting smaller, like a puddle drying in the sun, and {child_name} could feel it.

One evening, when the light over {setting} turned soft and gold, {companion_name} sat down beside {child_name}.

"You come here every day," said {companion_name}. "And every day you watch. What are you waiting for?"

"I am waiting until I am ready," said {child_name}. "I want to be really, truly ready first. Then it will not be scary."

{companion_name} was quiet for a moment. Then {companion_name} said, "Here is the thing about ready. It does not come before. It comes after. Nobody up there felt finished. They felt wobbly, and they went anyway. You do not have to be finished to begin."

{child_name} looked up. "But what if I am not good at it?"

"Then you will be a beginner," said {companion_name}, gently. "That is exactly what beginning is for."

{child_name} looked at the big thing. There was one turn left before dark. The old flippy feeling rushed up, but this time {child_name} took a slow breath and let it be there.

"I still feel unsure," {child_name} said.

"Good," said {companion_name}. "Bring the unsure feeling with you. It can come along."

So {child_name} stood. Legs a little shaky, the {object_motif} tucked close, {child_name} walked to the front. Everyone below went quiet, then began to cheer.

{child_name} stepped up and did the big thing.

It was not smooth. It was a bit crooked and a bit wild. But it happened, really happened, and {child_name} was in the middle of it instead of watching from the edge.

For one heartbeat {child_name} wished for more time to practise. Then the heartbeat passed, and there was only this: the doing of it, unfinished and real.

When it was over, {child_name} was breathing fast and grinning wide. The waiting had felt so heavy. Beginning felt light.

{companion_name} met {child_name} with a warm nod. "You did not wait for ready," {companion_name} said. "You just began."

{child_name} held the {object_motif} and looked back at the place where everyone tried the big thing. Tomorrow {child_name} would come again, not to watch, but to take a turn.

The last light slipped soft across {setting}, and {child_name} felt the good, tired feeling of someone who finally started. The waiting was over. The beginning had already happened, and it could not be taken back. Watching had cost nothing and given nothing. Beginning had cost a little and given everything. That was the trade, and it had been worth making. No one had handed over permission. No one ever does.

{refrain}.` },
  '7-8': { audioTemplate: `Every evening in {setting}, when the work of the day was done, there was an open turn. Anyone who wanted could step up and try the big thing while everyone else watched and cheered. Some were wobbly. Some were smooth. It did not seem to matter much. What mattered was stepping up.

The {hero} wanted a turn more than almost anything. The {hero} had wanted it for a whole season. But wanting was one thing, and doing was another, and between them sat a single stubborn thought: not yet, not until I am ready.

So the {hero} watched from the back, holding the {object_motif}, and made a quiet plan. First I will practise where no one can see. Then I will practise a little more. Then, once I can do it without a single mistake, I will take my open turn. It was a good plan. It was a safe plan. The trouble was that the end of it never came.

The {hero} practised in secret and got better. But every time the {hero} imagined stepping up, a new worry appeared. What if my hands shake? What if I forget the steps? What if I am almost ready, but not all the way? And each worry sent the {hero} back to practise a little more, waiting for a day that felt finished.

Meanwhile, the open turns went on without the {hero}. A younger one stepped up, trembling, and stumbled halfway, and everyone cheered anyway. An older one tried something new and got it wrong twice before getting it right. The {hero} noticed something strange: nobody up there looked finished. They looked nervous. They looked alive. They went anyway.

And the season was not going to last forever. The {hero} could feel it thinning out. Some evenings the open turn was called early and ended early, and once or twice there was no room left by the time the {hero} had finished deciding not to go. The chance had never felt urgent before, because there had always been tomorrow. Now, quietly, the {hero} began to wonder how many tomorrows were actually left, and the wondering did not feel good.

One evening the light in {setting} turned low and amber, and {companion_name} came and sat beside the {hero} at the back.

"I have watched you watch," said {companion_name}. "A whole season of watching. You are ready-er than most of the ones who go up there."

"I do not feel ready," the {hero} admitted. "I keep thinking one more day of practice and then I will be sure."

{companion_name} tilted their head. "And after that day, will you be sure?"

The {hero} opened their mouth, then stopped. Because the honest answer was no. There would always be one more day.

"That is the trap," {companion_name} said, not unkindly. "You are waiting for a feeling that does not come first. Ready is not the ticket you show at the door. It is what you find once you are already inside. You do not have to be finished to begin."

The {hero} looked down at the {object_motif} in both hands. "But what if I go up and it goes badly?"

"Then it goes badly, and you will still have gone," said {companion_name}. "Watching perfectly is worth nothing. A crooked turn is worth everything, because it is real and it is yours."

Out in the middle, the last open turn of the night was called. One place left. The old flippy feeling climbed up the {hero}'s throat, the one that usually won. This time the {hero} breathed around it and stood up.

"I am not ready," the {hero} said.

"I know," said {companion_name}, smiling. "Go anyway."

So the {hero} walked to the front with unsteady legs and the {object_motif} tucked close. The watchers went quiet, then began to call warm encouragement. The {hero} stepped up, and for one long heartbeat wished for more time. Then the heartbeat passed, and there was nothing left to do but the thing itself.

The {hero} tried the big thing.

It was not smooth. There was a wobble in the middle that made the {hero}'s stomach drop, and a part near the end that came out crooked and rushed. But it happened. It truly happened, start to finish, with the {hero} inside it instead of watching from the back.

When it was done, the {hero} stood there breathing hard, half laughing, not quite believing it. The wobble had not been the end of the world. The crooked part had not been the end of the world either. Somehow the {hero} had walked all the way through the thing that had felt too big for a whole season, and come out the other side still standing. The watchers cheered, but that was not the loud part. The loud part was inside: the enormous, surprising lightness of having finally begun.

{companion_name} met the {hero} at the edge. "How do you feel?"

"Wobbly," the {hero} said. "And glad. Really glad."

"That is the feeling," said {companion_name}. "It was never going to come before. It was always waiting on the other side of starting."

The {hero} held the {object_motif} and looked out at the open ground where, tomorrow, there would be another turn to take. The season of watching was over. Something else had started tonight, and it could not be un-started.

Beginning had not made the fear disappear. It had simply made the fear beside the point. The turn existed now. It had a shape and a memory, and no amount of waiting could ever have made one like it.

Above {setting}, the amber light thinned to a soft violet, and the {hero} carried home the good, worn-out feeling of someone who did not wait.

{refrain}.`, scriptTemplate: `Every evening in {setting}, when the work of the day was done, there was an open turn. Anyone who wanted could step up and try the big thing while everyone else watched and cheered. Some were wobbly. Some were smooth. It did not seem to matter much. What mattered was stepping up.

{child_name} wanted a turn more than almost anything. {child_name} had wanted it for a whole season. But wanting was one thing, and doing was another, and between them sat a single stubborn thought: not yet, not until I am ready.

So {child_name} watched from the back, holding the {object_motif}, and made a quiet plan. First I will practise where no one can see. Then I will practise a little more. Then, once I can do it without a single mistake, I will take my open turn. It was a good plan. It was a safe plan. The trouble was that the end of it never came.

{child_name} practised in secret and got better. But every time {child_name} imagined stepping up, a new worry appeared. What if my hands shake? What if I forget the steps? What if I am almost ready, but not all the way? And each worry sent {child_name} back to practise a little more, waiting for a day that felt finished.

Meanwhile, the open turns went on without {child_name}. A younger one stepped up, trembling, and stumbled halfway, and everyone cheered anyway. An older one tried something new and got it wrong twice before getting it right. {child_name} noticed something strange: nobody up there looked finished. They looked nervous. They looked alive. They went anyway.

And the season was not going to last forever. {child_name} could feel it thinning out. Some evenings the open turn was called early and ended early, and once or twice there was no room left by the time {child_name} had finished deciding not to go. The chance had never felt urgent before, because there had always been tomorrow. Now, quietly, {child_name} began to wonder how many tomorrows were actually left, and the wondering did not feel good.

One evening the light in {setting} turned low and amber, and {companion_name} came and sat beside {child_name} at the back.

"I have watched you watch," said {companion_name}. "A whole season of watching. You are ready-er than most of the ones who go up there."

"I do not feel ready," {child_name} admitted. "I keep thinking one more day of practice and then I will be sure."

{companion_name} tilted their head. "And after that day, will you be sure?"

{child_name} opened their mouth, then stopped. Because the honest answer was no. There would always be one more day.

"That is the trap," {companion_name} said, not unkindly. "You are waiting for a feeling that does not come first. Ready is not the ticket you show at the door. It is what you find once you are already inside. You do not have to be finished to begin."

{child_name} looked down at the {object_motif} in both hands. "But what if I go up and it goes badly?"

"Then it goes badly, and you will still have gone," said {companion_name}. "Watching perfectly is worth nothing. A crooked turn is worth everything, because it is real and it is yours."

Out in the middle, the last open turn of the night was called. One place left. The old flippy feeling climbed up {child_name}'s throat, the one that usually won. This time {child_name} breathed around it and stood up.

"I am not ready," {child_name} said.

"I know," said {companion_name}, smiling. "Go anyway."

So {child_name} walked to the front with unsteady legs and the {object_motif} tucked close. The watchers went quiet, then began to call warm encouragement. {child_name} stepped up, and for one long heartbeat wished for more time. Then the heartbeat passed, and there was nothing left to do but the thing itself.

{child_name} tried the big thing.

It was not smooth. There was a wobble in the middle that made {child_name}'s stomach drop, and a part near the end that came out crooked and rushed. But it happened. It truly happened, start to finish, with {child_name} inside it instead of watching from the back.

When it was done, {child_name} stood there breathing hard, half laughing, not quite believing it. The wobble had not been the end of the world. The crooked part had not been the end of the world either. Somehow {child_name} had walked all the way through the thing that had felt too big for a whole season, and come out the other side still standing. The watchers cheered, but that was not the loud part. The loud part was inside: the enormous, surprising lightness of having finally begun.

{companion_name} met {child_name} at the edge. "How do you feel?"

"Wobbly," {child_name} said. "And glad. Really glad."

"That is the feeling," said {companion_name}. "It was never going to come before. It was always waiting on the other side of starting."

{child_name} held the {object_motif} and looked out at the open ground where, tomorrow, there would be another turn to take. The season of watching was over. Something else had started tonight, and it could not be un-started.

Beginning had not made the fear disappear. It had simply made the fear beside the point. The turn existed now. It had a shape and a memory, and no amount of waiting could ever have made one like it.

Above {setting}, the amber light thinned to a soft violet, and {child_name} carried home the good, worn-out feeling of someone who did not wait.

{refrain}.` },
  '9-11': { audioTemplate: `There was a thing the {hero} had wanted to do for as long as anyone could remember. In {setting}, on ordinary evenings, people gathered at the open ground and took turns trying it — the big thing, the one that looked like flying when it went well and like falling when it did not. Nobody made you go. You simply stepped forward when you felt like it, and the others made room.

The {hero} felt like it constantly. The {hero} also never stepped forward.

This was the private contradiction the {hero} carried around, along with the {object_motif}, which went everywhere in a pocket like a small solid promise. On the outside, the {hero} looked patient, even a little above it all, the sort of person who was simply biding their time. On the inside was something more tangled: a plan so careful and so endless that it had quietly become a cage.

The plan went like this. Before stepping forward, the {hero} would get good enough that stepping forward could not go wrong. Not mostly good — completely good. The kind of good that left no room for a wobble, a stumble, a moment of looking foolish. Then, and only then, when the whole thing was polished and certain, the {hero} would take a turn, and it would be perfect, and everyone would see that the waiting had been worth it.

It was a beautiful plan. It had exactly one flaw, which was that the finish line kept moving.

Every time the {hero} got close to good enough, the definition of good enough crept a little further away. On one day it was: I will go when I stop shaking. By the time the shaking eased, it had become: I will go when I never make a single mistake in practice. And when even that nearly happened, some new and finer flaw appeared to be fixed first, because a mind that is looking for reasons to wait will always, always find one. The {hero} was not lazy. That was the strange part. The {hero} worked harder than almost anyone. But all that work poured into a bucket with a hole in the bottom, and the bucket was called not yet.

Meanwhile the evenings went by, and the {hero} watched other people do the imperfect, ordinary, marvellous thing of trying. A small one stepped forward, shook like a leaf, got it wrong, and came back grinning as if being wrong had cost nothing at all. An older one who was genuinely skilled misjudged a turn, tumbled, and simply stood up and laughed. The {hero} began to notice, with a slow and uncomfortable clarity, that nobody out there was finished either. They were all unsure. They had all just decided that unsure was allowed.

One evening, when the light over {setting} had gone the colour of dark honey, {companion_name} sat down on the ground beside the {hero}, close but not crowding, and for a while said nothing at all.

"You are here every night," {companion_name} said finally. "I have started to think of this spot as yours. Which is strange, because I have never once seen you take a turn."

"I am getting ready," the {hero} said. It was the sentence the {hero} had said, in one form or another, for a very long time.

"Ready for what, exactly?" {companion_name} asked. Not sharp. Just curious, the way someone is curious about a knot they think they can help untie. "What does ready look like, when it finally arrives?"

The {hero} started to answer and found, to their surprise, that there was no answer there. Ready had always been a feeling somewhere up ahead, a warm certainty that would arrive one day and hand over permission. But when the {hero} reached for it and tried to describe it, it dissolved, because it had never been real. It was a horizon. You could walk toward it forever and never once stand on it.

"I do not think it looks like anything," the {hero} said slowly. "I think I have been waiting for something that was never going to come."

{companion_name} nodded, as if this were the most ordinary and forgivable mistake in the world. "That is the trap, and it is a clever one, because it wears the mask of being careful. It tells you that waiting is the responsible choice, when really it is just fear in tidy clothes. Nobody out there is finished. They are unsure and they go anyway, and the going is the only thing that ever turns unsure into able. You do not have to be finished to begin. In truth, you cannot begin any other way."

The {hero} sat with that. It did not feel like a scolding. It felt like a window opening in a room that had been closed a long time. For the first time, the {hero} let themselves see the shape of all the evenings spent on this exact patch of ground, watching, arranging reasons, keeping perfectly safe and perfectly still. It had felt like preparation. From here it looked a great deal more like hiding, and the difference was not comfortable to sit with.

"But if I go now," the {hero} said, "it will not be perfect. People will see it not be perfect."

"Yes," {companion_name} agreed, gently. "They will see a beginner being a beginner. That is not a disaster. That is the bravest, most ordinary thing there is. A perfect turn you never take is worth nothing at all. A crooked turn you actually take is worth more than a whole season of watching."

Out on the open ground, the evening's turns were winding down. There was time for one or two more. The {hero} felt the familiar surge of the old feeling — the tightening, the excellent and convincing reasons to stay seated, the voice that whispered tomorrow, when you are better. But this time the {hero} could see the voice for what it was. Not a guardian. A cage.

The {hero} took the {object_motif} out of their pocket and closed one hand around it, not because it made them ready, but because it was familiar, and sometimes one familiar thing is enough to carry into an unfamiliar moment.

"I am still nervous," the {hero} said, standing up. "I am not ready."

"I would not believe you if you said otherwise," said {companion_name}, with a small, warm smile. "Go on. Bring the nervous with you. It is allowed to come."

So the {hero} walked out across the open ground on legs that did not feel entirely their own. A few people noticed and made room, the way they always did, without any fuss. The {hero} reached the spot where you begin, and for one last long moment wished for more time, more practice, one more season of getting ready.

Then the moment passed, the way all moments do, and the {hero} began.

It was not perfect. Of course it was not perfect. There was a wobble early that sent the {hero}'s heart up into their throat, and a stretch in the middle that was clumsier than anything the {hero} had ever done in secret practice. But it was happening — really, actually happening — and the {hero} was inside it at last instead of watching from the safe far edge of the ground.

And somewhere in the middle of the imperfect, ungainly, entirely real attempt, the {hero} felt the strangest thing: the waiting, which had felt so heavy for so long, simply lifted. It did not matter anymore whether this turn was good. It only mattered that it was true.

There would be other turns, and some would be better and some worse, but none of them could ever be the first. The first could only be given once, and only to the version of you brave enough to begin before feeling ready.

When it was over, the {hero} stood there breathing hard, a little stunned, a lopsided grin arriving without permission. It had been messy. It had also been the best thing the {hero} had done all season, precisely because it had cost something to begin.

{companion_name} came over, unhurried. "Well?"

"It was a mess," the {hero} said, and laughed. "And I would do it again right now."

"That," said {companion_name}, "is what the other side of starting feels like. You were never going to find it in the waiting. It only lives here, after the first ungraceful step."

The {hero} looked out over {setting}, where the last of the honey light was giving way to a deep and quiet blue, and thought about tomorrow, and the turn they would take then — not because they would finally be ready, but because ready had turned out to be the wrong thing to wait for all along.

{refrain}.`, scriptTemplate: `There was a thing {child_name} had wanted to do for as long as anyone could remember. In {setting}, on ordinary evenings, people gathered at the open ground and took turns trying it — the big thing, the one that looked like flying when it went well and like falling when it did not. Nobody made you go. You simply stepped forward when you felt like it, and the others made room.

{child_name} felt like it constantly. {child_name} also never stepped forward.

This was the private contradiction {child_name} carried around, along with the {object_motif}, which went everywhere in a pocket like a small solid promise. On the outside, {child_name} looked patient, even a little above it all, the sort of person who was simply biding their time. On the inside was something more tangled: a plan so careful and so endless that it had quietly become a cage.

The plan went like this. Before stepping forward, {child_name} would get good enough that stepping forward could not go wrong. Not mostly good — completely good. The kind of good that left no room for a wobble, a stumble, a moment of looking foolish. Then, and only then, when the whole thing was polished and certain, {child_name} would take a turn, and it would be perfect, and everyone would see that the waiting had been worth it.

It was a beautiful plan. It had exactly one flaw, which was that the finish line kept moving.

Every time {child_name} got close to good enough, the definition of good enough crept a little further away. On one day it was: I will go when I stop shaking. By the time the shaking eased, it had become: I will go when I never make a single mistake in practice. And when even that nearly happened, some new and finer flaw appeared to be fixed first, because a mind that is looking for reasons to wait will always, always find one. {child_name} was not lazy. That was the strange part. {child_name} worked harder than almost anyone. But all that work poured into a bucket with a hole in the bottom, and the bucket was called not yet.

Meanwhile the evenings went by, and {child_name} watched other people do the imperfect, ordinary, marvellous thing of trying. A small one stepped forward, shook like a leaf, got it wrong, and came back grinning as if being wrong had cost nothing at all. An older one who was genuinely skilled misjudged a turn, tumbled, and simply stood up and laughed. {child_name} began to notice, with a slow and uncomfortable clarity, that nobody out there was finished either. They were all unsure. They had all just decided that unsure was allowed.

One evening, when the light over {setting} had gone the colour of dark honey, {companion_name} sat down on the ground beside {child_name}, close but not crowding, and for a while said nothing at all.

"You are here every night," {companion_name} said finally. "I have started to think of this spot as yours. Which is strange, because I have never once seen you take a turn."

"I am getting ready," {child_name} said. It was the sentence {child_name} had said, in one form or another, for a very long time.

"Ready for what, exactly?" {companion_name} asked. Not sharp. Just curious, the way someone is curious about a knot they think they can help untie. "What does ready look like, when it finally arrives?"

{child_name} started to answer and found, to their surprise, that there was no answer there. Ready had always been a feeling somewhere up ahead, a warm certainty that would arrive one day and hand over permission. But when {child_name} reached for it and tried to describe it, it dissolved, because it had never been real. It was a horizon. You could walk toward it forever and never once stand on it.

"I do not think it looks like anything," {child_name} said slowly. "I think I have been waiting for something that was never going to come."

{companion_name} nodded, as if this were the most ordinary and forgivable mistake in the world. "That is the trap, and it is a clever one, because it wears the mask of being careful. It tells you that waiting is the responsible choice, when really it is just fear in tidy clothes. Nobody out there is finished. They are unsure and they go anyway, and the going is the only thing that ever turns unsure into able. You do not have to be finished to begin. In truth, you cannot begin any other way."

{child_name} sat with that. It did not feel like a scolding. It felt like a window opening in a room that had been closed a long time. For the first time, {child_name} let themselves see the shape of all the evenings spent on this exact patch of ground, watching, arranging reasons, keeping perfectly safe and perfectly still. It had felt like preparation. From here it looked a great deal more like hiding, and the difference was not comfortable to sit with.

"But if I go now," {child_name} said, "it will not be perfect. People will see it not be perfect."

"Yes," {companion_name} agreed, gently. "They will see a beginner being a beginner. That is not a disaster. That is the bravest, most ordinary thing there is. A perfect turn you never take is worth nothing at all. A crooked turn you actually take is worth more than a whole season of watching."

Out on the open ground, the evening's turns were winding down. There was time for one or two more. {child_name} felt the familiar surge of the old feeling — the tightening, the excellent and convincing reasons to stay seated, the voice that whispered tomorrow, when you are better. But this time {child_name} could see the voice for what it was. Not a guardian. A cage.

{child_name} took the {object_motif} out of their pocket and closed one hand around it, not because it made them ready, but because it was familiar, and sometimes one familiar thing is enough to carry into an unfamiliar moment.

"I am still nervous," {child_name} said, standing up. "I am not ready."

"I would not believe you if you said otherwise," said {companion_name}, with a small, warm smile. "Go on. Bring the nervous with you. It is allowed to come."

So {child_name} walked out across the open ground on legs that did not feel entirely their own. A few people noticed and made room, the way they always did, without any fuss. {child_name} reached the spot where you begin, and for one last long moment wished for more time, more practice, one more season of getting ready.

Then the moment passed, the way all moments do, and {child_name} began.

It was not perfect. Of course it was not perfect. There was a wobble early that sent {child_name}'s heart up into their throat, and a stretch in the middle that was clumsier than anything {child_name} had ever done in secret practice. But it was happening — really, actually happening — and {child_name} was inside it at last instead of watching from the safe far edge of the ground.

And somewhere in the middle of the imperfect, ungainly, entirely real attempt, {child_name} felt the strangest thing: the waiting, which had felt so heavy for so long, simply lifted. It did not matter anymore whether this turn was good. It only mattered that it was true.

There would be other turns, and some would be better and some worse, but none of them could ever be the first. The first could only be given once, and only to the version of you brave enough to begin before feeling ready.

When it was over, {child_name} stood there breathing hard, a little stunned, a lopsided grin arriving without permission. It had been messy. It had also been the best thing {child_name} had done all season, precisely because it had cost something to begin.

{companion_name} came over, unhurried. "Well?"

"It was a mess," {child_name} said, and laughed. "And I would do it again right now."

"That," said {companion_name}, "is what the other side of starting feels like. You were never going to find it in the waiting. It only lives here, after the first ungraceful step."

{child_name} looked out over {setting}, where the last of the honey light was giving way to a deep and quiet blue, and thought about tomorrow, and the turn they would take then — not because they would finally be ready, but because ready had turned out to be the wrong thing to wait for all along.

{refrain}.` },
},
    audioTemplate: `The {object_motif} glowed softly within the {hero} as they stood at the edge of something new in {setting}, waiting.

"I will try once I feel ready," the {hero} said. But ready did not come. They waited, and waited, and the feeling never quite arrived.

{companion_name} sat beside them. "May I tell you something true? No one feels completely ready. Not me. Not anyone. We begin while we still feel unsure."

"But what if I am not good enough yet?" asked the {hero}.

"You do not have to be finished to begin," said {companion_name}. "You only have to be willing. The readiness comes after you start, never before."

The {hero} felt the {object_motif} flicker — faint, but already there, already theirs.

So, still unsure, the {hero} took the first small step anyway. And the moment they did, the waiting fell away.

"I did not feel ready," they whispered, "and I did it."

{refrain}.`,
    scriptTemplate: `The {object_motif} glowed softly within {child_name} the {hero} as they stood at the edge of something new in {setting}, waiting.

"I will try once I feel ready," {child_name} said. But ready did not come. {child_name} waited, and waited, and the feeling never quite arrived.

{companion_name} sat beside them. "May I tell you something true, {child_name}? No one feels completely ready. Not me. Not anyone. We begin while we still feel unsure."

"But what if I am not good enough yet?" asked {child_name}.

"You do not have to be finished to begin," said {companion_name}. "You only have to be willing. The readiness comes after you start, never before."

{child_name} felt the {object_motif} flicker — faint, but already there, already theirs.

So, still unsure, {child_name} took the first small step anyway. And the moment they did, the waiting fell away.

"I did not feel ready," {child_name} whispered, "and I did it."

{refrain}.`,
  },

  {
    ordinal: 2, title: 'Your Brave Voice',
    concept: 'Speaking up even when it feels scary', callback: "You don't have to be ready (Level 1)", ageFloor: 4,
    summary: 'The hero has something to say but feels too small to say it. Their companion helps them find their brave voice — quiet is fine, what matters is that it is theirs. It builds on Level 1: you can speak before you feel ready.',
    teachingNote: 'Using your voice — even quietly — is a daily act of confidence; a child who practises it learns their thoughts are worth sharing.',
    learningBeat: 'That is your brave voice',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} had one small thing to say.

It was a good thing. A kind thing. But it felt too big for such a little mouth.

The {hero} lived in {setting}. Today the {hero} wanted to ask a bigger kid to play. The words sat inside. They would not come out.

{companion_name} sat close by. {companion_name} was soft and calm.

The {hero} tried to speak. The mouth opened wide. But nothing came out. The {hero} looked down at the {object_motif} in one small hand.

"My words are stuck," the {hero} said.

{companion_name} gave a gentle smile. "A quiet voice still works. You do not have to be loud. That is your brave voice."

The {hero} took a slow breath. In. And out.

The bigger kid was near. The {hero} held the {object_motif} tight. The {hero} felt very small. But small is okay.

The {hero} thought and thought. What if the words came out wrong? What if the whisper was too soft to hear? The {hero} looked at {companion_name}. {companion_name} gave a slow, warm nod.

"Try," {companion_name} said. "A little try is plenty."

The {hero} leaned close. The {hero} whispered. "Can I play too?"

It was a tiny whisper. Soft as a feather. But it was out. It was said at last.

The bigger kid turned around. The bigger kid smiled big. "Yes! Come and play!"

The {hero} felt light and glad. The stuck thing was all gone now.

{companion_name} did a happy little hop. "You said it. Soft and true and yours."

The {hero} played and played and played. They ran and laughed together. The {hero} was so happy. The tiny whisper had worked.

Soon {setting} grew cozy and dim. The {hero} yawned a big sleepy yawn. The {object_motif} sat right nearby.

The {hero} was not loud today. But the {hero} was brave. The words came out at last.

The {hero} snuggled down warm. Tomorrow there might be more words. Big ones. Small ones. The {hero} could say them slow. One at a time.

Soft. And small. And all the {hero}'s very own.

{refrain}.`,
    scriptTemplate: `{child_name} had one small thing to say.

It was a good thing. A kind thing. But it felt too big for such a little mouth.

{child_name} lived in {setting}. Today {child_name} wanted to ask a bigger kid to play. The words sat inside. They would not come out.

{companion_name} sat close by. {companion_name} was soft and calm.

{child_name} tried to speak. The mouth opened wide. But nothing came out. {child_name} looked down at the {object_motif} in one small hand.

"My words are stuck," {child_name} said.

{companion_name} gave a gentle smile. "A quiet voice still works. You do not have to be loud. That is your brave voice."

{child_name} took a slow breath. In. And out.

The bigger kid was near. {child_name} held the {object_motif} tight. {child_name} felt very small. But small is okay.

{child_name} thought and thought. What if the words came out wrong? What if the whisper was too soft to hear? {child_name} looked at {companion_name}. {companion_name} gave a slow, warm nod.

"Try," {companion_name} said. "A little try is plenty."

{child_name} leaned close. {child_name} whispered. "Can I play too?"

It was a tiny whisper. Soft as a feather. But it was out. It was said at last.

The bigger kid turned around. The bigger kid smiled big. "Yes! Come and play!"

{child_name} felt light and glad. The stuck thing was all gone now.

{companion_name} did a happy little hop. "You said it. Soft and true and yours."

{child_name} played and played and played. They ran and laughed together. {child_name} was so happy. The tiny whisper had worked.

Soon {setting} grew cozy and dim. {child_name} yawned a big sleepy yawn. The {object_motif} sat right nearby.

{child_name} was not loud today. But {child_name} was brave. The words came out at last.

{child_name} snuggled down warm. Tomorrow there might be more words. Big ones. Small ones. {child_name} could say them slow. One at a time.

Soft. And small. And all {child_name}'s very own.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} had been carrying a question all day, and it would not come out.

In {setting}, there was a game the older kids played every afternoon. The {hero} watched from the edge, hoping and hoping that someone would say, "Come on, you can be on our team." But nobody did. And every time the {hero} thought about asking, the words curled up small and hid.

{companion_name} noticed. {companion_name} was always good at noticing.

"You keep opening your mouth and closing it again," {companion_name} said, settling down beside the {hero}. "There is something in there, isn't there?"

The {hero} nodded and looked away. "I want to ask if I can play. But when I try, my throat goes tight. What if my voice shakes? What if it comes out too quiet and nobody hears?"

{companion_name} was quiet for a moment. Then: "A shaky voice still counts. A quiet one does, too. You don't have to sound big and sure. You just have to let the words be yours. That is your brave voice."

The {hero} turned the {object_motif} over and over in both hands, thinking about that.

"What if they say no?" the {hero} whispered.

"Then you will have asked," said {companion_name}. "And asking is the brave part. The answer isn't up to you."

"Even if it's just a whisper?" the {hero} asked.

"Especially then," said {companion_name}, and bumped the {hero} gently with a shoulder.

Across the way, the older kids were choosing sides again. The {hero}'s stomach did a slow flip. Now, or not at all.

The {hero} tucked the {object_motif} safe in one pocket and stood up. One step. Then another. Each step across {setting} felt longer than the last. A bigger kid looked over, waiting. The {hero}'s hands felt cold. The whole team seemed to be watching now, though really it was only one kid, only for a second.

The {hero} opened both hands, took a breath, and let the words go.

"Can I play too?"

It came out soft — softer than the {hero} meant. For one long second, nothing happened, and the {hero} was sure the whisper had been too small.

Then the bigger kid grinned. "Sure! We needed one more. You're with us."

Just like that, the tight feeling let go. The {hero} breathed all the way down to the toes. The words had been quiet, and they had worked anyway.

The game was fast and silly and full of laughing. The {hero} ran and called out and forgot, for whole minutes at a time, that speaking up had ever felt hard at all. Once, the {hero} even shouted a plan across {setting}, loud and clear, and was surprised how easy the words felt when they were about a game.

When the sky over {setting} began to soften into evening, {companion_name} found the {hero} resting, cheeks warm, out of breath.

"You did the thing you were scared of," {companion_name} said, sitting close.

"I almost didn't," the {hero} admitted. "It was so quiet. I nearly took it back."

"But you didn't take it back. You let it out. That took real nerve."

The {hero} pulled the {object_motif} back out of the pocket and held it, thinking about the whole day: the watching, the waiting, the tiny whisper that turned out to be big enough. It had not felt brave in the moment. It had felt like almost-not-doing-it, right up until it was done.

"I didn't feel ready," the {hero} said slowly.

{companion_name} smiled. "You don't have to be ready. You just have to begin."

The evening settled soft and blue around them. Somewhere the older kids were still laughing, and tomorrow there would be more games, more edges to step off, more questions waiting to be asked. The {hero} yawned, warm all the way through, and decided that a shaky whisper was a fine place to start.

{refrain}.`,
    scriptTemplate: `{child_name} had been carrying a question all day, and it would not come out.

In {setting}, there was a game the older kids played every afternoon. {child_name} watched from the edge, hoping and hoping that someone would say, "Come on, you can be on our team." But nobody did. And every time {child_name} thought about asking, the words curled up small and hid.

{companion_name} noticed. {companion_name} was always good at noticing.

"You keep opening your mouth and closing it again," {companion_name} said, settling down beside {child_name}. "There is something in there, isn't there?"

{child_name} nodded and looked away. "I want to ask if I can play. But when I try, my throat goes tight. What if my voice shakes? What if it comes out too quiet and nobody hears?"

{companion_name} was quiet for a moment. Then: "A shaky voice still counts. A quiet one does, too. You don't have to sound big and sure. You just have to let the words be yours. That is your brave voice."

{child_name} turned the {object_motif} over and over in both hands, thinking about that.

"What if they say no?" {child_name} whispered.

"Then you will have asked," said {companion_name}. "And asking is the brave part. The answer isn't up to you."

"Even if it's just a whisper?" {child_name} asked.

"Especially then," said {companion_name}, and bumped {child_name} gently with a shoulder.

Across the way, the older kids were choosing sides again. {child_name}'s stomach did a slow flip. Now, or not at all.

{child_name} tucked the {object_motif} safe in one pocket and stood up. One step. Then another. Each step across {setting} felt longer than the last. A bigger kid looked over, waiting. {child_name}'s hands felt cold. The whole team seemed to be watching now, though really it was only one kid, only for a second.

{child_name} opened both hands, took a breath, and let the words go.

"Can I play too?"

It came out soft — softer than {child_name} meant. For one long second, nothing happened, and {child_name} was sure the whisper had been too small.

Then the bigger kid grinned. "Sure! We needed one more. You're with us."

Just like that, the tight feeling let go. {child_name} breathed all the way down to the toes. The words had been quiet, and they had worked anyway.

The game was fast and silly and full of laughing. {child_name} ran and called out and forgot, for whole minutes at a time, that speaking up had ever felt hard at all. Once, {child_name} even shouted a plan across {setting}, loud and clear, and was surprised how easy the words felt when they were about a game.

When the sky over {setting} began to soften into evening, {companion_name} found {child_name} resting, cheeks warm, out of breath.

"You did the thing you were scared of," {companion_name} said, sitting close.

"I almost didn't," {child_name} admitted. "It was so quiet. I nearly took it back."

"But you didn't take it back. You let it out. That took real nerve."

{child_name} pulled the {object_motif} back out of the pocket and held it, thinking about the whole day: the watching, the waiting, the tiny whisper that turned out to be big enough. It had not felt brave in the moment. It had felt like almost-not-doing-it, right up until it was done.

"I didn't feel ready," {child_name} said slowly.

{companion_name} smiled. "You don't have to be ready. You just have to begin."

The evening settled soft and blue around them. Somewhere the older kids were still laughing, and tomorrow there would be more games, more edges to step off, more questions waiting to be asked. {child_name} yawned, warm all the way through, and decided that a shaky whisper was a fine place to start.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `For three days the {hero} had known something that needed saying, and for three days the words had stayed stuck behind teeth.

It was like this. Every evening in {setting}, a group of kids gathered to build a raft-bridge across the narrow channel, and every evening they stacked it the same way — tall and proud and wobbling. The {hero} had watched it lean a little further each night. The {hero} knew, the way you sometimes just know, that if they set the widest pieces at the bottom instead of the top, the whole thing would hold. But knowing a thing and saying it out loud in front of everyone were two different countries, and the {hero} did not know the road between them.

Twice already the {hero} had come close. Last night the words had climbed all the way up the {hero}'s throat and then slid back down when a bigger kid laughed at something else entirely. The laugh hadn't even been about the {hero}, but it was enough to seal the sentence shut.

"You've got that look again," said {companion_name}, appearing at the {hero}'s elbow. "Like you swallowed a whole sentence."

The {hero} managed a small laugh. "I do have a sentence. I just can't get it out. They're all so sure of themselves, and I'm — I'm the newest one here. What if I say it and I'm wrong? What if my voice cracks and everyone looks?"

{companion_name} sat down on the warm ground and patted the spot alongside. The {hero} sat.

"Being new doesn't make you wrong," {companion_name} said. "And you don't have to say it in a big booming way. You could say it in the smallest voice you own. Loud isn't the thing that matters. What matters is that the words are true and they're yours. That is your brave voice."

The {hero} pressed the {object_motif} between both palms and stared at the leaning bridge. "What if they don't listen?"

"They might not," said {companion_name}, honest as ever. "But you'll have said the true thing. That part is yours to do. The listening is theirs."

Over at the channel, a shout went up — the older kids were laying the widest boards on top again, just like every night. A couple of kids steadied it with their hands, laughing, daring it to fall. The bridge gave a slow, unhappy creak. The {hero}'s pulse ticked hard in both ears. It was now or it was never.

The {hero} stood, walked closer, and stopped at the edge of the group. For a second no words came at all. The {hero} thought about turning around. Instead, the {hero} looked at the wide boards on top, and the thin ones underneath, and finally said it — quietly, almost too quietly.

"The big pieces should go on the bottom."

Nobody heard. The building went on. Heat crawled up the {hero}'s neck, and every instinct said to slip away and pretend it had never happened.

But the {hero} planted both feet, took one more breath, and tried again — still soft, only a little steadier. The words wobbled but they came.

"Put the wide ones at the bottom. It'll hold if the wide ones are at the bottom."

This time a girl near the front turned. "Wait — say that again?"

So the {hero} did, a third time, and the words came easier now that someone was actually looking. The girl studied the wobbling stack, then the {hero}, then nodded slowly. "Huh. Try it," she called to the others. "Wide ones on the bottom." A boy shrugged and moved a board. Then another followed. Doubt turned into doing, the way it does when one person finally moves first.

They rebuilt it. Hands moved, boards shifted, and the leaning tower became a low, broad, steady bridge that did not creak at all. A kid ran across it and back, arms out, and it held him easy. The channel water moved quiet underneath, and the bridge didn't so much as shiver. Someone said, "Whose idea was that?" and the girl pointed at the {hero}, and a couple of the older ones said "nice" in the offhand way that, from older kids, means quite a lot.

The {hero} didn't say much after that. There wasn't a need to. The bridge said it.

Later, when {setting} had gone quiet and lavender at the edges, {companion_name} found the {hero} sitting by the finished bridge, turning the {object_motif} slowly in one hand.

"You said it three times," {companion_name} noted, settling close.

"The first two times barely counted," the {hero} said. "Nobody even heard."

"You heard. And you kept going. That's the whole trick — the first try being small doesn't mean you stop." {companion_name} nudged the {hero}. "You didn't feel ready. You went anyway."

The {hero} thought about that leaning bridge, and the soft cracked words, and how the true thing had been true whether or not anyone listened at first.

"It didn't feel brave," the {hero} admitted. "My voice was so shaky."

"Shaky and brave are the same thing wearing different coats," said {companion_name}.

"Mine wasn't much of a voice tonight," the {hero} said. "It was, though," said {companion_name}. "It was the whole thing."

The {hero} smiled and leaned back. The bridge stretched low and steady across the dark water, and tomorrow there would be other things worth saying, other times the words might stick. That was all right. The {hero} knew the road a little better now.

{refrain}.`,
    scriptTemplate: `For three days {child_name} had known something that needed saying, and for three days the words had stayed stuck behind teeth.

It was like this. Every evening in {setting}, a group of kids gathered to build a raft-bridge across the narrow channel, and every evening they stacked it the same way — tall and proud and wobbling. {child_name} had watched it lean a little further each night. {child_name} knew, the way you sometimes just know, that if they set the widest pieces at the bottom instead of the top, the whole thing would hold. But knowing a thing and saying it out loud in front of everyone were two different countries, and {child_name} did not know the road between them.

Twice already {child_name} had come close. Last night the words had climbed all the way up {child_name}'s throat and then slid back down when a bigger kid laughed at something else entirely. The laugh hadn't even been about {child_name}, but it was enough to seal the sentence shut.

"You've got that look again," said {companion_name}, appearing at {child_name}'s elbow. "Like you swallowed a whole sentence."

{child_name} managed a small laugh. "I do have a sentence. I just can't get it out. They're all so sure of themselves, and I'm — I'm the newest one here. What if I say it and I'm wrong? What if my voice cracks and everyone looks?"

{companion_name} sat down on the warm ground and patted the spot alongside. {child_name} sat.

"Being new doesn't make you wrong," {companion_name} said. "And you don't have to say it in a big booming way. You could say it in the smallest voice you own. Loud isn't the thing that matters. What matters is that the words are true and they're yours. That is your brave voice."

{child_name} pressed the {object_motif} between both palms and stared at the leaning bridge. "What if they don't listen?"

"They might not," said {companion_name}, honest as ever. "But you'll have said the true thing. That part is yours to do. The listening is theirs."

Over at the channel, a shout went up — the older kids were laying the widest boards on top again, just like every night. A couple of kids steadied it with their hands, laughing, daring it to fall. The bridge gave a slow, unhappy creak. {child_name}'s pulse ticked hard in both ears. It was now or it was never.

{child_name} stood, walked closer, and stopped at the edge of the group. For a second no words came at all. {child_name} thought about turning around. Instead, {child_name} looked at the wide boards on top, and the thin ones underneath, and finally said it — quietly, almost too quietly.

"The big pieces should go on the bottom."

Nobody heard. The building went on. Heat crawled up {child_name}'s neck, and every instinct said to slip away and pretend it had never happened.

But {child_name} planted both feet, took one more breath, and tried again — still soft, only a little steadier. The words wobbled but they came.

"Put the wide ones at the bottom. It'll hold if the wide ones are at the bottom."

This time a girl near the front turned. "Wait — say that again?"

So {child_name} did, a third time, and the words came easier now that someone was actually looking. The girl studied the wobbling stack, then {child_name}, then nodded slowly. "Huh. Try it," she called to the others. "Wide ones on the bottom." A boy shrugged and moved a board. Then another followed. Doubt turned into doing, the way it does when one person finally moves first.

They rebuilt it. Hands moved, boards shifted, and the leaning tower became a low, broad, steady bridge that did not creak at all. A kid ran across it and back, arms out, and it held him easy. The channel water moved quiet underneath, and the bridge didn't so much as shiver. Someone said, "Whose idea was that?" and the girl pointed at {child_name}, and a couple of the older ones said "nice" in the offhand way that, from older kids, means quite a lot.

{child_name} didn't say much after that. There wasn't a need to. The bridge said it.

Later, when {setting} had gone quiet and lavender at the edges, {companion_name} found {child_name} sitting by the finished bridge, turning the {object_motif} slowly in one hand.

"You said it three times," {companion_name} noted, settling close.

"The first two times barely counted," {child_name} said. "Nobody even heard."

"You heard. And you kept going. That's the whole trick — the first try being small doesn't mean you stop." {companion_name} nudged {child_name}. "You didn't feel ready. You went anyway."

{child_name} thought about that leaning bridge, and the soft cracked words, and how the true thing had been true whether or not anyone listened at first.

"It didn't feel brave," {child_name} admitted. "My voice was so shaky."

"Shaky and brave are the same thing wearing different coats," said {companion_name}.

"Mine wasn't much of a voice tonight," {child_name} said. "It was, though," said {companion_name}. "It was the whole thing."

{child_name} smiled and leaned back. The bridge stretched low and steady across the dark water, and tomorrow there would be other things worth saying, other times the words might stick. That was all right. {child_name} knew the road a little better now.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The decision had already half-made itself by the time the {hero} understood what was happening.

They were gathered in the usual place at the far end of {setting}, the six of them who went out exploring together, and someone had started talking about tomorrow. Tomorrow was the long climb to the ridge, the big one they'd been planning for weeks. And somewhere in the easy back-and-forth, without anyone quite deciding it out loud, a shape had formed: they would go without the youngest of them. Too slow, someone said. Holds everyone up. Nods went around the circle like a passed cup, and the {hero} felt their own head start to nod along with the rest, because that was what heads did in a circle — they agreed.

But it wasn't fair. The {hero} knew it wasn't fair, knew it the way you know a wrong note in a song you love. The youngest wasn't slow so much as careful, and careful had counted for something the day the river came up fast and it was the youngest who'd spotted the safe crossing while everyone else stood arguing. Nobody in the circle seemed to remember that tonight. Or they remembered and had decided it didn't matter. Either way, the true thing was sitting right there in the {hero}'s chest, and the {hero} was letting the circle carry it off.

The words to fix it were simple. That's the strange part — they weren't hard words. It's not fair, and here's why. Six of them, one sentence. But the sentence would land in the middle of all that easy agreement like a stone in still water, and everyone would turn, and the {hero} would have to be the one who broke the nice smooth surface of everybody-agreeing. The thought of all those faces swinging around made something in the {hero}'s stomach fold in on itself.

The {hero} slipped a hand into a pocket and closed it around the {object_motif}, the way of doing when things got difficult. It didn't make the fear go anywhere. It just gave the fear something to press against.

{companion_name} was sitting a little apart from the group, and had been watching the {hero}'s face the whole time — the {hero} could feel it. When the {hero} finally glanced over, {companion_name} didn't say anything at first. Just raised an eyebrow, a small question: well?

The {hero} gave the tiniest shake of the head. I can't.

{companion_name} rose, crossed the few steps over, and crouched beside the {hero} so their voices could stay under the noise of the others.

"You've gone somewhere behind your eyes," {companion_name} said quietly. "What is it?"

"They're going to leave him out," the {hero} whispered. "And it's wrong, and I know it's wrong, and everyone's just — agreeing. If I say something now, they'll all look at me. I'll get it tangled. My voice will do the shaky thing. And then it'll be worse, because I'll have made it into a whole moment for nothing."

{companion_name} considered this seriously, the way {companion_name} always took a real worry as real.

"It might come out shaky," {companion_name} agreed. "It probably will. You're nervous, and your voice tells the truth about that. But a shaky voice can still say a true thing. The wobble doesn't cancel the words. You don't have to sound certain, and you don't have to be loud enough to fill the whole clearing. You only have to say it so it's out of you and into the air. Say it small, if small is what you've got. That is your brave voice."

The {hero} looked at the circle. The talk had moved on, already treating the decision as settled, and that was somehow the worst part — how quickly a wrong thing could turn into just-the-plan if nobody stood in its way.

"What if they don't change their minds?" the {hero} asked.

"They might not," said {companion_name}. "You don't get to decide that part. All you get to decide is whether the true thing gets said or swallowed. One of those you can live with easily. The other one sits in you for a long time."

The {hero} knew which one {companion_name} meant. The {hero} could already feel the shape of the swallowed version — how it would ride home in the chest, heavy and quiet, and be there again tomorrow on the ridge with an empty space where the youngest should have been.

That was the thing nobody warned you about — that staying quiet wasn't actually the safe choice. It only looked safe from the outside. On the inside it cost something too, just slower, in a currency you paid later.

So the {hero} stood up.

It was not a grand standing-up. The knees were unsteady and the {object_motif} stayed clenched in one hand and, for a moment, the {hero} honestly thought no sound would come out at all — that the mouth would just open onto silence and everyone would wait and it would be unbearable. Two of the others glanced over. Then a third.

"I don't think we should leave him behind," the {hero} said.

It came out quiet. Quieter than the talking had been, so that one of the older kids said "What?" — not unkindly, just not hearing. And there it was, the exact moment the {hero} had dreaded: the chance to shrink, to say never mind, to fold the sentence back up and let the circle close over it.

The {hero}'s heart was going hard. But the words were already halfway into the world now, and pulling them back felt worse than pushing them forward. So the {hero} breathed once and said it again — still not loud, but clear enough this time to reach across the circle.

"I don't think we should leave him out. He's not slow, he's careful. And when the river came up, he was the one who found us the way across while the rest of us were still arguing. That counts. It should count."

The clearing went quiet in a different way than before — not the smooth quiet of agreement, but the uneven, thinking kind. The {hero} made themselves keep looking up instead of down, even though every part of the {hero} wanted to study the ground.

For a long, awful few seconds, nobody said anything.

Then one of the older kids let out a breath and said, "Yeah. Okay. That's — yeah, you're right, actually. I forgot about the river." And another nodded, slower, and the shape of the whole circle shifted, the way a current shifts when one stone finally holds. It wasn't dramatic. Nobody cheered. They just started, quietly, planning a tomorrow with all six of them in it.

The {hero} sat back down with legs that felt like water and a strange bright ringing in both ears, and realized the shaky voice had done the entire job — not in spite of being quiet, but somehow without the quiet mattering at all.

Across the circle, the youngest didn't even know yet what had almost happened, and the {hero} decided he never needed to. Some things you fix quietly and leave fixed.

Later, when the others had drifted off and {setting} had folded itself into the deep blue of proper night, {companion_name} settled beside the {hero} at the clearing's edge.

"That took some nerve," {companion_name} said.

"It didn't feel like nerve," the {hero} said honestly, turning the {object_motif} over in the dark. "It felt like being scared and talking at the same time. My voice completely shook."

"That's what nerve is, mostly," said {companion_name}. "Not the absence of the shake. The talking anyway."

The {hero} thought about the moment before standing — the certainty that no sound would come, and then the sound coming anyway, wobbling and small and true. It hadn't required feeling ready. There hadn't been a single second, start to finish, where the {hero} had felt ready. The readiness, it turned out, was never going to arrive first. You went, and then you found out you could. It was the same thing the {hero} had begun to learn before, only truer now: readiness came after the speaking, not before it.

"I almost didn't," the {hero} admitted.

"But almost isn't what happened," said {companion_name}. "What happened is you did."

The {hero} leaned back against the cool ground and let the day settle. Tomorrow there would be a ridge to climb, all six of them, and some other week there would be some other true thing that stuck in the throat and had to be coaxed out shaking. The {hero} would probably never love the feeling. But the {hero} knew now, in a way that would stay, that the feeling wasn't a wall. It was just the doorway, and the doorway could be walked through quietly.

{refrain}.`,
    scriptTemplate: `The decision had already half-made itself by the time {child_name} understood what was happening.

They were gathered in the usual place at the far end of {setting}, the six of them who went out exploring together, and someone had started talking about tomorrow. Tomorrow was the long climb to the ridge, the big one they'd been planning for weeks. And somewhere in the easy back-and-forth, without anyone quite deciding it out loud, a shape had formed: they would go without the youngest of them. Too slow, someone said. Holds everyone up. Nods went around the circle like a passed cup, and {child_name} felt their own head start to nod along with the rest, because that was what heads did in a circle — they agreed.

But it wasn't fair. {child_name} knew it wasn't fair, knew it the way you know a wrong note in a song you love. The youngest wasn't slow so much as careful, and careful had counted for something the day the river came up fast and it was the youngest who'd spotted the safe crossing while everyone else stood arguing. Nobody in the circle seemed to remember that tonight. Or they remembered and had decided it didn't matter. Either way, the true thing was sitting right there in {child_name}'s chest, and {child_name} was letting the circle carry it off.

The words to fix it were simple. That's the strange part — they weren't hard words. It's not fair, and here's why. Six of them, one sentence. But the sentence would land in the middle of all that easy agreement like a stone in still water, and everyone would turn, and {child_name} would have to be the one who broke the nice smooth surface of everybody-agreeing. The thought of all those faces swinging around made something in {child_name}'s stomach fold in on itself.

{child_name} slipped a hand into a pocket and closed it around the {object_motif}, the way of doing when things got difficult. It didn't make the fear go anywhere. It just gave the fear something to press against.

{companion_name} was sitting a little apart from the group, and had been watching {child_name}'s face the whole time — {child_name} could feel it. When {child_name} finally glanced over, {companion_name} didn't say anything at first. Just raised an eyebrow, a small question: well?

{child_name} gave the tiniest shake of the head. I can't.

{companion_name} rose, crossed the few steps over, and crouched beside {child_name} so their voices could stay under the noise of the others.

"You've gone somewhere behind your eyes," {companion_name} said quietly. "What is it?"

"They're going to leave him out," {child_name} whispered. "And it's wrong, and I know it's wrong, and everyone's just — agreeing. If I say something now, they'll all look at me. I'll get it tangled. My voice will do the shaky thing. And then it'll be worse, because I'll have made it into a whole moment for nothing."

{companion_name} considered this seriously, the way {companion_name} always took a real worry as real.

"It might come out shaky," {companion_name} agreed. "It probably will. You're nervous, and your voice tells the truth about that. But a shaky voice can still say a true thing. The wobble doesn't cancel the words. You don't have to sound certain, and you don't have to be loud enough to fill the whole clearing. You only have to say it so it's out of you and into the air. Say it small, if small is what you've got. That is your brave voice."

{child_name} looked at the circle. The talk had moved on, already treating the decision as settled, and that was somehow the worst part — how quickly a wrong thing could turn into just-the-plan if nobody stood in its way.

"What if they don't change their minds?" {child_name} asked.

"They might not," said {companion_name}. "You don't get to decide that part. All you get to decide is whether the true thing gets said or swallowed. One of those you can live with easily. The other one sits in you for a long time."

{child_name} knew which one {companion_name} meant. {child_name} could already feel the shape of the swallowed version — how it would ride home in the chest, heavy and quiet, and be there again tomorrow on the ridge with an empty space where the youngest should have been.

That was the thing nobody warned you about — that staying quiet wasn't actually the safe choice. It only looked safe from the outside. On the inside it cost something too, just slower, in a currency you paid later.

So {child_name} stood up.

It was not a grand standing-up. The knees were unsteady and the {object_motif} stayed clenched in one hand and, for a moment, {child_name} honestly thought no sound would come out at all — that the mouth would just open onto silence and everyone would wait and it would be unbearable. Two of the others glanced over. Then a third.

"I don't think we should leave him behind," {child_name} said.

It came out quiet. Quieter than the talking had been, so that one of the older kids said "What?" — not unkindly, just not hearing. And there it was, the exact moment {child_name} had dreaded: the chance to shrink, to say never mind, to fold the sentence back up and let the circle close over it.

{child_name}'s heart was going hard. But the words were already halfway into the world now, and pulling them back felt worse than pushing them forward. So {child_name} breathed once and said it again — still not loud, but clear enough this time to reach across the circle.

"I don't think we should leave him out. He's not slow, he's careful. And when the river came up, he was the one who found us the way across while the rest of us were still arguing. That counts. It should count."

The clearing went quiet in a different way than before — not the smooth quiet of agreement, but the uneven, thinking kind. {child_name} made themselves keep looking up instead of down, even though every part of {child_name} wanted to study the ground.

For a long, awful few seconds, nobody said anything.

Then one of the older kids let out a breath and said, "Yeah. Okay. That's — yeah, you're right, actually. I forgot about the river." And another nodded, slower, and the shape of the whole circle shifted, the way a current shifts when one stone finally holds. It wasn't dramatic. Nobody cheered. They just started, quietly, planning a tomorrow with all six of them in it.

{child_name} sat back down with legs that felt like water and a strange bright ringing in both ears, and realized the shaky voice had done the entire job — not in spite of being quiet, but somehow without the quiet mattering at all.

Across the circle, the youngest didn't even know yet what had almost happened, and {child_name} decided he never needed to. Some things you fix quietly and leave fixed.

Later, when the others had drifted off and {setting} had folded itself into the deep blue of proper night, {companion_name} settled beside {child_name} at the clearing's edge.

"That took some nerve," {companion_name} said.

"It didn't feel like nerve," {child_name} said honestly, turning the {object_motif} over in the dark. "It felt like being scared and talking at the same time. My voice completely shook."

"That's what nerve is, mostly," said {companion_name}. "Not the absence of the shake. The talking anyway."

{child_name} thought about the moment before standing — the certainty that no sound would come, and then the sound coming anyway, wobbling and small and true. It hadn't required feeling ready. There hadn't been a single second, start to finish, where {child_name} had felt ready. The readiness, it turned out, was never going to arrive first. You went, and then you found out you could. It was the same thing {child_name} had begun to learn before, only truer now: readiness came after the speaking, not before it.

"I almost didn't," {child_name} admitted.

"But almost isn't what happened," said {companion_name}. "What happened is you did."

{child_name} leaned back against the cool ground and let the day settle. Tomorrow there would be a ridge to climb, all six of them, and some other week there would be some other true thing that stuck in the throat and had to be coaxed out shaking. {child_name} would probably never love the feeling. But {child_name} knew now, in a way that would stay, that the feeling wasn't a wall. It was just the doorway, and the doorway could be walked through quietly.

{refrain}.`
  }
},
    audioTemplate: `In the hush of {setting}, the {hero} had something to say — but the words stayed stuck inside, behind a fluttering {object_motif}.

"What if it sounds silly? What if my voice shakes?" they whispered.

{companion_name} leaned in warmly. "Your voice is allowed to shake. Brave does not mean loud or perfect. It means you speak, even small, because what you think matters."

The {hero} remembered: you do not have to feel ready. So they took a breath, and let the words out — quietly, a little wobbly, but out.

And the world did not end. Someone listened. Someone nodded. The {object_motif} glowed a little steadier inside them.

"It came out shaky," said the {hero}, "but I said it."

"And it was yours," said {companion_name}. "That is your brave voice. The more you use it, the more it feels like home."

The {hero} sat taller, the small light within them warmer than before.

{refrain}.`,
    scriptTemplate: `In the hush of {setting}, {child_name} the {hero} had something to say — but the words stayed stuck inside, behind a fluttering {object_motif}.

"What if it sounds silly? What if my voice shakes?" {child_name} whispered.

{companion_name} leaned in warmly. "Your voice is allowed to shake, {child_name}. Brave does not mean loud or perfect. It means you speak, even small, because what you think matters."

{child_name} remembered: you do not have to feel ready. So {child_name} took a breath, and let the words out — quietly, a little wobbly, but out.

And the world did not end. Someone listened. Someone nodded. The {object_motif} glowed a little steadier inside them.

"It came out shaky," said {child_name}, "but I said it."

"And it was yours," said {companion_name}. "That is your brave voice. The more you use it, the more it feels like home."

{child_name} sat taller, the small light within them warmer than before.

{refrain}.`,
  },

  {
    ordinal: 3, title: 'Comparing Hurts',
    concept: 'Measuring yourself by your own path, not others', callback: "You don't have to be ready (Level 1)", ageFloor: 4,
    summary: 'The hero watches others and feels small by comparison. Their companion shows them that comparing dims your own light, and that their journey is their own. It revisits Level 1: your starting point is allowed to be just where it is.',
    teachingNote: 'Comparison is the quiet thief of confidence; learning to measure by your own progress keeps a child\'s inner light their own.',
    learningBeat: 'My path is mine',
    ageVariants: {
  '3-4': { audioTemplate: `The {hero} walked the long trail through {setting}.

Other travelers walked too. Some walked fast. Some were far, far ahead.

A bigger kid ran past. Whoosh. Soon they were a tiny dot up ahead.

The {hero} looked at the dot. Then the {hero} felt small. Very small.

"I am so slow," said the {hero}. "Everyone is ahead of me."

The {hero} stopped walking. The trail felt too long now. The {hero} looked down. Their light felt dim, like a little lamp turned low.

{companion_name} came and sat down close. {companion_name} held the {object_motif}.

"You have watched them a long time," said {companion_name}. "Long enough to forget your own feet."

"They are so fast," said the {hero}. "They are so far."

"When your eyes chase them, they stop seeing you," said {companion_name}. "Watching them makes your own light go small. But your light is for your trail. Not theirs."

The {hero} looked up.

"You do not have to be ready," said {companion_name}. "You can start right where your feet are. Right here is allowed to be your start. My path is mine."

The {hero} took a slow breath. In. Out. And one more. In. Out.

The dot on the hill did not matter now. The fast kid did not matter. Only the trail. Only the next step.

The {hero} looked down at their own two feet. Not the dot. Not the fast kid. Just the trail under the {hero}.

The {hero} took one step. Then one more step. Then one more.

Each step was the {hero}'s own step. Slow. Then not so slow.

The trail felt kind again. The {hero} saw soft green moss. The {hero} saw a little stream. It sang over the stones.

The {hero} saw a small blue flower by the path. The fast kid had run right past it. But the {hero} saw it.

"They missed this," said the {hero}. "I did not. This is my path."

{companion_name} gave the {object_motif} to the {hero}. The {hero} held the {object_motif} close. It felt warm and steady.

The sky went soft and pink over {setting}. The {hero} felt warm. The {hero} felt slow and sleepy and glad.

The {hero} did not look for the dot now. The {hero} looked at the trail. The {hero}'s own trail.

Step. Step. Step.

{refrain}.`, scriptTemplate: `{child_name} walked the long trail through {setting}.

Other travelers walked too. Some walked fast. Some were far, far ahead.

A bigger kid ran past. Whoosh. Soon they were a tiny dot up ahead.

{child_name} looked at the dot. Then {child_name} felt small. Very small.

"I am so slow," said {child_name}. "Everyone is ahead of me."

{child_name} stopped walking. The trail felt too long now. {child_name} looked down. Their light felt dim, like a little lamp turned low.

{companion_name} came and sat down close. {companion_name} held the {object_motif}.

"You have watched them a long time," said {companion_name}. "Long enough to forget your own feet."

"They are so fast," said {child_name}. "They are so far."

"When your eyes chase them, they stop seeing you," said {companion_name}. "Watching them makes your own light go small. But your light is for your trail. Not theirs."

{child_name} looked up.

"You do not have to be ready," said {companion_name}. "You can start right where your feet are. Right here is allowed to be your start. My path is mine."

{child_name} took a slow breath. In. Out. And one more. In. Out.

The dot on the hill did not matter now. The fast kid did not matter. Only the trail. Only the next step.

{child_name} looked down at their own two feet. Not the dot. Not the fast kid. Just the trail under {child_name}.

{child_name} took one step. Then one more step. Then one more.

Each step was {child_name}'s own step. Slow. Then not so slow.

The trail felt kind again. {child_name} saw soft green moss. {child_name} saw a little stream. It sang over the stones.

{child_name} saw a small blue flower by the path. The fast kid had run right past it. But {child_name} saw it.

"They missed this," said {child_name}. "I did not. This is my path."

{companion_name} gave the {object_motif} to {child_name}. {child_name} held the {object_motif} close. It felt warm and steady.

The sky went soft and pink over {setting}. {child_name} felt warm. {child_name} felt slow and sleepy and glad.

{child_name} did not look for the dot now. {child_name} looked at the trail. {child_name}'s own trail.

Step. Step. Step.

{refrain}.` },
  '5-6': { audioTemplate: `The {hero} was walking the long trail through {setting}, the way everyone did.

But today the {hero} kept looking at the others. A bigger kid hurried past, then another, and soon they were far ahead, small as dots on the hill.

"Look how fast they are," the {hero} whispered. "They are so far ahead of me. I must be the slowest one on the whole trail."

The more the {hero} watched them, the smaller the {hero} felt. Their feet grew heavy. The trail, which had felt friendly this morning, now felt too long and too steep. The {hero} stopped and stared at the dots up ahead, and something inside the {hero} went dim, like a lamp turned low.

{companion_name} came up the trail and sat down on a warm rock nearby, holding the {object_motif}.

"You have been watching them for a long time," {companion_name} said gently. "Long enough to forget your own feet."

"They are ahead," said the {hero}. "They are better. Everyone is further than me."

{companion_name} was quiet for a moment. "When your eyes are always on someone else, they stop seeing you. And the more you measure yourself against them, the smaller your own light grows. But your light was never meant to shine on their trail. Only on yours."

The {hero} looked down at the path.

"Remember what you learned before," said {companion_name}. "You do not have to be ready. You are allowed to begin right where you are standing. This spot, right here, is allowed to be your beginning. My path is mine."

The {hero} sat with that for a moment. It was a strange thing to hear, because all morning the {hero} had felt sure that being behind was the same as being bad at it. But {companion_name} did not seem to think so at all.

The {hero} took a slow breath and let it out. Then the {hero} did something new. Instead of staring up the hill at the dots, the {hero} looked down at their own two feet on the trail.

One step. Then another. Then another. Each one was the {hero}'s own.

And a funny thing happened. When the {hero} stopped racing the others, the {hero} began to see the trail itself. Soft green moss. A little stream that laughed over the stones. A blue flower, tucked beside the path, that all the fast travelers had rushed right past without ever seeing.

"They missed this," the {hero} said softly, kneeling by the flower. "They were going too fast to notice it. But I saw it. This is my path, and it has its own good things along the way."

{companion_name} smiled and passed the {object_motif} into the {hero}'s hands. The {hero} held the {object_motif} close, and it felt steady and sure.

For a moment the old worry crept back. Another traveler swept by, quick and sure, and the {hero}'s eyes started to chase them up the hill again. But this time the {hero} noticed the chasing, and stopped it, the way you might gently turn a boat back toward home.

"There you go," {companion_name} said. "You do not have to follow every fast pair of feet. You only have to follow your own."

The {hero} nodded and looked back at the trail. It was easier the second time to let the dots be dots, and to let the {hero} be the {hero}.

The {hero} kept walking, slower now, but somehow lighter. There was still a long way to go, and that was fine. The trail was not a race anymore. It was just a path, the {hero}'s own path, unrolling one gentle step at a time.

The sky turned soft gold over {setting}. Travelers still moved along the trail, some fast, some slow, and that did not sting now.

"I am not behind," the {hero} said. "I am just where my own path has reached. And that is allowed to be exactly where it is."

{companion_name} nodded and walked beside the {hero}, matching the {hero}'s easy, unhurried pace, while the first stars blinked awake above the hills.

{refrain}.`, scriptTemplate: `{child_name} was walking the long trail through {setting}, the way everyone did.

But today {child_name} kept looking at the others. A bigger kid hurried past, then another, and soon they were far ahead, small as dots on the hill.

"Look how fast they are," {child_name} whispered. "They are so far ahead of me. I must be the slowest one on the whole trail."

The more {child_name} watched them, the smaller {child_name} felt. Their feet grew heavy. The trail, which had felt friendly this morning, now felt too long and too steep. {child_name} stopped and stared at the dots up ahead, and something inside {child_name} went dim, like a lamp turned low.

{companion_name} came up the trail and sat down on a warm rock nearby, holding the {object_motif}.

"You have been watching them for a long time," {companion_name} said gently. "Long enough to forget your own feet."

"They are ahead," said {child_name}. "They are better. Everyone is further than me."

{companion_name} was quiet for a moment. "When your eyes are always on someone else, they stop seeing you. And the more you measure yourself against them, the smaller your own light grows. But your light was never meant to shine on their trail. Only on yours."

{child_name} looked down at the path.

"Remember what you learned before," said {companion_name}. "You do not have to be ready. You are allowed to begin right where you are standing. This spot, right here, is allowed to be your beginning. My path is mine."

{child_name} sat with that for a moment. It was a strange thing to hear, because all morning {child_name} had felt sure that being behind was the same as being bad at it. But {companion_name} did not seem to think so at all.

{child_name} took a slow breath and let it out. Then {child_name} did something new. Instead of staring up the hill at the dots, {child_name} looked down at their own two feet on the trail.

One step. Then another. Then another. Each one was {child_name}'s own.

And a funny thing happened. When {child_name} stopped racing the others, {child_name} began to see the trail itself. Soft green moss. A little stream that laughed over the stones. A blue flower, tucked beside the path, that all the fast travelers had rushed right past without ever seeing.

"They missed this," {child_name} said softly, kneeling by the flower. "They were going too fast to notice it. But I saw it. This is my path, and it has its own good things along the way."

{companion_name} smiled and passed the {object_motif} into {child_name}'s hands. {child_name} held the {object_motif} close, and it felt steady and sure.

For a moment the old worry crept back. Another traveler swept by, quick and sure, and {child_name}'s eyes started to chase them up the hill again. But this time {child_name} noticed the chasing, and stopped it, the way you might gently turn a boat back toward home.

"There you go," {companion_name} said. "You do not have to follow every fast pair of feet. You only have to follow your own."

{child_name} nodded and looked back at the trail. It was easier the second time to let the dots be dots, and to let {child_name} be {child_name}.

{child_name} kept walking, slower now, but somehow lighter. There was still a long way to go, and that was fine. The trail was not a race anymore. It was just a path, {child_name}'s own path, unrolling one gentle step at a time.

The sky turned soft gold over {setting}. Travelers still moved along the trail, some fast, some slow, and that did not sting now.

"I am not behind," {child_name} said. "I am just where my own path has reached. And that is allowed to be exactly where it is."

{companion_name} nodded and walked beside {child_name}, matching {child_name}'s easy, unhurried pace, while the first stars blinked awake above the hills.

{refrain}.` },
  '7-8': { audioTemplate: `The trail through {setting} was the kind that everyone walked at their own speed, and for a long while the {hero} had liked it that way. But this morning something had shifted. The {hero} could not stop watching the others.

There was a traveler up ahead, not much bigger than the {hero}, who moved along the trail like it was nothing at all. Step, step, over the roots, around the bend, gone. Then another traveler passed, and another, until the {hero} felt like the only one still standing near the start while everyone else shrank into small dots far up the hill.

"I have been walking just as long as them," the {hero} muttered, "and look how far ahead they are. They must be so much better than me."

The {hero} tried to walk faster. But hurrying only made the {hero} trip and stumble, and every stumble felt like proof. The trail that had felt friendly yesterday now felt like a test the {hero} was failing. The {hero}'s shoulders curled in, and that bright, buzzy feeling of setting out in the morning drained away until the {hero} felt gray and small.

The worst part was the traveler near the {hero}'s own age, the one who had made it look so easy. The {hero} kept picturing them somewhere far ahead, not even breathing hard, and every time the picture came it pressed down a little heavier. If someone like that could fly along the trail, the {hero} thought, then there had to be something wrong with the {hero} for finding it hard.

{companion_name} found the {hero} sitting on a fallen log, chin in hands, watching the dots on the hill. {companion_name} sat down too, unhurried, turning the {object_motif} over and over in their hands.

"You have not looked at the trail in front of you for a while," {companion_name} said. "You have only looked up there."

"Because they are winning," the {hero} said. "And I am losing. Everyone is further than me."

{companion_name} thought about that. "Further along the same trail? Or further along their own?" They let the question sit. "When you spend all your time measuring yourself against them, you stop seeing yourself at all. And the harder you measure, the smaller your own light gets. That is what comparing does. It does not make you faster. It just dims you."

The {hero} frowned. "But they really are ahead."

"Ahead of you on their walk, maybe," said {companion_name}. "But you are not on their walk. You never were." {companion_name} nodded down the trail, back the way the {hero} had come. "Remember what you learned when you first set out. You do not have to be ready. Wherever your feet are is allowed to be your starting place. My path is mine."

The {hero} was quiet. It was a strange thing to hear, because for the whole morning the {hero} had been sure that being behind was the same as being bad at it.

"But what if I am just slow?" the {hero} asked.

"Then you are slow today, on this hill, with this pack on your back," {companion_name} said, and there was no sting in it. "That is not a name for who you are. It is only where your feet happen to be. Feet move. Names like slow only stick if you keep gluing them on by looking at somebody else."

"Try something," {companion_name} said, standing. "Do not look up the hill even once. Just look at the ground right in front of your own feet, and take one step."

The {hero} did. One step. It was a small thing, but it did not require beating anybody. The {hero} took another. And another. And with the dots out of sight, something unexpected happened: the {hero} began to notice the trail itself.

There was moss the color of deep green velvet on the north side of the stones, soft enough to press a hand into. There was a thin stream that slipped down through the ferns and laughed to itself as it went, cool and quick over the pebbles. And there, tucked low beside the path where a leaf leaned over it, was a single blue flower that every fast traveler had rushed straight past without ever once looking down at it.

The {hero} knelt down beside it in the fading light. "They missed this," the {hero} said, half surprised at the words. "Every one of them went straight past. They were going too fast to see it. But I saw it, because this is my part of the trail, and I am walking it at my own speed."

{companion_name} smiled and pressed the {object_motif} gently into the {hero}'s hands. It felt solid and calm to hold, and the {hero} carried it as they walked on.

The turning point was not that the {hero} suddenly became fast. The {hero} did not. The turning point was that the {hero} stopped needing to be. The trail was no longer a race with dots on a hill. It was just a path, the {hero}'s own path, unrolling one honest step at a time.

Once, near the top of a rise, the {hero} caught sight of the fast travelers again, resting far ahead, and felt the old tug to compare. But this time the {hero} recognized it, breathed once, and let the dots be dots.

"I am not behind," the {hero} said softly. "I am exactly where my own path has reached. And that is allowed to be exactly where it is."

The sky over {setting} turned the deep gold of evening, and the trail glowed with it. {companion_name} walked beside the {hero}, matching the {hero}'s unhurried pace, in no rush to be anywhere but here.

{refrain}.`, scriptTemplate: `The trail through {setting} was the kind that everyone walked at their own speed, and for a long while {child_name} had liked it that way. But this morning something had shifted. {child_name} could not stop watching the others.

There was a traveler up ahead, not much bigger than {child_name}, who moved along the trail like it was nothing at all. Step, step, over the roots, around the bend, gone. Then another traveler passed, and another, until {child_name} felt like the only one still standing near the start while everyone else shrank into small dots far up the hill.

"I have been walking just as long as them," {child_name} muttered, "and look how far ahead they are. They must be so much better than me."

{child_name} tried to walk faster. But hurrying only made {child_name} trip and stumble, and every stumble felt like proof. The trail that had felt friendly yesterday now felt like a test {child_name} was failing. {child_name}'s shoulders curled in, and that bright, buzzy feeling of setting out in the morning drained away until {child_name} felt gray and small.

The worst part was the traveler near {child_name}'s own age, the one who had made it look so easy. {child_name} kept picturing them somewhere far ahead, not even breathing hard, and every time the picture came it pressed down a little heavier. If someone like that could fly along the trail, {child_name} thought, then there had to be something wrong with {child_name} for finding it hard.

{companion_name} found {child_name} sitting on a fallen log, chin in hands, watching the dots on the hill. {companion_name} sat down too, unhurried, turning the {object_motif} over and over in their hands.

"You have not looked at the trail in front of you for a while," {companion_name} said. "You have only looked up there."

"Because they are winning," {child_name} said. "And I am losing. Everyone is further than me."

{companion_name} thought about that. "Further along the same trail? Or further along their own?" They let the question sit. "When you spend all your time measuring yourself against them, you stop seeing yourself at all. And the harder you measure, the smaller your own light gets. That is what comparing does. It does not make you faster. It just dims you."

{child_name} frowned. "But they really are ahead."

"Ahead of you on their walk, maybe," said {companion_name}. "But you are not on their walk. You never were." {companion_name} nodded down the trail, back the way {child_name} had come. "Remember what you learned when you first set out. You do not have to be ready. Wherever your feet are is allowed to be your starting place. My path is mine."

{child_name} was quiet. It was a strange thing to hear, because for the whole morning {child_name} had been sure that being behind was the same as being bad at it.

"But what if I am just slow?" {child_name} asked.

"Then you are slow today, on this hill, with this pack on your back," {companion_name} said, and there was no sting in it. "That is not a name for who you are. It is only where your feet happen to be. Feet move. Names like slow only stick if you keep gluing them on by looking at somebody else."

"Try something," {companion_name} said, standing. "Do not look up the hill even once. Just look at the ground right in front of your own feet, and take one step."

{child_name} did. One step. It was a small thing, but it did not require beating anybody. {child_name} took another. And another. And with the dots out of sight, something unexpected happened: {child_name} began to notice the trail itself.

There was moss the color of deep green velvet on the north side of the stones, soft enough to press a hand into. There was a thin stream that slipped down through the ferns and laughed to itself as it went, cool and quick over the pebbles. And there, tucked low beside the path where a leaf leaned over it, was a single blue flower that every fast traveler had rushed straight past without ever once looking down at it.

{child_name} knelt down beside it in the fading light. "They missed this," {child_name} said, half surprised at the words. "Every one of them went straight past. They were going too fast to see it. But I saw it, because this is my part of the trail, and I am walking it at my own speed."

{companion_name} smiled and pressed the {object_motif} gently into {child_name}'s hands. It felt solid and calm to hold, and {child_name} carried it as they walked on.

The turning point was not that {child_name} suddenly became fast. {child_name} did not. The turning point was that {child_name} stopped needing to be. The trail was no longer a race with dots on a hill. It was just a path, {child_name}'s own path, unrolling one honest step at a time.

Once, near the top of a rise, {child_name} caught sight of the fast travelers again, resting far ahead, and felt the old tug to compare. But this time {child_name} recognized it, breathed once, and let the dots be dots.

"I am not behind," {child_name} said softly. "I am exactly where my own path has reached. And that is allowed to be exactly where it is."

The sky over {setting} turned the deep gold of evening, and the trail glowed with it. {companion_name} walked beside {child_name}, matching {child_name}'s unhurried pace, in no rush to be anywhere but here.

{refrain}.` },
  '9-11': { audioTemplate: `The long trail through {setting} had never felt like a race until the morning the {hero} started counting.

It began small, the way these things do. The {hero} noticed how far along the others were, and then could not stop noticing. Travelers of every kind moved up the winding path, and each one seemed to have some easy secret the {hero} had been left out of. The {hero} watched them shrink into distant specks near the top of the ridge and felt, for the first time, genuinely far behind.

The sharpest sting had a name, or rather a face. There was a traveler almost exactly the {hero}'s age, someone who had set out on the very same morning, from the very same bend in the trail. The {hero} had liked the idea of walking it together. But that traveler had a loose, unhurried stride that ate the miles without seeming to try, and by midday they were a small figure high on the ridge, pausing now and then to look back at the view. Every time the {hero} caught sight of them up there, something in the {hero}'s chest tightened and went dull.

We started at the same place, the {hero} thought. So the only thing this can mean is that something is wrong with me.

What made it worse was that the {hero} could not even be plainly angry about it. The fast traveler had done nothing unkind; they had simply walked their own walk. There was no one to blame, which somehow left the whole heavy feeling with nowhere to go but inward, where it pooled and settled and whispered that the fault must therefore be the {hero}'s alone.

The {hero} tried to walk faster to close the gap. It did not work the way hurrying never quite does. Rushing turned the {hero}'s feet clumsy; roots seemed to reach up on purpose, and each stumble arrived like evidence in a case the {hero} was quietly building against themselves. The trail that had felt full of promise at dawn now felt like a long, exposing test, and the {hero} was certain of the grade. By the time the light began to slant gold, the bright eagerness of the morning had thinned to something gray and folded and small.

{companion_name} came down the trail from somewhere ahead and found the {hero} sitting on a flat stone, knees drawn up, eyes fixed on the far ridge where the specks still moved. Without a word {companion_name} settled onto the stone beside the {hero}, holding the {object_motif} loosely, letting the quiet stretch out before speaking.

"You have been up on that ridge in your mind all afternoon," {companion_name} said at last. "Your body is down here, but your eyes have not come home once."

"They are so far ahead," the {hero} said, and was embarrassed by the roughness in their own voice. "We started together. The exact same place, the exact same time. And now look. It is not even close."

{companion_name} nodded slowly, as if this were a serious thing and not a small one, which the {hero} was grateful for.

"Here is what comparing does, and it is worth understanding," {companion_name} said. "When you set yourself beside another person and start measuring, you stop being able to see yourself at all. You become only the distance between you and them."

{companion_name} let the words settle before going on, turning the {object_motif} slowly in their hands. "And the harder you measure, the smaller your own light burns down, until you would swear you had never had much to begin with. It is not a true measurement. It is only a way of quietly turning your own lamp down."

The {hero} turned that over. "But the distance is real. They really are further along."

"Further along their trail," {companion_name} said. "Not yours. You keep laying your path over theirs like two maps and calling the gap between them your failure. But they are not carrying your pack, or your morning, or the particular reason your feet learned to walk the way they do. Their stride is theirs. Yours is yours."

The {hero} was silent. It was oddly hard to hear, because being behind had felt so much like a verdict, and now someone was calmly refusing to read it as one.

"What if I am just not good at this?" the {hero} asked, quieter.

"Then today, on this hill, you found it hard," {companion_name} said. "That is a true thing about today. It is not a true thing about you. We hand ourselves those big flat words, not good enough, too slow, and we glue them on by staring at somebody faster. Peel the person away and the word has nothing to stick to." {companion_name} tilted their head down the trail, back toward the bend where the {hero} had begun. "You knew this once, at the very start. You do not have to be ready before you are allowed to begin. Wherever your feet are standing is a permitted place to stand. My path is mine."

The {hero} let out a breath that had been held so long it shook a little on the way out.

"Try walking without the ridge," {companion_name} said, rising. "Do not look up even once. Only the ground in front of your own feet. One step, chosen by you, for no reason but that it is next."

So the {hero} did, though it felt almost impossible at first not to steal a glance upward, the way your tongue keeps finding a sore tooth. The {hero} kept the gaze low and near, and slowly the pull of the ridge loosened its grip.

The first step felt strangely light, because for once it did not have to beat anyone; it only had to be taken. Then another, and another, and with the specks on the ridge out of sight, the trail itself began, quietly, to reappear.

There was moss like green velvet banked along the northern faces of the stones, cool and deep and older than the trail itself. There was a thin ribbon of water threading down through the ferns, murmuring to itself as it went, catching the last of the light in little broken pieces. And there, tucked low against the edge of the path, half hidden by a leaning fern, was a single blue flower that every fast traveler had swept straight past, eyes fixed on the summit, never once glancing down at the small living thing beside their feet.

The {hero} crouched beside it. "They never saw this," the {hero} said, and it was not spoken as a small triumph over them but as something simpler and steadier. "They could not. They were going too fast, watching each other. But this is my part of the trail, at my pace, so it is mine to notice."

{companion_name} smiled and pressed the {object_motif} into the {hero}'s hands, and it sat there solid and calm, the way a true thing does.

The change, when it came, was not that the {hero} grew suddenly fast. The {hero} did not, and by evening still walked at the same honest pace as before. What changed was that the pace stopped feeling like a sentence. The trail was no longer a distance to be closed against a rival; it was simply a path, the {hero}'s own, unrolling one deliberate step at a time.

Near the crest of a rise the fast traveler came into view again, resting far ahead against the darkening sky, and the {hero} felt the old pull rise up out of habit, the reflex to measure, to shrink, to count. But this time the {hero} watched the feeling arrive, recognized it for what it was, and let it pass on through without answering it. The traveler was simply another person walking their own way home, under the same wide sky, toward some evening of their own that had nothing at all to do with the {hero}'s. That was all they had ever been, and imagining otherwise had only cost the {hero} an afternoon of their own good trail.

"I am not behind," the {hero} said, testing the words carefully and finding, a little to their own surprise, that they held. "I am exactly as far as my own path has carried me. And that is allowed to be exactly where it is."

Over {setting} the sky deepened from gold to a soft, settled blue, and the first stars came awake one by one. {companion_name} fell into step beside the {hero}, matching that unhurried pace, in no hurry to be anywhere but here, on this trail, at this quiet, unrepeatable speed.

{refrain}.`, scriptTemplate: `The long trail through {setting} had never felt like a race until the morning {child_name} started counting.

It began small, the way these things do. {child_name} noticed how far along the others were, and then could not stop noticing. Travelers of every kind moved up the winding path, and each one seemed to have some easy secret {child_name} had been left out of. {child_name} watched them shrink into distant specks near the top of the ridge and felt, for the first time, genuinely far behind.

The sharpest sting had a name, or rather a face. There was a traveler almost exactly {child_name}'s age, someone who had set out on the very same morning, from the very same bend in the trail. {child_name} had liked the idea of walking it together. But that traveler had a loose, unhurried stride that ate the miles without seeming to try, and by midday they were a small figure high on the ridge, pausing now and then to look back at the view. Every time {child_name} caught sight of them up there, something in {child_name}'s chest tightened and went dull.

We started at the same place, {child_name} thought. So the only thing this can mean is that something is wrong with me.

What made it worse was that {child_name} could not even be plainly angry about it. The fast traveler had done nothing unkind; they had simply walked their own walk. There was no one to blame, which somehow left the whole heavy feeling with nowhere to go but inward, where it pooled and settled and whispered that the fault must therefore be {child_name}'s alone.

{child_name} tried to walk faster to close the gap. It did not work the way hurrying never quite does. Rushing turned {child_name}'s feet clumsy; roots seemed to reach up on purpose, and each stumble arrived like evidence in a case {child_name} was quietly building against themselves. The trail that had felt full of promise at dawn now felt like a long, exposing test, and {child_name} was certain of the grade. By the time the light began to slant gold, the bright eagerness of the morning had thinned to something gray and folded and small.

{companion_name} came down the trail from somewhere ahead and found {child_name} sitting on a flat stone, knees drawn up, eyes fixed on the far ridge where the specks still moved. Without a word {companion_name} settled onto the stone beside {child_name}, holding the {object_motif} loosely, letting the quiet stretch out before speaking.

"You have been up on that ridge in your mind all afternoon," {companion_name} said at last. "Your body is down here, but your eyes have not come home once."

"They are so far ahead," {child_name} said, and was embarrassed by the roughness in their own voice. "We started together. The exact same place, the exact same time. And now look. It is not even close."

{companion_name} nodded slowly, as if this were a serious thing and not a small one, which {child_name} was grateful for.

"Here is what comparing does, and it is worth understanding," {companion_name} said. "When you set yourself beside another person and start measuring, you stop being able to see yourself at all. You become only the distance between you and them."

{companion_name} let the words settle before going on, turning the {object_motif} slowly in their hands. "And the harder you measure, the smaller your own light burns down, until you would swear you had never had much to begin with. It is not a true measurement. It is only a way of quietly turning your own lamp down."

{child_name} turned that over. "But the distance is real. They really are further along."

"Further along their trail," {companion_name} said. "Not yours. You keep laying your path over theirs like two maps and calling the gap between them your failure. But they are not carrying your pack, or your morning, or the particular reason your feet learned to walk the way they do. Their stride is theirs. Yours is yours."

{child_name} was silent. It was oddly hard to hear, because being behind had felt so much like a verdict, and now someone was calmly refusing to read it as one.

"What if I am just not good at this?" {child_name} asked, quieter.

"Then today, on this hill, you found it hard," {companion_name} said. "That is a true thing about today. It is not a true thing about you. We hand ourselves those big flat words, not good enough, too slow, and we glue them on by staring at somebody faster. Peel the person away and the word has nothing to stick to." {companion_name} tilted their head down the trail, back toward the bend where {child_name} had begun. "You knew this once, at the very start. You do not have to be ready before you are allowed to begin. Wherever your feet are standing is a permitted place to stand. My path is mine."

{child_name} let out a breath that had been held so long it shook a little on the way out.

"Try walking without the ridge," {companion_name} said, rising. "Do not look up even once. Only the ground in front of your own feet. One step, chosen by you, for no reason but that it is next."

So {child_name} did, though it felt almost impossible at first not to steal a glance upward, the way your tongue keeps finding a sore tooth. {child_name} kept the gaze low and near, and slowly the pull of the ridge loosened its grip.

The first step felt strangely light, because for once it did not have to beat anyone; it only had to be taken. Then another, and another, and with the specks on the ridge out of sight, the trail itself began, quietly, to reappear.

There was moss like green velvet banked along the northern faces of the stones, cool and deep and older than the trail itself. There was a thin ribbon of water threading down through the ferns, murmuring to itself as it went, catching the last of the light in little broken pieces. And there, tucked low against the edge of the path, half hidden by a leaning fern, was a single blue flower that every fast traveler had swept straight past, eyes fixed on the summit, never once glancing down at the small living thing beside their feet.

{child_name} crouched beside it. "They never saw this," {child_name} said, and it was not spoken as a small triumph over them but as something simpler and steadier. "They could not. They were going too fast, watching each other. But this is my part of the trail, at my pace, so it is mine to notice."

{companion_name} smiled and pressed the {object_motif} into {child_name}'s hands, and it sat there solid and calm, the way a true thing does.

The change, when it came, was not that {child_name} grew suddenly fast. {child_name} did not, and by evening still walked at the same honest pace as before. What changed was that the pace stopped feeling like a sentence. The trail was no longer a distance to be closed against a rival; it was simply a path, {child_name}'s own, unrolling one deliberate step at a time.

Near the crest of a rise the fast traveler came into view again, resting far ahead against the darkening sky, and {child_name} felt the old pull rise up out of habit, the reflex to measure, to shrink, to count. But this time {child_name} watched the feeling arrive, recognized it for what it was, and let it pass on through without answering it. The traveler was simply another person walking their own way home, under the same wide sky, toward some evening of their own that had nothing at all to do with {child_name}'s. That was all they had ever been, and imagining otherwise had only cost {child_name} an afternoon of their own good trail.

"I am not behind," {child_name} said, testing the words carefully and finding, a little to their own surprise, that they held. "I am exactly as far as my own path has carried me. And that is allowed to be exactly where it is."

Over {setting} the sky deepened from gold to a soft, settled blue, and the first stars came awake one by one. {companion_name} fell into step beside {child_name}, matching that unhurried pace, in no hurry to be anywhere but here, on this trail, at this quiet, unrepeatable speed.

{refrain}.` }
},
    audioTemplate: `The {hero} sat in {setting} watching others do things easily, and felt their {object_motif} dim.

"They are so much better than me," they said quietly. "Why am I so far behind?"

{companion_name} settled close. "When you measure your inside against everyone else's outside, your own light always looks smaller. But it is not. You are only seeing them at a different place on a different path."

"But they make it look so easy," said the {hero}.

"You did not see their hard parts," said {companion_name}. "Everyone has them. Compare yourself only to who you were yesterday — that is the only race that is yours."

The {hero} thought about how far they had come, all on their own, and the {object_motif} brightened again, warm and steady.

"My path is mine," they said.

"And it is a good one," said {companion_name}. "Tend your own light. It was never meant to look like anyone else's."

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} sat in {setting} watching others do things easily, and felt their {object_motif} dim.

"They are so much better than me," {child_name} said quietly. "Why am I so far behind?"

{companion_name} settled close. "When you measure your inside against everyone else's outside, your own light always looks smaller. But it is not, {child_name}. You are only seeing them at a different place on a different path."

"But they make it look so easy," said {child_name}.

"You did not see their hard parts," said {companion_name}. "Everyone has them. Compare yourself only to who you were yesterday — that is the only race that is yours."

{child_name} thought about how far they had come, all on their own, and the {object_motif} brightened again, warm and steady.

"My path is mine," {child_name} said.

"And it is a good one," said {companion_name}. "Tend your own light. It was never meant to look like anyone else's."

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Brave is Scared and Trying',
    concept: 'Courage means feeling afraid and acting anyway', callback: 'Your brave voice (Level 2)', ageFloor: 5,
    summary: 'The hero believes brave means not being scared — so feeling afraid makes them think they are failing. Their companion redefines courage: brave is being scared and trying anyway. It builds on Level 2: the shaky voice was brave precisely because it was scared.',
    teachingNote: 'Reframing fear as a companion to courage — not its opposite — lets a child act bravely without waiting to feel fearless.',
    learningBeat: 'Scared and trying',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} stood at the edge of {setting}. Today was the big climb. The {hero} wanted to be brave.

But the {hero} felt shaky inside. Tummy full of butterflies. Hands a little cold.

The {hero} thought, "Brave means not scared. So I am not brave."

The {hero} sat down. The {hero} held the {object_motif} tight.

{companion_name} came and sat close. "You look worried," they said.

"I am too scared to climb," said the {hero}. "Brave kids are not scared. I am not brave."

{companion_name} smiled softly. "Scared and trying is what brave really means," they said. "The scared does not go away. You bring it with you."

The {hero} blinked. "Bring it with me?"

"Yes," said {companion_name}. "Remember your shaky voice? It shook, and it was brave. Brave and scared can hold hands."

The {hero} took a slow breath. In through the nose. Out through the mouth. The butterflies were still there. That was okay now.

The {hero} looked up at the climb. Still scared. Still shaky.

But the {hero} stood up. One small step. Then two. The {object_motif} stayed in one pocket.

One hand up. One foot up. Slow and steady. The {hero} did not rush.

The {hero} climbed slow. Heart going pitter-pat. Breath going in and out.

Halfway up, the {hero} wanted to stop. The wind was soft. {companion_name} called, "You are doing it. Keep going." So the {hero} kept going.

Up, and up, and up. Scared the whole way. Trying the whole way.

At the top, the {hero} laughed. A soft, surprised laugh. The {hero} had done it. Scared AND brave. Both at once.

The {hero} had carried the scared all the way up. And that was the brave part.

{companion_name} clapped from below. "You did it," they called.

The {hero} looked out over {setting}. The little lights were coming on, one by one.

"I was scared," said the {hero}. "And I climbed anyway."

{companion_name} nodded. The {hero} held the {object_motif} and felt the shaky feeling turn warm and sleepy.

The {hero} yawned. Climbing was big work. Being brave was big work too.

Time to rest now. Scared and brave, all tucked in together.

{refrain}.`,
    scriptTemplate: `{child_name} stood at the edge of {setting}. Today was the big climb. {child_name} wanted to be brave.

But {child_name} felt shaky inside. Tummy full of butterflies. Hands a little cold.

{child_name} thought, "Brave means not scared. So I am not brave."

{child_name} sat down. {child_name} held the {object_motif} tight.

{companion_name} came and sat close. "You look worried," they said.

"I am too scared to climb," said {child_name}. "Brave kids are not scared. I am not brave."

{companion_name} smiled softly. "Scared and trying is what brave really means," they said. "The scared does not go away. You bring it with you."

{child_name} blinked. "Bring it with me?"

"Yes," said {companion_name}. "Remember your shaky voice? It shook, and it was brave. Brave and scared can hold hands."

{child_name} took a slow breath. In through the nose. Out through the mouth. The butterflies were still there. That was okay now.

{child_name} looked up at the climb. Still scared. Still shaky.

But {child_name} stood up. One small step. Then two. The {object_motif} stayed in one pocket.

One hand up. One foot up. Slow and steady. {child_name} did not rush.

{child_name} climbed slow. Heart going pitter-pat. Breath going in and out.

Halfway up, {child_name} wanted to stop. The wind was soft. {companion_name} called, "You are doing it. Keep going." So {child_name} kept going.

Up, and up, and up. Scared the whole way. Trying the whole way.

At the top, {child_name} laughed. A soft, surprised laugh. {child_name} had done it. Scared AND brave. Both at once.

{child_name} had carried the scared all the way up. And that was the brave part.

{companion_name} clapped from below. "You did it," they called.

{child_name} looked out over {setting}. The little lights were coming on, one by one.

"I was scared," said {child_name}. "And I climbed anyway."

{companion_name} nodded. {child_name} held the {object_motif} and felt the shaky feeling turn warm and sleepy.

{child_name} yawned. Climbing was big work. Being brave was big work too.

Time to rest now. Scared and brave, all tucked in together.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} stood at the bottom of the tall rope-bridge that crossed {setting}. Everyone else had already run across, laughing. The {hero} had not moved.

Below the bridge, the water of {setting} moved slow and dark. The planks were old and friendly-looking, but they creaked, and the ropes hummed whenever the wind came through.

Today was supposed to be the day. The {hero} had promised to cross the bridge. But now, standing here, the {hero}'s knees felt wobbly and the stomach flipped like a fish.

"Brave people are not scared," the {hero} whispered. "And I am scared. So I must not be brave at all."

The {hero} turned the {object_motif} over and over in one hand, wishing the scared feeling would just disappear.

{companion_name} padded up quietly and sat down beside the {hero}. For a while they said nothing. They just watched the bridge sway.

"You have been standing here a long time," {companion_name} said gently.

"I want to cross," said the {hero}. "But my whole body is shaking. Real brave ones do not shake. I keep waiting to stop being scared, and it never happens."

{companion_name} tilted their head. "Ah. I think you are waiting for the wrong thing."

The {hero} looked up. "The wrong thing?"

"You are waiting for the fear to leave before you go," said {companion_name}. "But that is not how it works. Scared and trying is the whole of brave. The fear does not mean you are failing. It means you are doing something that matters."

The {hero} thought about that. It felt strange and new.

For as long as the {hero} could remember, being scared had felt like a stop sign. A big red NO. Now {companion_name} was saying it could be a green light instead.

"Remember at the pond," {companion_name} went on, "when your voice came out all shaky and you spoke up anyway? You were scared the whole time. And everyone still calls that the day you were brave."

The {hero} looked at the bridge again. It still looked long. The stomach still flipped. Nothing about the fear had changed.

But something in the {hero}'s mind had turned, like a key in a lock.

The {hero} let out a long breath. The bridge was not going to get any shorter. The waiting was over.

"Go on," said {companion_name} softly. "I am right here."

The {hero} stood. The legs were still wobbly. The {hero} put one foot on the first plank. It swayed. The {hero} gasped and gripped the rope.

"Still here," called {companion_name}. "Keep going."

One plank. Then another. The bridge bounced softly. The {hero}'s heart drummed fast against the ribs, but the feet kept moving. Scared foot, brave foot. Scared foot, brave foot.

The {hero} did not look down. Just the next plank. Just the next one. The rope was rough and good under both hands.

Halfway across, the wind pushed and the {hero} froze. The whole bridge trembled. For a moment the {hero} wanted to turn back.

Instead, the {hero} breathed in, breathed out, and took one more step. Then one more. The scared came along the whole way, like a small passenger riding on the {hero}'s shoulder.

And then, all at once, the {hero}'s foot touched solid ground on the far side.

The {hero} spun around, eyes wide. "I did it! I did it while I was still scared!"

{companion_name} trotted across to join them, and the {hero} held the {object_motif} up high in one fist.

The last of the daylight went soft and gold over {setting}, and the {hero} felt the scared feeling settle down into something quiet and proud.

On the far bank, the first small stars were waking up one by one over the hills.

"I thought I had to wait until I was not afraid," the {hero} said. "I would have waited forever."

{companion_name} bumped them gently. "And now you know better."

The {hero} yawned, tired all the way through, the good kind of tired.

{refrain}.`,
    scriptTemplate: `{child_name} stood at the bottom of the tall rope-bridge that crossed {setting}. Everyone else had already run across, laughing. {child_name} had not moved.

Below the bridge, the water of {setting} moved slow and dark. The planks were old and friendly-looking, but they creaked, and the ropes hummed whenever the wind came through.

Today was supposed to be the day. {child_name} had promised to cross the bridge. But now, standing here, {child_name}'s knees felt wobbly and the stomach flipped like a fish.

"Brave people are not scared," {child_name} whispered. "And I am scared. So I must not be brave at all."

{child_name} turned the {object_motif} over and over in one hand, wishing the scared feeling would just disappear.

{companion_name} padded up quietly and sat down beside {child_name}. For a while they said nothing. They just watched the bridge sway.

"You have been standing here a long time," {companion_name} said gently.

"I want to cross," said {child_name}. "But my whole body is shaking. Real brave ones do not shake. I keep waiting to stop being scared, and it never happens."

{companion_name} tilted their head. "Ah. I think you are waiting for the wrong thing."

{child_name} looked up. "The wrong thing?"

"You are waiting for the fear to leave before you go," said {companion_name}. "But that is not how it works. Scared and trying is the whole of brave. The fear does not mean you are failing. It means you are doing something that matters."

{child_name} thought about that. It felt strange and new.

For as long as {child_name} could remember, being scared had felt like a stop sign. A big red NO. Now {companion_name} was saying it could be a green light instead.

"Remember at the pond," {companion_name} went on, "when your voice came out all shaky and you spoke up anyway? You were scared the whole time. And everyone still calls that the day you were brave."

{child_name} looked at the bridge again. It still looked long. The stomach still flipped. Nothing about the fear had changed.

But something in {child_name}'s mind had turned, like a key in a lock.

{child_name} let out a long breath. The bridge was not going to get any shorter. The waiting was over.

"Go on," said {companion_name} softly. "I am right here."

{child_name} stood. The legs were still wobbly. {child_name} put one foot on the first plank. It swayed. {child_name} gasped and gripped the rope.

"Still here," called {companion_name}. "Keep going."

One plank. Then another. The bridge bounced softly. {child_name}'s heart drummed fast against the ribs, but the feet kept moving. Scared foot, brave foot. Scared foot, brave foot.

{child_name} did not look down. Just the next plank. Just the next one. The rope was rough and good under both hands.

Halfway across, the wind pushed and {child_name} froze. The whole bridge trembled. For a moment {child_name} wanted to turn back.

Instead, {child_name} breathed in, breathed out, and took one more step. Then one more. The scared came along the whole way, like a small passenger riding on {child_name}'s shoulder.

And then, all at once, {child_name}'s foot touched solid ground on the far side.

{child_name} spun around, eyes wide. "I did it! I did it while I was still scared!"

{companion_name} trotted across to join them, and {child_name} held the {object_motif} up high in one fist.

The last of the daylight went soft and gold over {setting}, and {child_name} felt the scared feeling settle down into something quiet and proud.

On the far bank, the first small stars were waking up one by one over the hills.

"I thought I had to wait until I was not afraid," {child_name} said. "I would have waited forever."

{companion_name} bumped them gently. "And now you know better."

{child_name} yawned, tired all the way through, the good kind of tired.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} had signed up for the talent show at {setting} weeks ago, back when it felt far away and easy. Now it was tonight, and the lantern-lit stage waited at the end of the path like an open mouth.

Backstage, the {hero} peeked out at the gathering crowd and felt the whole plan fall apart inside. Hands cold. Breath quick. A strange buzzing under the skin, as if the {hero} had swallowed a hive of bees.

The {hero} knew the song by heart. That was not the problem. The {hero} had practised until every note lived in the fingers. The problem was the body, which had apparently decided that tonight was an emergency.

"I can't do it," the {hero} said out loud, to no one. "Look at me. I'm falling to pieces. Brave performers walk out there calm and sure. I'm not calm. I'm not anything close to sure. I must not have it in me."

The {hero} pulled the {object_motif} out of a pocket and squeezed it, willing the shaking to stop. It did not stop.

Other kids brushed past on their way to the stage, chattering, easy. To the {hero} they all looked carved from something the {hero} was not made of.

A quiet shuffle, and {companion_name} appeared at the {hero}'s elbow, settling in without fuss.

"Big crowd," {companion_name} said, following the {hero}'s gaze.

"I keep waiting to feel ready," the {hero} admitted. "Every other kid out there looks fine. I'm shaking so hard I can barely hold this. That's how I know I'm not brave enough. Brave would mean the scared was gone."

{companion_name} was quiet for a moment, watching the lanterns sway.

"I think you have brave and fearless mixed up," they said. "They are not the same thing. Fearless is when there is nothing to be afraid of. But brave? Brave only exists when you are scared. Scared and trying anyway — that is the whole of it. If the fear were gone, there would be nothing brave left to do."

The {hero} turned this over slowly. It did not make the bees stop buzzing. But it rearranged something.

For as long as the {hero} could remember, the fear had felt like a verdict — a final answer that said no, not you, not tonight. What if it was only weather? Something that blew through, loud and cold, without deciding anything at all?

"So this shaking," the {hero} said, looking down at both hands.

"It is proof you are about to do something that counts," said {companion_name}. "Remember the day your voice cracked in front of the class, and you kept talking? Everyone remembers that as the brave day. And your voice shook the whole way through it."

Out on the stage, another performer finished, and a warm wave of clapping rolled backstage. Soon it would be the {hero}'s turn. The fear did not shrink. If anything it grew.

The {hero} pressed both feet flat on the floor and tried to remember how to breathe on purpose. In for four. Out for four. The bees did not leave. But the {hero} found, underneath them, that the legs would still hold.

But the {hero} looked down at the {object_motif} in one trembling hand and thought: I do not have to wait to stop shaking. I can go shaking.

A voice called the {hero}'s act. The {hero}'s stomach dropped like a stone down a well.

"I'm terrified," the {hero} whispered.

"Good," said {companion_name}, with a small grin. "That means it matters. I'll be right here in the wings."

The {hero} almost laughed. Of course {companion_name} would call being terrified good news.

The {hero} walked out. The lights were bright and the faces were a blur and the knees genuinely wobbled with every step. The {hero} reached the middle of the stage, opened both hands, and began.

For one endless second the {hero} was sure nothing would come out at all. The silence stretched. Then the first note arrived, small and shaking, and the {hero} chased it into the second.

The first few words came out thin and wavery. The scared rode along on every one of them. But the {hero} did not stop for it. Wavery word after wavery word, the performance kept going, and somewhere in the middle the {hero} noticed the shaking had not won. It was still there — and the {hero} was doing the thing anyway, both at once.

When it ended, the clapping came, warm and real. But the loudest thing was not the crowd. It was the surprised, ringing feeling in the {hero}'s own chest.

Back in the wings, {companion_name} was waiting.

"I was scared the entire time," the {hero} said, half laughing, half out of breath. "It never went away. Not for one second."

The {hero} shook their head slowly, still not quite believing it. All that waiting to feel different, and it turned out different was never the price of admission.

"I know," said {companion_name}. "And you did it anyway. Look at what that means about you."

The {hero} held the {object_motif} against both palms and felt the buzzing slowly fade into a deep, glowing tiredness. Outside, past the lanterns of {setting}, the evening had gone soft and blue.

Somewhere out past the tables, families were already gathering coats, but the warmth of the moment stayed close, like heat off a stone long after the sun has gone.

The {hero} realised something worth keeping: the fear had shown up tonight exactly as strong as ever — and it had not been able to stop a single thing.

{refrain}.`,
    scriptTemplate: `{child_name} had signed up for the talent show at {setting} weeks ago, back when it felt far away and easy. Now it was tonight, and the lantern-lit stage waited at the end of the path like an open mouth.

Backstage, {child_name} peeked out at the gathering crowd and felt the whole plan fall apart inside. Hands cold. Breath quick. A strange buzzing under the skin, as if {child_name} had swallowed a hive of bees.

{child_name} knew the song by heart. That was not the problem. {child_name} had practised until every note lived in the fingers. The problem was the body, which had apparently decided that tonight was an emergency.

"I can't do it," {child_name} said out loud, to no one. "Look at me. I'm falling to pieces. Brave performers walk out there calm and sure. I'm not calm. I'm not anything close to sure. I must not have it in me."

{child_name} pulled the {object_motif} out of a pocket and squeezed it, willing the shaking to stop. It did not stop.

Other kids brushed past on their way to the stage, chattering, easy. To {child_name} they all looked carved from something {child_name} was not made of.

A quiet shuffle, and {companion_name} appeared at {child_name}'s elbow, settling in without fuss.

"Big crowd," {companion_name} said, following {child_name}'s gaze.

"I keep waiting to feel ready," {child_name} admitted. "Every other kid out there looks fine. I'm shaking so hard I can barely hold this. That's how I know I'm not brave enough. Brave would mean the scared was gone."

{companion_name} was quiet for a moment, watching the lanterns sway.

"I think you have brave and fearless mixed up," they said. "They are not the same thing. Fearless is when there is nothing to be afraid of. But brave? Brave only exists when you are scared. Scared and trying anyway — that is the whole of it. If the fear were gone, there would be nothing brave left to do."

{child_name} turned this over slowly. It did not make the bees stop buzzing. But it rearranged something.

For as long as {child_name} could remember, the fear had felt like a verdict — a final answer that said no, not you, not tonight. What if it was only weather? Something that blew through, loud and cold, without deciding anything at all?

"So this shaking," {child_name} said, looking down at both hands.

"It is proof you are about to do something that counts," said {companion_name}. "Remember the day your voice cracked in front of the class, and you kept talking? Everyone remembers that as the brave day. And your voice shook the whole way through it."

Out on the stage, another performer finished, and a warm wave of clapping rolled backstage. Soon it would be {child_name}'s turn. The fear did not shrink. If anything it grew.

{child_name} pressed both feet flat on the floor and tried to remember how to breathe on purpose. In for four. Out for four. The bees did not leave. But {child_name} found, underneath them, that the legs would still hold.

But {child_name} looked down at the {object_motif} in one trembling hand and thought: I do not have to wait to stop shaking. I can go shaking.

A voice called {child_name}'s act. {child_name}'s stomach dropped like a stone down a well.

"I'm terrified," {child_name} whispered.

"Good," said {companion_name}, with a small grin. "That means it matters. I'll be right here in the wings."

{child_name} almost laughed. Of course {companion_name} would call being terrified good news.

{child_name} walked out. The lights were bright and the faces were a blur and the knees genuinely wobbled with every step. {child_name} reached the middle of the stage, opened both hands, and began.

For one endless second {child_name} was sure nothing would come out at all. The silence stretched. Then the first note arrived, small and shaking, and {child_name} chased it into the second.

The first few words came out thin and wavery. The scared rode along on every one of them. But {child_name} did not stop for it. Wavery word after wavery word, the performance kept going, and somewhere in the middle {child_name} noticed the shaking had not won. It was still there — and {child_name} was doing the thing anyway, both at once.

When it ended, the clapping came, warm and real. But the loudest thing was not the crowd. It was the surprised, ringing feeling in {child_name}'s own chest.

Back in the wings, {companion_name} was waiting.

"I was scared the entire time," {child_name} said, half laughing, half out of breath. "It never went away. Not for one second."

{child_name} shook their head slowly, still not quite believing it. All that waiting to feel different, and it turned out different was never the price of admission.

"I know," said {companion_name}. "And you did it anyway. Look at what that means about you."

{child_name} held the {object_motif} against both palms and felt the buzzing slowly fade into a deep, glowing tiredness. Outside, past the lanterns of {setting}, the evening had gone soft and blue.

Somewhere out past the tables, families were already gathering coats, but the warmth of the moment stayed close, like heat off a stone long after the sun has gone.

{child_name} realised something worth keeping: the fear had shown up tonight exactly as strong as ever — and it had not been able to stop a single thing.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `For three weeks the {hero} had told everyone that the climbing wall at {setting} was no big deal. It was the kind of thing you said when you desperately hoped it would become true by repetition. Now the {hero} stood at its base, neck craned back, and understood with sinking certainty that saying a thing does not shrink it.

The wall went up and up, studded with coloured holds, disappearing into the last gold light of the evening. Somewhere near the top was a small bell you were meant to ring. The {hero} had imagined ringing it a hundred times. In none of those imaginings had the {hero}'s hands been this cold, or the breath this shallow, or the whole enterprise felt this impossible.

The {hero} had a theory about people who did brave things: that they were simply born without the part that flinched. The {hero} had studied them from a distance for years — the kids who put their hands up first, who dived into cold water, who walked into new rooms as if rooms were nothing — and had concluded, quietly and hopelessly, that whatever they had, the {hero} had been left out of. Tonight was supposed to be the night the {hero} proved otherwise. Instead it felt like the night the theory would finally be confirmed.

Around the {hero}, other kids clipped in and went up without ceremony, calling to each other, laughing at the wobbles. The {hero} watched them and felt the old, familiar arithmetic begin: they are not afraid, and I am; therefore they are brave and I am not; therefore I should not even try, because trying and failing in front of everyone would only prove what the fear already seems to be telling me.

The {hero} took the {object_motif} from a pocket and closed a fist around it, the way you hold onto something when the ground feels unreliable.

{companion_name} arrived without announcement, the way they always did, and stood beside the {hero} looking up at the same impossible wall.

"You have talked about this wall for three weeks," {companion_name} said. "And now you have gone very quiet."

"Because I was wrong about myself," the {hero} said. The words came out lower and more honest than intended. "I thought when the moment came, I would feel ready. Steady. Like the others look. Instead I feel like this. Shaking. Sick. That has to mean I am not built for it. Brave people do not feel like this."

{companion_name} considered the wall a while longer before answering, as if giving the question the seriousness it deserved.

"You are measuring yourself against the wrong idea," {companion_name} said at last. "You think brave means the absence of fear. But someone with no fear is not being brave — they are just not in any danger they can feel. Brave and scared are not opposites. Scared and trying is the entire thing. The fear is not proof you are failing; it is the raw material courage is made from. Take it away and there is nothing left to be brave with."

The {hero} said nothing for a moment. It was not that the fear vanished — it sat exactly where it had been, heavy behind the ribs. But the meaning the {hero} had hung on it was quietly coming loose.

It was a strange, dawning thing, like discovering a word you had been mispronouncing your whole life. The fear had always come with a verdict attached — not you, not this, not tonight — and the {hero} had never once thought to question whether the verdict truly belonged to the fear, or whether the {hero} had simply been the one adding it every time.

"So the others going up easy," the {hero} said slowly, "they might not be braver than me. They might just be less afraid."

"That is closer to the truth than you know," said {companion_name}. "And think back. The day your voice went thin and shook in front of everyone, and you kept speaking — nobody remembers that as the day you failed to be calm. They remember it as the bravest thing you did all year. Not because the shaking stopped. Because you went on right through the middle of it."

The {hero} looked up at the wall again. It had not become smaller. The bell at the top was exactly as far away as before. And yet the thing that had felt like a locked door — I am too scared, therefore I cannot — no longer seemed to lock.

The {hero} let out a long breath. It did not steady the hands — nothing was going to steady the hands tonight — but it made a small clearing in the noise, enough to stand in. The others were still going up, still laughing, but they no longer looked like a different species. They just looked like people who happened, tonight, to have less to be afraid of.

"I do not have to wait until I feel brave," the {hero} said, half to {companion_name} and half to the wall. "There is no version of tonight where the fear politely leaves first."

"There almost never is," {companion_name} agreed gently. "Go while it is still here. That is allowed. That is the whole trick."

The {hero} clipped in. The harness tightened. The first hold was easy, and the second, and then the ground was further away than felt comfortable and the fear stood up to its full height and made itself known in every limb. The {hero}'s foot slipped once on a smooth hold and the heart lurched — but the rope held, and the {hero} breathed, and reached again.

Halfway up, the muscles in the {hero}'s arms began to burn and the reasonable, sensible voice inside started listing all the excellent reasons to quit: it was late, the wall was too hard, no one would blame the {hero} for coming down, there would be other nights. Every word of it was true. And underneath all of it, quieter, was the fear, doing what it always did — dressing itself up as good sense.

Higher up, there was a stretch with no obvious hold, where the {hero} clung and shook and seriously considered calling to be let down. The scared was enormous here, filling everything. But the {hero} noticed, almost with surprise, that being this frightened and still hanging on were not contradictions. They were happening in the same body at the same time, and the body had not fallen apart.

Scared hand, moving hand. Scared foot, searching foot. The {hero} did not conquer the fear or push it away or wait it out. The {hero} simply brought it along, all the way up, like a difficult companion who was going to come whether invited or not.

There was no single triumphant moment, no instant where the fear broke and fell away. There was only the next hold, and then the next, each one chosen while frightened, each one a small quiet act of going on anyway. Bit by bit, the bright dot of the bell stopped being an idea and started being a thing the {hero}'s hand could almost, almost reach.

And then the {hero}'s fingers closed around the bell, and it rang — a bright, ordinary, astonishing sound — out over the darkening {setting}.

Coming down was slow and shaky and undignified, and the {hero} did not care in the slightest.

On the ground, {companion_name} was waiting, saying nothing, wearing the particular expression of someone who had known all along.

"I was scared the whole way up," the {hero} said. "Every single second. It never once let go of me."

"I believe you," said {companion_name}. "And there is the bell, still ringing in your ears."

For a moment the {hero} just stood there in the cooling air, letting the fact of it settle: not that the fear had been small, or manageable, or secretly not that bad — it had been every bit as big as it always was — but that it had, in the end, been beside the point. It had come the whole way and voted the whole way and lost every single vote.

The {hero} uncurled a hand and looked at the {object_motif} resting there, and felt the fear finally begin to loosen — not because it had been proven wrong, but because it had come along for the whole climb and turned out to have no power to stop anything. Above {setting}, the first stars had come out without anyone noticing, and the bell's echo was still fading into the dark.

{companion_name} did not say anything wise, and the {hero} was grateful for it; some things did not need a lesson stitched onto the end. They just stood together and watched the sky finish turning dark.

The {hero} understood now that the fear would visit again — next time, and the time after — and that this was not a flaw in the plan. It was the plan.

{refrain}.`,
    scriptTemplate: `For three weeks {child_name} had told everyone that the climbing wall at {setting} was no big deal. It was the kind of thing you said when you desperately hoped it would become true by repetition. Now {child_name} stood at its base, neck craned back, and understood with sinking certainty that saying a thing does not shrink it.

The wall went up and up, studded with coloured holds, disappearing into the last gold light of the evening. Somewhere near the top was a small bell you were meant to ring. {child_name} had imagined ringing it a hundred times. In none of those imaginings had {child_name}'s hands been this cold, or the breath this shallow, or the whole enterprise felt this impossible.

{child_name} had a theory about people who did brave things: that they were simply born without the part that flinched. {child_name} had studied them from a distance for years — the kids who put their hands up first, who dived into cold water, who walked into new rooms as if rooms were nothing — and had concluded, quietly and hopelessly, that whatever they had, {child_name} had been left out of. Tonight was supposed to be the night {child_name} proved otherwise. Instead it felt like the night the theory would finally be confirmed.

Around {child_name}, other kids clipped in and went up without ceremony, calling to each other, laughing at the wobbles. {child_name} watched them and felt the old, familiar arithmetic begin: they are not afraid, and I am; therefore they are brave and I am not; therefore I should not even try, because trying and failing in front of everyone would only prove what the fear already seems to be telling me.

{child_name} took the {object_motif} from a pocket and closed a fist around it, the way you hold onto something when the ground feels unreliable.

{companion_name} arrived without announcement, the way they always did, and stood beside {child_name} looking up at the same impossible wall.

"You have talked about this wall for three weeks," {companion_name} said. "And now you have gone very quiet."

"Because I was wrong about myself," {child_name} said. The words came out lower and more honest than intended. "I thought when the moment came, I would feel ready. Steady. Like the others look. Instead I feel like this. Shaking. Sick. That has to mean I am not built for it. Brave people do not feel like this."

{companion_name} considered the wall a while longer before answering, as if giving the question the seriousness it deserved.

"You are measuring yourself against the wrong idea," {companion_name} said at last. "You think brave means the absence of fear. But someone with no fear is not being brave — they are just not in any danger they can feel. Brave and scared are not opposites. Scared and trying is the entire thing. The fear is not proof you are failing; it is the raw material courage is made from. Take it away and there is nothing left to be brave with."

{child_name} said nothing for a moment. It was not that the fear vanished — it sat exactly where it had been, heavy behind the ribs. But the meaning {child_name} had hung on it was quietly coming loose.

It was a strange, dawning thing, like discovering a word you had been mispronouncing your whole life. The fear had always come with a verdict attached — not you, not this, not tonight — and {child_name} had never once thought to question whether the verdict truly belonged to the fear, or whether {child_name} had simply been the one adding it every time.

"So the others going up easy," {child_name} said slowly, "they might not be braver than me. They might just be less afraid."

"That is closer to the truth than you know," said {companion_name}. "And think back. The day your voice went thin and shook in front of everyone, and you kept speaking — nobody remembers that as the day you failed to be calm. They remember it as the bravest thing you did all year. Not because the shaking stopped. Because you went on right through the middle of it."

{child_name} looked up at the wall again. It had not become smaller. The bell at the top was exactly as far away as before. And yet the thing that had felt like a locked door — I am too scared, therefore I cannot — no longer seemed to lock.

{child_name} let out a long breath. It did not steady the hands — nothing was going to steady the hands tonight — but it made a small clearing in the noise, enough to stand in. The others were still going up, still laughing, but they no longer looked like a different species. They just looked like people who happened, tonight, to have less to be afraid of.

"I do not have to wait until I feel brave," {child_name} said, half to {companion_name} and half to the wall. "There is no version of tonight where the fear politely leaves first."

"There almost never is," {companion_name} agreed gently. "Go while it is still here. That is allowed. That is the whole trick."

{child_name} clipped in. The harness tightened. The first hold was easy, and the second, and then the ground was further away than felt comfortable and the fear stood up to its full height and made itself known in every limb. {child_name}'s foot slipped once on a smooth hold and the heart lurched — but the rope held, and {child_name} breathed, and reached again.

Halfway up, the muscles in {child_name}'s arms began to burn and the reasonable, sensible voice inside started listing all the excellent reasons to quit: it was late, the wall was too hard, no one would blame {child_name} for coming down, there would be other nights. Every word of it was true. And underneath all of it, quieter, was the fear, doing what it always did — dressing itself up as good sense.

Higher up, there was a stretch with no obvious hold, where {child_name} clung and shook and seriously considered calling to be let down. The scared was enormous here, filling everything. But {child_name} noticed, almost with surprise, that being this frightened and still hanging on were not contradictions. They were happening in the same body at the same time, and the body had not fallen apart.

Scared hand, moving hand. Scared foot, searching foot. {child_name} did not conquer the fear or push it away or wait it out. {child_name} simply brought it along, all the way up, like a difficult companion who was going to come whether invited or not.

There was no single triumphant moment, no instant where the fear broke and fell away. There was only the next hold, and then the next, each one chosen while frightened, each one a small quiet act of going on anyway. Bit by bit, the bright dot of the bell stopped being an idea and started being a thing {child_name}'s hand could almost, almost reach.

And then {child_name}'s fingers closed around the bell, and it rang — a bright, ordinary, astonishing sound — out over the darkening {setting}.

Coming down was slow and shaky and undignified, and {child_name} did not care in the slightest.

On the ground, {companion_name} was waiting, saying nothing, wearing the particular expression of someone who had known all along.

"I was scared the whole way up," {child_name} said. "Every single second. It never once let go of me."

"I believe you," said {companion_name}. "And there is the bell, still ringing in your ears."

For a moment {child_name} just stood there in the cooling air, letting the fact of it settle: not that the fear had been small, or manageable, or secretly not that bad — it had been every bit as big as it always was — but that it had, in the end, been beside the point. It had come the whole way and voted the whole way and lost every single vote.

{child_name} uncurled a hand and looked at the {object_motif} resting there, and felt the fear finally begin to loosen — not because it had been proven wrong, but because it had come along for the whole climb and turned out to have no power to stop anything. Above {setting}, the first stars had come out without anyone noticing, and the bell's echo was still fading into the dark.

{companion_name} did not say anything wise, and {child_name} was grateful for it; some things did not need a lesson stitched onto the end. They just stood together and watched the sky finish turning dark.

{child_name} understood now that the fear would visit again — next time, and the time after — and that this was not a flaw in the plan. It was the plan.

{refrain}.`
  }
},
    audioTemplate: `Something big stood before the {hero} in {setting}, and their heart raced. The {object_motif} trembled inside them.

"I must not be brave," they said sadly, "because I am so scared."

{companion_name} shook their head softly. "Oh, but that is exactly backwards. If you were not scared, it would not take any courage at all. Brave is not the absence of fear. Brave is being scared — and trying anyway."

The {hero} blinked. "So being scared… means I have a chance to be brave?"

"Always," said {companion_name}. "Your shaky voice, long ago — that was brave because it shook."

The {hero} felt the fear still there, fluttering — but beside it now stood something steadier. They did not wait for the fear to leave. They stepped forward with it.

And that step, taken while afraid, was the bravest thing they had ever done.

"Scared and trying," the {hero} breathed, and the {object_motif} burned warm and proud.

{refrain}.`,
    scriptTemplate: `Something big stood before {child_name} the {hero} in {setting}, and their heart raced. The {object_motif} trembled inside them.

"I must not be brave," {child_name} said sadly, "because I am so scared."

{companion_name} shook their head softly. "Oh, but that is exactly backwards, {child_name}. If you were not scared, it would not take any courage at all. Brave is not the absence of fear. Brave is being scared — and trying anyway."

{child_name} blinked. "So being scared… means I have a chance to be brave?"

"Always," said {companion_name}. "Your shaky voice, long ago — that was brave because it shook."

{child_name} felt the fear still there, fluttering — but beside it now stood something steadier. {child_name} did not wait for the fear to leave, and stepped forward with it.

And that step, taken while afraid, was the bravest thing {child_name} had ever done.

"Scared and trying," {child_name} breathed, and the {object_motif} burned warm and proud.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'I Can Try',
    concept: 'The settled, quiet confidence to attempt anything', callback: 'Brave is scared and trying (Level 4)', ageFloor: 5,
    summary: 'The capstone: facing something new, the hero no longer needs to feel ready, fearless, or better than anyone. They simply trust their own small light and say the three words that hold all of it — I can try. The path gathers into a calm, durable confidence.',
    teachingNote: 'True confidence is not certainty of success but the settled willingness to try — the quiet ground from which every other skill grows.',
    learningBeat: 'I can try',
    ageVariants: {
  '3-4': { audioTemplate: `The {hero} stood at the edge of {setting}. Something new waited there. A tall step. A big new try.

The {hero} looked up. The step looked high. The tummy went flip. The hands felt small.

A bigger kid went up fast. Up and over. Quick and easy. The {hero} watched and felt slow.

The {hero} wanted to go home. The step was so tall. But the {hero} did not go. The {hero} stayed.

{companion_name} sat close by. {companion_name} did not climb it. {companion_name} only waited there.

The {hero} held the {object_motif}. It felt steady. It felt warm in two hands. It did not mind at all.

"I do not feel ready," said the {hero}. "I do not feel big or brave."

{companion_name} smiled a soft smile. "You do not have to feel big. You only have to try. Small and steady is enough."

The {hero} looked at the tall step. The {hero} looked at two small hands. Maybe small was okay.

The {hero} looked at {companion_name}. {companion_name} gave a calm, kind nod.

The {hero} took one breath. In and out. Slow and soft. The shoulders came down low.

Then the {hero} said three little words. "I can try."

One foot went up. Then one hand. Then the other foot. Step by step. Slow and sure.

Up went the {hero}. Slow like a little snail. And brave like one too. One more step. One more.

{companion_name} watched from below. {companion_name} did not help. This was the {hero}'s own try.

The {hero} wobbled once. The {hero} stopped. The {hero} breathed. Then the {hero} went again.

The {hero} did not rush. The {hero} did not stop. Just one small step. Then one more. Almost there now. Nearly, nearly there.

And there. The top. The {hero} stood tall on the high step. The {hero} did it. All on their own.

The {hero} looked down at {companion_name}. {companion_name} waved a big happy wave.

"You tried," said {companion_name}. "That was all you needed to do."

The {hero} felt tall and glad. Not big. Not brave. Just glad and calm inside.

The {hero} held the {object_motif} close and soft. The moon was gentle over {setting}. A little wind said goodnight. A soft round cloud went by.

The {hero} gave a big slow yawn. The try was done. The heart felt calm and full.

{refrain}.`, scriptTemplate: `{child_name} stood at the edge of {setting}. Something new waited there. A tall step. A big new try.

{child_name} looked up. The step looked high. The tummy went flip. The hands felt small.

A bigger kid went up fast. Up and over. Quick and easy. {child_name} watched and felt slow.

{child_name} wanted to go home. The step was so tall. But {child_name} did not go. {child_name} stayed.

{companion_name} sat close by. {companion_name} did not climb it. {companion_name} only waited there.

{child_name} held the {object_motif}. It felt steady. It felt warm in two hands. It did not mind at all.

"I do not feel ready," said {child_name}. "I do not feel big or brave."

{companion_name} smiled a soft smile. "You do not have to feel big. You only have to try. Small and steady is enough."

{child_name} looked at the tall step. {child_name} looked at two small hands. Maybe small was okay.

{child_name} looked at {companion_name}. {companion_name} gave a calm, kind nod.

{child_name} took one breath. In and out. Slow and soft. The shoulders came down low.

Then {child_name} said three little words. "I can try."

One foot went up. Then one hand. Then the other foot. Step by step. Slow and sure.

Up went {child_name}. Slow like a little snail. And brave like one too. One more step. One more.

{companion_name} watched from below. {companion_name} did not help. This was {child_name}'s own try.

{child_name} wobbled once. {child_name} stopped. {child_name} breathed. Then {child_name} went again.

{child_name} did not rush. {child_name} did not stop. Just one small step. Then one more. Almost there now. Nearly, nearly there.

And there. The top. {child_name} stood tall on the high step. {child_name} did it. All on their own.

{child_name} looked down at {companion_name}. {companion_name} waved a big happy wave.

"You tried," said {companion_name}. "That was all you needed to do."

{child_name} felt tall and glad. Not big. Not brave. Just glad and calm inside.

{child_name} held the {object_motif} close and soft. The moon was gentle over {setting}. A little wind said goodnight. A soft round cloud went by.

{child_name} gave a big slow yawn. The try was done. The heart felt calm and full.

{refrain}.` },
  '5-6': { audioTemplate: `The {hero} stood at the edge of {setting}, looking up at the thing that was new. Everyone else seemed to already know how to do it. The {hero} did not. And that made the tummy feel tight and small.

The {hero} had wanted to try this for a long time. Had pictured it, even. But picturing it was easy, and standing here at the real edge of it was not easy at all.

It was a big new try, a first go at something the {hero} had never done before. Nearby, a bigger kid had done it twice already, quick and easy, and had not even looked scared once. The bigger kid landed and shook out both arms like it was the simplest thing in the world.

The {hero} looked down at two hands and wished they felt braver than they did. For a moment the {hero} almost turned around. Almost decided that today was not the day. Almost walked back the way they came.

{companion_name} came and sat on a warm stone at the edge of {setting}. {companion_name} did not push. {companion_name} did not say hurry up. {companion_name} only stayed close and let the {hero} think.

"I keep waiting to feel ready," the {hero} said. "But the ready feeling does not come. Maybe I am just not the kind who can do this."

{companion_name} thought about that for a moment. "You do not have to feel ready, and you do not have to be the best one here. You only have to try. That is the whole thing."

The {hero} held the {object_motif} in two hands. It was steady, and it was warm, and it did not ask the {hero} to be anyone bigger or braver than they already were.

"What if I try and I still do not do it?" the {hero} asked, very quietly.

"Then you tried," said {companion_name}. "And trying is already the brave part. I will be right here either way, whatever happens."

The {hero} looked at the new thing, then at {companion_name}, then down at the {object_motif} resting in both hands. Nothing about it had changed. The step was still the step. But something inside the {hero} had gone a little quieter, a little steadier.

The {hero} breathed in slow. The shoulders came down a little. The three small words felt round and true, and the {hero} said them out loud. "I can try."

One step. That was all. Just the first one. The {hero} did not think about the whole climb, only the next small move. Then the next. Then the one after that.

{companion_name} did not reach out to help. {companion_name} watched the {hero} go, step by careful step, all on their own, not saying a word.

The {hero} slipped once, just a little, and stopped, and breathed, and went again. The old scared voice whispered that this would be a fine place to stop. The {hero} listened to the whisper, and then let it drift on past, and reached for the next hold instead. Not fast. Not perfect. Just steady, like a small light that would not blow out.

And then the {hero} was there. Up, over, through, done. The new thing was not new anymore. The {hero} had done it, all alone, with two ordinary hands.

The {hero} looked back at {companion_name} with wide, surprised eyes, still breathing quick.

"You did that," {companion_name} said softly. "Not because the scared feeling went away. Because you went anyway."

The {hero} sat down, tired and glad, and held the {object_motif} against a slow, happy heart. The {hero} did not feel like the biggest or the bravest. The {hero} just felt sure, in a quiet way that seemed like it would still be there tomorrow.

Over {setting}, the first stars blinked awake, one, then two, then too many to count. The {hero} gave a long, warm yawn, already halfway into sleep, still smiling in the soft dark.

{refrain}.`, scriptTemplate: `{child_name} stood at the edge of {setting}, looking up at the thing that was new. Everyone else seemed to already know how to do it. {child_name} did not. And that made the tummy feel tight and small.

{child_name} had wanted to try this for a long time. Had pictured it, even. But picturing it was easy, and standing here at the real edge of it was not easy at all.

It was a big new try, a first go at something {child_name} had never done before. Nearby, a bigger kid had done it twice already, quick and easy, and had not even looked scared once. The bigger kid landed and shook out both arms like it was the simplest thing in the world.

{child_name} looked down at two hands and wished they felt braver than they did. For a moment {child_name} almost turned around. Almost decided that today was not the day. Almost walked back the way they came.

{companion_name} came and sat on a warm stone at the edge of {setting}. {companion_name} did not push. {companion_name} did not say hurry up. {companion_name} only stayed close and let {child_name} think.

"I keep waiting to feel ready," {child_name} said. "But the ready feeling does not come. Maybe I am just not the kind who can do this."

{companion_name} thought about that for a moment. "You do not have to feel ready, and you do not have to be the best one here. You only have to try. That is the whole thing."

{child_name} held the {object_motif} in two hands. It was steady, and it was warm, and it did not ask {child_name} to be anyone bigger or braver than they already were.

"What if I try and I still do not do it?" {child_name} asked, very quietly.

"Then you tried," said {companion_name}. "And trying is already the brave part. I will be right here either way, whatever happens."

{child_name} looked at the new thing, then at {companion_name}, then down at the {object_motif} resting in both hands. Nothing about it had changed. The step was still the step. But something inside {child_name} had gone a little quieter, a little steadier.

{child_name} breathed in slow. The shoulders came down a little. The three small words felt round and true, and {child_name} said them out loud. "I can try."

One step. That was all. Just the first one. {child_name} did not think about the whole climb, only the next small move. Then the next. Then the one after that.

{companion_name} did not reach out to help. {companion_name} watched {child_name} go, step by careful step, all on their own, not saying a word.

{child_name} slipped once, just a little, and stopped, and breathed, and went again. The old scared voice whispered that this would be a fine place to stop. {child_name} listened to the whisper, and then let it drift on past, and reached for the next hold instead. Not fast. Not perfect. Just steady, like a small light that would not blow out.

And then {child_name} was there. Up, over, through, done. The new thing was not new anymore. {child_name} had done it, all alone, with two ordinary hands.

{child_name} looked back at {companion_name} with wide, surprised eyes, still breathing quick.

"You did that," {companion_name} said softly. "Not because the scared feeling went away. Because you went anyway."

{child_name} sat down, tired and glad, and held the {object_motif} against a slow, happy heart. {child_name} did not feel like the biggest or the bravest. {child_name} just felt sure, in a quiet way that seemed like it would still be there tomorrow.

Over {setting}, the first stars blinked awake, one, then two, then too many to count. {child_name} gave a long, warm yawn, already halfway into sleep, still smiling in the soft dark.

{refrain}.` },
  '7-8': { audioTemplate: `The {hero} had been standing at the edge of {setting} for a long time now, and the new thing still had not gotten any smaller. If anything, the longer the {hero} looked at it, the bigger it seemed to grow.

The {hero} had watched this same scene enough times to know the pattern by heart. First the wanting. Then the edging closer. Then the long, stalling pause where the wanting quietly lost to the worrying, and the {hero} drifted back to the safe part of {setting} to try again some other day that never quite arrived.

It was the sort of new thing the {hero} had never tried before, the kind that made your stomach fold over on itself. All around, other kids were doing it like it was nothing. One of them, a bigger kid, went first, then went again, easy as breathing, and called out over a shoulder that it was not even hard.

The {hero} pressed both hands together to keep them from fidgeting. That was the tell, the thing that always happened right before giving up. Press the hands. Look away. Decide that maybe today was not the day after all, that there would be a better time, a braver morning, some future version of the {hero} who would find all of this simple.

{companion_name} noticed, and came over, and sat down on the cool ground beside the {hero} without a word. For a while {companion_name} said nothing at all, and somehow that helped more than a whole speech would have.

"Everybody else already knows how," the {hero} finally said. "They make it look simple. I keep standing here waiting to feel ready, and the ready feeling just never shows up."

"It might not show up," {companion_name} said gently. "Ready is not something you wait for. It is something you find on the way. You do not have to feel it first."

The {hero} turned the {object_motif} over and over in two hands. It was a solid, steady weight, the same as always, and it did not seem to mind in the least whether the {hero} felt brave or not.

"But what if everyone is watching, and I try, and I fall short?" the {hero} asked.

{companion_name} tilted their head. "Then you will have tried, which is more than standing still ever does. You do not have to be better than that bigger kid. You do not have to be better than anyone here. You only have to trust your own small steady light and go."

The {hero} thought about Level Four, about the day they had learned that brave was not the absence of scared, that brave was being scared and stepping forward anyway. This felt like the quiet other half of that. Not a big roar of courage. Just a small, settled yes, said low and meant.

For the longest time the {hero} had believed confidence meant the fear going silent first, that one day the nerves would simply pack up and leave, and then, finally, it would be safe to begin. But the nerves never packed up. They just waited, the same as always. And maybe, the {hero} thought, they did not really get a vote.

The {hero} let out one long breath. The shoulders dropped. The hands came apart and hung loose.

"Okay," the {hero} said, mostly to themselves. "I can try."

And that was the whole beginning of it, those three plain words, said not loudly and not to impress anyone, just said and meant and let go of.

The {hero} took the first step. Then the second. {companion_name} stayed exactly where they were, hands folded, not reaching out, not steadying, letting this belong entirely to the {hero}.

It was not smooth. Halfway through, the {hero} wobbled and had to stop, breathing hard, the pulse going quick and light in the throat. The old thought came knocking, the one that said this would be a perfectly fine place to quit and no one would blame you. But the {hero} did not quit. The {hero} found the next small move, and made it, and then reached for the one after that.

Steady, the {hero} thought. Small and steady. That is enough. That is all it ever had to be. The wobble passed. The breath came back. The {hero} kept both eyes on the next small handhold and nowhere else, and the bigger kid and the watching and the whole crowd of it seemed to quietly fall away, until there was only the {hero} and the next move and the one after that.

And then, almost before it seemed possible, the {hero} was through. The new thing was behind them now, finished, done, turned into something the {hero} had actually done instead of something the {hero} was afraid of. It had changed shape completely, just by being attempted.

The {hero} stood there, a little breathless, looking back at how far the whole thing had really been.

{companion_name} rose and walked over, and did not make a big fuss about it, which somehow made it mean more. "You went on your own," {companion_name} said. "I watched the whole way. I did not do a single bit of it for you."

The {hero} held the {object_motif} against their chest and felt the quick heart slow itself back down, beat by beat. Over {setting}, the light was going soft and gold, the way it does when a long day finally decides it is ready to rest.

The {hero} did not feel like the bravest, or the best, or the most ready. The {hero} just felt quietly, steadily sure, in a way that seemed like it would still be there in the morning, waiting, whenever the next new thing came along.

{refrain}.`, scriptTemplate: `{child_name} had been standing at the edge of {setting} for a long time now, and the new thing still had not gotten any smaller. If anything, the longer {child_name} looked at it, the bigger it seemed to grow.

{child_name} had watched this same scene enough times to know the pattern by heart. First the wanting. Then the edging closer. Then the long, stalling pause where the wanting quietly lost to the worrying, and {child_name} drifted back to the safe part of {setting} to try again some other day that never quite arrived.

It was the sort of new thing {child_name} had never tried before, the kind that made your stomach fold over on itself. All around, other kids were doing it like it was nothing. One of them, a bigger kid, went first, then went again, easy as breathing, and called out over a shoulder that it was not even hard.

{child_name} pressed both hands together to keep them from fidgeting. That was the tell, the thing that always happened right before giving up. Press the hands. Look away. Decide that maybe today was not the day after all, that there would be a better time, a braver morning, some future version of {child_name} who would find all of this simple.

{companion_name} noticed, and came over, and sat down on the cool ground beside {child_name} without a word. For a while {companion_name} said nothing at all, and somehow that helped more than a whole speech would have.

"Everybody else already knows how," {child_name} finally said. "They make it look simple. I keep standing here waiting to feel ready, and the ready feeling just never shows up."

"It might not show up," {companion_name} said gently. "Ready is not something you wait for. It is something you find on the way. You do not have to feel it first."

{child_name} turned the {object_motif} over and over in two hands. It was a solid, steady weight, the same as always, and it did not seem to mind in the least whether {child_name} felt brave or not.

"But what if everyone is watching, and I try, and I fall short?" {child_name} asked.

{companion_name} tilted their head. "Then you will have tried, which is more than standing still ever does. You do not have to be better than that bigger kid. You do not have to be better than anyone here. You only have to trust your own small steady light and go."

{child_name} thought about Level Four, about the day they had learned that brave was not the absence of scared, that brave was being scared and stepping forward anyway. This felt like the quiet other half of that. Not a big roar of courage. Just a small, settled yes, said low and meant.

For the longest time {child_name} had believed confidence meant the fear going silent first, that one day the nerves would simply pack up and leave, and then, finally, it would be safe to begin. But the nerves never packed up. They just waited, the same as always. And maybe, {child_name} thought, they did not really get a vote.

{child_name} let out one long breath. The shoulders dropped. The hands came apart and hung loose.

"Okay," {child_name} said, mostly to themselves. "I can try."

And that was the whole beginning of it, those three plain words, said not loudly and not to impress anyone, just said and meant and let go of.

{child_name} took the first step. Then the second. {companion_name} stayed exactly where they were, hands folded, not reaching out, not steadying, letting this belong entirely to {child_name}.

It was not smooth. Halfway through, {child_name} wobbled and had to stop, breathing hard, the pulse going quick and light in the throat. The old thought came knocking, the one that said this would be a perfectly fine place to quit and no one would blame you. But {child_name} did not quit. {child_name} found the next small move, and made it, and then reached for the one after that.

Steady, {child_name} thought. Small and steady. That is enough. That is all it ever had to be. The wobble passed. The breath came back. {child_name} kept both eyes on the next small handhold and nowhere else, and the bigger kid and the watching and the whole crowd of it seemed to quietly fall away, until there was only {child_name} and the next move and the one after that.

And then, almost before it seemed possible, {child_name} was through. The new thing was behind them now, finished, done, turned into something {child_name} had actually done instead of something {child_name} was afraid of. It had changed shape completely, just by being attempted.

{child_name} stood there, a little breathless, looking back at how far the whole thing had really been.

{companion_name} rose and walked over, and did not make a big fuss about it, which somehow made it mean more. "You went on your own," {companion_name} said. "I watched the whole way. I did not do a single bit of it for you."

{child_name} held the {object_motif} against their chest and felt the quick heart slow itself back down, beat by beat. Over {setting}, the light was going soft and gold, the way it does when a long day finally decides it is ready to rest.

{child_name} did not feel like the bravest, or the best, or the most ready. {child_name} just felt quietly, steadily sure, in a way that seemed like it would still be there in the morning, waiting, whenever the next new thing came along.

{refrain}.` },
  '9-11': { audioTemplate: `The {hero} had learned, over a long string of days, exactly what the feeling meant when it arrived, and it was arriving now. It came as a tightening just under the ribs, a sudden and convenient interest in anything other than the thing directly ahead, a quiet and very reasonable-sounding voice that suggested there would surely be a better time to attempt this. The edge of {setting} was as good a place as any to meet that voice, and the {hero} had met it here before, more than once.

The new thing waited a little way off. It did not matter, in the end, precisely what it was, a climb, a crossing, a first real attempt at something that could not be rehearsed in secret beforehand. What mattered was that the {hero} had never done it, and that other people had, and that some of them were doing it now with an ease that made the whole business look faintly ridiculous to be afraid of at all.

A bigger kid finished it, turned, and shrugged in that careless way that says this is nothing, why are you still standing there. The {hero} felt the old, familiar arithmetic begin, the silent tallying of everyone who could already do the thing, set against a column with only the {hero} in it. It was the kind of math that never came out in your favor, because it was never really about the numbers to begin with.

The trouble with the arithmetic was that it felt like humility, like simply being honest about where the {hero} stood. But it was not honesty. It was a story, told often enough to sound like a fact, and its only real purpose was to build a reason not to begin. The {hero} had started, lately, to recognize the shape of it even while it was happening, which was not the same as being free of it, but was maybe the first step toward being free.

The {hero} noticed that both hands had gone to the {object_motif}, turning it slowly, the way they always did when the deciding got hard. It was a plain, steady weight in the palms, unbothered, entirely indifferent to whether the {hero} succeeded or hesitated or simply walked quietly away. There was something almost restful in that. The {object_motif} did not need the {hero} to be impressive. It sat there being exactly what it was, and asked for nothing.

There had been a time, not even so long ago, when the {hero} would have needed someone to promise it would go well before taking a single step, some guarantee pinned to the outcome. That was gone now, or mostly gone. The {hero} had learned, slowly, that no such promise was ever actually on offer, and that waiting for one was just another polished way of never starting at all.

{companion_name} did not rush over with a bright armful of encouragement. That was not their way, and the {hero} had come, over time, to be grateful for it. {companion_name} crossed the distance slowly and settled nearby, near enough to be felt, far enough to leave room, and let the silence do the first part of the work.

"I keep thinking I will feel different before I try," the {hero} said at last. "Older. Surer. Like one morning I will wake up and finally just be the kind of person who does things like this without the whole knot in the stomach. But that morning never seems to actually come."

{companion_name} was quiet for a moment. "I do not think it comes for anyone. The sureness you are waiting for is on the other side of the trying, not this side. You keep standing at the door, asking to feel like someone who has already walked through it."

The {hero} almost laughed, because it was exactly true, and because being seen that clearly was both a little uncomfortable and a strange kind of relief at the same time.

"But everyone here is better than me," the {hero} said.

"Maybe," said {companion_name}, unbothered. "That is not really the question. You do not have to be better than them. You do not have to be fearless, or ready, or the best one at the edge of {setting}. You only have to trust that small steady light you carry, and take one honest step. Everything else is just noise."

"And if the light feels very small?" the {hero} asked.

"Small is fine," {companion_name} said. "It does not have to be a bonfire. It only has to not go out."

The {hero} sat with that. Somewhere back down the path was Level Four, the day it had finally landed that brave did not mean the fear was gone, that brave was simply being afraid and moving anyway. This felt like the older, quieter cousin of that lesson. Not the loud courage that has to psych itself up and roar first. Something calmer. A confidence that did not depend on feeling brave at all, that could stay perfectly steady even when the fear stayed too, because it was never built on the fear being absent. It was built on something underneath, something the {hero} had apparently been carrying the whole time without quite noticing it was there.

The fear did not vanish. The {hero} understood now that it probably would not, not this time and not most times, and that this was somehow fine. You did not have to wait for the fear to leave the room. You only had to stop handing it the pen.

The {hero} breathed out, slow and complete, and felt the tight thing under the ribs loosen just enough to move. The reasonable voice made its last, best offer, the polished one about waiting for a better and braver day. The {hero} let it finish speaking, and then, gently, did not take it.

"I can try," the {hero} said.

The words were not loud. They were not aimed at the bigger kid, or at anyone else watching. They were said the way you say a true thing to yourself, plainly, without ceremony, and once said they seemed to quietly settle the whole matter.

The {hero} stepped forward. {companion_name} stayed exactly where they were, hands still, offering nothing at all but their steady, watching presence. This was going to belong to the {hero}, all of it, the wobble and the recovery and the finish, and {companion_name} clearly had no intention of taking any part of it away by helping.

It was not clean. Partway through, the {hero} faltered, and had to stop, and stand there with a quick pulse ticking in the throat while the old invitation to quit came around one more time, dressed up neatly as common sense. But the {hero} had already decided, back at the edge, and a decision made in advance turns out to be a strong thing to lean on when the middle gets hard. The {hero} found the next small move. Made it. Found the one after that, and made that too.

The faltering did not undo anything. It was just part of the shape of trying, the {hero} understood now, not a signal to stop but simply the middle of the thing, the unglamorous part no one watching ever remembers afterward. The {hero} breathed, and found the rhythm again, and let the whole world narrow down to the small honest work of the next move.

Steady, the {hero} thought. Not fast, not perfect. Just steady, and mine.

And then it was done, folded neatly into the past, changed from a thing the {hero} feared into a thing the {hero} had simply, quietly, done. The {hero} stood on the far side of it, breathing, a little astonished, and turned to find {companion_name} already smiling that unhurried smile.

"You went alone," {companion_name} said, coming over without any fuss. "I did not help. I did not have to."

The {hero} held the {object_motif} loosely now, the deciding long over, and noticed that the pride was not the sharp, showy kind that needs a crowd to exist. It was low and level and warm, the kind that would still be there in the morning, and the morning after that. This, the {hero} thought, was where the whole long path had been quietly heading all along, not toward becoming fearless, not toward becoming the best, but toward a steadiness that asked no one's permission and could be carried anywhere. Over {setting} the light had gone the deep, unhurried blue of a day laying itself gently down to rest, and the {hero} felt no urge at all to prove anything to anyone, only a settled, private certainty that whatever new thing came next, this same three-word answer would be waiting inside, and that it would be enough.

{refrain}.`, scriptTemplate: `{child_name} had learned, over a long string of days, exactly what the feeling meant when it arrived, and it was arriving now. It came as a tightening just under the ribs, a sudden and convenient interest in anything other than the thing directly ahead, a quiet and very reasonable-sounding voice that suggested there would surely be a better time to attempt this. The edge of {setting} was as good a place as any to meet that voice, and {child_name} had met it here before, more than once.

The new thing waited a little way off. It did not matter, in the end, precisely what it was, a climb, a crossing, a first real attempt at something that could not be rehearsed in secret beforehand. What mattered was that {child_name} had never done it, and that other people had, and that some of them were doing it now with an ease that made the whole business look faintly ridiculous to be afraid of at all.

A bigger kid finished it, turned, and shrugged in that careless way that says this is nothing, why are you still standing there. {child_name} felt the old, familiar arithmetic begin, the silent tallying of everyone who could already do the thing, set against a column with only {child_name} in it. It was the kind of math that never came out in your favor, because it was never really about the numbers to begin with.

The trouble with the arithmetic was that it felt like humility, like simply being honest about where {child_name} stood. But it was not honesty. It was a story, told often enough to sound like a fact, and its only real purpose was to build a reason not to begin. {child_name} had started, lately, to recognize the shape of it even while it was happening, which was not the same as being free of it, but was maybe the first step toward being free.

{child_name} noticed that both hands had gone to the {object_motif}, turning it slowly, the way they always did when the deciding got hard. It was a plain, steady weight in the palms, unbothered, entirely indifferent to whether {child_name} succeeded or hesitated or simply walked quietly away. There was something almost restful in that. The {object_motif} did not need {child_name} to be impressive. It sat there being exactly what it was, and asked for nothing.

There had been a time, not even so long ago, when {child_name} would have needed someone to promise it would go well before taking a single step, some guarantee pinned to the outcome. That was gone now, or mostly gone. {child_name} had learned, slowly, that no such promise was ever actually on offer, and that waiting for one was just another polished way of never starting at all.

{companion_name} did not rush over with a bright armful of encouragement. That was not their way, and {child_name} had come, over time, to be grateful for it. {companion_name} crossed the distance slowly and settled nearby, near enough to be felt, far enough to leave room, and let the silence do the first part of the work.

"I keep thinking I will feel different before I try," {child_name} said at last. "Older. Surer. Like one morning I will wake up and finally just be the kind of person who does things like this without the whole knot in the stomach. But that morning never seems to actually come."

{companion_name} was quiet for a moment. "I do not think it comes for anyone. The sureness you are waiting for is on the other side of the trying, not this side. You keep standing at the door, asking to feel like someone who has already walked through it."

{child_name} almost laughed, because it was exactly true, and because being seen that clearly was both a little uncomfortable and a strange kind of relief at the same time.

"But everyone here is better than me," {child_name} said.

"Maybe," said {companion_name}, unbothered. "That is not really the question. You do not have to be better than them. You do not have to be fearless, or ready, or the best one at the edge of {setting}. You only have to trust that small steady light you carry, and take one honest step. Everything else is just noise."

"And if the light feels very small?" {child_name} asked.

"Small is fine," {companion_name} said. "It does not have to be a bonfire. It only has to not go out."

{child_name} sat with that. Somewhere back down the path was Level Four, the day it had finally landed that brave did not mean the fear was gone, that brave was simply being afraid and moving anyway. This felt like the older, quieter cousin of that lesson. Not the loud courage that has to psych itself up and roar first. Something calmer. A confidence that did not depend on feeling brave at all, that could stay perfectly steady even when the fear stayed too, because it was never built on the fear being absent. It was built on something underneath, something {child_name} had apparently been carrying the whole time without quite noticing it was there.

The fear did not vanish. {child_name} understood now that it probably would not, not this time and not most times, and that this was somehow fine. You did not have to wait for the fear to leave the room. You only had to stop handing it the pen.

{child_name} breathed out, slow and complete, and felt the tight thing under the ribs loosen just enough to move. The reasonable voice made its last, best offer, the polished one about waiting for a better and braver day. {child_name} let it finish speaking, and then, gently, did not take it.

"I can try," {child_name} said.

The words were not loud. They were not aimed at the bigger kid, or at anyone else watching. They were said the way you say a true thing to yourself, plainly, without ceremony, and once said they seemed to quietly settle the whole matter.

{child_name} stepped forward. {companion_name} stayed exactly where they were, hands still, offering nothing at all but their steady, watching presence. This was going to belong to {child_name}, all of it, the wobble and the recovery and the finish, and {companion_name} clearly had no intention of taking any part of it away by helping.

It was not clean. Partway through, {child_name} faltered, and had to stop, and stand there with a quick pulse ticking in the throat while the old invitation to quit came around one more time, dressed up neatly as common sense. But {child_name} had already decided, back at the edge, and a decision made in advance turns out to be a strong thing to lean on when the middle gets hard. {child_name} found the next small move. Made it. Found the one after that, and made that too.

The faltering did not undo anything. It was just part of the shape of trying, {child_name} understood now, not a signal to stop but simply the middle of the thing, the unglamorous part no one watching ever remembers afterward. {child_name} breathed, and found the rhythm again, and let the whole world narrow down to the small honest work of the next move.

Steady, {child_name} thought. Not fast, not perfect. Just steady, and mine.

And then it was done, folded neatly into the past, changed from a thing {child_name} feared into a thing {child_name} had simply, quietly, done. {child_name} stood on the far side of it, breathing, a little astonished, and turned to find {companion_name} already smiling that unhurried smile.

"You went alone," {companion_name} said, coming over without any fuss. "I did not help. I did not have to."

{child_name} held the {object_motif} loosely now, the deciding long over, and noticed that the pride was not the sharp, showy kind that needs a crowd to exist. It was low and level and warm, the kind that would still be there in the morning, and the morning after that. This, {child_name} thought, was where the whole long path had been quietly heading all along, not toward becoming fearless, not toward becoming the best, but toward a steadiness that asked no one's permission and could be carried anywhere. Over {setting} the light had gone the deep, unhurried blue of a day laying itself gently down to rest, and {child_name} felt no urge at all to prove anything to anyone, only a settled, private certainty that whatever new thing came next, this same three-word answer would be waiting inside, and that it would be enough.

{refrain}.` }
},
    audioTemplate: `Under the wide night over {setting}, something new and uncertain waited for the {hero}. The {object_motif} glowed steadily within.

Once, the {hero} would have waited to feel ready, or fearless, or as good as everyone else. But they knew better now.

They did not have to feel ready — they could begin unsure. They had their own brave voice. Their path was their own, not a race against anyone. And being scared did not stop them; brave was scared and trying.

So the {hero} stood quietly before the new thing, not certain it would work, and felt the small, steady light that was theirs and always had been.

"I do not know if I will get it right," they said, calm and clear. "But I can try."

And those three words held everything. Not loud. Not certain. Just enough.

"That," said {companion_name} softly, "is confidence. Not knowing you will win — knowing you are willing to try."

The {hero} stepped forward into the new, their {object_motif} glowing warm and whole.

{refrain}.`,
    scriptTemplate: `Under the wide night over {setting}, something new and uncertain waited for {child_name} the {hero}. The {object_motif} glowed steadily within.

Once, {child_name} would have waited to feel ready, or fearless, or as good as everyone else. But {child_name} knew better now.

They did not have to feel ready — they could begin unsure. They had their own brave voice. Their path was their own, not a race against anyone. And being scared did not stop them; brave was scared and trying.

So {child_name} stood quietly before the new thing, not certain it would work, and felt the small, steady light that was theirs and always had been.

"I do not know if I will get it right," {child_name} said, calm and clear. "But I can try."

And those three words held everything. Not loud. Not certain. Just enough.

"That," said {companion_name} softly, "is confidence. Not knowing you will win — knowing you are willing to try."

{child_name} stepped forward into the new, their {object_motif} glowing warm and whole.

{refrain}.`,
  },
]
