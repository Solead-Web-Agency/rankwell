/**
 * ============================================
 * SHARED/GLOBAL - Composants globaux du site
 * ============================================
 *
 * Ces composants peuvent être utilisés sur TOUTES les pages du site.
 * Ils ne sont pas spécifiques à un type de page (homepage, services, etc.)
 *
 * Usage:
 * import { Quote, CTA, Clients } from '@/components/shared/global';
 */

// Composants de contenu
export { default as Quote } from './Quote';
export { default as Clients } from './Clients';
export { default as HeroAgence, type HeroAgenceProps } from './HeroAgence';
export { default as Testimonials } from './Testimonials';
export { default as TrustBanner } from './TrustBanner';
export { default as PointVigilance } from './PointVigilance';
export { default as CTA } from './CTA';

// Composants structurels génériques
export { default as RecapBox, type RecapBoxProps, type RecapItem } from './RecapBox';
export { default as FAQ, type FAQProps, type FAQItem } from './FAQ';
export { default as ProcessCards, type ProcessCardsProps, type ProcessStep } from './ProcessCards';
export { default as ProcessTimeline, type ProcessTimelineProps, type TimelineStep } from './ProcessTimeline';
export { default as ContentWithHighlight, type ContentWithHighlightProps, type ContentBlock, type HighlightBox } from './ContentWithHighlight';
export { default as StackCardsSection, type StackCardsSectionProps, type StackCard } from './StackCardsSection';
export { default as KeyFiguresAnimated, type KeyFiguresAnimatedProps, type KeyFigureItem } from './KeyFiguresAnimated';
export { default as Map, type MapProps } from './Map';
export { default as OfficesMap, type OfficesMapProps, type OfficeItem } from './OfficesMap';
export { default as OfficesDetailed } from './OfficesDetailed';
export { default as PricingCards, type PricingCardsProps, type PricingCardItem, type PricingFeature } from './PricingCards';
export { default as ContactSection, type ContactSectionProps, type ContactInfoItem, type ContactFormLabels, type OfficeContactInfo } from './ContactSection';
export { default as PageHero, type PageHeroProps, type PageHeroBreadcrumbItem } from './PageHero';
export { default as OfficeSingle, type OfficeSingleProps, type OfficeSingleData } from './OfficeSingle';
