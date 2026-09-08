/**
 * PHONEREVEAL - Numéro de téléphone masqué, affiché au clic
 *
 * Avant le clic : bouton « Afficher le numéro ».
 * Après le clic : lien tel: avec le numéro, et événement dataLayer `phone_reveal`
 * (permet de compter les demandes de numéro comme conversion dans GTM / Google Ads).
 *
 * Variantes :
 * - pill   : icône dans une pastille colorée + texte (header)
 * - inline : petite icône + texte (hero)
 * - text   : texte seul, hérite de la couleur du parent (footer)
 */

'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';
import Icon from '@/components/ui/Icon';
import { colorVariants, type RwColor } from '@/lib/colorTheme';

export interface PhoneRevealProps {
  phoneHref: string;
  phoneLabel: string;
  revealText?: string;
  /** Emplacement du bouton, transmis au dataLayer */
  source?: string;
  variant?: 'pill' | 'inline' | 'text';
  accentColor?: RwColor;
  className?: string;
}

const PhoneReveal = ({
  phoneHref,
  phoneLabel,
  revealText = 'Afficher le numéro',
  source = 'phone',
  variant = 'inline',
  accentColor = 'rw-cyan',
  className,
}: PhoneRevealProps) => {
  const colors = colorVariants[accentColor];
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'phone_reveal', phone_source: source });
    }
  };

  const icon =
    variant === 'pill' ? (
      <span className={`size-8 shrink-0 rounded-full ${colors.bgLight} flex items-center justify-center`}>
        <Icon name="Phone" className={`size-4 ${colors.text}`} />
      </span>
    ) : variant === 'inline' ? (
      <Icon name="Phone" className={`size-4 ${colors.text}`} />
    ) : null;

  const baseClass = cn(
    'inline-flex items-center gap-2 transition-opacity hover:opacity-70',
    variant === 'pill' && 'text-tagline-2 md:text-tagline-1 font-medium text-secondary dark:text-accent',
    variant === 'inline' && 'text-tagline-1 font-medium text-secondary dark:text-accent',
    variant === 'text' && 'underline decoration-dotted underline-offset-4',
    className
  );

  if (revealed) {
    return (
      <a href={phoneHref} className={cn(baseClass, variant === 'text' && 'no-underline')}>
        {icon}
        {phoneLabel}
      </a>
    );
  }

  return (
    <button type="button" onClick={handleReveal} className={cn(baseClass, 'cursor-pointer')}>
      {icon}
      {revealText}
    </button>
  );
};

PhoneReveal.displayName = 'PhoneReveal';
export default PhoneReveal;
