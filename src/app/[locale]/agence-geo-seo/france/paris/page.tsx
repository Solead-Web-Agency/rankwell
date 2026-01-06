/**
 * PAGE - Agence GEO & SEO à Paris
 * URL: /agence-geo-seo/france/paris (FR & EN)
 *
 * Page locale prioritaire avec présence physique
 * Cette page existe en français ET en anglais
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Composants shared/services
import {
  IntroService,
  RecapBoxService,
  FeaturesGrid,
  StickyFeatures,
  ForWhoService,
  ServicesCards,
  ProcessSteps,
  FAQService,
} from '@/components/shared/services';

// Composants shared/global
import {
  HeroAgence,
  PointVigilance,
  Quote,
  CTA,
  KeyFiguresAnimated,
  OfficeSingle,
  Clients,
  Testimonials,
} from '@/components/shared/global';

// SEO
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd, LocalBusinessJsonLd } from '@/components/seo';

// Data
import * as dataFr from './data.fr';
import * as dataEn from './data.en';

// ============================================
// TYPES
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

type SupportedLocale = 'fr' | 'en';

// ============================================
// HELPER
// ============================================
function getData(locale: SupportedLocale) {
  return locale === 'en' ? dataEn : dataFr;
}

// ============================================
// METADATA
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  // Cette page existe en FR et EN
  if (locale !== 'fr' && locale !== 'en') {
    return {};
  }

  const data = getData(locale as SupportedLocale);

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: {
      canonical: `https://www.rankwell.agency/${locale}/agence-geo-seo/france/paris`,
      languages: {
        'fr': 'https://www.rankwell.agency/fr/agence-geo-seo/france/paris',
        'en': 'https://www.rankwell.agency/en/agence-geo-seo/france/paris',
      },
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function ParisPage({ params }: PageProps) {
  const { locale } = await params;

  // Cette page existe en FR et EN uniquement
  if (locale !== 'fr' && locale !== 'en') {
    notFound();
  }

  const data = getData(locale as SupportedLocale);

  // Préparer les données pour les schemas
  const breadcrumbSchemaItems = data.heroData.breadcrumb.map((item) => ({
    name: item.label,
    url: item.href || `https://www.rankwell.agency/${locale}/agence-geo-seo/france/paris`,
  }));

  const faqSchemaItems = data.faqData.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      {/* ========== SCHEMA.ORG ========== */}
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />
      <ServiceJsonLd
        service={{
          name: locale === 'en' ? 'GEO and SEO Agency in Paris' : 'Agence GEO et SEO à Paris',
          description: data.metadata.description,
          url: `https://www.rankwell.agency/${locale}/agence-geo-seo/france/paris`,
        }}
      />
      <FAQJsonLd faqs={faqSchemaItems} />
      <LocalBusinessJsonLd location="paris" />

      {/* ========== HERO ========== */}
      <HeroAgence
        breadcrumb={data.heroData.breadcrumb}
        badge={data.heroData.badge}
        title={data.heroData.title}
        description={data.heroData.description}
        primaryCta={data.heroData.primaryCta}
        secondaryCta={data.heroData.secondaryCta}
        locale={locale}
      />

      {/* ========== INTRO ========== */}
      <IntroService
        badge={data.introData.badge}
        accentColor={data.introData.accentColor}
        title={data.introData.title}
        paragraphs={data.introData.paragraphs}
        tocItems={data.introData.tocItems}
      />

      {/* ========== BUREAU PARIS ========== */}
      <OfficeSingle
        sectionId={data.bureauData.sectionId}
        title={data.bureauData.title}
        description={data.bureauData.description}
        secondaryDescription={data.bureauData.secondaryDescription}
        office={data.bureauData.office}
        accentColor="rw-blue"
      />

      {/* ========== RECAP BOX ========== */}
      <RecapBoxService
        sectionId={data.recapData.sectionId}
        badge={data.recapData.badge}
        title={data.recapData.title}
        subtitle={data.recapData.subtitle}
        items={data.recapData.items}
        accentColor={data.recapData.accentColor}
      />

      {/* ========== SECTION ÉDUCATIVE GEO ========== */}
      <FeaturesGrid
        sectionId={data.geoEducationData.sectionId}
        badge={data.geoEducationData.badge}
        badgeVariant={data.geoEducationData.badgeVariant}
        title={data.geoEducationData.title}
        subtitle={data.geoEducationData.subtitle}
        items={data.geoEducationData.items}
        accentColor={data.geoEducationData.accentColor}
        columns={2}
        bgWhite
      />

      {/* ========== CALLOUT SEO + GEO ========== */}
      <PointVigilance
        label={data.calloutData.label}
        text={data.calloutData.text}
        icon={data.calloutData.icon}
      />

      {/* ========== NOTRE APPROCHE ========== */}
      <StickyFeatures
        sectionId={data.approcheData.sectionId}
        badge={data.approcheData.badge}
        title={data.approcheData.title}
        subtitle={data.approcheData.subtitle}
        items={data.approcheData.items}
        accentColor={data.approcheData.accentColor}
      />

      {/* ========== POUR QUI ========== */}
      <ForWhoService
        sectionId={data.pourQuiData.sectionId}
        badge={data.pourQuiData.badge}
        title={data.pourQuiData.title}
        subtitle={data.pourQuiData.subtitle}
        criteria={data.pourQuiData.criteria}
        ctaTitle={data.pourQuiData.ctaTitle}
        ctaDescription={data.pourQuiData.ctaDescription}
        ctaButtonText={data.pourQuiData.ctaButtonText}
        ctaButtonHref={data.pourQuiData.ctaButtonHref}
        accentColor={data.pourQuiData.accentColor}
        locale={locale as 'fr' | 'en'}
      />

      {/* ========== EXPERTISES ========== */}
      <ServicesCards
        sectionId={data.expertisesData.sectionId}
        badge={data.expertisesData.badge}
        title={data.expertisesData.title}
        subtitle={data.expertisesData.subtitle}
        items={data.expertisesData.items}
        accentColor={data.expertisesData.accentColor}
      />

      {/* ========== CHIFFRES CLÉS ========== */}
      <KeyFiguresAnimated
        sectionId={data.chiffresData.sectionId}
        items={data.chiffresData.items}
        accentColor={data.chiffresData.accentColor}
      />

      {/* ========== PROCESS ========== */}
      <ProcessSteps
        sectionId={data.processData.sectionId}
        badge={data.processData.badge}
        title={data.processData.title}
        subtitle={data.processData.subtitle}
        steps={data.processData.steps}
        accentColor={data.processData.accentColor}
      />

      {/* ========== CLIENTS ========== */}
      <Clients locale={locale} bgWhite />

      {/* ========== ÉQUIPE ========== */}
      <FeaturesGrid
        sectionId={data.equipeData.sectionId}
        badge={data.equipeData.badge}
        badgeVariant={data.equipeData.badgeVariant}
        title={data.equipeData.title}
        items={data.equipeData.items}
        accentColor={data.equipeData.accentColor}
        columns={3}
        bgWhite
      />

      {/* ========== QUOTE ========== */}
      <Quote
        quote={data.quoteData.quote}
        author={data.quoteData.author}
        role={data.quoteData.role}
      />

      {/* ========== FAQ ========== */}
      <FAQService
        sectionId={data.faqData.sectionId}
        badge={data.faqData.badge}
        title={data.faqData.title}
        items={data.faqData.items}
        accentColor={data.faqData.accentColor}
      />

      {/* ========== TESTIMONIALS ========== */}
      <Testimonials locale={locale} />

      {/* ========== CTA ========== */}
      <CTA
        title={data.ctaData.title}
        description={data.ctaData.description}
        buttonText={data.ctaData.buttonText}
        buttonHref={data.ctaData.buttonHref}
        accentColor={data.ctaData.accentColor}
        locale={locale as 'fr' | 'en'}
      />

      {/* ========== FAUX FOOTER - AUTRES VILLES (FR only) ========== */}
      {locale === 'fr' && (
        <section className="py-8 md:py-10 bg-secondary dark:bg-background-9 border-t border-white/10">
          <div className="main-container">
            <div className="text-center">
              <h4 className="text-sm font-medium text-white/60 mb-4">{data.autresVillesData.title}</h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {data.autresVillesData.cities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
