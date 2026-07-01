// content/resilience/levels.ts
//
// Resilience path — 5 levels, each age-tuned (3-4 / 5-6 / 7-8 / 9-11) for length
// and sophistication. The default templates stay short (used for generic voice
// samples). The learningBeat must appear verbatim in every template.

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1,
    title: "It’s Okay to Find It Hard",
    concept: "Hard things are meant to feel hard at first",
    callback: null,
    ageFloor: 3,
    summary: "A small hero tries something new, finds it difficult, and decides they must just be bad at it. Their companion shares a gentle secret: hard things are supposed to feel hard at the start — that feeling is a sign of learning, not a sign to stop.",
    teachingNote: "Before a child can persist, they need permission to struggle — naming \"hard is normal\" removes the shame that makes them quit.",
    learningBeat: "It is okay to find it hard",
    ageVariants: {
      '3-4': {
        audioTemplate: `The {hero} wanted to learn something new. In {setting}, a line of smooth stones crossed a little stream. The {hero} wanted to hop from stone to stone, all the way across.

The {hero} looked at the first stone. Hop. Wobble, wobble. Slip! One little foot splashed in the water. The {hero} tried again. Hop. Wobble. Slip! Both feet got wet this time.

The {hero} sat down on the bank. "I cannot do this," said the {hero}. "I keep slipping. I must be bad at hopping. I think I should just stop."

Soft footsteps came close. It was {companion_name}, carrying a small, glowing {object_motif}.

"Little one, why so sad?" they asked gently.

"Hopping is too hard," said the {hero}. "Everyone else can do it. I only fall. I want to quit."

{companion_name} sat down beside the {hero}. "It is okay to find it hard," they said. "Listen closely. Hard things are supposed to feel hard at the start. That wobbly, tricky feeling is not a bad sign. It is the feeling of learning. It means you are growing, not that you should stop."

The {hero} looked up. "The hard feeling means I am learning?"

"Yes," said {companion_name}. "Every good hopper wobbled first. Even me. Would you try one more time? Slow and gentle. I will stay right here."

The {hero} took a deep breath. The {hero} looked at the first stone and hopped. Steady. The {hero} looked at the next stone and hopped again. Steady! One more. Hop. The {hero} did not slip.

"I did it!" said the {hero}. "It was still a little hard. But I crossed!"

{companion_name} held up the {object_motif}, and it glowed warm and bright. "You did," they said. "And it is okay that it felt hard. That is just how new things feel at the beginning. You were brave. You kept going."

The {hero} smiled a big, sleepy smile. Above {setting}, the first stars blinked awake. The {hero} felt proud and calm and warm.

Hard things can feel hard. That is okay. That is how we learn and grow.

{refrain}`,
        scriptTemplate: `{child_name} wanted to learn something new. In {setting}, a line of smooth stones crossed a little stream. {child_name} wanted to hop from stone to stone, all the way across.

{child_name} looked at the first stone. Hop. Wobble, wobble. Slip! One little foot splashed in the water. {child_name} tried again. Hop. Wobble. Slip! Both feet got wet this time.

{child_name} sat down on the bank. "I cannot do this," said {child_name}. "I keep slipping. I must be bad at hopping. I think I should just stop."

Soft footsteps came close. It was {companion_name}, carrying a small, glowing {object_motif}.

"Little one, why so sad?" they asked gently.

"Hopping is too hard," said {child_name}. "Everyone else can do it. I only fall. I want to quit."

{companion_name} sat down beside {child_name}. "It is okay to find it hard," they said. "Listen closely. Hard things are supposed to feel hard at the start. That wobbly, tricky feeling is not a bad sign. It is the feeling of learning. It means you are growing, not that you should stop."

{child_name} looked up. "The hard feeling means I am learning?"

"Yes," said {companion_name}. "Every good hopper wobbled first. Even me. Would you try one more time? Slow and gentle. I will stay right here."

{child_name} took a deep breath. {child_name} looked at the first stone and hopped. Steady. {child_name} looked at the next stone and hopped again. Steady! One more. Hop. {child_name} did not slip.

"I did it!" said {child_name}. "It was still a little hard. But I crossed!"

{companion_name} held up the {object_motif}, and it glowed warm and bright. "You did," they said. "And it is okay that it felt hard. That is just how new things feel at the beginning. You were brave. You kept going."

{child_name} smiled a big, sleepy smile. Above {setting}, the first stars blinked awake. {child_name} felt proud and calm and warm.

Hard things can feel hard. That is okay. That is how we learn and grow.

{refrain}`,
      },
      '5-6': {
        audioTemplate: `The {hero} had watched the others do it a hundred times. In {setting}, a path of smooth stepping stones crossed the wide stream, and everyone seemed to skip across without a thought. Today, the {hero} decided, was the day to learn.

The {hero} stood at the water's edge and looked at the first stone. It seemed close enough. The {hero} hopped — and wobbled — and slipped, landing with a cold splash. The {hero} climbed out, shivered, and tried again. Hop. Wobble. Splash. A third time. Hop. Slip. Splash.

By now the {hero} was wet and tired and cross. "I cannot do this," the {hero} said, sitting down hard on the bank. "The others make it look easy. I only fall in. I must be bad at this. I am going to stop and never try again."

A gentle voice spoke from nearby. "That sounds like a big feeling." It was {companion_name}, holding a small {object_motif} that caught the light.

"It is too hard," said the {hero}. "I keep getting it wrong. If I were any good, it would be easy by now."

{companion_name} sat down beside the {hero} and thought for a moment. "May I tell you something true?" they asked. "It is okay to find it hard. In fact, hard things are supposed to feel hard when you are just beginning. That difficult, wobbly feeling you have right now? That is not a sign that you are bad at it. That is the feeling of your body and your mind learning something new."

The {hero} frowned. "But it feels like I am failing."

"I know it does," said {companion_name} kindly. "But learning and failing can feel almost the same at the start. The difference is what you do next. If the hard feeling makes you stop, the learning stops too. If you let the hard feeling stay, and try once more, the learning keeps going."

{companion_name} turned the {object_motif} over slowly. "Watch the first stone, not all of them. Small steps. You do not have to cross the whole stream at once."

The {hero} took a slow breath. This time, the {hero} looked only at the first stone. Hop. The {hero} stood there, arms out, wobbling — but not slipping. Then the {hero} looked at the second stone. Hop. Steady. The third. Hop.

The {hero} was standing in the middle of the stream, halfway across, and had not fallen once.

"Keep going," said {companion_name} softly. "One stone at a time."

Hop. Hop. Hop. And then the {hero} was standing on the far bank, dry and amazed.

"I crossed!" the {hero} called out. "It was still hard. My legs were shaking the whole way. But I did it!"

{companion_name} smiled and held up the glowing {object_motif}. "You did. And notice — it did not stop being hard. You just stopped letting the hard part scare you away. That is the secret nobody tells you. Hard is not the enemy. Quitting too soon is."

The {hero} looked back at the line of stones, then at the water, then at {companion_name}. "So next time it feels hard, I do not have to stop?"

"Next time it feels hard," said {companion_name}, "you can smile and think: this is just the feeling of learning. And you can take one more step."

The stars were coming out over {setting}. The {hero} felt tired in a good way, the way you feel after something real. Warm, and proud, and ready to try again tomorrow.

{refrain}`,
        scriptTemplate: `{child_name} had watched the others do it a hundred times. In {setting}, a path of smooth stepping stones crossed the wide stream, and everyone seemed to skip across without a thought. Today, {child_name} decided, was the day to learn.

{child_name} stood at the water's edge and looked at the first stone. It seemed close enough. {child_name} hopped — and wobbled — and slipped, landing with a cold splash. {child_name} climbed out, shivered, and tried again. Hop. Wobble. Splash. A third time. Hop. Slip. Splash.

By now {child_name} was wet and tired and cross. "I cannot do this," {child_name} said, sitting down hard on the bank. "The others make it look easy. I only fall in. I must be bad at this. I am going to stop and never try again."

A gentle voice spoke from nearby. "That sounds like a big feeling." It was {companion_name}, holding a small {object_motif} that caught the light.

"It is too hard," said {child_name}. "I keep getting it wrong. If I were any good, it would be easy by now."

{companion_name} sat down beside {child_name} and thought for a moment. "May I tell you something true?" they asked. "It is okay to find it hard. In fact, hard things are supposed to feel hard when you are just beginning. That difficult, wobbly feeling you have right now? That is not a sign that you are bad at it. That is the feeling of your body and your mind learning something new."

{child_name} frowned. "But it feels like I am failing."

"I know it does," said {companion_name} kindly. "But learning and failing can feel almost the same at the start. The difference is what you do next. If the hard feeling makes you stop, the learning stops too. If you let the hard feeling stay, and try once more, the learning keeps going."

{companion_name} turned the {object_motif} over slowly. "Watch the first stone, not all of them. Small steps. You do not have to cross the whole stream at once."

{child_name} took a slow breath. This time, {child_name} looked only at the first stone. Hop. {child_name} stood there, arms out, wobbling — but not slipping. Then {child_name} looked at the second stone. Hop. Steady. The third. Hop.

{child_name} was standing in the middle of the stream, halfway across, and had not fallen once.

"Keep going," said {companion_name} softly. "One stone at a time."

Hop. Hop. Hop. And then {child_name} was standing on the far bank, dry and amazed.

"I crossed!" {child_name} called out. "It was still hard. My legs were shaking the whole way. But I did it!"

{companion_name} smiled and held up the glowing {object_motif}. "You did. And notice — it did not stop being hard. You just stopped letting the hard part scare you away. That is the secret nobody tells you. Hard is not the enemy. Quitting too soon is."

{child_name} looked back at the line of stones, then at the water, then at {companion_name}. "So next time it feels hard, I do not have to stop?"

"Next time it feels hard," said {companion_name}, "you can smile and think: this is just the feeling of learning. And you can take one more step."

The stars were coming out over {setting}. {child_name} felt tired in a good way, the way you feel after something real. Warm, and proud, and ready to try again tomorrow.

{refrain}`,
      },
      '7-8': {
        audioTemplate: `Every evening, the older ones crossed the stream on the stepping stones without even looking down. In {setting}, the smooth grey stones marched in a curving line from one bank to the other, and to the {hero} they looked like magic. Tonight, the {hero} had decided, would be the night to learn to cross them alone.

The {hero} stood at the edge of the water, heart thumping. The first stone was close. Easy, thought the {hero}. Just hop. So the {hero} hopped — and the moment both feet landed, the world tilted. Arms flew out, one foot skidded, and with a loud, cold splash the {hero} went straight into the stream.

Spluttering, the {hero} climbed back onto the bank. "Fine," the {hero} muttered. "That was just practice." A second try. Splash. A third. Splash. A fourth try, and this time the {hero} nearly made it to the second stone before slipping sideways into the water.

The {hero} sat down on the muddy bank, soaked to the bone and blinking hard so the tears would not come. "I cannot do this," the {hero} whispered. "The others do it without even trying. I have fallen in four times. There is clearly something wrong with me. I am just bad at this, and I should stop before I fall in again."

"Four times?" said a warm voice. "That is four times braver than someone who never tried at all."

The {hero} looked up. {companion_name} was standing on the bank, holding a small {object_motif} that glowed softly in the dusk.

"It is not brave, it is embarrassing," said the {hero}, wiping a wet cheek. "Everyone else finds this easy. If I were any good, I would have crossed by now. It is too hard."

{companion_name} came and sat beside the {hero} on the damp grass. For a while they said nothing at all, just watched the water slide by. Then they spoke.

"Can I tell you a secret that took me a long time to learn?" they asked. "It is okay to find it hard. Truly. Hard things are supposed to feel hard when you begin them. That difficult, shaky, I-want-to-give-up feeling you have right now — everyone feels it. The others you watched crossing so easily? They all felt exactly this when they started. You just did not see that part."

"But it feels like failing," said the {hero}.

"I know," said {companion_name} gently. "Here is the tricky thing. When you learn something new, failing and learning feel almost the same. Falling in the water is not proof that you are bad at crossing. It is proof that you are learning to cross. The wobble is the lesson. If you quit now, you would be quitting right in the middle of getting better."

The {hero} looked at the {object_motif} in {companion_name}'s hands. It was small and steady and calm.

"When you crossed the first time," the {hero} asked, "did you fall in?"

{companion_name} laughed softly. "More times than you have. I stopped counting. And every single time, a voice in my head said, stop, you are no good at this. I am very glad I did not listen to it."

The {hero} was quiet for a moment. Then, slowly, the {hero} stood up. "Will you stay?" the {hero} asked. "While I try one more time?"

"I am not going anywhere," said {companion_name}. "But this time, do not look at the whole stream. Look at the first stone only. Just that one. Cross it in your mind before you cross it with your feet."

The {hero} took a deep, shaky breath and looked — really looked — at the first stone. Not the whole crossing. Just the first step. Then the {hero} hopped. Arms out, knees soft, eyes down. Wobble. Wobble. Steady.

The {hero} was standing on the first stone, and had not fallen.

"Now the next," said {companion_name} quietly. "One stone at a time."

Hop. Steady. Hop. Steady. The {hero} moved slowly along the curving line, wobbling on every stone, catching balance every time. Halfway across, a foot slipped — but this time the {hero} bent low, spread both arms, and held on instead of tumbling in.

"I nearly fell!" the {hero} called out.

"But you did not," said {companion_name}. "You caught yourself. That is new too."

Three more stones. Two. One. And then the {hero} stepped onto the far bank, still dripping from before, legs trembling, grinning so wide it almost hurt.

"I crossed!" the {hero} shouted across the water. "It was so hard! My legs were shaking the whole way! But I did it, I really did it!"

{companion_name} lifted the glowing {object_motif} in salute, and its warm light reached all the way across the stream. "You did. And listen closely, because this is the part that matters most. It did not get easy. You crossed while it was still hard. That is the real trick. Brave is not waiting until something feels easy. Brave is taking one more step while it still feels hard."

The stars were bright now over {setting}. The {hero} looked back at the line of stones — the stones that had beaten the {hero} four times and then, at last, had not.

"So the hard feeling," said the {hero} slowly, "was not telling me to stop."

"No," said {companion_name}. "It was telling you that you were learning. It always is."

And warm, and tired, and proud, the {hero} sat down on the far bank to rest.

{refrain}`,
        scriptTemplate: `Every evening, the older ones crossed the stream on the stepping stones without even looking down. In {setting}, the smooth grey stones marched in a curving line from one bank to the other, and to {child_name} they looked like magic. Tonight, {child_name} had decided, would be the night to learn to cross them alone.

{child_name} stood at the edge of the water, heart thumping. The first stone was close. Easy, thought {child_name}. Just hop. So {child_name} hopped — and the moment both feet landed, the world tilted. Arms flew out, one foot skidded, and with a loud, cold splash {child_name} went straight into the stream.

Spluttering, {child_name} climbed back onto the bank. "Fine," {child_name} muttered. "That was just practice." A second try. Splash. A third. Splash. A fourth try, and this time {child_name} nearly made it to the second stone before slipping sideways into the water.

{child_name} sat down on the muddy bank, soaked to the bone and blinking hard so the tears would not come. "I cannot do this," {child_name} whispered. "The others do it without even trying. I have fallen in four times. There is clearly something wrong with me. I am just bad at this, and I should stop before I fall in again."

"Four times?" said a warm voice. "That is four times braver than someone who never tried at all."

{child_name} looked up. {companion_name} was standing on the bank, holding a small {object_motif} that glowed softly in the dusk.

"It is not brave, it is embarrassing," said {child_name}, wiping a wet cheek. "Everyone else finds this easy. If I were any good, I would have crossed by now. It is too hard."

{companion_name} came and sat beside {child_name} on the damp grass. For a while they said nothing at all, just watched the water slide by. Then they spoke.

"Can I tell you a secret that took me a long time to learn?" they asked. "It is okay to find it hard. Truly. Hard things are supposed to feel hard when you begin them. That difficult, shaky, I-want-to-give-up feeling you have right now — everyone feels it. The others you watched crossing so easily? They all felt exactly this when they started. You just did not see that part."

"But it feels like failing," said {child_name}.

"I know," said {companion_name} gently. "Here is the tricky thing. When you learn something new, failing and learning feel almost the same. Falling in the water is not proof that you are bad at crossing. It is proof that you are learning to cross. The wobble is the lesson. If you quit now, you would be quitting right in the middle of getting better."

{child_name} looked at the {object_motif} in {companion_name}'s hands. It was small and steady and calm.

"When you crossed the first time," {child_name} asked, "did you fall in?"

{companion_name} laughed softly. "More times than you have. I stopped counting. And every single time, a voice in my head said, stop, you are no good at this. I am very glad I did not listen to it."

{child_name} was quiet for a moment. Then, slowly, {child_name} stood up. "Will you stay?" {child_name} asked. "While I try one more time?"

"I am not going anywhere," said {companion_name}. "But this time, do not look at the whole stream. Look at the first stone only. Just that one. Cross it in your mind before you cross it with your feet."

{child_name} took a deep, shaky breath and looked — really looked — at the first stone. Not the whole crossing. Just the first step. Then {child_name} hopped. Arms out, knees soft, eyes down. Wobble. Wobble. Steady.

{child_name} was standing on the first stone, and had not fallen.

"Now the next," said {companion_name} quietly. "One stone at a time."

Hop. Steady. Hop. Steady. {child_name} moved slowly along the curving line, wobbling on every stone, catching balance every time. Halfway across, a foot slipped — but this time {child_name} bent low, spread both arms, and held on instead of tumbling in.

"I nearly fell!" {child_name} called out.

"But you did not," said {companion_name}. "You caught yourself. That is new too."

Three more stones. Two. One. And then {child_name} stepped onto the far bank, still dripping from before, legs trembling, grinning so wide it almost hurt.

"I crossed!" {child_name} shouted across the water. "It was so hard! My legs were shaking the whole way! But I did it, I really did it!"

{companion_name} lifted the glowing {object_motif} in salute, and its warm light reached all the way across the stream. "You did. And listen closely, because this is the part that matters most. It did not get easy. You crossed while it was still hard. That is the real trick. Brave is not waiting until something feels easy. Brave is taking one more step while it still feels hard."

The stars were bright now over {setting}. {child_name} looked back at the line of stones — the stones that had beaten {child_name} four times and then, at last, had not.

"So the hard feeling," said {child_name} slowly, "was not telling me to stop."

"No," said {companion_name}. "It was telling you that you were learning. It always is."

And warm, and tired, and proud, {child_name} sat down on the far bank to rest.

{refrain}`,
      },
      '9-11': {
        audioTemplate: `There was a way across the ravine that only the older ones seemed to know. In {setting}, the stream ran deep and quick between two banks, and the only crossing was a scattered line of stepping stones — some flat, some tilted, some barely breaking the surface — that curved out into the current and back again like a half-drawn bridge. Every evening the {hero} watched the others read that line of stones the way you might read a familiar sentence, stepping quick and certain, never once looking as though they might fall. And every evening the {hero} stayed behind on the near bank, promising that tomorrow would be the day.

Tonight there was no more tomorrow to hide behind. The others had already crossed and gone ahead, and the light was thinning to a bruised gold over the water. To reach the far side before dark, the {hero} would have to cross alone.

So the {hero} rolled up both sleeves, fixed both eyes on the first stone, and stepped out.

The first stone was fine. The second was fine. On the third, the stone tilted underfoot — just slightly, a shift the {hero} had not expected — and the whole crossing seemed to lurch. Arms wheeling, breath caught high and tight, the {hero} grabbed for a balance that was not there and went down hard into the water. The cold hit like a slap. The current tugged with a patient, steady strength, and it took two clumsy, gasping tries for the {hero} to climb back onto the near bank.

The {hero} tried again. And again. Each time the {hero} got a little further before the same thing happened: a stone tilting where a stone should have been solid, a foot sliding on slick green weed, the sudden sickening lurch and then the cold. By the fifth fall the {hero} was soaked through and shivering, fingers pale and stiff, and something worse than cold had settled behind the ribs.

The {hero} sat down on the bank, knees drawn up, and stared at the stones with a kind of quiet fury.

"I cannot do this," said the {hero}, and the words came out flat and certain. "I have tried and tried, and I just keep falling in. The others do it without even thinking. There is obviously something they have that I do not. I am simply bad at this. The sensible thing — the only thing — is to stop, before I fall in again and freeze."

It was, the {hero} decided, not giving up. It was just being reasonable. There was a difference. Wasn't there?

"That," said a voice from behind, "is the most dangerous thought there is. Because it sounds so much like wisdom."

The {hero} turned. {companion_name} had come down to the water's edge without a sound and now stood there, turning a small {object_motif} over and over, the way some people fiddle with a thing while thinking carefully about what to say.

"It is not a thought, it is a fact," said the {hero}, hating how thick the words had gone. "Five times I have fallen. Five. If I were any good at this, I would have crossed by now. It is too hard."

{companion_name} did not argue. They came and sat on the cold stone beside the {hero}, and for a long moment they only watched the current pull threads of gold across the dark water. When they finally spoke, it was slowly, as though each word had been weighed.

"It is okay to find it hard," they said. "I want you to really hear that, because I think you have it backwards, and almost everyone does at first. You have decided that because this is hard, it means you are bad at it, and that you should stop. But hard is not a verdict. Hard is simply what the beginning of a difficult thing feels like — every single time, for every single person. That shaky, humiliated, I-should-quit feeling in your chest right now? That is not the feeling of failing. That is the exact feeling of learning something actually worth learning."

"It does not feel like learning," said the {hero}. "It feels like drowning, slightly."

{companion_name} laughed, quiet and kind. "Yes. It often does. Here is the part nobody tells you. When you watch the others cross so easily, you are watching the end of their story, not the beginning. Every one of them fell in that water. Every one of them sat on this exact bank, soaked and furious, certain they were the only one who could not manage it. You did not see that part, so you assumed it never happened. But the difference between them and you tonight is not talent. It is only that they fell in a few more times than you have — and did not stop."

The {hero} said nothing. Out in the current, the water folded and unfolded over the tilted third stone, the one that had done the throwing every time.

"The third stone moves," said the {hero} at last, almost to no one. "It tilts. I keep putting my weight down as though it will hold, and it does not."

"Ah," said {companion_name}, and there was something pleased in their voice. "Now that — that is not the sound of someone who is bad at this. That is the sound of someone who is learning. You just told me something about the crossing you did not know an hour ago. So. If the third stone tilts, what might you do differently?"

The {hero} thought. "Step on the edge nearest the bank. Keep moving. Do not stop and stand on it."

"Then you already know more than you did when you decided to quit," said {companion_name}, and held up the {object_motif}, which in the last of the light glowed with a small, steady warmth. "One more time. Not because it will suddenly be easy — it will not be. But because the only way the hard part ever shrinks is if you walk into it once more while it is still hard."

The {hero} did not feel brave. Both legs were shaking, the chest was tight, and every reasonable part wanted to go home. But the {hero} stood up anyway, looked at the first stone — only the first — and stepped out.

First stone. Second. And then the third, the tilting one — and this time the {hero} did not plant a foot and wait. The {hero} touched the near edge lightly, the way you might touch something hot, and was already moving to the fourth before the stone could betray anyone. The tilt came, but the {hero} was no longer standing there to be thrown.

Fourth stone. Fifth. The current hissed and pulled, and on the sixth stone a foot slipped on weed and the whole world lurched sideways — but the {hero} bent low, dropped low and heavy, spread both arms wide, and held. No fall. Just the {hero}, crouched in the middle of the ravine with the water roaring beneath, heart slamming, holding on.

"I nearly went in," gasped the {hero}.

"You nearly did," {companion_name} agreed from the bank. "And you did not. Keep going. One stone at a time."

The {hero} did not cross gracefully. The {hero} crossed slowly, wobbling, arms out, teeth gritted, reading each stone in turn instead of trusting the whole line at once. But the {hero} crossed. When one foot came down at last on the solid earth of the far bank, both legs nearly folded, and the {hero} turned to look back at the crooked line of stones just beaten, and began, helplessly, to laugh.

"I did it!" called the {hero} across the water, voice cracking. "It was awful the whole way. My legs are still shaking. It never once felt easy. But I did it!"

"No," {companion_name} called back, lifting the glowing {object_motif} high so its light stretched all the way across the ravine. "It did not feel easy — and that is precisely the point. You crossed while it was still hard. That is the only kind of crossing there is. Anyone can manage a thing once it has stopped being difficult. What you just did — moving forward while your whole body begged you to stop — that is the thing almost no one learns. Remember this feeling. The next time something is hard, do not read it as a wall. Read it as a beginning."

Above {setting}, the first stars had come out, sharp and clear over the darkening water. The {hero} sat down on the far bank, soaked and trembling and grinning, and understood, in a way that would not be forgotten, that the hard feeling had never once been an order to stop. It had been saying, the whole time, that the {hero} was learning.

{refrain}`,
        scriptTemplate: `There was a way across the ravine that only the older ones seemed to know. In {setting}, the stream ran deep and quick between two banks, and the only crossing was a scattered line of stepping stones — some flat, some tilted, some barely breaking the surface — that curved out into the current and back again like a half-drawn bridge. Every evening {child_name} watched the others read that line of stones the way you might read a familiar sentence, stepping quick and certain, never once looking as though they might fall. And every evening {child_name} stayed behind on the near bank, promising that tomorrow would be the day.

Tonight there was no more tomorrow to hide behind. The others had already crossed and gone ahead, and the light was thinning to a bruised gold over the water. To reach the far side before dark, {child_name} would have to cross alone.

So {child_name} rolled up both sleeves, fixed both eyes on the first stone, and stepped out.

The first stone was fine. The second was fine. On the third, the stone tilted underfoot — just slightly, a shift {child_name} had not expected — and the whole crossing seemed to lurch. Arms wheeling, breath caught high and tight, {child_name} grabbed for a balance that was not there and went down hard into the water. The cold hit like a slap. The current tugged with a patient, steady strength, and it took two clumsy, gasping tries for {child_name} to climb back onto the near bank.

{child_name} tried again. And again. Each time {child_name} got a little further before the same thing happened: a stone tilting where a stone should have been solid, a foot sliding on slick green weed, the sudden sickening lurch and then the cold. By the fifth fall {child_name} was soaked through and shivering, fingers pale and stiff, and something worse than cold had settled behind the ribs.

{child_name} sat down on the bank, knees drawn up, and stared at the stones with a kind of quiet fury.

"I cannot do this," said {child_name}, and the words came out flat and certain. "I have tried and tried, and I just keep falling in. The others do it without even thinking. There is obviously something they have that I do not. I am simply bad at this. The sensible thing — the only thing — is to stop, before I fall in again and freeze."

It was, {child_name} decided, not giving up. It was just being reasonable. There was a difference. Wasn't there?

"That," said a voice from behind, "is the most dangerous thought there is. Because it sounds so much like wisdom."

{child_name} turned. {companion_name} had come down to the water's edge without a sound and now stood there, turning a small {object_motif} over and over, the way some people fiddle with a thing while thinking carefully about what to say.

"It is not a thought, it is a fact," said {child_name}, hating how thick the words had gone. "Five times I have fallen. Five. If I were any good at this, I would have crossed by now. It is too hard."

{companion_name} did not argue. They came and sat on the cold stone beside {child_name}, and for a long moment they only watched the current pull threads of gold across the dark water. When they finally spoke, it was slowly, as though each word had been weighed.

"It is okay to find it hard," they said. "I want you to really hear that, because I think you have it backwards, and almost everyone does at first. You have decided that because this is hard, it means you are bad at it, and that you should stop. But hard is not a verdict. Hard is simply what the beginning of a difficult thing feels like — every single time, for every single person. That shaky, humiliated, I-should-quit feeling in your chest right now? That is not the feeling of failing. That is the exact feeling of learning something actually worth learning."

"It does not feel like learning," said {child_name}. "It feels like drowning, slightly."

{companion_name} laughed, quiet and kind. "Yes. It often does. Here is the part nobody tells you. When you watch the others cross so easily, you are watching the end of their story, not the beginning. Every one of them fell in that water. Every one of them sat on this exact bank, soaked and furious, certain they were the only one who could not manage it. You did not see that part, so you assumed it never happened. But the difference between them and you tonight is not talent. It is only that they fell in a few more times than you have — and did not stop."

{child_name} said nothing. Out in the current, the water folded and unfolded over the tilted third stone, the one that had done the throwing every time.

"The third stone moves," said {child_name} at last, almost to no one. "It tilts. I keep putting my weight down as though it will hold, and it does not."

"Ah," said {companion_name}, and there was something pleased in their voice. "Now that — that is not the sound of someone who is bad at this. That is the sound of someone who is learning. You just told me something about the crossing you did not know an hour ago. So. If the third stone tilts, what might you do differently?"

{child_name} thought. "Step on the edge nearest the bank. Keep moving. Do not stop and stand on it."

"Then you already know more than you did when you decided to quit," said {companion_name}, and held up the {object_motif}, which in the last of the light glowed with a small, steady warmth. "One more time. Not because it will suddenly be easy — it will not be. But because the only way the hard part ever shrinks is if you walk into it once more while it is still hard."

{child_name} did not feel brave. Both legs were shaking, the chest was tight, and every reasonable part wanted to go home. But {child_name} stood up anyway, looked at the first stone — only the first — and stepped out.

First stone. Second. And then the third, the tilting one — and this time {child_name} did not plant a foot and wait. {child_name} touched the near edge lightly, the way you might touch something hot, and was already moving to the fourth before the stone could betray anyone. The tilt came, but {child_name} was no longer standing there to be thrown.

Fourth stone. Fifth. The current hissed and pulled, and on the sixth stone a foot slipped on weed and the whole world lurched sideways — but {child_name} bent low, dropped low and heavy, spread both arms wide, and held. No fall. Just {child_name}, crouched in the middle of the ravine with the water roaring beneath, heart slamming, holding on.

"I nearly went in," gasped {child_name}.

"You nearly did," {companion_name} agreed from the bank. "And you did not. Keep going. One stone at a time."

{child_name} did not cross gracefully. {child_name} crossed slowly, wobbling, arms out, teeth gritted, reading each stone in turn instead of trusting the whole line at once. But {child_name} crossed. When one foot came down at last on the solid earth of the far bank, both legs nearly folded, and {child_name} turned to look back at the crooked line of stones just beaten, and began, helplessly, to laugh.

"I did it!" called {child_name} across the water, voice cracking. "It was awful the whole way. My legs are still shaking. It never once felt easy. But I did it!"

"No," {companion_name} called back, lifting the glowing {object_motif} high so its light stretched all the way across the ravine. "It did not feel easy — and that is precisely the point. You crossed while it was still hard. That is the only kind of crossing there is. Anyone can manage a thing once it has stopped being difficult. What you just did — moving forward while your whole body begged you to stop — that is the thing almost no one learns. Remember this feeling. The next time something is hard, do not read it as a wall. Read it as a beginning."

Above {setting}, the first stars had come out, sharp and clear over the darkening water. {child_name} sat down on the far bank, soaked and trembling and grinning, and understood, in a way that would not be forgotten, that the hard feeling had never once been an order to stop. It had been saying, the whole time, that {child_name} was learning.

{refrain}`,
      },
    },
    audioTemplate: `The night settled gently over {setting}, where a small {hero} was trying something new — and finding it hard.

A {object_motif} sat nearby, new and just beginning itself.

The {hero} tried, and it did not work. Tried again, and it still did not work. "Maybe I am just not good at this," they said, ready to give up.

{companion_name} came near. "May I tell you a secret?" they said softly. "Hard things are meant to feel hard at first. That feeling is not a sign to stop — it is a sign you are learning something real."

The {hero} looked at the {object_motif}. It was new now, but it was growing, slow and steady.

"It is okay to find it hard," said {companion_name}. "Everyone does, at the start."

The {hero} breathed out, and the giving-up feeling softened. Hard was allowed. Hard was simply part of new.

They tried once more — not to be perfect, only to keep going — and it felt a little less heavy than before.

{refrain}.`,
    scriptTemplate: `The night settled gently over {setting}, where {child_name} the {hero} was trying something new — and finding it hard.

A {object_motif} sat nearby, new and just beginning itself.

{child_name} tried, and it did not work. Tried again, and it still did not work. "Maybe I am just not good at this," {child_name} said, ready to give up.

{companion_name} came near. "May I tell you a secret, {child_name}?" they said softly. "Hard things are meant to feel hard at first. That feeling is not a sign to stop — it is a sign you are learning something real."

{child_name} looked at the {object_motif}. It was new now, but it was growing, slow and steady.

"It is okay to find it hard," said {companion_name}. "Everyone does, at the start."

{child_name} breathed out, and the giving-up feeling softened. Hard was allowed. Hard was simply part of new.

{child_name} tried once more — not to be perfect, only to keep going — and it felt a little less heavy than before.

{refrain}.`,
  },
  {
    ordinal: 2,
    title: "The Power of Yet",
    concept: "Adding \"yet\" turns \"I can't\" into \"not so far\"",
    callback: "Hard is meant to feel hard (Level 1)",
    ageFloor: 4,
    summary: "When the hero says \"I can't do it,\" their companion teaches them one small, powerful word to add to the end: \"yet.\" It builds on Level 1 — if hard is allowed, then \"can't\" is only \"not so far.\"",
    teachingNote: "One word — \"yet\" — reframes a fixed limit as a place on a journey, and gives a child somewhere to keep going.",
    learningBeat: "not so far",
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} wanted to skip a stone across the water. The {hero} threw the stone. Plop. It sank.

