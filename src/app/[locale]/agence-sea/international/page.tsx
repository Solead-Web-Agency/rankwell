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
  FeaturesGrid,
  StepsDimensions,
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
        <span className="block">International SEA is more than</span>
        <span className="text-rw-cyan">a multi-country account</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Le SEA international, c&apos;est plus</span>
      <span className="text-rw-cyan">qu&apos;un compte multi-pays</span>
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
        ? 'https://rankwell.fr/agence-sea/international'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-sea/international', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-sea/international',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/international', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/international', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function InternationalPage({ params }: PageProps) {
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
    tableauCpcData,
    approcheData,
    marchesData,
    campagnesData,
    processData,
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
        sectionId={tableauCpcData.sectionId}
        badge={tableauCpcData.badge}
        accentColor={tableauCpcData.accentColor}
        title={tableauCpcData.title}
        subtitle={tableauCpcData.subtitle}
        columns={tableauCpcData.columns}
        rows={tableauCpcData.rows}
      />

      <TrustBanner locale={locale as Locale} />

      <FeaturesGrid
        sectionId={approcheData.sectionId}
        badge={approcheData.badge}
        badgeVariant="colored"
        accentColor={approcheData.accentColor}
        title={approcheData.title}
        subtitle={approcheData.subtitle}
        items={approcheData.items}
      />

      <ReasonsGrid
        sectionId={marchesData.sectionId}
        badge={marchesData.badge}
        accentColor={marchesData.accentColor}
        title={marchesData.title}
        subtitle={marchesData.subtitle}
        reasons={marchesData.reasons}
      />

      <Clients locale={locale as Locale} />

      <FeaturesGrid
        sectionId={campagnesData.sectionId}
        badge={campagnesData.badge}
        badgeVariant="colored"
        accentColor={campagnesData.accentColor}
        title={campagnesData.title}
        subtitle={campagnesData.subtitle}
        items={campagnesData.items}
      />

      <ProcessSteps
        sectionId={processData.sectionId}
        badge={processData.badge}
        accentColor={processData.accentColor}
        title={processData.title}
        subtitle={processData.subtitle}
        steps={processData.steps}
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
