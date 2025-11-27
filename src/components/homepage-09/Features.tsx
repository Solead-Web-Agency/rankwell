import featureCardImg01DarkImage from '@public/images/home-page-9/feature-card-img-01-dark.png';
import featureCardImg01Image from '@public/images/home-page-9/feature-card-img-01.png';
import featureCardImg02DarkImage from '@public/images/home-page-9/feature-card-img-02-dark.png';
import featureCardImg02Image from '@public/images/home-page-9/feature-card-img-02.png';
import featureCardImg03DarkImage from '@public/images/home-page-9/feature-card-img-03-dark.png';
import featureCardImg03Image from '@public/images/home-page-9/feature-card-img-03.png';
import featureCardImg04DarkImage from '@public/images/home-page-9/feature-card-img-04-dark.png';
import featureCardImg04Image from '@public/images/home-page-9/feature-card-img-04.png';
import featureCardImg05DarkImage from '@public/images/home-page-9/feature-card-img-05-dark.png';
import featureCardImg05Image from '@public/images/home-page-9/feature-card-img-05.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    id: 1,
    light: featureCardImg01Image,
    dark: featureCardImg01DarkImage,
    alt: 'Fast and secure cloud upload feature',
    title: 'Fast & secure cloud upload',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 2,
    light: featureCardImg02Image,
    dark: featureCardImg02DarkImage,
    alt: 'Automated workflows feature',
    title: 'Automated workflows',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 3,
    light: featureCardImg03Image,
    dark: featureCardImg03DarkImage,
    alt: 'Smart search and AI insights feature',
    title: 'Smart search & AI insights',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 4,
    light: featureCardImg04Image,
    dark: featureCardImg04DarkImage,
    alt: 'Teamwork and leadership feature',
    title: 'Teamwork & leadership',
    desc: 'Store, access, and manage data from anywhere.',
  },
  {
    id: 5,
    light: featureCardImg05Image,
    dark: featureCardImg05DarkImage,
    alt: 'Custom dashboards feature',
    title: 'Custom dashboards',
    desc: 'Store, access, and manage data from anywhere.',
  },
];

const Features = () => {
  return (
    <section
      className="py-16 md:py-20 lg:py-[90px] xl:py-[100px] bg-background-3 dark:bg-background-7"
      aria-label="Features">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* feature heading  */}
          <div className="space-y-5 flex flex-col items-center justify-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-white">Features</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="max-w-[578px] text-heading-4 md:text-heading-2 text-center">
                Powerful features to elevate your business
              </h2>
            </RevealAnimation>
          </div>

          {/* feature cards  */}
          <div className="grid grid-cols-12 items-center justify-center sm:gap-x-8 gap-y-12 md:gap-y-[70px]">
            {features.map((feature, idx) => (
              <RevealAnimation key={feature.id} delay={0.3 + idx * 0.1}>
                <div
                  className={`space-y-3 lg:col-span-4 col-span-12 md:col-span-6 ${feature.id === 4 ? 'lg:col-start-3' : ''}`}>
                  {/* card image */}
                  <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-6 p-2.5">
                    <figure className="overflow-hidden rounded-xl">
                      <Image
                        src={feature.light}
                        alt={feature.alt}
                        className="w-full h-full object-cover dark:hidden"
                        loading="lazy"
                        width={409}
                        height={300}
                      />
                      <Image
                        src={feature.dark}
                        alt={feature.alt}
                        className="w-full h-full object-cover hidden dark:inline-block"
                        loading="lazy"
                        width={409}
                        height={300}
                      />
                    </figure>
                  </div>
                  {/* card content */}
                  <div className="space-y-1">
                    <h3 className="text-[22px] sm:text-heading-5">{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
