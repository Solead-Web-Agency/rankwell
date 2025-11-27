import features1 from '@public/images/home-page-3/features-1.png';
import features2 from '@public/images/home-page-3/features-2.png';
import subFeatures1 from '@public/images/home-page-3/sub-features-1.png';
import subFeatures2 from '@public/images/home-page-3/sub-features-2.png';
import subFeatures3 from '@public/images/home-page-3/sub-features-3.png';
import subFeatures4 from '@public/images/home-page-3/sub-features-4.png';
import subFeatures5 from '@public/images/home-page-3/sub-features-5.png';
import subFeatures6 from '@public/images/home-page-3/sub-features-6.png';
import subFeatures7 from '@public/images/home-page-3/sub-features-7.png';
import subFeatures8 from '@public/images/home-page-3/sub-features-8.png';
import subFeatures9 from '@public/images/home-page-3/sub-features-9.png';
import subFeaturesDark1 from '@public/images/home-page-3/sub-features-dark-1.png';
import subFeaturesDark2 from '@public/images/home-page-3/sub-features-dark-2.png';
import subFeaturesDark3 from '@public/images/home-page-3/sub-features-dark-3.png';
import subFeaturesDark4 from '@public/images/home-page-3/sub-features-dark-4.png';
import subFeaturesDark5 from '@public/images/home-page-3/sub-features-dark-5.png';
import subFeaturesDark6 from '@public/images/home-page-3/sub-features-dark-6.png';
import subFeaturesDark7 from '@public/images/home-page-3/sub-features-dark-7.png';
import subFeaturesDark8 from '@public/images/home-page-3/sub-features-dark-8.png';
import subFeaturesDark9 from '@public/images/home-page-3/sub-features-dark-9.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const FeaturesV2 = () => {
  return (
    <section className="pt-14 pb-24 md:pt-16 md:pb-24 lg:pt-[88px] lg:pb-[140px] xl:pt-[100px] xl:pb-[150px]">
      <div className="main-container space-y-[220px] md:space-y-[300px] xl:space-y-[300px]">
        {/* Features 1 Section */}
        <div className="flex flex-col items-start justify-between gap-x-5 gap-y-28 sm:gap-y-24 md:gap-y-20 lg:flex-row lg:gap-x-20">
          <div className="w-full lg:w-1/2">
            <div className="mb-10 space-y-3 px-4 text-center sm:px-0 md:text-left lg:mb-14">
              <RevealAnimation delay={0.1}>
                <h2>
                  Real-time messaging for exceptional <span className="text-primary-500">customer interactions.</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p className="lg:max-w-[462px]">
                  Provide live chat support to your customers. our chatbot effortlessly hands off to human agents when
                  necessary.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.3}>
              <div className="flex justify-center md:justify-start">
                <LinkButton
                  href="/about-01"
                  className="btn btn-md btn-white dark:btn-transparent hover:btn-primary block w-[90%] md:inline-block md:w-auto">
                  Get started
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="relative -mt-20 w-full lg:w-1/2">
            <RevealAnimation delay={0.4}>
              <figure className="h-auto max-w-full lg:max-w-[452px]">
                <Image src={features1} alt="features Images" className="h-full w-full object-cover object-center" />
              </figure>
            </RevealAnimation>
            <div className="absolute -right-3 -bottom-20 z-10 space-y-1.5 sm:right-0 sm:-bottom-8 md:-bottom-16 lg:-bottom-24 lg:space-y-3">
              <RevealAnimation delay={0.5} useSpring={true} duration={2}>
                <figure className="h-auto max-w-[240px] overflow-hidden rounded-[20px] sm:max-w-[350px]">
                  <Image
                    src={subFeatures1}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark1}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6} useSpring={true} duration={2}>
                <figure className="h-auto max-w-[240px] overflow-hidden rounded-2xl sm:max-w-[350px]">
                  <Image
                    src={subFeatures2}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark2}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.7} useSpring={true} duration={2}>
                <figure className="shadow-2 h-auto max-w-[240px] overflow-hidden rounded-2xl sm:max-w-[350px]">
                  <Image
                    src={subFeatures3}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark3}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Features 2 Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-x-5 gap-y-28 sm:gap-y-24 md:gap-x-10 md:gap-y-20 lg:flex-row-reverse lg:items-start lg:gap-x-16 2xl:gap-x-24">
          <div className="w-full lg:w-1/2">
            <div className="mb-8 space-y-3 px-4 text-center sm:px-0 md:text-left lg:mb-14">
              <RevealAnimation delay={0.3}>
                <h3 className="md:text-heading-3 lg:text-heading-2">
                  Cutting-edge chatbot solutions for <span className="text-primary-500">modern apps.</span>
                </h3>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[596px]">
                  Customize it to align with your brand&apos;s personality. tailor the responses, and interactions to
                  fit your business identity.
                </p>
              </RevealAnimation>
            </div>
            <RevealAnimation delay={0.5}>
              <div className="flex justify-center md:justify-start">
                <LinkButton
                  href="/about-01"
                  className="btn btn-md btn-white dark:btn-transparent hover:btn-primary block w-[90%] md:inline-block md:w-auto">
                  Get started
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Features Image */}
          <div className="relative -mt-20 w-full md:-mt-36 lg:w-1/2">
            <RevealAnimation delay={0.4}>
              <figure className="h-auto max-w-full lg:max-w-[452px] lg:justify-self-end">
                <Image src={features2} alt="features Images" className="h-full w-full object-cover object-center" />
              </figure>
            </RevealAnimation>
            <div className="absolute top-[55%] -left-3 z-20 flex flex-col items-center md:-left-5 lg:-left-2 xl:-left-3 2xl:-left-8">
              <RevealAnimation delay={0.5} useSpring={true} duration={2}>
                <figure className="max-w-[280px] overflow-hidden rounded-[20px] md:h-[74px] md:max-w-[320px] md:self-end">
                  <Image
                    src={subFeatures4}
                    alt="Sub features"
                    className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark4}
                    alt="Sub features"
                    className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6} useSpring={true} duration={2}>
                <figure className="my-1 max-w-[280px] overflow-hidden rounded-2xl object-cover md:my-2 md:h-[74px] md:max-w-[320px]">
                  <Image
                    src={subFeatures5}
                    alt="Sub features"
                    className="shadow-3 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark5}
                    alt="Sub features"
                    className="shadow-3 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.7} useSpring={true} duration={2}>
                <figure className="shadow-7 relative z-40 max-h-[72px] max-w-[250px] overflow-hidden rounded-2xl md:max-w-[310px]">
                  <Image
                    src={subFeatures6}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark6}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8} useSpring={true} duration={2}>
                <figure className="shadow-7 z-30 -mt-[37px] hidden max-h-[72px] max-w-[200px] overflow-hidden rounded-2xl md:block md:max-w-[280px]">
                  <Image
                    src={subFeatures7}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark7}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.9} useSpring={true} duration={2}>
                <figure className="shadow-7 z-20 -mt-[37px] hidden max-h-[72px] max-w-[180px] overflow-hidden rounded-2xl md:block md:max-w-[260px]">
                  <Image
                    src={subFeatures8}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark8}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1} useSpring={true} duration={2}>
                <figure className="shadow-7 -mt-[37px] max-h-[72px] max-w-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures9}
                    alt="Sub features"
                    className="shadow-2 block h-auto w-full object-cover object-center dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark9}
                    alt="Sub features"
                    className="shadow-2 hidden h-auto w-full object-cover object-center dark:block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesV2.displayName = 'FeaturesV2';
export default FeaturesV2;
