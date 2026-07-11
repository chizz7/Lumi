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
    audioTemplate: `Tonight was picnic night! The {hero} and {companion_name} spread a picnic blanket in {setting}. The {object_motif} sat on one corner, holding it down.

One thing was missing. The moon-loaf! The baker made just one each night, round and golden and warm.

The {hero} had one small coin. Little, but the {hero} knew its marks. It was worth five!

The moon-loaf cost three. Count with me. One, two, three.

But five is more than three! "If I pay five for three," said the {hero}, "I lose two!"

At the stall hung a small sign: "Change given, always." Change? What was change?

The {hero} had an idea. "Please cut my coin in three pieces, like a loaf!"

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
    scriptTemplate: `Tonight was picnic night! {child_name} and {companion_name} spread a picnic blanket in {setting}. The {object_motif} sat on one corner, holding it down.

One thing was missing. The moon-loaf! The baker made just one each night, round and golden and warm.

{child_name} had one small coin. Little, but {child_name} knew its marks. It was worth five!

The moon-loaf cost three. Count with me. One, two, three.

But five is more than three! "If I pay five for three," said {child_name}, "I lose two!"

At the stall hung a small sign: "Change given, always." Change? What was change?

{child_name} had an idea. "Please cut my coin in three pieces, like a loaf!"

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
    audioTemplate: `Tonight was picnic night. The {hero} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} was already sitting on the picnic blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, round and golden with a swirl on top, and tonight it was still there, filling the whole market with its warm smell.

The {hero} had exactly one coin, and it was a good one. It was small, but the {hero} had read its marks the way coins should be read, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said the {hero}, "I lose two. That's not fair trading. That's just losing."

Above the stall hung a little chalk sign: "Change given, always." The {hero} had wondered about that sign all week. Change? Change into what?

So the {hero} made a plan. First, the {hero} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Next, the {hero} went hunting for a swap: one five-coin for three ones. The toy-seller had no little coins, only whistles. The fruit-seller offered a button. A very nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

The {hero} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

The {hero} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

And here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into the {hero}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Come tomorrow," called the baker, packing up. "Tomorrow's loaf is a new shape. A secret one. It's something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

{refrain}.`,
    scriptTemplate: `Tonight was picnic night. {child_name} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} was already sitting on the picnic blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, round and golden with a swirl on top, and tonight it was still there, filling the whole market with its warm smell.

{child_name} had exactly one coin, and it was a good one. It was small, but {child_name} had read its marks the way coins should be read, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said {child_name}, "I lose two. That's not fair trading. That's just losing."

Above the stall hung a little chalk sign: "Change given, always." {child_name} had wondered about that sign all week. Change? Change into what?

So {child_name} made a plan. First, {child_name} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Next, {child_name} went hunting for a swap: one five-coin for three ones. The toy-seller had no little coins, only whistles. The fruit-seller offered a button. A very nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

{child_name} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

{child_name} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

And here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into {child_name}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Come tomorrow," called the baker, packing up. "Tomorrow's loaf is a new shape. A secret one. It's something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Picnic night came once a week, and the {hero} took it as seriously as some folk take birthdays. The spot was chosen days in advance: the mossy rise in {setting} where the moon shows up first, before it has finished combing its hair. By sunset the picnic blanket was spread, and the {object_motif} sat on one corner to keep the breeze from stealing it.

All that was missing was the middle of the picnic — the moon-loaf. Every evening the baker made exactly one: round, golden, with a swirl on top like a shell, and famous for three streets in every direction. Tonight it was still on the stall, sending its warm smell out over the market like an announcement.

The {hero} had one coin, and knew precisely what it was. That was the thing about coins now — since the business with the box and the business with the little sun, the {hero} read them the way other people read signs. Name, face, edge. This one was small, worn smooth at the rim, and worth five.

The moon-loaf cost three.

Most people would call that good news. The {hero} stood in front of the stall doing unhappy arithmetic. "Five for a three-coin loaf," muttered the {hero}. "That's paying five and getting three. That's losing two coins into thin air. I didn't learn to read coins just to throw two of them away."

Above the stall, swinging gently, hung a small chalk-written sign the {hero} had never understood: "Change given, always." All week that sign had been an itch. Change? Change into what? Loaves into birds? Bakers into boats?

There was nothing for it but cleverness. The {hero}'s first plan was surgical: ask the baker to slice the coin into three fair pieces, the way you slice a loaf. The baker laughed so warmly that flour rose off her apron in a small cloud. "Coins don't slice, little {hero}. Not even for you."

The second plan was trade. Somewhere in this market, surely, someone would swap one five for three ones. The toy-seller turned out his pockets: whistles. The fruit-seller offered a large friendly button and seemed genuinely sorry when it was declined. The potter had two little coins but needed them for her own loaf tomorrow, which was fair, and said so.

The moon had one eyebrow over the edge of the world now. The loaf was cooling. {companion_name}, who had been watching all this from the blanket with the patience of a stone, said only: "Hmm. I don't think that sign is finished with you yet."

So the {hero} gave up — or thought so, which at the time felt like the same thing. Back to the stall, coin on the counter, chin up. "One moon-loaf, please. I know this coin is too much. Take it anyway. Some picnics are worth overpaying for."

The baker did not take it anyway. The baker took it exactly. She handed across the warm loaf, then opened the wooden till, and — watch her hands now, quick. Can you see it too? Two little coins, walking back across the counter, one and then the other. Chink, chink.

The {hero} looked at the coins, at the sign, at the coins again, and the whole week's itch scratched itself at once.

"You've given back the extra," said the {hero} slowly. "I paid five, the loaf cost three, and two came home. That is called change! The sign was never a riddle. It was a promise."

"Always has been," said the baker, dusting her hands.

And then the evening did the thing good evenings do: it turned out better than the plan. Because if the slicing plan had worked, or the swapping plan had worked, the {hero} would have paid three exact coins and walked away with bread and nothing else. Instead there were two coins back, and one of them bought a pat of honey-butter, golden as the loaf itself, which the failed plans could never have paid for. The last coin went deep into the pocket for another day.

The picnic was, by unanimous vote of everyone present, the best one yet. Warm bread, honey-butter melting into the swirl, the moon fully up and looking pleased with itself.

"{refrain}," said {companion_name}, quietly, the way it should be said.

As the market packed up behind them, the baker called across: "Come tomorrow! Tomorrow's loaf is a new shape — a secret one. I'll tell you this much: it's something that flies."

Something that flies. A bird? A kite? A question for the morning, and a good one to fall asleep on.

The lamps went out one by one. The blanket grew warmer. The {hero}'s eyes closed between one slow bite of moonlight and the next.

{refrain}.`,
    scriptTemplate: `Picnic night came once a week, and {child_name} took it as seriously as some folk take birthdays. The spot was chosen days in advance: the mossy rise in {setting} where the moon shows up first, before it has finished combing its hair. By sunset the picnic blanket was spread, and the {object_motif} sat on one corner to keep the breeze from stealing it.

All that was missing was the middle of the picnic — the moon-loaf. Every evening the baker made exactly one: round, golden, with a swirl on top like a shell, and famous for three streets in every direction. Tonight it was still on the stall, sending its warm smell out over the market like an announcement.

{child_name} had one coin, and knew precisely what it was. That was the thing about coins now — since the business with the box and the business with the little sun, {child_name} read them the way other people read signs. Name, face, edge. This one was small, worn smooth at the rim, and worth five.

The moon-loaf cost three.

Most people would call that good news. {child_name} stood in front of the stall doing unhappy arithmetic. "Five for a three-coin loaf," muttered {child_name}. "That's paying five and getting three. That's losing two coins into thin air. I didn't learn to read coins just to throw two of them away."

Above the stall, swinging gently, hung a small chalk-written sign {child_name} had never understood: "Change given, always." All week that sign had been an itch. Change? Change into what? Loaves into birds? Bakers into boats?

There was nothing for it but cleverness. {child_name}'s first plan was surgical: ask the baker to slice the coin into three fair pieces, the way you slice a loaf. The baker laughed so warmly that flour rose off her apron in a small cloud. "Coins don't slice, little {hero}. Not even for you."

The second plan was trade. Somewhere in this market, surely, someone would swap one five for three ones. The toy-seller turned out his pockets: whistles. The fruit-seller offered a large friendly button and seemed genuinely sorry when it was declined. The potter had two little coins but needed them for her own loaf tomorrow, which was fair, and said so.

The moon had one eyebrow over the edge of the world now. The loaf was cooling. {companion_name}, who had been watching all this from the blanket with the patience of a stone, said only: "Hmm. I don't think that sign is finished with you yet."

So {child_name} gave up — or thought so, which at the time felt like the same thing. Back to the stall, coin on the counter, chin up. "One moon-loaf, please. I know this coin is too much. Take it anyway. Some picnics are worth overpaying for."

The baker did not take it anyway. The baker took it exactly. She handed across the warm loaf, then opened the wooden till, and — watch her hands now, quick. Can you see it too? Two little coins, walking back across the counter, one and then the other. Chink, chink.

{child_name} looked at the coins, at the sign, at the coins again, and the whole week's itch scratched itself at once.

"You've given back the extra," said {child_name} slowly. "I paid five, the loaf cost three, and two came home. That is called change! The sign was never a riddle. It was a promise."

"Always has been," said the baker, dusting her hands.

And then the evening did the thing good evenings do: it turned out better than the plan. Because if the slicing plan had worked, or the swapping plan had worked, {child_name} would have paid three exact coins and walked away with bread and nothing else. Instead there were two coins back, and one of them bought a pat of honey-butter, golden as the loaf itself, which the failed plans could never have paid for. The last coin went deep into the pocket for another day.

The picnic was, by unanimous vote of everyone present, the best one yet. Warm bread, honey-butter melting into the swirl, the moon fully up and looking pleased with itself.

"{refrain}," said {companion_name}, quietly, the way it should be said.

As the market packed up behind them, the baker called across: "Come tomorrow! Tomorrow's loaf is a new shape — a secret one. I'll tell you this much: it's something that flies."

Something that flies. A bird? A kite? A question for the morning, and a good one to fall asleep on.

The lamps went out one by one. The blanket grew warmer. {child_name}'s eyes closed between one slow bite of moonlight and the next.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `There are two kinds of plans: the kind you make, and the kind the evening makes for you. The {hero} did not know it yet, but tonight belonged to the second kind.

