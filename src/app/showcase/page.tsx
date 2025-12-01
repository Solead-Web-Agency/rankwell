import NavbarOne from '@/components/shared/header/NavbarOne';
import FooterOne from '@/components/shared/footer/FooterOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ModalProvider } from '@/context/ModalContext';

// Homepage 01 Components
import Hero01 from '@/components/homepage-01/Hero';
import About01 from '@/components/homepage-01/About';
import HowItWorks01 from '@/components/homepage-01/HowItWorks';
import OurServices01 from '@/components/homepage-01/OurServices';
import Faq01 from '@/components/homepage-01/Faq';
import TimelineIntegration01 from '@/components/homepage-01/TimelineIntegration';
import Testimonial01 from '@/components/homepage-01/Testimonial';
import Blog01 from '@/components/homepage-01/Blog';

// Homepage 02 Components
import Hero02 from '@/components/homepage-02/Hero';
import About02 from '@/components/homepage-02/About';
import Work02 from '@/components/homepage-02/Work';
import Feature02 from '@/components/homepage-02/Feature';
import Pricing02 from '@/components/homepage-02/Pricing';
import Integration02 from '@/components/homepage-02/Integration';

// Homepage 03 Components
import Hero03 from '@/components/homepage-03/Hero';
import Features03 from '@/components/homepage-03/Features';
import FeaturesV2_03 from '@/components/homepage-03/FeaturesV2';
import Pricing03 from '@/components/homepage-03/Pricing';
import Integration03 from '@/components/homepage-03/Integration';
import Understanding03 from '@/components/homepage-03/Understanding';
import Testimonial03 from '@/components/homepage-03/Testimonial';

// Homepage 04 Components
import Hero04 from '@/components/homepage-04/Hero';
import SearchCta04 from '@/components/homepage-04/SearchCta';
import Solutions04 from '@/components/homepage-04/Solutions';
import Services04 from '@/components/homepage-04/Services';
import Pricing04 from '@/components/homepage-04/Pricing';
import Process04 from '@/components/homepage-04/Process';
import Blogs04 from '@/components/homepage-04/Blogs';

// Shared Components
import CTAV1 from '@/components/shared/cta/CTAV1';
import CTAV2 from '@/components/shared/cta/CTAV2';
import CTAV3 from '@/components/shared/cta/CTAV3';
import CTAV4 from '@/components/shared/cta/CTAV4';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import ReviewsV2 from '@/components/shared/reviews/ReviewsV2';
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Showcase - Tous les Blocs Disponibles | NextSaaS',
  description: 'Catalogue complet de tous les composants et blocs disponibles dans le template NextSaaS',
};

