'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const stepItems = [
  {
    stepNumber: '01',
    title: 'Select a template or create new',
    description: 'Start fast with a template —or build it your way.',
    progressWidth: '25%',
  },
  {
    stepNumber: '02',
    title: 'Customize with visual blocks',
    description: 'Mix and match visual blocks for your perfect design.',
    progressWidth: '0%',
  },
  {
    stepNumber: '03',
    title: 'Deploy & share with one click',
    description: 'Launch and share your app instantly with one click.',
    progressWidth: '0%',
  },
];

const Steps = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div ref={ref} className="main-container progress-container grid grid-cols-1 md:grid-cols-3 gap-8">
        {stepItems.map((step, index) => (
          <RevealAnimation key={index} delay={0.2 + index * 0.2}>
            <div className="flex flex-col space-y-3">
              <div className="w-full h-[2px] bg-stroke-2 relative dark:bg-stroke-6">
                <div className={`absolute progress-line w-[${step.progressWidth}] left-0 bg-ns-green top-0 h-full`} />
              </div>
              <p className="text-tagline-2 text-primary-500">{step.stepNumber}</p>
              <div className="space-y-1">
                <h5>{step.title}</h5>
                <p>
                  {step.description.includes('<br') ? (
                    <>
                      {step.description.split('<br')[0]}
                      <br className="md:block hidden" />
                      {step.description.split('<br')[1]?.replace('>', '')}
                    </>
                  ) : (
                    step.description
                  )}
                </p>
              </div>
            </div>
          </RevealAnimation>
        ))}
      </div>
    </section>
  );
};

export default Steps;
