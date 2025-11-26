export default function Services() {
  const services = [
    {
      icon: '🎯',
      title: 'SEO & Référencement',
      description: 'Dominez les résultats Google et attirez un trafic qualifié en continu.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📊',
      title: 'Marketing Digital',
      description: 'Des campagnes publicitaires qui convertissent et maximisent votre ROI.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '✨',
      title: 'Création de Contenu',
      description: 'Du contenu percutant qui engage votre audience et génère des leads.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '📈',
      title: 'Analytics & Data',
      description: 'Des insights actionnables pour optimiser vos performances en temps réel.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'Stratégie Digitale',
      description: 'Une feuille de route claire pour atteindre vos objectifs de croissance.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: '💬',
      title: 'Social Media',
      description: 'Construisez une communauté engagée et développez votre notoriété.',
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-sm font-semibold text-primary-700 mb-4">
            Ce qu'on fait de mieux
          </div>
          <h2 className="section-title">
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Des solutions complètes pour transformer votre présence digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card p-8 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 text-primary-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                En savoir plus
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
