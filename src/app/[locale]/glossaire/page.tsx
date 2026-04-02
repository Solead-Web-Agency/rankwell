/**
 * GLOSSAIRE - Page index
 * URL FR: /glossaire
 * URL EN: /en/glossary
 *
 * Template calqué sur /agence-geo-seo/secteurs :
 * PageHero + intro centrée + catégories groupées avec cartes en grille
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { isValidLocale, baseUrl, type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/i18n/routes';
import { PageHero } from '@/components/shared/global';
import { BreadcrumbJsonLd } from '@/components/seo';
import RevealAnimation from '@/components/animation/RevealAnimation';

import {
  GLOSSAIRE_ENTRIES,
  GLOSSAIRE_CATEGORIES,
  getEntriesByCategory,
  type GlossaireCategory,
} from '@/data/glossaire/registry';

// ============================================
// TYPES
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

// ============================================
// METADATA
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const title = locale === 'fr'
    ? 'Glossaire SEO & GEO — Référentiel Rankwell'
    : 'SEO & GEO Glossary — Rankwell Reference Guide';
  const description = locale === 'fr'
    ? 'Définitions et cadres méthodologiques des concepts SEO, GEO et visibilité digitale. 49 concepts définis par les experts Rankwell.'
    : 'Definitions and methodological frameworks for SEO, GEO and digital visibility concepts. 49 concepts defined by Rankwell experts.';

  const frenchPath = '/glossaire';
  const currentUrl = locale === 'fr'
    ? `${baseUrl}${frenchPath}`
    : `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`;

  return {
    title,
    description,
    alternates: {
      canonical: currentUrl,
      languages: {
        'fr': `${baseUrl}${frenchPath}`,
        'en': `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`,
        'x-default': `${baseUrl}${getLocalizedPath(frenchPath, 'en')}`,
      },
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function GlossairePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const categories = Object.keys(GLOSSAIRE_CATEGORIES) as GlossaireCategory[];

  // Breadcrumb
  const breadcrumb = locale === 'fr'
    ? [{ label: 'Accueil', href: '/' }, { label: 'Glossaire' }]
    : [{ label: 'Home', href: '/en' }, { label: 'Glossary' }];

  const heroTitle = locale === 'fr' ? 'Glossaire SEO & GEO' : 'SEO & GEO Glossary';

  const breadcrumbSchemaItems = breadcrumb.map((item) => ({
    name: item.label,
    url: item.href || (locale === 'fr' ? '/glossaire' : '/en/glossary'),
  }));

  return (
    <>
      {/* Schema.org */}
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />

      {/* Hero — même composant que /secteurs */}
      <PageHero breadcrumb={breadcrumb} title={heroTitle} />

      {/* Intro centrée */}
      <section className="pb-14 md:pb-16 lg:pb-20">
        <div className="main-container">
          <div className="max-w-3xl mx-auto text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4 mb-4">
                {locale === 'fr'
                  ? 'Référentiel des concepts SEO et GEO'
                  : 'SEO and GEO concepts reference'}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/80 dark:text-accent/80">
                {locale === 'fr'
                  ? `${GLOSSAIRE_ENTRIES.length} définitions encyclopédiques. Chaque concept est défini avec un cadre méthodologique, un périmètre délimité et des liens vers les concepts associés.`
                  : `${GLOSSAIRE_ENTRIES.length} encyclopedic definitions. Each concept is defined with a methodological framework, a delimited scope and links to associated concepts.`}
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* Catégories avec cartes */}
      {categories.map((cat, catIndex) => {
        const entries = getEntriesByCategory(cat);
        const categoryLabel = locale === 'fr'
          ? GLOSSAIRE_CATEGORIES[cat].fr
          : GLOSSAIRE_CATEGORIES[cat].en;

        return (
          <section key={cat} className={catIndex < categories.length - 1 ? 'pb-14 md:pb-16 lg:pb-20' : 'pb-20 md:pb-24 lg:pb-28'}>
            <div className="main-container">
              <div className="mb-10 last:mb-0">
                <RevealAnimation delay={0.1 + catIndex * 0.05}>
                  <h3 className="text-heading-6 text-secondary/70 dark:text-accent/70 mb-4">
                    {categoryLabel}
                  </h3>
                </RevealAnimation>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {entries.map((entry, index) => {
                    const href = locale === 'fr'
                      ? `/glossaire/${entry.slug}`
                      : `/en/glossary/${entry.slugEn}`;
                    const entryTitle = locale === 'fr' ? entry.title : entry.titleEn;

                    return (
                      <RevealAnimation key={entry.slug} delay={0.1 + index * 0.02}>
                        <Link
                          href={href}
                          className="block bg-white dark:bg-background-6 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-rw-blue/20"
                        >
                          <span className="text-secondary dark:text-accent group-hover:text-rw-blue transition-colors">
                            {entryTitle}
                          </span>
                        </Link>
                      </RevealAnimation>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
