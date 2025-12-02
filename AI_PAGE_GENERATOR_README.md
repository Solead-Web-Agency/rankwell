# 🤖 Générateur de Pages IA avec Gemini

## 📋 Vue d'ensemble du projet

Ce projet implémente un système intelligent de génération de pages web automatisé utilisant l'IA Gemini. Le système permet de créer des pages Next.js complètes et optimisées SEO en analysant les composants disponibles dans le projet et en générant automatiquement le code nécessaire.

## 🎯 Objectifs

1. **Documentation automatique des composants** : Scanner et documenter tous les composants React disponibles avec leurs props, types et usages
2. **Génération intelligente de pages** : Utiliser Gemini AI pour générer des pages complètes basées sur des prompts utilisateur
3. **Intégration au menu** : Ajouter automatiquement les nouvelles pages au système de navigation
4. **Optimisation SEO** : Générer des métadonnées SEO appropriées pour chaque page créée

## 🏗️ Architecture du projet

### Structure des fichiers

```
rankwell/
├── ai-components/                    # Banque de données des composants
│   ├── index.json                    # Index principal : pages → composants utilisés
│   ├── components/                   # Documentation détaillée par composant
│   │   ├── Hero.json
│   │   ├── NavbarOne.json
│   │   ├── FooterOne.json
│   │   └── ...
│   └── templates/                    # Templates de combinaisons de composants
│       ├── homepage-template-01.json
│       ├── about-template-01.json
│       └── ...
├── src/
│   ├── app/
│   │   ├── admin/                    # Page admin pour génération
│   │   │   └── page-generator/
│   │   │       └── page.tsx          # Interface chatbot
│   │   └── api/
│   │       ├── generate-page/        # API route pour génération
│   │       │   └── route.ts
│   │       └── analyze-components/   # API route pour analyse
│   │           └── route.ts
│   └── utils/
│       ├── component-scanner.ts      # Scanner de composants
│       ├── page-generator.ts         # Générateur de pages
│       └── menu-updater.ts           # Mise à jour du menu
└── .env                              # Configuration (GEMINI-KEY)
```

## 📦 Fonctionnalités principales

### 1. Banque de données JSON (`ai-components/`)

#### `index.json` - Index principal
Documente toutes les pages existantes et leurs composants utilisés :

```json
{
  "pages": [
    {
      "route": "/",
      "title": "Homepage 01",
      "components": [
        {
          "name": "Hero",
          "path": "@/components/homepage-01/Hero",
          "props": {}
        },
        {
          "name": "About",
          "path": "@/components/homepage-01/About",
          "props": {}
        }
      ],
      "metadata": {
        "title": "Crypto - NextSaaS",
        "description": "..."
      }
    }
  ],
  "statistics": {
    "totalPages": 96,
    "totalComponents": 597,
    "mostUsedComponents": [...]
  }
}
```

#### `components/*.json` - Documentation par composant
Pour chaque composant, un fichier JSON détaillé :

```json
{
  "name": "Hero",
  "path": "@/components/homepage-01/Hero",
  "description": "Hero section avec animations et design crypto",
  "category": "hero",
  "props": [
    {
      "name": "className",
      "type": "string",
      "optional": true,
      "default": undefined,
      "description": "Classes CSS additionnelles"
    },
    {
      "name": "title",
      "type": "string",
      "optional": false,
      "description": "Titre principal du hero"
    }
  ],
  "children": [
    {
      "component": "RevealAnimation",
      "usage": "wrapper"
    }
  ],
  "examples": [
    {
      "code": "<Hero title=\"Welcome\" />",
      "description": "Usage basique"
    }
  ],
  "relatedComponents": ["CTAV1", "NavbarOne"],
  "templates": ["homepage-template-01"]
}
```

#### `templates/*.json` - Templates de pages
Combinaisons pré-définies de composants pour différents types de pages :

```json
{
  "id": "homepage-template-01",
  "name": "Homepage Standard",
  "description": "Template pour homepage avec hero, about, services, testimonial",
  "category": "homepage",
  "components": [
    {
      "component": "NavbarOne",
      "required": true,
      "order": 1
    },
    {
      "component": "Hero",
      "required": true,
      "order": 2
    },
    {
      "component": "About",
      "required": false,
      "order": 3
    },
    {
      "component": "OurServices",
      "required": false,
      "order": 4
    },
    {
      "component": "Testimonial",
      "required": false,
      "order": 5
    },
    {
      "component": "FooterOne",
      "required": true,
      "order": 6
    }
  ],
  "seoTemplate": {
    "title": "{pageName} - NextSaaS",
    "description": "Description optimisée SEO pour {pageName}"
  }
}
```

