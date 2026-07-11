// content/money/levels.ts
//
// TWO TEMPLATES PER LEVEL — intentional:
//
//   audioTemplate  — sent to Kokoro. No {child_name}.
//                    Cacheable by (level × skin × voice) = 80 fixed files.
//
//   scriptTemplate — shown in email + library. Includes {child_name}.
//                    Assembled at delivery time, never sent to TTS.
//
// To draft new levels: npm run author:draft -- --subject money --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: 'The Keyhole Coin',
    concept: 'Coins have different names, sizes and colours', callback: null, ageFloor: 3,
    summary: "An old music box has been shut for as long as anyone remembers — it opens for exactly one coin in all the world, and every big, shiny coin has failed. Tonight the hero discovers why: coins aren't all one thing. Each has its own size, colour, picture and name, and reading those clues is what finally makes the music play.",
    teachingNote: 'Noticing the small differences between coins — name, size, colour, picture — is the foundation the whole path builds on.',
    learningBeat: 'Each one has its own name',
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} came home to {setting} with a little pile of found coins. Clink. Clink. Clink.

{companion_name} was sitting beside a small wooden box. The box had one tiny round hole in its lid. A coin-shaped hole.

"This box plays a sleepy song," said {companion_name}. "But it only opens for one special coin. I never found the right one."

The {hero} smiled. Easy! There were lots of coins right here.

The {hero} pushed the big coin at the hole. Too big.

The {hero} tried the shiny coin. It did not fit. The box went pfft.

"But a coin is a coin!" said the {hero}.

Was it, though? The {hero} looked close.

One coin was big. One was small. One had a bird. One had a leaf. And one had a tiny boat.

Now look at the box. Right next to the hole. Can you see it too? A tiny carved boat!

"Oh!" said the {hero}. "The coins are not all the same. Each one has its own name! The box wants the boat coin!"

The boat coin was the smallest one of all. The {hero} slid it in. Click!

The lid opened, and out came a slow, silvery sleepy song.

"My song," whispered {companion_name}. "From when I was small."

The song got slower. And slower. The {hero} lay back to listen.

Beside the box sat the {object_motif}. It had a tiny picture too. A new name to learn tomorrow.

{refrain}.`,
    scriptTemplate: `{child_name} came home to {setting} with a little pile of found coins. Clink. Clink. Clink.

{companion_name} was sitting beside a small wooden box. The box had one tiny round hole in its lid. A coin-shaped hole.

"This box plays a sleepy song," said {companion_name}. "But it only opens for one special coin. I never found the right one."

{child_name} smiled. Easy! There were lots of coins right here.

{child_name} pushed the big coin at the hole. Too big.

{child_name} tried the shiny coin. It did not fit. The box went pfft.

"But a coin is a coin!" said {child_name}.

Was it, though? {child_name} looked close.

One coin was big. One was small. One had a bird. One had a leaf. And one had a tiny boat.

Now look at the box. Right next to the hole. Can you see it too? A tiny carved boat!

"Oh!" said {child_name}. "The coins are not all the same. Each one has its own name! The box wants the boat coin!"

The boat coin was the smallest one of all. {child_name} slid it in. Click!

The lid opened, and out came a slow, silvery sleepy song.

"My song," whispered {companion_name}. "From when I was small."

The song got slower. And slower. {child_name} lay back to listen.

Beside the box sat the {object_motif}. It had a tiny picture too. A new name to learn tomorrow.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} came home to {setting} with a pocketful of clinking. All afternoon there had been coins to find, under leaves, between stones, seven at least, and the first and best was the {object_motif}, polished on a sleeve until it winked.

But {companion_name} was not looking at the coins. {companion_name} sat beside a small wooden box with a little round keyhole in its lid. A keyhole shaped exactly like a coin.

"This box plays the sweetest going-to-sleep song ever made," said {companion_name}. "But it has been shut since I was young. It opens for one coin in all the world, and I never learned which one. I have tried every coin I ever met."

The {hero} grinned. One coin? There were seven right here!

The biggest coin went first. Too wide. The shiniest went next; it spun on the lid and fell over, tap. The heaviest slid in halfway and stopped, and the box made a small polite sound, like a sneeze. Pfft.

"But a coin is a coin!" said the {hero}. "Money is money. Why won't any of them work?"

"Hmm," said {companion_name}, who knew that some doors you have to find for yourself.

So the {hero} laid all seven coins in a row under the rising moon, and for the first time ever, really looked.

One coin was wide and brown, like warm bread. One was thin and pale as the moon. Some had smooth edges, and one had tiny bumps all the way around, like little teeth. And on every face there was a picture. A bird. A leaf. A tall tree. A boat.

Now, here is the secret the {hero} almost missed. Lean close and look at the lid. Right beside the keyhole, carved small as a freckle. Can you see it too? A boat.

The {hero}'s eyes went wide. "They're not all the same coin at all! Each one has its own name. And the box is asking for one of them by name!"

The boat coin was the smallest, quietest coin in the row, the one the {hero} had nearly left in the mud. It slid into the keyhole like it was coming home. Click.

The lid breathed open, and the song spilled out slow and silvery, note by note, like stars being set out one at a time.

{companion_name} went very still. "There it is," they whispered. "{refrain}. My mother used to say that, right before this song."

The song played itself slower and slower, the way songs do when they are ready to sleep. The {hero} said goodnight to the coins one by one, by their clues. The wide brown one. The bird one. The little boat one, the hero of the night.

Only the {object_motif} kept its secret, a tiny picture no one could name yet. "Tomorrow," said {companion_name}. "Some names are worth the wait."

The {hero} closed both eyes and let the last note land.

{refrain}.`,
    scriptTemplate: `{child_name} came home to {setting} with a pocketful of clinking. All afternoon there had been coins to find, under leaves, between stones, seven at least, and the first and best was the {object_motif}, polished on a sleeve until it winked.

But {companion_name} was not looking at the coins. {companion_name} sat beside a small wooden box with a little round keyhole in its lid. A keyhole shaped exactly like a coin.

"This box plays the sweetest going-to-sleep song ever made," said {companion_name}. "But it has been shut since I was young. It opens for one coin in all the world, and I never learned which one. I have tried every coin I ever met."

{child_name} grinned. One coin? There were seven right here!

The biggest coin went first. Too wide. The shiniest went next; it spun on the lid and fell over, tap. The heaviest slid in halfway and stopped, and the box made a small polite sound, like a sneeze. Pfft.

"But a coin is a coin!" said {child_name}. "Money is money. Why won't any of them work?"

"Hmm," said {companion_name}, who knew that some doors you have to find for yourself.

So {child_name} laid all seven coins in a row under the rising moon, and for the first time ever, really looked.

One coin was wide and brown, like warm bread. One was thin and pale as the moon. Some had smooth edges, and one had tiny bumps all the way around, like little teeth. And on every face there was a picture. A bird. A leaf. A tall tree. A boat.

Now, here is the secret {child_name} almost missed. Lean close and look at the lid. Right beside the keyhole, carved small as a freckle. Can you see it too? A boat.

{child_name}'s eyes went wide. "They're not all the same coin at all! Each one has its own name. And the box is asking for one of them by name!"

The boat coin was the smallest, quietest coin in the row, the one {child_name} had nearly left in the mud. It slid into the keyhole like it was coming home. Click.

The lid breathed open, and the song spilled out slow and silvery, note by note, like stars being set out one at a time.

{companion_name} went very still. "There it is," they whispered. "{refrain}. My mother used to say that, right before this song."

The song played itself slower and slower, the way songs do when they are ready to sleep. {child_name} said goodnight to the coins one by one, by their clues. The wide brown one. The bird one. The little boat one, the hero of the night.

Only the {object_motif} kept its secret, a tiny picture no one could name yet. "Tomorrow," said {companion_name}. "Some names are worth the wait."

{child_name} closed both eyes and let the last note land.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The market in {setting} was folding up for the night, stall by stall, and the {hero} was counting a day's worth of found coins into one palm. Eleven of them, warm from the pocket. The best was the {object_motif}, discovered that morning in a gap between two paving stones, and the {hero} had big plans for the lot. Plans that lasted right up until {companion_name} set the box on the wall between them.

It was a small wooden box, older than it looked, with worn corners and a lid that did not open. No latch, no hinge you could see. What it had, dead centre, was a little round keyhole. A keyhole the exact shape of a coin.

"I bought it for one button and a favour, half my life ago," said {companion_name}. "The maker told me it plays the finest going-to-sleep song on this side of the sky, and that it opens for exactly one coin. One coin in all the world. I have tried coins from every market I ever walked through. It has said no to all of them."

The {hero} felt the pleasant crack of a challenge opening up. Eleven coins. Surely the box just hadn't met the right pocket yet.

The widest coin was too wide, and sat on the keyhole like a hat. The thickest went in a little way and stuck, and the box made a soft, unimpressed sound. Pfft. The coin with the ridged edge slid in beautifully, turned a quarter of the way, and stopped, its little teeth grinding on something inside.

"It nearly turned!" said the {hero}.

"They always nearly turn," said {companion_name}, in the voice of someone who had been saying it for years.

The {hero} sat back, frowning at the pile. "But money is money. A coin's a coin. If one fits, they should all..."

The sentence trailed off, because up close, in the last orange light, the coins had stopped looking like one thing. One was broad and heavy, the colour of old copper. One was slim and pale, hardly there at all. Some had smooth rims and some had ridged ones, dozens of tiny teeth all the way round. And every single face carried its own small picture: a bird, a leaf, a curl of waves, a tall tree, a boat.

The {hero} picked up the ridged coin that had almost turned, and then looked, slowly, at the keyhole itself. At the inside of its rim. Smooth. The lock wanted a smooth-edged coin. And there, carved beside the keyhole, so small and so worn that a thousand hopeful thumbs must have polished it nearly away, was a picture.

A boat.

"It's not asking for any coin," the {hero} said, and the idea arrived all at once, the way the last piece of a puzzle stops being a piece and becomes the picture. "They're all different, every one of them. Each one has its own name. And the box has been saying the name it wants this whole time."

Smooth edge. Boat on the face. Small enough for the little keyhole. The {hero} went back through the pile with new eyes, reading instead of grabbing, and found it near the bottom: the smallest, palest coin of the lot, the one that had seemed hardly worth picking up that afternoon.

It slid in without touching the sides. It turned all the way round, like it had been doing it for years.

Click.

The lid rose on its own, slow as a drawbridge, and the song came out into the closing-down market, silvery and unhurried, and one by one the last stallholders stopped their packing to listen.

Inside the box there was no gold. There was a pressed flower, flat and pale with age, and a scrap of paper in faded ink: "For the one who learns to look."

{companion_name} read it twice and said nothing for a while. "{refrain}," they murmured at last, which was somehow an answer.

The song wound down the way a day does, slower and softer, each note a little further from the last. The {hero} stacked the coins by their names, smooth rims here and ridged rims there, the boat coin resting on top of the box it had opened.

Only the {object_motif} went back into the pocket unread, its own strange little picture still unnamed. Tomorrow's mystery, keeping itself warm.

The market went dark and friendly around them, shutter by shutter, and the {hero} headed home slow and sleepy, with a pocket full of names.

{refrain}.`,
    scriptTemplate: `The market in {setting} was folding up for the night, stall by stall, and {child_name} was counting a day's worth of found coins into one palm. Eleven of them, warm from the pocket. The best was the {object_motif}, discovered that morning in a gap between two paving stones, and {child_name} had big plans for the lot. Plans that lasted right up until {companion_name} set the box on the wall between them.

It was a small wooden box, older than it looked, with worn corners and a lid that did not open. No latch, no hinge you could see. What it had, dead centre, was a little round keyhole. A keyhole the exact shape of a coin.

"I bought it for one button and a favour, half my life ago," said {companion_name}. "The maker told me it plays the finest going-to-sleep song on this side of the sky, and that it opens for exactly one coin. One coin in all the world. I have tried coins from every market I ever walked through. It has said no to all of them."

{child_name} felt the pleasant crack of a challenge opening up. Eleven coins. Surely the box just hadn't met the right pocket yet.

The widest coin was too wide, and sat on the keyhole like a hat. The thickest went in a little way and stuck, and the box made a soft, unimpressed sound. Pfft. The coin with the ridged edge slid in beautifully, turned a quarter of the way, and stopped, its little teeth grinding on something inside.

"It nearly turned!" said {child_name}.

"They always nearly turn," said {companion_name}, in the voice of someone who had been saying it for years.

{child_name} sat back, frowning at the pile. "But money is money. A coin's a coin. If one fits, they should all..."

The sentence trailed off, because up close, in the last orange light, the coins had stopped looking like one thing. One was broad and heavy, the colour of old copper. One was slim and pale, hardly there at all. Some had smooth rims and some had ridged ones, dozens of tiny teeth all the way round. And every single face carried its own small picture: a bird, a leaf, a curl of waves, a tall tree, a boat.

{child_name} picked up the ridged coin that had almost turned, and then looked, slowly, at the keyhole itself. At the inside of its rim. Smooth. The lock wanted a smooth-edged coin. And there, carved beside the keyhole, so small and so worn that a thousand hopeful thumbs must have polished it nearly away, was a picture.

A boat.

"It's not asking for any coin," {child_name} said, and the idea arrived all at once, the way the last piece of a puzzle stops being a piece and becomes the picture. "They're all different, every one of them. Each one has its own name. And the box has been saying the name it wants this whole time."

Smooth edge. Boat on the face. Small enough for the little keyhole. {child_name} went back through the pile with new eyes, reading instead of grabbing, and found it near the bottom: the smallest, palest coin of the lot, the one that had seemed hardly worth picking up that afternoon.

It slid in without touching the sides. It turned all the way round, like it had been doing it for years.

Click.

The lid rose on its own, slow as a drawbridge, and the song came out into the closing-down market, silvery and unhurried, and one by one the last stallholders stopped their packing to listen.

Inside the box there was no gold. There was a pressed flower, flat and pale with age, and a scrap of paper in faded ink: "For the one who learns to look."

{companion_name} read it twice and said nothing for a while. "{refrain}," they murmured at last, which was somehow an answer.

The song wound down the way a day does, slower and softer, each note a little further from the last. {child_name} stacked the coins by their names, smooth rims here and ridged rims there, the boat coin resting on top of the box it had opened.

Only the {object_motif} went back into the pocket unread, its own strange little picture still unnamed. Tomorrow's mystery, keeping itself warm.

The market went dark and friendly around them, shutter by shutter, and {child_name} headed home slow and sleepy, with a pocket full of names.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The box had lived on {companion_name}'s highest shelf for as long as the {hero} could remember, being mysterious and useless in equal measure. Tonight, with no warning at all, {companion_name} lifted it down, set it on a flat stone in {setting}, and said, "You're old enough. See what you make of it."

It was small and heavier than it looked, made of dark wood gone glossy with handling. No latch. No hinge worth the name. Just one round keyhole sunk dead centre in the lid — a keyhole, the {hero} realised with a small jolt of delight, shaped precisely like a coin.

"It plays a song," said {companion_name}. "The best going-to-sleep song ever made, or so the maker swore. And it opens for one coin in all the world. I've fed it coins from every market I ever passed through, and it has refused every single one. I stopped trying years ago."

The {hero} looked at the day's pocketful — eleven coins, counting the {object_motif} found that morning — and privately gave the whole mystery about two minutes.

The widest coin sat on the keyhole like a lid on a jar. The thickest jammed a third of the way in, and the box produced a soft, long-suffering sound. Pfft. The ridged one was the cruellest: it slid in sweetly, turned a whole quarter, and stopped dead, teeth grinding on something inside that had clearly been designed by somebody who enjoyed this sort of thing.

