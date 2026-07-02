// content/kindness/levels.ts
//
// Kindness & Empathy — 5 leveled bedtime stories (empathy is a skill, practised).
// Same two-template structure as the other paths:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// ⚠ DRAFT — must pass the safety + expert review gate before delivery
//   (see docs/01_PRD.md FR-4/FR-5).
//
// To draft/refine: npm run author:draft -- --subject kindness --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'Noticing How Others Feel',
    concept: 'Paying attention to the feelings of others', callback: null, ageFloor: 3,
    summary: 'A small hero learns that kindness begins before any action — with noticing. With their companion, they practise reading the quiet signs that tell you how someone else is feeling.',
    teachingNote: 'Empathy starts with attention: a child cannot be kind to a feeling they have not noticed.',
    learningBeat: 'That is where kindness is born',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} wanted to be kind.

The {hero} lived by the {setting}. The {hero} thought kindness had to be big. Big and loud. Like a giant gift. Like a big, big hug.

One day the {hero} met {companion_name}.

'I want to be kind,' said the {hero}. 'But I am small. My kind things feel small too.'

'Kindness can be quiet,' said {companion_name}. 'Sit with me and watch.'

The {hero} did not understand.

'Look,' said {companion_name}. 'Look at the little one over there.'

The {hero} looked. The little one sat low. Their head hung down. They did not play.

'How do they feel?' asked {companion_name}.

'Sad,' said the {hero}. 'They look sad.'

'You saw it. You noticed,' said {companion_name}. 'That is where kindness is born.'

The {hero} felt warm inside. It was a good, soft feeling.

So they sat by the {setting}, and they looked, and they looked.

They saw a small friend hiding away. 'Scared,' whispered the {hero}.

They saw a big friend jump and wave. 'Happy,' whispered the {hero}.

They saw a new friend standing all alone. 'Shy,' whispered the {hero}.

They saw a tired friend with slow, slow feet. 'Sleepy,' whispered the {hero}.

Each time, the {hero} noticed. Each time, the {hero} felt the noticing in their chest, soft and quiet.

The {hero} held the {object_motif} close and thought about the sad little one.

'Now go and sit with them,' said {companion_name}. 'Close and quiet.'

So the {hero} went to the little one. The {hero} sat down close. Very close. Quiet and near. Not loud. Not big.

The little one lifted their head. The little one gave one small smile. Then a bigger one.

The {hero} smiled too.

Kindness did not have to be big. Kindness could be quiet. Kindness could be near.

The moon rose over the {setting}, soft and round. The wind went hush, hush, hush.

The {hero} grew sleepy. The {hero} held the {object_motif} and gave a long, slow yawn.

'I noticed today,' the {hero} whispered.

{companion_name} nodded, slow and kind, and stayed close while the {hero} closed their eyes.

{refrain}.`,
    scriptTemplate: `{child_name} wanted to be kind.

{child_name} lived by the {setting}. {child_name} thought kindness had to be big. Big and loud. Like a giant gift. Like a big, big hug.

One day {child_name} met {companion_name}.

'I want to be kind,' said {child_name}. 'But I am small. My kind things feel small too.'

'Kindness can be quiet,' said {companion_name}. 'Sit with me and watch.'

{child_name} did not understand.

'Look,' said {companion_name}. 'Look at the little one over there.'

{child_name} looked. The little one sat low. Their head hung down. They did not play.

'How do they feel?' asked {companion_name}.

'Sad,' said {child_name}. 'They look sad.'

'You saw it. You noticed,' said {companion_name}. 'That is where kindness is born.'

{child_name} felt warm inside. It was a good, soft feeling.

So they sat by the {setting}, and they looked, and they looked.

They saw a small friend hiding away. 'Scared,' whispered {child_name}.

They saw a big friend jump and wave. 'Happy,' whispered {child_name}.

They saw a new friend standing all alone. 'Shy,' whispered {child_name}.

They saw a tired friend with slow, slow feet. 'Sleepy,' whispered {child_name}.

Each time, {child_name} noticed. Each time, {child_name} felt the noticing in their chest, soft and quiet.

{child_name} held the {object_motif} close and thought about the sad little one.

'Now go and sit with them,' said {companion_name}. 'Close and quiet.'

So {child_name} went to the little one. {child_name} sat down close. Very close. Quiet and near. Not loud. Not big.

The little one lifted their head. The little one gave one small smile. Then a bigger one.

{child_name} smiled too.

Kindness did not have to be big. Kindness could be quiet. Kindness could be near.

The moon rose over the {setting}, soft and round. The wind went hush, hush, hush.

{child_name} grew sleepy. {child_name} held the {object_motif} and gave a long, slow yawn.

'I noticed today,' {child_name} whispered.

{companion_name} nodded, slow and kind, and stayed close while {child_name} closed their eyes.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} wanted to be kind more than almost anything.

The trouble was, the {hero} thought kindness had to be big. A huge present. A rescue. Something so grand that everyone would gasp and clap. And the {hero} was not big, and did not have grand things to give. So every day the {hero} felt like kindness was for someone else.

One evening, down by the {setting}, the {hero} found {companion_name} sitting quietly.

'I want to be kind,' said the {hero}, 'but I never have anything big enough. What if I am just not a kind sort of person?'

{companion_name} did not answer right away. Instead they said, 'Come and sit. I want to show you something most people walk straight past.'

The {hero} sat.

'Look over there,' said {companion_name}, 'at the one by the water.'

The {hero} looked. Another child stood a little apart from everyone else. Their shoulders were curled in. Their voice, when they spoke, came out small. They kept turning their face away.

'What do you see?' asked {companion_name}.

'I don't know,' said the {hero}. 'They're just standing there.'

'Look again. Not with your eyes only. Look the way you would look for a hidden thing.'

So the {hero} looked again, slower this time. The curled shoulders. The quiet voice. The face turned away.

'Oh,' the {hero} said softly. 'I think they feel left out. I think they might be a little sad.'

{companion_name} smiled. 'You noticed. Before you gave anything, before you did anything at all, you noticed how someone felt. That is where kindness is born.'

The {hero} sat very still, turning the idea over.

'Let's practise,' said {companion_name}. 'Noticing is like any game. It grows when you play it.'

So they watched the busy {setting} together. A small one hopped from foot to foot near the front of a line. 'Excited,' guessed the {hero}. A bigger one sighed and dragged their feet. 'Worn out,' said the {hero}. Two friends laughed close together. 'Glad,' said the {hero}. Someone gripped their hands tight and stared at the ground. 'Nervous,' whispered the {hero}, and {companion_name} nodded each time.

It surprised the {hero} how much a person showed without saying a word. A tilt of the head. A held breath. Hands that fidgeted or went still. Each one was a little message, waiting to be read.

The more the {hero} looked, the more there was to see. Feelings were everywhere, quiet as footprints, once you knew to follow them.

The {hero} held the {object_motif} and thought about the child by the water.

'I think I know what to do now,' said the {hero}.

'Then the noticing did its work,' said {companion_name}.

The {hero} walked over, not in a big rush, not with a grand plan. Just close and quiet. The {hero}'s hands felt light, not heavy with worry the way they had before. 'You can stand with me, if you want,' the {hero} said. 'I saw you over here on your own.'

The other child looked up, surprised. And then, slowly, they smiled — a real one. 'I'd like that,' they said. For a moment neither of them said anything, and that was all right too. Their shoulders came loose. Their voice came back.

It was such a small thing. No one gasped. No one clapped. But it had mattered, and the {hero} could feel that it had.

Later, the sky over the {setting} went soft and dim, and the first lights of evening blinked awake.

'I always thought I was too small to be kind,' said the {hero}.

'You were never too small,' said {companion_name}. 'You only needed to see.'

The {hero} thought of all the quiet feelings still out there, and how many they might notice tomorrow.

The {hero} yawned, holding the {object_motif} close, watching the {setting} settle into quiet.

{refrain}.`,
    scriptTemplate: `{child_name} wanted to be kind more than almost anything.

The trouble was, {child_name} thought kindness had to be big. A huge present. A rescue. Something so grand that everyone would gasp and clap. And {child_name} was not big, and did not have grand things to give. So every day {child_name} felt like kindness was for someone else.

One evening, down by the {setting}, {child_name} found {companion_name} sitting quietly.

'I want to be kind,' said {child_name}, 'but I never have anything big enough. What if I am just not a kind sort of person?'

{companion_name} did not answer right away. Instead they said, 'Come and sit. I want to show you something most people walk straight past.'

{child_name} sat.

'Look over there,' said {companion_name}, 'at the one by the water.'

{child_name} looked. Another child stood a little apart from everyone else. Their shoulders were curled in. Their voice, when they spoke, came out small. They kept turning their face away.

'What do you see?' asked {companion_name}.

'I don't know,' said {child_name}. 'They're just standing there.'

'Look again. Not with your eyes only. Look the way you would look for a hidden thing.'

So {child_name} looked again, slower this time. The curled shoulders. The quiet voice. The face turned away.

'Oh,' {child_name} said softly. 'I think they feel left out. I think they might be a little sad.'

{companion_name} smiled. 'You noticed. Before you gave anything, before you did anything at all, you noticed how someone felt. That is where kindness is born.'

{child_name} sat very still, turning the idea over.

'Let's practise,' said {companion_name}. 'Noticing is like any game. It grows when you play it.'

So they watched the busy {setting} together. A small one hopped from foot to foot near the front of a line. 'Excited,' guessed {child_name}. A bigger one sighed and dragged their feet. 'Worn out,' said {child_name}. Two friends laughed close together. 'Glad,' said {child_name}. Someone gripped their hands tight and stared at the ground. 'Nervous,' whispered {child_name}, and {companion_name} nodded each time.

It surprised {child_name} how much a person showed without saying a word. A tilt of the head. A held breath. Hands that fidgeted or went still. Each one was a little message, waiting to be read.

The more {child_name} looked, the more there was to see. Feelings were everywhere, quiet as footprints, once you knew to follow them.

{child_name} held the {object_motif} and thought about the child by the water.

'I think I know what to do now,' said {child_name}.

'Then the noticing did its work,' said {companion_name}.

{child_name} walked over, not in a big rush, not with a grand plan. Just close and quiet. {child_name}'s hands felt light, not heavy with worry the way they had before. 'You can stand with me, if you want,' {child_name} said. 'I saw you over here on your own.'

The other child looked up, surprised. And then, slowly, they smiled — a real one. 'I'd like that,' they said. For a moment neither of them said anything, and that was all right too. Their shoulders came loose. Their voice came back.

It was such a small thing. No one gasped. No one clapped. But it had mattered, and {child_name} could feel that it had.

Later, the sky over the {setting} went soft and dim, and the first lights of evening blinked awake.

'I always thought I was too small to be kind,' said {child_name}.

'You were never too small,' said {companion_name}. 'You only needed to see.'

{child_name} thought of all the quiet feelings still out there, and how many they might notice tomorrow.

{child_name} yawned, holding the {object_motif} close, watching the {setting} settle into quiet.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} had decided, that whole week, to become kind. Not a little kind — properly kind, the sort people remembered. The problem was that every idea the {hero} came up with was enormous. Build someone a boat. Give away a treasure. Save the day in front of everybody. And since the {hero} had no boat, no treasure, and no day that needed saving, the plan kept stalling before it began.

By the time evening settled over the {setting}, the {hero} had worked themselves into a proper knot.

{companion_name} found them there, chin in hands, frowning at nothing.

'That is a very serious face,' said {companion_name}. 'What is it carrying?'

'I want to be kind,' the {hero} admitted, 'but every kind thing I imagine is too big for me. Maybe I'm just not built for it.'

{companion_name} sat down beside them without a word for a moment. Then they tipped their head toward the far side of the {setting}. 'Before you decide that, do something for me. Watch that one over there. Don't do anything. Just watch.'

The {hero} followed the look. Another young one stood near the others but not quite with them, laughing when the group laughed — except the laugh came a half-second late, and stopped a half-second early. They kept glancing toward the path, as if measuring how far it was.

'They're fine,' said the {hero}. 'They're laughing.'

'Are they?' said {companion_name}. 'Watch the parts that aren't the mouth.'

So the {hero} watched harder. The late laugh. The eyes that kept sliding away. The arms wrapped around themselves as though the evening had turned cold, though it hadn't.

'Oh,' said the {hero}, quiet now. 'They're pretending. They look like they're having fun, but underneath I think they feel... lonely. Like they want to leave but don't know how.'

{companion_name} nodded slowly. 'You just did the hardest part of kindness, and you didn't lift a finger. You looked past what someone showed on purpose and saw what they truly felt. That is where kindness is born.'

The {hero} turned the thought over, surprised by it. 'But I didn't do anything.'

'You did the thing that comes first,' said {companion_name}. 'Everything kind you will ever do starts here, with noticing. Miss this, and even a grand gesture lands on the wrong person at the wrong time.'

'Show me how to get better at it,' said the {hero}.

So they practised, right there in the fading light. {companion_name} would tip their chin toward someone, and the {hero} would read them. A little one clutching a grown-up's sleeve at the edge of the crowd — 'shy, maybe scared.' Someone marching off with quick, hard steps — 'angry, or trying not to cry.' Two others leaning close, heads together, easy and warm — 'happy, safe.' Each time, the {hero} looked for the quiet signs first: the shoulders, the hands, the eyes, the space a person left between themselves and everyone else.

'It's like reading,' the {hero} said slowly, 'except the words are on people instead of pages.'

'And most people never learn to read it,' said {companion_name}. 'You are, right now.'

It was strange, the {hero} thought. The {setting} looked exactly the same as it had an hour ago, and yet it didn't at all. Everywhere they turned there were small signals they had never bothered to read before — a slumped posture here, a too-bright smile there, a voice pitched a little too high. The world had been talking all along, quietly, and the {hero} was only now learning the language.

'The trick,' said {companion_name}, 'is that people hide the feelings they think they shouldn't have. The sad ones. The scared ones. Those are the ones that most need noticing, and they're the hardest to see.' The {hero} nodded, thinking of the laugh that came too late.

The {hero} held the {object_motif} and looked back at the one who had laughed too late. They were still there, still pretending, still glancing at the path.

'I want to go over,' said the {hero}. 'But what if I get it wrong?'

'Then you'll have gone over gently, and asked, and listened,' said {companion_name}. 'Noticing isn't being sure. It's caring enough to check.'

The {hero} felt something steady settle in their chest — not the pounding nerves from before, just a quiet readiness. They stood and crossed the {setting}, slowly, so as not to startle anyone.

'Hey,' the {hero} said, stopping a friendly distance away. 'I was about to go find a quieter spot. Want to come? You don't have to.'

The other one blinked. For a heartbeat they looked ready to say the automatic thing, the everything's-fine thing. Then their shoulders dropped, just a little, and something true came into their face.

'Yeah,' they said. 'Actually — yeah. I'd like that.'

They walked off together, and the pretend-laugh was gone, replaced by something smaller and far more real. Some kind things, the {hero} realised, were so quiet that only the person receiving them ever knew.

No crowd cheered. No one had even noticed. But the {hero} understood now that the biggest part of what had just happened had taken place before a single word — in the looking.

Above the {setting}, the light thinned to the colour of sleep.

'I thought kindness was something you had to be big enough for,' said the {hero}.

'It's something you have to be awake enough for,' said {companion_name}, 'and you were.'

The {hero} yawned, the {object_motif} warm in their hands, and let the quiet of the {setting} fold around them.

{refrain}.`,
    scriptTemplate: `{child_name} had decided, that whole week, to become kind. Not a little kind — properly kind, the sort people remembered. The problem was that every idea {child_name} came up with was enormous. Build someone a boat. Give away a treasure. Save the day in front of everybody. And since {child_name} had no boat, no treasure, and no day that needed saving, the plan kept stalling before it began.

By the time evening settled over the {setting}, {child_name} had worked themselves into a proper knot.

{companion_name} found them there, chin in hands, frowning at nothing.

'That is a very serious face,' said {companion_name}. 'What is it carrying?'

'I want to be kind,' {child_name} admitted, 'but every kind thing I imagine is too big for me. Maybe I'm just not built for it.'

{companion_name} sat down beside them without a word for a moment. Then they tipped their head toward the far side of the {setting}. 'Before you decide that, do something for me. Watch that one over there. Don't do anything. Just watch.'

{child_name} followed the look. Another young one stood near the others but not quite with them, laughing when the group laughed — except the laugh came a half-second late, and stopped a half-second early. They kept glancing toward the path, as if measuring how far it was.

'They're fine,' said {child_name}. 'They're laughing.'

'Are they?' said {companion_name}. 'Watch the parts that aren't the mouth.'

So {child_name} watched harder. The late laugh. The eyes that kept sliding away. The arms wrapped around themselves as though the evening had turned cold, though it hadn't.

'Oh,' said {child_name}, quiet now. 'They're pretending. They look like they're having fun, but underneath I think they feel... lonely. Like they want to leave but don't know how.'

{companion_name} nodded slowly. 'You just did the hardest part of kindness, and you didn't lift a finger. You looked past what someone showed on purpose and saw what they truly felt. That is where kindness is born.'

{child_name} turned the thought over, surprised by it. 'But I didn't do anything.'

'You did the thing that comes first,' said {companion_name}. 'Everything kind you will ever do starts here, with noticing. Miss this, and even a grand gesture lands on the wrong person at the wrong time.'

'Show me how to get better at it,' said {child_name}.

So they practised, right there in the fading light. {companion_name} would tip their chin toward someone, and {child_name} would read them. A little one clutching a grown-up's sleeve at the edge of the crowd — 'shy, maybe scared.' Someone marching off with quick, hard steps — 'angry, or trying not to cry.' Two others leaning close, heads together, easy and warm — 'happy, safe.' Each time, {child_name} looked for the quiet signs first: the shoulders, the hands, the eyes, the space a person left between themselves and everyone else.

'It's like reading,' {child_name} said slowly, 'except the words are on people instead of pages.'

'And most people never learn to read it,' said {companion_name}. 'You are, right now.'

It was strange, {child_name} thought. The {setting} looked exactly the same as it had an hour ago, and yet it didn't at all. Everywhere they turned there were small signals they had never bothered to read before — a slumped posture here, a too-bright smile there, a voice pitched a little too high. The world had been talking all along, quietly, and {child_name} was only now learning the language.

'The trick,' said {companion_name}, 'is that people hide the feelings they think they shouldn't have. The sad ones. The scared ones. Those are the ones that most need noticing, and they're the hardest to see.' {child_name} nodded, thinking of the laugh that came too late.

{child_name} held the {object_motif} and looked back at the one who had laughed too late. They were still there, still pretending, still glancing at the path.

'I want to go over,' said {child_name}. 'But what if I get it wrong?'

'Then you'll have gone over gently, and asked, and listened,' said {companion_name}. 'Noticing isn't being sure. It's caring enough to check.'

{child_name} felt something steady settle in their chest — not the pounding nerves from before, just a quiet readiness. They stood and crossed the {setting}, slowly, so as not to startle anyone.

'Hey,' {child_name} said, stopping a friendly distance away. 'I was about to go find a quieter spot. Want to come? You don't have to.'

The other one blinked. For a heartbeat they looked ready to say the automatic thing, the everything's-fine thing. Then their shoulders dropped, just a little, and something true came into their face.

'Yeah,' they said. 'Actually — yeah. I'd like that.'

They walked off together, and the pretend-laugh was gone, replaced by something smaller and far more real. Some kind things, {child_name} realised, were so quiet that only the person receiving them ever knew.

No crowd cheered. No one had even noticed. But {child_name} understood now that the biggest part of what had just happened had taken place before a single word — in the looking.

Above the {setting}, the light thinned to the colour of sleep.

'I thought kindness was something you had to be big enough for,' said {child_name}.

'It's something you have to be awake enough for,' said {companion_name}, 'and you were.'

