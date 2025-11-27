'use client';

import { cn } from '@/utils/cn';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import PricingCard from './PricingCard';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section className="py-[100px] bg-white dark:bg-background-5 overflow-hidden">
      <div className="main-container">
        <div className="space-y-[72px]">
          {/* heading  */}
          <div className="flex flex-col items-center text-center relative">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-primary mb-5"> Our pricing </span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[650px] mx-auto mb-8">Select the pricing plan that best suits your needs.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.9} duration={2} useSpring={true} direction="up" offset={200}>
              <span
                className="bg-secondary dark:bg-accent absolute top-[74%] md:top-[77%] w-[90px] md:w-auto max-[376px]:left-[16%] sm:left-[16%] md:left-[32%] lg:left-[37%] xl:top-[81%] xl:left-[40%] -translate-x-[41%] -translate-y-[81%] text-accent dark:text-secondary font-normal capitalize text-tagline-2 lg:inline-block px-3.5 py-1.5 rounded-[36px] rotate-[20deg] ms-60 z-10"
                aria-label="Save 40% discount">
                save 40%
              </span>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="bg-background-3 dark:bg-background-9 rounded-[160px] py-6 px-14">
                <label className="relative inline-flex items-center cursor-pointer z-[10]" htmlFor="pricing-toggle">
                  <span
                    className={cn(
                      'mr-2.5 text-base font-normal transition-colors',
                      !isAnnual ? 'text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60',
                    )}>
                    Monthly
                  </span>
                  <input
                    id="pricing-toggle"
                    type="checkbox"
                    onChange={(e) => setIsAnnual(e.target.checked)}
                    checked={isAnnual}
                    className="sr-only peer"
                    aria-label="Toggle between monthly and yearly pricing"
                  />
                  <span className="relative w-13 h-[28px] bg-secondary dark:bg-accent rounded-[34px] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[2px] peer-checked:after:start-[2px] after:bg-accent dark:after:bg-secondary after:rounded-full after:h-6 after:w-6 after:transition-all duration-200" />
                  <span
                    className={cn(
                      'ms-2.5 text-base font-normal transition-colors',
                      isAnnual ? 'text-secondary dark:text-accent' : 'text-secondary/60 dark:text-accent/60',
                    )}>
                    Yearly
                  </span>
                </label>
              </div>
            </RevealAnimation>
          </div>
          {/* pricing cards */}
          <div className="relative">
            <PricingCard isAnnual={isAnnual} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
