'use client';

import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className="pt-[100px] pb-[100px] md:pb-[200px]">
      <div className="max-w-[1440px] sm:mx-auto mx-5">
        <div className="bg-background-3 dark:bg-background-7 rounded-[30px]">
          <div className="main-container">
            <div className="flex flex-col gap-5 py-[100px]">
              <div className="flex flex-col items-center text-center">
                {/* heading  */}
                <RevealAnimation delay={0.2}>
                  <span className="badge badge-primary-light mb-5">Pricing plans</span>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <h2 className="md:max-w-[442px] mx-auto mb-8">Flexible pricing for every stage.</h2>
                </RevealAnimation>
                {/* price change toggle  */}
                <RevealAnimation delay={0.4}>
                  <div className="rounded-[160px] py-6 px-14">
                    <label className="relative inline-flex items-center cursor-pointer z-[10]" htmlFor="priceCheck">
                      <span className="mr-2.5 text-tagline-1 text-secondary dark:text-accent font-normal">Monthly</span>
                      <input
                        checked={!isMonthly}
                        onChange={() => setIsMonthly(!isMonthly)}
                        type="checkbox"
                        id="priceCheck"
                        className="sr-only peer"
                        aria-label="Toggle between monthly and yearly pricing"
                      />
                      <div className="relative w-13 h-[28px] bg-transparent border border-primary-400 dark:border-stroke-8 rounded-[34px] peer-checked:after:translate-x-[94%] after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[2px] peer-checked:after:start-[2px] after:bg-accent after:border-primary-500 dark:after:border-stroke-8 after:rounded-full after:size-6 after:transition-all before:absolute before:content-[''] before:w-[62px] before:h-[36px] before:-left-[6px] before:-top-[5px] before:bg-primary-500 dark:before:bg-stroke-7 before:p-[5px] before:rounded-[34px] before:transition-all before:-z-10" />
                      <span className="ms-2.5 text-secondary dark:text-accent text-tagline-1 font-normal">Yearly</span>
                    </label>
                  </div>
                </RevealAnimation>
              </div>
              {/* pricing cards  */}
              <div className="relative">
                <div className="flex max-lg:flex-col items-center justify-center gap-8 lg:gap-4 xl:gap-8">
                  {/* Price Card 1 */}
                  <RevealAnimation delay={0.6}>
                    <div className="bg-background-2 dark:bg-background-5 px-5 md:px-14 lg:px-6 xl:px-14 py-[60px] rounded-[20px] basis-[408px]">
                      {/* pricing info  */}
                      <div className="pb-[47px] border-b border-b-stroke-2 dark:border-b-stroke-6">
                        <h3 id="startup-plan" className="mb-4 font-normal text-heading-5">
                          Startup plan.
                        </h3>
                        {/* monthly plan  */}
                        <div className="price-month mb-7">
                          <h4 className="text-heading-4 font-normal">
                            $<span>{isMonthly ? '2500' : '30000'}</span>
                            <span className="text-tagline-2 text-secondary dark:text-accent/60">
                              /{isMonthly ? 'Month' : 'Year'}
                            </span>
                          </h4>
                        </div>

                        <Link
                          href="/contact-us"
                          className="btn btn-md dark:btn-white-dark btn-white w-full block text-center hover:btn-primary before:content-none first-letter:uppercase">
                          Get started
                        </Link>
                      </div>
                      {/*  pricing feature list  */}
                      <ul className="space-y-4 pt-[47px]">
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Core features meeting
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            UI/UX wireframes for main flows
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Emphasize core functions.
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Quick launch (2–3 weeks)
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Great for quick validation and pitches.
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            1 revision + basic QA.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </RevealAnimation>
                  {/* Price Card 2 */}
                  <RevealAnimation delay={0.7}>
                    <div className="p-2.5 rounded-[20px] bg-[url('/images/home-page-2/price-bg.png')] bg-no-repeat bg-center bg-cover basis-[408px]">
                      <div className="bg-background-1 dark:bg-background-6 px-5 md:px-14 lg:px-6 xl:px-14 py-[60px] rounded-[14px]">
                        <div className="pb-[47px] border-b border-b-stroke-2 dark:border-b-stroke-6">
                          <h3 id="growth-plan" className="mb-4 font-normal text-heading-5">
                            Growth plan.
                          </h3>
                          {/* monthly plan  */}
                          <div className="price-month mb-7">
                            <h4 className="text-heading-4 font-normal">
                              $<span>{isMonthly ? '4300' : '51600'}</span>
                              <span className="text-tagline-2 text-secondary dark:text-accent/60">
                                /{isMonthly ? 'Month' : 'Year'}
                              </span>
                            </h4>
                          </div>

                          <Link
                            href="/contact-us"
                            className="btn btn-lg btn-primary w-full block text-center hover:btn-secondary dark:hover:btn-accent before:content-none first-letter:uppercase">
                            Get started
                          </Link>
                        </div>
                        {/*  pricing feature list  */}
                        <ul className="space-y-4 pt-[47px]">
                          <li className="flex items-center gap-3">
                            <span className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={7}
                                viewBox="0 0 10 7"
                                fill="none"
                                className="shrink-0">
                                <path
                                  d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                  className="fill-white dark:fill-secondary"
                                />
                              </svg>
                            </span>
                            <span className="text-tagline-1 text-secondary dark:text-accent">
                              Strategy &amp; feature planning
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={7}
                                viewBox="0 0 10 7"
                                fill="none"
                                className="shrink-0">
                                <path
                                  d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                  className="fill-white dark:fill-secondary"
                                />
                              </svg>
                            </span>
                            <span className="text-tagline-1 text-secondary dark:text-accent">
                              UI/UX (15–20 screens)
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={7}
                                viewBox="0 0 10 7"
                                fill="none"
                                className="shrink-0">
                                <path
                                  d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                  className="fill-white dark:fill-secondary"
                                />
                              </svg>
                            </span>
                            <span className="text-tagline-1 text-secondary dark:text-accent">Full app development</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={7}
                                viewBox="0 0 10 7"
                                fill="none"
                                className="shrink-0">
                                <path
                                  d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                  className="fill-white dark:fill-secondary"
                                />
                              </svg>
                            </span>
                            <span className="text-tagline-1 text-secondary dark:text-accent">
                              API &amp; payment integration
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={7}
                                viewBox="0 0 10 7"
                                fill="none">
                                <path
                                  d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                  className="fill-white dark:fill-secondary"
                                />
                              </svg>
                            </span>
                            <span className="text-tagline-1 text-secondary dark:text-accent">
                              Speed &amp; performance optimized
                            </span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="size-5 rounded-full bg-secondary shrink-0 flex items-center justify-center dark:bg-accent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={10}
                                height={7}
                                viewBox="0 0 10 7"
                                fill="none"
                                className="shrink-0">
                                <path
                                  d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                  className="fill-white dark:fill-secondary"
                                />
                              </svg>
                            </span>
                            <span className="text-tagline-1 text-secondary dark:text-accent">3 revision rounds</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </RevealAnimation>
                  {/* Price Card 3 */}
                  <RevealAnimation delay={0.8}>
                    <div className="bg-background-2 dark:bg-background-5 px-5 md:px-14 lg:px-6 xl:px-14 py-[60px] rounded-[20px] basis-[408px]">
                      {/* pricing info  */}
                      <div className="pb-[47px] border-b border-b-stroke-2 dark:border-stroke-6">
                        <h3 id="enterprise-plan" className="mb-4 font-normal text-heading-5">
                          Startup plan.
                        </h3>
                        {/* monthly plan  */}
                        <div className="price-month mb-7">
                          <h4 className="text-heading-4 font-normal">
                            $<span>{isMonthly ? '7500' : '85000'}</span>
                            <span className="text-tagline-2 text-secondary dark:text-accent/60">
                              /{isMonthly ? 'Month' : 'Year'}
                            </span>
                          </h4>
                        </div>
                        <Link
                          href="/contact-us"
                          className="btn btn-md dark:btn-white-dark btn-white w-full block text-center hover:btn-primary before:content-none first-letter:uppercase">
                          Get started
                        </Link>
                      </div>
                      {/*  pricing feature list  */}
                      <ul className="space-y-4 pt-[47px]">
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Product strategy &amp; roadmap
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Unlimited screens &amp; features
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Cross-platform development
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Advanced integrations
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Dedicated project manager
                          </span>
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="size-5 rounded-full bg-secondary/40 shrink-0 flex items-center justify-center dark:bg-accent/40">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={10}
                              height={7}
                              viewBox="0 0 10 7"
                              fill="none"
                              className="shrink-0">
                              <path
                                d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                                className="fill-white dark:fill-secondary"
                              />
                            </svg>
                          </span>
                          <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                            Security &amp; scalability focused
                          </span>
                        </li>
                      </ul>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
