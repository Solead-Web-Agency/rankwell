/**
 * ROOT LAYOUT - Layout racine minimal
 * Gère uniquement les polices et le CSS global
 * Le layout spécifique à la locale est dans [locale]/layout.tsx
 */

import { ReactNode } from 'react';
import { interTight } from '@/utils/font';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
