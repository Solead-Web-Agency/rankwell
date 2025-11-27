import Audit from '@/components/homepage-33/Audit';
import Blog from '@/components/homepage-33/Blog';
import CTA from '@/components/homepage-33/CTA';
import Hero from '@/components/homepage-33/Hero';
import Results from '@/components/homepage-33/Results';
import Services from '@/components/homepage-33/Services';
import Steps from '@/components/homepage-33/Steps';
import Testimonial from '@/components/homepage-33/Testimonial';
import WhyUs from '@/components/homepage-33/WhyUs';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Digital Marketing - NextSaaS',
};

const Homepage33 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-white dark:border border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-white dark:hover:btn-white-dark dark:btn-accent"
      />
      <main className="bg-white dark:bg-black">
        <Hero />
        <Services />
        <Steps />
        <WhyUs />
        <Results />
        <Testimonial />
        <Audit />
        <Blog />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Homepage33;
