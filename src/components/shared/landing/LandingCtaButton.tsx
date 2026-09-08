/**
 * LANDINGCTABUTTON - Bouton CTA qui ouvre la modale formulaire
 *
 * Remplace LinkButton sur les landing pages : pas de navigation,
 * ouverture de la modale via le contexte LandingShell.
 */

'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { useLanding } from './LandingContext';

interface LandingCtaButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
  /** Identifiant du CTA, transmis au formulaire pour le tracking */
  source?: string;
  className?: string;
}

const LandingCtaButton = ({ children, source = 'cta', className, ...props }: LandingCtaButtonProps) => {
  const { openModal } = useLanding();

  return (
    <button
      type="button"
      onClick={() => openModal(source)}
      className={cn('btn btn-md', className)}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

LandingCtaButton.displayName = 'LandingCtaButton';
export default LandingCtaButton;
