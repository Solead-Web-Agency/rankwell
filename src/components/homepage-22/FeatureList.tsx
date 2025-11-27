import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    id: '1',
    icon: 'ns-shape-35',
    title: 'Product analytics & device insights',
    description: 'Make better decisions with detailed usage reporting.',
  },
  {
    id: '2',
    icon: 'ns-shape-11',
    title: 'Creative policy control',
    description: 'Customize user roles, usage limits, and location rules.',
  },
  {
    id: '3',
    icon: 'ns-shape-34',
    title: 'Smart feature development',
    description: 'Enterprise-level security features, are constantly updated.',
  },
  {
    id: '4',
    icon: 'ns-shape-40',
    title: 'Easy deployment & recovery',
    description: 'Easily set up, fix, or reset your devices from anywhere!',
  },
];

const FeatureList = () => {
  return (
    <div className="lg:pt-[100px] pt-[50px]">
      <div className="space-y-14">
        <div className="space-y-3 text-center">
          <RevealAnimation delay={0.2}>
            <h3 className="lg:text-heading-2 md:text-heading-3 sm:text-heading-4 text-heading-5">
              What we can do for your device strategy
            </h3>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="lg:max-w-[472px] max-w-[350px] w-full mx-auto">
              From consulting to implementation, our solutions are built to transform the way you work.
            </p>
          </RevealAnimation>
        </div>
        <div className="xl:max-w-[1008px] w-full mx-auto">
          <div className="grid grid-cols-12 md:gap-8 gap-y-6 items-start">
            {featuresData.map((feature, index) => (
              <RevealAnimation key={feature.id} delay={0.4 + index * 0.1}>
                <div
                  className={cn(
                    index === 0 || index === 3 ? 'xl:col-span-7' : 'xl:col-span-5',
                    'col-span-12  md:col-span-6',
                  )}>
                  <div className="bg-background-2 dark:bg-background-5 sm:p-8 p-6 rounded-[20px] sm:space-y-6 space-y-4 md:min-h-[288px] flex justify-center flex-col">
                    <div>
                      <span className={`${feature.icon} md:text-[52px] text-[40px] text-secondary dark:text-accent`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="lg:text-heading-5 sm:text-heading-6 text-tagline-1">{feature.title}</h4>
                      <p className="w-full">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
        <RevealAnimation delay={0.8}>
          <div className="flex items-center justify-center">
            <LinkButton
              href="/contact-us"
              className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md w-[85%] md:w-auto mx-auto md:mx-0">
              Talk to an expert
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </div>
  );
};

export default FeatureList;
