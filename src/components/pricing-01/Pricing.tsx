{
  /* =========================
Pricing section
===========================*/
}
import gradient4 from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
const Pricing = () => {
  return (
    <section className="pb-16 md:pb-20 lg:pb-[95px] xl:pb-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="max-w-[1440px] w-full mx-auto rounded-2xl space-y-[70px] bg-background-2 dark:bg-background-8 py-[100px] px-5 md:px-6 lg:px-10 xl:px-16">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <RevealAnimation delay={0.2}>
              <span className="badge badge-cyan">Our pricing</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>Select the pricing plan that best suits your needs.</h2>
            </RevealAnimation>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.4}>
                <div>
                  <div className="md:h-[195px] md:w-[290px]" />
                  <div className="space-y-2.5">
                    <h3 className="text-heading-6">What’s included</h3>
                    <ul>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal py-4 pr-6 border-b border-b-stroke-4 dark:border-stroke-8">
                        Pages included
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal py-4 pr-6 border-b border-b-stroke-4 dark:border-stroke-8">
                        Custom design
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal py-4 pr-6 border-b border-b-stroke-4 dark:border-stroke-8">
                        SEO optimization
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal py-4 pr-6 border-b border-b-stroke-4 dark:border-stroke-8">
                        Branding support
                      </li>
                      <li className="text-secondary/60 dark:text-accent/60 text-tagline-1 font-normal py-4 pr-6">
                        Social media integration
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.5}>
                <div>
                  <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-7 space-y-8">
                    <div>
                      <p className="text-tagline-1 font-medium mb-3">Essential</p>
                      <h3 className="text-heading-5 font-normal">Free</h3>
                      <p className="">Free plan for all users</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full before:content-none first-letter:uppercase">
                      Get started
                    </Link>
                  </div>
                  <div className="rounded-[20px] bg-background-1 dark:bg-background-6">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Up to 5</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8" />
                      <li className="h-14 px-6 py-4 text-center" />
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.6}>
                <div>
                  <div className="rounded-[20px] relative py-8 px-6 bg-secondary dark:bg-background-5 space-y-8 overflow-hidden">
                    <div className="absolute h-full w-full -top-28 -right-20 z-0">
                      <Image src={gradient4} alt="pricing bg" priority />
                    </div>
                    <div>
                      <p className="text-tagline-1 text-accent/60 font-medium mb-3">Advanced</p>
                      <h3 className="text-heading-5 font-normal text-accent">$99</h3>
                      <p className="text-accent/60">Plans for advanced users</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-primary btn-md hover:btn-white dark:hover:btn-accent w-full relative z-10 before:content-none first-letter:uppercase">
                      Get started
                    </Link>
                  </div>
                  <div className="rounded-[20px] bg-background-1 dark:bg-background-6">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Up to 10</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center" />
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.7}>
                <div>
                  <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-7 space-y-8">
                    <div>
                      <p className="text-tagline-1 font-medium mb-3">Enterprise</p>
                      <h3 className="text-heading-5 font-normal">Enterprise</h3>
                      <p className="">Contact us for enterprise users</p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-white dark:btn-white-dark hover:btn-primary btn-md w-full before:content-none first-letter:uppercase">
                      Get started
                    </Link>
                  </div>
                  <div className="rounded-[20px] bg-background-1 dark:bg-background-6">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Unlimited</p>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-8 flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                      <li className="h-14 px-6 py-4 text-center flex items-center justify-center">
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="shrink-0">
                          <rect width={18} height={18} rx={9} fill="" className="fill-secondary dark:fill-accent" />
                          <path
                            d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                            fill=""
                            className="fill-white dark:fill-black"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;
