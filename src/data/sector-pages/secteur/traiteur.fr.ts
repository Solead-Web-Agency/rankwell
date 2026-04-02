/**
 * DATA : Page Secteur Traiteurs (FR)
 * Route : /agence-geo-seo/secteur/traiteur
 *
 * Contenu sectoriel complet pour les traiteurs et traiteurs événementiels
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'traiteur',
    title: 'Agence GEO & SEO pour Traiteurs - Rankwell',
    description:
      'Rankwell accompagne les traiteurs dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la restauration événementielle.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Traiteurs' },
    ],
    title: 'GEO & SEO Traiteur : visibilité Google & moteurs IA',
    subtitle:
      'Mariages, séminaires, cocktails : vos futurs clients comparent les traiteurs sur Google et demandent des recommandations aux moteurs IA. Nos experts en référencement GEO & SEO positionnent votre activité là où se prennent les décisions.',
    ctaText: 'Demander un audit GEO & SEO traiteur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les traiteurs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches traiteur contiennent un critère géographique ou événementiel</strong> (« traiteur mariage Bordeaux », « traiteur entreprise Paris »). C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> saisonnier : la période mai-septembre concentre <strong>plus de 60 % des demandes de devis</strong>.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le cycle de décision est long : 2 à 8 mois avant l\'événement</strong>, le prospect visite 4 à 6 sites avant de demander un devis. Les traiteurs doivent convaincre par le contenu visuel et les preuves sociales. La saisonnalité impose de publier en janvier pour capter les mariages d\'été.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Mariages.net, WedShoots, PagesJaunes et Google Maps</strong> captent la majorité du trafic transactionnel. Sur « traiteur mariage », les trois premiers résultats Google sont des annuaires, pas des traiteurs indépendants. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un traiteur reste noyé dans ces listings.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement où les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse à des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'traiteur autour de moi', volume: 12000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'traiteur', volume: 11000, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'traiteur mariage', volume: 3500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'traiteur paris', volume: 1800, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'traiteur toulouse', volume: 1400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'prix traiteur mariage', volume: 800, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'traiteur événementiel paris', volume: 700, intent: 'locale', difficulty: 'moyenne' },
      { keyword: 'traiteur cocktail paris', volume: 450, intent: 'locale', difficulty: 'faible' },
      { keyword: 'traiteur mariage lyon', volume: 350, intent: 'locale', difficulty: 'faible' },
      { keyword: 'traiteur mariage bordeaux', volume: 250, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 12 000 recherches « traiteur autour de moi » traduisent une intention immédiate de trouver un prestataire. Les requêtes localisées (« traiteur mariage Lyon », « traiteur cocktail Paris ») représentent des demandes de devis concrètes. Si votre site n\'apparaît pas dans les 3 premiers résultats Google ou dans la recommandation d\'un moteur IA, ces prospects contactent vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les traiteurs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes de la restauration événementielle.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation. Attention particulière aux galeries photos (poids des images, lazy loading, balises alt).',
        items: [
          'Structure des pages par type de prestation (mariage, entreprise, cocktail)',
          'Balises schema.org FoodEstablishment et CateringService',
          'Performance et Core Web Vitals (optimisation des images haute résolution)',
          'Crawl et indexation des pages menus saisonniers',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du traiteur dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'activité traiteur',
          'Mesure de la légitimité et citabilité auprès des LLM',
          'Évaluation de la densité factuelle du contenu (menus, tarifs, réalisations)',
          'Benchmark concurrentiel sur les requêtes IA événementielles',
        ],
      },
      {
        title: 'Étude de marché & mots-clés événementiels',
        subtitle: 'Cartographie des requêtes par type d\'événement et zone géographique. Identification des combinaisons à faible concurrence et fort potentiel de conversion.',
        items: [
          'Combinaisons type d\'événement + ville (« traiteur mariage Bordeaux »)',
          'Analyse des requêtes posées aux moteurs IA sur les traiteurs',
          'Volumes de recherche réels par prestation et par saison',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours utilisateur : de la découverte à la demande de devis.',
        items: [
          'Page prestation → page galerie → page devis',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn par type d\'événement',
        ],
      },
      {
        title: 'Stratégie de contenu événementiel',
        subtitle: 'Création de contenus éducatifs démontrant le savoir-faire du traiteur, rédigés pour être citables par les LLM : guides de choix, grilles tarifaires, réalisations commentées.',
        items: [
          'Guides pratiques répondant aux PAA Google (« comment choisir un traiteur »)',
          'Phrases factuelles auto-suffisantes avec données chiffrées (fourchettes de prix, capacité)',
          'Contenus saisonniers anticipés (publier en janvier pour les mariages d\'été)',
        ],
      },
      {
        title: 'Autorité & netlinking événementiel',
        subtitle: 'Développement de l\'autorité via les plateformes spécialisées et les partenariats avec les acteurs de l\'événementiel.',
        items: [
          'Mariages.net, WedShoots, PagesJaunes',
          'Partenariats avec les lieux de réception, wedding planners, photographes',
          'Publications dans la presse locale et les magazines événementiels',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du traiteur pour capter les requêtes locales « traiteur + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Caterer + catégories secondaires (Wedding Venue, Catering Service)',
          'Gestion des avis clients et stratégie de collecte post-événement',
          'Photos de buffets, cocktails et mises en scène avec géolocalisation',
          'Citations NAP cohérentes sur les annuaires événementiels',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type d\'événement et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé événementiel',
          'Trafic organique par type de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions par canal',
        ],
      },
    ],
  },

  // ============================================
  // BLOC 5 : Ce que Rankwell vous apporte (FeaturesGrid 3x3)
  // ============================================
  features: {
    title: 'Les livrables concrets que vous recevez',
    items: [
      {
        id: 1,
        title: 'Rapport d\'audit technique',
        description: 'Diagnostic site, pages formules/evenements, vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilite requetes traiteur/evenementiel, benchmark concurrents, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cle en main',
        description: 'Balisage FoodEstablishment, CateringService, FAQPage avec formules et zones de livraison.',
      },
      {
        id: 4,
        title: 'Production et integration de contenus',
        description: 'Pages formules (mariage, entreprise, cocktail), articles evenementiel, FAQ, integration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires mariage (Mariages.net), blogs evenementiel, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par type d\'evenement, trafic organique, demandes de devis attribuees, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre activité traiteur dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel traiteur recommandes-tu pour un mariage à Bordeaux ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre activité traiteur n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel traiteur recommandes-tu pour un mariage à Bordeaux ? » : le LLM ne cite aucun traiteur par son nom. Il fournit une liste de 5 à 7 critères de sélection (spécialisation mariage, dégustation préalable, avis clients, flexibilité du menu) et renvoie vers Mariages.net, WedShoots et Google Maps. Les traiteurs qui publient des contenus riches et factuels sur leur site ont le plus de chances d\'être référencés comme source.</p><h4>Requêtes d\'information et de comparaison</h4><p>« Comment choisir un bon traiteur ? » : le LLM génère un guide structuré en 7 critères (dégustation, flexibilité, rapport qualité-prix, logistique complète) sans citer de traiteur ni de source externe. « Traiteur vs chef à domicile » : le LLM produit un comparatif structuré sur la logistique, la capacité d\'accueil et les fourchettes de prix.</p><h4>Requêtes tarifaires</h4><p>« Prix traiteur mariage par personne » : le LLM donne des fourchettes détaillées. Cocktail dinatoire : 40 à 70 euros. Repas assis : 80 à 150 euros. Haut de gamme : 150 à 300+ euros. Il précise les écarts régionaux (Île-de-France 20 à 30 % plus cher). Les sites publiant des grilles tarifaires transparentes ont un avantage de citabilité.</p><h4>Requêtes locales et Maps</h4><p>Sur « traiteur autour de moi pour un événement », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les traiteurs disposant d\'une fiche Google Business Profile complète (catégorie Caterer, photos d\'événements, avis récents avec note supérieure à 4,2) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les traiteurs, les types schema.org recommandés sont : <code>FoodEstablishment</code> (type principal), <code>CateringService</code> (type spécifique non officiel mais reconnu par Google), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>FoodEstablishment</code> avec les propriétés <code>servesCuisine</code>, <code>priceRange</code> et <code>areaServed</code> permet à Google et aux LLM d\'identifier la spécialisation, la gamme de prix et la zone d\'intervention du traiteur.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre activité traiteur par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur vos prestations), la Légitimité & Citabilité (signaux de confiance externes : avis, mentions, partenariats), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les traiteurs',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de traiteur ?',
        answer:
          'Le budget SEO pour un traiteur dépend de la zone géographique ciblée et du nombre de prestations à positionner (mariage, entreprise, cocktail). Chez Rankwell, les accompagnements SEO pour les traiteurs démarrent à 1 200 euros par mois pour une ville et un type d\'événement, et peuvent atteindre 3 500 à 5 000 euros par mois pour un traiteur multi-prestations couvrant plusieurs départements.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO traiteur ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« traiteur mariage Nantes » ou « traiteur cocktail Lyon ») sont plus rapides à positionner que les requêtes nationales concurrentielles. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et adapté à la saisonnalité du secteur événementiel.',
      },
      {
        question: 'La saisonnalité impacte-t-elle le SEO d\'un traiteur ?',
        answer:
          'La saisonnalité est un facteur déterminant pour les traiteurs : plus de 60 % des recherches « traiteur mariage » se concentrent entre janvier et juin, pour des événements prévus entre mai et septembre. Rankwell anticipe ces pics en publiant les contenus stratégiques 3 à 6 mois avant la haute saison, ce qui permet de capter les prospects dès le début de leur recherche.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de traiteur ?',
        answer:
          'Un blog est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des prospects : « comment choisir un traiteur pour son mariage », « prix traiteur par personne », « buffet ou repas assis ». Rankwell recommande 2 à 4 articles par mois ciblant des requêtes informationnelles de longue traîne, avec des données chiffrées et des photos de réalisations pour maximiser la citabilité IA.',
      },
      {
        question: 'Comment un traiteur peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un traiteur doit accumuler des signaux de notoriété sur le web : présence sur Mariages.net et les annuaires événementiels, avis Google récents et nombreux, mentions dans la presse locale, contenus riches et factuels sur son site (menus détaillés, grilles tarifaires, réalisations). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un traiteur ?',
        answer:
          'Le SEO local cible les requêtes « traiteur + type d\'événement + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« meilleur traiteur mariage France ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la zone d\'intervention du traiteur et le type de clientèle ciblé.',
      },
      {
        question: 'Mariages.net et les annuaires suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme Mariages.net sont utiles pour la visibilité initiale, mais elles créent une dépendance : le traiteur n\'est qu\'un profil parmi des centaines, soumis à un algorithme de classement opaque et à une commission sur les leads. Un site propre bien référencé permet de contrôler son image, de convertir directement sans intermédiaire et de construire une autorité durable. Rankwell aide les traiteurs à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre activité traiteur visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Wix', href: '/agence-geo-seo/cms/wix' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'SEO local', href: '/glossaire/seo-local' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Coiffeur', href: '/agence-geo-seo/secteur/coiffeur' },
      { label: 'Spa', href: '/agence-geo-seo/secteur/spa' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
    ],
  },

  // Schema.org type principal
  schemaType: 'FoodEstablishment',
};

export default data;
