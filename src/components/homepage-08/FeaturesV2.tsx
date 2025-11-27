import { CheckIcon } from '@/icons';
import barChartDark from '@public/images/home-page-8/bar-chart-dark.png';
import barChart from '@public/images/home-page-8/bar-chart.png';
import lineChartDark from '@public/images/home-page-8/line-chart-dark.png';
import lineChart from '@public/images/home-page-8/line-chart.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const FeaturesV2 = () => {
  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16">
      <div className="main-container md:space-y-[70px] space-y-10">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">More features</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[674px] mx-auto">Managing your money has never been easier</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[578px] mx-auto">
                In today&apos;s fast-paced world, staying on top of your finances shouldn&apos;t feel like a chore.With
                intuitive tools, real-time tracking, and personalized insights
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:gap-8 gap-y-8 items-end">
          <RevealAnimation delay={0.4}>
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] px-8 py-14">
                <div className="space-y-4 max-h-[130px]">
                  <p className="text-heading-5 font-normal">Expense</p>
                  <div className="flex items-start justify-between">
                    <ul className="space-y-[3px]">
                      <li className="flex items-center gap-2">
                        <span className="size-5 rounded-full bg-secondary dark:bg-accent">
                          <CheckIcon />
                        </span>

                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                          Data integration
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-5 rounded-full bg-secondary dark:bg-accent">
                          <CheckIcon />
                        </span>
                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">Shopping</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="size-5 rounded-full bg-secondary dark:bg-accent">
                          <CheckIcon />
                        </span>
                        <span className="text-secondary dark:text-accent text-tagline-1 font-normal">
                          Technology &amp; Solutions
                        </span>
                      </li>
                    </ul>
                    <div className="xl:block lg:hidden block">
                      <div className="relative">
                        <svg width={90} height={90} viewBox="0 0 90 90">
                          <circle cx={45} cy={45} r={40} stroke="#F0F2F6" strokeWidth={10} fill="none" />
                          <circle
                            cx={45}
                            cy={45}
                            r={40}
                            stroke="#A585FF"
                            strokeWidth={10}
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="251.327"
                            strokeDashoffset="100.531"
                            transform="rotate(-90 45 45)"
                          />
                        </svg>
                        <p className="absolute inset-0 flex items-center justify-center text-heading-6 font-normal text-secondary dark:text-accent">
                          <NumberAnimation number={60} speed={2000} interval={200} rooms={2} heightSpaceRatio={2.4}>
                            60
                          </NumberAnimation>
                          %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-px my-8 bg-stroke-4 dark:bg-stroke-8" />
                <div className="space-y-3">
                  <h3 className="text-heading-5 font-normal line-clamp-1">Manage project finances</h3>
                  <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus
                    nibh tristique sit felis.
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] px-8 py-14">
                <figure className="max-w-[344px] min-h-[130px] mx-auto">
                  <Image src={barChart} alt="data process chart" className="block dark:hidden" />
                  <Image src={barChartDark} alt="data process chart" className="hidden dark:block" />
                </figure>
                <div className="w-full h-px my-8 bg-stroke-4 dark:bg-stroke-8" />
                <div className="space-y-3">
                  <h3 className="text-heading-5 font-normal line-clamp-1">Streamlined data processes</h3>
                  <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus
                    nibh tristique sit felis.
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="col-span-12 lg:col-span-4">
              <div className="bg-background-1 dark:bg-background-6 rounded-[20px] px-8 py-14">
                <figure className="max-w-[344px] min-h-[130px] mx-auto">
                  <Image src={lineChart} alt="data process chart" className="block dark:hidden" />
                  <Image src={lineChartDark} alt="data process chart" className="hidden dark:block" />
                </figure>
                <div className="w-full h-px my-8 bg-stroke-4 dark:bg-stroke-8" />
                <div className="space-y-3">
                  <h3 className="text-heading-5 font-normal line-clamp-1">Real-time Analytics &amp; Insights</h3>
                  <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectur suspen ultricies aenean viverra sodales vulputate nis tellus
                    nibh tristique sit felis.
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturesV2;