"I can't do it," said the {hero}. "I can't skip a stone. I want to give up."

{companion_name} came close. {companion_name} smiled.

"Hard is allowed," said {companion_name}. "We learned that. Do you remember?"

The {hero} nodded. But the {hero} was still sad.

"I have one little word for you," said {companion_name}. "A tiny, mighty word. The word is yet."

"Yet?" said the {hero}.

"Yet," said {companion_name}. "Put it at the end. Do not say I can't. Say I can't yet."

The {hero} tried the word. "I can't yet."

"That is not the same as never," said {companion_name}. "I can't yet just means not so far. You have not done it so far. But you are still trying."

The {hero} held the little word close, like a warm {object_motif}.

"I can't skip a stone yet," said the {hero}. "Not so far."

"Try again," said {companion_name}.

The {hero} picked up a smooth stone. The {hero} looked at the water. The {hero} threw.

Plop. It sank again.

"I can't yet," said the {hero}. "Not so far. But I am still here."

The {hero} threw again. Plop.

The {hero} threw again. And this time, skip, skip, skip! The stone hopped across the water.

"You did it!" said {companion_name}.

The {hero} laughed. "I could not do it. Then I could. The word yet helped me."

{companion_name} gave the {hero} the little {object_motif} to keep.

"When something feels too hard," said {companion_name}, "add the word yet. I can't becomes not so far."

