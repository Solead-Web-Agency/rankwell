import feature1 from '@public/images/home-page-26/feature-1.png';
import feature2 from '@public/images/home-page-26/feature-2.png';
import feature3 from '@public/images/home-page-26/feature-3.png';
import featureDark1 from '@public/images/home-page-26/feature-dark-1.png';
import featureDark2 from '@public/images/home-page-26/feature-dark-2.png';
import featureDark3 from '@public/images/home-page-26/feature-dark-3.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageDark: StaticImageData;
}

const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Billing & invoicing',
    description: 'Create comprehensive receipts that include itemized purchases, taxes, and discounts',
    image: feature1,
    imageDark: featureDark1,
  },
  {
    id: '2',
    title: 'Supplier management',
    description: 'Monitor your suppliers, manage purchase orders seamlessly, and keep an eye on your',
    image: feature2,
    imageDark: featureDark2,
  },
  {
    id: '3',
    title: 'Cloud-based accessibility',
    description: 'Easily view your POS dashboard from any device, allowing you to manage sales',
    image: feature3,
    imageDark: featureDark3,
  },
];

const Features = () => {
  return (
    <section className="lg:py-[100px] py-[50px] bg-background-1 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-5 mb-10 md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">More Features</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Key Features</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[578px] mx-auto">
                Our platform is designed with a focus on performance, usability, and innovation, delivering a seamless
                experience tailored to modern needs.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 xl:gap-14 lg:gap-10 md:gap-8 gap-y-8 items-start">
          {featuresData.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.4 + index * 0.1}>
              <div className="col-span-12 md:col-span-4">
                <div className="xl:space-y-11 md:space-y-8 space-y-6">
                  <figure className="md:max-w-[393px] md:mx-0 mx-auto w-full">
                    <Image className="size-full object-cover dark:hidden" src={feature.image} alt="features" />
                    <Image
                      className="size-full object-cover hidden dark:block"
                      src={feature.imageDark}
                      alt="features"
                    />
                  </figure>
                  <div className="space-y-2 text-left">
                    <h3 className="xl:text-heading-5 text-heading-6">{feature.title}</h3>
                    <p className="lg:text-tagline-1 text-tagline-2 md:max-w-full max-w-[340px] mx-auto md:mx-0">
                      {feature.description}
                    </p>
                  </div>
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
