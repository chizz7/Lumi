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
    title: 'The Quiet Idea',
    concept: 'Your words and ideas have value',
    callback: null,
    ageFloor: 3,
    summary: 'A small, quiet hero notices something wonderful that no one else has seen. The hero wants to share but feels too small. With gentle encouragement from a companion, the hero speaks up, and their discovery delights everyone. The story teaches children that even quiet voices carry ideas worth hearing.',
    teachingNote: 'Shyness is not silence, and small voices matter. Sometimes all it takes is one person saying "yes, tell us" for a shy child to find their courage.',
    learningBeat: 'your voice matters',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} was the kind who watched more than talked.

One day, the {hero} found something no one else had seen. It was {object_motif}. It glowed soft and true.

The {hero} wanted to show everyone. But a small voice inside whispered, "You are too quiet. No one will listen to you."

So the {hero} held the {object_motif} close and said nothing.

{companion_name} noticed. "What have you found?" asked {companion_name} gently.

The {hero} looked down. "Something good. But... your voice matters, doesn't it? Even mine?"

{companion_name} smiled. "Yes. Show them."

The {hero} took a breath. "Everyone, look," the {hero} said. "I found this."

The others came running. "How beautiful!" they cried. "We never would have seen it!"

The {hero} glowed as bright as the {object_motif}. *Clink* went the {object_motif} as it turned in the light.

And the {hero} knew: your voice matters.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} was the kind who watched more than talked.

One day, {child_name} found something no one else had seen. It was {object_motif}. It glowed soft and true.

{child_name} wanted to show everyone. But a small voice inside whispered, "You are too quiet. No one will listen to you."

So {child_name} held the {object_motif} close and said nothing.

{companion_name} noticed. "What have you found?" asked {companion_name} gently.

{child_name} looked down. "Something good. But... your voice matters, doesn't it? Even mine?"

{companion_name} smiled. "Yes. Show them."

{child_name} took a breath. "Everyone, look," {child_name} said. "I found this."

The others came running. "How beautiful!" they cried. "We never would have seen it!"

{child_name} glowed as bright as the {object_motif}. *Clink* went the {object_motif} as it turned in the light.

And {child_name} knew: your voice matters.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `In the corner of {setting}, there lived a {hero} who was known, if known at all, for being quiet. While the others played loud and played big, the {hero} preferred to watch, to listen, to notice the small things that others rushed right past.

One morning, tucked in a corner where the light fell just right, the {hero} discovered {object_motif}. It was beautiful — not showy, but true. The {hero}'s heart leapt. This was something wonderful. This was something to share.

But when the {hero} looked up to call the others over, a familiar worry landed on their shoulders like a stone. The {hero} was so quiet. The {hero} was so small. What if they spoke up and no one heard? What if everyone just kept playing and the {hero}'s discovery didn't matter?

So the {hero} stayed still. The {object_motif} sat there, unshared, and the bright feeling inside the {hero} grew dimmer.

{companion_name} had been watching from nearby. "You have found something," said {companion_name} gently. "I can see it in your eyes. Why do you not share it?"

The {hero} looked down. "I am too quiet," the {hero} whispered. "My words are too small."

{companion_name} settled close. "Let me ask you something. If you whisper a true thing, does it become less true? No. A quiet voice can still say something that matters. Your voice matters — watch and see."

The {hero} took a breath that felt braver than it should have been. "Everyone," the {hero} said, clear and steady. "Come and see what I found."

The others came. One by one, they gathered around. When they saw {object_motif}, their eyes went wide. "How did you find this?" they asked. "We walked right past it!" And in that moment the {hero} understood: it was not the loudness of the words that made them matter. It was that they were true, and that the {hero} had been brave enough to speak them.

That evening, the {hero} watched the others enjoying the beauty of {object_motif}, and felt something warm settle in their chest. The {hero} had spoken up. And the world had listened.

{refrain}.`,
        scriptTemplate: `In the corner of {setting}, there lived a {child_name} who was known, if known at all, for being quiet. While the others played loud and played big, {child_name} preferred to watch, to listen, to notice the small things that others rushed right past.

One morning, tucked in a corner where the light fell just right, {child_name} discovered {object_motif}. It was beautiful — not showy, but true. {child_name}'s heart leapt. This was something wonderful. This was something to share.

But when {child_name} looked up to call the others over, a familiar worry landed on their shoulders like a stone. {child_name} was so quiet. {child_name} was so small. What if {child_name} spoke up and no one heard? What if everyone just kept playing and {child_name}'s discovery didn't matter?

So {child_name} stayed still. The {object_motif} sat there, unshared, and the bright feeling inside {child_name} grew dimmer.

{companion_name} had been watching from nearby. "{child_name}, you have found something," said {companion_name} gently. "I can see it in your eyes. Why do you not share it?"

{child_name} looked down. "I am too quiet," {child_name} whispered. "My words are too small."

{companion_name} settled close. "Let me ask you something. If you whisper a true thing, does it become less true? No. A quiet voice can still say something that matters. Your voice matters — watch and see."

{child_name} took a breath that felt braver than it should have been. "Everyone," {child_name} said, clear and steady. "Come and see what I found."

The others came. One by one, they gathered around. When they saw {object_motif}, their eyes went wide. "How did you find this?" they asked. "We walked right past it!" And in that moment {child_name} understood: it was not the loudness of the words that made them matter. It was that they were true, and that {child_name} had been brave enough to speak them.

That evening, {child_name} watched the others enjoying the beauty of {object_motif}, and felt something warm settle in their chest. {child_name} had spoken up. And the world had listened.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `The {hero} had long since accepted the shape of their own nature: a watcher, a listener, a keeper of quiet thoughts. In {setting}, where there was always noise and chatter and the beautiful clatter of bold voices making decisions, the {hero} had learned to be comfortable at the edge of things, observing, understanding, but rarely speaking.

This had felt safe. This had felt right. Until one afternoon when the {hero} noticed something that no one else had noticed — a pattern in the way the light moved through {setting}, a path that revealed a hidden place where {object_motif} rested, half-buried and perfect.

The {hero}'s first instinct was to do what they always did: observe it alone, commit it to memory, and keep the discovery to themselves. There was comfort in that. There was no risk in that. The {hero} could remain on the edge, safe and unseen, knowing something beautiful without having to announce it to the world.

But as the {hero} sat with the {object_motif}, turning it slowly in their hands, something whispered a question: was staying quiet the same as being wise? Or was it just fear, wearing a prettier name?

That evening, {companion_name} appeared at the {hero}'s side and waited. {companion_name} had learned long ago that sometimes the kindest thing you could do was simply sit with someone and let them find their own words.

Finally, the {hero} spoke. "I found something today," the {hero} said slowly. "Something beautiful. And I didn't tell anyone because I was afraid they wouldn't understand. Or worse — that they wouldn't listen. Is that... is that being smart, or is that being small?"

{companion_name} was quiet for a moment. "Tell me something," said {companion_name}. "If you keep silent, who does that protect? And if you speak, who might you help?" The {hero} had no answer, but the question hung in the air, waiting.

"There is a whisper in your chest right now," {companion_name} went on gently. "Can you feel it? That is your voice, saying it is ready. A voice that knows something true is never a small thing, no matter how quietly it is said. Your voice matters — not because it is the loudest, but because it carries something real."

The {hero} thought of the {object_motif}, hidden and perfect, known only to themselves. They thought of the others, who walked past beauty every day without seeing it, who might walk past it forever if no one spoke.

So the {hero} stood. The {hero}'s heart was a drum, but the voice came out steady: "There is something in {setting} you should see. I found it today. I'd like to show you."

The others followed the {hero} to the place where {object_motif} rested. When they saw it, their faces changed — the way faces do when they witness something they did not know was possible. "How did you find this?" they asked, and the {hero} realized that the question was not about skill, but about a kind of attention that came from love, from watching, from caring enough to notice what others missed.

That night, as the {hero} sat with the {object_motif} and the quiet knowledge of what they had done, {companion_name} smiled. "You were afraid your voice was too small," said {companion_name}. "But you spoke anyway. That is what courage actually is. And I want you to know: your voice matters — not someday, but now. Not for being loud, but for being true."

The {hero} held the {object_motif} close and understood, for the first time, that being quiet and being voiceless were not the same thing at all.

{refrain}.`,
        scriptTemplate: `{child_name} had long since accepted the shape of their own nature: a watcher, a listener, a keeper of quiet thoughts. In {setting}, where there was always noise and chatter and the beautiful clatter of bold voices making decisions, {child_name} had learned to be comfortable at the edge of things, observing, understanding, but rarely speaking.

This had felt safe. This had felt right. Until one afternoon when {child_name} noticed something that no one else had noticed — a pattern in the way the light moved through {setting}, a path that revealed a hidden place where {object_motif} rested, half-buried and perfect.

{child_name}'s first instinct was to do what they always did: observe it alone, commit it to memory, and keep the discovery to themselves. There was comfort in that. There was no risk in that. {child_name} could remain on the edge, safe and unseen, knowing something beautiful without having to announce it to the world.

But as {child_name} sat with the {object_motif}, turning it slowly in their hands, something whispered a question: was staying quiet the same as being wise? Or was it just fear, wearing a prettier name?

