/**
 * ============================================
 * SHARED - Bibliothèque de composants réutilisables
 * ============================================
 *
 * Structure:
 * - global/     → Composants utilisables sur TOUTES les pages
 * - homepage/   → Composants exclusifs à la page d'accueil
 * - services/   → Composants pour les pages services
 *
 * Usage recommandé (imports directs pour éviter les conflits de types):
 * - Pour les composants globaux: import { Quote, CTA } from '@/components/shared/global';
 * - Pour la homepage: import { HeroHomepage } from '@/components/shared/homepage';
 * - Pour les services: import { HeroService, IntroService } from '@/components/shared/services';
 *
 * Note: Les exports globaux créent des conflits de types (RecapItem, FAQItem, etc.)
 * car ces types existent dans plusieurs sous-dossiers.
 * Utilisez les imports directs depuis les sous-dossiers correspondants.
 */
