import CTA from '@/components/homepage-16/CTA';
import Feature from '@/components/homepage-16/Feature';
import FeatureV2 from '@/components/homepage-16/FeatureV2';
import Hero from '@/components/homepage-16/Hero';
import Integration from '@/components/homepage-16/Integration';
import Pricing from '@/components/homepage-16/Pricing';
import Publish from '@/components/homepage-16/Publish';
import Steps from '@/components/homepage-16/Steps';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'App Builder - NextSaaS',
};
const HomePage16 = () => {
  return (
    <>
      <NavbarOne
        className="bg-background-2 backdrop-blur-[15px] dark:border dark:border-stroke-6 dark:bg-background-9"
        megaMenuColor="dark:!bg-background-9 !bg-background-2"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="dark:bg-background-6">
        <Hero />
        <Integration />
        <Feature />
        <Steps />
        <FeatureV2 />
        <ReviewsV3
          className="bg-background-3 dark:bg-background-5"
          badgeText="Customer Success"
          badgeColor="badge-green"
          title="Real apps. Real results"
          description="Real apps. Real results Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership."
          buttonText="View all reviews"
        />
        <Pricing />
        <Publish />
        <CTA />
      </main>
      <FooterOne />
    </>
  );
};

export default HomePage16;
