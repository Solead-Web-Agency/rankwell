/**
 * CONTENTWITHHIGHLIGHT - Section 2 colonnes avec blocs de texte + encart highlight
 *
 * Layout : header centré + grille 2 colonnes (blocs texte à gauche, encart highlight à droite)
 * Utilisé sur : /agence-geo-seo (WhyGeo)
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';

export interface ContentBlock {
  title: string;
  text: string;
}

export interface HighlightBox {
  icon: string;
  title: string;
  text: string;
}

export interface ContentWithHighlightProps {
  sectionId: string;
  badge: string;
  accentColor?: RwColor;
  title: string;
  subtitle: string;
  blocks: ContentBlock[];
  highlight: HighlightBox;
}

const ContentWithHighlight = ({
  sectionId,
  badge,
  accentColor = 'rw-blue',
  title,
  subtitle,
  blocks,
  highlight,
}: ContentWithHighlightProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        {/* Section header */}
        <div className="text-center space-y-3 mb-16">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[700px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[700px] mx-auto">{subtitle}</p>
          </RevealAnimation>
        </div>

        {/* Content block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealAnimation delay={0.4}>
            <div className="space-y-8">
              {blocks.map((block, index) => (
                <div key={`${block.title}-${index}`} className="space-y-4">
                  <h3 className="text-heading-5 font-normal">{block.title}</h3>
                  <p className="text-lg">{block.text}</p>
                </div>
              ))}
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="p-8 bg-background-1 dark:bg-background-6 rounded-[20px]">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                  <Icon name={highlight.icon as any} className="w-6 h-6 text-white" />
                </div>
                <span className="text-heading-6 font-normal">{highlight.title}</span>
              </div>
              <p className="text-lg" dangerouslySetInnerHTML={{ __html: highlight.text }} />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ContentWithHighlight.displayName = 'ContentWithHighlight';
export default ContentWithHighlight;
