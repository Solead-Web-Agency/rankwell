/**
 * GLOSSAIRE — TF-IDF (Term Frequency-Inverse Document Frequency)
 * Méthode statistique de mesure d'importance des termes
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'TF-IDF (Term Frequency-Inverse Document Frequency) : définition & cadre',
    description: 'Le TF-IDF est une méthode statistique mesurant l\'importance d\'un terme dans un document par rapport à un corpus. Calcul, usage SEO et limites face aux transformers.',
  },

  definition: {
    paragraphs: [
      'Le TF-IDF (Term Frequency-Inverse Document Frequency) désigne une méthode statistique qui mesure l\'importance relative d\'un terme dans un document par rapport à un corpus de référence. Le score TF-IDF augmente proportionnellement à la fréquence du terme dans le document (TF) et diminue proportionnellement à sa fréquence dans l\'ensemble du corpus (IDF). Un terme fréquent dans un document mais rare dans le corpus obtient un score élevé.',
    ],
    nucleaire: 'Selon Rankwell, le TF-IDF reste un outil d\'analyse utile pour identifier les termes discriminants d\'un contenu, mais il ne reflète plus le fonctionnement des algorithmes modernes de classement ni des LLM, qui raisonnent en entités sémantiques et en relations contextuelles, pas en fréquences de termes.',
  },

  cadre: {
    paragraphs: [
      'Le TF-IDF a été formalisé par Karen Spärck Jones en 1972 dans son article « A Statistical Interpretation of Term Specificity and Its Application in Retrieval » (Journal of Documentation, 1972). Gerard Salton a ensuite intégré et popularisé la méthode dans le système SMART à Cornell durant les années 1980. Le principe repose sur deux composantes combinées.',
    ],
  },

  sections: [
    {
      title: 'Mécanisme de calcul',
      paragraphs: [
        'La composante TF (Term Frequency) compte le nombre d\'occurrences d\'un terme dans un document, normalisé par la longueur du document. La composante IDF (Inverse Document Frequency) calcule le logarithme inverse de la proportion de documents du corpus contenant ce terme. Le produit des deux donne le score TF-IDF.',
      ],
      tableau: {
        caption: 'Composantes du TF-IDF',
        headers: ['Composante', 'Mesure', 'Interprétation'],
        rows: [
          { cells: ['TF', 'Fréquence du terme dans le document', 'Un terme très présent dans le document est potentiellement important pour ce document'] },
          { cells: ['IDF', 'Rareté du terme dans le corpus', 'Un terme rare dans le corpus est plus discriminant qu\'un terme courant'] },
          { cells: ['TF-IDF', 'TF × IDF', 'Un terme fréquent localement ET rare globalement a un fort pouvoir de caractérisation'] },
        ],
      },
      paragraphsAfter: [
        'Un terme comme « le » obtient un TF élevé (présent partout) mais un IDF quasi nul (présent dans tous les documents). Son score TF-IDF est donc bas. Un terme technique spécifique à un sujet obtient un TF modéré et un IDF élevé\u00a0: son score TF-IDF sera haut.',
      ],
    },
    {
      title: 'Usage en SEO',
      paragraphs: [
        'Les outils d\'optimisation de contenu (Surfer SEO, Clearscope, YourTextGuru) utilisent des variantes du TF-IDF pour comparer un texte aux pages positionnées en première page Google. Ils identifient les termes que les pages concurrentes utilisent fréquemment et que la page analysée sous-utilise. Cette approche aide à couvrir un champ lexical attendu par les moteurs, mais elle ne capture pas les relations sémantiques entre les termes.',
      ],
    },
    {
      title: 'Limites face aux modèles sémantiques',
      paragraphs: [
        'Le TF-IDF traite chaque terme comme une unité indépendante. Il ne comprend ni la synonymie (« voiture » et « automobile »), ni la polysémie (« avocat » le fruit vs « avocat » le juriste), ni les relations contextuelles entre les concepts. Les algorithmes de classement modernes (BERT, MUM) et les LLM (GPT, Claude, Gemini) utilisent des modèles de langue fondés sur les transformers, qui représentent les mots comme des vecteurs dans un espace sémantique multidimensionnel. Ces modèles comprennent le contexte, l\'intention et les relations entre entités.',
        'Le TF-IDF mesure la pertinence statistique d\'un terme. Les transformers mesurent la pertinence sémantique d\'un passage. Un contenu optimisé uniquement par TF-IDF risque de couvrir les bons termes sans produire un texte sémantiquement cohérent. Un contenu structuré autour d\'entités et de relations contextuelles sera mieux compris par les moteurs modernes et par les LLM, indépendamment de la fréquence exacte de chaque terme.',
      ],
      tableau: {
        caption: 'TF-IDF vs modèles sémantiques (transformers)',
        headers: ['Critère', 'TF-IDF', 'Modèles sémantiques (transformers)'],
        rows: [
          { cells: ['Unité d\'analyse', 'Terme isolé', 'Passage contextuel'] },
          { cells: ['Comprend la synonymie', 'Non', 'Oui'] },
          { cells: ['Comprend l\'intention', 'Non', 'Oui'] },
          { cells: ['Utilisé par Google (2026)', 'Composante parmi d\'autres', 'Fondation du ranking'] },
          { cells: ['Utilisé par les LLM', 'Non', 'Oui (architecture transformer native)'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La mesure statistique de l\'importance d\'un terme dans un document' },
      { text: 'L\'identification des termes discriminants par rapport à un corpus' },
      { text: 'L\'analyse comparative du champ lexical entre pages concurrentes' },
      { text: 'L\'usage dans les outils d\'optimisation de contenu SEO' },
    ],
    neCouvrePas: [
      { text: 'La compréhension sémantique du contenu', link: { slug: 'coherence-semantique', label: 'Cohérence sémantique' } },
      { text: 'Le fonctionnement des modèles de langue (LLM) et des transformers' },
      { text: 'L\'optimisation de la citabilité par les moteurs IA', link: { slug: 'geo', label: 'GEO' } },
      { text: 'Le scoring de pertinence des algorithmes modernes de Google', link: { slug: 'algorithmes-de-classement', label: 'Algorithmes de classement' } },
    ],
  },

  conceptsLies: [
    { label: 'Algorithmes de classement', slug: 'algorithmes-de-classement' },
    { label: 'Cohérence sémantique', slug: 'coherence-semantique' },
    { label: 'SEO', slug: 'seo' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'GEO', slug: 'geo' },
  ],
};
