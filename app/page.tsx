export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', overflowX: 'hidden' }}>

      {/* Hero */}
      <section style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 24px',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          marginBottom: '32px', padding: '6px 18px',
          borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '11px', color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.2em', textTransform: 'uppercase',
        }}>
          Federal AI Automation
        </div>
        <h1 style={{
          fontSize: 'clamp(40px, 8vw, 88px)',
          fontWeight: 600, letterSpacing: '-2px',
          lineHeight: 1.05, maxWidth: '900px', marginBottom: '28px',
        }}>
          Automating the Future<br />
          <span style={{
            backgroundImage: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            of Federal Operations
          </span>
        </h1>
        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.35)',
          maxWidth: '480px', marginBottom: '48px', lineHeight: 1.7, fontWeight: 300,
          padding: '0 8px',
        }}>
          Intelligent document processing and RPA solutions built for mission-critical federal environments.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', padding: '0 16px' }}>
          <a href="/projects" style={{
            padding: '14px 32px', backgroundColor: '#2563eb',
            borderRadius: '100px', fontSize: '14px', fontWeight: 500,
            color: 'white', textDecoration: 'none',
            boxShadow: '0 0 40px rgba(37,99,235,0.25)',
          }}>
            View Projects
          </a>
          <a href="/contact" style={{
            padding: '14px 32px', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '100px', fontSize: '14px', fontWeight: 400,
            color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
          }}>
            Get in Touch
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '80px 24px' }}>
        <div className="stats-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { value: "400K+", label: "Documents Processed Annually" },
            { value: "98%", label: "Job Completion Rate" },
            { value: "75%", label: "Reduction in Manual Effort" },
            { value: "94%", label: "Extraction Confidence" },
          ].map((stat, i) => (
            <div key={stat.label} className={i < 3 ? 'stats-grid-item-border' : ''} style={{
              textAlign: 'center', padding: '32px 16px',
            }}>
              <div style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 600, color: '#60a5fa', marginBottom: '10px', letterSpacing: '-1px' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', lineHeight: 1.5 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Featured Project</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '20px' }}>
            Navy FITREP Evaluation Automation
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, fontSize: '16px', maxWidth: '600px', marginBottom: '32px' }}>
            End-to-end intelligent document processing pipeline for U.S. Navy military evaluation packages, processing 400,000+ documents annually with 92% straight-through processing and zero document loss.
          </p>
          <a href="/projects" style={{ color: '#60a5fa', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
            View full case study →
          </a>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Expertise</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '56px' }}>Core Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { title: "Intelligent Document Processing", desc: "ML Extractor, Regex, Document Understanding, Form Extractor, and Taxonomy design for complex federal document workflows." },
              { title: "RPA Architecture", desc: "Dispatcher–Performer REFramework, Orchestrator queue management, Action Center human-in-the-loop validation and exception handling." },
              { title: "Federal & DOD Experience", desc: "Proven delivery for DLA, U.S. Navy, and DOD environments. Security-conscious design with mission-critical reliability standards." },
            ].map(cap => (
              <div key={cap.title} style={{
                padding: '32px', borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.07)',
                backgroundColor: 'rgba(255,255,255,0.02)',
              }}>
                <h3 style={{ fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.8)', marginBottom: '12px' }}>{cap.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certs */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {[
            "UiPath Automation Developer Professional",
            "UiPath Business Analyst Professional",
            "SAP S/4HANA Certified",
            "BS Information Technology, WGU 2026",
          ].map((cert) => (
            <span key={cert} style={{
              padding: '8px 18px', borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.07)',
              fontSize: '12px', color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.03em',
            }}>
              {cert}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 24px' }}>
        <div className="footer-inner">
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.15)' }}>© 2025 ResolveAI</span>
          <div style={{ display: 'flex', gap: '32px' }}>
            {[['Projects', '/projects'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
              <a key={href} href={href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
