// content/confidence/levels.ts
//
// Confidence — 5 leveled bedtime stories (the quiet belief that you can try).
// Same two-template structure as the other paths:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// Framework: calm-adventure with 5-beat spine (HOOK → TRY → TURN → WIN → SETTLE)
// All stories feature learning beat at TURN (55-70%), soft twist showing the concept
// IS the key, whispered listener-aside, sound word, and refrain.
//
// To draft/refine: npm run author:draft -- --subject confidence --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: "The Smallest Start",
    concept: 'Beginning with what you have, not waiting for perfect', callback: null, ageFloor: 3,
    summary: 'A small hero carries a tiny light and believes they must grow bigger before they can shine. Their companion shows them that the smallest light still brightens the dark, and that beginning is enough.',
    teachingNote: 'Confidence begins when a child realizes their small effort counts. The soft twist reveals that what matters is not size, but showing up with what they have.',
    learningBeat: 'Your light is already bright enough',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, the {hero} held the {object_motif} tight.

It was small. So small. The {hero} looked at it and felt very big, and very scared.

All around {setting}, the bigger lights were shining. The {hero}'s light was only a tiny one. "My light is too small," said the {hero}. "I should wait until I grow."

{companion_name} sat close and warm. {companion_name} smiled a soft smile.

"What if we try now?" asked {companion_name}. "Right now, with the light you have?"

The {hero} looked at the darkness all around. The {hero} took a slow, slow breath.

The {hero} held the {object_motif} up high. Up, up, up.

And psst — did you hear that whisper? It was {companion_name}, saying to you, dear one: even the smallest light is brave.

The tiny light went out into the dark. And something happened. The darkness was not so dark anymore. The tiny light made a circle of warm, and in that circle were shadows soft and kind.

"Look," said {companion_name}. "Your light is already bright enough."

The {hero} felt something warm inside. Not the light — something else. Something like a yes.

Tomorrow the {hero} might grow. But tonight, the small light had already begun.

The {hero} snuggled down warm, holding the {object_motif} close.

Small is brave.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} held the {object_motif} tight.

It was small. So small. {child_name} looked at it and felt very big, and very scared.

All around {setting}, the bigger lights were shining. {child_name}'s light was only a tiny one. "My light is too small," said {child_name}. "I should wait until I grow."

{companion_name} sat close and warm. {companion_name} smiled a soft smile.

"What if we try now?" asked {companion_name}. "Right now, with the light you have?"

{child_name} looked at the darkness all around. {child_name} took a slow, slow breath.

{child_name} held the {object_motif} up high. Up, up, up.

And psst — did you hear that whisper? It was {companion_name}, saying to you, dear one: even the smallest light is brave.

The tiny light went out into the dark. And something happened. The darkness was not so dark anymore. The tiny light made a circle of warm, and in that circle were shadows soft and kind.

"Look," said {companion_name}. "{child_name}'s light is already bright enough."

{child_name} felt something warm inside. Not the light — something else. Something like a yes.

Tomorrow {child_name} might grow. But tonight, the small light had already begun.

{child_name} snuggled down warm, holding the {object_motif} close.

Small is brave.

{refrain}.`
      },
      '5-6': {
        audioTemplate: `At the edge of {setting}, in a place where many lights gathered, the {hero} stood holding the {object_motif}.

The {hero}'s light was small. Not the tiniest, but small. All around shone bigger lights, brighter, steadier, more sure of themselves. The {hero} watched and thought: I should wait until my light grows stronger. Then I will belong here.

Every evening the {hero} came to the edge and watched. The light did not grow. Or it grew so slowly that the watching made it impossible to see.

{companion_name} noticed the {hero} at the edge, always watching, never joining.

"Your light is different than the rest," {companion_name} said, sitting close. "Smaller right now. But small does not mean it will not shine."

"But what if I come forward and everyone sees how small it is?" asked the {hero}. "They will know I do not belong yet."

{companion_name} was quiet for a moment. "What if that is exactly when you belong? What if small lights are what the gathering needs?"

The {hero} looked at all the big lights, gathered and glowing. Then looked at the own small, uncertain light in the {object_motif}.

"Try," said {companion_name}. "Come just one step forward."

So the {hero} took one step into the circle of lights.

Psst — did you hear that sound? It was the {hero}'s breath, brave and small.

And something strange happened. When the {hero}'s small light came into the gathering, the shadows between the big lights softened. The small light filled the gaps that big lights could not reach. For the first time, the whole circle was warm all the way through, with no cold corners hiding.

One of the other lights turned. "Your light," it said. "It fills the space I could never reach."

The {hero} felt the {object_motif} warm in both hands. The light had not grown. But everything had changed.

"You did not have to wait to grow," said {companion_name}. "Your light is already bright enough. You were already the exact light the gathering needed."

The {hero} stayed in the circle. And discovered the strangest thing: it was not the size of the light that mattered. It was that the light was there at all. Small, steady, true.

{refrain}.`,
        scriptTemplate: `At the edge of {setting}, in a place where many lights gathered, {child_name} stood holding the {object_motif}.

{child_name}'s light was small. Not the tiniest, but small. All around shone bigger lights, brighter, steadier, more sure of themselves. {child_name} watched and thought: I should wait until my light grows stronger. Then I will belong here.

Every evening {child_name} came to the edge and watched. The light did not grow. Or it grew so slowly that the watching made it impossible to see.

{companion_name} noticed {child_name} at the edge, always watching, never joining.

"Your light is different than the rest," {companion_name} said, sitting close. "Smaller right now. But small does not mean it will not shine."

"But what if I come forward and everyone sees how small it is?" asked {child_name}. "They will know I do not belong yet."

{companion_name} was quiet for a moment. "What if that is exactly when you belong? What if small lights are what the gathering needs?"

{child_name} looked at all the big lights, gathered and glowing. Then looked at the own small, uncertain light in the {object_motif}.

"Try," said {companion_name}. "Come just one step forward."

So {child_name} took one step into the circle of lights.

Psst — did you hear that sound? It was {child_name}'s breath, brave and small.

And something strange happened. When {child_name}'s small light came into the gathering, the shadows between the big lights softened. The small light filled the gaps that big lights could not reach. For the first time, the whole circle was warm all the way through, with no cold corners hiding.

One of the other lights turned. "Your light," it said. "It fills the space I could never reach."

{child_name} felt the {object_motif} warm in both hands. The light had not grown. But everything had changed.

"You did not have to wait to grow," said {companion_name}. "You were already the exact light the gathering needed."

{child_name} stayed in the circle. And discovered the strangest thing: it was not the size of the light that mattered. It was that the light was there at all. Small, steady, true.

{refrain}.`
      },
      '7-8': {
        audioTemplate: `On a hillside in {setting}, where young travelers gathered to begin a journey, the {hero} stood apart with the {object_motif} held close.

The journey was long. Important. Everyone preparing looked ready. Experienced. Their packs were organized, their steps were sure, their confidence filled the space like a warm fire. The {hero} looked at all that readiness and felt small by comparison — not in body, but in everything else. Knowledge, skill, courage, the sense of belonging among the experienced.

"I am not ready for this," the {hero} thought. "I should train more. Study more. Become someone who actually belongs here."

But the journey was leaving tomorrow. There would never be enough time to become that person. The {hero} would have to stay behind, or go as someone still learning. The choice felt impossible.

{companion_name} came and sat on the ground beside the {hero}, close enough that their shadows mixed.

"You look afraid," {companion_name} said.

"I am the least ready person here," the {hero} said. "Everyone else knows what they are doing. I will slow everyone down. I will make mistakes."

{companion_name} smiled, but not unkindly. "Do you know what everyone who is really learning has in common? They are all sure they are the least ready. That feeling does not go away when you go. You take it with you. What matters is whether you go anyway."

The {hero} looked at the {object_motif} — just an ordinary thing, nothing special. "But I am so unprepared."

"Yes," said {companion_name}. "Beginners are. That is what beginning is. And listen — that is not a wall in your way. That is your starting point. Psst — listen close, dear one, you are going to go anyway, and you are going to be all right."

The {hero} felt something shift. Not courage appearing, exactly. More like the understanding that courage was not what you had before you started. It was what happened when you started anyway.

The next morning, the {hero} was in the line of travelers heading up the hill. The pack felt heavy. The path ahead looked long. The {hero} did not feel ready. But the {object_motif} was there in a pocket, a small reminder: you do not have to be finished to begin.

As they walked, something happened. A traveler ahead of the {hero} stumbled. Without thinking, the {hero} reached out to steady them. Later, when the group got lost at a fork in the path, the {hero} noticed a marker that everyone else had missed. By evening, when a younger traveler was tired and discouraged, the {hero} sat with them and listened to their worries.

At the camp fire, the experienced travelers looked at the {hero} and said, "You belong here." And the {hero} realized: it was not readiness that made you belong. It was showing up. It was trying. It was letting yourself be small and learning at the same time, and that was enough.

The {hero} looked at the fire and felt the {object_motif} in one hand, and understood finally. Your light is already bright enough. The smallest thing you have is enough.

{refrain}.`,
        scriptTemplate: `On a hillside in {setting}, where young travelers gathered to begin a journey, {child_name} stood apart with the {object_motif} held close.

The journey was long. Important. Everyone preparing looked ready. Experienced. Their packs were organized, their steps were sure, their confidence filled the space like a warm fire. {child_name} looked at all that readiness and felt small by comparison — not in body, but in everything else. Knowledge, skill, courage, the sense of belonging among the experienced.

"I am not ready for this," {child_name} thought. "I should train more. Study more. Become someone who actually belongs here."

But the journey was leaving tomorrow. There would never be enough time to become that person. {child_name} would have to stay behind, or go as someone still learning. The choice felt impossible.

{companion_name} came and sat on the ground beside {child_name}, close enough that their shadows mixed.

"You look afraid," {companion_name} said.

"I am the least ready person here," {child_name} said. "Everyone else knows what they are doing. I will slow everyone down. I will make mistakes."

{companion_name} smiled, but not unkindly. "Do you know what everyone who is really learning has in common? They are all sure they are the least ready. That feeling does not go away when you go. You take it with you. What matters is whether you go anyway."

{child_name} looked at the {object_motif} — just an ordinary thing, nothing special. "But I am so unprepared."

