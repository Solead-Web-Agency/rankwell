import CTA from '@/components/homepage-10/CTA';
import Features from '@/components/homepage-10/Features';
import Hero from '@/components/homepage-10/Hero';
import Integration from '@/components/homepage-10/Integration';
import SelectUs from '@/components/homepage-10/SelectUs';
import Services from '@/components/homepage-10/Services';
import Testimonial from '@/components/homepage-10/Testimonial';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'New Cyber Security - NextSaaS',
};

const Homepage10 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-background-2 backdrop-blur-[15px] dark:border dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary dark:btn-accent hover:btn-primary"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <Hero />
        <Features />
        <SelectUs />
        <Services />
        <Integration />
        <Testimonial />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default Homepage10;
