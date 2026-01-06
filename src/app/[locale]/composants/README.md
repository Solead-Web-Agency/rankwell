# Page Composants - Documentation

## Accès

URL : `/composants?k=ouvretoi`

Page protégée listant tous les composants utilisés sur le site avec previews.

---

## Fonctionnement

### Structure des fichiers

```
src/app/[locale]/composants/
├── page.tsx            # Logique serveur : extraction des composants
├── ComposantsClient.tsx # UI client : affichage + modal preview
├── previews.tsx        # Liste des composants + rendu des previews lorem
└── README.md           # Cette documentation
```

### Ce qui est dynamique

- **Composants d'une page** : Extraits automatiquement depuis les imports `@/components/` du `page.tsx`
- **Ordre des composants** : Détecté depuis l'ordre d'apparition dans le JSX

### Ce qui est statique (à mettre à jour manuellement)

- **Liste des pages** : Array `PAGES` dans `page.tsx`
- **Liste des composants** : Array `ALL_COMPONENTS` dans `previews.tsx`
- **Previews** : Fonction `renderPreview()` dans `previews.tsx`

---

## Comment mettre à jour

### 1. Ajouter une nouvelle page

Dans `page.tsx`, ajouter une entrée dans le tableau `PAGES` :

```typescript
const PAGES = [
  // ... pages existantes
  { url: '/nouvelle-page', name: 'Nom affiché', pagePath: 'nouvelle-page' },
];
```

- `url` : URL de la page (sans locale)
- `name` : Nom affiché dans l'interface
- `pagePath` : Chemin relatif depuis `src/app/[locale]/`

### 2. Ajouter un nouveau composant

#### Étape 1 : Ajouter à la liste `ALL_COMPONENTS` dans `previews.tsx`

```typescript
export const ALL_COMPONENTS: ComponentDefinition[] = [
  // ... composants existants
  { name: 'NouveauComposant', category: 'services', description: 'Description courte' },
];
```

Categories possibles : `'global'`, `'homepage'`, `'services'`

#### Étape 2 : Ajouter l'import en haut de `previews.tsx`

```typescript
import {
  // ... imports existants
  NouveauComposant,
} from '@/components/shared/services';
```

#### Étape 3 : Ajouter le case dans `renderPreview()`

```typescript
case 'NouveauComposant':
  return (
    <NouveauComposant
      sectionId="preview-nouveau"
      badge="Lorem"
      title="Lorem ipsum dolor"
      // ... autres props avec données lorem ipsum
    />
  );
```

**Important** : Vérifier les props requises du composant dans son fichier source pour éviter les erreurs TypeScript.

---

## Comportement de l'interface

### Colonne gauche
- Liste des composants **utilisés** groupés par catégorie
- Clic → ouvre le preview en modal
- Hover → met en avant toutes les occurrences dans les pages

### Colonne droite
- Liste des pages avec leurs composants dans l'ordre d'apparition
- Hover sur un composant → synchronisé avec la colonne gauche

### Hover persistant
L'effet de mise en avant reste actif jusqu'au survol d'un autre composant (pas de reset quand la souris va dans le vide).

---

## Fichiers liés

- Composants shared : `src/components/shared/global/`, `homepage/`, `services/`
- Chaque composant a un fichier avec ses types exportés (vérifier les props requises)
