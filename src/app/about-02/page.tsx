import FinanceIntro from '@/components/aboutpage-02/FinanceIntro';
import OurMission from '@/components/aboutpage-02/OurMission';
import Reviews from '@/components/aboutpage-02/Reviews';
import VisionStatement from '@/components/aboutpage-02/VisionStatement';
import TrustedByUsers from '@/components/homepage-07/TrustedByUsers';
import CTAV2 from '@/components/shared/cta/CTAV2';

import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About Us 02 - NextSaaS',
};

const AboutPage02 = () => {
  return (
    <>
      <NavbarOne
        megaMenuColor="!bg-background-3 dark:!bg-background-7"
        className="dark:border bg-accent/60 dark:border-stroke-7 dark:bg-background-7 backdrop-blur-[25px]"
        btnClassName="btn-secondary dark:btn-accent hover:btn-white dark:hover:btn-white-dark"
      />
      <main className="bg-white dark:bg-background-8">
        <PageHero title="About us 2" heading="About us" link="/about-02" />
        <VisionStatement />
        <TrustedByUsers
          className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
          title="Grow together"
          description="We’re not just a software platform
        we’re a partner in your long-term success."
        />
        <OurMission />
        <TrustedByUsers
          className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]"
          title="Grow together"
          description="We’re not just a software platform
        we’re a partner in your long-term success."
        />
        <FinanceIntro />
        <Reviews />
        <CTAV2
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
    </>
  );
};
AboutPage02.displayName = 'AboutPage02';
export default AboutPage02;
