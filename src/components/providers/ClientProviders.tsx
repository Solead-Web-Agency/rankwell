'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { RouteChangeHandler } from './RouteChangeHandler';
import SmoothScroll from './SmoothScroll';

interface ClientProvidersProps {
  children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <RouteChangeHandler />
      <SmoothScroll />
      {children}
    </ThemeProvider>
  );
}
