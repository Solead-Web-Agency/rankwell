# 🔧 Fix: Contenu qui ne s'affiche pas sur Vercel lors des changements de page

## 🐛 Problème

Le contenu ne s'affiche pas lors des changements de page **uniquement en production sur Vercel**, mais fonctionne correctement en local.

## ✅ Solutions Appliquées

### 1. RouteChangeHandler amélioré

**Fichier :** `src/components/providers/RouteChangeHandler.tsx`

**Changements :**
- Ajout de `gsap.killTweensOf('*')` pour tuer toutes les animations en cours
- Augmentation du délai avant le refresh (100ms au lieu de immédiat)
- Triple `requestAnimationFrame` au lieu de double pour s'assurer que le DOM est complètement rendu
- Ajout d'un cleanup avec `clearTimeout`

**Pourquoi ça corrige :**
En production (SSG), le DOM peut prendre plus de temps à se stabiliser après un changement de route. Le délai supplémentaire et les rAF multiples garantissent que ScrollTrigger se rafraîchit après le rendu complet.

### 2. RevealAnimation amélioré

**Fichier :** `src/components/animation/RevealAnimation.tsx`

**Changements :**
- Ajout de `usePathname()` pour tracker les changements de route
- Reset des propriétés GSAP avec `gsap.set(element, { clearProps: 'all' })`
- Ajout de `pathname` dans les dépendances de `useGSAP`
- Fonction de cleanup qui tue les animations et ScrollTriggers spécifiques à l'élément

**Pourquoi ça corrige :**
Les animations doivent se réinitialiser à chaque changement de route. Sans le `pathname` dans les dépendances, `useGSAP` ne se réexécute pas en production après navigation.

## 🧪 Tester en Production

Après déploiement sur Vercel, testez :

1. **Navigation entre pages :**
   - Cliquez sur plusieurs liens dans le menu
   - Vérifiez que le contenu s'affiche immédiatement

2. **Animations :**
   - Scrollez sur une nouvelle page
   - Vérifiez que les animations RevealAnimation se déclenchent

3. **Performance :**
   - Ouvrez les DevTools → Performance
   - Vérifiez qu'il n'y a pas de lags de 100ms+ lors de la navigation

## 🔍 Si le Problème Persiste

### Solution A : Désactiver temporairement les animations en production

Dans `RevealAnimation.tsx`, ajoutez en haut :

```typescript
const isProduction = process.env.NODE_ENV === 'production';
```

Et modifiez le useGSAP :

```typescript
useGSAP(() => {
  const element = elementRef.current;
  if (!element) return;

  // En production, désactiver les animations temporairement
  if (isProduction && instant === false) {
    element.style.opacity = '1';
    element.style.filter = 'blur(0)';
    return;
  }
  
  // ... reste du code
```

### Solution B : Forcer le rechargement complet des pages

Dans `next.config.ts`, désactiver le prefetch :

```typescript
const nextConfig: NextConfig = {
  experimental: {
    optimisticClientCache: false,
  },
  // ... reste de la config
};
```

### Solution C : Utiliser un loading state global

Créer un contexte de navigation :

```typescript
// src/context/NavigationContext.tsx
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const NavigationContext = createContext({ isNavigating: false });

export function NavigationProvider({ children }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
```

Puis dans `ConditionalLayout.tsx` :

```typescript
const { isNavigating } = useNavigation();

if (isNavigating) {
  return <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin ...">Loading...</div>
  </div>;
}
```

### Solution D : Désactiver Turbopack en production

Si le problème vient de Turbopack, dans `package.json` :

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",  // Sans --turbopack
    "start": "next start"
  }
}
```

## 📊 Diagnostic

Pour identifier la cause exacte, ajoutez des logs :

```typescript
// Dans RouteChangeHandler.tsx
useEffect(() => {
  console.log('🔄 Route change detected:', pathname);
  
  // ... votre code ...
  
  const timer = setTimeout(() => {
    console.log('✅ ScrollTrigger refreshed');
  }, 100);
}, [pathname]);
```

Vérifiez la console du navigateur sur Vercel pour voir si :
- Les routes changent bien
- Le refresh se déclenche
- Des erreurs JavaScript apparaissent

## 🚀 Déploiement

```bash
# Commit les changements
git add .
git commit -m "fix: amélioration navigation et animations en production"
git push

# Vercel déploiera automatiquement
```

## 📝 Checklist Post-Fix

- [ ] Le contenu s'affiche immédiatement après navigation
- [ ] Les animations fonctionnent correctement
- [ ] Pas de flash de contenu invisible (FOUC)
- [ ] Pas de ralentissement perceptible
- [ ] Les ScrollTriggers se déclenchent au scroll
- [ ] Pas d'erreurs dans la console navigateur

## 🔗 Ressources

- [Next.js App Router Navigation](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [GSAP ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [React useEffect Cleanup](https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed)

---

**Date :** 6 janvier 2026  
**Statut :** ✅ Corrections appliquées  
**Prêt pour déploiement**

