import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// i18n
import { Locale, locales, defaultLocale, getLocalizedPath } from '@/lib/i18n';

// Composants shared - Services
import {
  HeroService,
  IntroService,
  RecapBoxService,
  TableauService,
  FeaturesGrid,
  ProcessSteps,
  StepsDimensions,
  StickyFeatures,
  FAQService,
} from '@/components/shared/services';

// Composants shared - Global
import {
  Quote,
  TrustBanner,
  Clients,
  CTA,
  PointVigilance,
} from '@/components/shared/global';

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
        <span className="block">Why does semantic analysis</span>
        <span className="text-rw-cyan">determine your ROI?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi l&apos;analyse sémantique</span>
      <span className="text-rw-cyan">conditionne votre ROI ?</span>
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
        ? 'https://rankwell.fr/agence-sea/analyse-semantique'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-sea/analyse-semantique', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-sea/analyse-semantique',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/analyse-semantique', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/analyse-semantique', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function AnalyseSemantiquePage({ params }: PageProps) {
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
    dimensionsData,
    pointVigilanceData,
    tableauGrilleData,
    livrablesData,
    quandData,
    processData,
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

      <StepsDimensions
        sectionId={dimensionsData.sectionId}
        badge={dimensionsData.badge}
        accentColor={dimensionsData.accentColor}
        title={dimensionsData.title}
        subtitle={dimensionsData.subtitle}
        dimensions={dimensionsData.dimensions}
      />

      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      <TableauService
        sectionId={tableauGrilleData.sectionId}
        badge={tableauGrilleData.badge}
        accentColor={tableauGrilleData.accentColor}
        title={tableauGrilleData.title}
        subtitle={tableauGrilleData.subtitle}
        columns={tableauGrilleData.columns}
        rows={tableauGrilleData.rows}
      />

      <FeaturesGrid
        sectionId={livrablesData.sectionId}
        badge={livrablesData.badge}
        badgeVariant="colored"
        accentColor={livrablesData.accentColor}
        title={livrablesData.title}
        subtitle={livrablesData.subtitle}
        items={livrablesData.items}
      />

      <Clients locale={locale as Locale} />

      <StickyFeatures
        sectionId={quandData.sectionId}
        badge={quandData.badge}
        accentColor={quandData.accentColor}
        title={quandData.title}
        subtitle={quandData.subtitle}
        items={quandData.items}
      />

      <TrustBanner locale={locale as Locale} />

      <ProcessSteps
        sectionId={processData.sectionId}
        badge={processData.badge}
        accentColor={processData.accentColor}
        title={processData.title}
        subtitle={processData.subtitle}
        steps={processData.steps}
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

      <CTA
        title={<>{ctaData.title} <span className="text-rw-cyan">{ctaData.titleHighlight}</span></>}
        description={ctaData.description}
        secondaryDescription={ctaData.secondaryDescription}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
        accentColor="rw-cyan"
      />
    </>
  );
}
