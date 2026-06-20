// app/api/curriculum/route.ts
// GET /api/curriculum?subject=money
// Returns all levels for a subject with their summaries.
// Used by: the app's "next story" view, the library paths tab.
// No auth required — curriculum is public information.

import { NextRequest, NextResponse } from 'next/server'
import { getAllLevels, getAllSkins }  from '@/content'

export async function GET(req: NextRequest) {
  const subject = req.nextUrl.searchParams.get('subject') ?? 'money'

  let levels
  try {
    levels = getAllLevels(subject)
  } catch {
    return NextResponse.json({ error: `Unknown subject: ${subject}` }, { status: 404 })
  }

  const skins = getAllSkins(subject)

  return NextResponse.json({
    subject,
    levels: levels.map(l => ({
      ordinal:      l.ordinal,
      title:        l.title,
      concept:      l.concept,
      callback:     l.callback,
      summary:      l.summary,
      teachingNote: l.teachingNote,
      ageFloor:     l.ageFloor,
    })),
    skins: skins.map(s => ({
      slug:          s.slug,
      setting:       s.setting,
      hero:          s.hero,
      companionName: s.companionName,
    })),
  })
}
