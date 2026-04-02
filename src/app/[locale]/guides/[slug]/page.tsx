/**
 * GUIDES - Template article individuel
 * URL FR: /guides/{slug}  |  URL EN: /en/guides/{slugEn}
 *
 * Layout split-view : colonne gauche sticky (40%) + contenu defilant (60%)
 * La colonne gauche affiche l'image si disponible, sinon un fond de marque Rankwell.
 * Responsive : tablette = image bandeau, mobile = sans colonne gauche
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { isValidLocale, baseUrl, type Locale } from '@/lib/i18n';
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd, HowToJsonLd } from '@/components/seo';
import RevealAnimation from '@/components/animation/RevealAnimation';

import {
  GUIDE_ENTRIES,
  getGuideBySlug,
  getAllGuideParams,
  type GuideEntry,
} from '@/data/guides/registry';
import type { GuideEntryData, WidgetBlock } from '@/data/guides/types';

import { GuideContentRenderer, GuideToc, GuideFaq, GuideSources, GuideConclusion, GuideAuthor, GuideShare } from '@/components/shared/guides';
import type { GuideTocItem } from '@/components/shared/guides/GuideToc';

// ============================================
// TYPES & STATIC PARAMS
// ============================================
interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideParams();
}

// ============================================
// HELPERS
// ============================================
function resolveEntry(slug: string, locale: string): GuideEntry | undefined {
  return getGuideBySlug(slug, locale);
}

async function loadEntryData(slug: string, locale: Locale): Promise<GuideEntryData | null> {
  try {
    const mod = await import(`@/data/guides/entries/${slug}.${locale}`);
    return mod.data as GuideEntryData;
  } catch {
    return null;
  }
}

function buildToc(data: GuideEntryData): GuideTocItem[] {
  return data.sections.map((s) => ({
    id: s.id,
    label: s.title,
  }));
}

/** Extrait les HowTo steps depuis les widgets timeline dans les sections */
function extractHowToSteps(data: GuideEntryData): { name: string; description: string; steps: { name: string; text: string }[] } | null {
  for (const section of data.sections) {
    for (const block of section.blocks) {
      if (block.type === 'widget') {
        const widget = block as WidgetBlock;
        const config = widget.config as Record<string, unknown>;
        // Détecte les widgets avec des steps (timeline, stepper, etc.)
        if (Array.isArray(config.steps) && config.steps.length >= 2) {
          const steps = (config.steps as { label: string; description: string }[]).map((s) => ({
            name: s.label,
            text: s.description,
          }));
          return {
            name: (config.title as string) || section.title,
            description: section.title,
            steps,
          };
        }
      }
    }
  }
  return null;
}

/** Extrait les entités du glossaire depuis les internalLinks */
function extractGlossaryEntities(data: GuideEntryData): { name: string; url: string }[] {
  if (!data.internalLinks) return [];
  return data.internalLinks
    .filter((link) => link.href.startsWith('/glossaire/'))
    .map((link) => ({ name: link.anchor, url: link.href }));
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
  const title = entryData?.metadata.title ?? entry.title;
  const description = entryData?.metadata.description ?? '';
  const articlePath = locale === 'fr' ? `/guides/${entry.slug}` : `/en/guides/${entry.slug}`;
  const canonicalUrl = `${baseUrl}${articlePath}`;

  // Hreflang self-referencing uniquement — pas de version dans l'autre langue
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        [locale]: canonicalUrl,
      },
    },
  };
}

// ============================================
// SUB-COMPONENTS
// ============================================

/** Separateur entre sections */
function SectionDivider() {
  return (
    <RevealAnimation>
      <div className="my-16 flex items-center gap-4 lg:my-20">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stroke-1 to-transparent dark:via-stroke-5" />
        <div className="h-1.5 w-1.5 rounded-full bg-rw-blue/30" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stroke-1 to-transparent dark:via-stroke-5" />
      </div>
    </RevealAnimation>
  );
}

