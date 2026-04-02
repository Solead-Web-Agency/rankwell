/**
 * DATA : Page Secteur Plombiers (FR)
 * Route : /agence-geo-seo/secteur/plombier
 *
 * Contenu 100 % plomberie, données mots-clés Ahrefs mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'plombier',
    title: 'Agence GEO & SEO pour Plombiers - Rankwell',
    description:
      'Rankwell accompagne les plombiers et plombiers chauffagistes dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la plomberie.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Plombiers' },
    ],
    title: 'GEO & SEO Plombier : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent un plombier en urgence sur Google ou demandent une recommandation à ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes du dépannage et de l\'artisanat plomberie.',
    ctaText: 'Demander un audit GEO & SEO plombier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les plombiers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches « plombier » sont géolocalisées</strong> (« plombier autour de moi » : 10 000/mois, « plombier paris » : 5 500). Fuite d\'eau, canalisation bouchée, panne de chaudière : l\'urgence domine. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où le premier résultat du Local Pack capte l\'essentiel des appels.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le client d\'un plombier appelle le premier professionnel trouvé</strong>, sans comparer longuement. Ce comportement impose un site ultra-rapide (Core Web Vitals irréprochables), une fiche Google Business Profile avec téléphone cliquable et des pages optimisées par zone et prestation.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">HomeServe, MesDépanneurs.fr, Travaux.com, Pages Jaunes</strong> dominent les requêtes transactionnelles en plomberie et investissent massivement en SEO et Google Ads. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un plombier indépendant reste invisible face à ces plateformes.',
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
      { keyword: 'plombier', volume: 29000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'plombier chauffagiste', volume: 11000, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'plombier autour de moi', volume: 10000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'plombier paris', volume: 5500, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'plombier lyon', volume: 3600, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'dépannage plomberie', volume: 2000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'plombier chauffagiste autour de moi', volume: 1500, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'plombier urgence', volume: 1200, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'plombier à proximité', volume: 800, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'tarif horaire plombier', volume: 400, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 60 000 recherches liées à la plomberie sont effectuées en France. « Plombier autour de moi » (10 000/mois) et les déclinaisons par ville (Paris, Lyon, Marseille) montrent une intention locale dominante, souvent en situation d\'urgence. Les requêtes « dépannage plomberie » et « plombier urgence » confirment ce besoin d\'immédiateté : le premier résultat capte l\'appel.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les plombiers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la plomberie et du dépannage.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement mobile et des facteurs techniques qui freinent l\'indexation des pages de zone et de prestation.',
        items: [
          'Structure des pages par type d\'intervention (dépannage, installation, entretien)',
          'Balises schema.org Plumber et HomeAndConstructionBusiness',
          'Performance mobile et Core Web Vitals (LCP critique pour les urgences)',
          'Crawl et indexation des pages géolocalisées',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre entreprise de plomberie dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre entreprise de plomberie',
          'Mesure de la légitimité et citabilité sur les requêtes « plombier + ville »',
          'Évaluation de la densité factuelle du contenu (tarifs, zones, certifications)',
          'Benchmark concurrentiel sur les requêtes IA liées à la plomberie',
        ],
      },
      {
        title: 'Étude de marché & mots-clés plomberie',
        subtitle: 'Cartographie des requêtes par type d\'intervention et zone géographique. Identification des combinaisons à fort potentiel et faible concurrence.',
        items: [
          'Combinaisons prestation + ville à faible concurrence (« plombier chauffagiste Nantes »)',
          'Analyse des requêtes d\'urgence posées aux moteurs IA',
          'Volumes de recherche réels par type d\'intervention (dépannage, installation, entretien chaudière)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne orienté conversion rapide, pensé pour le parcours d\'un client en urgence.',
        items: [
          'Page prestation → page zone d\'intervention → page contact / appel',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec numéro de téléphone visible',
        ],
      },
      {
        title: 'Stratégie de contenu plomberie',
        subtitle: 'Création de contenus pratiques démontrant l\'expertise du plombier, rédigés pour être citables par les LLM et répondre aux questions fréquentes des clients.',
        items: [
          'Guides de dépannage et FAQ répondant aux PAA Google (« comment déboucher un évier »)',
          'Pages de tarifs avec fourchettes de prix par intervention',
          'Contenu certifications et qualifications (Qualibat, RGE, PG plomberie)',
        ],
      },
      {
        title: 'Autorité & netlinking plomberie',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels qualifiés et les partenariats locaux.',
        items: [
          'Pages Jaunes, HomeServe, Travaux.com, MesDépanneurs.fr',
          'Annuaires locaux des artisans (CMA, CAPEB)',
          'Partenariats avec des sites de quartier et mairies',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « plombier + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Plumber + catégories secondaires (chauffagiste, dépannage)',
          'Gestion des avis clients et stratégie de collecte post-intervention',
          'Photos de chantiers, certifications, horaires d\'intervention et zone de service',
          'Citations NAP cohérentes sur les annuaires professionnels et locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par zone géographique et les appels téléphoniques générés.',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par type d\'intervention',
          'Score GEO : visibilité dans les moteurs IA',
          'Appels téléphoniques, demandes de devis et conversions',
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
        description: 'Diagnostic complet de votre site : pages prestations (d\u00e9pannage, installation, chauffage), vitesse de chargement mobile, indexation locale et facteurs techniques bloquants.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 sur les requ\u00eates plombier aupr\u00e8s des moteurs IA, benchmark de vos confr\u00e8res locaux et calcul de votre Score GEO avec axes d\'am\u00e9lioration.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage Plumber, HomeAndConstructionBusiness, Service et FAQPage pr\u00eat \u00e0 d\u00e9ployer, incluant vos zones d\'intervention et vos prestations d\'urgence.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages prestations, pages villes et zones d\'intervention, articles conseils (entretien chaudi\u00e8re, fuites), FAQ, int\u00e9gration CMS ou FTP et templates optimis\u00e9s.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis les annuaires artisans (Qualibat, PagesJaunes, HomeServe), blogs habitat et presse locale. Suivi du Domain Rating et de la progression.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par prestation et par zone, trafic organique, appels et devis attribu\u00e9s au SEO, \u00e9volution du Score GEO et recommandations pour la p\u00e9riode suivante.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise de plomberie dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel plombier recommandes-tu à Lyon pour une fuite d\'eau ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition, et l\'appel part chez un concurrent.',
    llmBehavior:
      '<h4>Aucun plombier cité nommément</h4>' +
      '<p>Sur « quel plombier recommandes-tu à Lyon pour une fuite d\'eau ? » et « plombier en urgence autour de moi un dimanche », <strong>les LLM ne citent aucune entreprise de plomberie</strong>. Contrairement aux agences SEO ou aux cabinets d\'avocats, le secteur artisanal local ne génère aucune recommandation nominative. Seules les plateformes sont mentionnées : Pages Jaunes, HomeServe, MesDépanneurs.fr, Google Maps.</p>' +
      '<h4>Les plateformes captent toute la visibilité IA</h4>' +
      '<p>Sur 5 requêtes testées, les plateformes et annuaires apparaissent dans 4 réponses sur 5. Un plombier absent de ces sources est totalement invisible pour les moteurs IA.</p>' +
      '<h4>Fourchettes de prix et alerte arnaques systématiques</h4>' +
      '<p>Sur « tarif plombier pour changer un chauffe-eau » et « comment trouver un plombier pas cher et fiable ? », les LLM fournissent des fourchettes indicatives (800-1 500 € chauffe-eau électrique, 40-70 €/h en province). L\'alerte sur les arnaques au dépannage apparaît dans 4 réponses sur 5. Le secteur est marqué par un déficit de confiance.</p>' +
      '<h4>Le contenu factuel devient source de référence</h4>' +
      '<p>Sur « plombier vs plombier-chauffagiste : quelle différence ? », le LLM produit une réponse encyclopédique. Un site publiant ses <strong>tarifs détaillés, certifications (Qualibat, RGE) et guides pratiques</strong> crée exactement le type de données factuelles que les LLM extraient et citent en source.</p>',
    structuredData:
      '<p>Pour les entreprises de plomberie, les types schema.org recommandés sont : <code>Plumber</code> (type principal), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Plumber</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées (dépannage, installation, entretien), la zone d\'intervention et les avis clients de l\'entreprise.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de plomberie par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur vos prestations et zones), la Légitimité & Citabilité (signaux de confiance externes : avis, annuaires, mentions), et la Densité Factuelle (richesse des données structurées, tarifs publiés et certifications affichées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les plombiers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de plombier ?',
        answer:
          'Le budget SEO pour un plombier dépend de la zone géographique ciblée et du nombre de prestations à positionner. Chez Rankwell, les accompagnements SEO pour les plombiers démarrent à 800 €/mois pour une ville et un type d\'intervention, et peuvent atteindre 2 500-4 000 €/mois pour une entreprise de plomberie multi-zones en Île-de-France ou dans une grande métropole.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO plomberie ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (ex : « plombier chauffagiste Villeurbanne ») sont plus rapides à positionner que les requêtes très concurrentielles (« plombier Paris »). L\'optimisation de la fiche Google Business Profile produit souvent des résultats dès les premières semaines. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Comment un plombier peut-il se démarquer des arnaques au dépannage en ligne ?',
        answer:
          'Le secteur de la plomberie d\'urgence souffre d\'une mauvaise réputation liée aux arnaques au dépannage (surfacturation, faux artisans). Un plombier sérieux doit afficher clairement ses certifications (Qualibat, RGE), ses tarifs, son numéro SIRET et ses avis vérifiés. Rankwell structure cette transparence sur le site et la fiche Google pour rassurer Google, les moteurs IA et les clients potentiels.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de plombier ?',
        answer:
          'Un blog avec des guides pratiques est un levier puissant pour un plombier : « comment couper l\'eau en cas de fuite », « quand changer son ballon d\'eau chaude », « prix d\'un remplacement de chaudière ». Ces contenus répondent aux questions réelles des clients et positionnent le site sur des requêtes informationnelles. Rankwell recommande 2-4 articles par mois, ciblant les PAA Google et les requêtes posées aux moteurs IA.',
      },
      {
        question: 'Comment un plombier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un plombier doit accumuler des signaux de notoriété sur le web : présence sur les annuaires professionnels (Pages Jaunes, HomeServe, Travaux.com), avis Google récents et positifs, contenu riche sur son site (tarifs, zones, certifications). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA pour les artisans du bâtiment.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un plombier ?',
        answer:
          'Le SEO local cible les requêtes « plombier + ville » ou « plombier à proximité » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques (« tarif plombier », « comment choisir un plombier ») et nécessite du contenu éducatif à forte autorité. Pour la quasi-totalité des plombiers, le SEO local est prioritaire. Rankwell combine les deux approches selon la taille de l\'entreprise et sa zone d\'intervention.',
      },
      {
        question: 'Les plateformes comme HomeServe ou Pages Jaunes suffisent-elles pour être visible ?',
        answer:
          'Les annuaires comme HomeServe ou Pages Jaunes apportent une visibilité initiale, mais ils créent une dépendance : votre entreprise n\'est qu\'un profil parmi des centaines, et vous payez pour chaque lead. Un site propre bien référencé permet de recevoir des appels directs sans commission, de contrôler votre image et de construire une autorité durable. Rankwell aide les plombiers à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise de plomberie visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à votre zone d\'intervention.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Chauffagiste', href: '/agence-geo-seo/secteur/chauffagiste' },
        { label: 'SEO Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
        { label: 'SEO Couvreur', href: '/agence-geo-seo/secteur/couvreur' },
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
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Chauffagiste', href: '/agence-geo-seo/secteur/chauffagiste' },
      { label: 'Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
      { label: 'Couvreur', href: '/agence-geo-seo/secteur/couvreur' },
      { label: 'Carreleur', href: '/agence-geo-seo/secteur/carreleur' },
      { label: 'Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      { label: 'Charpentier', href: '/agence-geo-seo/secteur/charpentier' },
      { label: 'Vitrier', href: '/agence-geo-seo/secteur/vitrier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Plumber',
};

export default data;
