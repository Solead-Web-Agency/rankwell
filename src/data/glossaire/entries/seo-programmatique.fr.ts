/**
 * GLOSSAIRE — SEO programmatique
 * Génération de pages à grande échelle à partir de templates et données
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'SEO programmatique : définition & cadre',
    description: 'Le SEO programmatique désigne la génération à grande échelle de pages optimisées à partir de templates et de bases de données. Conditions, risques et limites face aux LLM.',
  },

  definition: {
    paragraphs: [
      'Le SEO programmatique désigne la génération à grande échelle de pages web optimisées pour les moteurs de recherche, à partir de modèles (templates) alimentés par des bases de données structurées. Chaque page cible une requête spécifique (souvent longue traîne) en combinant des variables dynamiques (localisation, catégorie, attribut produit) avec un gabarit éditorial constant.',
    ],
    nucleaire: 'Selon Rankwell, le SEO programmatique fonctionne à condition que chaque page générée apporte une valeur informationnelle distincte. Les moteurs IA, qui évaluent la qualité intrinsèque du contenu plutôt que le volume de pages indexées, pénalisent le contenu programmatique qui se limite à des variations superficielles d\'un même gabarit.',
  },

  cadre: {
    paragraphs: [
      'Le SEO programmatique repose sur un principe d\'échelle\u00a0: là où le content marketing SEO produit des dizaines de pages éditoriales par mois, le SEO programmatique peut en générer des milliers en une opération. Les cas d\'usage classiques sont les annuaires géolocalisés (« plombier + ville »), les fiches produit e-commerce, les comparateurs et les pages de combinaisons d\'attributs.',
    ],
  },

  sections: [
    {
      title: 'SEO programmatique vs contenu éditorial',
      paragraphs: [
        'Le contenu éditorial est rédigé individuellement, avec un angle, une structure et un propos propres à chaque page. Le contenu programmatique est généré à partir d\'un template et de données, avec des variations mécaniques entre les pages. Le premier vise la profondeur et l\'originalité. Le second vise la couverture et le volume.',
        'Ces deux approches sont complémentaires, pas interchangeables. Le contenu éditorial construit la topical authority et la citabilité IA. Le contenu programmatique capture le trafic de longue traîne. Un site qui ne fait que du programmatique manque de profondeur. Un site qui ne fait que de l\'éditorial manque de couverture.',
      ],
    },
    {
      title: 'Risques spécifiques',
      tableau: {
        caption: 'Risques du SEO programmatique',
        headers: ['Risque', 'Cause', 'Détection', 'Solution'],
        rows: [
          { cells: ['Thin content', 'Template trop pauvre ou données injectées insuffisantes', 'Baisse d\'indexation dans la Google Search Console, pages filtrées', 'Enrichir le template avec des données uniques par page, ajouter du contenu éditorial'] },
          { cells: ['Cannibalisation', 'Plusieurs pages programmatiques ciblent des requêtes trop proches', 'Deux pages du même site en concurrence sur la même SERP, fluctuations de positions', 'Cartographie rigoureuse des requêtes cibles avant génération, regroupement des variantes proches'] },
          { cells: ['Détection par les LLM', '500+ pages avec la même structure et des variations mineures', 'Absence totale de citations IA pour les pages programmatiques', 'Injecter des données factuelles uniques (prix, disponibilité, coordonnées vérifiables)'] },
        ],
      },
      paragraphsAfter: [
        'Le risque principal est la génération de pages à faible valeur ajoutée. La mise à jour Helpful Content de Google (août 2022, septembre 2023) cible explicitement ce type de contenu. Lorsque plusieurs pages programmatiques ciblent des requêtes trop proches, elles entrent en compétition interne. Les moteurs IA identifient efficacement le contenu généré par template. Le contenu programmatique n\'est presque jamais cité par les moteurs IA, sauf s\'il contient des données factuelles uniques (prix, disponibilité, coordonnées vérifiables).',
      ],
    },
    {
      title: 'Conditions de réussite',
      tableau: {
        caption: 'Conditions de réussite du SEO programmatique',
        headers: ['Condition', 'Pourquoi c\'est requis', 'Risque si absent'],
        rows: [
          { cells: ['Donnée source unique par page', 'Chaque page doit apporter une valeur informationnelle distincte pour éviter le thin content', 'Pages considérées comme du contenu mince, désindexation par Google'] },
          { cells: ['Template enrichi (pas juste {ville}+{service})', 'Un gabarit pauvre produit des pages quasi-identiques détectées par le Helpful Content Update', 'Pénalisation algorithmique, contenu ignoré par les LLM'] },
          { cells: ['Maillage interne automatisé', 'Relie les pages programmatiques aux pages éditoriales du cocon pour distribuer l\'autorité', 'Pages orphelines sans autorité, faible indexation'] },
          { cells: ['Monitoring d\'indexation', 'Vérifier que Google indexe effectivement les pages générées et ne les filtre pas', 'Des milliers de pages créées mais invisibles dans l\'index'] },
          { cells: ['Contenu supplémentaire éditorial', 'Complète les données dynamiques avec des éléments rédactionnels non réplicables', 'Score de qualité insuffisant pour les requêtes concurrentielles'] },
        ],
      },
      paragraphsAfter: [
        'Le SEO programmatique produit des résultats lorsque ces conditions sont réunies simultanément. Les données injectées dans le template sont uniques, vérifiables et utiles. Chaque page apporte une réponse distincte à une requête distincte, sans chevauchement avec les autres pages du lot. Le maillage interne relie les pages programmatiques aux pages éditoriales du cocon, de sorte que l\'autorité thématique du site bénéficie aux deux types de contenus.',
      ],
    },
    {
      title: 'Exemples de déploiement à grande échelle',
      paragraphs: [
        'Les déploiements programmatiques les plus cités sont ceux de Zapier (pages d\'intégration entre deux outils, plus de 70\u00a0000 pages), Tripadvisor (fiches par destination × type d\'activité) et Wise (pages de conversion devise × devise). Ces sites réussissent parce que chaque page contient des données dynamiques réellement distinctes (compatibilité entre deux outils, avis vérifiés par lieu, taux de change en temps réel).',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Génération de pages à grande échelle à partir de templates et de données' },
      { text: 'Ciblage de la longue traîne par combinaison de variables' },
      { text: 'Structuration des templates pour l\'indexation' },
      { text: 'Gestion des risques de cannibalisation et de thin content' },
    ],
    neCouvrePas: [
      { text: 'La rédaction de contenu éditorial', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'L\'architecture de maillage interne', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
      { text: 'L\'optimisation de l\'expérience utilisateur', link: { slug: 'sxo', label: 'SXO' } },
      { text: 'L\'optimisation pour la citabilité IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
    { label: 'Cocon sémantique', slug: 'cocon-semantique' },
    { label: 'Intention de recherche', slug: 'intention-de-recherche' },
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'Cannibalisation SEO', slug: 'cannibalisation-seo' },
    { label: 'GEO', slug: 'geo' },
  ],
};
