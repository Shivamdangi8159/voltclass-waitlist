'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

interface WaitlistFormProps {
  source?: string;
  onSuccess?: () => void;
}

export const WaitlistForm: React.FC<WaitlistFormProps> = ({ source = 'website', onSuccess }) => {
  const [formData, setFormData] = useState({
    full_name: '',
    exam: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const endpoint =
      process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ||
      'https://gnchqrwegnmjrkxphevb.supabase.co/functions/v1/waitlist-signup';

    const payload = { ...formData, source };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        // Trigger PostHog Event if PostHog SDK is initialized
        if (typeof window !== 'undefined' && (window as any).posthog) {
          (window as any).posthog.capture('waitlist_signup', {
            exam: formData.exam,
            source,
          });
          (window as any).posthog.identify(formData.email);
        }
        if (onSuccess) onSuccess();
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg('Network error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#2563EB]/10 border border-[#2563EB] p-6 rounded-2xl text-center animate-in fade-in">
        <CheckCircle2 className="w-10 h-10 text-[#2563EB] mx-auto mb-3" />
        <h3 className="text-lg font-bold text-[#0B0F14] mb-2">You're on the list!</h3>
        <p className="text-xs text-[#5B6472] leading-relaxed">
          We'll email you when VoltClass is ready to charge your rank. ⚡
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
      <div>
        <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          placeholder="Rohan Sharma"
          value={formData.full_name}
          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/50 focus:outline-none focus:border-[#2563EB]"
        />
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
          Target Exam *
        </label>
        <select
          required
          value={formData.exam}
          onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
          className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] focus:outline-none focus:border-[#2563EB]"
        >
          <option value="">Select Target Exam</option>
          <option value="JEE Main">JEE Main</option>
          <option value="JEE Advanced">JEE Advanced</option>
          <option value="NEET UG">NEET UG</option>
        </select>
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
          Email Address *
        </label>
        <input
          type="email"
          required
          placeholder="student@gmail.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/50 focus:outline-none focus:border-[#2563EB]"
        />
      </div>

      <div>
        <label className="text-[11px] font-bold text-[#5B6472] uppercase block mb-1">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/50 focus:outline-none focus:border-[#2563EB]"
        />
      </div>

      {errorMsg && <p className="text-xs text-rose-400 font-medium">{errorMsg}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 mt-2"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            <span>Get Early Access</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[10px] text-[#5B6472] text-center pt-1">
        We'll never spam. Only rank-boosting updates.
      </p>
    </form>
  );
};
