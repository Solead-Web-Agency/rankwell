/**
 * HEROAGENCE - Hero centré avec fond pattern pour pages Agence
 * Basé sur homepage-11/Hero.tsx du thème
 * Design: Centré avec image de fond world map pattern
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Link from 'next/link';
import Image from 'next/image';
import heroBgPattern from '@public/images/shared/hero-bg-pattern.svg';
import heroBgPatternDark from '@public/images/shared/hero-bg-pattern-dark.svg';
import { trustIndicator as defaultTrustIndicator } from '@/lib/constants';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface TrustIndicatorData {
  main: string;
  sub: string;
  href?: string;
}

export interface HeroAgenceProps {
  breadcrumb?: BreadcrumbItem[];
  badge?: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  showTrustIndicator?: boolean;
  trustIndicator?: TrustIndicatorData;
  locale?: 'fr' | 'en';
}

const HeroAgence = ({
  breadcrumb,
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  showTrustIndicator = true,
  trustIndicator,
  locale = 'fr',
}: HeroAgenceProps) => {
  const trust = trustIndicator || defaultTrustIndicator[locale];
  return (
    <section className="relative pt-[150px] lg:pt-[220px] pb-[80px] lg:pb-[100px] overflow-hidden" aria-label="Hero section">
      {/* Background pattern */}
      <RevealAnimation delay={0.2} duration={0.4} useSpring={true} offset={0}>
        <div className="absolute top-[10%] lg:top-[13%] 2xl:-top-5 z-[1] left-1/2 -translate-x-1/2 w-full h-full">
          <Image src={heroBgPattern} alt="" className="block dark:hidden w-full" priority />
          <Image src={heroBgPatternDark} alt="" className="hidden dark:block w-full" priority />
        </div>
      </RevealAnimation>

      <div className="main-container relative z-10">
        {/* Breadcrumb - aligné à gauche comme HeroService */}
        {breadcrumb && breadcrumb.length > 0 && (
          <RevealAnimation delay={0.05}>
            <div className="mb-8 md:mb-10">
              <span className="text-tagline-1 text-secondary/60 dark:text-accent/60">
                {breadcrumb.map((item, index) => (
                  <span key={`${item.label}-${index}`}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-rw-blue transition-colors duration-300">
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
        )}

        <div className="flex flex-col items-center justify-center">
          {/* Badge */}
          {badge && (
            <RevealAnimation delay={0.1}>
              <span className="opacity-0 badge bg-rw-blue-light text-rw-blue">{badge}</span>
            </RevealAnimation>
          )}

          {/* Title & Description */}
          <div className="max-w-6xl mt-5 mb-10 md:mb-14 space-y-4 w-full mx-auto text-center">
            <RevealAnimation delay={0.2}>
              <h1 className="opacity-0">{title}</h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="opacity-0 max-w-[652px] mx-auto">
                {description}
              </p>
            </RevealAnimation>
          </div>

          {/* CTA Buttons */}
          <ul className="hero-buttons flex flex-col md:flex-row gap-4 max-md:w-full">
            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <li className="max-md:w-[90%] md:w-auto max-md:mx-auto">
                <LinkButton
                  href={primaryCta.href}
                  className="btn btn-lg md:btn-xl bg-rw-blue text-white hover:bg-rw-blue/90 w-full md:w-auto"
                  aria-label={primaryCta.text}>
                  {primaryCta.text}
                </LinkButton>
              </li>
            </RevealAnimation>
            {secondaryCta && (
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="max-md:w-[90%] max-md:mx-auto md:w-auto">
                  <LinkButton
                    href={secondaryCta.href}
                    className="btn btn-lg md:btn-xl btn-white hover:bg-rw-blue hover:text-white hover:border-rw-blue dark:btn-white-dark w-full md:w-auto"
                    aria-label={secondaryCta.text}>
                    {secondaryCta.text}
                  </LinkButton>
                </li>
              </RevealAnimation>
            )}
          </ul>

          {/* Trust Indicator - Google Reviews */}
          {showTrustIndicator && (
            <RevealAnimation delay={0.6}>
              <div className="flex items-center justify-center mt-10 md:mt-12">
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
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-center md:text-left">
                      <span className="text-tagline-2 font-medium text-secondary dark:text-accent">{trust.main}</span>
                      <span className="text-tagline-3 text-rw-blue group-hover:underline ml-2">{trust.sub}</span>
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
                      <span className="text-tagline-2 font-medium text-secondary dark:text-accent">{trust.main}</span>
                      <span className="text-tagline-3 text-secondary/60 dark:text-accent/60 ml-2">{trust.sub}</span>
                    </div>
                  </div>
                )}
              </div>
            </RevealAnimation>
          )}
        </div>
      </div>
    </section>
  );
};

HeroAgence.displayName = 'HeroAgence';
export default HeroAgence;