"Yes," said {companion_name}. "Beginners are. That is what beginning is. And listen — that is not a wall in your way. That is your starting point. Psst — listen close, dear one, you are going to go anyway, and you are going to be all right."

{child_name} felt something shift. Not courage appearing, exactly. More like the understanding that courage was not what you had before you started. It was what happened when you started anyway.

The next morning, {child_name} was in the line of travelers heading up the hill. The pack felt heavy. The path ahead looked long. {child_name} did not feel ready. But the {object_motif} was there in a pocket, a small reminder: you do not have to be finished to begin.

As they walked, something happened. A traveler ahead of {child_name} stumbled. Without thinking, {child_name} reached out to steady them. Later, when the group got lost at a fork in the path, {child_name} noticed a marker that everyone else had missed. By evening, when a younger traveler was tired and discouraged, {child_name} sat with them and listened to their worries.

At the camp fire, the experienced travelers looked at {child_name} and said, "You belong here." And {child_name} realized: it was not readiness that made you belong. It was showing up. It was trying. It was letting yourself be small and learning at the same time, and that was enough.

{child_name} looked at the fire and felt the {object_motif} in one hand, and understood finally. Your light is already bright enough. The smallest thing you have is enough.

{refrain}.`
      },
      '9-11': {
        audioTemplate: `Before dawn, on a ridge high above {setting}, the {hero} waited with a group of young people who had trained for months to climb it.

They had done everything right. Every hike led to a bigger one. Every lesson stuck. Every mistake was studied and learned from. But standing at the base of the ridge at 4 AM, with the real climb ahead, the {hero} felt the gap between preparation and the thing itself open wide. It was not a small gap. It felt like falling.

The {hero} held the {object_motif} and thought: I still do not feel ready. Everyone here has done harder climbs. Everyone here knows what they are doing. I am the weakest link, the one who will slip, the one who will hold everyone back.

A guide saw the {hero}'s face and came and sat beside them in the dark.

"You are thinking you are not ready," the guide said. It was not a question.

"I am not," said the {hero}. "I have trained, but I know I have not trained enough. There is still so much I do not know."

The guide looked out at the ridge barely visible against the dark sky. "Here is what I know about climbing," the guide said. "No one up that mountain felt ready at the start. The ones who are now accomplished guides have all stood exactly where you are standing. Do you know what they did?"

"They trained more?" asked the {hero}.

"They went anyway. They did not wait for the readiness feeling to arrive, because that feeling has a long way to travel. It comes from the other side of doing the hard thing, not from before it. You can spend your whole life on this base, waiting for a feeling that will never come first. Or you can go, be scared, make mistakes, learn as you climb, and the readiness will meet you on the path."

The {hero} pressed the {object_motif} hard in one hand. "What if I hold everyone back?"

"Then the group will go slower," said the guide. "You know what? That happens. And then you will have learned something, and you will be stronger for it. That is what the mountain does. Psst — listen, dear one, the mountain knows about beginners. The mountain has room for people who are learning. What it does not have room for is people standing outside of it, waiting to be good enough."

The {hero} felt something break open. Not courage — that word was still too big. But a kind of permission. Permission to be mid-way through learning and still try. Permission to be afraid and still climb. Permission to be the weakest and still belong.

The sky began to lighten. The guide stood up. "We leave in ten minutes. Be ready or be learning as you go."

The {hero} stood, and clipped in, and stepped onto the rock.

It was hard. Much harder than training suggested it would be. Fingers ached in ways they had not in practice. The altitude made thinking slower. At one point, halfway up, the {hero} looked down at the distance already covered, then up at the distance still to go, and the fear came again, strong and real.

But something was different now. The fear was there, yes, but it was not a wall anymore. It was just weather. The {hero} breathed through it and kept climbing.

Near the top, where the slope gentled and the view opened wide, one of the other climbers turned and said, "You did not give up." It was not praise, exactly. It was observation, respect, the way you speak to someone who has done a hard thing.

The {hero} reached the ridge top and looked down at the world made small below. The {object_motif} was there in a pack, ordinary and real. The hand holding it was small, but it had climbed a mountain. The fear had not stopped. But the climbing had not waited for the fear to leave.

That was what confidence actually was. Your light is already bright enough. Not the absence of doubt. Just the choice to go anyway.

{refrain}.`,
        scriptTemplate: `Before dawn, on a ridge high above {setting}, {child_name} waited with a group of young people who had trained for months to climb it.

They had done everything right. Every hike led to a bigger one. Every lesson stuck. Every mistake was studied and learned from. But standing at the base of the ridge at 4 AM, with the real climb ahead, {child_name} felt the gap between preparation and the thing itself open wide. It was not a small gap. It felt like falling.

{child_name} held the {object_motif} and thought: I still do not feel ready. Everyone here has done harder climbs. Everyone here knows what they are doing. I am the weakest link, the one who will slip, the one who will hold everyone back.

A guide saw {child_name}'s face and came and sat beside them in the dark.

"You are thinking you are not ready," the guide said. It was not a question.

"I am not," said {child_name}. "I have trained, but I know I have not trained enough. There is still so much I do not know."

The guide looked out at the ridge barely visible against the dark sky. "Here is what I know about climbing," the guide said. "No one up that mountain felt ready at the start. The ones who are now accomplished guides have all stood exactly where you are standing. Do you know what they did?"

"They trained more?" asked {child_name}.

"They went anyway. They did not wait for the readiness feeling to arrive, because that feeling has a long way to travel. It comes from the other side of doing the hard thing, not from before it. You can spend your whole life on this base, waiting for a feeling that will never come first. Or you can go, be scared, make mistakes, learn as you climb, and the readiness will meet you on the path."

{child_name} pressed the {object_motif} hard in one hand. "What if I hold everyone back?"

"Then the group will go slower," said the guide. "You know what? That happens. And then you will have learned something, and you will be stronger for it. That is what the mountain does. Psst — listen, dear one, the mountain knows about beginners. The mountain has room for people who are learning. What it does not have room for is people standing outside of it, waiting to be good enough."

{child_name} felt something break open. Not courage — that word was still too big. But a kind of permission. Permission to be mid-way through learning and still try. Permission to be afraid and still climb. Permission to be the weakest and still belong.

The sky began to lighten. The guide stood up. "We leave in ten minutes. Be ready or be learning as you go."

{child_name} stood, and clipped in, and stepped onto the rock.

It was hard. Much harder than training suggested it would be. Fingers ached in ways they had not in practice. The altitude made thinking slower. At one point, halfway up, {child_name} looked down at the distance already covered, then up at the distance still to go, and the fear came again, strong and real.

But something was different now. The fear was there, yes, but it was not a wall anymore. It was just weather. {child_name} breathed through it and kept climbing.

Near the top, where the slope gentled and the view opened wide, one of the other climbers turned and said, "You did not give up." It was not praise, exactly. It was observation, respect, the way you speak to someone who has done a hard thing.

{child_name} reached the ridge top and looked down at the world made small below. The {object_motif} was there in a pack, ordinary and real. The hand holding it was small, but it had climbed a mountain. The fear had not stopped. But the climbing had not waited for the fear to leave.

That was what confidence actually was. Your light is already bright enough. Not the absence of doubt. Just the choice to go anyway.

{refrain}.`
      },
    },
    audioTemplate: `The {object_motif} was so small the {hero} could hold it in one palm.

"I am too little to shine," whispered the {hero}. But {companion_name} smiled.

"Small things shine all the time," {companion_name} said. "Your light is already bright enough."

The {hero} held the {object_motif} up into the dark, and it glowed. Not the brightest, but there. Real.

Psst — you can begin with what you have.

{refrain}.`,
    scriptTemplate: `The {object_motif} was so small {child_name} could hold it in one palm.

"I am too little to shine," whispered {child_name}. But {companion_name} smiled.

"Small things shine all the time, {child_name}," {companion_name} said. "Your light is already bright enough."

{child_name} held the {object_motif} up into the dark, and it glowed. Not the brightest, but there. Real.

Psst — you can begin with what you have.

{refrain}.`,
  },

  {
    ordinal: 2, title: 'Your Brave Voice',
    concept: 'Speaking up even when it feels scary', callback: "The smallest start (Level 1)", ageFloor: 4,
    summary: 'The hero has something true to say but their voice feels too small and uncertain to matter. Their companion shows them that quiet voices carry truth, and that the bravest speaking often sounds like whispering.',
    teachingNote: 'A child who learns their quiet voice is enough will speak up in moments that matter. Confidence in voice comes from discovering it has been heard, not from sounding certain.',
    learningBeat: 'Your small voice is still your voice',
    ageVariants: {
      '3-4': {
        audioTemplate: `The {hero} had something to say in {setting}.

It was a true thing. A kind thing. But the {hero}'s voice felt small.

What if no one heard? What if the words came out all wrong?

The {hero} held the {object_motif} and did not speak.

{companion_name} sat very close. Warm and calm.

"You have a secret sitting in your mouth," said {companion_name}. "I can see it."

The {hero} looked down. "I do. But my voice is too small."

"Small voices are the bravest," said {companion_name}. "Do you know why? Because they try anyway. Psst — even when you whisper, the truth comes through."

The {hero} took a deep breath. One word. Just one word out loud.

"Yes," said the {hero}. Tiny. Like a feather.

But it was out.

It was said.

And {companion_name} heard it clear as bells. {companion_name} smiled so wide.

"You did it," said {companion_name}. "Your small voice was perfect."

The {hero} felt warm all through. Tomorrow there might be more words. Today, one word had been enough.

The {hero} curled up close, holding the {object_motif}.

Small voices are brave.

{refrain}.`,
        scriptTemplate: `{child_name} had something to say in {setting}.

It was a true thing. A kind thing. But {child_name}'s voice felt small.

What if no one heard? What if the words came out all wrong?

{child_name} held the {object_motif} and did not speak.

{companion_name} sat very close. Warm and calm.

"You have a secret sitting in your mouth," said {companion_name}. "I can see it."

{child_name} looked down. "I do. But my voice is too small."

"Small voices are the bravest," said {companion_name}. "Do you know why? Because they try anyway. Psst — even when you whisper, the truth comes through."

{child_name} took a deep breath. One word. Just one word out loud.

