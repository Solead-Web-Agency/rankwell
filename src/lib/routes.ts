/**
 * ============================================
 * ROUTES - Système de routing centralisé
 * ============================================
 *
 * Ce fichier est la source unique de vérité pour toutes les URLs du site.
 *
 * Avantages :
 * - Quand une URL change, on la modifie ici une seule fois
 * - Les anciennes URLs sont automatiquement redirigées (301)
 * - Tous les liens internes utilisent les bonnes URLs
 *
 * Usage :
 * import { ROUTES } from '@/lib/routes';
 * <Link href={ROUTES.GEO_SEO.AUDIT}>Audit SEO</Link>
 *
 * Quand vous renommez une route :
 * 1. Changez le `path` vers la nouvelle URL
 * 2. Ajoutez l'ancienne URL dans `aliases`
 * 3. Les redirects 301 sont générés automatiquement
 */

// Types
export interface Route {
  /** URL actuelle de la page */
  path: string;
  /** Anciennes URLs qui redirigent vers path (génère des 301) */
  aliases?: string[];
  /** Label pour affichage dans la navigation */
  label?: string;
}

export interface RouteGroup {
  [key: string]: Route | string;
}

// ============================================
// DÉFINITION DES ROUTES
// ============================================

export const ROUTES = {
  // Pages principales
  HOME: '/',
  CONTACT: '/contact',

  // GEO & SEO
  GEO_SEO: {
    INDEX: '/agence-geo-seo',
    AUDIT: {
      path: '/agence-geo-seo/audit',
      aliases: ['/agence-geo-seo/audit-seo'],
      label: 'Audit SEO',
    } as Route,
    TECHNIQUE_SEMANTIQUE: {
      path: '/agence-geo-seo/technique-semantique',
      aliases: ['/agence-geo-seo/seo-semantique-technique'],
      label: 'Technique & sémantique',
    } as Route,
    NETLINKING: '/agence-geo-seo/netlinking',
    CREATION_CONTENU: '/agence-geo-seo/creation-contenu',
    LOCAL: '/agence-geo-seo/local',
    INTERNATIONAL: '/agence-geo-seo/international',
    // Pages passerelles (FR only)
    FRANCE: '/agence-geo-seo/france',
    SECTEURS: '/agence-geo-seo/secteurs',
  },

  // SEA
  SEA: {
    INDEX: '/agence-sea',
    SETUP: '/agence-sea/setup',
    ACCOMPAGNEMENT: '/agence-sea/accompagnement',
    ANALYSE_SEMANTIQUE: '/agence-sea/analyse-semantique',
    LOCAL: '/agence-sea/local',
    INTERNATIONAL: '/agence-sea/international',
  },

  // DATA
  DATA: {
    INDEX: '/agence-data',
    TRACKING: '/agence-data/tracking',
    ANALYTICS: '/agence-data/analytics',
    CRO: '/agence-data/cro',
  },

  // Agence
  AGENCE: {
    QUI_SOMMES_NOUS: '/agence/qui-sommes-nous',
    BUREAUX: '/agence/nos-bureaux',
  },

  // Formations (niveau principal)
  FORMATIONS: '/formations',

  // Ressources
  RESSOURCES: {
    ETUDES_DE_CAS: '/etudes-de-cas',
    GUIDES: '/guides',
    BLOG: '/blog',
    GLOSSAIRE: '/glossaire',
  },

  // Legal
  LEGAL: {
    MENTIONS: '/mentions-legales',
    CONFIDENTIALITE: '/confidentialite',
  },
} as const;

// ============================================
// HELPERS
// ============================================

/**
 * Extrait le path d'une route (qu'elle soit string ou objet Route)
 */
export function getRoutePath(route: Route | string): string {
  if (typeof route === 'string') {
    return route;
  }
  return route.path;
}

/**
 * Collecte toutes les redirections définies dans ROUTES
 * Utilisé dans next.config.ts pour générer les redirects 301
 */
export function collectRedirects(): Array<{
  source: string;
  destination: string;
  permanent: boolean;
}> {
  const redirects: Array<{
    source: string;
    destination: string;
    permanent: boolean;
  }> = [];

  function processRoutes(obj: Record<string, unknown>, parentKey = '') {
    for (const [key, value] of Object.entries(obj)) {
      if (value === null || value === undefined) continue;

      // Si c'est un objet Route avec aliases
      if (
        typeof value === 'object' &&
        'path' in value &&
        'aliases' in value &&
        Array.isArray((value as Route).aliases)
      ) {
        const route = value as Route;
        for (const alias of route.aliases!) {
          redirects.push({
            source: alias,
            destination: route.path,
            permanent: true,
          });
        }
      }
      // Si c'est un objet (groupe de routes), on recurse
      else if (typeof value === 'object' && !('path' in value)) {
        processRoutes(value as Record<string, unknown>, `${parentKey}${key}.`);
      }
      // Les strings simples n'ont pas de redirects
    }
  }

  processRoutes(ROUTES as unknown as Record<string, unknown>);
  return redirects;
}

/**
 * Vérifie si une URL correspond à une ancienne URL qui devrait être redirigée
 * Utile pour le debugging ou les tests
 */
export function isDeprecatedUrl(url: string): { isDeprecated: boolean; newUrl?: string } {
  const redirects = collectRedirects();
  const redirect = redirects.find(r => r.source === url);

  if (redirect) {
    return { isDeprecated: true, newUrl: redirect.destination };
  }
  return { isDeprecated: false };
}

// ============================================
// SHORTCUTS POUR USAGE COURANT
// ============================================

/** Raccourci pour les routes GEO/SEO */
export const GEO_SEO_ROUTES = {
  INDEX: ROUTES.GEO_SEO.INDEX,
  AUDIT: getRoutePath(ROUTES.GEO_SEO.AUDIT),
  TECHNIQUE_SEMANTIQUE: getRoutePath(ROUTES.GEO_SEO.TECHNIQUE_SEMANTIQUE),
  NETLINKING: ROUTES.GEO_SEO.NETLINKING,
  CREATION_CONTENU: ROUTES.GEO_SEO.CREATION_CONTENU,
  LOCAL: ROUTES.GEO_SEO.LOCAL,
  INTERNATIONAL: ROUTES.GEO_SEO.INTERNATIONAL,
  // Pages passerelles (FR only)
  FRANCE: ROUTES.GEO_SEO.FRANCE,
  SECTEURS: ROUTES.GEO_SEO.SECTEURS,
} as const;

/** Raccourci pour les routes SEA */
export const SEA_ROUTES = {
  INDEX: ROUTES.SEA.INDEX,
  SETUP: ROUTES.SEA.SETUP,
  ACCOMPAGNEMENT: ROUTES.SEA.ACCOMPAGNEMENT,
  ANALYSE_SEMANTIQUE: ROUTES.SEA.ANALYSE_SEMANTIQUE,
  LOCAL: ROUTES.SEA.LOCAL,
  INTERNATIONAL: ROUTES.SEA.INTERNATIONAL,
} as const;

/** Raccourci pour les routes DATA */
export const DATA_ROUTES = {
  INDEX: ROUTES.DATA.INDEX,
  TRACKING: ROUTES.DATA.TRACKING,
  ANALYTICS: ROUTES.DATA.ANALYTICS,
  CRO: ROUTES.DATA.CRO,
} as const;
