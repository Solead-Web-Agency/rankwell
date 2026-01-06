/**
 * CTA - Call-to-action final de page
 * Composant global utilisable sur toutes les pages
 *
 * Couleurs par catégorie de service :
 * - GEO/SEO : rw-blue
 * - SEA     : rw-cyan
 * - DATA    : rw-purple
 */

import { ReactNode } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { CheckIcon } from '@/icons';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import type { Locale } from '@/lib/i18n';

// Textes par défaut localisés
const defaultTexts: Record<Locale, {
  title: ReactNode;
  description: string;
  secondaryDescription: string;
  buttonText: string;
  checklistItems: { id: string; text: string }[];
}> = {
  fr: {
    title: <>Prêt à dominer <span className="text-rw-cyan">le Search ?</span></>,
    description: "Google, ChatGPT, Perplexity... Peu importe où vos clients cherchent. L'important est d'être la référence qu'on cite. Notre approche GEO & SEO unifiée vous y prépare.",
    secondaryDescription: "Première étape : un pré-audit de votre visibilité actuelle. Nous identifions les opportunités et les freins. Sans engagement.",
    buttonText: "Parlons de votre visibilité",
    checklistItems: [
      { id: '1', text: 'Sans engagement' },
      { id: '2', text: 'Pré-audit offert' },
      { id: '3', text: '30 minutes' },
    ],
  },
  en: {
    title: <>Ready to dominate <span className="text-rw-cyan">Search?</span></>,
    description: "Google, ChatGPT, Perplexity... No matter where your customers search. What matters is being the reference they cite. Our unified GEO & SEO approach prepares you for it.",
    secondaryDescription: "First step: a pre-audit of your current visibility. We identify opportunities and obstacles. No commitment.",
    buttonText: "Let's talk about your visibility",
    checklistItems: [
      { id: '1', text: 'No commitment' },
      { id: '2', text: 'Free pre-audit' },
      { id: '3', text: '30 minutes' },
    ],
  },
};

interface CTAProps {
  title?: ReactNode;
  description?: string;
  secondaryDescription?: string;
  buttonText?: string;
  buttonHref?: string;
  checklistItems?: { id: string; text: string }[];
  /** Couleur d'accent pour le bouton et les checks (blue pour GEO/SEO, cyan pour SEA, purple pour Data) */
  accentColor?: RwColor;
  /** Locale pour les textes par défaut */
  locale?: Locale;
}

const CTA = ({
  title,
  description,
  secondaryDescription,
  buttonText,
  buttonHref = "/contact",
  checklistItems,
  accentColor = 'rw-blue',
  locale = 'fr',
}: CTAProps) => {
  // Utiliser les textes passés en props ou les valeurs par défaut selon la locale
  const defaults = defaultTexts[locale];
  const finalTitle = title ?? defaults.title;
  const finalDescription = description ?? defaults.description;
  const finalSecondaryDescription = secondaryDescription ?? defaults.secondaryDescription;
  const finalButtonText = buttonText ?? defaults.buttonText;
  const finalChecklistItems = checklistItems ?? defaults.checklistItems;
  const colors = colorVariants[accentColor];
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="main-container">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="mb-3 max-w-[810px] text-center mx-auto">
              {finalTitle}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mb-4 lg:max-w-[600px] mx-auto">
              {finalDescription}
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.25}>
            <p className="mb-8 lg:max-w-[600px] mx-auto">
              {finalSecondaryDescription}
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="md:inline-block text-center">
              <LinkButton
                href={buttonHref}
                className={`btn ${colors.bg} text-white hover:opacity-90 btn-md block w-full md:w-auto md:inline-block text-center mx-auto md:mx-0 text-tagline-2`}>
                {finalButtonText}
              </LinkButton>
            </div>
          </RevealAnimation>

          {/* Checklist */}
          <div className="flex flex-wrap max-lg:gap-5 items-center justify-center mt-5 md:mt-8 gap-[42px]">
            {finalChecklistItems.map((item, index) => (
              <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
                <div className="flex items-center gap-3">
                  <span className={`size-5 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <CheckIcon className="fill-white size-3" />
                  </span>
                  <span className="text-tagline-2 text-secondary dark:text-accent">{item.text}</span>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

CTA.displayName = 'CTA';
export default CTA;
