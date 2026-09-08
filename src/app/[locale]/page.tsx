/**
 * HOME - Branche feat/landing-agence-sea2 uniquement
 *
 * La landing page conversion /agence-sea2 sert de page d'accueil.
 * La home d'origine est conservée sur main. Pour la restaurer sur cette branche :
 *   git checkout main -- "src/app/[locale]/page.tsx"
 * puis retirer '/' de standalonePages (ConditionalLayout), frenchOnlyPages (config.ts)
 * et frenchOnlyPatterns (middleware.ts).
 */

export { default, metadata } from './agence-sea2/page';
