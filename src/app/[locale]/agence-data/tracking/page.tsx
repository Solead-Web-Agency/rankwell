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
  StepsDimensions,
  ProcessSteps,
} from '@/components/shared/services';

// Composants shared - Global
import { Quote, TrustBanner, Clients, CTA, PointVigilance, StackCardsSection } from '@/components/shared/global';

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
        <span className="block">Why does tracking determine</span>
        <span className="text-rw-purple">all your marketing measurement?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi le tracking conditionne</span>
      <span className="text-rw-purple">toute votre mesure marketing ?</span>
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
        ? 'https://rankwell.fr/agence-data/tracking'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-data/tracking', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-data/tracking',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-data/tracking', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-data/tracking', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function TrackingPage({ params }: PageProps) {
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
    problemesData,
    pointVigilance1Data,
    tableauChecklistData,
    evenementsData,
    pointVigilance2Data,
    processData,
    livrablesData,
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
        sectionId={problemesData.sectionId}
        badge={problemesData.badge}
        badgeVariant="colored"
        accentColor={problemesData.accentColor}
        title={problemesData.title}
        subtitle={problemesData.subtitle}
        items={problemesData.items}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
      />

      <TableauService
        sectionId={tableauChecklistData.sectionId}
        badge={tableauChecklistData.badge}
        accentColor={tableauChecklistData.accentColor}
        title={tableauChecklistData.title}
        subtitle={tableauChecklistData.subtitle}
        columns={tableauChecklistData.columns}
        rows={tableauChecklistData.rows}
      />

      <TrustBanner locale={locale as Locale} />

      <StepsDimensions
        sectionId={evenementsData.sectionId}
        badge={evenementsData.badge}
        accentColor={evenementsData.accentColor}
        title={evenementsData.title}
        subtitle={evenementsData.subtitle}
        dimensions={evenementsData.dimensions}
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

      <Clients locale={locale as Locale} />

      <StackCardsSection
        sectionId={livrablesData.sectionId}
        badge={livrablesData.badge}
        accentColor={livrablesData.accentColor}
        title={livrablesData.title}
        description={livrablesData.subtitle}
        cards={livrablesData.cards}
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
