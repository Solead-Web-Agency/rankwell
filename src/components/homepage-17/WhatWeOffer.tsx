import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import StackCardItem from '../ui/stack-card/StackCardItem';
import StackCardWrapper from '../ui/stack-card/StackCardWrapper';

// Interface for service data
interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    id: 'mobile-app',
    icon: 'ns-shape-34',
    title: 'Mobile app development.',
    description: 'Native iOS & android apps built for performance and scalability.',
  },
  {
    id: 'web-app',
    icon: 'ns-shape-38',
    title: 'Web app development.',
    description: 'Fast, secure, and scalable web applications for all industries.',
  },
  {
    id: 'ui-ux',
    icon: 'ns-shape-35',
    title: 'UI/UX design.',
    description: 'Intuitive and engaging interfaces that boost user satisfaction.',
  },
  {
    id: 'mvp-prototype',
    icon: 'ns-shape-17',
    title: 'MVP & prototype development.',
    description: 'Validate your product idea before investing heavily.',
  },
  {
    id: 'maintenance',
    icon: 'ns-shape-25',
    title: 'Maintenance & support.',
    description: 'Ongoing support and performance optimization post-launch.',
  },
];

const WhatWeOffer = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[200px]">
      <RevealAnimation delay={0.1}>
        <div className="max-w-[1440px] bg-background-3 dark:bg-background-7 rounded-[30px] py-20 md:py-[100px] mx-auto">
          <div className="main-container">
            <div className="flex flex-col md:flex-row items-start gap-y-24 gap-x-[140px]">
              <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left space-y-7 lg:space-y-14">
                <RevealAnimation delay={0.3}>
                  <span className="badge badge-primary-light mb-5">What we offer</span>
                </RevealAnimation>
                <div className="space-y-2 md:max-w-[595px]">
                  <RevealAnimation delay={0.4}>
                    <h2>End-to-end app development services.</h2>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <p>Everything you need to launch, grow, and scale a successful app.</p>
                  </RevealAnimation>
                </div>
                <RevealAnimation delay={0.6}>
                  <div>
                    <LinkButton
                      href="/our-services-01"
                      className="btn btn-white btn-lg lg:btn-xl w-[90%] md:w-auto mx-auto md:mx-0 dark:btn-transparent hover:btn-secondary dark:hover:btn-accent">
                      Explore our services
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <StackCardWrapper
                topOffset="15vh"
                gap="24px"
                initDelay={100}
                className="w-full lg:flex-1 lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto">
                {servicesData.map((service) => (
                  <StackCardItem key={service.id}>
                    <div className="border border-stroke-1/90 dark:border-stroke-5 bg-white dark:bg-background-6 rounded-[20px] space-y-6 p-8 h-full flex flex-col justify-center">
                      <span className={`block ${service.icon} text-heading-2 text-secondary dark:text-accent`} />
                      <div className="space-y-2">
                        <h3 className="text-heading-5">{service.title}</h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </StackCardItem>
                ))}
              </StackCardWrapper>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default WhatWeOffer;
