'use client';
import HeroSlider from '@/components/HeroSlider';
import '../globals.css';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <CTA
  heading="
Accurate, HIPAA-compliant medical billing solutions"
  subheading="Designed to streamline your practice and boost your cash flow."
  buttonText="Schedule a Free Consultation"
  buttonHref="/demo"
/>
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Item 1 - Claim Acceptance */}
      <div className="flex items-center p-6 border border-gray-100 rounded-xl hover:shadow-sm transition-all">
        <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="ml-4 text-lg font-medium text-gray-900">99% Claim Acceptance Rate</h3>
      </div>

      {/* Item 2 - Billing Specialists */}
      <div className="flex items-center p-6 border border-gray-100 rounded-xl hover:shadow-sm transition-all">
        <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="ml-4 text-lg font-medium text-gray-900">Dedicated Billing Specialists</h3>
      </div>

      {/* Item 3 - HIPAA Compliance */}
      <div className="flex items-center p-6 border border-gray-100 rounded-xl hover:shadow-sm transition-all">
        <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="ml-4 text-lg font-medium text-gray-900">HIPAA-Compliant Systems</h3>
      </div>

      {/* Item 4 - Fast Turnaround */}
      <div className="flex items-center p-6 border border-gray-100 rounded-xl hover:shadow-sm transition-all">
        <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="ml-4 text-lg font-medium text-gray-900">Fast Turnaround Time</h3>
      </div>

      {/* Item 5 - Transparent Reporting */}
      <div className="flex items-center p-6 border border-gray-100 rounded-xl hover:shadow-sm transition-all">
        <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="ml-4 text-lg font-medium text-gray-900">Transparent Monthly Reporting</h3>
      </div>

      {/* Item 6 - Customer Support */}
      <div className="flex items-center p-6 border border-gray-100 rounded-xl hover:shadow-sm transition-all">
        <div className="flex-shrink-0 bg-blue-50 p-2.5 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 className="ml-4 text-lg font-medium text-gray-900">24/7 Customer Support</h3>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
