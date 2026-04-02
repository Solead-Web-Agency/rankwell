# Audit des pages villes/régions — Rankwell
> Date : 2026-03-03 | Référence : Lyon (template)

## Résumé exécutif

65 pages auditées. Deux problèmes identifiés :

| Problème | Pages concernées | Gravité |
|----------|-----------------|---------|
| **Chiffres non conformes** (pas le standard Rankwell) | 31 pages (48%) | Haute — chiffres inventés ou locaux |
| **Contenu insuffisant** (volumétrie < Lyon) | 33 pages (51%) | Variable — 3 LAZY, 30 LIGHT |

---

## 1. AUDIT DES CHIFFRES (`chiffresData`)

### Standard attendu (identique à Lyon)

```typescript
{
  id: 1, icon: 'Users',     number: 350, suffix: '+',     label: 'Clients accompagnés'
  id: 2, icon: 'Calendar',  number: 8,   suffix: ' ans',  label: "D'expertise Search"
  id: 3, icon: 'ThumbsUp',  number: 99,  suffix: '%',     label: 'Clients satisfaits'
  id: 4, icon: 'Target',    number: 100, suffix: '%',     label: 'Business centrix'
}
```

### 34 pages CONFORMES ✅

amiens, annecy, auvergne-rhone-alpes, beaune, besancon, blois, bourgogne-franche-comte,
brest, bretagne, caen, centre-val-de-loire, chambery, colmar, deauville, dijon, dubai,
grand-est, grenoble, hauts-de-france, lille, lyon, metz, nancy, normandie, orleans, paris,
quimper, reims, rennes, rouen, saint-malo, strasbourg, tours, valence, vannes

### 31 pages NON CONFORMES ❌

#### Type A — Structure cassée : `value` string INLINE sans `suffix`/`id`/`icon` (15 pages)

Le suffixe est intégré dans le `value` (ex: `"93K"` au lieu de `number: 93, suffix: 'K'`).
Contenu = chiffres locaux inventés.

| Page | Chiffres actuels |
|------|-----------------|
| avignon | "93K" habitants, "4M" visiteurs, "700K" spectateurs, "+60%" mobile |
| biarritz | "25K" habitants, "1.5M" visiteurs, "6" plages, "+75%" international |
| bordeaux | "260K" habitants, "800K" métropole, "6M" touristes, "+60%" mobile |
| cannes | "75K" habitants, "2M" touristes, "200ME" retombées, "+80%" international |
| corse | "340K" habitants, "3M" visiteurs, "2.7Md" euros, "40%" IA |
| la-rochelle | "80K" habitants, "3M" visiteurs, "4500" anneaux, "+75%" mobile |
| marseille | "870K" habitants, "5M" touristes, "1er" port, "+60%" mobile |
| nice | "340K" habitants, "4M" touristes, "3ème" aéroport, "+70%" international |
| nouvelle-aquitaine | "6M" habitants, "30M" touristes, "84K" km², "40%" IA |
| pau | "77K" habitants, "165K" agglo, "8000" emplois aéro, "+55%" mobile |
| pays-de-la-loire | "3.8M" habitants, "660K" Nantes, "2ème" emploi, "40%" IA |
| poitiers | "90K" habitants, "28K" étudiants, "2M" Futuroscope, "+55%" mobile |
| provence-alpes-cote-d-azur | "5M" habitants, "31M" touristes, "+65%" mobile, "40%" IA |
| rochefort | "25K" habitants, "500K" visiteurs, "400" ans, "+65%" mobile |
| saint-remy-de-provence | "10K" habitants, "2M" visiteurs, "70%" international, "+80%" mobile |

#### Type B — Structure incorrecte : `value` string + `suffix` séparé, sans `id`/`icon` (15 pages)

Pattern récurrent : "40% IA, 3x trafic, Xk habitants, 95% satisfaits"

| Page | Chiffres actuels |
|------|-----------------|
| angers | 40% IA, 3x trafic, 155k habitants, 95% satisfaits |
| angouleme | 40% IA, 3x trafic, 110k agglo, 95% satisfaits |
| carcassonne | 40% IA, 3M visiteurs Cité, 46k habitants, 95% satisfaits |
| cholet | 40% IA, 3x trafic, 55k habitants, 95% satisfaits |
| la-baule | 40% IA, 9km plage, 16k habitants, 95% satisfaits |
| le-mans | 40% IA, 250k spectateurs 24H, 145k habitants, 95% satisfaits |
| limoges | 40% IA, 3x trafic, 130k habitants, 95% satisfaits |
| montpellier | 40% IA, 3x trafic, 500k métropole, 95% satisfaits |
| nantes | 40% IA, 3x trafic, 660k métropole, 95% satisfaits |
| nimes | 40% IA, 3x trafic, 150k agglo, 95% satisfaits |
| occitanie | 40% IA, 3x trafic, 6M habitants, 95% satisfaits |
| perpignan | 40% IA, 3x trafic, 120k habitants, 95% satisfaits |
| saumur | 40% IA, 3x trafic, 27k habitants, 95% satisfaits |
| toulouse | 40% IA, 3x trafic, 1.4M métropole, 95% satisfaits |

#### Type C — Structure OK, contenu incorrect (1 page)

| Page | Chiffres actuels |
|------|-----------------|
| aix-en-provence | 145K habitants, 40K étudiants, 3M visiteurs, 55% mobile |

---

## 2. AUDIT DE VOLUMÉTRIE (contenu vs Lyon)

