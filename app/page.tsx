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
  Sparkles,
  ShieldCheck
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
      badgeBg: '#ECFDF5',
      badgeText: '#047857',
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
      badgeBg: '#E0F2FE',
      badgeText: '#0369A1',
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
      badgeBg: '#F3E8FF',
      badgeText: '#6B21A8',
    },
  ];

  const appFeatures = [
    {
      icon: <Sliders size={22} color="#0284C7" />,
      title: 'DIY Practice Engine',
      desc: 'Pick specific subjects, select chapters & topics, filter by question type (Numerical, Assertion-Reason, Match Column), and set question limits with equal topic balance.',
      bgColor: '#E0F2FE',
    },
    {
      icon: <Layers size={22} color="#059669" />,
      title: '3D Smart Flashcards',
      desc: 'Interactive flip cards with formula highlights, category badges, and LaTeX math equations directly synced from private storage buckets.',
      bgColor: '#ECFDF5',
    },
    {
      icon: <Brain size={22} color="#7C3AED" />,
      title: 'AI Doubt Resolution',
      desc: '24/7 instant step-by-step doubt explanations and follow-up Q&A assistance in English or Romanized Hinglish.',
      bgColor: '#F3E8FF',
    },
    {
      icon: <FileText size={22} color="#D97706" />,
      title: 'Daily Practice Sheets & PYQs',
      desc: 'Comprehensive topic-wise practice sheets, chapter quick notes, and previous year exam questions with live solution breakdowns.',
      bgColor: '#FEF3C7',
    },
    {
      icon: <BarChart2 size={22} color="#E11D48" />,
      title: 'Deep Speed Analytics',
      desc: 'Interactive 5-column question status matrix, time-elapsed per question, and topic-wise accuracy analytics.',
      bgColor: '#FFE4E6',
    },
    {
      icon: <Sparkles size={22} color="#0284C7" />,
      title: 'Smart Revision Engine',
      desc: 'AI-driven weak area tracking that automatically reorganizes missed concepts into focused revision sets.',
      bgColor: '#E0F2FE',
    },
  ];

  const faqs = [
    {
      q: 'How does the VoltClass mobile app work?',
      a: 'VoltClass is a pure-practice and rank-boosting platform. You can configure custom question sets, practice with 3D smart flashcards, track speed and precision, and resolve doubts instantly using our AI engine.',
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
    <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* ================= HEADER ================= */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.9)', borderBottom: '1px solid #E2E8F0', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #0284C7, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: '900', fontSize: '20px', boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)' }}>
              ⚡
            </div>
            <div>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#0F172A', letterSpacing: '-0.5px' }}>Volt<span style={{ color: '#2563EB' }}>Class</span></span>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: '800', color: '#64748B', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '-4px' }}>Charge Your Rank</span>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '28px', fontSize: '13px', fontWeight: '700' }}>
            <a href="#about" style={{ color: '#475569', textDecoration: 'none' }}>App Details</a>
            <a href="#features" style={{ color: '#475569', textDecoration: 'none' }}>Features</a>
            <a href="#courses" style={{ color: '#475569', textDecoration: 'none' }}>Batches & Fees</a>
            <a href="#download" style={{ color: '#475569', textDecoration: 'none' }}>Download App</a>
            <a href="#contact" style={{ color: '#475569', textDecoration: 'none' }}>Contact</a>
          </nav>

          <a href="#download" style={{ backgroundColor: '#2563EB', color: '#FFF', padding: '10px 22px', borderRadius: '12px', fontWeight: '800', fontSize: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)' }}>
            <Smartphone size={16} /> Get Mobile App
          </a>
        </div>
      </header>

      <main>
        {/* ================= HERO SECTION ================= */}
        <section id="about" style={{ padding: '70px 24px 60px', textAlign: 'center', maxWidth: '1080px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', padding: '6px 18px', borderRadius: '20px', fontSize: '12px', color: '#1D4ED8', fontWeight: '800', marginBottom: '24px' }}>
            <Zap size={14} fill="#1D4ED8" /> High-Performance NEET & JEE Practice Engine
          </div>

          <h1 style={{ fontSize: '52px', fontWeight: '900', lineHeight: '1.12', marginBottom: '20px', color: '#0F172A', letterSpacing: '-1px' }}>
            Prepare Smarter. Practice Harder. <br />
            <span style={{ background: 'linear-gradient(135deg, #2563EB, #0284C7, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Charge Your Rank.
            </span>
          </h1>

          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.65', maxWidth: '720px', margin: '0 auto 36px', fontWeight: '500' }}>
            A pure practice engine that plugs into your existing preparation and drives your score upward. Custom DIY exercise configurator, 3D smart flashcards, live velocity tracking, and instant AI doubt resolution.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '52px' }}>
            <a href="#download" style={{ backgroundColor: '#2563EB', color: '#FFF', padding: '15px 32px', borderRadius: '14px', fontWeight: '800', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)' }}>
              <Smartphone size={18} /> Get App on Android
            </a>
            <a href="#courses" style={{ backgroundColor: '#FFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '15px 32px', borderRadius: '14px', fontWeight: '800', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              View Batches & Fees <ArrowRight size={16} color="#2563EB" />
            </a>
          </div>

          {/* APP DASHBOARD GRAPHICS PREVIEW */}
          <div style={{ backgroundColor: '#FFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '28px', textAlign: 'left', boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '16px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EF4444', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#F59E0B', display: 'inline-block' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block' }}></span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: '700', marginLeft: '8px' }}>VoltClass App Engine v2.4</span>
              </div>
              <span style={{ color: '#0284C7', fontSize: '12px', fontWeight: '800', backgroundColor: '#E0F2FE', padding: '4px 14px', borderRadius: '12px' }}>★ 4.9 Student Rating</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '10px', color: '#64748B', display: 'block', fontWeight: '800' }}>QUESTIONS SOLVED</span>
                <span style={{ fontSize: '24px', fontWeight: '900', color: '#0F172A' }}>1,420+</span>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '10px', color: '#64748B', display: 'block', fontWeight: '800' }}>ACCURACY LEVEL</span>
                <span style={{ fontSize: '24px', fontWeight: '900', color: '#059669' }}>88.4%</span>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '10px', color: '#64748B', display: 'block', fontWeight: '800' }}>DOUBT TOKENS</span>
                <span style={{ fontSize: '24px', fontWeight: '900', color: '#0284C7' }}>52 / 60</span>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '10px', color: '#64748B', display: 'block', fontWeight: '800' }}>TARGET RANK</span>
                <span style={{ fontSize: '24px', fontWeight: '900', color: '#D97706' }}>Top 500</span>
              </div>
            </div>

            {/* 5 COLUMN STATUS MATRIX */}
            {/* 5 COLUMN STATUS MATRIX */}
