'use client';

import AdminNav from '../components/AdminNav';
import { useSession, SessionProvider } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({ children }) {
  return (
    <SessionProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SessionProvider>
  );
}

function AdminLayoutContent({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'unauthenticated' && !pathname.includes('/admin/login')) {
      router.replace('/admin/login');
    }
  }, [status, pathname]);

  // Don't show admin layout on login page
  if (pathname === '/admin/login') {
    return children;
  }

  // Enhanced loading state
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="space-y-4">
          <div className="animate-pulse rounded-full h-12 w-12 bg-blue-100 mx-auto"></div>
          <p className="text-center text-gray-500">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  // If not authenticated and not on login page, show nothing while redirecting
  if (status === 'unauthenticated' && !pathname.includes('/admin/login')) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNav />
      <div className='p-6'></div>
      <div className="p-4 sm:p-6 lg:p-8 pt-20 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}