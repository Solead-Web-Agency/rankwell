'use client';

import { useGSAP } from '@gsap/react';
import heroVideo from '@public/images/home-page-5/hero-vedio.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

const HeroPerspective = () => {
  const figureRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (figureRef.current) {
      // Set initial styles
      gsap.set(figureRef.current, {
        opacity: 0,
        filter: 'blur(20px)',
        transform: 'perspective(1200px) scale(0.896871) rotateX(14.4381deg)',
      });

      // Animate when in view
      ScrollTrigger.create({
        trigger: figureRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(figureRef.current, {
            opacity: 1,
            filter: 'blur(0px)',
            transform: 'perspective(1200px) scale(1) rotateX(0deg)',
            duration: 0.8,
            delay: 0.7,
            ease: 'power2.out',
          });
        },
      });
    }
  });

  return (
    <div className="px-4 md:px-6 lg:px-8 xl:px-0">
      <figure ref={figureRef} className="opacity-0">
        <Image src={heroVideo} alt="Hero video" className="h-auto w-full" />
      </figure>
    </div>
  );
};

export default HeroPerspective;
