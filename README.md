# Rankwell - Site Vitrine Agence GEO, SEO, SEA & Data

> Site vitrine moderne pour Rankwell, agence spécialisée en référencement naturel (SEO), Generative Engine Optimization (GEO), publicité payante (SEA) et Data Analytics.

## Table des matières

- [Stack technique](#stack-technique)
- [Démarrage rapide](#démarrage-rapide)
- [Architecture du projet](#architecture-du-projet)
- [Internationalisation (i18n)](#internationalisation-i18n)
- [Pattern Data/Content](#pattern-datacontent)
- [Système de routes](#système-de-routes)
- [Gestion des images](#gestion-des-images)
- [Système de couleurs](#système-de-couleurs)
- [Composants partagés](#composants-partagés)
- [SEO & Données structurées](#seo--données-structurées)
- [Créer une nouvelle page](#créer-une-nouvelle-page)
- [Système d'animation](#système-danimation)
- [Dark Mode](#dark-mode)
- [Notes de développement](#notes-de-développement)

---

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 16.0.0 | Framework React avec App Router |
| **React** | 19.2.0 | Librairie UI |
| **TypeScript** | 5.x | Typage statique |
| **Tailwind CSS** | 4.x | Styles utilitaires |
| **GSAP** | 3.13.0 | Animations scroll-triggered |
| **Lenis** | 1.3.8 | Smooth scrolling |
| **next-themes** | 0.4.6 | Gestion dark/light mode |
| **react-fast-marquee** | 1.6.5 | Animation défilement (logos, témoignages) |
| **leaflet** | 1.9.x | Cartes interactives |
| **react-leaflet** | 4.x | Intégration React pour Leaflet |

### Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement (Turbopack)
npm run build    # Build de production
npm run start    # Lance le serveur de production
npm run lint     # Vérifie le code avec ESLint
npm run lint:fix # Corrige automatiquement les erreurs ESLint
```

---

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:3000
```

Alternative Windows : double-cliquer sur `start-dev.bat`

---

## Architecture du projet

```
rankwell/
├── public/
│   ├── fonts/                    # Polices custom (icon font)
│   ├── robots.txt                # Directives pour les crawlers
│   └── images/                   # Images statiques
│       ├── icons/                # Icônes SVG UI (checkmark, etc.)
│       ├── shared/               # Images RÉUTILISABLES sur plusieurs pages
│       │   ├── certifications/   # Logos certifications partenaires (5)
│       │   ├── press/            # Logos presse (7)
│       │   ├── clients/          # Logos clients (32)
│       │   ├── testimonials/     # Logos témoignages (6)
│       │   └── logo-header.webp  # Logo Rankwell header
│       └── pages/                # Images SPÉCIFIQUES par page
│           ├── homepage/         # Hero background, etc.
│           └── agence-geo-seo/
│               ├── audit-seo/
│               ├── netlinking/
│               └── seo-semantique-technique/
│
├── src/
│   ├── app/                      # App Router (pages)
│   │   ├── layout.tsx            # Layout racine (+ Schema.org global)
│   │   ├── sitemap.ts            # Sitemap XML dynamique
│   │   ├── globals.css           # Styles globaux (imports)
│   │   ├── page.tsx              # Homepage
│   │   ├── data.ts               # Contenu homepage
│   │   │
│   │   ├── agence-geo-seo/       # Section GEO/SEO (rw-blue)
│   │   │   ├── page.tsx
│   │   │   ├── data.ts
│   │   │   ├── audit/
│   │   │   ├── technique-semantique/
│   │   │   ├── netlinking/
│   │   │   ├── creation-contenu/
│   │   │   ├── local/
│   │   │   └── international/
│   │   │
│   │   ├── agence-sea/           # Section SEA (rw-cyan)
│   │   │   ├── page.tsx
│   │   │   ├── data.ts
│   │   │   ├── setup/
│   │   │   ├── accompagnement/
│   │   │   ├── analyse-semantique/
│   │   │   ├── local/
│   │   │   └── international/
│   │   │
│   │   ├── agence-data/          # Section Data (rw-purple)
│   │   │   ├── page.tsx
│   │   │   ├── data.ts
│   │   │   ├── tracking/
│   │   │   ├── analytics/
│   │   │   └── cro/
│   │   │
│   │   └── agence/               # Section Agence (rw-blue/rw-purple)
│   │       ├── qui-sommes-nous/  # Page "Qui sommes-nous"
│   │       └── nos-bureaux/      # Page "Nos bureaux"
│   │
│   ├── components/
│   │   ├── Header.tsx            # Header global
│   │   ├── Footer.tsx            # Footer global
│   │   │
│   │   ├── shared/               # Composants RÉUTILISABLES
│   │   │   ├── global/           # Sur TOUTES les pages
│   │   │   ├── homepage/         # Homepage UNIQUEMENT
│   │   │   ├── services/         # Pages services
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── seo/                  # Composants SEO
│   │   │   ├── JsonLd.tsx        # Composants Schema.org
│   │   │   └── index.ts
│   │   │
│   │   ├── animation/
│   │   │   ├── RevealAnimation.tsx
│   │   │   └── NumberAnimation.tsx
│   │   │
│   │   ├── providers/
│   │   │   ├── ClientProviders.tsx
│   │   │   └── RouteChangeHandler.tsx
│   │   │
│   │   └── ui/
│   │       ├── Icon.tsx          # Wrapper Lucide icons
│   │       ├── accordion/
│   │       ├── button/
│   │       └── stack-card/
│   │
│   ├── lib/
│   │   ├── colorTheme.ts         # Système de couleurs dynamiques
│   │   ├── routes.ts             # Système de routes centralisé
│   │   └── schema.ts             # Données structurées Schema.org
│   │
│   ├── data/
│   │   └── navigation.ts         # Menu et footer
│   │
│   ├── context/
│   │   └── MobileMenuContext.tsx
│   │
│   ├── hooks/
│   │   ├── useMobileMenu.ts
│   │   ├── useScrollHeader.ts
│   │   └── useStackCards.ts
│   │
│   ├── icons/
│   │   └── index.tsx
│   │
│   ├── utils/
│   │   ├── cn.ts                 # Utility classnames
│   │   ├── font.ts               # Configuration polices
│   │   ├── springer.ts           # Utilitaires animation
│   │   └── stack-card/           # Utilitaires stack cards
│   │
│   └── styles/
│       ├── base.css
│       ├── variables.css
│       ├── typography.css
│       ├── badge.css
│       ├── button.css
│       ├── header.css
│       ├── icon-font.css
│       ├── common.css
│       ├── lenis.css
│       ├── custom-swiper.css
│       ├── number-animation.css
│       ├── color-safelist.css    # CRITIQUE - ne pas supprimer
│       └── vendor/               # CSS tiers
```

---

## Internationalisation (i18n)

### Vue d'ensemble

Le site supporte **2 langues** :

| Langue | Préfixe URL | Structure dossiers | Exemple URL |
|--------|-------------|-------------------|-------------|
| **Français** (défaut) | Aucun | `/agence-sea/audit` | `rankwell.agency/agence-sea/audit` |
| **Anglais** | `/en/` | Segments traduits | `rankwell.agency/en/sea-agency/audit` |

### Architecture i18n

```
src/
├── app/
│   ├── [locale]/                    # Segment dynamique (fr/en)
│   │   ├── layout.tsx               # Layout avec lang, hreflang
│   │   ├── page.tsx                 # Homepage
│   │   ├── data.fr.ts               # Contenu français
│   │   ├── data.en.ts               # Contenu anglais
│   │   └── agence-geo-seo/          # Structure française (interne)
│   │       ├── page.tsx
│   │       ├── data.fr.ts
│   │       └── data.en.ts
│   ├── layout.tsx                   # Root layout (fonts, providers)
│   └── sitemap.ts                   # Sitemap multilingue dynamique
│
├── lib/i18n/
│   ├── config.ts                    # Locales, baseUrl, patterns FR-only
│   ├── routes.ts                    # Mapping segments FR ↔ EN
│   ├── helpers.ts                   # useLocale(), getLocalizedHref()
│   ├── dictionaries.ts              # Strings UI (navigation, boutons)
│   └── index.ts                     # Export centralisé
│
├── middleware.ts                    # Rewrite URLs anglaises → chemins français
│
└── components/
    ├── LanguageSwitcher.tsx         # Sélecteur de langue
    └── providers/LocaleProvider.tsx # Context locale
```

### Fichiers de configuration clés

#### 1. `src/lib/i18n/config.ts` - Configuration centrale

```typescript
// Locales supportées
export const locales = ['fr', 'en'] as const;
export const defaultLocale = 'fr';
export const baseUrl = 'https://www.rankwell.agency';

// Pages SANS traduction anglaise (FR uniquement)
export const frenchOnlyPatterns: string[] = [
  '/agence-geo-seo/ville/*',      // Pages villes
  '/agence-sea/ville/*',
];

// Pages exclues du sitemap (noindex)
export const noIndexPages: string[] = [
  '/mentions-legales',
  '/politique-confidentialite',
];

// Vérifier si une page a une traduction
export function hasEnglishTranslation(frenchPath: string): boolean;
```

#### 2. `src/lib/i18n/routes.ts` - Mapping des segments URL

```typescript
// Traduction des segments d'URL
export const segmentTranslations: Record<string, string> = {
  'agence-geo-seo': 'geo-seo-agency',
  'agence-sea': 'sea-agency',
  'agence-data': 'data-agency',
  'agence': 'agency',
  'technique-semantique': 'technical-semantic',
  'netlinking': 'link-building',
  'creation-contenu': 'content-creation',
  'accompagnement': 'management',
  'analyse-semantique': 'semantic-analysis',
  'qui-sommes-nous': 'about-us',
  'nos-bureaux': 'our-offices',
  // ... voir fichier complet
};

// Fonctions de traduction
translatePathToEnglish('/agence-sea/audit') // → '/sea-agency/audit'
translatePathToFrench('/sea-agency/audit')  // → '/agence-sea/audit'
getLocalizedPath('/agence-sea', 'en')       // → '/en/sea-agency'
```

#### 3. `src/middleware.ts` - Réécriture d'URL

Le middleware gère :
- **URLs françaises** (`/agence-sea`) → Rewrite interne vers `/fr/agence-sea`
- **URLs anglaises** (`/en/sea-agency`) → Rewrite vers `/en/agence-sea`
- **Pages FR-only** (`/en/agence-geo-seo/ville/lyon`) → Redirect 301 vers `/agence-geo-seo/ville/lyon`

⚠️ **IMPORTANT** : Les patterns `frenchOnlyPatterns` sont dupliqués dans `middleware.ts` (edge runtime ne peut pas importer depuis config.ts avec 'use client'). **Maintenir les deux fichiers synchronisés !**

### Pattern multilingue pour les pages

#### Structure des fichiers data

```
src/app/[locale]/agence-sea/
├── page.tsx           # Composant unique
├── data.fr.ts         # Contenu français
└── data.en.ts         # Contenu anglais
```

#### Contenu de page.tsx

```typescript
import { isValidLocale, type Locale } from '@/lib/i18n';

interface PageProps {
  params: Promise<{ locale: string }>;
}

// Loader de données selon locale
async function getPageData(locale: Locale) {
  switch (locale) {
    case 'en':
      return import('./data.en');
    case 'fr':
    default:
      return import('./data.fr');
  }
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const { heroData, introData, ... } = await getPageData(locale);

  return (
    <>
      <HeroService {...heroData} />
      {/* ... */}
    </>
  );
}
```

### Composants globaux multilingues

Les composants `TrustBanner`, `Clients`, `Testimonials` acceptent une prop `locale` :

```typescript
// Dans une page
<TrustBanner locale={locale} />
<Clients locale={locale} />
<Testimonials locale={locale} />
```

### LanguageSwitcher

Le composant se cache automatiquement sur les pages sans traduction.

```typescript
// Dans Header.tsx
<LanguageSwitcher locale={locale} />
```

Comportement :
- Affiche un dropdown avec drapeaux 🇫🇷/🇬🇧
- Se cache si la page n'a pas de traduction (ex: pages villes)
- Génère automatiquement l'URL traduite

### Sitemap dynamique

Le sitemap (`src/app/sitemap.ts`) :
- Découvre automatiquement les pages depuis `src/app/[locale]/`
- Génère les entrées FR + EN pour les pages traduites
- Génère uniquement FR pour les pages sans traduction
- Exclut les pages `noIndexPages`
- Inclut les hreflang alternates

### Ajouter une nouvelle page

1. **Créer les fichiers** dans `src/app/[locale]/ma-page/`
   - `page.tsx`
   - `data.fr.ts`
   - `data.en.ts`

2. **Si nouveaux segments URL**, ajouter dans :
   - `src/lib/i18n/routes.ts` (segmentTranslations)
   - `src/middleware.ts` (enToFrSegments)

3. **Si page FR-only** (pas de traduction) :
   - Ajouter pattern dans `src/lib/i18n/config.ts` (frenchOnlyPatterns)
   - Ajouter pattern dans `src/middleware.ts` (frenchOnlyPatterns)
   - Créer uniquement `data.fr.ts`

4. **Si page noindex** :
   - Ajouter dans `src/lib/i18n/config.ts` (noIndexPages)

### Helpers disponibles

```typescript
import {
  // Hooks
  useLocale,                    // Obtenir locale courante (client)

  // URL helpers
  getLocalizedHref,             // Générer href localisé
  getAlternateLanguageUrl,      // URL de l'autre langue
  currentPageHasTranslation,    // Vérifier si traduction existe

  // Metadata
  generateAlternates,           // Générer hreflang pour metadata

  // Config
  hasEnglishTranslation,        // Vérifier traduction (serveur)
  baseUrl,
  locales,
  defaultLocale,
} from '@/lib/i18n';
```

### Pattern clé React pour i18n (IMPORTANT)

Quand un composant utilise `.map()` avec `RevealAnimation` (ou autre animation GSAP), **utiliser des clés basées sur le contenu**, pas juste l'index.

```typescript
// ❌ MAUVAIS - cause des problèmes de rendu entre locales
{items.map((item, index) => (
  <RevealAnimation key={index}>
    <div>{item.title}</div>
  </RevealAnimation>
))}

// ✅ BON - force React à recréer les éléments quand le contenu change
{items.map((item, index) => (
  <RevealAnimation key={`${item.title}-${index}`}>
    <div>{item.title}</div>
  </RevealAnimation>
))}
```

**Pourquoi ?** React utilise les clés pour identifier les éléments entre les rendus. Avec `key={index}`, React réutilise les composants existants même quand le contenu change (FR→EN). GSAP/ScrollTrigger conserve alors l'ancien état d'animation, ce qui peut masquer des éléments.

**Composants concernés (déjà corrigés) :**
- `CategoriesGrid.tsx` - `key={${item.category}-${index}}`
- `RecapBoxService.tsx` - `key={${item.title}-${item.id}}`
- `IntroService.tsx` - `key={para-${index}-${paragraph.substring(0, 30)}}`
- `IntroHomepage.tsx` - clés basées sur contenu
- `OutilsService.tsx` - `key={${item.category}-${index}}`
- `WarningsList.tsx` - `key={${item.label}-${index}}`
- `ForWhoService.tsx` - `key={${label}-${index}}`
- `ContentWithHighlight.tsx` - `key={${block.title}-${index}}`
- `TableauService.tsx` - clés basées sur contenu
- `HeroService.tsx` - `key={${item.label}-${index}}`

### Debug i18n

| Problème | Solution |
|----------|----------|
| URL anglaise 404 | Vérifier mapping dans `middleware.ts` |
| Mauvaise traduction URL | Vérifier `segmentTranslations` dans `routes.ts` |
| Page FR-only accessible en /en/ | Ajouter pattern dans `middleware.ts` ET `config.ts` |
| LanguageSwitcher ne s'affiche pas | Vérifier que page n'est pas dans `frenchOnlyPatterns` |
| Sitemap incomplet | Vérifier que page a un `page.tsx` |
| Éléments manquants sur pages EN | Vérifier les clés React (voir pattern ci-dessus) |
| Animation ne se déclenche pas après switch | Vérifier `RouteChangeHandler.tsx` + clés React |

---

## Pattern Data/Content

### Principe fondamental

**SÉPARATION STRICTE** entre le contenu (texte) et la présentation (composants).

| Fichier | Contient | Ne contient PAS |
|---------|----------|-----------------|
| `data.ts` | Tout le texte, titres, descriptions, listes, chemins images | JSX, composants, mise en forme complexe |
| `page.tsx` | Liste ordonnée des composants, JSX pour mise en forme | Texte en dur |

### Structure d'un data.ts

```typescript
// src/app/ma-page/data.ts

import type { BreadcrumbItem, TocItem, FAQServiceItem } from '@/components/shared/services';

// 1. METADATA (SEO)
export const metadata = {
  title: 'Titre Page | Rankwell',
  description: 'Description pour Google...',
};

// 2. HERO DATA
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Ma Page' },
  ] as BreadcrumbItem[],
  title: 'Titre principal',
  description: 'Description sous le titre...',
  ctaText: 'Bouton principal',
  ctaHref: '/contact',
  // image: '/images/pages/ma-page/hero.webp',  // Commenté = placeholder
  imageAlt: 'Description de l\'image',
  accentColor: 'rw-blue' as const,
};

// 3. INTRO DATA
export const introData = {
  badge: 'Badge',
  accentColor: 'rw-blue' as const,
  paragraphs: [
    'Premier paragraphe...',
    'Deuxième avec <strong>HTML inline</strong> autorisé...',
  ],
  tocItems: [
    { id: 'section-1', label: 'Section 1', icon: 'ns-shape-47' },
    { id: 'section-2', label: 'Section 2', icon: 'ns-shape-8' },
  ] as TocItem[],
};

// 4+ Autres sections...
```

### Structure d'un page.tsx

```tsx
// src/app/ma-page/page.tsx

import { Metadata } from 'next';

// Composants SHARED (réutilisables)
import { HeroService, IntroService, FAQService } from '@/components/shared/services';
import { Quote, TrustBanner, Clients, CTA } from '@/components/shared/global';

// DONNÉES
import {
  metadata as pageMetadata,
  heroData,
  introData,
  faqData,
  ctaData,
} from './data';

export const metadata: Metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
};

export default function MaPage() {
  return (
    <>
      <HeroService
        breadcrumb={heroData.breadcrumb}
        title={heroData.title}
        description={heroData.description}
        ctaText={heroData.ctaText}
        ctaHref={heroData.ctaHref}
        accentColor={heroData.accentColor}
      />

      <IntroService
        badge={introData.badge}
        accentColor={introData.accentColor}
        title={
          <>
            <span className="block">Première ligne</span>
            <span className="text-rw-blue">Deuxième ligne en couleur</span>
          </>
        }
        paragraphs={introData.paragraphs}
        tocItems={introData.tocItems}
      />

      <Clients />

      <FAQService
        sectionId={faqData.sectionId}
        badge={faqData.badge}
        title={faqData.title}
        items={faqData.items}
        accentColor={faqData.accentColor}
      />

      <CTA
        title={<>Texte <span className="text-rw-blue">en couleur</span></>}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
        checklistItems={ctaData.checklistItems}
      />
    </>
  );
}
```

---

## Système de routes

Le fichier `src/lib/routes.ts` centralise toutes les URLs du site.

### Usage

```typescript
import { ROUTES, GEO_SEO_ROUTES, SEA_ROUTES, DATA_ROUTES } from '@/lib/routes';

// Accès direct
<Link href={GEO_SEO_ROUTES.AUDIT}>Audit SEO</Link>

// Ou via ROUTES
<Link href={ROUTES.SEA.SETUP}>Setup SEA</Link>
```

### Gestion des redirections

Quand une URL change, on ajoute un alias pour générer automatiquement une redirection 301 :

```typescript
AUDIT: {
  path: '/agence-geo-seo/audit',
  aliases: ['/agence-geo-seo/audit-seo'],  // Ancienne URL
  label: 'Audit SEO',
} as Route,
```

---

## Gestion des images

### Principe

Les images sont **optionnelles**. Quand une image n'est pas fournie, un **placeholder** s'affiche automatiquement.

### Organisation des dossiers

| Dossier | Contenu | Quand utiliser |
|---------|---------|----------------|
| `icons/` | Icônes SVG UI | Icônes réutilisables (checkmarks, flèches...) |
| `shared/` | Assets partagés | Images utilisées sur plusieurs pages |
| `pages/` | Images par page | Images spécifiques à une seule page |

### Convention de chemins

```
Code (data.ts / composant)                      →  Fichier sur disque
/images/pages/homepage/illustration.png         →  public/images/pages/homepage/illustration.png
/images/pages/agence-geo-seo/audit-seo/x.webp   →  public/images/pages/agence-geo-seo/audit-seo/x.webp
/images/shared/logo-header.webp                 →  public/images/shared/logo-header.webp
/images/shared/clients/loreal.png               →  public/images/shared/clients/loreal.png
/images/shared/certifications/google.svg        →  public/images/shared/certifications/google.svg
/images/icons/checkmark-white.svg               →  public/images/icons/checkmark-white.svg
```

### Pattern image commentée

```typescript
// Dans data.ts - image commentée = placeholder affiché
{
  id: 1,
  // image: '/images/pages/ma-page/feature-1.webp',
  alt: 'Description de l\'image',
  title: 'Titre',
}

// Quand l'image est prête, décommenter :
{
  id: 1,
  image: '/images/pages/ma-page/feature-1.webp',
  alt: 'Description de l\'image',
  title: 'Titre',
}
```

---

## Système de couleurs

### Couleurs par service

| Service | Couleur | Usage |
|---------|---------|-------|
| GEO/SEO | `rw-blue` | Toutes les pages `/agence-geo-seo/*` |
| SEA | `rw-cyan` | Toutes les pages `/agence-sea/*` |
| Data | `rw-purple` | Toutes les pages `/agence-data/*` |
| Compléments | `rw-coral`, `rw-pink` | Éléments d'accent (témoignages, etc.) |

### Utilisation dans data.ts

```typescript
// TOUJOURS ajouter "as const" pour le typage
accentColor: 'rw-blue' as const,
```

### Utilisation dans les composants

```tsx
import { colorVariants, type RwColor } from '@/lib/colorTheme';

interface Props {
  accentColor?: RwColor;
}

const MonComposant = ({ accentColor = 'rw-blue' }: Props) => {
  const colors = colorVariants[accentColor];

  return (
    <div>
      <span className={`badge ${colors.badge}`}>Badge</span>
      <div className={colors.bgLight}>Fond léger</div>
      <p className={colors.text}>Texte coloré</p>
    </div>
  );
};
```

### Classes disponibles par couleur

```typescript
colorVariants['rw-blue'] = {
  text: 'text-rw-blue',
  bg: 'bg-rw-blue',
  bgLight: 'bg-rw-blue-light',
  bgSoft: 'bg-rw-blue-soft',
  border: 'border-rw-blue',
  borderLight: 'border-rw-blue-light',
  badge: 'bg-rw-blue-light text-rw-blue',
  hoverText: 'hover:text-rw-blue',
  hoverBg: 'hover:bg-rw-blue',
  groupHoverBg: 'group-hover:bg-rw-blue',
  groupHoverText: 'group-hover:text-rw-blue',
}
```

---

## Composants partagés

### Organisation

| Dossier | Usage | Import |
|---------|-------|--------|
| `shared/global/` | Sur TOUTES les pages | `from '@/components/shared/global'` |
| `shared/homepage/` | Homepage UNIQUEMENT | `from '@/components/shared/homepage'` |
| `shared/services/` | Pages services | `from '@/components/shared/services'` |

### Composants Global (`shared/global/`)

| Composant | Description |
|-----------|-------------|
| `Quote` | Citation avec auteur et rôle |
| `Clients` | Logos clients (marquee) - données en dur |
| `Testimonials` | Témoignages clients (marquee) - données en dur |
| `TrustBanner` | Bandeau de confiance |
| `PointVigilance` | Encart point clé/vigilance |
| `CTA` | Call-to-action fin de page |
| `RecapBox` | Grille items avec icônes |
| `FAQ` | Accordéon FAQ générique |
| `ProcessCards` | Cartes étapes process |
| `ProcessTimeline` | Timeline verticale (`compact` pour moins d'espace) |
| `ContentWithHighlight` | Contenu avec encart highlight |
| `StackCardsSection` | Section cartes empilées animées |
| `HeroAgence` | Hero centré avec world map pattern (pages agence) |
| `KeyFiguresAnimated` | Chiffres clés avec compteurs animés |
| `OfficesMap` | Section bureaux avec cartes Leaflet interactives |
| `OfficesDetailed` | Bureaux détaillés avec cartes et infos complètes |
| `Map` | Composant carte Leaflet réutilisable |

### Composants Homepage (`shared/homepage/`)

| Composant | Description |
|-----------|-------------|
| `HeroHomepage` | Hero page d'accueil |
| `Certifications` | Logos certifications - données en dur |
| `IntroHomepage` | Introduction avec highlights |
| `ServicesHomepage` | 3 expertises (grandes cartes) - supporte `sectionId` pour ancres |
| `ProcessHomepage` | Étapes de travail |
| `WhyUsHomepage` | Pourquoi nous choisir |
| `FAQHomepage` | FAQ homepage |

### Composants Services (`shared/services/`)

| Composant | Description | Props clés |
|-----------|-------------|------------|
| `HeroService` | Hero avec breadcrumb | `breadcrumb`, `title`, `accentColor` |
| `IntroService` | Introduction avec TOC | `paragraphs`, `tocItems` |
| `RecapBoxService` | Grille 4 items avec icônes | `items[]` avec `icon` |
| `FAQService` | Accordéon FAQ | `items[]` avec `question`, `answer` |
| `TableauService` | Tableau comparatif | `columns`, `rows` |
| `FeaturesGrid` | Grille features | `items[]`, `columns`, `bgWhite`, `badgeVariant` |
| `ForWhoService` | Section "Pour qui" | `criteria[]` |
| `OutilsService` | Outils avec logos | `logos[]`, `categories[]` |
| `StepsDimensions` | Dimensions numérotées | `dimensions[]` |
| `ProcessGrid` | Grille process | `steps[]` |
| `ProcessSteps` | Étapes numérotées | `steps[]` |
| `DeliverablesGrid` | Grille livrables | `items[]` |
| `StickyFeatures` | Features sticky scroll | `items[]` |
| `ReasonsGrid` | Grille raisons | `items[]` |
| `WarningsList` | Liste alertes | `items[]` |
| `ServicesGrid` | Grille services liés | `items[]` |
| `ServicesCards` | Cartes services avec liens | `items[]` avec `href` |
| `TwoPathsSection` | Section deux chemins | `paths[]` |
| `CategoriesGrid` | Grille catégories | `categories[]` |

---

## SEO & Données structurées

### Vue d'ensemble

Le site intègre un système SEO complet :

| Fichier | URL générée | Description |
|---------|-------------|-------------|
| `public/robots.txt` | `/robots.txt` | Directives crawlers (statique) |
| `src/app/sitemap.ts` | `/sitemap.xml` | Sitemap dynamique |
| `src/app/layout.tsx` | - | Canonical, hreflang, meta robots |
| `src/lib/schema.ts` | - | Configuration Schema.org |
| `src/components/seo/` | - | Composants JSON-LD |

### robots.txt

Fichier statique dans `public/robots.txt`. Autorise tous les bots AI pour le GEO.

```txt
# Bots AI autorisés
User-agent: ChatGPT-User
User-agent: GPTBot
User-agent: ClaudeBot
...
Allow: /

# Règles par défaut
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
```

### Sitemap

Le sitemap est généré dynamiquement via `src/app/sitemap.ts`.

**Ajouter une page au sitemap :**

```typescript
// src/app/sitemap.ts

const routes: string[] = [
  '/',
  '/contact',
  '/agence-geo-seo',
  '/agence-geo-seo/audit',
  // Ajouter ici les nouvelles pages
  '/nouvelle-page',
];
```

**Supprimer une page :** Retirer simplement la ligne du tableau.

### Canonical & Hreflang

Gérés automatiquement dans `src/app/layout.tsx` :

```typescript
alternates: {
  canonical: './',
  languages: {
    'fr': './',
    'x-default': './',
  },
},
```

- **Canonical** : Automatique sur toutes les pages (évite le contenu dupliqué)
- **Hreflang** : Déclaré pour `fr` et `x-default` (site en français uniquement pour l'instant)

Rien à configurer par page, c'est automatique via le layout racine.

### Données structurées Schema.org

#### Configuration centrale

Toutes les infos de l'entreprise sont dans `src/lib/schema.ts` :

```typescript
// src/lib/schema.ts

export const organizationData = {
  name: 'Rankwell',
  url: 'https://www.rankwell.agency',
  logo: 'https://www.rankwell.agency/images/shared/logo-header.webp',
  email: 'contact@rankwell.fr',
  foundingDate: '2017',
  sameAs: [
    'https://www.facebook.com/rankwellagency',
    'https://www.linkedin.com/company/rankwell/',
    'https://www.instagram.com/rankwell.agency/',
  ],
  locations: {
    paris: {
      streetAddress: '8 place Boulnois',
      postalCode: '75017',
      city: 'Paris',
      country: 'FR',  // Code ISO 3166-1 alpha-2
      telephone: '+33182283000',
    },
    dubai: {
      streetAddress: 'Oud Metha Road 18th Street',
      postalCode: '25775',
      city: 'Dubai',
      country: 'AE',
      telephone: '+971555294430',
    },
  },
};
```

**Pour modifier une info (téléphone, adresse, etc.)** → Éditer ce fichier uniquement.

#### Schemas globaux (layout.tsx)

Injectés sur toutes les pages via `src/app/layout.tsx` :

- `OrganizationJsonLd` - Infos entreprise
- `WebSiteJsonLd` - Infos site web

#### Schemas par page

Composants disponibles dans `@/components/seo` :

| Composant | Usage | Quand l'utiliser |
|-----------|-------|------------------|
| `BreadcrumbJsonLd` | Fil d'Ariane | Pages avec breadcrumb |
| `ServiceJsonLd` | Description service | Pages services |
| `FAQJsonLd` | Questions/Réponses | Pages avec FAQ |
| `HowToJsonLd` | Étapes d'un process | Pages avec ProcessSteps |
| `LocalBusinessJsonLd` | Bureau local | Page contact |

#### Exemple d'implémentation (page service)

```tsx
// src/app/ma-page/page.tsx

import { BreadcrumbJsonLd, ServiceJsonLd, FAQJsonLd, HowToJsonLd } from '@/components/seo';

export default function MaPage() {
  // Préparer les données pour les schemas
  const breadcrumbItems = heroData.breadcrumb.map((item) => ({
    name: item.label,
    url: item.href || 'https://www.rankwell.agency/ma-page',
  }));

  const faqItems = faqData.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  const howToSteps = processData.steps.map((step) => ({
    name: step.title,
    text: step.description,
  }));

  return (
    <>
      {/* Schema.org JSON-LD */}
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <ServiceJsonLd
        service={{
          name: 'Nom du service',
          description: pageMetadata.description,
          url: 'https://www.rankwell.agency/ma-page',
          image: heroData.image,  // Optionnel
        }}
      />
      <FAQJsonLd faqs={faqItems} />
      <HowToJsonLd
        name={processData.title}
        description={processData.subtitle}
        steps={howToSteps}
      />

      {/* Composants visuels */}
      <HeroService ... />
      ...
    </>
  );
}
```

#### Vérifier les schemas

1. Ouvrir la page dans le navigateur
2. Clic droit → "Afficher le code source"
3. Chercher `<script type="application/ld+json">`

Ou utiliser l'outil Google : https://search.google.com/test/rich-results

---

## Créer une nouvelle page

### 1. Créer la structure des fichiers

```
src/app/[locale]/ma-nouvelle-page/
├── page.tsx              # Composant page + metadata
├── data.fr.ts            # Contenu français
└── data.en.ts            # Contenu anglais (si bilingue)
```

### 2. Créer le fichier data.fr.ts

```typescript
// src/app/[locale]/ma-nouvelle-page/data.fr.ts

import type { BreadcrumbItem } from '@/components/shared/services';

// ============================================
// METADATA
// ============================================
export const metadata = {
  title: 'Titre de la page - Rankwell',
  description: 'Description pour les moteurs de recherche.',
};

// ============================================
// HERO DATA
// ============================================
export const heroData = {
  breadcrumb: [
    { label: 'Accueil', href: '/' },
    { label: 'Ma page' },
  ] as BreadcrumbItem[],
  title: 'Titre principal de la page',
  description: 'Description sous le titre.',
  ctaText: 'Bouton CTA',
  ctaHref: '/contact',
  accentColor: 'rw-blue' as const, // rw-blue, rw-cyan, rw-coral
};

// ============================================
// AUTRES SECTIONS...
// ============================================
export const sectionData = {
  sectionId: 'ma-section', // Pour ancre #ma-section
  badge: 'Badge',
  accentColor: 'rw-blue' as const,
  title: 'Titre de section',
  // ... props du composant
};
```

### 3. Créer le fichier data.en.ts (même structure, traduit)

```typescript
// src/app/[locale]/ma-nouvelle-page/data.en.ts

export const metadata = {
  title: 'Page Title - Rankwell',
  description: 'English description.',
};

export const heroData = {
  breadcrumb: [
    { label: 'Home', href: '/en' },          // /en pour homepage anglaise
    { label: 'My page' },
  ],
  title: 'Main page title',
  ctaHref: '/en/contact',                    // Liens EN avec préfixe /en
  // ...
};
```

### 4. Créer le fichier page.tsx

```typescript
// src/app/[locale]/ma-nouvelle-page/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale, locales, defaultLocale, getLocalizedPath } from '@/lib/i18n';

// Importer les composants nécessaires
import { HeroService } from '@/components/shared/services';
import { CTA } from '@/components/shared/global';

// ============================================
// Types
// ============================================
interface PageProps {
  params: Promise<{ locale: string }>;
}

// ============================================
// Data Loading
// ============================================
async function getPageData(locale: Locale) {
  switch (locale) {
    case 'en':
      return import('./data.en');
    case 'fr':
    default:
      return import('./data.fr');
  }
}

// ============================================
// Metadata (SEO)
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const data = await getPageData(locale as Locale);

  return {
    title: data.metadata.title,
    description: data.metadata.description,
    alternates: {
      canonical: locale === defaultLocale
        ? 'https://rankwell.fr/ma-nouvelle-page'
        : `https://rankwell.fr/${locale}${getLocalizedPath('/ma-nouvelle-page', locale as Locale)}`,
      languages: {
        'fr': 'https://rankwell.fr/ma-nouvelle-page',
        'en': `https://rankwell.fr/en${getLocalizedPath('/ma-nouvelle-page', 'en')}`,
        'x-default': `https://rankwell.fr/en${getLocalizedPath('/ma-nouvelle-page', 'en')}`,
      },
    },
  };
}

// ============================================
// Page Component
// ============================================
export default async function MaNouvellePage({ params }: PageProps) {
  const { locale } = await params;

  // Valider la locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Charger les données selon la locale
  const data = await getPageData(locale as Locale);
  const { heroData, sectionData, ctaData } = data;

  return (
    <>
      <HeroService
        breadcrumb={heroData.breadcrumb}
        title={heroData.title}
        description={heroData.description}
        ctaText={heroData.ctaText}
        ctaHref={heroData.ctaHref}
        accentColor={heroData.accentColor}
      />

      {/* Autres composants... */}

      <CTA
        title={ctaData.title}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
        accentColor="rw-blue"
      />
    </>
  );
}
```

### 5. Ajouter la traduction des segments URL

Si l'URL contient de nouveaux segments (ex: `ma-nouvelle-page` → `my-new-page`) :

```typescript
// src/lib/i18n/routes.ts
export const segmentTranslations: Record<string, string> = {
  // ...existants
  'ma-nouvelle-page': 'my-new-page',  // ← Ajouter
};

// src/middleware.ts
const enToFrSegments: Record<string, string> = {
  // ...existants
  'my-new-page': 'ma-nouvelle-page',  // ← Ajouter (inverse)
};
```

### 6. Cas spéciaux

#### Page FR uniquement (pas de traduction)

```typescript
// src/lib/i18n/config.ts
export const frenchOnlyPatterns: string[] = [
  // ...
  '/ma-nouvelle-page',  // ← Ajouter
];

// src/middleware.ts
const frenchOnlyPatterns: string[] = [
  // ...
  '/ma-nouvelle-page',  // ← Ajouter aussi (edge runtime)
];
```

Créer uniquement `data.fr.ts` (pas de `data.en.ts`).

#### Page noindex (pas dans le sitemap)

```typescript
// src/lib/i18n/config.ts
export const noIndexPages: string[] = [
  // ...
  '/ma-nouvelle-page',  // ← Ajouter
];
```

#### Page standalone (sans header/footer)

```typescript
// src/components/layout/ConditionalLayout.tsx
const standalonePages = ['/maillage', '/composants', '/ma-nouvelle-page'];
```

### 7. Ajouter à la navigation (optionnel)

```typescript
// src/data/navigation.ts
export const navigation: NavItem[] = [
  // ...
  { id: 'ma-nouvelle-page', label: 'Ma Page', href: '/ma-nouvelle-page' },
];
```

### Résumé des fichiers à modifier

| Cas | Fichiers |
|-----|----------|
| Page bilingue standard | Créer `data.fr.ts`, `data.en.ts`, `page.tsx` |
| Nouveau segment URL | + `routes.ts` + `middleware.ts` |
| Page FR uniquement | + `config.ts` + `middleware.ts` (frenchOnlyPatterns) |
| Page noindex | + `config.ts` (noIndexPages) |
| Page standalone | + `ConditionalLayout.tsx` |
| Dans le menu | + `navigation.ts` |

---

## Système d'animation

### RevealAnimation

Animation au scroll avec GSAP ScrollTrigger.

```tsx
import RevealAnimation from '@/components/animation/RevealAnimation';

<RevealAnimation
  delay={0.1}         // Délai avant animation
  duration={0.6}      // Durée en secondes
  offset={60}         // Distance de translation (px)
  direction="up"      // up, down, left, right
  start="top 90%"     // Point de déclenchement
  instant={false}     // true = pas d'attente scroll
>
  <div>Contenu animé</div>
</RevealAnimation>
```

### Pattern séquentiel

```tsx
<RevealAnimation delay={0.1}><h2>Titre</h2></RevealAnimation>
<RevealAnimation delay={0.2}><p>Paragraphe</p></RevealAnimation>
<RevealAnimation delay={0.3}><button>CTA</button></RevealAnimation>
```

---

## Dark Mode

### Utilisation Tailwind

```tsx
<div className="bg-white dark:bg-background-7">
  <p className="text-secondary dark:text-accent">Texte adaptatif</p>
</div>
```

---

## Pages d'administration (secrètes)

Deux pages utilitaires protégées par mot de passe pour l'analyse du site.

### Accès

| Page | URL | Description |
|------|-----|-------------|
| **Maillage interne** | `/maillage?k=ouvretoi` | Analyse des liens internes entre pages |
| **Composants** | `/composants?k=ouvretoi` | Liste des composants utilisés par page |

Ces pages sont :
- Protégées par `?k=ouvretoi` (404 sans le paramètre)
- Exclues du sitemap (noindex)
- Sans header/footer
- FR uniquement (pas de version EN)

### Page Maillage (`/maillage?k=ouvretoi`)

Tableau d'analyse du maillage interne :

| Colonne | Description |
|---------|-------------|
| **Page** | Nom et URL de la page |
| **Liens** | Nombre de liens entrants |
| **%** | Pourcentage du total des liens |
| **Menu** | Oui/Non - présence dans le menu |
| **Footer** | Oui/Non - présence dans le footer |
| **Provenance** | Liste des pages sources avec ancre du lien |

**Ce qui est compté :**
- CTA (`primaryCta`, `secondaryCta`, `ctaHref`, `buttonHref`)
- Liens dans les cards/services (`href` + `buttonText`)

**Ce qui est exclu :**
- Menu de navigation
- Footer
- Breadcrumbs (fil d'Ariane)
- Table des matières (`tocItems`)

Toggle FR/EN pour voir les données de chaque langue.

### Page Composants (`/composants?k=ouvretoi`)

Liste les composants importés depuis `@/components/` pour chaque page :

| Colonne | Description |
|---------|-------------|
| **Page** | Nom et URL de la page |
| **Nb** | Nombre de composants |
| **Composants** | Liste cliquable des composants |

Chaque composant est un lien vers la page où il est utilisé. Si un `sectionId` est détecté, le lien inclut l'ancre `#sectionId` pour scroller directement vers la section.

### Configuration

Les pages sont déclarées dans :

```typescript
// src/lib/i18n/config.ts
export const frenchOnlyPages = ['/maillage', '/composants'];
export const noIndexPages = [..., '/maillage', '/composants'];

// src/components/layout/ConditionalLayout.tsx
const standalonePages = ['/maillage', '/composants'];
```

### Fichiers sources

```
src/app/[locale]/maillage/
├── page.tsx           # Extraction des liens depuis data.*.ts
└── MaillageClient.tsx # UI tableau avec toggle FR/EN

src/app/[locale]/composants/
├── page.tsx           # Extraction des imports depuis page.tsx
└── ComposantsClient.tsx # UI tableau avec liens cliquables
```

---

## Notes de développement

### Fichiers critiques (NE PAS SUPPRIMER)

| Fichier | Rôle |
|---------|------|
| `src/styles/color-safelist.css` | Couleurs dynamiques Tailwind |
| `src/lib/colorTheme.ts` | Mapping des couleurs |
| `src/lib/routes.ts` | Système de routes centralisé |
| `src/lib/schema.ts` | Données structurées Schema.org |
| `src/components/animation/RevealAnimation.tsx` | Animations scroll |
| `src/components/ui/Icon.tsx` | Wrapper Lucide icons |
| `src/app/sitemap.ts` | Sitemap XML dynamique |
| `public/robots.txt` | Directives crawlers |

### Composants avec données en dur

Certains composants globaux ont leurs données **en dur** dans le composant (pas dans data.ts) :

- `Testimonials.tsx` - Témoignages clients
- `Clients.tsx` - Logos clients
- `Certifications.tsx` - Logos certifications
- `TrustBanner.tsx` - Bandeau confiance

C'est voulu car ces données sont identiques sur toutes les pages.

### État des pages (Décembre 2025)

| Page | URL | Statut |
|------|-----|--------|
| Homepage | `/` | Faite |
| Agence GEO/SEO | `/agence-geo-seo` | Faite |
| Audit SEO | `/agence-geo-seo/audit` | Faite |
| Technique & sémantique | `/agence-geo-seo/technique-semantique` | Faite |
| Netlinking | `/agence-geo-seo/netlinking` | Faite |
| Création contenu | `/agence-geo-seo/creation-contenu` | Faite |
| SEO local | `/agence-geo-seo/local` | Faite |
| SEO international | `/agence-geo-seo/international` | Faite |
| Agence SEA | `/agence-sea` | Faite |
| Setup SEA | `/agence-sea/setup` | Faite |
| Accompagnement SEA | `/agence-sea/accompagnement` | Faite |
| Analyse sémantique SEA | `/agence-sea/analyse-semantique` | Faite |
| SEA local | `/agence-sea/local` | Faite |
| SEA international | `/agence-sea/international` | Faite |
| Agence Data | `/agence-data` | Faite |
| Tracking | `/agence-data/tracking` | Faite |
| Analytics | `/agence-data/analytics` | Faite |
| CRO | `/agence-data/cro` | Faite |
| Qui sommes-nous | `/agence/qui-sommes-nous` | Faite |
| Nos bureaux | `/agence/nos-bureaux` | Faite |
| Contact | `/contact` | À faire |
| Blog | `/blog` | À faire |

### Debug courant

| Problème | Solution |
|----------|----------|
| Couleurs ne s'affichent pas | Vérifier `color-safelist.css` |
| Erreur type `accentColor` | Ajouter `as const` dans data.ts |
| Image ne s'affiche pas | Vérifier chemin `/images/...` = `public/images/...` |
| Route non trouvée | Vérifier `src/lib/routes.ts` |

---

## Contact

**Rankwell** - Agence GEO, SEO, SEA & Data

- Site : [www.rankwell.agency](https://www.rankwell.agency)
- Email : contact@rankwell.fr
- Paris : 8 place Boulnois, 75017 Paris
- Dubai : Oud Metha Road 18th Street, Dubai
