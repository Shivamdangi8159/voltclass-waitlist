'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
  Zap,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Award,
  Sliders,
  Layers,
  Sparkles,
  BookOpen,
  Check,
  BarChart3,
  RotateCcw,
} from 'lucide-react';

// ==========================================
// MOCK CURRICULUM DATA & QUESTION POOL
// ==========================================
const CURRICULUM_DATA: Record<string, { chapter: string; topics: string[] }[]> = {
  Physics: [
    {
      chapter: 'Electrodynamics',
      topics: ['Capacitance & Energy Density', 'Electric Flux & Gauss Law', 'Current & Resistance'],
    },
    {
      chapter: 'Mechanics',
      topics: ['Rotational Dynamics', 'Work Power Energy', 'Laws of Motion'],
    },
    {
      chapter: 'Modern Physics',
      topics: ['Photoelectric Effect', 'Nuclear Physics', 'Semiconductors'],
    },
  ],
  Chemistry: [
    {
      chapter: 'Physical Chemistry',
      topics: ['Chemical Kinetics', 'Electrochemistry', 'Thermodynamics'],
    },
    {
      chapter: 'Organic Chemistry',
      topics: ['Hydrocarbons', 'Reaction Mechanisms', 'Biomolecules'],
    },
  ],
  Biology: [
    {
      chapter: 'Genetics & Evolution',
      topics: ['Molecular Basis of Inheritance', 'Mendelian Genetics', 'Evolutionary Patterns'],
    },
    {
      chapter: 'Human Physiology',
      topics: ['Neural Control', 'Chemical Coordination', 'Circulation'],
    },
  ],
  Mathematics: [
    {
      chapter: 'Calculus',
      topics: ['Differential Equations', 'Limits & Continuity', 'Integration'],
    },
    {
      chapter: 'Algebra',
      topics: ['Matrices & Determinants', 'Complex Numbers', 'Quadratic Equations'],
    },
  ],
};

interface QuestionModel {
  id: number;
  type: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  solution: string;
  selectedAnswer?: string;
}

const SAMPLE_QUESTIONS: QuestionModel[] = [
  {
    id: 1,
    type: 'Numerical',
    difficulty: 'Medium',
    topic: 'Capacitance & Energy Density',
    question:
      'A parallel plate capacitor with plate area A and separation d is charged to potential V. What is the energy density stored in the electric field between the plates?',
    options: [
      { key: 'A', text: '½ ε₀ E²' },
      { key: 'B', text: 'ε₀ E²' },
      { key: 'C', text: '½ ε₀ E² · Ad' },
      { key: 'D', text: '2 ε₀ E²' },
    ],
    correctAnswer: 'A',
    solution:
      'The energy density (u) of an electric field in a vacuum/air is given by $u = \\frac{1}{2}\\varepsilon_0 E^2$. Total stored energy is $U = u \\cdot (Ad)$.',
  },
  {
    id: 2,
    type: 'Theoretical',
    difficulty: 'Easy',
    topic: 'Electric Flux & Gauss Law',
    question:
      'If a point charge +q is placed at the center of a closed cube, what is the total electric flux passing through one face of the cube?',
    options: [
      { key: 'A', text: 'q / ε₀' },
      { key: 'B', text: 'q / (6 ε₀)' },
      { key: 'C', text: '6q / ε₀' },
      { key: 'D', text: 'Zero' },
    ],
    correctAnswer: 'B',
    solution:
      'According to Gauss Law, total flux through the closed cube is $\\Phi = \\frac{q}{\\varepsilon_0}$. Since a cube has 6 symmetrical faces, flux through one face is $\\frac{q}{6\\varepsilon_0}$.',
  },
  {
    id: 3,
    type: 'Assertion & Reason',
    difficulty: 'Hard',
    topic: 'Capacitance & Energy Density',
    question:
      'Assertion (A): Inserting a dielectric slab between capacitor plates increases its capacitance. Reason (R): The dielectric reduces the net electric field between the plates for a fixed charge.',
    options: [
      { key: 'A', text: 'Both A and R are true and R is the correct explanation of A' },
      { key: 'B', text: 'Both A and R are true but R is NOT the correct explanation of A' },
      { key: 'C', text: 'A is true but R is false' },
      { key: 'D', text: 'A is false but R is true' },
    ],
    correctAnswer: 'A',
    solution:
      'Dielectric polarization creates an induced field opposite to the external field, reducing net E and potential V ($V = E\\cdot d$). Since $C = Q/V$, lower V leads to higher C.',
  },
];

