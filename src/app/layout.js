"use client";
import '../app/globals.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useState, useEffect, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import ToastProvider from '@/components/ToastProvider';

const LoadingContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}

function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Hide loading after route change
  useEffect(() => {
    setIsLoading(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default function RootLayout({ children, title = "MedicoTech Solutions" }) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin');

  return (
    <LoadingProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo/icon.png" />
          <title>{title}</title>
        </head>
        <body className="min-h-screen">
          {!isAdminPage && <Header />}
          <LoadingOverlay />
          <div>{children}</div>
          {!isAdminPage && <Footer />}
          <ToastProvider />
        </body>
      </html>
    </LoadingProvider>
  );
}

function LoadingOverlay() {
  const { isLoading } = useLoading();
  if (!isLoading) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-200">
      <div className="loader">
        <div className="medical-cross"></div>
      </div>
    </div>
  );
}
