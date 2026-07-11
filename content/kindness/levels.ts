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
    ordinal: 1, title: "The Quietest Hiding Place",
    concept: "Paying attention to the feelings of others", callback: null, ageFloor: 3,
    summary: "Nobody has ever found the champion — hide-and-seek's smallest, quietest legend — and tonight even the famous giveaway giggle has gone missing. Every clever spot turns up empty, until the hero stops asking where a hider would hide and starts asking how a hider might feel. Reading those quiet signs is what finally finds the friend: noticing a feeling is where kindness begins.",
    teachingNote: "Empathy starts with attention: a child cannot be kind to a feeling they have not noticed.",
    learningBeat: "That is where kindness is born",
    ageVariants: {
  '3-4': {
    audioTemplate: `It was the last hide-and-seek before bed.

The {hero} wanted to find the champion. The best hider in {setting}. Nobody had ever found them. Not once!

And everyone knew: when you got close, the champion giggled. But tonight? No giggle anywhere.

The {hero} looked in one spot. Nothing. Two spots. Nothing. Three spots. Only {companion_name}, peeking in there too. Oops!

'Hmm,' said {companion_name}. 'No giggle tonight, little {hero}.'

The {hero} thought hard. Before the game, the champion looked sad. Their smile fell down. Their shoulders drooped.

Now listen. Can you hear it too? Hic. A tiny hiccup, near the {object_motif}.

'They are hiding a sad feeling,' said the {hero}. 'And I noticed it! That is where kindness is born.'

The {hero} went to the warm glow. No shouting. Just sitting down, soft and close.

'I feel sad sometimes too,' said the {hero}.

Out crept the champion. One small smile. Then a big one.

'You found the me,' said the champion.

'{refrain},' whispered {companion_name}.

'Tomorrow I will show you my best spot,' said the champion. 'We will giggle very quietly.'

The {hero} yawned. Friend found. Game done.

{refrain}.`,
    scriptTemplate: `It was the last hide-and-seek before bed.

{child_name} wanted to find the champion. The best hider in {setting}. Nobody had ever found them. Not once!

And everyone knew: when you got close, the champion giggled. But tonight? No giggle anywhere.

{child_name} looked in one spot. Nothing. Two spots. Nothing. Three spots. Only {companion_name}, peeking in there too. Oops!

'Hmm,' said {companion_name}. 'No giggle tonight, little {hero}.'

{child_name} thought hard. Before the game, the champion looked sad. Their smile fell down. Their shoulders drooped.

Now listen. Can you hear it too? Hic. A tiny hiccup, near the {object_motif}.

'They are hiding a sad feeling,' said {child_name}. 'And I noticed it! That is where kindness is born.'

{child_name} went to the warm glow. No shouting. Just sitting down, soft and close.

'I feel sad sometimes too,' said {child_name}.

Out crept the champion. One small smile. Then a big one.

'You found the me,' said the champion.

'{refrain},' whispered {companion_name}.

'Tomorrow I will show you my best spot,' said the champion. 'We will giggle very quietly.'

{child_name} yawned. Friend found. Game done.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Tonight was the last hide-and-seek before bed, and the {hero} wanted one thing: to find the champion at last.

The champion was the smallest, quietest player in all of {setting}, and nobody had ever found them. Not once. But everyone knew the champion's one weakness. When a seeker crept close, a tiny giggle always slipped out. Tonight the game had gone on and on, and there had been no giggle anywhere.

One by one the other players yawned and went home. Only the {hero} and {companion_name} stayed.

The {hero} searched the clever way. Behind the tall stone? Nothing. Under the drooping leaves? Nothing. Then the {hero} pounced on a suspicious lump. 'Found you!' But the lump was {companion_name}, sneaking up on it from the other side. The real lump was a rock.

'Hmm,' said {companion_name}. 'You have looked everywhere a clever hider would be, little {hero}.'

The {hero} flopped down to think, and the evening played itself again. Before the game, when everyone was shouting out names for teams, nobody had shouted the champion's name. Their smile had slipped right off. Their shoulders had curled. They had walked away before the counting started.

Hold very still and listen. Can you hear it too? Hic. A tiny hiccup, somewhere near the {object_motif}.

'Oh,' whispered the {hero}, sitting up. 'They are not hiding to win. They are hiding because of a feeling. I saw it happen and I nearly walked right past it. Noticing the feeling comes first. That is where kindness is born.'

Once the {hero} asked where a sad feeling would go, the answer was easy. When you feel forgotten, you go where it is warm.

The {hero} padded over to the soft glow of the {object_motif}. No pouncing. No shouting. Just sitting down beside the little hollow there.

'I heard my name get forgotten once too,' the {hero} said softly. 'It made me want to be invisible.'

A rustle. And the champion crept out into the glow, blinking.

'You found me,' they said. 'Everyone else only ever looked for the hiding. You looked for the me.'

'{refrain},' said {companion_name}, very softly.

The champion said the {hero} had won the game. The {hero} said it was a tie.

'Tomorrow,' the champion whispered, 'I will show you my greatest hiding spot. You will have to giggle very, very quietly.'

The {hero} smiled, and yawned. The glow burned low. Game over. Friend found.

{refrain}.`,
    scriptTemplate: `Tonight was the last hide-and-seek before bed, and {child_name} wanted one thing: to find the champion at last.

The champion was the smallest, quietest player in all of {setting}, and nobody had ever found them. Not once. But everyone knew the champion's one weakness. When a seeker crept close, a tiny giggle always slipped out. Tonight the game had gone on and on, and there had been no giggle anywhere.

One by one the other players yawned and went home. Only {child_name} and {companion_name} stayed.

{child_name} searched the clever way. Behind the tall stone? Nothing. Under the drooping leaves? Nothing. Then {child_name} pounced on a suspicious lump. 'Found you!' But the lump was {companion_name}, sneaking up on it from the other side. The real lump was a rock.

'Hmm,' said {companion_name}. 'You have looked everywhere a clever hider would be, little {hero}.'

{child_name} flopped down to think, and the evening played itself again. Before the game, when everyone was shouting out names for teams, nobody had shouted the champion's name. Their smile had slipped right off. Their shoulders had curled. They had walked away before the counting started.

Hold very still and listen. Can you hear it too? Hic. A tiny hiccup, somewhere near the {object_motif}.

'Oh,' whispered {child_name}, sitting up. 'They are not hiding to win. They are hiding because of a feeling. I saw it happen and I nearly walked right past it. Noticing the feeling comes first. That is where kindness is born.'

Once {child_name} asked where a sad feeling would go, the answer was easy. When you feel forgotten, you go where it is warm.

{child_name} padded over to the soft glow of the {object_motif}. No pouncing. No shouting. Just sitting down beside the little hollow there.

'I heard my name get forgotten once too,' {child_name} said softly. 'It made me want to be invisible.'

A rustle. And the champion crept out into the glow, blinking.

'You found me,' they said. 'Everyone else only ever looked for the hiding. You looked for the me.'

'{refrain},' said {companion_name}, very softly.

The champion said {child_name} had won the game. {child_name} said it was a tie.

'Tomorrow,' the champion whispered, 'I will show you my greatest hiding spot. You will have to giggle very, very quietly.'

{child_name} smiled, and yawned. The glow burned low. Game over. Friend found.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Everyone in {setting} agreed on one thing about the champion: nobody had ever found them. Not in three whole seasons of hide-and-seek. Seekers had searched behind every stone and shadow, and the smallest, quietest player had never once been caught.

There was just one crack in the champion's armour, and everyone knew it. When a seeker got truly close, a giggle slipped out — tiny, helpless, impossible to stop. Champions, it turns out, are not made of stone.

Tonight was the last game before bed, and the {hero} had decided it was going to be a famous night: the night the champion finally got found. The {hero} had a list of spots, a plan, and a best accomplice — {companion_name}, who claimed to be in it purely for the glory.

But tonight the game went strange and long. One by one the other seekers yawned, surrendered, and drifted home. The dark came down soft over {setting}. And there had not been one single giggle. The {hero} had crept close to every famous hiding place, and the game's most famous sound had simply not happened.

'Something is wrong with tonight,' said the {hero}. 'Where is the giggle?'

'Hmm,' said {companion_name}, in the tone of someone who has noticed something and is waiting, politely, for you to notice it too.

The {hero} did not notice it yet, and did strategy instead. The hollow behind the tall stones: nothing. The gap beneath the drooping fronds: nothing. Then came a suspicious, champion-sized lump near the path. The {hero} stalked it with tremendous skill and pounced — onto {companion_name}, who had been stalking the same lump from the other side. The actual lump was a rock.

'We are excellent at this,' said {companion_name}, from underneath the {hero}.

Out of spots and out of plans, the {hero} flopped back in the dark and let the evening replay itself. And there, snagged like a thread, was the thing the {hero} had seen and not truly seen. Before the game. Teams being picked. Names being shouted, cheerful as popping corn. And at the edge, the champion, waiting — for a name that never came. Nobody shouts the name of a player they have never once found. The champion's smile had slipped, just a little. Their shoulders had curled in. And they had walked away before the counting even began.

Hold very still and listen. Can you hear it too? Hic. The tiniest hiccup in the world, from near the warm glow of the {object_motif}.

The {hero} sat up slowly, everything rearranging.

'They are not hiding to win,' the {hero} said. 'They have not been playing at all. They are hiding because of a feeling — and I watched that feeling happen and walked straight past it, because I was too busy planning to be famous. Noticing comes first. That is where kindness is born.'

Once the {hero} started asking where a small sad feeling would go, the answer was suddenly easy. When you feel forgotten, you do not pick the cleverest spot. You pick the warmest one.

The {hero} walked to the {object_motif} — no stalking, no pouncing — and sat down beside the hollow where its glow ran deepest.

'I am not here to win,' the {hero} said, to nobody visible. 'I saw your smile slip when the names were called. Mine slips like that too. Once it made me want to be invisible for a week.'

A pause. A rustle. And the champion crept out into the glow, blinking, and looked at the {hero} a long moment.

'Three seasons,' the champion said at last. 'Everyone searched for my hiding, little {hero}. You are the first one who searched for my feeling. You found the me.'

'{refrain},' said {companion_name}, very softly, and for once added nothing about glory.

They sat together while the glow breathed slow. The champion ruled that the {hero} had officially won the game. The {hero} ruled it a tie. In the end they compromised: the {hero} had won, but only in secret.

'Tomorrow,' the champion whispered, 'I will show you my greatest spot. The one nobody will ever find. It has been a bit lonely, knowing it alone. You will have to learn to giggle in total silence.'

'I will practise tonight,' promised the {hero}, with a yawn that ruined the promise on the spot.

The glow burned down to an ember. The game was over. The friend was found. Sleep came seeking next, and it knew just where to look.

{refrain}.`,
    scriptTemplate: `Everyone in {setting} agreed on one thing about the champion: nobody had ever found them. Not in three whole seasons of hide-and-seek. Seekers had searched behind every stone and shadow, and the smallest, quietest player had never once been caught.

There was just one crack in the champion's armour, and everyone knew it. When a seeker got truly close, a giggle slipped out — tiny, helpless, impossible to stop. Champions, it turns out, are not made of stone.

Tonight was the last game before bed, and {child_name} had decided it was going to be a famous night: the night the champion finally got found. {child_name} had a list of spots, a plan, and a best accomplice — {companion_name}, who claimed to be in it purely for the glory.

But tonight the game went strange and long. One by one the other seekers yawned, surrendered, and drifted home. The dark came down soft over {setting}. And there had not been one single giggle. {child_name} had crept close to every famous hiding place, and the game's most famous sound had simply not happened.

'Something is wrong with tonight,' said {child_name}. 'Where is the giggle?'

'Hmm,' said {companion_name}, in the tone of someone who has noticed something and is waiting, politely, for you to notice it too.

{child_name} did not notice it yet, and did strategy instead. The hollow behind the tall stones: nothing. The gap beneath the drooping fronds: nothing. Then came a suspicious, champion-sized lump near the path. {child_name} stalked it with tremendous skill and pounced — onto {companion_name}, who had been stalking the same lump from the other side. The actual lump was a rock.

'We are excellent at this,' said {companion_name}, from underneath {child_name}.

Out of spots and out of plans, {child_name} flopped back in the dark and let the evening replay itself. And there, snagged like a thread, was the thing {child_name} had seen and not truly seen. Before the game. Teams being picked. Names being shouted, cheerful as popping corn. And at the edge, the champion, waiting — for a name that never came. Nobody shouts the name of a player they have never once found. The champion's smile had slipped, just a little. Their shoulders had curled in. And they had walked away before the counting even began.

Hold very still and listen. Can you hear it too? Hic. The tiniest hiccup in the world, from near the warm glow of the {object_motif}.

{child_name} sat up slowly, everything rearranging.

'They are not hiding to win,' {child_name} said. 'They have not been playing at all. They are hiding because of a feeling — and I watched that feeling happen and walked straight past it, because I was too busy planning to be famous. Noticing comes first. That is where kindness is born.'

Once {child_name} started asking where a small sad feeling would go, the answer was suddenly easy. When you feel forgotten, you do not pick the cleverest spot. You pick the warmest one.

{child_name} walked to the {object_motif} — no stalking, no pouncing — and sat down beside the hollow where its glow ran deepest.

'I am not here to win,' {child_name} said, to nobody visible. 'I saw your smile slip when the names were called. Mine slips like that too. Once it made me want to be invisible for a week.'

A pause. A rustle. And the champion crept out into the glow, blinking, and looked at {child_name} a long moment.

'Three seasons,' the champion said at last. 'Everyone searched for my hiding, little {hero}. You are the first one who searched for my feeling. You found the me.'

'{refrain},' said {companion_name}, very softly, and for once added nothing about glory.

They sat together while the glow breathed slow. The champion ruled that {child_name} had officially won the game. {child_name} ruled it a tie. In the end they compromised: {child_name} had won, but only in secret.

'Tomorrow,' the champion whispered, 'I will show you my greatest spot. The one nobody will ever find. It has been a bit lonely, knowing it alone. You will have to learn to giggle in total silence.'

'I will practise tonight,' promised {child_name}, with a yawn that ruined the promise on the spot.

The glow burned down to an ember. The game was over. The friend was found. Sleep came seeking next, and it knew just where to look.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `Everyone in {setting} agreed on exactly one thing about the champion: nobody had ever found them. Not in three seasons of hide-and-seek. Seekers had grown up, retired, and handed their searching routes down to younger ones, and still the smallest, quietest player in the game had never once been caught.

There was just one crack in the champion's armour, and everyone knew it. When a seeker got truly close, a giggle slipped out — tiny, helpless, bright as a dropped spoon. Champions, it turns out, are not made of stone.

Tonight was the last game before bed, and the {hero} had privately decided it was going to be a famous night: the night the champion finally got found. There was a list of spots, a strategy, and a best accomplice — {companion_name}, who claimed to be in it purely for the snacks.

But the game went strange. It went long. One by one the other seekers yawned and drifted home to bed; the dark came down soft over {setting}; and there had not been one single giggle. The {hero} had crept close — genuinely, expertly close — to every famous hiding place in the game, and the game's most famous sound had simply declined to happen.

'Something is off,' the {hero} muttered. 'I have been close. I know I have. Where is the giggle?'

'Hmm,' said {companion_name}, in the tone of someone who has noticed something and is waiting, with enormous politeness, for you to notice it too.

The {hero} did not notice it. The {hero} did strategy instead. The hollow behind the tall stones: nothing. The gap beneath the drooping fronds where the shadows pooled thickest: nothing. Then a suspicious, champion-sized lump near the path, which the {hero} stalked with tremendous skill and pounced upon magnificently — and which turned out to be {companion_name}, who had been stalking the very same lump from the other side. The actual lump was a rock.

'We are excellent at this,' observed {companion_name}, from underneath the {hero}.

Out of spots, out of theories, and nearly out of dignity, the {hero} flopped back in the dark and let the whole evening replay itself. And there it was, snagged like a thread: the thing the {hero} had seen and not truly seen. Before the game. Teams being picked. Names being shouted one after another, cheerful as popping corn. And at the edge of the noise, the champion, waiting for a name that never came. Of course it never came. Nobody shouts the name of a player they have never once found; over three seasons, the game had slowly, accidentally taught itself to forget them. The champion's smile had slipped, just a little — the {hero} had seen it slip, and filed it under nothing. Their shoulders had curled inward. And they had turned and walked into the evening before the counting even began.

Hold very still now, and listen with your softest listening. Can you hear it too? Hic. The tiniest hiccup in the world, from near the warm glow of the {object_motif}.

The {hero} sat up slowly, feeling the whole night rearrange itself.

'They are not hiding to win,' the {hero} said. 'They have not been playing at all. They are hiding because of a feeling — and I watched that feeling happen and walked straight past it, because I was busy planning to be famous. Noticing has to come first. That is where kindness is born.'

And once the question changed — not where would a clever hider hide, but where would a small forgotten feeling go — the answer stopped being a mystery at all. When you feel forgotten, you do not choose the cleverest spot. You choose the warmest one.

The {hero} crossed over to the {object_motif} — no stalking, no pouncing, no plans — and sat down beside the hollow where its glow ran deepest, and spoke to nobody visible.

'I am not here to win. I saw your smile slip when the names were being called. Mine has slipped exactly like that. Once it made me want to be invisible for a week, and the worst part was how well it worked.'

A long pause. A rustle. And the champion crept out into the glow, blinking, hiccuping once more — hic — and studied the {hero} for a while.

'Three seasons,' the champion said at last. 'Seekers have looked behind every stone in {setting}, little {hero}. You are the first one who ever looked for how I felt. Everyone else was searching for the hiding. You found the me.'

'{refrain},' said {companion_name} softly, and for once added nothing whatsoever about snacks.

They sat together while the glow breathed slow. The champion ruled that the {hero} had officially won the game. The {hero} ruled it a tie. They compromised: the {hero} had won, but the champion would deny it forever.

'Tomorrow,' the champion whispered, 'I will show you my greatest spot. The one nobody will ever find. It has been lonely, if I am honest, being the only one who knows it. You will have to learn to giggle in complete silence.'

'I will practise tonight,' promised the {hero}, and yawned so widely that the promise fell straight into it.

The glow burned down to an ember. The game was over. The friend was found.

Sleep came seeking next. It knew exactly where to look.

{refrain}.`,
    scriptTemplate: `Everyone in {setting} agreed on exactly one thing about the champion: nobody had ever found them. Not in three seasons of hide-and-seek. Seekers had grown up, retired, and handed their searching routes down to younger ones, and still the smallest, quietest player in the game had never once been caught.

There was just one crack in the champion's armour, and everyone knew it. When a seeker got truly close, a giggle slipped out — tiny, helpless, bright as a dropped spoon. Champions, it turns out, are not made of stone.

Tonight was the last game before bed, and {child_name} had privately decided it was going to be a famous night: the night the champion finally got found. There was a list of spots, a strategy, and a best accomplice — {companion_name}, who claimed to be in it purely for the snacks.

But the game went strange. It went long. One by one the other seekers yawned and drifted home to bed; the dark came down soft over {setting}; and there had not been one single giggle. {child_name} had crept close — genuinely, expertly close — to every famous hiding place in the game, and the game's most famous sound had simply declined to happen.

'Something is off,' {child_name} muttered. 'I have been close. I know I have. Where is the giggle?'

'Hmm,' said {companion_name}, in the tone of someone who has noticed something and is waiting, with enormous politeness, for you to notice it too.

{child_name} did not notice it. {child_name} did strategy instead. The hollow behind the tall stones: nothing. The gap beneath the drooping fronds where the shadows pooled thickest: nothing. Then a suspicious, champion-sized lump near the path, which {child_name} stalked with tremendous skill and pounced upon magnificently — and which turned out to be {companion_name}, who had been stalking the very same lump from the other side. The actual lump was a rock.

'We are excellent at this,' observed {companion_name}, from underneath {child_name}.

Out of spots, out of theories, and nearly out of dignity, {child_name} flopped back in the dark and let the whole evening replay itself. And there it was, snagged like a thread: the thing {child_name} had seen and not truly seen. Before the game. Teams being picked. Names being shouted one after another, cheerful as popping corn. And at the edge of the noise, the champion, waiting for a name that never came. Of course it never came. Nobody shouts the name of a player they have never once found; over three seasons, the game had slowly, accidentally taught itself to forget them. The champion's smile had slipped, just a little — {child_name} had seen it slip, and filed it under nothing. Their shoulders had curled inward. And they had turned and walked into the evening before the counting even began.

Hold very still now, and listen with your softest listening. Can you hear it too? Hic. The tiniest hiccup in the world, from near the warm glow of the {object_motif}.

{child_name} sat up slowly, feeling the whole night rearrange itself.

'They are not hiding to win,' {child_name} said. 'They have not been playing at all. They are hiding because of a feeling — and I watched that feeling happen and walked straight past it, because I was busy planning to be famous. Noticing has to come first. That is where kindness is born.'

And once the question changed — not where would a clever hider hide, but where would a small forgotten feeling go — the answer stopped being a mystery at all. When you feel forgotten, you do not choose the cleverest spot. You choose the warmest one.

{child_name} crossed over to the {object_motif} — no stalking, no pouncing, no plans — and sat down beside the hollow where its glow ran deepest, and spoke to nobody visible.

'I am not here to win. I saw your smile slip when the names were being called. Mine has slipped exactly like that. Once it made me want to be invisible for a week, and the worst part was how well it worked.'

A long pause. A rustle. And the champion crept out into the glow, blinking, hiccuping once more — hic — and studied {child_name} for a while.

'Three seasons,' the champion said at last. 'Seekers have looked behind every stone in {setting}, little {hero}. You are the first one who ever looked for how I felt. Everyone else was searching for the hiding. You found the me.'

'{refrain},' said {companion_name} softly, and for once added nothing whatsoever about snacks.

They sat together while the glow breathed slow. The champion ruled that {child_name} had officially won the game. {child_name} ruled it a tie. They compromised: {child_name} had won, but the champion would deny it forever.

'Tomorrow,' the champion whispered, 'I will show you my greatest spot. The one nobody will ever find. It has been lonely, if I am honest, being the only one who knows it. You will have to learn to giggle in complete silence.'

'I will practise tonight,' promised {child_name}, and yawned so widely that the promise fell straight into it.

The glow burned down to an ember. The game was over. The friend was found.

Sleep came seeking next. It knew exactly where to look.

{refrain}.`
  }
},
    audioTemplate: `Tonight was the last hide-and-seek before bed, and the {hero} wanted one thing: to find the champion at last.

The champion was the smallest, quietest player in all of {setting}, and nobody had ever found them. Not once. But everyone knew the champion's one weakness. When a seeker crept close, a tiny giggle always slipped out. Tonight the game had gone on and on, and there had been no giggle anywhere.

One by one the other players yawned and went home. Only the {hero} and {companion_name} stayed.

The {hero} searched the clever way. Behind the tall stone? Nothing. Under the drooping leaves? Nothing. Then the {hero} pounced on a suspicious lump. 'Found you!' But the lump was {companion_name}, sneaking up on it from the other side. The real lump was a rock.

'Hmm,' said {companion_name}. 'You have looked everywhere a clever hider would be, little {hero}.'

The {hero} flopped down to think, and the evening played itself again. Before the game, when everyone was shouting out names for teams, nobody had shouted the champion's name. Their smile had slipped right off. Their shoulders had curled. They had walked away before the counting started.

Hold very still and listen. Can you hear it too? Hic. A tiny hiccup, somewhere near the {object_motif}.

'Oh,' whispered the {hero}, sitting up. 'They are not hiding to win. They are hiding because of a feeling. I saw it happen and I nearly walked right past it. Noticing the feeling comes first. That is where kindness is born.'

Once the {hero} asked where a sad feeling would go, the answer was easy. When you feel forgotten, you go where it is warm.

The {hero} padded over to the soft glow of the {object_motif}. No pouncing. No shouting. Just sitting down beside the little hollow there.

'I heard my name get forgotten once too,' the {hero} said softly. 'It made me want to be invisible.'

A rustle. And the champion crept out into the glow, blinking.

'You found me,' they said. 'Everyone else only ever looked for the hiding. You looked for the me.'

'{refrain},' said {companion_name}, very softly.

The champion said the {hero} had won the game. The {hero} said it was a tie.

'Tomorrow,' the champion whispered, 'I will show you my greatest hiding spot. You will have to giggle very, very quietly.'

The {hero} smiled, and yawned. The glow burned low. Game over. Friend found.

{refrain}.`,
    scriptTemplate: `Tonight was the last hide-and-seek before bed, and {child_name} wanted one thing: to find the champion at last.

The champion was the smallest, quietest player in all of {setting}, and nobody had ever found them. Not once. But everyone knew the champion's one weakness. When a seeker crept close, a tiny giggle always slipped out. Tonight the game had gone on and on, and there had been no giggle anywhere.

One by one the other players yawned and went home. Only {child_name} and {companion_name} stayed.

{child_name} searched the clever way. Behind the tall stone? Nothing. Under the drooping leaves? Nothing. Then {child_name} pounced on a suspicious lump. 'Found you!' But the lump was {companion_name}, sneaking up on it from the other side. The real lump was a rock.

'Hmm,' said {companion_name}. 'You have looked everywhere a clever hider would be, little {hero}.'

{child_name} flopped down to think, and the evening played itself again. Before the game, when everyone was shouting out names for teams, nobody had shouted the champion's name. Their smile had slipped right off. Their shoulders had curled. They had walked away before the counting started.

Hold very still and listen. Can you hear it too? Hic. A tiny hiccup, somewhere near the {object_motif}.

'Oh,' whispered {child_name}, sitting up. 'They are not hiding to win. They are hiding because of a feeling. I saw it happen and I nearly walked right past it. Noticing the feeling comes first. That is where kindness is born.'

Once {child_name} asked where a sad feeling would go, the answer was easy. When you feel forgotten, you go where it is warm.

{child_name} padded over to the soft glow of the {object_motif}. No pouncing. No shouting. Just sitting down beside the little hollow there.

'I heard my name get forgotten once too,' {child_name} said softly. 'It made me want to be invisible.'

A rustle. And the champion crept out into the glow, blinking.

'You found me,' they said. 'Everyone else only ever looked for the hiding. You looked for the me.'

'{refrain},' said {companion_name}, very softly.

The champion said {child_name} had won the game. {child_name} said it was a tie.

'Tomorrow,' the champion whispered, 'I will show you my greatest hiding spot. You will have to giggle very, very quietly.'

{child_name} smiled, and yawned. The glow burned low. Game over. Friend found.

{refrain}.`,
  },
  {
    ordinal: 2, title: "The Mender's Door",
    concept: "Kindness does not have to be big to matter", callback: "Noticing how others feel (Level 1)", ageFloor: 4,
    summary: "The hero's song-chime snaps on the very night it is needed, and the one door in the world that is never shut — the mender's — is shut. Grand thank-you towers and big cheer-up songs get nowhere. What opens the door is what the mender has been teaching everyone all along without saying it: a kindness the size of a single stitch.",
    teachingNote: "Children often think kindness must be big; learning that small acts count makes kindness something they can always offer.",
    learningBeat: "A small kindness",
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} had a song-chime. Every night it sang one silver note. Then came sleep.

But tonight the chime was broken.

The mender fixed everything in {setting}. The mender's door was never shut.

But tonight the door was shut.

Listen. What is missing? No humming. The mender always hums.

The {hero} made a big thank-you tower. One, two, three! Then a great big knock!

Plop. Down fell the tower. The door stayed shut.

'Hmm,' said {companion_name}. 'Maybe try small, little {hero}.'

The {hero} looked close. Cold tea on the step. No humming. The mender was sad in there.

How did the mender fix things? Small things! One stitch. One knot.

'A small kindness!' said the {hero}. 'That is what the door needs.'

So the {hero} said softly, 'Thank you for fixing my things. I like you.'

Click. The door opened.

'You knocked just for me,' smiled the mender.

The mender showed the {hero} one small knot. The {hero} tied it. The chime sang!

'{refrain},' whispered {companion_name}.

The {object_motif} glowed warm.

'Come tomorrow,' said the mender. 'I will show you my smallest tool.'

One small note. One small kindness. Just right.

{refrain}.`,
    scriptTemplate: `{child_name} had a song-chime. Every night it sang one silver note. Then came sleep.

But tonight the chime was broken.

The mender fixed everything in {setting}. The mender's door was never shut.

But tonight the door was shut.

Listen. What is missing? No humming. The mender always hums.

{child_name} made a big thank-you tower. One, two, three! Then a great big knock!

Plop. Down fell the tower. The door stayed shut.

'Hmm,' said {companion_name}. 'Maybe try small, little {hero}.'

{child_name} looked close. Cold tea on the step. No humming. The mender was sad in there.

How did the mender fix things? Small things! One stitch. One knot.

'A small kindness!' said {child_name}. 'That is what the door needs.'

So {child_name} said softly, 'Thank you for fixing my things. I like you.'

Click. The door opened.

'You knocked just for me,' smiled the mender.

The mender showed {child_name} one small knot. {child_name} tied it. The chime sang!

'{refrain},' whispered {companion_name}.

The {object_motif} glowed warm.

'Come tomorrow,' said the mender. 'I will show you my smallest tool.'

One small note. One small kindness. Just right.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} had a song-chime, and tonight it would not sing.

It hung by the {hero}'s sleeping place in {setting} and sang one silver note to end each day. But today a string had snapped.

Only the mender could fix it. The mender mended everything for everyone — a stitch, a knot, one dab of glue — and the mender's door was never, ever shut.

But tonight the door was shut.

Listen at the door. Can you hear what is missing? No humming. The mender always hums.

The {hero} decided a shut door needed something big. So the {hero} stacked the shiniest pebbles and the biggest flower into a thank-you tower, and knocked the grandest knock —

Plop. The tower fell over. The door stayed shut.

'Hmm,' said {companion_name}. 'When your chime broke today, did you want a parade, little {hero}?'

The {hero} sat down on the step and began to notice. Small things. A cup of tea, gone cold. The mending basket out in the damp. The quiet where the humming should be. The mender was not busy in there — the mender was sad in there.

And how did the mender fix the whole of {setting}? With small things. One stitch. One knot. One dab.

'Oh,' said the {hero} softly. 'A small kindness. That is what the mender gives everyone. Maybe that is what a shut door needs too.'

So this time the {hero} did not knock. The {hero} sat close and said, quietly, 'You mended my sail last spring. It still flies. I think of you every time it does. You do not have to open the door.'

Quiet. Then a click. The door opened just a crack, and the mender peeped out.

'All day, everyone brings me broken things,' the mender said. 'You are the first who ever knocked just for me.'

'{refrain},' whispered {companion_name}.

The mender looked at the crooked chime — but did not fix it. They showed the {hero} the one small knot it needed, and the {hero} tied it. The chime sang its silver note.

'Small things, done with care,' said the mender. 'That is my whole secret.'

The {object_motif} glowed between them.

'Come back tomorrow,' the mender said, 'and I will show you the smallest tool in my shop. It fixes the biggest things.'

The {hero} carried the chime home. One small note. One small kindness. Both exactly big enough.

{refrain}.`,
    scriptTemplate: `{child_name} had a song-chime, and tonight it would not sing.

It hung by {child_name}'s sleeping place in {setting} and sang one silver note to end each day. But today a string had snapped.

Only the mender could fix it. The mender mended everything for everyone — a stitch, a knot, one dab of glue — and the mender's door was never, ever shut.

But tonight the door was shut.

Listen at the door. Can you hear what is missing? No humming. The mender always hums.

{child_name} decided a shut door needed something big. So {child_name} stacked the shiniest pebbles and the biggest flower into a thank-you tower, and knocked the grandest knock —

Plop. The tower fell over. The door stayed shut.

'Hmm,' said {companion_name}. 'When your chime broke today, did you want a parade, little {hero}?'

{child_name} sat down on the step and began to notice. Small things. A cup of tea, gone cold. The mending basket out in the damp. The quiet where the humming should be. The mender was not busy in there — the mender was sad in there.

And how did the mender fix the whole of {setting}? With small things. One stitch. One knot. One dab.

'Oh,' said {child_name} softly. 'A small kindness. That is what the mender gives everyone. Maybe that is what a shut door needs too.'

So this time {child_name} did not knock. {child_name} sat close and said, quietly, 'You mended my sail last spring. It still flies. I think of you every time it does. You do not have to open the door.'

Quiet. Then a click. The door opened just a crack, and the mender peeped out.

'All day, everyone brings me broken things,' the mender said. 'You are the first who ever knocked just for me.'

'{refrain},' whispered {companion_name}.

The mender looked at the crooked chime — but did not fix it. They showed {child_name} the one small knot it needed, and {child_name} tied it. The chime sang its silver note.

'Small things, done with care,' said the mender. 'That is my whole secret.'

The {object_motif} glowed between them.

'Come back tomorrow,' the mender said, 'and I will show you the smallest tool in my shop. It fixes the biggest things.'

{child_name} carried the chime home. One small note. One small kindness. Both exactly big enough.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `In {setting} there was a door that was never shut, and behind it lived the mender.

Nobody remembered a time before the mender. Torn things went to the door. So did wobbly things, leaky things, squeaky things. The mender would turn each one over twice, hum a low mending sort of hum, and make it whole with something tiny — one stitch, one knot, one dab of glue.

Tonight, the {hero} needed that door. The {hero}'s song-chime — which hung by the sleeping place and sang one silver note at the end of every day, the note that meant now you can sleep — had snapped a string that afternoon and gone crooked and silent. A whole night without the note was not to be imagined.

But the door was shut.

The {hero} stood before it, broken chime in hand, feeling the floor rearrange. 'It is never shut,' the {hero} said. 'That is the whole thing about it.'

Come close and listen with me. Do you notice what is missing? No humming. The mender hums the way rain rains. And tonight, behind the shut door: nothing.

The {hero} decided big problems — everyone knew — needed big answers. So the {hero} built one: a thank-you tower of the roundest pebbles and the grandest flower in {setting}, stacked taller than the {hero}'s own head. Then a knock to match, a knock with importance in it.

The knock had too much importance. The tower swayed, bowed, and came down entirely. Plop. The door did not move.

Next the {hero} tried a cheering-up song, loud, with actions. Somewhere inside, very gently, a shutter closed.

'Hmm,' said {companion_name}, from the edge of the step. 'This afternoon, when your chime snapped — did you want someone to sing at you, little {hero}?'

The {hero} opened their mouth to say yes, obviously, and found the word would not come out.

So the {hero} sat down on the step instead, and did the thing that should have come first: looked. Small things. The cup of tea by the mat, full, gone cold. The mending basket sitting out in the damp, which the mender would never allow. The quiet where the humming lived. Whoever was behind that door was not busy. They were sad — sad in the particular way of somebody who spends every day being the helper, and never once gets helped.

And the {hero} thought about how the mender actually fixed things. Not one grand gesture in all those years. Ten thousand tiny ones. One stitch. One knot. One dab.

'Oh,' the {hero} said slowly. 'I have been knocking with the wrong size. A small kindness — that is what the mender has given every single one of us. Maybe it is what the mender is missing.'

So the {hero} leaned near the door and said, in a voice made for one listener only: 'You mended my sail last spring. It still flies. I think of you every time it does. That is all I came to say. You do not have to open the door.'

Silence. Then, from inside, a small click.

The door opened a crack, and the mender looked out, blinking.

'All day long, they bring me broken things,' the mender said. 'Torn sails, cracked bowls, wobbling carts. In forty years, you are the first to knock about something that was not broken.'

'Your door was,' said the {hero}. 'Sort of.'

'{refrain},' murmured {companion_name}, and the mender laughed — one small surprised laugh, like a hinge remembering how.

Inside, the mender warmed the tea and looked at the crooked chime, and did not fix it. Instead, the mender pointed out the one small knot it needed, folded their arms, and watched the {hero} tie it. The chime swung straight, and the silver note rang out hours early, sounding like it had missed everyone.

'Small things, done with care,' the mender said. 'That is the entire trade. You worked it out on my doorstep tonight.'

They drank the tea while the {object_motif} glowed warm between them and the evening leaned down over {setting}.

'Come back tomorrow,' the mender said. 'I will show you the smallest tool in the shop. It fixes the biggest things, and I have never once shown it to anybody.'

The {hero} carried the chime home slow, its note swinging quietly with each step.

One small knot. One small kindness. Both exactly the right size.

{refrain}.`,
    scriptTemplate: `In {setting} there was a door that was never shut, and behind it lived the mender.

Nobody remembered a time before the mender. Torn things went to the door. So did wobbly things, leaky things, squeaky things. The mender would turn each one over twice, hum a low mending sort of hum, and make it whole with something tiny — one stitch, one knot, one dab of glue.

Tonight, {child_name} needed that door. {child_name}'s song-chime — which hung by the sleeping place and sang one silver note at the end of every day, the note that meant now you can sleep — had snapped a string that afternoon and gone crooked and silent. A whole night without the note was not to be imagined.

But the door was shut.

{child_name} stood before it, broken chime in hand, feeling the floor rearrange. 'It is never shut,' {child_name} said. 'That is the whole thing about it.'

Come close and listen with me. Do you notice what is missing? No humming. The mender hums the way rain rains. And tonight, behind the shut door: nothing.

{child_name} decided big problems — everyone knew — needed big answers. So {child_name} built one: a thank-you tower of the roundest pebbles and the grandest flower in {setting}, stacked taller than {child_name}'s own head. Then a knock to match, a knock with importance in it.

The knock had too much importance. The tower swayed, bowed, and came down entirely. Plop. The door did not move.

Next {child_name} tried a cheering-up song, loud, with actions. Somewhere inside, very gently, a shutter closed.

'Hmm,' said {companion_name}, from the edge of the step. 'This afternoon, when your chime snapped — did you want someone to sing at you, little {hero}?'

{child_name} opened their mouth to say yes, obviously, and found the word would not come out.

So {child_name} sat down on the step instead, and did the thing that should have come first: looked. Small things. The cup of tea by the mat, full, gone cold. The mending basket sitting out in the damp, which the mender would never allow. The quiet where the humming lived. Whoever was behind that door was not busy. They were sad — sad in the particular way of somebody who spends every day being the helper, and never once gets helped.

And {child_name} thought about how the mender actually fixed things. Not one grand gesture in all those years. Ten thousand tiny ones. One stitch. One knot. One dab.

'Oh,' {child_name} said slowly. 'I have been knocking with the wrong size. A small kindness — that is what the mender has given every single one of us. Maybe it is what the mender is missing.'

So {child_name} leaned near the door and said, in a voice made for one listener only: 'You mended my sail last spring. It still flies. I think of you every time it does. That is all I came to say. You do not have to open the door.'

Silence. Then, from inside, a small click.

The door opened a crack, and the mender looked out, blinking.

'All day long, they bring me broken things,' the mender said. 'Torn sails, cracked bowls, wobbling carts. In forty years, you are the first to knock about something that was not broken.'

'Your door was,' said {child_name}. 'Sort of.'

'{refrain},' murmured {companion_name}, and the mender laughed — one small surprised laugh, like a hinge remembering how.

Inside, the mender warmed the tea and looked at the crooked chime, and did not fix it. Instead, the mender pointed out the one small knot it needed, folded their arms, and watched {child_name} tie it. The chime swung straight, and the silver note rang out hours early, sounding like it had missed everyone.

'Small things, done with care,' the mender said. 'That is the entire trade. You worked it out on my doorstep tonight.'

They drank the tea while the {object_motif} glowed warm between them and the evening leaned down over {setting}.

'Come back tomorrow,' the mender said. 'I will show you the smallest tool in the shop. It fixes the biggest things, and I have never once shown it to anybody.'

{child_name} carried the chime home slow, its note swinging quietly with each step.

One small knot. One small kindness. Both exactly the right size.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `Every place has one door that is never shut, and in {setting} that door belonged to the mender.

Nobody could remember a time before the mender. Torn things, wobbling things, leaking things — all went to that door, and all came back whole. The strange magic of the trade was this: the mender never fixed anything with anything big. You could bring an enormous disaster; the mender would turn it over twice, hum a low mending hum, and defeat the whole catastrophe with one stitch, or one knot, or one dab of glue, leaving you feeling you had watched a mountain moved with a teaspoon.

Tonight the {hero} needed that door. By the {hero}'s sleeping place hung a song-chime that sang one silver note each night — the note that meant the day is done, you did enough, now sleep — and that afternoon a string had snapped, and the chime hung crooked and mute. But the door was shut.

The {hero} stood in front of it, chime in hand, feeling the evening tilt. A shut door was not a thing this door did. Rain fell down; the mender's door stood open; that was simply how {setting} worked.

Stand on the step and listen. Can you tell what is missing? No humming. The mender hums the way rain rains. Behind the shut door, there is only quiet.

A shut door was a big problem, and big problems, as everyone knows, demand big solutions. The {hero} was extremely good at big solutions. First came the thank-you tower: the roundest pebbles and the grandest flower in {setting}, stacked into a monument taller than the {hero}. Then the knock to match — a knock with real ceremony in it. The ceremony proved too much for the monument, which swayed once and came down in ruins. Plop. The door did not so much as shiver.

Next came the speech, delivered to the door itself, on the theme of how valued the mender was. Halfway through, somewhere inside, a shutter closed. Gently. The gentleness was somehow worse.

'Hmm,' said {companion_name}. 'This afternoon, when your chime snapped — did you want a monument, little {hero}? A speech?'

The {hero} began to say yes, obviously, and discovered halfway that the word had quietly left. What the {hero} had wanted that afternoon was somebody to sit down next to the wreckage and say: that matters to me too.

So the {hero} sat down on the step and finally did what should have come first: noticed. Small things — the kind you only find when you stop performing and start looking. The cup of tea by the mat, full, stone cold. The mending basket out in the damp, which the mender would never in forty years allow. The silence where the humming lived. The {hero} read the signs the way you read weather. The one behind that door was not busy. They were sad — sad in the particular way of someone who has spent a lifetime being the helper, and has begun to wonder whether anyone would ever ask the return question. Who mends the mender?

And there on the step, the {hero} finally understood the trade. The mender had never once solved anything with a monument. Ten thousand tiny mends — that was the whole career. One stitch. One knot. One dab.

'I have been knocking in the wrong size,' the {hero} said slowly. 'A small kindness — that is what the mender has handed out every day, to everyone, forever. And it is exactly the thing nobody ever thought to hand back.'

The {hero} leaned close to the shut door and spoke in a voice built for a single listener.

'You mended my sail last spring. It still flies. I think of you every time it does. That is all I came to say. You do not have to open the door.'

A long silence. Then a click, and the door opened a careful crack, and the mender looked out, blinking.

'Forty years,' the mender said. 'They bring me torn sails and cracked bowls and wobbling carts. But you are the first one who ever knocked about a thing that was not broken.'

'Your door was,' the {hero} said. 'Sort of. The broken part was just on the inside.'

The mender laughed — one small, surprised laugh, like a hinge remembering what it was for. '{refrain},' murmured {companion_name}.

Inside, the tea was warmed. And when the mender took the crooked chime, they did not fix it. They set it on the bench, pointed to the one small knot it needed, and folded their arms — and the {hero}, in the warm glow of the {object_motif}, tied it themselves. The chime swung straight, and the silver note rang out hours early, sounding enormously pleased with itself.

'Small things, done with care,' the mender said. 'That is the entire secret of my trade, and you worked it out on my own doorstep.'

They drank the tea down slow while the evening settled over {setting}.

'Come back tomorrow,' the mender said. 'I will show you the smallest tool in the shop — the one that fixes the biggest things. Forty years, and I have never shown it to a single soul.'

The {hero} walked home slow and warm, the chime chiming faintly at each step.

One small knot. One small kindness. Both, in the end, exactly the right size.

{refrain}.`,
    scriptTemplate: `Every place has one door that is never shut, and in {setting} that door belonged to the mender.

Nobody could remember a time before the mender. Torn things, wobbling things, leaking things — all went to that door, and all came back whole. The strange magic of the trade was this: the mender never fixed anything with anything big. You could bring an enormous disaster; the mender would turn it over twice, hum a low mending hum, and defeat the whole catastrophe with one stitch, or one knot, or one dab of glue, leaving you feeling you had watched a mountain moved with a teaspoon.

Tonight {child_name} needed that door. By {child_name}'s sleeping place hung a song-chime that sang one silver note each night — the note that meant the day is done, you did enough, now sleep — and that afternoon a string had snapped, and the chime hung crooked and mute. But the door was shut.

{child_name} stood in front of it, chime in hand, feeling the evening tilt. A shut door was not a thing this door did. Rain fell down; the mender's door stood open; that was simply how {setting} worked.

Stand on the step and listen. Can you tell what is missing? No humming. The mender hums the way rain rains. Behind the shut door, there is only quiet.

A shut door was a big problem, and big problems, as everyone knows, demand big solutions. {child_name} was extremely good at big solutions. First came the thank-you tower: the roundest pebbles and the grandest flower in {setting}, stacked into a monument taller than {child_name}. Then the knock to match — a knock with real ceremony in it. The ceremony proved too much for the monument, which swayed once and came down in ruins. Plop. The door did not so much as shiver.

Next came the speech, delivered to the door itself, on the theme of how valued the mender was. Halfway through, somewhere inside, a shutter closed. Gently. The gentleness was somehow worse.

'Hmm,' said {companion_name}. 'This afternoon, when your chime snapped — did you want a monument, little {hero}? A speech?'

{child_name} began to say yes, obviously, and discovered halfway that the word had quietly left. What {child_name} had wanted that afternoon was somebody to sit down next to the wreckage and say: that matters to me too.

So {child_name} sat down on the step and finally did what should have come first: noticed. Small things — the kind you only find when you stop performing and start looking. The cup of tea by the mat, full, stone cold. The mending basket out in the damp, which the mender would never in forty years allow. The silence where the humming lived. {child_name} read the signs the way you read weather. The one behind that door was not busy. They were sad — sad in the particular way of someone who has spent a lifetime being the helper, and has begun to wonder whether anyone would ever ask the return question. Who mends the mender?

And there on the step, {child_name} finally understood the trade. The mender had never once solved anything with a monument. Ten thousand tiny mends — that was the whole career. One stitch. One knot. One dab.

'I have been knocking in the wrong size,' {child_name} said slowly. 'A small kindness — that is what the mender has handed out every day, to everyone, forever. And it is exactly the thing nobody ever thought to hand back.'

{child_name} leaned close to the shut door and spoke in a voice built for a single listener.

'You mended my sail last spring. It still flies. I think of you every time it does. That is all I came to say. You do not have to open the door.'

A long silence. Then a click, and the door opened a careful crack, and the mender looked out, blinking.

'Forty years,' the mender said. 'They bring me torn sails and cracked bowls and wobbling carts. But you are the first one who ever knocked about a thing that was not broken.'

'Your door was,' {child_name} said. 'Sort of. The broken part was just on the inside.'

The mender laughed — one small, surprised laugh, like a hinge remembering what it was for. '{refrain},' murmured {companion_name}.

Inside, the tea was warmed. And when the mender took the crooked chime, they did not fix it. They set it on the bench, pointed to the one small knot it needed, and folded their arms — and {child_name}, in the warm glow of the {object_motif}, tied it themselves. The chime swung straight, and the silver note rang out hours early, sounding enormously pleased with itself.

'Small things, done with care,' the mender said. 'That is the entire secret of my trade, and you worked it out on my own doorstep.'

They drank the tea down slow while the evening settled over {setting}.

'Come back tomorrow,' the mender said. 'I will show you the smallest tool in the shop — the one that fixes the biggest things. Forty years, and I have never shown it to a single soul.'

{child_name} walked home slow and warm, the chime chiming faintly at each step.

One small knot. One small kindness. Both, in the end, exactly the right size.

{refrain}.`
  }
},
    audioTemplate: `The {hero} had a song-chime, and tonight it would not sing.

It hung by the {hero}'s sleeping place in {setting} and sang one silver note to end each day. But today a string had snapped.

Only the mender could fix it. The mender mended everything for everyone — a stitch, a knot, one dab of glue — and the mender's door was never, ever shut.

But tonight the door was shut.

Listen at the door. Can you hear what is missing? No humming. The mender always hums.

The {hero} decided a shut door needed something big. So the {hero} stacked the shiniest pebbles and the biggest flower into a thank-you tower, and knocked the grandest knock —

Plop. The tower fell over. The door stayed shut.

'Hmm,' said {companion_name}. 'When your chime broke today, did you want a parade, little {hero}?'

The {hero} sat down on the step and began to notice. Small things. A cup of tea, gone cold. The mending basket out in the damp. The quiet where the humming should be. The mender was not busy in there — the mender was sad in there.

And how did the mender fix the whole of {setting}? With small things. One stitch. One knot. One dab.

'Oh,' said the {hero} softly. 'A small kindness. That is what the mender gives everyone. Maybe that is what a shut door needs too.'

So this time the {hero} did not knock. The {hero} sat close and said, quietly, 'You mended my sail last spring. It still flies. I think of you every time it does. You do not have to open the door.'

Quiet. Then a click. The door opened just a crack, and the mender peeped out.

'All day, everyone brings me broken things,' the mender said. 'You are the first who ever knocked just for me.'

'{refrain},' whispered {companion_name}.

The mender looked at the crooked chime — but did not fix it. They showed the {hero} the one small knot it needed, and the {hero} tied it. The chime sang its silver note.

'Small things, done with care,' said the mender. 'That is my whole secret.'

The {object_motif} glowed between them.

'Come back tomorrow,' the mender said, 'and I will show you the smallest tool in my shop. It fixes the biggest things.'

The {hero} carried the chime home. One small note. One small kindness. Both exactly big enough.

{refrain}.`,
    scriptTemplate: `{child_name} had a song-chime, and tonight it would not sing.

It hung by {child_name}'s sleeping place in {setting} and sang one silver note to end each day. But today a string had snapped.

Only the mender could fix it. The mender mended everything for everyone — a stitch, a knot, one dab of glue — and the mender's door was never, ever shut.

But tonight the door was shut.

Listen at the door. Can you hear what is missing? No humming. The mender always hums.

{child_name} decided a shut door needed something big. So {child_name} stacked the shiniest pebbles and the biggest flower into a thank-you tower, and knocked the grandest knock —

Plop. The tower fell over. The door stayed shut.

'Hmm,' said {companion_name}. 'When your chime broke today, did you want a parade, little {hero}?'

{child_name} sat down on the step and began to notice. Small things. A cup of tea, gone cold. The mending basket out in the damp. The quiet where the humming should be. The mender was not busy in there — the mender was sad in there.

And how did the mender fix the whole of {setting}? With small things. One stitch. One knot. One dab.

'Oh,' said {child_name} softly. 'A small kindness. That is what the mender gives everyone. Maybe that is what a shut door needs too.'

So this time {child_name} did not knock. {child_name} sat close and said, quietly, 'You mended my sail last spring. It still flies. I think of you every time it does. You do not have to open the door.'

Quiet. Then a click. The door opened just a crack, and the mender peeped out.

'All day, everyone brings me broken things,' the mender said. 'You are the first who ever knocked just for me.'

'{refrain},' whispered {companion_name}.

The mender looked at the crooked chime — but did not fix it. They showed {child_name} the one small knot it needed, and {child_name} tied it. The chime sang its silver note.

'Small things, done with care,' said the mender. 'That is my whole secret.'

The {object_motif} glowed between them.

'Come back tomorrow,' the mender said, 'and I will show you the smallest tool in my shop. It fixes the biggest things.'

{child_name} carried the chime home. One small note. One small kindness. Both exactly big enough.

{refrain}.`,
  },
  {
    ordinal: 3, title: "The Friend Who Hurried Past",
    concept: "Imagining how another person feels", callback: "Noticing how others feel (Level 1)", ageFloor: 4,
    summary: "Two mysteries in one week: the softest things keep vanishing, and the hero's best friend rushes past the meeting rock without stopping. Chasing fails and the stakeout ends in a nap — the case only cracks when the hero walks the friend's exact path, imagining the friend's worry, and both mysteries turn out to share one small, peeping answer.",
    teachingNote: "Perspective-taking — imagining another's inner world — is the heart of empathy and the antidote to quick judgement.",
    learningBeat: "walking in someone's shoes",
    ageVariants: {
  '3-4': {
    audioTemplate: `The {hero} had a best friend. Every night they played by the meeting rock in {setting}.

Tonight the friend ran right past! 'Not now — sorry!' Into the reeds.

Soft things kept going missing! Moss. Seed-down. A feather. Only soft things!

The {hero} chased. Too fast. Gone! Then pounced on a rustle. Oops! Only a leaf.

'Hmm,' said {companion_name}. 'What did your friend feel, little {hero}?'

The {hero} thought. The friend's eyes looked worried. Not mean. Worried.

So the {hero} walked the friend's walk. Step, step. Arms full. Hurry, hurry.

'It is like walking in someone's shoes!' said the {hero}. 'My friend was not mean. Just worried about something small!'

Listen! Can you hear it too? Peep! Who says peep?

The {hero} fetched their softest blanket-scrap and went into the reeds.

There was the friend, with a nest of moss. And inside — a tiny lost bird!

'Its family comes back at sunrise,' whispered the friend.

The {hero} tucked the blanket-scrap in. The peeping stopped. The little bird slept.

'{refrain},' whispered {companion_name}. The {object_motif} glowed over the nest.

'Watch the family come with me?' asked the friend.

'Yes!' said the {hero}.

Two friends. One nest. Sleepy now.

{refrain}.`,
    scriptTemplate: `{child_name} had a best friend. Every night they played by the meeting rock in {setting}.

Tonight the friend ran right past! 'Not now — sorry!' Into the reeds.

Soft things kept going missing! Moss. Seed-down. A feather. Only soft things!

{child_name} chased. Too fast. Gone! Then pounced on a rustle. Oops! Only a leaf.

'Hmm,' said {companion_name}. 'What did your friend feel, little {hero}?'

{child_name} thought. The friend's eyes looked worried. Not mean. Worried.

So {child_name} walked the friend's walk. Step, step. Arms full. Hurry, hurry.

'It is like walking in someone's shoes!' said {child_name}. 'My friend was not mean. Just worried about something small!'

Listen! Can you hear it too? Peep! Who says peep?

{child_name} fetched their softest blanket-scrap and went into the reeds.

There was the friend, with a nest of moss. And inside — a tiny lost bird!

'Its family comes back at sunrise,' whispered the friend.

{child_name} tucked the blanket-scrap in. The peeping stopped. The little bird slept.

'{refrain},' whispered {companion_name}. The {object_motif} glowed over the nest.

'Watch the family come with me?' asked the friend.

'Yes!' said {child_name}.

Two friends. One nest. Sleepy now.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} and their best friend met every evening at the meeting rock in {setting}. Without fail.

But tonight the friend came hurrying along the path, arms full — and hurried straight past. 'Not now — sorry!' they called, and vanished into the tall reeds.

The {hero} stood at the meeting rock, alone.

And that was not the only mystery. All week, the softest things had been going missing. Moss from the {hero}'s step. The fluffiest seed-down. A feather. Only soft things.

The {hero} tried chasing. But the friend was quicker, and the reeds closed behind them.

So the {hero} set a trap: the fluffiest feather ever found. The {hero} hid, and watched — and fell asleep watching. When the {hero} woke, the feather was gone.

'Hmm,' said {companion_name}. 'You know what your friend did. Do you know what your friend felt, little {hero}?'

Felt? The {hero} thought back and noticed, the way the {hero} had learned to notice. Worried eyes. A kind voice. Not a mean rush. A worried rush.

So the {hero} tried something new: standing where the friend had stood, walking where the friend had walked. Arms full. Heart hurrying. Somewhere to be.

'It is like walking in someone's shoes,' said the {hero} slowly. 'If I walk where they walked and feel what they felt... they were not being unkind. They were being careful, and worried, and hurrying back to something —'

Listen. Can you hear it too? Peep. A tiny sound from the reeds. What sort of someone says peep?

'— something very small!' finished the {hero}.

Two mysteries. One answer. The {hero} fetched the softest thing they owned — their blanket-scrap — and carried it into the reeds.

There sat the friend, beside a nest of moss and seed-down and one feather. In the nest: a tiny lost bird, peeping.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. I wanted to tell you — but every time I put it down, it peeped so sadly!'

'You do not have to be sorry,' said the {hero}, tucking the blanket-scrap in. 'I walked your walk. I know.'

The peeping stopped. The little bird slept.

'{refrain},' murmured {companion_name}, and the {object_motif} glowed gently over the nest.

'Sunrise,' whispered the friend. 'Will you watch its family come?'

'I would not miss it,' whispered the {hero}.

One nest, finished. One friend, found again. Two mysteries, fast asleep.

{refrain}.`,
    scriptTemplate: `{child_name} and their best friend met every evening at the meeting rock in {setting}. Without fail.

But tonight the friend came hurrying along the path, arms full — and hurried straight past. 'Not now — sorry!' they called, and vanished into the tall reeds.

{child_name} stood at the meeting rock, alone.

And that was not the only mystery. All week, the softest things had been going missing. Moss from {child_name}'s step. The fluffiest seed-down. A feather. Only soft things.

{child_name} tried chasing. But the friend was quicker, and the reeds closed behind them.

So {child_name} set a trap: the fluffiest feather ever found. {child_name} hid, and watched — and fell asleep watching. When {child_name} woke, the feather was gone.

'Hmm,' said {companion_name}. 'You know what your friend did. Do you know what your friend felt, little {hero}?'

Felt? {child_name} thought back and noticed, the way {child_name} had learned to notice. Worried eyes. A kind voice. Not a mean rush. A worried rush.

So {child_name} tried something new: standing where the friend had stood, walking where the friend had walked. Arms full. Heart hurrying. Somewhere to be.

'It is like walking in someone's shoes,' said {child_name} slowly. 'If I walk where they walked and feel what they felt... they were not being unkind. They were being careful, and worried, and hurrying back to something —'

Listen. Can you hear it too? Peep. A tiny sound from the reeds. What sort of someone says peep?

'— something very small!' finished {child_name}.

Two mysteries. One answer. {child_name} fetched the softest thing they owned — their blanket-scrap — and carried it into the reeds.

There sat the friend, beside a nest of moss and seed-down and one feather. In the nest: a tiny lost bird, peeping.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. I wanted to tell you — but every time I put it down, it peeped so sadly!'

'You do not have to be sorry,' said {child_name}, tucking the blanket-scrap in. 'I walked your walk. I know.'

The peeping stopped. The little bird slept.

'{refrain},' murmured {companion_name}, and the {object_motif} glowed gently over the nest.

'Sunrise,' whispered the friend. 'Will you watch its family come?'

'I would not miss it,' whispered {child_name}.

One nest, finished. One friend, found again. Two mysteries, fast asleep.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} kept two mysteries that week, and by tonight both had grown too big to ignore.

Mystery one: the missing soft things. It had started small — a tuft of moss gone from the {hero}'s step. Then the fluffiest seed-down vanished from the hollow. Then a feather, the good one. Nothing shiny was ever taken, nothing sweet. Only the softest things in {setting}, disappearing one by one.

Mystery two arrived tonight, and it was worse. The {hero}'s best friend — the friend of the meeting rock, of every single evening — came hurrying down the path with their arms full and their face set, and rushed straight past. 'Not now — sorry!' they called over one shoulder, and the tall reeds swallowed them whole.

The {hero} stood at the meeting rock feeling like a door had closed with no click.

'Right,' said the {hero}, rolling up imaginary sleeves. 'Detective time.'

The {hero} chased first — but the friend knew the paths better, and the reeds kept their secret. Next came the stakeout: the {hero} laid the fluffiest feather left in {setting} out in the open, then hid to watch the trap. The watching was thrilling for ten whole minutes. Then it was less thrilling. Then the {hero} was asleep with one eye technically open. When the {hero} woke, the feather was gone.

'I have been burgled,' the {hero} announced. 'During my own stakeout.'

'Hmm,' said {companion_name}, trying not to smile. 'You keep asking what your friend did, little {hero}. Have you asked what your friend felt?'

Felt. The {hero} stopped. And the {hero} went back over the evening the way you go back over a path looking for something dropped — noticing, properly this time. The friend's arms: full. The friend's voice: not cold. Kind, and stretched thin. The friend's eyes: not sneaky. Worried. And they had said sorry. Rude people do not say sorry over their shoulder. Worried people do.

So the {hero} tried the strangest detective trick of all. The {hero} walked to where the friend had first appeared, stood the way the friend had stood, and set off along the friend's exact route — hurrying, arms curled around an imaginary bundle, heart going quick. Not mean-quick. Worried-quick. What hurries like this? What will not stop even for a best friend?

'It is like walking in someone's shoes,' the {hero} murmured. 'Walk where they walked, feel what they felt. And this feels like looking after something. Something that cannot wait. Something small enough to carry and too important to put down —'

Stop. Hold your breath and listen. There — can you hear it too? Peep. The smallest sound in {setting}, coming from the reeds. What sort of someone says peep?

'— something with feathers!' said the {hero}, and both mysteries fell together into one answer, the way two halves of a shell close.

Soft things, gathered one by one. A friend who could not stop, could not explain, could not put the something down. The {hero} ran home and fetched the softest thing they owned — the old scrap of blanket they had slept with since forever — and carried it into the reeds.

And there it all was. The friend, sitting very still. A nest, built from a week of missing softness: the moss, the seed-down, the good feather. And in the nest, a tiny lost bird, no bigger than a plum, peeping at the night.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. I have been meaning to tell you all week. But every time I put it down, it peeped so sadly that I picked it right back up.'

'You do not have to explain,' said the {hero}, kneeling and tucking the blanket-scrap gently around the little bird. 'I walked your walk tonight. I felt about one-tenth of your worry, and even that was heavy.'

The peeping slowed. The peeping stopped. The little bird slept, wrapped in the softest collection in {setting}.

'{refrain},' murmured {companion_name}, and the {object_motif} spread its warm glow over the nest like one more blanket.

The two friends sat shoulder to shoulder while the stars came out.

'I thought you did not want to see me,' the {hero} admitted.

'I thought about you every day,' said the friend. 'I just had my arms full.'

'Sunrise,' said the {hero}. 'We watch the family come back together. Deal?'

'Deal,' said the friend.

One nest, finished. One friendship, fuller than before. Two mysteries, sound asleep.

{refrain}.`,
    scriptTemplate: `{child_name} kept two mysteries that week, and by tonight both had grown too big to ignore.

Mystery one: the missing soft things. It had started small — a tuft of moss gone from {child_name}'s step. Then the fluffiest seed-down vanished from the hollow. Then a feather, the good one. Nothing shiny was ever taken, nothing sweet. Only the softest things in {setting}, disappearing one by one.

Mystery two arrived tonight, and it was worse. {child_name}'s best friend — the friend of the meeting rock, of every single evening — came hurrying down the path with their arms full and their face set, and rushed straight past. 'Not now — sorry!' they called over one shoulder, and the tall reeds swallowed them whole.

{child_name} stood at the meeting rock feeling like a door had closed with no click.

'Right,' said {child_name}, rolling up imaginary sleeves. 'Detective time.'

{child_name} chased first — but the friend knew the paths better, and the reeds kept their secret. Next came the stakeout: {child_name} laid the fluffiest feather left in {setting} out in the open, then hid to watch the trap. The watching was thrilling for ten whole minutes. Then it was less thrilling. Then {child_name} was asleep with one eye technically open. When {child_name} woke, the feather was gone.

'I have been burgled,' {child_name} announced. 'During my own stakeout.'

'Hmm,' said {companion_name}, trying not to smile. 'You keep asking what your friend did, little {hero}. Have you asked what your friend felt?'

Felt. {child_name} stopped. And {child_name} went back over the evening the way you go back over a path looking for something dropped — noticing, properly this time. The friend's arms: full. The friend's voice: not cold. Kind, and stretched thin. The friend's eyes: not sneaky. Worried. And they had said sorry. Rude people do not say sorry over their shoulder. Worried people do.

So {child_name} tried the strangest detective trick of all. {child_name} walked to where the friend had first appeared, stood the way the friend had stood, and set off along the friend's exact route — hurrying, arms curled around an imaginary bundle, heart going quick. Not mean-quick. Worried-quick. What hurries like this? What will not stop even for a best friend?

'It is like walking in someone's shoes,' {child_name} murmured. 'Walk where they walked, feel what they felt. And this feels like looking after something. Something that cannot wait. Something small enough to carry and too important to put down —'

Stop. Hold your breath and listen. There — can you hear it too? Peep. The smallest sound in {setting}, coming from the reeds. What sort of someone says peep?

'— something with feathers!' said {child_name}, and both mysteries fell together into one answer, the way two halves of a shell close.

Soft things, gathered one by one. A friend who could not stop, could not explain, could not put the something down. {child_name} ran home and fetched the softest thing they owned — the old scrap of blanket they had slept with since forever — and carried it into the reeds.

And there it all was. The friend, sitting very still. A nest, built from a week of missing softness: the moss, the seed-down, the good feather. And in the nest, a tiny lost bird, no bigger than a plum, peeping at the night.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. I have been meaning to tell you all week. But every time I put it down, it peeped so sadly that I picked it right back up.'

'You do not have to explain,' said {child_name}, kneeling and tucking the blanket-scrap gently around the little bird. 'I walked your walk tonight. I felt about one-tenth of your worry, and even that was heavy.'

The peeping slowed. The peeping stopped. The little bird slept, wrapped in the softest collection in {setting}.

'{refrain},' murmured {companion_name}, and the {object_motif} spread its warm glow over the nest like one more blanket.

The two friends sat shoulder to shoulder while the stars came out.

'I thought you did not want to see me,' {child_name} admitted.

'I thought about you every day,' said the friend. 'I just had my arms full.'

'Sunrise,' said {child_name}. 'We watch the family come back together. Deal?'

'Deal,' said the friend.

One nest, finished. One friendship, fuller than before. Two mysteries, sound asleep.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `That week, the {hero} was keeping a list of mysteries, and the list had two things on it.

The first was the affair of the missing soft things. A tuft of moss, gone from the {hero}'s step. The fluffiest seed-down in {setting}, gone. A feather — the good feather — gone. Nothing shiny was ever taken, nothing sweet, nothing valuable. Only softness. It was the politest burglary imaginable, and it was happening every single day.

The second mystery arrived tonight, and it hurt. The {hero}'s best friend — the friend of the meeting rock, the friend of every evening — came hurrying down the path with their arms curled around something and their face set like a closed door, and went straight past. 'Not now — sorry!' they called over one shoulder, and the tall reeds swallowed them whole.

The {hero} stood at the meeting rock for a while, being very reasonable about it, and then stopped being reasonable. Best friends did not rush past. That was practically the definition of best friends.

'Fine,' said the {hero}. 'Then this becomes a case.'

The case did not go well. Chasing failed first: the friend knew the reed-paths better, and the reeds kept their secrets. The stakeout failed second, and more embarrassingly. The {hero} laid out bait — the fluffiest feather remaining in {setting} — and the watching was gripping for ten minutes, tolerable for five more, and then it was morning-style sleep in the middle of the evening. The {hero} woke to find the feather gone and, insultingly, a soft corner missing from their own bedding.

'Burgled,' said the {hero}, with dignity. 'During my own stakeout.'

'Hmm,' said {companion_name}, who had watched the entire thing and would clearly be retelling it for years. 'Your case is all abouts and wheres, little {hero}. You have not asked a single what-did-it-feel-like.'

It was an odd thing to say to a detective, and it worked. When the {hero} stopped listing what the friend had done and started noticing how the friend had been — really noticing, the old way, the first-kindness way — the whole picture changed colour. The arms: full, held the way you hold things that matter. The voice: not cold. Kind, and stretched thin. The eyes: not sneaky, not cross. Worried. And there was the apology, thrown back over one shoulder like a rope. Rude people do not throw ropes.

So the {hero} tried the strangest trick of all. The {hero} went to where the friend had first appeared, stood exactly as the friend had stood — and then walked the friend's route, step for step, arms curled around an imaginary bundle, hurrying the same hurry. And somewhere along that walk the {hero} stopped being a detective following a suspect and became, briefly, the friend: arms full, heart going quick, no room to stop, not even for the person you most wanted to stop for.

'It is like walking in someone's shoes,' the {hero} said, half aloud. 'You walk where they walked and you start to feel what they felt. And this feels like looking after something. Something that cannot wait, and cannot be put down, and cannot be explained fast enough to be worth stopping —'

Wait. Stand still. Listen — under the wind, under the reeds. Can you hear it too? Peep. The smallest sound in {setting}. Ask yourself, detective: what sort of someone says peep?

'— something with feathers,' the {hero} finished, and the two mysteries collapsed into one answer, neat as two halves of a shell closing. A week of vanished softness. A friend who would not stop. One cause, small and warm and peeping in the dark.

The {hero} ran home for the softest thing they owned — the old blanket-scrap nobody was allowed to mention — and carried it into the reeds.

And there it was, all of it. The friend, sitting perfectly still. A nest built from a week of missing softness — the moss, the down, the good feather, the corner of bedding. And in the nest, a tiny lost bird, peeping up at the night.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. They always do. I meant to tell you a hundred times. But every time I set it down to come and find you, it peeped so sadly that I picked it straight back up.'

'You do not have to explain,' said the {hero}, kneeling and tucking the blanket-scrap around the little bird. 'I walked your walk tonight. I carried your invisible bundle for about forty steps, and even the imaginary version was heavy.'

The peeping slowed, and softened, and stopped. The little bird slept, wrapped in the entire soft collection of {setting}.

'{refrain},' murmured {companion_name}, and the {object_motif} laid its warm glow over the nest like one blanket more.

The two friends sat shoulder to shoulder while the stars arrived.

'I thought you did not want to see me,' the {hero} admitted.

'I thought about you every day,' the friend said. 'My arms were just full.'

'Sunrise, then,' said the {hero}. 'We watch the family come back together. Both mysteries officially closed.'

'Closed,' agreed the friend, and yawned, and the yawn hopped from one to the other like a small bird itself.

One nest, finished. One friendship, fuller than it started. Two mysteries, sound asleep in the reeds.

{refrain}.`,
    scriptTemplate: `That week, {child_name} was keeping a list of mysteries, and the list had two things on it.

The first was the affair of the missing soft things. A tuft of moss, gone from {child_name}'s step. The fluffiest seed-down in {setting}, gone. A feather — the good feather — gone. Nothing shiny was ever taken, nothing sweet, nothing valuable. Only softness. It was the politest burglary imaginable, and it was happening every single day.

The second mystery arrived tonight, and it hurt. {child_name}'s best friend — the friend of the meeting rock, the friend of every evening — came hurrying down the path with their arms curled around something and their face set like a closed door, and went straight past. 'Not now — sorry!' they called over one shoulder, and the tall reeds swallowed them whole.

{child_name} stood at the meeting rock for a while, being very reasonable about it, and then stopped being reasonable. Best friends did not rush past. That was practically the definition of best friends.

'Fine,' said {child_name}. 'Then this becomes a case.'

The case did not go well. Chasing failed first: the friend knew the reed-paths better, and the reeds kept their secrets. The stakeout failed second, and more embarrassingly. {child_name} laid out bait — the fluffiest feather remaining in {setting} — and the watching was gripping for ten minutes, tolerable for five more, and then it was morning-style sleep in the middle of the evening. {child_name} woke to find the feather gone and, insultingly, a soft corner missing from their own bedding.

'Burgled,' said {child_name}, with dignity. 'During my own stakeout.'

'Hmm,' said {companion_name}, who had watched the entire thing and would clearly be retelling it for years. 'Your case is all abouts and wheres, little {hero}. You have not asked a single what-did-it-feel-like.'

It was an odd thing to say to a detective, and it worked. When {child_name} stopped listing what the friend had done and started noticing how the friend had been — really noticing, the old way, the first-kindness way — the whole picture changed colour. The arms: full, held the way you hold things that matter. The voice: not cold. Kind, and stretched thin. The eyes: not sneaky, not cross. Worried. And there was the apology, thrown back over one shoulder like a rope. Rude people do not throw ropes.

So {child_name} tried the strangest trick of all. {child_name} went to where the friend had first appeared, stood exactly as the friend had stood — and then walked the friend's route, step for step, arms curled around an imaginary bundle, hurrying the same hurry. And somewhere along that walk {child_name} stopped being a detective following a suspect and became, briefly, the friend: arms full, heart going quick, no room to stop, not even for the person you most wanted to stop for.

'It is like walking in someone's shoes,' {child_name} said, half aloud. 'You walk where they walked and you start to feel what they felt. And this feels like looking after something. Something that cannot wait, and cannot be put down, and cannot be explained fast enough to be worth stopping —'

Wait. Stand still. Listen — under the wind, under the reeds. Can you hear it too? Peep. The smallest sound in {setting}. Ask yourself, detective: what sort of someone says peep?

'— something with feathers,' {child_name} finished, and the two mysteries collapsed into one answer, neat as two halves of a shell closing. A week of vanished softness. A friend who would not stop. One cause, small and warm and peeping in the dark.

{child_name} ran home for the softest thing they owned — the old blanket-scrap nobody was allowed to mention — and carried it into the reeds.

And there it was, all of it. The friend, sitting perfectly still. A nest built from a week of missing softness — the moss, the down, the good feather, the corner of bedding. And in the nest, a tiny lost bird, peeping up at the night.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. They always do. I meant to tell you a hundred times. But every time I set it down to come and find you, it peeped so sadly that I picked it straight back up.'

'You do not have to explain,' said {child_name}, kneeling and tucking the blanket-scrap around the little bird. 'I walked your walk tonight. I carried your invisible bundle for about forty steps, and even the imaginary version was heavy.'

The peeping slowed, and softened, and stopped. The little bird slept, wrapped in the entire soft collection of {setting}.

'{refrain},' murmured {companion_name}, and the {object_motif} laid its warm glow over the nest like one blanket more.

The two friends sat shoulder to shoulder while the stars arrived.

'I thought you did not want to see me,' {child_name} admitted.

'I thought about you every day,' the friend said. 'My arms were just full.'

'Sunrise, then,' said {child_name}. 'We watch the family come back together. Both mysteries officially closed.'

'Closed,' agreed the friend, and yawned, and the yawn hopped from one to the other like a small bird itself.

One nest, finished. One friendship, fuller than it started. Two mysteries, sound asleep in the reeds.

{refrain}.`
  }
},
    audioTemplate: `The {hero} and their best friend met every evening at the meeting rock in {setting}. Without fail.

But tonight the friend came hurrying along the path, arms full — and hurried straight past. 'Not now — sorry!' they called, and vanished into the tall reeds.

The {hero} stood at the meeting rock, alone.

And that was not the only mystery. All week, the softest things had been going missing. Moss from the {hero}'s step. The fluffiest seed-down. A feather. Only soft things.

The {hero} tried chasing. But the friend was quicker, and the reeds closed behind them.

So the {hero} set a trap: the fluffiest feather ever found. The {hero} hid, and watched — and fell asleep watching. When the {hero} woke, the feather was gone.

'Hmm,' said {companion_name}. 'You know what your friend did. Do you know what your friend felt, little {hero}?'

Felt? The {hero} thought back and noticed, the way the {hero} had learned to notice. Worried eyes. A kind voice. Not a mean rush. A worried rush.

So the {hero} tried something new: standing where the friend had stood, walking where the friend had walked. Arms full. Heart hurrying. Somewhere to be.

'It is like walking in someone's shoes,' said the {hero} slowly. 'If I walk where they walked and feel what they felt... they were not being unkind. They were being careful, and worried, and hurrying back to something —'

Listen. Can you hear it too? Peep. A tiny sound from the reeds. What sort of someone says peep?

'— something very small!' finished the {hero}.

Two mysteries. One answer. The {hero} fetched the softest thing they owned — their blanket-scrap — and carried it into the reeds.

There sat the friend, beside a nest of moss and seed-down and one feather. In the nest: a tiny lost bird, peeping.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. I wanted to tell you — but every time I put it down, it peeped so sadly!'

'You do not have to be sorry,' said the {hero}, tucking the blanket-scrap in. 'I walked your walk. I know.'

The peeping stopped. The little bird slept.

'{refrain},' murmured {companion_name}, and the {object_motif} glowed gently over the nest.

'Sunrise,' whispered the friend. 'Will you watch its family come?'

'I would not miss it,' whispered the {hero}.

One nest, finished. One friend, found again. Two mysteries, fast asleep.

{refrain}.`,
    scriptTemplate: `{child_name} and their best friend met every evening at the meeting rock in {setting}. Without fail.

But tonight the friend came hurrying along the path, arms full — and hurried straight past. 'Not now — sorry!' they called, and vanished into the tall reeds.

{child_name} stood at the meeting rock, alone.

And that was not the only mystery. All week, the softest things had been going missing. Moss from {child_name}'s step. The fluffiest seed-down. A feather. Only soft things.

{child_name} tried chasing. But the friend was quicker, and the reeds closed behind them.

So {child_name} set a trap: the fluffiest feather ever found. {child_name} hid, and watched — and fell asleep watching. When {child_name} woke, the feather was gone.

'Hmm,' said {companion_name}. 'You know what your friend did. Do you know what your friend felt, little {hero}?'

Felt? {child_name} thought back and noticed, the way {child_name} had learned to notice. Worried eyes. A kind voice. Not a mean rush. A worried rush.

So {child_name} tried something new: standing where the friend had stood, walking where the friend had walked. Arms full. Heart hurrying. Somewhere to be.

'It is like walking in someone's shoes,' said {child_name} slowly. 'If I walk where they walked and feel what they felt... they were not being unkind. They were being careful, and worried, and hurrying back to something —'

Listen. Can you hear it too? Peep. A tiny sound from the reeds. What sort of someone says peep?

'— something very small!' finished {child_name}.

Two mysteries. One answer. {child_name} fetched the softest thing they owned — their blanket-scrap — and carried it into the reeds.

There sat the friend, beside a nest of moss and seed-down and one feather. In the nest: a tiny lost bird, peeping.

'It fell behind when its family flew on,' the friend whispered. 'They circle back at sunrise. I wanted to tell you — but every time I put it down, it peeped so sadly!'

'You do not have to be sorry,' said {child_name}, tucking the blanket-scrap in. 'I walked your walk. I know.'

The peeping stopped. The little bird slept.

'{refrain},' murmured {companion_name}, and the {object_motif} glowed gently over the nest.

'Sunrise,' whispered the friend. 'Will you watch its family come?'

'I would not miss it,' whispered {child_name}.

One nest, finished. One friend, found again. Two mysteries, fast asleep.

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
