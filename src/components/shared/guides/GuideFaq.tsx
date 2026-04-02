'use client';

/**
 * GUIDE FAQ - Accordeon FAQ
 *
 * Chaque question est expandable. Animation CSS pur (pas de JS toggle).
 * Utilise <details> / <summary> pour accessibilite native.
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

interface GuideFaqProps {
  items: { question: string; answer: string }[];
  title: string;
}

export default function GuideFaq({ items, title }: GuideFaqProps) {
  return (
    <div>
      <RevealAnimation>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-rw-blue" />
          <h2 className="text-tagline-2 font-semibold uppercase tracking-widest text-rw-blue">
            {title}
          </h2>
        </div>
      </RevealAnimation>

      <div className="space-y-3">
        {items.map((item, i) => (
          <RevealAnimation key={i} delay={i * 0.04}>
            <details className="group rounded-2xl border border-stroke-2 dark:border-stroke-6 bg-background-1 dark:bg-background-6 overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-tagline-1 font-medium text-secondary dark:text-white list-none [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="ml-4 shrink-0 text-secondary/30 dark:text-white/30 transition-transform duration-200 group-open:rotate-45 text-xl leading-none">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-tagline-1 text-secondary/70 dark:text-white/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          </RevealAnimation>
        ))}
      </div>
    </div>
  );
}
