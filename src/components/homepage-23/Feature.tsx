import { cn } from '@/utils/cn';
import gradient31 from '@public/images/gradient/gradient-31.png';
import holdMobile from '@public/images/home-page-22/hold-mobile.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const featureList = [
  {
    id: '1',
    title: 'Enforce passcode policies',
    icon: 'ns-shape-15',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '2',
    title: 'Lock devices in kiosk mode',
    icon: 'ns-shape-24',
    description: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: '3',
    title: 'Real-time sync across devices',
    icon: 'ns-shape-21',
    description: 'Get access to fair rates with zero hidden fees or surprises.',
  },
  {
    id: '4',
    title: 'App whitelisting & blacklisting',
    icon: 'ns-shape-7',
    description: 'Know where you stand quickly—get pre-approved in hours, not days.',
  },
  {
    id: '5',
    title: 'Configure wi-fi & network settings',
    icon: 'ns-shape-34',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '6',
    title: 'Remote wipe & factory reset',
    icon: 'ns-shape-36',
    description: 'We stay with you post-closing to ensure a smooth transition.',
  },
];

const Feature = () => {
  return (
    <section className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="pt-10 md:pt-16 lg:pt-20 xl:pt-[100px] relative bg-white dark:bg-background-6 rounded-4xl px-3.5 lg:px-14 overflow-hidden">
          {/* bg-gradient-img  */}
          <RevealAnimation delay={0.1} direction="right" offset={200} start="top top">
            <figure className="size-[1200px] overflow-hidden absolute rotate-[-1deg] right-[-729px] top-[-800px] lg:top-[-720px] select-none pointer-events-none">
              <Image src={gradient31} alt="gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="space-y-10 lg:space-y-[70px] relative z-10">
            {/* heading and btn  */}
            <div className="space-y-8 md:space-y-14">
              <div className="max-w-[681px] space-y-3 text-center md:text-left">
                <RevealAnimation delay={0.1}>
                  <h2>
                    Smarter investing starts with
                    <span className="text-primary-500"> innovative </span>tools.
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="max-w-[448px] mx-auto md:mx-0">
                    Discover a platform designed to simplify your financial journey while maximizing long-term growth.
                  </p>
                </RevealAnimation>
              </div>
              <RevealAnimation delay={0.3}>
                <div className="text-center md:text-left">
                  <LinkButton
                    href="/features-01"
                    className="btn btn-secondary btn-md hover:btn-white dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto mx-auto md:mx-0"
                    aria-label="Browse all platform features">
                    Explore all features
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
            {/* feature list with img  */}
            <div className="max-w-[1056px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
              {/* left side features  */}
              <div className="w-full gap-8 flex flex-col md:flex-row lg:flex-col mt-4 sm:mt-0 px-2 sm:px-0">
                {featureList.slice(0, 3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.4 + index * 0.1} direction="left">
                    <div className="space-y-3 md:max-w-[300px] w-full">
                      <div className="overflow-hidden inline-block">
                        <span className={cn('text-[36px] text-secondary dark:text-accent', feature.icon)} />
                      </div>
                      <div>
                        <h3 id="passcode-policy-heading" className="text-heading-6 md:text-tagline-1 md:font-medium">
                          {feature.title}
                        </h3>
                        <p className="text-tagline-2">{feature.description}</p>
                      </div>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
              {/* feature img  */}
              <RevealAnimation delay={0.5}>
                <figure className="w-full lg:w-[538.95px] lg:h-[620px] order-last lg:order-none lg:mt-[66px] xl:mt-5 lg:mr-6 xl:mr-0 flex-shrink-0">
                  <Image
                    src={holdMobile}
                    alt="Investment platform interface showing key features"
                    className="size-full object-cover"
                  />
                </figure>
              </RevealAnimation>
              {/* right side feature  */}
              <div className="w-full gap-8 flex flex-col md:flex-row lg:flex-col lg:ml-4 xl:ml-0 px-2 sm:px-0">
                {featureList.slice(3).map((feature, index) => (
                  <RevealAnimation key={feature.id} delay={0.4 + index * 0.1} direction="right">
                    <div className="space-y-3 md:max-w-[300px] w-full">
                      <div className="overflow-hidden inline-block">
                        <span className={cn('text-[36px] text-secondary dark:text-accent', feature.icon)} />
                      </div>
                      <div>
                        <h3 id="passcode-policy-heading" className="text-heading-6 md:text-tagline-1 md:font-medium">
                          {feature.title}
                        </h3>
                        <p className="text-tagline-2">{feature.description}</p>
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

export default Feature;