"Yes," said {child_name}. Tiny. Like a feather.

But it was out.

It was said.

And {companion_name} heard it clear as bells. {companion_name} smiled so wide.

"You did it," said {companion_name}. "{child_name}'s small voice was perfect."

{child_name} felt warm all through. Tomorrow there might be more words. Today, one word had been enough.

{child_name} curled up close, holding the {object_motif}.

Small voices are brave.

{refrain}.`
      },
      '5-6': {
        audioTemplate: `In {setting}, the {hero} had been carrying a question all day that would not come out.

The question was: Can I try?

It was simple. But when the {hero} opened the mouth to ask, the voice curled up small and hid. The throat went tight. What if the answer was no? What if everyone turned and looked? What if the words came out shaky and wrong?

So the question stayed stuck inside, and the {hero} watched the others trying, playing, doing the thing that looked like flying.

{companion_name} noticed. {companion_name} was always good at noticing.

"You look like you swallowed something," {companion_name} said, sitting close on {setting}.

The {hero} nodded. "I want to ask if I can play. But my voice is so quiet. Nobody will hear it."

{companion_name} was quiet for a moment. "Listen to me. Quiet voices are the ones I hear best. They have to be true to be quiet. Loud voices can hide behind noise. Quiet ones cannot. They have to mean what they say. Psst — your small voice is still your voice, and it carries more truth than you know."

The {hero} held the {object_motif} tight. "What if I say it and it is too small?"

"Then say it again," said {companion_name}. "And again, if you need to. The size of the voice does not matter. The fact that you let it out does."

The {hero} looked at the game happening. There was one space left. One more spot before it would be full.

The {hero} stood up, walked over, and whispered it — so quiet it almost did not happen.

"Can I play too?"

Nobody heard. The game went on.

The {hero}'s heart sank. But then {companion_name} made a small sound, and one kid turned and said, "What did they say?" And the {hero} had to try again. And the third time, a girl turned and grinned and said, "Sure! Come on!"

The game was fast and wild and full of laughing. The {hero} ran and felt alive. And discovered something strange: it had taken a quiet voice to get in. The loud voices had been too busy being loud to notice. But the whisper? The whisper had cut right through.

When {setting} turned soft and blue, {companion_name} found the {hero} resting, cheeks warm.

"Your small voice did the whole thing," {companion_name} said.

The {hero} looked at the {object_motif} and felt something settle. Tomorrow there might be bigger words to say. But tonight, the small voice had been enough. The small voice had been brave.

{refrain}.`,
        scriptTemplate: `In {setting}, {child_name} had been carrying a question all day that would not come out.

The question was: Can I try?

It was simple. But when {child_name} opened the mouth to ask, the voice curled up small and hid. The throat went tight. What if the answer was no? What if everyone turned and looked? What if the words came out shaky and wrong?

So the question stayed stuck inside, and {child_name} watched the others trying, playing, doing the thing that looked like flying.

{companion_name} noticed. {companion_name} was always good at noticing.

"You look like you swallowed something," {companion_name} said, sitting close on {setting}.

{child_name} nodded. "I want to ask if I can play. But my voice is so quiet. Nobody will hear it."

{companion_name} was quiet for a moment. "Listen to me. Quiet voices are the ones I hear best. They have to be true to be quiet. Loud voices can hide behind noise. Quiet ones cannot. They have to mean what they say. Psst — your small voice is still your voice, and it carries more truth than you know."

{child_name} held the {object_motif} tight. "What if I say it and it is too small?"

"Then say it again," said {companion_name}. "And again, if you need to. The size of the voice does not matter. The fact that you let it out does."

{child_name} looked at the game happening. There was one space left. One more spot before it would be full.

{child_name} stood up, walked over, and whispered it — so quiet it almost did not happen.

"Can I play too?"

Nobody heard. The game went on.

{child_name}'s heart sank. But then {companion_name} made a small sound, and one kid turned and said, "What did they say?" And {child_name} had to try again. And the third time, a girl turned and grinned and said, "Sure! Come on!"

The game was fast and wild and full of laughing. {child_name} ran and felt alive. And discovered something strange: it had taken a quiet voice to get in. The loud voices had been too busy being loud to notice. But the whisper? The whisper had cut right through.

When {setting} turned soft and blue, {companion_name} found {child_name} resting, cheeks warm.

"Your small voice did the whole thing," {companion_name} said.

{child_name} looked at the {object_motif} and felt something settle. Tomorrow there might be bigger words to say. But tonight, the small voice had been enough. The small voice had been brave.

{refrain}.`
      },
      '7-8': {
        audioTemplate: `For three days the {hero} had known something that needed saying in {setting}, and for three days the words had stayed stuck.

It was like this: every evening, a group built a tower of stones. Every evening they made the same mistake — stacking the heaviest stones on top. And every evening the tower wobbled, leaning further left, surely about to fall.

The {hero} had watched it happen three times. The {hero} knew, the way you just know, that if they stacked the heaviest stones on the bottom, the whole thing would hold solid and true. But saying that out loud, in front of everyone, meant breaking the smooth agreement. It meant everyone would turn and look. It meant a quiet voice would have to speak up against the group.

The throat tightened just thinking about it.

{companion_name} found the {hero} watching the tower lean. "You have something to say," {companion_name} said. Not a question.

"The tower is wrong," said the {hero}. "But I do not know how to say it so they will listen. My voice is so small. And they are all so sure of themselves."

{companion_name} sat on the ground beside the {hero}. "Here is a secret: the people who are the most sure are often the ones most scared to listen. That is why they talk so loud. If you use your quiet voice, you might be the one person they actually hear. Psst — sometimes the whisper cuts through the noise because it is different. It makes people stop and listen."

The tower wobbled again. Now or never.

The {hero} stood. Walked over. And in the quietest voice, said it: "The heavy stones should go on the bottom."

Nobody heard. The building went on.

The {hero} felt the familiar wish to disappear. But {companion_name} was there, giving the tiniest nod. Try again.

So the {hero} did. A little stronger this time, not louder, just clearer.

"Put the heavy stones at the bottom. The tower will hold."

This time a girl turned. Really looked. "Wait. Say that again?"

The {hero} said it a third time. This time, steadier. And the girl nodded slowly, then moved a stone. Then another followed. And the whole thing changed. Doubt became doing, the way it does when one person finally speaks the thing that is true.

They rebuilt it. And when the new tower stood firm and solid, one of the boys said, "Whose idea was that?" and the girl pointed at the {hero}.

The group nodded, not because the {hero} had been loud, but because the {hero} had been right. And because the {hero} had dared to say it even when the voice was small.

Later, at the edge of {setting} as the light turned amber, {companion_name} sat close to the {hero}.

"You spoke the true thing," {companion_name} said. "Even though your voice shook."

"It took three tries," said the {hero}.

"Yes. And three tries is exactly what you needed. The voice does not have to be big to change something. It has to be true. And it has to keep trying. Your small voice was the bravest voice in that circle. Your small voice is still your voice."

The {hero} held the {object_motif} and looked at the tower standing firm and real. Small voice. True words. That was enough.

{refrain}.`,
        scriptTemplate: `For three days {child_name} had known something that needed saying in {setting}, and for three days the words had stayed stuck.

It was like this: every evening, a group built a tower of stones. Every evening they made the same mistake — stacking the heaviest stones on top. And every evening the tower wobbled, leaning further left, surely about to fall.

{child_name} had watched it happen three times. {child_name} knew, the way you just know, that if they stacked the heaviest stones on the bottom, the whole thing would hold solid and true. But saying that out loud, in front of everyone, meant breaking the smooth agreement. It meant everyone would turn and look. It meant a quiet voice would have to speak up against the group.

The throat tightened just thinking about it.

{companion_name} found {child_name} watching the tower lean. "You have something to say," {companion_name} said. Not a question.

"The tower is wrong," said {child_name}. "But I do not know how to say it so they will listen. My voice is so small. And they are all so sure of themselves."

{companion_name} sat on the ground beside {child_name}. "Here is a secret: the people who are the most sure are often the ones most scared to listen. That is why they talk so loud. If you use your quiet voice, you might be the one person they actually hear. Psst — sometimes the whisper cuts through the noise because it is different. It makes people stop and listen."

The tower wobbled again. Now or never.

{child_name} stood. Walked over. And in the quietest voice, said it: "The heavy stones should go on the bottom."

Nobody heard. The building went on.

{child_name} felt the familiar wish to disappear. But {companion_name} was there, giving the tiniest nod. Try again.

So {child_name} did. A little stronger this time, not louder, just clearer.

"Put the heavy stones at the bottom. The tower will hold."

This time a girl turned. Really looked. "Wait. Say that again?"

{child_name} said it a third time. This time, steadier. And the girl nodded slowly, then moved a stone. Then another followed. And the whole thing changed. Doubt became doing, the way it does when one person finally speaks the thing that is true.

They rebuilt it. And when the new tower stood firm and solid, one of the boys said, "Whose idea was that?" and the girl pointed at {child_name}.

The group nodded, not because {child_name} had been loud, but because {child_name} had been right. And because {child_name} had dared to say it even when the voice was small.

Later, at the edge of {setting} as the light turned amber, {companion_name} sat close to {child_name}.

"You spoke the true thing," {companion_name} said. "Even though your voice shook."

"It took three tries," said {child_name}.

"Yes. And three tries is exactly what you needed. The voice does not have to be big to change something. It has to be true. And it has to keep trying. Your small voice was the bravest voice in that circle. Your small voice is still your voice."

{child_name} held the {object_motif} and looked at the tower standing firm and real. Small voice. True words. That was enough.

{refrain}.`
      },
      '9-11': {
        audioTemplate: `In {setting}, six friends sat in their usual circle, and the {hero} was beginning to understand something uncomfortable.

They were planning tomorrow's big climb, and someone had said it: the youngest should not come. Too slow. Holds everyone back.

Nods went around the circle. The {hero}'s own head started to nod, because that is what heads did in circles — they agreed with each other. Easy. Smooth. Safe.

But it was not fair, and the {hero} knew it. The youngest was not slow, just careful. And when the river came up fast last month, it was the youngest who found the safe crossing while everyone else argued. Nobody seemed to remember that tonight.

