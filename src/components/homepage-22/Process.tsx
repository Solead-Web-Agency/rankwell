'use client';
import { useProgressStepsAnimation } from '@/hooks/useProgressStepsAnimation';
import RevealAnimation from '../animation/RevealAnimation';
interface ProgressStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
}

const progressStepsData: ProgressStep[] = [
  {
    id: '1',
    stepNumber: '01',
    title: 'Boost team efficiency',
    description: 'Reduce time spent on manual device tasks',
  },
  {
    id: '2',
    stepNumber: '02',
    title: 'Remote device access',
    description: 'Update settings or apps without physical contact',
  },
  {
    id: '3',
    stepNumber: '03',
    title: 'Zero maintenance required',
    description: 'Nutritive UI that anyone can manage',
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
    <div ref={ref} className="grid grid-cols-12 lg:gap-8 gap-y-8 items-start progress-container">
      {progressStepsData.map((step, index) => (
        <RevealAnimation key={step.id} delay={0.1 + index * 0.1}>
          <div className="col-span-12 lg:col-span-4">
            <div>
              <div className="w-full bg-stroke-2 dark:bg-stroke-6 h-1 rounded-full relative overflow-hidden">
                <div
                  className={`progress-line ${index === 0 ? 'w-[20%]' : 'w-[0%]'} bg-ns-green rounded-full h-full absolute left-0`}
                />
              </div>
              <p
                className={`text-tagline-1 md:text-tagline-2 text-primary-500 ${index === 0 ? 'py-3' : 'py-2 sm:py-3'}`}>
                {step.stepNumber}
              </p>
              <div className="space-y-1">
                <p className="xl:text-heading-5 sm:text-heading-6 text-tagline-1 dark:text-accent text-secondary">
                  {step.title}
                </p>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default Process;
