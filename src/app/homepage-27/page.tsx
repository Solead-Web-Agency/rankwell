import Blog from '@/components/homepage-27/Blog';
import Features from '@/components/homepage-27/Features';
import FeaturesV2 from '@/components/homepage-27/FeaturesV2';
import FeaturesV3 from '@/components/homepage-27/FeaturesV3';
import Hero from '@/components/homepage-27/Hero';
import Services from '@/components/homepage-27/Services';
import SocialActivity from '@/components/homepage-27/SocialActivity';
import Testimonial from '@/components/homepage-27/Testimonial';
import CTAV1 from '@/components/shared/cta/CTAV1';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import { defaultMetadata } from '@/utils/generateMetaData';
import gradient36 from '@public/images/gradient/gradient-36.png';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Social Media Marketing - NextSaaS',
};

const Homepage27 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-background-2 backdrop-blur-[15px] dark:bg-background-9 dark:border dark:border-stroke-6"
        btnClassName="btn-secondary hover:btn-white dark:btn-accent dark:hover:btn-white-dark"
      />
      <main className="bg-background-2 dark:bg-background-5 overflow-x-hidden">
        <Hero />
        <Services />
        <Features />
        <FeaturesV2 />
        <FeaturesV3 />
        <SocialActivity />
        <Testimonial />
        <Blog />
        <CTAV1
          className="py-[50px] md:py-20 lg:py-28 bg-white dark:bg-background-6"
          badgeText="Get started"
          ctaHeading="Ready to scale your"
          headingClass="ext-secondary dark:text-accent text-heading-4 lg:text-heading-2 max-w-[449px] lg:text-left mx-auto lg:mx-0"
          spanText="property business"
          description="Start your free trial today and see your ideas come to life easily and creatively."
          ctaBtnText="Get started"
        />
      </main>
      <FooterThree
        className="relative overflow-hidden rounded-t-[20px]"
        gradientClassName="!block size-[600px] md:size-[1220px] rotate-[-38deg] right-[-321px]  md:right-[-693px] top-[-237px] md:top-[-485px] select-none pointer-events-none"
        bgGradientImg={gradient36}
      />
    </Fragment>
  );
};

export default Homepage27;
