/**
 * FEATURESGRID - Grille de features avec images (basé sur homepage-09/Features.tsx)
 *
 * Structure EXACTE du thème original avec possibilité de customiser le contenu.
 */

'use client';

import Image, { StaticImageData } from 'next/image';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import { ReactNode } from 'react';

// ============================================
// TYPES
// ============================================
export interface FeatureItem {
  id: number;
  image?: StaticImageData | string;
  alt?: string;
  title: string;
  desc: string;
}

export interface FeaturesGridProps {
  sectionId?: string;
  badge?: string;
  badgeVariant?: 'white' | 'colored';
  title?: ReactNode;
  subtitle?: string;
  items: FeatureItem[];
  accentColor?: RwColor;
  /** Nombre de colonnes sur desktop (2 ou 3). Par défaut: auto selon nombre d'items */
  columns?: 2 | 3;
  /** Fond blanc au lieu de gris */
  bgWhite?: boolean;
}

const FeaturesGrid = ({
  sectionId,
  badge,
  badgeVariant = 'white',
  title,
  subtitle,
  items,
  accentColor = 'rw-blue',
  columns,
  bgWhite = false,
}: FeaturesGridProps) => {
  const colors = colorVariants[accentColor];
  const badgeClasses = badgeVariant === 'white' ? 'badge-white' : colors.badge;

  // Déterminer le nombre de colonnes
  // Logique auto si columns n'est pas spécifié:
  // - 3 items → 3 colonnes (1 ligne)
  // - 4 items → 2 colonnes (2x2)
  // - 5 items → 3 colonnes (3+2 centrés)
  // - 6 items → 3 colonnes (3x2)
  // - 8 items → 3 colonnes (3+3+2 centrés)
  const getAutoColumns = (count: number): 2 | 3 => {
    if (count === 4) return 2;
    return 3; // 3, 5, 6, 8 → tous en 3 colonnes
  };
  const numCols = columns ?? getAutoColumns(items.length);
  const colSpanClass = numCols === 2 ? 'lg:col-span-6' : 'lg:col-span-4';

  return (
    <section
      id={sectionId}
      className={`py-16 md:py-20 lg:py-[90px] xl:py-[100px] ${bgWhite ? 'bg-white dark:bg-background-8' : 'bg-background-3 dark:bg-background-7'}`}
      aria-label="Features"
    >
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          {/* feature heading */}
          <div className="space-y-5 flex flex-col items-center justify-center">
            {badge && (
              <RevealAnimation delay={0.1}>
                <span className={`badge ${badgeClasses}`}>{badge}</span>
              </RevealAnimation>
            )}

            {title && (
              <RevealAnimation delay={0.2}>
                <h2 className="max-w-[578px] text-heading-4 md:text-heading-2 text-center">
                  {title}
                </h2>
              </RevealAnimation>
            )}

            {subtitle && (
              <RevealAnimation delay={0.25}>
                <p className="max-w-[600px] text-center text-secondary/80 dark:text-accent/80">
                  {subtitle}
                </p>
              </RevealAnimation>
            )}
          </div>

          {/* feature cards */}
          {/* Grille adaptative selon numCols (2 ou 3 colonnes sur desktop) */}
          {/* items-start pour aligner les cartes par le haut */}
          <div className={`grid grid-cols-12 items-start sm:gap-x-8 gap-y-12 md:gap-y-[70px] ${
            numCols === 2 ? 'max-w-[900px] mx-auto' : ''
          }`}>
            {items.map((feature, idx) => {
              // Calcul de la classe de décalage pour centrer les derniers items si nécessaire
              let offsetClass = '';
              if (numCols === 3) {
                // Mode 3 colonnes : centrer les items de la dernière ligne incomplète
                const remainder = items.length % 3;
                const lastRowStartIdx = items.length - remainder;

                if (remainder === 2 && idx === lastRowStartIdx) {
                  // 2 items sur dernière ligne (5, 8 items) : décaler le premier de 2 colonnes
                  offsetClass = 'lg:col-start-3';
                } else if (remainder === 1 && idx === lastRowStartIdx) {
                  // 1 item sur dernière ligne : centrer (col-start-5 pour centrer sur 12 cols)
                  offsetClass = 'lg:col-start-5';
                }
              }
              // Mode 2 colonnes : pas de centrage nécessaire (grille naturelle)

              return (
                <RevealAnimation key={feature.id} delay={0.3 + idx * 0.1}>
                  <div
                    className={`flex flex-col ${colSpanClass} col-span-12 md:col-span-6 ${offsetClass}`}
                  >
                    {/* card image - hauteur fixe */}
                    <div className="max-w-[409px] w-full rounded-[20px] bg-white dark:bg-background-6 p-2.5 mb-3">
                      {feature.image ? (
                        <figure className="aspect-[409/300] overflow-hidden rounded-xl">
                          {typeof feature.image === 'string' ? (
                            <img
                              src={feature.image}
                              alt={feature.alt || feature.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <Image
                              src={feature.image}
                              alt={feature.alt || feature.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              width={409}
                              height={300}
                            />
                          )}
                        </figure>
                      ) : (
                        /* Placeholder when no image */
                        <div className="aspect-[409/300] rounded-xl bg-background-2 dark:bg-background-7 flex flex-col items-center justify-center border-2 border-dashed border-stroke-1 dark:border-stroke-5">
                          <svg className="w-12 h-12 text-secondary/30 dark:text-accent/30 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-secondary/40 dark:text-accent/40">Image à ajouter</span>
                        </div>
                      )}
                    </div>
                    {/* card content */}
                    <div className="space-y-1">
                      <h3 className="text-[22px] sm:text-heading-5">{feature.title}</h3>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesGrid.displayName = 'FeaturesGrid';
export default FeaturesGrid;
