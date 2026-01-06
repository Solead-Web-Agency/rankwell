/**
 * TRUSTBANNER - Bandeau horizontal de confiance
 * Composant global utilisable sur toutes les pages
 * Supporte i18n via prop locale
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { type Locale } from '@/lib/i18n';

interface TrustBannerProps {
  locale?: Locale;
}

const trustItemsByLocale = {
  fr: [
    { id: 1, text: 'Reporting temps réel via Rankwell One' },
    { id: 2, text: 'Équipe dédiée par projet' },
    { id: 3, text: 'Certifiés Google & Meta Partner' },
    { id: 4, text: 'Accompagnement stratégique 360°' },
  ],
  en: [
    { id: 1, text: 'Real-time reporting via Rankwell One' },
    { id: 2, text: 'Dedicated team per project' },
    { id: 3, text: 'Google & Meta Partner certified' },
    { id: 4, text: '360° strategic support' },
  ],
};

const TrustBanner = ({ locale = 'fr' }: TrustBannerProps) => {
  const trustItems = trustItemsByLocale[locale];

  return (
    <RevealAnimation delay={0.1}>
      <section className="bg-secondary dark:bg-background-6 py-8 md:py-10">
        <div className="main-container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
            {trustItems.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-rw-coral text-white">
                  <svg className="size-3" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-tagline-2 text-white font-normal">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

TrustBanner.displayName = 'TrustBanner';
export default TrustBanner;
