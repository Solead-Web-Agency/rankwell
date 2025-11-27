import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import gradient1 from '@public/images/gradient/gradient-1.png';
import Image from 'next/image';

interface FooterRightGradientProps {
  className?: string;
}

const FooterRightGradient = ({ className }: FooterRightGradientProps) => {
  return (
    <RevealAnimation delay={0.4} duration={0.8} direction="right" offset={400}>
      <figure
        className={cn(
          'pointer-events-none absolute top-[-17%] right-[-64%] size-[550px] rotate-[-30deg] bg-top-right select-none max-[376px]:right-[-83%] md:top-[-25%] md:right-[-30%] lg:right-[-19%] xl:top-[-32%] xl:right-[-9%]',
          className,
        )}>
        <Image className="size-full object-cover object-top" src={gradient1} alt="Decorative gradient background" />
      </figure>
    </RevealAnimation>
  );
};

FooterRightGradient.displayName = 'FooterRightGradient';
export default FooterRightGradient;
