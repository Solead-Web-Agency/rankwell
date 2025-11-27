import Reviews from '@/components/homepage-09/Reviews';
import Client from '@/components/pricing-02/Client';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import Integration from '@/components/testimonial-01/Integration';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Testimonial Page-01 - NextSaaS',
};

const TestimonialOnePage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-4 dark:!bg-background-9"
      />
      <main className="bg-background-1 dark:bg-background-6">
        <PageHero title="Testimonial" heading="Testimonial" link="/testimonial-01" />
        <Reviews
          badgeClass="!badge-green"
          className="pt-[100px] pb-[75px] md:pb-[100px] lg:pb-[200px] bg-background-1 dark:bg-background-6"
        />
        <Client />
        <Integration />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="badge-green"
          badgeText="Get started"
          ctaHeading="Build a complete website using the assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterThree />
    </>
  );
};
TestimonialOnePage.displayName = 'TestimonialOnePage';
export default TestimonialOnePage;
