/**
 * STACKCARDSSECTION - Section avec texte sticky et stack cards
 *
 * Basé sur WhyUsHomepage mais générique avec accentColor.
 * Design: 2 colonnes - texte sticky à gauche, cartes empilées à droite
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import StackCardItem from '@/components/ui/stack-card/StackCardItem';
import StackCardWrapper from '@/components/ui/stack-card/StackCardWrapper';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import { ReactNode } from 'react';
import Icon from '@/components/ui/Icon';

// ============================================
// TYPES
// ============================================
export interface StackCard {
  id?: number | string;
  icon: string;
  title: string;
  description: string;
}

export interface StackCardsSectionProps {
  sectionId?: string;
  badge: string;
  title: ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  cards: StackCard[];
  accentColor?: RwColor;
}

// ============================================
// COMPOSANT
// ============================================
const StackCardsSection = ({
  sectionId,
  badge,
  title,
  description,
  ctaText,
  ctaHref,
  cards,
  accentColor = 'rw-blue',
}: StackCardsSectionProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="flex lg:flex-row flex-col items-start lg:gap-[100px] md:gap-y-20 gap-y-10 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px]">
          {/* Left side - Sticky content */}
          <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
            <RevealAnimation delay={0.2}>
              <span className={`badge ${colors.badge} mb-5`}>{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 whitespace-normal">
                {title}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mb-14 lg:max-w-[620px]">{description}</p>
            </RevealAnimation>
            {ctaText && ctaHref && (
              <RevealAnimation delay={0.5}>
                <div>
                  <LinkButton
                    href={ctaHref}
                    className={`btn btn-secondary ${colors.hoverBg} hover:text-white hover:border-transparent btn-md dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto`}
                  >
                    {ctaText}
                  </LinkButton>
                </div>
              </RevealAnimation>
            )}
          </div>

          {/* Right side - Stack Cards */}
          <StackCardWrapper
            topOffset="15vh"
            gap="24px"
            initDelay={100}
            className="w-full lg:flex-1 lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto"
          >
            {cards.map((card, index) => (
              <StackCardItem key={card.id || index + 1}>
                <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                  <Icon name={card.icon as any} className={`w-10 h-10 ${colors.text}`} />
                  <div className="space-y-1">
                    <h3 className="text-heading-5">{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </div>
              </StackCardItem>
            ))}
          </StackCardWrapper>
        </div>
      </div>
    </section>
  );
};

StackCardsSection.displayName = 'StackCardsSection';
export default StackCardsSection;
