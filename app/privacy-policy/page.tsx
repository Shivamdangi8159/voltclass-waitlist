import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0F14]">
      <Navbar />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4 text-sm text-[#5B6472] leading-relaxed">
          <p>VoltClass values your privacy. We collect basic information like your name, email address, phone number, and selected exam category when you enroll or sign up for early access.</p>
          <p>Your details are stored securely using Supabase database infrastructure and are never sold or shared with third parties.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
