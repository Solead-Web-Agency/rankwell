/**
 * PAGE CONTACT
 * URL: /contact (FR) | /en/contact (EN)
 *
 * Page de contact avec formulaire, infos et carte
 */

import { Metadata } from 'next';

// Composants shared
import { ContactSection, PageHero } from '@/components/shared/global';

// Composant local (client)
import MapSection from './MapSection';

// SEO - Données structurées
import { BreadcrumbJsonLd } from '@/components/seo';

// ============================================
// CHARGEMENT DYNAMIQUE DES DONNÉES
// ============================================
async function getPageData(locale: string) {
  if (locale === 'en') {
    return import('./data.en');
  }
  return import('./data.fr');
}

// ============================================
// METADATA DYNAMIQUE
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = await getPageData(locale);

  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}

// ============================================
// PAGE COMPONENT
// ============================================
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPageData(locale);

  // Préparer les données pour les schemas
  const breadcrumbSchemaItems = data.breadcrumbItems.map((item) => ({
    name: item.label,
    url: item.href || 'https://www.rankwell.agency/contact',
  }));

  return (
    <>
      {/* ========== SCHEMA.ORG ========== */}
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />

      {/* ========== PAGE HERO ========== */}
      <PageHero
        breadcrumb={data.breadcrumbItems}
        title={data.pageHeroData.title}
      />

      {/* ========== CONTACT SECTION ========== */}
      <ContactSection
        title={data.contactSectionData.title}
        subtitle={data.contactSectionData.subtitle}
        parisOffice={data.contactSectionData.parisOffice}
        dubaiOffice={data.contactSectionData.dubaiOffice}
        formLabels={data.contactSectionData.formLabels}
        accentColor={data.contactSectionData.accentColor}
      />

      {/* ========== MAP SECTION ========== */}
      <MapSection
        title={data.mapSectionData.title}
        paris={data.mapSectionData.paris}
        dubai={data.mapSectionData.dubai}
      />
    </>
  );
}
