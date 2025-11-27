'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollExpand = ({ image }: { image: StaticImageData }) => {
  const scrollExpandRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const element = scrollExpandRef.current;
      if (!element) return;

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        gsap.set(element, { minWidth: 'auto' });
        return;
      }

      // Set initial state
      gsap.set(element, { minWidth: '500px' });

      // Create ScrollTrigger for desktop
      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: 'top 60%',
        end: 'bottom 40%',
        onEnter: () => {
          gsap.to(element, {
            minWidth: '950px',
            duration: 0.5,
            ease: 'power2.out',
          });
        },
        onEnterBack: () => {
          gsap.to(element, {
            minWidth: '950px',
            duration: 0.5,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(element, {
            minWidth: '500px',
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      });

      // Cleanup function
      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: scrollExpandRef },
  );

  return (
    <figure ref={scrollExpandRef} className="rounded-[20px] overflow-hidden max-h-[380px] min-w-[500px] w-full">
      <Image src={image} className="w-full h-full object-cover" alt="hero-slide-4" />
    </figure>
  );
};

export default ScrollExpand;
