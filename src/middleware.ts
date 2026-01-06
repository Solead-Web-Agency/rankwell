/**
 * MIDDLEWARE - Gestion des locales et réécriture d'URL
 *
 * Comportement :
 * - URLs françaises (/) : Servies directement, locale = 'fr'
 * - URLs anglaises (/en/*) : Réécrites vers les chemins français internes
 * - URLs anglaises sans traduction : Redirigées vers la version française
 *
 * Exemple :
 * - /agence-sea/analyse-semantique → locale 'fr', chemin direct
 * - /en/sea-agency/semantic-analysis → locale 'en', réécrit vers /en/agence-sea/analyse-semantique
 * - /en/agence-geo-seo/france/lyon → redirigé vers /agence-geo-seo/france/lyon (pas de traduction)
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Mapping des segments anglais → français
const enToFrSegments: Record<string, string> = {
  // Services principaux
  'geo-seo-agency': 'agence-geo-seo',
  'sea-agency': 'agence-sea',
  'data-agency': 'agence-data',
  'agency': 'agence',

  // Sous-pages GEO-SEO
  'technical-semantic': 'technique-semantique',
  'link-building': 'netlinking',
  'content-creation': 'creation-contenu',

  // Sous-pages SEA
  'management': 'accompagnement',
  'semantic-analysis': 'analyse-semantique',

  // Pages Agence
  'about-us': 'qui-sommes-nous',
  'our-offices': 'nos-bureaux',

  // Autres
  'legal-notice': 'mentions-legales',
  'privacy-policy': 'politique-confidentialite',
  'training': 'formations',
};

// ============================================
// PAGES SANS TRADUCTION ANGLAISE
// ============================================

/**
 * Patterns de chemins français qui N'ONT PAS de traduction anglaise
 * Note: Dupliqué depuis config.ts car middleware = edge runtime
 */
const frenchOnlyPatterns: string[] = [
  '/agence-geo-seo/france',
  '/agence-geo-seo/france/*',
  '/agence-geo-seo/france/**',
  '/agence-geo-seo/emirats',
  '/agence-geo-seo/emirats/*',
  '/agence-geo-seo/emirats/**',
  '/agence-sea/france',
  '/agence-sea/france/*',
  '/agence-sea/france/**',
  '/maillage',  // Page secrète - FR uniquement
];

/**
 * Pages qui ONT une traduction anglaise malgré les patterns frenchOnly
 * Exceptions pour les bureaux physiques
 */
const englishAvailableExceptions: string[] = [
  '/agence-geo-seo/france/paris',
  '/agence-geo-seo/emirats/dubai',
];

/**
 * Vérifie si un chemin français a une traduction anglaise
 */
function hasEnglishTranslation(frenchPath: string): boolean {
  // 1. Vérifier les exceptions EN PREMIER
  if (englishAvailableExceptions.includes(frenchPath)) {
    return true;
  }

  // 2. Vérifier les patterns
  for (const pattern of frenchOnlyPatterns) {
    if (matchPattern(frenchPath, pattern)) {
      return false;
    }
  }
  return true;
}

/**
 * Match un chemin contre un pattern glob-like
 */
function matchPattern(path: string, pattern: string): boolean {
  const regexPattern = pattern
    .replace(/\*\*/g, '<<<DOUBLESTAR>>>')
    .replace(/\*/g, '[^/]+')
    .replace(/<<<DOUBLESTAR>>>/g, '.*');
  const regex = new RegExp(`^${regexPattern}$`);
  return regex.test(path);
}

/**
 * Traduit un chemin anglais vers français
 */
function translateEnglishPathToFrench(englishPath: string): string {
  if (!englishPath || englishPath === '/') {
    return '/';
  }

  const segments = englishPath.split('/').filter(Boolean);
  const translatedSegments = segments.map(
    (segment) => enToFrSegments[segment] || segment
  );

  return '/' + translatedSegments.join('/');
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip les fichiers statiques et les routes internes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname.includes('.') // Fichiers avec extension
  ) {
    return NextResponse.next();
  }

  // ============================================
  // SKIP si déjà une locale (évite boucle infinie après rewrite)
  // ============================================
  if (pathname.startsWith('/fr') || pathname === '/fr') {
    return NextResponse.next();
  }

  // ============================================
  // URLs ANGLAISES (/en/*)
  // ============================================
  if (pathname.startsWith('/en')) {
    // Extraire le chemin anglais (sans /en)
    let englishPath = pathname.slice(3) || '/';

    // Normaliser le chemin
    if (!englishPath.startsWith('/')) {
      englishPath = '/' + englishPath;
    }

    // Traduire vers le chemin français
    const frenchPath = translateEnglishPathToFrench(englishPath);

    // Vérifier si cette page a une traduction anglaise
    if (!hasEnglishTranslation(frenchPath)) {
      // Pas de traduction : rediriger vers la version française (301)
      const url = request.nextUrl.clone();
      url.pathname = frenchPath;
      return NextResponse.redirect(url, { status: 301 });
    }

    // Construire le nouveau chemin interne : /en + chemin français
    const internalPath = '/en' + (frenchPath === '/' ? '' : frenchPath);

    // Si le chemin a changé (traduction effectuée), faire un rewrite
    if (internalPath !== pathname) {
      const url = request.nextUrl.clone();
      url.pathname = internalPath;
      return NextResponse.rewrite(url);
    }

    // Sinon, laisser passer tel quel
    return NextResponse.next();
  }

  // ============================================
  // URLs FRANÇAISES (/) - Rewrite vers /fr/*
  // ============================================
  // Toutes les URLs sans préfixe de locale sont françaises
  // On les réécrit vers /fr/* pour matcher le segment [locale]
  const url = request.nextUrl.clone();
  url.pathname = '/fr' + (pathname === '/' ? '' : pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  // Match la racine et toutes les autres routes (sauf fichiers statiques)
  matcher: [
    // Match root
    '/',
    // Match all paths except static files and sitemap
    '/((?!_next/static|_next/image|favicon\\.ico|sitemap|robots\\.txt|images|fonts).*)',
  ],
};
