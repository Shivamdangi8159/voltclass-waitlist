'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { FAQS_DATA } from '@/data/faqs';
import { Search, HelpCircle, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'General', 'Courses', 'Practice', 'Tests', 'Payments'];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2563EB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Help & Support Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B0F14] mb-4 tracking-tight">
            Frequently Asked <span className="text-[#2563EB]">Questions</span>
          </h1>
          <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
            Have questions about our DIY exercise configurator, 3D flashcards, AI doubt tokens, or enrollment? Find your answers below.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-6 mb-10 space-y-4 shadow-xl">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#5B6472] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-black/10 rounded-xl pl-11 pr-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/60 focus:outline-none focus:border-[#2563EB] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                  selectedCategory === category
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                    : 'bg-white text-[#5B6472] border-black/10 hover:text-[#0B0F14] hover:border-black/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion FAQ List */}
        {filteredFaqs.length > 0 ? (
          <div className="mb-16">
            <FAQAccordion items={filteredFaqs} />
          </div>
        ) : (
          <div className="bg-white border border-black/10 rounded-2xl p-12 text-center my-8">
            <HelpCircle className="w-12 h-12 text-[#2563EB] mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-bold text-[#0B0F14] mb-2">No Matching Questions Found</h3>
            <p className="text-xs text-[#5B6472] mb-6">
              We couldn't find any questions matching "{searchQuery}". Try searching for something else or browse all categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-[#2563EB] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#3B82F6] transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Support Help Banner */}
        <div className="bg-gradient-to-r from-[#11161D] via-[#0D1117] to-[#11161D] border border-[#2563EB]/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(37,99,235,0.05)]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B0F14]">Still have questions?</h3>
              <p className="text-xs text-[#5B6472] mt-1">
                Our support team is ready to help you with course details, technical issues, or access issues.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-[#2563EB] text-white font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:bg-[#3B82F6] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Contact Support</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
