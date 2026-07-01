// content/voice/levels.ts
//
// "Speaking Up" path (slug: voice) — assertiveness, self-advocacy, boundaries,
// and standing up for yourself and others.
//
// TWO TEMPLATES PER LEVEL:
//   audioTemplate  — narrated by Kokoro. No {child_name}; uses "the {hero}".
//   scriptTemplate — shown in email + library. Same prose with {child_name}.
//
// ageVariants scale length + sophistication by band:
//   '3-4' ~short · '5-6' ~medium · default ≈ age 7-8 · '9-11' ~long & mature.
// The learningBeat must appear verbatim in EVERY template (the assembler guards it).

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1,
    title: 'Your Voice Matters',
    concept: 'Your words and ideas have value',
    callback: null,
    ageFloor: 3,
    summary: 'A small, quiet hero has a true thing to say but worries no one will listen. With the help of a wise companion, they learn that being little does not make an idea little, and they speak up for the very first time. The story teaches children that their words and ideas have real value and deserve to be heard.',
    teachingNote: 'Even a small or quiet voice can carry something important, and speaking up is worth the courage it takes.',
    learningBeat: 'your voice matters',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, there lived a small and quiet {hero}.

The {hero} liked to watch and listen. The {hero} did not say much at all.

One day, the {hero} found something. It was {object_motif}. It glowed in the {hero}'s little hands.

"Look," the {hero} wanted to say. But the {hero} felt too small. "No one will hear me," thought the {hero}.

Then came {companion_name}, kind and slow. "You look like you have something to share," said {companion_name}.

The {hero} held up {object_motif}. But the words stayed quiet inside.

"Little one," said {companion_name}, "your voice matters. Big or small, what you say is good to hear."

The {hero} took a soft breath. The {hero} opened their mouth. "I found this," said the {hero}. "It is special."

And everyone turned to look! Everyone smiled. They had not seen {object_motif} before. The {hero} had something true to share all along.

The {hero} felt warm and proud. Speaking up was not so scary after all.

{companion_name} gave a happy nod. "See? When you speak, good things happen."

That night, the {hero} curled up safe in {setting}. The {hero} was small. But the {hero} was heard.

{refrain}.`,
        scriptTemplate: `In {setting}, there lived a small and quiet {child_name}.

{child_name} liked to watch and listen. {child_name} did not say much at all.

One day, {child_name} found something. It was {object_motif}. It glowed in {child_name}'s little hands.

"Look," {child_name} wanted to say. But {child_name} felt too small. "No one will hear me," thought {child_name}.

Then came {companion_name}, kind and slow. "You look like you have something to share," said {companion_name}.

{child_name} held up {object_motif}. But the words stayed quiet inside.

"Little one," said {companion_name}, "your voice matters. Big or small, what you say is good to hear."

{child_name} took a soft breath. {child_name} opened their mouth. "I found this," said {child_name}. "It is special."

And everyone turned to look! Everyone smiled. They had not seen {object_motif} before. {child_name} had something true to share all along.

{child_name} felt warm and proud. Speaking up was not so scary after all.

{companion_name} gave a happy nod. "See? When you speak, good things happen."

That night, {child_name} curled up safe in {setting}. {child_name} was small. But {child_name} was heard.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `In {setting}, there lived a {hero} who was the quietest of all. While the others called and played and made their plans out loud, the {hero} mostly listened. Listening felt safe. Talking felt big and scary.

One morning, the {hero} noticed something the others had missed. Tucked away in a hidden corner of {setting} was {object_motif}, shining softly, waiting. The {hero}'s heart jumped. This was wonderful. This was important.

But just as the {hero} opened their mouth to call out, a small worried voice inside whispered, "What if no one cares? What if your idea is too small?" So the {hero} stayed quiet, and the bright feeling shrank.

That was when {companion_name} drifted close. {companion_name} had lived in {setting} a long time and noticed many things, including the {hero}'s tucked-down chin.

"You found something, didn't you?" said {companion_name} gently. "I can see it in your eyes."

The {hero} nodded. "But I'm small," the {hero} whispered. "Nobody listens to someone like me."

{companion_name} smiled a slow, warm smile. "Let me tell you a secret. Being small does not make your idea small. A quiet voice can still say something true. And your voice matters, little one. It always has."

The {hero} looked down at {object_motif} glowing in their hands. The {hero} thought about how good it would feel to share it. Slowly, the worried whisper grew softer, and something braver grew louder.

The {hero} took a deep breath. Then, in a clear voice that surprised even themselves, the {hero} called out, "Everyone! Come and see! Look what I found!"

And they came. One by one, the others gathered around. Their eyes went wide when they saw {object_motif}, so beautiful and so special. "How did you find this?" they asked. "We walked right past it!"

The {hero} felt a warmth spread all the way to their toes. For the first time, everyone was listening, not because the {hero} was loud, but because the {hero} had something true to say.

{companion_name} gave a proud little nod. "You see? You had a gift to share all along. You only needed the courage to share it."

From that day on, the {hero} still loved to listen. But now, when something true bubbled up inside, the {hero} knew it was worth saying out loud.

That night, snug and sleepy in {setting}, the {hero} held the memory close like a tiny light. Small and quiet, yes. But heard, at last.

{refrain}.`,
        scriptTemplate: `In {setting}, there lived a {child_name} who was the quietest of all. While the others called and played and made their plans out loud, {child_name} mostly listened. Listening felt safe. Talking felt big and scary.

One morning, {child_name} noticed something the others had missed. Tucked away in a hidden corner of {setting} was {object_motif}, shining softly, waiting. {child_name}'s heart jumped. This was wonderful. This was important.

But just as {child_name} opened their mouth to call out, a small worried voice inside whispered, "What if no one cares? What if your idea is too small?" So {child_name} stayed quiet, and the bright feeling shrank.

That was when {companion_name} drifted close. {companion_name} had lived in {setting} a long time and noticed many things, including {child_name}'s tucked-down chin.

"You found something, didn't you?" said {companion_name} gently. "I can see it in your eyes."

{child_name} nodded. "But I'm small," {child_name} whispered. "Nobody listens to someone like me."

{companion_name} smiled a slow, warm smile. "Let me tell you a secret. Being small does not make your idea small. A quiet voice can still say something true. And your voice matters, little one. It always has."

{child_name} looked down at {object_motif} glowing in their hands. {child_name} thought about how good it would feel to share it. Slowly, the worried whisper grew softer, and something braver grew louder.

{child_name} took a deep breath. Then, in a clear voice that surprised even themselves, {child_name} called out, "Everyone! Come and see! Look what I found!"

And they came. One by one, the others gathered around. Their eyes went wide when they saw {object_motif}, so beautiful and so special. "How did you find this?" they asked. "We walked right past it!"

{child_name} felt a warmth spread all the way to their toes. For the first time, everyone was listening, not because {child_name} was loud, but because {child_name} had something true to say.

{companion_name} gave a proud little nod. "You see? You had a gift to share all along. You only needed the courage to share it."

From that day on, {child_name} still loved to listen. But now, when something true bubbled up inside, {child_name} knew it was worth saying out loud.

That night, snug and sleepy in {setting}, {child_name} held the memory close like a tiny light. Small and quiet, yes. But heard, at last.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `The {hero} had always been the kind to sit at the edge of things, watching {setting} hum with the easy noise of everyone else. The loud ones decided where to go and what to do, and somehow their plans always became everyone's plans, simply because they said them first and said them sure. The {hero} had opinions too. They just lived quietly, folded up small, somewhere behind the {hero}'s ribs.

So when the group gathered that evening to settle on their route through the far reaches of {setting}, the {hero} listened the way the {hero} always did. The plan taking shape was the obvious one, the one the boldest voices liked: straight across the open stretch, fast and direct. Everyone nodded. It sounded good. It sounded simple.

But the {hero} knew something the others had forgotten. The {hero} had spent so many quiet hours watching that the {hero} had learned things nobody bothered to learn out loud. The open stretch was beautiful, yes, but at this time of the season it turned treacherous, and there was a longer way, a curving path the {hero} had traced a dozen times in their head, that was safer and, in the end, faster. The {hero} was almost certain of it.

Almost. And there it was, the familiar tightening. Who was the {hero} to correct the loud ones, the sure ones? What if the {hero} spoke and the words came out wrong, or worse, what if the {hero} was mistaken and everyone turned to look with that particular kind of patience people save for someone who should have stayed quiet? The plan was nearly decided now. It would be so much easier to let it pass, to nod along, to be carried by the current like always.

The {hero} turned {object_motif} over and over in restless fingers. {companion_name}, who had been watching from nearby with the unhurried attention of someone who misses very little, settled beside the {hero}.

"You've gone somewhere far away," said {companion_name} quietly, so only the {hero} could hear. "Your hands are busy and your mouth is shut. In my experience, that means you're sitting on something."

"It's nothing," the {hero} said. "Probably nothing. They've already decided."

"They've spoken," {companion_name} agreed. "Deciding and speaking aren't the same thing. What is it you're not saying?"

The {hero} hesitated, then let it out in a low rush, all about the season and the open stretch and the curving path, the words tumbling faster as they went, the way true things do once you finally start. {companion_name} listened to every word without interrupting, and when the {hero} finished, {companion_name} did not laugh, and did not look patient, and did not look away.

"And you were going to keep that to yourself," {companion_name} said. It was not quite a question.

"I'm just the quiet one," the {hero} murmured. "Nobody's waiting to hear from me."

{companion_name} was silent for a moment, weighing the {object_motif} of the moment as carefully as the {hero} weighed the real one. "Let me tell you what I've watched happen, over many years and many plans. The quiet ones are often the ones who see clearest, precisely because they spend their time looking instead of talking. But seeing isn't enough. A true thing kept locked inside helps no one. And your voice matters, not because it's the loudest, but because it carries something the loud voices missed. If you stay silent now, the group doesn't lose a quiet child. They lose the very thing they need."

The {hero} felt the old whisper of doubt, and underneath it, rising slowly, something steadier. The {hero} looked across to where the others were already getting ready to set off down the open stretch. There was a window, narrow and closing, where saying something would still matter.

The {hero} stood up. The {hero}'s heart was a drum. "Wait," the {hero} said, and the word came out smaller than the {hero} wanted, so the {hero} swallowed and tried again. "Wait. I need to tell you something about the open stretch."

Heads turned. The boldest of them raised an eyebrow, not unkindly, just surprised, because the {hero} so rarely spoke. For one long heartbeat the {hero} wanted to fold back down and disappear. Instead the {hero} held up {object_motif} as if to steady themselves, took a breath, and explained, clearly and carefully, everything about the season and the danger and the curving path that was safer and quicker both.

A quiet fell over the group. Then the bold one, the sure one, frowned thoughtfully and said, "I didn't know that. Are you certain?" And the {hero} said yes, and meant it, and the others began to nod, not because the {hero} had been loud, but because what the {hero} said was true and useful and brave to say.

They took the curving path. It was, as the {hero} had known, the better way. And something shifted that evening, small but permanent: the next time plans were being made, someone glanced toward the edge of the group and asked, "What do you think?"

That night, settling into the soft dark of {setting}, the {hero} held {object_motif} and felt the strange new weight of having been heard. The {hero} had not become loud. The {hero} had simply learned that quiet and silent are not the same thing, and that a true voice, once it decides to speak, can change the path for everyone.

{refrain}.`,
        scriptTemplate: `{child_name} had always been the kind to sit at the edge of things, watching {setting} hum with the easy noise of everyone else. The loud ones decided where to go and what to do, and somehow their plans always became everyone's plans, simply because they said them first and said them sure. {child_name} had opinions too. They just lived quietly, folded up small, somewhere behind {child_name}'s ribs.

So when the group gathered that evening to settle on their route through the far reaches of {setting}, {child_name} listened the way {child_name} always did. The plan taking shape was the obvious one, the one the boldest voices liked: straight across the open stretch, fast and direct. Everyone nodded. It sounded good. It sounded simple.

But {child_name} knew something the others had forgotten. {child_name} had spent so many quiet hours watching that {child_name} had learned things nobody bothered to learn out loud. The open stretch was beautiful, yes, but at this time of the season it turned treacherous, and there was a longer way, a curving path {child_name} had traced a dozen times in their head, that was safer and, in the end, faster. {child_name} was almost certain of it.

Almost. And there it was, the familiar tightening. Who was {child_name} to correct the loud ones, the sure ones? What if {child_name} spoke and the words came out wrong, or worse, what if {child_name} was mistaken and everyone turned to look with that particular kind of patience people save for someone who should have stayed quiet? The plan was nearly decided now. It would be so much easier to let it pass, to nod along, to be carried by the current like always.

{child_name} turned {object_motif} over and over in restless fingers. {companion_name}, who had been watching from nearby with the unhurried attention of someone who misses very little, settled beside {child_name}.

