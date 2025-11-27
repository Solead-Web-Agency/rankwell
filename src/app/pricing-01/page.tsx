import Benefits from '@/components/pricing-01/Benefits';
import Contact from '@/components/pricing-01/Contact';
import Features from '@/components/pricing-01/Features';
import Pricing from '@/components/pricing-01/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing 01 - NextSaaS',
};

const Pricing01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Pricing 01" heading="Pricing 01 " link="/pricing-01" />
        <Pricing />
        <Benefits />
        <Features />
        <Contact />
        <CTAV1
          className="dark:bg-background-7 bg-background-3"
          badgeText="Get started"
          badgeClass="!badge-cyan"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterOne />
    </Fragment>
  );
};

Pricing01.displayName = 'Pricing01';
export default Pricing01;