"Nearly," said the {hero}.

"They always nearly," said {companion_name}, with the calm of long defeat.

Two minutes stretched to ten. The {hero} ran out of coins, then out of theories, and was one breath away from declaring the box officially broken — a verdict that would have been very satisfying and completely wrong — when the last of the light fell across the little heap of failures.

And the heap stopped being a heap.

It hadn't changed. The {hero} had. Because now, actually looking, there was no such thing as "a coin" on that stone. There was a broad copper one, worn nearly smooth. A slim pale one, light as a dry leaf. There were rims ridged fine as combing and rims like polished glass, and every face carried its own stamped picture — bird, leaf, curling wave, tall tree, little boat — like a row of small strangers, each quietly holding up a name.

The {hero} bent over the keyhole itself, properly this time. Its inner rim was smooth, so the ridged coin had never had a chance. It was narrow, so the copper one was out before it began. And beside it, worn faint by years of hopeful thumbs, was a carving the size of a grain of rice.

A boat.

"It's not refusing coins," the {hero} said slowly. "It's asking for one. They're not interchangeable at all. Each one has its own name, its own size, its own picture. The box has been saying the name of the one it wants the whole time. We just never read it."

The boat coin was in the discard heap, naturally. The smallest, palest, least promising coin of the day — the {hero} had filed it that afternoon under "barely worth bending down for." Smooth rim. Narrow. A boat stamped on its face, sails no bigger than an eyelash.

It slid in without touching the sides and turned all the way round, smooth as a key in butter.

Click.

The lid rose by itself, unhurried, as if it had never been stuck a day in its life, and the song came out — silvery, patient, older than anyone listening — and {companion_name} sat down slowly, the way you do when a very old question finally answers itself.

Inside there was no treasure. There was a scrap of paper in careful, faded ink — "For the one who learns to look" — and beneath it a single coin the {hero} had never seen the like of. Darker than the copper. Stranger than the pale one. Stamped with a sign neither of them knew.

"What is it?" the {hero} asked. "What would it even be worth?"

"That," said {companion_name}, closing their eyes to listen, "is tomorrow's question."

The song spent itself the way evenings do, each note a little further from the last. The {hero} sorted the failures back into the pocket by name — the copper, the bird, the ridged-edge — and set the boat coin on top of the box it had opened, a small guard on a solved door.

The {object_motif} went in last, its own odd little picture still unread. The {hero} was starting to suspect the world was full of things that had names and clues and quiet keyholes, if you only slowed down enough to look.

"{refrain}," said {companion_name}, barely louder than the song had been.

The {hero} echoed it, half asleep already.

{refrain}.`,
    scriptTemplate: `The box had lived on {companion_name}'s highest shelf for as long as {child_name} could remember, being mysterious and useless in equal measure. Tonight, with no warning at all, {companion_name} lifted it down, set it on a flat stone in {setting}, and said, "You're old enough. See what you make of it."

It was small and heavier than it looked, made of dark wood gone glossy with handling. No latch. No hinge worth the name. Just one round keyhole sunk dead centre in the lid — a keyhole, {child_name} realised with a small jolt of delight, shaped precisely like a coin.

"It plays a song," said {companion_name}. "The best going-to-sleep song ever made, or so the maker swore. And it opens for one coin in all the world. I've fed it coins from every market I ever passed through, and it has refused every single one. I stopped trying years ago."

{child_name} looked at the day's pocketful — eleven coins, counting the {object_motif} found that morning — and privately gave the whole mystery about two minutes.

The widest coin sat on the keyhole like a lid on a jar. The thickest jammed a third of the way in, and the box produced a soft, long-suffering sound. Pfft. The ridged one was the cruellest: it slid in sweetly, turned a whole quarter, and stopped dead, teeth grinding on something inside that had clearly been designed by somebody who enjoyed this sort of thing.

"Nearly," said {child_name}.

"They always nearly," said {companion_name}, with the calm of long defeat.

Two minutes stretched to ten. {child_name} ran out of coins, then out of theories, and was one breath away from declaring the box officially broken — a verdict that would have been very satisfying and completely wrong — when the last of the light fell across the little heap of failures.

And the heap stopped being a heap.

It hadn't changed. {child_name} had. Because now, actually looking, there was no such thing as "a coin" on that stone. There was a broad copper one, worn nearly smooth. A slim pale one, light as a dry leaf. There were rims ridged fine as combing and rims like polished glass, and every face carried its own stamped picture — bird, leaf, curling wave, tall tree, little boat — like a row of small strangers, each quietly holding up a name.

{child_name} bent over the keyhole itself, properly this time. Its inner rim was smooth, so the ridged coin had never had a chance. It was narrow, so the copper one was out before it began. And beside it, worn faint by years of hopeful thumbs, was a carving the size of a grain of rice.

A boat.

"It's not refusing coins," {child_name} said slowly. "It's asking for one. They're not interchangeable at all. Each one has its own name, its own size, its own picture. The box has been saying the name of the one it wants the whole time. We just never read it."

The boat coin was in the discard heap, naturally. The smallest, palest, least promising coin of the day — {child_name} had filed it that afternoon under "barely worth bending down for." Smooth rim. Narrow. A boat stamped on its face, sails no bigger than an eyelash.

It slid in without touching the sides and turned all the way round, smooth as a key in butter.

Click.

The lid rose by itself, unhurried, as if it had never been stuck a day in its life, and the song came out — silvery, patient, older than anyone listening — and {companion_name} sat down slowly, the way you do when a very old question finally answers itself.

Inside there was no treasure. There was a scrap of paper in careful, faded ink — "For the one who learns to look" — and beneath it a single coin {child_name} had never seen the like of. Darker than the copper. Stranger than the pale one. Stamped with a sign neither of them knew.

"What is it?" {child_name} asked. "What would it even be worth?"

"That," said {companion_name}, closing their eyes to listen, "is tomorrow's question."

The song spent itself the way evenings do, each note a little further from the last. {child_name} sorted the failures back into the pocket by name — the copper, the bird, the ridged-edge — and set the boat coin on top of the box it had opened, a small guard on a solved door.

The {object_motif} went in last, its own odd little picture still unread. {child_name} was starting to suspect the world was full of things that had names and clues and quiet keyholes, if you only slowed down enough to look.

"{refrain}," said {companion_name}, barely louder than the song had been.

{child_name} echoed it, half asleep already.

{refrain}.`
  }
},
    audioTemplate: `The {hero} came home to {setting} with a pocketful of clinking. All afternoon there had been coins to find, under leaves, between stones, seven at least, and the first and best was the {object_motif}, polished on a sleeve until it winked.

But {companion_name} was not looking at the coins. {companion_name} sat beside a small wooden box with a little round keyhole in its lid. A keyhole shaped exactly like a coin.

"This box plays the sweetest going-to-sleep song ever made," said {companion_name}. "But it has been shut since I was young. It opens for one coin in all the world, and I never learned which one. I have tried every coin I ever met."

The {hero} grinned. One coin? There were seven right here!

The biggest coin went first. Too wide. The shiniest went next; it spun on the lid and fell over, tap. The heaviest slid in halfway and stopped, and the box made a small polite sound, like a sneeze. Pfft.

"But a coin is a coin!" said the {hero}. "Money is money. Why won't any of them work?"

"Hmm," said {companion_name}, who knew that some doors you have to find for yourself.

So the {hero} laid all seven coins in a row under the rising moon, and for the first time ever, really looked.

One coin was wide and brown, like warm bread. One was thin and pale as the moon. Some had smooth edges, and one had tiny bumps all the way around, like little teeth. And on every face there was a picture. A bird. A leaf. A tall tree. A boat.

Now, here is the secret the {hero} almost missed. Lean close and look at the lid. Right beside the keyhole, carved small as a freckle. Can you see it too? A boat.

The {hero}'s eyes went wide. "They're not all the same coin at all! Each one has its own name. And the box is asking for one of them by name!"

The boat coin was the smallest, quietest coin in the row, the one the {hero} had nearly left in the mud. It slid into the keyhole like it was coming home. Click.

The lid breathed open, and the song spilled out slow and silvery, note by note, like stars being set out one at a time.

{companion_name} went very still. "There it is," they whispered. "{refrain}. My mother used to say that, right before this song."

The song played itself slower and slower, the way songs do when they are ready to sleep. The {hero} said goodnight to the coins one by one, by their clues. The wide brown one. The bird one. The little boat one, the hero of the night.

Only the {object_motif} kept its secret, a tiny picture no one could name yet. "Tomorrow," said {companion_name}. "Some names are worth the wait."

The {hero} closed both eyes and let the last note land.

{refrain}.`,
    scriptTemplate: `{child_name} came home to {setting} with a pocketful of clinking. All afternoon there had been coins to find, under leaves, between stones, seven at least, and the first and best was the {object_motif}, polished on a sleeve until it winked.

But {companion_name} was not looking at the coins. {companion_name} sat beside a small wooden box with a little round keyhole in its lid. A keyhole shaped exactly like a coin.

"This box plays the sweetest going-to-sleep song ever made," said {companion_name}. "But it has been shut since I was young. It opens for one coin in all the world, and I never learned which one. I have tried every coin I ever met."

{child_name} grinned. One coin? There were seven right here!

The biggest coin went first. Too wide. The shiniest went next; it spun on the lid and fell over, tap. The heaviest slid in halfway and stopped, and the box made a small polite sound, like a sneeze. Pfft.

"But a coin is a coin!" said {child_name}. "Money is money. Why won't any of them work?"

"Hmm," said {companion_name}, who knew that some doors you have to find for yourself.

So {child_name} laid all seven coins in a row under the rising moon, and for the first time ever, really looked.

One coin was wide and brown, like warm bread. One was thin and pale as the moon. Some had smooth edges, and one had tiny bumps all the way around, like little teeth. And on every face there was a picture. A bird. A leaf. A tall tree. A boat.

Now, here is the secret {child_name} almost missed. Lean close and look at the lid. Right beside the keyhole, carved small as a freckle. Can you see it too? A boat.

{child_name}'s eyes went wide. "They're not all the same coin at all! Each one has its own name. And the box is asking for one of them by name!"

The boat coin was the smallest, quietest coin in the row, the one {child_name} had nearly left in the mud. It slid into the keyhole like it was coming home. Click.

The lid breathed open, and the song spilled out slow and silvery, note by note, like stars being set out one at a time.

{companion_name} went very still. "There it is," they whispered. "{refrain}. My mother used to say that, right before this song."

The song played itself slower and slower, the way songs do when they are ready to sleep. {child_name} said goodnight to the coins one by one, by their clues. The wide brown one. The bird one. The little boat one, the hero of the night.

Only the {object_motif} kept its secret, a tiny picture no one could name yet. "Tomorrow," said {companion_name}. "Some names are worth the wait."

{child_name} closed both eyes and let the last note land.

{refrain}.`,
  },
  {
    ordinal: 2, title: 'The Little Sun',
    concept: "A coin's value and its size are different things",
    summary: "Once a season the night-trader's cart rolls through, and tonight the hero wants the star-stitched blanket on its top shelf. Their magnificent big coin turns out to buy exactly one clothes-peg — while the dull little coin they nearly left under a stone hides a tiny golden sun, the rarest mark of all. Bigger, the hero discovers, never meant worth more.",
    teachingNote: "Children naturally assume bigger means more valuable — this story builds the habit of asking 'what is it worth?' instead of 'how big is it?'.",
    learningBeat: "A coin's worth comes from what it is, not how large it looks",
    ageVariants: {
  '3-4': {
    audioTemplate: `The night-trader's cart had come to {setting}. It would leave at moonrise.

On its top shelf sat a soft star-stitched blanket. The {hero} wanted that blanket so much.

In the {hero}'s pocket sat two found coins. One big. One small. Count them. One. Two. And the {object_motif}, just for luck.

The {hero} put the big coin down. "One blanket, please!"

The trader smiled. "For this big coin? One clothes-peg."

But the big coin was so big!

"Hmm," said {companion_name}. "Look closer, little {hero}."

The {hero} rubbed the small coin clean. Look, right under the dust. Can you see it too? A tiny golden sun!

"Oh!" said the {hero}. "The little one is the special one! A coin's worth comes from what it is, not how large it looks!"

Ting! The little coin rang like a tiny bell.

"A little sun!" said the trader. "The rarest of all. It is worth my softest blanket."

Down came the blanket. So soft. So warm. {companion_name} snuggled under one corner. "{refrain}," they whispered.

The cart rolled away slow. "Next time," called the trader, "I will tell you where little suns are made."

Warm blanket. Quiet stars. Sleepy eyes.

{refrain}.`,
    scriptTemplate: `The night-trader's cart had come to {setting}. It would leave at moonrise.

On its top shelf sat a soft star-stitched blanket. {child_name} wanted that blanket so much.

In {child_name}'s pocket sat two found coins. One big. One small. Count them. One. Two. And the {object_motif}, just for luck.

{child_name} put the big coin down. "One blanket, please!"

The trader smiled. "For this big coin? One clothes-peg."

But the big coin was so big!

"Hmm," said {companion_name}. "Look closer, little {hero}."

{child_name} rubbed the small coin clean. Look, right under the dust. Can you see it too? A tiny golden sun!

"Oh!" said {child_name}. "The little one is the special one! A coin's worth comes from what it is, not how large it looks!"

Ting! The little coin rang like a tiny bell.

"A little sun!" said the trader. "The rarest of all. It is worth my softest blanket."

Down came the blanket. So soft. So warm. {companion_name} snuggled under one corner. "{refrain}," they whispered.

The cart rolled away slow. "Next time," called the trader, "I will tell you where little suns are made."

Warm blanket. Quiet stars. Sleepy eyes.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Once a season, the night-trader's cart rolled through {setting}, and it left at moonrise. Tonight it was here. On its top shelf sat the star-stitched blanket the {hero} had wanted since the first cold evening of the year.

Tonight, at last, the {hero} had money. That morning, an old lost purse had turned up under a stone, and inside were two coins. One was enormous — wide as a biscuit and heavy. The other was small and grey, no bigger than a button. The {hero} slipped them in a pocket beside the {object_motif}, for luck, and hurried to the cart with {companion_name}.

"One blanket, please!" said the {hero}, laying the enormous coin on the counter with a proud thump.

The trader turned it over and smiled kindly. "For this? I can give you one clothes-peg."

A clothes-peg! The {hero} pushed the coin closer, in case it had not been seen properly. Then polished it until it gleamed. Then stacked three pebbles on top, to make it taller. Still one clothes-peg.

"But it's the biggest coin I have ever found!" said the {hero}.

"Hmm," said {companion_name} softly. "Didn't you once open a box by looking closer?"

Looking closer. The {hero} took out the little grey coin — and noticed how heavy it was. Small as a button, heavy as a secret. And under the dust, something waited.

Lean close now. Right under the smudge. Can you see it too? A tiny golden sun.

The {hero} rubbed it clear with one thumb, and the sun shone. "It was never about big or small!" said the {hero}. "A coin's worth comes from what it is, not how large it looks!"

"In thirty years," whispered the trader, "I have seen a little sun only once. It is worth the finest thing on this cart."

The {hero} tapped it on the counter. Ting — a ring like a far-away bell saying yes.

So the trade was made. Down came the blanket, even softer than it looked, and the {hero} wrapped one end around {companion_name}, who said they were quite warm already, and snuggled in anyway.

"{refrain}," murmured {companion_name}, from somewhere inside the stars.

The cart rolled away slow. "Next season, little {hero}," the trader called back, "I will tell you where the little suns were made."

The big coin stayed in the pocket. It made a fine paperweight.

