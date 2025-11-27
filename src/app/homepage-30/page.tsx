import CTA from '@/components/homepage-30/CTA';
import Feature from '@/components/homepage-30/Feature';
import FeatureV2 from '@/components/homepage-30/FeatureV2';
import FeatureV3 from '@/components/homepage-30/FeatureV3';
import FeatureV4 from '@/components/homepage-30/FeatureV4';
import Hero from '@/components/homepage-30/Hero';
import Pricing from '@/components/homepage-30/Pricing';
import Review from '@/components/homepage-30/Review';
import Services from '@/components/homepage-30/Services';
import Testimonial from '@/components/homepage-30/Testimonial';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarTwo from '@/components/shared/header/NavbarTwo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Security software - NextSaaS',
};

const Homepage30 = () => {
  return (
    <Fragment>
      <NavbarTwo
        className="bg-accent/10 dark:bg-background-7/40 backdrop-blur-[25px] max-md:!top-8"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark"
      />
      <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
        <Hero />
        <Testimonial />
        <Feature />
        <FeatureV2 />
        <FeatureV3 />
        <FeatureV4 />
        <Review />
        <Pricing />
        <Services />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default Homepage30;
