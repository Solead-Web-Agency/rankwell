'use client';
import whyUsImageDark from '@public/images/home-page-32/why-us-dark.png';
import whyUsImage from '@public/images/home-page-32/why-us.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface FeatureItem {
  id: number;
  icon: string;
  title: string;
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    icon: 'ns-shape-7',
    title: 'No coding or technical skills required',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'No-code + low-code workflows',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Web & mobile optimization',
  },
  {
    id: 4,
    icon: 'ns-shape-8',
    title: 'Real-time data visualization tools',
  },
];

const FeatureV3 = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="lg:py-[200px] md:py-[100px] py-20">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-y-10 md:gap-y-18 lp:gap-[100px] lg:gap-y-20 items-center">
            <div className="col-span-12 lp:col-span-5 lg:col-span-6">
              <div className="flex lg:flex-col md:flex-row flex-col lg:gap-y-14 gap-10 justify-between">
                <div className="space-y-7">
                  <div className="space-y-3 lg:max-w-[521px] md:max-w-[450px]">
                    <RevealAnimation delay={0.1}>
                      <h2>Why data-driven teams choose us</h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.2}>
                      <p>
                        Your lifestyle is unique—your insurance should be too. our team helps you find the perfect
                        policy by analyzing your needs.
                      </p>
                    </RevealAnimation>
                  </div>
                </div>
                <div>
                  <ul className="sm:space-y-2">
                    {featureItems.map((feature, index) => (
                      <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                        <li className="py-2 flex items-center gap-3">
                          <div className="inline-block">
                            <span
                              className={`${feature.icon} sm:text-[36px] text-[24px] text-secondary dark:text-accent`}></span>
                          </div>
                          <span className="xl:text-heading-6 sm:text-tagline-1 text-tagline-2 font-normal text-secondary dark:text-accent">
                            {feature.title}
                          </span>
                        </li>
                      </RevealAnimation>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lp:col-span-7 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="left">
                <figure className="relative lg:max-w-[668px] w-full">
                  <Image
                    src={whyUsImage}
                    alt="Why data-driven teams choose us"
                    className="w-full h-full object-cover dark:hidden"
                  />
                  <Image
                    src={whyUsImageDark}
                    alt="Why data-driven teams choose us"
                    className="w-full h-full object-cover hidden dark:block"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeatureV3;
