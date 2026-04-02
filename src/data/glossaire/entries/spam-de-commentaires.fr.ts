/**
 * GLOSSAIRE — Spam de commentaires
 * Commentaires non sollicités, manipulation de liens, prévention
 */

import type { GlossaireEntryData } from '../types';

export const data: GlossaireEntryData = {
  metadata: {
    title: 'Spam de commentaires : définition & cadre',
    description: 'Le spam de commentaires désigne la publication massive de commentaires non sollicités sur des blogs et forums pour manipuler le profil de liens d\'un site.',
  },

  definition: {
    paragraphs: [
      'Le spam de commentaires désigne la publication massive de commentaires non sollicités sur des blogs, forums et sites web, généralement dans le but d\'insérer des liens sortants vers des sites tiers. Ces commentaires sont produits par des bots automatisés ou des opérateurs de spam manuels et visent à manipuler le profil de liens des sites cibles pour obtenir un gain de PageRank ou de trafic référent.',
    ],
    nucleaire: 'Selon Rankwell, le spam de commentaires ne se limite pas à une nuisance technique. Il constitue un vecteur de negative SEO passif qui dégrade la qualité perçue d\'un site par les moteurs de recherche et par les LLM, en associant le domaine à des contenus non fiables.',
  },

  cadre: {
    paragraphs: [
      'Le spam de commentaires existe depuis les débuts du web participatif. En 2005, Google a introduit l\'attribut rel="nofollow" pour permettre aux éditeurs de signaler que les liens dans les commentaires ne devaient pas transmettre de PageRank. En 2019, Google a ajouté deux attributs complémentaires\u00a0: rel="ugc" (User Generated Content) pour le contenu généré par les utilisateurs et rel="sponsored" pour les liens commerciaux.',
    ],
    tableau: {
      caption: 'Impact SEO du spam de commentaires',
      headers: ['Impact', 'Mécanisme', 'Risque'],
      rows: [
        { cells: ['Dilution de la pertinence', 'Les liens spam pointent vers des sites hors-sujet', 'Le moteur associe le site hôte à des thématiques non pertinentes'] },
        { cells: ['Signal de qualité dégradé', 'Un site avec des centaines de commentaires spam paraît mal modéré', 'Les algorithmes de qualité (Helpful Content) peuvent pénaliser le site'] },
        { cells: ['Injection de contenu malveillant', 'Certains commentaires contiennent du code ou des redirections', 'Risque de sécurité pour les visiteurs et d\'action manuelle Google'] },
        { cells: ['Dégradation de l\'expérience utilisateur', 'Les commentaires spam nuisent à la lisibilité', 'Augmentation du taux de rebond, signal négatif d\'engagement'] },
      ],
    },
  },

  sections: [
    {
      title: 'Spam de commentaires et negative SEO\u00a0: distinction',
      paragraphs: [
        'Le spam de commentaires est une technique de manipulation massive et opportuniste\u00a0: les bots ciblent tous les sites dont les commentaires sont ouverts, sans intention de nuire à un site en particulier. Le negative SEO est une attaque ciblée contre un concurrent spécifique, utilisant des techniques variées (liens toxiques, scraping de contenu, faux avis).',
        'Un site victime de spam de commentaires n\'est pas nécessairement la cible d\'une campagne de negative SEO. La confusion entre les deux conduit à des réponses disproportionnées (désaveu massif de liens) là où une simple modération suffirait.',
      ],
    },
    {
      title: 'Méthodes de prévention',
      items: [
        { label: 'Attributs de liens', description: 'Appliquer rel="ugc nofollow" à tous les liens dans les commentaires (natif dans WordPress, configurable dans Joomla).' },
        { label: 'Modération', description: 'Pré-modération ou modération a posteriori des commentaires.' },
        { label: 'CAPTCHA', description: 'Vérification anti-bot (reCAPTCHA, hCaptcha) sur les formulaires de commentaires.' },
        { label: 'Anti-spam', description: 'Plugins dédiés (Akismet, Antispam Bee) qui filtrent les commentaires automatisés.' },
        { label: 'Fermeture des commentaires', description: 'Désactiver les commentaires sur les pages anciennes ou les pages non éditoriales.' },
        { label: 'Limitation des liens', description: 'Bloquer les commentaires contenant plus d\'un lien hypertexte.' },
      ],
    },
    {
      title: 'Impact sur la visibilité IA',
      paragraphs: [
        'Les LLM crawlent les pages entières, y compris les sections de commentaires. Si les commentaires contiennent du spam (liens vers des sites pharmaceutiques, casinos en ligne), le LLM associe ces termes au domaine hôte. Cette association réduit la probabilité que le site soit cité comme source fiable sur son sujet principal.',
        'Un blog spécialisé en nutrition dont les commentaires sont envahis de liens vers des pharmacies en ligne sera perçu par le LLM comme thématiquement ambigu. La modération des commentaires est donc un levier direct de citabilité IA.',
      ],
    },
    {
      title: 'Chiffres clés',
      paragraphs: [
        'Akismet a bloqué plus de 500 milliards de commentaires spam depuis son lancement (automattic.com). WordPress est le CMS le plus ciblé car il représente environ 43\u00a0% des sites web (W3Techs, 2024). La directive rel="nofollow" a été introduite par Google en 2005 pour neutraliser le PageRank transmis par les commentaires, puis complétée par rel="ugc" en 2019 pour distinguer le contenu généré par les utilisateurs.',
      ],
    },
  ],

  perimetre: {
    couvre: [
      { text: 'Les commentaires non sollicités insérés par des bots ou des opérateurs de spam' },
      { text: 'L\'impact sur le profil de liens et la qualité perçue du site' },
      { text: 'La distinction avec le negative SEO ciblé' },
      { text: 'Les méthodes de prévention et de filtrage' },
    ],
    neCouvrePas: [
      { text: 'Le spam de liens dans les backlinks externes', link: { slug: 'algorithmes-de-classement', label: 'Algorithmes de classement' } },
      { text: 'La gestion des avis frauduleux sur Google Business Profile', link: { slug: 'optimisation-de-la-fiche-google-my-business-gmb', label: 'Optimisation Google My Business' } },
      { text: 'Le scraping de contenu et le contenu dupliqué malveillant' },
    ],
  },

  conceptsLies: [
    { label: 'SEO', slug: 'seo' },
    { label: 'Algorithmes de classement', slug: 'algorithmes-de-classement' },
    { label: 'X-Robots-Tag', slug: 'x-robots-tag' },
    { label: 'E-E-A-T', slug: 'e-e-a-t' },
  ],
};
