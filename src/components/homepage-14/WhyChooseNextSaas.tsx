import { cn } from '@/utils/cn';
import gradient from '@public/images/gradient/gradient-11.png';
import holdMobile from '@public/images/home-page-22/hold-mobile.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: 1,
    icon: 'ns-shape-13',
    title: 'Simple process',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: 2,
    icon: 'ns-shape-41',
    title: 'Personalized guidance',
    description: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: 3,
    icon: 'ns-shape-36',
    title: 'Competitive interest rates',
    description: 'Get access to fair rates with zero hidden fees or surprises.',
  },
  {
    id: 4,
    icon: 'ns-shape-35',
    title: 'Fast pre-approvals',
    description: 'Know where you stand quickly—get pre-approved in hours, not days.',
  },

  {
    id: 5,
    icon: 'ns-shape-34',
    title: 'Simple process',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: 6,
    icon: 'ns-shape-30',
    title: 'Ongoing support',
    description: 'We stay with you post-closing to ensure a smooth transition.',
  },
];

const WhyChooseNextSaas = () => {
  return (
    <section className="py-20 md:py-[90px] lg:py-[100px]" aria-label="Why choose NextSaaS">
      <div className="main-container">
        <div className="pt-16 md:pt-[100px] max-lg:pb-10 px-5 sm:px-7 md:px-14 relative rounded-4xl bg-white overflow-hidden dark:bg-background-8">
          <RevealAnimation delay={0.8} duration={0.9} offset={200} direction="up">
            <figure className="absolute top-[-407px] md:top-[-354px] rounded-t-4xl right-[-145px] md:right-[-149px] rotate-[240deg] md:rotate-[238deg] size-[650px] opacity-90 select-none pointer-events-none">
              <Image src={gradient} alt="Gradient background" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="space-y-[70px]">
            {/* heading  */}
            <div className="space-y-[20px] text-center md:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-yellow">Why choose NextSaaS?</span>
              </RevealAnimation>
              <div className="space-y-3">
                <RevealAnimation delay={0.3}>
                  <h2>Stress-free mortgage solutions.</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p>Smart solutions and human support—everything you need for a stress-free mortgage experience.</p>
                </RevealAnimation>
              </div>
            </div>
            {/* content  */}
            <div className="max-w-[1178px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
              <div className="w-full gap-8 flex flex-col md:flex-row lg:flex-col">
                {data.slice(0, 3).map((item, index) => (
                  <RevealAnimation delay={0.6 + index * 0.1} direction="left" key={item.id}>
                    <div className="space-y-3 md:max-w-[300px] w-full">
                      <span className={cn('block text-[36px] text-secondary dark:text-accent', item.icon)} />
                      <div>
                        <h3 className="text-tagline-1 font-medium">{item.title}</h3>
                        <p className="text-tagline-2">{item.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              {/* feature img  */}
              <RevealAnimation delay={0.7} duration={0.7} offset={80}>
                <figure className="w-full lg:w-[538.95px] lg:h-[640px] order-first lg:order-none lg:mt-[66px] xl:mt-0 lg:mr-6 xl:mr-0 flex-shrink-0">
                  <Image
                    src={holdMobile}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              {/* right side feature  */}
              <div className="w-full gap-8 flex flex-col md:flex-row lg:flex-col lg:ml-4 xl:ml-0">
                {data.slice(3).map((item, index) => (
                  <RevealAnimation delay={0.6 + index * 0.1} direction="right" key={item.id}>
                    <div className="space-y-3 md:max-w-[300px] w-full">
                      <span className={cn('block text-[36px] text-secondary dark:text-accent', item.icon)} />
                      <div>
                        <h3 className="text-tagline-1 font-medium">{item.title}</h3>
                        <p className="text-tagline-2">{item.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNextSaas;
