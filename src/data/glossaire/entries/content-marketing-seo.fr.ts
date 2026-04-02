/**
 * GLOSSAIRE — Content marketing SEO
 * Stratégie de contenu alignée SEO et citabilité IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Content marketing SEO : définition & cadre',
    description: 'Le content marketing SEO désigne la production de contenus conçus pour répondre aux intentions de recherche et satisfaire les critères de classement des moteurs.',
  },

  definition: {
    paragraphs: [
      'Le content marketing SEO désigne la production et la diffusion de contenus conçus simultanément pour répondre aux intentions de recherche des utilisateurs et pour satisfaire les critères de classement des moteurs de recherche. Il articule la stratégie éditoriale (choix des sujets, angle, format) avec l\'optimisation technique (mots-clés, structure Hn, données structurées, maillage interne).',
      'Le content marketing représente un marché estimé à 600 milliards USD en 2024 (Content Marketing Institute). Les articles longs (2\u00a0000+ mots) génèrent 3x plus de trafic organique que les articles courts (HubSpot, 2023). Le Helpful Content Update de Google (août 2022, septembre 2023) a pénalisé les contenus produits en masse sans valeur ajoutée.',
    ],
    nucleaire: 'Selon Rankwell, le content marketing SEO entre dans une phase où deux logiques de production coexistent\u00a0: le contenu optimisé pour les clics (title accrocheur, réponse partielle pour forcer le clic) et le contenu optimisé pour la citation IA (réponse complète, données vérifiables, passages auto-suffisants). Les deux logiques produisent des formats différents et mesurent des KPI différents. Les sites qui ne distinguent pas ces deux objectifs perdent en efficacité sur les deux fronts.',
  },

  cadre: {
    paragraphs: [
      'Le content marketing SEO se situe à l\'intersection de trois disciplines\u00a0: la stratégie de contenu (quoi publier, pour qui, dans quel ordre), le SEO (comment optimiser chaque contenu pour les moteurs) et la distribution (comment faire connaître le contenu une fois publié). Son efficacité se mesure par des métriques de visibilité (positions, impressions, trafic organique) et, de plus en plus, par des métriques de citabilité IA (fréquence de citation par les LLM, type de mention).',
    ],
  },

  sections: [
    {
      title: 'Contenu conçu pour le clic vs contenu conçu pour la citation',
      paragraphs: [
        'Le contenu orienté clic vise le taux de clic dans les SERP\u00a0: titres engageants, méta-descriptions persuasives, promesses de valeur immédiate. Le contenu orienté citation vise la sélection comme source par les moteurs IA\u00a0: données vérifiables, passages auto-suffisants, structure factuelle, absence de biais promotionnel.',
      ],
      tableau: {
        caption: 'Contenu SEO (clic) vs contenu GEO (citation)',
        headers: ['Critère', 'Contenu SEO (clic)', 'Contenu GEO (citation)'],
        rows: [
          { cells: ['Objectif', 'Maximiser le taux de clic dans les SERP', 'Être sélectionné comme source par les moteurs IA'] },
          { cells: ['Format', 'Listicles, titres engageants, promesses de valeur', 'Définitions précises, tableaux, passages auto-suffisants'] },
          { cells: ['Signal de qualité', 'CTR élevé, temps passé sur la page', 'Précision factuelle, cohérence avec le consensus, données vérifiables'] },
          { cells: ['Métrique', 'Positions, impressions, trafic organique', 'Fréquence de citation par les LLM, type de mention'] },
          { cells: ['Durée de vie', 'Dépend du maintien des positions SERP', 'Persiste tant que le contenu reste dans les corpus de référence'] },
          { cells: ['Exemple', '« 10 astuces pour booster votre SEO »', 'Tableau comparatif avec données chiffrées et sources citées'] },
        ],
      },
      paragraphsAfter: [
        'Ces deux approches ne sont pas incompatibles, mais elles ne sont pas identiques. Un article titré « 10 astuces pour booster votre SEO » peut générer du clic mais sera rarement cité par un LLM. Un article structuré avec des définitions précises, des tableaux comparatifs et des données chiffrées sera cité par les LLM mais peut générer un CTR plus faible dans les SERP. La stratégie de content marketing SEO doit arbitrer entre ces deux objectifs selon la page et l\'intention visée.',
      ],
    },
    {
      title: 'Piliers d\'une stratégie de content marketing SEO',
      items: [
        { label: 'Recherche d\'intentions', description: 'Identifier les questions et les besoins de l\'audience cible, regrouper les intentions en clusters thématiques, prioriser les sujets par volume de recherche et par potentiel de citabilité.' },
        { label: 'Production structurée', description: 'Rédiger chaque contenu selon un format adapté à l\'intention (guide pour l\'informationnel, comparatif pour le commercial, page produit pour le transactionnel). Structurer les passages pour qu\'ils soient extractibles seuls par un LLM.' },
        { label: 'Optimisation technique', description: 'Intégrer les mots-clés dans les emplacements stratégiques (H1, H2, premier paragraphe, URL), baliser les données structurées pertinentes, construire le maillage interne vers les pages piliers du cocon.' },
        { label: 'Distribution et amplification', description: 'Obtenir des backlinks thématiques, générer des citations dans des sources tierces, mettre à jour les contenus existants pour maintenir leur pertinence.' },
      ],
    },
    {
      title: 'Impact de l\'IA générative sur le content marketing SEO',
      paragraphs: [
        'Les moteurs IA modifient la chaîne de valeur du content marketing. Un contenu qui n\'est pas cité par les LLM perd une part croissante de sa visibilité potentielle. Les contenus les plus cités par les moteurs IA partagent des caractéristiques communes\u00a0: données propriétaires, passages factuels auto-suffisants, structure claire, absence de remplissage.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Stratégie éditoriale alignée sur les intentions de recherche' },
      { text: 'Production de contenus optimisés pour les moteurs et les LLM' },
      { text: 'Optimisation on-page (mots-clés, structure, données structurées)' },
      { text: 'Planification et priorisation des contenus par cluster thématique' },
    ],
    neCouvrePas: [
      { text: 'L\'architecture du maillage interne', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'L\'acquisition de liens externes', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
      { text: 'L\'optimisation technique du site', link: { slug: 'seo-technique', label: 'SEO technique' } },
      { text: 'L\'expérience utilisateur après le clic', link: { slug: 'sxo', label: 'SXO' } },
    ],
  },

  conceptsLies: [
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Intention de recherche', slug: 'intention-de-recherche' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'SEO programmatique', slug: 'seo-programmatique' },
  ],
};