"You've gone somewhere far away," said {companion_name} quietly, so only {child_name} could hear. "Your hands are busy and your mouth is shut. In my experience, that means you're sitting on something."

"It's nothing," {child_name} said. "Probably nothing. They've already decided."

"They've spoken," {companion_name} agreed. "Deciding and speaking aren't the same thing. What is it you're not saying?"

{child_name} hesitated, then let it out in a low rush, all about the season and the open stretch and the curving path, the words tumbling faster as they went, the way true things do once you finally start. {companion_name} listened to every word without interrupting, and when {child_name} finished, {companion_name} did not laugh, and did not look patient, and did not look away.

"And you were going to keep that to yourself," {companion_name} said. It was not quite a question.

"I'm just the quiet one," {child_name} murmured. "Nobody's waiting to hear from me."

{companion_name} was silent for a moment, weighing the {object_motif} of the moment as carefully as {child_name} weighed the real one. "Let me tell you what I've watched happen, over many years and many plans. The quiet ones are often the ones who see clearest, precisely because they spend their time looking instead of talking. But seeing isn't enough. A true thing kept locked inside helps no one. And your voice matters, not because it's the loudest, but because it carries something the loud voices missed. If you stay silent now, the group doesn't lose a quiet child. They lose the very thing they need."

{child_name} felt the old whisper of doubt, and underneath it, rising slowly, something steadier. {child_name} looked across to where the others were already getting ready to set off down the open stretch. There was a window, narrow and closing, where saying something would still matter.

{child_name} stood up. {child_name}'s heart was a drum. "Wait," {child_name} said, and the word came out smaller than {child_name} wanted, so {child_name} swallowed and tried again. "Wait. I need to tell you something about the open stretch."

Heads turned. The boldest of them raised an eyebrow, not unkindly, just surprised, because {child_name} so rarely spoke. For one long heartbeat {child_name} wanted to fold back down and disappear. Instead {child_name} held up {object_motif} as if to steady themselves, took a breath, and explained, clearly and carefully, everything about the season and the danger and the curving path that was safer and quicker both.

A quiet fell over the group. Then the bold one, the sure one, frowned thoughtfully and said, "I didn't know that. Are you certain?" And {child_name} said yes, and meant it, and the others began to nod, not because {child_name} had been loud, but because what {child_name} said was true and useful and brave to say.

They took the curving path. It was, as {child_name} had known, the better way. And something shifted that evening, small but permanent: the next time plans were being made, someone glanced toward the edge of the group and asked, "What do you think?"

That night, settling into the soft dark of {setting}, {child_name} held {object_motif} and felt the strange new weight of having been heard. {child_name} had not become loud. {child_name} had simply learned that quiet and silent are not the same thing, and that a true voice, once it decides to speak, can change the path for everyone.

{refrain}.`,
      },
    },
    audioTemplate: `In the heart of {setting}, there lived a {hero} who was known, when the {hero} was known at all, as the quiet one. The {hero} was small, and the {hero} was shy, and while the others filled the days with games and chatter and big loud plans, the {hero} preferred to watch from the edges and keep their thoughts tucked safely inside.

The thing about keeping thoughts inside, though, is that they do not stop arriving. The {hero} noticed things. The {hero} noticed which currents ran warm and which ran cold, where the light fell softest, and which corners of {setting} the others always seemed to overlook. The {hero} just never said any of it out loud.

One evening, the others were busy making a plan. They wanted to find the best resting spot for the night, and everyone had an opinion, and everyone shared it at the same time and quite loudly. The {hero} listened, and as the {hero} listened, the {hero} realized something: every spot they were arguing about would be cold and uncomfortable by moonrise. The {hero} knew a better one. The {hero} had found it long ago, a sheltered nook warmed all night long, and beside it, half hidden, the {hero} had once discovered {object_motif}.

The {hero}'s heart began to thump. The {hero} should say something. But the words felt enormous and the {hero} felt so very small. "They won't listen to me," the {hero} thought. "I'm just the quiet one. My idea probably isn't even that good." And so the {hero} pressed their lips together and said nothing, while the loud plans tumbled on toward the wrong answer.

It was then that {companion_name} settled quietly beside the {hero}. {companion_name} had lived in {setting} a long time, and had a gift for noticing the things that others missed, including a {hero} sitting very still with a whole sky of unspoken thoughts behind their eyes.

"You know something, don't you?" {companion_name} said softly. "Something the others don't."

The {hero} looked down. "Maybe," the {hero} whispered. "But I'm small. Nobody waits to hear what I think."

{companion_name} was quiet for a moment. Then {companion_name} reached over and turned {object_motif} so it caught the last of the light. "Do you see this?" {companion_name} asked. "You found it. You, the quiet one, in a corner everybody else walked right past. That is what watching gives you. You see what the loud ones miss. But seeing it only helps if you say it. Your voice matters, little one. Not because it is loud, but because it is true."

The {hero} swallowed hard. Across the way, the others had nearly finished settling on the wrong spot. There was barely any time. The worried voice inside said stay small, stay safe, stay quiet. But underneath it, something braver was beginning to stand up.

The {hero} took a deep breath. Then the {hero} spoke. "Wait," the {hero} said. It came out softer than the {hero} meant, so the {hero} tried again, clearer this time. "Wait. I know a better place. It stays warm all night. I can show you."

The others turned, surprised, because the {hero} so rarely spoke. For one terrible heartbeat the {hero} wanted to disappear. But the {hero} held up {object_motif}, steadied themselves, and explained, carefully and truly, about the sheltered nook and the warmth and the long cold night ahead if they stayed where they were.

When the {hero} finished, there was a quiet pause. Then one of the others said, "I didn't know that." And another said, "Show us." And just like that, the whole group rose and followed the {hero} to the warm and sheltered place, exactly as the {hero} had described.

That night, every one of them slept snug and warm, and it was all because the quiet one had finally spoken. The {hero} lay among them, glowing with a feeling the {hero} had never quite felt before, the feeling of having been truly heard.

{companion_name} drifted close one last time before sleep. "You see?" {companion_name} murmured. "You carried that gift all along. You only had to be brave enough to share it." And from that night on, when the {hero} knew something true, the {hero} remembered that quiet and silent are not the same thing, and that a small voice can still say something that changes everything — and that your voice matters, the {hero} thought as they drifted off to sleep.

{refrain}.`,
    scriptTemplate: `In the heart of {setting}, there lived a {child_name} who was known, when {child_name} was known at all, as the quiet one. {child_name} was small, and {child_name} was shy, and while the others filled the days with games and chatter and big loud plans, {child_name} preferred to watch from the edges and keep their thoughts tucked safely inside.

The thing about keeping thoughts inside, though, is that they do not stop arriving. {child_name} noticed things. {child_name} noticed which currents ran warm and which ran cold, where the light fell softest, and which corners of {setting} the others always seemed to overlook. {child_name} just never said any of it out loud.

One evening, the others were busy making a plan. They wanted to find the best resting spot for the night, and everyone had an opinion, and everyone shared it at the same time and quite loudly. {child_name} listened, and as {child_name} listened, {child_name} realized something: every spot they were arguing about would be cold and uncomfortable by moonrise. {child_name} knew a better one. {child_name} had found it long ago, a sheltered nook warmed all night long, and beside it, half hidden, {child_name} had once discovered {object_motif}.

{child_name}'s heart began to thump. {child_name} should say something. But the words felt enormous and {child_name} felt so very small. "They won't listen to me," {child_name} thought. "I'm just the quiet one. My idea probably isn't even that good." And so {child_name} pressed their lips together and said nothing, while the loud plans tumbled on toward the wrong answer.

It was then that {companion_name} settled quietly beside {child_name}. {companion_name} had lived in {setting} a long time, and had a gift for noticing the things that others missed, including a {child_name} sitting very still with a whole sky of unspoken thoughts behind their eyes.

"You know something, don't you?" {companion_name} said softly. "Something the others don't."

{child_name} looked down. "Maybe," {child_name} whispered. "But I'm small. Nobody waits to hear what I think."

{companion_name} was quiet for a moment. Then {companion_name} reached over and turned {object_motif} so it caught the last of the light. "Do you see this?" {companion_name} asked. "You found it. You, the quiet one, in a corner everybody else walked right past. That is what watching gives you. You see what the loud ones miss. But seeing it only helps if you say it. Your voice matters, little one. Not because it is loud, but because it is true."

{child_name} swallowed hard. Across the way, the others had nearly finished settling on the wrong spot. There was barely any time. The worried voice inside said stay small, stay safe, stay quiet. But underneath it, something braver was beginning to stand up.

{child_name} took a deep breath. Then {child_name} spoke. "Wait," {child_name} said. It came out softer than {child_name} meant, so {child_name} tried again, clearer this time. "Wait. I know a better place. It stays warm all night. I can show you."

The others turned, surprised, because {child_name} so rarely spoke. For one terrible heartbeat {child_name} wanted to disappear. But {child_name} held up {object_motif}, steadied themselves, and explained, carefully and truly, about the sheltered nook and the warmth and the long cold night ahead if they stayed where they were.

When {child_name} finished, there was a quiet pause. Then one of the others said, "I didn't know that." And another said, "Show us." And just like that, the whole group rose and followed {child_name} to the warm and sheltered place, exactly as {child_name} had described.

That night, every one of them slept snug and warm, and it was all because the quiet one had finally spoken. {child_name} lay among them, glowing with a feeling {child_name} had never quite felt before, the feeling of having been truly heard.

{companion_name} drifted close one last time before sleep. "You see?" {companion_name} murmured. "You carried that gift all along. You only had to be brave enough to share it." And from that night on, when {child_name} knew something true, {child_name} remembered that quiet and silent are not the same thing, and that a small voice can still say something that changes everything — and that your voice matters, {child_name} thought as they drifted off to sleep.

{refrain}.`,
  },
  {
    ordinal: 2,
    title: 'Asking for What You Need',
    concept: 'Asking clearly gets you help',
    callback: 'your voice matters',
    ageFloor: 3,
    summary: 'The hero is stuck on something hard but waits in silence, hoping someone will simply notice and step in. With a gentle nudge from their companion, the hero learns that no one can read minds — and that saying clearly, kindly, and out loud what you need is what actually brings help. This level builds on the idea that your voice matters by showing what that voice is for.',
    teachingNote: 'Children often equate needing help with weakness; this story reframes a clear, kind request as the brave, effective thing it is.',
    learningBeat: 'asking is how people know',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} wanted help.

The {hero} could not reach the {object_motif}. It sat too high.

The {hero} waited. The {hero} hoped someone would see.

But no one knew. No one came. Waiting did not work.

{companion_name} came by. "What is wrong, little one?"

The {hero} looked down. "I need help. But I did not say."

{companion_name} smiled. "Friends cannot read your mind. Asking is how people know."

So the {hero} took a breath. "Please, will you help me reach the {object_motif}?"

"Yes!" said {companion_name}. "I would love to."

Down came the {object_motif}, right into the {hero}'s happy little arms.

The {hero} grinned. Asking was not so hard. Asking felt good.

Now the {hero} knew. When you need help, use your voice. Say it kind. Say it clear.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} wanted help.

{child_name} could not reach the {object_motif}. It sat too high.

{child_name} waited. {child_name} hoped someone would see.

But no one knew. No one came. Waiting did not work.

{companion_name} came by. "What is wrong, little one?"

{child_name} looked down. "I need help. But I did not say."

{companion_name} smiled. "Friends cannot read your mind. Asking is how people know."

So {child_name} took a breath. "Please, will you help me reach the {object_motif}?"

"Yes!" said {companion_name}. "I would love to."

Down came the {object_motif}, right into {child_name}'s happy little arms.

{child_name} grinned. Asking was not so hard. Asking felt good.

Now {child_name} knew. When you need help, use your voice. Say it kind. Say it clear.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `The {hero} had a problem in {setting}, and the problem would not go away on its own.

There was a heavy {object_motif} that needed moving, and the {hero} could not move it alone. It was too big. It was too stuck. But the {hero} did not say a word about it.

Instead, the {hero} waited. The {hero} thought, "Maybe someone will notice. Maybe someone will see I am stuck and come and help me." So the {hero} stood near the {object_motif} and looked sad and hoped very hard.

But all the others were busy with their own days. They were playing and working and laughing. They did not notice the sad little face. Nothing changed. The {object_motif} stayed stuck, and the {hero} felt smaller and smaller.

Then {companion_name} came along and saw the {hero} standing there. "You look stuck," said {companion_name}. "Have you asked anyone to help?"

The {hero} shook their head. "I thought someone would just see," the {hero} said quietly.

{companion_name} sat down beside the {hero}. "Here is a secret," {companion_name} said. "No one can see what is inside your head. They cannot tell you are stuck unless you tell them. Asking is how people know. When you ask, you give them the chance to help."

