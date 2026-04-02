/**
 * PAGEHERO - Hero simple avec breadcrumb et H1
 * Pour les pages internes (contact, mentions légales, glossaire, secteurs, etc.)
 *
 * Breadcrumb aligné à gauche (même niveau que le contenu main-container)
 * H1 centré
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
        {/* Breadcrumb — aligné à gauche */}
        <RevealAnimation delay={0.1}>
          <nav aria-label="Breadcrumb" className="mb-8 md:mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 text-tagline-1 text-secondary/60 dark:text-accent/60">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-1.5">
                  {index > 0 && <span className="mx-1.5 select-none" aria-hidden="true">/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors duration-300 hover:text-rw-blue"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-secondary dark:text-accent">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </RevealAnimation>

        {/* H1 — centré */}
        <div className="text-center pb-14 lg:pb-[72px]">
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
