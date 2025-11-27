'use client';
import { useLineExpandAnimation } from '@/hooks/useLineExpandAnimation';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const HeroLineGradient = () => {
  const lineExpandRef1 = useRef<HTMLDivElement>(null);
  const lineExpandRef2 = useRef<HTMLDivElement>(null);
  const lineExpandRef3 = useRef<HTMLDivElement>(null);
  const lineExpandRef4 = useRef<HTMLDivElement>(null);
  const lineExpandRef5 = useRef<HTMLDivElement>(null);
  const lineExpandRef6 = useRef<HTMLDivElement>(null);
  const lineExpandRef7 = useRef<HTMLDivElement>(null);
  const lineExpandRef8 = useRef<HTMLDivElement>(null);

  const refs = [
    lineExpandRef1,
    lineExpandRef2,
    lineExpandRef3,
    lineExpandRef4,
    lineExpandRef5,
    lineExpandRef6,
    lineExpandRef7,
    lineExpandRef8,
  ];
  useLineExpandAnimation({ refs });

  return (
    <RevealAnimation delay={0.5}>
      <figure className="max-w-[835px] w-full mx-auto absolute top-0 left-1/2 -translate-x-1/2 h-full flex items-start justify-between -z-10">
        <div ref={lineExpandRef1} className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-1 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
        <div ref={lineExpandRef2} className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-2 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
        <div ref={lineExpandRef3} className="w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-3 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
        <div ref={lineExpandRef4} className="sm:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-4 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
        <div ref={lineExpandRef5} className="sm:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-5 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
        <div ref={lineExpandRef6} className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-6 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
        <div ref={lineExpandRef7} className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-7 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
        <div ref={lineExpandRef8} className="lg:block hidden w-px h-0 bg-stroke-2 dark:bg-stroke-6 relative">
          <div className="gradient-line-8 w-px h-[92px] bg-linear-[180deg,#A585FF,#FFC2AD] absolute top-0 left-0" />
        </div>
      </figure>
    </RevealAnimation>
  );
};

export default HeroLineGradient;
