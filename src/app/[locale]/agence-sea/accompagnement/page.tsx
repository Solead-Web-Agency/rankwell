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
  CategoriesGrid,
} from '@/components/shared/services';

// Composants shared - Global
import {
  Quote,
  TrustBanner,
  Clients,
  CTA,
  PointVigilance,
  StackCardsSection,
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
        <span className="block">Why outsource</span>
        <span className="text-rw-cyan">Google Ads management?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi externaliser</span>
      <span className="text-rw-cyan">la gestion Google Ads ?</span>
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
        ? 'https://rankwell.fr/agence-sea/accompagnement'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-sea/accompagnement', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-sea/accompagnement',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/accompagnement', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-sea/accompagnement', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function AccompagnementPage({ params }: PageProps) {
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
    actionsData,
    pointVigilanceData,
    tableauImpactData,
    rythmeData,
    metriquesData,
    formulesData,
    transparenceData,
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

      <StackCardsSection
        sectionId={actionsData.sectionId}
        badge={actionsData.badge}
        accentColor={actionsData.accentColor}
        title={actionsData.title}
        description={actionsData.description}
        cards={actionsData.cards}
      />

      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      <TableauService
        sectionId={tableauImpactData.sectionId}
        badge={tableauImpactData.badge}
        accentColor={tableauImpactData.accentColor}
        title={tableauImpactData.title}
        subtitle={tableauImpactData.subtitle}
        columns={tableauImpactData.columns}
        rows={tableauImpactData.rows}
      />

      <ProcessSteps
        sectionId={rythmeData.sectionId}
        badge={rythmeData.badge}
        accentColor={rythmeData.accentColor}
        title={rythmeData.title}
        subtitle={rythmeData.subtitle}
        steps={rythmeData.steps}
      />

      <TrustBanner locale={locale as Locale} />

      <StepsDimensions
        sectionId={metriquesData.sectionId}
        badge={metriquesData.badge}
        accentColor={metriquesData.accentColor}
        title={metriquesData.title}
        subtitle={metriquesData.subtitle}
        dimensions={metriquesData.dimensions}
      />

      <Clients locale={locale as Locale} />

      <FeaturesGrid
        sectionId={formulesData.sectionId}
        badge={formulesData.badge}
        badgeVariant="colored"
        accentColor={formulesData.accentColor}
        title={formulesData.title}
        subtitle={formulesData.subtitle}
        items={formulesData.items}
      />

      <CategoriesGrid
        sectionId={transparenceData.sectionId}
        badge={transparenceData.badge}
        accentColor={transparenceData.accentColor}
        title={transparenceData.title}
        subtitle={transparenceData.subtitle}
        categories={transparenceData.categories}
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
