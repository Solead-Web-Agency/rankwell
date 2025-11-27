import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import gradient4 from '@public/images/gradient/gradient-4.png';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import { PricingFeature } from './FeatureList';

export interface PricingPlan {
  id: string;
  badge: string;
  title: string;

  description: string;
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean;
  features: PricingFeature[];
}

interface PricingCardProps {
  plan: PricingPlan;
  delay: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, delay }) => (
  <div className="col-span-12 md:col-span-6 xl:col-span-3">
    <RevealAnimation delay={delay}>
      <div>
        <div
          className={cn(
            'rounded-t-[20px] py-8 px-6 space-y-8',
            plan.isPopular
              ? 'relative bg-secondary dark:bg-background-5 overflow-hidden'
              : 'bg-background-3 dark:bg-background-7',
          )}>
          {plan.isPopular && (
            <div className="absolute h-full w-full -top-28 -right-20 select-none pointer-events-none">
              <Image src={gradient4} alt="pricing bg" />
            </div>
          )}
          <div>
            <p
              className={cn(
                'text-tagline-1 font-medium mb-3',
                plan.isPopular ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
              )}>
              {plan.badge}
            </p>
            <h3
              className={cn(
                'text-heading-5 font-normal',
                plan.isPopular ? 'text-accent' : 'text-secondary dark:text-accent',
              )}>
              {plan.title}
            </h3>
            <p
              className={cn(
                'text-secondary/60 dark:text-accent/60',
                plan.isPopular ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60',
              )}>
              {plan.description}
            </p>
          </div>
          <Link
            href={plan.buttonHref}
            className={cn(
              'btn btn-md w-full before:content-none first-letter:uppercase',
              plan.isPopular
                ? 'btn-primary hover:btn-white dark:hover:btn-accent'
                : 'btn-white hover:btn-primary dark:btn-white-dark',
            )}>
            {plan.buttonText}
          </Link>
        </div>
        <div className="rounded-b-[20px] bg-background-1 dark:bg-background-5">
          <ul>
            {plan.features.map((feature) => (
              <li
                key={feature.id}
                className={cn(
                  'h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-b-stroke-5 last:border-b-0',
                  feature.included && !feature.value && 'flex items-center justify-center',
                )}>
                {feature.value ? (
                  <p className="font-medium text-secondary/60 dark:text-accent/60">{feature.value}</p>
                ) : (
                  feature.included && (
                    <span className="size-5 shrink-0 bg-secondary rounded-full dark:bg-accent">
                      <CheckIcon />
                    </span>
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RevealAnimation>
  </div>
);

PricingCard.displayName = 'PricingCard';
export default PricingCard;
