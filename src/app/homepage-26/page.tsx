import Features from '@/components/homepage-26/Features';
import Hero from '@/components/homepage-26/Hero';
import Services from '@/components/homepage-26/Services';
import WhyChooseUs from '@/components/homepage-26/WhyChooseUs';
import WhyChooseUsV2 from '@/components/homepage-26/WhyChooseUsV2';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarFive from '@/components/shared/header/NavbarFive';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pos System - NextSaaS',
};

const Homepage26 = () => {
  return (
    <Fragment>
      <NavbarFive btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent" />
      <main className="bg-background-4 dark:bg-background-9">
        <Hero />
        <WhyChooseUs />
        <Features />
        <Services />
        <WhyChooseUsV2 />
        <ReviewsV1
          badgeColor="badge-green"
          background="bg-background-3 dark:bg-background-8 pb-24 md:pb-36 lg:pb-44 xl:pb-[200px]"
        />
        <CTAV1
          badgeText="Get started"
          className="bg-white dark:bg-background-6"
          ctaHeading="Start messaging smarter today"
          description="Start your free trial today and experience the power of NextSaaS—where efficiency meets innovation."
          descriptionClass="text-secondary/60 dark:text-accent/60 max-w-[530px]"
          btnClass="btn-primary hover:btn-secondary dark:btn-accent dark:hover:btn-primary"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default Homepage26;
