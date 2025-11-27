'use client';

import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const pricingPlans = [
  {
    name: 'Free Plan',
    description: 'Start building with core features',
    monthlyPrice: 40,
    yearlyPrice: 90,
    features: ['2 Worksapces', '10 collaborators', 'Unlimited Data', 'Unlimited analytics'],
    buttonVariant: 'btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent',
    isSpecial: false,
  },
  {
    name: 'Pro Plan',
    description: 'Advanced features + app publishing',
    monthlyPrice: 19,
    yearlyPrice: 79,
    features: [
      '2 Workspaces',
      '10 collaborators',
      'Unlimited Data',
      'Unlimited analytics',
      '24 hours support',
      'Powerful integration',
    ],
    buttonVariant: 'btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-accent',
    isSpecial: true,
  },
  {
    name: 'Team Plan',
    description: 'Collaboration, integrations & support',
    monthlyPrice: 49,
    yearlyPrice: 99,
    features: ['2 Worksapces', '10 collaborators', 'Unlimited Data', 'Unlimited analytics'],
    buttonVariant: 'btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent',
    isSpecial: false,
  },
  {
    name: 'Enterprise Plan',
    description: 'Custom pricing – API access, white-label, and more',
    monthlyPrice: 60,
    yearlyPrice: 120,
    features: ['2 Worksapces', '10 collaborators', 'Unlimited Data', 'Unlimited analytics'],
    buttonVariant: 'btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-accent',
    isSpecial: false,
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const CheckIcon = () => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={20} height={20} rx={10} fill="" className="fill-secondary/40 dark:fill-accent/40" />
      <path
        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
        fill=""
        className="fill-white dark:fill-accent"
      />
    </svg>
  );

  const ProCheckIcon = () => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={20} height={20} rx={10} fill="" className="fill-secondary dark:fill-accent" />
      <path
        d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
        fill=""
        className="fill-white dark:fill-black"
      />
    </svg>
  );

  return (
    <section className="relative pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px] overflow-hidden">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green mb-5">Pricing plans</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-8">
              Flexible plans that <span className="text-primary-500">grow with you</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="relative z-0">
              <RevealAnimation delay={1} duration={2.5} useSpring direction="up" offset={200}>
                <span className="absolute z-11 -right-6 -top-2.5 bg-secondary dark:bg-accent text-accent dark:text-secondary inline-block font-normal capitalize text-tagline-2 px-3.5 py-1.5 shadow-xs rounded-[36px] rotate-[20deg] w-[90px]">
                  save 40%
                </span>
              </RevealAnimation>
              <label className="relative inline-flex items-center cursor-pointer z-[10] bg-white shadow-1 dark:bg-background-9 py-6 px-[57px] rounded-full">
                <span className="mr-2.5 text-base text-secondary dark:text-accent font-normal">Monthly</span>
                <input
                  type="checkbox"
                  id="priceCheck"
                  onChange={() => setIsMonthly(!isMonthly)}
                  checked={isMonthly}
                  className="sr-only peer"
                  aria-label="Toggle between monthly and yearly pricing"
                />
                <span className="relative w-13 h-[28px] bg-transparent border border-primary-400 dark:border-stroke-8 rounded-[34px] peer-checked:after:translate-x-[94%] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[2px] peer-checked:after:start-[2px] after:bg-accent after:border-primary-500 dark:after:border-stroke-8 after:rounded-full after:size-6 after:transition-all before:absolute before:content-[''] before:w-[62px] before:h-[36px] before:-left-[6px] before:-top-[5px] before:bg-primary-500 dark:before:bg-stroke-7 before:p-[5px] before:rounded-[34px] before:transition-all before:-z-10" />
                <span className="ms-2.5 text-base text-secondary dark:text-accent font-normal">Yearly</span>
              </label>
            </div>
          </RevealAnimation>
        </div>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8">
            {pricingPlans.map((plan, index) => (
              <RevealAnimation key={index} delay={0.4 + index * 0.1}>
                {plan.isSpecial ? (
                  <div className="p-2.5 rounded-[20px] flex flex-col h-full bg-[url('/images/home-page-16/price-bg.png')] bg-no-repeat bg-center bg-cover max-lg:w-full">
                    <div className="bg-white dark:bg-black p-8 rounded-[20px] flex flex-col h-full gap-6">
                      <div className="mb-6">
                        <h3 className="mb-2.5 font-normal text-heading-5">{plan.name}</h3>
                        <p className="mb-6 text-secondary dark:text-accent max-w-[250px]">{plan.description}</p>
                        <ul className="relative list-none space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2.5">
                              <ProCheckIcon />
                              <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto border-t border-stroke-2 dark:border-stroke-6 pt-6">
                        {!isMonthly ? (
                          <div className="price-month mb-7">
                            <h4 className="text-heading-4 font-normal">
                              $<span>{plan.monthlyPrice}</span>
                              <span className="text-tagline-2">/Month</span>
                            </h4>
                          </div>
                        ) : (
                          <div className="price-year mb-7">
                            <h4 className="text-heading-4 font-normal">
                              $<span>{plan.yearlyPrice}</span>
                              <span className="text-tagline-2">/Year</span>
                            </h4>
                          </div>
                        )}
                        <Link
                          href="/contact-us"
                          className={`btn btn-md ${plan.buttonVariant} w-full block text-center before:content-none first-letter:uppercase`}>
                          Get started
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-background-2 dark:bg-background-5 flex flex-col h-full gap-6 p-8 rounded-[20px] max-lg:w-full">
                    <div className="mb-6">
                      <h3 className="mb-2 font-normal text-heading-5">{plan.name}</h3>
                      <p className="mb-6 max-w-[250px]">{plan.description}</p>
                      <ul className="relative list-none space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2.5">
                            <CheckIcon />
                            <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto border-t border-stroke-2 dark:border-stroke-6 pt-6">
                      {!isMonthly ? (
                        <div className="price-year mb-6">
                          <h4 className="text-heading-4 font-normal">
                            $<span>{plan.yearlyPrice}</span>
                            <span className="text-tagline-2">/Year</span>
                          </h4>
                        </div>
                      ) : (
                        <div className="price-month mb-6">
                          <h4 className="text-heading-4 font-normal">
                            $<span>{plan.monthlyPrice}</span>
                            <span className="text-tagline-2">/Month</span>
                          </h4>
                        </div>
                      )}
                      <Link
                        href="/contact-us"
                        className={`btn btn-md ${plan.buttonVariant} w-full block text-center before:content-none first-letter:uppercase`}>
                        Get started
                      </Link>
                    </div>
                  </div>
                )}
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
