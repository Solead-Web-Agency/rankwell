'use client';

/**
 * GLOSSAIRETOC — Table des matières sticky pour les pages glossaire
 *
 * Réplique visuelle du TOC d'IntroService, composant indépendant.
 * Sticky avec CSS pur, pas de dépendance GSAP/RevealAnimation.
 */

import Link from 'next/link';

export interface GlossaireTocItem {
  id: string;
  label: string;
}

interface GlossaireTocProps {
  items: GlossaireTocItem[];
  /** Label du titre ("Sur cette page" / "On this page") */
  title: string;
  /** Lien retour vers l'index glossaire */
  backLink: {
    href: string;
    label: string;
  };
}

export default function GlossaireToc({ items, title, backLink }: GlossaireTocProps) {
  return (
    <div className="sticky top-32">
      {/* Carte TOC */}
      <div className="rounded-[24px] border-[6px] border-white dark:border-background-9 bg-background-1 dark:bg-background-6">
        <div className="p-6 lg:p-8">
          <p className="text-heading-6 font-normal mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-secondary dark:bg-accent rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white dark:text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
                />
              </svg>
            </span>
            {title}
          </p>

          <nav aria-label={title}>
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="group flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-background-5"
                  >
                    <span className="w-6 h-6 rounded-md bg-background-2 dark:bg-background-7 flex items-center justify-center group-hover:bg-rw-blue group-hover:text-white transition-colors duration-300 text-xs font-medium text-secondary/60 dark:text-accent/60">
                      {index + 1}
                    </span>
                    <span className="text-secondary/70 dark:text-accent/70 group-hover:text-secondary dark:group-hover:text-accent transition-colors duration-300">
                      {item.label}
                    </span>
                    <svg
                      className="ml-auto w-4 h-4 text-secondary/30 dark:text-accent/30 group-hover:text-rw-blue group-hover:translate-x-1 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Lien retour glossaire */}
      <Link
        href={backLink.href}
        className="mt-4 flex items-center gap-3 rounded-xl bg-background-1 px-5 py-4 text-tagline-1 text-secondary/50 transition-all duration-200 hover:text-rw-blue dark:bg-background-6 dark:text-white/50 dark:hover:text-rw-blue"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        {backLink.label}
      </Link>
    </div>
  );
}
