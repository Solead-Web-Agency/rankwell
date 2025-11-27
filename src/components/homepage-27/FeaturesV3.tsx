import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

import aboutDataIntegration1DarkImage from '@public/images/home-page-6/aboaut-data-integration-1-dark.png';
import aboutDataIntegration1Image from '@public/images/home-page-6/about-data-integration-1.png';
import aboutDataIntegration2DarkImage from '@public/images/home-page-6/about-data-integration-2-dark.svg';
import aboutDataIntegration2Image from '@public/images/home-page-6/about-data-integration-2.svg';
import aboutDataIntegration3DarkImage from '@public/images/home-page-6/about-data-integration-3-dark.svg';
import aboutDataIntegration3Image from '@public/images/home-page-6/about-data-integration-3.svg';

const FeaturesV3 = () => {
  return (
    <section className="xl:pt-[242px] md:pt-[120px] pt-[60px] xl:pb-[200px] md:pb-[100px] pb-[50px] bg-background-1 dark:bg-background-5">
      <div className="main-container">
        <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 gap-y-16">
          <div className="col-span-12 lg:col-span-6">
            <div className="relative z-10 inline-block max-lg:left-1/2 max-lg:-translate-x-1/2">
              <RevealAnimation delay={0.2} direction="left" offset={100}>
                <figure className="max-w-[358px] rounded-[20px]">
                  <Image
                    src={aboutDataIntegration1Image}
                    alt="about-data-integration"
                    className="size-full dark:hidden rounded-[20px] object-cover"
                  />
                  <Image
                    src={aboutDataIntegration1DarkImage}
                    alt="about-data-integration"
                    className="size-full hidden dark:inline-block rounded-[20px] object-cover"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.3} direction="right">
                <figure className="absolute max-sm:w-[200px] md:w-[250px] lg:w-[260px] xl:w-auto -top-12 -right-14 sm:-top-[90px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] rounded-2xl overflow-hidden">
                  <Image
                    src={aboutDataIntegration2Image}
                    alt="about-data-integration"
                    className="size-full object-cover block dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration2DarkImage}
                    alt="about-data"
                    className="size-full object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="right">
                <figure className="absolute max-sm:w-[130px] bottom-12 -right-14 sm:bottom-[85px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] -z-10 rounded-2xl overflow-hidden">
                  <Image
                    src={aboutDataIntegration3Image}
                    alt="about-data-integration"
                    className="size-full object-cover block dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration3DarkImage}
                    alt="about-data-integration"
                    className="size-full object-cover hidden dark:inline-block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3 lg:text-left text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-green">Expand your reach</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[592px] w-full lg:mx-0 mx-auto">
                  Market your <br />
                  properties <span className="text-primary-500">like a pro</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="lg:max-w-[592px] max-w-[450px] w-full lg:mx-0 mx-auto">
                  Leverage NexSaaS&apos;s built-in marketing tools to advertise vacancies, nurture leads, and secure
                  high-quality tenants faster than ever.
                </p>
              </RevealAnimation>
            </div>
            <div className="pt-8 pb-14">
              <ul className="flex items-center lg:justify-start justify-center xl:gap-6 gap-4 flex-wrap">
                <RevealAnimation delay={0.4}>
                  <li className="flex items-center gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                        fill="none"
                        className="shrink-0">
                        <path
                          d="M13.1875 1.79102L5.3125 9.66567L1.375 5.72852"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="lg:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent">
                      Top Rental platform listings
                    </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                        fill="none"
                        className="shrink-0">
                        <path
                          d="M13.1875 1.79102L5.3125 9.66567L1.375 5.72852"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="lg:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent">
                      AI Lead scoring
                    </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                        fill="none"
                        className="shrink-0">
                        <path
                          d="M13.1875 1.79102L5.3125 9.66567L1.375 5.72852"
                          className="stroke-secondary dark:stroke-accent"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="lg:text-tagline-1 text-tagline-2 font-medium text-secondary dark:text-accent">
                      Performance reports
                    </span>
                  </li>
                </RevealAnimation>
              </ul>
            </div>
            <RevealAnimation delay={0.7}>
              <div className="lg:text-left text-center">
                <LinkButton
                  href="/features-01"
                  className="btn btn-secondary btn-xl hover:btn-white dark:btn-accent dark:hover:btn-white-dark">
                  Start your journey
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesV3;
