import heroSectionBg from '@public/images/home-page-23/hero-section-bg.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-background-6 relative min-[1921px]:overflow-hidden">
      <RevealAnimation offset={0} delay={0.5}>
        <figure className="absolute top-[50%] sm:top-[38%] md:top-[20%] lg:top-[20%] xl:top-[411px] min-[1440px]:top-[350px] 2xl:top-[194px] min-[2559px]:!top-[0px] z-[1] w-full">
          <Image src={heroSectionBg} alt="-bg" className="w-full h-full object-contain" />
        </figure>
      </RevealAnimation>

      <div className="max-w-[1365px] mx-auto">
        <div className="pt-20 sm:pt-24 md:pt-24 lg:pt-28 xl:pt-[109px] pb-14 sm:pb-20 xl:pb-[94px]">
          <div
            className="bg-[url('/images/home-page-23/hero-container-bg.svg')] dark:bg-[url('/images/home-page-23/hero-container-bg-dark.svg')] bg-no-repeat bg-center h-auto xl:h-[962px]"
            role="presentation">
            <div className="main-container">
              <div className="pt-[71px] space-y-10 md:space-y-14 relative z-[2]">
                {/* heading  */}
                <div className="space-y-4">
                  <RevealAnimation delay={0.1}>
                    <h1 className="max-w-[800px] xl:max-w-[1140px] mx-auto text-center xl:w-full">
                      Build wealth with
                      <span className="text-primary-500"> automated investments.</span>
                    </h1>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <p className="max-w-[600px] xl:max-w-[804px] mx-auto text-center md:w-full">
                      At NextSaaS, we help you invest confidently—offering tools that align with your goals, minimize
                      risk, and maximize long-term growth. Whether saving for retirement or growing your portfolio,
                      we&apos;ve got you covered.
                    </p>
                  </RevealAnimation>
                </div>
                {/* cta btn  */}
                <ul className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
                  <RevealAnimation delay={0.3} direction="left" offset={50}>
                    <li className="w-full sm:w-auto">
                      <LinkButton
                        href="/pricing-01"
                        rel="noopener noreferrer"
                        className="btn btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark btn-md md:btn-xl w-[90%] md:w-auto mx-auto md:mx-0"
                        aria-label="Begin your investment journey">
                        Start Investing
                      </LinkButton>
                    </li>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5} direction="left" offset={50}>
                    <li className="w-full sm:w-auto">
                      <LinkButton
                        href="/tutorial"
                        rel="noopener noreferrer"
                        className="btn hover:btn-secondary dark:hover:btn-accent btn-white dark:btn-transparent btn-md md:btn-xl w-[90%] md:w-auto mx-auto md:mx-0"
                        aria-label="Learn more about our investment platform">
                        Learn more
                      </LinkButton>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
