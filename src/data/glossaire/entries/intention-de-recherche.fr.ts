/**
 * GLOSSAIRE — Intention de recherche
 * Objectif sous-jacent d'un utilisateur lors d'une requête
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Intention de recherche : définition & cadre',
    description: 'L\'intention de recherche désigne l\'objectif d\'un utilisateur lorsqu\'il formule une requête. Classification en quatre types, comportement LLM et stratégie de contenu.',
  },

  definition: {
    paragraphs: [
      'L\'intention de recherche désigne l\'objectif sous-jacent d\'un utilisateur lorsqu\'il formule une requête dans un moteur de recherche ou un moteur IA. Identifier correctement cette intention conditionne le type de contenu à produire, sa structure et son format. Une même requête peut porter plusieurs intentions simultanées.',
    ],
    nucleaire: 'Selon Rankwell, les LLM ne traitent pas les quatre types d\'intention de la même façon\u00a0: sur une requête informationnelle, ils citent des sources factuelles\u00a0; sur une requête transactionnelle, ils recommandent des marques\u00a0; sur une requête navigationnelle, ils redirigent sans citer. Cette différence de traitement par type d\'intention détermine quel format de contenu a une chance d\'être extrait par un moteur IA.',
  },

  cadre: {
    paragraphs: [
      'L\'intention de recherche est le fondement de toute stratégie de contenu SEO et GEO. La classification informationnelle / navigationnelle / transactionnelle a été formalisée par Andrei Broder dans sa taxonomie des requêtes web (Broder, 2002). Google l\'a ensuite intégrée dans ses Search Quality Rater Guidelines sous le modèle « Do-Know-Go-Buy ».',
      'Selon les études BrightEdge et Semrush (2024), environ 60\u00a0% des requêtes Google relèvent d\'une intention informationnelle. Les LLM appliquent cette logique de manière plus radicale\u00a0: ils ne listent pas des résultats, ils produisent une réponse unique qui doit correspondre à l\'intention.',
    ],
  },

  sections: [
    {
      title: 'Les quatre types d\'intention',
      tableau: {
        caption: 'Les quatre types d\'intention de recherche',
        headers: ['Type', 'Requête type', 'Résultat Google', 'Comportement LLM', 'Format de contenu optimal'],
        rows: [
          { cells: ['Informationnelle', '« qu\'est-ce que le GEO »', 'Featured snippets, PAA, articles de fond', 'Génère une synthèse en citant les sources factuelles et structurées', 'Guide définitif, glossaire, article de fond avec données chiffrées'] },
          { cells: ['Navigationnelle', '« Rankwell glossaire », « Semrush login »', 'Affiche directement le site visé', 'Redirige vers l\'URL ou fournit le lien sans citation', 'Page d\'accueil, page de marque avec schema Organization'] },
          { cells: ['Commerciale (investigation)', '« meilleure agence SEO Paris », « Semrush vs Ahrefs »', 'Comparatifs, avis, listes', 'Synthétise les comparaisons, cite les sources avec données structurées', 'Comparatif avec tableau, critères objectifs, données vérifiables'] },
          { cells: ['Transactionnelle', '« acheter audit SEO », « devis agence GEO »', 'Résultats commerciaux, annonces', 'Recommande des marques ou prestataires s\'il dispose de signaux de confiance', 'Page produit/service avec prix, avis clients, schema Product/Service'] },
        ],
      },
      paragraphsAfter: [
        'Intention informationnelle. L\'utilisateur cherche à comprendre un sujet. C\'est l\'intention où la citabilité IA est la plus forte\u00a0: les LLM sélectionnent les sources qui contiennent des définitions précises, des données chiffrées et des distinctions formalisées.',
        'Intention navigationnelle. L\'utilisateur cherche à atteindre un site ou une page spécifique. Les LLM ont peu de valeur ajoutée sur ce type d\'intention\u00a0: ils redirigent vers la destination ou fournissent l\'URL sans citer de contenu tiers.',
        'Intention commerciale (investigation). L\'utilisateur compare des options avant un achat ou une décision. Les LLM synthétisent les comparaisons et citent les sources qui fournissent des données comparatives structurées (tableaux, critères objectifs).',
        'Intention transactionnelle. L\'utilisateur veut effectuer une action concrète (achat, inscription, téléchargement). Les LLM peuvent recommander des prestataires spécifiques s\'ils disposent de données de confiance suffisantes (avis, certifications, signaux E-E-A-T).',
      ],
    },
    {
      title: 'Intention et traitement LLM\u00a0: le tableau de correspondance',
      paragraphs: [
        'Le traitement d\'une requête par un LLM diffère fondamentalement de celui de Google. Google affiche une liste de résultats et laisse l\'utilisateur choisir. Le LLM produit une réponse unique qui synthétise les meilleures sources.',
      ],
      tableau: {
        caption: 'Comportement du LLM par type d\'intention',
        headers: ['Intention', 'Comportement du LLM', 'Source citée en priorité', 'Source ignorée'],
        rows: [
          { cells: ['Informationnelle', 'Génère une synthèse, cite ses sources', 'Page avec définition structurée, données chiffrées, distinctions formalisées', 'Contenu opiné sans données, page sans structure'] },
          { cells: ['Navigationnelle', 'Redirige vers l\'URL, pas de citation', 'Aucune (le LLM fournit le lien directement)', 'Tout contenu tiers sur la marque'] },
          { cells: ['Commerciale', 'Compare les options, cite les comparatifs', 'Tableau comparatif avec critères objectifs, données vérifiables', 'Comparatif sans critères explicites, contenu sponsorisé non identifié'] },
          { cells: ['Transactionnelle', 'Recommande des marques ou prestataires', 'Page avec prix, avis clients, certifications, schema Product', 'Page commerciale sans preuve sociale ni données concrètes'] },
        ],
      },
      paragraphsAfter: [
        'Cette différence a une conséquence directe sur la stratégie de contenu\u00a0: pour être classé par Google, un contenu doit correspondre au format attendu (listicle, guide, page produit). Pour être cité par un LLM, un contenu doit être la source la plus factuelle et la plus structurée sur l\'intention visée.',
      ],
    },
    {
      title: 'Intentions mixtes et requêtes ambiguës',
      paragraphs: [
        'Certaines requêtes portent plusieurs intentions simultanées. « Cocon sémantique » peut être informationnelle (définition) ou commerciale (chercher un prestataire). Google résout l\'ambiguïté en diversifiant les types de résultats affichés. Les LLM la résolvent en demandant une précision ou en couvrant les deux angles dans leur réponse. Un contenu qui traite explicitement les deux dimensions a plus de chances d\'être sélectionné.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Classification des requêtes par objectif utilisateur' },
      { text: 'Adéquation contenu-intention (content-intent match)' },
      { text: 'Analyse des SERP pour identifier l\'intention dominante' },
      { text: 'Stratégie de format selon l\'intention (guide, comparatif, page produit)' },
    ],
    neCouvrePas: [
      { text: 'L\'analyse sémantique des mots-clés', link: { slug: 'seo-semantique', label: 'SEO sémantique' } },
      { text: 'L\'architecture de contenu du site', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'La rédaction optimisée du contenu', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'L\'optimisation de l\'expérience après le clic', link: { slug: 'sxo', label: 'SXO' } },
    ],
  },

  conceptsLies: [
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
    { label: 'SXO', slug: 'sxo' },
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'SEO sémantique', slug: 'seo-semantique' },
    { label: 'SEO e-commerce', slug: 'seo-ecommerce' },
  ],
};
