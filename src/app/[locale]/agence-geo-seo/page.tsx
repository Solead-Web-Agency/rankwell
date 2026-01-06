/**
 * GEO & SEO - Page principale multilingue
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
  ProcessSteps,
  ServicesCards,
  ReasonsGrid,
} from '@/components/shared/services';
import { Quote, TrustBanner, Clients, Testimonials, CTA, PointVigilance, ContentWithHighlight } from '@/components/shared/global';

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
        <span className="block">GEO & SEO Agency:</span>
        <span className="text-rw-blue">visibility on Google and AI</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Agence GEO & SEO :</span>
      <span className="text-rw-blue">visibilite sur Google et les IA</span>
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
  const frenchPath = '/agence-geo-seo';
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
export default async function GeoSeoPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const {
    heroData,
    introData,
    recapBoxData,
    faqData,
    ctaData,
    tableauComparaisonData,
    forWhoData,
    whyGeoData,
    processData,
    servicesData,
    resultsData,
    quote1Data,
    quote2Data,
    pointVigilanceData,
  } = await getPageData(locale);

  return (
    <>
      {/* Hero */}
      <HeroService
        breadcrumb={heroData.breadcrumb}
        title={heroData.title}
        description={heroData.description}
        ctaText={heroData.ctaText}
        ctaHref={heroData.ctaHref}
        showTrustIndicator={heroData.showTrustIndicator}
        accentColor={heroData.accentColor}
        locale={locale as Locale}
      />

      {/* Intro avec TOC */}
      <IntroService
        badge={introData.badge}
        accentColor={introData.accentColor}
        title={getIntroTitle(locale as Locale)}
        paragraphs={introData.paragraphs}
        tocItems={introData.tocItems}
      />

      {/* 1. Pourquoi le GEO - #pourquoi-geo */}
      <ContentWithHighlight
        sectionId={whyGeoData.sectionId}
        badge={whyGeoData.badge}
        accentColor={whyGeoData.accentColor}
        title={whyGeoData.title}
        subtitle={whyGeoData.subtitle}
        blocks={whyGeoData.blocks}
        highlight={whyGeoData.constat}
      />

      {/* Quote Satya Nadella */}
      <Quote
        quote={quote1Data.quote}
        author={quote1Data.author}
        role={quote1Data.role}
      />

      {/* 2. Notre approche - #approche */}
      <RecapBoxService
        sectionId={recapBoxData.sectionId}
        badge={recapBoxData.badge}
        accentColor={recapBoxData.accentColor}
        title={recapBoxData.title}
        subtitle={recapBoxData.subtitle}
        items={recapBoxData.items}
      />

      {/* 3. Notre méthode - #methode */}
      <ProcessSteps
        sectionId={processData.sectionId}
        badge={processData.badge}
        accentColor={processData.accentColor}
        title={processData.title}
        subtitle={processData.subtitle}
        steps={processData.steps}
      />

      {/* Trust Banner */}
      <TrustBanner locale={locale as Locale} />

      {/* 4. Tableau comparatif SEO vs GEO - #comparaison */}
      <TableauService
        sectionId={tableauComparaisonData.sectionId}
        badge={tableauComparaisonData.badge}
        accentColor="rw-blue"
        title={tableauComparaisonData.title}
        subtitle={tableauComparaisonData.subtitle}
        columns={tableauComparaisonData.columns}
        rows={tableauComparaisonData.rows}
      />

      {/* 5. Services GEO & SEO - #services */}
      <ServicesCards
        sectionId={servicesData.sectionId}
        badge={servicesData.badge}
        accentColor={servicesData.accentColor}
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        items={servicesData.items}
      />

      {/* Logos clients */}
      <Clients locale={locale as Locale} />

      {/* Pour qui */}
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

      {/* Point de vigilance / L'enjeu */}
      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      {/* Résultats */}
      <ReasonsGrid
        sectionId={resultsData.sectionId}
        badge={resultsData.badge}
        accentColor={resultsData.accentColor}
        title={resultsData.title}
        subtitle={resultsData.subtitle}
        reasons={resultsData.items}
      />

      {/* Témoignages */}
      <Testimonials locale={locale as Locale} />

      {/* Quote Rand Fishkin */}
      <Quote
        quote={quote2Data.quote}
        author={quote2Data.author}
        role={quote2Data.role}
      />

      {/* FAQ */}
      <FAQService
        sectionId={faqData.sectionId}
        badge={faqData.badge}
        accentColor={faqData.accentColor}
        title={faqData.title}
        subtitle={faqData.subtitle}
        items={faqData.items}
      />

      {/* CTA Final */}
      <CTA
        title={<>{ctaData.title} <span className="text-rw-blue">{ctaData.titleHighlight}</span></>}
        description={ctaData.description}
        secondaryDescription={ctaData.secondaryDescription}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
        accentColor="rw-blue"
        locale={locale as 'fr' | 'en'}
      />
    </>
  );
}
