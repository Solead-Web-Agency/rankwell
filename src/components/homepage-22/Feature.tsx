import { cn } from '@/utils/cn';
import Gradient42 from '@public/images/gradient/gradient-42.png';
import HoldMobile from '@public/images/home-page-22/hold-mobile.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import FeatureList from './FeatureList';

const featureList = [
  {
    id: '1',
    title: 'Enforce passcode policies',
    icon: 'ns-shape-34',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '2',
    title: 'Lock devices in kiosk mode',
    icon: 'ns-shape-36',
    description: 'Our specialists guide you every step of the way, tailored to your needs.',
  },
  {
    id: '3',
    title: 'Real-time sync across devices',
    icon: 'ns-shape-10',
    description: 'Get access to fair rates with zero hidden fees or surprises.',
  },
  {
    id: '4',
    title: 'App whitelisting &amp; blacklisting',
    icon: 'ns-shape-34',
    description: 'Know where you stand quickly—get pre-approved in hours, not days.',
  },
  {
    id: '5',
    title: 'Configure Wi-Fi &amp; network settings',
    icon: 'ns-shape-36',
    description: 'Apply in minutes from any device—no paperwork, no hassle.',
  },
  {
    id: '6',
    title: 'Remote wipe &amp; factory reset',
    icon: 'ns-shape-10',
    description: 'We stay with you post-closing to ensure a smooth transition.',
  },
];

const Feature = () => {
  return (
    <section className="relative xl:py-[200px] lg:py-[100px] md:py-20 py-16 dark:bg-black" aria-label="Hero section">
      <div className="main-container">
        <div className="lg:pt-[100px] pt-[50px] lg:px-14 md:px-8 px-4 rounded-4xl w-full sm:bg-background-2 sm:dark:bg-background-5 mb-16 md:mb-20 lg:mb-[90px] xl:mb-[100px] overflow-hidden relative">
          <RevealAnimation delay={0.4} direction="up" start="top top" offset={200}>
            <figure className="select-none pointer-events-none absolute overflow-hidden size-[850px] top-[-510px] sm:top-[-486px] right-[-579px] sm:right-[-532px] rotate-[-3deg]">
              <Image src={Gradient42} alt="feature-bg-gradient" className="size-full object-cover" />
            </figure>
          </RevealAnimation>
          <div className="space-y-3 md:mb-[70px] mb-14">
            <RevealAnimation delay={0.2}>
              <h2>Why teams love NextSaaS</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Manage your entire mobile infrastructure from one platform</p>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 xl:gap-8 lg:gap-4 gap-y-8 lg:items-center">
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-8 last:mb-[50px] lg:order-1 order-1">
              {featureList.slice(0, 3).map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1} direction="left">
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className={cn('text-[36px] text-secondary dark:text-accent', item.icon)} />
                    </div>
                    <div>
                      <p className="sm:sm:font-medium text-secondary dark:text-accent max-sm:text-heading-6">
                        {item.title}
                      </p>
                      <p className="text-tagline-2 max-w-[294px] w-full">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
            <RevealAnimation delay={0.5}>
              <div className="lg:col-span-6 col-span-12 lg:order-2 order-3">
                <figure className="lg:max-w-[590px] max-w-[390px] mx-auto h-auto w-full lg:h-[670px]">
                  <Image src={HoldMobile} alt="hold mobile" className="w-full h-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>
            <div className="col-span-12 sm:col-span-6 lg:col-span-3 space-y-8 last:mb-[50px] lg:order-3 order-2">
              {featureList.slice(3).map((item, index) => (
                <RevealAnimation key={item.id} delay={0.4 + index * 0.1} direction="right">
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className={cn('text-[36px] text-secondary dark:text-accent', item.icon)} />
                    </div>
                    <div>
                      <p className="sm:sm:font-medium text-secondary dark:text-accent max-sm:text-heading-6">
                        {item.title}
                      </p>
                      <p className="text-tagline-2 max-w-[294px] w-full">{item.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
        <FeatureList />
      </div>
    </section>
  );
};

export default Feature;
