import businessGrowthCardDarkImg from '@public/images/about-page-03/business-growth-card-dark.png';
import businessGrowthCardImg from '@public/images/about-page-03/business-growth-card.png';
import authorAvatarBgImg from '@public/images/avatar/author-avatar-bg.png';
import avatar1Img from '@public/images/avatar/avatar-1.png';
import avatar2Img from '@public/images/avatar/avatar-2.png';
import avatar3Img from '@public/images/avatar/avatar-3.png';
import gradient4Img from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="pb-20 pt-14 md:pb-28 md:pt-16 lg:pb-44 lg:pt-[88px] xl:pb-[200px] xl:pt-[100px]">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-y-14 xl:gap-x-28 items-center">
          <div className="col-span-12 lg:col-span-6 mx-4 xl:mx-0">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-cyan mb-5">Our Mission</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2>Empowering teams to collaborate and thrive with intelligent</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p>
                  In today&apos;s fast-paced, digitally connected world, successful teams rely on more than just
                  talent—they thrive on intelligent collaboration.
                </p>
              </RevealAnimation>
            </div>
          </div>
          {/*  */}
          <div className="col-span-12 lg:col-span-6 relative mx-4 xl:mx-0">
            {/* Business Growth Card */}
            <RevealAnimation delay={0.5} useSpring={true} duration={2.5}>
              <figure className="absolute max-w-[360px] z-20 overflow-hidden left-1/2 -translate-x-1/2 top-[78%] rounded-[12px]">
                <Image
                  src={businessGrowthCardImg}
                  alt="business growth card"
                  className="h-full w-full block dark:hidden"
                />
                <Image
                  src={businessGrowthCardDarkImg}
                  alt="business growth card"
                  className="h-full w-full hidden dark:block"
                />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="p-[26px] backdrop-blur-[20px] bg-white/60 dark:bg-background-8 shadow-2 min-h-[380px] rounded-[20px] h-full overflow-hidden relative z-10 flex items-center justify-center">
                {/* gradient bg */}
                <RevealAnimation delay={0.7}>
                  <figure className="absolute select-none pointer-events-none max-[376px]:bottom-[-45%] bottom-[-54%] md:bottom-[-112%] lg:bottom-[-80%] right-[-33%] md:right-[-30%] xl:bottom-[-90%] xl:right-[-32%] max-w-[500px] md:max-w-[700px] w-full -z-10 rotate-180">
                    <Image src={gradient4Img} alt="hero author bg" className="size-full object-cover" />
                  </figure>
                </RevealAnimation>
                <div className="text-center -mt-20">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="flex -space-x-3.5 group">
                      <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                        <Image src={avatar1Img} alt="avatar" className="max-w-full" />
                        <Image src={authorAvatarBgImg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                      </figure>
                      <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                        <Image src={avatar2Img} alt="avatar" className="max-w-full" />
                        <Image src={authorAvatarBgImg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                      </figure>
                      <figure className="inline-block size-11 rounded-full ring-3 ring-white bg-linear-[156deg,_#FFF_32.92%,_#A585FF_91%] overflow-hidden relative">
                        <Image src={avatar3Img} alt="avatar" className="max-w-full" />
                        <Image src={authorAvatarBgImg} alt="avatar" className="absolute top-0 left-0 -z-10" />
                      </figure>
                      <div className="inline-flex overflow-hidden items-center justify-center size-12 rounded-full ring-3 ring-white text-secondary/80 bg-ns-yellow text-tagline-3 font-medium relative z-10">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-12 group-hover:translate-x-8 transition-all duration-500">
                          <path
                            d="M6 18L18 6"
                            stroke="#1A1A1C"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.25 6H18V15.75"
                            stroke="#1A1A1C"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {/*  */}
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute translate-y-6 -translate-x-12 transition-all duration-500 group-hover:-translate-x-[1px] group-hover:-translate-y-[2%]">
                          <path
                            d="M6 18L18 6"
                            stroke="#1A1A1C"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.25 6H18V15.75"
                            stroke="#1A1A1C"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h6 className="mb-1 text-secondary dark:text-accent text-xl font-normal leading-[1 .5]">
                    20k+ global investment
                  </h6>
                  <p className="text-secondary/60 dark:text-accent/60">Get Global Investment policy in the year</p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
