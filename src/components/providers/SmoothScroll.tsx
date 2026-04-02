'use client';

/**
 * SMOOTH SCROLL — Initialise Lenis pour le momentum scrolling
 *
 * Ajoute une décélération progressive au scroll souris (molette).
 * Le trackpad garde son comportement natif.
 * Lenis est déjà installé (package + CSS), il manquait juste l'initialisation.
 */

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
