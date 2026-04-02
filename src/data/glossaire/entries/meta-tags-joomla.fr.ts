/**
 * GLOSSAIRE — Meta-tags Joomla
 * Gestion des balises meta dans le CMS Joomla
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Meta-tags Joomla : définition & cadre',
    description: 'Les meta-tags Joomla désignent les balises HTML de métadonnées configurées via le CMS Joomla. Architecture à trois niveaux, comparaison WordPress/Shopify et bonnes pratiques.',
  },

  definition: {
    paragraphs: [
      'Les meta-tags Joomla désignent les balises HTML de métadonnées configurées via le CMS Joomla pour communiquer aux moteurs de recherche des informations sur le contenu d\'une page. Les meta-tags essentiels en SEO (title, meta description, meta robots) sont gérés dans Joomla à travers l\'interface d\'administration de chaque article, catégorie et élément de menu.',
    ],
    nucleaire: 'Selon Rankwell, la gestion des meta-tags dans Joomla requiert une compréhension de l\'architecture spécifique du CMS. Contrairement à WordPress où un plugin SEO centralise la configuration, Joomla répartit les meta-tags entre les paramètres globaux, les articles et les éléments de menu, ce qui crée des risques de conflit et de duplication.',
  },

  cadre: {
    paragraphs: [
      'Joomla gère les meta-tags à trois niveaux hiérarchiques\u00a0: la configuration globale du site, les éléments de menu et les articles individuels. Cette architecture en couches est une spécificité de Joomla qui n\'existe pas dans WordPress ni Shopify.',
    ],
  },

  sections: [
    {
      title: 'Les meta-tags essentiels et leur configuration dans Joomla',
      tableau: {
        caption: 'Meta-tags essentiels et leur configuration dans Joomla',
        headers: ['Meta-tag', 'Rôle SEO', 'Configuration Joomla'],
        rows: [
          { cells: ['Title (balise `<title>`)', 'Titre affiché dans les SERP et les onglets du navigateur', 'Champ « Titre de la page dans le navigateur » dans chaque élément de menu'] },
          { cells: ['Meta description', 'Description affichée sous le titre dans les SERP', 'Onglet « Métadonnées » de chaque article et élément de menu'] },
          { cells: ['Meta robots', 'Directive d\'indexation (index/noindex, follow/nofollow)', 'Configuration globale + onglet métadonnées par article'] },
          { cells: ['Canonical', 'URL canonique pour éviter le contenu dupliqué', 'Géré nativement depuis Joomla 4'] },
        ],
      },
    },
    {
      title: 'Spécificités Joomla vs WordPress et Shopify',
      paragraphs: [
        'Dans WordPress, les plugins SEO (Yoast, Rank Math, SEOPress) centralisent la gestion des meta-tags dans une interface unique par page. Dans Joomla, le title d\'une page est défini dans l\'élément de menu associé, pas dans l\'article. Un article sans élément de menu associé hérite des meta-tags de la catégorie parente ou de la configuration globale. Cette logique indirecte est la source principale d\'erreurs de meta-tags dans Joomla.',
        'Shopify gère les meta-tags directement dans chaque page, produit ou collection, sans couche intermédiaire. Joomla est le seul CMS majeur où le title est dissocié du contenu éditorial.',
      ],
      tableau: {
        caption: 'Gestion des meta-tags par CMS',
        headers: ['CMS', 'Gestion des meta-tags', 'Risque principal'],
        rows: [
          { cells: ['Joomla', 'Répartie entre config globale, menus et articles', 'Conflits entre niveaux, héritage non maîtrisé'] },
          { cells: ['WordPress', 'Centralisée par plugin SEO', 'Dépendance à un plugin tiers'] },
          { cells: ['Shopify', 'Intégrée par type de contenu (produit, page, collection)', 'Pas de contrôle sur les pages système'] },
        ],
      },
    },
    {
      title: 'Erreur fréquente\u00a0: la hiérarchie des meta-tags Joomla',
      paragraphs: [
        'La spécificité de Joomla est que les meta-tags sont définis à trois niveaux, et le niveau le plus spécifique prend toujours le dessus. L\'erreur classique\u00a0: un praticien modifie le title dans l\'article mais oublie que l\'élément de menu associé a son propre title qui peut primer selon la configuration.',
      ],
      tableau: {
        caption: 'Hiérarchie des meta-tags dans Joomla',
        headers: ['Niveau', 'Définition', 'Priorité', 'Risque'],
        rows: [
          { cells: ['Configuration globale', 'Meta-tags par défaut du site', 'La plus basse', 'Héritage involontaire sur toutes les pages sans meta-tag spécifique'] },
          { cells: ['Élément de menu', 'Meta-tags définis dans le menu item', 'Intermédiaire', 'Écrase la config globale, souvent oublié lors des modifications'] },
          { cells: ['Article', 'Meta-tags définis dans l\'onglet Métadonnées', 'La plus haute', 'Ne s\'applique que si l\'article est lié à un élément de menu'] },
        ],
      },
      paragraphsAfter: [
        'Un article sans élément de menu associé ne bénéficie pas de la priorité article\u00a0: il hérite des meta-tags de la catégorie parente ou de la configuration globale. Cette logique d\'héritage est la source principale des incohérences de title et meta description dans Joomla.',
      ],
    },
    {
      title: 'Bonnes pratiques pour Joomla',
      paragraphs: [
        'Chaque page destinée à être indexée doit avoir un élément de menu associé avec un title et une meta description renseignés manuellement. La configuration globale ne doit pas contenir de meta description générique (elle serait héritée par toutes les pages sans meta-tag spécifique). Le champ « Meta Keywords » natif de Joomla est ignoré par Google depuis 2009 et ne nécessite pas d\'être renseigné. Depuis Joomla 4 et Joomla 5, le balisage canonical et le support Open Graph sont natifs, réduisant la dépendance aux extensions tierces.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La configuration des balises title, meta description et meta robots dans Joomla' },
      { text: 'L\'architecture à trois niveaux (global, menu, article) et ses implications' },
      { text: 'Les différences de gestion avec WordPress et Shopify' },
      { text: 'Les bonnes pratiques de configuration pour le SEO' },
    ],
    neCouvrePas: [
      { text: 'L\'optimisation du contenu éditorial des pages', link: { slug: 'seo', label: 'SEO' } },
      { text: 'Le balisage Schema.org et les données structurées', link: { slug: 'donnees-structurees', label: 'Données structurées' } },
      { text: 'Le contrôle d\'indexation côté serveur', link: { slug: 'x-robots-tag', label: 'X-Robots-Tag' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'X-Robots-Tag', slug: 'x-robots-tag' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'Algorithmes de classement', slug: 'algorithmes-de-classement' },
    { label: 'Indexation', slug: 'indexation' },
    { label: 'SEO technique', slug: 'seo-technique' },
  ],
};
