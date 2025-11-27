import heroShape1 from '@public/images/home-page-2/hero-shape-1.png';
import heroShape2 from '@public/images/home-page-2/hero-shape-2.png';
import heroShape3 from '@public/images/home-page-2/hero-shape-3.png';
import heroShape4 from '@public/images/home-page-2/hero-shape-4.png';
import heroShape5 from '@public/images/home-page-2/hero-shape-5.png';
import heroShape6 from '@public/images/home-page-2/hero-shape-6.png';
import heroShape7 from '@public/images/home-page-2/hero-shape-7.png';
import heroShape8 from '@public/images/home-page-2/hero-shape-8.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const HeroShape = () => {
  return (
    <>
      <RevealAnimation delay={0.1}>
        <figure
          className="w-[50px] h-[50px] rounded-full absolute left-[8%] top-[14%] md:left-[19%] md:top-[22%] xl:left-[19%] xl:top-[14%] -z-10 rounded-br-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="1.8"
          data-parallax-x={1}
          data-parallax-y="0.5">
          <Image src={heroShape1} alt="Hero shape 1" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.2}>
        <figure
          className="w-[50px] hidden md:inline-block h-[50px] rounded-full absolute left-[0%] top-[50%] md:left-[16%] md:top-[34%] xl:left-[22%] xl:top-[41%] -z-10 rounded-br-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="2.2"
          data-parallax-x={-1}
          data-parallax-y={1}>
          <Image src={heroShape2} alt="Hero shape 2" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <figure
          className="w-[50px] hidden md:inline-block h-[50px] rounded-full absolute right-[1%] top-[34%] md:right-[4%] md:top-[43%] xl:right-[22%] xl:top-[12%] -z-10 rounded-bl-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="1.4"
          data-parallax-x="0.7"
          data-parallax-y={-1}>
          <Image src={heroShape3} alt="Hero shape 3" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.4}>
        <figure
          className="w-[50px] h-[50px] rounded-full absolute right-[4%] top-[20%] md:right-[20%] md:top-[22%] xl:right-[9%] xl:top-[22%] -z-10 rounded-bl-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="1.9"
          data-parallax-x={1}
          data-parallax-y="-0.7">
          <Image src={heroShape4} alt="Hero shape 4" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.5}>
        <figure
          className="w-[50px] hidden md:inline-block h-[50px] rounded-full absolute right-[3%] md:right-[10%] top-[49%] md:top-[34%] xl:right-[11%] xl:top-[45%] -z-10 rounded-bl-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="1.6"
          data-parallax-x="-0.8"
          data-parallax-y={1}>
          <Image src={heroShape5} alt="Hero shape 5" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.6}>
        <figure
          className="w-[50px] h-[50px] rounded-full absolute left-[1%] top-[20%] md:left-[8%] md:top-[18%] xl:left-[18%] xl:top-[57%] -z-10 rounded-br-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="1.7"
          data-parallax-x={1}
          data-parallax-y="0.8">
          <Image src={heroShape6} alt="Hero shape 6" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.7}>
        <figure
          className="w-[50px] hidden md:inline-block h-[50px] rounded-full absolute left-[0%] top-[32%] md:left-[3%] md:top-[42%] xl:left-[8%] xl:top-[29%] -z-10 rounded-br-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="1.5"
          data-parallax-x={-1}
          data-parallax-y={-1}>
          <Image src={heroShape7} alt="Hero shape 7" className="size-11 rounded-full" />
        </figure>
      </RevealAnimation>
      <RevealAnimation delay={0.8}>
        <figure
          className="w-[50px] h-[50px] rounded-full absolute right-[10%] top-[13%] md:right-[8%] md:top-[18%] xl:right-[18%] xl:top-[57%] -z-10 rounded-bl-none bg-background-4 dark:bg-accent/20 p-[3px] parallax-effect"
          data-parallax-value="1.3"
          data-parallax-x="0.5"
          data-parallax-y={-1}>
          <Image src={heroShape8} alt="Hero shape 8" className="w-full h-full" />
        </figure>
      </RevealAnimation>
    </>
  );
};

export default HeroShape;
