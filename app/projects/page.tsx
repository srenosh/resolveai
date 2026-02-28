export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6">
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Work</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 600, letterSpacing: '-1px', marginBottom: '64px' }}>Projects</h1>

        {/* Navy Project */}
        <div style={{
          marginBottom: '48px',
          padding: 'clamp(32px, 4vw, 56px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          backgroundColor: 'rgba(255,255,255,0.015)',
          width: '100%',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {["UiPath", "REFramework", "Document Understanding", "AI/ML", "Federal"].map(tag => (
              <span key={tag} style={{ padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(59,130,246,0.25)', color: 'rgba(96,165,250,0.8)', fontSize: '12px' }}>{tag}</span>
            ))}
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '16px' }}>
            Navy FITREP Military Evaluation Automation
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: '40px', fontSize: '16px', maxWidth: '780px' }}>
            Architected and delivered an end-to-end intelligent document processing pipeline for U.S. Navy FITREP evaluation packages — automating intake, classification, extraction, validation, and structured routing of 400,000+ documents annually with zero document loss tolerance.
          </p>

          <div className="stats-grid" style={{ gap: '16px', marginBottom: '40px', padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            {[
              { value: "400K+", label: "Docs / Year" },
              { value: "98%", label: "Job Completion" },
              { value: "94%", label: "Extraction Confidence" },
              { value: "75%", label: "Less Manual Work" },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 600, color: '#60a5fa', marginBottom: '6px' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.05em' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>Architecture</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {["Dispatcher–Performer REFramework", "Orchestrator Queue-based processing", "Action Center human-in-the-loop validation", "External API validation layer", "Row and queue-level retry logic"].map(item => (
                  <li key={item} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', paddingLeft: '14px', borderLeft: '1px solid rgba(59,130,246,0.2)' }}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', marginBottom: '16px' }}>Key Results</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {["95% document classification accuracy", "ML + Regex extractor for SSN, Name, Dates", "Mandatory-field detection preventing doc loss", "Summary group batching for multi-form packets", "AI evolution path designed for ML retraining"].map(item => (
                  <li key={item} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', paddingLeft: '14px', borderLeft: '1px solid rgba(59,130,246,0.2)' }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* IRS Project */}
        <div style={{
          marginBottom: '48px',
          padding: 'clamp(32px, 4vw, 56px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          backgroundColor: 'rgba(255,255,255,0.015)',
          width: '100%',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {["UiPath", "Document Understanding", "Taxonomy", "Form Extractor"].map(tag => (
              <span key={tag} style={{ padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(59,130,246,0.25)', color: 'rgba(96,165,250,0.8)', fontSize: '12px' }}>{tag}</span>
            ))}
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '16px' }}>
            IRS Form Extractor
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, fontSize: '16px', maxWidth: '780px' }}>
            Configured a UiPath Document Understanding pipeline including form extractor and taxonomy for 5 IRS document types. Mapped and validated structured fields across multiple IRS document templates for automated data extraction.
          </p>
        </div>

        {/* DLA Project */}
        <div style={{
          padding: 'clamp(32px, 4vw, 56px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          backgroundColor: 'rgba(255,255,255,0.015)',
          width: '100%',
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
            {["UiPath", "SAP EWM/TM", "Test Suite", "DOD"].map(tag => (
              <span key={tag} style={{ padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(59,130,246,0.25)', color: 'rgba(96,165,250,0.8)', fontSize: '12px' }}>{tag}</span>
            ))}
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '16px' }}>
            Defense Logistics Agency — SAP Automated Testing
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, fontSize: '16px', maxWidth: '780px' }}>
            Delivered 150+ SAP EWM/TM automated test scripts for DLA within 3 months as part of the agency&apos;s automated testing initiative. Conducted business analysis to identify automation opportunities across the professional services business unit.
          </p>
        </div>
      </div>
    </main>
  );
}
