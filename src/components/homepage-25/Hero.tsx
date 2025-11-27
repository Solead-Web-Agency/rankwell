import clientLogo1 from '@public/images/icons/client-logo-1.svg';
import clientLogo2 from '@public/images/icons/client-logo-2.svg';
import clientLogo3 from '@public/images/icons/client-logo-3.svg';
import clientLogo4 from '@public/images/icons/client-logo-4.svg';
import clientLogo5 from '@public/images/icons/client-logo-5.svg';
import clientLogoDark1 from '@public/images/icons/client-logo-dark-1.svg';
import clientLogoDark2 from '@public/images/icons/client-logo-dark-2.svg';
import clientLogoDark3 from '@public/images/icons/client-logo-dark-3.svg';
import clientLogoDark4 from '@public/images/icons/client-logo-dark-4.svg';
import clientLogoDark5 from '@public/images/icons/client-logo-dark-5.svg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const clientLogos = [
  { id: 1, light: clientLogo1, dark: clientLogoDark1 },
  { id: 2, light: clientLogo2, dark: clientLogoDark2 },
  { id: 3, light: clientLogo3, dark: clientLogoDark3 },
  { id: 4, light: clientLogo4, dark: clientLogoDark4 },
  { id: 5, light: clientLogo5, dark: clientLogoDark5 },
];

const Hero = () => {
  return (
    <section className="relative bg-[url('/images/home-page-25/hero-banner.png')] h-screen bg-cover object-cover object-top bg-center bg-no-repeat pt-[150px] lg:pt-[200px] pb-[100px] after:absolute after:content-[''] after:z-0 after:w-full after:h-[454px] after:bg-gradient-to-b after:from-[rgba(255, 255, 255, 0.00)] dark:after:from-[rgba(0, 0, 0, 0.00)] after:from-[20.1%] after:to-background-2 dark:after:to-background-8 after:to-[91.31%] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
      <div className="main-container">
        <div className="text-center space-y-2 md:space-y-4 mb-9 lg:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="mb-6 inline-block badge badge-blur-v2">Smart property management software</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-accent dark:text-secondary lg:max-w-5xl lg:mx-auto">
              Simplify property management. boost occupancy.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[806px] lg:mx-auto text-accent/80 dark:text-secondary/80">
              All-in-one platform to manage tenants, automate rent, streamline maintenance, and grow your rental
              business.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="text-center relative z-30">
            <LinkButton
              href="/pricing-01"
              className="btn btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark btn-lg md:btn-xl block md:inline-block w-[90%] md:w-auto mx-auto">
              Request a demo
            </LinkButton>
          </div>
        </RevealAnimation>

        {/* Client Logos */}

        <div className=" absolute bottom-[20px] lg:bottom-[10px] left-1/2 -translate-x-1/2 z-10 lg:!max-w-[740px] overflow-hidden mx-auto before:absolute before:content-[''] before:w-40 before:h-10 before:bg-gradient-to-l before:from-transparent before:to-background-2 dark:before:to-background-8 before:-left-5 before:top-0 before:z-40 after:absolute after:content-[''] after:w-40 after:h-10 after:bg-gradient-to-r after:from-transparent after:to-background-2 dark:after:to-background-8 after:right-0 after:top-0 after:z-20 max-sm:bottom-[-20px]">
          <RevealAnimation delay={0.5} instant={true}>
            <Marquee speed={40} autoFill={true}>
              <div className="flex items-center justify-center gap-8">
                {clientLogos.map((logo) => (
                  <figure key={logo.id} className="min-w-36 max-w-max ml-8">
                    <Image src={logo.light} alt="Client logo" className="lg:w-auto block dark:hidden" />
                    <Image src={logo.dark} alt="Client logo" className="lg:w-auto hidden dark:block" />
                  </figure>
                ))}
              </div>
            </Marquee>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
