import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// i18n
import { Locale, locales, defaultLocale, getLocalizedPath } from '@/lib/i18n';

// Composants shared/global
import { HeroAgence, CTA, OfficesDetailed, Clients } from '@/components/shared/global';

// Composants shared/homepage
import { ServicesHomepage } from '@/components/shared/homepage';

// SEO - Données structurées
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/seo';

// Animation
import RevealAnimation from '@/components/animation/RevealAnimation';

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
        ? 'https://rankwell.fr/agence/nos-bureaux'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/agence/nos-bureaux', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/agence/nos-bureaux',
        'en': `https://rankwell.fr/en${getLocalizedPath('/agence/nos-bureaux', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/agence/nos-bureaux', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function NosBureauxPage({ params }: PageProps) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const data = await getPageData(locale as Locale);
  const {
    heroData,
    breadcrumbItems,
    introData,
    officesDetailedData,
    expertisesData,
    ctaData,
  } = data;

  // Préparer les données pour le breadcrumb schema
  const breadcrumbSchemaItems = breadcrumbItems.map((item) => ({
    name: item.label,
    url: item.href || 'https://www.rankwell.agency/agence/nos-bureaux',
  }));

  return (
    <>
      {/* Schema.org - LocalBusiness pour les bureaux */}
      <LocalBusinessJsonLd location="paris" />
      <LocalBusinessJsonLd location="dubai" />
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />

      {/* Hero */}
      <HeroAgence
        breadcrumb={heroData.breadcrumb}
        badge={heroData.badge}
        title={heroData.title}
        description={heroData.description}
        primaryCta={heroData.primaryCta}
        locale={locale as Locale}
      />

      {/* Intro */}
      <section className="py-12 md:py-16 bg-white dark:bg-background-8">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <p className="max-w-[800px] mx-auto text-center text-lg text-secondary/80 dark:text-accent/80">
              {introData.text}
            </p>
          </RevealAnimation>
        </div>
      </section>

      {/* Bureaux détaillés */}
      <OfficesDetailed
        paris={officesDetailedData.paris}
        dubai={officesDetailedData.dubai}
      />

      {/* Nos expertises */}
      <ServicesHomepage
        sectionId={expertisesData.sectionId}
        badge={expertisesData.badge}
        title={expertisesData.title}
        description={expertisesData.description}
        items={expertisesData.items}
      />

      {/* Logos clients */}
      <Clients locale={locale as Locale} bgWhite />

      {/* CTA Final */}
      <CTA
        title={ctaData.title}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
      />
    </>
  );
}
