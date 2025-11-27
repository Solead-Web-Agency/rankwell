import Accessibility from '@/components/homepage-29/Accessibility';
import Blog from '@/components/homepage-29/Blog';
import CTA from '@/components/homepage-29/CTA';
import FAQ from '@/components/homepage-29/FAQ';
import Hero from '@/components/homepage-29/Hero';
import Services from '@/components/homepage-29/Services';
import Statistics from '@/components/homepage-29/Statistics';
import Testimonials from '@/components/homepage-29/Testimonials';
import WhyUs from '@/components/homepage-29/WhyUs';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Wealth Management - NextSaaS',
};

const Homepage29 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white shadow-2 dark:bg-background-5"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-white dark:bg-background-7">
        <Hero />
        <Statistics />
        <WhyUs />
        <Services />
        <Accessibility />
        <Testimonials />
        <Blog />
        <FAQ />
        <CTA />
      </main>
      <FooterThree className="relative border-t border-stroke-1 dark:border-0" />
    </Fragment>
  );
};

export default Homepage29;
