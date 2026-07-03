// app/login/page.tsx — magic link login
'use client'
import { useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'

export default function LoginPage() {
  const [email, setEmail]   = useState('')
  const [sent,  setSent]    = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState<string | null>(null)

  const sendMagicLink = async () => {
    if (!email) return
    setLoading(true)
    setError(null)
    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
      })
      if (otpError) {
        setError(otpError.message || "We couldn't send the magic link. Please try again.")
      } else {
        setSent(true)
      }
    } catch {
      setError("We couldn't send the magic link. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight:'100vh', background:'linear-gradient(170deg,#241a52,#3a2470)', display:'grid', placeItems:'center', padding:'24px' }}>
      <div style={{ maxWidth:'400px', width:'100%', textAlign:'center', color:'#fff' }}>
        <a href="/" style={{ fontFamily:'var(--font-fraunces)', fontSize:'22px', color:'#fff', textDecoration:'none', display:'block', marginBottom:'32px' }}>🌙 Lumi</a>
        {sent ? (
          <>
            <div style={{ fontSize:'48px', marginBottom:'16px' }}>📬</div>
            <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'24px', marginBottom:'10px' }}>Check your email</h1>
            <p style={{ color:'#dccffa', lineHeight:1.6 }}>We sent a magic link to <strong>{email}</strong>. Click it to sign in — no password needed.</p>
            <button onClick={() => setSent(false)} style={{ marginTop:'20px', background:'none', border:'1px solid rgba(255,255,255,.3)', color:'rgba(255,255,255,.7)', padding:'10px 20px', borderRadius:'12px', cursor:'pointer', fontSize:'14px' }}>Try a different email</button>
          </>
        ) : (
          <>
            <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'28px', marginBottom:'10px' }}>Sign in to Lumi</h1>
            <p style={{ color:'#dccffa', marginBottom:'28px' }}>We'll email you a magic link — no password needed.</p>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="parent@email.com"
              onKeyDown={e => e.key === 'Enter' && sendMagicLink()}
              style={{ width:'100%', padding:'15px', border:'1px solid rgba(255,255,255,.25)', background:'rgba(255,255,255,.1)', color:'#fff', borderRadius:'13px', fontSize:'16px', marginBottom:'12px', outline:'none', fontFamily:'inherit' }} />
            {error && (
              <p role="alert" style={{ color:'#FFB4A8', fontSize:'13.5px', marginBottom:'12px', lineHeight:1.5 }}>{error}</p>
            )}
            <button onClick={sendMagicLink} disabled={!email || loading}
              style={{ width:'100%', padding:'15px', background: !email||loading?'#5b4f86':'linear-gradient(135deg,#FFD27A,#E0852A)', color: !email||loading?'#cfc3ea':'#3a230a', fontWeight:700, border:'none', borderRadius:'15px', cursor: !email||loading?'not-allowed':'pointer', fontSize:'15px' }}>
              {loading ? 'Sending…' : 'Send magic link →'}
            </button>
            <p style={{ marginTop:'20px', fontSize:'13px', color:'rgba(255,255,255,.4)' }}>Don't have an account? <a href="/" style={{ color:'#FFD27A', fontWeight:700 }}>Start free →</a></p>
          </>
        )}
      </div>
    </main>
  )
}
