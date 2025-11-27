import Gradient52 from '@public/images/gradient/gradient-52.png';
import Gradient53 from '@public/images/gradient/gradient-53.png';
import HeroBanner from '@public/images/home-page-37/hero-banner.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const Hero = () => {
  return (
    <section className="pt-46 md:pt-[220px] bg-black relative z-0 overflow-hidden">
      <RevealAnimation delay={0.3} direction="up" offset={100} instant>
        <figure className="absolute top-0 -z-10 left-0">
          <Image src={Gradient52} alt="hero-gradient" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.3} direction="up" offset={100} instant>
        <figure className="absolute top-0 -z-10 right-0">
          <Image src={Gradient53} alt="hero-gradient" />
        </figure>
      </RevealAnimation>
      <div className="main-container relative z-30">
        <div className="text-center mb-16 md:mb-24 lg:mb-40">
          <RevealAnimation delay={0.1}>
            <h1 className="font-medium text-accent mb-3">Smarter living starts here</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[500px] mx-auto mb-7 md:mb-10 lg:mb-14 text-accent/60">
              Discover the next generation of AI-powered gadgets that make life faster, easier, and effortlessly
              connected.
            </p>
          </RevealAnimation>
          <ul className="flex md:flex-row flex-col gap-y-3 md:gap-y-0 items-center justify-center gap-x-4">
            <RevealAnimation delay={0.4} direction="left" offset={50} instant>
              <li className="group list-none w-[90%] md:w-auto">
                <Link
                  href="/our-services-02"
                  className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-secondary border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                  <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                    Explore Products
                  </span>
                  <div className="relative overflow-hidden size-6">
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
            <RevealAnimation delay={0.5} direction="left" offset={50} instant>
              <li className="group list-none w-[90%] md:w-auto">
                <Link
                  href="/signup-02"
                  className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase bg-background-1 border-stroke-7 text-secondary group-hover:text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                  <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                    Get Started Free
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
        <RevealAnimation delay={0.4}>
          <figure className="max-w-[550px] mx-auto rounded-3xl overflow-hidden">
            <Image src={HeroBanner} alt="Hero banner" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
