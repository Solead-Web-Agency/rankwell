{
  /* =========================
Hero section
===========================*/
}
import hero1Dark from '@public/images/home-page-8/hero-1-dark.png';
import hero1 from '@public/images/home-page-8/hero-1.png';
import hero2 from '@public/images/home-page-8/hero-2.png';
import hero3Dark from '@public/images/home-page-8/hero-3-dark.png';
import hero3 from '@public/images/home-page-8/hero-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const AnalyticsHero = () => {
  return (
    <section className="relative pb-[100px] pt-[100px]">
      <div className="main-container">
        <div className="flex flex-col items-center justify-center mb-[72px]">
          <div className="w-[95%] max-w-[850px] space-y-4 mx-auto text-center">
            <RevealAnimation delay={0.3}>
              <h2>
                Your business. Your metrics. <br className="hidden md:block" />
                All in one view.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p>
                With NextSaaS, you don’t need a dozen tools to understand what’s working. Our intuitive dashboard
                centralizes your key metrics, helping you monitor performance, spot trends, and make smarter, faster
                decisions.
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
      <RevealAnimation delay={0.5}>
        <div className="w-[98%] max-w-[1540px] mx-auto bg-white dark:bg-background-6 rounded-2xl py-[100px] xl:px-[100px]">
          <div className="lp:max-w-[1416px] xl:max-w-[1280px] lg:max-w-[1140px] max-w-[980px] mx-auto relative">
            <RevealAnimation delay={0.4} direction="left">
              <figure className="lg:max-w-[282px] sm:max-w-[200px] max-w-[120px] rounded-[20px] overflow-hidden absolute z-20 xl:left-0 xl:top-1/2 xl:-translate-y-1/2 lg:top-20 lg:left-20 -top-10 left-10">
                <Image src={hero1} alt="hero" className="w-full h-full object-cover block dark:hidden" />
                <Image src={hero1Dark} alt="hero" className="w-full h-full object-cover hidden dark:block" />
              </figure>
            </RevealAnimation>
            <figure className="rounded-[20px] relative z-10 overflow-hidden max-w-[860px] xl:mx-0 mx-auto xl:translate-x-[36%] lg:px-0 px-10">
              <Image src={hero2} alt="hero" className="w-full h-full object-cover lg:rounded-none rounded-[20px]" />
            </figure>
            <RevealAnimation delay={0.5} direction="right">
              <figure className="lg:max-w-[320px] sm:max-w-[200px] max-w-[150px] rounded-[20px] overflow-hidden absolute z-20 xl:-right-0 xl:top-1/2 xl:-translate-y-1/2 lg:right-20 lg:bottom-5 xl:bottom-auto shadow-3 sm:right-14 sm:bottom-14 right-0 bottom-0">
                <Image src={hero3} alt="hero" className="w-full h-full block dark:hidden" />
                <Image src={hero3Dark} alt="hero" className="w-full h-full hidden dark:block" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default AnalyticsHero;
