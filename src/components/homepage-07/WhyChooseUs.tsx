import { cn } from '@/utils/cn';
import transactionChartDark from '@public/images/home-page-25/transaction-chart-dark.svg';
import transactionChart from '@public/images/home-page-25/transaction-chart.svg';
import profitChart from '@public/images/home-page-26/profit-chart.png';
import transactionRingDark from '@public/images/home-page-7/transaction-ring-dark.png';
import transactionRing from '@public/images/home-page-7/transaction-ring.png';
import profitChartDark from '@public/images/home-page-9/select-us-img-02-dark.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const WhyChooseUs = ({ className }: { className?: string }) => {
  return (
    <section className={cn('py-20 lg:py-[120px] bg-background-3 dark:bg-background-5 overflow-hidden', className)}>
      <div className="main-container flex flex-col lg:flex-row justify-between gap-12 items-center">
        <div>
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">Reasons to select us</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Easily manage your
              <br className="hidden lg:block" />
              cash flow.
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[536px]">
              Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before &amp;
              After magazine.
            </p>
          </RevealAnimation>
          <ul className="space-y-1 mt-8 lg:mt-14">
            <RevealAnimation delay={0.4}>
              <li className="flex items-center gap-4 list-none py-2">
                <span className="ns-shape-8 text-[36px] text-secondary dark:text-accent"> </span>
                <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                  A version for offline use is available.
                </strong>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <li className="flex items-center gap-4 list-none py-2">
                <span className="ns-shape-9 text-[36px] text-secondary dark:text-accent"> </span>
                <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                  Designed to be both scalable and secure.
                </strong>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <li className="flex items-center gap-4 list-none py-2">
                <span className="ns-shape-12 text-[36px] text-secondary dark:text-accent"> </span>
                <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                  Feature powered by artificial intelligence.
                </strong>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.7}>
              <li className="flex items-center gap-4 list-none py-2">
                <span className="ns-shape-21 text-[36px] text-secondary dark:text-accent"> </span>
                <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">
                  It offers both scalability and robust security.
                </strong>
              </li>
            </RevealAnimation>
          </ul>
        </div>
        <div className="relative">
          <RevealAnimation delay={0.2} direction="up" offset={150}>
            <figure className="rounded-[20px] max-w-[735px] w-full h-full object-cover">
              <Image
                src={transactionRing}
                alt="transaction-statistics"
                className="block dark:hidden size-full object-cover"
              />
              <Image
                src={transactionRingDark}
                alt="transaction-statistics"
                className="hidden dark:block size-full object-cover"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="right" offset={100} useSpring={true} duration={2}>
            <figure className="rounded-[20px] overflow-hidden absolute top-[15%] right-6 md:right-0 max-w-[140px] md:max-w-[253px] lg:max-w-[200px] xl:max-w-[253px] w-full">
              <Image
                src={transactionChart}
                alt="features"
                className="w-full h-full object-cover inline-block dark:hidden"
              />
              <Image
                src={transactionChartDark}
                alt="features"
                className="w-full h-full object-cover hidden dark:block"
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={1} direction="up" offset={100} useSpring={true} duration={1.5}>
            <div className="absolute top-[20%] right-0 xl:-right-[4%] w-[92px] z-10">
              <div className="text-heading-6 md:text-heading-5 font-normal flex items-center justify-center -rotate-[14deg] py-1 px-2 bg-ns-yellow rounded-[8px]">
                <NumberAnimation number={20} speed={2500} interval={200} rooms={2}>
                  20
                </NumberAnimation>
                %
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7} direction="right" offset={100} useSpring={true} duration={2}>
            <figure className="rounded-[20px] overflow-hidden absolute bottom-0 sm:bottom-10 md:bottom-[10%] right-0 shadow-3 max-w-[200px] sm:max-w-[320px] md:max-w-[395px] w-full">
              <Image src={profitChart} alt="features" className="w-full h-full dark:hidden" />
              <Image src={profitChartDark} alt="features" className="w-full h-full hidden dark:block" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
