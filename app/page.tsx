'use client';

import React from 'react';
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
  ArrowRight,
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { WaitlistForm } from '@/components/product/WaitlistForm';
import { FAQS_DATA } from '@/data/faqs';

/* ------------------------------------------------------------------ */
/* Screenshot placeholder — pass a real `src` once a screenshot is    */
/* ready, e.g. <PhoneMock label="Home" src="/screenshots/home.png" /> */
/* ------------------------------------------------------------------ */
function PhoneMock({ label, src }: { label: string; src?: string }) {
  return (
    <div className="relative w-full max-w-[240px] aspect-[9/19.5] bg-black rounded-[34px] p-2.5 shadow-2xl ring-1 ring-white/10 shrink-0">
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[70px] h-[18px] bg-black rounded-b-2xl z-10" />
      <div className="w-full h-full rounded-[26px] overflow-hidden bg-gradient-to-br from-[#11161D] to-[#07090C]">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={label} className="w-full h-full object-cover" />
        ) : (
          <div className="h-full m-2 flex flex-col items-center justify-center gap-2 text-center px-4 border border-dashed border-black/10 rounded-2xl">
            <Smartphone className="w-5 h-5 text-[#5B6472]" />
            <span className="text-xs font-bold text-[#5B6472]">{label}</span>
            <em className="not-italic text-[10px] text-[#5c5f6c]">drop screenshot here</em>
          </div>
        )}
      </div>
    </div>
  );
}

const appFeatures = [
  {
    icon: <Sliders className="w-5 h-5" />,
    title: 'DIY Practice Engine',
    desc: 'Pick subjects, chapters and topics by hand. Filter by question type with balanced, equal topic distribution.',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: '3D Smart Flashcards',
    desc: 'Interactive flip cards with formula highlights, category badges and full LaTeX math rendering.',
  },
  {
    icon: <Brain className="w-5 h-5" />,
    title: 'AI Doubt Resolution',
    desc: 'Instant, step-by-step doubt explanations around the clock — in English or Hinglish, whichever you think in.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Daily Practice & PYQs',
    desc: 'Topic-wise practice sheets, chapter notes and previous-year questions with worked solutions.',
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: 'Speed & Precision Tracking',
    desc: 'A live question matrix and timer so you learn not just what you got wrong, but how fast you moved.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Smart Revision Engine',
    desc: 'Weak areas are tracked automatically and reorganised into focused revision sets — no manual bookkeeping.',
  },
];

const showcase = [
  {
    title: 'Your syllabus, mapped and tracked',
    desc: 'Every chapter of your NEET or JEE syllabus, broken into topics with clear coverage — so you always know what is left, not just what is done.',
    label: 'Syllabus Tracker',
    src: '/screenshots/syllabus-tracker.png',
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

// Short teaser — the full searchable FAQ lives at /faq
const faqTeaser = FAQS_DATA.slice(0, 4);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans selection:bg-[#00E5FF] selection:text-black">
      <Navbar />

      <main>
        {/* ---------------------------------------------------------- HERO */}
        <section id="about" className="relative pt-40 pb-20 px-4 text-center overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[480px] rounded-full bg-[#00E5FF]/20 blur-[100px]"
          />

          <div className="relative max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
              <Zap className="w-3.5 h-3.5" /> Built for NEET &amp; JEE, not general studying
            </span>

            <h1 className="font-black tracking-tight leading-[1.05] text-4xl sm:text-6xl mb-6 text-[#0B0F14]">
              Prepare smarter.
              <br />
              Practice harder.
              <br />
              <span className="text-[#00E5FF]">Charge your rank.</span>
            </h1>

            <p className="text-[#5B6472] text-base leading-relaxed max-w-xl mx-auto mb-9">
              A pure practice engine that plugs into whatever prep you&apos;re already doing —
              a custom DIY exercise builder, 3D smart flashcards, live speed tracking and an AI
              doubt-resolution assistant that never sleeps.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-[#00E5FF] hover:bg-[#33EBFF] text-[#07090C] font-extrabold text-sm px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(0,229,255,0.35)] transition-all"
              >
                <Smartphone className="w-4 h-4" /> Join the waitlist
              </a>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 border border-black/10 text-[#0B0F14] font-extrabold text-sm px-7 py-3.5 rounded-full hover:border-black/20 transition-colors"
              >
                View batches &amp; fees <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-end gap-4 max-w-3xl mx-auto">
            <div className="hidden sm:block opacity-75 max-w-[200px]">
              <PhoneMock label="Home Dashboard" src="/screenshots/home.png" />
            </div>
            <div className="max-w-[260px] z-10">
              <PhoneMock label="Practice Configurator" src="/screenshots/practice-configurator.png" />
            </div>
            <div className="hidden sm:block opacity-75 max-w-[200px]">
              <PhoneMock label="Smart Flashcards" src="/screenshots/flashcards.png" />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ SHOWCASE */}
        <section id="showcase" className="max-w-5xl mx-auto px-4 py-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="block text-xs font-extrabold uppercase tracking-widest text-[#00E5FF] mb-2">
              Inside the app
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F14]">
              What it actually looks like
            </h2>
          </div>

          <div className="divide-y divide-black/5">
            {showcase.map((row, i) => (
              <div
                key={row.title}
                className={`grid md:grid-cols-2 gap-10 items-center py-11 ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-black text-[#0B0F14] mb-3">{row.title}</h3>
                  <p className="text-sm text-[#5B6472] leading-relaxed max-w-md mx-auto md:mx-0">
                    {row.desc}
                  </p>
                </div>
                <div className="flex justify-center">
                  <PhoneMock label={row.label} src={row.src} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------ FEATURES */}
        <section id="features" className="bg-[#F6F8FA] border-y border-black/10 py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="block text-xs font-extrabold uppercase tracking-widest text-[#00E5FF] mb-2">
                Complete system
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F14]">
                Engineered for score progression
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {appFeatures.map((item) => (
                <div
                  key={item.title}
                  className="bg-white border border-black/10 hover:border-[#00E5FF]/40 rounded-2xl p-6 transition-all hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-[#0B0F14] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#5B6472] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- WAITLIST */}
        <section id="waitlist" className="py-24 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[#00E5FF] px-3.5 py-1.5 rounded-full text-xs font-bold mb-4">
                <Smartphone className="w-3.5 h-3.5" /> Early access
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F14] mb-4">
                Be first on Android
              </h2>
              <p className="text-sm text-[#5B6472] leading-relaxed max-w-md mb-6">
                VoltClass is rolling out on Android in phases. Join the waitlist and we&apos;ll
                email you the moment it&apos;s your turn — no spam, just rank-boosting updates.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B0F14] hover:text-[#00E5FF] transition-colors"
              >
                See batches &amp; fees <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-7">
              <WaitlistForm source="landing_page" />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ FAQ */}
        <section className="max-w-2xl mx-auto px-4 py-24">
          <div className="text-center mb-10">
            <span className="block text-xs font-extrabold uppercase tracking-widest text-[#00E5FF] mb-2">
              Good to know
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0F14]">
              Frequently asked questions
            </h2>
          </div>

          <FAQAccordion items={faqTeaser} />

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00E5FF] hover:text-[#0B0F14] transition-colors"
            >
              View all FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
