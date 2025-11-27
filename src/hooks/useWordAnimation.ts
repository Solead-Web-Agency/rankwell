'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

interface UseWordAnimationOptions {
  start?: string;
  end?: string;
  stagger?: number;
  duration?: number;
  ease?: string;
  opacity?: number;
  marginRight?: string;
  delay?: number;
}

export const useWordAnimation = (options: UseWordAnimationOptions = {}) => {
  const {
    start = 'top 80%',
    end = 'top 20%',
    stagger = 0.1,
    duration = 1,
    ease = 'power3.out',
    opacity = 0.1,
    marginRight = '0',
    delay = 100,
  } = options;

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const wordSpansRef = useRef<HTMLSpanElement[]>([]);

  useGSAP(
    () => {
      if (!titleRef.current) return;

      // Use SplitText to create word spans
      const split = new SplitText(titleRef.current, {
        type: 'words',
        wordsClass: 'word',
      });

      const words = split.words as HTMLSpanElement[];

      // Set initial styles for each word
      words.forEach((word) => {
        word.style.display = 'inline-block';
        word.style.opacity = opacity.toString();
        word.style.transform = 'translateY(0)';
        word.style.marginRight = marginRight;
        wordSpansRef.current.push(word);
      });

      // Start animation after DOM update
      setTimeout(() => {
        gsap.to(words, {
          scrollTrigger: {
            trigger: titleRef.current,
            start,
            end,
            scrub: true,
          },
          opacity: 1,
          stagger,
          duration,
          ease,
        });
      }, delay);

      return () => {
        split.revert(); // Clean up SplitText
      };
    },
    {
      dependencies: [start, end, stagger, duration, ease, opacity, marginRight, delay],
      scope: titleRef,
    },
  );

  return {
    titleRef,
    wordSpansRef,
  };
};
