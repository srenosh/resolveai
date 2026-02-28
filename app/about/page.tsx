export default function About() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pb-24 px-6" style={{ paddingTop: '120px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Background</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '56px' }}>About</h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '72px' }}>
          {[
            "I'm Renosh Sunny — an RPA developer and automation architect specializing in intelligent document processing for federal clients. I combine four years of U.S. Army leadership with hands-on expertise in UiPath, SAP, and AI-augmented automation pipelines.",
            "My work focuses on building systems that don't just automate tasks — they classify, validate, extract, and route data with enterprise-grade reliability. My flagship project processes 400,000+ military evaluation documents annually for the U.S. Navy, achieving a 98% job completion rate.",
            "I'm not just keeping pace with AI — I'm building the infrastructure it runs on. Every system I design includes an AI evolution path: human-in-the-loop feedback loops, structured logs for ML retraining, and foundations for AI-assisted decision routing.",
          ].map((text, i) => (
            <p key={i} style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 300 }}>{text}</p>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)', marginBottom: '32px' }}>Certifications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { title: "UiPath Certified Automation Developer Professional", year: "2025" },
              { title: "UiPath Certified Automation Business Analyst Professional", year: "2025" },
              { title: "SAP Certified: TS410 Business Integration with SAP S/4HANA", year: "2024" },
              { title: "BS Information Technology — Western Governors University", year: "Expected 2026" },
            ].map(cert => (
              <div key={cert.title} className="cert-row">
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px' }}>{cert.title}</span>
                <span className="cert-year" style={{ color: 'rgba(255,255,255,0.2)', fontSize: '12px', marginLeft: '32px', flexShrink: 0 }}>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
