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
import { Zap, ArrowRight, X, Sparkles, Sliders, Layers, Brain } from 'lucide-react';

export default function HomePage() {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090C] text-[#F5F7FA]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#00E5FF] mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>Charge Your Rank • NEET & JEE Practice Engine</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-[1.1]">
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
                className="w-full sm:w-auto bg-[#11161D] text-white hover:text-[#00E5FF] border border-white/10 font-bold text-sm px-8 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Explore Batches
              </Link>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* Embedded Quick Early Access Form Strip */}
      <section className="py-16 bg-[#0D1117] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider block mb-2">
                Join 1,000+ Aspirants
              </span>
              <h2 className="text-2xl font-black text-white mb-3">
                Built for Students Serious About Rank Improvement.
              </h2>
              <p className="text-xs text-[#9AA4B2] leading-relaxed">
                Sign up for early access to unlock custom DIY question sets, smart 3D flashcards, and instant AI doubt explanations.
              </p>
            </div>
            <div className="bg-[#11161D] border border-white/10 p-6 rounded-2xl">
              <WaitlistForm source="homepage_inline" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-white">Targeted Prep Batches</h2>
            <p className="text-xs text-[#9AA4B2]">Complete syllabus coverage with balanced practice distribution.</p>
          </div>
          <Link href="/courses" className="text-xs font-bold text-[#00E5FF] hover:underline">
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0D1117]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-8">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS_DATA} />
        </div>
      </section>

      <Footer />

      {/* Waitlist Modal */}
      {waitlistModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0D1117] border border-white/15 rounded-2xl p-6 max-w-md w-full relative animate-in zoom-in-95">
            <button
              onClick={() => setWaitlistModalOpen(false)}
              className="absolute top-4 right-4 text-[#9AA4B2] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">⚡</span>
              <h3 className="text-lg font-bold text-white">VoltClass Early Access</h3>
            </div>
            <WaitlistForm
              source="hero_modal"
              onSuccess={() => setTimeout(() => setWaitlistModalOpen(false), 3000)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
