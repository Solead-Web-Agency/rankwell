import Blog from '@/components/homepage-07/Blog';
import Features from '@/components/homepage-07/Features';
import FinanceIntro from '@/components/homepage-07/FinanceIntro';
import Hero from '@/components/homepage-07/Hero';
import Integration from '@/components/homepage-07/Integration';
import Pricing from '@/components/homepage-07/Pricing';
import TrustedByUsers from '@/components/homepage-07/TrustedByUsers';
import WhyChooseUs from '@/components/homepage-07/WhyChooseUs';
import CTAV2 from '@/components/shared/cta/CTAV2';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Payment Solution - NextSaaS',
};

const Homepage07 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 dark:bg-background-9 backdrop-blur-[25px] border border-stroke-2 dark:border-stroke-6"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-5">
        <Hero />
        <TrustedByUsers
          title="Countless users trust us completely."
          description="Boost your insights that help you to grow business"
          className="pb-24 lg:pb-[170px] bg-background-4 dark:bg-background-5"
        />
        <Features className="pt-24 lg:pt-[120px] pb-24 md:pb-32 lg:pb-[170px]" />
        <WhyChooseUs />
        <Pricing />
        <FinanceIntro />
        <Integration />
        <Blog />
        <CTAV2
          className="bg-background-1 dark:bg-background-6"
          ctaHeading="Experience a free trial today and watch your business grow."
          ctaDescription="Sign up today to enhance your customer support with our tools and solutions."
          ctaBtnText="7- day free trial"
          ctaCheckListData={[
            {
              id: '1',
              text: 'No credit card required',
            },
            {
              id: '2',
              text: 'free for 30 day trial.',
            },
            {
              id: '3',
              text: 'Money back guarantee.',
            },
          ]}
        />
      </main>

      <FooterThree />
    </Fragment>
  );
};

export default Homepage07;
