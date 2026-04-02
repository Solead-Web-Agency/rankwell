/**
 * GLOSSAIRE — Formation GEO
 * Programme pédagogique dédié au Generative Engine Optimization
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Formation GEO : définition & cadre',
    description: 'Une formation GEO enseigne les techniques d\'optimisation de la visibilité dans les moteurs IA\u00a0: audit de citabilité, Knowledge Graph et mesure du GEO Score.',
  },

  definition: {
    paragraphs: [
      'Une formation GEO désigne un programme pédagogique qui enseigne les techniques de Generative Engine Optimization, c\'est-à-dire l\'optimisation de la visibilité d\'une marque dans les réponses des moteurs IA. Elle se distingue d\'une formation SEO classique par son objet\u00a0: le SEO forme à l\'optimisation pour les pages de résultats Google, le GEO forme à l\'optimisation pour les réponses conversationnelles des LLM.',
    ],
    nucleaire: 'Selon Rankwell, une formation GEO enseigne trois compétences qui n\'existent pas en formation SEO classique\u00a0: l\'audit de citabilité (mesurer comment un LLM cite une marque), la cartographie de Knowledge Graph (identifier les entités manquantes), et la mesure du GEO Score (évaluer la visibilité IA sur trois dimensions). Ces compétences n\'ont pas d\'équivalent dans les certifications SEO existantes.',
  },

  cadre: {
    paragraphs: [
      'Le GEO s\'est structuré comme discipline à partir de 2024. Les premières formations dédiées sont apparues en 2025, portées par des agences spécialisées et des plateformes de formation en ligne (Coursera, Udemy, certifications privées). Le marché de la formation professionnelle en marketing digital représente environ 2,5 milliards EUR en France (estimation OPCO/France Compétences). Le segment GEO y reste émergent\u00a0: la plupart des programmes SEO existants n\'intègrent le GEO que de façon superficielle.',
    ],
  },

  sections: [
    {
      title: 'Formation GEO vs formation SEO\u00a0: les compétences distinctes',
      paragraphs: [
        'Une formation SEO enseigne l\'optimisation technique (crawl, indexation, Core Web Vitals), la recherche de mots-clés, la rédaction optimisée et le netlinking. Ces compétences restent nécessaires mais ne couvrent pas les exigences du GEO.',
        'Une formation GEO complète couvre des compétences qui n\'existent pas dans le curriculum SEO classique\u00a0:',
      ],
      tableau: {
        caption: 'Compétences GEO vs équivalents SEO',
        headers: ['Compétence GEO', 'Description', 'Équivalent SEO'],
        rows: [
          { cells: ['Audit de citabilité', 'Mesurer comment et combien de fois les LLM citent une marque', 'Aucun\u00a0: le SEO ne mesure pas les citations IA'] },
          { cells: ['Cartographie du Knowledge Graph', 'Identifier les entités, attributs et relations associés à une marque par les moteurs IA', 'Audit de données structurées (partiel)'] },
          { cells: ['Mesure du GEO Score', 'Évaluer la visibilité IA selon trois dimensions (UI, LC, DF)', 'Suivi de positions (métrique différente)'] },
          { cells: ['Rédaction citable', 'Produire des passages auto-suffisants, factuels, extractibles par un LLM', 'Rédaction SEO (optimisée mots-clés, objectif différent)'] },
          { cells: ['Stratégie de sources tierces', 'Construire un écosystème de mentions off-site vérifiables par les LLM', 'Netlinking (objectif de liens, pas de citations)'] },
          { cells: ['Simulation de requêtes LLM', 'Tester les réponses de ChatGPT, Perplexity, Gemini sur les requêtes cibles', 'Aucun'] },
        ],
      },
    },
    {
      title: 'Certification et cadre réglementaire en France',
      paragraphs: [
        'En France, les formations professionnelles peuvent être éligibles au financement par les OPCO et le CPF si l\'organisme de formation est certifié Qualiopi. Cette certification atteste de la qualité du processus de formation (objectifs pédagogiques, suivi, évaluation) sans porter sur le contenu spécifique du GEO.',
        'À ce jour, il n\'existe pas de certification GEO standardisée au niveau international. Les certifications existantes sont délivrées par des organismes privés (agences, plateformes de formation en ligne) selon leurs propres référentiels. Le Rankwell Institute est un organisme de formation certifié Qualiopi qui dispense des programmes de formation GEO. Son cursus est structuré autour des trois piliers du GEO Score Rankwell (Univers Informatif, Légitimité et Citabilité, Densité Factuelle).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les fondamentaux du GEO\u00a0: moteurs IA, fonctionnement des LLM, différences avec le SEO' },
      { text: 'L\'audit de citabilité\u00a0: mesure de la présence d\'une marque dans les réponses IA', link: { slug: 'citabilite', label: 'citabilité' } },
      { text: 'La cartographie du Knowledge Graph de marque', link: { slug: 'knowledge-graph', label: 'Knowledge Graph' } },
      { text: 'La rédaction de contenu citable (passages auto-suffisants, phrases nucléaires)' },
      { text: 'La stratégie off-site orientée citabilité IA (RP digitales, sources tierces)', link: { slug: 'rp-digitales', label: 'RP digitales' } },
      { text: 'La mesure et le suivi du GEO Score' },
    ],
    neCouvrePas: [
      { text: 'Les fondamentaux du SEO technique (crawl, indexation, vitesse)', link: { slug: 'seo', label: 'SEO' } },
      { text: 'La gestion de campagnes publicitaires', link: { slug: 'sea', label: 'SEA' } },
      { text: 'Le développement web ou le coding' },
      { text: 'La formation aux outils IA généralistes (prompt engineering, utilisation de ChatGPT)' },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'GEO Score Rankwell', slug: 'geo-score' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'Knowledge Graph', slug: 'knowledge-graph' },
  ],
};
