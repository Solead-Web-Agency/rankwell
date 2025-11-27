import marketSalesCardDark from '@public/images/home-page-11/market-sales-card-dark.png';
import marketSalesCard from '@public/images/home-page-11/market-sales-card.png';
import personTabletDark from '@public/images/home-page-11/person-tablet-dark.png';
import personTablet from '@public/images/home-page-11/person-tablet.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Feature = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] overflow-hidden">
      <div className="main-container flex flex-col lg:flex-row items-center justify-between lg:gap-24 gap-y-10">
        <div className="md:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="space-y-5 mb-14">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <h2 className="max-w-[465px]">NextSaaS your smart email choice</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="max-w-[508px]">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before
                  &amp; After magazine.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <ul className="flex lg:flex-col gap-y-2 flex-row flex-wrap items-start lg:flex-nowrap lg:items-start md:justify-center justify-start">
            <RevealAnimation delay={0.3}>
              <li className="lg:text-tagline-1 text-tagline-2 font-medium flex items-center gap-4 py-2 px-0 dark:text-accent text-secondary lg:basis-0 md:basis-1/2">
                <span className="ns-shape-50 md:text-[36px] text-[24px] text-secondary dark:text-accent" />
                Enterprise-level security
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <li className="lg:text-tagline-1 text-tagline-2 font-medium flex items-center gap-4 py-2 px-0 dark:text-accent text-secondary lg:basis-0 md:basis-1/2">
                <span className="ns-shape-52 md:text-[36px] text-[24px] text-secondary dark:text-accent" />
                Automated email flows
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="lg:text-tagline-1 text-tagline-2 font-medium flex items-center gap-4 py-2 px-0 dark:text-accent text-secondary lg:basis-0 md:basis-1/2">
                <span className="ns-shape-41 md:text-[36px] text-[24px] text-secondary dark:text-accent" />
                Real-time analytics
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="lg:text-tagline-1 text-tagline-2 font-medium flex items-center gap-4 py-2 px-0 dark:text-accent text-secondary lg:basis-0 md:basis-1/2">
                <span className="ns-shape-47 md:text-[36px] text-[24px] text-secondary dark:text-accent" />
                Live data insights
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="md:flex-1 relative flex justify-end w-full lg:w-auto">
          <RevealAnimation delay={0.3} offset={100}>
            <figure className="w-full lg:max-w-[605px] max-w-[400px] mx-auto lg:mx-0 h-auto">
              <Image
                src={personTablet}
                alt="Smiling man using a tablet"
                className="w-full h-auto block dark:hidden"
                width={583}
                height={707}
                priority
              />
              <Image
                src={personTabletDark}
                alt="Smiling man using a tablet"
                className="hidden dark:block w-full h-auto"
                width={583}
                height={707}
                priority
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.6} offset={100} direction="right">
            <figure
              className="absolute -bottom-4 md:bottom-7 lg:-bottom-4 md:right-[104px] right-2 lg:right-2 2xl:-right-10 rounded-[10px] lg:rounded-[20px] overflow-hidden max-w-[200px] lg:max-w-[250px] lp:max-w-[324px]"
              aria-hidden="true">
              <Image
                src={marketSalesCard}
                alt="Market sales dashboard card"
                width={324}
                height={340}
                className="block dark:hidden"
              />
              <Image
                src={marketSalesCardDark}
                alt="Market sales dashboard card"
                width={324}
                height={340}
                className="hidden dark:block shadow-2"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
