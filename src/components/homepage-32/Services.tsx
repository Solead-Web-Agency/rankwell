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
    icon: 'ns-shape-46',
    title: 'Identify patterns',
    description: 'Spot trends and behaviors hidden in your financial data.',
  },
  {
    id: 2,
    icon: 'ns-shape-44',
    title: 'Improve team performance',
    description: 'Spot trends and behaviors hidden in your financial data.',
  },
  {
    id: 3,
    icon: 'ns-shape-48',
    title: 'Accelerate growth with insights.',
    description: 'Make faster, data-backed moves that fuel business growth.',
  },
];

const Services = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="xl:pt-[200px] md:pt-[130px] sm:pt-[100px] pt-[90px] md:pb-[100px] pb-[50px]">
        <div className="main-container">
          <div className="text-center space-y-3 md:mb-[70px] mb-11">
            <RevealAnimation delay={0.1}>
              <h2 className="lg:max-w-[828px] md:max-w-[500px] sm:max-w-[450px] max-w-[400px] mx-auto">
                Empower everyone to make data-driven decisions
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="md:max-w-[600px] sm:max-w-[450px] max-w-[390px] mx-auto">
                NextSaaS offers a smarter approach to managing your digital assets by providing intuitive tools and
                expert guidance tailored to your needs.
              </p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 lg:gap-9 md:gap-8 gap-y-6 lg:mb-14 mb-10">
            {servicesData.map((service, index) => {
              const colSpanClass =
                index === 2 ? 'col-span-12 lg:col-span-4 md:col-span-12' : 'col-span-12 lg:col-span-4 md:col-span-6';

              return (
                <RevealAnimation key={service.id} delay={0.3 + index * 0.1}>
                  <div className={colSpanClass}>
                    <div className="bg-background-2 dark:bg-background-5 rounded-[20px] sm:p-8 p-6 sm:space-y-6 space-y-4">
                      <div>
                        <span
                          className={`${service.icon} sm:text-[52px] text-[40px] text-secondary dark:text-accent`}></span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="sm:text-heading-5 text-heading-6 line-clamp-1">{service.title}</h3>
                        <p className="max-w-[273px]">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
          <RevealAnimation delay={0.6}>
            <div className="flex items-center justify-center">
              <LinkButton
                href="/pricing-01"
                className="btn btn-secondary dark:btn-transparent hover:btn-primary btn-md w-[90%] md:w-auto mx-auto md:mx-0">
                Start your free trial today
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;
