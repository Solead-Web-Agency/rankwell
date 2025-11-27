import Features from '@/components/our-services-01/Features';
import Pricing from '@/components/our-services-01/Pricing';
import Services from '@/components/our-services-01/Services';
import Solutions from '@/components/our-services-01/Solutions';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Services 01 - NextSaaS',
};

const OurServices01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-3 dark:!bg-background-7"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Our Services" heading="Our Services" link="/our-services-01" />
        <Services />
        <Features />
        <Solutions />
        <Pricing />
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

export default OurServices01;
