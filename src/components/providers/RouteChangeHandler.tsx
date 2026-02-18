'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

// Register plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * RouteChangeHandler
 *
 * Gère le scroll-to-top et le refresh de ScrollTrigger lors des navigations client-side.
 *
 * IMPORTANT : ne PAS kill les ScrollTriggers ici. Le cleanup des animations
 * est géré automatiquement par useGSAP (@gsap/react) au démontage des composants.
 * Tuer manuellement les triggers détruit aussi ceux des NOUVEAUX composants
 * (les effects enfants s'exécutent AVANT les effects parents), ce qui laisse
 * les éléments bloqués en opacity: 0 / blur.
 */
export function RouteChangeHandler() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Skip first render (page load)
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Skip if pathname hasn't actually changed
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;

    // Scroll to top immediately
    window.scrollTo(0, 0);

    // Wait for the new page DOM to be fully painted, then refresh
    // ScrollTrigger so it recalculates positions on the new layout.
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  // This component renders nothing
  return null;
}
