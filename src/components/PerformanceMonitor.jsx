"use client";
import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor page load performance
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page Load Time:', entry.loadEventEnd - entry.loadEventStart, 'ms');
            console.log('DOM Content Loaded:', entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart, 'ms');
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });

      // Monitor Core Web Vitals
      if ('web-vital' in window) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        });
      }

      return () => observer.disconnect();
    }
  }, []);

  return null;
};

export default PerformanceMonitor; 