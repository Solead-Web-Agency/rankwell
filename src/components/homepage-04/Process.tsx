import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import processDarkImage from '@public/images/home-page-4/process-dark.png';
import processImage from '@public/images/home-page-4/process.png';

const steps = [
  {
    number: '1',
    title: 'Choose domain',
    description: "Choose a domain name that reflects your website's purpose, content, or the nature of your business.",
  },
  {
    number: '2',
    title: 'Login/register',
    description:
      'Take the first step towards creating your website and reaching a wider audience by registering today.',
  },
  {
    number: '3',
    title: 'Make payment',
    description:
      'We offer a variety of secure payment methods to make your payment process convenient and hassle-free.',
  },
];

const Process = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 space-y-[70px] overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Process</span>
          </RevealAnimation>

          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[624px]">What are the steps involved in its operation?</h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[802px]">
                The operation of instantaneous data insights and analytics involves several key steps. It begins with
                data collection, where information is gathered in real-time from various sources such as sensors
              </p>
            </RevealAnimation>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-[100px]">
          <div className="col-span-12 xl:col-span-5">
            <div>
              <RevealAnimation delay={0.4} direction="right" offset={100}>
                <figure className="mx-auto max-h-[547px] max-w-[478px] xl:mx-0">
                  <Image src={processImage} alt="process" className="h-full w-full dark:hidden" />
                  <Image src={processDarkImage} alt="process" className="hidden h-full w-full dark:block" priority />
                </figure>
              </RevealAnimation>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-7">
            <div className="flex flex-col items-center gap-y-5">
              {steps.map((step, idx) => (
                <RevealAnimation key={step.number} delay={0.5 + idx * 0.1}>
                  <div className="bg-background-3 dark:bg-background-7 flex w-full max-w-[596px] flex-col items-start gap-y-4 rounded-[20px] px-7 py-5 sm:flex-row sm:gap-[22px] sm:px-[34px] sm:py-6">
                    {/* Number circle */}
                    <div className="bg-primary-400 text-accent flex size-10 shrink-0 items-center justify-center rounded-full">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="space-y-1">
                      <h3 className="text-secondary text-lg leading-[27px] font-medium">{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
