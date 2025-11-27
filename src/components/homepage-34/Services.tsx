import { cn } from '@/utils/cn';
import gradient28Img from '@public/images/gradient/gradient-28.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ServiceCard {
  id: number;
  label: string;
  value: string;
  description: string;
}

export const serviceCards: ServiceCard[] = [
  {
    id: 1,
    label: 'Total users',
    value: '2.18+',
    description: 'Million active users',
  },
  {
    id: 2,
    label: 'System uptime',
    value: '89.7%',
    description: 'Average system availability',
  },
  {
    id: 3,
    label: 'Global reach',
    value: '70+',
    description: 'Countries served worldwide',
  },
  {
    id: 4,
    label: 'Response time',
    value: '3 minutes',
    description: 'Average support response',
  },
  {
    id: 5,
    label: 'Enterprise clients',
    value: '150+',
    description: 'Active enterprise customers',
  },
];

const Services = () => {
  return (
    <RevealAnimation delay={0.1}>
      <section className="xl:py-[200px] md:py-[100px] py-24 bg-white dark:bg-black">
        <div className="relative">
          {/* gradient  */}
          <div className="from-white dark:from-black absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-white dark:from-black absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
          <Marquee>
            <div className="flex items-center justify-center gap-8 md:mb-14">
              {serviceCards.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    'min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-5 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out',
                    index === 0 && 'ml-8',
                  )}>
                  <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
                    <Image src={gradient28Img} alt="review-bg" className="w-full h-full object-cover" />
                  </figure>
                  <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
                    <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
                      {service.label}
                    </p>
                    <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
                      {service.value}
                    </h3>
                  </div>
                  <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default Services;
