import Testimonial from '@/components/homepage-03/Testimonial';
import Pricing from '@/components/homepage-07/Pricing';
import ContactUs from '@/components/homepage-14/ContactUs';
import CTA from '@/components/homepage-15/CTA';
import About from '@/components/homepage-21/About';
import Features from '@/components/homepage-21/Features';
import Hero from '@/components/homepage-21/Hero';
import Team from '@/components/homepage-21/Team';
import WhyChooseUs from '@/components/homepage-21/WhyChooseUs';
import FooterFour from '@/components/shared/footer/FooterFour';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Personal Finance - NextSaaS',
};
const HomePage21 = () => {
  return (
    <>
      <NavbarOne
        className="backdrop-blur-[15px] bg-background-2 dark:bg-background-6"
        btnClassName="btn-secondary hover:btn-primary dark:btn-accent"
      />
      <main className="bg-white dark:bg-background-7">
        <Hero />
        <About />
        <Features />
        <WhyChooseUs />
        <Testimonial
          badgeText="What our users say"
          title="Hear from our customers about their experiences with us"
          classname="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[90px] xl:pb-[100px] xl:pt-[100px]"
        />
        <Team />
        <Pricing
          className="pb-16 pt-16 md:pb-20 md:pt-20 lg:pb-[90px] lg:pt-[90px] xl:pb-[100px] xl:pt-[100px]"
          containerClassName="bg-background-2 dark:bg-background-5 max-w-[1460px] mx-4 sm:mx-auto py-16 md:py-20 xl:py-[120px] lg:px-[64px] rounded-[20px]"
          badgeClassName="badge-green"
        />
        <ContactUs />
        <CTA />
      </main>
      <FooterFour />
    </>
  );
};

export default HomePage21;
