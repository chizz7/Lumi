// app/privacy/page.tsx
// Privacy Policy and COPPA disclosure.
// ⚠ IMPORTANT: Have a lawyer review this before launch.
// This is a template — personalise the [bracketed] sections.

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Lumi collects, uses, and protects your data.',
}

const EFFECTIVE_DATE = 'June 2026'
const CONTACT_EMAIL  = 'privacy@lumi.app'  // update to your real address

export default function PrivacyPage() {
  return (
    <main style={{ background:'#FBF4E6', minHeight:'100vh', padding:'0 0 80px' }}>
      <header style={{ background:'linear-gradient(170deg,#241a52,#3a2470)', color:'#fff', padding:'60px 24px 40px', textAlign:'center' }}>
        <Link href="/" style={{ color:'rgba(255,255,255,.6)', fontSize:'14px', textDecoration:'none', display:'block', marginBottom:'16px' }}>← Back to Lumi</Link>
        <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'32px', marginBottom:'8px' }}>Privacy Policy</h1>
        <p style={{ color:'#dccffa', fontSize:'14px' }}>Effective: {EFFECTIVE_DATE}</p>
      </header>

      <div style={{ maxWidth:'720px', margin:'0 auto', padding:'44px 24px' }}>
        <div style={{ background:'#fff7ea', border:'1.5px solid #f1ddb6', borderRadius:'16px', padding:'20px', marginBottom:'36px' }}>
          <p style={{ fontSize:'15px', color:'#6b3a1a', lineHeight:1.65, fontWeight:600 }}>
            Short version: We collect the minimum possible. No child's real name, birthdate, photo, or location is ever stored. Parents control all data. Everything can be exported or deleted at any time.
          </p>
        </div>

        {[
          {
            heading: '1. Who we are',
            body: `Lumi ("we", "us") provides personalised bedtime stories via lumi.app. Contact us at ${CONTACT_EMAIL}.`,
          },
          {
            heading: '2. What we collect — and what we deliberately do not',
            body: `We collect:
• Parent's email address (for login and story delivery)
• Interest tags you choose for your child (e.g. "animals", "ocean")
• Chosen story world, voice, and learning path
• Billing reference via Stripe (we never store card numbers)
• Story delivery records (which levels were delivered)

We do NOT collect:
• Your child's real full name (only an optional nickname)
• Date of birth or precise age
• Photos or likeness of any child
• Location data
• Behavioural tracking of any child
• Browser fingerprinting`
          },
          {
            heading: '3. Children\'s privacy (COPPA)',
            body: `Lumi is a service for parents. Children do not have accounts and do not interact with our platform directly. All information is provided by the parent account holder on behalf of their child.

We comply with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, contact us at ${CONTACT_EMAIL} and we will delete it promptly.

Parents may at any time:
• Review data we hold by requesting a data export (Account → Export my data)
• Update or correct information in Account settings
• Delete all data (Account → Delete account)`,
          },
          {
            heading: '4. How we use your data',
            body: `• To deliver personalised story audio and scripts to your email
• To maintain your story library
• To send transactional emails (story delivery, payment receipts)
• To improve the product using anonymised analytics (PostHog)

We never sell your data. We never use your data for advertising.`,
          },
          {
            heading: '5. Voice recordings',
            body: `If you record your voice for narration (an optional feature), your recording is stored privately in our cloud storage (Supabase). It is used only to narrate your account's stories. It is never shared, sold, or used to train AI models. You can delete your recording at any time from Account → Voice settings.`,
          },
          {
            heading: '6. Data retention',
            body: `We retain data while your account is active. When you delete your account, all data is permanently deleted within 24 hours — including story instances, your child's profile, voice recordings, and auth credentials.`,
          },
          {
            heading: '7. Third-party services',
            body: `• Supabase (database + auth) — EU/US data storage
• Stripe (payments) — PCI-compliant, we never see card details
• Resend (email delivery)
• DeepInfra (text-to-speech processing)
• PostHog (anonymised analytics — IPs masked, inputs masked)`,
          },
          {
            heading: '8. Your rights',
            body: `Depending on where you live, you may have rights under GDPR, CCPA, or similar laws, including the right to access, correct, or delete your data. To exercise these rights, use the tools in your account or email ${CONTACT_EMAIL}.`,
          },
          {
            heading: '9. Changes to this policy',
            body: `We'll email you if we make material changes. The current version is always at lumi.app/privacy.`,
          },
          {
            heading: '10. Contact',
            body: `Questions? ${CONTACT_EMAIL}`,
          },
        ].map(({ heading, body }) => (
          <section key={heading} id={heading.includes('COPPA') ? 'coppa' : undefined} style={{ marginBottom:'32px', scrollMarginTop:'80px' }}>
            <h2 style={{ fontFamily:'var(--font-fraunces)', fontSize:'19px', marginBottom:'10px', color:'#211a3a' }}>{heading}</h2>
            <div style={{ fontSize:'15px', color:'#5d5278', lineHeight:1.7, whiteSpace:'pre-line' }}>{body}</div>
          </section>
        ))}

        <div style={{ borderTop:'1px solid #ece0c8', paddingTop:'24px', textAlign:'center' }}>
          <Link href="/" style={{ color:'#9B86E0', fontSize:'14px' }}>← Back to Lumi</Link>
          {' · '}
          <Link href="/terms" style={{ color:'#9B86E0', fontSize:'14px' }}>Terms of Service</Link>
        </div>
      </div>
    </main>
  )
}
