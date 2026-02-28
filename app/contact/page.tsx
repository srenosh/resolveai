export default function Contact() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '560px', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Reach Out</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '16px' }}>Let&apos;s Connect</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '48px', fontSize: '17px', fontWeight: 300 }}>
          Open to senior automation roles, AI integration projects, and federal consulting opportunities.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <a href="mailto:sunnyrenosh@gmail.com" style={{
            padding: '14px 32px', backgroundColor: '#2563eb',
            borderRadius: '100px', fontSize: '14px', fontWeight: 500,
            color: 'white', textDecoration: 'none', width: '260px',
            boxShadow: '0 0 40px rgba(37,99,235,0.25)',
          }}>
            sunnyrenosh@gmail.com
          </a>
          <a href="https://linkedin.com/in/renosh-sunny-a69048222" target="_blank" rel="noopener noreferrer" style={{
            padding: '14px 32px',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '100px', fontSize: '14px', fontWeight: 400,
            color: 'rgba(255,255,255,0.5)', textDecoration: 'none', width: '260px',
          }}>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </main>
  );
}