{child_name} yawned, the {object_motif} warm in their hands, and let the quiet of the {setting} fold around them.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `For most of that week, the {hero} had been quietly obsessed with the idea of being kind — really kind, the kind that left a mark. The trouble was that every version of kindness the {hero} could picture was large and public: a dramatic rescue, a magnificent gift, some moment where a crowd went quiet and then broke into applause. Measured against that, the {hero}'s ordinary days felt thin. What was the point of wanting to be good if you never had anything grand enough to prove it?

The {hero} was still tangled in this when evening came down over the {setting} and {companion_name} appeared, settling nearby with the unhurried calm of someone who had all the time in the world.

'You've been somewhere far away in your head all day,' {companion_name} observed. 'Where?'

'Trying to work out how to be kind,' the {hero} said, and heard how strange it sounded aloud. 'And failing. Everything I think of is too big. I don't have treasures to give away or anyone to rescue. So maybe I'm just... not the kind of person it comes naturally to.'

{companion_name} didn't rush to disagree, which the {hero} half-expected and was oddly grateful for. Instead they looked out across the {setting}, to where a cluster of others their age had gathered.

'Do me a favour before you decide that,' {companion_name} said. 'See the one at the edge of that group? Don't go over. Don't do anything. Just watch, properly, for a little while.'

The {hero} looked. At first there was nothing to see. The one at the edge was laughing along with the rest, joining in, apparently as easy as anybody. If anything, they seemed to be trying harder than the others — laughing a little louder, agreeing a little faster.

'They seem fine,' the {hero} said. 'Happy, even.'

'Keep watching,' said {companion_name}. 'Not the performance. The person underneath it.'

It was an odd instruction, but the {hero} obeyed, and this time watched the way you might study a picture that hides a second image inside the first. And slowly, the second image surfaced. The laugh arrived a beat behind everyone else's, as though it were being copied rather than felt. When the others weren't looking, the smile slid off entirely, and what was left underneath was tired. They had positioned themselves half a step outside the circle. Every so often their eyes went to the path that led away, and lingered there, and came back.

'Oh,' the {hero} said, and the word came out softer than intended. 'They're not happy at all, are they. They're doing an enormous amount of work to look happy. Underneath it they're... I think they feel left out. Maybe they think if they stopped smiling, nobody would notice, and that would somehow be worse.'

For a long moment {companion_name} said nothing. Then: 'You just did the thing almost nobody bothers to do. You looked past the face someone put on for the world and saw the feeling they were hiding behind it. And you did it without being asked, without being told, without doing a single thing. That is where kindness is born.'

The {hero} frowned, not in disagreement but in genuine puzzlement. 'But that's just... looking. I didn't help them. I didn't do anything.'

'You did the thing that has to come first, or nothing else works,' said {companion_name}. 'A grand gift given to someone who needed to be left alone isn't kindness — it's noise. Comfort offered to a person who wanted to be cheered up lands wrong. Every genuinely kind act begins with reading, accurately, what another person actually feels. Skip that, and even your biggest gesture is really about you.'

That landed somewhere real. The {hero} thought of all the enormous kind things they had imagined that week, and realised, with a small flush of embarrassment, that in every single one of them the {hero} had pictured the crowd, the applause — themselves, at the centre, being seen as good.

'Teach me to be better at it,' the {hero} said. 'The noticing.'

So, in the last of the light, they practised. {companion_name} would indicate someone with the smallest tilt of the head, and the {hero} would try to read them past the surface. A younger one bouncing on their toes, bright and loud — 'excited, but also showing off a bit, wanting someone to look.' An older one with a fixed, careful expression, moving very deliberately — 'upset about something, and determined not to let it show.' Two friends with their heads bent together — 'easy, safe, they trust each other.' Each time the {hero} learned to look for the quiet evidence rather than the announcement: the set of a pair of shoulders, the busyness of a pair of hands, the distance a person kept, the direction their eyes drifted when they thought no one was watching.

'It's a whole language,' the {hero} said, half to themselves. 'People are talking all the time without saying anything. I just never learned to hear it.'

'Most never do,' said {companion_name}. 'And here is the hard part. The feelings people work hardest to hide are usually the ones that most need noticing — the sadness, the fear, the loneliness. Nobody dresses those up as loud. They dress them up as fine. So the kindest thing you can learn is to be a little suspicious of fine.'

'Why do people hide it?' the {hero} asked. 'If they feel bad, why pretend so hard that they don't?'

'Because feeling bad in front of others can feel like one more thing to be judged for,' said {companion_name}. 'So they cover it. Which means the person laughing loudest is sometimes the one you most need to look at twice.'

The {hero} sat with that. It rearranged something. All week the {hero} had been waiting for a person to obviously, unmistakably need help — someone crying, someone hurt, a problem with a flashing sign on it. But real life didn't hand you flashing signs. Real life handed you a laugh that came a half-beat late and trusted you to catch it.

The {hero} held the {object_motif}, turning it slowly, and looked back across the {setting} to the one still standing at the edge of the group, still laughing a half-beat late.

'I want to go over,' the {hero} said. 'But I'm nervous I'll read it wrong. What if I make it worse?'

'You might read it wrong,' {companion_name} agreed, which wasn't the reassurance the {hero} had wanted. 'Noticing doesn't make you certain. It makes you careful. You go over gently, you leave them a way out, and you pay attention to what they do next. If you're wrong, you'll see that too — because you'll still be watching.'

The nervousness didn't vanish, exactly, but it changed shape, settling into something steadier, more like resolve. The {hero} crossed the {setting} without hurry, stopping a comfortable arm's length away rather than crowding in.

'Hey,' the {hero} said, keeping it light. 'I'm going to slip off somewhere quieter for a bit. No pressure, but you're welcome to come. Or not.'

For a second the automatic answer surfaced in the other's face — the bright, practised everything's-fine that the {hero} now recognised for exactly what it was. And then it faltered. Something underneath it let go, just slightly, and what replaced it was quieter and unmistakably true.

'Yeah,' they said, and the relief in that single word was its own small confession. 'Yeah. I'd really like that, actually.'

The {hero} felt the small, warm click of having guessed right — not triumph, just relief, and under it something gentler.

They walked off together, away from the noise, and the {hero} noticed that the copied laugh had disappeared, replaced now by the ordinary, unremarkable ease of a person who has stopped pretending. The {hero} kept stealing glances at their new companion as they walked, not checking up on them exactly, just staying awake to them — and found, a little to their own surprise, that the watching no longer felt like effort. It had started to feel like caring wearing its everyday clothes.

Nothing dramatic had happened. No one had cheered; hardly anyone had even glanced their way. And yet the {hero} understood, with a certainty that felt older than they were, that the most important part of the whole evening had happened silently, before a single word was spoken — in the simple, difficult act of looking closely enough to see.

Above the {setting}, the last light dissolved into the deep blue of oncoming night.

'I spent all week believing I had to be big enough to be kind,' the {hero} said.

'You only had to be awake enough,' said {companion_name}. 'That, you already are.'

The {hero} yawned, the {object_motif} resting easy in their hands, and let the hush of the {setting} draw slowly in around them.

{refrain}.`,
    scriptTemplate: `For most of that week, {child_name} had been quietly obsessed with the idea of being kind — really kind, the kind that left a mark. The trouble was that every version of kindness {child_name} could picture was large and public: a dramatic rescue, a magnificent gift, some moment where a crowd went quiet and then broke into applause. Measured against that, {child_name}'s ordinary days felt thin. What was the point of wanting to be good if you never had anything grand enough to prove it?

{child_name} was still tangled in this when evening came down over the {setting} and {companion_name} appeared, settling nearby with the unhurried calm of someone who had all the time in the world.

'You've been somewhere far away in your head all day,' {companion_name} observed. 'Where?'

'Trying to work out how to be kind,' {child_name} said, and heard how strange it sounded aloud. 'And failing. Everything I think of is too big. I don't have treasures to give away or anyone to rescue. So maybe I'm just... not the kind of person it comes naturally to.'

{companion_name} didn't rush to disagree, which {child_name} half-expected and was oddly grateful for. Instead they looked out across the {setting}, to where a cluster of others their age had gathered.

'Do me a favour before you decide that,' {companion_name} said. 'See the one at the edge of that group? Don't go over. Don't do anything. Just watch, properly, for a little while.'

{child_name} looked. At first there was nothing to see. The one at the edge was laughing along with the rest, joining in, apparently as easy as anybody. If anything, they seemed to be trying harder than the others — laughing a little louder, agreeing a little faster.

'They seem fine,' {child_name} said. 'Happy, even.'

'Keep watching,' said {companion_name}. 'Not the performance. The person underneath it.'

It was an odd instruction, but {child_name} obeyed, and this time watched the way you might study a picture that hides a second image inside the first. And slowly, the second image surfaced. The laugh arrived a beat behind everyone else's, as though it were being copied rather than felt. When the others weren't looking, the smile slid off entirely, and what was left underneath was tired. They had positioned themselves half a step outside the circle. Every so often their eyes went to the path that led away, and lingered there, and came back.

'Oh,' {child_name} said, and the word came out softer than intended. 'They're not happy at all, are they. They're doing an enormous amount of work to look happy. Underneath it they're... I think they feel left out. Maybe they think if they stopped smiling, nobody would notice, and that would somehow be worse.'

For a long moment {companion_name} said nothing. Then: 'You just did the thing almost nobody bothers to do. You looked past the face someone put on for the world and saw the feeling they were hiding behind it. And you did it without being asked, without being told, without doing a single thing. That is where kindness is born.'

{child_name} frowned, not in disagreement but in genuine puzzlement. 'But that's just... looking. I didn't help them. I didn't do anything.'

'You did the thing that has to come first, or nothing else works,' said {companion_name}. 'A grand gift given to someone who needed to be left alone isn't kindness — it's noise. Comfort offered to a person who wanted to be cheered up lands wrong. Every genuinely kind act begins with reading, accurately, what another person actually feels. Skip that, and even your biggest gesture is really about you.'

That landed somewhere real. {child_name} thought of all the enormous kind things they had imagined that week, and realised, with a small flush of embarrassment, that in every single one of them {child_name} had pictured the crowd, the applause — themselves, at the centre, being seen as good.

'Teach me to be better at it,' {child_name} said. 'The noticing.'

So, in the last of the light, they practised. {companion_name} would indicate someone with the smallest tilt of the head, and {child_name} would try to read them past the surface. A younger one bouncing on their toes, bright and loud — 'excited, but also showing off a bit, wanting someone to look.' An older one with a fixed, careful expression, moving very deliberately — 'upset about something, and determined not to let it show.' Two friends with their heads bent together — 'easy, safe, they trust each other.' Each time {child_name} learned to look for the quiet evidence rather than the announcement: the set of a pair of shoulders, the busyness of a pair of hands, the distance a person kept, the direction their eyes drifted when they thought no one was watching.

'It's a whole language,' {child_name} said, half to themselves. 'People are talking all the time without saying anything. I just never learned to hear it.'

'Most never do,' said {companion_name}. 'And here is the hard part. The feelings people work hardest to hide are usually the ones that most need noticing — the sadness, the fear, the loneliness. Nobody dresses those up as loud. They dress them up as fine. So the kindest thing you can learn is to be a little suspicious of fine.'

'Why do people hide it?' {child_name} asked. 'If they feel bad, why pretend so hard that they don't?'

'Because feeling bad in front of others can feel like one more thing to be judged for,' said {companion_name}. 'So they cover it. Which means the person laughing loudest is sometimes the one you most need to look at twice.'

{child_name} sat with that. It rearranged something. All week {child_name} had been waiting for a person to obviously, unmistakably need help — someone crying, someone hurt, a problem with a flashing sign on it. But real life didn't hand you flashing signs. Real life handed you a laugh that came a half-beat late and trusted you to catch it.

{child_name} held the {object_motif}, turning it slowly, and looked back across the {setting} to the one still standing at the edge of the group, still laughing a half-beat late.

'I want to go over,' {child_name} said. 'But I'm nervous I'll read it wrong. What if I make it worse?'

'You might read it wrong,' {companion_name} agreed, which wasn't the reassurance {child_name} had wanted. 'Noticing doesn't make you certain. It makes you careful. You go over gently, you leave them a way out, and you pay attention to what they do next. If you're wrong, you'll see that too — because you'll still be watching.'

The nervousness didn't vanish, exactly, but it changed shape, settling into something steadier, more like resolve. {child_name} crossed the {setting} without hurry, stopping a comfortable arm's length away rather than crowding in.

'Hey,' {child_name} said, keeping it light. 'I'm going to slip off somewhere quieter for a bit. No pressure, but you're welcome to come. Or not.'

For a second the automatic answer surfaced in the other's face — the bright, practised everything's-fine that {child_name} now recognised for exactly what it was. And then it faltered. Something underneath it let go, just slightly, and what replaced it was quieter and unmistakably true.

'Yeah,' they said, and the relief in that single word was its own small confession. 'Yeah. I'd really like that, actually.'

{child_name} felt the small, warm click of having guessed right — not triumph, just relief, and under it something gentler.

They walked off together, away from the noise, and {child_name} noticed that the copied laugh had disappeared, replaced now by the ordinary, unremarkable ease of a person who has stopped pretending. {child_name} kept stealing glances at their new companion as they walked, not checking up on them exactly, just staying awake to them — and found, a little to their own surprise, that the watching no longer felt like effort. It had started to feel like caring wearing its everyday clothes.

Nothing dramatic had happened. No one had cheered; hardly anyone had even glanced their way. And yet {child_name} understood, with a certainty that felt older than they were, that the most important part of the whole evening had happened silently, before a single word was spoken — in the simple, difficult act of looking closely enough to see.

Above the {setting}, the last light dissolved into the deep blue of oncoming night.

'I spent all week believing I had to be big enough to be kind,' {child_name} said.

'You only had to be awake enough,' said {companion_name}. 'That, you already are.'

{child_name} yawned, the {object_motif} resting easy in their hands, and let the hush of the {setting} draw slowly in around them.

{refrain}.`
  }
},
    audioTemplate: `Night drifted softly over {setting}, and a small {hero} sat beside a {object_motif}, watching the others nearby.

One of them sat apart, very quiet, shoulders low.

The {hero} had not noticed before — but tonight they did. "Something feels different about them," they said.

{companion_name} nodded warmly. "That is the first kindness of all," they said. "Noticing. Before you ever do a thing, you see how someone feels. Their face, the way they sit, whether they are quiet or bright."

The {hero} looked again, really looked, and saw it clearly: that friend was sad.

The {object_motif} glowed a little warmer, as if noticing too.

"Most people walk right past a feeling," said {companion_name}. "You stopped and saw it. That is where kindness is born."

The {hero} kept watching the world with these new, gentler eyes, and it looked different now — full of feelings to notice.

{refrain}.`,
    scriptTemplate: `Night drifted softly over {setting}, and {child_name} the {hero} sat beside a {object_motif}, watching the others nearby.

One of them sat apart, very quiet, shoulders low.

{child_name} had not noticed before — but tonight they did. "Something feels different about them," {child_name} said.

{companion_name} nodded warmly. "That is the first kindness of all, {child_name}," they said. "Noticing. Before you ever do a thing, you see how someone feels. Their face, the way they sit, whether they are quiet or bright."

{child_name} looked again, really looked, and saw it clearly: that friend was sad.

The {object_motif} glowed a little warmer, as if noticing too.

"Most people walk right past a feeling," said {companion_name}. "You stopped and saw it. That is where kindness is born."

{child_name} kept watching the world with these new, gentler eyes, and it looked different now — full of feelings to notice.

{refrain}.`,
  },

  {
    ordinal: 2, title: 'A Small Kindness',
    concept: 'Kindness does not have to be big to matter', callback: 'Noticing how others feel (Level 1)', ageFloor: 4,
    summary: 'Having noticed a friend in need, the hero worries they must do something grand. Their companion shows them that the smallest kindness — sitting close, a gentle word — is often the one that matters most. It builds on Level 1: noticing leads to acting.',
    teachingNote: 'Children often think kindness must be big; learning that small acts count makes kindness something they can always offer.',
    learningBeat: 'A small kindness',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} sat by {setting}. The evening was soft and slow. A friend sat close by. The friend looked sad. Very, very sad.

The {hero} noticed. The {hero} always noticed. But noticing made the {hero} worry. How could a small one help?

Maybe a big gift would help. Maybe a loud, happy song. Maybe a giant surprise with bells. The {hero} did not know what to do.

{companion_name} came near and sat down. {companion_name} carried the {object_motif}.

'You look worried,' {companion_name} said. 'What is wrong, little one?'

'My friend is sad,' said the {hero}. 'I want to help. But I am so small. I cannot do big, grand things.'

{companion_name} smiled a warm smile. 'You do not need big things. A small kindness can be enough. Sit close. Say one kind word. Stay near.'

The {hero} thought about that. Sit close. Say one kind word. Stay near. It sounded easy. It sounded good.

So the {hero} walked over softly. One small step. Then another. The {hero} sat right down. Right beside the friend. Close and quiet.

'I am here,' said the {hero}. 'I will stay with you.'

The friend looked up slowly. The friend blinked. A tiny smile began to grow.

The {hero} did not sing a loud song. The {hero} did not bring a giant gift. The {hero} just stayed. Warm and near and calm.

They sat together by {setting}. They watched the evening settle. The friend's shoulders felt less tight. The quiet was a kind quiet. They did not need many words at all.

After a while, the friend leaned over. 'Thank you for staying,' the friend said. 'I do not feel so alone now. I feel much better.'

The {hero} held the {object_motif} and felt glad. Such a small thing to do. Such a big, warm feeling inside.

Soon it was time to rest. The friend was smiling now. The {hero} was smiling too. Two friends, side by side.

{companion_name} gave a soft, sleepy nod. The {setting} grew quiet and dim.

The {hero} closed both eyes. Warm. Safe. Kind. And near a friend.

{refrain}.`,
    scriptTemplate: `{child_name} sat by {setting}. The evening was soft and slow. A friend sat close by. The friend looked sad. Very, very sad.

{child_name} noticed. {child_name} always noticed. But noticing made {child_name} worry. How could a small one help?

Maybe a big gift would help. Maybe a loud, happy song. Maybe a giant surprise with bells. {child_name} did not know what to do.

{companion_name} came near and sat down. {companion_name} carried the {object_motif}.

'You look worried,' {companion_name} said. 'What is wrong, little one?'

'My friend is sad,' said {child_name}. 'I want to help. But I am so small. I cannot do big, grand things.'

{companion_name} smiled a warm smile. 'You do not need big things. A small kindness can be enough. Sit close. Say one kind word. Stay near.'

{child_name} thought about that. Sit close. Say one kind word. Stay near. It sounded easy. It sounded good.

So {child_name} walked over softly. One small step. Then another. {child_name} sat right down. Right beside the friend. Close and quiet.

'I am here,' said {child_name}. 'I will stay with you.'

The friend looked up slowly. The friend blinked. A tiny smile began to grow.

{child_name} did not sing a loud song. {child_name} did not bring a giant gift. {child_name} just stayed. Warm and near and calm.

They sat together by {setting}. They watched the evening settle. The friend's shoulders felt less tight. The quiet was a kind quiet. They did not need many words at all.

After a while, the friend leaned over. 'Thank you for staying,' the friend said. 'I do not feel so alone now. I feel much better.'

{child_name} held the {object_motif} and felt glad. Such a small thing to do. Such a big, warm feeling inside.

Soon it was time to rest. The friend was smiling now. {child_name} was smiling too. Two friends, side by side.

{companion_name} gave a soft, sleepy nod. The {setting} grew quiet and dim.

{child_name} closed both eyes. Warm. Safe. Kind. And near a friend.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} sat at the edge of {setting}, watching the evening grow soft and gold. Nearby, a friend sat all alone, and something about them looked heavy and sad. Their head was down. Their hands were still.

The {hero} noticed right away. Noticing was easy. Knowing what to do was the hard part.

'I should help,' the {hero} thought. 'But how? Sad is such a big, heavy thing. Surely it needs a big, heavy fix — something grand enough to chase all that sadness away.'

The {hero} began to imagine grand ideas. A surprise party with lanterns. A basket piled high with treats. A song so loud and cheerful that the whole of {setting} would hear it. Each idea felt too big. Each one felt impossible. The {hero}'s shoulders sank lower and lower.

That was when {companion_name} wandered over, carrying the {object_motif}.

'You have your thinking face on,' {companion_name} said. 'A worried one. What is turning around in there?'

'My friend is sad,' the {hero} said. 'I want to make it better. But everything I think of is too big for me. I am not big enough to help.'

{companion_name} set the {object_motif} down and sat beside the {hero}.

'Helping is not about being big,' {companion_name} said gently. 'A small kindness can matter more than a grand one. Sit beside your friend. Say a warm word. Stay when it would be easier to leave. That is often the thing that helps most.'

The {hero} frowned a little. It seemed too easy. Too plain. Could something so small really do anything?

But the {hero} trusted {companion_name}. It felt strange to do something so small, but the {hero} decided to try. So, slowly, the {hero} stood up and walked across the soft ground to where the friend was sitting. Then, without a big speech, the {hero} simply sat down close beside them.

'I saw you were sad,' the {hero} said quietly. 'I did not want you to be by yourself. So I came to sit with you.'

The friend looked up, surprised. For a moment they said nothing. Then their eyes grew shiny, and they let out a long, slow breath, as if they had been holding it for a while.

'I did not think anyone had noticed,' the friend whispered. 'I felt so alone.'

'You are not alone,' the {hero} said. 'I am right here. I will stay.'

And that is what the {hero} did. No party. No basket. No loud song. The {hero} just stayed, shoulder to shoulder, while the evening settled around them. Sometimes they talked. Mostly they were quiet together. The quiet did not feel empty; it felt like company. And slowly, softly, the heavy look on the friend's face began to lift.

Time passed slowly and kindly. A small breeze moved across {setting}. The {hero} did not fill the silence with chatter. The {hero} only stayed close, so the friend would know, deep down, that someone cared enough to stay.

After a while, the friend gave a small, real smile. 'Thank you,' they said. 'I thought I needed something huge to feel better. But you sitting here is the thing that helped.'

The {hero} felt a warm glow spread all the way to their fingertips. It was such a small thing to do, sitting close and staying near. Yet it had done so much.

{companion_name} watched from a little way off and gave a slow, proud nod. The last of the daylight slipped away behind {setting}, soft and slow.

The friend leaned their head gently against the {hero}'s shoulder. 'Will you stay a little longer?' they asked.

'As long as you like,' the {hero} said.

And so the two friends sat together while {setting} grew calm and sleepy, and the worry drifted away like a leaf on quiet water.

{refrain}.`,
    scriptTemplate: `{child_name} sat at the edge of {setting}, watching the evening grow soft and gold. Nearby, a friend sat all alone, and something about them looked heavy and sad. Their head was down. Their hands were still.

{child_name} noticed right away. Noticing was easy. Knowing what to do was the hard part.

