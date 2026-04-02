/**
 * GUIDE CONCLUSION — Bloc de clôture éditorial
 *
 * Simple, épuré : titre discret + paragraphes avec une bordure gauche d'accent.
 * Pas de card, pas de fond — reste dans le flux de lecture.
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

interface GuideConclusionProps {
  title: string;
  paragraphs: string[];
}

export default function GuideConclusion({ title, paragraphs }: GuideConclusionProps) {
  return (
    <div>
      <RevealAnimation>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8 bg-rw-blue" />
          <h2 className="text-tagline-2 font-semibold uppercase tracking-widest text-rw-blue">
            {title}
          </h2>
        </div>
      </RevealAnimation>

      <div className="border-l-2 border-rw-blue/25 pl-6">
        {paragraphs.map((p, i) => (
          <RevealAnimation key={i} delay={0.04 + i * 0.04}>
            <p
              className="text-tagline-1 text-secondary/75 dark:text-white/75 leading-[1.85] mb-5 last:mb-0"
              dangerouslySetInnerHTML={{ __html: p }}
            />
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
}
