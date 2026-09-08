/**
 * ============================================
 * SHARED/LANDING - Composants des landing pages conversion
 * ============================================
 *
 * Pages standalone (sans header/footer du site) orientées génération de leads :
 * formulaire en modale, CTA multiples, barre sticky mobile, exit intent.
 *
 * Usage:
 * import { LandingShell, LandingHero } from '@/components/shared/landing';
 */

export { default as LandingShell } from './LandingShell';
export { default as LandingHeader, type LandingHeaderProps } from './LandingHeader';
export { default as LandingHero, type LandingHeroProps } from './LandingHero';
export { default as LandingOffer, type LandingOfferProps } from './LandingOffer';
export { default as LandingFinalCta, type LandingFinalCtaProps } from './LandingFinalCta';
export { default as LandingFooter, type LandingFooterProps } from './LandingFooter';
export { default as LandingCtaButton } from './LandingCtaButton';
export { default as PhoneReveal, type PhoneRevealProps } from './PhoneReveal';
export { default as LeadModal, type LeadModalContent } from './LeadModal';
export { default as LandingStickyBar, type LandingStickyBarContent } from './LandingStickyBar';
export { useLanding } from './LandingContext';
