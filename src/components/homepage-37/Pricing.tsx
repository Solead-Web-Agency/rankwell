'use client';

import { CheckIcon } from '@/icons';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="max-[1920px]:px-5">
      <RevealAnimation delay={0.2}>
        <div className="bg-background-12 max-w-[1880px] md:rounded-4xl rounded-3xl py-25 lg:py-39 md:px-5 mx-auto">
          <div className="main-container flex flex-col gap-[70px]">
            <div className="flex flex-col items-center text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-secondary mb-5 max-[426px]:mb-3">Our Pricing</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[650px] mx-auto mb-8 max-[426px]:max-w-[320px]">Simple, Transparent Pricing</h2>
              </RevealAnimation>
              <div className="relative z-0">
                <RevealAnimation delay={0.5} direction="up" offset={150} useSpring={true} duration={2.5}>
                  <span className="absolute z-11 -right-6 -top-2.5 bg-ns-green dark:bg-ns-green text-secondary dark:text-secondary inline-block font-normal capitalize text-tagline-2 px-3.5 py-1.5 shadow-xs rounded-[36px] rotate-[20deg] w-[90px]">
                    save 40%
                  </span>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <label className="relative inline-flex items-center cursor-pointer z-[10] bg-white dark:bg-background-9 py-6 px-[57px] max-[426px]:px-10 max-[426px]:py-4 rounded-full">
                    <span className="mr-2.5 text-tagline-1 max-[426px]:text-tagline-2 text-secondary dark:text-accent font-normal">
                      Monthly
                    </span>
                    <input
                      type="checkbox"
                      id="priceCheck"
                      className="sr-only peer"
                      aria-label="Toggle between monthly and yearly pricing"
                      checked={!isMonthly}
                      onChange={() => setIsMonthly(!isMonthly)}
                    />
                    <span className="relative w-13 h-[28px] bg-secondary dark:bg-accent rounded-[34px] peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[2px] peer-checked:after:start-[2px] after:bg-accent dark:after:bg-background-8 after:rounded-full after:h-6 after:w-6 after:transition-all" />
                    <span className="ms-2.5 text-tagline-1 max-[426px]:text-tagline-2 text-secondary dark:text-accent font-normal">
                      Yearly
                    </span>
                  </label>
                </RevealAnimation>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center lg:gap-8 gap-y-5 lg:max-w-full max-w-[500px] mx-auto lg:mx-0">
                {/* Price Card 1 */}
                <RevealAnimation delay={0.3}>
                  <div className="bg-white dark:bg-background-7 flex-1 p-8 rounded-[20px] max-lg:w-full w-full">
                    <h3 className="mb-2 font-normal text-heading-5">Starter</h3>
                    <p className="mb-6 max-w-[250px] max-[426px]:text-tagline-2">
                      Perfect for individuals trying out AI gadgets.
                    </p>
                    <div className="mb-7">
                      {isMonthly ? (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>160.00</span>
                          </h4>
                          <p className="text-secondary dark:text-accent">Per Month</p>
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>220.00</span>
                          </h4>
                          <p className="text-secondary dark:text-accent">Per Year</p>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white w-full block text-center mb-8 before:content-none first-letter:uppercase">
                      Get started
                    </Link>
                    <ul className="relative list-none space-y-2.5">
                      <li className="flex items-center gap-2.5">
                        <span className="size-5 rounded-full bg-secondary">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                          Connect up to 2 devices
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="size-5 rounded-full bg-secondary">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                          Basic automation features
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="size-5 rounded-full bg-secondary">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                          Standard support
                        </span>
                      </li>
                    </ul>
                  </div>
                </RevealAnimation>
                {/* Price Card 2 */}
                <RevealAnimation delay={0.4} start="top 84%">
                  <div className="p-2.5 w-full rounded-[20px] flex-1 bg-[url('/images/home-page-37/price-bg.png')] dark:bg-[url('/images/home-page-37/price-bg.png')] bg-no-repeat bg-center bg-cover max-lg:w-full">
                    <div className="bg-white dark:bg-black p-5 sm:p-8 rounded-[12px]">
                      <h3 className="mb-2.5 font-normal text-heading-5">Pro</h3>
                      <p className="mb-6 text-secondary/60 dark:text-accent/60 max-w-[250px]">
                        For power users who want more control and flexibility.
                      </p>
                      <div className="mb-7">
                        {isMonthly ? (
                          <div>
                            <h4 className="text-heading-4 font-normal">
                              $<span>3342.00</span>
                            </h4>
                            <p className="text-secondary dark:text-accent">Per Month</p>
                          </div>
                        ) : (
                          <div>
                            <h4 className="text-heading-4 font-normal">
                              $<span>4420.00</span>
                            </h4>
                            <p className="text-secondary dark:text-accent">Per Year</p>
                          </div>
                        )}
                      </div>
                      <Link
                        href="/contact-us"
                        className="btn btn-md btn-secondary dark:btn-accent hover:btn-primary w-full block text-center mb-8 before:content-none first-letter:uppercase">
                        Get started
                      </Link>
                      <ul className="relative list-none space-y-2.5">
                        <li className="flex items-center gap-2.5">
                          <span className="size-5 rounded-full bg-secondary">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                            Connect up to 10 devices
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="size-5 rounded-full bg-secondary">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                            Advanced AI automation
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="size-5 rounded-full bg-secondary">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                            Real-time insights &amp; analytics
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="size-5 rounded-full bg-secondary">
                            <CheckIcon className="fill-accent" />
                          </span>
                          <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                            Priority support
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="size-5 rounded-full bg-background-4">
                            <CheckIcon className="fill-secondary/60" />
                          </span>
                          <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                            Custom Notifications &amp; Alerts
                          </span>
                        </li>
                        <li className="flex items-center gap-2.5">
                          <span className="size-5 rounded-full bg-background-4">
                            <CheckIcon className="fill-secondary/60" />
                          </span>
                          <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                            Cross-Platform Access
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </RevealAnimation>
                {/* Price Card 3 */}
                <RevealAnimation delay={0.5}>
                  <div className="bg-white dark:bg-background-7 flex-1 p-8 rounded-[20px] max-lg:w-full">
                    <h3 className="mb-2 font-normal text-heading-5">Elite</h3>
                    <p className="mb-6 max-w-[250px] text-secondary/60 dark:text-accent/60">
                      Best for families and professionals with multiple gadgets.
                    </p>
                    <div className="mb-7">
                      {isMonthly ? (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>4800.00</span>
                          </h4>
                          <p className="text-secondary">Per Month</p>
                        </div>
                      ) : (
                        <div>
                          <h4 className="text-heading-4 font-normal">
                            $<span>5800.00</span>
                          </h4>
                          <p className="text-secondary">Per Year</p>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-md btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white w-full block text-center mb-8 before:content-none first-letter:uppercase">
                      Get started
                    </Link>
                    <ul className="relative list-none space-y-2.5">
                      <li className="flex items-center gap-2.5">
                        <span className="size-5 rounded-full bg-secondary">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary dark:text-accent font-normal text-tagline-1">
                          Unlimited device connections
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="size-5 rounded-full bg-secondary">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary dark:text-accent/60 font-normal text-tagline-1">
                          Full AI customization
                        </span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="size-5 rounded-full bg-secondary">
                          <CheckIcon className="fill-accent" />
                        </span>
                        <span className="text-secondary/60 dark:text-accent/60 font-normal text-tagline-1">
                          Cross-platform integration
                        </span>
                      </li>
                    </ul>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;
