'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/types';
import { ChevronDown } from 'lucide-react';

export const FAQAccordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-[#11161D] border border-white/10 rounded-xl overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
            >
              <span className="text-sm font-bold text-white">{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#00E5FF] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-xs text-[#9AA4B2] leading-relaxed border-t border-white/5 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
