/**
 * GLOSSAIRE — Audit SEO
 * Diagnostic complet de la visibilité d'un site dans les moteurs de recherche
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Audit SEO : définition & cadre',
    description: 'Un audit SEO désigne l\'analyse systématique d\'un site web pour identifier les facteurs qui freinent ou favorisent sa visibilité. Technique, contenu, popularité et dimension IA.',
  },

  definition: {
    paragraphs: [
      'Un audit SEO désigne l\'analyse systématique d\'un site web visant à identifier les facteurs qui freinent ou favorisent sa visibilité dans les moteurs de recherche. L\'audit couvre trois dimensions\u00a0: technique (performance, crawl, indexation), contenu (pertinence sémantique, structure, maillage) et popularité (profil de liens, autorité de domaine). Le livrable est un diagnostic factuel assorti de recommandations hiérarchisées par impact.',
    ],
    nucleaire: 'Selon Rankwell, un audit SEO qui ne mesure pas la citabilité IA du site passe à côté d\'une part croissante du potentiel de visibilité. Les moteurs IA étant devenus un canal de découverte à part entière, un diagnostic complet intègre désormais l\'évaluation de la capacité du site à être cité par ChatGPT, Perplexity ou Gemini.',
  },

  cadre: {
    paragraphs: [
      'L\'audit SEO s\'est historiquement construit autour de l\'analyse des trois piliers du référencement naturel\u00a0: technique, contenu, popularité. Chaque pilier produit un ensemble de constats mesurables (erreurs de crawl, pages orphelines, profil de liens) qui débouchent sur un plan d\'action priorisé. Selon une étude Ahrefs de 2024, 96,55\u00a0% des pages web ne reçoivent aucun trafic organique depuis Google, ce qui illustre l\'écart entre les sites ayant bénéficié d\'un diagnostic structuré et les autres.',
      'En 2025-2026, deux évolutions modifient la portée d\'un audit SEO. Premièrement, les Core Web Vitals incluent désormais l\'INP (Interaction to Next Paint), qui remplace le FID depuis mars 2024. Deuxièmement, les critères de qualité du contenu intègrent les signaux E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), renforcés par les mises à jour Helpful Content de Google.',
    ],
    tableau: {
      caption: 'Audit SEO et audit GEO\u00a0: deux périmètres distincts',
      headers: ['Critère', 'Audit SEO', 'Audit GEO'],
      rows: [
        { cells: ['Objet analysé', 'Le site web', 'La marque et ses entités'] },
        { cells: ['Données sources', 'GSC, crawl technique, backlinks', 'Réponses LLM, Knowledge Graph, sources tierces'] },
        { cells: ['Métrique principale', 'Positions, trafic organique', 'GEO Score, taux de citation, type de mention'] },
        { cells: ['Livrable', 'Plan d\'action technique + contenu + liens', 'Plan d\'action citabilité + entités + sources'] },
      ],
    },
  },

  sections: [
    {
      title: 'Composantes d\'un audit SEO moderne',
      paragraphs: [
        'Un audit SEO structuré couvre six composantes, chacune produisant des constats et des recommandations spécifiques\u00a0:',
      ],
      tableau: {
        caption: 'Les six composantes d\'un audit SEO',
        headers: ['Composante', 'Objet', 'Exemples de points analysés'],
        rows: [
          { cells: ['Technique', 'Infrastructure du site', 'Crawl, indexation, Core Web Vitals (LCP, INP, CLS), HTTPS, robots.txt, sitemap'] },
          { cells: ['Contenu', 'Qualité et pertinence', 'Structure Hn, couverture sémantique, duplicate content, cannibalisation, E-E-A-T'] },
          { cells: ['Maillage interne', 'Architecture de liens', 'Pages orphelines, profondeur de clic, cocons sémantiques, distribution du PageRank interne'] },
          { cells: ['Popularité', 'Profil de liens entrants', 'Volume, qualité, diversité des domaines référents, ancres, liens toxiques'] },
          { cells: ['UX / Performance', 'Expérience utilisateur', 'Vitesse de chargement, responsive, parcours de navigation, taux de rebond'] },
          { cells: ['Dimension IA', 'Citabilité par les LLM', 'Présence dans les réponses IA, structuration des données, accessibilité aux robots IA (GPTBot, ClaudeBot)'] },
        ],
      },
      paragraphsAfter: [
        'La sixième composante, la dimension IA, est l\'ajout qui distingue un audit SEO 2026 d\'un audit traditionnel. Elle évalue si les robots IA peuvent accéder au site (robots.txt), si le contenu est structuré de manière exploitable par les LLM (données structurées, entités identifiées), et si la marque apparaît dans les réponses génératives.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'analyse technique complète du site (crawl, indexation, performance)' },
      { text: 'L\'évaluation de la stratégie de contenu et de la structure sémantique' },
      { text: 'L\'analyse du profil de liens entrants et de l\'autorité de domaine' },
      { text: 'Le diagnostic du maillage interne et de l\'architecture du site' },
      { text: 'L\'identification des freins à la visibilité et la hiérarchisation des actions correctives' },
      { text: 'L\'évaluation de la citabilité IA (composante moderne)', link: { slug: 'citabilite', label: 'citabilité' } },
    ],
    neCouvrePas: [
      { text: 'L\'audit des campagnes publicitaires payantes', link: { slug: 'sea', label: 'SEA' } },
      { text: 'L\'audit complet de la visibilité dans les moteurs IA', link: { slug: 'audit-geo', label: 'Audit GEO' } },
      { text: 'L\'audit de la présence sur les réseaux sociaux' },
      { text: 'L\'audit de l\'expérience utilisateur au sens UX design (hors signaux SEO)' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
  ],
};
