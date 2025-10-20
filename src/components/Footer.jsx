'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const Footer = () => {
  const logoRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Subscription failed');
      }

      toast.success('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact Info */}
          <div className="">
            <div className="mb-6 flex p-3 bg-white rounded-lg items-left">
              <img
                ref={logoRef}
                src="/logo/logo.png"
                alt="MedicoTech Solutions Logo"
                className="rounded-lg object-contain"
                style={{
                  display: 'block',
                  margin: '0 auto',
                  transition: 'transform 0.5s',
                  willChange: 'transform',
                }}
                draggable={false}
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-blue-300" />
                <p>5900 Balcones Drive, #18270 Austin, TX, 78731</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-blue-300" />
                <p>+1 (512) 612-5815</p>
              </div>
              <div className="flex items-center">
                <FaWhatsapp className="mr-3 text-blue-300" />
                <p>+1 (512) 325 5672</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mt-1 mr-3 flex-shrink-0 text-blue-300" />
                <p>support@medicotechsolutions.com</p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/medical-billing" className="hover:text-blue-300 transition-colors">Medical Billing</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Free Audit</Link></li>
              <li><Link href="/rcm" className="hover:text-blue-300 transition-colors">RCM</Link></li>
              <li><Link href="/clinical-services" className="hover:text-blue-300 transition-colors">Clinical Services</Link></li>
              <li><Link href="/digital-marketing" className="hover:text-blue-300 transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-700">Newsletter</h3>
            <p className="mb-4 text-blue-100">
              Stay updated with the latest in medical billing solutions and healthcare innovations - delivered straight to your inbox!
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-blue-300"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Subscribe'
                )}
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
            <a href="https://www.linkedin.com/company/medicotechsolutions/" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <FaLinkedinIn className="text-blue-300 hover:text-white" />
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
