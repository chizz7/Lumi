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
    ordinal: 2, title: 'Some Are Worth More',
    concept: "A coin's value and its size are different things",
    summary: "The hero finds two coins — one much bigger than the other — and assumes the bigger one must be worth more. A trip to the market proves them wrong: the smaller coin buys twice as much. Their companion explains that a coin's value comes from what it is, not how large it looks.",
    teachingNote: "Children naturally assume bigger means more valuable — this story builds the habit of asking 'what is it worth?' instead of 'how big is it?'.",
    learningBeat: "A coin's worth comes from what it is, not how large it looks",
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} lived beside {setting}, and more than anything, the {hero} loved to count coins.

One bright morning, the {hero} dug in the sand and found two coins. One coin was big. One coin was small.

"The big one must be worth more," said the {hero}. "Big things are always worth more!" The {hero} held the {object_motif} up high and grinned.

Off ran the {hero} to the busy market. There stood {companion_name}, sorting coins into neat little piles.

"Look what I found!" said the {hero}. "A big coin and a small coin. I will buy the most with the big one, of course!"

{companion_name} smiled softly. "Let us go and see."

First, the {hero} gave the big coin to a market seller and pointed at the berries. The seller nodded and handed back one basket. Just one small basket.

Then the {hero} gave the small coin to the very same seller. The seller smiled and handed back two baskets! Two whole baskets of berries for the little coin.

The {hero} blinked and blinked. "But it is smaller! How can the small one buy more than the big one?"

{companion_name} knelt down beside the {hero}. "Do you remember? Coins have many names and many looks. A coin's worth comes from what it is, not how large it looks."

The {hero} looked at the small coin. Then at the big coin. They had different names. They had different looks. And the little one was simply worth more.

The {hero} laughed out loud and carried both baskets home, one in each arm. The {hero} even gave one sweet berry to {companion_name}, who ate it with a happy nod. The berries were sweet and red and just right.

That night, the {hero} lined up both coins on the windowsill, the big one and the small one, side by side. The {hero} patted them once and let out a long, sleepy yawn.

{refrain}.`,
    scriptTemplate: `{child_name} lived beside {setting}, and more than anything, {child_name} loved to count coins.

One bright morning, {child_name} dug in the sand and found two coins. One coin was big. One coin was small.

"The big one must be worth more," said {child_name}. "Big things are always worth more!" {child_name} held the {object_motif} up high and grinned.

Off ran {child_name} to the busy market. There stood {companion_name}, sorting coins into neat little piles.

"Look what I found!" said {child_name}. "A big coin and a small coin. I will buy the most with the big one, of course!"

{companion_name} smiled softly. "Let us go and see."

First, {child_name} gave the big coin to a market seller and pointed at the berries. The seller nodded and handed back one basket. Just one small basket.

Then {child_name} gave the small coin to the very same seller. The seller smiled and handed back two baskets! Two whole baskets of berries for the little coin.

{child_name} blinked and blinked. "But it is smaller! How can the small one buy more than the big one?"

{companion_name} knelt down beside {child_name}. "Do you remember? Coins have many names and many looks. A coin's worth comes from what it is, not how large it looks."

{child_name} looked at the small coin. Then at the big coin. They had different names. They had different looks. And the little one was simply worth more.

{child_name} laughed out loud and carried both baskets home, one in each arm. {child_name} even gave one sweet berry to {companion_name}, who ate it with a happy nod. The berries were sweet and red and just right.

That night, {child_name} lined up both coins on the windowsill, the big one and the small one, side by side. {child_name} patted them once and let out a long, sleepy yawn.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} lived beside {setting}, and the {hero} had been saving coins for as long as anyone could remember. Every coin went into a little pouch, and every night the {hero} counted them twice.

One morning, while walking along the edge of {setting}, the {hero} found two coins half-buried in the ground. The {hero} brushed them clean and held them up. One coin was large, wider than a thumb. The other was small, no bigger than a fingertip.

"Well, that is easy," said the {hero}. "The big one must be worth more. Bigger always means more." The {hero} tucked the {object_motif} into the pouch and hurried toward the market, already dreaming of everything the big coin might buy.

At the market stood {companion_name}, who knew more about coins than anyone in all of {setting}. {companion_name} was arranging a row of coins by name, the way they always did.

"Good morning!" called the {hero}. "Look! I found two coins. A big one and a small one. I am going to spend the big one, because it will buy the most."

{companion_name} looked up and tilted their head. "That is a fine guess. Shall we test it and see?"

The {hero} marched straight to a market seller with a table piled high with sweet purple plums. The {hero} set down the big coin. "How many plums for this?" asked the {hero}, standing very tall.

The seller studied the big coin, then placed a single plum into the {hero}'s hands. Just one.

The {hero} frowned but did not give up. "And how many for this little one?" The {hero} set down the small coin instead.

The seller studied the small coin, smiled, and counted out two plums. Then, after a moment, a third. Three plums for the little coin.

The {hero} stared. Three for the small, and only one for the big? The {hero} turned around slowly. "{companion_name}, that cannot be right. The small coin is tiny. How can it be worth more than the big one?"

{companion_name} came over and crouched beside the {hero}. "Do you remember what we learned? Coins have all sorts of names, and all sorts of looks. This big coin has one name. That small coin has another. A coin's worth comes from what it is, not how large it looks."

The {hero} turned the two coins over and over. It was true. They did not look alike at all. One was heavy and wide, one was light and small, and each had its own name stamped upon it. Size had fooled the {hero} completely.

"So if I had only spent the big one," the {hero} said slowly, "I would have gone home with a single plum, when I could have had three."

{companion_name} nodded once and said nothing more, letting the {hero} think it through.

The {hero} looked at the small coin with new respect. Then the {hero} spent it, carried away three warm plums, and shared one with {companion_name} right there at the market.

On the walk home, the {hero} kept the big coin safe in the pouch, not because it was worth the most, but because it had taught the best lesson of the day. The {hero} would never judge a coin by its size again.

That evening, the {hero} set both coins on the shelf, the big beside the small, and looked at them for a long, quiet moment. Then the {hero} climbed under the blanket, full of plums, and let their eyes fall shut.

{refrain}.`,
    scriptTemplate: `{child_name} lived beside {setting}, and {child_name} had been saving coins for as long as anyone could remember. Every coin went into a little pouch, and every night {child_name} counted them twice.

One morning, while walking along the edge of {setting}, {child_name} found two coins half-buried in the ground. {child_name} brushed them clean and held them up. One coin was large, wider than a thumb. The other was small, no bigger than a fingertip.

"Well, that is easy," said {child_name}. "The big one must be worth more. Bigger always means more." {child_name} tucked the {object_motif} into the pouch and hurried toward the market, already dreaming of everything the big coin might buy.

At the market stood {companion_name}, who knew more about coins than anyone in all of {setting}. {companion_name} was arranging a row of coins by name, the way they always did.

"Good morning!" called {child_name}. "Look! I found two coins. A big one and a small one. I am going to spend the big one, because it will buy the most."

{companion_name} looked up and tilted their head. "That is a fine guess. Shall we test it and see?"

{child_name} marched straight to a market seller with a table piled high with sweet purple plums. {child_name} set down the big coin. "How many plums for this?" asked {child_name}, standing very tall.

The seller studied the big coin, then placed a single plum into {child_name}'s hands. Just one.

{child_name} frowned but did not give up. "And how many for this little one?" {child_name} set down the small coin instead.

The seller studied the small coin, smiled, and counted out two plums. Then, after a moment, a third. Three plums for the little coin.

{child_name} stared. Three for the small, and only one for the big? {child_name} turned around slowly. "{companion_name}, that cannot be right. The small coin is tiny. How can it be worth more than the big one?"

{companion_name} came over and crouched beside {child_name}. "Do you remember what we learned? Coins have all sorts of names, and all sorts of looks. This big coin has one name. That small coin has another. A coin's worth comes from what it is, not how large it looks."

{child_name} turned the two coins over and over. It was true. They did not look alike at all. One was heavy and wide, one was light and small, and each had its own name stamped upon it. Size had fooled {child_name} completely.

"So if I had only spent the big one," {child_name} said slowly, "I would have gone home with a single plum, when I could have had three."

{companion_name} nodded once and said nothing more, letting {child_name} think it through.

{child_name} looked at the small coin with new respect. Then {child_name} spent it, carried away three warm plums, and shared one with {companion_name} right there at the market.

On the walk home, {child_name} kept the big coin safe in the pouch, not because it was worth the most, but because it had taught the best lesson of the day. {child_name} would never judge a coin by its size again.

That evening, {child_name} set both coins on the shelf, the big beside the small, and looked at them for a long, quiet moment. Then {child_name} climbed under the blanket, full of plums, and let their eyes fall shut.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} had a rule: every coin worth keeping went into the wooden box beneath the bed, and no coin left the box without a very good reason. Living beside {setting}, the {hero} had grown up hearing that money was a serious thing, and the {hero} took it seriously indeed.

So when the {hero} found two coins wedged between the stones on the path one morning, it felt like a small kind of treasure. The {hero} pried them loose, rubbed the dirt away, and laid them flat on one palm to compare.

One coin was large. It filled nearly the whole of the {hero}'s hand, broad and heavy and important-looking. The other was small enough to hide under a fingernail, thin and light as a leaf.

"No contest," the {hero} decided out loud. "The big one is worth far more than the little one. Anyone can see that." The {hero} closed a fist around the {object_motif} and set off for the market with a spring in each step, certain that a coin so large could buy nearly anything.

The market was crowded and loud, full of sellers calling out prices and baskets stacked in bright towers. Near the middle of it all stood {companion_name}, who had spent a lifetime among coins and could name any of them with a single glance.

"There you are," said {companion_name}, catching sight of the {hero}. "You look pleased with yourself this morning."

"I found two coins," said the {hero}, holding both up proudly. "A big one and a small one. I am going to buy the biggest bag of roasted nuts in the whole market, and I will pay with the big coin, because the big coin must be worth the most."

{companion_name} raised an eyebrow, amused. "You are certain of that?"

"Of course," said the {hero}. "Look at the size of it."

"Then go and try," said {companion_name}. "I will wait right here."

The {hero} strode up to the nut seller's stall, where warm bags of roasted nuts were lined up in a row. "One big bag, please," said the {hero}, placing the large coin firmly on the counter.

The seller picked up the big coin, turned it over, and slid the smallest bag across the counter. "That is what this one buys," the seller said kindly.

The {hero} stared at the little bag. "Only that? But it is such a big coin."

"Size is not the price," said the seller, already turning to the next customer.

The {hero}'s cheeks went warm. That was not how the morning was supposed to go. Determined not to leave it there, the {hero} set down the small coin instead. "Then what will this one buy?"

The seller glanced at the small coin, and this time nodded with real approval. The seller reached for the largest bag on the stall, the fat one bursting at the top, and set it down in front of the {hero}. "That one buys this. And a handful more, if you like."

The {hero} could hardly believe it. The little coin, the one that could hide under a fingernail, bought twice what the great big coin had bought. Twice as much, from the smaller of the two.

Slowly, the {hero} walked back to {companion_name}, a bag in each hand and a puzzled frown on their face. "It makes no sense," said the {hero}. "The small coin bought more than the big one. How? The big one is the big one."

{companion_name} sat down on a crate so their eyes were level with the {hero}'s. "Think back to what you learned. Coins come with different names and different faces. The big coin has one name, and it is not worth much. The small coin has another, and it is worth a great deal. A coin's worth comes from what it is, not how large it looks."

The {hero} turned the two coins over in the light, reading the names stamped on each. They truly were different, name and face and all. The only thing the {hero} had noticed was size, and size had led the {hero} straight to the wrong choice.

"I nearly spent the good one thinking it was the poor one," the {hero} admitted, half laughing and half embarrassed. "I almost had it backward."

"Almost," agreed {companion_name}, "but you looked again. That is the whole trick of it. Always look again."

The {hero} spent the small coin on the big bag, saved the large coin for another day, and shared the roasted nuts with {companion_name} as they walked back through the thinning crowd. They were warm and salty and worth every bit of the fuss.

That night, the {hero} did not hide the two coins away in the box beneath the bed. Instead the {hero} left them out on the sill, big and small, side by side, so that the very first thing in the morning would be a reminder never to be fooled by size again.

The {hero} pulled the blanket up, listened to the far-off sounds of {setting}, and smiled a slow, sleepy smile.

{refrain}.`,
    scriptTemplate: `{child_name} had a rule: every coin worth keeping went into the wooden box beneath the bed, and no coin left the box without a very good reason. Living beside {setting}, {child_name} had grown up hearing that money was a serious thing, and {child_name} took it seriously indeed.

So when {child_name} found two coins wedged between the stones on the path one morning, it felt like a small kind of treasure. {child_name} pried them loose, rubbed the dirt away, and laid them flat on one palm to compare.

One coin was large. It filled nearly the whole of {child_name}'s hand, broad and heavy and important-looking. The other was small enough to hide under a fingernail, thin and light as a leaf.

"No contest," {child_name} decided out loud. "The big one is worth far more than the little one. Anyone can see that." {child_name} closed a fist around the {object_motif} and set off for the market with a spring in each step, certain that a coin so large could buy nearly anything.

The market was crowded and loud, full of sellers calling out prices and baskets stacked in bright towers. Near the middle of it all stood {companion_name}, who had spent a lifetime among coins and could name any of them with a single glance.

"There you are," said {companion_name}, catching sight of {child_name}. "You look pleased with yourself this morning."

"I found two coins," said {child_name}, holding both up proudly. "A big one and a small one. I am going to buy the biggest bag of roasted nuts in the whole market, and I will pay with the big coin, because the big coin must be worth the most."

{companion_name} raised an eyebrow, amused. "You are certain of that?"

"Of course," said {child_name}. "Look at the size of it."

"Then go and try," said {companion_name}. "I will wait right here."

{child_name} strode up to the nut seller's stall, where warm bags of roasted nuts were lined up in a row. "One big bag, please," said {child_name}, placing the large coin firmly on the counter.

The seller picked up the big coin, turned it over, and slid the smallest bag across the counter. "That is what this one buys," the seller said kindly.

{child_name} stared at the little bag. "Only that? But it is such a big coin."

"Size is not the price," said the seller, already turning to the next customer.

{child_name}'s cheeks went warm. That was not how the morning was supposed to go. Determined not to leave it there, {child_name} set down the small coin instead. "Then what will this one buy?"

The seller glanced at the small coin, and this time nodded with real approval. The seller reached for the largest bag on the stall, the fat one bursting at the top, and set it down in front of {child_name}. "That one buys this. And a handful more, if you like."

{child_name} could hardly believe it. The little coin, the one that could hide under a fingernail, bought twice what the great big coin had bought. Twice as much, from the smaller of the two.

Slowly, {child_name} walked back to {companion_name}, a bag in each hand and a puzzled frown on their face. "It makes no sense," said {child_name}. "The small coin bought more than the big one. How? The big one is the big one."

{companion_name} sat down on a crate so their eyes were level with {child_name}'s. "Think back to what you learned. Coins come with different names and different faces. The big coin has one name, and it is not worth much. The small coin has another, and it is worth a great deal. A coin's worth comes from what it is, not how large it looks."

{child_name} turned the two coins over in the light, reading the names stamped on each. They truly were different, name and face and all. The only thing {child_name} had noticed was size, and size had led {child_name} straight to the wrong choice.

