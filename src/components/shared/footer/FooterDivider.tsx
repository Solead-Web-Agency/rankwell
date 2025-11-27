'use client';
import { useDividerExpand } from '@/hooks/useDividerExpand';
import { cn } from '@/utils/cn';

interface FooterDividerProps {
  className?: string;
}
const FooterDivider = ({ className }: FooterDividerProps) => {
  const dividerRef = useDividerExpand();

  return (
    <div
      ref={dividerRef}
      className={cn(
        'bg-accent/10 dark:bg-stroke-4/10 absolute top-0 right-0 left-0 mx-auto h-px w-0 origin-center',
        className,
      )}></div>
  );
};

export default FooterDivider;
