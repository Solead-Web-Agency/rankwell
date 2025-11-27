import circleImg from '@public/images/about-page-01/circle.png';
import aboutDecentralization2Img from '@public/images/home-page-1/about-decentralization-2.svg';
import aboutDecentralizationDark2Img from '@public/images/home-page-1/about-decentralization-dark-2.svg';
import profitChartImg from '@public/images/home-page-26/profit-chart.png';
import profitDarkChartImg from '@public/images/home-page-26/profit-dark-chart.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featureList = [
  { id: 1, icon: 'ns-shape-8', label: 'Analyze your data' },
  { id: 2, icon: 'ns-shape-9', label: 'Collaborate securely' },
  { id: 3, icon: 'ns-shape-12', label: 'Embedded analytics' },
  { id: 4, icon: 'ns-shape-21', label: 'Easy & intuitive' },
];

const WhyChooseUs = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px] overflow-hidden">
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-12 items-center">
          <div>
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Reasons to select us</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3">
                A highly effective
                <br className="hidden lg:block" />
                unified platform
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="lg:max-w-[536px]">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before &amp;
                After magazine.
              </p>
            </RevealAnimation>
            <ul className="sm:space-y-2 mt-10 md:mt-14">
              {featureList.map((item, idx) => (
                <RevealAnimation key={item.id} delay={0.5 + idx * 0.1}>
                  <li className="flex items-center gap-4 list-none py-2">
                    <span className={`${item.icon} text-[36px] text-secondary dark:text-accent`} />
                    <strong className="text-tagline-1 font-medium text-secondary dark:text-accent">{item.label}</strong>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <div className="relative max-w-[460px] min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[558px] max-h-[598px] w-full h-full bg-linear-[156deg,_#FFF_32.92%,_#83E7EE_91%] dark:bg-linear-[156deg,_#070B10_32.92%,_#C6F56F_91%] rounded-[20px]">
            <RevealAnimation delay={0.3}>
              <figure className="absolute bottom-[6%] -left-[12%] md:-left-[19%] w-[85%] md:w-[120%] rounded-2xl">
                <Image src={circleImg} alt="transaction-statistics" className="size-full" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4} duration={1} direction="right">
              <figure className="absolute top-[5%] -right-2.5 md:-right-[4%] lg:-right-[2%] 2xl:-right-[19%] shadow-3 rounded-2xl overflow-hidden max-xl:w-[180px] max-w-[244px] w-full">
                <Image
                  src={aboutDecentralization2Img}
                  alt="transaction-statistics"
                  className="block dark:hidden size-full"
                />
                <Image
                  src={aboutDecentralizationDark2Img}
                  alt="transaction-statistics"
                  className="dark:block hidden size-full"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} duration={1} direction="right" offset={100}>
              <figure className="absolute bottom-[5%] shadow-3 -right-2.5 md:-right-[4%] lg:-right-[2%] 2xl:-right-[20%] rounded-[20px] overflow-hidden max-w-[270px] lg:max-w-[330px] xl:max-w-[395px] w-full">
                <Image src={profitChartImg} alt="transaction-statistics" className="block dark:hidden size-full" />
                <Image src={profitDarkChartImg} alt="transaction-statistics" className="hidden dark:block size-full" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
