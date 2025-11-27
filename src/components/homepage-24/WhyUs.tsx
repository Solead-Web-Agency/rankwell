import { CheckIcon } from '@/icons';
import gradient5 from '@public/images/gradient/gradient-5.png';
import whyUsDark from '@public/images/home-page-22/why-us-dark.png';
import whyUs from '@public/images/home-page-22/why-us.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const whyUsData = [
  {
    id: '1',
    title: 'Fast, paperless quotes and digital claims',
  },
  {
    id: '2',
    title: 'Expert advisors, real-time support',
  },
  {
    id: '3',
    title: 'Affordable rates tailored to your life',
  },
];

const WhyUs = () => {
  return (
    <section className="relative pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="lg:px-14 lg:py-14 md:px-10 md:py-10 sm:px-8 sm:py-8 px-6 py-8 bg-secondary rounded-[32px] grid grid-cols-12 lg:gap-10 items-center gap-y-10 lg:max-w-full max-w-max lg:mx-0 mx-auto relative z-0 overflow-hidden">
          <RevealAnimation delay={0.5} direction="up" offset={200} start="top 10%">
            <figure className="-z-10 absolute -top-[54%] md:-top-[47%] lg:-top-[63%] xl:-top-[46%] -right-[67%] md:-right-[37%] lg:-right-[22%] xl:-right-[15%] -rotate-[20deg] size-[600px] xl:size-[650px] select-none pointer-events-none">
              <Image src={gradient5} alt="gradient" />
            </figure>
          </RevealAnimation>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5 space-y-10 md:space-y-14">
            <div className="space-y-4 md:space-y-8">
              <div className="sm:space-y-3 space-y-1.5">
                <RevealAnimation delay={0.1}>
                  <h2 className="text-white">Why Choose NextSaaS?</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <p className="text-accent/60">Track key indicators, spot trends early, and turn data into action.</p>
                </RevealAnimation>
              </div>
              <ul className="flex lg:flex-col flex-row lg:flex-nowrap flex-wrap lg:gap-y-4 sm:gap-4 gap-2 items-center lg:items-start lg:max-w-full max-w-xl lg:mx-0 mx-auto sm:justify-center lg:justify-start">
                {whyUsData.map((item, index) => (
                  <RevealAnimation delay={0.3 + index * 0.1} key={item.id}>
                    <li className="flex items-center sm:gap-3 gap-2">
                      <span className="size-6 bg-white/15 rounded-full">
                        <CheckIcon className="dark:fill-white" />
                      </span>
                      <span className="text-accent/60 sm:text-tagline-1 text-tagline-2">{item.title}</span>
                    </li>
                  </RevealAnimation>
                ))}
              </ul>
            </div>
            <RevealAnimation delay={0.6}>
              <div className="lg:text-left text-center">
                <LinkButton
                  href="/contact-us"
                  className="font-medium btn btn-dark border-0 btn-base inline-block hover:btn-primary w-[85%] md:w-auto mx-auto md:mx-0">
                  Talk to an Advisor
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <RevealAnimation delay={0.7} offset={100}>
              <figure className="w-full lg:max-w-[595px] max-w-[350px] mx-auto flex items-center justify-center">
                <Image src={whyUs} alt="whyUs-image" className="w-full h-full dark:hidden" />
                <Image src={whyUsDark} alt="whyUs-image" className="hidden dark:block" />
              </figure>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