The {hero} thought about that. It was scary to ask. What if they said no? But waiting had not worked at all. So the {hero} took a big breath and turned to a friend passing by.

"Excuse me," said the {hero}, kind and clear. "I am trying to move this {object_motif}, and it is too heavy for me. Could you please help?"

The friend stopped right away. "Of course! Why didn't you say so?" And another friend came too. Together they pushed, and the {object_motif} slid free at last.

The {hero} could hardly believe it. The thing that had felt impossible all morning was done in a moment — just because the {hero} had asked.

"You see?" said {companion_name} warmly. "Your voice matters. When you use it to ask, good things can happen. Asking is not being weak. Asking is being brave and clear."

That night the {hero} felt proud, not for solving everything alone, but for finally speaking up.

{refrain}.`,
        scriptTemplate: `{child_name} had a problem in {setting}, and the problem would not go away on its own.

There was a heavy {object_motif} that needed moving, and {child_name} could not move it alone. It was too big. It was too stuck. But {child_name} did not say a word about it.

Instead, {child_name} waited. {child_name} thought, "Maybe someone will notice. Maybe someone will see I am stuck and come and help me." So {child_name} stood near the {object_motif} and looked sad and hoped very hard.

But all the others were busy with their own days. They were playing and working and laughing. They did not notice the sad little face. Nothing changed. The {object_motif} stayed stuck, and {child_name} felt smaller and smaller.

Then {companion_name} came along and saw {child_name} standing there. "You look stuck," said {companion_name}. "Have you asked anyone to help?"

{child_name} shook their head. "I thought someone would just see," {child_name} said quietly.

{companion_name} sat down beside {child_name}. "Here is a secret," {companion_name} said. "No one can see what is inside your head. They cannot tell you are stuck unless you tell them. Asking is how people know. When you ask, you give them the chance to help."

{child_name} thought about that. It was scary to ask. What if they said no? But waiting had not worked at all. So {child_name} took a big breath and turned to a friend passing by.

"Excuse me," said {child_name}, kind and clear. "I am trying to move this {object_motif}, and it is too heavy for me. Could you please help?"

The friend stopped right away. "Of course! Why didn't you say so?" And another friend came too. Together they pushed, and the {object_motif} slid free at last.

{child_name} could hardly believe it. The thing that had felt impossible all morning was done in a moment — just because {child_name} had asked.

"You see?" said {companion_name} warmly. "Your voice matters. When you use it to ask, good things can happen. Asking is not being weak. Asking is being brave and clear."

That night {child_name} felt proud, not for solving everything alone, but for finally speaking up.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `The hardest part, the {hero} would later admit, was not the thing itself. It was pretending the thing was easy.

In {setting}, the older ones had set a challenge: a long, twisting course that ran from one end of the territory to the other, threaded through narrow gaps and across open stretches where the going was hard. Whoever finished could carry the {object_motif} for a whole season — a thing the {hero} had wanted for as long as they could remember. The {hero} had practised the early parts a hundred times. But there was one section, a tight passage through the rocks, that the {hero} had never once managed cleanly. Every attempt ended the same way: a wrong turn, a scrape, a flush of embarrassment.

The trouble was that everyone assumed the {hero} had it handled. "You're a natural," they said. "You'll breeze through." And the {hero}, who liked being thought of that way, said nothing. Saying nothing felt safer than admitting there was a part they couldn't do. So the {hero} smiled, and nodded, and quietly hoped that on the day it would somehow just work out.

It did not just work out. The morning of the challenge came, and the closer it got, the heavier the {hero} felt. There was a knot in the stomach that practice alone had not loosened. The {hero} kept thinking: someone will see I'm nervous. Someone will offer to walk me through the rocks. And then I won't have to ask, because asking would mean admitting I'm not the natural everyone thinks I am.

But no one offered, because no one knew. From the outside, the {hero} looked perfectly calm. The mask was working too well. And the cost of that calm-looking silence was growing by the hour — because every minute spent hiding the problem was a minute not spent solving it.

{companion_name} found the {hero} alone near the start of the course, going over the route for the hundredth useless time.

"You've practised that opening more times than anyone here," {companion_name} said gently. "And yet you look like you're carrying a stone. What is it you're not saying?"

The {hero} almost gave the easy answer — nothing, I'm fine. But something in the way {companion_name} waited made the truth come out instead. "There's a part I can't do," the {hero} admitted, voice low. "The passage through the rocks. I've never made it through clean. And everyone thinks I'm so good at this that I — I couldn't tell them. It felt like the only thing keeping me in the game was that nobody knew."

{companion_name} did not laugh, and did not look surprised. "So you've been guarding a secret instead of fixing a problem," {companion_name} said. "Let me ask you something. How is anyone supposed to help you through those rocks if you've spent all season making sure they think you don't need help?"

The {hero} had no answer.

"Needing help isn't the weakness you think it is," {companion_name} went on. "The weakness is staying quiet and hoping. Hoping doesn't teach you the passage. Hoping doesn't move you one length closer. People aren't mind-readers — not even the ones who care about you most. Asking is how people know. You've been waiting for someone to notice a thing you've worked very hard to hide. That was never going to happen."

The {hero} felt the truth of it land. All that effort spent looking fine, when the same effort spent asking might have solved everything weeks ago.

It still took courage. The {hero} went to one of the older ones — one who had run the course many times — and made themselves say the words plainly. "I need help with the rock passage. I've never made it through cleanly, and I want to learn before today. Will you show me?"

The older one didn't sneer or boast. They simply said, "That passage catches everyone. Come on, I'll take you through it slow." And they did — once, twice, pointing out the exact spot where the path shifted, the small turn that made all the difference. By the third pass, the {hero} moved through the rocks without a single scrape.

The {hero} did not win the challenge that day. But they finished it, whole and clean, the rock passage no longer a secret dread but a thing they had simply learned to do. And carrying the {object_motif} afterward felt different from how the {hero} had imagined — not like a prize for being a natural, but like proof of something better: that they had finally said out loud what they needed.

"You spoke up," {companion_name} said quietly, as they went home together. "That took more strength than the whole course."

{refrain}.`,
        scriptTemplate: `The hardest part, {child_name} would later admit, was not the thing itself. It was pretending the thing was easy.

In {setting}, the older ones had set a challenge: a long, twisting course that ran from one end of the territory to the other, threaded through narrow gaps and across open stretches where the going was hard. Whoever finished could carry the {object_motif} for a whole season — a thing {child_name} had wanted for as long as they could remember. {child_name} had practised the early parts a hundred times. But there was one section, a tight passage through the rocks, that {child_name} had never once managed cleanly. Every attempt ended the same way: a wrong turn, a scrape, a flush of embarrassment.

The trouble was that everyone assumed {child_name} had it handled. "You're a natural," they said. "You'll breeze through." And {child_name}, who liked being thought of that way, said nothing. Saying nothing felt safer than admitting there was a part they couldn't do. So {child_name} smiled, and nodded, and quietly hoped that on the day it would somehow just work out.

It did not just work out. The morning of the challenge came, and the closer it got, the heavier {child_name} felt. There was a knot in the stomach that practice alone had not loosened. {child_name} kept thinking: someone will see I'm nervous. Someone will offer to walk me through the rocks. And then I won't have to ask, because asking would mean admitting I'm not the natural everyone thinks I am.

But no one offered, because no one knew. From the outside, {child_name} looked perfectly calm. The mask was working too well. And the cost of that calm-looking silence was growing by the hour — because every minute spent hiding the problem was a minute not spent solving it.

{companion_name} found {child_name} alone near the start of the course, going over the route for the hundredth useless time.

"You've practised that opening more times than anyone here," {companion_name} said gently. "And yet you look like you're carrying a stone. What is it you're not saying?"

{child_name} almost gave the easy answer — nothing, I'm fine. But something in the way {companion_name} waited made the truth come out instead. "There's a part I can't do," {child_name} admitted, voice low. "The passage through the rocks. I've never made it through clean. And everyone thinks I'm so good at this that I — I couldn't tell them. It felt like the only thing keeping me in the game was that nobody knew."

{companion_name} did not laugh, and did not look surprised. "So you've been guarding a secret instead of fixing a problem," {companion_name} said. "Let me ask you something. How is anyone supposed to help you through those rocks if you've spent all season making sure they think you don't need help?"

{child_name} had no answer.

"Needing help isn't the weakness you think it is," {companion_name} went on. "The weakness is staying quiet and hoping. Hoping doesn't teach you the passage. Hoping doesn't move you one length closer. People aren't mind-readers — not even the ones who care about you most. Asking is how people know. You've been waiting for someone to notice a thing you've worked very hard to hide. That was never going to happen."

{child_name} felt the truth of it land. All that effort spent looking fine, when the same effort spent asking might have solved everything weeks ago.

It still took courage. {child_name} went to one of the older ones — one who had run the course many times — and made themselves say the words plainly. "I need help with the rock passage. I've never made it through cleanly, and I want to learn before today. Will you show me?"

The older one didn't sneer or boast. They simply said, "That passage catches everyone. Come on, I'll take you through it slow." And they did — once, twice, pointing out the exact spot where the path shifted, the small turn that made all the difference. By the third pass, {child_name} moved through the rocks without a single scrape.

{child_name} did not win the challenge that day. But they finished it, whole and clean, the rock passage no longer a secret dread but a thing they had simply learned to do. And carrying the {object_motif} afterward felt different from how {child_name} had imagined — not like a prize for being a natural, but like proof of something better: that they had finally said out loud what they needed.

"You spoke up," {companion_name} said quietly, as they went home together. "That took more strength than the whole course."

{refrain}.`,
      },
    },
    audioTemplate: `For three days, the {hero} had carried a worry around {setting} like a stone in the pocket, and for three days the {hero} had said nothing about it.

The worry was this: there was a knack to working the {object_motif}, and the {hero} had never quite learned it. Everyone else seemed to manage. They twisted it just so, and it did what they wanted. But when the {hero} tried, it slipped and stuck and went wrong, and the {hero} felt a hot little flush of embarrassment every time. So the {hero} did what felt easiest — pretended not to need it, and waited, hoping that one day someone would simply notice and offer to show how.

But no one offered, because no one knew. From the outside, the {hero} looked perfectly fine. And the longer the waiting went on, the worse it got, because everyone else was getting better with the {object_motif} while the {hero} stayed exactly where they had started.

On the third afternoon, {companion_name} found the {hero} sitting off to the side, watching the others and looking glum.

"You've been very quiet lately," {companion_name} said, settling down nearby. "Quiet in a way that usually means something is on your mind."

The {hero} hesitated. It was right there, the truth, but saying it out loud felt like admitting a failure. "It's nothing," the {hero} said.

{companion_name} waited, the way kind friends do, and after a moment the {hero} gave in. "It's the {object_motif}," the {hero} said quietly. "I can't make it work the way everyone else does. I've been hoping someone would notice and teach me, but no one has."

{companion_name} tilted their head. "And how would they notice? You've been sitting over here looking like everything's fine."

"I suppose I hoped they'd just... see," the {hero} admitted.

"Ah," said {companion_name} gently. "Here is the thing many people take far too long to learn. The others aren't ignoring you. They simply don't know. You've hidden it so well that there's nothing for them to see. People can't read minds, little one. They can't help with a problem they don't know you have. Asking is how people know."

The {hero} frowned. "But if I ask, they'll know I couldn't do it on my own."

"They'll know you wanted to learn," {companion_name} said. "There's no shame in that. The only thing keeping you stuck these three days hasn't been the {object_motif} at all. It's been the silence. Remember what you learned before — that your voice matters? This is what it's for. Not just for speaking up when something's wrong, but for asking when you need something."

The {hero} sat with that for a long moment. Three whole days of waiting, and nothing had changed. Maybe it was worth the risk of one question. So the {hero} took a breath, went over to a friend who handled the {object_motif} beautifully, and made the words come out clear and kind.

"Could you show me how you do that?" the {hero} asked. "I've been trying to learn, and I keep getting it wrong."

The friend's face brightened at once. "Of course! It's tricky at first — everyone struggles with it. Here, watch closely. You're gripping too tight, that's all. Loosen up, like this."

And just like that, the secret the {hero} had guarded for three lonely days came undone. The friend showed the trick, the {hero} tried it, and on the second attempt the {object_motif} turned smooth and easy, exactly the way it was supposed to.

The {hero} stared, half laughing. All that worry. All that hiding. And the answer had been one question away the entire time.

"You see?" said {companion_name}, eyes warm. "The asking was the hard part, and you've already done it. Everything after that is just learning."

That night, settling down in {setting}, the {hero} felt lighter than they had in days — not because the {object_motif} was conquered, but because they finally understood something bigger. Help was always there. It just had to be asked for.

{refrain}.`,
    scriptTemplate: `For three days, {child_name} had carried a worry around {setting} like a stone in the pocket, and for three days {child_name} had said nothing about it.

The worry was this: there was a knack to working the {object_motif}, and {child_name} had never quite learned it. Everyone else seemed to manage. They twisted it just so, and it did what they wanted. But when {child_name} tried, it slipped and stuck and went wrong, and {child_name} felt a hot little flush of embarrassment every time. So {child_name} did what felt easiest — pretended not to need it, and waited, hoping that one day someone would simply notice and offer to show how.

But no one offered, because no one knew. From the outside, {child_name} looked perfectly fine. And the longer the waiting went on, the worse it got, because everyone else was getting better with the {object_motif} while {child_name} stayed exactly where they had started.

On the third afternoon, {companion_name} found {child_name} sitting off to the side, watching the others and looking glum.

"You've been very quiet lately," {companion_name} said, settling down nearby. "Quiet in a way that usually means something is on your mind."

{child_name} hesitated. It was right there, the truth, but saying it out loud felt like admitting a failure. "It's nothing," {child_name} said.

{companion_name} waited, the way kind friends do, and after a moment {child_name} gave in. "It's the {object_motif}," {child_name} said quietly. "I can't make it work the way everyone else does. I've been hoping someone would notice and teach me, but no one has."

{companion_name} tilted their head. "And how would they notice? You've been sitting over here looking like everything's fine."

"I suppose I hoped they'd just... see," {child_name} admitted.

"Ah," said {companion_name} gently. "Here is the thing many people take far too long to learn. The others aren't ignoring you. They simply don't know. You've hidden it so well that there's nothing for them to see. People can't read minds, little one. They can't help with a problem they don't know you have. Asking is how people know."

{child_name} frowned. "But if I ask, they'll know I couldn't do it on my own."

"They'll know you wanted to learn," {companion_name} said. "There's no shame in that. The only thing keeping you stuck these three days hasn't been the {object_motif} at all. It's been the silence. Remember what you learned before — that your voice matters? This is what it's for. Not just for speaking up when something's wrong, but for asking when you need something."

{child_name} sat with that for a long moment. Three whole days of waiting, and nothing had changed. Maybe it was worth the risk of one question. So {child_name} took a breath, went over to a friend who handled the {object_motif} beautifully, and made the words come out clear and kind.

"Could you show me how you do that?" {child_name} asked. "I've been trying to learn, and I keep getting it wrong."

The friend's face brightened at once. "Of course! It's tricky at first — everyone struggles with it. Here, watch closely. You're gripping too tight, that's all. Loosen up, like this."

And just like that, the secret {child_name} had guarded for three lonely days came undone. The friend showed the trick, {child_name} tried it, and on the second attempt the {object_motif} turned smooth and easy, exactly the way it was supposed to.

{child_name} stared, half laughing. All that worry. All that hiding. And the answer had been one question away the entire time.

"You see?" said {companion_name}, eyes warm. "The asking was the hard part, and you've already done it. Everything after that is just learning."

That night, settling down in {setting}, {child_name} felt lighter than they had in days — not because the {object_motif} was conquered, but because they finally understood something bigger. Help was always there. It just had to be asked for.

{refrain}.`,
  },
  {
    ordinal: 3,
    title: "It's Okay to Say No",
    concept: 'Setting a kind boundary',
    callback: 'asking for what you need',
    ageFloor: 3,
    summary: 'When a friend keeps asking for more and more, the hero feels the pull to just go along to keep everyone happy. With a mentor\'s help, they learn that a warm, clear "no" can protect what matters and still be kind. The story shows children that declining is healthy boundary-setting, not rudeness.',
    teachingNote: 'Children keep the peace by over-giving; modelling a kind, excuse-free "no" teaches them that a boundary can be both firm and warm.',
    learningBeat: 'no is a whole answer',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} had a {object_motif}. It was the best thing they owned.

