import gradient22Img from '@public/images/gradient/gradient-22.png';
import integrationImgDark from '@public/images/home-page-28/intregration-img-dark.png';
import integrationImg from '@public/images/home-page-28/intregration-img.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Integration = () => {
  return (
    <section className="py-[60px] lg:py-[100px] bg-background-1 dark:bg-background-6">
      <div className="max-w-[1440px] mx-auto lp:px-0 px-5">
        <div className="bg-secondary dark:bg-background-8 relative pt-[100px] rounded-4xl space-y-[40px] lg:space-y-[70px] overflow-hidden">
          {/* bg img  */}
          <RevealAnimation delay={0.1} offset={200} direction="up">
            <figure className="absolute top-[-73%] md:top-[-120%] lg:top-[-85%] xl:top-[-73%] left-[-45%] md:left-[-99%] lg:left-[-70%] xl:left-[-45%] size-[1790px] overflow-hidden select-none pointer-events-none">
              <Image src={gradient22Img} alt="bg" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="space-y-14 relative z-10">
            <div className="space-y-5 max-w-[610px] mx-auto text-center px-5 sm:px-0">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-blur text-ns-green">Integration</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2 className="text-accent">Boost productivity with 50+ integrations.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="text-accent/60">
                    Seamlessly connect your favorite tools and platforms without the usual hassle. Our solution is
                    designed to make
                  </p>
                </RevealAnimation>
              </div>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="text-center">
                <LinkButton
                  href="/integration-01"
                  rel="noopener noreferrer"
                  className="btn btn-white btn-xl text-primary-500 hover:btn-primary">
                  See it in action
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.6}>
            <div className="flex items-center justify-center relative z-10">
              <figure className="mx-auto lg:max-w-[850px] md:max-w-[500px] max-w-[300px] max-[376px]:max-w-full w-full">
                <Image src={integrationImg} className="dark:hidden size-full object-cover" alt="integration-img" />
                <Image
                  src={integrationImgDark}
                  alt="integration-img"
                  className="hidden dark:inline-block size-full object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;
