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
  // key={pathname} force React à remonter tout le contenu de la page lors d'une navigation.
  // Sans ça, React réutilise les composants (RevealAnimation, etc.) entre pages,
  // et useGSAP ne se ré-exécute pas → les éléments restent en opacity: 0.
  return (
    <>
      <Header />
      <main key={pathname} className="min-h-screen bg-background-3 dark:bg-background-7">
        {children}
      </main>
      <Footer />
    </>
  );
}
