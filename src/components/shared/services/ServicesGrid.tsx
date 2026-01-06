/**
 * SERVICESGRID - Grille de services avec liens
 *
 * Affiche une grille 4 colonnes de services avec icône, titre, description et bouton lien.
 * Remplace : Services (de /agence-geo-seo)
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

export interface ServiceGridItem {
  id: number | string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface ServicesGridProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  buttonText: string;
  items: ServiceGridItem[];
}

const ServicesGrid = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  buttonText,
  items,
}: ServicesGridProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-16">
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

        <div className="grid grid-cols-12 xl:gap-8 md:gap-6 gap-y-5">
          {items.map((service, index) => (
            <div key={service.id} className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.3 + index * 0.1}>
                <div className="h-full px-6 py-8 rounded-[20px] bg-background-1 dark:bg-background-6 space-y-6 text-center flex flex-col items-center hover:translate-y-[-10px] transition-transform duration-500 ease-in-out">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                    <Icon name={service.icon as any} className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-heading-6 font-normal">{service.title}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">{service.description}</p>
                  </div>
                  <LinkButton
                    href={service.href}
                    className="btn btn-white dark:btn-transparent dark:hover:btn-accent hover:btn-secondary btn-md">
                    {buttonText}
                  </LinkButton>
                </div>
              </RevealAnimation>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ServicesGrid.displayName = 'ServicesGrid';
export default ServicesGrid;
