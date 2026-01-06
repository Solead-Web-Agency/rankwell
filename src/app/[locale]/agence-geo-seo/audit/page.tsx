/**
 * Audit SEO - Page multilingue
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
  StepsDimensions,
  ProcessSteps,
  FeaturesGrid,
} from '@/components/shared/services';
import { Quote, TrustBanner, Clients, Testimonials, CTA, PointVigilance } from '@/components/shared/global';
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd, HowToJsonLd } from '@/components/seo';

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
        <span className="block">Why audit</span>
        <span className="text-rw-blue">before optimizing?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi auditer</span>
      <span className="text-rw-blue">avant d&apos;optimiser ?</span>
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
  const frenchPath = '/agence-geo-seo/audit';
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
export default async function AuditSeoPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const {
    metadata: pageMetadata,
    heroData,
    introData,
    recapBoxData,
    faqData,
    ctaData,
    tableauMaturiteData,
    forWhoData,
    auditDimensionsData,
    auditProcessData,
    livrablesData,
    quote1Data,
    quote2Data,
    pointVigilance1Data,
    pointVigilance2Data,
  } = await getPageData(locale);

  // URLs localisées pour Schema.org
  const frenchPath = '/agence-geo-seo/audit';
  const pageUrl = locale === 'fr'
    ? `${baseUrl}${frenchPath}`
    : `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`;

  // Données structurées Schema.org
  const breadcrumbItems = heroData.breadcrumb.map((item) => ({
    name: item.label,
    url: item.href || pageUrl,
  }));

  const faqItems = faqData.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  const howToSteps = auditProcessData.steps.map((step) => ({
    name: step.title,
    text: step.description,
  }));

  // Service name localized
  const serviceName = locale === 'en' ? 'Complete SEO Audit' : 'Audit SEO complet';

  return (
    <>
      {/* Schema.org JSON-LD */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServiceJsonLd
        service={{
          name: serviceName,
          description: pageMetadata.description,
          url: pageUrl,
        }}
      />
      <FAQJsonLd faqs={faqItems} />
      <HowToJsonLd
        name={auditProcessData.title}
        description={auditProcessData.subtitle}
        steps={howToSteps}
      />

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
        sectionId={auditDimensionsData.sectionId}
        badge={auditDimensionsData.badge}
        accentColor={auditDimensionsData.accentColor}
        title={auditDimensionsData.title}
        subtitle={auditDimensionsData.subtitle}
        dimensions={auditDimensionsData.dimensions}
      />

      <TrustBanner locale={locale as Locale} />

      <TableauService
        sectionId={tableauMaturiteData.sectionId}
        badge={tableauMaturiteData.badge}
        accentColor={tableauMaturiteData.accentColor}
        title={tableauMaturiteData.title}
        subtitle={tableauMaturiteData.subtitle}
        columns={tableauMaturiteData.columns}
        rows={tableauMaturiteData.rows}
        highlightLastColumn={tableauMaturiteData.highlightLastColumn}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
      />

      <FeaturesGrid
        sectionId={livrablesData.sectionId}
        badge={livrablesData.badge}
        badgeVariant="colored"
        accentColor={livrablesData.accentColor}
        title={livrablesData.title}
        subtitle={livrablesData.subtitle}
        columns={2}
        items={livrablesData.items.map(item => ({
          id: item.id,
          title: item.title,
          desc: item.description,
        }))}
      />

      <Clients locale={locale as Locale} />

      <ProcessSteps
        sectionId={auditProcessData.sectionId}
        badge={auditProcessData.badge}
        accentColor={auditProcessData.accentColor}
        title={auditProcessData.title}
        subtitle={auditProcessData.subtitle}
        steps={auditProcessData.steps}
      />

      <PointVigilance
        label={pointVigilance2Data.label}
        text={pointVigilance2Data.text}
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

      <Testimonials locale={locale as Locale} />

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
