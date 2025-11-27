import featureImg01Dark from '@public/images/home-page-14/feature-img-01-dark.png';
import featureImg01 from '@public/images/home-page-14/feature-img-01.png';
import featureImg02Dark from '@public/images/home-page-14/feature-img-02-dark.png';
import featureImg02 from '@public/images/home-page-14/feature-img-02.png';
import featureImg03 from '@public/images/home-page-14/feature-img-03.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    id: 1,
    title: 'Flexible loan terms',
    description: 'Choose repayment terms that align with your budget and life goals.',
    img: featureImg01,
    darkImg: featureImg01Dark,
    alt: 'Flexible loan terms illustration',
  },
  {
    id: 2,
    title: 'Streamlined application process',
    description: 'Apply quickly and easily with minimal paperwork required.',
    img: featureImg02,
    darkImg: featureImg02Dark,
    alt: 'Application process visualization',
  },
  {
    id: 3,
    title: 'Trusted financial guidance',
    description: 'Access expert advice to make confident borrowing decisions.',
    img: featureImg03,
    darkImg: null,
    alt: 'Trusted financial guidance example',
    extraClass: 'md:col-start-4',
  },
];

const Feature = () => {
  return (
    <section className="py-16 md:py-[90px] lg:py-[100px]" aria-label="Mortgage Features">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* heading  */}
          <div className="max-w-[774px] mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="features-heading">Designed for every homebuyer.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>
                Whether you need a new visual identity, a high-performing website, or a design system, I offer creative
                services tailored to help your brand grow with clarity and confidence.
              </p>
            </RevealAnimation>
          </div>

          {/* features container  */}
          <div className="grid grid-cols-12 items-center justify-center gap-y-8 md:gap-x-8">
            {features.map((feature, idx) => (
              <RevealAnimation key={feature.id} delay={0.4 + idx * 0.1}>
                <div
                  className={`p-6 sm:p-8 bg-white h-full dark:bg-background-6 rounded-[20px] space-y-6 col-span-12 md:col-span-6 lg:col-span-4 ${
                    feature.extraClass || ''
                  }`}>
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>

                  <figure className="max-w-[344px] w-full rounded-2xl overflow-hidden">
                    <Image
                      src={feature.img}
                      className={`size-full object-cover ${feature.darkImg ? 'dark:hidden' : ''}`}
                      alt={feature.alt}
                    />
                    {feature.darkImg && (
                      <Image
                        src={feature.darkImg}
                        className="size-full object-cover hidden dark:block"
                        alt={feature.alt}
                      />
                    )}
                  </figure>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
