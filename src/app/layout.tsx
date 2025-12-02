import { ClientProviders } from '@/components/providers/ClientProviders';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

/**
 * Root Layout - Server Component
 * Client providers are isolated to prevent SSR bailout
 * SmoothScroll is removed from layout to enable full SSR
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
