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
      accentColor: '#2563EB',
      badgeBg: '#EFF6FF',
      badgeText: '#1D4ED8',
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
      accentColor: '#7C3AED',
      badgeBg: '#F3E8FF',
      badgeText: '#6B21A8',
    },
  ];

  const appFeatures = [
    {
      icon: <Sliders size={22} color="#2563EB" />,
      title: 'DIY Practice Engine',
      desc: 'Pick specific subjects, chapters, and topics. Filter by question types with equal topic distribution.',
      bgColor: '#EFF6FF',
    },
    {
      icon: <Layers size={22} color="#059669" />,
      title: '3D Smart Flashcards',
      desc: 'Interactive flip cards with formula highlights, category badges, and LaTeX math equations.',
      bgColor: '#ECFDF5',
    },
    {
      icon: <Brain size={22} color="#7C3AED" />,
      title: 'AI Doubt Resolution',
      desc: '24/7 instant step-by-step doubt explanations and follow-up assistance in English or Hinglish.',
      bgColor: '#F3E8FF',
    },
    {
      icon: <FileText size={22} color="#D97706" />,
      title: 'Daily Practice & PYQs',
      desc: 'Topic-wise practice sheets, chapter notes, and previous year exam questions with live solutions.',
      bgColor: '#FEF3C7',
    },
    {
      icon: <BarChart2 size={22} color="#E11D48" />,
      title: 'Deep Speed Analytics',
      desc: 'Interactive 5-column question matrix, timer tracking, and topic-wise accuracy analytics.',
      bgColor: '#FFE4E6',
    },
    {
      icon: <Sparkles size={22} color="#0284C7" />,
      title: 'Smart Revision Engine',
      desc: 'AI weak area tracking that automatically reorganizes missed concepts into focused revision sets.',
      bgColor: '#E0F2FE',
    },
  ];

  const faqs = [
    {
      q: 'How does the VoltClass mobile app work?',
      a: 'VoltClass is a practice and rank-boosting platform. Configure custom question sets, review 3D flashcards, track speed, and resolve doubts instantly using our AI engine.',
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
      a: 'Every course includes 60 monthly AI tokens that allow you to capture or type any question to receive instant step-by-step LaTeX explanations.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(255, 255, 255, 0.95)', borderBottom: '1px solid #E2E8F0', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'linear-gradient(135deg, #2563EB, #0284C7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: '900', fontSize: '18px' }}>
              ⚡
            </div>
            <div>
              <span style={{ fontSize: '20px', fontWeight: '900', color: '#0F172A', letterSpacing: '-0.5px' }}>Volt<span style={{ color: '#2563EB' }}>Class</span></span>
              <span style={{ display: 'block', fontSize: '8px', fontWeight: '800', color: '#64748B', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '-3px' }}>Charge Your Rank</span>
            </div>
          </a>

          <nav style={{ display: 'flex', gap: '20px', fontSize: '13px', fontWeight: '700' }}>
            <a href="#about" style={{ color: '#475569', textDecoration: 'none' }}>App Details</a>
            <a href="#features" style={{ color: '#475569', textDecoration: 'none' }}>Features</a>
            <a href="#courses" style={{ color: '#475569', textDecoration: 'none' }}>Batches & Fees</a>
            <a href="#download" style={{ color: '#475569', textDecoration: 'none' }}>Download App</a>
            <a href="#contact" style={{ color: '#475569', textDecoration: 'none' }}>Contact</a>
          </nav>

          <a href="#download" style={{ backgroundColor: '#2563EB', color: '#FFF', padding: '9px 18px', borderRadius: '10px', fontWeight: '800', fontSize: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Smartphone size={15} /> Get Mobile App
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="about" style={{ padding: '50px 20px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', padding: '5px 14px', borderRadius: '20px', fontSize: '11px', color: '#1D4ED8', fontWeight: '800', marginBottom: '20px' }}>
            <Zap size={13} fill="#1D4ED8" /> High-Performance NEET & JEE Practice Engine
          </div>

          <h1 style={{ fontSize: '42px', fontWeight: '900', lineHeight: '1.15', marginBottom: '16px', color: '#0F172A', letterSpacing: '-0.5px' }}>
            Prepare Smarter. Practice Harder. <br />
            <span style={{ color: '#2563EB' }}>Charge Your Rank.</span>
          </h1>

          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6', maxWidth: '680px', margin: '0 auto 28px', fontWeight: '500' }}>
            A pure practice engine that plugs into your existing preparation and drives your score upward. Custom DIY exercise configurator, 3D smart flashcards, live velocity tracking, and instant AI doubt resolution.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <a href="#download" style={{ backgroundColor: '#2563EB', color: '#FFF', padding: '13px 26px', borderRadius: '12px', fontWeight: '800', fontSize: '13px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Smartphone size={16} /> Get App on Android
            </a>
            <a href="#courses" style={{ backgroundColor: '#FFF', color: '#0F172A', border: '1px solid #CBD5E1', padding: '13px 26px', borderRadius: '12px', fontWeight: '800', fontSize: '13px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              View Batches & Fees <ArrowRight size={15} color="#2563EB" />
            </a>
          </div>

          {/* DASHBOARD PREVIEW CARD */}
          <div style={{ backgroundColor: '#FFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '20px', textAlign: 'left', boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #F1F5F9', paddingBottom: '12px', marginBottom: '16px' }}>
              <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '700' }}>VoltClass App Engine v2.4</span>
              <span style={{ color: '#0284C7', fontSize: '11px', fontWeight: '800', backgroundColor: '#E0F2FE', padding: '3px 10px', borderRadius: '10px' }}>★ 4.9 Student Rating</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block', fontWeight: '800' }}>QUESTIONS SOLVED</span>
                <span style={{ fontSize: '20px', fontWeight: '900', color: '#0F172A' }}>1,420+</span>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block', fontWeight: '800' }}>ACCURACY LEVEL</span>
                <span style={{ fontSize: '20px', fontWeight: '900', color: '#059669' }}>88.4%</span>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block', fontWeight: '800' }}>DOUBT TOKENS</span>
                <span style={{ fontSize: '20px', fontWeight: '900', color: '#2563EB' }}>52 / 60</span>
              </div>
              <div style={{ backgroundColor: '#F8FAFC', padding: '12px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '9px', color: '#64748B', display: 'block', fontWeight: '800' }}>TARGET RANK</span>
                <span style={{ fontSize: '20px', fontWeight: '900', color: '#D97706' }}>Top 500</span>
              </div>
            </div>

            {/* 5 COLUMN MATRIX */}
            <div style={{ backgroundColor: '#F8FAFC', padding: '16px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#1D4ED8', textTransform: 'uppercase' }}>Live Question Status Matrix (5 per row)</span>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#059669' }}>Timer: 01:45</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                <div style={{ height: '34px', borderRadius: '8px', backgroundColor: '#DCFCE7', border: '1px solid #86EFAC', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' }}>1 ✓</div>
                <div style={{ height: '34px', borderRadius: '8px', backgroundColor: '#DCFCE7', border: '1px solid #86EFAC', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' }}>2 ✓</div>
                <div style={{ height: '34px', borderRadius: '8px', backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', color: '#991B1B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' }}>3 ✗</div>
                <div style={{ height: '34px', borderRadius: '8px', backgroundColor: '#E0F2FE', border: '1px solid #38BDF8', color: '#0369A1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' }}>4 •</div>
                <div style={{ height: '34px', borderRadius: '8px', backgroundColor: '#FFF', border: '1px solid #CBD5E1', color: '#64748B', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '12px' }}>5</div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" style={{ backgroundColor: '#FFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span style={{ color: '#2563EB', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Complete System Overview</span>
              <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0F172A', marginTop: '6px' }}>Engineered For Score Progression</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {appFeatures.map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '22px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: item.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BATCHES & FEES */}
        <section id="courses" style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ color: '#2563EB', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Structured Programs</span>
            <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0F172A', marginTop: '6px' }}>Target Batches & Pricing</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {courses.map((course, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', border: `2px solid ${course.accentColor}`, borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ color: course.badgeText, backgroundColor: course.badgeBg, padding: '3px 10px', borderRadius: '10px', fontSize: '10px', fontWeight: '800' }}>{course.exam}</span>
                    <span style={{ fontSize: '10px', fontWeight: '700', color: '#64748B' }}>{course.target}</span>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#0F172A', marginBottom: '4px' }}>{course.title}</h3>
                  <p style={{ fontSize: '11px', color: '#64748B', marginBottom: '18px', fontWeight: '600' }}>{course.subjects}</p>

                  <div style={{ borderBottom: '1px solid #F1F5F9', paddingBottom: '16px', marginBottom: '18px' }}>
                    <span style={{ fontSize: '30px', fontWeight: '900', color: '#0F172A' }}>{course.price}</span>
                    <span style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'line-through', marginLeft: '8px' }}>{course.originalPrice}</span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0' }}>
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ fontSize: '12px', color: '#334155', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
                        <CheckCircle2 size={15} color={course.accentColor} /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" style={{ backgroundColor: course.accentColor, color: '#FFF', padding: '12px', borderRadius: '12px', textAlign: 'center', fontWeight: '800', fontSize: '12px', textDecoration: 'none' }}>
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* GOOGLE PLAY DOWNLOAD */}
        <section id="download" style={{ backgroundColor: '#EFF6FF', borderTop: '1px solid #DBEAFE', borderBottom: '1px solid #DBEAFE', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', backgroundColor: '#DCFCE7', color: '#166534', padding: '3px 10px', borderRadius: '10px', fontSize: '10px', fontWeight: '800', marginBottom: '10px' }}>
                <Smartphone size={13} /> Official Android App
              </div>
              <h2 style={{ fontSize: '30px', fontWeight: '900', color: '#0F172A', marginBottom: '12px' }}>Practice Anywhere on Android</h2>
              <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.5', marginBottom: '24px' }}>
                Take timed mock exercises, review 3D smart flashcards, and solve doubts right on your smartphone.
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button onClick={() => alert('Opening Play Store...')} style={{ backgroundColor: '#0F172A', border: 'none', padding: '10px 20px', borderRadius: '14px', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px' }}>▶</span>
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '8px', color: '#94A3B8', display: 'block', textTransform: 'uppercase' }}>GET IT ON</span>
                    <span style={{ fontSize: '13px', fontWeight: '800' }}>Google Play</span>
                  </div>
                </button>

                <button onClick={() => alert('Starting APK download...')} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', padding: '10px 20px', borderRadius: '14px', color: '#0F172A', fontWeight: '800', fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Download size={15} color="#2563EB" /> Direct APK
                </button>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '24px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#E0F2FE', color: '#0284C7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Zap size={24} fill="#0284C7" />
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#0F172A', marginBottom: '2px' }}>VoltClass App</h4>
              <p style={{ fontSize: '11px', color: '#64748B', marginBottom: '12px', fontWeight: '600' }}>v2.4.0 • 100% Ad-Free • 24MB</p>
              <span style={{ color: '#15803D', fontSize: '11px', fontWeight: '800', backgroundColor: '#DCFCE7', padding: '5px 14px', borderRadius: '16px' }}>✓ Verified Safe</span>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section style={{ padding: '60px 20px', maxWidth: '750px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '900', textAlign: 'center', color: '#0F172A', marginBottom: '6px' }}>Frequently Asked Questions</h2>
          <p style={{ fontSize: '12px', color: '#64748B', textAlign: 'center', marginBottom: '32px' }}>Quick answers about our courses and mobile access.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #E2E8F0', borderRadius: '14px', overflow: 'hidden' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '16px', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: '800', fontSize: '13px', color: '#0F172A', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={16} color="#2563EB" style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 16px 16px', fontSize: '12px', color: '#475569', lineHeight: '1.5', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT & SUPPORT */}
        <section id="contact" style={{ backgroundColor: '#FFF', borderTop: '1px solid #E2E8F0', padding: '60px 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            <div>
              <span style={{ color: '#2563EB', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>24/7 Support</span>
              <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0F172A', marginTop: '6px', marginBottom: '12px' }}>Get in Touch</h2>
              <p style={{ fontSize: '12px', color: '#64748B', lineHeight: '1.5', marginBottom: '24px' }}>
                Have questions about course admissions, payment methods, or app setup? Send us a message and our support team will respond.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <Mail size={18} color="#2563EB" />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#334155' }}>support@voltclass.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <Phone size={18} color="#059669" />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#334155' }}>+91 98765 43210</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  <MessageSquare size={18} color="#7C3AED" />
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#334155' }}>Instant AI Doubt Tokens in App</span>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '24px' }}>
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontWeight: '900', fontSize: '18px' }}>
                    ✓
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginBottom: '4px' }}>Message Sent!</h3>
                  <p style={{ fontSize: '12px', color: '#64748B' }}>We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '10px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Your Full Name</label>
                    <input type="text" required placeholder="Rohan Sharma" style={{ width: '100%', backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '10px 14px', fontSize: '12px', color: '#0F172A', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Email Address</label>
                    <input type="email" required placeholder="rohan@gmail.com" style={{ width: '100%', backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '10px 14px', fontSize: '12px', color: '#0F172A', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Message / Query</label>
                    <textarea rows={3} required placeholder="I have a question regarding enrollment..." style={{ width: '100%', backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '10px', padding: '10px 14px', fontSize: '12px', color: '#0F172A', outline: 'none' }} />
                  </div>
                  <button type="submit" style={{ backgroundColor: '#2563EB', color: '#FFF', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: '800', fontSize: '12px', cursor: 'pointer' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{ padding: '24px', textAlign: 'center', fontSize: '11px', color: '#64748B', borderTop: '1px solid #E2E8F0', backgroundColor: '#FFF' }}>
        © {new Date().getFullYear()} VoltClass. All rights reserved. • Charge Your Rank ⚡
      </footer>
    </div>
  );
}
