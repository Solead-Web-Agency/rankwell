/**
 * GLOSSAIRE — GEO Score Rankwell
 * Indicateur composite de visibilité IA développé par Rankwell
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'GEO Score : définition & cadre',
    description: 'Le GEO Score Rankwell mesure la visibilité d\'une marque dans les réponses des moteurs IA. Trois piliers (UI, LC, DF), formule de calcul et échelle d\'interprétation.',
  },

  definition: {
    paragraphs: [
      'Le GEO Score Rankwell désigne l\'indicateur composite développé par Rankwell pour mesurer la visibilité d\'une marque dans les réponses des moteurs IA. Il agrège trois dimensions (Univers Informatif, Légitimité et Citabilité, Densité Factuelle) en un score sur 100 qui permet de comparer une marque à ses concurrents sur un même périmètre de requêtes.',
    ],
    nucleaire: 'Selon Rankwell, le GEO Score Rankwell comble un manque structurel du marché\u00a0: les métriques SEO classiques (DA, DR, positions) ne capturent pas la visibilité dans les réponses génératives, et les outils de monitoring IA existants mesurent la fréquence des mentions sans évaluer leur qualité ni leurs causes.',
  },

  cadre: {
    paragraphs: [
      'Le GEO Score Rankwell est calculé à l\'étape 6 de la Méthode Rankwell GEO, après la cartographie des entités, la simulation LLM, le benchmark concurrentiel et les diagnostics on-site et off-site. Le score n\'est pas un indicateur isolé\u00a0: il est le résultat d\'un processus d\'audit structuré.',
    ],
  },

  sections: [
    {
      title: 'Formule de calcul',
      paragraphs: [
        'Le GEO Score Rankwell est la moyenne pondérée de trois sous-scores, chacun noté sur 100\u00a0: GEO Score = (UI × 0,40) + (LC × 0,30) + (DF × 0,30).',
      ],
      tableau: {
        caption: 'Sous-scores du GEO Score Rankwell',
        headers: ['Sous-score', 'Nom complet', 'Poids', 'Ce qu\'il mesure'],
        rows: [
          { cells: ['UI', 'Univers Informatif', '40\u00a0%', 'Étendue du territoire thématique couvert par la marque dans le Knowledge Graph des LLM'] },
          { cells: ['LC', 'Légitimité et Citabilité', '30\u00a0%', 'Crédibilité perçue par les LLM, qualité des sources tierces, mentions off-site'] },
          { cells: ['DF', 'Densité Factuelle', '30\u00a0%', 'Richesse en faits vérifiables par passage\u00a0: chiffres, définitions, attributs d\'entités'] },
        ],
      },
    },
    {
      title: 'Sous-scores détaillés',
      paragraphs: [
        'Univers Informatif (UI) se calcule à partir du nombre d\'entités de la marque reconnues par les LLM, de la diversité des sujets couverts et de la profondeur du maillage entre ces entités. Un UI élevé signifie que le LLM dispose d\'un modèle riche et varié de la marque.',
        'Légitimité et Citabilité (LC) se calcule à partir des citations par des sources tierces, de la présence de données structurées exploitables et de la cohérence entre les mentions off-site et le contenu on-site. Un LC élevé signifie que le LLM a des raisons de faire confiance à la marque comme source.',
        'Densité Factuelle (DF) se calcule à partir du ratio de faits vérifiables par passage de contenu\u00a0: chiffres sourcés, définitions canoniques, attributs d\'entités documentés. Un DF élevé signifie que le contenu de la marque fournit des passages directement extractibles par le LLM.',
      ],
    },
    {
      title: 'Échelle d\'interprétation',
      tableau: {
        caption: 'Échelle d\'interprétation du GEO Score Rankwell',
        headers: ['Plage', 'Niveau', 'Interprétation'],
        rows: [
          { cells: ['0-30', 'Invisible', 'La marque est absente ou marginale dans les réponses IA'] },
          { cells: ['31-50', 'Émergent', 'La marque apparaît occasionnellement, citations Type 1-2'] },
          { cells: ['51-65', 'Suiveur', 'La marque est citée régulièrement mais pas en position de référence'] },
          { cells: ['66-80', 'Établi', 'La marque obtient des citations Type 4-5 sur ses sujets principaux'] },
          { cells: ['81-100', 'Référence', 'La marque est la source prioritaire citée par les LLM sur son territoire'] },
        ],
      },
    },
    {
      title: 'Distinction\u00a0: GEO Score vs métriques SEO',
      paragraphs: [
        'Le GEO Score Rankwell ne remplace pas les métriques SEO. Il mesure une dimension différente de la visibilité.',
      ],
      tableau: {
        caption: 'GEO Score Rankwell vs métriques SEO',
        headers: ['Métrique', 'Ce qu\'elle mesure', 'Limites en contexte GEO'],
        rows: [
          { cells: ['Domain Authority (DA/DR)', 'Puissance du profil de liens', 'Ne prédit pas la citabilité par les LLM'] },
          { cells: ['Position SERP', 'Classement dans les résultats Google', 'Ne capture pas les citations dans les réponses IA'] },
          { cells: ['Trafic organique', 'Volume de visites depuis les moteurs', 'Ne mesure pas les mentions sans clic'] },
          { cells: ['GEO Score Rankwell', 'Visibilité dans les réponses génératives', 'Ne mesure pas le positionnement SERP classique'] },
        ],
      },
    },
    {
      title: 'Contexte de marché',
      paragraphs: [
        'Les outils de monitoring de visibilité IA existants (Otterly, Profound, Peec AI) mesurent la fréquence des mentions d\'une marque dans les réponses génératives. Selon Gartner (2025), 30\u00a0% du trafic de recherche sera redirigé vers des moteurs IA d\'ici 2026. Par ailleurs, Brightedge (2024) estime que 58\u00a0% des marketeurs n\'ont aucun outil pour mesurer leur visibilité dans les réponses des LLM. Le GEO Score Rankwell se différencie en combinant la mesure de la visibilité avec le diagnostic de ses causes (UI, LC, DF).',
      ],
    },
    {
      title: 'Comparabilité',
      paragraphs: [
        'Le GEO Score Rankwell n\'a de sens que comparé. Un score de 62 ne signifie rien en absolu. Il prend son sens quand le concurrent principal affiche 78\u00a0: l\'écart de 16 points identifie un retard mesurable. Le benchmark concurrentiel (étape 3 de la Méthode Rankwell GEO) fournit ce contexte.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La mesure composite de la visibilité IA d\'une marque (UI, LC, DF)' },
      { text: 'La comparaison entre une marque et ses concurrents sur un même panel de requêtes' },
      { text: 'L\'identification des piliers les plus faibles (diagnostic ciblé)' },
      { text: 'Le suivi de la progression dans le temps après actions correctives' },
    ],
    neCouvrePas: [
      { text: 'L\'audit détaillé des causes d\'un score faible', link: { slug: 'audit-geo', label: 'Audit GEO' } },
      { text: 'La mesure de la visibilité dans les SERP classiques', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Le monitoring en temps réel des citations IA (le score est calculé lors d\'un audit)' },
      { text: 'La qualité individuelle de chaque citation', link: { slug: 'citabilite', label: 'Citabilité' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Méthode Rankwell GEO', slug: 'methode-rankwell-geo' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Audit GEO', slug: 'audit-geo' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
  ],
};
