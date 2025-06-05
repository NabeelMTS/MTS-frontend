import React from 'react';
import PropTypes from 'prop-types';

const CTA = ({
  heading,
  subheading,
  buttonText = "Get Started",
  buttonHref = "#",
  secondaryButtonText,
  secondaryButtonHref
}) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Floating decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-100 opacity-40 mix-blend-multiply filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-blue-200 opacity-20 mix-blend-multiply filter blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Teaser heading with animated underline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {heading}
            <span className="block w-24 h-1 bg-blue-400 mx-auto mt-4 transform transition-all duration-500 hover:w-32"></span>
          </h2>
          
          {/* Subheading with smooth hover effect */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed transition-all duration-300 hover:text-gray-800">
            {subheading}
          </p>
          
          {/* Action buttons with micro-interactions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={buttonHref}
              className="relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {buttonText}
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            
            {secondaryButtonText && (
              <a
                href={secondaryButtonHref || "#"}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors duration-300"
              >
                {secondaryButtonText}
              </a>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

CTA.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  secondaryButtonHref: PropTypes.string
};

export default CTA;