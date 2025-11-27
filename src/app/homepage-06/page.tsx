import Testimonial from '@/components/homepage-03/Testimonial';
import Blog from '@/components/homepage-05/Blog';
import About from '@/components/homepage-06/About';
import Faq from '@/components/homepage-06/Faq';
import Hero from '@/components/homepage-06/Hero';
import Integration from '@/components/homepage-06/Integration';
import Services from '@/components/homepage-06/Services';
import CTAV2 from '@/components/shared/cta/CTAV2';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Financial Application - NextSaaS',
  description:
    'Discover NextSaaS, a comprehensive financial application designed to streamline your business finances, enhance productivity, and drive growth.',
};

const HomePage06 = () => {
  return (
    <>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[20px] dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent border-0"
      />
      <main className="dark:bg-background-7 overflow-x-hidden bg-white">
        <Hero />
        <Services />
        <About />
        <Integration />
        <Faq />
        <Testimonial
          badgeText="Review"
          badgeColor="badge-yellow-v2"
          title="Hear from our customers about their
experiences with us"
          classname="py-[112px] bg-background-2 dark:bg-background-5"
        />
        <Blog badgeClass="badge-yellow" />
        <CTAV2
          className="bg-background-2 dark:bg-background-5"
          ctaHeading="Experience a free trial today and watch your business grow."
          ctaDescription="Sign up today to enhance your customer support with our tools and solutions."
          ctaBtnText="7- day free trial"
          btnClass="btn-xl"
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
      <FooterThree className="dark:bg-background-6" />
    </>
  );
};

export default HomePage06;
