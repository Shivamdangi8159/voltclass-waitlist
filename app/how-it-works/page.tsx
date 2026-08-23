import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0F14]">
      <Navbar />
      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-4 text-center">How <span className="text-[#2563EB]">VoltClass</span> Works</h1>
        <p className="text-center text-[#5B6472] mb-12">The 4-step system for continuous score improvement.</p>

        <div className="space-y-6">
          {[
            { step: '01', title: 'Pick Subject & Topics', desc: 'Select any combination of chapters from Physics, Chemistry, Biology, or Math.' },
            { step: '02', title: 'Equal-Distribution Practice', desc: 'Our algorithm balances question counts across all selected topics so no topic is left behind.' },
            { step: '03', title: 'Live Test Engine', desc: 'Solve questions with real timer constraints, LaTeX equations, and toggleable options.' },
            { step: '04', title: 'Analyze & Resolve', desc: 'Review topic accuracy bars and use your 60 monthly AI Doubt tokens for step-by-step explanations.' },
          ].map((item) => (
            <div key={item.step} className="bg-white border border-black/10 p-6 rounded-2xl flex gap-6 items-start">
              <span className="text-3xl font-black text-[#2563EB]">{item.step}</span>
              <div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-[#5B6472] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