The blanket was warm. The night was soft. The {hero}'s eyes closed on their own.

{refrain}.`,
    scriptTemplate: `Once a season, the night-trader's cart rolled through {setting}, and it left at moonrise. Tonight it was here. On its top shelf sat the star-stitched blanket {child_name} had wanted since the first cold evening of the year.

Tonight, at last, {child_name} had money. That morning, an old lost purse had turned up under a stone, and inside were two coins. One was enormous — wide as a biscuit and heavy. The other was small and grey, no bigger than a button. {child_name} slipped them in a pocket beside the {object_motif}, for luck, and hurried to the cart with {companion_name}.

"One blanket, please!" said {child_name}, laying the enormous coin on the counter with a proud thump.

The trader turned it over and smiled kindly. "For this? I can give you one clothes-peg."

A clothes-peg! {child_name} pushed the coin closer, in case it had not been seen properly. Then polished it until it gleamed. Then stacked three pebbles on top, to make it taller. Still one clothes-peg.

"But it's the biggest coin I have ever found!" said {child_name}.

"Hmm," said {companion_name} softly. "Didn't you once open a box by looking closer?"

Looking closer. {child_name} took out the little grey coin — and noticed how heavy it was. Small as a button, heavy as a secret. And under the dust, something waited.

Lean close now. Right under the smudge. Can you see it too? A tiny golden sun.

{child_name} rubbed it clear with one thumb, and the sun shone. "It was never about big or small!" said {child_name}. "A coin's worth comes from what it is, not how large it looks!"

"In thirty years," whispered the trader, "I have seen a little sun only once. It is worth the finest thing on this cart."

{child_name} tapped it on the counter. Ting — a ring like a far-away bell saying yes.

So the trade was made. Down came the blanket, even softer than it looked, and {child_name} wrapped one end around {companion_name}, who said they were quite warm already, and snuggled in anyway.

"{refrain}," murmured {companion_name}, from somewhere inside the stars.

The cart rolled away slow. "Next season, little {hero}," the trader called back, "I will tell you where the little suns were made."

The big coin stayed in the pocket. It made a fine paperweight.

The blanket was warm. The night was soft. {child_name}'s eyes closed on their own.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The night-trader came to {setting} once a season, often enough to feel like magic, rarely enough that nobody ever got used to it. The cart arrived that evening with lanterns swinging and brass bell chiming, and it would leave at moonrise.

The {hero} had one thing in mind: the star-stitched blanket, folded on the top shelf between a telescope and a teapot. It had been there last season too, deep blue, sewn with small white stars, and the {hero} had thought about it through every chilly evening since.

And tonight, for once, there was money. That morning the {hero} had pulled an old cloth purse from under a mossy stone. Inside were two coins. The first was magnificent: wide as a biscuit, thick as a thumb, heavy enough to make a pocket swing. The second was small and grey and dull, hardly bigger than a button. The {hero} very nearly left the little one where it lay, then dropped it in the pocket anyway, next to the {object_motif}, and went to find {companion_name}.

"Tonight," announced the {hero}, "I am buying the blanket. Look at the size of this coin. It could buy the whole shelf."

"Mm," said {companion_name}, which was not quite agreement.

At the cart, the {hero} laid the great coin on the counter with both hands, the way you might present a trophy.

The trader picked it up, turned it over once, and smiled a kind, slightly sorry smile. "For this, I can offer you one clothes-peg."

The {hero} waited for the joke to finish. It did not finish.

"One clothes-peg? It's the biggest coin I have ever found!"

"It is certainly the biggest," the trader agreed pleasantly.

So the {hero} got to work. The coin was polished on a sleeve until an arm ached, in case shine helped. It was moved closer to the lantern, in case light helped. Three pebbles were stacked on top of it, in case tallness helped. The trader watched all this with great interest and offered, at last, two clothes-pegs — for the entertainment.

The {hero} slumped against the cart wheel. "But big should mean more. That's the whole point of big."

"Hmm," said {companion_name}, settling down beside the {hero}. "You opened a locked box once, remember. Not by pushing harder. By looking closer."

Looking closer. The {hero} took out the little grey coin, the one that was almost left under a stone, and gave it a proper look for the first time. It was small, yes. But it was heavy — strangely heavy, small as a button and heavy as a secret. Its edge was milled with fine lines, finer than on any coin the {hero} had ever read. And under the dust on its face there was a shape.

Lean close, right under the smudge. Can you see it too? A tiny golden sun, fast asleep.

The {hero} rubbed it clear with one thumb, and the sun woke up and shone.

Everything went quiet at the cart. The trader leaned in slowly.

"It was never about big or small," said the {hero}, holding it up. "A coin's worth comes from what it is, not how large it looks!"

"In thirty years of trading," the trader said softly, "I have seen a little sun once — in my grandmother's hand, when I was smaller than you. She told me it was worth the finest thing a cart could carry."

The {hero} tapped the coin gently on the counter, and it rang. Ting — high and clear, like a bell agreeing from far away.

"The blanket," said the trader, "is a little sun's worth exactly. As if they were made for each other."

Down it came from the top shelf, and it was softer than it had looked, which almost never happens. The {hero} wrapped one end around {companion_name}, who said they were perfectly warm already and then burrowed in until only two curious eyes showed.

"{refrain}," murmured {companion_name}, from somewhere inside the stars.

The cart packed itself up unhurriedly, lantern by lantern. As it rolled away, the trader leaned out. "Next season, little {hero}, come and find me. There is one more little sun somewhere in the world — and I will tell you where they were made."

The wheels grew quieter. The moon came up on time.

The big coin stayed in the pocket after all. It made, everyone agreed, an excellent paperweight.

The blanket was warm. The night was kind. The {hero}'s eyes closed on their own.

{refrain}.`,
    scriptTemplate: `The night-trader came to {setting} once a season, often enough to feel like magic, rarely enough that nobody ever got used to it. The cart arrived that evening with lanterns swinging and brass bell chiming, and it would leave at moonrise.

{child_name} had one thing in mind: the star-stitched blanket, folded on the top shelf between a telescope and a teapot. It had been there last season too, deep blue, sewn with small white stars, and {child_name} had thought about it through every chilly evening since.

And tonight, for once, there was money. That morning {child_name} had pulled an old cloth purse from under a mossy stone. Inside were two coins. The first was magnificent: wide as a biscuit, thick as a thumb, heavy enough to make a pocket swing. The second was small and grey and dull, hardly bigger than a button. {child_name} very nearly left the little one where it lay, then dropped it in the pocket anyway, next to the {object_motif}, and went to find {companion_name}.

"Tonight," announced {child_name}, "I am buying the blanket. Look at the size of this coin. It could buy the whole shelf."

"Mm," said {companion_name}, which was not quite agreement.

At the cart, {child_name} laid the great coin on the counter with both hands, the way you might present a trophy.

The trader picked it up, turned it over once, and smiled a kind, slightly sorry smile. "For this, I can offer you one clothes-peg."

{child_name} waited for the joke to finish. It did not finish.

"One clothes-peg? It's the biggest coin I have ever found!"

"It is certainly the biggest," the trader agreed pleasantly.

So {child_name} got to work. The coin was polished on a sleeve until an arm ached, in case shine helped. It was moved closer to the lantern, in case light helped. Three pebbles were stacked on top of it, in case tallness helped. The trader watched all this with great interest and offered, at last, two clothes-pegs — for the entertainment.

{child_name} slumped against the cart wheel. "But big should mean more. That's the whole point of big."

"Hmm," said {companion_name}, settling down beside {child_name}. "You opened a locked box once, remember. Not by pushing harder. By looking closer."

Looking closer. {child_name} took out the little grey coin, the one that was almost left under a stone, and gave it a proper look for the first time. It was small, yes. But it was heavy — strangely heavy, small as a button and heavy as a secret. Its edge was milled with fine lines, finer than on any coin {child_name} had ever read. And under the dust on its face there was a shape.

Lean close, right under the smudge. Can you see it too? A tiny golden sun, fast asleep.

{child_name} rubbed it clear with one thumb, and the sun woke up and shone.

Everything went quiet at the cart. The trader leaned in slowly.

"It was never about big or small," said {child_name}, holding it up. "A coin's worth comes from what it is, not how large it looks!"

"In thirty years of trading," the trader said softly, "I have seen a little sun once — in my grandmother's hand, when I was smaller than you. She told me it was worth the finest thing a cart could carry."

{child_name} tapped the coin gently on the counter, and it rang. Ting — high and clear, like a bell agreeing from far away.

"The blanket," said the trader, "is a little sun's worth exactly. As if they were made for each other."

Down it came from the top shelf, and it was softer than it had looked, which almost never happens. {child_name} wrapped one end around {companion_name}, who said they were perfectly warm already and then burrowed in until only two curious eyes showed.

"{refrain}," murmured {companion_name}, from somewhere inside the stars.

The cart packed itself up unhurriedly, lantern by lantern. As it rolled away, the trader leaned out. "Next season, little {hero}, come and find me. There is one more little sun somewhere in the world — and I will tell you where they were made."

The wheels grew quieter. The moon came up on time.

The big coin stayed in the pocket after all. It made, everyone agreed, an excellent paperweight.

The blanket was warm. The night was kind. {child_name}'s eyes closed on their own.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The purse was the first mystery. The {hero} found it that morning beneath a mossy stone at the edge of {setting} — old waxed cloth, stitched shut with sailmaker's thread, a tiny ship embroidered on the flap. Inside were two coins and the smell of long ago.

The first coin was a monster. Wide as a biscuit, thick as a thumb, heavy enough to make the whole pocket swing when the {hero} walked. The second was small, grey, and dull, hardly bigger than a button, and the {hero} came within one lazy breath of leaving it under the stone. Into the pocket it went anyway, next to the {object_motif}, mostly out of politeness.

The timing could not have been better, because tonight the night-trader's cart stood at the crossroads, lanterns swinging, brass bell chiming, due to roll away at moonrise as it did once a season. And on the cart's top shelf, folded between a telescope and a teapot, sat the star-stitched blanket: deep blue, sewn all over with small white stars, wanted by the {hero} since the first cold evening of the year with a steady, patient wanting that had never once had money behind it.

Now there was money. Now there was a coin the size of a biscuit.

"The blanket, please," said the {hero}, laying the great coin on the counter the way you might present a trophy.

The trader picked it up, weighed it in one hand, turned it over twice, and smiled the kind smile of someone about to be disappointing. "For this? One clothes-peg."

The {hero} laughed. The trader did not.

"It's the biggest coin I have ever found," said the {hero}, with dignity.

"It is certainly the biggest," the trader agreed, and waited to see what the {hero} would do about it.

What followed was not the {hero}'s finest hour. The great coin was polished on a sleeve until an arm ached, in case shine was the problem. It was carried around to the other side of the lantern, in case shadow was the problem. It was stood upright and steadied with three stacked pebbles, in case the counter simply needed to see how tall it could be. The trader observed all of this with genuine enjoyment and raised the offer to two clothes-pegs, for the entertainment.

The {hero} slumped against the cart wheel, defeated by arithmetic that refused to behave. Big should mean more. That was the whole point of big. Everything else worked that way — big waves, big trees, big dinners.

"Hmm," said {companion_name}, from the {hero}'s side. "You opened a locked box once, remember. Not by pushing harder. By looking closer."

The little grey coin was still in the pocket, busy being unimportant. The {hero} took it out — and frowned. It was heavy. Not heavy for its size; heavy like a secret, small as a button and dense as a promise. Its edge was milled with lines finer than on any coin the {hero} had ever read, dozens of them, patient and exact. Coins had names, the {hero} knew that much by now; names, faces, edges, marks. So what was this one's name? Under the dust on its face, something waited.

Lean in, right under the smudge. Can you see it too? A tiny golden sun, fast asleep.

One pass of a thumb, and the sun woke up and shone.

The counter went very quiet. Somewhere behind the lanterns, the trader stopped breathing for a moment.

"It was never about big or small," the {hero} said slowly, the whole evening rearranging itself. "The name, the mark, the make — that is the coin. A coin's worth comes from what it is, not how large it looks."

"In thirty years of this cart," said the trader, "I have seen a little sun once. My grandmother kept one in her left glove for luck, and she would not trade it for a wagon of the big ones. It is worth the finest thing I carry — and the finest thing I carry is that blanket."

The {hero} tapped the little coin once on the counter. Ting. High and clear, like a far-off bell agreeing.

The trade was made without another word, the way the best trades are. The blanket came down from the top shelf, softer than it had looked, which almost never happens, and big enough that when the {hero} draped one end over {companion_name}, they vanished entirely except for two curious eyes.

"{refrain}," said {companion_name}, muffled, from somewhere among the sewn stars.

The cart packed itself up without hurry, lantern by lantern. The trader leaned out as the wheels began to turn. "Next season, little {hero}, come and find me. Bring that purse — a ship stitched like that means it sailed a long way to reach you, and I trade in stories too."

The wheels faded down the road. The moon arrived exactly on time.

Walking home through {setting}, the {hero} thought about how sure they had been at the counter, and how kindly the evening had corrected them. The great coin rode along in the pocket, magnificent and mostly useless, already promoted to paperweight. The little sun was gone, and the warmth it had bought was everywhere.

The {hero} lay down under new stars, the sewn ones and the real ones, and let the two skies blur into each other.

{refrain}.`,
    scriptTemplate: `The purse was the first mystery. {child_name} found it that morning beneath a mossy stone at the edge of {setting} — old waxed cloth, stitched shut with sailmaker's thread, a tiny ship embroidered on the flap. Inside were two coins and the smell of long ago.

The first coin was a monster. Wide as a biscuit, thick as a thumb, heavy enough to make the whole pocket swing when {child_name} walked. The second was small, grey, and dull, hardly bigger than a button, and {child_name} came within one lazy breath of leaving it under the stone. Into the pocket it went anyway, next to the {object_motif}, mostly out of politeness.

The timing could not have been better, because tonight the night-trader's cart stood at the crossroads, lanterns swinging, brass bell chiming, due to roll away at moonrise as it did once a season. And on the cart's top shelf, folded between a telescope and a teapot, sat the star-stitched blanket: deep blue, sewn all over with small white stars, wanted by {child_name} since the first cold evening of the year with a steady, patient wanting that had never once had money behind it.

Now there was money. Now there was a coin the size of a biscuit.

"The blanket, please," said {child_name}, laying the great coin on the counter the way you might present a trophy.

The trader picked it up, weighed it in one hand, turned it over twice, and smiled the kind smile of someone about to be disappointing. "For this? One clothes-peg."

{child_name} laughed. The trader did not.

"It's the biggest coin I have ever found," said {child_name}, with dignity.

"It is certainly the biggest," the trader agreed, and waited to see what {child_name} would do about it.

What followed was not {child_name}'s finest hour. The great coin was polished on a sleeve until an arm ached, in case shine was the problem. It was carried around to the other side of the lantern, in case shadow was the problem. It was stood upright and steadied with three stacked pebbles, in case the counter simply needed to see how tall it could be. The trader observed all of this with genuine enjoyment and raised the offer to two clothes-pegs, for the entertainment.

{child_name} slumped against the cart wheel, defeated by arithmetic that refused to behave. Big should mean more. That was the whole point of big. Everything else worked that way — big waves, big trees, big dinners.

"Hmm," said {companion_name}, from {child_name}'s side. "You opened a locked box once, remember. Not by pushing harder. By looking closer."

The little grey coin was still in the pocket, busy being unimportant. {child_name} took it out — and frowned. It was heavy. Not heavy for its size; heavy like a secret, small as a button and dense as a promise. Its edge was milled with lines finer than on any coin {child_name} had ever read, dozens of them, patient and exact. Coins had names, {child_name} knew that much by now; names, faces, edges, marks. So what was this one's name? Under the dust on its face, something waited.

