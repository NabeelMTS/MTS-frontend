"use client";
import '../app/globals.css';
import Header from '../components/Header.jsx';
import CTA from '../components/CTA.jsx';
import { useState, useEffect } from 'react';

// Removed metadata export as it's not allowed in client components

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Header />
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="loader">
              <div className="medical-cross"></div>
            </div>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </body>
    </html>
  );
}
