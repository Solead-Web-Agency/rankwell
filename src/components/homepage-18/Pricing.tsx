'use client';
import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradient51 from '@public/images/gradient/gradient-51.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  label: string;
  enabled: boolean;
}

interface PricingPlan {
  id: string;
  title: string;
  priceMonthly: string;
  priceYearly: string;
  buttonText: string;
  buttonClass: string;
  planType: 'basic' | 'featured' | 'premium';
  features: Feature[];
}

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingPlans: PricingPlan[] = [
    {
      id: 'basic',
      title: 'Clear, flexible pricing.',
      priceMonthly: '130',
      priceYearly: '1600',
      buttonText: 'Get started',
      buttonClass:
        'btn btn-md hover:btn-primary dark:btn-white-dark btn-white w-full block text-center before:content-none first-letter:uppercase',
      planType: 'basic',
      features: [
        { label: 'Core features meeting', enabled: false },
        { label: 'UI/UX wireframes for main flows', enabled: false },
        { label: 'Emphasize core functions.', enabled: false },
        { label: 'Quick launch (2–3 weeks)', enabled: false },
        { label: 'Great for quick validation and pitches.', enabled: false },
        { label: '1 revision + basic QA.', enabled: false },
      ],
    },
    {
      id: 'featured',
      title: 'Advanced Price',
      priceMonthly: '19',
      priceYearly: '220',
      buttonText: 'Get started',
      buttonClass:
        'btn btn-md btn-primary dark:hover:btn-white hover:btn-secondary w-full block text-center before:content-none first-letter:uppercase',
      planType: 'featured',
      features: [
        { label: 'Core features meeting', enabled: true },
        { label: 'Cross-platform development', enabled: true },
        { label: 'Product strategy & roadmap', enabled: true },
        { label: 'Unlimited screens & features', enabled: true },
        { label: 'Advanced integrations', enabled: true },
        { label: 'Dedicated project manager', enabled: true },
      ],
    },
    {
      id: 'premium',
      title: 'Pay only for Usage',
      priceMonthly: '130',
      priceYearly: '1600',
      buttonText: 'Get started',
      buttonClass:
        'btn btn-md hover:btn-primary dark:btn-white-dark btn-white w-full block text-center before:content-none first-letter:uppercase',
      planType: 'premium',
      features: [
        { label: 'Product strategy & roadmap', enabled: false },
        { label: 'Unlimited screens & features', enabled: false },
        { label: 'Cross-platform development', enabled: false },
        { label: 'Advanced integrations', enabled: false },
        { label: 'Dedicated project manager', enabled: false },
        { label: 'Security & scalability focused', enabled: false },
      ],
    },
  ];
  return (
    <section className="relative pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5">Pricing plans</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-3">Plans that grow with you.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mb-5 md:mb-7">
              Flexible, transparent pricing for businesses of every size and stage.
              <br className="hidden lg:block" />
              Choose a plan that scales with you. Whether you’re a startup or an enterprise, NextSaaS offers pricing
              options that fit your goals and budget.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div>
              <label className="relative inline-flex items-center cursor-pointer z-[10]">
                <span className="mr-2.5 text-base text-secondary dark:text-accent font-normal">Monthly</span>
                <input
                  checked={!isMonthly}
                  onChange={() => setIsMonthly(!isMonthly)}
                  type="checkbox"
                  id="priceCheck"
                  className="sr-only peer"
                  aria-label="Toggle between monthly and yearly pricing"
                />
                <span className="relative w-13 after:bg-accent h-[28px] bg-secondary dark:bg-background-9 rounded-[34px] peer-checked:after:translate-x-[78%] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[5px] peer-checked:after:start-[4px] after:rounded-full after:h-6 after:w-6 after:transition-all before:absolute before:content-[''] before:border before:w-[calc(100%-10px)] before:h-[calc(100%-10px)] before:rounded-[20px] before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:border-accent/10 dark:before:border-stroke-7" />
                <span className="ms-2.5 text-base text-secondary dark:text-accent font-normal">Yearly</span>
              </label>
            </div>
          </RevealAnimation>
        </div>
        <div className="relative">
          <div className="grid grid-cols-12 items-center justify-items-center gap-y-10 lg:gap-x-8">
            {pricingPlans.map((plan, idx) => (
              <RevealAnimation key={plan.id} delay={0.2 + idx * 0.1}>
                <div
                  className={cn(
                    'flex flex-col h-full gap-6 rounded-[20px] max-w-[604px] w-full col-span-12 lg:col-span-4',
                    plan.planType === 'featured'
                      ? 'p-2.5 relative overflow-hidden'
                      : 'bg-white dark:bg-black p-8 xl:py-[60px] xl:px-14',
                  )}>
                  {/* Featured plan gradient background */}
                  {plan.planType === 'featured' && (
                    <figure className="w-[810px] md:w-[950px] lg:w-[810px] left-[-30%] md:left-[-20%] lg:left-[-30%] top-[-20%] md:top-[-40%] lg:top-[-20%] absolute rotate-[30deg] select-none pointer-events-none">
                      <Image src={gradient51} alt="gradient-bg" className="w-full h-full object-cover" />
                    </figure>
                  )}

                  <div
                    className={cn(
                      'space-y-8',
                      plan.planType === 'featured' &&
                        'bg-white relative z-10 dark:bg-black p-8 xl:py-[60px] xl:px-14 rounded-[20px] flex flex-col h-full gap-6',
                    )}>
                    <div>
                      <h5 className="mb-2 font-normal text-heading-5">{plan.title}</h5>
                      <div className="border-b border-stroke-2 dark:border-stroke-6 pb-8">
                        <div className="price-month mb-8">
                          <h4 className="text-heading-6 sm:text-heading-4 font-normal">
                            $<span>{isMonthly ? plan.priceMonthly : plan.priceYearly}</span>
                            <span className="text-tagline-2">/ {isMonthly ? 'Month' : 'Year'}</span>
                          </h4>
                        </div>
                        <Link href="/contact-us" className={plan.buttonClass}>
                          {plan.buttonText}
                        </Link>
                      </div>
                    </div>

                    <ul className="relative list-none space-y-4">
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              'flex size-5 items-center justify-center rounded-full shrink-0',
                              feature.enabled ? 'bg-secondary dark:bg-accent' : 'bg-secondary/40 dark:bg-accent/40',
                            )}>
                            <CheckIcon className="fill-white dark:fill-black" />
                          </span>
                          <span
                            className={cn(
                              'font-normal text-tagline-1',
                              feature.enabled
                                ? 'text-secondary dark:text-accent'
                                : 'text-secondary dark:text-accent/60',
                            )}>
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
        </div>
      </div>
    </section>
  );
};

export default Pricing;
