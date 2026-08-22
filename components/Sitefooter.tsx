'use client';

import React from 'react';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="foot">
      <div className="foot-inner">
        <div className="foot-brand">
          <span className="mark">⚡</span>
          <div>
            <span className="name">
              Volt<span className="accent">Class</span>
            </span>
            <span className="tag">Charge Your Rank</span>
          </div>
        </div>

        <nav className="foot-nav">
          <Link href="/#about">About</Link>
          <Link href="/#features">Features</Link>
          <Link href="/batches">Batches &amp; Fees</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <p className="copy">© {new Date().getFullYear()} VoltClass. All rights reserved.</p>
      </div>

      <style jsx>{`
        .foot {
          border-top: 1px solid var(--border-soft);
          background: var(--bg);
          padding: 40px 24px 28px;
        }
        .foot-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .foot-brand { display: flex; align-items: center; gap: 10px; }
        .mark {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: linear-gradient(150deg, var(--accent), #1c2c66);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
        .name {
          display: block;
          font-family: var(--font-display);
          font-size: 15px;
          font-weight: 560;
          color: var(--text);
        }
        .name .accent { color: var(--accent-2); }
        .tag {
          display: block;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-faint);
          margin-top: 2px;
        }
        .foot-nav { display: flex; gap: 22px; flex-wrap: wrap; }
        .foot-nav :global(a) {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--text-dim);
          text-decoration: none;
        }
        .foot-nav :global(a:hover) { color: var(--text); }
        .copy { font-size: 11.5px; color: var(--text-faint); margin: 0; width: 100%; text-align: center; }
        @media (min-width: 700px) {
          .copy { width: auto; text-align: right; }
        }
      `}</style>
    </footer>
  );
}