A bigger friend came by. "Give me your {object_motif}," the friend said.

The {hero} did not want to. But the {hero} wanted to be nice. So the {hero} said yes. The {hero} felt sad.

The next day the friend came again. "Give me your snack too," the friend said. The {hero} said yes again. The {hero} felt smaller.

Old wise {companion_name} sat down close. "You can be kind and still say no," said {companion_name} softly. "You do not need a long list of reasons. no is a whole answer."

The {hero} took a big breath. The friend came back. "Give me more," the friend said.

"No," said the {hero}, warm and clear. "Not this time."

The friend blinked. Then the friend smiled. "Okay," the friend said. And they played together, side by side.

The {hero} held the {object_motif} close and felt big and bright inside. Saying no had kept it safe. And the {hero} was still kind.

{companion_name} smiled. "Well done, little one."

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} had a {object_motif}. It was the best thing they owned.

A bigger friend came by. "Give me your {object_motif}," the friend said.

{child_name} did not want to. But {child_name} wanted to be nice. So {child_name} said yes. {child_name} felt sad.

The next day the friend came again. "Give me your snack too," the friend said. {child_name} said yes again. {child_name} felt smaller.

Old wise {companion_name} sat down close. "You can be kind and still say no," said {companion_name} softly. "You do not need a long list of reasons. no is a whole answer."

{child_name} took a big breath. The friend came back. "Give me more," the friend said.

"No," said {child_name}, warm and clear. "Not this time."

The friend blinked. Then the friend smiled. "Okay," the friend said. And they played together, side by side.

{child_name} held the {object_motif} close and felt big and bright inside. Saying no had kept it safe. And {child_name} was still kind.

{companion_name} smiled. "Well done, little one."

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `In {setting}, the {hero} had a {object_motif} that glowed a soft, kind light. It was special. The {hero} had made it themselves.

One morning a friend named Rill came by. "Can I borrow your {object_motif}?" Rill asked. The {hero} liked to share, so the {hero} said, "Sure."

But Rill did not bring it back. The next day Rill asked for the {hero}'s lunch. The day after that, Rill asked the {hero} to carry Rill's bag all the way home. Each time, the {hero} wanted to say no. And each time, the {hero} said yes instead, because saying no felt scary. What if Rill got upset? What if Rill stopped being a friend?

So the {hero} kept giving and giving. But inside, the {hero} felt tired and a little flat, like the {object_motif} when its glow runs low.

Old {companion_name} was watching from close by. "Little one," said {companion_name}, "you have been giving so much that there is almost nothing left for you. Why do you keep saying yes?"

"Because I want to be kind," said the {hero}. "If I say no, Rill might be sad."

{companion_name} nodded slowly. "Being kind is good. But you can be kind AND say no. You do not need a long pile of reasons. You do not need to argue. You can just say it gently and clearly. Remember this: no is a whole answer."

The {hero} thought about that all afternoon. The {object_motif} sat in their lap, glowing again as they rested.

The next morning, Rill came back. "Carry my bag again?" Rill asked.

The {hero}'s heart thumped. Then the {hero} stood up tall and said, in a warm, steady voice, "No, not today. I'd love to play with you, though."

Rill stopped. For one quiet second, the {hero} held their breath. Then Rill shrugged and grinned. "Okay! Let's play, then."

And they did. They raced and laughed until the sky turned gold. Nothing broke. Rill was still a friend. The {hero} had said no, and the world had not fallen down.

That night the {object_motif} glowed bright and full again. The {hero} felt warm all the way through.

"You see?" said {companion_name}. "A kind no protects what matters most. It keeps you whole. And it can still leave room for friends."

The {hero} smiled and hugged the {object_motif} close.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} had a {object_motif} that glowed a soft, kind light. It was special. {child_name} had made it themselves.

One morning a friend named Rill came by. "Can I borrow your {object_motif}?" Rill asked. {child_name} liked to share, so {child_name} said, "Sure."

But Rill did not bring it back. The next day Rill asked for {child_name}'s lunch. The day after that, Rill asked {child_name} to carry Rill's bag all the way home. Each time, {child_name} wanted to say no. And each time, {child_name} said yes instead, because saying no felt scary. What if Rill got upset? What if Rill stopped being a friend?

So {child_name} kept giving and giving. But inside, {child_name} felt tired and a little flat, like the {object_motif} when its glow runs low.

Old {companion_name} was watching from close by. "Little one," said {companion_name}, "you have been giving so much that there is almost nothing left for you. Why do you keep saying yes?"

"Because I want to be kind," said {child_name}. "If I say no, Rill might be sad."

{companion_name} nodded slowly. "Being kind is good. But you can be kind AND say no. You do not need a long pile of reasons. You do not need to argue. You can just say it gently and clearly. Remember this: no is a whole answer."

{child_name} thought about that all afternoon. The {object_motif} sat in their lap, glowing again as they rested.

The next morning, Rill came back. "Carry my bag again?" Rill asked.

{child_name}'s heart thumped. Then {child_name} stood up tall and said, in a warm, steady voice, "No, not today. I'd love to play with you, though."

Rill stopped. For one quiet second, {child_name} held their breath. Then Rill shrugged and grinned. "Okay! Let's play, then."

And they did. They raced and laughed until the sky turned gold. Nothing broke. Rill was still a friend. {child_name} had said no, and the world had not fallen down.

That night the {object_motif} glowed bright and full again. {child_name} felt warm all the way through.

"You see?" said {companion_name}. "A kind no protects what matters most. It keeps you whole. And it can still leave room for friends."

{child_name} smiled and hugged the {object_motif} close.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `In {setting}, the {hero} kept a {object_motif} that meant more than anything else they owned. It wasn't worth much to anyone else — but the {hero} had earned it slowly, over a long season, and it carried a hundred small memories inside it.

That season, the {hero} had fallen in with a clever, popular friend named Dax. Dax was funny and quick and easy to be around, and being chosen by Dax felt good — like standing in a warmer patch of sun. So when Dax started asking for favors, the {hero} said yes. At first the favors were small: hold this, wait here, cover for me. But they grew. The {hero} began doing Dax's chores, giving up the good seat, laughing at jokes that weren't really funny, agreeing to plans that left a strange, uneasy weight in the {hero}'s chest.

Then one afternoon Dax pointed at the {object_motif}. "You should give that to me," Dax said, light and certain, as if it were already decided. "It'd look better with my collection. And honestly — if we're really friends, you would."

The {hero} felt the familiar pull, the one that whispered: just say yes, keep things smooth, keep Dax happy. Saying no might cost something. Dax might cool off. The others might follow Dax. The {hero} could already picture the lonely edge of that. And so the word "okay" rose halfway up the {hero}'s throat, almost on its own.

But it stuck there. Because the {object_motif} mattered, and giving it away to prove a friendship felt exactly backward — like the friendship was something the {hero} had to keep paying for, over and over, and the price kept climbing.

That evening, the {hero} found old {companion_name} near the water's edge, and the whole tangled story came pouring out. "I don't want to give it away," the {hero} admitted. "But if I say no, Dax might be done with me. And maybe I'm being selfish. Maybe a good friend would just hand it over."

{companion_name} listened to all of it before answering. "Let me ask you something," said {companion_name}. "When you do these favors, when you give and give — does it feel like kindness? Or does it feel like a toll you pay to be allowed to stay?"

The {hero} was quiet. "A toll," they said finally. "It never ends. Every time I say yes, the next ask is bigger."

"That's the thing about a boundary," said {companion_name}. "It isn't a wall to keep people out. It's a line that tells the truth about where you end and someone else begins. A real friend can hear a no and stay. And here is what I most want you to carry: you do not owe anyone a speech. You do not need ten reasons stacked up like a defense. You can be warm, you can be clear, and you can stop there. no is a whole answer."

"Just... no?" the {hero} said. "No long explanation?"

"A kind no, plainly given," said {companion_name}. "Explanations are for when you want to. Not a fee you must pay to be allowed to keep what's yours."

The {hero} carried those words home and turned them over all night.

The next day, Dax came smiling, hand already half-out. "So? The {object_motif}. You're giving it to me, right?"

The {hero}'s heart hammered. The old pull was right there, urging surrender. But the {hero} met Dax's eyes and said, steady and unhurried, "No. I'm keeping it. It means a lot to me."

No excuse. No apology stacked on top. Just the truth, said warmly.

For a long second Dax's smile flickered, and the {hero} braced for the cold. "Wow," Dax said. "It's really that big a deal?"

"It is," said the {hero}, gently. "But I'm still glad you're my friend. That part's true."

And then — to the {hero}'s quiet surprise — Dax shrugged, and something in the air loosened. "Fine, fine. Keep your treasure." The edge in Dax's voice faded, and the afternoon went on, lighter than before, as if a weight neither of them had named had finally been set down.

That night the {hero} held the {object_motif} and felt something new and clean spreading through their chest — not the small relief of having dodged a fight, but a steadier, deeper thing. Self-respect. The {hero} had stayed kind. The {hero} had stayed warm. And the {hero} had not given away the thing that mattered to buy a friendship that should have been free.

{companion_name} settled nearby in the dark. "You felt the cost," said {companion_name} softly, "and you chose anyway. That is what a boundary is. Not coldness. Care — for what's yours, and for what's true."