The {hero} was sleepy now. The stars came out over {setting}. The {hero} yawned.

"Yet," whispered the {hero}. "Such a small word. Such a big help."

Goodnight, brave {hero}. Tomorrow there will be new hard things. And you will say the little word.

{refrain}`,
        scriptTemplate: `In {setting}, {child_name} wanted to skip a stone across the water. {child_name} threw the stone. Plop. It sank.

"I can't do it," said {child_name}. "I can't skip a stone. I want to give up."

{companion_name} came close. {companion_name} smiled.

"Hard is allowed," said {companion_name}. "We learned that. Do you remember?"

{child_name} nodded. But {child_name} was still sad.

"I have one little word for you," said {companion_name}. "A tiny, mighty word. The word is yet."

"Yet?" said {child_name}.

"Yet," said {companion_name}. "Put it at the end. Do not say I can't. Say I can't yet."

{child_name} tried the word. "I can't yet."

"That is not the same as never," said {companion_name}. "I can't yet just means not so far. You have not done it so far. But you are still trying."

{child_name} held the little word close, like a warm {object_motif}.

"I can't skip a stone yet," said {child_name}. "Not so far."

"Try again," said {companion_name}.

{child_name} picked up a smooth stone. {child_name} looked at the water. {child_name} threw.

Plop. It sank again.

"I can't yet," said {child_name}. "Not so far. But I am still here."

{child_name} threw again. Plop.

{child_name} threw again. And this time, skip, skip, skip! The stone hopped across the water.

"You did it!" said {companion_name}.

{child_name} laughed. "I could not do it. Then I could. The word yet helped me."

{companion_name} gave {child_name} the little {object_motif} to keep.

"When something feels too hard," said {companion_name}, "add the word yet. I can't becomes not so far."

{child_name} was sleepy now. The stars came out over {setting}. {child_name} yawned.

"Yet," whispered {child_name}. "Such a small word. Such a big help."

Goodnight, brave {child_name}. Tomorrow there will be new hard things. And you will say the little word.

{refrain}`,
      },
      '5-6': {
        audioTemplate: `The sun was setting over {setting}, painting the sky in soft gold. The {hero} stood at the edge of the water with a whole pocket of flat stones, trying to skip just one across the surface.

Throw. Plop. The stone sank.

Throw. Plop. Another one gone.

The {hero} sat down hard. "I can't do it," the {hero} said. "Everyone else can skip stones. I've tried and tried, and mine always sink. I'm just not good at this. I want to go home."

{companion_name} sat down beside the {hero}, close and calm.

"Do you remember what we learned before?" {companion_name} asked gently. "That hard is allowed? That a thing being hard doesn't mean it's wrong, it just means it's worth doing?"

"I remember," said the {hero}. "But hard still feels heavy."

"It does," said {companion_name}. "So today I want to give you something to carry with the heavy feeling. It's a word. Just one small word. Do you want to hear it?"

The {hero} nodded.

"The word is yet," said {companion_name}.

The {hero} frowned. "Yet? That's so tiny. What can such a little word do?"

"Watch," said {companion_name}. "You said, I can't do it. That sentence has a door slammed shut at the end. Now add the word yet. I can't do it... yet."

The {hero} said it slowly. "I can't do it... yet."

"Feel the difference?" said {companion_name}. "I can't means the door is closed forever. But I can't yet means the door is just still shut for now. It means not so far. You haven't done it so far, that's all. Not so far is not the same as never."

The {hero} turned the word over like a smooth {object_motif} in a pocket. Not so far. There was room in those words. There was a tomorrow tucked inside them.

"Not so far," the {hero} whispered. "I can't skip a stone... yet."

"Now try again," said {companion_name}, "and hold on to yet the whole time."

The {hero} chose a stone, flat and grey, bent low the way the water was low, and flicked the stone sideways.

Plop. It sank.

"I can't yet," the {hero} said quickly, before the sad feeling could grow. "Not so far. Again."

Plop.

"Not so far. Again."

The {hero} kept the little {object_motif} of a word tight in one hand and threw with the other. Plop. Plop. And then...

Skip. Skip. Skip-skip-skip.

The stone danced across the water and touched the far shore.

The {hero} leapt up. "It skipped! Did you see? It skipped all the way across!"

{companion_name} clapped. "I saw. And do you know what changed?"

"I got better?" said the {hero}.

"You did," said {companion_name}. "But something changed before your arm did. You stopped saying I can't and started saying not so far. The word yet kept you throwing long enough to learn."

The {hero} looked at all the stones still waiting in one pocket, and for the first time they didn't feel like a pile of failures. They felt like a pile of tries.

"I'm going to keep this word," said the {hero}, patting one pocket as if the word lived there now, right beside the {object_motif}.

"Keep it forever," said {companion_name}. "And when something feels too big, reading, or climbing, or being brave, add yet to the end. I can't turns into not so far. And not so far always has a next try in it."

The stars were waking up over {setting} now. The {hero} yawned a big, sleepy yawn.

"Yet," the {hero} murmured. "The smallest word. The biggest help."

"Sleep now, brave one," said {companion_name}. "The hard things will wait. And so will your next try."

{refrain}`,
        scriptTemplate: `The sun was setting over {setting}, painting the sky in soft gold. {child_name} stood at the edge of the water with a whole pocket of flat stones, trying to skip just one across the surface.

Throw. Plop. The stone sank.

Throw. Plop. Another one gone.

{child_name} sat down hard. "I can't do it," {child_name} said. "Everyone else can skip stones. I've tried and tried, and mine always sink. I'm just not good at this. I want to go home."

{companion_name} sat down beside {child_name}, close and calm.

"Do you remember what we learned before?" {companion_name} asked gently. "That hard is allowed? That a thing being hard doesn't mean it's wrong, it just means it's worth doing?"

"I remember," said {child_name}. "But hard still feels heavy."

"It does," said {companion_name}. "So today I want to give you something to carry with the heavy feeling. It's a word. Just one small word. Do you want to hear it?"

{child_name} nodded.

"The word is yet," said {companion_name}.

{child_name} frowned. "Yet? That's so tiny. What can such a little word do?"

"Watch," said {companion_name}. "You said, I can't do it. That sentence has a door slammed shut at the end. Now add the word yet. I can't do it... yet."

{child_name} said it slowly. "I can't do it... yet."

"Feel the difference?" said {companion_name}. "I can't means the door is closed forever. But I can't yet means the door is just still shut for now. It means not so far. You haven't done it so far, that's all. Not so far is not the same as never."

{child_name} turned the word over like a smooth {object_motif} in a pocket. Not so far. There was room in those words. There was a tomorrow tucked inside them.

"Not so far," {child_name} whispered. "I can't skip a stone... yet."

"Now try again," said {companion_name}, "and hold on to yet the whole time."

{child_name} chose a stone, flat and grey, bent low the way the water was low, and flicked the stone sideways.

Plop. It sank.

"I can't yet," {child_name} said quickly, before the sad feeling could grow. "Not so far. Again."

Plop.

"Not so far. Again."

{child_name} kept the little {object_motif} of a word tight in one hand and threw with the other. Plop. Plop. And then...

Skip. Skip. Skip-skip-skip.

The stone danced across the water and touched the far shore.

{child_name} leapt up. "It skipped! Did you see? It skipped all the way across!"

