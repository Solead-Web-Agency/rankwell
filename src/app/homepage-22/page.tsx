import CTA from '@/components/homepage-22/CTA';
import Feature from '@/components/homepage-22/Feature';
import FeatureV2 from '@/components/homepage-22/FeatureV2';
import Hero from '@/components/homepage-22/Hero';
import Services from '@/components/homepage-22/Services';
import Steps from '@/components/homepage-22/Steps';
import Testimonial from '@/components/homepage-22/Testimonial';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mobile Management Software - NextSaaS',
};

const Homepage22 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white dark:bg-background-5"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-white dark:bg-background-7">
        <Hero />
        <Steps />
        <Feature />
        <FeatureV2 />
        <Services />
        <Testimonial />
        <CTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Homepage22;
