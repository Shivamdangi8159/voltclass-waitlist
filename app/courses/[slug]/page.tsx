import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { COURSES_DATA } from '@/data/courses';
import { ArrowLeft, CheckCircle2, Layers, BookOpen, ArrowRight } from 'lucide-react';

interface CourseDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return COURSES_DATA.map((course) => ({ slug: course.slug }));
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = COURSES_DATA.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  const isNeet = course.exam === 'NEET';

  return (
    <div className="min-h-screen bg-[#07090C] text-[#F5F7FA] font-sans selection:bg-[#00E5FF] selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#9AA4B2] hover:text-[#00E5FF] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> All courses
        </Link>

        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isNeet
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}
          >
            {course.exam}
          </span>
          <span className="text-xs font-semibold text-[#9AA4B2] bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            {course.targetClass}
          </span>
          <span className="text-xs font-semibold text-[#9AA4B2] bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
            {course.subject.join(' · ')}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white mb-5 tracking-tight">
          {course.title}
        </h1>
        <p className="text-sm sm:text-base text-[#9AA4B2] leading-relaxed max-w-2xl mb-10">
          {course.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: chapters + features */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                <Layers className="w-4 h-4 text-[#00E5FF]" /> Core modules
              </h2>
              <div className="space-y-3">
                {course.chapters.map((ch) => (
                  <div
                    key={ch.id}
                    className="bg-[#11161D] border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4"
                  >
                    <span className="text-sm font-semibold text-white">{ch.title}</span>
                    <span className="text-xs text-[#9AA4B2] whitespace-nowrap">
                      {ch.topicsCount} topics · {ch.questionCount} questions
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-4">
                <BookOpen className="w-4 h-4 text-[#00E5FF]" /> What&apos;s included
              </h2>
              <ul className="space-y-2.5">
                {course.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F5F7FA]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right: price card */}
          <aside className="md:col-span-1">
            <div className="bg-[#11161D] border border-white/10 rounded-2xl p-6 sticky top-28">
              <span className="text-xs text-[#9AA4B2] block mb-1">Complete access</span>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-black text-white">₹{course.price}</span>
                <span className="text-sm text-[#9AA4B2] line-through">₹{course.originalPrice}</span>
              </div>
              <Link
                href="/#waitlist"
                className="w-full bg-[#00E5FF] hover:bg-[#33EBFF] text-[#07090C] font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] flex items-center justify-center gap-2"
              >
                Enroll now <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[10px] text-[#9AA4B2] text-center mt-3">
                Seats confirmed after payment verification.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