'I should help,' {child_name} thought. 'But how? Sad is such a big, heavy thing. Surely it needs a big, heavy fix — something grand enough to chase all that sadness away.'

{child_name} began to imagine grand ideas. A surprise party with lanterns. A basket piled high with treats. A song so loud and cheerful that the whole of {setting} would hear it. Each idea felt too big. Each one felt impossible. {child_name}'s shoulders sank lower and lower.

That was when {companion_name} wandered over, carrying the {object_motif}.

'You have your thinking face on,' {companion_name} said. 'A worried one. What is turning around in there?'

'My friend is sad,' {child_name} said. 'I want to make it better. But everything I think of is too big for me. I am not big enough to help.'

{companion_name} set the {object_motif} down and sat beside {child_name}.

'Helping is not about being big,' {companion_name} said gently. 'A small kindness can matter more than a grand one. Sit beside your friend. Say a warm word. Stay when it would be easier to leave. That is often the thing that helps most.'

{child_name} frowned a little. It seemed too easy. Too plain. Could something so small really do anything?

But {child_name} trusted {companion_name}. It felt strange to do something so small, but {child_name} decided to try. So, slowly, {child_name} stood up and walked across the soft ground to where the friend was sitting. Then, without a big speech, {child_name} simply sat down close beside them.

'I saw you were sad,' {child_name} said quietly. 'I did not want you to be by yourself. So I came to sit with you.'

The friend looked up, surprised. For a moment they said nothing. Then their eyes grew shiny, and they let out a long, slow breath, as if they had been holding it for a while.

'I did not think anyone had noticed,' the friend whispered. 'I felt so alone.'

'You are not alone,' {child_name} said. 'I am right here. I will stay.'

And that is what {child_name} did. No party. No basket. No loud song. {child_name} just stayed, shoulder to shoulder, while the evening settled around them. Sometimes they talked. Mostly they were quiet together. The quiet did not feel empty; it felt like company. And slowly, softly, the heavy look on the friend's face began to lift.

Time passed slowly and kindly. A small breeze moved across {setting}. {child_name} did not fill the silence with chatter. {child_name} only stayed close, so the friend would know, deep down, that someone cared enough to stay.

After a while, the friend gave a small, real smile. 'Thank you,' they said. 'I thought I needed something huge to feel better. But you sitting here is the thing that helped.'

{child_name} felt a warm glow spread all the way to their fingertips. It was such a small thing to do, sitting close and staying near. Yet it had done so much.

{companion_name} watched from a little way off and gave a slow, proud nod. The last of the daylight slipped away behind {setting}, soft and slow.

The friend leaned their head gently against {child_name}'s shoulder. 'Will you stay a little longer?' they asked.

'As long as you like,' {child_name} said.

And so the two friends sat together while {setting} grew calm and sleepy, and the worry drifted away like a leaf on quiet water.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The day had been a long one at {setting}, and now the light was turning the colour of honey. The {hero} was on the way home when a small movement caught the {hero}'s eye. Off to the side, half hidden behind a rise, sat a friend — knees pulled up, chin resting on them, staring at nothing at all.

The {hero} stopped. Something was wrong. The friend had lost the afternoon's game, the {hero} remembered, and had gone quiet afterward — the kind of quiet that means a person is trying very hard not to cry.

The {hero} knew that feeling. Losing in front of everyone, then having to walk away as if it did not matter, when really it mattered a lot. The friend had not said a word since. That silence was the loudest part.

I should do something, the {hero} thought. But what? A worry crept in right behind the wish to help. Helping felt like it needed to be big. Maybe the {hero} should organize a rematch, or gather everyone to cheer the friend up, or find the perfect words that would make all the sadness vanish at once. Perhaps a gift would do it, or a joke funny enough to break the mood, or a promise to practise together every single day. Every idea felt enormous, and the {hero} did not have a single one that seemed good enough.

The {hero} took one step forward, then stopped. What if the wrong words made it worse? What if sitting there just felt awkward? The bigger the {hero} tried to make the help, the more impossible it became.

So the {hero} just stood there, stuck, until a familiar voice spoke from nearby.

'You have been standing very still for a while now,' said {companion_name}, stepping up beside the {hero} with the {object_motif} tucked close. 'I can almost hear you thinking.'

'It is my friend,' the {hero} admitted. 'They lost today, and now they are sitting all alone, and they look so sad. I want to help. But I cannot think of anything big enough. Everything I imagine is either too much or not enough.'

{companion_name} was quiet for a breath, looking over at the lonely shape on the hill.

'When I feel like that,' {companion_name} said slowly, 'I do not want a crowd or a clever plan. I just want to know I am not alone. A small kindness can reach a person when a grand gesture would only crowd them. Go and sit with your friend. That is enough.'

The {hero} looked doubtful. 'Just sit there? That does not feel like doing anything.'

'Sitting with someone is doing something,' {companion_name} said. 'Try it, and watch.'

So the {hero} climbed the little rise, the grass whispering underfoot, and sat down beside the friend without a word. For a moment the {hero} said nothing at all. Then, softly: 'I saw you sitting here. I did not want you to be by yourself, so I came to sit too.'

The friend did not answer straight away. But the {hero} noticed something: the friend's shoulders, which had been up near their ears, came down just a little. After a long moment, the friend spoke in a small voice.

'I thought everyone had already forgotten about me,' the friend said. 'I thought I would have to sit here by myself until it got dark. It felt like the game was the only thing anyone would remember about me.'

'You do not have to sit here by yourself,' the {hero} said. 'I am not going anywhere.'

For a while they just sat. The {hero} did not try to fix anything or explain the game away. When the friend picked at a blade of grass, the {hero} picked one too. When the friend sighed, the {hero} stayed steady and near.

'It is silly to be this upset over a game,' the friend said at last. The {hero} shook their head. 'It is not silly. You wanted to do well. That matters.' The friend was quiet, then nodded, as if those few plain words had loosened something tight.

And that was the whole of it. No rematch. No crowd. No perfect speech. Just the two of them on the rise, side by side, while {setting} settled into evening. They talked a little — about the game, and then about nothing much — and in between they were simply quiet together. Bit by bit, the friend's voice grew lighter, and once, near the end, they even laughed.

'Do you want to walk back together?' the {hero} asked after a while. The friend thought about it. 'In a minute,' they said. 'I like it here for now.' So they stayed a minute more, and then another, in no rush at all.

'Thank you for staying,' the friend said as the first cool air of night drifted in. 'I kept thinking I needed some big cheering-up. But this was better. You just being here made the whole thing feel smaller. I am glad it was you who came,' they added. 'You did not make a big fuss. You just stayed.'

The {hero} held the {object_motif} loosely and felt something settle inside — a quiet, glad steadiness, like a knot coming undone.

Down the hill, {companion_name} was watching, and gave the smallest nod, the kind that says: you did well. Above {setting}, the sky deepened from gold to blue, and neither friend felt any hurry to move. Somewhere down below, a night bird called once and then went quiet, and the evening held them both.

{refrain}.`,
    scriptTemplate: `The day had been a long one at {setting}, and now the light was turning the colour of honey. {child_name} was on the way home when a small movement caught {child_name}'s eye. Off to the side, half hidden behind a rise, sat a friend — knees pulled up, chin resting on them, staring at nothing at all.

{child_name} stopped. Something was wrong. The friend had lost the afternoon's game, {child_name} remembered, and had gone quiet afterward — the kind of quiet that means a person is trying very hard not to cry.

{child_name} knew that feeling. Losing in front of everyone, then having to walk away as if it did not matter, when really it mattered a lot. The friend had not said a word since. That silence was the loudest part.

I should do something, {child_name} thought. But what? A worry crept in right behind the wish to help. Helping felt like it needed to be big. Maybe {child_name} should organize a rematch, or gather everyone to cheer the friend up, or find the perfect words that would make all the sadness vanish at once. Perhaps a gift would do it, or a joke funny enough to break the mood, or a promise to practise together every single day. Every idea felt enormous, and {child_name} did not have a single one that seemed good enough.

{child_name} took one step forward, then stopped. What if the wrong words made it worse? What if sitting there just felt awkward? The bigger {child_name} tried to make the help, the more impossible it became.

So {child_name} just stood there, stuck, until a familiar voice spoke from nearby.

'You have been standing very still for a while now,' said {companion_name}, stepping up beside {child_name} with the {object_motif} tucked close. 'I can almost hear you thinking.'

'It is my friend,' {child_name} admitted. 'They lost today, and now they are sitting all alone, and they look so sad. I want to help. But I cannot think of anything big enough. Everything I imagine is either too much or not enough.'

{companion_name} was quiet for a breath, looking over at the lonely shape on the hill.

'When I feel like that,' {companion_name} said slowly, 'I do not want a crowd or a clever plan. I just want to know I am not alone. A small kindness can reach a person when a grand gesture would only crowd them. Go and sit with your friend. That is enough.'

{child_name} looked doubtful. 'Just sit there? That does not feel like doing anything.'

'Sitting with someone is doing something,' {companion_name} said. 'Try it, and watch.'

So {child_name} climbed the little rise, the grass whispering underfoot, and sat down beside the friend without a word. For a moment {child_name} said nothing at all. Then, softly: 'I saw you sitting here. I did not want you to be by yourself, so I came to sit too.'

The friend did not answer straight away. But {child_name} noticed something: the friend's shoulders, which had been up near their ears, came down just a little. After a long moment, the friend spoke in a small voice.

'I thought everyone had already forgotten about me,' the friend said. 'I thought I would have to sit here by myself until it got dark. It felt like the game was the only thing anyone would remember about me.'

'You do not have to sit here by yourself,' {child_name} said. 'I am not going anywhere.'

For a while they just sat. {child_name} did not try to fix anything or explain the game away. When the friend picked at a blade of grass, {child_name} picked one too. When the friend sighed, {child_name} stayed steady and near.

'It is silly to be this upset over a game,' the friend said at last. {child_name} shook their head. 'It is not silly. You wanted to do well. That matters.' The friend was quiet, then nodded, as if those few plain words had loosened something tight.

And that was the whole of it. No rematch. No crowd. No perfect speech. Just the two of them on the rise, side by side, while {setting} settled into evening. They talked a little — about the game, and then about nothing much — and in between they were simply quiet together. Bit by bit, the friend's voice grew lighter, and once, near the end, they even laughed.

'Do you want to walk back together?' {child_name} asked after a while. The friend thought about it. 'In a minute,' they said. 'I like it here for now.' So they stayed a minute more, and then another, in no rush at all.

'Thank you for staying,' the friend said as the first cool air of night drifted in. 'I kept thinking I needed some big cheering-up. But this was better. You just being here made the whole thing feel smaller. I am glad it was you who came,' they added. 'You did not make a big fuss. You just stayed.'

{child_name} held the {object_motif} loosely and felt something settle inside — a quiet, glad steadiness, like a knot coming undone.

Down the hill, {companion_name} was watching, and gave the smallest nod, the kind that says: you did well. Above {setting}, the sky deepened from gold to blue, and neither friend felt any hurry to move. Somewhere down below, a night bird called once and then went quiet, and the evening held them both.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There is a particular kind of quiet that means someone is not all right, and the {hero} had learned to hear it. So when the {hero} came over the last rise toward {setting} that evening and saw a friend sitting apart from everyone, half turned away, that quiet reached the {hero} before a single word did.

The {hero} already knew why. All week the friend had talked about the thing they were hoping for — a chance they had wanted badly, had practised for, had let themselves believe in. And today the answer had come, and it had been no. Not cruelly. Just no. The friend had smiled a thin smile and said it was fine, and then, when they thought no one was looking, had drifted off to sit alone.

What made it worse was that the friend had been so brave about it. That thin, careful smile — the {hero} recognised it. It was the smile people wear when they are holding themselves together with both hands, and it was somehow harder to watch than tears would have been.

The {hero} wanted, more than anything, to make it better. But wanting it so much was exactly the problem. The stronger the wish grew, the bigger the help seemed to need to be — as if only something grand could match how much the friend was hurting. The {hero} began, almost without meaning to, to build enormous plans.

A speech, maybe — the perfect string of words that would turn the whole day around. Or a grand surprise, something so generous the friend could not possibly stay sad. Or a promise to fix the situation entirely, to somehow make the no become a yes. Each plan rose up shining and then collapsed, because none of them were things the {hero} could actually do. And underneath the plans ran a colder thought: if the {hero} could not do something big, then maybe the {hero} was not a good enough friend at all. It was a familiar, unfair little voice, and this evening it was very loud.

For a moment the {hero} actually took a step in the friend's direction, then hesitated. What if going over there empty-handed, with no plan and no gift and no clever words, only made the friend feel more alone? The fear of doing the wrong thing was quietly talking the {hero} out of doing anything at all.

'That is a very heavy silence you are carrying.' {companion_name} had come up beside the {hero} without a sound, the {object_motif} held loosely in one hand. 'I have been watching you not-quite-walk over there for a while now.'

'I do not know what to do,' the {hero} admitted, and it was a relief to say it out loud. 'They wanted this so much, and they did not get it, and now they are sitting over there feeling awful. I keep trying to think of something big enough to make it right. But everything I come up with is either impossible or not nearly enough. And if I cannot do anything big, what use am I?'

{companion_name} did not answer right away. They looked over at the friend on the hill, and then back at the {hero}, with an expression that was gentle but very serious.

'Here is the part that is hard to believe, so I will just tell you plainly. The big gestures you are dreaming up are mostly for you — they would prove you tried hard. But the thing your friend actually needs is smaller and quieter. A small kindness, offered without any show, often reaches deeper than the grandest gesture, because it asks nothing back. Go and sit with them. Do not fix it. Do not perform. Just be someone who stayed.'

The {hero} turned the idea over, and found it strangely difficult — not because it was complicated, but because it was so simple it felt like cheating. 'Just sitting there,' the {hero} said slowly, 'feels like giving up. Like admitting I could not think of anything better.'

{companion_name} smiled, just slightly. 'I know it does. Try it anyway, and pay attention to your friend's face.'

So the {hero} went. Each step up the slope felt heavier than it should have, weighed down by the certainty that this was not enough. When the {hero} reached the friend, there was no grand speech ready, no perfect plan — only a person who had decided to come over. So the {hero} sat down on the grass beside them, close but not crowding, and for a little while said nothing at all.

When the {hero} finally spoke, it was not a speech. It was just the truth. 'I know how much you wanted it,' the {hero} said quietly. 'I am really sorry it went the way it did. I did not want you sitting up here on your own, so I came to sit with you.'

For a moment the friend did not respond, and the {hero} felt the old worry flare — maybe this really was not enough, maybe the {hero} should have done more. But then the friend's shoulders dropped, all at once, as though a held breath had finally been let go. When they spoke, their voice was rough at the edges.

'Everyone kept telling me it was fine,' the friend said. 'That there would be other chances. And maybe there will. But I did not want to be told it was fine. I just wanted someone to sit here and let it not be fine for a minute.'

The {hero} nodded, and did not argue, and did not rush to promise that everything would be okay. That was hard, in its way — the {hero} could feel all the reassuring words pressing to get out, all the it-will-get-betters and you-will-have-other-chances. But the friend had just said, plainly, that those were not the words they needed. So the {hero} swallowed them and stayed quiet instead, which turned out to be its own kind of gift.

'Then we can do that,' the {hero} said. 'We can let it not be fine for as long as you want.' And so they did. They sat together while the light drained slowly out of the sky and {setting} went soft and dim around them. The {hero} did not try to cheer the friend up or explain away the disappointment. Now and then they talked; mostly they were quiet. At one point the {hero} passed the friend the {object_motif} to hold, simply because it was a comforting thing to hold, and the friend turned it over in their hands and held on.

Time stretched out, unhurried. A breeze came and went across {setting}. The {hero} noticed small things — the way the friend's breathing slowly evened out, the way their grip on the {object_motif} loosened as the minutes passed. None of it was dramatic. None of it would have made a good story to tell later. And yet the {hero} understood, sitting there, that something was quietly mending.

Somewhere in that quiet, without any announcement, the worst of the ache seemed to loosen its grip. Not because it was fixed — the answer was still no, and would still be no tomorrow — but because the friend no longer had to carry it alone.

Later, when the friend finally spoke again, there was something steadier in their voice. 'Thank you for not making a big deal of it,' they said. 'If you had thrown some huge cheering-up thing at me, I think I would have had to pretend to feel better before I actually did. You just sitting here let me feel exactly as bad as I felt. That helped more than you know.'

After a while, the friend let out a breath that was almost a laugh — not because anything was funny, but because something had eased. 'I probably needed this more than I needed to win,' they said, and then, quieter, 'do not tell anyone I said that.' The {hero} smiled and promised they would not.

The {hero} did not say anything clever back. There was nothing that needed adding. The {hero} simply stayed, shoulder warm against the friend's shoulder, and felt something quiet and certain take root inside — a sense of being exactly where they were meant to be.

Down below, {companion_name} watched the two friends sitting together against the darkening {setting}, and did not call them in. Some things were better left unhurried. The evening folded gently around the hill, and neither friend moved to break it. One by one, the first stars found their places overhead, patient and unremarkable, and the two friends stayed beneath them, in no hurry to be anywhere else.

{refrain}.`,
    scriptTemplate: `There is a particular kind of quiet that means someone is not all right, and {child_name} had learned to hear it. So when {child_name} came over the last rise toward {setting} that evening and saw a friend sitting apart from everyone, half turned away, that quiet reached {child_name} before a single word did.

{child_name} already knew why. All week the friend had talked about the thing they were hoping for — a chance they had wanted badly, had practised for, had let themselves believe in. And today the answer had come, and it had been no. Not cruelly. Just no. The friend had smiled a thin smile and said it was fine, and then, when they thought no one was looking, had drifted off to sit alone.

What made it worse was that the friend had been so brave about it. That thin, careful smile — {child_name} recognised it. It was the smile people wear when they are holding themselves together with both hands, and it was somehow harder to watch than tears would have been.

{child_name} wanted, more than anything, to make it better. But wanting it so much was exactly the problem. The stronger the wish grew, the bigger the help seemed to need to be — as if only something grand could match how much the friend was hurting. {child_name} began, almost without meaning to, to build enormous plans.

A speech, maybe — the perfect string of words that would
turn the whole day around. Or a grand surprise, something so generous the friend could not possibly stay sad. Or a promise to fix the situation entirely, to somehow make the no become a yes. Each plan rose up shining and then collapsed, because none of them were things {child_name} could actually do. And underneath the plans ran a colder thought: if {child_name} could not do something big, then maybe {child_name} was not a good enough friend at all. It was a familiar, unfair little voice, and this evening it was very loud.

For a moment {child_name} actually took a step in the friend's direction, then hesitated. What if going over there empty-handed, with no plan and no gift and no clever words, only made the friend feel more alone? The fear of doing the wrong thing was quietly talking {child_name} out of doing anything at all.

'That is a very heavy silence you are carrying.' {companion_name} had come up beside {child_name} without a sound, the {object_motif} held loosely in one hand. 'I have been watching you not-quite-walk over there for a while now.'

'I do not know what to do,' {child_name} admitted, and it was a relief to say it out loud. 'They wanted this so much, and they did not get it, and now they are sitting over there feeling awful. I keep trying to think of something big enough to make it right. But everything I come up with is either impossible or not nearly enough. And if I cannot do anything big, what use am I?'

{companion_name} did not answer right away. They looked over at the friend on the hill, and then back at {child_name}, with an expression that was gentle but very serious.

'Here is the part that is hard to believe, so I will just tell you plainly. The big gestures you are dreaming up are mostly for you — they would prove you tried hard. But the thing your friend actually needs is smaller and quieter. A small kindness, offered without any show, often reaches deeper than the grandest gesture, because it asks nothing back. Go and sit with them. Do not fix it. Do not perform. Just be someone who stayed.'

{child_name} turned the idea over, and found it strangely difficult — not because it was complicated, but because it was so simple it felt like cheating. 'Just sitting there,' {child_name} said slowly, 'feels like giving up. Like admitting I could not think of anything better.'

{companion_name} smiled, just slightly. 'I know it does. Try it anyway, and pay attention to your friend's face.'

So {child_name} went. Each step up the slope felt heavier than it should have, weighed down by the certainty that this was not enough. When {child_name} reached the friend, there was no grand speech ready, no perfect plan — only a person who had decided to come over. So {child_name} sat down on the grass beside them, close but not crowding, and for a little while said nothing at all.

When {child_name} finally spoke, it was not a speech. It was just the truth. 'I know how much you wanted it,' {child_name} said quietly. 'I am really sorry it went the way it did. I did not want you sitting up here on your own, so I came to sit with you.'

For a moment the friend did not respond, and {child_name} felt the old worry flare — maybe this really was not enough, maybe {child_name} should have done more. But then the friend's shoulders dropped, all at once, as though a held breath had finally been let go. When they spoke, their voice was rough at the edges.

'Everyone kept telling me it was fine,' the friend said. 'That there would be other chances. And maybe there will. But I did not want to be told it was fine. I just wanted someone to sit here and let it not be fine for a minute.'

{child_name} nodded, and did not argue, and did not rush to promise that everything would be okay. That was hard, in its way — {child_name} could feel all the reassuring words pressing to get out, all the it-will-get-betters and you-will-have-other-chances. But the friend had just said, plainly, that those were not the words they needed. So {child_name} swallowed them and stayed quiet instead, which turned out to be its own kind of gift.