The {hero} nodded, the {object_motif} warm in their hands, and understood that saying no had not made them smaller. It had made them more themselves.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} kept a {object_motif} that meant more than anything else they owned. It wasn't worth much to anyone else — but {child_name} had earned it slowly, over a long season, and it carried a hundred small memories inside it.

That season, {child_name} had fallen in with a clever, popular friend named Dax. Dax was funny and quick and easy to be around, and being chosen by Dax felt good — like standing in a warmer patch of sun. So when Dax started asking for favors, {child_name} said yes. At first the favors were small: hold this, wait here, cover for me. But they grew. {child_name} began doing Dax's chores, giving up the good seat, laughing at jokes that weren't really funny, agreeing to plans that left a strange, uneasy weight in {child_name}'s chest.

Then one afternoon Dax pointed at the {object_motif}. "You should give that to me," Dax said, light and certain, as if it were already decided. "It'd look better with my collection. And honestly — if we're really friends, you would."

{child_name} felt the familiar pull, the one that whispered: just say yes, keep things smooth, keep Dax happy. Saying no might cost something. Dax might cool off. The others might follow Dax. {child_name} could already picture the lonely edge of that. And so the word "okay" rose halfway up {child_name}'s throat, almost on its own.

But it stuck there. Because the {object_motif} mattered, and giving it away to prove a friendship felt exactly backward — like the friendship was something {child_name} had to keep paying for, over and over, and the price kept climbing.

That evening, {child_name} found old {companion_name} near the water's edge, and the whole tangled story came pouring out. "I don't want to give it away," {child_name} admitted. "But if I say no, Dax might be done with me. And maybe I'm being selfish. Maybe a good friend would just hand it over."

{companion_name} listened to all of it before answering. "Let me ask you something," said {companion_name}. "When you do these favors, when you give and give — does it feel like kindness? Or does it feel like a toll you pay to be allowed to stay?"

{child_name} was quiet. "A toll," they said finally. "It never ends. Every time I say yes, the next ask is bigger."

"That's the thing about a boundary," said {companion_name}. "It isn't a wall to keep people out. It's a line that tells the truth about where you end and someone else begins. A real friend can hear a no and stay. And here is what I most want you to carry: you do not owe anyone a speech. You do not need ten reasons stacked up like a defense. You can be warm, you can be clear, and you can stop there. no is a whole answer."

"Just... no?" {child_name} said. "No long explanation?"

"A kind no, plainly given," said {companion_name}. "Explanations are for when you want to. Not a fee you must pay to be allowed to keep what's yours."

{child_name} carried those words home and turned them over all night.

The next day, Dax came smiling, hand already half-out. "So? The {object_motif}. You're giving it to me, right?"

{child_name}'s heart hammered. The old pull was right there, urging surrender. But {child_name} met Dax's eyes and said, steady and unhurried, "No. I'm keeping it. It means a lot to me."

No excuse. No apology stacked on top. Just the truth, said warmly.

For a long second Dax's smile flickered, and {child_name} braced for the cold. "Wow," Dax said. "It's really that big a deal?"

"It is," said {child_name}, gently. "But I'm still glad you're my friend. That part's true."

And then — to {child_name}'s quiet surprise — Dax shrugged, and something in the air loosened. "Fine, fine. Keep your treasure." The edge in Dax's voice faded, and the afternoon went on, lighter than before, as if a weight neither of them had named had finally been set down.

That night {child_name} held the {object_motif} and felt something new and clean spreading through their chest — not the small relief of having dodged a fight, but a steadier, deeper thing. Self-respect. {child_name} had stayed kind. {child_name} had stayed warm. And {child_name} had not given away the thing that mattered to buy a friendship that should have been free.

{companion_name} settled nearby in the dark. "You felt the cost," said {companion_name} softly, "and you chose anyway. That is what a boundary is. Not coldness. Care — for what's yours, and for what's true."

{child_name} nodded, the {object_motif} warm in their hands, and understood that saying no had not made them smaller. It had made them more themselves.

{refrain}.`,
      },
    },
    audioTemplate: `In {setting}, the {hero} owned a {object_motif} that mattered more than anything else they had. It wasn't grand, but the {hero} had earned it, and it held a season's worth of small, good memories.

Lately the {hero} had been spending time with a friend named Bram. Bram was bold and fun, and being near Bram felt warm and easy. So when Bram began asking for favors, the {hero} happily said yes. Hold this. Wait here. Trade me your seat. Each yes felt like the price of staying friends, and the {hero} paid it gladly — at first.

But the asks kept growing. Soon the {hero} was carrying Bram's things, giving up snacks, going along with plans that left a small, uneasy knot in the {hero}'s stomach. The {hero} noticed the knot but said yes anyway, because saying no felt risky. What if Bram got annoyed? What if Bram stopped picking the {hero} for things?

Then one afternoon, Bram looked straight at the {object_motif}. "Give me that," Bram said, easy and sure. "It'd be perfect for me. And if we're really friends, you'll let me have it."

The {hero}'s heart dropped. The {object_motif} was the one thing the {hero} truly didn't want to give. But the old pull was right there, whispering: just say yes, keep the peace, keep Bram happy. The word "okay" climbed halfway up the {hero}'s throat.

This time, it stuck. Giving away the {object_motif} just to prove a friendship felt wrong, like a price that would only keep climbing.

That evening, the {hero} went looking for old {companion_name}, and the whole story spilled out. "I don't want to give it away," the {hero} said. "But if I say no, Bram might be upset with me. Maybe I'm being selfish."

{companion_name} listened to all of it, then spoke gently. "Let me ask you this. When you keep saying yes, does it feel like kindness — or does it feel like a toll you pay just to be allowed to stay?"

The {hero} thought hard. "A toll," they admitted. "And it never stops. Every yes makes the next ask bigger."

"That," said {companion_name}, "is exactly why we need boundaries. A boundary isn't a wall to push people away. It's a quiet line that says where you end and someone else begins. And here is the part I want you to remember most: you do not need to pile up excuses. You do not owe anyone a long list of reasons. You can be warm, you can be clear, and you can stop right there. no is a whole answer."

"Just no?" the {hero} asked. "Nothing more?"

"A kind no, said plainly," {companion_name} replied. "Explanations are for when you choose to give them — not a fee you must pay to keep what's already yours. A true friend can hear a no and stay your friend."

The {hero} carried those words home and turned them over and over as the {object_motif} rested warm in their hands.

The next day, Bram came back, hand already out. "So? The {object_motif}. You're giving it to me, right?"

The {hero}'s heart pounded. The old pull tugged hard. But the {hero} took a slow breath, met Bram's eyes, and said, steady and kind, "No. I'm keeping it. It means a lot to me."

No long excuse. No apology stacked on top. Just the truth, spoken warmly.

For one quiet second, Bram's grin wobbled, and the {hero} braced for a chill. "Huh," Bram said. "It's really that important?"

"It is," said the {hero}, gently. "But I'm still glad we're friends. That part's true."

Bram paused — then shrugged, and the tightness in the air melted away. "Okay. Keep it, then." And just like that, the afternoon went on, lighter than before, as if a weight neither of them had named had finally been set down. They played until the sky went gold, and nothing between them broke.

That night, the {hero} held the {object_motif} close and felt something new and steady glow inside — not just relief, but a calm, clean kind of self-respect. The {hero} had stayed warm. The {hero} had stayed kind. And the {hero} had kept the thing that mattered, instead of trading it away to buy a friendship that should have been free.

{companion_name} settled close in the dark. "You felt the cost," said {companion_name} softly, "and you chose anyway. That is what a kind boundary is. Not coldness — care. For what's yours, and for what's true."

The {hero} smiled, the {object_motif} glowing softly in their hands, and understood at last that saying no hadn't made them smaller. It had made them more themselves.

{refrain}.`,
    scriptTemplate: `In {setting}, {child_name} owned a {object_motif} that mattered more than anything else they had. It wasn't grand, but {child_name} had earned it, and it held a season's worth of small, good memories.

Lately {child_name} had been spending time with a friend named Bram. Bram was bold and fun, and being near Bram felt warm and easy. So when Bram began asking for favors, {child_name} happily said yes. Hold this. Wait here. Trade me your seat. Each yes felt like the price of staying friends, and {child_name} paid it gladly — at first.

But the asks kept growing. Soon {child_name} was carrying Bram's things, giving up snacks, going along with plans that left a small, uneasy knot in {child_name}'s stomach. {child_name} noticed the knot but said yes anyway, because saying no felt risky. What if Bram got annoyed? What if Bram stopped picking {child_name} for things?

Then one afternoon, Bram looked straight at the {object_motif}. "Give me that," Bram said, easy and sure. "It'd be perfect for me. And if we're really friends, you'll let me have it."

{child_name}'s heart dropped. The {object_motif} was the one thing {child_name} truly didn't want to give. But the old pull was right there, whispering: just say yes, keep the peace, keep Bram happy. The word "okay" climbed halfway up {child_name}'s throat.

This time, it stuck. Giving away the {object_motif} just to prove a friendship felt wrong, like a price that would only keep climbing.

That evening, {child_name} went looking for old {companion_name}, and the whole story spilled out. "I don't want to give it away," {child_name} said. "But if I say no, Bram might be upset with me. Maybe I'm being selfish."

{companion_name} listened to all of it, then spoke gently. "Let me ask you this. When you keep saying yes, does it feel like kindness — or does it feel like a toll you pay just to be allowed to stay?"

{child_name} thought hard. "A toll," they admitted. "And it never stops. Every yes makes the next ask bigger."

"That," said {companion_name}, "is exactly why we need boundaries. A boundary isn't a wall to push people away. It's a quiet line that says where you end and someone else begins. And here is the part I want you to remember most: you do not need to pile up excuses. You do not owe anyone a long list of reasons. You can be warm, you can be clear, and you can stop right there. no is a whole answer."

"Just no?" {child_name} asked. "Nothing more?"

"A kind no, said plainly," {companion_name} replied. "Explanations are for when you choose to give them — not a fee you must pay to keep what's already yours. A true friend can hear a no and stay your friend."

{child_name} carried those words home and turned them over and over as the {object_motif} rested warm in their hands.

The next day, Bram came back, hand already out. "So? The {object_motif}. You're giving it to me, right?"

{child_name}'s heart pounded. The old pull tugged hard. But {child_name} took a slow breath, met Bram's eyes, and said, steady and kind, "No. I'm keeping it. It means a lot to me."

No long excuse. No apology stacked on top. Just the truth, spoken warmly.

For one quiet second, Bram's grin wobbled, and {child_name} braced for a chill. "Huh," Bram said. "It's really that important?"

"It is," said {child_name}, gently. "But I'm still glad we're friends. That part's true."

Bram paused — then shrugged, and the tightness in the air melted away. "Okay. Keep it, then." And just like that, the afternoon went on, lighter than before, as if a weight neither of them had named had finally been set down. They played until the sky went gold, and nothing between them broke.

That night, {child_name} held the {object_motif} close and felt something new and steady glow inside — not just relief, but a calm, clean kind of self-respect. {child_name} had stayed warm. {child_name} had stayed kind. And {child_name} had kept the thing that mattered, instead of trading it away to buy a friendship that should have been free.

{companion_name} settled close in the dark. "You felt the cost," said {companion_name} softly, "and you chose anyway. That is what a kind boundary is. Not coldness — care. For what's yours, and for what's true."

{child_name} smiled, the {object_motif} glowing softly in their hands, and understood at last that saying no hadn't made them smaller. It had made them more themselves.

{refrain}.`,
  },
  {
    ordinal: 4,
    title: 'Brave and Kind',
    concept: 'Assertive, not aggressive',
    callback: 'saying a kind, clear no',
    ageFloor: 3,
    summary: 'When the hero is treated unfairly, they feel two wrong pulls: to snap back meanly, or to swallow it and stay silent. Their companion shows the middle path — strong, honest words spoken in a kind tone. The hero learns that standing up for yourself never requires being cruel.',
    teachingNote: 'Assertiveness is firm words plus a kind tone; children can name what is wrong without attacking the person who did it.',
    learningBeat: 'brave and kind at the same time',
    ageVariants: {
      '3-4': {
        audioTemplate: `One day in {setting}, the {hero} built a tall sandy tower. It held the {object_motif} on top.

A bigger friend ran by. The friend knocked the tower flat. "Oops," the friend said, and laughed.

The {hero} felt hot inside. Part of the {hero} wanted to shout a mean word. Part of the {hero} wanted to say nothing and cry.

Both felt wrong.

{companion_name} came down close. "You can use a strong voice and a kind voice together," said {companion_name} softly.

The {hero} took a big breath. The {hero} looked up and said, "That was my tower. Please do not knock it down. Will you help me build it again?"

