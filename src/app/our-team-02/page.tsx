import Testimonial from '@/components/homepage-03/Testimonial';
import CTA from '@/components/our-team-01/CTA';
import Experience from '@/components/our-team-02/Experience';
import Features from '@/components/our-team-02/Features';
import Teams from '@/components/our-team-02/Teams';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Team 02 - NextSaaS',
};

const OurTeam02 = () => {
  return (
    <Fragment>
      <NavbarOne
        className="bg-accent/60 border border-stroke-2 dark:border-stroke-6 dark:bg-background-9 backdrop-blur-[25px]"
        btnClassName="btn-primary hover:bg-secondary dark:hover:btn-accent"
      />
      <main className="bg-background-3 dark:bg-background-7">
        <PageHero title="Our Team" heading="Our Team" link="/our-team-01" />
        <Teams />
        <Experience />
        <Testimonial
          badgeText="What our users say"
          title="Hear from our customers about their experiences with us"
          classname="pt-20 md:pt-24 lg:pt-[150px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5"
        />
        <Features />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default OurTeam02;
