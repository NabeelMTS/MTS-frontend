'use client';
import { useState, useEffect, createContext, useContext } from 'react';
import { FaCheck } from 'react-icons/fa';



const TelemedicinePage = () => {
    useEffect(() => {
    document.title = "Telemedicine - MedicoTech Solutions";
  }, []);
  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
                  <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
           <div className="absolute inset-0 opacity-30">
          <img src="/images/hero.jpg" alt="Doctors reviewing charts" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Telemedicine & Virtual Care Services</h1>
            <p className="text-3xl md:text-2xl mb-8">
       Empowering Healthcare Through Innovative Virtual Solutions
            </p>
            <p className="text-m md:text-l mb-8"> Revolutionizing healthcare delivery with comprehensive telemedicine services that enhance access and quality.</p>
            <button onClick={() => window.location.href = '/contact'} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Unlock Your Growth Now
            </button>
          </div>
        </div>
        </div>
      </section>



      {/* --- Our Services --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Virtual Consultations",
                desc: "Real-time video consultations between patients and providers."
              },
              {
                title: "Remote Patient Monitoring",
                desc: "Continuous health monitoring for proactive care."
              },
              {
                title: "Chronic Disease Management",
                desc: "Specialized programs for diabetes, hypertension, etc."
              },
              {
                title: "Mental Health Services",
                desc: "Secure therapy and counseling sessions."
              },
              {
                title: "Telehealth Billing Support",
                desc: "Compliant coding and billing services."
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <h3 className="text-blue-600 text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Key Features --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "HIPAA-Compliant Platforms - Secure patient data protection",
              "User-Friendly Interfaces - Intuitive for patients and providers",
              "Integrated EHR Systems - Seamless data flow with your records",
              "24/7 Technical Support - Round-the-clock assistance",
              "Customizable Solutions - Tailored to your specialty needs"
            ].map((feature, i) => (
              <div key={i} className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className='text-blue-600'>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose MedicoTech Solutions?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Expertise in Telehealth",
              "Commitment to Innovation",
              "Patient-Centric Approach"
            ].map((reason, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TelemedicinePage;