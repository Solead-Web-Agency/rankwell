/**
 * GLOSSAIRE — SXO (Search Experience Optimization)
 * Convergence SEO + UX — Parcours de recherche complet
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SXO (Search Experience Optimization) : définition & cadre',
    description: 'Le SXO désigne l\'optimisation conjointe du référencement naturel et de l\'expérience utilisateur sur le parcours complet de recherche. Cadre, périmètre et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Le SXO (Search Experience Optimization) désigne l\'optimisation conjointe du référencement naturel (SEO) et de l\'expérience utilisateur (UX) tout au long du parcours de recherche, depuis la formulation de la requête jusqu\'à l\'accomplissement de l\'objectif sur le site. Le terme a été popularisé par Myriam Jessier et la communauté SEO francophone vers 2018-2019. Le SXO considère que le positionnement dans les SERP et la satisfaction de l\'utilisateur après le clic forment un continuum indissociable.',
    ],
    nucleaire: 'Selon Rankwell, le SXO en 2026 ne se limite plus au parcours clic-page-conversion\u00a0: avec 65\u00a0% de zero-click queries (étude SparkToro/Datos, 2024), l\'enjeu se déplace vers la qualité du passage cité dans la réponse IA. Un contenu SXO performant doit optimiser simultanément l\'expérience post-clic classique et la citabilité du passage par les moteurs génératifs.',
  },

  cadre: {
    paragraphs: [
      'Le SXO naît du constat que le SEO et l\'UX ont longtemps été traités comme des disciplines séparées. Le SEO attirait le trafic. L\'UX convertissait ce trafic. Le SXO les fusionne en considérant le parcours complet de l\'utilisateur\u00a0: la requête, le résultat affiché, le clic, la navigation sur le site et l\'accomplissement de l\'objectif (achat, inscription, information).',
    ],
  },

  sections: [
    {
      title: 'SXO, SEO et CRO\u00a0: comparaison',
      paragraphs: [
        'Le SEO, le CRO et le SXO partagent l\'objectif d\'améliorer la performance d\'un site, mais diffèrent par leur périmètre et leurs métriques.',
      ],
      tableau: {
        caption: 'SEO, CRO et SXO comparés',
        headers: ['Critère', 'SEO', 'CRO', 'SXO'],
        rows: [
          { cells: ['Objectif', 'Augmenter la visibilité dans les SERP', 'Augmenter le taux de conversion sur le site', 'Optimiser le parcours complet, de la requête à la conversion'] },
          { cells: ['Métrique principale', 'Positions, trafic organique', 'Taux de conversion, revenu par session', 'Taux de rebond ajusté, taux de tâche accomplie, dwell time'] },
          { cells: ['Périmètre', 'SERP et facteurs de classement', 'Pages de conversion et tunnel d\'achat', 'Requête + SERP + page + conversion'] },
          { cells: ['Signal Google', 'Backlinks, contenu, technique', 'Indirect (engagement utilisateur)', 'Core Web Vitals, signaux d\'engagement, satisfaction post-clic'] },
          { cells: ['Exemple d\'action', 'Optimiser les balises title et la structure Hn', 'Tester deux variantes de bouton d\'achat (A/B test)', 'Aligner le contenu de la page sur l\'intention exacte de la requête'] },
        ],
      },
      paragraphsAfter: [
        'Un site peut avoir un bon SEO (positions élevées) et un mauvais SXO (taux de rebond élevé parce que la page ne répond pas à l\'intention). Un site peut avoir un bon CRO (tunnel de conversion optimisé) et un mauvais SXO (les utilisateurs n\'arrivent jamais au tunnel parce que le SEO est défaillant).',
      ],
    },
    {
      title: 'Composantes du SXO',
      items: [
        { label: 'Visibilité dans les SERP', description: 'Positionnement, rich snippets, featured snippets, sitelinks. La première impression de l\'utilisateur avec le site se fait dans la page de résultats, pas sur le site lui-même.' },
        { label: 'Adéquation intention-contenu', description: 'La page de destination doit répondre précisément à l\'intention identifiée derrière la requête. Un décalage entre l\'intention et le contenu produit un rebond immédiat, signal négatif pour Google.' },
        { label: 'Performance technique', description: 'Core Web Vitals (LCP, INP, CLS), temps de chargement, accessibilité mobile. Les Core Web Vitals sont devenus signal de classement Google en juin 2021 (Page Experience Update). Ces métriques affectent à la fois le classement et la satisfaction utilisateur.' },
        { label: 'Parcours de conversion', description: 'Navigation claire, appels à l\'action visibles, friction minimale entre l\'arrivée et l\'objectif. Le SXO ne s\'arrête pas au clic\u00a0: il optimise ce qui se passe ensuite.' },
      ],
    },
    {
      title: 'Parcours utilisateur classique vs parcours IA',
      paragraphs: [
        'L\'émergence des moteurs IA transforme le SXO en créant un parcours alternatif où le clic n\'est plus systématique. Le tableau suivant formalise les deux parcours et leurs implications pour l\'optimisation.',
      ],
      tableau: {
        caption: 'Parcours classique (SERP) et parcours IA comparés',
        headers: ['Étape', 'Parcours classique (SERP)', 'Parcours IA (réponse générée)'],
        rows: [
          { cells: ['Déclencheur', 'L\'utilisateur tape une requête dans Google', 'L\'utilisateur pose une question à ChatGPT, Perplexity ou Gemini'] },
          { cells: ['Résultat affiché', 'Liste de 10 liens bleus + rich snippets', 'Réponse synthétique rédigée avec sources citées'] },
          { cells: ['Décision de l\'utilisateur', 'Clic sur un résultat', 'Lecture de la réponse, clic sur la source optionnel'] },
          { cells: ['Enjeu SXO', 'Optimiser le title/meta description pour le clic, puis la page pour la satisfaction', 'Optimiser la qualité du passage citable pour être repris dans la réponse'] },
          { cells: ['Métrique clé', 'CTR, taux de rebond, dwell time', 'Présence dans la réponse, attribution de la source'] },
          { cells: ['Signal de qualité', 'Core Web Vitals, engagement sur la page', 'Clarté factuelle du contenu, structure des données, autorité de la source'] },
        ],
      },
      paragraphsAfter: [
        'Pour le parcours IA, l\'enjeu SXO se déplace\u00a0: il ne s\'agit plus d\'optimiser l\'expérience post-clic, mais d\'optimiser la qualité de la présence dans la réponse elle-même. Un extrait bien formulé, factuel et attribué à la source constitue une bonne expérience de recherche même sans clic.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Optimisation conjointe SEO + UX sur le parcours complet' },
      { text: 'Adéquation entre l\'intention de recherche et le contenu de la page' },
      { text: 'Performance technique (Core Web Vitals, mobile, accessibilité)', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'Optimisation de la présence dans les réponses IA' },
      { text: 'Réduction du taux de rebond par l\'alignement intention-contenu' },
    ],
    neCouvrePas: [
      { text: 'La stratégie de contenu éditoriale', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'L\'architecture du maillage interne', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'L\'acquisition de liens externes', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
      { text: 'La mesure de la visibilité IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Intention de recherche', slug: 'intention-de-recherche' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
  ],
};
