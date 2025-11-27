import hero1 from '@public/images/home-page-27/hero-1.png';
import hero2 from '@public/images/home-page-27/hero-2.png';
import hero3 from '@public/images/home-page-27/hero-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import GradientAnimation from './GradientAnimation';

const Hero = () => {
  return (
    <section className="lg:pt-[230px] pt-[180px] lg:pb-[200px] pb-[100px] bg-white dark:bg-background-5 relative">
      <div className="main-container relative z-10">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-gray-light">Keep an eye on your finances</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h1 className="xl:max-w-[1110px] md:max-w-[900px] sm:max-w-[600px] max-w-[400px] mx-auto leading-[1.3]">
                <span className="hero-text-gradient hero-text-color-2 block">
                  Elevate your property management game with NextSaaS!
                </span>
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="lg:max-w-full md:max-w-[600px] max-w-[400px] mx-auto">
                All-in-one cloud-based software to streamline operations, boost sales, and generate leads effortlessly.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="py-[72px] flex justify-center">
            <LinkButton
              href="/pricing-01"
              className="btn dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-secondary btn-xl">
              Get a free demo
            </LinkButton>
          </div>
        </RevealAnimation>
        <div className="flex justify-center items-end relative z-10 -space-x-28">
          <RevealAnimation delay={0.5} direction="right" offset={100} instant>
            <figure className="lg:max-w-[326px] md:max-w-[250px] max-w-[200px] w-full rounded-[20px] overflow-hidden relative -z-10">
              <Image src={hero3} alt="hero" className="w-full h-full object-cover rounded-[20px]" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2} offset={100} instant>
            <figure className="lg:max-w-[370px] md:max-w-[300px] max-w-[250px] w-full rounded-[30px] overflow-hidden relative z-10 shadow-6">
              <Image src={hero1} alt="hero" className="w-full h-full object-cover" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.5} offset={100} direction="left" instant>
            <figure className="lg:max-w-[326px] md:max-w-[250px] max-w-[200px] w-full rounded-[20px] overflow-hidden relative -z-10">
              <Image src={hero2} alt="hero" className="w-full h-full object-cover rounded-[20px]" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.6} offset={0}>
        <figure className="absolute top-0 left-1/2 -translate-x-1/2 max-w-[1390px] w-full h-full z-0">
          <GradientAnimation />
        </figure>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
