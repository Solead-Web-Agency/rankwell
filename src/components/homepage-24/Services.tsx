import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const services = [
  {
    id: '1',
    icon: 'ns-shape-35',
    title: 'Health insurance',
    description: 'Tailored health plans that evolve with your needs—individual or family coverage.',
  },
  {
    id: '2',
    icon: 'ns-shape-11',
    title: 'Life insurance',
    description: 'Secure your loved ones’ future with competitive policies and dependable support.',
  },
  {
    id: '3',
    icon: 'ns-shape-34',
    title: 'Auto insurance',
    description: 'Protect your vehicle with comprehensive coverage options that suit your driving habits.',
  },
  {
    id: '4',
    icon: 'ns-shape-40',
    title: 'Home insurance',
    description: 'Protect your property and possessions with fast claims and flexible plans.',
  },
  {
    id: '5',
    icon: 'ns-shape-35',
    title: 'Auto insurance',
    description: 'Reliable coverage with expert support and easy claims—get back on the road quickly.',
  },
  {
    id: '6',
    icon: 'ns-shape-47',
    title: 'Life insurance',
    description: 'Provide financial security for your loved ones with comprehensive policies tailored to your needs.',
  },
];

const Services = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="text-center space-y-4 md:space-y-5 max-w-[850px] mx-auto lg:mb-14 mb-10">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Services</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3">One platform, multiple protections, personalized for you.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="max-w-[520px] mx-auto">
                Our platform offers a wide range of insurance solutions designed to adapt to your lifestyle and provide
                peace of mind.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-y-5 mb-14">
          {services.map((service, index) => (
            <RevealAnimation key={service.id} delay={0.5 + index * 0.1}>
              <div className="md:px-8 px-6 md:py-8 py-6 xl:py-14 rounded-[20px] bg-white dark:bg-background-6 space-y-6">
                <div>
                  <span className={cn('text-[40px] md:text-[52px] text-secondary dark:text-accent', service.icon)} />
                </div>
                <div className="space-y-1">
                  <h5 className="md:text-heading-5 text-heading-6">{service.title}</h5>
                  <p className="text-secondary/60 dark:text-accent/60">{service.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
        <RevealAnimation delay={1}>
          <div className="text-center">
            <LinkButton
              href="/contact-us"
              className="btn btn-secondary btn-md inline-block hover:btn-primary dark:btn-transparent w-[85%] md:w-auto mx-auto md:mx-0">
              Talk to an expert
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
