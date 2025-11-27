'use client';

import gradient17 from '@public/images/gradient/gradient-17.png';
import Image from 'next/image';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import PricingCard from './PricingCard';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="pt-14 pb-14 max-2xl:px-4 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-[70px] overflow-hidden rounded-2xl bg-black py-16 sm:px-5 md:rounded-4xl md:px-10 md:py-[100px] lg:px-5 xl:px-[67px]">
        {/* bg images */}
        <RevealAnimation delay={0.1} direction="up" offset={200}>
          <figure className="pointer-events-none absolute left-1/2 hidden h-full max-h-[1170px] w-full max-w-[1440px] -translate-x-1/2 rotate-[28deg] select-none md:-top-[1070px] md:block lg:-top-[570px] xl:-top-[560px]">
            <Image src={gradient17} alt="Pricing Gradient" className="h-full w-full object-cover" />
          </figure>
        </RevealAnimation>

        <div className="relative flex flex-col items-center text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-blur text-ns-green mb-5">Our Pricing</span>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <h2 className="mx-auto mb-8 max-w-[650px] text-white max-md:px-4">
              Select the pricing plan that best suits <span className="text-primary-500">your needs.</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4} direction="up" offset={200} start={'top 93%'}>
            <span className="badge badge-blur bg-ns-yellow !text-secondary text-tagline-2 absolute top-[70%] z-30 ms-60 rotate-[20deg] rounded-[36px] px-1.5 py-1.5 font-normal capitalize sm:px-3.5">
              save 40%
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="dark:bg-background-6 rounded-full bg-white/20 px-14 py-6 backdrop-blur-[18px] dark:backdrop-blur-[20px]">
              <label className="relative z-[10] inline-flex cursor-pointer items-center">
                <span className="text-accent mr-2.5 text-base font-normal">Monthly</span>
                <input
                  type="checkbox"
                  onChange={(e) => setIsAnnual(e.target.checked)}
                  className="peer sr-only"
                  aria-label="Toggle between monthly and yearly pricing"
                />
                <span className="after:bg-accent relative h-[28px] w-13 rounded-[34px] border border-white bg-white/20 after:absolute after:start-[2px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-[93%]" />
                <span className="text-accent ms-2.5 text-base font-normal">Yearly</span>
              </label>
            </div>
          </RevealAnimation>
        </div>

        <div className="relative px-5 sm:px-0">
          <PricingCard isAnnual={isAnnual} />
        </div>
      </div>
    </section>
  );
};

Pricing.displayName = 'Pricing';
export default Pricing;
