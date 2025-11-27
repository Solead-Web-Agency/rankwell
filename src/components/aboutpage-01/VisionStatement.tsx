import vision1Img from '@public/images/about-page-01/vision-1.png';
import vision2Img from '@public/images/about-page-01/vision-2.png';
import vision3Img from '@public/images/about-page-01/vision-3.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const VisionStatement = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-[100px]">
      <div className="main-container space-y-14 md:space-y-[70px]">
        <div className="space-y-3 text-center max-w-[780px] mx-auto">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-cyan mb-5">Passion meets purpose</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>NextSaaS is defining the future landscape of business.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p>
              In a rapidly evolving digital world, NextSaaS stands at the forefront of innovation, transforming how
              businesses operate, connect, and grow.By delivering intelligent, scalable, and user-focused SaaS
              solutions,
            </p>
          </RevealAnimation>
        </div>
        <article className="grid grid-cols-12 gap-y-8 justify-center gap-x-8">
          <div className="col-span-12 md:col-span-6 space-y-8">
            <RevealAnimation delay={0.5}>
              <figure className="rounded-[20px] overflow-hidden max-w-[630px]">
                <Image src={vision1Img} alt="vision-1" className="w-full h-auto" />
              </figure>
            </RevealAnimation>
            <RevealAnimation delay={0.6}>
              <figure className="rounded-[20px] overflow-hidden max-w-[630px]">
                <Image src={vision2Img} alt="vision-2" className="w-full h-auto" />
              </figure>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.7}>
            <figure className="col-span-12 md:col-span-6 rounded-[20px] overflow-hidden max-w-[630px]">
              <Image src={vision3Img} alt="vision-3" className="w-full h-auto" />
            </figure>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default VisionStatement;
