'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import { DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import heroAvatar from '@public/images/avatar/avatar-9.png';
import heroPattern from '@public/images/gradient/gradient-16.png';
import heroPattern2 from '@public/images/gradient/gradient-46.png';
import heroBadge1 from '@public/images/home-page-7/badge-1.svg';
import heroBadge2 from '@public/images/home-page-7/badge-2.svg';
import heroBadge3 from '@public/images/home-page-7/badge-3.svg';
import heroBadgeDark1 from '@public/images/home-page-7/badge-dark-1.svg';
import heroBadgeDark2 from '@public/images/home-page-7/badge-dark-2.svg';
import heroBadgeDark3 from '@public/images/home-page-7/badge-dark-3.svg';
import heroVisaCard from '@public/images/home-page-7/visa-card.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section
      className="relative pt-44 lg:pt-[200px] pb-24 lg:pb-[120px]"
      aria-label="Hero section"
      ref={sceneRef}
      id="scene">
      {/* Hero gradient left */}
      <RevealAnimation delay={0.1} direction="up" offset={100} useSpring duration={2}>
        <figure className="absolute top-[9%] lg:top-[15%] -left-[4%] lg:left-[1%] hidden md:block max-w-[204px] w-full select-none pointer-events-none">
          <Image src={heroPattern} alt="Hero gradient img" />
        </figure>
      </RevealAnimation>
      {/* Hero gradient right */}
      <RevealAnimation delay={0.1} direction="up" offset={100} useSpring duration={2}>
        <figure className="absolute top-[5%] -right-3 lg:right-[1%] hidden md:block max-w-[242px] w-full select-none pointer-events-none">
          <Image src={heroPattern2} alt="Hero gradient img" />
        </figure>
      </RevealAnimation>
      <div className="main-container text-center">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-yellow mb-5">Digital payment solution</span>
        </RevealAnimation>
        <RevealAnimation delay={0.2}>
          <h1 className="font-medium mb-4">
            Smart payment solution for
            <br className="hidden md:block" />
            your business
          </h1>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <p className="mb-7 md:mb-14">
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It&apos;s not Latin,
            though it looks like it
          </p>
        </RevealAnimation>
        <ul className="flex flex-col md:flex-row gap-4 mb-7 justify-center md:mb-14 max-md:w-[90%] mx-auto md:mx-0">
          <RevealAnimation delay={0.3} direction="left" offset={50}>
            <li>
              <LinkButton
                href="/contact-us"
                className="btn btn-primary hover:btn-secondary w-[90%] sm:w-auto dark:hover:btn-white btn-lg md:btn-xl">
                Get started
              </LinkButton>
            </li>
          </RevealAnimation>
          <RevealAnimation delay={0.5} direction="left" offset={50}>
            <li>
              <LinkButton
                href="/pricing-01"
                className="btn btn-white hover:btn-primary w-[90%] sm:w-auto dark:btn-transparent btn-lg md:btn-xl">
                Try it for free
              </LinkButton>
            </li>
          </RevealAnimation>
        </ul>
        <div className="flex flex-col md:flex-row gap-y-3 lg:gap-y-10 justify-around items-center 2xl:justify-evenly">
          <article>
            <RevealAnimation delay={0.5}>
              <figure className="parallax-effect" data-parallax-value="1" data-parallax-y="1" data-parallax-x="-1">
                <Image
                  src={heroBadge1}
                  className="mb-6 lg:mb-11 block dark:opacity-0 dark:absolute dark:pointer-events-none"
                  alt="Gold badge icon"
                />
                <Image
                  src={heroBadgeDark1}
                  className="mb-6 lg:mb-11 opacity-0 absolute pointer-events-none dark:opacity-100 dark:relative dark:pointer-events-auto"
                  alt="Gold badge icon"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6} instant>
              <figure className="max-w-[297px] space-y-2 bg-white dark:bg-background-6 rounded-xl p-4 min-h-[100px] max-h-[100px] mb-6">
                <figcaption className="flex justify-between gap-2">
                  <span className="text-tagline-1 font-normal dark:text-accent"> Credit limit </span>
                  <p className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                    <span className="font-inherit"> $ </span>
                    <NumberAnimation number={53224} speed={1500} interval={180} rooms={5} heightSpaceRatio={2.4}>
                      53224
                    </NumberAnimation>
                  </p>
                </figcaption>
                <Progress />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.7} instant>
              <figure className="flex items-center gap-6 mb-6 lg:mb-[58px]">
                <div className="flex items-center flex-col bg-secondary dark:bg-background-6 w-[153px] h-24 gap-1 p-4 rounded-xl">
                  <span>
                    <TransferSuccessIcon />
                  </span>
                  <span className="text-white dark:text-accent"> Transfer success! </span>
                </div>
                <div
                  className="max-w-[119px] min-w-[119px] min-h-[100px] bg-white dark:bg-background-6 rounded-xl p-6"
                  aria-label="User avatar">
                  <Image
                    className="inline-block size-14 rounded-md bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                    src={heroAvatar}
                    alt="Avatar 1"
                  />
                </div>
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.8}>
              <figure
                className="parallax-effect"
                data-parallax-value="-1.5"
                data-parallax-y="-1"
                data-parallax-x="-1.5">
                <Image
                  src={heroBadge2}
                  alt="badge-2"
                  className="justify-self-end block dark:opacity-0 dark:absolute dark:pointer-events-none"
                />
                <Image
                  src={heroBadgeDark2}
                  alt="badge-2"
                  className="justify-self-end opacity-0 absolute pointer-events-none dark:opacity-100 dark:relative dark:pointer-events-auto"
                />
              </figure>
            </RevealAnimation>
          </article>
          <RevealAnimation delay={0.3} instant direction="up">
            <figure
              aria-label="Visa card illustration"
              className="block md:hidden lg:block hero-asset-center max-w-[280px] w-full rounded-[20px] overflow-hidden">
              <Image src={heroVisaCard} alt="VISA Card" />
            </figure>
          </RevealAnimation>
          <article className="space-y-[37px]">
            <RevealAnimation delay={0.4}>
              <figure
                className="parallax-effect items-start"
                data-parallax-value="1.5"
                data-parallax-y="1"
                data-parallax-x="-1.5">
                <Image
                  src={heroBadge3}
                  className="inline-block dark:opacity-0 dark:absolute dark:pointer-events-none"
                  alt="badge-3"
                />
                <Image
                  src={heroBadgeDark3}
                  className="opacity-0 absolute pointer-events-none dark:opacity-100 dark:inline-block dark:pointer-events-auto"
                  alt="badge-3"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.9} instant>
              <figure
                className="flex items-start flex-col bg-secondary dark:bg-background-6 w-[148px] h-[91px] gap-1 p-4 rounded-2xl"
                aria-label="Investment target">
                <h3 className="text-tagline-2 text-accent font-normal">Investment target</h3>
                <h3 className="text-heading-5 flex items-center gap-05 text-ns-green font-normal">
                  <NumberAnimation number={76} speed={2500} interval={180} rooms={2} heightSpaceRatio={2.5}>
                    76
                  </NumberAnimation>
                  %
                </h3>
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={1} instant>
              <figure className="bg-white dark:bg-background-6 rounded-2xl p-6 max-w-[288px] min-w-[288px]">
                <div className="text-left">
                  <span className="text-tagline-2 font-normal text-secondary dark:text-accent">Balance</span>
                  <h3 className="text-[40px] flex items-center font-normal leading-[1.2] mt-2 mb-[30px]">
                    <span className="font-inherit"> $ </span>
                    <NumberAnimation
                      number={45257}
                      speed={1500}
                      interval={180}
                      rooms={5}
                      heightSpaceRatio={2.1}
                      space={23}>
                      45257
                    </NumberAnimation>
                  </h3>
                </div>
                <div className="flex gap-3">
                  <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                    <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                      <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                        <DownArrowIcon className="size-2.5 " />
                      </span>
                      Income
                    </div>
                    <div className="text-lg flex items-center font-medium leading-[1.5] dark:text-accent">
                      <span className="font-inherit"> $ </span>
                      <NumberAnimation number={48000} speed={1500} interval={180} rooms={5} heightSpaceRatio={2.5}>
                        48000
                      </NumberAnimation>
                    </div>
                  </div>
                  <div className="bg-background-4 dark:bg-background-9 rounded-xl p-4 space-y-2 flex-1 text-left">
                    <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                      <span className="bg-ns-green flex items-center justify-center rounded-full size-[18px] p-1">
                        <UpArrowIcon className="size-2.5 " />
                      </span>
                      Expenses
                    </div>
                    <div className="text-lg flex items-center font-medium leading-[1.5] dark:text-accent">
                      <span className="font-inherit"> $ </span>
                      <NumberAnimation number={2321} speed={1500} interval={180} rooms={4} heightSpaceRatio={2.5}>
                        2321
                      </NumberAnimation>
                    </div>
                  </div>
                </div>
              </figure>
            </RevealAnimation>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
