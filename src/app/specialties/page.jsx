'use client';

import CTA from '@/components/CTA';
import { FaCheck, FaChartLine, FaShieldAlt, FaFileInvoice, FaSearch, FaCogs } from 'react-icons/fa';
import { useState, useEffect, createContext, useContext } from 'react';
 
const Specialties = () => {
   useEffect(() => {
    document.title = "Specialties - MedicoTech Solutions";
  }, []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero_3.jpg" 
            alt="Medical billing specialists working" 
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Precision Billing for Every Specialty
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-lg">
                Eliminate denials with coding that fits your exact practice type.
              </p>
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-transform focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Get Started with Precision Billing"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Stats Section */}
      <section className="relative z-10 -mt-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Block */}
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">📌</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Medical Billing Specialists</h4>
                    <p className="text-gray-600 text-sm">Trusted by 50+ clinics & practices</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 text-2xl">💡</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Focused on accuracy, speed & compliance</h4>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Middle Block */}
            <div className="bg-blue-600 text-white rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Claims Processed</h3>
              <p className="text-5xl font-bold mb-2">124,830+</p>
              <div className="flex items-center">
                <FaCheck className="text-green-300 mr-2 text-xl" />
                <span className="text-lg">98% Approval Rate</span>
              </div>
              <p className="mt-4 text-blue-100">Reliable results, every cycle.</p>
            </div>
            
            {/* Right Block */}
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-blue-600 mr-2 text-2xl">🎯</span> Why Choose MTS?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2 text-xl" />
                  <span className="text-gray-800">98% Claim Acceptance</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2 text-xl" />
                  <span className="text-gray-800">HIPAA Compliant</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2 text-xl" />
                  <span className="text-gray-800">Timely Reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Blue Theme */}
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div className="bg-blue-600 rounded-2xl p-8 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 text-left md:text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-0">
        Maximize Reimbursements. Stay 100% Compliant. Skip the Headaches.
        </h2>
        <button 
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Book a Demo"
        >
          Book a demo
        </button>
      </div>
      <p className="text-sm text-left text-gray-200">
      We understand the high stakes of medical billing. A single coding error or missed modifier can cost you thousands. That’s why we provide specialty-specific billing solutions designed to Optimize Revenue, Reduce Denials, and keep your Practice Audit-proof.
      </p>
    </div>
  </div>

      {/* Icon Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Item 1 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg text-blue-600 font-semibold mb-2">Maximized ROI</h3>
              <p className="text-gray-600 text-sm">
                Specialty coders = higher clean-claim rates and faster payments.
              </p>
            </div>
            
            {/* Item 2 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg text-blue-600 font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600 text-sm">
                Constantly updated with the latest CMS, HIPAA, and payer rules.
              </p>
            </div>
            
            {/* Item 3 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaFileInvoice className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg text-blue-600 font-semibold mb-2">Denial Management</h3>
              <p className="text-gray-600 text-sm">
                Proactive denial tracking, appeal handling, and root-cause analysis to recover lost revenue.
              </p>
            </div>
            
            {/* Item 4 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaSearch className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg text-blue-600 font-semibold mb-2">Accurate Coding</h3>
              <p className="text-gray-600 text-sm">
                Every claim coded with precision to reduce rejections and maximize reimbursement.
              </p>
            </div>
            
            {/* Item 5 */}
            <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaCogs className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg text-blue-600 font-semibold mb-2">Pain-Free Operations</h3>
              <p className="text-gray-600 text-sm">
                We handle the billing stress — no more chasing claims or fixing errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA 
        heading="
        Ready to Elevate Your Medical Billing?"
          subheading="Streamline operations, boost revenue, and ensure compliance with MedicoTech Solutions."
          buttonText="Schedule a Free Consultation"
          buttonHref="/demo"/>
    </div>
  );
};

export default Specialties;