"I nearly spent the good one thinking it was the poor one," {child_name} admitted, half laughing and half embarrassed. "I almost had it backward."

"Almost," agreed {companion_name}, "but you looked again. That is the whole trick of it. Always look again."

{child_name} spent the small coin on the big bag, saved the large coin for another day, and shared the roasted nuts with {companion_name} as they walked back through the thinning crowd. They were warm and salty and worth every bit of the fuss.

That night, {child_name} did not hide the two coins away in the box beneath the bed. Instead {child_name} left them out on the sill, big and small, side by side, so that the very first thing in the morning would be a reminder never to be fooled by size again.

{child_name} pulled the blanket up, listened to the far-off sounds of {setting}, and smiled a slow, sleepy smile.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} kept accounts. Not in any grand way, just a folded scrap of paper in a pocket, where every coin earned and every coin spent was noted in a careful hand. Living beside {setting}, where the seasons could be generous one month and stingy the next, the {hero} had learned early that keeping track of money was a way of keeping track of yourself. It made the {hero} feel older than the other children, and a little wiser, and if the {hero} was honest, a little proud.

That pride was exactly the trouble.

It began on an ordinary morning. The {hero} was crossing the old market path when something caught the light between two flat stones. The {hero} crouched, worked a fingernail into the gap, and freed not one coin but two. Wiping them clean on a sleeve, the {hero} held them up to compare.

The difference was almost comical. One coin was large, broad as a full walnut, heavy in the palm, its edge thick and its face crowded with detail. The other was scarcely more than a chip of metal, thin and light, small enough to vanish in the crease of a knuckle.

The {hero} weighed them, one in each hand, and felt the old certainty settle in. Bigger was more. It was the most obvious thing in the world. A large coin was simply a larger amount of money; anyone could see it. The {hero} slipped the small one into a pocket almost carelessly and closed a fist around the {object_motif}, the big one, the important one, and began to plan.

There was a particular stall the {hero} had been thinking about for a week, a baker who sold honey buns so good that the smell of them reached halfway across the market. They were not cheap. But with a coin this size, the {hero} thought, cheap did not matter. The {hero} could buy a whole row of them and still have change to note down on the folded paper.

At the market, {companion_name} was where {companion_name} always was, near the well at the center, sorting a small heap of coins into groups only they understood. {companion_name} had handled money longer than the {hero} had been alive and had a way of knowing the worth of a thing at a glance.

"You are walking like someone with a plan," {companion_name} observed, without looking up.

"I found two coins," said the {hero}, unable to keep the grin down. "A big one and a small one. I am going to buy honey buns with the big one. Look at it, it must be worth a fortune."

{companion_name} did look up then, and studied the {hero} for a moment with an expression that was not quite a smile. "Must it," {companion_name} said. It did not sound like a question, and {companion_name} added nothing more. "Go on, then. I will be here."

The {hero} went, buoyed by that certainty, straight to the baker's stall where the honey buns sat in golden rows. "I would like four," the {hero} said grandly, and laid the big coin on the counter with a satisfying little clack.

The baker picked it up, turned it over, and instead of reaching for the buns, set it back down with an apologetic tilt of the head. "This will buy you one," the baker said. "Not four. One."

The {hero} felt the grin freeze. "One? But it is the biggest coin I have ever seen."

"It is big," the baker agreed, not unkindly. "It is also not worth very much. Big and valuable are not the same thing, young one."

Heat crept up the {hero}'s neck. Around the stall, an ordinary morning went on, no one watching, no one who had even noticed, and yet the {hero} felt the small, sharp sting of having been so sure, so loudly sure, and so wrong. One honey bun. The {hero} had marched up expecting a feast and could afford a single bun.

For a moment the {hero} nearly took the one bun and slipped away. But something nagged, the small coin, forgotten in the pocket. Almost defiantly, the {hero} fished it out and set it beside the big one. "And this little one? What does this buy?"

The baker's face changed at once. "Ah," the baker said, with new interest, and picked up the small coin the way one picks up something that matters. "This one buys four. Perhaps five, if you are patient with me while I count." And the baker began laying honey buns on the counter, one, two, three, four, until the {hero} had to cup both hands to hold them.

The {hero} stood there, hands full of warm buns bought with the coin that could hide under a fingernail, staring at the big coin still sitting alone and nearly useless on the counter. The whole thing turned itself over in the {hero}'s mind. The small one, the one nearly left behind, was worth several times the great heavy one the {hero} had been so proud of.

The {hero} walked back to {companion_name} slowly, buns balanced carefully, cheeks still warm.

"It bought four with the small one," the {hero} said. "And only one with the big one. I had it completely backward. I stood there and told the baker how much the big coin was worth, and it was hardly worth anything." The {hero} looked down at the two coins. "I feel a little foolish."

{companion_name} took the coins and held them side by side, one on each fingertip, so the {hero} could see them plainly. "Look at them properly this time. Not at their size, at their names, their faces, what they actually are. These two coins have different names, just as you learned before, and different faces stamped upon them. One name is worth a great deal and the other very little, and neither fact has a thing to do with how big the coin is. A coin's worth comes from what it is, not how large it looks."

The {hero} took the coins back and, for the first time, really read them, the names along the edges, the small marks on each face that the {hero} had been too dazzled by size to notice. They were as different as two things could be. All the certainty of the morning had rested on nothing but bigness, and bigness had been the one part that did not matter at all.

"So the size was the trick," the {hero} said quietly. "It looked like the answer, and it was the thing pulling me the wrong way the whole time."

"It usually is," said {companion_name}, and left it there.

The {hero} spent the small coin, kept the big one for what it truly was, and shared the honey buns with {companion_name} beside the well, and they were every bit as good as their smell had promised, better, perhaps, for having very nearly not been bought at all.

Walking home, the {hero} took out the folded scrap of paper and, instead of a number, wrote a single short line to remember, then tucked it away.

That night the {hero} set the two coins on the sill where the light of {setting} could reach them, the great one and the small one, and lay looking at them until the difference stopped seeming strange and started seeming obvious. The last thought before sleep was not about the buns at all, but about how sure the {hero} had been, and how easily sure could be wrong, and how good it felt to look again.

{refrain}.`,
    scriptTemplate: `{child_name} kept accounts. Not in any grand way, just a folded scrap of paper in a pocket, where every coin earned and every coin spent was noted in a careful hand. Living beside {setting}, where the seasons could be generous one month and stingy the next, {child_name} had learned early that keeping track of money was a way of keeping track of yourself. It made {child_name} feel older than the other children, and a little wiser, and if {child_name} was honest, a little proud.

That pride was exactly the trouble.

It began on an ordinary morning. {child_name} was crossing the old market path when something caught the light between two flat stones. {child_name} crouched, worked a fingernail into the gap, and freed not one coin but two. Wiping them clean on a sleeve, {child_name} held them up to compare.

The difference was almost comical. One coin was large, broad as a full walnut, heavy in the palm, its edge thick and its face crowded with detail. The other was scarcely more than a chip of metal, thin and light, small enough to vanish in the crease of a knuckle.

{child_name} weighed them, one in each hand, and felt the old certainty settle in. Bigger was more. It was the most obvious thing in the world. A large coin was simply a larger amount of money; anyone could see it. {child_name} slipped the small one into a pocket almost carelessly and closed a fist around the {object_motif}, the big one, the important one, and began to plan.

There was a particular stall {child_name} had been thinking about for a week, a baker who sold honey buns so good that the smell of them reached halfway across the market. They were not cheap. But with a coin this size, {child_name} thought, cheap did not matter. {child_name} could buy a whole row of them and still have change to note down on the folded paper.

At the market, {companion_name} was where {companion_name} always was, near the well at the center, sorting a small heap of coins into groups only they understood. {companion_name} had handled money longer than {child_name} had been alive and had a way of knowing the worth of a thing at a glance.

"You are walking like someone with a plan," {companion_name} observed, without looking up.

"I found two coins," said {child_name}, unable to keep the grin down. "A big one and a small one. I am going to buy honey buns with the big one. Look at it, it must be worth a fortune."

{companion_name} did look up then, and studied {child_name} for a moment with an expression that was not quite a smile. "Must it," {companion_name} said. It did not sound like a question, and {companion_name} added nothing more. "Go on, then. I will be here."

{child_name} went, buoyed by that certainty, straight to the baker's stall where the honey buns sat in golden rows. "I would like four," {child_name} said grandly, and laid the big coin on the counter with a satisfying little clack.

The baker picked it up, turned it over, and instead of reaching for the buns, set it back down with an apologetic tilt of the head. "This will buy you one," the baker said. "Not four. One."

{child_name} felt the grin freeze. "One? But it is the biggest coin I have ever seen."

"It is big," the baker agreed, not unkindly. "It is also not worth very much. Big and valuable are not the same thing, young one."

Heat crept up {child_name}'s neck. Around the stall, an ordinary morning went on, no one watching, no one who had even noticed, and yet {child_name} felt the small, sharp sting of having been so sure, so loudly sure, and so wrong. One honey bun. {child_name} had marched up expecting a feast and could afford a single bun.

For a moment {child_name} nearly took the one bun and slipped away. But something nagged, the small coin, forgotten in the pocket. Almost defiantly, {child_name} fished it out and set it beside the big one. "And this little one? What does this buy?"

The baker's face changed at once. "Ah," the baker said, with new interest, and picked up the small coin the way one picks up something that matters. "This one buys four. Perhaps five, if you are patient with me while I count." And the baker began laying honey buns on the counter, one, two, three, four, until {child_name} had to cup both hands to hold them.

{child_name} stood there, hands full of warm buns bought with the coin that could hide under a fingernail, staring at the big coin still sitting alone and nearly useless on the counter. The whole thing turned itself over in {child_name}'s mind. The small one, the one nearly left behind, was worth several times the great heavy one {child_name} had been so proud of.

{child_name} walked back to {companion_name} slowly, buns balanced carefully, cheeks still warm.

"It bought four with the small one," {child_name} said. "And only one with the big one. I had it completely backward. I stood there and told the baker how much the big coin was worth, and it was hardly worth anything." {child_name} looked down at the two coins. "I feel a little foolish."

{companion_name} took the coins and held them side by side, one on each fingertip, so {child_name} could see them plainly. "Look at them properly this time. Not at their size, at their names, their faces, what they actually are. These two coins have different names, just as you learned before, and different faces stamped upon them. One name is worth a great deal and the other very little, and neither fact has a thing to do with how big the coin is. A coin's worth comes from what it is, not how large it looks."

{child_name} took the coins back and, for the first time, really read them, the names along the edges, the small marks on each face that {child_name} had been too dazzled by size to notice. They were as different as two things could be. All the certainty of the morning had rested on nothing but bigness, and bigness had been the one part that did not matter at all.

"So the size was the trick," {child_name} said quietly. "It looked like the answer, and it was the thing pulling me the wrong way the whole time."

"It usually is," said {companion_name}, and left it there.

{child_name} spent the small coin, kept the big one for what it truly was, and shared the honey buns with {companion_name} beside the well, and they were every bit as good as their smell had promised, better, perhaps, for having very nearly not been bought at all.

Walking home, {child_name} took out the folded scrap of paper and, instead of a number, wrote a single short line to remember, then tucked it away.

That night {child_name} set the two coins on the sill where the light of {setting} could reach them, the great one and the small one, and lay looking at them until the difference stopped seeming strange and started seeming obvious. The last thought before sleep was not about the buns at all, but about how sure {child_name} had been, and how easily sure could be wrong, and how good it felt to look again.

{refrain}.`
  }
},
    callback: 'Coins have different names and appearances (Level 1)', ageFloor: 3,
    audioTemplate: `One calm evening, a small {hero} found two {object_motif}s in {setting} — one large and flat, one small and thin.

"The big one must be worth more," said the {hero} firmly.

{companion_name} tilted their head. "Shall we find out?"

They went to the little market together. The small coin bought two sweet berries. The large coin bought just one.

"But it was bigger!" said the {hero}.

"A coin's worth comes from what it is, not how large it looks," said {companion_name} gently. "Do you remember the names we learned? The small one — can you remember what it's called?"

The {hero} did remember. And now they knew something new: what a coin looks like and what a coin is worth are two very different questions.

They walked home together through {setting}, and the {hero} held both coins and thought about this all the way.

{refrain}.`,
    scriptTemplate: `One calm evening, {child_name} the {hero} found two {object_motif}s in {setting} — one large and flat, one small and thin.

"The big one must be worth more," said {child_name} firmly.

{companion_name} tilted their head. "Shall we find out?"

They went to the little market together. The small coin bought two sweet berries. The large coin bought just one.

"But it was bigger!" said {child_name}.

"A coin's worth comes from what it is, not how large it looks," said {companion_name} gently. "Do you remember the names we learned? The small one — can you remember what it's called?"

{child_name} did remember. And now they knew something new: what a coin looks like and what a coin is worth are two very different questions.

They walked home together through {setting}, and {child_name} held both coins and thought about this all the way.

{refrain}.`,
  },
  {
    ordinal: 3, title: 'Trading and Giving Change',
    concept: 'When you pay more than something costs, you get change back',
    summary: 'After saving five coins, the hero tries to buy a shell that costs only three. The shopkeeper hands back two coins — and the hero is surprised to learn this is called change. Their companion connects the moment to something already learned: one of those returned coins is worth more than it looks.',
    teachingNote: 'Understanding change turns a transaction from a confusing exchange into a logical, predictable conversation — a skill that removes anxiety at shop counters.',
    learningBeat: 'That is called change',
    ageVariants: {
  '3-4': { audioTemplate: `In {setting}, the {hero} shook a little pouch until five round coins slid out into one hand. Five! Cool and smooth, and every one of them saved.

Today was the day. Near the market stall hung a small paper kite, red as a poppy, and the {hero} had wanted it for a long, long time.

"How much for the kite?" the {hero} asked, standing very tall.

"Three coins," said the shopkeeper.

Carefully, the {hero} counted them out. One. Two. Three. The shopkeeper lifted the kite down and handed it over, and it felt as light as a leaf.

The {hero} turned to go. But the shopkeeper reached out again, and into the {hero}'s hand dropped two more coins. Two of them!

The {hero} stopped and blinked. "Wait. I gave you my coins. Why are you putting some back?"

{companion_name} hopped up onto the counter, right beside the {object_motif} that sat there.

"You brought five coins for something that cost only three. The other two belong to you. That is called change."

The {hero} looked down. Two coins. One was small and plain, hiding under the other.

"Remember what we learned?" said {companion_name}. "That quiet little coin is worth more than it looks."

And the {hero} did remember. A coin could be small and still be strong. This was one of those.

The {hero} squeezed the two coins tight and dropped them back into the pouch, first the small one, then the big one.

Outside {setting}, the wind was already waiting. The {hero} let the string unwind, and the paper kite lifted, tugged, and climbed high into the evening.

Two coins in the pouch. A kite in the sky. And something brand new that finally had a name.

{refrain}.`, scriptTemplate: `In {setting}, {child_name} shook a little pouch until five round coins slid out into one hand. Five! Cool and smooth, and every one of them saved.

Today was the day. Near the market stall hung a small paper kite, red as a poppy, and {child_name} had wanted it for a long, long time.

"How much for the kite?" {child_name} asked, standing very tall.

