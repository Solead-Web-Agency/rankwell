/**
 * Technical & Semantic SEO - Multilingual Page
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Composants shared
import {
  HeroService,
  IntroService,
  RecapBoxService,
  FAQService,
  TableauService,
  ForWhoService,
  OutilsService,
  FeaturesGrid,
  ProcessSteps,
} from '@/components/shared/services';
import { Quote, TrustBanner, Clients, Testimonials, CTA, PointVigilance } from '@/components/shared/global';

// i18n
import { isValidLocale, baseUrl, type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/i18n/routes';

// ============================================
// TYPES
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

// ============================================
// DATA LOADER
// ============================================
async function getPageData(locale: Locale) {
  switch (locale) {
    case 'en':
      return import('./data.en');
    case 'fr':
    default:
      return import('./data.fr');
  }
}

// ============================================
// INTRO TITLE BY LOCALE
// ============================================
function getIntroTitle(locale: Locale) {
  if (locale === 'en') {
    return (
      <>
        <span className="block">Technical and semantic:</span>
        <span className="text-rw-blue">why separating them is a mistake</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Technique et sémantique :</span>
      <span className="text-rw-blue">pourquoi les séparer est une erreur</span>
    </>
  );
}

// ============================================
// METADATA
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const data = await getPageData(locale);
  const frenchPath = '/agence-geo-seo/technique-semantique';
  const currentUrl = locale === 'fr'
    ? `${baseUrl}${frenchPath}`
    : `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`;

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: {
      canonical: currentUrl,
      languages: {
        'fr': `${baseUrl}${frenchPath}`,
        'en': `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`,
        'x-default': `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`,
      },
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function SeoSemantiqueTechniquePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const {
    heroData,
    introData,
    recapBoxData,
    faqData,
    tableauErreursData,
    ctaData,
    forWhoData,
    seoTechniqueData,
    seoSemantiqueData,
    processMethodeData,
    outilsData,
    quote1Data,
    quote2Data,
    pointVigilance1Data,
    pointVigilance2Data,
  } = await getPageData(locale);

  return (
    <>
      <HeroService
        breadcrumb={heroData.breadcrumb}
        title={heroData.title}
        description={heroData.description}
        ctaText={heroData.ctaText}
        ctaHref={heroData.ctaHref}
        accentColor={heroData.accentColor}
        locale={locale as Locale}
      />

      <IntroService
        badge={introData.badge}
        accentColor={introData.accentColor}
        title={getIntroTitle(locale as Locale)}
        paragraphs={introData.paragraphs}
        tocItems={introData.tocItems}
      />

      <RecapBoxService
        sectionId={recapBoxData.sectionId}
        badge={recapBoxData.badge}
        accentColor={recapBoxData.accentColor}
        title={recapBoxData.title}
        subtitle={recapBoxData.subtitle}
        items={recapBoxData.items}
      />

      <Quote
        quote={quote1Data.quote}
        author={quote1Data.author}
        role={quote1Data.role}
      />

      <FeaturesGrid
        sectionId={seoTechniqueData.sectionId}
        badge={seoTechniqueData.badge}
        badgeVariant={seoTechniqueData.badgeVariant}
        accentColor={seoTechniqueData.accentColor}
        title={seoTechniqueData.title}
        subtitle={seoTechniqueData.subtitle}
        items={seoTechniqueData.items}
      />

      <TrustBanner locale={locale as Locale} />

      <FeaturesGrid
        sectionId={seoSemantiqueData.sectionId}
        badge={seoSemantiqueData.badge}
        badgeVariant={seoSemantiqueData.badgeVariant}
        accentColor={seoSemantiqueData.accentColor}
        title={seoSemantiqueData.title}
        subtitle={seoSemantiqueData.subtitle}
        items={seoSemantiqueData.items}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
      />

      <TableauService
        sectionId={tableauErreursData.sectionId}
        badge={tableauErreursData.badge}
        accentColor={tableauErreursData.accentColor}
        title={tableauErreursData.title}
        subtitle={tableauErreursData.subtitle}
        columns={tableauErreursData.columns}
        rows={tableauErreursData.rows}
      />

      <ProcessSteps
        sectionId={processMethodeData.sectionId}
        badge={processMethodeData.badge}
        accentColor={processMethodeData.accentColor}
        title={processMethodeData.title}
        subtitle={processMethodeData.subtitle}
        steps={processMethodeData.steps}
      />

      <Clients locale={locale as Locale} />

      <OutilsService
        sectionId={outilsData.sectionId}
        badge={outilsData.badge}
        accentColor={outilsData.accentColor}
        title={outilsData.title}
        subtitle={outilsData.subtitle}
        logos={outilsData.logos}
        categories={outilsData.categories}
      />

      <ForWhoService
        sectionId={forWhoData.sectionId}
        title={forWhoData.title}
        subtitle={forWhoData.subtitle}
        criteria={forWhoData.criteria}
        ctaTitle={forWhoData.ctaTitle}
        ctaDescription={forWhoData.ctaDescription}
        ctaButtonText={forWhoData.ctaButtonText}
        ctaButtonHref={forWhoData.ctaButtonHref}
        accentColor={forWhoData.accentColor}
      />

      <PointVigilance
        label={pointVigilance2Data.label}
        text={pointVigilance2Data.text}
      />

      <Testimonials locale={locale as Locale} />

      <Quote
        quote={quote2Data.quote}
        author={quote2Data.author}
        role={quote2Data.role}
      />

      <FAQService
        sectionId={faqData.sectionId}
        badge={faqData.badge}
        accentColor={faqData.accentColor}
        title={faqData.title}
        subtitle={faqData.subtitle}
        items={faqData.items}
      />

      <CTA
        title={<>{ctaData.title} <span className="text-rw-blue">{ctaData.titleHighlight}</span></>}
        description={ctaData.description}
        secondaryDescription={ctaData.secondaryDescription}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
        accentColor="rw-blue"
      />
    </>
  );
}
