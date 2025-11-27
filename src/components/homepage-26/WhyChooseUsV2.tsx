import transactionChart from '@public/images/home-page-25/transaction-chart.svg';
import profitChart from '@public/images/home-page-26/profit-chart.png';
import profitDarkChart from '@public/images/home-page-26/profit-dark-chart.png';
import transactionRingDark from '@public/images/home-page-7/transaction-ring-dark.png';
import transactionRing from '@public/images/home-page-7/transaction-ring.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    icon: 'ns-shape-7',
    title: 'Our platform is both flexible and scalable',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'Enjoy the convenience of offline mode',
  },

  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Setting up our system is a breeze',
  },

  {
    id: 4,
    icon: 'ns-shape-21',
    title: 'We prioritize robust security measures',
  },
];

const WhyChooseUsV2 = () => {
  return (
    <section
      className="py-[100px] bg-background-4 dark:bg-background-9 overflow-hidden"
      aria-label="Reasons to select us">
      <div className="main-container">
        <div className="flex items-center flex-col lg:flex-row lg:gap-[100px]">
          <div>
            <div className="max-w-[536px] md:w-full space-y-5 lg:mb-14 md:mb-10 mb-6">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Reasons to select us</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2 className="max-w-[446px]">Why choose our POS system</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[536px]">
                    NextSaaS helps businesses manage customer relationships, automate workflows, and close deals
                    faster—all in one seamless platform.
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <ul className="space-y-2" aria-label="Our key features">
              {data.map((item, index) => (
                <RevealAnimation delay={0.4 + index * 0.1} key={item.id}>
                  <li className="md:p-3 p-2 flex items-center gap-3">
                    <div className="flex items-center justify-center">
                      <span className={`${item.icon} md:text-[36px] text-[24px] text-secondary dark:text-accent`} />
                    </div>
                    <p className="md:text-lg sm:text-tagline-1 text-tagline-2 md:leading-[27px] font-normal text-secondary dark:text-accent">
                      {item.title}
                    </p>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="relative">
            <RevealAnimation delay={0.3}>
              <figure className="rounded-[20px] max-w-[500px] lg:max-w-[735px] w-full h-full object-cover">
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
            <RevealAnimation delay={0.5} direction="right" offset={100}>
              <figure className="rounded-[20px] overflow-hidden absolute top-[15%] right-8 md:right-0 max-w-[130px] md:max-w-[200px] xl:max-w-[253px] w-full">
                <Image src={transactionChart} alt="features" className="w-full h-full object-cover" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.8} direction="up" offset={150} start="top 95%">
              <div className="absolute top-[20%] right-6 lg:-right-[4%] w-[70px] md:w-[92px] z-10">
                <div className="text-heading-6 md:text-heading-5 font-normal flex items-center justify-center -rotate-[14deg] py-1 px-2 bg-ns-yellow rounded-[8px]">
                  <NumberAnimation number={20} speed={2000} interval={200} rooms={2} />
                  <span>%</span>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7} direction="right" offset={100}>
              <figure className="rounded-lg md:rounded-[20px] overflow-hidden absolute bottom-[10%] right-0 shadow-3 max-w-[200px] md:max-w-[320px] xl:max-w-[395px] w-full">
                <Image src={profitChart} alt="features" className="w-full h-full dark:hidden" />
                <Image src={profitDarkChart} alt="features" className="w-full h-full hidden dark:block" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsV2;
