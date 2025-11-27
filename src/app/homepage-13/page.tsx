import Benefits from '@/components/homepage-13/Benefits';
import CaseStudy from '@/components/homepage-13/CaseStudy';
import FAQ from '@/components/homepage-13/FAQ';
import Feature from '@/components/homepage-13/Feature';
import FeatureV2 from '@/components/homepage-13/FeatureV2';
import Hero from '@/components/homepage-13/Hero';
import Integration from '@/components/homepage-13/Integration';
import Services from '@/components/homepage-13/Services';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Messaging Platform - NextSaaS',
};

const Homepage13 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 dark:border-stroke-6 backdrop-blur-[25px] bg-accent/60 dark:bg-background-9 !top-3.5"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-4 dark:bg-background-9">
        <Hero />
        <Feature />
        <Benefits />
        <Services />
        <FeatureV2 />
        <Integration />
        <CaseStudy />
        <FAQ />
        <ReviewsV1 badgeColor="badge-cyan" background="dark:bg-background-6 pb-24 md:pb-36 lg:pb-44 xl:pb-[200px]" />
        <CTAV1
          className="bg-background-2 dark:bg-background-7"
          badgeText="Get started"
          badgeClass="!badge-cyan"
          ctaHeading="Start messaging smarter today"
          description="Start your free trial today and experience the power of NextSaaS—where efficiency meets innovation."
          descriptionClass="text-secondary/60 dark:text-accent/60 max-w-[530px]"
          btnClass="btn-primary hover:btn-secondary dark:btn-accent dark:hover:btn-primary"
          ctaBtnText="Get started"
        />
      </main>
      <FooterOne className='dark:!bg-background-8"' />
    </Fragment>
  );
};

export default Homepage13;
