/**
 * CONDITIONAL LAYOUT
 * Affiche Header/Footer sauf sur certaines pages (standalone)
 */

'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Pages sans header/footer
const standalonePages = ['/maillage', '/composants'];

interface ConditionalLayoutProps {
  children: ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();

  // Vérifier si on est sur une page standalone
  const isStandalone = standalonePages.some(page => {
    // Nettoyer le pathname (enlever /fr ou /en)
    const cleanPath = pathname.replace(/^\/(fr|en)/, '') || '/';
    return cleanPath === page || cleanPath.startsWith(`${page}/`);
  });

  if (isStandalone) {
    // Page standalone - pas de header/footer
    return <>{children}</>;
  }

  // Page normale - avec header/footer
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background-3 dark:bg-background-7">
        {children}
      </main>
      <Footer />
    </>
  );
}
