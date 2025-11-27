import Clients from '@/components/homepage-38/Clients';
import CTA from '@/components/homepage-38/CTA';
import Faq from '@/components/homepage-38/Faq';
import HeaderWrapper from '@/components/homepage-38/HeaderWrapper';
import Hero from '@/components/homepage-38/Hero';
import HowItWorks from '@/components/homepage-38/HowItWorks';
import Services from '@/components/homepage-38/Services';
import Templates from '@/components/homepage-38/Templates';
import Testimonial from '@/components/homepage-38/Testimonial';
import FooterOne from '@/components/shared/footer/FooterOne';
import VideoModal from '@/components/shared/VideoModal';
import ModalProvider from '@/context/ModalContext';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Resume Builder - NextSaaS',
};

const Homepage38 = () => {
  return (
    <Fragment>
      <ModalProvider>
        <HeaderWrapper />
        <main className="bg-white">
          <Hero />
          <Clients />
          <Services />
          <Templates />
          <HowItWorks />
          <Testimonial />
          <Faq />
          <CTA />
          <VideoModal />
        </main>
        <FooterOne defaultTheme="light" />
      </ModalProvider>
    </Fragment>
  );
};

export default Homepage38;