The strong words were brave. The kind words were gentle.

The big friend blinked. "Okay," the friend said. "Sorry. I will help."

They built the tower together. They set the {object_motif} on top.

The {hero} smiled. You do not have to be mean to be brave. You can be brave and kind at the same time.

{refrain}.`,
        scriptTemplate: `One day in {setting}, {child_name} built a tall sandy tower. It held the {object_motif} on top.

A bigger friend ran by. The friend knocked the tower flat. "Oops," the friend said, and laughed.

{child_name} felt hot inside. Part of {child_name} wanted to shout a mean word. Part of {child_name} wanted to say nothing and cry.

Both felt wrong.

{companion_name} came down close. "You can use a strong voice and a kind voice together," said {companion_name} softly.

{child_name} took a big breath. {child_name} looked up and said, "That was my tower. Please do not knock it down. Will you help me build it again?"

The strong words were brave. The kind words were gentle.

The big friend blinked. "Okay," the friend said. "Sorry. I will help."

They built the tower together. They set the {object_motif} on top.

{child_name} smiled. You do not have to be mean to be brave. You can be brave and kind at the same time.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `In {setting}, the {hero} loved to make things. All week the {hero} had been making a picture of the {object_motif}, adding one careful colour each day.

When the picture was nearly done, a friend named Bree grabbed it to show the others. "Look what I made!" Bree said proudly.

The {hero} felt a sting. That was not fair. Bree had not made it at all.

Two feelings pulled at the {hero}. One feeling said, "Yell at Bree! Call him a liar!" The other feeling said, "Stay quiet. Do not make a fuss."

The {hero} did not know which to pick. So the {hero} went to find {companion_name}.

{companion_name} listened to the whole story. Then {companion_name} said, "When something is wrong, you do not have to shout, and you do not have to hide. You can be brave and kind at the same time. Use true words in a gentle voice."

"How do I do that?" asked the {hero}.

"Say what is true. Say how you feel. Ask for what is fair," said {companion_name}. "Strong words, kind voice."

The {hero} took a deep breath and went back to Bree. It was hard. The {hero}'s heart was beating fast.

"Bree," the {hero} said, "I made that picture. It is not fair to say you made it. I worked on it all week. Please tell the others the truth."

The {hero} did not shout. The {hero} did not call Bree names. But the {hero} did not stay quiet either.

Bree looked down. "You are right," Bree said. "I am sorry. I should not have done that." Bree turned to the others. "The {hero} made it. It was the {hero}, not me."

The {hero} felt something warm and steady inside. It felt better than shouting would have. It felt much better than staying silent.

"You spoke up, and you stayed kind," said {companion_name}. "That takes the most courage of all."

That night, the {hero} kept the picture of the {object_motif} close. Anyone could see it was the {hero}'s own work.

And whenever something felt unfair after that, the {hero} remembered: you can be brave and kind at the same time.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} loved to make things. All week {child_name} had been making a picture of the {object_motif}, adding one careful colour each day.

When the picture was nearly done, a friend named Bree grabbed it to show the others. "Look what I made!" Bree said proudly.

{child_name} felt a sting. That was not fair. Bree had not made it at all.

Two feelings pulled at {child_name}. One feeling said, "Yell at Bree! Call him a liar!" The other feeling said, "Stay quiet. Do not make a fuss."

{child_name} did not know which to pick. So {child_name} went to find {companion_name}.

{companion_name} listened to the whole story. Then {companion_name} said, "When something is wrong, you do not have to shout, and you do not have to hide. You can be brave and kind at the same time. Use true words in a gentle voice."

"How do I do that?" asked {child_name}.

"Say what is true. Say how you feel. Ask for what is fair," said {companion_name}. "Strong words, kind voice."

{child_name} took a deep breath and went back to Bree. It was hard. {child_name}'s heart was beating fast.

"Bree," {child_name} said, "I made that picture. It is not fair to say you made it. I worked on it all week. Please tell the others the truth."

{child_name} did not shout. {child_name} did not call Bree names. But {child_name} did not stay quiet either.

Bree looked down. "You are right," Bree said. "I am sorry. I should not have done that." Bree turned to the others. "{child_name} made it. It was {child_name}, not me."

{child_name} felt something warm and steady inside. It felt better than shouting would have. It felt much better than staying silent.

"You spoke up, and you stayed kind," said {companion_name}. "That takes the most courage of all."

That night, {child_name} kept the picture of the {object_motif} close. Anyone could see it was {child_name}'s own work.

And whenever something felt unfair after that, {child_name} remembered: you can be brave and kind at the same time.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `For three weeks, the {hero} had been quietly building something special in {setting}: a working model of the {object_motif}, the kind that could chime out a signal anyone could follow home in the dark. It was the {hero}'s idea from the start, sketched on scraps of paper, tested and re-tested until it finally worked. The plan was to show it at the gathering, where everyone presented what they had made.

But on the morning of the gathering, something went wrong.

A friend named Coll stood up first, holding the model high. "I want to show you all what I've been working on," Coll said. "I designed this myself. It took ages." And Coll began to explain the {object_motif} — the {hero}'s design, the {hero}'s long nights of work — as if it had been Coll's idea all along.

The {hero} felt the blood rush to their face. It was not just unfair; it was a theft of something that had cost real effort. For a moment the {hero}'s thoughts went white-hot. The {hero} could picture standing up and shouting in front of everyone — "Liar! That's mine! You didn't make any of it!" — could almost feel the words burning to come out.

And then, just as fast, came the opposite pull. Maybe it was easier to say nothing. To sit very still and let it pass, to swallow the unfairness and avoid the scene. Nobody likes the person who makes a fuss. Perhaps it did not matter. Perhaps the {hero} should just let Coll have it.

Two doors, and both felt wrong. One led to cruelty. The other led to disappearing.

The {hero} slipped out to the edge of {setting}, jaw tight, eyes stinging, and found {companion_name} waiting in the quiet.

"I saw your face," said {companion_name} gently. "Tell me what's pulling at you."

"I want to scream at Coll," the {hero} admitted. "And at the same time I want to pretend it didn't happen. I don't know which is worse."

{companion_name} nodded slowly, as if both feelings were old friends. "Those are the two easy roads," said {companion_name}. "Shouting feels powerful, but it makes you the storm, and people stop hearing your words. Staying silent feels safe, but it teaches you that what's yours doesn't matter. There is a third road, and it's the hardest of the three. You can be brave and kind at the same time."

"How?" the {hero} asked. "How do I do both at once?"

"Strong words, kind voice," said {companion_name}. "You name what is true, plainly. You don't soften the truth, and you don't sharpen it into a weapon. You give Coll a way to do the right thing without being humiliated. Remember when you learned to say a clear no, to draw a line and hold it? This is the next step. You hold the line — but you hold it with an open hand, not a fist."

The {hero} breathed in the cool air until the white heat cooled into something steadier — not calm exactly, but controlled. The anger was still there. The {hero} simply decided not to let it do the talking.

When the {hero} walked back in, Coll was just finishing. The room turned. The {hero}'s heart hammered, but the voice came out level.

"Coll," the {hero} said, "I need to say something, and I'm going to say it honestly. That design is mine. I sketched the {object_motif} three weeks ago, and I built every part of it. I know you know that. I'm not trying to embarrass you — but it isn't right to call it yours, and I'm not going to pretend it's fine. I'd like you to tell everyone the truth."

The {hero} did not shout. The {hero} did not call Coll a liar or a thief, though the words had been right there. But the {hero} did not back down or look away, either. Every word was firm, and every word was clean.

The room was very quiet. Coll's face went red, then slowly settled. For a long moment it could have gone either way.

"You're right," Coll said at last, the words rough. "It's not mine. The {hero} made it — all of it. I don't really know why I said what I said." Coll looked at the floor. "I'm sorry. That was a rotten thing to do."

It was not a perfect ending. Coll still looked ashamed, and the {hero}'s hands were still shaking. But something had shifted in the room. The others were looking at the {hero} differently — not with pity, the way they look at someone who got walked over, and not with the nervous distance people keep from someone who explodes. They were looking at the {hero} with respect.

Later, {companion_name} found the {hero} sitting with the model of the {object_motif} in their lap.

"You held your line," said {companion_name}, "and you let Coll keep his dignity. That's a rare kind of strong."

"It was harder than yelling," the {hero} admitted. "And harder than staying quiet."

"It always is," said {companion_name}. "Anger is loud and silence is easy. The middle path asks the most of you — and gives the most back. You stood up for yourself and you didn't have to become unkind to do it. That's the whole secret. You can be brave and kind at the same time."

The {hero} turned the {object_motif} over, listening to its small true chime, and felt the last of the shaking settle into something like quiet pride.

{refrain}.`,
        scriptTemplate: `For three weeks, {child_name} had been quietly building something special in {setting}: a working model of the {object_motif}, the kind that could chime out a signal anyone could follow home in the dark. It was {child_name}'s idea from the start, sketched on scraps of paper, tested and re-tested until it finally worked. The plan was to show it at the gathering, where everyone presented what they had made.

But on the morning of the gathering, something went wrong.

A friend named Coll stood up first, holding the model high. "I want to show you all what I've been working on," Coll said. "I designed this myself. It took ages." And Coll began to explain the {object_motif} — {child_name}'s design, {child_name}'s long nights of work — as if it had been Coll's idea all along.

{child_name} felt the blood rush to their face. It was not just unfair; it was a theft of something that had cost real effort. For a moment {child_name}'s thoughts went white-hot. {child_name} could picture standing up and shouting in front of everyone — "Liar! That's mine! You didn't make any of it!" — could almost feel the words burning to come out.

And then, just as fast, came the opposite pull. Maybe it was easier to say nothing. To sit very still and let it pass, to swallow the unfairness and avoid the scene. Nobody likes the person who makes a fuss. Perhaps it did not matter. Perhaps {child_name} should just let Coll have it.

Two doors, and both felt wrong. One led to cruelty. The other led to disappearing.

{child_name} slipped out to the edge of {setting}, jaw tight, eyes stinging, and found {companion_name} waiting in the quiet.

"I saw your face," said {companion_name} gently. "Tell me what's pulling at you."

"I want to scream at Coll," {child_name} admitted. "And at the same time I want to pretend it didn't happen. I don't know which is worse."

{companion_name} nodded slowly, as if both feelings were old friends. "Those are the two easy roads," said {companion_name}. "Shouting feels powerful, but it makes you the storm, and people stop hearing your words. Staying silent feels safe, but it teaches you that what's yours doesn't matter. There is a third road, and it's the hardest of the three. You can be brave and kind at the same time."

"How?" {child_name} asked. "How do I do both at once?"

"Strong words, kind voice," said {companion_name}. "You name what is true, plainly. You don't soften the truth, and you don't sharpen it into a weapon. You give Coll a way to do the right thing without being humiliated. Remember when you learned to say a clear no, to draw a line and hold it? This is the next step. You hold the line — but you hold it with an open hand, not a fist."

{child_name} breathed in the cool air until the white heat cooled into something steadier — not calm exactly, but controlled. The anger was still there. {child_name} simply decided not to let it do the talking.

When {child_name} walked back in, Coll was just finishing. The room turned. {child_name}'s heart hammered, but the voice came out level.

"Coll," {child_name} said, "I need to say something, and I'm going to say it honestly. That design is mine. I sketched the {object_motif} three weeks ago, and I built every part of it. I know you know that. I'm not trying to embarrass you — but it isn't right to call it yours, and I'm not going to pretend it's fine. I'd like you to tell everyone the truth."

{child_name} did not shout. {child_name} did not call Coll a liar or a thief, though the words had been right there. But {child_name} did not back down or look away, either. Every word was firm, and every word was clean.

The room was very quiet. Coll's face went red, then slowly settled. For a long moment it could have gone either way.

"You're right," Coll said at last, the words rough. "It's not mine. {child_name} made it — all of it. I don't really know why I said what I said." Coll looked at the floor. "I'm sorry. That was a rotten thing to do."

It was not a perfect ending. Coll still looked ashamed, and {child_name}'s hands were still shaking. But something had shifted in the room. The others were looking at {child_name} differently — not with pity, the way they look at someone who got walked over, and not with the nervous distance people keep from someone who explodes. They were looking at {child_name} with respect.

Later, {companion_name} found {child_name} sitting with the model of the {object_motif} in their lap.

"You held your line," said {companion_name}, "and you let Coll keep his dignity. That's a rare kind of strong."

"It was harder than yelling," {child_name} admitted. "And harder than staying quiet."

"It always is," said {companion_name}. "Anger is loud and silence is easy. The middle path asks the most of you — and gives the most back. You stood up for yourself and you didn't have to become unkind to do it. That's the whole secret. You can be brave and kind at the same time."

{child_name} turned the {object_motif} over, listening to its small true chime, and felt the last of the shaking settle into something like quiet pride.

