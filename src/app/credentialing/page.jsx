'use client';
import { FaCheck, FaClock, FaHandsHelping, FaUserCog, FaComments } from 'react-icons/fa';
import { useState, useEffect, createContext, useContext } from 'react';


const CredentialingPage = () => {
    useEffect(() => {
    document.title = "Credentialing - MedicoTech Solutions";
  }, []);
  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-30 z-0">
          <img src="/images/hero_2.jpg" alt="Doctors reviewing charts" className="w-full h-full object-cover" />
        </div>
     <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10000000000">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Streamlining Provider Credentialing & Enrollment</h1>
            <p className="text-xl md:text-2xl mb-8">
              Empowering Healthcare Providers to Focus on Patient Care
            </p>
            <p className="text-lg mb-8">
              At MedicoTech Solutions, we specialize in simplifying the complex process of provider credentialing and enrollment. Our comprehensive services ensure that healthcare professionals can join insurance networks swiftly and efficiently.
            </p>
            <button onClick={() => window.location.href = '/contact'} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Unlock Your Growth Now
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose MedicoTech for Credentialing & Enrollment?</h2>
            <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaClock className="w-8 h-8 text-blue-600" />,
                title: "Accelerated Enrollment",
                desc: "Our streamlined processes reduce the time it takes to get credentialed"
              },
              {
                icon: <FaHandsHelping className="w-8 h-8 text-blue-600" />,
                title: "Comprehensive Support",
                desc: "From application to approval, our team handles every step"
              },
              {
                icon: <FaUserCog className="w-8 h-8 text-blue-600" />,
                title: "Customized Solutions",
                desc: "Tailored services whether you're joining a new practice or expanding"
              },
              {
                icon: <FaComments className="w-8 h-8 text-blue-600" />,
                title: "Transparent Communication",
                desc: "Regular updates and dedicated support throughout the process"
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-blue-600 text-xl font-semibold text-center mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Our Services --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Credentialing & Enrollment Services</h2>
            <div className="mt-4 h-1 w-20 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Primary Source Verification - We verify all necessary credentials including education, licenses",
              "Insurance Panel Enrollment - Assistance with Medicare, Medicaid, and commercial networks",
              "CAQH Profile Management - Create and maintain your CAQH profile for seamless access",
              "NPI Registration - Support with obtaining and managing your National Provider Identifier",
              "State License & DEA Registration - Guidance through application and renewal processes",
              "Hospital Privileges Application - Assist in securing hospital privileges"
            ].map((service, i) => (
             <div key={i} className="group hover:bg-blue-600 hover:text-white bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition">
            <div className="flex items-start">
            <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
          <span className="text-gray-500 group-hover:text-white">{service}</span>
            </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Benefits --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Benefits of Our Credentialing Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Reduced Administrative Burden",
                desc: "Let us handle the paperwork, so you can focus on delivering quality care."
              },
              {
                title: "Faster Reimbursements",
                desc: "By expediting the credentialing process, you can begin billing more quickly."
              },
              {
                title: "Enhanced Network Participation",
                desc: "Gain access to a broader patient base through multiple insurance networks."
              },
              {
                title: "Compliance Assurance",
                desc: "Our expertise ensures applications meet the latest regulatory standards."
              }
            ].map((benefit, i) => (
              <div key={i} className="hover:shadow-md bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CredentialingPage;