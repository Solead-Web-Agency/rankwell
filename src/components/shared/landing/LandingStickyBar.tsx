/**
 * LANDINGSTICKYBAR - Barre CTA fixe en bas d'écran (mobile)
 *
 * Apparaît après un scroll de `showAfter` px, masquée quand la modale est ouverte.
 * Contient un lien d'appel + le bouton principal qui ouvre la modale.
 */

'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';
import { colorVariants, type RwColor } from '@/lib/colorTheme';
import Icon from '@/components/ui/Icon';
import { useLanding } from './LandingContext';

export interface LandingStickyBarContent {
  ctaText: string;
  phoneLabel: string;
  phoneHref: string;
  showAfter?: number;
}

interface LandingStickyBarProps {
  content: LandingStickyBarContent;
  accentColor?: RwColor;
}

const LandingStickyBar = ({ content, accentColor = 'rw-cyan' }: LandingStickyBarProps) => {
  const colors = colorVariants[accentColor];
  const { openModal, isModalOpen } = useLanding();
  const [isVisible, setIsVisible] = useState(false);
  const threshold = content.showAfter ?? 400;

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const shown = isVisible && !isModalOpen;

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 md:hidden transition-transform duration-300 ease-out',
        'border-t border-stroke-2 dark:border-stroke-6 bg-white/95 dark:bg-background-6/95 backdrop-blur-md',
        'px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]',
        shown ? 'translate-y-0' : 'translate-y-full'
      )}
      aria-hidden={!shown}
    >
      <div className="flex items-center gap-3">
        <a
          href={content.phoneHref}
          aria-label={content.phoneLabel}
          className="size-12 shrink-0 rounded-full border border-stroke-3 dark:border-stroke-7 flex items-center justify-center text-secondary dark:text-accent"
        >
          <Icon name="Phone" className="size-5" />
        </a>
        <button
          type="button"
          onClick={() => openModal('sticky-bar')}
          tabIndex={shown ? 0 : -1}
          className={`btn btn-md flex-1 ${colors.bg} text-white hover:opacity-90`}
        >
          <span>{content.ctaText}</span>
        </button>
      </div>
    </div>
  );
};

LandingStickyBar.displayName = 'LandingStickyBar';
export default LandingStickyBar;