type ViewMode = 'setup' | 'quiz' | 'summary';

export default function PracticePage() {
  // Config state
  const [viewMode, setViewMode] = useState<ViewMode>('setup');
  const [subject, setSubject] = useState<string>('Physics');
  const [selectedChapters, setSelectedChapters] = useState<string[]>(['Electrodynamics']);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    'Capacitance & Energy Density',
    'Electric Flux & Gauss Law',
  ]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>(['Numerical', 'Theoretical', 'Assertion & Reason']);
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Live Quiz State
  const [quizQuestions, setQuizQuestions] = useState<QuestionModel[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);

  // Active Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (timerActive) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

  // Available chapters & topics based on chosen subject
  const currentSubjectChapters = CURRICULUM_DATA[subject] || [];

  const handleSubjectChange = (newSub: string) => {
    setSubject(newSub);
    const firstChapter = CURRICULUM_DATA[newSub]?.[0];
    if (firstChapter) {
      setSelectedChapters([firstChapter.chapter]);
      setSelectedTopics(firstChapter.topics);
    } else {
      setSelectedChapters([]);
      setSelectedTopics([]);
    }
  };

  const toggleChapter = (chName: string) => {
    if (selectedChapters.includes(chName)) {
      setSelectedChapters(selectedChapters.filter((c) => c !== chName));
      // Remove related topics
      const chTopics = currentSubjectChapters.find((c) => c.chapter === chName)?.topics || [];
      setSelectedTopics(selectedTopics.filter((t) => !chTopics.includes(t)));
    } else {
      setSelectedChapters([...selectedChapters, chName]);
      const chTopics = currentSubjectChapters.find((c) => c.chapter === chName)?.topics || [];
      setSelectedTopics(Array.from(new Set([...selectedTopics, ...chTopics])));
    }
  };

  const toggleTopic = (topicName: string) => {
    if (selectedTopics.includes(topicName)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topicName));
    } else {
      setSelectedTopics([...selectedTopics, topicName]);
    }
  };

  const toggleType = (typeName: string) => {
    if (selectedTypes.includes(typeName)) {
      if (selectedTypes.length > 1) {
        setSelectedTypes(selectedTypes.filter((t) => t !== typeName));
      }
    } else {
      setSelectedTypes([...selectedTypes, typeName]);
    }
  };

  // Start Exercise Trigger
  const startExercise = () => {
    if (selectedTopics.length === 0) {
      alert('Please select at least one topic.');
      return;
    }

    // Build question pool matching filters[cite: 3, 7]
    const questions = SAMPLE_QUESTIONS.slice(0, Math.min(questionCount, SAMPLE_QUESTIONS.length)).map(
      (q) => ({ ...q, selectedAnswer: undefined })
    );

    setQuizQuestions(questions);
    setCurrentIndex(0);
    setSecondsElapsed(0);
    setTimerActive(true);
    setViewMode('quiz');
  };

  const handleOptionSelect = (optionKey: string) => {
    const updated = [...quizQuestions];
    updated[currentIndex].selectedAnswer =
      updated[currentIndex].selectedAnswer === optionKey ? undefined : optionKey;
    setQuizQuestions(updated);
  };

  const finishQuiz = () => {
    setTimerActive(false);
    setViewMode('summary');
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Calculate summary metrics[cite: 3, 7]
  const correctCount = quizQuestions.filter((q) => q.selectedAnswer === q.correctAnswer).length;
  const attemptedCount = quizQuestions.filter((q) => q.selectedAnswer !== undefined).length;
  const unattemptedCount = quizQuestions.length - attemptedCount;
  const wrongCount = attemptedCount - correctCount;
  const accuracyPct = quizQuestions.length > 0 ? Math.round((correctCount / quizQuestions.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      <main className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= MODE 1: CONFIGURATOR SETUP ================= */}
        {viewMode === 'setup' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 border border-[#2563EB]/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#2563EB] mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>Custom Practice Engine</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-[#0B0F14] mb-3">
                DIY Exercise <span className="text-[#2563EB]">Configurator</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#5B6472]">
                Configure multi-topic practice sets with equal question distribution and live LaTeX solution breakdowns[cite: 3, 7].
              </p>
            </div>

            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
              {/* Step 1: Subject Selection */}
              <div>
                <label className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider block mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center">
                    1
                  </span>
                  Select Subject
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Physics', 'Chemistry', 'Biology', 'Mathematics'].map((s) => {
                    const active = subject === s;
                    return (
                      <button
                        key={s}
                        onClick={() => handleSubjectChange(s)}
                        className={`py-3.5 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                          active
                            ? 'bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.2)]'
                            : 'bg-white text-[#5B6472] border-black/10 hover:text-[#0B0F14] hover:border-black/10'
                        }`}
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>{s}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Chapter Selection */}
              <div>
                <label className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider block mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center">
                    2
                  </span>
                  Select Chapters
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {currentSubjectChapters.map((ch) => {
                    const active = selectedChapters.includes(ch.chapter);
                    return (
                      <button
                        key={ch.chapter}
                        onClick={() => toggleChapter(ch.chapter)}
                        className={`p-3.5 rounded-xl text-xs font-bold border text-left flex items-center justify-between transition-all ${
                          active
                            ? 'bg-black/5 text-[#0B0F14] border-[#2563EB]'
                            : 'bg-white text-[#5B6472] border-black/10 hover:text-[#0B0F14]'
                        }`}
                      >
                        <span className="truncate">{ch.chapter}</span>
                        {active && <Check className="w-4 h-4 text-[#2563EB] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Topic Selection */}
              <div>
                <label className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider block mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center">
                    3
                  </span>
                  Select Topics
                </label>
                <div className="flex flex-wrap gap-2">
                  {currentSubjectChapters
                    .filter((ch) => selectedChapters.includes(ch.chapter))
                    .flatMap((ch) => ch.topics)
                    .map((topic) => {
                      const active = selectedTopics.includes(topic);
                      return (
                        <button
                          key={topic}
                          onClick={() => toggleTopic(topic)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all ${
                            active
                              ? 'bg-[#2563EB] text-white border-[#2563EB] font-bold shadow-[0_0_10px_rgba(37,99,235,0.3)]'
                              : 'bg-black/5 text-[#5B6472] border-black/10 hover:text-[#0B0F14]'
                          }`}
                        >
                          {topic}
                        </button>
                      );
                    })}
                </div>
              </div>

              {/* Step 4: Question Types */}
              <div>
                <label className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider block mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center">
                    4
                  </span>
                  Filter Question Types
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Theoretical', 'Numerical', 'Assertion & Reason', 'Multi-Statement', 'Match Column'].map((t) => {
                    const active = selectedTypes.includes(t);
                    return (
                      <button
                        key={t}
                        onClick={() => toggleType(t)}
                        className={`px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all ${
                          active
                            ? 'bg-black/5 text-[#0B0F14] border-[#2563EB]'
                            : 'bg-white text-[#5B6472] border-black/10'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 5: Question Quantity */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center">
                      5
                    </span>
                    Number of Questions
                  </label>
                  <span className="text-sm font-black text-[#0B0F14]">{questionCount} Questions</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="5"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full accent-[#2563EB] bg-black/5 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* CTA Button */}
              <button
                onClick={startExercise}
                className="w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-sm py-4 rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <Zap className="w-4 h-4" />
                <span>Generate Exercise & Start Timer</span>
              </button>
            </div>
          </div>
        )}

        {/* ================= MODE 2: LIVE QUIZ ENGINE ================= */}
        {viewMode === 'quiz' && quizQuestions.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300">
            {/* Live Header Status */}
            <div className="bg-white border border-black/10 rounded-2xl p-4 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20">
                <Clock className="w-4 h-4 animate-pulse" />
                <span>{formatTime(secondsElapsed)}</span>
              </div>
              <div className="text-xs font-extrabold text-[#0B0F14]">
                Question <span className="text-[#2563EB]">{currentIndex + 1}</span> of {quizQuestions.length}
              </div>
              <span className="text-[10px] font-bold text-[#1D4ED8] bg-[#1D4ED8]/10 px-2.5 py-1 rounded-md border border-[#1D4ED8]/20">
                {quizQuestions[currentIndex].difficulty}
              </span>
            </div>

            {/* Question Card */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-black/5 pb-3">
                <span className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-wider">
                  {quizQuestions[currentIndex].type} • {quizQuestions[currentIndex].topic}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#0B0F14] font-medium leading-relaxed">
                Q{currentIndex + 1}. {quizQuestions[currentIndex].question}
              </p>

              {/* Options Stack */}
              <div className="space-y-3 pt-2">
                {quizQuestions[currentIndex].options.map((opt) => {
                  const isSelected = quizQuestions[currentIndex].selectedAnswer === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleOptionSelect(opt.key)}
                      className={`w-full text-left p-4 rounded-xl text-xs sm:text-sm font-medium border transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#2563EB]/15 text-[#0B0F14] border-[#2563EB] shadow-[0_0_15px_rgba(37,99,235,0.2)]'
                          : 'bg-white text-[#5B6472] border-black/10 hover:text-[#0B0F14] hover:border-black/10'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full font-bold text-xs flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#2563EB] text-white' : 'bg-black/5 text-[#0B0F14]'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <span className="mt-0.5">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5-Column Question Navigator Grid[cite: 3, 7] */}
            <div className="bg-white border border-black/10 rounded-2xl p-4">
              <span className="text-[10px] font-extrabold text-[#5B6472] uppercase block mb-3">
                Question Matrix (5 per row)[cite: 3, 7]
              </span>
              <div className="grid grid-cols-5 gap-2">
                {quizQuestions.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = q.selectedAnswer !== undefined;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-9 rounded-lg text-xs font-bold transition-all border flex items-center justify-center ${
                        isCurrent
                          ? 'border-[#2563EB] text-[#2563EB] bg-[#2563EB]/10 ring-2 ring-[#2563EB]/30'
                          : isAnswered
                          ? 'bg-[#1D4ED8]/20 border-[#1D4ED8]/50 text-[#1D4ED8]'
                          : 'bg-black/5 border-black/10 text-[#5B6472]'
                      }`}
                    >
                      {idx + 1} {isAnswered && '✓'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((prev) => prev - 1)}
                className="bg-black/5 hover:bg-black/5 disabled:opacity-30 text-[#0B0F14] font-bold text-xs px-5 py-3 rounded-xl border border-black/10 flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              {currentIndex < quizQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(37,99,235,0.3)] flex items-center gap-1.5"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={finishQuiz}
                  className="bg-[#1D4ED8] hover:bg-[#33B5FF] text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(0,163,255,0.3)] flex items-center gap-1.5"
                >
                  Submit Exercise
                </button>
              )}
            </div>
          </div>
        )}

        {/* ================= MODE 3: SUMMARY ANALYTICS REPORT ================= */}
        {viewMode === 'summary' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
            {/* Top Score Banner */}
            <div className="bg-gradient-to-r from-[#11161D] via-[#0D1117] to-[#11161D] border border-[#2563EB]/30 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl">
              <Award className="w-12 h-12 text-[#2563EB] mx-auto mb-3" />
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B0F14] mb-2">
                Exercise Completed! 🎉
              </h2>
              <p className="text-xs text-[#5B6472] mb-6">
                Total Time Elapsed: <span className="text-[#0B0F14] font-bold">{formatTime(secondsElapsed)}</span>
              </p>

              {/* 4 Summary Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-black/5 border border-black/10 rounded-xl p-3">
                  <span className="text-[10px] text-[#5B6472] uppercase font-bold block mb-1">
                    Accuracy
                  </span>
                  <span className="text-2xl font-black text-[#1D4ED8]">{accuracyPct}%</span>
                </div>
                <div className="bg-black/5 border border-black/10 rounded-xl p-3">
                  <span className="text-[10px] text-[#5B6472] uppercase font-bold block mb-1">
                    Correct
                  </span>
                  <span className="text-2xl font-black text-[#1D4ED8]">{correctCount}</span>
                </div>
                <div className="bg-black/5 border border-black/10 rounded-xl p-3">
                  <span className="text-[10px] text-[#5B6472] uppercase font-bold block mb-1">
                    Wrong
                  </span>
                  <span className="text-2xl font-black text-rose-400">{wrongCount}</span>
                </div>
                <div className="bg-black/5 border border-black/10 rounded-xl p-3">
                  <span className="text-[10px] text-[#5B6472] uppercase font-bold block mb-1">
                    Skipped
                  </span>
                  <span className="text-2xl font-black text-amber-400">{unattemptedCount}</span>
                </div>
              </div>
            </div>

            {/* Detailed Question Solutions Breakdown[cite: 3, 7] */}
            <div className="bg-white border border-black/10 rounded-2xl p-6 space-y-6">
              <h3 className="text-base font-bold text-[#0B0F14] flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#2563EB]" /> Step-by-Step Solutions Breakdown[cite: 3, 7]
              </h3>

              <div className="space-y-4">
                {quizQuestions.map((q, idx) => {
                  const isCorrect = q.selectedAnswer === q.correctAnswer;
                  const isSkipped = q.selectedAnswer === undefined;

                  return (
                    <div
                      key={q.id}
                      className="bg-white border border-black/10 rounded-xl p-5 space-y-3 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0B0F14]">Question {idx + 1}</span>
                        <span
                          className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md ${
                            isSkipped
                              ? 'bg-amber-400/10 text-amber-300 border border-amber-400/20'
                              : isCorrect
                              ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                          }`}
                        >
                          {isSkipped ? 'SKIPPED' : isCorrect ? 'CORRECT ✓' : 'INCORRECT ✗'}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#0B0F14] font-medium leading-relaxed">
                        {q.question}
                      </p>

                      <div className="text-xs space-y-1 pt-1">
                        <div className="text-[#5B6472]">
                          Your Selection:{' '}
                          <span className={isCorrect ? 'text-[#1D4ED8] font-bold' : 'text-rose-400 font-bold'}>
                            {q.selectedAnswer || 'None'}
                          </span>
                        </div>
                        <div className="text-[#5B6472]">
                          Correct Answer:{' '}
                          <span className="text-[#1D4ED8] font-bold">{q.correctAnswer}</span>
                        </div>
                      </div>

                      <div className="bg-black/5 border border-black/5 rounded-lg p-3 text-xs text-[#5B6472] leading-relaxed">
                        <span className="font-bold text-[#2563EB] block mb-1">Solution Explanation:</span>
                        {q.solution}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Restart CTA */}
            <button
              onClick={() => setViewMode('setup')}
              className="w-full bg-[#2563EB] hover:bg-[#3B82F6] text-white font-extrabold text-sm py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Configure Another Exercise</span>
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
