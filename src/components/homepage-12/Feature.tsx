import userActivityChart from '@public/images/home-page-12/user-activity-chart.png';
import aboutBg from '@public/images/home-page-2/about-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Progress from './Progress';

const Feature = () => {
  return (
    <section className="xl:py-[200px] lg:py-[100px] py-16 md:py-20 bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-5 text-center mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan">Turn clicks into customers</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>
                Data-driven insights that
                <span className="text-primary-500"> fuel growth</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text nothing Before &amp;
                After magazine.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-12 xl:gap-8 gap-y-8 xl:max-w-full max-w-[800px] mx-auto xl:mx-0">
            <RevealAnimation delay={0.5}>
              <div className="col-span-12 xl:col-span-6">
                <div className="bg-secondary dark:bg-background-8 md:p-[42px] sm:p-8 p-6 rounded-[20px]">
                  <div className="flex items-center justify-between mb-[53px]">
                    <p className="text-lg font-semibold text-white leading-[27px]">User activity</p>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width={6} height={30} viewBox="0 0 6 30" fill="none">
                        <path
                          d="M3 6C1.34315 6 1.24614e-06 4.65685 1.31174e-06 3C1.37734e-06 1.34315 1.34315 -2.24746e-07 3 -1.44784e-07C4.65685 -6.48221e-08 6 1.34315 6 3C6 4.65685 4.65685 6 3 6Z"
                          fill="#CED1C7"
                        />
                        <path
                          d="M3 18C1.34315 18 7.71061e-07 16.6569 8.36656e-07 15C9.02252e-07 13.3431 1.34315 12 3 12C4.65685 12 6 13.3431 6 15C6 16.6569 4.65685 18 3 18Z"
                          fill="#CED1C7"
                        />
                        <path
                          d="M3 30C1.34315 30 2.95976e-07 28.6569 3.61572e-07 27C4.27167e-07 25.3431 1.34315 24 3 24C4.65685 24 6 25.3431 6 27C6 28.6569 4.65685 30 3 30Z"
                          fill="#CED1C7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <figure className="max-w-[545px] w-full">
                      <Image src={userActivityChart} alt="user-activity" className="w-full" />
                    </figure>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="col-span-12 xl:col-span-6">
                <div className="bg-white dark:bg-background-8 md:p-[42px] sm:p-8 p-6 rounded-[20px] space-y-3">
                  <Progress />
                </div>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.7} duration={0.9} offset={90}>
              <div className="col-span-12">
                <div className="relative overflow-hidden z-10 grid grid-cols-12 items-center md:px-11 sm:px-8 px-6 md:py-14 sm:py-8 py-6 rounded-[20px] bg-secondary dark:bg-linear-[0deg,rgba(0, 0, 0, 0.20)_0%,rgba(0, 0, 0, 0.20)_100%] xl:gap-0 gap-y-8">
                  <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
                    <Image src={aboutBg} alt=" about bg" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-8 col-span-12 xl:col-span-6">
                    <p className="text-heading-5 text-accent">Custom reports forinformed decision-making</p>
                    <LinkButton
                      href="/login-01"
                      className="btn btn-white btn-md dark:btn-transparent hover:btn-primary w-[90%] md:w-auto mx-auto md:mx-0">
                      Get started
                    </LinkButton>
                  </div>
                  <div className="col-span-12 xl:col-span-6">
                    <ul className="space-y-5">
                      <li className="flex items-center gap-3">
                        <span className="size-5 flex shrink-0 items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={8}
                            viewBox="0 0 10 8"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M9.125 1.375L3.875 6.62477L1.25 4"
                              stroke="#FCFCFC"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-accent">Seamless crm &amp; ad platform integration</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="size-5 flex shrink-0 items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={8}
                            viewBox="0 0 10 8"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M9.125 1.375L3.875 6.62477L1.25 4"
                              stroke="#FCFCFC"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-accent">Comprehensive analytics dashboard</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="size-5 flex shrink-0 items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={8}
                            viewBox="0 0 10 8"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M9.125 1.375L3.875 6.62477L1.25 4"
                              stroke="#FCFCFC"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-accent">Real-time campaign monitoring</p>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="size-5 flex shrink-0 items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={10}
                            height={8}
                            viewBox="0 0 10 8"
                            fill="none"
                            className="shrink-0">
                            <path
                              d="M9.125 1.375L3.875 6.62477L1.25 4"
                              stroke="#FCFCFC"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p className="text-accent">We grasp the unique requirements of your business.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
