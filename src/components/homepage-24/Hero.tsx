import heroImageDark from '@public/images/home-page-24/hero-image-dark.png';
import heroImage from '@public/images/home-page-24/hero-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroAvatar from './HeroAvatar';

const Hero = () => {
  return (
    <section className="relative bg-[url('/images/home-page-24/hero-bg.png')] bg-no-repeat bg-top 2xl:pt-[230px] lg:pt-[200px] md:pt-[180px] pt-[150px] pb-[100px]">
      {/* hero line  */}
      <div className="hidden md:block absolute w-full h-full top-0 left-0 before:content-[''] before:absolute before:left-[110px] before:z-10 before:w-px before:h-[100%] before:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] dark:before:bg-[linear-gradient(180deg,#303B49_0%,#748eaf00_100%)] before:top-0 after:content-[''] after:absolute after:right-[110px] after:z-10 after:w-px after:h-[100%] after:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] dark:after:bg-[linear-gradient(180deg,#303B49_0%,#748eaf00_100%)] after:top-0 z-[10] ">
        <div className="absolute w-[100%] h-px bg-stroke-1 dark:bg-stroke-8 top-[106px] before:absolute before:content-[''] before:w-2 before:h-2 before:bg-stroke-1 dark:before:bg-accent before:left-[106px] before:z-20 before:-top-1 before:ring-8 before:ring-white dark:before:ring-background-7 before:rotate-45 after:absolute after:content-[''] after:w-2 after:h-2 after:bg-stroke-1 dark:after:bg-accent after:ring-8 after:ring-white dark:after:ring-background-7 after:right-[106px] after:z-20 after:-top-1 after:rotate-[-45deg] " />
      </div>

      <div className="main-container">
        <div className="relative z-[20]">
          <div className="flex flex-col items-center text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="font-medium mb-4 xl:max-w-[1000px] lg:max-w-[850px] md:max-w-[650px] sm:max-w-[580px] max-w-[450px]">
                Flexible insurance plans for your health, home, car, and future.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="xl:max-w-[850px] lg:max-w-[650px] md:max-w-[500px] sm:max-w-[500px] max-w-[450px] mb-7 md:mb-14">
                At NextSaaS, we help individuals and families secure financial protection with smart, personalized
                insurance coverage—fast, simple, and built around your life.
              </p>
            </RevealAnimation>
            <ul className="flex flex-col sm:flex-row sm:gap-4 mb-7 md:mb-14 w-full items-center justify-center gap-y-4">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-secondary btn-lg md:btn-xl sm:w-auto w-[90%] hover:btn-primary dark:btn-accent">
                    Get a quote
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/our-services-01"
                    className="btn btn-light btn-lg md:btn-xl sm:w-auto w-[90%] hover:btn-secondary dark:btn-white-dark dark:hover:btn-accent">
                    Explore Coverage
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
        {/* Avatars and Trust Indicator */}
        <HeroAvatar />

        {/*Hero Main Image*/}
        <RevealAnimation delay={0.8}>
          <figure className="lp:max-w-[1240px] mx-auto w-full xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[600px] min-[475px]:max-w-[450px] min-[425px]:max-w-[350px] max-w-[320px]">
            <Image src={heroImage} alt="hero-image" className="dark:hidden" />
            <Image src={heroImageDark} alt="hero-image" className="hidden dark:block" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
