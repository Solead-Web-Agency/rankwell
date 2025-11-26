import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-primary-50 to-accent-50">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-4000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              🚀 L'agence qui fait décoller votre business
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
              Boostez votre
              <span className="block gradient-text">visibilité digitale</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transformez votre présence en ligne en machine à générer des clients. 
              Des stratégies digitales qui délivrent des résultats mesurables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Démarrer maintenant →
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                Découvrir nos services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-black gradient-text">250%</div>
                <div className="text-sm text-slate-600">ROI Moyen</div>
              </div>
              <div>
                <div className="text-3xl font-black gradient-text">500+</div>
                <div className="text-sm text-slate-600">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-black gradient-text">95%</div>
                <div className="text-sm text-slate-600">Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-up animation-delay-200">
            <div className="relative">
              {/* Main Card */}
              <div className="card p-8 transform rotate-2">
                <div className="space-y-6">
                  {/* Growth Chart */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Trafic organique</div>
                      <div className="text-3xl font-black text-green-600">+250%</div>
                    </div>
                    <div className="text-green-600">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Conversion Rate */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-primary-50 rounded-xl">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Conversions</div>
                      <div className="text-3xl font-black text-primary-600">+180%</div>
                    </div>
                    <div className="text-primary-600">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Revenue */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-accent-50 rounded-xl">
                    <div>
                      <div className="text-sm text-slate-600 mb-1">Revenus générés</div>
                      <div className="text-3xl font-black text-accent-600">+320%</div>
                    </div>
                    <div className="text-accent-600">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="text-xs text-slate-600">Note moyenne</div>
                    <div className="text-lg font-black">4.9/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
