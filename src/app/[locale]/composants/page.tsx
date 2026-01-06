/**
 * PAGE COMPOSANTS - Liste des composants utilisés par page
 * URL: /composants?k=ouvretoi
 *
 * Analyse les fichiers page.tsx pour extraire les composants importés.
 * Chaque composant est cliquable et renvoie vers la page où il est utilisé.
 */

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import ComposantsClient from './ComposantsClient';

const SECRET_KEY = 'ouvretoi';

// Pages à analyser
const PAGES = [
  { url: '/', name: 'Homepage', pagePath: '' },
  { url: '/agence-geo-seo', name: 'Agence GEO-SEO', pagePath: 'agence-geo-seo' },
  { url: '/agence-geo-seo/audit', name: 'Audit SEO', pagePath: 'agence-geo-seo/audit' },
  { url: '/agence-geo-seo/technique-semantique', name: 'Technique & Sémantique', pagePath: 'agence-geo-seo/technique-semantique' },
  { url: '/agence-geo-seo/netlinking', name: 'Netlinking', pagePath: 'agence-geo-seo/netlinking' },
  { url: '/agence-geo-seo/creation-contenu', name: 'Création Contenu', pagePath: 'agence-geo-seo/creation-contenu' },
  { url: '/agence-geo-seo/local', name: 'SEO Local', pagePath: 'agence-geo-seo/local' },
  { url: '/agence-geo-seo/international', name: 'SEO International', pagePath: 'agence-geo-seo/international' },
  { url: '/agence-sea', name: 'Agence SEA', pagePath: 'agence-sea' },
  { url: '/agence-sea/setup', name: 'Setup SEA', pagePath: 'agence-sea/setup' },
  { url: '/agence-sea/accompagnement', name: 'Accompagnement SEA', pagePath: 'agence-sea/accompagnement' },
  { url: '/agence-sea/analyse-semantique', name: 'Analyse Sémantique SEA', pagePath: 'agence-sea/analyse-semantique' },
  { url: '/agence-sea/local', name: 'SEA Local', pagePath: 'agence-sea/local' },
  { url: '/agence-sea/international', name: 'SEA International', pagePath: 'agence-sea/international' },
  { url: '/agence-data', name: 'Agence Data', pagePath: 'agence-data' },
  { url: '/agence-data/tracking', name: 'Tracking', pagePath: 'agence-data/tracking' },
  { url: '/agence-data/analytics', name: 'Analytics', pagePath: 'agence-data/analytics' },
  { url: '/agence-data/cro', name: 'CRO', pagePath: 'agence-data/cro' },
  { url: '/agence/qui-sommes-nous', name: 'Qui sommes-nous', pagePath: 'agence/qui-sommes-nous' },
  { url: '/agence/nos-bureaux', name: 'Nos bureaux', pagePath: 'agence/nos-bureaux' },
  { url: '/contact', name: 'Contact', pagePath: 'contact' },
];

export const metadata: Metadata = {
  title: 'Composants par Page',
  robots: { index: false, follow: false },
};

export interface ComponentInfo {
  name: string;
  sectionId: string | null; // ID de la section si trouvé
}

export interface PageComponentData {
  url: string;
  name: string;
  components: ComponentInfo[];
}

/**
 * Extraire les composants dans l'ordre d'apparition dans le JSX
 */
async function extractComponents(pageTsxPath: string, dataPath: string): Promise<ComponentInfo[]> {
  const components: ComponentInfo[] = [];

  try {
    const content = await fs.readFile(pageTsxPath, 'utf-8');

    // Lire le fichier data.fr.ts pour extraire les sectionIds
    const sectionIds = await extractSectionIds(dataPath);

    // Trouver les associations composant -> sectionId dans le JSX
    const componentSectionMap = findComponentSectionIds(content, sectionIds);

    // 1. D'abord, collecter tous les noms de composants importés depuis @/components/
    const importedComponents = new Set<string>();
    const importRegex = /import\s+(?:(\w+)|{\s*([^}]+)\s*})\s+from\s+['"]@\/components\/[^'"]+['"]/g;

    let match;
    while ((match = importRegex.exec(content)) !== null) {
      const defaultImport = match[1];
      const namedImports = match[2];

      if (defaultImport) {
        importedComponents.add(defaultImport);
      }

      if (namedImports) {
        const names = namedImports.split(',').map(n => n.trim().split(/\s+as\s+/)[0].trim());
        for (const name of names) {
          if (name) {
            importedComponents.add(name);
          }
        }
      }
    }

    // 2. Trouver la partie "return" du composant et extraire l'ordre des composants
    // On cherche toutes les balises JSX qui correspondent à un composant importé
    const jsxComponentRegex = /<([A-Z][a-zA-Z0-9]*)/g;
    const orderedComponents: string[] = [];
    const seen = new Set<string>();

    while ((match = jsxComponentRegex.exec(content)) !== null) {
      const componentName = match[1];
      // Ne garder que les composants importés depuis @/components/ et non déjà vus
      if (importedComponents.has(componentName) && !seen.has(componentName)) {
        seen.add(componentName);
        orderedComponents.push(componentName);
      }
    }

    // 3. Construire le résultat dans l'ordre d'apparition
    for (const name of orderedComponents) {
      components.push({
        name,
        sectionId: componentSectionMap.get(name) || null,
      });
    }

  } catch {
    // Fichier non trouvé
  }

  return components;
}

