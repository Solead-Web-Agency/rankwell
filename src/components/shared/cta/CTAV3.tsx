import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
interface CTAV3Props {
  className?: string;
  badgeClass?: string;
  ctaHeading?: string;
  spanText?: string;
  description?: string;
  btnClass?: string;
  ctaBtnText?: string;
  badgeText?: string;
  inputFieldClass?: string;
  ctaHeadingClass?: string;
  descriptionClass?: string;
}

const CTAV3 = ({
  className,
  badgeClass,
  ctaHeading,
  description,
  btnClass,
  ctaBtnText,
  badgeText,
  ctaHeadingClass,
  descriptionClass,
  inputFieldClass,
}: CTAV3Props) => {
  return (
    <div className={cn(className)}>
      <div className="text-center space-y-5 sm:mb-14 mb-10">
        <RevealAnimation delay={0.1}>
          <span className={cn('badge', badgeClass)}>{badgeText}</span>
        </RevealAnimation>
        <div className="space-y-3">
          <RevealAnimation delay={0.2}>
            <h2 className={cn('text-white font-normal', ctaHeadingClass)}>{ctaHeading}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className={cn(descriptionClass)}>{description}</p>
          </RevealAnimation>
        </div>
      </div>

      <RevealAnimation delay={0.4}>
        <form className="flex items-center justify-center md:flex-row flex-col md:gap-x-3 md:gap-y-0 gap-y-5">
          <fieldset className="inline-block">
            <input
              type="text"
              placeholder="Enter your email"
              className={cn('h-12 rounded-full px-[18px] py-3 font-normal', inputFieldClass)}
            />
          </fieldset>
          <button className={cn('h-12 btn btn-md md:w-auto w-full', btnClass)}>
            <span>{ctaBtnText}</span>
          </button>
        </form>
      </RevealAnimation>
    </div>
  );
};
CTAV3.displayName = 'CTAV3';
export default CTAV3;
