'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseProgressAnimationOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  triggerOnScroll?: boolean;
}

export const useProgressAnimation = (targetValue: number, options: UseProgressAnimationOptions = {}) => {
  const { duration = 2, delay = 0, ease = 'power2.out', triggerOnScroll = true } = options;

  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Reset value on every animation run
      setValue(0);

      const counter = { val: 0 };

      if (triggerOnScroll) {
        // Animate on scroll trigger
        gsap.to(counter, {
          val: targetValue,
          duration: duration,
          delay: delay,
          ease: ease,
          scrollTrigger: {
            trigger: elementRef.current,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true, // Refresh on window resize/reload
            refreshPriority: -1, // Lower priority to ensure proper initialization
            onRefresh: () => {
              // Reset counter and value when refreshing
              counter.val = 0;
              setValue(0);
            },
          },
          onUpdate: () => {
            setValue(Math.floor(counter.val));
          },
          onComplete: () => {
            setValue(targetValue);
          },
        });
      } else {
        // Animate immediately
        gsap.to(counter, {
          val: targetValue,
          duration: duration,
          delay: delay,
          ease: ease,
          onUpdate: () => {
            setValue(Math.floor(counter.val));
          },
          onComplete: () => {
            setValue(targetValue);
          },
        });
      }

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === elementRef.current) {
            trigger.kill();
          }
        });
      };
    },
    {
      scope: elementRef,
      dependencies: [targetValue, duration, delay, ease, triggerOnScroll], // Re-run when dependencies change
    },
  );

  return { value, ref: elementRef };
};
