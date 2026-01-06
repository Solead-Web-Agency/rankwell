/**
 * HEROSERVICE - Composant Hero générique pour pages services
 *
 * Ce composant est la BASE. Il ne contient aucun contenu par défaut.
 * Le contenu est passé via les props depuis les fichiers data.ts de chaque page.
 *
 * Props:
 * - breadcrumb: Fil d'Ariane [{label, href?}]
 * - title: Titre principal (string ou ReactNode)
 * - description: Description principale
 * - secondaryDescription: Description secondaire (optionnel)
 * - ctaText: Texte du bouton principal
 * - ctaHref: Lien du bouton principal
 * - secondaryCta: Bouton secondaire {text, href}
 * - image: Chemin de l'image (optionnel)
 * - imageAlt: Texte alternatif de l'image
 * - visual: Composant visuel custom (ReactNode) - prioritaire sur image
 * - showTrustIndicator: Affiche l'indicateur de confiance (défaut: true)
 * - accentColor: Couleur d'accent pour le CTA (défaut: 'rw-blue')
 *
 * Usage:
 * import { HeroService } from '@/components/shared/services';
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import { trustIndicator as defaultTrustIndicator } from '@/lib/constants';

// ============================================
// TYPES EXPORTÉS
// ============================================
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TrustIndicatorData {
  main: string;
  sub: string;
  href?: string;
}

export interface HeroServiceProps {
  breadcrumb: BreadcrumbItem[];
  title: string | ReactNode;
  description: string;
  secondaryDescription?: string;
  ctaText: string;
  ctaHref: string;
  secondaryCta?: { text: string; href: string };
  image?: string;
  imageAlt?: string;
  visual?: ReactNode;
  showTrustIndicator?: boolean;
  trustIndicator?: TrustIndicatorData;
  accentColor?: RwColor;
  locale?: 'fr' | 'en';
}

// ============================================
// COMPOSANT HEROSERVICE
// ============================================
const HeroService = ({
  breadcrumb,
  title,
  description,
  secondaryDescription,
  ctaText,
  ctaHref,
  secondaryCta,
  image,
  imageAlt,
  visual,
  showTrustIndicator = true,
  trustIndicator,
  accentColor = 'rw-blue',
  locale = 'fr',
}: HeroServiceProps) => {
  const colors = colorVariants[accentColor];
  // Utilise les valeurs par défaut selon la locale si trustIndicator n'est pas fourni
  const trust = trustIndicator || defaultTrustIndicator[locale];

  // Rendu du visuel (priorité: visual custom > image > placeholder)
  const renderVisual = () => {
    if (visual) return visual;

    if (image) {
      return (
        <Image
          src={image}
          alt={imageAlt || 'Illustration'}
          width={520}
          height={400}
          className="w-full h-auto rounded-2xl"
        />
      );
    }

    // Placeholder
    return (
      <div className="aspect-[520/400] rounded-2xl bg-background-2 dark:bg-background-6 flex flex-col items-center justify-center border-2 border-dashed border-stroke-1 dark:border-stroke-5">
        <svg className="w-16 h-16 text-secondary/30 dark:text-accent/30 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-sm text-secondary/40 dark:text-accent/40">Image à ajouter</span>
      </div>
    );
  };

  return (
    <section className="pt-36 lg:pt-[150px] md:pt-[180px] pb-16 md:pb-20">
      <div className="main-container">
        {/* Breadcrumb */}
        <RevealAnimation delay={0.1}>
          <div className="mb-8 md:mb-10">
            <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
              {breadcrumb.map((item, index) => (
                <span key={`${item.label}-${index}`}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`${colors.hoverText} transition-colors duration-300`}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-secondary dark:text-accent">{item.label}</span>
                  )}
                  {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
                </span>
              ))}
            </span>
          </div>
        </RevealAnimation>

        <div className="flex flex-col lg:flex-row justify-start lg:justify-between gap-y-12 items-center">
          {/* Left content */}
          <div className="space-y-8 lg:max-w-[50%]">
            <div className="text-center lg:text-left">
              <div className="space-y-4 lg:space-y-5">
                <RevealAnimation delay={0.2}>
                  <h1 className="lg:max-w-[600px]">
                    {title}
                  </h1>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="lg:max-w-[500px] text-lg">
                    {description}
                  </p>
                </RevealAnimation>
                {secondaryDescription && (
                  <RevealAnimation delay={0.35}>
                    <p className="lg:max-w-[500px] text-secondary/70 dark:text-accent/70">
                      {secondaryDescription}
                    </p>
                  </RevealAnimation>
                )}
              </div>
              <RevealAnimation delay={0.4}>
                <div className="mt-10 lg:mt-12 flex flex-wrap gap-4">
                  <LinkButton
                    href={ctaHref}
                    className={`btn btn-md md:btn-xl ${colors.bg} text-white hover:opacity-90 w-[90%] md:w-auto`}>
                    {ctaText}
                  </LinkButton>
                  {secondaryCta && (
                    <LinkButton
                      href={secondaryCta.href}
                      className="btn btn-md md:btn-xl btn-secondary dark:btn-white-dark w-[90%] md:w-auto">
                      {secondaryCta.text}
                    </LinkButton>
                  )}
                </div>
              </RevealAnimation>
            </div>

            {/* Divider */}
            {showTrustIndicator && (
              <div className="lg:max-w-[300px] w-full">
                <RevealAnimation delay={0.5}>
                  <div className="border-t border-stroke-2 dark:border-stroke-6" />
                </RevealAnimation>
              </div>
            )}

            {/* Trust indicator - Google Reviews */}
            {showTrustIndicator && (
              <RevealAnimation delay={0.5}>
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                  {trust.href ? (
                    <a
                      href={trust.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      {/* Logo Google "G" */}
                      <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      {/* Étoiles Google */}
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div>
                        <p className="text-tagline-2 font-medium text-secondary dark:text-accent">{trust.main}</p>
                        <p className={`text-tagline-3 ${colors.text} group-hover:underline`}>{trust.sub}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div>
                        <p className="text-tagline-2 font-medium text-secondary dark:text-accent">{trust.main}</p>
                        <p className="text-tagline-3 text-secondary/60 dark:text-accent/60">{trust.sub}</p>
                      </div>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            )}
          </div>

          {/* Right: Visual */}
          <RevealAnimation delay={0.5} duration={1.5} direction="right" offset={80}>
            <div className="w-full max-w-[400px] lg:max-w-[480px] xl:max-w-[520px]">
              {renderVisual()}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

HeroService.displayName = 'HeroService';
export default HeroService;
