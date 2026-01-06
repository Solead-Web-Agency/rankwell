/**
 * PAGEHERO - Hero simple avec breadcrumb et H1
 * Pour les pages internes (contact, mentions légales, etc.)
 */

import Link from 'next/link';
import RevealAnimation from '@/components/animation/RevealAnimation';

// ============================================
// TYPES
// ============================================
export interface PageHeroBreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  breadcrumb: PageHeroBreadcrumbItem[];
  title: string;
}

// ============================================
// COMPOSANT
// ============================================
const PageHero = ({ breadcrumb, title }: PageHeroProps) => {
  return (
    <section
      className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32"
      aria-label="Page hero section"
    >
      <div className="main-container">
        {/* Hero content */}
        <div className="text-center space-y-2 pb-14 lg:pb-[72px]">
          <RevealAnimation delay={0.1}>
            <span className="hero-badge text-tagline-1 inline-block text-secondary dark:text-accent">
              {breadcrumb.map((item, index) => (
                <span key={index}>
                  {index > 0 && <span className="mx-2">-</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </span>
              ))}
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="font-normal lg:text-heading-2">{title}</h1>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

PageHero.displayName = 'PageHero';
export default PageHero;
