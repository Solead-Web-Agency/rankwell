/**
 * DATA : Page Secteur Banques (FR)
 * Route : /agence-geo-seo/secteur/banque
 *
 * Secteur financier : banques de détail, banques en ligne, néobanques, banques pro.
 * Marché dominé par les comparateurs (Moneyvox, Panorabanques) et les néobanques (Boursorama, Revolut).
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'banque',
    title: 'Agence GEO & SEO pour Banques - Rankwell',
    description:
      'Rankwell accompagne les banques dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur bancaire.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Banques' },
    ],
    title: 'GEO & SEO Banque : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients comparent les banques sur Google et interrogent ChatGPT avant de choisir. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes réglementaires du secteur bancaire.',
    ctaText: 'Demander un audit GEO & SEO banque',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les banques',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">36 000 recherches mensuelles sur « banque en ligne » et 11 000 sur « banque autour de moi »</strong> en France. Le secteur se divise entre requêtes nationales de comparaison et requêtes de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> pour trouver une agence physique. La décision se joue souvent sur un comparateur ou dans la réponse d\'un moteur IA.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL par Google</strong> : exigence E-E-A-T maximale. Les contenus bancaires doivent respecter les obligations de l\'ACPR et du Code monétaire et financier. Chaque page produit doit afficher des mentions légales précises et des données tarifaires actualisées.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Moneyvox, Panorabanques, Selectra, Les Furets</strong> dominent les comparatifs bancaires. Les néobanques (Boursorama, Revolut, N26) captent une visibilité organique massive grâce à des contenus éducatifs ciblés. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, une banque reste invisible face à ces acteurs.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (E-E-A-T)
  // ============================================
  quote: {
    text: 'Selon Rankwell, les signaux E-E-A-T ne servent pas qu\'à satisfaire les Quality Raters de Google. Ils constituent le principal critère de sélection des sources par les moteurs IA, qui privilégient les contenus démontrant une expertise vérifiable et une expérience documentée plutôt qu\'une simple autorité de domaine.',
    glossarySlug: 'e-e-a-t',
    glossaryLabel: 'En savoir plus sur l\'E-E-A-T',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'banque en ligne', volume: 36000, intent: 'commerciale', difficulty: 'très élevée' },
      { keyword: 'banque en ligne gratuite', volume: 12000, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'banque autour de moi', volume: 11000, intent: 'locale', difficulty: 'élevée' },
      { keyword: 'meilleure banque en ligne', volume: 5400, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'frais bancaires', volume: 2000, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'comparatif banque en ligne', volume: 1800, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'banque pro en ligne', volume: 1300, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'banque pro', volume: 800, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'comparatif frais bancaires', volume: 300, intent: 'informationnelle', difficulty: 'moyenne' },
      { keyword: 'banque autour de moi ouvert actuellement', volume: 250, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des dizaines de milliers d\'internautes comparent les banques en ligne, cherchent une agence à proximité ou analysent les frais bancaires. La majorité consulte les 3 premiers résultats Google ou suit la recommandation d\'un moteur IA comme ChatGPT. Si votre banque n\'apparait pas dans ces résultats, ces clients potentiels se tournent vers un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les banques',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes réglementaires et concurrentielles du secteur bancaire.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site bancaire, des performances de chargement et des facteurs techniques qui freinent l\'indexation des pages produits.',
        items: [
          'Structure des pages par offre (compte courant, épargne, crédit, assurance)',
          'Balises schema.org BankOrCreditUnion et FinancialProduct',
          'Performance et Core Web Vitals sur les parcours de souscription',
          'Crawl et indexation des pages tarifs et simulateurs',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre banque dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre établissement',
          'Mesure de la légitimité et citabilité sur les requêtes bancaires',
          'Évaluation de la densité factuelle (tarifs, conditions, comparatifs)',
          'Benchmark concurrentiel face aux néobanques et comparateurs',
        ],
      },
      {
        title: 'Étude de marché & mots-clés bancaires',
        subtitle: 'Cartographie des requêtes par type de produit bancaire et zone géographique. Identification des requêtes comparatives à fort potentiel de conversion.',
        items: [
          'Combinaisons produit + intention (« meilleure banque pro », « banque en ligne sans frais »)',
          'Analyse des requêtes posées aux moteurs IA sur les produits bancaires',
          'Volumes de recherche réels par famille de produit (épargne, crédit, compte pro)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours client bancaire et le crawl Google.',
        items: [
          'Page catégorie produit vers page produit vers simulateur vers souscription',
          'Requête principale + 3 à 5 requêtes secondaires par page produit',
          'Optimisation des balises title, meta et Hn avec terminologie bancaire',
        ],
      },
      {
        title: 'Stratégie de contenu bancaire',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise de votre établissement, rédigés pour être citables par les LLM sur les requêtes financières.',
        items: [
          'Guides pratiques (« comment choisir sa banque », « comprendre les frais bancaires »)',
          'Comparatifs produits avec données chiffrées et actualisées',
          'Respect des obligations ACPR en matière de communication financière',
        ],
      },
      {
        title: 'Autorité & netlinking financier',
        subtitle: 'Développement de l\'autorité via les annuaires financiers qualifiés et les publications spécialisées du secteur bancaire.',
        items: [
          'Présence sur les comparateurs de référence (Moneyvox, Panorabanques, Les Furets)',
          'Publications dans la presse économique et financière',
          'Partenariats avec des sites institutionnels (Banque de France, ACPR, AMF)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation des fiches Google Business Profile de chaque agence pour capter les requêtes « banque autour de moi » et apparaitre dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Bank + catégories secondaires par service (prêt immobilier, gestion de patrimoine)',
          'Gestion des avis clients et stratégie de collecte par agence',
          'Photos, horaires d\'ouverture (y compris samedi), attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires financiers et Pages Jaunes',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par produit bancaire et les demandes de souscription générées.',
        items: [
          'Positions Google par mot-clé et par produit',
          'Trafic organique par famille d\'offres',
          'Score GEO : visibilité dans les moteurs IA',
          'Souscriptions et conversions par canal organique',
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
        description: 'Diagnostic site, pages produits bancaires (comptes, cr\u00e9dits, \u00e9pargne), vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates bancaires, benchmark concurrents, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage BankOrCreditUnion, FinancialProduct, FAQPage avec produits et simulateurs.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages produits, guides finances (cr\u00e9dit, \u00e9pargne, investissement), FAQ, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis comparateurs (Moneyvox, Selectra), blogs finances, presse \u00e9conomique, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par produit, trafic organique, ouvertures de compte attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre banque dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quelle banque recommandes-tu pour un professionnel ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre établissement n\'apparait dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quelle banque recommandes-tu pour un professionnel ? » : le LLM génère une liste de 5 à 7 banques segmentées par profil (auto-entrepreneur, PME, profession libérale). Il cite des noms précis (Qonto, Shine, Boursorama Pro, Hello Business, BNP Paribas) avec des critères de sélection : frais mensuels, outils de facturation intégrés, accompagnement humain. Les néobanques pro dominent systématiquement ces réponses.</p><h4>Requêtes comparatives</h4><p>« Banque en ligne vs banque traditionnelle » ou « frais bancaires comparatif » : le LLM structure un tableau comparatif sur 5 à 6 axes (frais, réseau physique, offre de crédit, application mobile, sécurité). Il donne des fourchettes chiffrées (0 à 9 euros par mois pour les banques en ligne, 5 à 30 euros pour les traditionnelles) et cite le rapport annuel du CCSF comme référence institutionnelle. Les sites comparateurs (Moneyvox, Panorabanques) sont les sources les plus susceptibles d\'être citées.</p><h4>Requêtes d\'information</h4><p>« Comment choisir une bonne banque ? » : le LLM produit un guide en 6 à 8 critères sans citer de banque ni de source externe. Les établissements publiant ce type de guide avec des données comparatives réelles sont en position d\'être extraits comme source de référence.</p><h4>Requêtes locales et Maps</h4><p>Sur « banque autour de moi ouverte le samedi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les agences disposant d\'une fiche Google Business Profile complète (horaires du samedi renseignés, avis récents, catégorie Bank) apparaissent directement dans la réponse IA. Les réseaux Banque Populaire, Caisse d\'Epargne et CIC, qui ouvrent fréquemment le samedi, sont les plus visibles.</p>',
    structuredData:
      '<p>Pour les banques, les types schema.org recommandés sont : <code>BankOrCreditUnion</code> (type principal de l\'établissement), <code>FinancialProduct</code> (pour chaque offre : compte, crédit, épargne), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>BankOrCreditUnion</code> permet à Google et aux LLM d\'identifier précisément les services proposés, la localisation des agences et les produits financiers disponibles.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre banque par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus bancaires), la Légitimité & Citabilité (signaux de confiance externes, présence sur les comparateurs, mentions presse), et la Densité Factuelle (richesse des données structurées : tarifs, conditions, grilles tarifaires).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les banques',
    items: [
      {
        question: 'Combien coute le référencement d\'un site bancaire ?',
        answer:
          'Le budget SEO pour une banque dépend du périmètre : nombre de produits, de pages agences et de zones géographiques ciblées. Chez Rankwell, les accompagnements SEO pour les établissements bancaires démarrent à 3 000 euros par mois pour une offre produit ciblée, et peuvent atteindre 10 000 à 15 000 euros par mois pour un réseau d\'agences multi-régions avec stratégie de contenu intégrée.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO bancaire ?',
        answer:
          'Les premiers résultats apparaissent entre 4 et 8 mois selon la concurrence. Les requêtes de niche (« banque pro auto-entrepreneur », « compte bancaire association ») sont plus rapides à positionner que les requêtes ultra-concurrentielles comme « banque en ligne ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le positionnement actuel de votre site.',
      },
      {
        question: 'Le SEO bancaire est-il compatible avec les obligations réglementaires ACPR ?',
        answer:
          'Le SEO est parfaitement compatible avec les exigences de l\'ACPR, à condition d\'intégrer les mentions légales obligatoires, les taux effectifs globaux (TEG) sur les pages crédit, et les avertissements sur les risques financiers. Rankwell connait ces contraintes et adapte chaque contenu pour respecter le Code monétaire et financier tout en maximisant la visibilité organique.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une banque ?',
        answer:
          'Un espace éditorial est un levier puissant pour les banques, à condition de traiter des sujets recherchés par les clients : comparatifs de frais, guides d\'ouverture de compte, conseils d\'épargne. Les articles doivent contenir des données chiffrées et actualisées pour être citables par les moteurs IA. Rankwell recommande 3 à 6 contenus par mois, ciblant des requêtes informationnelles à forte intention.',
      },
      {
        question: 'Comment une banque peut-elle apparaitre dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une banque doit accumuler des signaux de notoriété sur le web : présence sur les comparateurs financiers, mentions dans la presse économique, données tarifaires structurées sur son site, fiches Google Business Profile optimisées par agence. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une banque ?',
        answer:
          'Le SEO local cible les requêtes « banque autour de moi » et « banque ouverte le samedi » en s\'appuyant sur les fiches Google Business Profile de chaque agence, les avis clients et les citations locales. Le SEO national vise les requêtes de comparaison (« meilleure banque en ligne », « banque en ligne gratuite ») et nécessite du contenu éducatif et comparatif à forte autorité. Rankwell combine les deux approches selon la stratégie de votre établissement.',
      },
      {
        question: 'Les comparateurs bancaires suffisent-ils pour être visible ?',
        answer:
          'Les comparateurs comme Moneyvox ou Panorabanques sont utiles pour la visibilité initiale, mais ils créent une dépendance : votre banque n\'est qu\'une ligne dans un tableau parmi des dizaines. Un site propre bien référencé permet de contrôler votre image, de convertir directement et de construire une autorité durable que les comparateurs ne peuvent pas retirer. Rankwell aide les banques à batir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des intermédiaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre banque visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Assurance', href: '/agence-geo-seo/secteur/assurance' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Notaire', href: '/agence-geo-seo/secteur/notaire' },
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Drupal', href: '/agence-geo-seo/cms/drupal' },
      ],
      glossaire: [
        { label: 'GEO (Generative Engine Optimization)', href: '/glossaire/geo' },
        { label: 'Audit GEO', href: '/glossaire/audit-geo' },
        { label: 'E-E-A-T', href: '/glossaire/eeat' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Startup', href: '/agence-geo-seo/secteur/startup' },
      { label: 'PME', href: '/agence-geo-seo/secteur/pme' },
    ],
  },

  // Schema.org type principal
  schemaType: 'BankOrCreditUnion',
};

export default data;
