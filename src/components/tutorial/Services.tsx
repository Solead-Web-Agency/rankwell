import { cn } from '@/utils/cn';
import gradient28 from '@public/images/gradient/gradient-28.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

interface ServiceStat {
  label: string;
  value: string;
  description: string;
}

interface ServiceCardProps {
  stat: ServiceStat;
  isFirst?: boolean;
}

const serviceStats: ServiceStat[] = [
  {
    label: 'Total users',
    value: '2.18+',
    description: 'Million active users',
  },
  {
    label: 'System uptime',
    value: '89.7%',
    description: 'Average system availability',
  },
  {
    label: 'Global reach',
    value: '70+',
    description: 'Countries served worldwide',
  },
  {
    label: 'Response time',
    value: '3 minutes',
    description: 'Average support response',
  },
  {
    label: 'Enterprise clients',
    value: '150+',
    description: 'Active enterprise customers',
  },
];

const ServiceCard = ({ stat, isFirst = false }: ServiceCardProps) => (
  <div
    className={cn(
      'min-w-[360px] min-h-[270px] bg-background-2 hover:bg-secondary dark:bg-background-6 hover:dark:bg-background-8 rounded-[20px] relative p-8 flex flex-col gap-y-8 z-0 overflow-hidden justify-between group transition-all duration-700 ease-in-out',
      isFirst && 'ml-8',
    )}>
    <figure className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 rotate-[-78deg] -right-[160%] -top-[210%] transition-all duration-1000 ease-in-out transform group-hover:scale-110 select-none pointer-events-none">
      <Image src={gradient28} alt="review-bg" className="w-full h-full object-cover" />
    </figure>
    <div className="transition-all duration-700 ease-in-out transform group-hover:translate-y-[4px]">
      <p className="group-hover:text-white text-secondary/60 dark:text-accent/60 text-lg mb-2 transition-colors duration-700 ease-in-out">
        {stat.label}
      </p>
      <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-700 ease-in-out">
        {stat.value}
      </h3>
    </div>
    <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transition-all duration-700 ease-in-out transform group-hover:translate-y-[-6px] group-hover:opacity-90">
      {stat.description}
    </p>
  </div>
);

const Services = () => {
  return (
    <section className="md:py-[200px] dark:md:py-[100px] sm:py-[100px] py-[50px] bg-background-3 dark:bg-background-5">
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div className="from-background-3 dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r to-transparent md:w-[20%]" />
          <div className="from-background-3 dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l to-transparent md:w-[20%]" />
          <Marquee className="cards-marquee-container" pauseOnHover={true} autoFill={true}>
            <div className="flex items-center justify-center gap-8 mb-14">
              {serviceStats.map((stat, index) => (
                <ServiceCard key={`${stat.label}-${index}`} stat={stat} isFirst={index === 0} />
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Services;
