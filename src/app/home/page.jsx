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

<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Step-by-Step</h2>
      <h3 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Your Journey with MTS</h3>
      <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* Vertical line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
      
      {/* Timeline Items */}
      <div className="space-y-12 md:space-y-0">
        {/* Item 1 */}
        <div className="relative md:flex items-center">
          <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 text-right">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg">
              01
            </div>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">Schedule Free Consultation & Assessment</h4>
            <p className="mt-2 text-gray-600">
              Connect with our expert team for a free consultation to assess your needs. We'll show you how our AI-powered solutions can help boost revenue, reduce costs, and streamline operations.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative md:flex items-center">
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg">
              02
            </div>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">Custom Solutions for Revenue Growth</h4>
            <p className="mt-2 text-gray-600">
              Our team customizes solutions to fit your practice's needs, using advanced healthcare technology and AI to optimize billing accuracy, minimize denials, and maximize your revenue potential.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative md:flex items-center">
          <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 text-right">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg">
              03
            </div>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">AI-Driven Efficiency Boost</h4>
            <p className="mt-2 text-gray-600">
              Save valuable time by automating routine tasks with our AI-driven systems, which reduce administrative workload and allow your staff to focus on patient care and business growth.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="relative md:flex items-center">
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg">
              04
            </div>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">Continuous Support & Revenue Growth</h4>
            <p className="mt-2 text-gray-600">
              We provide ongoing support and monitor performance to ensure your systems operate smoothly. By optimizing your revenue cycle, we help increase cash flow and reduce claim denials.
            </p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="relative md:flex items-center">
          <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0 text-right">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold shadow-lg">
              05
            </div>
            <h4 className="mt-4 text-xl font-semibold text-gray-900">Sustained Success & Impactful Results</h4>
            <p className="mt-2 text-gray-600">
              MedicoTech Solutions is committed to your practice's success. Our data-driven insights and technology continuously drive operational efficiency, improve patient care, and boost revenue by 30-35%.
            </p>
          </div>
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Image Section */}
      <div className="lg:w-1/2">
        <div className="relative rounded-xl overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
          <img 
            src="/images/about.jpg" 
            alt="Medical professionals working together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-600/10"></div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
        
        <p className="text-lg text-gray-600 mb-6">
          Simplify your operations with our hassle-free Medical Billing, Coding, and Healthcare IT services with as low as 3.89%.
        </p>
        
        <p className="text-lg text-gray-600 mb-8">
          At MTS, we help clinics and hospitals <span className="font-semibold text-blue-600">Boost Efficiency</span>, <span className="font-semibold text-blue-600">Reduce Admin work</span>, and <span className="font-semibold text-blue-600">Improve Patient Outcomes</span>. Trusted by healthcare providers nationwide, our expert team delivers reliable <span className="font-semibold text-blue-600">Billing</span>, <span className="font-semibold text-blue-600">Coding</span>, and <span className="font-semibold text-blue-600">IT Consulting</span>—so you can focus on exceptional care.
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
