import { FAQItem } from '@/types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Practice',
    question: 'How does the DIY Exercise Configurator work?',
    answer:
      'VoltClass allows you to pick a subject, select specific chapters and topics, filter by question types (Theoretical, Numerical, Assertion & Reason, Multi-Statement, Match Column), and set your question limit[cite: 5]. Our equal-distribution algorithm ensures balanced question coverage across all chosen topics[cite: 5].',
  },
  {
    id: 'faq-2',
    category: 'Practice',
    question: 'How do 3D Smart Flashcards work?',
    answer:
      'Our 3D Flashcards flip smoothly between concepts, key definitions, formulas, and shortcut tricks[cite: 5]. Flashcard decks load directly from secure private storage buckets organized by Subject, Chapter, and Topic with LaTeX formula rendering[cite: 5].',
  },
  {
    id: 'faq-3',
    category: 'Courses',
    question: 'What subjects are covered in NEET vs. JEE courses?',
    answer:
      'NEET courses cover Physics, Chemistry, and Biology[cite: 5]. JEE courses cover Physics, Chemistry, and Mathematics[cite: 5]. All course contents are fully aligned with the latest exam syllabus[cite: 5].',
  },
  {
    id: 'faq-4',
    category: 'General',
    question: 'How does the AI Doubt Resolution system work?',
    answer:
      'Premium subscribers receive 60 AI doubt resolution tokens every month[cite: 5]. You can submit questions or image attachments to receive instant, step-by-step LaTeX explanations along with follow-up Q&A support[cite: 5].',
  },
  {
    id: 'faq-5',
    category: 'Payments',
    question: 'What happens immediately after completing payment?',
    answer:
      'Upon successful Razorpay payment, your profile subscription status is instantly upgraded to Premium for 365 days, unlocking all private storage buckets, custom DIY practice engines, and AI doubt tokens[cite: 5].',
  },
  {
    id: 'faq-6',
    category: 'Tests',
    question: 'Can I view detailed solution explanations after completing a test?',
    answer:
      'Yes! Every completed exercise generates a full summary report with topic-wise accuracy progress bars, an interactive 5-column question status matrix, and step-by-step LaTeX solution modal sheets for every question[cite: 5].',
  },
];
