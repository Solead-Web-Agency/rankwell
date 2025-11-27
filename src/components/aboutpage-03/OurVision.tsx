import avatar1Img from '@public/images/about-page-03/avatar-1.png';
import avatar2Img from '@public/images/about-page-03/avatar-2.png';
import avatar3Img from '@public/images/about-page-03/avatar-3.png';
import heroImageDarkImg from '@public/images/home-page-13/hero-image-dark.png';
import heroImageImg from '@public/images/home-page-13/hero-image.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const OurVision = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container space-y-16 md:space-y-[100px]">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Our vision</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Motivated by Intent, steered by insight</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[806px] mx-auto">
              Every great journey begins with a clear purpose—and it&apos;s that sense of intent that drives everything
              we do. But purpose alone isn&apos;t enough. To truly make meaningful progress, we combine our motivation
              with sharp
            </p>
          </RevealAnimation>
        </div>
        {/*  */}
        <div className="grid grid-cols-12 xl:gap-x-24 gap-y-14">
          <div className="col-span-12 xl:col-span-8">
            <RevealAnimation delay={0.5}>
              <figure className="lg:max-w-[780px] lg:min-h-[424px] rounded-4xl overflow-hidden mx-auto">
                <Image src={heroImageImg} alt="hero image" className="w-full block dark:hidden" />
                <Image src={heroImageDarkImg} alt="hero image" className="w-full hidden dark:block" />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 xl:col-span-4">
            <div className="relative w-full h-full max-lg:flex max-[400px]:flex-wrap gap-4 max-[400px]:justify-start max-lg:justify-between">
              <RevealAnimation delay={0.6}>
                <figure className="size-[140px] rounded-2xl lg:absolute lg:top-0 lg:left-11 overflow-hidden">
                  <Image src={avatar1Img} alt="Vision Avatar" className="w-full h-full object-cover" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <figure className="size-[140px] rounded-2xl lg:absolute lg:top-[41%] lg:right-[14%] overflow-hidden">
                  <Image src={avatar2Img} alt="Vision Avatar" className="w-full h-full object-cover" />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure className="size-[140px] rounded-2xl lg:absolute lg:-bottom-22 xl:bottom-0 lg:left-96 xl:left-0 overflow-hidden">
                  <Image src={avatar3Img} alt="Vision Avatar" className="w-full h-full object-cover" />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
