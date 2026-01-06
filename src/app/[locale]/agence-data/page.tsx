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
  ForWhoService,
  ServicesCards,
  ProcessSteps,
  CategoriesGrid,
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
        <span className="block">Why does data determine</span>
        <span className="text-rw-purple">all your marketing performance?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi la data conditionne</span>
      <span className="text-rw-purple">toute votre performance marketing ?</span>
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
        ? 'https://rankwell.fr/agence-data'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-data', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-data',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-data', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-data', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function DataPage({ params }: PageProps) {
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
    pourquoiData,
    pointVigilance1Data,
    tableauMaturiteData,
    servicesData,
    approcheData,
    synergieData,
    forWhoData,
    pointVigilance2Data,
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
        sectionId={pourquoiData.sectionId}
        badge={pourquoiData.badge}
        badgeVariant="colored"
        accentColor={pourquoiData.accentColor}
        title={pourquoiData.title}
        subtitle={pourquoiData.subtitle}
        columns={2}
        items={pourquoiData.items}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
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

      <ServicesCards
        sectionId={servicesData.sectionId}
        badge={servicesData.badge}
        accentColor={servicesData.accentColor}
        title={servicesData.title}
        subtitle={servicesData.subtitle}
        items={servicesData.items}
      />

      <Clients locale={locale as Locale} />

      <ProcessSteps
        sectionId={approcheData.sectionId}
        badge={approcheData.badge}
        accentColor={approcheData.accentColor}
        title={approcheData.title}
        subtitle={approcheData.subtitle}
        steps={approcheData.steps}
      />

      <CategoriesGrid
        sectionId={synergieData.sectionId}
        badge={synergieData.badge}
        accentColor={synergieData.accentColor}
        title={synergieData.title}
        subtitle={synergieData.subtitle}
        categories={synergieData.categories}
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

      <PointVigilance
        label={pointVigilance2Data.label}
        text={pointVigilance2Data.text}
      />

      <Testimonials locale={locale as Locale} />

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
        locale={locale as 'fr' | 'en'}
      />
    </>
  );
}
