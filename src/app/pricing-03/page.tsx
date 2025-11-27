import Client from '@/components/pricing-02/Client';
import Faq from '@/components/pricing-02/Faq';
import Pricing from '@/components/pricing-03/Pricing';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing 03 - NextSaaS',
};

const Pricing03 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-3 dark:!bg-background-9"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Pricing 03" heading="Pricing 03 " link="/pricing-03" />
        <Pricing />
        <Client />
        <Faq />
        <CTAV1
          className="dark:bg-background-7 bg-accent"
          badgeText="Get started"
          badgeClass="!badge-cyan"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterThree className="dark:!bg-background-6" />
    </Fragment>
  );
};

Pricing03.displayName = 'Pricing03';
export default Pricing03;
