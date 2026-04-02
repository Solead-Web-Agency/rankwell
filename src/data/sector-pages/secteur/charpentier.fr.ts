/**
 * DATA : Page Secteur Charpentiers (FR)
 * Route : /agence-geo-seo/secteur/charpentier
 *
 * Mots-cles Ahrefs (country FR, mars 2026)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'charpentier',
    title: 'Agence GEO & SEO pour Charpentiers - Rankwell',
    description:
      'Rankwell accompagne les charpentiers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la charpente.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Charpentiers' },
    ],
    title: 'GEO & SEO Charpentier : visibilité Google & moteurs IA',
    subtitle:
      'Vos futurs clients cherchent un charpentier sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du métier de charpentier.',
    ctaText: 'Demander un audit GEO & SEO charpentier',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les charpentiers',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">« Charpentier autour de moi » génère 2 100 recherches par mois</strong>, et chaque projet de construction ou de rénovation de toiture commence par une recherche locale. Le particulier compare 2 à 3 artisans avant de demander un devis. C\'est un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la visibilité dans le Local Pack détermine qui reçoit la demande.',
    constraints:
      '<strong class="text-secondary dark:text-accent">La qualification professionnelle est un prérequis légal</strong> : la loi du 5 juillet 1996 impose un diplôme (CAP, BEP, BP) ou 3 ans d\'expérience pour exercer. L\'assurance décennale est obligatoire sur tous les travaux de structure, et Google renforce l\'exigence E-E-A-T sur ces contenus à fort engagement financier.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Pages Jaunes, Houzz, Habitatpresto, Travaux.com et 123devis</strong> se positionnent sur « charpentier + ville » et « devis charpente » avec des budgets SEO que l\'artisan seul ne peut pas égaler. Sans <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du BTP, un charpentier reste dépendant de ces intermédiaires.',
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
      { keyword: 'charpentier', volume: 8800, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'charpente traditionnelle', volume: 3800, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'charpente bois', volume: 3100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'charpente fermette', volume: 2200, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'charpentier autour de moi', volume: 2100, intent: 'locale', difficulty: 'faible' },
      { keyword: 'charpentier couvreur', volume: 2000, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'traitement charpente', volume: 1100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'charpentier toulouse', volume: 250, intent: 'locale', difficulty: 'faible' },
      { keyword: 'devis charpente', volume: 250, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'charpentier nantes', volume: 200, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de particuliers cherchent un charpentier sur Google pour une construction neuve, une rénovation de toiture ou un traitement de charpente existante. Les requêtes locales comme « charpentier autour de moi » ou « charpentier toulouse » représentent des projets concrets avec un budget engagé. Si votre entreprise n\'apparaît pas dans les 3 premiers résultats, ni dans les recommandations des moteurs IA, ces chantiers vont à vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les charpentiers',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la charpente et du bâtiment.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète du site : architecture des pages par type de prestation (charpente traditionnelle, fermette, métallique), vitesse de chargement et facteurs techniques freinant l\'indexation.',
        items: [
          'Structure des pages par type de charpente et zone d\'intervention',
          'Balises schema.org HomeAndConstructionBusiness',
          'Performance et Core Web Vitals sur mobile',
          'Crawl et indexation des pages de réalisations',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre entreprise de charpente dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre entreprise',
          'Mesure de la légitimité et citabilité dans le secteur BTP',
          'Évaluation de la densité factuelle du contenu (certifications, réalisations)',
          'Benchmark concurrentiel sur les requêtes IA liées à la charpente',
        ],
      },
      {
        title: 'Étude de marché & mots-clés charpente',
        subtitle: 'Cartographie des requêtes par type de prestation et zone géographique. Identification des combinaisons « charpentier + ville » à faible concurrence et fort potentiel.',
        items: [
          'Combinaisons type de charpente + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur la charpente',
          'Volumes de recherche réels par prestation (pose, rénovation, traitement)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un parcours utilisateur adapté au cycle de décision : page prestation, page réalisations, page demande de devis.',
        items: [
          'Page type de charpente vers page zone d\'intervention vers formulaire de devis',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta et Hn avec les termes du métier',
        ],
      },
      {
        title: 'Stratégie de contenu charpente',
        subtitle: 'Création de contenus techniques démontrant le savoir-faire de votre entreprise : guides sur les types de charpente, conseils d\'entretien, études de chantier.',
        items: [
          'Guides comparatifs (traditionnelle vs fermette vs métallique)',
          'Pages de réalisations avec photos et détails techniques',
          'FAQ répondant aux PAA Google (prix, délais, essences de bois)',
          'Phrases factuelles auto-suffisantes pour la citation IA',
        ],
      },
      {
        title: 'Autorité & netlinking BTP',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels qualifiés et les partenaires du bâtiment.',
        items: [
          'Inscriptions Qualibat, FFB, CAPEB, Compagnons du Devoir',
          'Pages Jaunes, Houzz, annuaires régionaux du BTP',
          'Partenariats avec architectes, couvreurs et constructeurs locaux',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes « charpentier + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale « Charpentier » + catégories secondaires (Couvreur, Constructeur de maison en bois)',
          'Photos de chantiers terminés, avant/après, détails de charpente',
          'Gestion des avis clients et stratégie de collecte post-chantier',
          'Citations NAP cohérentes sur les annuaires du bâtiment',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par type de prestation et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé (charpente + ville)',
          'Trafic organique par type de prestation',
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
        title: 'Audit technique SEO',
        description: 'Analyse approfondie de l\'architecture de votre site : pages par type de charpente, pages réalisations, vitesse de chargement et indexation.',
      },
      {
        id: 2,
        title: 'Audit GEO (visibilité IA)',
        description: 'Mesure de la citabilité de votre entreprise dans les réponses de ChatGPT, Perplexity et Gemini. Score GEO sur 100 avec benchmark contre vos concurrents locaux.',
      },
      {
        id: 3,
        title: 'Kit schema.org charpentier',
        description: 'Balisage structuré HomeAndConstructionBusiness, Service et FAQPage, prêt à intégrer. Permet à Google et aux moteurs IA d\'identifier vos spécialités et votre zone.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Rédaction de pages charpente traditionnelle, fermette et bois, articles construction bois, FAQ prix et essences. Livraison au format CMS ou via injection FTP.',
      },
      {
        id: 5,
        title: 'Netlinking BTP',
        description: 'Acquisition de liens depuis Qualibat, Compagnons du Devoir, blogs construction et presse spécialisée bâtiment pour renforcer l\'autorité de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Reporting mensuel : positions Google par mot-clé et par ville, trafic organique par type de charpente, score GEO et demandes de devis générées.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise de charpente dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un particulier demande à ChatGPT « quel charpentier recommandes-tu à Bordeaux ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition de chantiers.',
    llmBehavior:
      '<h4>Requêtes de recommandation locale</h4><p>« Quel charpentier recommandes-tu à Bordeaux ? » : le LLM ne cite aucun artisan nommé. Il fournit une liste de 5 à 7 critères de sélection (certifications Qualibat, avis Google, ancienneté, spécialisation bois ou métallique) et renvoie vers les Pages Jaunes, Houzz et les annuaires d\'artisans. Les charpentiers disposant de contenus techniques détaillés et de signaux de confiance vérifiables sont les plus susceptibles d\'être cités à terme.</p><h4>Requêtes d\'information technique</h4><p>« Charpentier vs couvreur : quelle différence ? » : le LLM distingue les deux métiers (ossature porteuse vs étanchéité) et mentionne les codes APE correspondants (4391A et 4391B). Il cite le cumul fréquent des deux compétences sous l\'appellation « charpentier-couvreur ». Les sites publiant du contenu structuré sur ces distinctions métier deviennent des sources de référence.</p><h4>Requêtes tarifaires</h4><p>« Prix charpente bois traditionnelle » : le LLM fournit des fourchettes au m2 (70 à 150 euros pour la traditionnelle, 50 à 80 euros pour la fermette). Il détaille les facteurs de variation : essence de bois, complexité de la toiture, accessibilité. Les sites proposant des grilles tarifaires actualisées par région sont les sources les plus extraites.</p><h4>Requêtes locales et Maps</h4><p>Sur « charpentier autour de moi », ChatGPT active le mode Search avec une carte Maps affichant les artisans à proximité. Les charpentiers disposant d\'une fiche Google Business Profile complète (catégorie « Charpentier », avis récents, photos de chantiers, réponses aux avis) apparaissent dans cette réponse IA géolocalisée.</p>',
    structuredData:
      '<p>Pour les charpentiers, les types schema.org recommandés sont : <code>HomeAndConstructionBusiness</code> (type principal), <code>GeneralContractor</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>HomeAndConstructionBusiness</code> permet à Google et aux LLM d\'identifier précisément la spécialité (charpente bois, métallique), la zone d\'intervention et les certifications de l\'entreprise.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise de charpente par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus techniques), la Légitimité & Citabilité (signaux de confiance externes : Qualibat, avis, mentions presse), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les charpentiers',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de charpentier ?',
        answer:
          'Le budget SEO pour un charpentier dépend de la zone géographique ciblée et du nombre de prestations à positionner (charpente traditionnelle, fermette, rénovation, traitement). Chez Rankwell, les accompagnements SEO pour les artisans du bâtiment démarrent à 800 euros/mois pour une zone locale, et peuvent atteindre 2 500 euros/mois pour une couverture départementale ou régionale avec plusieurs types de prestations.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO pour un charpentier ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les combinaisons « charpentier + ville » de taille moyenne (Nantes, Bordeaux, Toulouse) sont plus rapides à positionner que les requêtes nationales génériques comme « charpente traditionnelle ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle locale de votre zone d\'intervention.',
      },
      {
        question: 'Quelles certifications mettre en avant sur le site d\'un charpentier pour le SEO ?',
        answer:
          'Les certifications Qualibat (notamment Qualibat RGE pour les travaux de rénovation énergétique), l\'inscription à la FFB ou à la CAPEB, le label Compagnons du Devoir et l\'assurance décennale sont les signaux les plus valorisés par Google et les moteurs IA. Rankwell structure ces certifications dans le balisage schema.org pour maximiser leur visibilité dans les résultats enrichis et les réponses IA.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site de charpentier ?',
        answer:
          'Un blog technique est un levier efficace s\'il répond aux questions réelles des particuliers : comparatif entre charpente traditionnelle et fermette, guide d\'entretien, signes d\'alerte (mérule, capricornes, affaissement), prix au m2 par type de charpente. Rankwell recommande 2 à 4 articles par mois, ciblant les requêtes informationnelles que les particuliers posent avant de demander un devis.',
      },
      {
        question: 'Comment un charpentier peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un charpentier doit accumuler des signaux de notoriété sur le web : fiche Google Business Profile complète avec des avis récents, présence sur les annuaires du BTP (Qualibat, Pages Jaunes, Houzz), contenus techniques détaillés sur son site (types de charpente, réalisations, grilles tarifaires). Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un charpentier ?',
        answer:
          'Le SEO local cible les requêtes « charpentier + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations sur les annuaires du bâtiment. Le SEO national vise des requêtes génériques (« charpente traditionnelle prix », « traitement charpente bois ») et nécessite du contenu technique à forte autorité. Rankwell combine les deux approches selon la zone d\'intervention et les ambitions de l\'entreprise.',
      },
      {
        question: 'Les plateformes de devis en ligne suffisent-elles pour trouver des clients ?',
        answer:
          'Les plateformes comme Habitatpresto ou Travaux.com génèrent des contacts, mais avec une forte concurrence entre artisans sur chaque demande et des commissions qui réduisent la marge. Un site propre bien référencé permet de recevoir des demandes de devis en direct, sans intermédiaire ni commission, et de construire une autorité durable. Rankwell aide les charpentiers à bâtir cette visibilité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise de charpente visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Couvreur', href: '/agence-geo-seo/secteur/couvreur' },
        { label: 'SEO Électricien', href: '/agence-geo-seo/secteur/electricien' },
        { label: 'SEO Plombier', href: '/agence-geo-seo/secteur/plombier' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
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
      { label: 'Couvreur', href: '/agence-geo-seo/secteur/couvreur' },
      { label: 'Électricien', href: '/agence-geo-seo/secteur/electricien' },
      { label: 'Plombier', href: '/agence-geo-seo/secteur/plombier' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Menuisier', href: '/agence-geo-seo/secteur/menuisier' },
      { label: 'Carreleur', href: '/agence-geo-seo/secteur/carreleur' },
      { label: 'Vitrier', href: '/agence-geo-seo/secteur/vitrier' },
      { label: 'Garage auto', href: '/agence-geo-seo/secteur/garage' },
    ],
  },

  // Schema.org type principal
  schemaType: 'HomeAndConstructionBusiness',
};

export default data;