{companion_name} clapped. "I saw. And do you know what changed?"

"I got better?" said {child_name}.

"You did," said {companion_name}. "But something changed before your arm did. You stopped saying I can't and started saying not so far. The word yet kept you throwing long enough to learn."

{child_name} looked at all the stones still waiting in one pocket, and for the first time they didn't feel like a pile of failures. They felt like a pile of tries.

"I'm going to keep this word," said {child_name}, patting one pocket as if the word lived there now, right beside the {object_motif}.

"Keep it forever," said {companion_name}. "And when something feels too big, reading, or climbing, or being brave, add yet to the end. I can't turns into not so far. And not so far always has a next try in it."

The stars were waking up over {setting} now. {child_name} yawned a big, sleepy yawn.

"Yet," {child_name} murmured. "The smallest word. The biggest help."

"Sleep now, brave one," said {companion_name}. "The hard things will wait. And so will your next try."

{refrain}`,
      },
      '7-8': {
        audioTemplate: `The lookout tree at the heart of {setting} had a rope that hung all the way down to the ground, and at the top was the best view in the whole world. You could see the rivers, the hills, and the place where the sky turned pink. Everyone the {hero} knew had climbed that rope. Everyone except the {hero}.

Tonight the {hero} decided it was finally the night.

The {hero} spat on both hands, grabbed the rope, and pulled. Up went one arm. Up went the other. The ground dropped away, a little, then a little more, and then the {hero}'s arms began to burn and shake, and one hand slipped, and down the {hero} came, landing in the soft grass with a thump.

The {hero} tried again. Higher this time. Then the slip, then the thump.

Again. Thump.

The {hero} lay in the grass and stared up at the top of the tree, so impossibly far away, and felt hot tears sting.

"I can't do it," the {hero} said. "I'm never going to climb this rope. My arms are too weak and everyone else can do it and I just can't. I'm done. I'm going home."

Out of the shadows stepped {companion_name}, who had been watching quietly the whole time.

"That was higher than last time," {companion_name} said, sitting down in the grass beside the {hero}.

"It doesn't matter how high," said the {hero}. "I still fell. I still can't do it."

"Can I tell you something?" said {companion_name}. "Remember when we decided that hard was allowed? That the burning-arms feeling wasn't a sign to stop, but a sign that you were doing something real?"

"I remember," the {hero} muttered. "But knowing it's allowed to be hard doesn't get me to the top."

"No," {companion_name} agreed. "So I'm going to give you a tool. It's a word. And I promise you it is stronger than it looks." {companion_name} held up one finger. "The word is yet."

The {hero} wiped both eyes. "Yet?"

"Listen to what you said a minute ago," said {companion_name}. "You said, I can't do it. Say it again, but this time put yet on the very end."

"I can't do it... yet," said the {hero}.

"There," said {companion_name} softly. "Do you hear how the whole sentence changed? I can't do it is a locked door. But I can't do it yet, that just means not so far. It means you haven't reached the top so far. Not so far isn't the same as never. Not so far still has a road going forward."

The {hero} sat up slowly. The words felt strange and new, like holding a smooth {object_motif} that had been warmed by the sun.

"Not so far," the {hero} repeated. And it was true, it was honest. The {hero} hadn't climbed it so far. That was different from I never will. That had a tomorrow in it.

"Every time you slip," said {companion_name}, "you don't have to say I failed. You can say, not so far, and reach again."

The {hero} stood up. The arms still ached, but something behind the ribs felt lighter. The {hero} tucked the little {object_motif} of a word away somewhere safe inside and took hold of the rope again.

"I can't climb this yet," the {hero} said out loud. "Not so far."

Pull. One arm. The other. Higher than before. The burning came, and the shaking came, and the old voice said give up, but this time the {hero} answered it.

"Not so far," the {hero} breathed. "Keep going."

Higher. The branch that had been the highest point last time passed below the {hero}'s feet. Higher still. The {hero}'s hand slapped against rough bark, the first branch, and grabbed hold.

The {hero} hung there, chest heaving, halfway up the great tree, higher than ever before in the whole of the {hero}'s life.

"Look at you," called {companion_name} from below, voice bright with pride.

"I'm not at the top," the {hero} called back, laughing and gasping at once.

"No," said {companion_name}. "You're not at the top, not so far. And that is a wonderful place to be, because it means you're on your way."

The {hero} rested on the branch and looked out. Even from halfway, the view was beautiful: the rivers, the hills, the first stars pricking through over {setting}. The top would come another night. And the {hero} finally, truly believed that it would.

They climbed down together, and the {hero} yawned the enormous yawn of someone who has worked hard and done well.

"That word," said the {hero} sleepily. "Yet. I'm keeping it."

"It's yours now," said {companion_name}. "Carry it everywhere. Whenever your heart says I can't, add yet, and I can't becomes not so far. And not so far is only a place on the way to done."

The {hero} curled up in the soft grass under the lookout tree, the {object_motif} of that little word held close, and let both eyes fall shut.

"Goodnight, tree," the {hero} whispered. "I'll be at your top. Just... not so far. Not yet."

{refrain}`,
        scriptTemplate: `The lookout tree at the heart of {setting} had a rope that hung all the way down to the ground, and at the top was the best view in the whole world. You could see the rivers, the hills, and the place where the sky turned pink. Everyone {child_name} knew had climbed that rope. Everyone except {child_name}.

Tonight {child_name} decided it was finally the night.

{child_name} spat on both hands, grabbed the rope, and pulled. Up went one arm. Up went the other. The ground dropped away, a little, then a little more, and then {child_name}'s arms began to burn and shake, and one hand slipped, and down {child_name} came, landing in the soft grass with a thump.

{child_name} tried again. Higher this time. Then the slip, then the thump.

Again. Thump.

{child_name} lay in the grass and stared up at the top of the tree, so impossibly far away, and felt hot tears sting.

"I can't do it," {child_name} said. "I'm never going to climb this rope. My arms are too weak and everyone else can do it and I just can't. I'm done. I'm going home."

Out of the shadows stepped {companion_name}, who had been watching quietly the whole time.

"That was higher than last time," {companion_name} said, sitting down in the grass beside {child_name}.

"It doesn't matter how high," said {child_name}. "I still fell. I still can't do it."

"Can I tell you something?" said {companion_name}. "Remember when we decided that hard was allowed? That the burning-arms feeling wasn't a sign to stop, but a sign that you were doing something real?"

"I remember," {child_name} muttered. "But knowing it's allowed to be hard doesn't get me to the top."

"No," {companion_name} agreed. "So I'm going to give you a tool. It's a word. And I promise you it is stronger than it looks." {companion_name} held up one finger. "The word is yet."

{child_name} wiped both eyes. "Yet?"

"Listen to what you said a minute ago," said {companion_name}. "You said, I can't do it. Say it again, but this time put yet on the very end."

"I can't do it... yet," said {child_name}.

"There," said {companion_name} softly. "Do you hear how the whole sentence changed? I can't do it is a locked door. But I can't do it yet, that just means not so far. It means you haven't reached the top so far. Not so far isn't the same as never. Not so far still has a road going forward."

{child_name} sat up slowly. The words felt strange and new, like holding a smooth {object_motif} that had been warmed by the sun.

"Not so far," {child_name} repeated. And it was true, it was honest. {child_name} hadn't climbed it so far. That was different from I never will. That had a tomorrow in it.

"Every time you slip," said {companion_name}, "you don't have to say I failed. You can say, not so far, and reach again."

{child_name} stood up. The arms still ached, but something behind the ribs felt lighter. {child_name} tucked the little {object_motif} of a word away somewhere safe inside and took hold of the rope again.

"I can't climb this yet," {child_name} said out loud. "Not so far."

Pull. One arm. The other. Higher than before. The burning came, and the shaking came, and the old voice said give up, but this time {child_name} answered it.

"Not so far," {child_name} breathed. "Keep going."

Higher. The branch that had been the highest point last time passed below {child_name}'s feet. Higher still. {child_name}'s hand slapped against rough bark, the first branch, and grabbed hold.

{child_name} hung there, chest heaving, halfway up the great tree, higher than ever before in the whole of {child_name}'s life.

"Look at you," called {companion_name} from below, voice bright with pride.

"I'm not at the top," {child_name} called back, laughing and gasping at once.

"No," said {companion_name}. "You're not at the top, not so far. And that is a wonderful place to be, because it means you're on your way."

{child_name} rested on the branch and looked out. Even from halfway, the view was beautiful: the rivers, the hills, the first stars pricking through over {setting}. The top would come another night. And {child_name} finally, truly believed that it would.

They climbed down together, and {child_name} yawned the enormous yawn of someone who has worked hard and done well.

"That word," said {child_name} sleepily. "Yet. I'm keeping it."

"It's yours now," said {companion_name}. "Carry it everywhere. Whenever your heart says I can't, add yet, and I can't becomes not so far. And not so far is only a place on the way to done."

{child_name} curled up in the soft grass under the lookout tree, the {object_motif} of that little word held close, and let both eyes fall shut.

"Goodnight, tree," {child_name} whispered. "I'll be at your top. Just... not so far. Not yet."

{refrain}`,
      },
      '9-11': {
        audioTemplate: `There was a flat grey rock at the edge of {setting} that the {hero} thought of as a private studio. Every evening, when the light went amber and soft, the {hero} would sit there with a stick of charcoal and a stack of pale bark-paper and try to draw the living things of the world: the birds, the leaping fish, the way the wind bent the grass.

And every evening, lately, the {hero} would end up crushing the paper into a ball.

Tonight was worse than most. The {hero} had been trying to draw a single bird in flight for over an hour. In the {hero}'s head the bird was perfect, wings wide, feathers sharp, alive. On the paper it came out lumpy and wrong, a smudge with a beak. The {hero} had seen the drawings the others made. The older ones could sketch a bird in three quick lines and somehow it looked like it might lift off the page. Theirs looked easy. Effortless. Like they'd been born already knowing how.

The {hero} looked down at the crumpled pile of failures and felt something cold and final settle in the chest.

"I can't do this," the {hero} said quietly, to no one. "I'm just not an artist. Some people have it and some people don't, and I don't. I've been coming here for weeks and I haven't gotten any better. There's no point." The {hero} set the charcoal down on the rock, gently, the way you put down something you've decided never to pick up again.

"That's a very large decision to make about yourself," said a voice.

{companion_name} was standing a little way off, careful not to crowd, the way {companion_name} always was.

"You saw those," the {hero} said, nodding at the crumpled pile, cheeks hot with shame.

"I saw someone working very hard at something they care about," said {companion_name}, coming to sit on the edge of the flat rock. "Those are different things. May I see the bird?"

Reluctantly, the {hero} smoothed out the least terrible drawing. {companion_name} studied it for a long moment, not politely, but really looking.

"The others make it look so easy," the {hero} said, before {companion_name} could speak. "They just... can. And I just can't. That's the difference between us. It's not going to change."

"I want to ask you something," said {companion_name}, "and I want you to be honest. When you look at the ones who draw so well, do you think you're seeing all of it? Do you think you're seeing the hundreds of evenings they sat on rocks like this one, crushing paper into balls, before you ever met them?"

The {hero} opened a mouth to answer, and then closed it. That thought had genuinely never arrived before. The others had always simply existed as good, finished, complete, effortless, as if they'd skipped the part the {hero} was stuck in.

"You're comparing the inside of your work to the outside of theirs," said {companion_name}. "You see your every failed line, because you live inside them. You only see their best, because that's all they show. Of course it looks like they can and you can't."

The {hero} was quiet.

"Remember what we learned," {companion_name} went on, gentler now. "That hard is allowed. That the struggling feeling isn't proof you're doing it wrong, it's proof you're doing something real."

"I remember," said the {hero}. "But I've been struggling for weeks and I'm still bad. At some point struggling has to actually turn into something, or it's just... struggling."

"It does turn into something," said {companion_name}. "And I'm going to give you the thing that lets you notice it turning. It's a word. I know that sounds too small to matter. Hold on to it anyway." {companion_name} paused. "The word is yet."

The {hero} let out a short, tired breath that was almost a laugh. "Yet."

"You said a whole sentence about yourself a minute ago," said {companion_name}. "You said, I'm just not an artist. I can't do this. Those are locked doors, they close the future off completely. But listen to what happens when you put one word on the end. Say it: I can't do this. Now add yet."

"I can't do this," the {hero} said slowly, "yet."

"What changed?"

The {hero} sat with it, and this time didn't rush to dismiss it. Something had changed, actually, something small and real. "It's not... finished anymore," the {hero} said. "I can't do this sounds like the end. I can't do this yet sounds like... the middle."

"That's exactly it," said {companion_name}, and there was something fierce and warm in the voice. "I can't do this means never. I can't do this yet means not so far. And not so far is just an honest description of where you are on a long road. You haven't drawn the bird so far. That is completely, entirely different from you will never draw the bird. Not so far still has every tomorrow in it."

The {hero} turned the words over, not so far, and felt them settle differently than I'm just not an artist had settled. That old sentence had been a stone in the chest. This one was more like a door left open a crack, with light coming through. The {hero} picked up the charcoal again and rolled it between two fingers, then reached into a pocket and closed a hand around the small {object_motif} kept there, the one from the very first night, the one that meant remember what you already got through.

"It's honest, though, isn't it," the {hero} said slowly. "Not so far isn't pretending. It's not saying I'm secretly amazing. It's just saying, not so far. Keep going."

"That's why it works," said {companion_name}. "It doesn't ask you to lie about how good you are. It only asks you to be honest about not being finished."

The {hero} looked down at the fresh sheet of pale bark-paper, and up at the last bird of the evening wheeling against the amber sky over {setting}. And instead of trying to draw the whole perfect bird all at once, the {hero} drew one line. Just the sweep of the wing. It wasn't right. But it was closer than the first line an hour ago had been, and the {hero} could see that now, could actually measure it.

"That wing is better than the one before," the {hero} said, surprised.

"Not so far," {companion_name} said, smiling, "but closer than before. Both of those are true at the same time. That's the whole secret."

