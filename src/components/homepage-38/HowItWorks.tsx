import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import StepCard, { StepCardProps } from './StepCard';
import StepDirection from './StepDirection';

const HowItWorks = () => {
  const stepCardData: StepCardProps[] = [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Sign up',
      description: 'Get started for free in just a few seconds!',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Import or start fresh',
      description: 'Upload your resume or paste your LinkedIn profile.',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Paste the job details',
      description: 'Let AI help you jazz up your resume!',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Apply & track',
      description: 'Submit applications and track your progress all in one place.',
    },
  ];

  return (
    <section
      className="pt-16 lg:pt-22 xl:pt-39 pb-12 md:pb-16 lg:pb-22 xl:pb-28"
      aria-labelledby="how-it-works-heading">
      <div className="main-container">
        <div className="space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-19">
          <div className="text-center space-y-3">
            <RevealAnimation delay={0.1}>
              <h2 id="how-it-works-heading" itemProp="name">
                How it works
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-[#323A44]" itemProp="description">
                Step-by-step Flow
              </p>
            </RevealAnimation>
          </div>
          {/* cards  */}
          <div
            className="flex max-xl:flex-wrap items-center justify-center gap-x-3 gap-y-6 relative"
            role="list"
            aria-label="Step-by-step process to use NextSaaS">
            {/* card one  */}
            {stepCardData.map((step, index) => (
              <RevealAnimation key={step.id} delay={0.1 + index * 0.2} direction="left">
                <StepCard key={step.id} {...step} className={cn(index % 2 === 0 ? 'bg-background-3' : 'bg-ns-green')} />
              </RevealAnimation>
            ))}

            {/* -> line 1  */}
            <RevealAnimation delay={0.6} direction="left">
              <StepDirection className="left-[23.5%] md:block" />
            </RevealAnimation>
            {/* -> line 2  */}
            <RevealAnimation delay={0.4} direction="left">
              <StepDirection className="left-1/2 -translate-x-1/2 lg:block" />
            </RevealAnimation>
            {/* -> line 3  */}
            <RevealAnimation delay={0.8} direction="left">
              <StepDirection className="right-[23.5%] md:block" />
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.1}>
          <div className="text-center mt-14 flex items-center justify-center">
            <div className="group  w-[90%] sm:w-auto">
              <Link
                href="/signup-03"
                className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-background-5 border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                  Get Started now
                </span>
                <div className="relative overflow-hidden size-6">
                  {/* one  */}
                  <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M11 5H13V7H11V5Z" fill="white" />
                      <path d="M5 5H7V7H5V5Z" fill="white" />
                      <path d="M14 8H16V10H14V8Z" fill="white" />
                      <path d="M8 8H10V10H8V8Z" fill="white" />
                      <path d="M17 11H19V13H17V11Z" fill="white" />
                      <path d="M11 11H13V13H11V11Z" fill="white" />
                      <path d="M14 14H16V16H14V14Z" fill="white" />
                      <path d="M8 14H10V16H8V14Z" fill="white" />
                      <path d="M11 17H13V19H11V17Z" fill="white" />
                      <path d="M5 17H7V19H5V17Z" fill="white" />
                    </svg>
                  </span>
                  {/* two  */}
                  <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M11 5H13V7H11V5Z" fill="white" />
                      <path d="M5 5H7V7H5V5Z" fill="white" />
                      <path d="M14 8H16V10H14V8Z" fill="white" />
                      <path d="M8 8H10V10H8V8Z" fill="white" />
                      <path d="M17 11H19V13H17V11Z" fill="white" />
                      <path d="M11 11H13V13H11V11Z" fill="white" />
                      <path d="M14 14H16V16H14V14Z" fill="white" />
                      <path d="M8 14H10V16H8V14Z" fill="white" />
                      <path d="M11 17H13V19H11V17Z" fill="white" />
                      <path d="M5 17H7V19H5V17Z" fill="white" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

HowItWorks.displayName = 'HowItWorks';
export default HowItWorks;
