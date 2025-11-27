import Benefits from '@/components/homepage-12/Benefits';
import FAQ from '@/components/homepage-12/FAQ';
import Feature from '@/components/homepage-12/Feature';
import FeatureV2 from '@/components/homepage-12/FeatureV2';
import FeatureV3 from '@/components/homepage-12/FeatureV3';
import Hero from '@/components/homepage-12/Hero';
import Testimonial from '@/components/homepage-12/Testimonial';
import WhyUs from '@/components/homepage-12/WhyUs';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Lead Capture - NextSaaS',
};

const Homepage12 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 backdrop-blur-[25px] dark:border-stroke-6 dark:bg-background-9"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7 overflow-x-hidden">
        <Hero />
        <Feature />
        <FeatureV2 />
        <FeatureV3 />
        <WhyUs />
        <Benefits />
        <Testimonial />
        <FAQ />
        <CTAV1
          className="bg-background-2 dark:bg-background-7"
          badgeText="Get started"
          badgeClass="!badge-cyan"
          ctaHeading="Ready to capture more leads & convert faster"
          description="Drive more engagement. Improve deliverability. Automate your emails."
          descriptionClass="text-secondary/60"
          btnClass="hover:btn-secondary dark:hover:btn-white"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default Homepage12;
