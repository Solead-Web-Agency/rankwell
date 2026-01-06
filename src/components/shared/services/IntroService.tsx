/**
 * INTROSERVICE - Section d'introduction avec TOC latéral pour pages services
 *
 * Usage: Section après le Hero, explique le contexte du service avec table des matières
 *
 * Props:
 * - badge: Texte du badge
 * - badgeClassName: Classes CSS du badge (couleur)
 * - title: Titre (ReactNode pour permettre les spans colorés)
 * - paragraphs: Tableau de paragraphes (supporte le HTML)
 * - tocItems: Items de la table des matières [{id, label, icon}]
 * - showToc: Afficher la table des matières (défaut: true)
 * - accentColor: Couleur d'accent pour la bordure gauche (ex: 'rw-purple', 'rw-cyan')
 *
 * Usage:
 * import { IntroService } from '@/components/shared/services';
 *
 * <IntroService
 *   badge="Notre service"
 *   badgeClassName="bg-rw-purple-light text-rw-purple"
 *   title={<>Titre <span className="text-rw-purple">coloré</span></>}
 *   paragraphs={['Premier paragraphe', 'Deuxième paragraphe']}
 *   tocItems={[{id: 'section1', label: 'Section 1', icon: 'Award'}]}
 *   accentColor="rw-purple"
 * />
 */

'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import { ReactNode } from 'react';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import { List } from 'lucide-react';

// ============================================
// TYPES
// ============================================
export interface TocItem {
  id: string;
  label: string;
  icon?: string;
}

export interface IntroServiceProps {
  badge: string;
  badgeClassName?: string;
  title: ReactNode;
  paragraphs: string[];
  tocItems?: TocItem[];
  showToc?: boolean;
  /** Couleur d'accent (ex: 'rw-blue', 'rw-cyan', 'rw-purple', 'rw-coral', 'rw-pink') */
  accentColor?: RwColor;
}

const IntroService = ({
  badge,
  badgeClassName,
  title,
  paragraphs,
  tocItems = [],
  showToc = true,
  accentColor = 'rw-blue',
}: IntroServiceProps) => {
  // Récupère les classes depuis le color mapping
  const colors = colorVariants[accentColor];
  const badgeClasses = badgeClassName || colors.badge;
  return (
    <section className="py-16 md:py-20 lg:py-[100px] xl:py-[120px] overflow-hidden bg-white dark:bg-background-7">
      <div className="main-container">
        <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24">

          {/* Left column - Main content */}
          <div className={showToc && tocItems.length > 0 ? 'col-span-12 lg:col-span-7 xl:col-span-8' : 'col-span-12'}>
            <div className="relative">
              {/* Decorative gradient blob */}
              <div
                className="absolute -left-20 -top-10 w-[300px] h-[300px] rounded-full blur-[100px] opacity-30 -z-10 pointer-events-none"
                style={{ background: '#3B82F6' }}
              />

              {/* Badge */}
              <RevealAnimation delay={0.1}>
                <span className={`badge ${badgeClasses} mb-6 inline-block`}>
                  {badge}
                </span>
              </RevealAnimation>

              {/* Title with gradient accent */}
              <RevealAnimation delay={0.2}>
                <h2 className="mb-8 lg:mb-10">
                  {title}
                </h2>
              </RevealAnimation>
            </div>

            {/* Content blocks with left border accent */}
            <div className="space-y-8">
              {paragraphs.map((paragraph, index) => (
                <RevealAnimation key={`para-${index}-${paragraph.substring(0, 30)}`} delay={0.3 + index * 0.1}>
                  <div className={`relative pl-6 border-l-2 ${colors.border}`}>
                    <p
                      className={`text-lg ${index === 0 ? 'lg:text-xl' : ''} leading-relaxed ${index > 0 ? 'text-secondary/80 dark:text-accent/80' : ''}`}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  </div>
                </RevealAnimation>
              ))}
            </div>

          </div>

          {/* Right column - Sticky TOC */}
          {showToc && tocItems.length > 0 && (
            <aside className="col-span-12 lg:col-span-5 xl:col-span-4">
              <RevealAnimation delay={0.3} direction="right" offset={50}>
                <div className="lg:sticky lg:top-32">
                  {/* TOC Card */}
                  <div className="rounded-[24px] border-[6px] border-white dark:border-background-9 bg-background-1 dark:bg-background-6">
                    <div className="p-6 lg:p-8">
                      <p className="text-heading-6 font-normal mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 bg-secondary dark:bg-accent rounded-lg flex items-center justify-center">
                          <List className="w-4 h-4 text-white dark:text-secondary" />
                        </span>
                        Sur cette page
                      </p>

                      <nav>
                        <ul className="space-y-1">
                          {tocItems.map((item, index) => (
                            <li key={item.id}>
                              <Link
                                href={`#${item.id}`}
                                className="group flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-background-5"
                              >
                                <span className={`w-6 h-6 rounded-md bg-background-2 dark:bg-background-7 flex items-center justify-center ${colors.groupHoverBg} group-hover:text-white transition-colors duration-300 text-xs font-medium text-secondary/60 dark:text-accent/60`}>
                                  {index + 1}
                                </span>
                                <span className="text-secondary/70 dark:text-accent/70 group-hover:text-secondary dark:group-hover:text-accent transition-colors duration-300">
                                  {item.label}
                                </span>
                                <svg
                                  className={`ml-auto w-4 h-4 text-secondary/30 dark:text-accent/30 ${colors.groupHoverText} group-hover:translate-x-1 transition-all duration-300`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};

IntroService.displayName = 'IntroService';
export default IntroService;
