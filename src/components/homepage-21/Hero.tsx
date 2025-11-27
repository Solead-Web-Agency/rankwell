import heroImg from '@public/images/home-page-21/hero-img.png';
import clientLogo10 from '@public/images/icons/client-logo-10.svg';
import clientLogo6 from '@public/images/icons/client-logo-6.svg';
import clientLogo7 from '@public/images/icons/client-logo-7.svg';
import clientLogo8 from '@public/images/icons/client-logo-8.svg';
import clientLogo9 from '@public/images/icons/client-logo-9.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import AvatarGroup from './AvatarGroup';

const clientLogos = [
  { id: 1, src: clientLogo6, alt: 'Client logo 6' },
  { id: 2, src: clientLogo7, alt: 'Client logo 7' },
  { id: 3, src: clientLogo8, alt: 'Client logo 8' },
  { id: 4, src: clientLogo9, alt: 'Client logo 9' },
  { id: 5, src: clientLogo10, alt: 'Client logo 10' },
];

const Hero = () => {
  return (
    <section className="pt-36 lg:pt-[150px] md:pt-[180px]">
      <div className="main-container">
        <div className="flex flex-col md:flex-row justify-start min-[1096px]:justify-center gap-y-16 items-center">
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <div className="space-y-2.5 lg:space-y-4">
                <RevealAnimation delay={0.1}>
                  <h1 className="lg:max-w-[645px]">Master your money with confidence</h1>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="lg:max-w-[465px]">
                    Managing finances can be simple. With NextSaaS, track spending, save, and plan for the future with
                    ease and clarity.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="mt-10 lg:mt-14">
                  <LinkButton
                    href="/pricing-01"
                    className="hero-button btn btn-md md:btn-xl hover:btn-secondary btn-primary dark:btn-accent dark:hover:btn-white-dark w-[90%] md:w-auto">
                    Get started for free
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            <div className="lg:max-w-[277px] w-full">
              <div className="divider border-t border-stroke-2 dark:border-stroke-6 w-0" />
            </div>
            <div className="flex gap-4 items-center justify-center md:justify-start avatar-group-images">
              <AvatarGroup />
              <RevealAnimation delay={0.8}>
                <div>
                  <p className="text-tagline-2 font-medium text-secondary dark:text-accent">Trusted by 20k+</p>
                  <p className="text-tagline-3">Customers Across the globe</p>
                </div>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation delay={0.6} duration={2} useSpring={true} direction="up">
            <figure className="max-w-[300px] md:max-w-[320px] lg:max-w-[400px] 2xl:max-w-[700px] relative -z-0 md:-mt-72 lg:-mt-28 2xl:-mt-36">
              <Image src={heroImg} alt="Finance management app dashboard" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
        </div>
        <div className="pt-10 md:pt-[100px]">
          <div className="main-container">
            <div className="space-y-4 lg:space-y-8">
              <RevealAnimation delay={0.6}>
                <p className="text-heading-5 font-normal text-secondary dark:text-accent text-center">
                  Trusted by industry leaders
                </p>
              </RevealAnimation>
              <RevealAnimation start="top 96%" delay={0.7}>
                <div className="opacity-0">
                  <div className="flex items-center flex-wrap gap-x-8 gap-y-4 justify-center">
                    {clientLogos.map((logo) => (
                      <figure key={logo.id} className="w-[120px] md:w-[201px]">
                        <Image src={logo.src} className="size-full dark:invert" alt={logo.alt} />
                      </figure>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
