/* hero section  */
'use client';
import { useModalContext } from '@/context/ModalContext';
import avatar20 from '@public/images/avatar/avatar-20.png';
import heroBg from '@public/images/home-page-38/hero-bg.png';
import hero from '@public/images/home-page-38/hero.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import HeroDivider from '../homepage-29/HeroDivider';
import HeroBottomOverlay from './HeroBottomOverlay';
import HeroRating from './HeroRating';

const Hero = () => {
  const { videoModal } = useModalContext();
  return (
    <section className="xl:pt-[236px] lg:pt-[180px] pt-[112px] 2xl:pb-15 xl:pb-0 lg:pb-[60px] md:pb-[112px] pb-[80px] relative overflow-hidden">
      <RevealAnimation delay={0.1} offset={50} instant>
        <figure className="absolute inset-0 w-full min-[2550px]:!h-[calc(100%-1px)] h-full">
          <Image src={heroBg} alt="hero bg banner" className="object-cover w-full h-full" />
        </figure>
      </RevealAnimation>
      {/* section overlay for md devices  */}
      <div className="absolute md:hidden size-full bg-linear-to-t from-white from-58% blur-[18px] w-[120%] left-1/2 -translate-x-1/2 to-transparent" />
      <div className="main-container">
        <div className="relative w-full md:space-y-0 space-y-10">
          {/* hero img */}
          <RevealAnimation delay={0.1} offset={50} instant>
            <figure className="lp:!max-w-[1290px] xl:max-w-[1140px] max-w-[900px] mx-auto w-full lp:!h-[925px] lg:h-[580px] md:h-[384px] p-2 bg-accent/40 rounded-[20px] overflow-hidden">
              <Image src={hero} alt="hero" className="object-cover rounded-[16px]" />
            </figure>
          </RevealAnimation>
          {/* hero content  */}
          <div className="md:absolute lp:!max-w-[1290px] xl:max-w-[1140px] max-w-[900px] w-full mx-auto lp:!bottom-[90px] xl:bottom-[66px] lg:bottom-[-9%] bottom-[-25%] md:left-1/2 md:-translate-x-1/2 z-1">
            <div className="xl:space-y-10.5 space-y-8">
              {/* text + btn  */}
              <div className="xl:space-y-14 space-y-7">
                <div className="space-y-3 md:text-left text-center">
                  <RevealAnimation delay={0.2} offset={50} instant>
                    <h1>Your resume, perfected by AI</h1>
                  </RevealAnimation>

                  <RevealAnimation delay={0.3} offset={50} instant>
                    <p className="md:max-w-[612px] max-w-[400px] text-[18px] font-normal leading-[150%] md:text-left text-center">
                      NestSaaS helps you create tailored, keyword-rich resumes that pass ATS filters and impress
                      recruiters—fast, accurate, and stress-free.
                    </p>
                  </RevealAnimation>
                </div>
                {/* btns */}
                <ul className="flex md:flex-row flex-col gap-y-3 md:gap-y-0 items-center justify-start gap-x-4">
                  <RevealAnimation delay={0.4} direction="left" offset={50} instant>
                    <li className="group list-none w-[90%] md:w-auto">
                      <Link
                        href="/login-01"
                        className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-primary-500 group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-background-5 border-stroke-7 text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                          Get Started now
                        </span>
                        <div className="relative overflow-hidden size-6">
                          {/* one  */}
                          <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                          {/* two  */}
                          <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </li>
                  </RevealAnimation>

                  <RevealAnimation delay={0.5} direction="left" offset={50} instant>
                    <li className="group list-none w-[90%] md:w-auto " onClick={videoModal.openModal}>
                      <div
                        className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase bg-[#EAECEB] border-stroke-7 text-secondary group-hover:text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0"
                        aria-label="Watch a demo">
                        <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                          Watch a demo
                        </span>
                        <div className="relative overflow-hidden size-6">
                          {/* one  */}
                          <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="white" />
                              <path d="M5 5H7V7H5V5Z" fill="white" />
                              <path d="M14 8H16V10H14V8Z" fill="white" />
                              <path d="M8 8H10V10H8V8Z" fill="white" />
                              <path d="M17 11H19V13H17V11Z" fill="white" />
                              <path d="M11 11H13V13H11V11Z" fill="white" />
                              <path d="M14 14H16V16H14V14Z" fill="white" />
                              <path d="M8 14H10V16H8V14Z" fill="white" />
                              <path d="M11 17H13V19H11V17Z" fill="white" />
                              <path d="M5 17H7V19H5V17Z" fill="white" />
                            </svg>
                          </span>
                          {/* two  */}
                          <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none">
                              <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                              <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                              <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                              <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                              <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                              <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                              <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                              <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                              <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                              <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </li>
                  </RevealAnimation>
                </ul>
              </div>
              {/* divider  */}
              <HeroDivider className="bg-stroke-1 origin-center hidden lg:block w-0" />
              {/* review image  */}
              <div className="max-w-[676px] w-full xl:ml-auto xl:mr-0 mr-0 ml-0 lg:flex items-center justify-center gap-x-2 hidden">
                <RevealAnimation delay={0.4} direction="right" offset={100}>
                  <figure className="w-[142px] h-[89px] rounded-full overflow-hidden">
                    <Image src={avatar20} alt="hero-image" className="size-full object-cover" />
                  </figure>
                </RevealAnimation>
                <div className="flex items-center justify-center">
                  <RevealAnimation delay={0.5} direction="right" offset={100}>
                    <div className="space-y-2">
                      <blockquote className="max-w-[352px] text-secondary text-heading-6 font-normal leading-[150%] font-inter-tight">
                        “I landed 3 interviews within a week thanks to NextSaaS!”
                      </blockquote>
                      <span className="inline-block text-tagline-2 font-inter-tight font-normal text-secondary/60">
                        – Sarah M.
                      </span>
                    </div>
                  </RevealAnimation>

                  <RevealAnimation delay={0.6} direction="right" offset={100}>
                    <div className="px-4 max-w-[142px] w-full space-y-2 text-start border-l border-l-stroke-1">
                      <HeroRating />
                      <p className="font-inter-tight text-tagline-1 text-secondary w-[100px]">Rated 4.9/5 by users</p>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section overlay for md or upper   */}

      <HeroBottomOverlay />
    </section>
  );
};

Hero.displayName = 'Hero';
export default Hero;
