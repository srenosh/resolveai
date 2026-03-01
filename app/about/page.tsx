import Link from "next/link";

export default function About() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', padding: 'clamp(100px, 15vw, 140px) 24px 96px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Background</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '48px' }}>About</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '64px' }}>
          {[
            "I'm Renosh Sunny, an RPA developer and automation architect specializing in intelligent document processing for federal clients. I combine four years of U.S. Army leadership with hands-on expertise in UiPath, SAP, and AI-augmented automation pipelines.",
            "My work focuses on building systems that don't just automate tasks. They classify, validate, extract, and route data with enterprise-grade reliability. My flagship project processes 400,000+ military evaluation documents annually for the U.S. Navy, achieving a 98% job completion rate.",
            "I'm not just keeping pace with AI — I'm building the infrastructure it runs on. Every system I design includes an AI evolution path: human-in-the-loop feedback loops, structured logs for ML retraining, and foundations for AI-assisted decision routing.",
          ].map((text, i) => (
            <p key={i} style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontSize: 'clamp(15px, 2vw, 17px)', fontWeight: 300 }}>{text}</p>
          ))}
        </div>

        {/* Certifications */}
        <div style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', marginBottom: '28px' }}>Certifications</h2>
          <div>
            {[
              { title: "UiPath Certified Automation Developer Professional", year: "2025" },
              { title: "UiPath Certified Automation Business Analyst Professional", year: "2025" },
              { title: "SAP Certified: TS410 Business Integration with SAP S/4HANA", year: "2024" },
              { title: "BS Information Technology, Western Governors University", year: "Expected 2026" },
            ].map(cert => (
              <div key={cert.title} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                padding: '18px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                gap: '16px',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.5 }}>{cert.title}</span>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', flexShrink: 0, paddingTop: '3px' }}>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/projects" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '13px 28px', backgroundColor: '#2563eb',
            borderRadius: '100px', fontSize: '14px', fontWeight: 500, color: 'white',
            minHeight: '48px',
          }}>
            View Projects
          </Link>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            padding: '13px 28px', border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '100px', fontSize: '14px', color: 'rgba(255,255,255,0.5)',
            minHeight: '48px',
          }}>
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
