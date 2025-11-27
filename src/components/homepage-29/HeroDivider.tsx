'use client';

interface HeroDividerProps {
  className?: string;
}
import { useDividerExpand } from '@/hooks/useDividerExpand';
import { cn } from '@/utils/cn';

const HeroDivider = ({ className }: HeroDividerProps) => {
  const dividerRef = useDividerExpand();
  return <div className={cn('h-[1px] bg-stroke-1 dark:bg-stroke-5 w-0', className)} ref={dividerRef} />;
};

HeroDivider.displayName = 'HeroDivider';
export default HeroDivider;
