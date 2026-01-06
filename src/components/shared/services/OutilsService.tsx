/**
 * OUTILSSERVICE - Section des outils utilisés
 * Marquee style integration-02 + Catégories style HowItWork
 *
 * Props:
 * - sectionId: ID de la section pour l'ancre
 * - badge: Texte du badge
 * - accentColor: Couleur d'accent (défaut: 'rw-blue')
 * - title: Titre de la section
 * - subtitle: Sous-titre
 * - logos: Liste des logos d'outils [{id, name, image?}]
 * - categories: Liste des catégories [{category, tools[], icon}]
 *
 * Usage:
 * import { OutilsService } from '@/components/shared/services';
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Image, { StaticImageData } from 'next/image';
import Icon from '@/components/ui/Icon';
import Marquee from 'react-fast-marquee';

// ============================================
// TYPES EXPORTÉS
// ============================================
export interface ToolLogo {
  id: number;
  name: string;
  image?: StaticImageData | string;
  alt?: string;
}

export interface ToolCategory {
  category: string;
  tools: string[];
  icon: string;
}

export interface OutilsServiceProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  logos: ToolLogo[];
  categories: ToolCategory[];
}

// ============================================
// COMPOSANT OUTILSSERVICE
// ============================================
const OutilsService = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  logos,
  categories,
}: OutilsServiceProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-1 dark:bg-background-6">
      <div className="main-container">
        <div className="space-y-12 md:space-y-16">
          {/* Header */}
          <div className="text-center space-y-5 max-w-[800px] mx-auto">
            <RevealAnimation delay={0.1}>
              <span className={`badge ${colors.badge}`}>{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>{title}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>{subtitle}</p>
            </RevealAnimation>
          </div>

          {/* Marquee logos - style integration-02 */}
          <RevealAnimation delay={0.4} instant>
            <div className="relative max-w-[1128px] mx-auto">
              {/* Fade gradients */}
              <div className="absolute left-0 top-0 h-[100px] w-[15%] md:w-[20%] bg-gradient-to-r from-background-1 to-transparent dark:from-background-6 z-40" />
              <div className="absolute right-0 top-0 h-[100px] w-[15%] md:w-[20%] bg-gradient-to-l from-background-1 to-transparent dark:from-background-6 z-40" />

              <Marquee autoFill speed={40}>
                <div className="flex items-center justify-center">
                  {logos.map((logo) => (
                    <figure
                      key={logo.id}
                      className="size-[70px] md:size-[100px] bg-white dark:bg-background-7 rounded-full flex items-center justify-center ml-8"
                    >
                      {logo.image ? (
                        <Image
                          src={logo.image}
                          alt={logo.alt || `Logo ${logo.name}`}
                          width={48}
                          height={48}
                          loading="lazy"
                          className="size-10 md:size-12 object-contain"
                        />
                      ) : (
                        <div className="size-10 md:size-12 rounded-full bg-background-2 dark:bg-background-6 flex items-center justify-center border-2 border-dashed border-stroke-1 dark:border-stroke-5">
                          <svg className="w-5 h-5 text-secondary/30 dark:text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </figure>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>

          {/* Categories - style HowItWork (4 colonnes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start gap-y-6 sm:gap-x-5 md:gap-x-8 relative">
            {/* Ligne pointillée horizontale (desktop uniquement) */}
            <RevealAnimation delay={0.5} direction="left">
              <div className="w-[calc(100%-20%)] hidden lg:block absolute top-[22%] left-[10%] z-0 h-[1px] bg-[repeating-linear-gradient(to_right,_rgba(0,0,0,0.2)_0_4px,_transparent_4px_8px)] dark:bg-[repeating-linear-gradient(to_right,_rgba(255,255,255,0.2)_0_4px,_transparent_4px_8px)]" />
            </RevealAnimation>

            {categories.map((item, index) => (
              <RevealAnimation key={`${item.category}-${index}`} delay={0.5 + index * 0.1} direction="left">
                <div className="text-center flex flex-col items-center justify-center space-y-4 py-6 px-4">
                  <div className="size-14 md:size-16 bg-white dark:bg-background-7 border-8 border-background-2 dark:border-background-5 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} className={`w-6 h-6 md:w-7 md:h-7 ${colors.text}`} aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-6">{item.category}</h3>
                    <ul className="space-y-0.5">
                      {item.tools.map((tool, toolIndex) => (
                        <li key={toolIndex} className="text-tagline-1 text-secondary/70 dark:text-accent/70">
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

OutilsService.displayName = 'OutilsService';
export default OutilsService;
