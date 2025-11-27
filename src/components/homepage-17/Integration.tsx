import gradient4 from '@public/images/gradient/gradient-4.png';
import figma from '@public/images/icons/figma.svg';
import shopify from '@public/images/icons/shopify.svg';
import slack from '@public/images/icons/slack.svg';
import snapchat from '@public/images/icons/snapchat.svg';
import tiktok from '@public/images/icons/tiktok.svg';
import zapier from '@public/images/icons/zapier.svg';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const integrations = [
  {
    name: 'Zapier',
    description: 'Communication',
    icon: zapier,
  },
  {
    name: 'Snapchat',
    description: 'Messaging app',
    icon: snapchat,
  },

  {
    name: 'Shopify',
    description: 'e-commerce',
    icon: shopify,
  },

  {
    name: 'Figma',
    description: 'Design tool',
    icon: figma,
  },

  {
    name: 'Slack',
    description: 'Communication',
    icon: slack,
  },

  {
    name: 'Tiktok',
    description: 'Video feed',
    icon: tiktok,
  },
];

const Integration = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="relative overflow-hidden z-10 rounded-[25px] py-16 md:py-[100px] bg-gradient-to-b from-[#B3C3DA] to-[#93A5BE]">
          <div className="space-y-5 text-center mb-[70px]">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-gray">Integrations</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.3}>
                <h2 className="dark:text-secondary">Tech stack &amp; tools.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="max-w-[510px] mx-auto w-full dark:text-secondary">We work with the best technologies</p>
              </RevealAnimation>
            </div>
          </div>
          <div>
            <div className="max-w-[852px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 px-2 sm:px-4 sm:gap-8">
              {integrations.map((integration, index) => (
                <RevealAnimation delay={0.5 + index * 0.1} key={integration.name}>
                  <div className="group">
                    <Link
                      href="/integration-01"
                      className="cursor-pointer mx-2 sm:mx-0 p-4 sm:p-8 rounded-2xl bg-white dark:bg-secondary/60 flex items-center justify-between gap-4 scale-100 hover:scale-[102%] transition-transform duration-500 hover:transition-transform hover:duration-500">
                      <div className="flex items-center gap-4">
                        <figure className="grow-0 shrink-0 size-14 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-[103%]">
                          <Image src={integration.icon} alt={integration.name} className="size-14 object-contain" />
                        </figure>
                        <div className="grow-0 shrink-0 transform transition-transform duration-500 group-hover:translate-x-1.5">
                          <h5>{integration.name}</h5>
                          <p>{integration.description}</p>
                        </div>
                      </div>
                      <div className="size-14 relative overflow-hidden rounded-full bg-background-4 dark:bg-background-7 group-hover:bg-secondary dark:group-hover:bg-accent/40 flex items-center justify-center transition-all duration-[600ms] group-hover:shadow-1 ease-[cubic-bezier(0.9, 0, 0.8, 1)]">
                        <span className="sr-only">Arrow Icon</span>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          className="absolute transition-all duration-[600ms] ease-in-out -translate-x-11 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 12H20.25"
                            className="stroke-white dark:stroke-black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 5.25L20.25 12L13.5 18.75"
                            className="stroke-white dark:stroke-black"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          className="absolute transition-all duration-[600ms] ease-in-out translate-x-0 group-hover:translate-x-10 opacity-100 group-hover:opacity-0"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3.75 12H20.25"
                            className="stroke-black dark:stroke-white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M13.5 5.25L20.25 12L13.5 18.75"
                            className="stroke-black dark:stroke-white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
          <RevealAnimation delay={1.1} direction="right" offset={240}>
            <figure className="absolute -right-[30%] -bottom-[50%] max-w-[1440px] w-full max-h-[862px] h-full rotate-[353deg] opacity-70 -z-10 select-none pointer-events-none">
              <Image
                src={gradient4}
                alt="integrations bg"
                className="rotate-x-[180deg] size-full object-cover object-center"
              />
            </figure>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;
