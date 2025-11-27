import RevealAnimation from '../animation/RevealAnimation';

const PricingHeading = ({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: (isAnnual: boolean) => void }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <RevealAnimation delay={0.1}>
        <span className="badge badge-yellow mb-5 max-[426px]:mb-3">Our Pricing</span>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <h2 className="mx-auto mb-8 max-w-[650px] max-[426px]:max-w-[320px]">
          Select the pricing plan that best suits your needs.
        </h2>
      </RevealAnimation>

      <div className="relative z-0">
        <RevealAnimation delay={0.5} direction="up" offset={100} useSpring duration={2.5}>
          <span className="bg-secondary dark:bg-accent !text-accent dark:!text-secondary text-tagline-2 absolute -top-2.5 -right-6 z-11 inline-block w-[90px] rotate-[20deg] rounded-[36px] px-3.5 py-1.5 font-normal capitalize shadow-xs">
            save 40%
          </span>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <label className="dark:bg-background-9 relative z-[10] inline-flex cursor-pointer items-center rounded-full bg-white px-[57px] py-6 max-[426px]:px-10 max-[426px]:py-4">
            <span className="text-tagline-1 max-[426px]:text-tagline-2 text-secondary dark:text-accent mr-2.5 font-normal">
              Monthly
            </span>
            <input
              checked={isAnnual}
              onChange={(e) => setIsAnnual(e.target.checked)}
              type="checkbox"
              id="priceCheck"
              className="peer sr-only"
              aria-label="Toggle between monthly and yearly pricing"
            />
            <span className="bg-secondary dark:bg-accent after:bg-accent dark:after:bg-background-8 relative h-[28px] w-13 rounded-[34px] after:absolute after:start-[2px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-full"></span>
            <span className="text-tagline-1 max-[426px]:text-tagline-2 text-secondary dark:text-accent ms-2.5 font-normal">
              Yearly
            </span>
          </label>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default PricingHeading;
