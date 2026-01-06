/**
 * PAGE PASSERELLE - GEO & SEO PAR SECTEUR
 * URL: /agence-geo-seo/secteurs (FR & EN)
 *
 * Liste les secteurs d'activité et types de projets avec liens vers les pages individuelles
 */

import { Metadata } from 'next';
import Link from 'next/link';

// Composants
import { PageHero, CTA } from '@/components/shared/global';
import RevealAnimation from '@/components/animation/RevealAnimation';

// SEO
import { BreadcrumbJsonLd } from '@/components/seo';

// Data
import * as dataFr from './data.fr';
import * as dataEn from './data.en';

// ============================================
// METADATA
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = locale === 'fr' ? dataFr : dataEn;

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function SecteursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = locale === 'fr' ? dataFr : dataEn;

  // Préparer les données pour le schema
  const breadcrumbSchemaItems = data.pageHeroData.breadcrumb.map((item) => ({
    name: item.label,
    url: item.href || '/agence-geo-seo/secteurs',
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

      {/* ========== SECTION SECTEURS D'ACTIVITÉ ========== */}
      <section className="pb-14 md:pb-16 lg:pb-20">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-5 text-secondary dark:text-accent mb-8 text-center">
              Par secteur d&apos;activité
            </h2>
          </RevealAnimation>

          {/* Grouper par catégorie */}
          {(() => {
            const categories = data.secteursMetiersData.reduce(
              (acc, item) => {
                const cat = item.category || 'Autres';
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(item);
                return acc;
              },
              {} as Record<string, typeof data.secteursMetiersData>
            );

            return Object.entries(categories).map(
              ([category, items], catIndex) => (
                <div key={category} className="mb-10 last:mb-0">
                  <RevealAnimation delay={0.1 + catIndex * 0.05}>
                    <h3 className="text-heading-6 text-secondary/70 dark:text-accent/70 mb-4">
                      {category}
                    </h3>
                  </RevealAnimation>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {items.map((secteur, index) => (
                      <RevealAnimation
                        key={secteur.slug}
                        delay={0.1 + index * 0.02}
                      >
                        <Link
                          href={`/agence-geo-seo/secteur/${secteur.slug}`}
                          className="block bg-white dark:bg-background-6 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-rw-blue/20"
                        >
                          <span className="text-secondary dark:text-accent group-hover:text-rw-blue transition-colors">
                            {secteur.name}
                          </span>
                        </Link>
                      </RevealAnimation>
                    ))}
                  </div>
                </div>
              )
            );
          })()}
        </div>
      </section>

      {/* ========== SECTION TYPES DE PROJETS ========== */}
      <section className="pb-14 md:pb-16 lg:pb-20">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-5 text-secondary dark:text-accent mb-8 text-center">
              Par type de projet
            </h2>
          </RevealAnimation>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.typesProjetsData.map((projet, index) => (
              <RevealAnimation key={projet.slug} delay={0.1 + index * 0.02}>
                <Link
                  href={`/agence-geo-seo/projet/${projet.slug}`}
                  className="block bg-white dark:bg-background-6 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-rw-blue/20"
                >
                  <span className="text-secondary dark:text-accent group-hover:text-rw-blue transition-colors">
                    {projet.name}
                  </span>
                </Link>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION CMS & PLATEFORMES ========== */}
      <section className="pb-20 md:pb-24 lg:pb-28">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-5 text-secondary dark:text-accent mb-8 text-center">
              Par CMS &amp; plateforme
            </h2>
          </RevealAnimation>

          {/* Grouper par catégorie */}
          {(() => {
            const categories = data.cmsPlatformesData.reduce(
              (acc, item) => {
                const cat = item.category || 'Autres';
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(item);
                return acc;
              },
              {} as Record<string, typeof data.cmsPlatformesData>
            );

            return Object.entries(categories).map(
              ([category, items], catIndex) => (
                <div key={category} className="mb-10 last:mb-0">
                  <RevealAnimation delay={0.1 + catIndex * 0.05}>
                    <h3 className="text-heading-6 text-secondary/70 dark:text-accent/70 mb-4">
                      {category}
                    </h3>
                  </RevealAnimation>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {items.map((cms, index) => (
                      <RevealAnimation key={cms.slug} delay={0.1 + index * 0.02}>
                        <Link
                          href={`/agence-geo-seo/cms/${cms.slug}`}
                          className="block bg-white dark:bg-background-6 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group border border-transparent hover:border-rw-blue/20"
                        >
                          <span className="text-secondary dark:text-accent group-hover:text-rw-blue transition-colors">
                            {cms.name}
                          </span>
                        </Link>
                      </RevealAnimation>
                    ))}
                  </div>
                </div>
              )
            );
          })()}
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
