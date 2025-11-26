import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet et chaque interaction avec nos clients.'
    },
    {
      icon: '🤝',
      title: 'Transparence',
      description: 'Une communication claire et honnête est au cœur de notre approche.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Nous restons à la pointe des dernières tendances et technologies digitales.'
    },
    {
      icon: '🚀',
      title: 'Résultats',
      description: 'Nous nous concentrons sur des résultats mesurables et un ROI tangible.'
    }
  ];

  const team = [
    {
      name: 'Alexandre Dupont',
      role: 'CEO & Fondateur',
      bio: 'Expert en stratégie digitale avec 15 ans d\'expérience'
    },
    {
      name: 'Sophie Bernard',
      role: 'Directrice SEO',
      bio: 'Spécialiste SEO reconnue, ancienne consultante chez Google'
    },
    {
      name: 'Thomas Laurent',
      role: 'Head of Content',
      bio: 'Créateur de contenu passionné avec un œil pour le storytelling'
    },
    {
      name: 'Marie Chen',
      role: 'Data Analyst',
      bio: 'Experte en analytics et optimisation de conversion'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              À propos de RankWell
            </h1>
            <p className="text-xl text-gray-600">
              Nous sommes une agence digitale passionnée, dédiée à aider les entreprises à atteindre leurs objectifs de croissance en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2014, RankWell est née de la vision de créer une agence digitale différente, 
                  où l'expertise technique rencontre la créativité et l'approche centrée sur le client.
                </p>
                <p>
                  Au fil des années, nous avons aidé plus de 500 entreprises à transformer leur présence 
                  digitale et à générer des résultats mesurables. Notre approche basée sur les données 
                  et notre engagement envers l'excellence nous ont permis de devenir l'un des partenaires 
                  de confiance dans le domaine du marketing digital.
                </p>
                <p>
                  Aujourd'hui, notre équipe de passionnés continue d'innover et de repousser les limites 
                  pour offrir à nos clients les meilleures solutions digitales du marché.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-12 text-center">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-700">Années d\'expérience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700">Clients accompagnés</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-700">Experts passionnés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des experts passionnés à votre service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full w-40 h-40 mx-auto mb-4 flex items-center justify-center text-5xl">
                  👤
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment nous pouvons vous aider à atteindre vos objectifs
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </main>
  );
}

