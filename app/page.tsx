'use client';

import React, { useState } from 'react';
import {
  Zap,
  Smartphone,
  CheckCircle2,
  Sliders,
  Layers,
  Brain,
  Download,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Star,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  BarChart2,
  Sparkles
} from 'lucide-react';

export default function SingleLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const courses = [
    {
      title: 'Lakshya NEET Batch',
      exam: 'NEET 2026',
      target: 'Class 12th & Droppers',
      price: '₹4,999',
      originalPrice: '₹8,999',
      subjects: 'Physics, Chemistry, Biology',
      features: [
        'Unlimited DIY Custom Practice Sets',
        'Equal Topic Distribution Balance Algorithm',
        '3D Smart Flashcard Deck Access',
        '60 Monthly AI Doubt Resolution Tokens',
      ],
      badge: 'Most Popular',
      accentColor: '#059669',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      btnColor: 'bg-emerald-600 hover:bg-emerald-700 text-white',
    },
    {
      title: 'Lakshya JEE Main & Advanced',
      exam: 'JEE 2026',
      target: 'Class 12th & Droppers',
      price: '₹4,999',
      originalPrice: '₹8,999',
      subjects: 'Physics, Chemistry, Mathematics',
      features: [
        'Numerical & Multi-Statement Filters',
        'Step-by-Step LaTeX Math Solutions',
        'Topic-wise Accuracy Analytics Bar Chart',
        '60 Monthly AI Doubt Resolution Tokens',
      ],
      badge: 'Best Value',
      accentColor: '#0284C7',
      badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
      btnColor: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
    {
      title: 'Shikhar Rank Booster',
      exam: 'JEE / NEET',
      target: 'Droppers & Repeaters',
      price: '₹5,999',
      originalPrice: '₹9,999',
      subjects: 'Complete PCB / PCM',
      features: [
        'High-Yield Intensive Worksheets',
        'Direct Private Bucket Storage Access',
        'Speed & Precision Velocity Trackers',
        '24/7 AI Tutor Follow-up Support',
      ],
      badge: 'Intensive',
      accentColor: '#7C3AED',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      btnColor: 'bg-purple-600 hover:bg-purple-700 text-white',
    },
  ];

  const appFeatures = [
    {
      icon: <Sliders className="w-5 h-5 text-blue-600" />,
      title: 'DIY Practice Engine',
      desc: 'Pick specific subjects, chapters, and topics. Filter by Numerical, Assertion-Reason, or Match Column with equal topic balance.',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-600" />,
      title: '3D Smart Flashcards',
      desc: 'Interactive flip cards with formula highlights, category badges, and LaTeX math equations synced from private storage.',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: <Brain className="w-5 h-5 text-purple-600" />,
      title: 'AI Doubt Resolution',
      desc: '24/7 instant step-by-step doubt explanations and follow-up Q&A assistance in English or Romanized Hinglish.',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <FileText className="w-5 h-5 text-amber-600" />,
      title: 'Daily Practice & PYQs',
      desc: 'Topic-wise practice sheets, chapter quick notes, and previous year exam questions with live solution breakdowns.',
      bgColor: 'bg-amber-50',
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-rose-600" />,
      title: 'Deep Speed Analytics',
      desc: 'Interactive 5-column question status matrix, time-elapsed per question, and topic-wise accuracy analytics.',
      bgColor: 'bg-rose-50',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-sky-600" />,
      title: 'Smart Revision Engine',
      desc: 'AI-driven weak area tracking that automatically reorganizes missed concepts into focused revision sets.',
      bgColor: 'bg-sky-50',
    },
  ];

  const faqs = [
    {
      q: 'How does the VoltClass mobile app work?',
      a: 'VoltClass is a pure practice and rank-boosting platform. Configure custom question sets, review 3D flashcards, track speed, and resolve doubts instantly using our AI engine.',
    },
    {
      q: 'Is the course content aligned with the latest NTA syllabus?',
      a: 'Yes, 100%. All questions, 3D flashcards, and mock exercises are strictly mapped to the updated NEET & JEE syllabus.',
    },
    {
      q: 'How do I download the Android app?',
      a: 'Click the "Google Play" or "Download Direct APK" button on this page to install the official VoltClass mobile app directly on your Android device.',
    },
    {
      q: 'What are AI Doubt Tokens?',
      a: 'Every course includes 60 monthly AI tokens that allow you to take a picture or type any question and receive instant step-by-step LaTeX mathematical explanations.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white font-black text-lg sm:text-xl shadow-md shadow-blue-500/20">
              ⚡
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                Volt<span className="text-blue-600">Class</span>
              </span>
              <span className="text-[9px] font-extrabold text-slate-500 tracking-wider uppercase block -mt-1">
                Charge Your Rank
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">App Details</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#courses" className="hover:text-blue-600 transition-colors">Batches & Fees</a>
            <a href="#download" className="hover:text-blue-600 transition-colors">Download App</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#download"
              className="bg-blue-600 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get Mobile App</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3 animate-in slide-in-from-top-2">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-700 py-2 border-b border-slate-100">App Details</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-700 py-2 border-b border-slate-100">Features</a>
            <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-700 py-2 border-b border-slate-100">Batches & Fees</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-700 py-2 border-b border-slate-100">Download App</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-bold text-slate-700 py-2">Contact Support</a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-blue-600 text-white font-extrabold text-xs py-3 rounded-xl flex items-center justify-center gap-2 mt-2 shadow-md"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get App on Android</span>
            </a>
          </div>
        )}
      </header>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section id="about" className="pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-blue-700 mb-5">
            <Zap className="w-3.5 h-3.5 fill-blue-700" />
            <span>High-Performance NEET & JEE Practice Engine</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-4 sm:mb-6">
            Prepare Smarter. Practice Harder.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-emerald-600 block sm:inline">
              Charge Your Rank.
            </span>
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 font-medium">
            A pure practice engine that plugs into your existing preparation and drives your score upward. Custom DIY exercise configurator, 3D smart flashcards, live velocity tracking, and instant AI doubt resolution.
          </p>

          {/* Action Buttons Stacked on Mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href="#download"
              className="w-full sm:w-auto bg-blue-600 text-white font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all flex items-center justify-center gap-2.5"
            >
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Get App on Android</span>
            </a>
            <a
              href="#courses"
              className="w-full sm:w-auto bg-white text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-xl shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <span>View Batches & Fees</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </a>
          </div>

          {/* APP DASHBOARD MOBILE PREVIEW CARD */}
          <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-left shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 mb-4 sm:mb-6">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-bold ml-1">VoltClass App Engine</span>
              </div>
              <span className="text-[10px] sm:text-xs font-extrabold text-sky-700 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-lg">
                ★ 4.9 Student Rating
              </span>
            </div>

            {/* 4 Metrics Grid (2x2 on Mobile, 4x1 on Desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
              <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold block uppercase mb-0.5">QUESTIONS SOLVED</span>
                <span className="text-lg sm:text-2xl font-black text-slate-900">1,420+</span>
              </div>
              <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold block uppercase mb-0.5">ACCURACY LEVEL</span>
                <span className="text-lg sm:text-2xl font-black text-emerald-600">88.4%</span>
              </div>
              <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold block uppercase mb-0.5">DOUBT TOKENS</span>
                <span className="text-lg sm:text-2xl font-black text-blue-600">52 / 60</span>
              </div>
              <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-extrabold block uppercase mb-0.5">TARGET RANK</span>
                <span className="text-lg sm:text-2xl font-black text-amber-600">Top 500</span>
              </div>
            </div>

            {/* 5 Column Status Matrix */}
            <div className="bg-slate-50 p-3.5 sm:p-5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] sm:text-xs font-extrabold text-blue-700 uppercase tracking-wide">Live Question Status Matrix (5 per row)</span>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-600">Timer: 01:45</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5">
                <div className="h-8 sm:h-9 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-xs font-bold">1 ✓</div>
                <div className="h-8 sm:h-9 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center text-xs font-bold">2 ✓</div>
                <div className="h-8 sm:h-9 rounded-lg bg-rose-100 border border-rose-300 text-rose-800 flex items-center justify-center text-xs font-bold">3 ✗</div>
                <div className="h-8 sm:h-9 rounded-lg bg-sky-100 border border-sky-300 text-sky-800 flex items-center justify-center text-xs font-bold animate-pulse">4 •</div>
                <div className="h-8 sm:h-9 rounded-lg bg-white border border-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">5</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section id="features" className="py-12 sm:py-20 bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider block mb-1">Complete System Overview</span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900">Engineered For Score Progression</h2>
            </div>

            {/* 1 Column on Mobile, 3 Columns on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {appFeatures.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 transition-all hover:border-slate-300">
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} flex items-center justify-center mb-4`}>
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BATCHES & FEES ================= */}
        <section id="courses" className="py-12 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider block mb-1">Structured Programs</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-2">Target Batches & Pricing</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Includes full access to the DIY practice engine, 3D smart flashcards, and AI doubt tokens.</p>
          </div>

          {/* 1 Column Stacked on Mobile, 3 Columns on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-slate-100 hover:border-blue-500 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase border ${course.badgeBg}`}>
                      {course.exam}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">{course.target}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">{course.title}</h3>
                  <p className="text-xs font-bold text-slate-500 mb-5">{course.subjects}</p>

                  <div className="border-b border-slate-100 pb-4 mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900">{course.price}</span>
                      <span className="text-sm text-slate-400 line-through">{course.originalPrice}</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 block mt-1">1 Year Full Access</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-xl text-center font-extrabold text-xs shadow-md transition-all ${course.btnColor}`}
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GOOGLE PLAY DOWNLOAD ================= */}
        <section id="download" className="py-12 sm:py-20 bg-blue-50/70 border-y border-blue-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[11px] font-extrabold mb-3">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Official Mobile App</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
                Practice Anywhere on Android
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                Take timed mock exercises, review 3D smart flashcards, and solve doubts right on your smartphone. Available now on Android.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                <button
                  onClick={() => alert('Opening Play Store...')}
                  className="w-full sm:w-auto bg-slate-900 text-white border border-slate-800 px-6 py-3 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-md"
                >
                  <span className="text-lg">▶</span>
                  <div className="text-left">
                    <span className="text-[8px] text-slate-400 font-extrabold uppercase block tracking-wider">GET IT ON</span>
                    <span className="text-xs font-black">Google Play</span>
                  </div>
                </button>

                <button
                  onClick={() => alert('Starting APK download...')}
                  className="w-full sm:w-auto bg-white border border-slate-300 px-6 py-3 rounded-2xl flex items-center justify-center gap-2 text-xs font-extrabold text-slate-800 hover:bg-slate-50 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Download Direct APK</span>
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-6 text-center w-full max-w-xs shadow-lg shadow-slate-200/50">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-blue-600 flex items-center justify-center mx-auto mb-3 border border-sky-100">
                <Zap className="w-7 h-7 fill-blue-600" />
              </div>
              <h4 className="text-base font-black text-slate-900 mb-0.5">VoltClass App</h4>
              <p className="text-xs text-slate-500 font-semibold mb-3">v2.4.0 • 100% Ad-Free • 24MB</p>
              <span className="inline-block text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
                ✓ Verified Safe
              </span>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-12 sm:py-20 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-2">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-slate-600 text-center mb-8 font-medium">Quick answers about our courses and mobile app access.</p>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-extrabold text-xs sm:text-sm text-slate-900 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT & SUPPORT ================= */}
        <section id="contact" className="py-12 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <span className="text-xs font-extrabold text-blue-600 uppercase tracking-wider block mb-1">24/7 Support</span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">Get in Touch with VoltClass</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  Have questions about course admissions, payment methods, or app setup? Send us a message and our support team will respond shortly.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>support@voltclass.com</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>+91 98765 43210 (Mon–Sat, 10 AM–7 PM)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-800">
                    <MessageSquare className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Instant AI Doubt Tokens Available 24/7 Inside App</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-md">
                {contactSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3 font-black text-xl">
                      ✓
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Message Sent!</h3>
                    <p className="text-xs text-slate-600 font-medium">Thank you! Our support team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-3.5">
                    <div>
                      <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Rohan Sharma"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="rohan@gmail.com"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold text-slate-500 uppercase block mb-1">Message / Query</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="I have a question regarding course access or mobile enrollment..."
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white font-extrabold text-xs py-3 rounded-xl shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 bg-white border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} VoltClass. All rights reserved. • Charge Your Rank ⚡
      </footer>
    </div>
  );
}