const ShowcasePage = () => {
  return (
    <>
      <NavbarOne
        className="border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5">
        {/* Page Header */}
        <section className="py-20 text-center">
          <div className="main-container">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Showcase des Composants
            </h1>
            <p className="text-xl text-body-text max-w-3xl mx-auto">
              Découvrez tous les blocs et composants disponibles dans ce template. 
              Chaque section est réutilisable et personnalisable pour créer votre site web parfait.
            </p>
          </div>
        </section>

        {/* Section Divider Component */}
        <SectionDivider title="🎯 Hero Sections" id="hero-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Hero 01 - Crypto" description="Hero section avec animations et design crypto">
            <Hero01 />
          </ComponentWrapper>

          <ComponentWrapper title="Hero 02 - AI Software" description="Hero section moderne avec vidéo de fond">
            <ModalProvider>
              <Hero02 />
            </ModalProvider>
          </ComponentWrapper>

          <ComponentWrapper title="Hero 03 - AI Chatbot" description="Hero section avec design épuré">
            <Hero03 />
          </ComponentWrapper>

          <ComponentWrapper title="Hero 04 - Web Hosting" description="Hero section avec recherche intégrée">
            <Hero04 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="📝 About Sections" id="about-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="About 01 - Tabs" description="Section À propos avec système d'onglets">
            <About01 />
          </ComponentWrapper>

          <ComponentWrapper title="About 02 - AI Software" description="Section À propos avec design moderne">
            <About02 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="⚙️ Features Sections" id="features-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Features 03 - Grid Layout" description="Grille de fonctionnalités">
            <Features03 />
          </ComponentWrapper>

          <ComponentWrapper title="Features V2 03" description="Version alternative des fonctionnalités">
            <FeaturesV2_03 />
          </ComponentWrapper>

          <ComponentWrapper title="Feature 02" description="Section fonctionnalités avec animations">
            <Feature02 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="🛠️ Services Sections" id="services-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Our Services 01" description="Grille de services avec icônes">
            <OurServices01 />
          </ComponentWrapper>

          <ComponentWrapper title="Services 04" description="Services avec design hosting">
            <Services04 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="💰 Pricing Sections" id="pricing-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Pricing 02 - AI Software" description="Tarification avec toggle mensuel/annuel">
            <Pricing02 />
          </ComponentWrapper>

          <ComponentWrapper title="Pricing 03 - Chatbot" description="Plans tarifaires avec comparaison">
            <Pricing03 />
          </ComponentWrapper>

          <ComponentWrapper title="Pricing 04 - Hosting" description="Tarifs hébergement web">
            <Pricing04 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="🔗 Integration Sections" id="integration-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Timeline Integration 01" description="Intégrations avec timeline verticale">
            <TimelineIntegration01 />
          </ComponentWrapper>

          <ComponentWrapper title="Integration 02" description="Grille d'intégrations">
            <Integration02 />
          </ComponentWrapper>

          <ComponentWrapper title="Integration 03" description="Intégrations avec design moderne">
            <Integration03 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="💬 Testimonials & Reviews" id="testimonials-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Testimonial 01" description="Témoignages avec carrousel">
            <Testimonial01 />
          </ComponentWrapper>

          <ComponentWrapper title="Testimonial 03" description="Témoignages style chatbot">
            <Testimonial03 badgeText="Reviews" />
          </ComponentWrapper>

          <ComponentWrapper title="Reviews V1" description="Avis clients version 1">
            <ReviewsV1 badgeColor="badge-blue" background="py-20" />
          </ComponentWrapper>

          <ComponentWrapper title="Reviews V2" description="Avis clients version 2">
            <ReviewsV2 badgeColor="badge-green" sectionSpacingClass="py-20" />
          </ComponentWrapper>

          <ComponentWrapper title="Reviews V3" description="Avis clients version 3">
            <ReviewsV3 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="❓ FAQ & Process" id="faq-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="FAQ 01" description="Questions fréquentes avec accordéon">
            <Faq01 />
          </ComponentWrapper>

          <ComponentWrapper title="How It Works 01" description="Processus en étapes">
            <HowItWorks01 />
          </ComponentWrapper>

          <ComponentWrapper title="Process 04" description="Processus avec design moderne">
            <Process04 />
          </ComponentWrapper>

          <ComponentWrapper title="Understanding 03" description="Section explicative">
            <Understanding03 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="📰 Blog Sections" id="blog-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Blog 01" description="Grille d'articles de blog">
            <Blog01 />
          </ComponentWrapper>

          <ComponentWrapper title="Blogs 04" description="Articles avec design hosting">
            <Blogs04 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="🎯 CTA Sections" id="cta-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="CTA V1" description="Call-to-action version 1">
            <CTAV1
              className="dark:bg-background-6 bg-white"
              badgeClass="hidden"
              ctaHeading="Build a complete website using the"
              spanText="assistance"
              description="Start your free trial today and see your ideas come to life easily and creatively."
              btnClass="hover:btn-secondary dark:hover:btn-white"
              ctaBtnText="Get started"
            />
          </ComponentWrapper>

          <ComponentWrapper title="CTA V2" description="Call-to-action version 2">
            <CTAV2
              className="bg-background-2 dark:bg-background-5"
              ctaHeading="Experience a free trial today and watch your"
              spanText="business grow."
              ctaDescription="Sign up today to enhance your customer support with our tools and solutions."
              ctaBtnText="Get started"
              ctaCheckListData={[
                { id: '1', text: 'No credit card required' },
                { id: '2', text: 'free for 30 day trial.' },
                { id: '3', text: 'Money back guarantee.' },
              ]}
            />
          </ComponentWrapper>

          <ComponentWrapper title="CTA V3" description="Call-to-action version 3">
            <CTAV3
              badgeText="Get Started"
              ctaHeading="Ready to transform your business?"
              description="Join thousands of satisfied customers today"
              ctaBtnText="Start Free Trial"
              btnClass="btn-primary"
            />
          </ComponentWrapper>

          <ComponentWrapper title="CTA V4" description="Call-to-action version 4">
            <CTAV4
              ctaHeading="Start your free trial today"
              ctaDescription="No credit card required. Get started in minutes."
              ctaBtnText="Get Started"
              ctaCheckListData={[
                { id: '1', text: 'Free 30-day trial' },
                { id: '2', text: 'No credit card required' },
                { id: '3', text: 'Cancel anytime' },
              ]}
            />
          </ComponentWrapper>

          <ComponentWrapper title="Search CTA 04" description="CTA avec barre de recherche">
            <SearchCta04 />
          </ComponentWrapper>
        </div>

        <SectionDivider title="🎨 Autres Composants" id="other-sections" />
        
        <div className="space-y-20">
          <ComponentWrapper title="Solutions 04" description="Section solutions avec icônes">
            <Solutions04 />
          </ComponentWrapper>

          <ComponentWrapper title="Work 02" description="Section comment ça marche">
            <Work02 />
          </ComponentWrapper>
        </div>

        {/* Table of Contents */}
        <section className="py-20 bg-white dark:bg-background-6">
          <div className="main-container">
            <h2 className="text-3xl font-bold mb-8 text-center">Navigation Rapide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <TOCLink href="#hero-sections" emoji="🎯" text="Hero Sections" />
              <TOCLink href="#about-sections" emoji="📝" text="About Sections" />
              <TOCLink href="#features-sections" emoji="⚙️" text="Features Sections" />
              <TOCLink href="#services-sections" emoji="🛠️" text="Services Sections" />
              <TOCLink href="#pricing-sections" emoji="💰" text="Pricing Sections" />
              <TOCLink href="#integration-sections" emoji="🔗" text="Integration Sections" />
              <TOCLink href="#testimonials-sections" emoji="💬" text="Testimonials & Reviews" />
              <TOCLink href="#faq-sections" emoji="❓" text="FAQ & Process" />
              <TOCLink href="#blog-sections" emoji="📰" text="Blog Sections" />
              <TOCLink href="#cta-sections" emoji="🎯" text="CTA Sections" />
              <TOCLink href="#other-sections" emoji="🎨" text="Autres Composants" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="main-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StatCard number="38+" label="Pages Homepage" />
              <StatCard number="50+" label="Pages Internes" />
              <StatCard number="500+" label="Composants" />
              <StatCard number="100+" label="Blocs Réutilisables" />
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </>
  );
};