The {hero}'s voice sat in the chest, small and uncertain. Say something. But everyone had already agreed. To speak now would break the nice smooth surface. Everyone would turn and look. The {hero} would be the one who spoiled the moment.

The {hero} said nothing.

{companion_name} was sitting apart, and their eyes met the {hero}'s for one long second. Then {companion_name} looked away, and that look was the loudest thing in the whole circle. It said: well?

The {hero} wanted to disappear. But instead, stood up and walked over to {companion_name}.

"I cannot say it," the {hero} whispered. "My voice is too small. Everyone agreed. If I speak up, I will just make it worse."

{companion_name} leaned close so nobody else could hear. "Your voice does not have to be big. It has to be true. And listen — that is the whole trick right there. When everyone agrees on something wrong, the small voice is the only one that can cut through. Big voices are too common. But a quiet voice saying something true? Psst — that is the only thing that makes people really listen. They have to lean in. They have to stop and think."

The {hero} pressed the {object_motif} hard. "What if they do not listen?"

"Then you will have said the true thing anyway. That part is yours to do. The listening is theirs."

The {hero} sat there in the dark, feeling the weight of it. The moment was passing. If not now, then never. But the fear was so big.

Then the {hero} stood.

It was not grand or loud. Just stood. The circle quieted a little, not expecting it.

"I do not think we should leave him out," the {hero} said. The voice was small. Shaky. Not sure of itself.

For a moment, nothing. Then one of the older kids said, "What?" — not unkindly, just not hearing.

The {hero}'s heart wanted to fold back down. But the words were already halfway into the world now, and it would be worse to take them back than to push them forward.

So the {hero} breathed, and said it again. Quieter, but clearer.

"He is not slow, he is careful. And when the river came up, he was the one who found us the way across. That counts."

The clearing went quiet in a different way. Not smooth anymore. Thinking.

Then one of the older kids let out a breath and said, "Yeah. You are right, actually. I forgot about the river."

The whole circle shifted. The plan changed. Six of them would go tomorrow. All six.

The {hero} sat back down with legs that felt like water. The shaky small voice had done the entire thing. Not in spite of being quiet, but because quiet voices have to mean what they say.

Later, when {setting} had folded into deep blue night, {companion_name} sat beside the {hero}.

"That took real nerve," {companion_name} said.

"It did not feel like nerve," said the {hero}. "It felt like being scared and talking at the same time."

"That is what nerve is. Not the absence of scared. The talking anyway. Your small voice held the whole moment. That is power."

The {hero} looked at the {object_motif} in the dark and understood. The voice did not have to be big. It had to be true. And it had to keep trying, even when it shook. That was enough. That was everything.

{refrain}.`,
        scriptTemplate: `In {setting}, six friends sat in their usual circle, and {child_name} was beginning to understand something uncomfortable.

They were planning tomorrow's big climb, and someone had said it: the youngest should not come. Too slow. Holds everyone back.

Nods went around the circle. {child_name}'s own head started to nod, because that is what heads did in circles — they agreed with each other. Easy. Smooth. Safe.

But it was not fair, and {child_name} knew it. The youngest was not slow, just careful. And when the river came up fast last month, it was the youngest who found the safe crossing while everyone else argued. Nobody seemed to remember that tonight.

{child_name}'s voice sat in the chest, small and uncertain. Say something. But everyone had already agreed. To speak now would break the nice smooth surface. Everyone would turn and look. {child_name} would be the one who spoiled the moment.

{child_name} said nothing.

{companion_name} was sitting apart, and their eyes met {child_name}'s for one long second. Then {companion_name} looked away, and that look was the loudest thing in the whole circle. It said: well?

{child_name} wanted to disappear. But instead, stood up and walked over to {companion_name}.

"I cannot say it," {child_name} whispered. "My voice is too small. Everyone agreed. If I speak up, I will just make it worse."

{companion_name} leaned close so nobody else could hear. "Your voice does not have to be big. It has to be true. And listen — that is the whole trick right there. When everyone agrees on something wrong, the small voice is the only one that can cut through. Big voices are too common. But a quiet voice saying something true? Psst — that is the only thing that makes people really listen. They have to lean in. They have to stop and think."

{child_name} pressed the {object_motif} hard. "What if they do not listen?"

"Then you will have said the true thing anyway. That part is yours to do. The listening is theirs."

{child_name} sat there in the dark, feeling the weight of it. The moment was passing. If not now, then never. But the fear was so big.

Then {child_name} stood.

It was not grand or loud. Just stood. The circle quieted a little, not expecting it.

"I do not think we should leave him out," {child_name} said. The voice was small. Shaky. Not sure of itself.

For a moment, nothing. Then one of the older kids said, "What?" — not unkindly, just not hearing.

{child_name}'s heart wanted to fold back down. But the words were already halfway into the world now, and it would be worse to take them back than to push them forward.

So {child_name} breathed, and said it again. Quieter, but clearer.

"He is not slow, he is careful. And when the river came up, he was the one who found us the way across. That counts."

The clearing went quiet in a different way. Not smooth anymore. Thinking.

Then one of the older kids let out a breath and said, "Yeah. You are right, actually. I forgot about the river."

The whole circle shifted. The plan changed. Six of them would go tomorrow. All six.

{child_name} sat back down with legs that felt like water. The shaky small voice had done the entire thing. Not in spite of being quiet, but because quiet voices have to mean what they say.

Later, when {setting} had folded into deep blue night, {companion_name} sat beside {child_name}.

"That took real nerve," {companion_name} said.

"It did not feel like nerve," said {child_name}. "It felt like being scared and talking at the same time."

"That is what nerve is. Not the absence of scared. The talking anyway. Your small voice held the whole moment. That is power."

{child_name} looked at the {object_motif} in the dark and understood. The voice did not have to be big. It had to be true. And it had to keep trying, even when it shook. That was enough. That was everything.

{refrain}.`
      },
    },
    audioTemplate: `In {setting}, the {hero} had a whisper stuck in their throat.

"My voice is too small to matter," they thought.

But {companion_name} leaned close. "Psst — listen. Every brave voice started as a whisper. Quiet is not weak. Quiet is true."

The {hero} opened their mouth and let the small voice out.

And someone heard. Really heard.

That was when everything changed.

{refrain}.`,
    scriptTemplate: `In {setting}, {child_name} had a whisper stuck in their throat.

"My voice is too small to matter," they thought.

But {companion_name} leaned close. "Psst — listen, {child_name}. Every brave voice started as a whisper. Quiet is not weak. Quiet is true."

{child_name} opened their mouth and let the small voice out.

And someone heard. Really heard.

That was when everything changed.

{refrain}.`,
  },

  {
    ordinal: 3, title: 'My Path Is Mine',
    concept: 'Trusting your own way even when it is different', callback: 'Your brave voice (Level 2)', ageFloor: 5,
    summary: 'The hero tries to walk the path everyone else walks, but it does not fit. Their companion helps them understand that different is not wrong — their own path is exactly the one the world was waiting for them to take.',
    teachingNote: 'A child who trusts their own way learns resilience. The soft twist reveals that the path each person is meant to walk is found by following what is true in them.',
    learningBeat: 'Your own way is the only way that works for you',
    ageVariants: {
      '3-4': {
        audioTemplate: `In {setting}, all the other little ones walked the straight path.

One by one by one. The {hero} tried to walk it too. But the feet wanted to go a different way. The feet wanted to explore. To wander. To look at things others passed by.

"Walk straight," the {hero} thought. "Like everyone else."

But the feet would not listen.

{companion_name} sat and watched the {hero} trying so hard to walk like the rest.

"Your feet know something," said {companion_name}. "They know the straight path is not your path."

The {hero} held the {object_motif} tight. "But all the others walk straight."

"Yes. And that is their path. But yours — yours goes different. And that is okay. Better than okay. That is right."

So the {hero} stopped trying.

The feet led the way through {setting}. Psst — listen, did you hear that? It was the world, saying yes, here, come this way.

Down by the water, the {hero} found a smooth stone. In a hidden place, a flower nobody else had seen. A path of soft moss that felt like walking on clouds.

The straight walkers came by and saw all the things the {hero} had found. And one by one, they left the straight path too.

"Show us your way," they said.

And the {hero} did. Because the {hero}'s path was the path they all needed.

The {object_motif} felt warm in the hand. Your own way is the only way that works for you. Your own way is the way the world was waiting for.

{refrain}.`,
        scriptTemplate: `In {setting}, all the other little ones walked the straight path.

One by one by one. {child_name} tried to walk it too. But the feet wanted to go a different way. The feet wanted to explore. To wander. To look at things others passed by.

"Walk straight," {child_name} thought. "Like everyone else."

But the feet would not listen.

{companion_name} sat and watched {child_name} trying so hard to walk like the rest.

"Your feet know something," said {companion_name}. "They know the straight path is not your path."

{child_name} held the {object_motif} tight. "But all the others walk straight."

"Yes. And that is their path. But yours — yours goes different. And that is okay. Better than okay. That is right."

So {child_name} stopped trying.

The feet led the way through {setting}. Psst — listen, did you hear that? It was the world, saying yes, here, come this way.

Down by the water, {child_name} found a smooth stone. In a hidden place, a flower nobody else had seen. A path of soft moss that felt like walking on clouds.

The straight walkers came by and saw all the things {child_name} had found. And one by one, they left the straight path too.

"Show us your way," they said.

