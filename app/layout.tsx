import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ResolveAI",
  description: "Federal automation and intelligent document processing solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white antialiased">
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 48px',
          backgroundColor: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <a href="/" style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.3px', color: 'white', textDecoration: 'none' }}>
            ResolveAI
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: 'About', href: '/about' },
            ].map(link => (
              <a key={link.href} href={link.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
                {link.label}
              </a>
            ))}
            <a href="/contact" style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              padding: '8px 18px',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
            }}>
              Contact
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
