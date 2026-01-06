'use client';

import { ReactNode } from 'react';
import { LocaleContext } from '@/lib/i18n/helpers';
import { type Locale } from '@/lib/i18n/config';

interface LocaleProviderProps {
  locale: Locale;
  children: ReactNode;
}

/**
 * Client component wrapper for LocaleContext.Provider
 * Must be a client component to use React Context
 */
export function LocaleProvider({ locale, children }: LocaleProviderProps) {
  return (
    <LocaleContext.Provider value={{ locale }}>
      {children}
    </LocaleContext.Provider>
  );
}
