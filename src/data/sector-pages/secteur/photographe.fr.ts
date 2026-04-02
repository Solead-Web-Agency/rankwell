/**
 * DATA : Page Secteur Photographes (FR)
 * Route : /agence-geo-seo/secteur/photographe
 *
 * Contenu 100 % sectoriel, mots-clés Ahrefs (mars 2026)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'photographe',
    title: 'Agence GEO & SEO pour Photographes - Rankwell',
    description:
      'Rankwell accompagne les photographes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la photographie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Photographes' },
    ],
    title: 'GEO & SEO Photographe : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent un photographe sur Google, mais aussi via ChatGPT et Perplexity. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au marché très visuel et local de la photographie.',
    ctaText: 'Demander un audit GEO & SEO photographe',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les photographes',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">80 % des requêtes photographe contiennent une spécialité ou une ville</strong> (« photographe mariage Paris », « studio photo Lyon »). C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le choix se joue sur le portfolio visible dans Google Images et le Local Pack, ou sur la recommandation d\'un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le contenu visuel ne suffit pas pour le SEO</strong> : Google lit les balises alt, légendes et texte contextuel, pas les images. Un portfolio de 500 photos sans texte optimisé est invisible. Chaque spécialité (mariage, corporate, événementiel) nécessite sa propre stratégie de mots-clés.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Mariages.net, Zankyou, Instagram, Pinterest</strong> captent l\'essentiel du trafic photographe. Instagram détourne les prospects vers un écosystème fermé sans lien vers votre site. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un photographe reste noyé parmi les profils des annuaires.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (Citabilité)
  // ============================================
  quote: {
    text: 'Selon Rankwell, la citabilité d\'une marque par les LLM dépend moins de sa notoriété que de la structure factuelle de ses contenus. Un site dont chaque paragraphe contient un fait vérifiable, une donnée sourcée ou une distinction formalisée sera extrait préférentiellement par les moteurs IA, indépendamment de son autorité de domaine.',
    glossarySlug: 'citabilite',
    glossaryLabel: 'En savoir plus sur la citabilité',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'photographe', volume: 25000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'photographe autour de moi', volume: 6900, intent: 'transactionnelle', difficulty: 'moyenne' },
      { keyword: 'photographe mariage', volume: 3200, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'studio photo', volume: 2200, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'photographe paris', volume: 1600, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'prix photographe mariage', volume: 1500, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'photographe toulouse', volume: 1400, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'photographe lyon', volume: 1200, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'photographe grossesse', volume: 900, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'photographe mariage paris', volume: 800, intent: 'transactionnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des dizaines de milliers de recherches comme « photographe autour de moi » (6 900/mois), « photographe mariage » (3 200/mois) ou « photographe mariage paris » (800/mois) représentent autant de clients prêts à réserver une prestation. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre site n\'y figure pas, ces clients réservent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les photographes',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la photographie.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement (critique pour les portfolios riches en images) et des facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par spécialité photo (mariage, corporate, événementiel)',
          'Balises schema.org Photographer et ImageObject',
          'Performance et Core Web Vitals (compression images, lazy loading)',
          'Crawl et indexation des galeries photo',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du photographe dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du photographe',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA photographe',
        ],
      },
      {
        title: 'Étude de marché & mots-clés photographie',
        subtitle: 'Cartographie des requêtes par spécialité photographique et zone géographique. Identification des combinaisons « spécialité + ville » à faible concurrence.',
        items: [
          'Combinaisons spécialité + ville à faible concurrence (mariage Bordeaux, corporate Nantes)',
          'Analyse des requêtes posées aux moteurs IA sur la photographie',
          'Volumes de recherche réels par spécialité (mariage, portrait, événementiel, nouveau-né)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour guider le visiteur du portfolio vers la prise de contact, tout en facilitant le crawl Google.',
        items: [
          'Page spécialité → galerie portfolio → page tarifs → page contact',
          'Requête principale + 3-5 requêtes secondaires par page de spécialité',
          'Optimisation des balises title, meta, Hn et balises alt de chaque image',
        ],
      },
      {
        title: 'Stratégie de contenu photographique',
        subtitle: 'Création de contenus textuels accompagnant les portfolios, rédigés pour être citables par les LLM tout en valorisant l\'expertise visuelle du photographe.',
        items: [
          'Articles « coulisses » de séances photo avec données techniques (lieu, matériel, conditions)',
          'Guides pratiques répondant aux PAA Google (comment choisir son photographe, quel budget prévoir)',
          'Phrases factuelles auto-suffisantes avec données chiffrées (nombre de mariages couverts, délai de livraison)',
        ],
      },
      {
        title: 'Autorité & netlinking photographie',
        subtitle: 'Développement de l\'autorité via les annuaires spécialisés, les publications de mariage et les blogs événementiels.',
        items: [
          'Mariages.net, Zankyou, WedShoots, Fearless Photographers',
          'Publications dans la presse mariage et événementielle (La Mariée aux Pieds Nus, Mademoiselle Dentelle)',
          'Partenariats avec wedding planners, lieux de réception et prestataires événementiels',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du photographe pour capter les requêtes locales « photographe + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Photographer + catégories secondaires par spécialité (Wedding photographer, Portrait photographer)',
          'Gestion des avis clients avec photos de séances et stratégie de collecte post-prestation',
          'Photos de travaux récents, horaires, zone de déplacement et posts réguliers',
          'Citations NAP cohérentes sur les annuaires photo et mariage',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par spécialité et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé et par spécialité',
          'Trafic organique par type de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et réservations générées',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    subtitle: 'Un accompagnement d\'experts en référencement GEO & SEO, adapté au secteur de la photographie, avec des livrables concrets à chaque étape.',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic complet de votre site et de votre portfolio : optimisation des images (balises alt, compression, lazy loading), vitesse de chargement, indexation des galeries et identification des freins techniques.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité sur les requêtes photographe dans ChatGPT, Perplexity et Gemini. Benchmark de vos confrères locaux sur les moteurs IA et calcul de votre Score GEO avec axes d\'optimisation.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage structuré Photographer, ImageGallery, Service et FAQPage intégré à votre site, avec vos spécialités (mariage, portrait, corporate) et votre zone de déplacement.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Pages par spécialité, pages portfolio optimisées SEO, articles (conseils shooting, préparation séance), FAQ. Intégration directe dans votre CMS ou via FTP, avec templates réutilisables.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires photo (Mariages.net, Zankyou), blogs spécialisés et presse locale. Suivi du Domain Rating et de l\'évolution de votre profil de liens.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions Google par spécialité et zone géographique, trafic organique, demandes de devis attribuées au SEO et évolution du Score GEO dans les moteurs IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre activité photo dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel photographe de mariage recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre site n\'apparaît dans aucune source citée, vous êtes invisible dans ce nouveau canal d\'acquisition de clients.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4>' +
      '<p>Sur « quel photographe mariage recommandes-tu à Paris ? », les LLM citent rarement des photographes individuels. Seuls les professionnels à forte notoriété cross-média (publications dans Vogue, Martha Stewart Weddings, présence simultanée sur Mariages.net, Zankyou et Fearless Photographers) émergent. Les LLM redirigent systématiquement vers les annuaires spécialisés plutôt que vers des sites de photographes.</p>' +
      '<h4>Requêtes informationnelles</h4>' +
      '<p>Sur « comment choisir un photographe pour un mariage ? » ou « photographe professionnel vs amateur », les LLM produisent des guides structurés en 5-7 critères sans citer aucun photographe comme source. Le professionnel qui publie ce type de contenu éducatif avec ses propres données factuelles (nombre de mariages couverts, délai de livraison, matériel utilisé) se positionne comme source extractible.</p>' +
      '<h4>Requêtes tarifaires</h4>' +
      '<p>Sur « prix séance photo portrait en studio », les LLM donnent des fourchettes détaillées par type de séance (portrait individuel 100-250 €, corporate 150-350 €, famille 200-450 €). Un photographe qui affiche ses vrais tarifs avec forfaits, inclusions et nombre de photos retouchées crée du contenu que les LLM extrairont comme référence de prix.</p>' +
      '<h4>Requêtes locales</h4>' +
      '<p>Sur « photographe autour de moi pour photos de grossesse », les LLM ne peuvent pas géolocaliser et redirigent vers Google Maps, Mariages.net et Instagram. Le photographe optimisé en SEO local (fiche Google Business Profile complète, catégorie Photographer, avis récents avec photos de prestations) capte ce flux par ricochet.</p>',
    structuredData:
      '<p>Pour les photographes, les types schema.org recommandés sont : <code>Photographer</code> (type principal), <code>ProfessionalService</code>, <code>ImageObject</code> (pour chaque photo du portfolio), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Photographer</code> permet à Google et aux LLM d\'identifier précisément la spécialité, la zone de déplacement et les avis clients du photographe.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre activité photographique par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus textuels accompagnant le portfolio), la Légitimité & Citabilité (signaux de confiance externes : avis, mentions presse, annuaires spécialisés), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les photographes',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de photographe ?',
        answer:
          'Le budget SEO pour un photographe dépend du nombre de spécialités couvertes (mariage, portrait, corporate, événementiel) et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les photographes démarrent à 800 €/mois pour une spécialité et une ville, et peuvent atteindre 2 500-4 000 €/mois pour un studio multi-spécialités couvrant plusieurs métropoles.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO photographe ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (ex : « photographe nouveau-né Nantes ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « photographe mariage ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre marché local.',
      },
      {
        question: 'Un portfolio seul suffit-il pour être bien référencé ?',
        answer:
          'Non. Google ne « voit » pas les images : il lit les balises alt, les légendes, les titres et le texte contextuel autour de chaque photo. Un portfolio de 500 images sans texte optimisé est invisible pour les moteurs de recherche. Rankwell recommande d\'accompagner chaque galerie d\'un texte descriptif de 200-300 mots incluant le lieu, le type de prestation et des mots-clés naturels.',
      },
      {
        question: 'Faut-il un blog pour améliorer son référencement de photographe ?',
        answer:
          'Un blog photographe est un levier puissant s\'il dépasse le simple « reportage en images ». Les articles doivent répondre à des questions réelles (« quel budget pour un photographe de mariage ? », « comment se préparer pour un shooting corporate ? »), inclure des données factuelles et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2-4 articles par mois ciblant des requêtes informationnelles longue traîne.',
      },
      {
        question: 'Comment un photographe peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un photographe doit accumuler des signaux de notoriété sur le web : présence sur les annuaires spécialisés (Mariages.net, Zankyou), avis Google détaillés avec photos, mentions dans des blogs événementiels, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un photographe ?',
        answer:
          'Le SEO local cible les requêtes « photographe + spécialité + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« photographe de mariage ») et nécessite du contenu éducatif à forte autorité ainsi qu\'un netlinking sur les sites événementiels nationaux. Rankwell combine les deux approches selon la zone de chalandise du photographe.',
      },
      {
        question: 'Mariages.net et les plateformes suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme Mariages.net ou Zankyou sont utiles pour la visibilité initiale, mais elles créent une dépendance : le photographe n\'est qu\'un profil parmi des milliers, et la commission sur chaque contact réduit la marge. Un site propre bien référencé permet de contrôler son image, de présenter son portfolio sans contrainte de format et de convertir directement sans intermédiaire. Rankwell aide les photographes à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre activité photo visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Vidéaste', href: '/agence-geo-seo/secteur/videaste' },
        { label: 'SEO Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
        { label: 'SEO Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Squarespace', href: '/agence-geo-seo/cms/squarespace' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'Citabilité', href: '/glossaire/citabilite' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Vidéaste', href: '/agence-geo-seo/secteur/videaste' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Imprimeur', href: '/agence-geo-seo/secteur/imprimeur' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Fleuriste', href: '/agence-geo-seo/secteur/fleuriste' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Traiteur', href: '/agence-geo-seo/secteur/traiteur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Photographer',
};

export default data;
