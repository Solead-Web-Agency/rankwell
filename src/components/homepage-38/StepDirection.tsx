import { cn } from '@/utils/cn';
import newArrow from '@public/images/icons/new-arrow.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const StepDirection = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        'bg-background-3 overflow-hidden z-10 ring-8 ring-white rounded-[80px] py-6 px-2.5 absolute -translate-y-1/2 top-1/2 hidden max-w-[44px] w-full',
        className,
      )}>
      <Marquee speed={35} delay={0} direction="right" autoFill className="size-6 overflow-hidden">
        <figure className="size-6 flex items-center justify-center">
          <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
          <Image src={newArrow} alt="new-arrow" className="size-full object-cover" />
        </figure>
      </Marquee>
    </div>
  );
};

StepDirection.displayName = 'StepDirection';
export default StepDirection;
