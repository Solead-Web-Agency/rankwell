'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import heroDotBg from '@public/images/gradient/hero-dot-bg.png';
import heroImageDark from '@public/images/home-page-13/hero-image-dark.png';
import heroImage from '@public/images/home-page-13/hero-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroShape from './HeroShape';

const Hero = () => {
  const parallax = useParallaxEffect();
  return (
    <section ref={parallax} className="relative bg-white dark:bg-background-9 z-0" id="scene">
      {/* border area */}

      <RevealAnimation delay={0.8} offset={0}>
        <div className="hidden md:block absolute w-full h-full top-5 left-0 before:content-[''] before:absolute before:left-[6%] before:w-[1px] before:h-[90%] before:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] dark:before:bg-[linear-gradient(180deg,_#303B49_0%,_rgba(48,_59,_73,_0.00)_100%)] before:top-0 before:z-0 after:content-[''] after:absolute after:right-[6%] after:-z-10 after:w-[1px] after:h-[90%] after:bg-[linear-gradient(180deg,#ECE8FF_0%,#FAF9FC_100%)] dark:after:bg-[linear-gradient(180deg,_#303B49_0%,_rgba(48,_59,_73,_0.00)_100%)] after:top-0">
          <RevealAnimation delay={0.8} offset={0}>
            <div className="absolute w-[100%] h-[1px] bg-stroke-1 dark:bg-stroke-8 top-[6.5%] before:absolute before:content-[''] before:w-2 before:h-2 before:bg-stroke-1 before:left-[5.8%] before:z-30 before:-top-1 before:ring-8 before:ring-white dark:before:ring-background-9 before:rotate-45 after:absolute after:content-[''] after:w-2 after:h-2 after:bg-stroke-1 after:ring-8 after:ring-white dark:after:ring-background-9 after:right-[5.8%] after:z-30 after:-top-1 after:rotate-[-45deg]" />
          </RevealAnimation>
        </div>
      </RevealAnimation>
      <div className="relative pt-[160px] lg:pt-[230px] pb-[50px] lg:pb-[100px]">
        {/* Background shape*/}
        <HeroShape />
        {/* Content */}
        <div className="main-container flex flex-col items-center text-center z-40 relative">
          <RevealAnimation delay={1} duration={2} useSpring={true} offset={0}>
            <figure className="absolute animate-pulse left-1/2 -translate-x-1/2 -top-20 -z-1">
              <Image src={heroDotBg} alt="Hero background" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Your world, one message away.</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h1 className="font-medium mb-4">
              Engage, support &amp; convert with <br className="hidden md:block" />
              smart messaging
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[625px] mb-7 md:mb-14">
              Deliver real-time, personalized messaging experiences across your website, mobile apps, social media, and
              business communication channels.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="inline-block mb-18 w-full">
              <LinkButton
                href="/login-01"
                className="btn btn-primary btn-lg md:btn-xl hover:btn-secondary w-[90%] md:w-auto dark:hover:btn-accent">
                Start your free trial
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.6}>
          <figure className="max-w-[780px] max-sm:mx-5 mx-auto hero-perspective">
            <Image src={heroImage} alt="hero image" className="w-full rounded-[20px] dark:hidden" />
            <Image src={heroImageDark} alt="hero image" className="w-full rounded-[20px] hidden dark:block" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Hero;
