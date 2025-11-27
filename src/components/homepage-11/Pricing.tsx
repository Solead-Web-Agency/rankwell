'use client';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import PricingCard from './PricingCard';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section className="relative py-28 md:py-32 lg:py-[150px] xl:py-[200px] bg-background-1 dark:bg-background-6 overflow-hidden">
      <div className="main-container flex flex-col gap-[70px]">
        <div className="flex flex-col items-center text-center relative">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5"> Our Pricing </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[650px] mx-auto mb-8">Select the pricing plan that best suits your needs.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3} direction="up" offset={200} duration={1.3} start={'top 93%'}>
            <span className="bg-secondary dark:bg-accent absolute top-[81%] xl:left-[41%] xl:-translate-x-[41%] -translate-y-[81%] text-accent dark:text-secondary inline-block font-normal capitalize text-tagline-2 px-3.5 py-1.5 rounded-[36px] z-10 rotate-[20deg] ms-60">
              save 40%
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="bg-background-3 dark:bg-background-9 rounded-[160px] py-6 px-14">
              <label className="relative inline-flex items-center cursor-pointer z-[10]">
                <span className="mr-2.5 text-base text-secondary dark:text-accent font-normal">Monthly</span>
                <input
                  type="checkbox"
                  onChange={(e) => setIsAnnual(e.target.checked)}
                  checked={isAnnual}
                  className="sr-only peer"
                  aria-label="Toggle between monthly and yearly pricing"
                />
                <span className="relative w-13 h-[28px] bg-secondary dark:bg-accent rounded-[34px] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[2px] peer-checked:after:start-[2px] after:bg-accent dark:after:bg-secondary after:rounded-full after:h-6 after:w-6 after:transition-all" />
                <span className="ms-2.5 text-base text-secondary dark:text-accent font-normal">Yearly</span>
              </label>
            </div>
          </RevealAnimation>
        </div>
        <div className="relative">
          <PricingCard isAnnual={isAnnual} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
