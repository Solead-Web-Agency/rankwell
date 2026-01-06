/**
 * Local SEO - Multilingual Page
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
  FeaturesGrid,
  StepsDimensions,
  ReasonsGrid,
  ProcessSteps,
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
        <span className="block">Local SEO and local GEO:</span>
        <span className="text-rw-blue">be visible near your customers</span>
      </>
    );
  }
  return (
    <>
      <span className="block">SEO local et GEO local :</span>
      <span className="text-rw-blue">être visible près de vos clients</span>
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
  const frenchPath = '/agence-geo-seo/local';
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
export default async function LocalSeoPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const {
    heroData,
    introData,
    enjeuxLocalData,
    quote1Data,
    recapBoxData,
    piliersLocalData,
    pointVigilanceData,
    gbpData,
    tableauCitationsData,
    avisClientsData,
    kpisLocauxData,
    forWhoData,
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

      <ReasonsGrid
        sectionId={enjeuxLocalData.sectionId}
        badge={enjeuxLocalData.badge}
        accentColor={enjeuxLocalData.accentColor}
        title={enjeuxLocalData.title}
        subtitle={enjeuxLocalData.subtitle}
        reasons={enjeuxLocalData.reasons}
      />

      <TrustBanner locale={locale as Locale} />

      <StepsDimensions
        sectionId={piliersLocalData.sectionId}
        badge={piliersLocalData.badge}
        accentColor={piliersLocalData.accentColor}
        title={piliersLocalData.title}
        subtitle={piliersLocalData.subtitle}
        dimensions={piliersLocalData.dimensions}
      />

      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      <StickyFeatures
        sectionId={gbpData.sectionId}
        badge={gbpData.badge}
        accentColor={gbpData.accentColor}
        title={gbpData.title}
        subtitle={gbpData.subtitle}
        items={gbpData.items}
      />

      <TableauService
        sectionId={tableauCitationsData.sectionId}
        badge={tableauCitationsData.badge}
        accentColor={tableauCitationsData.accentColor}
        title={tableauCitationsData.title}
        subtitle={tableauCitationsData.subtitle}
        columns={tableauCitationsData.columns}
        rows={tableauCitationsData.rows}
      />

      <ProcessSteps
        sectionId={avisClientsData.sectionId}
        badge={avisClientsData.badge}
        accentColor={avisClientsData.accentColor}
        title={avisClientsData.title}
        subtitle={avisClientsData.subtitle}
        steps={avisClientsData.steps}
      />

      <FeaturesGrid
        sectionId={kpisLocauxData.sectionId}
        badge={kpisLocauxData.badge}
        badgeVariant={kpisLocauxData.badgeVariant}
        accentColor={kpisLocauxData.accentColor}
        title={kpisLocauxData.title}
        subtitle={kpisLocauxData.subtitle}
        items={kpisLocauxData.items}
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

      <Clients locale={locale as Locale} />

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
