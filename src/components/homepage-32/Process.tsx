'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';

interface ProcessItem {
  id: number;
  stepNumber: string;
  title: string;
  progressWidth: string;
}

const processItems: ProcessItem[] = [
  {
    id: 1,
    stepNumber: '01',
    title: 'Boost team efficiency',
    progressWidth: '0%',
  },
  {
    id: 2,
    stepNumber: '02',
    title: 'Remote device access',
    progressWidth: '0%',
  },
  {
    id: 3,
    stepNumber: '03',
    title: 'Zero maintenance required',
    progressWidth: '0%',
  },
];

const Process = () => {
  const { ref } = useProgressStepsAnimation({
    delay: 0.5,
    duration: 2,
    delayBetweenSteps: 2,
    triggerOnScroll: true,
  });

  return (
    <RevealAnimation delay={0.1}>
      <section className="xl:py-[200px] sm:py-[100px] py-16 bg-background-2 dark:bg-background-5">
        <div className="main-container">
          <div className="md:space-y-3 space-y-2 md:mb-[70px] mb-12 text-center">
            <RevealAnimation delay={0.1}>
              <h2>Metrics are made to be shared</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[402px] mx-auto">
                &quot;At metrics are made to be shared, we believe in the power of transparency and collaboration.
              </p>
            </RevealAnimation>
          </div>
          <div
            ref={ref}
            className="progress-container grid grid-cols-12 lg:gap-8 gap-y-10 items-start sm:max-w-full max-w-[450px] sm:mx-0 mx-auto px-3 sm:px-5 lg:px-0">
            {processItems.map((process, index) => (
              <RevealAnimation key={process.id} delay={0.3 + index * 0.1}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div>
                    <div className="w-full bg-secondary dark:bg-stroke-6 h-1 rounded-full relative">
                      <div
                        className={`progress-line w-[${process.progressWidth}] absolute inset-0 bg-(image:--color-gradient-1) rounded-full h-full -left-0`}
                      />
                    </div>
                    <p className="text-tagline-1 md:text-tagline-2 text-primary-500 py-3">{process.stepNumber}</p>
                    <h5 className="lg:text-heading-5 text-heading-6">{process.title}</h5>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Process;
