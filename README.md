# RankWell Agency - Site Web

Site web moderne et professionnel pour RankWell Agency, construit avec Next.js 15, React 19, TypeScript et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne et responsive** - Compatible avec tous les appareils
- **Performance optimisée** - Next.js avec App Router pour des performances maximales
- **SEO optimisé** - Métadonnées configurées pour un meilleur référencement
- **TypeScript** - Code typé pour une meilleure maintenabilité
- **Tailwind CSS** - Styles utilitaires pour un développement rapide
- **Composants réutilisables** - Architecture modulaire et scalable

## 📋 Pages

- **Accueil** - Hero section, services, statistiques, témoignages et CTA
- **Services** - Liste détaillée de tous les services avec fonctionnalités
- **À propos** - Histoire de l'agence, valeurs et équipe
- **Contact** - Formulaire de contact complet avec informations de contact

## 🛠️ Technologies

- [Next.js 15](https://nextjs.org/) - Framework React
- [React 19](https://react.dev/) - Bibliothèque UI
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [ESLint](https://eslint.org/) - Linter JavaScript/TypeScript

## 🏃 Installation et Démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

### Commandes disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer en mode production
npm start

# Linter
npm run lint
```

## 📁 Structure du Projet

```
rankwell/
├── app/                    # Pages et layouts (App Router)
│   ├── about/             # Page À propos
│   ├── contact/           # Page Contact
│   ├── services/          # Page Services
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Header.tsx         # En-tête avec navigation
│   ├── Footer.tsx         # Pied de page
│   ├── Hero.tsx           # Section hero
│   ├── Services.tsx       # Grille de services
│   ├── Stats.tsx          # Statistiques
│   ├── Testimonials.tsx   # Témoignages clients
│   └── CTA.tsx            # Call-to-action
├── public/                # Fichiers statiques
└── package.json           # Dépendances
```

## 🎨 Personnalisation

### Modifier le contenu

Le contenu du site peut être facilement modifié en éditant les fichiers suivants :

- `app/page.tsx` - Page d'accueil
- `app/services/page.tsx` - Page services
- `app/about/page.tsx` - Page à propos
- `app/contact/page.tsx` - Page contact
- `components/*` - Tous les composants réutilisables

### Modifier les couleurs

Les couleurs peuvent être personnalisées dans le fichier `tailwind.config.ts` ou directement dans les classes Tailwind des composants.

### Ajouter des images

Placez vos images dans le dossier `public/` et utilisez le composant Next.js `Image` pour les afficher :

```tsx
import Image from 'next/image';

<Image 
  src="/votre-image.jpg" 
  alt="Description" 
  width={500} 
  height={300} 
/>
```

## 📧 Configuration du formulaire de contact

Le formulaire de contact dans `app/contact/page.tsx` est actuellement configuré pour afficher un message de succès côté client. Pour l'intégrer avec un backend :

1. Créez une API route dans `app/api/contact/route.ts`
2. Configurez l'envoi d'emails (avec Resend, SendGrid, etc.)
3. Mettez à jour la fonction `handleSubmit` pour appeler votre API

Exemple d'API route :

```typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Logique d'envoi d'email ici
  
  return NextResponse.json({ success: true });
}
```

## 🚀 Déploiement

### Vercel (Recommandé)

Le moyen le plus simple de déployer votre site Next.js est d'utiliser [Vercel](https://vercel.com) :

1. Poussez votre code sur GitHub
2. Importez votre projet sur Vercel
3. Vercel détectera automatiquement Next.js et configurera le build

### Autres plateformes

Le site peut également être déployé sur :
- Netlify
- AWS Amplify
- Digital Ocean
- Toute plateforme supportant Node.js

## 📝 SEO

Les métadonnées SEO sont configurées dans :
- `app/layout.tsx` - Métadonnées globales
- Chaque page peut avoir ses propres métadonnées

Pour améliorer le SEO :
1. Ajoutez un fichier `sitemap.xml`
2. Créez un fichier `robots.txt`
3. Configurez Google Analytics
4. Ajoutez Schema.org markup

## 🔧 Maintenance

### Mettre à jour les dépendances

```bash
npm update
```

### Vérifier les vulnérabilités

```bash
npm audit
npm audit fix
```

## 📄 Licence

Ce projet est sous licence MIT.

## 🤝 Support

Pour toute question ou support, contactez :
- Email : contact@rankwell.agency
- Téléphone : +33 1 23 45 67 89

---

Développé avec ❤️ par RankWell Agency
