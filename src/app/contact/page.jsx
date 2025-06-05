'use client';

import { useEffect } from 'react'; // Add this import
import ConsultationForm from '../../components/ConsultationForm';

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - MedicoTech Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mini Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-900 py-16 flex flex-col items-center justify-center text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Contact Us</h1>
        <p className="text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto">
          Drop your details to <span className="font-black text-green-500">Unlock Pricing Details Now</span>
        </p>
      </section>

      {/* Consultation Form Section */}
      <div className="flex-1 flex items-center justify-center">
        <ConsultationForm />
      </div>
    </div>
  );
}
