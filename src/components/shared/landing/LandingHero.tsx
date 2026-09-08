/**
 * LANDINGHERO - Hero orienté conversion
 *
 * Badge, titre, promesse, 3 bénéfices, CTA modale + lien d'appel,
 * preuve sociale (note Google + chiffre clé), visuel à droite.
 * Pas de fil d'Ariane : rien qui invite à quitter la page.
 */

import Image from 'next/image';
import { ReactNode } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import { trustIndicator as defaultTrustIndicator } from '@/lib/constants';
import LandingCtaButton from './LandingCtaButton';
import PhoneReveal from './PhoneReveal';

export interface LandingHeroProps {
  badge: string;
  title: string | ReactNode;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaSubtext?: string;
  phoneLabel: string;
  phoneHref: string;
  /** Texte du bouton qui révèle le numéro */
  phoneRevealText?: string;
  image?: string;
  imageAlt?: string;
  socialProof?: string;
  accentColor?: RwColor;
}

const GoogleStars = () => (
  <div className="flex items-center gap-2">
    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
    <div className="flex gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const LandingHero = ({
  badge,
  title,
  description,
  benefits,
  ctaText,
  ctaSubtext,
  phoneLabel,
  phoneHref,
  phoneRevealText,
  image,
  imageAlt,
  socialProof,
  accentColor = 'rw-cyan',
}: LandingHeroProps) => {
  const colors = colorVariants[accentColor];
  const trust = defaultTrustIndicator.fr;

  return (
    <section className="pt-12 md:pt-16 lg:pt-20 pb-14 md:pb-20">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row justify-between gap-y-12 gap-x-10 items-center">
          {/* Colonne texte */}
          <div className="space-y-8 lg:max-w-[54%] text-center lg:text-left">
            <div className="space-y-4 lg:space-y-5">
              <RevealAnimation delay={0.1}>
                <span className={`badge ${colors.badge}`}>{badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h1 className="lg:max-w-[640px]">{title}</h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="lg:max-w-[540px] text-lg mx-auto lg:mx-0">{description}</p>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.35}>
              <ul className="space-y-2.5 inline-flex flex-col items-start mx-auto lg:mx-0">
                {benefits.map((benefit, index) => (
                  <li key={`${benefit}-${index}`} className="flex items-start gap-3 text-left">
                    <span className={`mt-0.5 size-5 shrink-0 rounded-full ${colors.bg} flex items-center justify-center`}>
                      <Icon name="Check" className="size-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-tagline-1 text-secondary dark:text-accent">{benefit}</span>
                  </li>
                ))}
              </ul>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                  <LandingCtaButton
                    source="hero"
                    className={`btn-md md:btn-xl ${colors.bg} text-white hover:opacity-90 w-[90%] sm:w-auto`}
                  >
                    {ctaText}
                  </LandingCtaButton>
                  <PhoneReveal
                    phoneHref={phoneHref}
                    phoneLabel={phoneLabel}
                    revealText={phoneRevealText}
                    source="hero"
                    variant="inline"
                    accentColor={accentColor}
                  />
                </div>
                {ctaSubtext && (
                  <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">{ctaSubtext}</p>
                )}
              </div>
            </RevealAnimation>

            {/* Preuve sociale */}
            <RevealAnimation delay={0.5}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start pt-2 border-t border-stroke-2 dark:border-stroke-6">
                <a
                  href={trust.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group mt-5"
                >
                  <GoogleStars />
                  <span className="text-tagline-2 font-medium text-secondary dark:text-accent group-hover:underline">
                    {trust.main}
                  </span>
                </a>
                {socialProof && (
                  <span className="flex items-center gap-2 mt-5 text-tagline-2 text-secondary/70 dark:text-accent/70">
                    <Icon name="Users" className={`size-4 ${colors.text}`} />
                    {socialProof}
                  </span>
                )}
              </div>
            </RevealAnimation>
          </div>

          {/* Visuel */}
          {image && (
            <RevealAnimation delay={0.5} duration={1.2} direction="right" offset={80}>
              <div className="w-full max-w-[420px] lg:max-w-[500px] xl:max-w-[560px]">
                <Image
                  src={image}
                  alt={imageAlt || 'Illustration'}
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                  priority
                  unoptimized
                />
              </div>
            </RevealAnimation>
          )}
        </div>
      </div>
    </section>
  );
};

LandingHero.displayName = 'LandingHero';
export default LandingHero;
