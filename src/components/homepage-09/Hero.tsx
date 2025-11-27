import heroImg01DarkImage from '@public/images/home-page-9/hero-img-01-dark.png';
import heroImg01Image from '@public/images/home-page-9/hero-img-01.png';
import heroImg02DarkImage from '@public/images/home-page-9/hero-img-02-dark.png';
import heroImg02Image from '@public/images/home-page-9/hero-img-02.png';
import heroImg03DarkImage from '@public/images/home-page-9/hero-img-03-dark.png';
import heroImg03Image from '@public/images/home-page-9/hero-img-03.png';
import heroImg04DarkImage from '@public/images/home-page-9/hero-img-04-dark.png';
import heroImg04Image from '@public/images/home-page-9/hero-img-04.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import AvatarGroup from './AvatarGroup';

const Hero = () => {
  return (
    <section
      className="xl:pt-[230px] pt-[140px] bg-[url('/images/home-page-9/hero-bg.png')] md:pt-[160px] lg:pt-[200px] pb-[120px] lg:pb-[150px] xl:pb-[200px] bg-no-repeat bg-left lg:bg-top-right"
      aria-label="Hero section">
      <div className="main-container">
        <div className="flex 2xl:gap-[100px] flex-col sm:flex-row h-[396px]">
          {/* hero text  */}
          <div className="lg:max-w-[570px] xl:max-w-[595px] md:w-full text-center lg:text-left">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-white mb-5">Keep an eye on your finances</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="mb-4">Cloud solutions for business success</h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="mb-10 md:mb-14 lg:max-w-[440px] xl:max-w-[570px]">
                Empower your business with NextSaaS—your all-in-one cloud-based software designed for performance,
                automation, and growth.
              </p>
            </RevealAnimation>

            {/* hero btns */}
            <ul className="flex items-center flex-col md:flex-row gap-4 mb-9 md:justify-center lg:justify-start">
              <li className="w-full sm:w-auto">
                <RevealAnimation delay={0.3} direction="left" offset={50}>
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-white w-[90%] md:w-auto">
                    Get started
                  </LinkButton>
                </RevealAnimation>
              </li>
              <li className="w-full sm:w-auto">
                <RevealAnimation delay={0.4} direction="left" offset={50}>
                  <LinkButton
                    href="/pricing-01"
                    className="btn btn-white dark:btn-transparent btn-xl hover:btn-primary w-[90%] md:w-auto">
                    14-Days Free Trial
                  </LinkButton>
                </RevealAnimation>
              </li>
            </ul>

            <AvatarGroup />
          </div>

          {/* hero image  */}
          <div className="relative" aria-hidden="true">
            <RevealAnimation delay={0.3} useSpring={true} duration={2}>
              <figure className="absolute z-[1] left-0 top-0 rounded-[20px] overflow-hidden w-[408px] hidden lg:block">
                <Image
                  src={heroImg01Image}
                  alt="Hero img 1"
                  className="size-full object-cover dark:hidden"
                  width={408}
                  height={408}
                  priority
                />
                <Image
                  src={heroImg01DarkImage}
                  alt="Hero img 1"
                  className="size-full object-cover dark:inline-block hidden"
                  width={408}
                  height={408}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.4} useSpring={true} duration={2}>
              <figure className="absolute z-[2] top-[275px] left-0 w-[408px] overflow-hidden rounded-[20px] hidden lg:block">
                <Image
                  src={heroImg02Image}
                  alt="Hero img 2"
                  className="size-full object-cover dark:hidden"
                  width={408}
                  height={408}
                  priority
                />
                <Image
                  src={heroImg02DarkImage}
                  alt="Hero img 2"
                  className="size-full object-cover dark:inline-block hidden"
                  width={408}
                  height={408}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.5} useSpring={true} duration={2}>
              <figure className="relative z-[3] left-[358px] rotate-[-20deg] top-[43px] overflow-hidden w-[273px] hidden lp:block">
                <Image
                  src={heroImg03Image}
                  alt="Hero img 3"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg03DarkImage}
                  alt="Hero img 3"
                  className="size-full object-cover dark:inline-block hidden"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.6} useSpring={true} duration={2}>
              <figure className="relative z-[4] top-[-115px] left-[401px] rotate-[5deg] overflow-hidden w-[273px] shadow-4 hidden lp:block">
                <Image
                  src={heroImg04Image}
                  alt="Hero img 4"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg04DarkImage}
                  alt="Hero img 4"
                  className="size-full object-cover dark:inline-block hidden"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>

            <RevealAnimation delay={0.7} useSpring={true} duration={2}>
              <figure className="relative z-[3] top-[-310px] left-[450px] rotate-[5deg] overflow-hidden w-[273px] shadow-4 hidden lp:block">
                <Image
                  src={heroImg04Image}
                  alt="Hero img 5"
                  className="size-full object-cover dark:hidden"
                  width={273}
                  height={273}
                  priority
                />
                <Image
                  src={heroImg04DarkImage}
                  alt="Hero img 5"
                  className="size-full object-cover dark:inline-block hidden"
                  width={273}
                  height={273}
                  priority
                />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
