import Feature from '@/components/our-services-03/Feature';
import Integration from '@/components/our-services-03/Integration';
import Services from '@/components/our-services-03/Services';
import UseCases from '@/components/our-services-03/UseCases';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Services 03 - NextSaaS',
};

const OurServices03 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Services 03" heading="Our Services" link="/our-services-03" />
        <Services />
        <Integration />
        <UseCases />
        <Feature
          btnClassName="btn btn-md hover:btn-primary btn-white"
          className="lg:py-[200px] py-[100px] bg-background-3 dark:bg-background-7"
        />
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

export default OurServices03;
