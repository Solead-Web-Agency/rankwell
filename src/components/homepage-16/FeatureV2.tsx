import cursorDark from '@public/images/home-page-16/cursor-dark.svg';
import cursor from '@public/images/home-page-16/cursor.svg';
import featureImage1Dark from '@public/images/home-page-16/feature-image-1-dark.png';
import featureImage1 from '@public/images/home-page-16/feature-image-1.png';
import profitChartDark from '@public/images/home-page-16/profit-chart-dark.png';
import profitChart from '@public/images/home-page-16/profit-chart.png';
import transactionChartDark from '@public/images/home-page-16/transaction-chart-dark.png';
import transactionChart from '@public/images/home-page-16/transaction-chart.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featureList = [
  {
    icon: 'ns-shape-8',
    text: 'No coding or technical skills required',
  },
  {
    icon: 'ns-shape-9',
    text: 'Intuitive interface built for speed',
  },
  {
    icon: 'ns-shape-12',
    text: 'Affordable plans for every stage',
  },
  {
    icon: 'ns-shape-21',
    text: 'Built-in hosting and app publishing',
  },
];

const FeatureV2 = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] dark:bg-background-7">
      <div className="main-container">
        <div className="grid grid-cols-12 md:gap-y-18 lg:gap-x-[60px] xl:gap-x-[100px] items-center">
          <div className="col-span-12 lg:col-span-7 max-md:mb-18">
            <div>
              <div className="relative max-w-[300px] md:max-w-[400px] lg:max-w-[500px] md:ms-16 lg:ms-0 w-full">
                <RevealAnimation delay={0.5} duration={1.5} useSpring>
                  <figure className="absolute top-[12%] md:top-[20%] lg:top-[17%] xl:top-[20%] -right-[20px] md:-right-[130px] lg:-right-[15px] xl:-right-[130px] w-[100px]">
                    <Image src={cursor} alt="features" className="w-full h-full dark:hidden" />
                    <Image src={cursorDark} alt="features" className="w-full h-full hidden dark:block" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.5} duration={1.5} useSpring>
                  <figure className="absolute top-[40%] md:top-[32%] left-[60%] md:left-[82%] lg:left-[63%] xl:left-[82%] max-w-[140px] md:max-w-[208px] lg:max-w-[200px] xl:max-w-[253px] w-full z-10 rounded-[20px] overflow-hidden rotate-[8deg]">
                    <Image src={transactionChart} alt="features" className="w-full h-full dark:hidden" />
                    <Image src={transactionChartDark} alt="features" className="w-full h-full hidden dark:block" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <figure className="w-full md:max-w-[500px] lg:max-w-[400px] xl:max-w-[500px]">
                    <Image src={featureImage1} alt="features" className="w-full dark:hidden" />
                    <Image src={featureImage1Dark} alt="features" className="w-full hidden dark:block" />
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.7} duration={1.5} useSpring>
                  <figure className="absolute bottom-0 md:bottom-1/12 left-[40%] md:left-[62%] max-w-[200px] md:max-w-[265px] lg:max-w-[250px] xl:max-w-[333px] w-full rounded-[10px] overflow-hidden">
                    <Image src={profitChart} alt="features" className="size-full dark:hidden" />
                    <Image src={profitChartDark} alt="features" className="size-full hidden dark:block" />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="space-y-8">
              <div className="space-y-5">
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-green">Reasons to select us</span>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <div className="space-y-3">
                    <h2>
                      Why <span className="text-primary-500">thousands trust </span> us to build their apps
                    </h2>
                  </div>
                </RevealAnimation>
              </div>
              <div>
                <ul className="space-y-2">
                  {featureList.map((feature, index) => (
                    <RevealAnimation key={index} delay={0.4 + index * 0.1}>
                      <li className="p-2 flex items-center gap-4">
                        <span className={`${feature.icon} text-[36px] text-secondary dark:text-accent`} />
                        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                          {feature.text}
                        </span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
