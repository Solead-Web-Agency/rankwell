/**
 * DATA : Page Secteur Associations (FR)
 * Route : /agence-geo-seo/secteur/association
 *
 * Page dédiée aux associations loi 1901, fondations et structures à but non lucratif
 */

import type { SecteurPageData } from '@/types/sector-pages';

const data: SecteurPageData = {
  // ============================================
  // SEO
  // ============================================
  seo: {
    slug: 'association',
    title: 'Agence GEO & SEO pour Associations - Rankwell',
    description:
      'Rankwell accompagne les associations dans leur référencement Google et leur visibilité sur les moteurs IA (ChatGPT, Perplexity). Stratégie GEO & SEO sur mesure pour le secteur associatif.',
  },

  // ============================================
  // BLOC 1 : HERO
  // ============================================
  hero: {
    breadcrumb: [
      { label: 'Accueil', href: '/' },
      { label: 'Agence GEO & SEO', href: '/agence-geo-seo' },
      { label: 'Secteurs', href: '/agence-geo-seo/secteurs' },
      { label: 'Associations' },
    ],
    title: 'GEO & SEO Association : visibilité Google & moteurs IA',
    subtitle:
      'Vos donateurs, bénévoles et bénéficiaires vous cherchent sur Google et interrogent ChatGPT. Nos experts conçoivent des stratégies de référencement GEO & SEO adaptées aux contraintes budgétaires et réglementaires du secteur associatif.',
    ctaText: 'Demander un audit GEO & SEO association',
    ctaHref: '/contact',
  },

  // ============================================
  // BLOC 2 : Pourquoi le SEO est différent (IntroService)
  // ============================================
  whyDifferent: {
    title: 'Pourquoi le SEO est différent pour les associations',
    searchBehavior:
      '<strong class="text-secondary dark:text-accent">5 000 recherches mensuelles sur « créer une association » et 5 900 sur « association loi 1901 »</strong>. Les internautes cherchent aussi par cause (« association animaux ») ou par proximité. Le secteur combine requêtes nationales informationnelles et requêtes de <a href="/agence-geo-seo/local" class="text-rw-blue hover:underline">SEO local</a> pour les structures de terrain.',
    constraints:
      '<strong class="text-secondary dark:text-accent">Budget limité et dépendance aux subventions</strong> : la majorité des associations loi 1901 fonctionnent avec moins de 50 000 euros de budget annuel. Le programme Google Ad Grants offre 10 000 dollars/mois de crédits publicitaires, mais nécessite un site conforme aux exigences Google (CTR minimum 5 %).',
    competingPlatforms:
      '<strong class="text-secondary dark:text-accent">HelloAsso, Assoconnect, Le Mouvement Associatif, JeVeuxAider.gouv.fr</strong> captent une part massive de la visibilité sur les requêtes liées au don, au bénévolat et à la création d\'association. Sans stratégie SEO & GEO pilotée par une <a href="/agence-geo-seo" class="text-rw-blue hover:underline">agence SEO et GEO</a> experte du secteur, une association reste invisible derrière ces plateformes.',
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
    title: 'Ce que vos futurs donateurs et bénévoles tapent sur Google',
    entries: [
      { keyword: 'association loi 1901', volume: 5900, intent: 'informationnelle', difficulty: 'moyenne' },
      { keyword: 'créer une association', volume: 5000, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'association caritative', volume: 2600, intent: 'mixte', difficulty: 'très élevée' },
      { keyword: 'création association', volume: 2800, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'subvention association', volume: 1100, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'don association impot', volume: 1500, intent: 'informationnelle', difficulty: 'moyenne' },
      { keyword: 'faire un don à une association', volume: 900, intent: 'transactionnelle', difficulty: 'faible' },
      { keyword: 'association animaux', volume: 2700, intent: 'mixte', difficulty: 'faible' },
      { keyword: 'site internet association', volume: 200, intent: 'informationnelle', difficulty: 'faible' },
      { keyword: 'demande de subvention association', volume: 900, intent: 'informationnelle', difficulty: 'faible' },
    ],
    interpretation:
      'Chaque mois, des milliers de recherches comme « association loi 1901 » ou « faire un don à une association » représentent autant de donateurs, bénévoles et partenaires potentiels. La majorité clique sur les 3 premiers résultats, ou suit la recommandation d\'un moteur IA. Si votre association n\'y figure pas, ces soutiens se tournent vers d\'autres structures.',
  },

  // ============================================
  // BLOC 4 : Méthodologie (format StepsDimensions)
  // ============================================
  methodology: {
    title: 'Notre méthodologie GEO & SEO pour les associations',
    subtitle: 'Notre approche de référencement structurée en 8 étapes, adaptée aux contraintes budgétaires et réglementaires du secteur associatif.',
    steps: [
      {
        title: 'Audit technique & sémantique',
        subtitle: 'Analyse complète de l\'architecture du site, de la vitesse de chargement et des facteurs techniques qui freinent l\'indexation.',
        items: [
          'Structure des pages par mission, cause et action',
          'Balises schema.org NGO et NonprofitType',
          'Performance et Core Web Vitals',
          'Crawl et indexation',
        ],
      },
      {
        title: 'Audit GEO : citabilité et présence IA',
        subtitle: 'Évaluation de la visibilité actuelle de l\'association dans les moteurs IA (ChatGPT, Perplexity, Gemini) via l\'audit GEO propriétaire Rankwell.',
        items: [
          'Analyse de l\'univers informatif de l\'association',
          'Mesure de la légitimité et citabilité',
          'Évaluation de la densité factuelle du contenu',
          'Benchmark concurrentiel sur les requêtes IA associatives',
        ],
      },
      {
        title: 'Étude de marché & mots-clés associatifs',
        subtitle: 'Cartographie des requêtes par cause, zone géographique et type d\'engagement. Identification des requêtes à fort potentiel de conversion (dons, bénévolat, adhésions).',
        items: [
          'Combinaisons cause + ville à faible concurrence',
          'Analyse des requêtes posées aux moteurs IA',
          'Volumes de recherche réels par thématique associative',
        ],
      },
      {
        title: 'Architecture & optimisation on-page',
        subtitle: 'Restructuration du site avec un maillage interne qui guide le visiteur de la découverte de la cause jusqu\'à l\'engagement concret.',
        items: [
          'Page mission, page action, page don, page bénévolat',
          'Requête principale + 3 à 5 requêtes secondaires par page',
          'Optimisation des balises title, meta, Hn',
        ],
      },
      {
        title: 'Stratégie de contenu associatif',
        subtitle: 'Création de contenus qui démontrent l\'impact de l\'association, rédigés pour être citables par les LLM et conformes aux obligations de transparence.',
        items: [
          'Rapports d\'impact chiffrés et témoignages terrain',
          'Phrases factuelles auto-suffisantes avec données vérifiables',
          'Guides pratiques répondant aux PAA Google (dons, subventions, bénévolat)',
        ],
      },
      {
        title: 'Autorité & netlinking associatif',
        subtitle: 'Développement de l\'autorité via les annuaires associatifs, les plateformes institutionnelles et les mentions dans la presse.',
        items: [
          'HelloAsso, JeVeuxAider.gouv.fr, Le Mouvement Associatif',
          'Publications dans la presse locale et spécialisée',
          'Partenariats avec des collectivités et institutions',
        ],
      },
      {
        title: 'Google Business Profile & SEO local',
        subtitle: 'Optimisation de la fiche Google Business Profile de l\'association pour capter les recherches locales et apparaître dans le Local Pack et les réponses IA géolocalisées.',
        items: [
          'Catégorie principale Non-profit organization + catégories secondaires par activité',
          'Gestion des avis et stratégie de collecte auprès des bénéficiaires et bénévoles',
          'Photos des actions terrain, horaires d\'accueil, événements',
          'Citations NAP cohérentes sur les annuaires associatifs',
        ],
      },
      {
        title: 'Suivi, reporting & itérations',
        subtitle: 'Reporting mensuel incluant les positions Google, le trafic organique par cause et les conversions (dons, inscriptions bénévoles, demandes de partenariat).',
        items: [
          'Positions Google par mot-clé',
          'Trafic organique par thématique',
          'Score GEO : visibilité dans les moteurs IA',
          'Conversions : dons en ligne, inscriptions bénévoles, contacts partenaires',
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
        description: 'Analyse approfondie de vos pages missions, actions et adhesion : indexation, Core Web Vitals, architecture du site et freins techniques identifies.',
      },
      {
        id: 2,
        title: 'Audit GEO',
        description: 'Mesure de la visibilite de votre association dans les reponses de ChatGPT, Perplexity et Google AI Overviews. Score GEO sur 100 avec benchmark concurrentiel sur votre cause.',
      },
      {
        id: 3,
        title: 'Kit schema.org',
        description: 'Balisage NGO, Organization et FAQPage (avec missions et evenements) pret a integrer. Chaque type est configure avec les proprietes adaptees a votre structure associative.',
      },
      {
        id: 4,
        title: 'Production de contenus',
        description: 'Pages missions optimisees, articles impact et temoignages, guides (Google Ad Grants, subventions), FAQ. Integration CMS ou FTP selon votre infrastructure.',
      },
      {
        id: 5,
        title: 'Netlinking associatif',
        description: 'Acquisition de liens depuis JeVeuxAider.gouv.fr, HelloAsso, blogs associatifs et presse. Chaque lien cible une page strategique de votre site.',
      },
      {
        id: 6,
        title: 'Rapport SEO et GEO',
        description: 'Rapport mensuel incluant positions Google, trafic organique, dons et adhesions, et evolution du score GEO avec suivi de la citabilite IA.',
      },
    ],
  },

  // ============================================
  // BLOC 6 : Visibilité IA
  // ============================================
  geoVisibility: {
    title: 'Visibilité IA : votre association dans ChatGPT, Perplexity et Google AI',
    intro:
      'Quand un internaute demande à ChatGPT « quelle association soutenir pour la protection animale ? », le LLM compile des informations provenant du web pour formuler sa réponse. Si votre association n\'apparaît dans aucune source citée, elle est invisible dans ce nouveau canal de découverte.',
    llmBehavior:
      '<h4>Requêtes de conseil en visibilité</h4><p>« Comment améliorer la visibilité d\'une association sur Google ? » : le LLM génère un guide en 7 à 8 points (site web, Google Business Profile, blog, Google Ad Grants) sans citer aucune agence SEO. Il nomme systématiquement HelloAsso et Assoconnect comme outils, mais aucun prestataire spécialisé.</p><h4>Requêtes sur le choix d\'outils</h4><p>« Comment choisir un bon site internet pour une association ? » : le LLM compare 5 à 6 plateformes (Assoconnect, HelloAsso, WordPress, Wix, Squarespace) en listant des critères (budget, dons en ligne, facilité). Aucune agence web ni agence SEO n\'est recommandée.</p><h4>Requêtes budgétaires</h4><p>« Budget communication pour une association » : le LLM fournit des fourchettes chiffrées (moins de 5 % du budget total pour les petites structures, 5 à 15 % pour les moyennes) et détaille les postes. Il mentionne Google Ad Grants (10 000 dollars/mois). Les associations qui publient leurs données budgétaires et résultats de campagne ont le potentiel d\'être citées comme source.</p><h4>Requêtes sur les financements</h4><p>« Subventions Google pour les associations » : le LLM détaille le programme Google Ad Grants avec des données précises (critères d\'éligibilité, CTR minimum 5 %, processus via TechSoup). Il cite Google.org comme source mais aucune agence d\'accompagnement.</p>',
    structuredData:
      '<p>Pour les associations, les types schema.org recommandés sont : <code>NGO</code> (type principal), <code>NonprofitType</code>, <code>FAQPage</code>, <code>BreadcrumbList</code>. Le balisage <code>NGO</code> permet à Google et aux LLM d\'identifier précisément la mission, la zone d\'intervention et la cause défendue par l\'association.</p>',
    geoScore:
      '<p>Le <strong>score GEO Rankwell</strong> mesure la citabilité de votre association par les moteurs IA sur une échelle de 0 à 100. Il évalue trois dimensions : l\'Univers Informatif (présence et profondeur des contenus sur votre cause), la Légitimité & Citabilité (signaux de confiance externes), et la Densité Factuelle (richesse des données structurées et des entités nommées).</p>',
    glossaryLinks: [
      { label: 'Qu\'est-ce que le GEO ?', href: '/glossaire/geo' },
      { label: 'Audit GEO : méthode complète', href: '/glossaire/audit-geo' },
    ],
  },

  // ============================================
  // BLOC 8 : FAQ (texte brut, pas de HTML)
  // ============================================
  faq: {
    title: 'Questions fréquentes : SEO pour les associations',
    items: [
      {
        question: 'Combien coûte le référencement d\'un site d\'association ?',
        answer:
          'Le budget SEO pour une association dépend de la taille de la structure, du nombre de causes portées et de la zone géographique ciblée. Chez Rankwell, les accompagnements SEO pour les associations démarrent à 800 euros/mois pour une structure locale mono-cause, et peuvent atteindre 3 000 à 5 000 euros/mois pour une association nationale multi-thématiques. Le programme Google Ad Grants (10 000 dollars/mois de crédits publicitaires) peut compléter la stratégie organique.',
      },
      {
        question: 'Combien de temps faut-il pour voir des résultats en SEO associatif ?',
        answer:
          'Les premiers résultats apparaissent généralement entre 3 et 6 mois. Les requêtes de niche (« association protection tortues marines Méditerranée ») sont plus rapides à positionner que les requêtes nationales très concurrentielles comme « association caritative ». Rankwell fournit un calendrier prévisionnel basé sur l\'analyse concurrentielle initiale et les spécificités du secteur associatif.',
      },
      {
        question: 'Une association loi 1901 a-t-elle des contraintes SEO spécifiques ?',
        answer:
          'Oui, les associations loi 1901 sont soumises à des obligations de transparence : publication des statuts au Journal officiel, rapport d\'activité annuel, comptes certifiés au-delà de 153 000 euros de subventions publiques. Ces obligations sont aussi des opportunités SEO : les rapports d\'impact chiffrés et les comptes publiés constituent du contenu factuel que les moteurs IA citent préférentiellement. Rankwell transforme ces contraintes en leviers de visibilité.',
      },
      {
        question: 'Faut-il un blog pour améliorer le référencement d\'une association ?',
        answer:
          'Un blog est un levier efficace si les articles répondent à des questions réelles des donateurs, bénévoles et bénéficiaires. Les sujets à fort potentiel : « comment déduire un don aux impôts », « comment devenir bénévole », « comment demander une subvention ». Rankwell recommande 2 à 4 articles par mois, ciblant des requêtes informationnelles de longue traîne et rédigés pour être citables par les moteurs IA.',
      },
      {
        question: 'Comment une association peut-elle apparaître dans les réponses de ChatGPT ?',
        answer:
          'Pour être citée par ChatGPT ou Perplexity, une association doit accumuler des signaux de notoriété sur le web : présence sur les annuaires associatifs (HelloAsso, JeVeuxAider.gouv.fr), mentions dans la presse, profil Google Business optimisé, rapports d\'impact publiés sur son site. Le score GEO de Rankwell mesure et optimise précisément ces signaux de citabilité IA.',
      },
      {
        question: 'Quelle est la différence entre SEO local et SEO national pour une association ?',
        answer:
          'Le SEO local cible les requêtes « association + cause + ville » et s\'appuie sur Google Business Profile, les avis et les citations locales. Il convient aux associations de terrain (maraudes, aide alimentaire, clubs sportifs). Le SEO national vise des requêtes génériques (« association protection enfance ») et nécessite du contenu éducatif à forte autorité. Rankwell combine les deux approches selon le périmètre d\'action de l\'association.',
      },
      {
        question: 'HelloAsso et les plateformes associatives suffisent-ils pour être visible ?',
        answer:
          'Les plateformes comme HelloAsso ou JeVeuxAider.gouv.fr sont utiles pour la collecte de dons et le recrutement de bénévoles, mais elles créent une dépendance : l\'association n\'est qu\'un profil parmi des milliers. Un site propre bien référencé permet de contrôler son image, de convertir directement les visiteurs en donateurs et de construire une autorité durable. Rankwell aide les associations à bâtir cette présence indépendante grâce à une stratégie de référencement SEO & GEO autonome.',
      },
    ],
  },

  // ============================================
  // CTA + Maillage
  // ============================================
  cta: {
    title: 'Prêt à rendre votre association visible ?',
    description:
      'Demandez un audit GEO & SEO gratuit de votre site. Nos consultants SEO & GEO analysent votre référencement actuel sur Google et les moteurs IA, et vous proposent un plan d\'action concret adapté au budget de votre association.',
    buttonText: 'Demander un audit gratuit',
    buttonHref: '/contact',
    relatedPages: {
      secteurs: [
        { label: 'SEO Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
        { label: 'SEO Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
        { label: 'SEO Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
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
        { label: 'Citabilité', href: '/glossaire/citabilite' },
      ],
    },
  },

  // Bandeau maillage : secteurs proches
  relatedSectors: {
    title: 'Nous accompagnons aussi ces secteurs',
    items: [
      { label: 'Expert-comptable', href: '/agence-geo-seo/secteur/expert-comptable' },
      { label: 'Agence de communication', href: '/agence-geo-seo/secteur/agence-communication' },
      { label: 'Graphiste', href: '/agence-geo-seo/secteur/graphiste' },
      { label: 'Photographe', href: '/agence-geo-seo/secteur/photographe' },
      { label: 'Vidéaste', href: '/agence-geo-seo/secteur/videaste' },
      { label: 'Coach sportif', href: '/agence-geo-seo/secteur/coach-sportif' },
      { label: 'Imprimeur', href: '/agence-geo-seo/secteur/imprimeur' },
    ],
  },

  // Schema.org type principal
  schemaType: 'NGO',
};

export default data;
