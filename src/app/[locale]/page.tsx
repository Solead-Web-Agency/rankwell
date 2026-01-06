/**
 * HOMEPAGE - Page d'accueil multilingue
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Composants shared - Homepage
import {
  HeroHomepage,
  Certifications,
  IntroHomepage,
  ServicesHomepage,
  ProcessHomepage,
  WhyUsHomepage,
  FAQHomepage,
} from '@/components/shared/homepage';

// Composants shared - Global
import { Quote, TrustBanner, Clients, Testimonials, CTA, PointVigilance } from '@/components/shared/global';

// i18n
import { isValidLocale, baseUrl, type Locale } from '@/lib/i18n';

// ============================================
// TYPES
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

// ============================================
// DATA LOADER
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
// METADATA
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const data = await getPageData(locale);
  const currentUrl = locale === 'fr' ? baseUrl : `${baseUrl}/en`;

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: {
      canonical: currentUrl,
      languages: {
        'fr': baseUrl,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/en`,
      },
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const {
    heroData,
    introData,
    quote1Data,
    servicesData,
    processData,
    pointVigilanceData,
    whyUsData,
    quote2Data,
    faqData,
    ctaData,
  } = await getPageData(locale);

  return (
    <>
      {/* Hero Section */}
      <HeroHomepage
        badge={heroData.badge}
        title={heroData.title}
        description={heroData.description}
        primaryCta={heroData.primaryCta}
        secondaryCta={heroData.secondaryCta}
        trustIndicator={heroData.trustIndicator}
      />

      {/* Nos certifications */}
      <Certifications />

      {/* Introduction - Le Search a changé */}
      <IntroHomepage
        badge={introData.badge}
        title={introData.title}
        paragraphs={introData.paragraphs}
        highlightsTitle={introData.highlightsTitle}
        highlights={introData.highlights}
      />

      {/* Quote Sundar Pichai */}
      <Quote
        quote={quote1Data.quote}
        author={quote1Data.author}
        role={quote1Data.role}
      />

      {/* Trois expertises - Services */}
      <ServicesHomepage
        badge={servicesData.badge}
        title={servicesData.title}
        description={servicesData.description}
        items={servicesData.items}
      />

      {/* Logos clients */}
      <Clients locale={locale as Locale} />

      {/* Process - Comment nous travaillons */}
      <ProcessHomepage
        badge={processData.badge}
        title={processData.title}
        description={processData.description}
        steps={processData.steps}
      />

      {/* L'enjeu */}
      <PointVigilance
        label={pointVigilanceData.label}
        text={pointVigilanceData.text}
      />

      {/* Pourquoi Rankwell */}
      <WhyUsHomepage
        badge={whyUsData.badge}
        title={whyUsData.title}
        titleHighlight={whyUsData.titleHighlight}
        description={whyUsData.description}
        ctaText={whyUsData.ctaText}
        ctaHref={whyUsData.ctaHref}
        cards={whyUsData.cards}
      />

      {/* Témoignages clients */}
      <Testimonials locale={locale as Locale} />

      {/* Quote Rand Fishkin */}
      <Quote
        quote={quote2Data.quote}
        author={quote2Data.author}
        role={quote2Data.role}
      />

      {/* FAQ */}
      <FAQHomepage
        badge={faqData.badge}
        title={faqData.title}
        description={faqData.description}
        items={faqData.items}
      />

      {/* Bandeau confiance */}
      <TrustBanner locale={locale as Locale} />

      {/* CTA Final */}
      <CTA
        title={<>{ctaData.title} <span className="text-rw-blue">{ctaData.titleHighlight}</span></>}
        description={ctaData.description}
        secondaryDescription={ctaData.secondaryDescription}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
        locale={locale as 'fr' | 'en'}
      />
    </>
  );
}
