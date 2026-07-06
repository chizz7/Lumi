#!/usr/bin/env tsx
// scripts/test-email.ts
// Send a real story-delivery email through the SAME code path production uses
// (getResend() + EMAIL_FROM + sendStoryEmail), so you can confirm the sender
// domain, API key, and template all work — without going through Stripe.
//
// Usage (needs RESEND_API_KEY + EMAIL_FROM in the environment):
//   RESEND_API_KEY=... EMAIL_FROM=stories@mylumi.xyz \
//   NEXT_PUBLIC_APP_URL=https://mylumi.xyz \
//   npx tsx scripts/test-email.ts you@example.com
//
// Node's --env-file also works if you keep a local .env:
//   node --env-file=.env --import tsx scripts/test-email.ts you@example.com
//
// It sends a sample story (no audio is rendered — the play link points at a
// harmless /s/ id purely to exercise the button); nothing is written to the DB.

import { sendStoryEmail, EMAIL_FROM } from '@/lib/email'

async function main() {
  const to = process.argv[2]
  if (!to) {
    console.error('Usage: tsx scripts/test-email.ts <recipient@example.com>')
    process.exit(1)
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set — export it (or use --env-file) before running.')
    process.exit(1)
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://mylumi.xyz'
  console.log(`Sending test story email:`)
  console.log(`  from: ${EMAIL_FROM}`)
  console.log(`  to:   ${to}`)
  console.log(`  play link base: ${appUrl}/s/…`)

  await sendStoryEmail({
    to,
    childName:  'Ada',
    levelTitle: 'The Lantern That Learned to Wait',
    audioUrl:   `${appUrl}/s/00000000-0000-0000-0000-000000000000`,
    script:     'Once upon a bedtime, a small lantern named Glim wanted to shine all its light at once…\n\n(This is a delivery-pipeline test email — the play link is a placeholder.)',
  })

  console.log('\n✓ Resend accepted the send. Check the inbox (and spam).')
  console.log('  If it never arrives, verify the domain shows "Verified" in Resend and that')
  console.log(`  EMAIL_FROM's domain matches it (currently: ${EMAIL_FROM.split('@')[1]}).`)
}

main().catch(err => {
  console.error('\n✗ Send failed:', err?.message ?? err)
  console.error('  401 → bad RESEND_API_KEY · 403/"not verified" → DNS not propagated yet.')
  process.exit(1)
})
