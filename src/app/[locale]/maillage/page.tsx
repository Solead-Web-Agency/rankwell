/**
 * PAGE MAILLAGE INTERNE - Analyse des liens entrants
 * URL: /maillage?k=ouvretoi
 *
 * Compte UNIQUEMENT les liens de contenu :
 * - CTA (primaryCta, secondaryCta, ctaHref, buttonHref)
 * - Liens dans les cards/services (href + buttonText)
 *
 * EXCLUT :
 * - Menu navigation
 * - Footer
 * - Breadcrumbs (fil d'Ariane)
 * - Table des matières (tocItems)
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import MaillageClient from './MaillageClient';

const SECRET_KEY = 'ouvretoi';

// Pages FR
const FR_PAGES = [
  { url: '/', name: 'Homepage', dataPath: '' },
  { url: '/agence-geo-seo', name: 'Agence GEO-SEO', dataPath: 'agence-geo-seo' },
  { url: '/agence-geo-seo/audit', name: 'Audit SEO', dataPath: 'agence-geo-seo/audit' },
  { url: '/agence-geo-seo/technique-semantique', name: 'Technique & Sémantique', dataPath: 'agence-geo-seo/technique-semantique' },
  { url: '/agence-geo-seo/netlinking', name: 'Netlinking', dataPath: 'agence-geo-seo/netlinking' },
  { url: '/agence-geo-seo/creation-contenu', name: 'Création Contenu', dataPath: 'agence-geo-seo/creation-contenu' },
  { url: '/agence-geo-seo/local', name: 'SEO Local', dataPath: 'agence-geo-seo/local' },
  { url: '/agence-geo-seo/international', name: 'SEO International', dataPath: 'agence-geo-seo/international' },
  { url: '/agence-sea', name: 'Agence SEA', dataPath: 'agence-sea' },
  { url: '/agence-sea/setup', name: 'Setup SEA', dataPath: 'agence-sea/setup' },
  { url: '/agence-sea/accompagnement', name: 'Accompagnement SEA', dataPath: 'agence-sea/accompagnement' },
  { url: '/agence-sea/analyse-semantique', name: 'Analyse Sémantique SEA', dataPath: 'agence-sea/analyse-semantique' },
  { url: '/agence-sea/local', name: 'SEA Local', dataPath: 'agence-sea/local' },
  { url: '/agence-sea/international', name: 'SEA International', dataPath: 'agence-sea/international' },
  { url: '/agence-data', name: 'Agence Data', dataPath: 'agence-data' },
  { url: '/agence-data/tracking', name: 'Tracking', dataPath: 'agence-data/tracking' },
  { url: '/agence-data/analytics', name: 'Analytics', dataPath: 'agence-data/analytics' },
  { url: '/agence-data/cro', name: 'CRO', dataPath: 'agence-data/cro' },
  { url: '/agence/qui-sommes-nous', name: 'Qui sommes-nous', dataPath: 'agence/qui-sommes-nous' },
  { url: '/agence/nos-bureaux', name: 'Nos bureaux', dataPath: 'agence/nos-bureaux' },
  { url: '/contact', name: 'Contact', dataPath: 'contact' },
];

// Pages EN (mêmes chemins de fichiers, juste les URLs différentes)
const EN_PAGES = [
  { url: '/en', name: 'Homepage', dataPath: '' },
  { url: '/en/geo-seo-agency', name: 'GEO-SEO Agency', dataPath: 'agence-geo-seo' },
  { url: '/en/geo-seo-agency/audit', name: 'SEO Audit', dataPath: 'agence-geo-seo/audit' },
  { url: '/en/geo-seo-agency/technical-semantic', name: 'Technical & Semantic', dataPath: 'agence-geo-seo/technique-semantique' },
  { url: '/en/geo-seo-agency/link-building', name: 'Link Building', dataPath: 'agence-geo-seo/netlinking' },
  { url: '/en/geo-seo-agency/content-creation', name: 'Content Creation', dataPath: 'agence-geo-seo/creation-contenu' },
  { url: '/en/geo-seo-agency/local', name: 'Local SEO', dataPath: 'agence-geo-seo/local' },
  { url: '/en/geo-seo-agency/international', name: 'International SEO', dataPath: 'agence-geo-seo/international' },
  { url: '/en/sea-agency', name: 'SEA Agency', dataPath: 'agence-sea' },
  { url: '/en/sea-agency/setup', name: 'SEA Setup', dataPath: 'agence-sea/setup' },
  { url: '/en/sea-agency/management', name: 'SEA Management', dataPath: 'agence-sea/accompagnement' },
  { url: '/en/sea-agency/semantic-analysis', name: 'Semantic Analysis', dataPath: 'agence-sea/analyse-semantique' },
  { url: '/en/sea-agency/local', name: 'Local SEA', dataPath: 'agence-sea/local' },
  { url: '/en/sea-agency/international', name: 'International SEA', dataPath: 'agence-sea/international' },
  { url: '/en/data-agency', name: 'Data Agency', dataPath: 'agence-data' },
  { url: '/en/data-agency/tracking', name: 'Tracking', dataPath: 'agence-data/tracking' },
  { url: '/en/data-agency/analytics', name: 'Analytics', dataPath: 'agence-data/analytics' },
  { url: '/en/data-agency/cro', name: 'CRO', dataPath: 'agence-data/cro' },
  { url: '/en/agency/about-us', name: 'About Us', dataPath: 'agence/qui-sommes-nous' },
  { url: '/en/agency/our-offices', name: 'Our Offices', dataPath: 'agence/nos-bureaux' },
  { url: '/en/contact', name: 'Contact', dataPath: 'contact' },
];

export const metadata: Metadata = {
  title: 'Maillage Interne',
  robots: { index: false, follow: false },
};

export interface IncomingLink {
  fromUrl: string;
  fromName: string;
  anchor: string;
}

export interface PageData {
  url: string;
  name: string;
  incomingLinks: IncomingLink[];
  count: number;
  percent: number;
  inMenu: boolean;
  inFooter: boolean;
}

interface ExtractedLink {
  href: string;
  anchor: string;
}

// URLs présentes dans le menu (extraites de navigation.ts + bouton contact header)
const MENU_URLS = new Set([
  '/',
  '/contact', // Bouton "Nous contacter" dans le header
  '/agence/qui-sommes-nous',
  '/agence/nos-bureaux',
  '/agence-geo-seo',
  '/agence-geo-seo/audit',
  '/agence-geo-seo/technique-semantique',
  '/agence-geo-seo/netlinking',
  '/agence-geo-seo/creation-contenu',
  '/agence-geo-seo/local',
  '/agence-geo-seo/international',
  '/agence-sea',
  '/agence-sea/setup',
  '/agence-sea/accompagnement',
  '/agence-sea/analyse-semantique',
  '/agence-sea/local',
  '/agence-sea/international',
  '/agence-data',
  '/agence-data/tracking',
  '/agence-data/analytics',
  '/agence-data/cro',
]);

// URLs présentes dans le footer (extraites de navigation.ts footerColumnsData)
const FOOTER_URLS = new Set([
  '/agence-geo-seo',
  '/agence-sea',
  '/agence-data',
  '/agence/qui-sommes-nous',
  '/agence/nos-bureaux',
  '/contact',
]);

// Map EN URL -> FR URL (pour vérifier présence menu/footer)
const EN_TO_FR_URL: Record<string, string> = {
  '/en': '/',
  '/en/geo-seo-agency': '/agence-geo-seo',
  '/en/geo-seo-agency/audit': '/agence-geo-seo/audit',
  '/en/geo-seo-agency/technical-semantic': '/agence-geo-seo/technique-semantique',
  '/en/geo-seo-agency/link-building': '/agence-geo-seo/netlinking',
  '/en/geo-seo-agency/content-creation': '/agence-geo-seo/creation-contenu',
  '/en/geo-seo-agency/local': '/agence-geo-seo/local',
  '/en/geo-seo-agency/international': '/agence-geo-seo/international',
  '/en/sea-agency': '/agence-sea',
  '/en/sea-agency/setup': '/agence-sea/setup',
  '/en/sea-agency/management': '/agence-sea/accompagnement',
  '/en/sea-agency/semantic-analysis': '/agence-sea/analyse-semantique',
  '/en/sea-agency/local': '/agence-sea/local',
  '/en/sea-agency/international': '/agence-sea/international',
  '/en/data-agency': '/agence-data',
  '/en/data-agency/tracking': '/agence-data/tracking',
  '/en/data-agency/analytics': '/agence-data/analytics',
  '/en/data-agency/cro': '/agence-data/cro',
  '/en/agency/about-us': '/agence/qui-sommes-nous',
  '/en/agency/our-offices': '/agence/nos-bureaux',
  '/en/contact': '/contact',
};

/**
 * Nettoyer le contenu en retirant breadcrumbs et tocItems
 */
