import { DownArrowIcon, TransferSuccessIcon, UpArrowIcon } from '@/icons';
import avatar9 from '@public/images/avatar/avatar-9.png';
import heroBgDark from '@public/images/home-page-19/hero-bg-dark.svg';
import heroBg from '@public/images/home-page-19/hero-bg.svg';
import heroImg01Dark from '@public/images/home-page-19/hero-img-01-dark.png';
import heroImg01 from '@public/images/home-page-19/hero-img-01.png';
import heroImg06Dark from '@public/images/home-page-19/hero-img-06-dark.svg';
import heroImg06 from '@public/images/home-page-19/hero-img-06.svg';
import heroImg07Dark from '@public/images/home-page-19/hero-img-07-dark.png';
import heroImg07 from '@public/images/home-page-19/hero-img-07.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Progress from '../homepage-04/Progress';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="pt-[115px] pb-[97px] overflow-hidden">
      <div className="max-w-[1365px] mx-auto">
        <div className="relative">
          {/* hero bg  */}
          <figure className="absolute animate-pulse z-0 max-w-[1365px] -top-5 left-[50%] translate-x-[-50%] w-full h-full overflow-hidden">
            <Image src={heroBg} alt="Decorative background pattern" className="size-full object-cover dark:hidden" />
            <Image
              src={heroBgDark}
              alt="Decorative background pattern"
              className="size-full object-cover hidden dark:inline-block"
            />
          </figure>
          <div className="main-container">
            <div className="flex items-start gap-12 xl:gap-0 flex-col lg:flex-row justify-between pt-4 lg:pt-[200px] pb-[110px]">
              {/* hero content  */}
              <div className="lg:max-w-[490px] xl:max-w-[629px] w-full space-y-7 lg:space-y-14 text-center md:text-left">
                {/* heading text  */}
                <div className="space-y-4">
                  <RevealAnimation delay={0.2}>
                    <h1>Boost your business with smart apps</h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <p>
                      NextSaaS brings you a powerful, all-in-one smart application designed to streamline your
                      operations, empower your team, and accelerate growth—no matter your industry.
                    </p>
                  </RevealAnimation>
                </div>
                {/* heading btn  */}
                <RevealAnimation delay={0.4} className="w-full md:w-auto">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-lg btn-primary hover:btn-secondary dark:hover:btn-accent w-[90%] md:w-auto">
                    <span>Book a strategy call</span>
                  </LinkButton>
                </RevealAnimation>
              </div>
              <div className="relative" aria-hidden="true">
                {/* income   */}
                <RevealAnimation delay={0.3}>
                  <div className="absolute -left-0.5 md:left-[41px] top-[-5px] lg:-top-[110px] lg:-left-[120px] xl:left-[-111px] 2xl:-left-[120px]">
                    <div className="max-w-[103px] bg-white dark:bg-background-8 rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                        <span className="bg-ns-red flex items-center justify-center rounded-full size-[18px] p-1">
                          <DownArrowIcon className="size-[8px] dark:fill-background-5" />
                        </span>
                        Income
                      </div>
                      <div className="text-lg flex items-center font-medium leading-[1.5] dark:text-accent">
                        $
                        <NumberAnimation number={48000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
                {/* avatar img  */}
                <RevealAnimation delay={0.4}>
                  <figure className="absolute max-w-[96px] md:max-w-[119px] lg:max-w-[104px] xl:max-w-[119px] overflow-hidden rounded-xl left-[-5px] top-[117px] lg:top-2.5 lg:left-[-222px] xl:left-[-203px] 2xl:-left-[132px] z-[1] md:left-[23px] xl:top-6 2xl:top-2.5">
                    <div className="bg-white dark:bg-background-6 rounded-xl p-6">
                      <Image
                        className="inline-block size-16 h-auto sm:size-14 rounded-full bg-linear-[156deg,_#FFF_32.92%,_#C6F56F_91%]"
                        src={avatar9}
                        alt="Avatar 1"
                      />
                    </div>
                  </figure>
                </RevealAnimation>
                {/* transfer success  */}
                <RevealAnimation delay={0.6}>
                  <figure className="absolute lg:top-40 md:max-w-[153px] max-w-[153px] top-[250px] left-[-5px] overflow-hidden rounded-xl lg:left-[-223px] xl:left-[-206px] 2xl:-left-[151px] z-[1] md:left-[9px] md:top-[271px]">
                    <div className="flex items-center flex-col bg-secondary dark:bg-background-6 gap-1 p-4 rounded-xl">
                      <span>
                        <TransferSuccessIcon />
                      </span>
                      <span className="text-white dark:text-accent"> Transfer success! </span>
                    </div>
                  </figure>
                </RevealAnimation>
                {/* main img  */}
                <RevealAnimation delay={0.6}>
                  <figure className="p-2.5 bg-white dark:bg-background-9 rounded-xl max-w-[280px] md:max-w-[403px] lg:max-w-[275px] xl:max-w-[408px] 2xl:max-w-[408px] w-full relative left-[30px] md:left-[160px] lg:left-[-109px] xl:left-[-107px] 2xl:left-[-3px] top-[100px] lg:top-[3px]">
                    <Image src={heroImg01} alt="Application dashboard interface" className="rounded-xl dark:hidden" />
                    <Image
                      src={heroImg01Dark}
                      alt="Application dashboard interface"
                      className="rounded-xl hidden dark:block"
                    />
                  </figure>
                </RevealAnimation>
                {/* expenses div  */}
                <RevealAnimation delay={0.4}>
                  <div className="absolute sm:max-w-[333px] max-w-[200px] w-full max-[376px]:top-[-6px] top-[-4px] lg:top-[-111px] xl:top-[-111px] max-[376px]:right-[-43px] right-[-104px] lg:right-[5px] xl:right-[75px] md:top-[-6px] md:right-[-85px]">
                    <div className="bg-white dark:bg-background-8 rounded-xl p-4 space-y-2 flex-1 text-left">
                      <div className="flex items-center justify-start gap-2 text-tagline-2 text-secondary dark:text-accent">
                        <span className="bg-ns-green dark:bg-background-9 flex items-center justify-center rounded-full size-[18px] p-1">
                          <UpArrowIcon />
                        </span>
                        Expenses
                      </div>
                      <div className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                        $ <NumberAnimation number={2321} speed={2000} interval={200} rooms={4} heightSpaceRatio={2.5} />
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
                {/* nearest img  */}
                <RevealAnimation delay={0.5} direction="right">
                  <figure className="hidden md:block absolute shadow-2 lg:top-[-12px] xl:top-[-4px] 2xl:-top-12 lg:right-1.5 xl:right-[76px] 2xl:right-[-53px] max-w-[231px] overflow-hidden rounded-[10px] md:right-[-207px] md:top-[52px]">
                    <Image
                      src={heroImg06}
                      alt="Decorative interface element"
                      className="size-full object-cover dark:hidden"
                    />
                    <Image
                      src={heroImg06Dark}
                      alt="Decorative interface element"
                      className="size-full object-cover hidden dark:block"
                    />
                  </figure>
                </RevealAnimation>
                {/* customers img  */}
                <RevealAnimation delay={0.6} direction="right" offset={80}>
                  <figure className="absolute top-[164px] lg:top-[129px] xl:top-[187px] 2xl:top-[189px] shadow-2 max-[376px]:right-[-67px] right-[-83px] max-w-[222px] w-full overflow-hidden rounded-[10px] md:right-[-247px] md:top-[287px] lg:right-[8px] 2xl:right-[-98px]">
                    <Image
                      src={heroImg07}
                      alt="Decorative interface element"
                      className="size-full object-cover dark:hidden"
                    />
                    <Image
                      src={heroImg07Dark}
                      alt="Decorative interface element"
                      className="size-full object-cover hidden dark:block"
                    />
                  </figure>
                </RevealAnimation>
                {/* credit limit img  */}
                <RevealAnimation delay={0.7} direction="right" offset={120}>
                  <figure className="absolute top-[234px] lg:top-[206px] xl:top-[266px] shadow-2 max-[376px]:right-[-71px] right-[-88px] lg:right-[6px] xl:right-[7px] 2xl:right-[-167px] max-w-[189px] md:max-w-[288px] xl:max-w-[288px] lg:max-w-[225px] w-full md:right-[-313px] md:top-[366px]">
                    <figure className="finance-intro-badge space-y-2 bg-white dark:bg-background-6 p-4 rounded-xl">
                      <figcaption className="flex justify-between gap-2">
                        <span className="text-tagline-1 font-normal dark:text-accent"> Credit limit </span>
                        <span className="text-lg flex items-center font-medium leading-[1.5] text-secondary dark:text-accent">
                          $
                          <NumberAnimation
                            number={53224}
                            speed={2000}
                            interval={200}
                            rooms={5}
                            heightSpaceRatio={2.5}
                          />
                        </span>
                      </figcaption>
                      <Progress />
                    </figure>
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
