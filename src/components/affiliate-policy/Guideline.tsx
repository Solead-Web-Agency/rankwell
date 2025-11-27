import affiliateCover from '@public/images/affiliates/affiliates-cover.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Guideline = () => {
  return (
    <section className="pb-28 md:pb-36 lg:pb-44 2xl:pb-[200px] pt-[100px]">
      <div className="main-container">
        <div className="space-y-14 md:space-y-20 lg:space-y-[100px]">
          <div className="max-w-[780px] text-center space-y-3 mx-auto">
            <RevealAnimation delay={0.3}>
              <span className="badge badge-cyan mb-5">Passion meets purpose</span>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <h2>Affiliate terms &amp; conditions</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <p>
                Welcome to the NextSaaS Affiliate Program! <br />
                Please read these terms carefully to ensure you fully understand how our program works and what is
                expected.
              </p>
            </RevealAnimation>
          </div>
          <RevealAnimation delay={0.6} instant={true}>
            <figure className="max-w-full rounded-[20px] overflow-hidden">
              <Image
                src={affiliateCover}
                quality={100}
                className="w-full h-full object-cover object-center"
                alt="blog-details-cover"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Guideline;
