import Gradient6 from '@public/images/gradient/gradient-6.png';
import Feature1Dark from '@public/images/home-page-22/feature-1-dark.svg';
import Feature1 from '@public/images/home-page-22/feature-1.svg';
import Feature2Dark from '@public/images/home-page-22/feature-2-dark.svg';
import Feature2 from '@public/images/home-page-22/feature-2.svg';
import Feature3Dark from '@public/images/home-page-22/feature-3-dark.svg';
import Feature3 from '@public/images/home-page-22/feature-3.svg';
import Feature4Dark from '@public/images/home-page-22/feature-4-dark.png';
import Feature4 from '@public/images/home-page-22/feature-4.png';
import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  imageDark: StaticImageData | string;
}

const featuresData: Feature[] = [
  {
    id: '1',
    title: 'Keep all data protected',
    description: 'End-to-end encrypted & centrally managed',
    image: Feature1,
    imageDark: Feature1Dark,
  },
  {
    id: '2',
    title: 'Multi-device support',
    description: 'Manage tablets, phones & rugged devices',
    image: Feature2,
    imageDark: Feature2Dark,
  },
  {
    id: '3',
    title: 'Team collaboration',
    description: 'Shared dashboards & role-based access',
    image: Feature3,
    imageDark: Feature3Dark,
  },
  {
    id: '4',
    title: 'Seamless sync & backup',
    description: 'Continuous performance, zero disruptions',
    image: Feature4,
    imageDark: Feature4Dark,
  },
];

const FeatureV2 = () => {
  return (
    <section
      className="relative xl:py-[200px] lg:py-[100px] md:py-20 py-16 bg-background-2 dark:bg-background-5"
      aria-label="Hero section">
      <div className="main-container">
        <div className="grid grid-cols-12 md:gap-8 sm:gap-5 gap-y-6">
          <RevealAnimation delay={0.1}>
            <div className="col-span-12 xl:col-span-8">
              <div className="lg:px-14 lg:py-[42px] md:px-8 md:py-8 px-5 py-5 rounded-[20px] lg:min-h-[408px] md:min-h-[340px] min-h-[250px] bg-white dark:bg-background-8 relative overflow-hidden">
                <RevealAnimation delay={0.2} direction="up" start="top 50%" offset={200}>
                  <figure className="absolute -top-[50%] xl:-right-[30%] lg:-right-[25%] md:-right-[39%] -right-[78%] -rotate-[255deg] h-full opacity-70 -z-0 pointer-events-none select-none max-w-[400px] max-h-[408px] w-full">
                    <Image src={Gradient6} alt="gradient" />
                  </figure>
                </RevealAnimation>
                <div className="lg:space-y-14 md:space-y-8 space-y-5">
                  <div className="space-y-3">
                    <h3 className="lg:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5 max-w-[503px] w-full">
                      Supercharge your app management
                    </h3>
                    <p className="max-w-[592px] w-full">
                      Modern tools make managing your money simpler than ever. From clear, customizable budgets to smart
                      savings goals
                    </p>
                  </div>
                  <div>
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md w-[85%] md:w-auto mx-auto md:mx-0">
                      Try the app for Free
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {featuresData.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.2 + index * 0.1}>
              <div className="col-span-12 xl:col-span-4 sm:col-span-6">
                <div className="md:p-8 p-5 rounded-[20px] lg:min-h-[408px] bg-white dark:bg-background-8 space-y-6">
                  <div className="space-y-1">
                    <h3 className="md:text-heading-5 text-heading-6">{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                  <figure className="xl:max-w-[344px] max-w-full w-full rounded-2xl overflow-hidden">
                    <Image src={feature.image as string} alt="feature" className="size-full dark:hidden" />
                    <Image src={feature.imageDark as string} alt="feature" className="size-full hidden dark:block" />
                  </figure>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
