/**
 * DATA : Page Secteur Traducteurs (FR)
 * Route : /agence-geo-seo/secteur/traducteur
 *
 * Mots-cles Ahrefs (country: fr) - mars 2026
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'traducteur',
    title: 'Agence GEO & SEO pour Traducteurs - Rankwell',
    description:
      'Rankwell accompagne les traducteurs et agences de traduction dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur de la traduction.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Traducteurs' },
    ],
    title: 'GEO & SEO Traducteur : visibilité Google & moteurs IA',
    subtitle:
      'Vos prospects cherchent un traducteur assermenté ou une agence de traduction spécialisée sur Google et dans les réponses IA. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées au secteur de la traduction.',
    ctaText: 'Demander un audit GEO & SEO traducteur',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les traducteurs',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">Les requêtes traduction se divisent en deux univers</strong> : outils en ligne (149 000 recherches/mois) et professionnels (« traducteur assermenté paris », « agence de traduction »). Seules les requêtes commerciales ou locales génèrent des clients. Le <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> est déterminant pour les traducteurs assermentés, recherchés par ville et paire linguistique.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Le marché est polarisé entre freelances et agences</strong>, avec des logiques SEO opposées. Un indépendant cible une niche (paire linguistique + domaine), une agence doit couvrir des dizaines de combinaisons. L\'assermentation, délivrée par les cours d\'appel, impose une distinction légale valorisée par Google dans les contenus YMYL.',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">ProZ, TranslatorsCafe, Malt, LinkedIn et les annuaires de la Cour d\'appel</strong> captent la visibilité sur les requêtes commerciales, et les plateformes low-cost (Fiverr, Translated) dominent le transactionnel. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, un traducteur reste invisible face à ces agrégateurs.',
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
      { keyword: 'traducteur assermenté', volume: 1600, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'traduction assermentée', volume: 1000, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'agence de traduction', volume: 600, intent: 'commerciale', difficulty: 'moyenne' },
      { keyword: 'traduction certifiée', volume: 500, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'agence de traduction paris', volume: 450, intent: 'locale', difficulty: 'faible' },
      { keyword: 'traducteur assermenté paris', volume: 300, intent: 'locale', difficulty: 'faible' },
      { keyword: 'agence de traduction juridique', volume: 200, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'agence de traduction lyon', volume: 150, intent: 'locale', difficulty: 'faible' },
      { keyword: 'traduction assermentée prix', volume: 150, intent: 'commerciale', difficulty: 'faible' },
      { keyword: 'traducteur assermenté lyon', volume: 150, intent: 'locale', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des centaines de recherches comme « traducteur assermenté paris » ou « agence de traduction juridique » représentent des clients à forte intention d\'achat. Ces internautes ont besoin d\'un professionnel pour une démarche administrative, juridique ou commerciale. La majorité clique sur les 3 premiers résultats Google, ou suit la recommandation d\'un moteur IA. Si votre site n\'y figure pas, ces clients s\'adressent à vos concurrents ou aux plateformes généralistes.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les traducteurs',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes du secteur de la traduction professionnelle.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par paire linguistique et domaine de spécialité',
          'Balises schema.org ProfessionalService et TranslationService',
          'Performance et Core Web Vitals',
          'Gestion du multilingue (hreflang, versions localisées du site)',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle du traducteur ou de l\'agence dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif du prestataire de traduction',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA (recommandation de traducteurs)',
        ],
      },
      {
        title: 'Étude de marché & mots-clés traduction',
        subtitle: 'Cartographie des requêtes par paire linguistique, spécialité (juridique, technique, médical) et zone géographique. Identification des niches à faible concurrence.',
        items: [
          'Combinaisons paire linguistique + ville + spécialité',
          'Analyse des requêtes posées aux moteurs IA sur la traduction',
          'Volumes de recherche réels par spécialité (assermenté, technique, littéraire)',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne pensé pour couvrir chaque combinaison langue/spécialité sans cannibalisation.',
        items: [
          'Page langue → page spécialité → page contact/devis',
          'Requête principale + 3-5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu traduction',
        subtitle: 'Création de contenus démontrant l\'expertise linguistique et sectorielle du traducteur, rédigés pour être citables par les LLM.',
        items: [
          'Guides pratiques : « traduction assermentée vs certifiée », « comment faire traduire un acte de naissance »',
          'Phrases factuelles auto-suffisantes avec données chiffrées (tarifs, délais)',
          'Contenus éducatifs sur les paires linguistiques et les normes (ISO 17100)',
        ],
      },
      {
        title: 'Autorité & netlinking traduction',
        subtitle: 'Développement de l\'autorité via les annuaires professionnels de la traduction et les publications spécialisées.',
        items: [
          'Annuaires Cour d\'appel, SFT (Société française des traducteurs), ProZ',
          'Publications dans la presse spécialisée (traduction, export, juridique)',
          'Partenariats avec des sites institutionnels et des cabinets d\'avocats',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile pour capter les requêtes locales « traducteur assermenté + ville » et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Translator ou Translation Service + catégories secondaires par spécialité',
          'Gestion des avis clients et stratégie de collecte post-mission',
          'Photos, horaires, attributs et posts réguliers',
          'Citations NAP cohérentes sur les annuaires de traduction (ProZ, SFT, Malt)',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par paire linguistique et les demandes de devis générées.',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par paire linguistique et spécialité',
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
        description: 'Diagnostic complet de votre site : architecture des pages par langue et par sp\u00e9cialit\u00e9 (juridique, technique, m\u00e9dicale), vitesse de chargement, indexation Google, balisage Hn et meta, avec la liste des actions correctives class\u00e9es par priorit\u00e9.',
      },
      {
        id: 2,
        title: 'Rapport d\'audit GEO',
        description: 'Tests de citabilit\u00e9 de votre activit\u00e9 de traduction dans ChatGPT, Perplexity et Gemini sur vos requ\u00eates cibles. Benchmark contre 3 \u00e0 5 concurrents et Score GEO sur 100 (Univers Informatif, L\u00e9gitimit\u00e9, Densit\u00e9 Factuelle).',
      },
      {
        id: 3,
        title: 'Kit schema.org cl\u00e9 en main',
        description: 'Balisage ProfessionalService, Service et FAQPage pr\u00eat \u00e0 int\u00e9grer, avec les paires de langues et sp\u00e9cialit\u00e9s couvertes. Livr\u00e9 avec un guide d\'int\u00e9gration pour votre CMS (WordPress, Webflow ou autre).',
      },
      {
        id: 4,
        title: 'Production et int\u00e9gration de contenus',
        description: 'R\u00e9daction de pages par sp\u00e9cialit\u00e9 (juridique, technique, m\u00e9dicale), articles sur la localisation et les normes de traduction, FAQ tarifs. Int\u00e9gration directe sur votre CMS ou par FTP, avec cr\u00e9ation de templates de pages si n\u00e9cessaire.',
      },
      {
        id: 5,
        title: 'Suivi et gestion du netlinking',
        description: 'Acquisition de backlinks depuis les annuaires traduction (SFT, ProZ, Cour d\'appel), blogs linguistique et presse sp\u00e9cialis\u00e9e. Suivi des liens obtenus et progression du Domain Rating.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO mensuel',
        description: 'Suivi des positions Google par paire linguistique et par sp\u00e9cialit\u00e9, trafic organique, demandes de devis g\u00e9n\u00e9r\u00e9es, \u00e9volution du Score GEO et recommandations d\'ajustement pour le mois suivant.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre activité de traduction dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quel traducteur assermenté recommandes-tu à Paris ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre site ou votre profil n\'apparaît dans aucune source citée, vous êtes invisible dans ce nouveau canal d\'acquisition.',
    llmBehavior:
      '<h4>Requêtes de recommandation</h4><p>« Quel traducteur assermenté recommandes-tu à Paris ? » : le LLM ne cite aucun traducteur ni agence par nom. Il renvoie vers la liste officielle de la Cour d\'appel de Paris et fournit 4 critères de sélection (paire linguistique, spécialisation, avis, proximité). Les traducteurs dont le site structure ces informations de manière factuelle sont les mieux placés pour être cités à terme.</p><h4>Requêtes d\'information</h4><p>« Comment choisir un bon traducteur ? » : le LLM génère un guide structuré en 6 à 7 critères (certification ISO 17100, langue maternelle cible, spécialisation, NDA, tarification transparente) sans citer de prestataire. « Traducteur assermenté vs traducteur libre » : il produit un comparatif juridique détaillé. Les sites publiant ce type de contenu éducatif peuvent être extraits comme source.</p><h4>Requêtes tarifaires</h4><p>« Prix traduction page » : le LLM donne des fourchettes précises (0,08 à 0,25 EUR/mot pour la traduction standard, 30 à 50 EUR par page pour la traduction assermentée). Les sites affichant des grilles tarifaires claires et actualisées sont les plus susceptibles d\'être cités comme référence.</p><h4>Requêtes locales et Maps</h4><p>Sur « traducteur autour de moi », <strong>ChatGPT active le mode Search avec carte Maps</strong>. Les agences de traduction disposant d\'une fiche Google Business Profile complète (catégorie Translation Service, avis récents, horaires) apparaissent directement dans la réponse IA. Les traducteurs indépendants sans fiche GBP restent absents de ces résultats.</p>',
    structuredData:
      '<p>Pour les traducteurs et agences de traduction, les types schema.org recommandés sont : <code>ProfessionalService</code> (type principal), <code>Service</code> (avec <code>serviceType</code> : Translation), <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>ProfessionalService</code> permet à Google et aux LLM d\'identifier précisément les langues proposées, la localisation et les spécialisations du traducteur.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre activité de traduction par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les traducteurs',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site de traducteur ?',
        answer:
          'Le budget SEO pour un traducteur ou une agence de traduction dépend du nombre de paires linguistiques et de spécialités ciblées. Chez Rankwell, les accompagnements SEO pour les traducteurs démarrent à 1 000 EUR/mois pour une paire linguistique et une ville, et peuvent atteindre 3 000 à 5 000 EUR/mois pour une agence multi-langues positionnée au niveau national.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO traduction ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes de niche (ex : « traducteur assermenté portugais Lyon ») se positionnent plus rapidement que les requêtes nationales concurrentielles comme « agence de traduction ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale.',
      },
      {
        question: 'Le SEO est-il pertinent pour un traducteur indépendant ?',
        answer:
          'Oui, le SEO est particulièrement efficace pour les traducteurs indépendants qui ciblent une niche (paire linguistique + domaine de spécialité + ville). Un freelance spécialisé en traduction juridique anglais-français à Bordeaux peut se positionner en top 3 sur cette requête précise avec un investissement raisonnable. Rankwell adapte ses stratégies au budget et aux objectifs des indépendants comme des agences.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'un traducteur ?',
        answer:
          'Un blog est un levier puissant pour les traducteurs, à condition de cibler les bonnes requêtes. Les articles comparatifs (« traduction assermentée vs certifiée »), les guides pratiques (« comment faire traduire un acte de naissance ») et les contenus sur les normes (ISO 17100) attirent un trafic qualifié et démontrent l\'expertise. Rankwell recommande 2 à 4 articles par mois sur des requêtes informationnelles ciblées.',
      },
      {
        question: 'Comment un traducteur peut-il apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être cité par ChatGPT ou Perplexity, un traducteur doit accumuler des signaux de crédibilité : présence sur les annuaires professionnels (SFT, ProZ, Cour d\'appel), mentions sur des sites tiers, fiche Google Business Profile optimisée, contenus factuels avec des grilles tarifaires et des certifications vérifiables. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour un traducteur ?',
        answer:
          'Le SEO local cible les requêtes « traducteur assermenté + ville » et s\'appuie sur Google Business Profile, les avis clients et les citations locales. C\'est le levier prioritaire pour les traducteurs assermentés. Le SEO national vise des requêtes génériques (« agence de traduction technique ») et nécessite du contenu à forte autorité. Rankwell combine les deux approches selon le positionnement du traducteur ou de l\'agence.',
      },
      {
        question: 'Les plateformes comme ProZ ou Malt suffisent-elles pour être visible ?',
        answer:
          'Les plateformes comme ProZ, TranslatorsCafe ou Malt sont utiles pour la visibilité initiale, mais elles créent une dépendance : le traducteur est un profil parmi des milliers, soumis à la concurrence tarifaire. Un site propre bien référencé permet de contrôler son image, de convertir directement et de fixer ses tarifs. Rankwell aide les traducteurs à bâtir une autorité propre grâce à une stratégie de référencement SEO & GEO indépendante des plateformes.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre activité de traduction visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Avocat', href: '/agence-geo-seo/secteur/avocat' },
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Photographe', href: '/agence-geo-seo/secteur/photographe' },
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
        { label: 'Citabilité', href: '/glossaire/citabilite' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Vidéaste', href: '/agence-geo-seo/secteur/videaste' },
      { label: 'Avocat', href: '/agence-geo-seo/secteur/avocat' },
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
    ],
  },

  // Schema.org type principal
  schemaType: 'ProfessionalService',
};

export default data;