That evening, {companion_name} appeared at {child_name}'s side and waited. {companion_name} had learned long ago that sometimes the kindest thing you could do was simply sit with someone and let them find their own words.

Finally, {child_name} spoke. "I found something today," {child_name} said slowly. "Something beautiful. And I didn't tell anyone because I was afraid they wouldn't understand. Or worse — that they wouldn't listen. Is that... is that being smart, or is that being small?"

{companion_name} was quiet for a moment. "Tell me something," said {companion_name}. "If you keep silent, who does that protect? And if you speak, who might you help?" {child_name} had no answer, but the question hung in the air, waiting.

"There is a whisper in your chest right now," {companion_name} went on gently. "Can you feel it? That is your voice, saying it is ready. A voice that knows something true is never a small thing, no matter how quietly it is said. Your voice matters — not because it is the loudest, but because it carries something real."

{child_name} thought of the {object_motif}, hidden and perfect, known only to themselves. They thought of the others, who walked past beauty every day without seeing it, who might walk past it forever if no one spoke.

So {child_name} stood. {child_name}'s heart was a drum, but the voice came out steady: "There is something in {setting} you should see. I found it today. I'd like to show you."

The others followed {child_name} to the place where {object_motif} rested. When they saw it, their faces changed — the way faces do when they witness something they did not know was possible. "How did you find this?" they asked, and {child_name} realized that the question was not about skill, but about a kind of attention that came from love, from watching, from caring enough to notice what others missed.

That night, as {child_name} sat with the {object_motif} and the quiet knowledge of what they had done, {companion_name} smiled. "You were afraid your voice was too small," said {companion_name}. "But you spoke anyway. That is what courage actually is. And I want you to know: your voice matters — not someday, but now. Not for being loud, but for being true."

{child_name} held the {object_motif} close and understood, for the first time, that being quiet and being voiceless were not the same thing at all.

{refrain}.`,
      },
    },
    audioTemplate: `In {setting}, the {hero} was the kind to notice things. While others played and shouted and filled the air with their loud plans, the {hero} sat at the edge and watched, and thought, and saw.

The {hero} saw that the warm corner of {setting} would be perfect for the flower that no one had planted yet. The {hero} saw that a different path through {setting} would be faster. The {hero} saw a hundred small truths that no one else had bothered to look for. But the {hero} never spoke any of it aloud.

One afternoon, the {hero} discovered something that stopped their breath: {object_motif}, hidden in plain sight, waiting to be found. It was the most beautiful thing the {hero} had ever seen. The {hero} wanted to run and tell everyone. The {hero} wanted to share it, to see their faces light up the way the {hero}'s had lit up.

But there was a voice inside that held the {hero} back. A voice that said: you are too small. You are too quiet. No one will listen to you. Why would they? They don't listen when you are thinking — why would they listen when you are speaking?

So the {hero} held the {object_motif} close and said nothing. And carried the secret, alone, like a weight.

That was when {companion_name} appeared, settling beside the {hero} with a gentleness that made it clear they had been watching for a long time.

"You have found something," said {companion_name}. It was not a question.

The {hero} looked down. "Yes. But... what does it matter? I am just the quiet one. No one listens to the quiet ones."

{companion_name} waited a moment before answering. Then: "Can I tell you a secret? A quiet voice that speaks something true is not a small thing. It is not easy. But it matters. Your voice matters. Not because it is loud. Because it is yours, and it is true."

The {hero} felt the {object_motif} in their hands. The {hero} thought about keeping the secret forever, hoarding beauty in silence. And then the {hero} thought about speaking up — about stepping out of the safe edge and into the open where everyone could see them.

The {hero} took a breath that felt enormous. Then the {hero} stood, and the {hero} walked to the others, and the {hero} spoke: "Come and look at what I found."

The reaction was immediate. Eyes wide. Questions tumbling over each other. One of them whispered, "Can you see it too? How did you notice that?" And in that moment, the {hero} understood something: the {hero} had been waiting for permission to matter. But permission, the {hero} realized, comes from within.

That evening, as the {hero} watched the others enjoying {object_motif}, {companion_name} settled close once more. "You see?" said {companion_name} softly. "You spoke. They heard. And you learned something that will serve you for the rest of your life: your voice matters. Not someday. Not when you are louder or braver or more certain. Now. Because it is true, and because you had the courage to share it."

The {hero} held the {object_motif} and understood that being quiet had never meant being voiceless. It had just meant waiting for the right moment to discover the difference.

{refrain}.`,
    scriptTemplate: `In {setting}, {child_name} was the kind to notice things. While others played and shouted and filled the air with their loud plans, {child_name} sat at the edge and watched, and thought, and saw.

{child_name} saw that the warm corner of {setting} would be perfect for the flower that no one had planted yet. {child_name} saw that a different path through {setting} would be faster. {child_name} saw a hundred small truths that no one else had bothered to look for. But {child_name} never spoke any of it aloud.

One afternoon, {child_name} discovered something that stopped their breath: {object_motif}, hidden in plain sight, waiting to be found. It was the most beautiful thing {child_name} had ever seen. {child_name} wanted to run and tell everyone. {child_name} wanted to share it, to see their faces light up the way {child_name}'s had lit up.

But there was a voice inside that held {child_name} back. A voice that said: you are too small. You are too quiet. No one will listen to you. Why would they? They don't listen when you are thinking — why would they listen when you are speaking?

So {child_name} held the {object_motif} close and said nothing. And carried the secret, alone, like a weight.

That was when {companion_name} appeared, settling beside {child_name} with a gentleness that made it clear they had been watching for a long time.

"You have found something," said {companion_name}. It was not a question.

{child_name} looked down. "Yes. But... what does it matter? I am just the quiet one. No one listens to the quiet ones."

{companion_name} waited a moment before answering. Then: "Can I tell you a secret? A quiet voice that speaks something true is not a small thing. It is not easy. But it matters. Your voice matters. Not because it is loud. Because it is yours, and it is true."

{child_name} felt the {object_motif} in their hands. {child_name} thought about keeping the secret forever, hoarding beauty in silence. And then {child_name} thought about speaking up — about stepping out of the safe edge and into the open where everyone could see them.

{child_name} took a breath that felt enormous. Then {child_name} stood, and {child_name} walked to the others, and {child_name} spoke: "Come and look at what I found."

The reaction was immediate. Eyes wide. Questions tumbling over each other. One of them whispered, "Can you see it too? How did you notice that?" And in that moment, {child_name} understood something: {child_name} had been waiting for permission to matter. But permission, {child_name} realized, comes from within.

That evening, as {child_name} watched the others enjoying {object_motif}, {companion_name} settled close once more. "You see?" said {companion_name} softly. "You spoke. They heard. And you learned something that will serve you for the rest of your life: your voice matters. Not someday. Not when you are louder or braver or more certain. Now. Because it is true, and because you had the courage to share it."

{child_name} held the {object_motif} and understood that being quiet had never meant being voiceless. It had just meant waiting for the right moment to discover the difference.

{refrain}.`,
  },
  {
    ordinal: 2,
    title: 'The Question',
    concept: 'Asking clearly gets you help',
    callback: 'your voice matters',
    ageFloor: 3,
    summary: 'The hero faces a problem but stays silent, hoping someone will notice and help. Days pass with nothing changing. A companion explains that no one can read minds. When the hero finally asks, help arrives immediately. The story teaches children that asking is not weakness — it is how the world knows what we need.',
    teachingNote: 'Children often suffer in silence rather than ask. Showing that asking is the actual tool, not a failure of self-sufficiency, gives them permission to use their voice for their own needs.',
    learningBeat: 'asking is how people know',
    ageVariants: {
      '3-4': {
        audioTemplate: `The {hero} had a problem in {setting}.

The problem was the {object_motif}. It was too high. The {hero} could not reach it.

The {hero} waited. Hoped. Maybe someone would see.

But no one did.

Then came {companion_name}. "Do you need help?" asked {companion_name}.

The {hero} nodded. "Yes. But I did not want to ask."

{companion_name} smiled. "Friends cannot read minds. Asking is how people know."

The {hero} took a breath. "Will you help me reach the {object_motif}?"

"Of course!" said {companion_name}.

*Whoosh* — {companion_name} lifted it down. The {hero} held {object_motif} in their arms, warm and happy.

The {hero} learned: asking is how people know.

{refrain}.`,
        scriptTemplate: `{child_name} had a problem in {setting}.

The problem was the {object_motif}. It was too high. {child_name} could not reach it.

{child_name} waited. Hoped. Maybe someone would see.

But no one did.

Then came {companion_name}. "Do you need help?" asked {companion_name}.

{child_name} nodded. "Yes. But I did not want to ask."

{companion_name} smiled. "Friends cannot read minds. Asking is how people know."

{child_name} took a breath. "Will you help me reach the {object_motif}?"

"Of course!" said {companion_name}.

*Whoosh* — {companion_name} lifted it down. {child_name} held {object_motif} in their arms, warm and happy.

