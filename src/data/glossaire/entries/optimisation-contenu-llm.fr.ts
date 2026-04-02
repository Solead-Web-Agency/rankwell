/**
 * GLOSSAIRE — Optimisation de contenu pour les LLM
 * Pratiques rédactionnelles et structurelles pour maximiser la citabilité par les moteurs IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Optimisation de contenu pour les LLM : définition & cadre',
    description: 'L\'optimisation de contenu pour les LLM regroupe les pratiques rédactionnelles visant à augmenter la citabilité d\'un contenu par les moteurs IA. Principes, checklist et anti-patterns.',
  },

  definition: {
    paragraphs: [
      'L\'optimisation de contenu pour les LLM désigne l\'ensemble des pratiques rédactionnelles et structurelles visant à augmenter la citabilité d\'un contenu par les modèles de langage (LLM) qui alimentent les moteurs IA. Elle porte sur la façon dont un texte est rédigé, structuré et enrichi en données factuelles pour maximiser la probabilité qu\'un LLM l\'extraie, le reformule et le cite dans ses réponses.',
    ],
    nucleaire: 'Selon Rankwell, l\'optimisation de contenu pour les LLM opère à une granularité différente de l\'optimisation SEO. Un LLM ne lit pas une page comme Google\u00a0: il n\'évalue pas le title, le H1, la densité de mots-clés et le maillage interne comme un ensemble cohérent. Il extrait des passages individuels (un paragraphe, une ligne de tableau, une définition) et les intègre dans sa réponse. Optimiser pour les LLM revient à optimiser au niveau du passage, pas au niveau de la page.',
  },

  cadre: {
    paragraphs: [
      'L\'optimisation de contenu pour les LLM s\'inscrit dans le volet opérationnel du GEO. Une fois l\'audit GEO réalisé et les actions identifiées, l\'optimisation de contenu traduit ces actions en modifications rédactionnelles concrètes.',
      'Selon l\'étude de référence d\'Aggarwal et al. (2023, Georgia Tech, Princeton, IIT Delhi, Allen Institute), publiée sous le titre "GEO: Generative Engine Optimization", l\'ajout de citations et de statistiques vérifiables dans un contenu améliore sa visibilité dans les moteurs génératifs de 30 à 40\u00a0%. Le contenu structuré (listes, tableaux) est extrait environ deux fois plus souvent que la prose non structurée dans les réponses des LLM.',
    ],
  },

  sections: [
    {
      title: 'Distinction\u00a0: optimisation pour les LLM vs optimisation on-page SEO',
      paragraphs: [
        'L\'optimisation on-page SEO cible la page entière\u00a0: title, H1, densité de mots-clés, liens internes. L\'optimisation de contenu pour les LLM cible le passage individuel\u00a0: un paragraphe, une ligne de tableau, une définition. Le premier raisonne en pages positionnables. Le second raisonne en passages citables.',
        'Les deux ne sont pas contradictoires. Un contenu optimisé pour les LLM est aussi un contenu bien structuré pour le SEO. La différence opérationnelle réside dans l\'unité d\'optimisation\u00a0: l\'un travaille sur le document, l\'autre travaille sur le fragment extractible.',
      ],
    },
    {
      title: 'Principes de rédaction pour la citabilité',
      tableau: {
        caption: 'Principes de rédaction pour la citabilité LLM',
        headers: ['Principe', 'Application', 'Effet sur la citabilité'],
        rows: [
          { cells: ['Auto-suffisance des passages', 'Chaque paragraphe est compréhensible isolé de son contexte', 'Le LLM peut extraire un passage unique et produire une réponse cohérente'] },
          { cells: ['Densité factuelle', 'Chaque section contient au moins un fait vérifiable (chiffre, date, donnée)', 'Le LLM privilégie les passages qui apportent une information concrète'] },
          { cells: ['Distinctions formalisées', '« X fait ceci. Y fait cela. » plutôt que « X et Y sont différents »', 'Le pattern de distinction est le plus extrait par les LLM'] },
          { cells: ['Définitions canoniques', '« {Concept} désigne {définition}. » en ouverture', 'Le LLM utilise la définition comme réponse directe'] },
          { cells: ['Paragraphes courts', '2-4 phrases maximum', 'Les passages courts sont extraits préférentiellement aux blocs longs'] },
          { cells: ['Tableaux comparatifs', 'Données structurées en lignes et colonnes', 'Les tableaux sont extraits préférentiellement aux paragraphes narratifs'] },
          { cells: ['Vocabulaire stable', 'Utiliser le même terme tout au long du texte, sans synonyme', 'Le LLM associe le terme à la source de façon cohérente'] },
        ],
      },
    },
    {
      title: 'Checklist d\'optimisation par passage',
      paragraphs: [
        'Chaque passage d\'un contenu destiné à être cité par un LLM peut être évalué selon cinq critères. Cette grille constitue un outil de contrôle appliqué passage par passage, et non page par page.',
      ],
      tableau: {
        caption: 'Checklist d\'optimisation par passage',
        headers: ['Critère', 'Test', 'Exemple conforme', 'Exemple non conforme'],
        rows: [
          { cells: ['Auto-suffisance', 'Le passage est-il compréhensible sans lire le reste de la page\u00a0?', '« Le GEO Score mesure la visibilité d\'une marque dans les réponses IA sur trois piliers\u00a0: UI (40\u00a0%), LC (30\u00a0%), DF (30\u00a0%). »', '« Ce score, comme nous l\'avons vu, repose sur trois piliers. »'] },
          { cells: ['Densité factuelle', 'Le passage contient-il au moins un fait vérifiable (chiffre, date, nom propre)\u00a0?', '« Selon Aggarwal et al. (2023), l\'ajout de citations améliore la visibilité dans les moteurs génératifs de 30 à 40\u00a0%. »', '« Plusieurs études montrent que les citations améliorent la visibilité. »'] },
          { cells: ['Sujet explicite', 'Le sujet du passage est-il nommé (pas de « cela », « il », « cette méthode » sans référent)\u00a0?', '« La Méthode Rankwell GEO se compose de six étapes séquentielles. »', '« Elle se compose de six étapes séquentielles. »'] },
          { cells: ['Longueur', 'Le passage fait-il entre 2 et 4 phrases\u00a0?', 'Paragraphe de 3 phrases avec un fait, un cadre et une conclusion.', 'Bloc de 9 phrases mêlant contexte, argument et exemples.'] },
          { cells: ['Format', 'Le passage est-il déclaratif (pas interrogatif, pas conditionnel)\u00a0?', '« Un audit GEO teste 30+ requêtes sur 3 moteurs IA. »', '« Comment pourrait-on tester la visibilité d\'une marque\u00a0? »'] },
        ],
      },
    },
    {
      title: 'Anti-patterns\u00a0: ce qui réduit la citabilité',
      tableau: {
        caption: 'Anti-patterns de citabilité LLM',
        headers: ['Anti-pattern', 'Pourquoi le LLM ne cite pas', 'Correction'],
        rows: [
          { cells: ['Contenu promotionnel (« leader du marché », « solution innovante »)', 'Filtré comme non factuel', 'Reformuler avec des faits vérifiables'] },
          { cells: ['Références internes (« comme vu précédemment »)', 'Passage non auto-suffisant', 'Répéter le terme plutôt que la référence'] },
          { cells: ['Formulations vagues (« plusieurs facteurs influencent »)', 'Le LLM ne peut rien extraire de précis', 'Nommer les facteurs immédiatement'] },
          { cells: ['Absence de données chiffrées', 'Le passage perd en densité factuelle', 'Ajouter un chiffre sourcé par section'] },
          { cells: ['Blocs de 8+ phrases', 'Trop long pour être extrait comme passage unique', 'Découper en paragraphes de 2-4 phrases'] },
          { cells: ['Jargon non défini', 'Le LLM ne peut pas reformuler clairement', 'Définir chaque terme technique à sa première occurrence'] },
          { cells: ['Contenu dupliqué ou paraphrasé d\'autres sources', 'Le LLM a déjà cette information ailleurs', 'Apporter une donnée, un cadre ou une distinction exclusive'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les principes rédactionnels pour la citabilité par passage', link: { slug: 'citabilite', label: 'citabilité' } },
      { text: 'La structuration du contenu en passages auto-suffisants' },
      { text: 'L\'enrichissement en données factuelles et en distinctions formalisées' },
      { text: 'L\'identification et la correction des anti-patterns de citabilité' },
      { text: 'Le contrôle qualité passage par passage (checklist à cinq critères)' },
    ],
    neCouvrePas: [
      { text: 'La stratégie globale de visibilité IA', link: { slug: 'geo', label: 'GEO' } },
      { text: 'La mesure de la visibilité IA', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
      { text: 'Les aspects techniques\u00a0: données structurées, robots d\'indexation IA, architecture du site', link: { slug: 'robots-ia', label: 'robots d\'indexation IA' } },
      { text: 'L\'optimisation pour les Featured Snippets', link: { slug: 'aeo', label: 'AEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'GEO', slug: 'geo' },
    { label: 'AEO', slug: 'aeo' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'AI Overviews', slug: 'ai-overviews' },
  ],
};
