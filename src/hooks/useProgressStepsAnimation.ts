'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseProgressStepsAnimationOptions {
  delay?: number;
  duration?: number;
  delayBetweenSteps?: number;
  ease?: string;
  triggerOnScroll?: boolean;
  scrollTriggerOptions?: {
    start?: string;
    end?: string;
    toggleActions?: string;
  };
}

export const useProgressStepsAnimation = (options: UseProgressStepsAnimationOptions = {}) => {
  const {
    delay = 0,
    duration = 2,
    delayBetweenSteps = 2,
    ease = 'power2.inOut',
    triggerOnScroll = true,
    scrollTriggerOptions = {
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
    },
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const progressLines = containerRef.current?.querySelectorAll('.progress-line');
      if (!progressLines || progressLines.length === 0) return;

      // Set initial state
      gsap.set(progressLines, { width: '0%' });

      if (triggerOnScroll) {
        // Create timeline for sequential animation with scroll trigger
        const progressTimeline = gsap.timeline({
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: scrollTriggerOptions.start,
            end: scrollTriggerOptions.end,
            toggleActions: scrollTriggerOptions.toggleActions,
            invalidateOnRefresh: true, // Refresh on window resize/reload
            refreshPriority: -1, // Lower priority to ensure proper initialization
          },
        });

        // Animate each progress line sequentially
        progressLines.forEach((line, index) => {
          progressTimeline.to(
            line,
            {
              width: '100%',
              duration: duration,
              ease: ease,
            },
            index * delayBetweenSteps, // Each animation starts after the previous one completes
          );
        });
      } else {
        // Animate immediately without scroll trigger
        const progressTimeline = gsap.timeline({
          delay: delay,
        });

        progressLines.forEach((line, index) => {
          progressTimeline.to(
            line,
            {
              width: '100%',
              duration: duration,
              ease: ease,
            },
            index * delayBetweenSteps,
          );
        });
      }

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === containerRef.current) {
            trigger.kill();
          }
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [delay, duration, delayBetweenSteps, ease, triggerOnScroll], // Re-run when options change
    },
  );

  return { ref: containerRef };
};
