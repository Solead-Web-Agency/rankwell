import Testimonial from '@/components/homepage-03/Testimonial';
import FAQ from '@/components/homepage-12/FAQ';
import CTA from '@/components/our-team-01/CTA';
import Experience from '@/components/our-team-01/Experience';
import Teams from '@/components/our-team-01/Teams';
import FooterThree from '@/components/shared/footer/FooterThree';
import NavbarOne from '@/components/shared/header/NavbarOne';
import PageHero from '@/components/shared/PageHero';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Our Team 01 - NextSaaS',
};

const OurTeam01 = () => {
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
          badgeColor="badge-cyan"
          badgeText="What our users say"
          title="Hear from our customers about their experiences with us"
          classname="pt-20 md:pt-24 lg:pt-[150px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-2 dark:bg-background-5"
        />
        <FAQ className="bg-white dark:bg-background-5 py-[50px] md:py-[70px] lg:py-[85px] xl:py-[100px]" />
        <CTA />
      </main>
      <FooterThree />
    </Fragment>
  );
};

export default OurTeam01;
