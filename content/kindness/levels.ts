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
    ordinal: 4, title: "The Mystery Giver",
    concept: "Kindness spreads from one to the next", callback: "A small kindness (Level 2)", ageFloor: 5,
    summary: "A warm cake appears on the hero's doorstep with no note, and the hero sets out to thank the mystery giver before moonrise. The trail runs backwards from the baker to the mender to a small one with a berry basket — and ends somewhere astonishing: at the hero's own small, forgotten kindness from that morning. Passed from one to the next, kindness comes home still warm.",
    teachingNote: "Seeing kindness ripple outward teaches a child that their small acts matter far beyond the moment they happen.",
    learningBeat: "Kindness is not used up",
    ageVariants: {
  '3-4': {
    audioTemplate: `A surprise in {setting}! A warm little cake on the {hero}'s doorstep, wrapped in a big round leaf. No note. No name.

'I must say thank you before moonrise!' said the {hero}.

The {hero} followed the crumbs. Around the bush. Around the rock. Back to the {hero}'s own doorstep!

'Hmm,' said {companion_name}. 'Ask the baker, little {hero}.'

One! The baker smiled. 'I baked it because the mender fixed my lantern. For free!'

Two! The mender smiled. 'I fixed it because a little one shared berries with me!'

Three! The little one smiled. 'Someone helped me this morning. My basket fell — flump! A helper picked up every berry, humming a silly song.'

A silly song? The {hero} knew that song!

Look at the round leaf. Round leaves grow by the bank. Who was at the bank this morning?

'It was me!' said the {hero}. 'My kindness came back! Kindness is not used up. It keeps going!'

'{refrain},' said {companion_name}.

So the {hero} cut the cake. A piece for the baker. The mender. The little one. And one to share with {companion_name}, under the {object_motif}'s glow.

Warm cake. Warm hearts.

Where will tomorrow's kindness go?

{refrain}.`,
    scriptTemplate: `A surprise in {setting}! A warm little cake on {child_name}'s doorstep, wrapped in a big round leaf. No note. No name.

'I must say thank you before moonrise!' said {child_name}.

{child_name} followed the crumbs. Around the bush. Around the rock. Back to {child_name}'s own doorstep!

'Hmm,' said {companion_name}. 'Ask the baker, little {hero}.'

One! The baker smiled. 'I baked it because the mender fixed my lantern. For free!'

Two! The mender smiled. 'I fixed it because a little one shared berries with me!'

Three! The little one smiled. 'Someone helped me this morning. My basket fell — flump! A helper picked up every berry, humming a silly song.'

A silly song? {child_name} knew that song!

Look at the round leaf. Round leaves grow by the bank. Who was at the bank this morning?

'It was me!' said {child_name}. 'My kindness came back! Kindness is not used up. It keeps going!'

'{refrain},' said {companion_name}.

So {child_name} cut the cake. A piece for the baker. The mender. The little one. And one to share with {companion_name}, under the {object_motif}'s glow.

Warm cake. Warm hearts.

Where will tomorrow's kindness go?

{refrain}.`
  },
  '5-6': {
    audioTemplate: `The {hero} came home at dusk. There, on the doorstep in {setting}, sat a small warm cake, wrapped in a big round leaf. No note. No name.

'Somebody left me a kindness,' said the {hero}, 'and I cannot even say thank you!'

The {hero} decided to find the mystery giver before moonrise, while the cake was warm.

First the {hero} followed the crumbs. Around the bush, around the big stone — and right back to the {hero}'s own doorstep. Hmph.

Next the {hero} set a thank-you trap: a return-gift with a note: FOR THE MYSTERY GIVER. A breeze carried the note away. A snail began, slowly, to sit on the gift.

'Hmm,' said {companion_name}. 'Warm cake means a warm oven. Ask the baker, little {hero}.'

The {hero} hurried to the baker. 'Did you leave me a cake?'

'I did,' beamed the baker. 'The mender fixed my lantern tonight and took nothing for it. My heart felt so light, I baked while the feeling lasted.'

'Why free?' the {hero} asked the mender.

'Because at noon,' said the mender, 'a little one shared their berries with me. Made me feel rich enough to give a fix away.'

'And why did you share?' the {hero} asked the little one.

'This morning my basket tipped at the bank — flump! — berries everywhere,' said the little one. 'Someone picked up every single one. They would not even tell me their name. They just hummed a silly song and went on their way.'

A silly song. The {hero} went very still.

Now look at the leaf around the cake. Round as a plate. Where do round leaves grow? By the bank. And who was at the bank this morning, humming?

'It was me,' whispered the {hero}. 'The berries! I had forgotten all about it. It went from me, to the little one, to the mender, to the baker — and it came back to my own doorstep, still warm. Kindness is not used up. It just keeps travelling!'

'{refrain},' said {companion_name} softly.

Then the cake was cut into pieces: one for the baker, one for the mender, one for the little one — and the last shared with {companion_name}, under the warm glow of the {object_motif}.

'Tomorrow,' said the {hero}, licking a crumb, 'the chain starts again. On purpose.'

Out in {setting}, tomorrow's kindness was already on its way. The {hero} wondered whose doorstep it would find.

{refrain}.`,
    scriptTemplate: `{child_name} came home at dusk. There, on the doorstep in {setting}, sat a small warm cake, wrapped in a big round leaf. No note. No name.

'Somebody left me a kindness,' said {child_name}, 'and I cannot even say thank you!'

{child_name} decided to find the mystery giver before moonrise, while the cake was warm.

First {child_name} followed the crumbs. Around the bush, around the big stone — and right back to {child_name}'s own doorstep. Hmph.

Next {child_name} set a thank-you trap: a return-gift with a note: FOR THE MYSTERY GIVER. A breeze carried the note away. A snail began, slowly, to sit on the gift.

'Hmm,' said {companion_name}. 'Warm cake means a warm oven. Ask the baker, little {hero}.'

{child_name} hurried to the baker. 'Did you leave me a cake?'

'I did,' beamed the baker. 'The mender fixed my lantern tonight and took nothing for it. My heart felt so light, I baked while the feeling lasted.'

'Why free?' {child_name} asked the mender.

'Because at noon,' said the mender, 'a little one shared their berries with me. Made me feel rich enough to give a fix away.'

'And why did you share?' {child_name} asked the little one.

'This morning my basket tipped at the bank — flump! — berries everywhere,' said the little one. 'Someone picked up every single one. They would not even tell me their name. They just hummed a silly song and went on their way.'

A silly song. {child_name} went very still.

Now look at the leaf around the cake. Round as a plate. Where do round leaves grow? By the bank. And who was at the bank this morning, humming?

'It was me,' whispered {child_name}. 'The berries! I had forgotten all about it. It went from me, to the little one, to the mender, to the baker — and it came back to my own doorstep, still warm. Kindness is not used up. It just keeps travelling!'

'{refrain},' said {companion_name} softly.

Then the cake was cut into pieces: one for the baker, one for the mender, one for the little one — and the last shared with {companion_name}, under the warm glow of the {object_motif}.

'Tomorrow,' said {child_name}, licking a crumb, 'the chain starts again. On purpose.'

Out in {setting}, tomorrow's kindness was already on its way. {child_name} wondered whose doorstep it would find.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `The {hero} had rules about gifts, and rule one was simple: a gift must be thanked. So the small warm cake sitting on the doorstep at dusk — wrapped in one big round leaf, still steaming, no note, no name, no giver in sight — was not just a gift. It was an emergency.

'Somebody in {setting} is being kind at me,' said the {hero}, scanning the shadows, 'and they think they are going to get away with it.'

The {hero} gave themselves until moonrise. A thank-you, everyone knows, is best delivered while the cake is still warm.

The investigation opened with the trail of crumbs. The {hero} followed it, nose down, tremendously serious: around the bush, along the path, around the big stone — and back to the {hero}'s own doorstep, where it stopped. A perfect circle. 'Either the giver walked in a circle,' the {hero} said at last, 'or these are my crumbs and I have been following myself.'

{companion_name} coughed in a way that might have been a laugh.

Next came the trap: a return-gift, set on the step, with a grand note reading FOR THE MYSTERY GIVER, WITH THANKS. The {hero} hid and watched. The breeze arrived first and made off with the note. Then a snail arrived and, over the course of what felt like a season, sat on the gift.

'Hmm,' said {companion_name}, as the moon climbed. 'A warm cake means a warm oven, little {hero}. If I were a detective, I would interview the baker.'

The baker did not even try to deny it. 'Of course it was me. I bake when my heart is light, and tonight it is floating. The mender fixed my lantern this evening and would not take a single thing for it. Forty years that lantern has smoked. So I baked while the feeling lasted, and the cake went to your step.'

'But why my step?'

'Ask the mender why my lantern,' said the baker, dusting flour.

The mender smiled like an old hinge. 'A little one shared their berries with me at noon. Walked up and shared half of everything. It made me feel rich. And a rich mender can afford to give a fix away.'

The little one was nearly asleep, but remembered everything. 'This morning my basket tipped at the bank — flump! — berries everywhere. And someone stopped and gathered up every single one. They would not tell me their name. They just hummed a silly song the whole time, and went off the way they came.'

The {hero} opened their mouth to ask what song, and closed it again. The {hero} already knew the song. The {hero} had made it up.

Now — quietly — look at the leaf the cake came wrapped in. Round as a plate. Round leaves grow in exactly one place: down by the bank. Who do we know who was at the bank this morning, humming, with berry-stained hands?

'It was me,' the {hero} said slowly, to the moon and the cake. 'All evening I have been hunting the mystery giver, and the mystery giver was me. This morning. The berries. I had forgotten it before lunch.' The {hero} sat down on the step, holding the warm cake like a small round proof. 'One little kindness — such a small one — and it went from me to the little one, to the mender, to the baker, and all the way back to my own doorstep. It did not get smaller as it went. It came back as cake. Kindness is not used up. It gets passed along, and it gathers warmth the whole way.'

'{refrain},' said {companion_name}, in the voice of someone who had known for at least an hour.

One thing was left to do, and the {hero} did it properly. The cake was cut into four fair pieces. One was carried to the baker, who laughed. One to the mender, who saluted with it. One to the little one, who was asleep, so it was left beside their basket like a small return of berries. And the last piece was shared on the doorstep with {companion_name}, under the warm glow of the {object_motif}.

'Tomorrow,' said the {hero}, catching the last crumb, 'I am starting a chain on purpose. Something small.'

'For whom?' asked {companion_name}.

'That,' said the {hero}, yawning, 'is tomorrow's mystery.'

Out in {setting}, the night went about its quiet business — and somewhere in it, tomorrow's kindness was already warming up.

{refrain}.`,
    scriptTemplate: `{child_name} had rules about gifts, and rule one was simple: a gift must be thanked. So the small warm cake sitting on the doorstep at dusk — wrapped in one big round leaf, still steaming, no note, no name, no giver in sight — was not just a gift. It was an emergency.

'Somebody in {setting} is being kind at me,' said {child_name}, scanning the shadows, 'and they think they are going to get away with it.'

{child_name} gave themselves until moonrise. A thank-you, everyone knows, is best delivered while the cake is still warm.

The investigation opened with the trail of crumbs. {child_name} followed it, nose down, tremendously serious: around the bush, along the path, around the big stone — and back to {child_name}'s own doorstep, where it stopped. A perfect circle. 'Either the giver walked in a circle,' {child_name} said at last, 'or these are my crumbs and I have been following myself.'

{companion_name} coughed in a way that might have been a laugh.

Next came the trap: a return-gift, set on the step, with a grand note reading FOR THE MYSTERY GIVER, WITH THANKS. {child_name} hid and watched. The breeze arrived first and made off with the note. Then a snail arrived and, over the course of what felt like a season, sat on the gift.

'Hmm,' said {companion_name}, as the moon climbed. 'A warm cake means a warm oven, little {hero}. If I were a detective, I would interview the baker.'

The baker did not even try to deny it. 'Of course it was me. I bake when my heart is light, and tonight it is floating. The mender fixed my lantern this evening and would not take a single thing for it. Forty years that lantern has smoked. So I baked while the feeling lasted, and the cake went to your step.'

'But why my step?'

'Ask the mender why my lantern,' said the baker, dusting flour.

The mender smiled like an old hinge. 'A little one shared their berries with me at noon. Walked up and shared half of everything. It made me feel rich. And a rich mender can afford to give a fix away.'

The little one was nearly asleep, but remembered everything. 'This morning my basket tipped at the bank — flump! — berries everywhere. And someone stopped and gathered up every single one. They would not tell me their name. They just hummed a silly song the whole time, and went off the way they came.'

{child_name} opened their mouth to ask what song, and closed it again. {child_name} already knew the song. {child_name} had made it up.

Now — quietly — look at the leaf the cake came wrapped in. Round as a plate. Round leaves grow in exactly one place: down by the bank. Who do we know who was at the bank this morning, humming, with berry-stained hands?

'It was me,' {child_name} said slowly, to the moon and the cake. 'All evening I have been hunting the mystery giver, and the mystery giver was me. This morning. The berries. I had forgotten it before lunch.' {child_name} sat down on the step, holding the warm cake like a small round proof. 'One little kindness — such a small one — and it went from me to the little one, to the mender, to the baker, and all the way back to my own doorstep. It did not get smaller as it went. It came back as cake. Kindness is not used up. It gets passed along, and it gathers warmth the whole way.'

'{refrain},' said {companion_name}, in the voice of someone who had known for at least an hour.

One thing was left to do, and {child_name} did it properly. The cake was cut into four fair pieces. One was carried to the baker, who laughed. One to the mender, who saluted with it. One to the little one, who was asleep, so it was left beside their basket like a small return of berries. And the last piece was shared on the doorstep with {companion_name}, under the warm glow of the {object_motif}.

'Tomorrow,' said {child_name}, catching the last crumb, 'I am starting a chain on purpose. Something small.'

'For whom?' asked {companion_name}.

'That,' said {child_name}, yawning, 'is tomorrow's mystery.'

Out in {setting}, the night went about its quiet business — and somewhere in it, tomorrow's kindness was already warming up.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The {hero} held one opinion more strongly than any other: a gift must be thanked. Not eventually. Properly, to the giver's face, while the giving is still warm.

Which explains the state the {hero} was in at dusk, standing over a small warm cake on the doorstep — wrapped in one big round leaf, steam still rising, no note, no name, no giver. Somewhere in {setting}, somebody had committed an act of anonymous kindness, at the {hero}'s own address, and was planning to get away with it.

'Not on my doorstep,' said the {hero}, and gave themselves until moonrise to solve it.

The investigation began well and got funnier. First, the trail of crumbs: followed nose-down, around the bush, along the path, around the big stone — and back to the {hero}'s own doorstep, where it ended. A flawless circle. The {hero} regarded the crumbs coldly. 'Either the giver walks in circles,' the {hero} concluded, 'or these are my own crumbs, and I have spent a quarter of an hour tailing myself.'

{companion_name} made a sound like a cough, if coughs could be delighted.

Next, the trap: a return-gift on the step, under a note in the {hero}'s best letters — FOR THE MYSTERY GIVER, WITH THANKS. The plan was to hide, wait, and spring the thank-you the moment the giver returned. The breeze took the note over the trees. A snail took the rest of the evening to climb onto the gift, and appeared to claim it for its family.

'Hmm,' said {companion_name}, watching the moon climb. 'You are hunting forwards, little {hero}. Gifts are like rivers. You find where one came from by walking upstream. A warm cake means a warm oven.'

Upstream, then. The baker confessed instantly and without shame. 'Of course it was me. I bake when my heart is light, and tonight it is airborne. The mender fixed my lantern this evening — forty years that lantern has smoked — and would not take so much as a button for it. Kindness like that has to go somewhere, so it went into dough, and the dough went to your step.'

'But why mine?'

'Ask the mender why my lantern,' said the baker, which is how detectives get sent upstream.

The mender smiled like an old hinge being oiled. 'A little one shared their berries with me at noon. Walked up, poured out half of everything they had, and walked off swinging the basket. It made me feel rich. A rich mender can afford to give a fix away.'

The little one was nearly asleep beside the famous basket, but told the story gladly. 'This morning the basket tipped at the bank — flump! — every berry rolling for the water at once. A stranger stopped and gathered every last one back, and would not even stay to be thanked. They hummed the whole time. A silly song. I have been humming it all day.'

And the little one hummed it, sleepily, to prove the point.

The {hero} did not move for a long moment. The song did not need identifying. The {hero} had composed it personally.

Look — quietly now — at the round leaf the cake came wrapped in. Round as a plate. Round leaves grow in exactly one place in {setting}: along the bank. And who do we know who was at the bank this morning, humming an original composition, with berry stains to the elbows?

'It was me,' the {hero} said at last, to the moon and the cake. 'I have spent the whole evening hunting the mystery giver, and the trail was a circle because it was always a circle. It started at this doorstep this morning and it ended here tonight.' The {hero} sat down slowly, holding the cake like a small round proof. 'And here is the strange arithmetic. I gave away five minutes and a bit of bending down — such a small kindness that I forgot it by lunch. Nobody in the chain gave much more. And look what it turned into: full baskets, mended lanterns, a floating baker, and a warm cake landing back where it began. Nothing got spent. Kindness is not used up when you pass it along. It is the one thing you can give away all day and have more of by nightfall.'

'{refrain},' said {companion_name}, in the tone of someone who had solved the case an hour ago and enjoyed the show anyway.

There remained one duty, and the {hero} performed it properly. The cake was cut into four fair pieces. One went to the baker, who laughed like an oven door. One to the mender, who raised it in salute. One was set gently beside the sleeping little one's basket — a return of berries, with interest. And the last was shared on the doorstep with {companion_name}, beneath the warm glow of the {object_motif}, while the moon finished its climb.

'Tomorrow I start one on purpose,' the {hero} said, yawning. 'Something small. Five minutes and a bit of bending down.'

'For whom?' asked {companion_name}.

'That is tomorrow's mystery,' said the {hero}, and smiled at the shape of it.

Out in {setting}, the night moved through its quiet rounds, and somewhere along them — rising like dough, already warm — tomorrow's kindness was on its way to a doorstep nobody could predict.

{refrain}.`,
    scriptTemplate: `{child_name} held one opinion more strongly than any other: a gift must be thanked. Not eventually. Properly, to the giver's face, while the giving is still warm.

Which explains the state {child_name} was in at dusk, standing over a small warm cake on the doorstep — wrapped in one big round leaf, steam still rising, no note, no name, no giver. Somewhere in {setting}, somebody had committed an act of anonymous kindness, at {child_name}'s own address, and was planning to get away with it.

'Not on my doorstep,' said {child_name}, and gave themselves until moonrise to solve it.

The investigation began well and got funnier. First, the trail of crumbs: followed nose-down, around the bush, along the path, around the big stone — and back to {child_name}'s own doorstep, where it ended. A flawless circle. {child_name} regarded the crumbs coldly. 'Either the giver walks in circles,' {child_name} concluded, 'or these are my own crumbs, and I have spent a quarter of an hour tailing myself.'

{companion_name} made a sound like a cough, if coughs could be delighted.

Next, the trap: a return-gift on the step, under a note in {child_name}'s best letters — FOR THE MYSTERY GIVER, WITH THANKS. The plan was to hide, wait, and spring the thank-you the moment the giver returned. The breeze took the note over the trees. A snail took the rest of the evening to climb onto the gift, and appeared to claim it for its family.

'Hmm,' said {companion_name}, watching the moon climb. 'You are hunting forwards, little {hero}. Gifts are like rivers. You find where one came from by walking upstream. A warm cake means a warm oven.'

Upstream, then. The baker confessed instantly and without shame. 'Of course it was me. I bake when my heart is light, and tonight it is airborne. The mender fixed my lantern this evening — forty years that lantern has smoked — and would not take so much as a button for it. Kindness like that has to go somewhere, so it went into dough, and the dough went to your step.'

'But why mine?'

'Ask the mender why my lantern,' said the baker, which is how detectives get sent upstream.

The mender smiled like an old hinge being oiled. 'A little one shared their berries with me at noon. Walked up, poured out half of everything they had, and walked off swinging the basket. It made me feel rich. A rich mender can afford to give a fix away.'

The little one was nearly asleep beside the famous basket, but told the story gladly. 'This morning the basket tipped at the bank — flump! — every berry rolling for the water at once. A stranger stopped and gathered every last one back, and would not even stay to be thanked. They hummed the whole time. A silly song. I have been humming it all day.'

And the little one hummed it, sleepily, to prove the point.

{child_name} did not move for a long moment. The song did not need identifying. {child_name} had composed it personally.

Look — quietly now — at the round leaf the cake came wrapped in. Round as a plate. Round leaves grow in exactly one place in {setting}: along the bank. And who do we know who was at the bank this morning, humming an original composition, with berry stains to the elbows?

'It was me,' {child_name} said at last, to the moon and the cake. 'I have spent the whole evening hunting the mystery giver, and the trail was a circle because it was always a circle. It started at this doorstep this morning and it ended here tonight.' {child_name} sat down slowly, holding the cake like a small round proof. 'And here is the strange arithmetic. I gave away five minutes and a bit of bending down — such a small kindness that I forgot it by lunch. Nobody in the chain gave much more. And look what it turned into: full baskets, mended lanterns, a floating baker, and a warm cake landing back where it began. Nothing got spent. Kindness is not used up when you pass it along. It is the one thing you can give away all day and have more of by nightfall.'

'{refrain},' said {companion_name}, in the tone of someone who had solved the case an hour ago and enjoyed the show anyway.

There remained one duty, and {child_name} performed it properly. The cake was cut into four fair pieces. One went to the baker, who laughed like an oven door. One to the mender, who raised it in salute. One was set gently beside the sleeping little one's basket — a return of berries, with interest. And the last was shared on the doorstep with {companion_name}, beneath the warm glow of the {object_motif}, while the moon finished its climb.

'Tomorrow I start one on purpose,' {child_name} said, yawning. 'Something small. Five minutes and a bit of bending down.'

'For whom?' asked {companion_name}.

'That is tomorrow's mystery,' said {child_name}, and smiled at the shape of it.

Out in {setting}, the night moved through its quiet rounds, and somewhere along them — rising like dough, already warm — tomorrow's kindness was on its way to a doorstep nobody could predict.

{refrain}.`
  }
},
    audioTemplate: `The {hero} came home at dusk. There, on the doorstep in {setting}, sat a small warm cake, wrapped in a big round leaf. No note. No name.

'Somebody left me a kindness,' said the {hero}, 'and I cannot even say thank you!'

The {hero} decided to find the mystery giver before moonrise, while the cake was warm.

First the {hero} followed the crumbs. Around the bush, around the big stone — and right back to the {hero}'s own doorstep. Hmph.

Next the {hero} set a thank-you trap: a return-gift with a note: FOR THE MYSTERY GIVER. A breeze carried the note away. A snail began, slowly, to sit on the gift.

'Hmm,' said {companion_name}. 'Warm cake means a warm oven. Ask the baker, little {hero}.'

The {hero} hurried to the baker. 'Did you leave me a cake?'

'I did,' beamed the baker. 'The mender fixed my lantern tonight and took nothing for it. My heart felt so light, I baked while the feeling lasted.'

'Why free?' the {hero} asked the mender.

'Because at noon,' said the mender, 'a little one shared their berries with me. Made me feel rich enough to give a fix away.'

'And why did you share?' the {hero} asked the little one.

'This morning my basket tipped at the bank — flump! — berries everywhere,' said the little one. 'Someone picked up every single one. They would not even tell me their name. They just hummed a silly song and went on their way.'

A silly song. The {hero} went very still.

Now look at the leaf around the cake. Round as a plate. Where do round leaves grow? By the bank. And who was at the bank this morning, humming?

'It was me,' whispered the {hero}. 'The berries! I had forgotten all about it. It went from me, to the little one, to the mender, to the baker — and it came back to my own doorstep, still warm. Kindness is not used up. It just keeps travelling!'

'{refrain},' said {companion_name} softly.

Then the cake was cut into pieces: one for the baker, one for the mender, one for the little one — and the last shared with {companion_name}, under the warm glow of the {object_motif}.

'Tomorrow,' said the {hero}, licking a crumb, 'the chain starts again. On purpose.'

Out in {setting}, tomorrow's kindness was already on its way. The {hero} wondered whose doorstep it would find.

{refrain}.`,
    scriptTemplate: `{child_name} came home at dusk. There, on the doorstep in {setting}, sat a small warm cake, wrapped in a big round leaf. No note. No name.

'Somebody left me a kindness,' said {child_name}, 'and I cannot even say thank you!'

{child_name} decided to find the mystery giver before moonrise, while the cake was warm.

First {child_name} followed the crumbs. Around the bush, around the big stone — and right back to {child_name}'s own doorstep. Hmph.

Next {child_name} set a thank-you trap: a return-gift with a note: FOR THE MYSTERY GIVER. A breeze carried the note away. A snail began, slowly, to sit on the gift.

'Hmm,' said {companion_name}. 'Warm cake means a warm oven. Ask the baker, little {hero}.'

{child_name} hurried to the baker. 'Did you leave me a cake?'

'I did,' beamed the baker. 'The mender fixed my lantern tonight and took nothing for it. My heart felt so light, I baked while the feeling lasted.'

'Why free?' {child_name} asked the mender.

'Because at noon,' said the mender, 'a little one shared their berries with me. Made me feel rich enough to give a fix away.'

'And why did you share?' {child_name} asked the little one.

'This morning my basket tipped at the bank — flump! — berries everywhere,' said the little one. 'Someone picked up every single one. They would not even tell me their name. They just hummed a silly song and went on their way.'

A silly song. {child_name} went very still.

Now look at the leaf around the cake. Round as a plate. Where do round leaves grow? By the bank. And who was at the bank this morning, humming?

'It was me,' whispered {child_name}. 'The berries! I had forgotten all about it. It went from me, to the little one, to the mender, to the baker — and it came back to my own doorstep, still warm. Kindness is not used up. It just keeps travelling!'

'{refrain},' said {companion_name} softly.

Then the cake was cut into pieces: one for the baker, one for the mender, one for the little one — and the last shared with {companion_name}, under the warm glow of the {object_motif}.

'Tomorrow,' said {child_name}, licking a crumb, 'the chain starts again. On purpose.'

Out in {setting}, tomorrow's kindness was already on its way. {child_name} wondered whose doorstep it would find.

{refrain}.`,
  },
  {
    ordinal: 5, title: "The Moon-Garland",
    concept: "Kindness includes how you treat yourself", callback: "Kindness comes back (Level 4)", ageFloor: 5,
    summary: "On the night of the Moon-Gathering, the hero's handmade garland snaps on a root and scatters — and the hero says words to themselves they would never say to a friend. Steady hands only return when the kindness does, turned inward at last, as the friends the hero once helped come walking out of the dark. At the gathering the old saying finally makes sense: the treasure was never the garland.",
    teachingNote: "Self-compassion completes empathy: a child who can be kind to themselves can sustain kindness toward everyone else.",
    learningBeat: "deserve kindness",
    ageVariants: {
  '3-4': {
    audioTemplate: `Tonight was the Moon-Gathering in {setting}! Everyone brings something. The {hero} had made a moon-garland. So shiny!

But on the way — trip! The string snapped. Ping! Ping! The shiny bits flew into the moss.

'Silly me!' said the {hero}. 'I ruin things!'

Oh dear. Those were not kind words. The {hero}'s hands went wobbly. The knots slipped.

Listen! Footsteps! One, two, three. Who is coming?

Friends! The friends the {hero} had been kind to. They came to help!

One friend dropped some pieces. 'Oh no! Sorry!'

'It is okay!' said the {hero}. 'Just a slip!'

Then the {hero} stopped. Just a slip...

'I said kind words to my friend,' said the {hero}. 'But not to me. Friends deserve kindness — and I deserve kindness too!'

The {hero} took a big slow breath. The wobbly hands went still. Knot by knot, the friends fixed the garland. A little crooked. Very loved.

At the gathering, nobody looked at the garland much. They hugged the {hero} instead!

'{refrain},' whispered {companion_name} to the little {hero}, by the {object_motif}.

'Next moon,' yawned the {hero}, 'we will all make one together.'

Sleepy friends. Soft moon. Kind words for everyone. Even me, thought the {hero}.

{refrain}.`,
    scriptTemplate: `Tonight was the Moon-Gathering in {setting}! Everyone brings something. {child_name} had made a moon-garland. So shiny!

But on the way — trip! The string snapped. Ping! Ping! The shiny bits flew into the moss.

'Silly me!' said {child_name}. 'I ruin things!'

Oh dear. Those were not kind words. {child_name}'s hands went wobbly. The knots slipped.

Listen! Footsteps! One, two, three. Who is coming?

Friends! The friends {child_name} had been kind to. They came to help!

One friend dropped some pieces. 'Oh no! Sorry!'

'It is okay!' said {child_name}. 'Just a slip!'

Then {child_name} stopped. Just a slip...

'I said kind words to my friend,' said {child_name}. 'But not to me. Friends deserve kindness — and I deserve kindness too!'

{child_name} took a big slow breath. The wobbly hands went still. Knot by knot, the friends fixed the garland. A little crooked. Very loved.

At the gathering, nobody looked at the garland much. They hugged {child_name} instead!

'{refrain},' whispered {companion_name} to the little {hero}, by the {object_motif}.

'Next moon,' yawned {child_name}, 'we will all make one together.'

Sleepy friends. Soft moon. Kind words for everyone. Even me, thought {child_name}.

{refrain}.`
  },
  '5-6': {
    audioTemplate: `Tonight was the Moon-Gathering, when everyone in {setting} brings something to share. This year, for the first time, the {hero} had made something: a moon-garland of shiny bits. Seven evenings. Eleven careful knots.

The old one always says the same odd thing: 'Bring yourselves. The rest is decoration.' The {hero} had never understood it.

On the way, in the dark, the {hero} tripped on a root. The string snapped. Ping! Ping! The shiny bits scattered into the moss.

'Oh, silly, clumsy {hero},' the {hero} muttered. 'You ruin everything.'

And here is a strange true thing: unkind words made it all worse. Wobbly hands. Slipping knots. The {hero} even counted the same shiny bit three times.

Listen. Footsteps! One set, two sets, three. Who would come looking for the {hero}?

Friends. The quiet friend the {hero} had once sat beside. The friend with the little bird. Even the mender, carrying their smallest tool. They had noticed the {hero} was late.

They knelt and gathered pieces. Then one friend's hands slipped — pieces everywhere. 'Oh no,' the friend said. 'Sorry! I always drop things.'

'Hey, it is all right,' said the {hero}, quick and warm. 'It was just a slip. Anyone could.'

'You heard that, little {hero}?' whispered {companion_name}.

The {hero} went very still. Just a slip. Anyone could.

'I said it so easily,' the {hero} whispered. 'Why do I never say it to me? If my friends deserve kindness when things slip, then I deserve kindness too. I tripped on a root. Anyone could.'

The {hero} took one slow breath, and spoke to themselves the friend-way: We can mend this. And the wobble left the {hero}'s hands. Knot by knot, with many hands helping, a new garland grew. Shorter. A little crooked.

At the gathering, the old one hung it right in the middle. And nobody really looked at it. Everyone was squeezing in around the {hero}, retelling the story of the root and the ping-ping-ping.

'Bring yourselves,' said the {hero} slowly. 'The rest is decoration. Now I understand. The treasure was never the garland.'

'{refrain},' said {companion_name}, in the glow of the {object_motif}.

'Next full moon,' yawned the {hero}, 'we make one all together. From the very first knot.'

The moon rose round and kind over {setting}. The garland swayed, crooked and loved.

And the {hero}, warm in the middle of everyone, said one last kind word — quietly, to themselves. Well done.

{refrain}.`,
    scriptTemplate: `Tonight was the Moon-Gathering, when everyone in {setting} brings something to share. This year, for the first time, {child_name} had made something: a moon-garland of shiny bits. Seven evenings. Eleven careful knots.

The old one always says the same odd thing: 'Bring yourselves. The rest is decoration.' {child_name} had never understood it.

On the way, in the dark, {child_name} tripped on a root. The string snapped. Ping! Ping! The shiny bits scattered into the moss.

'Oh, silly, clumsy {hero},' {child_name} muttered. 'You ruin everything.'

And here is a strange true thing: unkind words made it all worse. Wobbly hands. Slipping knots. {child_name} even counted the same shiny bit three times.

Listen. Footsteps! One set, two sets, three. Who would come looking for {child_name}?

Friends. The quiet friend {child_name} had once sat beside. The friend with the little bird. Even the mender, carrying their smallest tool. They had noticed {child_name} was late.

They knelt and gathered pieces. Then one friend's hands slipped — pieces everywhere. 'Oh no,' the friend said. 'Sorry! I always drop things.'

'Hey, it is all right,' said {child_name}, quick and warm. 'It was just a slip. Anyone could.'

'You heard that, little {hero}?' whispered {companion_name}.

{child_name} went very still. Just a slip. Anyone could.

'I said it so easily,' {child_name} whispered. 'Why do I never say it to me? If my friends deserve kindness when things slip, then I deserve kindness too. I tripped on a root. Anyone could.'

{child_name} took one slow breath, and spoke to themselves the friend-way: We can mend this. And the wobble left {child_name}'s hands. Knot by knot, with many hands helping, a new garland grew. Shorter. A little crooked.

At the gathering, the old one hung it right in the middle. And nobody really looked at it. Everyone was squeezing in around {child_name}, retelling the story of the root and the ping-ping-ping.

'Bring yourselves,' said {child_name} slowly. 'The rest is decoration. Now I understand. The treasure was never the garland.'

'{refrain},' said {companion_name}, in the glow of the {object_motif}.

'Next full moon,' yawned {child_name}, 'we make one all together. From the very first knot.'

The moon rose round and kind over {setting}. The garland swayed, crooked and loved.

And {child_name}, warm in the middle of everyone, said one last kind word — quietly, to themselves. Well done.

{refrain}.`
  },
  '7-8': {
    audioTemplate: `Once a season, when the moon came up full over {setting}, there was a Gathering. Everyone brought something for the sharing-branch: a carving, a song, a basket of something sweet. And every season, the old one who led it said the same puzzling words: 'Bring yourselves. The rest is decoration.'

The {hero} privately considered this the sort of thing you say when your carving has gone wrong.

Because this season, for the first time, the {hero} was bringing something real: a moon-garland, strung with shiny bits collected over seven evenings — eleven careful knots, every knot tested twice. It hung over the {hero}'s arm like a piece of night sky on a string, and the {hero} carried it as though it were made of breath.

Then, in the dark, a root.

The trip was small. The disaster was not. The string snapped and the shiny bits leapt everywhere — ping! ping! — into the moss, under leaves, down between stones.

'Oh, well done,' the {hero} said to themselves, in a voice with no warmth in it. 'Silly, clumsy {hero}. Seven evenings, ruined in one step. You always do this.'

Now, here is a strange and true thing: unkind words do not make hands work better. The {hero} scrambled to rebuild, scolding all the while, and the scolding got into their fingers. Knots slipped. Pieces pinged away a second time. The {hero} counted what was left and counted the same shiny bit three times, twice.

Listen. Footsteps, coming up the path. One set. Two. Three. Who would leave a Gathering to come looking?

Friends. The quiet one, once found in the warmest hiding place, who now noticed whenever anyone went missing. The friend of the reeds, whose little bird had long since flown home. And the mender, carrying, of course, the smallest tool in the shop.

Kindness, it turns out, keeps excellent records.

They knelt in the moss without being asked and gathered shiny bits. And then the quiet friend's hands slipped, and half the rescued pieces dropped again. 'Oh no. Sorry — sorry. I always drop things.'

'Hey.' The {hero}'s answer came out instantly, warm as anything. 'It was one slip. Anyone could. You came out into the dark for me — that is the part that counts.'

'You heard that, little {hero}?' murmured {companion_name}. 'Listen to it again.'

The {hero} did. And went very still, because the words had played back in a different light. One slip. Anyone could.

'I say it so easily to everyone else,' the {hero} said slowly. 'I have said it to every friend who ever dropped or tripped or got it wrong. And I have never once said it to me. If my friends deserve kindness when things slip — and they do, they always do — then I deserve kindness too. I did not ruin seven evenings. I tripped on a root, in the dark, carrying something I loved. Anyone could.'

The {hero} took one long breath and tried it — the friend-voice, turned inward. It was just a slip. We can mend this. And the wobble went out of the {hero}'s hands, the way a shaken jar of water goes clear when you stop shaking it.

The new garland came together under many hands. It was shorter than the first. It was crooked. Its knots showed. The {hero} carried it into the Gathering braced for polite faces.

The old one hung it dead centre. And then something better than polite happened: nothing. Nobody studied the garland. Everyone was too busy pulling the {hero} into the circle, saving the best seat, retelling the tale of the root and the ping-ping-ping until it was already becoming legend.

The {hero} looked around the circle — at every face lit warm by the {object_motif} — and understood, at last, the old one's puzzling words.

'Bring yourselves,' the {hero} said. 'The rest is decoration. The garland was never the treasure, was it? This is. It was this all along.'

'{refrain},' said {companion_name}, and the old one nodded as if a very long lesson had just finished landing.

'Next full moon,' the {hero} announced, through a yawn, 'we make one together. All of us. From the very first knot. And whoever drops the pieces gets thanked for coming.'

The moon leaned down kind over {setting}. The garland swayed, crooked and completely loved.

And last of all, quietly, where only the moon could hear, the {hero} gave one more kindness away — to themselves. Well done, little {hero}. Well done.

{refrain}.`,
    scriptTemplate: `Once a season, when the moon came up full over {setting}, there was a Gathering. Everyone brought something for the sharing-branch: a carving, a song, a basket of something sweet. And every season, the old one who led it said the same puzzling words: 'Bring yourselves. The rest is decoration.'

{child_name} privately considered this the sort of thing you say when your carving has gone wrong.

Because this season, for the first time, {child_name} was bringing something real: a moon-garland, strung with shiny bits collected over seven evenings — eleven careful knots, every knot tested twice. It hung over {child_name}'s arm like a piece of night sky on a string, and {child_name} carried it as though it were made of breath.

Then, in the dark, a root.

The trip was small. The disaster was not. The string snapped and the shiny bits leapt everywhere — ping! ping! — into the moss, under leaves, down between stones.

'Oh, well done,' {child_name} said to themselves, in a voice with no warmth in it. 'Silly, clumsy {hero}. Seven evenings, ruined in one step. You always do this.'

Now, here is a strange and true thing: unkind words do not make hands work better. {child_name} scrambled to rebuild, scolding all the while, and the scolding got into their fingers. Knots slipped. Pieces pinged away a second time. {child_name} counted what was left and counted the same shiny bit three times, twice.

Listen. Footsteps, coming up the path. One set. Two. Three. Who would leave a Gathering to come looking?

Friends. The quiet one, once found in the warmest hiding place, who now noticed whenever anyone went missing. The friend of the reeds, whose little bird had long since flown home. And the mender, carrying, of course, the smallest tool in the shop.

Kindness, it turns out, keeps excellent records.

They knelt in the moss without being asked and gathered shiny bits. And then the quiet friend's hands slipped, and half the rescued pieces dropped again. 'Oh no. Sorry — sorry. I always drop things.'

'Hey.' {child_name}'s answer came out instantly, warm as anything. 'It was one slip. Anyone could. You came out into the dark for me — that is the part that counts.'

'You heard that, little {hero}?' murmured {companion_name}. 'Listen to it again.'

{child_name} did. And went very still, because the words had played back in a different light. One slip. Anyone could.

'I say it so easily to everyone else,' {child_name} said slowly. 'I have said it to every friend who ever dropped or tripped or got it wrong. And I have never once said it to me. If my friends deserve kindness when things slip — and they do, they always do — then I deserve kindness too. I did not ruin seven evenings. I tripped on a root, in the dark, carrying something I loved. Anyone could.'

{child_name} took one long breath and tried it — the friend-voice, turned inward. It was just a slip. We can mend this. And the wobble went out of {child_name}'s hands, the way a shaken jar of water goes clear when you stop shaking it.

The new garland came together under many hands. It was shorter than the first. It was crooked. Its knots showed. {child_name} carried it into the Gathering braced for polite faces.

The old one hung it dead centre. And then something better than polite happened: nothing. Nobody studied the garland. Everyone was too busy pulling {child_name} into the circle, saving the best seat, retelling the tale of the root and the ping-ping-ping until it was already becoming legend.

{child_name} looked around the circle — at every face lit warm by the {object_motif} — and understood, at last, the old one's puzzling words.

'Bring yourselves,' {child_name} said. 'The rest is decoration. The garland was never the treasure, was it? This is. It was this all along.'

'{refrain},' said {companion_name}, and the old one nodded as if a very long lesson had just finished landing.

'Next full moon,' {child_name} announced, through a yawn, 'we make one together. All of us. From the very first knot. And whoever drops the pieces gets thanked for coming.'

The moon leaned down kind over {setting}. The garland swayed, crooked and completely loved.

And last of all, quietly, where only the moon could hear, {child_name} gave one more kindness away — to themselves. Well done, little {hero}. Well done.

{refrain}.`
  },
  '9-11': {
    audioTemplate: `The Moon-Gathering came once a season to {setting}, and it had exactly one rule, which the old one repeated every time in the same creaky, satisfied voice: 'Bring yourselves. The rest is decoration.'

Nobody knew quite what it meant. It was one of those sayings that gets nodded at and not heard.

The {hero} certainly was not hearing it this season, because this season, for the first time, the {hero} was bringing something. A moon-garland: shiny bits gathered over seven evenings, strung along a cord with eleven knots, each knot tested twice. It was, the {hero} privately believed, the finest thing they had ever made, and they carried it toward the Gathering the way you carry a full cup across a clean floor.

Then, in the dark: a root.

The trip itself was nothing — half a stumble, caught at once. But the string snapped, and the night went ping, ping, ping as seven evenings of shine scattered into the moss.

What happened next mattered more than the root. The {hero} stood in the dark and said, in a voice gone flat and cold, 'Well done. Truly. Silly, clumsy {hero}. You had one thing to carry, and you ruined it. You always ruin it.'

This voice, the {hero} was about to learn, fixes nothing. The {hero} dropped to the moss and scrambled to rebuild, scolding in rhythm with the work, and the scolding poured straight down into their hands. Knots slipped that had never slipped before. Rescued pieces pinged loose a second time. The {hero} counted the remaining shine and got a different number three counts running, because it is very hard to count while calling yourself names.

Listen — under all that muttering. Footsteps on the path. One set. Two. Three. The Gathering is the other way; these steps are coming this way. Who leaves a party to walk into the dark?

Friends do. The quiet one — found, long ago, in the warmest hiding place — who had since become the best in {setting} at noticing who was missing. The friend of the reeds, whose rescued bird had flown home and still came back some mornings to sing on their step. And the mender, who had shut the shop early and brought, naturally, the smallest tool.

The {hero} had spent seasons handing out kindness without wondering where it went. Here was where. Kindness keeps records. It had been waiting for a dark enough night to show them.

They knelt in the moss without being asked. And in the middle of the gathering-up, the quiet friend's hands slipped, and half the rescued pieces spilled back into the dark. 'Oh no — sorry, sorry. I always do this.'

The {hero}'s reply arrived before thought — warm, immediate, certain. 'Hey — it was one slip. Anyone could. You walked out of a party into the dark for me. That is the only part I will remember.'

'You heard that, little {hero}?' said {companion_name} quietly, from just behind. 'Play it back.'

The {hero} played it back. And knelt very still while two voices stood side by side: the warm, certain one that arrived whenever a friend slipped, and the flat, cold one that arrived whenever the {hero} did. Same slip. Same darkness. Two entirely different judges.

'I would never speak to anyone the way I just spoke to me,' the {hero} said at last. 'Not to a friend. Not to a stranger. Not to anyone who tripped on a root in the dark carrying something they loved. If every one of my friends deserves kindness when things go wrong — and they do — then I deserve kindness too. It is the same arithmetic. I just kept leaving myself out of it.'

The {hero} breathed out, long and slow, and tried the friend-voice on the inside. One slip. Anyone could. We can mend this. And the wobble left their hands — simply left, the way water goes clear when you stop shaking the jar.

What got built after that was shorter than the original, unarguably crooked, and full of proudly visible knots. The {hero} carried it into the Gathering braced for kind, careful faces.

The old one hung it dead centre. And nobody looked at it — because everyone was busy pulling the {hero} into the circle, saving the best seat, demanding the story of the root, retelling the ping, ping, ping with growing exaggeration until the root had become a mountain and the {hero} a legend.

The {hero} looked around the circle, every face warm in the glow of the {object_motif}, and the old one's saying finally unlocked, quiet as a key turning.

'Bring yourselves. The rest is decoration.' The {hero} said it slowly, understanding it completely. 'The garland was never the treasure. The treasure is the circle it hangs above.'

'{refrain},' said {companion_name}, and the old one smiled the smile of a teacher whose slowest lesson had finally arrived.

'Next full moon,' the {hero} declared, mid-yawn, 'we make one together, all of us, from the first knot. Dropped pieces will be applauded.'

The moon leaned low and kind over {setting}. The crooked garland swayed above the circle, catching light it no longer needed to earn.

And last of all — quietly, on the inside, where the coldest voice used to live — the {hero} hung up one more kindness, just for themselves. Well done, little {hero}. Well done.

{refrain}.`,
    scriptTemplate: `The Moon-Gathering came once a season to {setting}, and it had exactly one rule, which the old one repeated every time in the same creaky, satisfied voice: 'Bring yourselves. The rest is decoration.'

Nobody knew quite what it meant. It was one of those sayings that gets nodded at and not heard.

{child_name} certainly was not hearing it this season, because this season, for the first time, {child_name} was bringing something. A moon-garland: shiny bits gathered over seven evenings, strung along a cord with eleven knots, each knot tested twice. It was, {child_name} privately believed, the finest thing they had ever made, and they carried it toward the Gathering the way you carry a full cup across a clean floor.

Then, in the dark: a root.

The trip itself was nothing — half a stumble, caught at once. But the string snapped, and the night went ping, ping, ping as seven evenings of shine scattered into the moss.

What happened next mattered more than the root. {child_name} stood in the dark and said, in a voice gone flat and cold, 'Well done. Truly. Silly, clumsy {hero}. You had one thing to carry, and you ruined it. You always ruin it.'

This voice, {child_name} was about to learn, fixes nothing. {child_name} dropped to the moss and scrambled to rebuild, scolding in rhythm with the work, and the scolding poured straight down into their hands. Knots slipped that had never slipped before. Rescued pieces pinged loose a second time. {child_name} counted the remaining shine and got a different number three counts running, because it is very hard to count while calling yourself names.

Listen — under all that muttering. Footsteps on the path. One set. Two. Three. The Gathering is the other way; these steps are coming this way. Who leaves a party to walk into the dark?

Friends do. The quiet one — found, long ago, in the warmest hiding place — who had since become the best in {setting} at noticing who was missing. The friend of the reeds, whose rescued bird had flown home and still came back some mornings to sing on their step. And the mender, who had shut the shop early and brought, naturally, the smallest tool.

{child_name} had spent seasons handing out kindness without wondering where it went. Here was where. Kindness keeps records. It had been waiting for a dark enough night to show them.

They knelt in the moss without being asked. And in the middle of the gathering-up, the quiet friend's hands slipped, and half the rescued pieces spilled back into the dark. 'Oh no — sorry, sorry. I always do this.'

{child_name}'s reply arrived before thought — warm, immediate, certain. 'Hey — it was one slip. Anyone could. You walked out of a party into the dark for me. That is the only part I will remember.'

'You heard that, little {hero}?' said {companion_name} quietly, from just behind. 'Play it back.'

{child_name} played it back. And knelt very still while two voices stood side by side: the warm, certain one that arrived whenever a friend slipped, and the flat, cold one that arrived whenever {child_name} did. Same slip. Same darkness. Two entirely different judges.

'I would never speak to anyone the way I just spoke to me,' {child_name} said at last. 'Not to a friend. Not to a stranger. Not to anyone who tripped on a root in the dark carrying something they loved. If every one of my friends deserves kindness when things go wrong — and they do — then I deserve kindness too. It is the same arithmetic. I just kept leaving myself out of it.'

{child_name} breathed out, long and slow, and tried the friend-voice on the inside. One slip. Anyone could. We can mend this. And the wobble left their hands — simply left, the way water goes clear when you stop shaking the jar.

What got built after that was shorter than the original, unarguably crooked, and full of proudly visible knots. {child_name} carried it into the Gathering braced for kind, careful faces.

The old one hung it dead centre. And nobody looked at it — because everyone was busy pulling {child_name} into the circle, saving the best seat, demanding the story of the root, retelling the ping, ping, ping with growing exaggeration until the root had become a mountain and {child_name} a legend.

{child_name} looked around the circle, every face warm in the glow of the {object_motif}, and the old one's saying finally unlocked, quiet as a key turning.

'Bring yourselves. The rest is decoration.' {child_name} said it slowly, understanding it completely. 'The garland was never the treasure. The treasure is the circle it hangs above.'

'{refrain},' said {companion_name}, and the old one smiled the smile of a teacher whose slowest lesson had finally arrived.

'Next full moon,' {child_name} declared, mid-yawn, 'we make one together, all of us, from the first knot. Dropped pieces will be applauded.'

The moon leaned low and kind over {setting}. The crooked garland swayed above the circle, catching light it no longer needed to earn.

And last of all — quietly, on the inside, where the coldest voice used to live — {child_name} hung up one more kindness, just for themselves. Well done, little {hero}. Well done.

{refrain}.`
  }
},
    audioTemplate: `Tonight was the Moon-Gathering, when everyone in {setting} brings something to share. This year, for the first time, the {hero} had made something: a moon-garland of shiny bits. Seven evenings. Eleven careful knots.

The old one always says the same odd thing: 'Bring yourselves. The rest is decoration.' The {hero} had never understood it.

On the way, in the dark, the {hero} tripped on a root. The string snapped. Ping! Ping! The shiny bits scattered into the moss.

'Oh, silly, clumsy {hero},' the {hero} muttered. 'You ruin everything.'

And here is a strange true thing: unkind words made it all worse. Wobbly hands. Slipping knots. The {hero} even counted the same shiny bit three times.

Listen. Footsteps! One set, two sets, three. Who would come looking for the {hero}?

Friends. The quiet friend the {hero} had once sat beside. The friend with the little bird. Even the mender, carrying their smallest tool. They had noticed the {hero} was late.

They knelt and gathered pieces. Then one friend's hands slipped — pieces everywhere. 'Oh no,' the friend said. 'Sorry! I always drop things.'

'Hey, it is all right,' said the {hero}, quick and warm. 'It was just a slip. Anyone could.'

'You heard that, little {hero}?' whispered {companion_name}.

The {hero} went very still. Just a slip. Anyone could.

'I said it so easily,' the {hero} whispered. 'Why do I never say it to me? If my friends deserve kindness when things slip, then I deserve kindness too. I tripped on a root. Anyone could.'

The {hero} took one slow breath, and spoke to themselves the friend-way: We can mend this. And the wobble left the {hero}'s hands. Knot by knot, with many hands helping, a new garland grew. Shorter. A little crooked.

At the gathering, the old one hung it right in the middle. And nobody really looked at it. Everyone was squeezing in around the {hero}, retelling the story of the root and the ping-ping-ping.

'Bring yourselves,' said the {hero} slowly. 'The rest is decoration. Now I understand. The treasure was never the garland.'

'{refrain},' said {companion_name}, in the glow of the {object_motif}.

'Next full moon,' yawned the {hero}, 'we make one all together. From the very first knot.'

The moon rose round and kind over {setting}. The garland swayed, crooked and loved.

And the {hero}, warm in the middle of everyone, said one last kind word — quietly, to themselves. Well done.

{refrain}.`,
    scriptTemplate: `Tonight was the Moon-Gathering, when everyone in {setting} brings something to share. This year, for the first time, {child_name} had made something: a moon-garland of shiny bits. Seven evenings. Eleven careful knots.

The old one always says the same odd thing: 'Bring yourselves. The rest is decoration.' {child_name} had never understood it.

On the way, in the dark, {child_name} tripped on a root. The string snapped. Ping! Ping! The shiny bits scattered into the moss.

'Oh, silly, clumsy {hero},' {child_name} muttered. 'You ruin everything.'

And here is a strange true thing: unkind words made it all worse. Wobbly hands. Slipping knots. {child_name} even counted the same shiny bit three times.

Listen. Footsteps! One set, two sets, three. Who would come looking for {child_name}?

Friends. The quiet friend {child_name} had once sat beside. The friend with the little bird. Even the mender, carrying their smallest tool. They had noticed {child_name} was late.

They knelt and gathered pieces. Then one friend's hands slipped — pieces everywhere. 'Oh no,' the friend said. 'Sorry! I always drop things.'

'Hey, it is all right,' said {child_name}, quick and warm. 'It was just a slip. Anyone could.'

'You heard that, little {hero}?' whispered {companion_name}.

{child_name} went very still. Just a slip. Anyone could.

'I said it so easily,' {child_name} whispered. 'Why do I never say it to me? If my friends deserve kindness when things slip, then I deserve kindness too. I tripped on a root. Anyone could.'

{child_name} took one slow breath, and spoke to themselves the friend-way: We can mend this. And the wobble left {child_name}'s hands. Knot by knot, with many hands helping, a new garland grew. Shorter. A little crooked.

At the gathering, the old one hung it right in the middle. And nobody really looked at it. Everyone was squeezing in around {child_name}, retelling the story of the root and the ping-ping-ping.

'Bring yourselves,' said {child_name} slowly. 'The rest is decoration. Now I understand. The treasure was never the garland.'

'{refrain},' said {companion_name}, in the glow of the {object_motif}.

'Next full moon,' yawned {child_name}, 'we make one all together. From the very first knot.'

The moon rose round and kind over {setting}. The garland swayed, crooked and loved.

And {child_name}, warm in the middle of everyone, said one last kind word — quietly, to themselves. Well done.

{refrain}.`,
  },
]
