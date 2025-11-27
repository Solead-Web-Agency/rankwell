import vision1Img from '@public/images/about-page-02/vision-1.png';
import vision2Img from '@public/images/about-page-02/vision-2.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const VisionStatement = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-[100px]">
      <div className="main-container space-y-12 md:space-y-16 lg:space-y-[100px]">
        <div className="space-y-3 text-center max-w-[780px] mx-auto">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Passion meets purpose</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="font-medium">Built for progress. designed for possibility.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p>
              At NextSaaS, we believe software should empower people, not overwhelm them. That&apos;s why we&apos;ve
              created a flexible, intuitive platform that helps teams streamline operations, gain clarity from data, and
              scale faster, without the complexity.
            </p>
          </RevealAnimation>
        </div>
        <article className="flex flex-col md:flex-row gap-8">
          <RevealAnimation delay={0.5} instant={true}>
            <figure className="rounded-[20px] overflow-hidden max-w-full md:max-w-[630px]">
              <Image src={vision1Img} className="w-full h-full object-cover" alt="vision-1" />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.6} instant={true}>
            <figure className="rounded-[20px] overflow-hidden max-w-full md:max-w-[630px]">
              <Image src={vision2Img} className="w-full h-full object-cover" alt="vision-2" />
            </figure>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default VisionStatement;
