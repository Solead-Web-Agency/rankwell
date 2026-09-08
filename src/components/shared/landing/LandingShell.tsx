/**
 * LANDINGSHELL - Enveloppe client des landing pages conversion
 *
 * Porte le state de la modale formulaire et l'expose via LandingContext.
 * Rend la modale + la barre sticky mobile en fin de page.
 *
 * Option `exitIntent` : ouvre la modale une seule fois par session
 * quand la souris quitte la fenêtre par le haut (desktop uniquement).
 */

'use client';

import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { type RwColor } from '@/lib/colorTheme';
import { LandingContext } from './LandingContext';
import LeadModal, { type LeadModalContent } from './LeadModal';
import LandingStickyBar, { type LandingStickyBarContent } from './LandingStickyBar';

interface LandingShellProps {
  children: ReactNode;
  modal: LeadModalContent;
  stickyBar?: LandingStickyBarContent;
  /** Identifiant unique du formulaire (tracking + payload) */
  formId: string;
  exitIntent?: boolean;
  /** Délai minimum (ms) avant que l'exit intent puisse se déclencher */
  exitIntentDelay?: number;
  accentColor?: RwColor;
}

const EXIT_INTENT_KEY = 'rw-landing-exit-intent';

const LandingShell = ({
  children,
  modal,
  stickyBar,
  formId,
  exitIntent = false,
  exitIntentDelay = 8000,
  accentColor = 'rw-cyan',
}: LandingShellProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [source, setSource] = useState('cta');
  const hasOpenedRef = useRef(false);

  const openModal = useCallback((src: string = 'cta') => {
    setSource(src);
    setIsModalOpen(true);
    hasOpenedRef.current = true;
  }, []);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  // Exit intent (desktop, une fois par session, jamais si déjà ouvert)
  useEffect(() => {
    if (!exitIntent) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, exitIntentDelay);

    const handleMouseOut = (e: MouseEvent) => {
      if (!armed || hasOpenedRef.current) return;
      if (e.relatedTarget !== null || e.clientY > 0) return;

      try {
        if (window.sessionStorage.getItem(EXIT_INTENT_KEY)) return;
        window.sessionStorage.setItem(EXIT_INTENT_KEY, '1');
      } catch {
        // sessionStorage indisponible : on tente quand même une seule fois
      }

      openModal('exit-intent');
    };

    document.addEventListener('mouseout', handleMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [exitIntent, exitIntentDelay, openModal]);

  const value = useMemo(
    () => ({ openModal, closeModal, isModalOpen }),
    [openModal, closeModal, isModalOpen]
  );

  return (
    <LandingContext.Provider value={value}>
      {children}

      <LeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={modal}
        source={source}
        formId={formId}
        accentColor={accentColor}
      />

      {stickyBar && <LandingStickyBar content={stickyBar} accentColor={accentColor} />}
    </LandingContext.Provider>
  );
};

LandingShell.displayName = 'LandingShell';
export default LandingShell;
