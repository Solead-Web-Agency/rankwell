/**
 * DATA : Page Secteur Industries (FR)
 * Route : /agence-geo-seo/secteur/industrie
 *
 * Secteur NATIONAL / B2B : sous-traitants, fabricants, PME industrielles.
 * Mots-cles acheteurs / donneurs d'ordre industriels (Ahrefs FR, mars 2026).
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'industrie',
    title: 'Agence GEO & SEO pour l\'Industrie - Rankwell',
    description:
      'Rankwell accompagne les entreprises industrielles dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur industriel.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Industries' },
    ],
    title: 'GEO & SEO Industrie : visibilité Google & moteurs IA',
    subtitle:
      'Sous-traitants, fabricants, PME industrielles : vos donneurs d\'ordre vous cherchent sur Google et dans les réponses de ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux cycles d\'achat longs et aux exigences techniques du B2B industriel.',
    ctaText: 'Demander un audit GEO & SEO industrie',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les industriels',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">78 % des acheteurs industriels B2B démarrent leur sourcing par une recherche en ligne</strong>. Les requêtes combinent procédé technique et spécification (« usinage 5 axes titane », « chaudronnerie inox sur mesure »). Ce n\'est pas un marché de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> classique : le donneur d\'ordre cherche d\'abord la compétence technique, puis la localisation.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Les cycles d\'achat industriels durent 3 à 12 mois</strong> et impliquent plusieurs décisionnaires (acheteur, ingénieur méthodes, direction qualité). Le contenu doit convaincre à chaque étape avec fiches techniques, études de cas et preuves de conformité normative (ISO 9001, EN 9100, IATF 16949).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">Kompass, DirectIndustry, Europages, L\'Usine Nouvelle</strong> concentrent la visibilité sur les requêtes de sourcing industriel. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un industriel reste une fiche parmi 50 000 sur un annuaire généraliste.',
  },

  // ============================================
  // QUOTE : Phrase nucléaire du référentiel (Données structurées)
  // ============================================
  quote: {
    text: 'Selon Rankwell, les données structurées jouent un double rôle : elles alimentent les résultats enrichis de Google (rich snippets, FAQ, avis) et elles fournissent aux LLM une couche de compréhension sémantique explicite qui facilite l\'extraction factuelle. Un type DefinedTerm correctement balisé devient une entité directement ingérable par un moteur IA.',
    glossarySlug: 'donnees-structurees',
    glossaryLabel: 'En savoir plus sur les données structurées',
  },

  // ============================================
  // BLOC 3 : Mots-clés stratégiques
  // ============================================
  keywords: {
    title: 'Ce que vos futurs clients tapent sur Google',
    entries: [
      { keyword: 'usinage', volume: 3300, intent: 'mixte', difficulty: 'moyenne' },
      { keyword: 'industrie 4.0', volume: 2300, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'sous traitant', volume: 1200, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'global industrie 2026', volume: 1100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'usinage de précision', volume: 450, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'entreprise usinage', volume: 400, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'mécanique de précision', volume: 400, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'chaudronnerie industrielle', volume: 250, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'tôlerie industrielle', volume: 200, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'sous traitance industrielle', volume: 100, intent: 'commerciale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de requêtes techniques comme « usinage de précision » ou « chaudronnerie industrielle » traduisent une intention d\'achat B2B concrète. Les donneurs d\'ordre sélectionnent leurs fournisseurs parmi les 3 à 5 premiers résultats Google, ou suivent la recommandation d\'un moteur IA. Si votre site industriel n\'apparaît pas dans ces résultats, vos concurrents captent ces appels d\'offres.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les industriels',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur industriel B2B.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, des fiches produits et des facteurs techniques qui freinent l\'indexation des catalogues industriels.',
        items: [
          'Structure des pages par procédé, matériau et secteur client',
          'Balises schema.org Product et OfferCatalog',
          'Performance et Core Web Vitals sur catalogues volumineux',
          'Crawl et indexation des fiches techniques PDF',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de votre entreprise dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de votre marque industrielle',
          'Mesure de la légitimité et citabilité sur vos procédés',
          'Évaluation de la densité factuelle du contenu technique',
          'Benchmark concurrentiel sur les requêtes IA de sourcing',
        ],
      },
      {
        title: 'Étude de marché & mots-clés industriels',
        subtitle: 'Cartographie des requêtes de sourcing par procédé technique, matériau et secteur d\'application. Identification des niches à fort potentiel.',
        items: [
          'Combinaisons procédé + matériau + spécification (« usinage titane 5 axes »)',
          'Analyse des requêtes posées aux moteurs IA par les acheteurs',
          'Volumes de recherche réels par filière industrielle',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour le parcours de l\'acheteur industriel et le crawl Google.',
        items: [
          'Page procédé -> page capacité -> page devis/contact',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn avec terminologie technique',
        ],
      },
      {
        title: 'Stratégie de contenu industriel',
        subtitle: 'Création de contenus techniques démontrant l\'expertise de votre entreprise, rédigés pour être citables par les LLM.',
        items: [
          'Fiches procédés détaillées avec tolérances, matériaux et certifications',
          'Études de cas clients avec données chiffrées vérifiables',
          'Guides techniques répondant aux PAA Google du secteur',
        ],
      },
      {
        title: 'Autorité & netlinking industriel',
        subtitle: 'Développement de l\'autorité via les annuaires B2B qualifiés et les publications spécialisées du secteur.',
        items: [
          'Kompass, DirectIndustry, Europages, L\'Usine Nouvelle',
          'Publications dans la presse industrielle spécialisée',
          'Partenariats avec les pôles de compétitivité et clusters',
        ],
      },
      {
        title: 'Google Business Profile & visibilité locale',
        subtitle: 'Optimisation de la fiche Google Business Profile de vos sites de production pour capter les requêtes de sourcing régional et apparaître dans les réponses IA géolocalisées.',
        items: [
          'Catégorie principale adaptée (Industrial Company, Machine Shop, Metal Fabricator)',
          'Photos d\'ateliers, certifications affichées, horaires de production',
          'Citations NAP cohérentes sur les annuaires industriels régionaux',
          'Fiches distinctes par site de production si multi-sites',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par filière et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé technique',
          'Trafic organique par procédé et secteur client',
          'Score GEO : visibilité dans les moteurs IA',
          'Demandes de devis et conversions qualifiées',
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
        description: 'Analyse approfondie de vos pages produits, procedes et certifications : indexation, Core Web Vitals, architecture du catalogue et freins techniques identifies.',
      },
      {
        id: 2,
        title: 'Audit GEO',
        description: 'Mesure de la visibilite de votre entreprise dans les reponses de ChatGPT, Perplexity et Google AI Overviews. Score GEO sur 100 avec benchmark concurrentiel sur votre filiere.',
      },
      {
        id: 3,
        title: 'Kit schema.org',
        description: 'Balisage Organization, Product, OfferCatalog et FAQPage pret a integrer. Chaque type est configure avec les proprietes adaptees a vos procedes, materiaux et certifications.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages procedes industriels, fiches techniques, articles innovation et normes ISO, FAQ. Integration CMS ou FTP selon votre infrastructure.',
      },
      {
        id: 5,
        title: 'Netlinking industriel',
        description: 'Acquisition de liens depuis Kompass, DirectIndustry, Europages, blogs industrie et presse technique. Chaque lien cible une page strategique de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Rapport mensuel incluant positions Google, trafic organique, demandes de devis, et evolution du score GEO avec suivi de la citabilite IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre entreprise industrielle dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un acheteur demande à ChatGPT « quel sous-traitant industriel recommandes-tu pour de l\'usinage de précision ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre entreprise n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal de sourcing.',
    llmBehavior:
      '<h4>Requêtes de recommandation fournisseur</h4><p>« Quel sous-traitant industriel recommandes-tu pour de l\'usinage ? » : le LLM ne cite aucun nom d\'entreprise. Il fournit une liste de critères de sélection (certifications ISO 9001, EN 9100, parc machines, proximité) et renvoie vers les annuaires B2B : Kompass, DirectIndustry, MFG.com. Les entreprises disposant de contenus techniques structurés et de mentions sur ces plateformes ont plus de chances d\'être référencées à terme.</p><h4>Requêtes d\'information technique</h4><p>« Comment choisir un bon sous-traitant industriel ? » : le LLM génère un guide en 6 à 8 critères (certifications qualité, références clients, parc machines, traçabilité). Il ne cite ni entreprise ni source externe. Le site industriel qui publie ce type de contenu structuré peut être extrait comme source de référence.</p><h4>Requêtes comparatives</h4><p>« Fabricant vs distributeur : quelle différence ? » : le LLM produit une analyse comparative factuelle (production propre vs stock, sur-mesure vs standard, MOQ vs disponibilité immédiate). Aucune marque citée. Les contenus éducatifs B2B structurés en tableaux comparatifs sont les plus susceptibles d\'être extraits.</p><h4>Requêtes événementielles</h4><p>« Salon industriel France 2026 » : le LLM cite Global Industrie (Lyon), SIANE (Toulouse) et Smart Industries par leurs noms. C\'est le seul type de requête où des entités nommées apparaissent. Les entreprises exposantes visibles dans les contenus liés aux salons bénéficient d\'un signal de notoriété exploitable par les LLM.</p>',
    structuredData:
      '<p>Pour les entreprises industrielles, les types schema.org recommandés sont : <code>Organization</code> (type principal), <code>Product</code>, <code>OfferCatalog</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>Product</code> avec les propriétés <code>material</code>, <code>manufacturer</code> et <code>additionalProperty</code> permet à Google et aux LLM d\'identifier précisément les procédés, matériaux et capacités techniques de l\'entreprise.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre entreprise industrielle par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus techniques), la Légitimité & Citabilité (signaux de confiance externes : annuaires B2B, presse spécialisée, certifications), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les industriels',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site industriel ?',
        answer:
          'Le budget SEO pour une entreprise industrielle dépend du nombre de procédés, de filières clients et de la profondeur du catalogue. Chez Rankwell, les accompagnements SEO pour les industriels démarrent à 2 000 euros/mois pour une filière unique, et peuvent atteindre 6 000 à 10 000 euros/mois pour un groupe multi-sites couvrant plusieurs procédés (usinage, tôlerie, chaudronnerie).',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO industriel ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 4 et 8 mois. Les requêtes de niche technique (« usinage titane 5 axes ») se positionnent plus rapidement que les requêtes génériques très concurrentielles (« sous-traitant industriel »). Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle de votre filière.',
      },
      {
        question: 'Les certifications qualité influencent-elles le référencement ?',
        answer:
          'Oui, directement. Les certifications ISO 9001, EN 9100 (aéronautique), IATF 16949 (automobile) et ISO 13485 (médical) sont des signaux E-E-A-T forts pour Google. Elles renforcent aussi la citabilité IA : les LLM valorisent les entreprises dont les qualifications sont vérifiables et documentées. Rankwell intègre systématiquement les certifications dans la stratégie de contenu et le balisage structuré.',
      },
      {
        question: 'Faut-il un blog technique pour améliorer son référencement industriel ?',
        answer:
          'Un blog technique est un levier puissant s\'il traite des problématiques réelles des acheteurs. Les contenus doivent répondre à des questions de sourcing (choix de matériaux, tolérances, comparatifs de procédés) et inclure des données chiffrées vérifiables. Rankwell recommande 2 à 4 publications par mois, ciblant des requêtes informationnelles de longue traîne propres à votre filière.',
      },
      {
        question: 'Comment une entreprise industrielle peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une entreprise industrielle doit accumuler des signaux de notoriété sur le web : présence sur les annuaires B2B (Kompass, DirectIndustry), mentions dans la presse spécialisée (L\'Usine Nouvelle), contenus techniques riches et structurés sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Le SEO est-il pertinent pour une entreprise qui vend uniquement en B2B ?',
        answer:
          'Le SEO B2B industriel cible les acheteurs, ingénieurs et responsables qualité qui recherchent des fournisseurs en ligne. Contrairement au B2C, les volumes de recherche sont plus faibles mais l\'intention d\'achat est très qualifiée : une seule demande de devis peut représenter un contrat de plusieurs dizaines de milliers d\'euros. Rankwell adapte les métriques de suivi au cycle d\'achat long du B2B.',
      },
      {
        question: 'Les annuaires B2B comme Kompass suffisent-ils pour être visible ?',
        answer:
          'Les annuaires comme Kompass ou DirectIndustry sont utiles pour la visibilité initiale, mais ils créent une dépendance : votre entreprise est une fiche parmi des milliers, sans différenciation technique. Un site propre bien référencé permet de démontrer votre expertise, de convertir directement et de construire une autorité durable que les plateformes ne peuvent pas retirer. Rankwell aide les industriels à bâtir cette autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des annuaires.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre entreprise industrielle visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté à votre filière industrielle.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Banque', href: '/agence-geo-seo/secteur/banque' },
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
        { label: 'SEO Architecte', href: '/agence-geo-seo/secteur/architecte' },
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
        { label: 'Données structurées (Schema.org)', href: '/glossaire/donnees-structurees' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches (B2B / services professionnels)
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Banque', href: '/agence-geo-seo/secteur/banque' },
      { label: 'Assurance', href: '/agence-geo-seo/secteur/assurance' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Architecte', href: '/agence-geo-seo/secteur/architecte' },
      { label: 'Imprimeur', href: '/agence-geo-seo/secteur/imprimeur' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Traducteur', href: '/agence-geo-seo/secteur/traducteur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'Organization',
};

export default data;
