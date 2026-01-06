/**
 * TWOPATHSSECTION - Section présentant 2 options/chemins possibles
 *
 * Design sur-mesure pour présenter 2 alternatives après un service.
 * Ex: "Gérer en interne" vs "Continuer ensemble"
 *
 * Props:
 * - sectionId: ID pour l'ancre
 * - badge: Texte du badge
 * - title: Titre de la section
 * - subtitle: Sous-titre explicatif
 * - paths: Tableau de 2 items avec title, description, icon, href?, buttonText?
 * - footerText: Texte de conclusion optionnel
 * - accentColor: Couleur d'accent
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

// ============================================
// TYPES
// ============================================
export interface PathItem {
  id: number | string;
  title: string;
  description: string;
  icon: string;
  href?: string;
  buttonText?: string;
}

export interface TwoPathsSectionProps {
  sectionId: string;
  badge: string;
  title: string;
  subtitle: string;
  paths: PathItem[];
  footerText?: string;
  accentColor?: RwColor;
}

// ============================================
// COMPOSANT
// ============================================
const TwoPathsSection = ({
  sectionId,
  badge,
  title,
  subtitle,
  paths,
  footerText,
  accentColor = 'rw-blue',
}: TwoPathsSectionProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-1 dark:bg-background-8">
      <div className="main-container">
        {/* Header */}
        <div className="text-center space-y-3 mb-12 lg:mb-16">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[600px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[600px] mx-auto">{subtitle}</p>
          </RevealAnimation>
        </div>

        {/* Two Paths Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[900px] mx-auto">
          {paths.map((path, index) => {
            const hasLink = path.href && path.buttonText;
            const isHighlighted = hasLink;

            return (
              <RevealAnimation key={path.id} delay={0.3 + index * 0.15}>
                <div
                  className={`
                    group relative h-full rounded-2xl p-8 lg:p-10
                    transition-all duration-500 ease-out
                    ${isHighlighted
                      ? `bg-gradient-to-br from-background-4 to-background-3 dark:from-background-6 dark:to-background-5 border-2 ${colors.border} shadow-lg hover:shadow-xl hover:-translate-y-1`
                      : 'bg-background-2 dark:bg-background-6 border border-stroke-1 dark:border-stroke-5 hover:border-stroke-2 dark:hover:border-stroke-4 hover:-translate-y-1'
                    }
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mb-6
                      transition-transform duration-500 group-hover:scale-105
                      ${isHighlighted ? colors.bg : 'bg-background-3 dark:bg-background-5'}
                    `}
                  >
                    <Icon
                      name={path.icon as any}
                      className={`
                        w-8 h-8 lg:w-10 lg:h-10
                        ${isHighlighted ? 'text-white' : colors.text}
                      `}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-heading-5 font-medium">{path.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  {/* CTA Button (only for highlighted path) */}
                  {hasLink && (
                    <div className="pt-2">
                      <LinkButton
                        href={path.href!}
                        className={`btn btn-secondary ${colors.hoverBg} hover:text-white hover:border-transparent btn-md w-full sm:w-auto`}
                      >
                        {path.buttonText}
                      </LinkButton>
                    </div>
                  )}

                  {/* Visual indicator for non-CTA card */}
                  {!hasLink && (
                    <div className="pt-2">
                      <span className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text}`}>
                        <span className="w-2 h-2 rounded-full bg-current" />
                        Autonomie totale
                      </span>
                    </div>
                  )}
                </div>
              </RevealAnimation>
            );
          })}
        </div>

        {/* Footer Text */}
        {footerText && (
          <RevealAnimation delay={0.6}>
            <p className="text-center mt-10 lg:mt-12 text-secondary/60 dark:text-accent/60 text-sm lg:text-base max-w-[500px] mx-auto">
              {footerText}
            </p>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

TwoPathsSection.displayName = 'TwoPathsSection';
export default TwoPathsSection;
