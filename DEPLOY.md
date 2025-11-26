# 🚀 Guide de Déploiement sur Vercel

## Option 1 : Déploiement via l'interface Vercel (Recommandé)

### Étape 1 : Pousser sur GitHub

1. **Créer un repository sur GitHub** :
   - Allez sur https://github.com/new
   - Nommez-le `rankwell` (ou autre nom)
   - Ne cochez RIEN (pas de README, pas de .gitignore)
   - Cliquez sur "Create repository"

2. **Pousser votre code** :
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/rankwell.git
   git branch -M main
   git push -u origin main
   ```

### Étape 2 : Déployer sur Vercel

1. **Allez sur Vercel** :
   - Visitez https://vercel.com
   - Connectez-vous avec votre compte GitHub

2. **Importer le projet** :
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository `rankwell`
   - Cliquez sur "Import"

3. **Configuration (automatique)** :
   - Vercel détecte automatiquement Next.js
   - Framework Preset : `Next.js` ✅
   - Build Command : `npm run build` ✅
   - Output Directory : `.next` ✅
   - Laissez tout par défaut

4. **Déployer** :
   - Cliquez sur "Deploy"
   - Attendez 2-3 minutes ⏱️
   - Votre site est en ligne ! 🎉

---

## Option 2 : Déploiement via Vercel CLI

### Étape 1 : Installer Vercel CLI

```bash
npm install -g vercel
```

### Étape 2 : Se connecter

```bash
vercel login
```

### Étape 3 : Déployer

```bash
# Depuis le dossier du projet
cd /Users/nathancaudeli/Github/rankwell
vercel
```

Suivez les instructions :
- Set up and deploy : `Y`
- Which scope : Votre compte
- Link to existing project : `N`
- Project name : `rankwell`
- Directory : `./`
- Override settings : `N`

Le déploiement démarre automatiquement !

### Déployer en production

```bash
vercel --prod
```

---

## 🎯 Après le déploiement

### Votre site est disponible à :
- URL de production : `https://rankwell.vercel.app`
- URL personnalisée : Configuration dans Vercel Dashboard

### Configurer un domaine personnalisé

1. Allez dans Vercel Dashboard
2. Sélectionnez votre projet
3. Allez dans "Settings" → "Domains"
4. Ajoutez votre domaine (ex: `rankwell.agency`)
5. Suivez les instructions pour configurer les DNS

### Variables d'environnement

Si vous devez ajouter des variables (API keys, etc.) :

1. Vercel Dashboard → Votre projet
2. "Settings" → "Environment Variables"
3. Ajoutez vos variables
4. Redéployez avec `vercel --prod`

---

## 🔄 Mises à jour automatiques

Après le premier déploiement :

1. Faites vos modifications localement
2. Commitez :
   ```bash
   git add .
   git commit -m "Description des changements"
   git push
   ```
3. **Vercel déploie automatiquement** ! ✨

Chaque push sur `main` = déploiement automatique en production
Chaque push sur une autre branche = preview deployment

---

## 📊 Fonctionnalités Vercel

### Analytics
- Dashboard Vercel → "Analytics"
- Suivez vos visiteurs, performances, etc.

### Logs
- Dashboard Vercel → "Deployments" → Cliquez sur un déploiement
- Voyez les logs en temps réel

### Preview Deployments
- Chaque PR GitHub = URL de preview automatique
- Parfait pour tester avant production

---

## 🆘 Résolution de problèmes

### Le build échoue
```bash
# Testez le build localement
npm run build

# Si ça fonctionne localement, c'est un problème Vercel
# Vérifiez les logs dans le dashboard
```

### Variables d'environnement manquantes
- Ajoutez-les dans Vercel Dashboard
- N'oubliez pas de préfixer les variables client avec `NEXT_PUBLIC_`

### Erreur 404
- Vérifiez que `vercel.json` est bien présent
- Vérifiez la structure des routes dans `app/`

---

## 📝 Commandes utiles

```bash
# Voir les déploiements
vercel ls

# Voir les logs
vercel logs

# Retirer un projet
vercel remove rankwell

# Ouvrir le dashboard
vercel inspect
```

---

## ✅ Checklist avant déploiement

- [x] Build local réussi (`npm run build`)
- [x] Tests locaux OK (`npm run dev`)
- [x] Code committé sur Git
- [x] Repository GitHub créé
- [x] Code poussé sur GitHub
- [x] Compte Vercel créé
- [ ] Projet importé sur Vercel
- [ ] Premier déploiement réussi
- [ ] Site accessible via l'URL Vercel

---

🎉 **Votre site RankWell sera en ligne en quelques minutes !**

Pour toute question : https://vercel.com/docs

