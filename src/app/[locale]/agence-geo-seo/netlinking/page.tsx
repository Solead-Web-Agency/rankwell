/**
 * Link Building - Multilingual Page
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
  WarningsList,
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
        <span className="block">Why your links shape</span>
        <span className="text-rw-blue">what AI knows about you</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi vos liens façonnent</span>
      <span className="text-rw-blue">ce que les IA savent de vous</span>
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
  const frenchPath = '/agence-geo-seo/netlinking';
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
export default async function NetlinkingPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const {
    heroData,
    introData,
    recapBoxData,
    quote1Data,
    pourquoiLiensData,
    pointVigilanceData,
    methodeNetlinkingData,
    tableauQualiteLienData,
    leviersAcquisitionData,
    pratiquesRefuseesData,
    kpisData,
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
        sectionId={pourquoiLiensData.sectionId}
        badge={pourquoiLiensData.badge}
        accentColor={pourquoiLiensData.accentColor}
        title={pourquoiLiensData.title}
        subtitle={pourquoiLiensData.subtitle}
        reasons={pourquoiLiensData.reasons}
      />

      <TrustBanner locale={locale as Locale} />

      <StepsDimensions
        sectionId={methodeNetlinkingData.sectionId}
        badge={methodeNetlinkingData.badge}
        accentColor={methodeNetlinkingData.accentColor}
        title={methodeNetlinkingData.title}
        subtitle={methodeNetlinkingData.subtitle}
        steps={methodeNetlinkingData.steps}
      />

      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      <TableauService
        sectionId={tableauQualiteLienData.sectionId}
        badge={tableauQualiteLienData.badge}
        accentColor={tableauQualiteLienData.accentColor}
        title={tableauQualiteLienData.title}
        subtitle={tableauQualiteLienData.subtitle}
        columns={tableauQualiteLienData.columns}
        rows={tableauQualiteLienData.rows}
      />

      <ProcessSteps
        sectionId={leviersAcquisitionData.sectionId}
        badge={leviersAcquisitionData.badge}
        accentColor={leviersAcquisitionData.accentColor}
        title={leviersAcquisitionData.title}
        subtitle={leviersAcquisitionData.subtitle}
        steps={leviersAcquisitionData.steps}
      />

      <WarningsList
        sectionId={pratiquesRefuseesData.sectionId}
        badge={pratiquesRefuseesData.badge}
        accentColor={pratiquesRefuseesData.accentColor}
        title={pratiquesRefuseesData.title}
        subtitle={pratiquesRefuseesData.subtitle}
        footerText={pratiquesRefuseesData.footerText}
        items={pratiquesRefuseesData.pratiques}
      />

      <FeaturesGrid
        sectionId={kpisData.sectionId}
        badge={kpisData.badge}
        badgeVariant={kpisData.badgeVariant}
        accentColor={kpisData.accentColor}
        title={kpisData.title}
        subtitle={kpisData.subtitle}
        items={kpisData.items}
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
        title={<>{ctaData.title} <span className="text-rw-blue">{ctaData.titleHighlight}</span> ?</>}
        description={ctaData.description}
        secondaryDescription={ctaData.secondaryDescription}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
        accentColor="rw-blue"
      />
    </>
  );
}
