import HeroImageBottomDark from '@public/images/home-page-29/hero-image-bottom-dark.png';
import HeroImageBottom from '@public/images/home-page-29/hero-image-bottom.png';
import HeroImageCenterDark from '@public/images/home-page-29/hero-image-center-dark.png';
import HeroImageCenter from '@public/images/home-page-29/hero-image-center.png';
import HeroImageRightDark from '@public/images/home-page-29/hero-image-right-dark.png';
import HeroImageRight from '@public/images/home-page-29/hero-image-right.png';
import HeroImageTopDark from '@public/images/home-page-29/hero-image-top-dark.png';
import HeroImageTop from '@public/images/home-page-29/hero-image-top.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroImages = () => {
  return (
    <div className="relative h-[650px] w-full max-w-[724px] ml-auto z-0">
      <RevealAnimation delay={0.1} offset={100} useSpring={true} duration={2} direction="up">
        <figure className="absolute w-[200px] lg:w-[273px] max-sm:top-[10px] left-[40px] md:top-5 lg:top-0 sm:left-0 z-1 rotate-[8deg]">
          <Image src={HeroImageTop} alt="hero-image" className="rounded-[20px] w-full dark:hidden" />
          <Image src={HeroImageTopDark} alt="hero-image" className="rounded-[20px] w-full hidden dark:block" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.2} offset={100} useSpring={true} duration={2}>
        <figure className="absolute max-w-full w-[350px] lg:w-[370px] xl:w-[408px] left-0 md:left-[10px] lg:left-[100px] xl:left-[135px] top-[150px] -z-1">
          <Image src={HeroImageCenter} alt="hero-image" className="rounded-[20px] w-full dark:hidden" />
          <Image src={HeroImageCenterDark} alt="hero-image" className="rounded-[20px] w-full hidden dark:block" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.3} offset={100} useSpring={true} duration={2} direction="right">
        <figure className="absolute max-w-full w-[150px] md:[250px] xl:w-[280px] right-0 xl:right-[25px] lp:right-[-20px] top-[250px] z-1 rotate-[-15deg] shadow-2 rounded-[20px] overflow-hidden">
          <Image src={HeroImageRight} alt="hero-image" className="w-full dark:hidden" />
          <Image src={HeroImageRightDark} alt="hero-image" className="w-full hidden dark:block" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.4} offset={100} useSpring={true} duration={2} direction="left">
        <figure className="absolute max-w-full w-[600px] md:w-[357px] left-[2px] sm:-left-[45px] bottom-[-20px] sm:-bottom-[60px] z-1">
          <Image src={HeroImageBottom} alt="hero-image" className="rounded-[20px] w-full dark:hidden" />
          <Image src={HeroImageBottomDark} alt="hero-image" className="rounded-[20px] w-full hidden dark:block" />
        </figure>
      </RevealAnimation>
    </div>
  );
};

HeroImages.displayName = 'HeroImages';
export default HeroImages;
