import Features from '@/components/features-01/Features';
import FeaturesV2 from '@/components/features-01/FeaturesV2';
import Team from '@/components/features-01/Team';
import Feature from '@/components/our-services-03/Feature';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import ReviewsV2 from '@/components/shared/reviews/ReviewsV2';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Features 01 - NextSaaS',
};

const Features01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-3 dark:!bg-background-9"
      />

      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Features" heading="Features" link="/features-01" />
        <Features />
        <Team />
        <Feature className="pt-[100px]" btnClassName="btn-accent dark:btn-dark hover:btn-primary border-0 btn-md btn" />
        <FeaturesV2 />
        <ReviewsV2 badgeColor="badge-cyan" sectionSpacingClass="space-y-[70px] py-14 md:py-20 xl:py-[100px]" />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="hidden"
          ctaHeading="Build a complete website using the"
          spanText="assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          btnClass="hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

export default Features01;