{child_name} learned: asking is how people know.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `For two days, the {hero} carried a worry like a stone in their pocket.

The problem was simple: there was a {object_motif} that the {hero} needed help with, but the {hero} did not know how to ask. It was easier to just... wait. Surely someone would notice. Surely someone who cared would see that the {hero} was stuck and come offer to help without being asked.

Surely.

But no one did. The {hero} stood near the problem looking unhappy and hoping very hard, and everyone walked past, busy with their own days, not noticing a thing.

On the third morning, {companion_name} settled beside the {hero} with a gentleness that suggested they had been watching for a while.

"You look like you are carrying something," said {companion_name}. "Tell me what it is."

The {hero} hesitated. "I need help with the {object_motif}," the {hero} admitted. "But I did not want to ask. I thought someone would just... see."

{companion_name} nodded slowly. "Here is something I learned long ago," said {companion_name}. "People are not mind readers. Even people who care about you cannot know what you need unless you tell them. The ones you ask do not think less of you — they think: oh, my friend trusts me enough to ask. That is an honour. Asking is how people know. And when people know, they can help."

The {hero} looked at the {object_motif}. The {hero} thought about how good it would feel to have help instead of carrying the weight alone.

So the {hero} stood and walked over to a friend and said, clearly and kindly, "I need help with the {object_motif}. Will you help me?"

The friend's face brightened. "Of course! Why didn't you ask before?" And together, they solved the problem. What had felt impossible all morning was finished in moments — just because the {hero} had used their voice to ask.

That night, {companion_name} was still there, and still smiling. "Do you see?" asked {companion_name}. "You were brave enough to ask. And the world answered. That is how things work. Asking is how people know what we need. And when they know, they can help."

{refrain}.`,
        scriptTemplate: `For two days, {child_name} carried a worry like a stone in their pocket.

The problem was simple: there was a {object_motif} that {child_name} needed help with, but {child_name} did not know how to ask. It was easier to just... wait. Surely someone would notice. Surely someone who cared would see that {child_name} was stuck and come offer to help without being asked.

Surely.

But no one did. {child_name} stood near the problem looking unhappy and hoping very hard, and everyone walked past, busy with their own days, not noticing a thing.

On the third morning, {companion_name} settled beside {child_name} with a gentleness that suggested they had been watching for a while.

"You look like you are carrying something," said {companion_name}. "Tell me what it is."

{child_name} hesitated. "I need help with the {object_motif}," {child_name} admitted. "But I did not want to ask. I thought someone would just... see."

{companion_name} nodded slowly. "Here is something I learned long ago," said {companion_name}. "People are not mind readers. Even people who care about you cannot know what you need unless you tell them. The ones you ask do not think less of you — they think: oh, my friend trusts me enough to ask. That is an honour. Asking is how people know. And when people know, they can help."

{child_name} looked at the {object_motif}. {child_name} thought about how good it would feel to have help instead of carrying the weight alone.

So {child_name} stood and walked over to a friend and said, clearly and kindly, "I need help with the {object_motif}. Will you help me?"

The friend's face brightened. "Of course! Why didn't you ask before?" And together, they solved the problem. What had felt impossible all morning was finished in moments — just because {child_name} had used their voice to ask.

That night, {companion_name} was still there, and still smiling. "Do you see?" asked {companion_name}. "You were brave enough to ask. And the world answered. That is how things work. Asking is how people know what we need. And when they know, they can help."

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `It had been a week since the {hero} first encountered the trouble with the {object_motif}, and a week of trying to solve it alone.

The problem was not huge — it was technical, specific, the kind of thing that someone with a little more experience could probably solve in minutes. But the {hero} had decided, early on, that asking for help would mean admitting that the {hero} was not as capable as everyone thought. So the {hero} worked on it in private, trying every approach, growing more frustrated, more tired, more convinced that the answer lay somewhere just out of reach if the {hero} just tried hard enough.

The {hero} did not notice {companion_name} watching — had not noticed them watching for several days, in fact, seeing the {hero} get smaller and tighter with each failed attempt.

On the seventh evening, {companion_name} sat down beside the {hero} and said something simple: "What are you not saying?"

The {hero} almost lied — the usual lie, the one the {hero} had been telling everyone for days. But something in the way {companion_name} waited made the truth come out instead. "I am stuck," the {hero} admitted. "I have been stuck for a week. And I cannot ask anyone because they will think I am not as good as they thought I was."

{companion_name} was quiet for a long moment. "Let me ask you something," said {companion_name}. "How many of the people you know have had to ask for help? How many of the strong ones, the capable ones, have ever needed advice? Do you think they are less strong because they asked?"

The {hero} knew the answer: they were not. The strongest people the {hero} knew were the ones who asked for help without shame. But there was a gap between knowing that and believing it about themselves.

"Here is what I want you to carry," said {companion_name}. "People cannot read minds. Even people who know you well cannot know that you are stuck unless you tell them. And there is something else you need to know: the people worth knowing will not think less of you for asking. They will think: this is someone brave enough to ask. This is someone I want to help."

The {hero} looked at the {object_motif}, at the week of solitary struggle that had gotten them nowhere.

"Can I show you something?" the {hero} asked a friend the next morning.

The friend came. The friend looked at the problem for thirty seconds and said, "Oh, you need to do it like this" — and showed the {hero} the answer, simple and obvious once someone else was looking.

"How did you know that?" the {hero} asked.

"I made the same mistake last month," the friend said, smiling. "I'm glad you asked. That's what I'm here for."

That night, the {hero} turned the {object_motif} over in their hands and felt something settle inside — not shame for having asked, but relief. The {hero} had learned something that would save them years of lonely struggle: asking is how people know. And once people know, they can help. And asking was not the weakness the {hero} had feared. It was the strength that changed everything.

{refrain}.`,
        scriptTemplate: `It had been a week since {child_name} first encountered the trouble with the {object_motif}, and a week of trying to solve it alone.

The problem was not huge — it was technical, specific, the kind of thing that someone with a little more experience could probably solve in minutes. But {child_name} had decided, early on, that asking for help would mean admitting that {child_name} was not as capable as everyone thought. So {child_name} worked on it in private, trying every approach, growing more frustrated, more tired, more convinced that the answer lay somewhere just out of reach if {child_name} just tried hard enough.

{child_name} did not notice {companion_name} watching — had not noticed them watching for several days, in fact, seeing {child_name} get smaller and tighter with each failed attempt.

On the seventh evening, {companion_name} sat down beside {child_name} and said something simple: "What are you not saying?"

{child_name} almost lied — the usual lie, the one {child_name} had been telling everyone for days. But something in the way {companion_name} waited made the truth come out instead. "I am stuck," {child_name} admitted. "I have been stuck for a week. And I cannot ask anyone because they will think I am not as good as they thought I was."

{companion_name} was quiet for a long moment. "Let me ask you something," said {companion_name}. "How many of the people you know have had to ask for help? How many of the strong ones, the capable ones, have ever needed advice? Do you think they are less strong because they asked?"

{child_name} knew the answer: they were not. The strongest people {child_name} knew were the ones who asked for help without shame. But there was a gap between knowing that and believing it about themselves.

"Here is what I want you to carry," said {companion_name}. "People cannot read minds. Even people who know you well cannot know that you are stuck unless you tell them. And there is something else you need to know: the people worth knowing will not think less of you for asking. They will think: this is someone brave enough to ask. This is someone I want to help."

{child_name} looked at the {object_motif}, at the week of solitary struggle that had gotten them nowhere.

"Can I show you something?" {child_name} asked a friend the next morning.

The friend came. The friend looked at the problem for thirty seconds and said, "Oh, you need to do it like this" — and showed {child_name} the answer, simple and obvious once someone else was looking.

"How did you know that?" {child_name} asked.

"I made the same mistake last month," the friend said, smiling. "I'm glad you asked. That's what I'm here for."

That night, {child_name} turned the {object_motif} over in their hands and felt something settle inside — not shame for having asked, but relief. {child_name} had learned something that would save them years of lonely struggle: asking is how people know. And once people know, they can help. And asking was not the weakness {child_name} had feared. It was the strength that changed everything.

{refrain}.`,
      },
    },
    audioTemplate: `The {hero} had learned a lot from the first part of the journey. The {hero} knew that their voice mattered. But now the {hero} was facing something different: a problem that the {hero} could not solve alone.

For three days, the {hero} hoped someone would notice. The {hero} stood near the {object_motif} looking troubled, waiting for a friend to ask if something was wrong. No one did. Everyone was too busy, too caught up in their own days to see a quiet struggle.

On the fourth day, {companion_name} appeared with that same gentle certainty they had shown before. "You have asked for nothing," said {companion_name}. "But you look as if you need something. Tell me what it is."

The {hero} felt a flutter of shame. "There is something I cannot figure out by myself. But if I ask for help, that means I am not strong. That means I failed."

{companion_name} settled beside the {hero}. "That is not how strength works," said {companion_name}. "Strength is not the ability to do everything alone. Strength is the courage to ask when you need help. I will tell you something I have learned: people cannot read minds. Even the ones who love you most do not know that you are stuck unless you use your voice and tell them. Asking is how people know."

The {hero} thought about the three days of waiting. Three days of carrying the burden alone, of hoping for help that never came, when all they had needed to do was ask.

"What if they say no?" asked the {hero}.

"Then you are no worse off than you are now," said {companion_name}. "But they will not say no. They will say yes. Asking is the key that unlocks help."

