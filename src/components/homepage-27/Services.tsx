import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    icon: 'ns-shape-9',
    title: 'Effortless management',
    description: 'Automate workflows, lease tracking, and payments—all in one place.',
  },
  {
    id: 2,
    icon: 'ns-shape-3',
    title: 'Lead generation',
    description: 'AI-powered tools to attract and convert high-quality tenants and buyers.',
  },
  {
    id: 3,
    icon: 'ns-shape-12',
    title: 'Financial insights',
    description: 'Track revenue, expenses, and optimize ROI with real-time reporting.',
  },
];

const Services = () => {
  return (
    <section className="lg:py-[100px] py-[50px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-5 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Services</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>
                Core service <span className="text-primary-500">features</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[490px] mx-auto">
                We&apos;re here to help you every step of the way. Whether you&apos;re looking for detailed
                documentation, community forums
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-6">
          {servicesData.map((service, index) => (
            <RevealAnimation delay={0.4 + index * 0.1} key={service.id}>
              <div
                className={cn(index !== 2 ? 'col-span-12 lg:col-span-4 md:col-span-6' : 'col-span-12 lg:col-span-4')}>
                <div className="sm:p-8 p-6 bg-white dark:bg-background-9 rounded-[20px] sm:space-y-6 space-y-4 text-center hover:-translate-y-2 duration-500 ease-in-out">
                  <div className="w-fit mx-auto">
                    <span className={`${service.icon} md:text-[52px] text-[40px] text-secondary dark:text-accent`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="xl:text-heading-5 text-heading-6">{service.title}</h3>
                    <p className="line-clamp-2">{service.description}</p>
                  </div>
                  <div>
                    <LinkButton
                      href="/our-services-details"
                      className="btn btn-white dark:btn-transparent hover:btn-secondary dark:hover:btn-accent btn-md">
                      View service
                    </LinkButton>
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

export default Services;
