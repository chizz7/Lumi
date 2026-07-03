// app/_components/AppNav.tsx
// Fixed two-tab bottom nav for the authenticated app screens (library/account).
// Deliberately NOT in the (app) layout: /welcome shares that layout and must
// not show the nav.

import Link from 'next/link'

const TABS = [
  { key: 'library', href: '/library', emoji: '📚', label: 'Library' },
  { key: 'account', href: '/account', emoji: '👤', label: 'Account' },
] as const

export default function AppNav({ active }: { active: 'library' | 'account' }) {
  return (
    <nav style={{ position:'fixed', bottom:0, left:0, right:0, background:'#FBF4E6', borderTop:'1px solid #ece0c8', display:'flex', justifyContent:'space-around', padding:'8px 0 12px' }} aria-label="App navigation">
      {TABS.map(t => (
        <Link key={t.key} href={t.href} aria-current={active === t.key ? 'page' : undefined}
          style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'3px', fontSize:'11px', fontWeight:700, color: active === t.key ? '#E0852A' : '#5d5278', textDecoration:'none' }}>
          <span style={{ fontSize:'22px' }} aria-hidden="true">{t.emoji}</span>{t.label}
        </Link>
      ))}
    </nav>
  )
}
