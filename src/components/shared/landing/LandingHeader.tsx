/**
 * LANDINGHEADER - En-tête minimal des landing pages conversion
 *
 * Pas de menu : logo (non cliquable, on garde le visiteur sur la page),
 * numéro de téléphone et bouton CTA qui ouvre la modale.
 */

import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import LandingCtaButton from './LandingCtaButton';

export interface LandingHeaderProps {
  ctaText: string;
  phoneLabel: string;
  phoneHref: string;
  accentColor?: RwColor;
  /** Classe de colorisation du logo (logo-blue, logo-cyan, logo-purple) */
  logoClass?: string;
}

const LandingHeader = ({
  ctaText,
  phoneLabel,
  phoneHref,
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
          <a
            href={phoneHref}
            className="hidden sm:flex items-center gap-2 text-tagline-2 md:text-tagline-1 font-medium text-secondary dark:text-accent hover:opacity-70 transition-opacity"
          >
            <span className={`size-8 rounded-full ${colors.bgLight} flex items-center justify-center`}>
              <Icon name="Phone" className={`size-4 ${colors.text}`} />
            </span>
            {phoneLabel}
          </a>
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
