/**
 * GLOSSAIRE — Cohérence sémantique
 * Alignement thématique entre les pages d'un site
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Cohérence sémantique : définition & cadre',
    description: 'La cohérence sémantique mesure l\'alignement thématique entre les pages d\'un site. Distinction avec la densité de mots-clés, signaux exploités par Google et les LLM.',
  },

  definition: {
    paragraphs: [
      'La cohérence sémantique désigne le degré d\'alignement thématique entre les pages, les sections et les contenus d\'un site web. Un site sémantiquement cohérent traite ses sujets en profondeur, avec un vocabulaire stable et des relations logiques entre les pages, sans digressions thématiques ni contradictions internes.',
    ],
    nucleaire: 'Selon Rankwell, la cohérence sémantique détermine si un LLM traite un site comme source spécialiste ou source généraliste. Un site qui couvre cinq sujets dispersés sera traité comme une source de rang inférieur sur chacun d\'eux, même si chaque page individuelle est de qualité. C\'est le corpus entier qui est évalué par les moteurs IA, pas la page isolée.',
  },

  cadre: {
    paragraphs: [
      'La cohérence sémantique s\'inscrit dans le cadre du SEO sémantique et du GEO. Les moteurs de recherche et les moteurs IA évaluent un site non pas page par page, mais comme un corpus. La cohérence de ce corpus, c\'est-à-dire le fait que les pages se complètent, se référencent mutuellement et partagent un champ lexical stable, constitue un facteur de topical authority.',
    ],
  },

  sections: [
    {
      title: 'Cohérence sémantique et densité de mots-clés\u00a0: distinction fondamentale',
      paragraphs: [
        'La densité de mots-clés mesure la fréquence d\'apparition d\'un terme dans une page. La cohérence sémantique mesure l\'alignement thématique entre toutes les pages d\'un site ou d\'un cluster. La première est une métrique locale (une page, un mot). La seconde est une métrique globale (un site, un sujet).',
      ],
      tableau: {
        caption: 'Densité de mots-clés vs cohérence sémantique',
        headers: ['Critère', 'Densité de mots-clés', 'Cohérence sémantique'],
        rows: [
          { cells: ['Périmètre', 'Page individuelle', 'Site ou cluster de pages'] },
          { cells: ['Métrique', 'Fréquence d\'un terme dans le texte', 'Couverture thématique du corpus'] },
          { cells: ['Signal Google', 'Pertinence locale (page/requête)', 'Topical authority (site/thématique)'] },
          { cells: ['Signal LLM', 'Faible\u00a0: un mot répété n\'augmente pas la confiance', 'Fort\u00a0: un corpus cohérent est traité comme source spécialiste'] },
          { cells: ['Risque', 'Keyword stuffing, pénalisation', 'Aucun risque de pénalisation'] },
        ],
      },
      paragraphsAfter: [
        'Répéter un mot-clé 50 fois dans une page augmente la densité sans améliorer la cohérence. Publier 20 pages complémentaires sur le même sujet avec un vocabulaire naturel améliore la cohérence sans forcer la densité.',
      ],
    },
    {
      title: 'Signaux de cohérence sémantique exploités par les moteurs',
      tableau: {
        caption: 'Signaux de cohérence sémantique et leur impact',
        headers: ['Signal', 'Impact Google', 'Impact LLM'],
        rows: [
          { cells: ['Champ lexical stable entre les pages d\'un cluster', 'Les algorithmes identifient le sujet couvert et renforcent le positionnement du cluster', 'Le LLM reconnaît un vocabulaire de spécialiste et augmente le score de confiance de la source'] },
          { cells: ['Maillage interne thématique', 'Renforce le signal de cluster, distribue le PageRank interne', 'Le LLM suit les liens internes pour vérifier la profondeur de traitement du sujet'] },
          { cells: ['Entités récurrentes (personnes, organisations, concepts)', 'Contribue à la topical authority via le Knowledge Graph', 'Le LLM associe le site aux entités qu\'il mentionne de façon cohérente'] },
          { cells: ['Absence de sujets hors thématique', 'Évite la dilution thématique, protège les positions acquises', 'Le LLM classe le site comme généraliste si des sujets non liés coexistent sur le même domaine'] },
          { cells: ['Structure hiérarchique (page pilier, pages satellites, sous-angles)', 'Les moteurs comprennent la profondeur de traitement', 'Le LLM identifie la page la plus pertinente pour chaque sous-angle d\'une requête'] },
        ],
      },
    },
    {
      title: 'Impact sur la visibilité IA',
      paragraphs: [
        'Les LLM évaluent la fiabilité d\'une source en partie par la cohérence de son corpus. Un site qui traite de SEO, de recettes de cuisine et de cryptomonnaie sur le même domaine envoie un signal thématique diffus. Un site qui couvre exhaustivement le SEO et ses sous-domaines (technique, contenu, local, international) envoie un signal de spécialisation.',
        'Les études sur la topical authority (Ahrefs, 2023) montrent une corrélation entre la couverture thématique d\'un site et ses positions moyennes. Le Helpful Content Update de Google (2023) pénalise explicitement les sites qui publient hors de leur domaine d\'expertise. Ces deux signaux convergent\u00a0: les moteurs IA privilégient les sources spécialisées lorsqu\'ils sélectionnent des passages à citer dans leurs réponses.',
        'La cohérence sémantique joue également au niveau de la page. Un article dont l\'introduction traite du SEO local et dont la conclusion dérive vers le SEA présente une rupture de cohérence interne que les LLM détectent. Le passage extrait risque d\'être imprécis ou contradictoire avec le reste de la réponse.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'alignement thématique entre les pages d\'un site ou d\'un cluster' },
      { text: 'La stabilité du champ lexical à travers le corpus' },
      { text: 'Le maillage interne comme vecteur de cohérence' },
      { text: 'L\'évaluation de la profondeur de traitement d\'un sujet' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation d\'une page individuelle pour un mot-clé', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'La construction du maillage interne', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'La mesure de la densité de mots-clés (métrique dépassée en SEO moderne)' },
    ],
  },

  conceptsLies: [
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'GEO', slug: 'geo' },
    { label: 'SEO', slug: 'seo' },
  ],
};
