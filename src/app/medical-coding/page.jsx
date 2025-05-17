'use client';
import { useState, useEffect, createContext, useContext } from 'react';


const MedicalCodingPage = () => {  
  useEffect(() => {
    document.title = "Medical Coding - MedicoTech Solutions";
  }, []);
    return (
      <div className="bg-white">
        {/* --- Hero --- */}

        <section className="relative h-screen max-h-[800px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/coding.jpg" alt="Doctors reviewing charts" className="w-full h-full object-cover object-right" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Coding Service</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0">
                 Efficient Coding. Cleaner Claims. Higher Profits.<br />
              We code it right—so you get paid right.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Get Your Free Consultation Now
            </button>
          </div>
        </div>
      </section>
  
        {/* --- Coding Errors --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img src="/images/coding2.jpg" alt="Coding errors consequences" className="rounded-lg shadow-xl" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">One Mistake Can Cost You Thousands</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Coding errors can delay payments, increase denials, and even trigger audits. Our team of certified AAPC & AHIMA coders ensures precision at every step, improving your financial outcomes and protecting your practice.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">98%</p>
                    <p className="text-sm text-gray-600">Coding Accuracy</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">40%</p>
                    <p className="text-sm text-gray-600">Faster Denial Resolution</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">100%</p>
                    <p className="text-sm text-gray-600">HIPAA-Compliant</p>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                  Get Your Free Audit Now
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* --- Comprehensive Solutions --- */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Comprehensive Medical Coding Solutions for Every Specialty</h2>
              <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
              At MedicoTech Solutions, we help healthcare providers eliminate errors, reduce denials, and get paid faster. From ICD-10 to CPT and HCPCS, our coders ensure every claim is accurate and fully compliant with U.S. healthcare standards.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "📋", title: "ICD-10, CPT, HCPCS Coding", desc: "Precision coding for all claim types" },
                { icon: "🎯", title: "Specialty-Specific Coding", desc: "Tailored to your practice needs" },
                { icon: "🔍", title: "Code Audits & Compliance", desc: "Regular reviews to ensure accuracy" },
                { icon: "⚡", title: "Denial Analysis", desc: "Identify and fix root causes" },
              ].map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <span className="text-3xl mb-3 block">{service.icon}</span>
                  <h3 className="text-xl text-blue-600 font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* --- Specialties --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-2">
              🏥 Built for Every Practice Type
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">We deliver tailored coding solutions for over 20 specialties including:</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {["Cardiology", "Orthopedics", "Internal Medicine", "Radiology", "Mental Health", "Pediatrics"].map((spec, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition">
                  <p className="font-medium text-blue-600">{spec}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* --- Why Coding Matters --- */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Why Skilled Medical Coders Matter in Medical Billing</h2>
            <p className="text-xl mb-8">
              Accurate medical coding is the backbone of timely reimbursements and clean claim submissions. At MedicoTech Solutions, our certified medical coders ensure every code supports your bottom line and keeps your practice compliant.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">✅ Precise ICD-10, CPT, & HCPCS Coding</h3>
                <p>Boost reimbursements with accurate diagnosis and procedure coding.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">✅ Regulatory Compliance Checks</h3>
                <p>Stay audit-ready with consistent, up-to-date coding reviews.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">✅ Maximized Revenue & Fewer Denials</h3>
                <p>Reduce claim rejections and accelerate cash flow.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">✅ Specialty-Specific Expertise</h3>
                <p>Tailored coding for every medical specialty.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* --- Final CTA --- */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready for Cleaner Claims & Higher Collections?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with MedicoTech Solutions and experience stress-free, results-driven medical coding.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold">
              Get Your Free Consultation Now
            </button>
          </div>
        </section>
      </div>
    );
  };

  export default MedicalCodingPage;   