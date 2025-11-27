import CTA from '@/components/homepage-22/CTA';
import Clients from '@/components/homepage-24/Clients';
import Contact from '@/components/homepage-24/Contact';
import FAQ from '@/components/homepage-24/FAQ';
import Features from '@/components/homepage-24/Features';
import Hero from '@/components/homepage-24/Hero';
import Invitation from '@/components/homepage-24/Invitation';

import Services from '@/components/homepage-24/Services';
import Testimonial from '@/components/homepage-24/Testimonial';
import WhyUs from '@/components/homepage-24/WhyUs';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Insurance - NextSaaS',
};

const Homepage24 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        <Clients />
        <Invitation />
        <Services />
        <WhyUs />
        <Features />
        <Testimonial />
        <FAQ />
        <Contact />
        <CTA badgeClassName="text-ns-green" />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Homepage24;