'Then we can do that,' {child_name} said. 'We can let it not be fine for as long as you want.' And so they did. They sat together while the light drained slowly out of the sky and {setting} went soft and dim around them. {child_name} did not try to cheer the friend up or explain away the disappointment. Now and then they talked; mostly they were quiet. At one point {child_name} passed the friend the {object_motif} to hold, simply because it was a comforting thing to hold, and the friend turned it over in their hands and held on.

Time stretched out, unhurried. A breeze came and went across {setting}. {child_name} noticed small things — the way the friend's breathing slowly evened out, the way their grip on the {object_motif} loosened as the minutes passed. None of it was dramatic. None of it would have made a good story to tell later. And yet {child_name} understood, sitting there, that something was quietly mending.

Somewhere in that quiet, without any announcement, the worst of the ache seemed to loosen its grip. Not because it was fixed — the answer was still no, and would still be no tomorrow — but because the friend no longer had to carry it alone.

Later, when the friend finally spoke again, there was something steadier in their voice. 'Thank you for not making a big deal of it,' they said. 'If you had thrown some huge cheering-up thing at me, I think I would have had to pretend to feel better before I actually did. You just sitting here let me feel exactly as bad as I felt. That helped more than you know.'

After a while, the friend let out a breath that was almost a laugh — not because anything was funny, but because something had eased. 'I probably needed this more than I needed to win,' they said, and then, quieter, 'do not tell anyone I said that.' {child_name} smiled and promised they would not.

{child_name} did not say anything clever back. There was nothing that needed adding. {child_name} simply stayed, shoulder warm against the friend's shoulder, and felt something quiet and certain take root inside — a sense of being exactly where they were meant to be.

Down below, {companion_name} watched the two friends sitting together against the darkening {setting}, and did not call them in. Some things were better left unhurried. The evening folded gently around the hill, and neither friend moved to break it. One by one, the first stars found their places overhead, patient and unremarkable, and the two friends stayed beneath them, in no hurry to be anywhere else.

{refrain}.`
  }
},
    audioTemplate: `The {object_motif} glowed steadily in {setting}, and the {hero} remembered the quiet, sad friend from before.

"I want to help," said the {hero}, "but I do not have anything big to give."

{companion_name} smiled. "Who told you kindness must be big? Watch what small can do."

So the {hero} simply went and sat beside the sad friend. Said a soft hello. Stayed a while, quietly, so they would not be alone.

And slowly, the friend's shoulders lifted. A tiny smile returned.

"That was not big," said the {hero}, surprised.

"It was exactly the right size," said {companion_name}. "A small kindness, given when it is noticed, is the warmest thing there is. You do not need more than that."

The {object_motif} brightened, and so did the night.

The {hero} understood now: kindness was never about how big. It was about being there.

{refrain}.`,
    scriptTemplate: `The {object_motif} glowed steadily in {setting}, and {child_name} the {hero} remembered the quiet, sad friend from before.

"I want to help," said {child_name}, "but I do not have anything big to give."

{companion_name} smiled. "Who told you kindness must be big, {child_name}? Watch what small can do."

So {child_name} simply went and sat beside the sad friend. Said a soft hello. Stayed a while, quietly, so they would not be alone.

And slowly, the friend's shoulders lifted. A tiny smile returned.

"That was not big," said {child_name}, surprised.

"It was exactly the right size," said {companion_name}. "A small kindness, given when it is noticed, is the warmest thing there is. You do not need more than that."

The {object_motif} brightened, and so did the night.

{child_name} understood now: kindness was never about how big. It was about being there.

