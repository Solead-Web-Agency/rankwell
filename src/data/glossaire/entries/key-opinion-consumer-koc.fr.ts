/**
 * GLOSSAIRE — Key Opinion Consumer (KOC)
 * Influence consommateur, authenticité, citabilité IA
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Key Opinion Consumer (KOC) : définition & cadre',
    description: 'Le Key Opinion Consumer (KOC) désigne un consommateur dont les avis authentiques influencent les décisions d\'achat et la citabilité dans les réponses IA.',
  },

  definition: {
    paragraphs: [
      'Le Key Opinion Consumer (KOC) désigne un consommateur dont les avis et recommandations influencent les décisions d\'achat d\'autres consommateurs, sans que cette influence repose sur un statut de célébrité ou un contrat de sponsoring. Le KOC se distingue par l\'authenticité perçue de ses retours d\'expérience\u00a0: il partage des avis fondés sur un usage réel du produit ou du service.',
    ],
    nucleaire: 'Selon Rankwell, le KOC est le profil d\'influence le plus susceptible de générer des citations dans les réponses des LLM. Un review KOC publié sur un forum communautaire ou un blog personnel est traité comme un témoignage authentique par les LLM, tandis qu\'un post KOL sponsorisé (identifié par les mentions #ad, #sponsored, ou par le contexte commercial du profil) est pondéré à la baisse. Cette distinction est observable dans les résultats\u00a0: les recommandations produits de ChatGPT citent plus souvent des sources communautaires (Reddit, forums spécialisés) que des profils d\'influenceurs.',
  },

  cadre: {
    paragraphs: [
      'Le concept de KOC a émergé vers 2019 du marketing digital chinois, notamment sur les plateformes Xiaohongshu (Little Red Book) et Douyin, où les consommateurs ordinaires produisent des avis détaillés qui rivalisent en influence avec les contenus des créateurs professionnels. Le phénomène s\'est étendu aux marchés occidentaux via TikTok, Reddit et les forums spécialisés. Le marché mondial de l\'influence marketing est estimé à 21 milliards USD en 2024 (Influencer Marketing Hub).',
    ],
    tableau: {
      caption: 'KOC et KOL\u00a0: distinction formalisée',
      headers: ['Critère', 'KOL (Key Opinion Leader)', 'KOC (Key Opinion Consumer)'],
      rows: [
        { cells: ['Profil', 'Expert, célébrité, influenceur professionnel', 'Consommateur ordinaire'] },
        { cells: ['Audience', 'Large (10k à plusieurs millions)', 'Restreinte (quelques centaines à quelques milliers)'] },
        { cells: ['Contenu', 'Souvent sponsorisé', 'Retour d\'expérience personnel'] },
        { cells: ['Crédibilité perçue', 'Expertise, autorité', 'Authenticité, vécu réel'] },
        { cells: ['Coût pour la marque', 'Élevé', 'Faible ou nul'] },
        { cells: ['Format typique', 'Vidéo produite, post Instagram', 'Avis écrit, commentaire, thread Reddit'] },
      ],
    },
  },

  sections: [
    {
      title: 'Contenus KOC vs contenus KOL\u00a0: impact sur la citabilité IA',
      tableau: {
        caption: 'Impact des contenus KOC et KOL sur la citabilité IA',
        headers: ['Critère', 'Contenu KOC', 'Contenu KOL'],
        rows: [
          { cells: ['Perception LLM', 'Témoignage authentique', 'Contenu potentiellement sponsorisé'] },
          { cells: ['Plateforme typique', 'Reddit, forums spécialisés, blogs personnels', 'Instagram, YouTube, TikTok'] },
          { cells: ['Signal d\'authenticité', 'Usage réel, langage non promotionnel', 'Mention #ad, lien affilié, partenariat déclaré'] },
          { cells: ['Probabilité de citation IA', 'Élevée', 'Faible (pondération à la baisse)'] },
          { cells: ['Exemple', 'Thread Reddit « j\'ai testé X pendant 6 mois »', 'Post Instagram sponsorisé avec code promo'] },
        ],
      },
      paragraphsAfter: [
        'Reddit est devenu la 9e source la plus citée par ChatGPT dans les recommandations produits (observation Rankwell sur un panel de requêtes commerciales).',
      ],
    },
    {
      title: 'Impact sur la visibilité IA',
      paragraphs: [
        'Les LLM, lorsqu\'ils recommandent des produits ou des services, s\'appuient sur des sources qu\'ils évaluent comme crédibles et non biaisées. Un avis KOC publié sur un forum, un blog personnel ou une plateforme d\'avis vérifié a plus de chances d\'être intégré dans une réponse générative qu\'un post sponsorisé d\'un KOL. Les moteurs IA filtrent les contenus qu\'ils identifient comme promotionnels. L\'authenticité du KOC correspond au signal de confiance que les LLM recherchent.',
        'Cette logique rejoint les critères E-E-A-T de Google\u00a0: l\'expérience vécue (le premier E de E-E-A-T, pour Experience) est un signal que ni un KOL sponsorisé ni un contenu de marque ne peuvent reproduire avec la même crédibilité qu\'un KOC.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les consommateurs influents par leurs retours d\'expérience authentiques' },
      { text: 'La distinction avec les KOL et les influenceurs professionnels' },
      { text: 'L\'impact de l\'authenticité perçue sur la visibilité dans les réponses IA' },
      { text: 'Le rôle des KOC dans les stratégies d\'avis et de preuve sociale' },
    ],
    neCouvrePas: [
      { text: 'Le marketing d\'influence professionnel et les partenariats KOL' },
      { text: 'La gestion de la réputation en ligne', link: { slug: 'e-e-a-t', label: 'E-E-A-T' } },
      { text: 'Les plateformes d\'avis vérifiés et leur impact SEO local', link: { slug: 'optimisation-de-la-fiche-google-my-business-gmb', label: 'Optimisation Google My Business' } },
    ],
  },

  conceptsLies: [
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
    { label: 'Citabilité', slug: 'citabilite' },
    { label: 'GEO', slug: 'geo' },
    { label: 'Optimisation Google My Business', slug: 'optimisation-de-la-fiche-google-my-business-gmb' },
    { label: 'RP digitales', slug: 'rp-digitales' },
    { label: 'Content marketing SEO', slug: 'content-marketing-seo' },
  ],
};
