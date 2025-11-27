import Features from '@/components/homepage-03/Features';
import FeaturesV2 from '@/components/homepage-03/FeaturesV2';
import Hero from '@/components/homepage-03/Hero';
import Integration from '@/components/homepage-03/Integration';
import Pricing from '@/components/homepage-03/Pricing';
import Testimonial from '@/components/homepage-03/Testimonial';
import Understanding from '@/components/homepage-03/Understanding';
import CTAV2 from '@/components/shared/cta/CTAV2';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Chatbot - NextSaaS',
  description: 'Homepage Three of NextSaaS',
};

const HomePage03 = () => {
  return (
    <>
      <NavbarOne
        className="bg-background-2 dark:bg-background-6 backdrop-blur-[15px]"
        btnClassName="btn-primary hover:btn-white-dark dark:hover:btn-white"
      />
      <main className="bg-background-2 dark:bg-background-5 shadow-7">
        <Hero />
        <Features />
        <FeaturesV2 />
        <Pricing />
        <Integration />
        <Understanding />
        <Testimonial badgeText="Reviews" />
        <CTAV2
          className="bg-background-2 dark:bg-background-5"
          ctaHeading=" Experience a free trial today and watch your"
          spanText="business grow."
          ctaDescription="Sign up today to enhance your customer support with our tools and solutions."
          ctaBtnText="Get started"
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
      <FooterOne />
    </>
  );
};

export default HomePage03;
