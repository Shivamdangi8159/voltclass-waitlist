'use client';

import React from 'react';
import { Zap, Clock, CheckCircle, Brain, Target, BarChart2, BookOpen, Sparkles } from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="bg-[#F6F8FA] border border-black/10 rounded-2xl p-5 sm:p-6 shadow-2xl overflow-hidden relative font-sans text-left">
      {/* App Bar Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#1D4ED8] p-0.5">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xs font-bold text-[#0B0F14]">
              RS
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-[#0B0F14]">Rohan Sharma</h4>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-400/30">
                PRO
              </span>
            </div>
            <p className="text-xs text-[#5B6472]">Target: NEET 2026 • Class 12th</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#5B6472] hidden sm:inline">Daily Status:</span>
          <span className="text-xs font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-md border border-[#2563EB]/20">
            Active
          </span>
        </div>
      </div>

      {/* Top 3 Quick Stats Widgets */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white border border-black/5 rounded-xl p-3 text-center">
          <span className="text-[11px] text-[#5B6472] block mb-1">Questions Solved</span>
          <span className="text-xl font-black text-[#0B0F14]">1,420</span>
        </div>
        <div className="bg-white border border-black/5 rounded-xl p-3 text-center">
          <span className="text-[11px] text-[#5B6472] block mb-1">Overall Accuracy</span>
          <span className="text-xl font-black text-[#1D4ED8]">84.2%</span>
        </div>
        <div className="bg-white border border-black/5 rounded-xl p-3 text-center">
          <span className="text-[11px] text-[#5B6472] block mb-1">Doubt Tokens</span>
          <span className="text-xl font-black text-[#2563EB]">52 / 60</span>
        </div>
      </div>

      {/* Live Quiz Preview - DIY Practice Engine */}
      <div className="bg-white border border-black/10 rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#2563EB]" />
            <span className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider">
              DIY Live Test • Physics (Electrodynamics)
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
            <Clock className="w-3.5 h-3.5" />
            <span>01:45 / Q.04</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#0B0F14] font-medium mb-4 leading-relaxed">
          Q4. A parallel plate capacitor with plate area A and separation d is charged to potential difference V. What is the energy density stored in the electric field?
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          <div className="bg-black/5 border border-black/10 p-2.5 rounded-lg text-xs text-[#5B6472] flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-black/5 text-[#0B0F14] flex items-center justify-center font-bold text-[10px]">A</span>
            ½ ε₀ E²
          </div>
          <div className="bg-[#2563EB]/10 border border-[#2563EB] p-2.5 rounded-lg text-xs text-[#0B0F14] font-semibold flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#2563EB] text-black flex items-center justify-center font-bold text-[10px]">B</span>
            ½ ε₀ E² · Ad (Selected)
          </div>
        </div>

        {/* 5-Column Question Status Matrix */}
        <div>
          <span className="text-[10px] text-[#5B6472] uppercase font-bold block mb-2">
            Question Status Matrix (5 per row)
          </span>
          <div className="grid grid-cols-5 gap-2">
            <div className="h-7 rounded-lg bg-[#1D4ED8]/20 border border-[#1D4ED8] text-[#1D4ED8] flex items-center justify-center text-xs font-bold">1 ✓</div>
            <div className="h-7 rounded-lg bg-[#1D4ED8]/20 border border-[#1D4ED8] text-[#1D4ED8] flex items-center justify-center text-xs font-bold">2 ✓</div>
            <div className="h-7 rounded-lg bg-rose-500/20 border border-rose-500 text-rose-400 flex items-center justify-center text-xs font-bold">3 ✗</div>
            <div className="h-7 rounded-lg bg-[#2563EB]/20 border border-[#2563EB] text-[#2563EB] flex items-center justify-center text-xs font-bold animate-pulse">4 •</div>
            <div className="h-7 rounded-lg bg-black/5 border border-black/10 text-[#5B6472] flex items-center justify-center text-xs font-bold">5</div>
          </div>
        </div>
      </div>

      {/* Deep Analytics Progress Track */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-[#5B6472]">Physics Revision Progress</span>
          <span className="text-[#2563EB] font-bold">78% Completed</span>
        </div>
        <div className="w-full bg-black/5 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] h-full w-[78%]" />
        </div>
      </div>
    </div>
  );
};
