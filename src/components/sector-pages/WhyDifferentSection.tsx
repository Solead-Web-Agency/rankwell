/**
 * WHYDIFFERENTSECTION — "Pourquoi le SEO est différent pour..."
 * Commun aux 3 templates (contenu différent selon type)
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

interface WhyDifferentSectionProps {
  title: string;
  /** Blocs de contenu en HTML (paragraphes) */
  blocks: string[];
  /** Passage citable "Selon Rankwell, ..." */
  citablePassage: string;
}

export default function WhyDifferentSection({ title, blocks, citablePassage }: WhyDifferentSectionProps) {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="main-container">
        <div className="max-w-4xl">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 text-secondary dark:text-accent mb-8">{title}</h2>
          </RevealAnimation>

          <div className="space-y-5">
            {blocks.map((block, i) => (
              <RevealAnimation key={i} delay={0.15 + i * 0.05}>
                <div
                  className="text-secondary/80 dark:text-accent/80 leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: block }}
                />
              </RevealAnimation>
            ))}
          </div>

          {/* Passage citable — mis en avant visuellement */}
          <RevealAnimation delay={0.3}>
            <blockquote className="mt-8 p-6 rounded-xl bg-rw-blue/5 dark:bg-rw-blue/10 border-l-4 border-rw-blue">
              <p className="text-secondary dark:text-accent leading-relaxed font-medium italic">
                {citablePassage}
              </p>
            </blockquote>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
}
