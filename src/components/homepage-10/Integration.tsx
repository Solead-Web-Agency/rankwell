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
  { id: 1, src: zapier, alt: 'Zapier', category: 'Communication' },
  { id: 2, src: snapchat, alt: 'Snapchat', category: 'Messaging App' },
  { id: 3, src: shopify, alt: 'Shopify', category: 'e-commerce' },
  { id: 4, src: figma, alt: 'Figma', category: 'Design Tool' },
  { id: 5, src: slack, alt: 'Slack', category: 'Communication' },
  { id: 6, src: tiktok, alt: 'Tiktok', category: 'Video Tool' },
];

const Integration = () => {
  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="relative overflow-hidden z-10 rounded-[25px] border border-stroke-1 dark:border-stroke-5 dark:bg-background-5 bg-background-2 sm:py-[100px] py-[50px]">
          <div className="space-y-5 text-center sm:mb-[70px] mb-[50px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green">Integrations</span>
            </RevealAnimation>
            <div className="space-y-3">
              <RevealAnimation delay={0.2}>
                <h2 className="sm:max-w-full max-w-[300px] sm:mx-0 mx-auto">Link up with your favorite tools.</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="sm:max-w-[510px] max-w-[300px] mx-auto w-full">
                  We assist startups in standing out with exceptional messaging that effectively engages their audience.
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div>
            <div className="lg:max-w-[852px] md:max-w-[700px] mx-auto grid grid-cols-12 lg:gap-8 md:gap-6 gap-y-6 lg:px-0 px-6">
              {integrations.map((integration, index) => (
                <RevealAnimation key={integration.id} delay={0.4 + index * 0.1}>
                  <div className="col-span-12 md:col-span-6 group">
                    <Link href="/integration-01">
                      <div className="cursor-pointer sm:p-8 p-4 sm:rounded-2xl rounded-xl bg-white dark:bg-background-8 flex items-center justify-between gap-4 group-hover:scale-[102%] group-hover:shadow-1 transition-all duration-500 ease-in-out">
                        <div className="flex items-center gap-4">
                          <figure className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-[103%]">
                            <span className="size-14 overflow-hidden">
                              <Image src={integration.src} alt={integration.alt} />
                            </span>
                          </figure>
                          <div className="transform transition-transform duration-500 group-hover:transition-transform group-hover:translate-x-1.5">
                            <p className="lg:text-heading-5 text-heading-6 font-normal text-secondary dark:text-accent">
                              {integration.alt}
                            </p>
                            <p>{integration.category}</p>
                          </div>
                        </div>
                        <div>
                          <div className="sm:size-14 relative overflow-hidden size-10 rounded-full bg-background-4 dark:bg-background-9 dark:group-hover:bg-primary-500 group-hover:bg-secondary flex items-center justify-center transition-all duration-[600ms] ease-in-out">
                            <span className="sr-only">Arrow Icon</span>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="size-5 sm:size-6 absolute transition-all duration-[600ms] ease-in-out -translate-x-11 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.75 12H20.25"
                                className="stroke-black group-hover:stroke-white transition-colors duration-700"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.5 5.25L20.25 12L13.5 18.75"
                                className="stroke-black group-hover:stroke-white transition-colors duration-700"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              className="size-5 sm:size-6 absolute transition-all duration-[600ms] ease-in-out translate-x-0 group-hover:translate-x-10 opacity-100 group-hover:opacity-0"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M3.75 12H20.25"
                                className="stroke-black dark:stroke-white transition-colors duration-700"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M13.5 5.25L20.25 12L13.5 18.75"
                                className="stroke-black dark:stroke-white transition-colors duration-700"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
          {/* bg gradient overlay*/}
          <RevealAnimation delay={1} direction="right">
            <div className="select-none pointer-events-none absolute -right-[30%] -bottom-[50%] w-[840px] h-full rotate-[353deg] opacity-70 -z-10">
              <Image src={gradient4} alt="integrations bg" className="rotate-x-[180deg]" />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Integration;
