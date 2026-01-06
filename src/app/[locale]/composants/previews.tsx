/**
 * PREVIEWS - Données et rendu des previews de composants en lorem ipsum
 *
 * Ce fichier contient :
 * - La liste de tous les composants avec leur catégorie
 * - Les données lorem ipsum pour chaque preview
 * - Les fonctions de rendu des previews
 */

'use client';

import { ReactNode } from 'react';

// ============================================
// COMPOSANTS GLOBAL
// ============================================
import {
  Quote,
  Clients,
  Testimonials,
  TrustBanner,
  PointVigilance,
  CTA,
  RecapBox,
  FAQ,
  ProcessCards,
  ProcessTimeline,
  ContentWithHighlight,
  StackCardsSection,
  KeyFiguresAnimated,
  HeroAgence,
  OfficesMap,
} from '@/components/shared/global';

// ============================================
// COMPOSANTS HOMEPAGE
// ============================================
import {
  HeroHomepage,
  Certifications,
  IntroHomepage,
  ServicesHomepage,
  ProcessHomepage,
  WhyUsHomepage,
  FAQHomepage,
} from '@/components/shared/homepage';

// ============================================
// COMPOSANTS SERVICES
// ============================================
import {
  HeroService,
  IntroService,
  FAQService,
  RecapBoxService,
  TableauService,
  FeaturesGrid,
  ForWhoService,
  OutilsService,
  StepsDimensions,
  ProcessSteps,
  ProcessGrid,
  DeliverablesGrid,
  StickyFeatures,
  ReasonsGrid,
  WarningsList,
  ServicesGrid,
  ServicesCards,
  TwoPathsSection,
  CategoriesGrid,
} from '@/components/shared/services';

// ============================================
// TYPES
// ============================================
export interface ComponentDefinition {
  name: string;
  category: 'global' | 'homepage' | 'services';
  description: string;
}

// ============================================
// LISTE DE TOUS LES COMPOSANTS
// ============================================
export const ALL_COMPONENTS: ComponentDefinition[] = [
  // Global
  { name: 'Quote', category: 'global', description: 'Citation avec auteur et rôle' },
  { name: 'Clients', category: 'global', description: 'Logos clients en marquee' },
  { name: 'Testimonials', category: 'global', description: 'Témoignages clients en marquee' },
  { name: 'TrustBanner', category: 'global', description: 'Bandeau de confiance' },
  { name: 'PointVigilance', category: 'global', description: 'Encart point de vigilance' },
  { name: 'CTA', category: 'global', description: 'Call-to-action fin de page' },
  { name: 'RecapBox', category: 'global', description: 'Grille 4 cartes avec icônes' },
  { name: 'FAQ', category: 'global', description: 'Accordéon FAQ générique' },
  { name: 'ProcessCards', category: 'global', description: 'Cartes étapes process' },
  { name: 'ProcessTimeline', category: 'global', description: 'Timeline verticale alternée' },
  { name: 'ContentWithHighlight', category: 'global', description: 'Contenu avec encart highlight' },
  { name: 'StackCardsSection', category: 'global', description: 'Cartes empilées animées' },
  { name: 'KeyFiguresAnimated', category: 'global', description: 'Chiffres clés animés' },
  { name: 'HeroAgence', category: 'global', description: 'Hero centré avec world map' },
  { name: 'OfficesMap', category: 'global', description: 'Carte des bureaux' },
  { name: 'OfficesDetailed', category: 'global', description: 'Bureaux détaillés avec infos' },
  { name: 'Map', category: 'global', description: 'Carte Leaflet réutilisable' },

  // Homepage
  { name: 'HeroHomepage', category: 'homepage', description: 'Hero page d\'accueil' },
  { name: 'Certifications', category: 'homepage', description: 'Logos certifications' },
  { name: 'IntroHomepage', category: 'homepage', description: 'Introduction avec highlights' },
  { name: 'ServicesHomepage', category: 'homepage', description: 'Grandes cartes expertises' },
  { name: 'ProcessHomepage', category: 'homepage', description: 'Étapes de travail' },
  { name: 'WhyUsHomepage', category: 'homepage', description: 'Pourquoi nous choisir' },
  { name: 'FAQHomepage', category: 'homepage', description: 'FAQ homepage' },

  // Services
  { name: 'HeroService', category: 'services', description: 'Hero avec breadcrumb' },
  { name: 'IntroService', category: 'services', description: 'Introduction avec TOC' },
  { name: 'FAQService', category: 'services', description: 'FAQ pour pages services' },
  { name: 'RecapBoxService', category: 'services', description: 'Grille items avec icônes' },
  { name: 'TableauService', category: 'services', description: 'Tableau comparatif' },
  { name: 'FeaturesGrid', category: 'services', description: 'Grille de features avec images' },
  { name: 'ForWhoService', category: 'services', description: 'Section "Pour qui"' },
  { name: 'OutilsService', category: 'services', description: 'Outils avec logos' },
  { name: 'StepsDimensions', category: 'services', description: 'Dimensions numérotées' },
  { name: 'ProcessSteps', category: 'services', description: 'Étapes numérotées horizontales' },
  { name: 'ProcessGrid', category: 'services', description: 'Grille process' },
  { name: 'DeliverablesGrid', category: 'services', description: 'Grille livrables' },
  { name: 'StickyFeatures', category: 'services', description: 'Features avec sticky scroll' },
  { name: 'ReasonsGrid', category: 'services', description: 'Grille raisons' },
  { name: 'WarningsList', category: 'services', description: 'Liste alertes/warnings' },
  { name: 'ServicesGrid', category: 'services', description: 'Grille services liés' },
  { name: 'ServicesCards', category: 'services', description: 'Cartes services avec liens' },
  { name: 'TwoPathsSection', category: 'services', description: 'Section deux chemins' },
  { name: 'CategoriesGrid', category: 'services', description: 'Grille catégories' },
];

