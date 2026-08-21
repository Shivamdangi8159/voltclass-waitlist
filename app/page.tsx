'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DashboardMockup } from '@/components/product/DashboardMockup';
import { CourseCard } from '@/components/ui/CourseCard';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { WaitlistForm } from '@/components/product/WaitlistForm';
import { COURSES_DATA } from '@/data/courses';
import { FAQS_DATA } from '@/data/faqs';
import {
  Zap,
  ArrowRight,
  X,
  Sliders,
  Layers,
  Brain,
} from 'lucide-react';

export default function HomePage() {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090C] text-[#F5F7FA] font-sans selection:bg-[#00E5FF] selection:text-black">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#00E5FF] mb-6 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
              <Zap className="w-3.5 h-3.5" />
              <span>NEET & JEE Performance Practice Engine</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Prepare Smarter. Practice Harder.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00A3FF] to-white">
                Charge Your Rank.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#9AA4B2] leading-relaxed mb-8">
              A pure-practice engine that plugs into your existing prep and forces your score upward. No lectures. No fluff. Only performance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setWaitlistModalOpen(true)}
                className="w-full sm:w-auto bg-[#00E5FF] text-[#07090C] font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:bg-[#33EBFF] transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/courses"
                className="w-full sm:w-auto bg-[#11161D] text-white hover:text-[#00E5FF] border border-white/10 hover:border-white/20 font-bold text-sm px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Explore Batches
              </Link>
            </div>
          </div>

          {/* Interactive Mockup */}
          <div className="max-w-4xl mx-auto">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* ================= EARLY ACCESS FORM STRIP ================= */}
      <section className="py-16 bg-[#0D1117] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider block mb-2">
                Join Serious Aspirants
              </span>
              <h2 className="text-2xl font-black text-white mb-3">
                Built for Students Serious About Rank Improvement.
              </h2>
              <p className="text-xs text-[#9AA4B2] leading-relaxed">
                Sign up for early access to unlock custom DIY question sets, smart 3D flashcards, and instant AI doubt explanations.
              </p>
            </div>
            <div className="bg-[#11161D] border border-white/10 p-6 rounded-2xl shadow-xl">
              <WaitlistForm source="homepage_inline" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM VS SOLUTION ================= */}
      <section className="py-20 bg-[#07090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Most students don't have a knowledge problem.{' '}
              <span className="text-[#00E5FF]">They have a practice problem.</span>
            </h2>
            <p className="text-sm text-[#9AA4B2]">
              Traditional coaching delivers endless lectures, but competitive exams evaluate speed, precision, and error control under time pressure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Prep Flaws */}
            <div className="bg-[#11161D]/50 border border-rose-500/20 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-rose-400 mb-4 flex items-center gap-2">
                <span>⚠️</span> Traditional Preparation Flaws
              </h3>
              <ul className="space-y-3 text-sm text-[#9AA4B2]">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Unstructured, random question picking leading to repeated easy practice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>Ignoring weak topics because test feedback is vague or delayed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">•</span>
                  <span>No live analytics tracking topic-wise accuracy or question solve velocity.</span>
                </li>
              </ul>
            </div>

            {/* The VoltClass System */}
            <div className="bg-[#11161D] border border-[#00E5FF]/30 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,229,255,0.08)]">
              <h3 className="text-lg font-bold text-[#00E5FF] mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#00E5FF]" /> The VoltClass Performance System
              </h3>
              <ul className="space-y-3 text-sm text-[#F5F7FA]">
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5FF] font-bold">✓</span>
                  <span>DIY Practice Engine with equal question balance across all chosen topics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5FF] font-bold">✓</span>
                  <span>Smart 3D Flashcards for rapid concept revision straight from private storage buckets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00E5FF] font-bold">✓</span>
                  <span>Instant AI doubt answers and LaTeX math rendering for step-by-step solutions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURE HIGHLIGHTS ================= */}
      <section className="py-20 bg-[#0D1117] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-3">
              A Performance System Built for Serious Preparation
            </h2>
            <p className="text-sm text-[#9AA4B2]">
              Every tool gives you measurable feedback and actionable daily targets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 hover:border-[#00E5FF]/40 transition-all">
              <Sliders className="w-8 h-8 text-[#00E5FF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">DIY Exercise Configurator</h3>
              <p className="text-xs text-[#9AA4B2] leading-relaxed">
                Select subjects, multi-select chapters & topics, filter by question type (Numerical, Assertion-Reason, Match Column), and set custom question limits.
              </p>
            </div>

            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 hover:border-[#00E5FF]/40 transition-all">
              <Layers className="w-8 h-8 text-[#00E5FF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Smart Flashcards (3D)</h3>
              <p className="text-xs text-[#9AA4B2] leading-relaxed">
                3D flip cards with formula highlights, category badges, and LaTeX equation rendering for quick concept recall.
              </p>
            </div>

            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 hover:border-[#00E5FF]/40 transition-all">
              <Brain className="w-8 h-8 text-[#00E5FF] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">DeepSeek AI Revision</h3>
              <p className="text-xs text-[#9AA4B2] leading-relaxed">
                High-yield revision summaries and 24/7 doubt resolution with bilingual support (100% formal English or Romanized Hinglish).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES SHOWCASE ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-xs font-bold text-[#00E5FF] tracking-wider uppercase block mb-2">
              Structured Programs
            </span>
            <h2 className="text-3xl font-black text-white">Targeted Prep Batches</h2>
          </div>
          <Link href="/courses" className="text-xs font-bold text-[#00E5FF] hover:underline">
            View All Batches →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {COURSES_DATA.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-[#0D1117] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-xs text-[#9AA4B2] text-center mb-10">
            Everything you need to know about VoltClass features and enrollment.
          </p>
          <FAQAccordion items={FAQS_DATA} />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-gradient-to-b from-[#0D1117] to-[#07090C] border-t border-white/10 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Your preparation deserves a system.
          </h2>
          <p className="text-base text-[#9AA4B2] mb-8 max-w-xl mx-auto">
            Practice with purpose. Measure your real performance. Keep improving every single day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setWaitlistModalOpen(true)}
              className="bg-[#00E5FF] text-[#07090C] font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-[0_0_25px_rgba(0,229,255,0.35)] hover:bg-[#33EBFF] transition-all"
            >
              Get Early Access
            </button>
            <Link
              href="/courses"
              className="bg-white/10 text-white font-bold text-sm px-8 py-3.5 rounded-xl border border-white/10 hover:bg-white/20 transition-all"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Waitlist Modal */}
      {waitlistModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1117] border border-white/15 rounded-2xl p-6 max-w-md w-full relative animate-in zoom-in-95 shadow-2xl">
            <button
              onClick={() => setWaitlistModalOpen(false)}
              className="absolute top-4 right-4 text-[#9AA4B2] hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⚡</span>
              <h3 className="text-lg font-bold text-white">VoltClass Early Access</h3>
            </div>
            <WaitlistForm
              source="hero_modal"
              onSuccess={() => setTimeout(() => setWaitlistModalOpen(false), 2500)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
