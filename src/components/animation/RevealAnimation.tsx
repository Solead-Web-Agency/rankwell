'use client';
import { cn } from '@/utils/cn';
import Springer from '@/utils/springer';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React, { ReactElement, Ref, cloneElement, useRef } from 'react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealAnimationProps {
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
    'data-ns-animate'?: boolean;
  }>;
  duration?: number;
  delay?: number;
  offset?: number;
  instant?: boolean;
  start?: string;
  end?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  useSpring?: boolean;
  rotation?: number;
  animationType?: 'from' | 'to';
  className?: string;
}

const RevealAnimation = ({
  children,
  duration = 0.6,
  delay = 0,
  offset = 60,
  instant = false,
  start = 'top 90%',
  end = 'top 50%',
  direction = 'down',
  useSpring = false,
  rotation = 0,
  animationType = 'from',
  className = '',
}: RevealAnimationProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const pathname = usePathname(); // Track route changes

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) return;

    // Reset element state on each route change
    gsap.set(element, { clearProps: 'all' });

    const spring = useSpring ? Springer.default(0.2, 0.8) : null;

    element.style.opacity = '1';
    element.style.filter = 'blur(0)';

    let animationProps: gsap.TweenVars;

    if (animationType === 'to') {
      animationProps = {
        opacity: 1,
        filter: 'blur(0)',
        duration: duration,
        delay: delay,
        ease: useSpring && spring ? spring : 'power2.out',
      };

      if (rotation !== 0) {
        animationProps.rotation = rotation;
      }
    } else {
      animationProps = {
        opacity: 0,
        filter: 'blur(16px)',
        duration: duration,
        delay: delay,
        ease: useSpring && spring ? spring : 'power2.out',
      };

      if (rotation !== 0) {
        animationProps.rotation = rotation;
      }
    }

    if (!instant) {
      animationProps.scrollTrigger = {
        trigger: element,
        start: start,
        end: end,
        scrub: false,
      };
    }

    switch (direction) {
      case 'left':
        animationProps.x = animationType === 'from' ? -offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { x: -offset });
        }
        break;
      case 'right':
        animationProps.x = animationType === 'from' ? offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { x: offset });
        }
        break;
      case 'down':
        animationProps.y = animationType === 'from' ? offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { y: offset });
        }
        break;
      case 'up':
      default:
        animationProps.y = animationType === 'from' ? -offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { y: -offset });
        }
        break;
    }

    if (animationType === 'to') {
      gsap.to(element, animationProps);
    } else {
      gsap.from(element, animationProps);
    }

    // Cleanup function to kill animation on unmount or route change
    return () => {
      if (animationProps.scrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.trigger === element) {
            trigger.kill();
          }
        });
      }
      gsap.killTweensOf(element);
    };
  }, [duration, delay, offset, instant, start, end, direction, useSpring, rotation, animationType, pathname]);

  if (!children || !React.isValidElement(children)) {
    console.warn('RevealAnimation: Invalid children prop provided');
    return null;
  }

  return cloneElement(children, {
    ref: elementRef,
    className: cn(children?.props?.className, className),
    'data-ns-animate': true,
  });
};

export default RevealAnimation;
