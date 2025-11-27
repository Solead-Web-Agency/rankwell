'use client';
import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import { DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import heroBadge1 from '@public/images/home-page-7/badge-1.svg';
import heroBadge3 from '@public/images/home-page-7/badge-3.svg';
import heroBadge1Dark from '@public/images/home-page-7/badge-dark-1.svg';
import heroBadge3Dark from '@public/images/home-page-7/badge-dark-3.svg';
import heroVisaCard from '@public/images/home-page-7/visa-card.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section className="mt-3 relative" aria-label="Mortgage Solutions Hero" ref={sceneRef} id="scene">
      <div className="max-w-[1600px] mx-auto">
        <div className="bg-[url('/images/home-page-14/hero-bg.svg')] dark:bg-[url('/images/home-page-14/hero-bg-dark.svg')] md:rounded-t-[20px] bg-cover bg-no-repeat mb-16 md:mb-[100px]">
          <div className="main-container">
            {/* hero heading  */}
            <div className="pt-[140px] sm:pt-[170px] max-lg:pb-20 lg:pt-[176px] pb-[50px] md:pb-[80px] lg:pb-[100px] text-center">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[976px] md:w-full mx-auto mb-4">
                  Smart, simple, and stress-free mortgage solutions.
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="max-w-[719px] md:w-full mx-auto mb-14">
                  Take the hassle out of home financing. With NextSaaS, you get personalized mortgage plans, expert
                  support every step of the way, and lightning-fast approval.
                </p>
              </RevealAnimation>
              {/* hero form  */}
              <RevealAnimation delay={0.4}>
                <div className="flex items-center justify-center hero-form w-[90%] md:w-auto mx-auto">
                  <form className="flex flex-col md:flex-row items-center gap-3 max-w-[500px] w-full">
                    <input
                      aria-label="Email address"
                      type="email"
                      placeholder="Enter your email"
                      required={true}
                      autoComplete="email"
                      className="sm:flex-1 bg-background-1 shadow-1 dark:bg-background-6 px-5 py-3 rounded-full h-12 placeholder:text-secondary/50 placeholder:text-tagline-1 placeholder:font-normal focus:outline-none border border-stroke-3 focus-visible:border-stroke-5/40 max-w-[340px] w-full dark:border-stroke-7 dark:focus-visible:border-stroke-3/20 dark:placeholder:text-accent/60 text-secondary dark:text-accent focus:ring-[0.7px] focus-within:ring-primary-500 font-normal"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg hover:btn-secondary dark:hover:btn-white h-12 w-full md:w-auto">
                      <span>Get a free quote</span>
                    </button>
                  </form>
                </div>
              </RevealAnimation>
            </div>
            {/* hero images  */}
            <div className="flex items-center justify-center relative max-w-[787px] mx-auto">
              {/* yellow badge   */}
              <RevealAnimation delay={0.6}>
                <figure
                  className=" parallax-effect absolute left-[-11px] top-[68px] md:top-[48px] md:left-[28px] lg:top-14 lg:left-14 w-[125px] sm:w-[172px] overflow-hidden hidden md:block"
                  data-parallax-value="1.2"
                  data-parallax-y="1.2"
                  data-parallax-x="1.2">
                  <Image src={heroBadge1} alt="Gold badge icon" className="dark:hidden" />
                  <Image src={heroBadge1Dark} alt="Gold badge icon" className="hidden dark:block" />
                </figure>
              </RevealAnimation>
              {/* credit limit  */}
              <RevealAnimation delay={0.6} direction="left" offset={50} animationType="from">
                <div className="max-w-[240px] md:max-w-[288px] absolute bg-white dark:bg-black rounded-xl p-4 w-full space-y-4 top-[70px] md:top-[128px] left-1 md:left-20 z-30">
                  {/* heading  */}
                  <div className="flex items-center justify-between">
                    <p className="text-secondary leading-[150%] dark:text-accent">Credit limit</p>
                    <p className="text-lg flex items-center font-medium leading-[150%] text-secondary dark:text-accent">
                      $
                      <NumberAnimation
                        number={80224}
                        speed={2000}
                        interval={200}
                        rooms={5}
                        heightSpaceRatio={2.5}></NumberAnimation>
                    </p>
                  </div>
                  {/* progress bar  */}
                  <Progress />
                </div>
              </RevealAnimation>
              {/* transfer success  */}
              <RevealAnimation delay={0.7} instant>
                <div className="flex absolute md:bottom-8 md:left-28 items-center flex-col bg-secondary dark:bg-accent w-[153px] h-24 gap-1 p-4 rounded-xl bottom-[90px] right-[-10px] z-20">
                  <span>
                    <TransferSuccessIcon />
                  </span>
                  <span className="text-white dark:text-black"> Transfer success! </span>
                </div>
              </RevealAnimation>
              {/* visa card  */}
              <RevealAnimation delay={0.8} direction="up" offset={50} useSpring duration={1.9}>
                <figure className="relative z-10 max-w-[280px] w-full rounded-[20px] overflow-hidden">
                  <Image src={heroVisaCard} alt="VISA Card" />
                </figure>
              </RevealAnimation>
              {/* green badge   */}
              <RevealAnimation delay={0.6}>
                <figure
                  className="parallax-effect absolute lg:top-14 md:top-[32px] md:right-[67px] lg:right-24 right-[-8px] top-[68px] w-[100px] md:w-[131px] hidden sm:block"
                  data-parallax-value="1.2"
                  data-parallax-y="1.2"
                  data-parallax-x="-1.2">
                  <Image src={heroBadge3} alt="badge-2" className="dark:hidden" />
                  <Image src={heroBadge3Dark} alt="badge-2" className="hidden dark:block" />
                </figure>
              </RevealAnimation>
              {/* personal load  */}
              <RevealAnimation delay={0.8} instant>
                <div className="flex items-start flex-col absolute md:left-[530px] lg:left-[565px] md:top-[105px] lg:top-[128px] bg-white dark:bg-black md:w-[148px] h-[91px] gap-1 p-4 rounded-2xl w-[120px] left-[-3px] top-[204px] z-10">
                  <h3 className="text-tagline-2 text-secondary dark:text-accent font-normal">Personal load</h3>
                  <p className="text-lg flex items-center gap-0.5 text-secondary dark:text-accent font-medium leading-[150%]">
                    $
                    <NumberAnimation number={40345} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                  </p>
                </div>
              </RevealAnimation>
              {/* total balance  */}
              <RevealAnimation delay={0.9} offset={90} instant>
                <div className="bg-white dark:bg-black rounded-2xl md:p-4 lg:p-6 md:max-w-[250px] lg:max-w-[288px] absolute lg:bottom-[-97px] lg:right-[-60px] md:-right-0.5 md:bottom-[-40px] shadow-lg hidden md:block z-10">
                  <div className="text-left">
                    <span className="text-tagline-2 font-normal text-secondary dark:text-accent">Total balance</span>
                    <h3 className="text-heading-5 flex items-center lg:text-heading-3 font-normal leading-[1.2] mt-2 mb-[30px]">
                      $
                      <NumberAnimation number={45324} speed={2500} interval={300} rooms={5} heightSpaceRatio={2} />
                    </h3>
                  </div>
                  <div className="flex gap-1 lg:gap-3">
                    <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                        <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                          <DownArrowIcon className="size-[8px] dark:fill-background-5" />
                        </span>
                        Income
                      </div>
                      <div className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                        $
                        <NumberAnimation number={48000} speed={2000} interval={170} rooms={5} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                    <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                        <span className="bg-ns-green flex items-center justify-center rounded-full size-[18px] p-1">
                          <UpArrowIcon className="size-[9px] dark:fill-background-5" />
                        </span>
                        Expenses
                      </div>
                      <div className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                        $
                        <NumberAnimation number={2321} speed={2000} interval={170} rooms={4} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
