import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// i18n
import { Locale, locales, defaultLocale, getLocalizedPath } from '@/lib/i18n';

// Composants shared - Services
import {
  HeroService,
  IntroService,
  RecapBoxService,
  FAQService,
  TableauService,
  FeaturesGrid,
  StickyFeatures,
  ProcessSteps,
  StepsDimensions,
} from '@/components/shared/services';

// Composants shared - Global
import { Quote, TrustBanner, Clients, Testimonials, CTA, PointVigilance } from '@/components/shared/global';

// ============================================
// Types
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

// ============================================
// Data Loading
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

function getIntroTitle(locale: Locale) {
  if (locale === 'en') {
    return (
      <>
        <span className="block">Why do most companies</span>
        <span className="text-rw-purple">underuse their analytics?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi la plupart des entreprises</span>
      <span className="text-rw-purple">sous-exploitent leurs analytics ?</span>
    </>
  );
}

// ============================================
// Metadata
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const data = await getPageData(locale as Locale);

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: {
      canonical: locale === defaultLocale
        ? 'https://rankwell.fr/agence-data/analytics'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-data/analytics', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-data/analytics',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-data/analytics', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-data/analytics', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function AnalyticsPage({ params }: PageProps) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const data = await getPageData(locale as Locale);
  const {
    heroData,
    introData,
    incluData,
    quote1Data,
    servicesData,
    pointVigilance1Data,
    tableauMetriquesData,
    ga4Data,
    dashboardsData,
    pointVigilance2Data,
    processData,
    formulesData,
    faqData,
    quote2Data,
    ctaData,
  } = data;

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
        sectionId={incluData.sectionId}
        badge={incluData.badge}
        accentColor={incluData.accentColor}
        title={incluData.title}
        subtitle={incluData.subtitle}
        items={incluData.items}
      />

      <Quote
        quote={quote1Data.quote}
        author={quote1Data.author}
        role={quote1Data.role}
      />

      <FeaturesGrid
        sectionId={servicesData.sectionId}
        badge={servicesData.badge}
        badgeVariant="colored"
        accentColor={servicesData.accentColor}
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        columns={3}
        items={servicesData.items}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
      />

      <TrustBanner locale={locale as Locale} />

      <TableauService
        sectionId={tableauMetriquesData.sectionId}
        badge={tableauMetriquesData.badge}
        accentColor={tableauMetriquesData.accentColor}
        title={tableauMetriquesData.title}
        subtitle={tableauMetriquesData.subtitle}
        columns={tableauMetriquesData.columns}
        rows={tableauMetriquesData.rows}
      />

      <StepsDimensions
        sectionId={ga4Data.sectionId}
        badge={ga4Data.badge}
        accentColor={ga4Data.accentColor}
        title={ga4Data.title}
        subtitle={ga4Data.subtitle}
        dimensions={ga4Data.dimensions}
      />

      <Clients locale={locale as Locale} />

      <StickyFeatures
        sectionId={dashboardsData.sectionId}
        badge={dashboardsData.badge}
        accentColor={dashboardsData.accentColor}
        title={dashboardsData.title}
        subtitle={dashboardsData.subtitle}
        items={dashboardsData.items}
      />

      <PointVigilance
        label={pointVigilance2Data.label}
        text={pointVigilance2Data.text}
      />

      <ProcessSteps
        sectionId={processData.sectionId}
        badge={processData.badge}
        accentColor={processData.accentColor}
        title={processData.title}
        subtitle={processData.subtitle}
        steps={processData.steps}
      />

      <Testimonials locale={locale as Locale} />

      <FeaturesGrid
        sectionId={formulesData.sectionId}
        badge={formulesData.badge}
        badgeVariant="colored"
        accentColor={formulesData.accentColor}
        title={formulesData.title}
        subtitle={formulesData.subtitle}
        columns={3}
        items={formulesData.items}
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
        title={<>{ctaData.title} <span className="text-rw-purple">{ctaData.titleHighlight}</span></>}
        description={ctaData.description}
        secondaryDescription={ctaData.secondaryDescription}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
        accentColor="rw-purple"
      />
    </>
  );
}
