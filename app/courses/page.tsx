'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/ui/CourseCard';
import { COURSES_DATA } from '@/data/courses';
import { Search, Sparkles, BookOpen } from 'lucide-react';

export default function CoursesIndexPage() {
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesExam =
      selectedExam === 'All' ||
      (selectedExam === 'NEET' && course.exam === 'NEET') ||
      (selectedExam === 'JEE Main' && course.exam === 'JEE Main') ||
      (selectedExam === 'JEE Advanced' && course.exam === 'JEE Advanced');

    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subject.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesExam && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans selection:bg-[#2563EB] selection:text-black">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2563EB] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Learning Batches</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0B0F14] mb-4 tracking-tight">
            Courses Built Around <span className="text-[#2563EB]">Performance</span>
          </h1>
          <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
            Rigorous NEET and JEE preparation systems featuring DIY practice configurators, 3D smart flashcards, and monthly AI doubt resolution tokens.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white border border-black/10 rounded-2xl p-4 sm:p-6 mb-12 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4 shadow-xl">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#5B6472] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search courses, subjects, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-black/10 rounded-xl pl-11 pr-4 py-3 text-sm text-[#0B0F14] placeholder:text-[#5B6472]/60 focus:outline-none focus:border-[#2563EB] transition-colors"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
            {['All', 'NEET', 'JEE Main', 'JEE Advanced'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedExam(category)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                  selectedExam === category
                    ? 'bg-[#2563EB] text-[#07090C] border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                    : 'bg-white text-[#5B6472] border-black/10 hover:text-[#0B0F14] hover:border-black/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white border border-black/10 rounded-2xl p-12 text-center max-w-md mx-auto">
            <BookOpen className="w-12 h-12 text-[#2563EB] mx-auto mb-4 opacity-80" />
            <h3 className="text-lg font-bold text-[#0B0F14] mb-2">No Courses Found</h3>
            <p className="text-xs text-[#5B6472] mb-6">
              No course matches your search query or selected filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedExam('All');
                setSearchQuery('');
              }}
              className="bg-[#2563EB] text-[#07090C] text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#3B82F6] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
