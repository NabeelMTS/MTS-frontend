'use client';
import { useEffect, Suspense, lazy } from 'react';
import HeroSlider from '@/components/HeroSlider';
import CTA from '@/components/CTA';

// Lazy load heavy components
const Testimonials = lazy(() => import('@/components/Testimonials'));
const CertificationsCarousel = lazy(() => import('@/components/CertificationsCarousel'));
const ConsultationForm = lazy(() => import('@/components/ConsultationForm'));

// Simple loading component for lazy-loaded components
const ComponentLoader = () => (
  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    </div>
  </div>
);

export default function Home() {
  useEffect(() => {
    document.title = "Home - MedicoTech Solutions";
  }, []);
  
  return (
    <main className="overflow-x-hidden">
      <HeroSlider />
      <CTA
        heading="Accurate, HIPAA-compliant medical billing solutions"
        subheading="Designed to streamline your practice and boost your cash flow."
        buttonText="Unlock Your Growth Now"
        buttonHref="/contact"
      />
      
      {/* Features Section */}
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">OUR</h2>
            <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Core Services</h3>
            <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <img 
                  src="/images/medical-billing.jpg" 
                  alt="Medical Billing" 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Medical Billing & Coding</h4>
                <p className="text-gray-600">
                  Precise, expert coding to ensure accurate claims and minimize denials.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <img 
                  src="/images/rcmservices.jpg" 
                  alt="Revenue Cycle Management" 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Revenue Cycle Management</h4>
                <p className="text-gray-600">
                  Streamlined, data-driven strategies to optimize your revenue cycle and reduce financial loss.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <img 
                  src="/images/itconsult.jpg" 
                  alt="IT Consulting" 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">IT Consulting</h4>
                <p className="text-gray-600">
                  Tailored healthcare IT solutions to improve operational efficiency, security, and compliance.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <img 
                  src="/images/clinic.jpg" 
                  alt="Clinical & Pharmacy Services" 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Clinical & Pharmacy Services</h4>
                <p className="text-gray-600">
                  Comprehensive support to enhance treatment outcomes and optimize medication management.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <img 
                  src="/images/digital.jpg" 
                  alt="Digital Health Solutions" 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Digital Health Solutions</h4>
                <p className="text-gray-600">
                  Cutting-edge technologies to elevate patient care and drive better health outcomes.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-blue-50 flex items-center justify-center">
                <img 
                  src="/images/outsource.jpg" 
                  alt="Outsourcing Services" 
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Outsourcing Services</h4>
                <p className="text-gray-600">
                  Affordable BPO and staffing solutions designed to empower healthcare practices and improve operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lazy loaded components */}
      <Suspense fallback={<ComponentLoader />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <CertificationsCarousel />
      </Suspense>
      <Suspense fallback={<ComponentLoader />}>
        <ConsultationForm />
      </Suspense>
    </main>
  );
}
