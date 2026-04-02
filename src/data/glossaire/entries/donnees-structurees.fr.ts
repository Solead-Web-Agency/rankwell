/**
 * GLOSSAIRE — Données structurées (Schema.org)
 * Balisage sémantique pour SEO et visibilité IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Données structurées (Schema.org) : définition & cadre',
    description: 'Les données structurées désignent un balisage ajouté au HTML pour décrire le contenu aux moteurs de recherche et aux IA. Vocabulaire Schema.org, JSON-LD et impacts SEO/GEO.',
  },

  definition: {
    paragraphs: [
      'Les données structurées désignent un format de balisage ajouté au code HTML d\'une page web pour décrire explicitement son contenu aux moteurs de recherche et aux systèmes d\'intelligence artificielle. Le vocabulaire standard est Schema.org, un référentiel commun maintenu par Google, Microsoft, Yahoo et Yandex depuis 2011. Le format d\'implémentation recommandé est le JSON-LD, intégré dans la balise `<script>` du code source.',
    ],
    nucleaire: 'Selon Rankwell, les données structurées jouent un double rôle\u00a0: elles alimentent les résultats enrichis de Google (rich snippets, FAQ, avis) et elles fournissent aux LLM une couche de compréhension sémantique explicite qui facilite l\'extraction factuelle. Un type `DefinedTerm` correctement balisé devient une entité directement ingérable par un moteur IA.',
  },

  cadre: {
    paragraphs: [
      'Les données structurées transforment du contenu implicite en information explicite. Sans balisage, un moteur doit inférer qu\'un texte parle d\'un produit, de son prix et de ses avis. Avec un balisage `Product`, `Offer` et `AggregateRating`, l\'information est déclarée sans ambiguïté.',
      'Google utilise les données structurées pour générer des résultats enrichis dans les SERP\u00a0: étoiles d\'avis, FAQ déroulantes, fil d\'Ariane, événements, recettes. L\'éligibilité aux résultats enrichis dépend du type Schema.org utilisé et du respect des consignes Google Search Central.',
      'Selon une étude Milestone Research (2024), les pages implémentant des données structurées obtiennent un CTR moyen 40\u00a0% supérieur à celui des résultats classiques. Par ailleurs, le W3C Techs (2025) estime que 45\u00a0% des 10 millions de sites les plus visités utilisent au moins un balisage Schema.org en JSON-LD.',
    ],
  },

  sections: [
    {
      title: 'Types Schema.org et leur fonction',
      tableau: {
        caption: 'Types Schema.org et leur fonction',
        headers: ['Type Schema.org', 'Fonction', 'Impact SEO', 'Impact GEO'],
        rows: [
          { cells: ['`Article` / `NewsArticle`', 'Identifie un contenu éditorial', 'Éligibilité Top Stories, fil d\'actualité', 'Fournit les métadonnées (auteur, date) que les LLM utilisent pour évaluer la fraîcheur'] },
          { cells: ['`FAQPage`', 'Balise des paires question/réponse', 'Rich snippet FAQ dans les SERP', 'Les paires Q/R sont directement extractibles par les LLM pour les réponses conversationnelles'] },
          { cells: ['`Product` + `Offer`', 'Décrit un produit avec prix et disponibilité', 'Rich snippet Shopping, éligibilité Merchant Center', 'Permet aux LLM de citer des attributs produit vérifiables (prix, caractéristiques)'] },
          { cells: ['`DefinedTerm`', 'Formalise une définition canonique', 'Pas de rich snippet dédié', 'Signale explicitement au LLM qu\'un passage est une définition, ce qui facilite la citation directe'] },
          { cells: ['`Organization` + `Brand`', 'Décrit une entité (entreprise, marque)', 'Knowledge Panel', 'Renforce l\'identité d\'entité dans le Knowledge Graph des LLM'] },
          { cells: ['`HowTo`', 'Structure un processus étape par étape', 'Rich snippet How-to', 'Les étapes numérotées sont un format naturellement cité par les LLM'] },
        ],
      },
    },
    {
      title: 'Données structurées et visibilité IA\u00a0: le pont GEO',
      paragraphs: [
        'Les moteurs IA ne lisent pas les données structurées de la même façon que Google. Googlebot indexe le JSON-LD pour générer des résultats enrichis. GPTBot et les robots IA crawlent le HTML brut et le contenu textuel, et ne traitent pas nécessairement le JSON-LD comme une instruction de balisage.',
        'En revanche, les données structurées produisent un effet indirect sur la citabilité IA. Un contenu balisé en `DefinedTerm` ou en `FAQPage` est généralement structuré en passages auto-suffisants (une définition, une paire question/réponse), ce qui correspond au format que les LLM extraient le plus facilement. Le balisage impose une rigueur de structuration qui bénéficie à la fois au SEO et au GEO.',
        'Les entités balisées en `Organization` et `Brand` contribuent à la présence de la marque dans le Knowledge Graph de Google, qui est l\'une des sources de vérité utilisées par les AI Overviews.',
      ],
    },
    {
      title: 'Trois erreurs fréquentes d\'implémentation',
      tableau: {
        caption: 'Trois erreurs fréquentes d\'implémentation des données structurées',
        headers: ['Erreur', 'Conséquence', 'Correction'],
        rows: [
          { cells: ['Balisage invisible (données structurées sans contenu correspondant sur la page)', 'Violation des consignes Google, risque de pénalité manuelle', 'Le contenu balisé doit être visible par l\'utilisateur'] },
          { cells: ['Surbalisage (50+ types sur une même page)', 'Dilution du signal, aucun type n\'est traité comme principal', 'Limiter aux types pertinents pour le contenu réel de la page'] },
          { cells: ['`FAQPage` sur des pages non-FAQ', 'Google a restreint l\'éligibilité aux sites gouvernementaux et de santé en 2023', 'Réserver `FAQPage` aux pages qui contiennent effectivement des questions fréquentes'] },
        ],
      },
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Le balisage sémantique du contenu web via le vocabulaire Schema.org' },
      { text: 'L\'éligibilité aux résultats enrichis dans Google Search' },
      { text: 'La description explicite d\'entités (organisations, produits, personnes, concepts)' },
      { text: 'Le format JSON-LD comme méthode d\'implémentation recommandée' },
    ],
    neCouvrePas: [
      { text: 'Le contenu lui-même (le balisage décrit le contenu, il ne le remplace pas)' },
      { text: 'Le maillage interne et l\'architecture de site', link: { slug: 'cocon-semantique', label: 'cocon sémantique' } },
      { text: 'L\'optimisation de la vitesse de chargement', link: { slug: 'core-web-vitals', label: 'Core Web Vitals' } },
      { text: 'La stratégie de contenu pour les moteurs IA', link: { slug: 'geo', label: 'GEO' } },
    ],
  },

  conceptsLies: [
    { label: 'GEO', slug: 'geo' },
    { label: 'SEO', slug: 'seo' },
    { label: 'Core Web Vitals', slug: 'core-web-vitals' },
    { label: 'Indexation', slug: 'indexation' },
    { label: 'Citabilité', slug: 'citabilite' },
  ],
};
