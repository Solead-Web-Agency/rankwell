'use client';

import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import PricingCard, { PricingPlan } from './PricingCard';

const pricingPlans: PricingPlan[] = [
  {
    name: 'Free',
    description: 'Free plan for all users',
    features: [
      { text: '2 Workspaces', available: true },
      { text: '10 collaborators', available: true },
      { text: 'Unlimited data', available: false },
      { text: 'Unified Analytics', available: false },
    ],
  },
  {
    name: 'Professional',
    description: 'Ideal for small businesses',
    monthlyPrice: 40,
    yearlyPrice: 140,
    isFeatured: true,
    features: [
      { text: '2 Workspaces', available: true },
      { text: '10 collaborators', available: true },
      { text: 'Unlimited data', available: true },
      { text: 'Unlimited data', available: false },
      { text: 'Unified Analytics', available: false },
    ],
  },
  {
    name: 'Enterprise',
    description: 'Ideal for small businesses',
    monthlyPrice: 60,
    yearlyPrice: 260,
    features: [
      { text: '2 Workspaces', available: true },
      { text: '10 collaborators', available: true },
      { text: 'Unlimited data', available: true },
      { text: 'Unified Analytics', available: false, highlighted: true },
    ],
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="xl:py-[100px] md:py-20 py-10">
      <div className="main-container">
        <div className="text-center space-y-3 max-w-[620px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Select the pricing plan that best suits your needs.</h2>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="mt-7 mb-[34px] mx-auto text-center">
            <label className="relative inline-flex items-center cursor-pointer z-[10]">
              <span className="mr-2.5 text-tagline-1 font-normal text-black dark:text-accent"> Monthly </span>
              <input
                onChange={(e) => setIsAnnual(e.target.checked)}
                checked={isAnnual}
                type="checkbox"
                id="priceCheck"
                className="sr-only peer"
                aria-label="Toggle between monthly and yearly pricing"
              />
              <span className="relative w-11 h-6 bg-white dark:bg-background-6 border border-stroke-1 dark:border-background-6 rounded-full peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[0px] peer-checked:after:start-[2px] after:rounded-full after:h-6 after:w-6 after:bg-secondary dark:after:bg-accent after:transition-all" />
              <span className="ms-2.5 text-tagline-1 font-normal text-black dark:text-accent">Yearly</span>
            </label>
          </div>
        </RevealAnimation>
        <div className="grid grid-cols-12 lg:gap-8 gap-y-8 items-center justify-center">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} isAnnual={isAnnual} delay={0.4 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
