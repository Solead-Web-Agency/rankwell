/**
 * GUIDES - Page index
 * URL FR: /guides  |  URL EN: /en/guides
 *
 * Liste tous les guides par categorie, meme pattern que l'index glossaire.
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { isValidLocale, baseUrl, type Locale } from '@/lib/i18n';
import { BreadcrumbJsonLd } from '@/components/seo';
import RevealAnimation from '@/components/animation/RevealAnimation';

import {
  GUIDE_CATEGORIES,
  getGuidesByLocale,
  getGuidesByCategory,
  type GuideCategory,
} from '@/data/guides/registry';

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
  const title = locale === 'fr'
    ? 'Guides SEO, GEO & Marketing Digital | Rankwell'
    : 'SEO, GEO & Digital Marketing Guides | Rankwell';
  const description = locale === 'fr'
    ? 'Guides pratiques et articles approfondis sur le SEO, le GEO, le SEA et la strategie digitale. Par les experts Rankwell.'
    : 'Practical guides and in-depth articles on SEO, GEO, SEA and digital strategy. By Rankwell experts.';
  return {
    title,
    description,
    alternates: {
      canonical: locale === 'fr' ? `${baseUrl}/guides` : `${baseUrl}/en/guides`,
      languages: {
        fr: `${baseUrl}/guides`,
        en: `${baseUrl}/en/guides`,
        'x-default': `${baseUrl}/en/guides`,
      },
    },
  };
}

// ============================================
// HELPERS
// ============================================
function guideHref(slug: string, entryLocale: 'fr' | 'en'): string {
  return entryLocale === 'fr' ? `/guides/${slug}` : `/en/guides/${slug}`;
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function GuidesIndexPage({ params }: PageProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const breadcrumbItems = [
    { name: locale === 'fr' ? 'Accueil' : 'Home', url: locale === 'fr' ? '/' : '/en' },
    { name: 'Guides', url: locale === 'fr' ? '/guides' : '/en/guides' },
  ];

  // Articles de cette locale uniquement
  const localeEntries = getGuidesByLocale(locale);

  // Catégories qui ont au moins un article dans cette locale
  const activeCategories = (Object.keys(GUIDE_CATEGORIES) as GuideCategory[]).filter(
    (cat) => getGuidesByCategory(cat, locale).length > 0
  );

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-[140px] lg:pb-24 lg:pt-[220px]">
        <div className="main-container relative z-10">
          <RevealAnimation delay={0.05}>
            <nav aria-label="Breadcrumb" className="mb-10 md:mb-14">
              <ol className="flex flex-wrap items-center gap-1.5 text-tagline-1 text-secondary/60 dark:text-accent/60">
                <li>
                  <Link
                    href={locale === 'fr' ? '/' : '/en'}
                    className="transition-colors duration-300 hover:text-rw-blue"
                  >
                    {locale === 'fr' ? 'Accueil' : 'Home'}
                  </Link>
                </li>
                <li aria-hidden="true" className="mx-2 select-none">/</li>
                <li className="font-medium text-secondary dark:text-accent">Guides</li>
              </ol>
            </nav>
          </RevealAnimation>

          <div className="mx-auto max-w-3xl text-center">
            <RevealAnimation delay={0.1}>
              <h1 className="text-heading-2 lg:text-heading-1 font-semibold text-secondary dark:text-white mb-6">
                {locale === 'fr' ? 'Guides' : 'Guides'}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.15}>
              <p className="text-heading-6 text-secondary/55 dark:text-white/55 font-normal">
                {locale === 'fr'
                  ? `${localeEntries.length} guides pratiques pour maitriser le SEO, le GEO et la stratégie digitale.`
                  : `${localeEntries.length} practical guides to master SEO, GEO and digital strategy.`}
              </p>
            </RevealAnimation>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="py-16 md:py-20 lg:py-[100px] bg-white dark:bg-background-7">
        <div className="main-container">

          {localeEntries.length === 0 ? (
            <RevealAnimation>
              <div className="text-center py-20">
                <p className="text-heading-5 text-secondary/40 dark:text-white/40">
                  {locale === 'fr'
                    ? 'Les guides arrivent bientot.'
                    : 'Guides coming soon.'}
                </p>
              </div>
            </RevealAnimation>
          ) : (
            <div className="space-y-16">
              {activeCategories.map((category) => {
                const entries = getGuidesByCategory(category, locale);
                const catLabel = GUIDE_CATEGORIES[category][locale as 'fr' | 'en'];

                return (
                  <div key={category}>
                    <RevealAnimation>
                      <div className="mb-6 flex items-center gap-3">
                        <div className="h-px w-8 bg-rw-blue" />
                        <h2 className="text-tagline-2 font-semibold uppercase tracking-widest text-rw-blue">
                          {catLabel}
                        </h2>
                      </div>
                    </RevealAnimation>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {entries.map((entry, i) => (
                        <RevealAnimation key={entry.slug} delay={i * 0.04}>
                          <Link
                            href={guideHref(entry.slug, entry.locale)}
                            className="group relative flex flex-col gap-3 rounded-2xl border border-stroke-2 bg-background-1 p-6 transition-all duration-300 hover:border-rw-blue/40 hover:shadow-8 dark:border-stroke-6 dark:bg-background-6 dark:hover:border-rw-blue/50"
                          >
                            <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 rounded-l-2xl bg-rw-blue transition-transform duration-300 group-hover:scale-y-100" />
                            <h3 className="text-heading-6 font-medium text-secondary transition-colors group-hover:text-rw-blue dark:text-white dark:group-hover:text-rw-blue">
                              {entry.title}
                            </h3>
                            <span className="mt-auto text-tagline-2 text-secondary/40 dark:text-white/40 group-hover:text-rw-blue transition-colors">
                              {locale === 'fr' ? 'Lire le guide' : 'Read the guide'} →
                            </span>
                          </Link>
                        </RevealAnimation>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
