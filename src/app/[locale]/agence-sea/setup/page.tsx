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
  ReasonsGrid,
  FAQService,
  TwoPathsSection,
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
        <span className="block">Why does setup</span>
        <span className="text-rw-cyan">determine everything else?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi le set up</span>
      <span className="text-rw-cyan">conditionne tout le reste ?</span>
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
        ? 'https://rankwell.fr/agence-sea/setup'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-sea/setup', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-sea/setup',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/setup', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/setup', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function SetupPage({ params }: PageProps) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const data = await getPageData(locale as Locale);
  const {
    heroData,
    introData,
    garantiesData,
    quote1Data,
    etapesSetupData,
    pointVigilance1Data,
    tableauErreursData,
    scenariosData,
    processData,
    livrablesData,
    apresSetupData,
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
        sectionId={garantiesData.sectionId}
        badge={garantiesData.badge}
        accentColor={garantiesData.accentColor}
        title={garantiesData.title}
        subtitle={garantiesData.subtitle}
        items={garantiesData.items}
      />

      <Quote
        quote={quote1Data.quote}
        author={quote1Data.author}
        role={quote1Data.role}
      />

      <StackCardsSection
        sectionId={etapesSetupData.sectionId}
        badge={etapesSetupData.badge}
        accentColor={etapesSetupData.accentColor}
        title={etapesSetupData.title}
        description={etapesSetupData.description}
        cards={etapesSetupData.cards}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
      />

      <TableauService
        sectionId={tableauErreursData.sectionId}
        badge={tableauErreursData.badge}
        accentColor={tableauErreursData.accentColor}
        title={tableauErreursData.title}
        subtitle={tableauErreursData.subtitle}
        columns={tableauErreursData.columns}
        rows={tableauErreursData.rows}
      />

      <ReasonsGrid
        sectionId={scenariosData.sectionId}
        badge={scenariosData.badge}
        accentColor={scenariosData.accentColor}
        title={scenariosData.title}
        subtitle={scenariosData.subtitle}
        reasons={scenariosData.reasons}
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

      <Clients locale={locale as Locale} />

      <FeaturesGrid
        sectionId={livrablesData.sectionId}
        badge={livrablesData.badge}
        badgeVariant="colored"
        accentColor={livrablesData.accentColor}
        title={livrablesData.title}
        subtitle={livrablesData.subtitle}
        items={livrablesData.items}
      />

      <TwoPathsSection
        sectionId={apresSetupData.sectionId}
        badge={apresSetupData.badge}
        accentColor={apresSetupData.accentColor}
        title={apresSetupData.title}
        subtitle={apresSetupData.subtitle}
        paths={apresSetupData.items}
        footerText={apresSetupData.footerText}
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
