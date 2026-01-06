/**
 * ============================================
 * SHARED/HOMEPAGE - Composants exclusifs à la page d'accueil
 * ============================================
 *
 * Ces composants sont UNIQUEMENT utilisés sur la page d'accueil.
 * Ils reçoivent leurs données textuelles via props depuis data.ts.
 *
 * Usage:
 * import { HeroHomepage, IntroHomepage, ServicesHomepage } from '@/components/shared/homepage';
 */

export { default as HeroHomepage } from './HeroHomepage';
export { default as Certifications } from './Certifications';
export { default as IntroHomepage } from './IntroHomepage';
export { default as ServicesHomepage } from './ServicesHomepage';
export { default as WhyUsHomepage } from './WhyUsHomepage';
export { default as ProcessHomepage } from './ProcessHomepage';
export { default as FAQHomepage } from './FAQHomepage';

// Types exports
export type { HeroHomepageProps } from './HeroHomepage';
export type { IntroHomepageProps, IntroHighlight } from './IntroHomepage';
export type { ServicesHomepageProps, ServiceItem } from './ServicesHomepage';
export type { ProcessHomepageProps, ProcessStep } from './ProcessHomepage';
export type { WhyUsHomepageProps, WhyUsCard } from './WhyUsHomepage';
export type { FAQHomepageProps, FAQHomepageItem } from './FAQHomepage';
