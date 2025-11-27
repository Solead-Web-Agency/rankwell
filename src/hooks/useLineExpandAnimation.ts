import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { RefObject } from 'react';

interface UseLineExpandAnimationProps {
  refs: RefObject<HTMLDivElement | null>[];
  delay?: number;
  duration?: number;
}

export const useLineExpandAnimation = ({ refs, delay = 0.7, duration = 0.8 }: UseLineExpandAnimationProps) => {
  useGSAP(
    () => {
      // Wait for next tick to ensure refs are available
      const timer = setTimeout(() => {
        const lines = refs.map((ref) => ref.current).filter(Boolean) as HTMLDivElement[];

        if (lines.length > 0) {
          lines.forEach((line) => {
            gsap.to(line, {
              height: '100%',
              duration,
              delay,
              ease: 'power2.out',
            });
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    },
    { scope: refs[0] },
  );
};
