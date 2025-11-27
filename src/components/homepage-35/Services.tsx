'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: 'ns-shape-3',
    title: 'Trustless by design',
    description: 'No banks, no brokers. your assets are secured by smart contracts, not gatekeepers.',
  },
  {
    id: 2,
    icon: 'ns-shape-35',
    title: 'Built on proven tech',
    description: 'Audited protocols, hardened smart contracts, and years of real-world uptime.',
  },
  {
    id: 3,
    icon: 'ns-shape-46',
    title: 'Globally borderless',
    description: 'No more limitations NextSaaS works wherever you are, whenever you need it.',
  },
];

const Services = () => {
  return (
    <section className="lg:py-[150px] md:py-[100px] py-[50px] bg-background-2 dark:bg-background-5">
      <div className="main-container">
        {/* Header Section */}
        <div className="text-center space-y-3 mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2 className="md:max-w-[828px] sm:max-w-[600px] max-[375px]:max-w-[270px] mx-auto">
              Why NextSaaS is the smarter way to manage your digital assets.
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="md:max-w-[606px] sm:max-w-[400px] max-w-[390px] mx-auto">
              NextSaaS offers a smarter approach to managing your digital assets by providing intuitive tools and expert
              guidance tailored to your needs.
            </p>
          </RevealAnimation>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-12 lg:gap-9 md:gap-8 gap-y-6 mb-14">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn('col-span-12 lg:col-span-4', index < 2 ? 'md:col-span-6' : 'md:col-span-12')}>
              <RevealAnimation delay={0.3 + index * 0.1}>
                <div className="bg-white dark:bg-background-6 rounded-[20px] sm:p-8 p-6 sm:space-y-6 space-y-4">
                  {/* Service Icon */}
                  <div>
                    <span
                      className={cn(service.icon, 'sm:text-[52px] text-[40px] text-secondary dark:text-accent')}></span>
                  </div>

                  {/* Service Content */}
                  <div className="space-y-2">
                    <h3 className="sm:text-heading-5 text-heading-6">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="flex items-center justify-center">
          <RevealAnimation delay={0.6}>
            <LinkButton
              href="/our-services-02"
              className="btn hover:btn-secondary dark:hover:btn-accent btn-primary btn-md">
              <span>Explore the platform</span>
            </LinkButton>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
