/**
 * PAGE FORMATIONS
 * URL: /formations
 *
 * Formations SEO, Google Ads et GA4 - sur-mesure et finançables OPCO
 *
 * Alternance couleurs : blue → cyan → purple → blue → cyan → purple
 */

import { Metadata } from 'next';

// Composants shared services
import {
  HeroService,
  FeaturesGrid,
  ProcessSteps,
  ForWhoService,
  FAQService,
  StickyFeatures,
} from '@/components/shared/services';

// Composants shared global
import { CTA, Testimonials, Clients, PricingCards } from '@/components/shared/global';

// SEO - Données structurées
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo';

// ============================================
// CHARGEMENT DYNAMIQUE DES DONNÉES
// ============================================
async function getPageData(locale: string) {
  if (locale === 'en') {
    return import('./data.en');
  }
  return import('./data.fr');
}

// ============================================
// METADATA DYNAMIQUE
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = await getPageData(locale);

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function FormationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPageData(locale);

  // Préparer les données pour les schemas
  const breadcrumbSchemaItems = data.breadcrumbItems.map((item) => ({
    name: item.label,
    url: item.href || 'https://www.rankwell.agency/formations',
  }));

  const faqSchemaItems = data.faqData.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      {/* ========== SCHEMA.ORG ========== */}
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />
      <FAQJsonLd faqs={faqSchemaItems} />

      {/* ========== HERO (blue) ========== */}
      <HeroService
        breadcrumb={data.breadcrumbItems}
        title={data.heroData.title}
        description={data.heroData.description}
        secondaryDescription={data.heroData.secondaryDescription}
        ctaText={data.heroData.ctaText}
        ctaHref={data.heroData.ctaHref}
        accentColor={data.heroData.accentColor}
        showTrustIndicator={false}
        locale={locale as 'fr' | 'en'}
      />

      {/* ========== USP - Points forts (cyan, fond blanc) ========== */}
      <FeaturesGrid
        sectionId={data.uspData.sectionId}
        badge={data.uspData.badge}
        badgeVariant="colored"
        title={data.uspData.title}
        items={data.uspData.items}
        accentColor={data.uspData.accentColor}
        columns={3}
        bgWhite
      />

      {/* ========== NOS FORMATIONS (purple) ========== */}
      <PricingCards
        sectionId={data.formationsData.sectionId}
        badge={data.formationsData.badge}
        title={data.formationsData.title}
        subtitle={data.formationsData.subtitle}
        items={data.formationsData.items}
        accentColor={data.formationsData.accentColor}
      />

      {/* ========== APPROCHE SUR-MESURE (blue) ========== */}
      <ProcessSteps
        sectionId={data.approachData.sectionId}
        badge={data.approachData.badge}
        title={data.approachData.title}
        subtitle={data.approachData.subtitle}
        steps={data.approachData.steps}
        accentColor={data.approachData.accentColor}
      />

      {/* ========== CLIENTS ========== */}
      <Clients locale={locale as 'fr' | 'en'} />

      {/* ========== FINANCEMENT (cyan) ========== */}
      <FeaturesGrid
        sectionId={data.financementData.sectionId}
        badge={data.financementData.badge}
        badgeVariant="colored"
        title={data.financementData.title}
        subtitle={data.financementData.subtitle}
        items={data.financementData.items}
        accentColor={data.financementData.accentColor}
        columns={3}
        bgWhite
      />

      {/* ========== POUR QUI (purple) ========== */}
      <ForWhoService
        sectionId={data.forWhoData.sectionId}
        badge={data.forWhoData.badge}
        title={data.forWhoData.title}
        subtitle={data.forWhoData.subtitle}
        criteria={data.forWhoData.criteria}
        ctaTitle={data.forWhoData.ctaTitle}
        ctaDescription={data.forWhoData.ctaDescription}
        ctaButtonText={data.forWhoData.ctaButtonText}
        ctaButtonHref={data.forWhoData.ctaButtonHref}
        accentColor={data.forWhoData.accentColor}
      />

      {/* ========== MODALITÉS (blue) ========== */}
      <StickyFeatures
        sectionId={data.modalitesData.sectionId}
        badge={data.modalitesData.badge}
        title={data.modalitesData.title}
        subtitle={data.modalitesData.subtitle}
        items={data.modalitesData.items}
        accentColor={data.modalitesData.accentColor}
      />

      {/* ========== TESTIMONIALS ========== */}
      <Testimonials locale={locale as 'fr' | 'en'} />

      {/* ========== FAQ (cyan) ========== */}
      <FAQService
        sectionId={data.faqData.sectionId}
        badge={data.faqData.badge}
        title={data.faqData.title}
        subtitle={data.faqData.subtitle}
        items={data.faqData.items}
        accentColor={data.faqData.accentColor}
      />

      {/* ========== CTA (purple) ========== */}
      <CTA
        title={data.ctaData.title}
        description={data.ctaData.description}
        secondaryDescription={data.ctaData.secondaryDescription}
        buttonText={data.ctaData.buttonText}
        buttonHref={data.ctaData.buttonHref}
        checklistItems={data.ctaData.checklistItems}
        accentColor={data.ctaData.accentColor}
      />
    </>
  );
}