The {hero} took a breath and walked over to a friend. "I need help with the {object_motif}," the {hero} said, plain and clear. "I have been trying to figure it out alone, and I cannot. Will you help me?"

The friend's face lit up. "Of course! I would be glad to. Why didn't you ask before?" And together, they solved it — what had felt impossible for three days took half an hour once someone was there to help.

That evening, {companion_name} smiled. "Do you see what you have learned?" said {companion_name}. "You have learned that your voice matters not just for sharing discoveries, but for asking for what you need. That is the second lesson. Asking is how people know. And when they know, they answer. Remember that for the rest of your life. No one can help what they do not know about."

{refrain}.`,
    scriptTemplate: `{child_name} had learned a lot from the first part of the journey. {child_name} knew that their voice mattered. But now {child_name} was facing something different: a problem that {child_name} could not solve alone.

For three days, {child_name} hoped someone would notice. {child_name} stood near the {object_motif} looking troubled, waiting for a friend to ask if something was wrong. No one did. Everyone was too busy, too caught up in their own days to see a quiet struggle.

On the fourth day, {companion_name} appeared with that same gentle certainty they had shown before. "You have asked for nothing," said {companion_name}. "But you look as if you need something. Tell me what it is."

{child_name} felt a flutter of shame. "There is something I cannot figure out by myself. But if I ask for help, that means I am not strong. That means I failed."

{companion_name} settled beside {child_name}. "That is not how strength works," said {companion_name}. "Strength is not the ability to do everything alone. Strength is the courage to ask when you need help. I will tell you something I have learned: people cannot read minds. Even the ones who love you most do not know that you are stuck unless you use your voice and tell them. Asking is how people know."

{child_name} thought about the three days of waiting. Three days of carrying the burden alone, of hoping for help that never came, when all they had needed to do was ask.

"What if they say no?" asked {child_name}.

"Then you are no worse off than you are now," said {companion_name}. "But they will not say no. They will say yes. Asking is the key that unlocks help."

{child_name} took a breath and walked over to a friend. "I need help with the {object_motif}," {child_name} said, plain and clear. "I have been trying to figure it out alone, and I cannot. Will you help me?"

The friend's face lit up. "Of course! I would be glad to. Why didn't you ask before?" And together, they solved it — what had felt impossible for three days took half an hour once someone was there to help.

That evening, {companion_name} smiled. "Do you see what you have learned?" said {companion_name}. "{child_name}, you have learned that your voice matters not just for sharing discoveries, but for asking for what you need. That is the second lesson. Asking is how people know. And when they know, they answer. Remember that for the rest of your life. No one can help what they do not know about."

{refrain}.`,
  },
  {
    ordinal: 3,
    title: 'The Boundary',
    concept: 'Setting a kind boundary',
    callback: 'asking for what you need',
    ageFloor: 3,
    summary: 'A friend keeps taking and taking, and the hero keeps saying yes to keep the peace. The hero grows tired and empty. A companion explains that a kind "no" is not unkind — it protects what matters. When the hero finally says no, the friendship survives, but the hero is whole.',
    teachingNote: 'Boundaries are not walls; they are truth. A child can love someone and still say no to being drained by them.',
    learningBeat: 'no is a whole answer',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} had a {object_motif} that was precious.

A friend came by. "Give me your {object_motif}," the friend said.

The {hero} did not want to. But the {hero} wanted to be kind. So the {hero} said yes.

The next day the friend came back. "Give me more," the friend said.

The {hero} said yes again. And again. The {hero} felt smaller.

{companion_name} saw this. "Little one," said {companion_name}, "you can be kind and still say no. Try it. no is a whole answer."

The friend came back. "Give me more."

The {hero} took a breath. "No," the {hero} said, warm and clear. "Not today."

The friend paused. Then smiled. "Okay," the friend said.

And they played together, side by side.

The {hero} held the {object_motif} and felt big inside. *Ring* — it chimed, bright and whole.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} had a {object_motif} that was precious.

A friend came by. "Give me your {object_motif}," the friend said.

{child_name} did not want to. But {child_name} wanted to be kind. So {child_name} said yes.

The next day the friend came back. "Give me more," the friend said.

{child_name} said yes again. And again. {child_name} felt smaller.

{companion_name} saw this. "Little one," said {companion_name}, "{child_name}, you can be kind and still say no. Try it. no is a whole answer."

The friend came back. "Give me more."

{child_name} took a breath. "No," {child_name} said, warm and clear. "Not today."

The friend paused. Then smiled. "Okay," the friend said.

And they played together, side by side.

{child_name} held the {object_motif} and felt big inside. *Ring* — it chimed, bright and whole.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `In the heart of {setting}, the {hero} owned a {object_motif} that they had worked for and earned. It meant everything to them.

One day a new friend, bright and bold, said, "Let me borrow that." The {hero}, who was kind and wanted to share, said yes. But the friend did not return it. The next day came a new request. The next, another. Each time the {hero} wanted to say no, but the fear of being unkind kept the mouth shut.

Bit by bit, the {hero} gave and gave. And bit by bit, the {hero} felt themselves becoming smaller.

{companion_name} noticed. "Your light is dimming," said {companion_name}. "Why do you keep giving?"

The {hero} looked down. "Because if I say no, the friend might not like me anymore. And being kind means saying yes."

{companion_name} shook their head gently. "That is not kindness. That is fear. Let me tell you a secret: you can be kind and say no at the same time. A kind no protects what matters. It says: I value this, and I value you, but not more than I value myself. no is a whole answer. You do not need ten reasons. You do not need to explain. Just: no."

The {hero} held the {object_motif} and felt the weight of the truth.

The next time the friend asked, the {hero} said: "No, not today. I need to keep this for myself."

The friend's face tightened. For a moment the {hero}'s heart jumped. But then the friend's shoulders dropped, and the friend nodded. "Okay," the friend said quietly. And they stayed friends, but the friendship was different now — lighter, warmer, because the {hero} had told the truth.

That night, the {object_motif} glowed bright again. The {hero} glowed too.

{refrain}.`,
        scriptTemplate: `In the heart of {setting}, {child_name} owned a {object_motif} that they had worked for and earned. It meant everything to them.

One day a new friend, bright and bold, said, "Let me borrow that." {child_name}, who was kind and wanted to share, said yes. But the friend did not return it. The next day came a new request. The next, another. Each time {child_name} wanted to say no, but the fear of being unkind kept the mouth shut.

Bit by bit, {child_name} gave and gave. And bit by bit, {child_name} felt themselves becoming smaller.

{companion_name} noticed. "{child_name}, your light is dimming," said {companion_name}. "Why do you keep giving?"

{child_name} looked down. "Because if I say no, the friend might not like me anymore. And being kind means saying yes."

{companion_name} shook their head gently. "That is not kindness. That is fear. Let me tell you a secret: you can be kind and say no at the same time. A kind no protects what matters. It says: I value this, and I value you, but not more than I value myself. no is a whole answer. You do not need ten reasons. You do not need to explain. Just: no."

{child_name} held the {object_motif} and felt the weight of the truth.

The next time the friend asked, {child_name} said: "No, not today. I need to keep this for myself."

The friend's face tightened. For a moment {child_name}'s heart jumped. But then the friend's shoulders dropped, and the friend nodded. "Okay," the friend said quietly. And they stayed friends, but the friendship was different now — lighter, warmer, because {child_name} had told the truth.

