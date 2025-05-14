"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSolutions = () => {
    setIsResourcesOpen(false);
    setIsSolutionsOpen(!isSolutionsOpen);
  };
  
  const toggleResources = () => {
    setIsSolutionsOpen(false);
    setIsResourcesOpen(!isResourcesOpen);
  };
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img
                src="/Logo/icon.png"
                className="h-8 w-8 text-blue-600"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">MedicoTechSolutions</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleSolutions}
                className="text-gray-900 group-hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
              >
                Solutions
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isSolutionsOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 grid-cols-3">
                      {/* Billing Solutions Column */}
                      <div>
                        <h3 className="text-sm font-medium text-blue-600 mb-4">Billing Solutions</h3>
                        <div className="space-y-4">
                          <Link href="/medical-billing" className="text-gray-900 hover:text-blue-600 text-sm">
                            Medical Billing Services
                          </Link>
                          <Link href="/medical-coding" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Medical Coding Services
                          </Link>
                          <Link href="/rcm-services" className="text-gray-900 hover:text-blue-600 text-sm block">
                            RCM Services
                          </Link>
                          <Link href="/credentialing" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Provider Credentialing & Enrollment
                          </Link>
                        </div>
                      </div>

                      {/* Clinical Services Column */}
                      <div>
                        <h3 className="text-sm font-medium text-blue-600 mb-4">Clinical Services</h3>
                        <div className="space-y-4">
                          <Link href="/care-management" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Care Management
                          </Link>
{/*                           <Link href="/clinical-pharmacist" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Clinical Pharmacist Services
                          </Link> */}
                          <Link href="/medical-scribing" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Medical Scribing Services
                          </Link>
                          <Link href="/telemedicine" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Telemedicine & Virtual Care Services
                          </Link>
                        </div>
                      </div>

                      {/* Independent Links Column */}
                      <div>
                        <h3 className="text-sm text-900 font-medium text-blue-600 mb-4">Services</h3>
                        <div className="space-y-4">
                          <Link href="/digital-marketing" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Healthcare Digital Marketing
                          </Link>
                          <Link href="/outsourcing" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Healthcare Outsourcing Solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href="/specialties" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
            Specialties
            </Link>

            {/* Company Link */}
            <Link href="/company" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Company
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleResources}
                className="text-gray-900 group-hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200"
              >
                Resources
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isResourcesOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-[200px] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative bg-white px-5 py-6">
                      <div>
                        <div className="space-y-4">
                          <Link href="/blog" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Blog
                          </Link>
                          <Link href="/case-studies" className="text-gray-900 hover:text-blue-600 text-sm block">
                            Case Studies
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="ml-8 px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1 px-4">
          <Link 
            href="/" 
            className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <button
            onClick={toggleSolutions}
            className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 flex justify-between items-center"
          >
            Solutions
            <svg
              className={`ml-1 h-4 w-4 transition-transform ${isSolutionsOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isSolutionsOpen && (
            <div className="px-4 py-2 space-y-2 bg-gray-50">
              <h3 className="text-sm font-medium text-blue-600 px-2">Billing Solutions</h3>
              <Link href="/medical-billing" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Medical Billing Services
              </Link>
              <Link href="/medical-coding" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Medical Coding Services
              </Link>
              <Link href="/rcm-services" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                RCM Services
              </Link>
              <Link href="/credentialingpage" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Provider Credentialing & Enrollment
              </Link>
              
              <h3 className="text-sm font-medium text-blue-600 px-2 mt-4">Clinical Services</h3>
              <Link href="/care-management" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Care Management
              </Link>
{/*               <Link href="/clinical-pharmacist" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Clinical Pharmacist Services
              </Link> */}
              <Link href="/medical-scribing" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Medical Scribing Services
              </Link>
  {/*             <Link href="/record-keeping" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Medical Record Keeping & Documentation
              </Link> */}
              <Link href="/telemedicine" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Telemedicine & Virtual Care Services
              </Link>
              <h3 className="text-sm font-medium text-blue-600 px-2 mt-4">Services</h3>
              <Link href="/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Healthcare Digital Marketing
              </Link>
              <Link href="/outsourcing" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Healthcare Outsourcing Solutions
              </Link>
            </div>
          )}
          <Link href="/specialties" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
            Specialties
          </Link>
          <Link href="/company" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600">
            Company
          </Link>
          <button
            onClick={toggleResources}
            className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 flex justify-between items-center"
          >
            Resources
            <svg
              className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isResourcesOpen && (
            <div className="px-4 py-2 space-y-2 bg-gray-50">
              <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Blog
              </Link>
              <Link href="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">
                Case Studies
              </Link>
            </div>
          )}
        </div>
        <div className="px-5 py-4 border-t border-gray-200">
          <Link
            href="/contact"
            className="w-full flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;