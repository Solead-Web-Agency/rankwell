import ProcessFaq from '@/components/process-01/ProcessFaq';
import ProcessStep from '@/components/process-01/ProcessStep';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Process 01 - NextSaaS',
};

const Process01 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-accent dark:!bg-background-9"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero
          title="Process"
          className="pt-24 md:pt-36 lg:pt-40 xl:pt-[200px]"
          heading="Process "
          link="/process-01"
        />
        <ProcessStep />
        <ProcessFaq />
        <CTAV1
          className="dark:bg-background-5 bg-white"
          badgeText="Get started"
          badgeClass="!badge-yellow-v2"
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

Process01.displayName = 'Process01';
export default Process01;
