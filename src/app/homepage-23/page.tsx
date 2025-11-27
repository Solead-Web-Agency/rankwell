import Blog from '@/components/homepage-23/Blog';
import Clients from '@/components/homepage-23/Clients';
import Contact from '@/components/homepage-23/Contact';
import CTA from '@/components/homepage-23/CTA';
import Feature from '@/components/homepage-23/Feature';
import FeatureV2 from '@/components/homepage-23/FeatureV2';
import FeatureV3 from '@/components/homepage-23/FeatureV3';
import Hero from '@/components/homepage-23/Hero';
import Investment from '@/components/homepage-23/Investment';
import Services from '@/components/homepage-23/Services';
import Testimonial from '@/components/homepage-23/Testimonial';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Investment Management - NextSaaS',
};

const Homepage23 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-background-2 dark:bg-background-5 backdrop-blur-[15px]"
        megaMenuColor="dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <Clients />
        <Feature />
        <FeatureV2 />
        <FeatureV3 />
        <Services />
        <Investment />
        <Testimonial />
        <Blog />
        <Contact />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Homepage23;
