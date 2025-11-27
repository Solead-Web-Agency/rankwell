import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroLineGradient from './HeroLineGradient';

const Hero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="md:pt-[200px] pt-[150px] bg-background-3 dark:bg-background-7 relative z-10 overflow-hidden">
        <HeroLineGradient />
        <div className="main-container">
          <div>
            <div className="text-center space-y-3 md:space-y-4">
              <RevealAnimation delay={0.2}>
                <h1 className="xl:max-w-[846px] md:max-w-[600px] sm:max-w-[450px] max-w-[350px] mx-auto leading-[1.2]">
                  <span className="hero-text-gradient hero-text-color-1 block">
                    Transform your data into clear insights.
                  </span>
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="md:max-w-[818px] sm:max-w-[600px] max-w-[450px] mx-auto">
                  NextSaaS helps businesses of all sizes visualize, understand, and share data with stunning dashboards,
                  real-time reports, and powerful analytics—without complex setup or code.
                </p>
              </RevealAnimation>
            </div>
            <ul className="flex md:flex-row flex-col items-center justify-center gap-4 md:mt-14 mt-8 md:mb-8 mb-8">
              <RevealAnimation delay={0.4} direction="left">
                <li className="w-full sm:w-auto text-center sm:text-left">
                  <LinkButton
                    href="/our-services-01"
                    className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-lg md:btn-xl md:w-auto w-[90%] mx-auto md:mx-0">
                    Take a product tour
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left">
                <li className="w-full sm:w-auto text-center sm:text-left">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-white dark:btn-white-dark hover:btn-primary btn-lg md:btn-xl md:w-auto w-[90%] mx-auto md:mx-0">
                    Get started now
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
            <div className="flex sm:flex-row flex-col items-center justify-center sm:gap-4 gap-y-3 md:pb-[130px] pb-20">
              <div className="flex -space-x-3.5">
                <RevealAnimation delay={0.6} direction="right">
                  <Image
                    className="inline-block sm:size-12 size-10 rounded-full ring-2 ring-white dark:ring-background-5 bg-ns-yellow"
                    src="/images/avatar/avatar-1.png"
                    alt="Avatar 1"
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.7} direction="right">
                  <Image
                    className="inline-block sm:size-12 size-10 rounded-full ring-2 ring-white dark:ring-background-5 bg-ns-red"
                    src="/images/avatar/avatar-2.png"
                    alt="Avatar 2"
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.8} direction="right">
                  <Image
                    className="inline-block sm:size-12 size-10 rounded-full ring-2 ring-white dark:ring-background-5 bg-ns-green"
                    src="/images/avatar/avatar-3.png"
                    alt="Avatar 3"
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
                <RevealAnimation delay={0.9} direction="right">
                  <div className="inline-flex items-center justify-center sm:size-12 size-10 rounded-full ring-2 ring-white text-secondary/80 bg-background-3 dark:bg-background-9 shrink-0 dark:ring-background-5 dark:text-accent text-tagline-3 font-medium">
                    99+
                  </div>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={1.0} direction="right">
                <div className="sm:text-left text-center">
                  <p className="text-tagline-2 font-medium text-secondary dark:text-accent">Join 36,000+</p>
                  <p className="text-tagline-3">Use NextSaaS for smarter decisions.</p>
                </div>
              </RevealAnimation>
            </div>
            <div>
              <RevealAnimation delay={1.1} instant={true}>
                <figure className="lg:max-w-[1240px] md:max-w-[640px] w-full mx-auto overflow-hidden rounded-t-2xl">
                  <Image
                    src="/images/home-page-32/hero.jpg"
                    alt="Hero"
                    className="dark:hidden w-full"
                    width={1240}
                    height={800}
                  />
                  <Image
                    src="/images/home-page-32/hero-dark.jpg"
                    alt="Hero"
                    className="hidden dark:block w-full"
                    width={1240}
                    height={800}
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;
