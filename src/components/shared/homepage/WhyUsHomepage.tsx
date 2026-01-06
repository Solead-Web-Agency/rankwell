/**
 * WHYUSHOMEPAGE - Section "Pourquoi nous choisir" spécifique à la page d'accueil
 * Design: 2 colonnes avec texte sticky et stack cards
 *
 * Props: Toutes les données textuelles viennent de data.ts
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import StackCardItem from '@/components/ui/stack-card/StackCardItem';
import StackCardWrapper from '@/components/ui/stack-card/StackCardWrapper';
import Icon from '@/components/ui/Icon';

export interface WhyUsCard {
  icon: string;
  title: string;
  description: string;
}

export interface WhyUsHomepageProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  cards: WhyUsCard[];
}

const WhyUsHomepage = ({
  badge,
  title,
  titleHighlight,
  description,
  ctaText,
  ctaHref,
  cards,
}: WhyUsHomepageProps) => {
  return (
    <section className="bg-background-4 dark:bg-background-5">
      <div className="main-container">
        <div className="flex lg:flex-row flex-col items-start lg:gap-[100px] md:gap-y-20 gap-y-10 pt-14 md:pt-16 lg:pt-[88px] xl:pt-[150px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[150px]">
          {/* Left side - Sticky content */}
          <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
            <RevealAnimation delay={0.2}>
              <span className="badge bg-rw-purple-light text-rw-purple mb-5">{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 whitespace-normal">
                {title} <span className="text-rw-purple">{titleHighlight}</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mb-14 lg:max-w-[620px]">{description}</p>
            </RevealAnimation>
            <RevealAnimation delay={0.5}>
              <div>
                <LinkButton
                  href={ctaHref}
                  className="btn btn-secondary hover:btn-white btn-md dark:btn-transparent dark:hover:btn-accent w-[85%] md:w-auto">
                  {ctaText}
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>

          {/* Right side - Stack Cards */}
          <StackCardWrapper
            topOffset="15vh"
            gap="24px"
            initDelay={100}
            className="w-full lg:flex-1 lg:max-w-full md:max-w-[65%] max-w-[90%] lg:mx-0 mx-auto">
            {cards.map((card, index) => (
              <StackCardItem key={index + 1}>
                <div className="p-8 bg-background-1 dark:bg-background-6 rounded-xl space-y-6 border border-stroke-1/90 dark:border-stroke-5 max-sm:min-h-[255px]">
                  <Icon name={card.icon as any} className="w-10 h-10 text-rw-purple dark:text-rw-purple" />
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

WhyUsHomepage.displayName = 'WhyUsHomepage';
export default WhyUsHomepage;
