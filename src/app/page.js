'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      router.push('/home');
    } else {
      router.push('/not-found'); // Redirect invalid routes to 404
    }
  }, [pathname, router]);

  return null;
}
