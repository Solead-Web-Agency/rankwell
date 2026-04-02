'use client';

/**
 * GUIDE TOC - Table des matieres inline
 *
 * Affiche dans le flux du contenu (pas en sidebar comme le glossaire).
 * Style "Dans cet article" avec design editorial Rankwell.
 */

import Link from 'next/link';

export interface GuideTocItem {
  id: string;
  label: string;
}

interface GuideTocProps {
  items: GuideTocItem[];
  title: string;
}

export default function GuideToc({ items, title }: GuideTocProps) {
  return (
    <nav
      aria-label={title}
      className="my-10 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-2 dark:border-stroke-6"
    >
      <div className="px-6 py-5 border-b border-stroke-2 dark:border-stroke-6">
        <p className="text-tagline-2 font-semibold uppercase tracking-widest text-secondary/50 dark:text-white/50 flex items-center gap-2.5">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
          </svg>
          {title}
        </p>
      </div>
      <ul className="px-4 py-3">
        {items.map((item, index) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="group flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all duration-200 hover:bg-white dark:hover:bg-background-5"
            >
              <span className="w-6 h-6 rounded-md bg-background-3 dark:bg-background-7 flex items-center justify-center group-hover:bg-rw-blue group-hover:text-white transition-colors duration-200 text-xs font-medium text-secondary/50 dark:text-white/50 shrink-0">
                {index + 1}
              </span>
              <span className="text-tagline-1 text-secondary/70 dark:text-white/70 group-hover:text-secondary dark:group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
