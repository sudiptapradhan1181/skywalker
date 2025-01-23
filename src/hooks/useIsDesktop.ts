'use client';
import { useState, useEffect } from 'react';

export function useIsDesktop(breakpoint: number = 768): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Ensure this runs only in the browser
    const handleResize = () => setIsDesktop(window.innerWidth >= breakpoint);

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
}
