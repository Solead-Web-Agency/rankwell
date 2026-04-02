/**
 * GUIDE SOURCES - Section sources avec liens externes
 *
 * Style editorial : liste compacte avec organisme, titre, annee, lien.
 * Liens en nofollow noopener noreferrer (SEO best practice pour sources externes).
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import type { GuideSource } from '@/data/guides/types';

interface GuideSourcesProps {
  sources: GuideSource[];
  title: string;
}

export default function GuideSources({ sources, title }: GuideSourcesProps) {
  return (
    <div>
      <RevealAnimation>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-rw-blue" />
          <h2 className="text-tagline-2 font-semibold uppercase tracking-widest text-rw-blue">
            {title}
          </h2>
        </div>
      </RevealAnimation>

      <RevealAnimation delay={0.05}>
        <div className="rounded-2xl bg-background-1 dark:bg-background-6 divide-y divide-stroke-2 dark:divide-stroke-6">
          {sources.map((source, i) => (
            <div key={i} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <p className="text-tagline-2 font-semibold text-secondary dark:text-white">
                  {source.organisme}
                </p>
                <p className="text-tagline-1 text-secondary/60 dark:text-white/60 truncate">
                  {source.titre} ({source.annee}) [{source.langue}]
                </p>
              </div>
              <a
                href={source.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="shrink-0 text-tagline-2 font-medium text-rw-blue hover:underline transition-colors"
              >
                Consulter
              </a>
            </div>
          ))}
        </div>
      </RevealAnimation>
    </div>
  );
}
