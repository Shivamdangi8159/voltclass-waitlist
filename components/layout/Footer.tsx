import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10 pt-16 pb-12 text-[#5B6472] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="VoltClass" className="w-9 h-9 rounded-xl object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-[#0B0F14]">
                  Volt<span className="text-[#2563EB]">Class</span>
                </span>
                <span className="text-[10px] font-semibold text-[#5B6472] tracking-widest uppercase -mt-1">
                  Charge Your Rank
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm text-[#5B6472]">
              VoltClass is a high-performance practice and revision engine engineered for serious NEET and JEE aspirants. Built around structured DIY practice, 3D smart flashcards, and AI doubt resolution.
            </p>
            <span className="text-xs font-bold text-[#2563EB] block tracking-wide">
              Charge Your Rank ⚡
            </span>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/courses" className="hover:text-[#2563EB] transition-colors">
                  Batches & Courses
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-[#2563EB] transition-colors">
                  DIY Practice Engine
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#2563EB] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/why-voltclass" className="hover:text-[#2563EB] transition-colors">
                  Why VoltClass
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#2563EB] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#2563EB] transition-colors">
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2563EB] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#2563EB] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#2563EB] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5B6472] gap-4">
          <span>© {new Date().getFullYear()} VoltClass. All rights reserved.</span>
          <span>Engineered for serious NEET & JEE rank progression.</span>
        </div>
      </div>
    </footer>
  );
};
