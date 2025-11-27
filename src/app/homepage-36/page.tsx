import CaseStudy from '@/components/homepage-36/CaseStudy';
import ClientsMarquee from '@/components/homepage-36/ClientsMarquee';
import CTA from '@/components/homepage-36/CTA';
import Faq from '@/components/homepage-36/Faq';
import Features from '@/components/homepage-36/Features';
import HeaderWrapper from '@/components/homepage-36/HeaderWrapper';
import Hero from '@/components/homepage-36/Hero';
import HowItsWork from '@/components/homepage-36/HowItsWork';
import Services from '@/components/homepage-36/Services';
import Testimonial from '@/components/homepage-36/Testimonial';
import WhatWeDo from '@/components/homepage-36/WhatWeDo';
import FooterThree from '@/components/shared/footer/FooterThree';
import { defaultMetadata } from '@/utils/generateMetaData';
import gradient36 from '@public/images/gradient/gradient-36.png';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Application - NextSaaS',
};

const Homepage36 = () => {
  return (
    <Fragment>
      <HeaderWrapper />
      <main className="bg-white space-y-10">
        <Hero />
        <ClientsMarquee />
        <WhatWeDo />
        <Features />
        <HowItsWork />
        <Services />
        <CaseStudy />
        <Testimonial />
        <Faq />
        <CTA />
      </main>
      <FooterThree
        defaultTheme="light"
        toggleTheme={false}
        className="relative !bg-background-2 overflow-hidden"
        gradientClassName="show-gradient !block size-[600px] md:size-[1220px] rotate-[-38deg] right-[-321px]  md:right-[-693px] top-[-237px] md:top-[-485px] select-none pointer-events-none"
        bgGradientImg={gradient36}
      />
    </Fragment>
  );
};

export default Homepage36;