### 2. Page Admin (`/admin/page-generator`)

Interface utilisateur avec chatbot pour générer des pages :

**Fonctionnalités :**
- **Chatbot interactif** : Zone de chat pour entrer des prompts
- **Analyse en temps réel** : Affiche les composants suggérés par Gemini
- **Prévisualisation** : Aperçu du code généré avant validation
- **Validation** : Bouton pour confirmer et créer la page
- **Historique** : Liste des pages générées

**Interface :**
```
┌─────────────────────────────────────────┐
│  🤖 Générateur de Pages IA              │
├─────────────────────────────────────────┤
│                                         │
│  [Chatbot]                              │
│  User: "Créer une page contact avec    │
│        formulaire et carte"             │
│                                         │
│  AI: "J'ai analysé vos composants...   │
│       Voici ma proposition:"           │
│                                         │
│  [Prévisualisation du code]             │
│                                         │
│  [✓ Valider] [✗ Modifier]              │
│                                         │
└─────────────────────────────────────────┘
```

### 3. API Routes

#### `/api/generate-page` (POST)
Génère une page complète via Gemini AI.

**Request :**
```json
{
  "prompt": "Créer une page contact avec formulaire",
  "route": "/contact-form",
  "pageName": "Contact Form",
  "category": "contact"
}
```

**Response :**
```json
{
  "success": true,
  "pageCode": "import NavbarOne from...",
  "suggestedComponents": ["ContactForm", "Map", "CTAV1"],
  "metadata": {
    "title": "Contact Form - NextSaaS",
    "description": "..."
  },
  "menuSuggestion": {
    "menu": "pageMegaMenuColumns",
    "column": 1,
    "position": "end"
  }
}
```

#### `/api/analyze-components` (GET)
Retourne la liste complète des composants disponibles avec leurs détails.

**Response :**
```json
{
  "components": [...],
  "templates": [...],
  "statistics": {...}
}
```

### 4. Utilitaires

#### `component-scanner.ts`
- Scanne tous les fichiers `.tsx` dans `src/components/`
- Extrait les interfaces TypeScript (props)
- Analyse les imports et dépendances
- Génère la documentation JSON

#### `page-generator.ts`
- Génère le code de la page Next.js
- Crée les imports nécessaires
- Ajoute les métadonnées SEO
- Structure la page avec NavbarOne et FooterOne

#### `menu-updater.ts`
- Ajoute la nouvelle page au menu approprié dans `src/data/header.ts`
- Détermine le bon menu selon la catégorie (about, services, etc.)
- Génère un ID unique pour l'item de menu

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
GEMINI-KEY=your-gemini-api-key-here
```

### Installation des dépendances

```bash
# Installer le SDK Gemini
bun add @google/generative-ai
```

## 🚀 Workflow d'utilisation

### 1. Initialisation (une seule fois)

```bash
# Scanner tous les composants et générer la banque de données
bun run scan-components
```

Cette commande va :
- Scanner toutes les pages dans `src/app/`
- Analyser tous les composants dans `src/components/`
- Générer `ai-components/index.json`
- Créer un fichier JSON par composant dans `ai-components/components/`
- Générer les templates dans `ai-components/templates/`

### 2. Génération d'une page

1. **Accéder à l'interface admin** : `/admin/page-generator`
2. **Entrer un prompt** : "Créer une page de services avec liste de services et pricing"
3. **Analyser la proposition** : L'IA suggère les composants à utiliser
4. **Valider ou modifier** : Ajuster si nécessaire
5. **Créer la page** : Le système génère automatiquement :
   - Le fichier `src/app/[route]/page.tsx`
   - L'ajout au menu dans `src/data/header.ts`
   - Les métadonnées SEO

### 3. Exemple de prompt

```
"Créer une page 'À propos' avec :
- Hero section avec titre et description
- Section équipe avec 4 membres
- Section témoignages
- CTA pour contact"
```

L'IA va :
1. Analyser les composants disponibles
2. Sélectionner : `Hero`, `Team`, `Testimonial`, `CTAV1`
3. Générer le code avec les bonnes props
4. Proposer d'ajouter au menu "About"

## 📊 Structure des données

### Format d'un composant JSON

```typescript
interface ComponentDoc {
  name: string;                    // Nom du composant
  path: string;                    // Chemin d'import
  description: string;              // Description
  category: string;                 // hero, footer, cta, etc.
  props: ComponentProp[];          // Liste des props
  children: ComponentChild[];       // Composants enfants
  examples: ComponentExample[];     // Exemples d'usage
  relatedComponents: string[];      // Composants liés
  templates: string[];              // Templates utilisant ce composant
}

