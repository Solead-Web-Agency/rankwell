import features2Dark from '@public/images/home-page-3/features-2-dark.png';
import features2 from '@public/images/home-page-3/features-2.png';
import subFeatures4 from '@public/images/home-page-3/sub-features-4.png';
import subFeatures5 from '@public/images/home-page-3/sub-features-5.png';
import subFeatures6 from '@public/images/home-page-3/sub-features-6.png';
import subFeatures7 from '@public/images/home-page-3/sub-features-7.png';
import subFeatures8 from '@public/images/home-page-3/sub-features-8.png';
import subFeatures9 from '@public/images/home-page-3/sub-features-9.png';
import subFeaturesDark4 from '@public/images/home-page-3/sub-features-dark-4.png';
import subFeaturesDark5 from '@public/images/home-page-3/sub-features-dark-5.png';
import subFeaturesDark6 from '@public/images/home-page-3/sub-features-dark-6.png';
import subFeaturesDark7 from '@public/images/home-page-3/sub-features-dark-7.png';
import subFeaturesDark8 from '@public/images/home-page-3/sub-features-dark-8.png';
import subFeaturesDark9 from '@public/images/home-page-3/sub-features-dark-9.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Benefits = () => {
  return (
    <section className="py-16 md:py-[100px] lg:pt-[90px] xl:pt-[100px] lg:pb-[100px] xl:pb-[200px]">
      <div className="main-container">
        {/* Benefits Section */}
        <div className="flex flex-col gap-y-10 md:gap-x-[70px] items-center md:flex-row-reverse justify-between">
          <div className="w-full md:w-1/2">
            <div className="mb-13 text-center md:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan mb-5">Benefits</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="mb-3">Meet customers where they are</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[596px]">
                  Deliver fast, seamless interactions with our AI-powered messaging platform—instant support, automated
                  responses, and reduced wait times for meaningful engagement.
                </p>
              </RevealAnimation>
            </div>
            <ul className="list-none">
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-3 py-2">
                  <span className="ns-shape-3 text-[36px] text-secondary dark:text-accent"> </span>
                  <div>
                    <p className="font-medium text-secondary dark:text-accent">Loyalty</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Strengthen customer relationships with contextual, real-time conversations.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-3 py-2">
                  <span className="ns-shape-47 text-[36px] text-secondary dark:text-accent"> </span>
                  <div>
                    <p className="font-medium text-secondary dark:text-accent">Speed</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Automate routine queries and let agents step in when needed.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="flex items-center gap-3 py-2">
                  <span className="ns-shape-23 text-[36px] text-secondary dark:text-accent"> </span>
                  <div>
                    <p className="font-medium text-secondary dark:text-accent">Personalization</p>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">
                      Use customer data to initiate tailored, interactive conversations.
                    </p>
                  </div>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* Features Image */}
          <div className="relative w-full md:w-1/2">
            <RevealAnimation delay={0.8}>
              <figure className="max-w-[452px] h-auto justify-self-end">
                <Image
                  src={features2}
                  alt="features Images"
                  className="w-full h-full object-cover object-center block dark:hidden"
                />
                <Image
                  src={features2Dark}
                  alt="features Images"
                  className="w-full h-full object-cover object-center hidden dark:block"
                />
              </figure>
            </RevealAnimation>
            <div className="absolute flex flex-col items-center z-20 top-[55%] left-[2%] 2xl:-left-[8.5%]">
              <RevealAnimation delay={0.9}>
                <figure className="max-w-[320px] rounded-2xl overflow-hidden self-end h-[74px]">
                  <Image
                    src={subFeatures4}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-3 object-cover block dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark4}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-3 object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1}>
                <figure className="max-w-[320px] rounded-2xl overflow-hidden h-[74px] my-3">
                  <Image
                    src={subFeatures5}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-3 object-cover block dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark5}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-3 object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1.1}>
                <figure className="max-w-[300px] rounded-2xl overflow-hidden relative z-40 max-h-[72px] hidden md:block">
                  <Image
                    src={subFeatures6}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover block dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark6}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1.2} start="top 96%">
                <figure className="max-w-[280px] rounded-2xl overflow-hidden max-h-[72px] -mt-[37px] z-30 hidden md:block">
                  <Image
                    src={subFeatures7}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover block dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark7}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1.3} start="top 96%">
                <figure className="max-w-[260px] rounded-2xl overflow-hidden max-h-[72px] -mt-[37px] z-20 hidden lg:block">
                  <Image
                    src={subFeatures8}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover block dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark8}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1.4} start="top 96%">
                <figure className="max-w-[240px] rounded-2xl overflow-hidden max-h-[72px] -mt-[37px] hidden lg:block">
                  <Image
                    src={subFeatures9}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover block dark:hidden"
                  />
                  <Image
                    src={subFeaturesDark9}
                    alt="Sub features"
                    className="w-full h-auto object-center shadow-2 object-cover hidden dark:block"
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

export default Benefits;
