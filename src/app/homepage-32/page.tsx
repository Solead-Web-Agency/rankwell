import Blog from '@/components/homepage-32/Blog';
import CTA from '@/components/homepage-32/CTA';
import Feature from '@/components/homepage-32/Feature';
import FeatureV2 from '@/components/homepage-32/FeatureV2';
import FeatureV3 from '@/components/homepage-32/FeatureV3';
import Hero from '@/components/homepage-32/Hero';
import Highlights from '@/components/homepage-32/Highlights';
import NewsLetter from '@/components/homepage-32/NewsLetter';
import Process from '@/components/homepage-32/Process';
import Services from '@/components/homepage-32/Services';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Data Visualization Software - NextSaaS',
};

const Homepage32 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-background-2 dark:bg-background-6"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-white dark:bg-background-6">
        <Hero />
        <Services />
        <Highlights />
        <Feature />
        <FeatureV2 />
        <Process />
        <FeatureV3 />
        <ReviewsV1
          badgeColor="hidden"
          background="lg:py-[150px] sm:py-[100px] py-20 bg-background-2 dark:bg-background-6"
          sliderClassName="bg-white dark:bg-background-5"
        />
        <CTA />
        <Blog />
        <NewsLetter />
      </main>
      <FooterFour className="border-t border-t-[#303032] dark:border-t-0 z-20" />
    </Fragment>
  );
};

export default Homepage32;
