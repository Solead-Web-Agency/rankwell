import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import gradientBg from '@public/images/gradient/gradient-36.png';
import subFeatures6 from '@public/images/home-page-3/sub-features-6.png';
import subFeatures7 from '@public/images/home-page-3/sub-features-7.png';
import subFeatures8 from '@public/images/home-page-3/sub-features-8.png';
import subFeatures9 from '@public/images/home-page-3/sub-features-9.png';
import subFeatures6Dark from '@public/images/home-page-3/sub-features-dark-6.png';
import subFeatures7Dark from '@public/images/home-page-3/sub-features-dark-7.png';
import subFeatures8Dark from '@public/images/home-page-3/sub-features-dark-8.png';
import subFeatures9Dark from '@public/images/home-page-3/sub-features-dark-9.png';
import understandingChatDark from '@public/images/home-page-3/understanding-chat-dark.png';
import understandingChat from '@public/images/home-page-3/understanding-chat.png';
import userActivityChartDark from '@public/images/home-page-3/user-activity-chart-dark.svg';
import userActivityChart from '@public/images/home-page-3/user-activity-chart.svg';

const Understanding = () => {
  return (
    <section className="bg-background-3 dark:bg-background-7 pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-[150px] lg:pb-[150px] xl:pt-[200px] xl:pb-[200px]">
      <div className="main-container">
        {/* Section header */}
        <div className="mb-10 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-5">Understanding</span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h2 className="mb-3">
              Insights based on data to enhance
              <br className="hidden md:block" />
              <span className="text-primary-500 inline-block">decision-making.</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 lg:max-w-[562px]">
              Insights based on data play a vital role in enhancing decision-making across all areas of business and
              strategy.
            </p>
          </RevealAnimation>
        </div>

        <div className="relative">
          <RevealAnimation delay={0.4}>
            <figure className="mx-auto flex items-center justify-center">
              <div className="relative z-10 max-w-[756px] overflow-hidden rounded-4xl p-2.5">
                {/* Background image */}
                <figure className="pointer-events-none absolute top-[-63%] left-[-35%] -z-10 w-[630px] select-none md:w-[1030px]">
                  <Image
                    src={gradientBg}
                    alt="Chat dashboard interface background"
                    className="h-full w-full"
                    priority
                  />
                </figure>
                <figure className="mx-auto max-w-[576px]">
                  <Image
                    src={understandingChat}
                    alt="Understanding"
                    className="block rounded-[25px] dark:hidden"
                    priority
                  />
                  <Image
                    src={understandingChatDark}
                    alt="Understanding"
                    className="hidden rounded-[25px] dark:block"
                    priority
                  />
                </figure>
              </div>
            </figure>
          </RevealAnimation>

          {/* Left side floating cards */}
          <div className="absolute top-[53%] -left-4 z-20 flex flex-col items-center md:left-[8.4%]">
            <RevealAnimation delay={0.5} useSpring={true} duration={2}>
              <figure className="shadow-7 relative z-40 max-h-[72px] max-w-[220px] overflow-hidden rounded-2xl md:max-w-[300px]">
                <Image
                  src={subFeatures6}
                  alt="Sub features"
                  className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures6Dark}
                  alt="Sub features"
                  className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.6} useSpring={true} duration={2}>
              <figure className="shadow-7 z-30 -mt-[22px] max-h-[72px] max-w-[200px] overflow-hidden rounded-2xl md:max-w-[280px]">
                <Image
                  src={subFeatures7}
                  alt="Sub features"
                  className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures7Dark}
                  alt="Sub features"
                  className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.7} useSpring={true} duration={2}>
              <figure className="shadow-7 z-20 -mt-[22px] max-h-[72px] max-w-[170px] overflow-hidden rounded-2xl md:max-w-[260px]">
                <Image
                  src={subFeatures8}
                  alt="Sub features"
                  className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures8Dark}
                  alt="Sub features"
                  className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.8} useSpring={true} duration={2}>
              <figure className="shadow-9 -mt-[22px] max-h-[72px] max-w-[160px] overflow-hidden rounded-2xl md:max-w-[240px]">
                <Image
                  src={subFeatures9}
                  alt="Sub features"
                  className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                />
                <Image
                  src={subFeatures9Dark}
                  alt="Sub features"
                  className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>

          {/* User activity chart */}
          <RevealAnimation delay={0.5} direction="right" offset={100} useSpring={true} duration={2}>
            <div className="shadow-4 absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 overflow-hidden rounded-2xl lg:block xl:right-14">
              <figure className="shadow-9">
                <Image src={userActivityChart} alt="User activity" className="block dark:hidden" />
                <Image src={userActivityChartDark} alt="User activity" className="hidden dark:block" />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Understanding.displayName = 'Understanding';
export default Understanding;
