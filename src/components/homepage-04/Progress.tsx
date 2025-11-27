'use client';
import { useProgressAnimation } from '@/hooks/useProgressAnimation';

interface ProgressProps {
  value?: number;
  duration?: number;
  delay?: number;
  triggerOnScroll?: boolean;
}

const Progress = ({ value = 88, duration = 2.5, delay = 0.3, triggerOnScroll = true }: ProgressProps) => {
  const { value: animatedValue, ref } = useProgressAnimation(value, {
    duration: duration,
    delay: delay,
    triggerOnScroll: triggerOnScroll,
  });

  return (
    <div ref={ref} className="flex items-center justify-between gap-1" role="status" aria-label="Credit limit usage">
      <span className="bg-secondary dark:bg-accent relative inline-block h-1.5 w-full max-w-[229px] rounded-full">
        <span
          className="bg-ns-green absolute top-0 left-0 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${animatedValue}%` }}
        />
      </span>
      <span className="text-tagline-3 dark:text-accent font-normal">{animatedValue}%</span>
    </div>
  );
};

export default Progress;
