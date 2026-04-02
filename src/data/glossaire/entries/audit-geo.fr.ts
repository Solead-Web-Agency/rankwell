/**
 * GLOSSAIRE — Audit GEO
 * Diagnostic de la visibilité d'une marque dans les réponses des moteurs IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Audit GEO : définition & cadre',
    description: 'L\'audit GEO désigne l\'analyse structurée de la visibilité d\'une marque dans les réponses des moteurs IA. Composantes, méthode de simulation LLM et benchmark concurrentiel.',
  },

  definition: {
    paragraphs: [
      'L\'audit GEO désigne l\'analyse structurée de la visibilité d\'une marque dans les réponses des moteurs IA, visant à identifier les forces, les faiblesses et les leviers d\'optimisation de sa présence dans les réponses génératives. L\'audit GEO constitue la phase diagnostique de toute stratégie de GEO.',
    ],
    nucleaire: 'Selon Rankwell, un audit GEO révèle des failles invisibles à un audit SEO. Un site peut obtenir un score technique parfait (temps de chargement rapide, balisage HTML conforme, profil de backlinks solide) tout en étant absent du Knowledge Graph des LLM, dépourvu de densité factuelle et jamais cité dans les réponses génératives. Les deux diagnostics sont complémentaires\u00a0: l\'un évalue l\'infrastructure du site, l\'autre évalue la réputation informationnelle de la marque.',
  },

  cadre: {
    paragraphs: [
      'L\'audit GEO s\'inscrit dans les trois premières étapes de la Méthode Rankwell GEO (Cartographie des entités, Simulation LLM, Benchmark concurrentiel), complétées par les diagnostics on-site et off-site. Il produit un état des lieux mesurable qui alimente le calcul du GEO Score Rankwell.',
      'La méthodologie d\'audit GEO formalisée par Rankwell teste 30+ requêtes représentatives du territoire thématique de la marque, soumises à trois moteurs IA distincts (ChatGPT, Perplexity, Gemini). Le GEO Score qui en résulte décompose la visibilité IA en trois dimensions pondérées\u00a0: Univers Informatif (UI, 40\u00a0%), Légitimité et Citabilité (LC, 30\u00a0%), Densité Factuelle (DF, 30\u00a0%). Ce scoring est calculé pour la marque auditée et pour chacun de ses concurrents, sur un panel identique de requêtes.',
    ],
    tableau: {
      caption: 'Distinction formalisée\u00a0: audit SEO vs audit GEO',
      headers: ['Critère', 'Audit SEO', 'Audit GEO'],
      rows: [
        { cells: ['Objet', 'Le site web (pages, architecture, liens)', 'La marque et ses entités dans l\'écosystème IA'] },
        { cells: ['Question centrale', '« Le site est-il correctement indexé et classé\u00a0? »', '« La marque est-elle citée, et comment\u00a0? »'] },
        { cells: ['Métrique principale', 'Positions, crawlabilité, Core Web Vitals', 'Type de citation (0-7), GEO Score Rankwell'] },
        { cells: ['Périmètre technique', 'Robots.txt, sitemap, vitesse, balisage HTML', 'Données structurées, entités Knowledge Graph, accessibilité aux crawlers IA'] },
        { cells: ['Périmètre contenu', 'Mots-clés, cannibalisation, structure Hn', 'Citabilité par passage, densité factuelle, auto-suffisance'] },
        { cells: ['Périmètre off-site', 'Profil de backlinks, autorité de domaine', 'Sources tierces, cohérence des mentions, présence dans les corpus IA'] },
        { cells: ['Concurrence', 'SERP\u00a0: qui occupe les positions\u00a0?', 'Réponses IA\u00a0: qui est cité, à quel type\u00a0?'] },
      ],
    },
  },

  sections: [
    {
      title: 'Les 5 composantes spécifiques d\'un audit GEO',
      paragraphs: [
        'L\'audit GEO couvre cinq composantes distinctes de celles d\'un audit SEO. Chaque composante mobilise des outils et des méthodes propres à l\'analyse de la visibilité IA.',
      ],
      tableau: {
        caption: 'Composantes d\'un audit GEO',
        headers: ['#', 'Composante', 'Ce qu\'elle mesure', 'Livrable'],
        rows: [
          { cells: ['1', 'Simulation LLM', 'Citations actuelles de la marque sur 30+ requêtes soumises à 3+ moteurs IA (ChatGPT, Perplexity, Gemini)', 'Rapport de mentions par moteur, type de citation (0-7) par requête'] },
          { cells: ['2', 'Cartographie du Knowledge Graph', 'Entités, attributs et relations que les LLM associent à la marque', 'Knowledge Graph formalisé (7 types d\'entités systématiques + entités sectorielles)'] },
          { cells: ['3', 'Évaluation de la densité factuelle', 'Ratio de faits vérifiables par passage de contenu on-site', 'Score DF par page, identification des passages sans donnée factuelle'] },
          { cells: ['4', 'Analyse des sources tierces citables', 'Présence, cohérence et qualité des mentions de la marque dans les sources externes', 'Cartographie des sources, écarts de légitimité par rapport aux concurrents'] },
          { cells: ['5', 'Benchmark concurrentiel GEO Score', 'Comparaison de la visibilité IA de la marque à celle de ses concurrents directs', 'Classement comparé par pilier (UI, LC, DF), écarts chiffrés'] },
        ],
      },
    },
    {
      title: 'Simulation LLM\u00a0: méthode',
      paragraphs: [
        'La simulation LLM consiste à soumettre un panel de 30+ requêtes représentatives du territoire thématique de la marque à trois moteurs IA minimum, puis à analyser les réponses pour identifier si la marque est citée, à quel type (0-7) et dans quel contexte. Le panel de requêtes est construit à partir de la cartographie des entités (composante 2), ce qui garantit que les requêtes testées correspondent au territoire réel de la marque.',
        'La simulation est réalisée sur au minimum trois moteurs IA pour couvrir la dimension multi-moteurs de la visibilité. Un même contenu peut être cité par Perplexity (qui référence systématiquement ses sources web) et absent des réponses de ChatGPT (qui synthétise davantage à partir de son corpus d\'entraînement).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'L\'état de la visibilité IA d\'une marque à un instant donné' },
      { text: 'Le Knowledge Graph de la marque tel que perçu par les LLM' },
      { text: 'Le benchmark concurrentiel sur les réponses génératives' },
      { text: 'L\'évaluation on-site et off-site sous l\'angle de la citabilité', link: { slug: 'citabilite', label: 'citabilité' } },
      { text: 'Le calcul du GEO Score Rankwell', link: { slug: 'geo-score', label: 'GEO Score Rankwell' } },
    ],
    neCouvrePas: [
      { text: 'L\'audit SEO technique classique\u00a0: crawlabilité, vitesse, Core Web Vitals', link: { slug: 'audit-seo', label: 'Audit SEO' } },
      { text: 'L\'exécution des actions correctives identifiées' },
      { text: 'Le suivi continu de la visibilité IA dans le temps (monitoring)' },
      { text: 'L\'analyse spécifique des AI Overviews de Google (composante d\'un audit GEO, pas la totalité)', link: { slug: 'ai-overviews', label: 'AI Overviews' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'Méthode Rankwell GEO', slug: 'methode-rankwell-geo' },
    { label: 'GEO Score Rankwell', slug: 'geo-score' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
  ],
};