<div style={{ backgroundColor: '#F8FAFC', padding: '20px', borderRadius: '18px', border: '1px solid #E2E8F0' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
    <span style={{ fontSize: '12px', fontWeight: '800', color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Live Question Status Matrix (5 per row)</span>
    <span style={{ fontSize: '12px', fontWeight: '700', color: '#059669' }}>Timer: 01:45</span>
  </div>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
    <div style={{ height: '38px', borderRadius: '10px', backgroundColor: '#DCFCE7', border: '1px solid #86EFAC', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>1 ✓</div>
    <div style={{ height: '38px', borderRadius: '10px', backgroundColor: '#DCFCE7', border: '1px solid #86EFAC', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>2 ✓</div>
    <div style={{ height: '38px', borderRadius: '10px', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>3 ✗</div>
    <div style={{ height: '38px', borderRadius: '10px', backgroundColor: '#E0F2FE', border: '1px solid #38BDF8', color: '#0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>4 •</div>
    <div style={{ height: '38px', borderRadius: '10px', backgroundColor: '#FFF', border: '1px solid #CBD5E1', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>5</div>
  </div>
</div>
          </div>
        </section>

        {/* ================= APP FEATURES SECTION ================= */}
        <section id="features" style={{ backgroundColor: '#FFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span style={{ color: '#2563EB', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Complete System Overview</span>
              <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#0F172A', marginTop: '8px' }}>Engineered For Score Progression</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {appFeatures.map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '28px', transition: 'all 0.2s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: item.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BATCHES & FEES ================= */}
        <section id="courses" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{ color: '#2563EB', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Structured Programs</span>
            <h2 style={{ fontSize: '38px', fontWeight: '900', color: '#0F172A', marginTop: '8px' }}>Target Batches & Pricing</h2>
            <p style={{ fontSize: '14px', color: '#64748B', marginTop: '8px' }}>Includes full access to the DIY practice engine, 3D smart flashcards, and AI doubt tokens.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {courses.map((course, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', border: `2px solid ${course.accentColor}`, borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ color: course.badgeText, backgroundColor: course.badgeBg, padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '800' }}>{course.exam}</span>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748B' }}>{course.target}</span>
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#0F172A', marginBottom: '6px' }}>{course.title}</h3>
                  <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '24px', fontWeight: '600' }}>{course.subjects}</p>

                  <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '20px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '36px', fontWeight: '900', color: '#0F172A' }}>{course.price}</span>
                    <span style={{ fontSize: '14px', color: '#94A3B8', textDecoration: 'line-through', marginLeft: '10px' }}>{course.originalPrice}</span>
                    <span style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#059669', marginTop: '4px' }}>1 Year Full Access</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ fontSize: '13px', color: '#334155', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '500' }}>
                        <CheckCircle2 size={16} color={course.accentColor} /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" style={{ backgroundColor: course.accentColor, color: '#FFF', padding: '14px', borderRadius: '14px', textAlign: 'center', fontWeight: '800', fontSize: '13px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GOOGLE PLAY & APK DOWNLOAD ================= */}
        <section id="download" style={{ backgroundColor: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#DCFCE7', color: '#166534', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '800', marginBottom: '12px' }}>
                <Smartphone size={14} /> Official Android App
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#0F172A', marginTop: '8px', marginBottom: '16px' }}>Practice Anywhere on Android</h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
                Take timed mock exercises, review 3D smart flashcards, and solve doubts right on your smartphone. Available now on Android.
              </p>

              <div style={{ display: 'flex', gap: '16px' }}>
                <button onClick={() => alert('Opening Play Store...')} style={{ backgroundColor: '#0F172A', border: 'none', padding: '12px 26px', borderRadius: '16px', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 8px 20px rgba(15,23,42,0.2)' }}>
                  <span style={{ fontSize: '20px' }}>▶</span>
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '9px', color: '#94A3B8', display: 'block', textTransform: 'uppercase', letterSpacing: '0.5px' }}>GET IT ON</span>
                    <span style={{ fontSize: '14px', fontWeight: '800' }}>Google Play</span>
                  </div>
                </button>

                <button onClick={() => alert('Starting APK download...')} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', padding: '12px 26px', borderRadius: '16px', color: '#0F172A', fontWeight: '800', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <Download size={16} color="#2563EB" /> Download Direct APK
                </button>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '32px', textAlign: 'center', minWidth: '280px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Zap size={28} fill="#0284C7" />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '900', color: '#0F172A', marginBottom: '4px' }}>VoltClass App</h4>
              <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '16px', fontWeight: '600' }}>v2.4.0 • 100% Ad-Free • 24MB</p>
              <span style={{ color: '#15803D', fontSize: '12px', fontWeight: '800', backgroundColor: '#DCFCE7', padding: '6px 16px', borderRadius: '20px' }}>✓ Verified Safe</span>
            </div>
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section style={{ padding: '80px 24px', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', textAlign: 'center', color: '#0F172A', marginBottom: '8px' }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: '13px', color: '#64748B', textAlign: 'center', marginBottom: '40px' }}>Quick answers about our courses and mobile app access.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '18px 20px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: '800', fontSize: '14px', color: '#0F172A', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={18} color="#2563EB" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 20px 20px', fontSize: '13px', color: '#475569', lineHeight: '1.6', borderTop: '1px solid #F1F5F9', paddingTop: '12px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACT & SUPPORT ================= */}
        <section id="contact" style={{ backgroundColor: '#FFF', borderTop: '1px solid #E2E8F0', padding: '80px 24px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <span style={{ color: '#2563EB', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>24/7 Support</span>
              <h2 style={{ fontSize: '34px', fontWeight: '900', color: '#0F172A', marginTop: '8px', marginBottom: '16px' }}>Get in Touch with VoltClass</h2>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '32px' }}>
                Have questions about course admissions, payment methods, or app setup? Send us a message and our support team will respond shortly.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <Mail size={20} color="#2563EB" />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>support@voltclass.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <Phone size={20} color="#059669" />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>+91 98765 43210 (Mon–Sat, 10 AM–7 PM)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <MessageSquare size={20} color="#7C3AED" />
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>Instant AI Doubt Tokens Available 24/7 Inside App</span>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: '900', fontSize: '20px' }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>Message Sent!</h3>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>Thank you! Our support team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Your Full Name</label>
                    <input type="text" required placeholder="Rohan Sharma" style={{ width: '100%', backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: '#0F172A', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Email Address</label>
                    <input type="email" required placeholder="rohan@gmail.com" style={{ width: '100%', backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: '#0F172A', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Message / Query</label>
                    <textarea rows={4} required placeholder="I have a question regarding course access or mobile enrollment..." style={{ width: '100%', backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '12px', padding: '12px 16px', fontSize: '13px', color: '#0F172A', outline: 'none' }} />
                  </div>
                  <button type="submit" style={{ backgroundColor: '#2563EB', color: '#FFF', border: 'none', padding: '14px', borderRadius: '12px', fontWeight: '800', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.3)' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer style={{ padding: '32px 24px', textAlign: 'center', fontSize: '12px', color: '#64748B', borderTop: '1px solid #E2E8F0', backgroundColor: '#FFF' }}>
        © {new Date().getFullYear()} VoltClass. All rights reserved. • Charge Your Rank ⚡
      </footer>
    </div>
  );
}
