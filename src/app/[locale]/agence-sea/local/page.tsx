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
  FAQService,
  ProcessSteps,
  StepsDimensions,
  StickyFeatures,
  ReasonsGrid,
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
        <span className="block">Local SEA means capturing</span>
        <span className="text-rw-cyan">customers searching near you</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Le SEA local, c&apos;est capter</span>
      <span className="text-rw-cyan">les clients qui cherchent près de chez vous</span>
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
        ? 'https://rankwell.fr/agence-sea/local'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-sea/local', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-sea/local',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/local', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/local', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function LocalPage({ params }: PageProps) {
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
    enjeuxData,
    pointVigilanceData,
    tableauCiblageData,
    formatsData,
    secteursData,
    processData,
    quote2Data,
    faqData,
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
        sectionId={enjeuxData.sectionId}
        badge={enjeuxData.badge}
        accentColor={enjeuxData.accentColor}
        title={enjeuxData.title}
        subtitle={enjeuxData.subtitle}
        dimensions={enjeuxData.dimensions}
      />

      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      <TableauService
        sectionId={tableauCiblageData.sectionId}
        badge={tableauCiblageData.badge}
        accentColor={tableauCiblageData.accentColor}
        title={tableauCiblageData.title}
        subtitle={tableauCiblageData.subtitle}
        columns={tableauCiblageData.columns}
        rows={tableauCiblageData.rows}
      />

      <TrustBanner locale={locale as Locale} />

      <StickyFeatures
        sectionId={formatsData.sectionId}
        badge={formatsData.badge}
        accentColor={formatsData.accentColor}
        title={formatsData.title}
        subtitle={formatsData.subtitle}
        items={formatsData.items}
      />

      <ReasonsGrid
        sectionId={secteursData.sectionId}
        badge={secteursData.badge}
        accentColor={secteursData.accentColor}
        title={secteursData.title}
        subtitle={secteursData.subtitle}
        reasons={secteursData.reasons}
      />

      <Clients locale={locale as Locale} />

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
