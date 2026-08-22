'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  Smartphone,
  Sliders,
  Layers,
  Brain,
  FileText,
  BarChart2,
  Sparkles,
  Download,
  ArrowRight,
  ChevronDown,
  Mail,
  Phone,
  MessageSquare,
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

/* ------------------------------------------------------------------ */
/* Screenshot placeholder — swap `src` for a real screenshot whenever  */
/* one is ready. Until then it renders a clean labelled placeholder.   */
/* ------------------------------------------------------------------ */
function PhoneMock({
  label,
  src,
  tilt = 0,
}: {
  label: string;
  src?: string;
  tilt?: number;
}) {
  return (
    <div className="phone" style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="phone-notch" />
      <div className="phone-screen">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={label} />
        ) : (
          <div className="placeholder">
            <Smartphone size={22} />
            <span>{label}</span>
            <em>drop screenshot here</em>
          </div>
        )}
      </div>
      <style jsx>{`
        .phone {
          width: 100%;
          max-width: 240px;
          aspect-ratio: 9 / 19.5;
          background: #05060a;
          border-radius: 34px;
          padding: 10px;
          position: relative;
          box-shadow:
            0 0 0 1px var(--border),
            0 30px 60px -20px rgba(0, 0, 0, 0.6);
          flex-shrink: 0;
        }
        .phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 18px;
          background: #05060a;
          border-radius: 0 0 14px 14px;
          z-index: 2;
        }
        .phone-screen {
          width: 100%;
          height: 100%;
          border-radius: 26px;
          overflow: hidden;
          background: linear-gradient(160deg, #131722, #0a0b10 70%);
        }
        .phone-screen img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .placeholder {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--text-faint);
          text-align: center;
          padding: 20px;
          border: 1px dashed var(--border);
          margin: 8px;
          border-radius: 20px;
        }
        .placeholder span { font-size: 12px; font-weight: 700; color: var(--text-dim); }
        .placeholder em { font-style: normal; font-size: 10px; }
      `}</style>
    </div>
  );
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const appFeatures = [
    {
      icon: <Sliders size={20} />,
      title: 'DIY Practice Engine',
      desc: 'Pick subjects, chapters and topics by hand. Filter by question type with balanced, equal topic distribution.',
    },
    {
      icon: <Layers size={20} />,
      title: '3D Smart Flashcards',
      desc: 'Interactive flip cards with formula highlights, category badges and full LaTeX math rendering.',
    },
    {
      icon: <Brain size={20} />,
      title: 'AI Doubt Resolution',
      desc: 'Instant, step-by-step doubt explanations around the clock — in English or Hinglish, whichever you think in.',
    },
    {
      icon: <FileText size={20} />,
      title: 'Daily Practice & PYQs',
      desc: 'Topic-wise practice sheets, chapter notes and previous-year questions with worked solutions.',
    },
    {
      icon: <BarChart2 size={20} />,
      title: 'Speed & Precision Tracking',
      desc: 'A live question matrix and timer so you learn not just what you got wrong, but how fast you moved.',
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Smart Revision Engine',
      desc: 'Weak areas are tracked automatically and reorganised into focused revision sets — no manual bookkeeping.',
    },
  ];

  const showcase = [
    {
      title: 'Your syllabus, mapped and tracked',
      desc: 'Every chapter of your NEET or JEE syllabus, broken into topics with clear coverage — so you always know what is left, not just what is done.',
      label: 'Syllabus Tracker',
    },
    {
      title: 'Build the exact practice set you need',
      desc: 'Choose exam, subject, chapter and topic, then let the configurator balance the set for you. No repeats, no gaps.',
      label: 'DIY Configurator',
    },
    {
      title: 'A doubt, solved in seconds',
      desc: 'Type or capture a question and get a clean, step-by-step explanation — built for the way JEE and NEET problems are actually asked.',
      label: 'AI Doubt Resolution',
    },
  ];

  const faqs = [
    {
      q: 'What exactly does the VoltClass app do?',
      a: 'VoltClass is a focused practice and revision app for NEET and JEE aspirants — a DIY question configurator, 3D flashcards, daily practice sheets, PYQs and an AI doubt-resolution assistant, all in one place.',
    },
    {
      q: 'Is the content aligned with the latest syllabus?',
      a: 'Yes. Every question, flashcard and revision set is mapped to the current NEET and JEE syllabus, and updated as the syllabus changes.',
    },
    {
      q: 'How do I get the app on my phone?',
      a: 'Use the "Get it on Google Play" or "Direct APK" button in the download section below to install VoltClass on any Android device.',
    },
    {
      q: 'Where can I see batch pricing?',
      a: 'Batch details and pricing live on a dedicated page so this one can stay focused on the app itself — see Batches & Fees in the menu.',
    },
    {
      q: 'What are AI Doubt Tokens?',
      a: 'Every plan includes a monthly allowance of AI tokens. Spend one to capture or type a question and receive an instant, step-by-step explanation.',
    },
  ];

  return (
    <div className="page">
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------- HERO */}
        <section id="about" className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-inner">
            <span className="eyebrow">
              <Zap size={12} /> Built for NEET &amp; JEE, not general studying
            </span>

            <h1>
              Prepare smarter.
              <br />
              Practice harder.
              <br />
              <span className="accent">Charge your rank.</span>
            </h1>

            <p className="lede">
              A pure practice engine that plugs into whatever prep you're already doing —
              a custom DIY exercise builder, 3D smart flashcards, live speed tracking and
              an AI doubt-resolution assistant that never sleeps.
            </p>

            <div className="hero-cta">
              <a href="#download" className="btn-primary">
                <Smartphone size={16} /> Get the app on Android
              </a>
              <Link href="/batches" className="btn-ghost">
                View batches &amp; fees <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="hero-phones">
            <PhoneMock label="Home Dashboard" tilt={-6} />
            <PhoneMock label="Practice Configurator" tilt={0} />
            <PhoneMock label="Smart Flashcards" tilt={6} />
          </div>
        </section>

        {/* ------------------------------------------------------ SHOWCASE */}
        <section id="showcase" className="showcase">
          <div className="section-head">
            <span className="kicker">Inside the app</span>
            <h2>What it actually looks like</h2>
          </div>

          {showcase.map((row, i) => (
            <div className={`show-row ${i % 2 === 1 ? 'reverse' : ''}`} key={row.title}>
              <div className="show-copy">
                <h3>{row.title}</h3>
                <p>{row.desc}</p>
              </div>
              <div className="show-frame">
                <PhoneMock label={row.label} />
              </div>
            </div>
          ))}
        </section>

        {/* ------------------------------------------------------ FEATURES */}
        <section id="features" className="features">
          <div className="section-head">
            <span className="kicker">Complete system</span>
            <h2>Engineered for score progression</h2>
          </div>

          <div className="feature-grid">
            {appFeatures.map((item) => (
              <div className="feature-card" key={item.title}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- DOWNLOAD */}
        <section id="download" className="download">
          <div className="download-inner">
            <div>
              <span className="badge">
                <Smartphone size={12} /> Official Android app
              </span>
              <h2>Practice anywhere on Android</h2>
              <p>
                Take timed mock exercises, flip through 3D smart flashcards and clear doubts
                right from your phone — light enough to run on anything.
              </p>
              <div className="download-btns">
                <button onClick={() => alert('Opening Play Store...')} className="play-btn">
                  <span className="play-icon">▶</span>
                  <span className="play-copy">
                    <em>Get it on</em>
                    Google Play
                  </span>
                </button>
                <button onClick={() => alert('Starting APK download...')} className="apk-btn">
                  <Download size={15} /> Direct APK
                </button>
              </div>
            </div>

            <div className="download-card">
              <div className="download-mark">
                <Zap size={22} fill="currentColor" />
              </div>
              <h4>VoltClass App</h4>
              <p>v2.4.0 · 100% ad-free · 24MB</p>
              <span className="verified">✓ Verified safe</span>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ FAQ */}
        <section className="faq">
          <div className="section-head">
            <span className="kicker">Good to know</span>
            <h2>Frequently asked questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div className={`faq-item ${openFaq === idx ? 'open' : ''}`} key={faq.q}>
                <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown size={16} />
                </button>
                {openFaq === idx && <p>{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* --------------------------------------------------------- CONTACT */}
        <section id="contact" className="contact">
          <div className="contact-inner">
            <div>
              <span className="kicker">24/7 support</span>
              <h2>Get in touch</h2>
              <p>
                Questions about the app, admissions, or payments? Send a message and our team
                will get back to you.
              </p>
              <div className="contact-rows">
                <div className="contact-row">
                  <Mail size={17} />
                  <span>support@voltclass.com</span>
                </div>
                <div className="contact-row">
                  <Phone size={17} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="contact-row">
                  <MessageSquare size={17} />
                  <span>Instant AI doubt tokens, in-app</span>
                </div>
              </div>
            </div>

            <div className="contact-card">
              {contactSubmitted ? (
                <div className="submitted">
                  <div className="check">✓</div>
                  <h3>Message sent</h3>
                  <p>We'll get back to you shortly.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                >
                  <label>
                    Full name
                    <input type="text" required placeholder="Rohan Sharma" />
                  </label>
                  <label>
                    Email address
                    <input type="email" required placeholder="rohan@gmail.com" />
                  </label>
                  <label>
                    Message
                    <textarea rows={3} required placeholder="I have a question about..." />
                  </label>
                  <button type="submit">Send message</button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <style jsx>{`
        .page { background: var(--bg); color: var(--text); }
        .section-head { text-align: center; max-width: 640px; margin: 0 auto 44px; }
        .kicker {
          display: block;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent-2);
          margin-bottom: 10px;
        }
        .section-head h2, .contact h2 {
          font-family: var(--font-display);
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 560;
          letter-spacing: -0.01em;
          margin: 0;
        }

        /* HERO ------------------------------------------------------- */
        .hero {
          position: relative;
          padding: 80px 20px 60px;
          text-align: center;
          overflow: hidden;
        }
        .hero-glow {
          position: absolute;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
          width: 900px;
          height: 500px;
          background: radial-gradient(closest-side, var(--accent-glow), transparent 70%);
          opacity: 0.35;
          filter: blur(10px);
          pointer-events: none;
        }
        .hero-inner { position: relative; max-width: 780px; margin: 0 auto; }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--accent-soft);
          border: 1px solid rgba(91, 134, 255, 0.28);
          color: var(--accent-2);
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 11.5px;
          font-weight: 700;
          margin-bottom: 26px;
        }
        h1 {
          font-family: var(--font-display);
          font-weight: 560;
          font-size: clamp(36px, 7vw, 64px);
          line-height: 1.06;
          letter-spacing: -0.02em;
          margin: 0 0 22px;
          color: var(--text);
        }
        h1 .accent { color: var(--accent-2); font-style: italic; }
        .lede {
          font-size: 16px;
          line-height: 1.65;
          color: var(--text-dim);
          max-width: 560px;
          margin: 0 auto 34px;
        }
        .hero-cta {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }
        .btn-primary, .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 800;
          padding: 14px 24px;
          border-radius: 100px;
          text-decoration: none;
        }
        .btn-primary { background: var(--accent); color: #fff; box-shadow: 0 14px 30px -12px var(--accent-glow); }
        .btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--border); }
        .hero-phones {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 18px;
          max-width: 780px;
          margin: 0 auto;
        }
        .hero-phones :global(.phone:nth-child(2)) { max-width: 260px; z-index: 2; }
        .hero-phones :global(.phone:not(:nth-child(2))) { max-width: 200px; opacity: 0.75; }

        /* SHOWCASE ---------------------------------------------------- */
        .showcase {
          padding: 90px 20px;
          max-width: 1080px;
          margin: 0 auto;
        }
        .show-row {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
          padding: 44px 0;
          border-top: 1px solid var(--border-soft);
        }
        .show-row.reverse { direction: rtl; }
        .show-row.reverse > * { direction: ltr; }
        .show-copy h3 {
          font-family: var(--font-display);
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 560;
          margin: 0 0 12px;
        }
        .show-copy p { font-size: 14.5px; line-height: 1.7; color: var(--text-dim); margin: 0; max-width: 420px; }
        .show-frame { display: flex; justify-content: center; }

        /* FEATURES ------------------------------------------------------ */
        .features { padding: 90px 20px; background: var(--panel); border-top: 1px solid var(--border-soft); border-bottom: 1px solid var(--border-soft); }
        .feature-grid { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; }
        .feature-card { background: var(--panel-2); border: 1px solid var(--border); border-radius: 18px; padding: 26px; transition: border-color 0.25s ease, transform 0.25s ease; }
        .feature-card:hover { border-color: rgba(91,134,255,0.4); transform: translateY(-3px); }
        .feature-icon { width: 42px; height: 42px; border-radius: 12px; background: var(--accent-soft); color: var(--accent-2); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .feature-card h3 { font-size: 15.5px; font-weight: 800; margin: 0 0 8px; color: var(--text); }
        .feature-card p { font-size: 13px; line-height: 1.6; color: var(--text-dim); margin: 0; }

        /* DOWNLOAD -------------------------------------------------- */
        .download { padding: 90px 20px; }
        .download-inner { max-width: 980px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: center; }
        .badge { display: inline-flex; align-items: center; gap: 6px; background: var(--accent-soft); color: var(--accent-2); padding: 5px 13px; border-radius: 100px; font-size: 10.5px; font-weight: 800; margin-bottom: 14px; }
        .download h2 { font-family: var(--font-display); font-size: clamp(26px,3.6vw,36px); font-weight: 560; margin: 0 0 14px; }
        .download p { color: var(--text-dim); font-size: 14px; line-height: 1.65; margin: 0 0 26px; max-width: 420px; }
        .download-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .play-btn { background: var(--text); border: none; padding: 11px 20px; border-radius: 14px; color: #0a0b0e; display: flex; align-items: center; gap: 10px; cursor: pointer; }
        .play-icon { font-size: 18px; }
        .play-copy { display: flex; flex-direction: column; text-align: left; font-weight: 800; font-size: 13.5px; }
        .play-copy em { font-style: normal; font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.6; }
        .apk-btn { background: transparent; border: 1px solid var(--border); padding: 11px 20px; border-radius: 14px; color: var(--text); font-weight: 800; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .download-card { background: var(--panel-2); border: 1px solid var(--border); border-radius: 20px; padding: 30px; text-align: center; }
        .download-mark { width: 48px; height: 48px; border-radius: 14px; background: var(--accent-soft); color: var(--accent-2); display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; }
        .download-card h4 { font-size: 16px; font-weight: 800; margin: 0 0 4px; }
        .download-card p { font-size: 11.5px; color: var(--text-dim); margin: 0 0 14px; }
        .verified { color: #6fcf97; font-size: 11px; font-weight: 800; background: rgba(111,207,151,0.12); padding: 5px 14px; border-radius: 16px; }

        /* FAQ ---------------------------------------------------------- */
        .faq { padding: 90px 20px; max-width: 720px; margin: 0 auto; }
        .faq-list { display: flex; flex-direction: column; gap: 10px; }
        .faq-item { background: var(--panel-2); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
        .faq-item button { width: 100%; padding: 18px 20px; display: flex; align-items: center; justify-content: space-between; background: none; border: none; cursor: pointer; font-weight: 700; font-size: 14px; color: var(--text); text-align: left; }
        .faq-item :global(svg) { color: var(--text-faint); flex-shrink: 0; transition: transform 0.2s ease; }
        .faq-item.open :global(svg) { transform: rotate(180deg); color: var(--accent-2); }
        .faq-item p { margin: 0; padding: 0 20px 18px; font-size: 13.5px; line-height: 1.65; color: var(--text-dim); }

        /* CONTACT ---------------------------------------------------- */
        .contact { padding: 90px 20px; background: var(--panel); border-top: 1px solid var(--border-soft); }
        .contact-inner { max-width: 980px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
        .contact h2 { text-align: left; margin: 6px 0 14px; }
        .contact-inner > div:first-child p { color: var(--text-dim); font-size: 13.5px; line-height: 1.65; margin: 0 0 24px; max-width: 400px; }
        .contact-rows { display: flex; flex-direction: column; gap: 12px; }
        .contact-row { display: flex; align-items: center; gap: 12px; background: var(--panel-2); border: 1px solid var(--border); padding: 13px 16px; border-radius: 12px; font-size: 13px; font-weight: 600; }
        .contact-row :global(svg) { color: var(--accent-2); flex-shrink: 0; }
        .contact-card { background: var(--panel-2); border: 1px solid var(--border); border-radius: 20px; padding: 26px; }
        .contact-card form { display: flex; flex-direction: column; gap: 14px; }
        .contact-card label { display: flex; flex-direction: column; gap: 6px; font-size: 10.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-faint); }
        .contact-card input, .contact-card textarea {
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 13px;
          color: var(--text);
          font-family: var(--font-body);
          outline: none;
          resize: none;
        }
        .contact-card input:focus, .contact-card textarea:focus { border-color: var(--accent); }
        .contact-card button { background: var(--accent); color: #fff; border: none; padding: 13px; border-radius: 10px; font-weight: 800; font-size: 13px; cursor: pointer; margin-top: 4px; }
        .submitted { text-align: center; padding: 30px 0; }
        .submitted .check { width: 42px; height: 42px; border-radius: 50%; background: rgba(111,207,151,0.14); color: #6fcf97; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; font-weight: 900; }
        .submitted h3 { font-size: 16px; margin: 0 0 4px; }
        .submitted p { font-size: 12.5px; color: var(--text-dim); margin: 0; }

        @media (max-width: 760px) {
          .show-row, .show-row.reverse { grid-template-columns: 1fr; direction: ltr; text-align: center; }
          .show-copy p { margin: 0 auto; }
          .hero-phones { gap: 10px; }
          .contact h2 { text-align: center; }
        }
      `}</style>
    </div>
  );
}
