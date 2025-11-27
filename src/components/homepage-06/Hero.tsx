import { projectAchievements } from '@/data/achievements';
import { GradientStarIcon, GraphCheckIcon, ReloadIcon, ThreeDotsIcon, UserGroupIcon } from '@/icons';
import authorAvatarBgImage from '@public/images/avatar/author-avatar-bg.png';
import avatar1Image from '@public/images/avatar/avatar-1.png';
import avatar2Image from '@public/images/avatar/avatar-2.png';
import avatar3Image from '@public/images/avatar/avatar-3.png';
import gradient16Image from '@public/images/gradient/gradient-16.png';
import gradient4Image from '@public/images/gradient/gradient-4.png';
import gradient46Image from '@public/images/gradient/gradient-46.png';
import heroReportBarImage from '@public/images/home-page-6/hero-report-bar.png';
import boldArrowUpRightImage from '@public/images/icons/bold-arrow-up-right.svg';
import figmaImage from '@public/images/icons/figma.svg';
import slackImage from '@public/images/icons/slack.svg';
import zapierImage from '@public/images/icons/zapier.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import OurAchievements from '../shared/OurAchievements';

const Hero = () => {
  return (
    <section className="bg-background-3 dark:bg-background-5 relative z-0 overflow-hidden pt-[150px] pb-[112px]">
      {/* left gradient */}
      <RevealAnimation delay={0.3} direction="left" offset={200}>
        <figure className="pointer-events-none absolute top-[-6%] left-[-39%] -z-10 w-full max-w-[700px] overflow-hidden select-none min-[2559px]:!left-[-14%] md:top-[-19%] md:left-[-42%] md:max-w-[900px] lg:top-[-29%] lg:left-[-34%] xl:left-[-25%] 2xl:left-[-19%]">
          <Image src={gradient16Image} alt="Hero background" />
        </figure>
      </RevealAnimation>

      {/* right gradient */}
      <RevealAnimation delay={0.4} direction="right" offset={100}>
        <figure className="pointer-events-none absolute top-[-5%] right-[-27%] -z-10 w-full max-w-[800px] overflow-hidden select-none min-[2559px]:!right-[-10%] md:top-[-17%] md:right-[-33%] md:max-w-[926px] lg:top-[-28%] lg:right-[-28%] xl:right-[-17%] 2xl:right-[-15%]">
          <Image src={gradient46Image} alt="Hero background" />
        </figure>
      </RevealAnimation>

      <div className="main-container">
        <div className="mx-auto mb-[70px] flex max-w-[900px] flex-col items-center">
          <div className="mb-5">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-yellow-v2 opacity-0">50k+ trusted businesses</span>
            </RevealAnimation>
          </div>

          <div className="mb-14 text-center">
            <RevealAnimation delay={0.2}>
              <h1 className="mb-4 opacity-0">Boost your financial efficiency</h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-tagline-1 mx-auto max-w-[720px] opacity-0">
                Enhancing the efficiency of your finances involves optimizing how you manage, spend, and invest your
                money to achieve better financial outcomes.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <form className="opacity-0">
              <div className="flex w-full items-center justify-center gap-x-3 max-sm:flex-col max-sm:gap-y-5">
                <input
                  id="cta-email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="bg-background-1 dark:bg-background-6 placeholder:text-secondary/40 text-secondary/60 text-tagline-1 border-stroke-3 dark:bg-dark-200 focus:border-primary-500 dark:focus:border-primary-500 h-12 min-w-[325px] rounded-[360px] border px-[18px] py-3 font-normal transition-all duration-300 outline-none placeholder:font-normal focus:outline-none sm:min-w-[340px] dark:border-[#31332F] dark:placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md h-12 max-sm:w-full">
                  <span>Get started</span>
                </button>
              </div>
            </form>
          </RevealAnimation>
        </div>

        <div className="mb-8 flex flex-col gap-8 lg:flex-row">
          <RevealAnimation delay={0.5} instant={true}>
            <div className="bg-background-2 dark:bg-background-6 flex flex-col rounded-[20px] p-6 opacity-0 backdrop-blur-[20px] lg:flex-1/3">
              <div className="mb-.5 flex items-center justify-between">
                <h5 className="text-secondary dark:text-accent">Profile</h5>
                <ReloadIcon />
              </div>
              <div className="relative z-10 mx-auto mb-4 flex h-[176px] w-[176px] items-center justify-center overflow-hidden rounded-full p-2.5">
                {/* avatar ring bg gradient  */}
                <figure className="pointer-events-none absolute top-[-82%] size-[320px] overflow-hidden select-none">
                  <Image src={gradient4Image} alt="hero-avatar-ring" className="size-full object-cover" />
                </figure>
                {/* avatar */}
                <figure className="relative z-20 mx-auto h-[156px] w-[156px] overflow-hidden rounded-full bg-white">
                  <Image src={avatar1Image} alt="hero person thumb" />
                </figure>
              </div>
              <div className="mb-16 text-center">
                <h4 className="text-secondary dark:text-accent mb-1">Kristin watson</h4>
                <p className="text-tagline-1">Design manger</p>
              </div>
              <div className="flex items-center justify-center gap-4 max-sm:flex-wrap sm:gap-x-2.5 sm:gap-y-0 md:gap-x-8 lg:gap-x-16">
                <div className="bg-background-1 dark:bg-background-7 flex items-center gap-2 rounded-lg px-6 py-2">
                  <UserGroupIcon />
                  <h6 className="text-secondary dark:text-accent">11</h6>
                </div>
                <div className="bg-background-1 dark:bg-background-7 flex items-center gap-2 rounded-lg px-6 py-2">
                  <GraphCheckIcon />
                  <h6 className="text-secondary dark:text-accent">56</h6>
                </div>
                <div className="bg-background-1 dark:bg-background-7 flex items-center gap-2 rounded-lg px-6 py-2">
                  <GradientStarIcon />
                  <h6 className="text-secondary dark:text-accent">12</h6>
                </div>
              </div>
            </div>
          </RevealAnimation>

          <div className="flex flex-col gap-8 lg:flex-2/3 lg:justify-between xl:justify-normal">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <RevealAnimation delay={0.6} instant={true}>
                <div className="bg-background-2 dark:bg-background-6 relative z-0 overflow-hidden rounded-[20px] p-[26px] opacity-0 backdrop-blur-[60px]">
                  <div className="absolute -top-[122px] -left-[180px] -z-10 h-full w-full bg-[url('/images/gradient/gradient-4.png')] bg-cover bg-no-repeat" />
                  <div className="mb-8 flex justify-between">
                    <div>
                      <h5 className="text-secondary dark:text-accent mb-1">Financial report</h5>
                      <p className="text-secondary/60 dark:text-accent">$3500.20</p>
                    </div>
                    <p className="text-[#A0AEC0]">20%</p>
                  </div>
                  <figure>
                    <Image src={heroReportBarImage} alt="report bar" className="w-full" />
                  </figure>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.7} instant={true}>
                <div className="bg-background-2 dark:bg-background-6 relative z-0 flex items-center justify-center overflow-hidden rounded-[20px] p-[26px] opacity-0 backdrop-blur-[20px] max-md:min-h-[320px]">
                  <div className="absolute -right-[140px] -bottom-[175px] -z-10 h-full w-full -rotate-180 bg-[url('/images/gradient/gradient-4.png')] bg-[length:117%_106%] bg-no-repeat" />
                  <div className="group text-center">
                    <div className="mb-4 flex items-center justify-center gap-4">
                      <div className="flex -space-x-3.5">
                        <figure className="relative inline-block size-11 overflow-hidden rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-3 ring-white">
                          <Image src={avatar1Image} alt="avatar" className="max-w-full" />
                          <Image src={authorAvatarBgImage} alt="avatar" className="absolute top-0 left-0 -z-10" />
                        </figure>
                        <figure className="relative inline-block size-11 overflow-hidden rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-3 ring-white">
                          <Image src={avatar2Image} alt="avatar" className="max-w-full" />
                          <Image src={authorAvatarBgImage} alt="avatar" className="absolute top-0 left-0 -z-10" />
                        </figure>
                        <figure className="relative inline-block size-11 overflow-hidden rounded-full bg-linear-[135deg,#ffffff_0%,#a585ff_100%] ring-3 ring-white">
                          <Image src={avatar3Image} alt="avatar" className="max-w-full" />
                          <Image src={authorAvatarBgImage} alt="avatar" className="absolute top-0 left-0 -z-10" />
                        </figure>
                        <div className="bg-ns-yellow text-secondary/80 text-tagline-3 relative z-10 inline-flex size-12 items-center justify-center overflow-hidden rounded-full ring-2 ring-white">
                          <figure>
                            <Link href="#" aria-label="View global investment">
                              <span className="sr-only">View global investment</span>
                              {/* light Icon */}
                              <Image
                                src={boldArrowUpRightImage}
                                alt="Arrow Icon"
                                className="absolute top-1/2 left-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:opacity-0 dark:hidden"
                              />
                              <Image
                                src={boldArrowUpRightImage}
                                alt="Arrow Icon"
                                className="absolute inline-block -translate-x-12 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[13px] group-hover:-translate-y-[48%] group-hover:opacity-100 dark:hidden"
                              />
                              {/* dark Icon */}
                              <Image
                                src={boldArrowUpRightImage}
                                alt="Arrow Icon"
                                className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-8 group-hover:-translate-y-12 group-hover:opacity-0 dark:inline"
                              />
                              <Image
                                src={boldArrowUpRightImage}
                                alt="Arrow Icon"
                                className="absolute hidden -translate-x-12 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[14px] group-hover:-translate-y-[49%] group-hover:opacity-100 dark:inline"
                              />
                            </Link>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-secondary dark:text-accent mb-1">20k+ global investment</h6>
                    <p className="text-secondary/60 dark:text-accent/60">Get Global Investment policy in the year</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.8} instant={true}>
              <div className="bg-background-2 dark:bg-background-6 flex justify-between rounded-[20px] p-6 opacity-0 backdrop-blur-[20px] max-sm:flex-col max-sm:gap-y-8">
                <div className="max-sm:text-center">
                  <h5 className="text-secondary dark:text-accent mb-1">Trackers connected</h5>
                  <p className="text-secondary/60 dark:text-accent/60">3 active connections</p>
                </div>
                <div className="flex items-center gap-4 max-sm:justify-center">
                  <div className="dark:bg-background-7 flex size-14 items-center justify-center rounded-full bg-white p-3">
                    <Image src={zapierImage} alt="zapier" className="size-[31.5px]" />
                  </div>
                  <div className="dark:bg-background-7 flex size-14 items-center justify-center rounded-full bg-white p-3">
                    <Image src={figmaImage} alt="figma" className="size-[31.5px]" />
                  </div>
                  <div className="dark:bg-background-7 flex size-14 items-center justify-center rounded-full bg-white p-3">
                    <Image src={slackImage} alt="slack" />
                  </div>
                  <div>
                    <ThreeDotsIcon />
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        <OurAchievements achievements={projectAchievements} />
      </div>
    </section>
  );
};

export default Hero;
