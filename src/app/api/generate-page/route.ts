import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { prompt, route, pageName, category } = await request.json();

    if (!prompt || !route || !pageName) {
      return NextResponse.json(
        { error: 'Missing required fields: prompt, route, pageName' },
        { status: 400 }
      );
    }

    // Vérifier la clé API (le nouveau SDK utilise GEMINI_API_KEY par défaut)
    const apiKey = process.env.GEMINI_API_KEY || process.env.GEMINI_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY or GEMINI_KEY not configured in environment variables' },
        { status: 500 }
      );
    }
    
    // Définir GEMINI_API_KEY si elle n'existe pas mais GEMINI_KEY existe
    if (!process.env.GEMINI_API_KEY && process.env.GEMINI_KEY) {
      process.env.GEMINI_API_KEY = process.env.GEMINI_KEY;
    }

    // Charger les composants disponibles
    const aiComponentsDir = path.join(process.cwd(), 'ai-components');
    const indexPath = path.join(aiComponentsDir, 'index.json');
    
    if (!fs.existsSync(indexPath)) {
      return NextResponse.json(
        { error: 'Components database not found. Please run the scanner first.' },
        { status: 404 }
      );
    }

    const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8'));
    
    // Charger quelques composants populaires pour le prompt
    const componentsDir = path.join(aiComponentsDir, 'components');
    const componentFiles = fs.readdirSync(componentsDir).slice(0, 100); // Limiter pour le prompt
    const sampleComponents = componentFiles.map((file) => {
      const filePath = path.join(componentsDir, file);
      return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    });

    // Préparer le prompt pour Gemini avec plus de contexte
    const componentsList = sampleComponents.slice(0, 80).map(comp => ({
      name: comp.name,
      path: comp.path,
      category: comp.category,
      props: comp.props, // Toutes les props pour mieux comprendre
      hasProps: comp.props.length > 0, // Indique si le composant accepte des props
      description: comp.description,
    }));
    
    // Grouper les composants par catégorie pour faciliter la sélection
    const componentsByCategory = componentsList.reduce((acc, comp) => {
      if (!acc[comp.category]) acc[comp.category] = [];
      acc[comp.category].push(comp);
      return acc;
    }, {} as Record<string, typeof componentsList>);

    const systemPrompt = `Tu es un expert en développement Next.js 16 et React 19. 
Tu dois générer une page Next.js complète en UTILISANT LA STRUCTURE des composants existants mais en REMPLAÇANT leur contenu hardcodé par du contenu pertinent basé sur le prompt utilisateur.

PRINCIPE FONDAMENTAL:
- Les composants existants (OurMission, WhyChooseUs, Feature, etc.) ont une STRUCTURE et un DESIGN prédéfinis
- Tu dois COPIER leur code (section, div, classes CSS, RevealAnimation, structure HTML)
- Tu dois REMPLACER leur contenu textuel (titres, paragraphes, badges) par du contenu pertinent basé sur le prompt
- Garde la structure, les classes, les animations
- Change uniquement les textes pour qu'ils correspondent au sujet du prompt

COMPOSANTS DISPONIBLES:
${JSON.stringify(componentsList, null, 2)}

COMPOSANTS PAR CATÉGORIE:
${JSON.stringify(componentsByCategory, null, 2)}

GUIDE D'UTILISATION DES COMPOSANTS (PRINCIPE):
1. Composants avec props (hasProps: true): Utilise-les avec des props personnalisées basées sur le prompt
   Exemples: CTAV1, CTAV2, PageHero, ReviewsV3, OurAchievements
   
2. Composants templates (hasProps: false): COPIE leur CODE COMPLET et REMPLACE le contenu hardcodé
   Exemples: OurMission, WhyChooseUs, Feature, Innovation, Hero, About
   - Regarde leur structure (section, div, classes CSS, RevealAnimation)
   - Copie cette structure dans ta page
   - Remplace les textes (h2, p, span) par du contenu pertinent basé sur le prompt
   - Garde les classes, les animations, la mise en page
   
3. Sélection selon la catégorie de page:
   - "about" → Utilise la structure de aboutpage-01, aboutpage-02, aboutpage-03
   - "homepage" → Utilise la structure de homepage-01, homepage-02, etc.
   - "service" → Utilise la structure de our-services-01, our-services-02, etc.
   - "feature" → Utilise la structure de features-01, features-02
   - "pricing" → Utilise la structure de pricing-01, pricing-02, pricing-03
   
4. Structure typique d'une page:
   - NavbarOne (OBLIGATOIRE - utiliser tel quel avec className et btnClassName standards)
   - PageHero (avec props) pour l'en-tête
   - Code complet des composants templates avec contenu modifié
   - CTAV1/CTAV2/CTAV4 (avec props) pour les appels à l'action
   - FooterOne (OBLIGATOIRE - utiliser tel quel sans modification)

STRUCTURE ATTENDUE:
1. Imports nécessaires:
   - NavbarOne depuis @/components/shared/header/NavbarOne (OBLIGATOIRE - utiliser tel quel sans modification)
   - FooterOne depuis @/components/shared/footer/FooterOne (OBLIGATOIRE - utiliser tel quel sans modification)
   - PageHero depuis @/components/shared/PageHero
   - RevealAnimation depuis @/components/animation/RevealAnimation (OBLIGATOIRE pour les sections)
   - Composants avec props (CTAV1, CTAV2, ReviewsV3, etc.) si tu les utilises avec props
   - NE PAS importer les composants templates - génère leur code directement dans la page
2. Import de defaultMetadata depuis @/utils/generateMetaData
3. Export des métadonnées SEO avec Metadata de Next.js
4. Composant de page qui retourne:
   - NavbarOne avec className et btnClassName standards (utiliser tel quel, ne pas modifier)
   - PageHero avec title et heading personnalisés basés sur le prompt
   - CODE COMPLET des composants templates avec contenu modifié (pas d'import, code inline)
   - Composants avec props (CTAV1, etc.) avec du contenu personnalisé
   - FooterOne (utiliser tel quel, ne pas modifier)
5. Utiliser Fragment de React pour wrapper
6. Ajouter displayName et export default
7. Utiliser les classes Tailwind du projet

EXEMPLE DE STRUCTURE COMPLÈTE (page About):
\`\`\`tsx
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterOne from '@/components/shared/footer/FooterOne';
import PageHero from '@/components/shared/PageHero';
import CTAV1 from '@/components/shared/cta/CTAV1';
import RevealAnimation from '@/components/animation/RevealAnimation';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '${pageName} - NextSaaS',
  description: 'Description de la page basée sur le prompt',
};

const ${pageName.replace(/\s+/g, '')}Page = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <PageHero title="${pageName}" heading="Titre principal basé sur le prompt" link="/${route}" />
        
        {/* Code complet de VisionStatement avec contenu modifié */}
        <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
          <div className="main-container">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-5">Badge basé sur le prompt</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mb-4 text-heading-2">Titre basé sur le prompt</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-body-text">Contenu pertinent basé sur le prompt...</p>
            </RevealAnimation>
          </div>
        </section>
        
        {/* Code complet de OurMission avec contenu modifié */}
        <section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
          <div className="main-container">
            {/* Structure complète avec contenu modifié */}
          </div>
        </section>
        
        <CTAV1
          ctaHeading="Prêt à commencer ?"
          description="Description basée sur le prompt"
          ctaBtnText="Contactez-nous"
          badgeText="Nouveau"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

${pageName.replace(/\s+/g, '')}Page.displayName = '${pageName.replace(/\s+/g, '')}Page';
export default ${pageName.replace(/\s+/g, '')}Page;
\`\`\`

IMPORTANT: 
- NavbarOne et FooterOne doivent être inclus dans le code généré
- Utilise-les TELS QUELS avec les props standards (className et btnClassName pour NavbarOne)
- NE PAS modifier leur structure ou leur contenu interne

RÈGLES IMPORTANTES:
- Utilise uniquement les composants listés ci-dessus
- Respecte la structure Next.js App Router
- Ajoute des props appropriées aux composants selon leurs interfaces
- Utilise les classes Tailwind CSS du projet
- Le code doit être prêt à être utilisé directement
- Ne génère QUE le code, sans markdown, sans backticks, sans explications

UTILISATION DES COMPOSANTS (CRITIQUE - PRINCIPE FONDAMENTAL):
- Le principe est SIMPLE: Utilise les composants existants MAIS remplace leur contenu hardcodé par du contenu pertinent basé sur le prompt
- Tu dois générer le CODE COMPLET des composants avec le contenu modifié directement dans la page
- Ne pas juste importer et utiliser les composants tels quels - tu dois copier leur structure et modifier le contenu

EXEMPLE CONCRET DU PRINCIPE (basé sur OurMission réel):
Le composant OurMission a cette structure complète:
\`\`\`tsx
<section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
  <div className="main-container">
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">
      <div className="w-full lg:w-1/2">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-cyan mb-5">Our Mission</span>
        </RevealAnimation>
        <div className="space-y-3 md:max-w-[540px]">
          <RevealAnimation delay={0.2}>
            <h2>To help teams work and grow with smart, secure software.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>We help companies turn messy workflows into manageable systems...</p>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.4}>
        <div className="w-full lg:w-1/2 max-w-[650px] rounded-[20px] bg-background-2 dark:bg-background-5 p-5 md:p-8 xl:p-[50px]">
          {/* Contenu visuel complexe avec images, cartes, etc. */}
        </div>
      </RevealAnimation>
    </div>
  </div>
</section>
\`\`\`

Si le prompt parle de "SEO et IA", tu dois générer le MÊME CODE STRUCTURE mais avec le contenu textuel modifié:
\`\`\`tsx
<section className="relative pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
  <div className="main-container">
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">
      <div className="w-full lg:w-1/2">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-cyan mb-5">Introduction au SEO et IA</span>
        </RevealAnimation>
        <div className="space-y-3 md:max-w-[540px]">
          <RevealAnimation delay={0.2}>
            <h2>L'Intelligence Artificielle transforme le référencement naturel</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p>L'IA révolutionne la manière dont les moteurs de recherche analysent et classent le contenu web. Les algorithmes modernes utilisent l'apprentissage automatique pour mieux comprendre l'intention des utilisateurs et fournir des résultats plus pertinents et personnalisés.</p>
          </RevealAnimation>
        </div>
      </div>
      <RevealAnimation delay={0.4}>
        <div className="w-full lg:w-1/2 max-w-[650px] rounded-[20px] bg-background-2 dark:bg-background-5 p-5 md:p-8 xl:p-[50px]">
          {/* Tu peux garder la structure visuelle ou l'adapter selon le prompt */}
        </div>
      </RevealAnimation>
    </div>
  </div>
</section>
\`\`\`

RÈGLE D'OR: MÊME structure HTML, MÊMES classes CSS, MÊMES animations RevealAnimation, mais CONTENU TEXTUEL différent basé sur le prompt utilisateur.

- Utilise la STRUCTURE et le DESIGN des composants existants
- Remplace TOUT le contenu textuel par du contenu pertinent basé sur le prompt
- Garde les classes CSS, la structure HTML, les animations RevealAnimation
- Change uniquement les textes, titres, descriptions pour qu'ils correspondent au prompt

EXEMPLE D'UTILISATION CORRECTE (PRINCIPE):
\`\`\`tsx
import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterOne from '@/components/shared/footer/FooterOne';
import RevealAnimation from '@/components/animation/RevealAnimation';
import PageHero from '@/components/shared/PageHero';
import CTAV1 from '@/components/shared/cta/CTAV1';
import { Fragment } from 'react';

// ✅ CORRECT: Structure complète de la page
const MyPage = () => {
  return (
    <Fragment>
      {/* ✅ CORRECT: NavbarOne utilisé tel quel sans modification */}
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5">
        {/* ✅ CORRECT: PageHero avec contenu personnalisé */}
        <PageHero title="Rapport SEO" heading="Impact de l'IA sur le SEO" link="/rapport-seo" />

// ✅ CORRECT: Copier la STRUCTURE de OurMission mais avec contenu modifié
// Regarde le composant OurMission pour sa structure (section, main-container, RevealAnimation, etc.)
// Puis génère le même code mais avec du contenu pertinent basé sur le prompt
<section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px] bg-background-2 dark:bg-background-5">
  <div className="main-container">
    <div className="flex items-center flex-wrap lg:flex-nowrap gap-8 lg:gap-4 xl:gap-8">
      <div className="w-full lg:w-1/2">
        <RevealAnimation delay={0.1}>
          <span className="badge badge-cyan mb-5">Introduction au SEO et IA</span>
        </RevealAnimation>
        <div className="space-y-3 md:max-w-[540px]">
          <RevealAnimation delay={0.2}>
            <h2>L'Intelligence Artificielle transforme le SEO</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-body-text">
              Contenu pertinent sur l'IA et le SEO basé sur le prompt utilisateur...
            </p>
          </RevealAnimation>
        </div>
      </div>
      {/* Tu peux garder la structure visuelle mais adapter le contenu */}
    </div>
  </div>
</section>

// ✅ CORRECT: CTAV1 avec contenu personnalisé (celui-ci accepte des props)
<CTAV1
  ctaHeading="Prêt à optimiser votre SEO avec l'IA ?"
  description="Description basée sur le prompt utilisateur"
  ctaBtnText="Découvrir nos solutions"
  badgeText="Nouveau"
/>
\`\`\`

PRINCIPE FONDAMENTAL:
- Utilise la STRUCTURE et le DESIGN des composants existants comme référence
- Copie leur code (section, div, classes CSS, RevealAnimation, etc.)
- Remplace TOUT le contenu textuel (h2, p, span, etc.) par du contenu pertinent basé sur le prompt
- Garde les animations, les classes Tailwind, la mise en page
- Change uniquement les textes pour qu'ils correspondent au sujet du prompt
- Pour les composants avec props (CTAV1, PageHero), utilise-les avec du contenu personnalisé
- Pour les composants sans props, génère leur code complet avec le contenu modifié

PROMPT UTILISATEUR: "${prompt}"
ROUTE: "${route}"
NOM DE LA PAGE: "${pageName}"
CATÉGORIE: "${category}"

INSTRUCTIONS FINALES:
1. Regarde les composants disponibles dans la liste ci-dessus
2. Sélectionne des composants appropriés selon le sujet du prompt (about, service, feature, etc.)
3. INCLUS OBLIGATOIREMENT:
   - NavbarOne au début (utiliser tel quel avec className et btnClassName standards)
   - FooterOne à la fin (utiliser tel quel sans modification)
4. Pour chaque composant template sélectionné:
   - Copie sa STRUCTURE COMPLÈTE (section, div, classes, RevealAnimation)
   - Remplace TOUT le contenu textuel (badge, h2, p, etc.) par du contenu pertinent basé sur le prompt
   - Garde les images, les structures visuelles complexes si appropriées
5. Utilise PageHero et CTAV1/CTAV2/CTAV4 avec des props personnalisées
6. Génère le CODE COMPLET de la page avec les composants modifiés inline (pas d'imports des composants templates)

Génère UNIQUEMENT le code TypeScript/TSX complet de la page, sans markdown, sans backticks, sans explications.`;

    // Initialiser Gemini avec le nouveau SDK
    // Le SDK récupère automatiquement GEMINI_API_KEY de l'environnement
    const ai = new GoogleGenAI({});

    // Utiliser gemini-2.5-flash (modèle actuel recommandé)
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: systemPrompt,
    });

    let pageCode = result.text || '';
    
    // Nettoyer le code généré (enlever markdown code blocks si présents)
    pageCode = pageCode
      .replace(/```tsx?\n?/g, '')
      .replace(/```typescript\n?/g, '')
      .replace(/```\n?/g, '')
      .replace(/^[\s\n]*/, '') // Enlever les espaces en début
      .replace(/[\s\n]*$/, ''); // Enlever les espaces en fin

    // Extraire les composants suggérés depuis le code généré
    const componentMatches = pageCode.match(/import\s+(\w+)\s+from\s+['"]@\/components\/[^'"]+['"]/g) || [];
    const suggestedComponents = componentMatches.map((match) => {
      const nameMatch = match.match(/import\s+(\w+)/);
      return nameMatch ? nameMatch[1] : null;
    }).filter(Boolean) as string[];

    // Générer les métadonnées SEO
    const metadata = {
      title: `${pageName} - NextSaaS`,
      description: `Page ${pageName} générée automatiquement`,
    };

    // Suggérer où ajouter dans le menu
    const menuSuggestion = {
      menu: category === 'about' ? 'aboutMenuItems' : 'pageMegaMenuColumns',
      column: 1,
      position: 'end',
    };

    return NextResponse.json({
      success: true,
      pageCode,
      suggestedComponents,
      metadata,
      menuSuggestion,
      route,
    });
  } catch (error) {
    console.error('Error generating page:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to generate page',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