"Three coins," said the shopkeeper.

Carefully, {child_name} counted them out. One. Two. Three. The shopkeeper lifted the kite down and handed it over, and it felt as light as a leaf.

{child_name} turned to go. But the shopkeeper reached out again, and into {child_name}'s hand dropped two more coins. Two of them!

{child_name} stopped and blinked. "Wait. I gave you my coins. Why are you putting some back?"

{companion_name} hopped up onto the counter, right beside the {object_motif} that sat there.

"You brought five coins for something that cost only three. The other two belong to you. That is called change."

{child_name} looked down. Two coins. One was small and plain, hiding under the other.

"Remember what we learned?" said {companion_name}. "That quiet little coin is worth more than it looks."

And {child_name} did remember. A coin could be small and still be strong. This was one of those.

{child_name} squeezed the two coins tight and dropped them back into the pouch, first the small one, then the big one.

Outside {setting}, the wind was already waiting. {child_name} let the string unwind, and the paper kite lifted, tugged, and climbed high into the evening.

Two coins in the pouch. A kite in the sky. And something brand new that finally had a name.

{refrain}.` },
  '5-6': { audioTemplate: `In {setting}, the {hero} untied the little pouch and poured the coins into one palm. One, two, three, four, five. Five whole coins, and not one of them spent. Some had come from helping. Some had come from waiting instead of buying. All of them had been saved for a day exactly like today.

Because today, the {hero} was going to the market alone.

At the corner stall, a small wooden whistle hung on a string, the kind that made a low, round hoot when you blew it. The {hero} had walked past it three times this week. Today would be different.

"Excuse me," the {hero} said to the shopkeeper, holding the pouch with both hands. "How much for the whistle?"

"Three coins," the shopkeeper said.

Three. The {hero} had five. That was enough, and more than enough. Carefully, so none would roll away, the {hero} counted three coins onto the counter. One. Two. Three.

The shopkeeper lifted the whistle from its hook and set it in the {hero}'s hand. It was smooth and warmer than the coins.

The {hero} turned to leave — and the shopkeeper said, "Wait. Here." Two coins dropped back into the {hero}'s palm. Clink, clink.

The {hero} froze. Two coins. Going the wrong way. Toward, not away.

"But I paid you," the {hero} said slowly. "I gave you coins. Why are you giving these back to me?"

{companion_name} climbed up onto the edge of the counter and settled beside the {object_motif} someone had left there.

"Look at what happened," said {companion_name}. "You brought five. The whistle cost three. Five is two more than three. So two come home with you. That is called change."

The {hero} stared at the two coins in the middle of that open palm. It was strange. You handed coins to someone, and sometimes they handed a few right back, and that was not a mistake at all. That was just how it worked.

Then the {hero} noticed something. One of the two coins was small and a little dull, the sort you might not look at twice.

{companion_name} noticed the {hero} noticing.

"You already know about that one," {companion_name} said quietly. "The small one. Remember?"

The {hero} did remember. Not every coin showed its worth on the outside. A plain little coin could be worth more than a big bright one — they had learned that together, not so long ago. And here was one of those very coins, come back in the change, easy to miss if you did not know its secret.

The {hero} did know its secret. So the {hero} did not throw it loose in the pouch. The small coin went in first, carefully, like something that mattered. The bigger coin followed after.

"So," the {hero} said, half to {companion_name} and half to the whistle, "if I bring more than a thing costs, the extra comes back to me."

{companion_name} bobbed. "Every time."

Outside the stall, the light over {setting} had gone soft and low at the edges. The {hero} lifted the whistle and blew. A round, hooting note rolled out across the rooftops, and somewhere a bird answered it.

The {hero} laughed. A whistle that sang. Two coins still saved, when they might have been gone. And best of all, a new word to carry home and keep.

{refrain}.`, scriptTemplate: `In {setting}, {child_name} untied the little pouch and poured the coins into one palm. One, two, three, four, five. Five whole coins, and not one of them spent. Some had come from helping. Some had come from waiting instead of buying. All of them had been saved for a day exactly like today.

Because today, {child_name} was going to the market alone.

At the corner stall, a small wooden whistle hung on a string, the kind that made a low, round hoot when you blew it. {child_name} had walked past it three times this week. Today would be different.

"Excuse me," {child_name} said to the shopkeeper, holding the pouch with both hands. "How much for the whistle?"

"Three coins," the shopkeeper said.

Three. {child_name} had five. That was enough, and more than enough. Carefully, so none would roll away, {child_name} counted three coins onto the counter. One. Two. Three.

The shopkeeper lifted the whistle from its hook and set it in {child_name}'s hand. It was smooth and warmer than the coins.

{child_name} turned to leave — and the shopkeeper said, "Wait. Here." Two coins dropped back into {child_name}'s palm. Clink, clink.

{child_name} froze. Two coins. Going the wrong way. Toward, not away.

"But I paid you," {child_name} said slowly. "I gave you coins. Why are you giving these back to me?"

{companion_name} climbed up onto the edge of the counter and settled beside the {object_motif} someone had left there.

"Look at what happened," said {companion_name}. "You brought five. The whistle cost three. Five is two more than three. So two come home with you. That is called change."

{child_name} stared at the two coins in the middle of that open palm. It was strange. You handed coins to someone, and sometimes they handed a few right back, and that was not a mistake at all. That was just how it worked.

Then {child_name} noticed something. One of the two coins was small and a little dull, the sort you might not look at twice.

{companion_name} noticed {child_name} noticing.

"You already know about that one," {companion_name} said quietly. "The small one. Remember?"

{child_name} did remember. Not every coin showed its worth on the outside. A plain little coin could be worth more than a big bright one — they had learned that together, not so long ago. And here was one of those very coins, come back in the change, easy to miss if you did not know its secret.

{child_name} did know its secret. So {child_name} did not throw it loose in the pouch. The small coin went in first, carefully, like something that mattered. The bigger coin followed after.

"So," {child_name} said, half to {companion_name} and half to the whistle, "if I bring more than a thing costs, the extra comes back to me."

{companion_name} bobbed. "Every time."

Outside the stall, the light over {setting} had gone soft and low at the edges. {child_name} lifted the whistle and blew. A round, hooting note rolled out across the rooftops, and somewhere a bird answered it.

{child_name} laughed. A whistle that sang. Two coins still saved, when they might have been gone. And best of all, a new word to carry home and keep.

{refrain}.` },
  '7-8': { audioTemplate: `The five coins had lived in the {hero}'s pouch for eleven days.

The {hero} knew, because the {hero} had counted them every night — one, two, three, four, five — sliding each cool coin from one palm to the other before bed. Some had been earned by carrying things. One had been found. Two had been saved simply by not spending them, which, it turned out, was the hardest way of all. Five coins. Enough, at last, for the thing by the market stall.

The thing was a small carved boat, no longer than a hand, with a real cloth sail. It sat on the shopkeeper's shelf in {setting}, and the {hero} had decided, eleven days ago, that it would one day come home.

Today the {hero} walked to the market with the pouch held tight and a whole speech ready.

"Good afternoon," the {hero} said, because it seemed like the sort of thing you said when you were buying something important and doing it by yourself. "I would like to buy the little boat. The one with the sail."

The shopkeeper took it down and turned it over once. "Three coins," the shopkeeper said.

Three. The {hero} had rehearsed for five. For a second the extra two coins felt like a mistake, like showing up with too much of something. But the {hero} counted three coins onto the worn wooden counter — one, two, three — lining them up straight, and pushed them across.

The shopkeeper slid the boat into the {hero}'s hands. It was lighter than it looked and smelled faintly of cut wood.

The {hero} said thank you and turned to go, already imagining the boat on the water. And that was when the shopkeeper said, "Hold on. These are yours."

Two coins landed back in the {hero}'s open palm.

The {hero} stopped walking. This did not fit. You gave coins away to get a thing — that was the whole shape of buying, everyone knew that. Coins went one direction. But here were two of them, warm from the shopkeeper's hand, sitting in the {hero}'s palm as if they had simply changed their minds and come back.

"I think there's been a mistake," the {hero} said carefully. "I already paid. Why are you giving me coins?"

{companion_name} had been waiting on the windowsill and now crossed to the counter, stopping beside the {object_motif} that lay near the till.

"No mistake," said {companion_name}. "Think it through. You carried five coins in. The boat cost three. What is five take away three?"

"Two," said the {hero}.

"Two," {companion_name} agreed. "So two were never really spent. They were only ever going to come back to you. That is called change."

The {hero} turned the word over along with the coins. Change. It made a strange kind of sense, once you stood still long enough to see it. You did not have to bring the exact amount and no more. You could bring plenty, hand it over, and trust the extra to find its way home. The counter was not a place where coins vanished. It was a place where they were counted, and the leftover ones were returned.

Then the {hero} looked closer at the two coins and went quiet.

One of them was small. Smaller than the other, and dull, with a worn face — the kind of coin you might let roll under a shelf without chasing it.

"That one," {companion_name} said, watching the {hero}'s face. "You've met a coin like that before."

And the {hero} had. Not long ago, the two of them had learned a secret that most people walked right past: that some coins are worth more than they look, that size and shine do not tell you a coin's real worth. And here, hidden in the change, easy to overlook, sat exactly such a coin. If the {hero} had not known better, it might have seemed like the smallest, least important part of the whole day.

But the {hero} did know better.

So the {hero} did not toss the coins carelessly into the pouch. The small one went in first, on purpose, the way you put away something you understand the value of. The larger coin dropped in after it, and the two of them clicked together at the bottom.

"So the change isn't just leftover," the {hero} said slowly, working it out aloud. "The change might have the best coin in it."

{companion_name} tipped forward, pleased. "Now you're really looking."

Outside, the wind was combing across {setting}, exactly the kind of wind a small boat with a cloth sail was built for. The {hero} carried the boat to the water's edge and set it down where the ripples could reach it. It caught the breeze, leaned, and slid out across the surface, trailing a thin bright wake.

The {hero} crouched there and watched it go, one hand resting on the pouch. A boat that truly sailed. Two coins that had come home when they might have stayed behind. And a brand-new word — change — that turned out to be bigger, and quite a bit richer, than it had first appeared.

{refrain}.`, scriptTemplate: `The five coins had lived in {child_name}'s pouch for eleven days.

{child_name} knew, because {child_name} had counted them every night — one, two, three, four, five — sliding each cool coin from one palm to the other before bed. Some had been earned by carrying things. One had been found. Two had been saved simply by not spending them, which, it turned out, was the hardest way of all. Five coins. Enough, at last, for the thing by the market stall.

The thing was a small carved boat, no longer than a hand, with a real cloth sail. It sat on the shopkeeper's shelf in {setting}, and {child_name} had decided, eleven days ago, that it would one day come home.

Today {child_name} walked to the market with the pouch held tight and a whole speech ready.

"Good afternoon," {child_name} said, because it seemed like the sort of thing you said when you were buying something important and doing it by yourself. "I would like to buy the little boat. The one with the sail."

The shopkeeper took it down and turned it over once. "Three coins," the shopkeeper said.

Three. {child_name} had rehearsed for five. For a second the extra two coins felt like a mistake, like showing up with too much of something. But {child_name} counted three coins onto the worn wooden counter — one, two, three — lining them up straight, and pushed them across.

The shopkeeper slid the boat into {child_name}'s hands. It was lighter than it looked and smelled faintly of cut wood.

{child_name} said thank you and turned to go, already imagining the boat on the water. And that was when the shopkeeper said, "Hold on. These are yours."

Two coins landed back in {child_name}'s open palm.

{child_name} stopped walking. This did not fit. You gave coins away to get a thing — that was the whole shape of buying, everyone knew that. Coins went one direction. But here were two of them, warm from the shopkeeper's hand, sitting in {child_name}'s palm as if they had simply changed their minds and come back.

"I think there's been a mistake," {child_name} said carefully. "I already paid. Why are you giving me coins?"

{companion_name} had been waiting on the windowsill and now crossed to the counter, stopping beside the {object_motif} that lay near the till.

"No mistake," said {companion_name}. "Think it through. You carried five coins in. The boat cost three. What is five take away three?"

"Two," said {child_name}.

"Two," {companion_name} agreed. "So two were never really spent. They were only ever going to come back to you. That is called change."

{child_name} turned the word over along with the coins. Change. It made a strange kind of sense, once you stood still long enough to see it. You did not have to bring the exact amount and no more. You could bring plenty, hand it over, and trust the extra to find its way home. The counter was not a place where coins vanished. It was a place where they were counted, and the leftover ones were returned.

Then {child_name} looked closer at the two coins and went quiet.

One of them was small. Smaller than the other, and dull, with a worn face — the kind of coin you might let roll under a shelf without chasing it.

"That one," {companion_name} said, watching {child_name}'s face. "You've met a coin like that before."

And {child_name} had. Not long ago, the two of them had learned a secret that most people walked right past: that some coins are worth more than they look, that size and shine do not tell you a coin's real worth. And here, hidden in the change, easy to overlook, sat exactly such a coin. If {child_name} had not known better, it might have seemed like the smallest, least important part of the whole day.

But {child_name} did know better.

So {child_name} did not toss the coins carelessly into the pouch. The small one went in first, on purpose, the way you put away something you understand the value of. The larger coin dropped in after it, and the two of them clicked together at the bottom.

"So the change isn't just leftover," {child_name} said slowly, working it out aloud. "The change might have the best coin in it."

{companion_name} tipped forward, pleased. "Now you're really looking."

Outside, the wind was combing across {setting}, exactly the kind of wind a small boat with a cloth sail was built for. {child_name} carried the boat to the water's edge and set it down where the ripples could reach it. It caught the breeze, leaned, and slid out across the surface, trailing a thin bright wake.

{child_name} crouched there and watched it go, one hand resting on the pouch. A boat that truly sailed. Two coins that had come home when they might have stayed behind. And a brand-new word — change — that turned out to be bigger, and quite a bit richer, than it had first appeared.

{refrain}.` },
  '9-11': { audioTemplate: `There is a particular weight to five coins when you have saved every one of them yourself, and the {hero} had learned that weight by heart.

For most of a month the coins had ridden in a pouch at the {hero}'s side, and every night before sleep they came out to be counted. One, two, three, four, five. Two had been earned by work — the slow, unglamorous kind, the carrying and the fetching. One had been a gift. And two had been saved the hardest way there is, which is simply by wanting something else and not buying it. The {hero} had walked past a dozen small temptations to keep those last two. That was what made the five feel heavier than five coins had any right to feel. They were not just money. They were patience, made round and solid and cool to the touch.

And today they were going to be spent — all of it decided, all of it planned — on the compass that hung in the window of the stall in {setting}.

It was not a large thing, the compass. It fit in a palm. But its needle actually swung and settled and pointed, and the {hero} had stood at that window enough times to have memorized the way the light moved across its face. Three times the {hero} had almost gone in. Three times something — shyness, mostly, the ordinary fear of doing a grown-up thing alone for the first time — had turned the {hero} back around. Not today. Today the {hero} pushed the door open before the fear could get a word in.

"I'd like to buy the compass, please," the {hero} said. The voice came out steadier than expected, which was its own small victory. "The one in the window."

The shopkeeper reached in, lifted it down, and set it on the counter between them. "Good choice," the shopkeeper said. "That'll be three coins."

Three.

