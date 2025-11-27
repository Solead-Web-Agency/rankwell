import Features from '@/components/our-services-01/Features';
import Services from '@/components/our-services-02/Services';
import ServicesV2 from '@/components/our-services-02/ServicesV2';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Services 02 - NextSaaS',
};

const OurServices02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 backdrop-blur-[25px] dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary dark:btn-accent hover:btn-primary"
        megaMenuColor="!bg-background-3 dark:!bg-background-8"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Our Services 2" heading="Our Services" link="/our-services-02" />
        <Services />
        <ServicesV2 />
        <Features
          className="lg:pt-[200px] lg:pb-[100px]"
          badgeClassName="badge-green-v2"
          btnClassName="btn btn-xl dark:btn-transparent hover:btn-primary btn-white"
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

export default OurServices02;
