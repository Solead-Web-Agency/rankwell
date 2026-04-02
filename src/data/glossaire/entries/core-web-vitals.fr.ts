/**
 * GLOSSAIRE — Core Web Vitals
 * Métriques Google d'expérience utilisateur (LCP, INP, CLS)
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Core Web Vitals : définition & cadre',
    description: 'Les Core Web Vitals désignent trois métriques Google pour évaluer l\'expérience utilisateur\u00a0: LCP, INP et CLS. Signal de classement, seuils et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Les Core Web Vitals désignent un ensemble de trois métriques définies par Google pour évaluer l\'expérience utilisateur d\'une page web\u00a0: la vitesse de chargement (LCP), la réactivité aux interactions (INP) et la stabilité visuelle (CLS). Depuis 2021, ces métriques font partie des signaux de classement de Google. En mars 2024, l\'INP (Interaction to Next Paint) a remplacé le FID (First Input Delay) comme métrique de réactivité.',
    ],
    nucleaire: 'Selon Rankwell, les Core Web Vitals mesurent l\'expérience utilisateur pour Google, mais les moteurs IA n\'évaluent pas la vitesse d\'un site. Ils évaluent la qualité structurelle de son contenu. Un site lent mais rigoureusement structuré sera davantage cité par ChatGPT qu\'un site rapide au contenu superficiel.',
  },

  cadre: {
    paragraphs: [
      'Les Core Web Vitals s\'inscrivent dans le programme Page Experience de Google, qui regroupe les signaux liés à la qualité de l\'expérience utilisateur. Google utilise les données du Chrome User Experience Report (CrUX) pour collecter ces métriques en conditions réelles d\'utilisation, sur des appareils mobiles et desktop.',
      'Les seuils de performance sont classés en trois zones\u00a0: «\u00a0Bon\u00a0» (vert), «\u00a0À améliorer\u00a0» (orange) et «\u00a0Médiocre\u00a0» (rouge). Google recommande que 75\u00a0% des chargements de page se situent dans la zone «\u00a0Bon\u00a0» pour chaque métrique (Google Search Central, 2023).',
      'Selon le HTTP Archive (2025), 51\u00a0% des sites web mobiles atteignent le seuil «\u00a0Bon\u00a0» sur les trois Core Web Vitals simultanément, contre 39\u00a0% en 2022. Une étude Cloudflare (2024) mesure que les sites passant de «\u00a0Médiocre\u00a0» à «\u00a0Bon\u00a0» sur le LCP observent en moyenne une amélioration de 8\u00a0% du taux de conversion.',
    ],
  },

  sections: [
    {
      title: 'Les trois métriques',
      tableau: {
        caption: 'Les trois Core Web Vitals',
        headers: ['Métrique', 'Mesure', 'Seuil «\u00a0Bon\u00a0»', 'Ce qu\'elle évalue'],
        rows: [
          { cells: ['LCP (Largest Contentful Paint)', 'Temps d\'affichage du plus grand élément visible', '≤ 2,5 secondes', 'Vitesse de chargement perçue'] },
          { cells: ['INP (Interaction to Next Paint)', 'Latence entre une interaction utilisateur et la mise à jour visuelle', '≤ 200 millisecondes', 'Réactivité de la page aux clics, taps et saisies clavier'] },
          { cells: ['CLS (Cumulative Layout Shift)', 'Score cumulé des décalages visuels inattendus', '≤ 0,1', 'Stabilité visuelle (éléments qui «\u00a0sautent\u00a0» pendant le chargement)'] },
        ],
      },
      paragraphsAfter: [
        'L\'INP se distingue de l\'ancien FID par sa couverture\u00a0: le FID mesurait uniquement le délai de la première interaction, tandis que l\'INP prend en compte toutes les interactions de la session et retient la plus lente (au 98e percentile). Les pages lourdes en JavaScript sont les plus affectées par cette métrique.',
      ],
    },
    {
      title: 'Core Web Vitals et visibilité IA\u00a0: une distinction nécessaire',
      paragraphs: [
        'Les Core Web Vitals sont un signal de classement pour Google Search. Les moteurs IA (ChatGPT, Perplexity, Claude) ne classent pas de pages\u00a0: ils génèrent des réponses en citant des sources. Leur mécanisme de sélection repose sur la pertinence factuelle, la structure du contenu et la réputation de la source, pas sur la vitesse de chargement.',
        'GPTBot, ClaudeBot et PerplexityBot crawlent le contenu HTML d\'une page. Ils n\'exécutent pas JavaScript, ne mesurent pas le LCP et n\'évaluent pas le CLS. Un site avec un CLS de 0,4 (médiocre pour Google) mais un contenu structuré en données vérifiables et balisé en Schema.org reste parfaitement citable par un LLM.',
        'L\'inverse est également vrai\u00a0: un site qui obtient un score parfait sur les trois Core Web Vitals mais dont le contenu est superficiel ou dépourvu de données structurées n\'a aucun avantage en matière de citabilité.',
      ],
    },
    {
      title: 'Facteurs d\'optimisation par métrique',
      tableau: {
        caption: 'Causes de dégradation et leviers d\'optimisation des Core Web Vitals',
        headers: ['Métrique', 'Causes fréquentes de dégradation', 'Leviers d\'optimisation'],
        rows: [
          { cells: ['LCP', 'Images non compressées, CSS bloquant, temps serveur élevé', 'Préchargement, CDN, compression d\'images, optimisation TTFB'] },
          { cells: ['INP', 'Scripts JavaScript lourds, handlers d\'événements bloquants', 'Fractionnement du code, Web Workers, debouncing'] },
          { cells: ['CLS', 'Images/vidéos sans dimensions, injection de contenu dynamique', 'Attributs width/height explicites, espace réservé pour les publicités'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La mesure de la performance d\'expérience utilisateur sur les pages web' },
      { text: 'Le LCP (chargement), l\'INP (réactivité) et le CLS (stabilité visuelle)' },
      { text: 'L\'impact en tant que signal de classement dans Google Search' },
      { text: 'Les données terrain collectées via le Chrome User Experience Report (CrUX)' },
    ],
    neCouvrePas: [
      { text: 'L\'ensemble des métriques de performance web (TTFB, FCP, TBT ne sont pas des Core Web Vitals)', link: { slug: 'seo-technique', label: 'SEO technique' } },
      { text: 'La crawlabilité et l\'indexation des pages par les moteurs de recherche', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'La qualité du contenu ou la pertinence sémantique' },
      { text: 'La visibilité dans les moteurs IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Indexation', slug: 'indexation' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'SEO', slug: 'seo' },
    { label: 'Audit SEO', slug: 'audit-seo' },
    { label: 'GEO', slug: 'geo' },
  ],
};
