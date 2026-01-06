# Guide de création de page - Rankwell

> Checklist et règles pour créer une nouvelle page sur le site Rankwell.

## Table des matières

- [Règles d'architecture](#règles-darchitecture)
- [Checklist de création](#checklist-de-création)
- [Structure des fichiers](#structure-des-fichiers)
- [Multilingue (FR/EN)](#multilingue-fren)
- [SEO Checklist](#seo-checklist)
- [Exemple complet](#exemple-complet)

---

## Règles d'architecture

### 1. Organisation des composants

**RÈGLE ABSOLUE** : Tous les composants réutilisables vont dans `src/components/shared/`.

| Dossier | Usage | Exemple |
|---------|-------|---------|
| `shared/global/` | Composants sur TOUTES les pages | `CTA`, `FAQ`, `Map`, `OfficesDetailed` |
| `shared/homepage/` | Homepage UNIQUEMENT | `HeroHomepage`, `ServicesHomepage` |
| `shared/services/` | Pages services | `HeroService`, `IntroService`, `FAQService` |

**INTERDIT** :
- Créer un composant dans le dossier de la page (`src/app/ma-page/MonComposant.tsx`)
- Créer un fichier JSX ailleurs que dans `src/components/`

### 2. Organisation des pages

Chaque page = un dossier dans `src/app/[locale]/` avec :
- `page.tsx` - Composants et structure (multilingue via `getPageData()`)
- `data.fr.ts` - Contenu texte en français
- `data.en.ts` - Contenu texte en anglais (traduction professionnelle)

**INTERDIT** :
- Mettre du texte en dur dans `page.tsx`
- Mettre du JSX dans `data.*.ts`
- Créer une page sans version anglaise

### 3. Dynamic imports et composants client

Si un composant utilise `ssr: false` (ex: Leaflet), il DOIT être :
1. Un **Client Component** (avec `'use client'` en haut)
2. Placé dans `src/components/shared/global/`
3. Exporté via l'`index.ts` du dossier

```tsx
// ✅ BON : src/components/shared/global/OfficesDetailed.tsx
'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function OfficesDetailed() { ... }
```

```tsx
// ❌ INTERDIT : src/app/agence/nos-bureaux/OfficesDetailed.tsx
// Les composants ne vont JAMAIS dans les dossiers de pages
```

---

## Checklist de création

### Avant de commencer

- [ ] Identifier le type de page (service, agence, homepage, légale)
- [ ] Déterminer la couleur d'accent (`rw-blue`, `rw-cyan`, `rw-purple`)
- [ ] Lister les composants nécessaires (existants ou à créer)

### Fichiers à créer/modifier

| Action | Fichier | Obligatoire |
|--------|---------|-------------|
| Créer | `src/app/[locale]/[route]/page.tsx` | ✅ |
| Créer | `src/app/[locale]/[route]/data.fr.ts` | ✅ |
| Créer | `src/app/[locale]/[route]/data.en.ts` | ✅ |
| Modifier | `src/app/sitemap.ts` | ✅ |
| Modifier | `src/data/navigation.ts` (si menu) | ⚠️ Si dans menu |
| Modifier | `src/lib/routes.ts` (si réutilisé) | ⚠️ Recommandé |
| Créer | Composants dans `src/components/shared/` | ⚠️ Si nouveaux |

### SEO checkliste obligatoire

| Élément | Fichier concerné | Comment |
|---------|------------------|---------|
| Title & Description | `data.fr.ts` + `data.en.ts` + `page.tsx` | Via `generateMetadata()` |
| Canonical | Automatique | Via `layout.tsx` |
| Robots | Automatique | Via `layout.tsx` |
| Sitemap | `src/app/sitemap.ts` | Ajouter la route |
| Hreflang | Automatique | Via `layout.tsx` |
| Schema.org | `page.tsx` | Composants `@/components/seo` |

---

## Structure des fichiers

### data.fr.ts (version française)

```typescript
// src/app/[locale]/ma-page/data.fr.ts

import type { BreadcrumbItem } from '@/components/shared/services';

// ============================================
// METADATA (SEO)
// ============================================
export const metadata = {
  title: 'Titre de la page | Rankwell',
  description: 'Description pour Google (150-160 caractères)...',
};

// ============================================
// HERO
// ============================================
export const heroData = {
  badge: 'badge optionnel',
  title: 'Titre principal H1',
  description: 'Description sous le titre',
  primaryCta: {
    text: 'Texte bouton',
    href: '/contact',
  },
};

// ============================================
// BREADCRUMB
// ============================================
export const breadcrumbItems: BreadcrumbItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Parent', href: '/parent' },
  { label: 'Page actuelle' }, // Pas de href pour la page actuelle
];

// ============================================
// SECTIONS CONTENU
// ============================================
export const sectionData = {
  badge: 'section',
  title: 'Titre section',
  items: [
    { id: 1, title: 'Item 1', description: 'Description...' },
    { id: 2, title: 'Item 2', description: 'Description...' },
  ],
};

// ============================================
// CTA FINAL
// ============================================
export const ctaData = {
  title: 'Titre CTA',
  description: 'Description incitative...',
  buttonText: 'Action',
};
```

### page.tsx (avec chargement dynamique de la locale)

```tsx
// src/app/[locale]/ma-page/page.tsx

import { Metadata } from 'next';

// Composants shared
import { HeroService, IntroService } from '@/components/shared/services';
import { CTA, FAQ } from '@/components/shared/global';

// SEO - Données structurées
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from '@/components/seo';

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
export default async function MaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPageData(locale);

  // Préparer les données pour les schemas
  const breadcrumbSchemaItems = data.breadcrumbItems.map((item) => ({
    name: item.label,
    url: item.href || 'https://www.rankwell.agency/ma-page',
  }));

  const faqSchemaItems = data.faqData.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      {/* ========== SCHEMA.ORG ========== */}
      <BreadcrumbJsonLd items={breadcrumbSchemaItems} />
      <ServiceJsonLd
        service={{
          name: data.heroData.title,
          description: data.metadata.description,
          url: 'https://www.rankwell.agency/ma-page',
        }}
      />
      <FAQJsonLd faqs={faqSchemaItems} />

      {/* ========== HERO ========== */}
      <HeroService
        breadcrumb={data.breadcrumbItems}
        title={data.heroData.title}
        description={data.heroData.description}
        accentColor="rw-blue"
      />

      {/* ========== INTRO ========== */}
      <IntroService
        badge={data.introData.badge}
        paragraphs={data.introData.paragraphs}
        accentColor="rw-blue"
      />

      {/* ========== FAQ ========== */}
      <FAQ
        sectionId="faq"
        badge={data.faqData.badge}
        title={data.faqData.title}
        items={data.faqData.items}
      />

      {/* ========== CTA ========== */}
      <CTA
        title={data.ctaData.title}
        description={data.ctaData.description}
        buttonText={data.ctaData.buttonText}
      />
    </>
  );
}
```

---

## SEO Checklist

### 1. Metadata (Title & Description)

Dans `data.fr.ts` et `data.en.ts` :
```typescript
export const metadata = {
  title: 'Mot-clé principal | Rankwell',  // 50-60 caractères
  description: 'Description avec mots-clés...',  // 150-160 caractères
};
```

Dans `page.tsx` (via `generateMetadata`) :
```typescript
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const data = await getPageData(locale);
  return {
    title: data.metadata.title,
    description: data.metadata.description,
  };
}
```

### 2. Canonical (Automatique)

Géré dans `layout.tsx` via :
```typescript
alternates: {
  canonical: './',
},
```

**Rien à faire** - chaque page a automatiquement sa canonical.

### 3. Robots (Automatique)

Géré dans `layout.tsx` via :
```typescript
robots: {
  index: true,
  follow: true,
},
```

**Pour bloquer une page** (ex: page admin), ajouter dans le `page.tsx` :
```typescript
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};
```

### 4. Sitemap

Ajouter la route dans `src/app/sitemap.ts` :
```typescript
const routes: string[] = [
  // ... autres routes
  '/ma-nouvelle-page',  // ← Ajouter ici
];
```

### 5. Hreflang (Automatique)

Géré dans `layout.tsx` via :
```typescript
alternates: {
  canonical: './',
  languages: {
    'fr': './',
    'x-default': './',
  },
},
```

**Rien à faire** - appliqué à toutes les pages automatiquement.

### 6. Schema.org (Données structurées)

#### Schemas disponibles

| Composant | Usage | Import |
|-----------|-------|--------|
| `BreadcrumbJsonLd` | Fil d'Ariane | Toutes pages avec breadcrumb |
| `ServiceJsonLd` | Description service | Pages services |
| `FAQJsonLd` | Questions/Réponses | Pages avec FAQ |
| `HowToJsonLd` | Étapes process | Pages avec ProcessSteps |
| `LocalBusinessJsonLd` | Bureau local | Pages contact/bureaux |

#### Import
```typescript
import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd } from '@/components/seo';
```

#### Placement
Toujours au début du `return`, avant les composants visuels :
```tsx
return (
  <>
    {/* Schema.org - TOUJOURS EN PREMIER */}
    <BreadcrumbJsonLd items={...} />
    <ServiceJsonLd service={...} />

    {/* Composants visuels ensuite */}
    <HeroService ... />
  </>
);
```

---

## Multilingue (FR/EN)

### Workflow de création

**Étape 1** : Créer et finaliser la version française
1. Créer `data.fr.ts` avec tout le contenu en français
2. Créer `page.tsx` avec la structure
3. Tester et valider la page FR

**Étape 2** : Créer la traduction anglaise
1. Créer `data.en.ts` en traduisant `data.fr.ts`
2. La traduction doit être **professionnelle et pertinente** (pas de traduction littérale)
3. Adapter les expressions idiomatiques au contexte anglophone

### Structure des fichiers multilingues

```
src/app/[locale]/ma-page/
├── page.tsx        # Structure unique (charge les données selon locale)
├── data.fr.ts      # Contenu français (version principale)
└── data.en.ts      # Contenu anglais (traduction)
```

### Pattern de chargement dans page.tsx

```tsx
// src/app/[locale]/ma-page/page.tsx

import { Metadata } from 'next';

// Fonction pour charger les données selon la locale
async function getPageData(locale: string) {
  if (locale === 'en') {
    return import('./data.en');
  }
  return import('./data.fr');
}

// Génération des métadonnées dynamiques
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

// Composant de page
export default async function MaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPageData(locale);

  return (
    <>
      {/* Utiliser data.heroData, data.ctaData, etc. */}
    </>
  );
}
```

### Règles de traduction

| Élément | Règle |
|---------|-------|
| Titres (H1, H2...) | Traduction naturelle, pas littérale |
| Descriptions | Adapter au ton professionnel anglophone |
| CTA buttons | Utiliser des formulations courantes en anglais |
| Termes techniques | Garder les termes SEO/SEA en anglais |
| Noms propres | Ne pas traduire (Rankwell, Paris, Dubai) |

### Exemple de traduction

**❌ Traduction littérale (à éviter)** :
```typescript
// data.fr.ts
heroData.title = "Boostez votre visibilité en ligne"

// data.en.ts (mauvais)
heroData.title = "Boost your online visibility"
```

**✅ Traduction professionnelle (à faire)** :
```typescript
// data.fr.ts
heroData.title = "Boostez votre visibilité en ligne"

// data.en.ts (bon)
heroData.title = "Elevate Your Digital Presence"
```

### URLs multilingues

Les URLs sont automatiquement préfixées par la locale :

| Français | Anglais |
|----------|---------|
| `/agence-geo-seo` | `/en/geo-seo-agency` |
| `/agence-geo-seo/audit` | `/en/geo-seo-agency/audit` |
| `/contact` | `/en/contact` |

**Note** : Les slugs anglais peuvent différer des slugs français pour le SEO.

### Checklist traduction

- [ ] Tous les textes de `data.fr.ts` sont traduits dans `data.en.ts`
- [ ] Les métadonnées (title, description) sont optimisées pour le SEO anglophone
- [ ] Les CTA utilisent des formulations naturelles en anglais
- [ ] Les breadcrumbs sont traduits
- [ ] Les FAQ sont traduites avec des réponses adaptées
- [ ] Aucun texte français ne reste dans `data.en.ts`

---

## Exemple complet

Création de la page `/agence/nos-bureaux` :

### 1. Créer `data.fr.ts` (version française)

```typescript
// src/app/[locale]/agence/nos-bureaux/data.fr.ts

export const metadata = {
  title: 'Nos bureaux Paris et Dubaï | Rankwell',
  description: 'Rankwell est implantée à Paris et Dubaï...',
};

export const heroData = {
  title: 'Nos bureaux',
  description: 'Présents à Paris et Dubaï pour vous accompagner.',
};
export const breadcrumbItems = [
  { label: 'Accueil', href: '/' },
  { label: 'Agence', href: '/agence/qui-sommes-nous' },
  { label: 'Nos bureaux' },
];
export const ctaData = {
  title: 'Travaillons ensemble',
  description: 'Contactez notre équipe pour discuter de votre projet.',
  buttonText: 'Nous contacter',
};
```

### 2. Créer `data.en.ts` (traduction anglaise)

```typescript
// src/app/[locale]/agence/nos-bureaux/data.en.ts

export const metadata = {
  title: 'Our Offices in Paris & Dubai | Rankwell',
  description: 'Rankwell operates from Paris and Dubai...',
};

export const heroData = {
  title: 'Our Offices',
  description: 'Based in Paris and Dubai to support your growth.',
};
export const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Agency', href: '/agence/qui-sommes-nous' },
  { label: 'Our Offices' },
];
export const ctaData = {
  title: 'Let\'s Work Together',
  description: 'Get in touch with our team to discuss your project.',
  buttonText: 'Contact Us',
};
```

### 3. Créer `page.tsx` (avec chargement dynamique)

```tsx
// src/app/[locale]/agence/nos-bureaux/page.tsx

import { Metadata } from 'next';
import { HeroAgence, CTA, OfficesDetailed } from '@/components/shared/global';
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/seo';

// Chargement dynamique selon la locale
async function getPageData(locale: string) {
  if (locale === 'en') {
    return import('./data.en');
  }
  return import('./data.fr');
}

// Métadonnées dynamiques
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

// Composant de page
export default async function NosBureauxPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = await getPageData(locale);

  return (
    <>
      <LocalBusinessJsonLd location="paris" />
      <LocalBusinessJsonLd location="dubai" />
      <BreadcrumbJsonLd items={data.breadcrumbItems.map(item => ({
        name: item.label,
        url: item.href || 'https://www.rankwell.agency/agence/nos-bureaux',
      }))} />

      <HeroAgence
        breadcrumb={data.breadcrumbItems}
        title={data.heroData.title}
        description={data.heroData.description}
        primaryCta={{ text: data.ctaData.buttonText, href: '/contact' }}
      />
      <OfficesDetailed />
      <CTA
        title={data.ctaData.title}
        description={data.ctaData.description}
        buttonText={data.ctaData.buttonText}
      />
    </>
  );
}
```

### 4. Ajouter au sitemap

```typescript
// src/app/sitemap.ts
const routes: string[] = [
  // ...
  '/agence/nos-bureaux',  // ← Ajouté
];
```

### 5. Vérifier

**Version française :**
- [ ] Page accessible à `/agence/nos-bureaux`
- [ ] Title et description FR corrects
- [ ] Contenu entièrement en français

**Version anglaise :**
- [ ] Page accessible à `/en/agence/nos-bureaux`
- [ ] Title et description EN corrects
- [ ] Contenu entièrement en anglais (traduction professionnelle)

**SEO (les deux versions) :**
- [ ] Canonical présent (`<link rel="canonical" ...>`)
- [ ] Hreflang présent (`<link rel="alternate" hreflang="fr" ...>` et `hreflang="en"`)
- [ ] Schemas JSON-LD présents (`<script type="application/ld+json">`)
- [ ] Page dans le sitemap (`/sitemap.xml`)

---

## Erreurs courantes

| Erreur | Cause | Solution |
|--------|-------|----------|
| `ssr: false` not allowed in Server Components | Dynamic import avec `ssr: false` dans un Server Component | Créer un Client Component séparé |
| Composant dans dossier page | Mauvaise organisation | Déplacer vers `src/components/shared/` |
| Texte en dur dans page.tsx | Non-respect du pattern | Déplacer dans `data.ts` |
| Page non indexée | Non ajoutée au sitemap | Ajouter dans `sitemap.ts` |
| Canonical manquant | - | Automatique via layout.tsx |
| Type error `accentColor` | Typage manquant | Ajouter `as const` |

---

## Commandes utiles

```bash
# Vérifier le build
npm run build

# Tester le sitemap
# Ouvrir http://localhost:3000/sitemap.xml

# Vérifier les schemas
# Clic droit > Afficher le code source > Chercher "application/ld+json"

# Test Google Rich Results
# https://search.google.com/test/rich-results
```
