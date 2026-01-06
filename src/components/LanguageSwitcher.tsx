'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Locale, localeNames } from '@/lib/i18n';
import { getAlternateLanguageUrl } from '@/lib/i18n';
import { cn } from '@/utils/cn';

interface LanguageSwitcherProps {
  locale: Locale;
  className?: string;
}

// Codes ISO pour flag-icons (utilise les codes pays ISO 3166-1 alpha-2)
const flagCodes: Record<Locale, string> = {
  fr: 'fr',
  en: 'gb',
};

/**
 * Language Switcher Component
 * Dropdown showing both language options with flags
 * Returns null (hidden) if the current page has no translation
 */
export default function LanguageSwitcher({
  locale,
  className
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get the alternate language URL (returns null if no translation)
  const alternateUrl = getAlternateLanguageUrl(pathname, locale);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Si pas de traduction disponible, ne pas afficher le switcher
  if (!alternateUrl) {
    return null;
  }

  const targetLocale: Locale = locale === 'fr' ? 'en' : 'fr';

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      {/* Trigger button - shows current language */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-stroke-2 text-sm font-medium text-secondary bg-white transition-colors hover:border-primary dark:text-accent dark:border-stroke-6 dark:bg-background-6 dark:hover:border-primary"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className={`fi fi-${flagCodes[locale]} rounded-sm`} aria-hidden="true" />
        <span>{locale.toUpperCase()}</span>
        <svg
          className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 py-1 bg-white dark:bg-background-6 rounded-lg shadow-lg border border-stroke-2 dark:border-stroke-6 min-w-[120px] z-50">
          {/* Current language (active) */}
          <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/5 dark:bg-primary/10">
            <span className={`fi fi-${flagCodes[locale]} rounded-sm`} aria-hidden="true" />
            <span>{localeNames[locale]}</span>
            <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Alternate language (link) */}
          <Link
            href={alternateUrl}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary dark:text-accent hover:bg-gray-50 dark:hover:bg-background-5 transition-colors"
          >
            <span className={`fi fi-${flagCodes[targetLocale]} rounded-sm`} aria-hidden="true" />
            <span>{localeNames[targetLocale]}</span>
          </Link>
        </div>
      )}
    </div>
  );
}