Lean in, right under the smudge. Can you see it too? A tiny golden sun, fast asleep.

One pass of a thumb, and the sun woke up and shone.

The counter went very quiet. Somewhere behind the lanterns, the trader stopped breathing for a moment.

"It was never about big or small," {child_name} said slowly, the whole evening rearranging itself. "The name, the mark, the make — that is the coin. A coin's worth comes from what it is, not how large it looks."

"In thirty years of this cart," said the trader, "I have seen a little sun once. My grandmother kept one in her left glove for luck, and she would not trade it for a wagon of the big ones. It is worth the finest thing I carry — and the finest thing I carry is that blanket."

{child_name} tapped the little coin once on the counter. Ting. High and clear, like a far-off bell agreeing.

The trade was made without another word, the way the best trades are. The blanket came down from the top shelf, softer than it had looked, which almost never happens, and big enough that when {child_name} draped one end over {companion_name}, they vanished entirely except for two curious eyes.

"{refrain}," said {companion_name}, muffled, from somewhere among the sewn stars.

The cart packed itself up without hurry, lantern by lantern. The trader leaned out as the wheels began to turn. "Next season, little {hero}, come and find me. Bring that purse — a ship stitched like that means it sailed a long way to reach you, and I trade in stories too."

The wheels faded down the road. The moon arrived exactly on time.

Walking home through {setting}, {child_name} thought about how sure they had been at the counter, and how kindly the evening had corrected them. The great coin rode along in the pocket, magnificent and mostly useless, already promoted to paperweight. The little sun was gone, and the warmth it had bought was everywhere.

{child_name} lay down under new stars, the sewn ones and the real ones, and let the two skies blur into each other.

{refrain}.`
  }
},
    callback: 'Coins have different names and appearances (Level 1)', ageFloor: 3,
    audioTemplate: `Once a season, the night-trader's cart rolled through {setting}, and it left at moonrise. Tonight it was here. On its top shelf sat the star-stitched blanket the {hero} had wanted since the first cold evening of the year.

Tonight, at last, the {hero} had money. That morning, an old lost purse had turned up under a stone, and inside were two coins. One was enormous — wide as a biscuit and heavy. The other was small and grey, no bigger than a button. The {hero} slipped them in a pocket beside the {object_motif}, for luck, and hurried to the cart with {companion_name}.

"One blanket, please!" said the {hero}, laying the enormous coin on the counter with a proud thump.

The trader turned it over and smiled kindly. "For this? I can give you one clothes-peg."

A clothes-peg! The {hero} pushed the coin closer, in case it had not been seen properly. Then polished it until it gleamed. Then stacked three pebbles on top, to make it taller. Still one clothes-peg.

"But it's the biggest coin I have ever found!" said the {hero}.

"Hmm," said {companion_name} softly. "Didn't you once open a box by looking closer?"

Looking closer. The {hero} took out the little grey coin — and noticed how heavy it was. Small as a button, heavy as a secret. And under the dust, something waited.

Lean close now. Right under the smudge. Can you see it too? A tiny golden sun.

The {hero} rubbed it clear with one thumb, and the sun shone. "It was never about big or small!" said the {hero}. "A coin's worth comes from what it is, not how large it looks!"

"In thirty years," whispered the trader, "I have seen a little sun only once. It is worth the finest thing on this cart."

The {hero} tapped it on the counter. Ting — a ring like a far-away bell saying yes.

So the trade was made. Down came the blanket, even softer than it looked, and the {hero} wrapped one end around {companion_name}, who said they were quite warm already, and snuggled in anyway.

"{refrain}," murmured {companion_name}, from somewhere inside the stars.

The cart rolled away slow. "Next season, little {hero}," the trader called back, "I will tell you where the little suns were made."

The big coin stayed in the pocket. It made a fine paperweight.

The blanket was warm. The night was soft. The {hero}'s eyes closed on their own.

{refrain}.`,
    scriptTemplate: `Once a season, the night-trader's cart rolled through {setting}, and it left at moonrise. Tonight it was here. On its top shelf sat the star-stitched blanket {child_name} had wanted since the first cold evening of the year.

Tonight, at last, {child_name} had money. That morning, an old lost purse had turned up under a stone, and inside were two coins. One was enormous — wide as a biscuit and heavy. The other was small and grey, no bigger than a button. {child_name} slipped them in a pocket beside the {object_motif}, for luck, and hurried to the cart with {companion_name}.

"One blanket, please!" said {child_name}, laying the enormous coin on the counter with a proud thump.

The trader turned it over and smiled kindly. "For this? I can give you one clothes-peg."

A clothes-peg! {child_name} pushed the coin closer, in case it had not been seen properly. Then polished it until it gleamed. Then stacked three pebbles on top, to make it taller. Still one clothes-peg.

"But it's the biggest coin I have ever found!" said {child_name}.

"Hmm," said {companion_name} softly. "Didn't you once open a box by looking closer?"

Looking closer. {child_name} took out the little grey coin — and noticed how heavy it was. Small as a button, heavy as a secret. And under the dust, something waited.

Lean close now. Right under the smudge. Can you see it too? A tiny golden sun.

{child_name} rubbed it clear with one thumb, and the sun shone. "It was never about big or small!" said {child_name}. "A coin's worth comes from what it is, not how large it looks!"

"In thirty years," whispered the trader, "I have seen a little sun only once. It is worth the finest thing on this cart."

{child_name} tapped it on the counter. Ting — a ring like a far-away bell saying yes.

So the trade was made. Down came the blanket, even softer than it looked, and {child_name} wrapped one end around {companion_name}, who said they were quite warm already, and snuggled in anyway.

"{refrain}," murmured {companion_name}, from somewhere inside the stars.

The cart rolled away slow. "Next season, little {hero}," the trader called back, "I will tell you where the little suns were made."

The big coin stayed in the pocket. It made a fine paperweight.

The blanket was warm. The night was soft. {child_name}'s eyes closed on their own.

{refrain}.`,
  },
  {
    ordinal: 3, title: 'Two Coins Back',
    concept: 'When you pay more than something costs, you get change back',
    summary: "The moon-loaf for tonight's picnic costs three coins, and the hero's one small coin is worth five — so paying feels like losing two. After a funny evening of trying to make the coin smaller, the hero hands it over anyway, and two coins come walking back across the counter. At last the mysterious word on the baker's little sign makes sense.",
    teachingNote: 'Understanding change turns a transaction from a confusing exchange into a logical, predictable conversation — a skill that removes anxiety at shop counters.',
    learningBeat: 'That is called change',
    ageVariants: {
  '3-4': {
    audioTemplate: `Picnic night! The {hero} and {companion_name} spread a blanket in {setting}. The {object_motif} held down one corner.

One thing was missing. The moon-loaf! The baker made just one each night, golden and warm.

The {hero} had one little coin. But the {hero} knew its marks. It was worth five!

The moon-loaf cost three. Count with me. One, two, three.

"But if I pay five for three," said the {hero}, "I lose two!"

On the stall hung a sign: "Change given, always." What was change?

The {hero} had an idea. "Please cut my coin in three, like a loaf!"

The baker laughed. "Coins don't slice, little {hero}."

The {hero} sighed and paid the whole coin anyway.

The baker handed over the warm loaf. Then — watch the baker's hand. Can you see it too? Two little coins, coming back! Chink, chink.

"You gave back the extra!" said the {hero}. "Like the sign says! That is called change!"

One coin back bought honey-butter for the loaf. Even better than the plan!

They ate under the moon. "{refrain}," whispered {companion_name}.

"Tomorrow," said the baker, packing up, "the loaf will be a new secret shape."

What shape? Morning knows.

Warm bread. Full tummies. Slow, sleepy blinks.

{refrain}.`,
    scriptTemplate: `Picnic night! {child_name} and {companion_name} spread a blanket in {setting}. The {object_motif} held down one corner.

One thing was missing. The moon-loaf! The baker made just one each night, golden and warm.

{child_name} had one little coin. But {child_name} knew its marks. It was worth five!

The moon-loaf cost three. Count with me. One, two, three.

"But if I pay five for three," said {child_name}, "I lose two!"

On the stall hung a sign: "Change given, always." What was change?

{child_name} had an idea. "Please cut my coin in three, like a loaf!"

The baker laughed. "Coins don't slice, little {hero}."

{child_name} sighed and paid the whole coin anyway.

The baker handed over the warm loaf. Then — watch the baker's hand. Can you see it too? Two little coins, coming back! Chink, chink.

"You gave back the extra!" said {child_name}. "Like the sign says! That is called change!"

One coin back bought honey-butter for the loaf. Even better than the plan!

They ate under the moon. "{refrain}," whispered {companion_name}.

"Tomorrow," said the baker, packing up, "the loaf will be a new secret shape."

What shape? Morning knows.

Warm bread. Full tummies. Slow, sleepy blinks.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Picnic night. The {hero} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} already sat on the blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, golden with a swirl on top, and tonight it was still there, filling the market with its warm smell.

The {hero} had one coin. It was small, but the {hero} had read its marks, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said the {hero}, "I lose two. That's just losing."

Above the stall hung a chalk sign: "Change given, always." The {hero} had puzzled over it all week. Change into what?

First plan: the {hero} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Second plan: swap one five for three ones. The toy-seller had only whistles. The fruit-seller offered a button. A nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

The {hero} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

The {hero} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

Here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into the {hero}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Tomorrow's loaf," called the baker, packing up, "is a new shape. A secret one. Something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

{refrain}.`,
    scriptTemplate: `Picnic night. {child_name} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} already sat on the blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, golden with a swirl on top, and tonight it was still there, filling the market with its warm smell.

{child_name} had one coin. It was small, but {child_name} had read its marks, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said {child_name}, "I lose two. That's just losing."

Above the stall hung a chalk sign: "Change given, always." {child_name} had puzzled over it all week. Change into what?

First plan: {child_name} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Second plan: swap one five for three ones. The toy-seller had only whistles. The fruit-seller offered a button. A nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

{child_name} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

{child_name} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

Here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into {child_name}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Tomorrow's loaf," called the baker, packing up, "is a new shape. A secret one. Something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Picnic night came once a week, and the {hero} took it as seriously as some folk take birthdays. The spot was chosen days in advance: the mossy rise in {setting} where the moon shows up first, before it has finished combing its hair. By sunset the picnic blanket was spread, and the {object_motif} sat on one corner to keep the breeze from stealing it.

All that was missing was the middle of the picnic — the moon-loaf. Every evening the baker made exactly one: round, golden, with a swirl on top like a shell, and famous for three streets in every direction. Tonight it was still on the stall, sending its warm smell out over the market like an announcement.

The {hero} had one coin, and knew precisely what it was. Since the business with the box and the little sun, the {hero} read coins the way other people read signs. Name, face, edge. This one was small, worn smooth at the rim, and worth five.

The moon-loaf cost three.

Most people would call that good news. The {hero} stood in front of the stall doing unhappy arithmetic. "Five for a three-coin loaf," muttered the {hero}. "That's losing two coins into thin air. I didn't learn to read coins just to throw two of them away."

Above the stall hung a small chalk-written sign the {hero} had never understood: "Change given, always." All week that sign had been an itch. Change? Change into what? Loaves into birds?

There was nothing for it but cleverness. The {hero}'s first plan was surgical: ask the baker to slice the coin into three fair pieces, the way you slice a loaf. The baker laughed so warmly that flour rose off her apron in a small cloud. "Coins don't slice, little {hero}. Not even for you."

The second plan was trade. Somewhere in this market, surely, someone would swap one five for three ones. The toy-seller turned out his pockets: whistles. The fruit-seller offered a large friendly button. The potter had two little coins but needed them for her own loaf tomorrow, which was fair, and said so.

The moon had one eyebrow over the edge of the world now. The loaf was cooling. {companion_name}, who had been watching all this from the blanket with the patience of a stone, said only: "Hmm. I don't think that sign is finished with you yet."

So the {hero} gave up — or thought so, which at the time felt like the same thing. Back to the stall, coin on the counter, chin up. "One moon-loaf, please. I know this coin is too much. Take it anyway. Some picnics are worth overpaying for."

The baker did not take it anyway. The baker took it exactly. She handed across the warm loaf, then opened the wooden till, and — watch her hands now, quick. Can you see it too? Two little coins, walking back across the counter, one and then the other. Chink, chink.

The {hero} looked at the coins, at the sign, at the coins again, and the whole week's itch scratched itself at once.

"You've given back the extra," said the {hero} slowly. "I paid five, the loaf cost three, and two came home. That is called change! The sign was never a riddle. It was a promise."

"Always has been," said the baker, dusting her hands.

And then the evening did the thing good evenings do: it turned out better than the plan. If either clever plan had worked, the {hero} would have paid three exact coins and walked away with bread and nothing else. Instead there were two coins back, and one of them bought a pat of honey-butter, which the failed plans could never have paid for. The last coin went deep into the pocket for another day.

The picnic was, by unanimous vote of everyone present, the best one yet. Warm bread, honey-butter melting into the swirl, the moon fully up and looking pleased with itself.

"{refrain}," said {companion_name}, quietly, the way it should be said.

As the market packed up behind them, the baker called across: "Come tomorrow! Tomorrow's loaf is a new shape — a secret one. I'll tell you this much: it's something that flies."

Something that flies. A bird? A kite? A question for the morning, and a good one to fall asleep on.

The lamps went out one by one. The blanket grew warmer. The {hero}'s eyes closed between one slow breath and the next.

{refrain}.`,
    scriptTemplate: `Picnic night came once a week, and {child_name} took it as seriously as some folk take birthdays. The spot was chosen days in advance: the mossy rise in {setting} where the moon shows up first, before it has finished combing its hair. By sunset the picnic blanket was spread, and the {object_motif} sat on one corner to keep the breeze from stealing it.

All that was missing was the middle of the picnic — the moon-loaf. Every evening the baker made exactly one: round, golden, with a swirl on top like a shell, and famous for three streets in every direction. Tonight it was still on the stall, sending its warm smell out over the market like an announcement.

{child_name} had one coin, and knew precisely what it was. Since the business with the box and the little sun, {child_name} read coins the way other people read signs. Name, face, edge. This one was small, worn smooth at the rim, and worth five.

The moon-loaf cost three.

Most people would call that good news. {child_name} stood in front of the stall doing unhappy arithmetic. "Five for a three-coin loaf," muttered {child_name}. "That's losing two coins into thin air. I didn't learn to read coins just to throw two of them away."

Above the stall hung a small chalk-written sign {child_name} had never understood: "Change given, always." All week that sign had been an itch. Change? Change into what? Loaves into birds?

There was nothing for it but cleverness. {child_name}'s first plan was surgical: ask the baker to slice the coin into three fair pieces, the way you slice a loaf. The baker laughed so warmly that flour rose off her apron in a small cloud. "Coins don't slice, little {hero}. Not even for you."

The second plan was trade. Somewhere in this market, surely, someone would swap one five for three ones. The toy-seller turned out his pockets: whistles. The fruit-seller offered a large friendly button. The potter had two little coins but needed them for her own loaf tomorrow, which was fair, and said so.

The moon had one eyebrow over the edge of the world now. The loaf was cooling. {companion_name}, who had been watching all this from the blanket with the patience of a stone, said only: "Hmm. I don't think that sign is finished with you yet."

So {child_name} gave up — or thought so, which at the time felt like the same thing. Back to the stall, coin on the counter, chin up. "One moon-loaf, please. I know this coin is too much. Take it anyway. Some picnics are worth overpaying for."

