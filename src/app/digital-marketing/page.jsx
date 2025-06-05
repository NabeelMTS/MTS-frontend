'use client';
import { useState, useEffect, createContext, useContext } from 'react';
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';



const MarketingServicesPage = () => {

  useEffect(() => {
    document.title = "Marketing - MedicoTech Solutions";
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Marketing. Content. Growth.</h1>
            <p className="text-3xl md:text-2xl mb-8">
       Handled by Experts Who Understand Healthcare
            </p>
            <p className="text-m md:text-l mb-8"> From content strategy to daily social media management—we help healthcare providers grow their brand and drive real patient engagement.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Unlock Your Growth Now
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* --- Why Needed Section --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Medical Professionals Need Our Services</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            Most doctors are too busy saving lives to spend hours creating content. That's where we come in.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-blue-600 text-xl font-semibold mb-3">Strategic Visibility</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <FaLinkedin className="w-6 h-6 text-blue-600" />
                <FaTwitter className="w-6 h-6 text-blue-600" />
                <FaYoutube className="w-6 h-6 text-blue-600" />
                <FaFacebook className="w-6 h-6 text-blue-600" />
                <FaInstagram className="w-6 h-6 text-blue-600" />
                <FaTiktok className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-gray-700">We manage your presence across all key platforms</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-blue-600 text-xl font-semibold mb-3">Expert Content Creation</h3>
              <p className="text-gray-700">Tailored content that resonates with medical audiences</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-blue-600 text-xl font-semibold mb-3">Patient Engagement</h3>
              <p className="text-gray-700">Build credibility and trust with your audience</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-blue-600 text-xl font-semibold mb-3">Conversion-Focused Copy</h3>
              <p className="text-gray-700">Copy that turns readers into patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Services --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Direct Response Copywriting",
                desc: "Turn words into revenue with landing pages and email campaigns that convert."
              },
              {
                title: "Social Media Management",
                desc: "Complete management of LinkedIn, Twitter, YouTube with optimized posting schedules."
              },
              {
                title: "Newsletters & Lead Magnets",
                desc: "Create engaging email sequences and lead magnets that build your audience."
              },
              {
                title: "Content Strategy & Planning",
                desc: "30-354 day content calendars aligned with your practice goals."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-blue-600 text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pricing Plans --- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Engagement Plan</h2>
          <p className="text-center text-gray-600 mb-8">Flexible Pricing Designed for Medical Professionals</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-4 text-left">Plan</th>
                  <th className="p-4">Duration</th>
                  <th className="p-4">Daily Cost</th>
                  <th className="p-4">Total Price</th>
                  <th className="p-4">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Starter Plan", "30 Days", "$83.3/day", "$2,499", "Testing the waters"],
                  ["Growth Plan", "60 Days", "$75.00/day", "$4,500", "Building momentum"],
                  ["Authority Plan", "180 Days", "$76.055/day", "$13,690", "Establishing presence"],
                  ["Legacy Plan", "354 Days", "$61.805/day", "$21,879", "Full-scale management"]
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50 text-blue-600 " : "bg-white text-blue-600 "}>
                    {row.map((cell, j) => (
                      <td key={j} className="p-4 border-b border-gray-200">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Note: Plans are up to 75% below market rates. Excludes media buying & web development.
          </p>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose MTS for Your Marketing Needs?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Specialized in healthcare communication",
              "Results-driven direct response approach",
              "Managed by expert copywriters",
              "End-to-end service from planning to publishing"
            ].map((item, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl">
                <div className="flex items-center">
                  <FaCheck className="mr-3 text-green-300" />
                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Medical Brand Online?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Focus on patient care while we handle your marketing strategy.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold">
            Unlock Your Growth Strategy Now
          </button>
          
          {/* Security & FAQ */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto mb-8">
              <h3 className="font-semibold text-blue-800 mb-2">Security & Confidentiality</h3>
              <p className="text-gray-700">All services are HIPAA-compliant to protect patient data.</p>
            </div>
            
            <div className="max-w-2xl mx-auto text-left">
              <h3 className="text-blue-600 font-semibold text-lg mb-4">FAQs</h3>
              <div className="mb-4">
                <p className="text-blue-600 font-medium">Can I customize a plan?</p>
                <p className="text-gray-600">Yes, all packages can be tailored to your needs.</p>
              </div>
              <div>
                <p className="text-blue-600 font-medium">Is there a refund policy?</p>
                <p className="text-gray-600">Partial refunds available within 14 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingServicesPage;