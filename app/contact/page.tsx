export default function Contact() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '640px', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Reach Out</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '16px' }}>Let&apos;s Connect</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '56px', fontSize: '17px', fontWeight: 300 }}>
          Open to senior automation roles, AI integration projects, and federal consulting opportunities.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <a href="mailto:sunnyrenosh@gmail.com" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '18px 48px', backgroundColor: '#2563eb',
            borderRadius: '100px', fontSize: '16px', fontWeight: 500,
            color: 'white', textDecoration: 'none', width: '100%', maxWidth: '380px',
            boxShadow: '0 0 60px rgba(37,99,235,0.3)',
            letterSpacing: '-0.2px',
          }}>
            sunnyrenosh@gmail.com
          </a>
          <a href="https://linkedin.com/in/renosh-sunny-a69048222" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '18px 48px',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '100px', fontSize: '16px', fontWeight: 400,
            color: 'rgba(255,255,255,0.6)', textDecoration: 'none', width: '100%', maxWidth: '380px',
            letterSpacing: '-0.2px',
          }}>
            LinkedIn: Renosh Sunny
          </a>
        </div>
      </div>
    </main>
  );
}
