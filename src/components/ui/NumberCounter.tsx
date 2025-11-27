'use client';

import { useProgressAnimation } from '@/hooks/useProgressAnimation';

interface NumberCounterProps {
  value: number;
  label?: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
  duration?: number;
  delay?: number;
  triggerOnScroll?: boolean;
  formatNumber?: boolean;
}

const NumberCounter = ({
  value,
  label,
  suffix = '',
  prefix = '',
  className = '',
  numberClassName = '',
  labelClassName = '',
  duration = 2,
  delay = 0,
  triggerOnScroll = true,
  formatNumber = true,
}: NumberCounterProps) => {
  const { value: animatedValue, ref } = useProgressAnimation(value, {
    duration,
    delay,
    triggerOnScroll,
  });

  const formatValue = (num: number) => {
    if (!formatNumber) return num.toString();

    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className={`text-4xl font-bold ${numberClassName}`}>
        {prefix}
        {formatValue(animatedValue)}
        {suffix}
      </div>
      {label && <p className={`text-gray-600 dark:text-gray-400 mt-2 ${labelClassName}`}>{label}</p>}
    </div>
  );
};

export default NumberCounter;