The {hero} had come braced to part with five. There is a way you prepare yourself to give something up — you go a little numb to it beforehand, so it will not hurt when the moment comes — and the {hero} had done exactly that with all five coins. To be told the number was three left a curious gap, like leaning into a door you expect to be heavy and finding it swings open at a touch. For a heartbeat the {hero} even wondered whether bringing more than the price was some kind of error, whether it marked you out as someone who did not understand how any of this worked.

But the {hero} counted three coins onto the counter anyway — one, two, three, set down in a neat row — and slid them across the worn wood. The shopkeeper nodded and pressed the compass into the {hero}'s waiting hands. It was cool, and heavier than it looked, and the needle inside gave a small excited quiver at being moved.

The {hero} said thank you and turned to leave, already half-lost in the ownership of it, already picturing the needle pointing the way home. And then the shopkeeper's voice: "Hang on. Don't forget these."

Two coins dropped, one after the other, back into the {hero}'s palm.

The {hero} stood very still.

It did not fit. It went against the entire shape of the thing. Buying, as far as the {hero} had ever understood it, ran in one direction only: coins out, object in, the pouch a little lighter every time. That was simply the arithmetic of the world. Yet here were two coins moving upstream, still holding the warmth of the shopkeeper's hand, sitting in the {hero}'s palm as though they had thought better of leaving and doubled back.

"I think you've made a mistake," the {hero} said — carefully, because it felt rude to argue with a grown-up over money, and ruder still to be wrong about it. "I already paid you. Why are you giving me coins back?"

From the sill by the window, where it had been watching the whole careful performance, {companion_name} crossed to the counter and settled at the {hero}'s elbow, near the {object_motif} that lay beside the till.

"No mistake anywhere," said {companion_name}. "Just arithmetic doing its job. You walked in with five. The compass cost three. Five, take away three."

"Two," the {hero} said.

"Two," said {companion_name}. "Which were never really the compass's to keep. They were always going to turn around and come back to you. That is called change."

The {hero} turned the word over slowly, the way you turn a stone to see the underside. Change. So this was a thing with a name — this quiet reversal at the end of a purchase, this handing-back. It reorganized something in the {hero}'s head. You did not, it turned out, have to arrive with the exact price counted out to the last coin, anxious and precise. You could bring more than enough, offer it up in good faith, and trust the counter to sort the difference and send the remainder home. The stall was not a place where coins simply disappeared. It was a place where they were weighed against a price, and whatever was extra came back.

And then the {hero} actually looked at the two coins, and the looking changed everything.

One of them was small. Noticeably smaller than its companion, and dull-faced, worn soft around the rim — the exact sort of coin your eye slides past, the sort you might let roll away under the shelving and not bother to chase, judging it the least of what you held.

{companion_name} was watching the {hero}'s expression shift. "You've seen a coin like that before," it said, more quietly now. "You know something about it that most people don't."

And the {hero} did. It came back all at once — the thing the two of them had puzzled out together not so long ago, the secret hiding in plain sight at the bottom of every pouch: that a coin's worth is not written in its size or its polish, that the plainest, smallest coin can carry more value than the broadest and the brightest. The {hero} had been proud of learning it. And now, look — here was exactly such a coin, folded invisibly into the change, so easy to dismiss that a person who didn't know better might have counted it as almost nothing at all.

But the {hero} knew better. That was the whole point of having learned it.

So the {hero} did not tip the two coins loosely into the pouch. The small one went in first, deliberately, the way you set down something whose value only you can see. The larger coin followed, and the two of them met at the bottom with a small companionable click.

"So change isn't just the leftover part," the {hero} said, thinking it through out loud, unwilling to let the idea go before it was fully caught. "It isn't the scraps. The best coin I own might come back inside the change — and if I weren't paying attention, I'd walk out thinking I'd only been handed spare bits."

{companion_name} tilted toward the {hero}, plainly pleased. "That," it said, "is the difference between counting coins and actually reading them."

Outside, the afternoon had gone long and low over {setting}, and a good steady wind was walking across the open ground. The {hero} held the compass flat on one palm and let the needle settle. It swung, wavered, and came to rest, sure of itself, pointing off toward home. The {hero} smiled at that — at the small ordinary miracle of a thing that knew its own direction — and rested the other hand on the pouch, where two saved coins sat waiting, one of them worth far more than its size would ever admit.

A compass that truly pointed. Two coins carried home that could so easily have been left behind. And a new word, learned standing at a counter alone: bigger than it sounded, richer than it looked, and now, unmistakably, the {hero}'s own.

{refrain}.`, scriptTemplate: `There is a particular weight to five coins when you have saved every one of them yourself, and {child_name} had learned that weight by heart.

For most of a month the coins had ridden in a pouch at {child_name}'s side, and every night before sleep they came out to be counted. One, two, three, four, five. Two had been earned by work — the slow, unglamorous kind, the carrying and the fetching. One had been a gift. And two had been saved the hardest way there is, which is simply by wanting something else and not buying it. {child_name} had walked past a dozen small temptations to keep those last two. That was what made the five feel heavier than five coins had any right to feel. They were not just money. They were patience, made round and solid and cool to the touch.

And today they were going to be spent — all of it decided, all of it planned — on the compass that hung in the window of the stall in {setting}.

It was not a large thing, the compass. It fit in a palm. But its needle actually swung and settled and pointed, and {child_name} had stood at that window enough times to have memorized the way the light moved across its face. Three times {child_name} had almost gone in. Three times something — shyness, mostly, the ordinary fear of doing a grown-up thing alone for the first time — had turned {child_name} back around. Not today. Today {child_name} pushed the door open before the fear could get a word in.

"I'd like to buy the compass, please," {child_name} said. The voice came out steadier than expected, which was its own small victory. "The one in the window."

The shopkeeper reached in, lifted it down, and set it on the counter between them. "Good choice," the shopkeeper said. "That'll be three coins."

Three.

{child_name} had come braced to part with five. There is a way you prepare yourself to give something up — you go a little numb to it beforehand, so it will not hurt when the moment comes — and {child_name} had done exactly that with all five coins. To be told the number was three left a curious gap, like leaning into a door you expect to be heavy and finding it swings open at a touch. For a heartbeat {child_name} even wondered whether bringing more than the price was some kind of error, whether it marked you out as someone who did not understand how any of this worked.

But {child_name} counted three coins onto the counter anyway — one, two, three, set down in a neat row — and slid them across the worn wood. The shopkeeper nodded and pressed the compass into {child_name}'s waiting hands. It was cool, and heavier than it looked, and the needle inside gave a small excited quiver at being moved.

{child_name} said thank you and turned to leave, already half-lost in the ownership of it, already picturing the needle pointing the way home. And then the shopkeeper's voice: "Hang on. Don't forget these."

Two coins dropped, one after the other, back into {child_name}'s palm.

{child_name} stood very still.

It did not fit. It went against the entire shape of the thing. Buying, as far as {child_name} had ever understood it, ran in one direction only: coins out, object in, the pouch a little lighter every time. That was simply the arithmetic of the world. Yet here were two coins moving upstream, still holding the warmth of the shopkeeper's hand, sitting in {child_name}'s palm as though they had thought better of leaving and doubled back.

"I think you've made a mistake," {child_name} said — carefully, because it felt rude to argue with a grown-up over money, and ruder still to be wrong about it. "I already paid you. Why are you giving me coins back?"

From the sill by the window, where it had been watching the whole careful performance, {companion_name} crossed to the counter and settled at {child_name}'s elbow, near the {object_motif} that lay beside the till.

"No mistake anywhere," said {companion_name}. "Just arithmetic doing its job. You walked in with five. The compass cost three. Five, take away three."

"Two," {child_name} said.

"Two," said {companion_name}. "Which were never really the compass's to keep. They were always going to turn around and come back to you. That is called change."

{child_name} turned the word over slowly, the way you turn a stone to see the underside. Change. So this was a thing with a name — this quiet reversal at the end of a purchase, this handing-back. It reorganized something in {child_name}'s head. You did not, it turned out, have to arrive with the exact price counted out to the last coin, anxious and precise. You could bring more than enough, offer it up in good faith, and trust the counter to sort the difference and send the remainder home. The stall was not a place where coins simply disappeared. It was a place where they were weighed against a price, and whatever was extra came back.

And then {child_name} actually looked at the two coins, and the looking changed everything.

One of them was small. Noticeably smaller than its companion, and dull-faced, worn soft around the rim — the exact sort of coin your eye slides past, the sort you might let roll away under the shelving and not bother to chase, judging it the least of what you held.

{companion_name} was watching {child_name}'s expression shift. "You've seen a coin like that before," it said, more quietly now. "You know something about it that most people don't."

And {child_name} did. It came back all at once — the thing the two of them had puzzled out together not so long ago, the secret hiding in plain sight at the bottom of every pouch: that a coin's worth is not written in its size or its polish, that the plainest, smallest coin can carry more value than the broadest and the brightest. {child_name} had been proud of learning it. And now, look — here was exactly such a coin, folded invisibly into the change, so easy to dismiss that a person who didn't know better might have counted it as almost nothing at all.

But {child_name} knew better. That was the whole point of having learned it.

So {child_name} did not tip the two coins loosely into the pouch. The small one went in first, deliberately, the way you set down something whose value only you can see. The larger coin followed, and the two of them met at the bottom with a small companionable click.

"So change isn't just the leftover part," {child_name} said, thinking it through out loud, unwilling to let the idea go before it was fully caught. "It isn't the scraps. The best coin I own might come back inside the change — and if I weren't paying attention, I'd walk out thinking I'd only been handed spare bits."

{companion_name} tilted toward {child_name}, plainly pleased. "That," it said, "is the difference between counting coins and actually reading them."

Outside, the afternoon had gone long and low over {setting}, and a good steady wind was walking across the open ground. {child_name} held the compass flat on one palm and let the needle settle. It swung, wavered, and came to rest, sure of itself, pointing off toward home. {child_name} smiled at that — at the small ordinary miracle of a thing that knew its own direction — and rested the other hand on the pouch, where two saved coins sat waiting, one of them worth far more than its size would ever admit.

A compass that truly pointed. Two coins carried home that could so easily have been left behind. And a new word, learned standing at a counter alone: bigger than it sounded, richer than it looked, and now, unmistakably, {child_name}'s own.

{refrain}.` },
},
    callback: 'Some coins are worth more than they look (Level 2)', ageFloor: 4,
    audioTemplate: `A small {hero} had been collecting {object_motif}s for three whole nights. There were five now, and there was one thing they wanted: the spotted shell at the market stall.

"It costs three," said the shopkeeper.

The {hero} held out all five. "I only have these."

"Then I'll give you something back," said the shopkeeper — and placed two coins in the {hero}'s hand.

"Those are mine?" said the {hero}, surprised.

{companion_name} leaned close. "That is called change. When you give more than something costs, the difference comes back to you. You paid five, the shell cost three — so two return."

The {hero} looked at the shell, and then at the two coins, and understood something new: trading is a kind of conversation, and change is the honest reply.

"And remember," said {companion_name}, "the two you got back — one of them is worth more than it looks. You learned that already."

The {hero} smiled. They were getting good at this.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had been collecting {object_motif}s for three whole nights. There were five now, and there was one thing they wanted: the spotted shell at the market stall.

"It costs three," said the shopkeeper.

{child_name} held out all five. "I only have these."

"Then I'll give you something back," said the shopkeeper — and placed two coins in {child_name}'s hand.

"Those are mine?" said {child_name}, surprised.

{companion_name} leaned close. "That is called change. When you give more than something costs, the difference comes back to you. You paid five, the shell cost three — so two return."

{child_name} looked at the shell, and then at the two coins, and understood something new: trading is a kind of conversation, and change is the honest reply.

"And remember," said {companion_name}, "the two you got back — one of them is worth more than it looks. You learned that already."

{child_name} smiled. They were getting good at this.

{refrain}.`,
  },
  {
    ordinal: 4, title: 'Saving for the Big Thing',
    concept: 'Saving small amounts over time leads to something bigger',
    summary: 'The hero wants a silver lantern that costs ten coins but only has one. Night after night they search and save — and their companion counts alongside without helping find the coins. By the eighth night they have ten, and the lantern is finally theirs. The story draws a direct line back to coin values learned in Level 2.',
    teachingNote: 'Delayed gratification is hardest to teach directly — this story makes a child feel the satisfaction of waiting, which is the whole lesson.',
    learningBeat: 'Saving is just choosing tomorrow over today',
    ageVariants: {
  '3-4': {
    audioTemplate: `In the {setting}, the {hero} found the big thing. It sat up high on the top shelf of the market, and it was the loveliest thing the {hero} had ever seen. But it cost ten whole coins.

The {hero} had just one coin — a single {object_motif}, cool and round in one paw. Just one. Ten felt as far away as the moon.

That night {companion_name} curled up close. 'Ten is a lot,' {companion_name} said softly. 'But we can count our way there, you and me. One tonight, and then we wait for tomorrow.'

The {hero} tucked the coin into a little cup beside the bed. {companion_name} peeked inside and counted. 'One. Saving is just choosing tomorrow over today.'

So the {hero} began to look. Under smooth stones. Behind old doors. In every quiet corner of the {setting}. Each night, one more coin went clink into the cup.

'Two,' counted {companion_name}. 'Three.' But {companion_name} never once dropped a coin in for the {hero}. {companion_name} only counted. The finding was the {hero}'s own job to do.

Some coins were fat and some were thin. The {hero} remembered a coin's size is not the same as what a coin is worth, so the little ones went in the cup too.

Some nights the {hero} searched and searched and found nothing at all. The cup stayed just the same. Waiting was the hardest part. Every day the big thing still sat up on the shelf.

'Four. Five. Six,' the nights went by. 'Seven.' The cup grew heavier and heavier.

On the eighth night, the {hero} slipped the {object_motif} in — the very last one. {companion_name} leaned right over the cup and counted, slow and sure. 'Eight. Nine. Ten.'

Ten!

In the morning the {hero} carried the heavy cup to the market and reached up high. The big thing came down off the shelf and into two happy paws at last. It had been worth every single waiting night.

{companion_name} gave a proud, sleepy yawn. And as the {hero} snuggled down with the big thing held close, {companion_name} whispered it one more time, soft as the {setting} at night.

{refrain}.`,
    scriptTemplate: `In the {setting}, {child_name} found the big thing. It sat up high on the top shelf of the market, and it was the loveliest thing {child_name} had ever seen. But it cost ten whole coins.

{child_name} had just one coin — a single {object_motif}, cool and round in one paw. Just one. Ten felt as far away as the moon.

That night {companion_name} curled up close. 'Ten is a lot,' {companion_name} said softly. 'But we can count our way there, you and me. One tonight, and then we wait for tomorrow.'

{child_name} tucked the coin into a little cup beside the bed. {companion_name} peeked inside and counted. 'One. Saving is just choosing tomorrow over today.'

So {child_name} began to look. Under smooth stones. Behind old doors. In every quiet corner of the {setting}. Each night, one more coin went clink into the cup.

'Two,' counted {companion_name}. 'Three.' But {companion_name} never once dropped a coin in for {child_name}. {companion_name} only counted. The finding was {child_name}'s own job to do.

Some coins were fat and some were thin. {child_name} remembered a coin's size is not the same as what a coin is worth, so the little ones went in the cup too.

