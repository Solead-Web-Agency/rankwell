import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { cn } from '@/utils/cn';
import CTACheckList from './CTACheckList';
interface CTAV2Props {
  className?: string;
  ctaHeading?: string;
  ctaDescription?: string;
  ctaBtnText?: string;
  btnClass?: string;
  spanText?: string;
  ctaCheckListData: {
    id: string;
    text: string;
  }[];
}
const CTAV2 = ({
  className,
  ctaHeading,
  ctaDescription,
  ctaBtnText,
  btnClass,
  spanText,
  ctaCheckListData,
}: CTAV2Props) => {
  return (
    <section
      className={cn('pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]', className)}>
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mb-3 max-w-[810px] text-center mx-auto">
              {ctaHeading} {spanText && <span className="text-primary-500">{spanText}</span>}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mb-8 lg:max-w-[390px] mx-auto">{ctaDescription}</p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="md:inline-block text-center">
              <div>
                <LinkButton
                  href="/contact-us"
                  className={cn(
                    'btn btn-primary hover:btn-white-dark dark:hover:btn-white btn-md block w-full md:w-auto md:inline-block text-center mx-auto md:mx-0 text-tagline-2',
                    btnClass,
                  )}>
                  {ctaBtnText}
                </LinkButton>
              </div>
            </div>
          </RevealAnimation>
          <CTACheckList
            listClass="gap-3"
            listAnimationDelay={0.3}
            className="flex flex-wrap max-lg:gap-5 items-center justify-center mt-5 md:mt-8 gap-[42px]"
            ctaCheckListData={ctaCheckListData}
          />
        </div>
      </div>
    </section>
  );
};

export default CTAV2;
