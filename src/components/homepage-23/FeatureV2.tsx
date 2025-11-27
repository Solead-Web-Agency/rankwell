import gradient12 from '@public/images/gradient/gradient-12.png';
import heroBottomImage from '@public/images/home-page-18/hero-bottom-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeatureV2 = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[120px] xl:pt-[154px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="relative z-0">
          <div className="w-full h-full bg-white dark:bg-background-8 absolute -z-10 overflow-hidden rounded-[20px]">
            <RevealAnimation delay={0.8} direction="right" start="top 50%">
              <figure className="-z-10 absolute lg:-top-[170%] md:-top-[65%] sm:-top-[85%] -top-[125%] -right-[75%] lg:-right-[40%] md:-right-[70%] md:rotate-[60deg] rotate-[10deg] size-[1060px] select-none pointer-events-none">
                <Image src={gradient12} alt="gradient" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="sm:flex-1/2 lg:py-16 py-10 lg:pl-14 sm:pl-10 sm:px-0 px-6">
              <div className="md:mb-14 sm:mb-10 mb-6 max-w-[420px] lg:max-w-[520px] md:mx-0 mx-auto md:text-left text-center">
                <RevealAnimation delay={0.1}>
                  <h2 className="mb-3">
                    Your financial <span className="text-primary-500">best interests</span>
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-secondary dark:text-accent">
                    Our mission is simple: help you grow your wealth with intelligent, goal-driven investment
                    strategies.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="sm:text-left text-center">
                  <LinkButton
                    href="/our-services-01"
                    className="text-tagline-2 font-medium btn btn-secondary dark:btn-transparent hover:btn-primary dark:hover:btn-primary btn-md w-[90%] md:w-auto mx-auto md:mx-0">
                    Learn More
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="md:flex-1/2 lg:pe-16 2xl:pe-[150px]">
              <div className="relative h-full">
                <RevealAnimation delay={0.4} direction="left" offset={100}>
                  <figure className="max-md:flex max-md:items-center max-md:justify-center md:absolute md:right-0 md:bottom-0 lg:max-w-[425px] md:max-w-[325px] sm:max-w-[400px] max-w-[250px] md:mx-0 mx-auto">
                    <Image src={heroBottomImage} alt="shape" className="w-fill h-fill" />
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

export default FeatureV2;
