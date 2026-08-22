'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const courses = [
  {
    title: 'Lakshya NEET Batch',
    exam: 'NEET 2026',
    target: 'Class 12th & droppers',
    price: '₹4,999',
    originalPrice: '₹8,999',
    subjects: 'Physics · Chemistry · Biology',
    features: [
      'Unlimited DIY custom practice sets',
      'Equal topic distribution algorithm',
      '3D smart flashcard deck access',
      '60 monthly AI doubt resolution tokens',
    ],
  },
  {
    title: 'Lakshya JEE Main & Advanced',
    exam: 'JEE 2026',
    target: 'Class 12th & droppers',
    price: '₹4,999',
    originalPrice: '₹8,999',
    subjects: 'Physics · Chemistry · Mathematics',
    features: [
      'Numerical & multi-statement filters',
      'Step-by-step LaTeX math solutions',
      'Topic-wise accuracy analytics',
      '60 monthly AI doubt resolution tokens',
    ],
  },
  {
    title: 'Shikhar Rank Booster',
    exam: 'JEE / NEET',
    target: 'Droppers & repeaters',
    price: '₹5,999',
    originalPrice: '₹9,999',
    subjects: 'Complete PCB / PCM',
    features: [
      'High-yield intensive worksheets',
      'Private content bucket access',
      'Speed & precision velocity trackers',
      '24/7 AI tutor follow-up support',
    ],
  },
];

export default function BatchesPage() {
  return (
    <div className="page">
      <SiteHeader />

      <main>
        <section className="hero">
          <span className="kicker">Structured programs</span>
          <h1>Batches &amp; fees</h1>
          <p>
            Every batch runs on the same VoltClass engine — pick the one built for your exam
            and timeline.
          </p>
        </section>

        <section className="grid-wrap">
          <div className="grid">
            {courses.map((course) => (
              <div className="card" key={course.title}>
                <div className="card-top">
                  <span className="exam-badge">{course.exam}</span>
                  <span className="target">{course.target}</span>
                </div>
                <h3>{course.title}</h3>
                <p className="subjects">{course.subjects}</p>

                <div className="price-row">
                  <span className="price">{course.price}</span>
                  <span className="original">{course.originalPrice}</span>
                </div>

                <ul>
                  {course.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={15} /> {f}
                    </li>
                  ))}
                </ul>

                <a href="#enroll" className="enroll">
                  Enroll now <ArrowRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="enroll" className="note">
          <h2>Not sure which batch fits?</h2>
          <p>
            Message our team and we'll match you to the right program based on your exam,
            timeline and current preparation level.
          </p>
          <a href="mailto:support@voltclass.com" className="btn-primary">
            Talk to us <ArrowRight size={15} />
          </a>
        </section>
      </main>

      <SiteFooter />

      <style jsx>{`
        .page { background: var(--bg); color: var(--text); }
        .hero { text-align: center; padding: 80px 20px 50px; max-width: 640px; margin: 0 auto; }
        .kicker { display: block; font-size: 11px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent-2); margin-bottom: 12px; }
        h1 { font-family: var(--font-display); font-weight: 560; font-size: clamp(34px, 6vw, 54px); letter-spacing: -0.02em; margin: 0 0 16px; }
        .hero p { font-size: 15px; color: var(--text-dim); line-height: 1.65; margin: 0; }

        .grid-wrap { padding: 20px 20px 90px; }
        .grid { max-width: 1080px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
        .card { background: var(--panel-2); border: 1px solid var(--border); border-radius: 20px; padding: 28px; display: flex; flex-direction: column; transition: border-color 0.25s ease, transform 0.25s ease; }
        .card:hover { border-color: rgba(91,134,255,0.4); transform: translateY(-4px); }
        .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .exam-badge { background: var(--accent-soft); color: var(--accent-2); padding: 4px 11px; border-radius: 100px; font-size: 10.5px; font-weight: 800; }
        .target { font-size: 10.5px; font-weight: 700; color: var(--text-faint); }
        .card h3 { font-family: var(--font-display); font-size: 21px; font-weight: 560; margin: 0 0 4px; }
        .subjects { font-size: 12px; color: var(--text-dim); font-weight: 600; margin: 0 0 20px; }
        .price-row { border-bottom: 1px solid var(--border-soft); padding-bottom: 18px; margin-bottom: 18px; display: flex; align-items: baseline; gap: 10px; }
        .price { font-family: var(--font-display); font-size: 32px; font-weight: 560; color: var(--text); }
        .original { font-size: 13px; color: var(--text-faint); text-decoration: line-through; }
        .card ul { list-style: none; padding: 0; margin: 0 0 26px; display: flex; flex-direction: column; gap: 11px; flex-grow: 1; }
        .card li { display: flex; align-items: center; gap: 9px; font-size: 12.5px; color: var(--text-dim); font-weight: 500; }
        .card li :global(svg) { color: var(--accent-2); flex-shrink: 0; }
        .enroll { display: flex; align-items: center; justify-content: center; gap: 8px; background: var(--accent); color: #fff; padding: 13px; border-radius: 12px; text-align: center; font-weight: 800; font-size: 13px; text-decoration: none; }

        .note { max-width: 640px; margin: 0 auto; padding: 40px 20px 100px; text-align: center; border-top: 1px solid var(--border-soft); }
        .note h2 { font-family: var(--font-display); font-size: clamp(22px, 3vw, 28px); font-weight: 560; margin: 40px 0 12px; }
        .note p { font-size: 13.5px; color: var(--text-dim); line-height: 1.65; margin: 0 0 24px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--text); color: #0a0b0e; font-weight: 800; font-size: 13px; padding: 13px 24px; border-radius: 100px; text-decoration: none; }
      `}</style>
    </div>
  );
}
