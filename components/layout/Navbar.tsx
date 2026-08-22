'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Help & FAQ', href: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00E5FF] to-[#00A3FF] flex items-center justify-center text-black font-extrabold text-xl shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:scale-105 transition-transform">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0B0F14] font-sans">
                Volt<span className="text-[#00E5FF]">Class</span>
              </span>
              <span className="text-[9px] font-bold text-[#5B6472] tracking-widest uppercase -mt-1">
                Charge Your Rank
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold transition-colors ${
                    isActive
                      ? 'text-[#00E5FF]'
                      : 'text-[#5B6472] hover:text-[#0B0F14]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/courses"
              className="text-xs font-bold bg-[#00E5FF] text-[#07090C] hover:bg-[#33EBFF] px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all flex items-center gap-2 hover:scale-[1.02]"
            >
              <span>Explore Batches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#5B6472] hover:text-[#0B0F14] p-2 focus:outline-none"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#00E5FF]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F8FA] border-b border-black/10 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold py-2 border-b border-black/5 transition-colors ${
                    isActive ? 'text-[#00E5FF]' : 'text-[#5B6472]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#00E5FF] text-[#07090C] font-extrabold text-xs shadow-[0_0_15px_rgba(0,229,255,0.3)]"
            >
              Explore Batches
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
