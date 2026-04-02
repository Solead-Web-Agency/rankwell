/**
 * GLOSSAIRE — Crawl budget
 * Allocation des ressources de crawl par Googlebot
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Crawl budget : définition & cadre',
    description: 'Le crawl budget désigne la quantité de ressources que Googlebot alloue à l\'exploration d\'un site sur une période donnée. Facteurs, optimisation et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Le crawl budget désigne la quantité de ressources que Googlebot alloue à l\'exploration d\'un site web sur une période donnée. Il résulte de deux facteurs combinés\u00a0: la capacité de crawl (le nombre de requêtes simultanées que le serveur peut supporter sans dégradation) et la demande de crawl (l\'intérêt que Google porte aux URL du site en fonction de leur popularité, de leur fraîcheur et de leur type).',
    ],
    nucleaire: 'Selon Rankwell, le crawl budget est un enjeu de SEO technique pour Google, mais il ne s\'applique pas aux robots IA\u00a0: GPTBot, ClaudeBot et PerplexityBot n\'ont pas de notion de «\u00a0budget\u00a0» et crawlent ce qu\'ils trouvent accessible, sans prioriser les URL par popularité ni respecter de limite de fréquence auto-régulée.',
  },

  cadre: {
    paragraphs: [
      'Le crawl budget concerne principalement les sites de grande taille (au-delà de 10\u00a0000 URL selon Google Search Central, 2024) ou les sites dont l\'architecture technique génère un nombre élevé d\'URL accessibles (paramètres d\'URL, pagination infinie, facettes de filtrage). Pour un site de moins de 1\u00a0000 pages avec un contenu mis à jour régulièrement, le crawl budget n\'est généralement pas un facteur limitant.',
      'Selon une analyse Screaming Frog (2024) portant sur 200 sites e-commerce, les sites dont plus de 30\u00a0% des URL crawlées sont des doublons paramétriques subissent une indexation 2,4 fois plus lente de leurs nouvelles pages. Gary Illyes (Google, 2023) a confirmé que les sites de moins de quelques milliers de pages sont crawlés intégralement, rendant l\'optimisation du crawl budget non prioritaire pour ces cas.',
      'Google détermine la priorité de crawl en fonction de signaux internes (popularité des pages, fréquence de mise à jour, présence dans le sitemap XML) et de signaux techniques (temps de réponse du serveur, erreurs HTTP). Une page qui retourne des erreurs 5xx de façon répétée verra sa fréquence de crawl diminuer.',
    ],
  },

  sections: [
    {
      title: 'Crawl Googlebot vs crawl des robots IA',
      tableau: {
        caption: 'Crawl Googlebot et crawl des robots IA comparés',
        headers: ['Dimension', 'Googlebot', 'Robots IA (GPTBot, ClaudeBot, PerplexityBot)'],
        rows: [
          { cells: ['Objectif', 'Indexer les pages dans l\'index Google', 'Collecter du contenu pour entraînement ou réponses en temps réel'] },
          { cells: ['Budget', 'Oui, limité par la capacité serveur et la demande Google', 'Non, pas de mécanisme de budget auto-régulé documenté'] },
          { cells: ['Priorisation', 'Par popularité, fraîcheur, signaux internes', 'Par accessibilité\u00a0: crawle ce qui est atteignable et autorisé'] },
          { cells: ['Respect du robots.txt', 'Oui (User-agent: Googlebot)', 'Variable selon l\'opérateur (GPTBot respecte robots.txt\u00a0; tous ne le font pas)'] },
          { cells: ['Rendu JavaScript', 'Oui (via le Web Rendering Service)', 'Non, la plupart des robots IA crawlent le HTML brut'] },
          { cells: ['Fréquence', 'Continue, modulée par le budget', 'Ponctuelle (entraînement) ou en temps réel (RAG)'] },
        ],
      },
      paragraphsAfter: [
        'Cette distinction est structurante\u00a0: optimiser le crawl budget améliore l\'indexation Google, mais n\'a pas d\'effet direct sur l\'ingestion par les moteurs IA. Pour contrôler l\'accès des robots IA, le levier est le fichier robots.txt (directives spécifiques par User-agent) et les balises <meta name="robots">.',
      ],
    },
    {
      title: 'Facteurs de gaspillage du crawl budget',
      tableau: {
        caption: 'Facteurs de gaspillage du crawl budget et solutions',
        headers: ['Facteur', 'Mécanisme', 'Solution'],
        rows: [
          { cells: ['Pages à paramètres dupliqués', 'Les filtres e-commerce génèrent des milliers d\'URL avec le même contenu', 'Configurer les paramètres dans Google Search Console, balise canonical'] },
          { cells: ['Pagination infinie', 'Googlebot suit les liens de pagination sans fin', 'Limiter la profondeur, implémenter rel="next"/"prev" ou pagination par blocs'] },
          { cells: ['Soft 404', 'Pages vides qui retournent un code 200 au lieu de 404', 'Retourner un vrai code 404 ou 410'] },
          { cells: ['Chaînes de redirections', 'Chaque redirection consomme une requête de crawl', 'Limiter à une seule redirection par URL'] },
          { cells: ['Ressources lourdes non bloquées', 'CSS, JS et images non essentiels crawlés', 'Bloquer via robots.txt les ressources non nécessaires à l\'indexation'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'allocation des ressources de crawl par Googlebot sur un site web' },
      { text: 'Les facteurs techniques qui influencent la fréquence et la profondeur du crawl' },
      { text: 'L\'optimisation de l\'architecture pour maximiser l\'exploration des pages stratégiques' },
      { text: 'La gestion du fichier robots.txt et du sitemap XML pour guider le crawl' },
    ],
    neCouvrePas: [
      { text: 'L\'indexation des pages (être crawlé ne garantit pas d\'être indexé)', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'La qualité du contenu ou la pertinence des pages' },
      { text: 'La gestion de l\'accès des robots IA au contenu du site', link: { slug: 'geo', label: 'GEO' } },
      { text: 'La performance de chargement des pages', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
    ],
  },

  conceptsLies: [
    { label: 'Indexation', slug: 'indexation' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'SEO', slug: 'seo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
  ],
};
