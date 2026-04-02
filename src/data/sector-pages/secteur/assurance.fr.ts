/**
 * DATA : Page Secteur Assurances (FR)
 * Route : /agence-geo-seo/secteur/assurance
 *
 * Secteur financier, dominante nationale avec composante locale (courtiers, agents generaux)
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'assurance',
    title: 'Agence GEO & SEO pour Assurances - Rankwell',
    description:
      'Rankwell accompagne les compagnies d\'assurance et courtiers dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur assurantiel.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Assurances' },
    ],
    title: 'GEO & SEO Assurance : visibilité Google & moteurs IA',
    subtitle:
      'Comparateurs, agrégateurs et assureurs directs se disputent le clic de vos futurs assurés. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux spécificités du marché assurantiel.',
    ctaText: 'Demander un audit GEO & SEO assurance',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les assurances',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">98 000 recherches mensuelles sur « assurance auto » et 72 000 sur « assurance habitation »</strong> en France. Les assurés comparent systématiquement : <strong>59 000 recherches/mois</strong> sur « comparateur assurance auto ». Les courtiers captent une part locale via « courtier assurance + ville », un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> où la proximité et les avis font la différence.',
    constraints:
      'Secteur classé <strong class="text-secondary dark:text-accent">YMYL par Google</strong> : les contenus d\'assurance engagent les finances et la protection des assurés. L\'ACPR encadre les communications commerciales. Chaque page doit démontrer une expertise vérifiable, avec des données tarifaires sourcées et des mentions conformes au Code des assurances.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">LeLynx, Assurland, LesFurets, Meilleurtaux</strong> dominent les requêtes transactionnelles du secteur assurantiel et repoussent les sites d\'assureurs au-delà de la première page. Sans stratégie pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> spécialisée, un assureur ou un courtier reste invisible face à ces comparateurs.',
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
      { keyword: 'assurance auto', volume: 98000, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'assurance habitation', volume: 72000, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'comparateur assurance auto', volume: 59000, intent: 'commerciale', difficulty: 'élevée' },
      { keyword: 'assurance voiture', volume: 52000, intent: 'mixte', difficulty: 'élevée' },
      { keyword: 'devis assurance auto', volume: 30000, intent: 'transactionnelle', difficulty: 'élevée' },
      { keyword: 'assurance auto pas cher', volume: 18000, intent: 'transactionnelle', difficulty: 'moyenne' },
      { keyword: 'assurance habitation pas cher', volume: 15000, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'comparateur assurance habitation', volume: 13000, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'assurance auto en ligne', volume: 9000, intent: 'transactionnelle', difficulty: 'élevée' },
      { keyword: 'assurance auto jeune conducteur', volume: 3300, intent: 'informationnelle', difficulty: 'moyenne' },
    ],
    interpretation:
      'Chaque mois, des centaines de milliers de recherches comme "assurance auto" ou "comparateur assurance habitation" représentent autant de prospects en phase de souscription. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre offre n\'y figure pas, ces assurés souscrivent chez un concurrent.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les assurances',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur assurantiel.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation des pages produit assurance.',
        items: [
          'Structure des pages par gamme de produit (auto, habitation, santé, vie)',
          'Balises schema.org InsuranceAgency et FinancialProduct',
          'Performance et Core Web Vitals sur les parcours devis',
          'Crawl et indexation des pages tarificateur',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre marque dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de la marque assurance',
          'Mesure de la légitimité et citabilité sur les requêtes assurantielles',
          'Évaluation de la densité factuelle des pages produit',
          'Benchmark concurrentiel sur les requêtes IA du secteur',
        ],
      },
      {
        title: 'Étude de marché & mots-clés assurantiels',
        subtitle: 'Cartographie des requêtes par type de produit (auto, habitation, santé, pro) et par intention (devis, comparaison, information). Identification des niches à faible concurrence.',
        items: [
          'Combinaisons produit + intention (devis assurance auto, comparateur habitation)',
          'Analyse des requêtes posées aux moteurs IA sur les prix et garanties',
          'Volumes de recherche réels par ligne de produit',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours de l\'assuré : de l\'information à la souscription.',
        items: [
          'Page produit par gamme, page devis, page FAQ garanties',
          'Requête principale + 3 à 5 requêtes secondaires par page produit',
          'Optimisation des balises title, meta, Hn sur les parcours de souscription',
        ],
      },
      {
        title: 'Stratégie de contenu assurantiel',
        subtitle: 'Création de contenus éducatifs démontrant l\'expertise de votre marque, rédigés pour être citables par les LLM et conformes aux obligations du Code des assurances.',
        items: [
          'Guides et FAQ répondant aux PAA Google (résiliation, franchise, garanties)',
          'Phrases factuelles auto-suffisantes avec données tarifaires vérifiables',
          'Respect des obligations légales ACPR et mentions d\'information',
        ],
      },
      {
        title: 'Autorité & netlinking assurantiel',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels, la presse spécialisée et les publications institutionnelles du secteur.',
        items: [
          'Annuaires ORIAS, Argus de l\'Assurance, FFA',
          'Publications dans la presse économique et financière',
          'Partenariats avec des sites institutionnels et comparateurs qualifiés',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation des fiches GBP pour les courtiers et agents généraux, afin de capter les requêtes locales "courtier assurance + ville" et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Insurance Agency + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte post-sinistre',
          'Photos, horaires, attributs et posts réguliers sur les offres',
          'Citations NAP cohérentes sur les annuaires de courtage (ORIAS, CSCA)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par ligne de produit et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé produit',
          'Trafic organique par gamme (auto, habitation, santé, pro)',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions souscription',
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
        description: 'Diagnostic site, pages produits (auto, habitation, sant\u00e9, pro), vitesse, indexation.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests citabilit\u00e9 requ\u00eates assurance, benchmark concurrents, Score GEO.',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage InsuranceAgency, FinancialProduct, FAQPage avec types de contrats et garanties.',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'Pages produits, guides (sinistres, r\u00e9siliation, comparatif), FAQ, int\u00e9gration CMS/FTP, templates.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Backlinks depuis comparateurs (LeLynx, LesFurets, Assurland), blogs assurance, presse, suivi Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Positions par produit, trafic organique, devis en ligne attribu\u00e9s, Score GEO.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre marque assurance dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT "quelle assurance auto recommandes-tu ?", le LLM compile des informations provenant du web pour formuler sa réponse. Si votre marque n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quelle assurance auto recommandes-tu ? » : le LLM cite 5 à 7 marques nationales (MAIF, Matmut, L\'Olivier, Direct Assurance, MACIF, Allianz) avec une ligne de positionnement par assureur (rapport qualité/prix, service client, options). Le classement repose sur la réputation web globale des marques. Aucun lien ni source externe n\'est cité.</p><h4>Requêtes d\'information</h4><p>« Comment choisir une bonne assurance habitation ? » : le LLM génère un guide structuré en 6 à 8 critères de sélection (surface du logement, garanties incluses, franchise, responsabilité civile). Aucune marque citée. Le format checklist est systématique. Les assureurs qui publient ce type de contenu factuel sur leur site peuvent être extraits comme source.</p><h4>Requêtes tarifaires</h4><p>« Prix assurance auto jeune conducteur » : le LLM fournit des fourchettes chiffrées (800 à 2 500 euros par an) et détaille les facteurs d\'influence : surprime de 50 à 100 % la première année, type de véhicule, conduite accompagnée. Les sites publiant des données de prix précises et actualisées ont le plus de chances d\'être cités.</p><h4>Requêtes locales et Maps</h4><p>Sur « courtier assurance autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les courtiers disposant d\'une fiche Google Business Profile complète (spécialités, avis récents, horaires) apparaissent directement dans la réponse IA. Le registre ORIAS est recommandé comme source de vérification.</p>',
    structuredData:
      '<p>Pour les assureurs et courtiers, les types schema.org recommandés sont : <code>InsuranceAgency</code> (type principal), <code>FinancialProduct</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>InsuranceAgency</code> permet à Google et aux LLM d\'identifier précisément les produits proposés, la localisation et les avis clients de l\'assureur ou du courtier.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre marque assurance par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus par ligne de produit), la Légitimité & Citabilité (signaux de confiance externes, mentions presse, registre ORIAS), et la Densité Factuelle (richesse des données tarifaires structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les assurances',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'assurance ?',
        answer:
          'Le budget SEO pour un assureur ou un courtier dépend du nombre de lignes de produit et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour le secteur assurantiel démarrent à 2 000 euros par mois pour une gamme de produit (auto ou habitation) et peuvent atteindre 6 000 à 10 000 euros par mois pour un assureur multi-produits en concurrence nationale avec les comparateurs.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO assurantiel ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 4 et 8 mois. Les requêtes de niche (assurance trottinette électrique, assurance habitation étudiant) sont plus rapides à positionner que les requêtes génériques très concurrentielles comme "assurance auto". Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et le niveau de concurrence des comparateurs.',
      },
      {
        question: 'Le SEO est-il compatible avec les obligations réglementaires de l\'assurance ?',
        answer:
          'Oui, le SEO est compatible avec les obligations fixées par l\'ACPR et le Code des assurances, à condition d\'inclure les mentions légales obligatoires, de ne pas formuler de promesses de rendement non contractuelles et de respecter les règles de transparence tarifaire. Rankwell connaît ces contraintes et intègre la conformité réglementaire dans chaque stratégie de contenu assurantiel.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un site d\'assurance ?',
        answer:
          'Un blog assurantiel est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles des assurés (résiliation loi Hamon, franchises, garanties obligatoires), démontrer une expertise vérifiable et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne.',
      },
      {
        question: 'Comment un assureur peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un assureur doit accumuler des signaux de notoriété sur le web : présence sur les comparateurs qualifiés, mentions dans la presse spécialisée (Argus de l\'Assurance, Les Echos), données tarifaires structurées et contenu factuel riche. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un assureur ?',
        answer:
          'Le SEO local cible les requêtes "courtier assurance + ville" ou "agent général + ville" et s\'appuie sur Google Business Profile, les avis clients et les citations locales (ORIAS, CSCA). Le SEO national vise les requêtes génériques ("meilleure assurance auto", "comparateur habitation") et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon la structure de distribution de l\'assureur.',
      },
      {
        question: 'Les comparateurs suffisent-ils pour être visible en assurance ?',
        answer:
          'Les comparateurs comme LeLynx ou Assurland apportent du trafic qualifié, mais ils créent une dépendance : l\'assureur n\'est qu\'un tarif parmi des dizaines. Un site propre bien référencé permet de contrôler son image de marque, de convertir directement et de construire une autorité durable que les comparateurs ne peuvent pas retirer. Rankwell aide les assureurs à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des agrégateurs.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre marque assurance visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Banque', href: '/agence-geo-seo/secteur/banque' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Webflow', href: '/agence-geo-seo/cms/webflow' },
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
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Notaire', href: '/agence-geo-seo/secteur/notaire' },
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Agence immobilière', href: '/agence-geo-seo/secteur/agence-immobiliere' },
      { label: 'Pharmacie', href: '/agence-geo-seo/secteur/pharmacie' },
    ],
  },

  // Schema.org type principal
  schemaType: 'InsuranceAgency',
};

export default data;
