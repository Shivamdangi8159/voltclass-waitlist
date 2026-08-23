'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Mail, Send, MessageCircleQuestion, Clock } from 'lucide-react';

const CONTACT_EMAIL = 'voltclassofficial@gmail.com';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', category: 'General', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.category}] Inquiry from ${form.name || 'VoltClass user'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCategory: ${form.category}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans">
      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <MessageCircleQuestion className="w-3.5 h-3.5" /> Contact &amp; support
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Talk to <span className="text-[#2563EB]">VoltClass</span>
          </h1>
          <p className="text-[#5B6472] text-sm leading-relaxed">
            Questions about a batch, a payment, or something in the app? Send us a message —
            we read every one.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: direct contact info */}
          <div className="md:col-span-2 space-y-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 bg-[#0B0F14] text-white rounded-2xl p-6 hover:bg-[#1a2028] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-[#2563EB] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider block mb-0.5">
                  Email us directly
                </span>
                <span className="text-sm font-bold text-white break-all">{CONTACT_EMAIL}</span>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-[#F6F8FA] border border-black/10 rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[#2563EB]/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#5B6472] uppercase tracking-wider block mb-0.5">
                  Response time
                </span>
                <span className="text-sm font-bold text-[#0B0F14]">Usually within 24–48 hours</span>
              </div>
            </div>
          </div>

          {/* Right: inquiry form */}
          <div className="md:col-span-3 bg-white border border-black/10 rounded-2xl p-7">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rohan Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/50 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@gmail.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/50 focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
                  What&apos;s this about?
                </label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] focus:outline-none focus:border-[#2563EB]"
                >
                  <option>General</option>
                  <option>Batches & Fees</option>
                  <option>Payment Issue</option>
                  <option>Technical Support</option>
                  <option>Feedback / Suggestion</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what's up..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/50 focus:outline-none focus:border-[#2563EB] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 mt-2"
              >
                <span>Send via email</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-[#5B6472] text-center pt-1">
                This opens your email app with the message pre-filled to {CONTACT_EMAIL}.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
