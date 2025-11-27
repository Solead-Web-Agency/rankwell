'use client';

import { useProgressAnimation } from '@/hooks/useProgressAnimation';

const data = [
  {
    id: 1,
    title: 'Google',
    value: 40,
  },
  {
    id: 2,
    title: 'Youtube',
    value: 70,
  },
  {
    id: 3,
    title: 'Instagram',
    value: 50,
  },
  {
    id: 4,
    title: 'Pinterest',
    value: 72,
  },
  {
    id: 5,
    title: 'Facebook',
    value: 92,
  },
];

// Individual progress item component
const ProgressItem = ({ item, index }: { item: (typeof data)[0]; index: number }) => {
  const { value, ref } = useProgressAnimation(item.value, {
    duration: 2,
    delay: index * 0.2, // Stagger animation
    triggerOnScroll: true,
  });

  return (
    <div ref={ref} className="space-y-1">
      <p className="font-medium text-secondary dark:text-accent">{item.title}</p>
      <div className="flex items-center gap-3">
        <div className="h-2.5 bg-secondary dark:bg-accent rounded-full flex-1 relative overflow-hidden">
          <div
            className="absolute top-0 bottom-0 left-0 h-full bg-ns-green overflow-hidden rounded-full transition-all duration-300 ease-out"
            style={{ width: `${value}%` }}
          />
        </div>
        <div>
          <p className="text-tagline-3 w-6 text-secondary/60 dark:text-accent/60">{value}%</p>
        </div>
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <>
      {data.map((item, index) => (
        <ProgressItem key={item.id} item={item} index={index} />
      ))}
    </>
  );
};

export default Progress;