It was picnic night, the best-defended tradition in {setting}. The spot had been claimed since Tuesday — the mossy rise where the moon comes up first — and by sunset the picnic blanket was down, with the {object_motif} sitting on one corner so the breeze couldn't make off with it. {companion_name} lay in the middle of the blanket like the guest of honour, which, by long agreement, they were.

All that was missing was the middle of the picnic: the moon-loaf. The baker made exactly one each evening — round, golden, a swirl on top — and the rule of the market was simple: when it was gone, it was gone. Tonight it was not gone. Its smell drifted over the stalls like a rumour that happened to be true.

The {hero} had one coin and knew it completely. Since the business with the locked box and the little sun, coins had stopped being round mysteries; the {hero} read them — name, face, edge — the way sailors read weather. This one was small, worn silky at the rim, and worth five. The moon-loaf cost three.

Anyone else would have skipped to the stall. The {hero} stood still, doing arithmetic with a frown. Five paid for three received meant two coins gone, vanished, evaporated. It felt less like buying bread and more like being quietly robbed by mathematics. "I did not learn to read coins," said the {hero} with feeling, "in order to feed two of them to a bread stall."

There was also the sign. It had been bothering the {hero} for days: a small chalk-lettered board swinging above the stall. "Change given, always." Change. Change into what? It sounded half like a promise and half like a magic trick, and no one ever explained it, the way grown folk never explain the things they think everyone knows.

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