That night, the {object_motif} glowed bright again. {child_name} glowed too.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `In {setting}, the {hero} had earned a {object_motif} slowly over time, through effort and attention. It was the kind of possession that matters not because of its value to others, but because of what it meant to them — a marker of who they were, a visible proof of something they had done.

Into the {hero}'s life came a friend named Kess, who was quick-tongued and charming and made the {hero} feel like the luckiest person in the world just by paying attention. At first Kess asked for small things, easily given. But the asks grew. Kess needed things carried, borrowed, traded away. Each time the {hero} said yes — not because they wanted to, but because saying no felt like a betrayal of the kindness Kess had shown.

The cost was this: the {hero} became smaller. Not physically, but internally — the core of the {hero} began to shrink away, hollowed out by constant giving, by the invisible toll of yes after yes after yes.

One afternoon, Kess looked at the {object_motif} and simply said: "I want that. Give it to me."

Not asked. Stated, the way you state something you are owed. And the {hero} felt something in their chest break open — because they understood, in that moment, what had been happening all along. The friendship was not a gift. It was a transaction. And the {hero} was the one paying.

That night the {hero} found {companion_name}, and the whole story came pouring out — the asks, the yeses, the slow drain, the demand for the {object_motif}.

"Do you love Kess?" asked {companion_name}.

"I did," said the {hero}. "I think I did. But I do not think Kess loves me. I think Kess loves what I give."

{companion_name} was quiet for a long moment. "Then I want to teach you something," said {companion_name}. "You have learned to ask for what you need. Now learn this: you can also say no to what you do not want to give. And a no spoken in kindness is not unkind. A boundary is not a wall. It is a line that tells the truth about where you end and someone else begins."

"But if I say no, Kess will—"

"Kess will reveal themselves," said {companion_name}. "A friend who loves you can hear a no and stay your friend. If Kess cannot, then Kess was never really your friend. And here is what matters most: no is a whole answer. You do not owe reasons. You do not owe explanations. You do not owe anything but the truth: no."

The {hero} held the {object_motif} and felt something crystallize inside. It was fear, yes, but underneath the fear was certainty. The {hero} was right. The {hero} did not want to give.

The next day, when Kess came by with that same easy confidence, the {hero} said simply: "No. I am keeping the {object_motif}. I care about you, but I am not giving this away."

Kess's face went cold. For three long seconds the {hero} thought the friendship was truly over. Then Kess's shoulders dropped. "You are right," Kess said quietly. "I have been taking too much. And I knew you did not want to give. I just... kept asking anyway."

It was not a perfect ending. But it was an honest one. The {hero} and Kess stayed friends, but differently — not the drained, desperate friendship it had been, but something quieter, something real.

That night, the {hero} held the {object_motif} and understood something that would change everything: a boundary was not the end of love. It was the beginning of it. Because real love cannot live in a space of constant taking. Real love needs balance. Real love needs truth. And the truth, when it comes, sometimes sounds like no.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} had earned a {object_motif} slowly over time, through effort and attention. It was the kind of possession that matters not because of its value to others, but because of what it meant to them — a marker of who they were, a visible proof of something they had done.

Into {child_name}'s life came a friend named Kess, who was quick-tongued and charming and made {child_name} feel like the luckiest person in the world just by paying attention. At first Kess asked for small things, easily given. But the asks grew. Kess needed things carried, borrowed, traded away. Each time {child_name} said yes — not because they wanted to, but because saying no felt like a betrayal of the kindness Kess had shown.

The cost was this: {child_name} became smaller. Not physically, but internally — the core of {child_name} began to shrink away, hollowed out by constant giving, by the invisible toll of yes after yes after yes.

One afternoon, Kess looked at the {object_motif} and simply said: "I want that. Give it to me."

Not asked. Stated, the way you state something you are owed. And {child_name} felt something in their chest break open — because they understood, in that moment, what had been happening all along. The friendship was not a gift. It was a transaction. And {child_name} was the one paying.

That night {child_name} found {companion_name}, and the whole story came pouring out — the asks, the yeses, the slow drain, the demand for the {object_motif}.

"Do you love Kess?" asked {companion_name}.

"I did," said {child_name}. "I think I did. But I do not think Kess loves me. I think Kess loves what I give."

{companion_name} was quiet for a long moment. "Then I want to teach you something," said {companion_name}. "You have learned to ask for what you need. Now learn this: you can also say no to what you do not want to give. And a no spoken in kindness is not unkind. A boundary is not a wall. It is a line that tells the truth about where you end and someone else begins."

"But if I say no, Kess will—"

"Kess will reveal themselves," said {companion_name}. "A friend who loves you can hear a no and stay your friend. If Kess cannot, then Kess was never really your friend. And here is what matters most: no is a whole answer. You do not owe reasons. You do not owe explanations. You do not owe anything but the truth: no."

{child_name} held the {object_motif} and felt something crystallize inside. It was fear, yes, but underneath the fear was certainty. {child_name} was right. {child_name} did not want to give.

The next day, when Kess came by with that same easy confidence, {child_name} said simply: "No. I am keeping the {object_motif}. I care about you, but I am not giving this away."

Kess's face went cold. For three long seconds {child_name} thought the friendship was truly over. Then Kess's shoulders dropped. "You are right," Kess said quietly. "I have been taking too much. And I knew you did not want to give. I just... kept asking anyway."

It was not a perfect ending. But it was an honest one. {child_name} and Kess stayed friends, but differently — not the drained, desperate friendship it had been, but something quieter, something real.

That night, {child_name} held the {object_motif} and understood something that would change everything: a boundary was not the end of love. It was the beginning of it. Because real love cannot live in a space of constant taking. Real love needs balance. Real love needs truth. And the truth, when it comes, sometimes sounds like no.

{refrain}.`,
      },
    },
    audioTemplate: `The {hero} had learned so much from the journey. The {hero} knew that their voice mattered, and that asking was the way to get help. But now came a lesson that was harder in a different way.

There was a friend who kept asking for more. At first the {hero} said yes, wanting to be kind, wanting to show how much they cared. But the asks grew bigger. Day after day, the friend wanted something else, and the {hero}, afraid of losing the friendship, said yes.

And slowly the {hero} felt themselves becoming hollow. The {object_motif} they had treasured was gone. The time they had guarded was gone. The {hero} was gone.

One evening {companion_name} found the {hero} sitting alone. "You are disappearing," said {companion_name}. "Why do you keep saying yes?"

The {hero} looked up with tears in their eyes. "Because if I say no, the friend will leave. And being kind means giving."

{companion_name} settled close. "No," said {companion_name}. "That is not kindness. That is fear wearing kindness as a mask. Let me teach you something that matters as much as anything you have learned so far: you can be kind and say no at the same time. A boundary is not a wall. It is a line that tells the truth. It says: I care about you, but I also care about myself. And that is not unkind. That is honest."

"But what if they leave?" the {hero} whispered.

"Then they were using you, not loving you," said {companion_name}. "And a friend who loves you can hear a no and stay your friend. Now listen to this: no is a whole answer. You do not need reasons. You do not need excuses. You do not need ten words. Just: no. Kind, clear, and done."

The {hero} held the memory of the {object_motif}, the time, the self that had been given away. And the {hero} understood that there was a difference between being kind and being drained.

The next time the friend asked, the {hero} said: "No. Not this time. I care about you, but I need to keep this for myself."

For a moment the world held its breath. Then the friend's face shifted, and they nodded, and something in the air changed. The friendship did not break. But it became real — no longer one person giving and one person taking, but two people standing equally, each with their own borders, each one whole.

That night, the {hero} felt the strange, solid peace of having spoken the truth and survived. The {hero} had learned something that would protect them for the rest of their life: a kind no is not unkind. It is how you stay yourself.

{refrain}.`,
    scriptTemplate: `{child_name} had learned so much from the journey. {child_name} knew that their voice mattered, and that asking was the way to get help. But now came a lesson that was harder in a different way.

There was a friend who kept asking for more. At first {child_name} said yes, wanting to be kind, wanting to show how much they cared. But the asks grew bigger. Day after day, the friend wanted something else, and {child_name}, afraid of losing the friendship, said yes.

And slowly {child_name} felt themselves becoming hollow. The {object_motif} they had treasured was gone. The time they had guarded was gone. {child_name} was gone.

One evening {companion_name} found {child_name} sitting alone. "You are disappearing," said {companion_name}. "Why do you keep saying yes?"

{child_name} looked up with tears in their eyes. "Because if I say no, the friend will leave. And being kind means giving."

{companion_name} settled close. "No," said {companion_name}. "That is not kindness. That is fear wearing kindness as a mask. Let me teach you something that matters as much as anything you have learned so far: you can be kind and say no at the same time. A boundary is not a wall. It is a line that tells the truth. It says: I care about you, but I also care about myself. And that is not unkind. That is honest."

"But what if they leave?" {child_name} whispered.

"Then they were using you, not loving you," said {companion_name}. "And a friend who loves you can hear a no and stay your friend. Now listen to this: no is a whole answer. You do not need reasons. You do not need excuses. You do not need ten words. Just: no. Kind, clear, and done."

{child_name} held the memory of the {object_motif}, the time, the self that had been given away. And {child_name} understood that there was a difference between being kind and being drained.

The next time the friend asked, {child_name} said: "No. Not this time. I care about you, but I need to keep this for myself."

For a moment the world held its breath. Then the friend's face shifted, and they nodded, and something in the air changed. The friendship did not break. But it became real — no longer one person giving and one person taking, but two people standing equally, each with their own borders, each one whole.

That night, {child_name} felt the strange, solid peace of having spoken the truth and survived. {child_name} had learned something that would protect them for the rest of their life: a kind no is not unkind. It is how you stay yourself.

{refrain}.`,
  },
  {
    ordinal: 4,
    title: 'The Middle Way',
    concept: 'Assertive, not aggressive',
    callback: 'saying a kind, clear no',
    ageFloor: 3,
    summary: 'The hero is treated unfairly. They feel two pulls: to shout and snap, or to stay silent and swallow it. A companion shows the middle path — strong words spoken with a kind voice. The hero learns that standing up for themselves never requires being cruel.',
    teachingNote: 'Assertiveness is honesty without edge. Children can name injustice and hold boundaries without becoming unkind.',
    learningBeat: 'brave and kind at the same time',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} worked hard on something special: {object_motif}.

A friend came and said, "That is mine. I made it."

The {hero} felt hot inside. Part of the {hero} wanted to shout. Part wanted to cry and hide.

{companion_name} came close. "You can use a strong voice and a kind voice together," said {companion_name}.

The {hero} took a breath. "That is not true," the {hero} said, firm and clear. "I made this. But I still like you."

The friend paused. Then nodded. "You are right. I am sorry."

They hugged. The {hero} held the {object_motif} close.

You can be brave and kind at the same time.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} worked hard on something special: {object_motif}.

A friend came and said, "That is mine. I made it."

