'use client'
// app/_components/ReferralCard.tsx
// "Refer friends" panel for the account page. Shows the parent's share link and
// how many free months they've earned. Self-contained: fetches /api/referrals.

import { useEffect, useState } from 'react'

interface ReferralData {
  code: string | null
  link: string | null
  rewardCents: number
  creditedCount: number
  pendingCount: number
  totalReferred: number
}

export default function ReferralCard() {
  const [data, setData]     = useState<ReferralData | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => { fetch('/api/referrals').then(r => r.ok ? r.json() : null).then(setData).catch(() => {}) }, [])

  if (!data || !data.link) return null

  const reward = `$${(data.rewardCents / 100).toFixed(2)}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(data.link!)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { /* clipboard blocked — the input is selectable as a fallback */ }
  }

  return (
    <section aria-labelledby="referral-heading" style={{ background:'#fff', border:'1px solid #ece0c8', borderRadius:'16px', padding:'18px', marginBottom:'22px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'6px' }}>
        <h2 id="referral-heading" style={{ fontFamily:'var(--font-fraunces)', fontSize:'16px' }}>🎁 Give a month, get a month</h2>
        {data.creditedCount > 0 && (
          <span style={{ background:'#e7f6ee', color:'#1c7a4a', fontSize:'11.5px', fontWeight:800, padding:'4px 10px', borderRadius:'99px' }}>
            {data.creditedCount} free {data.creditedCount === 1 ? 'month' : 'months'} earned
          </span>
        )}
      </div>
      <p style={{ fontSize:'13px', color:'#5d5278', marginBottom:'14px', lineHeight:1.5 }}>
        Share your link. For every friend who subscribes, you get a free month ({reward} credit) — no limit.
      </p>

      <div style={{ display:'flex', gap:'8px', alignItems:'stretch' }}>
        <input readOnly value={data.link} onFocus={e => e.currentTarget.select()}
          aria-label="Your referral link"
          style={{ flex:1, minWidth:0, padding:'11px 12px', border:'1.5px solid #e0d2b7', borderRadius:'11px', fontSize:'13px', fontFamily:'inherit', background:'#FBF4E6', color:'#211a3a' }} />
        <button onClick={copy}
          style={{ flexShrink:0, padding:'11px 16px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:800, border:'none', borderRadius:'11px', cursor:'pointer', fontSize:'13.5px' }}>
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {(data.pendingCount > 0 || data.totalReferred > 0) && (
        <p style={{ fontSize:'12px', color:'#9d92c0', marginTop:'10px' }}>
          {data.totalReferred} referral{data.totalReferred === 1 ? '' : 's'} so far
          {data.pendingCount > 0 ? ` · ${data.pendingCount} pending` : ''}.
        </p>
      )}
    </section>
  )
}
