import { cn } from '@/utils/cn';
import selectUsDark from '@public/images/home-page-27/select-us-dark.png';
import selectUs from '@public/images/home-page-27/select-us.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const featuresData = [
  {
    id: 1,
    icon: 'ns-shape-8',
    title: 'Ai-powered recommendations',
  },
  {
    id: 2,
    icon: 'ns-shape-9',
    title: 'Seamless tenant communication',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Automated rent collection',
  },
  {
    id: 4,
    icon: 'ns-shape-21',
    title: 'Integrated hosting and application deployment',
  },
];

const Features = () => {
  return (
    <section className="xl:py-[200px] md:py-[100px] py-[50px] bg-white dark:bg-background-5">
      <div className="main-container">
        <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20 gap-y-10 items-center lg:max-w-full max-w-[720px] mx-auto lg:mx-0">
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <RevealAnimation delay={0.2} offset={100}>
              <figure className="lg:max-w-[647px] md:max-w-[550px] max-w-[450px] w-full mx-auto">
                <Image src={selectUs} alt="reasons to select us" className="w-full h-full object-cover dark:hidden" />
                <Image
                  src={selectUsDark}
                  alt="reasons to select us"
                  className="w-full h-full object-cover hidden dark:block"
                />
              </figure>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <div className="space-y-8">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <span className="badge badge-green">Reasons to select us</span>
                </RevealAnimation>

                <div className="space-y-3">
                  <RevealAnimation delay={0.2}>
                    <h2 className="xl:max-w-full max-w-[420px]">
                      Why <span className="text-primary-500">thousands trust </span> us to build their apps
                    </h2>
                  </RevealAnimation>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  {featuresData.map((feature, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} key={feature.id}>
                      <li className="xl:py-3 py-2 flex items-center gap-4">
                        <div>
                          <span className={cn('text-[36px] text-secondary dark:text-accent', feature.icon)} />
                        </div>
                        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                          {feature.title}
                        </span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
