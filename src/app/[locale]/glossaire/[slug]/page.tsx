/**
 * GLOSSAIRE - Template entrée individuelle
 * URL FR: /glossaire/{slug}  |  URL EN: /en/glossary/{slugEn}
 *
 * Layout calqué sur IntroService (grid 12 cols, TOC sticky à droite)
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { isValidLocale, baseUrl, type Locale } from '@/lib/i18n';
import { BreadcrumbJsonLd, DefinedTermJsonLd } from '@/components/seo';
import RevealAnimation from '@/components/animation/RevealAnimation';
import GlossaireToc from '@/components/shared/glossaire/GlossaireToc';

import {
  GLOSSAIRE_ENTRIES,
  GLOSSAIRE_CATEGORIES,
  getEntryBySlug,
  getEntryBySlugEn,
  type GlossaireEntry,
} from '@/data/glossaire/registry';
import type { GlossaireEntryData, TableauComparatif, ConceptLie, PerimetreItem, SectionOptionnelle } from '@/data/glossaire/types';

// ============================================
// TYPES & STATIC PARAMS
// ============================================
interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const entry of GLOSSAIRE_ENTRIES) {
    params.push({ locale: 'fr', slug: entry.slug });
    params.push({ locale: 'en', slug: entry.slugEn });
  }
  return params;
}

// ============================================
// HELPERS
// ============================================
function resolveEntry(slug: string, locale: Locale): GlossaireEntry | undefined {
  return locale === 'fr' ? getEntryBySlug(slug) : getEntryBySlugEn(slug);
}

async function loadEntryData(slug: string, locale: Locale): Promise<GlossaireEntryData | null> {
  try {
    const mod = await import(`@/data/glossaire/entries/${slug}.${locale}`);
    return mod.data as GlossaireEntryData;
  } catch {
    return null;
  }
}

function buildToc(data: GlossaireEntryData, locale: Locale) {
  const items: { id: string; label: string }[] = [
    { id: 'definition', label: locale === 'fr' ? 'Définition' : 'Definition' },
    { id: 'cadre', label: locale === 'fr' ? 'Cadre méthodologique' : 'Framework' },
  ];
  if (data.sections) {
    for (const s of data.sections) items.push({ id: slugify(s.title), label: s.title });
  }
  items.push({ id: 'perimetre', label: locale === 'fr' ? 'Périmètre' : 'Scope' });
  items.push({ id: 'concepts-lies', label: locale === 'fr' ? 'Concepts liés' : 'Related Concepts' });
  return items;
}

function slugify(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function glossaireHref(slug: string, locale: Locale): string {
  if (locale === 'fr') return `/glossaire/${slug}`;
  const entry = getEntryBySlug(slug);
  return entry ? `/en/glossary/${entry.slugEn}` : `/en/glossary/${slug}`;
}

// ============================================
// METADATA
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const entry = resolveEntry(slug, locale);
  if (!entry) notFound();
  const entryData = await loadEntryData(entry.slug, locale as Locale);
  const title = entryData?.metadata.title ?? (locale === 'fr' ? `${entry.title} : définition & cadre` : `${entry.titleEn}: Definition & Framework`);
  const description = entryData?.metadata.description ?? (locale === 'fr' ? `${entry.title} — définition, cadre méthodologique et périmètre. Référentiel Rankwell.` : `${entry.titleEn} — definition, framework and scope. Rankwell reference guide.`);
  const frenchPath = `/glossaire/${entry.slug}`;
  const englishPath = `/en/glossary/${entry.slugEn}`;
  return {
    title, description,
    alternates: {
      canonical: locale === 'fr' ? `${baseUrl}${frenchPath}` : `${baseUrl}${englishPath}`,
      languages: { 'fr': `${baseUrl}${frenchPath}`, 'en': `${baseUrl}${englishPath}`, 'x-default': `${baseUrl}${englishPath}` },
    },
  };
}

// ============================================
// SUB-COMPONENTS
// ============================================

/** Tableau — fond grisé sur page blanche */
function GlossaireTableau({ tableau }: { tableau: TableauComparatif }) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl bg-background-1 dark:bg-background-6">
      <div className="overflow-x-auto p-1">
        <table className="w-full text-sm">
          <caption className="sr-only">{tableau.caption}</caption>
          <thead>
            <tr>
              {tableau.headers.map((h, i) => (
                <th key={i} className="px-5 py-4 text-left text-tagline-3 font-semibold uppercase tracking-widest text-secondary/45 dark:text-white/40">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableau.rows.map((row, i) => (
              <tr key={i} className="group">
                {row.cells.map((cell, j) => (
                  <td key={j} className={`px-5 py-3 first:rounded-l-xl last:rounded-r-xl transition-colors duration-150 group-hover:bg-white dark:group-hover:bg-background-5 ${j === 0 ? 'font-medium text-secondary dark:text-white' : 'text-secondary/65 dark:text-white/65'}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/** Phrase nucléaire */
function PhraseNucleaire({ text }: { text: string }) {
  return (
    <div className="relative my-10 rounded-2xl bg-secondary px-7 py-7 dark:bg-background-5">
      <svg className="absolute -top-3 left-6 h-8 w-8 text-rw-blue" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>
      <p className="relative text-tagline-1 font-medium leading-[1.85] text-white/90">{text}</p>
    </div>
  );
}

/** Item de périmètre */
function PerimetreListItem({ item, locale }: { item: PerimetreItem; locale: Locale }) {
  return (
    <li className="flex items-start gap-3 py-2.5">
      <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-rw-blue/50" aria-hidden="true" />
      <span className="text-tagline-1 text-secondary/75 dark:text-white/75 leading-relaxed">
        {item.text}
        {item.link && (<> <Link href={glossaireHref(item.link.slug, locale)} className="font-medium text-rw-blue hover:underline">{item.link.label}</Link></>)}
      </span>
    </li>
  );
}

/** Carte concept lié */
function ConceptLieCard({ concept, locale }: { concept: ConceptLie; locale: Locale }) {
  return (
    <Link
      href={glossaireHref(concept.slug, locale)}
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-stroke-2 bg-background-1 px-5 py-4 transition-all duration-300 hover:border-rw-blue/40 hover:shadow-8 dark:border-stroke-6 dark:bg-background-6 dark:hover:border-rw-blue/50"
    >
      <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-rw-blue transition-transform duration-300 group-hover:scale-y-100" />
      <span className="font-medium text-secondary transition-colors group-hover:text-rw-blue dark:text-white dark:group-hover:text-rw-blue">{concept.label}</span>
      <svg className="ml-auto h-4 w-4 -translate-x-1 text-secondary/20 transition-all duration-300 group-hover:translate-x-0 group-hover:text-rw-blue dark:text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

/** Section optionnelle */
function SectionOptionnelleBlock({ section }: { section: SectionOptionnelle }) {
  const sectionId = slugify(section.title);
  return (
    <section id={sectionId} className="scroll-mt-28">
      <RevealAnimation>
        <h3 className="text-heading-5 font-semibold text-secondary dark:text-white mb-5">{section.title}</h3>
      </RevealAnimation>
      {section.paragraphs?.map((p, i) => (
        <RevealAnimation key={i} delay={i * 0.04}>
          <p className="text-tagline-1 text-secondary/70 dark:text-white/70 mb-5 leading-[1.85]">{p}</p>
        </RevealAnimation>
      ))}
      {section.tableau && (<RevealAnimation><GlossaireTableau tableau={section.tableau} /></RevealAnimation>)}
      {section.items && (
        <RevealAnimation>
          <div className="mt-6 grid gap-2.5">
            {section.items.map((item, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-background-1 px-5 py-5 dark:bg-background-6">
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-rw-blue text-sm font-bold text-white">{i + 1}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-secondary dark:text-white mb-1.5">{item.label}</p>
                  <p className="text-tagline-1 text-secondary/75 dark:text-white/75 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealAnimation>
      )}
      {section.paragraphsAfter?.map((p, i) => (
        <RevealAnimation key={`after-${i}`} delay={i * 0.04}>
          <p className="text-tagline-1 text-secondary/70 dark:text-white/70 mt-6 mb-5 leading-[1.85]">{p}</p>
        </RevealAnimation>
      ))}
    </section>
  );
}

/** Titre de section H2 */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <RevealAnimation>
      <div className="mb-5 flex items-center gap-3">
        <div className="h-px w-8 bg-rw-blue" />
        <h2 className="text-tagline-2 font-semibold uppercase tracking-widest text-rw-blue">{children}</h2>
      </div>
    </RevealAnimation>
  );
}

/** Séparateur */
function SectionDivider() {
  return (
    <div className="my-14 flex items-center gap-4 lg:my-16">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stroke-1 to-transparent dark:via-stroke-5" />
      <div className="h-1.5 w-1.5 rounded-full bg-rw-blue/30" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stroke-1 to-transparent dark:via-stroke-5" />
    </div>
  );
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function GlossaireEntryPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const entry = resolveEntry(slug, locale as Locale);
  if (!entry) notFound();

  const entryData = await loadEntryData(entry.slug, locale as Locale);
  if (!entryData) notFound();

  const categoryLabel = locale === 'fr' ? GLOSSAIRE_CATEGORIES[entry.category].fr : GLOSSAIRE_CATEGORIES[entry.category].en;
  const title = locale === 'fr' ? entry.title : entry.titleEn;
  const toc = buildToc(entryData, locale as Locale);

  const breadcrumbItems = [
    { name: locale === 'fr' ? 'Accueil' : 'Home', url: locale === 'fr' ? '/' : '/en' },
    { name: locale === 'fr' ? 'Glossaire' : 'Glossary', url: locale === 'fr' ? '/glossaire' : '/en/glossary' },
    { name: title, url: locale === 'fr' ? `/glossaire/${entry.slug}` : `/en/glossary/${entry.slugEn}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <DefinedTermJsonLd term={{
        name: entry.title,
        alternateName: entry.title !== entry.titleEn ? entry.titleEn : undefined,
        description: entryData.definition.paragraphs[0],
        url: `/glossaire/${entry.slug}`,
      }} />

      {/* ══════════════════════════════════════ */}
      {/* HERO — épuré, grande hauteur           */}
      {/* ══════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-24 pt-[160px] lg:pb-36 lg:pt-[260px]" aria-label="Hero section">
        <div className="main-container relative z-10">
          <RevealAnimation delay={0.05}>
            <nav aria-label="Breadcrumb" className="mb-12 md:mb-16">
              <ol className="flex flex-wrap items-center gap-1.5 text-tagline-1 text-secondary/60 dark:text-accent/60">
                <li><Link href={locale === 'fr' ? '/' : '/en'} className="transition-colors duration-300 hover:text-rw-blue">{locale === 'fr' ? 'Accueil' : 'Home'}</Link></li>
                <li aria-hidden="true" className="mx-2 select-none">/</li>
                <li><Link href={locale === 'fr' ? '/glossaire' : '/en/glossary'} className="transition-colors duration-300 hover:text-rw-blue">{locale === 'fr' ? 'Glossaire' : 'Glossary'}</Link></li>
                <li aria-hidden="true" className="mx-2 select-none">/</li>
                <li className="font-medium text-secondary dark:text-accent">{title}</li>
              </ol>
            </nav>
          </RevealAnimation>

          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto max-w-4xl text-center">
              <RevealAnimation delay={0.15}>
                <h1 className="opacity-0">{title}</h1>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* CONTENU — Grid 12 cols comme IntroService     */}
      {/* Fond blanc, tableaux et TOC en grisé          */}
      {/* ══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 lg:py-[100px] xl:py-[120px] bg-white dark:bg-background-7">
        <div className="main-container">
          <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24">

            {/* ── Colonne contenu (7/12 → 8/12 sur xl) ── */}
            <div className="col-span-12 lg:col-span-7 xl:col-span-8 min-w-0">

              {/* DÉFINITION */}
              <section id="definition" className="scroll-mt-28">
                <SectionTitle>{locale === 'fr' ? 'Définition' : 'Definition'}</SectionTitle>
                {entryData.definition.paragraphs.map((p, i) => (
                  <RevealAnimation key={i} delay={0.05 + i * 0.04}>
                    <p className="text-heading-6 font-normal text-secondary dark:text-white mb-5 leading-[1.75]">{p}</p>
                  </RevealAnimation>
                ))}
                <RevealAnimation delay={0.15}>
                  <PhraseNucleaire text={entryData.definition.nucleaire} />
                </RevealAnimation>
              </section>

              <SectionDivider />

              {/* CADRE MÉTHODOLOGIQUE */}
              <section id="cadre" className="scroll-mt-28">
                <SectionTitle>{locale === 'fr' ? 'Cadre méthodologique' : 'Methodological Framework'}</SectionTitle>
                {entryData.cadre.paragraphs.map((p, i) => (
                  <RevealAnimation key={i} delay={i * 0.04}>
                    <p className="text-tagline-1 text-secondary/70 dark:text-white/70 mb-5 leading-[1.85]">{p}</p>
                  </RevealAnimation>
                ))}
                {entryData.cadre.tableau && (<RevealAnimation><GlossaireTableau tableau={entryData.cadre.tableau} /></RevealAnimation>)}
              </section>

              {/* SECTIONS OPTIONNELLES */}
              {entryData.sections?.map((section, i) => (
                <div key={i}>
                  <SectionDivider />
                  <SectionOptionnelleBlock section={section} />
                </div>
              ))}

              <SectionDivider />

              {/* PÉRIMÈTRE */}
              <section id="perimetre" className="scroll-mt-28">
                <SectionTitle>{locale === 'fr' ? 'Périmètre' : 'Scope'}</SectionTitle>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <RevealAnimation>
                    <div className="rounded-2xl bg-background-1 p-6 dark:bg-background-6">
                      <h3 className="mb-5 flex items-center gap-2.5 text-tagline-1 font-semibold text-secondary dark:text-white">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                          <svg className="h-3.5 w-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        {locale === 'fr' ? 'Ce que ça couvre' : 'What it covers'}
                      </h3>
                      <ul className="space-y-0.5">
                        {entryData.perimetre.couvre.map((item, i) => <PerimetreListItem key={i} item={item} locale={locale as Locale} />)}
                      </ul>
                    </div>
                  </RevealAnimation>
                  <RevealAnimation delay={0.08}>
                    <div className="rounded-2xl bg-background-1 p-6 dark:bg-background-6">
                      <h3 className="mb-5 flex items-center gap-2.5 text-tagline-1 font-semibold text-secondary dark:text-white">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/5 dark:bg-white/10">
                          <svg className="h-3.5 w-3.5 text-secondary/35 dark:text-white/35" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </span>
                        {locale === 'fr' ? 'Ce que ça ne couvre pas' : "What it doesn't cover"}
                      </h3>
                      <ul className="space-y-0.5">
                        {entryData.perimetre.neCouvrePas.map((item, i) => <PerimetreListItem key={i} item={item} locale={locale as Locale} />)}
                      </ul>
                    </div>
                  </RevealAnimation>
                </div>
              </section>

              <SectionDivider />

              {/* CONCEPTS LIÉS */}
              <section id="concepts-lies" className="scroll-mt-28">
                <SectionTitle>{locale === 'fr' ? 'Concepts liés' : 'Related Concepts'}</SectionTitle>
                <div className="grid gap-3 sm:grid-cols-2 mt-6">
                  {entryData.conceptsLies.map((concept, i) => (
                    <RevealAnimation key={concept.slug} delay={i * 0.04}>
                      <ConceptLieCard concept={concept} locale={locale as Locale} />
                    </RevealAnimation>
                  ))}
                </div>
              </section>
            </div>

            {/* ── Colonne TOC — composant dédié, sticky CSS pur ── */}
            <aside className="col-span-12 lg:col-span-5 xl:col-span-4 hidden lg:block">
              <GlossaireToc
                items={toc}
                title={locale === 'fr' ? 'Sur cette page' : 'On this page'}
                backLink={{
                  href: locale === 'fr' ? '/glossaire' : '/en/glossary',
                  label: locale === 'fr' ? 'Tous les concepts' : 'All concepts',
                }}
              />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
