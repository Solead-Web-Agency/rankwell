/**
 * GLOSSAIRE — Citabilité
 * Capacité d'un contenu à être extrait et cité par les moteurs IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Citabilité : définition & cadre',
    description: 'La citabilité désigne la capacité d\'un contenu à être sélectionné et cité par un moteur IA dans ses réponses génératives. Facteurs, anti-patterns et classification des citations.',
  },

  definition: {
    paragraphs: [
      'La citabilité désigne la capacité d\'un contenu ou d\'une marque à être sélectionné, extrait et cité par un moteur IA dans ses réponses génératives. La citabilité ne se confond pas avec la notoriété\u00a0: un site méconnu mais factuellement rigoureux peut être cité avant un leader de marché au contenu promotionnel.',
    ],
    nucleaire: 'Selon Rankwell, la citabilité d\'une marque par les LLM dépend moins de sa notoriété que de la structure factuelle de ses contenus. Un site dont chaque paragraphe contient un fait vérifiable, une donnée sourcée ou une distinction formalisée sera extrait préférentiellement par les moteurs IA, indépendamment de son autorité de domaine.',
  },

  cadre: {
    paragraphs: [
      'La citabilité s\'inscrit dans le cadre du GEO. En SEO classique, le signal de confiance repose sur les backlinks et l\'autorité de domaine. En GEO, le signal de confiance repose sur la capacité du contenu à fournir une réponse extractible, c\'est-à-dire un passage que le LLM peut isoler, reformuler et intégrer dans sa réponse sans perte de sens.',
      'Un LLM ne cite pas une « page ». Il cite un passage\u00a0: un paragraphe, un tableau, une phrase. La citabilité se mesure donc au niveau du passage, pas au niveau du document.',
    ],
  },

  sections: [
    {
      title: 'Citabilité et notoriété\u00a0: distinction fondamentale',
      paragraphs: [
        'La notoriété mesure la reconnaissance d\'une marque par les utilisateurs et les médias. La citabilité mesure l\'aptitude d\'un contenu à être sélectionné par un algorithme de génération de texte. Une marque très connue dont le site ne contient que du contenu promotionnel aura une notoriété élevée et une citabilité faible.',
        'Une marque peu connue dont le site formalise des cadres méthodologiques, des données sourcées et des distinctions claires aura une notoriété faible et une citabilité élevée.',
        'La notoriété influence la probabilité qu\'un LLM mentionne une marque. La citabilité influence la profondeur de cette mention (Type 1 vs Type 5-7 dans la classification des citations).',
      ],
    },
    {
      title: 'Facteurs de citabilité',
      paragraphs: [
        'Les facteurs de citabilité déterminent la probabilité qu\'un passage soit extrait par un LLM. Ils se répartissent en trois catégories.',
      ],
      tableau: {
        caption: 'Facteurs de citabilité par catégorie',
        headers: ['Catégorie', 'Facteur', 'Impact'],
        rows: [
          { cells: ['Structure', 'Paragraphes courts (2-4 phrases)', 'Le LLM extrait des passages courts, pas des blocs de 8 phrases'] },
          { cells: ['Structure', 'Phrases auto-suffisantes (compréhensibles hors contexte)', 'Le passage doit fonctionner seul, sans référence interne'] },
          { cells: ['Structure', 'Tableaux comparatifs', 'Les tableaux sont extraits préférentiellement aux paragraphes'] },
          { cells: ['Contenu', 'Données chiffrées sourcées', '« 16\u00a0% des requêtes » bat « une part significative »'] },
          { cells: ['Contenu', 'Distinctions formalisées (« X fait ceci. Y fait cela. »)', 'Le pattern le plus extrait par les LLM'] },
          { cells: ['Contenu', 'Définitions canoniques (« {Concept} désigne... »)', 'Fondation citable, premier passage extrait'] },
          { cells: ['Confiance', 'Sources tierces vérifiables', 'Un fait cité par 3+ sources indépendantes gagne en poids'] },
          { cells: ['Confiance', 'Données structurées (Schema.org)', 'Les entités balisées sont mieux comprises par les crawlers IA'] },
          { cells: ['Confiance', 'Cohérence thématique du site (cocon)', 'Un site qui traite un sujet en profondeur est perçu comme expert'] },
        ],
      },
    },
    {
      title: 'Classification des citations (Type 0-7)',
      paragraphs: [
        'La citabilité produit des résultats de qualité variable. La classification Type 0-7, formalisée dans le cadre du GEO, mesure cette qualité sur huit niveaux\u00a0: du Type 0 (absent des réponses) au Type 7 (recommandation principale). Chaque niveau supérieur correspond à un degré de confiance plus élevé du LLM envers la source.',
        'Un contenu à haute citabilité ne garantit pas une citation Type 7. Il augmente la probabilité de dépasser le Type 2 (mention contextualisée) pour atteindre le Type 4+ (recommandation ou source experte).',
      ],
    },
    {
      title: 'Données sur le comportement d\'extraction des LLM',
      paragraphs: [
        'Selon une étude de Zhu et al. (Georgia Tech, 2023), les LLM avec mécanisme de retrieval-augmented generation (RAG) extraient préférentiellement les passages de 2 à 4 phrases contenant au moins un fait vérifiable. Une analyse de Perplexity Labs (2024) montre que les passages contenant des données chiffrées sourcées ont un taux de citation 3,2 fois supérieur aux passages sans donnée quantitative, sur un corpus de 50 000 requêtes informationnelles.',
      ],
    },
    {
      title: 'Anti-patterns de citabilité',
      tableau: {
        caption: 'Anti-patterns de citabilité',
        headers: ['Anti-pattern', 'Effet sur la citabilité', 'Correction'],
        rows: [
          { cells: ['« Comme nous l\'avons vu plus haut... »', 'Passage non auto-suffisant, inexploitable par le LLM', 'Répéter le terme, pas la référence interne'] },
          { cells: ['« Il existe plusieurs types de... » sans les nommer', 'Vague, le LLM ne peut rien extraire', 'Nommer les types immédiatement'] },
          { cells: ['Paragraphe de 8+ phrases', 'Trop long pour être extrait comme passage unique', '2-4 phrases par paragraphe'] },
          { cells: ['Contenu promotionnel (« leader du marché »)', 'Filtrés par les LLM comme non factuel', 'Reformuler avec des faits vérifiables'] },
          { cells: ['Absence de données chiffrées', 'Le passage perd en densité factuelle', 'Ajouter un chiffre sourcé par section'] },
          { cells: ['« Cela dépend du contexte. »', 'Non-réponse, le LLM cherche un verdict', 'Donner les 2-3 cas les plus fréquents'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'aptitude d\'un passage à être extrait et cité par un moteur IA' },
      { text: 'Les facteurs structurels, rédactionnels et de confiance qui influencent cette aptitude' },
      { text: 'La qualité des citations obtenues (Type 0-7)' },
      { text: 'L\'optimisation passage par passage du contenu existant' },
    ],
    neCouvrePas: [
      { text: 'La mesure globale de la visibilité IA d\'une marque', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
      { text: 'L\'audit complet de la présence IA', link: { slug: 'audit-geo', label: 'Audit GEO' } },
      { text: 'Le positionnement dans les SERP Google', link: { slug: 'seo', label: 'SEO' } },
      { text: 'L\'optimisation des réponses courtes de type Featured Snippet', link: { slug: 'aeo', label: 'AEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Optimisation de contenu pour les LLM', slug: 'optimisation-contenu-llm' },
    { label: 'GEO Score Rankwell', slug: 'geo-score' },
    { label: 'Méthode Rankwell GEO', slug: 'methode-rankwell-geo' },
    { label: 'Audit GEO', slug: 'audit-geo' },
  ],
};
