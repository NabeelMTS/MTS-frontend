'use client';
import { useState, useEffect, createContext, useContext } from 'react';

const MedicalScribingPage = () => {
  useEffect(() => {
    document.title = "Medical Scribing - MedicoTech Solutions";
  }, []);

  return (
    <div className="bg-white">
                  <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
           <div className="absolute inset-0 opacity-30">
          <img src="/images/hero.jpg" alt="Doctors reviewing charts" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Medical Scribe</h1>
            <p className="text-3xl md:text-2xl mb-8">
       Empowering Providers. Enhancing Outcomes.
            </p>
            <p className="text-m md:text-l mb-8"> At MedicoTech Solutions, we leverage advanced AI technology to transform clinical documentation. Our platform streamlines workflows, improves compliance, and ensures better outcomes.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Get Your Free Consultation Now
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* --- Built for Modern Practices --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Built for Modern Practices</h2>
          <p className="text-xl text-gray-600">
            From small clinics to large healthcare networks, our scalable solution adapts to your needs.
          </p>
          <img src="/images/audit2.jpg" alt="AI Scribing dashboard" className="mt-8 mx-auto rounded-lg shadow-xl max-w-full" />
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose MedicoTech AI Medical Scribe?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Effortless Documentation",
                desc: "Convert patient-provider conversations into structured clinical notes in real-time."
              },
              {
                title: "Maximized Reimbursements",
                desc: "Enhance billing accuracy with precise CPT coding and eligibility verification."
              },
              {
                title: "Smart Task Automation",
                desc: "Automate reminders and documentation to focus more on patient care."
              },
              {
                title: "Real-Time Analytics",
                desc: "Gain actionable insights into care gaps and billing trends."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-blue-600 text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Productivity Section --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Boost Productivity, Not Workload</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our platform acts as a virtual assistant for your care team. From scheduling check-ins to documenting time spent, we handle the busywork—so you can focus on patients.
          </p>
        </div>
      </section>

      {/* --- EHR Integration --- */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="/images/rcmservices.jpg" alt="EHR integration" className="rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamless EHR Integration</h2>
              <p className="text-lg text-gray-600 mb-6">
                MedicoTech AI Medical Scribe integrates with major EHRs, enabling real-time data exchange and simplifying workflows.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <p className="italic text-gray-700">
                  "We've seen a 45% increase in care coordination efficiency since switching to MedicoTech."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MedicalScribingPage;