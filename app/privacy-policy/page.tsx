import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0F14] font-sans">
      <Navbar />

      <main className="pt-32 pb-24 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-xs text-[#5B6472] mb-10">Last updated: August 2026</p>

        <p className="text-sm leading-relaxed text-[#0B0F14] mb-10">
          VoltClass (&quot;VoltClass&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          respects your privacy and is committed to protecting the information you provide while
          using our website, mobile application and services.
        </p>

        <div className="space-y-10 text-sm text-[#5B6472] leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">1. Information We Collect</h2>
            <p className="mb-3">Depending on how you use VoltClass, we may collect:</p>

            <h3 className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider mb-2">Account Information</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-1 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number, where provided</li>
              <li>Login/authentication information</li>
              <li>Selected examination category</li>
              <li>Class or academic information</li>
            </ul>

            <h3 className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider mb-2">Learning &amp; Performance Information</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-1 mb-4">
              <li>Questions attempted</li>
              <li>Answers and scores</li>
              <li>Test results</li>
              <li>Practice history</li>
              <li>Accuracy and speed</li>
              <li>Topics and chapters practiced</li>
              <li>Bookmarked questions</li>
              <li>Revision activity</li>
              <li>Performance and analytics data</li>
            </ul>

            <h3 className="text-xs font-bold text-[#0B0F14] uppercase tracking-wider mb-2">Technical Information</h3>
            <ul className="list-disc list-inside space-y-1.5 pl-1 mb-4">
              <li>Device information</li>
              <li>Operating system</li>
              <li>App version</li>
              <li>Basic diagnostic and usage information</li>
              <li>Log and error information</li>
            </ul>

            <p>We collect only information reasonably necessary to provide and improve VoltClass services.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">We may use collected information to:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1">
              <li>Create and manage your account</li>
              <li>Provide VoltClass services</li>
              <li>Track learning and practice progress</li>
              <li>Generate performance analytics</li>
              <li>Personalize practice and revision</li>
              <li>Provide doubt-support features</li>
              <li>Improve the application</li>
              <li>Diagnose technical problems</li>
              <li>Process subscriptions and payments</li>
              <li>Communicate important service-related information</li>
              <li>Prevent misuse and protect platform security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">3. Learning Data</h2>
            <p>
              Your practice activity and performance data may be used to generate personalized
              analytics, recommendations, revision sets and other learning features.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">4. Payments</h2>
            <p>
              When you purchase a course or subscription, payment information may be processed
              by third-party payment providers. VoltClass does not need to store your complete
              card, UPI or banking credentials on its own servers when payment processing is
              handled by an authorized payment provider.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">5. Data Storage</h2>
            <p>
              VoltClass uses third-party infrastructure and service providers to securely operate
              its platform. Account and application data may be stored using services such as
              Supabase and other infrastructure providers used by VoltClass. Your information is
              not sold to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">6. Third-Party Services</h2>
            <p className="mb-3">VoltClass may use third-party services for functions such as:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 mb-3">
              <li>Authentication</li>
              <li>Database and cloud infrastructure</li>
              <li>Payment processing</li>
              <li>Analytics</li>
              <li>Notifications</li>
              <li>AI-powered features</li>
              <li>Error monitoring</li>
            </ul>
            <p>
              These services may process information according to their own privacy policies and
              applicable agreements.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">7. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect user
              information from unauthorized access, alteration, disclosure or destruction.
              However, no internet-based service can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">8. Data Retention</h2>
            <p>
              We retain information for as long as reasonably necessary to provide the services,
              comply with legal obligations, resolve disputes and maintain legitimate business
              records.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">9. Children&apos;s Privacy</h2>
            <p>
              VoltClass is intended for students preparing for academic examinations. Where
              required by applicable law, appropriate consent and safeguards will be followed for
              users who are minors.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">10. Your Rights</h2>
            <p className="mb-3">Subject to applicable law, you may request:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-1 mb-3">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your account or personal information</li>
              <li>Withdrawal of certain permissions or consent</li>
            </ul>
            <p>
              Requests can be made through our{' '}
              <Link href="/contact" className="text-[#2563EB] font-semibold hover:underline">
                support/contact channel
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be published on
              this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-[#0B0F14] mb-3">12. Contact</h2>
            <p>
              Questions about this Policy? Reach us on our{' '}
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
