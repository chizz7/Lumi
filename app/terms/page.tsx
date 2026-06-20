// app/terms/page.tsx
// ⚠ Have a lawyer review before launch.

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Terms of Service' }

const EFFECTIVE_DATE = 'June 2026'
const CONTACT_EMAIL  = 'hello@lumi.app'

export default function TermsPage() {
  return (
    <main style={{ background:'#FBF4E6', minHeight:'100vh', padding:'0 0 80px' }}>
      <header style={{ background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff', padding:'60px 24px 40px', textAlign:'center' }}>
        <Link href="/" style={{ color:'rgba(255,255,255,.6)', fontSize:'14px', textDecoration:'none', display:'block', marginBottom:'16px' }}>← Back to Lumi</Link>
        <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'32px', marginBottom:'8px' }}>Terms of Service</h1>
        <p style={{ color:'#dccffa', fontSize:'14px' }}>Effective: {EFFECTIVE_DATE}</p>
      </header>

      <div style={{ maxWidth:'720px', margin:'0 auto', padding:'44px 24px' }}>
        {[
          { h:'1. The service', b:`Lumi provides personalised audio bedtime stories for children, delivered to a parent's email address and accessible in a private library. You must be 18 or older to create an account.` },
          { h:'2. Story Club subscription', b:`Story Club is a $9.99/month subscription billed via Stripe, delivering one new story every 3 days. Your first story is free (trial). You can cancel at any time from your account. Cancellation takes effect at the end of the current billing period.` },
          { h:'3. Story credits', b:`If you report a story you're unhappy with, we'll issue a credit to your account automatically. Credits apply to your next billing cycle.` },
          { h:'4. Content', b:`Stories are created by human writers, expert-reviewed, and safety-checked before release. We make no guarantee that every story is appropriate for every child — you know your child best. If a story doesn't feel right, use the report feature.` },
          { h:'5. Acceptable use', b:`You may use Lumi for personal, family, non-commercial purposes. You may not redistribute, resell, or publicly broadcast story content.` },
          { h:'6. Intellectual property', b:`All story content, audio, and trademarks are owned by Lumi. Your child's name and preferences remain yours.` },
          { h:'7. Limitation of liability', b:`Lumi is provided "as is." We are not liable for indirect, incidental, or consequential damages. Our liability is limited to the amount you paid in the 3 months preceding any claim.` },
          { h:'8. Changes', b:`We may update these terms. We'll email you for material changes. Continued use after notice constitutes acceptance.` },
          { h:'9. Contact', b:`Questions: ${CONTACT_EMAIL}` },
        ].map(({ h, b }) => (
          <section key={h} style={{ marginBottom:'28px' }}>
            <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'19px', marginBottom:'8px' }}>{h}</h2>
            <p style={{ fontSize:'15px', color:'#5d5278', lineHeight:1.7, whiteSpace:'pre-line' }}>{b}</p>
          </section>
        ))}
        <div style={{ borderTop:'1px solid #ece0c8', paddingTop:'24px', textAlign:'center' }}>
          <Link href="/privacy" style={{ color:'#9B86E0', fontSize:'14px' }}>Privacy Policy</Link>
          {' · '}
          <Link href="/" style={{ color:'#9B86E0', fontSize:'14px' }}>← Back to Lumi</Link>
        </div>
      </div>
    </main>
  )
}
