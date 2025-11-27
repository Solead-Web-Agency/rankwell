import avatar1 from '@public/images/avatar/avatar-1.png';
import avatar2 from '@public/images/avatar/avatar-2.png';
import avatar3 from '@public/images/avatar/avatar-3.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface AvatarData {
  id: number;
  src: StaticImageData;
  alt: string;
}

const avatarData: AvatarData[] = [
  {
    id: 1,
    src: avatar1,
    alt: 'Avatar 1',
  },
  {
    id: 2,
    src: avatar2,
    alt: 'Avatar 2',
  },
  {
    id: 3,
    src: avatar3,
    alt: 'Avatar 3',
  },
];

const Hero = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="relative pt-[200px] 2xl:pt-[280px] pb-[100px] bg-[url('/images/home-page-33/hero-bg.png')] bg-no-repeat bg-center bg-cover z-10">
        {/* dot bg  */}
        <figure className="absolute left-1/2 -translate-x-1/2 bottom-0 h-full w-full max-w-[1362px] -z-10">
          <Image
            src="/images/home-page-33/hero-dot.svg"
            alt="Hero shape"
            className="w-full h-full"
            width={1362}
            height={800}
          />
        </figure>
        <div className="main-container z-10">
          <div className="flex flex-col items-center text-center mb-[70p]">
            <RevealAnimation delay={0.1}>
              <h1 className="text-secondary font-medium mb-4 max-w-[1000px]">
                Fuel your growth with data-driven digital marketing
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/60 max-w-[850px] mb-7 md:mb-14">
                Over 15 years of transforming traffic into profit through SEO, SEM, and conversion-focused campaigns.
              </p>
            </RevealAnimation>
            <ul className="flex flex-col md:flex-row gap-4 mb-7 md:mb-14 w-[90%] md:w-auto">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-secondary btn-xl dark:btn-accent w-[90%] sm:w-auto hover:btn-white dark:hover:btn-white-dark">
                    Get free marketing audit
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/our-services-01"
                    className="btn hover:btn-secondary dark:btn-dark btn-white border-0 btn-xl dark:bg-accent/20 dark:text-secondary w-[90%] sm:w-auto">
                    Explore our work
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* Avatars and Trust Indicator */}
          <div className="flex items-center justify-center gap-x-4 mb-[100px]">
            <div className="flex -space-x-3.5">
              {avatarData.map((avatar, index) => (
                <RevealAnimation key={avatar.id} delay={0.5 + index * 0.1} direction="right" offset={50}>
                  <Image
                    className="inline-block size-12 rounded-full ring-2 ring-white dark:ring-black bg-[#98AAC3]"
                    src={avatar.src}
                    alt={avatar.alt}
                    width={48}
                    height={48}
                  />
                </RevealAnimation>
              ))}
              <RevealAnimation delay={0.8} direction="right" offset={50}>
                <div className="inline-flex items-center justify-center size-12 rounded-full ring-2 ring-white dark:ring-black text-secondary/80 bg-[#98AAC3] text-tagline-3 font-medium">
                  99+
                </div>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.9} direction="right" offset={50}>
              <div>
                <p className="font-medium block text-left text-secondary text-tagline-2">
                  Trusted by over 300 clients.
                </p>
                <p className="text-secondary/60 text-tagline-3 max-w-[172px]">
                  Your brand&apos;s success will be our next case study.
                </p>
              </div>
            </RevealAnimation>
          </div>
          {/* client logos  */}
          <RevealAnimation delay={1} instant={true}>
            <div className="flex items-center flex-wrap md:flex-nowrap justify-center gap-8 md:gap-y-0 md:gap-x-8">
              <figure className="lg:min-w-36 md:ml-8">
                <Image
                  src="/images/icons/client-logo-1-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-1-dark.svg"
                  alt="Client logo"
                  className="lg:w-auto hidden dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-2-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-2-dark.svg"
                  alt="Client logo"
                  className="lg:w-auto hidden dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-3-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-3-dark.svg"
                  alt="Client logo"
                  className="lg:w-auto hidden dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-4-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-4-dark.svg"
                  alt="Client logo"
                  className="lg:w-auto hidden dark:block"
                  width={144}
                  height={40}
                />
              </figure>
              <figure className="lg:min-w-36">
                <Image
                  src="/images/icons/client-logo-5-white.svg"
                  alt="Client logo"
                  className="lg:w-auto dark:hidden"
                  width={144}
                  height={40}
                />
                <Image
                  src="/images/icons/client-logo-5-dark.svg"
                  alt="Client logo"
                  className="lg:w-auto hidden dark:block"
                  width={144}
                  height={40}
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Hero;
