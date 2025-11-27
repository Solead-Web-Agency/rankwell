import { ClockIcon, MessageIcon, TaskIcon, UserIcon } from '@/icons';
import avatar10 from '@public/images/avatar/avatar-10.png';
import avatar11 from '@public/images/avatar/avatar-11.png';
import avatar9 from '@public/images/avatar/avatar-9.png';
import heroBgPatternDark from '@public/images/home-page-11/hero-bg-pattern-dark.svg';
import heroBgPattern from '@public/images/home-page-11/hero-bg-pattern.svg';
import heroImg from '@public/images/home-page-11/hero-img.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="relative pt-[150px] lg:pt-[220px] pb-[100px] overflow-hidden" aria-label="Hero section">
      <RevealAnimation delay={0.2} duration={0.4} useSpring={true} offset={0}>
        <div className="absolute top-[10%] lg:top-[13%] 2xl:-top-5 z-[1] left-1/2 -translate-x-1/2 w-full h-full">
          <Image src={heroBgPattern} alt="Hero background pattern" className="block dark:hidden w-full" priority />
          <Image src={heroBgPatternDark} alt="Hero background pattern" className="hidden dark:block w-full" priority />
        </div>
      </RevealAnimation>

      <div className="main-container relative z-10">
        <div className="flex flex-col items-center justify-center mb-12 md:mb-[72px]">
          <RevealAnimation delay={0.1}>
            <span className="opacity-0 badge badge-green">Keep an eye on your finances</span>
          </RevealAnimation>

          <div className="max-w-6xl mt-5 mb-10 md:mb-14 space-y-4 w-full mx-auto text-center">
            <RevealAnimation delay={0.2}>
              <h1 className="opacity-0">Transform your email marketing with AI-powered precision</h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="opacity-0 max-w-[652px] mx-auto">
                Supercharge your email marketing and transactional emails with AI-driven automation, unmatched
                deliverability, and real-time analytics.
              </p>
            </RevealAnimation>
          </div>

          <ul className="hero-buttons flex flex-col md:flex-row gap-4 max-md:w-full">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="max-md:w-[90%] md:w-auto max-md: mx-auto">
                <LinkButton
                  href="/login-01"
                  className="btn btn-lg md:btn-xl hover:btn-secondary dark:hover:btn-white btn-primary w-full md:w-auto"
                  aria-label="Get started for free">
                  Get started for free
                </LinkButton>
              </li>
            </RevealAnimation>
            <RevealAnimation delay={0.5} direction="left" offset={50}>
              <li className="max-md:w-[90%] max-md:mx-auto md:w-auto">
                <LinkButton
                  href="/features-01"
                  className="btn btn-lg md:btn-xl hover:btn-primary btn-white dark:btn-white-dark w-full md:w-auto"
                  aria-label="Explore features">
                  Explore features
                </LinkButton>
              </li>
            </RevealAnimation>
          </ul>
        </div>

        {/* Hero Image */}
        <div className="flex items-center relative justify-center sm:gap-8 sm:after:absolute sm:after:content-[''] sm:after:z-40 sm:after:w-[641px] sm:after:h-[504px] dark:after:h-[254px] after:bg-gradient-to-b after:from-[rgba(240,242,246,0.00)] dark:after:from-[rgba(24, 29, 38, 0.00)] after:from-[45.78%] dark:after:from-[25.78%] after:to-[#F4F5F8] dark:after:to-[#181D26] after:to-[87.09%] dark:after:to-[97.09%] after:bottom-0 after:left-1/2 after:-translate-x-1/2">
          <div className="absolute top-[52%] lg:top-[24%] left-[57%] max-sm:-translate-x-1/2 sm:left-[0%]">
            <RevealAnimation animationType="to" direction="down" offset={10} rotation={-9} delay={0.6}>
              <article className="relative opacity-0">
                <div className="min-h-[188px] shadow-4 max-h-[188px] max-w-[250px] md:max-w-[302px] min-w-[250px] md:min-w-[302px] bg-background-1 dark:bg-background-9 rounded-xl border border-dashed border-stroke-1 dark:border-stroke-8 marketing-hero-asset-inner" />
                <div className="space-y-4 absolute inset-0 max-w-[250px] md:max-w-[302px] min-w-[250px] md:min-w-[302px] min-h-[188px] max-h-[188px] bg-background-1 dark:bg-background-6 shadow-4 rounded-xl p-6 -rotate-[10deg] marketing-hero-asset-content">
                  <div>
                    <h2 className="text-xl font-normal leading-[1.5]">E-learning website</h2>
                    <p className="flex items-center gap-1 text-tagline-3">
                      <span aria-hidden="true">
                        <ClockIcon />
                      </span>
                      15 january 2025
                    </p>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="px-4 py-1 rounded-[4px] text-tagline-3 bg-ns-yellow"
                      aria-label="View design category">
                      Design
                    </Link>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-1 " role="list" aria-label="Team members">
                      <Image
                        className="inline-block size-6 object-cover object-center rounded-full ring-[3px] ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar9}
                        alt="Team member 1"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                      <Image
                        className="inline-block size-6 obje rounded-full ring-[3px] ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar10}
                        alt="Team member 2"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                      <Image
                        className="inline-block size-6 obje rounded-full relative z-0 ring-[3px] ring-white bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar11}
                        alt="Team member 3"
                        width={24}
                        height={24}
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="flex items-center gap-1">
                        <span aria-hidden="true">
                          <UserIcon />
                        </span>
                        <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">5</span>
                      </p>
                      <p className="flex items-center gap-1">
                        <span aria-hidden="true">
                          <MessageIcon />
                        </span>
                        <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">7</span>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </RevealAnimation>
          </div>

          <div className="absolute top-[48%] lg:top-[24%] right-[0%] hidden sm:block">
            <RevealAnimation animationType="to" direction="down" offset={10} rotation={9} delay={0.2}>
              <article className="relative opacity-0">
                <div className="min-h-[188px] max-h-[188px] shadow-4 max-w-[250px] md:max-w-[302px] min-w-[250px] md:min-w-[302px] bg-background-1 dark:bg-background-9 rounded-xl border border-dashed border-stroke-1 dark:border-stroke-8 marketing-hero-asset-inner-2" />
                <div className="space-y-4 absolute inset-0 max-w-[250px] md:max-w-[302px] min-w-[250px] md:min-w-[302px] min-h-[188px] max-h-[188px] bg-background-1 dark:bg-background-6 shadow-4 rounded-xl p-4 rotate-[10deg] marketing-hero-asset-content-2">
                  <div>
                    <h2 className="flex items-center gap-1 text-xl font-normal leading-[1.5]">
                      <span
                        className="bg-primary-500 flex justify-center items-center p-1 rounded-full size-5"
                        aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={11} viewBox="0 0 16 11" fill="none">
                          <path
                            d="M1.48332 4.49826L3.93111 10.007L14.1693 1.65801"
                            stroke="white"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Task begin processed
                    </h2>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="px-4 py-1 rounded-[4px] text-tagline-3 bg-ns-green"
                      aria-label="View design category">
                      Design
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-12">
                    <p className="flex items-center gap-1">
                      <span aria-hidden="true">
                        <TaskIcon />
                      </span>
                      <span className="text-tagline-3 text-secondary/60 dark:text-accent/60">40 Task</span>
                    </p>
                    <div>
                      <Link
                        href="#"
                        className="px-2 py-1 rounded-[6px] text-white text-tagline-3 bg-primary-500"
                        aria-label="Add new task">
                        New Tasks Add
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </RevealAnimation>
          </div>

          <RevealAnimation direction="down" offset={20} delay={0.2}>
            <figure className="opacity-0 max-w-[572px] w-full">
              <Image src={heroImg} alt="Hero image showing email marketing dashboard" priority />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
