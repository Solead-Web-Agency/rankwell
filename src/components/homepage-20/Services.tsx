import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import services1Dark from '@public/images/home-page-20/services-1-dark.png';
import services1 from '@public/images/home-page-20/services-1.png';
import balanceDark from '@public/images/home-page-4/balance-dark.svg';
import balance from '@public/images/home-page-4/balance.svg';
import services2Dark from '@public/images/home-page-4/services-2-dark.png';
import services2 from '@public/images/home-page-4/services-2.png';
import services3Dark from '@public/images/home-page-4/services-3-dark.png';
import services3 from '@public/images/home-page-4/services-3.png';
import services4Dark from '@public/images/home-page-4/services-4-dark.png';
import services4 from '@public/images/home-page-4/services-4.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';
const Services = () => {
  return (
    <section className="xl:py-[200px] md:py-[100px] py-16 bg-background-2 dark:bg-background-5 space-y-[100px] overflow-hidden">
      <div className="main-container lg:space-y-[100px] md:space-y-[80px] space-y-20 sm:space-y-16">
        <div className="max-w-[650px] mx-auto w-full text-center space-y-3">
          <RevealAnimation delay={0.2}>
            <h2>Manage the full risk lifecycle with ease</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>
              An in-depth overview of cryptocurrency solutions reveals a rapidly evolving ecosystem designed to
              revolutionize traditional financial systems.
            </p>
          </RevealAnimation>
        </div>
        {/* services-1 */}
        <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-y-14 gap-y-6">
          <div className="col-span-12 lg:col-span-6">
            <RevealAnimation delay={0.1} direction="right" offset={100}>
              <figure className="lg:max-w-[595px] max-w-[500px] w-full lg:mx-0 mx-auto">
                <Image src={services1} alt="services-1" className="w-full h-full object-cover dark:hidden" />
                <Image src={services1Dark} alt="services-1" className="w-full h-full object-cover hidden dark:block" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="lg:text-left text-center">
              <div className="sm:space-y-3 space-y-1.5 lg:mb-14 mb-8">
                <RevealAnimation delay={0.2}>
                  <h3 className="max-w-[509px] lg:mx-0 mx-auto">Policy &amp; program management</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p>Centralize governance and automate policy workflows.</p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/our-services/policy-and-program-management"
                    className="btn dark:btn-accent hover:btn-primary btn-secondary btn-md service-button w-[85%] md:w-auto mx-auto">
                    Read More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        {/* services-2 */}
        <div className="grid grid-cols-12 items-center xl:gap-[100px] lg:gap-20 md:gap-y-10 sm:gap-y-5 gap-y-3">
          <div className="col-span-12 lg:col-span-6 lg:order-1 order-2">
            <div className="md:space-y-14 space-y-8 lg:text-left text-center">
              <div className="sm:space-y-3 space-y-1.5">
                <RevealAnimation delay={0.2}>
                  <h3 className="lg:mx-0 mx-auto lg:max-w-[498px] w-full">
                    Business continuity <br className="lg:block hidden" />
                    management
                  </h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="lg:mx-0 mx-auto lg:max-w-[412px]">
                    Ensure operational resilience and minimize disruptions.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/our-services/business-continuity-management"
                    className="btn dark:btn-accent hover:btn-primary btn-secondary btn-md service-button w-[85%] md:w-auto mx-auto">
                    Read More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:order-2 order-1">
            <div className="flex lg:gap-8 gap-5 sm:flex-row flex-col lg:items-start items-center justify-center lg:justify-start">
              <RevealAnimation delay={0.1}>
                <figure className="lg:max-w-[350px] max-w-[250px] w-full rounded-[20px] overflow-hidden">
                  <Image src={services2} alt="services-2" className="w-full h-full object-cover dark:hidden" />
                  <Image
                    src={services2Dark}
                    alt="services-2"
                    className="w-full h-full object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <div className="space-y-8 sm:mt-12 flex sm:flex-col flex-row max-[400px]:flex-col sm:gap-0 max-[400px]:gap-2 gap-5 items-center">
                <RevealAnimation delay={0.2}>
                  <figure className="lg:max-w-[233px] max-w-[200px] w-full rounded-[20px] overflow-hidden">
                    <Image src={services3} alt="services-3" className="w-full h-full object-cover dark:hidden" />
                    <Image
                      src={services3Dark}
                      alt="services-3"
                      className="w-full h-full object-cover hidden dark:block"
                    />
                  </figure>
                </RevealAnimation>
                <div className="flex space-y-4 flex-col">
                  <div className="flex max-[400px]:justify-center sm:-space-x-3.5 -space-x-2">
                    <RevealAnimation delay={0.3}>
                      <figure>
                        <Image
                          className="inline-block sm:size-11 size-7 shrink-0 rounded-full ring-4 ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                          src={avatar1}
                          alt="Avatar 1"
                        />
                      </figure>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                      <figure>
                        <Image
                          src={avatar2}
                          alt="Avatar 2"
                          className="inline-block sm:size-11 size-7 shrink-0 rounded-full ring-4 ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        />
                      </figure>
                    </RevealAnimation>
                    <RevealAnimation delay={0.5}>
                      <figure>
                        <Image
                          src={avatar3}
                          alt="Avatar 3"
                          className="inline-block sm:size-11 size-7 shrink-0 rounded-full ring-4 ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        />
                      </figure>
                    </RevealAnimation>
                    <RevealAnimation delay={0.6}>
                      <div className="inline-flex items-center relative z-10 justify-center sm:size-11 size-7 shrink-0 bg-ns-green rounded-full ring-4 ring-white text-secondary/80 text-tagline-3 font-medium cursor-pointer">
                        99+
                      </div>
                    </RevealAnimation>
                  </div>
                  <RevealAnimation delay={0.7}>
                    <div className="max-[400px]:text-center">
                      <p className="sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                        Trusted by 20k+
                      </p>
                      <p className="text-tagline-2">Customers across the globe</p>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services-3 */}
        <div className="grid grid-cols-12 items-center xl:gap-10 gap-y-14">
          <div className="col-span-12 xl:col-span-6">
            <div className="relative max-w-[595px] mx-auto xl:mx-0 w-full">
              <RevealAnimation delay={0.4} direction="left" offset={100} useSpring duration={2}>
                <figure
                  data-progress-item=""
                  data-progress-value={88}
                  data-progress-duration="2.5"
                  className="absolute bottom-10 xl:-left-12 -left-0 z-[1] min-w-[288px] space-y-2 shadow-1 bg-white dark:bg-background-6 rounded-xl p-4 min-h-[100px] max-h-[101px]">
                  <figcaption className="flex justify-between gap-2">
                    <span className="text-tagline-1 font-normal dark:text-accent"> Today&apos;s Revenue </span>
                    <p className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                      $ <NumberAnimation number={53224} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                    </p>
                  </figcaption>
                  <Progress />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.1}>
                <figure className="max-w-[495px] mx-auto xl:mx-0 w-full max-h-[995px] rounded-[20px] overflow-hidden">
                  <Image src={services4} alt="services-4" className="w-full h-full object-cover dark:hidden" />
                  <Image
                    src={services4Dark}
                    alt="services-4"
                    className="w-full h-full object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="right" offset={100} useSpring duration={2}>
                <figure className="absolute xl:bottom-10 xl:right-20 right-0 rounded-xl overflow-hidden -bottom-8 z-[1] shadow-9 hidden sm:block">
                  <Image src={balance} alt="balance" className="w-full h-full dark:hidden" />
                  <Image src={balanceDark} alt="balance" className="w-full h-full hidden dark:block" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6">
            <div className="text-center services-content-4 xl:text-left">
              <div className="space-y-3 mb-8 lg:mb-14">
                <RevealAnimation delay={0.2}>
                  <h3 className="max-w-[509px] mx-auto xl:mx-0">Cost allocation &amp; calculation</h3>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[465px] mx-auto xl:mx-0">
                    Accurately calculate exposure and allocate risk-related costs.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4}>
                <div>
                  <LinkButton
                    href="/our-services/cost-allocation-and-calculation"
                    className="btn btn-secondary btn-md dark:btn-accent hover:btn-primary w-[85%] md:w-auto mx-auto">
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
