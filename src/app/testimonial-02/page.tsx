import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import Experience from '@/components/testimonial-02/Experience';
import Integration from '@/components/testimonial-02/Integration';
import TestimonialMarquee from '@/components/testimonial-02/TestimonialMarquee';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Testimonial Page-02 - NextSaaS',
};

const TestimonialTwoPage = () => {
  return (
    <>
      <NavbarOne
        className="border border-stroke-2 bg-accent/60 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:btn-secondary dark:hover:btn-accent"
        megaMenuColor="!bg-background-4 dark:!bg-background-9"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Testimonial-02" heading="Testimonial-02" link="/testimonial-02" />
        <TestimonialMarquee />
        <Experience />
        <Integration />
        <CTAV1
          className="dark:bg-background-6 bg-white"
          badgeClass="badge-cyan"
          badgeText="Get started"
          ctaHeading="Build a complete website using the"
          spanText="assistance"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
          btnClass="hover:btn-secondary dark:hover:btn-accent"
        />
      </main>
      <FooterThree />
    </>
  );
};
TestimonialTwoPage.displayName = 'TestimonialTwoPage';
export default TestimonialTwoPage;