There was also the sign. It had been bothering {child_name} for days: a small chalk-lettered board swinging above the stall. "Change given, always." Change. Change into what? It sounded half like a promise and half like a magic trick, and no one ever explained it, the way grown folk never explain the things they think everyone knows.

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
    audioTemplate: `Tonight was picnic night. The {hero} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} was already sitting on the picnic blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, round and golden with a swirl on top, and tonight it was still there, filling the whole market with its warm smell.

The {hero} had exactly one coin, and it was a good one. It was small, but the {hero} had read its marks the way coins should be read, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said the {hero}, "I lose two. That's not fair trading. That's just losing."

Above the stall hung a little chalk sign: "Change given, always." The {hero} had wondered about that sign all week. Change? Change into what?

So the {hero} made a plan. First, the {hero} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Next, the {hero} went hunting for a swap: one five-coin for three ones. The toy-seller had no little coins, only whistles. The fruit-seller offered a button. A very nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

The {hero} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

The {hero} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

And here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into the {hero}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Come tomorrow," called the baker, packing up. "Tomorrow's loaf is a new shape. A secret one. It's something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

{refrain}.`,
    scriptTemplate: `Tonight was picnic night. {child_name} and {companion_name} had picked the spot days ago — the mossy rise in {setting} where the moon comes up first — and the {object_motif} was already sitting on the picnic blanket, holding down one corner.

Only one thing was missing: the moon-loaf. Every evening the baker made exactly one, round and golden with a swirl on top, and tonight it was still there, filling the whole market with its warm smell.

{child_name} had exactly one coin, and it was a good one. It was small, but {child_name} had read its marks the way coins should be read, and it was worth five. The moon-loaf cost three.

And that was the trouble. "If I pay five for a three-coin loaf," said {child_name}, "I lose two. That's not fair trading. That's just losing."

Above the stall hung a little chalk sign: "Change given, always." {child_name} had wondered about that sign all week. Change? Change into what?

So {child_name} made a plan. First, {child_name} asked the baker to slice the coin in three, like a loaf. The baker laughed so hard that flour puffed off her apron. "Coins don't slice, little {hero}."

Next, {child_name} went hunting for a swap: one five-coin for three ones. The toy-seller had no little coins, only whistles. The fruit-seller offered a button. A very nice button, but a button.

The moon was nearly up. The loaf was getting cool.

"Hmm," said {companion_name}. "That sign isn't finished with you yet."

{child_name} trudged back, laid the five-coin on the counter, and sighed. "One moon-loaf, please. I know it's too much."

The baker smiled and handed over the warm loaf. Then — watch the baker's hands, quick. Can you see it too? Two little coins, walking back across the counter. Chink, chink.

{child_name} stared. "You gave back the extra! The sign! That is called change!"

"Always," said the baker.

And here was the funny thing. If the swapping plan had worked, there would be nothing left over — but now a coin came back, and it bought a pat of honey-butter for the top of the loaf. The failed plan had turned into a better one.

They ate on the blanket while the moon climbed, warm bread and melting honey-butter, and the last coin went safe into {child_name}'s pocket for another day.

"{refrain}," said {companion_name}, with honey-butter on the tip of their nose.

"Come tomorrow," called the baker, packing up. "Tomorrow's loaf is a new shape. A secret one. It's something that flies."

Something that flies! But that was a puzzle for the morning.

The market lights went out one by one. The bread was warm. The night was slow.

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
