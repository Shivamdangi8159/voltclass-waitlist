import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Target,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  TrendingUp,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

const cycle = [
  { icon: <BookOpen className="w-4 h-4" />, label: 'Learn' },
  { icon: <ClipboardCheck className="w-4 h-4" />, label: 'Practice' },
  { icon: <Target className="w-4 h-4" />, label: 'Test' },
  { icon: <BarChart3 className="w-4 h-4" />, label: 'Analyze' },
  { icon: <TrendingUp className="w-4 h-4" />, label: 'Improve' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Repeat' },
];

const toolkit = [
  'Daily Notes',
  'Daily Practice Sheets',
  'Weekly Test Papers',
  'Previous-Year Questions',
  'Customized Test Papers',
  'DIY Multi-Level Exercises',
  'Concept Booster Exercises',
  'Intensive Exercises',
  'Quick Notes',
  'Concept Explainers',
  '3D Smart Cards',
  'AI-powered Doubt Support',
  'Daily Performance Analytics',
  'Speed & Accuracy Tracking',
  'Weak-Topic Detection',
  'Smart Revision',
  'Full Performance Dashboard',
  'And 30+ smart features',
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 text-center mb-20">
          <span className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" /> About VoltClass
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Preparation should be <span className="text-[#2563EB]">measurable.</span>
          </h1>
          <p className="text-[#5B6472] text-base leading-relaxed">
            Most students already have access to books, lectures, notes and test series. The
            problem is rarely a lack of study material — it&apos;s knowing what to practice, how
            much to practice, where mistakes are happening, and what needs to improve next.
            VoltClass is built to solve exactly that problem.
          </p>
        </section>

        {/* What we are */}
        <section className="max-w-3xl mx-auto px-4 mb-20">
          <div className="bg-[#F6F8FA] border border-black/10 rounded-2xl p-7 sm:p-9">
            <p className="text-sm sm:text-base leading-relaxed text-[#0B0F14]">
              We&apos;re building a performance-focused practice and revision platform
              specifically for NEET and JEE aspirants. Instead of simply handing students more
              content, VoltClass helps them run a structured cycle — over and over, until it
              becomes habit.
            </p>
          </div>
        </section>

        {/* The cycle */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <h2 className="text-center text-xs font-extrabold uppercase tracking-widest text-[#2563EB] mb-8">
            The VoltClass cycle
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {cycle.map((step, i) => (
              <React.Fragment key={step.label}>
                <div className="flex items-center gap-2 bg-white border border-black/10 rounded-full px-4 py-2.5 shadow-sm">
                  <span className="text-[#2563EB]">{step.icon}</span>
                  <span className="text-xs font-bold text-[#0B0F14]">{step.label}</span>
                </div>
                {i < cycle.length - 1 && (
                  <span className="text-[#5B6472] text-sm select-none">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* What VoltClass provides */}
        <section className="max-w-4xl mx-auto px-4 mb-20">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-3">What VoltClass provides</h2>
            <p className="text-sm text-[#5B6472] leading-relaxed">
              A growing ecosystem of smart learning and performance tools — designed to work
              alongside the resources you already use, not replace them.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {toolkit.map((item) => (
              <span
                key={item}
                className="text-xs font-semibold text-[#0B0F14] bg-black/5 border border-black/10 px-3.5 py-2 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <div className="bg-[#0B0F14] text-white rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">Our philosophy</h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/80 mb-5">
              We believe rank improvement isn&apos;t created by studying randomly for longer
              hours. It comes from:
            </p>
            <p className="text-lg sm:text-xl font-bold text-[#60A5FA] mb-5">
              Better Practice + Better Analysis + Better Consistency
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              VoltClass is being built to make that process easier for serious aspirants.
            </p>
          </div>
        </section>

        <p className="text-center text-sm font-bold text-[#2563EB] tracking-wide">
          VoltClass — Charge Your Rank ⚡
        </p>
      </main>

      <Footer />
    </div>
  );
}