### Volumes de référence (Lyon)

| Section | Lyon |
|---------|------|
| intro (total chars) | 777 |
| geoEducation (avg desc) | 218 ch |
| callout | 293 ch |
| approche (avg desc) | 179 ch |
| pourQui (avg desc) | 149 ch |
| expertises (avg desc) | 114 ch |
| process (avg desc) | 63 ch |
| comparaison (lignes) | 5 |
| FAQ (avg réponse) | 275 ch |

### 32 pages OK ✅ (volume comparable à Lyon)

amiens, beaune, besancon, blois, bourgogne-franche-comte, brest, bretagne, caen,
centre-val-de-loire, colmar, deauville, dijon, grand-est, hauts-de-france, lille,
lyon, marseille, metz, nancy, nice, normandie, orleans, paris, provence-alpes-cote-d-azur,
quimper, reims, rennes, rouen, saint-malo, strasbourg, tours, vannes

### 3 pages LAZY 🔴 (réécriture complète nécessaire)

#### Saumur — Le pire

| Section | Saumur | Lyon | Déficit |
|---------|--------|------|---------|
| geoEducation avg | 62 ch | 218 ch | **-72%** |
| approche avg | 70 ch | 179 ch | **-61%** |
| pourQui avg | 52 ch | 149 ch | **-65%** |
| expertises avg | 37 ch | 114 ch | **-68%** |
| FAQ avg réponse | 78 ch | 275 ch | **-72%** |
| callout | 186 ch | 293 ch | -37% |

#### La Baule — Même problème

| Section | La Baule | Lyon | Déficit |
|---------|----------|------|---------|
| geoEducation avg | 62 ch | 218 ch | **-72%** |
| approche avg | 71 ch | 179 ch | **-60%** |
| pourQui avg | 59 ch | 149 ch | **-60%** |
| expertises avg | 37 ch | 114 ch | **-68%** |
| FAQ avg réponse | 84 ch | 275 ch | **-69%** |

#### Pau

| Section | Pau | Lyon | Déficit |
|---------|-----|------|---------|
| callout | 140 ch | 293 ch | **-52%** |
| pourQui avg | 74 ch | 149 ch | **-50%** |
| FAQ avg réponse | 131 ch | 275 ch | **-52%** |
| approche avg | 108 ch | 179 ch | -40% |

### 30 pages LIGHT 🟡 (sections à enrichir)

#### Sections les plus déficitaires (récurrence)

| Section problématique | Pages touchées | Déficit moyen |
|----------------------|----------------|---------------|
| FAQ réponses courtes | 28/30 | -30 à -50% |
| pourQui descriptions | 26/30 | -25 à -45% |
| approche descriptions | 22/30 | -20 à -40% |
| callout court | 19/30 | -20 à -50% |
| geoEducation descriptions | 16/30 | -15 à -30% |

#### Grosses villes LIGHT (risque réputationnel)

| Ville | Sections déficitaires |
|-------|----------------------|
| **Bordeaux** | callout -50%, pourQui -32%, FAQ -24% |
| **Toulouse** | geoEd -29%, approche -30%, pourQui -21%, FAQ -30% |
| **Nantes** | geoEd -33%, approche -29%, pourQui -26%, FAQ -33% |
| **Montpellier** | geoEd -29%, approche -30%, pourQui -20%, FAQ -31% |

#### Pages LIGHT proches du seuil LAZY (attention)

| Ville | Points critiques |
|-------|-----------------|
| **Cholet** | FAQ avg 100 ch, approche avg 98 ch, expertises avg 72 ch |
| **Annecy** | FAQ avg 137 ch, pourQui avg 85 ch |
| **Chambéry** | FAQ avg 140 ch, pourQui avg 84 ch |
| **Poitiers** | FAQ avg 121 ch, pourQui avg 82 ch |
| **Rochefort** | FAQ avg 131 ch, pourQui avg 80 ch |
| **Valence** | FAQ avg 145 ch, pourQui avg 84 ch |
| **Biarritz** | FAQ avg 142 ch, callout 139 ch |

#### Liste complète des 30 pages LIGHT

aix-en-provence, angers, angouleme, annecy, auvergne-rhone-alpes, avignon, biarritz,
bordeaux, cannes, carcassonne, chambery, cholet, corse, dubai, grenoble, la-baule,
la-rochelle, le-mans, limoges, montpellier, nantes, nimes, nouvelle-aquitaine,
occitanie, pays-de-la-loire, perpignan, poitiers, rochefort, saint-remy-de-provence,
toulouse, valence

---

## 3. PLAN D'ACTION RECOMMANDÉ

### Priorité 1 — Chiffres (31 pages, rapide)

Remplacer `chiffresData` par le standard Rankwell sur les 31 pages non conformes.
Correction mécanique, pas de rédaction nécessaire.

### Priorité 2 — Pages LAZY (3 pages, réécriture)

Saumur, La-Baule, Pau : réécrire toutes les sections courtes au niveau Lyon.
Chaque description doit être un vrai paragraphe, pas un one-liner.

### Priorité 3 — Grosses villes LIGHT (4 pages, enrichissement)

Bordeaux, Toulouse, Nantes, Montpellier : enrichir les sections FAQ, pourQui,
approche et callout pour atteindre le niveau Lyon.

### Priorité 4 — Autres LIGHT (26 pages, enrichissement progressif)

Enrichir les sections FAQ et pourQui en priorité (les plus déficitaires),
puis approche et callout.
