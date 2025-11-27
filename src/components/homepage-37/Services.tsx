import serviceBg from '@public/images/home-page-37/service-bg.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: 'ns-shape-47',
    title: 'Smart Integration',
    description: 'Seamlessly connect your gadgets with one hub, from voice assistants to home devices.',
    delay: 0.4,
  },
  {
    id: 2,
    icon: 'ns-shape-12',
    title: 'AI Automation',
    description: 'Let artificial intelligence handle routine tasks and optimize your daily workflows automatically.',
    delay: 0.5,
  },
  {
    id: 3,
    icon: 'ns-shape-8',
    title: 'Real-time Monitoring',
    description: 'Track your devices and get instant insights with comprehensive real-time monitoring.',
    delay: 0.6,
  },
  {
    id: 4,
    icon: 'ns-shape-3',
    title: 'Voice Control',
    description: 'Control all your connected devices with simple voice commands and natural language.',
    delay: 0.7,
  },
  {
    id: 5,
    icon: 'ns-shape-52',
    title: 'Energy Management',
    description: 'Optimize energy consumption across all devices with intelligent power management.',
    delay: 0.8,
  },
  {
    id: 6,
    icon: 'ns-shape-35',
    title: 'Security & Privacy',
    description: 'Advanced encryption and privacy controls to keep your smart home data secure.',
    delay: 0.9,
  },
];
const Services = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-secondary max-w-[1880px] md:rounded-4xl rounded-3xl py-25 xl:py-28 md:px-5 mx-auto relative overflow-hidden">
        <RevealAnimation delay={0.4}>
          <figure className="absolute right-0 bottom-0 w-full h-full">
            <Image src={serviceBg} alt="service bg" className="w-full h-full object-cover" />
          </figure>
        </RevealAnimation>
        <div className="main-container mb-13">
          <div className="mb-19 text-center lg:max-w-[730px] lg:mx-auto">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-white mb-5 !text-secondary font-medium !text-tagline-2">services</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-3 text-accent">Our smart AI services</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="lg:max-w-[420px] lg:mx-auto text-accent/60">
                Everything you need to connect, control, and simplify life powered by intelligent AI.
              </p>
            </RevealAnimation>
          </div>
          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-y-8">
            {servicesData.map((service) => (
              <RevealAnimation key={service.id} delay={service.delay}>
                <article className="flex flex-col items-center justify-center text-center space-y-8 p-6 lg:p-9 xl:p-11">
                  <div className="">
                    <span className={`${service.icon} text-[52px] text-accent`} />
                  </div>
                  <div className="space-y-2 max-w-[322px]">
                    <h5 className="text-white">{service.title}</h5>
                    <p className="text-tagline-1 text-accent/60">{service.description}</p>
                  </div>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
        <RevealAnimation delay={1}>
          <div className="flex items-center justify-center group w-[90%] mx-auto md:w-auto">
            <Link
              href="./our-services-03"
              className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 group-hover:bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-normal text-nowrap lowercase shadow-1 bg-background-1 border-stroke-7 text-secondary group-hover:text-accent px-6 py-2.5 text-tagline-1 md:px-8 md:py-3.5 w-full md:w-auto mx-auto md:mx-0">
              <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                Explore all services
              </span>
              <div className="relative overflow-hidden size-6">
                {/* one  */}
                <span className="group-hover:translate-x-1 -translate-x-6 absolute inset-0 transition-transform duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M11 5H13V7H11V5Z" fill="white" />
                    <path d="M5 5H7V7H5V5Z" fill="white" />
                    <path d="M14 8H16V10H14V8Z" fill="white" />
                    <path d="M8 8H10V10H8V8Z" fill="white" />
                    <path d="M17 11H19V13H17V11Z" fill="white" />
                    <path d="M11 11H13V13H11V11Z" fill="white" />
                    <path d="M14 14H16V16H14V14Z" fill="white" />
                    <path d="M8 14H10V16H8V14Z" fill="white" />
                    <path d="M11 17H13V19H11V17Z" fill="white" />
                    <path d="M5 17H7V19H5V17Z" fill="white" />
                  </svg>
                </span>
                {/* two  */}
                <span className="group-hover:translate-x-6 absolute -translate-x-2 transition-transform duration-300 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M11 5H13V7H11V5Z" fill="#1A1A1C" />
                    <path d="M5 5H7V7H5V5Z" fill="#1A1A1C" />
                    <path d="M14 8H16V10H14V8Z" fill="#1A1A1C" />
                    <path d="M8 8H10V10H8V8Z" fill="#1A1A1C" />
                    <path d="M17 11H19V13H17V11Z" fill="#1A1A1C" />
                    <path d="M11 11H13V13H11V11Z" fill="#1A1A1C" />
                    <path d="M14 14H16V16H14V14Z" fill="#1A1A1C" />
                    <path d="M8 14H10V16H8V14Z" fill="#1A1A1C" />
                    <path d="M11 17H13V19H11V17Z" fill="#1A1A1C" />
                    <path d="M5 17H7V19H5V17Z" fill="#1A1A1C" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Services;
