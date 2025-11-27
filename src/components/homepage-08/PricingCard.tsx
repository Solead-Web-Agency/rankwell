import { CheckIcon } from '@/icons';
import gradient4 from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import { cn } from '@/utils/cn';
import Link from 'next/link';

interface Feature {
  text: string;
  available: boolean;
  highlighted?: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  isFeatured?: boolean;
  features: Feature[];
}

const PricingCard = ({ plan, isAnnual, delay }: { plan: PricingPlan; isAnnual: boolean; delay: number }) => {
  const price = isAnnual ? plan.yearlyPrice : plan.monthlyPrice;
  const period = isAnnual ? '/Yearly' : '/Month';

  return (
    <RevealAnimation delay={delay}>
      <div className="col-span-12 lg:col-span-4">
        <div
          className={cn(
            'max-w-[604px] w-full lg:mx-0 mx-auto relative py-[60px] px-14 rounded-[20px] bg-background-1',
            plan.isFeatured ? 'overflow-hidden' : 'dark:bg-background-6',
          )}>
          {plan.isFeatured && (
            <>
              <div className="pointer-events-none select-none absolute h-[598px] top-0 right-0 -translate-y-[27%] max-[425]:translate-y-[30%] md:-translate-y-[47%] lg:-translate-y-[25%] xl:-translate-y-[33%] rotate-[2deg] xl:translate-x-[44%] translate-x-[41%]">
                <Image src={gradient4} alt="pricing bg" />
              </div>
              <span className="badge badge-blur bg-ns-green absolute z-30 top-3 text-secondary font-medium text-sm px-1.5 sm:px-3.5 py-1.5 rounded-[36px] max-[425]:ms-56 ms-44 md:ms-[420px] lg:ms-36 xl:ms-56 lp:ms-64">
                Save 40%
              </span>
            </>
          )}

          <div className={cn(plan.isFeatured && 'space-y-2')}>
            {price ? (
              <div className="flex gap-1 items-center">
                <h3 className={cn('inline-block', plan.isFeatured && 'text-secondary')}>${price}</h3>
                <span
                  className={cn(
                    'text-tagline-2 mt-3 font-normal text-secondary',
                    !plan.isFeatured && 'dark:text-accent',
                  )}>
                  {period}
                </span>
              </div>
            ) : (
              <h3>{plan.name}</h3>
            )}
            <p className={cn(plan.isFeatured && 'text-secondary/60')}>{plan.description}</p>
          </div>

          <div className="mt-11">
            <ul className="space-y-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3.5">
                  <span
                    className={cn(
                      'rounded-full size-5',
                      feature.available
                        ? plan.isFeatured
                          ? 'bg-secondary'
                          : 'bg-secondary dark:bg-accent'
                        : plan.isFeatured
                          ? 'bg-secondary/20 dark:bg-secondary/60'
                          : 'bg-secondary/20 dark:bg-accent/20',
                    )}>
                    <CheckIcon
                      className={cn(
                        feature.available
                          ? plan.isFeatured && 'dark:fill-accent'
                          : plan.isFeatured
                            ? 'dark:fill-accent'
                            : feature.highlighted
                              ? 'dark:fill-accent/60'
                              : 'fill-white dark:fill-accent/80',
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      'font-normal text-tagline-1',
                      plan.isFeatured ? 'text-secondary/60' : 'text-secondary dark:text-accent',
                    )}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <Link
              href="/contact-us"
              className={cn(
                'btn-md w-full before:content-none first-letter:uppercase',
                plan.name === 'Professional'
                  ? 'btn btn-primary hover:btn-secondary dark:hover:btn-accent'
                  : 'btn btn-white dark:btn-transparent hover:btn-primary',
              )}>
              Get started
            </Link>
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

PricingCard.displayName = 'PricingCard';
export default PricingCard;
