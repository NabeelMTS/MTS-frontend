'use client';
import { useState, useEffect, createContext, useContext } from 'react';
import { FaCheck, FaChartLine, FaShieldAlt, FaFileInvoice, FaSearch, FaCogs } from 'react-icons/fa';





const RCMServicesPage = () => {
    useEffect(() => {
    document.title = "RCM - MedicoTech Solutions";
  }, []);
    return (
      <div className="bg-white">

        <section className="relative h-screen max-h-[800px] overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/coding.jpg" alt="Doctors reviewing charts" className="w-full h-full object-cover object-right" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Optimize Your Revenue Cycle<br className="hidden md:inline" />
                <span className="block md:inline">with MTS:</span>
                <br className="md:hidden" />
                <span className="text-blue-200">Precision, Compliance,</span>
                <br className="hidden md:inline" />
                <span className="text-blue-200">and Results</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Streamlined RCM solutions tailored for U.S. healthcare providers<br className="hidden md:inline" />
                to enhance cash flow and reduce denials.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Request a Free RCM Consultation
              </button>
            </div>
          </div>
        </section>

        {/* --- Why RCM Matters --- */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">The Backbone of Financial Health in Healthcare</h2>
              <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Improved Cash Flow",
                  desc: "Faster claim processing and reduced denials.",
                  icon: "💸"
                },
                {
                  title: "More Time for Patients",
                  desc: "Free up providers by eliminating billing burdens.",
                  icon: "⏱️"
                },
                {
                  title: "Stay Compliant & Risk-Free",
                  desc: "Avoid penalties with accurate processes.",
                  icon: "🛡️"
                },
                {
                  title: "Operational Efficiency",
                  desc: "Streamlined administrative tasks.",
                  icon: "⚙️"
                },
                {
                  title: "Enhanced Patient Satisfaction",
                  desc: "Transparent billing processes.",
                  icon: "😊"
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="text-xl text-blue-600 font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* --- RCM Process --- */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Comprehensive RCM Workflow Tailored for Your Practice</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Our end-to-end RCM process ensures accuracy, efficiency, and compliance at every stage
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Insurance Eligibility & Benefit Checks",
                "Prior Authorization Support",
                "Patient Scheduling",
                "Accurate Medical Coding",
                "Charge Entry & Claims Submission",
                "Rejection & Denial Handling",
                "Payment Posting & AR Management",
                "Denial & Coding Review",
                "Quality Assurance Checks",
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mb-3">
                    {i + 1}
                  </div>
                  <h3 className="text-blue-600 font-semibold text-lg">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* --- Why MTS Stands Out --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why MTS Stands Out in RCM Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-blue-600 text-xl font-semibold mb-4">Customized Solution For Every Practice</h3>
                <p className="text-gray-700">We tailor our RCM services to your specialty, size, and workflow.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-blue-600 text-xl font-semibold mb-4">Advanced Technology Integration</h3>
                <p className="text-gray-700">Seamless EHR/EMR integration with real-time analytics.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-blue-600 text-xl font-semibold mb-4">Compliance at the Core</h3>
                <p className="text-gray-700">HIPAA-compliant processes with regular audits.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-blue-600 text-xl font-semibold mb-4">Maximized Revenue Potential</h3>
                <p className="text-gray-700">Proactive denial management to recover lost revenue.</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-blue-600 text-xl font-semibold mb-4">Certified Professionals</h3>
                <p className="text-gray-700">AAPC/AHIMA-certified coders and billing specialists.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* --- Benefits --- */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Why Choose MTS for RCM Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">1. Stronger Financial Performance</h3>
                <p>Streamline your revenue cycle to reduce claim errors, cut denials, and accelerate payments.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">2. Increased Staff Efficiency</h3>
                <p>Let your team focus on patient care—our experts handle the billing and admin tasks.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">3. Real-Time Reporting & Insights</h3>
                <p>Access clear, data-driven analytics to track financial health and optimize performance.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">4. Faster Reimbursements</h3>
                <p>Speed up claim approvals with proactive, end-to-end claim management.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* --- Security --- */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Ensuring Data Security and Compliance</h2>
              <p className="text-lg text-gray-600 mt-2">Our Security Commitments</p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "HIPAA-Compliant Security",
                "99.9% Uptime Guarantee",
                "Disaster Recovery Ready",
                "SOC 1 & 2 Certified",
                "End-to-End Encryption",
                "Regular Security Audits",
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4 mx-auto">
                    <FaShieldAlt className="w-6 h-6" />
                  </div>
                  <h3 className="text-blue-600 font-semibold text-center">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* --- Final CTA --- */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Revenue Cycle?</h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold">
              Schedule Your Free RCM Consultation Today
            </button>
          </div>
        </section>
      </div>
    );
  };

  export default RCMServicesPage;