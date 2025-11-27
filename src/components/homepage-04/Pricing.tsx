import pricingPlan from '@/data/json/pricing/pricingPlanV2.json';
import { CheckIcon } from '@/icons';
import gradient4Image from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

export default function Pricing() {
  return (
    <section className="py-14 md:py-20 xl:py-[120px]">
      <div className="bg-background-2 dark:bg-background-5 mx-auto max-w-[1440px] space-y-[70px] rounded-[20px] px-8 py-20 xl:rounded-[32px] xl:px-16 xl:py-[120px]">
        <div className="mx-auto max-w-2xl space-y-3 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-cyan">Our pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Select the pricing plan that best suits your needs.</h2>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 gap-y-5 md:gap-6 xl:gap-8">
          <RevealAnimation delay={0.3}>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <div>
                <div className="w-[290px] xl:h-[195px]" />
                <div className="space-y-2.5">
                  <h3 className="text-heading-6">What&apos;s included</h3>
                  <ul>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      Pages included
                    </li>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      Custom design
                    </li>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      SEO optimization
                    </li>
                    <li className="text-secondary/60 text-tagline-1 border-b-stroke-4 dark:border-b-stroke-5 dark:text-accent/60 border-b py-4 pr-6 font-normal">
                      Branding support
                    </li>
                    <li className="text-secondary/60 text-tagline-1 py-4 pr-6 font-normal">Social media integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </RevealAnimation>
          {pricingPlan.map((plan, i) => (
            <RevealAnimation key={plan.name} delay={0.4 + i * 0.1}>
              <div className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  {/* Top card */}
                  <div
                    className={`${
                      plan.isSecondary
                        ? 'bg-secondary text-accent relative z-10 overflow-hidden'
                        : 'bg-background-3 dark:bg-background-7'
                    } space-y-8 rounded-[20px] px-6 py-8 dark:rounded-t-[20px] dark:rounded-b-none`}>
                    {plan.withGradientImg && (
                      <div className="pointer-events-none absolute -top-28 -right-20 -z-1 h-full w-full select-none">
                        <Image src={gradient4Image} alt="pricing bg" />
                      </div>
                    )}

                    <div>
                      <p className={`text-tagline-1 mb-3 font-medium ${plan.isSecondary ? 'text-accent/60' : ''}`}>
                        {plan.name}
                      </p>
                      <h3 className={`text-heading-5 font-normal ${plan.isSecondary ? 'text-accent' : ''}`}>
                        {plan.price}
                      </h3>
                      <p className={plan.isSecondary ? 'text-accent/60' : ''}>{plan.description}</p>
                    </div>

                    <Link
                      href={plan.ctaHref}
                      className={
                        i === 0 || i === pricingPlan.length - 1
                          ? 'btn btn-white dark:btn-white-dark hover:btn-secondary dark:hover:btn-white btn-md w-full first-letter:uppercase before:content-none'
                          : 'btn btn-primary hover:btn-white dark:hover:btn-white btn-md w-full !border-none first-letter:uppercase before:content-none'
                      }>
                      {plan.ctaText}
                    </Link>
                  </div>

                  {/* Bottom list */}
                  <div className="bg-background-1 dark:bg-background-6 rounded-[20px] dark:rounded-t-none dark:rounded-b-[20px]">
                    <ul>
                      {plan.cells.map((cell, idx) => {
                        const isLast = idx === plan.cells.length - 1;
                        const base = 'border-b-stroke-4 dark:border-b-stroke-5 h-14 px-6 py-4 text-center';
                        const rowClass = `${!isLast ? 'border-b' : ''} ${
                          // rows with icons should be flex-centered (like your HTML)
                          cell.type === 'icon' ? 'flex items-center justify-center' : ''
                        }`;

                        return (
                          <li key={idx} className={`${base} ${rowClass}`}>
                            {cell.type === 'text' ? (
                              cell.value ? (
                                <p className="font-medium">{cell.value}</p>
                              ) : null
                            ) : (
                              <span className="size-5 bg-secondary rounded-full dark:bg-accent">
                                <CheckIcon />
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
