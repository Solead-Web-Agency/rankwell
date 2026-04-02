/**
 * GUIDE TEST - Article pilote pour validation du systeme
 * A SUPPRIMER apres validation — sert de modele pour _REDACTION
 */

import type { GuideEntryData } from '../types';

export const data: GuideEntryData = {
  metadata: {
    title: 'Cocon semantique : guide complet pour structurer votre strategie SEO',
    description: 'Decouvrez comment construire un cocon semantique efficace pour ameliorer votre visibilite sur Google. Methodologie, exemples et bonnes pratiques.',
  },

  hero: {
    h1: 'Cocon semantique : le guide complet',
    subtitle: 'Comment structurer vos contenus pour dominer les resultats de recherche',
    readingTime: 12,
    date: '2026-03-17',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=1800&fit=crop&q=80',
    imageAlt: 'Schema de cocon semantique avec page pilier et pages satellites reliees par maillage interne',
  },

  intro: [
    'Le cocon semantique est devenu l\'un des piliers fondamentaux de toute strategie SEO ambitieuse. Conceptualise par Laurent Bourrelly, ce modele d\'architecture de contenu permet de structurer un site web autour de thematiques fortes, en creant des liens logiques entre les pages.',
    'Dans un contexte ou les moteurs de recherche privilegient la profondeur thematique et la coherence semantique, maitriser cette technique n\'est plus optionnel. C\'est un avantage concurrentiel decisif.',
    'Ce guide vous accompagne de la theorie a la pratique, avec des exemples concrets et une methodologie eprouvee.',
  ],

  sommaire: [
    'Qu\'est-ce qu\'un cocon semantique ?',
    'Pourquoi le cocon semantique fonctionne',
    'Construire son cocon etape par etape',
    'Les erreurs a eviter',
  ],

  sections: [
    {
      id: 'definition',
      title: 'Qu\'est-ce qu\'un cocon semantique ?',
      blocks: [
        {
          type: 'paragraph',
          text: 'Le cocon semantique est une architecture de contenu qui organise les pages d\'un site en silos thematiques hierarchises. Chaque silo est compose d\'une <strong>page pilier</strong> (page mere) et de <strong>pages satellites</strong> (pages filles) reliees par un maillage interne strategique.',
        },
        {
          type: 'paragraph',
          text: 'Contrairement a une arborescence classique organisee par categories produits, le cocon semantique s\'organise autour de l\'<a href="/glossaire/intention-de-recherche" class="text-rw-blue hover:underline">intention de recherche</a> de l\'utilisateur.',
        },
        {
          type: 'callout',
          variant: 'remember',
          title: 'A retenir',
          content: 'Un cocon semantique bien construit peut multiplier par 3 a 5 le trafic organique sur une thematique ciblee, selon les retours d\'experience documentes par la communaute SEO francophone.',
        },
        {
          type: 'widget',
          widgetType: 'stats',
          config: {
            title: 'Impact mesure du cocon semantique',
            items: [
              { value: 'x3-5', label: 'Trafic organique', accent: 'blue' },
              { value: '+67%', label: 'Mots-cles positionnes', accent: 'cyan' },
              { value: '-40%', label: 'Taux de rebond', accent: 'purple' },
              { value: '+120%', label: 'Pages vues / session', accent: 'coral' },
            ],
          },
        },
        {
          type: 'table',
          caption: 'Cocon semantique vs architecture classique',
          headers: ['Critere', 'Architecture classique', 'Cocon semantique'],
          rows: [
            ['Organisation', 'Par categorie produit', 'Par intention de recherche'],
            ['Maillage interne', 'Horizontal (menu, footer)', 'Vertical (mere vers filles)'],
            ['Profondeur thematique', 'Superficielle', 'Approfondie par silo'],
            ['Signal envoye a Google', 'Site generaliste', 'Expertise thematique forte'],
          ],
        },
      ],
    },
    {
      id: 'pourquoi',
      title: 'Pourquoi le cocon semantique fonctionne',
      blocks: [
        {
          type: 'paragraph',
          text: 'Google evalue de plus en plus la <a href="/glossaire/topical-authority" class="text-rw-blue hover:underline">topical authority</a> d\'un site : sa capacite a couvrir un sujet en profondeur. Le cocon semantique repond directement a ce critere.',
        },
        {
          type: 'heading3',
          text: 'Le role du maillage interne',
        },
        {
          type: 'paragraph',
          text: 'Le maillage interne du cocon cree un flux de PageRank concentre vers la page pilier. Chaque page satellite renforce la page mere, qui concentre l\'autorite du silo.',
        },
        {
          type: 'widget',
          widgetType: 'bar-chart',
          config: {
            title: 'Distribution du PageRank par architecture',
            items: [
              { label: 'Cocon semantique', value: 85, displayValue: '85%' },
              { label: 'Architecture silo', value: 65, displayValue: '65%' },
              { label: 'Architecture plate', value: 30, displayValue: '30%' },
              { label: 'Sans strategie', value: 12, displayValue: '12%' },
            ],
            maxValue: 100,
            accent: 'blue',
          },
        },
        {
          type: 'list',
          ordered: false,
          items: [
            'La page pilier recoit du jus de lien de toutes ses pages filles',
            'Les pages filles se renforcent mutuellement via des liens contextuels',
            'Le siloing empeche la dilution du PageRank vers des thematiques non liees',
          ],
        },
        {
          type: 'callout',
          variant: 'didyouknow',
          title: 'Le saviez-vous ?',
          content: 'Selon une etude de Semrush (2025), les sites avec une architecture en cocon semantique obtiennent en moyenne 67% de mots-cles positionnes en plus que les sites a architecture plate.',
        },
        {
          type: 'widget',
          widgetType: 'comparator',
          config: {
            title: 'Architecture plate vs Cocon semantique',
            optionA: {
              label: 'Architecture plate',
              points: [
                'Toutes les pages au meme niveau hierarchique',
                'Maillage interne non structure, liens depuis le menu et le footer',
                'Pas de concentration du PageRank sur les pages strategiques',
                'Google percoit le site comme generaliste',
                'Risque de cannibalisation entre pages proches',
              ],
            },
            optionB: {
              label: 'Cocon semantique',
              points: [
                'Organisation hierarchique par intention de recherche',
                'Maillage contextuel strategique entre pages liees',
                'PageRank concentre vers les pages piliers',
                'Google percoit une expertise thematique forte',
                'Chaque page a un role precis dans le silo',
              ],
            },
          },
        },
      ],
    },
    {
      id: 'methodologie',
      title: 'Construire son cocon etape par etape',
      blocks: [
        {
          type: 'paragraph',
          text: 'La construction d\'un cocon semantique suit un processus rigoureux en 4 etapes. Chaque etape conditionne la qualite du resultat final.',
        },
        {
          type: 'widget',
          widgetType: 'timeline',
          config: {
            title: 'Les 4 etapes de construction',
            steps: [
              {
                label: 'Recherche semantique',
                description: 'Identifier les requetes cibles et les regrouper par intention de recherche. Utiliser les outils de clustering pour former des silos coherents.',
              },
              {
                label: 'Architecture du silo',
                description: 'Definir la page pilier et ses pages satellites. Cartographier les liens internes entre chaque niveau hierarchique.',
              },
              {
                label: 'Redaction des contenus',
                description: 'Produire des contenus exhaustifs et complementaires. Chaque page doit apporter une valeur unique au silo.',
              },
              {
                label: 'Maillage interne',
                description: 'Relier les pages avec des ancres contextuelles pertinentes. Respecter le flux descendant (pilier vers satellites) et les liens transversaux.',
              },
            ],
          },
        },
        {
          type: 'callout',
          variant: 'warning',
          title: 'Attention',
          content: 'Ne construisez jamais un cocon semantique sans avoir valide votre arbre semantique au prealable. Un mauvais regroupement des intentions ruinera tout le travail de redaction.',
        },
      ],
    },
    {
      id: 'erreurs',
      title: 'Les erreurs a eviter',
      blocks: [
        {
          type: 'paragraph',
          text: 'Meme les SEO experimentes commettent des erreurs lors de la mise en place d\'un cocon semantique. Voici les plus frequentes.',
        },
        {
          type: 'list',
          ordered: false,
          items: [
            '<strong>Cannibalisation</strong> : deux pages du meme cocon qui ciblent la meme requete',
            '<strong>Maillage force</strong> : des liens internes non pertinents qui diluent le signal',
            '<strong>Contenus superficiels</strong> : des pages satellites trop courtes qui n\'apportent pas de valeur',
            '<strong>Siloing excessif</strong> : des cocons trop etanches qui empechent la circulation naturelle du jus de lien',
          ],
        },
        {
          type: 'callout',
          variant: 'checklist',
          title: 'Checklist avant lancement',
          content: 'Chaque page vise une intention unique. Le maillage suit la hierarchie. Les ancres sont contextuelles. Aucun lien orphelin dans le silo.',
        },
      ],
    },
  ],

  faq: [
    {
      question: 'Combien de pages faut-il dans un cocon semantique ?',
      answer: 'Il n\'y a pas de nombre fixe. Un cocon efficace contient generalement entre 5 et 20 pages satellites par page pilier, selon la profondeur du sujet et le volume de recherche.',
    },
    {
      question: 'Le cocon semantique fonctionne-t-il pour le e-commerce ?',
      answer: 'Oui, le cocon semantique est particulierement efficace en e-commerce pour structurer les pages categories et les guides d\'achat autour des intentions transactionnelles et informationnelles.',
    },
    {
      question: 'Faut-il refaire tout son site pour mettre en place un cocon semantique ?',
      answer: 'Non, il est possible d\'implementer progressivement des cocons semantiques sur les thematiques prioritaires sans refondre l\'ensemble du site.',
    },
  ],

  conclusion: {
    title: 'Conclusion',
    paragraphs: [
      'Le cocon semantique reste l\'une des techniques SEO les plus puissantes pour construire une autorite thematique durable. Sa force reside dans sa logique : organiser le contenu autour des besoins reels des utilisateurs, pas autour de la structure interne de l\'entreprise.',
      'Chez Rankwell, nous integrons cette approche dans chaque strategie de contenu que nous deployons. Le cocon semantique n\'est pas une fin en soi, mais un moyen de structurer la connaissance pour qu\'elle soit accessible — par les humains comme par les moteurs de recherche.',
    ],
  },

  sources: [
    {
      organisme: 'Google Search Central',
      titre: 'How Google understands your site structure',
      annee: '2025',
      langue: 'EN',
      url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    },
    {
      organisme: 'Semrush Blog',
      titre: 'Topic Clusters and Pillar Pages: Complete Guide',
      annee: '2025',
      langue: 'EN',
      url: 'https://www.semrush.com/blog/topic-clusters/',
    },
    {
      organisme: 'Abondance',
      titre: 'Le cocon semantique : methodologie et mise en pratique',
      annee: '2024',
      langue: 'FR',
      url: 'https://www.abondance.com/cocon-semantique',
    },
    {
      organisme: 'Moz',
      titre: 'Internal Linking for SEO: The Definitive Guide',
      annee: '2025',
      langue: 'EN',
      url: 'https://moz.com/blog/internal-linking-seo',
    },
  ],

  internalLinks: [
    { anchor: 'intention de recherche', href: '/glossaire/intention-de-recherche' },
    { anchor: 'topical authority', href: '/glossaire/topical-authority' },
  ],
};
