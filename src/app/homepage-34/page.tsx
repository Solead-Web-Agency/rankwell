import About from '@/components/homepage-01/About';
import Blog from '@/components/homepage-34/Blog';
import Clients from '@/components/homepage-34/Clients';
import Contact from '@/components/homepage-34/Contact';
import CTA from '@/components/homepage-34/CTA';
import Feature from '@/components/homepage-34/Feature';
import Hero from '@/components/homepage-34/Hero';
import Pricing from '@/components/homepage-34/Pricing';
import Services from '@/components/homepage-34/Services';
import Steps from '@/components/homepage-34/Steps';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarFour from '@/components/shared/header/NavbarFour';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Forex Trading - NextSaaS',
};

const Homepage34 = () => {
  return (
    <Fragment>
      <NavbarFour />
      <main>
        <Hero />
        <Clients />
        <Steps />
        <Feature />
        <About />
        <Services />
        <Pricing />
        <ReviewsV1
          badgeColor="badge-green-v2"
          background="lg:pt-[100px] pt-16 lg:pb-[200px] md:pb-[100px] pb-16 bg-background-3 dark:bg-background-9"
          sliderClassName="bg-white dark:bg-background-5"
        />
        <Blog />
        <Contact />
        <CTA />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Homepage34;
