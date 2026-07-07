// app/(app)/welcome/page.tsx
// Stripe redirects here after checkout.session.completed.
// The webhook has already run and Level 1 is being delivered.

import { Suspense } from 'react'
import SubscribePixel from '@/app/_components/SubscribePixel'

export default function WelcomePage() {
  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(170deg,#241a52,#3a2470)', display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 24px' }}>
      <Suspense fallback={null}><SubscribePixel /></Suspense>
      <div style={{ maxWidth:'480px', width:'100%', textAlign:'center', color:'#fff' }}>
        <div style={{ width:'80px', height:'80px', borderRadius:'50%', background:'#54B6A6', display:'grid', placeItems:'center', fontSize:'36px', margin:'0 auto 22px', boxShadow:'0 0 0 12px rgba(84,182,166,.18)' }}>✓</div>
        <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'28px', marginBottom:'10px' }}>
          You're all set!
        </h1>
        <p style={{ fontSize:'16px', color:'#dccffa', lineHeight:1.6, marginBottom:'16px' }}>
          Your story is on its way. Check your email — we've sent a magic link to sign in and your first story.
        </p>
        <p style={{ fontSize:'14px', color:'#cfc3ea', lineHeight:1.6, marginBottom:'28px' }}>
          After this one, a new leveled story unlocks in your library every other day.
        </p>
        <a href="/library" style={{ display:'inline-block', padding:'15px 32px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, borderRadius:'15px', textDecoration:'none', fontSize:'16px' }}>
          Go to your library →
        </a>
        <p style={{ marginTop:'16px', fontSize:'14px', color:'#cfc3ea' }}>
          No password needed — click the magic link in your email to sign in.
        </p>
      </div>
    </main>
  )
}
