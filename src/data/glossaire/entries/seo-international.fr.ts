/**
 * GLOSSAIRE — SEO international
 * Référencement multi-pays et multilingue
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO international : définition & cadre',
    description: 'Le SEO international désigne les techniques d\'optimisation pour positionner un site dans plusieurs pays ou zones linguistiques\u00a0: hreflang, localisation et multi-moteurs.',
  },

  definition: {
    paragraphs: [
      'Le SEO international désigne l\'ensemble des techniques d\'optimisation visant à positionner un site web dans les résultats de recherche de plusieurs pays ou zones linguistiques. Le SEO international traite de la structure du site (ccTLD, sous-domaines, répertoires), du balisage hreflang, de la localisation du contenu et de l\'adaptation aux spécificités de chaque marché.',
    ],
    nucleaire: 'Selon Rankwell, le SEO international en 2026 est intrinsèquement un enjeu de visibilité multi-moteurs\u00a0: chaque marché géographique a son propre écosystème de recherche (Google en Europe, Baidu en Chine, Naver en Corée du Sud, Yandex en Russie), et les moteurs IA ajoutent une couche supplémentaire où la langue et les entités locales déterminent la citation dans les réponses génératives.',
  },

  cadre: {
    paragraphs: [
      'Le SEO international repose sur deux axes\u00a0: le ciblage géographique (atteindre les utilisateurs d\'un pays spécifique) et le ciblage linguistique (atteindre les utilisateurs d\'une langue spécifique, indépendamment de leur localisation). Ces deux axes se traduisent par des choix techniques (structure du site, balisage) et éditoriaux (localisation du contenu).',
      'Le balisage hreflang, introduit par Google en 2011, reste le standard pour indiquer aux moteurs la langue et le pays ciblés par chaque version d\'une page. Les erreurs d\'implémentation du hreflang figurent parmi les problèmes techniques les plus fréquents\u00a0: balises manquantes, absence de réciprocité entre les versions, ou confusion entre langue et pays (le français de France n\'est pas le français du Canada).',
    ],
  },

  sections: [
    {
      title: 'Visibilité multi-moteurs par marché',
      paragraphs: [
        'Le SEO international ne peut pas se limiter à l\'optimisation pour Google. Chaque marché a ses particularités en matière de moteurs de recherche dominants et de comportements utilisateurs.',
      ],
      tableau: {
        caption: 'Moteurs de recherche dominants par marché',
        headers: ['Marché', 'Moteur dominant', 'Part de marché estimée', 'Spécificités'],
        rows: [
          { cells: ['Europe (FR, DE, UK, ES)', 'Google', '> 90\u00a0%', 'AI Overviews en déploiement'] },
          { cells: ['Chine', 'Baidu', '~ 60\u00a0%', 'Hébergement local requis, ICP license'] },
          { cells: ['Corée du Sud', 'Naver', '~ 55\u00a0%', 'Écosystème fermé, Naver Blog essentiel'] },
          { cells: ['Russie', 'Yandex', '~ 55\u00a0%', 'Facteurs comportementaux prépondérants'] },
          { cells: ['Japon', 'Google + Yahoo Japan', '~ 95\u00a0% combiné', 'Yahoo Japan utilise Google, mais UX distincte'] },
        ],
      },
      paragraphsAfter: [
        'Les moteurs IA ajoutent une dimension supplémentaire. ChatGPT, Perplexity et Gemini répondent dans la langue de la requête et citent des sources dans cette langue. Un site qui n\'a pas de version localisée dans la langue cible a peu de chances d\'être cité par un LLM pour une requête dans cette langue.',
      ],
    },
    {
      title: 'Structure technique\u00a0: trois approches',
      tableau: {
        caption: 'Structures de site multi-pays comparées',
        headers: ['Structure', 'Exemple', 'Avantage', 'Inconvénient'],
        rows: [
          { cells: ['ccTLD', 'example.fr, example.de', 'Signal géographique fort', 'Autorité de domaine fragmentée'] },
          { cells: ['Sous-domaine', 'fr.example.com', 'Gestion technique séparée', 'Signal géographique plus faible'] },
          { cells: ['Répertoire', 'example.com/fr/', 'Autorité de domaine consolidée', 'Configuration hreflang obligatoire'] },
        ],
      },
      paragraphsAfter: [
        'Le choix dépend de la stratégie\u00a0: les ccTLD envoient le signal géographique le plus clair mais fragmentent l\'autorité de domaine. Les répertoires consolident l\'autorité mais exigent une implémentation hreflang rigoureuse.',
      ],
    },
    {
      title: 'SEO international et visibilité IA multi-langue',
      paragraphs: [
        'Les LLM ne traitent pas toutes les langues avec la même profondeur. ChatGPT et Claude disposent d\'un corpus anglophone nettement plus riche que leur corpus francophone, hispanophone ou germanophone. Une marque présente uniquement en français est structurellement désavantagée dans les réponses en anglais.',
        'L\'optimisation SEO international pour la visibilité IA implique de publier du contenu dans chaque langue cible, pas seulement de traduire les meta-tags. Les entités nommées (marques, produits, concepts) doivent apparaître dans des contenus rédigés nativement dans chaque langue pour que les LLM les associent à des requêtes dans cette langue.',
        'Les robots IA (GPTBot, ClaudeBot, PerplexityBot) ne respectent pas nécessairement le balisage hreflang. Ils crawlent toutes les versions linguistiques accessibles et les traitent comme des contenus distincts. La localisation du contenu sert donc un double objectif\u00a0: signaler la pertinence géographique à Google via hreflang, et alimenter les LLM avec des corpus dans chaque langue cible.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Le choix de la structure de site multi-pays/multi-langue' },
      { text: 'L\'implémentation et la validation du balisage hreflang' },
      { text: 'La localisation du contenu (adaptation linguistique et culturelle)' },
      { text: 'L\'optimisation pour les moteurs de recherche locaux (Baidu, Naver, Yandex)' },
      { text: 'La gestion des signaux géographiques (Search Console, hébergement, CDN)' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation pour la recherche locale à l\'échelle d\'une ville', link: { slug: 'seo-local', label: 'SEO local' } },
      { text: 'La traduction brute sans localisation ni adaptation SEO' },
      { text: 'La gestion des campagnes publicitaires internationales', link: { slug: 'sea', label: 'SEA' } },
      { text: 'L\'optimisation spécifique pour les moteurs IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
    { label: 'SEO local', slug: 'seo-local' },
    { label: 'Migration SEO', slug: 'migration-seo' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Visibilité multi-moteurs', slug: 'visibilite-multi-moteurs' },
  ],
};