function removeBreadcrumbsAndToc(content: string): string {
  // Retirer les breadcrumb arrays (plusieurs formats possibles)
  let cleaned = content;

  // Format: breadcrumb: [...] as BreadcrumbItem[]
  cleaned = cleaned.replace(/breadcrumb:\s*\[[\s\S]*?\]\s*as\s*BreadcrumbItem\[\],?/g, '');

  // Format: export const breadcrumbItems: BreadcrumbItem[] = [...]
  cleaned = cleaned.replace(/export\s+const\s+breadcrumbItems[\s\S]*?\];/g, '');

  // Format: breadcrumbItems: [...]
  cleaned = cleaned.replace(/breadcrumbItems:\s*\[[\s\S]*?\],?/g, '');

  // Retirer tocItems
  cleaned = cleaned.replace(/tocItems:\s*\[[\s\S]*?\]\s*as\s*TocItem\[\],?/g, '');

  return cleaned;
}

/**
 * Extraire les liens de contenu d'un fichier data.ts
 *
 * NOTE: Les regex gèrent les caractères échappés dans les strings JS
 * Ex: 'Découvrir l\'accompagnement' ou "Découvrir l'expertise"
 * Pattern pour string: '((?:[^'\\]|\\.)*)' ou "((?:[^"\\]|\\.)*)"
 */

