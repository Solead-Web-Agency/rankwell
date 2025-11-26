import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'SEO & Référencement Naturel',
      description: 'Améliorez votre positionnement sur Google et les autres moteurs de recherche',
      features: [
        'Audit SEO complet',
        'Optimisation technique',
        'Stratégie de mots-clés',
        'Netlinking de qualité',
        'SEO local',
        'Suivi et reporting mensuel'
      ],
      icon: '🔍'
    },
    {
      title: 'Marketing Digital',
      description: 'Développez votre présence en ligne avec des campagnes performantes',
      features: [
        'Google Ads & SEA',
        'Social Media Ads',
        'Email Marketing',
        'Marketing Automation',
        'Retargeting',
        'A/B Testing'
      ],
      icon: '📊'
    },
    {
      title: 'Création de Contenu',
      description: 'Produisez du contenu engageant et optimisé pour votre audience',
      features: [
        'Rédaction web SEO',
        'Articles de blog',
        'Pages de vente',
        'Guides et ebooks',
        'Contenu vidéo',
        'Infographies'
      ],
      icon: '✍️'
    },
    {
      title: 'Stratégie Digitale',
      description: 'Élaborez une stratégie sur mesure alignée avec vos objectifs',
      features: [
        'Audit digital complet',
        'Définition des objectifs',
        'Persona & parcours client',
        'Plan d\'action détaillé',
        'Roadmap digitale',
        'Formation des équipes'
      ],
      icon: '🎯'
    },
    {
      title: 'Social Media Management',
      description: 'Gérez et développez votre présence sur les réseaux sociaux',
      features: [
        'Stratégie social media',
        'Création de contenu',
        'Community management',
        'Influencer marketing',
        'Analyse des performances',
        'Gestion de crise'
      ],
      icon: '📱'
    },
    {
      title: 'Analytics & Data',
      description: 'Mesurez et optimisez vos performances digitales',
      features: [
        'Configuration Google Analytics',
        'Tableaux de bord personnalisés',
        'Reporting automatisé',
        'Analyse comportementale',
        'Conversion tracking',
        'Recommandations actionnables'
      ],
      icon: '📈'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes et personnalisées pour accélérer votre croissance digitale
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour des résultats garantis
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Audit & Analyse', desc: 'Analyse approfondie de votre situation actuelle' },
              { step: '02', title: 'Stratégie', desc: 'Élaboration d\'un plan d\'action sur mesure' },
              { step: '03', title: 'Exécution', desc: 'Mise en œuvre des actions définies' },
              { step: '04', title: 'Optimisation', desc: 'Amélioration continue basée sur les données' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un audit gratuit et découvrez comment nous pouvons vous aider
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            Demander un audit gratuit
          </Link>
        </div>
      </section>
    </main>
  );
}

