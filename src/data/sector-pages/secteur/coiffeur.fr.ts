/**
 * DATA : Page Secteur Coiffeurs (FR)
 * Route : /agence-geo-seo/secteur/coiffeur
 *
 * Données Ahrefs (mars 2026), auto-test LLM factuel
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'coiffeur',
    title: 'Agence GEO & SEO pour Coiffeurs - Rankwell',
    description:
      'Rankwell accompagne les salons de coiffure dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la coiffure.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Coiffeurs' },
    ],
    title: 'GEO & SEO Coiffeur : visibilité Google & moteurs IA',
    subtitle:
      'Votre salon doit apparaître là où vos futurs clients cherchent : sur Google Maps, Planity, et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au secteur de la coiffure.',
    ctaText: 'Demander un audit GEO & SEO coiffeur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les coiffeurs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">32 000 recherches mensuelles sur « coiffeur autour de moi »</strong>, auxquelles s\'ajoutent 7 700 pour « coiffeur paris » et 5 400 pour Lyon et Toulouse. La quasi-totalité sont effectuées sur mobile avec une intention immédiate de réservation. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la décision se joue entre les 3 salons du Local Pack Google et ceux affichés par Planity.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La coiffure est un secteur à très forte densité concurrentielle locale</strong> : 40 à 80 salons se disputent la visibilité sur une même ville de taille moyenne. La fermeture du lundi crée un comportement de recherche spécifique. Les avis Google et les photos du salon sont déterminants pour déclencher la première visite.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Planity, Treatwell, Google Maps et La Boutique du Coiffeur</strong> captent une part massive du trafic de réservation. Planity totalise à lui seul plus de 5 200 recherches mensuelles associées au mot « coiffeur ». Sans stratégie de référencement SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un salon reste invisible face à ces plateformes.',
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
      { keyword: 'coiffeur autour de moi', volume: 32000, intent: 'locale', difficulty: 'faible' },
      { keyword: 'salon de coiffure', volume: 16000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'coiffeur homme', volume: 12000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'coiffeur paris', volume: 7700, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coiffeur toulouse', volume: 5400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coiffeur lyon', volume: 5400, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coiffeur femme', volume: 3400, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'salon de coiffure autour de moi', volume: 3200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'coiffeur a domicile', volume: 3100, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'coiffeur visagiste paris', volume: 800, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, plus de 32 000 personnes cherchent un « coiffeur autour de moi » sur Google. Ces requêtes locales représentent autant de clients potentiels prêts à réserver immédiatement. La majorité clique sur les 3 premiers résultats du Local Pack, ou suit la recommandation d\'un moteur IA. Si votre salon n\'y figure pas, ces clients poussent la porte du concurrent d\'en face.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les coiffeurs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la coiffure.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète du site du salon : architecture des pages, vitesse de chargement sur mobile et facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par prestation (coupe, coloration, lissage, balayage)',
          'Balises schema.org HairSalon et BeautySalon',
          'Performance mobile et Core Web Vitals',
          'Crawl et indexation des pages de prestations',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du salon dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du salon',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA',
        ],
      },
      {
        title: 'Étude de marché & mots-clés coiffure',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons à fort potentiel dans votre secteur.',
        items: [
          'Combinaisons prestation + ville à faible concurrence',
          'Requêtes spécialisées (visagiste, coloriste, cheveux bouclés)',
          'Analyse des requêtes posées aux moteurs IA sur la coiffure',
          'Volumes de recherche réels par prestation et par ville',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours de réservation du client.',
        items: [
          'Page prestation → page salon → page réservation',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta et Hn',
          'Pages dédiées par spécialité (coloration végétale, coiffure de mariage)',
        ],
      },
      {
        title: 'Stratégie de contenu coiffure',
        subtitle: 'Création de contenus éducatifs démontrant le savoir-faire du salon, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques (entretien des cheveux bouclés, fréquence de coloration)',
          'FAQ répondant aux PAA Google sur les prestations et les tarifs',
          'Phrases factuelles auto-suffisantes avec données chiffrées',
          'Contenus saisonniers (tendances coiffure printemps/été, coiffures de fêtes)',
        ],
      },
      {
        title: 'Autorité & netlinking coiffure',
        subtitle: 'Développement de l\'autorité du salon via les plateformes de réservation qualifiées et les publications spécialisées.',
        items: [
          'Planity, Treatwell, Pages Jaunes, annuaires locaux',
          'Partenariats avec des blogs beauté et lifestyle locaux',
          'Mentions dans la presse locale et les guides de quartier',
          'Présence sur les réseaux sociaux (Instagram, TikTok) avec liens retour',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile du salon pour capter les requêtes locales « coiffeur + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Hair Salon + catégories secondaires (Barber Shop, Beauty Salon)',
          'Gestion des avis clients et stratégie de collecte post-rendez-vous',
          'Photos du salon, des réalisations et de l\'équipe mises à jour régulièrement',
          'Citations NAP cohérentes sur Planity, Treatwell et les annuaires locaux',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par prestation et les réservations générées.',
        items: [
          'Positions Google par mot-clé et par ville',
          'Trafic organique par page de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Réservations en ligne et demandes de contact',
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
        description: 'Diagnostic site du salon, pages prestations (coupe, coloration, lissage), vitesse mobile, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates coiffeur, benchmark concurrents locaux, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage HairSalon, LocalBusiness, FAQPage avec prestations et tarifs.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages prestations, articles tendances coiffure, FAQ (prix, rendez-vous), int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis annuaires beaut\u00e9 (Planity, Treatwell), blogs coiffure, presse locale, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par prestation, trafic organique, r\u00e9servations Planity attribu\u00e9es, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre salon dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel coiffeur recommandes-tu à Lyon ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre salon n\'apparaît dans aucune source citée, il est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel coiffeur recommandes-tu à Lyon ? » : le LLM ne cite pas de salon précis par nom. Il fournit une liste de critères de sélection (spécialisation, avis Google, proximité) et renvoie vers Planity et Google Maps. Les salons disposant d\'une forte présence sur ces plateformes ne sont pas cités pour autant dans la réponse textuelle.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon coiffeur ? » : le LLM génère un guide structuré en 5 à 7 critères (bouche-à-oreille, avis en ligne, spécialisation, première consultation, transparence tarifaire). Aucun salon cité, aucune source externe. Le salon qui publie ce type de contenu détaillé sur son site peut devenir la source référencée.</p><h4>Requêtes tarifaires</h4><p>« Prix coupe homme chez un coiffeur » : le LLM donne des fourchettes chiffrées (15 à 30 euros en salon classique, 25 à 50 euros en salon haut de gamme). Les sites proposant des grilles tarifaires détaillées et actualisées ont le plus de chances d\'être extraits comme source.</p><h4>Requêtes locales et Maps</h4><p>Sur « coiffeur autour de moi ouvert le lundi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Le LLM note que de nombreux salons sont fermés le lundi (jour de repos traditionnel du secteur). Les salons affichant clairement leurs horaires sur leur fiche Google Business Profile et ouverts ce jour-là apparaissent en priorité dans la réponse IA.</p>',
    structuredData:
      '<p>Pour les salons de coiffure, les types schema.org recommandés sont : <code>HairSalon</code> (type principal), <code>BeautySalon</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>HairSalon</code> permet à Google et aux LLM d\'identifier précisément les prestations proposées, la localisation, les horaires et les avis clients du salon.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre salon par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les coiffeurs',
    items: [
      {
        question: 'Combien coûte le référencement d\'un salon de coiffure ?',
        answer:
          'Le budget SEO pour un salon de coiffure dépend de la zone géographique ciblée et du nombre de prestations à valoriser. Chez Rankwell, les accompagnements SEO pour les salons de coiffure démarrent à 800 euros par mois pour un salon mono-site sur une ville de taille moyenne, et peuvent atteindre 2 500 à 4 000 euros par mois pour un réseau de salons ou un salon haut de gamme en grande métropole.',
      },
      {
        question: 'Combien de temps faut-il pour qu\'un salon de coiffure soit visible sur Google ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (par exemple « coiffeur visagiste Angers » ou « coloriste végétal Nantes ») se positionnent plus rapidement que les requêtes très concurrentielles comme « coiffeur Paris ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone géographique.',
      },
      {
        question: 'Pourquoi les avis Google sont-ils si importants pour un coiffeur ?',
        answer:
          'Les avis Google sont le premier critère de décision pour 70 à 80 % des clients qui cherchent un nouveau coiffeur. Google utilise le nombre, la récence et la note moyenne des avis pour classer les salons dans le Local Pack. Les moteurs IA comme ChatGPT s\'appuient également sur ces avis agrégés pour formuler leurs recommandations. Rankwell met en place une stratégie de collecte d\'avis post-rendez-vous adaptée aux salons de coiffure.',
      },
      {
        question: 'Un salon de coiffure a-t-il besoin d\'un blog pour son référencement ?',
        answer:
          'Un blog est un levier efficace s\'il est bien ciblé. Les articles doivent répondre aux questions réelles des clients (entretien des cheveux bouclés, fréquence idéale de coloration, différence entre balayage et mèches) et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 3 articles par mois, ciblant des requêtes informationnelles à longue traîne spécifiques au secteur de la coiffure.',
      },
      {
        question: 'Comment un salon de coiffure peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un salon doit accumuler des signaux de notoriété sur le web : présence sur Planity et Treatwell, avis Google nombreux et récents, mentions dans la presse locale ou les blogs beauté, contenus factuels et détaillés sur son site (grille tarifaire, spécialités, équipe). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un coiffeur ?',
        answer:
          'Le SEO local cible les requêtes « coiffeur + ville » ou « coiffeur autour de moi » et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires locaux. Le SEO national vise des requêtes génériques comme « meilleur coiffeur visagiste » et nécessite du contenu éducatif à forte autorité. Pour un salon indépendant, Rankwell priorise le SEO local qui génère directement des réservations.',
      },
      {
        question: 'Planity et les plateformes de réservation suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme Planity sont utiles pour la réservation en ligne, mais elles créent une dépendance : votre salon n\'est qu\'un profil parmi des centaines dans votre ville. Un site propre bien référencé permet de contrôler votre image, de mettre en avant vos spécialités et de convertir directement sans commission. Rankwell aide les salons à bâtir une présence digitale indépendante des plateformes grâce à une stratégie de référencement SEO & GEO complète.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre salon visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
        { label: 'SEO Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
        { label: 'SEO Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
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
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Restaurant', href: '/agence-geo-seo/secteur/restaurant' },
      { label: 'Dentiste', href: '/agence-geo-seo/secteur/dentiste' },
      { label: 'Médecin', href: '/agence-geo-seo/secteur/medecin' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
    ],
  },

  // Schema.org type principal
  schemaType: 'HairSalon',
};

export default data;
