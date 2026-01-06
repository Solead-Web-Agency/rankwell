/**
 * CONSTANTS - Données globales réutilisables
 * Centralise les informations qui apparaissent à plusieurs endroits du site
 */

// ============================================
// GOOGLE REVIEWS
// ============================================
export const googleReviews = {
  rating: 4.7,
  maxRating: 5,
  reviewsUrl: 'https://www.google.com/search?sa=X&sca_esv=1cf06cdd23137a81&q=RANKWELL+FRANCE+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDIwMDIzBGIzExNTcwNTS7MNjIyvGEWCHP28w109fBTcgCxnVwXHssziRaxYhQHq9gl4SAAAAA&rldimm=8200261026644570596&tbm=lcl&hl=fr-FR&ved=2ahUKEwjXkdHK1eeRAxWVUKQEHclQAqAQ9fQKegQIVBAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews',
  // Textes par langue
  labels: {
    fr: {
      rating: '4,7/5 sur Google',
      cta: 'Voir les avis',
    },
    en: {
      rating: '4.7/5 on Google',
      cta: 'See reviews',
    },
  },
};

// ============================================
// TRUST INDICATOR (pour les Hero sections)
// ============================================
export const trustIndicator = {
  fr: {
    main: '4,7/5 sur Google',
    sub: 'Voir les avis',
    href: googleReviews.reviewsUrl,
  },
  en: {
    main: '4.7/5 on Google',
    sub: 'See reviews',
    href: googleReviews.reviewsUrl,
  },
};

// ============================================
// COMPANY INFO
// ============================================
export const companyInfo = {
  name: 'Rankwell',
  foundedYear: 2017,
  clientsCount: 350,
  satisfactionRate: 99,
  expertiseYears: 8,
};
