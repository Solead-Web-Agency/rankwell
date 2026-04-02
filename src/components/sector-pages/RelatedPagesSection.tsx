/**
 * RELATEDPAGESSECTION — Maillage interne (Bloc final de chaque template)
 * Liens vers secteurs proches, projets, CMS, glossaire
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import type { RelatedPages } from '@/types/sector-pages';

interface RelatedPagesSectionProps {
  relatedPages: RelatedPages;
}

const sectionLabels: Record<keyof RelatedPages, string> = {
  secteurs: 'Secteurs associés',
  projets: 'Types de projets',
  cms: 'CMS & plateformes',
  glossaire: 'Glossaire',
};

export default function RelatedPagesSection({ relatedPages }: RelatedPagesSectionProps) {
  const sections = Object.entries(relatedPages).filter(
    ([, links]) => links && links.length > 0
  ) as [keyof RelatedPages, NonNullable<RelatedPages[keyof RelatedPages]>][];

  if (sections.length === 0) return null;

  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <h2 className="text-heading-5 text-secondary dark:text-accent mb-8">À découvrir également</h2>
        </RevealAnimation>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map(([key, links], sectionIndex) => (
            <RevealAnimation key={key} delay={0.1 + sectionIndex * 0.05}>
              <div>
                <h3 className="text-sm font-semibold text-secondary/60 dark:text-accent/60 uppercase tracking-wider mb-3">
                  {sectionLabels[key]}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="text-sm text-secondary/80 dark:text-accent/80 hover:text-rw-blue transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
