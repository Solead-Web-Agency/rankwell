/**
 * HEROHOMEPAGE - Hero spécifique à la page d'accueil
 * Design: Plein écran avec background image et CTAs centrés
 *
 * Props: Toutes les données textuelles viennent de data.ts
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

export interface HeroHomepageProps {
  badge: string;
  title: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  trustIndicator: {
    main: string;
    sub: string;
    href?: string;
  };
}

const HeroHomepage = ({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  trustIndicator,
}: HeroHomepageProps) => {
  return (
    <section className="relative h-screen flex flex-col justify-center">
      {/* Background image avec overlay pour éclaircir */}
      <div
        className="absolute inset-0 bg-[url('/images/pages/homepage/illustration-expertises.png')] bg-bottom bg-no-repeat bg-contain opacity-30"
        aria-hidden="true"
      />
      <div className="main-container relative z-10">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="flex flex-col items-center">
            <RevealAnimation delay={0.1}>
              <span className="badge bg-rw-cyan-light text-rw-cyan mb-3 md:mb-4 lg:mb-5">{badge}</span>
            </RevealAnimation>
            <div className="space-y-3 md:mx-10 md:space-y-4 lg:mx-0">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[842px] text-center">{title}</h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-center max-w-[700px] mx-auto">{description}</p>
              </RevealAnimation>
            </div>
            <ul className="flex w-full flex-col items-center justify-center gap-y-3 pt-8 text-center sm:w-auto sm:flex-row md:gap-x-4 md:pt-10 lg:pt-12 xl:pt-14">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href={primaryCta.href}
                    className="btn btn-primary hover:btn-secondary btn-w btn-xl dark:hover:btn-white w-[90%] sm:w-auto">
                    {primaryCta.text}
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href={secondaryCta.href}
                    className="btn btn-white hover:btn-primary btn-xl dark:btn-transparent w-[90%] sm:w-auto">
                    {secondaryCta.text}
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>

          {/* Trust Indicators - Google Reviews */}
          <div className="flex items-center justify-center gap-4 max-[375px]:flex-col">
            <RevealAnimation delay={0.6} direction="right" offset={50}>
              {trustIndicator.href ? (
                <a
                  href={trustIndicator.href}
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
                  <div>
                    <span className="text-tagline-2 font-medium text-secondary dark:text-accent">{trustIndicator.main}</span>
                    <span className="text-tagline-3 text-rw-blue group-hover:underline ml-2">{trustIndicator.sub}</span>
                  </div>
                </a>
              ) : (
                <div className="text-center">
                  <p className="text-tagline-2 text-secondary dark:text-accent block font-medium">{trustIndicator.main}</p>
                  <p className="text-tagline-3">{trustIndicator.sub}</p>
                </div>
              )}
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroHomepage.displayName = 'HeroHomepage';
export default HeroHomepage;
