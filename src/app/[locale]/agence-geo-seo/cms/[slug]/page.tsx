/**
 * PAGE DYNAMIQUE : Template CMS
 * Route : /agence-geo-seo/cms/{slug}
 * 26 pages (wordpress, shopify, prestashop, etc.)
 *
 * Utilise les memes composants shared que les templates Secteur et Projet.
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Composants shared : services
import {
  HeroService,
  IntroService,
  FAQService,
  TableauService,
  StepsDimensions,
  FeaturesGrid,
} from '@/components/shared/services';

// Composants shared : global
import { Quote, Testimonials, CTA } from '@/components/shared/global';
import Link from 'next/link';

// Composants custom (pas d'equivalent shared)
import { GeoVisibilitySection } from '@/components/sector-pages';

// SEO : Schema.org
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from '@/components/seo';

// Utils
import { isValidLocale, baseUrl, type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/i18n/routes';
import { translateSlugToFrench } from '@/lib/i18n/slugMappings';
import type { CmsPageData } from '@/types/sector-pages';
import type { TocItem } from '@/components/shared/services/IntroService';

// ============================================
// DATA LOADER
// ============================================
async function getPageData(slug: string, locale: Locale): Promise<CmsPageData | null> {
  try {
    const mod = await import(`@/data/sector-pages/cms/${slug}.${locale}`);
    return mod.default || mod.data;
  } catch {
    return null;
  }
}

async function getAllSlugs(): Promise<string[]> {
  const { cmsPlatformesData } = await import(
    '@/app/[locale]/agence-geo-seo/secteurs/data.fr'
  );
  return cmsPlatformesData.map((s) => s.slug);
}

// ============================================
// STATIC PARAMS
// ============================================
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  const params: { locale: string; slug: string }[] = [];

  for (const slug of slugs) {
    for (const locale of ['fr', 'en'] as const) {
      const data = await getPageData(slug, locale);
      if (data) {
        params.push({ locale, slug });
      }
    }
  }

  return params;
}

// ============================================
// METADATA
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) notFound();

  const data = await getPageData(slug, locale as Locale);
  if (!data) notFound();

  const frSlug = locale === 'en' ? translateSlugToFrench(slug, 'cms') : slug;
  const frenchPath = `/agence-geo-seo/cms/${frSlug}`;
  const currentUrl =
    locale === 'fr'
      ? `${baseUrl}${frenchPath}`
      : `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`;

  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: {
      canonical: currentUrl,
      languages: {
        fr: `${baseUrl}${frenchPath}`,
        en: `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`,
        'x-default': `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`,
      },
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function CmsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) notFound();

  const data = await getPageData(slug, locale as Locale);
  if (!data) notFound();

  const frSlug = locale === 'en' ? translateSlugToFrench(slug, 'cms') : slug;
  const frenchPath = `/agence-geo-seo/cms/${frSlug}`;
  const currentPath =
    locale === 'fr' ? frenchPath : getLocalizedPath(frenchPath, 'en');

  // Schema breadcrumb items
  const breadcrumbSchemaItems = data.hero.breadcrumb.map((item) => ({
    name: item.label,
    url: item.href
      ? locale === 'fr'
        ? item.href
        : getLocalizedPath(item.href, 'en')
      : currentPath,
  }));

  const isEn = locale === 'en';

  // TOC items for IntroService sidebar
  const tocItems: TocItem[] = [
    { id: 'methodology', label: isEn ? 'Methodology' : 'Méthodologie', icon: 'ListChecks' },
    { id: 'technical-table', label: isEn ? 'Technical issues' : 'Problèmes techniques', icon: 'Search' },
    { id: 'features', label: isEn ? 'Deliverables' : 'Livrables', icon: 'Briefcase' },
    { id: 'geo-visibility', label: isEn ? 'AI Visibility' : 'Visibilité IA', icon: 'BrainCircuit' },
    { id: 'faq', label: 'FAQ', icon: 'MessageCircleQuestion' },
  ];

  // Transform methodology steps for StepsDimensions
  const methodologySteps = data.methodology.steps.map((step, i) => ({
    step: i + 1,
    label: isEn ? `Step ${i + 1}` : `Étape ${i + 1}`,
    title: step.title,
    subtitle: step.subtitle,
    items: step.items,
  }));

  return (
    <>
      {/* ========== SCHEMA.ORG ========== */}
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />
      <ServiceJsonLd
        service={{
          name: data.seo.title.replace(/ - Rankwell$/, ''),
          description: data.seo.description,
          url: `${baseUrl}${currentPath}`,
        }}
      />
      <FAQJsonLd faqs={data.faq.items} />

      {/* ========== BLOC 1 : HERO ========== */}
      <HeroService
        breadcrumb={data.hero.breadcrumb}
        title={data.hero.title}
        description={data.hero.subtitle}
        ctaText={data.hero.ctaText}
        ctaHref={data.hero.ctaHref}
        accentColor="rw-blue"
        locale={locale as Locale}
      />

      {/* ========== BLOC 2 : Pourquoi le SEO est different sur ce CMS (IntroService) ========== */}
      <IntroService
        badge={isEn ? 'CMS challenges' : 'Enjeux CMS'}
        accentColor="rw-blue"
        compact
        tocTitle={isEn ? 'On this page' : 'Sur cette page'}
        title={data.whyDifferent.title}
        paragraphs={[
          data.whyDifferent.seoStrengths,
          data.whyDifferent.seoLimitations,
          data.whyDifferent.geoAngle,
        ]}
        tocItems={tocItems}
      />

      {/* ========== BLOC 3 : Methodologie (StepsDimensions) ========== */}
      <StepsDimensions
        sectionId="methodology"
        badge={isEn ? 'Methodology' : 'Méthodologie'}
        accentColor="rw-blue"
        title={data.methodology.title}
        subtitle={data.methodology.subtitle}
        steps={methodologySteps}
      />

      {/* ========== QUOTE ========== */}
      <Quote
        quote={data.quote.text}
        author="Rankwell"
        role={isEn ? 'GEO & SEO Agency' : 'Agence GEO & SEO'}
        linkHref={isEn ? `/en/glossary/${data.quote.glossarySlug}` : `/glossaire/${data.quote.glossarySlug}`}
        linkLabel={data.quote.glossaryLabel}
      />

      {/* ========== BLOC 4 : Problemes techniques (TableauService) ========== */}
      <TableauService
        sectionId="technical-table"
        badge={isEn ? 'Technical diagnosis' : 'Diagnostic technique'}
        accentColor="rw-blue"
        title={data.technicalTable.title}
        subtitle={data.technicalTable.interpretation}
        columns={data.technicalTable.columns}
        rows={data.technicalTable.rows}
      />

      {/* ========== BLOC 5 : Livrables (FeaturesGrid 3x3) ========== */}
      <FeaturesGrid
        sectionId="features"
        badge={isEn ? 'Deliverables' : 'Livrables'}
        badgeVariant="colored"
        accentColor="rw-blue"
        title={data.features.title}
        subtitle={data.features.subtitle}
        items={data.features.items}
        columns={3}
      />

      {/* ========== BLOC 6 : Visibilite IA (GeoVisibilitySection) ========== */}
      <GeoVisibilitySection sectionId="geo-visibility" data={data.geoVisibility} locale={locale as 'fr' | 'en'} />

      {/* ========== Temoignages ========== */}
      <Testimonials locale={locale as Locale} />

      {/* ========== BLOC 7 : FAQ (FAQService) ========== */}
      <FAQService
        sectionId="faq"
        badge="FAQ"
        accentColor="rw-blue"
        title={data.faq.title}
        items={data.faq.items}
      />

      {/* ========== MAILLAGE ========== */}
      {data.relatedSectors && (
        <section className="py-8 md:py-10 bg-secondary dark:bg-background-9 border-t border-white/10">
          <div className="main-container">
            <div className="text-center">
              <h4 className="text-sm font-medium text-white/60 mb-4">
                {data.relatedSectors.title}
              </h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {data.relatedSectors.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== CTA final ========== */}
      <CTA
        title={data.cta.title}
        description={data.cta.description}
        buttonText={data.cta.buttonText}
        buttonHref={data.cta.buttonHref}
        accentColor="rw-blue"
        locale={locale as 'fr' | 'en'}
      />
    </>
  );
}
