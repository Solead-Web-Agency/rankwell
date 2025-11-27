import heroBanner from '@public/images/home-page-36/hero-banner.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-23 max-[1920px]:px-5">
      <div className="bg-background-12 max-w-[1880px] mx-auto relative pt-20 -mb-2 md:pt-30 border overflow-hidden border-background-12 rounded-3xl xl:rounded-4xl">
        <RevealAnimation delay={0.3} direction="up" instant>
          <div className="hidden md:block absolute w-full h-full top-0 left-0 before:content-[''] before:absolute before:left-[7%] 2xl:before:left-[16%] before:z-10 before:w-px before:h-[100%] before:bg-stroke-3 before:top-0 after:content-[''] after:absolute after:right-[7%] 2xl:after:right-[16%] after:z-10 after:w-px after:h-[100%] after:bg-stroke-3 after:top-0 z-10">
            <div className="absolute w-[100%] h-px bg-stroke-3 top-[44%] xl:top-[43%] before:absolute before:content-[''] before:size-3 before:bg-white before:drop-shadow-[0,1px,2px,#AFB9C6] before:left-[6.3%] 2xl:before:left-[15.7%] before:z-20 before:-top-2 before:ring-6 before:ring-stroke-3 before:rounded-full after:absolute after:content-[''] after:size-3 after:bg-white after:ring-6 after:ring-stroke-3 after:right-[6.3%] 2xl:after:right-[15.7%] after:z-20 after:-top-[7px] after:drop-shadow-[0,1px,2px,#AFB9C6] after:rounded-full" />
          </div>
        </RevealAnimation>
        <div className="main-container relative z-30">
          <div className="text-center mb-12 lg:mb-20 xl:mb-33">
            <RevealAnimation delay={0.1}>
              <h1 className="font-medium mb-3 opacity-0">
                Using AI applications to boost <br className="hidden md:block" />
                business success.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="max-w-[750px] mx-auto mb-7 md:mb-14">
                Our startup development services aim to fast-track your path from idea to launch, equipping you with the
                technical skills and strategic insights essential for success.
              </p>
            </RevealAnimation>
            <ul className="flex md:flex-row flex-col gap-y-3 md:gap-y-0 items-center justify-center gap-x-4">
              <RevealAnimation delay={0.4} direction="left" instant offset={50}>
                <li className="group list-none w-[90%] md:w-auto">
                  <Link
                    href="/our-services-01"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Discover
                    </span>
                    <div className="relative overflow-hidden size-6">
                      {/* one  */}
                      <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
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
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" instant offset={50}>
                <li className="group list-none w-[90%] md:w-auto">
                  <Link
                    href="/signup-01"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase bg-background-1 text-secondary group-hover:text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                    <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                      Register
                    </span>
                    <div className="relative overflow-hidden size-6">
                      {/* one  */}
                      <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                          <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                          <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                          <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                          <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                          <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                          <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                          <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                          <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                          <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* banner */}
          <RevealAnimation delay={0.4} direction="up" instant>
            <figure className="max-w-[620px] -mb-3 lg:max-w-[840px] xl:max-w-[1000px] 2xl:max-w-[1016px] min-[1800px]:!max-w-[1166px] mx-auto">
              <Image src={heroBanner} alt="Hero banner" className="w-full h-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
