import avatar1Image from '@public/images/avatar/avatar-1.png';
import avatar2Image from '@public/images/avatar/avatar-2.png';
import avatar3Image from '@public/images/avatar/avatar-3.png';
import balanceDarkImage from '@public/images/home-page-4/balance-dark.svg';
import balanceImage from '@public/images/home-page-4/balance.svg';
import services1DarkImage from '@public/images/home-page-4/services-1-dark.png';
import services1Image from '@public/images/home-page-4/services-1.png';
import services2DarkImage from '@public/images/home-page-4/services-2-dark.png';
import services2Image from '@public/images/home-page-4/services-2.png';
import services3DarkImage from '@public/images/home-page-4/services-3-dark.png';
import services3Image from '@public/images/home-page-4/services-3.png';
import services4DarkImage from '@public/images/home-page-4/services-4-dark.png';
import services4Image from '@public/images/home-page-4/services-4.png';
import Image from 'next/image';
import Link from 'next/link';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import Progress from './Progress';

const Services = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 space-y-14 overflow-hidden py-14 md:space-y-20 md:py-20 xl:space-y-[100px] xl:py-[100px]">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[650px] text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our Services</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mt-4 mb-3">In-depth overview of cryptocurrency solutions</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              An in-depth overview of cryptocurrency solutions reveals a rapidly evolving ecosystem designed to
              revolutionize traditional financial systems.
            </p>
          </RevealAnimation>
        </div>
      </div>

      <div className="main-container xl:pb-20">
        <div className="grid grid-cols-12 items-center justify-center gap-y-14 xl:justify-start xl:gap-[100px]">
          <div className="col-span-12 xl:col-span-6">
            <RevealAnimation delay={0.4} direction="right" offset={50}>
              <figure className="mx-auto max-h-[480px] max-w-[595px] xl:mx-0">
                <Image
                  src={services1Image}
                  alt="services-1"
                  className="h-full w-full object-fill dark:hidden"
                  priority
                />
                <Image
                  src={services1DarkImage}
                  alt="services-1"
                  className="hidden h-full w-full object-fill dark:block"
                  priority
                />
              </figure>
            </RevealAnimation>
          </div>

          <div className="col-span-12 xl:col-span-6">
            <div className="text-center xl:text-left">
              <div className="mb-14 space-y-3">
                <RevealAnimation delay={0.5}>
                  <h3 className="mx-auto max-w-[509px] xl:mx-0">Monitor and analyze conversions effectively</h3>
                </RevealAnimation>

                <RevealAnimation delay={0.6}>
                  <p className="mx-auto max-w-[465px] xl:mx-0">
                    Monitoring and analyzing conversions effectively is essential for understanding how users interact
                    with your digital platforms
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.7}>
                <div>
                  <Link
                    href="/our-services/monitor-and-analyze-conversions-effectively"
                    className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md">
                    <span>Read More</span>
                  </Link>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container xl:pb-14">
        <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-[100px]">
          <div className="order-2 col-span-12 xl:order-1 xl:col-span-6">
            <div className="text-center xl:text-left">
              <div className="mb-14 space-y-3">
                <RevealAnimation delay={0.1}>
                  <h3 className="mx-auto max-w-[509px] xl:mx-0">Instantaneous data insights and analytics</h3>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <p className="mx-auto max-w-[465px] xl:mx-0">
                    Instantaneous data insights and analytics refer to the real-time processing and interpretation of
                    data
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.3}>
                <div>
                  <LinkButton
                    href="/our-services/instantaneous-data-insights-and-analytics"
                    className="btn btn-secondary dark:btn-accent hover:btn-primary btn-md">
                    Read More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>

          <div className="order-1 col-span-12 xl:order-2 xl:col-span-6">
            <div className="flex flex-row items-center justify-center gap-8 xl:justify-start">
              <RevealAnimation delay={0.4} direction="up">
                <figure className="h-auto w-full max-w-[350px] overflow-hidden rounded-[20px] xl:h-[345px]">
                  <Image
                    src={services2Image}
                    alt="services-2"
                    className="h-full w-full object-fill dark:hidden"
                    priority
                  />
                  <Image src={services2DarkImage} alt="services-2" className="hidden w-full dark:block" priority />
                </figure>
              </RevealAnimation>

              <div className="mt-6 space-y-8 xl:mt-12">
                <RevealAnimation delay={0.5}>
                  <figure className="h-auto w-full max-w-[233px] overflow-hidden rounded-[20px] xl:h-[186px]">
                    <Image
                      src={services3Image}
                      alt="services-3"
                      className="h-full w-full object-cover dark:hidden"
                      priority
                    />
                    <Image
                      src={services3DarkImage}
                      alt="services-3"
                      className="hidden size-full object-cover dark:block"
                      priority
                    />
                  </figure>
                </RevealAnimation>

                <div className="flex flex-col space-y-4">
                  <div className="flex -space-x-3.5">
                    <RevealAnimation delay={0.7} direction="right">
                      <Image
                        className="inline-block size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-4 ring-white dark:ring-black"
                        src={avatar1Image}
                        alt="Avatar 1"
                        width={44}
                        height={44}
                      />
                    </RevealAnimation>

                    <RevealAnimation delay={0.8} direction="right">
                      <Image
                        className="hidden size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#FFF_32.92%,#A585FF_91%] ring-4 ring-white sm:inline-block dark:ring-black"
                        src={avatar2Image}
                        alt="Avatar 2"
                        width={44}
                        height={44}
                      />
                    </RevealAnimation>

                    <RevealAnimation delay={0.9} direction="right">
                      <Image
                        className="relative z-0 inline-block size-11 rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] ring-4 ring-white dark:ring-black"
                        src={avatar3Image}
                        alt="Avatar 3"
                        width={44}
                        height={44}
                      />
                    </RevealAnimation>

                    <RevealAnimation delay={1} direction="right">
                      <div className="bg-ns-green text-secondary/80 text-tagline-3 relative z-10 inline-flex size-11 items-center justify-center rounded-full font-medium ring-4 ring-white dark:ring-black">
                        99+
                      </div>
                    </RevealAnimation>
                  </div>

                  <RevealAnimation delay={1.1}>
                    <div>
                      <p className="text-heading-6 text-secondary dark:text-accent font-normal">Trusted by 20k+</p>
                      <p className="text-tagline-2">Customers across the globe</p>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-14 xl:gap-[100px]">
          <div className="col-span-12 xl:col-span-6">
            <div className="relative mx-auto w-full max-w-[595px] xl:mx-0">
              <RevealAnimation delay={0.5} direction="left" offset={100}>
                <figure className="shadow-1 dark:bg-background-6 absolute bottom-10 left-2.5 z-[1] max-h-[101px] min-h-[100px] min-w-[288px] space-y-2 rounded-xl bg-white p-4 xl:-left-12">
                  <figcaption className="flex justify-between gap-2">
                    <span className="text-tagline-1 dark:text-accent font-normal"> Today&apos;s Revenue </span>
                    <span className="text-secondary dark:text-accent flex items-center text-lg leading-[1.5] font-medium">
                      <span className="font-inherit"> $ </span>
                      <NumberAnimation number={53224} speed={2500} interval={140} rooms={5} />
                    </span>
                  </figcaption>
                  <Progress />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.2} direction="up" offset={100}>
                <figure className="mx-auto max-h-[995px] w-full max-w-[413px] overflow-hidden rounded-[20px] xl:mx-0">
                  <Image
                    src={services4Image}
                    alt="services-4"
                    className="size-full object-cover dark:hidden"
                    priority
                  />
                  <Image
                    src={services4DarkImage}
                    alt="services-4"
                    className="hidden size-full object-cover dark:block"
                    priority
                  />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.5} direction="right" offset={100}>
                <figure className="shadow-9 absolute right-0 -bottom-8 z-[1] hidden overflow-hidden rounded-xl sm:block xl:right-20 xl:bottom-10">
                  <Image src={balanceImage} alt="balance" className="h-full w-full dark:hidden" />
                  <Image src={balanceDarkImage} alt="balance" className="hidden h-full w-full dark:block" />
                </figure>
              </RevealAnimation>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-6">
            <div className="text-center xl:text-left">
              <div className="mb-14 space-y-3">
                <RevealAnimation delay={0.1}>
                  <h3 className="mx-auto max-w-[509px] xl:mx-0">Sales strategy and management techniques</h3>
                </RevealAnimation>

                <RevealAnimation delay={0.2}>
                  <p className="mx-auto max-w-[465px] xl:mx-0">
                    Sales strategy and management techniques are essential components for driving business growth and
                    achieving revenue targets.
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation delay={0.3}>
                <div>
                  <LinkButton
                    href="/our-services/sales-strategy-and-management-techniques"
                    className="btn btn-secondary btn-md dark:btn-accent hover:btn-primary">
                    Read More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
