/**
 * PRICINGCARDS - Cartes tarifs/formations style pricing
 *
 * Basé sur homepage-18/Pricing.tsx du thème
 * 3 cartes avec titre, description, prix, features, bouton
 * Une carte peut être "featured" avec fond gradient
 */

'use client';

import { CheckIcon } from '@/icons';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

// ============================================
// TYPES
// ============================================
export interface PricingFeature {
  label: string;
  enabled: boolean;
}

export interface PricingCardItem {
  id: string;
  title: string;
  tagline?: string;
  description?: string;
  price: string;
  priceNote?: string;
  details?: {
    duration?: string;
    format?: string;
  };
  buttonText: string;
  buttonHref: string;
  featured?: boolean;
  features: PricingFeature[];
}

export interface PricingCardsProps {
  sectionId: string;
  badge: string;
  title: string;
  subtitle?: string;
  items: PricingCardItem[];
  accentColor?: RwColor;
}

// ============================================
// COMPOSANT
// ============================================
const PricingCards = ({
  sectionId,
  badge,
  title,
  subtitle,
  items,
  accentColor = 'rw-blue',
}: PricingCardsProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section
      id={sectionId}
      className="relative pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-background-3 dark:bg-background-7"
    >
      <div className="main-container flex flex-col gap-[70px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <RevealAnimation delay={0.2}>
            <span className={`badge ${colors.badge} mb-5`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="mb-3">{title}</h2>
          </RevealAnimation>
          {subtitle && (
            <RevealAnimation delay={0.4}>
              <p className="max-w-[700px]">{subtitle}</p>
            </RevealAnimation>
          )}
        </div>

        {/* Cards Grid */}
        <div className="relative">
          <div className="grid grid-cols-12 items-stretch justify-items-center gap-y-10 lg:gap-x-8">
            {items.map((plan, idx) => (
              <RevealAnimation key={plan.id} delay={0.2 + idx * 0.1} className="col-span-12 lg:col-span-4 w-full">
                <div
                  className={cn(
                    'flex flex-col h-full rounded-[20px] max-w-[604px] w-full mx-auto',
                    plan.featured
                      ? `p-[3px] ${colors.bg}`
                      : 'bg-white dark:bg-black p-8'
                  )}
                >

                  <div
                    className={cn(
                      'flex flex-col h-full',
                      plan.featured &&
                        'bg-white relative z-10 dark:bg-black p-8 rounded-[12px]'
                    )}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-heading-5 font-medium mb-2">{plan.title}</h3>
                      {plan.tagline && (
                        <p className={`text-sm ${colors.text}`}>{plan.tagline}</p>
                      )}
                    </div>

                    {/* Details badges */}
                    {plan.details && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {plan.details.duration && (
                          <span className="px-3 py-1 bg-background-2 dark:bg-background-6 rounded-full text-sm text-secondary/70 dark:text-accent/70">
                            {plan.details.duration}
                          </span>
                        )}
                        {plan.details.format && (
                          <span className="px-3 py-1 bg-background-2 dark:bg-background-6 rounded-full text-sm text-secondary/70 dark:text-accent/70">
                            {plan.details.format}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    {plan.description && (
                      <p className="text-secondary/80 dark:text-accent/80 mb-6">
                        {plan.description}
                      </p>
                    )}

                    {/* Price & CTA */}
                    <div className="border-b border-stroke-2 dark:border-stroke-6 pb-6 mb-6">
                      <div className="mb-4">
                        <span className="text-heading-4 font-semibold text-secondary dark:text-accent">
                          {plan.price}
                        </span>
                        {plan.priceNote && (
                          <span className="text-tagline-2 text-secondary/60 dark:text-accent/60 ml-2">
                            {plan.priceNote}
                          </span>
                        )}
                      </div>
                      <Link
                        href={plan.buttonHref}
                        className={cn(
                          'btn btn-md w-full block text-center',
                          plan.featured
                            ? `${colors.bg} text-white hover:opacity-90`
                            : `btn-white dark:btn-transparent ${colors.hoverBg} hover:text-white`
                        )}
                      >
                        {plan.buttonText}
                      </Link>
                    </div>

                    {/* Features */}
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-secondary dark:text-accent mb-4">
                        Vous saurez :
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-2.5">
                            <span
                              className={cn(
                                'flex size-5 items-center justify-center rounded-full shrink-0 mt-0.5',
                                feature.enabled
                                  ? colors.bg
                                  : 'bg-secondary/30 dark:bg-accent/30'
                              )}
                            >
                              <CheckIcon className="fill-white dark:fill-white w-3 h-3" />
                            </span>
                            <span
                              className={cn(
                                'font-normal text-sm',
                                feature.enabled
                                  ? 'text-secondary dark:text-accent'
                                  : 'text-secondary/60 dark:text-accent/60'
                              )}
                            >
                              {feature.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

PricingCards.displayName = 'PricingCards';
export default PricingCards;
