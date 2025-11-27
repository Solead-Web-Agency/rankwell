import gradient7 from '@public/images/gradient/gradient-7.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import CTAV3 from '../shared/cta/CTAV3';

const CTA = () => {
  return (
    <section className="2xl:max-w-[1440px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[700px] sm:max-w-[600px] min-[475px]:max-w-[450px] min-[425px]:max-w-[350px] max-w-[320px] mx-auto md:py-[100px] py-[80px]">
      <RevealAnimation delay={0.1}>
        <div className="relative bg-secondary dark:bg-background-6 sm:rounded-[32px] rounded-[20px] overflow-hidden">
          {/* bg gradient  */}
          <RevealAnimation delay={0.1} offset={200} direction="left">
            <figure className="absolute sm:-top-[35%] -top-[100%] -left-[7%] size-[850px] rotate-[275deg] pointer-events-none select-none">
              <Image src={gradient7} alt="cta-bg" className="w-[50%] sm:w-full" />
            </figure>
          </RevealAnimation>

          <RevealAnimation delay={0.1}>
            <CTAV3
              className="lg:p-[100px] sm:p-20 min-[475px]:p-14 p-10 relative z-10"
              badgeClass="badge-blur text-ns-yellow"
              ctaHeading="Get started with industry-leading cyber security"
              description="No hidden fees. no steep learning curves. Just a platform built for your growth."
              descriptionClass="text-accent/60"
              btnClass="btn-primary hover:btn-accent btn-md md:w-auto w-full border-0"
              ctaBtnText="Started free today"
              badgeText="Get started"
              inputFieldClass="bg-accent/10 border border-accent/20 shadow-1 ring-[0.7px] ring-accent/20 focus:ring-1 focus:ring-primary-600 placeholder:text-accent/60 block outline-none text-white placeholder:font-normal md:w-[371px] w-[270px] max-[376px]:w-[250px] "
            />
          </RevealAnimation>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default CTA;