{refrain}.`,
  },

  {
    ordinal: 3, title: "Walking in Someone's Shoes",
    concept: 'Imagining how another person feels', callback: 'Noticing how others feel (Level 1)', ageFloor: 4,
    summary: 'When the hero does not understand why a friend acted unkindly, their companion teaches them to imagine being that friend — to walk in their shoes. It revisits Level 1: noticing the outside, then imagining the inside.',
    teachingNote: 'Perspective-taking — imagining another\'s inner world — is the heart of empathy and the antidote to quick judgement.',
    learningBeat: "walking in someone's shoes",
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} played by {setting}. The sky was soft. The day was slow and warm.

A bigger kid was there too. The bigger kid stood alone. The bigger kid did not smile.

The {hero} waved. "Hello!" said the {hero}. "Hello, hello!"

The bigger kid turned away. The bigger kid said nothing. Not one word.

The {hero} felt sad. The {hero} felt small. Why was the bigger kid so cold?

The {hero} sat down alone. The {hero} looked at the ground. It did not feel fair.

The {hero} went to {companion_name}. {companion_name} was kind. {companion_name} was calm.

"I said hello," said the {hero}. "The bigger kid walked away. That felt cold."

{companion_name} sat down close. "Let us try something," said {companion_name}. "Close your eyes. Think about walking in someone's shoes."

The {hero} closed both eyes. The {hero} thought and thought.

What if the bigger kid was new? What if the bigger kid was scared? What if the bigger kid missed home? What if the bigger kid felt small too? What if the bigger kid was shy? What if the bigger kid wanted a friend?

The {hero} opened both eyes. "Maybe they feel sad," said the {hero}. "Maybe they feel scared."

{companion_name} smiled soft and slow. "First we see the outside. Then we feel the inside."

The {hero} held the {object_motif}. The {hero} felt warm. The {hero} felt brave.

The {hero} walked back. Slow steps. Soft steps. The {hero} sat near the bigger kid.

"Do you want to play?" said the {hero}. "You can hold the {object_motif}. We can share it."

The bigger kid looked up. The bigger kid was quiet. Then the bigger kid gave a tiny nod.

"I am new here," said the bigger kid. "I did not know anyone. Not one friend."

"Now you know me," said the {hero}. "Now you have a friend."

The bigger kid smiled. A small smile. Then a big smile.

They played by {setting}. They shared the {object_motif}. They ran. They laughed. They dug in the sand. They chased each other. They played and played.

The sky turned pink. Then orange. Then soft and dark.

The moon came up over {setting}. Round and soft and silver. The {hero} gave a big, happy yawn. The bigger kid yawned too.

{refrain}.`,
    scriptTemplate: `{child_name} played by {setting}. The sky was soft. The day was slow and warm.

A bigger kid was there too. The bigger kid stood alone. The bigger kid did not smile.

{child_name} waved. "Hello!" said {child_name}. "Hello, hello!"

The bigger kid turned away. The bigger kid said nothing. Not one word.

{child_name} felt sad. {child_name} felt small. Why was the bigger kid so cold?

{child_name} sat down alone. {child_name} looked at the ground. It did not feel fair.

{child_name} went to {companion_name}. {companion_name} was kind. {companion_name} was calm.

"I said hello," said {child_name}. "The bigger kid walked away. That felt cold."

{companion_name} sat down close. "Let us try something," said {companion_name}. "Close your eyes. Think about walking in someone's shoes."

{child_name} closed both eyes. {child_name} thought and thought.

What if the bigger kid was new? What if the bigger kid was scared? What if the bigger kid missed home? What if the bigger kid felt small too? What if the bigger kid was shy? What if the bigger kid wanted a friend?

{child_name} opened both eyes. "Maybe they feel sad," said {child_name}. "Maybe they feel scared."

{companion_name} smiled soft and slow. "First we see the outside. Then we feel the inside."

{child_name} held the {object_motif}. {child_name} felt warm. {child_name} felt brave.

{child_name} walked back. Slow steps. Soft steps. {child_name} sat near the bigger kid.

"Do you want to play?" said {child_name}. "You can hold the {object_motif}. We can share it."

The bigger kid looked up. The bigger kid was quiet. Then the bigger kid gave a tiny nod.

"I am new here," said the bigger kid. "I did not know anyone. Not one friend."

"Now you know me," said {child_name}. "Now you have a friend."

The bigger kid smiled. A small smile. Then a big smile.

They played by {setting}. They shared the {object_motif}. They ran. They laughed. They dug in the sand. They chased each other. They played and played.

The sky turned pink. Then orange. Then soft and dark.

The moon came up over {setting}. Round and soft and silver. {child_name} gave a big, happy yawn. The bigger kid yawned too.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} loved mornings by {setting}. The air was cool and the light was new, and there was always someone to play with.

That day, a new kid had set up nearby, someone the {hero} had never seen before. The {hero} liked meeting new people, so they walked right over.

"Hello!" called the {hero}, waving both hands. "Do you want to play?"

The new kid barely looked up. They frowned, turned their shoulder, and said nothing at all. Then they moved a few steps farther away, as if the {hero} was not even there.

The {hero} stood very still. Their cheeks went hot and their tummy felt funny. That was rude. That was cold. Why would anyone act like that when you were only being friendly?

Cross and confused, the {hero} went to find {companion_name}, who was resting nearby and had seen the whole thing.

"They ignored me," the {hero} said, sitting down with a thump. "I only said hello. I did not do anything wrong."

{companion_name} patted the ground. "Sit here a moment. When someone hurts our feelings, we make up a reason very fast. Usually the reason we pick is, they are just mean. But before you decide that, try walking in someone's shoes."

"What does that mean?" asked the {hero}.

"It means you pretend to be them," said {companion_name}. "Close your eyes. Pretend you woke up this morning as that new kid. What might your whole day have felt like?"

The {hero} closed their eyes and really tried to imagine it. What if the new kid did not know a single face here? What if everyone already had their friends, and nobody had one spare for them? What if they had left every single friend behind when they came to this new place? What if their tummy was in knots because everything looked strange and big?

Slowly, the hot, cross feeling turned into something softer and kinder.

"Maybe they are not mean at all," the {hero} said, opening their eyes. "Maybe they are just scared. New places are scary. I would be scared too."

{companion_name} nodded warmly. "Remember, in Level One you learned to notice how others feel just by looking at them. This is the next step. Imagine the inside."

The {hero} held the {object_motif} and thought hard about what to do. Then they got up and walked over, slow and gentle this time, and sat down a little way off, not too close.

"I get nervous in new places too," said the {hero} softly. "You do not have to play if you do not want. I can just sit here with you."

The new kid glanced sideways. For a long moment they said nothing. Then their shoulders dropped, just a little, like they were letting go of something heavy.

"I do not know how anything works here," they mumbled. "Everyone already has a friend but me."

"I can show you how it works," the {hero} said gently. "And you can borrow the {object_motif} if you like."

The new kid took it carefully, turning it over in their hands, and something in their face opened up, like a window that had been stuck.

"I thought nobody would want a stranger around," they said, very quiet.

"I almost walked away too," the {hero} admitted. "I am really glad I came back."

So they played together by {setting} until the light turned soft and gold. They built things and knocked them down and built them again. The new kid laughed once, then twice, then too many times to count. By the end, they had shuffled so close that they sat side by side, shoulder to shoulder.

"Thank you for trying again," the new kid said. "Most people just walk off and leave me."

The {hero} smiled. Behind them, a lantern flicked on, warm and yellow against the dusk, and the water went calm and quiet and dark.

{refrain}.`,
    scriptTemplate: `{child_name} loved mornings by {setting}. The air was cool and the light was new, and there was always someone to play with.

That day, a new kid had set up nearby, someone {child_name} had never seen before. {child_name} liked meeting new people, so they walked right over.

"Hello!" called {child_name}, waving both hands. "Do you want to play?"

The new kid barely looked up. They frowned, turned their shoulder, and said nothing at all. Then they moved a few steps farther away, as if {child_name} was not even there.

{child_name} stood very still. Their cheeks went hot and their tummy felt funny. That was rude. That was cold. Why would anyone act like that when you were only being friendly?

Cross and confused, {child_name} went to find {companion_name}, who was resting nearby and had seen the whole thing.

"They ignored me," {child_name} said, sitting down with a thump. "I only said hello. I did not do anything wrong."

{companion_name} patted the ground. "Sit here a moment. When someone hurts our feelings, we make up a reason very fast. Usually the reason we pick is, they are just mean. But before you decide that, try walking in someone's shoes."

"What does that mean?" asked {child_name}.

"It means you pretend to be them," said {companion_name}. "Close your eyes. Pretend you woke up this morning as that new kid. What might your whole day have felt like?"

{child_name} closed their eyes and really tried to imagine it. What if the new kid did not know a single face here? What if everyone already had their friends, and nobody had one spare for them? What if they had left every single friend behind when they came to this new place? What if their tummy was in knots because everything looked strange and big?

Slowly, the hot, cross feeling turned into something softer and kinder.

"Maybe they are not mean at all," {child_name} said, opening their eyes. "Maybe they are just scared. New places are scary. I would be scared too."

{companion_name} nodded warmly. "Remember, in Level One you learned to notice how others feel just by looking at them. This is the next step. Imagine the inside."

{child_name} held the {object_motif} and thought hard about what to do. Then they got up and walked over, slow and gentle this time, and sat down a little way off, not too close.

"I get nervous in new places too," said {child_name} softly. "You do not have to play if you do not want. I can just sit here with you."

The new kid glanced sideways. For a long moment they said nothing. Then their shoulders dropped, just a little, like they were letting go of something heavy.

"I do not know how anything works here," they mumbled. "Everyone already has a friend but me."

"I can show you how it works," {child_name} said gently. "And you can borrow the {object_motif} if you like."

The new kid took it carefully, turning it over in their hands, and something in their face opened up, like a window that had been stuck.

"I thought nobody would want a stranger around," they said, very quiet.

"I almost walked away too," {child_name} admitted. "I am really glad I came back."

So they played together by {setting} until the light turned soft and gold. They built things and knocked them down and built them again. The new kid laughed once, then twice, then too many times to count. By the end, they had shuffled so close that they sat side by side, shoulder to shoulder.

"Thank you for trying again," the new kid said. "Most people just walk off and leave me."

{child_name} smiled. Behind them, a lantern flicked on, warm and yellow against the dusk, and the water went calm and quiet and dark.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} had been looking forward to the fair by {setting} all week long. There would be games, and trading tables, and best of all, a chance to meet a kid the {hero} had been hoping to befriend for ages, someone everyone said was the cleverest builder for miles around.

When the {hero} finally spotted them, sitting behind a table of half-finished creations, they hurried straight over, grinning from ear to ear.

"Hi! I have heard so much about you," said the {hero}. "Do you want to build something together? I have loads of ideas."

The other kid did not even turn around. "No," they said flatly. "I work alone."

The {hero} blinked, caught off guard. "Oh. Okay. Well, maybe I could just watch, then?"

"I would rather you did not," the kid said, and shifted so their back was fully turned, like a door closing in the {hero}'s face.

Heat crept up the {hero}'s neck and prickled behind their eyes. They mumbled something and walked away fast, weaving between the stalls, not stopping until they reached the far end of {setting}, where {companion_name} was calmly untangling a long length of rope.

"What is wrong?" {companion_name} asked, setting the rope down at once.

"I tried to be friendly and they were horrible to me," the {hero} said, and the words came out wobbly. "I did not do a single thing to them. Why would somebody be so mean for no reason at all?"

{companion_name} did not answer right away. They thought for a moment, then asked, "Do you remember Level One, learning to notice how someone feels just by looking at them?"

The {hero} sniffed. "Their face was closed up tight," they admitted. "Kind of like a door slamming shut."

"That is good noticing," said {companion_name}. "Now comes the harder part. I want you to try walking in someone's shoes. Do not guess what they think about you. Instead, imagine their whole morning, from the inside."

The {hero} frowned, uncertain, then shut their eyes and gave it a proper try. They pictured being the clever builder. They pictured being famous for one single thing. They pictured everyone crowding around every single day, expecting something amazing, over and over. They pictured never being quite sure whether people liked you, or only liked the things you could make for them. They pictured how it might feel to have friends who wandered off the very moment you had nothing left to give them.

When the {hero} opened their eyes, the hot, angry feeling had quietly drained away.

"If everyone only ever wanted my building," the {hero} said slowly, "and nobody ever wanted just me, then I think I might be scared to let anyone get close. In case they only wanted that too."

{companion_name} nodded. "That is real work you just did, and it is not at all easy."

The {hero} turned the {object_motif} over and over in their hands, thinking it through. For a moment they almost did not go. It would be easier to stay cross, easier to decide the builder was simply horrible and forget the whole thing. But the picture in their head would not leave them alone. Then they made up their mind.

They walked back across the fair, not fast and not grinning this time, and sat down a respectful distance from the builder. They did not ask to build anything. They did not ask for a single thing.

"You do not have to talk to me," the {hero} said quietly. "I just think it looks nice and peaceful over on this side."

For a long while the builder ignored them completely, hands busy, eyes down. The {hero} did not push. They simply waited, calm, watching the clouds drift over {setting}.

At last the builder spoke, without looking up. "Everyone always wants me to make them something. Every day. All the time."

"I bet that gets really tiring," said the {hero}.

The builder's hands went still. "It does," they said, so quietly it was almost a whisper. "Nobody ever just, sits. Nobody ever wants the plain old me." A breeze moved across the tables, and somewhere behind them a bell rang for the next game.

"I can sit," said the {hero}. "You can hold the {object_motif} for a while if you like. No building required, I promise."

The builder took it and turned it slowly, and bit by bit some of the tightness went out of their shoulders.

"Sorry I was so sharp with you before," they said. "I thought you wanted me to make you something clever for free. People usually do. It gets lonely."

"I almost decided you were just plain mean," the {hero} admitted. "I am really glad I waited instead."

So they sat together as the fair glittered and hummed all around {setting}. After a while, without anyone asking at all, the builder began, shyly, to show the {hero} exactly how the little pieces fit together, not because they had to, but because, for once, they wanted to. The {hero} watched the careful, clever way the builder's hands moved, and understood that the sharp words at the very start had been a kind of wall, thrown up in a hurry, to keep out one more person who might only want something from them.

By the time the lanterns began to dim, the two of them had made a plan to meet again the very next day.

The {hero} walked home tired and full, the kind of full that has nothing at all to do with dinner.

{refrain}.`,
    scriptTemplate: `{child_name} had been looking forward to the fair by {setting} all week long. There would be games, and trading tables, and best of all, a chance to meet a kid {child_name} had been hoping to befriend for ages, someone everyone said was the cleverest builder for miles around.

When {child_name} finally spotted them, sitting behind a table of half-finished creations, they hurried straight over, grinning from ear to ear.

"Hi! I have heard so much about you," said {child_name}. "Do you want to build something together? I have loads of ideas."

The other kid did not even turn around. "No," they said flatly. "I work alone."

{child_name} blinked, caught off guard. "Oh. Okay. Well, maybe I could just watch, then?"

"I would rather you did not," the kid said, and shifted so their back was fully turned, like a door closing in {child_name}'s face.

Heat crept up {child_name}'s neck and prickled behind their eyes. They mumbled something and walked away fast, weaving between the stalls, not stopping until they reached the far end of {setting}, where {companion_name} was calmly untangling a long length of rope.

"What is wrong?" {companion_name} asked, setting the rope down at once.

"I tried to be friendly and they were horrible to me," {child_name} said, and the words came out wobbly. "I did not do a single thing to them. Why would somebody be so mean for no reason at all?"

{companion_name} did not answer right away. They thought for a moment, then asked, "Do you remember Level One, learning to notice how someone feels just by looking at them?"

{child_name} sniffed. "Their face was closed up tight," they admitted. "Kind of like a door slamming shut."

"That is good noticing," said {companion_name}. "Now comes the harder part. I want you to try walking in someone's shoes. Do not guess what they think about you. Instead, imagine their whole morning, from the inside."

{child_name} frowned, uncertain, then shut their eyes and gave it a proper try. They pictured being the clever builder. They pictured being famous for one single thing. They pictured everyone crowding around every single day, expecting something amazing, over and over. They pictured never being quite sure whether people liked you, or only liked the things you could make for them. They pictured how it might feel to have friends who wandered off the very moment you had nothing left to give them.

When {child_name} opened their eyes, the hot, angry feeling had quietly drained away.

"If everyone only ever wanted my building," {child_name} said slowly, "and nobody ever wanted just me, then I think I might be scared to let anyone get close. In case they only wanted that too."

{companion_name} nodded. "That is real work you just did, and it is not at all easy."

{child_name} turned the {object_motif} over and over in their hands, thinking it through. For a moment they almost did not go. It would be easier to stay cross, easier to decide the builder was simply horrible and forget the whole thing. But the picture in their head would not leave them alone. Then they made up their mind.

They walked back across the fair, not fast and not grinning this time, and sat down a respectful distance from the builder. They did not ask to build anything. They did not ask for a single thing.

"You do not have to talk to me," {child_name} said quietly. "I just think it looks nice and peaceful over on this side."

For a long while the builder ignored them completely, hands busy, eyes down. {child_name} did not push. They simply waited, calm, watching the clouds drift over {setting}.

At last the builder spoke, without looking up. "Everyone always wants me to make them something. Every day. All the time."

"I bet that gets really tiring," said {child_name}.

The builder's hands went still. "It does," they said, so quietly it was almost a whisper. "Nobody ever just, sits. Nobody ever wants the plain old me." A breeze moved across the tables, and somewhere behind them a bell rang for the next game.

"I can sit," said {child_name}. "You can hold the {object_motif} for a while if you like. No building required, I promise."

The builder took it and turned it slowly, and bit by bit some of the tightness went out of their shoulders.

"Sorry I was so sharp with you before," they said. "I thought you wanted me to make you something clever for free. People usually do. It gets lonely."

"I almost decided you were just plain mean," {child_name} admitted. "I am really glad I waited instead."

So they sat together as the fair glittered and hummed all around {setting}. After a while, without anyone asking at all, the builder began, shyly, to show {child_name} exactly how the little pieces fit together, not because they had to, but because, for once, they wanted to. {child_name} watched the careful, clever way the builder's hands moved, and understood that the sharp words at the very start had been a kind of wall, thrown up in a hurry, to keep out one more person who might only want something from them.

By the time the lanterns began to dim, the two of them had made a plan to meet again the very next day.

{child_name} walked home tired and full, the kind of full that has nothing at all to do with dinner.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} had spent two whole days working up the courage to talk to the newcomer at {setting}.

Everyone had a theory about them. They had arrived alone at the start of the week, spoken to almost no one, and answered every question in single clipped words before drifting away again. Some of the kids had already decided the newcomer was stuck-up, too good for the rest of them. The {hero} was not so sure. Besides, the {hero} knew exactly what it felt like to be the last one picked for anything, so somewhere over those two days they had quietly made up their mind to be friendly, whatever anyone else thought.

The chance finally came at the trading tables. The newcomer was standing right at the edge of the crowd, arms folded tight, watching everyone else swap and haggle and laugh without ever joining in.

"Hi," said the {hero}, stepping up beside them before the nerve could drain away. "I am usually here on market days. If you ever want to know how the trading works around here, I could show you the ropes."

The newcomer's eyes flicked over, cool and unreadable. "I do not need help," they said. "Especially not from someone like you."

The words landed like a slap. Someone like you. The {hero} did not even know what that was supposed to mean, which somehow made it sting worse, not better. A few kids nearby had heard, and the {hero} felt their whole face go scalding hot. They managed a stiff little shrug and turned and walked off before their eyes could give them away, weaving through the stalls until the noise of the market faded behind them and they reached the quiet slope where {companion_name} liked to sit and watch the day go by.

{companion_name} took one look at the {hero}'s face and shifted over to make room without a word.

"Go on," they said gently.

"I was nice to them," the {hero} burst out, dropping down beside them. "Genuinely, properly nice. And they looked at me like I was something stuck to the bottom of their shoe. Someone like you. What is that even supposed to mean? I did not do anything." The {hero} scrubbed hard at their eyes, furious and embarrassed all at the same time. "Some people just enjoy being cruel. That is the truth of it."

{companion_name} let the storm blow itself out before answering.

"That is the story that hurts the least right now," they said at last. "They are cruel, I am innocent, end of story. It is tidy, and it lets you off the hook. But you are usually far more curious than that."

The {hero} said nothing, jaw set tight, staring down at the grass.

"Back in Level One," {companion_name} went on, unhurried, "you got good at reading the outside. The folded arms. The flat little voice. So read them properly now, before you decide what it all meant. What did the outside actually look like?"

The {hero} made themselves go back and remember. "Arms crossed," they said reluctantly. "Standing apart from everybody. Watching, but never once joining in." A pause. "Kind of the way I stand, actually, when I do not want anyone to see that I am nervous."

"There it is," said {companion_name} softly. "Now for the harder thing. Stop imagining how they made you feel for a moment, and try walking in someone's shoes instead. Be them. Arriving here completely alone. What is that morning actually like?"

The {hero} closed their eyes and, reluctantly at first, began to build the picture. Waking up somewhere unfamiliar, in a place with none of your own things in it. Knowing not one single face for miles. Walking into somewhere where everyone already had their friends, their private jokes, their whole history stitched together long before you ever turned up. Feeling every pair of eyes on you and being certain, absolutely certain, that all of them were deciding something about you before you had even opened your mouth.

And then someone kind and easy and confident walks straight up, clearly belonging exactly where they stand, and offers, out of nowhere, to help. Someone who makes the enormous gap between you feel even wider than it already did. The {hero} let the whole picture settle, and it was not a comfortable place to stand, even for a borrowed moment.

The {hero}'s eyes opened.

"If I felt that small," they said slowly, "and somebody who fit in perfectly offered to teach me the ropes in front of everyone, I think I might push them away first. Hard. So that they could not do it to me. Someone like you, someone who belongs here." The anger had gone strange and quiet inside them. "It was not really about me at all, was it? Not really."

{companion_name} did not congratulate them or make a fuss. They simply nodded, the way you nod at something you already know to be true.

The {hero} sat with it for a while, turning the {object_motif} over and over in their hands. Being right about someone's meanness would have been so much simpler, so much more satisfying. This was more uncomfortable, and yet, somehow, at the very same time, it loosened the tight, hurt knot that had been sitting in their chest since the trading tables.

"I do not have to be their friend, though," the {hero} said at last. "They were still rude to me."

"No, you certainly do not," {companion_name} agreed. "Understanding someone is not the same as excusing them. You still get to choose exactly what you do next. You only get to choose it knowing a great deal more than you did before."

The {hero} turned that over. It would have been easier, they realised, to simply stay angry. Anger asked nothing of you and let you feel entirely in the right. This asked them to get up and walk back across the whole market and try a second time, with no promise at all that it would work.

The {hero} thought that over for a long moment, then got to their feet.

They found the newcomer near the far stalls, alone once again, pretending to study a rack of nothing very much. The {hero} did not put on a big bright smile this time. They stopped a little way off and gave them room to breathe.

"You were sharp with me before," the {hero} said, evenly. "That stung, honestly. But I think I understand it a bit better now, being new here, with everyone already sorted neatly into their little groups. I have felt on the outside of things too, more than you would guess."

The newcomer's cool expression wavered. For a second they looked as though they might say something cutting all over again, and then the whole effort of it seemed to simply collapse.

"I did not really mean the someone like you thing," they muttered, staring hard at the ground. "You just looked so comfortable. Like you had never once in your life had to wonder whether people actually wanted you around. I hated you for it, just for a second."

"I wonder it all the time," said the {hero} simply. "I just hide it a lot better than you think."

The newcomer studied them for a moment, as though checking whether the words were actually true, and whatever they found there seemed to be enough.

The newcomer huffed out a small, surprised breath, almost a laugh, as though it had escaped before they could stop it.

"You can hold the {object_motif} for a bit, if you want," the {hero} offered. "No trading, no strings. I will just tell you who everybody is and how it all works."

This time, after a pause, the newcomer took it.

They stayed there together at the edge of the market as the light thinned to gold and then to grey over {setting}, and the traders began, one by one, to fold up their cloths and pack their tables away. The newcomer did not suddenly turn warm and easy and chatty. But their arms unfolded at last, and they asked the {hero} a real question, and then another one after that, and the {hero} answered every single one of them. Once, the newcomer even nodded at a lopsided stall and said something that was almost a joke, and the {hero} laughed for real, and the newcomer looked pleased and slightly startled to have made anyone laugh at all.

Walking home in the settling dark, the {hero} felt older than they had that same morning. Not tired, exactly, but stretched somehow, the way you feel after carrying something a good deal heavier than you ever thought you could.

{refrain}.`,
    scriptTemplate: `{child_name} had spent two whole days working up the courage to talk to the newcomer at {setting}.

Everyone had a theory about them. They had arrived alone at the start of the week, spoken to almost no one, and answered every question in single clipped words before drifting away again. Some of the kids had already decided the newcomer was stuck-up, too good for the rest of them. {child_name} was not so sure. Besides, {child_name} knew exactly what it felt like to be the last one picked for anything, so somewhere over those two days they had quietly made up their mind to be friendly, whatever anyone else thought.

The chance finally came at the trading tables. The newcomer was standing right at the edge of the crowd, arms folded tight, watching everyone else swap and haggle and laugh without ever joining in.

"Hi," said {child_name}, stepping up beside them before the nerve could drain away. "I am usually here on market days. If you ever want to know how the trading works around here, I could show you the ropes."

The newcomer's eyes flicked over, cool and unreadable. "I do not need help," they said. "Especially not from someone like you."

The words landed like a slap. Someone like you. {child_name} did not even know what that was supposed to mean, which somehow made it sting worse, not better. A few kids nearby had heard, and {child_name} felt their whole face go scalding hot. They managed a stiff little shrug and turned and walked off before their eyes could give them away, weaving through the stalls until the noise of the market faded behind them and they reached the quiet slope where {companion_name} liked to sit and watch the day go by.

{companion_name} took one look at {child_name}'s face and shifted over to make room without a word.

"Go on," they said gently.

"I was nice to them," {child_name} burst out, dropping down beside them. "Genuinely, properly nice. And they looked at me like I was something stuck to the bottom of their shoe. Someone like you. What is that even supposed to mean? I did not do anything." {child_name} scrubbed hard at their eyes, furious and embarrassed all at the same time. "Some people just enjoy being cruel. That is the truth of it."

{companion_name} let the storm blow itself out before answering.

"That is the story that hurts the least right now," they said at last. "They are cruel, I am innocent, end of story. It is tidy, and it lets you off the hook. But you are usually far more curious than that."

{child_name} said nothing, jaw set tight, staring down at the grass.

"Back in Level One," {companion_name} went on, unhurried, "you got good at reading the outside. The folded arms. The flat little voice. So read them properly now, before you decide what it all meant. What did the outside actually look like?"

{child_name} made themselves go back and remember. "Arms crossed," they said reluctantly. "Standing apart from everybody. Watching, but never once joining in." A pause. "Kind of the way I stand, actually, when I do not want anyone to see that I am nervous."

"There it is," said {companion_name} softly. "Now for the harder thing. Stop imagining how they made you feel for a moment, and try walking in someone's shoes instead. Be them. Arriving here completely alone. What is that morning actually like?"

{child_name} closed their eyes and, reluctantly at first, began to build the picture. Waking up somewhere unfamiliar, in a place with none of your own things in it. Knowing not one single face for miles. Walking into somewhere where everyone already had their friends, their private jokes, their whole history stitched together long before you ever turned up. Feeling every pair of eyes on you and being certain, absolutely certain, that all of them were deciding something about you before you had even opened your mouth.

And then someone kind and easy and confident walks straight up, clearly belonging exactly where they stand, and offers, out of nowhere, to help. Someone who makes the enormous gap between you feel even wider than it already did. {child_name} let the whole picture settle, and it was not a comfortable place to stand, even for a borrowed moment.

{child_name}'s eyes opened.

"If I felt that small," they said slowly, "and somebody who fit in perfectly offered to teach me the ropes in front of everyone, I think I might push them away first. Hard. So that they could not do it to me. Someone like you, someone who belongs here." The anger had gone strange and quiet inside them. "It was not really about me at all, was it? Not really."

{companion_name} did not congratulate them or make a fuss. They simply nodded, the way you nod at something you already know to be true.

{child_name} sat with it for a while, turning the {object_motif} over and over in their hands. Being right about someone's meanness would have been so much simpler, so much more satisfying. This was more uncomfortable, and yet, somehow, at the very same time, it loosened the tight, hurt knot that had been sitting in their chest since the trading tables.

"I do not have to be their friend, though," {child_name} said at last. "They were still rude to me."

"No, you certainly do not," {companion_name} agreed. "Understanding someone is not the same as excusing them. You still get to choose exactly what you do next. You only get to choose it knowing a great deal more than you did before."

{child_name} turned that over. It would have been easier, they realised, to simply stay angry. Anger asked nothing of you and let you feel entirely in the right. This asked them to get up and walk back across the whole market and try a second time, with no promise at all that it would work.

{child_name} thought that over for a long moment, then got to their feet.

They found the newcomer near the far stalls, alone once again, pretending to study a rack of nothing very much. {child_name} did not put on a big bright smile this time. They stopped a little way off and gave them room to breathe.

"You were sharp with me before," {child_name} said, evenly. "That stung, honestly. But I think I understand it a bit better now, being new here, with everyone already sorted neatly into their little groups. I have felt on the outside of things too, more than you would guess."

The newcomer's cool expression wavered. For a second they looked as though they might say something cutting all over again, and then the whole effort of it seemed to simply collapse.

"I did not really mean the someone like you thing," they muttered, staring hard at the ground. "You just looked so comfortable. Like you had never once in your life had to wonder whether people actually wanted you around. I hated you for it, just for a second."

"I wonder it all the time," said {child_name} simply. "I just hide it a lot better than you think."

The newcomer studied them for a moment, as though checking whether the words were actually true, and whatever they found there seemed to be enough.

The newcomer huffed out a small, surprised breath, almost a laugh, as though it had escaped before they could stop it.

"You can hold the {object_motif} for a bit, if you want," {child_name} offered. "No trading, no strings. I will just tell you who everybody is and how it all works."

This time, after a pause, the newcomer took it.

They stayed there together at the edge of the market as the light thinned to gold and then to grey over {setting}, and the traders began, one by one, to fold up their cloths and pack their tables away. The newcomer did not suddenly turn warm and easy and chatty. But their arms unfolded at last, and they asked {child_name} a real question, and then another one after that, and {child_name} answered every single one of them. Once, the newcomer even nodded at a lopsided stall and said something that was almost a joke, and {child_name} laughed for real, and the newcomer looked pleased and slightly startled to have made anyone laugh at all.

Walking home in the settling dark, {child_name} felt older than they had that same morning. Not tired, exactly, but stretched somehow, the way you feel after carrying something a good deal heavier than you ever thought you could.

{refrain}.`
  }
},
    audioTemplate: `Beneath the glow of the {object_motif} in {setting}, the {hero} felt hurt. A friend had been short with them, almost unkind.

"Why would they do that?" the {hero} said.

{companion_name} settled close. "Let us try something. Close your eyes and imagine you are them. What might their day have been like?"

The {hero} imagined. Perhaps that friend had been tired. Perhaps something had gone wrong for them, long before this moment.

And the hurt softened into something gentler — understanding.

"They might be carrying something I cannot see," said the {hero} slowly.

"That is walking in someone's shoes," said {companion_name}. "You noticed how they seemed. Then you imagined how they felt. Now your kindness has somewhere true to go."

The {object_motif} warmed between them.

The {hero} decided to be gentle with that friend tomorrow — not because they had earned it, but because everyone is carrying something.

{refrain}.`,
    scriptTemplate: `Beneath the glow of the {object_motif} in {setting}, {child_name} the {hero} felt hurt. A friend had been short with them, almost unkind.

"Why would they do that?" {child_name} said.

{companion_name} settled close. "Let us try something, {child_name}. Close your eyes and imagine you are them. What might their day have been like?"

{child_name} imagined. Perhaps that friend had been tired. Perhaps something had gone wrong for them, long before this moment.

And the hurt softened into something gentler — understanding.

"They might be carrying something I cannot see," said {child_name} slowly.

"That is walking in someone's shoes," said {companion_name}. "You noticed how they seemed. Then you imagined how they felt. Now your kindness has somewhere true to go."

The {object_motif} warmed between them.

{child_name} decided to be gentle with that friend tomorrow — not because they had earned it, but because everyone is carrying something.

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Kindness Comes Back',
    concept: 'Kindness spreads from one to the next', callback: 'A small kindness (Level 2)', ageFloor: 5,
    summary: 'The hero sees a small kindness travel — from them, to a friend, to a stranger, and gently back again. Their companion explains that kindness is not used up by giving; it spreads. It builds on Level 2: one small act can light many.',
    teachingNote: 'Seeing kindness ripple outward teaches a child that their small acts matter far beyond the moment they happen.',
    learningBeat: 'Kindness is not used up',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} had one warm bun. The bun was soft. It smelled so good.

The {hero} walked by the pond in {setting}. A small kid sat there. The small kid looked sad. Their basket was empty. Their tummy was hungry.

The {hero} broke the bun in two. "Here," said the {hero}. "Half for you."

The small kid took the half. The small kid smiled a big smile. "Thank you!"

The {hero} felt happy. A little bun. A little help.

Then something happened. The small kid saw a baby bird. The bird had a sore wing. It could not fly. The small kid made a soft nest of leaves. The bird hopped in. The bird felt safe now.

A bigger kid saw this. The bigger kid smiled too. The bigger kid found a thirsty little plant. The plant drooped low. The bigger kid gave it water. The plant stood up tall.

An old fisher watched the plant grow. The fisher smiled. The fisher gave a warm blanket to a cold pup. The pup curled up. The pup was cozy now.

The {hero} watched from the soft grass. One kind thing. Then two. Then more and more.

{companion_name} came and sat down. {companion_name} held the {object_motif}.

"See?" said {companion_name}. "You gave one small bun. But look. The kindness kept going and going. Kindness is not used up. Give it away, and it grows."

The {hero} looked around the pond. So much helping. Here and there. Warm and kind.

Then the small kid ran back. Their hands were full. "For you!" they said. They gave the {hero} a red berry. Round. Ripe. Sweet.

The {hero} laughed and laughed. The kindness came back. All the way around. The {hero} shared the berry too. Half for {companion_name}.

The sky turned soft and pink. Slow clouds floated by. The frogs went to sleep. The reeds swayed slow. The pond was quiet now. Every belly was full. Every heart was warm.

The {hero} held the {object_motif} close. {companion_name} hummed a slow, soft song.

The {hero} yawned a big, sleepy yawn. Eyes went heavy. Time to rest.

{companion_name} pulled the blanket up. The {hero} was warm and safe. Kindness all around. Kindness all night.

{refrain}.`,
    scriptTemplate: `{child_name} had one warm bun. The bun was soft. It smelled so good.

{child_name} walked by the pond in {setting}. A small kid sat there. The small kid looked sad. Their basket was empty. Their tummy was hungry.

{child_name} broke the bun in two. "Here," said {child_name}. "Half for you."

The small kid took the half. The small kid smiled a big smile. "Thank you!"

{child_name} felt happy. A little bun. A little help.

Then something happened. The small kid saw a baby bird. The bird had a sore wing. It could not fly. The small kid made a soft nest of leaves. The bird hopped in. The bird felt safe now.

A bigger kid saw this. The bigger kid smiled too. The bigger kid found a thirsty little plant. The plant drooped low. The bigger kid gave it water. The plant stood up tall.

An old fisher watched the plant grow. The fisher smiled. The fisher gave a warm blanket to a cold pup. The pup curled up. The pup was cozy now.

{child_name} watched from the soft grass. One kind thing. Then two. Then more and more.

{companion_name} came and sat down. {companion_name} held the {object_motif}.

"See?" said {companion_name}. "You gave one small bun. But look. The kindness kept going and going. Kindness is not used up. Give it away, and it grows."

{child_name} looked around the pond. So much helping. Here and there. Warm and kind.

Then the small kid ran back. Their hands were full. "For you!" they said. They gave {child_name} a red berry. Round. Ripe. Sweet.

{child_name} laughed and laughed. The kindness came back. All the way around. {child_name} shared the berry too. Half for {companion_name}.

The sky turned soft and pink. Slow clouds floated by. The frogs went to sleep. The reeds swayed slow. The pond was quiet now. Every belly was full. Every heart was warm.

{child_name} held the {object_motif} close. {companion_name} hummed a slow, soft song.

{child_name} yawned a big, sleepy yawn. Eyes went heavy. Time to rest.

{companion_name} pulled the blanket up. {child_name} was warm and safe. Kindness all around. Kindness all night.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} had a fresh muffin, still warm, wrapped in a cloth. It was the first treat of the whole day, and the {hero} had been saving it.

By the edge of {setting}, a younger kid sat alone on a stone. Their lunch had rolled into the water and floated away. Their eyes were shiny with almost-tears.

The {hero} stopped. The muffin smelled wonderful. But the younger kid looked so hungry.

"You can have half," the {hero} said, and tore the muffin cleanly down the middle. "Here."

The younger kid blinked. "Really? For me?"

"Really."

They ate together on the stone, swinging their feet, and for a moment the whole world felt easy.

Then the {hero} went on their way — but something followed, though the {hero} did not see it yet.

Because the younger kid, full and happy, noticed a bird with a tangled foot down by the reeds. Carefully, gently, the younger kid worked the thread loose until the bird shook out its wings and flew.

A traveler crossing the bridge saw the rescue and smiled. Further on, that same traveler found a lost coin purse in the grass and, instead of pocketing it, ran it back to a worried shopkeeper.

The shopkeeper, so relieved, gave a warm loaf to an old sweeper resting by the door. The sweeper shared the loaf with two hungry pups. And on it went, one small kindness sparking the next, all around {setting}.

The old sweeper, humming now, helped a lost child find their way to the market. The child's grateful parent handed a basket of plums to a tired fruit-seller who had shared their stall all day. The fruit-seller gave the biggest plum to a shy kid who never got picked first. And that shy kid — grinning — waved to the younger kid by the reeds, and it all began to loop back toward the pond.

The {hero} sat down on a low wall to rest. {companion_name} settled nearby, turning the {object_motif} over and over in careful hands.

"You look puzzled," {companion_name} said.

"I only gave half a muffin," the {hero} said. "But look at everyone. It's like the whole place woke up."

{companion_name} nodded slowly. "One kindness doesn't stop where you set it down. It jumps. Kindness is not used up when you give it away — it doubles, and doubles again."

The {hero} watched the busy, happy paths of {setting}, hardly believing that half a muffin had started all of it. And the strange thing was, giving the muffin away hadn't left the {hero} with less. The day felt fuller than before, not emptier.

And then — footsteps. The younger kid came running back, cheeks pink, holding out a fat ripe pear with both hands.

"I found it and I thought of you!" they said. "For sharing."

The {hero} laughed out loud. The kindness had traveled the whole long way around and come home again, warmer than when it left.

"There it is," {companion_name} said softly, nodding at the pear.

The {hero} split the pear three ways — one piece each, and one saved for the younger kid to carry home. Juice ran down their chins, and they laughed some more. The younger kid leaned sleepy against the {hero}'s shoulder, and neither wanted the evening to end.

The sky over {setting} turned the colour of peaches. Lanterns blinked on, one by one, like the kindnesses that had lit each other all afternoon. The water held the last of the light like a promise. Somewhere a night bird called, soft and low.

{companion_name} yawned first, then the {hero} caught it, the way you catch a yawn from a friend. The {object_motif} rested easy in the {hero}'s lap.

"Tomorrow," the {hero} whispered, "I'll start another one."

"I know you will," said {companion_name}.

The stone was cool. The evening was kind. The {hero}'s eyes grew heavy and slow.

{refrain}.`,
    scriptTemplate: `{child_name} had a fresh muffin, still warm, wrapped in a cloth. It was the first treat of the whole day, and {child_name} had been saving it.

By the edge of {setting}, a younger kid sat alone on a stone. Their lunch had rolled into the water and floated away. Their eyes were shiny with almost-tears.

{child_name} stopped. The muffin smelled wonderful. But the younger kid looked so hungry.

"You can have half," {child_name} said, and tore the muffin cleanly down the middle. "Here."

The younger kid blinked. "Really? For me?"

"Really."

They ate together on the stone, swinging their feet, and for a moment the whole world felt easy.

Then {child_name} went on their way — but something followed, though {child_name} did not see it yet.

Because the younger kid, full and happy, noticed a bird with a tangled foot down by the reeds. Carefully, gently, the younger kid worked the thread loose until the bird shook out its wings and flew.

A traveler crossing the bridge saw the rescue and smiled. Further on, that same traveler found a lost coin purse in the grass and, instead of pocketing it, ran it back to a worried shopkeeper.

The shopkeeper, so relieved, gave a warm loaf to an old sweeper resting by the door. The sweeper shared the loaf with two hungry pups. And on it went, one small kindness sparking the next, all around {setting}.

The old sweeper, humming now, helped a lost child find their way to the market. The child's grateful parent handed a basket of plums to a tired fruit-seller who had shared their stall all day. The fruit-seller gave the biggest plum to a shy kid who never got picked first. And that shy kid — grinning — waved to the younger kid by the reeds, and it all began to loop back toward the pond.

{child_name} sat down on a low wall to rest. {companion_name} settled nearby, turning the {object_motif} over and over in careful hands.

"You look puzzled," {companion_name} said.

"I only gave half a muffin," {child_name} said. "But look at everyone. It's like the whole place woke up."

{companion_name} nodded slowly. "One kindness doesn't stop where you set it down. It jumps. Kindness is not used up when you give it away — it doubles, and doubles again."

{child_name} watched the busy, happy paths of {setting}, hardly believing that half a muffin had started all of it. And the strange thing was, giving the muffin away hadn't left {child_name} with less. The day felt fuller than before, not emptier.

And then — footsteps. The younger kid came running back, cheeks pink, holding out a fat ripe pear with both hands.

"I found it and I thought of you!" they said. "For sharing."

{child_name} laughed out loud. The kindness had traveled the whole long way around and come home again, warmer than when it left.

"There it is," {companion_name} said softly, nodding at the pear.

{child_name} split the pear three ways — one piece each, and one saved for the younger kid to carry home. Juice ran down their chins, and they laughed some more. The younger kid leaned sleepy against {child_name}'s shoulder, and neither wanted the evening to end.

The sky over {setting} turned the colour of peaches. Lanterns blinked on, one by one, like the kindnesses that had lit each other all afternoon. The water held the last of the light like a promise. Somewhere a night bird called, soft and low.

{companion_name} yawned first, then {child_name} caught it, the way you catch a yawn from a friend. The {object_motif} rested easy in {child_name}'s lap.

"Tomorrow," {child_name} whispered, "I'll start another one."

"I know you will," said {companion_name}.

The stone was cool. The evening was kind. {child_name}'s eyes grew heavy and slow.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The market square in {setting} was crowded and loud, and the {hero} had exactly one thing to spend: a warm honey-bun bought with two weeks of saved-up coins. It was going to be the best bite of the whole season, and the {hero} had planned it for days.

But near the fountain sat a smaller kid, hunched over an empty lunch tin, trying very hard not to cry. A gust had knocked their sandwich straight into the water, and now it was gone.

The {hero} slowed. The honey-bun was still warm through the paper. Two weeks of coins. The best bite of the season.

And yet.

"Here," the {hero} said, before the wanting could win, and broke the bun in two. "You take the bigger half."

The smaller kid stared. "But it's yours."

"It's ours now," said the {hero}, and that made the smaller kid laugh a wet, surprised laugh.

They ate side by side on the fountain's edge. The bun was every bit as good as the {hero} had hoped — maybe better, shared. For a while they just watched the market go by, two kids and one good bun between them.

Then the {hero} wiped the crumbs away and headed home, thinking the little story was over. It was not. It was only starting to move.

The smaller kid, warm and full, spotted a market cat with a burr stuck deep in its fur, mewing miserably under a cart. Patiently, one careful tug at a time, the smaller kid freed it, and the cat wound round their ankles, purring.

A trader selling ribbons watched the whole gentle rescue. It softened something in them, and when a customer counted out too many coins by mistake, they pressed the extra back into their palm with a smile. That customer, lighter somehow, carried a dropped crate for a struggling porter. The porter bought two apples and gave one to a street sweeper. The sweeper set out a bowl of water for the very same cat.

But it didn't stop there. The street sweeper, humming, helped a lost toddler back to a frantic parent. The grateful parent, arms full of relief, handed a bunch of grapes to a weary baker who'd been on their feet since dawn. The baker slipped a fresh roll to a shy newcomer who didn't know a soul in {setting} yet — and that newcomer, blinking back happy surprise, held the market gate open for a whole line of tired travelers filing in from the road.

Kindness moved through the market like a rumour — quick, quiet, catching.

The {hero} noticed none of it. Halfway home, though, a small doubt crept in. Half a honey-bun, gone. Two weeks of coins, gone. Had it really been worth it? For a moment the {hero}'s steps felt heavy, and the square behind seemed no different than before.

That was when {companion_name} fell into step alongside, rolling the {object_motif} thoughtfully between two fingers.

"You've got a worried face," {companion_name} said.

"I gave away something I'd saved a long time for," the {hero} admitted. "And now I've got nothing to show for it."

{companion_name} tilted their head toward the market. "Are you sure? Turn around."

The {hero} turned. And there it was — the whole square glowing with small good deeds, a cat purring, a porter whistling, strangers smiling at strangers. All of it downstream of half a bun.

"You started that," {companion_name} said quietly. "Every bit of it. And here's the part people forget: kindness is not used up when you spend it. You still have all of yours. You just made a hundred copies along the way."

The {hero} let that settle. It was a strange kind of math — the kind where giving something away left you with more. The {hero} thought about all the times sharing had felt like subtracting — half a snack meant half as much snack, that was just true. But this was different. This was the first time giving had multiplied instead of divided, and it was hard to look away from.

And then, threading back through the crowd, came the smaller kid, breathless, holding something cupped in both hands.

"You have to take this," they said, and opened their fingers. It was a ripe golden plum, perfect and unbruised. "The ribbon-seller gave it to me for helping. But I wanted you to have it. Because you started my whole good day."

The {hero} took the plum, and for a second couldn't say anything at all. The {hero} laughed, the doubt from the road gone completely. The kindness had gone all the way around the square and walked itself right back, a little rounder, a little sweeter.

"See," {companion_name} murmured, but not like a lesson — just glad.

The {hero} did the only fair thing. Three pieces: one for the smaller kid, one for {companion_name}, one to keep. They ate them there as the market began to fold up its stalls for the night.

Lamps warmed to gold along the square. Traders called soft goodnights across the emptying lanes. The market was nearly dark now, and somewhere a fiddle played something slow and kind. The fountain kept up its low, sleepy murmur, and the market cat curled into a comma of fur beneath the ribbon stall.

The {hero} sat with the {object_motif} in one hand and the plum stone in the other, tired in the good way.

"I thought I'd lost my best treat today," the {hero} said.

"You traded it," said {companion_name}, "for a much bigger one."

Above {setting} the first stars pricked through, small and certain, and the {hero}'s eyes began to close on their own.

{refrain}.`,
    scriptTemplate: `The market square in {setting} was crowded and loud, and {child_name} had exactly one thing to spend: a warm honey-bun bought with two weeks of saved-up coins. It was going to be the best bite of the whole season, and {child_name} had planned it for days.

But near the fountain sat a smaller kid, hunched over an empty lunch tin, trying very hard not to cry. A gust had knocked their sandwich straight into the water, and now it was gone.

{child_name} slowed. The honey-bun was still warm through the paper. Two weeks of coins. The best bite of the season.

And yet.

"Here," {child_name} said, before the wanting could win, and broke the bun in two. "You take the bigger half."

The smaller kid stared. "But it's yours."

"It's ours now," said {child_name}, and that made the smaller kid laugh a wet, surprised laugh.

They ate side by side on the fountain's edge. The bun was every bit as good as {child_name} had hoped — maybe better, shared. For a while they just watched the market go by, two kids and one good bun between them.

Then {child_name} wiped the crumbs away and headed home, thinking the little story was over. It was not. It was only starting to move.

The smaller kid, warm and full, spotted a market cat with a burr stuck deep in its fur, mewing miserably under a cart. Patiently, one careful tug at a time, the smaller kid freed it, and the cat wound round their ankles, purring.

A trader selling ribbons watched the whole gentle rescue. It softened something in them, and when a customer counted out too many coins by mistake, they pressed the extra back into their palm with a smile. That customer, lighter somehow, carried a dropped crate for a struggling porter. The porter bought two apples and gave one to a street sweeper. The sweeper set out a bowl of water for the very same cat.

But it didn't stop there. The street sweeper, humming, helped a lost toddler back to a frantic parent. The grateful parent, arms full of relief, handed a bunch of grapes to a weary baker who'd been on their feet since dawn. The baker slipped a fresh roll to a shy newcomer who didn't know a soul in {setting} yet — and that newcomer, blinking back happy surprise, held the market gate open for a whole line of tired travelers filing in from the road.

Kindness moved through the market like a rumour — quick, quiet, catching.

{child_name} noticed none of it. Halfway home, though, a small doubt crept in. Half a honey-bun, gone. Two weeks of coins, gone. Had it really been worth it? For a moment {child_name}'s steps felt heavy, and the square behind seemed no different than before.

That was when {companion_name} fell into step alongside, rolling the {object_motif} thoughtfully between two fingers.

"You've got a worried face," {companion_name} said.

"I gave away something I'd saved a long time for," {child_name} admitted. "And now I've got nothing to show for it."

{companion_name} tilted their head toward the market. "Are you sure? Turn around."

{child_name} turned. And there it was — the whole square glowing with small good deeds, a cat purring, a porter whistling, strangers smiling at strangers. All of it downstream of half a bun.

"You started that," {companion_name} said quietly. "Every bit of it. And here's the part people forget: kindness is not used up when you spend it. You still have all of yours. You just made a hundred copies along the way."

{child_name} let that settle. It was a strange kind of math — the kind where giving something away left you with more. {child_name} thought about all the times sharing had felt like subtracting — half a snack meant half as much snack, that was just true. But this was different. This was the first time giving had multiplied instead of divided, and it was hard to look away from.

And then, threading back through the crowd, came the smaller kid, breathless, holding something cupped in both hands.

"You have to take this," they said, and opened their fingers. It was a ripe golden plum, perfect and unbruised. "The ribbon-seller gave it to me for helping. But I wanted you to have it. Because you started my whole good day."

{child_name} took the plum, and for a second couldn't say anything at all. {child_name} laughed, the doubt from the road gone completely. The kindness had gone all the way around the square and walked itself right back, a little rounder, a little sweeter.

"See," {companion_name} murmured, but not like a lesson — just glad.

{child_name} did the only fair thing. Three pieces: one for the smaller kid, one for {companion_name}, one to keep. They ate them there as the market began to fold up its stalls for the night.

Lamps warmed to gold along the square. Traders called soft goodnights across the emptying lanes. The market was nearly dark now, and somewhere a fiddle played something slow and kind. The fountain kept up its low, sleepy murmur, and the market cat curled into a comma of fur beneath the ribbon stall.

{child_name} sat with the {object_motif} in one hand and the plum stone in the other, tired in the good way.

"I thought I'd lost my best treat today," {child_name} said.

"You traded it," said {companion_name}, "for a much bigger one."

Above {setting} the first stars pricked through, small and certain, and {child_name}'s eyes began to close on their own.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `Of all the things the {hero} owned, the coin was the one that mattered. It had been a name-day gift, saved for the better part of a month, and today it had finally become what the {hero} had been dreaming about: a warm almond twist from the good baker's stall, the kind that sold out before most of {setting} was even awake. The {hero} had run the last stretch to get one, and now it sat in both hands, still warm, smelling of butter and burnt sugar — the single best thing the whole long month had been building toward.

