'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Zap,
  Smartphone,
  BookOpen,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Sliders,
  Layers,
  Brain,
  ShieldCheck,
  Download,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Star
} from 'lucide-react';

export default function SingleLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const courses = [
    {
      title: 'Lakshya NEET 2026',
      exam: 'NEET',
      target: 'Class 12th & Dropper',
      price: '₹4,999',
      originalPrice: '₹8,999',
      subjects: 'Physics, Chemistry, Biology',
      features: [
        'Unlimited DIY Custom Practice Sets',
        'Balanced Equal Topic Distribution',
        '3D Smart Flashcards Deck',
        '60 Monthly AI Doubt Resolution Tokens',
      ],
      badge: 'Most Popular',
      color: 'from-emerald-500/20 to-teal-500/10',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
    },
    {
      title: 'Lakshya JEE Main & Advanced',
      exam: 'JEE',
      target: 'Class 12th & Dropper',
      price: '₹4,999',
      originalPrice: '₹8,999',
      subjects: 'Physics, Chemistry, Mathematics',
      features: [
        'Numerical & Multi-Statement Question Filters',
        'Step-by-Step LaTeX Math Solutions',
        'Topic-wise Accuracy Analytics',
        '60 Monthly AI Doubt Resolution Tokens',
      ],
      badge: 'Best Value',
      color: 'from-blue-500/20 to-cyan-500/10',
      borderColor: 'border-[#00E5FF]/30',
      textColor: 'text-[#00E5FF]',
    },
    {
      title: 'Shikhar Rank Booster Batch',
      exam: 'JEE / NEET',
      target: 'Droppers & Repeaters',
      price: '₹5,999',
      originalPrice: '₹9,999',
      subjects: 'Complete PCB / PCM',
      features: [
        'High-Yield Intensive Revision Worksheets',
        'Direct Private Bucket Storage Access',
        'Speed & Precision Velocity Trackers',
        '24/7 AI Tutor Follow-up Support',
      ],
      badge: 'Intensive',
      color: 'from-purple-500/20 to-pink-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
    },
  ];

  const faqs = [
    {
      q: 'How does the VoltClass mobile app work?',
      a: 'VoltClass is a pure practice and rank-boosting platform. You can configure custom question sets, practice with 3D smart flashcards, track your speed and precision, and solve doubts instantly using our AI resolution engine.',
    },
    {
      q: 'Is the course content aligned with the latest NTA syllabus?',
      a: 'Yes, 100%. All questions, 3D flashcards, and mock exercises are strictly mapped to the updated NEET & JEE syllabus.',
    },
    {
      q: 'How do I download the Android app?',
      a: 'Click the "Download APK" or "Google Play" button on this page to install the official VoltClass mobile app directly on your Android smartphone.',
    },
    {
      q: 'What are AI Doubt Tokens?',
      a: 'Every premium course includes monthly AI tokens that allow you to take a picture of any difficult question and get instant step-by-step LaTeX mathematical explanations.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#07090C] text-[#F5F7FA] font-sans selection:bg-[#00E5FF] selection:text-black">
      
      {/* ================= STICKY NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090C]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#00A3FF] flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(0,229,255,0.4)]">
              ⚡
            </div>
            <div>
              <span className="text-2xl font-black tracking-tight text-white">
                Volt<span className="text-[#00E5FF]">Class</span>
              </span>
              <span className="text-[10px] font-bold text-[#9AA4B2] tracking-widest uppercase block -mt-1">
                Charge Your Rank
              </span>
            </div>
          </Link>

          {/* Desktop Nav Anchors */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-[#9AA4B2]">
            <a href="#about" className="hover:text-[#00E5FF] transition-colors">App Info</a>
            <a href="#features" className="hover:text-[#00E5FF] transition-colors">Features</a>
            <a href="#courses" className="hover:text-[#00E5FF] transition-colors">Batches & Fees</a>
            <a href="#download" className="hover:text-[#00E5FF] transition-colors">Download App</a>
            <a href="#contact" className="hover:text-[#00E5FF] transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#download"
              className="bg-[#00E5FF] text-[#07090C] font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.35)] hover:bg-[#33EBFF] transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <Smartphone className="w-4 h-4" />
              <span>Get Mobile App</span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00E5FF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D1117] border-b border-white/10 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#9AA4B2] py-2">App Info</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#9AA4B2] py-2">Features</a>
            <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#9AA4B2] py-2">Batches & Fees</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#9AA4B2] py-2">Download App</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#9AA4B2] py-2">Contact</a>
          </div>
        )}
      </header>

      <main className="pt-24">

        {/* ================= HERO SECTION ================= */}
        <section className="pt-16 pb-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-4 py-2 rounded-full text-xs font-bold text-[#00E5FF] mb-6 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <Zap className="w-4 h-4" />
              <span>High-Performance NEET & JEE Practice Engine</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
              Prepare Smarter. Practice Harder.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00A3FF] to-emerald-400">
                Charge Your Rank.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#9AA4B2] leading-relaxed max-w-2xl mx-auto mb-10">
              The ultimate performance booster for NEET & JEE aspirants. DIY custom practice configurator, 3D smart flashcards, live speed velocity tracking, and instant AI doubt answers.
            </p>

            {/* App Badges & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="#download"
                className="w-full sm:w-auto bg-[#00E5FF] text-[#07090C] font-extrabold text-sm px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.35)] hover:bg-[#33EBFF] transition-all flex items-center justify-center gap-3 hover:scale-[1.02]"
              >
                <Smartphone className="w-5 h-5" />
                <span>Get App on Android</span>
              </a>
              <a
                href="#courses"
                className="w-full sm:w-auto bg-[#11161D] text-white border border-white/10 hover:border-white/20 font-bold text-sm px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>View Batches & Fees</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </a>
            </div>

            {/* App Dashboard Graphic Preview */}
            <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#11161D] to-[#0D1117] border border-white/15 rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-[#9AA4B2] font-mono ml-2">VoltClass App Engine v2.4</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20 font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#00E5FF]" /> 4.9 Student Rating
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left mb-6">
                <div className="bg-[#07090C] p-4 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-[#9AA4B2] font-bold block uppercase mb-1">Questions Solved</span>
                  <span className="text-2xl font-black text-white">1,420+</span>
                </div>
                <div className="bg-[#07090C] p-4 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-[#9AA4B2] font-bold block uppercase mb-1">Accuracy Level</span>
                  <span className="text-2xl font-black text-emerald-400">88.4%</span>
                </div>
                <div className="bg-[#07090C] p-4 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-[#9AA4B2] font-bold block uppercase mb-1">Doubt Tokens</span>
                  <span className="text-2xl font-black text-[#00E5FF]">52 / 60</span>
                </div>
                <div className="bg-[#07090C] p-4 rounded-2xl border border-white/5">
                  <span className="text-[10px] text-[#9AA4B2] font-bold block uppercase mb-1">Target Rank</span>
                  <span className="text-2xl font-black text-amber-400">Top 500</span>
                </div>
              </div>

              <div className="bg-[#07090C] p-6 rounded-2xl border border-white/10 text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider">Live Question Matrix • 5 per row</span>
                  <span className="text-xs text-emerald-400 font-mono">Timer: 01:45</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  <div className="h-9 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center text-xs font-bold">1 ✓</div>
                  <div className="h-9 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center text-xs font-bold">2 ✓</div>
                  <div className="h-9 rounded-xl bg-rose-500/20 border border-rose-500 text-rose-400 flex items-center justify-center text-xs font-bold">3 ✗</div>
                  <div className="h-9 rounded-xl bg-[#00E5FF]/20 border border-[#00E5FF] text-[#00E5FF] flex items-center justify-center text-xs font-bold animate-pulse">4 •</div>
                  <div className="h-9 rounded-xl bg-white/5 border border-white/10 text-[#9AA4B2] flex items-center justify-center text-xs font-bold">5</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= APP FEATURES ================= */}
        <section id="features" className="py-20 bg-[#0D1117] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider block mb-2">Engineered For Scores</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Why Aspirants Choose VoltClass</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#11161D] border border-white/10 rounded-2xl p-8 hover:border-[#00E5FF]/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mb-6">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">DIY Custom Practice</h3>
                <p className="text-xs text-[#9AA4B2] leading-relaxed">
                  Choose specific subjects, chapters, and question types. Our algorithm balances questions equally across chosen topics.
                </p>
              </div>

              <div className="bg-[#11161D] border border-white/10 rounded-2xl p-8 hover:border-[#00E5FF]/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3D Smart Flashcards</h3>
                <p className="text-xs text-[#9AA4B2] leading-relaxed">
                  Flip through high-yield concept cards directly loaded from secure private storage buckets with LaTeX formula support.
                </p>
              </div>

              <div className="bg-[#11161D] border border-white/10 rounded-2xl p-8 hover:border-[#00E5FF]/40 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Doubt Resolution</h3>
                <p className="text-xs text-[#9AA4B2] leading-relaxed">
                  Get instant step-by-step math explanations and follow-up Q&A assistance 24/7 in English or Romanized Hinglish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COURSES & BATCHES ================= */}
        <section id="courses" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider block mb-2">Structured Programs</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Enroll in Top Target Batches</h2>
            <p className="text-xs sm:text-sm text-[#9AA4B2]">Includes full access to the DIY exercise engine, 3D smart flashcards, and AI doubt resolution tokens.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className={`bg-[#11161D] border ${course.borderColor} bg-gradient-to-b ${course.color} rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-all`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${course.textColor} bg-white/5 border border-white/10`}>
                      {course.exam}
                    </span>
                    <span className="text-[10px] font-bold text-[#9AA4B2] bg-white/5 px-2.5 py-1 rounded-md">
                      {course.target}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{course.title}</h3>
                  <p className="text-xs text-[#9AA4B2] mb-6">{course.subjects}</p>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-white">{course.price}</span>
                      <span className="text-sm text-[#9AA4B2] line-through">{course.originalPrice}</span>
                      <span className="text-xs font-bold text-emerald-400 ml-auto">Valid 1 Year</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-xs text-[#F5F7FA]">
                        <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="w-full bg-[#00E5FF] text-[#07090C] font-extrabold text-xs py-3.5 rounded-xl text-center shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:bg-[#33EBFF] transition-all"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PLAY STORE / APP DOWNLOAD ================= */}
        <section id="download" className="py-20 bg-gradient-to-r from-[#0D1117] via-[#11161D] to-[#0D1117] border-y border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400 mb-4">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Official Mobile App</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
                Practice Anywhere on the <span className="text-[#00E5FF]">VoltClass App</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#9AA4B2] leading-relaxed mb-8">
                Take timed mock exercises, review 3D smart flashcards, and solve doubts right on your smartphone. Available now on Android.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {/* Simulated Google Play Badge */}
                <button
                  onClick={() => alert("Downloading official VoltClass APK...")}
                  className="bg-black border border-white/20 hover:border-[#00E5FF] px-6 py-3 rounded-2xl flex items-center gap-4 transition-all"
                >
                  <div className="text-2xl">▶</div>
                  <div className="text-left">
                    <span className="text-[9px] uppercase tracking-wider text-[#9AA4B2] block">GET IT ON</span>
                    <span className="text-sm font-bold text-white">Google Play</span>
                  </div>
                </button>

                <button
                  onClick={() => alert("Direct APK Download starting...")}
                  className="bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-3 transition-all text-xs font-bold text-white"
                >
                  <Download className="w-4 h-4 text-[#00E5FF]" />
                  <span>Download Direct APK</span>
                </button>
              </div>
            </div>

            <div className="bg-[#07090C] border border-white/10 rounded-3xl p-6 shadow-2xl w-full max-w-sm text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center mx-auto mb-4 border border-[#00E5FF]/20">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">VoltClass Android Engine</h4>
              <p className="text-xs text-[#9AA4B2] mb-4">v2.4.0 • 100% Ad-Free • 24MB</p>
              <div className="bg-white/5 rounded-xl p-3 text-xs text-emerald-400 font-bold border border-emerald-500/20">
                ✓ Verified Safe & Virus Free
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-20 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center text-white mb-3">Frequently Asked Questions</h2>
          <p className="text-xs text-[#9AA4B2] text-center mb-10">Quick answers about our courses and app access.</p>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#11161D] border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#00E5FF] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-[#9AA4B2] leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT & SUPPORT ================= */}
        <section id="contact" className="py-20 bg-[#0D1117] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider block mb-2">24/7 Support</span>
                <h2 className="text-3xl font-black text-white mb-4">Get in Touch with VoltClass</h2>
                <p className="text-xs text-[#9AA4B2] leading-relaxed mb-8">
                  Have questions about course admissions, payment methods, or app setup? Send us a message and our support team will respond shortly.
                </p>

                <div className="space-y-4 text-xs text-[#9AA4B2]">
                  <div className="flex items-center gap-3 bg-[#11161D] p-4 rounded-xl border border-white/5">
                    <Mail className="w-5 h-5 text-[#00E5FF]" />
                    <span>support@voltclass.com</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#11161D] p-4 rounded-xl border border-white/5">
                    <Phone className="w-5 h-5 text-emerald-400" />
                    <span>+91 98765 43210 (Mon–Sat, 10 AM–7 PM)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#11161D] p-4 rounded-xl border border-white/5">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    <span>Instant AI Doubt Tokens Available 24/7 Inside App</span>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-[#11161D] border border-white/10 rounded-3xl p-8 shadow-xl">
                {contactSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      ✓
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-xs text-[#9AA4B2]">Thank you! We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-[10px] font-bold text-[#9AA4B2] uppercase block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Rohan Sharma"
                        className="w-full bg-[#07090C] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-[#9AA4B2] uppercase block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="rohan@gmail.com"
                        className="w-full bg-[#07090C] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-[#9AA4B2] uppercase block mb-1">Message / Query</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="I have a question regarding course access..."
                        className="w-full bg-[#07090C] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00E5FF]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#00E5FF] text-[#07090C] font-extrabold text-xs py-3.5 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:bg-[#33EBFF] transition-all"
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
      <footer className="bg-[#07090C] border-t border-white/10 py-12 text-xs text-[#9AA4B2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">⚡ VoltClass</span>
            <span>— Charge Your Rank</span>
          </div>
          <p>© {new Date().getFullYear()} VoltClass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
