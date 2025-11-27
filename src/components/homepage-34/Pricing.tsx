import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradient4Img from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  label: string;
  value: string | boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  buttonText: string;
  planType: 'basic' | 'featured' | 'premium';
  features: Feature[];
}

const featureLabels = [
  'Pages included',
  'Custom design',
  'SEO optimization',
  'Branding support',
  'Social media integration',
];

const pricingPlans: PricingPlan[] = [
  {
    id: 'essential',
    name: 'Essential',
    price: 'Free',
    description: 'Free plan for all users',
    buttonText: 'Get started',
    planType: 'basic',
    features: [
      { label: 'Pages included', value: 'Up to 5' },
      { label: 'Custom design', value: true },
      { label: 'SEO optimization', value: true },
      { label: 'Branding support', value: false },
      { label: 'Social media integration', value: false },
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: '$99',
    description: 'Plans for advanced users',
    buttonText: 'Get started',
    planType: 'featured',
    features: [
      { label: 'Pages included', value: 'Up to 10' },
      { label: 'Custom design', value: true },
      { label: 'SEO optimization', value: true },
      { label: 'Branding support', value: true },
      { label: 'Social media integration', value: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Enterprise',
    description: 'Contact us for enterprise users',
    buttonText: 'Get started',
    planType: 'premium',
    features: [
      { label: 'Pages included', value: 'Unlimited' },
      { label: 'Custom design', value: true },
      { label: 'SEO optimization', value: true },
      { label: 'Branding support', value: true },
      { label: 'Social media integration', value: true },
    ],
  },
];

const Pricing = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="lg:py-[100px] py-16 md:py-20 bg-background-2 dark:bg-background-5">
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:py-[100px] py-[50px] lg:px-16 px-6 space-y-10 sm:space-y-[70px]">
            {/* Header */}
            <div className="text-center space-y-5">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Our pricing</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="lg:max-w-[678px] max-w-[400px] mx-auto">
                  Select the pricing plan that best suits your needs.
                </h2>
              </RevealAnimation>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-12 xl:gap-8 md:gap-6 gap-y-6">
              {/* Features Column */}
              <div className="col-span-12 xl:col-span-3 md:col-span-6">
                <RevealAnimation delay={0.3}>
                  <div>
                    <div className="md:h-[195px] md:w-[290px]" />
                    <div className="space-y-2.5">
                      <h3 className="text-heading-6">What&apos;s included</h3>
                      <ul>
                        {featureLabels.map((feature, index) => (
                          <li
                            key={feature}
                            className={cn(
                              'text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal py-4 pr-6',
                              index < featureLabels.length - 1 && 'border-b border-b-stroke-4 dark:border-b-stroke-8',
                            )}>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
              </div>

              {/* Pricing Plans */}
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} className="col-span-12 xl:col-span-3 md:col-span-6">
                  <RevealAnimation delay={0.4 + index * 0.1}>
                    <div>
                      {/* Plan Header */}
                      <div
                        className={cn(
                          'rounded-t-[20px] py-8 px-6 space-y-8',
                          plan.planType === 'featured'
                            ? 'z-10 relative bg-secondary dark:bg-background-7 overflow-hidden'
                            : 'bg-background-3 dark:bg-background-7',
                        )}>
                        {/* Featured plan gradient background */}
                        {plan.planType === 'featured' && (
                          <div className="absolute h-full w-full -top-28 -right-20 -z-1 pointer-events-none">
                            <Image src={gradient4Img} alt="pricing bg" />
                          </div>
                        )}

                        <div>
                          <p
                            className={cn(
                              'text-tagline-1 font-medium mb-3',
                              plan.planType === 'featured' ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
                            )}>
                            {plan.name}
                          </p>
                          <h3
                            className={cn('text-heading-5 font-normal', plan.planType === 'featured' && 'text-accent')}>
                            {plan.price}
                          </h3>
                          <p className={cn(plan.planType === 'featured' && 'text-accent/60')}>{plan.description}</p>
                        </div>

                        <Link
                          href="/contact-us"
                          className={cn(
                            'btn btn-md w-full before:content-none first-letter:uppercase',
                            plan.planType === 'featured'
                              ? 'btn-primary hover:btn-white border-0'
                              : 'btn-white dark:btn-white-dark hover:btn-primary',
                          )}>
                          {plan.buttonText}
                        </Link>
                      </div>

                      {/* Features List */}
                      <div className="rounded-b-[20px] bg-white dark:bg-black">
                        <ul>
                          {plan.features.map((feature, featureIndex) => (
                            <li
                              key={feature.label}
                              className={cn(
                                'h-14 px-6 py-4 text-center flex items-center justify-center',
                                featureIndex < plan.features.length - 1 &&
                                  'border-b border-b-stroke-4 dark:border-b-stroke-8',
                              )}>
                              {typeof feature.value === 'string' ? (
                                <p className="font-medium text-secondary/60 dark:text-accent/60">{feature.value}</p>
                              ) : feature.value ? (
                                <span className="size-[18px] shrink-0 bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                                  <CheckIcon className="fill-white dark:fill-secondary" />
                                </span>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Pricing;
