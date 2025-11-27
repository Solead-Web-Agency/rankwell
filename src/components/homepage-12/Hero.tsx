import Avatar1 from '@public/images/avatar/avatar-1.png';
import Avatar2 from '@public/images/avatar/avatar-2.png';
import Avatar3 from '@public/images/avatar/avatar-3.png';
import hero1Dark from '@public/images/home-page-12/hero-1-dark.png';
import hero1 from '@public/images/home-page-12/hero-1.png';
import hero2Dark from '@public/images/home-page-12/hero-2-dark.png';
import hero2 from '@public/images/home-page-12/hero-2.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="lg:pb-[160px] pb-[100px] lg:pt-[180px] pt-[140px] overflow-hidden">
      <div className="flex items-center lg:flex-row flex-col lp:gap-[42px] lg:gap-8 gap-y-14 max-w-[1920px] mx-auto">
        <div className="2xl:pl-[320px] lp:pl-[150px] xl:pl-[120px] lg:pl-[80px] xl:space-y-14 lg:space-y-10 space-y-8">
          <div className="space-y-5 lg:text-left text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Turn clicks into customers</span>
            </RevealAnimation>
            <div className="space-y-4">
              <RevealAnimation delay={0.3}>
                <h1 className="lg:max-w-[645px] md:max-w-[500px] max-sm:mx-5 md:mx-0 mx-auto">
                  Automate how you collect and
                  <br />
                  <span className="text-primary-500">qualify leads</span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[595px] sm:max-w-[400px] max-w-[350px] lg:mx-0 mx-auto">
                  Collect leads from multiple channels—websites, ads, social media, events, calls, and more—without
                  missing a single opportunity.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="flex gap-4 items-center lg:justify-start justify-center">
            <div className="flex -space-x-3.5">
              <RevealAnimation delay={0.2} direction="right" offset={50}>
                <figure>
                  <Image
                    className="inline-block size-9 rounded-full ring-2 ring-white bg-ns-yellow"
                    src={Avatar1}
                    alt="Avatar 1"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.3} direction="right" offset={50}>
                <figure>
                  <Image
                    className="inline-block size-9 rounded-full ring-2 ring-white bg-ns-red"
                    src={Avatar2}
                    alt="Avatar 2"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="right" offset={50}>
                <figure>
                  <Image
                    className="inline-block size-9 rounded-full ring-2 ring-white bg-ns-green"
                    src={Avatar3}
                    alt="Avatar 3"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="right" offset={50}>
                <div className="inline-flex cursor-pointer items-center justify-center size-9 rounded-full ring-2 ring-white text-secondary/80 bg-ns-cyan text-tagline-3 font-medium">
                  99+
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.6}>
              <div>
                <p className="text-tagline-2 font-medium text-secondary dark:text-accent">Trusted by 20k+</p>
                <p className="text-tagline-3">Customers Across the globe</p>
              </div>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.7} instant direction="right">
            <div className="lg:text-left text-center">
              <LinkButton
                href="/login-01"
                className="btn hover:btn-primary dark:btn-accent btn-lg sm:btn-xl btn-secondary w-[90%] sm:w-auto">
                Book a demo
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <div>
          <div className="relative 2xl:max-w-[1024px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[500px] min-[425px]:max-w-[350px] max-w-[300px] lg:mx-0 mx-auto w-full 2xl:ml-[120px] xl:ml-[70px] lg:ml-[40px]">
            <RevealAnimation delay={0.8} duration={1} direction="right" offset={80}>
              <figure className="relative z-10">
                <Image src={hero1} className="w-full h-full relative z-10 dark:hidden rounded-2xl" alt="hero" />
                <Image
                  src={hero1Dark}
                  className="w-full h-full relative z-10 hidden dark:block rounded-2xl"
                  alt="hero"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.4} direction="right">
              <figure className="absolute top-[5%] left-[5%] w-full h-full -z-0">
                <Image src={hero2} className="w-full h-full dark:hidden rounded-2xl" alt="hero" />
                <Image src={hero2Dark} className="w-full h-full hidden dark:block rounded-2xl" alt="hero" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
