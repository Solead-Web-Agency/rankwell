import Counter from '@/components/homepage-18/Counter';
import CTA from '@/components/homepage-18/CTA';
import Feature from '@/components/homepage-18/Feature';
import Hero from '@/components/homepage-18/Hero';
import Integration from '@/components/homepage-18/Integration';
import Pricing from '@/components/homepage-18/Pricing';
import Projects from '@/components/homepage-18/Projects';
import Services from '@/components/homepage-18/Services';
import Testimonial from '@/components/homepage-18/Testimonial';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Agency - NextSaaS',
};

const Homepage18 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-lg"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <Feature />
        <Services />
        <Integration />
        <Projects />
        <Counter />
        <Testimonial />
        <Pricing />
        <CTA />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 max-sm:z-[11]" />
    </Fragment>
  );
};

export default Homepage18;