The {hero} drew another line, and another, holding the small word the way one holds the {object_motif}, quietly, without gripping too tight. The bird on the page was still lumpy. But it was a lumpy bird made by someone who had stopped saying never, and that, the {hero} understood now, was the only kind of person who ever learned to draw one properly.

The sky went deep blue. The first stars came out. The {hero} gathered the crumpled papers, but instead of tossing them away, tucked them into the stack, proof of the road already walked.

"I'm not good at this," the {hero} said, standing, but the words came out light now, almost like a joke shared between friends. "Not so far."

"Not so far," {companion_name} agreed. "Which is a wonderful place to be, because everyone who is good at this once stood exactly where you're standing, and said exactly what you just said, and then kept drawing anyway."

The {hero} yawned, the long deep yawn of honest work. Tomorrow evening the flat grey rock would be waiting. And the bird. And the small, mighty word.

"Goodnight," the {hero} whispered to the darkening world. "I'll get you right. Just... not so far."

{refrain}`,
        scriptTemplate: `There was a flat grey rock at the edge of {setting} that {child_name} thought of as a private studio. Every evening, when the light went amber and soft, {child_name} would sit there with a stick of charcoal and a stack of pale bark-paper and try to draw the living things of the world: the birds, the leaping fish, the way the wind bent the grass.

And every evening, lately, {child_name} would end up crushing the paper into a ball.

Tonight was worse than most. {child_name} had been trying to draw a single bird in flight for over an hour. In {child_name}'s head the bird was perfect, wings wide, feathers sharp, alive. On the paper it came out lumpy and wrong, a smudge with a beak. {child_name} had seen the drawings the others made. The older ones could sketch a bird in three quick lines and somehow it looked like it might lift off the page. Theirs looked easy. Effortless. Like they'd been born already knowing how.

{child_name} looked down at the crumpled pile of failures and felt something cold and final settle in the chest.

"I can't do this," {child_name} said quietly, to no one. "I'm just not an artist. Some people have it and some people don't, and I don't. I've been coming here for weeks and I haven't gotten any better. There's no point." {child_name} set the charcoal down on the rock, gently, the way you put down something you've decided never to pick up again.

"That's a very large decision to make about yourself," said a voice.

{companion_name} was standing a little way off, careful not to crowd, the way {companion_name} always was.

"You saw those," {child_name} said, nodding at the crumpled pile, cheeks hot with shame.

"I saw someone working very hard at something they care about," said {companion_name}, coming to sit on the edge of the flat rock. "Those are different things. May I see the bird?"

Reluctantly, {child_name} smoothed out the least terrible drawing. {companion_name} studied it for a long moment, not politely, but really looking.

"The others make it look so easy," {child_name} said, before {companion_name} could speak. "They just... can. And I just can't. That's the difference between us. It's not going to change."

"I want to ask you something," said {companion_name}, "and I want you to be honest. When you look at the ones who draw so well, do you think you're seeing all of it? Do you think you're seeing the hundreds of evenings they sat on rocks like this one, crushing paper into balls, before you ever met them?"

{child_name} opened a mouth to answer, and then closed it. That thought had genuinely never arrived before. The others had always simply existed as good, finished, complete, effortless, as if they'd skipped the part {child_name} was stuck in.

"You're comparing the inside of your work to the outside of theirs," said {companion_name}. "You see your every failed line, because you live inside them. You only see their best, because that's all they show. Of course it looks like they can and you can't."

{child_name} was quiet.

"Remember what we learned," {companion_name} went on, gentler now. "That hard is allowed. That the struggling feeling isn't proof you're doing it wrong, it's proof you're doing something real."

"I remember," said {child_name}. "But I've been struggling for weeks and I'm still bad. At some point struggling has to actually turn into something, or it's just... struggling."

"It does turn into something," said {companion_name}. "And I'm going to give you the thing that lets you notice it turning. It's a word. I know that sounds too small to matter. Hold on to it anyway." {companion_name} paused. "The word is yet."

{child_name} let out a short, tired breath that was almost a laugh. "Yet."

"You said a whole sentence about yourself a minute ago," said {companion_name}. "You said, I'm just not an artist. I can't do this. Those are locked doors, they close the future off completely. But listen to what happens when you put one word on the end. Say it: I can't do this. Now add yet."

"I can't do this," {child_name} said slowly, "yet."

"What changed?"

{child_name} sat with it, and this time didn't rush to dismiss it. Something had changed, actually, something small and real. "It's not... finished anymore," {child_name} said. "I can't do this sounds like the end. I can't do this yet sounds like... the middle."

"That's exactly it," said {companion_name}, and there was something fierce and warm in the voice. "I can't do this means never. I can't do this yet means not so far. And not so far is just an honest description of where you are on a long road. You haven't drawn the bird so far. That is completely, entirely different from you will never draw the bird. Not so far still has every tomorrow in it."

{child_name} turned the words over, not so far, and felt them settle differently than I'm just not an artist had settled. That old sentence had been a stone in the chest. This one was more like a door left open a crack, with light coming through. {child_name} picked up the charcoal again and rolled it between two fingers, then reached into a pocket and closed a hand around the small {object_motif} kept there, the one from the very first night, the one that meant remember what you already got through.

"It's honest, though, isn't it," {child_name} said slowly. "Not so far isn't pretending. It's not saying I'm secretly amazing. It's just saying, not so far. Keep going."

"That's why it works," said {companion_name}. "It doesn't ask you to lie about how good you are. It only asks you to be honest about not being finished."

{child_name} looked down at the fresh sheet of pale bark-paper, and up at the last bird of the evening wheeling against the amber sky over {setting}. And instead of trying to draw the whole perfect bird all at once, {child_name} drew one line. Just the sweep of the wing. It wasn't right. But it was closer than the first line an hour ago had been, and {child_name} could see that now, could actually measure it.

"That wing is better than the one before," {child_name} said, surprised.

"Not so far," {companion_name} said, smiling, "but closer than before. Both of those are true at the same time. That's the whole secret."

{child_name} drew another line, and another, holding the small word the way one holds the {object_motif}, quietly, without gripping too tight. The bird on the page was still lumpy. But it was a lumpy bird made by someone who had stopped saying never, and that, {child_name} understood now, was the only kind of person who ever learned to draw one properly.

The sky went deep blue. The first stars came out. {child_name} gathered the crumpled papers, but instead of tossing them away, tucked them into the stack, proof of the road already walked.

"I'm not good at this," {child_name} said, standing, but the words came out light now, almost like a joke shared between friends. "Not so far."

"Not so far," {companion_name} agreed. "Which is a wonderful place to be, because everyone who is good at this once stood exactly where you're standing, and said exactly what you just said, and then kept drawing anyway."

{child_name} yawned, the long deep yawn of honest work. Tomorrow evening the flat grey rock would be waiting. And the bird. And the small, mighty word.

"Goodnight," {child_name} whispered to the darkening world. "I'll get you right. Just... not so far."

{refrain}`,
      },
    },
    audioTemplate: `Under a wide and quiet sky in {setting}, the {hero} set down what they were trying and said the heaviest words they knew: "I can't do it."

The {object_motif} stirred in the night air, a little taller than the night before.

{companion_name} tilted their head. "Those words feel so final," they said. "But you are missing one. A small one. Add it to the end and listen."

"I can't do it…" the {hero} began.

"…yet," whispered {companion_name}.

"I can't do it… yet," said the {hero}, and the words felt completely different. Not a wall. A path with more of it still to walk.

"Last time you learned that hard is allowed," said {companion_name}. "Yet is what you say while the hard is still happening. It means: not so far. It means: keep going."

The {hero} looked at the growing {object_motif} and smiled. Not finished. Not stuck. Just — not yet.

{refrain}.`,
    scriptTemplate: `Under a wide and quiet sky in {setting}, {child_name} the {hero} set down what they were trying and said the heaviest words they knew: "I can't do it."

The {object_motif} stirred in the night air, a little taller than the night before.

{companion_name} tilted their head. "Those words feel so final," they said. "But you are missing one, {child_name}. A small one. Add it to the end and listen."

"I can't do it…" {child_name} began.

"…yet," whispered {companion_name}.

"I can't do it… yet," said {child_name}, and the words felt completely different. Not a wall. A path with more of it still to walk.

"Last time you learned that hard is allowed," said {companion_name}. "Yet is what you say while the hard is still happening. It means: not so far. It means: keep going."

{child_name} looked at the growing {object_motif} and smiled. Not finished. Not stuck. Just — not yet.

