export default function Contact() {
  const user = "sunnyrenosh";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 64px' }}>
      <div style={{ width: '100%', maxWidth: '560px' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '14px', textAlign: 'center' }}>Reach Out</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '14px', textAlign: 'center' }}>Let&apos;s Connect</h1>
        <p style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginBottom: '48px', fontSize: '16px', fontWeight: 300, textAlign: 'center' }}>
          Open to senior automation roles, AI integration projects, and federal consulting opportunities.
        </p>

        {/* Quick links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
          <a href={`mailto:${email}`} className="contact-btn" style={{
            backgroundColor: '#2563eb', color: 'white',
            boxShadow: '0 0 48px rgba(37,99,235,0.25)',
          }}>
            ✉ {email}
          </a>
          <a
            href="https://linkedin.com/in/renosh-sunny-a69048222"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.6)',
              backgroundColor: 'transparent',
            }}
          >
            LinkedIn — Renosh Sunny
          </a>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}>OR SEND A MESSAGE</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.06)' }} />
        </div>

        {/* Contact form */}
        <form
          action={`mailto:${email}`}
          method="GET"
          style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <input
              type="text" name="name" placeholder="Your name" required
              style={inputStyle}
            />
            <input
              type="email" name="email" placeholder="Your email" required
              style={inputStyle}
            />
          </div>
          <input
            type="text" name="subject" placeholder="Subject"
            style={inputStyle}
          />
          <textarea
            name="body" placeholder="Your message..." rows={5} required
            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          />
          <button type="submit" className="contact-btn" style={{
            backgroundColor: '#2563eb', color: 'white', width: '100%', maxWidth: '100%',
            marginTop: '4px', fontSize: '15px', fontWeight: 500,
          }}>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 18px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  color: 'white',
  fontSize: '14px',
  outline: 'none',
  fontFamily: 'inherit',
};