interface ComponentProp {
  name: string;
  type: string;                    // string, number, boolean, etc.
  optional: boolean;
  default?: any;
  description: string;
}
```

### Format d'un template JSON

```typescript
interface Template {
  id: string;
  name: string;
  description: string;
  category: string;                 // homepage, about, contact, etc.
  components: TemplateComponent[];
  seoTemplate: {
    title: string;
    description: string;
  };
}

interface TemplateComponent {
  component: string;               // Nom du composant
  required: boolean;
  order: number;                   // Ordre d'affichage
  props?: Record<string, any>;     // Props par défaut
}
```

## 🎨 Exemple de page générée

```tsx
import Hero from '@/components/homepage-01/Hero';
import Team from '@/components/homepage-05/Team';
import Testimonial from '@/components/homepage-01/Testimonial';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'À propos - NextSaaS',
  description: 'Découvrez notre équipe et notre histoire',
};

const AboutPage = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero
          title="À propos de nous"
          description="Notre histoire et notre mission"
        />
        <Team className="py-20" badgeColor="badge-cyan" />
        <Testimonial />
        <CTAV1
          ctaHeading="Prêt à commencer ?"
          ctaBtnText="Contactez-nous"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

AboutPage.displayName = 'AboutPage';
export default AboutPage;
```

## 🔐 Sécurité

- **Validation des routes** : Vérifier que la route générée n'existe pas déjà
- **Sanitization** : Nettoyer les inputs utilisateur avant génération
- **API Key** : Stocker `GEMINI-KEY` dans `.env.local` (ne pas commiter)
- **Permissions** : Restreindre l'accès à `/admin/page-generator` (à implémenter)

## 📝 Scripts disponibles

```json
{
  "scripts": {
    "scan-components": "tsx src/utils/component-scanner.ts",
    "generate-page": "tsx src/utils/page-generator.ts",
    "update-menu": "tsx src/utils/menu-updater.ts"
  }
}
```

## 🧪 Tests

À implémenter :
- Tests unitaires pour `component-scanner.ts`
- Tests d'intégration pour l'API Gemini
- Tests E2E pour le workflow complet

## 🚧 Roadmap

### Phase 1 : Base (Actuel)
- [x] Scanner de composants
- [x] Génération de la banque de données JSON
- [ ] Interface admin avec chatbot
- [ ] Intégration Gemini
- [ ] Générateur de pages

### Phase 2 : Améliorations
- [ ] Prévisualisation en temps réel
- [ ] Édition du code généré avant validation
- [ ] Historique des pages générées
- [ ] Templates personnalisés par l'utilisateur

### Phase 3 : Avancé
- [ ] Génération de contenu (textes, images) par IA
- [ ] Optimisation SEO automatique
- [ ] A/B testing des pages générées
- [ ] Analytics intégrés

## 📚 Documentation technique

### Intégration Gemini

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI-KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const prompt = `
Tu es un expert en développement Next.js et React.
Voici les composants disponibles : ${JSON.stringify(components)}
Génère une page avec le prompt suivant : "${userPrompt}"

Retourne uniquement le code TypeScript/TSX de la page.
`;

const result = await model.generateContent(prompt);
```

### Scanner de composants

Le scanner utilise :
- `@typescript-eslint/parser` pour parser le code TypeScript
- Analyse AST pour extraire les interfaces
- Regex pour trouver les imports et usages

## 🤝 Contribution

Ce projet est en développement actif. Les contributions sont les bienvenues !

## 📄 Licence

Propriétaire - Tous droits réservés

---

**Note** : Ce système permet de générer des pages rapidement tout en maintenant la cohérence du design et la qualité du code grâce à l'analyse des composants existants.

## 📚 Documentation API

Pour plus de détails sur l'architecture de l'API, les limitations actuelles et les améliorations prévues concernant le chargement des composants, consultez [API_AI_DOCUMENTATION.md](./API_AI_DOCUMENTATION.md).

**Point important** : Actuellement, l'API charge seulement les 80 premiers composants (sur 597 disponibles). À l'avenir, il est prévu d'implémenter un système de listes prédéfinies basées sur des critères spécifiques (catégorie de page, type de composant, popularité) pour améliorer la pertinence et la qualité des pages générées.

