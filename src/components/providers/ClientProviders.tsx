'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { AppContextProvider } from '@/context/AppContext';

interface ClientProvidersProps {
  children: ReactNode;
}

/**
 * Client-side providers wrapper
 * This component is isolated to prevent SSR bailout on the entire app
 */
export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <AppContextProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </AppContextProvider>
  );
}

