import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const sections = [
  {
    title: '1. About VoltClass',
    body: [
      'VoltClass provides digital educational and practice services for students preparing primarily for examinations such as NEET and JEE.',
      'Our services may include courses, practice questions, notes, tests, analytics, revision tools, smart cards, doubt support and other educational features.',
    ],
  },
  {
    title: '2. User Accounts',
    body: ['You are responsible for:'],
    list: [
      'Providing accurate account information',
      'Maintaining the confidentiality of your account',
      'Keeping your login credentials secure',
      'All activity performed through your account',
    ],
    after: 'You must not share, sell or transfer your account without authorization.',
  },
  {
    title: '3. Course Access',
    body: [
      'Purchased courses provide access to the content and features specified for the applicable course.',
      'Course duration, access period, included features and other conditions will be displayed at the time of purchase.',
      'VoltClass may update, improve or modify features during the course period.',
    ],
  },
  {
    title: '4. Educational Content',
    body: [
      'VoltClass provides educational and practice resources for examination preparation.',
      'VoltClass does not guarantee a particular examination score, rank, admission result or selection outcome.',
      'Student performance depends on multiple factors including preparation, consistency, prior knowledge, examination conditions and individual performance.',
    ],
  },
  {
    title: '5. Intellectual Property',
    body: ['All VoltClass content and platform materials, including:'],
    list: [
      'Questions',
      'Solutions',
      'Notes',
      'Practice sets',
      'Graphics',
      'Videos',
      'Smart cards',
      'Software',
      'Designs',
      'Logos',
      'Branding',
      'Analytics systems',
      'Original educational material',
    ],
    after:
      'are owned by or licensed to VoltClass and are protected by applicable intellectual-property laws. You may use the content for personal educational purposes only. You may not reproduce, distribute, resell, publish, scrape, copy or commercially exploit VoltClass content without written permission.',
  },
  {
    title: '6. Prohibited Activities',
    body: ['Users must not:'],
    list: [
      'Copy or redistribute VoltClass content',
      'Sell or share course access',
      'Attempt to bypass access controls',
      'Reverse engineer the application',
      'Scrape the question bank',
      'Create unauthorized copies of the platform',
      'Use automated systems to abuse the service',
      'Attempt to interfere with platform security',
    ],
  },
  {
    title: '7. Payments',
    body: [
      'Course prices and applicable offers will be displayed on the platform.',
      'Payments may be processed through third-party payment providers.',
      'A successful payment does not grant ownership of VoltClass content. It grants the applicable access rights specified for the purchased course.',
    ],
  },
  {
    title: '8. Refunds and Cancellations',
    body: [
      'Refund eligibility, if applicable, will be governed by the refund policy displayed at the time of purchase.',
      'Where a separate refund policy exists, that policy forms part of these Terms.',
    ],
  },
  {
    title: '9. AI and Automated Features',
    body: [
      'VoltClass may provide AI-assisted features such as doubt explanations, recommendations and personalized practice.',
      'AI-generated information may occasionally contain errors. Students should independently verify important academic information using reliable educational sources.',
    ],
  },
  {
    title: '10. Service Availability',
    body: [
      'We aim to maintain reliable access to VoltClass but cannot guarantee uninterrupted or error-free operation. Services may occasionally be unavailable because of:',
    ],
    list: ['Maintenance', 'Updates', 'Technical failures', 'Infrastructure problems', 'Network issues', 'Circumstances outside our reasonable control'],
  },
  {
    title: '11. Account Suspension',
    body: ['VoltClass may suspend or terminate accounts involved in:'],
    list: [
      'Unauthorized sharing',
      'Content piracy',
      'Fraudulent activity',
      'Abuse of the platform',
      'Attempts to compromise platform security',
      'Violation of these Terms',
    ],
  },
  {
    title: '12. Changes to Services',
    body: [
      'VoltClass may add, modify or remove features as the platform develops.',
      'We may update these Terms when necessary and will publish the revised version on the website.',
    ],
  },
  {
    title: '13. Limitation of Liability',
    body: [
      'To the extent permitted by applicable law, VoltClass will not be responsible for indirect or consequential losses arising from the use or inability to use the service.',
      'Nothing in these Terms excludes rights or liabilities that cannot legally be excluded under applicable law.',
    ],
  },
  {
    title: '14. Governing Law',
    body: ['These Terms shall be governed by the applicable laws of India.'],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans">
      <Navbar />

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-xs text-[#5B6472] mb-10">Last updated: August 2026</p>

        <p className="text-sm leading-relaxed text-[#0B0F14] mb-10">
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of VoltClass,
          including our website, mobile application, courses, practice tools and related
          services. By creating an account or using VoltClass, you agree to these Terms.
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-base font-bold text-[#0B0F14] mb-3">{s.title}</h2>
              <div className="space-y-2.5 text-sm text-[#5B6472] leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.list && (
                  <ul className="list-disc list-inside space-y-1.5 pl-1">
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
                {s.after && <p>{s.after}</p>}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">15. Contact</h2>
            <p className="text-sm text-[#5B6472] leading-relaxed">
              Questions about these Terms? Reach us on our{' '}
              <Link href="/contact" className="text-[#2563EB] font-semibold hover:underline">
                Contact &amp; Support
              </Link>{' '}
              page or email{' '}
              <a href="mailto:voltclassofficial@gmail.com" className="text-[#2563EB] font-semibold hover:underline">
                voltclassofficial@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
