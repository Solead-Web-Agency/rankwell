import Integration from '@/components/integration-02/Integration';
import Process from '@/components/integration-02/Process';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integration 02 - NextSaaS',
};

const Integration02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-3 dark:!bg-background-9"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero
          title="Integration"
          className="bg-background-2 dark:bg-background-6"
          heading="Integration "
          link="/integration-02"
        />
        <Integration />
        <Process />
        <CTAV1
          className="dark:bg-background-8 bg-white"
          badgeText="Get started"
          badgeClass="!badge-green"
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

Integration02.displayName = 'Integration02';
export default Integration02;
