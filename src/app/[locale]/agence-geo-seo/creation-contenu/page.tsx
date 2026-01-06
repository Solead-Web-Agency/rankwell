/**
 * Content Creation - Multilingual Page
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
  FeaturesGrid,
  StepsDimensions,
  ProcessGrid,
  StickyFeatures,
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
        <span className="block">Why content is</span>
        <span className="text-rw-blue">the cornerstone of GEO?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi le contenu est</span>
      <span className="text-rw-blue">le nerf de la guerre GEO ?</span>
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
  const frenchPath = '/agence-geo-seo/creation-contenu';
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
export default async function CreationContenuPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const {
    heroData,
    introData,
    recapBoxData,
    quote1Data,
    methodeData,
    pointVigilanceData,
    typesContenusData,
    processData,
    tableauFormatsData,
    differenceData,
    collaborationData,
    quote2Data,
    faqData,
    ctaData,
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

      <StepsDimensions
        sectionId={methodeData.sectionId}
        badge={methodeData.badge}
        accentColor={methodeData.accentColor}
        title={methodeData.title}
        subtitle={methodeData.subtitle}
        dimensions={methodeData.dimensions}
      />

      <TrustBanner locale={locale as Locale} />

      <FeaturesGrid
        sectionId={typesContenusData.sectionId}
        badge={typesContenusData.badge}
        badgeVariant="colored"
        accentColor={typesContenusData.accentColor}
        title={typesContenusData.title}
        subtitle={typesContenusData.subtitle}
        items={typesContenusData.items}
      />

      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      <ProcessGrid
        sectionId={processData.sectionId}
        badge={processData.badge}
        accentColor={processData.accentColor}
        title={processData.title}
        subtitle={processData.subtitle}
        steps={processData.steps}
      />

      <Clients locale={locale as Locale} />

      <TableauService
        sectionId={tableauFormatsData.sectionId}
        badge={tableauFormatsData.badge}
        accentColor={tableauFormatsData.accentColor}
        title={tableauFormatsData.title}
        subtitle={tableauFormatsData.subtitle}
        columns={tableauFormatsData.columns}
        rows={tableauFormatsData.rows}
      />

      <StickyFeatures
        sectionId={differenceData.sectionId}
        badge={differenceData.badge}
        accentColor={differenceData.accentColor}
        title={differenceData.title}
        subtitle={differenceData.subtitle}
        items={differenceData.items}
      />

      <Testimonials locale={locale as Locale} />

      <FeaturesGrid
        sectionId={collaborationData.sectionId}
        badge={collaborationData.badge}
        badgeVariant="colored"
        accentColor={collaborationData.accentColor}
        title={collaborationData.title}
        subtitle={collaborationData.subtitle}
        items={collaborationData.items}
      />

      <FAQService
        sectionId={faqData.sectionId}
        badge={faqData.badge}
        accentColor={faqData.accentColor}
        title={faqData.title}
        subtitle={faqData.subtitle}
        items={faqData.items}
      />

      <Quote
        quote={quote2Data.quote}
        author={quote2Data.author}
        role={quote2Data.role}
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
