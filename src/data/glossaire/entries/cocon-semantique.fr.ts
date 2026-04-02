/**
 * GLOSSAIRE — Cocon sémantique
 * Architecture de contenu en clusters thématiques
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Cocon sémantique : définition & cadre',
    description: 'Le cocon sémantique organise les pages d\'un site en clusters thématiques reliés par un maillage interne structuré. Hub, spokes, topical authority et citabilité IA.',
  },

  definition: {
    paragraphs: [
      'Le cocon sémantique désigne une architecture de contenu qui organise les pages d\'un site en clusters thématiques reliés par un maillage interne structuré. Chaque cluster comporte une page pilier (hub) et des pages satellites (spokes) qui traitent des sous-angles du même sujet. Le concept, formalisé par Laurent Bourrelly, repose sur les intentions de recherche des utilisateurs plutôt que sur la structure catégorielle du site.',
    ],
    nucleaire: 'Selon Rankwell, le cocon sémantique ne sert pas uniquement le positionnement Google\u00a0: il structure le signal thématique que les moteurs IA évaluent pour déterminer si un site fait autorité sur un sujet, et donc s\'il mérite d\'être cité dans une réponse générée.',
  },

  cadre: {
    paragraphs: [
      'Laurent Bourrelly a formalisé le concept de cocon sémantique vers 2013-2014 dans la communauté SEO francophone. Le modèle hub-and-spoke est aussi utilisé dans les content clusters popularisés par HubSpot en 2017. Les sites avec une architecture en cocon montrent une amélioration moyenne de 20 à 30\u00a0% des impressions sur leurs clusters thématiques, selon les observations sectorielles.',
      'Le cocon sémantique repose sur le principe de pertinence thématique distribuée. Un site qui traite un sujet en profondeur via un hub et ses spokes envoie un signal d\'expertise plus fort qu\'un site qui concentre le même volume d\'information sur une seule page. Ce signal est lu par les algorithmes de Google (crawl, indexation, évaluation de la pertinence) et par les robots des moteurs IA (GPTBot, ClaudeBot, PerplexityBot).',
      'La construction d\'un cocon suit trois étapes\u00a0: identification des intentions de recherche autour d\'un sujet, regroupement de ces intentions en clusters sémantiques, puis création du maillage interne qui relie les pages selon leur proximité thématique.',
    ],
  },

  sections: [
    {
      title: 'Cocon sémantique et topical authority',
      paragraphs: [
        'Le cocon sémantique est une technique de structuration. La topical authority est un résultat. Le premier organise les pages et les liens internes d\'un site. La seconde mesure le niveau d\'expertise perçu par les moteurs sur un sujet donné.',
        'Un cocon bien construit renforce la topical authority, mais il n\'est pas le seul facteur. Les backlinks thématiques, les citations tierces et la profondeur éditoriale y contribuent également. Confondre les deux revient à confondre le plan d\'un bâtiment avec sa solidité.',
      ],
    },
    {
      title: 'Impact sur la citabilité IA',
      paragraphs: [
        'Les moteurs IA n\'évaluent pas les backlinks de la même façon que Google. En revanche, ils évaluent la cohérence thématique d\'un corpus. Un site qui traite un sujet en profondeur via un cocon structuré a plus de chances d\'être sélectionné comme source fiable par ChatGPT ou Perplexity qu\'un site avec des pages isolées sur le même sujet.',
        'Le maillage interne du cocon facilite également le crawl des robots IA\u00a0: les pages reliées entre elles par des liens contextualisés sont découvertes et indexées plus efficacement que des pages orphelines. Le cocon sémantique agit donc à deux niveaux pour la visibilité IA\u00a0: signal thématique et accessibilité technique.',
      ],
    },
    {
      title: 'Structure type',
      tableau: {
        caption: 'Structure type d\'un cocon sémantique',
        headers: ['Élément', 'Rôle', 'Maillage'],
        rows: [
          { cells: ['Page pilier (hub)', 'Vue d\'ensemble du sujet', 'Lie vers chaque spoke'] },
          { cells: ['Page satellite (spoke)', 'Sous-angle spécifique', 'Remonte vers le hub'] },
          { cells: ['Maillage spoke \u2194 spoke', 'Liaison entre sous-angles proches', 'Liens contextuels entre pages sémantiquement liées'] },
        ],
      },
    },
    {
      title: 'Ce qui distingue un cocon efficace d\'un simple siloing',
      paragraphs: [
        'Le siloing regroupe les pages par catégorie thématique et cloisonne les silos entre eux. Le cocon sémantique va plus loin\u00a0: il autorise des liens transversaux entre spokes de clusters différents lorsque la proximité sémantique le justifie. Le silo est rigide et catégoriel. Le cocon est organique et piloté par les intentions de recherche.',
      ],
    },
    {
      title: 'Erreurs fréquentes de mise en œuvre',
      items: [
        { label: 'Cocon sans contenu substantiel', description: 'Créer l\'architecture (hub + spokes + liens) sans investir dans la qualité rédactionnelle de chaque page produit une coquille vide. Le maillage interne n\'a de valeur que si les pages reliées apportent chacune une réponse complète à une intention de recherche distincte.' },
        { label: 'Maillage mécanique', description: 'Relier toutes les pages d\'un cluster entre elles sans considérer leur proximité sémantique réelle dilue le signal thématique. Un lien entre deux spokes ne se justifie que si le contenu de l\'un mentionne naturellement le sujet de l\'autre.' },
        { label: 'Cocon figé', description: 'Un cocon sémantique qui n\'évolue pas après sa création perd en pertinence. Les intentions de recherche changent, de nouvelles requêtes apparaissent, certaines pages deviennent obsolètes. La maintenance du cocon (ajout de spokes, mise à jour des hubs, suppression des pages sans trafic) fait partie intégrante de la stratégie.' },
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Organisation des pages en clusters thématiques' },
      { text: 'Maillage interne structuré (hub \u2194 spokes, spokes \u2194 spokes)' },
      { text: 'Stratégie de contenu par profondeur thématique' },
      { text: 'Renforcement du signal d\'expertise pour les moteurs de recherche et les moteurs IA' },
      { text: 'Priorisation des pages selon les intentions de recherche' },
    ],
    neCouvrePas: [
      { text: 'La rédaction du contenu des pages', link: { slug: 'content-marketing-seo', label: 'Content marketing SEO' } },
      { text: 'L\'acquisition de liens externes', link: { slug: 'strategie-netlinking', label: 'Stratégie de netlinking' } },
      { text: 'Le balisage technique des pages', link: { slug: 'donnees-structurees', label: 'Données structurées' } },
      { text: 'L\'optimisation de l\'expérience utilisateur sur les pages', link: { slug: 'sxo', label: 'SXO' } },
    ],
  },

  conceptsLies: [
    { label: 'Topical authority', slug: 'topical-authority' },
    { label: 'Intention de recherche', slug: 'intention-de-recherche' },
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
    { label: 'SEO sémantique', slug: 'seo-semantique' },
    { label: 'SEO technique', slug: 'seo-technique' },
  ],
};
