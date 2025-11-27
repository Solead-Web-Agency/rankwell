'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Process = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container space-y-14">
        <div className="space-y-5 text-center mx-auto lg:text-left lg:mx-0">
          <RevealAnimation delay={0.2}>
            <span className="badge inline-block badge-primary-light">Our Process</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="lg:max-w-[396px]">From Idea to app store simplified</h2>
          </RevealAnimation>
        </div>
        <div ref={ref} className="flex flex-col md:flex-row items-center md:items-start lg:items-center gap-[62px]">
          {/* step one  */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-3 max-w-[408px] w-full">
              {/* progress bar  */}
              <div className="w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full relative">
                <div className="progress-line w-0 bg-ns-cyan rounded-full h-full absolute left-0" />
              </div>
              {/* number */}
              <p className="text-tagline-2 text-primary-500">01</p>
              {/* text  */}
              <div className="space-y-2">
                <h2 className="text-heading-5">Discovery &amp; strategy</h2>
                <p className="max-w-[260px] w-full">Start your application in minutes—no paperwork required.</p>
              </div>
            </div>
          </RevealAnimation>
          {/* step two  */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3 max-w-[408px] md:w-full">
              {/* progress bar  */}
              <div className="relative w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full">
                <div className="progress-line w-[0%] bg-ns-cyan rounded-full h-full absolute left-0" />
              </div>
              {/* number */}
              <p className="text-tagline-2 text-primary-500">02</p>
              {/* text  */}
              <div className="space-y-2">
                <h2 className="text-heading-5">Design &amp; prototype</h2>
                <p>Our team reviews your application and offers a personalized loan solution.</p>
              </div>
            </div>
          </RevealAnimation>
          {/* step three  */}
          <RevealAnimation delay={0.6}>
            <div className="space-y-3 max-w-[408px] md:w-full">
              {/* progress bar  */}
              <div className="relative w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full">
                <div className="progress-line w-[0%] bg-ns-cyan rounded-full h-full absolute left-0" />
              </div>
              {/* number */}
              <p className="text-tagline-2 text-primary-500">03</p>
              {/* text  */}
              <div className="space-y-2">
                <h2 className="text-heading-5">Development &amp; testing</h2>
                <p>We handle the coordination, documents, and closing logistics.</p>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Process;
