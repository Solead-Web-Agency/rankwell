'use client';
import pricingPlan from '@/data/json/pricing/pricingPlanv3.json';
import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  label: string;
  enabled: boolean;
}

interface PricingPlan {
  title: string;
  description: string;
  priceMonth: string;
  priceYear: string;
  planType: 'basic' | 'featured' | 'premium';
  highlight?: string;
  bgImage?: boolean;
  features: Feature[];
}

const PricingCard = ({ isAnnual }: { isAnnual: boolean }) => {
  return (
    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
      {(pricingPlan as PricingPlan[]).map((plan, idx) => (
        <RevealAnimation key={idx} delay={0.6 + idx * 0.1}>
          <div
            className={cn(
              'mx-auto w-full max-w-[408px] rounded-[20px]',
              plan.bgImage ? 'bg-cover bg-center bg-no-repeat p-2.5' : 'bg-background-3 dark:bg-background-7 p-8',
            )}
            style={plan.bgImage ? { backgroundImage: `url(/images/home-page-2/price-bg.png)` } : {}}>
            <div className={cn(plan.bgImage && 'rounded-[12px] bg-white p-5 sm:p-8 dark:bg-black')}>
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="-mt-3 mb-2.5 flex justify-end">
                  <span className="bg-ns-green text-background-8 -mr-4 rounded-full px-3 py-1.5 font-normal capitalize">
                    {plan.highlight}
                  </span>
                </div>
              )}

              {/* Title + Desc */}
              <h3 className="text-heading-5 mb-2 font-normal">{plan.title}</h3>
              <p className="text-secondary/60 dark:text-accent/60 mb-6 max-w-[250px]">{plan.description}</p>

              {/* Prices */}
              {!isAnnual ? (
                <div className="price-month mb-7">
                  <h4 className="text-heading-4 font-normal">
                    $<span>{plan.priceMonth}</span>
                  </h4>
                  <p className="text-secondary dark:text-accent">Per Month</p>
                </div>
              ) : (
                <div className="price-year mb-7">
                  <h4 className="text-heading-4 font-normal">
                    $<span>{plan.priceYear}</span>
                  </h4>
                  <p className="text-secondary dark:text-accent">Per Year</p>
                </div>
              )}

              {/* CTA */}
              <Link
                href="/contact-us"
                className={cn(
                  plan.planType === 'featured'
                    ? 'btn btn-md btn-secondary dark:btn-accent hover:btn-white-v2 dark:hover:btn-white-dark'
                    : 'btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white',
                  'mb-8 block w-full first-letter:uppercase before:content-none',
                )}>
                Get started
              </Link>

              {/* Features */}
              <ul className="relative list-none space-y-2.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    {/* Icon */}
                    <span
                      className={cn(
                        'flex size-5 items-center justify-center rounded-full shrink-0',
                        feature.enabled ? 'bg-secondary dark:bg-accent/80' : 'bg-white dark:bg-background-9',
                        !feature.enabled && plan.planType === 'featured' && 'bg-background-4 dark:bg-background-9',
                      )}>
                      <CheckIcon
                        className={
                          feature.enabled
                            ? 'fill-white dark:fill-background-8'
                            : 'fill-secondary/60 dark:fill-accent/80'
                        }
                      />
                    </span>
                    <span
                      className={`text-tagline-1 font-normal ${
                        feature.enabled ? 'text-secondary dark:text-accent/80' : 'text-secondary/60 dark:text-accent/40'
                      }`}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};
PricingCard.displayName = 'PricingCard';
export default PricingCard;
