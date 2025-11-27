import { cn } from '@/utils/cn';
import feature1 from '@public/images/home-page-31/feature-1.png';
import feature2 from '@public/images/home-page-31/feature-2.png';
import feature3 from '@public/images/home-page-31/feature-3.png';
import feature4 from '@public/images/home-page-31/feature-4.png';
import feature5 from '@public/images/home-page-31/feature-5.png';
import feature1Dark from '@public/images/home-page-31/feature-dark-1.png';
import feature2Dark from '@public/images/home-page-31/feature-dark-2.png';
import feature3Dark from '@public/images/home-page-31/feature-dark-3.png';
import feature4Dark from '@public/images/home-page-31/feature-dark-4.png';
import feature5Dark from '@public/images/home-page-31/feature-dark-5.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const features = [
  {
    id: 1,
    title: 'Live activity tracking',
    description:
      'Live activity tracking allows you to stay connected in real-time with every movement and update that matters.',
    image: feature1,
    imageDark: feature1Dark,
    alt: 'feature-1',
  },
  {
    id: 2,
    title: 'Team collaboration tools',
    description:
      "In today's fast-paced digital workspace, effective communication and seamless collaboration are essential.",
    image: feature2,
    imageDark: feature2Dark,
    alt: 'feature-2',
  },
  {
    id: 3,
    title: 'Automated timesheets',
    description:
      'Say goodbye to manual entries and time-consuming spreadsheets. Our automated timesheet system streamlines your workflow.',
    image: feature3,
    imageDark: feature3Dark,
    alt: 'feature-3',
  },
  {
    id: 4,
    title: 'Seamless integrations',
    description:
      'Easily connect with the tools and platforms you already use. Our system is designed to integrate effortlessly.',
    image: feature4,
    imageDark: feature4Dark,
    alt: 'feature-4',
  },
  {
    id: 5,
    title: 'Customizable workflows',
    description:
      "Tailor every step of your process to match your team's unique needs. With customizable workflows, efficiency is at your fingertips.",
    image: feature5,
    imageDark: feature5Dark,
    alt: 'feature-5',
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-[100px] xl:py-[200px] bg-background-3 dark:bg-background-6">
      <div className="main-container">
        <div className="space-y-5 mb-10 md:mb-[72px] text-center lg:max-w-[570px] lg:mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2">Features</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Powerful features to elevate your business</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-x-8 gap-y-14">
          {features.map((feature, index) => (
            <RevealAnimation key={feature.id} delay={0.3 + index * 0.1}>
              <article
                className={cn(
                  'space-y-3 col-span-12 md:col-span-6 lg:col-span-4',
                  index === 3 ? 'lg:col-start-3' : index === 4 ? 'lg:col-start-7' : '',
                )}>
                <figure className="rounded-[12px] overflow-hidden max-w-full lg:max-w-[408px]">
                  <Image
                    src={feature.image}
                    className="w-full h-full object-cover block dark:hidden"
                    alt={feature.alt}
                    width={408}
                    height={300}
                  />
                  <Image
                    src={feature.imageDark}
                    className="w-full h-full object-cover hidden dark:block"
                    alt={feature.alt}
                    width={408}
                    height={300}
                  />
                </figure>
                <div className="max-md:space-y-0.5">
                  <h3 className="text-heading-6 md:text-heading-5">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
