'use client';

import heroShape1 from '@public/images/home-page-2/hero-shape-1.png';
import heroShape2 from '@public/images/home-page-2/hero-shape-2.png';
import heroShape3 from '@public/images/home-page-2/hero-shape-3.png';
import heroShape4 from '@public/images/home-page-2/hero-shape-4.png';
import heroShape5 from '@public/images/home-page-2/hero-shape-5.png';
import heroShape6 from '@public/images/home-page-2/hero-shape-6.png';
import heroShape7 from '@public/images/home-page-2/hero-shape-7.png';
import heroShape8 from '@public/images/home-page-2/hero-shape-8.png';
import Image from 'next/image';
import { Fragment } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const HeroShapes = () => {
  return (
    <Fragment>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="1.8"
          data-parallax-x="1"
          data-parallax-y="0.5"
          className="dark:bg-accent/20 absolute parallax-effect top-[19%] left-[5%] h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] md:top-[10%] md:left-[19%] xl:top-[10%] xl:left-[26%]">
          <Image src={heroShape1} alt="Hero shape 1" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="1.9"
          data-parallax-x="-1"
          data-parallax-y="1"
          className="dark:bg-accent/20 absolute parallax-effect top-[30%] left-[0%] hidden h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] sm:top-[33%] md:top-[14%] md:left-[16%] lg:block xl:top-[26%] xl:left-[23%]">
          <Image src={heroShape2} alt="Hero shape 2" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="1.9"
          data-parallax-x="0.7"
          data-parallax-y="-1"
          className="dark:bg-accent/20 absolute parallax-effect top-[4%] right-[12%] hidden h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] md:top-[9%] md:right-[20%] md:block xl:top-[8%] xl:right-[24%]">
          <Image src={heroShape3} alt="Hero shape 3" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="2.4"
          data-parallax-x="1"
          data-parallax-y="-0.7"
          className="dark:bg-accent/20 absolute parallax-effect top-[10%] right-[7%] h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] md:top-[16%] md:right-[5%] xl:top-[14%] xl:right-[10%]">
          <Image src={heroShape4} alt="Hero shape 4" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="1.5"
          data-parallax-x="-0.8"
          data-parallax-y="1"
          className="dark:bg-accent/20 absolute parallax-effect top-[30%] right-[3%] hidden h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] sm:top-[33%] md:top-[38%] md:right-[12%] md:block xl:top-[37%] xl:right-[14%]">
          <Image src={heroShape5} alt="Hero shape 5" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="2"
          data-parallax-x="1"
          data-parallax-y="0.8"
          className="dark:bg-accent/20 absolute parallax-effect top-[28%] left-[7%] hidden h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] md:top-[27%] md:left-[8%] md:block xl:top-[40%] xl:left-[14%]">
          <Image src={heroShape6} alt="Hero shape 6" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="1.9"
          data-parallax-x="-1"
          data-parallax-y="-1"
          className="dark:bg-accent/20 absolute parallax-effect top-[12%] left-[13%] h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] md:top-[18%] md:left-[5%] xl:top-[17%] xl:left-[10%]">
          <Image src={heroShape7} alt="Hero shape 7" className="h-full w-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.1}>
        <figure
          data-parallax-value="2.5"
          data-parallax-x="0.5"
          data-parallax-y="-1"
          className="dark:bg-accent/20 absolute parallax-effect top-[17%] right-[10%] h-[50px] w-[50px] rounded-full rounded-br-none bg-white p-[3px] md:top-[29%] md:right-[25%] lg:top-[26%] xl:top-[40%] xl:right-[28%]">
          <Image src={heroShape8} alt="Hero shape 8" className="h-full w-full" />
        </figure>
      </RevealAnimation>
    </Fragment>
  );
};

export default HeroShapes;
