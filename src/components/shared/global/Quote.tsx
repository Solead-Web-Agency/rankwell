/**
 * QUOTE - Citation avec auteur
 * Composant global utilisable sur toutes les pages
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

interface QuoteProps {
  quote: string;
  author: string;
  role: string;
}

const Quote = ({ quote, author, role }: QuoteProps) => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] max-xl:px-5 overflow-hidden">
      <RevealAnimation delay={0.1}>
        <div className="max-w-[1440px] text-center mx-auto max-sm:mx-3 rounded-4xl py-16 lg:py-[100px] -z-0 bg-secondary dark:bg-background-6 overflow-hidden relative">
          {/* Decorative Gradients */}
          <div
            className="absolute bg-(image:--color-gradient-5) blur-[85px] -rotate-[50deg] z-10 left-[28%] -top-[22%] w-[108px] h-[982px] select-none pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bg-(image:--color-gradient-5) blur-[85px] -rotate-45 z-10 right-[8%] -top-[22%] w-[108px] h-[982px] select-none pointer-events-none"
            aria-hidden="true"
          />

          {/* Quote Content */}
          <article className="text-center relative z-20">
            <RevealAnimation delay={0.2}>
              <blockquote className="text-lg lg:text-heading-6 font-normal max-w-[700px] mx-auto text-white px-4 sm:px-0">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <cite className="block mt-8 not-italic">
                <span className="text-tagline-1 text-white font-medium block">{author}</span>
                <span className="text-tagline-3 text-white/60">{role}</span>
              </cite>
            </RevealAnimation>
          </article>
        </div>
      </RevealAnimation>
    </section>
  );
};

Quote.displayName = 'Quote';
export default Quote;
