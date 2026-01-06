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
 * Gère le refresh de ScrollTrigger lors des navigations client-side.
 * Sans ce handler, les animations GSAP/ScrollTrigger peuvent ne pas se déclencher
 * correctement car les positions de trigger sont calculées sur l'ancienne page.
 *
 * Fonctionnement :
 * 1. Détecte le changement de pathname (navigation Next.js)
 * 2. Scroll to top immédiatement
 * 3. Kill les anciens ScrollTriggers
 * 4. Attend que le DOM soit prêt (requestAnimationFrame)
 * 5. Refresh ScrollTrigger pour recalculer les positions
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

    // Kill all existing ScrollTriggers to prevent stale triggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Wait for DOM to be ready, then refresh ScrollTrigger
    // Using double rAF to ensure paint has occurred
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    });

  }, [pathname]);

  // This component renders nothing
  return null;
}