Some nights {child_name} searched and searched and found nothing at all. The cup stayed just the same. Waiting was the hardest part. Every day the big thing still sat up on the shelf.

'Four. Five. Six,' the nights went by. 'Seven.' The cup grew heavier and heavier.

On the eighth night, {child_name} slipped the {object_motif} in — the very last one. {companion_name} leaned right over the cup and counted, slow and sure. 'Eight. Nine. Ten.'

Ten!

In the morning {child_name} carried the heavy cup to the market and reached up high. The big thing came down off the shelf and into two happy paws at last. It had been worth every single waiting night.

{companion_name} gave a proud, sleepy yawn. And as {child_name} snuggled down with the big thing held close, {companion_name} whispered it one more time, soft as the {setting} at night.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The big thing sat on the highest shelf in the market at the edge of the {setting}. The {hero} had wanted it for as long as anyone could remember. The trouble was the price: ten coins, chalked on a little wooden tag. And the {hero} had exactly one.

Just one coin: a single {object_motif}, cool in one paw. The {hero} turned it over and over. Ten seemed less like a number and more like a faraway country.

That night, {companion_name} settled onto the end of the bed, tail tucked, eyes bright. 'Ten coins,' {companion_name} said. 'That's a mountain when you're standing at the bottom. But mountains get climbed one small step at a time. Drop what you have into a jar, and let's begin.'

The {hero} found an empty jar and let the first coin fall. Clink. {companion_name} watched it settle. 'One. Saving is just choosing tomorrow over today.'

'Tomorrow?' The {hero} thought of all the small things one coin could buy right now — a sweet from the stall, a ribbon, a paper whistle. Any of them would be fun tonight.

'Any of them,' {companion_name} agreed gently. 'And then the jar would be empty again, and the big thing still up on its shelf. Your choice, every night.'

So the {hero} chose the jar. And then the searching began. Each evening, before the {setting} went dark, the {hero} hunted — under stones, along the paths, in the folds of forgotten corners. Sometimes a coin turned up. Sometimes none did.

The first find came in a crack between two stones — the {object_motif} so small the {hero} nearly missed it. The next hid inside a folded leaf. Some nights the {setting} gave up a coin easily; other nights it gave nothing, and the {hero} came home with empty paws and a heavy heart. On those nights {companion_name} only said the number already in the jar, and that number had to be enough for now.

Every night, {companion_name} counted what was there, and only counted. 'Two.' 'Three.' Never once did {companion_name} slip a coin into the jar to help it along. 'These have to be yours,' {companion_name} said. 'Counting I can do. Finding is yours.'

The coins were all different. Some were broad as buttons, some no bigger than a seed. The {hero} almost left the tiny ones behind — until remembering, from not so long ago, that a coin's size and a coin's worth are two different things. The smallest one might count as much as the largest. In they all went.

'Four.' 'Five.' The waiting was the hard part. On the fifth night the {hero} passed the sweet stall and nearly, nearly spent a coin. But the jar was so close to something bigger now. The paw closed. The stall smells followed the {hero} all the way home.

'Six.' 'Seven.' The jar grew heavy enough to feel it lift.

On the eighth night, the {hero} came home with one last coin and let the {object_motif} fall. {companion_name} leaned over the rim and counted slowly, so there could be no mistake. 'Eight. Nine. Ten.'

Ten. Not found all at once, not handed over, but gathered — a whole mountain climbed, one small step at a time.

In the morning the {hero} carried the jar to the market, heavier than it had ever been, and set every coin on the counter, one by one. The keeper reached up to the highest shelf and brought the big thing down. It felt even better than the {hero} had imagined, because eight patient nights were folded up inside it. Nothing bought in a hurry could have felt like that.

{companion_name} gave a slow, satisfied blink. As the {hero} carried the big thing home through the quiet {setting}, {companion_name} said it once more, softly, just to seal the day.

{refrain}.`,
    scriptTemplate: `The big thing sat on the highest shelf in the market at the edge of the {setting}. {child_name} had wanted it for as long as anyone could remember. The trouble was the price: ten coins, chalked on a little wooden tag. And {child_name} had exactly one.

Just one coin: a single {object_motif}, cool in one paw. {child_name} turned it over and over. Ten seemed less like a number and more like a faraway country.

That night, {companion_name} settled onto the end of the bed, tail tucked, eyes bright. 'Ten coins,' {companion_name} said. 'That's a mountain when you're standing at the bottom. But mountains get climbed one small step at a time. Drop what you have into a jar, and let's begin.'

{child_name} found an empty jar and let the first coin fall. Clink. {companion_name} watched it settle. 'One. Saving is just choosing tomorrow over today.'

'Tomorrow?' {child_name} thought of all the small things one coin could buy right now — a sweet from the stall, a ribbon, a paper whistle. Any of them would be fun tonight.

'Any of them,' {companion_name} agreed gently. 'And then the jar would be empty again, and the big thing still up on its shelf. Your choice, every night.'

So {child_name} chose the jar. And then the searching began. Each evening, before the {setting} went dark, {child_name} hunted — under stones, along the paths, in the folds of forgotten corners. Sometimes a coin turned up. Sometimes none did.

The first find came in a crack between two stones — the {object_motif} so small {child_name} nearly missed it. The next hid inside a folded leaf. Some nights the {setting} gave up a coin easily; other nights it gave nothing, and {child_name} came home with empty paws and a heavy heart. On those nights {companion_name} only said the number already in the jar, and that number had to be enough for now.

Every night, {companion_name} counted what was there, and only counted. 'Two.' 'Three.' Never once did {companion_name} slip a coin into the jar to help it along. 'These have to be yours,' {companion_name} said. 'Counting I can do. Finding is yours.'

The coins were all different. Some were broad as buttons, some no bigger than a seed. {child_name} almost left the tiny ones behind — until remembering, from not so long ago, that a coin's size and a coin's worth are two different things. The smallest one might count as much as the largest. In they all went.

'Four.' 'Five.' The waiting was the hard part. On the fifth night {child_name} passed the sweet stall and nearly, nearly spent a coin. But the jar was so close to something bigger now. The paw closed. The stall smells followed {child_name} all the way home.

'Six.' 'Seven.' The jar grew heavy enough to feel it lift.

On the eighth night, {child_name} came home with one last coin and let the {object_motif} fall. {companion_name} leaned over the rim and counted slowly, so there could be no mistake. 'Eight. Nine. Ten.'

Ten. Not found all at once, not handed over, but gathered — a whole mountain climbed, one small step at a time.

In the morning {child_name} carried the jar to the market, heavier than it had ever been, and set every coin on the counter, one by one. The keeper reached up to the highest shelf and brought the big thing down. It felt even better than {child_name} had imagined, because eight patient nights were folded up inside it. Nothing bought in a hurry could have felt like that.

