/**
 * GLOSSAIRE — Optimisation de la fiche Google My Business (GMB)
 * SEO local, Google Business Profile, visibilité IA locale
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Optimisation Google My Business (GMB) : définition & cadre',
    description: 'L\'optimisation Google Business Profile couvre la complétude de la fiche, la gestion des avis, la cohérence NAP et l\'impact sur le Local Pack et les LLM.',
  },

  definition: {
    paragraphs: [
      'L\'optimisation de la fiche Google My Business (renommé Google Business Profile par Google en 2021) désigne l\'ensemble des actions visant à améliorer la visibilité et la pertinence d\'un établissement local dans les résultats de recherche Google, Google Maps et le Local Pack. L\'optimisation couvre la complétude des informations, la gestion des avis, la publication de contenus et la cohérence des données à travers les sources en ligne. 46\u00a0% des recherches Google ont une intention locale (source\u00a0: GoGulf, 2023), et le pack local apparaît sur environ 93\u00a0% des requêtes avec intention locale (BrightLocal).',
      'Les données GBP (avis, catégories, attributs) sont directement accessibles aux LLM via Google Maps et les fiches publiques. Quand ChatGPT recommande « le meilleur restaurant italien à Lyon », il s\'appuie sur les données GBP agrégées (note moyenne, nombre d\'avis, catégorie principale), pas sur le site web du restaurant. L\'optimisation GBP est donc un levier GEO direct, pas seulement un levier SEO local.',
    ],
    nucleaire: 'Selon Rankwell, l\'optimisation GBP est un levier GEO direct\u00a0: les LLM s\'appuient sur les données GBP agrégées (note, avis, catégorie) pour formuler leurs recommandations locales, indépendamment du site web de l\'établissement.',
  },

  cadre: {
    paragraphs: [
      'Google Business Profile (GBP) est le système de fiches d\'établissements de Google. La fiche est gratuite et vérifiable par le propriétaire de l\'établissement. Elle apparaît dans trois contextes\u00a0: le Local Pack (les 3 résultats locaux en haut des SERP), Google Maps et le Knowledge Panel de l\'établissement.',
    ],
    tableau: {
      caption: 'Les trois facteurs de classement local',
      headers: ['Facteur', 'Définition', 'Levier d\'optimisation'],
      rows: [
        { cells: ['Pertinence', 'Correspondance entre la fiche et la requête de l\'utilisateur', 'Catégories, description, attributs, services, mots-clés dans les avis'] },
        { cells: ['Distance', 'Proximité géographique entre l\'utilisateur et l\'établissement', 'Non modifiable directement (dépend de la localisation de l\'utilisateur)'] },
        { cells: ['Notoriété', 'Réputation et visibilité de l\'établissement en ligne et hors ligne', 'Avis (volume et note), citations NAP, mentions tierces, backlinks'] },
      ],
    },
  },

  sections: [
    {
      title: 'Optimisation GBP vs optimisation Knowledge Panel',
      paragraphs: [
        'L\'optimisation GBP et l\'optimisation du Knowledge Panel visent toutes deux à améliorer la présence d\'une entité dans Google, mais elles agissent sur des données différentes et produisent des effets distincts.',
        'L\'optimisation GBP agit sur les données locales (NAP, horaires, avis, photos, catégories) pour améliorer le positionnement dans le pack local Google Maps. L\'optimisation Knowledge Panel agit sur les données d\'entité (Wikidata, Wikipedia, Schema.org Organization) pour améliorer la reconnaissance d\'entité par Google et les LLM. Les deux sont complémentaires\u00a0: un établissement peut optimiser sa fiche GBP pour le pack local tout en travaillant son Knowledge Panel pour la reconnaissance d\'entité, mais les leviers et les effets sont distincts.',
        'Pour un commerce local (restaurant, cabinet médical, artisan), l\'optimisation GBP est prioritaire car elle cible directement le pack local et les recommandations LLM. Pour une marque ou une organisation sans point de vente physique, l\'optimisation Knowledge Panel est plus pertinente car elle cible la reconnaissance d\'entité et la citabilité dans les réponses générées.',
      ],
    },
    {
      title: 'Composantes de l\'optimisation GBP',
      items: [
        { label: 'Complétude de la fiche', description: 'Chaque champ doit être renseigné\u00a0: nom de l\'établissement (NAP), adresse, téléphone, site web, horaires, catégorie principale, catégories secondaires, attributs, zone de service, description. Une fiche complète envoie un signal de fiabilité plus fort qu\'une fiche partielle.' },
        { label: 'Gestion des avis', description: 'Le volume d\'avis, la note moyenne et la fréquence des nouveaux avis sont des signaux de notoriété. Les réponses du propriétaire aux avis (positifs et négatifs) démontrent un engagement actif. Les mots-clés présents dans les avis contribuent à la pertinence thématique de la fiche.' },
        { label: 'Cohérence NAP', description: 'Le triplet Nom-Adresse-Téléphone doit être identique sur toutes les sources en ligne\u00a0: site web, annuaires, réseaux sociaux, plateformes d\'avis. Les incohérences affaiblissent la confiance de Google dans les données de l\'établissement.' },
        { label: 'Publications Google Posts', description: 'Les Google Posts permettent de publier des actualités, des offres et des événements directement sur la fiche. Ces publications signalent une activité récente et enrichissent le contenu indexable de la fiche.' },
      ],
    },
    {
      title: 'Données GBP exploitées par les LLM',
      paragraphs: [
        'Les LLM qui recommandent des commerces ou des prestataires locaux s\'appuient sur les données GBP accessibles publiquement.',
      ],
      tableau: {
        caption: 'Données GBP et impact sur la recommandation IA',
        headers: ['Donnée GBP', 'Accessible aux LLM', 'Impact sur la recommandation', 'Action d\'optimisation'],
        rows: [
          { cells: ['Note moyenne', 'Oui (via Google Maps, fiches publiques)', 'Critère de tri principal dans les recommandations locales', 'Maintenir une note supérieure à 4.0/5 par un suivi actif des avis'] },
          { cells: ['Nombre d\'avis', 'Oui', 'Volume élevé = signal de popularité, utilisé pour départager les établissements à note égale', 'Encourager les avis après chaque prestation'] },
          { cells: ['Texte des avis', 'Oui', 'Les LLM extraient des verbatims pour justifier leurs recommandations (« les clients mentionnent la fraîcheur des produits »)', 'Inciter les clients à détailler leur expérience'] },
          { cells: ['Catégorie principale', 'Oui', 'Détermine si l\'établissement est pertinent pour la requête (« restaurant italien », « chirurgien orthopédiste »)', 'Choisir la catégorie la plus spécifique disponible'] },
          { cells: ['Photos', 'Partiellement (descriptions alt, métadonnées)', 'Faible impact direct sur les LLM textuels, impact fort sur les LLM multimodaux', 'Publier des photos de qualité avec descriptions'] },
          { cells: ['Attributs', 'Oui (accessibilité, services, options)', 'Utilisés pour les filtres (« terrasse », « accessible PMR », « livraison »)', 'Renseigner tous les attributs applicables'] },
          { cells: ['Horaires', 'Oui', 'Utilisés pour filtrer les recommandations en temps réel (« ouvert maintenant »)', 'Maintenir les horaires à jour, y compris horaires exceptionnels'] },
          { cells: ['Site web', 'Oui (URL, contenu crawlé séparément)', 'Utilisé pour vérifier les informations et enrichir la recommandation', 'Assurer la cohérence entre le site et la fiche GBP'] },
        ],
      },
    },
    {
      title: 'Impact sur la visibilité IA',
      paragraphs: [
        'Les LLM recommandent de plus en plus des commerces et des prestataires locaux dans leurs réponses. ChatGPT, en partenariat avec des sources de données locales, et Perplexity, via ses intégrations cartographiques, s\'appuient sur les mêmes données que Google Maps\u00a0: nom, adresse, catégorie, avis, note. Un établissement dont la fiche GBP est complète, avec des avis récents et une note élevée, a davantage de chances d\'apparaître dans les recommandations locales des LLM.',
        'Les données structurées LocalBusiness sur le site web de l\'établissement renforcent ce signal en fournissant aux crawlers IA des informations vérifiables (horaires, coordonnées, services) dans un format directement exploitable.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La complétude et l\'exactitude de la fiche GBP' },
      { text: 'La gestion des avis et des réponses aux avis' },
      { text: 'La cohérence NAP à travers les sources en ligne' },
      { text: 'Les Google Posts et le contenu de la fiche' },
      { text: 'L\'impact sur le classement dans le Local Pack et Google Maps' },
    ],
    neCouvrePas: [
      { text: 'Le SEO technique du site web de l\'établissement', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Le Knowledge Panel de marque', link: { slug: 'knowledge-panel', label: 'Knowledge Panel' } },
      { text: 'La publicité locale payante (Google Ads Local)' },
      { text: 'La stratégie de contenu on-site', link: { slug: 'cocon-semantique', label: 'Cocon sémantique' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO local', slug: 'seo-local' },
    { label: 'Knowledge Panel', slug: 'knowledge-panel' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'GEO', slug: 'geo' },
  ],
};
