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
  StickyFeatures,
  ProcessSteps,
  TwoPathsSection,
} from '@/components/shared/services';

// Composants shared - Global
import { Quote, TrustBanner, Clients, Testimonials, CTA, PointVigilance, StackCardsSection } from '@/components/shared/global';

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
        <span className="block">Why is CRO</span>
        <span className="text-rw-purple">the most profitable lever?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi le CRO est-il</span>
      <span className="text-rw-purple">le levier le plus rentable ?</span>
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
        ? 'https://rankwell.fr/agence-data/cro'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-data/cro', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-data/cro',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-data/cro', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-data/cro', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function CroPage({ params }: PageProps) {
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
    roiData,
    pointVigilance1Data,
    tableauFrictionsData,
    dimensionsData,
    frictionsCourantesData,
    livrablesData,
    pointVigilance2Data,
    processData,
    etApresData,
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
        sectionId={roiData.sectionId}
        badge={roiData.badge}
        accentColor={roiData.accentColor}
        title={roiData.title}
        subtitle={roiData.subtitle}
        dimensions={roiData.dimensions}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
      />

      <TableauService
        sectionId={tableauFrictionsData.sectionId}
        badge={tableauFrictionsData.badge}
        accentColor={tableauFrictionsData.accentColor}
        title={tableauFrictionsData.title}
        subtitle={tableauFrictionsData.subtitle}
        columns={tableauFrictionsData.columns}
        rows={tableauFrictionsData.rows}
        highlightLastColumn={tableauFrictionsData.highlightLastColumn}
      />

      <FeaturesGrid
        sectionId={dimensionsData.sectionId}
        badge={dimensionsData.badge}
        badgeVariant="colored"
        accentColor={dimensionsData.accentColor}
        title={dimensionsData.title}
        subtitle={dimensionsData.subtitle}
        columns={3}
        items={dimensionsData.items}
      />

      <Clients locale={locale as Locale} />

      <StickyFeatures
        sectionId={frictionsCourantesData.sectionId}
        badge={frictionsCourantesData.badge}
        accentColor={frictionsCourantesData.accentColor}
        title={frictionsCourantesData.title}
        subtitle={frictionsCourantesData.subtitle}
        items={frictionsCourantesData.items}
      />

      <TrustBanner locale={locale as Locale} />

      <StackCardsSection
        sectionId={livrablesData.sectionId}
        badge={livrablesData.badge}
        accentColor={livrablesData.accentColor}
        title={livrablesData.title}
        description={livrablesData.subtitle}
        cards={livrablesData.cards}
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

      <TwoPathsSection
        sectionId={etApresData.sectionId}
        badge={etApresData.badge}
        accentColor={etApresData.accentColor}
        title={etApresData.title}
        subtitle={etApresData.subtitle}
        paths={etApresData.items}
        footerText={etApresData.footerText}
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
