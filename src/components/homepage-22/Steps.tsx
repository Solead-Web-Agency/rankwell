import Gradient6 from '@public/images/gradient/gradient-6.png';
import Step1 from '@public/images/home-page-22/step-1.png';
import Step2Dark from '@public/images/home-page-22/step-2-dark.png';
import Step2 from '@public/images/home-page-22/step-2.png';
import Step3 from '@public/images/home-page-22/step-3.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

interface Step {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageDark?: StaticImageData;
}

const stepsData: Step[] = [
  {
    id: '1',
    title: 'Download the app',
    description: 'Downloads available for iOS, Android & enterprise tablets.',
    image: Step1,
  },
  {
    id: '2',
    title: 'Create your account',
    description: 'Add teams, assign policies, and connect devices in minutes.',
    image: Step2,
    imageDark: Step2Dark,
  },
  {
    id: '3',
    title: 'Start managing',
    description: 'Monitor, restrict, or wipe devices remotely any time.',
    image: Step3,
  },
];

const Steps = () => {
  return (
    <section
      className="relative xl:py-[200px] lg:py-[100px] md:py-20 py-16 bg-background-2 dark:bg-background-5"
      aria-label="Hero section">
      <div className="main-container">
        <div className="grid grid-cols-12 lg:gap-10 xl:gap-[68px] gap-y-10 items-start max-lg:justify-items-center">
          <div className="col-span-12 lg:col-span-6 lg:sticky lg:top-28">
            <div className="lg:space-y-14 md:space-y-8 space-y-5 lg:text-left text-center">
              <div className="sm:space-y-3 space-y-1">
                <RevealAnimation delay={0.1}>
                  <h2 className="sm:max-w-[629px] w-full xl:mx-0 mx-auto">Manage any device in 3 easy steps</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p>We streamline automation for a strategic and sustainable AI transition.</p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div>
                  <LinkButton
                    href="/contact-us"
                    className="btn hover:btn-primary dark:btn-transparent btn-secondary btn-md w-[85%] md:w-auto mx-auto">
                    Get started now
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <StackCardWrapper
              topOffset="11vh"
              gap="24px"
              initDelay={100}
              className="w-full lg:flex-1 lg:max-w-full md:max-w-[50%] sm:max-w-[60%] lg:mx-0 mx-auto max-w-full">
              {stepsData.map((step) => (
                <StackCardItem key={step.id}>
                  <div className="sm:max-w-[483px] max-w-[383px] max-sm:min-h-[400px]">
                    <div className="p-2 relative rounded-[20px] z-20 flex items-center justify-center w-full overflow-hidden">
                      <figure className="absolute pointer-events-none -top-[98%] -left-[90%] size-[1000px] -z-10 rotate-[307deg] opacity-50 select-none">
                        <Image src={Gradient6} alt="step" />
                      </figure>
                      <div className="relative z-10 sm:p-8 p-5 rounded-[14px] w-full space-y-6 bg-white dark:bg-black">
                        <div className="space-y-1">
                          <p className="md:text-heading-5 text-heading-6 text-secondary dark:text-accent">
                            {step.title}
                          </p>
                          <p className="max-w-[294px] w-full">{step.description}</p>
                        </div>
                        <figure className="sm:max-w-[403px] max-w-full w-full rounded-2xl overflow-hidden">
                          {step.imageDark ? (
                            <>
                              <Image src={step.image} alt="step" className="size-full dark:hidden" />
                              <Image src={step.imageDark} alt="step" className="size-full hidden dark:block" />
                            </>
                          ) : (
                            <Image src={step.image} alt="step" />
                          )}
                        </figure>
                      </div>
                    </div>
                  </div>
                </StackCardItem>
              ))}
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
