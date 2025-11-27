import hero1 from '@public/images/home-page-15/hero-slide-1.jpg';
import hero2 from '@public/images/home-page-15/hero-slide-2.jpg';
import hero3 from '@public/images/home-page-15/hero-slide-3.jpg';
import hero4 from '@public/images/home-page-15/hero-slide-4.jpg';
import hero5 from '@public/images/home-page-15/hero-slide-5.jpg';
import hero6 from '@public/images/home-page-15/hero-slide-6.jpg';
import hero7 from '@public/images/home-page-15/hero-slide-7.jpg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import LineExpand from './LineExpand';
import ScrollExpand from './ScrollExpand';

const Hero = () => {
  return (
    <section className="lg:pb-[100px] pb-16 lg:pt-[234px] pt-[150px] relative overflow-hidden" id="hero">
      <LineExpand />
      <div className="main-container mb-[100px]">
        <div className="space-y-14 text-center">
          <div className="space-y-4">
            <RevealAnimation delay={0.2}>
              <h1 className="mx-auto max-w-[886px] w-full">Design that tells stories, code that connects.</h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[700px] w-full">
                Stay updated with the latest bitcoin price index, offering real-time data, historical trends, and market
                insights to keep you informed about the cryptocurrency&apos;s value fluctuations.
              </p>
            </RevealAnimation>
          </div>
          <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/about-01"
                  className="btn dark:btn-accent btn-md md:btn-xl btn-secondary hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto">
                  View portfolio
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={60}>
              <li className="w-full sm:w-auto">
                <LinkButton
                  href="/contact-us"
                  className="btn hover:btn-secondary btn-md md:btn-xl btn-white dark:btn-white-dark dark:hover:btn-accent w-[90%] md:w-auto">
                  Book a call
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>
      </div>
      <RevealAnimation delay={0.2} offset={90}>
        <div>
          <div className="flex gap-4 justify-center items-center overflow-y-auto overflow-x-hidden scroll-bar">
            <figure className="rounded-[20px] overflow-hidden max-h-[380px] min-w-[257px] w-full ml-4">
              <Image src={hero1} className="w-full h-full object-cover" alt="hero-slide-1" />
            </figure>
            <figure className="rounded-[20px] overflow-hidden max-h-[380px] min-w-[257px] w-full">
              <Image src={hero2} className="w-full h-full object-cover" alt="hero-slide-2" />
            </figure>
            <figure className="rounded-[20px] overflow-hidden max-h-[380px] min-w-[257px] w-full">
              <Image src={hero3} className="w-full h-full object-cover" alt="hero-slide-3" />
            </figure>
            <ScrollExpand image={hero4} />
            <figure className="rounded-[20px] overflow-hidden max-h-[380px] min-w-[257px] w-full">
              <Image src={hero5} className="w-full h-full object-cover" alt="hero-slide-5" />
            </figure>
            <figure className="rounded-[20px] overflow-hidden max-h-[380px] min-w-[257px] w-full">
              <Image src={hero6} className="w-full h-full object-cover" alt="hero-slide-6" />
            </figure>
            <figure className="rounded-[20px] overflow-hidden max-h-[380px] min-w-[257px] w-full">
              <Image src={hero7} className="w-full h-full object-cover" alt="hero-slide-7" />
            </figure>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
