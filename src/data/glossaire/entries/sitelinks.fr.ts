/**
 * GLOSSAIRE — Sitelinks
 * Liens de navigation supplémentaires dans les SERP Google
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Sitelinks : définition & cadre',
    description: 'Les sitelinks sont les liens de navigation affichés sous un résultat Google. Facteurs d\'apparition, impact CTR, parallèle avec la navigabilité IA et AI Overviews.',
  },

  definition: {
    paragraphs: [
      'Les sitelinks désignent les liens de navigation supplémentaires que Google affiche sous le résultat principal d\'un site dans les pages de résultats de recherche (SERP). Ces liens pointent vers des pages internes du site et permettent à l\'utilisateur d\'accéder directement à une section pertinente sans passer par la page d\'accueil. Les sitelinks sont générés automatiquement par les algorithmes de Google. Ils apparaissent sur environ 30\u00a0% des requêtes de marque, selon les données agrégées des études de SERP features.',
    ],
    nucleaire: 'Selon Rankwell, les sitelinks ne sont pas un paramètre configurable\u00a0: l\'optimisation ne porte pas sur les sitelinks eux-mêmes, mais sur les signaux architecturaux qui les déclenchent. Les signaux structurels que Google utilise pour générer des sitelinks (hiérarchie H1-H2-H3 cohérente, fil d\'Ariane explicite, rôles de pages non ambigus, maillage interne depuis la navigation principale) sont les mêmes signaux qui permettent aux robots d\'IA (GPTBot, Googlebot-Extended, ClaudeBot) de parcourir et d\'extraire efficacement le contenu d\'un site. Un site dont l\'architecture produit des sitelinks est un site dont la structure est lisible par les crawlers IA.',
  },

  cadre: {
    paragraphs: [
      'Google génère les sitelinks lorsqu\'il estime qu\'ils seront utiles à l\'utilisateur pour une requête donnée. Les sitelinks apparaissent principalement sur les requêtes de marque (recherche du nom d\'un site ou d\'une entreprise) et sur les requêtes de navigation (l\'utilisateur cherche un site spécifique). Google a supprimé la fonctionnalité « Rétrograder les sitelinks » de la Google Search Console en 2016, confirmant que leur génération est entièrement algorithmique et non paramétrable par le webmaster.',
    ],
  },

  sections: [
    {
      title: 'Facteurs d\'apparition des sitelinks',
      paragraphs: [
        'Google ne permet pas de forcer l\'affichage des sitelinks. Cependant, plusieurs facteurs structurels favorisent leur apparition.',
      ],
      tableau: {
        caption: 'Facteurs d\'apparition des sitelinks',
        headers: ['Facteur', 'Description'],
        rows: [
          { cells: ['Architecture claire', 'Structure hiérarchique logique (accueil, catégories, pages)'] },
          { cells: ['Maillage interne cohérent', 'Les pages principales sont liées depuis la navigation et le contenu'] },
          { cells: ['Balises title descriptives', 'Chaque page a un title unique et explicite'] },
          { cells: ['Sitemap XML', 'Un sitemap à jour facilite la compréhension de la structure'] },
          { cells: ['Données structurées', 'SiteNavigationElement et BreadcrumbList aident Google à identifier la hiérarchie'] },
          { cells: ['Trafic et engagement', 'Les pages fréquemment visitées ont plus de chances d\'apparaître comme sitelinks'] },
        ],
      },
    },
    {
      title: 'Facteurs favorisant les sitelinks vs facteurs favorisant la navigabilité IA',
      tableau: {
        caption: 'Signaux structurels pour les sitelinks Google et la navigabilité IA',
        headers: ['Signal structurel', 'Rôle pour les sitelinks Google', 'Rôle pour la navigabilité IA'],
        rows: [
          { cells: ['Hiérarchie H1-H2-H3 logique', 'Permet à Google d\'identifier les sections principales du site', 'Permet aux crawlers IA de segmenter le contenu par thématique et d\'en extraire des réponses ciblées'] },
          { cells: ['Fil d\'Ariane (BreadcrumbList)', 'Renforce la compréhension de la profondeur de chaque page', 'Fournit un chemin de navigation explicite que les robots IA peuvent suivre pour contextualiser une page'] },
          { cells: ['Rôles de pages non ambigus (un sujet par page)', 'Google sélectionne les pages dont le rôle est clair comme sitelinks', 'Les LLM citent plus facilement une page dont le périmètre thématique est délimité'] },
          { cells: ['Navigation principale avec liens textuels', 'Source primaire pour l\'identification des sitelinks', 'Seul mécanisme de découverte pour les crawlers qui n\'exécutent pas JavaScript'] },
          { cells: ['Données structurées SiteNavigationElement', 'Signal explicite de structure pour Google', 'Non exploité directement par GPTBot ou ClaudeBot, mais interprété par Googlebot-Extended'] },
          { cells: ['Sitemap XML', 'Facilite la découverte de pages profondes pour les sitelinks', 'Utilisé par les crawlers IA qui respectent le protocole sitemaps (Googlebot-Extended, AppleBot)'] },
          { cells: ['Trafic et signaux d\'engagement', 'Facteur de sélection pour les sitelinks', 'Non pertinent pour les crawlers IA, qui ne mesurent pas l\'engagement utilisateur'] },
        ],
      },
    },
    {
      title: 'Impact sur le CTR',
      paragraphs: [
        'Les sitelinks augmentent la surface occupée par un résultat dans les SERP. Un résultat avec sitelinks peut occuper 4 à 8 lignes au lieu de 2 à 3 pour un résultat standard. Cette visibilité accrue améliore le taux de clic (CTR) sur les requêtes de marque. Les sitelinks offrent également un accès direct aux pages les plus demandées, réduisant le nombre de clics nécessaires pour atteindre l\'information.',
      ],
    },
    {
      title: 'Sitelinks et AI Overviews',
      paragraphs: [
        'Dans les AI Overviews de Google, les sources citées peuvent être accompagnées de liens vers des sections spécifiques du site source. Ce mécanisme reprend la logique des sitelinks\u00a0: Google identifie les pages internes les plus pertinentes pour la requête et les propose comme accès direct. Google a documenté en 2024 la possibilité d\'utiliser l\'opérateur « site: » dans les AI Overviews, ce qui confirme que les pages internes d\'un domaine peuvent y être référencées individuellement. Un site dont l\'architecture est suffisamment claire pour générer des sitelinks classiques a aussi plus de chances de voir ses pages internes citées individuellement dans les AI Overviews.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les liens de navigation supplémentaires sous un résultat Google' },
      { text: 'Les facteurs structurels qui favorisent leur apparition' },
      { text: 'Le parallèle entre les signaux d\'architecture pour les sitelinks et pour la navigabilité IA' },
      { text: 'L\'impact sur la visibilité et le CTR dans les SERP' },
      { text: 'Le lien avec les AI Overviews et la citation de pages internes' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation des balises meta des pages', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Le Knowledge Panel', link: { slug: 'knowledge-panel', label: 'Knowledge Panel' } },
      { text: 'La construction du maillage interne', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'Les extensions de liens publicitaires (sitelink extensions dans Google Ads)' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Knowledge Panel', slug: 'knowledge-panel' },
    { label: 'Algorithmes de classement', slug: 'algorithmes-de-classement' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Indexation', slug: 'indexation' },
  ],
};
