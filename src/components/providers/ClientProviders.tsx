'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { RouteChangeHandler } from './RouteChangeHandler';

interface ClientProvidersProps {
  children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <RouteChangeHandler />
      {children}
    </ThemeProvider>
  );
}
