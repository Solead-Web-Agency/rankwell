/**
 * DATA : Page Secteur Déménageurs (FR)
 * Route : /agence-geo-seo/secteur/demenageur
 *
 * Mots-clés Ahrefs (country: fr, mars 2026)
 * Auto-test LLM : 5 requêtes, rapport dans rapport-test-demenageur.md
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'demenageur',
    title: 'Agence GEO & SEO pour Déménageurs - Rankwell',
    description:
      'Rankwell accompagne les entreprises de déménagement dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur du déménagement.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Déménageurs' },
    ],
    title: 'GEO & SEO Déménageur : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients comparent les devis en ligne et suivent les recommandations de Google ou de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes du secteur du déménagement.',
    ctaText: 'Demander un audit GEO & SEO déménageur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les déménageurs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">82 % des recherches déménagement sont déclenchées par un besoin immédiat</strong>. Le prospect compare 3 à 5 devis en moins de 48 heures. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 premiers résultats du Local Pack Google et les entreprises citées par les moteurs IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le Code des transports encadre le secteur</strong> : inscription au registre des transporteurs, devis écrit détaillé (article L.1432-3), assurance RC professionnelle. La certification NF Service Déménagement (AFNOR) est le principal signal de confiance pour Google et les moteurs IA.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Déménager Facile, MyDéménageur, Nextories, StarOfService</strong> captent les demandes de devis sur les requêtes transactionnelles. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, une entreprise de déménagement reste un profil parmi des centaines sur ces comparateurs.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (SEO local)
  // ============================================
  quote: {
    text: 'Selon Rankwell, le SEO local est le premier domaine du référencement ou les LLM deviennent un canal de recommandation directe et mesurable : ChatGPT et Perplexity recommandent des commerces locaux en réponse a des requêtes conversationnelles, et ces recommandations s\'appuient sur des signaux différents du pack local de Google.',
    glossarySlug: 'seo-local',
    glossaryLabel: 'En savoir plus sur le SEO local',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'déménagement', volume: 6600, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'déménageur', volume: 1900, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'société de déménagement', volume: 1500, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'entreprise de déménagement', volume: 1400, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'prix d\'un déménagement tout compris', volume: 1200, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'déménageur autour de moi', volume: 900, intent: 'locale', difficulty: 'faible' },
      { keyword: 'déménageur paris', volume: 500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'déménageur prix', volume: 500, intent: 'locale', difficulty: 'faible' },
      { keyword: 'déménageur toulouse', volume: 400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'devis déménageur', volume: 350, intent: 'transactionnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 6 600 recherches portent sur le terme « déménagement » et 1 900 sur « déménageur ». Les requêtes locales comme « déménageur autour de moi » ou « déménageur paris » traduisent une intention immédiate : le prospect cherche un professionnel et comparera 3 devis dans les heures qui suivent. Si votre entreprise n\'apparait pas dans les premiers résultats, ces clients signent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les déménageurs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur du déménagement.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages de prestation.',
        items: [
          'Structure des pages par type de déménagement (local, longue distance, international, entreprise)',
          'Balises schema.org MovingCompany',
          'Performance et Core Web Vitals',
          'Crawl et indexation des pages de zone géographique',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de l\'entreprise dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'entreprise de déménagement',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu (grilles tarifaires, certifications)',
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés du déménagement',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons a faible concurrence et fort volume.',
        items: [
          'Combinaisons type de déménagement + ville a faible concurrence',
          'Analyse des requêtes posées aux moteurs IA (« quel déménageur a Paris ? »)',
          'Volumes de recherche réels par prestation et par zone',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours du prospect : de la page prestation au devis.',
        items: [
          'Page type de déménagement, page zone géographique, page devis',
          'Requête principale + 3 a 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu déménagement',
        subtitle: 'Création de contenus pratiques démontrant l\'expertise de l\'entreprise : guides tarifaires, checklists, conseils réglementaires, rédigés pour être citables par les LLM.',
        items: [
          'Guides et FAQ répondant aux PAA Google (prix, délais, assurances)',
          'Phrases factuelles auto-suffisantes avec données chiffrées par volume et distance',
          'Contenus sur les obligations légales (Code des transports, assurances)',
        ],
      },
      {
        title: 'Autorité & netlinking déménagement',
        subtitle: 'Développement de l\'autorité via les annuaires spécialisés, les comparateurs qualifiés et les publications sectorielles.',
        items: [
          'Inscription sur Déménager Facile, MyDéménageur, Pages Jaunes',
          'Présence sur les annuaires de la Chambre Syndicale du Déménagement',
          'Mentions dans la presse locale et les guides pratiques',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « déménageur + ville » et apparaitre dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Moving Company + catégories secondaires (stockage, emballage)',
          'Gestion des avis clients et stratégie de collecte post-déménagement',
          'Photos du parc de véhicules, des équipes et des chantiers',
          'Citations NAP cohérentes sur les annuaires et comparateurs',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par type de déménagement',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions',
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
        description: 'Diagnostic complet de votre site : architecture des pages par formule de d\u00e9m\u00e9nagement et par zone g\u00e9ographique, vitesse de chargement, indexation Google, balisage Hn et meta, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre entreprise dans ChatGPT, Perplexity et Gemini sur vos requ\u00eates d\u00e9m\u00e9nagement cibles. Benchmark contre 3 a 5 concurrents et Score GEO sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage MovingCompany, Service et FAQPage pr\u00eat a int\u00e9grer, avec les zones de d\u00e9m\u00e9nagement couvertes et les formules propos\u00e9es. Livr\u00e9 avec un guide d\'int\u00e9gration pour votre CMS (WordPress, Wix ou autre).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages par formule de d\u00e9m\u00e9nagement et par ville, guides de pr\u00e9paration au d\u00e9m\u00e9nagement, FAQ devis. Int\u00e9gration directe sur votre CMS ou par FTP, avec cr\u00e9ation de templates de pages si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires d\u00e9m\u00e9nagement (D\u00e9m\u00e9nager Facile, MyD\u00e9m\u00e9nageur, Pages Jaunes), blogs habitat et presse locale. Suivi des liens obtenus et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par zone g\u00e9ographique et par formule, trafic organique, demandes de devis g\u00e9n\u00e9r\u00e9es, \u00e9volution du Score GEO et recommandations d\'ajustement pour le mois suivant.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise de déménagement dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande a ChatGPT « quel déménageur recommandes-tu a Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise n\'apparait dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel déménageur recommandes-tu a Paris ? » : le LLM ne recommande pas d\'entreprise précise. Il fournit 6 critères de sélection (inscription au registre des transporteurs, certification NF Service AFNOR, devis après visite technique, assurances, avis clients) et redirige vers des comparateurs comme Déménager Facile et MyDéménageur. Les enseignes nationales (Demeco, Les Gentlemen du Déménagement, AGS) sont parfois mentionnées comme exemples, sans recommandation.</p><h4>Requêtes tarifaires</h4><p>« Prix déménagement 3 pièces Paris-Lyon » : le LLM génère des fourchettes détaillées par formule : économique (1 200 a 2 000 euros), standard (2 000 a 3 500 euros), tout compris (3 500 a 5 500 euros). Les facteurs de variation (volume en m3, étage, saison, monte-meuble) sont systématiquement listés. Les sites qui publient des grilles tarifaires précises et actualisées ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes comparatives</h4><p>« Déménageur professionnel vs location camion » : le LLM structure une comparaison détaillée avec coûts, risques et avantages de chaque option. Les contenus qui formalisent cette comparaison avec des données chiffrées sont hautement citables.</p><h4>Requêtes locales et Maps</h4><p>Sur « déménageur autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les entreprises disposant d\'une fiche Google Business Profile complète (catégorie Moving Company, avis récents, photos du parc de véhicules) apparaissent directement dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les entreprises de déménagement, les types schema.org recommandés sont : <code>MovingCompany</code> (type principal), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>MovingCompany</code> permet a Google et aux LLM d\'identifier précisément le périmètre géographique, les types de prestations et les avis clients de l\'entreprise.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de déménagement par les moteurs IA sur une échelle de 0 a 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les déménageurs',
    items: [
      {
        question: 'Combien coute le référencement d\'un site de déménageur ?',
        answer:
          'Le budget SEO pour une entreprise de déménagement dépend de la zone géographique couverte et du nombre de prestations a positionner. Chez Rankwell, les accompagnements SEO pour les déménageurs démarrent a 1 500 euros/mois pour une zone locale (une ville et sa périphérie) et peuvent atteindre 4 000 a 6 000 euros/mois pour une couverture régionale ou nationale avec plusieurs types de prestations.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un déménageur ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes locales de niche (« déménageur Dijon » ou « déménagement entreprise Nantes ») sont plus rapides a positionner que les requêtes nationales très concurrentielles comme « déménageur » ou « société de déménagement ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Quelles obligations réglementaires impactent le SEO d\'un déménageur ?',
        answer:
          'Le Code des transports impose l\'inscription au registre des transporteurs routiers, un devis écrit et détaillé (article L.1432-3), une lettre de voiture et une assurance responsabilité civile professionnelle. Ces éléments doivent être visibles sur le site pour renforcer la confiance des moteurs de recherche et des LLM. La certification NF Service Déménagement (AFNOR) constitue un signal E-E-A-T supplémentaire que Rankwell recommande d\'afficher.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de déménageur ?',
        answer:
          'Un blog est un levier puissant s\'il est bien exécuté. Les articles doivent répondre a des questions réelles des prospects : « combien coute un déménagement 3 pièces », « checklist déménagement », « comment choisir un déménageur ». Rankwell recommande 2 a 4 articles par mois, ciblant des requêtes informationnelles de longue traine, rédigés pour être citables par les moteurs IA.',
      },
      {
        question: 'Comment un déménageur peut-il apparaitre dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, une entreprise de déménagement doit accumuler des signaux de notoriété sur le web : présence sur les comparateurs spécialisés (Déménager Facile, MyDéménageur), avis Google récents et détaillés, profil Google Business optimisé, grilles tarifaires précises et contenus factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un déménageur ?',
        answer:
          'Le SEO local cible les requêtes « déménageur + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« société de déménagement », « prix déménagement tout compris ») et nécessite du contenu éducatif a forte autorité. La plupart des déménageurs ont intérêt a combiner les deux. Rankwell adapte la stratégie selon la couverture géographique de l\'entreprise.',
      },
      {
        question: 'Les comparateurs de déménagement suffisent-ils pour être visible ?',
        answer:
          'Les comparateurs comme Déménager Facile ou MyDéménageur sont utiles pour capter des demandes de devis, mais ils créent une dépendance : l\'entreprise n\'est qu\'un profil parmi des centaines, sans maitrise de son image ni de ses tarifs d\'acquisition. Un site propre bien référencé permet de convertir directement, de construire une autorité durable et de se positionner dans les réponses IA. Rankwell aide les déménageurs a bâtir cette visibilité propre grâce a une stratégie de référencement SEO & GEO indépendante des comparateurs.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt a rendre votre entreprise de déménagement visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
        { label: 'SEO Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Création de site', href: '/agence-geo-seo/projet/creation-site' },
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
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
      { label: 'Garage automobile', href: '/agence-geo-seo/secteur/garage' },
      { label: 'Syndic', href: '/agence-geo-seo/secteur/syndic' },
      { label: 'Diagnostiqueur', href: '/agence-geo-seo/secteur/diagnostiqueur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'MovingCompany',
};

export default data;
