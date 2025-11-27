import CTA from '@/components/homepage-11/CTA';
import CustomerFeedback from '@/components/homepage-11/CustomerFeedback';
import Faq from '@/components/homepage-11/Faq';
import Features from '@/components/homepage-11/Features';
import FeaturesHighlight from '@/components/homepage-11/FeaturesHighlight';
import Hero from '@/components/homepage-11/Hero';
import Pricing from '@/components/homepage-11/Pricing';
import Process from '@/components/homepage-11/Process';
import Reviews from '@/components/homepage-11/Reviews';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import OurAchievements from '@/components/shared/OurAchievements';
import { projectAchievements } from '@/data/achievements';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Email Marketing - NextSaaS',
};
const HomePage11 = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 backdrop-blur-[25px] dark:border-stroke-6 bg-accent/60 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        <CustomerFeedback />
        <FeaturesHighlight />
        <Features />
        <Process />
        <section className="py-16 md:py-[120px] max-xl:px-5">
          <div className="main-container">
            <OurAchievements achievements={projectAchievements} instant={false} />
          </div>
        </section>
        <Pricing />
        <Reviews />
        <Faq />
        <CTA />
      </main>
      <FooterThree />
    </>
  );
};

export default HomePage11;
