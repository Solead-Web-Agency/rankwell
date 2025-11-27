import feature1Dark from '@public/images/home-page-32/feature-1-dark.png';
import feature1 from '@public/images/home-page-32/feature-1.png';
import feature2Dark from '@public/images/home-page-32/feature-2-dark.png';
import feature2 from '@public/images/home-page-32/feature-2.png';
import feature3Dark from '@public/images/home-page-32/feature-3-dark.png';
import feature3 from '@public/images/home-page-32/feature-3.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  darkImage: StaticImageData;
  alt: string;
}

const featuresData: FeatureItem[] = [
  {
    id: 1,
    title: 'SQL-based analytics',
    description: 'Power for advanced teams who want full control over data.',
    image: feature1,
    darkImage: feature1Dark,
    alt: 'SQL-based analytics interface',
  },
  {
    id: 2,
    title: 'Interactive dashboards',
    description: 'Drag-and-drop simplicity meets deep functionality.',
    image: feature2,
    darkImage: feature2Dark,
    alt: 'Interactive dashboard interface',
  },
  {
    id: 3,
    title: 'Great usability design',
    description: 'Beautiful, responsive interfaces your whole team will love.',
    image: feature3,
    darkImage: feature3Dark,
    alt: 'Usability design interface',
  },
];

const FeatureV2 = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="py-[100px] bg-background-1 dark:bg-background-6">
        <div className="main-container">
          <div className="text-center space-y-3 md:mb-[70px] mb-10">
            <RevealAnimation delay={0.1}>
              <h2>A smarter way to work with data</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p>Everything you need to create, share, and act on insights.</p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 lg:gap-14 md:gap-10 gap-y-14 justify-items-center items-center">
            {featuresData.map((feature, index) => {
              const colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-4';
              const maxWidthClass =
                index === 0 ? 'md:max-w-[227px]' : index === 1 ? 'md:max-w-[245px]' : 'md:max-w-[261px]';

              return (
                <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
                  <div className={colSpanClass}>
                    <div className="space-y-6 md:space-y-8 lg:space-y-11">
                      <figure className="sm:max-w-[393px] sm:mx-0 mx-auto w-full">
                        <Image
                          className="w-full h-full object-contain dark:hidden"
                          src={feature.image}
                          alt={feature.alt}
                        />
                        <Image
                          className="w-full h-full object-contain dark:block hidden"
                          src={feature.darkImage}
                          alt={feature.alt}
                        />
                      </figure>
                      <div className="space-y-2 text-left">
                        <h3 className="md:text-heading-5 text-heading-6">{feature.title}</h3>
                        <p className={maxWidthClass}>{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default FeatureV2;