Which was exactly why it was so hard to stop walking when the {hero} saw the smaller kid by the well.

The kid was maybe six, sitting on the lip of the stone well with an empty cloth on their knees, staring at the water as though it had personally betrayed them. It wasn't hard to guess the story: a lunch carried carefully from home, a slip of the hands, and then nothing — nothing but a cloth that used to hold something and a long afternoon still to go. The kid wasn't crying, quite. They were doing the harder thing, which was trying not to.

The {hero} stopped.

Here is what nobody tells you about being kind: the wanting doesn't switch off just because you decide to do the right thing. The {hero} looked at the almond twist and wanted it completely — a month of waiting was folded into that pastry. And the {hero} looked at the smaller kid and knew, with the plain certainty of childhood, exactly how the afternoon would feel with an empty cloth on your knees.

So the {hero} broke the twist in half before the wanting could talk them out of it.

"You dropped your lunch, huh," the {hero} said, and held out the bigger piece. "Here. It's really good. The baker doesn't skimp on the almonds."

The smaller kid looked at the pastry, then up at the {hero}, suspicious the way kids get when something good arrives without a catch. "It's yours, though."

"It was," the {hero} said. "Now it's half yours." Which was such a strange, true thing to say that the smaller kid laughed — startled right out of almost-crying — and took the piece.

They sat together on the warm stone and ate, and the {hero} noticed something odd: the twist tasted better this way, not worse. As though the sharing had done something to it that a month of anticipation hadn't managed alone.

Then the {hero} dusted off the crumbs, said goodbye, and set off home, entirely certain the little event was finished.

It was not finished. It had, in fact, only just been set loose.

Because the smaller kid, no longer hungry and no longer sad, walked back through {setting} with the specific lightness of a person who has just been rescued — and people who have just been rescued notice things. This one noticed a market cat with a thorn worked deep into its paw, hiding beneath a cart and hating the world. The kid crouched, murmured, and worked the thorn free with the patience the {hero} had shown them not ten minutes before. The cat forgave the universe and began to purr.

A ribbon-seller, arranging spools at the next stall, watched the whole small rescue and felt something loosen in their chest. So when the very next customer miscounted and overpaid, the ribbon-seller pressed the coins gently back. "You paid me twice," they said. "Take it home." The customer, startled into gladness, walked on lighter than they'd arrived, and lighter people help more easily: a few stalls down, they hauled a slipped crate off a porter's aching back without being asked.

And so it went, threading through {setting} faster than anyone could have traced it. The porter, grateful, bought apples and gave one to a street sweeper. The sweeper, who had swept the same square for thirty uncelebrated years, set out a bowl of water for a panting dog and, while doing it, greeted a newcomer so warmly that the newcomer — who had not known a single soul in town an hour ago — suddenly felt they might belong here after all. That newcomer held a heavy gate for a whole caravan of dusty travelers. One of the travelers, moved, played three songs for free, and quietly tipped the coins into the cup of someone who needed them more.

The {hero}, of course, saw none of this. Which is why, halfway home, when the warmth of the moment had worn off, the doubt arrived right on schedule.

It went like this: a whole month of saving, and what did the {hero} have to show for it? Half a pastry, eaten. A coin, spent. A treat dreamed about for weeks and gone in a single afternoon, most of it given to someone whose name the {hero} didn't even know. The {hero}'s feet slowed. The bright thing curdled slightly into something that felt uncomfortably like a mistake, and the {hero} thought, quietly and a little miserably, that maybe being kind was just a nicer word for ending up with less.

That was when {companion_name} appeared at the {hero}'s shoulder, unhurried, turning the {object_motif} over and over in one hand the way some people worry a smooth stone.

"You've gone quiet," {companion_name} observed. "And not the good kind of quiet."

"I saved a whole month for that pastry," the {hero} said, and was embarrassed to hear their voice wobble. "And now it's just — gone. I gave most of it away and I don't have anything left."

{companion_name} didn't argue, which the {hero} appreciated. Instead they stopped walking and nodded back the way they'd come. "Before you decide that," they said, "look at what you left behind you."

The {hero} turned around.

And {setting} was — glowing wasn't quite the word, but it was close. From this small rise the {hero} could see the whole square at once, and it was busy in a way it hadn't been that morning: a cat asleep in a patch of sun, a porter whistling, strangers catching each other's eyes and smiling for no reason. It looked, the {hero} thought, like a place that had decided to be gentle with itself. And every thread of it, though the {hero} couldn't have followed the pattern, ran back to one broken pastry by a well.

"You did that," {companion_name} said. "Not the whole of it — those were other people's choices — but you struck the first match. And this is the part almost everyone gets wrong about kindness." They held up the {object_motif} for a moment, then lowered it. "Kindness is not used up when you give it away. It isn't a coin you spend down to nothing. It's more like a light — you can set a hundred other lights burning from it and yours goes on shining exactly as bright. You didn't end the day with less. You ended it with a square full of it."

The {hero} looked, and looked, and felt the miserable little math in their chest quietly rearrange itself into a shape that made far more sense.

And then — footsteps, quick ones, and a familiar voice calling out. The smaller kid was running back up the rise, cheeks flushed, holding something carefully in cupped hands as though it were made of glass.

"I've been looking everywhere for you," the kid panted, and opened their fingers. In their palm sat a ripe amber plum, unbruised and perfect. "The ribbon-seller gave it to me — a whole plum, for helping with the cat. But I didn't want it. I mean, I wanted it," they corrected, honest to the last, "but I wanted you to have it more. Because none of my good day would've happened if you hadn't stopped."

The {hero} took the plum and, for a moment, found that words had gone somewhere unreachable. The kindness had travelled the entire circumference of the square — from one pair of hands to the next, past people the {hero} would never meet — and then it had turned around and walked itself right back up the hill, arriving a little rounder and a great deal sweeter than the half-pastry that had sent it off.

So the {hero} did the only thing that made any sense, which was to split the plum three ways — one piece for the smaller kid, one for {companion_name}, one to keep — and the three of them ate it on the rise while below them {setting} began, stall by stall, to fold itself up for the night.

The lamps came on amber along the lanes. The good baker sold the last of the twists and shuttered the stall. Somewhere the traveler's fiddle started up again, slow now, a tune for the end of a day. And the {hero} sat with the {object_motif} in one hand and a plum stone in the other, tired in the deep and satisfied way that only comes after you've spent yourself on something worthwhile and found yourself fuller than when you began.

"I thought I'd wasted my whole month," the {hero} said, watching the first stars come out unevenly over {setting}.

"You invested it," {companion_name} said, and left it there.

The stone was cool. The square below breathed slow and gold. And the {hero}'s eyes, without asking permission, began to close.

{refrain}.`,
    scriptTemplate: `Of all the things {child_name} owned, the coin was the one that mattered. It had been a name-day gift, saved for the better part of a month, and today it had finally become what {child_name} had been dreaming about: a warm almond twist from the good baker's stall, the kind that sold out before most of {setting} was even awake. {child_name} had run the last stretch to get one, and now it sat in both hands, still warm, smelling of butter and burnt sugar — the single best thing the whole long month had been building toward.

Which was exactly why it was so hard to stop walking when {child_name} saw the smaller kid by the well.

The kid was maybe six, sitting on the lip of the stone well with an empty cloth on their knees, staring at the water as though it had personally betrayed them. It wasn't hard to guess the story: a lunch carried carefully from home, a slip of the hands, and then nothing — nothing but a cloth that used to hold something and a long afternoon still to go. The kid wasn't crying, quite. They were doing the harder thing, which was trying not to.

{child_name} stopped.

Here is what nobody tells you about being kind: the wanting doesn't switch off just because you decide to do the right thing. {child_name} looked at the almond twist and wanted it completely — a month of waiting was folded into that pastry. And {child_name} looked at the smaller kid and knew, with the plain certainty of childhood, exactly how the afternoon would feel with an empty cloth on your knees.

So {child_name} broke the twist in half before the wanting could talk them out of it.

"You dropped your lunch, huh," {child_name} said, and held out the bigger piece. "Here. It's really good. The baker doesn't skimp on the almonds."

The smaller kid looked at the pastry, then up at {child_name}, suspicious the way kids get when something good arrives without a catch. "It's yours, though."

"It was," {child_name} said. "Now it's half yours." Which was such a strange, true thing to say that the smaller kid laughed — startled right out of almost-crying — and took the piece.

