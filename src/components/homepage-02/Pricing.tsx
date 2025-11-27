'use client';
import { useState } from 'react';
import PricingCardOne from './PricingCardOne';
import PricingCardThree from './PricingCardThree';
import PricingCardTwo from './PricingCardTwo';
import PricingHeading from './PricingHeading';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <section className="bg-background-2 dark:bg-background-6 relative pt-14 pb-14 max-[426px]:pt-10 max-sm:overflow-hidden md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container flex flex-col gap-[70px]">
        <PricingHeading isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

        <div className="relative">
          <div className="mx-auto grid max-w-[500px] grid-cols-1 items-center gap-y-5 xl:mx-0 xl:max-w-full xl:grid-cols-3 xl:gap-8">
            {/* <!-- Price Card 1 --> */}
            <PricingCardOne isAnnual={isAnnual} />
            {/* <!-- Price Card 2 --> */}
            <PricingCardTwo isAnnual={isAnnual} />
            {/* <!-- Price Card 3 --> */}
            <PricingCardThree isAnnual={isAnnual} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
