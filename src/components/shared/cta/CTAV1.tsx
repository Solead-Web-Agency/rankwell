import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import CTACheckList from './CTACheckList';
import CtaInputForm from './CtaInputForm';

interface CTAV1Props {
  className?: string;
  badgeClass?: string;
  ctaHeading?: string;
  spanText?: string;
  description?: string;
  btnClass?: string;
  ctaBtnText?: string;
  badgeText?: string;
  descriptionClass?: string;
  headingClass?: string;
  listTextClass?: string;
  inputFieldClass?: string;
  checkListVariant?: 'default' | 'gray';
}

const CTAV1 = ({
  className,
  badgeClass,
  ctaHeading,
  spanText,
  description,
  btnClass,
  ctaBtnText,
  badgeText,
  descriptionClass,
  headingClass,
  listTextClass,
  inputFieldClass,
  checkListVariant = 'default',
}: CTAV1Props) => {
  return (
    <section className={cn('py-[50px] md:py-20 lg:py-28', className)} aria-label="cta section">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl :gap-0">
          <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
            {badgeText && (
              <RevealAnimation delay={0.3}>
                <span className={cn('badge badge-green', badgeClass)}>{badgeText}</span>
              </RevealAnimation>
            )}

            <div className="space-y-3">
              <RevealAnimation delay={badgeText ? 0.4 : 0.3}>
                <h2 className={cn('md:text-heading-2 text-heading-5', headingClass)} aria-label="cta-heading">
                  {ctaHeading}
                  {spanText && <span className="text-primary-500"> {spanText}</span>}
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={badgeText ? 0.5 : 0.4}>
                <p aria-label="cta-description" className={cn(descriptionClass)}>
                  {description}
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/* newsletter form  */}
          <div
            className={cn(
              'w-full max-w-[562px] space-y-6 lg:pl-9 xl:pl-[96px]',
              badgeText && 'mt-[40px] lg:mt-[67px] space-y-6',
            )}>
            <CtaInputForm btnClass={btnClass} ctaBtnText={ctaBtnText} inputFieldClass={inputFieldClass} />
            <CTACheckList
              className="xl:justify-start gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-0"
              ctaCheckListData={[
                {
                  id: '1',
                  text: 'No credit card required',
                },
                {
                  id: '2',
                  text: '14-Day free trial',
                },
              ]}
              listTextClass={listTextClass}
              checkListVariant={checkListVariant}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAV1;
