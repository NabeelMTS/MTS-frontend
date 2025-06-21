"use client";
import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const LoadingContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [previousPath, setPreviousPath] = useState('');
  const pathname = usePathname();

  // Optimized loading logic with minimal delay
  useEffect(() => {
    // Only show loading for actual page changes and reduce delay
    if (previousPath && previousPath !== pathname) {
      setIsLoading(true);
      
      // Much shorter delay for faster transitions
      const timer = setTimeout(() => {
        setIsLoading(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 150); // Reduced from 300ms to 150ms

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
    
    setPreviousPath(pathname);
  }, [pathname, previousPath]);

  // Memoized loading setter for better performance
  const setLoading = useCallback((loading) => {
    setIsLoading(loading);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading: setLoading }}>
      {children}
      <LoadingOverlay />
    </LoadingContext.Provider>
  );
}

function LoadingOverlay() {
  const { isLoading } = useLoading();
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50 transition-all duration-150">
      <div className="loader">
        <div className="medical-cross"></div>
      </div>
    </div>
  );
} 