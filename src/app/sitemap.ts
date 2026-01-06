/**
 * SITEMAP DYNAMIQUE
 *
 * - Découvre automatiquement les pages depuis src/app/[locale]/
 * - Gère les pages avec/sans traduction anglaise
 * - Exclut les pages noindex
 * - Génère les alternates hreflang uniquement pour les pages traduites
 */

import { MetadataRoute } from 'next';
import { readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';
import {
  translatePathToEnglish,
  baseUrl,
  hasEnglishTranslation,
  noIndexPages,
} from '@/lib/i18n';

// ============================================
// DÉCOUVERTE DYNAMIQUE DES PAGES
// ============================================

/**
 * Scanne récursivement le dossier [locale] pour trouver tous les page.tsx
 * Retourne les chemins français (sans le préfixe [locale])
 */
function discoverPages(dir: string, basePath: string = ''): string[] {
  const pages: string[] = [];

  try {
    const items = readdirSync(dir);

    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // Ignorer les dossiers spéciaux
        if (item.startsWith('_') || item.startsWith('.') || item === 'api') {
          continue;
        }

        // Récursion dans les sous-dossiers
        const subPages = discoverPages(fullPath, `${basePath}/${item}`);
        pages.push(...subPages);
      } else if (item === 'page.tsx') {
        // Trouvé une page
        const pagePath = basePath || '/';
        pages.push(pagePath);
      }
    }
  } catch (error) {
    console.error('Error discovering pages:', error);
  }

  return pages;
}

/**
 * Récupère toutes les pages indexables
 */
function getIndexablePages(): string[] {
  const appDir = join(process.cwd(), 'src', 'app', '[locale]');

  if (!existsSync(appDir)) {
    console.warn('App directory not found:', appDir);
    return [];
  }

  const allPages = discoverPages(appDir);

  // Filtrer les pages noindex
  return allPages.filter(page => !noIndexPages.includes(page));
}

// ============================================
// GÉNÉRATION DU SITEMAP
// ============================================

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getIndexablePages();
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const frenchPath of pages) {
    // Générer l'URL française
    const frUrl = frenchPath === '/' ? baseUrl : `${baseUrl}${frenchPath}`;

    // Vérifier si la page a une traduction anglaise
    const hasTranslation = hasEnglishTranslation(frenchPath);

    if (hasTranslation) {
      // Page avec traduction : générer FR + EN avec alternates
      const enPath = translatePathToEnglish(frenchPath);
      const enUrl = frenchPath === '/' ? `${baseUrl}/en` : `${baseUrl}/en${enPath}`;

      // Entrée française
      entries.push({
        url: frUrl,
        lastModified: now,
        alternates: {
          languages: {
            'fr': frUrl,
            'en': enUrl,
            'x-default': enUrl,
          },
        },
      });

      // Entrée anglaise
      entries.push({
        url: enUrl,
        lastModified: now,
        alternates: {
          languages: {
            'fr': frUrl,
            'en': enUrl,
            'x-default': enUrl,
          },
        },
      });
    } else {
      // Page FR uniquement : pas d'alternates, juste l'URL française
      entries.push({
        url: frUrl,
        lastModified: now,
      });
    }
  }

  return entries;
}