And {child_name} did. Because {{child_name}'s path was the path they all needed.

The {object_motif} felt warm in the hand. Your own way is the only way that works for you. Your own way is the way the world was waiting for.

{refrain}.`
      },
      '5-6': {
        audioTemplate: `Every child in {setting} learned the same trade: weaving cloth on the same looms, the same patterns, the same colors that had been made for a hundred years.

The {hero} tried. The hands worked the loom. But something in the chest knew this was not the shape the hands wanted to make. The {hero}'s hands wanted to build. To make something solid and real that stood up and could be lived inside.

"You must be a weaver," everyone said. "Everyone learns to weave. That is what we do in {setting}."

The {hero} kept weaving. But every night, in secret, made other things. Small buildings out of bark and branches. Little bridges across streams. Things that worked in new ways.

One day, someone from another village came and saw the {hero}'s secret creations. "These are beautiful," they said. "We need someone who builds like this. Will you come?"

The {hero}'s heart said yes so hard it almost broke the ribs.

But {companion_name} was watching the {hero} wrestle with it. "Everyone wants you to stay a weaver," {companion_name} said. "But that is not your path."

"But I will disappoint everyone," said the {hero}.

{companion_name} took the {object_motif} from the {hero}'s hand and held it up to the light. "This is not the same as the others, is it?"

"No," said the {hero}. "It is different."

"And is that wrong?"

"No," said the {hero}. "It is what makes it beautiful."

"Your path is like that," said {companion_name}. "Different from what everyone expected. Not wrong. Just yours. Psst — the world has plenty of weavers. But it needs builders too. It needs your buildings. It needs your hands doing what your hands know to do."

The {hero} took the {object_motif} back and felt it warm in both hands.

So the {hero} went. Built new things in the new village. And the old village missed the {hero}, not because the weaving stopped, but because there were no more secret creations, no more small beautiful buildings that made them think differently about what was possible.

They sent word: "Come back and teach us. Teach us your way."

And the {hero} did, and the village learned to weave and build both, and was richer for it.

The {hero} understood finally: your path is not selfish. Your path is the gift the world was waiting for.

{refrain}.`,
        scriptTemplate: `Every child in {setting} learned the same trade: weaving cloth on the same looms, the same patterns, the same colors that had been made for a hundred years.

{child_name} tried. The hands worked the loom. But something in the chest knew this was not the shape the hands wanted to make. {{child_name}'s hands wanted to build. To make something solid and real that stood up and could be lived inside.

"You must be a weaver," everyone said. "Everyone learns to weave. That is what we do in {setting}."

{{child_name} kept weaving. But every night, in secret, made other things. Small buildings out of bark and branches. Little bridges across streams. Things that worked in new ways.

One day, someone from another village came and saw {{child_name}'s secret creations. "These are beautiful," they said. "We need someone who builds like this. Will you come?"

{{child_name}'s heart said yes so hard it almost broke the ribs.

But {companion_name} was watching {{child_name} wrestle with it. "Everyone wants you to stay a weaver," {companion_name} said. "But that is not your path."

"But I will disappoint everyone," said {{child_name}}.

{companion_name} took the {object_motif} from {{child_name}'s hand and held it up to the light. "This is not the same as the others, is it?"

"No," said {{child_name}}. "It is different."

"And is that wrong?"

"No," said {{child_name}}. "It is what makes it beautiful."

"Your path is like that," said {companion_name}. "Different from what everyone expected. Not wrong. Just yours. Psst — the world has plenty of weavers. But it needs builders too. It needs your buildings. It needs your hands doing what your hands know to do."

{{child_name} took the {object_motif} back and felt it warm in both hands.

So {{child_name} went. Built new things in the new village. And the old village missed {{child_name}, not because the weaving stopped, but because there were no more secret creations, no more small beautiful buildings that made them think differently about what was possible.

They sent word: "Come back and teach us. Teach us your way."

And {{child_name} did, and the village learned to weave and build both, and was richer for it.

{{child_name} understood finally: your path is not selfish. Your path is the gift the world was waiting for.

{refrain}.`
      },
      '7-8': {
        audioTemplate: `The school in {setting} had one path that everyone walked: study, test, achieve, move forward. Straight lines all the way.

The {hero} tried walking it. The mind could do it. But the {hero}'s mind was doing something else while the body sat in the classroom. The mind was seeing patterns in problems that nobody had asked about. Was wondering why things worked the way they did. Was asking questions that were not on the list.

"Pay attention to what we are teaching," the teachers said. "Not the questions you are making up."

The {hero} tried. Paid attention. Got the marks. But every day felt like wearing shoes that did not fit, tight and wrong and impossible to forget you were wearing them.

Then one day, a visitor came to {setting} — a person who built impossible things, who had changed how people thought about possibility itself. The visitor saw the {hero} asking the deep questions, wondering about the systems underneath the systems.

"Come study with me," the visitor said. "Your mind is not broken. It is different. That difference is what I need."

The {hero} felt split in two. Everyone said: finish the path. Everyone said: stay with what we know. Everyone said your way is wasteful, wrong, a detour.

But {companion_name} knew what the {hero} was feeling. {companion_name} sat with the {hero} at the edge of {setting}, in the place where they talked about true things.

"Your mind is not made for the straight path," said {companion_name}. "That does not mean your mind is wrong. It means the straight path is not your path. Some minds are made to ask why. Some minds are made to wonder what if. Your mind is one of those. Psst — the world has plenty of people who can walk a line. But it desperately needs people who can ask better questions. It needs you."

The {hero} held the {object_motif} — a small stone with lines and patterns that did not follow any rule, that just made sense in their own way.

"What if I fail?" asked the {hero}.

"Then you will have failed on your own path, doing your own work. That is different than failing on someone else's path. Different is better."

The {hero} went. Studied with the visitor. Asked the deep questions. Found others like them — minds that worked sideways instead of straight, that were considered wrong until they were proven right.

Years later, the {hero} came back to {setting} and the school was using the {hero}'s work, the discoveries that had come from asking the questions nobody else asked.

The teachers saw and understood: the path that looked wrong was the path that led somewhere new.

The {hero}'s different way had become the way everyone wanted to go.

{refrain}.`,
        scriptTemplate: `The school in {setting} had one path that everyone walked: study, test, achieve, move forward. Straight lines all the way.

{child_name} tried walking it. The mind could do it. But {{child_name}'s mind was doing something else while the body sat in the classroom. The mind was seeing patterns in problems that nobody had asked about. Was wondering why things worked the way they did. Was asking questions that were not on the list.

"Pay attention to what we are teaching," the teachers said. "Not the questions you are making up."

{{child_name} tried. Paid attention. Got the marks. But every day felt like wearing shoes that did not fit, tight and wrong and impossible to forget you were wearing them.

Then one day, a visitor came to {setting} — a person who built impossible things, who had changed how people thought about possibility itself. The visitor saw {{child_name} asking the deep questions, wondering about the systems underneath the systems.

"Come study with me," the visitor said. "Your mind is not broken. It is different. That difference is what I need."

{{child_name} felt split in two. Everyone said: finish the path. Everyone said: stay with what we know. Everyone said your way is wasteful, wrong, a detour.

But {companion_name} knew what {{child_name} was feeling. {companion_name} sat with {{child_name} at the edge of {setting}, in the place where they talked about true things.

"Your mind is not made for the straight path," said {companion_name}. "That does not mean your mind is wrong. It means the straight path is not your path. Some minds are made to ask why. Some minds are made to wonder what if. Your mind is one of those. Psst — the world has plenty of people who can walk a line. But it desperately needs people who can ask better questions. It needs you."

{{child_name} held the {object_motif} — a small stone with lines and patterns that did not follow any rule, that just made sense in their own way.

"What if I fail?" asked {{child_name}}.

"Then you will have failed on your own path, doing your own work. That is different than failing on someone else's path. Different is better."

{{child_name} went. Studied with the visitor. Asked the deep questions. Found others like them — minds that worked sideways instead of straight, that were considered wrong until they were proven right.

Years later, {{child_name} came back to {setting} and the school was using {{child_name}'s work, the discoveries that had come from asking the questions nobody else asked.

The teachers saw and understood: the path that looked wrong was the path that led somewhere new.

{{child_name}'s different way had become the way everyone wanted to go.

{refrain}.`
      },
      '9-11': {
        audioTemplate: `In {setting}, everyone had a future already planned: the family trade, the known path, the safe progression from one stage to the next.

The {hero} was good at many things, but none of them fit the planned path. The hands wanted to make music. The mind wanted to travel to places no one from {setting} had been. The heart wanted something that had no name yet, something the {hero} could only feel coming from somewhere true inside.

But every elder said: that is not practical. That is not a real life. That is not what people like us do.

The pressure to walk the planned path was enormous. It came from love, mostly. Everyone wanted the {hero} safe. Everyone wanted the {hero} to not make the hard choices. Everyone wanted the {hero} to walk where others had already made a path.

The {hero} was twenty years old and terrified.

{companion_name} had been waiting for the {hero} to come and sit at the edge of {setting}, in the place where true conversations happened. When the {hero} finally did, {companion_name} let the {hero} speak first.

"I do not want the future everyone is telling me I should want," said the {hero}. "But I am afraid to want my own. What if I am wrong? What if I fail? What if I disappoint everyone?"

{companion_name} was quiet for a long time. Then: "Here is what you need to know. The world does not need another {setting} merchant. It has plenty. But it needs a musician who thinks the way you think. It needs someone brave enough to go find the places nobody from {setting} has been. It needs whatever this unnamed thing in your heart is trying to become. Psst — listen close now — the people who love you most will suffer when you leave the planned path. But they will suffer more if you never become yourself. That is the trade. That is the only way."

The {hero} held the {object_motif} and felt tears come. "That is not fair."

"No," said {companion_name}. "It is not. But it is true. Your path is yours to walk. You will not find it by looking at anyone else's. You will find it by following what is true in you."

The {hero} made the hard choice. Left {setting}. Learned music. Traveled. Became the thing the heart was calling for.

It took years. It was hard. Some of the elders never forgave the choice.

But one day, the {hero} came back, and the children of {setting} heard music they had never heard before. They felt the stories of the places the {hero} had walked. They understood, for the first time, that you could love your home and still leave it. That you could honor your family and still choose a different path.

And some of those children, watching the {hero} live the true life, found the courage to walk their own ways too.

The {hero} understood it finally: your path is not just for you. Your path is permission for others to walk theirs.

{refrain}.`,
        scriptTemplate: `In {setting}, everyone had a future already planned: the family trade, the known path, the safe progression from one stage to the next.

{child_name} was good at many things, but none of them fit the planned path. The hands wanted to make music. The mind wanted to travel to places no one from {setting} had been. The heart wanted something that had no name yet, something {{child_name} could only feel coming from somewhere true inside.

But every elder said: that is not practical. That is not a real life. That is not what people like us do.

The pressure to walk the planned path was enormous. It came from love, mostly. Everyone wanted {{child_name} safe. Everyone wanted {{child_name} to not make the hard choices. Everyone wanted {{child_name} to walk where others had already made a path.

{{child_name} was twenty years old and terrified.

{companion_name} had been waiting for {{child_name} to come and sit at the edge of {setting}, in the place where true conversations happened. When {{child_name} finally did, {companion_name} let {{child_name} speak first.

"I do not want the future everyone is telling me I should want," said {{child_name}}. "But I am afraid to want my own. What if I am wrong? What if I fail? What if I disappoint everyone?"

{companion_name} was quiet for a long time. Then: "Here is what you need to know. The world does not need another {setting} merchant. It has plenty. But it needs a musician who thinks the way you think. It needs someone brave enough to go find the places nobody from {setting} has been. It needs whatever this unnamed thing in your heart is trying to become. Psst — listen close now — the people who love you most will suffer when you leave the planned path. But they will suffer more if you never become yourself. That is the trade. That is the only way."

{{child_name} held the {object_motif} and felt tears come. "That is not fair."

"No," said {companion_name}. "It is not. But it is true. Your path is yours to walk. You will not find it by looking at anyone else's. You will find it by following what is true in you."

{{child_name} made the hard choice. Left {setting}. Learned music. Traveled. Became the thing the heart was calling for.

It took years. It was hard. Some of the elders never forgave the choice.

But one day, {{child_name} came back, and the children of {setting} heard music they had never heard before. They felt the stories of the places {{child_name} had walked. They understood, for the first time, that you could love your home and still leave it. That you could honor your family and still choose a different path.

And some of those children, watching {{child_name} live the true life, found the courage to walk their own ways too.

{{child_name} understood it finally: your path is not just for you. Your path is permission for others to walk theirs.

{refrain}.`
      },
    },
    audioTemplate: `In {setting}, the {hero} felt the pull of their own path, even though it was different.

"Is different wrong?" they asked {companion_name}.

"Different is the path your feet know," said {companion_name}. "And different is what the world is waiting for. Psst — follow your own way. The world does not need another copy of someone else. It needs you."

The {hero} walked their own path. And discovered it led exactly where they needed to go.

{refrain}.`,
    scriptTemplate: `In {setting}, {child_name} felt the pull of their own path, even though it was different.

"Is different wrong?" they asked {companion_name}.

"Different is the path your feet know, {child_name}," said {companion_name}. "And different is what the world is waiting for. Psst — follow your own way. The world does not need another copy of someone else. It needs you."

{child_name} walked their own path. And discovered it led exactly where they needed to go.

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Scared and Trying',
    concept: 'Feeling afraid while doing it anyway', callback: 'My path is mine (Level 3)', ageFloor: 5,
    summary: 'The hero discovers that courage is not the absence of fear. When they try the brave thing, the fear does not disappear — it becomes a dance partner. Fear and courage exist together, and that is exactly how it is supposed to be.',
    teachingNote: 'The most important learning: fear and courage are not opposites. They are dance partners. A child who understands this will not wait for fear to disappear before doing brave things.',
    learningBeat: 'Fear is not the opposite of brave',
    ageVariants: {
      '3-4': {
        audioTemplate: `The {hero} was doing something scary in {setting}.

The {object_motif} was in a small hand, held tight.

The {hero}'s heart was going boom boom boom.

The {hero} was scared. Very scared.

But the {hero} was trying anyway.

{companion_name} sat close and warm.

"You are shaking," said {companion_name}. "But you are still trying."

"I am scared," said the {hero}.

"Yes," said {companion_name}. "And brave. At the same time. Psst — fear is not the opposite of brave. Fear is the dance partner of brave. They dance together."

The {hero} did the scary thing. Still scared. But brave anyway.

And the boom boom boom in the chest? It became the sound of trying.

The {hero} finished and felt the warm glow of having done it.

"The fear did not go away," said the {hero}.

"No," said {companion_name}. "But you danced with it anyway."

The {hero} snuggled down warm, holding the {object_motif}.

Fear and brave are friends.

{refrain}.`,
        scriptTemplate: `{child_name} was doing something scary in {setting}.

The {object_motif} was in a small hand, held tight.

{{child_name}'s heart was going boom boom boom.

{{child_name} was scared. Very scared.

But {{child_name} was trying anyway.

{companion_name} sat close and warm.

"You are shaking," said {companion_name}. "But you are still trying."

"I am scared," said {{child_name}}.

"Yes," said {companion_name}. "And brave. At the same time. Psst — fear is not the opposite of brave. Fear is the dance partner of brave. They dance together."

{{child_name} did the scary thing. Still scared. But brave anyway.

And the boom boom boom in the chest? It became the sound of trying.

{{child_name} finished and felt the warm glow of having done it.

"The fear did not go away," said {{child_name}}.

"No," said {companion_name}. "But you danced with it anyway."

{{child_name} snuggled down warm, holding the {object_motif}.

Fear and brave are friends.

{refrain}.`
      },
      '5-6': {
        audioTemplate: `The {hero} wanted to do the big thing in {setting}.

But the fear had come, and the fear was not leaving.

The {hero} thought: I should wait until the fear goes away, and then I will try.

But the fear did not go anywhere. It just sat there. Heavy and cold and sure.

Days went by. The {hero} still wanted to do the big thing. The fear was still there.

{companion_name} noticed the {hero} stuck between wanting and fear.

"You think you have to choose," said {companion_name}, sitting close. "Either be brave, or be scared. But that is not how it works."

"What do you mean?" asked the {hero}.

{companion_name} took the {object_motif} and held it up. "This does two things at once, yes? The weight is real. The beauty is real. Both at the same time."

"Yes," said the {hero}.

"Your fear and your brave are like that. Both real. Both there. At the same time. Psst — listen close — brave is not when the fear is gone. Brave is when you try while the fear is still dancing."

The {hero} looked at the big thing waiting. The fear was still there. Boom boom boom went the heart.

"The fear is still here," said the {hero}.

"Yes," said {companion_name}. "So try with it. Invite it to dance."

The {hero} took a breath and did the big thing. The fear came along for every second. The knees shook. The hands trembled. The heart went boom boom boom.

But the {hero} did it.

When it was done, the {hero} was breathing hard and the fear was still there, but something had changed. The fear and the trying had danced together, and the dancing had made the trying possible.

"The fear did not go away," said the {hero}.

"No," said {companion_name}. "But you went anyway. And that is what brave actually is."

The {hero} held the {object_motif} and understood. Fear is not the problem. Fear is just a feeling. Trying while you feel it — that is the brave part.

{refrain}.`,
        scriptTemplate: `{child_name} wanted to do the big thing in {setting}.

But the fear had come, and the fear was not leaving.

{{child_name} thought: I should wait until the fear goes away, and then I will try.

But the fear did not go anywhere. It just sat there. Heavy and cold and sure.

Days went by. {{child_name} still wanted to do the big thing. The fear was still there.

{companion_name} noticed {{child_name} stuck between wanting and fear.

"You think you have to choose," said {companion_name}, sitting close. "Either be brave, or be scared. But that is not how it works."

"What do you mean?" asked {{child_name}}.

{companion_name} took the {object_motif} and held it up. "This does two things at once, yes? The weight is real. The beauty is real. Both at the same time."

"Yes," said {{child_name}}.

"Your fear and your brave are like that. Both real. Both there. At the same time. Psst — listen close — brave is not when the fear is gone. Brave is when you try while the fear is still dancing."

{{child_name} looked at the big thing waiting. The fear was still there. Boom boom boom went the heart.

"The fear is still here," said {{child_name}}.

"Yes," said {companion_name}. "So try with it. Invite it to dance."

{{child_name} took a breath and did the big thing. The fear came along for every second. The knees shook. The hands trembled. The heart went boom boom boom.

But {{child_name} did it.

When it was done, {{child_name} was breathing hard and the fear was still there, but something had changed. The fear and the trying had danced together, and the dancing had made the trying possible.

"The fear did not go away," said {{child_name}}.

"No," said {companion_name}. "But you went anyway. And that is what brave actually is."

{{child_name} held the {object_motif} and understood. Fear is not the problem. Fear is just a feeling. Trying while you feel it — that is the brave part.

{refrain}.`
      },
      '7-8': {
        audioTemplate: `In {setting}, the {hero} had finally decided: today is the day I will try the thing I have been afraid of.

But when the time came, the fear was not smaller. It was bigger. Huge. The kind of fear that fills your whole body and makes you want to run backward fast.

The {hero} had expected that facing it would make it smaller. Had thought: once I decide to be brave, the fear will shrink.

But the fear did not shrink. It just got heavier.

{companion_name} came and found the {hero} sitting with the {object_motif} pressed hard in both hands.

"It got worse," said the {hero}. "The fear got worse since I decided to try."

{companion_name} nodded like this made perfect sense. "Of course it did. Fear knows when you are really going to do it, not just think about it. That is when it stands up and gets loud."

"How do I make it quiet?" asked the {hero}.

"You do not," said {companion_name}. "You stop waiting for it to be quiet. You do the thing while it is screaming. Psst — listen now — brave people do not have less fear than scared people. Brave people just have more practice doing things while the fear is screaming."

The {hero} looked at the thing waiting. The fear screamed and screamed.

"It is not going to get quieter?" asked the {hero}.

"Not before you do it," said {companion_name}. "But doing it is what makes it quieter. The quiet comes after, not before."

So the {hero} stood up, with the fear screaming, with the knees weak and the hands shaking and the heart trying to break out of the ribs. And did the thing.

It was messy. The fear was there the whole time. Halfway through, the {hero} wanted to stop. But {companion_name} was there, nodding, reminding without words: this is what brave looks like. This exact thing — scared and trying at the same time.

When it was done, the fear was still there. But it was different now. Smaller. Not gone, but transformed into something that felt less like a wall and more like a companion who had been tested.

"The fear is still here," said the {hero}, breathing hard.

"Yes," said {companion_name}. "But it is a different fear now. It is the fear of someone who has already done the thing. That is the only kind of fear that gets smaller — the fear after trying, not the fear before."

The {hero} held the {object_motif} and understood something that would change everything: fear is not what you need to get rid of. Fear is not the opposite of brave. Fear is what you need to move forward with.

{refrain}.`,
        scriptTemplate: `In {setting}, {{child_name} had finally decided: today is the day I will try the thing I have been afraid of.

But when the time came, the fear was not smaller. It was bigger. Huge. The kind of fear that fills your whole body and makes you want to run backward fast.

{{child_name} had expected that facing it would make it smaller. Had thought: once I decide to be brave, the fear will shrink.

But the fear did not shrink. It just got heavier.

{companion_name} came and found {{child_name} sitting with the {object_motif} pressed hard in both hands.

"It got worse," said {{child_name}}. "The fear got worse since I decided to try."

{companion_name} nodded like this made perfect sense. "Of course it did. Fear knows when you are really going to do it, not just think about it. That is when it stands up and gets loud."

"How do I make it quiet?" asked {{child_name}}.

"You do not," said {companion_name}. "You stop waiting for it to be quiet. You do the thing while it is screaming. Psst — listen now — brave people do not have less fear than scared people. Brave people just have more practice doing things while the fear is screaming."

{{child_name} looked at the thing waiting. The fear screamed and screamed.

"It is not going to get quieter?" asked {{child_name}}.

"Not before you do it," said {companion_name}. "But doing it is what makes it quieter. The quiet comes after, not before."

So {{child_name} stood up, with the fear screaming, with the knees weak and the hands shaking and the heart trying to break out of the ribs. And did the thing.

It was messy. The fear was there the whole time. Halfway through, {{child_name} wanted to stop. But {companion_name} was there, nodding, reminding without words: this is what brave looks like. This exact thing — scared and trying at the same time.

When it was done, the fear was still there. But it was different now. Smaller. Not gone, but transformed into something that felt less like a wall and more like a companion who had been tested.

"The fear is still here," said {{child_name}}, breathing hard.

"Yes," said {companion_name}. "But it is a different fear now. It is the fear of someone who has already done the thing. That is the only kind of fear that gets smaller — the fear after trying, not the fear before."

{{child_name} held the {object_motif} and understood something that would change everything: fear is not what you need to get rid of. Fear is not the opposite of brave. Fear is what you need to move forward with.

{refrain}.`
      },
      '9-11': {
        audioTemplate: `Before the big moment, in {setting}, the {hero} had imagined a thousand times how brave would feel.

In the imagination, brave was clean and bright and sure. Brave was walking toward the scary thing and feeling strong and ready.

None of that was true.

Real brave, when it arrived, felt awful.

The {hero}'s hands shook. The throat was tight. The mind kept offering excellent reasons to turn around. The body was sending distress signals on every channel. Fear was not absent — it was everywhere, in every cell, screaming that this was a terrible idea.

But the {hero} did it anyway.

And in the middle of doing it, with the fear at full volume, the {hero} realized: this is brave. Not because the fear is gone. Not because the {hero} feels confident. But because the {hero} is doing the thing while the fear is screaming at them not to.

{companion_name} had been watching the {hero} wrestle with all of this.

"You are surprised," {companion_name} said afterward, when the {hero} was sitting with shaking hands and racing heart.

"I thought brave would feel different," the {hero} admitted. "I thought it would feel sure."

"Brave is not a feeling," said {companion_name}. "Brave is a choice you make while having all the feelings. Scared, uncertain, shaky, doubting every choice — and doing it anyway. That is what brave is. Psst — listen: most brave people are terrified. That is the only way to know it is really brave. If you are not afraid, then it was not a risk worth taking."

The {hero} thought about all the times they had not done brave things. Had waited for the fear to disappear. Had thought: when I feel more confident, when the fear is smaller, when I am more certain. And the waiting had been safe. And the waiting had been small.

"So the fear does not go away?" asked the {hero}.

"Not before. But after — after you do it, after you prove to yourself that you can walk through fear and come out the other side — then the fear becomes different. It becomes the fear of someone who knows they can do hard things. That is a much smaller fear."

The {hero} held the {object_motif} and understood the trade: you could wait forever for courage to arrive before the fear leaves. Or you could notice that courage is not the absence of fear. Courage is the choice to move forward while the fear is still dancing.

The {hero} had chosen the dance. And the dance had made everything change.

{refrain}.`,
        scriptTemplate: `Before the big moment, in {setting}, {{child_name} had imagined a thousand times how brave would feel.

In the imagination, brave was clean and bright and sure. Brave was walking toward the scary thing and feeling strong and ready.

None of that was true.

Real brave, when it arrived, felt awful.

{{child_name}'s hands shook. The throat was tight. The mind kept offering excellent reasons to turn around. The body was sending distress signals on every channel. Fear was not absent — it was everywhere, in every cell, screaming that this was a terrible idea.

But {{child_name} did it anyway.

And in the middle of doing it, with the fear at full volume, {{child_name} realized: this is brave. Not because the fear is gone. Not because {{child_name} feels confident. But because {{child_name} is doing the thing while the fear is screaming at them not to.

{companion_name} had been watching {{child_name} wrestle with all of this.

"You are surprised," {companion_name} said afterward, when {{child_name} was sitting with shaking hands and racing heart.

"I thought brave would feel different," {{child_name} admitted. "I thought it would feel sure."

"Brave is not a feeling," said {companion_name}. "Brave is a choice you make while having all the feelings. Scared, uncertain, shaky, doubting every choice — and doing it anyway. That is what brave is. Psst — listen: most brave people are terrified. That is the only way to know it is really brave. If you are not afraid, then it was not a risk worth taking."

{{child_name} thought about all the times they had not done brave things. Had waited for the fear to disappear. Had thought: when I feel more confident, when the fear is smaller, when I am more certain. And the waiting had been safe. And the waiting had been small.

"So the fear does not go away?" asked {{child_name}}.

"Not before. But after — after you do it, after you prove to yourself that you can walk through fear and come out the other side — then the fear becomes different. It becomes the fear of someone who knows they can do hard things. That is a much smaller fear."

{{child_name} held the {object_motif} and understood the trade: you could wait forever for courage to arrive before the fear leaves. Or you could notice that courage is not the absence of fear. Courage is the choice to move forward while the fear is still dancing.

{{child_name} had chosen the dance. And the dance had made everything change.

{refrain}.`
      },
    },
    audioTemplate: `The {hero} felt the fear in {setting}, big and loud and real.

They thought: I should wait until this is gone, then I will try.

But {companion_name} sat close. "Fear is not the opposite of brave," they said. "Fear is the dance partner. Psst — dance with it anyway."

So the {hero} did the thing. Scared and trying at the same time.

And that was when the {hero} learned: brave does not feel sure. Brave feels terrified, and does it anyway.

{refrain}.`,
    scriptTemplate: `{child_name} felt the fear in {setting}, big and loud and real.

They thought: I should wait until this is gone, then I will try.

But {companion_name} sat close. "Fear is not the opposite of brave, {child_name}," they said. "Fear is the dance partner. Psst — dance with it anyway."

So {{child_name} did the thing. Scared and trying at the same time.

And that was when {{child_name} learned: brave does not feel sure. Brave feels terrified, and does it anyway.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'I Can Try',
    concept: 'Permission to attempt, to fail, to learn, to be', callback: 'Scared and trying (Level 4)', ageFloor: 6,
    summary: 'The hero is at the edge of something they have always wanted to do, waiting for permission that no one will ever give. Their companion delivers the final truth: you do not get permission. You only get the choice to try. And trying itself is the entire permission.',
    teachingNote: 'The capstone story. No one will hand over permission. Trying itself is the entire permission. A child who understands this will not wait their whole life for someone to tell them they are allowed.',
    learningBeat: 'I can try, and that is enough',
    ageVariants: {
      '3-4': {
        audioTemplate: `The {hero} stood at the edge of something wonderful in {setting}.

The {object_motif} was held very tight.

The {hero} thought: Maybe when I am older, someone will say "go ahead." Maybe then it will be okay.

But {companion_name} knew the {hero} had been waiting a very long time.

"You are waiting for permission," said {companion_name}.

The {hero} nodded.

"Here is a secret," said {companion_name}. "No one is going to give it. No one ever does. Psst — the permission is inside you already."

"Really?" whispered the {hero}.

"Really. You can try right now."

So the {hero} did.

And the {hero} discovered: trying is its own permission.

The {hero} was not perfect. The {hero} was still little. But the {hero} tried anyway.

And that was enough.

That was everything.

{refrain}.`,
        scriptTemplate: `{child_name} stood at the edge of something wonderful in {setting}.

The {object_motif} was held very tight.

{{child_name} thought: Maybe when I am older, someone will say "go ahead." Maybe then it will be okay.

But {companion_name} knew {{child_name} had been waiting a very long time.

"You are waiting for permission," said {companion_name}.

{{child_name} nodded.

"Here is a secret," said {companion_name}. "No one is going to give it. No one ever does. Psst — the permission is inside you already."

"Really?" whispered {{child_name}}.

"Really. You can try right now."

So {{child_name} did.

And {{child_name} discovered: trying is its own permission.

{{child_name} was not perfect. {{child_name} was still little. But {{child_name} tried anyway.

And that was enough.

That was everything.

{refrain}.`
      },
      '5-6': {
        audioTemplate: `For a long time, the {hero} had watched something happening in {setting} and wanted so badly to join.

But some part deep inside kept saying: wait. Wait until you are invited. Wait until someone tells you that you are allowed. Wait until you are sure you will be good at it.

The waiting was safe. The waiting was how to not make mistakes. The waiting was the long game.

But the {hero} was not happy in the waiting.

{companion_name} sat with the {hero} one evening and asked the question that changed everything.

"Are you waiting for an invitation that is never going to come?"

The {hero} felt tears come. Because yes. Yes, that was exactly it.

"Do you know what invitation actually looks like?" {companion_name} asked.

The {hero} shook their head.

{companion_name} held up the {object_motif}. "It looks like this. You. Ready or not. Unsure or not. Imperfect or not. Right now. Psst — listen close, dear one. No one is going to stand at the gate and say 'come in, you are allowed.' That is not how it works. You are the gate keeper. You are the one who says yes."

The {hero} felt something open inside the chest.

"I can just... try?" asked the {hero}.

"You can just try," said {companion_name}. "Right now. That is all the permission you will ever get."

So the {hero} tried.

There was no ceremony. No official moment. Just the {hero}, stepping from the edge into the middle of the thing they had wanted so long.

And it was not perfect. The {hero} was new and unsure and made mistakes.

But the {hero} was in.

And that was the whole permission. Just the trying.

{refrain}.`,
        scriptTemplate: `For a long time, {{child_name} had watched something happening in {setting} and wanted so badly to join.

But some part deep inside kept saying: wait. Wait until you are invited. Wait until someone tells you that you are allowed. Wait until you are sure you will be good at it.

The waiting was safe. The waiting was how to not make mistakes. The waiting was the long game.

But {{child_name} was not happy in the waiting.

{companion_name} sat with {{child_name} one evening and asked the question that changed everything.

"Are you waiting for an invitation that is never going to come?"

{{child_name} felt tears come. Because yes. Yes, that was exactly it.

"Do you know what invitation actually looks like?" {companion_name} asked.

{{child_name} shook their head.

{companion_name} held up the {object_motif}. "It looks like this. You. Ready or not. Unsure or not. Imperfect or not. Right now. Psst — listen close, dear one. No one is going to stand at the gate and say 'come in, you are allowed.' That is not how it works. You are the gate keeper. You are the one who says yes."

{{child_name} felt something open inside the chest.

"I can just... try?" asked {{child_name}}.

"You can just try," said {companion_name}. "Right now. That is all the permission you will ever get."

So {{child_name} tried.

There was no ceremony. No official moment. Just {{child_name}, stepping from the edge into the middle of the thing they had wanted so long.

And it was not perfect. {{child_name} was new and unsure and made mistakes.

But {{child_name} was in.

And that was the whole permission. Just the trying.

{refrain}.`
      },
      '7-8': {
        audioTemplate: `By the time the {hero} reached the age of learning, most of the life had already been decided.

The path was laid. The expectations were set. The role was assigned. And there was something the {hero} wanted to do — something that did not fit the plan, something that would require stepping out of the assigned role and into the unknown.

It required permission.

The {hero} waited for permission from teachers. From parents. From the voice that said you are allowed. It never came. Or it came in the form of reasons why not to try. Reasons rooted in love, rooted in fear, rooted in the belief that the plan was better than the desire.

Years went by. The {hero} was still waiting.

{companion_name} was old enough to know something true.

"You have been waiting for permission since I have known you," {companion_name} said to the {hero}, sitting in {setting} as the light turned soft. "Do you know when that permission is going to come?"

"I do not know," said the {hero}.

"Never," said {companion_name}. "It is never going to come. No one is going to stand up and say 'yes, you have our blessing, go do the thing.' That is not how permission works. Psst — listen now — permission is what you give yourself when you decide the trying matters more than the waiting."

The {hero} held the {object_motif} tight. "But what if I fail?"

"Then you will have tried and failed," said {companion_name}. "That is different than having not tried at all. One of those is a beginning. One is a long slow ending disguised as safety."

The {hero} understood something that shifted the whole life: the people who were not waiting for permission were not more special. They were not more talented or more certain. They had just decided that trying was more important than being sure.

So the {hero} tried.

It was messy and uncertain and imperfect. But it was the {hero}'s.

And years later, when the {hero} was older and steady, people asked: how did you have the courage? How did you know you could?

And the {hero} would say: I did not know. I just tried anyway. I gave myself permission by doing it.

{refrain}.`,
        scriptTemplate: `By the time {{child_name} reached the age of learning, most of the life had already been decided.

The path was laid. The expectations were set. The role was assigned. And there was something {{child_name} wanted to do — something that did not fit the plan, something that would require stepping out of the assigned role and into the unknown.

It required permission.

{{child_name} waited for permission from teachers. From parents. From the voice that said you are allowed. It never came. Or it came in the form of reasons why not to try. Reasons rooted in love, rooted in fear, rooted in the belief that the plan was better than the desire.

Years went by. {{child_name} was still waiting.

{companion_name} was old enough to know something true.

"You have been waiting for permission since I have known you," {companion_name} said to {{child_name}, sitting in {setting} as the light turned soft. "Do you know when that permission is going to come?"

"I do not know," said {{child_name}}.

"Never," said {companion_name}. "It is never going to come. No one is going to stand up and say 'yes, you have our blessing, go do the thing.' That is not how permission works. Psst — listen now — permission is what you give yourself when you decide the trying matters more than the waiting."

{{child_name} held the {object_motif} tight. "But what if I fail?"

"Then you will have tried and failed," said {companion_name}. "That is different than having not tried at all. One of those is a beginning. One is a long slow ending disguised as safety."

{{child_name} understood something that shifted the whole life: the people who were not waiting for permission were not more special. They were not more talented or more certain. They had just decided that trying was more important than being sure.

So {{child_name} tried.

It was messy and uncertain and imperfect. But it was {{child_name}'s.

And years later, when {{child_name} was older and steady, people asked: how did you have the courage? How did you know you could?

And {{child_name} would say: I did not know. I just tried anyway. I gave myself permission by doing it.

{refrain}.`
      },
      '9-11': {
        audioTemplate: `At eighteen, the {hero} was standing at a crossroads, and both paths were real.

One path was the future everyone expected. It was safe. It was planned. It was the life that was already drawn, waiting to be lived. Many people had walked it before. The map was clear.

The other path was a whisper. A feeling. A sense that there was something else, something larger, something the {hero} felt called toward but could not articulate or justify. The map for this path was blank. The safety was nonexistent.

To walk the second path would require something no one was going to give.

Permission.

The {hero} looked and looked for it. Waited for someone to appear and say: yes, this is the right choice, go this way, I support you, you have my blessing, you are allowed.

No one said it. The parents wanted safety. The teachers wanted predictability. The elders wanted tradition. And the {hero} wanted permission before breaking any of it.

But {companion_name} had been waiting for this moment.

"You are twenty," said {companion_name}, sitting with the {hero} in the place where they had always talked about true things. "And you are still waiting to be given permission to live your own life. Do you understand what that means?"

The {hero} shook their head.

"It means if you wait long enough, you will give away your entire life waiting for permission you will never receive. Someone will always have a reason why not. Someone will always be afraid. Someone will always be invested in the life you were supposed to live instead of the life you actually want."

{companion_name} held the {object_motif} — worn smooth by the {hero}'s hands over twenty years.

"Here is what you need to know. Permission is not a gift anyone gives you. Permission is a choice you make about yourself. And here is the hard part: you have to make it alone. No one is coming to stand beside you and say 'okay, go ahead.' You have to say it to yourself. Psst — listen close now — this is the bravest thing you will ever do. Giving yourself the permission no one else will. And then living with that choice. That is adulthood. That is the whole thing."

The {hero} felt the weight and the freedom of it at the same time.

"What if I am wrong?" asked the {hero}.

"You might be," said {companion_name}. "But then you will have made an honest mistake following your own path. That is different than having succeeded on someone else's path. One of those is a life. One is an echo of someone else's blueprint."

The {hero} left that conversation changed.

Made the choice. Took the blank-map path. Failed and learned and failed again and succeeded in some unexpected ways and failed in others. It was hard. It was uncertain. It was imperfect.

But it was the {hero}'s.

And years later, people asked: how did you know?

And the {hero} would say: I did not know. I still do not know. I just decided that trying my own life was worth the risk of failing at it. That is all permission is. I can try, and that is enough. The choice to try.

{refrain}.`,
        scriptTemplate: `At eighteen, {{child_name} was standing at a crossroads, and both paths were real.

One path was the future everyone expected. It was safe. It was planned. It was the life that was already drawn, waiting to be lived. Many people had walked it before. The map was clear.

The other path was a whisper. A feeling. A sense that there was something else, something larger, something {{child_name} felt called toward but could not articulate or justify. The map for this path was blank. The safety was nonexistent.

To walk the second path would require something no one was going to give.

Permission.

{{child_name} looked and looked for it. Waited for someone to appear and say: yes, this is the right choice, go this way, I support you, you have my blessing, you are allowed.

No one said it. The parents wanted safety. The teachers wanted predictability. The elders wanted tradition. And {{child_name} wanted permission before breaking any of it.

But {companion_name} had been waiting for this moment.

"You are twenty," said {companion_name}, sitting with {{child_name} in the place where they had always talked about true things. "And you are still waiting to be given permission to live your own life. Do you understand what that means?"

{{child_name} shook their head.

"It means if you wait long enough, you will give away your entire life waiting for permission you will never receive. Someone will always have a reason why not. Someone will always be afraid. Someone will always be invested in the life you were supposed to live instead of the life you actually want."

{companion_name} held the {object_motif} — worn smooth by {{child_name}'s hands over twenty years.

"Here is what you need to know. Permission is not a gift anyone gives you. Permission is a choice you make about yourself. And here is the hard part: you have to make it alone. No one is coming to stand beside you and say 'okay, go ahead.' You have to say it to yourself. Psst — listen close now — this is the bravest thing you will ever do. Giving yourself the permission no one else will. And then living with that choice. That is adulthood. That is the whole thing."

{{child_name} felt the weight and the freedom of it at the same time.

"What if I am wrong?" asked {{child_name}}.

"You might be," said {companion_name}. "But then you will have made an honest mistake following your own path. That is different than having succeeded on someone else's path. One of those is a life. One is an echo of someone else's blueprint."

{{child_name} left that conversation changed.

Made the choice. Took the blank-map path. Failed and learned and failed again and succeeded in some unexpected ways and failed in others. It was hard. It was uncertain. It was imperfect.

But it was {{child_name}'s.

And years later, people asked: how did you know?

And {{child_name} would say: I did not know. I still do not know. I just decided that trying my own life was worth the risk of failing at it. That is all permission is. I can try, and that is enough. The choice to try.

{refrain}.`
      },
    },
    audioTemplate: `The {hero} held the {object_motif} and stood at the edge of everything.

"Will you give me permission?" they asked {companion_name}.

{companion_name} smiled. "No one is going to give it. You have to give it to yourself."

Psst — the {hero} realized: permission is not a gift. Permission is trying.

So they tried.

And that was enough. That was everything.

{refrain}.`,
    scriptTemplate: `{child_name} held the {object_motif} and stood at the edge of everything.

"Will you give me permission?" they asked {companion_name}.

{companion_name} smiled. "No one is going to give it, {child_name}. You have to give it to yourself."

Psst — {{child_name} realized: permission is not a gift. Permission is trying.

So they tried.

And that was enough. That was everything.

{refrain}.`,
  },
]
