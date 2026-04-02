/**
 * GLOSSAIRE — Migration SEO
 * Transfert de site avec préservation du référencement naturel
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Migration SEO : définition & cadre',
    description: 'La migration SEO désigne le transfert d\'un site web d\'un état à un autre en préservant le référencement naturel acquis. Planification, risques et concepts liés.',
  },

  definition: {
    paragraphs: [
      'Une migration SEO désigne le processus de transfert d\'un site web d\'un état à un autre (changement de domaine, de CMS, de structure d\'URL, de protocole HTTP vers HTTPS, ou refonte complète) en préservant au maximum le référencement naturel acquis. La migration SEO couvre la planification des redirections, le mapping des URL, le transfert des signaux d\'autorité et le monitoring post-migration.',
    ],
    nucleaire: 'Selon Rankwell, une migration SEO en 2026 comporte un risque invisible que les méthodologies traditionnelles ne couvrent pas\u00a0: la perte de signaux dans le Knowledge Graph et la rupture de la citabilité IA. Lorsqu\'un site change de domaine ou de structure, les associations entre la marque et ses entités dans les graphes de connaissances des LLM peuvent se fragmenter, entraînant une chute de citation dans les moteurs IA même si les redirections 301 sont correctement implémentées.',
  },

  cadre: {
    paragraphs: [
      'Une migration SEO se déroule en trois phases\u00a0: pré-migration (audit, mapping, plan de redirections), exécution (mise en ligne, vérifications techniques) et post-migration (monitoring, correction des erreurs, validation de l\'indexation). Les risques sont proportionnels à l\'ampleur du changement\u00a0: un passage HTTP → HTTPS est moins risqué qu\'un changement de domaine combiné à une refonte de l\'arborescence.',
      'Selon une étude Ahrefs (2023) portant sur 128 migrations de domaine, 74\u00a0% des sites subissent une perte de trafic organique initiale, avec une médiane de 33\u00a0% de baisse dans les 30 premiers jours. La période de récupération médiane est de 4 à 6 mois pour les migrations avec redirections 301 complètes. Barry Schwartz (Search Engine Roundtable, 2024) note que les migrations combinant changement de domaine et refonte d\'arborescence présentent un taux d\'échec (non-récupération à 12 mois) de 21\u00a0%. Les causes principales de perte sont les redirections manquantes, la perte de backlinks et la modification involontaire du contenu indexé.',
    ],
  },

  sections: [
    {
      title: 'Risques spécifiques à la citabilité IA',
      paragraphs: [
        'Les redirections 301 transfèrent le signal de classement Google d\'une URL vers une autre. Mais le Knowledge Graph des LLM ne fonctionne pas avec des URL\u00a0: il associe des entités (marque, produit, personne) à des attributs et des sources. Lors d\'une migration, plusieurs signaux du Knowledge Graph peuvent se rompre.',
      ],
      tableau: {
        caption: 'Transfert des signaux lors d\'une migration SEO',
        headers: ['Signal', 'Transfert via 301', 'Impact Knowledge Graph / LLM'],
        rows: [
          { cells: ['PageRank (autorité de page)', 'Oui (avec légère déperdition)', 'Non applicable (les LLM n\'utilisent pas le PageRank)'] },
          { cells: ['Association marque ↔ URL', 'Non automatique', 'Risque de dissociation\u00a0: le LLM peut cesser d\'associer la marque au nouveau domaine'] },
          { cells: ['Données structurées', 'Doivent être réimplémentées', 'Si absentes après migration, l\'extraction d\'entités par les LLM régresse'] },
          { cells: ['Citations tierces', 'Les backlinks sont redirigés', 'Les mentions textuelles sur des sites tiers pointent vers l\'ancien domaine'] },
          { cells: ['Historique de crawl IA', 'Perdu si le nouveau domaine n\'est pas crawlé', 'GPTBot et ClaudeBot doivent réindexer le nouveau site'] },
        ],
      },
      paragraphsAfter: [
        'La réindexation par les robots IA est un processus distinct de la réindexation Google. GPTBot ne traite pas les redirections 301 de la même manière que Googlebot, et le délai de mise à jour du Knowledge Graph des LLM est plus long que celui de l\'index Google.',
      ],
    },
    {
      title: 'Checklist des phases critiques',
      tableau: {
        caption: 'Phases et actions clés d\'une migration SEO',
        headers: ['Phase', 'Actions clés'],
        rows: [
          { cells: ['Pré-migration', 'Crawl complet du site existant, mapping URL ancien → nouveau, inventaire des backlinks, sauvegarde des données structurées, audit de la présence dans les réponses IA'] },
          { cells: ['Exécution', 'Implémentation des redirections 301, vérification page par page, soumission du nouveau sitemap, notification dans Search Console'] },
          { cells: ['Post-migration', 'Monitoring quotidien (GSC, crawl, positions), vérification de l\'indexation des nouvelles URL, test des réponses LLM, correction des erreurs 404'] },
        ],
      },
    },
    {
      title: 'Distinction\u00a0: migration technique et migration de marque',
      paragraphs: [
        'Une migration technique (changement de CMS, passage HTTPS) modifie l\'infrastructure sans changer l\'identité du site. Une migration de marque (changement de domaine, rebranding) modifie l\'identité même du site. La seconde est significativement plus risquée pour la citabilité IA\u00a0: les LLM associent une marque à un domaine, et cette association ne se transfère pas par une redirection.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'La planification et l\'exécution des redirections (301, mapping URL)' },
      { text: 'Le transfert des signaux d\'autorité (backlinks, âge du domaine)' },
      { text: 'La préservation de l\'indexation et des positions', link: { slug: 'indexation', label: 'indexation' } },
      { text: 'La réimplémentation des données structurées et du balisage technique' },
      { text: 'Le monitoring post-migration (trafic, positions, erreurs)' },
      { text: 'L\'évaluation de l\'impact sur la citabilité IA', link: { slug: 'citabilite', label: 'citabilité' } },
    ],
    neCouvrePas: [
      { text: 'La refonte du design et de l\'UX (projet distinct, bien que souvent simultané)' },
      { text: 'La migration des données applicatives (base de données, comptes utilisateurs)' },
      { text: 'La gestion du changement côté hébergement et infrastructure serveur' },
      { text: 'L\'optimisation SEO post-migration', link: { slug: 'audit-seo', label: 'Audit SEO' } },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'SEO technique', slug: 'seo-technique' },
    { label: 'Audit SEO', slug: 'audit-seo' },
    { label: 'Données structurées', slug: 'donnees-structurees' },
    { label: 'GEO', slug: 'geo' },
  ],
};
