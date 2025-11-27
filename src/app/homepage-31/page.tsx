import Features from '@/components/homepage-31/Features';
import FeaturesV2 from '@/components/homepage-31/FeaturesV2';
import Hero from '@/components/homepage-31/Hero';
import SuccessStats from '@/components/homepage-31/SuccessStats';
import WhyUs from '@/components/homepage-31/WhyUs';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarTwo from '@/components/shared/header/NavbarTwo';
import ReviewsV1 from '@/components/shared/reviews/ReviewsV1';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Time Tracking Software - NextSaaS',
};

const Homepage31 = () => {
  return (
    <Fragment>
      <NavbarTwo
        className="bg-accent/10 dark:bg-background-7/40 backdrop-blur-[25px] max-md:!top-8"
        btnClassName="btn-green hover:btn-white dark:hover:btn-white-dark"
      />
      <main className="bg-background-2 dark:bg-background-6">
        <Hero />
        <Features />
        <SuccessStats />
        <WhyUs />
        <FeaturesV2 />
        <ReviewsV1
          btnClassName="btn btn-secondary btn-lg md:btn-xl dark:btn-transparent hover:btn-green block md:inline-block w-[90%] md:w-auto mx-auto"
          badgeColor="badge-green-v2"
          background="bg-background-4 dark:bg-background-6 pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-20 md:pb-28 lg:pb-36 xl:pb-[200px]"
        />
        <CTAV1
          className="bg-white dark:bg-background-6"
          badgeText="Get started"
          badgeClass="!badge-green"
          ctaHeading="Start tracking smarter today"
          description="Start your free trial today and experience the power of NextSaaS—where efficiency meets innovation."
          descriptionClass="text-secondary/60"
          btnClass="btn-green hover:btn-white-dark"
          ctaBtnText="Get started"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Homepage31;
