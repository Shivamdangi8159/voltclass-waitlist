import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  ListChecks,
  Sliders,
  Timer,
  BarChart3,
  Brain,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: <ListChecks className="w-5 h-5" />,
    title: 'Pick subject, chapter & topic',
    desc: 'Select any combination of chapters from Physics, Chemistry, Biology or Math — down to individual topics, not just whole subjects.',
    points: [
      'Works for any exam: NEET, JEE Main or JEE Advanced',
      'Mix multiple chapters into one practice session',
      'Filter by question type: MCQ, assertion-reason, numerical and more',
    ],
  },
  {
    step: '02',
    icon: <Sliders className="w-5 h-5" />,
    title: 'Let the engine balance your set',
    desc: "Our configurator distributes questions evenly across every topic you've selected, so no single chapter gets over- or under-practiced.",
    points: [
      'Equal topic-distribution algorithm, not random sampling',
      'DIY multi-level exercises — you choose the difficulty',
      'PYQs and previous papers pulled in automatically where relevant',
    ],
  },
  {
    step: '03',
    icon: <Timer className="w-5 h-5" />,
    title: 'Practice under real conditions',
    desc: 'Solve with an actual timer running, full LaTeX-rendered equations, and the same question formats you\'ll see on exam day.',
    points: [
      'Live per-question timing, not just a total clock',
      'Bookmark tricky questions into your mistake notebook',
      '3D Smart Cards for quick concept flips between sets',
    ],
  },
  {
    step: '04',
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'See exactly where you stand',
    desc: "Every attempt feeds a performance dashboard that breaks accuracy and speed down by topic — not just a single overall score.",
    points: [
      'Topic-wise accuracy and speed, side by side',
      'Weak-topic auto-detection, updated after every session',
      'Daily Practice Streak so consistency is visible, not just guessed at',
    ],
  },
  {
    step: '05',
    icon: <Brain className="w-5 h-5" />,
    title: 'Clear doubts without losing momentum',
    desc: 'Stuck on a step mid-practice? Get an instant, step-by-step explanation instead of parking the question for later — and forgetting it.',
    points: [
      'AI-powered doubt support, available inside every exercise',
      'Explanations built for how NEET/JEE questions are actually asked',
      'No jumping between apps or waiting for a forum reply',
    ],
  },
  {
    step: '06',
    icon: <RefreshCw className="w-5 h-5" />,
    title: 'Revise what actually needs revising',
    desc: 'VoltClass turns your weak topics into a focused revision set automatically — so revision time goes where it matters most.',
    points: [
      'Smart Revision pulls directly from your weak-topic list',
      'Quick Notes and Concept Explainers for fast refreshers',
      'The cycle repeats: Learn → Practice → Test → Analyze → Improve',
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-2xl mx-auto px-4 text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <RefreshCw className="w-3.5 h-3.5" /> The system, step by step
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
            How <span className="text-[#2563EB]">VoltClass</span> works
          </h1>
          <p className="text-[#5B6472] text-sm sm:text-base leading-relaxed">
            Not another content library. A closed loop that turns practice into a measurable
            climb toward your rank — six steps, repeated every single day.
          </p>
        </section>

        {/* Steps */}
        <section className="max-w-4xl mx-auto px-4 space-y-5 mb-20">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white border border-black/10 hover:border-[#2563EB]/30 rounded-2xl p-6 sm:p-8 transition-colors"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 shrink-0">
                  <span className="text-3xl font-black text-[#2563EB]/25">{item.step}</span>
                  <div className="w-11 h-11 rounded-xl bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0B0F14] mb-1.5">{item.title}</h3>
                  <p className="text-sm text-[#5B6472] leading-relaxed mb-4">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-[#0B0F14]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Why it works */}
        <section className="max-w-3xl mx-auto px-4 mb-16">
          <div className="bg-[#0B0F14] text-white rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">Why this loop works</h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/80">
              Rank improvement doesn&apos;t come from studying randomly for longer hours. It
              comes from Better Practice + Better Analysis + Better Consistency — and that&apos;s
              exactly what each cycle through VoltClass is designed to build.
            </p>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-sm px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-all"
          >
            See batches &amp; fees <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
