import gradient40 from '@public/images/gradient/gradient-40.png';
import services1Dark from '@public/images/home-page-15/services-1-dark.png';
import services1 from '@public/images/home-page-15/services-1.png';
import servicesCard1Dark from '@public/images/home-page-15/services-5-dark.png';
import abstractBgDark from '@public/images/home-page-17/abastract-bg-dark.png';
import abstractBg from '@public/images/home-page-17/abastract-bg.png';
import servicesCard1 from '@public/images/home-page-17/services-card-1.png';
import timelineVectorDark from '@public/images/home-page-17/timeline-vector-dark.png';
import timelineVector from '@public/images/home-page-17/timeline-vector.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const WhyChooseUs = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="max-w-[1440px] sm:mx-auto mx-5">
        <div className="bg-background-3 dark:bg-background-7 rounded-[30px] py-14 md:py-[100px]">
          <div className="main-container">
            <div className="grid grid-cols-12 justify-center items-stretch gap-y-8 md:gap-x-8">
              {/* card-1 */}
              <RevealAnimation delay={0.2}>
                <div className="col-span-12 lg:col-span-8 relative rounded-[20px] overflow-hidden h-full">
                  <RevealAnimation delay={0.5} direction="up" offset={90}>
                    <figure className="absolute -top-[32%] -right-[55%] min-[575px]:-right-[21%] lg:-right-[24%] xl:-right-[18%] -rotate-[82deg] size-[385px] select-none pointer-events-none -z-0">
                      <Image
                        src={gradient40}
                        alt="why choice us"
                        className="w-full h-full object-cover object-center"
                      />
                    </figure>
                  </RevealAnimation>
                  <div className="bg-background-1 dark:bg-background-6 py-8 lg:py-[42px] px-7 lg:px-14 space-y-14 h-full flex flex-col justify-between text-center lg:text-left items-center lg:items-start">
                    <div className="">
                      <span className="badge badge-primary-light mb-5"> Why choose NextSaaS? </span>
                      <h2 className="max-w-[564px]">More than developers We&apos;re your tech Partners</h2>
                    </div>
                    <div>
                      <LinkButton
                        href="/affiliate-policy"
                        className="btn btn-secondary btn-lg xl:btn-xl dark:btn-transparent dark:hover:btn-accent hover:btn-white">
                        Let&apos;s talk strategy
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-2 */}
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                  <div className="bg-background-1 dark:bg-background-6 rounded-[20px] p-8 space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Strategy first approach</h3>
                      <p className="md:max-w-[252px]">We align every build with your long term business goals.</p>
                    </div>
                    <div className="bg-background-3 max-w-[344px] dark:bg-background-7 relative rounded-2xl flex flex-col justify-between space-y-2.5 pl-[70px] py-4 px-[29px] min-h-[170px]">
                      <figure className="w-full h-full">
                        <Image
                          src={timelineVector}
                          alt="services"
                          className="w-full h-full object-cover block dark:hidden"
                        />
                        <Image
                          src={timelineVectorDark}
                          alt="services"
                          className="w-full h-full object-cover hidden dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-3 */}
              <RevealAnimation delay={0.5}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                  <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Reliable &amp; scalable code</h3>
                      <p className="md:max-w-[252px]">Our engineers deliver future-proof, maintainable apps.</p>
                    </div>
                    <div className="min-h-[170px] flex items-center">
                      <figure className="max-w-[345px] w-full rounded-2xl overflow-hidden">
                        <Image
                          src={services1}
                          alt="services"
                          className="w-full h-full object-cover block dark:hidden"
                        />
                        <Image
                          src={services1Dark}
                          alt="services"
                          className="w-full h-full object-cover hidden dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-4 */}
              <RevealAnimation delay={0.7}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                  <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Full cycle testing</h3>
                      <p className="md:max-w-[252px]">Qa is embedded throughout the lifecycle—not just at the end.</p>
                    </div>
                    <div className="flex-1 flex items-center">
                      <figure className="max-w-[345px] rounded-2xl overflow-hidden w-full min-h-[223px]">
                        <Image
                          src={abstractBg}
                          alt="services"
                          className="w-full h-full object-cover block dark:hidden"
                        />
                        <Image
                          src={abstractBgDark}
                          alt="services"
                          className="w-full h-full object-cover hidden dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
              {/* card-5 */}
              <RevealAnimation delay={0.9}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 h-full">
                  <div className="bg-white dark:bg-background-6 rounded-[20px] p-8 space-y-6 h-full flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-heading-5">Transparent communication</h3>
                      <p className="md:max-w-[252px]">Weekly updates, live demo calls, and real-time collaboration.</p>
                    </div>
                    <div className="flex-1 flex items-center">
                      <figure className="max-w-[345px] w-full min-h-[190px]">
                        <Image
                          src={servicesCard1}
                          alt="services"
                          className="w-full h-full object-cover block dark:hidden"
                        />
                        <Image
                          src={servicesCard1Dark}
                          alt="services"
                          className="w-full h-full object-cover hidden dark:block"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
