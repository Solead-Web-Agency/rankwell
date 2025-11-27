import building from '@public/images/home-page-25/building.png';
import transactionChartDark from '@public/images/home-page-25/transaction-chart-dark.svg';
import transactionChart from '@public/images/home-page-25/transaction-chart.svg';
import profitChart from '@public/images/home-page-26/profit-chart.png';
import profitDarkChart from '@public/images/home-page-26/profit-dark-chart.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const featureItems = [
  {
    id: '1',
    icon: 'ns-shape-10',
    text: 'Unified dashboard for all properties &amp; tenants',
  },
  {
    id: '2',
    icon: 'ns-shape-21',
    text: 'Automated rent collection &amp; reminders',
  },
  {
    id: '3',
    icon: 'ns-shape-11',
    text: 'Online maintenance requests &amp; work orders',
  },
  {
    id: '4',
    icon: 'ns-shape-12',
    text: 'AI-powered tenant screening',
  },
  {
    id: '5',
    icon: 'ns-shape-13',
    text: 'Real-time financial insights',
  },
];

const FeatureHighlights = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 pb-24 pt-20 md:pb-28 md:pt-32 lg:pb-36 lg:pt-36 xl:pb-[200px] xl:pt-[200px] overflow-hidden">
      <div className="main-container flex flex-col-reverse lg:flex-row items-center gap-y-14 lg:gap-x-24">
        <div className="md:flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="space-y-5 mb-14">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Reasons to select us</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[535px]">Modern tools built for today&apos;s property teams.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[508px]">Streamline operations, reduce manual tasks, and maximize revenue.</p>
              </RevealAnimation>
            </div>
          </div>
          <ul className="space-y-2">
            {featureItems.map((feature, index) => (
              <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                <li className="text-tagline-1 text-left font-medium flex items-center gap-4 md:py-2 md:px-3 dark:text-accent">
                  <span className={`${feature.icon} text-[36px] text-secondary dark:text-accent`} />
                  {feature.text}
                </li>
              </RevealAnimation>
            ))}
          </ul>
        </div>
        <div className="md:flex-1 flex justify-start w-full lg:w-auto">
          <figure className="relative w-full lg:w-[500px]">
            <RevealAnimation delay={0.7} direction="right" offset={100}>
              <div className="rounded-2xl overflow-hidden absolute top-[8%] -right-2 sm:-right-4 lg:left-[50%] xl:left-[60%] 2xl:left-[68%] w-[200px] md:w-[253px] z-10">
                <Image
                  src={transactionChart}
                  alt="Transaction chart"
                  className="w-full h-full object-cover inline-block dark:hidden"
                />
                <Image
                  src={transactionChartDark}
                  alt="Transaction chart dark"
                  className="w-full h-full object-cover hidden dark:block"
                />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6} direction="right" offset={100}>
              <div className="absolute top-[13%] right-0 sm:right-2 lg:right-[1%] xl:-right-[10%] 2xl:-right-[23%] w-[92px] z-10">
                <RevealAnimation delay={0.8} direction="up" offset={150}>
                  <div className="text-heading-6 text-secondary md:text-heading-5 font-normal flex items-center justify-center -rotate-[14deg] py-1 px-2 bg-ns-yellow rounded-[8px]">
                    <NumberAnimation number={20} speed={2500} interval={270} rooms={2} />
                    <span>%</span>
                  </div>
                </RevealAnimation>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div className="w-full">
                <Image src={building} alt="Building" className="w-full" />
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.8} direction="right" offset={100}>
              <div className="absolute bottom-1/12 left-[0%] sm:left-[40%] md:left-[0%] lg:left-[23%] xl:left-[30%] 2xl:left-[40%] rounded-md md:rounded-2xl overflow-hidden w-[200px] sm:w-[340px] md:w-[395px] shadow-2">
                <Image src={profitChart} alt="Profit chart" className="w-full h-full shadow-5 block dark:hidden" />
                <Image
                  src={profitDarkChart}
                  alt="Profit chart dark"
                  className="hidden dark:block rounded-[20px] shadow-5 max-w-[200px] md:max-w-full"
                />
              </div>
            </RevealAnimation>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
