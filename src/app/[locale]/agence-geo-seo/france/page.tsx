/**
 * PAGE PASSERELLE - GEO & SEO EN FRANCE
 * URL: /agence-geo-seo/france (FR only)
 *
 * Liste les régions et villes avec liens vers les pages individuelles
 * Cette page n'existe qu'en français
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Composants
import { PageHero, CTA } from '@/components/shared/global';
import RevealAnimation from '@/components/animation/RevealAnimation';

// SEO
import { BreadcrumbJsonLd } from '@/components/seo';

// Data
import * as data from './data.fr';

// ============================================
// FR ONLY - Redirect to 404 for other locales
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Cette page n'existe qu'en français
  if (locale !== 'fr') {
    return {};
  }

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function FrancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Cette page n'existe qu'en français
  if (locale !== 'fr') {
    notFound();
  }

  // Grouper les villes par région
  const villesByRegion = data.villesData.reduce(
    (acc, ville) => {
      if (!acc[ville.region]) {
        acc[ville.region] = [];
      }
      acc[ville.region].push(ville);
      return acc;
    },
    {} as Record<string, typeof data.villesData>
  );

  // Trier les régions alphabétiquement
  const sortedRegions = Object.keys(villesByRegion).sort();

  // Créer un mapping nom -> slug pour les régions
  const regionSlugMap = data.regionsData.reduce(
    (acc, region) => {
      acc[region.name] = region.slug;
      return acc;
    },
    {} as Record<string, string>
  );

  // Préparer les données pour le schema
  const breadcrumbSchemaItems = data.pageHeroData.breadcrumb.map((item) => ({
    name: item.label,
    url: item.href || '/agence-geo-seo/france',
  }));

  return (
    <>
      {/* ========== SCHEMA.ORG ========== */}
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />

      {/* ========== PAGE HERO ========== */}
      <PageHero
        breadcrumb={data.pageHeroData.breadcrumb}
        title={data.pageHeroData.title}
      />

      {/* ========== INTRO ========== */}
      <section className="pb-14 md:pb-16 lg:pb-20">
        <div className="main-container">
          <div className="max-w-3xl mx-auto text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="text-heading-4 mb-4">{data.introData.title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <p className="text-secondary/80 dark:text-accent/80">
                {data.introData.description}
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* ========== SECTION VILLES PAR RÉGION ========== */}
      <section className="pb-20 md:pb-24 lg:pb-28">
        <div className="main-container">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
            {sortedRegions.map((region, regionIndex) => (
              <RevealAnimation key={region} delay={0.1 + regionIndex * 0.05}>
                <div className="bg-white dark:bg-background-6 rounded-2xl p-6 md:p-8">
                  <Link
                    href={`/agence-geo-seo/france/${regionSlugMap[region]}`}
                    className="block text-heading-6 text-secondary dark:text-accent mb-4 pb-3 border-b border-stroke-3 dark:border-stroke-7 hover:text-rw-blue dark:hover:text-rw-blue transition-colors"
                  >
                    {region}
                  </Link>
                  <ul className="space-y-2">
                    {villesByRegion[region].map((ville) => (
                      <li key={ville.slug}>
                        <Link
                          href={`/agence-geo-seo/france/${ville.slug}`}
                          className="text-secondary/80 dark:text-accent/80 hover:text-rw-blue dark:hover:text-rw-blue transition-colors inline-flex items-center gap-2 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rw-blue/40 group-hover:bg-rw-blue transition-colors" />
                          Agence GEO & SEO à {ville.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <CTA
        title={data.ctaData.title}
        description={data.ctaData.description}
        buttonText={data.ctaData.buttonText}
        buttonHref={data.ctaData.buttonHref}
      />
    </>
  );
}
