'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Immediate redirect for faster loading
    if (pathname === '/') {
      router.replace('/home');
    }
  }, [pathname, router]);

  // Minimal loading state
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );
}
