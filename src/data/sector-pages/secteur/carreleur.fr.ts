/**
 * DATA : Page Secteur Carreleurs (FR)
 * Route : /agence-geo-seo/secteur/carreleur
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'carreleur',
    title: 'Agence GEO & SEO pour Carreleurs - Rankwell',
    description:
      'Rankwell accompagne les carreleurs dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur du carrelage.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Carreleurs' },
    ],
    title: 'GEO & SEO Carreleur : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent un carreleur sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux artisans du carrelage et de la mosaïque.',
    ctaText: 'Demander un audit GEO & SEO carreleur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les carreleurs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">85 % des recherches carreleur contiennent une dimension locale</strong> (« carreleur autour de moi », « carreleur Marseille »). Le particulier cherche un artisan disponible pour une rénovation de salle de bain ou de cuisine. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité dans le Local Pack décide du premier contact.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le carreleur doit prouver son savoir-faire visuellement</strong> : photos avant/après, certifications Qualibat, assurance décennale vérifiable. Google valorise les signaux E-E-A-T concrets (avis détaillés, réalisations documentées). Un site sans preuve visuelle de compétence ne perce pas dans les SERP.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Habitatpresto, Houzz, Pages Jaunes, Quotatis et MesDépanneurs.fr</strong> se positionnent sur « carreleur + ville » et « prix pose carrelage m2 », reléguant les artisans indépendants en page 2. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un carreleur reste invisible face à ces intermédiaires.',
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
      { keyword: 'carreleur', volume: 5300, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'carrelage salle de bain', volume: 34000, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'prix pose carrelage m2', volume: 4700, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'carreleur autour de moi', volume: 2200, intent: 'locale', difficulty: 'faible' },
      { keyword: 'prix carreleur m2', volume: 600, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'carreleur lyon', volume: 350, intent: 'locale', difficulty: 'faible' },
      { keyword: 'artisan carreleur', volume: 300, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'carreleur marseille', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'carreleur strasbourg', volume: 250, intent: 'locale', difficulty: 'faible' },
      { keyword: 'carreleur toulouse', volume: 200, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de particuliers tapent « carreleur autour de moi » ou « prix pose carrelage m2 » pour trouver un artisan disponible. La quasi-totalité de ces recherches déclenche un Local Pack Google : seuls les 3 premiers carreleurs affichés reçoivent des appels. Si votre entreprise n\'y figure pas, ces chantiers vont à vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les carreleurs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur du carrelage et des métiers de la pose.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète du site : architecture des pages par type de prestation (pose sol, pose murale, mosaïque, terrasse), vitesse de chargement et indexation.',
        items: [
          'Structure des pages par type de carrelage et zone d\'intervention',
          'Balises schema.org HomeAndConstructionBusiness',
          'Performance et Core Web Vitals (images de chantiers lourdes)',
          'Crawl et indexation des galeries photo',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité de votre activité dans les réponses de ChatGPT, Perplexity et Gemini via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre entreprise de carrelage',
          'Mesure de la légitimité et citabilité sur les requêtes artisanales',
          'Évaluation de la densité factuelle (certifications, réalisations)',
          'Benchmark concurrentiel sur les requêtes IA locales',
        ],
      },
      {
        title: 'Étude de marché & mots-clés du carrelage',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons à faible concurrence.',
        items: [
          'Combinaisons type de pose + ville à faible concurrence',
          'Analyse des requêtes tarifaires (prix pose m2, devis carrelage)',
          'Volumes de recherche par spécialité (mosaïque, grand format, terrasse)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site autour d\'un parcours clair : page prestation, page réalisation, page devis.',
        items: [
          'Page prestation → page réalisation (photos avant/après) → page contact',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec mots-clés locaux',
        ],
      },
      {
        title: 'Stratégie de contenu pour le carrelage',
        subtitle: 'Création de contenus pratiques démontrant le savoir-faire de l\'artisan, conçus pour être citables par les LLM.',
        items: [
          'Guides pratiques : « Comment choisir son carrelage de salle de bain »',
          'FAQ tarifaires avec fourchettes de prix par type de pose',
          'Pages de réalisations avec descriptions techniques détaillées',
        ],
      },
      {
        title: 'Autorité & netlinking artisan',
        subtitle: 'Développement de la visibilité via les annuaires artisan qualifiés et les plateformes de mise en relation.',
        items: [
          'Inscription sur Habitatpresto, Houzz, Quotatis, Pages Jaunes',
          'Présence sur les annuaires Qualibat et CAPEB',
          'Partenariats avec des architectes d\'intérieur et des cuisinistes locaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « carreleur + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale « Carreleur » + catégories secondaires (Poseur de revêtement de sol, Entreprise de rénovation)',
          'Photos de réalisations récentes (avant/après, détails de pose)',
          'Gestion des avis clients avec stratégie de collecte post-chantier',
          'Citations NAP cohérentes sur les annuaires du bâtiment',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé local',
          'Trafic organique par type de prestation',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et appels téléphoniques',
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
        title: 'Audit technique SEO',
        description: 'Analyse approfondie de l\'architecture de votre site : pages prestations, galeries de réalisations, vitesse de chargement et indexation des images de chantiers.',
      },
      {
        id: 2,
        title: 'Audit GEO (visibilité IA)',
        description: 'Mesure de la citabilité de votre entreprise dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100 avec benchmark contre vos concurrents locaux.',
      },
      {
        id: 3,
        title: 'Kit schema.org carreleur',
        description: 'Balisage structuré HomeAndConstructionBusiness, Service et FAQPage, prêt à intégrer. Permet à Google et aux moteurs IA d\'identifier vos prestations et votre zone.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Rédaction de pages prestations (salle de bain, cuisine, terrasse), articles pose et entretien du carrelage, FAQ devis. Livraison au format CMS ou via injection FTP.',
      },
      {
        id: 5,
        title: 'Netlinking artisan',
        description: 'Acquisition de liens depuis Qualibat, Habitatpresto, blogs rénovation et presse spécialisée bâtiment pour renforcer l\'autorité de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel : positions Google par mot-clé et par ville, trafic organique par type de prestation, score GEO et demandes de devis générées.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise de carrelage dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un particulier demande à ChatGPT « quel carreleur recommandes-tu à Marseille ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de chantiers.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel carreleur recommandes-tu à Marseille ? » : le LLM ne cite aucun artisan par son nom. Il fournit une liste de 5 à 6 critères de sélection (certification Qualibat, assurance décennale, avis Google supérieurs à 4,5) et renvoie vers les plateformes d\'intermédiation : Habitatpresto, Houzz, Pages Jaunes. Les carreleurs absents de ces annuaires n\'existent pas dans la réponse.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon carreleur ? » : le LLM génère un guide structuré en 6 critères (qualifications CAP/BEP carreleur-mosaïste, vérification de la décennale, comparaison de 3 devis, consultation des avis). Aucun professionnel ni source externe n\'est cité. Un carreleur publiant ce type de contenu factuel sur son site peut devenir la source de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix pose carrelage au m2 » : le LLM donne des fourchettes détaillées (25 à 50 EUR/m2 pour un carrelage standard, 60 à 120 EUR/m2 pour de la mosaïque). Les sites proposant des grilles tarifaires précises par type de pose ont le meilleur potentiel de citation.</p><h4>Requêtes locales et Maps</h4><p>Sur « carreleur autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les artisans disposant d\'une fiche Google Business Profile complète (catégorie « Carreleur », photos de réalisations, avis récents) apparaissent directement dans la réponse IA. Sans fiche GBP, un carreleur est absent de cette réponse.</p>',
    structuredData:
      '<p>Pour les entreprises de carrelage, les types schema.org recommandés sont : <code>HomeAndConstructionBusiness</code> (type principal), <code>LocalBusiness</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>HomeAndConstructionBusiness</code> permet à Google et aux LLM d\'identifier précisément le type de prestation, la zone d\'intervention et les avis clients du carreleur.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de carrelage par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur vos prestations), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les carreleurs',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de carreleur ?',
        answer:
          'Le budget SEO pour un carreleur dépend de la zone géographique ciblée et du nombre de prestations à positionner (pose sol, pose murale, mosaïque, terrasse). Chez Rankwell, les accompagnements SEO pour les artisans carreleurs démarrent à 800 EUR/mois pour une ville et un type de prestation, et peuvent atteindre 2 500 EUR/mois pour une entreprise multi-zones en région parisienne.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un carreleur ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 2 et 5 mois. Les requêtes locales de niche (« carreleur mosaïque Strasbourg ») sont plus rapides à positionner que les requêtes génériques (« carreleur Paris »). Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre zone d\'intervention.',
      },
      {
        question: 'Un carreleur a-t-il besoin de certifications pour son SEO ?',
        answer:
          'Les certifications ne sont pas obligatoires pour le SEO, mais elles constituent un signal E-E-A-T puissant. Un carreleur affichant sa qualification Qualibat, son label RGE (pour les poses liées à la rénovation énergétique) et son assurance décennale sur son site obtient de meilleurs classements Google. Rankwell intègre ces signaux de confiance dans chaque stratégie.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un carreleur ?',
        answer:
          'Un blog orienté conseils pratiques est un levier efficace pour un carreleur. Les articles doivent répondre aux questions réelles des particuliers : « comment choisir entre carrelage et parquet », « quel carrelage pour une terrasse extérieure », « prix pose carrelage salle de bain ». Rankwell recommande 2 à 3 articles par mois ciblant des requêtes informationnelles à fort potentiel de conversion.',
      },
      {
        question: 'Comment un carreleur peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un carreleur doit accumuler des signaux de présence sur le web : inscriptions sur les annuaires artisan (Habitatpresto, Houzz, Qualibat), avis Google récents et détaillés, contenus riches sur son site (guides, grilles tarifaires, galeries de réalisations). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un carreleur ?',
        answer:
          'Le SEO local cible les requêtes « carreleur + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations dans les annuaires du bâtiment. Le SEO national vise des requêtes génériques (« prix pose carrelage m2 ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la zone d\'intervention et les ambitions du carreleur.',
      },
      {
        question: 'Les plateformes comme Habitatpresto suffisent-elles pour trouver des chantiers ?',
        answer:
          'Les plateformes d\'intermédiation comme Habitatpresto ou Quotatis génèrent des leads, mais à un coût par contact élevé et avec une forte dépendance. Le carreleur n\'est qu\'un profil parmi des centaines, en concurrence directe sur le prix. Un site propre bien référencé permet de recevoir des demandes de devis en direct, sans commission ni mise en concurrence systématique. Rankwell aide les artisans à construire cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise de carrelage visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
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
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      { label: 'Couvreur', href: '/agence-geo-seo/secteur/couvreur' },
      { label: 'Charpentier', href: '/agence-geo-seo/secteur/charpentier' },
      { label: 'Paysagiste', href: '/agence-geo-seo/secteur/paysagiste' },
      { label: 'Serrurier', href: '/agence-geo-seo/secteur/serrurier' },
      { label: 'Vitrier', href: '/agence-geo-seo/secteur/vitrier' },
    ],
  },

  // Schema.org type principal
  schemaType: 'HomeAndConstructionBusiness',
};

export default data;
