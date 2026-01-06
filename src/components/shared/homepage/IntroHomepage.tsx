/**
 * INTROHOMEPAGE - Section intro spécifique à la page d'accueil
 * Design: 2 colonnes avec texte et encadré highlights
 *
 * Props: Toutes les données textuelles viennent de data.ts
 */

import RevealAnimation from '@/components/animation/RevealAnimation';

export interface IntroHighlight {
  strong: string;
  text: string;
}

export interface IntroHomepageProps {
  badge: string;
  title: string;
  paragraphs: string[];
  highlightsTitle: string;
  highlights: IntroHighlight[];
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const IntroHomepage = ({
  badge,
  title,
  paragraphs,
  highlightsTitle,
  highlights,
}: IntroHomepageProps) => {
  return (
    <section className="pt-[100px] md:pt-[120px] lg:pt-[140px] xl:pt-[160px] pb-10 md:pb-12 lg:pb-[60px] xl:pb-[80px]">
      <div className="main-container">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Text */}
          <div>
            <RevealAnimation delay={0.1}>
              <span className="badge bg-rw-blue-light text-rw-blue mb-5">{badge}</span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h2 className="mb-8">{title}</h2>
            </RevealAnimation>

            <div className="space-y-6 text-lg">
              {paragraphs.map((paragraph, index) => (
                <RevealAnimation key={`para-${index}-${paragraph.substring(0, 30)}`} delay={0.3 + index * 0.1}>
                  <p dangerouslySetInnerHTML={{ __html: paragraph }} />
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* Right Column - Highlight Box */}
          <RevealAnimation delay={0.6} direction="right" offset={50}>
            <div
              className="rounded-[20px] p-[7px] h-full"
              style={{ background: 'linear-gradient(45deg, #F9FAFB 0%, #A8E6E3 25%, #C4B5FD 50%, #93C5FD 75%, #F9FAFB 100%)' }}
            >
              <div className="rounded-[16px] bg-white p-8 sm:p-10 dark:bg-black h-full flex flex-col">
                <h3 className="text-heading-5 font-normal mb-6">{highlightsTitle}</h3>

                <ul className="flex-1 flex flex-col justify-between py-2">
                  {highlights.map((item, index) => (
                    <li key={`highlight-${item.strong}-${index}`} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-rw-cyan">
                        <CheckIcon className="size-3 fill-white" />
                      </span>
                      <span className="text-secondary/80 dark:text-accent/80">
                        <strong className="text-secondary dark:text-accent">{item.strong}</strong>{' '}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

IntroHomepage.displayName = 'IntroHomepage';
export default IntroHomepage;
