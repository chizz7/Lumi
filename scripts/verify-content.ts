// scripts/verify-content.ts
// Exhaustive assembler check: every subject × level × skin × age band must
// assemble (audio generic, audio named, and script) with no unfilled slot and
// the learning beat preserved. Run: npx tsx scripts/verify-content.ts
import {
  getAllSubjectSlugs, getAllLevels, getAllSkins,
  assembleAudio, assembleScript,
} from '@/content'
import type { AgeBand } from '@/content/types'

const AGE_BANDS: (AgeBand | undefined)[] = [undefined, '3-4', '5-6', '7-8', '9-11']
const NAME = 'Robin'

let checks = 0
const failures: string[] = []

for (const subject of getAllSubjectSlugs()) {
  const levels = getAllLevels(subject)
  const skins  = getAllSkins(subject)
  for (const level of levels) {
    for (const skin of skins) {
      for (const age of AGE_BANDS) {
        const tag = `${subject}/L${level.ordinal}/${skin.slug}/${age ?? 'default'}`
        try { assembleAudio(subject, level.ordinal, skin.slug, age); checks++ }
        catch (e) { failures.push(`AUDIO  ${tag}: ${(e as Error).message}`) }
        try { assembleAudio(subject, level.ordinal, skin.slug, age, NAME); checks++ }
        catch (e) { failures.push(`NAMED  ${tag}: ${(e as Error).message}`) }
        try {
          const s = assembleScript(subject, level.ordinal, skin.slug, NAME, age)
          if (!s.includes(NAME)) failures.push(`SCRIPT ${tag}: child name missing`)
          checks++
        } catch (e) { failures.push(`SCRIPT ${tag}: ${(e as Error).message}`) }
      }
    }
  }
}

console.log(`Ran ${checks} assemble checks across ${getAllSubjectSlugs().length} subjects.`)
if (failures.length) {
  console.error(`\n❌ ${failures.length} FAILURES:`)
  for (const f of failures.slice(0, 60)) console.error('  - ' + f)
  process.exit(1)
}
console.log('✅ All combinations assembled cleanly (no unfilled slots, learning beats preserved).')

// Rough length report for the new path so we can eyeball the age scaling.
for (const subject of ['voice']) {
  if (!getAllSubjectSlugs().includes(subject)) continue
  console.log(`\nWord counts for "${subject}" (skin=sea):`)
  for (const level of getAllLevels(subject)) {
    const row = (['3-4','5-6','7-8','9-11'] as AgeBand[]).map(age => {
      const { audioText } = assembleAudio(subject, level.ordinal, 'sea', age, NAME)
      return `${age}:${audioText.trim().split(/\s+/).length}w`
    }).join('  ')
    console.log(`  L${level.ordinal} ${level.title.padEnd(26)} ${row}`)
  }
}
