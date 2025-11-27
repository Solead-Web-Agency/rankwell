import CTA from '@/components/homepage-20/CTA';
import Feature from '@/components/homepage-20/Feature';
import FeatureV2 from '@/components/homepage-20/FeatureV2';
import FeatureV3 from '@/components/homepage-20/FeatureV3';
import Hero from '@/components/homepage-20/Hero';
import Pricing from '@/components/homepage-20/Pricing';
import Services from '@/components/homepage-20/Services';
import Testimonial from '@/components/homepage-20/Testimonial';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Risk Management Software - NextSaaS',
};

const Homepage20 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-white dark:bg-background-8">
        <Hero />
        <Services />
        <Feature />
        <FeatureV2 />
        <FeatureV3 />
        <Testimonial />
        <Pricing />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default Homepage20;
