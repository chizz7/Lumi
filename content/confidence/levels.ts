// content/confidence/levels.ts
//
// Confidence — 5 leveled bedtime stories (the quiet belief that you can try).
// Same two-template structure as the other paths:
//   audioTemplate  — sent to Kokoro. No {child_name}. Cacheable.
//   scriptTemplate — shown to parents. The child becomes the hero.
//
// ⚠ DRAFT — must pass the safety + expert review gate before delivery
//   (see docs/01_PRD.md FR-4/FR-5).
//
// To draft/refine: npm run author:draft -- --subject confidence --level N --skin sea

import type { Level } from '@/content/types'

export const LEVELS: Level[] = [
  {
    ordinal: 1, title: "You Don't Have to Be Ready",
    concept: 'It is okay to begin before you feel ready', callback: null, ageFloor: 3,
    summary: 'A small hero waits to feel fully ready before trying — and the waiting never ends. Their companion shares that no one feels completely ready, and that beginning is allowed even while you still feel unsure.',
    teachingNote: 'Removing the belief that you must feel ready first frees a child to start — and starting is where confidence is built.',
    audioTemplate: `The {object_motif} glowed softly within the {hero} as they stood at the edge of something new in {setting}, waiting.

"I will try once I feel ready," the {hero} said. But ready did not come. They waited, and waited, and the feeling never quite arrived.

{companion_name} sat beside them. "May I tell you something true? No one feels completely ready. Not me. Not anyone. We begin while we still feel unsure."

"But what if I am not good enough yet?" asked the {hero}.

"You do not have to be finished to begin," said {companion_name}. "You only have to be willing. The readiness comes after you start, never before."

The {hero} felt the {object_motif} flicker — faint, but already there, already theirs.

So, still unsure, the {hero} took the first small step anyway. And the moment they did, the waiting fell away.

"I did not feel ready," they whispered, "and I did it."

{refrain}.`,
    scriptTemplate: `The {object_motif} glowed softly within {child_name} the {hero} as they stood at the edge of something new in {setting}, waiting.

"I will try once I feel ready," {child_name} said. But ready did not come. {child_name} waited, and waited, and the feeling never quite arrived.

{companion_name} sat beside them. "May I tell you something true, {child_name}? No one feels completely ready. Not me. Not anyone. We begin while we still feel unsure."

"But what if I am not good enough yet?" asked {child_name}.

"You do not have to be finished to begin," said {companion_name}. "You only have to be willing. The readiness comes after you start, never before."

{child_name} felt the {object_motif} flicker — faint, but already there, already theirs.

So, still unsure, {child_name} took the first small step anyway. And the moment they did, the waiting fell away.

"I did not feel ready," {child_name} whispered, "and I did it."

{refrain}.`,
  },

  {
    ordinal: 2, title: 'Your Brave Voice',
    concept: 'Speaking up even when it feels scary', callback: "You don't have to be ready (Level 1)", ageFloor: 4,
    summary: 'The hero has something to say but feels too small to say it. Their companion helps them find their brave voice — quiet is fine, what matters is that it is theirs. It builds on Level 1: you can speak before you feel ready.',
    teachingNote: 'Using your voice — even quietly — is a daily act of confidence; a child who practises it learns their thoughts are worth sharing.',
    audioTemplate: `In the hush of {setting}, the {hero} had something to say — but the words stayed stuck inside, behind a fluttering {object_motif}.

"What if it sounds silly? What if my voice shakes?" they whispered.

{companion_name} leaned in warmly. "Your voice is allowed to shake. Brave does not mean loud or perfect. It means you speak, even small, because what you think matters."

The {hero} remembered: you do not have to feel ready. So they took a breath, and let the words out — quietly, a little wobbly, but out.

And the world did not end. Someone listened. Someone nodded. The {object_motif} glowed a little steadier inside them.

"It came out shaky," said the {hero}, "but I said it."

"And it was yours," said {companion_name}. "That is your brave voice. The more you use it, the more it feels like home."

The {hero} sat taller, the small light within them warmer than before.

{refrain}.`,
    scriptTemplate: `In the hush of {setting}, {child_name} the {hero} had something to say — but the words stayed stuck inside, behind a fluttering {object_motif}.

"What if it sounds silly? What if my voice shakes?" {child_name} whispered.

{companion_name} leaned in warmly. "Your voice is allowed to shake, {child_name}. Brave does not mean loud or perfect. It means you speak, even small, because what you think matters."

{child_name} remembered: you do not have to feel ready. So {child_name} took a breath, and let the words out — quietly, a little wobbly, but out.

And the world did not end. Someone listened. Someone nodded. The {object_motif} glowed a little steadier inside them.

"It came out shaky," said {child_name}, "but I said it."

"And it was yours," said {companion_name}. "That is your brave voice. The more you use it, the more it feels like home."

{child_name} sat taller, the small light within them warmer than before.

{refrain}.`,
  },

  {
    ordinal: 3, title: 'Comparing Hurts',
    concept: 'Measuring yourself by your own path, not others', callback: "You don't have to be ready (Level 1)", ageFloor: 4,
    summary: 'The hero watches others and feels small by comparison. Their companion shows them that comparing dims your own light, and that their journey is their own. It revisits Level 1: your starting point is allowed to be just where it is.',
    teachingNote: 'Comparison is the quiet thief of confidence; learning to measure by your own progress keeps a child\'s inner light their own.',
    audioTemplate: `The {hero} sat in {setting} watching others do things easily, and felt their {object_motif} dim.

"They are so much better than me," they said quietly. "Why am I so far behind?"

{companion_name} settled close. "When you measure your inside against everyone else's outside, your own light always looks smaller. But it is not. You are only seeing them at a different place on a different path."

"But they make it look so easy," said the {hero}.

"You did not see their hard parts," said {companion_name}. "Everyone has them. Compare yourself only to who you were yesterday — that is the only race that is yours."

The {hero} thought about how far they had come, all on their own, and the {object_motif} brightened again, warm and steady.

"My path is mine," they said.

"And it is a good one," said {companion_name}. "Tend your own light. It was never meant to look like anyone else's."

{refrain}.`,
    scriptTemplate: `{child_name} the {hero} sat in {setting} watching others do things easily, and felt their {object_motif} dim.

"They are so much better than me," {child_name} said quietly. "Why am I so far behind?"

{companion_name} settled close. "When you measure your inside against everyone else's outside, your own light always looks smaller. But it is not, {child_name}. You are only seeing them at a different place on a different path."

"But they make it look so easy," said {child_name}.

"You did not see their hard parts," said {companion_name}. "Everyone has them. Compare yourself only to who you were yesterday — that is the only race that is yours."

{child_name} thought about how far they had come, all on their own, and the {object_motif} brightened again, warm and steady.

"My path is mine," {child_name} said.

"And it is a good one," said {companion_name}. "Tend your own light. It was never meant to look like anyone else's."

{refrain}.`,
  },

  {
    ordinal: 4, title: 'Brave is Scared and Trying',
    concept: 'Courage means feeling afraid and acting anyway', callback: 'Your brave voice (Level 2)', ageFloor: 5,
    summary: 'The hero believes brave means not being scared — so feeling afraid makes them think they are failing. Their companion redefines courage: brave is being scared and trying anyway. It builds on Level 2: the shaky voice was brave precisely because it was scared.',
    teachingNote: 'Reframing fear as a companion to courage — not its opposite — lets a child act bravely without waiting to feel fearless.',
    audioTemplate: `Something big stood before the {hero} in {setting}, and their heart raced. The {object_motif} trembled inside them.

"I must not be brave," they said sadly, "because I am so scared."

{companion_name} shook their head softly. "Oh, but that is exactly backwards. If you were not scared, it would not take any courage at all. Brave is not the absence of fear. Brave is being scared — and trying anyway."

The {hero} blinked. "So being scared… means I have a chance to be brave?"

"Always," said {companion_name}. "Your shaky voice, long ago — that was brave because it shook."

The {hero} felt the fear still there, fluttering — but beside it now stood something steadier. They did not wait for the fear to leave. They stepped forward with it.

And that step, taken while afraid, was the bravest thing they had ever done.

"Scared and trying," the {hero} breathed, and the {object_motif} burned warm and proud.

{refrain}.`,
    scriptTemplate: `Something big stood before {child_name} the {hero} in {setting}, and their heart raced. The {object_motif} trembled inside them.

"I must not be brave," {child_name} said sadly, "because I am so scared."

{companion_name} shook their head softly. "Oh, but that is exactly backwards, {child_name}. If you were not scared, it would not take any courage at all. Brave is not the absence of fear. Brave is being scared — and trying anyway."

{child_name} blinked. "So being scared… means I have a chance to be brave?"

"Always," said {companion_name}. "Your shaky voice, long ago — that was brave because it shook."

{child_name} felt the fear still there, fluttering — but beside it now stood something steadier. {child_name} did not wait for the fear to leave, and stepped forward with it.

And that step, taken while afraid, was the bravest thing {child_name} had ever done.

"Scared and trying," {child_name} breathed, and the {object_motif} burned warm and proud.

{refrain}.`,
  },

  {
    ordinal: 5, title: 'I Can Try',
    concept: 'The settled, quiet confidence to attempt anything', callback: 'Brave is scared and trying (Level 4)', ageFloor: 5,
    summary: 'The capstone: facing something new, the hero no longer needs to feel ready, fearless, or better than anyone. They simply trust their own small light and say the three words that hold all of it — I can try. The path gathers into a calm, durable confidence.',
    teachingNote: 'True confidence is not certainty of success but the settled willingness to try — the quiet ground from which every other skill grows.',
    audioTemplate: `Under the wide night over {setting}, something new and uncertain waited for the {hero}. The {object_motif} glowed steadily within.

Once, the {hero} would have waited to feel ready, or fearless, or as good as everyone else. But they knew better now.

They did not have to feel ready — they could begin unsure. They had their own brave voice. Their path was their own, not a race against anyone. And being scared did not stop them; brave was scared and trying.

So the {hero} stood quietly before the new thing, not certain it would work, and felt the small, steady light that was theirs and always had been.

"I do not know if I will get it right," they said, calm and clear. "But I can try."

And those three words held everything. Not loud. Not certain. Just enough.

"That," said {companion_name} softly, "is confidence. Not knowing you will win — knowing you are willing to try."

The {hero} stepped forward into the new, their {object_motif} glowing warm and whole.

{refrain}.`,
    scriptTemplate: `Under the wide night over {setting}, something new and uncertain waited for {child_name} the {hero}. The {object_motif} glowed steadily within.

Once, {child_name} would have waited to feel ready, or fearless, or as good as everyone else. But {child_name} knew better now.

They did not have to feel ready — they could begin unsure. They had their own brave voice. Their path was their own, not a race against anyone. And being scared did not stop them; brave was scared and trying.

So {child_name} stood quietly before the new thing, not certain it would work, and felt the small, steady light that was theirs and always had been.

"I do not know if I will get it right," {child_name} said, calm and clear. "But I can try."

And those three words held everything. Not loud. Not certain. Just enough.

"That," said {companion_name} softly, "is confidence. Not knowing you will win — knowing you are willing to try."

{child_name} stepped forward into the new, their {object_motif} glowing warm and whole.

{refrain}.`,
  },
]
