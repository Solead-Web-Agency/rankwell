import Blog from '@/components/homepage-05/Blog';
import Faq from '@/components/homepage-05/Faq';
import Feature from '@/components/homepage-05/Feature';
import Hero from '@/components/homepage-05/Hero';
import Integration from '@/components/homepage-05/Integration';
import Number from '@/components/homepage-05/Number';
import Process from '@/components/homepage-05/Process';
import Services from '@/components/homepage-05/Services';
import Team from '@/components/homepage-05/Team';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterOne from '@/components/shared/footer/FooterOne';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Analytics - NextSaaS',
};

const HomePage02 = () => {
  return (
    <>
      <NavbarOne
        className="border-stroke-2 bg-accent/60 dark:bg-background-9 dark:border-stroke-6 border backdrop-blur-[25px]"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent border-0"
      />
      <main className="bg-background-2 dark:bg-background-7">
        <Hero />
        <Feature />
        <Services />
        <Process />
        <Faq />
        <Integration />
        <Number />
        <Team className="dark:bg-background-5 py-[100px] lg:py-[150px] xl:py-[200px]" badgeColor="badge-green" />
        <CTAV1
          className="dark:bg-background-6 bg-white py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]"
          ctaHeading=" Build a complete software using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
        />
        <Blog />
        <FooterOne className="dark:bg-background-8" />
      </main>
    </>
  );
};

export default HomePage02;