{child_name} felt hot inside. Part of {child_name} wanted to shout. Part wanted to cry and hide.

{companion_name} came close. "You can use a strong voice and a kind voice together," said {companion_name}.

{child_name} took a breath. "That is not true," {child_name} said, firm and clear. "I made this. But I still like you."

The friend paused. Then nodded. "You are right. I am sorry."

They hugged. {child_name} held the {object_motif} close.

You can be brave and kind at the same time.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `In {setting}, the {hero} spent days making a beautiful {object_motif}.

When it was done, the {hero} showed it to a friend named Riv.

"I made that," Riv said, picking it up. "Look everyone, I made this!"

The {hero} felt a sting. That was not fair. That was not true.

Two feelings pulled at the {hero}. One said: "Shout! Call Riv a liar!" The other said: "Say nothing. Let it go."

{companion_name} appeared. "When something is wrong, you do not have to shout, and you do not have to hide. You can be brave and kind at the same time."

The {hero} took a breath. "Riv," the {hero} said, firm and clear, "I made the {object_motif}. I spent days on it. It was not fair to say you made it. Please tell everyone the truth."

The {hero} did not shout. The {hero} did not call Riv names. But the {hero} did not stay quiet either.

Riv looked down. "You are right. I am sorry."

The {hero} felt something warm inside. Speaking up had worked better than shouting. And much better than staying silent.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} spent days making a beautiful {object_motif}.

When it was done, {child_name} showed it to a friend named Riv.

"I made that," Riv said, picking it up. "Look everyone, I made this!"

{child_name} felt a sting. That was not fair. That was not true.

Two feelings pulled at {child_name}. One said: "Shout! Call Riv a liar!" The other said: "Say nothing. Let it go."

{companion_name} appeared. "When something is wrong, you do not have to shout, and you do not have to hide. You can be brave and kind at the same time."

{child_name} took a breath. "Riv," {child_name} said, firm and clear, "I made the {object_motif}. I spent days on it. It was not fair to say you made it. Please tell everyone the truth."

{child_name} did not shout. {child_name} did not call Riv names. But {child_name} did not stay quiet either.

Riv looked down. "You are right. I am sorry. {child_name} made it, not me."

{child_name} felt something warm inside. Speaking up had worked better than shouting. And much better than staying silent.

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `For three weeks the {hero} had worked on the {object_motif} in {setting}, sketching it out, testing each part until it finally worked. It was theirs — the idea, the effort, the solution. The plan was to show it at the gathering where everyone displayed what they had made.

But on the morning of the gathering, a friend named Nox stood and held up the {object_motif}. "I designed this," Nox announced. "I worked on it for weeks."

Every word was a lie.

The {hero} felt fire rise in their chest. The {hero} wanted to stand up and shout: "That is a lie! That is mine! You did not make any of it!" The words were right there, hot and ready.

But another part whispered: stay quiet, let it go, do not make a scene. Making a fuss would make the {hero} look bad.

Two roads, and both felt wrong. So the {hero} stepped away, and {companion_name} was waiting.

"I know what you are weighing," said {companion_name}. "The false choice between shouting and silence. Let me show you a third way."

{companion_name} sat beside the {hero}. "Anger is loud and silence is easy. But there is a middle road, and it is the hardest of the three. You can hold your line without throwing a stone. You can speak the truth with a kind voice. Strong words, kind voice — that is the formula."

The {hero} went back in. The {hero}'s heart was hammering, but when the voice came out, it was steady. "Nox," the {hero} said, "that {object_motif} is mine. I designed it three weeks ago, and I built every part of it myself. You know that. I am not trying to embarrass you, but I cannot let this pass. I need you to tell the truth."

The {hero} did not shout. The {hero} did not call Nox a thief or a liar. But the {hero} did not back down. Every word was firm. Every word was clean.

The room went very quiet. Nox's face flushed. For one long moment it could have gone either way.

"You are right," Nox said finally, the words rough. "I do not know why I said that. I am sorry. {child_name} made it. {child_name} made all of it."

The {hero} had not become loud. The {hero} had simply learned that brave and kind are not opposites. They are two notes played together.

{refrain}.`,
        scriptTemplate: `For three weeks {child_name} had worked on the {object_motif} in {setting}, sketching it out, testing each part until it finally worked. It was theirs — the idea, the effort, the solution. The plan was to show it at the gathering where everyone displayed what they had made.

But on the morning of the gathering, a friend named Nox stood and held up the {object_motif}. "I designed this," Nox announced. "I worked on it for weeks."

Every word was a lie.

{child_name} felt fire rise in their chest. {child_name} wanted to stand up and shout: "That is a lie! That is mine! You did not make any of it!" The words were right there, hot and ready.

But another part whispered: stay quiet, let it go, do not make a scene. Making a fuss would make {child_name} look bad.

Two roads, and both felt wrong. So {child_name} stepped away, and {companion_name} was waiting.

"I know what you are weighing," said {companion_name}. "The false choice between shouting and silence. Let me show you a third way."

{companion_name} sat beside {child_name}. "Anger is loud and silence is easy. But there is a middle road, and it is the hardest of the three. You can hold your line without throwing a stone. You can speak the truth with a kind voice. Strong words, kind voice — that is the formula."

{child_name} went back in. {child_name}'s heart was hammering, but when the voice came out, it was steady. "Nox," {child_name} said, "that {object_motif} is mine. I designed it three weeks ago, and I built every part of it myself. You know that. I am not trying to embarrass you, but I cannot let this pass. I need you to tell the truth."

{child_name} did not shout. {child_name} did not call Nox a thief or a liar. But {child_name} did not back down. Every word was firm. Every word was clean.

The room went very quiet. Nox's face flushed. For one long moment it could have gone either way.

"You are right," Nox said finally, the words rough. "I do not know why I said that. I am sorry. {child_name} made it. {child_name} made all of it."

{child_name} had not become loud. {child_name} had simply learned that brave and kind are not opposites. They are two notes played together.

{refrain}.`,
      },
    },
    audioTemplate: `The {hero} had come so far on this journey. The {hero} knew that their voice mattered. The {hero} knew how to ask for help and how to say no when something was not right. But now came a lesson that felt even more important: what to do when someone had wronged them.

It happened one afternoon in {setting}. The {hero} had spent time and care on the {object_motif}, creating it carefully, seeing it through. Then a friend named Tam picked it up and held it high. "Look what I made!" Tam announced to everyone.

The {hero} felt something hot rise in their chest — a mix of betrayal and anger and shame all at once. Part of the {hero} wanted to shout, to rage, to call Tam a liar and a thief in front of everyone. The words were right there, sharp and ready, burning to come out.

But another part whispered: let it go, stay quiet, do not make a scene. Do not be the one who makes trouble.

Two choices, and both of them felt wrong. The {hero} stepped away, heart pounding, and {companion_name} appeared as if they had been waiting.

"You are at a crossroads," said {companion_name}. "You can rage or you can hide. But there is a third road that takes more courage than either. Would you like to see it?"

The {hero} nodded, throat tight.

"Anger is loud," said {companion_name}. "It feels powerful in the moment, but it makes people afraid of you instead of hearing you. Silence is safe, but it teaches you that what you make does not matter. But there is a middle way. You can hold your line without throwing a stone. You can speak the hard truth in a kind voice. This is what it sounds like: strong words, kind voice. One is the what. The other is the how. Together, they are assertiveness — and it is the strongest thing you can be."

The {hero} sat with that for a long moment. Then the {hero} stood, walked back to where Tam was still talking, and waited for the moment when Tam paused.

"Tam," the {hero} said, and the voice was steady, "I need to say something. That {object_motif} is mine. I made it. I spent the time on it, and I made it work. You know that. I am not saying this to embarrass you, but I cannot let this pass as true. I need you to tell everyone the truth."

The {hero} did not shout. The {hero} did not call Tam cruel names, even though the names had been right there. But the {hero} did not look at the floor and mumble either. Every word was firm. Every word was kind. The {hero} was not attacking. The {hero} was stating a fact.

Tam's face went red. The room went quiet. For one terrible moment it could have gone either way — Tam could have doubled down, or the {hero} could have caved.

But instead Tam's shoulders dropped. "You are right," Tam said quietly. "I do not know why I did that. {child_name} made it. {child_name} made it all. I am sorry."

The {hero} felt something settle inside — not the small relief of having dodged a conflict, but something bigger and steadier: the knowledge that the {hero} had held their line without becoming unkind. The others were not looking at the {hero} with pity or fear. They were looking with respect.

That evening, {companion_name} found the {hero} and smiled. "You know what you just learned?" asked {companion_name}. "You learned that you can be brave and kind at the same time. You do not have to choose between standing up for yourself and staying kind. That is the real secret. Assertiveness is not aggression. It is honesty with a gentle hand."

{refrain}.`,
    scriptTemplate: `{child_name} had come so far on this journey. {child_name} knew that their voice mattered. {child_name} knew how to ask for help and how to say no when something was not right. But now came a lesson that felt even more important: what to do when someone had wronged them.

It happened one afternoon in {setting}. {child_name} had spent time and care on the {object_motif}, creating it carefully, seeing it through. Then a friend named Tam picked it up and held it high. "Look what I made!" Tam announced to everyone.

