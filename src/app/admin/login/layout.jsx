'use client';

import { SessionProvider } from 'next-auth/react';

export default function LoginLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
