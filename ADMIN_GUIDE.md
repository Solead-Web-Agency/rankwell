# 🚀 Guide d'utilisation du Générateur de Pages IA

## Configuration initiale

### 1. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Clé API Gemini (obtenez-la sur https://aistudio.google.com/app/apikey)
# Le nouveau SDK utilise GEMINI_API_KEY par défaut, mais GEMINI_KEY fonctionne aussi
GEMINI_API_KEY=your-gemini-api-key-here
# ou
GEMINI_KEY=your-gemini-api-key-here

# Mot de passe administrateur (par défaut: admin123)
ADMIN_PASSWORD=admin123
```

### 2. Scanner les composants (première fois)

Avant d'utiliser le générateur, vous devez scanner tous les composants du projet :

```bash
bunx tsx src/utils/component-scanner.ts
```

Cela va créer :
- `ai-components/index.json` - Index de toutes les pages
- `ai-components/components/*.json` - Documentation de chaque composant
- `ai-components/templates/*.json` - Templates de combinaisons

## Utilisation

### 1. Accéder à l'interface admin

Naviguez vers : `http://localhost:3000/admin/page-generator`

Vous serez demandé un mot de passe (par défaut : `admin123` ou celui défini dans `ADMIN_PASSWORD`).

### 2. Générer une page

1. **Remplir les champs** :
   - **Route** : `/ma-nouvelle-page` (sans le slash initial si vous préférez)
   - **Nom de la page** : `Ma Nouvelle Page`
   - **Description** : Décrivez ce que vous voulez (ex: "Créer une page contact avec formulaire, carte et section CTA")

2. **Cliquer sur "Générer la page"**

3. **Vérifier la prévisualisation** :
   - Les composants suggérés
   - Les métadonnées SEO
   - Le code généré

4. **Valider ou annuler** :
   - Cliquez sur "✓ Valider et créer" pour créer la page
   - Ou "✗ Annuler" pour recommencer

### 3. Exemples de prompts

#### Page de contact
```
Créer une page contact avec :
- Hero section avec titre "Contactez-nous"
- Formulaire de contact
- Carte Google Maps
- Section CTA pour newsletter
```

#### Page à propos
```
Créer une page à propos avec :
- Hero section
- Section équipe avec 4 membres
- Section témoignages
- Section valeurs de l'entreprise
- CTA pour contact
```

#### Page de services
```
Créer une page services avec :
- Hero section
- Liste de 6 services avec icônes
- Section pricing
- Section FAQ
- CTA pour essai gratuit
```

## Structure des fichiers générés

Quand vous validez une page, le système crée :

```
src/app/[route]/page.tsx
```

Par exemple, pour la route `/contact`, cela crée :
```
src/app/contact/page.tsx
```

## API Routes disponibles

### `GET /api/analyze-components`
Retourne tous les composants disponibles avec leurs détails.

### `POST /api/generate-page`
Génère une page via Gemini AI.

**Body :**
```json
{
  "prompt": "Description de la page",
  "route": "/ma-page",
  "pageName": "Ma Page",
  "category": "page"
}
```

### `POST /api/create-page`
Crée la page dans le système de fichiers.

**Body :**
```json
{
  "route": "/ma-page",
  "pageName": "Ma Page",
  "pageCode": "...",
  "metadata": {...},
  "menuSuggestion": {...}
}
```

## Sécurité

⚠️ **Important** :
- Changez le mot de passe `ADMIN_PASSWORD` en production
- Ne commitez jamais votre fichier `.env.local`
- Le mot de passe est stocké dans `sessionStorage` côté client (temporaire)

## Dépannage

### Erreur "GEMINI_KEY not configured"
Vérifiez que votre fichier `.env.local` contient bien `GEMINI_KEY=...`

### Erreur "Components database not found"
Exécutez le scanner : `bunx tsx src/utils/component-scanner.ts`

### La page générée ne compile pas
- Vérifiez les imports des composants
- Assurez-vous que les composants utilisés existent bien
- Vérifiez la syntaxe TypeScript

### Le code généré contient du markdown
Le système nettoie automatiquement le code, mais si des problèmes persistent, vérifiez le prompt envoyé à Gemini.

## Prochaines étapes

- [ ] Améliorer la mise à jour automatique du menu
- [ ] Ajouter la prévisualisation en temps réel
- [ ] Permettre l'édition du code avant validation
- [ ] Historique des pages générées
- [ ] Templates personnalisés

