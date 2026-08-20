export type ExamCategory = 'NEET' | 'JEE Main' | 'JEE Advanced';
export type SubjectType = 'Physics' | 'Chemistry' | 'Biology' | 'Mathematics';

export interface Chapter {
  id: string;
  title: string;
  topicsCount: number;
  questionCount: number;
}

export interface CourseData {
  id: string;
  slug: string;
  title: string;
  exam: ExamCategory;
  subject: SubjectType[];
  targetClass: 'Class 11th' | 'Class 12th' | 'Dropper Batch' | 'All Levels';
  description: string;
  price: number;
  originalPrice: number;
  currency: string;
  thumbnailUrl?: string;
  chapters: Chapter[];
  features: string[];
  status: 'Active' | 'Upcoming';
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Courses' | 'Practice' | 'Tests' | 'Payments';
  question: string;
  answer: string;
}
