import featureIntroImg from '@public/images/use-case-page/use-case-img.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const FeatureIntro = () => {
  return (
    <section className="pt-7 pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-3 mb-14 md:mb-[70px] max-w-[660px] mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <h2>Built for your business. Adapted to your workflow.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p>
              NextSaaS is designed to serve a wide range of teams and industries. Whether you’re managing data, scaling
              operations, optimizing finances, or streamlining customer experiences—NextSaaS is the platform that grows
              with you.
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <figure className="w-full h-auto rounded-[20px] overflow-hidden">
            <Image src={featureIntroImg} alt="feature-intro" className="size-full object-cover object-center" />
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
};

FeatureIntro.displayName = 'FeatureIntro';
export default FeatureIntro;
