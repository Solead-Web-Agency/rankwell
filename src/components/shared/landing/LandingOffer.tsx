/**
 * LANDINGOFFER - Bloc offre : ce que le prospect obtient + pour qui
 *
 * Carte sombre à fort contraste avec checklist des livrables de l'audit offert,
 * liste des profils concernés et CTA modale. Cœur de la landing.
 */

import RevealAnimation from '@/components/animation/RevealAnimation';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import LandingCtaButton from './LandingCtaButton';

export interface LandingOfferProps {
  sectionId?: string;
  badge: string;
  title: string;
  subtitle: string;
  includedTitle: string;
  included: { icon: string; text: string }[];
  forWhoTitle: string;
  forWho: string[];
  ctaText: string;
  ctaNote?: string;
  accentColor?: RwColor;
}

const LandingOffer = ({
  sectionId = 'offre',
  badge,
  title,
  subtitle,
  includedTitle,
  included,
  forWhoTitle,
  forWho,
  ctaText,
  ctaNote,
  accentColor = 'rw-cyan',
}: LandingOfferProps) => {
  const colors = colorVariants[accentColor];

  return (
    <section id={sectionId} className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-14">
          <RevealAnimation delay={0.1}>
            <span className={`badge ${colors.badge}`}>{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="max-w-[760px] mx-auto">{title}</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[640px] mx-auto text-secondary/80 dark:text-accent/80">{subtitle}</p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="bg-secondary dark:bg-background-6 rounded-[28px] p-7 md:p-10 lg:p-14 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
              {/* Livrables */}
              <div className="lg:col-span-3 space-y-6">
                <h3 className="text-heading-6 md:text-heading-5 text-white">{includedTitle}</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {included.map((item, index) => (
                    <li key={`${item.text}-${index}`} className="flex items-start gap-3">
                      <span className={`mt-0.5 size-8 shrink-0 rounded-full ${colors.bg} flex items-center justify-center`}>
                        <Icon name={item.icon as never} className="size-4 text-white" />
                      </span>
                      <span className="text-tagline-1 text-white/90">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pour qui */}
              <div className="lg:col-span-2 space-y-6 lg:border-l lg:border-white/10 lg:pl-14">
                <h3 className="text-heading-6 md:text-heading-5 text-white">{forWhoTitle}</h3>
                <ul className="space-y-3">
                  {forWho.map((item, index) => (
                    <li key={`${item}-${index}`} className="flex items-start gap-3">
                      <span className={`mt-1 size-2 shrink-0 rounded-full ${colors.bg}`} />
                      <span className="text-tagline-1 text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {ctaNote && <p className="text-tagline-2 text-white/70 text-center sm:text-left">{ctaNote}</p>}
              <LandingCtaButton
                source="offer"
                className={`btn-md md:btn-xl ${colors.bg} text-white hover:opacity-90 w-full sm:w-auto`}
              >
                {ctaText}
              </LandingCtaButton>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

LandingOffer.displayName = 'LandingOffer';
export default LandingOffer;
