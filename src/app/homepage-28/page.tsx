import Testimonial from '@/components/homepage-03/Testimonial';
import CRMFeatures from '@/components/homepage-28/CRMFeatures';
import Faq from '@/components/homepage-28/Faq';
import Hero from '@/components/homepage-28/Hero';
import HowItWork from '@/components/homepage-28/HowItWork';
import Integration from '@/components/homepage-28/Integration';
import Pricing from '@/components/homepage-28/Pricing';
import SelectUs from '@/components/homepage-28/SelectUs';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Nuvexa CRM - NextSaaS',
};
const HomePage28 = () => {
  return (
    <>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 backdrop-blur-[25px] dark:bg-background-9"
        btnClassName="btn-primary hover:btn-white dark:hover:btn-accent"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <Hero />
        <SelectUs />
        <CRMFeatures />
        <Pricing />
        <Integration />
        <HowItWork />
        <Testimonial
          badgeText="Reviews"
          badgeColor="!badge-primary"
          title="Hear from our customers about their experiences with us"
          classname="pt-14 md:pt-16 lg:pt-[88px] bg-background-3 dark:bg-background-7 xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]"
        />
        <Faq />
        <CTAV1
          className="bg-background-2 dark:bg-background-5"
          badgeText="Finance"
          badgeClass="!badge-primary"
          ctaHeading="Ready to transform your business with NexSaas CRM"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          descriptionClass="text-secondary/60"
          btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree />
    </>
  );
};

export default HomePage28;
