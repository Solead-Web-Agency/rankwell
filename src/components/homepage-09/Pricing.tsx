import pricingPlan from '@/data/json/pricing/pricingPlanV2.json';
import { CheckIcon } from '@/icons';
import gradient47Image from '@public/images/gradient/gradient-47.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

// Types
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  ctaHref: string;
  ctaText: string;
  isSecondary?: boolean;
  withGradientImg?: boolean;
}

interface FeatureRow {
  id: string;
  label: string;
  features: {
    essential: boolean | string;
    advanced: boolean | string;
    enterprise: boolean | string;
  };
}

// Data - Easy to maintain and update
const featureRows: FeatureRow[] = [
  {
    id: 'pages',
    label: 'Pages included',
    features: {
      essential: 'Up to 5',
      advanced: 'Up to 10',
      enterprise: 'Unlimited',
    },
  },
  {
    id: 'design',
    label: 'Custom design',
    features: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'seo',
    label: 'SEO optimization',
    features: { essential: true, advanced: true, enterprise: true },
  },
  {
    id: 'branding',
    label: 'Branding support',
    features: { essential: false, advanced: true, enterprise: true },
  },
  {
    id: 'social',
    label: 'Social media integration',
    features: { essential: false, advanced: false, enterprise: true },
  },
];

// Utility functions
const getFeatureDisplay = (feature: boolean | string, planName: string) => {
  if (typeof feature === 'string') {
    return <p className="text-center text-secondary dark:text-accent font-medium">{feature}</p>;
  }

  if (feature === true) {
    return (
      <span className="size-5 rounded-full bg-secondary dark:bg-accent">
        <CheckIcon />
      </span>
    );
  }

  return <span className="sr-only">Not included in {planName} plan</span>;
};

// Main component
const Pricing = () => {
  const plans = pricingPlan as PricingPlan[];

  return (
    <section aria-label="Pricing Plans">
      <div className="max-w-[1460px] px-4 md:px-0 mx-auto">
        <div className="py-[70px] lg:px-[64px] bg-background-2 dark:bg-background-7 border-white dark:border-background-6 border-[10px] rounded-[20px]">
          <div className="main-container">
            <div className="space-y-11 md:space-y-[70px]">
              {/* Header */}
              <div className="space-y-3 text-center lg:text-left w-full md:max-w-[610px]">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-white">Our pricing</span>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <h2 className="lg:text-heading-2 text-heading-4">
                    Select the pricing plan that best suits your needs.
                  </h2>
                </RevealAnimation>
              </div>

              <div className="space-y-3">
                {/* Pricing Cards */}
                <div className="items-center flex flex-col md:flex-row justify-center xl:justify-end gap-3">
                  {plans.map((plan, index) => (
                    <RevealAnimation key={plan.name} delay={0.3 + index * 0.1}>
                      <div className="p-2.5 bg-white dark:bg-background-5 rounded-[20px] md:max-w-full xl:max-w-[282px] w-full">
                        <div
                          className={`${plan.isSecondary ? 'bg-secondary relative overflow-hidden' : 'bg-background-2'} py-8 px-6 rounded-xl dark:bg-background-7`}>
                          {plan.withGradientImg && (
                            <RevealAnimation delay={0.5} direction="right" offset={100} duration={0.9}>
                              <figure className="select-none pointer-events-none">
                                <Image
                                  className="absolute z-[2] top-[-80px] right-[-93px] select-none pointer-events-none"
                                  src={gradient47Image}
                                  alt="Advanced plan background decoration"
                                  width={200}
                                  height={200}
                                />
                              </figure>
                            </RevealAnimation>
                          )}

                          <p className={`mb-2 ${plan.isSecondary ? 'text-accent/60' : ''}`}>{plan.name}</p>

                          <div className="mb-8">
                            <h3 className={`text-heading-5 ${plan.isSecondary ? 'text-accent' : ''}`}>{plan.price}</h3>
                            <p className={plan.isSecondary ? 'text-accent' : ''}>{plan.description}</p>
                          </div>

                          <div>
                            <Link
                              href={plan.ctaHref}
                              className={
                                index !== 0 && index !== plans.length - 1
                                  ? 'btn btn-primary btn-lg w-full hover:btn-white dark:hover:btn-accent before:content-none first-letter:uppercase border-0'
                                  : 'btn btn-base dark:btn-secondary-v2 btn-white hover:btn-primary w-full before:content-none first-letter:uppercase'
                              }
                              aria-label={`Get started with ${plan.name} plan for ${plan.price}`}>
                              {plan.ctaText}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>

                {/* Feature Table */}
                <div className="w-full">
                  <RevealAnimation delay={0.6}>
                    <h4 className="py-6 text-heading-6">What&apos;s included</h4>
                  </RevealAnimation>

                  <div className="flex flex-col w-full" role="table">
                    {featureRows.map((row, rowIdx) => {
                      const delay = 0.7 + rowIdx * 0.1;
                      const rowBorder = rowIdx === 0 ? 'border-y' : 'border-b';

                      return (
                        <RevealAnimation key={row.id} delay={delay}>
                          <div
                            className={`flex items-center py-4 ${rowBorder} border-stroke-1 dark:border-stroke-6`}
                            role="row">
                            <p className="max-w-[420px] md:w-full text-secondary dark:text-accent">{row.label}</p>

                            <div className="flex-1 flex items-center justify-center" role="cell">
                              {getFeatureDisplay(row.features.essential, 'Essential')}
                            </div>

                            <div className="flex-1 flex items-center justify-center" role="cell">
                              {getFeatureDisplay(row.features.advanced, 'Advanced')}
                            </div>

                            <div className="flex-1 flex items-center justify-center" role="cell">
                              {getFeatureDisplay(row.features.enterprise, 'Enterprise')}
                            </div>
                          </div>
                        </RevealAnimation>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
