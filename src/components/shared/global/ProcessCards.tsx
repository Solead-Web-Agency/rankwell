/**
 * PROCESSCARDS - Grille de cartes process (style process-01)
 * Composant global utilisable sur toutes les pages
 *
 * Design: 3 cartes en haut, 2 centrées en bas (grille 12 colonnes)
 *
 * Props:
 * - sectionId: ID pour l'ancre
 * - badge: Texte du badge
 * - badgeClassName: Classes CSS du badge
 * - title: Titre de la section
 * - subtitle: Sous-titre
 * - steps: Tableau de 5 étapes [{id, stepNumber, title, description, icon}]
 * - accentColor: Couleur d'accent
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import type { Locale } from '@/lib/i18n';

// ============================================
// LOCALIZED DEFAULTS
// ============================================
const defaultTexts: Record<Locale, { title: string; subtitle: string }> = {
  fr: {
    title: 'Comment ça marche ?',
    subtitle: 'Description du processus',
  },
  en: {
    title: 'How does it work?',
    subtitle: 'Our process description',
  },
};

// ============================================
// TYPES
// ============================================
export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessCardsProps {
  sectionId?: string;
  badge?: string;
  badgeClassName?: string;
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  accentColor?: string;
  locale?: Locale;
}

const ProcessCards = ({
  sectionId = 'process',
  badge = 'Process',
  badgeClassName = 'bg-rw-blue-light text-rw-blue',
  title,
  subtitle,
  steps = [],
  accentColor = 'rw-blue',
  locale = 'fr',
}: ProcessCardsProps) => {
  const defaults = defaultTexts[locale];
  const finalTitle = title ?? defaults.title;
  const finalSubtitle = subtitle ?? defaults.subtitle;
  return (
    <section id={sectionId} className="py-[100px] bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-[72px]">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${badgeClassName}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2 className="max-w-[552px] mx-auto">{finalTitle}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="max-w-[692px] mx-auto">
              {finalSubtitle}
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-12 md:gap-8 gap-y-5">
          {steps.map((step, index) => {
            // Special layout for steps 4 and 5 (bottom row)
            const isBottomRow = index >= 3;
            const colClass =
              isBottomRow && index === 3
                ? 'col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-3'
                : 'col-span-12 md:col-span-6 lg:col-span-4';

            return (
              <div key={step.id} className={colClass}>
                <RevealAnimation delay={0.3 + index * 0.1}>
                  <div className="sm:p-8 p-5 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-8 h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <p className={`text-tagline-2 text-${accentColor}`}>{step.stepNumber}</p>
                      <Icon name={step.icon as any} className="w-12 h-12 text-secondary dark:text-accent" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="sm:text-heading-5 text-heading-6 font-normal">{step.title}</h3>
                      <p className="text-secondary/70 dark:text-accent/70">{step.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ProcessCards.displayName = 'ProcessCards';
export default ProcessCards;
