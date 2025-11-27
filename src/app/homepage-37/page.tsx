import About from '@/components/homepage-37/About';
import Clients from '@/components/homepage-37/Clients';
import CTA from '@/components/homepage-37/CTA';
import FAQ from '@/components/homepage-37/FAQ';
import Gadgets from '@/components/homepage-37/Gadgets';
import HeaderWrapper from '@/components/homepage-37/HeaderWrapper';
import Hero from '@/components/homepage-37/Hero';
import HowItWork from '@/components/homepage-37/HowItWork';
import Pricing from '@/components/homepage-37/Pricing';
import Services from '@/components/homepage-37/Services';
import Testimonials from '@/components/homepage-37/Testimonials';
import WhatWeDo from '@/components/homepage-37/WhatWeDo';
import FooterOne from '@/components/shared/footer/FooterOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Gadgets - NextSaaS',
};

const Homepage37 = () => {
  return (
    <Fragment>
      <HeaderWrapper />
      <main className="bg-white">
        <Hero />
        <Clients />
        <WhatWeDo />
        <Gadgets />
        <About />
        <Services />
        <HowItWork />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <FooterOne defaultTheme="light" />
    </Fragment>
  );
};

export default Homepage37;
