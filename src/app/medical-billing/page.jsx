'use client';

import { FaCheck, FaChartLine, FaShieldAlt, FaFileInvoice, FaSearch, FaCogs } from 'react-icons/fa';
import { useState, useEffect, createContext, useContext } from 'react';


const MedicalBillingPage = () => {
    useEffect(() => {
    document.title = "Medical Billing - MedicoTech Solutions";
  }, []);

  return (
    <div className="bg-white">
      {/* --- Hero Slider --- */}
      <section className="relative h-screen max-h-[800px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/hero_4.jpg" alt="Doctors reviewing charts" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Billing That Works as Hard as You Do</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0">
              Streamline operations and boost collections—without the stress.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Get Your Free Consultation Now
            </button>
          </div>
        </div>
      </section>

      {/* --- Tailored Services --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tailored Medical Billing Services for Your Practice</h2>
            <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto text-center mb-12">
            At MedicoTech Solutions, we simplify billing so you can focus on care. Our end-to-end healthcare IT services are built around what matters most to providers: accurate medical billing & coding, streamlined revenue cycle management (RCM), and hassle-free provider credentialing.
          </p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {[
              { value: "25+", label: "Specialties" },
              { value: "120+", label: "Healthcare Providers" },
              { value: "35%", label: "Faster Reimbursements" },
              { value: "95%", label: "Client Satisfaction" },
              { value: "100%", label: "HIPAA Compliance" },
            ].map((stat, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center mt-6 max-w-3xl mx-auto">
            Disclaimer: Results are based on industry standards and typical performance metrics. MedicoTech Solutions (MTS) makes no guarantees regarding specific outcomes.
          </p>
        </div>
      </section>

      {/* --- Free Audit CTA --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Medical Billing Audit to Maximize Practice Revenue</h2>
            <p className="text-lg text-gray-600 mb-8">
              Unlock hidden revenue with a free medical billing audit from MedicoTech Solutions (MTS). We help healthcare providers across the USA improve reimbursements, eliminate billing errors, and streamline financial operations — all without upfront cost.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">What You’ll Get:</h3>
                <ul className="text-gray-600 space-y-3">
                  {[
                    "Revenue Optimization – Increase collections",
                    "Claim Accuracy – Improve approval rates",
                    "Denial Management – Pinpoint rejections",
                    "Precise Coding – Ensure compliance",
                    "Duplicate Claim Prevention – Avoid errors",
                    "Faster Claims Conversion – Accelerate payments",
                    "Time-Saving Processes – Cut down rework",
                    "Team Performance Insights – Detect gaps",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg flex items-center justify-center">
                <img src="/images/audit.jpg" alt="Billing audit process" className="rounded-lg max-h-80" />
              </div>
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold">
              Start Your Free Audit Today
            </button>
          </div>
        </div>
      </section>

      {/* --- Special Offer --- */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Special Offer for New Healthcare Practices</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get Your Practice Off the Ground—Faster, Smarter, and Stress-Free
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8 text-left inline-block">
            <h3 className="text-2xl font-semibold mb-4">Here’s What You’ll Get — Absolutely Free:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheck className="text-green-300 mr-2 mt-1" />
                <span><strong>1 Month of Healthcare Digital Marketing Strategy</strong> - Boost your online presence, attract more patients</span>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-300 mr-2 mt-1" />
                <span><strong>1 Month of Free Medical Billing Audit</strong> - Detect revenue leaks and improve cash flow</span>
              </li>
            </ul>
            <p className="mt-4 text-blue-100">No hidden costs. Just real support to help new practices thrive.</p>
          </div>
          
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition">
            Get Your Free Consultation Now
          </button>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Simplify Your Billing. Amplify Your Practice with MTS</h2>
          <img src="/images/audit2.jpg" alt="Billing dashboard" className="mx-auto mb-8 rounded-lg shadow-xl max-w-full" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold">
            Start Your Risk-Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

export default MedicalBillingPage;