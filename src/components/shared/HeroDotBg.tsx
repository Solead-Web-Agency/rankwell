import { cn } from '@/utils/cn';
import heroDotBg from '@public/images/gradient/hero-dot-bg.png';
import Image from 'next/image';

export interface HeroDotBgProps {
  className?: string;
}
const HeroDotBg = ({ className }: HeroDotBgProps) => {
  return (
    <div
      className={cn(
        'absolute top-[10%] left-1/2 -z-0 -translate-x-1/2 animate-pulse max-md:w-full lg:top-[12%]',
        className,
      )}>
      <Image src={heroDotBg} alt="Hero Dot background" priority className="size-full object-cover" />
    </div>
  );
};

export default HeroDotBg;