The baker did not take it anyway. The baker took it exactly. She handed across the warm loaf, then opened the wooden till, and — watch her hands now, quick. Can you see it too? Two little coins, walking back across the counter, one and then the other. Chink, chink.

{child_name} looked at the coins, at the sign, at the coins again, and the whole week's itch scratched itself at once.

"You've given back the extra," said {child_name} slowly. "I paid five, the loaf cost three, and two came home. That is called change! The sign was never a riddle. It was a promise."

"Always has been," said the baker, dusting her hands.

And then the evening did the thing good evenings do: it turned out better than the plan. If either clever plan had worked, {child_name} would have paid three exact coins and walked away with bread and nothing else. Instead there were two coins back, and one of them bought a pat of honey-butter, which the failed plans could never have paid for. The last coin went deep into the pocket for another day.

The picnic was, by unanimous vote of everyone present, the best one yet. Warm bread, honey-butter melting into the swirl, the moon fully up and looking pleased with itself.

"{refrain}," said {companion_name}, quietly, the way it should be said.

As the market packed up behind them, the baker called across: "Come tomorrow! Tomorrow's loaf is a new shape — a secret one. I'll tell you this much: it's something that flies."

Something that flies. A bird? A kite? A question for the morning, and a good one to fall asleep on.

The lamps went out one by one. The blanket grew warmer. {child_name}'s eyes closed between one slow breath and the next.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There are two kinds of plans: the kind you make, and the kind the evening makes for you. The {hero} did not know it yet, but tonight belonged to the second kind.

It was picnic night, the best-defended tradition in {setting}. The spot had been claimed since Tuesday — the mossy rise where the moon comes up first — and by sunset the picnic blanket was down, with the {object_motif} sitting on one corner so the breeze couldn't make off with it. {companion_name} lay in the middle of the blanket like the guest of honour, which, by long agreement, they were.

All that was missing was the middle of the picnic: the moon-loaf. The baker made exactly one each evening — round, golden, a swirl on top — and the rule of the market was simple: when it was gone, it was gone. Tonight it was not gone. Its smell drifted over the stalls like a rumour that happened to be true.

The {hero} had one coin and knew it completely. Since the business with the locked box and the little sun, coins had stopped being round mysteries; the {hero} read them — name, face, edge — the way sailors read weather. This one was small, worn silky at the rim, and worth five. The moon-loaf cost three.

Anyone else would have skipped to the stall. The {hero} stood still, doing arithmetic with a frown. Five paid for three received meant two coins gone, vanished, evaporated. It felt less like buying bread and more like being quietly robbed by mathematics. "I did not learn to read coins," said the {hero} with feeling, "in order to feed two of them to a bread stall."

There was also the sign. It had been bothering the {hero} for days: a small chalk-lettered board swinging above the stall. "Change given, always." Change. Change into what? It sounded half like a promise and half like a magic trick, and no one ever explained it.

The first plan was surgical. The {hero} presented the coin and asked, politely, whether the baker might slice it into three fair pieces, the way one slices a loaf. The baker laughed until flour lifted off her apron. "Coins don't slice, little {hero}. Not for kings, and not even for you."

The second plan was commerce. Somewhere in the market, someone would surely swap one five for three ones. The toy-seller had whistles and apologies. The fruit-seller offered a large, warm-hearted button. The potter genuinely had two small coins, and genuinely needed them, and the {hero} — who knew exactly what being saved-for felt like — could not argue with that.

The moon cleared the edge of the world. The loaf cooled from glorious to merely wonderful. {companion_name} watched the whole campaign from the blanket and offered, in total, one remark: "Hmm. I don't think that sign is finished with you yet."

Which is how the {hero} arrived back at the stall, out of plans, and laid the five-coin on the counter with the dignity of an honest surrender. "One moon-loaf, please. This coin is worth more than the loaf. I know it. Take it anyway — some picnics are worth overpaying for."

But the baker did not take it anyway. The baker took it exactly. The loaf came across, warm as a lantern, and then the till opened, and — watch her hands here, closely. Can you see it too? Two little coins, walking back over the counter, one and then the other. Chink, chink.

The {hero} stood absolutely still, and the sign, the till, the week-long itch, and the arithmetic all fell into one straight line.

"You gave back the difference," said the {hero} slowly. "Five in. Three for the loaf. Two home again. Nothing vanished at all — that is called change. The sign isn't a riddle. It's the whole deal, written small: pay more than it costs, and the rest comes back to you. It was never losing. It was a conversation, and the counter answers."

"Always has," said the baker, "to anyone who finishes the sentence."

Then came the part the {hero} would remember longest. The failed plans had been aiming at exactness: three coins, one loaf, nothing over. But the plan that failed into paying five had produced something the perfect plans never could — two coins back, and one of them, on a whim, became a pat of honey-butter, golden and melting, for the top of the loaf. The evening's plan, as it turned out, had simply been better than the {hero}'s. The last coin went deep into the pocket, already saving itself for something.

The picnic that followed set records that may still stand. Warm bread. Honey-butter in the swirl. The moon high and smug, as if the whole thing had been its idea.

"{refrain}," said {companion_name}, quietly, at the exact moment it was true.

Behind them the market folded itself away, and the baker called one last thing across the dark: "Tomorrow's loaf is a new shape — a secret one. I'll say only this: it's something that flies."

Something that flies. A gull? A kite? A dragonfly with excellent posture? The {hero} sorted the possibilities from likeliest to loveliest, and somewhere in the middle of the list, stopped needing to know until morning.

The lamps went out one by one. The night leaned back. The blanket held its warmth like bread holds its own.

{refrain}.`,
    scriptTemplate: `There are two kinds of plans: the kind you make, and the kind the evening makes for you. {child_name} did not know it yet, but tonight belonged to the second kind.

It was picnic night, the best-defended tradition in {setting}. The spot had been claimed since Tuesday — the mossy rise where the moon comes up first — and by sunset the picnic blanket was down, with the {object_motif} sitting on one corner so the breeze couldn't make off with it. {companion_name} lay in the middle of the blanket like the guest of honour, which, by long agreement, they were.

All that was missing was the middle of the picnic: the moon-loaf. The baker made exactly one each evening — round, golden, a swirl on top — and the rule of the market was simple: when it was gone, it was gone. Tonight it was not gone. Its smell drifted over the stalls like a rumour that happened to be true.

{child_name} had one coin and knew it completely. Since the business with the locked box and the little sun, coins had stopped being round mysteries; {child_name} read them — name, face, edge — the way sailors read weather. This one was small, worn silky at the rim, and worth five. The moon-loaf cost three.

Anyone else would have skipped to the stall. {child_name} stood still, doing arithmetic with a frown. Five paid for three received meant two coins gone, vanished, evaporated. It felt less like buying bread and more like being quietly robbed by mathematics. "I did not learn to read coins," said {child_name} with feeling, "in order to feed two of them to a bread stall."

There was also the sign. It had been bothering {child_name} for days: a small chalk-lettered board swinging above the stall. "Change given, always." Change. Change into what? It sounded half like a promise and half like a magic trick, and no one ever explained it.

The first plan was surgical. {child_name} presented the coin and asked, politely, whether the baker might slice it into three fair pieces, the way one slices a loaf. The baker laughed until flour lifted off her apron. "Coins don't slice, little {hero}. Not for kings, and not even for you."

The second plan was commerce. Somewhere in the market, someone would surely swap one five for three ones. The toy-seller had whistles and apologies. The fruit-seller offered a large, warm-hearted button. The potter genuinely had two small coins, and genuinely needed them, and {child_name} — who knew exactly what being saved-for felt like — could not argue with that.

The moon cleared the edge of the world. The loaf cooled from glorious to merely wonderful. {companion_name} watched the whole campaign from the blanket and offered, in total, one remark: "Hmm. I don't think that sign is finished with you yet."

Which is how {child_name} arrived back at the stall, out of plans, and laid the five-coin on the counter with the dignity of an honest surrender. "One moon-loaf, please. This coin is worth more than the loaf. I know it. Take it anyway — some picnics are worth overpaying for."

But the baker did not take it anyway. The baker took it exactly. The loaf came across, warm as a lantern, and then the till opened, and — watch her hands here, closely. Can you see it too? Two little coins, walking back over the counter, one and then the other. Chink, chink.

{child_name} stood absolutely still, and the sign, the till, the week-long itch, and the arithmetic all fell into one straight line.

"You gave back the difference," said {child_name} slowly. "Five in. Three for the loaf. Two home again. Nothing vanished at all — that is called change. The sign isn't a riddle. It's the whole deal, written small: pay more than it costs, and the rest comes back to you. It was never losing. It was a conversation, and the counter answers."

"Always has," said the baker, "to anyone who finishes the sentence."

Then came the part {child_name} would remember longest. The failed plans had been aiming at exactness: three coins, one loaf, nothing over. But the plan that failed into paying five had produced something the perfect plans never could — two coins back, and one of them, on a whim, became a pat of honey-butter, golden and melting, for the top of the loaf. The evening's plan, as it turned out, had simply been better than {child_name}'s. The last coin went deep into the pocket, already saving itself for something.

The picnic that followed set records that may still stand. Warm bread. Honey-butter in the swirl. The moon high and smug, as if the whole thing had been its idea.

"{refrain}," said {companion_name}, quietly, at the exact moment it was true.

Behind them the market folded itself away, and the baker called one last thing across the dark: "Tomorrow's loaf is a new shape — a secret one. I'll say only this: it's something that flies."

Something that flies. A gull? A kite? A dragonfly with excellent posture? {child_name} sorted the possibilities from likeliest to loveliest, and somewhere in the middle of the list, stopped needing to know until morning.

The lamps went out one by one. The night leaned back. The blanket held its warmth like bread holds its own.

{refrain}.`
  }
},
    callback: 'Some coins are worth more than they look (Level 2)', ageFloor: 4,
    audioTemplate: `Picnic night. The {hero} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} already sat on the blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, golden with a swirl on top, and tonight it was still there, filling the market with its warm smell.

The {hero} had one coin. It was small, but the {hero} had read its marks, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said the {hero}, "I lose two. That's just losing."

Above the stall hung a chalk sign: "Change given, always." The {hero} had puzzled over it all week. Change into what?

First plan: the {hero} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Second plan: swap one five for three ones. The toy-seller had only whistles. The fruit-seller offered a button. A nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

The {hero} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

The {hero} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

Here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into the {hero}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Tomorrow's loaf," called the baker, packing up, "is a new shape. A secret one. Something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

{refrain}.`,
    scriptTemplate: `Picnic night. {child_name} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} already sat on the blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, golden with a swirl on top, and tonight it was still there, filling the market with its warm smell.

{child_name} had one coin. It was small, but {child_name} had read its marks, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said {child_name}, "I lose two. That's just losing."

Above the stall hung a chalk sign: "Change given, always." {child_name} had puzzled over it all week. Change into what?

First plan: {child_name} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Second plan: swap one five for three ones. The toy-seller had only whistles. The fruit-seller offered a button. A nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

{child_name} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

{child_name} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

Here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into {child_name}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Tomorrow's loaf," called the baker, packing up, "is a new shape. A secret one. Something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

{refrain}.`,
  },
  {
    ordinal: 4, title: 'The Jar That Waited',
    concept: 'Saving small amounts over time leads to something bigger',
    summary: 'The moon-spyglass at the fair costs ten coins, and the hero has one. Their companion lends them a strange old jar that only opens when it is full — a jar no trick of pebbles or big stones can fool. Night by night, choice by choice, the hero fills it, and finds waiting under the coins a treasure older than any of them.',
    teachingNote: 'Delayed gratification is hardest to teach directly — this story makes a child feel the satisfaction of waiting, which is the whole lesson.',
    learningBeat: 'Saving is just choosing tomorrow over today',
    ageVariants: {
  '3-4': {
    audioTemplate: `The Moon Fair was coming to {setting}! At the fair was a moon-spyglass. It brings the moon close!

It cost ten coins. The {hero} had one.

{companion_name} brought out an old clay jar. "It opens only when it is full, little {hero}," they said. "I never filled it."

The {hero} tried a trick. Pebbles! In they went.

The lid stayed shut. "Pebbles are not coins," sighed the {hero}. "The jar knows."

In went a real coin. Plink! But the next day it came out — and became a sugar-fig. Yum. Empty jar.

Sweet fig today. No spyglass tomorrow.

Then the {hero} understood. "Saving is just choosing tomorrow over today!"

Now every day a coin went in. Plink! One. Two. Three... ten!

The lid opened all by itself, with a little sigh.

Look under the coins. Can you see it too? The {object_motif}! And a tiny note: "For the one who fills it."

"My teacher's treasure," whispered {companion_name}. "{refrain}."

At the fair, ten coins bought the spyglass. The moon came close as a friend. On its edge, one tiny sparkly dot. Name it tomorrow.

The {object_motif} went back in the jar, for the next saver.

Warm jar. Bright moon. Heavy eyes.

{refrain}.`,
    scriptTemplate: `The Moon Fair was coming to {setting}! At the fair was a moon-spyglass. It brings the moon close!

It cost ten coins. {child_name} had one.

{companion_name} brought out an old clay jar. "It opens only when it is full, little {hero}," they said. "I never filled it."

{child_name} tried a trick. Pebbles! In they went.

The lid stayed shut. "Pebbles are not coins," sighed {child_name}. "The jar knows."

In went a real coin. Plink! But the next day it came out — and became a sugar-fig. Yum. Empty jar.

Sweet fig today. No spyglass tomorrow.

Then {child_name} understood. "Saving is just choosing tomorrow over today!"

Now every day a coin went in. Plink! One. Two. Three... ten!

The lid opened all by itself, with a little sigh.

Look under the coins. Can you see it too? The {object_motif}! And a tiny note: "For the one who fills it."

"My teacher's treasure," whispered {companion_name}. "{refrain}."

At the fair, ten coins bought the spyglass. The moon came close as a friend. On its edge, one tiny sparkly dot. Name it tomorrow.

The {object_motif} went back in the jar, for the next saver.