{child_name} felt something hot rise in their chest — a mix of betrayal and anger and shame all at once. Part of {child_name} wanted to shout, to rage, to call Tam a liar and a thief in front of everyone. The words were right there, sharp and ready, burning to come out.

But another part whispered: let it go, stay quiet, do not make a scene. Do not be the one who makes trouble.

Two choices, and both of them felt wrong. {child_name} stepped away, heart pounding, and {companion_name} appeared as if they had been waiting.

"You are at a crossroads," said {companion_name}. "You can rage or you can hide. But there is a third road that takes more courage than either. Would you like to see it?"

{child_name} nodded, throat tight.

"Anger is loud," said {companion_name}. "It feels powerful in the moment, but it makes people afraid of you instead of hearing you. Silence is safe, but it teaches you that what you make does not matter. But there is a middle way. You can hold your line without throwing a stone. You can speak the hard truth in a kind voice. This is what it sounds like: strong words, kind voice. One is the what. The other is the how. Together, they are assertiveness — and it is the strongest thing you can be."

{child_name} sat with that for a long moment. Then {child_name} stood, walked back to where Tam was still talking, and waited for the moment when Tam paused.

"Tam," {child_name} said, and the voice was steady, "I need to say something. That {object_motif} is mine. I made it. I spent the time on it, and I made it work. You know that. I am not saying this to embarrass you, but I cannot let this pass as true. I need you to tell everyone the truth."

{child_name} did not shout. {child_name} did not call Tam cruel names, even though the names had been right there. But {child_name} did not look at the floor and mumble either. Every word was firm. Every word was kind. {child_name} was not attacking. {child_name} was stating a fact.

Tam's face went red. The room went quiet. For one terrible moment it could have gone either way — Tam could have doubled down, or {child_name} could have caved.

But instead Tam's shoulders dropped. "You are right," Tam said quietly. "I do not know why I did that. {child_name} made it. {child_name} made it all. I am sorry."

{child_name} felt something settle inside — not the small relief of having dodged a conflict, but something bigger and steadier: the knowledge that {child_name} had held their line without becoming unkind. The others were not looking at {child_name} with pity or fear. They were looking with respect.

That evening, {companion_name} found {child_name} and smiled. "You know what you just learned?" asked {companion_name}. "You learned that you can be brave and kind at the same time. You do not have to choose between standing up for yourself and staying kind. That is the real secret. Assertiveness is not aggression. It is honesty with a gentle hand."

{refrain}.`,
  },
  {
    ordinal: 5,
    title: 'The Gift Outward',
    concept: 'Using your voice for someone else',
    callback: 'being brave and kind',
    ageFloor: 3,
    summary: 'The hero sees a friend being left out while others play. It would be easy to do nothing. But the hero remembers every lesson from the journey and chooses to speak up for someone who cannot speak up for themselves. It is the bravest moment of all, because courage turned outward becomes kindness.',
    teachingNote: 'The highest use of a voice is not for victory, but for making space for those who have been silenced or seen.',
    learningBeat: 'a voice can stand up for someone else',
    ageVariants: {
      '3-4': {
        audioTemplate: `Everyone in {setting} was playing.

But one small friend sat all alone.

The {hero} saw. {companion_name} was there too.

"They are left out," the {hero} said. "That is not fair."

The {hero} felt scared. But the {hero} walked to the group.

"Wait," said the {hero}. "They should play too. Everyone should play."

The group went quiet. Then they smiled. "Yes! Come and play!"

The lonely friend jumped up, laughing.

{companion_name} glowed. "You were brave for someone else. A voice can stand up for someone else."

The {hero} and the friend played together all afternoon.

They were not alone anymore.

{refrain}.`,
        scriptTemplate: `Everyone in {setting} was playing.

But one small friend sat all alone.

{child_name} saw. {companion_name} was there too.

"They are left out," {child_name} said. "That is not fair."

{child_name} felt scared. But {child_name} walked to the group.

"Wait," said {child_name}. "They should play too. Everyone should play."

The group went quiet. Then they smiled. "Yes! Come and play!"

The lonely friend jumped up, laughing.

{companion_name} glowed. "You were brave for someone else. A voice can stand up for someone else."

{child_name} and the friend played together all afternoon.

They were not alone anymore.

{refrain}.`,
      },
      '5-6': {
        audioTemplate: `It was a perfect afternoon in {setting}, and everyone was gathering to choose sides for a game.

The {hero} had learned so much. The {hero} knew that their voice mattered. The {hero} knew how to ask, and how to say no, and how to speak the truth kindly.

But today was different. Today, as the teams formed, the {hero} noticed someone standing alone. One friend, small and quiet, was not being called. Was not being waved over. Was being left, very clearly, out.

"What do you see?" asked {companion_name}, who was always watching.

"They are being left behind," the {hero} said. "And they are not doing anything wrong. They just... they do not fit the pattern everyone else decided on."

"And what will you do?" asked {companion_name}.

The {hero} felt a flutter of worry. It would be easier to say nothing. The game was already starting. But the {hero} thought about everything they had learned — that their voice mattered, that asking worked, that boundaries were necessary, that kindness and honesty went together.

So the {hero} walked into the middle of the group.

"We forgot someone," the {hero} said, clear and calm. "And that is not fair. They deserve to play too. Let's make a spot for them."

For a moment, no one spoke. Then one player nodded. "You are right. Come on, join us!"

The friend looked up, surprised and so grateful. They ran to join the group, and suddenly the game felt warmer, bigger, more true.

{companion_name} settled beside the {hero} when the game was done.

"You have learned to use your voice for yourself," said {companion_name}. "Today you learned something bigger. A voice can stand up for someone else. And that is the bravest thing of all."

{refrain}.`,
        scriptTemplate: `It was a perfect afternoon in {setting}, and everyone was gathering to choose sides for a game.

{child_name} had learned so much. {child_name} knew that their voice mattered. {child_name} knew how to ask, and how to say no, and how to speak the truth kindly.

But today was different. Today, as the teams formed, {child_name} noticed someone standing alone. One friend, small and quiet, was not being called. Was not being waved over. Was being left, very clearly, out.

"What do you see?" asked {companion_name}, who was always watching.

"They are being left behind," {child_name} said. "And they are not doing anything wrong. They just... they do not fit the pattern everyone else decided on."

"And what will you do?" asked {companion_name}.

{child_name} felt a flutter of worry. It would be easier to say nothing. The game was already starting. But {child_name} thought about everything they had learned — that their voice mattered, that asking worked, that boundaries were necessary, that kindness and honesty went together.

So {child_name} walked into the middle of the group.

"We forgot someone," {child_name} said, clear and calm. "And that is not fair. They deserve to play too. Let's make a spot for them."

For a moment, no one spoke. Then one player nodded. "You are right. Come on, join us!"

The friend looked up, surprised and so grateful. They ran to join the group, and suddenly the game felt warmer, bigger, more true.

{companion_name} settled beside {child_name} when the game was done.

"You have learned to use your voice for yourself," said {companion_name}. "Today you learned something bigger. A voice can stand up for someone else. And that is the bravest thing of all."

{refrain}.`,
      },
      '9-11': {
        audioTemplate: `The {hero} had come so far on the journey through {setting}. The {hero} had learned that their voice mattered, that they could ask, that they could say no, that they could stand up for what was true without being unkind. Each lesson had built on the last, layer by layer, until the {hero} had become someone who understood the power and the responsibility that came with having a voice that people would listen to.

But the final lesson was waiting on an ordinary evening, with a friend named Sage.

As the group gathered for the game everyone loved, the selection began. The quick were chosen. The confident were chosen. And Sage, who was neither quick nor confident, stood at the edge and was not chosen at all.

The {hero} watched this happen. The {hero} watched Sage's face go carefully blank, the way people's faces do when they have been practicing not to hurt in public. And the {hero} felt something in their chest that was not rage or sorrow, but something cleaner: clarity.

To speak would be to step out of the warm safety of the group and into the cold open where everyone could see. The {hero} might face the same laughter that Sage was facing. There was nothing in it for the {hero} — only risk, only the chance of standing alone.

"You are thinking hard," said {companion_name}, appearing as they always did at these turning points. "What are you weighing?"

"If I say something, they might turn on me too," the {hero} said quietly. "And Sage is not my responsibility."

"No," said {companion_name}. "But you have a voice they will listen to. Sage does not, or they did not speak it in time. That is the difference. That is why this matters. This is the hardest kind of brave — when you have nothing to gain."

The {hero} looked at the {object_motif} they had carried through the whole journey. The {hero} thought about how it had felt, in the very beginning, to be small and unheard. And the {hero} thought about Sage, standing there, erased.

So the {hero} stepped forward. The {hero}'s heart was hammering, but the voice came out calm and steady.

"That is not fair to Sage," the {hero} said. "They deserve to play just like the rest of us. I think Sage should be on a team — and they can be on mine."

The clearing went quiet. The loud voices that had been choosing so easily were suddenly quiet. For one long moment the {hero} stood in that cold open space and felt every bit of the fear they had braced for. But the {hero} did not take it back. The {hero} simply waited, steady, and let the words be true.

Then something shifted. Another voice said, "You are right. That was not kind. Come on, Sage — play with us." And just like that, Sage was in.

