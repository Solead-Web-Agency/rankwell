/**
 * ============================================
 * SHARED/SERVICES - Composants pour les pages services
 * ============================================
 *
 * Ces composants sont utilisés sur les pages de type "service" (GEO/SEO, SEA, Data, etc.)
 * Ils sont génériques et acceptent des props pour customiser le contenu.
 *
 * Couleurs par catégorie :
 * - GEO/SEO : accentColor="rw-blue"
 * - SEA     : accentColor="rw-cyan"
 * - DATA    : accentColor="rw-purple"
 * - Compléments : "rw-coral", "rw-pink"
 *
 * Usage:
 * import { HeroService, IntroService } from '@/components/shared/services';
 */

// Re-export des types de couleur pour usage dans les pages
export { type RwColor, colorVariants, serviceThemes } from '@/lib/colorTheme';

export { default as HeroService, type HeroServiceProps, type BreadcrumbItem } from './HeroService';
export { default as IntroService, type IntroServiceProps, type TocItem } from './IntroService';
export { default as FAQService, type FAQServiceProps, type FAQServiceItem } from './FAQService';
export { default as RecapBoxService, type RecapBoxServiceProps, type RecapItem } from './RecapBoxService';
export { default as TableauService, type TableauServiceProps } from './TableauService';
export { default as FeaturesGrid, type FeaturesGridProps, type FeatureItem } from './FeaturesGrid';
export { default as ForWhoService, type ForWhoServiceProps, type CriteriaItem } from './ForWhoService';
export { default as OutilsService, type OutilsServiceProps, type ToolLogo, type ToolCategory } from './OutilsService';
export { default as StepsDimensions, type StepsDimensionsProps, type StepDimensionItem } from './StepsDimensions';
export { default as ProcessSteps, type ProcessStepsProps, type ProcessStepItem } from './ProcessSteps';
export { default as ProcessGrid, type ProcessGridProps, type ProcessGridItem } from './ProcessGrid';
export { default as DeliverablesGrid, type DeliverablesGridProps, type DeliverableItem } from './DeliverablesGrid';
export { default as StickyFeatures, type StickyFeaturesProps, type StickyFeatureItem } from './StickyFeatures';
export { default as ReasonsGrid, type ReasonsGridProps, type ReasonItem } from './ReasonsGrid';
export { default as WarningsList, type WarningsListProps, type WarningItem } from './WarningsList';
export { default as ServicesGrid, type ServicesGridProps, type ServiceGridItem } from './ServicesGrid';
export { default as ServicesCards, type ServicesCardsProps, type ServiceCardItem } from './ServicesCards';
export { default as TwoPathsSection, type TwoPathsSectionProps, type PathItem } from './TwoPathsSection';
export { default as CategoriesGrid, type CategoriesGridProps, type CategoryItem } from './CategoriesGrid';
