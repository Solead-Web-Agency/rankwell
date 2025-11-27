import Blog from '@/components/homepage-35/Blog';
import CTA from '@/components/homepage-35/CTA';
import Features from '@/components/homepage-35/Features';
import Hero from '@/components/homepage-35/Hero';
import Services from '@/components/homepage-35/Services';
import ServicesV2 from '@/components/homepage-35/ServicesV2';
import Testimonial from '@/components/homepage-35/Testimonial';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Data Visualization Software - NextSaaS',
};

const Homepage35 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-white dark:bg-black">
        <Hero />
        <Services />
        <ServicesV2 />
        <Features />
        <Testimonial />
        <Blog />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Homepage35;
