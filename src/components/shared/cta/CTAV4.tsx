import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import CTACheckList from './CTACheckList';
interface CTAV4Props {
  className?: string;
  ctaHeadingClass?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  descriptionClass?: string;
  ctaBtnText?: string;
  btnClass?: string;
  badgeClass?: string;
  badgeText?: string;
  inputFieldClass?: string;
  ctaCheckListData: {
    id: string;
    text: string;
  }[];
}
const CTAV4 = ({
  className,
  ctaHeading,
  ctaDescription,
  descriptionClass,
  ctaBtnText,
  btnClass,
  badgeClass,
  badgeText,
  ctaHeadingClass,
  inputFieldClass,
  ctaCheckListData,
}: CTAV4Props) => {
  return (
    <div className={cn('main-container', className)}>
      <div className="text-center space-y-5 mb-8">
        {badgeText && (
          <RevealAnimation delay={0.2}>
            <span className={cn('badge badge-green', badgeClass)}>{badgeText}</span>
          </RevealAnimation>
        )}
        <div className="space-y-3">
          <RevealAnimation delay={0.3}>
            <h2 className={cn(ctaHeadingClass)}>{ctaHeading}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className={cn('max-w-[568px] mx-auto', descriptionClass)}>{ctaDescription}</p>
          </RevealAnimation>
        </div>
      </div>
      <div className="space-y-8 mb-[38px] mx-6 sm:mx-0">
        <RevealAnimation delay={0.5}>
          <form className="flex sm:flex-row flex-col sm:items-center sm:justify-center gap-3">
            <fieldset>
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="Enter your email"
                className={cn(
                  'px-[18px] h-12 outline-none py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 sm:min-w-[340px] sm:max-w-[340px] w-full bg-accent dark:bg-background-6 dark:border-stroke-7 dark:placeholder:text-accent/60 block focus:ring-[0.7px] focus-within:ring-primary-500 font-normal placeholder:font-normal',
                  inputFieldClass,
                )}
              />
            </fieldset>
            <button type="submit" className={cn('btn btn-md btn-primary h-12', btnClass)}>
              <span>{ctaBtnText}</span>
            </button>
          </form>
        </RevealAnimation>
        <RevealAnimation delay={0.6}>
          <CTACheckList
            className="flex sm:items-center sm:justify-center md:gap-[42px] sm:gap-6 gap-y-3 sm:flex-row flex-col"
            ctaCheckListData={ctaCheckListData}
          />
        </RevealAnimation>
      </div>
    </div>
  );
};

CTAV4.displayName = 'CTAV4';

export default CTAV4;
