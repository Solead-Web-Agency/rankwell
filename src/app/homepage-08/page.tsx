import CTA from '@/components/homepage-08/CTA';
import Clients from '@/components/homepage-08/Clients';
import Counter from '@/components/homepage-08/Counter';
import Faq from '@/components/homepage-08/Faq';
import Features from '@/components/homepage-08/Features';
import FeaturesV2 from '@/components/homepage-08/FeaturesV2';
import FeaturesV3 from '@/components/homepage-08/FeaturesV3';
import Hero from '@/components/homepage-08/Hero';
import Pricing from '@/components/homepage-08/Pricing';
import Teams from '@/components/homepage-08/Teams';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Online Banking - NextSaaS',
};

const Homepage08 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white dark:bg-background-5"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        <Features />
        <FeaturesV2 />
        <FeaturesV3 />
        <Clients />
        <Teams />
        <Counter />
        <Pricing />
        <Faq />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default Homepage08;