{refrain}.`,
      },
    },
    audioTemplate: `In {setting}, the {hero} had spent the whole afternoon working on something that mattered: a careful map that showed the way to the hidden {object_motif}, drawn line by line, checked and re-checked until every path was right.

When it was finished, the {hero} carried it over to show the others. But before the {hero} could say a word, a friend named Bryn snatched it up and held it overhead. "Look at this map I drew!" Bryn announced. "I figured out the whole way myself!"

The {hero} froze. That was not true. Bryn had not drawn a single line.

Something hot rose in the {hero}'s chest. One part wanted to shout, "Give it back, you liar! That's mine and you know it!" The words were right there, sharp and ready.

But another part pulled the other way. Maybe it was easier to just let it go. To sit down quietly and say nothing and let Bryn keep the map. Making a fuss felt scary. What if everyone thought the {hero} was being mean?

Two choices, and both of them felt wrong. So the {hero} stepped away to think, and that was where {companion_name} found them.

"You look like a storm that can't decide whether to rain," said {companion_name} kindly. "What happened?"

The {hero} told the whole story — the map, Bryn, the two feelings tugging in opposite directions. "I want to yell at Bryn," the {hero} said. "And I also want to pretend it doesn't matter. I don't know what to do."

{companion_name} settled beside the {hero}. "Those are the two easy roads," said {companion_name}. "If you shout, you might feel strong for a moment, but you become the loud one, and people stop listening to your words. If you stay silent, you keep the peace, but you teach yourself that what you make doesn't count. There is a harder road, right between them."

"What road is that?" asked the {hero}.

"You can be brave and kind at the same time," said {companion_name}. "You say the true thing in a steady, gentle voice. Strong words, kind voice. You don't have to make Bryn into your enemy to tell the truth. Remember how you learned to say a clear no, to set a line and hold it? This is that same line — you just hold it without throwing a single stone."

The {hero} breathed in slowly. The hot feeling did not disappear, but it cooled enough that the {hero} could think. The {hero} decided not to let the anger do the talking.

Back at the group, the {hero} walked up to Bryn. The {hero}'s heart was pounding, but the voice came out level and clear.

"Bryn," the {hero} said, "that's my map. I drew it this afternoon — every path, all the way to the {object_motif}. I worked really hard on it, and it isn't fair to say you made it. I'm not trying to get you in trouble. I just want you to tell everyone the truth."

The {hero} did not shout. The {hero} did not call Bryn a single mean name, even though the names had been ready. But the {hero} did not look at the floor and mumble, either. Every word was firm, and every word was kind.

Bryn's face went pink. For a moment it could have gone either way. Then Bryn let out a breath and lowered the map.

"You're right," Bryn said. "It's not mine. The {hero} drew it." Bryn turned to the others. "I'm sorry. The {hero} made the whole map. I don't know why I said that."

The {hero} felt something settle inside — warm and steady and proud. It felt far better than shouting would have. And it felt much better than staying silent and letting the map slip away.

{companion_name} smiled. "Did you see what just happened?" said {companion_name} quietly. "You stood up for yourself, and you didn't have to be cruel to do it. The others heard you, and Bryn could still do the right thing. That is the bravest, kindest kind of strong there is."

The {hero} looked around. The others were not looking at the {hero} the way they look at someone who got pushed around, and not the way they back away from someone who explodes. They were looking with plain, simple respect.

That evening, the {hero} set the map up where everyone could see it, the path to the {object_motif} shining clear, with the {hero}'s own careful lines for all to read.

And from then on, whenever something felt unfair, the {hero} remembered the third road, the hard one in the middle — that you can be brave and kind at the same time.

{refrain}.`,
    scriptTemplate: `In {setting}, {child_name} had spent the whole afternoon working on something that mattered: a careful map that showed the way to the hidden {object_motif}, drawn line by line, checked and re-checked until every path was right.

When it was finished, {child_name} carried it over to show the others. But before {child_name} could say a word, a friend named Bryn snatched it up and held it overhead. "Look at this map I drew!" Bryn announced. "I figured out the whole way myself!"

{child_name} froze. That was not true. Bryn had not drawn a single line.

Something hot rose in {child_name}'s chest. One part wanted to shout, "Give it back, you liar! That's mine and you know it!" The words were right there, sharp and ready.

But another part pulled the other way. Maybe it was easier to just let it go. To sit down quietly and say nothing and let Bryn keep the map. Making a fuss felt scary. What if everyone thought {child_name} was being mean?

Two choices, and both of them felt wrong. So {child_name} stepped away to think, and that was where {companion_name} found them.

"You look like a storm that can't decide whether to rain," said {companion_name} kindly. "What happened?"

{child_name} told the whole story — the map, Bryn, the two feelings tugging in opposite directions. "I want to yell at Bryn," {child_name} said. "And I also want to pretend it doesn't matter. I don't know what to do."

{companion_name} settled beside {child_name}. "Those are the two easy roads," said {companion_name}. "If you shout, you might feel strong for a moment, but you become the loud one, and people stop listening to your words. If you stay silent, you keep the peace, but you teach yourself that what you make doesn't count. There is a harder road, right between them."

"What road is that?" asked {child_name}.

"You can be brave and kind at the same time," said {companion_name}. "You say the true thing in a steady, gentle voice. Strong words, kind voice. You don't have to make Bryn into your enemy to tell the truth. Remember how you learned to say a clear no, to set a line and hold it? This is that same line — you just hold it without throwing a single stone."

{child_name} breathed in slowly. The hot feeling did not disappear, but it cooled enough that {child_name} could think. {child_name} decided not to let the anger do the talking.

Back at the group, {child_name} walked up to Bryn. {child_name}'s heart was pounding, but the voice came out level and clear.

"Bryn," {child_name} said, "that's my map. I drew it this afternoon — every path, all the way to the {object_motif}. I worked really hard on it, and it isn't fair to say you made it. I'm not trying to get you in trouble. I just want you to tell everyone the truth."

{child_name} did not shout. {child_name} did not call Bryn a single mean name, even though the names had been ready. But {child_name} did not look at the floor and mumble, either. Every word was firm, and every word was kind.

Bryn's face went pink. For a moment it could have gone either way. Then Bryn let out a breath and lowered the map.

"You're right," Bryn said. "It's not mine. {child_name} drew it." Bryn turned to the others. "I'm sorry. {child_name} made the whole map. I don't know why I said that."

{child_name} felt something settle inside — warm and steady and proud. It felt far better than shouting would have. And it felt much better than staying silent and letting the map slip away.

{companion_name} smiled. "Did you see what just happened?" said {companion_name} quietly. "You stood up for yourself, and you didn't have to be cruel to do it. The others heard you, and Bryn could still do the right thing. That is the bravest, kindest kind of strong there is."

{child_name} looked around. The others were not looking at {child_name} the way they look at someone who got pushed around, and not the way they back away from someone who explodes. They were looking with plain, simple respect.

That evening, {child_name} set the map up where everyone could see it, the path to the {object_motif} shining clear, with {child_name}'s own careful lines for all to read.

And from then on, whenever something felt unfair, {child_name} remembered the third road, the hard one in the middle — that you can be brave and kind at the same time.

{refrain}.`,
  },
  {
    ordinal: 5,
    title: 'Standing Up for Others',
    concept: 'Using your voice for someone else',
    callback: 'being brave and kind',
    ageFloor: 3,
    summary: 'The hero notices another friend being left out and overlooked while everyone else plays. Drawing on everything learned across the journey — that your voice matters, that asking and saying no are allowed, and that brave goes hand in hand with kind — the hero chooses to speak up for someone who could not speak up for themselves. It is the bravest moment of all, because courage turned outward becomes kindness.',
    teachingNote: 'The bravest use of a voice is not to win something for yourself, but to make room for someone who has been left out.',
    learningBeat: 'a voice can stand up for someone else',
    ageVariants: {
      '3-4': {
        audioTemplate: `It was play time in {setting}. Everyone ran and laughed.

But one small friend sat all alone. No one asked them to play.

The {hero} saw. The {hero} held the {object_motif} tight.

{companion_name} said softly, "What do you see?"

"Someone left out," said the {hero}. "That is not fair."

The {hero} felt a little scared. But the {hero} walked over to the big group.

"Wait," said the {hero}. "Let them play too. Everyone can play."

The group went quiet. Then they smiled. "Yes! Come and play!"

The lonely friend jumped up, happy at last.

{companion_name} glowed. "You were brave and kind. You used your voice for someone else."

And the {hero} learned that a voice can stand up for someone else.

The {hero} held the {object_motif} close and felt warm inside.

{refrain}.`,
        scriptTemplate: `It was play time in {setting}. Everyone ran and laughed.

But one small friend sat all alone. No one asked them to play.

{child_name} saw. {child_name} held the {object_motif} tight.

{companion_name} said softly, "What do you see?"

"Someone left out," said {child_name}. "That is not fair."

{child_name} felt a little scared. But {child_name} walked over to the big group.

"Wait," said {child_name}. "Let them play too. Everyone can play."

The group went quiet. Then they smiled. "Yes! Come and play!"

The lonely friend jumped up, happy at last.

{companion_name} glowed. "You were brave and kind. You used your voice for someone else."

And {child_name} learned that a voice can stand up for someone else.

{child_name} held the {object_motif} close and felt warm inside.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `The day was bright in {setting}, and a game was about to begin. Everyone gathered to choose teams and pick who would play.

The {hero} had learned a lot on this journey. The {hero} knew that your voice matters. The {hero} knew it was okay to ask, and okay to say no, and that being brave and kind go together.

As the teams formed, the {hero} noticed something. One friend stood off to the side. No one called their name. No one waved them over. They looked down at their feet and tried to seem like they did not mind, but the {hero} could tell that they did.

"What do you see?" asked {companion_name}, landing close by.

"They got left out," said the {hero}. "Everyone forgot about them."

"And what will you do?" asked {companion_name}.

The {hero} felt a flutter of worry. It would be easy to say nothing. The game was already starting. But the {hero} held the {object_motif} and remembered every step of the journey.

The {hero} walked into the middle of the group and took a deep breath.

"We forgot someone," said the {hero}, clear and calm. "Our friend wants to play too. Let's make a spot for them."

For a moment, no one spoke. Then one of the players nodded. "You're right. Come on over!"

The friend looked up, surprised and glad. They ran to join the group, and the team made room.

The whole game felt better after that. There was more laughing, more cheering, and no one stood alone at the side.

When the game was over, {companion_name} sat beside the {hero}.

"You have learned to use your voice for yourself," said {companion_name}. "Today you learned something even bigger. You learned that a voice can stand up for someone else. That is the bravest thing of all."

The {hero} smiled and turned the {object_motif} over in their hands. Speaking up for a friend had felt scary at first. But now it felt like the best thing they had ever done.

{refrain}.`,
        scriptTemplate: `The day was bright in {setting}, and a game was about to begin. Everyone gathered to choose teams and pick who would play.

{child_name} had learned a lot on this journey. {child_name} knew that your voice matters. {child_name} knew it was okay to ask, and okay to say no, and that being brave and kind go together.

As the teams formed, {child_name} noticed something. One friend stood off to the side. No one called their name. No one waved them over. They looked down at their feet and tried to seem like they did not mind, but {child_name} could tell that they did.

"What do you see?" asked {companion_name}, landing close by.

"They got left out," said {child_name}. "Everyone forgot about them."

"And what will you do?" asked {companion_name}.

{child_name} felt a flutter of worry. It would be easy to say nothing. The game was already starting. But {child_name} held the {object_motif} and remembered every step of the journey.

{child_name} walked into the middle of the group and took a deep breath.

"We forgot someone," said {child_name}, clear and calm. "Our friend wants to play too. Let's make a spot for them."

For a moment, no one spoke. Then one of the players nodded. "You're right. Come on over!"

The friend looked up, surprised and glad. They ran to join the group, and the team made room.

The whole game felt better after that. There was more laughing, more cheering, and no one stood alone at the side.

When the game was over, {companion_name} sat beside {child_name}.

"You have learned to use your voice for yourself," said {companion_name}. "Today you learned something even bigger. You learned that a voice can stand up for someone else. That is the bravest thing of all."

{child_name} smiled and turned the {object_motif} over in their hands. Speaking up for a friend had felt scary at first. But now it felt like the best thing they had ever done.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `The light was soft and golden over {setting} when the others began to gather, the way they always did near the end of the day. There was a game they all loved, one that needed teams, and the choosing of those teams had a kind of unwritten order to it. The fastest were picked first. The funniest next. And somewhere near the end, sometimes, someone was simply not picked at all.

The {hero} had come a long way to reach this evening. The {hero} had learned, slowly and not always easily, that their own voice mattered — that they could ask for what they needed, that they were allowed to say no when something felt wrong, and that being brave and being kind were not two separate things but one. Tonight, though, the lesson waiting was different. It was not about standing up for themselves.

