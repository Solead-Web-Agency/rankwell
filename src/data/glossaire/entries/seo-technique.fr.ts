/**
 * GLOSSAIRE — SEO technique
 * Infrastructure et accessibilité pour les moteurs de recherche et les robots IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO technique : définition & cadre',
    description: 'Le SEO technique désigne les optimisations portant sur l\'infrastructure d\'un site pour faciliter son crawl, son indexation et son classement. Cadre, périmètre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Le SEO technique désigne l\'ensemble des optimisations portant sur l\'infrastructure d\'un site web pour faciliter son exploration (crawl), son indexation et son classement par les moteurs de recherche. Le SEO technique traite de la performance serveur, de l\'architecture du site, du balisage HTML, de la gestion des URL et de la conformité aux signaux d\'expérience utilisateur (Core Web Vitals).',
    ],
    nucleaire: 'Selon Rankwell, le SEO technique en 2026 porte un double enjeu\u00a0: garantir l\'accessibilité du site aux robots d\'indexation classiques (Googlebot, Bingbot) et aux robots des moteurs IA (GPTBot, ClaudeBot, PerplexityBot), car ces deux familles de crawlers ont des comportements distincts et leurs directives robots.txt doivent être gérées séparément.',
  },

  cadre: {
    paragraphs: [
      'Le SEO technique a longtemps été réduit à la gestion du crawl et de l\'indexation. Depuis 2021, l\'introduction des Core Web Vitals comme signal de classement a élargi le périmètre au temps de chargement (LCP), à la réactivité (INP depuis mars 2024) et à la stabilité visuelle (CLS).',
      'En 2025-2026, trois évolutions structurent le SEO technique\u00a0: le remplacement du FID par l\'INP, qui mesure la latence de toute interaction utilisateur et pas seulement la première\u00a0; le renforcement des signaux HTTPS et de la sécurité\u00a0; et l\'apparition de nouveaux user-agents IA qui crawlent les sites pour alimenter les modèles de langage. D\'après le rapport Chrome UX Report (Google, 2024), seulement 43\u00a0% des sites web atteignent le seuil «\u00a0bon\u00a0» pour les trois Core Web Vitals simultanément sur mobile.',
    ],
  },

  sections: [
    {
      title: 'Crawl Google et crawl des robots IA\u00a0: deux mécaniques distinctes',
      paragraphs: [
        'Googlebot explore un site pour indexer ses pages dans les SERP. GPTBot, ClaudeBot et PerplexityBot explorent un site pour alimenter leurs bases de connaissances ou vérifier des informations en temps réel. Les deux mécaniques utilisent le fichier robots.txt, mais les directives doivent être pensées séparément.',
      ],
      tableau: {
        caption: 'Crawl Google et crawl des robots IA comparés',
        headers: ['Critère', 'Crawl Google', 'Crawl robots IA'],
        rows: [
          { cells: ['Objectif', 'Indexer les pages dans les SERP', 'Alimenter le modèle ou vérifier des faits'] },
          { cells: ['User-agent', 'Googlebot, Googlebot-Mobile', 'GPTBot, ClaudeBot, PerplexityBot, Applebot'] },
          { cells: ['Fréquence', 'Régulière, basée sur le crawl budget', 'Variable, souvent par batch'] },
          { cells: ['Impact d\'un blocage', 'Page non indexée dans Google', 'Contenu absent des réponses IA'] },
          { cells: ['Signal robots.txt', 'User-agent: Googlebot', 'User-agent: GPTBot (par exemple)'] },
        ],
      },
      paragraphsAfter: [
        'Bloquer GPTBot dans robots.txt empêche OpenAI d\'utiliser le contenu du site. Cette décision a un coût direct sur la visibilité dans ChatGPT. À l\'inverse, autoriser le crawl IA sans structurer le contenu (données structurées, entités explicites) limite l\'exploitabilité des pages par les LLM.',
      ],
    },
    {
      title: 'Signaux techniques critiques en 2025-2026',
      tableau: {
        caption: 'Signaux techniques et seuils recommandés',
        headers: ['Signal', 'Métrique', 'Seuil recommandé'],
        rows: [
          { cells: ['Largest Contentful Paint (LCP)', 'Temps de chargement du plus grand élément visible', '≤ 2,5 secondes'] },
          { cells: ['Interaction to Next Paint (INP)', 'Latence de la pire interaction utilisateur', '≤ 200 millisecondes'] },
          { cells: ['Cumulative Layout Shift (CLS)', 'Stabilité visuelle pendant le chargement', '≤ 0,1'] },
          { cells: ['HTTPS', 'Certificat SSL/TLS valide', 'Obligatoire'] },
          { cells: ['Mobile-friendliness', 'Compatibilité mobile (responsive)', 'Indexation mobile-first par défaut'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'optimisation du crawl et de l\'indexation (robots.txt, sitemap XML, gestion des redirections)', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'La performance du site (Core Web Vitals, temps de réponse serveur, cache)', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'L\'architecture des URL et la structure du site' },
      { text: 'Le balisage HTML (balises canoniques, hreflang, données structurées)', link: { slug: 'donnees-structurees', label: 'données structurées' } },
      { text: 'La gestion des robots IA (GPTBot, ClaudeBot) dans robots.txt' },
      { text: 'La sécurité (HTTPS, en-têtes de sécurité)' },
    ],
    neCouvrePas: [
      { text: 'La rédaction et l\'optimisation du contenu', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'L\'acquisition de liens entrants', link: { slug: 'strategie-netlinking', label: 'Netlinking' } },
      { text: 'L\'audit complet du site incluant contenu et popularité', link: { slug: 'audit-seo', label: 'Audit SEO' } },
      { text: 'L\'optimisation de la fiche Google Business Profile', link: { slug: 'seo-local', label: 'SEO local' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Migration SEO', slug: 'migration-seo' },
    { label: 'Spam de commentaires', slug: 'spam-de-commentaires' },
  ],
};
