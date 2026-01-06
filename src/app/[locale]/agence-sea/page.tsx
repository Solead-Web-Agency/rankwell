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
  ProcessSteps,
  ServicesCards,
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
        <span className="block">Why should SEA be</span>
        <span className="text-rw-cyan">driven by ROI?</span>
      </>
    );
  }
  return (
    <>
      <span className="block">Pourquoi le SEA doit être</span>
      <span className="text-rw-cyan">piloté par le ROI ?</span>
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
        ? 'https://rankwell.fr/agence-sea'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence-sea', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence-sea',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence-sea', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence-sea', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function SeaPage({ params }: PageProps) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const data = await getPageData(locale as Locale);
  const {
    heroData,
    introData,
    recapBoxData,
    quote1Data,
    pourquoiSeaData,
    pointVigilance1Data,
    methodeData,
    servicesSeaData,
    campagnesData,
    tableauEncheresData,
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

      <FeaturesGrid
        sectionId={pourquoiSeaData.sectionId}
        badge={pourquoiSeaData.badge}
        badgeVariant="colored"
        accentColor={pourquoiSeaData.accentColor}
        title={pourquoiSeaData.title}
        subtitle={pourquoiSeaData.subtitle}
        columns={2}
        items={pourquoiSeaData.items}
      />

      <PointVigilance
        label={pointVigilance1Data.label}
        text={pointVigilance1Data.text}
      />

      <TrustBanner locale={locale as Locale} />

      <ProcessSteps
        sectionId={methodeData.sectionId}
        badge={methodeData.badge}
        accentColor={methodeData.accentColor}
        title={methodeData.title}
        subtitle={methodeData.subtitle}
        steps={methodeData.steps}
      />

      <ServicesCards
        sectionId={servicesSeaData.sectionId}
        badge={servicesSeaData.badge}
        accentColor={servicesSeaData.accentColor}
        title={servicesSeaData.title}
        subtitle={servicesSeaData.subtitle}
        items={servicesSeaData.items}
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

      <TableauService
        sectionId={tableauEncheresData.sectionId}
        badge={tableauEncheresData.badge}
        accentColor={tableauEncheresData.accentColor}
        title={tableauEncheresData.title}
        subtitle={tableauEncheresData.subtitle}
        columns={tableauEncheresData.columns}
        rows={tableauEncheresData.rows}
      />

      <RecapBoxService
        sectionId={synergieData.sectionId}
        badge={synergieData.badge}
        accentColor={synergieData.accentColor}
        title={synergieData.title}
        subtitle={synergieData.subtitle}
        items={synergieData.items}
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
        title={<>{ctaData.title} <span className="text-rw-cyan">{ctaData.titleHighlight}</span></>}
        description={ctaData.description}
        secondaryDescription={ctaData.secondaryDescription}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
        accentColor="rw-cyan"
        locale={locale as 'fr' | 'en'}
      />
    </>
  );
}
