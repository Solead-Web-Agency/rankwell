import gradient26 from '@public/images/gradient/gradient-26.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import HeroQR from './HeroQR';

const Hero = () => {
  return (
    <section className="pt-[90px] xl:pb-[100px]">
      <div className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] max-w-[600px] mx-auto overflow-hidden">
        <div className="md:pt-[150px] pt-[100px] pb-[100px] relative z-10 mt-4 rounded-4xl bg-background-4 dark:bg-background-9 sm:border-[10px] border-white dark:border-background-8 overflow-hidden">
          {/* bg gradient img  */}
          <RevealAnimation delay={0.1} offset={200} direction="up" instant>
            <figure className="absolute xl:size-[1434px] sm:size-[1000px] overflow-hidden lg:top-[-584px] xl:right-[-600px] sm:right-[-466px] xl:top-[-900px] sm:top-[-611px] size-[600px] top-[-350px] right-[-300px] pointer-events-none select-none">
              <Image src={gradient26} alt="hero-bg-gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="text-center space-y-5 md:mb-14 sm:mb-10 mb-8">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Fast transactions</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h1 className="xl:max-w-[902px] md:max-w-[600px] sm:max-w-[450px] max-w-[350px] mx-auto">
                  Smart, fast &amp; reliable POS for your business
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="xl:max-w-full sm:max-w-[500px] max-w-[350px] mx-auto">
                  The all-in-one Point of Sale (POS) solution to streamline sales, manage inventory, and grow your
                  business effortlessly.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="flex items-center justify-center md:mb-[100px] mb-14">
            <RevealAnimation delay={0.4}>
              <form className="flex items-center sm:flex-row flex-col gap-3 sm:max-w-[500px] max-w-[300px] w-full">
                <input
                  aria-label="Email address"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="flex-1 bg-background-1 dark:bg-background-6 shadow-1 px-5 py-3 rounded-full h-12 placeholder:text-secondary/50 placeholder:text-tagline-1 placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-primary-500 text-secondary/60 max-w-[340px] w-full border border-stroke-3 dark:border-stroke-7 dark:placeholder:text-accent/60 dark:text-accent font-normal"
                />
                <button
                  type="submit"
                  className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg h-12 sm:w-auto w-full">
                  <span>Get a free quote</span>
                </button>
              </form>
            </RevealAnimation>
          </div>
          <HeroQR />
        </div>
      </div>
    </section>
  );
};

export default Hero;
