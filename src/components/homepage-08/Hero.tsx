import hero1Dark from '@public/images/home-page-8/hero-1-dark.png';
import hero1 from '@public/images/home-page-8/hero-1.png';
import hero2 from '@public/images/home-page-8/hero-2.png';
import hero3Dark from '@public/images/home-page-8/hero-3-dark.png';
import hero3 from '@public/images/home-page-8/hero-3.png';
import heroPatternDark from '@public/images/home-page-8/hero-pattern-dark.png';
import heroPattern from '@public/images/home-page-8/hero-pattern.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="relative xl:pt-[230px] xl:pb-[100px] pt-[170px] pb-20">
      {/* hero bg  */}
      <RevealAnimation delay={0.1} offset={0}>
        <figure className="h-[765px] w-full top-[13%] md:top-[11%] lg:top-[10%] xl:top-[13%] lp:!top-[15%] left-0  absolute dark:hidden max-w-[2560px]">
          <Image src={heroPattern} alt="hero" className="w-full h-full " />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.2} offset={0}>
        <figure className="h-[765px] w-full top-[15%] left-0 absolute dark:block hidden">
          <Image src={heroPatternDark} alt="hero" className="w-full h-full" />
        </figure>
      </RevealAnimation>

      <div className="main-container mb-[70px]">
        <div className="flex flex-col items-center justify-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Keep an eye on your finances</span>
          </RevealAnimation>
          <div className="max-w-[822px] mt-5 mb-14 space-y-4 w-full mx-auto text-center">
            <RevealAnimation delay={0.2}>
              <h1>The landscape of commerce is evolving.</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-xl mx-auto">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not
                Latin, though it looks like it
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.4}>
            <div className="w-full text-center">
              <LinkButton
                href="/contact-us"
                className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl w-[90%] md:w-auto">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
      <div className="lp:max-w-[1416px] xl:max-w-[1280px] lg:max-w-[1140px] max-w-[980px] mx-auto relative">
        <RevealAnimation delay={1.2} offset={100} direction="up" useSpring duration={2} instant>
          <figure className="lg:max-w-[282px] sm:max-w-[200px] max-w-[120px] rounded-[20px] overflow-hidden absolute z-20 xl:left-0 xl:top-1/2 xl:-translate-y-1/2 lg:top-20 lg:left-20 -top-10 left-10">
            <Image src={hero1} alt="hero" className="w-full h-full object-cover block dark:hidden" />
            <Image src={hero1Dark} alt="hero" className="w-full h-full object-cover hidden dark:block" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={1} offset={100} instant>
          <figure className="rounded-[20px] relative z-10 overflow-hidden max-w-[860px] xl:mx-0 mx-auto xl:translate-x-[36%] lg:px-0 px-10">
            <Image src={hero2} alt="hero" className="w-full h-full object-cover lg:rounded-none rounded-[20px]" />
          </figure>
        </RevealAnimation>
        <RevealAnimation delay={1.2} offset={100} direction="right" useSpring duration={2} instant>
          <figure className="lg:max-w-[320px] sm:max-w-[200px] max-w-[150px] rounded-[20px] overflow-hidden absolute z-20 xl:-right-7 xl:top-1/2 xl:-translate-y-1/2 lg:right-20 lg:bottom-5 xl:bottom-auto sm:right-14 sm:bottom-14 right-[11%] bottom-0">
            <Image src={hero3} alt="hero" className="w-full h-full block dark:hidden" />
            <Image src={hero3Dark} alt="hero" className="w-full h-full hidden dark:block" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
