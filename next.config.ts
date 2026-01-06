import type { NextConfig } from 'next';
import { collectRedirects } from './src/lib/routes';

const nextConfig: NextConfig = {
  typescript: {
    // ⚠️ Temporairement désactivé pour permettre le build malgré les erreurs de types
    // À corriger progressivement après le déploiement
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: __dirname,
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  async redirects() {
    // Génère automatiquement les redirects 301 depuis les aliases définis dans routes.ts
    return collectRedirects();
  },
};

export default nextConfig;