They sat together on the warm stone and ate, and {child_name} noticed something odd: the twist tasted better this way, not worse. As though the sharing had done something to it that a month of anticipation hadn't managed alone.

Then {child_name} dusted off the crumbs, said goodbye, and set off home, entirely certain the little event was finished.

It was not finished. It had, in fact, only just been set loose.

Because the smaller kid, no longer hungry and no longer sad, walked back through {setting} with the specific lightness of a person who has just been rescued — and people who have just been rescued notice things. This one noticed a market cat with a thorn worked deep into its paw, hiding beneath a cart and hating the world. The kid crouched, murmured, and worked the thorn free with the patience {child_name} had shown them not ten minutes before. The cat forgave the universe and began to purr.

A ribbon-seller, arranging spools at the next stall, watched the whole small rescue and felt something loosen in their chest. So when the very next customer miscounted and overpaid, the ribbon-seller pressed the coins gently back. "You paid me twice," they said. "Take it home." The customer, startled into gladness, walked on lighter than they'd arrived, and lighter people help more easily: a few stalls down, they hauled a slipped crate off a porter's aching back without being asked.

And so it went, threading through {setting} faster than anyone could have traced it. The porter, grateful, bought apples and gave one to a street sweeper. The sweeper, who had swept the same square for thirty uncelebrated years, set out a bowl of water for a panting dog and, while doing it, greeted a newcomer so warmly that the newcomer — who had not known a single soul in town an hour ago — suddenly felt they might belong here after all. That newcomer held a heavy gate for a whole caravan of dusty travelers. One of the travelers, moved, played three songs for free, and quietly tipped the coins into the cup of someone who needed them more.

{child_name}, of course, saw none of this. Which is why, halfway home, when the warmth of the moment had worn off, the doubt arrived right on schedule.

It went like this: a whole month of saving, and what did {child_name} have to show for it? Half a pastry, eaten. A coin, spent. A treat dreamed about for weeks and gone in a single afternoon, most of it given to someone whose name {child_name} didn't even know. {child_name}'s feet slowed. The bright thing curdled slightly into something that felt uncomfortably like a mistake, and {child_name} thought, quietly and a little miserably, that maybe being kind was just a nicer word for ending up with less.

That was when {companion_name} appeared at {child_name}'s shoulder, unhurried, turning the {object_motif} over and over in one hand the way some people worry a smooth stone.

"You've gone quiet," {companion_name} observed. "And not the good kind of quiet."

"I saved a whole month for that pastry," {child_name} said, and was embarrassed to hear their voice wobble. "And now it's just — gone. I gave most of it away and I don't have anything left."

{companion_name} didn't argue, which {child_name} appreciated. Instead they stopped walking and nodded back the way they'd come. "Before you decide that," they said, "look at what you left behind you."

{child_name} turned around.

And {setting} was — glowing wasn't quite the word, but it was close. From this small rise {child_name} could see the whole square at once, and it was busy in a way it hadn't been that morning: a cat asleep in a patch of sun, a porter whistling, strangers catching each other's eyes and smiling for no reason. It looked, {child_name} thought, like a place that had decided to be gentle with itself. And every thread of it, though {child_name} couldn't have followed the pattern, ran back to one broken pastry by a well.

"You did that," {companion_name} said. "Not the whole of it — those were other people's choices — but you struck the first match. And this is the part almost everyone gets wrong about kindness." They held up the {object_motif} for a moment, then lowered it. "Kindness is not used up when you give it away. It isn't a coin you spend down to nothing. It's more like a light — you can set a hundred other lights burning from it and yours goes on shining exactly as bright. You didn't end the day with less. You ended it with a square full of it."

{child_name} looked, and looked, and felt the miserable little math in their chest quietly rearrange itself into a shape that made far more sense.

And then — footsteps, quick ones, and a familiar voice calling out. The smaller kid was running back up the rise, cheeks flushed, holding something carefully in cupped hands as though it were made of glass.

"I've been looking everywhere for you," the kid panted, and opened their fingers. In their palm sat a ripe amber plum, unbruised and perfect. "The ribbon-seller gave it to me — a whole plum, for helping with the cat. But I didn't want it. I mean, I wanted it," they corrected, honest to the last, "but I wanted you to have it more. Because none of my good day would've happened if you hadn't stopped."

{child_name} took the plum and, for a moment, found that words had gone somewhere unreachable. The kindness had travelled the entire circumference of the square — from one pair of hands to the next, past people {child_name} would never meet — and then it had turned around and walked itself right back up the hill, arriving a little rounder and a great deal sweeter than the half-pastry that had sent it off.

So {child_name} did the only thing that made any sense, which was to split the plum three ways — one piece for the smaller kid, one for {companion_name}, one to keep — and the three of them ate it on the rise while below them {setting} began, stall by stall, to fold itself up for the night.

The lamps came on amber along the lanes. The good baker sold the last of the twists and shuttered the stall. Somewhere the traveler's fiddle started up again, slow now, a tune for the end of a day. And {child_name} sat with the {object_motif} in one hand and a plum stone in the other, tired in the deep and satisfied way that only comes after you've spent yourself on something worthwhile and found yourself fuller than when you began.

"I thought I'd wasted my whole month," {child_name} said, watching the first stars come out unevenly over {setting}.

"You invested it," {companion_name} said, and left it there.

The stone was cool. The square below breathed slow and gold. And {child_name}'s eyes, without asking permission, began to close.

{refrain}.`
  }
},
    audioTemplate: `The {object_motif} was glowing brightly now in {setting}, and the {hero} noticed something wonderful.

The small kindness they had given days ago had not stopped with their friend. That friend had been kind to someone else. And that someone had been kind to another.

"It kept going," said the {hero}, amazed. "Like a light passed from hand to hand."

{companion_name} nodded. "Kindness is not used up when you give it. It spreads. One warm light becomes many."

And just then, a kindness came back around — a friend doing something gentle for the {hero}, without even knowing how it had all begun.

The {object_motif} shone its warmest yet, lighting the whole of {setting}.

"I only started with something small," said the {hero}.

"Small is how every big warmth begins," said {companion_name}.

The {hero} watched the glow travel on into the night, and felt part of something much larger than one kind act.

{refrain}.`,
    scriptTemplate: `The {object_motif} was glowing brightly now in {setting}, and {child_name} the {hero} noticed something wonderful.

The small kindness {child_name} had given days ago had not stopped with their friend. That friend had been kind to someone else. And that someone had been kind to another.

"It kept going," said {child_name}, amazed. "Like a light passed from hand to hand."

{companion_name} nodded. "Kindness is not used up when you give it. It spreads. One warm light becomes many."

And just then, a kindness came back around — a friend doing something gentle for {child_name}, without even knowing how it had all begun.

The {object_motif} shone its warmest yet, lighting the whole of {setting}.

"I only started with something small," said {child_name}.

"Small is how every big warmth begins," said {companion_name}.

