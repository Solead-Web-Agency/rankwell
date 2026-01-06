/**
 * FORWHOSERVICE - Section "Pour qui" générique pour pages services
 *
 * Design en 2 colonnes :
 * - Gauche : Liste de critères avec checkmarks
 * - Droite : Box CTA avec icône
 *
 * Props:
 * - sectionId: ID de la section pour ancrage (défaut: 'pour-qui')
 * - badge: Texte du badge (défaut: 'Pour qui ?')
 * - title: Titre de la section
 * - subtitle: Sous-titre descriptif
 * - criteria: Liste des critères - peut être :
 *   - string[] : texte simple (ex: ['Critère 1', 'Critère 2'])
 *   - { label: string, description?: string }[] : avec sous-description optionnelle
 * - ctaTitle: Titre de la box CTA
 * - ctaDescription: Description de la box CTA
 * - ctaButtonText: Texte du bouton CTA
 * - ctaButtonHref: Lien du bouton CTA
 * - accentColor: Couleur d'accent (défaut: 'rw-blue')
 *
 * Usage simple:
 * <ForWhoService
 *   title="Pour qui ?"
 *   criteria={['Critère 1', 'Critère 2']}
 * />
 *
 * Usage avec descriptions:
 * <ForWhoService
 *   title="Pour qui ?"
 *   criteria={[
 *     { label: 'Sites qui stagnent', description: 'Malgré du contenu de qualité' },
 *     { label: 'Refontes à venir', description: 'Partir sur de bonnes bases' },
 *   ]}
 * />
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import { Handshake } from 'lucide-react';
import type { Locale } from '@/lib/i18n';

// ============================================
// LOCALIZED DEFAULTS
// ============================================
const defaultTexts: Record<Locale, {
  badge: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
}> = {
  fr: {
    badge: 'Pour qui ?',
    ctaTitle: 'Vous vous reconnaissez ?',
    ctaDescription: 'Que vous soyez e-commerce, SaaS, B2B, service ou autre — si vous partagez cette vision, on peut construire ensemble.',
    ctaButtonText: 'Discutons de votre projet',
  },
  en: {
    badge: 'Who is it for?',
    ctaTitle: 'Sound like you?',
    ctaDescription: 'Whether you\'re e-commerce, SaaS, B2B, or service-based — if you share this vision, we can build together.',
    ctaButtonText: 'Let\'s discuss your project',
  },
};

// Type pour les critères : soit string simple, soit objet avec label + description
export type CriteriaItem = string | { label: string; description?: string };

export interface ForWhoServiceProps {
  sectionId?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  criteria: CriteriaItem[];
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  accentColor?: RwColor;
  locale?: Locale;
}

const ForWhoService = ({
  sectionId = 'pour-qui',
  badge,
  title,
  subtitle,
  criteria,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonHref = '/contact',
  accentColor = 'rw-blue',
  locale = 'fr',
}: ForWhoServiceProps) => {
  const defaults = defaultTexts[locale];
  const finalBadge = badge ?? defaults.badge;
  const finalCtaTitle = ctaTitle ?? defaults.ctaTitle;
  const finalCtaDescription = ctaDescription ?? defaults.ctaDescription;
  const finalCtaButtonText = ctaButtonText ?? defaults.ctaButtonText;
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        {/* Header centré */}
        <div className="text-center space-y-3 mb-16">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{finalBadge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[700px] mx-auto">{title}</h2>
          </RevealAnimation>
          {subtitle && (
            <RevealAnimation delay={0.3}>
              <p className="max-w-[700px] mx-auto">{subtitle}</p>
            </RevealAnimation>
          )}
        </div>

        {/* 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Critères */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-4">
              {criteria.map((item, index) => {
                // Normaliser l'item : string ou objet
                const isSimple = typeof item === 'string';
                const label = isSimple ? item : item.label;
                const description = isSimple ? undefined : item.description;

                return (
                  <div key={`${label}-${index}`} className="flex items-start gap-4 p-4 rounded-xl bg-background-1 dark:bg-background-6">
                    <div className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-secondary dark:text-accent">{label}</p>
                      {description && (
                        <p className="text-sm text-secondary/70 dark:text-accent/70">{description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealAnimation>

          {/* Right: CTA Box */}
          <RevealAnimation delay={0.5}>
            <div className="p-8 lg:p-10 bg-background-1 dark:bg-background-6 rounded-[20px] space-y-6">
              <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-heading-5 font-normal">{finalCtaTitle}</h3>
              <p className="text-secondary/70 dark:text-accent/70">{finalCtaDescription}</p>
              <a
                href={ctaButtonHref}
                className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} text-white rounded-full font-medium hover:opacity-90 transition-opacity`}
              >
                {finalCtaButtonText}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ForWhoService.displayName = 'ForWhoService';
export default ForWhoService;