// ============================================
// DONNÉES LOREM IPSUM
// ============================================
const lorem = {
  short: 'Lorem ipsum dolor sit amet consectetur.',
  medium: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
};

// ============================================
// FONCTION DE RENDU DES PREVIEWS
// ============================================
export function renderPreview(componentName: string): ReactNode {
  switch (componentName) {
    // ========== GLOBAL ==========
    case 'Quote':
      return (
        <Quote
          quote={lorem.long}
          author="Jean Dupont"
          role="Directeur Marketing"
        />
      );

    case 'Clients':
      return <Clients locale="fr" />;

    case 'Testimonials':
      return <Testimonials locale="fr" />;

    case 'TrustBanner':
      return <TrustBanner locale="fr" />;

    case 'PointVigilance':
      return (
        <PointVigilance
          label="Point important"
          text={lorem.medium}
        />
      );

    case 'CTA':
      return (
        <CTA
          title={<>Lorem ipsum <span className="text-rw-blue">dolor sit amet</span></>}
          description={lorem.medium}
          secondaryDescription={lorem.short}
          buttonText="Lorem ipsum"
          buttonHref="#"
          accentColor="rw-blue"
        />
      );

    case 'RecapBox':
      return (
        <RecapBox
          sectionId="preview-recap"
          badge="Récapitulatif"
          badgeClassName="bg-rw-purple-light text-rw-purple"
          title="Lorem ipsum dolor sit"
          subtitle={lorem.short}
          accentColor="rw-purple"
          items={[
            { id: 1, title: 'Lorem Ipsum', description: lorem.short, icon: 'Search' },
            { id: 2, title: 'Dolor Amet', description: lorem.short, icon: 'Target' },
            { id: 3, title: 'Consectetur', description: lorem.short, icon: 'TrendingUp' },
            { id: 4, title: 'Adipiscing', description: lorem.short, icon: 'BarChart' },
          ]}
        />
      );

    case 'FAQ':
      return (
        <FAQ
          sectionId="preview-faq"
          title="Questions fréquentes"
          items={[
            { id: '1', question: 'Lorem ipsum dolor sit amet?', answer: lorem.medium },
            { id: '2', question: 'Consectetur adipiscing elit sed?', answer: lorem.medium },
            { id: '3', question: 'Ut labore et dolore magna aliqua?', answer: lorem.medium },
          ]}
        />
      );

    case 'ProcessCards':
      return (
        <ProcessCards
          sectionId="preview-process-cards"
          badge="Process"
          badgeClassName="bg-rw-blue-light text-rw-blue"
          title="Notre processus"
          subtitle={lorem.short}
          steps={[
            { id: '1', stepNumber: '01', title: 'Étape Lorem', description: lorem.short, icon: 'Search' },
            { id: '2', stepNumber: '02', title: 'Étape Ipsum', description: lorem.short, icon: 'Target' },
            { id: '3', stepNumber: '03', title: 'Étape Dolor', description: lorem.short, icon: 'TrendingUp' },
          ]}
        />
      );

    case 'ProcessTimeline':
      return (
        <ProcessTimeline
          sectionId="preview-timeline"
          badge="Timeline"
          badgeClassName="bg-rw-purple-light text-rw-purple"
          title="Notre approche"
          subtitle={lorem.short}
          accentColor="rw-purple"
          compact={true}
          steps={[
            { id: 1, title: 'Lorem ipsum', description: lorem.short },
            { id: 2, title: 'Dolor sit amet', description: lorem.short },
            { id: 3, title: 'Consectetur', description: lorem.short },
          ]}
        />
      );

    case 'ContentWithHighlight':
      return (
        <ContentWithHighlight
          sectionId="preview-content"
          badge="Contenu"
          accentColor="rw-cyan"
          title="Lorem ipsum dolor sit amet"
          subtitle={lorem.short}
          blocks={[
            { title: 'Lorem Ipsum', text: lorem.long },
            { title: 'Dolor Amet', text: lorem.long },
          ]}
          highlight={{
            icon: 'Lightbulb',
            title: 'Point clé',
            text: lorem.medium,
          }}
        />
      );

    case 'StackCardsSection':
      return (
        <StackCardsSection
          sectionId="preview-stack"
          badge="Stack Cards"
          title={<>Lorem ipsum <span className="text-rw-blue">dolor sit amet</span></>}
          description={lorem.medium}
          ctaText="En savoir plus"
          ctaHref="#"
          accentColor="rw-blue"
          cards={[
            { id: 1, title: 'Service Lorem', description: lorem.medium, icon: 'Search' },
            { id: 2, title: 'Service Ipsum', description: lorem.medium, icon: 'Target' },
            { id: 3, title: 'Service Dolor', description: lorem.medium, icon: 'TrendingUp' },
          ]}
        />
      );

    case 'KeyFiguresAnimated':
      return (
        <KeyFiguresAnimated
          sectionId="preview-figures"
          badge="Chiffres"
          title="Nos résultats"
          subtitle={lorem.short}
          items={[
            { id: 1, icon: 'Users', number: 350, suffix: '+', label: 'Clients lorem' },
            { id: 2, icon: 'Calendar', number: 15, suffix: ' ans', label: 'D\'expérience ipsum' },
            { id: 3, icon: 'Award', number: 98, suffix: '%', label: 'Satisfaction dolor' },
          ]}
          accentColor="rw-purple"
        />
      );

    case 'HeroAgence':
      return (
        <HeroAgence
          badge="Agence"
          title="Lorem ipsum dolor sit amet consectetur"
          description={lorem.medium}
          primaryCta={{ text: 'Lorem ipsum', href: '#' }}
          secondaryCta={{ text: 'Dolor sit', href: '#' }}
        />
      );

    case 'OfficesMap':
      return (
        <OfficesMap
          sectionId="preview-offices"
          badge="Nos bureaux"
          title="Lorem ipsum"
          subtitle={lorem.short}
          offices={[
            {
              id: 1,
              title: 'Paris',
              description: 'Bureau France',
              address: '123 Rue Lorem, 75001 Paris',
              latitude: 48.8566,
              longitude: 2.3522,
            },
          ]}
        />
      );

    case 'OfficesDetailed':
      return (
        <div className="p-8 text-center text-gray-400 bg-background-2 dark:bg-background-7">
          OfficesDetailed - Composant avec données en dur (bureaux Paris/Dubai)
        </div>
      );

    case 'Map':
      return (
        <div className="p-8 text-center text-gray-400 bg-background-2 dark:bg-background-7">
          Map - Composant Leaflet (nécessite lat/lng)
        </div>
      );

    // ========== HOMEPAGE ==========
    case 'HeroHomepage':
      return (
        <HeroHomepage
          badge="Lorem Ipsum"
          title="Dolor sit amet consectetur adipiscing"
          description={lorem.medium}
          primaryCta={{ text: 'Lorem ipsum', href: '#' }}
          secondaryCta={{ text: 'Dolor sit', href: '#' }}
          trustIndicator={{ main: '+350 clients', sub: 'Paris & Dubai' }}
        />
      );

    case 'Certifications':
      return <Certifications />;

    case 'IntroHomepage':
      return (
        <IntroHomepage
          badge="Introduction"
          title="Lorem ipsum dolor sit amet consectetur"
          paragraphs={[lorem.long, lorem.medium]}
          highlightsTitle="Points clés"
          highlights={[
            { strong: 'Lorem ipsum', text: 'dolor sit amet consectetur' },
            { strong: 'Adipiscing elit', text: 'sed do eiusmod tempor' },
            { strong: 'Incididunt ut', text: 'labore et dolore magna' },
          ]}
        />
      );

    case 'ServicesHomepage':
      return (
        <ServicesHomepage
          badge="Services"
          title="Nos expertises lorem ipsum"
          description={lorem.short}
          items={[
            {
              id: 1,
              title: 'Lorem Ipsum',
              description: lorem.medium,
              href: '#',
              buttonText: 'Découvrir',
            },
            {
              id: 2,
              title: 'Dolor Amet',
              description: lorem.medium,
              href: '#',
              buttonText: 'Découvrir',
            },
          ]}
        />
      );

    case 'ProcessHomepage':
      return (
        <ProcessHomepage
          badge="Process"
          title="Notre méthode"
          description={lorem.medium}
          steps={[
            { number: '01', title: 'Lorem', description: lorem.short },
            { number: '02', title: 'Ipsum', description: lorem.short },
            { number: '03', title: 'Dolor', description: lorem.short },
          ]}
        />
      );

    case 'WhyUsHomepage':
      return (
        <WhyUsHomepage
          badge="Pourquoi nous"
          title="Lorem ipsum"
          titleHighlight="dolor sit"
          description={lorem.medium}
          ctaText="En savoir plus"
          ctaHref="#"
          cards={[
            { icon: 'Target', title: 'Lorem ipsum', description: lorem.short },
            { icon: 'TrendingUp', title: 'Dolor amet', description: lorem.short },
            { icon: 'Award', title: 'Consectetur', description: lorem.short },
          ]}
        />
      );

    case 'FAQHomepage':
      return (
        <FAQHomepage
          badge="FAQ"
          title="Questions fréquentes"
          description={lorem.short}
          items={[
            { id: '1', question: 'Lorem ipsum dolor sit amet?', answer: lorem.medium },
            { id: '2', question: 'Consectetur adipiscing elit?', answer: lorem.medium },
          ]}
        />
      );

    // ========== SERVICES ==========
    case 'HeroService':
      return (
        <HeroService
          breadcrumb={[
            { label: 'Accueil', href: '#' },
            { label: 'Services', href: '#' },
            { label: 'Lorem Ipsum' },
          ]}
          title={<>Lorem ipsum <span className="text-rw-blue">dolor sit amet</span></>}
          description={lorem.medium}
          ctaText="Lorem ipsum"
          ctaHref="#"
          accentColor="rw-blue"
        />
      );

    case 'IntroService':
      return (
        <IntroService
          badge="Introduction"
          title={<>Lorem ipsum <span className="text-rw-blue">dolor sit amet</span></>}
          paragraphs={[lorem.long, lorem.medium]}
          accentColor="rw-blue"
          tocItems={[
            { id: 'section-1', label: 'Lorem ipsum', icon: 'ns-shape-47' },
            { id: 'section-2', label: 'Dolor sit', icon: 'ns-shape-8' },
            { id: 'section-3', label: 'Amet consectetur', icon: 'ns-shape-5' },
          ]}
        />
      );

    case 'FAQService':
      return (
        <FAQService
          sectionId="preview-faq-service"
          badge="FAQ"
          title="Questions fréquentes"
          items={[
            { id: '1', question: 'Lorem ipsum dolor sit amet?', answer: lorem.medium },
            { id: '2', question: 'Consectetur adipiscing elit sed?', answer: lorem.medium },
          ]}
          accentColor="rw-blue"
        />
      );

    case 'RecapBoxService':
      return (
        <RecapBoxService
          sectionId="preview-recap-service"
          badge="Récapitulatif"
          title="Lorem ipsum dolor"
          subtitle={lorem.short}
          accentColor="rw-cyan"
          items={[
            { id: 1, title: 'Lorem', description: lorem.short, icon: 'Search' },
            { id: 2, title: 'Ipsum', description: lorem.short, icon: 'Target' },
            { id: 3, title: 'Dolor', description: lorem.short, icon: 'TrendingUp' },
            { id: 4, title: 'Amet', description: lorem.short, icon: 'BarChart' },
          ]}
        />
      );

    case 'TableauService':
      return (
        <TableauService
          sectionId="preview-tableau"
          badge="Comparatif"
          title="Lorem vs Ipsum"
          subtitle={lorem.short}
          accentColor="rw-blue"
          columns={['Feature', 'Lorem', 'Ipsum']}
          rows={[
            ['Dolor sit', '✓', '✓'],
            ['Amet consectetur', '✓', '—'],
            ['Adipiscing elit', '—', '✓'],
          ]}
          highlightLastColumn={true}
        />
      );

    case 'FeaturesGrid':
      return (
        <FeaturesGrid
          sectionId="preview-features"
          badge="Features"
          title={<>Lorem ipsum <span className="text-rw-blue">dolor</span></>}
          subtitle={lorem.short}
          accentColor="rw-blue"
          items={[
            { id: 1, title: 'Lorem Ipsum', desc: lorem.short },
            { id: 2, title: 'Dolor Amet', desc: lorem.short },
            { id: 3, title: 'Consectetur', desc: lorem.short },
          ]}
        />
      );

    case 'ForWhoService':
      return (
        <ForWhoService
          sectionId="preview-forwho"
          title="Pour qui est ce service ?"
          subtitle={lorem.short}
          criteria={[
            { label: 'Lorem ipsum dolor sit amet', description: 'Consectetur adipiscing elit' },
            { label: 'Sed do eiusmod tempor', description: 'Incididunt ut labore' },
            { label: 'Ut enim ad minim veniam' },
          ]}
          accentColor="rw-cyan"
        />
      );

    case 'OutilsService':
      return (
        <OutilsService
          sectionId="preview-outils"
          badge="Outils"
          title="Nos outils"
          subtitle={lorem.short}
          accentColor="rw-purple"
          logos={[
            { id: 1, name: 'Google Partner', image: '/images/shared/certifications/google-partner.svg' },
            { id: 2, name: 'Google Analytics', image: '/images/shared/certifications/google-analytics.svg' },
          ]}
          categories={[
            { category: 'Analyse', tools: ['Tool A', 'Tool B'], icon: 'Search' },
            { category: 'Tracking', tools: ['Tool C', 'Tool D'], icon: 'Target' },
          ]}
        />
      );

    case 'StepsDimensions':
      return (
        <StepsDimensions
          sectionId="preview-dimensions"
          badge="Dimensions"
          title="Les dimensions clés"
          subtitle={lorem.short}
          accentColor="rw-blue"
          dimensions={[
            { dimension: 1, label: 'Dimension 1', title: 'Lorem ipsum', subtitle: lorem.short, items: ['Item A', 'Item B'] },
            { dimension: 2, label: 'Dimension 2', title: 'Dolor amet', subtitle: lorem.short, items: ['Item C', 'Item D'] },
            { dimension: 3, label: 'Dimension 3', title: 'Consectetur', subtitle: lorem.short, items: ['Item E', 'Item F'] },
          ]}
        />
      );

    case 'ProcessSteps':
      return (
        <ProcessSteps
          sectionId="preview-steps"
          badge="Étapes"
          title="Notre processus"
          subtitle={lorem.short}
          accentColor="rw-cyan"
          steps={[
            { id: '1', stepNumber: 1, title: 'Lorem', description: lorem.short },
            { id: '2', stepNumber: 2, title: 'Ipsum', description: lorem.short },
            { id: '3', stepNumber: 3, title: 'Dolor', description: lorem.short },
            { id: '4', stepNumber: 4, title: 'Amet', description: lorem.short },
          ]}
        />
      );

    case 'ProcessGrid':
      return (
        <ProcessGrid
          sectionId="preview-process-grid"
          badge="Process"
          title="Notre méthode"
          subtitle={lorem.short}
          accentColor="rw-purple"
          steps={[
            { id: '1', stepNumber: '01', title: 'Lorem ipsum', description: lorem.short, icon: 'Search' },
            { id: '2', stepNumber: '02', title: 'Dolor amet', description: lorem.short, icon: 'Target' },
            { id: '3', stepNumber: '03', title: 'Consectetur', description: lorem.short, icon: 'TrendingUp' },
          ]}
        />
      );

    case 'DeliverablesGrid':
      return (
        <DeliverablesGrid
          sectionId="preview-deliverables"
          badge="Livrables"
          title="Ce que vous obtenez"
          subtitle={lorem.short}
          accentColor="rw-blue"
          items={[
            { id: 1, title: 'Livrable Lorem', description: lorem.short },
            { id: 2, title: 'Livrable Ipsum', description: lorem.short },
            { id: 3, title: 'Livrable Dolor', description: lorem.short },
          ]}
        />
      );

    case 'StickyFeatures':
      return (
        <StickyFeatures
          sectionId="preview-sticky"
          badge="Features"
          title="Nos avantages"
          subtitle={lorem.short}
          accentColor="rw-cyan"
          items={[
            { id: 1, title: 'Lorem ipsum', description: lorem.medium, icon: 'Search' },
            { id: 2, title: 'Dolor amet', description: lorem.medium, icon: 'Target' },
          ]}
        />
      );

    case 'ReasonsGrid':
      return (
        <ReasonsGrid
          sectionId="preview-reasons"
          badge="Raisons"
          title="Pourquoi nous choisir"
          subtitle={lorem.short}
          accentColor="rw-purple"
          reasons={[
            { id: 1, title: 'Lorem ipsum', description: lorem.short, icon: 'Award' },
            { id: 2, title: 'Dolor amet', description: lorem.short, icon: 'Shield' },
            { id: 3, title: 'Consectetur', description: lorem.short, icon: 'Zap' },
          ]}
        />
      );

    case 'WarningsList':
      return (
        <WarningsList
          sectionId="preview-warnings"
          badge="Attention"
          title="Points de vigilance"
          subtitle={lorem.short}
          accentColor="rw-coral"
          items={[
            { label: 'Lorem ipsum dolor sit amet', description: 'Consectetur adipiscing elit sed' },
            { label: 'Sed do eiusmod tempor', description: 'Incididunt ut labore et dolore' },
            { label: 'Ut enim ad minim veniam', description: 'Quis nostrud exercitation ullamco' },
          ]}
        />
      );

    case 'ServicesGrid':
      return (
        <ServicesGrid
          sectionId="preview-services-grid"
          badge="Services"
          title="Services connexes"
          subtitle={lorem.short}
          buttonText="Découvrir"
          accentColor="rw-blue"
          items={[
            { id: 1, title: 'Service Lorem', description: lorem.short, icon: 'Search', href: '#' },
            { id: 2, title: 'Service Ipsum', description: lorem.short, icon: 'Target', href: '#' },
          ]}
        />
      );

    case 'ServicesCards':
      return (
        <ServicesCards
          sectionId="preview-services-cards"
          badge="Services"
          title="Nos services"
          subtitle={lorem.short}
          accentColor="rw-cyan"
          items={[
            { id: 1, title: 'Service Lorem', description: lorem.short, href: '#', buttonText: 'Découvrir' },
            { id: 2, title: 'Service Ipsum', description: lorem.short, href: '#', buttonText: 'Découvrir' },
          ]}
        />
      );

    case 'TwoPathsSection':
      return (
        <TwoPathsSection
          sectionId="preview-paths"
          badge="Deux approches"
          title="Choisissez votre voie"
          subtitle={lorem.short}
          accentColor="rw-purple"
          paths={[
            {
              id: 1,
              title: 'Chemin Lorem',
              description: lorem.medium,
              icon: 'BookOpen',
            },
            {
              id: 2,
              title: 'Chemin Ipsum',
              description: lorem.medium,
              icon: 'Handshake',
              buttonText: 'Choisir Ipsum',
              href: '#',
            },
          ]}
        />
      );

    case 'CategoriesGrid':
      return (
        <CategoriesGrid
          sectionId="preview-categories"
          badge="Catégories"
          title="Nos domaines"
          subtitle={lorem.short}
          accentColor="rw-blue"
          categories={[
            { category: 'Lorem', icon: 'Search', items: ['Item 1', 'Item 2', 'Item 3'] },
            { category: 'Ipsum', icon: 'Target', items: ['Item A', 'Item B', 'Item C'] },
            { category: 'Dolor', icon: 'TrendingUp', items: ['Item X', 'Item Y', 'Item Z'] },
            { category: 'Amet', icon: 'BarChart', items: ['Item P', 'Item Q', 'Item R'] },
          ]}
        />
      );

    default:
      return (
        <div className="p-8 text-center text-gray-400 bg-background-2 dark:bg-background-7 min-h-[200px] flex items-center justify-center">
          Preview non disponible pour {componentName}
        </div>
      );
  }
}