/** Titre de section H2 avec accent bleu */
function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <RevealAnimation>
      <div id={id} className="scroll-mt-28 mb-5 flex items-center gap-3">
        <div className="h-px w-8 bg-rw-blue" />
        <h2 className="text-tagline-2 font-semibold uppercase tracking-widest text-rw-blue">
          {children}
        </h2>
      </div>
    </RevealAnimation>
  );
}

/** Colonne gauche sticky — image inset sur fond de page, sous le menu */
function StickyLeftColumn({ imageUrl, imageAlt, h1, children }: { imageUrl?: string; imageAlt?: string; h1: string; children?: React.ReactNode }) {
  return (
    <div className="hidden lg:block lg:w-[40%]">
      <div className="sticky top-[100px] z-0 h-[calc(100vh-120px)] p-5 pr-0">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          {imageUrl ? (
            <>
              <Image
                src={imageUrl}
                alt={imageAlt || h1}
                fill
                className="object-cover"
                priority
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </>
          ) : (
            /* Fond de marque Rankwell quand pas d'image */
            <div className="h-full w-full bg-secondary dark:bg-background-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-[15%] -left-[20%] h-[60%] w-[70%] rounded-full bg-rw-blue/40 blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] h-[45%] w-[50%] rounded-full bg-rw-cyan/30 blur-[100px]" />
                <div className="absolute top-[50%] left-[40%] h-[35%] w-[40%] rounded-full bg-rw-purple/25 blur-[80px]" />
              </div>
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />
              <div className="absolute bottom-10 left-8 right-8">
                <p className="text-tagline-3 font-semibold uppercase tracking-[0.25em] text-white/25">
                  Rankwell
                </p>
                <p className="mt-2 text-tagline-2 text-white/15 leading-relaxed max-w-xs">
                  Guide expert
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Contenu sous le sticky (partage etc.) — passe AU-DESSUS de l'image */}
      {children && (
        <div className="relative z-10 bg-background-3 dark:bg-background-7">
          {children}
        </div>
      )}
    </div>
  );
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function GuideEntryPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const entry = resolveEntry(slug, locale as Locale);
  if (!entry) notFound();

  const data = await loadEntryData(entry.slug, locale as Locale);
  if (!data) notFound();

  const toc = buildToc(data);
  const howTo = extractHowToSteps(data);
  const glossaryEntities = extractGlossaryEntities(data);

  const breadcrumbItems = [
    { name: locale === 'fr' ? 'Accueil' : 'Home', url: locale === 'fr' ? '/' : '/en' },
    { name: 'Guides', url: locale === 'fr' ? '/guides' : '/en/guides' },
    { name: data.hero.h1, url: locale === 'fr' ? `/guides/${entry.slug}` : `/en/guides/${entry.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ArticleJsonLd
        article={{
          headline: data.hero.h1,
          description: data.metadata.description,
          datePublished: data.hero.date,
          imageUrl: data.hero.imageUrl,
          imageAlt: data.hero.imageAlt,
          url: locale === 'fr' ? `/guides/${entry.slug}` : `/en/guides/${entry.slug}`,
          locale,
          glossaryEntities: glossaryEntities.length > 0 ? glossaryEntities : undefined,
        }}
      />
      {data.faq.length > 0 && (
        <FAQJsonLd faqs={data.faq.map((f) => ({ question: f.question, answer: f.answer }))} />
      )}
      {howTo && (
        <HowToJsonLd name={howTo.name} description={howTo.description} steps={howTo.steps} />
      )}

      {/* ============================================ */}
      {/* LAYOUT SPLIT-VIEW                           */}
      {/* ============================================ */}
      <div className="relative isolate z-0 flex min-h-screen">

        {/* -- COLONNE GAUCHE STICKY (toujours visible en desktop) -- */}
        <StickyLeftColumn
          imageUrl={data.hero.imageUrl}
          imageAlt={data.hero.imageAlt}
          h1={data.hero.h1}
        />

        {/* Pas de separateur vertical — l'espace entre image et contenu suffit */}

        {/* -- CONTENU PRINCIPAL -- */}
        <div className="flex-1 min-w-0">

          {/* IMAGE BANDEAU (mobile + tablette) — avec marges, sous le menu */}
          {data.hero.imageUrl && (
            <RevealAnimation instant delay={0.05}>
            <div className="lg:hidden relative h-[35vh] min-h-[220px] sm:min-h-[280px] mt-[110px] mx-4 sm:mx-6 rounded-2xl overflow-hidden">
              <Image
                src={data.hero.imageUrl}
                alt={data.hero.imageAlt || data.hero.h1}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            </RevealAnimation>
          )}

          {/* ===== HERO MOBILE (flow normal) ===== */}
          <div className="lg:hidden px-6 sm:px-10 pt-6 pb-4">
            {/* BREADCRUMB */}
            <RevealAnimation instant delay={0.1}>
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-1.5 text-tagline-2 text-secondary/50 dark:text-white/50">
                  <li>
                    <Link href={locale === 'fr' ? '/' : '/en'} className="transition-colors duration-200 hover:text-rw-blue">
                      {locale === 'fr' ? 'Accueil' : 'Home'}
                    </Link>
                  </li>
                  <li aria-hidden="true" className="mx-1.5 select-none">/</li>
                  <li>
                    <Link href={locale === 'fr' ? '/guides' : '/en/guides'} className="transition-colors duration-200 hover:text-rw-blue">
                      Guides
                    </Link>
                  </li>
                  <li aria-hidden="true" className="mx-1.5 select-none">/</li>
                  <li className="text-secondary/80 dark:text-white/80 truncate max-w-[200px]">
                    {data.hero.h1}
                  </li>
                </ol>
              </nav>
            </RevealAnimation>

            {/* DATE + TEMPS DE LECTURE */}
            <RevealAnimation instant delay={0.2}>
              <div className="mb-3 flex items-center gap-3 text-tagline-2 text-secondary/45 dark:text-white/45">
                <time dateTime={data.hero.date}>
                  {new Date(data.hero.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-secondary/20 dark:bg-white/20" />
                <span>{data.hero.readingTime} min {locale === 'fr' ? 'de lecture' : 'read'}</span>
              </div>
            </RevealAnimation>

            {/* H1 */}
            <RevealAnimation instant delay={0.3}>
              <h1 className="text-heading-4 font-semibold text-secondary dark:text-white leading-tight mb-3">
                {data.hero.h1}
              </h1>
            </RevealAnimation>

            {/* SOUS-TITRE */}
            <RevealAnimation instant delay={0.4}>
              <p className="text-tagline-1 text-secondary/55 dark:text-white/55 font-normal">
                {data.hero.subtitle}
              </p>
            </RevealAnimation>
          </div>

          {/* ===== HERO DESKTOP (plein ecran, centre) ===== */}
          <div className="hidden lg:flex min-h-[calc(100vh-100px)] flex-col items-center">
            <div className="w-full max-w-[800px] px-6 sm:px-10">
              <RevealAnimation instant delay={0.1}>
                <nav aria-label="Breadcrumb" className="pt-[120px]">
                  <ol className="flex flex-wrap items-center gap-1.5 text-tagline-2 text-secondary/50 dark:text-white/50">
                    <li>
                      <Link href={locale === 'fr' ? '/' : '/en'} className="transition-colors duration-200 hover:text-rw-blue">
                        {locale === 'fr' ? 'Accueil' : 'Home'}
                      </Link>
                    </li>
                    <li aria-hidden="true" className="mx-1.5 select-none">/</li>
                    <li>
                      <Link href={locale === 'fr' ? '/guides' : '/en/guides'} className="transition-colors duration-200 hover:text-rw-blue">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden="true" className="mx-1.5 select-none">/</li>
                    <li className="text-secondary/80 dark:text-white/80 truncate max-w-[250px]">
                      {data.hero.h1}
                    </li>
                  </ol>
                </nav>
              </RevealAnimation>
            </div>

            <div className="flex flex-1 flex-col justify-center w-full max-w-[800px] px-6 sm:px-10">
              <RevealAnimation instant delay={0.2}>
                <div className="mb-4 flex items-center gap-3 text-tagline-2 text-secondary/45 dark:text-white/45">
                  <time dateTime={data.hero.date}>
                    {new Date(data.hero.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-secondary/20 dark:bg-white/20" />
                  <span>{data.hero.readingTime} min {locale === 'fr' ? 'de lecture' : 'read'}</span>
                </div>
              </RevealAnimation>

              <RevealAnimation instant delay={0.3}>
                <h1 className="text-heading-2 font-semibold text-secondary dark:text-white leading-tight mb-4">
                  {data.hero.h1}
                </h1>
              </RevealAnimation>

              <RevealAnimation instant delay={0.4}>
                <p className="text-heading-6 text-secondary/55 dark:text-white/55 font-normal max-w-2xl">
                  {data.hero.subtitle}
                </p>
              </RevealAnimation>
            </div>
          </div>

          {/* CONTENU — max 800px centre */}
          {/* pb-[350px] crée une zone vide en bas pour que le sticky reste actif pendant le chevauchement */}
          <div className="flex flex-col items-center pb-16 lg:pb-[350px]">
            <div className="w-full max-w-[800px] px-6 sm:px-10">

              <SectionDivider />

              {/* INTRO (drop cap sur le 1er paragraphe) */}
              <div>
                {data.intro.map((p, i) => (
                  <RevealAnimation key={i} delay={i * 0.04}>
                    <p
                      className={`text-tagline-1 text-secondary/75 dark:text-white/75 mb-5 leading-[1.85] ${
                        i === 0
                          ? 'first-letter:text-heading-2 first-letter:font-semibold first-letter:text-secondary dark:first-letter:text-white first-letter:float-left first-letter:mr-3 first-letter:mt-1'
                          : ''
                      }`}
                      dangerouslySetInnerHTML={{ __html: p }}
                    />
                  </RevealAnimation>
                ))}
              </div>

              <SectionDivider />

              {/* TOC "Dans cet article" */}
              <GuideToc
                items={toc}
                title={locale === 'fr' ? 'Dans cet article' : 'In this article'}
              />

              {/* SECTIONS H2 */}
              {data.sections.map((section) => (
                <div key={section.id}>
                  <SectionDivider />
                  <SectionTitle id={section.id}>{section.title}</SectionTitle>
                  <GuideContentRenderer blocks={section.blocks} />
                </div>
              ))}

              <SectionDivider />

              {/* FAQ */}
              {data.faq.length > 0 && (
                <>
                  <GuideFaq items={data.faq} title="FAQ" />
                  <SectionDivider />
                </>
              )}

              {/* CONCLUSION */}
              <GuideConclusion
                title={locale === 'fr' ? 'Conclusion' : 'Conclusion'}
                paragraphs={data.conclusion.paragraphs}
              />

              <SectionDivider />

              {/* SOURCES */}
              <GuideSources sources={data.sources} title="Sources" />

            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* BLOC AUTEUR + PARTAGE — au-dessus de l'image sticky grâce à z-10 */}
      {/* ============================================ */}
      <div className="relative z-10 flex bg-background-3 dark:bg-background-7 lg:-mt-[350px]">

        {/* Colonne gauche — partage (desktop), centré verticalement et horizontalement */}
        <div className="hidden lg:flex lg:w-[40%] items-center justify-center pt-32 lg:pt-40 pb-16 lg:pb-20 px-5">
          <GuideShare
            url={locale === 'fr' ? `/guides/${entry.slug}` : `/en/guides/${entry.slug}`}
            title={data.hero.h1}
            locale={locale}
          />
        </div>

        {/* Colonne droite — auteur */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col items-center pt-32 lg:pt-40 pb-16 lg:pb-20">
            <div className="w-full max-w-[800px] px-6 sm:px-10">

              <GuideAuthor locale={locale} />

              {/* Partage mobile — sous l'auteur */}
              <div className="lg:hidden mt-10">
                <GuideShare
                  url={locale === 'fr' ? `/guides/${entry.slug}` : `/en/guides/${entry.slug}`}
                  title={data.hero.h1}
                  locale={locale}
                />
              </div>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
