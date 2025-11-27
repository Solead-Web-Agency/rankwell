import { StarIcon } from '@/icons';
import { cn } from '@/utils/cn';
import avatar2 from '@public/images/avatar/avatar-2.png';
import gradient6 from '@public/images/gradient/gradient-6.png';
import heroChart from '@public/images/home-page-10/hero-chart.svg';
import heroDark from '@public/images/home-page-10/hero-dark.svg';
import hero from '@public/images/home-page-10/hero.svg';
import arrowUpRightLight from '@public/images/icons/arrow-up-right-light.svg';
import arrowUpRight from '@public/images/icons/arrow-up-right.svg';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import { clientLogos } from '../homepage-08/Clients';
import LinkButton from '../ui/button/LinkButton';

const Hero = () => {
  return (
    <section className="sm:py-[100px] py-[60px]">
      <div className="relative overflow-hidden 2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] max-w-[600px] mx-auto 2xl:px-0 px-6 w-full sm:pt-[150px] pt-[120px] sm:pb-[100px] pb-[50px] rounded-4xl sm:border border-stroke-1 sm:bg-background-2 sm:dark:bg-background-5 dark:border-stroke-5 lg:space-y-[70px] space-y-10">
        <RevealAnimation delay={0.3} direction="up">
          <div className="absolute -top-[29%] sm:-top-[50%] left-[7%] sm:-left-[30%] -rotate-[326deg] w-full h-full -z-0 pointer-events-none select-none">
            <Image src={gradient6} alt="gradient" />
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.3} direction="up">
          <div className="absolute -top-[65%] -right-[57%] w-full -rotate-[75deg] h-full -z-0 pointer-events-none select-none">
            <Image src={gradient6} alt="gradient" className="rotate-180" />
          </div>
        </RevealAnimation>
        <div className="relative z-10">
          <div className="space-y-5 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Keep an eye on your finances</span>
            </RevealAnimation>
            <div className="space-y-4 lg:max-w-[690px] sm:max-w-[500px] max-w-[400px] mx-auto">
              <RevealAnimation delay={0.2}>
                <h1>Cyber security for a safer tomorrow</h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p>
                  Experience AI-powered cybersecurity designed for a safer tomorrow, delivering advanced protection
                  against modern cyber threats with unmatched precision.
                </p>
              </RevealAnimation>
            </div>
            <ul className="flex sm:flex-row flex-col items-center justify-center gap-4 mt-10 lg:mt-14">
              <RevealAnimation delay={0.4} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-primary btn-xl hover:btn-secondary dark:hover:btn-white sm:w-auto w-[90%]">
                    Request business call
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6} direction="left" offset={50}>
                <li className="w-full sm:w-auto">
                  <LinkButton
                    href="/pricing-01"
                    className="btn hover:btn-primary dark:btn-transparent btn-white btn-xl sm:w-auto w-[90%]">
                    14-Days free trial
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
        </div>
        <div className="relative z-10">
          <div className="main-container">
            <div className="flex sm:flex-row flex-col items-center 2xl:gap-10 lg:gap-8 gap-5">
              <div className="space-y-5 2xl:max-w-[389px] sm:max-w-[350px] max-w-full sm:w-full min-[550px]:w-[80%] w-full">
                <RevealAnimation delay={0.7} duration={2} useSpring={true} instant={true}>
                  <figure className="flex items-center gap-4 justify-center bg-white dark:bg-background-8 dark:border-stroke-6 2xl:px-8 px-6 2xl:py-[22px] py-5 rounded-full border border-stroke-4">
                    <div className="space-y-1">
                      <div className="2xl:size-16 xl:size-14 size-12 mx-auto flex items-center justify-center rounded-full bg-ns-green">
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                          <path
                            d="M5 13.3333V6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H26C26.2652 5 26.5196 5.10536 26.7071 5.29289C26.8946 5.48043 27 5.73478 27 6V13.3333C27 23.8353 18.0868 27.3146 16.307 27.9047C16.1081 27.9731 15.8919 27.9731 15.693 27.9047C13.9133 27.3146 5 23.8353 5 13.3333Z"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-secondary dark:text-accent font-normal xl:text-tagline-2 text-tagline-3 text-center xl:block sm:hidden min-[407px]:block hidden">
                        Data protection
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="2xl:size-16 xl:size-14 size-12 mx-auto flex items-center justify-center rounded-full bg-ns-cyan">
                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" fill="none">
                          <path
                            d="M21.9996 16C22.0045 19.9099 21.2429 23.7828 19.7578 27.3997"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20.4694 11.9996C19.6592 11.094 18.5932 10.4557 17.4124 10.1692C16.2315 9.88267 14.9915 9.96143 13.8564 10.3951C12.7213 10.8287 11.7446 11.5967 11.0555 12.5976C10.3665 13.5984 9.99752 14.7849 9.99751 16C10.0022 19.0494 9.22865 22.0496 7.75 24.7165"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 4.68285C13.8103 4.04483 15.7471 3.85003 17.6481 4.1148C19.5492 4.37956 21.3591 5.09617 22.9261 6.20456C24.4932 7.31295 25.7717 8.78082 26.6545 10.4852C27.5373 12.1895 27.9987 14.0806 28.0001 16C28.0017 18.6916 27.7025 21.3749 27.108 23.9999"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2.91406 21.003C3.63335 19.4344 4.00455 17.7287 4.00215 16.003C4.00024 14.3143 4.35565 12.6443 5.04504 11.1028C5.73443 9.56123 6.74219 8.18298 8.00212 7.05859"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.8207 26C13.5671 26.5524 13.2936 27.0931 13 27.6223"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.9983 16C15.9998 18.0239 15.7457 20.0398 15.2422 22"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-secondary dark:text-accent font-normal xl:text-tagline-2 text-tagline-3 text-center xl:block sm:hidden min-[407px]:block hidden">
                        Access control
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="2xl:size-16 xl:size-14 size-12 mx-auto flex items-center justify-center rounded-full bg-primary-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                          <path
                            d="M16.5 20C17.8807 20 19 18.8807 19 17.5C19 16.1193 17.8807 15 16.5 15C15.1193 15 14 16.1193 14 17.5C14 18.8807 15.1193 20 16.5 20Z"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.5 20V23"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M26.5 11H6.5C5.94772 11 5.5 11.4477 5.5 12V26C5.5 26.5523 5.94772 27 6.5 27H26.5C27.0523 27 27.5 26.5523 27.5 26V12C27.5 11.4477 27.0523 11 26.5 11Z"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 11V6.5C12 5.30653 12.4741 4.16193 13.318 3.31802C14.1619 2.47411 15.3065 2 16.5 2C17.6935 2 18.8381 2.47411 19.682 3.31802C20.5259 4.16193 21 5.30653 21 6.5V11"
                            stroke="#1A1A1C"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-secondary dark:text-accent font-normal text-tagline-2 text-center xl:block sm:hidden min-[407px]:block hidden">
                        ID security
                      </p>
                    </div>
                  </figure>
                </RevealAnimation>
                <RevealAnimation delay={0.8} direction="left" offset={100} duration={2} useSpring={true} instant={true}>
                  <figure className="flex items-center justify-between gap-4 bg-white dark:bg-background-8 dark:border-stroke-6 2xl:p-8 px-6 2xl:py-8 py-6 rounded-full border border-stroke-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <p className="text-secondary text-heading-5 font-normal dark:text-accent">5.0</p>
                        <span className="size-[25px] ">
                          <StarIcon className="fill-ns-green" />
                        </span>
                      </div>
                      <p className="xl:block sm:hidden block">4k users reviews</p>
                    </div>
                    <div>
                      <Link
                        href="#"
                        className="2xl:size-14 size-12 flex items-center justify-center rounded-full bg-secondary dark:bg-accent relative group overflow-hidden">
                        {/* light Icon */}
                        <Image
                          src={arrowUpRightLight}
                          alt="Arrow Icon"
                          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-12 group-hover:translate-x-8 transition-all duration-500 opacity-100 group-hover:inline dark:hidden"
                        />
                        <Image
                          src={arrowUpRightLight}
                          alt="Arrow Icon"
                          className="absolute translate-y-6 -translate-x-12 transition-all duration-500 group-hover:-translate-x-[0px] group-hover:-translate-y-[7%] group-hover:opacity-100 inline dark:hidden"
                        />
                        {/* dark Icon */}
                        <Image
                          src={arrowUpRight}
                          alt="Arrow Icon"
                          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-12 group-hover:translate-x-8 transition-all duration-500 opacity-100 group-hover:dark:inline hidden dark:inline"
                        />
                        <Image
                          src={arrowUpRight}
                          alt="Arrow Icon"
                          className="absolute translate-y-6 -translate-x-12 transition-all duration-500 group-hover:-translate-x-[0px] group-hover:-translate-y-[7%] group-hover:opacity-100 dark:inline hidden"
                        />
                      </Link>
                    </div>
                  </figure>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.4} direction="up">
                <div className="lg:block hidden ">
                  <figure className="2xl:max-w-[497px] xl:max-w-[420px] max-w-[380px] overflow-hidden rounded-[20px]">
                    <Image src={hero} alt="hero" className="size-full object-cover dark:hidden" />
                    <Image src={heroDark} alt="hero-dark" className="size-full object-cover hidden dark:block" />
                  </figure>
                </div>
              </RevealAnimation>
              <div className="space-y-5 sm:max-w-[389px] max-w-full sm:w-full min-[550px]:w-[80%] w-full">
                <RevealAnimation
                  delay={0.7}
                  direction="right"
                  offset={100}
                  duration={2}
                  useSpring={true}
                  instant={true}>
                  <figure className="flex items-center gap-4 sm:justify-center justify-between bg-white dark:bg-background-8 dark:border-stroke-6 2xl:p-6 p-5 rounded-full border border-stroke-4">
                    <div>
                      <p className="xl:text-tagline-1 text-tagline-2">Security incidents</p>
                      <p className="2xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent xl:block sm:hidden block">
                        Neutralized
                      </p>
                    </div>
                    <div>
                      <figure>
                        <Image src={heroChart} alt="hero chart" className="w-full" />
                      </figure>
                    </div>
                  </figure>
                </RevealAnimation>
                <RevealAnimation
                  delay={0.8}
                  direction="right"
                  offset={100}
                  duration={2}
                  useSpring={true}
                  instant={true}>
                  <figure className="flex gap-4">
                    <div className="bg-white dark:bg-background-8 dark:border-stroke-6 rounded-full 2xl:py-6 px-5 py-4 border border-stroke-4 flex items-center justify-between 2xl:max-w-[257px] sm:max-w-[240px] max-w-full w-full flex-1">
                      <div>
                        <p className="xl:text-tagline-1 text-tagline-2">Data encryption</p>
                        <p className="xl:text-heading-6 text-tagline-1 font-medium text-secondary dark:text-accent lg:block sm:hidden block">
                          55.00%
                        </p>
                      </div>
                      <div>
                        <div className="size-[52px] rounded-full bg-secondary flex items-center justify-center">
                          <div className="flex items-end gap-1.5">
                            <div className="rounded-full bg-white h-[18px] w-[3px]" />
                            <div className="rounded-full bg-white h-[26px] w-[3px]" />
                            <div className="rounded-full bg-white h-3 w-[3px]" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-[54px] w-full border rounded-full flex items-end justify-center h-[102px] border-stroke-4 bg-white dark:bg-background-8 dark:border-stroke-6">
                      <div className="mb-1">
                        <figure className="size-[42px] rounded-full overflow-hidden">
                          <Image src={avatar2} alt="avatar" className="w-full bg-primary-500 h-full" />
                        </figure>
                      </div>
                    </div>
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RevealAnimation delay={0.2}>
        <div className="lg:pt-[100px] pt-[50px] relative z-10">
          <div className="main-container">
            <div className="space-y-5 lg:space-y-8">
              <p className="text-heading-5 font-normal text-secondary dark:text-accent text-center">
                Trusted by industry leaders
              </p>
              <div className="relative">
                <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-background-3 to-transparent dark:from-background-7 z-40" />
                <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-background-3 to-transparent dark:from-background-7 z-40" />
                <Marquee autoFill speed={40}>
                  <div className="flex items-center gap-8 justify-center py-2.5">
                    {clientLogos.map((logo, index) => (
                      <figure key={logo.id} className={cn('min-w-[140px] md:min-w-[201px]', index === 0 && 'ml-8')}>
                        <Image src={logo.light} className="w-full h-full dark:hidden" alt="clients" />
                        <Image src={logo.dark} className="w-full h-full hidden dark:block" alt="clients" />
                      </figure>
                    ))}
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
