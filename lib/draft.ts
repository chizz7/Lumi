// lib/draft.ts
// The draft is the parent's builder choices before they pay.
// Stored as a signed JSON cookie — simple HMAC to prevent tampering.
// (Worst case of tampering: they change their own preview. Not a real risk.)

import { createHmac } from 'crypto'
import { cookies }    from 'next/headers'
import type { NextRequest, NextResponse } from 'next/server'

const SECRET      = process.env.DRAFT_SECRET!
const COOKIE_NAME = 'lumi_draft'
const COOKIE_MAX  = 60 * 60 * 24 * 7  // 7 days

export interface Draft {
  childName:    string
  ageBand:      string   // '3-4' | '5-6' | '7-8'
  skinSlug:     string   // resolved world: 'sea' | 'space' | 'forest' | 'castle' | 'dino' | 'jungle'
  subjectSlug:  string   // 'money' etc.
  voiceId:      string   // 'af_heart' etc.
  interestSlug?: string  // what the child loves; maps to skinSlug (content/interests.ts)
  ref?:         string   // referral code (from ?ref=…); credits the referrer on paid signup
}

function sign(data: string): string {
  return createHmac('sha256', SECRET).update(data).digest('hex').slice(0, 16)
}

function encode(draft: Draft): string {
  const data = JSON.stringify(draft)
  return `${Buffer.from(data).toString('base64')}.${sign(data)}`
}

function decode(raw: string): Draft | null {
  try {
    const [b64, sig] = raw.split('.')
    if (!b64 || !sig) return null
    const data = Buffer.from(b64, 'base64').toString()
    if (sign(data) !== sig) return null
    return JSON.parse(data) as Draft
  } catch {
    return null
  }
}

// Read from the current request cookies
export async function getDraft(req?: NextRequest): Promise<Draft | null> {
  const raw = req
    ? req.cookies.get(COOKIE_NAME)?.value
    : (await cookies()).get(COOKIE_NAME)?.value
  if (!raw) return null
  return decode(raw)
}

// Write to a NextResponse
export function setDraft(res: NextResponse, draft: Draft): void {
  res.cookies.set(COOKIE_NAME, encode(draft), {
    httpOnly: true,
    sameSite: 'lax',
    secure:   process.env.NODE_ENV === 'production',
    maxAge:   COOKIE_MAX,
    path:     '/',
  })
}

export function clearDraft(res: NextResponse): void {
  res.cookies.set(COOKIE_NAME, '', { maxAge: 0, path: '/' })
}
