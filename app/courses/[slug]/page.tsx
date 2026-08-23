import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { COURSES_DATA } from '@/data/courses';
import { ArrowLeft, CheckCircle2, Target, BookOpen, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#5B6472] hover:text-[#2563EB] transition-colors mb-8"
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
          <span className="text-xs font-semibold text-[#5B6472] bg-black/5 px-2.5 py-1 rounded-md border border-black/5">
            {course.targetClass}
          </span>
          <span className="text-xs font-semibold text-[#5B6472] bg-black/5 px-2.5 py-1 rounded-md border border-black/5">
            {course.subject.join(' · ')}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#0B0F14] mb-2 tracking-tight">
          {course.title}
        </h1>
        <p className="text-base sm:text-lg font-semibold text-[#2563EB] mb-6">{course.tagline}</p>

        <div className="max-w-2xl mb-10 space-y-4">
          {course.description.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: features + best for */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="flex items-center gap-2 text-sm font-bold text-[#0B0F14] uppercase tracking-wider mb-4">
                <BookOpen className="w-4 h-4 text-[#2563EB]" /> What you get
              </h2>
              <ul className="space-y-2.5">
                {course.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#0B0F14]">
                    <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-[#F6F8FA] border border-black/10 rounded-2xl p-5 flex items-start gap-3">
              <Target className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider mb-1">
                  Best suited for
                </h3>
                <p className="text-sm text-[#5B6472] leading-relaxed">{course.bestFor}</p>
              </div>
            </section>
          </div>

          {/* Right: price card */}
          <aside className="md:col-span-1">
            <div className="bg-white border border-black/10 rounded-2xl p-6 sticky top-28">
              <span className="text-xs text-[#5B6472] block mb-1">Course Fee</span>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-[#0B0F14]">₹{course.price}</span>
                <span className="text-sm text-[#5B6472] line-through">₹{course.originalPrice}</span>
              </div>
              {course.installment && (
                <p className="text-xs text-[#5B6472] mb-5">
                  Installment option: {course.installment}
                </p>
              )}
              {!course.installment && <div className="mb-5" />}
              <Link
                href="/#waitlist"
                className="w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
              >
                Enroll now <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[10px] text-[#5B6472] text-center mt-3">
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
