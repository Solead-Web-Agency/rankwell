import featureAsset1 from '@public/images/home-page-7/feature-asset-1.png';
import featureAsset2 from '@public/images/home-page-7/feature-asset-2.png';
import featureAsset3 from '@public/images/home-page-7/feature-asset-3.png';
import featureAsset4 from '@public/images/home-page-7/feature-asset-4.png';
import featureAsset5 from '@public/images/home-page-7/feature-asset-5.png';
import featureAsset6 from '@public/images/home-page-7/feature-asset-6.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    title: 'Trusted by 20k+ Customers',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis sed duis duis purus quisque.',
    img: featureAsset1,
  },
  {
    id: 2,
    title: 'Tailored billing solutions',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis sed duis duis purus quisque.',
    img: featureAsset2,
  },
  {
    id: 3,
    title: 'Inventory oversight',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis sed duis duis purus quisque.',
    img: featureAsset3,
  },
  {
    id: 4,
    title: 'Smartphone application',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis sed duis duis purus quisque.',
    img: featureAsset4,
  },
  {
    id: 5,
    title: 'Structured expenses',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis sed duis duis purus quisque.',
    img: featureAsset5,
  },
  {
    id: 6,
    title: 'Analytics and reports',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis sed duis duis purus quisque.',
    img: featureAsset6,
  },
];

const Features = () => {
  return (
    <section className="pb-[100px] pt-[100px] overflow-hidden">
      <div className="main-container">
        <div className="text-center space-y-3 mb-14">
          <RevealAnimation delay={0.3}>
            <h2 className="max-w-[742px] mx-auto">Everything you need to succeed. All in one platform.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[482px] mx-auto">
              NextSaaS gives you powerful, easy-to-use tools to help you grow, optimize, and scale your business—without
              the overwhelm.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 max-md:gap-y-8 md:gap-8">
          {data.map((feature, index) => (
            <RevealAnimation delay={0.5 + index * 0.1} key={feature.id}>
              <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-background-2 dark:bg-background-5 space-y-6 p-6 rounded-[20px]">
                <figure className="max-w-[360px] w-full">
                  <Image src={feature.img} alt={feature.title} className="w-full h-full object-cover rounded-2xl" />
                </figure>
                <div className="space-y-1">
                  <h3 className="text-heading-5">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
