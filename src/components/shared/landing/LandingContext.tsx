/**
 * LANDINGCONTEXT - Contexte partagé des landing pages conversion
 *
 * Expose `openModal(source)` à tous les boutons CTA de la page.
 * Le state vit dans LandingShell.
 */

'use client';

import { createContext, useContext } from 'react';

export interface LandingContextValue {
  /** Ouvre la modale formulaire. `source` identifie le CTA cliqué (tracking). */
  openModal: (source?: string) => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

export const LandingContext = createContext<LandingContextValue>({
  openModal: () => {},
  closeModal: () => {},
  isModalOpen: false,
});

export function useLanding(): LandingContextValue {
  return useContext(LandingContext);
}
