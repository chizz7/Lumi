// app/api/webhooks/stripe/route.ts
// Handles the full Stripe subscription lifecycle — not just the happy path.
//
// Events handled:
//   checkout.session.completed      → create account + deliver first story
//   customer.subscription.deleted   → downgrade plan to 'free'
//   invoice.payment_failed          → email the parent, keep plan active for now
//   invoice.payment_succeeded       → (optional) log renewal

import { NextRequest, NextResponse }  from 'next/server'
import { constructWebhookEvent }      from '@/lib/stripe'
import { adminClient }                from '@/lib/supabase'
import { assembleStory }              from '@/content'
import { getOrRenderAudio, audioCacheKey, type VoiceId } from '@/lib/tts'
import { sendStoryEmail }             from '@/lib/email'
import { track }                      from '@/lib/analytics'
import type { Draft }                 from '@/lib/draft'
import type Stripe                    from 'stripe'
import { Resend }                     from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)
const FROM   = process.env.EMAIL_FROM ?? 'stories@lumi.app'

export async function POST(req: NextRequest) {
  const sig  = req.headers.get('stripe-signature') ?? ''
  const body = await req.text()

  let event: Stripe.Event
  try {
    event = constructWebhookEvent(body, sig)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {

    // ── 1. New subscriber ────────────────────────────────────────────────────
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      await handleNewSubscriber(session)
      break
    }

    // ── 2. Subscription cancelled / expired ──────────────────────────────────
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const customerId = sub.customer as string
      const { data: account } = await adminClient
        .from('accounts')
        .select('id, email')
        .eq('stripe_customer_id', customerId)
        .single()
      if (account) {
        await adminClient.from('accounts').update({ plan: 'free' }).eq('id', account.id)
        track('subscription_cancelled', { customerId }, account.id)
      }
      break
    }

    // ── 3. Payment failed ────────────────────────────────────────────────────
    case 'invoice.payment_failed': {
      const invoice    = event.data.object as Stripe.Invoice
      const customerId = invoice.customer as string
      const { data: account } = await adminClient
        .from('accounts')
        .select('email')
        .eq('stripe_customer_id', customerId)
        .single()
      if (account?.email) {
        await resend.emails.send({
          from:    FROM,
          to:      account.email,
          subject: 'Action needed — your Lumi payment didn\'t go through',
          html: `<p>Hi there — we couldn't charge your card for your Lumi Story Club subscription.</p>
                 <p>Please <a href="https://billing.stripe.com/p/login/test_XXXXX">update your payment method</a> to keep your stories coming.</p>`,
        })
        track('payment_failed', { customerId }, undefined)
      }
      break
    }

    // ── 4. Renewal succeeded (optional logging) ───────────────────────────────
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice
      if (invoice.billing_reason === 'subscription_cycle') {
        track('subscription_renewed', { customerId: invoice.customer as string }, undefined)
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}

// ─── New subscriber handler ────────────────────────────────────────────────────

async function handleNewSubscriber(session: Stripe.Checkout.Session) {
  const email    = session.customer_email ?? session.customer_details?.email
  const draftStr = session.metadata?.draft

  if (!email || !draftStr) {
    console.error('[webhook] missing email or draft', session.id)
    return
  }

  const draft = JSON.parse(draftStr) as Draft

  // Idempotency guard
  const { data: existing } = await adminClient
    .from('accounts').select('id').eq('email', email).maybeSingle()
  if (existing) {
    console.log('[webhook] account already exists, skipping:', email)
    return
  }

  // Create Supabase Auth user
  const { data: authData, error: authErr } = await adminClient.auth.admin.createUser({
    email,
    email_confirm: true,
  })
  if (authErr || !authData.user) {
    console.error('[webhook] auth user creation failed:', authErr?.message)
    return
  }
  const userId = authData.user.id

  // Persist account + profile
  await adminClient.from('accounts').insert({
    id:                 userId,
    email,
    stripe_customer_id: session.customer as string,
    plan:               'club',
  })

  const { data: profile } = await adminClient
    .from('child_profiles')
    .insert({
      account_id:    userId,
      name:          draft.childName,
      age_band:      draft.ageBand,
      skin_slug:     draft.skinSlug,
      subject_slug:  draft.subjectSlug,
      voice_id:      draft.voiceId,
      current_level: 1,
    })
    .select().single()

  if (!profile) { console.error('[webhook] profile insert failed'); return }

  // Assemble, render, deliver
  const { audioText, script, level } = assembleStory(draft.subjectSlug, 1, draft.skinSlug, draft.childName)
  const cacheKey = audioCacheKey(draft.subjectSlug, 1, draft.skinSlug, draft.voiceId)

  let audioUrl = ''
  try {
    audioUrl = await getOrRenderAudio(audioText, draft.voiceId as VoiceId, cacheKey)
  } catch (err) {
    console.error('[webhook] TTS failed (non-fatal):', err)
  }

  try {
    await sendStoryEmail({ to: email, childName: draft.childName, levelTitle: level.title, audioUrl, script })
  } catch (err) {
    console.error('[webhook] email failed (non-fatal):', err)
  }

  await adminClient.from('story_instances').insert({
    profile_id:    profile.id,
    subject_slug:  draft.subjectSlug,
    level_ordinal: 1,
    skin_slug:     draft.skinSlug,
    voice_id:      draft.voiceId,
    audio_key:     cacheKey,
    script_text:   script,
  })

  track('subscription_started', { subjectSlug: draft.subjectSlug, skinSlug: draft.skinSlug }, userId)
  console.log(`[webhook] delivered level 1 to ${email}`)
}
