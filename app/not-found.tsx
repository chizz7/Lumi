// app/not-found.tsx
export default function NotFound() {
  return (
    <main style={{ minHeight:'100vh', background:'#FBF4E6', display:'grid', placeItems:'center', padding:'24px', textAlign:'center' }}>
      <div>
        <div style={{ fontSize:'64px', marginBottom:'16px' }}>🌙</div>
        <h1 style={{ fontFamily:'var(--font-fraunces)', fontSize:'32px', color:'#211a3a', marginBottom:'10px' }}>Page not found</h1>
        <p style={{ fontSize:'16px', color:'#5d5278', marginBottom:'28px', lineHeight:1.6 }}>
          The page you're looking for doesn't exist.
        </p>
        <a href="/" style={{ padding:'14px 28px', background:'linear-gradient(135deg,#FFD27A,#E0852A)', color:'#3a230a', fontWeight:700, borderRadius:'14px', textDecoration:'none', fontSize:'15px' }}>
          ← Back home
        </a>
      </div>
    </main>
  )
}
