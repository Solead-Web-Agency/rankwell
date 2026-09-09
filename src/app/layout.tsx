/**
 * ROOT LAYOUT - Layout racine minimal
 * Gère uniquement les polices et le CSS global
 * Le layout spécifique à la locale est dans [locale]/layout.tsx
 */

import { ReactNode } from 'react';
import { interTight } from '@/utils/font';
import OpenAIPixel from '@/components/tracking/OpenAIPixel';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/* Pixel OpenAI Ads - doit être dans le <head>, un seul par page */}
        <OpenAIPixel />
      </head>
      <body className={`${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
