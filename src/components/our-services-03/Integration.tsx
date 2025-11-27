import aboutDataIntegration1DarkImage from '@public/images/home-page-6/aboaut-data-integration-1-dark.png';
import aboutDataIntegration1Image from '@public/images/home-page-6/about-data-integration-1.png';
import aboutDataIntegration2DarkImage from '@public/images/home-page-6/about-data-integration-2-dark.svg';
import aboutDataIntegration2Image from '@public/images/home-page-6/about-data-integration-2.svg';
import aboutDataIntegration3DarkImage from '@public/images/home-page-6/about-data-integration-3-dark.svg';
import aboutDataIntegration3Image from '@public/images/home-page-6/about-data-integration-3.svg';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Integration = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 pt-[100px] lg:pt-[200px] pb-[100px] overflow-hidden">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:gap-[100px] md:gap-y-20 sm:gap-y-10 gap-y-28 lg:mb-[120px]">
          <div className="max-lg:order-0">
            {/*Integration Images*/}
            <div className="relative z-10 inline-block max-lg:left-1/2 max-lg:-translate-x-1/2">
              <RevealAnimation delay={0.2}>
                <figure className="max-w-[358px] rounded-[20px]">
                  <Image
                    src={aboutDataIntegration1Image}
                    alt="about-data-integration"
                    className="size-full dark:hidden rounded-[20px] object-cover"
                  />
                  <Image
                    src={aboutDataIntegration1DarkImage}
                    alt="about-data-integration"
                    className="size-full hidden dark:inline-block rounded-[20px] object-cover"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.3} direction="right">
                <figure className="absolute max-sm:w-[200px] md:w-[250px] lg:w-[260px] xl:w-auto -top-12 -right-14 sm:-top-[90px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] rounded-2xl overflow-hidden">
                  <Image
                    src={aboutDataIntegration2Image}
                    alt="about-data-integration"
                    className="size-full object-cover block dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration2DarkImage}
                    alt="about-data"
                    className="size-full object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.4} direction="right">
                <figure className="absolute max-sm:w-[130px] bottom-12 -right-14 sm:bottom-[85px] sm:-right-[200px] md:-right-[150px] lg:-right-[150px] xl:-right-[200px] -z-10 rounded-2xl overflow-hidden">
                  <Image
                    src={aboutDataIntegration3Image}
                    alt="about-data-integration"
                    className="size-full object-cover block dark:hidden"
                  />
                  <Image
                    src={aboutDataIntegration3DarkImage}
                    alt="about-data-integration"
                    className="size-full object-cover hidden dark:inline-block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
          {/*Integration Data*/}
          <div className="pt-5 max-lg:order-1">
            <div className="max-w-[592px] mx-auto lg:mx-0 lg:text-left text-center lg:max-w-full">
              <div className="space-y-5 mb-8">
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-green mb-5">Data integrations</span>
                </RevealAnimation>
                <div className="space-y-3 mb-8">
                  <RevealAnimation delay={0.3}>
                    <h2 className="max-w-[592px] mx-auto lg:mx-0">
                      A clear vision is essential for understanding wealth dynamics.
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <p>
                      A clear vision is essential for understanding wealth dynamics because it provides direction,
                      purpose, and clarity in navigating financial growth and sustainability.
                    </p>
                  </RevealAnimation>
                </div>
              </div>
              <ul className="max-sm:flex-col flex sm:items-start items-center gap-6 mb-14">
                <RevealAnimation delay={0.5}>
                  <li className="flex items-center gap-2">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <path
                        d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-secondary font-medium text-tagline-1 dark:text-accent/60">
                      On demand support
                    </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.6}>
                  <li className="flex items-center gap-2">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <path
                        d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-secondary font-medium text-tagline-1 dark:text-accent/60">
                      Information Sharing
                    </span>
                  </li>
                </RevealAnimation>
                <RevealAnimation delay={0.7}>
                  <li className="flex items-center gap-2">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0">
                      <path
                        d="M15.1875 5.0625L7.3125 12.9371L3.375 9"
                        className="stroke-secondary dark:stroke-accent"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-secondary font-medium text-tagline-1 dark:text-accent/60">
                      Cloud Technology
                    </span>
                  </li>
                </RevealAnimation>
              </ul>
              <RevealAnimation delay={0.8}>
                <div>
                  <LinkButton href="/signup-01" className="btn hover:btn-primary btn-xl btn-secondary dark:btn-accent">
                    Start Your Journey
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