{refrain}.`,
  },
  {
    ordinal: 3,
    title: "Mistakes Help Us Grow",
    concept: "A mistake is information, not failure",
    callback: "Hard is meant to feel hard (Level 1)",
    ageFloor: 4,
    summary: "The hero makes a mistake and feels ashamed. Their companion shows them that a mistake quietly tells you what to try next — it is how growing works, not the opposite of it. It revisits Level 1: if hard is normal, mistakes are part of hard.",
    teachingNote: "When mistakes are framed as useful information, a child stops hiding them and starts learning from them.",
    learningBeat: "part of how growing is done",
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} woke up happy. Today was building day. {companion_name} was coming to help, and the {hero} had a special plan.

The {hero} wanted to build the tallest tower ever, all by themselves, before {companion_name} arrived. So the {hero} stacked and stacked, holding tight to a little {object_motif} for luck.

But the tower leaned. Then it wobbled. Then, crash! Down it came, right as {companion_name} walked in.

The {hero}'s cheeks went hot. "I did it wrong," the {hero} said. "I ruined it. Maybe I am just bad at building."

The {hero} wanted to hide. A tumbled tower felt like proof of something sad.

{companion_name} sat down in the pile of blocks. "Let's look," they said softly. "A tower that falls is not a bad tower. It is a tower telling you something."

"Telling me what?" asked the {hero}.

{companion_name} picked up a wide, flat block and a skinny one. "See? The skinny blocks were on the bottom. That is why it wobbled. The tower just showed you where to put the strong blocks."

The {hero} blinked. "So the crash was... a clue?"

"Yes," said {companion_name}, smiling. "A mistake is not the end. A mistake is information. It quietly tells you what to try next. Getting something wrong and then learning from it is part of how growing is done."

The {hero} looked at the little {object_motif} still in their hand. Then the {hero} looked at the blocks in a new way.

This time, the {hero} put the wide blocks on the bottom. Big ones first. Skinny ones on top. Slow and steady.

The tower grew. Taller than before. Taller than the {hero}! It did not wobble at all.

"You did that," said {companion_name}, "because the first tower taught you how."

The {hero} laughed. The hot, sad feeling was gone. Falling down had not made the {hero} bad. It had made the {hero} wiser.

That night in {setting}, the {hero} held the {object_motif} close and felt proud, not because nothing went wrong, but because something did, and the {hero} learned from it.

{refrain}`,
        scriptTemplate: `In {setting}, {child_name} woke up happy. Today was building day. {companion_name} was coming to help, and {child_name} had a special plan.

{child_name} wanted to build the tallest tower ever, all by themselves, before {companion_name} arrived. So {child_name} stacked and stacked, holding tight to a little {object_motif} for luck.

But the tower leaned. Then it wobbled. Then, crash! Down it came, right as {companion_name} walked in.

{child_name}'s cheeks went hot. "I did it wrong," {child_name} said. "I ruined it. Maybe I am just bad at building."

{child_name} wanted to hide. A tumbled tower felt like proof of something sad.

{companion_name} sat down in the pile of blocks. "Let's look," they said softly. "A tower that falls is not a bad tower. It is a tower telling you something."

"Telling me what?" asked {child_name}.

{companion_name} picked up a wide, flat block and a skinny one. "See? The skinny blocks were on the bottom. That is why it wobbled. The tower just showed you where to put the strong blocks."

{child_name} blinked. "So the crash was... a clue?"

"Yes," said {companion_name}, smiling. "A mistake is not the end. A mistake is information. It quietly tells you what to try next. Getting something wrong and then learning from it is part of how growing is done."

{child_name} looked at the little {object_motif} still in their hand. Then {child_name} looked at the blocks in a new way.

This time, {child_name} put the wide blocks on the bottom. Big ones first. Skinny ones on top. Slow and steady.

The tower grew. Taller than before. Taller than {child_name}! It did not wobble at all.

"You did that," said {companion_name}, "because the first tower taught you how."

{child_name} laughed. The hot, sad feeling was gone. Falling down had not made {child_name} bad. It had made {child_name} wiser.

That night in {setting}, {child_name} held the {object_motif} close and felt proud, not because nothing went wrong, but because something did, and {child_name} learned from it.

{refrain}`,
      },
      '5-6': {
        audioTemplate: `In {setting}, the sun came up gold and quiet, and the {hero} was already awake. Today the whole town was having a sharing fair, and the {hero} had promised to bring something special: a boat, built by hand, that could really float.

The {hero} had been dreaming about it for days. {companion_name} had offered to help, but the {hero} wanted to do it alone. "I want everyone to see I can do it myself," the {hero} said, holding tight to a small {object_motif} that always felt lucky.

So the {hero} worked all morning. They chose the biggest, heaviest pieces they could find, because a big boat had to be strong, didn't it? They pushed and tied and packed it all together until the boat was as heavy as a stone.

When it was time, the whole town gathered by the water. The {hero}'s heart was thumping. Everyone watched. Slowly, proudly, the {hero} set the boat down on the water.

It sank. Straight down. Bubbles and all.

Somebody giggled. The {hero}'s face went hot and red. This was supposed to be the best moment, and instead the boat was at the bottom and everyone had seen it. "I made it wrong," the {hero} whispered. "In front of everybody. Maybe I am just not a builder. Maybe I should never have tried."

The {hero} wanted to run home and never come back.

{companion_name} came and knelt beside the {hero}, not laughing, not fussing, just calm. "That was hard," they said. "And I saw you try really, really hard. Can we look at what happened, you and me?"

"It sank," said the {hero} miserably. "That's all."

"It sank," {companion_name} agreed. "And that is telling us something useful. Why do you think it sank?"

The {hero} sniffed and thought. "Because... it was so heavy?"

"Maybe," said {companion_name}. "Heavy things sink. Light things float. Your boat just gave you a clue. It didn't say 'you are bad.' It said, 'try me lighter.'"

The {hero} looked up. "So the mistake is like a clue?"

"Exactly like a clue," said {companion_name}, smiling. "A mistake is not proof that you're bad at something. A mistake is information. It quietly tells you what to try next. Making one and then learning from it is part of how growing is done."

The {hero} still felt the sting of everyone watching. But the {object_motif} in their hand felt a little braver now. "Can I try again?" the {hero} asked.

"The town is still here," said {companion_name}. "And so are you."

This time the {hero} chose the lightest wood, thin and dry. They made the boat wide, like a leaf, and hollow, like a cup. It took a while. Some pieces still went wrong, and each time, the {hero} looked closely and fixed just that one thing.

When the {hero} set the second boat on the water, it floated. It bobbed and it turned and it drifted out like it belonged there. The town cheered, but the loudest sound was the {hero}'s own happy laugh.

"You did that," said {companion_name}, "because the first boat taught you how. The one that sank is the reason this one floats."

The {hero} watched the little boat ride the ripples. The hot, ashamed feeling had melted away. Sinking hadn't made the {hero} a bad builder. It had shown the {hero} exactly what to do.

That night in {setting}, the {hero} set the {object_motif} on the windowsill and felt something warm and steady inside. Not because the day had been perfect, but because it hadn't, and the {hero} had grown anyway.

{refrain}`,
        scriptTemplate: `In {setting}, the sun came up gold and quiet, and {child_name} was already awake. Today the whole town was having a sharing fair, and {child_name} had promised to bring something special: a boat, built by hand, that could really float.

{child_name} had been dreaming about it for days. {companion_name} had offered to help, but {child_name} wanted to do it alone. "I want everyone to see I can do it myself," {child_name} said, holding tight to a small {object_motif} that always felt lucky.

So {child_name} worked all morning. They chose the biggest, heaviest pieces they could find, because a big boat had to be strong, didn't it? They pushed and tied and packed it all together until the boat was as heavy as a stone.

When it was time, the whole town gathered by the water. {child_name}'s heart was thumping. Everyone watched. Slowly, proudly, {child_name} set the boat down on the water.

It sank. Straight down. Bubbles and all.

Somebody giggled. {child_name}'s face went hot and red. This was supposed to be the best moment, and instead the boat was at the bottom and everyone had seen it. "I made it wrong," {child_name} whispered. "In front of everybody. Maybe I am just not a builder. Maybe I should never have tried."

{child_name} wanted to run home and never come back.

{companion_name} came and knelt beside {child_name}, not laughing, not fussing, just calm. "That was hard," they said. "And I saw you try really, really hard. Can we look at what happened, you and me?"

"It sank," said {child_name} miserably. "That's all."

"It sank," {companion_name} agreed. "And that is telling us something useful. Why do you think it sank?"

{child_name} sniffed and thought. "Because... it was so heavy?"

"Maybe," said {companion_name}. "Heavy things sink. Light things float. Your boat just gave you a clue. It didn't say 'you are bad.' It said, 'try me lighter.'"

{child_name} looked up. "So the mistake is like a clue?"

"Exactly like a clue," said {companion_name}, smiling. "A mistake is not proof that you're bad at something. A mistake is information. It quietly tells you what to try next. Making one and then learning from it is part of how growing is done."

{child_name} still felt the sting of everyone watching. But the {object_motif} in their hand felt a little braver now. "Can I try again?" {child_name} asked.

"The town is still here," said {companion_name}. "And so are you."

This time {child_name} chose the lightest wood, thin and dry. They made the boat wide, like a leaf, and hollow, like a cup. It took a while. Some pieces still went wrong, and each time, {child_name} looked closely and fixed just that one thing.

When {child_name} set the second boat on the water, it floated. It bobbed and it turned and it drifted out like it belonged there. The town cheered, but the loudest sound was {child_name}'s own happy laugh.

"You did that," said {companion_name}, "because the first boat taught you how. The one that sank is the reason this one floats."

{child_name} watched the little boat ride the ripples. The hot, ashamed feeling had melted away. Sinking hadn't made {child_name} a bad builder. It had shown {child_name} exactly what to do.

That night in {setting}, {child_name} set the {object_motif} on the windowsill and felt something warm and steady inside. Not because the day had been perfect, but because it hadn't, and {child_name} had grown anyway.

{refrain}`,
      },
      '7-8': {
        audioTemplate: `In {setting}, there was a fair coming — the biggest one of the whole year — and this time there was a contest. Whoever could build the finest bridge across the little stream would have it used by the whole town for the rest of the summer. The {hero} wanted to win more than anything.

For a week, the {hero} planned in secret. {companion_name} kept offering to help, but every time, the {hero} shook their head. "I want to do this one myself," the {hero} said, turning a small {object_motif} over and over in their hands. "I want everyone to know I did it, all on my own." Deep down, the {hero} believed that if the bridge was good, it would prove, once and for all, that the {hero} was truly clever.

The morning of the fair, the {hero} carried their bridge down to the stream. It was beautiful to look at — tall and grand, with a proud arch in the middle. A crowd gathered on both banks. The {hero}'s stomach fluttered with excitement and nerves.

"Go on!" someone called. "Cross it!"

The {hero} stepped onto the bridge. One step. Two steps. On the third step, there was a crack, then a groan, and then the whole middle sagged and folded and dropped the {hero} — splash — right into the cold stream.

Laughter burst out along the banks. Not mean laughter, maybe, but the {hero} felt it like a sting all over. Water dripped from their nose. Everyone had watched. Everyone had seen the grand bridge crumple like wet paper.

The {hero} scrambled out and stood there, soaked and shaking, cheeks burning hotter than the sun. "I got it wrong," the {hero} said, and their voice wobbled. "In front of the whole town. I worked so hard and it broke anyway. Maybe I'm just not clever after all. Maybe I never was."

The {hero} wanted to disappear. The bridge, broken in the water, felt like proof of everything the {hero} feared about themselves.

{companion_name} made their way through the crowd and sat down on the wet bank, right next to the {hero}, not caring about the mud. They didn't laugh. They didn't say "it's fine" in that quick way that means it isn't. They just waited until the {hero} was ready.

"That hurt," {companion_name} said at last. "I know it did. Falling in front of everyone is one of the hardest things there is."

The {hero} nodded, still staring at the water.

"Can I show you something?" {companion_name} asked. The {hero} shrugged, which meant yes. {companion_name} reached into the stream and lifted up the broken middle of the bridge. "Look here. See where it snapped? It cracked right at the top of the arch, where there was nothing underneath to hold it. No supports. The bridge isn't telling you that you're bad at building. It's telling you exactly where it needed to be stronger."

The {hero} looked. It was true. The break wasn't everywhere — it was in one clear place. "So the way it broke... is like a message?" the {hero} asked slowly.

"That's just what it is," said {companion_name}. "A mistake isn't proof that you're not clever. A mistake is information. It quietly tells you what to try next, if you're brave enough to look at it instead of hiding from it. Getting something wrong and learning from it isn't the opposite of growing — it is part of how growing is done."

The {hero} wiped their face and squeezed the {object_motif} in their fist. The crowd had drifted off now, back to the fair, and somehow that made it easier to breathe. "The contest is over, though," the {hero} said. "I already lost."

"The contest, maybe," said {companion_name}. "But the stream is still here. And nobody's watching now. Just you, me, and what the bridge tried to teach you."

So the {hero} began again. This time, the {hero} didn't build for show. The {hero} built for the stream. They set strong posts down into the streambed first, right where the middle would be. They made the bridge lower, flatter, sturdier — less grand to look at, but honest. When one plank felt wobbly, the {hero} didn't panic. They studied it, saw why, and fixed just that. Each little mistake became one more thing the {hero} knew.

By the time the sun was low, the second bridge was finished. The {hero} took a deep breath and stepped onto it. One step. Two. Three. Across the middle. All the way to the other side. It held. It didn't even creak.

The {hero} stood on the far bank, and this time no crowd cheered — but the {hero} felt taller than any grand arch. {companion_name} grinned from across the stream. "You built that," they called, "because the first bridge showed you how. The one that broke is the reason this one holds."

The {hero} looked back at the little bridge, steady over the water, and felt the burning shame finally cool into something quiet and strong. Falling in hadn't made the {hero} a failure. It had made the {hero} a better builder than they'd been that morning.

That night in {setting}, the {hero} set the {object_motif} beside the bed and thought, just before sleep, that maybe the best day wasn't the one where nothing went wrong. Maybe it was this one — the day something went very wrong, and the {hero} grew right through it.

{refrain}`,
        scriptTemplate: `In {setting}, there was a fair coming — the biggest one of the whole year — and this time there was a contest. Whoever could build the finest bridge across the little stream would have it used by the whole town for the rest of the summer. {child_name} wanted to win more than anything.

For a week, {child_name} planned in secret. {companion_name} kept offering to help, but every time, {child_name} shook their head. "I want to do this one myself," {child_name} said, turning a small {object_motif} over and over in their hands. "I want everyone to know I did it, all on my own." Deep down, {child_name} believed that if the bridge was good, it would prove, once and for all, that {child_name} was truly clever.

The morning of the fair, {child_name} carried their bridge down to the stream. It was beautiful to look at — tall and grand, with a proud arch in the middle. A crowd gathered on both banks. {child_name}'s stomach fluttered with excitement and nerves.

"Go on!" someone called. "Cross it!"

{child_name} stepped onto the bridge. One step. Two steps. On the third step, there was a crack, then a groan, and then the whole middle sagged and folded and dropped {child_name} — splash — right into the cold stream.

Laughter burst out along the banks. Not mean laughter, maybe, but {child_name} felt it like a sting all over. Water dripped from their nose. Everyone had watched. Everyone had seen the grand bridge crumple like wet paper.

{child_name} scrambled out and stood there, soaked and shaking, cheeks burning hotter than the sun. "I got it wrong," {child_name} said, and their voice wobbled. "In front of the whole town. I worked so hard and it broke anyway. Maybe I'm just not clever after all. Maybe I never was."

{child_name} wanted to disappear. The bridge, broken in the water, felt like proof of everything {child_name} feared about themselves.

{companion_name} made their way through the crowd and sat down on the wet bank, right next to {child_name}, not caring about the mud. They didn't laugh. They didn't say "it's fine" in that quick way that means it isn't. They just waited until {child_name} was ready.

"That hurt," {companion_name} said at last. "I know it did. Falling in front of everyone is one of the hardest things there is."

{child_name} nodded, still staring at the water.

"Can I show you something?" {companion_name} asked. {child_name} shrugged, which meant yes. {companion_name} reached into the stream and lifted up the broken middle of the bridge. "Look here. See where it snapped? It cracked right at the top of the arch, where there was nothing underneath to hold it. No supports. The bridge isn't telling you that you're bad at building. It's telling you exactly where it needed to be stronger."

{child_name} looked. It was true. The break wasn't everywhere — it was in one clear place. "So the way it broke... is like a message?" {child_name} asked slowly.

"That's just what it is," said {companion_name}. "A mistake isn't proof that you're not clever. A mistake is information. It quietly tells you what to try next, if you're brave enough to look at it instead of hiding from it. Getting something wrong and learning from it isn't the opposite of growing — it is part of how growing is done."

{child_name} wiped their face and squeezed the {object_motif} in their fist. The crowd had drifted off now, back to the fair, and somehow that made it easier to breathe. "The contest is over, though," {child_name} said. "I already lost."

"The contest, maybe," said {companion_name}. "But the stream is still here. And nobody's watching now. Just you, me, and what the bridge tried to teach you."

So {child_name} began again. This time, {child_name} didn't build for show. {child_name} built for the stream. They set strong posts down into the streambed first, right where the middle would be. They made the bridge lower, flatter, sturdier — less grand to look at, but honest. When one plank felt wobbly, {child_name} didn't panic. They studied it, saw why, and fixed just that. Each little mistake became one more thing {child_name} knew.

By the time the sun was low, the second bridge was finished. {child_name} took a deep breath and stepped onto it. One step. Two. Three. Across the middle. All the way to the other side. It held. It didn't even creak.

{child_name} stood on the far bank, and this time no crowd cheered — but {child_name} felt taller than any grand arch. {companion_name} grinned from across the stream. "You built that," they called, "because the first bridge showed you how. The one that broke is the reason this one holds."

{child_name} looked back at the little bridge, steady over the water, and felt the burning shame finally cool into something quiet and strong. Falling in hadn't made {child_name} a failure. It had made {child_name} a better builder than they'd been that morning.

That night in {setting}, {child_name} set the {object_motif} beside the bed and thought, just before sleep, that maybe the best day wasn't the one where nothing went wrong. Maybe it was this one — the day something went very wrong, and {child_name} grew right through it.

{refrain}`,
      },
      '9-11': {
        audioTemplate: `In {setting}, the festival of lights came only once a year, and this year the {hero} had been given the greatest honor of all. Every family in the town would write a wish on a paper lantern, and someone had to build the raft that would carry all those wishes out across the water at dusk, glowing, for everyone to watch. The town had chosen the {hero}.

The {hero} had never wanted anything so badly, or been so afraid of anything. To be chosen felt like being told, at last, that they mattered — that they were capable, that they were somebody the town could count on. And so, when {companion_name} gently offered to help with the raft, the {hero} said no. "They picked me," the {hero} said, turning a small {object_motif} over and over between their fingers, the way they always did when they were nervous. "If someone helps me, then it isn't really me they can count on, is it? I have to do this part alone."

{companion_name} watched the {hero} for a long moment, and then nodded. "All right," they said. "But I'm here. Remember that I'm here."

For three days the {hero} worked in secret, and the work went badly in a hundred small ways the {hero} chose not to notice. The lashings that held the raft together kept slipping, and instead of stopping to understand why, the {hero} just tied them tighter and hurried on. There wasn't time to fix everything, the {hero} told themselves. It only had to hold for one evening. It only had to hold long enough.

Dusk came. The whole town gathered along the shore, hundreds of them, their faces warm in the light of the lanterns they carried. Children sat on shoulders. Old people leaned on the railings. Every single one of them had written a wish, and every single wish was about to be placed, one by one, onto the {hero}'s raft. The {hero} stood at the water's edge with the {object_motif} clutched tight, heart hammering, and thought: this is the moment everything changes.

The lanterns went on, one after another, until the raft was a floating hill of soft light, the most beautiful thing the {hero} had ever seen. The town held its breath. The {hero} pushed the raft gently out onto the dark water.

It drifted. It glowed. And then, near the middle, a lashing the {hero} had never fixed came loose. The logs turned. The raft twisted, buckled, and slowly, terribly, folded in on itself. One by one, then all at once, the lanterns tipped and hissed out in the water. The light went dark. Hundreds of wishes floated loose and sinking on the black surface of the water, and a great, low sound of dismay rolled through the crowd.

The {hero} stood frozen. The heat that rushed up their neck and into their face was worse than any pain they had ever felt. This wasn't a game they had lost. These were everyone's wishes. Their grandmother's wish. The little kids' wishes. The whole town had trusted the {hero} with the most important night of the year, and the {hero} had let every single one of them down, in front of every single one of them.

"I ruined it," the {hero} whispered, and the words tasted like ash. "I ruined everything. They trusted me and I ruined it. I knew those knots were wrong and I didn't fix them." Tears came hot and fast, and the worst part, the part that made the {hero} want to sink into the ground and vanish, was the quiet certainty underneath: this is proof. This is proof that I am not who they hoped. I am not capable. I never was.

The {hero} ran. They ran from the shore, from the murmuring crowd, all the way to the dark and empty edge of {setting}, and there they sat with their knees pulled up and the {object_motif} pressed against their forehead, shaking.

It was a long time before footsteps came. {companion_name} did not rush. They sat down beside the {hero} on the cold ground and, for a while, said nothing at all — did not tell the {hero} it was fine, because it wasn't fine, and they both knew it. That silence, strangely, was the first thing all night that didn't hurt.

"I let them all down," the {hero} said finally, voice cracking. "Don't tell me I didn't."

"You did," {companion_name} said quietly. The {hero} flinched, but {companion_name} went on, steady and kind. "You let them down tonight. That's true, and pretending it isn't true wouldn't help you. But listen to me, because this next part is just as true, and it's the part shame doesn't want you to hear." They waited until the {hero} looked up. "You knew the lashings were wrong. You just told me so yourself. That's not proof that you're not capable. That is the single most useful thing you could possibly know right now."

"How?" the {hero} said bitterly. "How is knowing I failed useful?"

"Because it tells you exactly what to do differently," said {companion_name}. "A mistake isn't a verdict on who you are. A mistake is information. It's the raft, out there in the dark, telling you precisely where it needed to be stronger — and telling you something else, too: that next time, you stop when something feels wrong instead of tying it tighter and hoping. You didn't fail because you're not capable. You failed because you tried to carry the whole thing alone, and you ignored what the work was trying to tell you. Those are things a person learns. Getting something wrong and letting it teach you isn't the opposite of growing up — it is part of how growing is done."

The {hero} was quiet for a long time, turning the {object_motif} slowly in the dark. The shame was still there, hot and heavy. But underneath it, for the first time all night, was a thin, steadying thread of something else. Not an excuse. A direction.

"I could rebuild it," the {hero} said slowly. "For tomorrow night. The festival's second evening. If — if the town would even let me."

"They wrote their wishes on paper," {companion_name} said, the smallest smile in their voice. "Paper can be written again. And the town didn't choose you because you were perfect. Nobody is. They can choose you again because you're the one who's going to understand exactly why the first raft failed."

So the {hero} went back the next day, in the plain light of morning, and this time the {hero} did not build in secret and did not build alone. The {hero} studied the broken raft where it had washed up, learned every place it had come apart, and understood each one. When {companion_name} offered a second pair of hands, the {hero} said yes — and found that saying yes did not make the raft any less theirs. They tested every lashing by pulling on it hard, on purpose, so that any weakness would show now, in the daylight, and not later in front of the town. Where a knot slipped, the {hero} did not tie it tighter and hope. The {hero} stopped, and thought, and tied it differently, and pulled again.

By the second dusk, the new raft sat low and solid on the water, unremarkable to look at and strong as bedrock. The town came back — all of them, which frightened the {hero} more than anything — and wrote their wishes again. The {hero}'s hands trembled as the first lantern went down. But the raft held. It held through every lantern, held as the {hero} pushed it out, held as it drifted glowing into the middle of the dark water and stayed there, a hill of light that did not fold or fail. This time the great sound from the crowd was not dismay. It was a cheer, and it rolled over the {hero} like warm water.

But the thing the {hero} would remember, long after, was not the cheer. It was the quiet knowledge, settling deep and permanent inside them, that the raft glowing out there existed because the first one had sunk — that the failure everyone had watched was the exact reason tonight had held. The shame had cooled at last into something the {hero} could keep: not the belief that they never made mistakes, but the harder, truer strength of someone who had made a real one, in front of everyone, and grown straight through the middle of it.

That night in {setting}, the {hero} set the {object_motif} on the windowsill and watched the last of the lantern light fade over the water, and was not afraid of being chosen anymore.

{refrain}`,
        scriptTemplate: `In {setting}, the festival of lights came only once a year, and this year {child_name} had been given the greatest honor of all. Every family in the town would write a wish on a paper lantern, and someone had to build the raft that would carry all those wishes out across the water at dusk, glowing, for everyone to watch. The town had chosen {child_name}.

{child_name} had never wanted anything so badly, or been so afraid of anything. To be chosen felt like being told, at last, that they mattered — that they were capable, that they were somebody the town could count on. And so, when {companion_name} gently offered to help with the raft, {child_name} said no. "They picked me," {child_name} said, turning a small {object_motif} over and over between their fingers, the way they always did when they were nervous. "If someone helps me, then it isn't really me they can count on, is it? I have to do this part alone."

{companion_name} watched {child_name} for a long moment, and then nodded. "All right," they said. "But I'm here. Remember that I'm here."

For three days {child_name} worked in secret, and the work went badly in a hundred small ways {child_name} chose not to notice. The lashings that held the raft together kept slipping, and instead of stopping to understand why, {child_name} just tied them tighter and hurried on. There wasn't time to fix everything, {child_name} told themselves. It only had to hold for one evening. It only had to hold long enough.

Dusk came. The whole town gathered along the shore, hundreds of them, their faces warm in the light of the lanterns they carried. Children sat on shoulders. Old people leaned on the railings. Every single one of them had written a wish, and every single wish was about to be placed, one by one, onto {child_name}'s raft. {child_name} stood at the water's edge with the {object_motif} clutched tight, heart hammering, and thought: this is the moment everything changes.

The lanterns went on, one after another, until the raft was a floating hill of soft light, the most beautiful thing {child_name} had ever seen. The town held its breath. {child_name} pushed the raft gently out onto the dark water.

It drifted. It glowed. And then, near the middle, a lashing {child_name} had never fixed came loose. The logs turned. The raft twisted, buckled, and slowly, terribly, folded in on itself. One by one, then all at once, the lanterns tipped and hissed out in the water. The light went dark. Hundreds of wishes floated loose and sinking on the black surface of the water, and a great, low sound of dismay rolled through the crowd.

{child_name} stood frozen. The heat that rushed up their neck and into their face was worse than any pain they had ever felt. This wasn't a game they had lost. These were everyone's wishes. {child_name}'s grandmother's wish. The little kids' wishes. The whole town had trusted {child_name} with the most important night of the year, and {child_name} had let every single one of them down, in front of every single one of them.

"I ruined it," {child_name} whispered, and the words tasted like ash. "I ruined everything. They trusted me and I ruined it. I knew those knots were wrong and I didn't fix them." Tears came hot and fast, and the worst part, the part that made {child_name} want to sink into the ground and vanish, was the quiet certainty underneath: this is proof. This is proof that I am not who they hoped. I am not capable. I never was.

{child_name} ran. They ran from the shore, from the murmuring crowd, all the way to the dark and empty edge of {setting}, and there they sat with their knees pulled up and the {object_motif} pressed against their forehead, shaking.

It was a long time before footsteps came. {companion_name} did not rush. They sat down beside {child_name} on the cold ground and, for a while, said nothing at all — did not tell {child_name} it was fine, because it wasn't fine, and they both knew it. That silence, strangely, was the first thing all night that didn't hurt.

"I let them all down," {child_name} said finally, voice cracking. "Don't tell me I didn't."

"You did," {companion_name} said quietly. {child_name} flinched, but {companion_name} went on, steady and kind. "You let them down tonight. That's true, and pretending it isn't true wouldn't help you. But listen to me, because this next part is just as true, and it's the part shame doesn't want you to hear." They waited until {child_name} looked up. "You knew the lashings were wrong. You just told me so yourself. That's not proof that you're not capable. That is the single most useful thing you could possibly know right now."

"How?" {child_name} said bitterly. "How is knowing I failed useful?"

"Because it tells you exactly what to do differently," said {companion_name}. "A mistake isn't a verdict on who you are. A mistake is information. It's the raft, out there in the dark, telling you precisely where it needed to be stronger — and telling you something else, too: that next time, you stop when something feels wrong instead of tying it tighter and hoping. You didn't fail because you're not capable. You failed because you tried to carry the whole thing alone, and you ignored what the work was trying to tell you. Those are things a person learns. Getting something wrong and letting it teach you isn't the opposite of growing up — it is part of how growing is done."

{child_name} was quiet for a long time, turning the {object_motif} slowly in the dark. The shame was still there, hot and heavy. But underneath it, for the first time all night, was a thin, steadying thread of something else. Not an excuse. A direction.

"I could rebuild it," {child_name} said slowly. "For tomorrow night. The festival's second evening. If — if the town would even let me."

"They wrote their wishes on paper," {companion_name} said, the smallest smile in their voice. "Paper can be written again. And the town didn't choose you because you were perfect. Nobody is. They can choose you again because you're the one who's going to understand exactly why the first raft failed."

So {child_name} went back the next day, in the plain light of morning, and this time {child_name} did not build in secret and did not build alone. {child_name} studied the broken raft where it had washed up, learned every place it had come apart, and understood each one. When {companion_name} offered a second pair of hands, {child_name} said yes — and found that saying yes did not make the raft any less theirs. They tested every lashing by pulling on it hard, on purpose, so that any weakness would show now, in the daylight, and not later in front of the town. Where a knot slipped, {child_name} did not tie it tighter and hope. {child_name} stopped, and thought, and tied it differently, and pulled again.

By the second dusk, the new raft sat low and solid on the water, unremarkable to look at and strong as bedrock. The town came back — all of them, which frightened {child_name} more than anything — and wrote their wishes again. {child_name}'s hands trembled as the first lantern went down. But the raft held. It held through every lantern, held as {child_name} pushed it out, held as it drifted glowing into the middle of the dark water and stayed there, a hill of light that did not fold or fail. This time the great sound from the crowd was not dismay. It was a cheer, and it rolled over {child_name} like warm water.

But the thing {child_name} would remember, long after, was not the cheer. It was the quiet knowledge, settling deep and permanent inside them, that the raft glowing out there existed because the first one had sunk — that the failure everyone had watched was the exact reason tonight had held. The shame had cooled at last into something {child_name} could keep: not the belief that they never made mistakes, but the harder, truer strength of someone who had made a real one, in front of everyone, and grown straight through the middle of it.

That night in {setting}, {child_name} set the {object_motif} on the windowsill and watched the last of the lantern light fade over the water, and was not afraid of being chosen anymore.

{refrain}`,
      },
    },
    audioTemplate: `In the soft dark of {setting}, the {hero} made a mistake — a real one — and wished they could disappear.

"I got it wrong," they said, cheeks warm. "I should not make mistakes."

The {object_motif} rustled, its newest leaf unfurling from where an old one had fallen.

{companion_name} settled beside them, calm and warm. "Look at the {object_motif}," they said. "It grows by trying, dropping a leaf, and trying again. A mistake is not the end of growing. It is part of how growing is done."

"But it felt bad," said the {hero}.

"Feelings like that fade," said {companion_name}. "What stays is what the mistake taught you. It whispered exactly what to try next. That is a gift, not a failure."

The {hero} thought about it, and the heavy, hiding feeling loosened. A mistake was only the world telling them which way to go.

They looked once more at the {object_motif}, growing in the dark, and felt a little braver.

{refrain}.`,
    scriptTemplate: `In the soft dark of {setting}, {child_name} the {hero} made a mistake — a real one — and wished they could disappear.

"I got it wrong," {child_name} said, cheeks warm. "I should not make mistakes."

The {object_motif} rustled, its newest leaf unfurling from where an old one had fallen.

{companion_name} settled beside them, calm and warm. "Look at the {object_motif}, {child_name}," they said. "It grows by trying, dropping a leaf, and trying again. A mistake is not the end of growing. It is part of how growing is done."

"But it felt bad," said {child_name}.

"Feelings like that fade," said {companion_name}. "What stays is what the mistake taught you. It whispered exactly what to try next. That is a gift, not a failure."

{child_name} thought about it, and the heavy, hiding feeling loosened. A mistake was only the world telling them which way to go.

{child_name} looked once more at the {object_motif}, growing in the dark, and felt a little braver.

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

Just then, {companion_name} came along. "You are working so hard," said {companion_name}. "But you keep pushing the same way, over and over. Maybe the door does not need a bigger push. Maybe it needs A different way."

"A different way?" said the {hero}.

"Yes," said {companion_name} softly. "When one way does not work, we can try another one."

The {hero} looked at the door again. Right beside it hung a shiny {object_motif}, swinging gently. The {hero} had been pushing so hard that they never even saw it.

"What if I do not push at all?" said the {hero}. "What if I pull?"

The {hero} took a slow, deep breath. Then, instead of pushing, the {hero} pulled. Cre-e-eak! The little round door swung wide open!

Inside was a warm room full of tiny glowing stars. The {hero} gasped and clapped their hands. Pushing harder had never, ever worked. But trying A different way opened the door in one try.

"You did it!" cheered {companion_name}. "You did not give up. You just found a new way to try."

"Will it always work the very first time?" asked the {hero}.

"Not always," said {companion_name}. "But there is always another way to try. That is what makes you brave."

The {hero} held the shiny {object_motif} close and smiled a big sleepy smile. Now the {hero} knew a wonderful little secret. Being stuck is not the end of the story. It only means it is time to try A different way.

{refrain}`,
        scriptTemplate: `Deep in {setting}, {child_name} found a little round door. Behind it, something wonderful was waiting. But the little door was stuck tight, and it would not open.

So {child_name} pushed. Push, push, push! The door did not open.

{child_name} pushed again, the very same way, in the very same spot. Push, push, push! The door stayed shut.

Again and again {child_name} pushed, harder and harder. The door did not move, not even a little. {child_name} huffed and puffed and felt cross.

Just then, {companion_name} came along. "You are working so hard," said {companion_name}. "But you keep pushing the same way, over and over. Maybe the door does not need a bigger push. Maybe it needs A different way."

"A different way?" said {child_name}.

"Yes," said {companion_name} softly. "When one way does not work, we can try another one."

{child_name} looked at the door again. Right beside it hung a shiny {object_motif}, swinging gently. {child_name} had been pushing so hard that they never even saw it.

"What if I do not push at all?" said {child_name}. "What if I pull?"

{child_name} took a slow, deep breath. Then, instead of pushing, {child_name} pulled. Cre-e-eak! The little round door swung wide open!

Inside was a warm room full of tiny glowing stars. {child_name} gasped and clapped their hands. Pushing harder had never, ever worked. But trying A different way opened the door in one try.

"You did it!" cheered {companion_name}. "You did not give up. You just found a new way to try."

"Will it always work the very first time?" asked {child_name}.

"Not always," said {companion_name}. "But there is always another way to try. That is what makes you brave."

{child_name} held the shiny {object_motif} close and smiled a big sleepy smile. Now {child_name} knew a wonderful little secret. Being stuck is not the end of the story. It only means it is time to try A different way.

{refrain}`,
      },
      '5-6': {
        audioTemplate: `High in {setting}, the {hero} discovered an old round door set into the wall. Something wonderful glowed softly behind it, just out of reach. The {hero} wanted to see it more than anything. But the door was shut tight, and it would not budge.

So the {hero} pushed. Push, push, push! Nothing happened.

The {hero} planted both feet, leaned in, and pushed again, the very same way, in the very same spot. Push, push, push! The door did not move.

"I just need to try harder," the {hero} said. So they did. Again and again and again, the {hero} shoved at the same place with all their might. Their arms grew tired. Their face grew hot. And still the door stayed exactly as shut as before.

The {hero} sat down with a grumpy thump. "I am trying so hard," they said, "but nothing is working."

Just then {companion_name} came near. "I have been watching you," said {companion_name} gently. "You are very brave, and you are working very, very hard. But do you see what you keep doing? You push the same way, then you push the same way again, and then the same way once more."

"That is what trying hard means," said the {hero}.

"It is one kind of trying," said {companion_name} with a kind smile. "But pushing harder on the same spot is not the only way to be strong. Sometimes real persistence is not doing the same thing louder. Sometimes it is being brave enough to try A different way."

The {hero} thought about that. It felt strange. They had been so sure that pushing was right. "A different way," the {hero} whispered.

"Look around," said {companion_name}. "What have you not tried yet?"

The {hero} stood up and really looked, for the first time. Beside the door hung a shiny {object_motif}, turning slowly on a little hook. Below the door was a smooth handle they had never touched. They had been pushing so hard, and staring so hard at one spot, that they had missed everything else.

"Maybe it does not push," said the {hero} slowly. "Maybe it pulls. Or maybe it slides."

The {hero} took a deep breath and, instead of pushing, gave the handle a gentle pull. The door did not open. But it wobbled! Something moved!

"It moved!" cried the {hero}. "That is more than pushing ever did!"

"You are getting warmer," laughed {companion_name}. "Keep trying new ways."

So the {hero} pulled a little to the side, and with a soft whoosh, the round door slid open like a curtain. Warm golden light spilled out. Inside was a room full of floating, glowing stars, gentle as fireflies.

The {hero} laughed out loud. All that pushing had never worked, not even once. But one calm, clever, different way had opened the door at last.

"You did it," said {companion_name} proudly. "And do you know the best part? You did not give up. You just stopped repeating the one way that was stuck, and you tried A different way instead."

The {hero} picked up the shiny {object_motif} and held it close, warm against their heart. They would remember this. When something will not work no matter how hard you push, that is not the moment to quit. It is the moment to stop, look around, and try A different way.

And with the little stars glowing softly around them, the {hero} smiled a sleepy, happy smile.

{refrain}`,
        scriptTemplate: `High in {setting}, {child_name} discovered an old round door set into the wall. Something wonderful glowed softly behind it, just out of reach. {child_name} wanted to see it more than anything. But the door was shut tight, and it would not budge.

So {child_name} pushed. Push, push, push! Nothing happened.

{child_name} planted both feet, leaned in, and pushed again, the very same way, in the very same spot. Push, push, push! The door did not move.

"I just need to try harder," {child_name} said. So they did. Again and again and again, {child_name} shoved at the same place with all their might. Their arms grew tired. Their face grew hot. And still the door stayed exactly as shut as before.

{child_name} sat down with a grumpy thump. "I am trying so hard," they said, "but nothing is working."

Just then {companion_name} came near. "I have been watching you," said {companion_name} gently. "You are very brave, and you are working very, very hard. But do you see what you keep doing? You push the same way, then you push the same way again, and then the same way once more."

"That is what trying hard means," said {child_name}.

"It is one kind of trying," said {companion_name} with a kind smile. "But pushing harder on the same spot is not the only way to be strong. Sometimes real persistence is not doing the same thing louder. Sometimes it is being brave enough to try A different way."

{child_name} thought about that. It felt strange. They had been so sure that pushing was right. "A different way," {child_name} whispered.

"Look around," said {companion_name}. "What have you not tried yet?"

{child_name} stood up and really looked, for the first time. Beside the door hung a shiny {object_motif}, turning slowly on a little hook. Below the door was a smooth handle they had never touched. They had been pushing so hard, and staring so hard at one spot, that they had missed everything else.

"Maybe it does not push," said {child_name} slowly. "Maybe it pulls. Or maybe it slides."

{child_name} took a deep breath and, instead of pushing, gave the handle a gentle pull. The door did not open. But it wobbled! Something moved!

"It moved!" cried {child_name}. "That is more than pushing ever did!"

"You are getting warmer," laughed {companion_name}. "Keep trying new ways."

So {child_name} pulled a little to the side, and with a soft whoosh, the round door slid open like a curtain. Warm golden light spilled out. Inside was a room full of floating, glowing stars, gentle as fireflies.

{child_name} laughed out loud. All that pushing had never worked, not even once. But one calm, clever, different way had opened the door at last.

"You did it," said {companion_name} proudly. "And do you know the best part? You did not give up. You just stopped repeating the one way that was stuck, and you tried A different way instead."

{child_name} picked up the shiny {object_motif} and held it close, warm against their heart. They would remember this. When something will not work no matter how hard you push, that is not the moment to quit. It is the moment to stop, look around, and try A different way.

And with the little stars glowing softly around them, {child_name} smiled a sleepy, happy smile.

{refrain}`,
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

"Here is a secret that took me a long time to learn," said {companion_name}. "Trying hard is good. But doing the exact same thing again and again, only harder, is not really trying hard. It is being stuck in one idea. Real persistence, the strong kind, is being brave enough to try A different way."

The {hero} frowned. Part of them did not want to hear it. Pushing had felt right. Pushing had felt like being determined. Changing now felt almost like admitting the first way had been wrong. "But I was so sure," they said quietly.

"Being sure is not the same as being right," said {companion_name} kindly. "And changing your plan is not giving up. It is getting smarter. Look around you. What have you not tried?"

Slowly, the {hero} did something they had not done the whole time. They stopped pushing, and they looked. Really looked. Beside the door hung a shiny {object_motif}, swaying softly on a hook. Down low, near the ground, sat a smooth iron handle, half in shadow. There were grooves along one edge of the door, like the tracks of a sliding gate. All this time they had been staring at one single spot, and they had missed everything else.

"Maybe," the {hero} said slowly, "it was never a pushing door at all."

They crouched down and gave the handle a careful pull. The door did not open, but it shifted, just a little, with a soft grinding sound. Something that had never happened before.

"It moved!" the {hero} gasped. "Pulling did more in one try than pushing did in a hundred!"

"Keep going," laughed {companion_name}. "You have found the trail. Now follow it."

So the {hero} tried the new idea properly. They braced their feet, gripped the handle, and pulled the great door sideways along its hidden grooves. With a long, deep whoosh, it rolled open like a curtain of stone.

Golden light poured out over them. Inside was a round room filled with slow-floating stars, drifting and glowing like a whole sky brought indoors. It was even more wonderful than the {hero} had imagined.

For a moment they just stood there, breathing it in. Then they laughed, a big, surprised, happy laugh. "All that pushing," they said, shaking their head. "And the answer was A different way the whole time."

"You found it yourself," said {companion_name} proudly. "I only reminded you to look."

The {hero} reached up and lifted the shiny {object_motif} from its hook, holding it close. They wanted to remember this feeling. Not the sore arms, not the frustration, but the moment they stopped repeating themselves and dared to try something new.

"Next time I get stuck," the {hero} said softly, "I will not just push harder. I will stop, and look, and try A different way."

And there, wrapped in warm and floating starlight, the {hero} smiled a slow, sleepy, contented smile.

{refrain}`,
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

"Here is a secret that took me a long time to learn," said {companion_name}. "Trying hard is good. But doing the exact same thing again and again, only harder, is not really trying hard. It is being stuck in one idea. Real persistence, the strong kind, is being brave enough to try A different way."

{child_name} frowned. Part of them did not want to hear it. Pushing had felt right. Pushing had felt like being determined. Changing now felt almost like admitting the first way had been wrong. "But I was so sure," they said quietly.

"Being sure is not the same as being right," said {companion_name} kindly. "And changing your plan is not giving up. It is getting smarter. Look around you. What have you not tried?"

Slowly, {child_name} did something they had not done the whole time. They stopped pushing, and they looked. Really looked. Beside the door hung a shiny {object_motif}, swaying softly on a hook. Down low, near the ground, sat a smooth iron handle, half in shadow. There were grooves along one edge of the door, like the tracks of a sliding gate. All this time they had been staring at one single spot, and they had missed everything else.

"Maybe," {child_name} said slowly, "it was never a pushing door at all."

They crouched down and gave the handle a careful pull. The door did not open, but it shifted, just a little, with a soft grinding sound. Something that had never happened before.

"It moved!" {child_name} gasped. "Pulling did more in one try than pushing did in a hundred!"

"Keep going," laughed {companion_name}. "You have found the trail. Now follow it."

So {child_name} tried the new idea properly. They braced their feet, gripped the handle, and pulled the great door sideways along its hidden grooves. With a long, deep whoosh, it rolled open like a curtain of stone.

Golden light poured out over them. Inside was a round room filled with slow-floating stars, drifting and glowing like a whole sky brought indoors. It was even more wonderful than {child_name} had imagined.

For a moment they just stood there, breathing it in. Then they laughed, a big, surprised, happy laugh. "All that pushing," they said, shaking their head. "And the answer was A different way the whole time."

"You found it yourself," said {companion_name} proudly. "I only reminded you to look."

{child_name} reached up and lifted the shiny {object_motif} from its hook, holding it close. They wanted to remember this feeling. Not the sore arms, not the frustration, but the moment they stopped repeating themselves and dared to try something new.

"Next time I get stuck," {child_name} said softly, "I will not just push harder. I will stop, and look, and try A different way."

And there, wrapped in warm and floating starlight, {child_name} smiled a slow, sleepy, contented smile.

{refrain}`,
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

"That is the trap," said {companion_name}, and there was no unkindness in it. "It is the trap almost everyone falls into, because it wears the costume of courage. Pushing harder feels brave. Refusing to change feels loyal, somehow, loyal to the plan, to the version of you that was so certain. But listen carefully, because this is the part that matters. Real persistence is not doing the same thing harder and harder until it works or you break. Real persistence is refusing to quit on the goal while being completely willing to change the way you reach it. The strong move, the genuinely stubborn, unbeatable move, is to be brave enough to try A different way."

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

"Now you have a better one," said {companion_name}, floating in beside them. "When you meet a wall, you will remember. You do not have to be someone who never gets stuck. You only have to be someone who, when they get stuck, is willing to try A different way."

The {hero} reached up and lifted the shiny {object_motif} from its hook, closing their fingers around it, keeping it, not as a prize, but as a promise to their future self. They would forget this lesson, probably, the way people do. And this small, bright thing would be here to remind them.

Then, with the freed stars turning slowly around them and the long journey finally, gently, at its end, the {hero} let out a deep and easy breath, and smiled.

{refrain}`,
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

"That is the trap," said {companion_name}, and there was no unkindness in it. "It is the trap almost everyone falls into, because it wears the costume of courage. Pushing harder feels brave. Refusing to change feels loyal, somehow, loyal to the plan, to the version of you that was so certain. But listen carefully, because this is the part that matters. Real persistence is not doing the same thing harder and harder until it works or you break. Real persistence is refusing to quit on the goal while being completely willing to change the way you reach it. The strong move, the genuinely stubborn, unbeatable move, is to be brave enough to try A different way."

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

"Now you have a better one," said {companion_name}, floating in beside them. "When you meet a wall, you will remember. You do not have to be someone who never gets stuck. You only have to be someone who, when they get stuck, is willing to try A different way."

{child_name} reached up and lifted the shiny {object_motif} from its hook, closing their fingers around it, keeping it, not as a prize, but as a promise to their future self. They would forget this lesson, probably, the way people do. And this small, bright thing would be here to remind them.

Then, with the freed stars turning slowly around them and the long journey finally, gently, at its end, {child_name} let out a deep and easy breath, and smiled.

{refrain}`,
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

{refrain}`,
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

{refrain}`,
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

{refrain}`,
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

{refrain}`,
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

{refrain}`,
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

{refrain}`,
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

{refrain}`,
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

{refrain}`,
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
