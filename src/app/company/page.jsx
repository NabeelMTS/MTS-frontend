'use client';
import { useState, useEffect, createContext, useContext } from 'react';


const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  useEffect(() => {
    document.title = "Company - MedicoTech Solutions";
  }, []);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MedicoTech Solutions (MTS)</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Trusted medical billing, coding, and healthcare IT services across the USA
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center border-b border-gray-200 mb-12">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-6 py-3 font-medium ${activeTab === 'story' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              OUR STORY
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-3 font-medium ${activeTab === 'mission' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              OUR MISSION
            </button>
            <button
              onClick={() => setActiveTab('commitments')}
              className={`px-6 py-3 font-medium ${activeTab === 'commitments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              OUR COMMITMENTS
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`px-6 py-3 font-medium ${activeTab === 'values' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              OUR VALUES
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'story' && (
              <div className="space-y-8">
                <p className="text-lg text-gray-700">
                  At MedicoTech Solutions, we deliver trusted medical billing, coding, and healthcare IT services across the USA. Our mission is simple: help healthcare providers grow their revenue, stay compliant, and focus on what they do best—delivering exceptional patient care. Backed by years of expertise, cutting-edge technology, and a deep understanding of healthcare operations, we're here to make your practice more profitable and stress-free.
                </p>
                
                {/* Practice Growth Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <p className="text-4xl font-bold text-blue-600">10K+</p>
                    <p className="text-gray-700 mt-2">Claims Processed</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <p className="text-4xl font-bold text-blue-600">98%</p>
                    <p className="text-gray-700 mt-2">Claim Acceptance</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl text-center">
                    <p className="text-4xl font-bold text-blue-600">86%</p>
                    <p className="text-gray-700 mt-2">Client Retention</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-lg text-gray-700">
                    Empowering healthcare providers with transparent, efficient, and compliant billing and IT solutions—helping you maximize revenue and minimize administrative headaches.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-lg text-gray-700">
                    To be recognized as a leading name in medical billing and healthcare IT solutions across the United States—where trust, results, and innovation define every client relationship.
                  </p>
                </div>
                
                {/* Commitment Graphic */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Our Commitment</h3>
                  <p className="text-xl text-center mb-8">
                    Some act community to deliver better healthcare outcomes for all
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-4xl font-bold">50+</p>
                      <p>Specialties Supported</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">100%</p>
                      <p>HIPAA Compliant</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold">24/7</p>
                      <p>Support Available</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'commitments' && (
              <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Accuracy First</h3>
                  <p className="text-gray-700">Precise billing and coding, every claim, every time.</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Compliance Matters</h3>
                  <p className="text-gray-700">100% HIPAA-compliant processes to protect your practice.</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Client-Centric</h3>
                  <p className="text-gray-700">Tailored solutions, not one-size-fits-all.</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Results-Driven</h3>
                  <p className="text-gray-700">ROI-focused strategies that directly boost your bottom line.</p>
                </div>
                
                <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">Partnership Mindset</h3>
                  <p className="text-gray-700">We succeed only when you succeed.</p>
                </div>
                
                {/* Why Choose MTS Section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MTS?</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-600 text-lg mb-2">US-Based Expertise</h4>
                      <p className="text-gray-700">We understand the nuances of American healthcare and insurance systems.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-600 text-lg mb-2">End-to-End Solutions</h4>
                      <p className="text-gray-700">From eligibility verification to denial management and revenue cycle consulting.</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-blue-600 text-lg mb-2">Proven Results</h4>
                      <p className="text-gray-700">Helping practices boost collections, cut down A/R days, and achieve better cash flow.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-lg text-blue-600 font-semibold">Integrity in every transaction</h4>
                      <p className="text-gray-600 mt-1">Honest, transparent dealings with clients and partners.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-lg text-blue-600 font-semibold">Innovation that fuels efficiency</h4>
                      <p className="text-gray-600 mt-1">Continually adopting new technologies to improve outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-lg text-blue-600 font-semibold">Commitment to long-term success</h4>
                      <p className="text-gray-600 mt-1">We grow when our clients grow.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-lg text-blue-600 font-semibold">Personalized service</h4>
                      <p className="text-gray-600 mt-1">Tailored solutions for your practice's unique needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Stress-Free Billing?</h2>
          <p className="text-xl mb-8">
            Let MedicoTech Solutions take the complexity out of billing and IT management.
            <br />
            👉 Contact Us Today and see the difference real partnership makes.
          </p>
          <button onClick={() => window.location.href = '/contact'} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Unlock Your Growth Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;