// Pattern pour capturer le contenu d'une string JS (gère les échappements)
const SINGLE_QUOTED = "'((?:[^'\\\\]|\\\\.)*)'";
const DOUBLE_QUOTED = '"((?:[^"\\\\]|\\\\.)*)"';
const JS_STRING = `(?:${SINGLE_QUOTED}|${DOUBLE_QUOTED})`;

/**
 * Nettoyer une ancre capturée (retirer les échappements JS)
 */
function cleanAnchor(anchor: string): string {
  return anchor
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

/**
 * Extraire le texte d'un match de string JS (single ou double quoted)
 * Le match a soit group[1] (single) soit group[2] (double) défini
 */
function extractString(match: RegExpExecArray, singleIndex: number, doubleIndex: number): string {
  return match[singleIndex] ?? match[doubleIndex] ?? '';
}

async function extractContentLinks(filePath: string): Promise<ExtractedLink[]> {
  const links: ExtractedLink[] = [];
  const found = new Set<string>();

  function addLink(href: string, anchor: string) {
    const cleanedAnchor = cleanAnchor(anchor);
    if (href.startsWith('/') && !found.has(`${href}|${cleanedAnchor}`)) {
      found.add(`${href}|${cleanedAnchor}`);
      links.push({ href: normalizeHref(href), anchor: cleanedAnchor });
    }
  }

  try {
    const rawContent = await fs.readFile(filePath, 'utf-8');
    const content = removeBreadcrumbsAndToc(rawContent);

    let match;

    // 1. primaryCta: { text: '...', href: '...' }
    const primaryCtaRegex = new RegExp(
      `primaryCta:\\s*\\{\\s*text:\\s*${JS_STRING}\\s*,\\s*href:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = primaryCtaRegex.exec(content)) !== null) {
      const anchor = extractString(match, 1, 2);
      const href = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 2. secondaryCta: { text: '...', href: '...' }
    const secondaryCtaRegex = new RegExp(
      `secondaryCta:\\s*\\{\\s*text:\\s*${JS_STRING}\\s*,\\s*href:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = secondaryCtaRegex.exec(content)) !== null) {
      const anchor = extractString(match, 1, 2);
      const href = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 3. ctaText + ctaHref
    const ctaRegex1 = new RegExp(
      `ctaText:\\s*${JS_STRING}[\\s\\S]{0,150}?ctaHref:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = ctaRegex1.exec(content)) !== null) {
      const anchor = extractString(match, 1, 2);
      const href = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 4. ctaHref + ctaText (ordre inverse)
    const ctaRegex2 = new RegExp(
      `ctaHref:\\s*${JS_STRING}[\\s\\S]{0,150}?ctaText:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = ctaRegex2.exec(content)) !== null) {
      const href = extractString(match, 1, 2);
      const anchor = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 5. buttonText + buttonHref
    const buttonRegex1 = new RegExp(
      `buttonText:\\s*${JS_STRING}[\\s\\S]{0,150}?buttonHref:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = buttonRegex1.exec(content)) !== null) {
      const anchor = extractString(match, 1, 2);
      const href = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 6. buttonHref + buttonText (ordre inverse)
    const buttonRegex2 = new RegExp(
      `buttonHref:\\s*${JS_STRING}[\\s\\S]{0,150}?buttonText:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = buttonRegex2.exec(content)) !== null) {
      const href = extractString(match, 1, 2);
      const anchor = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 7. Items avec href + buttonText (services, expertises, etc.)
    const itemRegex1 = new RegExp(
      `\\{\\s*[^{}]*?href:\\s*${JS_STRING}[^{}]*?buttonText:\\s*${JS_STRING}[^{}]*?\\}`,
      'g'
    );
    while ((match = itemRegex1.exec(content)) !== null) {
      const href = extractString(match, 1, 2);
      const anchor = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 8. Items avec buttonText + href (ordre inversé)
    const itemRegex2 = new RegExp(
      `\\{\\s*[^{}]*?buttonText:\\s*${JS_STRING}[^{}]*?href:\\s*${JS_STRING}[^{}]*?\\}`,
      'g'
    );
    while ((match = itemRegex2.exec(content)) !== null) {
      const anchor = extractString(match, 1, 2);
      const href = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 9. ctaButtonHref + ctaButtonText
    const ctaButtonRegex1 = new RegExp(
      `ctaButtonHref:\\s*${JS_STRING}[\\s\\S]{0,150}?ctaButtonText:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = ctaButtonRegex1.exec(content)) !== null) {
      const href = extractString(match, 1, 2);
      const anchor = extractString(match, 3, 4);
      addLink(href, anchor);
    }

    // 10. ctaButtonText + ctaButtonHref (ordre inverse)
    const ctaButtonRegex2 = new RegExp(
      `ctaButtonText:\\s*${JS_STRING}[\\s\\S]{0,150}?ctaButtonHref:\\s*${JS_STRING}`,
      'g'
    );
    while ((match = ctaButtonRegex2.exec(content)) !== null) {
      const anchor = extractString(match, 1, 2);
      const href = extractString(match, 3, 4);
      addLink(href, anchor);
    }

  } catch {
    // Fichier non trouvé
  }

  return links;
}

function normalizeHref(href: string): string {
  return href.replace(/\/$/, '') || '/';
}

/**
 * Construire les données pour une langue
 */
async function buildLinkData(
  pages: typeof FR_PAGES,
  lang: 'fr' | 'en'
): Promise<PageData[]> {
  const appDir = path.join(process.cwd(), 'src', 'app', '[locale]');

  // Map URL cible -> infos
  const pageMap = new Map(pages.map(p => [p.url, p]));

  // Map URL -> liens entrants
  const incomingLinks: Map<string, IncomingLink[]> = new Map();
  pages.forEach(p => incomingLinks.set(p.url, []));

  // Analyser chaque page source
  for (const sourcePage of pages) {
    const dataPath = sourcePage.dataPath
      ? path.join(appDir, sourcePage.dataPath, `data.${lang}.ts`)
      : path.join(appDir, `data.${lang}.ts`);

    const links = await extractContentLinks(dataPath);

    for (const link of links) {
      // Le href dans le fichier
      let targetUrl = link.href;

      // Vérifier si c'est une URL connue
      if (pageMap.has(targetUrl)) {
        const existing = incomingLinks.get(targetUrl) || [];
        existing.push({
          fromUrl: sourcePage.url,
          fromName: sourcePage.name,
          anchor: link.anchor,
        });
        incomingLinks.set(targetUrl, existing);
      }
    }
  }

  // Calculer total
  let totalLinks = 0;
  incomingLinks.forEach(list => totalLinks += list.length);

  // Construire résultat
  const result: PageData[] = pages.map(page => {
    const list = incomingLinks.get(page.url) || [];
    // Pour les pages EN, on vérifie la présence via l'URL FR équivalente
    const frUrl = lang === 'en' ? EN_TO_FR_URL[page.url] || page.url : page.url;
    return {
      url: page.url,
      name: page.name,
      incomingLinks: list,
      count: list.length,
      percent: totalLinks > 0 ? (list.length / totalLinks) * 100 : 0,
      inMenu: MENU_URLS.has(frUrl),
      inFooter: FOOTER_URLS.has(frUrl),
    };
  });

  // Trier par count décroissant
  result.sort((a, b) => b.count - a.count);

  return result;
}

interface PageProps {
  searchParams: Promise<{ k?: string }>;
}

export default async function MaillagePage({ searchParams }: PageProps) {
  const { k } = await searchParams;

  if (k !== SECRET_KEY) {
    notFound();
  }

  const frData = await buildLinkData(FR_PAGES, 'fr');
  const enData = await buildLinkData(EN_PAGES, 'en');

  return <MaillageClient frData={frData} enData={enData} />;
}
