'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">ResolveAI</Link>

          {/* Desktop links */}
          <div className="nav-links">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`nav-page-link${pathname === l.href ? ' nav-active' : ''}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta">Contact</Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`ham-line${open ? ' open' : ''}`} />
            <span className={`ham-line mid${open ? ' open' : ''}`} />
            <span className={`ham-line${open ? ' open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`mobile-nav-link${pathname === l.href ? ' mobile-active' : ''}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="mobile-nav-cta">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
