# Documentation API AI - Générateur de Pages

## Vue d'ensemble

L'API `/api/generate-page` utilise Google Gemini AI pour générer automatiquement des pages Next.js complètes en analysant les composants disponibles dans le projet.

## Architecture actuelle

### Chargement des composants

L'API charge les composants depuis le dossier `ai-components/components/` qui contient **597 fichiers JSON** décrivant tous les composants du projet.

#### Processus actuel (limitation)

```typescript
// 1. Chargement des fichiers JSON
const componentFiles = fs.readdirSync(componentsDir).slice(0, 100);
const sampleComponents = componentFiles.map((file) => {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
});

// 2. Sélection des 80 premiers pour le prompt
const componentsList = sampleComponents.slice(0, 80).map(comp => ({
  name: comp.name,
  path: comp.path,
  category: comp.category,
  props: comp.props,
  hasProps: comp.props.length > 0,
  description: comp.description,
}));
```

**Limitations actuelles :**
- ✅ Charge seulement les **80 premiers composants** (ordre alphabétique)
- ❌ Ignore les 517 composants restants
- ❌ Sélection non optimisée selon le type de page
- ❌ Peut manquer des composants pertinents pour certaines catégories

### Structure des données

Chaque fichier JSON de composant contient :

```json
{
  "name": "OurMission",
  "path": "@/components/aboutpage-01/OurMission.tsx",
  "description": "Component OurMission from aboutpage-01",
  "category": "about",
  "props": [],
  "hasProps": false,
  "children": [],
  "examples": [],
  "relatedComponents": [],
  "templates": []
}
```

## Améliorations prévues

### Système de listes prédéfinies

Au lieu de charger les 80 premiers composants de manière aléatoire, l'API devrait utiliser des **listes prédéfinies** basées sur des critères spécifiques.

#### Critères de sélection proposés

1. **Par catégorie de page**
   - `about` → Composants de `aboutpage-01`, `aboutpage-02`, `aboutpage-03`
   - `homepage` → Composants de `homepage-01` à `homepage-38`
   - `service` → Composants de `our-services-01`, `our-services-02`, `our-services-03`
   - `feature` → Composants de `features-01`, `features-02`
   - `pricing` → Composants de `pricing-01`, `pricing-02`, `pricing-03`

2. **Par type de composant**
   - Composants avec props (CTAV1, PageHero, ReviewsV3, etc.)
   - Composants templates (OurMission, WhyChooseUs, Feature, etc.)
   - Composants partagés (NavbarOne, FooterOne, RevealAnimation)

3. **Par popularité d'utilisation**
   - Composants les plus utilisés dans les pages existantes
   - Composants recommandés pour chaque type de page

4. **Par fonctionnalité**
   - Composants Hero
   - Composants CTA
   - Composants Features
   - Composants Testimonials
   - Composants Pricing

#### Structure proposée

```typescript
// Liste prédéfinie par catégorie
const componentPresets = {
  about: [
    'aboutpage-01-OurMission',
    'aboutpage-01-WhyChooseUs',
    'aboutpage-01-VisionStatement',
    'aboutpage-02-FinanceIntro',
    'aboutpage-03-Innovation',
    'aboutpage-03-Feature',
    // ... autres composants about
  ],
  homepage: [
    'homepage-01-Hero',
    'homepage-01-About',
    'homepage-01-OurServices',
    'homepage-02-Hero',
    'homepage-02-Feature',
    // ... autres composants homepage
  ],
  service: [
    'our-services-01-*',
    'our-services-02-*',
    // ... autres composants service
  ],
  // ... autres catégories
};

// Composants partagés toujours inclus
const sharedComponents = [
  'shared-header-NavbarOne',
  'shared-footer-FooterOne',
  'shared-PageHero',
  'shared-cta-CTAV1',
  'shared-cta-CTAV2',
  'animation-RevealAnimation',
];
```

#### Avantages

- ✅ **Pertinence** : Seuls les composants adaptés au type de page sont chargés
- ✅ **Performance** : Réduction de la taille du prompt (80 composants pertinents vs 80 aléatoires)
- ✅ **Qualité** : L'IA a accès aux meilleurs composants pour chaque cas d'usage
- ✅ **Maintenabilité** : Listes facilement modifiables et extensibles
- ✅ **Évolutivité** : Possibilité d'ajouter de nouveaux critères facilement

## Implémentation future

### Étape 1 : Créer les listes prédéfinies

Créer un fichier `ai-components/presets.json` :

```json
{
  "about": {
    "components": [
      "aboutpage-01-OurMission",
      "aboutpage-01-WhyChooseUs",
      "aboutpage-01-VisionStatement",
      "aboutpage-02-FinanceIntro",
      "aboutpage-03-Innovation",
      "aboutpage-03-Feature",
      "aboutpage-03-OurVision"
    ],
    "shared": ["PageHero", "CTAV1", "RevealAnimation"]
  },
  "homepage": {
    "components": [
      "homepage-01-Hero",
      "homepage-01-About",
      "homepage-01-OurServices",
      "homepage-02-Hero",
      "homepage-02-Feature",
      "homepage-03-Features"
    ],
    "shared": ["NavbarOne", "FooterOne", "CTAV1"]
  }
}
```

### Étape 2 : Modifier l'API

```typescript
// Charger la liste prédéfinie selon la catégorie
const presetPath = path.join(aiComponentsDir, 'presets.json');
const presets = JSON.parse(fs.readFileSync(presetPath, 'utf-8'));

// Sélectionner les composants pertinents
const relevantComponents = presets[category]?.components || [];
const sharedComponents = presets[category]?.shared || [];

// Charger uniquement les composants sélectionnés
const componentsList = relevantComponents
  .map(compKey => {
    const filePath = path.join(componentsDir, `${compKey}.json`);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
    return null;
  })
  .filter(Boolean);
```

### Étape 3 : Génération automatique des presets

Créer un script qui analyse `ai-components/index.json` pour générer automatiquement les presets basés sur :
- Les composants les plus utilisés par catégorie
- Les patterns de composition observés dans les pages existantes
- Les recommandations basées sur les templates

## Recommandations

1. **Phase 1 (Court terme)** : Créer manuellement les listes prédéfinies pour les catégories principales (about, homepage, service, feature, pricing)

2. **Phase 2 (Moyen terme)** : Développer un script de génération automatique des presets basé sur l'analyse des pages existantes

3. **Phase 3 (Long terme)** : Système de scoring intelligent qui ajuste les presets selon :
   - Les performances des pages générées
   - Les retours utilisateurs
   - Les nouvelles tendances de design

## Métriques à suivre

- **Taux de pertinence** : Pourcentage de composants suggérés réellement utilisés
- **Qualité des pages générées** : Score basé sur la cohérence et la complétude
- **Temps de génération** : Impact de la réduction du nombre de composants
- **Satisfaction utilisateur** : Retours sur la qualité des pages générées

## Conclusion

Le système actuel fonctionne mais est limité par la sélection aléatoire des 80 premiers composants. L'implémentation de listes prédéfinies basées sur des critères pertinents améliorera significativement la qualité et la pertinence des pages générées par l'IA.

---

**Date de création** : Décembre 2024  
**Dernière mise à jour** : Décembre 2024  
**Statut** : Documentation de l'état actuel et des améliorations prévues

