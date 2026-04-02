/**
 * GLOSSAIRE — Cannibalisation SEO
 * Dilution des signaux de pertinence par concurrence interne
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Cannibalisation SEO : définition & cadre',
    description: 'La cannibalisation SEO désigne la situation où plusieurs pages d\'un même site rivalisent sur le même mot-clé, diluant le potentiel de classement. Cadre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'La cannibalisation SEO désigne la situation dans laquelle plusieurs pages d\'un même site se positionnent sur le même mot-clé ou la même intention de recherche, ce qui divise les signaux de pertinence et empêche Google de déterminer quelle page faire remonter. Le résultat est une dilution du potentiel de classement\u00a0: au lieu qu\'une page forte se positionne en première page, deux ou trois pages faibles fluctuent en deuxième ou troisième page.',
    ],
    nucleaire: 'Selon Rankwell, la cannibalisation SEO affecte aussi la citabilité IA\u00a0: lorsqu\'un site traite le même sujet sur plusieurs pages sans hiérarchie claire, le LLM ne sait pas quelle page fait autorité. Plutôt que de choisir une source ambiguë, il cite un concurrent dont le signal thématique est univoque.',
  },

  cadre: {
    paragraphs: [
      'La cannibalisation survient lorsque la stratégie de contenu n\'a pas assigné une page unique par intention de recherche. Elle est fréquente sur les sites ayant accumulé du contenu sur plusieurs années sans cartographie sémantique\u00a0: articles de blog, pages catégories et fiches produits finissent par cibler les mêmes requêtes.',
      'Google traite la cannibalisation comme un signal de confusion interne. L\'algorithme alterne entre les pages candidates (phénomène de «\u00a0ranking fluctuation\u00a0»), ce qui rend le positionnement instable. Une étude Semrush (2023) portant sur 50\u00a0000 domaines a montré que les sites présentant une cannibalisation interne perdaient en moyenne 18\u00a0% de CTR organique sur les requêtes concernées par rapport aux sites ayant une seule page positionnée par intention. Le site perd en autorité thématique globale sur le sujet concerné.',
    ],
  },

  sections: [
    {
      title: 'Cannibalisation SEO vs cannibalisation GEO',
      tableau: {
        caption: 'Cannibalisation SEO et cannibalisation GEO comparées',
        headers: ['Dimension', 'Cannibalisation SEO', 'Cannibalisation GEO'],
        rows: [
          { cells: ['Mécanisme', 'Plusieurs pages rivalisent pour la même requête Google', 'Plusieurs pages brouillent le signal thématique du site pour les LLM'] },
          { cells: ['Conséquence', 'Fluctuation de positionnement, dilution du CTR', 'Le LLM ne sait pas quelle page citer → il cite un concurrent'] },
          { cells: ['Diagnostic', 'Google Search Console (requêtes avec plusieurs URL)', 'Simulation de requêtes sur ChatGPT, Perplexity, Gemini'] },
          { cells: ['Correction', 'Consolidation, redirection, canonicalisation', 'Désigner une page canonique par concept avec balisage DefinedTerm'] },
        ],
      },
      paragraphsAfter: [
        'Un site e-commerce qui possède une fiche produit «\u00a0chaussures de trail\u00a0», un article de blog «\u00a0guide des chaussures de trail\u00a0» et une page catégorie «\u00a0chaussures de trail\u00a0» crée une cannibalisation triple. Google hésite entre les trois. Un LLM, face à la même confusion, choisit un concurrent qui a une seule page exhaustive et non ambiguë sur le sujet.',
      ],
    },
    {
      title: 'Méthodes de détection',
      tableau: {
        caption: 'Méthodes de détection de la cannibalisation SEO',
        headers: ['Méthode', 'Outil', 'Procédure'],
        rows: [
          { cells: ['Recherche site:', 'Google Search', 'Taper site:monsite.fr "mot-clé" et vérifier si plusieurs pages apparaissent'] },
          { cells: ['Rapport Performance', 'Google Search Console', 'Filtrer par requête, vérifier l\'onglet «\u00a0Pages\u00a0»\u00a0: si plusieurs URL se partagent les impressions, il y a cannibalisation'] },
          { cells: ['Suivi de positions', 'Outils tiers (Semrush, Ahrefs, Haloscan)', 'Identifier les mots-clés pour lesquels l\'URL classée change régulièrement'] },
          { cells: ['Audit de contenu', 'Crawl du site', 'Identifier les pages dont les balises title et H1 ciblent les mêmes expressions'] },
        ],
      },
    },
    {
      title: 'Stratégies de résolution',
      tableau: {
        caption: 'Stratégies de résolution de la cannibalisation SEO',
        headers: ['Stratégie', 'Cas d\'application', 'Mise en œuvre'],
        rows: [
          { cells: ['Consolidation', 'Deux pages couvrent le même sujet avec un contenu complémentaire', 'Fusionner le contenu dans la page la plus performante, rediriger l\'autre en 301'] },
          { cells: ['Redirection 301', 'Une page est clairement supérieure à l\'autre', 'Rediriger la page faible vers la page forte'] },
          { cells: ['Canonicalisation', 'Les deux pages doivent exister (ex\u00a0: filtres e-commerce)', 'Ajouter rel="canonical" vers la page principale'] },
          { cells: ['Différenciation intentionnelle', 'Les pages ciblent en réalité des intentions distinctes', 'Réécrire les titres, H1 et contenus pour différencier clairement les angles'] },
          { cells: ['Maillage interne directionnel', 'La hiérarchie entre pages n\'est pas claire pour Google', 'Créer des liens internes explicites de la page secondaire vers la page principale'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'identification des pages en concurrence interne sur les mêmes mots-clés' },
      { text: 'Les méthodes de diagnostic via Google Search Console et les outils tiers' },
      { text: 'Les stratégies de résolution (consolidation, redirection, canonicalisation)' },
      { text: 'L\'impact sur la stabilité des positions et le trafic organique' },
    ],
    neCouvrePas: [
      { text: 'La stratégie de contenu et la planification éditoriale', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'L\'optimisation on-page d\'une page individuelle', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Le contenu dupliqué entre sites différents (duplicate content externe)' },
      { text: 'La structuration du contenu pour la citabilité IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Indexation', slug: 'indexation' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
