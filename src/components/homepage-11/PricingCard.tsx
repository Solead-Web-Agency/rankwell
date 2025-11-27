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
  // Add safety check for pricingPlan data
  if (!pricingPlan || !Array.isArray(pricingPlan)) {
    return <div>Pricing information is currently unavailable.</div>;
  }

  return (
    <div className="grid grid-cols-12 items-center gap-y-8">
      {(pricingPlan as PricingPlan[]).map((plan, idx) => {
        // Safety check for each plan
        if (!plan || typeof plan !== 'object') {
          return null;
        }

        return (
          <RevealAnimation key={idx} delay={0.6 + idx * 0.1}>
            <div
              className={cn(
                'mx-auto w-full max-w-[408px] rounded-[20px] col-span-12 lg:col-span-4',
                plan.bgImage ? 'bg-cover bg-center bg-no-repeat p-2.5' : 'bg-background-3 dark:bg-background-7 p-8',
              )}
              style={plan.bgImage ? { backgroundImage: `url(/images/home-page-2/price-bg.png)` } : {}}>
              <div className={cn(plan.bgImage && 'rounded-[12px] bg-white dark:bg-background-8 p-8')}>
                {/* Title + Desc */}
                <h3 className="mb-2 font-normal text-heading-5">{plan.title || 'Plan Title'}</h3>
                <p className="mb-6 max-w-[250px] text-secondary/60 dark:text-accent/60">
                  {plan.description || 'Plan description'}
                </p>

                {/* Prices */}
                {!isAnnual ? (
                  <div className="price-month mb-7">
                    <h4 className="text-heading-4 font-normal">
                      $<span>{plan.priceMonth || '0.00'}</span>
                    </h4>
                    <p className="text-secondary dark:text-accent/40">Per Month</p>
                  </div>
                ) : (
                  <div className="price-year mb-7">
                    <h4 className="text-heading-4 font-normal">
                      $<span>{plan.priceYear || '0.00'}</span>
                    </h4>
                    <p className="text-secondary dark:text-accent/40">Per Year</p>
                  </div>
                )}

                {/* CTA */}
                <Link
                  href="/contact-us"
                  className={cn(
                    plan.planType === 'featured'
                      ? 'btn btn-md btn-secondary dark:btn-accent hover:btn-white-v2 dark:hover:btn-white-dark'
                      : 'btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white',
                    'mb-8 block w-full text-center first-letter:uppercase before:content-none',
                  )}>
                  Get started
                </Link>

                {/* Features */}
                <ul className="relative list-none space-y-2.5">
                  {plan.features &&
                    Array.isArray(plan.features) &&
                    plan.features.map((feature, i) => {
                      if (!feature || typeof feature !== 'object') {
                        return null;
                      }

                      return (
                        <li key={i} className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              'flex size-5 items-center justify-center rounded-full shrink-0',
                              feature.enabled ? 'bg-secondary dark:bg-accent' : 'bg-white dark:bg-background-9',
                              plan.planType === 'featured' &&
                                !feature.enabled &&
                                'bg-background-4 dark:bg-background-9',
                            )}>
                            <CheckIcon
                              className={
                                feature.enabled
                                  ? 'fill-white dark:fill-secondary'
                                  : 'fill-secondary/60 dark:fill-accent/60'
                              }
                            />
                          </span>
                          <span
                            className={`text-tagline-1 font-normal ${
                              feature.enabled
                                ? 'text-secondary dark:text-accent'
                                : 'text-secondary/60 dark:text-accent/60'
                            }`}>
                            {feature.label || 'Feature'}
                          </span>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </RevealAnimation>
        );
      })}
    </div>
  );
};

export default PricingCard;
