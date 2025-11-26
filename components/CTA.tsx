import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white mb-8 border border-white/30">
            ⚡ Offre limitée : Audit gratuit pour les 10 premiers
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Prêt à dominer votre marché ?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-12 leading-relaxed">
            Rejoignez les centaines d'entreprises qui ont transformé leur présence digitale 
            avec RankWell. Votre succès commence maintenant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="group bg-white text-primary-600 px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            >
              Démarrer gratuitement
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/services" 
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full text-lg font-bold border-2 border-white/30 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Découvrir nos offres
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Sans engagement
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Résultats garantis
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Support 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
