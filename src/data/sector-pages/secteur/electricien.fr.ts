/**
 * DATA : Page Secteur Électriciens (FR)
 * Route : /agence-geo-seo/secteur/electricien
 *
 * Mots-clés Ahrefs (mars 2026), marché FR
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'electricien',
    title: 'Agence GEO & SEO pour Électriciens - Rankwell',
    description:
      'Rankwell accompagne les électriciens dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de l\'électricité.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Électriciens' },
    ],
    title: 'GEO & SEO Électricien : visibilité Google & moteurs IA',
    subtitle:
      'Dépannage, installation, mise aux normes : vos futurs clients cherchent un électricien en urgence sur Google et dans les réponses IA. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du métier d\'électricien.',
    ctaText: 'Demander un audit GEO & SEO électricien',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les électriciens',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">66 % des recherches « électricien » contiennent un nom de ville ou « à proximité »</strong>. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> d\'urgence : panne, disjoncteur qui saute, mise en conformité. Le client appelle le premier résultat affiché dans le Local Pack ou cité par un moteur IA.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Qualifelec, habilitations électriques (BR, B2V, H0V) et assurance décennale sont des signaux E-E-A-T décisifs</strong>. Un site qui n\'affiche pas ses certifications NF C 15-100 et son SIRET sera déclassé face aux concurrents qui documentent leurs qualifications.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Engie Home Services, HomeServe, MesDépanneurs.fr, Pages Jaunes</strong> captent les requêtes transactionnelles de dépannage électrique. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte de l\'artisanat, un électricien indépendant reste invisible face à ces plateformes.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (E-E-A-T)
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
      { keyword: 'electricien', volume: 16000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'electricien autour de moi', volume: 5700, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'electricien paris', volume: 2100, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'electricien lyon', volume: 1400, intent: 'transactionnelle', difficulty: 'moyenne' },
      { keyword: 'electricien nice', volume: 1300, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'electricien marseille', volume: 1300, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'dépannage électrique', volume: 1000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'electricien toulouse', volume: 800, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'installation électrique', volume: 700, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'tarif électricien', volume: 150, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 16 000 recherches portent sur « electricien » en France, dont une majorité de requêtes locales (« electricien autour de moi », « electricien paris », « electricien lyon »). Ces internautes cherchent un artisan pour un dépannage, une installation ou un devis. Ils cliquent sur les 3 premiers résultats du pack local ou suivent la recommandation d\'un moteur IA. Si votre entreprise d\'électricité n\'y figure pas, ces clients contactent un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les électriciens',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de l\'électricité et de l\'artisanat du bâtiment.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation d\'un site d\'électricien.',
        items: [
          'Structure des pages par type de prestation (dépannage, installation, mise aux normes)',
          'Balises schema.org Electrician',
          'Performance et Core Web Vitals',
          'Crawl et indexation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre entreprise d\'électricité dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'électricien',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés électricité',
        subtitle: 'Cartographie des requêtes par type de prestation électrique et zone géographique. Identification des combinaisons « prestation + ville » à faible concurrence.',
        items: [
          'Combinaisons dépannage/installation + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA (« quel électricien recommandes-tu ? »)',
          'Volumes de recherche réels par type d\'intervention',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'un client en recherche d\'électricien.',
        items: [
          'Page prestation → page zone d\'intervention → page contact/devis',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu électricité',
        subtitle: 'Création de contenus techniques démontrant l\'expertise de l\'électricien, rédigés pour être citables par les LLM et conformes aux normes du métier.',
        items: [
          'Guides pratiques : « comment vérifier sa conformité NF C 15-100 »',
          'FAQ répondant aux PAA Google sur les interventions courantes',
          'Phrases factuelles auto-suffisantes avec données chiffrées (tarifs moyens, délais)',
        ],
      },
      {
        title: 'Autorité & netlinking artisan',
        subtitle: 'Développement de l\'autorité via les annuaires qualifiés du bâtiment et les plateformes de mise en relation.',
        items: [
          'Qualifelec, FFIE (Fédération Française des Intégrateurs Électriciens)',
          'Annuaires artisans : Pages Jaunes, 123devis, Travaux.com',
          'Inscriptions sur les répertoires institutionnels (CMA, Qualibat)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « électricien + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Electrician + catégories secondaires (Electrical Installation Service, Lighting Contractor)',
          'Gestion des avis clients et stratégie de collecte post-intervention',
          'Photos de chantiers, horaires, zone d\'intervention et posts réguliers',
          'Citations NAP cohérentes sur les annuaires artisans et du bâtiment',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type d\'intervention et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par type de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et appels entrants',
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
        description: 'Diagnostic du site, architecture des pages de prestations (installation, dépannage, mise aux normes), vitesse mobile, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilité sur les requêtes électricien dans les moteurs IA, benchmark confrères locaux, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org clé en main',
        description: 'Balisage Electrician, HomeAndConstructionBusiness, Service, FAQPage avec zones d\'intervention et certifications Qualifelec.',
      },
      {
        id: 4,
        title: 'Production et intégration de contenus',
        description: 'Pages prestations, pages zones d\'intervention, articles conseils (normes NF C 15-100), FAQ, intégration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires artisans (Qualibat, PagesJaunes, CAPEB), blogs habitat, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par prestation et zone, trafic organique, demandes de devis attribuées au SEO, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise d\'électricité dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel électricien recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise d\'électricité n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Aucun nom d\'artisan cité, jamais</h4>' +
      '<p>Sur les 5 requêtes testées (« quel électricien recommandes-tu à Marseille ? », « comment trouver un bon électricien de confiance ? », « électricien en urgence autour de moi »), <strong>Claude ne cite aucun nom d\'entreprise d\'électricité</strong>. Le marché artisanal local est trop fragmenté pour que les LLM mémorisent des noms. À la place, Claude redirige vers Google Maps, Pages Jaunes et Allovoisins.</p>' +
      '<h4>Qualifelec : premier signal de confiance</h4>' +
      '<p>La certification Qualifelec apparaît dans 3 réponses sur 5 comme critère de sélection n°1. Les habilitations électriques (BR, B2V, H0V) et l\'assurance décennale suivent systématiquement. Un site d\'électricien qui n\'affiche pas ces qualifications est ignoré par les LLM dans leurs critères de recommandation.</p>' +
      '<h4>Fourchettes de prix et norme NF C 15-100</h4>' +
      '<p>Sur « tarif électricien pour refaire un tableau électrique », Claude donne des fourchettes précises (800 – 2 500 €) avec facteurs de variation. La norme NF C 15-100 est citée dans 3 requêtes sur 5 comme référentiel technique central. L\'électricien qui publie des grilles tarifaires transparentes et des guides NF C 15-100 sur son site devient une source citable.</p>' +
      '<h4>Urgence : Google Maps en première réponse</h4>' +
      '<p>Sur « électricien en urgence autour de moi », Claude redirige immédiatement vers Google Maps et ajoute une <strong>mise en garde systématique contre les arnaques au dépannage</strong> (tarifs abusifs, absence de devis). Les électriciens visibles dans le Local Pack avec avis récents et tarifs affichés sont les seuls à apparaître dans ce canal IA.</p>',
    structuredData:
      '<p>Pour les électriciens, les types schema.org recommandés sont : <code>Electrician</code> (type principal), <code>HomeAndConstructionBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Electrician</code> permet à Google et aux LLM d\'identifier précisément le type d\'interventions proposées (dépannage, installation, mise aux normes), la zone d\'intervention et les avis clients de l\'artisan.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise d\'électricité par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus techniques), la Légitimité & Citabilité (signaux de confiance externes : Qualifelec, avis, mentions), et la Densité Factuelle (richesse des données structurées et des entités nommées liées à vos prestations).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les électriciens',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'électricien ?',
        answer:
          'Le budget SEO pour un électricien dépend de la zone géographique ciblée et du nombre de prestations à positionner (dépannage, installation, mise aux normes). Chez Rankwell, les accompagnements SEO pour les artisans électriciens démarrent à 800 €/mois pour une ville et un type d\'intervention, et peuvent atteindre 2 500-4 000 €/mois pour une couverture multi-villes en Île-de-France ou dans les grandes métropoles.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un électricien ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (ex : « électricien mise aux normes Nantes ») sont plus rapides à positionner que les requêtes génériques très concurrentielles comme « électricien Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone d\'intervention.',
      },
      {
        question: 'Les certifications Qualifelec et les habilitations électriques aident-elles le SEO ?',
        answer:
          'Oui, les certifications professionnelles comme Qualifelec, les habilitations BR/B2V/H0V et l\'assurance décennale sont des signaux E-E-A-T majeurs pour Google. Afficher ces qualifications de manière structurée sur votre site renforce la confiance de Google et des moteurs IA. Rankwell intègre systématiquement ces éléments dans la stratégie de contenu et le balisage schema.org des sites d\'électriciens.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site d\'électricien ?',
        answer:
          'Un blog technique est un levier puissant pour un électricien s\'il est bien exécuté. Les articles doivent répondre à des questions concrètes (« comment vérifier sa conformité NF C 15-100 », « quand refaire son tableau électrique »), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2-3 articles par mois ciblant des requêtes informationnelles liées aux interventions courantes.',
      },
      {
        question: 'Comment un électricien peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un électricien doit accumuler des signaux de notoriété sur le web : présence sur les annuaires du bâtiment (Qualifelec, Qualibat, Pages Jaunes), avis Google récents et détaillés, profil Google Business Profile optimisé, contenus techniques riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA pour les artisans du bâtiment.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un électricien ?',
        answer:
          'Le SEO local cible les requêtes « électricien + ville » ou « électricien à proximité » et s\'appuie sur Google Business Profile, les avis clients post-intervention et les citations sur les annuaires artisans. Le SEO national vise des requêtes génériques (« tarif électricien », « normes électriques maison ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la couverture géographique de l\'artisan.',
      },
      {
        question: 'Les plateformes comme HomeServe ou MesDépanneurs.fr suffisent-elles pour être visible ?',
        answer:
          'Les plateformes de mise en relation comme HomeServe, MesDépanneurs.fr ou Allovoisins apportent des leads ponctuels, mais elles créent une dépendance coûteuse : commission sur chaque intervention, aucun contrôle sur l\'image de marque, et zéro construction d\'autorité propre. Un site d\'électricien bien référencé permet de recevoir des demandes de devis directes, sans commission, et de bâtir une réputation durable. Rankwell aide les artisans électriciens à construire cette visibilité indépendante grâce à une stratégie de référencement SEO & GEO qui ne dépend d\'aucune plateforme tierce.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise d\'électricité visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au secteur de l\'électricité.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
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
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Chauffagiste', href: '/agence-geo-seo/secteur/chauffagiste' },
      { label: 'Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
      { label: 'Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      { label: 'Couvreur', href: '/agence-geo-seo/secteur/couvreur' },
      { label: 'Carreleur', href: '/agence-geo-seo/secteur/carreleur' },
      { label: 'Charpentier', href: '/agence-geo-seo/secteur/charpentier' },
      { label: 'Vitrier', href: '/agence-geo-seo/secteur/vitrier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Electrician',
};

export default data;
