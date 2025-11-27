import feature1Dark from '@public/images/home-page-30/feature-1-dark.png';
import feature1 from '@public/images/home-page-30/feature-1.png';
import feature2Dark from '@public/images/home-page-30/feature-2-dark.png';
import feature2 from '@public/images/home-page-30/feature-2.png';
import feature3Dark from '@public/images/home-page-30/feature-3-dark.png';
import feature3 from '@public/images/home-page-30/feature-3.png';
import feature4Dark from '@public/images/home-page-30/feature-4-dark.png';
import feature4 from '@public/images/home-page-30/feature-4.png';
import feature5Dark from '@public/images/home-page-30/feature-5-dark.png';
import feature5 from '@public/images/home-page-30/feature-5.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    title: 'Real-time threat protection',
    description: 'Auto-assign tasks &amp; updates in real-time',
    image: feature1,
    imageDark: feature1Dark,
  },
  {
    id: 2,
    title: 'One-click optimization',
    description: 'Mobile reporting, automated work orders',
    image: feature2,
    imageDark: feature2Dark,
  },
  {
    id: 3,
    title: 'Privacy shield',
    description: 'Custom forms, AI damage detection feature',
    image: feature3,
    imageDark: feature3Dark,
  },
  {
    id: 4,
    title: 'Software updater',
    description: 'Track usage &amp; sync costs with QuickBooks',
    image: feature4,
    imageDark: feature4Dark,
  },
  {
    id: 5,
    title: 'Cross-platform compatibility',
    description: 'Automated check-ins, in-app communication',
    image: feature5,
    imageDark: feature5Dark,
  },
];

const FeatureV4 = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[75px] bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="space-y-3 mb-[70px] text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mx-auto max-w-[578px]">Features that set NexSaaS apart</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="max-w-[860px] mx-auto">
              At NexSaaS, innovation isn&apos;t just a buzzword — it&apos;s at the core of everything we do. What truly
              sets us apart is our commitment to providing cutting-edge solutions tailored to meet the evolving needs of
              modern
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-5">
          {data.map((item, index) => (
            <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
              <article className={`col-span-12 md:col-span-6 lg:col-span-4 ${item.id === 4 ? 'lg:col-start-3' : ''}`}>
                <div className="rounded-[20px] overflow-hidden bg-white dark:bg-background-9">
                  <figure className="max-w-full w-full rounded-[20px] overflow-hidden">
                    <Image
                      src={item.image}
                      className="w-full h-full object-cover dark:hidden"
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                    <Image
                      src={item.imageDark}
                      className="w-full h-full object-cover hidden dark:block"
                      alt={item.title}
                      width={400}
                      height={300}
                    />
                  </figure>
                  <div className="px-6 py-8">
                    <h3 className="xl:text-heading-5 text-heading-6">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureV4;
