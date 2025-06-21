"use client";
import '../app/globals.css';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Suspense } from 'react';
import ToastProvider from '@/components/ToastProvider';
import LoadingProvider from '@/components/LoadingProvider';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';

// Minimal loading component for faster rendering
function PageLoading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default function RootLayout({ children, title = "MedicoTech Solutions" }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/icon.png" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="MedicoTech Solutions - Healthcare IT and Medical Billing Services" />
        {/* Preload critical resources */}
        <link rel="preload" href="/logo/icon.png" as="image" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/app/globals.css" as="style" />
      </head>
      <body className="min-h-screen">
        <LoadingProvider>
          <ServiceWorkerRegistration />
          <Header />
          <main>
            <Suspense fallback={<PageLoading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
          <ToastProvider />
        </LoadingProvider>
      </body>
    </html>
  );
}