/**
 * Extraire les sectionIds du fichier data.fr.ts
 */
async function extractSectionIds(dataPath: string): Promise<Map<string, string>> {
  const sectionIds = new Map<string, string>();

  try {
    const content = await fs.readFile(dataPath, 'utf-8');

    // Pattern plus robuste : chercher sectionId dans tout le fichier
    // et l'associer au nom de la variable exportée qui le contient
    const lines = content.split('\n');
    let currentExport = '';

    for (const line of lines) {
      // Détecter le début d'un export const xxxData
      const exportMatch = line.match(/export\s+const\s+(\w+)\s*=/);
      if (exportMatch) {
        currentExport = exportMatch[1];
      }

      // Chercher sectionId dans la ligne courante
      const sectionMatch = line.match(/sectionId:\s*['"]([^'"]+)['"]/);
      if (sectionMatch && currentExport) {
        sectionIds.set(currentExport, sectionMatch[1]);
      }
    }
  } catch {
    // Fichier non trouvé
  }

  return sectionIds;
}

/**
 * Trouver les associations composant -> sectionId dans le JSX
 * Cherche les patterns comme: <ComponentName ... sectionId={xxxData.sectionId}
 */
function findComponentSectionIds(
  pageContent: string,
  sectionIds: Map<string, string>
): Map<string, string> {
  const result = new Map<string, string>();

  // Pattern: <ComponentName (sur plusieurs lignes) sectionId={xxxData.sectionId}
  // On cherche chaque utilisation de sectionId={...}
  const sectionIdUsageRegex = /<(\w+)[\s\S]*?sectionId=\{(\w+)\.sectionId\}/g;

  let match;
  while ((match = sectionIdUsageRegex.exec(pageContent)) !== null) {
    const componentName = match[1];
    const dataVarName = match[2]; // ex: "whyGeoData"
    const sectionId = sectionIds.get(dataVarName);

    if (sectionId && !result.has(componentName)) {
      result.set(componentName, sectionId);
    }
  }

  // Aussi chercher sectionId="xxx" (valeur directe)
  const directSectionIdRegex = /<(\w+)[\s\S]*?sectionId=["']([^"']+)["']/g;
  while ((match = directSectionIdRegex.exec(pageContent)) !== null) {
    const componentName = match[1];
    const sectionId = match[2];

    if (!result.has(componentName)) {
      result.set(componentName, sectionId);
    }
  }

  return result;
}

/**
 * Construire les données de composants pour toutes les pages
 */
async function buildComponentsData(): Promise<PageComponentData[]> {
  const appDir = path.join(process.cwd(), 'src', 'app', '[locale]');
  const result: PageComponentData[] = [];

  for (const page of PAGES) {
    const pageTsxPath = page.pagePath
      ? path.join(appDir, page.pagePath, 'page.tsx')
      : path.join(appDir, 'page.tsx');

    const dataPath = page.pagePath
      ? path.join(appDir, page.pagePath, 'data.fr.ts')
      : path.join(appDir, 'data.fr.ts');

    const components = await extractComponents(pageTsxPath, dataPath);

    result.push({
      url: page.url,
      name: page.name,
      components,
    });
  }

  return result;
}

interface PageProps {
  searchParams: Promise<{ k?: string }>;
}

export default async function ComposantsPage({ searchParams }: PageProps) {
  const { k } = await searchParams;

  if (k !== SECRET_KEY) {
    notFound();
  }

  const data = await buildComponentsData();

  return <ComposantsClient data={data} />;
}
