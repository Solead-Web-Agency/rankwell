export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Dubois',
      position: 'CEO, TechStart',
      content: 'RankWell a complètement transformé notre stratégie digitale. Nos ventes ont explosé de 300% en seulement 6 mois. Une équipe exceptionnelle !',
      rating: 5,
      avatar: '👩‍💼',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Jean Martin',
      position: 'Directeur Marketing, Innovation Corp',
      content: 'Professionnels, réactifs et surtout efficaces. Les résultats ont dépassé toutes nos attentes. Je recommande les yeux fermés.',
      rating: 5,
      avatar: '👨‍💼',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Sophie Lefebvre',
      position: 'Fondatrice, EcoShop',
      content: 'Leur expertise SEO est incomparable. Notre visibilité a explosé et notre CA a triplé. Un investissement qui en vaut vraiment la peine !',
      rating: 5,
      avatar: '👩‍🦰',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 px-4 py-2 rounded-full text-sm font-semibold text-primary-700 mb-4">
            Témoignages
          </div>
          <h2 className="section-title">
            Ils nous font <span className="gradient-text">confiance</span>
          </h2>
          <p className="section-subtitle">
            Découvrez ce que nos clients disent de notre travail
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card p-8 group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-slate-700 mb-8 leading-relaxed text-lg italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-2xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
