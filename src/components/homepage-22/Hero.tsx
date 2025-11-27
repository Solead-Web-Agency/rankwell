import { CheckIcon } from '@/icons';
import HeroImageDark from '@public/images/home-page-22/hero-dark.jpg';
import HeroImage from '@public/images/home-page-22/hero.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const heroList = [
  {
    id: 1,
    title: 'Free installation',
  },
  {
    id: 2,
    title: 'App version 3.9',
  },
  {
    id: 3,
    title: '4.4 rated by 1,300,000+ customers',
  },
];

const Hero = () => {
  return (
    <section className="relative pt-36 lg:pt-[150px] md:pt-[180px] pb-12 sm:pb-0" aria-label="Hero section">
      <div className="main-container md:mb-[70px] mb-10">
        <div className="text-center md:space-y-14 space-y-8">
          <div className="space-y-4 relative z-20">
            <RevealAnimation delay={0.1}>
              <h1 className="text-center max-w-[700px] mx-auto">Mobile device management software</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="lg:max-w-[818px] md:max-w-[618px] sm:max-w-[518px] max-w-[450px] w-full mx-auto">
                NextSaaS empowers organizations to manage their mobile fleet with confidence. From security policies to
                remote configurations—manage every device without touching it.
              </p>
            </RevealAnimation>
            <ul className="flex items-center lg:gap-9 sm:gap-6 gap-4 justify-center flex-wrap">
              {heroList.map((item, index) => (
                <RevealAnimation delay={0.3 + index * 0.1} key={item.id}>
                  <li className="flex items-center gap-1.5">
                    <span className="size-[18px] rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                      <CheckIcon />
                    </span>
                    <span className="text-secondary/60 text-tagline-2 dark:text-accent/60">{item.title}</span>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
          <ul className="relative z-20 flex items-center justify-center sm:flex-row flex-col sm:gap-4 gap-y-5">
            <RevealAnimation delay={0.6} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/case-study"
                  className="btn btn-primary btn-md md:btn-xl hover:btn-secondary dark:hover:btn-accent md:w-auto w-[90%]"
                  aria-label="Get started with NextSaaS">
                  Take a product tour
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.8} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/contact-us"
                  className="btn btn-secondary btn-md md:btn-xl hover:btn-primary dark:btn-accent md:w-auto w-[90%]"
                  aria-label="Get started with NextSaaS">
                  Start free trial
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
      <RevealAnimation delay={0.9} duration={1.1}>
        <div className="lp:max-w-[1290px] xl:max-w-[1140px] lg:max-w-[940px] md:max-w-[640px] sm:max-w-[500px] max-w-[420px] max-[500px]:max-w-[320px] w-full mx-auto block dark:hidden">
          <figure className="w-full rounded-xl md:rounded-[20px] overflow-hidden xl:-mb-7 md:-mb-6 min-[500px]:mb-10">
            <Image
              src={HeroImage}
              alt="NextSaaS mobile device management software"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </RevealAnimation>
      <RevealAnimation delay={0.9} duration={1.1}>
        <div className="lp:max-w-[1290px] xl:max-w-[1140px] lg:max-w-[940px] md:max-w-[640px] sm:max-w-[500px] max-w-[420px] max-[500px]:max-w-[320px] w-full mx-auto hidden dark:block">
          <figure className="w-full rounded-xl md:rounded-[20px] overflow-hidden xl:-mb-7 md:-mb-6 min-[500px]:-mb-10">
            <Image
              src={HeroImageDark}
              alt="NextSaaS mobile device management software"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