{child_name} watched the glow travel on into the night, and felt part of something much larger than one kind act.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'Kind to Yourself Too',
    concept: 'Kindness includes how you treat yourself', callback: 'Kindness comes back (Level 4)', ageFloor: 5,
    summary: 'The capstone: the hero, so kind to everyone else, is hard on themselves after a mistake. Their companion gently reminds them that they belong on the list of people who deserve kindness. It draws the path together — the warmth you share must also reach you.',
    teachingNote: 'Self-compassion completes empathy: a child who can be kind to themselves can sustain kindness toward everyone else.',
    learningBeat: 'deserve kindness',
    ageVariants: {
  '3-4': { audioTemplate: `The {hero} was kind. In {setting}, the {hero} helped everyone.

The {hero} helped a small friend up the hill. The {hero} shared a snack. The {hero} gave big, warm hugs. The {hero} said nice things all day. "You can do it," said the {hero}. "You are a good friend." The {hero} helped a bird find its nest. The {hero} helped {companion_name} tie a knot.

Everyone in {setting} smiled. The {hero} felt happy.

One morning, {companion_name} came to play. They walked together in the soft light.

Then the {hero} made a mistake. The {hero} was carrying a basket. The {hero} tripped. The basket tipped. Berries rolled everywhere. Red berries lay in the grass. Oh no!

The {hero} felt sad. The {hero} frowned. "I am so silly," said the {hero}. "I always mess up. I am the worst."

{companion_name} stopped walking. {companion_name} sat down close.

"Wait," said {companion_name}. "You would never say that to a friend. You make a kind list for everyone. You belong on it too. You deserve kindness."

The {hero} went quiet. That felt new.

"Try again," said {companion_name}. "But this time, be soft. Talk to you like a friend."

The {hero} took a slow, deep breath. "It was just a little mistake," said the {hero}. "I can pick them up. I can try again." The heavy feeling grew smaller.

That felt better. That felt warm.

So they picked up the berries together. They did not rush. They just picked, one by one. One berry. Two berries. Three berries. The basket filled up again. {companion_name} held the {object_motif} and smiled.

"See?" said {companion_name}. The {hero} nodded.

The {hero} laughed a little. The bad feeling floated away. The berries were safe now. Not one was lost.

They walked home slow and happy. The sky turned soft and pink. The moon came up, round and white. It smiled down on {setting}. Sleepy birds tucked in for the night.

The {hero} was kind to friends. The {hero} was kind to everyone. And now, at last, the {hero} was kind to the {hero} too. Kind to friends. Kind to all. Kind to the {hero} too.

The {hero} said the soft words one more time. "I am my own good friend."

Then the {hero} yawned a big, sleepy yawn.

{refrain}.`, scriptTemplate: `{child_name} was kind. In {setting}, {child_name} helped everyone.

{child_name} helped a small friend up the hill. {child_name} shared a snack. {child_name} gave big, warm hugs. {child_name} said nice things all day. "You can do it," said {child_name}. "You are a good friend." {child_name} helped a bird find its nest. {child_name} helped {companion_name} tie a knot.

Everyone in {setting} smiled. {child_name} felt happy.

One morning, {companion_name} came to play. They walked together in the soft light.

Then {child_name} made a mistake. {child_name} was carrying a basket. {child_name} tripped. The basket tipped. Berries rolled everywhere. Red berries lay in the grass. Oh no!

{child_name} felt sad. {child_name} frowned. "I am so silly," said {child_name}. "I always mess up. I am the worst."

{companion_name} stopped walking. {companion_name} sat down close.

"Wait," said {companion_name}. "You would never say that to a friend. You make a kind list for everyone. You belong on it too. You deserve kindness."

{child_name} went quiet. That felt new.

"Try again," said {companion_name}. "But this time, be soft. Talk to you like a friend."

{child_name} took a slow, deep breath. "It was just a little mistake," said {child_name}. "I can pick them up. I can try again." The heavy feeling grew smaller.

That felt better. That felt warm.

So they picked up the berries together. They did not rush. They just picked, one by one. One berry. Two berries. Three berries. The basket filled up again. {companion_name} held the {object_motif} and smiled.

"See?" said {companion_name}. {child_name} nodded.

{child_name} laughed a little. The bad feeling floated away. The berries were safe now. Not one was lost.

They walked home slow and happy. The sky turned soft and pink. The moon came up, round and white. It smiled down on {setting}. Sleepy birds tucked in for the night.

{child_name} was kind to friends. {child_name} was kind to everyone. And now, at last, {child_name} was kind to {child_name} too. Kind to friends. Kind to all. Kind to {child_name} too.

{child_name} said the soft words one more time. "I am my own good friend."

Then {child_name} yawned a big, sleepy yawn.

{refrain}.` },
  '5-6': { audioTemplate: `The {hero} was the kindest one in all of {setting}. If someone felt small, the {hero} sat beside them. If someone felt scared, the {hero} held their hand. The {hero} shared snacks, saved seats, and cheered the loudest when a friend tried something new. Kindness was just what the {hero} did, the way other people breathe.

"You did it!" the {hero} would say. "I knew you could."

When the little ones in {setting} could not reach the high branch, the {hero} lifted them. When someone cried, the {hero} found a joke to make them giggle. The {hero} remembered everybody's favorite things and saved the best spot for whoever was having a hard day.

Everyone in {setting} felt warmer when the {hero} was near. Everyone, that is, except one person the {hero} kept forgetting: the {hero}.

One afternoon, the {hero} and {companion_name} set out to build a little boat to float on the water. The {hero} had planned it for days. But when the {hero} pushed the boat out, it wobbled, tipped, and sank with a sad glug. Bubbles rose where the boat had been. For a moment the {hero} just stared at the ring of bubbles where all that work had gone. The {hero} let out a breath they did not know they were holding.

The {hero}'s face went hot. "I am so stupid," the {hero} whispered. "I always ruin things. Nobody messes up as much as me. I am the worst builder in {setting}."

{companion_name} had been quiet, but now they turned. "Stop," they said softly. "Listen to the words you just used. Would you ever say them to me?"

The {hero} blinked. "No. Never. You would feel terrible."

"Then why are they okay to say to you?" {companion_name} asked. "You are gentle with every friend here. You are the only one you forget. You deserve kindness too."

The {hero} opened their mouth, then closed it. It was true. The {hero} had a kind word for everybody in the world, and none left over for the {hero}. The {hero} thought of how it would feel to have a friend speak to them the way the {hero} spoke to themselves. It would sting. It would make them want to hide.

"Try it again," said {companion_name}. "Only this time, be your own friend."

The {hero} took a slow breath, the kind that reaches all the way down. "Okay," the {hero} said quietly. "The boat sank. That happens. Boats are hard. I can look at what went wrong, and I can build another."

Something loosened in the {hero}'s chest. The mean words had felt like stones. These new words felt like a warm hand. The {hero} said them once more, just to feel how different they were. Nothing bad happened. The sky did not fall. The {hero} was still the {hero} — only kinder now, on the inside.

So the {hero} and {companion_name} pulled the boat out and studied it. The bottom was too thin. The {hero} did not call it a disaster. The {hero} just fixed it. They gathered better wood, pressed it tight, and shaped a sturdier hull. This time the {hero} worked slowly, checking each part twice, and did not call a single mistake a crime. The wet wood was cool and smelled of the water. {companion_name} hummed while they worked, and the afternoon felt easy again. {companion_name} passed the {object_motif} across, and the {hero} set it gently in place.

When they pushed the second boat out, it caught the breeze and sailed, steady and proud, all the way across the water.

"Look at that," said {companion_name}, grinning.

But the {hero} was not only watching the boat. The {hero} was noticing something new inside: a small, kind voice that had not been there before. It sounded a little like {companion_name}. It sounded a little like the {hero}.

They walked home as the light went gold and low over {setting}. A first star showed itself over {setting}, small and sure. The {hero} thought about all the friends the {hero} had ever helped. And for the first time, the {hero} added one more quiet name to that long, kind list. The {hero}'s own.

"Goodnight, friend," the {hero} whispered — to the world, and to the {hero} too.

{refrain}.`, scriptTemplate: `{child_name} was the kindest one in all of {setting}. If someone felt small, {child_name} sat beside them. If someone felt scared, {child_name} held their hand. {child_name} shared snacks, saved seats, and cheered the loudest when a friend tried something new. Kindness was just what {child_name} did, the way other people breathe.

"You did it!" {child_name} would say. "I knew you could."

When the little ones in {setting} could not reach the high branch, {child_name} lifted them. When someone cried, {child_name} found a joke to make them giggle. {child_name} remembered everybody's favorite things and saved the best spot for whoever was having a hard day.

Everyone in {setting} felt warmer when {child_name} was near. Everyone, that is, except one person {child_name} kept forgetting: {child_name}.

One afternoon, {child_name} and {companion_name} set out to build a little boat to float on the water. {child_name} had planned it for days. But when {child_name} pushed the boat out, it wobbled, tipped, and sank with a sad glug. Bubbles rose where the boat had been. For a moment {child_name} just stared at the ring of bubbles where all that work had gone. {child_name} let out a breath they did not know they were holding.

{child_name}'s face went hot. "I am so stupid," {child_name} whispered. "I always ruin things. Nobody messes up as much as me. I am the worst builder in {setting}."

{companion_name} had been quiet, but now they turned. "Stop," they said softly. "Listen to the words you just used. Would you ever say them to me?"

{child_name} blinked. "No. Never. You would feel terrible."

"Then why are they okay to say to you?" {companion_name} asked. "You are gentle with every friend here. You are the only one you forget. You deserve kindness too."

{child_name} opened their mouth, then closed it. It was true. {child_name} had a kind word for everybody in the world, and none left over for {child_name}. {child_name} thought of how it would feel to have a friend speak to them the way {child_name} spoke to themselves. It would sting. It would make them want to hide.

"Try it again," said {companion_name}. "Only this time, be your own friend."

{child_name} took a slow breath, the kind that reaches all the way down. "Okay," {child_name} said quietly. "The boat sank. That happens. Boats are hard. I can look at what went wrong, and I can build another."

Something loosened in {child_name}'s chest. The mean words had felt like stones. These new words felt like a warm hand. {child_name} said them once more, just to feel how different they were. Nothing bad happened. The sky did not fall. {child_name} was still {child_name} — only kinder now, on the inside.

So {child_name} and {companion_name} pulled the boat out and studied it. The bottom was too thin. {child_name} did not call it a disaster. {child_name} just fixed it. They gathered better wood, pressed it tight, and shaped a sturdier hull. This time {child_name} worked slowly, checking each part twice, and did not call a single mistake a crime. The wet wood was cool and smelled of the water. {companion_name} hummed while they worked, and the afternoon felt easy again. {companion_name} passed the {object_motif} across, and {child_name} set it gently in place.

When they pushed the second boat out, it caught the breeze and sailed, steady and proud, all the way across the water.

"Look at that," said {companion_name}, grinning.

But {child_name} was not only watching the boat. {child_name} was noticing something new inside: a small, kind voice that had not been there before. It sounded a little like {companion_name}. It sounded a little like {child_name}.

They walked home as the light went gold and low over {setting}. A first star showed itself over {setting}, small and sure. {child_name} thought about all the friends {child_name} had ever helped. And for the first time, {child_name} added one more quiet name to that long, kind list. {child_name}'s own.

"Goodnight, friend," {child_name} whispered — to the world, and to {child_name} too.

{refrain}.` },
  '7-8': { audioTemplate: `Everyone in {setting} knew the {hero} as the kind one. When a smaller kid scraped a knee, the {hero} was already there with a joke and a steady hand. When somebody sat alone, the {hero} sat down next to them like it was the most natural thing in the world. If two friends argued, the {hero} was the one who helped them find their way back to each other. The {hero} noticed the quiet ones, the left-out ones, the ones having a bad day, and the {hero} always had exactly the right gentle words for them.

There was only one person the {hero} was never gentle with, and that was the {hero}.

On the day of the {setting} fair, the {hero} and {companion_name} had spent a whole week building something special: a marble run that would send a marble rolling, looping, and clattering all the way down a tall wooden tower. The {hero} had drawn the plans. The {hero} had cut every ramp. For seven days they had measured, sanded, and glued, until the tower stood taller than the {hero} and every ramp gleamed with fresh paint. The {hero} had barely slept the night before, too excited to lie still, picturing the marble's whole journey in the dark. When people gathered around to watch the first run, the {hero}'s hands were buzzing with excitement.

The {hero} placed the marble at the top and let go.

It rolled, it looped — and then, at the third turn, it flew off a ramp that was tilted a hair too steep, bounced across the grass, and vanished under a table. The little tower sat there, silent. A couple of kids drifted away to watch something else. The {hero} wanted to disappear. It was not a big crowd, and no one laughed — but the empty space where the watchers had been felt enormous.

Heat crawled up the {hero}'s neck. "I knew it," the {hero} said under their breath. "I'm useless. A whole week, and I couldn't even get one thing right. Everyone else can build. I just wreck things. I'm an idiot."

{companion_name}, who had been picking up the runaway marble, went very still. They came and crouched beside the {hero}.

"Hey," {companion_name} said quietly. "I want you to hear the words you just said out loud. Useless. Idiot. If I said those about myself, what would you tell me?"

The {hero} looked at the grass. "I'd tell you to stop. I'd tell you it isn't true. I'd tell you it was just one ramp." The words came out easily, the way kindness always did when it was pointed at someone else.

"Right," said {companion_name}. "So you know exactly how to be kind. You do it for everyone in {setting}, all day long. You've just never once pointed it at yourself. You deserve kindness too — the same kindness you hand out like it's free."

The {hero} sat with that. It was a strange, dawning feeling, like noticing a door that had been in the wall the whole time. The {hero} had a soft voice ready for every friend in the world. But the voice the {hero} used inside, in private, was sharp enough to cut. For as long as the {hero} could remember, that inside voice had just sounded like the truth. Now, hearing it named out loud, it sounded like something borrowed — something the {hero} had never chosen and did not have to keep.

"Try again," said {companion_name}. "Only this time, talk to yourself the way you'd talk to me."

The {hero} took a breath and unclenched their fists. "Okay," the {hero} said slowly. "The marble came off at the third ramp. That's information, not a disaster. One angle is wrong. I know how to fix an angle." Saying it that way, the panic drained out and something steadier took its place. The {hero} noticed how different the two voices felt in the body: the mean one made everything tight, the kind one let the shoulders drop.

They knelt together at the tower. The {hero} did not tear the whole thing down in a temper the way the old voice wanted to. The {hero} looked closely, found the ramp tilted too steep, and eased it back a few degrees. It was such a small thing to fix — a few degrees, one patient minute — and the {hero} thought of all the times a small fix had felt impossible under the weight of the mean words. {companion_name} handed the {object_motif} over so the {hero} could wedge the ramp level and hold it while the glue set.

"Test it," said {companion_name}.

The {hero}'s stomach flipped — but it was a smaller flip now, more curious than afraid. The {hero} set a new marble at the top and let go.

It rolled. It looped. It hit the third turn — and held the line, clattering down through every ramp, spinning around the last curl, and dropping into the little cup at the bottom with a bright, perfect click. The kids who had stayed cheered, and the ones who'd wandered off came hurrying back.

But the {hero} noticed something even better than the cheering. Inside, where the sharp voice usually lived, there was a new one now — smaller, kinder, and steady. It sounded a little like {companion_name}. Mostly, though, it sounded like the {hero} finally learning to be the {hero}'s own friend. The cheering was nice, but it would fade by morning. This new voice, the {hero} suspected, was the kind of thing you got to keep.

As the fair lanterns flickered on across {setting}, the {hero} ran the marble one more time, just to hear that click. And this time, when it landed, the {hero} said the words out loud, plain and easy: "Nice work." A few people asked the {hero} to run it again, and the {hero} did, laughing now, the earlier sting already softening into a story worth telling.

The {hero} meant the marble run. But the {hero} also, at last, meant the {hero}.

{refrain}.`, scriptTemplate: `Everyone in {setting} knew {child_name} as the kind one. When a smaller kid scraped a knee, {child_name} was already there with a joke and a steady hand. When somebody sat alone, {child_name} sat down next to them like it was the most natural thing in the world. If two friends argued, {child_name} was the one who helped them find their way back to each other. {child_name} noticed the quiet ones, the left-out ones, the ones having a bad day, and {child_name} always had exactly the right gentle words for them.

There was only one person {child_name} was never gentle with, and that was {child_name}.

On the day of the {setting} fair, {child_name} and {companion_name} had spent a whole week building something special: a marble run that would send a marble rolling, looping, and clattering all the way down a tall wooden tower. {child_name} had drawn the plans. {child_name} had cut every ramp. For seven days they had measured, sanded, and glued, until the tower stood taller than {child_name} and every ramp gleamed with fresh paint. {child_name} had barely slept the night before, too excited to lie still, picturing the marble's whole journey in the dark. When people gathered around to watch the first run, {child_name}'s hands were buzzing with excitement.

{child_name} placed the marble at the top and let go.

It rolled, it looped — and then, at the third turn, it flew off a ramp that was tilted a hair too steep, bounced across the grass, and vanished under a table. The little tower sat there, silent. A couple of kids drifted away to watch something else. {child_name} wanted to disappear. It was not a big crowd, and no one laughed — but the empty space where the watchers had been felt enormous.

Heat crawled up {child_name}'s neck. "I knew it," {child_name} said under their breath. "I'm useless. A whole week, and I couldn't even get one thing right. Everyone else can build. I just wreck things. I'm an idiot."

{companion_name}, who had been picking up the runaway marble, went very still. They came and crouched beside {child_name}.

"Hey," {companion_name} said quietly. "I want you to hear the words you just said out loud. Useless. Idiot. If I said those about myself, what would you tell me?"

{child_name} looked at the grass. "I'd tell you to stop. I'd tell you it isn't true. I'd tell you it was just one ramp." The words came out easily, the way kindness always did when it was pointed at someone else.

"Right," said {companion_name}. "So you know exactly how to be kind. You do it for everyone in {setting}, all day long. You've just never once pointed it at yourself. You deserve kindness too — the same kindness you hand out like it's free."

{child_name} sat with that. It was a strange, dawning feeling, like noticing a door that had been in the wall the whole time. {child_name} had a soft voice ready for every friend in the world. But the voice {child_name} used inside, in private, was sharp enough to cut. For as long as {child_name} could remember, that inside voice had just sounded like the truth. Now, hearing it named out loud, it sounded like something borrowed — something {child_name} had never chosen and did not have to keep.

"Try again," said {companion_name}. "Only this time, talk to yourself the way you'd talk to me."

{child_name} took a breath and unclenched their fists. "Okay," {child_name} said slowly. "The marble came off at the third ramp. That's information, not a disaster. One angle is wrong. I know how to fix an angle." Saying it that way, the panic drained out and something steadier took its place. {child_name} noticed how different the two voices felt in the body: the mean one made everything tight, the kind one let the shoulders drop.

They knelt together at the tower. {child_name} did not tear the whole thing down in a temper the way the old voice wanted to. {child_name} looked closely, found the ramp tilted too steep, and eased it back a few degrees. It was such a small thing to fix — a few degrees, one patient minute — and {child_name} thought of all the times a small fix had felt impossible under the weight of the mean words. {companion_name} handed the {object_motif} over so {child_name} could wedge the ramp level and hold it while the glue set.

"Test it," said {companion_name}.

{child_name}'s stomach flipped — but it was a smaller flip now, more curious than afraid. {child_name} set a new marble at the top and let go.

It rolled. It looped. It hit the third turn — and held the line, clattering down through every ramp, spinning around the last curl, and dropping into the little cup at the bottom with a bright, perfect click. The kids who had stayed cheered, and the ones who'd wandered off came hurrying back.

But {child_name} noticed something even better than the cheering. Inside, where the sharp voice usually lived, there was a new one now — smaller, kinder, and steady. It sounded a little like {companion_name}. Mostly, though, it sounded like {child_name} finally learning to be {child_name}'s own friend. The cheering was nice, but it would fade by morning. This new voice, {child_name} suspected, was the kind of thing you got to keep.

As the fair lanterns flickered on across {setting}, {child_name} ran the marble one more time, just to hear that click. And this time, when it landed, {child_name} said the words out loud, plain and easy: "Nice work." A few people asked {child_name} to run it again, and {child_name} did, laughing now, the earlier sting already softening into a story worth telling.

{child_name} meant the marble run. But {child_name} also, at last, meant {child_name}.

{refrain}.` },
  '9-11': { audioTemplate: `If you asked anyone in {setting} to describe the {hero}, the first word out of their mouth would be kind. The {hero} was the one who remembered which friend was nervous about a test and found them beforehand with something steady to say. The {hero} noticed the kid eating alone and made it look like an accident, a lucky coincidence, that there happened to be an open seat right there. Last winter, when a new kid arrived in {setting} halfway through the season and knew no one, it was the {hero} who learned their name first and made sure they were never the last one picked for anything. Kindness, for the {hero}, was not a special effort. It was simply the shape the {hero} moved through the world in.

Which was why almost no one knew about the other voice — the one that only ever spoke when the {hero} was alone.

It had opinions, that voice. It kept a list. Every dropped ball, every forgotten promise, every clumsy sentence the {hero} had ever said out loud — the voice filed them all away and read them back at night. And the {hero}, who would never in a thousand years speak that way to a friend, had somehow decided the voice was just being honest.

The strange part was that the {hero} thought of it as fairness. Everyone else got the benefit of the doubt; the {hero} got the fine print. If a friend forgot a birthday, the {hero} said life gets busy, it happens. If the {hero} forgot one, it went on the list as proof of some deeper failing. Two completely different scales, and the {hero} had never once noticed they weren't the same.

The evening it came to a head, the {hero} and {companion_name} were in the workshop at the edge of {setting}, finishing a model bridge for the end-of-season showcase. They had the workshop to themselves, the good lamp angled just so, a row of tiny clamps standing by like patient helpers. The {hero} had been looking forward to this moment for weeks — the first real test, the payoff for all those margin sketches. The {hero} had designed it: a slender span meant to hold its own weight and then some, the kind of thing the {hero} had sketched in the margins of every notebook for a month.

The {hero} set the last piece, stepped back, and rested a small weight on the deck to test it. For a second it held. Then a joint the {hero} had glued crackled, and one whole side of the bridge folded quietly inward and lay down on the table like it was tired. For a second the {hero} just looked at it, the collapsed span, the small weight sitting smugly on the wreckage. {companion_name} was right there, which somehow made it worse and better at once.

The voice woke up instantly. Of course, it said. You knew this would happen. And the {hero} said the rest out loud without quite meaning to, low and flat: "I'm such a fraud. A month of work and I can't even build a bridge that stands for ten seconds. Everybody thinks I'm so clever. I'm not. I'm a joke."

{companion_name} set down the clamp they were holding. For a while they didn't say anything at all. Then, carefully, the way you'd step onto ice: "Can I read that back to you? Fraud. Joke. Can't even. You just described someone you clearly think is worthless. If a friend stood here and said those exact words about themselves, you would not sit still for it. You'd be furious on their behalf."

Something in the {hero}'s throat went tight. Not from the bridge — the bridge was nothing, the bridge was glue and balsa. It was hearing, from outside, how the words actually sounded. Furious on their behalf. The {hero} would be. The {hero} had been, more than once, for other people. Just never for the {hero}.

The {hero} didn't answer right away. It was true, and being true made it strange, almost dizzying. The {hero} spent so much care on everyone else — chose words for them like picking out the softest stone from a riverbed — and then turned around and threw the sharpest ones at the {hero} without a second thought.

Part of the {hero} wanted to argue. Being hard on yourself was how you got better, wasn't it? If the {hero} let up, wouldn't the {hero} just get lazy and sloppy and stop trying? The {hero} said something like that out loud.

{companion_name} tilted their head. "Does it work like that for the people you're kind to? When you're gentle with them, do they get lazy — or do they get braver?" The {hero} thought about it. The friends the {hero} encouraged didn't fall apart. They tried more, not less. "That's the trick nobody tells you," {companion_name} added. "Cruelty doesn't make you sharper. It just makes you scared."

"I don't know how to talk to myself like that," the {hero} admitted. "It just comes out mean. It's automatic."

{companion_name} nodded like that was the most reasonable thing in the world. "It's a habit, not a fact. And habits can be interrupted. You don't have to force yourself to feel amazing. Just try telling yourself the truth without the cruelty. You deserve kindness too — and that includes the kindness coming from you."

The {hero} turned the idea over. A list of people who deserved patience, second chances, the soft version of the truth. The {hero} had been keeping that list for years, adding names generously, defending everyone on it. It had honestly never occurred to the {hero} that the {hero}'s own name could go there too — that it belonged there, had belonged there the whole time, and had simply been left off by an oversight the {hero} kept mistaking for humility.

"How do I start?" the {hero} asked. It felt like a real question, not a rhetorical one. {companion_name} shrugged, gentle. "Same way you'd start with anyone you cared about. You catch the cruel thing on its way out, and you swap it for something true and warm instead. You'll be clumsy at first. That's allowed." The {hero} almost smiled at that. Allowed. As if clumsiness were just part of learning, and not another item for the list.

So the {hero} tried. It felt clumsy, like writing with the wrong hand. "Okay," the {hero} said, quietly, mostly to the broken bridge. "The joint failed. That's all that happened. It's not a verdict on me. I used too little glue and asked it to hold too soon. Those are both fixable." The words came out stiff and self-conscious. But underneath the awkwardness, something in the {hero}'s chest actually loosened, the way a fist forgets, finger by finger, that it was ever clenched.

It helped to have something to do with the hands. The workshop smelled of glue and sawdust and the cooling evening coming in through the open door. The {hero} lined up the broken pieces and, for the first time all night, looked at them as a problem to solve rather than evidence for the prosecution.

They rebuilt the joint together. {companion_name} handed the {object_motif} across so the {hero} could brace the two halves of the span while a fresh line of glue took hold, and this time the {hero} waited, really waited, counting slow breaths instead of rushing to the verdict. The old voice tried once or twice to start up its usual commentary. The {hero} noticed it, the way you notice weather, and simply chose the other voice instead.

When the glue had set, the {hero} rested the weight on the deck again — a little heavier this time, honestly testing it. The {hero} let out a breath that seemed to have been waiting all evening for permission to leave. The bridge took the load and held. It didn't just survive; it sat there under the weight looking almost relaxed, exactly as the {hero} had drawn it a month before in the corner of a page.

"There it is," said {companion_name}, and the plain pride in their voice was worth more than any crowd.

But the thing the {hero} kept, walking home later under the first cool stars of {setting}, wasn't the bridge. It was the discovery that the sharp voice had never actually been the truth — only a habit wearing the truth's coat. And that there was another way to speak in the quiet, one the {hero} had been generous with for everyone else and stingy with only for the {hero}.

It wouldn't vanish overnight; the {hero} understood that. The old voice would show up again tomorrow, and the day after, sounding as certain as ever. But now the {hero} knew something it didn't want the {hero} to know: that a kinder voice was available, that it could be practised, and that choosing it wasn't going soft — it was just, finally, letting the {hero} onto the same list of people the {hero} had always thought deserved care. The {hero} turned the key in the workshop door and walked home lighter than the bridge, and steadier too.

{refrain}.`, scriptTemplate: `If you asked anyone in {setting} to describe {child_name}, the first word out of their mouth would be kind. {child_name} was the one who remembered which friend was nervous about a test and found them beforehand with something steady to say. {child_name} noticed the kid eating alone and made it look like an accident, a lucky coincidence, that there happened to be an open seat right there. Last winter, when a new kid arrived in {setting} halfway through the season and knew no one, it was {child_name} who learned their name first and made sure they were never the last one picked for anything. Kindness, for {child_name}, was not a special effort. It was simply the shape {child_name} moved through the world in.

Which was why almost no one knew about the other voice — the one that only ever spoke when {child_name} was alone.

It had opinions, that voice. It kept a list. Every dropped ball, every forgotten promise, every clumsy sentence {child_name} had ever said out loud — the voice filed them all away and read them back at night. And {child_name}, who would never in a thousand years speak that way to a friend, had somehow decided the voice was just being honest.

The strange part was that {child_name} thought of it as fairness. Everyone else got the benefit of the doubt; {child_name} got the fine print. If a friend forgot a birthday, {child_name} said life gets busy, it happens. If {child_name} forgot one, it went on the list as proof of some deeper failing. Two completely different scales, and {child_name} had never once noticed they weren't the same.

The evening it came to a head, {child_name} and {companion_name} were in the workshop at the edge of {setting}, finishing a model bridge for the end-of-season showcase. They had the workshop to themselves, the good lamp angled just so, a row of tiny clamps standing by like patient helpers. {child_name} had been looking forward to this moment for weeks — the first real test, the payoff for all those margin sketches. {child_name} had designed it: a slender span meant to hold its own weight and then some, the kind of thing {child_name} had sketched in the margins of every notebook for a month.

{child_name} set the last piece, stepped back, and rested a small weight on the deck to test it. For a second it held. Then a joint {child_name} had glued crackled, and one whole side of the bridge folded quietly inward and lay down on the table like it was tired. For a second {child_name} just looked at it, the collapsed span, the small weight sitting smugly on the wreckage. {companion_name} was right there, which somehow made it worse and better at once.

The voice woke up instantly. Of course, it said. You knew this would happen. And {child_name} said the rest out loud without quite meaning to, low and flat: "I'm such a fraud. A month of work and I can't even build a bridge that stands for ten seconds. Everybody thinks I'm so clever. I'm not. I'm a joke."

{companion_name} set down the clamp they were holding. For a while they didn't say anything at all. Then, carefully, the way you'd step onto ice: "Can I read that back to you? Fraud. Joke. Can't even. You just described someone you clearly think is worthless. If a friend stood here and said those exact words about themselves, you would not sit still for it. You'd be furious on their behalf."

Something in {child_name}'s throat went tight. Not from the bridge — the bridge was nothing, the bridge was glue and balsa. It was hearing, from outside, how the words actually sounded. Furious on their behalf. {child_name} would be. {child_name} had been, more than once, for other people. Just never for {child_name}.

{child_name} didn't answer right away. It was true, and being true made it strange, almost dizzying. {child_name} spent so much care on everyone else — chose words for them like picking out the softest stone from a riverbed — and then turned around and threw the sharpest ones at {child_name} without a second thought.

Part of {child_name} wanted to argue. Being hard on yourself was how you got better, wasn't it? If {child_name} let up, wouldn't {child_name} just get lazy and sloppy and stop trying? {child_name} said something like that out loud.

{companion_name} tilted their head. "Does it work like that for the people you're kind to? When you're gentle with them, do they get lazy — or do they get braver?" {child_name} thought about it. The friends {child_name} encouraged didn't fall apart. They tried more, not less. "That's the trick nobody tells you," {companion_name} added. "Cruelty doesn't make you sharper. It just makes you scared."

"I don't know how to talk to myself like that," {child_name} admitted. "It just comes out mean. It's automatic."

{companion_name} nodded like that was the most reasonable thing in the world. "It's a habit, not a fact. And habits can be interrupted. You don't have to force yourself to feel amazing. Just try telling yourself the truth without the cruelty. You deserve kindness too — and that includes the kindness coming from you."

{child_name} turned the idea over. A list of people who deserved patience, second chances, the soft version of the truth. {child_name} had been keeping that list for years, adding names generously, defending everyone on it. It had honestly never occurred to {child_name} that {child_name}'s own name could go there too — that it belonged there, had belonged there the whole time, and had simply been left off by an oversight {child_name} kept mistaking for humility.

"How do I start?" {child_name} asked. It felt like a real question, not a rhetorical one. {companion_name} shrugged, gentle. "Same way you'd start with anyone you cared about. You catch the cruel thing on its way out, and you swap it for something true and warm instead. You'll be clumsy at first. That's allowed." {child_name} almost smiled at that. Allowed. As if clumsiness were just part of learning, and not another item for the list.

So {child_name} tried. It felt clumsy, like writing with the wrong hand. "Okay," {child_name} said, quietly, mostly to the broken bridge. "The joint failed. That's all that happened. It's not a verdict on me. I used too little glue and asked it to hold too soon. Those are both fixable." The words came out stiff and self-conscious. But underneath the awkwardness, something in {child_name}'s chest actually loosened, the way a fist forgets, finger by finger, that it was ever clenched.

It helped to have something to do with the hands. The workshop smelled of glue and sawdust and the cooling evening coming in through the open door. {child_name} lined up the broken pieces and, for the first time all night, looked at them as a problem to solve rather than evidence for the prosecution.

They rebuilt the joint together. {companion_name} handed the {object_motif} across so {child_name} could brace the two halves of the span while a fresh line of glue took hold, and this time {child_name} waited, really waited, counting slow breaths instead of rushing to the verdict. The old voice tried once or twice to start up its usual commentary. {child_name} noticed it, the way you notice weather, and simply chose the other voice instead.

When the glue had set, {child_name} rested the weight on the deck again — a little heavier this time, honestly testing it. {child_name} let out a breath that seemed to have been waiting all evening for permission to leave. The bridge took the load and held. It didn't just survive; it sat there under the weight looking almost relaxed, exactly as {child_name} had drawn it a month before in the corner of a page.

"There it is," said {companion_name}, and the plain pride in their voice was worth more than any crowd.

But the thing {child_name} kept, walking home later under the first cool stars of {setting}, wasn't the bridge. It was the discovery that the sharp voice had never actually been the truth — only a habit wearing the truth's coat. And that there was another way to speak in the quiet, one {child_name} had been generous with for everyone else and stingy with only for {child_name}.

It wouldn't vanish overnight; {child_name} understood that. The old voice would show up again tomorrow, and the day after, sounding as certain as ever. But now {child_name} knew something it didn't want {child_name} to know: that a kinder voice was available, that it could be practised, and that choosing it wasn't going soft — it was just, finally, letting {child_name} onto the same list of people {child_name} had always thought deserved care. {child_name} turned the key in the workshop door and walked home lighter than the bridge, and steadier too.

{refrain}.` }
},
    audioTemplate: `The {object_motif} glowed softly in {setting}, but tonight the {hero} was frowning — at themselves.

"I made a mistake today," they said. "I was not good enough."

{companion_name} looked at them with great tenderness. "You have been so kind to everyone," they said. "You noticed feelings. You gave small kindnesses. You let kindness spread. But you forgot one person."

"Who?" asked the {hero}.

"You," said {companion_name} gently. "You belong on the list of people who deserve kindness. Especially from yourself."

The {hero} grew quiet. They thought of how gently they spoke to a sad friend — and how harshly they had just spoken to themselves.

"I would never say that to someone I love," the {hero} realised.

"Then do not say it to you," said {companion_name}.

The {hero} took a slow, warm breath and let the kindness turn inward at last. The {object_motif} glowed brightest of all — because now the warmth reached everyone, including the one who had been sharing it.

{refrain}.`,
    scriptTemplate: `The {object_motif} glowed softly in {setting}, but tonight {child_name} the {hero} was frowning — at themselves.

"I made a mistake today," {child_name} said. "I was not good enough."

{companion_name} looked at them with great tenderness. "You have been so kind to everyone, {child_name}," they said. "You noticed feelings. You gave small kindnesses. You let kindness spread. But you forgot one person."

"Who?" asked {child_name}.

"You," said {companion_name} gently. "You belong on the list of people who deserve kindness. Especially from yourself."

{child_name} grew quiet, and thought of how gently they spoke to a sad friend — and how harshly they had just spoken to themselves.

"I would never say that to someone I love," {child_name} realised.

"Then do not say it to you," said {companion_name}.

{child_name} took a slow, warm breath and let the kindness turn inward at last. The {object_motif} glowed brightest of all — because now the warmth reached everyone, including the one who had been sharing it.

{refrain}.`,
  },
]
