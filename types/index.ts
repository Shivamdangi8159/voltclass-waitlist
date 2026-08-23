export type ExamCategory = 'NEET' | 'JEE';
export type SubjectType = 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  exam: ExamCategory;
  subject: SubjectType[];
  targetClass: 'Class 11th' | 'Class 12th' | 'Dropper Batch' | 'All Levels';
  /** Short bullets shown on the main courses grid card */
  mainBullets: string[];
  /** Full description paragraph(s) shown on the detail page */
  description: string[];
  /** "What you get" — full feature list shown on the detail page */
  features: string[];
  bestFor: string;
  price: number;
  originalPrice: number;
  installment?: string;
  currency: string;
  status: 'Active' | 'Upcoming';
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Courses' | 'Practice' | 'Tests' | 'Payments';
  question: string;
  answer: string;
}
