import ellipse1 from '@public/images/home-page-37/ellipse-1.png';
import ellipse2 from '@public/images/home-page-37/ellipse-2.png';
import ellipse3 from '@public/images/home-page-37/ellipse-3.png';
import gadgetGraph from '@public/images/home-page-37/gadget-graph.png';
import gadgetProductivity from '@public/images/home-page-37/gadget-productivity.png';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Gadgets = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-background-12 max-w-[1880px] rounded-3xl md:rounded-4xl py-12 md:py-24 xl:py-28 md:px-5 mx-auto">
        <div className="main-container 2xl:!max-w-[1440px]">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 md:gap-4">
            {/* Grid 1 */}
            <RevealAnimation delay={0.1}>
              <div className="md:col-span-2 lg:col-span-1 lg:row-span-4 bg-white rounded-2xl p-8 flex justify-between flex-col">
                <div className="space-y-6">
                  <div>
                    <h6 className="text-secondary/60 dark:text-accent/60">Premium gadget access</h6>
                    <p className="text-secondary/40 dark:text-accent/40 text-tagline-2">
                      Unlock exclusive device upgrades
                    </p>
                  </div>
                  <h5 className="flex flex-wrap 2xl:flex-nowrap items-center">
                    <span className="font-inherit text-inherit mr-1"> $00.00 – </span>
                    <NumberAnimation
                      number={50000}
                      speed={1500}
                      interval={190}
                      rooms={5}
                      heightSpaceRatio={2.5}
                      className="font-inherit text-inherit"></NumberAnimation>
                    <span className="font-inherit text-inherit"> .00 USD </span>
                  </h5>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex item-center justify-between px-4 py-[15px] border border-stroke-1 rounded-[100px]">
                      <span className="text-tagline-3">Smart Home</span>
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="#1A1A1C"
                          strokeOpacity="0.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex item-center justify-between px-4 py-[15px] border border-stroke-1 rounded-[100px]">
                      <span className="text-tagline-3">LifeStyle</span>
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 6L8 10L4 6"
                          stroke="#1A1A1C"
                          strokeOpacity="0.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <li className="group list-none w-full sm:w-auto">
                    <Link
                      href="/login-03"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full">
                      <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                        Get access
                      </span>
                      <div className="relative overflow-hidden size-6">
                        {/* one  */}
                        <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none">
                            <path d="M11 5H13V7H11V5Z" fill="white" />
                            <path d="M5 5H7V7H5V5Z" fill="white" />
                            <path d="M14 8H16V10H14V8Z" fill="white" />
                            <path d="M8 8H10V10H8V8Z" fill="white" />
                            <path d="M17 11H19V13H17V11Z" fill="white" />
                            <path d="M11 11H13V13H11V11Z" fill="white" />
                            <path d="M14 14H16V16H14V14Z" fill="white" />
                            <path d="M8 14H10V16H8V14Z" fill="white" />
                            <path d="M11 17H13V19H11V17Z" fill="white" />
                            <path d="M5 17H7V19H5V17Z" fill="white" />
                          </svg>
                        </span>
                        {/* two  */}
                        <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none">
                            <path d="M11 5H13V7H11V5Z" fill="white" />
                            <path d="M5 5H7V7H5V5Z" fill="white" />
                            <path d="M14 8H16V10H14V8Z" fill="white" />
                            <path d="M8 8H10V10H8V8Z" fill="white" />
                            <path d="M17 11H19V13H17V11Z" fill="white" />
                            <path d="M11 11H13V13H11V11Z" fill="white" />
                            <path d="M14 14H16V16H14V14Z" fill="white" />
                            <path d="M8 14H10V16H8V14Z" fill="white" />
                            <path d="M11 17H13V19H11V17Z" fill="white" />
                            <path d="M5 17H7V19H5V17Z" fill="white" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </li>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 2 */}
            <RevealAnimation delay={0.2}>
              <div className="lg:col-span-1 lg:row-span-1 rounded-2xl p-8 flex item-center justify-center flex-col bg-linear-[180deg,#A585FF_0%,#FFC2AD_100%]">
                <div className="text-center">
                  <h5 className="text-white">Your AI Device Balance</h5>
                  <h3 className="text-white flex justify-center items-center">
                    <NumberAnimation
                      number={35900}
                      speed={1500}
                      interval={190}
                      rooms={5}
                      heightSpaceRatio={2.0}
                      className="font-inherit text-inherit"></NumberAnimation>
                    <span className="font-inherit text-inherit">.50</span>
                  </h3>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 3 */}
            <RevealAnimation delay={0.3}>
              <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-2xl p-8 flex items-center justify-center flex-col">
                <div className="relative z-0 size-[172px] rounded-full overflow-hidden flex items-center justify-center flex-col">
                  <figure className="absolute left-1/2 top-1/2 -translate-1/2 -z-10 w-full h-full">
                    <Image src={gadgetProductivity} alt="gadget-productivity" />
                  </figure>
                  <div className="text-center">
                    <h5 className="flex items-center justify-center">
                      <NumberAnimation
                        number={60}
                        speed={1500}
                        interval={150}
                        rooms={2}
                        className="font-inherit text-inherit"></NumberAnimation>
                      %
                    </h5>
                    <p className="text-secondary/60 text-tagline-3">Productivity</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 4 */}
            <RevealAnimation delay={0.4}>
              <div className="md:col-span-2 lg:col-span-1 lg:row-span-3 rounded-2xl bg-white p-8 flex items-center justify-center flex-col lg:min-h-[361px]">
                <div className="text-center">
                  <h5>&quot;Track your AI gadgets in real-time with clear insights&quot;</h5>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 5 (center wide card) */}
            <RevealAnimation delay={0.5} start="top 98%">
              <div className="md:col-span-3 lg:col-span-2 lg:row-span-6 bg-white rounded-2xl p-8 flex justify-center flex-col lg:min-h-[452px]">
                <div className="text-center space-y-6">
                  <figure className="lg:max-w-[198px] lg:block hidden mx-auto">
                    <Image src={mainLogo} alt="NextSaaS" className="dark:invert" />
                  </figure>
                  <div>
                    <h2>
                      Smart Gadgets,
                      <br className="lg:block hidden" />
                      Powered by AI
                    </h2>
                  </div>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 6 */}
            <RevealAnimation delay={0.1} start="top 97%">
              <div className="lg:col-span-1 lg:row-span-2 rounded-2xl bg-secondary p-8 flex items-center justify-center flex-col lg:min-h-[226px]">
                <div className="text-center">
                  <h5 className="text-white">AI-Powered Gadget platform</h5>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 7 */}
            <RevealAnimation delay={0.1} start="top 95%">
              <div className="md:col-span-2 lg:col-span-1 lg:row-span-4 bg-white rounded-2xl p-8 flex justify-between flex-col">
                <div className="text-center">
                  <p className="text-secondary/60">Insights</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="flex max-[375px]:flex-col items-center justify-center">
                    <div className="flex -space-x-3.5 items-center">
                      <RevealAnimation delay={0.2} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="inline-block size-13 rounded-full ring-2 ring-white dark:ring-black bg-ns-green relative z-30"
                            src={ellipse1}
                            alt="Avatar 1"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.3} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="inline-block size-15 rounded-full ring-2 ring-white dark:ring-black bg-ns-green relative z-20"
                            src={ellipse2}
                            alt="Avatar 2"
                          />
                        </figure>
                      </RevealAnimation>
                      <RevealAnimation delay={0.4} direction="right" offset={50}>
                        <figure>
                          <Image
                            className="inline-block size-13 rounded-full ring-2 ring-white dark:ring-black bg-ns-green relative z-10"
                            src={ellipse3}
                            alt="Avatar 3"
                          />
                        </figure>
                      </RevealAnimation>
                    </div>
                  </div>
                  <h5>Smarter, Faster, AI-Powered Gadgets</h5>
                </div>
                <div className="text-center">
                  <p className="text-secondary/60">2025</p>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 8 */}
            <RevealAnimation delay={0.3} start="top 80%">
              <div className="lg:col-span-1 lg:row-span-3 rounded-2xl bg-white p-8 flex items-center justify-center flex-col lg:min-h-[361px]">
                <div className="text-center">
                  <h5>Award-winning AI gadget ecosystem</h5>
                </div>
              </div>
            </RevealAnimation>
            {/* Grid 9 */}
            <RevealAnimation delay={0.2} start="top 96%">
              <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-2xl p-8 flex flex-col space-y-8">
                <div className="flex items-center justify-between">
                  <p className="text-tagline-1 font-medium text-secondary">AI Device Health</p>
                  <p className="text-secondary/60 text-tagline-3">92%</p>
                </div>
                <figure>
                  <Image src={gadgetGraph} alt="gadget-chart" />
                </figure>
              </div>
            </RevealAnimation>
            {/* Grid 10 */}
            <RevealAnimation delay={0.3} start="top 96%">
              <div className="lg:col-span-1 lg:row-span-1 bg-white rounded-2xl p-8 flex items-center justify-center flex-col space-y-8">
                <div className="w-full text-center space-y-2">
                  <div className="bg-primary-500 py-3.5 px-5 rounded-full text-center max-w-[240x] mx-auto">
                    <p className="text-tagline-2 text-accent">Total saved</p>
                  </div>
                  <div>
                    <h4 className="text-black flex md:flex-wrap 2xl:flex-nowrap items-center justify-center">
                      <NumberAnimation
                        number={100333}
                        speed={1500}
                        interval={190}
                        rooms={6}
                        heightSpaceRatio={2}
                        className="font-inherit text-inherit"></NumberAnimation>
                      <span className="font-inherit text-inherit">.50 $</span>
                    </h4>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span className="bg-ns-yellow flex items-center justify-center rounded-full size-[18px] p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={14} viewBox="0 0 13 14" fill="none">
                        <path
                          d="M0.673696 7.00446C0.776925 7.11477 0.918664 7.17963 1.06849 7.1851C1.2291 7.18812 1.38357 7.12258 1.49425 7.00446L5.90667 2.52753V12.9109C5.91084 13.2345 6.16835 13.4958 6.48725 13.5C6.80616 13.4958 7.06367 13.2345 7.06784 12.9109V2.52752L11.4803 7.00446C11.6282 7.15879 11.8461 7.22131 12.0518 7.16846C12.2575 7.11562 12.4198 6.95544 12.4776 6.74826C12.5353 6.54108 12.4797 6.31838 12.3318 6.16405L6.91302 0.666063C6.68303 0.444646 6.32245 0.444646 6.09246 0.666063L0.673696 6.16405C0.562587 6.27481 0.5 6.42622 0.5 6.58425C0.5 6.74229 0.562587 6.8937 0.673696 7.00446Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <p className="text-tagline-2">234.45%</p>
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

export default Gadgets;
