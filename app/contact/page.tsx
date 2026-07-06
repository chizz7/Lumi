// app/contact/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Contact us' }

export default function ContactPage() {
  return (
    <main style={{ background:'#FBF4E6', minHeight:'100vh', display:'grid', placeItems:'center', padding:'24px' }}>
      <div style={{ maxWidth:'480px', width:'100%', textAlign:'center' }}>
        <Link href="/" style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', color:'#211a3a', textDecoration:'none', display:'block', marginBottom:'28px' }}>🌙 Lumi</Link>
        <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'28px', marginBottom:'10px' }}>Get in touch</h1>
        <p style={{ fontSize:'16px', color:'#5d5278', lineHeight:1.6, marginBottom:'28px' }}>
          Story issues, account questions, or just want to say hello — we read every email.
        </p>
        <a href="mailto:hello@mylumi.xyz" style={{ display:'inline-block', padding:'15px 32px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, borderRadius:'15px', textDecoration:'none', fontSize:'16px' }}>
          hello@mylumi.xyz
        </a>
        <p style={{ marginTop:'16px', fontSize:'13px', color:'#5d5278' }}>We usually reply within one business day.</p>
        <p style={{ marginTop:'24px' }}><Link href="/" style={{ color:'#9B86E0', fontSize:'14px' }}>← Back to Lumi</Link></p>
      </div>
    </main>
  )
}