Later, when the light had gone soft and the others had drifted home, {companion_name} settled beside the {hero}.

"You were afraid," said {companion_name} simply.

"I was terrified," the {hero} admitted.

"But you spoke anyway. And here is the thing I most wanted you to know: using your voice for yourself is brave. But using it for someone else, when you have nothing to gain except knowing you did the right thing — that is the bravest use of all. Courage turned outward becomes kindness. And that is the final lesson. A voice can stand up for someone else."

The {hero} held the {object_motif} and understood, at last, what the whole journey had been building toward.

{refrain}.`,
        scriptTemplate: `{child_name} had come so far on the journey through {setting}. {child_name} had learned that their voice mattered, that they could ask, that they could say no, that they could stand up for what was true without being unkind. Each lesson had built on the last, layer by layer, until {child_name} had become someone who understood the power and the responsibility that came with having a voice that people would listen to.

But the final lesson was waiting on an ordinary evening, with a friend named Sage.

As the group gathered for the game everyone loved, the selection began. The quick were chosen. The confident were chosen. And Sage, who was neither quick nor confident, stood at the edge and was not chosen at all.

{child_name} watched this happen. {child_name} watched Sage's face go carefully blank, the way people's faces do when they have been practicing not to hurt in public. And {child_name} felt something in their chest that was not rage or sorrow, but something cleaner: clarity.

To speak would be to step out of the warm safety of the group and into the cold open where everyone could see. {child_name} might face the same laughter that Sage was facing. There was nothing in it for {child_name} — only risk, only the chance of standing alone.

"You are thinking hard," said {companion_name}, appearing as they always did at these turning points. "What are you weighing?"

"If I say something, they might turn on me too," {child_name} said quietly. "And Sage is not my responsibility."

"No," said {companion_name}. "But you have a voice they will listen to. Sage does not, or they did not speak it in time. That is the difference. That is why this matters. This is the hardest kind of brave — when you have nothing to gain."

{child_name} looked at the {object_motif} they had carried through the whole journey. {child_name} thought about how it had felt, in the very beginning, to be small and unheard. And {child_name} thought about Sage, standing there, erased.

So {child_name} stepped forward. {child_name}'s heart was hammering, but the voice came out calm and steady.

"That is not fair to Sage," {child_name} said. "They deserve to play just like the rest of us. I think Sage should be on a team — and they can be on mine."

The clearing went quiet. The loud voices that had been choosing so easily were suddenly quiet. For one long moment {child_name} stood in that cold open space and felt every bit of the fear they had braced for. But {child_name} did not take it back. {child_name} simply waited, steady, and let the words be true.

Then something shifted. Another voice said, "You are right. That was not kind. Come on, Sage — play with us." And just like that, Sage was in.

Later, when the light had gone soft and the others had drifted home, {companion_name} settled beside {child_name}.

"You were afraid," said {companion_name} simply.

"I was terrified," {child_name} admitted.

"But you spoke anyway. And here is the thing I most wanted you to know: using your voice for yourself is brave. But using it for someone else, when you have nothing to gain except knowing you did the right thing — that is the bravest use of all. Courage turned outward becomes kindness. And that is the final lesson. A voice can stand up for someone else."

{child_name} held the {object_motif} and understood, at last, what the whole journey had been building toward.

{refrain}.`,
      },
    },
    audioTemplate: `The evening had come to {setting}, as it always did, and with it the gathering of friends who wanted to play their favorite game.

The {hero} had walked such a long road to reach this point. The {hero} had learned that their voice mattered — not because it was loud, but because it was true. The {hero} had learned to ask for what they needed. The {hero} had learned to say no when something was not right. The {hero} had learned to stand up for the truth without becoming unkind. Each lesson had woven itself into who the {hero} was becoming.

But the final lesson was waiting here, in this ordinary moment, in the form of a friend named Finn.

As the teams took shape, the {hero} watched Finn, who was quiet and a little different, stand at the edge of the group. The {hero} watched as name after name was called, and Finn's was not among them. The {hero} watched as Finn's face went carefully still, the way faces do when someone has learned not to let others see them hurting.

The {hero} could have said nothing. Everyone else had. The {hero} could have stayed safely in the middle of the group, warm and unchosen, and let Finn be alone. There was nothing in it for the {hero} — no reward, no gain, only the risk of stepping into the cold open space where everyone could see them choose Finn instead of going along with the group.

"You have stopped," said {companion_name}, settling nearby. "What have you seen?"

"That Finn is being left out," said the {hero}. "And I could speak up, but it might cost me something."

"Yes," said {companion_name}. "It might. This is the hardest kind of brave — when you have nothing to gain except the knowledge that you did the right thing. But think: you have a voice they listen to. Finn does not have that right now. Which makes it yours to use."

The {hero} looked down at the {object_motif}, the object they had carried through the whole of this journey. The {hero} remembered being small and unheard. The {hero} remembered what it had felt like to want someone, anyone, to speak for them.

So the {hero} turned to the group. The {hero}'s heart was a drum, but the voice came out steady and kind.

"Finn belongs here," the {hero} said simply. "Finn wants to play just as much as any of us. I think we should make a place for them."

For a long moment no one spoke. The {hero} stood in that cold open space and felt the fear they had known would be there. But the {hero} did not apologize. The {hero} did not explain. The {hero} simply held the line.

Then slowly, something changed. "You know what?" someone said. "That is right. We should have asked. Come on, Finn." And the wall came down. Finn was chosen. Finn was in.

That night, when the game was over and the others had wandered home, {companion_name} sat beside the {hero} in the soft dark.

"You had fear," said {companion_name}. "I saw it. And you spoke anyway."

"I almost did not," the {hero} admitted.

"But you did. And now I want to tell you the thing that matters most: using your voice for yourself — that is brave. But there is a bravery that comes after, when you use that same voice for someone who has not yet found theirs. When you turn your courage outward and spend it on someone else — that is the highest use of a voice. That is kindness in its truest form. A voice can stand up for someone else."

The {hero} held the {object_motif} and felt, for the first time, that they understood what the whole long journey had been for. It had never been just about finding a voice. It had been about learning what to do with it. And the answer, the {hero} now knew, was to use it not just for themselves, but for anyone who was being erased.

{refrain}.`,
    scriptTemplate: `The evening had come to {setting}, as it always did, and with it the gathering of friends who wanted to play their favorite game.

{child_name} had walked such a long road to reach this point. {child_name} had learned that their voice mattered — not because it was loud, but because it was true. {child_name} had learned to ask for what they needed. {child_name} had learned to say no when something was not right. {child_name} had learned to stand up for the truth without becoming unkind. Each lesson had woven itself into who {child_name} was becoming.

But the final lesson was waiting here, in this ordinary moment, in the form of a friend named Finn.

As the teams took shape, {child_name} watched Finn, who was quiet and a little different, stand at the edge of the group. {child_name} watched as name after name was called, and Finn's was not among them. {child_name} watched as Finn's face went carefully still, the way faces do when someone has learned not to let others see them hurting.

{child_name} could have said nothing. Everyone else had. {child_name} could have stayed safely in the middle of the group, warm and unchosen, and let Finn be alone. There was nothing in it for {child_name} — no reward, no gain, only the risk of stepping into the cold open space where everyone could see them choose Finn instead of going along with the group.

"You have stopped," said {companion_name}, settling nearby. "What have you seen?"

"That Finn is being left out," said {child_name}. "And I could speak up, but it might cost me something."

"Yes," said {companion_name}. "It might. This is the hardest kind of brave — when you have nothing to gain except the knowledge that you did the right thing. But think: you have a voice they listen to. Finn does not have that right now. Which makes it yours to use."

{child_name} looked down at the {object_motif}, the object they had carried through the whole of this journey. {child_name} remembered being small and unheard. {child_name} remembered what it had felt like to want someone, anyone, to speak for them.

So {child_name} turned to the group. {child_name}'s heart was a drum, but the voice came out steady and kind.

"Finn belongs here," {child_name} said simply. "Finn wants to play just as much as any of us. I think we should make a place for them."

For a long moment no one spoke. {child_name} stood in that cold open space and felt the fear they had known would be there. But {child_name} did not apologize. {child_name} did not explain. {child_name} simply held the line.

Then slowly, something changed. "You know what?" someone said. "That is right. We should have asked. Come on, Finn." And the wall came down. Finn was chosen. Finn was in.

That night, when the game was over and the others had wandered home, {companion_name} sat beside {child_name} in the soft dark.

"You had fear," said {companion_name}. "I saw it. And you spoke anyway."

"I almost did not," {child_name} admitted.

"But you did. And now I want to tell you the thing that matters most: using your voice for yourself — that is brave. But there is a bravery that comes after, when you use that same voice for someone who has not yet found theirs. When you turn your courage outward and spend it on someone else — that is the highest use of a voice. That is kindness in its truest form. A voice can stand up for someone else."

{child_name} held the {object_motif} and felt, for the first time, that they understood what the whole long journey had been for. It had never been just about finding a voice. It had been about learning what to do with it. And the answer, {child_name} now knew, was to use it not just for themselves, but for anyone who was being erased.

{refrain}.`,
  },
]
