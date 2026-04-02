/**
 * GUIDE - Rendu des blocs de contenu
 *
 * Composant serveur qui rend chaque type de bloc (paragraph, heading3, list, table, callout, widget).
 * Utilise les tokens Rankwell (Tailwind) et RevealAnimation pour les animations.
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import type { GuideSectionBlock, TableBlock, CalloutBlock, WidgetBlock } from '@/data/guides/types';
import GuideWidget from './GuideWidget';

// ============================================
// TABLEAU
// ============================================

function GuideTable({ block }: { block: TableBlock }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl bg-background-1 dark:bg-background-6">
      <div className="overflow-x-auto p-1">
        <table className="w-full text-sm">
          {block.caption && <caption className="sr-only">{block.caption}</caption>}
          <thead>
            <tr>
              {block.headers.map((h, i) => (
                <th
                  key={i}
                  className="px-5 py-4 text-left text-tagline-3 font-semibold uppercase tracking-widest text-secondary/45 dark:text-white/40"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className="group">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-5 py-3 first:rounded-l-xl last:rounded-r-xl transition-colors duration-150 group-hover:bg-white dark:group-hover:bg-background-5 ${
                      j === 0
                        ? 'font-medium text-secondary dark:text-white'
                        : 'text-secondary/65 dark:text-white/65'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================
// CALLOUT — Design editorial premium
// ============================================

const CALLOUT_CONFIG: Record<CalloutBlock['variant'], {
  accent: string;
  bg: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
}> = {
  remember: {
    accent: 'from-rw-blue/20 to-rw-blue/5 dark:from-rw-blue/15 dark:to-rw-blue/[0.03]',
    bg: 'bg-gradient-to-br',
    iconBg: 'bg-rw-blue',
    iconColor: 'text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  didyouknow: {
    accent: 'from-rw-cyan/20 to-rw-cyan/5 dark:from-rw-cyan/15 dark:to-rw-cyan/[0.03]',
    bg: 'bg-gradient-to-br',
    iconBg: 'bg-rw-cyan',
    iconColor: 'text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  warning: {
    accent: 'from-rw-coral/25 to-rw-coral/5 dark:from-rw-coral/15 dark:to-rw-coral/[0.03]',
    bg: 'bg-gradient-to-br',
    iconBg: 'bg-rw-coral',
    iconColor: 'text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  checklist: {
    accent: 'from-rw-purple/20 to-rw-purple/5 dark:from-rw-purple/15 dark:to-rw-purple/[0.03]',
    bg: 'bg-gradient-to-br',
    iconBg: 'bg-rw-purple',
    iconColor: 'text-white',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
};

function GuideCallout({ block }: { block: CalloutBlock }) {
  const cfg = CALLOUT_CONFIG[block.variant];
  return (
    <div className={`my-8 relative rounded-2xl ${cfg.bg} ${cfg.accent} overflow-hidden`}>
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")' }} />

      <div className="relative px-6 py-5 flex gap-4">
        {/* Icon badge */}
        <div className={`shrink-0 mt-0.5 w-8 h-8 rounded-xl ${cfg.iconBg} ${cfg.iconColor} flex items-center justify-center shadow-sm`}>
          {cfg.icon}
        </div>

        <div className="min-w-0">
          <p className="text-tagline-2 font-semibold text-secondary dark:text-white mb-1.5 tracking-wide">
            {block.title}
          </p>
          <p className="text-tagline-1 leading-relaxed text-secondary/70 dark:text-white/70">
            {block.content}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================
// RENDU D'UN BLOC INDIVIDUEL
// ============================================

function renderBlock(block: GuideSectionBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <RevealAnimation key={index} delay={index * 0.03}>
          <p
            className="text-tagline-1 text-secondary/75 dark:text-white/75 mb-5 leading-[1.85]"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        </RevealAnimation>
      );

    case 'heading3':
      return (
        <RevealAnimation key={index}>
          <h3 className="text-heading-6 font-semibold text-secondary dark:text-white mt-10 mb-4">
            {block.text}
          </h3>
        </RevealAnimation>
      );

    case 'list':
      return (
        <RevealAnimation key={index}>
          {block.ordered ? (
            <ol className="my-5 space-y-2.5 pl-6 list-decimal">
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="text-tagline-1 text-secondary/75 dark:text-white/75 leading-relaxed pl-2"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ol>
          ) : (
            <ul className="my-5 space-y-2.5 pl-6 list-disc">
              {block.items.map((item, i) => (
                <li
                  key={i}
                  className="text-tagline-1 text-secondary/75 dark:text-white/75 leading-relaxed pl-2"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          )}
        </RevealAnimation>
      );

    case 'table':
      return (
        <RevealAnimation key={index}>
          <GuideTable block={block} />
        </RevealAnimation>
      );

    case 'callout':
      return (
        <RevealAnimation key={index}>
          <GuideCallout block={block} />
        </RevealAnimation>
      );

    case 'widget':
      return (
        <RevealAnimation key={index}>
          <div>
            <GuideWidget block={block} />
          </div>
        </RevealAnimation>
      );
  }
}

// ============================================
// COMPOSANT PRINCIPAL
// ============================================

export default function GuideContentRenderer({ blocks }: { blocks: GuideSectionBlock[] }) {
  return <>{blocks.map((block, i) => renderBlock(block, i))}</>;
}
