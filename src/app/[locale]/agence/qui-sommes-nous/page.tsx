import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// i18n
import { Locale, locales, defaultLocale, getLocalizedPath } from '@/lib/i18n';

// Composants shared/global
import {
  HeroAgence,
  ProcessTimeline,
  Clients,
  CTA,
  KeyFiguresAnimated,
  OfficesMap,
} from '@/components/shared/global';

// Composants shared/services
import { FeaturesGrid, StickyFeatures } from '@/components/shared/services';

// Composants shared/homepage
import { ServicesHomepage } from '@/components/shared/homepage';

// SEO - Données structurées
import { LocalBusinessJsonLd } from '@/components/seo';

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
        ? 'https://rankwell.fr/agence/qui-sommes-nous'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence/qui-sommes-nous', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence/qui-sommes-nous',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence/qui-sommes-nous', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence/qui-sommes-nous', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function QuiSommesNousPage({ params }: PageProps) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const data = await getPageData(locale as Locale);
  const {
    heroData,
    presentationData,
    histoireData,
    keyFiguresData,
    expertisesData,
    valeursData,
    presenceData,
    ctaData,
  } = data;

  return (
    <>
      {/* Schema.org - LocalBusiness pour les bureaux */}
      <LocalBusinessJsonLd location="paris" />
      <LocalBusinessJsonLd location="dubai" />

      {/* Hero */}
      <HeroAgence
        breadcrumb={heroData.breadcrumb}
        badge={heroData.badge}
        title={heroData.title}
        description={heroData.description}
        primaryCta={heroData.primaryCta}
        secondaryCta={heroData.secondaryCta}
        locale={locale as Locale}
      />

      {/* Présentation - Qui sommes-nous / Notre approche */}
      <FeaturesGrid
        sectionId={presentationData.sectionId}
        badge={presentationData.badge}
        badgeVariant={presentationData.badgeVariant}
        title={presentationData.title}
        subtitle={presentationData.subtitle}
        items={presentationData.items}
        accentColor={presentationData.accentColor}
        columns={presentationData.columns}
        bgWhite={presentationData.bgWhite}
      />

      {/* Histoire / Timeline */}
      <ProcessTimeline
        sectionId={histoireData.sectionId}
        badge={histoireData.badge}
        badgeClassName={histoireData.badgeClassName}
        title={histoireData.title}
        subtitle={histoireData.subtitle}
        steps={histoireData.steps}
        accentColor={histoireData.accentColor}
        stepLabel={histoireData.stepLabel}
        compact={histoireData.compact}
      />

      {/* Chiffres clés */}
      <KeyFiguresAnimated
        sectionId={keyFiguresData.sectionId}
        badge={keyFiguresData.badge}
        badgeClassName={keyFiguresData.badgeClassName}
        title={keyFiguresData.title}
        subtitle={keyFiguresData.subtitle}
        items={keyFiguresData.items}
        accentColor={keyFiguresData.accentColor}
      />

      {/* Nos expertises */}
      <ServicesHomepage
        sectionId={expertisesData.sectionId}
        badge={expertisesData.badge}
        title={expertisesData.title}
        description={expertisesData.description}
        items={expertisesData.items}
      />

      {/* Valeurs */}
      <StickyFeatures
        sectionId={valeursData.sectionId}
        badge={valeursData.badge}
        accentColor={valeursData.accentColor}
        title={valeursData.title}
        subtitle={valeursData.subtitle}
        items={valeursData.items}
      />

      {/* Logos clients */}
      <Clients locale={locale as Locale} />

      {/* Présence / Bureaux */}
      <OfficesMap
        sectionId={presenceData.sectionId}
        badge={presenceData.badge}
        title={presenceData.title}
        subtitle={presenceData.subtitle}
        offices={presenceData.offices}
        accentColor={presenceData.accentColor}
        cta={presenceData.cta}
      />

      {/* CTA Final */}
      <CTA
        title={ctaData.title}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
      />
    </>
  );
}
