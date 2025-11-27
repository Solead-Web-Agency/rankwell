import ContactUs from '@/components/homepage-14/ContactUs';
import CTA from '@/components/homepage-14/CTA';
import Eligibility from '@/components/homepage-14/Eligibility';
import Feature from '@/components/homepage-14/Feature';
import Hero from '@/components/homepage-14/Hero';
import Solutions from '@/components/homepage-14/Solutions';
import Steps from '@/components/homepage-14/Steps';
import WhyChooseNextSaas from '@/components/homepage-14/WhyChooseNextSaas';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import ReviewsV3 from '@/components/shared/reviews/ReviewsV3';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Mortgage Services - NextSaaS',
};
const HomePage14 = () => {
  return (
    <>
      <NavbarOne
        className="bg-white/60 backdrop-blur-[25px] top-6 dark:border dark:border-stroke-7 dark:bg-background-7"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-background-2 dark:bg-background-5">
        <Hero />
        <Solutions />
        <WhyChooseNextSaas />
        <Steps />
        <Feature />
        <Eligibility />
        <ReviewsV3
          title="What our clients say."
          description="Nextsaas delivered our entire platform ahead of schedule—flawless execution and real partnership."
        />
        <ContactUs />
        <CTA />
      </main>
      <FooterThree />
    </>
  );
};

export default HomePage14;