// Helper Components
const SectionDivider = ({ title, id }: { title: string; id: string }) => (
  <section id={id} className="py-16 scroll-mt-20">
    <div className="main-container">
      <div className="border-t-2 border-stroke-2 dark:border-stroke-6 pt-8">
        <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
        <p className="text-center text-body-text">
          Explorez les différentes variations de cette section
        </p>
      </div>
    </div>
  </section>
);

const ComponentWrapper = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <div className="relative">
    <div className="main-container mb-6">
      <div className="bg-white dark:bg-background-6 rounded-2xl p-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-body-text">{description}</p>
      </div>
    </div>
    <div className="border-t-2 border-b-2 border-stroke-2 dark:border-stroke-6 py-10">
      {children}
    </div>
  </div>
);

const TOCLink = ({ href, emoji, text }: { href: string; emoji: string; text: string }) => (
  <a
    href={href}
    className="flex items-center gap-3 p-4 bg-white dark:bg-background-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
  >
    <span className="text-2xl">{emoji}</span>
    <span className="font-semibold">{text}</span>
  </a>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-white dark:bg-background-6 rounded-2xl p-8 shadow-lg">
    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{number}</div>
    <div className="text-body-text font-medium">{label}</div>
  </div>
);

ShowcasePage.displayName = 'ShowcasePage';
export default ShowcasePage;

