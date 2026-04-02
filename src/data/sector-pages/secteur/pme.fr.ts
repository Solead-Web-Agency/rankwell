/**
 * DATA : Page Secteur PME (FR)
 * Route : /agence-geo-seo/secteur/pme
 *
 * Secteur national. Cible : dirigeants de PME cherchant a developper
 * leur visibilite en ligne et leur acquisition de clients via le digital.
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'pme',
    title: 'Agence GEO & SEO pour PME - Rankwell',
    description:
      'Rankwell accompagne les PME dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour les petites et moyennes entreprises.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'PME' },
    ],
    title: 'GEO & SEO PME : visibilité Google & moteurs IA',
    subtitle:
      'Votre PME doit générer des leads qualifiés depuis Google et les moteurs IA. Nos experts conçoivent des stratégies de référencement GEO & SEO calibrées sur le budget, le marché et les objectifs de croissance des petites et moyennes entreprises.',
    ctaText: 'Demander un audit GEO & SEO PME',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les PME',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">63 % des PME françaises considèrent leur site internet comme leur premier canal d\'acquisition</strong>. Contrairement aux grands groupes, les PME doivent conquérir chaque position organique par la pertinence de leur contenu et la solidité de leur <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> ou national, selon leur zone de chalandise.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Budget limité, équipe réduite, ROI exigé rapidement</strong> : les PME n\'ont ni département marketing dédié, ni marge pour des campagnes SEO à 18 mois. Le SEO d\'une PME exige une priorisation stricte : cibler d\'abord les requêtes à fort potentiel de conversion, pas les requêtes de vanité.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Les marketplaces (Amazon, Cdiscount), les annuaires (Pages Jaunes, Kompass) et les plateformes d\'avis (Trustpilot)</strong> captent une part croissante du trafic que les PME pourraient capter en direct. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> adaptée, ces entreprises restent dépendantes de canaux tiers qui prélèvent des commissions.',
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
      { keyword: 'création site internet professionnel', volume: 500, intent: 'commerciale', difficulty: 'très élevée' },
      { keyword: 'tarif création site internet professionnel', volume: 300, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'site internet professionnel', volume: 250, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'communication digitale entreprise', volume: 150, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'comment être visible sur Google gratuitement', volume: 150, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'digitalisation PME', volume: 100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'comment être visible sur Google', volume: 100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'agence web PME', volume: 100, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'site internet PME', volume: 100, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'stratégie digitale PME', volume: 60, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des centaines de dirigeants de PME cherchent à créer ou améliorer leur site internet professionnel, à comprendre comment être visibles sur Google ou à trouver une agence web adaptée à leur budget. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre entreprise n\'y figure pas, ces prospects vont chez vos concurrents.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les PME',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes budgétaires et organisationnelles des petites et moyennes entreprises.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète du site, identification des freins techniques et des lacunes sémantiques qui empêchent le référencement de progresser.',
        items: [
          'Architecture des pages par gamme de produits ou services',
          'Balises schema.org Organization et LocalBusiness',
          'Performance et Core Web Vitals (crucial pour les sites PME souvent sur hébergement mutualisé)',
          'Crawl et indexation des pages stratégiques',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de la PME dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'entreprise',
          'Mesure de la légitimité et citabilité face aux concurrents directs',
          'Évaluation de la densité factuelle du contenu existant',
          'Benchmark concurrentiel sur les requêtes IA du secteur d\'activité',
        ],
      },
      {
        title: 'Étude de marché & mots-clés sectoriels',
        subtitle: 'Cartographie des requêtes par ligne de produits/services et zone géographique. Identification des niches sous-exploitées où la PME peut se positionner rapidement.',
        items: [
          'Requêtes à forte intention commerciale et faible concurrence',
          'Analyse des requêtes posées aux moteurs IA sur le secteur d\'activité',
          'Volumes de recherche réels par offre et par zone de chalandise',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours d\'achat du client B2B ou B2C de la PME.',
        items: [
          'Page service/produit vers page contact/devis',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn pour chaque ligne d\'activité',
        ],
      },
      {
        title: 'Stratégie de contenu adaptée aux PME',
        subtitle: 'Création de contenus à forte valeur ajoutée démontrant l\'expertise métier de la PME, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques et FAQ répondant aux PAA Google du secteur',
          'Études de cas et témoignages clients documentant les résultats concrets',
          'Phrases factuelles auto-suffisantes avec données chiffrées du métier',
        ],
      },
      {
        title: 'Autorité & netlinking ciblé',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels, la presse locale et les publications sectorielles accessibles aux budgets PME.',
        items: [
          'Annuaires qualifiés : CCI, Kompass, Pages Jaunes Pro, annuaires de fédérations',
          'Relations presse locale et régionale',
          'Partenariats avec des sites complémentaires (clients, fournisseurs, syndicats professionnels)',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales et apparaître dans le Local Pack et les réponses IA géolocalisées, quand la PME a une zone de chalandise définie.',
        items: [
          'Catégorie principale adaptée au secteur d\'activité + catégories secondaires',
          'Gestion des avis clients et stratégie de collecte systématique',
          'Photos, horaires, attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires professionnels du secteur',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par ligne d\'activité et les leads générés.',
        items: [
          'Positions Google par mot-clé stratégique',
          'Trafic organique par page de service/produit',
          'Score GEO : visibilité dans les moteurs IA',
          'Leads, demandes de devis et conversions',
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
        title: 'Audit technique complet',
        description: 'Analyse approfondie de vos pages services et pages zones geographiques : indexation, Core Web Vitals, architecture du site et freins techniques identifies.',
      },
      {
        id: 2,
        title: 'Audit GEO',
        description: 'Mesure de la visibilite de votre PME dans les reponses de ChatGPT, Perplexity et Google AI Overviews. Score GEO sur 100 avec benchmark concurrentiel sur votre secteur.',
      },
      {
        id: 3,
        title: 'Kit schema.org',
        description: 'Balisage LocalBusiness ou Organization, Service et FAQPage pret a integrer. Chaque type est configure avec les proprietes adaptees a votre activite et a votre zone de chalandise.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages services optimisees, articles expertise metier, FAQ. Integration CMS ou FTP, avec templates reutilisables pour vos futures publications.',
      },
      {
        id: 5,
        title: 'Netlinking PME',
        description: 'Acquisition de liens depuis les annuaires CCI et Kompass, blogs PME, et presse locale ou economique. Chaque lien cible une page strategique de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Rapport mensuel incluant positions Google, trafic organique, leads et conversions, et evolution du score GEO avec suivi de la citabilite IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre PME dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un dirigeant demande à ChatGPT « comment améliorer la visibilité de ma PME sur Google ? » ou « quelle agence web pour une PME ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de conseil stratégique</h4><p>« Comment améliorer la visibilité de ma PME sur Google ? » : le LLM génère un guide structuré en 6 à 8 leviers (fiche Google Business, SEO technique, contenu, netlinking). Il ne cite aucune agence spécifique. Les PME qui publient des guides détaillés et factuels sur ces sujets ont le plus de chances d\'être extraites comme source de référence.</p><h4>Requêtes budgétaires</h4><p>« Quel budget SEO pour une PME ? » : le LLM fournit des fourchettes chiffrées (500 à 5 000 euros/mois selon la taille et les objectifs). Il ne recommande aucune agence nommément. Les sites qui publient des grilles tarifaires transparentes et vérifiables sont les plus susceptibles d\'être cités en référence par les moteurs IA.</p><h4>Requêtes de création de site</h4><p>« Créer un site internet pour une PME » : le LLM génère un guide pas-à-pas et mentionne des CMS (WordPress, Shopify) mais ne recommande aucune agence web. Le terrain est ouvert pour les prestataires qui documentent leurs processus avec des données concrètes.</p><h4>Requêtes comparatives</h4><p>« PME : Google Ads ou SEO ? » : le LLM compare les deux canaux sur le coût, le délai et le ROI. Il recommande une approche combinée sans citer de prestataire. Les entreprises qui publient des comparatifs étayés par des résultats clients réels ont un avantage de citabilité.</p>',
    structuredData:
      '<p>Pour les PME, les types schema.org recommandés sont : <code>Organization</code> (type principal), <code>LocalBusiness</code> (si zone de chalandise définie), <code>FAQPage</code>, <code>BreadcrumbList</code>, <code>Service</code>. Le balisage <code>Organization</code> permet à Google et aux LLM d\'identifier précisément le secteur d\'activité, la taille, la localisation et les services proposés par l\'entreprise.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre PME par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les PME',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de PME ?',
        answer:
          'Le budget SEO pour une PME dépend du secteur d\'activité, du niveau de concurrence et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les PME démarrent à 1 000 euros/mois pour une offre de base (audit + optimisations techniques + suivi mensuel) et peuvent atteindre 3 000 à 5 000 euros/mois pour une stratégie complète incluant contenu, netlinking et GEO.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats SEO pour une PME ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes de niche à faible concurrence peuvent être positionnées plus rapidement, tandis que les requêtes nationales très disputées nécessitent 6 à 12 mois de travail soutenu. Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale de votre marché.',
      },
      {
        question: 'Une PME avec un petit budget peut-elle vraiment rivaliser en SEO ?',
        answer:
          'Oui, à condition de cibler les bonnes requêtes. Les PME ne doivent pas viser les mêmes mots-clés que les grands groupes. Rankwell identifie les niches sous-exploitées où la concurrence est faible mais l\'intention d\'achat forte : requêtes longue traîne, requêtes locales, requêtes spécifiques au secteur d\'activité. C\'est cette priorisation qui permet aux PME de générer du trafic qualifié sans budget disproportionné.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une PME ?',
        answer:
          'Un blog est un levier puissant s\'il est bien exécuté. Les articles doivent répondre à des questions réelles posées par vos clients (inspirées des PAA Google), démontrer votre expertise métier et être rédigés pour être citables par les moteurs IA. Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne liées à votre secteur d\'activité.',
      },
      {
        question: 'Comment une PME peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une PME doit accumuler des signaux de notoriété sur le web : présence sur les annuaires professionnels, mentions dans la presse sectorielle, profil Google Business optimisé, contenus riches et factuels sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une PME ?',
        answer:
          'Le SEO local cible les requêtes géolocalisées et s\'appuie sur Google Business Profile, les avis clients et les citations locales. Le SEO national vise des requêtes génériques sans composante géographique et nécessite du contenu à forte autorité. Rankwell adapte la stratégie selon la zone de chalandise de la PME : locale pour un commerce de proximité, nationale pour un éditeur de logiciel ou un prestataire B2B.',
      },
      {
        question: 'Les marketplaces et annuaires suffisent-ils pour être visible quand on est une PME ?',
        answer:
          'Les plateformes comme Amazon, Kompass ou Pages Jaunes sont utiles pour la visibilité initiale, mais elles créent une dépendance : votre entreprise n\'est qu\'un profil parmi des milliers, et chaque vente ou lead est taxé d\'une commission. Un site propre bien référencé permet de contrôler son image, de convertir directement et de construire une autorité durable. Rankwell aide les PME à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes tierces.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre PME visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au budget et aux objectifs de votre PME.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
        { label: 'SEO Banque', href: '/agence-geo-seo/secteur/banque' },
        { label: 'SEO Assurance', href: '/agence-geo-seo/secteur/assurance' },
      ],
      projets: [
        { label: 'SEO Site vitrine', href: '/agence-geo-seo/projet/site-vitrine' },
        { label: 'Refonte de site', href: '/agence-geo-seo/projet/refonte' },
      ],
      cms: [
        { label: 'SEO WordPress', href: '/agence-geo-seo/cms/wordpress' },
        { label: 'SEO Shopify', href: '/agence-geo-seo/cms/shopify' },
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
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Imprimeur', href: '/agence-geo-seo/secteur/imprimeur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Organization',
};

export default data;
