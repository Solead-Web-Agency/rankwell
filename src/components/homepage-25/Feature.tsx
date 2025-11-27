import avatar1Img from '@public/images/avatar/avatar-1.png';
import avatar11Img from '@public/images/avatar/avatar-11.png';
import avatar12Img from '@public/images/avatar/avatar-12.png';
import avatar2Img from '@public/images/avatar/avatar-2.png';
import avatar3Img from '@public/images/avatar/avatar-3.png';
import avatar4Img from '@public/images/avatar/avatar-4.png';
import avatar5Img from '@public/images/avatar/avatar-5.png';
import avatar8Img from '@public/images/avatar/avatar-8.png';
import avatar9Img from '@public/images/avatar/avatar-9.png';
import feature1Img from '@public/images/home-page-25/feature-1.png';
import featureBgImg from '@public/images/home-page-25/feature-bg.png';
import userActivityProgressDarkImg from '@public/images/home-page-25/user-activity-progress-dark.png';
import userActivityProgressImg from '@public/images/home-page-25/user-activity-progress.png';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';
import Map from '../shared/Map';

const Feature = () => {
  return (
    <section className="pt-20 md:pt-[100px] lg:pt-36 xl:pt-[200px] pb-[100px] lg:pb-36 xl:pb-[200px] dark:bg-background-5">
      <div className="main-container">
        <div className="space-y-3 md:space-y-5 mb-8 lg:mb-[72px] text-center max-w-[776px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Robust tools to enhance your property management business.</h2>
          </RevealAnimation>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Image */}
          <RevealAnimation delay={0.3}>
            <figure className="rounded-[20px] max-w-[629px] overflow-hidden">
              <Image src={feature1Img} className="w-full h-full object-cover" alt="Modern house" />
            </figure>
          </RevealAnimation>
          {/* Card 2: Stats */}
          <RevealAnimation delay={0.4}>
            <div className="bg-secondary dark:bg-[#000203] max-w-[629px] rounded-[20px] p-8 z-0 relative overflow-hidden">
              <div className="absolute -top-5 left-0 w-full h-full">
                <Image src={featureBgImg} alt="Modern house" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-1 flex flex-col items-start min-h-[165px] justify-center relative p-8 pt-9 bg-white/15 dark:bg-accent/5 backdrop-blur-[25px] rounded-2xl">
                  {/* Positioning icon */}
                  <div className="absolute top-7 right-7">
                    <span className="ns-shape-10 text-[36px] text-accent" />
                  </div>
                  <span className="text-tagline-1 text-accent/60">Building age</span>
                  <h3 className="text-background-4 flex items-center gap-2 text-heading-3">
                    <NumberAnimation number={10} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.2} />

                    <span className="font-inherit">Y</span>
                  </h3>
                </div>
                {/* Daily visitors */}
                <div className="space-y-1 flex flex-col items-start min-h-[165px] justify-center relative p-8 pt-9 bg-white/15 dark:bg-accent/5 backdrop-blur-[25px] rounded-2xl">
                  {/* component-structure-white icon */}
                  <div className="absolute top-7 right-7">
                    <span className="ns-shape-12 text-[36px] text-accent" />
                  </div>
                  <span className="text-tagline-1 text-accent/60">Daily visitors</span>
                  <h3 className="text-background-4 flex items-center gap-2 text-heading-3">
                    <NumberAnimation number={8950} speed={1500} interval={180} rooms={4} heightSpaceRatio={2.2} />
                  </h3>
                </div>
                {/* Temperature */}
                <div className="space-y-1 flex flex-col items-start min-h-[165px] justify-center relative p-8 pt-9 bg-white/15 dark:bg-accent/5 backdrop-blur-[25px] rounded-2xl">
                  {/* Positioning icon */}
                  <div className="absolute top-7 right-7">
                    <span className="ns-shape-11 text-[36px] text-accent" />
                  </div>
                  <span className="text-tagline-1 text-accent/60">Temperature</span>
                  <h3 className="text-background-4 flex items-center gap-2 text-heading-3">
                    <NumberAnimation number={34} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.1} />
                    <span className="font-inherit">°F</span>
                  </h3>
                </div>
                {/* Occupancy rate */}
                <div className="space-y-1 flex flex-col items-start min-h-[165px] justify-center relative p-8 pt-9 bg-white/15 dark:bg-accent/5 backdrop-blur-[25px] rounded-2xl">
                  <div className="absolute top-7 right-7">
                    <span className="ns-shape-9 text-[36px] text-accent" />
                  </div>
                  <span className="text-tagline-1 text-accent/60">Occupancy rate</span>
                  <h3 className="text-background-4 flex items-center gap-2 text-heading-3">
                    <NumberAnimation number={85} speed={1000} interval={180} rooms={2} heightSpaceRatio={2.2} />
                    <span className="font-inherit">%</span>
                  </h3>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {/* Card 3: Discover surroundings */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <RevealAnimation delay={0.5}>
              <blockquote className="space-y-8">
                <div className="bg-ns-yellow rounded-[20px] space-y-8 p-8">
                  <figure>
                    <div className="flex -space-x-2.5 cursor-pointer" role="list" aria-label="Team members">
                      <Image
                        className="inline-block size-[38px] object-cover object-center rounded-full ring-2 ring-background-4 dark:ring-background-9 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar9Img}
                        alt="Team member 1"
                      />
                      <Image
                        className="inline-block size-[38px] object-cover object-center rounded-full ring-2 ring-background-4 dark:ring-background-9 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar12Img}
                        alt="Team member 3"
                      />
                      <Image
                        className="inline-block size-[38px] object-cover object-center rounded-full ring-2 ring-background-4 dark:ring-background-9 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar1Img}
                        alt="Team member 3"
                      />
                      <Image
                        className="inline-block size-[38px] object-cover object-center rounded-full ring-2 ring-background-4 dark:ring-background-9 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar2Img}
                        alt="Team member 3"
                      />
                      <Image
                        className="inline-block size-[38px] object-cover object-center rounded-full ring-2 ring-background-4 dark:ring-background-9 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar4Img}
                        alt="Team member 3"
                      />
                      <Image
                        className="inline-block size-[38px] object-cover object-center rounded-full ring-2 ring-background-4 dark:ring-background-9 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                        src={avatar5Img}
                        alt="Team member 3"
                      />
                      <div className="inline-flex items-center justify-center size-[38px] rounded-full ring-2 ring-background-4 dark:ring-background-9 text-secondary/80 dark:text-accent bg-ns-cyan text-tagline-2 font-medium">
                        20+
                      </div>
                    </div>
                  </figure>
                  <h3 className="text-xl font-normal dark:text-secondary leading-[1.5]">
                    Discover the <br />
                    surroundings.
                  </h3>
                </div>
                <figure className="bg-secondary dark:bg-accent flex justify-center items-center rounded-[20px] p-8">
                  <Image src={userActivityProgressImg} alt="user-activity-progress" className="block dark:hidden" />
                  <Image src={userActivityProgressDarkImg} alt="user-activity-progress" className="hidden dark:block" />
                </figure>
              </blockquote>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <div className="p-8 bg-accent dark:bg-background-8 shadow-1 flex flex-col justify-between rounded-[20px]">
                <div className="flex items-start justify-between">
                  <h3 className="text-heading-5">Tenants</h3>
                  <figure className="relative">
                    <Image
                      src={avatar8Img}
                      className="inline-block size-[70px] object-cover object-center rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                      alt="avatar"
                    />
                    <Image
                      src={avatar11Img}
                      className="inline-block size-[50px] object-cover object-center rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%] absolute top-8 right-7"
                      alt="avatar"
                    />
                    <Image
                      src={avatar3Img}
                      alt="avatar"
                      className="inline-block size-[50px] object-cover object-center rounded-full bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                    />
                  </figure>
                </div>
                <p className="text-xl max-xl:mt-4 font-normal leading-[1.5]">
                  Join over 800 active tenants enjoying the perks of being part of our vibrant community, where you can
                  connect with neighbors
                </p>
              </div>
            </RevealAnimation>
          </div>
          {/* Card 4 Image */}
          <RevealAnimation delay={0.7}>
            <figure className="rounded-[20px] lg:max-w-[629px] overflow-hidden">
              <RevealAnimation delay={0.1}>
                <div className="dark:bg-background-6">
                  <div id="map" className="w-full h-[300px] md:h-[438px]">
                    <Map />
                  </div>
                </div>
              </RevealAnimation>
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feature;
