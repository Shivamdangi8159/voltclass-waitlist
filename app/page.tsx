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
  MessageSquare
} from 'lucide-react';

export default function SingleLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const courses = [
    {
      title: 'Lakshya NEET Batch',
      exam: 'NEET',
      target: 'Class 12th & Droppers',
      price: '₹4,999',
      originalPrice: '₹8,999',
      subjects: 'Physics, Chemistry, Biology',
      features: [
        'Unlimited DIY Custom Practice Sets',
        'Balanced Equal Topic Distribution',
        '3D Smart Flashcard Deck Access',
        '60 Monthly AI Doubt Resolution Tokens',
      ],
      badge: 'Most Popular',
      accentColor: '#00E676',
    },
    {
      title: 'Lakshya JEE Main & Advanced',
      exam: 'JEE',
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
      accentColor: '#00E5FF',
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
      accentColor: '#A855F7',
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
    <div style={{ backgroundColor: '#07090C', color: '#F5F7FA', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(7,9,12,0.95)', borderBottom: '1 border-white/10', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #00E5FF, #00A3FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: '900', fontSize: '20px' }}>
              ⚡
            </div>
            <div>
              <span style={{ fontSize: '22px', fontWeight: '900', color: '#FFF' }}>Volt<span style={{ color: '#00E5FF' }}>Class</span></span>
              <span style={{ display: 'block', fontSize: '9px', fontWeight: '700', color: '#9AA4B2', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '-4px' }}>Charge Your Rank</span>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '24px', fontSize: '13px', fontWeight: '600' }}>
            <a href="#about" style={{ color: '#9AA4B2', textDecoration: 'none' }}>App Details</a>
            <a href="#features" style={{ color: '#9AA4B2', textDecoration: 'none' }}>Features</a>
            <a href="#courses" style={{ color: '#9AA4B2', textDecoration: 'none' }}>Batches & Fees</a>
            <a href="#download" style={{ color: '#9AA4B2', textDecoration: 'none' }}>Download App</a>
            <a href="#contact" style={{ color: '#9AA4B2', textDecoration: 'none' }}>Contact</a>
          </nav>

          <a href="#download" style={{ backgroundColor: '#00E5FF', color: '#07090C', padding: '10px 20px', borderRadius: '12px', fontWeight: '800', fontSize: '12px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Smartphone size={16} /> Get Mobile App
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" style={{ padding: '80px 24px', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', color: '#00E5FF', fontWeight: '700', marginBottom: '24px' }}>
          <Zap size={14} /> High-Performance NEET & JEE Practice Engine
        </div>

        <h1 style={{ fontSize: '48px', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', color: '#FFF' }}>
          Prepare Smarter. Practice Harder. <br />
          <span style={{ color: '#00E5FF' }}>Charge Your Rank.</span>
        </h1>

        <p style={{ color: '#9AA4B2', fontSize: '16px', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto 32px' }}>
          A pure practice engine that plugs into your existing preparation and drives your score upward. Custom DIY exercise configurator, 3D smart flashcards, live velocity tracking, and instant AI doubt resolution.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
          <a href="#download" style={{ backgroundColor: '#00E5FF', color: '#07090C', padding: '14px 28px', borderRadius: '12px', fontWeight: '800', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Smartphone size={18} /> Get App on Android
          </a>
          <a href="#courses" style={{ backgroundColor: '#11161D', color: '#FFF', border: '1px solid rgba(255,255,255,0.15)', padding: '14px 28px', borderRadius: '12px', fontWeight: '700', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            View Batches & Fees <ArrowRight size={16} color="#00E5FF" />
          </a>
        </div>

        {/* MOCKUP CARD */}
        <div style={{ backgroundColor: '#11161D', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '24px', padding: '24px', textAlign: 'left', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '16px', marginBottom: '20px' }}>
            <span style={{ fontSize: '13px', color: '#9AA4B2', fontWeight: '600' }}>VoltClass App Engine v2.4</span>
            <span style={{ color: '#00E5FF', fontSize: '12px', fontWeight: '700', backgroundColor: 'rgba(0,229,255,0.1)', padding: '4px 12px', borderRadius: '12px' }}>★ 4.9 Student Rating</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#07090C', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '10px', color: '#9AA4B2', display: 'block', fontWeight: '700' }}>QUESTIONS SOLVED</span>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#FFF' }}>1,420+</span>
            </div>
            <div style={{ backgroundColor: '#07090C', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '10px', color: '#9AA4B2', display: 'block', fontWeight: '700' }}>ACCURACY LEVEL</span>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#00E676' }}>88.4%</span>
            </div>
            <div style={{ backgroundColor: '#07090C', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '10px', color: '#9AA4B2', display: 'block', fontWeight: '700' }}>DOUBT TOKENS</span>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#00E5FF' }}>52 / 60</span>
            </div>
            <div style={{ backgroundColor: '#07090C', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <span style={{ fontSize: '10px', color: '#9AA4B2', display: 'block', fontWeight: '700' }}>TARGET RANK</span>
              <span style={{ fontSize: '24px', fontWeight: '900', color: '#FFB300' }}>Top 500</span>
            </div>
          </div>

          {/* 5 COLUMN MATRIX */}
          <div style={{ backgroundColor: '#07090C', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#00E5FF', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Live Question Status Matrix (5 per row)</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
              <div style={{ height: '36px', borderRadius: '10px', backgroundColor: 'rgba(0,230,118,0.15)', border: '1px solid #00E676', color: '#00E676', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>1 ✓</div>
              <div style={{ height: '36px', borderRadius: '10px', backgroundColor: 'rgba(0,230,118,0.15)', border: '1px solid #00E676', color: '#00E676', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>2 ✓</div>
              <div style={{ height: '36px', borderRadius: '10px', backgroundColor: 'rgba(255,82,82,0.15)', border: '1px solid #FF5252', color: '#FF5252', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>3 ✗</div>
              <div style={{ height: '36px', borderRadius: '10px', backgroundColor: 'rgba(0,229,255,0.15)', border: '1px solid #00E5FF', color: '#00E5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>4 •</div>
              <div style={{ height: '36px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#9AA4B2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '13px' }}>5</div>
            </div>
          </div>
        </div>
      </section>

      {/* BATCHES & FEES */}
      <section id="courses" style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ color: '#00E5FF', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Structured Programs</span>
          <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#FFF', marginTop: '8px' }}>Target Batches & Pricing</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {courses.map((course, idx) => (
            <div key={idx} style={{ backgroundColor: '#11161D', border: `1px solid ${course.accentColor}40`, borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: course.accentColor, backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '800' }}>{course.exam}</span>
                <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#FFF', marginTop: '16px', marginBottom: '8px' }}>{course.title}</h3>
                <p style={{ fontSize: '12px', color: '#9AA4B2', marginBottom: '24px' }}>{course.subjects}</p>

                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '32px', fontWeight: '900', color: '#FFF' }}>{course.price}</span>
                  <span style={{ fontSize: '14px', color: '#9AA4B2', textDecoration: 'line-through', marginLeft: '8px' }}>{course.originalPrice}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {course.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ fontSize: '13px', color: '#F5F7FA', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} color={course.accentColor} /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact" style={{ backgroundColor: course.accentColor, color: '#000', padding: '14px', borderRadius: '12px', textAlign: 'center', fontWeight: '800', fontSize: '13px', textDecoration: 'none' }}>
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section id="download" style={{ backgroundColor: '#0D1117', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px' }}>
          <div>
            <span style={{ color: '#00E676', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase' }}>Official Mobile App</span>
            <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#FFF', marginTop: '8px', marginBottom: '16px' }}>Practice Anywhere on Android</h2>
            <p style={{ color: '#9AA4B2', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px' }}>
              Take timed mock exercises, review 3D smart flashcards, and solve doubts right on your smartphone. Available now on Android.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button onClick={() => alert('Opening Play Store...')} style={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 24px', borderRadius: '16px', color: '#FFF', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>▶</span>
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '9px', color: '#9AA4B2', display: 'block' }}>GET IT ON</span>
                  <span style={{ fontSize: '14px', fontWeight: '800' }}>Google Play</span>
                </div>
              </button>

              <button onClick={() => alert('Starting APK download...')} style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '16px', color: '#FFF', fontWeight: '700', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={16} color="#00E5FF" /> Download Direct APK
              </button>
            </div>
          </div>

          <div style={{ backgroundColor: '#07090C', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '32px', textAlign: 'center', minWidth: '280px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(0,229,255,0.1)', color: '#00E5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Zap size={28} />
            </div>
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#FFF', marginBottom: '4px' }}>VoltClass App</h4>
            <p style={{ fontSize: '12px', color: '#9AA4B2', marginBottom: '16px' }}>v2.4.0 • 100% Ad-Free • 24MB</p>
            <span style={{ color: '#00E676', fontSize: '12px', fontWeight: '700', backgroundColor: 'rgba(0,230,118,0.1)', padding: '6px 16px', borderRadius: '20px' }}>✓ Verified Safe</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 24px', textAlign: 'center', fontSize: '12px', color: '#9AA4B2', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        © {new Date().getFullYear()} VoltClass. All rights reserved. • Charge Your Rank ⚡
      </footer>
    </div>
  );
}
