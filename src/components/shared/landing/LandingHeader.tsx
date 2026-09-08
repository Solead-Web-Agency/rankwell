/**
 * LANDINGHEADER - En-tête minimal des landing pages conversion
 *
 * Pas de menu : logo (non cliquable, on garde le visiteur sur la page),
 * numéro de téléphone et bouton CTA qui ouvre la modale.
 */

import Image from 'next/image';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import LandingCtaButton from './LandingCtaButton';
import PhoneReveal from './PhoneReveal';

export interface LandingHeaderProps {
  ctaText: string;
  phoneLabel: string;
  phoneHref: string;
  /** Texte du bouton qui révèle le numéro */
  phoneRevealText?: string;
  accentColor?: RwColor;
  /** Classe de colorisation du logo (logo-blue, logo-cyan, logo-purple) */
  logoClass?: string;
}

const LandingHeader = ({
  ctaText,
  phoneLabel,
  phoneHref,
  phoneRevealText,
  accentColor = 'rw-cyan',
  logoClass = 'logo-cyan',
}: LandingHeaderProps) => {
  const colors = colorVariants[accentColor];

  return (
    <header className="sticky top-0 z-40 border-b border-stroke-2/60 dark:border-stroke-6/60 bg-white/85 dark:bg-background-7/85 backdrop-blur-[20px]">
      <div className="main-container flex items-center justify-between gap-4 py-3 md:py-4">
        <Image
          src="/images/shared/logo-header.webp"
          alt="Rankwell"
          width={180}
          height={40}
          className={`h-8 md:h-10 w-auto dark:brightness-0 dark:invert ${logoClass}`}
          priority
        />

        <div className="flex items-center gap-3 md:gap-6">
          <PhoneReveal
            phoneHref={phoneHref}
            phoneLabel={phoneLabel}
            revealText={phoneRevealText}
            source="header"
            variant="pill"
            accentColor={accentColor}
            className="hidden sm:inline-flex"
          />
          <LandingCtaButton source="header" className={`${colors.bg} text-white hover:opacity-90`}>
            {ctaText}
          </LandingCtaButton>
        </div>
      </div>
    </header>
  );
};

LandingHeader.displayName = 'LandingHeader';
export default LandingHeader;
