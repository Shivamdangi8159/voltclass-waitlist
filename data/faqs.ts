import { FAQItem } from '@/types';

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'f1',
    category: 'Practice',
    question: 'How does the DIY Exercise Configurator work?',
    answer: 'VoltClass allows you to pick a subject, multiple chapters, and specific topics. You can filter by question type (Numerical, Theoretical, Assertion-Reason, Multi-Statement, Match the Column). Our balanced distribution algorithm evenly distributes questions across all chosen topics before starting the test.'
  },
  {
    id: 'f2',
    category: 'Courses',
    question: 'What subjects are included for NEET vs. JEE courses?',
    answer: 'NEET courses automatically configure tabs and practice questions for Physics, Chemistry, and Biology[cite: 61, 4417, 10835]. JEE courses automatically configure Physics, Chemistry, and Mathematics[cite: 61, 4417, 10836].'
  },
  {
    id: 'f3',
    category: 'General',
    question: 'How does the AI Doubt Resolution work?',
    answer: 'Every registered premium student receives 60 AI doubt tokens monthly. You can ask doubts via text or image attachment, and receive instant detailed LaTeX explanations with follow-up support[cite: 61, 4416, 4417].'
  },
  {
    id: 'f4',
    category: 'Payments',
    question: 'What happens after I complete payment?',
    answer: 'Payment completes via Razorpay. Your account profile is instantly updated in Supabase to "Premium" status for 365 days, unlocking all private buckets and practice modules.'
  }
];