{companion_name} gave a slow, satisfied blink. As {child_name} carried the big thing home through the quiet {setting}, {companion_name} said it once more, softly, just to seal the day.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `At the top of the market, on a shelf too high to reach without the keeper's ladder, sat the big thing. The {hero} had stopped in front of it every single day that summer. It cost ten coins. That was the number chalked beside it, and it might as well have been a hundred, because the {hero} owned exactly one coin — a single {object_motif}, worn smooth from being turned over so many times.

One coin. Ten needed. The {hero} did the sum on both paws and came up short every way it could be done.

It was not that the {hero} wanted just anything. It was this one thing, the big thing, that had lived in the {hero}'s imagination since the first day of summer. Wanting it was easy. Wanting it was the whole problem. Wanting did not put coins in a jar.

That night, {companion_name} hopped up onto the windowsill where the {setting} spread out dark and wide. 'Here is the thing about ten,' {companion_name} said. 'You will never have it all at once. You will only ever have it the way you get everything worth having — a little at a time, and then a little more.' {companion_name} nudged an empty jar across the sill. 'Put your one coin in. That is not nothing. That is the beginning of ten.'

The {hero} dropped the {object_motif} into the jar. It sounded very small and very alone at the bottom. {companion_name} peered in and counted. 'One. Saving is just choosing tomorrow over today.'

The choosing turned out to be the hard part. The very next evening, the {hero} found a second coin wedged under a doorstep — and passed a stall selling warm, twisted pastries that smelled like the best idea in the world. One coin. One pastry. It would be gone in four bites and the jar would be back to one.

The {hero} stood there a long time. Then walked home with both coins still in paw and added the second to the jar. 'Two,' said {companion_name}, and nothing more. {companion_name} did not clap or make a fuss. {companion_name} simply counted what the {hero} had chosen to keep.

That became the shape of the nights. The {hero} searched — under the boards of the old pier, in the seams of the {setting}, wherever a coin might have slipped and been forgotten. {companion_name} came along on every hunt, eyes just as sharp, and never once picked up a coin and dropped it in the jar. 'If I found them for you,' {companion_name} said, 'they would not be yours. You would just be holding my ten. This has to be your ten.'

Some coins were broad as a saucer. Some were tiny, barely a chip. The {hero} nearly tossed the small ones aside — then remembered something learned not long ago: a coin's size and a coin's worth are not the same thing. The littlest coin might be worth more than the widest. So every coin went into the jar, big and small alike.

There were nights that tested the whole plan. One evening the {hero} searched from dusk until the lamps were lit and found nothing at all — not one coin anywhere. The jar sat on the sill exactly as full as the night before, which felt, for a moment, like going backward. {companion_name} only said the same number as the last time, gently, as if to say the number had not shrunk. It had simply waited, the way the {hero} was learning to wait.

'Three.' 'Four.' 'Five.' The jar filled slowly, one night at a time. And each night the market tried to talk the {hero} out of it. A ribbon the color of the evening sky. A whistle that trilled like a bird. A bag of sugared nuts. Each cost a coin. Each would have been wonderful for an evening. And each would have set the jar back to where it had been days before.

On the fifth night, the {hero} came very close. The sugared nuts smelled so good, and five nights of waiting felt so long. The paw actually went into the jar. Then it stopped. Five coins was halfway. Halfway was too far to fall back from. The {hero} closed the jar and walked past the stall without looking twice.

'Six.' 'Seven.' The jar had real weight to it now. The {hero} could shake it and hear the coins jostle, a thick and satisfying sound. Eight was so close it was hard to sleep.

On the eighth night, the {hero} found the last coin caught in the roots of an old tree at the edge of the {setting}. Home in a hurry, into the jar it went. {companion_name} leaned over the rim and counted, slow and careful, so there could be no doubt at all. 'Eight. Nine. Ten.'

Ten. Not lucky, not given, not found all in one place — earned, one patient night after another.

In the morning the {hero} carried the heavy jar to the market and poured all ten coins onto the counter. The keeper counted them, smiled, and climbed the ladder. The big thing came down at last and settled into the {hero}'s arms, and it was better than every daydream — heavier, realer, and stitched all through with eight nights of not giving up. The {hero} held it a moment before anything else, just to feel that it was finally, truly there.

{companion_name} watched from the doorway with a slow, pleased blink. And walking home through the waking {setting}, the big thing held tight, the {hero} heard {companion_name} say it one last time, quiet and sure.

{refrain}.`,
    scriptTemplate: `At the top of the market, on a shelf too high to reach without the keeper's ladder, sat the big thing. {child_name} had stopped in front of it every single day that summer. It cost ten coins. That was the number chalked beside it, and it might as well have been a hundred, because {child_name} owned exactly one coin — a single {object_motif}, worn smooth from being turned over so many times.

One coin. Ten needed. {child_name} did the sum on both paws and came up short every way it could be done.

It was not that {child_name} wanted just anything. It was this one thing, the big thing, that had lived in {child_name}'s imagination since the first day of summer. Wanting it was easy. Wanting it was the whole problem. Wanting did not put coins in a jar.

That night, {companion_name} hopped up onto the windowsill where the {setting} spread out dark and wide. 'Here is the thing about ten,' {companion_name} said. 'You will never have it all at once. You will only ever have it the way you get everything worth having — a little at a time, and then a little more.' {companion_name} nudged an empty jar across the sill. 'Put your one coin in. That is not nothing. That is the beginning of ten.'

{child_name} dropped the {object_motif} into the jar. It sounded very small and very alone at the bottom. {companion_name} peered in and counted. 'One. Saving is just choosing tomorrow over today.'

The choosing turned out to be the hard part. The very next evening, {child_name} found a second coin wedged under a doorstep — and passed a stall selling warm, twisted pastries that smelled like the best idea in the world. One coin. One pastry. It would be gone in four bites and the jar would be back to one.

{child_name} stood there a long time. Then walked home with both coins still in paw and added the second to the jar. 'Two,' said {companion_name}, and nothing more. {companion_name} did not clap or make a fuss. {companion_name} simply counted what {child_name} had chosen to keep.

That became the shape of the nights. {child_name} searched — under the boards of the old pier, in the seams of the {setting}, wherever a coin might have slipped and been forgotten. {companion_name} came along on every hunt, eyes just as sharp, and never once picked up a coin and dropped it in the jar. 'If I found them for you,' {companion_name} said, 'they would not be yours. You would just be holding my ten. This has to be your ten.'

Some coins were broad as a saucer. Some were tiny, barely a chip. {child_name} nearly tossed the small ones aside — then remembered something learned not long ago: a coin's size and a coin's worth are not the same thing. The littlest coin might be worth more than the widest. So every coin went into the jar, big and small alike.

There were nights that tested the whole plan. One evening {child_name} searched from dusk until the lamps were lit and found nothing at all — not one coin anywhere. The jar sat on the sill exactly as full as the night before, which felt, for a moment, like going backward. {companion_name} only said the same number as the last time, gently, as if to say the number had not shrunk. It had simply waited, the way {child_name} was learning to wait.

'Three.' 'Four.' 'Five.' The jar filled slowly, one night at a time. And each night the market tried to talk {child_name} out of it. A ribbon the color of the evening sky. A whistle that trilled like a bird. A bag of sugared nuts. Each cost a coin. Each would have been wonderful for an evening. And each would have set the jar back to where it had been days before.

On the fifth night, {child_name} came very close. The sugared nuts smelled so good, and five nights of waiting felt so long. The paw actually went into the jar. Then it stopped. Five coins was halfway. Halfway was too far to fall back from. {child_name} closed the jar and walked past the stall without looking twice.

'Six.' 'Seven.' The jar had real weight to it now. {child_name} could shake it and hear the coins jostle, a thick and satisfying sound. Eight was so close it was hard to sleep.

On the eighth night, {child_name} found the last coin caught in the roots of an old tree at the edge of the {setting}. Home in a hurry, into the jar it went. {companion_name} leaned over the rim and counted, slow and careful, so there could be no doubt at all. 'Eight. Nine. Ten.'

Ten. Not lucky, not given, not found all in one place — earned, one patient night after another.

In the morning {child_name} carried the heavy jar to the market and poured all ten coins onto the counter. The keeper counted them, smiled, and climbed the ladder. The big thing came down at last and settled into {child_name}'s arms, and it was better than every daydream — heavier, realer, and stitched all through with eight nights of not giving up. {child_name} held it a moment before anything else, just to feel that it was finally, truly there.

{companion_name} watched from the doorway with a slow, pleased blink. And walking home through the waking {setting}, the big thing held tight, {child_name} heard {companion_name} say it one last time, quiet and sure.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The big thing had sat on the highest shelf of the market for as long as the {hero} could remember, and for most of that time it had simply been part of the scenery — a thing that existed, the way the tide existed, without any particular claim on anyone. Then one grey afternoon the {hero} really looked at it, and after that it was impossible to un-want. It cost ten coins. The keeper had chalked the number on a little slate, and the number did not move, did not soften, did not care in the slightest that the {hero} had exactly one coin to its name.

One coin: a single {object_motif}, worn smooth from being carried in a pocket and taken out and turned over on all the long walks home. The {hero} could make one coin do a great many things in the imagination. It could not, no matter how the {hero} arranged the arithmetic, become ten.

The {hero} said none of this out loud, but {companion_name} had a way of noticing. That night {companion_name} came and sat on the windowsill, where the whole {setting} lay out under the early stars, and let the quiet stretch for a while before speaking. 'Ten is not a wall,' {companion_name} said at last. 'It only looks like a wall from here. Up close it is ten separate ones, and you already have the first. Find a jar. Put the coin in. Then we will see about the rest.'

So the {hero} found a jar — an old one, with a chip in the rim — and dropped the coin inside. It struck the glass bottom with a thin, lonely sound. {companion_name} looked in over the edge and counted, without ceremony. 'One. Saving is just choosing tomorrow over today.'

It was a small sentence, and the {hero} did not think much of it until the choosing actually began, which it did the very next evening. The {hero} found a second coin — pried it out from between two paving stones — and on the walk home passed the row of stalls where the market kept all its small, immediate pleasures. There was a paper kite. There was a twist of hot bread. There was a whistle carved from reed that made a sound like a bird deciding something. Any one of them cost a single coin, and any one of them could be had tonight, warm and real and finished, while the big thing stayed exactly where it was, high and distant and eight coins away.

That was the pull, and it was stronger than the {hero} had expected. Tomorrow was an idea. The kite was right there. The {hero} stood in front of the stalls longer than made sense, one coin growing warm in a closed paw, and understood for the first time that saving was not one decision made once. It was the same decision made again and again, on nights when nobody was watching and the reward was very far away.

The {hero} walked home with both coins and added the second to the jar. 'Two,' said {companion_name}, and left it at that — no praise, no fuss, only the count. It was clear by now that {companion_name} would never do more than count. On the hunts that followed, {companion_name} came along every time, eyes as quick as the {hero}'s, and would spot a coin glinting in the dark and say nothing, wait, let the {hero} be the one to reach down and pick it up. 'If these were my coins I dropped in your jar,' {companion_name} said once, 'the jar would fill just as fast, and it would mean nothing at all. The waiting is the part that makes it yours.'

So the nights took on a shape. The {hero} searched the places coins go to be forgotten — the gaps under the old pier, the roots at the edge of the {setting}, the soft seams where the paths met the walls. Some nights turned up a coin. Some nights turned up two. And some nights, after hours of looking, turned up nothing at all, and the {hero} came home with empty paws and set the same jar on the same sill, no fuller than before. Those were the nights that tested the plan, more than any stall ever did.

One of those empty nights, the {hero} sat on the sill a long while, wondering whether the whole idea had been foolish — whether the big thing would sell before the tenth coin ever came, whether ten was simply more than a small pocket could hold. {companion_name} said nothing wise. {companion_name} only settled close, warm against the {hero}'s side, and after a time the doubt loosened its grip the way doubts do in the dark, and the {hero} decided to look again the next night, and the night after that.

The coins themselves were a lesson the {hero} had already half-learned. Some were broad as a shell, heavy in the paw and impressive to look at. Others were no bigger than a fingernail, easy to overlook and easy to dismiss. The {hero} nearly left the small ones lying more than once — until remembering what turned out to be true not so long ago: a coin's size and a coin's worth are two entirely different things, and the plainest, smallest coin might carry more than the grandest. After that, every coin went into the jar, and the {hero} stopped judging them by how they looked.

'Three.' 'Four.' 'Five.' The jar filled the only way it could, which was slowly, and the market never once stopped making its offers. The kite reappeared in new colors.There were sugared nuts that smelled, on a cold evening, like the single best thing in the world. There was a little brass top that spun for a full minute without wobbling. Each cost a coin. Each was wonderful. And each, the {hero} had come to understand, would have quietly undone whole nights of patience in the time it took to hand a coin across a counter.

The fifth night was the hardest. The {hero} had five coins by then — halfway, exactly — and halfway is a strange, difficult place, close enough to see the far shore and far enough that the far shore still looks impossible. The sugared nuts were right there. Five nights felt like a very long time to a paw that wanted something now. The {hero} actually opened the jar. Actually counted three coins out into a palm. And then sat with them a moment, feeling their small weight, and thought about the eighth night, and what it would feel like to have crossed all the way over instead of turning back at the middle. The coins went back in the jar. The lid went on. The {hero} walked home the long way, past no stalls at all.

'Six.' 'Seven.' The jar had a real heft to it now, a proper sound when it was lifted and set down. The {hero} took to holding it in the dark before sleep, not to spend it, just to feel how far one coin had come. Eight coins. Then nine, on the seventh night, found in the lining of an old coat that had been hanging by the door the whole time.

On the eighth night, the {hero} went out already almost sure it would happen, and found the last coin caught in the roots of the old tree at the far edge of the {setting}, as though it had been waiting there the entire while. Home, quickly, up the stairs, the {object_motif} into the jar. {companion_name} leaned over the chipped rim and counted the way {companion_name} always had — slowly, carefully, giving each number its full weight, so there could be no mistake and no rushing past the end of it. 'Eight. Nine. Ten.'

Ten. Not luck, not a gift, not one bright afternoon that changed everything — just a chipped glass jar that had been filled the slow way, one night at a time, until it held exactly enough.

In the morning the {hero} carried the jar down to the market, heavier now than it had felt in weeks, and poured all ten coins across the counter in a single bright clatter. The keeper counted them without hurry, nodded, and set the ladder against the shelf. And then the big thing came down out of the high place where it had lived for so long, and settled into the {hero}'s arms, and it was — this was the surprising part — better than the wanting had been. Not because it was grander than imagined. Because every one of those eight nights was somehow inside it now, and a thing you have waited for and chosen and earned sits differently in your arms than a thing simply handed over.

{companion_name} watched from the top of the stairs, tail curled, and gave one slow, satisfied blink, as if the ending had never once been in doubt. And as the {hero} carried the big thing up into the last of the morning quiet, {companion_name} said it a final time, low and certain, the way you say a thing that has just been proven true.

{refrain}.`,
    scriptTemplate: `The big thing had sat on the highest shelf of the market for as long as {child_name} could remember, and for most of that time it had simply been part of the scenery — a thing that existed, the way the tide existed, without any particular claim on anyone. Then one grey afternoon {child_name} really looked at it, and after that it was impossible to un-want. It cost ten coins. The keeper had chalked the number on a little slate, and the number did not move, did not soften, did not care in the slightest that {child_name} had exactly one coin to its name.

One coin: a single {object_motif}, worn smooth from being carried in a pocket and taken out and turned over on all the long walks home. {child_name} could make one coin do a great many things in the imagination. It could not, no matter how {child_name} arranged the arithmetic, become ten.

{child_name} said none of this out loud, but {companion_name} had a way of noticing. That night {companion_name} came and sat on the windowsill, where the whole {setting} lay out under the early stars, and let the quiet stretch for a while before speaking. 'Ten is not a wall,' {companion_name} said at last. 'It only looks like a wall from here. Up close it is ten separate ones, and you already have the first. Find a jar. Put the coin in. Then we will see about the rest.'

So {child_name} found a jar — an old one, with a chip in the rim — and dropped the coin inside. It struck the glass bottom with a thin, lonely sound. {companion_name} looked in over the edge and counted, without ceremony. 'One. Saving is just choosing tomorrow over today.'

It was a small sentence, and {child_name} did not think much of it until the choosing actually began, which it did the very next evening. {child_name} found a second coin — pried it out from between two paving stones — and on the walk home passed the row of stalls where the market kept all its small, immediate pleasures. There was a paper kite. There was a twist of hot bread. There was a whistle carved from reed that made a sound like a bird deciding something. Any one of them cost a single coin, and any one of them could be had tonight, warm and real and finished, while the big thing stayed exactly where it was, high and distant and eight coins away.

That was the pull, and it was stronger than {child_name} had expected. Tomorrow was an idea. The kite was right there. {child_name} stood in front of the stalls longer than made sense, one coin growing warm in a closed paw, and understood for the first time that saving was not one decision made once. It was the same decision made again and again, on nights when nobody was watching and the reward was very far away.

{child_name} walked home with both coins and added the second to the jar. 'Two,' said {companion_name}, and left it at that — no praise, no fuss, only the count. It was clear by now that {companion_name} would never do more than count. On the hunts that followed, {companion_name} came along every time, eyes as quick as {child_name}'s, and would spot a coin glinting in the dark and say nothing, wait, let {child_name} be the one to reach down and pick it up. 'If these were my coins I dropped in your jar,' {companion_name} said once, 'the jar would fill just as fast, and it would mean nothing at all. The waiting is the part that makes it yours.'

So the nights took on a shape. {child_name} searched the places coins go to be forgotten — the gaps under the old pier, the roots at the edge of the {setting}, the soft seams where the paths met the walls. Some nights turned up a coin. Some nights turned up two. And some nights, after hours of looking, turned up nothing at all, and {child_name} came home with empty paws and set the same jar on the same sill, no fuller than before. Those were the nights that tested the plan, more than any stall ever did.

One of those empty nights, {child_name} sat on the sill a long while, wondering whether the whole idea had been foolish — whether the big thing would sell before the tenth coin ever came, whether ten was simply more than a small pocket could hold. {companion_name} said nothing wise. {companion_name} only settled close, warm against {child_name}'s side, and after a time the doubt loosened its grip the way doubts do in the dark, and {child_name} decided to look again the next night, and the night after that.

The coins themselves were a lesson {child_name} had already half-learned. Some were broad as a shell, heavy in the paw and impressive to look at. Others were no bigger than a fingernail, easy to overlook and easy to dismiss. {child_name} nearly left the small ones lying more than once — until remembering what turned out to be true not so long ago: a coin's size and a coin's worth are two entirely different things, and the plainest, smallest coin might carry more than the grandest. After that, every coin went into the jar, and {child_name} stopped judging them by how they looked.

'Three.' 'Four.' 'Five.' The jar filled the only way it could, which was slowly, and the market never once stopped making its offers. The kite reappeared in new colors. There were sugared nuts that smelled, on a cold evening, like the single best thing in the world. There was a little brass top that spun for a full minute without wobbling. Each cost a coin. Each was wonderful. And each, {child_name} had come to understand, would have quietly undone whole nights of patience in the time it took to hand a coin across a counter.

The fifth night was the hardest. {child_name} had five coins by then — halfway, exactly — and halfway is a strange, difficult place, close enough to see the far shore and far enough that the far shore still looks impossible. The sugared nuts were right there. Five nights felt like a very long time to a paw that wanted something now. {child_name} actually opened the jar. Actually counted three coins out into a palm. And then sat with them a moment, feeling their small weight, and thought about the eighth night, and what it would feel like to have crossed all the way over instead of turning back at the middle. The coins went back in the jar. The lid went on. {child_name} walked home the long way, past no stalls at all.

'Six.' 'Seven.' The jar had a real heft to it now, a proper sound when it was lifted and set down. {child_name} took to holding it in the dark before sleep, not to spend it, just to feel how far one coin had come. Eight coins. Then nine, on the seventh night, found in the lining of an old coat that had been hanging by the door the whole time.

On the eighth night, {child_name} went out already almost sure it would happen, and found the last coin caught in the roots of the old tree at the far edge of the {setting}, as though it had been waiting there the entire while. Home, quickly, up the stairs, the {object_motif} into the jar. {companion_name} leaned over the chipped rim and counted the way {companion_name} always had — slowly, carefully, giving each number its full weight, so there could be no mistake and no rushing past the end of it. 'Eight. Nine. Ten.'

Ten. Not luck, not a gift, not one bright afternoon that changed everything — just a chipped glass jar that had been filled the slow way, one night at a time, until it held exactly enough.

In the morning {child_name} carried the jar down to the market, heavier now than it had felt in weeks, and poured all ten coins across the counter in a single bright clatter. The keeper counted them without hurry, nodded, and set the ladder against the shelf. And then the big thing came down out of the high place where it had lived for so long, and settled into {child_name}'s arms, and it was — this was the surprising part — better than the wanting had been. Not because it was grander than imagined. Because every one of those eight nights was somehow inside it now, and a thing you have waited for and chosen and earned sits differently in your arms than a thing simply handed over.

{companion_name} watched from the top of the stairs, tail curled, and gave one slow, satisfied blink, as if the ending had never once been in doubt. And as {child_name} carried the big thing up into the last of the morning quiet, {companion_name} said it a final time, low and certain, the way you say a thing that has just been proven true.

{refrain}.`
  }
},
    callback: "A coin's value and its size are different things (Level 2)", ageFloor: 4,
    audioTemplate: `A small {hero} had found one {object_motif} in {setting}, and there was something they wanted very much: the silver lantern at the far end of the market. It would light up the whole corner of the room.

The lantern cost ten.

The {hero} counted. One.

"That is not enough yet," said {companion_name} kindly. "But it is a beginning."

Every evening that week, the {hero} looked carefully and saved one more. And each night, {companion_name} was there — not to help find them, but to count alongside.

By the fifth night there were six. By the seventh, nine.

"Saving is just choosing tomorrow over today," said {companion_name} one evening. "One coin at a time. Do you remember how we learned that some coins are worth more than others? Every one you put aside is working harder than it looks."

On the eighth night, the {hero} counted ten. The lantern was theirs.

That night it lit {setting} with a warm and steady glow — the glow of something waited for.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had found one {object_motif} in {setting}, and there was something they wanted very much: the silver lantern at the far end of the market.

The lantern cost ten.

{child_name} counted. One.

"That is not enough yet," said {companion_name} kindly. "But it is a beginning."

Every evening that week, {child_name} looked carefully and saved one more. And each night, {companion_name} was there — not to help find them, but to count alongside.

By the fifth night there were six. By the seventh, nine.

"Saving is just choosing tomorrow over today," said {companion_name} one evening. "One coin at a time. Do you remember how we learned that some coins are worth more than others? Every one you put aside is working harder than it looks."

On the eighth night, {child_name} counted ten. The lantern was theirs.

That night it lit {setting} with a warm and steady glow — the glow of something waited for.

{refrain}.`,
  },
  {
    ordinal: 5, title: 'Wants and Needs',
    concept: 'Some things we need; some we want. Knowing the difference is a skill.',
    summary: "With exactly enough coins for either a sparkly toy or a warm meal, the hero must choose. Their companion doesn't tell them what to pick — they ask one quiet question: is this a want, or a need? The hero thinks it through and decides. The story calls back directly to the saving journey in Level 4.",
    teachingNote: 'This level is the capstone: a child who can distinguish wants from needs has every concept from the path — identification, value, exchange, saving — working together in a real decision.',
    learningBeat: 'Wanting things is not wrong',
    ageVariants: {
  '3-4': { audioTemplate: `The night was quiet, and the {hero} walked through {setting} with a small pouch of coins.

For many days the {hero} had saved. One coin, then another, dropped softly into the pouch, day after day, until at last it was heavy and full. The long saving was done, and it had not been easy.

Now, out of the whole heavy pouch, there was just enough for one thing. Only one, and not a coin more.

At the little stall, two things waited side by side. A warm bowl of soup, steaming and good. And a small toy that spun and whistled and hopped.

The {hero} looked at the toy. Oh, the toy was fun! The {hero} had dreamed of a toy just like it, and one hand reached out toward it.

Then the {hero} looked at the soup, and the tummy inside gave a soft, empty rumble.

"I have enough coins for the soup, or for the toy," said the {hero}. "But not for both. I have to pick just one."

{companion_name} sat close by in the quiet and asked one small question. "Is that a want, or a need?"

The {hero} stopped and thought hard. The toy would be fun for a while. But the night was long and cold, and only the soup could fill the empty tummy and keep the {hero} warm until morning.

"The soup is a need," said the {hero} slowly. "The toy is only a want. Tonight I will take the soup."

"Wanting things is not wrong," said {companion_name} softly. "The toy is lovely. The trick is knowing which is which, and you knew all by yourself."

The {hero} held the {object_motif} tight for one more moment. Then, with a slow breath, the {hero} set the coins on the counter and reached for the warm bowl.

The soup was good and hot. It filled the {hero} right up, and the hollow feeling melted away, and the cold night did not feel so cold.

The toy still spun on the stall. Another day, when the pouch was full again, there could be a night for wants. But tonight the {hero} had chosen well.

{refrain}.`, scriptTemplate: `The night was quiet, and {child_name} walked through {setting} with a small pouch of coins.

For many days {child_name} had saved. One coin, then another, dropped softly into the pouch, day after day, until at last it was heavy and full. The long saving was done, and it had not been easy.

Now, out of the whole heavy pouch, there was just enough for one thing. Only one, and not a coin more.

At the little stall, two things waited side by side. A warm bowl of soup, steaming and good. And a small toy that spun and whistled and hopped.

{child_name} looked at the toy. Oh, the toy was fun! {child_name} had dreamed of a toy just like it, and one hand reached out toward it.

Then {child_name} looked at the soup, and the tummy inside gave a soft, empty rumble.

"I have enough coins for the soup, or for the toy," said {child_name}. "But not for both. I have to pick just one."

{companion_name} sat close by in the quiet and asked one small question. "Is that a want, or a need?"

{child_name} stopped and thought hard. The toy would be fun for a while. But the night was long and cold, and only the soup could fill the empty tummy and keep {child_name} warm until morning.

"The soup is a need," said {child_name} slowly. "The toy is only a want. Tonight I will take the soup."

"Wanting things is not wrong," said {companion_name} softly. "The toy is lovely. The trick is knowing which is which, and you knew all by yourself."

{child_name} held the {object_motif} tight for one more moment. Then, with a slow breath, {child_name} set the coins on the counter and reached for the warm bowl.

The soup was good and hot. It filled {child_name} right up, and the hollow feeling melted away, and the cold night did not feel so cold.

The toy still spun on the stall. Another day, when the pouch was full again, there could be a night for wants. But tonight {child_name} had chosen well.

{refrain}.` },
  '5-6': { audioTemplate: `The evening had turned cool, and the {hero} came into {setting} with a small pouch that jingled at every step.

It had taken a long time to fill that pouch. The {hero} remembered the goal from before, the one worth saving for, and all the days of setting aside a single coin and not spending it, even when spending would have been easy. Coin by coin, the pouch had grown heavy, and now, at last, it was time to spend. That alone felt like something to be proud of.

But there was a problem the {hero} had not expected. In the whole pouch there was just enough for one thing. Exactly one, and not a coin more.

At the far stall, two things sat side by side under the evening light. On the left, a bowl of thick, warm soup, steaming gently, the kind that fills you up on a cold night. On the right, a clever little toy that spun on its point, whistled a tune, and hopped when you wound its spring.

The {hero} stared at the toy. It was wonderful. It was exactly the sort of thing the {hero} had been picturing while dropping coin after coin into the pouch, and one hand crept toward it almost on its own.

Then the {hero}'s stomach gave a low, hollow grumble, a reminder of how little there had been to eat that day. The two feelings pulled in different directions at once, the bright pull of the toy and the deep, quiet pull of hunger, and for a moment the {hero} did not know which was stronger.

The seller waited kindly and said nothing at all, leaving the choice where it belonged.

"I have enough for the soup, or enough for the toy," the {hero} said quietly, almost to no one. "But I cannot have both. Whatever I choose, the coins will be gone."

{companion_name}, who had come along the whole way, settled nearby and did not say which to pick. Instead {companion_name} asked one quiet question.

"Is that a want, or a need?"

The {hero} went still and turned the question over. The toy was a want. It would be fun tonight, and maybe fun tomorrow, and then it might sit forgotten in a corner. The soup was different. The night was long and cold, and the empty stomach would not settle on its own. Without the soup, the {hero} would go to sleep hungry.

"The toy is a want," the {hero} said slowly. "The soup is a need. And tonight I need the soup more than I want the toy."

The {hero} looked up, half expecting to be told whether that was right or wrong. But {companion_name} only smiled.

"Wanting things is not wrong," {companion_name} said. "The toy is lovely, and it was fair to want it. The skill is telling the two apart, and you just did that all by yourself."

The {hero} held the {object_motif} in a closed hand for a moment longer, feeling its small weight, feeling everything it could have bought. Then the {hero} breathed out, laid the coins on the counter, and took the warm bowl in both hands.

The soup was even better than it looked. It warmed the {hero} from the inside, spoonful by spoonful, and the hollow feeling faded, and the long night did not seem so long anymore. It was strange, but choosing the thing the {hero} truly needed felt good in a way the quick fun of the toy might not have, a warm and settled sort of good that seemed likely to last.

The toy still spun and whistled on the stall, and it was still lovely. Perhaps, when the pouch was full again, there would be a night for wants, and the {hero} could come back for it then. But tonight the {hero} had chosen well, and knew it, and that felt better than any toy.

{refrain}.`, scriptTemplate: `The evening had turned cool, and {child_name} came into {setting} with a small pouch that jingled at every step.

It had taken a long time to fill that pouch. {child_name} remembered the goal from before, the one worth saving for, and all the days of setting aside a single coin and not spending it, even when spending would have been easy. Coin by coin, the pouch had grown heavy, and now, at last, it was time to spend. That alone felt like something to be proud of.

But there was a problem {child_name} had not expected. In the whole pouch there was just enough for one thing. Exactly one, and not a coin more.

At the far stall, two things sat side by side under the evening light. On the left, a bowl of thick, warm soup, steaming gently, the kind that fills you up on a cold night. On the right, a clever little toy that spun on its point, whistled a tune, and hopped when you wound its spring.

{child_name} stared at the toy. It was wonderful. It was exactly the sort of thing {child_name} had been picturing while dropping coin after coin into the pouch, and one hand crept toward it almost on its own.

Then {child_name}'s stomach gave a low, hollow grumble, a reminder of how little there had been to eat that day. The two feelings pulled in different directions at once, the bright pull of the toy and the deep, quiet pull of hunger, and for a moment {child_name} did not know which was stronger.

The seller waited kindly and said nothing at all, leaving the choice where it belonged.

"I have enough for the soup, or enough for the toy," {child_name} said quietly, almost to no one. "But I cannot have both. Whatever I choose, the coins will be gone."

{companion_name}, who had come along the whole way, settled nearby and did not say which to pick. Instead {companion_name} asked one quiet question.

"Is that a want, or a need?"

{child_name} went still and turned the question over. The toy was a want. It would be fun tonight, and maybe fun tomorrow, and then it might sit forgotten in a corner. The soup was different. The night was long and cold, and the empty stomach would not settle on its own. Without the soup, {child_name} would go to sleep hungry.

"The toy is a want," {child_name} said slowly. "The soup is a need. And tonight I need the soup more than I want the toy."

{child_name} looked up, half expecting to be told whether that was right or wrong. But {companion_name} only smiled.

"Wanting things is not wrong," {companion_name} said. "The toy is lovely, and it was fair to want it. The skill is telling the two apart, and you just did that all by yourself."

{child_name} held the {object_motif} in a closed hand for a moment longer, feeling its small weight, feeling everything it could have bought. Then {child_name} breathed out, laid the coins on the counter, and took the warm bowl in both hands.

The soup was even better than it looked. It warmed {child_name} from the inside, spoonful by spoonful, and the hollow feeling faded, and the long night did not seem so long anymore. It was strange, but choosing the thing {child_name} truly needed felt good in a way the quick fun of the toy might not have, a warm and settled sort of good that seemed likely to last.

The toy still spun and whistled on the stall, and it was still lovely. Perhaps, when the pouch was full again, there would be a night for wants, and {child_name} could come back for it then. But tonight {child_name} had chosen well, and knew it, and that felt better than any toy.

{refrain}.` },
  '7-8': { audioTemplate: `The evening air had turned cool by the time the {hero} reached {setting}, and the small pouch of coins swung and clinked with every step.

It had taken a long while to fill that pouch. The {hero} still remembered the goal from before, the thing worth saving for, and all the days of setting aside one coin at a time and not touching it, even when spending would have been the easy thing to do. Day after day the pouch had grown heavier, and now, finally, there was enough inside to spend. That thought by itself felt wonderful, like the end of a long climb.

All the way here, the {hero} had imagined this moment, the walking-up-to-the-stall moment, the picking-something-out moment. There had even been a picture in the {hero}'s head of exactly what the coins would buy, and how good it would feel to finally hand them over. It was supposed to be simple.

But there was something the {hero} had not planned for. When the coins were counted, there was only enough for a single thing. Exactly one, and not a coin left over.

At the last stall, two things sat side by side beneath the evening light. On one side, a deep bowl of thick soup, steam curling off the top, dotted with soft vegetables, the kind of warm meal that fills you all the way up on a cold night. On the other, a small wooden toy that spun on its tip, whistled a bright little tune, and jumped and clattered when you wound its spring, so cleverly made that the {hero} laughed out loud just watching it go.

The {hero} could not stop looking at the toy. It was clever and cheerful and completely delightful, exactly the sort of thing the {hero} had pictured while dropping coin after coin into the pouch. This was the reward, wasn't it? The thing all that patience had been for. Almost without meaning to, the {hero} reached for it.

Then a slow, hollow feeling stirred in the {hero}'s stomach, a reminder that there had been very little to eat all day. The hand stopped in the air.

The seller stood quietly behind the stall and offered no opinion, letting the {hero} be the one to decide. Somewhere down the row a lamp was lit, and then another, and the market settled into its evening hush, as if it too were waiting to see what the {hero} would do. The pouch felt suddenly heavier than before, the way a thing does the moment you have to spend it.

"I have enough for the soup," the {hero} said softly, half to the pouch and half to the night, "or enough for the toy. But not for both. Whichever I pick, the rest of the coins are spent."

{companion_name} had walked the whole way at the {hero}'s side and did not say which to choose. Instead {companion_name} asked a single quiet question.

"Is that a want, or a need?"

The {hero} grew still and really thought about it. It would be so easy to take the toy. The meal could be skipped just this once, couldn't it? It was only one night, and the hunger would fade by morning, and then the toy would be the {hero}'s to keep for good. The thought was tempting, and the {hero} let it linger a while, turning it over honestly.

But then the {hero} looked again at the long, cold dark ahead, and at the warm bowl, and understood something plainly. The toy would be fun tonight and maybe tomorrow, and after that it would rest in a corner. The soup was not like that. The soup was for the body, for the cold, for the ache in the stomach that would not quiet on its own. One of these two things the {hero} could do without. The other, tonight, the {hero} could not.

It helped to remember how the saving had felt, all those careful days. The {hero} had not saved just to spend on the very first bright thing that caught the eye. The whole point had been to have a choice at all, and here was the choice, waiting to be made well.

"The toy is a want," the {hero} said at last, slow and sure. "The soup is a need. Tonight the need comes first."

The {hero} glanced up, half hoping to hear that this was the right answer.

"Wanting things is not wrong," {companion_name} said, with a warmth that settled the whole moment. "The toy is lovely, and it was fair to want it as much as you did. The real skill is telling a want from a need, and that part you did entirely on your own."

For a moment more the {hero} kept the {object_motif} closed inside one hand, feeling its small weight and everything it might have bought. Then the {hero} let out a long breath, laid the coins on the counter, and lifted the warm bowl in both hands.

The soup was even better than it had looked. It spread its heat through the {hero} from the inside, and the hollow feeling eased, and the long night no longer seemed quite so long. There was a quiet, steady kind of gladness in it, different from the quick thrill the toy would have given, and somehow it lasted longer.

The little toy still turned and whistled on the stall. Maybe, when the pouch was heavy again, there would be an evening made for wants, and the {hero} would come back and buy it without a second thought. But tonight the {hero} had weighed the two and chosen well, and knowing that felt steadier and better than any toy could have.

{refrain}.`, scriptTemplate: `The evening air had turned cool by the time {child_name} reached {setting}, and the small pouch of coins swung and clinked with every step.

It had taken a long while to fill that pouch. {child_name} still remembered the goal from before, the thing worth saving for, and all the days of setting aside one coin at a time and not touching it, even when spending would have been the easy thing to do. Day after day the pouch had grown heavier, and now, finally, there was enough inside to spend. That thought by itself felt wonderful, like the end of a long climb.

All the way here, {child_name} had imagined this moment, the walking-up-to-the-stall moment, the picking-something-out moment. There had even been a picture in {child_name}'s head of exactly what the coins would buy, and how good it would feel to finally hand them over. It was supposed to be simple.

But there was something {child_name} had not planned for. When the coins were counted, there was only enough for a single thing. Exactly one, and not a coin left over.

At the last stall, two things sat side by side beneath the evening light. On one side, a deep bowl of thick soup, steam curling off the top, dotted with soft vegetables, the kind of warm meal that fills you all the way up on a cold night. On the other, a small wooden toy that spun on its tip, whistled a bright little tune, and jumped and clattered when you wound its spring, so cleverly made that {child_name} laughed out loud just watching it go.

{child_name} could not stop looking at the toy. It was clever and cheerful and completely delightful, exactly the sort of thing {child_name} had pictured while dropping coin after coin into the pouch. This was the reward, wasn't it? The thing all that patience had been for. Almost without meaning to, {child_name} reached for it.

Then a slow, hollow feeling stirred in {child_name}'s stomach, a reminder that there had been very little to eat all day. The hand stopped in the air.

The seller stood quietly behind the stall and offered no opinion, letting {child_name} be the one to decide. Somewhere down the row a lamp was lit, and then another, and the market settled into its evening hush, as if it too were waiting to see what {child_name} would do. The pouch felt suddenly heavier than before, the way a thing does the moment you have to spend it.

"I have enough for the soup," {child_name} said softly, half to the pouch and half to the night, "or enough for the toy. But not for both. Whichever I pick, the rest of the coins are spent."

{companion_name} had walked the whole way at {child_name}'s side and did not say which to choose. Instead {companion_name} asked a single quiet question.

"Is that a want, or a need?"

{child_name} grew still and really thought about it. It would be so easy to take the toy. The meal could be skipped just this once, couldn't it? It was only one night, and the hunger would fade by morning, and then the toy would be {child_name}'s to keep for good. The thought was tempting, and {child_name} let it linger a while, turning it over honestly.

But then {child_name} looked again at the long, cold dark ahead, and at the warm bowl, and understood something plainly. The toy would be fun tonight and maybe tomorrow, and after that it would rest in a corner. The soup was not like that. The soup was for the body, for the cold, for the ache in the stomach that would not quiet on its own. One of these two things {child_name} could do without. The other, tonight, {child_name} could not.

It helped to remember how the saving had felt, all those careful days. {child_name} had not saved just to spend on the very first bright thing that caught the eye. The whole point had been to have a choice at all, and here was the choice, waiting to be made well.

"The toy is a want," {child_name} said at last, slow and sure. "The soup is a need. Tonight the need comes first."

{child_name} glanced up, half hoping to hear that this was the right answer.

"Wanting things is not wrong," {companion_name} said, with a warmth that settled the whole moment. "The toy is lovely, and it was fair to want it as much as you did. The real skill is telling a want from a need, and that part you did entirely on your own."

For a moment more {child_name} kept the {object_motif} closed inside one hand, feeling its small weight and everything it might have bought. Then {child_name} let out a long breath, laid the coins on the counter, and lifted the warm bowl in both hands.

The soup was even better than it had looked. It spread its heat through {child_name} from the inside, and the hollow feeling eased, and the long night no longer seemed quite so long. There was a quiet, steady kind of gladness in it, different from the quick thrill the toy would have given, and somehow it lasted longer.

The little toy still turned and whistled on the stall. Maybe, when the pouch was heavy again, there would be an evening made for wants, and {child_name} would come back and buy it without a second thought. But tonight {child_name} had weighed the two and chosen well, and knowing that felt steadier and better than any toy could have.

{refrain}.` },
  '9-11': { audioTemplate: `By the time the {hero} came into {setting}, the day had folded itself down into that soft blue hour just before dark, when the stalls light their lamps and the air smells of woodsmoke and something cooking. The small pouch of coins hung heavy at the {hero}'s side, and it swung with a satisfying weight at every step.

That weight had been a long time coming. The {hero} remembered the goal from before, the very first day of it, the deciding what was worth saving for and then the slow, patient work of keeping to it. There had been so many easy chances to spend along the way, so many small bright things that whispered buy me, and the {hero} had walked past every one. Coin after coin had gone into the pouch instead, until the counting of it became a kind of quiet pride. Tonight, at last, the saving was finished. Tonight the pouch was meant to be opened.

There is a particular feeling to arriving somewhere you have worked a long time to reach. Part of it is triumph and part of it is a strange nervousness, because the reaching is over now and the choosing is about to begin, and choosing is always harder than saving. Saving only asks you to say not yet. Spending asks you to say yes to one thing and, in the same breath, no to everything else. The {hero} had not thought about that part until the pouch was actually in hand and the stalls were actually there, lamplit and waiting.

What the {hero} had not counted on was arithmetic. Sitting down on the low wall by the last stall, the coins spread out across one palm, the {hero} added them up twice to be sure. There was enough for exactly one thing. Not two. Not one and a little over. One, and then an empty pouch.

And there were, of course, exactly two things worth wanting, set out side by side on the same stall as if the world were making a point of it.

The first was a bowl of soup, deep and thick, steam rising off it in slow ribbons, chunks of vegetable and barley turning under the surface. It was the kind of meal that reaches all the way down and warms the parts of you the cold has been gnawing at. The {hero} had eaten almost nothing all day, and the smell of it alone made the stomach tighten and ask.

The second was a toy, and it was, honestly, magnificent. Carved from pale wood, it spun on a single fine point, and when you wound the spring it whistled a bright looping tune and hopped in little circles as though it were dancing. The {hero} had seen nothing like it, and something in the chest gave a sharp, bright pull at the sight of it. This, whispered a voice inside, this is the reward. This is the whole reason you saved. You earned it. Take it.

And the terrible, tempting thing was that the voice made a kind of sense. The {hero} turned the argument over, looking for the flaw in it, and did not find one right away. One night without dinner was not so much. The {hero} had gone to bed hungry before and woken up fine. The soup would be gone by morning either way, eaten and forgotten, nothing to show for the coins. But the toy would last. The toy could be picked up again tomorrow, and the day after, a small dancing proof that all that patience had been worth something you could hold. Skip one meal, the voice reasoned, and keep something forever. It sounded almost wise.

The {hero}'s hand had drifted toward the toy while the thinking went on, fingers nearly closing around it. It would have been the easiest thing in the world to let them close the rest of the way, to hand over the coins fast, before the quieter part of the mind could get a word in. That was how most quick choices got made, the {hero} suspected, by moving before the other side could speak.

The seller behind the stall watched all of this without a word, arms folded, in no hurry, plainly of the view that a person's coins were a person's own business. No help was coming from there, and the {hero} was oddly glad of it.

{companion_name} had walked the whole way and now stood a little apart, near enough to be there and far enough not to lean on the choice. {companion_name} did not say take the soup. {companion_name} did not say the toy is silly. There was only one question, offered gently into the quiet, as if setting a lantern down between them.

"Is that a want, or a need?"

It was such a small question, and it changed the shape of everything. The {hero} let the hand fall still and made itself be honest, the way you can only be honest when nobody is arguing with you.

The toy was a want. There was no getting around it, however clever the reasons dressed it up. It would be a delight tonight and a smaller delight tomorrow and then, in a week, it would sit on a shelf gathering the same dust as everything else that had once seemed like the only thing in the world. Wonderful, yes. Necessary, no.

The soup was a need. Not a grand or interesting one, just the plain, unglamorous kind, the sort of thing a body asks for so it can carry you through a long cold night and be ready for the morning. It would vanish without a trace, and that was exactly the point of it. Needs were like that. They didn't leave souvenirs.

And the clever argument, the one about keeping something forever, the {hero} could see now where it bent the truth. It had quietly swapped the question. It had stopped asking which do I need tonight and started asking which lasts longer, as if lasting were the only thing that counted. But a toy that lasts a year is no use to a body that needs feeding today. The reasons had sounded wise because they were the reasons the wanting wanted to hear.

The strange part, the {hero} realised, was that the wanting hadn't been a mistake at all. The pull toward the toy had been real and fair. It was only that wanting a thing and needing a thing were two different measurements, and the {hero} had almost let the louder one drown out the quieter one.

"The toy is a want," the {hero} said at last, and the words came out steady, chosen rather than forced. "The soup is a need. Tonight I'm going to take the one I need."

The {hero} looked over, half expecting the usual thing, the nod that tells you that you passed some test.

"Wanting things is not wrong," {companion_name} said instead, and there was no lesson in the voice, only something like respect. "That toy is beautiful, and it was right to want it as much as you did. Knowing a want from a need, and choosing with your eyes open, that's the hard part. You just did it yourself, and nobody made you."

For a breath or two more the {hero} kept the {object_motif} closed inside one fist, feeling its cool weight, feeling the small ghost of the toy it might have paid for. Then, without any grand ceremony, the {hero} unclosed the hand, counted the coins onto the counter, and took the warm bowl in both palms.

It was better than the smell had promised. The heat of it went down and outward until the shivery, hollow feeling loosened its grip and let go, and the long night ahead stopped looking quite so long. It was not the sharp thrill the toy would have given, that quick firework of having. It was slower and quieter than that, and it had the odd, solid quality of a thing that would still feel right tomorrow.

The toy went on spinning and whistling at the edge of the stall, and it was still lovely, and the {hero} did not pretend otherwise. Some other evening, when the pouch was heavy again and the stomach was full, there might be a night made entirely for wants, and the {hero} would come back and buy it and not think twice. But that was for another time. Tonight the {hero} had held two true things in one hand, weighed them honestly, and chosen the one that mattered most right now, and that quiet certainty was worth carrying home.

{refrain}.`, scriptTemplate: `By the time {child_name} came into {setting}, the day had folded itself down into that soft blue hour just before dark, when the stalls light their lamps and the air smells of woodsmoke and something cooking. The small pouch of coins hung heavy at {child_name}'s side, and it swung with a satisfying weight at every step.

That weight had been a long time coming. {child_name} remembered the goal from before, the very first day of it, the deciding what was worth saving for and then the slow, patient work of keeping to it. There had been so many easy chances to spend along the way, so many small bright things that whispered buy me, and {child_name} had walked past every one. Coin after coin had gone into the pouch instead, until the counting of it became a kind of quiet pride. Tonight, at last, the saving was finished. Tonight the pouch was meant to be opened.

There is a particular feeling to arriving somewhere you have worked a long time to reach. Part of it is triumph and part of it is a strange nervousness, because the reaching is over now and the choosing is about to begin, and choosing is always harder than saving. Saving only asks you to say not yet. Spending asks you to say yes to one thing and, in the same breath, no to everything else. {child_name} had not thought about that part until the pouch was actually in hand and the stalls were actually there, lamplit and waiting.

What {child_name} had not counted on was arithmetic. Sitting down on the low wall by the last stall, the coins spread out across one palm, {child_name} added them up twice to be sure. There was enough for exactly one thing. Not two. Not one and a little over. One, and then an empty pouch.

And there were, of course, exactly two things worth wanting, set out side by side on the same stall as if the world were making a point of it.

The first was a bowl of soup, deep and thick, steam rising off it in slow ribbons, chunks of vegetable and barley turning under the surface. It was the kind of meal that reaches all the way down and warms the parts of you the cold has been gnawing at. {child_name} had eaten almost nothing all day, and the smell of it alone made the stomach tighten and ask.

The second was a toy, and it was, honestly, magnificent. Carved from pale wood, it spun on a single fine point, and when you wound the spring it whistled a bright looping tune and hopped in little circles as though it were dancing. {child_name} had seen nothing like it, and something in the chest gave a sharp, bright pull at the sight of it. This, whispered a voice inside, this is the reward. This is the whole reason you saved. You earned it. Take it.

And the terrible, tempting thing was that the voice made a kind of sense. {child_name} turned the argument over, looking for the flaw in it, and did not find one right away. One night without dinner was not so much. {child_name} had gone to bed hungry before and woken up fine. The soup would be gone by morning either way, eaten and forgotten, nothing to show for the coins. But the toy would last. The toy could be picked up again tomorrow, and the day after, a small dancing proof that all that patience had been worth something you could hold. Skip one meal, the voice reasoned, and keep something forever. It sounded almost wise.

{child_name}'s hand had drifted toward the toy while the thinking went on, fingers nearly closing around it. It would have been the easiest thing in the world to let them close the rest of the way, to hand over the coins fast, before the quieter part of the mind could get a word in. That was how most quick choices got made, {child_name} suspected, by moving before the other side could speak.

The seller behind the stall watched all of this without a word, arms folded, in no hurry, plainly of the view that a person's coins were a person's own business. No help was coming from there, and {child_name} was oddly glad of it.

{companion_name} had walked the whole way and now stood a little apart, near enough to be there and far enough not to lean on the choice. {companion_name} did not say take the soup. {companion_name} did not say the toy is silly. There was only one question, offered gently into the quiet, as if setting a lantern down between them.

"Is that a want, or a need?"

It was such a small question, and it changed the shape of everything. {child_name} let the hand fall still and made itself be honest, the way you can only be honest when nobody is arguing with you.

The toy was a want. There was no getting around it, however clever the reasons dressed it up. It would be a delight tonight and a smaller delight tomorrow and then, in a week, it would sit on a shelf gathering the same dust as everything else that had once seemed like the only thing in the world. Wonderful, yes. Necessary, no.

The soup was a need. Not a grand or interesting one, just the plain, unglamorous kind, the sort of thing a body asks for so it can carry you through a long cold night and be ready for the morning. It would vanish without a trace, and that was exactly the point of it. Needs were like that. They didn't leave souvenirs.

And the clever argument, the one about keeping something forever, {child_name} could see now where it bent the truth. It had quietly swapped the question. It had stopped asking which do I need tonight and started asking which lasts longer, as if lasting were the only thing that counted. But a toy that lasts a year is no use to a body that needs feeding today. The reasons had sounded wise because they were the reasons the wanting wanted to hear.

The strange part, {child_name} realised, was that the wanting hadn't been a mistake at all. The pull toward the toy had been real and fair. It was only that wanting a thing and needing a thing were two different measurements, and {child_name} had almost let the louder one drown out the quieter one.

"The toy is a want," {child_name} said at last, and the words came out steady, chosen rather than forced. "The soup is a need. Tonight I'm going to take the one I need."

{child_name} looked over, half expecting the usual thing, the nod that tells you that you passed some test.

"Wanting things is not wrong," {companion_name} said instead, and there was no lesson in the voice, only something like respect. "That toy is beautiful, and it was right to want it as much as you did. Knowing a want from a need, and choosing with your eyes open, that's the hard part. You just did it yourself, and nobody made you."

For a breath or two more {child_name} kept the {object_motif} closed inside one fist, feeling its cool weight, feeling the small ghost of the toy it might have paid for. Then, without any grand ceremony, {child_name} unclosed the hand, counted the coins onto the counter, and took the warm bowl in both palms.

It was better than the smell had promised. The heat of it went down and outward until the shivery, hollow feeling loosened its grip and let go, and the long night ahead stopped looking quite so long. It was not the sharp thrill the toy would have given, that quick firework of having. It was slower and quieter than that, and it had the odd, solid quality of a thing that would still feel right tomorrow.

The toy went on spinning and whistling at the edge of the stall, and it was still lovely, and {child_name} did not pretend otherwise. Some other evening, when the pouch was heavy again and the stomach was full, there might be a night made entirely for wants, and {child_name} would come back and buy it and not think twice. But that was for another time. Tonight {child_name} had held two true things in one hand, weighed them honestly, and chosen the one that mattered most right now, and that quiet certainty was worth carrying home.

{refrain}.` }
},
    callback: 'Saving for a goal (Level 4)', ageFloor: 5,
    audioTemplate: `A small {hero} had ten {object_motif}s — exactly enough for either thing.

On one side of the market: a beautiful toy that spun and sparkled in the light. On the other: a warm meal and a dry place to rest for the journey home.

"I want the toy," said the {hero} honestly.

{companion_name} sat beside them without rushing. "Wanting things is not wrong. But before you choose — do you need the toy, or do you want it?"

The {hero} thought carefully. There had been a time, not long ago, when they had saved and saved for something truly wanted. And that had been right. But tonight was cold, and home was far.

"I need the meal," said the {hero} at last. "I want the toy. But I need the meal more tonight."

"That," said {companion_name} quietly, "is one of the wisest things I have ever heard a {hero} say."

The toy could wait. Some nights, knowing the difference was the whole adventure.

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} had ten {object_motif}s — exactly enough for either thing.

On one side of the market: a beautiful toy that spun and sparkled in the light. On the other: a warm meal and a dry place to rest for the journey home.

"I want the toy," said {child_name} honestly.

{companion_name} sat beside them without rushing. "Wanting things is not wrong. But before you choose — do you need the toy, or do you want it?"

{child_name} thought carefully. There had been a time, not long ago, when they had saved and saved for the lantern because they truly wanted it. And that had been right. But tonight was cold, and home was far.

"I need the meal," said {child_name} at last. "I want the toy. But I need the meal more tonight."

"That," said {companion_name} quietly, "is one of the wisest things I have ever heard a {hero} say."

The toy could wait. Some nights, knowing the difference was the whole adventure.

{refrain}.`,
  },
]
