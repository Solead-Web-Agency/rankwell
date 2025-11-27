'use client';

import { useParallaxEffect } from '@/hooks/useParallaxEffect';
import { CheckIcon, DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import avatar9 from '@public/images/avatar/avatar-9.png';
import gradient12 from '@public/images/gradient/gradient-12.png';
import heroBottomImage from '@public/images/home-page-18/hero-bottom-image.png';
import heroImageDark from '@public/images/home-page-18/hero-image-dark.png';
import heroImage from '@public/images/home-page-18/hero-image.png';
import heroLeftCursorDark from '@public/images/home-page-18/hero-left-cursor-dark.svg';
import heroLeftCursor from '@public/images/home-page-18/hero-left-cursor.svg';
import misc06Dark from '@public/images/home-page-18/misc-06-dark.png';
import misc06 from '@public/images/home-page-18/misc-06.png';
import badge3 from '@public/images/home-page-7/badge-3.svg';
import badgeDark3 from '@public/images/home-page-7/badge-dark-3.svg';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

const benefits = [
  {
    id: 1,
    text: 'Boost your business with AI.',
  },
  {
    id: 2,
    text: 'Trusted by leading industries worldwide.',
  },
  {
    id: 3,
    text: 'Start your AI journey today.',
  },
];

const experienceList = [
  {
    id: 1,
    text: '8 years in creative direction, design & code',
  },
  {
    id: 2,
    text: 'Collaborated with over 50 brands in tech, fashion, and media',
  },
  {
    id: 3,
    text: 'Enthusiastic about typography, interaction, and minimalism',
  },
];

const Hero = () => {
  const sceneRef = useParallaxEffect();
  return (
    <section
      ref={sceneRef}
      className="pt-[320px] md:pt-[200px] lg:pt-[200px] xl:pt-[260px] pb-16 md:pb-20 lg:pb-[120px] xl:pb-[150px] bg-[url('/images/home-page-18/hero-bg.png')] bg-no-repeat bg-top relative z-0"
      id="scene">
      {/*Hero Title Content*/}
      <div className="main-container flex flex-col items-center space-y-[124px] relative z-10 mb-[100px] lg:mb-[150px] xl:mb-[220px]">
        {/*Hero shape left item*/}
        <div className="absolute -top-[160px] md:-top-[80px] w-[323px] lg:top-[50px] left-5 lg:left-[50px] 2xl:-left-[120px] md:rotate-8 -z-10">
          <RevealAnimation delay={0.9} useSpring offset={100} duration={1.9}>
            <figure
              className="w-[112px] top-0 absolute right-0 parallax-effect"
              data-parallax-value="1.2"
              data-parallax-y="1.2"
              data-parallax-x="1.2">
              <Image src={heroLeftCursor} alt="shape" className="w-full h-full dark:hidden" />
              <Image src={heroLeftCursorDark} alt="shape" className="w-full h-full hidden dark:inline-block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.8} useSpring offset={80} duration={2.9}>
            <div className="w-[256px] absolute top-[60px] lg:top-[160px] xl:top-[60px] left-0 md:left-6 lg:left-0 space-y-4">
              <div
                data-progress-item=""
                data-progress-value={48}
                className="bg-white dark:bg-black p-4 w-full space-y-4 rounded-xl">
                {/* heading  */}
                <div className="flex items-center justify-between">
                  <p className="text-secondary leading-[150%] dark:text-accent">Credit limit</p>
                  <p className="text-lg flex items-center font-medium leading-[150%] text-secondary dark:text-accent">
                    $
                    <NumberAnimation number={80224} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                  </p>
                </div>
                {/* progress bar  */}
                <Progress />
              </div>
              <div className="w-full flex gap-4">
                {/* transfer success  */}
                <div className="shrink-0 flex items-center flex-col bg-secondary dark:bg-background-9 w-[153px] h-24 gap-1 p-4 rounded-xl">
                  <span>
                    <TransferSuccessIcon />
                  </span>
                  <span className="text-white dark:text-white"> Transfer success! </span>
                </div>
                <div className="bg-background-1 dark:bg-secondary p-4 flex items-center justify-center rounded-xl">
                  <Image
                    src={avatar9}
                    alt="shape"
                    className="size-[56px] rounded-full bg-linear-[156deg,_#FFF_32.92%,_#C6F56F_91%]"
                  />
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
        {/*Hero shape right item*/}
        <div className="absolute -top-[200px] md:-top-[80px] w-[323px] lg:top-[50px] right-5 lg:right-[50px] 2xl:-right-[120px] -rotate-8 -z-12">
          <RevealAnimation delay={0.9} useSpring offset={100} duration={1.9}>
            <figure
              className="w-[132px] top-0 absolute left-0 parallax-effect hidden sm:block"
              data-parallax-value="1.2"
              data-parallax-y="1.2"
              data-parallax-x="-1.2">
              <Image src={badge3} alt="shape" className="w-full h-full dark:hidden" />
              <Image src={badgeDark3} alt="shape" className="w-full h-full hidden dark:inline-block" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.9} useSpring offset={50} duration={3.9}>
            <div className="w-[250px] lg:w-[270px] 2xl:w-[288px] absolute top-[60px] lg:top-[150px] xl:top-[60px] sm:right-5 xl:right-0 bg-white dark:bg-black rounded-2xl p-4 lg:p-6 hidden sm:block">
              <div className="text-left">
                <span className="text-tagline-2 font-normal text-secondary dark:text-accent">Total balance</span>
                <h3 className="text-heading-5 flex items-center lg:text-heading-3 font-normal leading-[1.2] mt-2 mb-[30px]">
                  $
                  <NumberAnimation number={45324} speed={2000} interval={200} rooms={5} heightSpaceRatio={2} />
                </h3>
              </div>
              <div className="flex gap-1 lg:gap-3">
                <div className="bg-secondary dark:bg-background-7 rounded-xl p-4 space-y-2 flex-1 text-left">
                  <div className="flex items-center justify-start gap-2 text-tagline-2 text-accent dark:text-accent">
                    Income
                    <span className="bg-ns-green flex items-center justify-center rounded-full size-[18px] p-1">
                      <DownArrowIcon className="w-[8px] h-[9px]" />
                    </span>
                  </div>
                  <div className="text-lg flex items-center font-medium leading-[1.5] text-accent dark:text-accent">
                    $
                    <NumberAnimation number={48000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                  </div>
                </div>
                <div className="bg-background-4 dark:bg-background-5 rounded-xl p-4 space-y-2 flex-1 text-left">
                  <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                    Expenses
                    <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                      <UpArrowIcon className="w-[8px] h-[9px]" />
                    </span>
                  </div>
                  <div className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                    $
                    <NumberAnimation number={2321} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
        <div className="text-left md:text-center max-md:pt-[150px] max-lg:pt-[200px]">
          <RevealAnimation delay={0.2}>
            <h1 className="mb-4">
              Automate smarter. <br className="hidden md:block" />
              Grow faster.
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[650px] mx-auto mb-6">
              &nbsp;Save time and elevate your business with intelligent workflow automation from NextSaaS.
            </p>
          </RevealAnimation>
          <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
            {benefits.map((item, idx) => (
              <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                <li className="flex items-center gap-2.5">
                  <span className="size-[19px] rounded-full bg-secondary dark:bg-accent/20">
                    <CheckIcon className="w-[18px] h-[18px] fill-white dark:fill-accent" />
                  </span>
                  <span className="text-tagline-2 dark:text-accent/60">{item.text}</span>
                </li>
              </RevealAnimation>
            ))}
          </ul>
          <RevealAnimation delay={0.7}>
            <div className="block md:inline-block">
              <LinkButton
                href="/pricing-01"
                className="btn btn-primary hover:btn-white dark:btn-accent btn-xl dark:hover:btn-primary w-[90%] md:w-auto mx-auto"
                aria-label="Start building free">
                Get started
              </LinkButton>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8} instant duration={0.9}>
            <figure className="max-w-[408px] mx-auto mt-20 md:mt-[124px] rounded-[20px] flex justify-center items-center overflow-hidden">
              <Image src={heroImage} alt=" hero" className="inline-block dark:hidden w-full h-full object-cover" />
              <Image src={heroImageDark} alt=" hero" className="hidden dark:inline-block w-full h-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
      </div>
      {/*Hero Bottom item*/}
      <div className="main-container">
        <div className="relative z-0">
          <div className="w-full h-full bg-white dark:bg-background-8 absolute -z-10 overflow-hidden rounded-[20px]">
            <RevealAnimation delay={0.7} useSpring offset={140} direction="right">
              <div className="-z-10 absolute lg:-top-[155%] md:-top-[65%] -top-[75%] -right-[75%] lg:-right-[40%] md:-right-[70%] md:rotate-[60deg] rotate-[10deg] size-[1060px] select-none pointer-events-none">
                <Image src={gradient12} alt="gradient" />
              </div>
            </RevealAnimation>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:flex-1/2 py-16 max-lg:px-5 lg:pl-14">
              <div className="mb-9">
                <RevealAnimation delay={0.2}>
                  <h2 className="mb-3">Innovate for Impact.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="max-w-[530px]">
                    At NextSaaS, we leverage AI and strategic insight to enhance business performance. Partner with us
                    to unlock your potential.
                  </p>
                </RevealAnimation>
              </div>
              <ul className="list-none space-y-2 mb-14">
                {experienceList.map((item, idx) => (
                  <RevealAnimation key={item.id} delay={0.4 + idx * 0.1}>
                    <li className="flex items-center gap-3">
                      <span className="size-[19px] rounded-full bg-secondary dark:bg-accent/20 flex items-center justify-center">
                        <CheckIcon className="w-[18px] h-[18px] fill-white" />
                      </span>
                      <p className="text-secondary dark:text-accent">{item.text}</p>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
              <RevealAnimation delay={0.7}>
                <div className="text-center sm:text-left">
                  <LinkButton
                    href="/about-01"
                    className="btn btn-secondary btn-md hover:btn-primary dark:btn-accent w-[85%] md:w-auto mx-auto">
                    Discover more about us
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="lg:flex-1/2 lg:pe-[42px]">
              <RevealAnimation delay={0.5} direction="right">
                <div className="relative h-full max-lg:max-w-[525px] max-lg:mx-auto">
                  <figure className="absolute max-w-[152px] w-full -rotate-[30deg] -left-5 md:left-0 lg:left-2 top-[100px] md:top-[200px] lg:top-10">
                    <Image src={misc06} alt="shape" className="w-full h-fill dark:hidden" />
                    <Image src={misc06Dark} alt="shape" className="w-full h-full hidden dark:inline-block" />
                  </figure>
                  <figure className="lg:absolute lg:right-0 lg:bottom-0 max-w-[525px] max-lg:mx-auto">
                    <Image src={heroBottomImage} alt="shape" className="w-full h-full" />
                  </figure>
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
