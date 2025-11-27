'use client';

import { useGSAP } from '@gsap/react';
import stepDark from '@public/images/home-page-15/step-dark.png';
import step from '@public/images/home-page-15/step.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Process = () => {
  const stepLine1 = useRef<SVGSVGElement>(null);
  const stepLine2 = useRef<SVGSVGElement>(null);
  const stepLine3 = useRef<SVGSVGElement>(null);
  const stepLine4 = useRef<SVGSVGElement>(null);

  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // Wait for elements to be available
      const timer = setTimeout(() => {
        const stepLines = [stepLine1.current, stepLine2.current, stepLine3.current, stepLine4.current].filter(
          Boolean,
        ) as SVGSVGElement[];

        if (!stepLines.length) return;

        gsap.set(stepLines, { height: 0 });

        stepLines.forEach((line, index) => {
          gsap.to(line, {
            height: 380,
            duration: 1.5,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: line,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }, 100);

      return () => clearTimeout(timer);
    },
    { scope: scopeRef },
  );

  return (
    <section className="xl:py-[100px] md:pt-20 pb-[100px] md:pb-[180px] lg:pb-[200px] pt-16">
      <div className="main-container" ref={scopeRef}>
        <div className="text-center space-y-5 mb-14 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Process</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>How we&apos;ll work together</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="max-w-[610px] mx-auto">
                I follow a process that&apos;s transparent, collaborative, and results-driven—built around clear
                communication and creative problem-solving.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div>
          <div className="step-container max-w-[870px] mx-auto mb-[200px]">
            <div className="relative">
              <div>
                <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                  <figure className="size-7">
                    <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                    <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                  </figure>
                </div>
                <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                  <svg
                    ref={stepLine1}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-1 h-[0px]"
                    viewBox="0 0 2 222"
                    fill="none">
                    <path
                      d="M1 1L0.99999 221"
                      stroke="url(#paint0_linear_1182_24963_step1)"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1182_24963_step1"
                        x1="0.5"
                        y1={1}
                        x2="0.49999"
                        y2={221}
                        gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#64D9FD" />
                        <stop offset="0.25" stopColor="#7E57FD" />
                        <stop offset="0.5" stopColor="white" />
                        <stop offset={1} stopColor="#B04BFD" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">STEP 1</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5">Kickoff call &amp; brand discovery</h3>
                    <p>
                      We begin by understanding your vision and goals through a detailed discovery call to align on the
                      project&apos;s direction.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="relative">
              <div>
                <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                  <figure className="size-7">
                    <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                    <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                  </figure>
                </div>
                <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                  <svg
                    ref={stepLine2}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-1 h-[0px]"
                    viewBox="0 0 2 222"
                    fill="none">
                    <path
                      d="M1 1L0.99999 221"
                      stroke="url(#paint0_linear_1182_24963_step2)"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1182_24963_step2"
                        x1="0.5"
                        y1={1}
                        x2="0.49999"
                        y2={221}
                        gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#64D9FD" />
                        <stop offset="0.25" stopColor="#7E57FD" />
                        <stop offset="0.5" stopColor="white" />
                        <stop offset={1} stopColor="#B04BFD" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="absolute lg:right-0 lg:top-0 right-1/2 lg:translate-x-0 lg:translate-y-0 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">STEP 2</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[293px]">
                      Strategy, wireframes &amp; creative direction
                    </h3>
                    <p>
                      We begin by understanding your vision and goals through a detailed discovery call to align on the
                      project&apos;s direction.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="relative">
              <div>
                <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                  <figure className="size-7">
                    <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                    <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                  </figure>
                </div>
                <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                  <svg
                    ref={stepLine3}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-1 h-[0px]"
                    viewBox="0 0 2 222"
                    fill="none">
                    <path
                      d="M1 1L0.99999 221"
                      stroke="url(#paint0_linear_1182_24963_step3)"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1182_24963_step3"
                        x1="0.5"
                        y1={1}
                        x2="0.49999"
                        y2={221}
                        gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#64D9FD" />
                        <stop offset="0.25" stopColor="#7E57FD" />
                        <stop offset="0.5" stopColor="white" />
                        <stop offset={1} stopColor="#B04BFD" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">STEP 3</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[236px]">
                      Design &amp; development in sprints
                    </h3>
                    <p>
                      We begin by understanding your vision and goals through a detailed discovery call to align on the
                      project&apos;s direction.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="relative">
              <div>
                <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                  <figure className="size-7">
                    <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                    <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                  </figure>
                </div>
                <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                  <svg
                    ref={stepLine4}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-1 h-[0px]"
                    viewBox="0 0 2 222"
                    fill="none">
                    <path
                      d="M1 1L0.99999 221"
                      stroke="url(#paint0_linear_1182_24963_step4)"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1182_24963_step4"
                        x1="0.5"
                        y1={1}
                        x2="0.49999"
                        y2={221}
                        gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#64D9FD" />
                        <stop offset="0.25" stopColor="#7E57FD" />
                        <stop offset="0.5" stopColor="white" />
                        <stop offset={1} stopColor="#B04BFD" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="absolute lg:right-0 lg:top-0 right-1/2 lg:translate-x-0 lg:translate-y-0 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">STEP 4</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[236px]">
                      Feedback, refinement &amp; final delivery
                    </h3>
                    <p>
                      We begin by understanding your vision and goals through a detailed discovery call to align on the
                      project&apos;s direction.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="relative">
              <div>
                <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                  <figure className="size-7">
                    <Image src={step} alt="step" className="w-full h-full object-cover dark:hidden" />
                    <Image src={stepDark} alt="step" className="w-full h-full object-cover hidden dark:block" />
                  </figure>
                </div>
              </div>
              <RevealAnimation delay={0.4}>
                <div className="absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-16 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">STEP 5</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[203px]">
                      Post-launch support &amp; handoff
                    </h3>
                    <p>
                      We begin by understanding your vision and goals through a detailed discovery call to align on the
                      project&apos;s direction.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
