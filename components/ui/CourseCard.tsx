import React from 'react';
import Link from 'next/link';
import { CourseData } from '@/types';
import { ArrowRight, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const CourseCard: React.FC<{ course: CourseData }> = ({ course }) => {
  const isNeet = course.exam === 'NEET';

  return (
    <div className="bg-white border border-black/10 hover:border-[#00E5FF]/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,229,255,0.1)] group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isNeet
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
            }`}
          >
            {course.exam}
          </span>
          <span className="text-xs font-semibold text-[#5B6472] bg-black/5 px-2.5 py-1 rounded-md border border-black/5">
            {course.targetClass}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#0B0F14] group-hover:text-[#00E5FF] transition-colors mb-2">
          {course.title}
        </h3>

        <p className="text-sm text-[#5B6472] line-clamp-2 mb-6 leading-relaxed">
          {course.description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs text-[#5B6472]">
            <BookOpen className="w-4 h-4 text-[#00E5FF]" />
            <span>Subjects: {course.subject.join(', ')}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#5B6472]">
            <Layers className="w-4 h-4 text-[#00E5FF]" />
            <span>{course.chapters.length} Core Modules</span>
          </div>
        </div>

        <div className="border-t border-black/5 pt-4 mb-6 space-y-2">
          {course.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#0B0F14]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00A3FF] shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-black/10 pt-4 flex items-center justify-between mt-auto">
        <div>
          <span className="text-xs text-[#5B6472] block">Complete Access</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[#0B0F14]">₹{course.price}</span>
            <span className="text-xs text-[#5B6472] line-through">₹{course.originalPrice}</span>
          </div>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="bg-black/5 hover:bg-[#00E5FF] hover:text-black text-[#0B0F14] font-bold text-xs px-4 py-2.5 rounded-lg transition-all flex items-center gap-1.5"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
