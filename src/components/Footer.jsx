'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    let rotation = 0;

    const rotateLogo = () => {
      rotation = (rotation + 0.5) % 360;
      logo.style.transform = `rotateY(${rotation}deg)`;
      requestAnimationFrame(rotateLogo);
    };

    const animationId = requestAnimationFrame(rotateLogo);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6 perspective-1000">
              <div 
                ref={logoRef}
                className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-1000"
              >
                <svg
                  className="w-12 h-12 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L20 9v6l-8 4-8-4V9l8-4.2z" />
                  <path d="M12 16l-4-2v-4l4 2 4-2v4l-4 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">MedicoTech Solutions</h2>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-blue-300" />
                <p>3600 Balcones Drive, #18270 Austin, TX</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-blue-300" />
                <p>+1 (297) 263-792</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-300" />
                <p>info@medicotechsolutions.com</p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/medical-billing" className="hover:text-blue-300 transition-colors">Medical Billing</Link></li>
              <li><Link href="/free-audit" className="hover:text-blue-300 transition-colors">Free Audit</Link></li>
              <li><Link href="/rcm" className="hover:text-blue-300 transition-colors">RCM</Link></li>
              <li><Link href="/clinical-services" className="hover:text-blue-300 transition-colors">Clinical Services</Link></li>
              <li><Link href="/digital-marketing" className="hover:text-blue-300 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/training" className="hover:text-blue-300 transition-colors">Training & Bootcamp</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-blue-300 transition-colors">FAQs</Link></li>
              <li><Link href="/testimonials" className="hover:text-blue-300 transition-colors">Testimonials</Link></li>
              <li><Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Newsletter</h3>
            <p className="mb-4 text-blue-100">
              Stay updated with the latest in medical billing solutions and healthcare innovations - delivered straight to your inbox!
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-blue-300 text-sm">
            <Link href="/privacy" className="hover:text-white mr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <FaFacebookF className="text-blue-300 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <FaTwitter className="text-blue-300 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <FaLinkedinIn className="text-blue-300 hover:text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <FaInstagram className="text-blue-300 hover:text-white" />
            </a>
          </div>
          
          <div className="mt-4 md:mt-0 text-blue-300 text-sm">
            © {new Date().getFullYear()} MedicoTech Solutions. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;