It was about a friend named Wren.

Wren was quiet. Wren was a little slower than the others and laughed at the wrong moments and sometimes said things that made the group go silent. As the teams formed, the {hero} watched the familiar pattern unfold. Names were called. Spots were filled. And Wren stood at the edge of it all, pretending to study a leaf, pretending not to count how many had been chosen before them, pretending the heat rising in their face was from the sun.

One of the louder players glanced at Wren and rolled their eyes. "We don't need them," the player said, not quite under their breath. "They'll just slow us down." A few others laughed — not cruelly, exactly, but easily, the way people laugh when it costs them nothing.

The {hero} felt something tighten in their chest. The {hero} knew that feeling. It was fear, plain and simple. Because to speak now was to step out of the warm, safe middle of the group and into the cold open space where everyone could see you. The {hero} could already imagine the eyes turning, the silence, the chance that the laughter might swing around to point at them instead.

"You've gone very still," said {companion_name}, settling nearby. "What are you weighing?"

"If I say something," the {hero} said quietly, "they might turn on me too. And it won't even be about me. Maybe I should just stay out of it."

"Maybe," said {companion_name}. "No one would blame you. That is what makes this the hardest kind of brave. You have nothing to gain. Only someone else does."

The {hero} looked down at the {object_motif} in their hands, the thing they had carried through every part of this journey. The {hero} thought about how it had felt, in earlier days, to be small and unheard. And the {hero} thought about Wren, standing there alone, hoping someone — anyone — would notice.

So the {hero} stepped forward. Their heart was pounding, but their voice, when it came, was calm and steady and kind.

"That's not fair to Wren," the {hero} said. "They want to play just like the rest of us, and we're treating them like they don't count. I don't like how that feels. I think Wren should be on a team — and they can be on mine."

The clearing went quiet. The loud player opened their mouth, then closed it again. For a long moment the {hero} stood in that open space and felt every bit of the fear they had braced for. But the {hero} did not take the words back. The {hero} simply waited, steady, and let them be true.

Then, slowly, something shifted. "Yeah," said another player. "That wasn't cool. Wren, come on — you're with us." And just like that, the wall came down. Someone tossed Wren the ball. Someone else made room.

Wren looked at the {hero} with an expression the {hero} would not forget for a long time — not just relief, but something steadier underneath it. The look of a person who had felt invisible and had just discovered they were not.

The game went on, louder and warmer than before, and Wren, it turned out, was not slow at all once someone had bothered to let them run.

Later, when the light had gone violet and the others had drifted home, {companion_name} settled beside the {hero}.

"You were afraid," said {companion_name}. "I saw it. And you spoke anyway."

"I almost didn't," the {hero} admitted.

"But you did. And here is the thing I most wanted you to learn, at the very end of all of this." {companion_name} looked at the {hero} with quiet pride. "Using your voice for yourself is brave. But a voice can stand up for someone else — and that is the bravest use of all. You turned your courage outward today. You spent it on someone who had none left of their own."

The {hero} held the {object_motif} and felt, for the first time, that they understood what the whole long journey had been for.

{refrain}.`,
        scriptTemplate: `The light was soft and golden over {setting} when the others began to gather, the way they always did near the end of the day. There was a game they all loved, one that needed teams, and the choosing of those teams had a kind of unwritten order to it. The fastest were picked first. The funniest next. And somewhere near the end, sometimes, someone was simply not picked at all.

{child_name} had come a long way to reach this evening. {child_name} had learned, slowly and not always easily, that their own voice mattered — that they could ask for what they needed, that they were allowed to say no when something felt wrong, and that being brave and being kind were not two separate things but one. Tonight, though, the lesson waiting was different. It was not about standing up for themselves.

It was about a friend named Wren.

Wren was quiet. Wren was a little slower than the others and laughed at the wrong moments and sometimes said things that made the group go silent. As the teams formed, {child_name} watched the familiar pattern unfold. Names were called. Spots were filled. And Wren stood at the edge of it all, pretending to study a leaf, pretending not to count how many had been chosen before them, pretending the heat rising in their face was from the sun.

One of the louder players glanced at Wren and rolled their eyes. "We don't need them," the player said, not quite under their breath. "They'll just slow us down." A few others laughed — not cruelly, exactly, but easily, the way people laugh when it costs them nothing.

{child_name} felt something tighten in their chest. {child_name} knew that feeling. It was fear, plain and simple. Because to speak now was to step out of the warm, safe middle of the group and into the cold open space where everyone could see you. {child_name} could already imagine the eyes turning, the silence, the chance that the laughter might swing around to point at them instead.

"You've gone very still," said {companion_name}, settling nearby. "What are you weighing?"

"If I say something," {child_name} said quietly, "they might turn on me too. And it won't even be about me. Maybe I should just stay out of it."

"Maybe," said {companion_name}. "No one would blame you. That is what makes this the hardest kind of brave. You have nothing to gain. Only someone else does."

{child_name} looked down at the {object_motif} in their hands, the thing they had carried through every part of this journey. {child_name} thought about how it had felt, in earlier days, to be small and unheard. And {child_name} thought about Wren, standing there alone, hoping someone — anyone — would notice.

So {child_name} stepped forward. Their heart was pounding, but their voice, when it came, was calm and steady and kind.

"That's not fair to Wren," {child_name} said. "They want to play just like the rest of us, and we're treating them like they don't count. I don't like how that feels. I think Wren should be on a team — and they can be on mine."

The clearing went quiet. The loud player opened their mouth, then closed it again. For a long moment {child_name} stood in that open space and felt every bit of the fear they had braced for. But {child_name} did not take the words back. {child_name} simply waited, steady, and let them be true.

Then, slowly, something shifted. "Yeah," said another player. "That wasn't cool. Wren, come on — you're with us." And just like that, the wall came down. Someone tossed Wren the ball. Someone else made room.

Wren looked at {child_name} with an expression {child_name} would not forget for a long time — not just relief, but something steadier underneath it. The look of a person who had felt invisible and had just discovered they were not.

The game went on, louder and warmer than before, and Wren, it turned out, was not slow at all once someone had bothered to let them run.

Later, when the light had gone violet and the others had drifted home, {companion_name} settled beside {child_name}.

"You were afraid," said {companion_name}. "I saw it. And you spoke anyway."

"I almost didn't," {child_name} admitted.

"But you did. And here is the thing I most wanted you to learn, at the very end of all of this." {companion_name} looked at {child_name} with quiet pride. "Using your voice for yourself is brave. But a voice can stand up for someone else — and that is the bravest use of all. You turned your courage outward today. You spent it on someone who had none left of their own."

{child_name} held the {object_motif} and felt, for the first time, that they understood what the whole long journey had been for.

{refrain}.`,
      },
    },
    audioTemplate: `The evening came gently to {setting}, and with it came the others, gathering the way they always did for the game they all loved best. Teams had to be chosen, and there was an order to the choosing that everyone knew without anyone ever saying it aloud.

The {hero} had travelled a long way to reach this night. Along the journey the {hero} had learned that their voice mattered. The {hero} had learned to ask for what they needed, and to say no when something was not right, and — most of all — that being brave and being kind belonged together, like two halves of the same thing. But tonight's lesson was new. It was not about speaking up for themselves at all.

As the teams formed and names were called, the {hero} noticed a friend standing apart from the group. The friend was quiet and a little shy, and one by one the others were chosen until only they were left, looking down, pretending not to mind.

"We don't really need them," said one of the louder players, with a small careless laugh. "They'll just slow us down." A few others laughed along, the easy kind of laugh that costs nothing to give and everything to receive.

The {hero} felt their chest go tight. The {hero} knew that feeling — it was fear. To say something now meant stepping out of the safe middle of the group, where no one could see you, into the open where everyone could. The laughter might turn. It might point at the {hero} next.

"You've gone quiet," said {companion_name}, landing softly beside the {hero}. "What are you thinking?"

"If I speak up, they might turn on me too," said the {hero}. "And it isn't even about me."

"No," said {companion_name} gently. "It's about someone who can't speak up for themselves right now. That is what makes this the hardest kind of brave. You have nothing to win. Only your friend does."

The {hero} looked down at the {object_motif} they had carried through the whole journey. The {hero} remembered how it had felt, once, to be small and overlooked and wishing someone would notice. And the {hero} looked at the friend, standing alone at the edge, hoping for exactly that.

So the {hero} stepped forward. Their heart was beating hard, but their voice came out calm and clear and kind.

"That's not fair," said the {hero}. "Our friend wants to play just as much as we do, and we're acting like they don't count. I don't like how that feels. They should be on a team — and they can be on mine."

For a moment the whole clearing went still. The loud player started to say something, then stopped. The {hero} stood in the open space and felt every bit of the fear they had expected. But the {hero} did not take the words back. The {hero} just waited, steady and sure.

Then something changed. "You're right," said another player slowly. "That wasn't kind. Come on — you're with us." And just like that, the wall came down. Someone passed the friend the ball. Someone else made a place for them.

The friend looked at the {hero} with an expression they would remember for a long time — relief, yes, but something steadier underneath it. The look of someone who had felt invisible and had just found out they were not.

The game went on, louder and warmer than before, and the friend, as it turned out, was not slow at all once someone had simply let them run.

When the game was done and the others had wandered home, {companion_name} settled beside the {hero} in the fading light.

"You were afraid," said {companion_name}. "I saw it. And you spoke anyway."

"I almost didn't," the {hero} admitted.

"But you did. And this is the thing I most wanted you to learn, at the very end of all of it. Using your voice for yourself is brave. But a voice can stand up for someone else — and that is the bravest use of all. Today you turned your courage outward. You spent it on someone who had none left of their own."

The {hero} held the {object_motif} close and understood, at last, what the whole long journey had been for.

{refrain}.`,
    scriptTemplate: `The evening came gently to {setting}, and with it came the others, gathering the way they always did for the game they all loved best. Teams had to be chosen, and there was an order to the choosing that everyone knew without anyone ever saying it aloud.

{child_name} had travelled a long way to reach this night. Along the journey {child_name} had learned that their voice mattered. {child_name} had learned to ask for what they needed, and to say no when something was not right, and — most of all — that being brave and being kind belonged together, like two halves of the same thing. But tonight's lesson was new. It was not about speaking up for themselves at all.

As the teams formed and names were called, {child_name} noticed a friend standing apart from the group. The friend was quiet and a little shy, and one by one the others were chosen until only they were left, looking down, pretending not to mind.

"We don't really need them," said one of the louder players, with a small careless laugh. "They'll just slow us down." A few others laughed along, the easy kind of laugh that costs nothing to give and everything to receive.

{child_name} felt their chest go tight. {child_name} knew that feeling — it was fear. To say something now meant stepping out of the safe middle of the group, where no one could see you, into the open where everyone could. The laughter might turn. It might point at {child_name} next.

"You've gone quiet," said {companion_name}, landing softly beside {child_name}. "What are you thinking?"

"If I speak up, they might turn on me too," said {child_name}. "And it isn't even about me."

"No," said {companion_name} gently. "It's about someone who can't speak up for themselves right now. That is what makes this the hardest kind of brave. You have nothing to win. Only your friend does."

{child_name} looked down at the {object_motif} they had carried through the whole journey. {child_name} remembered how it had felt, once, to be small and overlooked and wishing someone would notice. And {child_name} looked at the friend, standing alone at the edge, hoping for exactly that.

So {child_name} stepped forward. Their heart was beating hard, but their voice came out calm and clear and kind.

"That's not fair," said {child_name}. "Our friend wants to play just as much as we do, and we're acting like they don't count. I don't like how that feels. They should be on a team — and they can be on mine."

For a moment the whole clearing went still. The loud player started to say something, then stopped. {child_name} stood in the open space and felt every bit of the fear they had expected. But {child_name} did not take the words back. {child_name} just waited, steady and sure.

Then something changed. "You're right," said another player slowly. "That wasn't kind. Come on — you're with us." And just like that, the wall came down. Someone passed the friend the ball. Someone else made a place for them.

The friend looked at {child_name} with an expression they would remember for a long time — relief, yes, but something steadier underneath it. The look of someone who had felt invisible and had just found out they were not.

The game went on, louder and warmer than before, and the friend, as it turned out, was not slow at all once someone had simply let them run.

When the game was done and the others had wandered home, {companion_name} settled beside {child_name} in the fading light.

"You were afraid," said {companion_name}. "I saw it. And you spoke anyway."

"I almost didn't," {child_name} admitted.

"But you did. And this is the thing I most wanted you to learn, at the very end of all of it. Using your voice for yourself is brave. But a voice can stand up for someone else — and that is the bravest use of all. Today you turned your courage outward. You spent it on someone who had none left of their own."

{child_name} held the {object_motif} close and understood, at last, what the whole long journey had been for.

{refrain}.`,
  },
]