Warm jar. Bright moon. Heavy eyes.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `When the moon was next full, the Moon Fair would come to {setting} — a night of lanterns and toffee smells. And on the finest stall: the moon-spyglass. Look through it, and the moon comes so close you can count its freckles.

The {hero} wanted to count those freckles more than anything. The spyglass cost ten coins. The {hero} had one.

That evening, {companion_name} brought down an old clay jar. Its lid was sealed smooth all the way round.

"This jar opens only when it is full, little {hero}," they said. "I never filled it."

A jar with a rule! That night, the {hero} tried to sneak around it. Ten round pebbles, coin-shaped and hopeful, went in.

The lid did not move. Of course not. The {hero} knew this lesson already: worth comes from what a thing is, not what it looks like. "Pebbles," the {hero} admitted, tipping them out. "The jar knows what things are."

The next day a real coin, earned at the market, went in. Plink!

But the day after, a sugar-fig smelled too sweet, and the coin came back out. The fig was delicious for exactly four bites. Then it was gone.

A week went by like that. Coin in, coin out. The jar stayed light as a whisper.

Then one evening, at the sweet stall, coin in hand, the {hero} stopped. A fig lasts four bites. The moon lasts every night, forever.

"Oh," said the {hero} slowly. "That's the whole trick. Saving is just choosing tomorrow over today."

Plink. And the next night, plink. Coin after coin, the jar grew heavier and, somehow, happier.

On the tenth night, the lid turned all by itself, with a soft old sigh.

Ten coins shone inside. And look right under them. Can you see it too? The {object_motif} — and a tiny note: "For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} went very quiet. "This belonged to the one who taught me to save," they whispered. "I never found it. You did. {refrain}."

At the fair, ten coins bought the spyglass. The moon leapt close, and yes — freckles. Hundreds. And on its bright edge, one tiny extra gleam with no name yet. Naming it could wait for tomorrow.

The {object_motif} went back into the empty jar, for the next one who fills it.

The music slowed. The lanterns dimmed. The {hero}'s eyes grew heavy, in the best way.

{refrain}.`,
    scriptTemplate: `When the moon was next full, the Moon Fair would come to {setting} — a night of lanterns and toffee smells. And on the finest stall: the moon-spyglass. Look through it, and the moon comes so close you can count its freckles.

{child_name} wanted to count those freckles more than anything. The spyglass cost ten coins. {child_name} had one.

That evening, {companion_name} brought down an old clay jar. Its lid was sealed smooth all the way round.

"This jar opens only when it is full, little {hero}," they said. "I never filled it."

A jar with a rule! That night, {child_name} tried to sneak around it. Ten round pebbles, coin-shaped and hopeful, went in.

The lid did not move. Of course not. {child_name} knew this lesson already: worth comes from what a thing is, not what it looks like. "Pebbles," {child_name} admitted, tipping them out. "The jar knows what things are."

The next day a real coin, earned at the market, went in. Plink!

But the day after, a sugar-fig smelled too sweet, and the coin came back out. The fig was delicious for exactly four bites. Then it was gone.

A week went by like that. Coin in, coin out. The jar stayed light as a whisper.

Then one evening, at the sweet stall, coin in hand, {child_name} stopped. A fig lasts four bites. The moon lasts every night, forever.

"Oh," said {child_name} slowly. "That's the whole trick. Saving is just choosing tomorrow over today."

Plink. And the next night, plink. Coin after coin, the jar grew heavier and, somehow, happier.

On the tenth night, the lid turned all by itself, with a soft old sigh.

Ten coins shone inside. And look right under them. Can you see it too? The {object_motif} — and a tiny note: "For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} went very quiet. "This belonged to the one who taught me to save," they whispered. "I never found it. You did. {refrain}."

At the fair, ten coins bought the spyglass. The moon leapt close, and yes — freckles. Hundreds. And on its bright edge, one tiny extra gleam with no name yet. Naming it could wait for tomorrow.

The {object_motif} went back into the empty jar, for the next one who fills it.

The music slowed. The lanterns dimmed. {child_name}'s eyes grew heavy, in the best way.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Everyone in {setting} agreed on two things about the Moon Fair. It came only when the moon was perfectly full — one night of lanterns and toffee smoke. And the best thing at it, every year, was the moon-spyglass: polished brass, so sharp that through it the moon stopped being a light and became a place. Mountains. Valleys. Freckles.

The {hero} had looked through it for one free second last year, before the stall-keeper wanted it back, and had thought about that second ever since.

The spyglass cost ten coins. The {hero} had exactly one.

That evening, {companion_name} climbed to the dustiest shelf in the house and came down with a clay jar, its lid sealed so smoothly it might have been born shut.

"This jar opens only when it is full, little {hero}," said {companion_name}. "That is its one rule. It was given to me when I was young. I never filled it."

A jar with a rule. The {hero} took this, immediately, as a challenge.

The first campaign was fought with pebbles. Ten of them, round, grey, quite coin-shaped, dropped in one by one. The lid did not so much as tremble. Then the {hero} remembered something learned at a trader's cart not so long ago: worth comes from what a thing is, not what it looks like. A coin-shaped pebble is a pebble with good posture.

"Fine," said the {hero}, tipping them out. "The jar knows what things are."

The second campaign was honest but leaky. A coin earned running market errands went in — plink, a lovely round sound — and the {hero} felt magnificent for a day. Then a sugar-fig happened. The coin came out, the fig went in, and was wonderful for four bites. The next coin lasted until a toffee-apple. The one after that fell to a paper windmill that broke by bedtime.

After a week of this the jar contained one coin and the faint, accusing smell of figs.

"It's a hungry sort of jar," said the {hero}, glumly.

"Mm," said {companion_name}, who had once filled exactly as much of it themselves.

The turn came on an ordinary evening, at the sweet stall, with the day's coin already halfway out of the {hero}'s pocket. The fig in the tray gleamed. And the {hero} suddenly thought: a fig is four bites long. The moon is every night long, for the rest of my life.

The coin stopped, turned around, and went home.

"That's the whole trick, isn't it," said the {hero}, dropping it into the jar. "It isn't about being good at coins. Saving is just choosing tomorrow over today."

Plink.

And after that, the strangest thing: it got easier. The second night, plink, was simpler than the first. The rainy-day coin went in still cold. Some nights the choosing pinched a little — toffee-apples do not stop existing just because you have a jar — but the jar grew heavier, and shaking it gently became the {hero}'s favourite bedtime music.

On the tenth night, the tenth coin dropped. Plink.

The lid turned by itself, slow as a sunrise, and opened with a soft old sigh — the sigh of something finally doing its only job.

Ten coins shone inside. But lean in past them, right at the bottom. Can you see it too? Something wrapped in a scrap of cloth. The {object_motif} — and under it a note, small and faded: "For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} sat down slowly. "This belonged to the one who taught me to save," they said at last. "They always told me there was a surprise at the bottom, and I always chose today, and I never found out. You found out. {refrain}."

The Moon Fair arrived with the full moon, and the ten coins became the moon-spyglass at last. The stall-keeper bowed a little, handing it over.

The moon leapt close. Mountains. Valleys. Freckles beyond counting. And there, right on the bright edge, one tiny extra gleam that had no name in any book at the fair.

"Tomorrow," said the {hero}, yawning. "We'll name it tomorrow."

Back home, the {object_motif} went softly into the empty jar, to wait for the next one who fills it. The jar went back to its shelf, lighter and prouder.

The fair music faded. The spyglass rested by the pillow, cool and patient.

Ten choosings. One moon. Fair trade.

{refrain}.`,
    scriptTemplate: `Everyone in {setting} agreed on two things about the Moon Fair. It came only when the moon was perfectly full — one night of lanterns and toffee smoke. And the best thing at it, every year, was the moon-spyglass: polished brass, so sharp that through it the moon stopped being a light and became a place. Mountains. Valleys. Freckles.

{child_name} had looked through it for one free second last year, before the stall-keeper wanted it back, and had thought about that second ever since.

The spyglass cost ten coins. {child_name} had exactly one.

That evening, {companion_name} climbed to the dustiest shelf in the house and came down with a clay jar, its lid sealed so smoothly it might have been born shut.

"This jar opens only when it is full, little {hero}," said {companion_name}. "That is its one rule. It was given to me when I was young. I never filled it."

A jar with a rule. {child_name} took this, immediately, as a challenge.

The first campaign was fought with pebbles. Ten of them, round, grey, quite coin-shaped, dropped in one by one. The lid did not so much as tremble. Then {child_name} remembered something learned at a trader's cart not so long ago: worth comes from what a thing is, not what it looks like. A coin-shaped pebble is a pebble with good posture.

"Fine," said {child_name}, tipping them out. "The jar knows what things are."

The second campaign was honest but leaky. A coin earned running market errands went in — plink, a lovely round sound — and {child_name} felt magnificent for a day. Then a sugar-fig happened. The coin came out, the fig went in, and was wonderful for four bites. The next coin lasted until a toffee-apple. The one after that fell to a paper windmill that broke by bedtime.

After a week of this the jar contained one coin and the faint, accusing smell of figs.

"It's a hungry sort of jar," said {child_name}, glumly.

"Mm," said {companion_name}, who had once filled exactly as much of it themselves.

The turn came on an ordinary evening, at the sweet stall, with the day's coin already halfway out of {child_name}'s pocket. The fig in the tray gleamed. And {child_name} suddenly thought: a fig is four bites long. The moon is every night long, for the rest of my life.

The coin stopped, turned around, and went home.

"That's the whole trick, isn't it," said {child_name}, dropping it into the jar. "It isn't about being good at coins. Saving is just choosing tomorrow over today."

Plink.

And after that, the strangest thing: it got easier. The second night, plink, was simpler than the first. The rainy-day coin went in still cold. Some nights the choosing pinched a little — toffee-apples do not stop existing just because you have a jar — but the jar grew heavier, and shaking it gently became {child_name}'s favourite bedtime music.

On the tenth night, the tenth coin dropped. Plink.

The lid turned by itself, slow as a sunrise, and opened with a soft old sigh — the sigh of something finally doing its only job.

Ten coins shone inside. But lean in past them, right at the bottom. Can you see it too? Something wrapped in a scrap of cloth. The {object_motif} — and under it a note, small and faded: "For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} sat down slowly. "This belonged to the one who taught me to save," they said at last. "They always told me there was a surprise at the bottom, and I always chose today, and I never found out. You found out. {refrain}."

The Moon Fair arrived with the full moon, and the ten coins became the moon-spyglass at last. The stall-keeper bowed a little, handing it over.

The moon leapt close. Mountains. Valleys. Freckles beyond counting. And there, right on the bright edge, one tiny extra gleam that had no name in any book at the fair.

"Tomorrow," said {child_name}, yawning. "We'll name it tomorrow."

Back home, the {object_motif} went softly into the empty jar, to wait for the next one who fills it. The jar went back to its shelf, lighter and prouder.

The fair music faded. The spyglass rested by the pillow, cool and patient.

Ten choosings. One moon. Fair trade.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The trouble with the moon-spyglass was that the {hero} had already looked through it once.

Last year, at the Moon Fair, the stall-keeper had allowed one free second — a single blink of brass and glass — and in that second the moon had stopped being a light and become a place. Mountains with shadows. Seas with shores. A whole silver country, hanging up there every night, unvisited. The stall-keeper had taken the spyglass back gently, the way you take something from someone who has just fallen in love with it.

Now the fair was coming back to {setting}, when the moon came round to full. The spyglass cost ten coins. The {hero} had one.

It was {companion_name} who changed the mathematics. That evening they climbed to the dustiest shelf in the house — the shelf where things live when they are done being tried — and came down with a clay jar, its lid sealed so smoothly it might have been born shut.

"It has one rule, little {hero}," said {companion_name}. "It opens when it is full, and not one moment before. It was given to me when I was about your age. I never filled it."

"What's inside?"

"That," said {companion_name}, "was always the question."

A jar with a rule and a question in it. The {hero} accepted the challenge before knowing it was one.

The first attempt was, frankly, cheating. Ten pebbles, round and grey, chosen for their coin-like manners, dropped in one after another. The lid did not tremble. The {hero} was not even surprised — a certain trader's cart had taught this lesson already. Worth comes from what a thing is, not what it looks like. A coin-shaped pebble is a pebble putting on airs.

"The jar knows what things are," the {hero} admitted, tipping the impostors out. It was an unsettling quality in a jar.

The second attempt was honest, and it leaked. A coin earned running errands went in with a satisfying plink — and came out again two days later, when a sugar-fig smelled like a small warm sunset. The fig was perfect for four bites. Then it was over. The next coin surrendered to a toffee-apple; the one after that to a paper windmill, broken by bedtime.

At the end of a full week, the {hero} shook the jar and heard one lonely coin and, somehow, the smell of figs.

"Mm," said {companion_name}, from the doorway. They had, after all, once filled the jar exactly this far themselves.

What changed everything was not a speech. It was an ordinary evening at the sweet stall, the day's coin already halfway out of the pocket, the fig gleaming in its tray. And the {hero} did a small piece of arithmetic that no one had ever assigned: a fig is four bites long. The spyglass is every night long. The moon would still be there when the fig was forgotten — and the fig would be forgotten by Thursday.

The coin stopped. Turned. Went home.

"That's the entire trick," the {hero} said out loud, dropping it in. "Nobody tells you because it sounds too small to be the answer. Saving is just choosing tomorrow over today."

Plink.

After that it was not easy, but it was simple, and those turn out to be different things. One night the choosing pinched hard — there was a caramel situation — and the {hero} stood outside the sweet stall for a long minute, then walked home and paid tomorrow instead. The jar grew heavier. Shaking it softly became the last sound of every day.

On the tenth night, the tenth coin fell. Plink.

And the lid turned. By itself, slow as a sunrise, with a long sigh of old air — the sound of something finishing a sentence it had started a lifetime ago.

Ten coins shone inside. But past them, at the very bottom, wrapped in a scrap of sailcloth — lean close, can you see it too? — lay the {object_motif}, and beneath it a note in small, faded ink:

"For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} sat down, slowly, the way you sit when a question from your childhood finally answers itself. "They told me there was a surprise at the bottom," they said. "I chose today, and then today, and then today, and I never found out. You found out for both of us. {refrain}."

The Moon Fair came in on the full moon like a bright ship. The ten coins became the moon-spyglass at last; the stall-keeper, who remembered last year's one free second, gave a small bow with it.

The moon leapt close. The silver country was all still there — mountains, shadowed valleys, seas without water — and on its bright edge, one tiny gleam that appeared on no chart at the fair. It needed a name, and names, they agreed, are morning work.

At home, the {object_motif} went back to the bottom of the empty jar — for the next one who fills it — and the jar went back to its shelf, no longer a thing that was done being tried.

The fair music thinned to one far fiddle, then to none. The spyglass lay by the pillow, cool and patient, holding the moon for the morning.

Ten choosings. One silver country. A fair trade, fairly won.

{refrain}.`,
    scriptTemplate: `The trouble with the moon-spyglass was that {child_name} had already looked through it once.

Last year, at the Moon Fair, the stall-keeper had allowed one free second — a single blink of brass and glass — and in that second the moon had stopped being a light and become a place. Mountains with shadows. Seas with shores. A whole silver country, hanging up there every night, unvisited. The stall-keeper had taken the spyglass back gently, the way you take something from someone who has just fallen in love with it.

Now the fair was coming back to {setting}, when the moon came round to full. The spyglass cost ten coins. {child_name} had one.

It was {companion_name} who changed the mathematics. That evening they climbed to the dustiest shelf in the house — the shelf where things live when they are done being tried — and came down with a clay jar, its lid sealed so smoothly it might have been born shut.

"It has one rule, little {hero}," said {companion_name}. "It opens when it is full, and not one moment before. It was given to me when I was about your age. I never filled it."

"What's inside?"

"That," said {companion_name}, "was always the question."

A jar with a rule and a question in it. {child_name} accepted the challenge before knowing it was one.

The first attempt was, frankly, cheating. Ten pebbles, round and grey, chosen for their coin-like manners, dropped in one after another. The lid did not tremble. {child_name} was not even surprised — a certain trader's cart had taught this lesson already. Worth comes from what a thing is, not what it looks like. A coin-shaped pebble is a pebble putting on airs.

"The jar knows what things are," {child_name} admitted, tipping the impostors out. It was an unsettling quality in a jar.

The second attempt was honest, and it leaked. A coin earned running errands went in with a satisfying plink — and came out again two days later, when a sugar-fig smelled like a small warm sunset. The fig was perfect for four bites. Then it was over. The next coin surrendered to a toffee-apple; the one after that to a paper windmill, broken by bedtime.

At the end of a full week, {child_name} shook the jar and heard one lonely coin and, somehow, the smell of figs.

"Mm," said {companion_name}, from the doorway. They had, after all, once filled the jar exactly this far themselves.

What changed everything was not a speech. It was an ordinary evening at the sweet stall, the day's coin already halfway out of the pocket, the fig gleaming in its tray. And {child_name} did a small piece of arithmetic that no one had ever assigned: a fig is four bites long. The spyglass is every night long. The moon would still be there when the fig was forgotten — and the fig would be forgotten by Thursday.

The coin stopped. Turned. Went home.

"That's the entire trick," {child_name} said out loud, dropping it in. "Nobody tells you because it sounds too small to be the answer. Saving is just choosing tomorrow over today."

Plink.

After that it was not easy, but it was simple, and those turn out to be different things. One night the choosing pinched hard — there was a caramel situation — and {child_name} stood outside the sweet stall for a long minute, then walked home and paid tomorrow instead. The jar grew heavier. Shaking it softly became the last sound of every day.

On the tenth night, the tenth coin fell. Plink.

And the lid turned. By itself, slow as a sunrise, with a long sigh of old air — the sound of something finishing a sentence it had started a lifetime ago.

Ten coins shone inside. But past them, at the very bottom, wrapped in a scrap of sailcloth — lean close, can you see it too? — lay the {object_motif}, and beneath it a note in small, faded ink:

"For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} sat down, slowly, the way you sit when a question from your childhood finally answers itself. "They told me there was a surprise at the bottom," they said. "I chose today, and then today, and then today, and I never found out. You found out for both of us. {refrain}."

The Moon Fair came in on the full moon like a bright ship. The ten coins became the moon-spyglass at last; the stall-keeper, who remembered last year's one free second, gave a small bow with it.

The moon leapt close. The silver country was all still there — mountains, shadowed valleys, seas without water — and on its bright edge, one tiny gleam that appeared on no chart at the fair. It needed a name, and names, they agreed, are morning work.

At home, the {object_motif} went back to the bottom of the empty jar — for the next one who fills it — and the jar went back to its shelf, no longer a thing that was done being tried.

The fair music thinned to one far fiddle, then to none. The spyglass lay by the pillow, cool and patient, holding the moon for the morning.

Ten choosings. One silver country. A fair trade, fairly won.

{refrain}.`
  }
},
    callback: "A coin's value and its size are different things (Level 2)", ageFloor: 4,
    audioTemplate: `When the moon was next full, the Moon Fair would come to {setting} — a night of lanterns and toffee smells. And on the finest stall: the moon-spyglass. Look through it, and the moon comes so close you can count its freckles.

The {hero} wanted to count those freckles more than anything. The spyglass cost ten coins. The {hero} had one.

That evening, {companion_name} brought down an old clay jar. Its lid was sealed smooth all the way round.

"This jar opens only when it is full, little {hero}," they said. "I never filled it."

A jar with a rule! That night, the {hero} tried to sneak around it. Ten round pebbles, coin-shaped and hopeful, went in.

The lid did not move. Of course not. The {hero} knew this lesson already: worth comes from what a thing is, not what it looks like. "Pebbles," the {hero} admitted, tipping them out. "The jar knows what things are."

The next day a real coin, earned at the market, went in. Plink!

But the day after, a sugar-fig smelled too sweet, and the coin came back out. The fig was delicious for exactly four bites. Then it was gone.

A week went by like that. Coin in, coin out. The jar stayed light as a whisper.

Then one evening, at the sweet stall, coin in hand, the {hero} stopped. A fig lasts four bites. The moon lasts every night, forever.

"Oh," said the {hero} slowly. "That's the whole trick. Saving is just choosing tomorrow over today."

Plink. And the next night, plink. Coin after coin, the jar grew heavier and, somehow, happier.

On the tenth night, the lid turned all by itself, with a soft old sigh.

Ten coins shone inside. And look right under them. Can you see it too? The {object_motif} — and a tiny note: "For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} went very quiet. "This belonged to the one who taught me to save," they whispered. "I never found it. You did. {refrain}."

At the fair, ten coins bought the spyglass. The moon leapt close, and yes — freckles. Hundreds. And on its bright edge, one tiny extra gleam with no name yet. Naming it could wait for tomorrow.

The {object_motif} went back into the empty jar, for the next one who fills it.

The music slowed. The lanterns dimmed. The {hero}'s eyes grew heavy, in the best way.

{refrain}.`,
    scriptTemplate: `When the moon was next full, the Moon Fair would come to {setting} — a night of lanterns and toffee smells. And on the finest stall: the moon-spyglass. Look through it, and the moon comes so close you can count its freckles.

{child_name} wanted to count those freckles more than anything. The spyglass cost ten coins. {child_name} had one.

That evening, {companion_name} brought down an old clay jar. Its lid was sealed smooth all the way round.

"This jar opens only when it is full, little {hero}," they said. "I never filled it."

A jar with a rule! That night, {child_name} tried to sneak around it. Ten round pebbles, coin-shaped and hopeful, went in.

The lid did not move. Of course not. {child_name} knew this lesson already: worth comes from what a thing is, not what it looks like. "Pebbles," {child_name} admitted, tipping them out. "The jar knows what things are."

The next day a real coin, earned at the market, went in. Plink!

But the day after, a sugar-fig smelled too sweet, and the coin came back out. The fig was delicious for exactly four bites. Then it was gone.

A week went by like that. Coin in, coin out. The jar stayed light as a whisper.

Then one evening, at the sweet stall, coin in hand, {child_name} stopped. A fig lasts four bites. The moon lasts every night, forever.

"Oh," said {child_name} slowly. "That's the whole trick. Saving is just choosing tomorrow over today."

Plink. And the next night, plink. Coin after coin, the jar grew heavier and, somehow, happier.

On the tenth night, the lid turned all by itself, with a soft old sigh.

Ten coins shone inside. And look right under them. Can you see it too? The {object_motif} — and a tiny note: "For the one who fills it. A jar like this never kept coins. It keeps choosings."

{companion_name} went very quiet. "This belonged to the one who taught me to save," they whispered. "I never found it. You did. {refrain}."

At the fair, ten coins bought the spyglass. The moon leapt close, and yes — freckles. Hundreds. And on its bright edge, one tiny extra gleam with no name yet. Naming it could wait for tomorrow.

The {object_motif} went back into the empty jar, for the next one who fills it.

The music slowed. The lanterns dimmed. {child_name}'s eyes grew heavy, in the best way.

{refrain}.`,
  },
  {
    ordinal: 5, title: 'The Helper Who Needed Help',
    concept: 'Some things we need; some we want. Knowing the difference is a skill.',
    summary: "The hero has saved for the humming top, and tonight is the night — but their companion, who always knows everything, is hiding behind their door and sighing. The secret: enough coins for either the scarf they have dreamed of all year or the creaky door that lets the cold in, and no idea how to choose. This time it is the hero who knows the way through.",
    teachingNote: 'This level is the capstone: a child who can distinguish wants from needs has every concept from the path — identification, value, exchange, saving — working together in a real decision.',
    learningBeat: 'Wanting things is not wrong',
    ageVariants: {
  '3-4': {
    audioTemplate: `Market night in {setting}! The {hero} had saved coin after coin. Tonight there was enough for the humming top!

But where was {companion_name}?

Shut inside their little house. Through the door came big, sad sighs.

The {hero} told a joke through the door. No laugh. Just sighs.

Peek through the crack. Can you see it too? A little drawing of a scarf.

The door opened. Creak! What a creaky, drafty door!

"I have twelve coins," said {companion_name}. "I need to mend my door before the cold. But I want the scarf with the {object_motif} pattern. Silly old me."

"Wanting things is not wrong!" said the {hero}. "But which one keeps you warm and safe? The door! The scarf comes next, coin by coin."

So the door was mended. Creak? No creak. Not one.

They started a scarf jar. One coin in now. Two after market day.

Then the {hero} bought the humming top. It spun and hummed, slower and slower.

"When did you grow so wise, little {hero}?" smiled {companion_name}. "{refrain}."

The top stopped. The night hummed on, soft and low.

By winter the jar will be full. Warm scarf. Snug door. Good things coming.

{refrain}.`,
    scriptTemplate: `Market night in {setting}! {child_name} had saved coin after coin. Tonight there was enough for the humming top!

But where was {companion_name}?

Shut inside their little house. Through the door came big, sad sighs.

{child_name} told a joke through the door. No laugh. Just sighs.

Peek through the crack. Can you see it too? A little drawing of a scarf.

The door opened. Creak! What a creaky, drafty door!

"I have twelve coins," said {companion_name}. "I need to mend my door before the cold. But I want the scarf with the {object_motif} pattern. Silly old me."

"Wanting things is not wrong!" said {child_name}. "But which one keeps you warm and safe? The door! The scarf comes next, coin by coin."

So the door was mended. Creak? No creak. Not one.

They started a scarf jar. One coin in now. Two after market day.

Then {child_name} bought the humming top. It spun and hummed, slower and slower.

"When did you grow so wise, little {hero}?" smiled {companion_name}. "{refrain}."

The top stopped. The night hummed on, soft and low.

By winter the jar will be full. Warm scarf. Snug door. Good things coming.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Market night in {setting}, and the {hero} was rich. Top-rich. Coin by coin, the {hero} had saved a jarful, and tonight it was finally enough for the humming top: the one that spun and sang a low, wobbly song.

Only one thing was missing: {companion_name}.

{companion_name}, who always knew everything, had not come out of their little house all day. Through the door came the slow chink of counted coins, a sigh, then counting again.

The {hero} tried the usual medicine. A joke through the door — the moon-with-hiccups one. Silence. A honey-fig pushed underneath. It got stuck halfway. The counting just started over.

Then the {hero} peeked through the crack. Lean close. Can you see it too? A little drawing of a scarf, folded small from much unfolding.

The door opened at last. Creak! A long, cold, drafty creak.

"Twelve coins," said {companion_name} quietly. "I need to mend this door before the cold nights come. But there is a scarf at the market — woolly, with a {object_motif} pattern. I have wanted it all year. Wise old me, wanting a scarf. It's foolish."

The one who always helped was stuck.

The {hero} found the exact right piece. "Wanting things is not wrong," said the {hero}. "Wanting is allowed. Here's the trick: which one keeps you warm and safe this month?"

{companion_name} looked at the door. "That one," they admitted. "The door. It's a need."

"Then the door comes first. And the scarf isn't lost — it's just later! We'll start a scarf jar and fill it coin by coin. Saving works. You watched me learn it."

So the door was mended that evening. They swung it to test it. The door said nothing at all.

The scarf jar went up on the sill, and the {hero} dropped in the first coin as a gift.

And because the {hero}'s tummy was full and the {hero}'s door didn't creak, the humming top was a happy want. The {hero} bought it with open eyes.

The top spun and sang its low, wobbly song, slower and slower, while the lamps went out across the market.

"When did you grow so wise, little {hero}?" said {companion_name}. "{refrain}."

The top wobbled, and settled, and stopped.

On the sill, the scarf jar held one coin. Two after market day. By the first cold moon it would be full — and the best part of the scarf story would arrive with winter.

{refrain}.`,
    scriptTemplate: `Market night in {setting}, and {child_name} was rich. Top-rich. Coin by coin, {child_name} had saved a jarful, and tonight it was finally enough for the humming top: the one that spun and sang a low, wobbly song.

Only one thing was missing: {companion_name}.

{companion_name}, who always knew everything, had not come out of their little house all day. Through the door came the slow chink of counted coins, a sigh, then counting again.

{child_name} tried the usual medicine. A joke through the door — the moon-with-hiccups one. Silence. A honey-fig pushed underneath. It got stuck halfway. The counting just started over.

Then {child_name} peeked through the crack. Lean close. Can you see it too? A little drawing of a scarf, folded small from much unfolding.

The door opened at last. Creak! A long, cold, drafty creak.

"Twelve coins," said {companion_name} quietly. "I need to mend this door before the cold nights come. But there is a scarf at the market — woolly, with a {object_motif} pattern. I have wanted it all year. Wise old me, wanting a scarf. It's foolish."

The one who always helped was stuck.

{child_name} found the exact right piece. "Wanting things is not wrong," said {child_name}. "Wanting is allowed. Here's the trick: which one keeps you warm and safe this month?"

{companion_name} looked at the door. "That one," they admitted. "The door. It's a need."

"Then the door comes first. And the scarf isn't lost — it's just later! We'll start a scarf jar and fill it coin by coin. Saving works. You watched me learn it."

So the door was mended that evening. They swung it to test it. The door said nothing at all.

The scarf jar went up on the sill, and {child_name} dropped in the first coin as a gift.

And because {child_name}'s tummy was full and {child_name}'s door didn't creak, the humming top was a happy want. {child_name} bought it with open eyes.

The top spun and sang its low, wobbly song, slower and slower, while the lamps went out across the market.

"When did you grow so wise, little {hero}?" said {companion_name}. "{refrain}."

The top wobbled, and settled, and stopped.

On the sill, the scarf jar held one coin. Two after market day. By the first cold moon it would be full — and the best part of the scarf story would arrive with winter.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `{companion_name} had helped the {hero} out of a hundred corners. It was {companion_name} who had hummed at the locked box, {companion_name} who had nodded at the baker's sign, {companion_name} who had fetched down the stubborn jar. Helping was simply what they did, the way lamps glow.

Which is why market night felt wrong from the start.

Lanterns were going up all over {setting}, stalls unfolding, and in the {hero}'s pocket sat a jarful of savings, gathered coin by coin the way the old jar had taught. Tonight they were for the humming top: the one that spun on its point and sang a low, wobbly song until it fell over. The {hero} was nearly bursting with it.

But {companion_name} had not come out of their little house all day. From behind the door came the slow chink of coins being counted. Then a sigh. Then the counting started over, as if the coins might add up differently the fourth time.

The {hero} deployed the usual medicine. The joke about the moon with hiccups, through the keyhole: nothing. A honey-fig, pushed under as emergency supplies: it got stuck halfway and sat there awkwardly.

{companion_name} fixed things. {companion_name} did not need fixing.

The {hero} leaned close to the door crack. Look through it, just there. Can you see it too? A small drawing of a scarf, folded soft from much unfolding, smoothed out like something precious.

At last, the door opened. Creak — a long, cold, drafty creak, the kind a door makes when it is apologising for the wind it lets in.

"Twelve coins," said {companion_name}, without even a hello. "That is everything I have, counted four times. This door must be mended before the cold nights; that is plain. But the weaver's stall has a scarf — woolly, deep green, with a {object_motif} pattern along the ends. I have wanted it all year. All year!" They laughed, but it came out crooked. "Wanting a scarf, at my age. It's foolish, and I can't stop, and I don't know what to do."

And there it was, the strangest sight of the whole path: the one who always knew, not knowing. The helper, needing help.

The {hero} stood very still. Then all the learning lined up like coins in a row, and the right piece came forward on its own.

"Wanting things is not wrong," said the {hero}. "It isn't foolish and it isn't small. Everyone wants things — I want the humming top so much my teeth hum. The trick isn't to stop wanting. The trick is one question: which one keeps you warm and safe this month?"

{companion_name} was quiet for a moment. "The door," they said at last. "The door is a need. The scarf is a want."

"Then the door goes first," said the {hero}. "And the scarf isn't lost — it's just later. We'll put a scarf jar on your sill and fill it coin by coin. Saving isn't magic, you know. You watched me do it with the spyglass. Ten plinks and a moon."

So that evening the mender came, and the twelve coins did their proper work, and the door was hung snug and true. They swung it to test it — and the door said nothing at all, which from that door was a speech.

The scarf jar went up on the sill. The {hero} dropped in the first coin as a gift, and it rang against the glass like a small promise.

And then, at last, the humming top. The {hero} paused at the stall — checked, honestly: warm? Fed? Door quiet? All yes. A want, then, chosen with open eyes, which is the happiest kind of buying there is.

They walked home under the lanterns, and the top spun on the table while the market packed up outside, singing its low, wobbly song, slower and slower.

"When did you grow so wise, little {hero}?" murmured {companion_name}, watching it turn. "{refrain}."

The top wobbled, bowed, and lay down.

On the sill, the scarf jar held one coin and a whole plan. Two coins after market day. Full by the first cold moon — and then the best chapter of the scarf story would arrive with the winter.

The lamps went out, one street at a time. The door held the cold outside, where it belonged.

{refrain}.`,
    scriptTemplate: `{companion_name} had helped {child_name} out of a hundred corners. It was {companion_name} who had hummed at the locked box, {companion_name} who had nodded at the baker's sign, {companion_name} who had fetched down the stubborn jar. Helping was simply what they did, the way lamps glow.

Which is why market night felt wrong from the start.

Lanterns were going up all over {setting}, stalls unfolding, and in {child_name}'s pocket sat a jarful of savings, gathered coin by coin the way the old jar had taught. Tonight they were for the humming top: the one that spun on its point and sang a low, wobbly song until it fell over. {child_name} was nearly bursting with it.

But {companion_name} had not come out of their little house all day. From behind the door came the slow chink of coins being counted. Then a sigh. Then the counting started over, as if the coins might add up differently the fourth time.

{child_name} deployed the usual medicine. The joke about the moon with hiccups, through the keyhole: nothing. A honey-fig, pushed under as emergency supplies: it got stuck halfway and sat there awkwardly.

{companion_name} fixed things. {companion_name} did not need fixing.

{child_name} leaned close to the door crack. Look through it, just there. Can you see it too? A small drawing of a scarf, folded soft from much unfolding, smoothed out like something precious.

At last, the door opened. Creak — a long, cold, drafty creak, the kind a door makes when it is apologising for the wind it lets in.

"Twelve coins," said {companion_name}, without even a hello. "That is everything I have, counted four times. This door must be mended before the cold nights; that is plain. But the weaver's stall has a scarf — woolly, deep green, with a {object_motif} pattern along the ends. I have wanted it all year. All year!" They laughed, but it came out crooked. "Wanting a scarf, at my age. It's foolish, and I can't stop, and I don't know what to do."

And there it was, the strangest sight of the whole path: the one who always knew, not knowing. The helper, needing help.

{child_name} stood very still. Then all the learning lined up like coins in a row, and the right piece came forward on its own.

"Wanting things is not wrong," said {child_name}. "It isn't foolish and it isn't small. Everyone wants things — I want the humming top so much my teeth hum. The trick isn't to stop wanting. The trick is one question: which one keeps you warm and safe this month?"

{companion_name} was quiet for a moment. "The door," they said at last. "The door is a need. The scarf is a want."

"Then the door goes first," said {child_name}. "And the scarf isn't lost — it's just later. We'll put a scarf jar on your sill and fill it coin by coin. Saving isn't magic, you know. You watched me do it with the spyglass. Ten plinks and a moon."

So that evening the mender came, and the twelve coins did their proper work, and the door was hung snug and true. They swung it to test it — and the door said nothing at all, which from that door was a speech.

The scarf jar went up on the sill. {child_name} dropped in the first coin as a gift, and it rang against the glass like a small promise.

And then, at last, the humming top. {child_name} paused at the stall — checked, honestly: warm? Fed? Door quiet? All yes. A want, then, chosen with open eyes, which is the happiest kind of buying there is.

They walked home under the lanterns, and the top spun on the table while the market packed up outside, singing its low, wobbly song, slower and slower.

"When did you grow so wise, little {hero}?" murmured {companion_name}, watching it turn. "{refrain}."

The top wobbled, bowed, and lay down.

On the sill, the scarf jar held one coin and a whole plan. Two coins after market day. Full by the first cold moon — and then the best chapter of the scarf story would arrive with the winter.

The lamps went out, one street at a time. The door held the cold outside, where it belonged.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `Every story the {hero} could tell about money had {companion_name} standing quietly in the corner of it. The locked box, the little sun, the baker's sign, the stubborn jar — every time, it was {companion_name} who hummed at the right moment and let the {hero} find the answer alone. Helping without helping. Their whole art.

Which is why this particular market night began so strangely.

The lanterns were going up all over {setting}. The {hero} arrived at {companion_name}'s little house top-rich — a jarful of savings in one pocket, gathered coin by coin the way the old jar had taught, earmarked for the humming top, the one that spun on its point and sang a low, wobbly song until it toppled. Tonight was the night.

But the door stayed shut. From behind it came the slow chink of coins being counted. A pause. A sigh, deep enough to sail on. Then the counting began again, as though twelve coins might agree to become twenty if approached politely.

The {hero} tried the standard remedies. The joke about the moon with hiccups, through the keyhole: silence. The backwards-river one: silence. A honey-fig slid under the door as humanitarian aid: it jammed halfway and stayed there, a small embarrassed flag.

Something was truly wrong. It had never once been this way around.

Lean close to the door crack, just there. Can you see it too? On the table inside: a small drawing of a scarf, folded soft from much unfolding, smoothed flat like something that gets looked at every night and shown to no one.

The door opened at last. Creak — a long, cold, drafty creak, the sound of a door that has been letting winter in for years and knows it.

"Twelve coins," said {companion_name}, skipping hello entirely. "Everything I have. Counted four times, in case counting was the problem. The door must be mended before the cold nights come — twelve coins, the mender says. But the weaver's stall has a scarf. Woolly. Deep green. A {object_motif} pattern along the ends." They stopped, and then said the true thing. "I have wanted it all year. I walk past it slowly on purpose. Wise old me — wanting a scarf like a youngster wants a toy. It is foolish, and I cannot make it stop, and I am ashamed of it, and now you know."

The {hero} stood in the doorway and felt the world tilt gently on its axis. The helper, stuck. The teacher, waiting for the student.

And everything the path had taught came forward at once, and the {hero} knew exactly which piece went first.

"Wanting things is not wrong," said the {hero}, and said it like a fact, not a comfort. "It isn't foolish, and it isn't childish, and it doesn't stop being true just because you're wise. I want the humming top so badly my teeth hum. Wanting is allowed. The skill isn't to stop wanting — it's to tell your wants from your needs and let the needs go first. So: which of the two keeps you warm and safe this month?"

Silence. Then, slowly, the eyebrows the {hero} knew so well unknotted themselves.

"The door," said {companion_name}. "The door is a need. The scarf is a want. I have been standing all week in front of two piles, calling them the same thing."

"They were never the same thing," said the {hero}. "And the want isn't lost. It's just later. We start a scarf jar tonight, and it fills coin by coin. Saving is not a mystery, you know. You stood right there while I learned it. Ten plinks and a moon."

The mender came that evening, and the twelve coins did honest work, and the door was hung snug and true. They swung it to test it — and it said nothing at all, which from that particular door amounted to a formal apology.

The scarf jar took its place on the sill, and the {hero} dropped in the first coin as a gift. It rang softly against the glass, the sound of a plan beginning.

Then, at last, the toymaker's stall. The {hero} paused before paying — ran the check honestly, because skills you only use on other people aren't skills yet. Fed? Yes. Warm? Yes. Door quiet, jar begun? Yes. A want, then — an allowed one. The {hero} bought the humming top with open eyes, which is the happiest kind of buying there is.

They sat together in the mended house while the market folded up outside, and the top spun on the table, singing its low, wobbly song. It slowed the way evenings slow. Nobody hurried it.

"When did you grow so wise, little {hero}?" said {companion_name}, watching it turn. "{refrain}."

The top wobbled, bowed like a tiny performer, and lay down.

On the sill, the scarf jar held one coin and a whole plan. Two coins after market day. Full by the first cold moon. And then would come the best chapter of the scarf story — the winter one, where the helper who spent a lifetime warming everyone else finally gets handed something warm.

The lamps went out street by street. The new door held the cold exactly where it belonged.

{refrain}.`,
    scriptTemplate: `Every story {child_name} could tell about money had {companion_name} standing quietly in the corner of it. The locked box, the little sun, the baker's sign, the stubborn jar — every time, it was {companion_name} who hummed at the right moment and let {child_name} find the answer alone. Helping without helping. Their whole art.

Which is why this particular market night began so strangely.

The lanterns were going up all over {setting}. {child_name} arrived at {companion_name}'s little house top-rich — a jarful of savings in one pocket, gathered coin by coin the way the old jar had taught, earmarked for the humming top, the one that spun on its point and sang a low, wobbly song until it toppled. Tonight was the night.

But the door stayed shut. From behind it came the slow chink of coins being counted. A pause. A sigh, deep enough to sail on. Then the counting began again, as though twelve coins might agree to become twenty if approached politely.

{child_name} tried the standard remedies. The joke about the moon with hiccups, through the keyhole: silence. The backwards-river one: silence. A honey-fig slid under the door as humanitarian aid: it jammed halfway and stayed there, a small embarrassed flag.

Something was truly wrong. It had never once been this way around.

Lean close to the door crack, just there. Can you see it too? On the table inside: a small drawing of a scarf, folded soft from much unfolding, smoothed flat like something that gets looked at every night and shown to no one.

The door opened at last. Creak — a long, cold, drafty creak, the sound of a door that has been letting winter in for years and knows it.

"Twelve coins," said {companion_name}, skipping hello entirely. "Everything I have. Counted four times, in case counting was the problem. The door must be mended before the cold nights come — twelve coins, the mender says. But the weaver's stall has a scarf. Woolly. Deep green. A {object_motif} pattern along the ends." They stopped, and then said the true thing. "I have wanted it all year. I walk past it slowly on purpose. Wise old me — wanting a scarf like a youngster wants a toy. It is foolish, and I cannot make it stop, and I am ashamed of it, and now you know."

{child_name} stood in the doorway and felt the world tilt gently on its axis. The helper, stuck. The teacher, waiting for the student.

And everything the path had taught came forward at once, and {child_name} knew exactly which piece went first.

"Wanting things is not wrong," said {child_name}, and said it like a fact, not a comfort. "It isn't foolish, and it isn't childish, and it doesn't stop being true just because you're wise. I want the humming top so badly my teeth hum. Wanting is allowed. The skill isn't to stop wanting — it's to tell your wants from your needs and let the needs go first. So: which of the two keeps you warm and safe this month?"

Silence. Then, slowly, the eyebrows {child_name} knew so well unknotted themselves.

"The door," said {companion_name}. "The door is a need. The scarf is a want. I have been standing all week in front of two piles, calling them the same thing."

"They were never the same thing," said {child_name}. "And the want isn't lost. It's just later. We start a scarf jar tonight, and it fills coin by coin. Saving is not a mystery, you know. You stood right there while I learned it. Ten plinks and a moon."

The mender came that evening, and the twelve coins did honest work, and the door was hung snug and true. They swung it to test it — and it said nothing at all, which from that particular door amounted to a formal apology.

The scarf jar took its place on the sill, and {child_name} dropped in the first coin as a gift. It rang softly against the glass, the sound of a plan beginning.

Then, at last, the toymaker's stall. {child_name} paused before paying — ran the check honestly, because skills you only use on other people aren't skills yet. Fed? Yes. Warm? Yes. Door quiet, jar begun? Yes. A want, then — an allowed one. {child_name} bought the humming top with open eyes, which is the happiest kind of buying there is.

They sat together in the mended house while the market folded up outside, and the top spun on the table, singing its low, wobbly song. It slowed the way evenings slow. Nobody hurried it.

"When did you grow so wise, little {hero}?" said {companion_name}, watching it turn. "{refrain}."

The top wobbled, bowed like a tiny performer, and lay down.

On the sill, the scarf jar held one coin and a whole plan. Two coins after market day. Full by the first cold moon. And then would come the best chapter of the scarf story — the winter one, where the helper who spent a lifetime warming everyone else finally gets handed something warm.

The lamps went out street by street. The new door held the cold exactly where it belonged.

{refrain}.`
  }
},
    callback: 'Saving for a goal (Level 4)', ageFloor: 5,
    audioTemplate: `Market night in {setting}, and the {hero} was rich. Top-rich. Coin by coin, the {hero} had saved a jarful, and tonight it was finally enough for the humming top: the one that spun and sang a low, wobbly song.

Only one thing was missing: {companion_name}.

{companion_name}, who always knew everything, had not come out of their little house all day. Through the door came the slow chink of counted coins, a sigh, then counting again.

The {hero} tried the usual medicine. A joke through the door — the moon-with-hiccups one. Silence. A honey-fig pushed underneath. It got stuck halfway. The counting just started over.

Then the {hero} peeked through the crack. Lean close. Can you see it too? A little drawing of a scarf, folded small from much unfolding.

The door opened at last. Creak! A long, cold, drafty creak.

"Twelve coins," said {companion_name} quietly. "I need to mend this door before the cold nights come. But there is a scarf at the market — woolly, with a {object_motif} pattern. I have wanted it all year. Wise old me, wanting a scarf. It's foolish."

The one who always helped was stuck.

The {hero} found the exact right piece. "Wanting things is not wrong," said the {hero}. "Wanting is allowed. Here's the trick: which one keeps you warm and safe this month?"

{companion_name} looked at the door. "That one," they admitted. "The door. It's a need."

"Then the door comes first. And the scarf isn't lost — it's just later! We'll start a scarf jar and fill it coin by coin. Saving works. You watched me learn it."

So the door was mended that evening. They swung it to test it. The door said nothing at all.

The scarf jar went up on the sill, and the {hero} dropped in the first coin as a gift.

And because the {hero}'s tummy was full and the {hero}'s door didn't creak, the humming top was a happy want. The {hero} bought it with open eyes.

The top spun and sang its low, wobbly song, slower and slower, while the lamps went out across the market.

"When did you grow so wise, little {hero}?" said {companion_name}. "{refrain}."

The top wobbled, and settled, and stopped.

On the sill, the scarf jar held one coin. Two after market day. By the first cold moon it would be full — and the best part of the scarf story would arrive with winter.

{refrain}.`,
    scriptTemplate: `Market night in {setting}, and {child_name} was rich. Top-rich. Coin by coin, {child_name} had saved a jarful, and tonight it was finally enough for the humming top: the one that spun and sang a low, wobbly song.

Only one thing was missing: {companion_name}.

{companion_name}, who always knew everything, had not come out of their little house all day. Through the door came the slow chink of counted coins, a sigh, then counting again.

{child_name} tried the usual medicine. A joke through the door — the moon-with-hiccups one. Silence. A honey-fig pushed underneath. It got stuck halfway. The counting just started over.

Then {child_name} peeked through the crack. Lean close. Can you see it too? A little drawing of a scarf, folded small from much unfolding.

The door opened at last. Creak! A long, cold, drafty creak.

"Twelve coins," said {companion_name} quietly. "I need to mend this door before the cold nights come. But there is a scarf at the market — woolly, with a {object_motif} pattern. I have wanted it all year. Wise old me, wanting a scarf. It's foolish."

The one who always helped was stuck.

{child_name} found the exact right piece. "Wanting things is not wrong," said {child_name}. "Wanting is allowed. Here's the trick: which one keeps you warm and safe this month?"

{companion_name} looked at the door. "That one," they admitted. "The door. It's a need."

"Then the door comes first. And the scarf isn't lost — it's just later! We'll start a scarf jar and fill it coin by coin. Saving works. You watched me learn it."

So the door was mended that evening. They swung it to test it. The door said nothing at all.

The scarf jar went up on the sill, and {child_name} dropped in the first coin as a gift.

And because {child_name}'s tummy was full and {child_name}'s door didn't creak, the humming top was a happy want. {child_name} bought it with open eyes.

The top spun and sang its low, wobbly song, slower and slower, while the lamps went out across the market.

"When did you grow so wise, little {hero}?" said {companion_name}. "{refrain}."

The top wobbled, and settled, and stopped.

On the sill, the scarf jar held one coin. Two after market day. By the first cold moon it would be full — and the best part of the scarf story would arrive with winter.

{refrain}.`,
  },
]
