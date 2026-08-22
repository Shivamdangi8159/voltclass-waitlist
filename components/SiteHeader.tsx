'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Inside the App', href: '/#showcase' },
  { label: 'Features', href: '/#features' },
  { label: 'Batches & Fees', href: '/batches' },
  { label: 'Contact', href: '/#contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      {/* Global tokens + fonts — declared once, safe to duplicate across pages */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340;9..144,440;9..144,560;9..144,680;9..144,860&family=Manrope:wght@400;500;600;700;800&display=swap');

        :root {
          --bg: #08090c;
          --panel: #101218;
          --panel-2: #15171f;
          --border: rgba(255, 255, 255, 0.09);
          --border-soft: rgba(255, 255, 255, 0.05);
          --text: #f3f3f0;
          --text-dim: #999cab;
          --text-faint: #5c5f6c;
          --accent: #5b86ff;
          --accent-2: #8fb0ff;
          --accent-soft: rgba(91, 134, 255, 0.12);
          --accent-glow: rgba(91, 134, 255, 0.38);
          --font-display: 'Fraunces', Georgia, serif;
          --font-body: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        html, body { max-width: 100vw; overflow-x: hidden; }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          -webkit-font-smoothing: antialiased;
        }
        ::selection { background: var(--accent); color: #fff; }
      `}</style>

      <header
        className={`shell ${scrolled ? 'is-scrolled' : ''}`}
        style={{ position: 'sticky', top: 0, zIndex: 100 }}
      >
        <div className="bar">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="mark">⚡</span>
            <span className="word">
              Volt<span className="accent">Class</span>
              <em>Charge Your Rank</em>
            </span>
          </Link>

          <nav className="nav">
            {NAV_LINKS.map((l) => (
              <Link key={l.label} href={l.href} className="navlink">
                {l.label}
              </Link>
            ))}
          </nav>

          <Link href="/#download" className="cta">
            Get the App <ArrowUpRight size={14} />
          </Link>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="hamburger"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div className={`overlay ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`sidebar ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="sidebar-top">
          <span className="sidebar-brand">
            Volt<span className="accent">Class</span>
          </span>
          <button aria-label="Close menu" onClick={() => setOpen(false)} className="close-btn">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="sidebar-link"
              style={{ transitionDelay: open ? `${i * 40 + 60}ms` : '0ms' }}
            >
              <span>{l.label}</span>
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>

        <Link href="/#download" onClick={() => setOpen(false)} className="sidebar-cta">
          Get the App <ArrowUpRight size={15} />
        </Link>
        <p className="sidebar-foot">100% Ad-Free · Built for JEE &amp; NEET</p>
      </aside>

      <style jsx>{`
        .shell {
          background: rgba(8, 9, 12, 0.7);
          border-bottom: 1px solid transparent;
          backdrop-filter: blur(16px) saturate(140%);
          -webkit-backdrop-filter: blur(16px) saturate(140%);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .shell.is-scrolled {
          background: rgba(8, 9, 12, 0.86);
          border-bottom-color: var(--border-soft);
        }
        .bar {
          max-width: 1180px;
          margin: 0 auto;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-right: auto;
          min-width: 0;
        }
        .mark {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: linear-gradient(150deg, var(--accent), #1c2c66);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          box-shadow: 0 0 0 1px var(--border-soft), 0 6px 18px -6px var(--accent-glow);
        }
        .word {
          display: flex;
          flex-direction: column;
          line-height: 1;
          font-family: var(--font-display);
          font-weight: 560;
          font-size: 18px;
          color: var(--text);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }
        .word .accent { color: var(--accent-2); }
        .word em {
          font-style: normal;
          font-family: var(--font-body);
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-faint);
          margin-top: 4px;
        }
        .nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .navlink {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dim);
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s ease;
        }
        .navlink:hover { color: var(--text); }
        .cta {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--text);
          color: #0a0b0e;
          font-size: 12.5px;
          font-weight: 800;
          padding: 10px 16px;
          border-radius: 100px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cta:hover { transform: translateY(-1px); box-shadow: 0 10px 24px -10px rgba(255,255,255,0.35); }
        .hamburger {
          display: none;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--panel);
          border: 1px solid var(--border);
          color: var(--text);
          cursor: pointer;
        }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 5, 7, 0.6);
          backdrop-filter: blur(2px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 150;
        }
        .overlay.show { opacity: 1; pointer-events: auto; }

        .sidebar {
          position: fixed;
          top: 0;
          right: 0;
          height: 100dvh;
          width: min(88vw, 340px);
          background: var(--panel);
          border-left: 1px solid var(--border);
          z-index: 200;
          display: flex;
          flex-direction: column;
          padding: 20px 22px 26px;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sidebar.open { transform: translateX(0); }
        .sidebar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .sidebar-brand {
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 560;
          color: var(--text);
        }
        .sidebar-brand .accent { color: var(--accent-2); }
        .close-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--panel-2);
          border: 1px solid var(--border);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 4px;
          border-bottom: 1px solid var(--border-soft);
          text-decoration: none;
          color: var(--text);
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 440;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease, transform 0.35s ease, color 0.2s ease;
        }
        .sidebar.open .sidebar-link { opacity: 1; transform: translateY(0); }
        .sidebar-link :global(svg) { color: var(--text-faint); }
        .sidebar-link:hover { color: var(--accent-2); }
        .sidebar-cta {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--accent);
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          padding: 15px;
          border-radius: 14px;
          text-decoration: none;
        }
        .sidebar-foot {
          text-align: center;
          font-size: 10.5px;
          color: var(--text-faint);
          margin: 12px 0 0;
        }

        @media (max-width: 900px) {
          .nav, .cta { display: none; }
          .hamburger { display: flex; }
          .bar { padding: 12px 18px; }
        }
      `}</style>
    </>
  );
}
