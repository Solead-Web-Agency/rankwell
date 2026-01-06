/**
 * JSONLD - Composants pour injecter les données structurées Schema.org
 *
 * Usage:
 *   <OrganizationJsonLd locale="fr" />
 *   <WebSiteJsonLd locale="en" />
 *   <ServiceJsonLd service={{ name, description, url }} />
 *   <FAQJsonLd faqs={[{ question, answer }]} />
 *   <BreadcrumbJsonLd items={[{ name, url }]} />
 *   <HowToJsonLd name="..." description="..." steps={[{ name, text }]} />
 */

import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateLocalBusinessSchema,
  type BreadcrumbItem,
  type ServiceSchemaData,
  type FAQItem,
  type HowToStep,
} from '@/lib/schema';
import { type Locale } from '@/lib/i18n/config';

// ============================================
// COMPOSANT DE BASE
// ============================================
interface JsonLdProps {
  data: Record<string, unknown>;
}

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ============================================
// ORGANIZATION SCHEMA (pour le layout)
// ============================================
interface OrganizationJsonLdProps {
  locale?: Locale;
}

export function OrganizationJsonLd({ locale = 'fr' }: OrganizationJsonLdProps) {
  return <JsonLd data={generateOrganizationSchema(locale)} />;
}

// ============================================
// WEBSITE SCHEMA (pour le layout)
// ============================================
interface WebSiteJsonLdProps {
  locale?: Locale;
}

export function WebSiteJsonLd({ locale = 'fr' }: WebSiteJsonLdProps) {
  return <JsonLd data={generateWebSiteSchema(locale)} />;
}

// ============================================
// BREADCRUMB SCHEMA
// ============================================
interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return <JsonLd data={generateBreadcrumbSchema(items)} />;
}

// ============================================
// SERVICE SCHEMA
// ============================================
interface ServiceJsonLdProps {
  service: ServiceSchemaData;
}

export function ServiceJsonLd({ service }: ServiceJsonLdProps) {
  return <JsonLd data={generateServiceSchema(service)} />;
}

// ============================================
// FAQ SCHEMA
// ============================================
interface FAQJsonLdProps {
  faqs: FAQItem[];
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  return <JsonLd data={generateFAQSchema(faqs)} />;
}

// ============================================
// HOWTO SCHEMA
// ============================================
interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: HowToStep[];
}

export function HowToJsonLd({ name, description, steps }: HowToJsonLdProps) {
  return <JsonLd data={generateHowToSchema(name, description, steps)} />;
}

// ============================================
// LOCAL BUSINESS SCHEMA
// ============================================
interface LocalBusinessJsonLdProps {
  location: 'paris' | 'dubai';
}

export function LocalBusinessJsonLd({ location }: LocalBusinessJsonLdProps) {
  return <JsonLd data={generateLocalBusinessSchema(location)} />;
}

// ============================================
// EXPORT PAR DÉFAUT
// ============================================
export default JsonLd;
